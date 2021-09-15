"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[805],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return o},SM:function(){return c},Yb:function(){return d},aj:function(){return f},rt:function(){return m},Ut:function(){return h},PZ:function(){return v}});n(87462),n(63366),n(67294);var r=n(3905),i=n(80907),a=function(){return(0,i.zu)().path},o=function(e){var t=e.title,n=e.description,i=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},c=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},l=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},u=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase()},t)},f={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},m={Number:function(){return l("number")},String:function(){return l("string")},Boolean:function(){return l("boolean")},Table:function(){return l("table")},Iterator:function(){return l("iterator")},Any:function(){return l("any")},Function:function(){return l("function")},Nil:function(){return l("nil")}},h={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},v={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Item:function(){return p("Item")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}}},70358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(87469),c=["components"],s={description:"How to store data in Entities accessible from anywhere",sidebar_position:4,tags:["scripting"]},l="Entity Values",u={unversionedId:"core-concepts/scripting/entity-values",id:"version-latest/core-concepts/scripting/entity-values",isDocsHomePage:!1,title:"Entity Values",description:"How to store data in Entities accessible from anywhere",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/entity-values.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/entity-values",permalink:"/fr/docs/core-concepts/scripting/entity-values",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/entity-values.mdx",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",sidebarPosition:4,frontMatter:{description:"How to store data in Entities accessible from anywhere",sidebar_position:4,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Packages Communication",permalink:"/fr/docs/core-concepts/scripting/communicating-between-packages"},next:{title:"User Interface",permalink:"/fr/docs/core-concepts/scripting/user-interface"}},p=[{value:"<code>SetValue</code>",id:"setvalue",children:[]},{value:"<code>GetValue</code>",id:"getvalue",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entity-values"},"Entity Values"),(0,a.kt)("p",null,"How to store data in Entities accessible from anywhere"),(0,a.kt)("p",null,"In nanos world it is possible to store data on entities. Those values can be accessed by any Package and also you can determine if the value will be automatically synchronized with the Clients."),(0,a.kt)("p",null,"In ",(0,a.kt)(o.PZ.Actor,null)," page we can find the definitions of ",(0,a.kt)("inlineCode",{parentName:"p"},":SetValue()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},":GetValue()")," methods. Also it is possible to store Values globally on ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/client"},"Client")," and ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/server"},"Server")," Static Classes with the same methods!"),(0,a.kt)("h2",{id:"setvalue"},(0,a.kt)("inlineCode",{parentName:"h2"},"SetValue")),(0,a.kt)("p",null,"In any entity, you can use the command ",(0,a.kt)("inlineCode",{parentName:"p"},":SetValue(key, value, sync)")," to set any kind of value on that entity."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is possible to store ",(0,a.kt)(o.rt.Any,null)," kind of value, except ",(0,a.kt)("inlineCode",{parentName:"p"},"functions"),"."))),(0,a.kt)("p",null,"If you pass ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," as true, that value will be automatically synchronized with all clients. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"sync"),"is an optional parameter only available on the ",(0,a.kt)("strong",{parentName:"p"},"Server")," side."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Client:SetValue()")," and ",(0,a.kt)("strong",{parentName:"p"},"Server:SetValue()")," won't have the last parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"sync"),". As the value will only exist on the side you are setting."))),(0,a.kt)("h2",{id:"getvalue"},(0,a.kt)("inlineCode",{parentName:"h2"},"GetValue")),(0,a.kt)("p",null,"After set, you can access any value from any entity using ",(0,a.kt)("inlineCode",{parentName:"p"},":GetValue(key)")," on any entity you want. If you set the value to be synchronized on Clients, you will be able to get the values on the Client side as well."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Be aware that storing ",(0,a.kt)("strong",{parentName:"p"},"entities")," itself will not nullify the value if the entity is destroyed, so it is a good practice to validate if values with ",(0,a.kt)("inlineCode",{parentName:"p"},":IsValid()")," after retrieving them."))))}f.isMDXComponent=!0}}]);