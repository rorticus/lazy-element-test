/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpdojo_widgets_custom_elements=window.dojoWebpackJsonpdojo_widgets_custom_elements||[]).push([[39],{21:function(e,t,n){"use strict";n.r(t),n.d(t,"Label",function(){return c});var a=n(5),r=n(76),s=n(73),i=n(78),o=n(74);const c=Object(a.a)({theme:s.a}).properties()(function({properties:e,id:t,children:n,middleware:{theme:s}}){const{aria:c={},active:l,disabled:d,focused:u,forId:_,hidden:b,readOnly:m,required:f,secondary:p,valid:v,widgetId:h=`label-${t}`}=e(),y=s.classes(i);return Object(a.m)("label",Object.assign({},Object(o.b)(c),{id:h,classes:[s.variant(),y.root,d?y.disabled:null,u?y.focused:null,!0===v?y.valid:null,!1===v?y.invalid:null,m?y.readonly:null,f?y.required:null,p?y.secondary:null,l?y.active:null,b?r.visuallyHidden:null],for:_}),n())});t.default=c},73:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(5),r=n(75);const s=Object(a.a)({coreTheme:r.a});function i(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function o(e){return e&&e.hasOwnProperty("variant")}const c=s(function({middleware:{coreTheme:e},properties:t}){return Object.assign({compose:(n,a,r)=>{const s=t().theme,c=n[" _key"],l=a[" _key"],d=Object.keys(n).reduce((e,t)=>" _key"===t?e:(r&&!e[`${r}${i(t)}`]&&(e[`${r}${i(t)}`]=" "),a[t]||(e[t]=" "),e),{" _key":l}),u=e.classes(d),_=e.classes(a);let b=e.classes(n);if(r){const e=Object.keys(Object.assign({},u,_)).reduce((e,t)=>{if(0===t.indexOf(r)&&t!==r){const n=function(e){return`${e.charAt(0).toLowerCase()}${e.slice(1)}`}(t.replace(r,""));!_[t]&&u[t]&&u[t].trim()&&(e[n]=`${b[n]} ${u[t].trim()}`),_[t]&&(e[n]=_[t])}return e},{});return b=Object.assign({},b,e),o(s)?{theme:{theme:Object.assign({},s.theme.theme,{[c]:b}),variants:s.theme.variants},variant:s.variant}:Object.assign({},s,{[c]:b})}const m=Object.keys(b).reduce((e,t)=>{if(" _key"===t)return e;const n=_[t]&&_[t].trim();return _[t]?e[t]=n:u[t]&&u[t].trim()&&(e[t]=`${e[t]} ${u[t].trim()}`),e},Object.assign({},b));return o(s)?{theme:{theme:Object.assign({},s.theme.theme,{[c]:m}),variants:s.theme.variants},variant:s.variant}:Object.assign({},s,{[c]:m})}},e)});t.a=c},74:function(e,t,n){"use strict";var a;function r(e){return Object.keys(e).reduce((t,n)=>(t[`aria-${n.toLowerCase()}`]=e[n],t),{})}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),function(e){e[e.Down=40]="Down",e[e.End=35]="End",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Home=36]="Home",e[e.Left=37]="Left",e[e.PageDown=34]="PageDown",e[e.PageUp=33]="PageUp",e[e.Right=39]="Right",e[e.Space=32]="Space",e[e.Tab=9]="Tab",e[e.Up=38]="Up"}(a||(a={}))},76:function(e,t,n){e.exports={" _key":"@dojo/widgets/base",visuallyHidden:"base-m__visuallyHidden__1AeWe",focusable:"base-m__focusable__1_qAN",hidden:"base-m__hidden__3QddU"}},78:function(e,t,n){e.exports={" _key":"@dojo/widgets/label",root:"label-m__root__3Kk7r",readonly:"label-m__readonly__2pxUq",invalid:"label-m__invalid__1CZyi",valid:"label-m__valid__2hdFV",required:"label-m__required__2WVo7",disabled:"label-m__disabled__34MEb",focused:"label-m__focused__ISy0H",secondary:"label-m__secondary__37QWK",active:"label-m__active__3MoIi"}}}]);
//# sourceMappingURL=39-7.0.0-pre.js.map