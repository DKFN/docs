"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6930],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60479:function(e,t,n){n.d(t,{Mr:function(){return a},Ld:function(){return i},ge:function(){return o},iA:function(){return s},Bg:function(){return c},IK:function(){return l},NY:function(){return u}});n(87462),n(63366),n(67294);var r=n(3905),a=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#number"},"number")},i=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#string"},"string")},o=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#boolean"},"boolean")},s=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#table"},"table")},c=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#iterator"},"iterator")},l=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#any"},"any")},u=function(){return(0,r.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#function"},"function")}},13165:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(60479),["components"]),s={description:"How to store data in Entities accessible from anywhere",sidebar_position:4,tags:["scripting"]},c="Entity Values",l={unversionedId:"core-concepts/scripting/entity-values",id:"core-concepts/scripting/entity-values",isDocsHomePage:!1,title:"Entity Values",description:"How to store data in Entities accessible from anywhere",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/entity-values.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/entity-values",permalink:"/de/docs/next/core-concepts/scripting/entity-values",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/entity-values.mdx",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:4,frontMatter:{description:"How to store data in Entities accessible from anywhere",sidebar_position:4,tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Packages Communication",permalink:"/de/docs/next/core-concepts/scripting/communicating-between-packages"},next:{title:"User Interface",permalink:"/de/docs/next/core-concepts/scripting/user-interface"}},u=[{value:"<code>GetValue</code>",id:"getvalue",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entity-values"},"Entity Values"),(0,i.kt)("p",null,"How to store data in Entities accessible from anywhere"),(0,i.kt)("p",null,"In nanos world it is possible to store data on entities. Those values can be accessed by any Package and also you can determine if the value will be automatically synchronized with the Clients."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Actors")," page we can find the definitions of ",(0,i.kt)("inlineCode",{parentName:"p"},":SetValue()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},":GetValue()")," methods. Also it is possible to store Values globally on ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/static-classes/client"},"Client")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/static-classes/server"},"Server")," Static Classes with the same methods!"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Note:")," On ",(0,i.kt)("strong",{parentName:"h5"},"Client")," and ",(0,i.kt)("strong",{parentName:"h5"},"Server")," Static Classes we won't have the last parameter ",(0,i.kt)("inlineCode",{parentName:"h5"},"sync"),". As the value will only exist on the side you are setting. :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h2",{parentName:"div",id:"setvalue"},(0,i.kt)("inlineCode",{parentName:"h2"},"SetValue")),(0,i.kt)("p",{parentName:"div"},"In any entity, you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},":SetValue(key, value, sync)")," to set any kind of value on that entity."))),(0,i.kt)("p",null,"If you pass ",(0,i.kt)("inlineCode",{parentName:"p"},"sync")," as true, that value will be automatically synchronized with all clients. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"sync"),"is an optional parameter only available on the ",(0,i.kt)("strong",{parentName:"p"},"Server")," side."),(0,i.kt)("h2",{id:"getvalue"},(0,i.kt)("inlineCode",{parentName:"h2"},"GetValue")),(0,i.kt)("p",null,"After set, you can access any value from any entity using ",(0,i.kt)("inlineCode",{parentName:"p"},":GetValue(key)")," on any entity you want. If you set the value to be synchronized on Clients, you will be able to get the values on the Client side as well."),(0,i.kt)("p",null,":::caution Be aware that storing ",(0,i.kt)("strong",{parentName:"p"},"entities")," itself will not nullify the value if the entity is destroyed, so it is a good practice to validate if values with ",(0,i.kt)("inlineCode",{parentName:"p"},":IsValid()")," after retrieving them. :::"))}d.isMDXComponent=!0}}]);