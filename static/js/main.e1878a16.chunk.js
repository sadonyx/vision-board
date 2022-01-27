(this["webpackJsonpvision-board"]=this["webpackJsonpvision-board"]||[]).push([[0],{186:function(e,t,n){},187:function(e,t,n){},32:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(28),i=n.n(r),a=(n(186),n(187),n(42)),l=n(9);function d(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var b=function(){var e=Object(c.useState)(d()),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){function e(){o(d)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},s=n(65),u=n(89),j=n(136),f=(n(32),n(11)),x=n(105),O=n(104),h=n(41),g=n(147),p=n(146),v=n(31),m=n(64),C=n(6),y=function(e){var t=e.source,n=e.getChosenImage,o=e.getHoveredImage,r=Object(c.useState)(!1),i=Object(l.a)(r,2),a=i[0],d=i[1];return t.map((function(e,t){return Object(C.jsxs)(f.a,{children:[Object(C.jsxs)(m.a,{id:e.id,bounds:".boundWindow",minWidth:"10%",minHeight:"10%",lockAspectRatio:!0,cancel:".cancel",className:"panningDisabled",style:{background:"url(".concat(e.blob,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat"},onMouseEnter:function(){d({condition:!0,id:e.id}),o(e.blob)},onMouseLeave:function(){d({condition:!1,id:e.id}),o(null)},children:[Object(C.jsx)("img",{src:e.blob,alt:e.id,className:"selector"}),Object(C.jsx)(O.a,{id:t,colorScheme:"teal",variant:"solid",fontSize:"15pt",size:"xs",position:"absolute",top:"5px",left:"5px",onClick:function(){n(e.id)},className:a.condition&&a.id===e.id?"visible":"invisible",children:Object(C.jsx)(h.b,{})})]},e.id),Object(C.jsx)(x.a,{position:"fixed",bottom:"30px",left:"25px"})]},e.id)}))},S=n(139),k=n(7),w=n(22),z=Object(c.createContext)(),E=Object(c.createContext)();function T(){return Object(c.useContext)(z)}function P(){return Object(c.useContext)(E)}var I=function(e){var t=e.children,n=Object(c.useState)({changeBackground:!1,eyedropOnOff:!1,backgroundColor:{rgb:"rgb(255, 255, 255)",hex:"#ffffff"},imageHover:{},selectedColor:{rgb:"rgb(255, 255, 255)",hex:"#ffffff"},eyedropColor:{}}),o=Object(l.a)(n,2),r=o[0],i=o[1],a=r.changeBackground,d=r.selectedColor,b=r.eyedropColor,s=function(e){i((function(t){return Object(k.a)(Object(k.a)({},t),{},{backgroundColor:e})}))};return Object(w.useEffect)((function(){!0===a&&s(d)}),[a,d]),Object(w.useEffect)((function(){Object.keys(b).length>0&&i((function(e){return Object(k.a)(Object(k.a)({},e),{},{selectedColor:b})}))}),[b]),Object(C.jsx)(z.Provider,{value:r,children:Object(C.jsx)(E.Provider,{value:{handleBackgroundColor:s,handleEyedropColor:function(e,t){i((function(n){return Object(k.a)(Object(k.a)({},n),{},{eyedropColor:{rgb:e,hex:t}})}))},handleChangeBackground:function(e){i((function(t){return Object(k.a)(Object(k.a)({},t),{},{changeBackground:!e})}))},handleSelectedColor:function(e){var t="rgb(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,")");i((function(n){return Object(k.a)(Object(k.a)({},n),{},{selectedColor:{rgb:t,hex:e.hex}})}))}},children:t})})},N=function(e){var t=e.color_object,n=e.retrieveSwatch,o=Object(c.useState)({}),r=Object(l.a)(o,2),i=r[0],a=r[1],d=P().handleSelectedColor,b=[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9]],s=[[t[0],t[1]],[t[2],t[3]],[t[4],t[5]],[t[6],t[7]],[t[8],t[9]]];function u(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}return Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{children:Object(C.jsxs)(x.c,{direction:"column",bg:"rgba(255, 255, 255, 0.25)",padding:"10px",borderRadius:"15px",children:[Object(C.jsx)(x.c,{direction:"row",children:function(e){return e.map((function(e){return Object(C.jsxs)(f.a,{children:[Object(C.jsx)(x.b,{size:"40px",bg:e,cursor:"pointer",title:"Click to copy hex value to Color Picker. (".concat(e,")"),onMouseOver:function(){return function(e){var t={rgb:u(e),hex:e};a(t)}(e)},onClick:function(){n(i),d(i)}}),Object(C.jsx)(x.d,{})]},e)}))}(b)}),Object(C.jsx)(x.a,{marginTop:"10px",width:"100%",children:function(e){return Object(C.jsx)(S.Gradient,{gradients:e,property:"background",gradientType:"linear",element:"div",angle:"30deg",transitionType:"sequential",duration:"1500",className:"gradient"})}(s)})]})})},t.id)},R=n(140),B=n(148),D=function(e){var t=e.eyedrop_rgb,n=e.eyedrop_hex,c=T().selectedColor,o=P(),r=o.handleEyedropColor,i=o.handleSelectedColor,a=Object(w.useState)({displayColorPicker:!1,color:{rgb:"rgb(255, 255, 255)",hex:"#ffffff"}}),d=Object(l.a)(a,2),b=d[0],s=d[1],u=b.displayColorPicker,j=b.color;return Object(w.useEffect)((function(){j.rgb!==t&&(s((function(e){return Object(k.a)(Object(k.a)({},e),{},{color:{rgb:t,hex:n}})})),r(t,n))}),[t,n,j.rgb,r]),Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{w:"40px",h:"40px",borderRadius:"10px",padding:"3px",bg:"gray",alignContent:"center",children:Object(C.jsx)(x.a,{bg:c.rgb,borderRadius:"8px",w:"34px",h:"34px",onClick:function(){s((function(e){return Object(k.a)(Object(k.a)({},e),{},{displayColorPicker:!0})}))},children:u?Object(C.jsx)(x.a,{style:{position:"relative",zIndex:"auto",bottom:"19.2rem",right:"13.5rem"},onMouseLeave:function(){s((function(e){return Object(k.a)(Object(k.a)({},e),{},{displayColorPicker:!1})}))},children:Object(C.jsx)(B.a,{color:c,onChange:function(e){var t="rgb(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,")");s((function(n){return Object(k.a)(Object(k.a)({},n),{},{color:{rgb:t,hex:e.hex}})})),i(e)}})}):null})})})},L=function(e){var t=e.imageHover,n=Object(w.useState)({image:null,pickedColor:{rgb:"rgb(255, 255, 255)",hex:"#ffffff"},eyedropOnce:!0}),c=Object(l.a)(n,2),o=c[0],r=c[1],i=P().handleEyedropColor,a=o.eyedropOnce,d=o.pickedColor,b=d.rgb,s=d.hex;return Object(w.useEffect)((function(){r((function(e){return Object(k.a)(Object(k.a)({},e),{},{imageHover:t})}))}),[t]),Object(C.jsx)(f.a,{children:Object(C.jsxs)(x.c,{direction:"row",children:[Object(C.jsx)(D,{eyedrop_rgb:b,eyedrop_hex:s}),Object(C.jsx)(x.d,{}),Object(C.jsxs)(O.a,{colorScheme:"teal",variant:"solid",children:[Object(C.jsx)(x.a,{fontSize:"16px",children:Object(C.jsx)(v.b,{position:"fixed"})}),Object(C.jsx)(x.a,{position:"absolute",opacity:"0",top:"0px",left:"0px",children:Object(C.jsx)(R.EyeDropper,{onChange:function(e){var t=e.rgb,n=e.hex;r((function(e){return Object(k.a)(Object(k.a)({},e),{},{pickedColor:{rgb:t,hex:n}})})),i(t,n)},once:a,pickRadius:1,cursorActive:"crosshair"})})]})]})})},_=n(145),H=Object(c.createContext)(),W=Object(c.createContext)();function A(){return Object(c.useContext)(W)}var F=function(e){var t=e.children,n=Object(c.useState)([]),o=Object(l.a)(n,2),r=o[0],i=o[1],d=T().selectedColor;return Object(C.jsx)(H.Provider,{value:{state:r},children:Object(C.jsx)(W.Provider,{value:{handleNewText:function(){i((function(e){return[].concat(Object(a.a)(e),[{id:Object(s.a)(),content:"text",fontSize:"11pt",readOnly:"false",changeTextColor:!1,color:{rgb:"rgb(0,0,0)",hex:"#000000"}}])}))},handleEditText:function(e){var t=e;i((function(e){return e.filter((function(e){return e.id!==t.id}))})),i((function(e){return[].concat(Object(a.a)(e),[{id:t.id,content:"yo",fontSize:t.fontSize,readOnly:t.readOnly,color:t.color}])}))},handleTextColor:function(e){var t=e;console.log(d.rgb),i((function(e){return[e.filter((function(e){return e.id!==t.id})),{id:t.id,content:t.content,fontSize:t.fontSize,readOnly:t.readOnly,changeTextColor:!t.changeTextColor,color:d}]}))}},children:t})})},M=function(){var e=Object(c.useContext)(H).state,t=A().handleTextColor;return e?e.map((function(e){return Object(C.jsx)(f.a,{children:Object(C.jsxs)(m.a,{id:e.id,bounds:".boundWindow",minWidth:"10%",minHeight:"10%",lockAspectRatio:!1,cancel:".cancel",className:"panningDisabled",children:[Object(C.jsx)(_.a,{id:e.id,name:"textbox1",defaultValue:e.content,style:{padding:"10px",fontSize:"36px",color:e.color.rgb},className:"panningDisabled"}),Object(C.jsx)(O.a,{position:"absolute",bottom:"5px",right:"5px",size:"50px",colorScheme:"teal",variant:"solid",onClick:function(){return t(e)},children:Object(C.jsx)(v.a,{})})]})},e.id)})):null},U=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=T(),d=i.backgroundColor,m=i.changeBackground,S=P().handleChangeBackground,k=A().handleNewText,w=Object(c.useState)(),z=Object(l.a)(w,2),E=z[0],I=z[1],R=function(e){I(e)},B=Object(c.useState)(),D=Object(l.a)(B,2),_=D[0],H=D[1],W=function(e){H(e)},F=Object(c.useState)({}),U=Object(l.a)(F,2),J=U[0],q=U[1],G=function(e){q(e)},V=Object(j.usePalette)(0===n.length?0:n[n.length-1].blob,10,"hex").data,X=b(),Y=X.height,Z=X.width;function $(e,t){var n=e[e.length-1].color_data=t;if("object"===typeof n)return n}Object(c.useEffect)((function(){return console.log("render"),V&&(r((function(e){return[].concat(Object(a.a)(e),[$(e,V)])})),r((function(e){return e.filter((function(e){return e.id}))}))),function(){console.log("unmount")}}),[V]);var K=function(e){if(e.target.files){var t=Array.from(e.target.files).map((function(e){return{blob:URL.createObjectURL(e),id:Object(s.a)()}}));r((function(e){return e.concat(t)})),Array.from(e.target.files).map((function(e){return URL.revokeObjectURL(e)}))}};return Object(C.jsx)(f.a,{children:Object(C.jsx)(u.b,{initialScale:.5,minScale:.5,maxScale:1,initialPositionX:.25*Z,initialPositionY:.25*Y,centerOnInit:!0,centerZoomedOut:!0,limitToBounds:!0,panning:{excluded:["panningDisabled","wheelDisabled"]},wheel:{step:.1},children:function(e){var t=e.resetTransform;return Object(C.jsx)(o.a.Fragment,{children:Object(C.jsxs)(x.a,{bg:"gray",className:"panningDisabled wheelDisabled",overflow:"hidden",w:Z,h:Y,children:[Object(C.jsx)(u.a,{children:Object(C.jsxs)(x.a,{flexDirection:"row",bg:d.rgb,h:"56.25vmax",w:"100vmax",className:"boundWindow",children:[Object(C.jsx)(M,{}),Object(C.jsx)(y,{source:n,getChosenImage:R,getHoveredImage:W})]},"canvas")}),Object(C.jsx)(x.a,{position:"fixed",bottom:"20px",left:"25px",children:n.length>0&&E?Object(C.jsx)(N,{color_object:n.find((function(e){return e.id===E})).color_data,retrieveSwatch:G}):null}),Object(C.jsx)(x.a,{position:"fixed",bottom:"220px",right:"25px",children:Object(C.jsx)(O.a,{colorScheme:"teal",variant:"solid",onClick:function(){S(m)},children:m?Object(C.jsx)(h.a,{}):Object(C.jsx)(v.a,{})})}),Object(C.jsx)(x.a,{position:"fixed",bottom:"170px",right:"25px",children:Object(C.jsx)(O.a,{colorScheme:"teal",variant:"solid",onClick:function(){return k()},children:Object(C.jsx)(p.a,{})})}),Object(C.jsx)(x.a,{position:"fixed",bottom:"120px",right:"25px",w:"103px",children:Object(C.jsx)(L,{imageHover:_,selectedSwatch:J})}),Object(C.jsx)(x.a,{position:"fixed",bottom:"70px",right:"25px",children:Object(C.jsx)(O.a,{colorScheme:"teal",variant:"solid",onClick:function(){return t()},children:Object(C.jsx)(g.a,{})})}),Object(C.jsx)(x.a,{position:"fixed",bottom:"20px",right:"25px",children:Object(C.jsxs)(O.a,{leftIcon:Object(C.jsx)(h.c,{}),colorScheme:"teal",variant:"solid",fontSize:"11pt",className:"hide_4_print",children:["Upload",Object(C.jsx)("input",{type:"file",multiple:!0,id:"file",accept:"image/png, image/jpeg, image/gif",onChange:K,style:{opacity:"0%",position:"absolute",width:"100%",height:"auto"}})]})})]})})}})})};var J=function(){return Object(C.jsx)(I,{children:Object(C.jsx)(F,{children:Object(C.jsx)(U,{})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,337)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(J,{})}),document.getElementById("root")),q()}},[[334,1,2]]]);
//# sourceMappingURL=main.e1878a16.chunk.js.map