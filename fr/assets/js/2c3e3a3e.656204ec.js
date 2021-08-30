"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7778],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87469:function(e,n,t){t.d(n,{YS:function(){return a},SM:function(){return c},Yb:function(){return p},aj:function(){return f},rt:function(){return m},Ut:function(){return g},PZ:function(){return h}});t(87462),t(63366),t(67294);var r=t(3905),o=t(80907),i=function(){return(0,o.zu)().path},a=function(e){var n=e.title,t=e.description,o=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:i()+"/"+o},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,n),(0,r.kt)("p",null,t))},c=function(e){var n=e.children,t=e.href;return(0,r.kt)("a",{class:"reference-link",href:i()+"/"+t},n,(0,r.kt)("span",null,t))},s=function(e,n){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:n}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,n){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(n||e.toLowerCase())},e)},d=function(e,n){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(n||e.toLowerCase())},e)},p=function(e){var n=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+n.toLowerCase()},n)},f={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},m={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},g={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},h={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Item:function(){return d("Item")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}}},17647:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=t(87469),c=["components"],s={id:"welcome",description:"Bienvenue dans la nouvelle documentation officielle de nanos world!",sidebar_position:0,slug:"/"},u="\ud83d\udc4b Bienvenue",l={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"\ud83d\udc4b Bienvenue",description:"Bienvenue dans la nouvelle documentation officielle de nanos world!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/fr/docs/next/",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/welcome.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"welcome",description:"Bienvenue dans la nouvelle documentation officielle de nanos world!",sidebar_position:0,slug:"/"},sidebar:"main",next:{title:"Contribuer \xe0 la documentation",permalink:"/fr/docs/next/contributing-to-the-docs"}},d=[{value:"Commencer",id:"commencer",children:[]}],p={toc:d};function f(e){var n=e.components,s=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-bienvenue"},"\ud83d\udc4b Bienvenue"),(0,i.kt)("p",null,"Bienvenue dans la nouvelle documentation officielle de nanos world!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(51371).Z})),(0,i.kt)("p",null,"Bienvenue dans la ",(0,i.kt)("strong",{parentName:"p"},"Documentation Officielle de nanos world"),"! Une compilation de documentation technique \xe9crite par nanos et vous! Commencez par lire les pages d'introduction, ou acc\xe9dez \xe0 une page sp\xe9cifique en utilisant la bo\xeete de recherche."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udcb9 Cette documentation est en constante am\xe9lioration et croissance. Nous comptons sur votre aide pour nous donner des retours et m\xeame pour ajouter de nouvelles pages ou des informations sur elle \ud83d\ude01!"),(0,i.kt)("p",{parentName:"div"},"\ud83d\udc91 You are allowed and encouraged to edit this and the other pages of this docs, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/next/contributing-to-the-docs"},"Contributing to the Docs")," for more information on how to collaborate!"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udca1 Nous avons un espace centralis\xe9 pour rapporter des ",(0,i.kt)("strong",{parentName:"p"},"Bugs")," et ",(0,i.kt)("strong",{parentName:"p"},"Sugg\xe9rer")," de nouvelles id\xe9es sur ",(0,i.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"https://issues.nanos.world"),". nanos world est un jeu bas\xe9 sur les commentaires, toutes vos suggestions sont \xe9cout\xe9es et discut\xe9es en interne !"))),(0,i.kt)("h2",{id:"commencer"},"Commencer"),(0,i.kt)(a.SM,{href:"getting-started/quick-start",mdxType:"ReferenceLink"},"\ud83d\udccc D\xe9marrage rapide"),(0,i.kt)(a.SM,{href:"getting-started/tutorials-and-examples/tutorials",mdxType:"ReferenceLink"},"\ud83d\udcd1 Tutoriels & Exemples"),(0,i.kt)(a.SM,{href:"core-concepts/server-manual/server-installation",mdxType:"ReferenceLink"},"\ud83d\udcbb Installation du serveur"),(0,i.kt)(a.SM,{href:"core-concepts/packages/packages",mdxType:"ReferenceLink"},"\ud83d\udce6 Guide des Packages"),(0,i.kt)(a.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"\ud83d\udcda Guide des classes"))}f.isMDXComponent=!0},51371:function(e,n,t){n.Z=t.p+"assets/images/new-docs-899f7fa511a6b734c8b3153ea914dd86.png"}}]);