"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5961],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment."},s="Weapon Flashlight",c={unversionedId:"getting-started/tutorials-and-examples/weapon-flashlight",id:"version-0.73.0/getting-started/tutorials-and-examples/weapon-flashlight",isDocsHomePage:!1,title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",source:"@site/versioned_docs/version-0.73.0/getting-started/tutorials-and-examples/weapon-flashlight.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-flashlight",permalink:"/docs/getting-started/tutorials-and-examples/weapon-flashlight",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.73.0/getting-started/tutorials-and-examples/weapon-flashlight.md",version:"0.73.0",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630097936,formattedLastUpdatedAt:"8/27/2021",frontMatter:{description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment."},sidebar:"version-0.73.0/tutorialSidebar",previous:{title:"Prop Shooter",permalink:"/docs/getting-started/tutorials-and-examples/prop-shooter"},next:{title:"Weapon Scope",permalink:"/docs/getting-started/tutorials-and-examples/weapon-scope"}},p=[],u={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"weapon-flashlight"},"Weapon Flashlight"),(0,r.kt)("p",null,"This sample code attaches a Light to a Weapon to make a Flashlight attachment."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64739).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Package.RequirePackage("nanos-world-weapons")\n\n-- Spawns a Weapon\nmy_weapon = NanosWorldWeapons.AR4(Vector(), Rotator())\n\n-- Spawns a Spot Light (with color Black, to be turned on only when someone picks up it)\nmy_light = Light(Vector(), Rotator(), Color(0, 0, 0), 1, 1000, 1000, 35)\n\n-- Attaches the Light to the Weapon with offset X = 100 (at the weapon\'s front)\nmy_light:AttachTo(my_weapon)\nmy_light:SetRelativeLocation(Vector(100, 0, 0))\n\n-- Stores the light on the Weapon\nmy_weapon:SetValue("Light", my_light)\n\n-- Only when someone picks up this weapon, turns on the Flashlight (set it\'s color)\nmy_weapon:Subscribe("PickUp", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0.73, 0.67, 0.42))\n    end\nend)\n\n-- When the weapon is dropped, turns off the Flashlight (set it\'s color to black)\nmy_weapon:Subscribe("Drop", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0, 0, 0))\n    end\nend)\n')))}h.isMDXComponent=!0},64739:function(e,t,n){t.Z=n.p+"assets/images/weapon-flashlight-c5ed6a21aa78117f3a77e43706f6257b.jpg"}}]);