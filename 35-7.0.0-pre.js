/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpdojo_widgets_custom_elements=window.dojoWebpackJsonpdojo_widgets_custom_elements||[]).push([[35,44],{166:function(e,t,n){e.exports={" _key":"@dojo/widgets/raised-button"}},29:function(e,t,n){"use strict";n.r(t),n.d(t,"Button",function(){return i});var o=n(79),s=n(5),r=n(74),a=n(73),c=n(97);const i=Object(s.a)({focus:o.b,theme:a.b}).properties()(function({children:e,id:t,middleware:{focus:n,theme:o},properties:a}){const{aria:i={},disabled:u,widgetId:d,name:p,pressed:b,type:l="button",value:m,onClick:f,onOut:_,onOver:h,onDown:j,onUp:O,onBlur:w,onFocus:g}=a(),v=o.classes(c),y=d||`button-${t}`;return Object(s.m)("button",Object.assign({classes:[o.variant(),v.root,u?v.disabled:null,b?v.pressed:null],disabled:u,id:y,focus:n.shouldFocus(),name:p,type:l,value:m,onblur:()=>w&&w(),onclick:e=>{e.stopPropagation(),f&&f()},onfocus:()=>g&&g(),onpointerenter:()=>h&&h(),onpointerleave:()=>_&&_(),onpointerdown:()=>j&&j(),onpointerup:()=>O&&O()},Object(r.b)(i),{"aria-pressed":"boolean"==typeof b?b.toString():null}),Object(s.m)("span",{classes:v.label},e()))});t.default=i},54:function(e,t,n){"use strict";n.r(t),n.d(t,"RaisedButton",function(){return i});var o=n(73),s=n(5),r=n(29),a=n(166),c=n(97);const i=Object(s.a)({theme:o.a}).properties()(function({properties:e,children:t,middleware:{theme:n}}){const o=e();return Object(s.m)(r.default,Object.assign({},o,{theme:n.compose(c,a)}),t())});t.default=i},73:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var o=n(5),s=n(75);const r=Object(o.a)({coreTheme:s.a});function a(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function c(e){return e&&e.hasOwnProperty("variant")}const i=r(function({middleware:{coreTheme:e},properties:t}){return Object.assign({compose:(n,o,s)=>{const r=t().theme,i=n[" _key"],u=o[" _key"],d=Object.keys(n).reduce((e,t)=>" _key"===t?e:(s&&!e[`${s}${a(t)}`]&&(e[`${s}${a(t)}`]=" "),o[t]||(e[t]=" "),e),{" _key":u}),p=e.classes(d),b=e.classes(o);let l=e.classes(n);if(s){const e=Object.keys(Object.assign({},p,b)).reduce((e,t)=>{if(0===t.indexOf(s)&&t!==s){const n=function(e){return`${e.charAt(0).toLowerCase()}${e.slice(1)}`}(t.replace(s,""));!b[t]&&p[t]&&p[t].trim()&&(e[n]=`${l[n]} ${p[t].trim()}`),b[t]&&(e[n]=b[t])}return e},{});return l=Object.assign({},l,e),c(r)?{theme:{theme:Object.assign({},r.theme.theme,{[i]:l}),variants:r.theme.variants},variant:r.variant}:Object.assign({},r,{[i]:l})}const m=Object.keys(l).reduce((e,t)=>{if(" _key"===t)return e;const n=b[t]&&b[t].trim();return b[t]?e[t]=n:p[t]&&p[t].trim()&&(e[t]=`${e[t]} ${p[t].trim()}`),e},Object.assign({},l));return c(r)?{theme:{theme:Object.assign({},r.theme.theme,{[i]:m}),variants:r.theme.variants},variant:r.variant}:Object.assign({},r,{[i]:m})}},e)});t.a=i},74:function(e,t,n){"use strict";var o;function s(e){return Object.keys(e).reduce((t,n)=>(t[`aria-${n.toLowerCase()}`]=e[n],t),{})}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s}),function(e){e[e.Down=40]="Down",e[e.End=35]="End",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Home=36]="Home",e[e.Left=37]="Left",e[e.PageDown=34]="PageDown",e[e.PageUp=33]="PageUp",e[e.Right=39]="Right",e[e.Space=32]="Space",e[e.Tab=9]="Tab",e[e.Up=38]="Up"}(o||(o={}))},97:function(e,t,n){e.exports={" _key":"@dojo/widgets/button",root:"button-m__root__wCywK",pressed:"button-m__pressed__2zyjz",popup:"button-m__popup__2Fl0t",disabled:"button-m__disabled__19w7M",label:"button-m__label__3hxN8"}}}]);
//# sourceMappingURL=35-7.0.0-pre.js.map