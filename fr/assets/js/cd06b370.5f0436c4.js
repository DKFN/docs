"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[245],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50168:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],s={description:"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!",tags:["tutorial-example","scripting","assets"]},l="Fireworks",c={unversionedId:"getting-started/tutorials-and-examples/fireworks",id:"getting-started/tutorials-and-examples/fireworks",isDocsHomePage:!1,title:"Fireworks",description:"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/fireworks.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/fireworks",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/fireworks",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/fireworks.md",tags:[{label:"tutorial-example",permalink:"/fr/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"assets",permalink:"/fr/docs/next/tags/assets"}],version:"current",frontMatter:{description:"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Doors",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/doors"},next:{title:"Gravity Gun",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/gravity-gun"}},p=[{value:"Configuring the Asset Pack",id:"configuring-the-asset-pack",children:[]},{value:"Code Snippet",id:"code-snippet",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fireworks"},"Fireworks"),(0,a.kt)("p",null,"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We now have a ",(0,a.kt)("strong",{parentName:"p"},"Fireworks Tools")," Package available to download in the Vault which does exactly what this snippet do!"))),(0,a.kt)("p",null,"First you will need to download the Asset Pack ",(0,a.kt)("strong",{parentName:"p"},"Fireworks Particle Effects")," from our Vault!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(33747).Z})),(0,a.kt)("h3",{id:"configuring-the-asset-pack"},"Configuring the Asset Pack"),(0,a.kt)("p",null,"After that you will need to add the requirement of this ",(0,a.kt)("strong",{parentName:"p"},"Asset Pack")," into your Package ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.toml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Config.toml"',title:'"Config.toml"'},'# Package Configurations\n[package]\n    # Package Name\n    name =                  "My Awesome Firework Package"\n    # Contributors\n    author =                "SyedMuhammad"\n    # Version\n    version =               "1.0.0"\n    # Image URL\n    image =                 "https://i.imgur.com/tQXi0xt.jpg"\n    # Package Type: \'executable\' (normal package) | \'library\' (doesn\'t run - useful for code library)\n    type =                  "executable"\n    # Whether to force the Custom Map Script to do NOT load\n    force_no_map_script =   false\n    # Auto Destroy all entities spawned by this package when it unloads\n    auto_cleanup =          true\n    # Asset Packs Requirements\n    assets_requirements = [\n        "ts-fireworks",\n    ]\n')),(0,a.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"-- For convenience, we will use the default weapons of the NanosWorldWeapons library to be our Firework-shooter weapon\nPackage.RequirePackage(\"nanos-world-weapons\")\n\n-- Let's spawn a Glock and set it to give no damage, this also avoids it from spawning a trail particle\nlocal weapon = NanosWorldWeapons.Glock()\nweapon.BaseDamage = 0\n\n-- Let's subscribe for 'Fire' event from this weapon, this will be triggered for every fire it shoots\nweapon:Subscribe(\"Fire\", function(weap, shooter)\n    -- We get the position at the front of the weapon\n    local control_rotation = shooter:GetControlRotation()\n    local forward_vector = control_rotation:GetForwardVector()\n    local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(400)\n\n    -- We will spawn an empty/invisible Prop, to be our projectile - using our Invisible mesh 'SM_None'\n    local prop = Prop(spawn_location, control_rotation, \"nanos-world::SM_None\")\n\n    -- Spawns the trail/shell particle, this particle is not auto destroyed as it should follow the projectile,\n    -- this way we must destroy it manually after all\n    -- The Asset Pack which we are using to get the particles contains two Shells: 'PS_TS_FireworksShell' and 'PS_TS_FireworksShell_Palm'\n    -- You can use the another one to get more cool effects!\n    local particle = Particle(Vector(), Rotator(), \"ts-fireworks::PS_TS_FireworksShell\", false, true)\n\n    -- Attaches the particle to the projectile prop\n    particle:AttachTo(prop)\n\n    -- Impulses the Projectile forward\n    prop:AddImpulse(forward_vector * Vector(50000), true)\n\n    -- Sets the shooter to be the Network Authority of this Projectile for the next 1000 miliseconds\n    -- This way only the shooter will be reponsible to handle the physics of this object (for 1 second)\n    prop:SetNetworkAuthority(shooter:GetPlayer(), 1000)\n\n    -- Calls the client to spawn the 'Launch' sound\n    Events.BroadcastRemote(\"SpawnFireworkSound\", particle)\n\n    -- After 500 miliseconds, explode the firework\n    Timer.SetTimeout(function(pr)\n        -- Calls the client to spawn the 'Explosion' sound at the projectile location\n        Events.BroadcastRemote(\"ExplodeFireworkSound\", pr:GetLocation())\n\n        -- Spawns the Particle Explosion.\n        -- This Asset Pack also contains the following Particles, feel free to try them!\n        -- 'PS_TS_Fireworks_Burst_Chrys', 'PS_TS_Fireworks_Burst_Circle', 'PS_TS_Fireworks_Burst_Palm',\n        -- 'PS_TS_Fireworks_Burst_Shaped' and 'PS_TS_Fireworks_Burst_ShellsWithinShells'\n        local particle_burst = Particle(pr:GetLocation(), Rotator(), \"ts-fireworks::PS_TS_Fireworks_Burst_Palm\", true, true)\n\n        -- Those particles make it available to tweak some of their properties, let's set the BlastColor to red\n        particle_burst:SetParameterColor(\"BlastColor\", Color(1, 0, 0))\n\n        -- Those particles exposes the following parameters:\n        --  Color: 'BurstColor', 'SparkleColor', 'FlareColor', 'TailColor'\n        --  bool: 'BlastSmoke', 'TailSmoke'\n        --  float: 'BurstMulti', 'SparkleMulti'\n    end, 500, prop)\n\n    -- After 1 second, destroy the particle and the projectile\n    prop:SetLifeSpan(1)\n    particle:SetLifeSpan(1)\nend)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Subscribes to spawn and attach the Firework launch sound\nEvents.Subscribe("SpawnFireworkSound", function(firework)\n    local sound = Sound(Vector(), "ts-fireworks::A_Firework_Launch", false, true, SoundType.SFX, 1, 1, 400, 100000)\n    sound:AttachTo(firework)\nend)\n\n-- Subscribes to spawn the Firework explosion sound\nEvents.Subscribe("ExplodeFireworkSound", function(location)\n    Sound(location, "ts-fireworks::A_Firework_Explosion_Fizz", false, true, SoundType.SFX, 3, 1, 400, 100000)\nend)\n')))}d.isMDXComponent=!0},33747:function(e,t,r){t.Z=r.p+"assets/images/fireworks-01-b03ee1dd1e60597feb1b94f257daf609.jpg"}}]);