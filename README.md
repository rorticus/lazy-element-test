# Lazy Custom Elements

Currently with Dojo's custom elements, you need to manually import each element that you want to use on a page. 
This can be bothersome if you are using something like Dojo Widgets which consists of many widgets.

The goal of this POC was to bundle @dojo/widgets in such a way as to be able to lazily import custom element bundles as they are used, 
rather than manually up front.

[This example is hosted here.](https://lazy-element-test.now.sh/)

## What's Different

This POC required changes to @dojo/framework, @dojo/webpack-contrib, and @dojo/cli-build-widget

### @dojo/framework

Currently, @dojo/framework relies on the custom element descriptor to be a property of the widget constructor. This
will not work when lazily loading widgets as the widget constructor is not available when the custom element is registered.

As such, `registerCustomElement.ts` must be updated to accept the custom element descriptor as an argument, rather than read 
it from the widget constructor.

Additionally, the widget constructor can no longer be passed in as an argument, and instead is replaced with a function that 
returns a promise to a widget constructor.

You can see these simple changes in [the relavant pull request](https://github.com/dojo/framework/compare/master...rorticus:ce-loader).

### @dojo/webpack-contrib

This is where the magic happens. Currently, webpack-contrib contains a Custom Element Transformer that is used to take 
the source files and modify them to set the custom element descriptor onto to the widget constructor. This is where attribute/property discovery takes
place for custom elements. Now, however, we need the custom element descriptors _before_ the widget constructor is available and
so we don't even need to modify the original source at all with a transformer.

Instead of modifying the original source with a transformer, a new loader is created that will discover all of the widget
properties once, and construct a template that will be used as the entrypoint for the bundle.  This new loader, `ElementLoader`,
creates a TypeScript program and walks the AST for each widget being bundled into a custom element. From this it discovers the
attributes/properties and is able to create the custom element descriptor. A call to register the custom element is then output 
to the template which includes the descriptor and a call to webpack's dynamic imports to actually load the widget when needed.

You can see these changes in [this pull request](https://github.com/dojo/webpack-contrib/compare/master...rorticus:ce-loader).

### @dojo/cli-build-widget

Currently, each widget is built as a separate .js and .css file. These files **must** be manually imported in order to use the widget.
Now, however, there is only a single entrypoint, the bootstrap file, that must be loaded. The bootstrap file is a simple template
that is loaded with the element loader from webpack-contrib and thus contains a call to register each custom element that is being built.

You can see these changes in [this pull request](https://github.com/dojo/cli-build-widget/compare/master...rorticus:ce-loader).
