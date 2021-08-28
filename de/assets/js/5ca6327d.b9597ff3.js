"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4727],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18145:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["assets"]},l="Assets Development Kit",d={unversionedId:"assets-modding/creating-assets/adk-assets-development-kit",id:"assets-modding/creating-assets/adk-assets-development-kit",isDocsHomePage:!1,title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/adk-assets-development-kit.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/adk-assets-development-kit",permalink:"/de/docs/next/assets-modding/creating-assets/adk-assets-development-kit",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/adk-assets-development-kit.md",tags:[{label:"assets",permalink:"/de/docs/next/tags/assets"}],version:"current",sidebarPosition:2,frontMatter:{description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["assets"]},sidebar:"tutorialSidebar",previous:{title:"Importing Custom Assets",permalink:"/de/docs/next/assets-modding/creating-assets/importing-assets"},next:{title:"Creating Custom Maps",permalink:"/de/docs/next/assets-modding/creating-assets/maps-and-levels/importing-maps"}},p=[{value:"Physical Materials",id:"physical-materials",children:[]}],m={toc:p};function c(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assets-development-kit"},"Assets Development Kit"),(0,s.kt)("p",null,"nanos world Assets Development Kit - ADK"),(0,s.kt)("p",null,"nanos world provides a fully configurable and ready ",(0,s.kt)("strong",{parentName:"p"},"Unreal Project")," called Assets Development Kit ","(","ADK",")"," to help you integrating and exporting Assets and Maps much faster. This project contains ",(0,s.kt)("strong",{parentName:"p"},"Placeholders"),", ",(0,s.kt)("strong",{parentName:"p"},"Tools")," and ",(0,s.kt)("strong",{parentName:"p"},"Correct References")," that must be used in order to create ",(0,s.kt)("strong",{parentName:"p"},"Characters")," and make proper ",(0,s.kt)("strong",{parentName:"p"},"Physical Materials"),", for example."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,s.kt)("strong",{parentName:"h5"},"Note:")," To be able to use the ",(0,s.kt)("strong",{parentName:"h5"},"ADK"),", you will need to have ",(0,s.kt)("a",{parentName:"h5",href:"#installing-unreal-engine-4"},"Unreal Engine")," installed. :::")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("h2",{parentName:"div",id:"downloading-nanos-world-assets-development-kit---adk"},"Downloading nanos world Assets Development Kit - ADK"),(0,s.kt)("p",{parentName:"div"},"Our ADK is uploaded in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/assets-development-kit/releases/latest"},"GitHub"),", please download it latest version and extract it in your computer."),(0,s.kt)("h2",{parentName:"div",id:"opening-the-assets-development-kit-project"},"Opening the Assets Development Kit Project"),(0,s.kt)("p",{parentName:"div"},"You will find a file ",(0,s.kt)("inlineCode",{parentName:"p"},"NanosWorldADK.uproject")," in there, just open it with Unreal Engine and you are set!"),(0,s.kt)("p",{parentName:"div"},"You will notice we two folders in the root directory: ",(0,s.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"MyAssetPack/"),"."))),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Please do not ",(0,s.kt)("strong",{parentName:"h5"},"MODIFY"),", ",(0,s.kt)("strong",{parentName:"h5"},"DELETE"),", ",(0,s.kt)("strong",{parentName:"h5"},"CREATE")," or ",(0,s.kt)("strong",{parentName:"h5"},"COPY")," any file inside ",(0,s.kt)("inlineCode",{parentName:"h5"},"NanosWorld/")," folder, otherwise the ADK will not work properly. Also make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use ",(0,s.kt)("inlineCode",{parentName:"h5"},"NanosWorld/")," where they are.")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder has some Assets which you can use to reference ",(0,s.kt)("strong",{parentName:"p"},"your")," assets and make the export keep the correct references when using them in-game. :::"),(0,s.kt)("h2",{parentName:"div",id:"tools-available-in-the-adk-project"},"Tools available in the ADK project"),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprints ",(0,s.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Placeholders/"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator ",(0,s.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"adk-assets-development-kit#assets-toml-generator"},"Assets.toml Generator ",(0,s.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"adk-assets-development-kit#sunand-sky-actor"},"Sun & Sky Actor ",(0,s.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/World/BP_SunSky"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"adk-assets-development-kit#physical-materials"},"Physical Materials ",(0,s.kt)("inlineCode",{parentName:"a"},"NanosWorld/MaterialLibrary/PhysicalMaterials/"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"adk-assets-development-kit#mannequin-skeleton"},"Mannequin Skeleton ",(0,s.kt)("inlineCode",{parentName:"a"},"NanosWorld/Characters/Common/SKEL_Mannequin"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"adk-assets-development-kit#thumbnail-generator"},"Thumbnail Generator ",(0,s.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")))),(0,s.kt)("h3",{parentName:"div",id:"placeholder-blueprints"},"Placeholder Blueprints"),(0,s.kt)("h4",{parentName:"div",id:"nanosworldblueprintsplaceholders"},(0,s.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Placeholders/")),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("img",{alt:"Placeholder Blueprints overview",src:a(97457).Z})),(0,s.kt)("p",{parentName:"div"},"You can use the ",(0,s.kt)("strong",{parentName:"p"},"Placeholder Blueprints")," to set Spawn Positions of ",(0,s.kt)("strong",{parentName:"p"},"Vehicles"),", ",(0,s.kt)("strong",{parentName:"p"},"Weapons"),", ",(0,s.kt)("strong",{parentName:"p"},"Characters")," and ",(0,s.kt)("strong",{parentName:"p"},"Props"),". This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren\u2019t cooked with the map. Use the ",(0,s.kt)("a",{parentName:"p",href:"adk-assets-development-kit#lua-code-generator-nanosworld-blueprints-utility-wbp_luacodegenerator"},"Lua Code Generator")," to generate the Lua script with all spawn locations."),(0,s.kt)("h3",{parentName:"div",id:"lua-code-generator"},"Lua Code Generator"),(0,s.kt)("h4",{parentName:"div",id:"nanosworldblueprintsutilitywbp_luacodegenerator"},(0,s.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator")),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("img",{alt:"Lua Code Generator Widget",src:a(8629).Z})),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Lua Code Generator")," is an ",(0,s.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans the map which is currently loaded in your Unreal and generate a list of spawn code with exact Location and Rotation for every ",(0,s.kt)("a",{parentName:"p",href:"adk-assets-development-kit#placeholder-blueprints-nanosworld-blueprints-placeholders"},"Placeholder Blueprint "),"you had spawned."),(0,s.kt)("p",{parentName:"div"},"To open it, right click on it and press ",(0,s.kt)("strong",{parentName:"p"},"Run Editor Utility Widget"),":"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("img",{src:a(72409).Z})),(0,s.kt)("h3",{parentName:"div",id:"assetstoml-generator"},"Assets.toml Generator"),(0,s.kt)("h4",{parentName:"div",id:"nanosworldblueprintsutilitywbp_assetstomlgenerator"},(0,s.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator")),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("img",{src:a(58964).Z})),(0,s.kt)("p",{parentName:"div"},"This is an ",(0,s.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans a folder ","(","determined by the TextBox",")"," and generates the configuration for an Assets.toml with all Assets in the folder ","(","which can be used in nanos world",")","."),(0,s.kt)("h3",{parentName:"div",id:"sun--sky-actor"},"Sun & Sky Actor"),(0,s.kt)("h4",{parentName:"div",id:"nanosworldblueprintsworldbp_sunsky"},(0,s.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/World/BP_SunSky")),(0,s.kt)("p",{parentName:"div"},"This is a pre-configured ",(0,s.kt)("strong",{parentName:"p"},"Sun & Sky Blueprint")," which can be used and easily replaced by nanos world Official Sun with ",(0,s.kt)("inlineCode",{parentName:"p"},"World,SpawnDefaultSun()"),". This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun."))),(0,s.kt)("p",null,"Example: Light Intensity, Color, Post Process and other configuration will be lost. :::"),(0,s.kt)("h3",{id:"physical-materials"},"Physical Materials"),(0,s.kt)("h4",{id:"nanosworldmateriallibraryphysicalmaterials"},(0,s.kt)("inlineCode",{parentName:"h4"},"NanosWorld/MaterialLibrary/PhysicalMaterials/")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(22087).Z})),(0,s.kt)("p",null,"If you are creating a ",(0,s.kt)("strong",{parentName:"p"},"Material"),", you can ","(","and should",")"," use these ",(0,s.kt)("strong",{parentName:"p"},"Physical Materials")," do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit or Footstep sound."),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DO NOT ",(0,s.kt)("strong",{parentName:"h5"},"modify")," or ",(0,s.kt)("strong",{parentName:"h5"},"rename")," any Physical Materials, only use by referencing them in your Materials. :::")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("h3",{parentName:"div",id:"mannequin-skeleton"},"Mannequin Skeleton"),(0,s.kt)("h4",{parentName:"div",id:"nanosworldcharacterscommonskel_mannequin"},(0,s.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Characters/Common/SKEL_Mannequin")),(0,s.kt)("p",{parentName:"div"},"To be able to create Skeletal ","(","Character",")"," Meshes which work with our ",(0,s.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/character"},"Character "),"class, you must set your Skeletal Mesh to use our ",(0,s.kt)("strong",{parentName:"p"},"Mannequin Skeleton"),". This Skeleton is the same as Unreal Engine 4 default Mannequin, so any Skeletal Mesh which uses UE4\u2019s Mannequin Skeleton will work for us!"),(0,s.kt)("p",{parentName:"div"},"To change a Skeletal Mesh\u2019s Skeleton: right click on it ",">",">"," Skeleton ",">",">"," Assign Skeleton and change it to our ",(0,s.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),"."),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("img",{src:a(38002).Z})),(0,s.kt)("h3",{parentName:"div",id:"thumbnail-generator"},"Thumbnail Generator"),(0,s.kt)("h4",{parentName:"div",id:"nanosworldblueprintsutilitythumbnailgenerator"},(0,s.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")),(0,s.kt)("p",{parentName:"div"},"We\u2019ve shipped a ",(0,s.kt)("strong",{parentName:"p"},"Thumbnail Generator")," tool to help you generating ",(0,s.kt)("inlineCode",{parentName:"p"},".jpg")," images of your assets. To use that, just open ",(0,s.kt)("strong",{parentName:"p"},"ThumbnailGenerator")," level and hit Play. Then you will be able to define a folder for search the assets ","(","currently only Static and Skeletal Meshes are supported",")"," and a folder to save the images ","(",".jpg",")",". You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit ",(0,s.kt)("strong",{parentName:"p"},"Generate"),", it will start loading all assets and taking a photo from them."))),(0,s.kt)("p",null,"It is also recommended to generate the Thumbnails twice, so you grant they will be saved in the max quality possible. :::"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(95741).Z})))}c.isMDXComponent=!0},97457:function(e,t,a){t.Z=a.p+"assets/images/adk-01-846dffe0833b1e8575996e97fd7e2f11.jpg"},8629:function(e,t,a){t.Z=a.p+"assets/images/adk-02-0b901da3e84e694b48131cfd2471dcbc.jpg"},72409:function(e,t,a){t.Z=a.p+"assets/images/adk-03-99cb2ed3fa24d3d2bd2695e72d8beb7d.jpg"},58964:function(e,t,a){t.Z=a.p+"assets/images/adk-04-f297905ad88d6675b6929d42464bd5c8.jpg"},22087:function(e,t,a){t.Z=a.p+"assets/images/adk-05-a9aa9bbd747fce98c31237cdcd581d1a.jpg"},38002:function(e,t,a){t.Z=a.p+"assets/images/adk-06-0c1907dc91241995355b74b649e78e76.jpg"},95741:function(e,t,a){t.Z=a.p+"assets/images/adk-07-bd0c7e89faf5509e4555728466eeca11.jpg"}}]);