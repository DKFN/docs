"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9804],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={description:"How to use nanos world Discord methods to create a nice integration for your server",tags:["scripting"]},s="Discord Integration",l={unversionedId:"core-concepts/scripting/discord-integration",id:"core-concepts/scripting/discord-integration",isDocsHomePage:!1,title:"Discord Integration",description:"How to use nanos world Discord methods to create a nice integration for your server",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/core-concepts/scripting/discord-integration.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/discord-integration",permalink:"/pt-BR/docs/next/core-concepts/scripting/discord-integration",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/discord-integration.md",tags:[{label:"scripting",permalink:"/pt-BR/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"How to use nanos world Discord methods to create a nice integration for your server",tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Traces & Raycasting",permalink:"/pt-BR/docs/next/core-concepts/scripting/traces-and-raycasting"},next:{title:"Interacting with the Sun",permalink:"/pt-BR/docs/next/core-concepts/scripting/interacting-with-the-sun"}},p=[{value:"Updating the Player Discord Activity (Rich Presence)",id:"updating-the-player-discord-activity-rich-presence",children:[]}],d={toc:p};function u(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discord-integration"},"Discord Integration"),(0,o.kt)("p",null,"How to use nanos world Discord methods to create a nice integration for your server."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(86326).Z})),(0,o.kt)("p",null,"Integrating your server with Discord is really easy! We provide a built-in integration which is ready to use, but you can also add your own Discord Application ID and use your own application!"),(0,o.kt)("h2",{id:"updating-the-player-discord-activity-rich-presence"},"Updating the Player Discord Activity ","(","Rich Presence",")"),(0,o.kt)("p",null,"We made the process very simple, we have one method for changing the Player's Activity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local state = "Working as Truck Driver"\nlocal details = "Awesome Roleplay"\nlocal large_text = "Honk!"\nlocal large_image = "screenshot_191"\n\nClient.SetDiscordActivity(state, details, large_image, large_text)\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How it will look like",src:n(77980).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"You can use your own Application ID to upload your own Images! :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h2",{parentName:"div",id:"using-your-own-application-id"},"Using your own Application ID"),(0,o.kt)("p",{parentName:"div"},"Using your own Application ID brings the advantage of being able to configure it the way you want, and even uploading your own images to be displayed in the Rich Presence."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"How it will look like",src:n(78317).Z})),(0,o.kt)("p",{parentName:"div"},"Initializing your own Application ID is extremely easy, just execute the following code on the Client side:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"Client.InitializeDiscord(client_id)\n")))))}u.isMDXComponent=!0},77980:function(e,t,n){t.Z=n.p+"assets/images/discord-integration-01-362ab77a7fdee9c9c4c6629b99a49dd8.jpg"},78317:function(e,t,n){t.Z=n.p+"assets/images/discord-integration-02-4bcbe9b207ba7a21fa2dca85efcd2a40.jpg"},86326:function(e,t,n){t.Z=n.p+"assets/images/discord-847e1ae1272681dc4f48fde28b370c6b.jpg"}}]);