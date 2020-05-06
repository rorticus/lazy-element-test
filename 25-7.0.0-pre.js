/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpdojo_widgets_custom_elements=window.dojoWebpackJsonpdojo_widgets_custom_elements||[]).push([[25,38],{103:function(e,n,t){e.exports={" _key":"@dojo/widgets/title-pane",title:"title-pane-m__title__3tf5J",closeable:"title-pane-m__closeable__3zOGh",arrow:"title-pane-m__arrow__3vShr",root:"title-pane-m__root__1sOUk",open:"title-pane-m__open__2g2VL",content:"title-pane-m__content__zjzP2",titleButton:"title-pane-m__titleButton__1PgVR",contentTransition:"title-pane-m__contentTransition__1vxdJ"}},106:function(e,n,t){e.exports={" _key":"@dojo/widgets/title-pane",rootFixed:"title-pane-m__rootFixed__oPswN",titleFixed:"title-pane-m__titleFixed__1-iVY",titleButtonFixed:"title-pane-m__titleButtonFixed__3JEqs",contentFixed:"title-pane-m__contentFixed__3kE1q",closeableFixed:"title-pane-m__closeableFixed__x4J9P"}},22:function(e,n,t){"use strict";t.r(n),t.d(n,"Icon",function(){return a});var o=t(5),c=t(73),i=t(74),_=t(80),s=t(76);const a=Object(o.a)({theme:c.a}).properties()(function({properties:e,middleware:{theme:n}}){const{aria:t={hidden:"true"},type:c,altText:a}=e(),r=n.classes(_);return Object(o.m)("virtual",null,Object(o.m)("i",Object.assign({classes:[n.variant(),r.icon,r[c]]},Object(i.b)(t))),a?Object(o.m)("span",{classes:s.visuallyHidden},a):null)});n.default=a},30:function(e,n,t){"use strict";t.r(n),t.d(n,"TitlePane",function(){return m});var o=t(84),c=t(79),i=t(77),_=t(5),s=t(22),a=t(73),r=t(103),l=t(106);const m=Object(_.a)({dimensions:o.a,focus:c.a,icache:Object(i.a)(),theme:a.a}).properties()(function({id:e,children:n,properties:t,middleware:{dimensions:o,focus:c,icache:i,theme:a}}){const m=a.classes(r),{closeable:d=!0,headingLevel:u,initialOpen:p,onClose:I,onOpen:b,name:h,theme:f}=t();let{open:g}=t();const j=void 0===i.get("open");if(void 0===g){g=i.get("open"),p!==i.get("initialOpen")&&(i.set("open",p),i.set("initialOpen",p),g=p)}return Object(_.m)("div",{classes:[a.variant(),m.root,g?m.open:null,l.rootFixed]},Object(_.m)("div",{"aria-level":u?`${u}`:null,classes:[m.title,d?m.closeable:null,l.titleFixed,d?l.closeableFixed:null],role:"heading"},Object(_.m)("button",{"aria-controls":`${e}-content`,"aria-expanded":`${g}`,disabled:!d,classes:[l.titleButtonFixed,m.titleButton],focus:c.isFocused("title-button"),key:"title-button",onclick:e=>{e.stopPropagation(),i.set("open",!g),g?I&&I():b&&b()},type:"button"},Object(_.m)("span",{classes:m.arrow},Object(_.m)(s.default,{type:g?"downIcon":"rightIcon",theme:f})),h)),Object(_.m)("div",{"aria-hidden":g?null:"true","aria-labelledby":`${e}-title`,classes:[m.content,!j&&m.contentTransition,l.contentFixed],id:`${e}-content`,key:"content",styles:{marginTop:g?"0px":`-${o.get("content").offset.height}px`}},n()))});n.default=m},73:function(e,n,t){"use strict";t.d(n,"b",function(){return a});var o=t(5),c=t(75);const i=Object(o.a)({coreTheme:c.a});function _(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function s(e){return e&&e.hasOwnProperty("variant")}const a=i(function({middleware:{coreTheme:e},properties:n}){return Object.assign({compose:(t,o,c)=>{const i=n().theme,a=t[" _key"],r=o[" _key"],l=Object.keys(t).reduce((e,n)=>" _key"===n?e:(c&&!e[`${c}${_(n)}`]&&(e[`${c}${_(n)}`]=" "),o[n]||(e[n]=" "),e),{" _key":r}),m=e.classes(l),d=e.classes(o);let u=e.classes(t);if(c){const e=Object.keys(Object.assign({},m,d)).reduce((e,n)=>{if(0===n.indexOf(c)&&n!==c){const t=function(e){return`${e.charAt(0).toLowerCase()}${e.slice(1)}`}(n.replace(c,""));!d[n]&&m[n]&&m[n].trim()&&(e[t]=`${u[t]} ${m[n].trim()}`),d[n]&&(e[t]=d[n])}return e},{});return u=Object.assign({},u,e),s(i)?{theme:{theme:Object.assign({},i.theme.theme,{[a]:u}),variants:i.theme.variants},variant:i.variant}:Object.assign({},i,{[a]:u})}const p=Object.keys(u).reduce((e,n)=>{if(" _key"===n)return e;const t=d[n]&&d[n].trim();return d[n]?e[n]=t:m[n]&&m[n].trim()&&(e[n]=`${e[n]} ${m[n].trim()}`),e},Object.assign({},u));return s(i)?{theme:{theme:Object.assign({},i.theme.theme,{[a]:p}),variants:i.theme.variants},variant:i.variant}:Object.assign({},i,{[a]:p})}},e)});n.a=a},74:function(e,n,t){"use strict";var o;function c(e){return Object.keys(e).reduce((n,t)=>(n[`aria-${t.toLowerCase()}`]=e[t],n),{})}t.d(n,"a",function(){return o}),t.d(n,"b",function(){return c}),function(e){e[e.Down=40]="Down",e[e.End=35]="End",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Home=36]="Home",e[e.Left=37]="Left",e[e.PageDown=34]="PageDown",e[e.PageUp=33]="PageUp",e[e.Right=39]="Right",e[e.Space=32]="Space",e[e.Tab=9]="Tab",e[e.Up=38]="Up"}(o||(o={}))},76:function(e,n,t){e.exports={" _key":"@dojo/widgets/base",visuallyHidden:"base-m__visuallyHidden__1AeWe",focusable:"base-m__focusable__1_qAN",hidden:"base-m__hidden__3QddU"}},80:function(e,n,t){e.exports={" _key":"@dojo/widgets/icon",root:"icon-m__root__1eoV_",icon:"icon-m__icon__UdYI1",clockIcon:"icon-m__clockIcon__3GLpu",downIcon:"icon-m__downIcon__2q5lh",leftIcon:"icon-m__leftIcon__pBWIt",rightIcon:"icon-m__rightIcon__18AW6",closeIcon:"icon-m__closeIcon__21KIr",plusIcon:"icon-m__plusIcon__2b4l_",minusIcon:"icon-m__minusIcon__1DHfu",checkIcon:"icon-m__checkIcon__2D3mV",upIcon:"icon-m__upIcon__2Whg2",upAltIcon:"icon-m__upAltIcon__2GXtu",downAltIcon:"icon-m__downAltIcon__hm7FZ",searchIcon:"icon-m__searchIcon__2HGOw",barsIcon:"icon-m__barsIcon__2e0Qo",settingsIcon:"icon-m__settingsIcon__2-UEA",alertIcon:"icon-m__alertIcon__WjF2F",helpIcon:"icon-m__helpIcon__3c7_4",infoIcon:"icon-m__infoIcon__PXtvl",cancelIcon:"icon-m__cancelIcon__2ey9p",checkedBoxIcon:"icon-m__checkedBoxIcon__TSG-9",phoneIcon:"icon-m__phoneIcon__2BO7g",editIcon:"icon-m__editIcon__3j9QX",dateIcon:"icon-m__dateIcon__3vXGn",linkIcon:"icon-m__linkIcon__314xM",locationIcon:"icon-m__locationIcon__1uwwo",secureIcon:"icon-m__secureIcon__UXrMt",mailIcon:"icon-m__mailIcon__3uh6Q",eyeIcon:"icon-m__eyeIcon__2Cqqq",eyeSlashIcon:"icon-m__eyeSlashIcon__17wRy",starIcon:"icon-m__starIcon__r0lYz"}}}]);
//# sourceMappingURL=25-7.0.0-pre.js.map