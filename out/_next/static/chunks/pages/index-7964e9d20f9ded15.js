(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4672)}])},7022:function(e){"use strict";console.log("isProd true"),e.exports={basePath:"/usd3",output:"export",images:{unoptimized:!0}}},4672:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return C}});var a=s(5893);s(7022);var n=s(9008),t=s.n(n);s(6980);var r=s(8340),o=s(6575),l=s(682),c=s(5001),d=s(2730),m=s.n(d);function x(e){let{tabName:i}=e;return(0,a.jsx)("button",{className:m().NavTab,children:i})}function u(e){let{itemName:i}=e;return(0,a.jsx)("button",{className:m().NavTab,children:i})}function _(e){let{children:i}=e,s=["Home","Map Explorer"].map(e=>(0,a.jsx)("span",{children:(0,a.jsx)(x,{tabName:e})},e));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("main",{children:[(0,a.jsx)(t(),{children:(0,a.jsx)("title",{children:"Boaty McBoatface Dashboard"})}),(0,a.jsxs)("div",{className:m().Box,children:[(0,a.jsxs)("div",{id:m().NavContainer,children:[(0,a.jsx)(o.Z,{expand:"lg",className:m().NavbarUva,children:(0,a.jsx)(l.Z,{fluid:!0,children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("img",{className:m().NavbarBrand,width:"24px",height:"auto",src:"https://upload.wikimedia.org/wikipedia/commons/d/dd/University_of_Virginia_Rotunda_logo.svg",alt:"University of Virginia"}),(0,a.jsx)("span",{className:m().NavbarBrand,id:m().DashboardName,children:"Boaty McBoatface Dashboard"})]})})}),(0,a.jsx)(o.Z,{expand:"lg",className:m().NavbarUva+" navbar-dark",children:(0,a.jsxs)(l.Z,{fluid:!0,id:m().Tabs,children:[(0,a.jsx)("div",{id:m().Pages,children:s}),(0,a.jsxs)("div",{id:m().Info,children:[(0,a.jsx)(o.Z.Toggle,{"aria-controls":"navbar-info",children:(0,a.jsx)("span",{className:"navbar-toggler-icon",children:(0,a.jsxs)("svg",{viewBox:"0 0 18 18",fill:"#F1F1EF",children:[(0,a.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,a.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,a.jsx)("path",{fill:"#F1F1EF",d:"M17 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"})})]})})}),(0,a.jsx)(o.Z.Collapse,{id:"navbar-info",children:(0,a.jsxs)(r.Z,{className:"ms-auto",children:[(0,a.jsx)(u,{itemName:"Settings"}),(0,a.jsx)(u,{itemName:"About"})]})})]})]})})]}),i]})]})})}var h=s(7294),j=s(6614),p=s(720),f=s(2334),v=s(6126),g=s(4871),y=s.n(g);function N(e){let{topic:i,activeTab:s}=e;return(0,a.jsx)("button",{className:y().TopicTab+" "+(s===i?y().ActiveTab:""),children:i})}function b(e){let{value:i,description:s}=e;return(0,a.jsxs)("div",{className:y().SummaryItem,children:[(0,a.jsx)("span",{className:y().SummaryValue,children:i}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:y().SummaryDesc,children:s})]})}function F(e){let{topic:i,data:s,resolution:n,region:t,year:r}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:y().TitleBox,children:[(0,a.jsx)("h4",{children:i+": "+n+"s in "+t+", "+r}),"Variable Name"]}),(0,a.jsxs)("div",{className:y().SummaryBox,children:[(0,a.jsx)(b,{value:"0.82%",description:"average percentage of income for internet"}),(0,a.jsx)(b,{value:"0.74%",description:"median percentage of income for internet"})]})]})}function T(e){let{name:i,range:s,multiple:n=!1}=e,t=s.map(e=>(0,a.jsx)("option",{value:e,children:e},e));return n?(0,a.jsx)("div",{className:y().FilterSelector,children:(0,a.jsx)("select",{name:i,id:i,className:y().FilterDropdown,multiple:!0,size:"5",children:t})}):(0,a.jsx)("div",{className:y().FilterSelector,children:(0,a.jsx)("select",{name:i,id:i,className:y().FilterDropdown,children:t})})}function S(e){let{open:i,size:s}=e;return i?(0,a.jsx)("div",{className:y().ToggleIcon,style:{width:s},children:(0,a.jsx)("svg",{viewBox:"0 0 1 1",children:(0,a.jsx)("polygon",{points:"0 0, 0.5 0.6, 1 0"})})}):(0,a.jsx)("div",{className:y().ToggleIcon,style:{width:s},children:(0,a.jsx)("svg",{viewBox:"0 0 1 1",children:(0,a.jsx)("polygon",{points:"0 0.6, 0.5 0, 1 0.6"})})})}function C(){let e=[{year:1980,efficiency:24.3,sales:8949e3},{year:1985,efficiency:27.6,sales:10979e3},{year:1990,efficiency:28,sales:9303e3},{year:1991,efficiency:28.4,sales:8185e3},{year:1992,efficiency:27.9,sales:8213e3},{year:1993,efficiency:28.4,sales:8518e3},{year:1994,efficiency:28.3,sales:8991e3},{year:1995,efficiency:28.6,sales:862e4},{year:1996,efficiency:28.5,sales:8479e3},{year:1997,efficiency:28.7,sales:8217e3},{year:1998,efficiency:28.8,sales:8085e3},{year:1999,efficiency:28.3,sales:8638e3},{year:2e3,efficiency:28.5,sales:8778e3},{year:2001,efficiency:28.8,sales:8352e3},{year:2002,efficiency:29,sales:8042e3}],i=["Topic 1","Topic 2","Topic 3","Topic 4","Topic 5","Topic 6"],[s,n]=(0,h.useState)(i[0]),[t,r]=(0,h.useState)("Census Tract"),[o,l]=(0,h.useState)("Virginia"),[c,d]=(0,h.useState)("2019"),[m,x]=(0,h.useState)(!1),u=2*i.indexOf(s)+1,g=(0,f.Z)("(min-width:480px)"),[b,C]=(0,h.useState)();(0,h.useEffect)(()=>{window.innerWidth>480?C(!0):C(!1)},[]),(0,h.useEffect)(()=>{let e=()=>{window.innerWidth>480?C(!0):C(!1),""===s&&n(i[0])};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[s]);let H=e=>{let{topic:i}=e;s!==i?n(i):n("")},w=i.map((e,i)=>(0,a.jsx)("div",{className:y().TabContainer,id:e+"Tab",onClick:g?()=>n(e):()=>H({topic:e}),style:{order:2*i},children:(0,a.jsx)(N,{topic:e,activeTab:s})},e)),B=i.map(i=>(0,a.jsx)("span",{style:{order:g?0:u},className:y().RowContent+" "+y().VisContainer+" "+(s===i?y().ContentVisible:y().ContentInvisible),children:(0,a.jsx)(F,{topic:i,data:e,resolution:t,region:o,year:c})},i)),D=(0,a.jsxs)("div",{id:y().FilterBox,className:y().RowContent,style:!b||g?{}:{minHeight:"100%"},children:[(0,a.jsx)("div",{id:y().FilterHead,onClick:g?()=>{}:()=>C(!b),children:(0,a.jsxs)("div",{id:y().FilterHeadItems,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("svg",{id:y().FilterIcon,viewBox:"0 0 518.462 518.462",children:(0,a.jsxs)("g",{children:[" ",(0,a.jsxs)("g",{children:[" ",(0,a.jsxs)("g",{children:[" ",(0,a.jsx)("path",{d:"M518.462,22.82H0l193.159,203.495l-0.014,269.327l132.173-68.37l-0.014-200.957L518.462,22.82z M212.837,463.286 l0.014-244.827L45.846,42.512h426.769L305.611,218.459l0.014,196.832L212.837,463.286z"})," "]})," "]})," "]})}),"Select Filters"]}),g?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(S,{open:b,size:"8%"})]})}),(0,a.jsxs)("div",{id:y().FilterItems,className:b?"":y().ContentInvisible,children:[(0,a.jsxs)("div",{id:y().MapContainer,children:[(0,a.jsxs)("div",{id:y().MapToggle,onClick:()=>x(!m),children:["Click to Filter Using Map",(0,a.jsx)(S,{open:!m,size:"10px"})]}),(0,a.jsx)("div",{id:y().FilterMapBox,className:m?"":y().ContentInvisible,children:(0,a.jsx)(v.d$,{children:(0,a.jsx)(v.Uv,{children:(0,a.jsxs)("svg",{id:y().FilterMap,children:[(0,a.jsx)(j.default,{url:"https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json",geoName:"counties",stroke:"#FFFFFF"}),(0,a.jsx)(p.default,{url:"https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json",geoName:"states",stroke:"#666666"})]})})})})]}),(0,a.jsx)(T,{name:"Region",range:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia"],multiple:!0}),(0,a.jsxs)("div",{id:y().SelectedDesc,children:["Regions Selected",(0,a.jsx)("div",{id:y().SelectedBox,children:"Select regions above by clicking on the map or using the region selector."})]}),(0,a.jsx)(T,{name:"Resolution",range:["---- Select a Resolution ----","County","Census Tract","Block Group"]}),(0,a.jsx)(T,{name:"Year",range:["---- Select a Year ----",2019,2020,2021]})]})]});return(0,a.jsx)(_,{home:!0,children:(0,a.jsxs)("div",{className:y().Box,children:[g?(0,a.jsx)("div",{className:y().TopicBar,children:w}):(0,a.jsx)(a.Fragment,{}),(0,a.jsxs)("div",{id:y().MainContent,className:y().RowContent,children:[g?B:(0,a.jsxs)("div",{className:y().TopicBar,children:[w,B]}),D]})]})})}},6614:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return c}});var a=s(5893),n=s(7294),t=s(5848),r=s(8828),o=s(2154);let l=(0,t.Z)().scale(1e3).translate([400,225]);function c(e){let{url:i,geoName:s,stroke:t}=e,[c,d]=(0,n.useState)([]),[m,x]=(0,n.useState)([]);(0,n.useEffect)(()=>{fetch(i).then(e=>{if(200!==e.status){console.log("There was a problem: ".concat(e.status));return}e.json().then(e=>{console.log((0,o.Z)(e,e.objects[s])),d((0,o.Z)(e,e.objects[s]).features)}).then(()=>{x(Array(c.length).fill("#DADADA"))})})},[]);let u=e=>{let i=m.slice();"#E57200"!==i[e]?i[e]="#E57200":i[e]="#DADADA",x(i)};return(0,a.jsx)("svg",{viewBox:"0 0 800 450",width:"100%",height:"100%",children:(0,a.jsx)("g",{className:s,children:c.map((e,i)=>(0,a.jsx)("path",{d:(0,r.Z)().projection(l)(e),fill:"#E57200"!==m[i]?"#DADADA":m[i],stroke:t,strokeWidth:.5,onClick:()=>u(i)},"path-".concat(i)))})})}},720:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return c}});var a=s(5893),n=s(7294),t=s(5848),r=s(8828),o=s(5269);let l=(0,t.Z)().scale(1e3).translate([400,225]);function c(e){let{url:i,geoName:s,stroke:t}=e,[c,d]=(0,n.useState)([]);return(0,n.useEffect)(()=>{fetch(i).then(e=>{if(200!==e.status){console.log("There was a problem: ".concat(e.status));return}e.json().then(e=>{console.log((0,o.Z)(e,e.objects[s])),d((0,o.Z)(e,e.objects[s]).coordinates)})})},[]),(0,a.jsx)("svg",{viewBox:"0 0 800 450",width:"100%",height:"100%",children:(0,a.jsx)("g",{className:s,children:c.map((e,i)=>(0,a.jsx)("path",{d:(0,r.Z)().projection(l)(e),fill:"transparent",stroke:t,strokeWidth:.5},"path-".concat(i)))})})}},4871:function(e){e.exports={Box:"Home_Box__xVzeU",TopicTab:"Home_TopicTab__5O_RX",TopicBar:"Home_TopicBar__j_lVS",TabContainer:"Home_TabContainer__aMFkg",ActiveTab:"Home_ActiveTab__7GsFh",RowContent:"Home_RowContent__skofN",ContentInvisible:"Home_ContentInvisible__QacJx",VisContainer:"Home_VisContainer__9FEeD",TitleBox:"Home_TitleBox__e4EGE",ToggleIcon:"Home_ToggleIcon__tpnBQ",SummaryBox:"Home_SummaryBox__cWhev",SummaryItem:"Home_SummaryItem__UMdnP",SummaryValue:"Home_SummaryValue__38_JV",SummaryDescription:"Home_SummaryDescription__HX4mY",FilterSelector:"Home_FilterSelector__QSs4u",FilterDropdown:"Home_FilterDropdown__vYvUE",MainContent:"Home_MainContent__peTo5",FilterBox:"Home_FilterBox__2QXR_",FilterHead:"Home_FilterHead__Sr70_",FilterIcon:"Home_FilterIcon__zxysj",FilterItems:"Home_FilterItems__aR9L_",MapContainer:"Home_MapContainer__K4RN0",MapToggle:"Home_MapToggle__bY5EK",FilterMap:"Home_FilterMap__ZtIQe",FilterMapBox:"Home_FilterMapBox__KBCgA",SelectedDesc:"Home_SelectedDesc__4_tDx",SelectedBox:"Home_SelectedBox__y852l",TopicSelected:"Home_TopicSelected__gsZnM",FilterHeadItems:"Home_FilterHeadItems__mdiHP"}},2730:function(e){e.exports={Box:"layout_Box__Sb46f",NavbarUva:"layout_NavbarUva___AwCG",NavTab:"layout_NavTab__anDg8",NavbarBrand:"layout_NavbarBrand__RPLP4",NavContainer:"layout_NavContainer__wPnmU",DashboardName:"layout_DashboardName__36J_1"}}},function(e){e.O(0,[428,141,231,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);