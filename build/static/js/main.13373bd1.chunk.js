(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(5),i=c.n(n),o=c(2),r=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return[c=c?1:0,function(){s(!c)}]},l=function(){var e=!((new Date).getHours()>=18),t=Object(a.useState)(e),c=Object(o.a)(t,2),s=c[0],n=c[1];return[s,function(){n(!s)}]},j=[{about:"About",projects:"Projects",techstack:"Techstack",contact:"Contact"},{about:"Acerca de",projects:"Projectos",techstack:"Tecnolog\xedas",contact:"Contacto"}],m=[{title:"Hello there.",content:"I'm Andr\xe9s, from Bogot\xe1 Colombia. Software Developer & Electronic Engineer, passionate about technology and computer science"},{title:"Hola!",content:"Soy Andr\xe9s, de Bogot\xe1 Colombia. Desarrollador de Software e Ingeniero electr\xf3nico, apasionado por la tecnolog\xeda y el computer science"}],b=[{title:"Apps I've Built",content:"Take a look at my favourite Projects and Apps",seemore:"See more"},{title:"Proyectos",content:"Echa un vistazo a mis proyectos favoritos",seemore:"Ver m\xe1s"}],h=[[{title:"DevConf",subtitle:"CRUD Badge management for Developers conference",link:"https://github.com/AndresNunezG/BadgesSystem",img:"https://i.imgur.com/Mjbg5wG.png",imgAlt:"DevConf List",techs:"ReactJS React Router Bootstrap"},{title:"VideoTube",subtitle:"Video platform simulator with the Rick & Morty API",link:"https://github.com/AndresNunezG/VideoTube",img:"https://i.imgur.com/y9Moy9l.png",imgAlt:"VideoTube Browser",techs:"ReactJS  Webpack  Babel  API"},{title:"BudgetApp",subtitle:"Desktop App to manage an Budget throught trasnferences",link:"https://github.com/AndresNunezG/VideoTube",img:"https://i.imgur.com/IMYkHm8.png",imgAlt:"BudgetApp Desktop",techs:"Python  Tkinter"}],[{title:"DevConf",subtitle:"Aplicaci\xf3n CRUD de insignias para conferencia IT",link:"https://github.com/AndresNunezG/BadgesSystem",img:"https://i.imgur.com/1KOKuYh.png",imgAlt:"DevConf List",techs:"ReactJS  React  Router  Bootstrap"},{title:"VideoTube",subtitle:"Clon de plataforma streaming mediante la API de Rick y Morty",link:"https://github.com/AndresNunezG/VideoTube",img:"https://i.imgur.com/Qhq7aYE.png",imgAlt:"VideoTube Browser",techs:"ReactJS  Webpack  Babel  API"},{title:"BudgetApp",subtitle:"App de escritorio para manejar un presupuesto mediante transferencias",link:"https://github.com/AndresNunezG/VideoTube",img:"https://i.imgur.com/IMYkHm8.png",imgAlt:"BudgetApp Desktop",techs:"Python  Tkinter"}]],u=[{title:"Techstack",content:"These are the main techs that i use for my apps and projects"},{title:"Tecnolog\xedas",content:"Estas son las principales tecnolog\xedas que uso para mis aplicaciones y proyectos"}],d=[{name:"Javascript",iconClass:"fab fa-js"},{name:"React",iconClass:"fab fa-react"},{name:"Python",iconClass:"fab fa-python"},{name:"MySQL",iconClass:"fas fa-database"},{name:"Git",iconClass:"fab fa-git-alt"},{name:"FastAPI",iconClass:"fas fa-server"}],g=[{title:"Contact me",subtitle:"If you like my work and would like to contact me for collaborations, feel free of leave me an email",warning:"I'm not going to share your information or spam you",name:"Name",email:"Email",message:"Message",submit:"Submit",messageError:"Whoops, make sure all the fileds are complete",messageSent:"Thanks! I'll answer you soon"},{title:"Contacto",subtitle:"D\xe9jame un email si te gusta mi trabajo y est\xe1s interesado en colaborar conmigo.",warning:"No compartir\xe9 tu informaci\xf3n ni te enviar\xe9 correo basura",name:"Nombre",email:"Correo",message:"Mensaje",submit:"Enviar",messageError:"Ops! Aseg\xfarate de completar todos los campos",messageSent:"Gracias por tu mensaje, responder\xe9 en breve"}],p=[{rights:"Andr\xe9s Camilo N\xfa\xf1ez Garz\xf3n | 2021"},{rights:"Andr\xe9s Camilo N\xfa\xf1ez Garz\xf3n | 2021"}],O=c(3),f=(c(11),c(1));function x(e){var t=j[e.language],c=Object(a.useState)(!1),s=Object(o.a)(c,2),n=s[0],i=s[1];return Object(f.jsxs)("header",{className:"Navbar__container",children:[Object(f.jsxs)("div",{className:"Navbar__name",children:[Object(f.jsx)("h1",{className:"Navbar__firstname",children:"Andr\xe9s\xa0"}),Object(f.jsx)("h1",{className:"Navbar__lastname",children:"N\xfa\xf1ez"})]}),Object(f.jsxs)("div",{className:"Navbar",children:[Object(f.jsxs)("div",{className:"Navbar__left",children:[Object(f.jsx)("a",{href:"#about",children:t.about}),Object(f.jsx)("a",{href:"#projects",children:t.projects}),Object(f.jsx)("a",{href:"#techstack",children:t.techstack}),Object(f.jsx)("a",{href:"#contact",children:t.contact})]}),Object(f.jsxs)("div",{className:"Navbar__right",children:[Object(f.jsx)("button",{onClick:e.onClickLeng,className:"Leng__button",type:"button",children:Object(f.jsx)("h3",{children:e.language?"EN":"ES"})}),Object(f.jsx)("button",{onClick:e.onClickTheme,className:"Theme__button",type:"button",children:e.theme?Object(f.jsx)(O.d,{className:"Icon__theme"}):Object(f.jsx)(O.g,{className:"Icon__theme"})})]}),Object(f.jsxs)("div",{className:"MobileMenu__container",children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"button",className:"Icon__MobileMenu",onClick:function(){var e=document.getElementById("MobileMenu");"flex"===e.style.display?(e.style.display="none",i(!1)):(e.style.display="flex",i(!0))},children:n?Object(f.jsx)(O.h,{}):Object(f.jsx)(O.c,{})})}),Object(f.jsx)("div",{id:"MobileMenu",className:"MobileMenu__ddList",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#about",children:t.about})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#projects",children:t.projects})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#techstack",children:t.techstack})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#contact",children:t.contact})})]})})]})]})]})}var _=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=Object(a.useState)(""),n=Object(o.a)(s,2),i=n[0],r=n[1],l=Object(a.useState)(0),j=Object(o.a)(l,2),m=j[0],b=j[1];return Object(a.useEffect)((function(){setTimeout((function(){m<e.length&&(b((function(e){return e+1})),r(i+e.charAt(m)))}),t)}),[i]),Object(a.useEffect)((function(){r(""),b(0)}),[c]),i},N=c.p+"static/media/AboutDeveloperLight.6afb84d6.svg",v=c.p+"static/media/AboutDeveloperDark.a3a11794.svg";c(13);function k(e){var t=m[e.language],c=_(t.title,170,e.language);return Object(f.jsx)("section",{id:"about",children:Object(f.jsxs)("div",{className:"About__container",children:[Object(f.jsxs)("div",{className:"About__text",children:[Object(f.jsx)("div",{className:"AboutTitle__container",children:Object(f.jsx)("h1",{className:"About__title",children:c})}),Object(f.jsx)("p",{className:"About__content",children:t.content})]}),Object(f.jsx)("div",{className:"About__image",children:Object(f.jsx)("img",{src:e.theme?N:v,alt:"illustration developer"})})]})})}c(14);function y(e){var t=b[e.language],c=h[e.language];return Object(f.jsxs)("section",{id:"projects",children:[Object(f.jsxs)("div",{className:"Projects__title-container",children:[Object(f.jsx)(O.a,{className:"Icon__projects"}),Object(f.jsx)("h1",{className:"Projects__title",children:t.title}),Object(f.jsx)("p",{className:"Projects__subtitle",children:t.content})]}),Object(f.jsx)("div",{className:"Projects__list-container",children:c.map((function(e){return Object(f.jsxs)("div",{className:"ProjectItem__container",children:[Object(f.jsx)("div",{className:"ProjectItem__image",children:Object(f.jsx)("img",{src:e.img,alt:e.imgAlt,className:"ItemImage"})}),Object(f.jsxs)("div",{className:"ProjectText__container",children:[Object(f.jsxs)("div",{className:"ProjectItem__title",children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsx)("div",{className:"ProjectItem__techs",children:e.techs})]}),Object(f.jsxs)("div",{className:"ProjectItem__content",children:[Object(f.jsx)("p",{children:e.subtitle}),Object(f.jsxs)("div",{className:"SeeMore__container",children:[Object(f.jsx)("a",{href:e.link,children:t.seemore}),Object(f.jsx)(O.e,{className:"Icon__semore"})]})]})]})]},e.title)}))})]})}c(15);function A(e){var t=u[e.language],c=d;return Object(f.jsxs)("section",{id:"techstack",children:[Object(f.jsxs)("div",{className:"Techstack__header",children:[Object(f.jsx)(O.b,{className:"Icon__techstack"}),Object(f.jsx)("h1",{className:"Techstack__title",children:t.title}),Object(f.jsx)("p",{className:"Techstack__subtitle",children:t.content})]}),Object(f.jsx)("div",{className:"Techstack__list",children:c.map((function(e){return Object(f.jsx)("div",{className:"TechstackItem__container",children:Object(f.jsxs)("div",{className:"TechItem",children:[Object(f.jsx)("i",{className:e.iconClass}),Object(f.jsx)("h3",{children:e.name})]})},e.name)}))})]})}var C=c(6);c(16);function I(e){var t=g[e.language];return Object(f.jsxs)("section",{id:"contact",children:[Object(f.jsxs)("div",{className:"ContactText__container",children:[Object(f.jsx)("h1",{className:"ContactText__title",children:t.title}),Object(f.jsx)("p",{className:"ContactText__subtitle",children:t.subtitle}),Object(f.jsxs)("div",{className:"Warning__container",children:[Object(f.jsx)(O.f,{className:"Icon__warning"}),Object(f.jsxs)("p",{className:"ContactText__warning",children:["\xa0",t.warning]})]})]}),Object(f.jsx)("div",{className:"ContactForm__container",children:Object(f.jsxs)("form",{id:"EmailJS",className:"ContactForm",autoComplete:"off",children:[Object(f.jsx)("input",{className:"InputForm",name:"name",type:"text",autoComplete:"off",placeholder:t.name}),Object(f.jsx)("input",{className:"InputForm",name:"email",type:"email",autoComplete:"off",placeholder:t.email}),Object(f.jsx)("textarea",{className:"InputForm MessageBox",name:"message",type:"text",autoComplete:"off",maxLength:"1000",placeholder:t.message}),Object(f.jsx)("button",{className:"SubmitButton",type:"button",onClick:function(e){e.preventDefault(),C.a.sendForm("service_mfzvvr1","template_nyrqewl","#EmailJS","user_W2UueZCBcwEXPfVQrHSV0").then((function(e){return console.log(e.text)})).catch((function(e){return console.log(e)}))},children:t.submit})]})})]})}c(17);function T(e){var t=p[e.language];return Object(f.jsx)("section",{id:"Footer",children:Object(f.jsxs)("div",{className:"Footer__container",children:[Object(f.jsxs)("div",{className:"Footer__left",children:[Object(f.jsx)("p",{children:t.rights}),Object(f.jsx)("a",{href:"https://storyset.com/work",target:"_blank",rel:"noreferrer",children:"Work illustrations by Storyset"}),Object(f.jsxs)("p",{children:["Icons by \xa0",Object(f.jsx)("a",{href:"https://fontawesome.com/",target:"_blank",rel:"noreferrer",children:"FontAwesome"}),"\xa0and\xa0",Object(f.jsx)("a",{href:"https://heroicons.com/",target:"_blank",rel:"noreferrer",children:"HeroIcons"})]})]}),Object(f.jsxs)("div",{className:"Footer__right",children:[Object(f.jsx)("a",{href:"https://github.com/AndresNunezG",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("i",{className:"fab fa-github"})}),Object(f.jsx)("a",{href:"https://www.linkedin.com/in/andresnunezg/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("i",{className:"fab fa-linkedin"})})]})]})})}function S(){var e=r(),t=Object(o.a)(e,2),c=t[0],a=t[1],s=l(),n=Object(o.a)(s,2),i=n[0],j=n[1];return Object(f.jsxs)("main",{className:i?"light":"dark",children:[Object(f.jsx)(x,{theme:i,language:c,onClickLeng:a,onClickTheme:j}),Object(f.jsx)(k,{language:c,theme:i}),Object(f.jsx)(y,{language:c}),Object(f.jsx)(A,{language:c}),Object(f.jsx)(I,{language:c}),Object(f.jsx)(T,{language:c})]})}c(18);var w=function(){return Object(f.jsx)(S,{})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("app"))}],[[19,1,2]]]);
//# sourceMappingURL=main.13373bd1.chunk.js.map