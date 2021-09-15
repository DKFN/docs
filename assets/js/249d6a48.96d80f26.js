"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5277],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{YS:function(){return o},SM:function(){return l},Yb:function(){return d},aj:function(){return m},rt:function(){return f},Ut:function(){return g},PZ:function(){return k}});n(87462),n(63366),n(67294);var r=n(3905),a=n(80907),i=function(){return(0,a.zu)().path},o=function(t){var e=t.title,n=t.description,a=t.href,o=t.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},l=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},e,(0,r.kt)("span",null,n))},c=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},s=function(t){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},p=function(t,e){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},u=function(t,e){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},d=function(t){var e=t.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase()},e)},m={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - you can only call this method on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - you can only call this method on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - you can only call this method on client side!")}},f={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},g={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},k={Actor:function(){return u("Actor","base-classes/actor")},Paintable:function(){return u("Paintable","base-classes/paintable")},Pickable:function(){return u("Pickable","base-classes/pickable")},Cable:function(){return u("Cable")},Character:function(){return u("Character")},File:function(){return u("File")},Grenade:function(){return u("Grenade")},Item:function(){return u("Item")},Light:function(){return u("Light")},Particle:function(){return u("Particle")},Player:function(){return u("Player")},Prop:function(){return u("Prop")},Sound:function(){return u("Sound")},StaticMesh:function(){return u("StaticMesh","static-mesh")},TextRender:function(){return u("TextRender","text-render")},Trigger:function(){return u("Trigger")},Vehicle:function(){return u("Vehicle")},Weapon:function(){return u("Weapon")},WebUI:function(){return u("WebUI")}}},88280:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(87469),l=["components"],c={description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},s="Vector",p={unversionedId:"scripting-reference/utility-classes/vector",id:"scripting-reference/utility-classes/vector",isDocsHomePage:!1,title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",source:"@site/docs/scripting-reference/utility-classes/vector.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/vector",permalink:"/docs/next/scripting-reference/utility-classes/vector",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/vector.mdx",tags:[{label:"utility-class",permalink:"/docs/next/tags/utility-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630320236,formattedLastUpdatedAt:"8/30/2021",frontMatter:{description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},sidebar:"main",previous:{title:"Rotator",permalink:"/docs/next/scripting-reference/utility-classes/rotator"},next:{title:"Vector2D",permalink:"/docs/next/scripting-reference/utility-classes/vectortwod"}},u=[{value:"\ud83d\udc4c Usage",id:"-usage",children:[]},{value:"\ud83c\udf9a Properties",id:"-properties",children:[]},{value:"\u23e9 Functions",id:"-functions",children:[]}],d={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vector"},"Vector"),(0,i.kt)("p",null,"A vector composed of components (X, Y, Z) with floating point precision."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Tip:")," This structure is Open Sourced at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!"))),(0,i.kt)("h2",{id:"-usage"},"\ud83d\udc4c Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector(1452.5, 512, 943.1)\n")),(0,i.kt)("h2",{id:"-properties"},"\ud83c\udf9a Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"X"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"X Coordinate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Y"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Y Coordinate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Z"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Z Coordinate")))),(0,i.kt)("h2",{id:"-functions"},"\u23e9 Functions"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," This structure supports ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"tostring")," operations."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Returns")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Name")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Boolean,null),"`**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Check against another vector for equality, within specified error limits"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null),"`**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Squared distance between two points."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null),"`**"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Ut.Vector,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetSafeNormal()"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Gets a normalized copy of the vector, checking it is safe to do so based on the length")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Boolean,null),"`**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Checks whether vector is near to zero within a specified tolerance"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Boolean,null),"`**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Checks whether all components of the vector are exactly zero"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Normalize()"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Normalize this vector in-place if it is larger than a given tolerance. Leaves it unchanged if not")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null),"`**"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Get the squared length of this vector"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.Ut.Rotator,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Rotation()"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the orientation corresponding to the direction in which the vector points")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(o.rt.Number,null)," of this vector"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);