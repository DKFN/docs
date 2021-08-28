"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4899],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=s,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(h,r(r({ref:t},l),{},{components:a})):n.createElement(h,r({ref:t},l))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49309:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),r=["components"],o={description:"How to export and use Static Meshes from Unreal Engine",sidebar_position:3,tags:["assets"]},c="Static Meshes",d={unversionedId:"assets-modding/creating-assets/static-meshes",id:"assets-modding/creating-assets/static-meshes",isDocsHomePage:!1,title:"Static Meshes",description:"How to export and use Static Meshes from Unreal Engine",source:"@site/docs/assets-modding/creating-assets/static-meshes.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/static-meshes",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/static-meshes",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/static-meshes.md",tags:[{label:"assets",permalink:"/pt-BR/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630145072,formattedLastUpdatedAt:"8/28/2021",sidebarPosition:3,frontMatter:{description:"How to export and use Static Meshes from Unreal Engine",sidebar_position:3,tags:["assets"]},sidebar:"tutorialSidebar",previous:{title:"WIP: Water",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/maps-and-levels/water"},next:{title:"Characters Meshes",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/characters-meshes"}},l=[{value:"Creating and Exporting a Static Mesh",id:"creating-and-exporting-a-static-mesh",children:[]},{value:"Importing and Using Assets in your Server",id:"importing-and-using-assets-in-your-server",children:[]}],p={toc:l};function m(e){var t=e.components,o=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static-meshes"},"Static Meshes"),(0,i.kt)("p",null,"A Static Mesh is the most straightforward asset to be imported and used in nanos world, as they don\u2019t have skeleton, their usage is very seamless. In nanos world Static Meshes are mainly used for ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/character"},"Props")," and/or Weapons."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please do not confuse ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/static-mesh"},"Unreal's Static Mesh"),"!"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets#types-of-assets"},"Unreal's Static Mesh")," official definition and usage, also for information on how to import a .FBX into Unreal, how to optimize it and so on. There are also thousands of tutorials regarding importing a .FBX from Blender ","(","or other Modeling tool",")"," into Unreal Engine."))),(0,i.kt)("h2",{id:"creating-and-exporting-a-static-mesh"},"Creating and Exporting a Static Mesh"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Attention! This page is old and this tutorial may be outdated! Please refer to ",(0,i.kt)("a",{parentName:"p",href:"adk-assets-development-kit"},"ADK")," for a modern approach."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please before continuing, make sure you have and are using the ",(0,i.kt)("a",{parentName:"p",href:"adk-assets-development-kit"},"ADK - Assets Development Kit"),"."))),(0,i.kt)("p",null,"It is very simple to create and export Static Meshes, let's create simple Cube imported from a .fbx ","(","Static Mesh",")"," and a Material ","(","applied to the cube",")"," for our Assets. We\u2019ve also created and placed them in a folder called MyPack which will help us afterwards."),(0,i.kt)("h4",{id:"cube-static-mesh-and-material-applied-to-the-cube"},"Cube Static Mesh and Material applied to the Cube"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(49075).Z})),(0,i.kt)("h4",{id:"double-click-on-the-cube-to-open-the-static-mesh-overview"},"Double click on the Cube to open the Static Mesh overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(70567).Z})),(0,i.kt)("p",null,"For exporting them in a recognizable way by nanos world, you need to \u201cPackage the Project\u201d ","(","i.e. cooking and packaging it",")",", for that just select the following option and select any folder in your computer and wait it finishes, it may take some minutes:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(37692).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9308).Z})),(0,i.kt)("p",null,"After finishing, you will get a folder like that:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(26232).Z})),(0,i.kt)("h2",{id:"importing-and-using-assets-in-your-server"},"Importing and Using Assets in your Server"),(0,i.kt)("p",null,"After packaging your project, we will manually copy the exported folder from it, the one we are looking for probably will be located at ",(0,i.kt)("inlineCode",{parentName:"p"},"assets-development-kit/Content/"),". As we created a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPack"),", our exported assets will be at ",(0,i.kt)("inlineCode",{parentName:"p"},"assets-development-kit/Content/MyPack/"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(95711).Z})),(0,i.kt)("p",null,"And thats it! You must now just copy ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPack/")," folder inside your Server\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets/")," folder and create a configuration file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets.toml")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPack/")," folder with the pattern described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets#assets-pack-configuration"},"Assets Pack Configuration File"),". For each Asset you have in your Pack, you must add an entry in the configuration file."),(0,i.kt)("p",null,"For our Cube mesh, we just need to add an entry with the Path of the cube relative to our Assets folder in the pattern ",(0,i.kt)("inlineCode",{parentName:"p"},'[ASSET_NAME] = "[ASSET_PATH]"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Assets.toml"',title:'"Assets.toml"'},'# Static Meshes\n[assets.static_meshes]\nSM_Cube = "SM_Cube"\n')),(0,i.kt)("p",null,"Then it is possible to spawn our Cube like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "MyPack::SM_Cube")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(36666).Z})))}m.isMDXComponent=!0},49075:function(e,t,a){t.Z=a.p+"assets/images/static-meshes-01-07d4e811c68cab427ef004f5e7a93fa1.jpg"},70567:function(e,t,a){t.Z=a.p+"assets/images/static-meshes-02-4bdca770ece87fcfbed170d5e54c0498.jpg"},37692:function(e,t,a){t.Z=a.p+"assets/images/static-meshes-03-418d44df119162f5f538805c94ff26c1.jpg"},9308:function(e,t,a){t.Z=a.p+"assets/images/static-meshes-04-e53113676ea092c532282b5d3c06a2b3.jpg"},26232:function(e,t,a){t.Z=a.p+"assets/images/static-meshes-05-52e160ea3f6dd7630fc9f6be5c40f775.jpg"},95711:function(e,t,a){t.Z=a.p+"assets/images/static-meshes-06-0a741e74d45d8062dd739cf73669ae5e.jpg"},36666:function(e,t,a){t.Z=a.p+"assets/images/static-meshes-07-9d293bed72cf673b1d01e58d34acba55.jpg"}}]);