/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpdojo_widgets_custom_elements=window.dojoWebpackJsonpdojo_widgets_custom_elements||[]).push([[43],{176:function(t,e,a){t.exports={" _key":"@dojo/widgets/tab-container",tab:"tab-container-m__tab__3Zw7g",close:"tab-container-m__close__1ulVg",closeable:"tab-container-m__closeable__KPvCj",indicator:"tab-container-m__indicator__2gIBC",indicatorActive:"tab-container-m__indicatorActive__23JDP",indicatorContent:"tab-container-m__indicatorContent__aCKea",tabButtonContent:"tab-container-m__tabButtonContent__XUd1o",activeTabButton:"tab-container-m__activeTabButton__2Mx5J",root:"tab-container-m__root__3cRNC",tabButton:"tab-container-m__tabButton__2zA0K",disabledTabButton:"tab-container-m__disabledTabButton__2ESUL",alignLeft:"tab-container-m__alignLeft__1w2sc",tabs:"tab-container-m__tabs__3fHCU",tabButtons:"tab-container-m__tabButtons__yAIdI",alignBottom:"tab-container-m__alignBottom__2Rp0_",alignRight:"tab-container-m__alignRight__1H-Ew"}},60:function(t,e,a){"use strict";a.r(e),a.d(e,"TabContainer",function(){return l});var n=a(79),o=a(90),c=a(77),r=a(75),s=a(5),i=a(99),b=a(74),u=a(176);const l=Object(s.a)({focus:n.a,i18n:o.a,icache:Object(c.a)(),theme:r.a}).properties().children()(function({children:t,id:e,middleware:{focus:a,i18n:n,icache:o,theme:c},properties:r}){const{alignButtons:l="top",aria:d={},initialActiveIndex:_=0,tabs:m,onActiveIndex:h,onClose:p}=r();let{activeIndex:g}=r();const f=c.classes(u),{messages:y}=n.localize(i.a);function v(t){p&&p(t),S(0)}function S(t){a.focus(),h&&h(t),o.set("activeIndex",t)}void 0===g&&(g=o.getOrSet("activeIndex",_));const j=[Object(s.m)("div",{key:"buttons",classes:f.tabButtons},m.map((t,n)=>{const{closeable:o,disabled:c,name:r}=t,i=n===g;return Object(s.m)("div",{"aria-controls":`${e}-tab-${n}`,"aria-disabled":c?"true":"false","aria-selected":i?"true":"false",classes:[f.tabButton,i?f.activeTabButton:null,o?f.closeable:null,c?f.disabledTabButton:null],focus:i?a.shouldFocus:()=>!1,id:`${e}-tabbutton-${n}`,key:`${n}-tabbutton`,onclick:()=>{c||S(n)},onkeydown:e=>(function(t,{closeable:e,disabled:a},n){t.stopPropagation();const o=m.length;switch(t.which){case b.a.Escape:e&&!a&&v(n);break;case b.a.Left:case b.a.Up:t.preventDefault(),S((n-1+o)%o);break;case b.a.Right:case b.a.Down:t.preventDefault(),S((n+1)%o);break;case b.a.Home:t.preventDefault(),S(0);break;case b.a.End:t.preventDefault(),S(m.length-1)}})(e,t,n),role:"tab",tabIndex:i?0:-1},Object(s.m)("span",{key:"tabButtonContent",classes:f.tabButtonContent},r,o?Object(s.m)("button",{disabled:c,tabIndex:i?0:-1,classes:f.close,key:`${n}-tabbutton-close`,type:"button",onclick:t=>{t.stopPropagation(),c||v(n)}},y.close):null,Object(s.m)("span",{classes:[f.indicator,i&&f.indicatorActive]},Object(s.m)("span",{classes:f.indicatorContent}))))})),Object(s.m)("div",{key:"tabs",classes:f.tabs},t().map((t,e)=>{const a=m[e].disabled,n=g===e&&!a;return Object(s.m)("div",{classes:n?f.tab:void 0,hidden:!n},t)}))];let w,B="horizontal";switch(l){case"right":w=f.alignRight,B="vertical",j.reverse();break;case"bottom":w=f.alignBottom,j.reverse();break;case"left":w=f.alignLeft,B="vertical"}return Object(s.m)("div",Object.assign({},Object(b.b)(d),{key:"root","aria-orientation":B,classes:[c.variant(),w||null,f.root],role:"tablist"}),j)});e.default=l},74:function(t,e,a){"use strict";var n;function o(t){return Object.keys(t).reduce((e,a)=>(e[`aria-${a.toLowerCase()}`]=t[a],e),{})}a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o}),function(t){t[t.Down=40]="Down",t[t.End=35]="End",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Home=36]="Home",t[t.Left=37]="Left",t[t.PageDown=34]="PageDown",t[t.PageUp=33]="PageUp",t[t.Right=39]="Right",t[t.Space=32]="Space",t[t.Tab=9]="Tab",t[t.Up=38]="Up"}(n||(n={}))},99:function(t,e,a){"use strict";e.a={locales:{},messages:{sunShort:"Sun",monShort:"Mon",tueShort:"Tue",wedShort:"Wed",thuShort:"Thu",friShort:"Fri",satShort:"Sat",sunday:"Sunday",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",janShort:"Jan",febShort:"Feb",marShort:"Mar",aprShort:"Apr",mayShort:"May",junShort:"Jun",julShort:"Jul",augShort:"Aug",sepShort:"Sep",octShort:"Oct",novShort:"Nov",decShort:"Dec",january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December",clear:"clear",close:"close",open:"open"}}}}]);
//# sourceMappingURL=43-7.0.0-pre.js.map