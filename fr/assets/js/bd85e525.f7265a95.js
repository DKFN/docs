"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8721],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:e},l),{},{components:n})):r.createElement(m,o({ref:e},l))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{YS:function(){return o},SM:function(){return c},Yb:function(){return d},aj:function(){return f},rt:function(){return m},Ut:function(){return g},PZ:function(){return h}});n(87462),n(63366),n(67294);var r=n(3905),i=n(80907),a=function(){return(0,i.zu)().path},o=function(t){var e=t.title,n=t.description,i=t.href,o=t.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},c=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:a()+"/"+n},e,(0,r.kt)("span",null,n))},s=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},u=function(t){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},l=function(t,e){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},p=function(t,e){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},d=function(t){var e=t.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+e.toLowerCase()},e)},f={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},m={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},g={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},h={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Item:function(){return p("Item")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}}},95602:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(87469),c=["components"],s={description:"How to store and retrieve persistent data from disk using the built-in system",tags:["scripting"]},u="Persistent Data",l={unversionedId:"core-concepts/scripting/persistent-data",id:"core-concepts/scripting/persistent-data",isDocsHomePage:!1,title:"Persistent Data",description:"How to store and retrieve persistent data from disk using the built-in system",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/persistent-data.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/persistent-data",permalink:"/fr/docs/next/core-concepts/scripting/persistent-data",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/persistent-data.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"How to store and retrieve persistent data from disk using the built-in system",tags:["scripting"]},sidebar:"main",previous:{title:"Interacting with the Sun",permalink:"/fr/docs/next/core-concepts/scripting/interacting-with-the-sun"},next:{title:"Assets",permalink:"/fr/docs/next/core-concepts/assets"}},p=[{value:"File Format",id:"file-format",children:[]},{value:"Storing and Retrieving data",id:"storing-and-retrieving-data",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function f(t){var e=t.components,n=(0,i.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"persistent-data"},"Persistent Data"),(0,a.kt)("p",null,"How to store and retrieve persistent data from disk using the built-in system."),(0,a.kt)("p",null,"In nanos world it is possible to store and retrieve data from disk with simple functions."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is possible to store Persistent Data in both ",(0,a.kt)("strong",{parentName:"p"},"Client")," and ",(0,a.kt)("strong",{parentName:"p"},"Server"),"!"))),(0,a.kt)("h2",{id:"file-format"},"File Format"),(0,a.kt)("p",null,"The persistent data is automatically stored in the ",(0,a.kt)("strong",{parentName:"p"},"TOML")," format in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentData.toml")," inside your Package/ folder. This file is only created if you call ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.SetPersistentData()"),"."),(0,a.kt)("h2",{id:"storing-and-retrieving-data"},"Storing and Retrieving data"),(0,a.kt)("p",null,"All ",(0,a.kt)("strong",{parentName:"p"},"PersistentData")," files are loaded automatically when the Package loads and stored in memory. You can easily access the whole file with ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.GetPersistentData()")," method."),(0,a.kt)("p",null,"For storing data you will need to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," value, which will store ",(0,a.kt)(o.rt.Any,null)," lua value in that key."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local my_table = {\n    my_id = 123,\n    my_data_02 = "data"\n}\n\nPackage.SetPersistentData("awesome_table", my_table)\n\n-- PersistentData.toml will be:\n-- awesome_table = {my_id = 123, my_data_02 = "data"}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local my_table = Package.GetPersistentData().awesome_table\n\nPackage.Log(my_table.my_id)\n\n-- Will print:\n-- 123\n")))}f.isMDXComponent=!0}}]);