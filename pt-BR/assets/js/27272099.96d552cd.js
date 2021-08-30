"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2309],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14410:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","script","m\xeddias"]},c="Mira para Armas",l={unversionedId:"getting-started/tutorials-and-examples/weapon-scope",id:"version-latest/getting-started/tutorials-and-examples/weapon-scope",isDocsHomePage:!1,title:"Mira para Armas",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/getting-started/tutorials-and-examples/weapon-scope.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-scope",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/weapon-scope",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/weapon-scope.md",tags:[{label:"tutorial-example",permalink:"/pt-BR/docs/tags/tutorial-example"},{label:"script",permalink:"/pt-BR/docs/tags/script"},{label:"m\xeddias",permalink:"/pt-BR/docs/tags/midias"}],version:"latest",frontMatter:{description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","script","m\xeddias"]},sidebar:"version-latest/main",previous:{title:"Lanterna na Arma",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/weapon-flashlight"},next:{title:"X-Ray & Highlight",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/x-ray-and-highlight"}},p=[{value:"Some Static Mesh assets which can be used as scope:",id:"some-static-mesh-assets-which-can-be-used-as-scope",children:[]}],u={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mira-para-armas"},"Mira para Armas"),(0,o.kt)("p",null,"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(61585).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawning the AK47\nlocal my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())\n\n-- Adds a StaticMesh Attached with a RedDot mesh into AK47 on sight_socket bone from AK47 model. As our AK47 model already\n-- have a bone named sight_socket at the right location, we can just attach to it, otherwise we would\n-- need to set it\'s Attach Location to where the RedDot fits and using bone name as empty ""\nmy_ak47:AddStaticMeshAttached("sight", "nanos-world::SM_T4_Sight", "sight_socket")\n\n-- Makes the FOV multiplier reduces by 0.35x when ADS (aiming)\nmy_ak47.SightFOVMultiplier = 0.35\n\n-- Sets the ADS transform offset to fit the RedDot center position,\n-- each weapon will need a different offset to fit it\'s sight. AK47 + RedDot best fit is Z = -15.9\nmy_ak47:SetSightTransform(Vector(0, 0, -15.9), Rotator(0, 0, 0))\n')),(0,o.kt)("h2",{id:"some-static-mesh-assets-which-can-be-used-as-scope"},"Some Static Mesh assets which can be used as scope:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_T4_Sight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Vertgrip")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Suppressor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Scope_25x56_X"))))}d.isMDXComponent=!0},61585:function(e,t,a){t.Z=a.p+"assets/images/weapon-scope-c9a5f4bf7da95c8967629ec56db2cca9.jpg"}}]);