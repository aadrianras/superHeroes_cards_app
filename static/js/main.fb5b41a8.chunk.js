(this["webpackJsonp07-heroes-app"]=this["webpackJsonp07-heroes-app"]||[]).push([[0],{35:function(e,r,a){},36:function(e,r,a){"use strict";a.r(r);var t=a(0),c=a(1),s=a(18),n=a.n(s),i=a(9),o=Object(c.createContext)(),l=a(3),h="[auth] login",p="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case h:return Object(l.a)(Object(l.a)({},r.payload),{},{logged:!0});case p:return{logged:!1};default:return e}},j=a(7),d=a(2),b=function(e){var r=e.history,a=Object(c.useContext)(o).dispatch,s=localStorage.getItem("lastPath")||"/";return Object(t.jsxs)("div",{className:"login_container",children:[Object(t.jsx)("h1",{children:"Iniciar sesi\xf3n"}),Object(t.jsx)("p",{children:"Haz click en login para iniciar tu sesi\xf3n"}),Object(t.jsx)("button",{onClick:function(){a({type:h,payload:{name:"Adrian"}}),r.replace(s)},children:"Login"})]})},m=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=function(){var e=Object(c.useState)({hero:{},show:!1}),r=Object(i.a)(e,2),a=r[0],t=r[1];return{popUp:a,handlePopUp:function(e){var r=e.id,a=e.show,c={hero:m.find((function(e){return e.id===r})),show:a};t(c)}}},v=function(e){var r=e.id,a=e.superhero,c=e.publisher,s=e.alter_ego,n=e.first_appearance,i=e.characters,o=e.handlePopUp,l="".concat("/superHeroes_cards_app","/assets/heroes/").concat(r,".jpg");return Object(t.jsxs)("div",{className:"heroes_card animate__animated animate__fadeIn",onClick:function(){return o({id:r,show:!0})},children:[Object(t.jsxs)("div",{className:"heroes_card_content",children:[Object(t.jsx)("div",{children:Object(t.jsx)("img",{src:l,className:"hero_card_img",alt:a})}),Object(t.jsxs)("div",{className:"heroes_card_text",children:[Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{children:"\xc1lter ego:"})," ",s]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{children:"Personajes:"})," ",i]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{children:"Primera aparici\xf3n:"})," ",n]}),Object(t.jsx)("p",{children:c})]})]}),Object(t.jsx)("h3",{children:a})]})},x=function(e){var r=e.id,a=e.superhero,c=e.publisher,s=e.alter_ego,n=e.first_appearance,i=e.characters,o=e.handlePopUp;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"overlay",onClick:function(){return o({id:"",show:!1})}}),Object(t.jsx)("div",{className:"heroes_card_popUp",style:{backgroundImage:"url(".concat("/superHeroes_cards_app","/assets/heroes/").concat(r,".jpg)")},children:Object(t.jsxs)("div",{className:"heroes_card_text_popUp",children:[Object(t.jsx)("h3",{children:a}),Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{children:"\xc1lter ego:"})," ",s]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{children:"Personajes:"})," ",i]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{children:"Primera aparici\xf3n:"})," ",n]}),Object(t.jsx)("p",{children:c})]})})]})},g=function(e){var r=function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Solo se permiten los publishers "DC Comics" \xf3 "Marvel Comics"');return m.filter((function(r){return r.publisher===e}))}(e.publisher),a=O(),c=a.popUp,s=a.handlePopUp;return Object(t.jsxs)("div",{className:"Heroes_container",children:[c.show&&Object(t.jsx)(x,Object(l.a)({handlePopUp:s},c.hero)),r.map((function(e){return Object(t.jsx)(v,Object(l.a)({handlePopUp:s},e),e.id)}))]})},f=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{className:"titulo_pag",children:"DC Heroes"}),Object(t.jsx)(g,{publisher:"DC Comics"})]})},_=function(){var e=Object(d.i)();return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Heroe"}),Object(t.jsx)("p",{children:"/superHeroes_cards_app"}),Object(t.jsx)("p",{children:JSON.stringify(e)})]})},C=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{className:"titulo_pag",children:"Marvel Heroes"}),Object(t.jsx)(g,{publisher:"Marvel Comics"})]})},y=a(20),S=a.n(y),k=a(13),M=function(e){var r=e.superhero,a=e.handleInputChange,c=e.handleSubmit;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h1",{children:"Busca a tu heroe"}),Object(t.jsxs)("form",{onSubmit:c,children:[Object(t.jsx)("input",{tabIndex:"1",type:"text",placeholder:"Buscar heroe...",name:"superhero",value:r,onChange:a}),Object(t.jsx)("button",{type:"submit",children:"Buscar"})]})]})},N=function(e){var r=e.history,a=O(),s=a.popUp,n=a.handlePopUp,o=Object(d.h)().search,h=S.a.parse(o).q,p=void 0===h?"":h,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(i.a)(r,2),t=a[0],s=a[1];return[t,function(e){var r=e.target;s(Object(l.a)(Object(l.a)({},t),{},Object(k.a)({},r.name,r.value)))},function(){return s(e)}]}({superhero:p}),j=Object(i.a)(u,3),b=j[0],g=j[1],f=j[2],_=b.superhero,C=Object(c.useState)({message:"Encontremos a tu heroe favorito",hero:{}}),y=Object(i.a)(C,2),N=y[0],D=y[1];Object(c.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;if(e.length<3)return r({message:"Minimo 3 letras para buscar al heroe",hero:{}});var a=m.find((function(r){return r.superhero.toLowerCase().includes(e.toLowerCase())}));if(!a)return r({message:"No existe un heroe con ese nombre",hero:{}});r({message:"",hero:a})}(p,D)}),[p]);return Object(t.jsxs)("div",{className:"busqueda",children:[Object(t.jsx)("div",{className:"busqueda_form",children:Object(t.jsx)(M,{superhero:_,handleInputChange:g,handleSubmit:function(e){e.preventDefault();var a=e.target.superhero.value;r.push("?q=".concat(a)),f()}})}),Object(t.jsxs)("div",{className:"busqueda_card",children:[s.show&&Object(t.jsx)(x,Object(l.a)({handlePopUp:n},s.hero)),N.hero.id?Object(t.jsx)(v,Object(l.a)({handlePopUp:n},N.hero),N.hero.id):Object(t.jsx)("p",{children:N.message})]})]})},D=function(){var e=Object(c.useContext)(o),r=e.user,a=e.dispatch,s=Object(d.g)();return Object(t.jsxs)("nav",{className:"navbar_top",children:[Object(t.jsx)(j.b,{id:"logo",className:"navbar_link",to:"/",children:"HEROES APP"}),Object(t.jsxs)("div",{className:"nav_container",children:[Object(t.jsx)(j.b,{activeClassName:"active",className:"navbar_link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(j.b,{activeClassName:"active",className:"navbar_link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(j.b,{activeClassName:"active",className:"navbar_link",exact:!0,to:"/search",children:"Buscador"})]}),Object(t.jsxs)("div",{className:"nav_logout",children:[Object(t.jsx)("p",{className:"navbar_link",children:r.name}),Object(t.jsx)("button",{className:"logout",onClick:function(){a({type:p}),s.replace("/login")},children:"Logout"})]})]})},w=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(D,{}),Object(t.jsxs)(d.d,{children:[Object(t.jsx)(d.b,{exact:!0,path:"/marvel",component:C}),Object(t.jsx)(d.b,{exact:!0,path:"/dc",component:f}),Object(t.jsx)(d.b,{exact:!0,path:"/hero/:heroeId",component:_}),Object(t.jsx)(d.b,{exact:!0,path:"/search",component:N}),Object(t.jsx)(d.a,{to:"/marvel"})]})]})},P=a(14),A=function(e){var r=e.isAuthenticate,a=e.component,c=Object(P.a)(e,["isAuthenticate","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(t.jsx)(d.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return r?Object(t.jsx)(a,Object(l.a)({},e)):Object(t.jsx)(d.a,{to:"/login"})}}))},B=function(e){var r=e.isAuthenticate,a=e.component,c=Object(P.a)(e,["isAuthenticate","component"]);return Object(t.jsx)(d.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return r?Object(t.jsx)(d.a,{to:"/"}):Object(t.jsx)(a,Object(l.a)({},e))}}))},H=function(){var e=Object(c.useContext)(o).user.logged;return Object(t.jsx)("div",{children:Object(t.jsx)(j.a,{children:Object(t.jsxs)(d.d,{children:[Object(t.jsx)(B,{exact:!0,path:"/login",component:b,isAuthenticate:e}),Object(t.jsx)(A,{path:"/",component:w,isAuthenticate:e})]})})})},J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(c.useReducer)(u,{},J),r=Object(i.a)(e,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(t.jsx)(o.Provider,{value:{user:a,dispatch:s},children:Object(t.jsx)(H,{})})};a(35);n.a.render(Object(t.jsx)(I,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.fb5b41a8.chunk.js.map