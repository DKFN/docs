"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2871],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return i},SM:function(){return o},Yb:function(){return d},aj:function(){return u},rt:function(){return k},Ut:function(){return g},PZ:function(){return f}});n(87462),n(63366),n(67294);var a=n(3905),r=n(80907),l=function(){return(0,r.zu)().path},i=function(e){var t=e.title,n=e.description,r=e.href,i=e.image_src;return(0,a.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,a.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,a.kt)("h4",null,t),(0,a.kt)("p",null,n))},o=function(e){var t=e.children,n=e.href;return(0,a.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:l()+"/"+n},t,(0,a.kt)("span",null,n))},s=function(e,t){return(0,a.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,a.kt)("img",{src:e,title:t}))},c=function(e){return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},m=function(e,t){return(0,a.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,a.kt)("a",{href:l()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},u={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},k={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},g={Vector:function(){return m("Vector")},Rotator:function(){return m("Rotator")},Color:function(){return m("Color")},Quat:function(){return m("Quat","quaternion")},Vector2D:function(){return m("Vector2D","vectortwod")}},f={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Item:function(){return p("Item")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}}},40825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(87469),o=["components"],s={description:"Subscribe for user-defined Events",tags:["static-class"]},c="\ud83d\udea9 Events",m={unversionedId:"scripting-reference/static-classes/events",id:"scripting-reference/static-classes/events",isDocsHomePage:!1,title:"\ud83d\udea9 Events",description:"Subscribe for user-defined Events",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/static-classes/events.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/events",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/events",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/events.mdx",tags:[{label:"static-class",permalink:"/pt-BR/docs/next/tags/static-class"}],version:"current",frontMatter:{description:"Subscribe for user-defined Events",tags:["static-class"]},sidebar:"main",previous:{title:"\u2328\ufe0f Client",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/client"},next:{title:"\ud83d\udce6 Package",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/package"}},p=[{value:"Static Functions",id:"static-functions",children:[]},{value:"Examples",id:"examples",children:[{value:"Passing entities through Events",id:"passing-entities-through-events",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-events"},"\ud83d\udea9 Events"),(0,l.kt)("p",null,"Subscribe for user-defined Events"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is a Static Class named ",(0,l.kt)("inlineCode",{parentName:"p"},"Events"),". You can access it\u2019s methods directly with ",(0,l.kt)("inlineCode",{parentName:"p"},"."),". It is not possible to initialize or create new instances."))),(0,l.kt)(i.SM,{href:"core-concepts/scripting/events-guide",mdxType:"ReferenceLink"},"Events Guide"),(0,l.kt)("h2",{id:"static-functions"},"Static Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#call"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Call")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event which will be triggered in all Local Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.ClientOnly,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#callremote"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"CallRemote")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event on Client which will be triggered in all Server Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.ServerOnly,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#callremote"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"CallRemote")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event on Server which will be triggered in all Client's Packages of ",(0,l.kt)("inlineCode",{parentName:"td"},"Player"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.aj.ServerOnly,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#broadcastremote"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"BroadcastRemote")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calls an Event on Server which will be triggered in all Client's Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#subscribe"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Subscribe")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Subscribes for an user-created event which will be triggered for both local or ",(0,l.kt)("em",{parentName:"td"},"remote","*")," called events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"events#unsubscribe"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Unsubscribe")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unsubscribes from all subscribed events in this Package with that event name, optionally passing the function to unsubscribe only that callback")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("em",{parentName:"p"},"Remote","*")," means the other side, e.g.: if I\u2019m the ",(0,l.kt)("strong",{parentName:"p"},"Client"),", the remote is the Server. If I\u2019m the ",(0,l.kt)("strong",{parentName:"p"},"Server"),", the remote is the Client."))),(0,l.kt)("h4",{id:"call"},(0,l.kt)("inlineCode",{parentName:"h4"},"Call")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event which will be triggered in all Local Packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.Call(event_name, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"-callremote"},(0,l.kt)(i.aj.ClientOnly,null)," ",(0,l.kt)("inlineCode",{parentName:"h4"},"CallRemote")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event on Client which will be triggered in all Server Packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.CallRemote(event_name, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"callremote"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h4"},"CallRemote")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event on Server which will be triggered in all Client's Packages of ",(0,l.kt)("inlineCode",{parentName:"p"},"Player"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.CallRemote(event_name, player, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Player"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"player"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The remote player to send this event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"broadcastremote"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h4"},"BroadcastRemote")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calls an Event on Server which will be triggered in all Client's Packages")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.BroadcastRemote(event_name, args...)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to trigger the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Player"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"player"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The remote player to send this event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Any,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"args..."))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Arguments to pass to the event")))),(0,l.kt)("h4",{id:"subscribe"},(0,l.kt)("inlineCode",{parentName:"h4"},"Subscribe")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Subscribes for an user-created event which will be triggered for both local or remote called events")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.Subscribe(event_name, function()\n\nend)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to Subscribe for an event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback function to execute")))),(0,l.kt)("h4",{id:"unsubscribe"},(0,l.kt)("inlineCode",{parentName:"h4"},"Unsubscribe")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unsubscribes from all subscribed events in this Package with that event name, optionally passing the function to unsubscribe only that callback")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"Events.Unsubscribe(event_name, callback)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"event_name"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Event Name to Unsubscribe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nil")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback function to unsubscribe")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- register for a local Event (local = client only)\nEvents.Subscribe("MyLocalEvent", function(my_text)\n    Package.Log("Event received locally! " .. my_text)\n    -- outputs "Event received locally! hello nanos world!"\nend)\n\n-- calls a local Event in all Local Packages\nEvents.Call("MyLocalEvent", "hello nanos world!")\n\n-- register for a server Event (remote = server)\nEvents.Subscribe("MyClientEvent", function(my_text)\n    Package.Log("Event received from server! " .. my_text)\n    -- outputs "Event received from server! hello nanos world!"\nend)\n\n-- calls a remote Event in all Server Packages\nEvents.CallRemote("MyServerEvent", "hello nanos world!")\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"On ",(0,l.kt)("strong",{parentName:"p"},"Server"),", registering for remote events has an addition parameter: ",(0,l.kt)(i.PZ.Player,null),", which is the client who sent the event."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- register for a local Event (local = server only)\nEvents.Subscribe("MyLocalEvent", function(my_text)\n    Package.Log("Event received locally! " .. my_text)\n    -- outputs "Event received locally! hello nanos world!"\nend)\n\n-- calls a local Event in all Local Packages\nEvents.Call("MyLocalEvent", "hello nanos world!")\n\n-- register for a client Event (remote = client)\nEvents.Subscribe("MyServerEvent", function(player, my_text)\n    Package.Log(player:GetName() .. " sent an event from client! " .. my_text)\n    -- outputs "Syed sent an event from client! hello nanos world!"\n\n            -- sends an "answer" to the player which sent this event\n    Events.CallRemote("MyClientEvent", player, "hello nanos world! message only for you!")\nend)\n\n-- sends a remote Event to all Players in all Client Packages\nEvents.BroadcastRemote("MyClientEvent", "hello nanos world!")\n')),(0,l.kt)("h3",{id:"passing-entities-through-events"},"Passing entities through Events"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- register for an Event (remote or local)\nEvents.Subscribe("MyAnotherEvent", function(my_text, my_vector, my_character, my_number)\n    Package.Log("Event received! " .. my_text .. " " .. my_vector.X .. " " .. my_character:GetViewMode() .. " " .. my_number)\n    -- outputs "Event received! hello nanos world! 123 1 456"\nend)\n\n-- passing Characters through events\nlocal my_temp_character = Character()\n\n-- calls a local Event in all Local Packages\nEvents.Call("MyEvent", "hello nanos world!", Vector(123, 123, 123), my_temp_character, 456)\n\n-- calls a remote Event in all Server Packages\nEvents.CallRemote("MyEvent", "hello nanos world!", Vector(123, 123, 123), my_temp_character, 456)\n')))}u.isMDXComponent=!0}}]);