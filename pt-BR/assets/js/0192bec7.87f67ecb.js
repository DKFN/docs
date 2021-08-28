"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4916],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51159:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},l="Packages Communication",s={unversionedId:"core-concepts/scripting/communicating-between-packages",id:"core-concepts/scripting/communicating-between-packages",isDocsHomePage:!1,title:"Packages Communication",description:"All you need to know to communicate between different Packages",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/core-concepts/scripting/communicating-between-packages.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/communicating-between-packages",permalink:"/pt-BR/docs/next/core-concepts/scripting/communicating-between-packages",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/communicating-between-packages.md",tags:[{label:"scripting",permalink:"/pt-BR/docs/next/tags/scripting"}],version:"current",sidebarPosition:3,frontMatter:{description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Authority Concepts",permalink:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts"},next:{title:"Entity Values",permalink:"/pt-BR/docs/next/core-concepts/scripting/entity-values"}},p=[{value:"Custom Events",id:"custom-events",children:[{value:"Sending data through the network",id:"sending-data-through-the-network",children:[]},{value:"Exporting a Function",id:"exporting-a-function",children:[]},{value:"Calling an Exported Function from another Package",id:"calling-an-exported-function-from-another-package",children:[]}]},{value:"Using Package&#39;s RequirePackage",id:"using-packages-requirepackage",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packages-communication"},"Packages Communication"),(0,o.kt)("p",null,"All you need to know to communicate between different Packages"),(0,o.kt)("p",null,"In nanos world there are 3 main ways which you can interact with other ",(0,o.kt)("strong",{parentName:"p"},"Packages"),". In this page we will explain in details how to do so."),(0,o.kt)("h2",{id:"custom-events"},"Custom Events"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"For more information and examples about using Custom Events, please refer to Events. :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h3",{parentName:"div",id:"communicating-with-packages-in-the-same-side"},"Communicating with Packages in the same Side"),(0,o.kt)("p",{parentName:"div"},"Custom Events are the easier way to send data or information to other packages:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'local my_parameter1 = 123\nlocal my_parameter2 = "hello there"\nlocal my_parameter3 = { important_stuff = "omg!" }\n\nEvents.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)\n')),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)\n    Package.Log("Received " .. parameter1) -- Received 123\n    Package.Log("Received " .. parameter2) -- Received hello there\n    Package.Log("Received " .. parameter3) -- Received table\nend)\n')))),(0,o.kt)("h3",{id:"sending-data-through-the-network"},"Sending data through the network"),(0,o.kt)("p",null,"Sending information through the network is not different from sending in the same side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_parameter1 = "cool data from network"\n\n-- Call this event to all Players\nEvents.BroadcastRemote("GetThisFromServer", my_parameter1)\n\nlocal player_02 = GetPlayerSomehow()\n\n-- Or call this event to a specific player\nEvents.CallRemote("GetThisFromServer", player_02, my_parameter1)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'Events.Subscribe("GetThisFromServer", function(parameter1, parameter2, parameter3)\n    Package.Log("Received " .. parameter1) -- Received cool data from network\nend)\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,o.kt)("strong",{parentName:"h5"},"Note:")," Calling network events will trigger the event in all Packages from the other side. :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h2",{parentName:"div",id:"packages-exported-functions"},"Packages Exported Functions"),(0,o.kt)("p",{parentName:"div"},"Another way of communicating is using Exported Functions. With Exported Functions you can define functions in your Package which can be called by any other Package and have a value returned."))),(0,o.kt)("h3",{id:"exporting-a-function"},"Exporting a Function"),(0,o.kt)("p",null,"For exporting functions, use ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.Export()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'-- Defines a function which you want to export\nfunction SpawnCoolWeapon(location, rotation)\n    local cool_weapon = Weapon(location or Vector(), rotation or Rotator(), ...)\n    return cool_weapon\nend\n\n-- Exports the function to be called by other Packages \nPackage.Export("SpawnCoolWeapon", SpawnCoolWeapon)\n')),(0,o.kt)("h3",{id:"calling-an-exported-function-from-another-package"},"Calling an Exported Function from another Package"),(0,o.kt)("p",null,"For calling a function exported by another Package, use ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.Call()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'-- Calls the exported function\nlocal cool_weapon = Package.Call("PackageOne","SpawnCoolWeapon", Vector(), Rotator())\n')),(0,o.kt)("h2",{id:"using-packages-requirepackage"},"Using Package's RequirePackage"),(0,o.kt)("p",null,"The last way of communicating between Packages is by loading other Packages inside the current Package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'Package.Log("Hello from Package One!")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Package.RequirePackage("PackageOne")\n\nPackage.Log("Hello from Package Two!")\n')),(0,o.kt)("h4",{id:"output"},"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Package One!\nHello from Package Two!\n")),(0,o.kt)("p",null,"This will copy all content from ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageOne")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageTwo"),". I.e. the Index.lua from ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageTwo")," will be loaded where you called ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.RequirePackage()"),"."))}m.isMDXComponent=!0}}]);