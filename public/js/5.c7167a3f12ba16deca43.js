webpackJsonp([5,8],{1:function(e,t){e.exports=function(e,t,s,n){var a,o=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,o=e.default);var i="function"==typeof o?o.options:o;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),s&&(i._scopeId=s),n){var c=i.computed||(i.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:a,exports:o,options:i}}},3:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=s(7),o=n(a);t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}},4:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(2),o=n(a);t.default={replace:!0,props:{pageType:String,fixHead:Boolean,messageCount:Number,needAdd:{type:Boolean,default:!0}},data:function(){return{nickname:"",profileimgurl:"",show:!1}},methods:{openMenu:function(){(0,o.default)("html, body, #page").addClass("scroll-hide"),this.show=!this.show},showMenus:function(){this.show=!this.show,(0,o.default)("html, body, #page").removeClass("scroll-hide")}},components:{nvMenu:s(16)}}},5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={replace:!0,props:["showMenu","pageType","nickName","profileUrl"],components:{userInfo:s(17)}}},6:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),o=n(a),r=s(22);t.default={replace:!0,computed:(0,o.default)({},(0,r.mapGetters)({userInfo:"getUserInfo"})),methods:{goEnter:function(){this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.path)}})},goUser:function(){this.$router.push({name:"user",params:{loginname:this.userInfo.loginname}})}}}},7:function(e,t,s){e.exports={default:s(8),__esModule:!0}},8:function(e,t,s){s(12),e.exports=s(21).Object.assign},9:function(e,t,s){"use strict";var n=s(26),a=s(10),o=s(11),r=s(27),i=s(25),c=Object.assign;e.exports=!c||s(23)(function(){var e={},t={},s=Symbol(),n="abcdefghijklmnopqrst";return e[s]=7,n.split("").forEach(function(e){t[e]=e}),7!=c({},e)[s]||Object.keys(c({},t)).join("")!=n})?function(e,t){for(var s=r(e),c=arguments.length,l=1,u=a.f,d=o.f;c>l;)for(var f,_=i(arguments[l++]),m=u?n(_).concat(u(_)):n(_),p=m.length,v=0;p>v;)d.call(_,f=m[v++])&&(s[f]=_[f]);return s}:c},10:function(e,t){t.f=Object.getOwnPropertySymbols},11:function(e,t){t.f={}.propertyIsEnumerable},12:function(e,t,s){var n=s(24);n(n.S+n.F,"Object",{assign:s(9)})},13:function(e,t){},14:function(e,t){},15:function(e,t,s){var n=s(1)(s(4),s(19),null,null);e.exports=n.exports},16:function(e,t,s){s(14);var n=s(1)(s(5),s(20),null,null);e.exports=n.exports},17:function(e,t,s){s(13);var n=s(1)(s(6),s(18),null,null);e.exports=n.exports},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-info"},[e.userInfo.loginname?e._e():s("ul",{staticClass:"login-no"},[s("li",{staticClass:"login",on:{click:e.goEnter}},[s("a",[e._v("登录")])])]),e._v(" "),e.userInfo.loginname?s("div",{staticClass:"login-yes",on:{click:e.goUser}},[s("div",{staticClass:"avertar"},[e.userInfo.avatar_url?s("img",{attrs:{src:e.userInfo.avatar_url}}):e._e()]),e._v(" "),s("div",{staticClass:"info"},[e.userInfo.loginname?s("p",{domProps:{textContent:e._s(e.userInfo.loginname)}}):e._e()])]):e._e()])},staticRenderFns:[]}},19:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.show&&e.fixHead?s("div",{staticClass:"page-cover",on:{click:e.showMenus}}):e._e(),e._v(" "),s("header",{class:{show:e.show&&e.fixHead,"fix-header":e.fixHead,"no-fix":!e.fixHead},attrs:{id:"hd"}},[s("div",{staticClass:"nv-toolbar"},[e.fixHead?s("div",{staticClass:"toolbar-nav",on:{click:e.openMenu}}):e._e(),e._v(" "),s("span",{domProps:{textContent:e._s(e.pageType)}}),e._v(" "),e.messageCount>0?s("i",{staticClass:"num"},[e._v(" "+e._s(e.messageCount))]):e._e(),e._v(" "),s("router-link",{attrs:{to:"/add"}},[e.needAdd?s("i",{directives:[{name:"show",rawName:"v-show",value:!e.messageCount||e.messageCount<=0,expression:"!messageCount || messageCount <= 0"}],staticClass:"iconfont add-icon"},[e._v("")]):e._e()])],1)]),e._v(" "),e.fixHead?s("nv-menu",{attrs:{"show-menu":e.show,"page-type":e.pageType,"nick-name":e.nickname,"profile-url":e.profileimgurl}}):e._e()],1)},staticRenderFns:[]}},20:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"nav-list",class:{show:e.showMenu},attrs:{id:"sideBar"}},[s("user-info"),e._v(" "),s("section",{staticClass:"list-ul"},[s("router-link",{staticClass:"icon-quanbu iconfont item",attrs:{to:{name:"list",query:{tab:"all"}}}},[e._v("全部")]),e._v(" "),s("router-link",{staticClass:"icon-hao iconfont item",attrs:{to:{name:"list",query:{tab:"good"}}}},[e._v("精华")]),e._v(" "),s("router-link",{staticClass:"icon-fenxiang iconfont item",attrs:{to:{name:"list",query:{tab:"share"}}}},[e._v("分享")]),e._v(" "),s("router-link",{staticClass:"icon-wenda iconfont item",attrs:{to:{name:"list",query:{tab:"ask"}}}},[e._v("问答")]),e._v(" "),s("router-link",{staticClass:"icon-zhaopin iconfont item",attrs:{to:{name:"list",query:{tab:"job"}}}},[e._v("招聘")]),e._v(" "),s("router-link",{staticClass:"icon-xiaoxi iconfont item line",attrs:{to:{name:"message"}}},[e._v("消息")]),e._v(" "),s("router-link",{staticClass:"icon-about iconfont item",attrs:{to:{name:"about"}}},[e._v("关于")])],1)],1)},staticRenderFns:[]}},46:function(e,t,s){var n=s(1)(s(59),s(105),null,null);e.exports=n.exports},59:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(3),o=n(a),r=s(2),i=n(r),c=s(28),l=n(c),u=s(15),d=n(u),f=s(22);t.default={data:function(){return{showMenu:!1,selectItem:2,message:{},noData:!1,currentData:[],no_read_len:0}},computed:(0,o.default)({},(0,f.mapGetters)({userInfo:"getUserInfo"})),mounted:function(){var e=this;i.default.get("https://cnodejs.org/api/v1/messages?accesstoken="+this.userInfo.token,function(t){t&&t.data?(e.message=t.data,e.no_read_len=t.data.hasnot_read_messages.length,t.data.hasnot_read_messages.length>0?e.currentData=t.data.hasnot_read_messages:(e.currentData=t.data.has_read_messages,e.selectItem=2),e.noData=0===e.currentData.length):e.noData=!0})},methods:{changeItem:function(e){this.selectItem=e,this.currentData=1===e?this.message.hasnot_read_messages:this.message.has_read_messages,this.noData=0===this.currentData.length},markall:function(){i.default.post("https://cnodejs.org/api/v1/message/mark_all",{accesstoken:this.userInfo.token},function(e){e&&e.success&&window.location.reload()})},getLastTimeStr:function(e,t){return l.default.getLastTimeStr(e,t)}},components:{nvHead:d.default}}},105:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nv-head",{attrs:{"page-type":"消息","fix-head":!0,"show-menu":e.showMenu,"message-count":e.no_read_len,"need-add":!0}}),e._v(" "),s("div",{staticClass:"page"},[s("ul",{staticClass:"tabs"},[s("li",{staticClass:"item br",class:{selected:2===e.selectItem},on:{click:function(t){e.changeItem(2)}}},[e._v("已读消息")]),e._v(" "),s("li",{staticClass:"item",class:{selected:1===e.selectItem},on:{click:function(t){e.changeItem(1)}}},[e._v("\n                未读消息\n                "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.no_read_len>0,expression:"no_read_len > 0"}],staticClass:"iconfont read",on:{click:e.markall}},[e._v("")])])]),e._v(" "),e._l(e.currentData,function(t){return s("div",{staticClass:"message markdown-body"},[s("section",{staticClass:"user"},[s("img",{staticClass:"head",attrs:{src:t.author.avatar_url}}),e._v(" "),s("div",{staticClass:"info"},[s("span",{staticClass:"cl"},[s("span",{staticClass:"name"},[e._v(e._s(t.author.loginname))]),e._v(" "),"at"===t.type?s("span",{staticClass:"name"},[e._v("在回复中@了您")]):e._e(),e._v(" "),"reply"===t.type?s("span",{staticClass:"name"},[e._v("回复了您的话题")]):e._e()]),e._v(" "),s("span",{staticClass:"cr"},[s("span",{staticClass:"name",domProps:{textContent:e._s(e.getLastTimeStr(t.reply.create_at,!0))}})])])]),e._v(" "),s("div",{staticClass:"reply_content",domProps:{innerHTML:e._s(t.reply.content)}}),e._v(" "),s("router-link",{attrs:{to:{name:"topic",params:{id:t.topic.id}}}},[s("div",{staticClass:"topic-title"},[e._v("\n                    话题："+e._s(t.topic.title)+"\n                ")])])],1)}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.noData,expression:"noData"}],staticClass:"no-data"},[s("i",{staticClass:"iconfont icon-empty"},[e._v("")]),e._v("\n            暂无数据!\n        ")])],2)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.c7167a3f12ba16deca43.js.map