import{_ as u,c as v,s as y,a as x,r as R,b as S,j as n,d as $,u as G,e as T,g as L,f as B,h as P,S as M,L as w,B as H}from"./index-BeSWtaUT.js";import{I as g,B as N,l as U}from"./Image-C1V_RGlN.js";import{T as f}from"./Typography-DuzmwPKO.js";const _=["className","component","disableGutters","fixed","maxWidth","classes"],z=v(),E=y("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[s.root,s[`maxWidth${x(String(a.maxWidth))}`],a.fixed&&s.fixed,a.disableGutters&&s.disableGutters]}}),I=e=>G({props:e,name:"MuiContainer",defaultTheme:z}),A=(e,s)=>{const a=i=>L(s,i),{classes:l,fixed:p,disableGutters:m,maxWidth:t}=e,o={root:["root",t&&`maxWidth${x(String(t))}`,p&&"fixed",m&&"disableGutters"]};return T(o,a,l)};function D(e={}){const{createStyledComponent:s=E,useThemeProps:a=I,componentName:l="MuiContainer"}=e,p=s(({theme:t,ownerState:o})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:o})=>o.fixed&&Object.keys(t.breakpoints.values).reduce((i,r)=>{const c=r,d=t.breakpoints.values[c];return d!==0&&(i[t.breakpoints.up(c)]={maxWidth:`${d}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:o})=>u({},o.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},o.maxWidth&&o.maxWidth!=="xs"&&{[t.breakpoints.up(o.maxWidth)]:{maxWidth:`${t.breakpoints.values[o.maxWidth]}${t.breakpoints.unit}`}}));return R.forwardRef(function(o,i){const r=a(o),{className:c,component:d="div",disableGutters:b=!1,fixed:C=!1,maxWidth:k="lg"}=r,W=S(r,_),h=u({},r,{component:d,disableGutters:b,fixed:C,maxWidth:k}),j=A(h,l);return n.jsx(p,u({as:d,ownerState:h,className:$(j.root,c),ref:i},W))})}const F=D({createStyledComponent:B("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[s.root,s[`maxWidth${x(String(a.maxWidth))}`],a.fixed&&s.fixed,a.disableGutters&&s.disableGutters]}}),useThemeProps:e=>P({props:e,name:"MuiContainer"})}),O=F,Z="/react-mui-elegant-dashboard/assets/404-CLhBjZ75.jpg",Q=()=>{const e=n.jsx(H,{component:"header",sx:{position:"fixed",top:20,left:20,width:1,lineHeight:0},children:n.jsx(g,{src:U,width:82.6})});return n.jsxs(n.Fragment,{children:[e,n.jsx(O,{children:n.jsxs(M,{textAlign:"center",alignItems:"center",justifyContent:"center",minHeight:"100vh",mx:"auto",maxWidth:480,py:12,children:[n.jsx(f,{variant:"h2",sx:{mb:3},children:"Sorry, page not found!"}),n.jsx(f,{variant:"subtitle1",sx:{color:"text.secondary"},children:"Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."}),n.jsx(g,{src:Z,sx:{mx:"auto",width:1,height:"auto",my:{xs:5,sm:10}}}),n.jsx(N,{component:w,to:"/",size:"large",variant:"contained",children:"Back to Home"})]})})]})};export{Q as default};