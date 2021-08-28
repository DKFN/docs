"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[707],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60479:function(e,t,n){n.d(t,{Mr:function(){return a},Ld:function(){return i},ge:function(){return s},iA:function(){return o},Bg:function(){return c},IK:function(){return l},NY:function(){return u}});n(87462),n(63366),n(67294);var r=n(3905),a=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#number"},"number")},i=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#string"},"string")},s=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#boolean"},"boolean")},o=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#table"},"table")},c=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#iterator"},"iterator")},l=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#any"},"any")},u=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#function"},"function")}},91174:function(e,t,n){n.d(t,{OW:function(){return a},i$:function(){return i},Il:function(){return s},D6:function(){return o},Wh:function(){return c}});n(87462),n(63366),n(67294);var r=n(3905),a=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/utility-classes/vector"},"Vector")},i=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/utility-classes/rotator"},"Rotator")},s=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/utility-classes/color"},"Color")},o=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/utility-classes/quaternion"},"Quat")},c=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/utility-classes/vectortwod"},"Vector2D")}},39713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=n(60479),o=(n(91174),["components"]),c={description:"How to store and retrieve persistent data from disk using the built-in system",tags:["scripting"]},l="Persistent Data",u={unversionedId:"core-concepts/scripting/persistent-data",id:"core-concepts/scripting/persistent-data",isDocsHomePage:!1,title:"Persistent Data",description:"How to store and retrieve persistent data from disk using the built-in system",source:"@site/docs/core-concepts/scripting/persistent-data.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/persistent-data",permalink:"/docs/next/core-concepts/scripting/persistent-data",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/persistent-data.mdx",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630145072,formattedLastUpdatedAt:"8/28/2021",frontMatter:{description:"How to store and retrieve persistent data from disk using the built-in system",tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Interacting with the Sun",permalink:"/docs/next/core-concepts/scripting/interacting-with-the-sun"},next:{title:"Assets",permalink:"/docs/next/core-concepts/assets"}},p=[{value:"File Format",id:"file-format",children:[]},{value:"Storing and Retrieving data",id:"storing-and-retrieving-data",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"persistent-data"},"Persistent Data"),(0,i.kt)("p",null,"How to store and retrieve persistent data from disk using the built-in system."),(0,i.kt)("p",null,"In nanos world it is possible to store and retrieve data from disk with simple functions."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is possible to store Persistent Data in both ",(0,i.kt)("strong",{parentName:"p"},"Client")," and ",(0,i.kt)("strong",{parentName:"p"},"Server"),"!"))),(0,i.kt)("h2",{id:"file-format"},"File Format"),(0,i.kt)("p",null,"The persistent data is automatically stored in the ",(0,i.kt)("strong",{parentName:"p"},"TOML")," format in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentData.toml")," inside your Package/ folder. This file is only created if you call ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.SetPersistentData()"),"."),(0,i.kt)("h2",{id:"storing-and-retrieving-data"},"Storing and Retrieving data"),(0,i.kt)("p",null,"All ",(0,i.kt)("strong",{parentName:"p"},"PersistentData")," files are loaded automatically when the Package loads and stored in memory. You can easily access the whole file with ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.GetPersistentData()")," method."),(0,i.kt)("p",null,"For storing data you will need to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," value, which will store ",(0,i.kt)(s.IK,null)," lua value in that key."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local my_table = {\n    my_id = 123,\n    my_data_02 = "data"\n}\n\nPackage.SetPersistentData("awesome_table", my_table)\n\n-- PersistentData.toml will be:\n-- awesome_table = {my_id = 123, my_data_02 = "data"}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local my_table = Package.GetPersistentData().awesome_table\n\nPackage.Log(my_table.my_id)\n\n-- Will print:\n-- 123\n")))}f.isMDXComponent=!0}}]);