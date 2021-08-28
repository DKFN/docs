"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8238],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),b=i,v=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return t?r.createElement(v,s(s({ref:n},u),{},{components:t})):r.createElement(v,s({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57427:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],c={description:"All you need to know about Events",sidebar_position:1,tags:["scripting"]},o="Events Guide",l={unversionedId:"core-concepts/scripting/events-guide",id:"core-concepts/scripting/events-guide",isDocsHomePage:!1,title:"Events Guide",description:"All you need to know about Events",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/events-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/events-guide",permalink:"/fr/docs/next/core-concepts/scripting/events-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/events-guide.md",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:1,frontMatter:{description:"All you need to know about Events",sidebar_position:1,tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Classes Guide",permalink:"/fr/docs/next/core-concepts/scripting/classes-guide"},next:{title:"Authority Concepts",permalink:"/fr/docs/next/core-concepts/scripting/authority-concepts"}},u=[{value:"Classes Events",id:"classes-events",children:[{value:"Subscribing for Class Events",id:"subscribing-for-class-events",children:[]}]},{value:"Entity Events",id:"entity-events",children:[{value:"Subscribing for Entity Events",id:"subscribing-for-entity-events",children:[]}]},{value:"Custom Events",id:"custom-events",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events-guide"},"Events Guide"),(0,a.kt)("p",null,"All you need to know about Events."),(0,a.kt)("h2",{id:"classes-events"},"Classes Events"),(0,a.kt)("p",null,"In nanos world, all actions performed by Players or Entities can be obtained through ",(0,a.kt)("strong",{parentName:"p"},"events"),"."),(0,a.kt)("p",null,"The most basic event to bring an example is the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Spawn")),". Every time an entity is spawned, the event ",(0,a.kt)("inlineCode",{parentName:"p"},"Spawn")," will be triggered."),(0,a.kt)("h3",{id:"subscribing-for-class-events"},"Subscribing for Class Events"),(0,a.kt)("p",null,"Registering for events is very easy and straightforward using the method ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscribe"),", let's say we want to know where a Player has joined the server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'Player.Subscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " has joined!")\nend)\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Most events are triggered on both Client and Server sides, only a few rare exceptions which will be elicited by the ",(0,a.kt)("a",{parentName:"h5",href:"/docs/core-concepts/scripting/authority-concepts#methods-and-events-availability"},"Availability"),". :::")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("h3",{parentName:"div",id:"unsubscribing-of-class-events"},"Unsubscribing of Class Events"),(0,a.kt)("p",{parentName:"div"},"Currently there is two ways of unsubscribing from events:"))),(0,a.kt)("h4",{id:"unsubscribing-from-all-events"},"Unsubscribing from all Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- This will unregister from all "Spawn" events of Player registered in this Package\nPlayer.Unsubscribe("Spawn")\n')),(0,a.kt)("h4",{id:"unsubscribing-from-a-specific-event-callback"},"Unsubscribing from a specific Event Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Declares the Callback beforehand\nfunction OnSpawnPlayer(player)\n    Package.Log(player:GetName() .. " has joined!")\nend\n\n-- Subscribes the event, passing the Callback\nPlayer.Subscribe("Spawn", OnSpawnPlayer)\n\n-- Subscribes for the same event, twice\nPlayer.Subscribe("Spawn", function(player)\n    Package.Log(player:GetName() .. " has joined again!")\nend)\n\n-- Unsubscribes only from the first Callback\nPlayer.Unsubscribe("Spawn", OnSpawnPlayer)\n\n-- This will keep triggering "player has joined again" but will not trigger\n-- "player has joined" anymore\n')),(0,a.kt)("h2",{id:"entity-events"},"Entity Events"),(0,a.kt)("p",null,"In nanos world it is possible to register for events on specific Entities as well, this way the callback will only be triggered if that specific entity is the event reason."),(0,a.kt)("h3",{id:"subscribing-for-entity-events"},"Subscribing for Entity Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawns a Character\nlocal my_character = Character()\n\nmy_character:Subscribe("EnterVehicle", function(self, vehicle)\n    -- my_character entered vehicle\nend)\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note that once the entity is destroyed, all events registered for it will be unregistered automatically! :::")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("h3",{parentName:"div",id:"unsubscribing-of-entity-events"},"Unsubscribing of Entity Events"),(0,a.kt)("p",{parentName:"div"},"Currently there is two ways of unsubscribing from events:"))),(0,a.kt)("h4",{id:"unsubscribing-from-all-entity-events"},"Unsubscribing from all Entity Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- This will unregister from all "EnterVehicle" events of this specific Character\n-- registered in this Package\nmy_character:Unsubscribe("EnterVehicle")\n')),(0,a.kt)("h4",{id:"unsubscribing-from-a-specific-entity-event-callback"},"Unsubscribing from a specific Entity Event Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Declares the Callback beforehand\nfunction OnCharacterEnteredVehicle(character, vehicle)\n    -- Entered vehicle!\nend\n\n-- Subscribes the event, passing the Callback\nmy_character:Subscribe("EnterVehicle", OnCharacterEnteredVehicle)\n\n-- Subscribes for the same event, twice\nmy_character:Subscribe("EnterVehicle", function(character, vehicle)\n    -- Entered vehicle again!\nend)\n\n-- Unsubscribes only from the first Callback\nmy_character:Unsubscribe("EnterVehicle", OnCharacterEnteredVehicle)\n')),(0,a.kt)("h2",{id:"custom-events"},"Custom Events"),(0,a.kt)("p",null,"In nanos world, it is possible to define and call Custom Events. For that, please refer to Events Static Class."),(0,a.kt)("p",null,":::info Custom Events will be always called and triggered in all Packages. :::"))}d.isMDXComponent=!0}}]);