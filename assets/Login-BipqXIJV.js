import{r as t,j as e,S as r}from"./index-BeSWtaUT.js";import{L as a,s as d,v as l,T as c,t as h,x as i,I as u}from"./IconifyIcon-BkU4dPNB.js";import{I as x,l as g,B as j}from"./Image-C1V_RGlN.js";import{T as o}from"./Typography-DuzmwPKO.js";import{S as f}from"./Skeleton-Dz9WvKvu.js";const w="/react-mui-elegant-dashboard/assets/login-CErduFBG.png",I=()=>{const[n,p]=t.useState(!1),m=()=>p(!n);return e.jsxs(r,{direction:"row",bgcolor:"background.paper",boxShadow:s=>s.shadows[3],height:560,width:{md:960},children:[e.jsxs(r,{width:{md:.5},m:2.5,gap:10,children:[e.jsx(a,{href:"/",width:"fit-content",children:e.jsx(x,{src:g,width:82.6})}),e.jsxs(r,{alignItems:"center",gap:2.5,width:330,mx:"auto",children:[e.jsx(o,{variant:"h3",children:"Login"}),e.jsxs(d,{variant:"standard",fullWidth:!0,children:[e.jsx(l,{shrink:!0,htmlFor:"email",children:"Email"}),e.jsx(c,{variant:"filled",placeholder:"Enter your email",id:"email",InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(i,{icon:"ic:baseline-email"})})}})]}),e.jsxs(d,{variant:"standard",fullWidth:!0,children:[e.jsx(l,{shrink:!0,htmlFor:"password",children:"Password"}),e.jsx(c,{variant:"filled",placeholder:"********",type:n?"text":"password",id:"password",InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(u,{"aria-label":"toggle password visibility",onClick:m,edge:"end",sx:{color:"text.secondary"},children:n?e.jsx(i,{icon:"ic:baseline-key"}):e.jsx(i,{icon:"ic:baseline-key-off"})})})}})]}),e.jsx(o,{variant:"body1",sx:{alignSelf:"flex-end"},children:e.jsx(a,{href:"/authentication/reset-password",underline:"hover",children:"Forget password"})}),e.jsx(j,{variant:"contained",fullWidth:!0,children:"Log in"}),e.jsxs(o,{variant:"body2",color:"text.secondary",children:["Don't have an account ?"," ",e.jsx(a,{href:"/authentication/sign-up",underline:"hover",fontSize:s=>s.typography.body1.fontSize,children:"Sign up"})]})]})]}),e.jsx(t.Suspense,{fallback:e.jsx(f,{variant:"rectangular",height:1,width:1,sx:{bgcolor:"primary.main"}}),children:e.jsx(x,{alt:"Login banner",src:w,sx:{width:.5,display:{xs:"none",md:"block"}}})})]})};export{I as default};