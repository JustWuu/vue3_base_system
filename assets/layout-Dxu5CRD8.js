import{I as s,p as a,K as n}from"./index-xUVfnviE.js";const t=s({ripple:!1,darkTheme:!1,inputStyle:"outlined",menuMode:"static",theme:"lara-light-blue",scale:14,activeMenuItem:null}),e=s({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1,activeMenuItem:""});function m(){const o=(i,M)=>{t.darkTheme=M,t.theme=i},c=i=>{t.scale=i},l=i=>{t.activeMenuItem=i.value||i},u=()=>{t.menuMode==="overlay"&&(e.overlayMenuActive=!e.overlayMenuActive),window.innerWidth>991?e.staticMenuDesktopInactive=!e.staticMenuDesktopInactive:e.staticMenuMobileActive=!e.staticMenuMobileActive},v=a(()=>e.overlayMenuActive||e.staticMenuMobileActive),r=a(()=>t.darkTheme);return{layoutConfig:n(t),layoutState:n(e),changeThemeSettings:o,setScale:c,onMenuToggle:u,isSidebarActive:v,isDarkTheme:r,setActiveMenuItem:l}}export{m as u};