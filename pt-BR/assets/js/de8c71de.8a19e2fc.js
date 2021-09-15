"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5055],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(v,s(s({ref:n},p),{},{components:t})):a.createElement(v,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43212:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),s=["components"],o={description:"All you need to know about Events",sidebar_position:1,tags:["scripting"]},c="Events Guide",l={unversionedId:"core-concepts/scripting/events-guide",id:"core-concepts/scripting/events-guide",isDocsHomePage:!1,title:"Events Guide",description:"All you need to know about Events",source:"@site/docs/core-concepts/scripting/events-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/events-guide",permalink:"/pt-BR/docs/next/core-concepts/scripting/events-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/events-guide.md",tags:[{label:"scripting",permalink:"/pt-BR/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630277154,formattedLastUpdatedAt:"29/08/2021",sidebarPosition:1,frontMatter:{description:"All you need to know about Events",sidebar_position:1,tags:["scripting"]},sidebar:"main",previous:{title:"Classes Guide",permalink:"/pt-BR/docs/next/core-concepts/scripting/classes-guide"},next:{title:"Authority Concepts",permalink:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts"}},p=[{value:"Classes Events",id:"classes-events",children:[{value:"Subscribing for Class Events",id:"subscribing-for-class-events",children:[]},{value:"Unsubscribing of Class Events",id:"unsubscribing-of-class-events",children:[]}]},{value:"Entity Events",id:"entity-events",children:[{value:"Subscribing for Entity Events",id:"subscribing-for-entity-events",children:[]},{value:"Unsubscribing of Entity Events",id:"unsubscribing-of-entity-events",children:[]}]},{value:"Custom Events",id:"custom-events",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events-guide"},"Events Guide"),(0,r.kt)("p",null,"All you need to know about Events."),(0,r.kt)("h2",{id:"classes-events"},"Classes Events"),(0,r.kt)("p",null,"In nanos world, all actions performed by Players or Entities can be obtained through ",(0,r.kt)("strong",{parentName:"p"},"events"),"."),(0,r.kt)("p",null,"The most basic event to bring an example is the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Spawn")),". Every time an entity is spawned, the event ",(0,r.kt)("inlineCode",{parentName:"p"},"Spawn")," will be triggered."),(0,r.kt)("h3",{id:"subscribing-for-class-events"},"Subscribing for Class Events"),(0,r.kt)("p",null,"Registering for events is very easy and straightforward using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscribe"),", let's say we want to know where a Player has joined the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'Player.Subscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " has joined!")\nend)\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Most events are triggered on both Client and Server sides, only a few rare exceptions which will be elicited by the ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts#methods-and-events-availability"},"Availability"),"."))),(0,r.kt)("h3",{id:"unsubscribing-of-class-events"},"Unsubscribing of Class Events"),(0,r.kt)("p",null,"Currently there is two ways of unsubscribing from events:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Unsubscribing events will ",(0,r.kt)("strong",{parentName:"p"},"always")," only unregister from events which were registered in the Package you are."))),(0,r.kt)("h4",{id:"unsubscribing-from-all-events"},"Unsubscribing from all Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- This will unregister from all "Spawn" events of Player registered in this Package\nPlayer.Unsubscribe("Spawn")\n')),(0,r.kt)("h4",{id:"unsubscribing-from-a-specific-event-callback"},"Unsubscribing from a specific Event Callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Declares the Callback beforehand\nfunction OnSpawnPlayer(player)\n    Package.Log(player:GetName() .. " has joined!")\nend\n\n-- Subscribes the event, passing the Callback\nPlayer.Subscribe("Spawn", OnSpawnPlayer)\n\n-- Subscribes for the same event, twice\nPlayer.Subscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " has joined again!")\nend)\n\n-- Unsubscribes only from the first Callback\nPlayer.Unsubscribe("Spawn", OnSpawnPlayer)\n\n-- This will keep triggering "player has joined again" but will not trigger\n-- "player has joined" anymore\n')),(0,r.kt)("h2",{id:"entity-events"},"Entity Events"),(0,r.kt)("p",null,"In nanos world it is possible to register for events on specific Entities as well, this way the callback will only be triggered if that specific entity is the event reason."),(0,r.kt)("h3",{id:"subscribing-for-entity-events"},"Subscribing for Entity Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawns a Character\nlocal my_character = Character()\n\nmy_character:Subscribe("EnterVehicle", function(self, vehicle)\n    -- my_character entered vehicle\nend)\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that once the entity is destroyed, all events registered for it will be unregistered automatically!"))),(0,r.kt)("h3",{id:"unsubscribing-of-entity-events"},"Unsubscribing of Entity Events"),(0,r.kt)("p",null,"Currently there is two ways of unsubscribing from events:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Unsubscribing events will ",(0,r.kt)("strong",{parentName:"p"},"always")," only unregister from events which were registered in the Package you are."))),(0,r.kt)("h4",{id:"unsubscribing-from-all-entity-events"},"Unsubscribing from all Entity Events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- This will unregister from all "EnterVehicle" events of this specific Character\n-- registered in this Package\nmy_character:Unsubscribe("EnterVehicle")\n')),(0,r.kt)("h4",{id:"unsubscribing-from-a-specific-entity-event-callback"},"Unsubscribing from a specific Entity Event Callback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Declares the Callback beforehand\nfunction OnCharacterEnteredVehicle(character, vehicle)\n    -- Entered vehicle!\nend\n\n-- Subscribes the event, passing the Callback\nmy_character:Subscribe("EnterVehicle", OnCharacterEnteredVehicle)\n\n-- Subscribes for the same event, twice\nmy_character:Subscribe("EnterVehicle", function(character, vehicle)\n    -- Entered vehicle again!\nend)\n\n-- Unsubscribes only from the first Callback\nmy_character:Unsubscribe("EnterVehicle", OnCharacterEnteredVehicle)\n')),(0,r.kt)("h2",{id:"custom-events"},"Custom Events"),(0,r.kt)("p",null,"In nanos world, it is possible to define and call Custom Events. For that, please refer to Events Static Class."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Custom Events will be always called and triggered in all Packages."))))}u.isMDXComponent=!0}}]);