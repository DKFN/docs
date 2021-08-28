"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1185],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),k=s,u=c["".concat(l,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59420:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),o=["components"],i={description:"All you need to know about Assets",tags:["assets"]},l="Assets",d={unversionedId:"core-concepts/assets",id:"core-concepts/assets",isDocsHomePage:!1,title:"Assets",description:"All you need to know about Assets",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/assets.md",sourceDirName:"core-concepts",slug:"/core-concepts/assets",permalink:"/de/docs/next/core-concepts/assets",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/assets.md",tags:[{label:"assets",permalink:"/de/docs/next/tags/assets"}],version:"current",frontMatter:{description:"All you need to know about Assets",tags:["assets"]},sidebar:"tutorialSidebar",previous:{title:"Persistent Data",permalink:"/de/docs/next/core-concepts/scripting/persistent-data"},next:{title:"Modules",permalink:"/de/docs/next/core-concepts/modules"}},p=[{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Assets Pack Configuration",id:"assets-pack-configuration",children:[{value:"Settings Detailed",id:"settings-detailed",children:[]}]},{value:"Referencing Assets in Scripting",id:"referencing-assets-in-scripting",children:[]},{value:"Types of Assets",id:"types-of-assets",children:[]},{value:"nanos world Default Asset Pack",id:"nanos-world-default-asset-pack",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assets"},"Assets"),(0,r.kt)("p",null,"All you need to know about Assets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Assets")," in nanos world are all objects or content which come from Unreal Engine, i.e. ",(0,r.kt)("em",{parentName:"p"},"Maps"),", ",(0,r.kt)("em",{parentName:"p"},"StaticMeshes"),", ",(0,r.kt)("em",{parentName:"p"},"SkeletalMeshes"),", ",(0,r.kt)("em",{parentName:"p"},"Sounds"),", ",(0,r.kt)("em",{parentName:"p"},"Particles"),", etc are all ",(0,r.kt)("strong",{parentName:"p"},"Assets"),"."),(0,r.kt)("p",null,"In order to use custom Assets in your servers, you must have or create an ",(0,r.kt)("strong",{parentName:"p"},"Asset Pack"),". Asset Packs are a set of Assets that were exported together from Unreal."),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("p",null,"All Asset Packs go under ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," folder. Each Asset Pack is a folder under that."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Asset Packs downloaded when connecting to servers will be stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," folder as well!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n|   my-asset-pack-01/\n|   |   MyAsset_01.uasset\n|   |   MyAsset_02.uasset\n|   |   MyBigMap.umap\n|   |   ...\n|   |   Assets.toml\n|   awesome-weapons/\n|   |   BigFuckingGun.uasset\n|   |   AwesomeWeaponBundle.pak\n|   |   ...\n|   |   Assets.toml\nAssets/\nConfig.toml\n")),(0,r.kt)("h2",{id:"assets-pack-configuration"},"Assets Pack Configuration"),(0,r.kt)("p",null,"Asset Packs have a configuration file in the root of the Asset Pack folder, called ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml"),", in this file we can setup all pertinent settings related to the Asset Pack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Assets.toml"',title:'"Assets.toml"'},'# Asset Pack Configurations\n[asset_pack]\n    # Asset Pack Name\n    name =              "MyPack"\n    # Contributors\n    author =            "The Incredible Asset Creator"\n    # Version\n    version =           "1.0.0"\n    # Image URL\n    image =             "https://i.imgur.com/Qa6Tswl.png"\n    # Unreal Folder - the root folder which the assets will have references to each other\n    unreal_folder =     "MyPack"\n\n# Assets Files\n[assets]\n    # Maps\n    [assets.maps]\n    # MyMap = "MyFolder/MyAwesomeMap"\n    # ...\n\n    # Static Meshes\n    [assets.static_meshes]\n    SM_Cube = "SM_Cube"\n\n    # Skeletal Meshes\n    [assets.skeletal_meshes]\n    # SK_Better_Man = "Characters/SK_BetterMan_3"\n    # ...\n\n    [assets.sounds]\n    # A_RingSound = "Audios/A_RingSound"\n    # ...\n\n    # Animations\n    [assets.animations]\n    # A_Character_Jump = "Animations/A_Character_Jump"\n    # ...\n\n    # Other Assets (for not yet categorized ones)\n    [assets.others]\n    # A_Audio_Rifle_Fire = "Audios/A_Audio_Rifle_Fire_03"\n    # ...\n')),(0,r.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"name"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Friendly name of the Asset Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Author","(","s",")"," of the Asset Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of the Asset Pack - please refer to ",(0,r.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"image"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Image URL to be displayed in the Vault")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"unreal_folder"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the root folder in the Unreal Project which exported this Assets. This is important so the Assets can keep the relative references correct.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets.maps"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Maps in this Asset Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets.static_meshes"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Static Meshes in this Asset Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets.skeletal_meshes"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Skeletal Meshes in this Asset Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets.sounds"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Sounds in this Asset Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets.animations"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Animations in this Asset Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets.others"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of other Assets in this Asset Pack")))),(0,r.kt)("h2",{id:"referencing-assets-in-scripting"},"Referencing Assets in Scripting"),(0,r.kt)("p",null,"To be able to use Assets through scripting, you will first have to ensure that the Asset Pack is loaded, an Asset Pack is loaded if:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the Map to be loaded ","(","this will make it's Asset Pack to be loaded automatically",")"),(0,r.kt)("li",{parentName:"ol"},"Manually set in ",(0,r.kt)("inlineCode",{parentName:"li"},"Server.toml")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"assets")," to load"),(0,r.kt)("li",{parentName:"ol"},"Manually set in any loaded package, in ",(0,r.kt)("inlineCode",{parentName:"li"},"Package.toml")," the ",(0,r.kt)("inlineCode",{parentName:"li"},"asset_requirements"))),(0,r.kt)("p",null,"Once the Asset Pack is loaded, you can refer to it's assets using the following pattern:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"ASSET_PACK_PATH::ASSET_KEY"')),(0,r.kt)("p",null,"example: ",(0,r.kt)("inlineCode",{parentName:"p"},'"my-asset-pack-01::SM_Cube"')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:"),(0,r.kt)("inlineCode",{parentName:"p"},"ASSET_PACK_PATH")," is the Asset Pack folder name and ",(0,r.kt)("inlineCode",{parentName:"p"},"ASSET_KEY")," is the key defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml"),"."))),(0,r.kt)("h2",{id:"types-of-assets"},"Types of Assets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An Unreal Engine Map/Level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Static Mesh")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unreal Static Meshes can be used to load meshes for Props and StaticMeshes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Skeletal Mesh")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unreal Skeletal Meshes can be used to load meshes for Characters and Vehicles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Sounds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unreal Sounds to load Sounds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Animations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unreal Animations can be used for settings in Character and Weapons")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Some methods require some specific Type of Assets to load, attempting to load an invalid or wrong type will cause an Error. E.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"Character:SetMesh()")," requires an Asset of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Skeletal Mesh"),"."))),(0,r.kt)("h2",{id:"nanos-world-default-asset-pack"},"nanos world Default Asset Pack"),(0,r.kt)("p",null,"nanos world provides a default  Asset Pack which is already included in the base game. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/assets-modding/default-asset-pack/default-asset-pack"},"nanos world Default Asset Pack")," for more information."))}c.isMDXComponent=!0}}]);