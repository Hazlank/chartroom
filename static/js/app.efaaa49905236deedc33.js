webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VCXJ"),s=a("4YfN"),i=a.n(s),r=a("9rMa"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"tg-header"},[e("section",{staticClass:"tg-header__opreate"})])}]},c=a("X4nt")(null,o,!1,null,null,null).exports,l=a("7jxY"),u=a.n(l),p={name:"userlist",props:["searchUser"],data:function(){return{loading:!1}},methods:i()({filterUser:function(t){var e=new RegExp("^"+this.searchUser+"|\\s"+this.searchUser,"i");return new RegExp(/[\u4e00-\u9fa5]/g).test(this.searchUser)?e.test(t):e.test(u()(t))}},Object(r.b)(["speekingNumChange"])),computed:i()({},Object(r.c)(["speekingNum","userList"])),filters:{filterSpace:function(t){return t.split(" ")[0]}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tg-userlist"},[t.loading?t._t("loading",[t._v("loading")]):t._e(),t._v(" "),t._l(t.userList,function(e,n){return t.filterUser(e.name)?a("div",{key:"username-"+e.name,staticClass:"tg-user",class:{active:t.speekingNum===n,"font-c":t.speekingNum!==n},on:{click:function(e){t.speekingNumChange(n)}}},[a("div",{staticClass:"tg-user__avatar"},[a("img",{attrs:{src:e.avatar,alt:"头像"}})]),t._v(" "),a("div",{staticClass:"tg-user__block"},[a("div",{staticClass:"tg-block__header"},[e.group?a("span",{staticClass:"tg-block__sign"},[t._v("组")]):t._e(),t._v(" "),a("span",{staticClass:"tg-block__talkto"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"tg-block__staute"}),t._v(" "),a("span",{staticClass:"tg-block__time"},[t._v(t._s(e.lasttime))])]),t._v(" "),a("div",{staticClass:"tg-block__footer"},[a("span",{staticClass:"tg-block__talkname"},[t._v("\n            "+t._s(t._f("filterSpace")(e.messagecontent[e.messagecontent.length-1].speaker?"You":e.name))+"\n        ")]),a("span",{staticClass:"tg-block__point"},[t._v(":")]),t._v(" "),a("span",{staticClass:"tg-block__context"},[t._v(t._s(e.context))]),t._v(" "),0===e.unread?a("span",{staticClass:"tg-block__contextcount"},[t._v(t._s(e.unread))]):t._e()])])]):t._e()})],2)},staticRenderFns:[]},g=a("X4nt")(p,m,!1,null,null,null).exports,_={name:"sidelist",data:function(){return{searchUser:""}},computed:Object(r.d)(["searchDelete"]),methods:i()({deleteText:function(){this.searchUser=""}},Object(r.b)(["barDisply","searchAnimation"])),components:{userList:g},watch:{searchUser:function(t){t&&this.searchDelete||this.searchAnimation()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tg-sidelist"},[a("div",{staticClass:"tg-sidelist__header"},[a("div",{staticClass:"tg-sidelist-tools",on:{click:t.barDisply}},[a("i",{staticClass:"icon-caidan01 iconfont"})]),t._v(" "),a("div",{staticClass:"tg-sidelist-search"},[a("div",{staticClass:"tg-sidelist-search__input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchUser,expression:"searchUser"}],staticClass:"tg-search-input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchUser},on:{input:function(e){e.target.composing||(t.searchUser=e.target.value)}}}),t._v(" "),a("transition",{attrs:{name:"searchIcon"}},[t.searchDelete?a("i",{staticClass:"iconfont icon-cuo1 tg-sidelist__searchDelete",on:{click:t.deleteText}}):t._e()])],1)])]),t._v(" "),a("keep-alive",[a("userList",{attrs:{searchUser:t.searchUser}},[a("div",{attrs:{solt:"loading"}})])],1)],1)},staticRenderFns:[]},v=a("X4nt")(_,d,!1,null,null,null).exports,h={name:"sidebar",data:function(){return{avatar:"./static/img/7753609_p0.jpg",userinfo:{username:"hazlank",userphone:"13265846123"},memus:[{context:"New Group",type:"Group",icon:"icon-qunliao"},{context:"New Channel",type:"Channel",icon:"icon-guangbo"},{context:"Contacts",type:"Contact",icon:"icon-lianxiren"},{context:"Calls",type:"Call",icon:"icon-dianhua"},{context:"Settings",type:"Setting",icon:"icon-shezhi"},{context:"Night Mode",icon:"icon-yueliang"}]}},methods:i()({},Object(r.b)(["barDisply","themeChange","boxDisplay","boxType"]),{stopPropagation:function(t,e,a){5===t?(e.stopPropagation(),this.themeChange(),this.ButtonType="button-light"===this.ButtonType?"button-dark":"button-light"):(this.boxDisplay(),this.boxType("Box"+a.type))}}),filters:{filterPhone:function(t){return"+86 "+t.replace(/\B(?=(?:\d{4})+$)/g," ")}},computed:i()({},Object(r.c)(["barPosition"]))},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"sidebar"}},[t.barPosition?a("div",{staticClass:"tg-side-bar",on:{click:t.barDisply}},[a("div",{staticClass:"tg-sidebar"},[a("div",{staticClass:"tg-sidebar__infor"},[a("div",{staticClass:"tg-sidebar__avatar"},[a("img",{attrs:{src:t.avatar,alt:"头像"}})]),t._v(" "),a("div",{staticClass:"tg-sidebar__item"},[a("span",{staticClass:"tg-sidebar__name"},[t._v(t._s(t.userinfo.username))]),t._v(" "),a("span",{staticClass:"tg-sidebar__phone"},[t._v(t._s(t._f("filterPhone")(t.userinfo.userphone))+" "),a("i",{staticClass:"iconfont icon-bookmarkwhite"})])])]),t._v(" "),a("ul",{staticClass:"tg-sidebar-toolsList"},t._l(t.memus,function(e,n){return a("li",{key:n,staticClass:"tg-sidebar-toolsList__memu tg-icon",on:{click:function(a){t.stopPropagation(n,a,e)}}},[a("i",{staticClass:"iconfont",class:e.icon}),t._v(" "),a("a",[t._v(t._s(e.context))]),t._v(" "),"icon-yueliang"===e.icon?a("div",{staticClass:"theme-buttonContain"},[a("div",{staticClass:"theme-button"},[a("div",{staticClass:"theme-button__container button-position"},[a("a",{staticClass:"t-light"}),t._v(" "),a("a",{staticClass:"t-dark"})])]),t._v(" "),a("a",{staticClass:"theme-change"})]):t._e()])}))])]):t._e()])},staticRenderFns:[]},x=a("X4nt")(h,f,!1,null,null,null).exports,b=a("lC5x"),C=a.n(b),y=a("J0Oq"),k=a.n(y),j={name:"message",mounted:function(){this.scroll()},data:function(){return{background:"url(./static/img/wife.jpg)"}},methods:i()({send:function(){this.messagecontent.push({text:this.$refs.edit.innerHTML,speaker:!0,time:(new Date).toTimeString().match(/(\d{2}):\d{2}/g)[0]}),this.$refs.edit.innerHTML="",this.updateLocalStorage(),this.scroll()},scroll:function(){var t=this;return k()(C.a.mark(function e(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.scrollRemove(t.$refs.children);case 3:case"end":return e.stop()}},e,t)}))()}},Object(r.b)(["updateLocalStorage","scrollRemove"])),computed:i()({messageImg:function(){return this.background}},Object(r.c)(["messagecontent","userInfor"]))},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tg-message__container"},[t.userInfor?a("div",{staticClass:"tg-message__header"},[a("div",[a("div",{staticClass:"tg-message__headerUsername"},[t._v(t._s(t.userInfor?t.userInfor.name:""))]),t._v(" "),a("div",{staticClass:"tg-message__headerLasttime"},[t._v("last seen a long time ago")])]),t._v(" "),a("div")]):t._e(),t._v(" "),a("div",{staticClass:"tg-message",style:{"background-image":t.background}},[a("div",{ref:"parent",staticStyle:{flex:"1",overflow:"auto"}},[a("div",{ref:"children",staticClass:"tg-message-content"},[t._l(t.messagecontent,function(e,n){return a("div",{key:"content-"+n,class:{"tg-message-content__speakerMe":e.speaker,"tg-message-content__speakerOthers":!e.speaker}},[e.speaker?t._e():a("div",{staticClass:"tg-message-content__avatar"},[a("img",{attrs:{src:e.avatar,alt:"头像"}})]),t._v(" "),a("div",{staticClass:"tg-message-container"},[a("div",{staticClass:"tg-message-container__text",domProps:{innerHTML:t._s(e.text)}}),t._v(" "),a("div",{staticClass:"tg-message-container__side"},[a("span",{staticClass:"tg-message-container__time"},[t._v(t._s(e.time))])])])])}),t._v(" "),a("div",{staticClass:"tg-message-placeholder"})],2)]),t._v(" "),t.userInfor?a("div",{staticClass:"tg-message-textarea"},[t._m(0),t._v(" "),a("div",{ref:"edit",staticClass:"tg-editor",attrs:{contenteditable:"true"},on:{keyup:function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key))&&e.ctrlKey?void t.send(e):null}}}),t._v(" "),t._m(1)]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"tg-icon"},[e("i",{staticClass:"iconfont icon-huixingzhen"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tg-message__emoji"},[e("span",{staticClass:"tg-icon"},[e("i",{staticClass:"iconfont icon-xiaolian"})]),this._v(" "),e("span",{staticClass:"tg-icon"},[e("i",{staticClass:"iconfont icon-yuyin"})])])}]},D=a("X4nt")(j,w,!1,null,null,null).exports,E={computed:i()({},Object(r.c)(["wrapper"])),methods:i()({},Object(r.b)(["barDisply"]))},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.wrapper?a("div",{staticClass:"tg-wrapper",on:{click:t.barDisply}}):t._e()},staticRenderFns:[]},$=a("X4nt")(E,S,!1,null,null,null).exports,O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tg-box__group"},[a("div",{staticClass:"tg-box__groupContent"},[a("box-uploadimg"),t._v(" "),a("div",{staticClass:"tg-box__groupInput"},[a("box-input",{attrs:{text:"Group name"}})],1)],1),t._v(" "),a("footer",{staticClass:"tg-box__groupBottom"},[a("box-button",{attrs:{opreation:"cancel",text:"cancel"}}),t._v(" "),a("box-button",{attrs:{text:"next"}})],1)])},staticRenderFns:[]},N=a("X4nt")({name:"BoxGroup"},O,!1,null,null,null).exports,F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tg-box__channel"},[a("div",{staticClass:"tg-box__channelContent"},[a("box-uploadimg"),t._v(" "),a("div",{staticClass:"tg-box__channelInput"},[a("box-input",{attrs:{text:"Channel name"}})],1)],1),t._v(" "),a("div",{staticClass:"tg-box__channelOptional"},[a("box-input",{attrs:{text:"Description (optional)"}})],1),t._v(" "),a("footer",{staticClass:"tg-box__channelBottom"},[a("box-button",{attrs:{opreation:"cancel",text:"cancel"}}),t._v(" "),a("box-button",{attrs:{text:"create"}})],1)])},staticRenderFns:[]},L=a("X4nt")(null,F,!1,null,null,null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{padding:"22px",width:"300px",height:"100px","text-align":"center"}},[this._v("\n contact none\n")])},staticRenderFns:[]},U=a("X4nt")(null,R,!1,null,null,null).exports,B={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{padding:"22px",width:"300px",height:"100px","text-align":"center"}},[this._v("\n  calls none\n")])},staticRenderFns:[]},T=a("X4nt")(null,B,!1,null,null,null).exports,I={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{padding:"22px",width:"300px",height:"100px","text-align":"center"}},[this._v("\n  setting none\n")])},staticRenderFns:[]},X=a("X4nt")(null,I,!1,null,null,null).exports,P={name:"box",methods:i()({},Object(r.b)(["boxDisplay"]),{lockClick:function(){!1!==this.box&&this.boxDisplay()}}),computed:i()({},Object(r.d)(["box","boxType"])),components:{BoxCall:T,BoxGroup:N,BoxSetting:X,BoxChannel:L,BoxContact:U}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"box"}},[t.box?a("div",{staticClass:"tg-box",on:{click:t.lockClick}},[a("div",{staticClass:"tg-box__container",on:{click:function(t){t.stopPropagation()}}},[a("keep-alive",[a(t.boxType,{tag:"component"})],1)],1)]):t._e()])},staticRenderFns:[]},H=a("X4nt")(P,M,!1,null,null,null).exports,A={name:"app",methods:i()({},Object(r.b)(["boxDisplay"])),computed:i()({},Object(r.c)(["theme"])),components:{HeaderCompontent:c,MessageContent:D,SideList:v,SideBar:x,Wrapper:$,Box:H}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.theme},[a("headerCompontent",{tag:"header"}),t._v(" "),a("div",{staticClass:"tg-main"},[a("side-list"),t._v(" "),a("message-content")],1),t._v(" "),a("Wrapper"),t._v(" "),a("side-bar"),t._v(" "),a("box")],1)},staticRenderFns:[]};var J=a("X4nt")(A,G,!1,function(t){a("oY7V")},null,null).exports,Y=a("3cXf"),z=a.n(Y),V=[{avatar:"./static/img/avatar0.jpg",name:"hax",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar1.jpg",name:"nbsaw",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar2.jpg",name:"lialuo",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar3.jpg",name:"vipcch",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar4.jpg",name:"choltte",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar5.jpg",name:"gwell",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar6.jpg",name:"扑街r v发",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar7.jpg",name:"haozi",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar8.jpg",name:"rollup",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar9.jpg",name:"tj",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar10.jpg",name:"Evan you",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar11.jpg",name:"阮一峰",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar12.jpg",name:"Addy Osmani",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar13.jpg",name:"fimars",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar14.jpg",name:"Jamie Kyle",type:"group",context:"",unread:200,lasttime:"12:15"},{avatar:"./static/img/avatar15.jpg",name:"Mike Bostock",type:"group",context:"",unread:200,lasttime:"12:15"}],q=[];localStorage.getItem("messagecontent")?q=JSON.parse(localStorage.getItem("messagecontent")):(q=q.concat(V.map(function(t,e){return[{text:"i am "+t.name,speaker:!1,avatar:"./static/img/avatar"+e+".jpg",time:"11:02"}]})),localStorage.setItem("messagecontent",z()(q))),V.forEach(function(t,e){var a=q[e];t.context=a[a.length-1].text,t.messagecontent=a});var K={theme:"light",barPosition:!1,wrapper:!1,box:!1,speekingNum:"",userList:V,messagecontent:q,boxType:"",searchDelete:!1},W={theme:function(t){return t.theme},barPosition:function(t){return t.barPosition},wrapper:function(t){return t.wrapper},speekingNum:function(t){return t.speekingNum},userList:function(t){return t.userList},messagecontent:function(t){var e=t.userList;return[].concat(e.map(function(t,e){return t.messagecontent}))[t.speekingNum]},box:function(t){return t.box},userInfor:function(t){return t.userList[t.speekingNum]?t.userList[t.speekingNum]:""}},Q={barDisply:function(t){t.barPosition=!t.barPosition},wrapperDisply:function(t){t.wrapper=!t.wrapper},themeChange:function(t){t.theme="dark"===t.theme?"light":"dark"},speekingNumChange:function(t,e){t.speekingNum=e},updateLocalStorage:function(t){localStorage.setItem("messagecontent",z()(t.messagecontent))},updateUsertalk:function(t){t.userList.forEach(function(t,e){var a=t.messagecontent;t.context=a[a.length-1].text})},scrollRemove:function(t,e){e.parentElement.scrollTop=e.offsetHeight-e.parentElement.offsetHeight},boxDisplay:function(t){t.box=!t.box},boxType:function(t,e){t.boxType=e},searchAnimation:function(t){t.searchDelete=!t.searchDelete}},Z={barDisply:function(t){var e=t.commit;e("barDisply"),e("wrapperDisply")},wrapperDisply:function(t){(0,t.commit)("wrapperDisply")},themeChange:function(t){(0,t.commit)("themeChange")},speekingNumChange:function(t,e){(0,t.commit)("speekingNumChange",e)},updateLocalStorage:function(t){var e=t.commit;e("updateLocalStorage"),e("updateUsertalk")},scrollRemove:function(t,e){(0,t.commit)("scrollRemove",e)},boxDisplay:function(t){var e=t.commit;e("boxDisplay"),e("wrapperDisply")},boxType:function(t,e){(0,t.commit)("boxType",e)},searchAnimation:function(t){(0,t.commit)("searchAnimation")}};n.a.use(r.a);var tt=new r.a.Store({state:K,getters:W,mutations:Q,actions:Z}),et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tg-box__input",class:{"is-focus":t.focusState},on:{click:t.Infocus}},[a("label",[t._v(t._s(t.text))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"input",attrs:{type:"text"},domProps:{value:t.value},on:{blur:t.InputFocus,focus:t.InputFocus,input:function(e){e.target.composing||(t.value=e.target.value)}}})])},staticRenderFns:[]},at=a("X4nt")({name:"BoxInput",props:["text"],data:function(){return{value:"",focusState:!1}},methods:{InputFocus:function(t){"blur"===t.type?this.value||(this.focusState=!1):this.value||(this.focusState=!0)},Infocus:function(){var t=this;this.$nextTick(function(){t.$refs.input.focus()})}}},et,!1,null,null,null).exports,nt={name:"BoxButton",props:["text","opreation"],methods:i()({Opreation:function(){"cancel"===this.opreation&&this.boxDisplay()}},Object(r.b)(["boxDisplay"])),filters:{toUpperCase:function(t){return t.toUpperCase()}}},st={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"tg-box__button"},[a("button",{on:{click:t.Opreation}},[t._v("\n      "+t._s(t._f("toUpperCase")(this.text))+"\n    ")])])},staticRenderFns:[]},it=a("X4nt")(nt,st,!1,null,null,null).exports,rt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tg-box__upload"},[e("span",{staticClass:"tg-uploadimg"},[e("i",{staticClass:"iconfont icon-xiangji"})])])}]},ot=a("X4nt")({name:"BoxUploadimg"},rt,!1,null,null,null).exports;a("OBsF"),a("hvFc");n.a.config.productionTip=!1,[at,it,ot].forEach(function(t){n.a.component(t.name,t)}),new n.a({el:"#app",store:tt,components:{App:J}})},OBsF:function(t,e){},hvFc:function(t,e){},oY7V:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.efaaa49905236deedc33.js.map