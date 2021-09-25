"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8405],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{YS:function(){return l},SM:function(){return o},Yb:function(){return m},aj:function(){return c},rt:function(){return k},Ut:function(){return g},PZ:function(){return N}});n(87462),n(63366),n(67294);var a=n(3905),r=n(80907),i=function(){return(0,r.zu)().path},l=function(t){var e=t.title,n=t.description,r=t.href,l=t.image_src;return(0,a.kt)("a",{class:"card-link",href:r.startsWith("http")?r:i()+"/"+r},(0,a.kt)("img",{src:l||"/img/docs/nanos-world-background.jpg"}),(0,a.kt)("h4",null,e),(0,a.kt)("p",null,n))},o=function(t){var e=t.children,n=t.href;return(0,a.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},e,(0,a.kt)("span",null,n))},s=function(t,e){return(0,a.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,a.kt)("img",{src:t,title:e}))},p=function(t){return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},d=function(t,e){return(0,a.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},u=function(t,e){return(0,a.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},m=function(t){var e=t.children;return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase()},e)},c={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},k={Number:function(){return p("number")},String:function(){return p("string")},Boolean:function(){return p("boolean")},Table:function(){return p("table")},Iterator:function(){return p("iterator")},Any:function(){return p("any")},Function:function(){return p("function")},Nil:function(){return p("nil")}},g={Vector:function(){return d("Vector")},Rotator:function(){return d("Rotator")},Color:function(){return d("Color")},Quat:function(){return d("Quat","quaternion")},Vector2D:function(){return d("Vector2D","vectortwod")}},N={Actor:function(){return u("Actor","base-classes/actor")},Paintable:function(){return u("Paintable","base-classes/paintable")},Pickable:function(){return u("Pickable","base-classes/pickable")},Cable:function(){return u("Cable")},Character:function(){return u("Character")},File:function(){return u("File")},Grenade:function(){return u("Grenade")},Item:function(){return u("Item")},Light:function(){return u("Light")},Particle:function(){return u("Particle")},Player:function(){return u("Player")},Prop:function(){return u("Prop")},Sound:function(){return u("Sound")},StaticMesh:function(){return u("StaticMesh","static-mesh")},TextRender:function(){return u("TextRender","text-render")},Trigger:function(){return u("Trigger")},Vehicle:function(){return u("Vehicle")},Weapon:function(){return u("Weapon")},WebUI:function(){return u("WebUI")}}},8187:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(87469),o=["components"],s={description:"Class for spawning a web browser in the screen. The browser will fill up the whole screen and is automatically resized.",sidebar_position:0,tags:["scripting","ui"]},p="\ud83d\udda5\ufe0f WebUI",d={unversionedId:"scripting-reference/classes/webui",id:"scripting-reference/classes/webui",isDocsHomePage:!1,title:"\ud83d\udda5\ufe0f WebUI",description:"Class for spawning a web browser in the screen. The browser will fill up the whole screen and is automatically resized.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/webui.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/webui",permalink:"/fr/docs/next/scripting-reference/classes/webui",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/webui.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"ui",permalink:"/fr/docs/next/tags/ui"}],version:"current",sidebarPosition:0,frontMatter:{description:"Class for spawning a web browser in the screen. The browser will fill up the whole screen and is automatically resized.",sidebar_position:0,tags:["scripting","ui"]},sidebar:"main",previous:{title:"\ud83d\udd2b Weapon",permalink:"/fr/docs/next/scripting-reference/classes/weapon"},next:{title:"Base Actor",permalink:"/fr/docs/next/scripting-reference/classes/base-classes/actor"}},u=[{value:"Utilisation",id:"utilisation",children:[]},{value:"Constructor Parameters",id:"constructor-parameters",children:[]},{value:"Functions",id:"functions",children:[{value:"<code>BringToFront</code>",id:"bringtofront",children:[]},{value:"<code>CallEvent</code>",id:"callevent",children:[]},{value:"<code>Destroy</code>",id:"destroy",children:[]},{value:"<code>LoadURL</code>",id:"loadurl",children:[]},{value:"<code>SetFocus</code>",id:"setfocus",children:[]},{value:"<code>SetFreeze</code>",id:"setfreeze",children:[]},{value:"<code>SetVisible</code>",id:"setvisible",children:[]},{value:"<code>IsValid</code>",id:"isvalid",children:[]},{value:"<code>GetID</code>",id:"getid",children:[]},{value:"<code>GetType</code>",id:"gettype",children:[]},{value:"<code>IsVisible</code>",id:"isvisible",children:[]},{value:"<code>Subscribe</code>",id:"subscribe",children:[]},{value:"<code>Unsubscribe</code>",id:"unsubscribe",children:[]}]},{value:"Events",id:"events",children:[{value:"<code>Failed</code>",id:"failed",children:[]},{value:"<code>Ready</code>",id:"ready",children:[]}]}],m={toc:u};function c(t){var e=t.components,s=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-webui"},"\ud83d\udda5\ufe0f WebUI"),(0,i.kt)("p",null,"Class for spawning a web browser in the screen. The browser will fill up the whole screen and is automatically resized."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(10745).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This HTML implementation is built upon same core as WebKit/Safari using ",(0,i.kt)("a",{parentName:"p",href:"https://ultralig.ht"},"Ultralight")," library, a next-generation HTML Renderer."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We are using a beta build of Ultralight, which now supports Audio and Video. Although it is still very unstable and some crashes may happen! Also the Audio currently plays only in 2D."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a ",(0,i.kt)("strong",{parentName:"p"},"Client")," only Class."))),(0,i.kt)(l.SM,{href:"core-concepts/scripting/user-interface",mdxType:"ReferenceLink"},"User Interface"),(0,i.kt)(l.SM,{href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"ReferenceLink"},"Basic HUD (HTML)"),(0,i.kt)("h2",{id:"utilisation"},"Utilisation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Using a local file\nmy_ui = WebUI(\n    "Awesome UI",            -- Name\n    "file:///UI/index.html", -- Path relative to this package (Client/)\n    true,                    -- Is Visible\n)\n\n-- Using a Web URL\nmy_browser = WebUI(\n    "Awesome Site",       -- Name\n    "http://nanos.world", -- Web\'s URL\n    true,                 -- Is Visible\n)\n\n-- Using a local file from another package folder\nmy_ui = WebUI(\n    "Awesome UI from Another Package", -- Name\n    "file:///UI/index.html",           -- Path relative to this package (Client/)\n    true,                              -- Is Visible\n    true,\n    true,\n    0,\n    0,\n    "my_ui_library_package"            -- Package where this HTML is located\n)\n')),(0,i.kt)("h4",{id:"communicating-between-lua-and-js-webui"},"Communicating between Lua and JS (WebUI)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'my_ui = WebUI("Awesome UI", "file:///UI/index.html")\n\nlocal param1 = 123\nlocal param2 = "hello"\n\n-- Calls a JS event\nmy_ui:CallEvent("MyEvent", param1, param2)\n\n-- Subscribes to receive JS events\nmy_ui:Subscribe("MyAnswer", function(param1)\n    Package.Log("Received back! %s", param1)\n    -- Will output \'Received back! Hey there!\'\nend)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Register for "MyEvent" from Lua\nEvents.Subscribe("MyEvent", function(param1, param2) {\n    console.log("Triggered! " + param1 + " " + param2);\n    // Will output \'Triggered! 123 hello\'\n\n    // Triggers "MyAnswer" on Lua\n    Events.Call("MyAnswer", "Hey there!");\n})\n')),(0,i.kt)("h2",{id:"constructor-parameters"},"Constructor Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Default")),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"name"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"path"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL or ",(0,i.kt)("inlineCode",{parentName:"td"},"file:///relative/to/client/folder.html"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"is_visible"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if WebUI is visible by default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"is_transparent"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if WebUI background is transparent")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"auto_resize"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"left"},"if should auto resize when screen changes it's size (useful OFF when you are painting meshes with WebUI)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"width"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"size of the WebUI when you are not using auto_resize")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"height"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"size of the WebUI when you are not using auto_resize")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"package_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"defaults to current package"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Usually you won't want to change this")))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#bringtofront"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"BringToFront")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Puts this WebUI in the front of all WebUIs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#callevent"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"CallEvent")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Calls an Event on the Browser\u2019s JavaScript")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#destroy"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Destroy")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Destroys this Browser")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#loadurl"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"LoadURL")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Loads a new File/URL in this Browser")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#setfocus"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetFocus")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forces Focus on this Browser")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#setfreeze"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetFreeze")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Freezes the WebUI Rendering to the surface")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#setvisible"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetVisible")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles the visibility")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#isvalid"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsValid")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns if this entity is Valid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#getid"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetID")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the network ID of this entity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#gettype"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetType")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the type of this Entity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#isvisible"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsVisible")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns if this WebUI is currently visible")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#subscribe"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Subscribe")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Subscribes for an Event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#unsubscribe"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Unsubscribe")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unsubscribes from all subscribed Events in this Entity and in this Package")))),(0,i.kt)("h3",{id:"bringtofront"},(0,i.kt)("inlineCode",{parentName:"h3"},"BringToFront")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Puts this WebUI in the front of all WebUIs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:BringToFront()\n")),(0,i.kt)("h3",{id:"callevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"CallEvent")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Calls an Event on the Browser's JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:CallEvent(event_name, arguments...)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Any,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"arguments..."))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"destroy"},(0,i.kt)("inlineCode",{parentName:"h3"},"Destroy")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Destroys this Browser")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:Destroy()\n")),(0,i.kt)("h3",{id:"loadurl"},(0,i.kt)("inlineCode",{parentName:"h3"},"LoadURL")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Loads a new File/URL in this Browser"),(0,i.kt)("p",{parentName:"blockquote"},"Returns")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:LoadURL(url)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"url"))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"setfocus"},(0,i.kt)("inlineCode",{parentName:"h3"},"SetFocus")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Enables the focus on this browser (i.e. can receive Keyboard input). You must call it when you want to enable Keyboard Input on WebUIs (after disabling Client's Input)"),(0,i.kt)("p",{parentName:"blockquote"},"Note: Only one browser can have focus per time.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:SetFocus()\n")),(0,i.kt)("h3",{id:"setfreeze"},(0,i.kt)("inlineCode",{parentName:"h3"},"SetFreeze")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Freezes the WebUI Rendering to the surface (it will still execute the JS under the hood)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:SetFreeze()\n")),(0,i.kt)("h3",{id:"setvisible"},(0,i.kt)("inlineCode",{parentName:"h3"},"SetVisible")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Toggles the visibility")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:SetVisible(is_visible)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Boolean,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"is_visible"))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"isvalid"},(0,i.kt)("inlineCode",{parentName:"h3"},"IsValid")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gets if this entity is Valid"),(0,i.kt)("p",{parentName:"blockquote"},"Returns ",(0,i.kt)(l.rt.Boolean,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:IsValid()\n")),(0,i.kt)("h3",{id:"getid"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetID")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gets the network ID of this entity"),(0,i.kt)("p",{parentName:"blockquote"},"Returns ",(0,i.kt)(l.rt.Number,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:GetID()\n")),(0,i.kt)("h3",{id:"gettype"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetType")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the type of this Entity"),(0,i.kt)("p",{parentName:"blockquote"},"Returns ",(0,i.kt)(l.rt.String,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:GetType()\n")),(0,i.kt)("h3",{id:"isvisible"},(0,i.kt)("inlineCode",{parentName:"h3"},"IsVisible")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns if this WebUI is currently visible"),(0,i.kt)("p",{parentName:"blockquote"},"Returns ",(0,i.kt)(l.rt.Boolean,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:IsVisible()\n")),(0,i.kt)("h3",{id:"subscribe"},(0,i.kt)("inlineCode",{parentName:"h3"},"Subscribe")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Subscribes for an Event")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:Subscribe(event_name, callback)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Function,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"function"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"unsubscribe"},(0,i.kt)("inlineCode",{parentName:"h3"},"Unsubscribe")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unsubscribes from all subscribed Events in this Entity and in this Package, optionally passing the function to unsubscribe only that callback")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"my_webui:Unsubscribe(event_name, callback)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Function,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"function"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nil")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#failed"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Failed")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When this page fails to load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"webui#ready"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Ready")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When this page is fully loaded ","(","DOM and JavaScript",")")))),(0,i.kt)("h3",{id:"failed"},(0,i.kt)("inlineCode",{parentName:"h3"},"Failed")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Triggered when this page fails to load")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'my_webui:Subscribe("Failed", function(error_code, message)\n    -- Load failed\nend)\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"error_code"))),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"message"))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"ready"},(0,i.kt)("inlineCode",{parentName:"h3"},"Ready")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Triggered when this page fails to load")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'my_webui:Subscribe("Ready", function()\n    -- When this page is fully loaded \\(DOM and JavaScript\\)\nend)\n')))}c.isMDXComponent=!0},10745:function(t,e,n){e.Z=n.p+"assets/images/webui-843fa115f19bb123616a67346bb293ec.jpg"}}]);