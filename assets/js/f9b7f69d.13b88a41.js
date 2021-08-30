"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2770],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{YS:function(){return i},SM:function(){return o},Yb:function(){return m},aj:function(){return u},rt:function(){return c},Ut:function(){return f},PZ:function(){return N}});a(87462),a(63366),a(67294);var n=a(3905),r=a(80907),l=function(){return(0,r.zu)().path},i=function(t){var e=t.title,a=t.description,r=t.href,i=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,n.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},o=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:l()+"/"+a},e,(0,n.kt)("span",null,a))},p=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},s=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},k=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},d=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},m=function(t){var e=t.children;return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+e.toLowerCase()},e)},u={AuthorityOnly:function(){return p("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return p("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return p("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},c={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},f={Vector:function(){return k("Vector")},Rotator:function(){return k("Rotator")},Color:function(){return k("Color")},Quat:function(){return k("Quat","quaternion")},Vector2D:function(){return k("Vector2D","vectortwod")}},N={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Item:function(){return d("Item")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}}},90922:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return d},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(87469),o=["components"],p={description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},s="\ud83d\udcc1 File",k={unversionedId:"scripting-reference/classes/file",id:"version-latest/scripting-reference/classes/file",isDocsHomePage:!1,title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/file.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/file",permalink:"/docs/scripting-reference/classes/file",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/file.mdx",tags:[{label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630320236,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:0,frontMatter:{description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83e\uddd1 Character",permalink:"/docs/scripting-reference/classes/character"},next:{title:"\ud83d\udca3 Grenade",permalink:"/docs/scripting-reference/classes/grenade"}},d=[{value:"Example",id:"example",children:[]},{value:"Constructor Parameters",id:"constructor-parameters",children:[]},{value:"Static Functions",id:"static-functions",children:[{value:"<code>Time</code>",id:"time",children:[]},{value:"<code>CreateDirectory</code>",id:"createdirectory",children:[]},{value:"<code>Remove</code>",id:"remove",children:[]},{value:"<code>Exists</code>",id:"exists",children:[]},{value:"<code>IsDirectory</code>",id:"isdirectory",children:[]},{value:"<code>IsRegularFile</code>",id:"isregularfile",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>Close</code>",id:"close",children:[]},{value:"<code>Flush</code>",id:"flush",children:[]},{value:"<code>IsEOF</code>",id:"iseof",children:[]},{value:"<code>IsBad</code>",id:"isbad",children:[]},{value:"<code>IsGood</code>",id:"isgood",children:[]},{value:"<code>HasFailed</code>",id:"hasfailed",children:[]},{value:"<code>Read</code>",id:"read",children:[]},{value:"<code>ReadLine</code>",id:"readline",children:[]},{value:"<code>Seek</code>",id:"seek",children:[]},{value:"<code>Size</code>",id:"size",children:[]},{value:"<code>Skip</code>",id:"skip",children:[]},{value:"<code>Tell</code>",id:"tell",children:[]},{value:"<code>Write</code>",id:"write",children:[]}]}],m={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-file"},"\ud83d\udcc1 File"),(0,l.kt)("p",null,"A File represents an entry to a system file."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is a ",(0,l.kt)("strong",{parentName:"p"},"Server")," side class. It is not possible to open files from outside the server folder. All path must be relative to the Server\u2019s executable folder. All files are opened as binary file by default."))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local configuration_file = File("my_awesome_configuration.json")\n\nlocal configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))\n')),(0,l.kt)("h2",{id:"constructor-parameters"},"Constructor Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Default")),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"file_path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path relative to server executable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"truncate"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether or not to clear the file upon opening it")))),(0,l.kt)("h2",{id:"static-functions"},"Static Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Returns")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Returns when a file was last modified in Unix time"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Deletes a folder or file"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Verifies if a entry exists in the file system"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if a path is a directory"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if a path is a file"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"time"},(0,l.kt)("inlineCode",{parentName:"h3"},"Time")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns when the file was last modified in Unix time"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.Time(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file")))),(0,l.kt)("h3",{id:"createdirectory"},(0,l.kt)("inlineCode",{parentName:"h3"},"CreateDirectory")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Creates a directory ","(","for every folder passed",")"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null)," if succeeded")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.CreateDirectory(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to folder")))),(0,l.kt)("h3",{id:"remove"},(0,l.kt)("inlineCode",{parentName:"h3"},"Remove")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Deletes a folder or a file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.Remove(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file or folder")))),(0,l.kt)("h3",{id:"exists"},(0,l.kt)("inlineCode",{parentName:"h3"},"Exists")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets if a file or folder exists"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.Exists(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file or folder")))),(0,l.kt)("h3",{id:"isdirectory"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsDirectory")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets if a path is a directory"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.IsDirectory(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to folder")))),(0,l.kt)("h3",{id:"isregularfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsRegularFile")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets if a path is a file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.IsRegularFile(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Returns")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#functions"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Close")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closes the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#flush"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Flush")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flushes content to the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the file status is End of File"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the file status is Bad"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the file status is Good"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the last operation has Failed"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)," characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reads and returns the next file line"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#seek"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Seek")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sets the file pointer to a specific position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Returns the size of the file"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#skip"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Skip")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Skips n ","(","amount",")"," positions from the current file pointer position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"Returns the current file pointer position"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#write"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Write")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Writes the Data at the current position of the file")))),(0,l.kt)("h3",{id:"close"},(0,l.kt)("inlineCode",{parentName:"h3"},"Close")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Closes the file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Close()\n")),(0,l.kt)("h3",{id:"flush"},(0,l.kt)("inlineCode",{parentName:"h3"},"Flush")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Flushes content to the file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Flush()\n")),(0,l.kt)("h3",{id:"iseof"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsEOF")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the file status is End of File"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:IsEOF()\n")),(0,l.kt)("h3",{id:"isbad"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsBad")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the file status is Bad"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:IsBad()\n")),(0,l.kt)("h3",{id:"isgood"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsGood")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the file status is Good"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:IsGood()\n")),(0,l.kt)("h3",{id:"hasfailed"},(0,l.kt)("inlineCode",{parentName:"h3"},"HasFailed")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the last operation has Failed"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:HasFailed()\n")),(0,l.kt)("h3",{id:"read"},(0,l.kt)("inlineCode",{parentName:"h3"},"Read")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads n ","(","Length",")"," characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.String,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Read(length)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"length"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Length to be read from file")))),(0,l.kt)("h3",{id:"readline"},(0,l.kt)("inlineCode",{parentName:"h3"},"ReadLine")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads and returns the next file line"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.String,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:ReadLine()\n")),(0,l.kt)("h3",{id:"seek"},(0,l.kt)("inlineCode",{parentName:"h3"},"Seek")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the file pointer to a specific position")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Seek(position)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"position"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position to  offset the file pointer")))),(0,l.kt)("h3",{id:"size"},(0,l.kt)("inlineCode",{parentName:"h3"},"Size")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the size of the file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Size()\n")),(0,l.kt)("h3",{id:"skip"},(0,l.kt)("inlineCode",{parentName:"h3"},"Skip")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skips n ","(","amount",")"," positions from the current file pointer position")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Skip(amount)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"amount"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Amount to offset the file pointer")))),(0,l.kt)("h3",{id:"tell"},(0,l.kt)("inlineCode",{parentName:"h3"},"Tell")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the current file pointer position"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Tell()\n")),(0,l.kt)("h3",{id:"write"},(0,l.kt)("inlineCode",{parentName:"h3"},"Write")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Writes the Data at the current position of the file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Write(data)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"data"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Writes the data to the file")))))}u.isMDXComponent=!0}}]);