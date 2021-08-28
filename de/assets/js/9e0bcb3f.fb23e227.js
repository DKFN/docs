"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6542],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,s(s({ref:t},l),{},{components:a})):n.createElement(h,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30376:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={description:"Basic Types used in the API.",tags:["scripting"]},c="Basic Types",p={unversionedId:"scripting-reference/glossary/basic-types",id:"scripting-reference/glossary/basic-types",isDocsHomePage:!1,title:"Basic Types",description:"Basic Types used in the API.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/glossary/basic-types.md",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/basic-types",permalink:"/de/docs/next/scripting-reference/glossary/basic-types",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/glossary/basic-types.md",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"Basic Types used in the API.",tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Vector2D",permalink:"/de/docs/next/scripting-reference/utility-classes/vectortwod"},next:{title:"Enums",permalink:"/de/docs/next/scripting-reference/glossary/enums"}},l=[{value:"Lua Types",id:"lua-types",children:[]}],u={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-types"},"Basic Types"),(0,i.kt)("h2",{id:"lua-types"},"Lua Types"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"For more information and tutorials, please refer to ",(0,i.kt)("a",{parentName:"h5",href:"https://www.lua.org/pil/2.html"},"Official Lua Documentation"),". :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"number"},(0,i.kt)("inlineCode",{parentName:"h3"},"number")),(0,i.kt)("p",{parentName:"div"},"The number type represents real ","(","double-precision floating-point",")"," numbers. Lua has no integer type, as it does not need it. There is a widespread misconception about floating-point arithmetic errors and some people fear that even a simple increment can go weird with floating-point numbers. The fact is that, when you use a double to represent an integer, there is no rounding error at all ","(","unless the number is greater than 100,000,000,000,000",")",". Specifically, a Lua number can represent any long integer without rounding problems. Moreover, most modern CPUs do floating-point arithmetic as fast as ","(","or even faster than",")"," integer arithmetic."),(0,i.kt)("h3",{parentName:"div",id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"string")),(0,i.kt)("p",{parentName:"div"},"Strings have the usual meaning: a sequence of characters. Lua is eight-bit clean and so strings may contain characters with any numeric value, including embedded zeros. That means that you can store any binary data into a string. Strings in Lua are immutable values. You cannot change a character inside a string, as you may in C; instead, you create a new string with the desired modifications, as in the next example:"),(0,i.kt)("h3",{parentName:"div",id:"function"},(0,i.kt)("inlineCode",{parentName:"h3"},"function")),(0,i.kt)("p",{parentName:"div"},"Functions are first-class values in Lua. That means that functions can be stored in variables, passed as arguments to other functions, and returned as results. Such facilities give great flexibility to the language: A program may redefine a function to add new functionality, or simply erase a function to create a secure environment when running a piece of untrusted code ","(","such as code received through a network",")",". Moreover, Lua offers good support for functional programming, including nested functions with proper lexical scoping; just wait. Finally, first-class functions play a key role in Lua\u2019s object-oriented facilities."),(0,i.kt)("h3",{parentName:"div",id:"boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,i.kt)("p",{parentName:"div"},"The boolean type has two values, false and true, which represent the traditional boolean values. However, they do not hold a monopoly of condition values: In Lua, any value may represent a condition. Conditionals ","(","such as the ones in control structures",")"," consider false and nil as false and anything else as true. Beware that, unlike some other scripting languages, Lua considers both zero and the empty string as true in conditional tests."),(0,i.kt)("h3",{parentName:"div",id:"nil"},(0,i.kt)("inlineCode",{parentName:"h3"},"nil")),(0,i.kt)("p",{parentName:"div"},"Nil is a type with a single value, nil, whose main property is to be different from any other value. As we have seen, a global variable has a nil value by default, before a first assignment, and you can assign nil to a global variable to delete it. Lua uses nil as a kind of non-value, to represent the absence of a useful value."),(0,i.kt)("h3",{parentName:"div",id:"table"},(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",{parentName:"div"},"The table type implements associative arrays. An associative array is an array that can be indexed not only with numbers, but also with strings or any other value of the language, except nil. Moreover, tables have no fixed size; you can add as many elements as you want to a table dynamically. Tables are the main ","(","in fact, the only",")"," data structuring mechanism in Lua, and a powerful one. We use tables to represent ordinary arrays, symbol tables, sets, records, queues, and other data structures, in a simple, uniform, and efficient way. Lua uses tables to represent packages as well. When we write io.read, we mean \u201cthe read entry from the io package\u201d. For Lua, that means \u201cindex the table io using the string \u201cread\u201d as the key\u201d."),(0,i.kt)("h3",{parentName:"div",id:"iterator"},(0,i.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,i.kt)("p",{parentName:"div"},"Iterator allows you to traverse elements of a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"for k, v in ipairs()"),"."),(0,i.kt)("h3",{parentName:"div",id:"any"},(0,i.kt)("inlineCode",{parentName:"h3"},"any")),(0,i.kt)("p",{parentName:"div"},"We use any here in the Docs to represent that any Type can be used."),(0,i.kt)("h2",{parentName:"div",id:"special-types"},"Special Types"),(0,i.kt)("h3",{parentName:"div",id:"specialpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"SpecialPath")),(0,i.kt)("p",{parentName:"div"},"nanos world supports a special type of Path when loading ",(0,i.kt)("strong",{parentName:"p"},"Textures")," or referencing files from ",(0,i.kt)("strong",{parentName:"p"},"WebUI"),". It allows any Package or WebUI to access files from other Packages or Asset Packs easily."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"SpecialPath")," is a string input which supports the following formats for accessing Assets or Packages files:"),(0,i.kt)("h4",{parentName:"div",id:"referencing-asset-packs-files"},"Referencing Asset Packs files"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"assets///[ASSET_PACK_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{parentName:"div",id:"referencing-packages-files"},"Referencing Packages files"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"package///[PACKAGE_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{parentName:"div",id:"example-accessing-images-from-quaternius-asset-pack"},"Example accessing ",(0,i.kt)("em",{parentName:"h4"},"images")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"quaternius")," Asset Pack:"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"assets///quaternius/Thumbnails/SK_Revolver_01.jpg")),(0,i.kt)("h4",{parentName:"div",id:"example-accessing-a-ogg-sound-from-sandbox-package"},"Example accessing a ",(0,i.kt)("em",{parentName:"h4"},".ogg sound")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"sandbox")," Package:"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"package///sandbox/Client/my_awesome_audio.ogg")))))}d.isMDXComponent=!0}}]);