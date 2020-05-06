/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpdojo_widgets_custom_elements=window.dojoWebpackJsonpdojo_widgets_custom_elements||[]).push([[16,38],{169:function(e,t,n){e.exports={" _key":"@dojo/widgets/slide-pane",underlay:"slide-pane-m__underlay__ZJyi9",paneFixed:"slide-pane-m__paneFixed__geLsD",contentFixed:"slide-pane-m__contentFixed__16ddx",leftFixed:"slide-pane-m__leftFixed__2CBYu",rightFixed:"slide-pane-m__rightFixed__LHBt3",topFixed:"slide-pane-m__topFixed__1o1D2",bottomFixed:"slide-pane-m__bottomFixed__2fS48"}},170:function(e,t,n){e.exports={" _key":"@dojo/widgets/slide-pane",root:"slide-pane-m__root__33Y_g",slideIn:"slide-pane-m__slideIn__10s-H",slideOut:"slide-pane-m__slideOut__2UBE4",underlayVisible:"slide-pane-m__underlayVisible__3F33P",content:"slide-pane-m__content__1jv82",pane:"slide-pane-m__pane__3zl4l",title:"slide-pane-m__title__T17z9",titleContent:"slide-pane-m__titleContent__30OgZ",close:"slide-pane-m__close__29zmb",closeIcon:"slide-pane-m__closeIcon__MvNMF",left:"slide-pane-m__left__3YhR5",right:"slide-pane-m__right__11H13",top:"slide-pane-m__top__2Ett_",bottom:"slide-pane-m__bottom__-G1iu",open:"slide-pane-m__open__3nrDM"}},171:function(e,t,n){e.exports={" _key":"@dojo/widgets/animations",fadeIn:"animations-m__fadeIn__1Gpxv",fadeOut:"animations-m__fadeOut__ClAlv"}},22:function(e,t,n){"use strict";n.r(t),n.d(t,"Icon",function(){return _});var o=n(5),i=n(73),s=n(74),c=n(80),a=n(76);const _=Object(o.a)({theme:i.a}).properties()(function({properties:e,middleware:{theme:t}}){const{aria:n={hidden:"true"},type:i,altText:_}=e(),r=t.classes(c);return Object(o.m)("virtual",null,Object(o.m)("i",Object.assign({classes:[t.variant(),r.icon,r[i]]},Object(s.b)(n))),_?Object(o.m)("span",{classes:a.visuallyHidden},_):null)});t.default=_},56:function(e,t,n){"use strict";n.r(t),n.d(t,"SlidePane",function(){return g});var o=n(5),i=n(77),s=n(73),c=n(90),a=n(99),_=n(169),r=n(170),l=n(89),d=n(74),u=n(22),m=n(171);const p=320;var h,b;!function(e){e[e.x=0]="x",e[e.y=1]="y"}(h||(h={})),function(e){e[e.in=0]="in",e[e.out=1]="out"}(b||(b={}));const g=Object(o.a)({icache:Object(i.a)(),theme:s.a,i18n:c.a}).properties()(function({middleware:{icache:e,theme:t,i18n:n},properties:i,children:s}){let{aria:c={},closeText:g,open:f=!1,title:I="",align:y="left",width:O=p,underlay:j=!1}=i();const v=t.classes(r);if(e.get("open")!==f){const t=e.get("open");e.set("open",f),f&&!t?e.set("slide",b.in):!f&&t&&e.set("slide",b.out)}const w="left"===y||"right"===y?h.x:h.y;let x="";const S=w===h.x?"X":"Y";e.get("swiping")&&(x="left"===y||"top"===y?`-${e.getOrSet("transform",0)}`:`${e.getOrSet("transform",0)}`);const k={transform:x?`translate${S}(${x}%)`:void 0,width:w===h.x?`${O}px`:void 0,height:w===h.y?`${O}px`:void 0},F=v,$=e.get("slide"),P=[F[y],f?v.open:null,$===b.in?v.slideIn:null,$===b.out?v.slideOut:null],A=[_[`${y}Fixed`]];if(!g){const{messages:e}=n.localize(a.a);g=`${e.close} ${I}`}const M=(t,n)=>{const{align:o="left"}=i();if(("left"===o||"right"===o?h.x:h.y)===h.x){const n=t.pageX;return"right"===o?n-e.getOrSet("initialPosition",0):e.getOrSet("initialPosition",0)-n}{const n=t.pageY;return"bottom"===o?n-e.getOrSet("initialPosition",0):e.getOrSet("initialPosition",0)-n}},C=t=>{t.stopPropagation(),e.set("swiping",!1),e.set("hasMoved",!1);const{onRequestClose:n,width:o=p}=i(),s=M(t);s>o/2?n&&n():s>0&&e.set("slide",b.in)},D=e.getOrSet("titleId",Object(l.d)());return Object(o.m)("div",{"aria-labelledby":D,classes:[t.variant(),v.root],onpointerdown:t=>{const{align:n="left"}=i(),o="left"===n||"right"===n?h.x:h.y;t.stopPropagation(),e.set("swiping",!0),o===h.x?e.set("initialPosition",t.pageX):e.set("initialPosition",t.pageY),e.set("transform",0)},onpointermove:t=>{if(t.stopPropagation(),!e.get("swiping"))return;t.preventDefault(),e.set("hasMoved",!0);const{width:n=p}=i(),o=M(t);o>=0&&(e.set("transform",100*o/n),e.set("slide",void 0))},onpointerup:C,onpointercancel:C},f?Object(o.m)("div",{key:"underlay",classes:[j?v.underlayVisible:null,_.underlay],enterAnimation:m.fadeIn,exitAnimation:m.fadeOut,onpointerup:()=>{const{onRequestClose:t}=i();!1===e.getOrSet("hasMoved",!1)&&t&&t()}}):null,Object(o.m)("div",Object.assign({},Object(d.b)(c),{key:"content",classes:[v.pane,...P,_.paneFixed,...A],styles:k}),I?Object(o.m)("div",{classes:v.title,key:"title"},Object(o.m)("div",{id:D,classes:v.titleContent},I),Object(o.m)("button",{classes:v.close,type:"button",onclick:e=>{e.stopPropagation();const{onRequestClose:t}=i();t&&t()}},g,Object(o.m)("span",{classes:v.closeIcon},Object(o.m)(u.default,{type:"closeIcon"})))):null,Object(o.m)("div",{classes:[v.content,_.contentFixed]},s())))});t.default=g},73:function(e,t,n){"use strict";n.d(t,"b",function(){return _});var o=n(5),i=n(75);const s=Object(o.a)({coreTheme:i.a});function c(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function a(e){return e&&e.hasOwnProperty("variant")}const _=s(function({middleware:{coreTheme:e},properties:t}){return Object.assign({compose:(n,o,i)=>{const s=t().theme,_=n[" _key"],r=o[" _key"],l=Object.keys(n).reduce((e,t)=>" _key"===t?e:(i&&!e[`${i}${c(t)}`]&&(e[`${i}${c(t)}`]=" "),o[t]||(e[t]=" "),e),{" _key":r}),d=e.classes(l),u=e.classes(o);let m=e.classes(n);if(i){const e=Object.keys(Object.assign({},d,u)).reduce((e,t)=>{if(0===t.indexOf(i)&&t!==i){const n=function(e){return`${e.charAt(0).toLowerCase()}${e.slice(1)}`}(t.replace(i,""));!u[t]&&d[t]&&d[t].trim()&&(e[n]=`${m[n]} ${d[t].trim()}`),u[t]&&(e[n]=u[t])}return e},{});return m=Object.assign({},m,e),a(s)?{theme:{theme:Object.assign({},s.theme.theme,{[_]:m}),variants:s.theme.variants},variant:s.variant}:Object.assign({},s,{[_]:m})}const p=Object.keys(m).reduce((e,t)=>{if(" _key"===t)return e;const n=u[t]&&u[t].trim();return u[t]?e[t]=n:d[t]&&d[t].trim()&&(e[t]=`${e[t]} ${d[t].trim()}`),e},Object.assign({},m));return a(s)?{theme:{theme:Object.assign({},s.theme.theme,{[_]:p}),variants:s.theme.variants},variant:s.variant}:Object.assign({},s,{[_]:p})}},e)});t.a=_},74:function(e,t,n){"use strict";var o;function i(e){return Object.keys(e).reduce((t,n)=>(t[`aria-${n.toLowerCase()}`]=e[n],t),{})}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),function(e){e[e.Down=40]="Down",e[e.End=35]="End",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Home=36]="Home",e[e.Left=37]="Left",e[e.PageDown=34]="PageDown",e[e.PageUp=33]="PageUp",e[e.Right=39]="Right",e[e.Space=32]="Space",e[e.Tab=9]="Tab",e[e.Up=38]="Up"}(o||(o={}))},76:function(e,t,n){e.exports={" _key":"@dojo/widgets/base",visuallyHidden:"base-m__visuallyHidden__1AeWe",focusable:"base-m__focusable__1_qAN",hidden:"base-m__hidden__3QddU"}},80:function(e,t,n){e.exports={" _key":"@dojo/widgets/icon",root:"icon-m__root__1eoV_",icon:"icon-m__icon__UdYI1",clockIcon:"icon-m__clockIcon__3GLpu",downIcon:"icon-m__downIcon__2q5lh",leftIcon:"icon-m__leftIcon__pBWIt",rightIcon:"icon-m__rightIcon__18AW6",closeIcon:"icon-m__closeIcon__21KIr",plusIcon:"icon-m__plusIcon__2b4l_",minusIcon:"icon-m__minusIcon__1DHfu",checkIcon:"icon-m__checkIcon__2D3mV",upIcon:"icon-m__upIcon__2Whg2",upAltIcon:"icon-m__upAltIcon__2GXtu",downAltIcon:"icon-m__downAltIcon__hm7FZ",searchIcon:"icon-m__searchIcon__2HGOw",barsIcon:"icon-m__barsIcon__2e0Qo",settingsIcon:"icon-m__settingsIcon__2-UEA",alertIcon:"icon-m__alertIcon__WjF2F",helpIcon:"icon-m__helpIcon__3c7_4",infoIcon:"icon-m__infoIcon__PXtvl",cancelIcon:"icon-m__cancelIcon__2ey9p",checkedBoxIcon:"icon-m__checkedBoxIcon__TSG-9",phoneIcon:"icon-m__phoneIcon__2BO7g",editIcon:"icon-m__editIcon__3j9QX",dateIcon:"icon-m__dateIcon__3vXGn",linkIcon:"icon-m__linkIcon__314xM",locationIcon:"icon-m__locationIcon__1uwwo",secureIcon:"icon-m__secureIcon__UXrMt",mailIcon:"icon-m__mailIcon__3uh6Q",eyeIcon:"icon-m__eyeIcon__2Cqqq",eyeSlashIcon:"icon-m__eyeSlashIcon__17wRy",starIcon:"icon-m__starIcon__r0lYz"}},99:function(e,t,n){"use strict";t.a={locales:{},messages:{sunShort:"Sun",monShort:"Mon",tueShort:"Tue",wedShort:"Wed",thuShort:"Thu",friShort:"Fri",satShort:"Sat",sunday:"Sunday",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",janShort:"Jan",febShort:"Feb",marShort:"Mar",aprShort:"Apr",mayShort:"May",junShort:"Jun",julShort:"Jul",augShort:"Aug",sepShort:"Sep",octShort:"Oct",novShort:"Nov",decShort:"Dec",january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December",clear:"clear",close:"close",open:"open"}}}}]);
//# sourceMappingURL=16-7.0.0-pre.js.map