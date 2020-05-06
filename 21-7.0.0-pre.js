/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpdojo_widgets_custom_elements=window.dojoWebpackJsonpdojo_widgets_custom_elements||[]).push([[21,39,52],{177:function(e,t,a){e.exports={" _key":"@dojo/widgets/text-area",root:"text-area-m__root__1NUZh",wrapper:"text-area-m__wrapper__1Nkrq",input:"text-area-m__input__3libn",inputWrapper:"text-area-m__inputWrapper__1LN1m",disabled:"text-area-m__disabled__BN85r",focused:"text-area-m__focused__1Pb_L",readonly:"text-area-m__readonly__21ZTb",required:"text-area-m__required__1NXja",invalid:"text-area-m__invalid__2jMTq",valid:"text-area-m__valid__3mRCW"}},21:function(e,t,a){"use strict";a.r(t),a.d(t,"Label",function(){return o});var n=a(5),i=a(76),r=a(73),l=a(78),s=a(74);const o=Object(n.a)({theme:r.a}).properties()(function({properties:e,id:t,children:a,middleware:{theme:r}}){const{aria:o={},active:d,disabled:c,focused:u,forId:_,hidden:m,readOnly:p,required:v,secondary:b,valid:f,widgetId:h=`label-${t}`}=e(),y=r.classes(l);return Object(n.m)("label",Object.assign({},Object(s.b)(o),{id:h,classes:[r.variant(),y.root,c?y.disabled:null,u?y.focused:null,!0===f?y.valid:null,!1===f?y.invalid:null,p?y.readonly:null,v?y.required:null,b?y.secondary:null,d?y.active:null,m?i.visuallyHidden:null],for:_}),a())});t.default=o},23:function(e,t,a){"use strict";a.r(t);var n=a(75),i=a(5),r=a(81);const l=Object(i.a)({theme:n.a}).properties();t.default=l(function({properties:e,middleware:{theme:t}}){const{text:a,valid:n}=e(),l=t.classes(r);return Object(i.m)("div",{key:"root",classes:[t.variant(),l.root,!0===n?l.valid:null,!1===n?l.invalid:null]},a&&Object(i.m)("p",{key:"text",classes:l.text,"aria-hidden":"true",title:a},a))})},61:function(e,t,a){"use strict";a.r(t),a.d(t,"TextArea",function(){return m});var n=a(5),i=a(21),r=a(74),l=a(177),s=a(78),o=a(23),d=a(77),c=a(73),u=a(79),_=a(98);const m=Object(n.a)({icache:Object(d.a)(),theme:c.a,focus:u.a,validity:_.a}).properties().children()(function({id:e,middleware:{icache:t,theme:a,focus:d,validity:c},properties:u,children:_}){const m=a.classes(l);function p(e,t){let a,{valid:n,onValidate:i}=u();"object"==typeof n&&(a=n.message,n=n.valid),e===n&&t===a||i&&i(e,t)}const{aria:v={},columns:b=20,disabled:f,widgetId:h=`textarea-${e}`,maxLength:y,minLength:g,name:j,placeholder:O,readOnly:w,required:x,rows:k=2,initialValue:$,wrapText:q,theme:V,classes:W,labelHidden:L,helperText:P,onValidate:T}=u();let{value:U}=u();if(void 0===U){U=t.get("value"),$!==t.get("initialValue")&&(t.set("value",$),t.set("initialValue",$),U=$)}T&&function(){const{customValidator:e,value:a=t.get("value")||""}=u(),n=t.getOrSet("dirty",!1);if(""===a&&!n)return void p(void 0,"");t.set("dirty",!0);let{valid:i,message:r=""}=c.get("input",a||"");if(i&&e){const t=e(a);t&&(i=t.valid,r=t.message||"")}p(i,r)}();const{valid:C,message:N}=function(){const{valid:e={valid:void 0,message:void 0}}=u();return"boolean"==typeof e?{valid:e,message:void 0}:{valid:e.valid,message:e.message}}(),D=!1===C&&N||P,E=d.isFocused("input"),[H]=_();return Object(n.m)("div",{key:"root",classes:[a.variant(),m.root]},Object(n.m)("div",{key:"wrapper",classes:[m.wrapper,f?m.disabled:null,!1===C?m.invalid:null,!0===C?m.valid:null,w?m.readonly:null,x?m.required:null,E?m.focused:null]},H?Object(n.m)(i.default,{theme:a.compose(s,l,"label"),classes:W,disabled:f,valid:C,readOnly:w,required:x,hidden:L,forId:h,focused:E,active:!!U||E},H):null,Object(n.m)("div",{classes:m.inputWrapper},Object(n.m)("textarea",Object.assign({id:h,key:"input"},Object(r.b)(v),{classes:m.input,cols:`${b}`,disabled:f,focus:d.shouldFocus,"aria-invalid":!1===C?"true":null,maxlength:y?`${y}`:null,minlength:g?`${g}`:null,name:j,placeholder:O,readOnly:w,"aria-readonly":w?"true":null,required:x,rows:`${k}`,value:U,wrap:q,onblur:()=>{const{onBlur:e}=u();e&&e()},onfocus:()=>{const{onFocus:e}=u();e&&e()},oninput:e=>{const{onValue:a}=u();e.stopPropagation();const n=e.target.value;t.set("value",n),a&&a(n)},onkeydown:e=>{const{onKeyDown:t}=u();e.stopPropagation(),t&&t(e.which,()=>{e.preventDefault()})},onkeyup:e=>{const{onKeyUp:t}=u();e.stopPropagation(),t&&t(e.which,()=>{e.preventDefault()})},onclick:()=>{const{onClick:e}=u();e&&e()},onpointerenter:()=>{const{onOver:e}=u();e&&e()},onpointerleave:()=>{const{onOut:e}=u();e&&e()}})))),Object(n.m)(o.default,{text:D,valid:C,classes:W,theme:V}))});t.default=m},73:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(5),i=a(75);const r=Object(n.a)({coreTheme:i.a});function l(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function s(e){return e&&e.hasOwnProperty("variant")}const o=r(function({middleware:{coreTheme:e},properties:t}){return Object.assign({compose:(a,n,i)=>{const r=t().theme,o=a[" _key"],d=n[" _key"],c=Object.keys(a).reduce((e,t)=>" _key"===t?e:(i&&!e[`${i}${l(t)}`]&&(e[`${i}${l(t)}`]=" "),n[t]||(e[t]=" "),e),{" _key":d}),u=e.classes(c),_=e.classes(n);let m=e.classes(a);if(i){const e=Object.keys(Object.assign({},u,_)).reduce((e,t)=>{if(0===t.indexOf(i)&&t!==i){const a=function(e){return`${e.charAt(0).toLowerCase()}${e.slice(1)}`}(t.replace(i,""));!_[t]&&u[t]&&u[t].trim()&&(e[a]=`${m[a]} ${u[t].trim()}`),_[t]&&(e[a]=_[t])}return e},{});return m=Object.assign({},m,e),s(r)?{theme:{theme:Object.assign({},r.theme.theme,{[o]:m}),variants:r.theme.variants},variant:r.variant}:Object.assign({},r,{[o]:m})}const p=Object.keys(m).reduce((e,t)=>{if(" _key"===t)return e;const a=_[t]&&_[t].trim();return _[t]?e[t]=a:u[t]&&u[t].trim()&&(e[t]=`${e[t]} ${u[t].trim()}`),e},Object.assign({},m));return s(r)?{theme:{theme:Object.assign({},r.theme.theme,{[o]:p}),variants:r.theme.variants},variant:r.variant}:Object.assign({},r,{[o]:p})}},e)});t.a=o},74:function(e,t,a){"use strict";var n;function i(e){return Object.keys(e).reduce((t,a)=>(t[`aria-${a.toLowerCase()}`]=e[a],t),{})}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i}),function(e){e[e.Down=40]="Down",e[e.End=35]="End",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Home=36]="Home",e[e.Left=37]="Left",e[e.PageDown=34]="PageDown",e[e.PageUp=33]="PageUp",e[e.Right=39]="Right",e[e.Space=32]="Space",e[e.Tab=9]="Tab",e[e.Up=38]="Up"}(n||(n={}))},76:function(e,t,a){e.exports={" _key":"@dojo/widgets/base",visuallyHidden:"base-m__visuallyHidden__1AeWe",focusable:"base-m__focusable__1_qAN",hidden:"base-m__hidden__3QddU"}},78:function(e,t,a){e.exports={" _key":"@dojo/widgets/label",root:"label-m__root__3Kk7r",readonly:"label-m__readonly__2pxUq",invalid:"label-m__invalid__1CZyi",valid:"label-m__valid__2hdFV",required:"label-m__required__2WVo7",disabled:"label-m__disabled__34MEb",focused:"label-m__focused__ISy0H",secondary:"label-m__secondary__37QWK",active:"label-m__active__3MoIi"}},81:function(e,t,a){e.exports={" _key":"@dojo/widgets/helper-text",root:"helper-text-m__root__3s_po",text:"helper-text-m__text__dNGJX",valid:"helper-text-m__valid__18VWN",invalid:"helper-text-m__invalid__1CrCV"}}}]);
//# sourceMappingURL=21-7.0.0-pre.js.map