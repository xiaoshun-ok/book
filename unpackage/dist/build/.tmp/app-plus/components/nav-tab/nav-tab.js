(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/nav-tab/nav-tab"],{2198:function(t,i,n){"use strict";n.r(i);var e=n("6e5d"),a=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(i,t,function(){return e[t]})}(c);i["default"]=a.a},"5c1a":function(t,i,n){},"6e5d":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"navTab",props:{tabTitle:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,toView:"",isLongWidth:0}},created:function(){var i=this;t.getSystemInfo({success:function(t){i.isWidth=t.windowWidth/i.tabTitle.length,i.isLongWidth=t.windowWidth/5}}),this.toView="id0"},methods:{navClick:function(t){this.$emit("changeTab",t),this.tabClick=t,this.isLeft=t*this.isWidth},longClick:function(t){var i=t-2;i=i<=0?0:i,this.toView="id".concat(i),this.tabClick=t,this.isLeft=t*this.isLongWidth,this.$emit("changeTab",t)}}};i.default=n}).call(this,n("6e42")["default"])},7198:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement;t._self._c},c=[];n.d(i,"b",function(){return a}),n.d(i,"c",function(){return c}),n.d(i,"a",function(){return e})},"95e3":function(t,i,n){"use strict";n.r(i);var e=n("7198"),a=n("2198");for(var c in a)"default"!==c&&function(t){n.d(i,t,function(){return a[t]})}(c);n("d95d");var u,o=n("f0c5"),s=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);i["default"]=s.exports},d95d:function(t,i,n){"use strict";var e=n("5c1a"),a=n.n(e);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/nav-tab/nav-tab-create-component',
    {
        'components/nav-tab/nav-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("95e3"))
        })
    },
    [['components/nav-tab/nav-tab-create-component']]
]);
