(function(t){function e(e){for(var n,a,r=e[0],i=e[1],u=e[2],l=0,m=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var r=o[a];0!==c[r]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},c={app:0},s=[];function r(t){return i.p+"js/"+({chunckHomeView:"chunckHomeView",chunckProyectoView:"chunckProyectoView",chunckProyectosView:"chunckProyectosView",chunkNotFoundView:"chunkNotFoundView"}[t]||t)+"."+{chunckHomeView:"39f35b10",chunckProyectoView:"3c9a66e2",chunckProyectosView:"0c635e1d",chunkNotFoundView:"18825045"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o={chunckHomeView:1,chunckProyectoView:1,chunckProyectosView:1,chunkNotFoundView:1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise((function(e,o){for(var n="css/"+({chunckHomeView:"chunckHomeView",chunckProyectoView:"chunckProyectoView",chunckProyectosView:"chunckProyectosView",chunkNotFoundView:"chunkNotFoundView"}[t]||t)+"."+{chunckHomeView:"ca751e15",chunckProyectoView:"22576d59",chunckProyectosView:"32c44fa3",chunkNotFoundView:"e4ac6e0b"}[t]+".css",c=i.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return e()}var m=document.getElementsByTagName("style");for(r=0;r<m.length;r++){u=m[r],l=u.getAttribute("data-href");if(l===n||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||c,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],p.parentNode.removeChild(p),o(s)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[t]=0})));var n=c[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,o){n=c[t]=[e,o]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(t);var m=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var o=c[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,o[1](m)}c[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portafolio/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var p=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"019d":function(t,e,o){"use strict";o("786f")},1228:function(t,e,o){"use strict";o("f4f0")},"259c":function(t,e,o){"use strict";o("7390")},3387:function(t,e,o){"use strict";o("d426")},4041:function(t,e,o){"use strict";o("41a6")},"41a6":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-vue",attrs:{id:"app"}},[o("router-view",{staticClass:"view"}),o("FooterComp",{staticClass:"footer"}),o("NavbarPC",{staticClass:"pc"}),o("NavbarMovil",{staticClass:"movil"}),o("transition",{attrs:{name:"contacto",mode:"in-out"}},[t.showContacto?o("ContactoComp",{staticClass:"contacto"}):t._e()],1),o("transition",{attrs:{name:"transicion",mode:"in-out"}},[t.showTransicion?o("TransicionComp",{staticClass:"transicion"}):t._e()],1),t.showSplashScreen?o("SplashScreenComp",{staticClass:"splashscreen"}):t._e()],1)},c=[],s=o("5530"),r=o("2f62"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbarpc-comp"},[o("NavbarComp",{staticClass:"pc"})],1)},u=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar-comp"},[o("router-link",{staticClass:"link",attrs:{to:{path:"/",hash:"#Inicio"}}},[t._v("Inicio")]),o("router-link",{staticClass:"link",attrs:{to:{path:"/",hash:"#Proyectos"}}},[t._v("Proyectos")]),o("router-link",{staticClass:"link",attrs:{to:{path:"/",hash:"#Servicios"}}},[t._v("Servicios")]),o("router-link",{staticClass:"link",attrs:{to:{path:"/",hash:"#Tecnologias"}}},[t._v("Tecnologías")]),o("router-link",{staticClass:"link",attrs:{to:{path:"/",hash:"#SobreMi"}}},[t._v("Sobre mi")]),o("a",{staticClass:"link",on:{click:t.mth_Contacto}},[t._v("Contacto")])],1)},m=[],p=new n["a"],h={name:"navbar-comp",props:[],mounted:function(){},data:function(){return{}},methods:{mth_Contacto:function(){p.$emit("contacto-toggle")}},computed:{}},d=h,f=(o("efcb"),o("2877")),v=Object(f["a"])(d,l,m,!1,null,"3de8097c",null),_=v.exports,y={components:{NavbarComp:_},name:"navbarpc-comp",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},g=y,b=(o("b017"),o("ac94"),Object(f["a"])(g,i,u,!1,null,"1b1ad1d2",null)),w=b.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbarmovil-comp"},[o("transition",{attrs:{name:"navbar-movil",mode:"in-out"}},[t.isActive?t._e():o("NavbarComp",{staticClass:"movil"})],1),o("button",{staticClass:"menu",attrs:{title:t.isActive?"Abrir":"Cerrar"},on:{click:t.mth_ToggleMenu}},[o("i",{class:"fas fa-"+(t.isActive?t.iconMenu:t.iconClose)})])],1)},P=[],k={components:{NavbarComp:_},name:"navbarmovil-comp",props:[],mounted:function(){},data:function(){return{isActive:!0,iconMenu:"bars",iconClose:"times"}},methods:{mth_ToggleMenu:function(){this.isActive=!this.isActive}},computed:{}},x=k,V=(o("3387"),o("019d"),Object(f["a"])(x,C,P,!1,null,"6064fa67",null)),j=V.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contacto-comp",on:{click:function(e){return e.target!==e.currentTarget?null:t.mth_ContactoToggle(e)}}},[o("form",{staticClass:"form-contacto",on:{submit:function(e){return e.preventDefault(),t.mth_EnviarMensaje(e)}}},[o("h4",{staticClass:"title"},[t._v("Hola, ¿qué tal si me mandas un mensaje? 😉")]),o("div",{staticClass:"input-label"},[o("span",[t._v("Nombre")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"required"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",{staticClass:"input-label"},[o("span",[t._v("eMail")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"input-label"},[o("span",[t._v("Mensaje")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mensaje,expression:"mensaje"}],attrs:{placeholder:"Hey que onda ✌...",required:"required"},domProps:{value:t.mensaje},on:{input:function(e){e.target.composing||(t.mensaje=e.target.value)}}})]),o("div",{staticClass:"buttons"},[o("input",{staticClass:"enviar",class:t.enviando?"disable":"",attrs:{type:"submit"},domProps:{value:t.enviando?"Enviando...":"Enviar"}}),o("button",{staticClass:"cancelar",on:{click:t.mth_ContactoToggle}},[t._v("Cancelar")])])])])},q=[],T=(o("d3b7"),o("b0c0"),{name:"contacto-comp",props:[],mounted:function(){this.documentTitle=document.title,document.title="Contacto | @ovatlh"},beforeDestroy:function(){document.title=this.documentTitle},data:function(){return{documentTitle:"",name:"",email:"",mensaje:"",destino:"https://formspree.io/f/mnqlanvp",enviando:!1}},methods:{mth_ContactoToggle:function(){p.$emit("contacto-toggle")},mth_EnviarMensaje:function(){var t=this;this.enviando=!0,n["a"].axios.post(this.destino,{name:this.name,from:this.email,_subject:"Portafolio | ".concat(this.name," | GitHubPages"),message:this.mensaje}).then((function(e){t.name="",t.email="",t.mensaje="",t.mth_Ok(),console.log(e.data)})).catch((function(t){alert("Ups! ¿Parece que paso algo malo? \nNo olvides intentar de nuevo!"),console.log(t.data)})).finally((function(){t.enviando=!1}))},mth_Ok:function(){alert("Listo! \nPronto me pondre en contacto contigo! :)")}},computed:{}}),H=T,N=(o("4041"),Object(f["a"])(H,S,q,!1,null,"54d98871",null)),O=N.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"transicion-comp"})},M=[],L={name:"transicion-comp",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},$=L,A=(o("1228"),Object(f["a"])($,E,M,!1,null,"4570df40",null)),F=A.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"splashscreen-comp"},[o("svg",{attrs:{id:"ovatlh",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1187.59 262.93"}},[o("path",{attrs:{id:"h",d:"M1173,63.26q14.55,17.35,14.55,47v87.28h-59V117.72q0-10.68-5.74-17t-15.35-6.27q-9.88,0-15.48,6.27t-5.61,17v79.81h-59.26V0h59.26V69.94A53.53,53.53,0,0,1,1105,52.59q11.63-6.68,27.63-6.68Q1158.49,45.91,1173,63.26Z"}}),o("path",{attrs:{id:"l",d:"M1000.47,0V197.53H941.21V0Z"}}),o("path",{attrs:{id:"t",d:"M918.52,147.08v50.45H896.1q-61.94,0-61.93-61.66V96.37H815.49V47h18.68V10.68h59.26V47H918V96.37H893.43v40.57c0,3.56.84,6.14,2.54,7.74s4.49,2.4,8.41,2.4Z"}}),o("path",{attrs:{id:"a",d:"M643.45,81q8.13-17.49,22.29-26.7a57,57,0,0,1,31.76-9.21q14.68,0,25.36,6a40.64,40.64,0,0,1,16.28,16.42V47h59V197.53h-59V177a40.7,40.7,0,0,1-16.28,16.42q-10.68,6-25.36,6a57,57,0,0,1-31.76-9.21Q651.58,181,643.45,163.5t-8.14-41.24Q635.31,98.5,643.45,81Z"}}),o("path",{attrs:{id:"v",d:"M540.54,141.21l24-94.23h63L577.38,197.53H503.44L453.26,47h63Z"}}),o("path",{attrs:{id:"at",d:"M209,26.69q24.83,12.56,38.31,35.11t13.48,51.65q0,24-8.54,43.38a70.24,70.24,0,0,1-25.1,30.56q-16.54,11.22-39.77,11.21-14.69,0-25-5.34a31.83,31.83,0,0,1-14.81-15.21,43.67,43.67,0,0,1-17.75,15.88,56.23,56.23,0,0,1-25.23,5.47q-19.48,0-30.43-11.21t-10.95-31.5a87,87,0,0,1,7.48-35.77A68.54,68.54,0,0,1,91.56,93.83a47.8,47.8,0,0,1,29.9-10.28q10.94,0,18.28,4.54a23,23,0,0,1,10,12.28l2.67-15.48h45.91l-10.41,59a29.87,29.87,0,0,0-.8,6.67q0,10.15,8.55,10.15,10.67,0,16.15-12.95t5.47-32.7q0-18.42-8.68-32.43a58,58,0,0,0-24.56-21.76q-15.88-7.74-37.23-7.74A103.46,103.46,0,0,0,42.71,157q0,30.43,17.62,48.32t48.31,17.88q27.24,0,49.65-9.61l10.15,37.11Q140.68,262.93,106,262.93q-31.77,0-55.79-12.54a89.13,89.13,0,0,1-37.1-35.64Q0,191.67,0,161.23,0,118.8,20,85.29A140.69,140.69,0,0,1,74.74,33q34.71-18.82,77.15-18.82Q184.19,14.15,209,26.69Z"}}),o("path",{attrs:{id:"o",d:"M325.13,190.06a68.86,68.86,0,0,1-28.43-26.83q-10.27-17.47-10.28-41t10.28-41a68.9,68.9,0,0,1,28.43-26.82q18.15-9.35,40.84-9.35t40.84,9.35a68.9,68.9,0,0,1,28.43,26.82q10.27,17.49,10.28,41t-10.28,41a68.86,68.86,0,0,1-28.43,26.83Q388.66,199.4,366,199.4T325.13,190.06Z"}})])])},R=[],Q={name:"splashscreen-comp",props:[],mounted:function(){},data:function(){return{}},methods:{mth_SplashScreen_Animations:function(){gsap.set("#ovatlh",{scale:0}),gsap.set("#o",{x:250}),gsap.set("#v",{x:75,opacity:0}),gsap.set("#a",{x:-105,opacity:0}),gsap.set("#t",{x:-245,opacity:0}),gsap.set("#l",{x:-350,opacity:0}),gsap.set("#h",{x:-450,opacity:0}),gsap.set("#at",{x:470,opacity:0});var t=gsap.timeline();t.add(gsap.to("#ovatlh",{delay:2,duration:1,scale:1,ease:"bounce.out"})),gsap.to("#o",{delay:3,duration:1,x:0,ease:"expo.out",opacity:1}),gsap.to("#v",{delay:3,duration:1,x:0,ease:"expo.out",opacity:1}),gsap.to("#a",{delay:3,duration:1,x:0,ease:"expo.out",opacity:1}),gsap.to("#t",{delay:3,duration:1,x:0,ease:"expo.out",opacity:1}),gsap.to("#l",{delay:3,duration:1,x:0,ease:"expo.out",opacity:1}),gsap.to("#h",{delay:3,duration:1,x:0,ease:"expo.out",opacity:1}),gsap.to("#at",{delay:3,duration:1,x:0,ease:"expo.out",opacity:1}),gsap.to("#ovatlh",{delay:4,duration:1.5,ease:"power3.out",scale:30}),gsap.to(".splashscreen-comp",{delay:4.1,duration:1,ease:"power3.out",opacity:0}),setTimeout((function(){p.$emit("splashscreen-off")}),6e3)}},computed:{},created:function(){var t=this;p.$on("splashscreen-start",(function(){t.mth_SplashScreen_Animations()}))}},Z=Q,B=(o("8e40"),Object(f["a"])(Z,D,R,!1,null,"5f34261a",null)),I=B.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"footer-comp"},[t._v(" Creado con 💖 por "),o("a",{staticClass:"repo",attrs:{href:"https://github.com/ovatlh/vuejs2-ovatlh-portafolio-v02",target:"_blank",title:"Github repo: portafolio"}},[t._v("Tavo López Hernández")])])}],J={name:"footer-comp",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},U=J,K=(o("b471"),Object(f["a"])(U,z,G,!1,null,"7daf0ef2",null)),W=K.exports,X={components:{FooterComp:W,NavbarPC:w,NavbarMovil:j,ContactoComp:O,TransicionComp:F,SplashScreenComp:I},name:"app-vue",props:[],mounted:function(){this.mth_Load_HomeProyectos(),this.mth_Load_ResumenProyectos(),this.mth_Load_FullProyectos(),this.mth_SplashScreen()},data:function(){return{showContacto:!1,showTransicion:!1,showSplashScreen:!0}},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])({mth_Load_HomeProyectos:"act_Load_HomeProyectos",mth_Load_ResumenProyectos:"act_Load_ResumenProyectos",mth_Load_FullProyectos:"act_Load_FullProyectos"})),{},{mth_SplashScreen:function(){p.$emit("splashscreen-start")}}),computed:{},created:function(){var t=this;p.$on("contacto-toggle",(function(){t.showContacto=!t.showContacto})),p.$on("transicion-on",(function(){t.showTransicion=!0})),p.$on("transicion-off",(function(){t.showTransicion=!1})),p.$on("splashscreen-off",(function(){t.showSplashScreen=!1}))}},Y=X,tt=(o("259c"),o("8ed4"),Object(f["a"])(Y,a,c,!1,null,"f99c5d22",null)),et=tt.exports,ot=(o("3ca3"),o("ddb0"),o("8c4f"));n["a"].use(ot["a"]);var nt=[{path:"/home",alias:"/",name:"Home",component:function(){return o.e("chunckHomeView").then(o.bind(null,"a5a5"))}},{path:"/proyectos",name:"Proyectos",component:function(){return o.e("chunckProyectosView").then(o.bind(null,"4d6d"))}},{path:"/proyecto/:id",name:"Proyecto",component:function(){return o.e("chunckProyectoView").then(o.bind(null,"7cfc"))}},{path:"*",name:"NotFound",component:function(){return o.e("chunkNotFoundView").then(o.bind(null,"dfe6"))}}],at=new ot["a"]({scrollBehavior:function(t){return t.hash?{selector:t.hash,behavior:"smooth"}:{x:0,y:0}},routes:nt});at.beforeResolve((function(t,e,o){"/"!==e.path&&"/home"!==e.path||"/"!==t.path&&"/home"!==t.path?(setTimeout((function(){o()}),200),p.$emit("transicion-on")):o()})),at.afterEach((function(){setTimeout((function(){p.$emit("transicion-off")}),200)}));var ct=at,st={state:{home_proyectos:[]},mutations:{mut_Save_HomeProyectos:function(t,e){t.home_proyectos=e}},actions:{act_Load_HomeProyectos:function(t){var e="https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/info_json/home_proyectos.json";n["a"].axios.get(e).then((function(e){t.commit("mut_Save_HomeProyectos",e.data)})).catch((function(t){console.error("Data: error",t)}))}},getters:{get_HomeProyectos:function(t){return t.home_proyectos}}},rt={state:{resumen_proyectos:[]},mutations:{mut_Save_ResumenProyectos:function(t,e){t.resumen_proyectos=e}},actions:{act_Load_ResumenProyectos:function(t){var e="https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/info_json/resumen_proyectos.json";n["a"].axios.get(e).then((function(e){t.commit("mut_Save_ResumenProyectos",e.data)})).catch((function(t){console.error("Data: error",t)}))}},getters:{get_ResumenProyectos:function(t){return t.resumen_proyectos}}},it=(o("7db0"),{state:{full_proyectos:[]},mutations:{mut_Save_FullProyectos:function(t,e){t.full_proyectos=e}},actions:{act_Load_FullProyectos:function(t){var e="https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/info_json/full_proyectos.json";n["a"].axios.get(e).then((function(e){t.commit("mut_Save_FullProyectos",e.data)})).catch((function(t){console.error("Data: error",t)}))}},getters:{get_FullProyectos:function(t){return t.full_proyectos},get_ProyectoByID:function(t){return function(e){return t.full_proyectos.find((function(t){return t.id===e}))}}}});n["a"].use(r["a"]);var ut=new r["a"].Store({modules:{module_home_proyectos:st,module_resumen_proyectos:rt,module_full_proyectos:it},state:{},mutations:{},actions:{}}),lt=o("d0bc"),mt=o("bc3a"),pt=o.n(mt),ht=o("2106"),dt=o.n(ht);n["a"].use(lt["a"]),n["a"].use(dt.a,pt.a),n["a"].config.productionTip=!1,new n["a"]({router:ct,store:ut,render:function(t){return t(et)}}).$mount("#app")},5789:function(t,e,o){},7390:function(t,e,o){},"786f":function(t,e,o){},8443:function(t,e,o){},"8a31":function(t,e,o){},"8e40":function(t,e,o){"use strict";o("c613")},"8ed4":function(t,e,o){"use strict";o("d327")},ac94:function(t,e,o){"use strict";o("8a31")},b017:function(t,e,o){"use strict";o("8443")},b471:function(t,e,o){"use strict";o("e9ea")},c613:function(t,e,o){},d327:function(t,e,o){},d426:function(t,e,o){},e9ea:function(t,e,o){},efcb:function(t,e,o){"use strict";o("5789")},f4f0:function(t,e,o){}});
//# sourceMappingURL=app.948ce791.js.map