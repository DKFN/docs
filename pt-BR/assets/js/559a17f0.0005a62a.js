"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[0],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75799:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=["components"],l={description:"How to use the new Material customization methods available to use",tags:["tutorial-example","script","m\xeddias"]},o="Pintando Meshes",c={unversionedId:"getting-started/tutorials-and-examples/painting-meshes",id:"getting-started/tutorials-and-examples/painting-meshes",isDocsHomePage:!1,title:"Pintando Meshes",description:"How to use the new Material customization methods available to use",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/painting-meshes.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/painting-meshes",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/painting-meshes",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/painting-meshes.md",tags:[{label:"tutorial-example",permalink:"/pt-BR/docs/next/tags/tutorial-example"},{label:"script",permalink:"/pt-BR/docs/next/tags/script"},{label:"m\xeddias",permalink:"/pt-BR/docs/next/tags/midias"}],version:"current",frontMatter:{description:"How to use the new Material customization methods available to use",tags:["tutorial-example","script","m\xeddias"]},sidebar:"main",previous:{title:"Name Tags",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/name-tags"},next:{title:"Jogar como Prop",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/play-as-prop"}},m=[{value:"Replacing a Mesh Material with Default Material",id:"replacing-a-mesh-material-with-default-material",children:[]},{value:"Painting a Mesh with Red Tint",id:"painting-a-mesh-with-red-tint",children:[]},{value:"Making a Mesh Metallic",id:"making-a-mesh-metallic",children:[]},{value:"Making a Mirror",id:"making-a-mirror",children:[]},{value:"Loading a Texture into a Mesh",id:"loading-a-texture-into-a-mesh",children:[]}],p={toc:m};function u(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pintando-meshes"},"Pintando Meshes"),(0,r.kt)("p",null,"How to use the new Material customization methods available to use."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77496).Z})),(0,r.kt)("p",null,"In Unreal Engine, a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/index.html"},"Material")," is an asset that can be applied to a mesh to control the visual look of the scene. At a high level, it is probably easiest to think of a Material as the \u201cpaint\u201d that is applied to an object. You can define its color, how shiny it is, whether you can see through the object, and much more."),(0,r.kt)("p",null,"In Unreal Engine, when you create a Material, you can define custom ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/HowTo/Making_Parameters/index.html"},"Parameters")," for it. So if you defined some parameters for a Material in a mesh, you can tweak it with simple comands in nanos world!"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"nanos world")," provides a bunch of methods to allow you to interact with the parameters you created for your materials using our scripting!"),(0,r.kt)("p",{parentName:"div"},"Please read ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable"},"Base Paintable")," Class to check all available methods before proceeding!"))),(0,r.kt)("h2",{id:"replacing-a-mesh-material-with-default-material"},"Replacing a Mesh Material with Default Material"),(0,r.kt)("p",null,"To illustrate, let\u2019s spawn a Cube and change it\u2019s Material using Lua:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default Masked one\nmy_cube:SetDefaultMaterial(MaterialType.Masked)\n')),(0,r.kt)("p",null,"Blank Cube with Default Masked Material ",(0,r.kt)("img",{src:a(32652).Z})),(0,r.kt)("h2",{id:"painting-a-mesh-with-red-tint"},"Painting a Mesh with Red Tint"),(0,r.kt)("p",null,"Now let\u2019s set it\u2019s material to red! To be able to do that, we must set the Color parameter named ",(0,r.kt)("strong",{parentName:"p"},"Tint")," as we\u2019ve seen above is the name of parameters which is connected to Base Color of the Material."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n-- replaces it\'s materials with the nanos default Masked one\nmy_cube:SetDefaultMaterial(MaterialType.Masked)\n\n-- paints it red\nmy_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Red parameter"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(63770).Z})),(0,r.kt)("h2",{id:"making-a-mesh-metallic"},"Making a Mesh Metallic"),(0,r.kt)("p",null,"Now let\u2019s give it a metallic style! You can learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/PhysicallyBased/index.html"},"Physically Based Materials")," to know about how each input affects the final representation of a surface!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetDefaultMaterial(MaterialType.Masked)\n\n-- paints it red\nmy_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))\n\n-- makes it metallic\nmy_cube:SetMaterialScalarParameter("Metallic", 0.85)\n\n-- makes it glossy\nmy_cube:SetMaterialScalarParameter("Roughness", 0)\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Red and Metallic parameters"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(57298).Z})),(0,r.kt)("h2",{id:"making-a-mirror"},"Making a Mirror"),(0,r.kt)("p",null,"A fun thing to do is to make a material fully reflective, like a mirror:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetDefaultMaterial(MaterialType.Masked)\n\n-- makes it fully metallic and glossy\nmy_cube:SetMaterialScalarParameter("Metallic", 1)\nmy_cube:SetMaterialScalarParameter("Roughness", 0)\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Metallic and Roughness parameters"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(86141).Z})),(0,r.kt)("h2",{id:"loading-a-texture-into-a-mesh"},"Loading a Texture into a Mesh"),(0,r.kt)("p",null,"It is even possible to load images ","(",".jpg, .png, etc",")"," from disk and apply to the mesh! For that you will need to have an image inside an Asset Pack or a Package ","(","in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client/")," folder",")",". We gonna use ",(0,r.kt)("a",{parentName:"p",href:"https://i.imgur.com/67CGqHb.jpg"},"this ","(","imgur",")")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"syed.jpg")," and we will place it inside our Package ",(0,r.kt)("inlineCode",{parentName:"p"},"Client/")," folder."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(10292).Z})),(0,r.kt)("p",null,"And now you can set it like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetDefaultMaterial(MaterialType.Masked)\n\n-- applies a custom texture to a parameter called "Texture"\nmy_cube:SetMaterialTextureParameter("Texture", "package///MyAwesomePhotos/Client/syed.jpg")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43644).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"And voila! Easy Peasy! Feel free to create your own materials and textures and tweak them in-game!"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be careful! Loading raw images directly from disk is a slow operation and may cause unwanted stutters! Also raw images aren't cached neither automatically pre-loaded when joining a server."))))}u.isMDXComponent=!0},77496:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-01-1a2e5cd9ab45ff0b2b602e0c64ec190d.jpg"},32652:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-02-f126b2cb2e2abbe172f731ed66c5442a.jpg"},63770:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-03-a1890eedbc13103434e7206b907764b5.jpg"},57298:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-04-1b1c7e09416247f2bbcc250f079a0d8b.jpg"},86141:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-05-93c5fcaca21a0382d9e9fe6396394adb.jpg"},10292:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-06-be10ed884d3837712998888707e61efa.jpg"},43644:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-07-e952bf8bdfcbe91cc3ff9ddaa9bfc6a0.jpg"}}]);