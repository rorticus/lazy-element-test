/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpdojo_widgets_custom_elements=window.dojoWebpackJsonpdojo_widgets_custom_elements||[]).push([[9,18,32,42,50],{112:function(e,t,o){e.exports={" _key":"@dojo/widgets/context-popup",trigger:"context-popup-m__trigger__3A_JZ"}},133:function(e,t,o){e.exports={" _key":"@dojo/widgets/context-menu",wrapper:"context-menu-m__wrapper__2mvoX",contentWrapper:"context-menu-m__contentWrapper__GWUcS"}},25:function(e,t,o){"use strict";o.r(t),o.d(t,"LoadingIndicator",function(){return s});var n=o(91),i=o(73),r=o(5);const s=Object(r.a)({theme:i.a}).properties()(function({middleware:{theme:e}}){const t=e.classes(n);return Object(r.m)("div",{classes:[e.variant(),t.root],role:"progressbar"},Object(r.m)("div",{classes:t.buffer}),Object(r.m)("div",{classes:[t.bar,t.primary]},Object(r.m)("span",{classes:t.inner})))});t.default=s},26:function(e,t,o){"use strict";o.r(t),o.d(t,"Popup",function(){return l});var n=o(84),i=o(75),r=o(85),s=o(5),c=o(86),a=o(87);const l=Object(s.a)({dimensions:n.b,theme:i.b,bodyScroll:r.a}).properties().children()(function({properties:e,children:t,middleware:{dimensions:o,theme:n,bodyScroll:i}}){const{underlayVisible:r=!1,position:l="below",x:d,yBottom:u,yTop:m,onClose:p,open:b}=e(),f=o.get("wrapper"),_=document.documentElement.scrollTop+document.documentElement.clientHeight,v=document.documentElement.scrollTop,g=m+f.size.height<=_,h=u-f.size.height>=v;let y={opacity:"0"};f.size.height&&(y={left:`${d}px`,opacity:"1"},"below"===l?y.top=g?`${m}px`:`${u-f.size.height}px`:"above"===l&&(y.top=h?`${u-f.size.height}px`:`${m}px`));const O=n.classes(c);return i(!b),b&&Object(s.m)("body",null,Object(s.m)("div",{key:"underlay",classes:[n.variant(),a.underlay,r&&O.underlayVisible],onclick:p}),Object(s.m)("div",{key:"wrapper",classes:[n.variant(),a.root],styles:y},t()))});t.default=l},27:function(e,t,o){"use strict";o.r(t),o.d(t,"MenuItem",function(){return _}),o.d(t,"ListItem",function(){return v}),o.d(t,"defaultTransform",function(){return g}),o.d(t,"List",function(){return h});var n=o(79),i=o(77),r=o(5),s=o(0),c=o(74),a=o(73),l=o(92),d=o(93),u=o(88),m=o(94),p=o(95),b=o(25),f=o(89);const _=Object(r.a)({theme:a.a}).properties()(function({properties:e,children:t,middleware:{theme:o}}){const{onSelect:n,active:i=!1,onRequestActive:s,disabled:c=!1,widgetId:a}=e(),l=o.classes(d);function u(){!c&&!i&&s()}return Object(r.m)("div",{id:a,key:"root",onpointermove:Object(f.c)(()=>{u()},500),classes:[o.variant(),l.root,i&&l.active,c&&l.disabled],onpointerdown:()=>{u(),!c&&n()},role:"menuitem","aria-disabled":c},t())}),v=Object(r.a)({theme:a.a}).properties()(function({properties:e,children:t,middleware:{theme:o}}){const{onSelect:n,active:i=!1,onRequestActive:s,selected:c=!1,disabled:a=!1,widgetId:d}=e(),u=o.classes(l);function m(){!a&&!i&&s()}return Object(r.m)("div",{id:d,key:"root",onpointermove:Object(f.c)(()=>{m()},500),classes:[o.variant(),u.root,c&&u.selected,i&&u.active,a&&u.disabled],onpointerdown:()=>{m(),!a&&n()},role:"option","aria-disabled":a,"aria-selected":c},t())}),g={value:["value"],label:["label"],divider:["divider"],disabled:["disabled"]},h=Object(r.a)({icache:Object(i.a)(),focus:n.b,theme:a.a,data:Object(p.a)()}).properties().children()(function({children:e,properties:t,id:o,middleware:{icache:n,focus:i,theme:a,data:p}}){const{activeIndex:f,focusable:g=!0,initialValue:h,itemsInView:y=10,menu:O=!1,onActiveIndexChange:j,onBlur:w,onFocus:x,onRequestClose:k,onValue:$,widgetId:T,theme:S}=t(),[I]=e(),{get:C,getOrRead:E,getOptions:q,setOptions:D,getTotal:P,isLoading:V}=p();function L(e){j?j(e):n.set("activeIndex",e)}function A(e){n.set("value",e),$(e)}function H(e,o){const{disabled:i}=t();switch(e.stopPropagation(),e.which){case c.a.Enter:case c.a.Space:if(e.preventDefault(),G){(i?i(G):G.disabled)||A(G.value)}break;case c.a.Down:e.preventDefault(),e.metaKey||e.ctrlKey?L(o-1):L((Z+1)%o);break;case c.a.Up:e.preventDefault(),e.metaKey||e.ctrlKey?L(0):L((Z-1+o)%o);break;case c.a.Escape:e.preventDefault(),k&&k();break;case c.a.Home:e.preventDefault(),L(0);break;case c.a.End:e.preventDefault(),L(o-1);break;default:if(e.metaKey||e.ctrlKey)return;const r=function(e){const o=n.get("resetInputTextTimer");let i=n.getOrSet("inputText","")+`${e}`;o&&clearTimeout(o);const r=setTimeout(()=>{n.set("inputText","")},800);n.set("resetInputTextTimer",r),n.set("inputText",i);const s=C({query:q().query});let c=void 0;const{disabled:a}=t();return s.some((e,t)=>{const{disabled:o,value:n,label:r}=e;return!((a?a(e):o)||0!==(r||n).toLowerCase().indexOf(i.toLowerCase())||(c=t,0))}),c}(e.key);void 0!==r&&L(r)}}function z(e){const t={widgetId:`${U}-item-${e}`,key:`item-${e}`,onSelect:()=>{},active:!1,onRequestActive:()=>{L(e)},disabled:!0};return O?Object(r.m)(_,Object.assign({},t,{theme:a.compose(d,u,"item")}),Object(r.m)(b.default,null)):Object(r.m)(v,Object.assign({},t,{selected:!1,theme:a.compose(l,u,"item")}),Object(r.m)(b.default,null))}function R(e,o){const{disabled:n}=t(),{value:i,label:s,divider:c,disabled:m=!1}=e,p=n?n(e):m,b=i===B,f=o===Z;f&&(G=e);const g={widgetId:`${U}-item-${o}`,key:`item-${o}`,onSelect:()=>{A(i)},active:f,onRequestActive:()=>{L(o)},disabled:p};let h;if(I)h=I({value:i,label:s,disabled:p,active:f,selected:b},g);else{const e=s||i;h=O?Object(r.m)(_,Object.assign({},g,{theme:a.compose(d,u,"item")}),e):Object(r.m)(v,Object.assign({},g,{selected:b,theme:a.compose(l,u,"item")}),e)}return c?[h,Object(r.m)("hr",{classes:W.divider})]:h}let{value:B}=t();if(void 0===B&&(void 0!==h&&h!==n.get("initial")&&(n.set("initial",h),n.set("value",h)),B=n.get("value")),y!==n.get("itemsInView")){n.set("itemsInView",y);const e={selected:!1,onSelect:()=>{},active:!1,onRequestActive:()=>{},onActive:()=>{},scrollIntoView:!1,widgetId:"offcreen",theme:S},t=I?I({selected:!1,active:!1,value:"offscreen",disabled:!1},e):O?Object(r.m)(_,Object.assign({},e),"offscreen"):Object(r.m)(v,Object.assign({},e),"offscreen"),o=n.getOrSet("itemHeight",(e=>{const t=Object(r.l)(()=>e),o=s.a.document.createElement("div");o.style.position="absolute",s.a.document.body.appendChild(o),t.mount({domNode:o,sync:!0});const n=o.getBoundingClientRect();return s.a.document.body.removeChild(o),n.height})(t));o&&n.set("menuHeight",y*o)}const M=Math.min(y,20),K=n.get("menuHeight"),U=T||`menu-${o}`,J=K?{maxHeight:`${K}px`}:{},N=i.shouldFocus(),W=a.classes(u),F=n.getOrSet("itemHeight",0);let Y=n.getOrSet("scrollTop",0);const X=n.get("previousActiveIndex"),Z=void 0===f?n.getOrSet("activeIndex",0):f;let G=void 0;if(Z!==X){const e=Math.floor(Y/F),t=e+y-1;Z<e?Y=Z*F:Z>t&&(Y=Math.max(Z+1-y,0)*F),n.get("scrollTop")!==Y&&n.set("scrollTop",Y),n.set("previousActiveIndex",Z)}const Q=Math.max(0,Math.floor(Y/F)-M),ee=Q*F,te=y+2*M;if(!q().pageNumber||!q().pageSize){const{pageSize:e=te,pageNumber:t=1,query:o}=q();D({pageNumber:t,pageSize:e,query:o})}const oe=function(e,t){const o=[],n=[],i=[];E(q());const r=P(q());if(r)for(let s=0;s<Math.min(r-e,t);s++){const e=s+Q,r=Math.floor(e/t)+1;if(!n[r]){const e=Object.assign({},q(),{pageNumber:r});n[r]=E(e)||[],i[r]=V(e)}const c=e-(r-1)*t,a=n[r][c],l=i[r];o[s]=l?z(e):R(a,e)}return o}(Q,te),ne=P(q());if(void 0===ne)return;const ie=ne*F;return Object(r.m)("div",{key:"root",classes:[a.variant(),W.root,m.root],tabIndex:g?0:-1,onkeydown:e=>{H(e,ne)},focus:()=>N,onfocus:x,onpointerdown:g?void 0:e=>e.preventDefault(),onblur:w,scrollTop:Y,onscroll:e=>{const t=e.target.scrollTop;Y!==t&&n.set("scrollTop",t)},styles:J,role:O?"menu":"listbox","aria-orientation":"vertical","aria-activedescendant":`${U}-item-${Z}`,id:U},Object(r.m)("div",{classes:m.wrapper,styles:{height:`${ie}px`},key:"wrapper"},Object(r.m)("div",{classes:m.transformer,styles:{transform:`translateY(${ee}px)`},key:"transformer"},oe)))});t.default=h},34:function(e,t,o){"use strict";o.r(t),o.d(t,"ContextPopup",function(){return d});var n=o(5),i=o(79),r=o(26),s=o(77),c=o(112);const a=Object(s.a)(),l=Object(n.a)({icache:a,focus:i.a}).properties().children(),d=l(function({properties:e,children:t,middleware:{icache:o,focus:i}}){const s=o.getOrSet("x",0),a=o.getOrSet("y",0),{trigger:l,content:d}=t()[0],u=()=>{const{onClose:t}=e();o.set("open",!1),t&&t()};return Object(n.m)("virtual",null,Object(n.m)("div",{classes:c.trigger,key:"trigger",oncontextmenu:t=>{const{onOpen:n}=e();t.preventDefault(),i.focus(),o.set("x",t.pageX-2),o.set("y",t.pageY-4),o.set("open",!0),n&&n()}},l),Object(n.m)(r.default,{key:"popup",x:s,yTop:a,yBottom:document.documentElement.scrollTop+document.documentElement.clientHeight,onClose:u,position:"below",open:o.get("open")},Object(n.m)("div",null,d({close:u,shouldFocus:i.shouldFocus}))))});t.default=d},43:function(e,t,o){"use strict";o.r(t),o.d(t,"defaultTransform",function(){return u}),o.d(t,"ContextMenu",function(){return m});var n=o(5),i=o(73),r=o(27),s=o(88),c=o(133),a=o(34),l=o(95);const d=Object(n.a)({theme:i.a,data:Object(l.a)()}).properties(),u=r.defaultTransform,m=d(function({properties:e,children:t,middleware:{theme:o}}){const{resource:i,transform:l,onSelect:d}=e();return Object(n.m)(a.default,null,{trigger:t(),content:({close:e,shouldFocus:t})=>Object(n.m)(r.default,{key:"menu",focus:t,theme:o.compose(s,c,"menu"),menu:!0,resource:i,transform:l,onBlur:e,onRequestClose:e,onValue:t=>{e(),d(t)}})})});t.default=m},73:function(e,t,o){"use strict";o.d(t,"b",function(){return a});var n=o(5),i=o(75);const r=Object(n.a)({coreTheme:i.a});function s(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function c(e){return e&&e.hasOwnProperty("variant")}const a=r(function({middleware:{coreTheme:e},properties:t}){return Object.assign({compose:(o,n,i)=>{const r=t().theme,a=o[" _key"],l=n[" _key"],d=Object.keys(o).reduce((e,t)=>" _key"===t?e:(i&&!e[`${i}${s(t)}`]&&(e[`${i}${s(t)}`]=" "),n[t]||(e[t]=" "),e),{" _key":l}),u=e.classes(d),m=e.classes(n);let p=e.classes(o);if(i){const e=Object.keys(Object.assign({},u,m)).reduce((e,t)=>{if(0===t.indexOf(i)&&t!==i){const o=function(e){return`${e.charAt(0).toLowerCase()}${e.slice(1)}`}(t.replace(i,""));!m[t]&&u[t]&&u[t].trim()&&(e[o]=`${p[o]} ${u[t].trim()}`),m[t]&&(e[o]=m[t])}return e},{});return p=Object.assign({},p,e),c(r)?{theme:{theme:Object.assign({},r.theme.theme,{[a]:p}),variants:r.theme.variants},variant:r.variant}:Object.assign({},r,{[a]:p})}const b=Object.keys(p).reduce((e,t)=>{if(" _key"===t)return e;const o=m[t]&&m[t].trim();return m[t]?e[t]=o:u[t]&&u[t].trim()&&(e[t]=`${e[t]} ${u[t].trim()}`),e},Object.assign({},p));return c(r)?{theme:{theme:Object.assign({},r.theme.theme,{[a]:b}),variants:r.theme.variants},variant:r.variant}:Object.assign({},r,{[a]:b})}},e)});t.a=a},74:function(e,t,o){"use strict";var n;function i(e){return Object.keys(e).reduce((t,o)=>(t[`aria-${o.toLowerCase()}`]=e[o],t),{})}o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i}),function(e){e[e.Down=40]="Down",e[e.End=35]="End",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Home=36]="Home",e[e.Left=37]="Left",e[e.PageDown=34]="PageDown",e[e.PageUp=33]="PageUp",e[e.Right=39]="Right",e[e.Space=32]="Space",e[e.Tab=9]="Tab",e[e.Up=38]="Up"}(n||(n={}))},85:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(5),i=o(0);const r=Object(n.a)({destroy:n.c}),s=i.a.document.body.style,c=r(function({middleware:{destroy:e}}){let t=!1,o=void 0;const n=()=>{t&&(o?s.setProperty("overflow",o):s.removeProperty("overflow"),t=!1,o=void 0)};return e(()=>{t&&n()}),e=>{e?n():t||(t=!0,o=s.getPropertyValue("overflow"),s.setProperty("overflow","hidden"))}});t.b=c},86:function(e,t,o){e.exports={" _key":"@dojo/widgets/popup",underlayVisible:"popup-m__underlayVisible__1Cxv3"}},87:function(e,t,o){e.exports={" _key":"@dojo/widgets/popup",root:"popup-m__root__3WJlO",underlay:"popup-m__underlay__2CC_p"}},88:function(e,t,o){e.exports={" _key":"@dojo/widgets/list",root:"list-m__root__SEwTU",items:"list-m__items__1mYDz",divider:"list-m__divider__3aqPc"}},91:function(e,t,o){e.exports={" _key":"@dojo/widgets/loading-indicator",root:"loading-indicator-m__root__3zBTf",buffer:"loading-indicator-m__buffer__qJrL-",bar:"loading-indicator-m__bar__2o6JH",primary:"loading-indicator-m__primary__SBqVC",inner:"loading-indicator-m__inner__212NS"}},92:function(e,t,o){e.exports={" _key":"@dojo/widgets/list-item",root:"list-item-m__root__o0V59",selected:"list-item-m__selected__1uxna",active:"list-item-m__active__SBagO",disabled:"list-item-m__disabled__18npQ"}},93:function(e,t,o){e.exports={" _key":"@dojo/widgets/menu-item",root:"menu-item-m__root__1LkPf",active:"menu-item-m__active__3K8Hl",disabled:"menu-item-m__disabled__20doE"}},94:function(e,t,o){e.exports={" _key":"@dojo/widgets/list",wrapper:"list-m__wrapper__tXBYZ",transformer:"list-m__transformer__3altK",root:"list-m__root__1z7LC"}}}]);
//# sourceMappingURL=9-7.0.0-pre.js.map