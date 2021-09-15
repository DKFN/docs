"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3872],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return a},SM:function(){return c},Yb:function(){return p},aj:function(){return f},rt:function(){return m},Ut:function(){return g},PZ:function(){return h}});n(87462),n(63366),n(67294);var r=n(3905),o=n(80907),i=function(){return(0,o.zu)().path},a=function(e){var t=e.title,n=e.description,o=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:i()+"/"+o},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},c=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},d=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},p=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},f={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},m={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},g={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},h={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Item:function(){return d("Item")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}}},26547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(87469),c=["components"],s={id:"welcome",description:"Welcome to the new nanos world Official Documentation!",sidebar_position:0,slug:"/"},u="\ud83d\udc4b Welcome",l={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"\ud83d\udc4b Welcome",description:"Welcome to the new nanos world Official Documentation!",source:"@site/docs/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/pt-BR/docs/next/",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/welcome.mdx",tags:[],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630320236,formattedLastUpdatedAt:"30/08/2021",sidebarPosition:0,frontMatter:{id:"welcome",description:"Welcome to the new nanos world Official Documentation!",sidebar_position:0,slug:"/"},sidebar:"main",next:{title:"Contributing to the Docs",permalink:"/pt-BR/docs/next/contributing-to-the-docs"}},d=[{value:"Starting Out",id:"starting-out",children:[]}],p={toc:d};function f(e){var t=e.components,s=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-welcome"},"\ud83d\udc4b Welcome"),(0,i.kt)("p",null,"Welcome to the new nanos world Official Documentation!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(51371).Z})),(0,i.kt)("p",null,"Welcome to the ",(0,i.kt)("strong",{parentName:"p"},"nanos world Official Documentation"),"! A compilation of technical documentation written by nanos and you! Get started by reading through the introductory pages, or navigate to a specific page by using the search box."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udcb9 This docs is constantly improving and growing. We count on your help giving us feedback and even adding new pages or information on it \ud83d\ude01!"),(0,i.kt)("p",{parentName:"div"},"\ud83d\udc91 You are allowed and encouraged to edit this and the other pages of this docs, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/contributing-to-the-docs"},"Contributing to the Docs")," for more information on how to collaborate!"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udca1 We have a centralized space for reporting ",(0,i.kt)("strong",{parentName:"p"},"BUGs")," and ",(0,i.kt)("strong",{parentName:"p"},"Suggest")," new Ideas in ",(0,i.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"https://issues.nanos.world"),". nanos world is a feedback-driven game, all your suggestions are listened and deeply internally discussed!"))),(0,i.kt)("h2",{id:"starting-out"},"Starting Out"),(0,i.kt)(a.SM,{href:"getting-started/quick-start",mdxType:"ReferenceLink"},"\ud83d\udccc Quick Start"),(0,i.kt)(a.SM,{href:"getting-started/tutorials-and-examples/tutorials",mdxType:"ReferenceLink"},"\ud83d\udcd1 Tutorials & Examples"),(0,i.kt)(a.SM,{href:"core-concepts/server-manual/server-installation",mdxType:"ReferenceLink"},"\ud83d\udcbb Server Installation"),(0,i.kt)(a.SM,{href:"core-concepts/packages/packages",mdxType:"ReferenceLink"},"\ud83d\udce6 Packages Guide"),(0,i.kt)(a.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"\ud83d\udcda Classes Guide"))}f.isMDXComponent=!0},51371:function(e,t,n){t.Z=n.p+"assets/images/new-docs-899f7fa511a6b734c8b3153ea914dd86.png"}}]);