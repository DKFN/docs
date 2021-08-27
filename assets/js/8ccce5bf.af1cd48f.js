"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8990],{3905:function(e,n,_){_.d(n,{Zo:function(){return l},kt:function(){return M}});var a=_(7294);function o(e,n,_){return n in e?Object.defineProperty(e,n,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[n]=_,e}function t(e,n){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),_.push.apply(_,a)}return _}function r(e){for(var n=1;n<arguments.length;n++){var _=null!=arguments[n]?arguments[n]:{};n%2?t(Object(_),!0).forEach((function(n){o(e,n,_[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):t(Object(_)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(_,n))}))}return e}function s(e,n){if(null==e)return{};var _,a,o=function(e,n){if(null==e)return{};var _,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)_=t[a],n.indexOf(_)>=0||(o[_]=e[_]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)_=t[a],n.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(o[_]=e[_])}return o}var u=a.createContext({}),i=function(e){var n=a.useContext(u),_=n;return e&&(_="function"==typeof e?e(n):r(r({},n),e)),_},l=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},A={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var _=e.components,o=e.mdxType,t=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(_),M=o,C=m["".concat(u,".").concat(M)]||m[M]||A[M]||t;return _?a.createElement(C,r(r({ref:n},l),{},{components:_})):a.createElement(C,r({ref:n},l))}));function M(e,n){var _=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=_.length,r=new Array(t);r[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var i=2;i<t;i++)r[i]=_[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,_)}m.displayName="MDXCreateElement"},3332:function(e,n,_){_.r(n),_.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var a=_(7462),o=_(3366),t=(_(7294),_(3905)),r=["components"],s={},u="nanos world Asset Pack List",i={unversionedId:"assets-modding/default-asset-pack/default-asset-pack",id:"assets-modding/default-asset-pack/default-asset-pack",isDocsHomePage:!1,title:"nanos world Asset Pack List",description:"nanos world provides a default Asset Pack already included in the base game, feel free to use the assets the way you want!",source:"@site/docs/assets-modding/default-asset-pack/default-asset-pack.md",sourceDirName:"assets-modding/default-asset-pack",slug:"/assets-modding/default-asset-pack/default-asset-pack",permalink:"/docs/assets-modding/default-asset-pack/default-asset-pack",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/assets-modding/default-asset-pack/default-asset-pack.md",version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630069070,formattedLastUpdatedAt:"8/27/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WIP: Weapons",permalink:"/docs/assets-modding/creating-assets/wip-weapons"},next:{title:"Default Materials",permalink:"/docs/assets-modding/default-asset-pack/default-materials"}},l=[],A={toc:l};function m(e){var n=e.components,s=(0,o.Z)(e,r);return(0,t.kt)("wrapper",(0,a.Z)({},A,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"nanos-world-asset-pack-list"},"nanos world Asset Pack List"),(0,t.kt)("p",null,"nanos world provides a default Asset Pack already included in the base game, feel free to use the assets the way you want!"),(0,t.kt)("p",null,(0,t.kt)("img",{src:_(7153).Z})),(0,t.kt)("p",null,"In order to use those assets, you need to use the key ",(0,t.kt)("inlineCode",{parentName:"p"},"nanos-world"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Assets.toml"',title:'"Assets.toml"'},'# Assets Files\n[assets]\n    # Maps\n    [assets.maps]\n    BlankMap = "Maps/BlankMap/BlankMap"\n    TestingMap = "Maps/Testing/NanosTestingMap"\n\n    # Static Meshes\n    [assets.static_meshes]\n    SM_Cone = "Props/BasicShapes/SM_Cone"\n    SM_Cube = "Props/BasicShapes/SM_Cube"\n    SM_Cylinder = "Props/BasicShapes/SM_Cylinder"\n    SM_Plane = "Props/BasicShapes/SM_Plane"\n    SM_Sphere = "Props/BasicShapes/SM_Sphere"\n\n    SM_Ball_VR = "Props/VRShapes/SM_Ball"\n    SM_Cube_VR_01 = "Props/VRShapes/SM_Cube_01"\n    SM_Cube_VR_02 = "Props/VRShapes/SM_Cube_02"\n    SM_Cube_VR_03 = "Props/VRShapes/SM_Cube_03"\n    SM_Pyramid_VR = "Props/VRShapes/SM_Pyramid"\n\n    SM_Error = "Props/Utils/SM_Error"\n    SM_None = "Props/Utils/SM_None"\n\n    SM_Jet_Thruster = "Props/Basics/SM_Jet_Thruster"\n    SM_Lamp = "Props/Basics/SM_Lamp"\n    SM_Balloon = "Props/Basics/SM_Balloon"\n\n    SM_PlasticBarrel_01 = "Art/City/Construction_Props/Mesh/SM_PlasticBarrel_01"\n    SM_RockingChair = "Art/City/House_Props/Meshes/SM_RockingChair"\n    SM_RoundStand = "Art/City/House_Props/Meshes/SM_RoundStand"\n    SM_Bottle_01 = "Art/Rural/InteriorDecoration/SM_Bottle_01"\n    SM_Bottle_02 = "Art/Rural/InteriorDecoration/SM_Bottle_02"\n    SM_Bottle = "Art/Rural/Extra/SM_Bottle"\n    SM_Bunny = "Art/City/House_Props/Meshes/SM_Bunny"\n    SM_CupC = "Art/City/House_Props/Meshes/KitchenWare/SM_CupC"\n    SM_OilLamp = "Art/Rural/InteriorDecoration/SM_OilLamp"\n    SM_PlierSet_01 = "Art/City/Construction_Props/Mesh/SM_PlierSet_01"\n    SM_PliersSet_07 = "Art/City/Construction_Props/Mesh/SM_PliersSet_07"\n    SM_Saw_01 = "Art/City/Construction_Props/Mesh/SM_Saw_01"\n    SM_BarrelTub = "Art/Rural/Extra/SM_BarrelTub"\n    SM_CoffeeTable = "Art/City/House_Props/Meshes/SM_CoffeeTable"\n    SM_Crate_Base_01 = "Art/City/Construction_Props/Mesh/SM_Crate_Base_01"\n    SM_Crate_Lid_01 = "Art/City/Construction_Props/Mesh/SM_Crate_Lid_01"\n    SM_Toolbox_01 = "Art/City/Construction_Props/Mesh/SM_Toolbox_01"\n    SM_Toolbox_06 = "Art/City/Construction_Props/Mesh/SM_Toolbox_06"\n    SM_VaseA = "Art/City/House_Props/Meshes/Vases/SM_VaseA"\n    SM_CupD = "Art/City/House_Props/Meshes/KitchenWare/SM_CupD"\n    SM_Crate_01 = "Art/City/Construction_Props/Mesh/SM_Crate_01"\n\n    SM_Eye = "Characters/Common/BodyParts/Eyes/SM_Eye"\n    SM_Beard_Extra = "Characters/Common/BodyParts/Beard/SM_Beard_Extra"\n    SM_Beard_Middle = "Characters/Common/BodyParts/Beard/SM_Beard_Middle"\n    SM_Beard_Mustache_01 = "Characters/Common/BodyParts/Beard/SM_Beard_Mustache_01"\n    SM_Beard_Mustache_02 = "Characters/Common/BodyParts/Beard/SM_Beard_Mustache_02"\n    SM_Beard_Side = "Characters/Common/BodyParts/Beard/SM_Beard_Side"\n    SM_Hair_Long = "Characters/Common/BodyParts/Hair/Male/SM_Hair_Long"\n    SM_Hair_Short = "Characters/Common/BodyParts/Hair/Male/SM_Hair_Short"\n    SM_Hair_Kwang = "Characters/Common/BodyParts/Hair/Kwang/SM_Hair_Kwang"\n\n    SM_AK47_Mag_Empty = "Weapons/Rifles/AK47/SM_AK47_Mag_Empty"\n    SM_AK74U_Mag_Empty = "Weapons/Rifles/AK74U/SM_AK74U_Mag_Empty"\n    SM_GE36_Mag_Empty = "Weapons/Rifles/GE36/SM_GE36_Mag_Empty"\n    SM_Glock_Mag_Empty = "Weapons/Pistols/Glock/SM_Glock_Mag_Empty"\n    SM_DesertEagle_Mag_Empty = "Weapons/Pistols/DesertEagle/SM_DesertEagle_Mag_Empty"\n    SM_AP5_Mag_Empty = "Weapons/Rifles/AP5/SM_AP5_Mag_Empty"\n    SM_AR4_Mag_Empty = "Weapons/Rifles/AR4/SM_AR4_Mag_Empty"\n    SM_ASVal_Mag_Empty = "Weapons/Rifles/ASVal/SM_ASVal_Mag_Empty"\n\n    SM_T4_Sight = "Weapons/Common/Accessories/SM_T4_Sight"\n    SM_Vertgrip = "Weapons/Common/Accessories/SM_Vertgrip"\n    SM_Suppressor = "Weapons/Common/Accessories/SM_Suppressor5"\n    SM_Scope_25x56_X = "Weapons/Common/Accessories/SM_Scope_25x56_X"\n\n    SM_WoodenTable = "Art/Rural/InteriorDecoration/SM_WoodenTable"\n    SM_WoodenChair = "Art/Rural/InteriorDecoration/SM_WoodenChair"\n    SM_TireLarge = "Art/Rural/Extra/SM_TireLarge"\n    SM_Stool = "Art/Rural/InteriorDecoration/SM_Stool"\n    SM_TeaPot_Interior = "Art/Rural/InteriorDecoration/SM_TeaPot_Interior"\n    SM_OilDrum = "Art/Rural/ExteriorDecoration/SM_OilDrum"\n    SM_Bucket5Gallon = "Art/Rural/Extra/SM_Bucket5Gallon"\n    SM_Crate_07 = "Art/Rural/Extra/SM_Crate_07"\n    SM_Crate_03 = "Art/Rural/InteriorDecoration/SM_Crate_03"\n    SM_Crate_04 = "Art/Rural/InteriorDecoration/SM_Crate_04"\n    SM_Pot_01 = "Art/Rural/InteriorDecoration/SM_Pot_01"\n    SM_Pot_02 = "Art/Rural/InteriorDecoration/SM_Pot_02"\n    SM_Plate_Interior = "Art/Rural/InteriorDecoration/SM_Plate_Interior"\n    SM_Barrel_02 = "Art/Rural/Extra/SM_Barrel_02"\n    SM_Bamboo_Roof45_Right = "Art/Rural/HouseModular/SM_Bamboo_Roof45_Right"\n    SM_MetalBucket_Interior_02 = "Art/Rural/InteriorDecoration/SM_MetalBucket_Interior_02"\n    SM_Basket_01 = "Art/Rural/InteriorDecoration/SM_Basket_01"\n    SM_Bamboo_Woodplank_01 = "Art/Rural/Extra/SM_Bamboo_Woodplank_01"\n\n    SM_Bamboo_Bench_Wall = "NanosWorldMaps/Art/Rural/ExteriorDecoration/SM_Bamboo_Bench_Wall"\n    SM_Bamboo_Bench_Wall = "NanosWorldMaps/Art/Rural/ExteriorDecoration/SM_Bamboo_Bench_Wall"\n    SM_Bamboo_BoatHouse = "NanosWorldMaps/Art/Rural/HouseFull/SM_Bamboo_BoatHouse"\n    SM_Bamboo_House_03 = "NanosWorldMaps/Art/Rural/HouseFull/SM_Bamboo_House_03"\n    SM_Bamboo_Small_03 = "NanosWorldMaps/Art/Rural/Extra/SM_Bamboo_Small_03"\n    SM_Bamboo_Table = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_Bamboo_Table"\n    SM_Bamboo_Wall_01 = "NanosWorldMaps/Art/Rural/HouseModular/SM_Bamboo_Wall_01"\n    SM_Bed = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_Bed"\n    SM_BedFrame = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_BedFrame"\n    SM_Bed_Interior = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_Bed_Interior"\n    SM_Bench = "NanosWorldMaps/Art/Rural/ExteriorDecoration/SM_Bench"\n    SM_Boat = "NanosWorldMaps/Art/Rural/Extra/SM_Boat"\n    SM_BunkBed = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_BunkBed"\n    SM_Cantilever = "NanosWorldMaps/Art/Rural/HouseModular/SM_Cantilever"\n    SM_Carpet_01 = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_Carpet_01"\n    SM_Carpet_02 = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_Carpet_02"\n    SM_ClothesLine = "NanosWorldMaps/Art/Rural/ExteriorDecoration/SM_ClothesLine"\n    SM_Dock_01 = "NanosWorldMaps/Art/Rural/ExteriorDecoration/SM_Dock_01"\n    SM_Dock_02 = "NanosWorldMaps/Art/Rural/ExteriorDecoration/SM_Dock_02"\n    SM_GarageShelfA = "NanosWorldMaps/Art/City/House_Props/Meshes/SM_GarageShelfA"\n    SM_Hoe = "NanosWorldMaps/Art/Rural/Extra/SM_Hoe"\n    SM_House_01 = "NanosWorldMaps/Art/Composings/Houses/SM_House_01"\n    SM_House_02 = "NanosWorldMaps/Art/Composings/Houses/SM_House_02"\n    SM_House_03 = "NanosWorldMaps/Art/Composings/Houses/SM_House_03"\n    SM_House_04 = "NanosWorldMaps/Art/Composings/Houses/SM_House_04"\n    SM_House_05 = "NanosWorldMaps/Art/Composings/Houses/SM_House_05"\n    SM_Ladder_02 = "NanosWorldMaps/Art/Rural/HouseModular/SM_Ladder_02"\n    SM_Metal_Shack_04 = "NanosWorldMaps/Art/Rural/HouseFull/SM_Metal_Shack_04"\n    SM_Metal_Shack_05 = "NanosWorldMaps/Art/Rural/HouseFull/SM_Metal_Shack_05"\n    SM_Metal_Shack_06 = "NanosWorldMaps/Art/Rural/HouseFull/SM_Metal_Shack_06"\n    SM_Metal_Shack_GuardTower = "NanosWorldMaps/Art/Rural/HouseFull/SM_Metal_Shack_GuardTower"\n    SM_Metal_Shack_Outhouse = "NanosWorldMaps/Art/Rural/HouseFull/SM_Metal_Shack_Outhouse"\n    SM_MetalTower = "NanosWorldMaps/Art/Rural/Extra/SM_MetalTower"\n    SM_Old_Antenna = "NanosWorldMaps/Art/Rural/Extra/SM_Old_Antenna"\n    SM_PlasterWall_01 = "NanosWorldMaps/Art/Rural/HouseModular/SM_PlasterWall_01"\n    SM_PlasterWall_02 = "NanosWorldMaps/Art/Rural/HouseModular/SM_PlasterWall_02"\n    SM_PlasterWall_03 = "NanosWorldMaps/Art/Rural/HouseModular/SM_PlasterWall_03"\n    SM_PlasterWall_08 = "NanosWorldMaps/Art/Rural/HouseModular/SM_PlasterWall_08"\n    SM_Pole_02 = "NanosWorldMaps/Art/Rural/Bridge/Meshes/SM_Pole_02"\n    SM_Rake = "NanosWorldMaps/Art/Rural/Extra/SM_Rake"\n    SM_RoadBlock_Flag_01 = "NanosWorldMaps/Art/City/Construction_Props/Mesh/SM_RoadBlock_Flag_01"\n    SM_Shelter = "NanosWorldMaps/Art/Rural/Extra/SM_Shelter"\n    SM_Shovel = "NanosWorldMaps/Art/Rural/Extra/SM_Shovel"\n    SM_TimberPlank = "NanosWorldMaps/Art/Rural/HouseModular/SM_TimberPlank"\n    SM_TimberRailing = "NanosWorldMaps/Art/Rural/HouseModular/SM_TimberRailing"\n    SM_TimberStructure_01 = "NanosWorldMaps/Art/Rural/Extra/SM_TimberStructure_01"\n    SM_TimberStructure_02 = "NanosWorldMaps/Art/Rural/Extra/SM_TimberStructure_02"\n    SM_TimberStructure_09 = "NanosWorldMaps/Art/Rural/HouseModular/SM_TimberStructure_09"\n    SM_Tomato = "NanosWorldMaps/Art/Rural/InteriorDecoration/SM_Tomato"\n    SM_VaseD = "NanosWorldMaps/Art/City/House_Props/Meshes/Vases/SM_VaseD"\n    SM_WastePipe = "NanosWorldMaps/Art/Rural/Extra/SM_WastePipe"\n    SM_WaterStorageTank = "NanosWorldMaps/Art/Rural/Extra/SM_WaterStorageTank"\n    SM_Window_05 = "NanosWorldMaps/Art/Rural/HouseModular/SM_Window_05"\n    SM_WoodenSlab_1_3x3 = "NanosWorldMaps/Art/Rural/HouseModular/SM_WoodenSlab_1_3x3"\n    SM_Wood_Platform_10 = "NanosWorldMaps/Art/Rural/HouseModular/SM_Wood_Platform_10"\n    SM_Wood_Stairs_02 = "NanosWorldMaps/Art/Rural/HouseModular/SM_Wood_Stairs_02"\n    SM_BeachFence_02 = "NanosWorldMaps/Art/Rural/ExteriorDecoration/SM_BeachFence_02"\n\n    SM_Tree_Acacia_02 = "NanosWorldMaps/Art/Nature/Trees/acacia/SM_Tree_Acacia_02"\n    SM_Tree_Almond_02 = "NanosWorldMaps/Art/Nature/Trees/Almond/SM_Tree_Almond_02"\n    SM_Tree_Acacia_01 = "NanosWorldMaps/Art/Nature/Trees/acacia/SM_Tree_Acacia_01"\n    SM_Branch = "NanosWorldMaps/Art/Nature/Branches/SM_Branch"\n    SM_Bush_01 = "NanosWorldMaps/Art/Nature/Bushes/SM_Bush_01"\n    SM_Buttercup = "NanosWorldMaps/Art/Nature/Flowers/SM_Buttercup"\n    SM_GreenCoconut = "NanosWorldMaps/Art/Rural/Extra/SM_GreenCoconut"\n    SM_HeatherClumps = "NanosWorldMaps/Art/Nature/Flowers/SM_HeatherClumps"\n    SM_Rock_03 = "NanosWorldMaps/Art/Nature/Rocks/SM_Rock_03"\n    SM_Rock_04 = "NanosWorldMaps/Art/Nature/Rocks/SM_Rock_04"\n    SM_Rock_05 = "NanosWorldMaps/Art/Nature/Rocks/SM_Rock_05"\n    SM_Rock_06 = "NanosWorldMaps/Art/Nature/Rocks/SM_Rock_06"\n    SM_Rock_07 = "NanosWorldMaps/Art/Nature/Rocks/SM_Rock_07"\n    SM_Scabious = "NanosWorldMaps/Art/Nature/Flowers/SM_Scabious"\n    SM_Tree_Almond_01 = "NanosWorldMaps/Art/Nature/Trees/Almond/SM_Tree_Almond_01"\n    SM_Tree_Almond_03 = "NanosWorldMaps/Art/Nature/Trees/Almond/SM_Tree_Almond_03"\n    SM_Tree_Palm_01 = "NanosWorldMaps/Art/Nature/Trees/Palm/SM_Tree_Palm_01"\n    SM_Tree_Palm_02 = "NanosWorldMaps/Art/Nature/Trees/Palm/SM_Tree_Palm_02"\n    SM_Tree_Palm_03 = "NanosWorldMaps/Art/Nature/Trees/Palm/SM_Tree_Palm_03"\n\n    SM_Grenade_G67 = "Weapons/Grenades/G67/SM_G67"\n    SM_Torch = "Weapons/Torch/SM_Torch"\n\n    SM_Tire_01 = "Vehicles/Common/Meshes/SM_Tire_01"\n\n    # Skeletal Meshes\n    [assets.skeletal_meshes]\n    SK_Female = "Characters/Female/SK_Female"\n    SK_Male = "Characters/Male/SK_Male"\n    SK_Mannequin = "Characters/Mannequin/SK_Mannequin"\n    SK_Mannequin_Female = "Characters/Mannequin/SK_Mannequin_Female"\n    SK_PostApocalyptic = "Characters/PostApocalyptic/SK_PostApocalyptic"\n    SK_ClassicMale = "Characters/ClassicMale/SK_ClassicMale"\n\n    SK_Shirt = "Characters/Common/BodyParts/Clothes/Shirt/SK_Shirt"\n    SK_Underwear = "Characters/Common/BodyParts/Clothes/Underwear/SK_Underwear"\n    SK_Pants = "Characters/Common/BodyParts/Clothes/Pants/SK_Pants"\n    SK_Shoes_01 = "Characters/Common/BodyParts/Clothes/Shoes/SK_Shoes_01"\n    SK_Shoes_02 = "Characters/Common/BodyParts/Clothes/Shoes/SK_Shoes_02"\n    SK_Tie = "Characters/Common/BodyParts/Clothes/Tie/SK_Tie"\n    SK_CasualSet = "Characters/Common/BodyParts/Clothes/CasualSet/SK_CasualSet"\n    SK_Sneakers = "Characters/Common/BodyParts/Clothes/Shoes/SK_Sneakers"\n\n    SK_Error = "Props/Utils/SK_Error"\n    SK_None = "Props/Utils/SK_None"\n\n    SK_AK47 = "Weapons/Rifles/AK47/SK_AK47"\n    SK_AK74U = "Weapons/Rifles/AK74U/SK_AK74U"\n    SK_GE36 = "Weapons/Rifles/GE36/SK_GE36"\n    SK_Glock = "Weapons/Pistols/Glock/SK_Glock"\n    SK_DesertEagle = "Weapons/Pistols/DesertEagle/SK_DesertEagle"\n    SK_AR4 = "Weapons/Rifles/AR4/SK_AR4"\n    SK_Moss500 = "Weapons/Shotguns/Moss500/SK_Moss500"\n    SK_AP5 = "Weapons/Rifles/AP5/SK_AP5"\n    SK_SMG11 = "Weapons/SMGs/SMG11/SK_SMG11"\n    SK_ASVal = "Weapons/Rifles/ASVal/SK_ASVal"\n\n    SK_Pickup = "Vehicles/Variety/Pickup/SK_Pickup"\n    SK_SUV = "Vehicles/Variety/SUV/SK_SUV"\n    SK_Truck_Box = "Vehicles/Variety/Truck/SK_Truck_Box"\n    SK_Truck_Chassis = "Vehicles/Variety/Truck/SK_Truck_Chassis"\n    SK_SportsCar = "Vehicles/Variety/SportsCar/SK_SportsCar"\n    SK_Hatchback = "Vehicles/Variety/Hatchback/SK_Hatchback"\n\n    # Sound Assets\n    [assets.sounds]\n    A_Kill_Feedback = "Weapons/Common/Audios/A_Kill_Feedback_Cue"\n    A_Hit_Feedback = "Weapons/Common/Audios/A_Hit_Feedback_Cue"\n    A_Headshot_Feedback = "Weapons/Common/Audios/A_Headshot_Feedback_Cue"\n\n    A_SMG_Dry = "Weapons/Common/Audios/A_SMG_Dry_Cue"\n    A_Rifle_Dry = "Weapons/Common/Audios/A_Rifle_Dry_Cue"\n    A_Pistol_Dry = "Weapons/Common/Audios/A_Pistol_Dry_Cue"\n    A_Shotgun_Dry = "Weapons/Common/Audios/A_Shotgun_Dry_Cue"\n    A_SMG_Load = "Weapons/Common/Audios/A_SMG_Load_Cue"\n    A_Rifle_Load = "Weapons/Common/Audios/A_Rifle_Load_Cue"\n    A_Pistol_Load = "Weapons/Common/Audios/A_Pistol_Load_Cue"\n    A_Shotgun_Load_Bullet = "Weapons/Common/Audios/A_Shotgun_Load_Bullet_Cue"\n    A_SMG_Unload = "Weapons/Common/Audios/A_SMG_Unload_Cue"\n    A_Rifle_Unload = "Weapons/Common/Audios/A_Rifle_Unload_Cue"\n    A_Pistol_Unload = "Weapons/Common/Audios/A_Pistol_Unload_Cue"\n    A_AimZoom = "Weapons/Common/Audios/Rattle/A_AimZoom_Cue"\n    A_Rattle = "Weapons/Common/Audios/Rattle/A_Rattle_Cue"\n    A_M4A1_Shot = "Weapons/Common/Audios/A_M4A1_Shot_Cue"\n    A_AK47_Shot = "Weapons/Common/Audios/A_AK47_Shot_Cue"\n    A_AK74U_Shot = "Weapons/Common/Audios/A_AK74U_Shot_Cue"\n    A_ASVal_Shot = "Weapons/Common/Audios/A_ASVal_Shot_Cue"\n    A_Glock_Shot = "Weapons/Common/Audios/A_Glock_Shot_Cue"\n    A_Rifle_Shot = "Weapons/Common/Audios/A_Rifle_Shot_Cue"\n    A_DesertEagle_Shot = "Weapons/Common/Audios/A_DesertEagle_Shot_Cue"\n    A_Shotgun_Shot = "Weapons/Common/Audios/A_Shotgun_Shot_Cue"\n    A_LightMachine_Shot = "Weapons/Common/Audios/A_LightMachine_Shot_Cue"\n    A_SMG_Shot = "Weapons/Common/Audios/A_SMG_Shot_Cue"\n    A_9MM_Shot = "Weapons/Common/Audios/A_9MM_Shot_Cue"\n    A_12Gauge_Shot = "Weapons/Common/Audios/A_12Gauge_Shot_Cue"\n    A_308_BoltAction_Shot = "Weapons/Common/Audios/A_308_BoltAction_Shot_Cue"\n    A_308_BoltAction_Supressed_Shot = "Weapons/Common/Audios/A_308_BoltAction_Supressed_Shot_Cue"\n    A_1911_Shot = "Weapons/Common/Audios/A_1911_Shot_Cue"\n    A_ACR_Supressed_A_Shot = "Weapons/Common/Audios/A_ACR_Supressed_A_Shot_Cue"\n    A_ACR_Supressed_B_Shot = "Weapons/Common/Audios/A_ACR_Supressed_B_Shot_Cue"\n    A_AR10_Shot = "Weapons/Common/Audios/A_AR10_Shot_Cue"\n    A_AR15_A_Shot = "Weapons/Common/Audios/A_AR15_A_Shot_Cue"\n    A_AR15_B_Shot = "Weapons/Common/Audios/A_AR15_B_Shot_Cue"\n    A_AR15_C_Shot = "Weapons/Common/Audios/A_AR15_C_Shot_Cue"\n    A_BerretaM9_Shot = "Weapons/Common/Audios/A_BerretaM9_Shot_Cue"\n    A_DesertEagle_B_Shot = "Weapons/Common/Audios/A_DesertEagle_B_Shot_Cue"\n    A_GunFire = "Weapons/Common/Audios/A_GunFire_Cue"\n    A_HeavyShot = "Weapons/Common/Audios/A_HeavyShot_Cue"\n    A_M82_Shot = "Weapons/Common/Audios/A_M82_Shot_Cue"\n    A_P226_Shot = "Weapons/Common/Audios/A_P226_Shot_Cue"\n    A_ShotgunBlast_Shot = "Weapons/Common/Audios/A_ShotgunBlast_Shot_Cue"\n    A_Sniper_Shot = "Weapons/Common/Audios/A_Sniper_Shot_Cue"\n    A_SniperRifle_Shot = "Weapons/Common/Audios/A_SniperRifle_Shot_Cue"\n    A_Wesson500_Shot = "Weapons/Common/Audios/A_Wesson500_Shot_Cue"\n    A_Explosion_Large = "Weapons/Common/Audios/A_Explosion_Large_Cue"\n\n    A_Male_01_Death = "Characters/Common/Audios/Death/A_Male_01_Death_Cue"\n    A_Male_02_Death = "Characters/Common/Audios/Death/A_Male_02_Death_Cue"\n    A_Male_03_Death = "Characters/Common/Audios/Death/A_Male_03_Death_Cue"\n    A_Male_04_Death = "Characters/Common/Audios/Death/A_Male_04_Death_Cue"\n    A_Male_05_Death = "Characters/Common/Audios/Death/A_Male_05_Death_Cue"\n    A_Male_06_Death = "Characters/Common/Audios/Death/A_Male_06_Death_Cue"\n\n    A_Female_01_Death = "Characters/Common/Audios/Death/A_Female_01_Death_Cue"\n    A_Female_02_Death = "Characters/Common/Audios/Death/A_Female_02_Death_Cue"\n    A_Female_03_Death = "Characters/Common/Audios/Death/A_Female_03_Death_Cue"\n    A_Female_04_Death = "Characters/Common/Audios/Death/A_Female_04_Death_Cue"\n    A_Female_05_Death = "Characters/Common/Audios/Death/A_Female_05_Death_Cue"\n\n    A_Male_01_Pain = "Characters/Common/Audios/Pain/A_Male_01_Pain_Cue"\n    A_Male_02_Pain = "Characters/Common/Audios/Pain/A_Male_02_Pain_Cue"\n    A_Male_03_Pain = "Characters/Common/Audios/Pain/A_Male_03_Pain_Cue"\n    A_Male_04_Pain = "Characters/Common/Audios/Pain/A_Male_04_Pain_Cue"\n    A_Male_05_Pain = "Characters/Common/Audios/Pain/A_Male_05_Pain_Cue"\n    A_Male_06_Pain = "Characters/Common/Audios/Pain/A_Male_06_Pain_Cue"\n    A_Male_07_Pain = "Characters/Common/Audios/Pain/A_Male_07_Pain_Cue"\n    A_Male_08_Pain = "Characters/Common/Audios/Pain/A_Male_08_Pain_Cue"\n\n    A_Female_01_Pain = "Characters/Common/Audios/Pain/A_Female_01_Pain_Cue"\n    A_Female_02_Pain = "Characters/Common/Audios/Pain/A_Female_02_Pain_Cue"\n    A_Female_03_Pain = "Characters/Common/Audios/Pain/A_Female_03_Pain_Cue"\n    A_Female_04_Pain = "Characters/Common/Audios/Pain/A_Female_04_Pain_Cue"\n    A_Female_05_Pain = "Characters/Common/Audios/Pain/A_Female_05_Pain_Cue"\n    A_Female_06_Pain = "Characters/Common/Audios/Pain/A_Female_06_Pain_Cue"\n    A_Female_07_Pain = "Characters/Common/Audios/Pain/A_Female_07_Pain_Cue"\n    A_Female_08_Pain = "Characters/Common/Audios/Pain/A_Female_08_Pain_Cue"\n\n    A_Male_01_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_01_BattleShout_Cue"\n    A_Male_02_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_02_BattleShout_Cue"\n    A_Male_03_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_03_BattleShout_Cue"\n    A_Male_04_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_04_BattleShout_Cue"\n\n    A_Female_01_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_01_BattleShout_Cue"\n    A_Female_02_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_02_BattleShout_Cue"\n    A_Female_03_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_03_BattleShout_Cue"\n    A_Female_04_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_04_BattleShout_Cue"\n\n    A_Female_Groan = "Characters/Common/Audios/Groan/A_Female_Groan_Cue"\n\n    A_Male_01_Groan = "Characters/Common/Audios/Groan/A_Male_01_Groan_Cue"\n    A_Male_02_Groan = "Characters/Common/Audios/Groan/A_Male_02_Groan_Cue"\n\n    A_Male_01_Growl = "Characters/Common/Audios/Growl/A_Male_01_Growl_Cue"\n    A_Male_02_Growl = "Characters/Common/Audios/Growl/A_Male_02_Growl_Cue"\n\n    A_Female_01_Growl = "Characters/Common/Audios/Growl/A_Female_01_Growl_Cue"\n    A_Female_02_Growl = "Characters/Common/Audios/Growl/A_Female_02_Growl_Cue"\n    A_Female_03_Growl = "Characters/Common/Audios/Growl/A_Female_03_Growl_Cue"\n    A_Female_04_Growl = "Characters/Common/Audios/Growl/A_Female_04_Growl_Cue"\n    A_Female_05_Growl = "Characters/Common/Audios/Growl/A_Female_05_Growl_Cue"\n\n    A_Male_01_Laugh = "Characters/Common/Audios/Laugh/A_Male_01_Laugh_Cue"\n    A_Male_02_Laugh = "Characters/Common/Audios/Laugh/A_Male_02_Laugh_Cue"\n    A_Male_03_Laugh = "Characters/Common/Audios/Laugh/A_Male_03_Laugh_Cue"\n    A_Male_04_Laugh = "Characters/Common/Audios/Laugh/A_Male_04_Laugh_Cue"\n    A_Male_05_Laugh = "Characters/Common/Audios/Laugh/A_Male_05_Laugh_Cue"\n    A_Male_06_Laugh = "Characters/Common/Audios/Laugh/A_Male_06_Laugh_Cue"\n\n    A_Female_01_Laugh = "Characters/Common/Audios/Laugh/A_Female_01_Laugh_Cue"\n    A_Female_02_Laugh = "Characters/Common/Audios/Laugh/A_Female_02_Laugh_Cue"\n\n    A_Female_01_Scream = "Characters/Common/Audios/Scream/A_Female_01_Scream_Cue"\n    A_Female_02_Scream = "Characters/Common/Audios/Scream/A_Female_02_Scream_Cue"\n\n    A_Male_01_Attack = "Characters/Common/Audios/Attack/A_Male_01_Attack_Cue"\n    A_Male_02_Attack = "Characters/Common/Audios/Attack/A_Male_02_Attack_Cue"\n    A_Male_03_Attack = "Characters/Common/Audios/Attack/A_Male_03_Attack_Cue"\n    A_Male_04_Attack = "Characters/Common/Audios/Attack/A_Male_04_Attack_Cue"\n    A_Male_05_Attack = "Characters/Common/Audios/Attack/A_Male_05_Attack_Cue"\n    A_Male_06_Attack = "Characters/Common/Audios/Attack/A_Male_06_Attack_Cue"\n\n    A_Female_01_Attack = "Characters/Common/Audios/Attack/A_Female_01_Attack_Cue"\n    A_Female_02_Attack = "Characters/Common/Audios/Attack/A_Female_02_Attack_Cue"\n    A_Female_03_Attack = "Characters/Common/Audios/Attack/A_Female_03_Attack_Cue"\n    A_Female_04_Attack = "Characters/Common/Audios/Attack/A_Female_04_Attack_Cue"\n    A_Female_05_Attack = "Characters/Common/Audios/Attack/A_Female_05_Attack_Cue"\n    A_Female_06_Attack = "Characters/Common/Audios/Attack/A_Female_06_Attack_Cue"\n    A_Female_07_Attack = "Characters/Common/Audios/Attack/A_Female_07_Attack_Cue"\n\n    A_Male_01_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_01_BattleShout_Cue"\n    A_Male_02_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_02_BattleShout_Cue"\n    A_Male_03_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_03_BattleShout_Cue"\n    A_Male_04_BattleShout = "Characters/Common/Audios/BattleShout/A_Male_04_BattleShout_Cue"\n\n    A_Female_01_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_01_BattleShout_Cue"\n    A_Female_02_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_02_BattleShout_Cue"\n    A_Female_03_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_03_BattleShout_Cue"\n    A_Female_04_BattleShout = "Characters/Common/Audios/BattleShout/A_Female_04_BattleShout_Cue"\n\n    A_Whoosh = "Characters/Common/Audios/Actions/A_Whoosh_Cue"\n\n    A_Male_01_Cough = "Characters/Common/Audios/Cough/A_Male_01_Cough_Cue"\n    A_Male_02_Cough = "Characters/Common/Audios/Cough/A_Male_02_Cough_Cue"\n    A_Male_03_Cough = "Characters/Common/Audios/Cough/A_Male_03_Cough_Cue"\n\n    A_Female_Cough = "Characters/Common/Audios/Cough/A_Female_Cough_Cu"\n\n    A_Male_01_Cry = "Characters/Common/Audios/Cry/A_Male_01_Cry_Cue"\n    A_Male_02_Cry = "Characters/Common/Audios/Cry/A_Male_02_Cry_Cue"\n    A_Male_03_Cry = "Characters/Common/Audios/Cry/A_Male_03_Cry_Cue"\n\n    A_Female_Cry = "Characters/Common/Audios/Cry/A_Female_Cry_Cue"\n\n    A_Male_01_Effort = "Characters/Common/Audios/Effort/A_Male_01_Effort_Cue"\n    A_Male_02_Effort = "Characters/Common/Audios/Effort/A_Male_02_Effort_Cue"\n    A_Male_03_Effort = "Characters/Common/Audios/Effort/A_Male_03_Effort_Cue"\n    A_Male_04_Effort = "Characters/Common/Audios/Effort/A_Male_04_Effort_Cue"\n    A_Male_05_Effort = "Characters/Common/Audios/Effort/A_Male_05_Effort_Cue"\n    A_Male_06_Effort = "Characters/Common/Audios/Effort/A_Male_06_Effort_Cue"\n    A_Male_07_Effort = "Characters/Common/Audios/Effort/A_Male_07_Effort_Cue"\n    A_Male_08_Effort = "Characters/Common/Audios/Effort/A_Male_08_Effort_Cue"\n\n    A_Female_01_Effort = "Characters/Common/Audios/Effort/A_Female_01_Effort_Cue"\n    A_Female_02_Effort = "Characters/Common/Audios/Effort/A_Female_02_Effort_Cue"\n    A_Female_03_Effort = "Characters/Common/Audios/Effort/A_Female_03_Effort_Cue"\n    A_Female_04_Effort = "Characters/Common/Audios/Effort/A_Female_04_Effort_Cue"\n    A_Female_05_Effort = "Characters/Common/Audios/Effort/A_Female_05_Effort_Cue"\n    A_Female_06_Effort = "Characters/Common/Audios/Effort/A_Female_06_Effort_Cue"\n    A_Female_07_Effort = "Characters/Common/Audios/Effort/A_Female_07_Effort_Cue"\n    A_Female_08_Effort = "Characters/Common/Audios/Effort/A_Female_08_Effort_Cue"\n\n    A_Male_Breath_Pant_Cue = "Characters/Common/Audios/Breath/A_Male_Breath_Pant_Cue"\n    A_Male_Breath_Quick_Cue = "Characters/Common/Audios/Breath/A_Male_Breath_Quick_Cue"\n    A_Male_Breath_Fast_Cue = "Characters/Common/Audios/Breath/A_Male_Breath_Fast_Cue"\n\n    A_VR_Click_01 = "Effects/VR/A_VR_Click_01"\n    A_VR_Click_02 = "Effects/VR/A_VR_Click_02"\n    A_VR_Click_03 = "Effects/VR/A_VR_Click_03"\n    A_VR_Close = "Effects/VR/A_VR_Close"\n    A_VR_Confirm = "Effects/VR/A_VR_Confirm"\n    A_VR_Grab = "Effects/VR/A_VR_Grab"\n    A_VR_Ungrab = "Effects/VR/A_VR_Ungrab"\n    A_VR_Negative = "Effects/VR/A_VR_Negative"\n    A_VR_Open = "Effects/VR/A_VR_Open"\n    A_VR_Teleport = "Effects/VR/A_VR_Teleport"\n\n    A_Vehicle_Brake = "Vehicles/Common/Sounds/A_Vehicle_Brake_Cue"\n    A_Vehicle_Horn_Bike_01 = "Vehicles/Common/Sounds/Horns/A_Vehicle_Horn_Bike_01"\n    A_Vehicle_Horn_Bike_02 = "Vehicles/Common/Sounds/Horns/A_Vehicle_Horn_Bike_02"\n    A_Vehicle_Horn_Bike_03 = "Vehicles/Common/Sounds/Horns/A_Vehicle_Horn_Bike_03"\n    A_Vehicle_Horn_Dixie = "Vehicles/Common/Sounds/Horns/A_Vehicle_Horn_Dixie"\n    A_Vehicle_Horn_Toyota = "Vehicles/Common/Sounds/Horns/A_Vehicle_Horn_Toyota"\n    A_Vehicle_Door = "Vehicles/Common/Sounds/A_Vehicle_Door_Cue"\n    A_Car_Engine_Start = "Vehicles/Common/Sounds/A_Car_Engine_Start_Cue"\n    A_Vehicle_Engine_01 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_01"\n    A_Vehicle_Engine_02 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_02"\n    A_Vehicle_Engine_03 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_03"\n    A_Vehicle_Engine_04 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_04"\n    A_Vehicle_Engine_05 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_05"\n    A_Vehicle_Engine_06 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_06"\n    A_Vehicle_Engine_07 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_07"\n    A_Vehicle_Engine_08 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_08"\n    A_Vehicle_Engine_09 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_09"\n    A_Vehicle_Engine_10 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_10"\n    A_Vehicle_Engine_11 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_11"\n    A_Vehicle_Engine_12 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_12"\n    A_Vehicle_Engine_13 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_13"\n    A_Vehicle_Engine_14 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_14"\n    A_Vehicle_Engine_15 = "Vehicles/Common/Sounds/Engine/A_Vehicle_Engine_15"\n\n    # Animation Assets\n    [assets.animations]\n    AM_Mannequin_Reload_Pistol = "Characters/Common/Animations/Weapons/AM_Mannequin_Reload_Pistol"\n    AM_Mannequin_Reload_Rifle = "Characters/Common/Animations/Weapons/AM_Mannequin_Reload_Rifle"\n    AM_Mannequin_Reload_Shotgun = "Characters/Common/Animations/Weapons/AM_Mannequin_Reload_Shotgun"\n    AM_Mannequin_Sight_Fire = "Characters/Common/Animations/Weapons/AM_Mannequin_Sight_Fire"\n    AM_Mannequin_Sight_Fire_Heavy = "Characters/Common/Animations/Weapons/AM_Mannequin_Sight_Fire_Heavy"\n\n    AM_Mannequin_Taunt_YouHere = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_YouHere"\n    AM_Mannequin_Taunt_Bow = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Bow"\n    AM_Mannequin_Taunt_ButtSlap_01 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_ButtSlap_01"\n    AM_Mannequin_Taunt_ButtSlap_02 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_ButtSlap_02"\n    AM_Mannequin_Taunt_CallMe = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_CallMe"\n    AM_Mannequin_Taunt_Chop = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Chop"\n    AM_Mannequin_Taunt_Clap = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Clap"\n    AM_Mannequin_Taunt_ComeAtMe = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_ComeAtMe"\n    AM_Mannequin_Taunt_CrossArms = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_CrossArms"\n    AM_Mannequin_Taunt_Crutch = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Crutch"\n    AM_Mannequin_Taunt_Dab = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Dab"\n    AM_Mannequin_Taunt_DustOff = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_DustOff"\n    AM_Mannequin_Taunt_EarCom = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_EarCom"\n    AM_Mannequin_Taunt_EyesOnYou = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_EyesOnYou"\n    AM_Mannequin_Taunt_FacePalm = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_FacePalm"\n    AM_Mannequin_Taunt_FingerGun = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_FingerGun"\n    AM_Mannequin_Taunt_FistCrush = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_FistCrush"\n    AM_Mannequin_Taunt_FistPump_01 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_FistPump_01"\n    AM_Mannequin_Taunt_FistPump_02 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_FistPump_02"\n    AM_Mannequin_Taunt_Flex_01 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Flex_01"\n    AM_Mannequin_Taunt_Flex_02 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Flex_02"\n    AM_Mannequin_Taunt_Flex_03 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Flex_03"\n    AM_Mannequin_Taunt_Halt = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Halt"\n    AM_Mannequin_Taunt_HandOnHips = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_HandOnHips"\n    AM_Mannequin_Taunt_HandPunch = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_HandPunch"\n    AM_Mannequin_Taunt_Heart = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Heart"\n    AM_Mannequin_Taunt_Jog = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Jog"\n    AM_Mannequin_Taunt_Jojo = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Jojo"\n    AM_Mannequin_Taunt_Knees = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Knees"\n    AM_Mannequin_Taunt_Kunfu = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Kunfu"\n    AM_Mannequin_Taunt_NeckSlit = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_NeckSlit"\n    AM_Mannequin_Taunt_OK = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_OK"\n    AM_Mannequin_Taunt_Point = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Point"\n    AM_Mannequin_Taunt_Ponder = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Ponder"\n    AM_Mannequin_Taunt_Praise = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Praise"\n    AM_Mannequin_Taunt_Salute_01 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Salute_01"\n    AM_Mannequin_Taunt_Salute_02 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Salute_02"\n    AM_Mannequin_Taunt_Savage = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Savage"\n    AM_Mannequin_Taunt_Shoosh = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Shoosh"\n    AM_Mannequin_Taunt_Shrug = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Shrug"\n    AM_Mannequin_Taunt_Streach = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Streach"\n    AM_Mannequin_Taunt_Sweat = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Sweat"\n    AM_Mannequin_Taunt_TheHeavins = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_TheHeavins"\n    AM_Mannequin_Taunt_ThumbsDown = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_ThumbsDown"\n    AM_Mannequin_Taunt_ThumbsOnEars = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_ThumbsOnEars"\n    AM_Mannequin_Taunt_ThumbsUp_01 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_ThumbsUp_01"\n    AM_Mannequin_Taunt_ThumbsUp_02 = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_ThumbsUp_02"\n    AM_Mannequin_Taunt_Victory = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Victory"\n    AM_Mannequin_Taunt_Watch = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Watch"\n    AM_Mannequin_Taunt_Wave = "Characters/Common/Animations/Taunts/AM_Mannequin_Taunt_Wave"\n    AM_Mannequin_Box = "Characters/Common/Animations/Poses/AM_Mannequin_Box"\n    AM_Mannequin_Barrel_01 = "Characters/Common/Animations/Poses/AM_Mannequin_Barrel_01"\n    AM_Mannequin_Barrel_02 = "Characters/Common/Animations/Poses/AM_Mannequin_Barrel_02"\n    AM_Mannequin_Equip = "Characters/Common/Animations/Actions/AM_Mannequin_Equip"\n    AM_Mannequin_Unequip = "Characters/Common/Animations/Actions/AM_Mannequin_Unequip"\n    AM_Mannequin_DoorOpen_01 = "Characters/Common/Animations/Actions/AM_Mannequin_DoorOpen_01"\n    AM_Mannequin_DoorOpen_02 = "Characters/Common/Animations/Actions/AM_Mannequin_DoorOpen_02"\n    AM_Mannequin_DoorOpen_03 = "Characters/Common/Animations/Actions/AM_Mannequin_DoorOpen_03"\n    AM_Mannequin_DoorOpen_04 = "Characters/Common/Animations/Actions/AM_Mannequin_DoorOpen_04"\n\n    # Particles Assets\n    [assets.particles]\n    P_Error = "Effects/Particles/P_Error"\n    P_Bullet_Trail = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Bullet_Trail_System"\n    P_Weapon_BarrelSmoke = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_BarrelSmoke_System"\n    P_Weapon_Shells_12Gauge = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_Shells_12Gauge_System"\n    P_Weapon_Shells_762x39 = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_Shells_762x39_System"\n    P_Weapon_Shells_9x18 = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_Shells_9x18_System"\n    P_Weapon_Shells_556x45 = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_Shells_556x45_System"\n    P_Weapon_Shells_545x39 = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_Shells_545x39_System"\n    P_Weapon_Shells_45ap = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_Shells_45ap_System"\n    P_Weapon_Shells_9mm = "Weapons/Common/Effects/ParticlesSystems/Weapons/P_Weapon_Shells_9mm_System"\n    P_Explosion = "Effects/Particles/P_Explosion"\n    P_Smoke = "Effects/Particles/P_Smoke"\n    P_Sparks = "Effects/Particles/P_Sparks"\n    P_Fire = "Effects/Particles/P_Fire"\n    P_Explosion_Dirt = "Weapons/Common/Effects/ParticlesSystems/Explosions/PS_Explosion_Dirt"\n    P_Explosion_Water = "Weapons/Common/Effects/ParticlesSystems/Explosions/PS_Explosion_Water"\n    P_Beam = "Effects/Particles/P_NanosBeam"\n    P_DirectionalBurst = "Effects/Particles/P_DirectionalBurst"\n    P_Fountain = "Effects/Particles/P_Fountain"\n    P_HangingParticulates = "Effects/Particles/P_HangingParticulates"\n    P_OmnidirectionalBurst = "Effects/Particles/P_OmnidirectionalBurst"\n    P_Ribbon = "Effects/Particles/P_Ribbon"\n')))}m.isMDXComponent=!0},7153:function(e,n){n.Z="data:image/jpeg;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6OWZhMTM4OWFkM2RlMTE2NWI3NDQyNTdmM2NmNmExMjJiZWZiODhmNDAxY2RlNmM0ZTE4YjNhOTI2OGNmZDBhMgpzaXplIDIyMjAwCg=="}}]);