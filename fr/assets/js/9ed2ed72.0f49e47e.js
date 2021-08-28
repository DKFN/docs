"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8490],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(a),h=s,k=m["".concat(c,".").concat(h)]||m[h]||p[h]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36665:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),i=["components"],o={description:"How to correctly import custom Models into nanos world",sidebar_position:4,tags:["assets"]},c="Characters Meshes",l={unversionedId:"assets-modding/creating-assets/characters-meshes",id:"assets-modding/creating-assets/characters-meshes",isDocsHomePage:!1,title:"Characters Meshes",description:"How to correctly import custom Models into nanos world",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/characters-meshes.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/characters-meshes",permalink:"/fr/docs/next/assets-modding/creating-assets/characters-meshes",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/characters-meshes.md",tags:[{label:"assets",permalink:"/fr/docs/next/tags/assets"}],version:"current",sidebarPosition:4,frontMatter:{description:"How to correctly import custom Models into nanos world",sidebar_position:4,tags:["assets"]},sidebar:"tutorialSidebar",previous:{title:"Static Meshes",permalink:"/fr/docs/next/assets-modding/creating-assets/static-meshes"},next:{title:"WIP : Armes",permalink:"/fr/docs/next/assets-modding/creating-assets/wip-weapons"}},d=[{value:"2. Use nanos world Physics Assets PHYS_Mannequin",id:"2-use-nanos-world-physics-assets-phys_mannequin",children:[]},{value:"Converting the Skeleton to nanos world\u2019s Skeleton and Physics Asset",id:"converting-the-skeleton-to-nanos-worlds-skeleton-and-physics-asset",children:[]}],p={toc:d};function m(e){var t=e.components,o=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"characters-meshes"},"Characters Meshes"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"nanos.world Characters use Unreal\u2019s Default Mannequin Skeleton. So any Skeletal Mesh which uses it by default will probably work in nanos world as a ",(0,r.kt)("a",{parentName:"h5",href:"/docs/scripting-reference/classes/character"},"Character"),". :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h2",{parentName:"div",id:"tips-for-integrating-skeletal-meshes-with-nanos-world-character"},"Tips for integrating Skeletal Meshes with nanos world Character"),(0,r.kt)("h3",{parentName:"div",id:"1-use-nanos-world-skeleton-skel_mannequin"},"1. Use nanos world Skeleton SKEL_Mannequin"),(0,r.kt)("p",{parentName:"div"},"It\u2019s of paramount importance to convert all ",(0,r.kt)("strong",{parentName:"p"},"Skeleton")," references to use nanos world ",(0,r.kt)("strong",{parentName:"p"},"Skeleton")," instead, if the Skeletal Mesh you imported is 100% equal to UE4\u2019s Mannequin Skeleton, this conversion won\u2019t be even noticed, but if the Skeleton of the Skeletal Mesh you are importing have more bones or is different, it won\u2019t work! You can try remake/modify it in a 3D software like Blender and make it equal to UE4\u2019s Mannequin."))),(0,r.kt)("p",null,"For that, just right click on your ",(0,r.kt)("strong",{parentName:"p"},"Skeletal Mesh")," \u27a1 Skeleton \u27a1 Assign Skeleton, and select our Skeleton ",(0,r.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),", press ",(0,r.kt)("em",{parentName:"p"},"Accept")," to convert:"),(0,r.kt)("h4",{id:"right-click-on-your-mesh-and-select-to-assign-a-skeleton"},"Right click on your mesh and select to assign a Skeleton"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Right click on your mesh and select to assign a Skeleton",src:a(74863).Z})),(0,r.kt)("h4",{id:"selecting-skel_mannequin-and-pressing-accept-to-convert"},"Selecting SKEL_Mannequin and pressing Accept to convert"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting SKEL_Mannequin and pressing Accept to convert",src:a(68561).Z})),(0,r.kt)("h3",{id:"2-use-nanos-world-physics-assets-phys_mannequin"},"2. Use nanos world Physics Assets PHYS","_","Mannequin"),(0,r.kt)("p",null,"Besides converting your mesh to use nanos world ",(0,r.kt)("strong",{parentName:"p"},"Skeleton"),", it is also needed that you set your mesh to use the nanos world ",(0,r.kt)("strong",{parentName:"p"},"Physics Assets"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"This is allow your Characters when using your meshes to have a proper Ragdoll physics. :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Open your ",(0,r.kt)("strong",{parentName:"p"},"Skeletal Mesh")," and set the ",(0,r.kt)("strong",{parentName:"p"},"Physics Asset")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"PHYS_Mannequin"),":"),(0,r.kt)("h4",{parentName:"div",id:"opening-skeletal-mesh-to-use-the-proper-physics-asset"},"Opening Skeletal Mesh to use the proper Physics Asset"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Opening Skeletal Mesh to use the proper Physics Asset",src:a(37600).Z})),(0,r.kt)("h2",{parentName:"div",id:"importing-a-new-character-skeletal-mesh"},"Importing a new Character Skeletal Mesh"),(0,r.kt)("p",{parentName:"div"},"Learn how to import and use custom Skeletal Meshes in nanos world Characters."),(0,r.kt)("p",{parentName:"div"},"For this Guide, we will import a Skeletal Mesh from ",(0,r.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/stylized-male-character-kit-casual"},"Stylized Character Kit: Casual 01")," ","(","which is a ",(0,r.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/blog/featured-free-marketplace-content---september-2020"},"Free Marketplace Content for September 2020"),")","."),(0,r.kt)("h4",{parentName:"div",id:"stylized-character-kit-from-unreal-engine-marketplace"},"Stylized Character Kit from Unreal Engine Marketplace"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Stylized Character Kit from Unreal Engine Marketplace",src:a(92037).Z})),(0,r.kt)("p",{parentName:"div"},"Also, we will be using our ",(0,r.kt)("a",{parentName:"p",href:"adk-assets-development-kit"},"Assets Development Kit - ADK"),", make sure you downloaded it."),(0,r.kt)("h3",{parentName:"div",id:"downloading-the-asset-pack-from-unreal-marketplace"},"Downloading the Asset Pack from Unreal Marketplace"),(0,r.kt)("p",{parentName:"div"},"The first step is to download the Asset Pack ",(0,r.kt)("em",{parentName:"p"},"Stylized Character Kit: Casual 01")," from UE4 Marketplace, to do so, please follow:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"\u27a1 Epic Games Launcher")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"\u27a1 Unreal Engine")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"\u27a1 Library")),(0,r.kt)("li",{parentName:"ol"},"\u2b07 Scroll to ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"VAULT"))," section")),(0,r.kt)("p",{parentName:"div"},"In Vault section you will find all your Marketplace content you have in your account, to download it click on ",(0,r.kt)("em",{parentName:"p"},"Add To Project")," and select the ",(0,r.kt)("strong",{parentName:"p"},"Assets Development Kit")," project, this will download all files and \u2018install\u2019 them into the ADK project."),(0,r.kt)("h4",{parentName:"div",id:"finding-stylized-character-kit-casual-01"},"Finding Stylized Character Kit: Casual 01"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Finding Stylized Character Kit: Casual 01",src:a(46355).Z})),(0,r.kt)("h4",{parentName:"div",id:"adding-stylized-character-kit-casual-01-to-adk-project"},"Adding Stylized Character Kit: Casual 01 to ADK Project"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Adding Stylized Character Kit: Casual 01 to ADK Project",src:a(19736).Z})),(0,r.kt)("p",{parentName:"div"},"You can now notice that there is a new folder ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/SCK_Casual01/")," in the ADK project, this is the Asset Pack you just downloaded from UE4 Marketplace:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(51786).Z})),(0,r.kt)("p",{parentName:"div"},"And you can find it\u2019s Skeletal Meshes inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/SCK_Casual01/Models/Premade_Characters/"),":"),(0,r.kt)("h4",{parentName:"div",id:"opened-premade_characters-folder"},"Opened Premade_Characters folder"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Opened Premade_Characters folder",src:a(57791).Z})),(0,r.kt)("h3",{parentName:"div",id:"copying-the-wanted-files-to-our-asset-pack-folder"},"Copying the wanted files to our Asset Pack folder"),(0,r.kt)("p",{parentName:"div"},"For this example, let\u2019s import the Skeletal Mesh ",(0,r.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," to nanos world and use it as our Character\u2019s Mesh:"),(0,r.kt)("h4",{parentName:"div",id:"opened-mesh_pc_00"},"Opened MESH_PC_00"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Opened MESH_PC_00",src:a(43650).Z})),(0,r.kt)("p",{parentName:"div"},"The first step is to copy it and all it\u2019s dependencies to your ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetPack/")," folder inside the Project:"))),(0,r.kt)("p",null,"To do so, just drag-n-drop ",(0,r.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," into your ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetPack/")," folder and select ",(0,r.kt)("em",{parentName:"p"},"Advanced Copy Here"),", this will copy all files and all dependencies in there, i.e. only the real needed ones:"),(0,r.kt)("h4",{id:"right-clicked-mesh_pc_00-and-advancing-copying-into-myassetpack-folder"},"Right clicked MESH_PC_00 and Advancing Copying into MyAssetPack/ folder"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Right clicked MESH_PC_00 and Advancing Copying into MyAssetPack/ folder",src:a(50802).Z})),(0,r.kt)("p",null,"Press OK to confirm:"),(0,r.kt)("h4",{id:"confirming-copying-files"},"Confirming copying files"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Confirming copying files",src:a(67777).Z})),(0,r.kt)("p",null,"And now we have only our wanted Skeletal Mesh and it\u2019s Textures/Materials into our Asset Pack folder, which we will export:"),(0,r.kt)("h4",{id:"all-files-copied-automatically"},"All files copied automatically"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"All files copied automatically",src:a(33314).Z})),(0,r.kt)("h3",{id:"converting-the-skeleton-to-nanos-worlds-skeleton-and-physics-asset"},"Converting the Skeleton to nanos world\u2019s Skeleton and Physics Asset"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Please refer to section ",(0,r.kt)("a",{parentName:"h5",href:"characters-meshes#tips-for-integrating-skeletal-meshs-with-nanos-world-character"},"Tips for integrating Skeletal Meshes with nanos world Character")," for converting the ",(0,r.kt)("inlineCode",{parentName:"h5"},"MESH_PC_00")," to use our ",(0,r.kt)("strong",{parentName:"h5"},"Skeleton")," and the ",(0,r.kt)("strong",{parentName:"h5"},"Physics Asset"),". :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After it\u2019s converted, save everything and you can delete the old Skeleton ","(","which was located at ",(0,r.kt)("inlineCode",{parentName:"p"},"SCK_Casual01/Mannquin/")," folder",")",":"),(0,r.kt)("h4",{parentName:"div",id:"deleting-old-useless-skeleton"},"Deleting old useless Skeleton"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Deleting old useless Skeleton",src:a(33697).Z})),(0,r.kt)("h3",{parentName:"div",id:"exporting--packaging--cooking-the-assets-to-nanos-world"},"Exporting / Packaging / Cooking the Assets to nanos world"),(0,r.kt)("p",{parentName:"div"},"Cooking/Packaging Unreal Engine Projects is very straightforward ","(","this is the same as \u2018generating\u2019 your game\u2019s .exe if you are making a game in UE4",")","."),(0,r.kt)("p",{parentName:"div"},"Before we export it, let\u2019s say to UE4 to only export our AssetPack folder, otherwise it will compile and export all folders in the Project. You can skip this step if you don\u2019t care, but will increase the packaging time."),(0,r.kt)("p",{parentName:"div"},"For that, open the Project Settings \u27a1 Packaging ","(","or search for ",(0,r.kt)("em",{parentName:"p"},"Directories to never Cook"),")",", and let\u2019s add a blacklist of directories to skip cooking ","(","exporting",")",", I\u2019m selecting the one from which we imported: ",(0,r.kt)("inlineCode",{parentName:"p"},"SCK_Casual01/")," which we don\u2019t want exported together because we had already copied the files we want to our AssetPack/ folder:"),(0,r.kt)("h4",{parentName:"div",id:"selecting-which-folders-to-cook"},"Selecting which folders to Cook"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Selecting which folders to Cook",src:a(31087).Z})),(0,r.kt)("p",{parentName:"div"},"And now we just need to Package the Project! File \u27a1 Package Project \u27a1 Windows ","(","64-bit",")",", and select a folder in your PC to save it:"),(0,r.kt)("h4",{parentName:"div",id:"packaging-the-project"},"Packaging the Project"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Packaging the Project",src:a(8372).Z})),(0,r.kt)("h3",{parentName:"div",id:"getting-the-files--generating-assetstoml"},"Getting the Files & Generating Assets.toml"),(0,r.kt)("p",{parentName:"div"},"We are almost finished! Now, let\u2019s copy all cooked files into our ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," folder! For that, find and open the folder which you just Packaged from UE4, you will have something like this:"),(0,r.kt)("h4",{parentName:"div",id:"packaged-the-project"},"Packaged the Project"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Packaged the Project",src:a(49762).Z})),(0,r.kt)("p",{parentName:"div"},"The folder we want is inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/YourAssetFolder"),":"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(2754).Z})),(0,r.kt)("p",{parentName:"div"},"Let\u2019s copy it into our ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Assets/"),":"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(43780).Z})),(0,r.kt)("p",{parentName:"div"},"And the last step is to generate an ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," file! For our luck, the ADK comes with a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanos.world/modding/AssetsDevelopmentKit.html#assets-toml-generator-nanosworld-blueprints-utility-wbp-assetstomlgenerator"},"Tool")," which generates an ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," configuration automatically for us!"),(0,r.kt)("p",{parentName:"div"},"We just need to put the AssetPack/ folder name in there and press ",(0,r.kt)("em",{parentName:"p"},"GENERATE"),":"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(11329).Z})),(0,r.kt)("p",{parentName:"div"},"Now you just need to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," file inside your ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Assets/MyAssetPack/")," folder and paste the generated configuration inside of it:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(54791).Z})),(0,r.kt)("h3",{parentName:"div",id:"using-the-skeletal-mesh-in-a-character-through-scripting"},"Using the Skeletal Mesh in a Character through Scripting"),(0,r.kt)("p",{parentName:"div"},"The last step is to use it! For that, you just need to use it\u2019s Key ",(0,r.kt)("inlineCode",{parentName:"p"},"MyAssetPack::MESH_PC_00"),"! E.g.:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local char = Character(Vector(0, 300, 100), Rotator(), "MyAssetPack::MESH_PC_00")\n')),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{src:a(79494).Z})))))}m.isMDXComponent=!0},74863:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-01-1eec8f8b08fd05799bce45b456c50899.jpg"},68561:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-02-2fcc24aea988b4718757135b07cec045.jpg"},37600:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-03-31b4a0d821df6c468a570beb711bdfbb.jpg"},92037:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-04-6b5bc42cd9dbfbad6e04fac41d97abe7.jpg"},46355:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-05-cdd0b7b8120c2daff11fd6bd89324ebf.jpg"},19736:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-06-c42142eea83a699ba09f9e5133c0b2bd.jpg"},51786:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-07-0bc69419c2bf2435d83f6b29c92090d2.jpg"},57791:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-08-a506268778a08f45d2d8aee1e8898913.jpg"},43650:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-09-3999b43c406aee684da4306a354e610e.jpg"},50802:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-10-9fd3c65f52304a8e8f4825d0b486097a.jpg"},67777:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-11-9bb025ffc68ef59d228d0b555c5596f1.jpg"},33314:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-12-8226d527eacf532b885d80f320a9c90a.jpg"},33697:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-13-3564439dffb1f5a2fdb0565b384517bb.jpg"},31087:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-14-50c30df5bfc4939473590d8fc813b8c2.jpg"},8372:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-15-c1a672e48e10776021c684a26c717337.jpg"},49762:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-16-4217e1f7c4fb809f2cbead3b6cc0e6d8.jpg"},2754:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-17-afbbb6fe6f6288a0a7047bea7c39db4c.jpg"},43780:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-18-05cffd2290bd1a2e847e7c58d707b99f.jpg"},11329:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-19-edf61fd21d4d8bb3249e1d178b8babd4.jpg"},54791:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-20-9a54048b2f7200830cd845ab8c6de7c3.jpg"},79494:function(e,t,a){t.Z=a.p+"assets/images/character-meshes-21-e14ba2678fc5324ce74b1f0d97998f89.jpg"}}]);