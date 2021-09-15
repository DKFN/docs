"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[193],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={description:"Basic Types used in the API.",tags:["scripting"]},l="Basic Types",c={unversionedId:"scripting-reference/glossary/basic-types",id:"scripting-reference/glossary/basic-types",isDocsHomePage:!1,title:"Basic Types",description:"Basic Types used in the API.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/glossary/basic-types.md",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/basic-types",permalink:"/fr/docs/next/scripting-reference/glossary/basic-types",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/glossary/basic-types.md",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"Basic Types used in the API.",tags:["scripting"]},sidebar:"main",previous:{title:"Vector2D",permalink:"/fr/docs/next/scripting-reference/utility-classes/vectortwod"},next:{title:"Enums",permalink:"/fr/docs/next/scripting-reference/glossary/enums"}},p=[{value:"Lua Types",id:"lua-types",children:[{value:"<code>number</code>",id:"number",children:[]},{value:"<code>string</code>",id:"string",children:[]},{value:"<code>function</code>",id:"function",children:[]},{value:"<code>boolean</code>",id:"boolean",children:[]},{value:"<code>nil</code>",id:"nil",children:[]},{value:"<code>table</code>",id:"table",children:[]},{value:"<code>iterator</code>",id:"iterator",children:[]},{value:"<code>any</code>",id:"any",children:[]}]},{value:"Special Types",id:"special-types",children:[{value:"<code>SpecialPath</code>",id:"specialpath",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-types"},"Basic Types"),(0,i.kt)("h2",{id:"lua-types"},"Lua Types"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For more information and tutorials, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/2.html"},"Official Lua Documentation"),"."))),(0,i.kt)("h3",{id:"number"},(0,i.kt)("inlineCode",{parentName:"h3"},"number")),(0,i.kt)("p",null,"The number type represents real ","(","double-precision floating-point",")"," numbers. Lua has no integer type, as it does not need it. There is a widespread misconception about floating-point arithmetic errors and some people fear that even a simple increment can go weird with floating-point numbers. The fact is that, when you use a double to represent an integer, there is no rounding error at all ","(","unless the number is greater than 100,000,000,000,000",")",". Specifically, a Lua number can represent any long integer without rounding problems. Moreover, most modern CPUs do floating-point arithmetic as fast as ","(","or even faster than",")"," integer arithmetic."),(0,i.kt)("h3",{id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"string")),(0,i.kt)("p",null,"Strings have the usual meaning: a sequence of characters. Lua is eight-bit clean and so strings may contain characters with any numeric value, including embedded zeros. That means that you can store any binary data into a string. Strings in Lua are immutable values. You cannot change a character inside a string, as you may in C; instead, you create a new string with the desired modifications, as in the next example:"),(0,i.kt)("h3",{id:"function"},(0,i.kt)("inlineCode",{parentName:"h3"},"function")),(0,i.kt)("p",null,"Functions are first-class values in Lua. That means that functions can be stored in variables, passed as arguments to other functions, and returned as results. Such facilities give great flexibility to the language: A program may redefine a function to add new functionality, or simply erase a function to create a secure environment when running a piece of untrusted code ","(","such as code received through a network",")",". Moreover, Lua offers good support for functional programming, including nested functions with proper lexical scoping; just wait. Finally, first-class functions play a key role in Lua\u2019s object-oriented facilities."),(0,i.kt)("h3",{id:"boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,i.kt)("p",null,"The boolean type has two values, false and true, which represent the traditional boolean values. However, they do not hold a monopoly of condition values: In Lua, any value may represent a condition. Conditionals ","(","such as the ones in control structures",")"," consider false and nil as false and anything else as true. Beware that, unlike some other scripting languages, Lua considers both zero and the empty string as true in conditional tests."),(0,i.kt)("h3",{id:"nil"},(0,i.kt)("inlineCode",{parentName:"h3"},"nil")),(0,i.kt)("p",null,"Nil is a type with a single value, nil, whose main property is to be different from any other value. As we have seen, a global variable has a nil value by default, before a first assignment, and you can assign nil to a global variable to delete it. Lua uses nil as a kind of non-value, to represent the absence of a useful value."),(0,i.kt)("h3",{id:"table"},(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",null,"The table type implements associative arrays. An associative array is an array that can be indexed not only with numbers, but also with strings or any other value of the language, except nil. Moreover, tables have no fixed size; you can add as many elements as you want to a table dynamically. Tables are the main ","(","in fact, the only",")"," data structuring mechanism in Lua, and a powerful one. We use tables to represent ordinary arrays, symbol tables, sets, records, queues, and other data structures, in a simple, uniform, and efficient way. Lua uses tables to represent packages as well. When we write io.read, we mean \u201cthe read entry from the io package\u201d. For Lua, that means \u201cindex the table io using the string \u201cread\u201d as the key\u201d."),(0,i.kt)("h3",{id:"iterator"},(0,i.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,i.kt)("p",null,"Iterator allows you to traverse elements of a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"for k, v in ipairs()"),"."),(0,i.kt)("h3",{id:"any"},(0,i.kt)("inlineCode",{parentName:"h3"},"any")),(0,i.kt)("p",null,"We use any here in the Docs to represent that any Type can be used."),(0,i.kt)("h2",{id:"special-types"},"Special Types"),(0,i.kt)("h3",{id:"specialpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"SpecialPath")),(0,i.kt)("p",null,"nanos world supports a special type of Path when loading ",(0,i.kt)("strong",{parentName:"p"},"Textures"),", ",(0,i.kt)("strong",{parentName:"p"},"Sounds (.ogg)")," or referencing files from ",(0,i.kt)("strong",{parentName:"p"},"WebUI"),". It allows any Package or WebUI to access files from other Packages or Asset Packs easily."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SpecialPath")," is a string input which supports the following formats for accessing Assets or Packages files:"),(0,i.kt)("h4",{id:"referencing-asset-packs-files"},"Referencing Asset Packs files"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assets///[ASSET_PACK_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{id:"referencing-packages-files"},"Referencing Packages files"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package///[PACKAGE_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{id:"example-accessing-images-from-quaternius-asset-pack"},"Example accessing ",(0,i.kt)("em",{parentName:"h4"},"images")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"quaternius")," Asset Pack:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assets///quaternius/Thumbnails/SK_Revolver_01.jpg")),(0,i.kt)("h4",{id:"example-accessing-a-ogg-sound-from-sandbox-package"},"Example accessing a ",(0,i.kt)("em",{parentName:"h4"},".ogg sound")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"sandbox")," Package:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package///sandbox/Client/my_awesome_audio.ogg")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," It also supports relative and common paths as well!"))))}d.isMDXComponent=!0}}]);