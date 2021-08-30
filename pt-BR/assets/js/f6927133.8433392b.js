"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5039],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74674:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={description:"How to create a Monster Truck using the Vehicle system",tags:["tutorial-example","script","m\xeddias"]},c="Monster Truck",l={unversionedId:"getting-started/tutorials-and-examples/monster-truck",id:"version-latest/getting-started/tutorials-and-examples/monster-truck",isDocsHomePage:!1,title:"Monster Truck",description:"How to create a Monster Truck using the Vehicle system",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/getting-started/tutorials-and-examples/monster-truck.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/monster-truck",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/monster-truck",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/monster-truck.md",tags:[{label:"tutorial-example",permalink:"/pt-BR/docs/tags/tutorial-example"},{label:"script",permalink:"/pt-BR/docs/tags/script"},{label:"m\xeddias",permalink:"/pt-BR/docs/tags/midias"}],version:"latest",frontMatter:{description:"How to create a Monster Truck using the Vehicle system",tags:["tutorial-example","script","m\xeddias"]},sidebar:"version-latest/main",previous:{title:"WIP: HTTP Requests",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/http-requests"},next:{title:"Name Tags",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/name-tags"}},u=[],d={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monster-truck"},"Monster Truck"),(0,a.kt)("p",null,"How to create a Monster Truck using the Vehicle system."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(87925).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Pickup\nlocal vehicle = Vehicle(Vector(0, 0, 100), Rotator(), "nanos-world::SK_Pickup", 0, true, false, true, "nanos-world::A_Vehicle_Engine_10")\n\n-- Configures it\nvehicle:SetEngineSetup(4500)\nvehicle:SetSteeringWheelSetup(Vector(0, 27, 120), 24)\nvehicle:SetHeadlightsSetup(Vector(250, 0, 70))\n\n-- Adds 4 Static Mesh wheels attached to each mesh\'s Wheel Bone (those won\'t have collision and are visual only)\nvehicle:AddStaticMeshAttached("wheel_rear_left",   "nanos-world::SM_Tire_01", "Wheel_Rear_Left",   Vector(0, -35, 0), Rotator(0, -90, 0))\nvehicle:AddStaticMeshAttached("wheel_rear_right",  "nanos-world::SM_Tire_01", "Wheel_Rear_Right",  Vector(0,  45, 0), Rotator(0, -90, 0))\nvehicle:AddStaticMeshAttached("wheel_front_left",  "nanos-world::SM_Tire_01", "Wheel_Front_Left",  Vector(0, -35, 0), Rotator(0,  90, 0))\nvehicle:AddStaticMeshAttached("wheel_front_right", "nanos-world::SM_Tire_01", "Wheel_Front_Right", Vector(0,  45, 0), Rotator(0,  90, 0))\n\n-- Configures each "Physical" Wheel, note that as our Wheel Static Mesh has height of 160 and width 60, we configure the wheels to have radius\n-- of 80 and width 60, also because of SK_Pickup bones are not perfectly aligned, left wheels must be laterally offset a bit\nvehicle:SetWheel(0, "Wheel_Front_Left",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))\nvehicle:SetWheel(1, "Wheel_Front_Right", 80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))\nvehicle:SetWheel(2, "Wheel_Rear_Left",   80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))\nvehicle:SetWheel(3, "Wheel_Rear_Right",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))\n\n-- Adds only a Passenger and Driver door/seat\nvehicle:SetDoor(0, Vector(50, -75, 105), Vector( 8, -32.5,  95), Rotator(0, 0, 10), 70, -150)\nvehicle:SetDoor(1, Vector(50,  75, 105), Vector(25,    50,  90), Rotator(0, 0,  0), 70,  150)\n\n-- As we set AutoCreatePhysics = false on the constructor, we need to call this after configuring it (so if there is any player connected, he\n-- doesn\'t need to recreate the physics for each function called - improving the performance)\nvehicle:RecreatePhysics()\n')))}p.isMDXComponent=!0},87925:function(e,t,r){t.Z=r.p+"assets/images/monster-truck-02f3d04227b14d117feb4a452481af7f.jpg"}}]);