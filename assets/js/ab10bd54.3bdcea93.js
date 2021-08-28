"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3610],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60479:function(e,t,n){n.d(t,{Mr:function(){return r},Ld:function(){return i},ge:function(){return o},iA:function(){return s},Bg:function(){return c},IK:function(){return l},NY:function(){return p}});n(87462),n(63366),n(67294);var a=n(3905),r=function(){return(0,a.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#number"},"number")},i=function(){return(0,a.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#string"},"string")},o=function(){return(0,a.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#boolean"},"boolean")},s=function(){return(0,a.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#table"},"table")},c=function(){return(0,a.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#iterator"},"iterator")},l=function(){return(0,a.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#any"},"any")},p=function(){return(0,a.kt)("a",{href:"/docs/scripting-reference/glossary/basic-types#function"},"function")}},81870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(60479),s=["components"],c={description:"How to store data in Entities accessible from anywhere",sidebar_position:4,tags:["scripting"]},l="Entity Values",p={unversionedId:"core-concepts/scripting/entity-values",id:"core-concepts/scripting/entity-values",isDocsHomePage:!1,title:"Entity Values",description:"How to store data in Entities accessible from anywhere",source:"@site/docs/core-concepts/scripting/entity-values.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/entity-values",permalink:"/docs/next/core-concepts/scripting/entity-values",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/entity-values.mdx",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630145072,formattedLastUpdatedAt:"8/28/2021",sidebarPosition:4,frontMatter:{description:"How to store data in Entities accessible from anywhere",sidebar_position:4,tags:["scripting"]},sidebar:"tutorialSidebar",previous:{title:"Packages Communication",permalink:"/docs/next/core-concepts/scripting/communicating-between-packages"},next:{title:"User Interface",permalink:"/docs/next/core-concepts/scripting/user-interface"}},u=[{value:"<code>SetValue</code>",id:"setvalue",children:[]},{value:"<code>GetValue</code>",id:"getvalue",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entity-values"},"Entity Values"),(0,i.kt)("p",null,"How to store data in Entities accessible from anywhere"),(0,i.kt)("p",null,"In nanos world it is possible to store data on entities. Those values can be accessed by any Package and also you can determine if the value will be automatically synchronized with the Clients."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Actors")," page we can find the definitions of ",(0,i.kt)("inlineCode",{parentName:"p"},":SetValue()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},":GetValue()")," methods. Also it is possible to store Values globally on ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/static-classes/client"},"Client")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/static-classes/server"},"Server")," Static Classes with the same methods!"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," On ",(0,i.kt)("strong",{parentName:"p"},"Client")," and ",(0,i.kt)("strong",{parentName:"p"},"Server")," Static Classes we won't have the last parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"sync"),". As the value will only exist on the side you are setting."))),(0,i.kt)("h2",{id:"setvalue"},(0,i.kt)("inlineCode",{parentName:"h2"},"SetValue")),(0,i.kt)("p",null,"In any entity, you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},":SetValue(key, value, sync)")," to set any kind of value on that entity."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is possible to store ",(0,i.kt)(o.IK,null)," kind of value, except ",(0,i.kt)("inlineCode",{parentName:"p"},"functions"),"."))),(0,i.kt)("p",null,"If you pass ",(0,i.kt)("inlineCode",{parentName:"p"},"sync")," as true, that value will be automatically synchronized with all clients. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"sync"),"is an optional parameter only available on the ",(0,i.kt)("strong",{parentName:"p"},"Server")," side."),(0,i.kt)("h2",{id:"getvalue"},(0,i.kt)("inlineCode",{parentName:"h2"},"GetValue")),(0,i.kt)("p",null,"After set, you can access any value from any entity using ",(0,i.kt)("inlineCode",{parentName:"p"},":GetValue(key)")," on any entity you want. If you set the value to be synchronized on Clients, you will be able to get the values on the Client side as well."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be aware that storing ",(0,i.kt)("strong",{parentName:"p"},"entities")," itself will not nullify the value if the entity is destroyed, so it is a good practice to validate if values with ",(0,i.kt)("inlineCode",{parentName:"p"},":IsValid()")," after retrieving them."))))}m.isMDXComponent=!0}}]);