"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[319],{3905:function(t,e,a){a.d(e,{Zo:function(){return A},kt:function(){return f}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},A=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,m=t.parentName,A=r(t,["components","mdxType","originalType","parentName"]),d=p(a),f=i,c=d["".concat(m,".").concat(f)]||d[f]||l[f]||o;return a?n.createElement(c,s(s({ref:e},A),{},{components:a})):n.createElement(c,s({ref:e},A))}));function f(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var m in e)hasOwnProperty.call(e,m)&&(r[m]=e[m]);r.originalType=t,r.mdxType="string"==typeof t?t:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17086:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return r},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return A},default:function(){return d}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),s=["components"],r={description:"How to import Mixamo animations into nanos world",sidebar_position:5,tags:["m\xeddias","animations"]},m="Importing Mixamo Animations",p={unversionedId:"assets-modding/creating-assets/mixamo-animations",id:"assets-modding/creating-assets/mixamo-animations",isDocsHomePage:!1,title:"Importing Mixamo Animations",description:"How to import Mixamo animations into nanos world",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/mixamo-animations.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/mixamo-animations",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/mixamo-animations",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/mixamo-animations.md",tags:[{label:"m\xeddias",permalink:"/pt-BR/docs/next/tags/midias"},{label:"animations",permalink:"/pt-BR/docs/next/tags/animations"}],version:"current",sidebarPosition:5,frontMatter:{description:"How to import Mixamo animations into nanos world",sidebar_position:5,tags:["m\xeddias","animations"]},sidebar:"main",previous:{title:"Characters Meshes",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/characters-meshes"},next:{title:"WIP: Weapons",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/wip-weapons"}},A=[{value:"Step 1: Download Mixamo Converter",id:"step-1-download-mixamo-converter",children:[]},{value:"Step 2: Create an Account in Mixamo website",id:"step-2-create-an-account-in-mixamo-website",children:[]},{value:"Step 3: Upload the Mannequin to Mixamo",id:"step-3-upload-the-mannequin-to-mixamo",children:[]},{value:"Step 4: Choose your animation!",id:"step-4-choose-your-animation",children:[]},{value:"Step 5: Download it!",id:"step-5-download-it",children:[]},{value:"Step 6: Run Mixamo Converter Tool",id:"step-6-run-mixamo-converter-tool",children:[]},{value:"Step 7: Import the Converted Animation into Unreal Engine",id:"step-7-import-the-converted-animation-into-unreal-engine",children:[{value:"Create a new Asset Pack folder",id:"create-a-new-asset-pack-folder",children:[]},{value:"Drag the Animation file into Unreal",id:"drag-the-animation-file-into-unreal",children:[]},{value:"Step 8: Exporting the animation from Unreal",id:"step-8-exporting-the-animation-from-unreal",children:[]},{value:"Step 9: Creating your nanos world Asset Pack",id:"step-9-creating-your-nanos-world-asset-pack",children:[]},{value:"Step 10: Using your animations!",id:"step-10-using-your-animations",children:[]}]}],l={toc:A};function d(t){var e=t.components,r=(0,i.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"importing-mixamo-animations"},"Importing Mixamo Animations"),(0,o.kt)("p",null,"Mixamo is a library of thousands of animations captured from professional motion actors."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(47206).Z})),(0,o.kt)("p",null,"For this guide we are going to use a Tool for exporting Mixamo animations directly into Unreal Engine, 100% compatible with nanos world Characters."),(0,o.kt)("h2",{id:"step-1-download-mixamo-converter"},"Step 1: Download Mixamo Converter"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://terribilisstudio.fr/?section=MC"},"Mixamo Converter")," page and download the Tool. Unzip it (password is ",(0,o.kt)("inlineCode",{parentName:"p"},"terribilis"),") and you will have a folder like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(40519).Z})),(0,o.kt)("h2",{id:"step-2-create-an-account-in-mixamo-website"},"Step 2: Create an Account in Mixamo website"),(0,o.kt)("p",null,"Please go to ",(0,o.kt)("a",{parentName:"p",href:"https://mixamo.com"},"Mixamo Website")," and create an account. Adobe will require you to have an account to be able to download it's animations."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(85338).Z})),(0,o.kt)("h2",{id:"step-3-upload-the-mannequin-to-mixamo"},"Step 3: Upload the Mannequin to Mixamo"),(0,o.kt)("p",null,"Upload the file ",(0,o.kt)("inlineCode",{parentName:"p"},"SK_Mannequin_For_Mixamo.fbx")," from Mixamo Converter root folder into Mixamo website:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(34150).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(65936).Z})),(0,o.kt)("p",null,"Now you will be able to see Unreal Mannequin in there!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13616).Z})),(0,o.kt)("h2",{id:"step-4-choose-your-animation"},"Step 4: Choose your animation!"),(0,o.kt)("p",null,"Now you can choose any animation you want from Mixamo website, once you select it you will be able to see the Mannequin playing that. Also you can tweak some settings in the right side."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(70746).Z})),(0,o.kt)("h2",{id:"step-5-download-it"},"Step 5: Download it!"),(0,o.kt)("p",null,"Once you are satisfied with the animation, download it."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must select ",(0,o.kt)("strong",{parentName:"p"},"Without Skin")," and ",(0,o.kt)("strong",{parentName:"p"},"uniform")," in the Download Settings."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(24251).Z})),(0,o.kt)("p",null,"After downloading it, copy the file into ",(0,o.kt)("inlineCode",{parentName:"p"},"mixamo_converter/Initial")," folder. In our case, we copied ",(0,o.kt)("inlineCode",{parentName:"p"},"Hip Hop Dancing.fbx"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(68587).Z})),(0,o.kt)("h2",{id:"step-6-run-mixamo-converter-tool"},"Step 6: Run Mixamo Converter Tool"),(0,o.kt)("p",null,"Now, double click ",(0,o.kt)("inlineCode",{parentName:"p"},"Mixamo_Converter.exe")," tool you downloaded in Step 1 to open it:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(95441).Z})),(0,o.kt)("p",null,"Once you press ",(0,o.kt)("strong",{parentName:"p"},"Mixamo -> Unreal"),", it will convert all animations from ",(0,o.kt)("inlineCode",{parentName:"p"},"/Initial")," folder into ",(0,o.kt)("inlineCode",{parentName:"p"},"/Complete")," folder."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can optionally select the option to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"/Initial")," animations once is converted."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(64920).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(67586).Z})),(0,o.kt)("h2",{id:"step-7-import-the-converted-animation-into-unreal-engine"},"Step 7: Import the Converted Animation into Unreal Engine"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please before proceeding, make sure you read and downloaded our ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/adk-assets-development-kit"},"Assets Development Kit"),"."))),(0,o.kt)("p",null,"Now you just need to import it into your UE4 Project! We are going to import it into our ADK to create a new Asset Pack with the animations we imported!"),(0,o.kt)("h3",{id:"create-a-new-asset-pack-folder"},"Create a new Asset Pack folder"),(0,o.kt)("p",null,"We are calling it ",(0,o.kt)("inlineCode",{parentName:"p"},"AwesomeMixamoAnimations"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(16784).Z})),(0,o.kt)("h3",{id:"drag-the-animation-file-into-unreal"},"Drag the Animation file into Unreal"),(0,o.kt)("p",null,"Open the Folder you created and drag the animation exported by Mixamo Converter into that."),(0,o.kt)("p",null,"A FBX Import Options screen will show up."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please set all options as the following image. To expand the advanced options, click in the arrow in ",(0,o.kt)("strong",{parentName:"p"},"Animation")," category!"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(27340).Z})),(0,o.kt)("p",null,"And voil\xe1! You imported it!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98832).Z})),(0,o.kt)("p",null,"If you double click it you will be able to see it working!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(20952).Z})),(0,o.kt)("h3",{id:"step-8-exporting-the-animation-from-unreal"},"Step 8: Exporting the animation from Unreal"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on how to use ",(0,o.kt)("strong",{parentName:"p"},"ADK")," or Export Content in a faster way, please check ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/adk-assets-development-kit"},"Assets Development Kit")," and ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/importing-assets"},"Importing Assets"),"!"))),(0,o.kt)("p",null,"Go to File -> Package Export -> Windows 64 Bits and select a folder in your computer. It will start compiling your assets."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(43745).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(24567).Z})),(0,o.kt)("h3",{id:"step-9-creating-your-nanos-world-asset-pack"},"Step 9: Creating your nanos world Asset Pack"),(0,o.kt)("p",null,"Wait the Packaging to finish!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(70250).Z})),(0,o.kt)("p",null,"Now that we have the compiled assets, we already can use it in nanos world! For that we will need to create an Asset Pack!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(86936).Z})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please take a look into ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/importing-assets#exporting--cooking-your-assets"},"Importing Assets")," for how to create an Asset Pack."),(0,o.kt)("p",{parentName:"div"},"We are not going to cover all aspects of creating Asset Packs here for avoiding redundant information in the docs!"))),(0,o.kt)("h3",{id:"step-10-using-your-animations"},"Step 10: Using your animations!"),(0,o.kt)("p",null,"After exported and created your Asset Pack, you will be able to use them in code like that!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local my_character = Character()\nmy_character:PlayAnimation("awesome-mixamo-animations::HipHopDancing4UE4")\n')))}d.isMDXComponent=!0},47206:function(t,e,a){e.Z=a.p+"assets/images/mixamo-7f3ffab7d02c2eb920331d0af65f8709.jpg"},85338:function(t,e,a){e.Z=a.p+"assets/images/mixamo-01-17c64a49d1c6dfb76eaa91cd1b6a5da8.jpg"},40519:function(t,e,a){e.Z=a.p+"assets/images/mixamo-02-f2b48e66bb7df016b419b326ad60267c.jpg"},34150:function(t,e,a){e.Z=a.p+"assets/images/mixamo-03-335aaa9f961bc41f558eee068aeb1eb8.jpg"},65936:function(t,e,a){e.Z=a.p+"assets/images/mixamo-04-c4e852714dab354a087588dfcfb68939.jpg"},13616:function(t,e,a){e.Z=a.p+"assets/images/mixamo-05-e49d6dd1da05d42635974d16f4d19b15.jpg"},70746:function(t,e,a){e.Z=a.p+"assets/images/mixamo-06-5db6741fd4a8448441146b0a67754e18.jpg"},24251:function(t,e,a){e.Z=a.p+"assets/images/mixamo-07-bec9c7903c763ac0e0a000080914f908.jpg"},68587:function(t,e,a){e.Z=a.p+"assets/images/mixamo-08-bf75510e3e79f1d36433dd9aaa84190d.jpg"},95441:function(t,e,a){e.Z=a.p+"assets/images/mixamo-09-391ed3675d0bc84373ce09b21129b44e.jpg"},64920:function(t,e,a){e.Z=a.p+"assets/images/mixamo-10-57d8617bc0b745c707702f772aff70cb.jpg"},67586:function(t,e,a){e.Z=a.p+"assets/images/mixamo-11-e7b77ff3c312e20e62e2b7d5cbc6798b.jpg"},16784:function(t,e,a){e.Z=a.p+"assets/images/mixamo-12-28f95fb920a32d7b817e1f9190fc2256.jpg"},27340:function(t,e,a){e.Z=a.p+"assets/images/mixamo-13-ffe24526ecdcf903dd1aa0c2ea541bf4.jpg"},98832:function(t,e,a){e.Z=a.p+"assets/images/mixamo-14-1124dd2958f4d3ad685f40235b805b0a.jpg"},20952:function(t,e,a){e.Z=a.p+"assets/images/mixamo-15-d6464571bc6396a6493840e08b2aa790.jpg"},43745:function(t,e,a){e.Z=a.p+"assets/images/mixamo-16-b7a5baa451d2758f89f370a6b4d80baa.jpg"},24567:function(t,e,a){e.Z=a.p+"assets/images/mixamo-17-4c16962e552ef28c72371825ed6c4519.jpg"},70250:function(t,e){e.Z="data:image/jpeg;base64,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"},86936:function(t,e,a){e.Z=a.p+"assets/images/mixamo-19-e1447e0d346f37898a16116c2fed1eeb.jpg"}}]);