(this.webpackJsonppwero=this.webpackJsonppwero||[]).push([[0],{156:function(e,t,a){e.exports=a(294)},161:function(e,t,a){},181:function(e,t){},183:function(e,t){},196:function(e,t){},198:function(e,t){},226:function(e,t){},227:function(e,t){},232:function(e,t){},234:function(e,t){},258:function(e,t){},288:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(153),l=a.n(r),o=(a(161),a(8)),i=a(7),s=a(4),m=a(52),u=a.n(m),d=localStorage.getItem("token"),E={url:{API_URL:"https://us-central1-pwero-9b223.cloudfunctions.net/app/api/"}},f=u.a.create({baseURL:E.url.API_URL,headers:{Authorization:"Bearer ".concat(d)}}),v=localStorage.getItem("token"),p=localStorage.getItem("userId"),b=function(e){f.get("exercice").then((function(t){e(t.data)})).catch((function(e){console.error(e)}))};function w(e){var t=localStorage.getItem("token"),a="".concat(E.url.API_URL,"workout");null!==t&&""!==t&&(a="".concat(E.url.API_URL,"auth/userworkouts/").concat(p)),u()({method:"get",url:a,headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){e({list:t.data,loading:!1})})).catch((function(e){console.error(e)}))}var h=function(e,t){null!==v&&f.put("auth/userworkouts/".concat(p,"/").concat(t),e).then((function(){})).catch((function(e){console.error(e)}))},k=Object(n.createContext)(),g=function(e){var t=Object(n.useState)({list:"",loading:!0}),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){w(l)}),[]),c.a.createElement(k.Provider,{value:[r,l]},e.children)},j=Object(n.createContext)(),x=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");""!==e&&null!==e&&l(!0)}),[l]),c.a.createElement(j.Provider,{value:[r,l]},e.children)},O=a(78),N=a.n(O);a(288);var C=function(){return c.a.createElement("div",{className:"lds-ellipsis-container"},c.a.createElement("div",null,"chargement"),c.a.createElement("div",{className:"lds-ellipsis"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))},S=a(53),I=a(155),y=a(54);var F=function(){var e=Object(n.useContext)(k),t=Object(s.a)(e,1)[0],a=Object(n.useContext)(j),r=Object(s.a)(a,2),l=(r[0],r[1]),i=localStorage.getItem("token");Object(n.useEffect)((function(){(function(e){if(e&&N.a.decode(e)){var t=N.a.decode(e).exp;return(new Date).getTime()>1e3*t}return!1})(i)&&(localStorage.removeItem("token"),l(!1),window.location.reload(!1))}));var m=t.list&&t.list.map((function(e,t){return c.a.createElement(o.b,{key:t,className:"link",to:"/workout/".concat(t)},c.a.createElement("div",{className:"workouts-container"},c.a.createElement("div",{className:"workouts"},c.a.createElement("div",{className:"verticalcenter"},c.a.createElement(S.a,{className:"dumbbell",size:32})),c.a.createElement("div",{className:"workout-title"},c.a.createElement("h4",null,null!==e&&e.title),c.a.createElement("div",{className:"verticalcenter"},c.a.createElement(I.a,{color:"#12C380"}),"Go!")),c.a.createElement("div",null,c.a.createElement("div",{className:"workouts-exercice-number"},null!==e&&e.exercice.length),c.a.createElement("div",{className:"workouts-exercices"},"".concat(null!==e&&e.exercice.length>1?"exercices":"exercice"))))))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"workouts-container"},c.a.createElement("div",{className:"workouts-header"},c.a.createElement("div",{className:"workouts-title"},"Mes Entra\xeenements")),c.a.createElement("div",{className:"wave-container"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},c.a.createElement("path",{fill:"#2F313E",d:"M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})),c.a.createElement("div",{className:"workouts-list"},m,t.loading&&c.a.createElement(C,null)),!t.loading&&0===t.list.length&&c.a.createElement("div",{className:"workouts-container"},"Pas encore de workouts")),c.a.createElement("div",{className:"workouts-add"},c.a.createElement(o.b,{to:"/new-workout"},c.a.createElement(y.a,{size:48,color:"#F8BD33"})))),c.a.createElement("div",null))};var z=function(){return c.a.createElement("div",{className:"home"},c.a.createElement(F,null))},P=a(12),A=a(10);var $=function(){var e=Object(i.f)(),t=Object(n.useContext)(j),a=Object(s.a)(t,2),r=(a[0],a[1]),l=Object(n.useContext)(k),m=Object(s.a)(l,2),u=(m[0],m[1]),d={email:"",password:""},E=Object(n.useState)(d),v=Object(s.a)(E,2),p=v[0],b=v[1],h=function(e){var t=e.target.name;b(Object(A.a)(Object(A.a)({},p),{},Object(P.a)({},t,e.target.value)))};return c.a.createElement("div",{className:"login-form"},c.a.createElement("div",null,"Connexion"),c.a.createElement("label",{htmlFor:"email"},"Ton email"),c.a.createElement("input",{placeholder:"",value:p.email,name:"email",id:"form-auth-email",type:"email",onChange:h}),c.a.createElement("label",{htmlFor:"password"},"Ton mot de passe"),c.a.createElement("input",{placeholder:"",value:p.password,name:"password",id:"form-auth-password",type:"password",onChange:h}),c.a.createElement("button",{className:"form-btn",onClick:function(t){t.preventDefault(),f.post("auth/login",p).then((function(t){var a=t.data.token;localStorage.setItem("token",a);var n=t.data.userId;localStorage.setItem("userId",n),w(u),r(!0),e.push("/")})).catch((function(e){console.log(e)})),b(d)}},"Connexion"),c.a.createElement(o.b,{to:"/signup",className:"login-form-signup"},"Pas encore de compte: S'inscrire"))};var B=function(){return c.a.createElement("div",{className:"login"},c.a.createElement($,null))};var D=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)({email:"",password:"",confirmPassword:""}),E=Object(s.a)(d,2),v=E[0],p=E[1],b=function(e){var t=e.target.name;p(Object(A.a)(Object(A.a)({},v),{},Object(P.a)({},t,e.target.value)))};return c.a.createElement("div",{className:""},a&&c.a.createElement("div",{className:"signup-form-text"},c.a.createElement("div",null,"F\xe9licitations! Ton Compte a bien \xe9t\xe9 Cr\xe9\xe9... "),c.a.createElement("div",null,"Non tu ne recevras pas de mail de confirmation... "),c.a.createElement("div",null,"Je sais, c'est un peu \xe0 l'arrache mais je n'ai pas encore cod\xe9 cette fonctionnalit\xe9"),c.a.createElement("div",null,"Bon allez... en attendant")),!a&&c.a.createElement("div",{className:"login-form"},c.a.createElement("div",null,"Inscription"),c.a.createElement("label",{htmlFor:"email"},"Ton email"),c.a.createElement("input",{placeholder:"",value:v.email,name:"email",id:"form-auth-email",type:"email",onChange:b}),c.a.createElement("label",{htmlFor:"password"},"Ton mot de passe"),c.a.createElement("input",{placeholder:"",value:v.password,name:"password",id:"form-auth-password",type:"password",onChange:b}),c.a.createElement("label",{htmlFor:"confirmPassword"},"Confirme ton mot de passe"),c.a.createElement("div",null,m),c.a.createElement("input",{placeholder:"",value:v.confirmPassword,name:"confirmPassword",id:"form-auth-confirmPassword",type:"password",onChange:b}),c.a.createElement("button",{className:"form-btn",onClick:function(e){e.preventDefault(),v.password===v.confirmPassword?f.post("auth/signup",v).then((function(e){r(!0),console.log(e)})).catch((function(e){console.log(e)})):u("Veuillez saisir 2 mots de passe identiques ")}},"Je veux m'entra\xeener !")),c.a.createElement("div",{className:"login-form-signup"},a&&c.a.createElement(o.b,{to:"/login",className:"signup-link"},"Clique ici pour te connecter")))};var L=function(){return c.a.createElement("div",{className:"signin"},c.a.createElement(D,null))},_=Object(n.createContext)(),R=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){b(l)}),[]),c.a.createElement(_.Provider,{value:[r,l]},e.children)};var T=function(e){var t=e.closeForm,a=e.data,r={name:"",title:"",link:""},l=Object(n.useState)(r),o=Object(s.a)(l,2),i=o[0],m=o[1],u=Object(n.useContext)(_),d=Object(s.a)(u,2),E=(d[0],d[1]),v=function(e){var t=e.target.name;m(Object(A.a)(Object(A.a)({},i),{},Object(P.a)({},t,e.target.value)))};return c.a.createElement("form",{autoComplete:"off",className:"form-new-exercice"},c.a.createElement("label",{htmlFor:"form-new-exercice-title"},"Nom de l'exercice"),c.a.createElement("input",{placeholder:"Curl Biceps",value:i.title,name:"title",id:"form-new-exercice-title",type:"text",onChange:v}),c.a.createElement("div",{className:"new-workout-select"},c.a.createElement("select",{className:"new-workout-input",name:"name",value:i.name,onChange:v},c.a.createElement("option",{hidden:!0,value:""},"Groupe musculaire"),a.map((function(e,t){return c.a.createElement("option",{key:t,label:e.name,value:e.name})})))),c.a.createElement("button",{onClick:function(e){e.preventDefault();var a=localStorage.getItem("token"),n=localStorage.getItem("userId"),c={headers:{Authorization:"Bearer ".concat(a)}};f.post("auth/addexercice/".concat(n),i,c).then((function(e){b(E)})).catch((function(e){console.log(e)})),m(r),t(i)}},"Ajouter"))},V=a(14),U=a.n(V),q=a(27),J=a(22);var M=function(){var e=Object(n.useContext)(_),t=Object(s.a)(e,2),a=t[0],r=t[1],l=a.map((function(e){return e})),o=Object(n.useState)({button:!1}),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)([]),E=Object(s.a)(d,2),v=E[0],p=E[1],w=localStorage.getItem("userId");Object(n.useEffect)((function(){f.get("/auth/custom/".concat(w)).then((function(e){p(e.data)})).catch((function(e){console.error(e)}))}),[w]);var h=a.map((function(e){return c.a.createElement("div",{className:"exercices-list",key:e._id},c.a.createElement("div",{className:"exercices-list-name"},e.name),e.exercices.map((function(e){return c.a.createElement("div",{key:e.title},c.a.createElement("div",{className:"exercices-list-title"},e.title))})))})),k=v.map((function(e){return c.a.createElement("div",{key:e.title,className:"exercices-list-title"},c.a.createElement("div",{className:"exercices-list-custom"},c.a.createElement("div",null,e.title),c.a.createElement(q.a,{color:"#E2697E",size:24,onClick:function(){return function(e,t){f.delete("exercice/".concat(e._id)).then((function(){b(t)})).catch((function(e){console.error(e)}))}(e,r)}})))}));return c.a.createElement("div",{className:"exercices-container"},c.a.createElement("h1",null,"Exercices"),c.a.createElement("div",{className:"exercices",onClick:function(){u({button:!0}),!1===m.button?u({button:!0}):!0===m.button&&u({button:!1})}},c.a.createElement("h3",null,"Cr\xe9\xe9 ton exercice"),c.a.createElement("div",{className:"exercices-add-button"},c.a.createElement(J.a,{size:24,color:"#fff"}))),c.a.createElement("div",null,m.button&&c.a.createElement(T,{data:l,closeForm:function(e){u({button:!1});var t=U()(v,{$push:[e]});p(t)}})),c.a.createElement("div",{className:"exercices-list"},c.a.createElement("div",{className:"exercices-list-name"},"Exo Perso"),k),c.a.createElement("div",null,h))},G=a(35);var W=function(e){var t=e.getFormValues,a=Object(n.useContext)(_)[0].map((function(e){return e})),r=Object(n.useState)([]),l=Object(s.a)(r,2),o=l[0],i=l[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],E=u[1],v=Object(n.useState)({name:"",reps:1,series:1,performedSeries:0}),p=Object(s.a)(v,2),b=p[0],w=p[1],h=localStorage.getItem("userId");return Object(n.useEffect)((function(){f.get("/auth/custom/".concat(h)).then((function(e){i(e.data)})).catch((function(e){console.error(e)}))}),[h]),c.a.createElement("div",{className:"new-workout-form"},c.a.createElement("div",{className:"add-exercice"},c.a.createElement("div",{className:"add-exercice-text"},"Ajouter un exercice\xa0"),c.a.createElement(J.a,{color:"#F8BD33",onClick:function(){!1===d?E(!0):!0===d&&E(!1)},size:32})),c.a.createElement("div",{className:"select-form-container"},c.a.createElement("form",{className:"add-exercice-form ".concat(d?"add-exercice-form":"add-exercice-form-open"),onChange:function(e){var t=e.target.name;w(Object(A.a)(Object(A.a)({},b),{},Object(P.a)({},t,"name"===e.target.name?e.target.value:parseInt(e.target.value,10))))}},c.a.createElement("div",{className:"new-workout-select"},c.a.createElement("label",{htmlFor:"series"},"Exercice:"),c.a.createElement("select",{className:"new-workout-input",name:"name"},c.a.createElement("option",{hidden:!0,value:""},"Choisir exercice"),c.a.createElement("optgroup",{label:"Exercices Perso"},o&&o.map((function(e){return c.a.createElement("option",{key:e.title},e.title)}))),a.map((function(e,t){return c.a.createElement("optgroup",{key:t,label:e.name},e.exercices.map((function(e){return c.a.createElement("option",{key:e.title},e.title)})))})))),c.a.createElement("label",{htmlFor:"reps"},"Nombre de reps par s\xe9rie"),c.a.createElement("select",{name:"reps",id:"add-reps"},Object(G.a)(Array(20)).map((function(e,t){return c.a.createElement("option",{key:t,value:t+1},t+1)}))),c.a.createElement("label",{htmlFor:"series"},"Nombre de s\xe9ries "),c.a.createElement("select",{name:"series",id:"add-series"},Object(G.a)(Array(10)).map((function(e,t){return c.a.createElement("option",{key:t,value:t+1},t+1)}))),c.a.createElement("button",{className:"form-btn",onClick:function(e){e.preventDefault(),E(!1),t(b)}},"Ajouter cet exercice"))))},H=a(81);var Z=function(){var e=Object(i.f)(),t=Object(n.useContext)(k),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(i.g)()._id,m=Object(n.useState)({_id:null,title:"",exercice:[{name:"",reps:"",series:"",performedSeries:""}]}),u=Object(s.a)(m,2),d=u[0],E=u[1],v=Object(n.useState)(!1),p=Object(s.a)(v,2),b=p[0],w=p[1];Object(n.useEffect)((function(){void 0!==r.list[o]&&(E(r.list[o]),w(!0))}),[r.list,o,b]);var g=function(e,t){if(t){var a=U()(d,{exercice:Object(P.a)({},e,{performedSeries:{$set:0}})});E(a),h(a,o)}else if(d.exercice[e].performedSeries<d.exercice[e].series){var n=U()(d,{exercice:Object(P.a)({},e,{performedSeries:{$set:d.exercice[e].performedSeries+1}})});E(n),h(n,o)}},j=localStorage.getItem("userId");function x(){var e=!1;return void 0!==d.exercice&&null!==d.exercice&&d.exercice.map((function(t,a){return c.a.createElement("div",{key:a,className:"workout-details-container"},e=t.performedSeries===t.series,c.a.createElement("div",{className:"workout-details-1"},c.a.createElement("h4",{className:"workout-details-title"},t.name,e&&c.a.createElement(H.a,null)),c.a.createElement("div",null,c.a.createElement(q.a,{color:"#E2697E",size:27,onClick:function(){return function(e){var t=U()(d,{exercice:{$splice:[[e,1]]}}),a=U()(r,{list:Object(P.a)({},o,{$set:t})});l(a),h(t,o)}(a)}}))),c.a.createElement("div",null,t.reps," Reps"),c.a.createElement("div",null,c.a.createElement("div",{className:"workout-details-2",key:a},c.a.createElement("div",{className:"workout-details-3"},c.a.createElement("div",{className:"workout-series"},t.performedSeries,c.a.createElement("span",{className:"workout-series-span"},"/")," "),c.a.createElement("div",{className:"".concat(e?"workout-series":"workout-series-undo")},t.series," "),c.a.createElement("div",null,"\xa0S\xe9ries")),c.a.createElement("div",{className:"workout-details-increment"},c.a.createElement("div",null,e&&c.a.createElement(H.a,{size:27}),!e&&c.a.createElement(q.b,{size:27,color:"#F8BD33",onClick:function(){return g(a)}})),c.a.createElement("div",{onClick:function(e){return g(a,e)}},c.a.createElement(S.b,{color:"#12C380",size:27}))))))}))}return c.a.createElement("div",{className:"workout-container"},c.a.createElement("div",{className:"workout-delete"},c.a.createElement(q.a,{color:"#E2697E",size:27,onClick:function(){if(window.confirm("Supprimer cet entra\xeenement ?")){var t=U()(r,{list:{$splice:[[o,1]]}});l(t),f.delete("auth/userworkouts/".concat(j,"/").concat(d.title)).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),e.push("/")}}})),c.a.createElement("div",{className:"workout-add"},c.a.createElement("div",null,c.a.createElement(W,{getFormValues:function(e){var t=U()(d,{exercice:{$push:[e]}}),a=U()(r,{list:Object(P.a)({},o,{$set:t})});l(a),h(t,o)}}))),c.a.createElement("div",{className:"workout-name"},r.loading&&c.a.createElement(C,null),b&&c.a.createElement("input",{autoComplete:"off",className:"workout-name",type:"text",name:"title",value:d.title,onChange:function(e){var t=U()(d,{title:{$set:e.target.value}}),a=U()(r,{list:Object(P.a)({},o,{$set:t})});l(a),h(t,o)}})),c.a.createElement("div",{className:"workout"},b&&c.a.createElement(x,null)))};var K=function(){var e=Object(n.useContext)(k),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(_),o=Object(n.useState)(!1),m=Object(s.a)(o,2),u=m[0],d=m[1],E=Object(n.useState)(!0),v=Object(s.a)(E,2),p=v[0],b=v[1],w=l[0].map((function(e){return e})),h=Object(i.f)(),g=Object(n.useState)({title:"",exercice:[{name:"",reps:0,series:0,performedSeries:0}]}),j=Object(s.a)(g,2),x=j[0],O=j[1],N=Object(n.useState)([]),C=Object(s.a)(N,2),S=C[0],I=C[1],F=Object(n.useState)([]),z=Object(s.a)(F,2),$=z[0],B=z[1],D=localStorage.getItem("userId");Object(n.useEffect)((function(){f.get("/auth/custom/".concat(D)).then((function(e){I(e.data)})).catch((function(e){console.error(e)}))}),[D]);var L=document.querySelector("#reset"),R=function(){!1===u?d(!0):!0===u&&d(!1)};return Object(n.useEffect)((function(){(0===x.exercice[0].reps||x.exercice[0].series)&&b(!1)}),[x.exercice]),Object(n.useEffect)((function(){(0===x.exercice[0].reps||x.exercice[0].series)&&b(!1)}),[x.exercice]),c.a.createElement("div",{className:"new-workout-container"},c.a.createElement("div",{className:"new-workout-title-container"},c.a.createElement("input",{required:!0,autoComplete:"off",placeholder:"Entrer nom du workout",className:"new-workout-title",onChange:function(e){O(Object(A.a)(Object(A.a)({},x),{},{title:e.target.value}))}})),c.a.createElement("form",null,c.a.createElement("div",{className:"new-workout-datas-container"},c.a.createElement("div",{className:"new-workout-exercices-container"},c.a.createElement("div",{className:"new-workout-exercices-title"},"Exercices:"),!u&&c.a.createElement("div",{onClick:R,className:"new-workout-add"},"Ajouter\xa0",c.a.createElement(y.a,{size:24})),u&&c.a.createElement("div",{onClick:R,className:"new-workout-add"},c.a.createElement(J.c,{size:24,color:"#E2697E"}))),p&&c.a.createElement("div",{className:"new-workout-exercices-list"},c.a.createElement("div",{className:"new-workout-warning"},c.a.createElement(J.b,{size:18,color:"#E2697E"}),"\xa0",p)),c.a.createElement("div",{className:"new-workout-exercices-list"},0===x.exercice[0].reps&&c.a.createElement("div",{className:"new-workout-warning"},c.a.createElement(J.b,{size:18,color:"#E2697E"}),"\xa0Pas encore d'exercice ajout\xe9"),0!==x.exercice[0].reps&&x.exercice.map((function(e,t){return c.a.createElement("div",{className:"new-workout-datas",key:t},c.a.createElement("div",{className:"new-workout-name"},e.name),c.a.createElement("div",null,e.reps," reps"),c.a.createElement("div",null,e.series," series"))})))),c.a.createElement("div",{className:"".concat(u?"new-workout-addform":"new-workout-addform-hidden"),onChange:function(e){var t=e.target.name;B(Object(A.a)(Object(A.a)({},$),{},Object(P.a)({},t,"name"===e.target.name?e.target.value:parseInt(e.target.value,10))))}},c.a.createElement("div",{className:"new-workout-select"},c.a.createElement("label",{htmlFor:"series"},"Exercice: ",x.exercice[0].length),c.a.createElement("select",{className:"new-workout-input",name:"name",defaultValue:$.name},c.a.createElement("option",{hidden:!0,value:""},"Choisir exercice"),c.a.createElement("optgroup",{label:"Exercices Perso"},S&&S.map((function(e){return c.a.createElement("option",{key:e.title},e.title)}))),w.map((function(e,t){return c.a.createElement("optgroup",{key:t,label:e.name},e.exercices.map((function(e){return c.a.createElement("option",{key:e.title},e.title)})))})))),c.a.createElement("div",{className:"new-workout-select"},c.a.createElement("label",{htmlFor:"reps"},"Nombre de R\xe9p\xe9titions par s\xe9rie: ",c.a.createElement("span",null,$.reps)),c.a.createElement("select",{className:"new-workout-input",name:"reps",id:"add-reps",defaultValue:$.reps},Object(G.a)(Array(20)).map((function(e,t){return c.a.createElement("option",{key:t,value:t},t)})))),c.a.createElement("input",{type:"reset",value:"Reset",id:"reset"}),c.a.createElement("div",{className:"new-workout-select"},c.a.createElement("label",{htmlFor:"series"},"Nombre de S\xe9ries: ",c.a.createElement("span",null,$.series)),c.a.createElement("select",{className:"new-workout-input",name:"series",id:"add-series",defaultValue:$.series},Object(G.a)(Array(10)).map((function(e,t){return c.a.createElement("option",{key:t,value:t},t)}))),c.a.createElement("div",{className:"new-workout-addbtn-container"},c.a.createElement("button",{className:"new-workout-addbtn",onClick:function(e){e.preventDefault(),void 0===$.name?b("choisir un exercice"):0===$.reps?b("definir le nombre de r\xe9p\xe9tition"):0===$.series?b("definir le nombre de s\xe9ries"):(0===x.exercice[0].reps&&0===x.exercice[0].series&&x.exercice.splice(0,1),x.exercice.push($),L.click(),B(Object(A.a)(Object(A.a)({},$),{},{name:"",reps:0,series:0})),b(!1),d(!1))}},"Ajouter Exercice !"))))),!u&&c.a.createElement("button",{className:"new-workout-submitbtn",onClick:function(e){var t=localStorage.getItem("userId");if(e.preventDefault(),0===x.exercice[0].reps&&0===x.exercice[0].series)b("Veuillez ajouter au moins un exercice");else if(""===x.title)b("ajouter un nom");else{f.post("auth/userworkouts/".concat(t),x).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));var n=U()(a,{list:{$push:[x]}});r(n),h.push("/")}}},"Cr\xe9er ce workout !"))};var Q=function(){var e=Object(n.useContext)(j),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(k),i=Object(s.a)(l,2),m=(i[0],i[1]);return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement(o.b,{className:"logo",to:"/"},"Trainer"),c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/exercices"},"Exercices")),!a&&c.a.createElement("li",null,c.a.createElement(o.b,{to:"/login"},"Login")),a&&c.a.createElement("li",null,c.a.createElement(o.b,{onClick:function(){localStorage.setItem("token",""),r(!1),w(m)},to:"/"},"D\xe9connexion"))))),c.a.createElement("div",{className:"loginfo"},!a&&c.a.createElement(o.b,{className:"link",to:"/login"},c.a.createElement("div",null,"Connecte-toi pour cr\xe9er tes propres entra\xeenements !"))))};a(293);var X=function(){return c.a.createElement(x,null,c.a.createElement(g,null,c.a.createElement(R,null,c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement("div",{className:"app-container"},c.a.createElement(Q,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(z,null)),c.a.createElement(i.a,{path:"/login"},c.a.createElement(B,null)),c.a.createElement(i.a,{path:"/signup"},c.a.createElement(L,null)),c.a.createElement(i.a,{path:"/exercices"},c.a.createElement(M,null)),c.a.createElement(i.a,{path:"/workout/:_id"},c.a.createElement(Z,null)),c.a.createElement(i.a,{path:"/new-workout/"},c.a.createElement(K,null)))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.4444c7d5.chunk.js.map