(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunckProyectosView"],{"3c56":function(t,e,c){},"4d6d":function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"proyectos-view"},[c("div",{staticClass:"content"},[c("h1",{staticClass:"title"},[t._v("Proyectos")]),t.cmp_ShowResumenProyectos?c("div",{staticClass:"list"},t._l(t.cmp_ResumenProyectos,(function(t,e){return c("ProyectoComp",{key:e,staticClass:"item",attrs:{id:t.id,img:t.img,title:t.title,desc:t.desc}})})),1):t._e()])])},o=[],n=c("5530"),i=c("2f62"),r=c("4e48"),u={components:{ProyectoComp:r["a"]},name:"proyectos-view",props:[],mounted:function(){this.mth_Titulo()},data:function(){return{}},methods:{mth_Titulo:function(){document.title="Proyectos | @ovatlh"}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])({cmp_ResumenProyectos:"get_ResumenProyectos"})),{},{cmp_ShowResumenProyectos:function(){return this.cmp_ResumenProyectos.length>0}})},a=u,l=(c("f173"),c("2877")),m=Object(l["a"])(a,s,o,!1,null,"20418296",null);e["default"]=m.exports},"4e48":function(t,e,c){"use strict";var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("router-link",{staticClass:"proyecto-comp",attrs:{to:{path:"proyecto/"+t.id},title:t.title}},[c("img",{staticClass:"bg",attrs:{src:t.img,alt:"proyecto"}}),c("h3",{staticClass:"title"},[t._v(t._s(t.title))]),c("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])},o=[],n={name:"proyecto-comp",props:["id","img","title","desc"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},i=n,r=(c("ee18"),c("2877")),u=Object(r["a"])(i,s,o,!1,null,"4458e5c3",null);e["a"]=u.exports},"8d2b":function(t,e,c){},ee18:function(t,e,c){"use strict";c("3c56")},f173:function(t,e,c){"use strict";c("8d2b")}}]);
//# sourceMappingURL=chunckProyectosView.0c635e1d.js.map