"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9217],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(a),m=r,u=k["".concat(o,".").concat(m)]||k[m]||d[m]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},72389:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(9913);function l(){return(0,n.useContext)(r._)}},82924:function(e,t,a){var n=a(67294).createContext(void 0);t.Z=n},98465:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(63366),l=a(67294),i=a(86010),s=a(72389),o=a(85350),c={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},p=["sources","className","alt"],d=function(e){var t=(0,s.Z)(),a=(0,o.Z)().isDarkTheme,d=e.sources,k=e.className,m=e.alt,u=void 0===m?"":m,h=(0,r.Z)(e,p),g=t?a?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,n.Z)({key:e,src:d[e],alt:u,className:(0,i.Z)(c.themedImage,c["themedImage--"+e],k)},h))})))}},85350:function(e,t,a){var n=a(67294),r=a(82924);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},87469:function(e,t,a){a.d(t,{YS:function(){return i},SM:function(){return s},Yb:function(){return k},aj:function(){return m},rt:function(){return u},Ut:function(){return h},PZ:function(){return g}});a(87462),a(63366),a(67294);var n=a(3905),r=a(80907),l=function(){return(0,r.zu)().path},i=function(e){var t=e.title,a=e.description,r=e.href,i=e.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,n.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,t),(0,n.kt)("p",null,a))},s=function(e){var t=e.children,a=e.href;return(0,n.kt)("a",{class:"reference-link",href:l()+"/"+a},t,(0,n.kt)("span",null,a))},o=function(e,t){return(0,n.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:e,title:t}))},c=function(e){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},p=function(e,t){return(0,n.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},d=function(e,t){return(0,n.kt)("a",{href:l()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},k=function(e){var t=e.children;return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},m={AuthorityOnly:function(){return o("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return o("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return o("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},u={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},h={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},g={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Item:function(){return d("Item")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}}},95418:function(e,t,a){a.d(t,{ZP:function(){return p}});var n=a(87462),r=a(63366),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/pickable",mdxType:"ReferenceLink"},"Base Pickable")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#drop"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Drop")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When a Character drops this")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#hit"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Hit")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When this Entity hits something")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#interact"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Interact")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Triggered when a Character tries to Pick up this")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#pickup"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"PickUp")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"When a Character picks up this")))))}p.isMDXComponent=!0},67775:function(e,t,a){a.d(t,{ZP:function(){return p}});var n=a(87462),r=a(63366),l=a(67294),i=a(3905),s=a(87469),o=["components"],c={toc:[]};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Fragment,null,a.hidden_reference?(0,i.kt)(l.Fragment,null):(0,i.kt)(s.SM,{href:"scripting-reference/classes/base-classes/pickable",mdxType:"ReferenceLink"},"Base Pickable")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#addskeletalmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AddSkeletalMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Spawns and Attaches a SkeletalMesh into this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#addstaticmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"AddStaticMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Spawns and Attaches a StaticMesh into this Actor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#pulluse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"PullUse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Force this Pickable to be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#releaseuse"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ReleaseUse")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Force this Pickable to be released the usage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#removeskeletalmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"RemoveSkeletalMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Removes, if existing, a SkeletalMesh from this Actor given it's custom ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#removestaticmeshattached"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"RemoveStaticMeshAttached")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Removes, if existing, a StaticMesh from this Actor given it's custom ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)(s.aj.ServerOnly,null)),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#setcrosshairmaterial"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetCrosshairMaterial")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the Crosshair Material")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#getassetname"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetAssetName")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the Asset name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(s.PZ.Character,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/scripting-reference/classes/base-classes/pickable#gethandler"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetHandler")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets the Character ","(","if existing",")"," which is hol")))))}p.isMDXComponent=!0},75564:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(87469),s=a(98465),o=a(67775),c=a(95418),p=["components"],d={description:"Base class for all Pickable entities",tags:["base-class"]},k="Base Pickable",m={unversionedId:"scripting-reference/classes/base-classes/pickable",id:"scripting-reference/classes/base-classes/pickable",isDocsHomePage:!1,title:"Base Pickable",description:"Base class for all Pickable entities",source:"@site/docs/scripting-reference/classes/base-classes/pickable.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/pickable",permalink:"/docs/next/scripting-reference/classes/base-classes/pickable",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/base-classes/pickable.mdx",tags:[{label:"base-class",permalink:"/docs/next/tags/base-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630621177,formattedLastUpdatedAt:"9/2/2021",frontMatter:{description:"Base class for all Pickable entities",tags:["base-class"]},sidebar:"main",previous:{title:"Base Paintable",permalink:"/docs/next/scripting-reference/classes/base-classes/paintable"},next:{title:"\ud83c\udf40 Assets",permalink:"/docs/next/scripting-reference/static-classes/assets"}},u=[{value:"Functions",id:"functions",children:[]},{value:"Available Crosshairs Types",id:"available-crosshairs-types",children:[{value:"<code>AddSkeletalMeshAttached</code>",id:"addskeletalmeshattached",children:[]},{value:"<code>AddStaticMeshAttached</code>",id:"addstaticmeshattached",children:[]},{value:"<AuthorityType.ServerOnly /><code>PullUse</code>",id:"pulluse",children:[]},{value:"<AuthorityType.ServerOnly /><code>ReleaseUse</code>",id:"releaseuse",children:[]},{value:"<code>RemoveSkeletalMeshAttached</code>",id:"removeskeletalmeshattached",children:[]},{value:"<code>RemoveStaticMeshAttached</code>",id:"removestaticmeshattached",children:[]},{value:"<AuthorityType.ServerOnly /><code>SetCrosshairMaterial</code>",id:"setcrosshairmaterial",children:[]},{value:"<code>GetAssetName</code>",id:"getassetname",children:[]},{value:"<code>GetHandler</code>",id:"gethandler",children:[]}]},{value:"Events",id:"events",children:[{value:"<code>Drop</code>",id:"drop",children:[]},{value:"<code>Hit</code>",id:"hit",children:[]},{value:"<AuthorityType.ServerOnly /><code>Interact</code>",id:"interact",children:[]},{value:"<code>PickUp</code>",id:"pickup",children:[]}]}],h={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"base-pickable"},"Base Pickable"),(0,l.kt)("p",null,"Base class for all Pickable entities"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pickable")," are special entities which can be ",(0,l.kt)("strong",{parentName:"p"},"grabbed"),", ",(0,l.kt)("strong",{parentName:"p"},"hold")," and ",(0,l.kt)("strong",{parentName:"p"},"used")," by ",(0,l.kt)(i.PZ.Character,null),". Example of Pickable entities are: ",(0,l.kt)(i.PZ.Weapon,null),", ",(0,l.kt)(i.PZ.Item,null)," and ",(0,l.kt)(i.PZ.Grenade,null),"."),(0,l.kt)("p",null,"They have special methods and events and are highlighted when looking at by a Character."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)(o.ZP,{hidden_reference:!0,mdxType:"BasePickableFunctions"}),(0,l.kt)("h2",{id:"available-crosshairs-types"},"Available ",(0,l.kt)("a",{parentName:"h2",href:"/docs/next/scripting-reference/glossary/enums#crosshairtype"},"Crosshairs Types")),(0,l.kt)(s.Z,{alt:"All available Crosshairs",sources:{light:"/img/docs/crosshairs_light.jpg",dark:"/img/docs/crosshairs_dark.jpg"},mdxType:"ThemedImage"}),(0,l.kt)("h3",{id:"addskeletalmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddSkeletalMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spawns and Attaches a SkeletalMesh into this Actor, the SkeletalMesh must have the same Skeletal used by this Actor Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:AddSkeletalMeshAttached(id, skeletal_mesh_path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique ID to set the Skeletal Mesh")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"skeletal_mesh_path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Skeletal Mesh Asset to use")))),(0,l.kt)("h3",{id:"addstaticmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"AddStaticMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spawns and Attaches a StaticMesh into this Actor in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:AddStaticMeshAttached(id, static_mesh_path, socket, relative_location, relative_rotation)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique ID to set the Static Mesh")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"static_mesh_path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Static Mesh Asset to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"socket"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'""')),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bone Socket to attach to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"relative_location"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Vector(0, 0, 0)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Relative Location")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"relative_rotation"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Rotator(0, 0, 0)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Relative Rotation")))),(0,l.kt)("h3",{id:"pulluse"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"PullUse")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Force this Pickable to be used ","(","e.g. if this is a Weapon, will fire",")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:PullUse()\n")),(0,l.kt)("h3",{id:"releaseuse"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"ReleaseUse")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Force this Pickable to be released the usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:ReleaseUse()\n")),(0,l.kt)("h3",{id:"removeskeletalmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoveSkeletalMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Removes, if existing, a SkeletalMesh from this Actor given it's custom ID")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:RemoveSkeletalMeshAttached(id)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique ID to remove the Attached Mesh")))),(0,l.kt)("h3",{id:"removestaticmeshattached"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoveStaticMeshAttached")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Removes, if existing, a StaticMesh from this Actor given it's custom ID")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:RemoveStaticMeshAttached(id)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"id"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Unique ID to remove the Attached Mesh")))),(0,l.kt)("h3",{id:"setcrosshairmaterial"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"SetCrosshairMaterial")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the Crosshair Material")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:SetCrosshairMaterial(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"getassetname"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetAssetName")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the Asset name ","(",(0,l.kt)(i.rt.String,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:GetAssetName()\n")),(0,l.kt)("h3",{id:"gethandler"},(0,l.kt)("inlineCode",{parentName:"h3"},"GetHandler")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets the Character ","(","if existing",")"," which is holding this")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"entity:GetHandler()\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)(c.ZP,{hidden_reference:!0,mdxType:"BasePickableEvents"}),(0,l.kt)("h3",{id:"drop"},(0,l.kt)("inlineCode",{parentName:"h3"},"Drop")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When a Character drops this")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("Drop", function(self, character, was_triggered_by_player)\n    -- called when any weapon is dropped by a Character\nend)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"pickable"},"Pickable")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"self")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The entity which has been dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Character"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"character")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Character which picked up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"was_triggered_by_player")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If the Player has actively pressed 'G' to drop")))),(0,l.kt)("h3",{id:"hit"},(0,l.kt)("inlineCode",{parentName:"h3"},"Hit")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When this Entity hits something")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("Hit", function(self, intensity)\n    -- called when any weapon hits something\nend)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"pickable"},"Pickable")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"self")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The entity which has been hit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"intensity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Intensity of the Hit")))),(0,l.kt)("h3",{id:"interact"},(0,l.kt)(i.aj.ServerOnly,null),(0,l.kt)("inlineCode",{parentName:"h3"},"Interact")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When a Character interacts with this Pickable (i.e. try to pick it up) - return false to prevent it")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"pickable"},"Pickable")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"self"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.PZ.Character,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"character"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pickup"},(0,l.kt)("inlineCode",{parentName:"h3"},"PickUp")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When a Character picks up this")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Weapon.Subscribe("PickUp", function(self, character)\n    -- called when any weapon is picked up by a Character\nend)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"pickable"},"Pickable")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"self")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The entity which has been picked up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.PZ.Character,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"character")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The Character which picked up")))))}g.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);