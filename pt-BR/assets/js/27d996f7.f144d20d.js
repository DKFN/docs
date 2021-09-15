"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9550],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42332:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={description:"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger",tags:["tutorial-example","script"]},c="Prop Rain",l={unversionedId:"getting-started/tutorials-and-examples/prop-rain",id:"getting-started/tutorials-and-examples/prop-rain",isDocsHomePage:!1,title:"Prop Rain",description:"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/prop-rain.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/prop-rain",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/prop-rain",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/prop-rain.md",tags:[{label:"tutorial-example",permalink:"/pt-BR/docs/next/tags/tutorial-example"},{label:"script",permalink:"/pt-BR/docs/next/tags/script"}],version:"current",frontMatter:{description:"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger",tags:["tutorial-example","script"]},sidebar:"main",previous:{title:"Jogar como Prop",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/play-as-prop"},next:{title:"Prop Shooter",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/prop-shooter"}},p=[{value:"Final result",id:"final-result",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prop-rain"},"Prop Rain"),(0,o.kt)("p",null,"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger."),(0,o.kt)("h3",{id:"final-result"},"Final result"),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/docs/tutorials/prop-rain.mp4",type:"video/mp4"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Trigger\nmy_trigger = Trigger(Vector(200, 200, 0), 200)\n\n-- Defines my_timer globally to be used to store Timer\nmy_timer = nil\n\n-- Sets BeginOverlap event\nmy_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    -- Only activates if a Character enters it\n    if (actor_triggering:GetType() ~= "Character") then\n        return\n    end\n\n    -- Sets a Timer at each 100ms to spawn a Prop\n    my_timer = Timer.SetInterval(function()\n        -- Gets random Location and Rotation\n        local prop_spawn_location = Vector(math.random(100, 300), math.random(100, 300), math.random(800, 1200))\n        local prop_spawn_rotation = Rotator(math.random(0, 360), math.random(0, 360), math.random(0, 360))\n\n        -- Spawns a Crate\n        Prop(prop_spawn_location, prop_spawn_rotation, "nanos-world::SM_Crate_07")\n    end, 100)\nend)\n\n-- Sets EndOverlap event\nmy_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)\n    -- Only deactivates if a Character leaves it\n    if (actor_triggering:GetType() ~= "Character") then\n        return\n    end\n\n    -- Stops/Clear the Timer\n    if (my_timer ~= nil) then\n        Timer.ClearTimeout(my_timer)\n    end\nend)\n')))}m.isMDXComponent=!0}}]);