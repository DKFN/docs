"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8527],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),h=s,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],o={description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},c="Classes Guide",l={unversionedId:"core-concepts/scripting/classes-guide",id:"core-concepts/scripting/classes-guide",isDocsHomePage:!1,title:"Classes Guide",description:"All you need to know about Classes",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/de/docs/next/core-concepts/scripting/classes-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/classes-guide.md",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:0,frontMatter:{description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Loading Screen",permalink:"/de/docs/next/core-concepts/packages/loading-screen"},next:{title:"Events Guide",permalink:"/de/docs/next/core-concepts/scripting/events-guide"}},p=[{value:"Classes Inheritance",id:"classes-inheritance",children:[]},{value:"Static Classes",id:"static-classes",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"classes-guide"},"Classes Guide"),(0,r.kt)("p",null,"All you need to know about Classes"),(0,r.kt)("p",null,"All entities in nanos world are represented by a Class. In Lua, classes are represented by ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/prop"},"tables"),", etc",")"," are made with Classes/tables methods following an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","Object-oriented programming")," pattern",")",". In this page we will explain more about that."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"In nanos world we have 3 types of Classes (or Structures): ",(0,r.kt)("inlineCode",{parentName:"h5"},"Classes"),", ",(0,r.kt)("inlineCode",{parentName:"h5"},"Static Classes")," and ",(0,r.kt)("inlineCode",{parentName:"h5"},"Utility Classes"),". :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h2",{parentName:"div",id:"classes"},"Classes"),(0,r.kt)("p",{parentName:"div"},"If you read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Spawning an entity with a Constructor\nlocal my_entity = Entity()\n\n-- Interacting with the entity with it's methods\nmy_entity:MyFunction()\n")))),(0,r.kt)("p",null,"This is how ",(0,r.kt)("strong",{parentName:"p"},"OOP")," works! You create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, nanos world scripting is a ",(0,r.kt)("strong",{parentName:"p"},"modern approach")," to ",(0,r.kt)("strong",{parentName:"p"},"modern programming"),"."),(0,r.kt)("h3",{id:"classes-inheritance"},"Classes Inheritance"),(0,r.kt)("p",null,"Under the hood, nanos world Classes follow an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Inheritance Pattern"),", which means we have base parent classes, and it\u2019s childs which inherits all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in Character and ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/prop"},"Prop")," ","(","which are Actors",")"," it is possible to call the function: ",(0,r.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The ",(0,r.kt)("a",{parentName:"h5",href:"/docs/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also ",(0,r.kt)("strong",{parentName:"h5"},"Static Methods")," to get and retrieve entities directly. :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"spawning-entities"},"Spawning Entities"),(0,r.kt)("p",{parentName:"div"},"Spawning entities in nanos world is extremely easy and straightforward, let's say we want to spawn a Character:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"local my_character = Character()\n")))),(0,r.kt)("p",null,"Check all Classes that nanos world provides in the sidebar ",(0,r.kt)("strong",{parentName:"p"},"Scripting Reference -> Classes")," item. :::"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Keep in mind that some Classes can only be spawned in the ",(0,r.kt)("strong",{parentName:"h5"},"Server"),", others can only be spawned in the ",(0,r.kt)("strong",{parentName:"h5"},"Client"),". :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"destroying-entities"},"Destroying Entities"),(0,r.kt)("p",{parentName:"div"},"All classes ","(","but Player",")"," allow you to destroy them with the method ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy()"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"my_character:Destroy()\n")))),(0,r.kt)("h2",{id:"static-classes"},"Static Classes"),(0,r.kt)("p",null,"Static Classes in nanos world are Classes which you cannot Spawn. Instead you can use it's methods directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"."),(0,r.kt)("p",null,"For example, if you want to interact with World ","(","move the sun, set it raining, etc",")",", you will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"World")," Static Class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Makes it 9:25 AM\nWorld.SetTime(9, 25)\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Access to ",(0,r.kt)("strong",{parentName:"h5"},"Static Classes / Static Methods")," are made with ",(0,r.kt)("strong",{parentName:"h5"},(0,r.kt)("inlineCode",{parentName:"strong"},".")),". :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h2",{parentName:"div",id:"utility-classes"},"Utility Classes"),(0,r.kt)("p",{parentName:"div"},"Besides Classes and Static Classes, we have the ",(0,r.kt)("strong",{parentName:"p"},"Utility Classes"),"! Those are mostly structs used in nanos world API such as Vector, Rotator, Color, JSON and some others."))))}m.isMDXComponent=!0}}]);