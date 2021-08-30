"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5645],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},17596:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],c={description:"How to add a basic HUD using Render\u2019s Canvas features, to display the character\u2019s Health and Ammo",tags:["tutorial-example","scripting","ui"]},s="Basic HUD (Canvas)",l={unversionedId:"getting-started/tutorials-and-examples/basic-hud-canvas",id:"getting-started/tutorials-and-examples/basic-hud-canvas",isDocsHomePage:!1,title:"Basic HUD (Canvas)",description:"How to add a basic HUD using Render\u2019s Canvas features, to display the character\u2019s Health and Ammo",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/basic-hud-canvas.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/basic-hud-canvas",permalink:"/de/docs/next/getting-started/tutorials-and-examples/basic-hud-canvas",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/basic-hud-canvas.md",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/next/tags/scripting"},{label:"ui",permalink:"/de/docs/next/tags/ui"}],version:"current",frontMatter:{description:"How to add a basic HUD using Render\u2019s Canvas features, to display the character\u2019s Health and Ammo",tags:["tutorial-example","scripting","ui"]},sidebar:"main",previous:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/de/docs/next/getting-started/tutorials-and-examples/tutorials"},next:{title:"Basic HUD (HTML)",permalink:"/de/docs/next/getting-started/tutorials-and-examples/basic-hud-html"}},d=[],m={toc:d};function p(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-hud-canvas"},"Basic HUD (Canvas)"),(0,o.kt)("p",null,"How to add a basic HUD using Render\u2019s Canvas features, to display the character\u2019s Health and Ammo."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a new and modern way of making UIs, please check it out: ",(0,o.kt)("a",{parentName:"p",href:"/de/docs/next/getting-started/tutorials-and-examples/basic-hud-html"},"Basic HUD (HTML)"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(61092).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Variable to stores the Health Canvas Group ID of this UI (to be used to clear all canvas with that ID when the package unloads)\nhealth_group_id = 10\nammo_group_id = 11\n\n-- Variable to stores the Canvas Item ID of Health UI (to be used to edit a specific Canvas Item (Text))\nhealth_item_id = nil\nammo_clip_item_id = nil\nammo_bag_item_id = nil\n\n-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package.Subscribe("Load") to load it when reloading a package\nClient.Subscribe("SpawnLocalPlayer", function(local_player)\n    local_player:Subscribe("Possess", function(player, character)\n        UpdateLocalCharacter(character)\n    end)\nend)\n\n-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it\'s controlled character\nPackage.Subscribe("Load", function()\n    local local_player = Client.GetLocalPlayer()\n    if (local_player  ~= nil) then\n        UpdateLocalCharacter(local_player :GetControlledCharacter())\n    end\nend)\n\n-- Function to set all needed events on local character (to update the UI when it takes damage or dies)\nfunction UpdateLocalCharacter(character)\n    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn\'t return a character)\n    if (character == nil) then return end\n\n    -- Updates the UI with the current character\'s health\n    UpdateHealth(character:GetHealth())\n\n    -- Sets on character an event to update the health\'s UI after it takes damage\n    character:Subscribe("TakeDamage", function(charac, damage, type, bone, from_direction, instigator)\n        UpdateHealth(math.max(charac:GetHealth() - damage, 0))\n    end)\n\n    -- Sets on character an event to update the health\'s UI after it dies\n    character:Subscribe("Death", function(charac)\n        UpdateHealth(0)\n    end)\n\n    -- Try to get if the character is holding any weapon\n    local current_picked_item = character:GetPicked()\n\n    -- If so, update the UI\n    if (current_picked_item and current_picked_item:GetType() == "Weapon") then\n        UpdateAmmo(true, current_picked_item:GetAmmoClip(), current_picked_item:GetAmmoBag())\n    end\n\n    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)\n    character:Subscribe("PickUp", function(charac, object)\n        if (object:GetType() == "Weapon") then\n            UpdateAmmo(true, object:GetAmmoClip(), object:GetAmmoBag())\n        end\n    end)\n\n    -- Sets on character an event to remove the ammo ui when he drops it\'s weapon\n    character:Subscribe("Drop", function(charac, object)\n        UpdateAmmo(false)\n    end)\n\n    -- Sets on character an event to update the UI when he fires\n    character:Subscribe("Fire", function(charac, weapon)\n        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\n\n    -- Sets on character an event to update the UI when he reloads the weapon\n    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)\n        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\nend\n\n-- Function to update the Ammo\'s UI\nfunction UpdateAmmo(enable_ui, ammo, ammo_bag)\n    if (enable_ui) then\n        if (ammo_clip_item_id == nil and ammo_bag_item_id == nil) then\n            -- Creates a new Text Canvas to display the character\'s Health, we choose the ID ammo_group_id = 11 arbitrarily for being our Health Canvas ID (to be able to edit it later on)\n            ammo_clip_item_id = Render.AddText(ammo_group_id, tostring(ammo), Render:GetViewportSize() - Vector2D(200, 100), 2, 25, Color(1, 1, 1), 0, false, false, true, Vector2D(2, 2), Color(0, 0, 0), true, Color(0, 0, 0))\n            ammo_bag_item_id = Render.AddText(ammo_group_id, "/ " .. tostring(ammo_bag), Render:GetViewportSize() - Vector2D(140, 87), 2, 15, Color(1, 1, 1), 0, false, false, true, Vector2D(2, 2), Color(0, 0, 0), true, Color(0, 0, 0))\n        else\n            -- Otherwise if a Text Canvas is already created, then just update it (more performatic than deleting and creating a new one all the time)\n            Render.UpdateItemText(ammo_group_id, ammo_clip_item_id, tostring(ammo))\n            Render.UpdateItemText(ammo_group_id, ammo_bag_item_id, "/ " .. tostring(ammo_bag))\n        end\n    else\n        Render.ClearItems(ammo_group_id)\n        ammo_clip_item_id = nil\n        ammo_bag_item_id = nil\n    end\nend\n\n-- Function to update the Health\'s UI\nfunction UpdateHealth(health)\n    if (health_item_id == nil) then\n        -- Creates a new Text Canvas to display the character\'s Health, we choose the ID health_group_id = 10 arbitrarily for being our Health Canvas ID (to be able to edit it later on)\n        health_item_id = Render.AddText(health_group_id, tostring(health), Vector2D(100, Render:GetViewportSize().Y - 100), 2, 25, Color(1, 1, 1), 0, false, false, true, Vector2D(2, 2), Color(0, 0, 0), true, Color(0, 0, 0))\n    else\n        -- Otherwise if a Text Canvas is already created, then just update it (more performatic than deleting and creating a new one all the time)\n        Render.UpdateItemText(health_group_id, health_item_id, tostring(health))\n    end\nend\n\n-- Clear the UI when the package unloads\nPackage.Subscribe("Unload", function()\n    Render.ClearItems(health_group_id)\n    Render.ClearItems(ammo_group_id)\nend)\n\n-- Updates the UI positions when the Viewport (screen) is resized\nRender.Subscribe("ViewportResized", function(NewSize)\n    if (health_item_id ~= nil) then\n        Render.UpdateItemPosition(health_group_id, health_item_id, Vector2D(100, Render:GetViewportSize().Y - 100))\n    end\n\n    if (ammo_clip_item_id ~= nil and ammo_bag_item_id ~= nil) then\n        Render.UpdateItemPosition(ammo_group_id, ammo_clip_item_id, Render:GetViewportSize() - Vector2D(200, 100))\n        Render.UpdateItemPosition(ammo_group_id, ammo_bag_item_id, Render:GetViewportSize() - Vector2D(140, 87))\n    end\nend)\n')))}p.isMDXComponent=!0},61092:function(e,t,a){t.Z=a.p+"assets/images/canvas-72ab8bfe226c875a759395a2679c83eb.jpg"}}]);