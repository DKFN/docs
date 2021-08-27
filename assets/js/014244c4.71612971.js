"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4899],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=s,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7482:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),i=["components"],o={description:"How to export and use Static Meshes from Unreal Engine",sidebar_position:3},d="Static Meshes",c={unversionedId:"assets-modding/creating-assets/static-meshes",id:"assets-modding/creating-assets/static-meshes",isDocsHomePage:!1,title:"Static Meshes",description:"How to export and use Static Meshes from Unreal Engine",source:"@site/docs/assets-modding/creating-assets/static-meshes.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/static-meshes",permalink:"/docs/assets-modding/creating-assets/static-meshes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/assets-modding/creating-assets/static-meshes.md",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630069070,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:3,frontMatter:{description:"How to export and use Static Meshes from Unreal Engine",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"WIP: Water",permalink:"/docs/assets-modding/creating-assets/maps-and-levels/water"},next:{title:"Characters Meshes",permalink:"/docs/assets-modding/creating-assets/characters-meshes"}},l=[{value:"Creating and Exporting a Static Mesh",id:"creating-and-exporting-a-static-mesh",children:[]},{value:"Importing and Using Assets in your Server",id:"importing-and-using-assets-in-your-server",children:[]}],p={toc:l};function m(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"static-meshes"},"Static Meshes"),(0,r.kt)("p",null,"A Static Mesh is the most straightforward asset to be imported and used in nanos world, as they don\u2019t have skeleton, their usage is very seamless. In nanos world Static Meshes are mainly used for ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/character"},"Props")," and/or Weapons."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please do not confuse ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/static-mesh"},"Unreal's Static Mesh"),"!"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets#types-of-assets"},"Unreal's Static Mesh")," official definition and usage, also for information on how to import a .FBX into Unreal, how to optimize it and so on. There are also thousands of tutorials regarding importing a .FBX from Blender ","(","or other Modeling tool",")"," into Unreal Engine."))),(0,r.kt)("h2",{id:"creating-and-exporting-a-static-mesh"},"Creating and Exporting a Static Mesh"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Attention! This page is old and this tutorial may be outdated! Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/adk-assets-development-kit"},"ADK")," for a modern approach."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please before continuing, make sure you have and are using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/adk-assets-development-kit"},"ADK - Assets Development Kit"),"."))),(0,r.kt)("p",null,"It is very simple to create and export Static Meshes, let's create simple Cube imported from a .fbx ","(","Static Mesh",")"," and a Material ","(","applied to the cube",")"," for our Assets. We\u2019ve also created and placed them in a folder called MyPack which will help us afterwards."),(0,r.kt)("p",null,"For exporting them in a recognizable way by nanos world, you need to \u201cPackage the Project\u201d ","(","i.e. cooking and packaging it",")",", for that just select the following option and select any folder in your computer and wait it finishes, it may take some minutes:"),(0,r.kt)("p",null,"After finishing, you will get a folder like that:"),(0,r.kt)("h2",{id:"importing-and-using-assets-in-your-server"},"Importing and Using Assets in your Server"),(0,r.kt)("p",null,"After packaging your project, we will manually copy the exported folder from it, the one we are looking for probably will be located at ",(0,r.kt)("inlineCode",{parentName:"p"},"assets-development-kit/Content/"),". As we created a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"MyPack"),", our exported assets will be at ",(0,r.kt)("inlineCode",{parentName:"p"},"assets-development-kit/Content/MyPack/"),":"),(0,r.kt)("p",null,"And thats it! You must now just copy ",(0,r.kt)("inlineCode",{parentName:"p"},"MyPack/")," folder inside your Server\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets/")," folder and create a configuration file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"MyPack/")," folder with the pattern described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets#assets-pack-configuration"},"Assets Pack Configuration File"),". For each Asset you have in your Pack, you must add an entry in the configuration file."),(0,r.kt)("p",null,"For our Cube mesh, we just need to add an entry with the Path of the cube relative to our Assets folder in the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},'[ASSET_NAME] = "[ASSET_PATH]"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Assets.toml"',title:'"Assets.toml"'},'# Static Meshes\n[assets.static_meshes]\nSM_Cube = "SM_Cube"\n')),(0,r.kt)("p",null,"Then it is possible to spawn our Cube like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "MyPack::SM_Cube")\n')))}m.isMDXComponent=!0}}]);