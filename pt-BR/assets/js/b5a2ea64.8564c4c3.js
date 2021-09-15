"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1394],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],c={description:"How to use nanos world Discord methods to create a nice integration for your server",tags:["scripting"]},s="Discord Integration",l={unversionedId:"core-concepts/scripting/discord-integration",id:"version-latest/core-concepts/scripting/discord-integration",isDocsHomePage:!1,title:"Discord Integration",description:"How to use nanos world Discord methods to create a nice integration for your server",source:"@site/versioned_docs/version-latest/core-concepts/scripting/discord-integration.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/discord-integration",permalink:"/pt-BR/docs/core-concepts/scripting/discord-integration",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/discord-integration.md",tags:[{label:"scripting",permalink:"/pt-BR/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630320236,formattedLastUpdatedAt:"30/08/2021",frontMatter:{description:"How to use nanos world Discord methods to create a nice integration for your server",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Traces & Raycasting",permalink:"/pt-BR/docs/core-concepts/scripting/traces-and-raycasting"},next:{title:"Interacting with the Sun",permalink:"/pt-BR/docs/core-concepts/scripting/interacting-with-the-sun"}},d=[{value:"Updating the Player Discord Activity (Rich Presence)",id:"updating-the-player-discord-activity-rich-presence",children:[]},{value:"Using your own Application ID",id:"using-your-own-application-id",children:[]}],p={toc:d};function u(e){var t=e.components,c=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discord-integration"},"Discord Integration"),(0,o.kt)("p",null,"How to use nanos world Discord methods to create a nice integration for your server."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(86326).Z})),(0,o.kt)("p",null,"Integrating your server with Discord is really easy! We provide a built-in integration which is ready to use, but you can also add your own Discord Application ID and use your own application!"),(0,o.kt)("h2",{id:"updating-the-player-discord-activity-rich-presence"},"Updating the Player Discord Activity ","(","Rich Presence",")"),(0,o.kt)("p",null,"We made the process very simple, we have one method for changing the Player's Activity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local state = "Working as Truck Driver"\nlocal details = "Awesome Roleplay"\nlocal large_text = "Honk!"\nlocal large_image = "screenshot_191"\n\nClient.SetDiscordActivity(state, details, large_image, large_text)\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How it will look like",src:n(77980).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use your own Application ID to upload your own Images!"))),(0,o.kt)("h2",{id:"using-your-own-application-id"},"Using your own Application ID"),(0,o.kt)("p",null,"Using your own Application ID brings the advantage of being able to configure it the way you want, and even uploading your own images to be displayed in the Rich Presence."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How it will look like",src:n(78317).Z})),(0,o.kt)("p",null,"Initializing your own Application ID is extremely easy, just execute the following code on the Client side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"Client.InitializeDiscord(client_id)\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"And you are done! Now you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client.SetDiscordActivity()"),"method!"))))}u.isMDXComponent=!0},77980:function(e,t,n){t.Z=n.p+"assets/images/discord-integration-01-362ab77a7fdee9c9c4c6629b99a49dd8.jpg"},78317:function(e,t,n){t.Z=n.p+"assets/images/discord-integration-02-4bcbe9b207ba7a21fa2dca85efcd2a40.jpg"},86326:function(e,t,n){t.Z=n.p+"assets/images/discord-847e1ae1272681dc4f48fde28b370c6b.jpg"}}]);