webpackJsonp([1],{"2psf":function(t,n){},Jmt5:function(t,n){},M93x:function(t,n,e){"use strict";function o(t){e("Nkge")}function s(t){e("2psf")}var r=e("DnVi"),i={name:"VueButton",data:function(){return{buttonText:"Click Me To Start"}}},c=function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{staticClass:"btn btn-primary"},[t._v(t._s(t.buttonText))])},a=[],u={render:c,staticRenderFns:a},l=u,f=e("VU/8"),p=f(i,l,!1,null,null,null),m=p.exports,d=new r.a({accessToken:"51871fe7b81047f6a01af70e786a0efa"}),g=void 0,h="",v={name:"HelloWorld",components:{VueButton:m},data:function(){return{msg:"Ask Dose"}},methods:{startStream:function(){var t=this;"webkitSpeechRecognition"in window?(g=new webkitSpeechRecognition,g.continuous=!0,g.interimResults=!1,g.onstart=function(){h=""},g.onresult=function(n){t.msg="";for(var e=n.resultIndex;e<n.results.length;e+=1)h+=n.results[e][0].transcript},g.onerror=function(t){console.log(t)},g.onend=function(){d.textRequest(h).then(function(n){t.$nextTick(function(){t.msg=n.result.fulfillment.speech}),window.open(n.result.fulfillment.messages[1].payload.doseUrl)}).catch(function(n){t.$nextTick(function(){t.msg="oops, something went wrong. Please Refresh the page and try again."}),console.log(n)})},g.lang="en-US"):this.$nextTick(function(){t.msg="Your Browser Doesn't support voice recognition.\n                      Please use Google Chrome for best results"}),g.start(),setTimeout(function(){g.stop()},4e3)}}},w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello col-md-6 col-md-offset-3"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("VueButton",{nativeOn:{click:function(n){t.startStream(n)}}})],1)},x=[],_={render:w,staticRenderFns:x},b=_,k=e("VU/8"),R=o,T=k(v,b,!1,R,"data-v-469b2efe",null),V=T.exports,C={name:"app",components:{HelloWorld:V}},N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("div",{staticClass:"row"},[e("HelloWorld")],1)])},S=[],$={render:N,staticRenderFns:S},y=$,H=e("VU/8"),U=s,B=H(C,y,!1,U,null,null);n.a=B.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t){var n=e("7+uW"),o=e("M93x"),s=e("7t+N"),r=e.n(s),i=e("Jmt5");e.n(i);t.jQuery=r.a;e("gNGx");n.a.config.productionTip=!0,new n.a({el:"#app",template:"<App/>",components:{App:o.a}})}.call(n,e("DuR2"))},Nkge:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.ee3c1caf053d54214f7d.js.map