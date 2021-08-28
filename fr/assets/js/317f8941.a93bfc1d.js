"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4499],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14569:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!"},l="Play as Prop",p={unversionedId:"getting-started/tutorials-and-examples/play-as-prop",id:"version-0.73.0/getting-started/tutorials-and-examples/play-as-prop",isDocsHomePage:!1,title:"Play as Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",source:"@site/versioned_docs/version-0.73.0/getting-started/tutorials-and-examples/play-as-prop.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/play-as-prop",permalink:"/fr/docs/getting-started/tutorials-and-examples/play-as-prop",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-0.73.0/getting-started/tutorials-and-examples/play-as-prop.md",tags:[],version:"0.73.0",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630097936,formattedLastUpdatedAt:"27/08/2021",frontMatter:{description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!"},sidebar:"version-0.73.0/tutorialSidebar",previous:{title:"Painting Meshes",permalink:"/fr/docs/getting-started/tutorials-and-examples/painting-meshes"},next:{title:"Prop Rain",permalink:"/fr/docs/getting-started/tutorials-and-examples/prop-rain"}},c=[{value:"Final result",id:"final-result",children:[]},{value:"Code Snippet",id:"code-snippet",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"play-as-prop"},"Play as Prop"),(0,o.kt)("p",null,"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!"),(0,o.kt)("h3",{id:"final-result"},"Final result"),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/docs/tutorials/play-as-prop.mp4",type:"video/mp4"})),(0,o.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Character using SK_None mesh (an invisible mesh)\nlocal new_char = Character(Vector(0, 0, 0), Rotator(), "nanos-world::SK_None")\n\n-- Adjusts the Capsule of this character. For small props it\'s recommended to use small capsule size\n-- (A capsule is used to handle Character\'s collision, this will also adjust camera height location)\n-- It\'s important to adjust the Capsule Size before adding a StaticMesh, as it will be adjusted based on Capsule Size\nnew_char:SetCapsuleSize(32, 64)\n\n-- Attaches a Static Mesh on the character - which will be the Prop it will possess\nnew_char:AddStaticMeshAttached("prop", "nanos-world::SM_WoodenChair")\n\n-- Disables some functionalities from the Character (picking up stuff, ability to crouch/prone, FPS camera...)\nnew_char:SetCanPickupPickables(false)\nnew_char:SetCanGrabProps(false)\nnew_char:SetCanCrouch(false)\nnew_char:SetCameraMode(2) -- Allows only Third Person\n')))}d.isMDXComponent=!0}}]);