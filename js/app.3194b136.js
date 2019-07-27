(function(e){function t(t){for(var s,a,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)a=o[d],r[a]&&h.push(r[a][0]),r[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},i=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-md-player/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push(["a1ec","chunk-vendors"]),n()})({"0052":function(e,t,n){"use strict";var s=n("babc"),r=n.n(s);r.a},3313:function(e,t,n){},"5f96":function(e,t,n){"use strict";var s=n("3313"),r=n.n(s);r.a},"80be":function(e,t,n){},a1ec:function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),r=n("58ca"),i=n("bb71"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{class:[e.$route.name]},[n("v-content",[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:"",md6:""}},[n("h1",{staticClass:"text-xs-center mt-2"},[n("a",{attrs:{href:"https://github.com/meyt/vue-md-player",target:"_blank"}}),e._v("vue-md-player demo")]),n("router-view")],1)],1)],1)],1)},o=[],l=(n("c8bd"),n("2877")),c=n("6544"),u=n.n(c),d=n("7496"),h=n("549c"),m=n("0e8f"),v=n("a722"),p={},g=Object(l["a"])(p,a,o,!1,null,null,null),f=g.exports;u()(g,{VApp:d["a"],VContent:h["a"],VFlex:m["a"],VLayout:v["a"]});var y=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-card",{staticClass:"mb-3"},[n("v-card-text",[n("v-layout",{staticClass:"mb-3"},[n("v-flex",{staticClass:"px-1"},[n("v-text-field",{attrs:{label:"Audio source","hide-details":""},model:{value:e.audioSrc,callback:function(t){e.audioSrc=t},expression:"audioSrc"}})],1)],1),n("pre",{domProps:{textContent:e._s(e.snippetTemplate)}})],1),n("audio-player",[n("source",{attrs:{src:e.audioSrc}})])],1),n("v-card",[n("v-card-text",[n("v-layout",{staticClass:"mb-3"},[n("v-flex",{staticClass:"px-1"},[n("v-text-field",{attrs:{label:"Video source","hide-details":""},model:{value:e.videoSrc,callback:function(t){e.videoSrc=t},expression:"videoSrc"}})],1)],1),n("pre",{domProps:{textContent:e._s(e.videoSnippet)}})],1),n("video-player",[n("source",{attrs:{src:e.videoSrc}})])],1)],1)},w=[],x={data(){return{audioSrc:"http://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3",videoSrc:"https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4"}},computed:{snippetTemplate(){return`<audio-player>\n  <source src="${this.audioSrc}" />\n</audio-player>\n\n\nimport { audioPlayer } from 'vue-md-player'\nimport 'vue-md-player/dist/vue-md-player.css'\nexport default {\n  components: {\n    audioPlayer\n  }\n}`},videoSnippet(){return`<video-player>\n  <source src="${this.videoSrc}" />\n</video-player>\n\nimport { videoPlayer } from 'vue-md-player'\nimport 'vue-md-player/dist/vue-md-player.css'\nexport default {\n  components: {\n    videoPlayer\n  }\n}`}},metaInfo(){return{title:"vue-md-player demo"}}},S=x,_=(n("0052"),n("b0af")),E=n("99d9"),L=n("a523"),C=n("2677"),P=Object(l["a"])(S,b,w,!1,null,null,null),k=P.exports;u()(P,{VCard:_["a"],VCardText:E["a"],VContainer:L["a"],VFlex:m["a"],VLayout:v["a"],VTextField:C["a"]}),s["a"].use(y["a"]);var $=new y["a"]({mode:"hash",base:"/vue-md-player/",routes:[{path:"/",name:"home",component:k}]}),T=n("2f62");s["a"].use(T["a"]);var M=new T["a"].Store({state:{},mutations:{},actions:{}}),z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-container audio"},[n("div",{staticClass:"player"},[n("audio",{ref:"media"},[e.canLoad?e._t("default"):e._e()],2)]),n("div",{staticClass:"control-bar visible"},[n("scrubber",{attrs:{min:0,max:e.duration,light:"",loading:e.isInProgress},on:{input:function(t){return e.seek(e.current)}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),n("div",{staticClass:"layout"},[n("button",{staticClass:"btn",attrs:{icon:"",large:""},on:{click:function(t){return e.unmuteAndTogglePlay()}}},[e.playing?n("pause-icon"):e.ended?n("replay-icon"):n("play-icon")],1),n("div",{staticClass:"spacer"}),n("div",{staticClass:"flex times"},[n("span",[e._v(e._s(e.currentTime))]),n("span",[e._v(" / ")]),n("span",[e._v(e._s(e.durationTime))])])])],1)])},F=[],O={props:{autoLoad:{type:Boolean,default:!0}},data(){return{canLoad:!1,loading:!1,playing:!1,paused:!1,seeking:!1,ended:!1,muted:!0,firstPlay:!1,duration:null,current:0}},computed:{isInProgress(){return this.loading||this.seeking}},watch:{loading(e){this.$emit("loading",e)},playing(e){this.$emit("playing",e)},paused(e){this.$emit("paused",e)},current(e){this.$emit("current",e)},duration(e){this.$emit("duration",e)},muted(e){this.$emit("muted",e)},seeking(e){this.$emit("seeking",e)},ended(e){this.$emit("ended",e)}},mounted(){const e=this.$refs.media;e.controls=!1,e.muted=!0,e.addEventListener("volumechange",this.onVolumeChange),e.addEventListener("loadstart",this.onLoadStart),e.addEventListener("onwaiting",this.onWaiting),e.addEventListener("seeking",this.onSeeking),e.addEventListener("seeked",this.onSeeked),e.addEventListener("ended",this.onEnded),e.addEventListener("suspend",this.onSuspended),e.addEventListener("playing",this.onPlaying),e.addEventListener("pause",this.onPause),e.addEventListener("abort",this.onAbort),e.addEventListener("durationchange",this.onDurationChange),e.addEventListener("progress",this.onProgress),e.addEventListener("timeupdate",this.onTimeUpdate),this.autoLoad&&(this.canLoad=!0,this.load())},beforeDestroy(){const e=this.$refs.media;e.removeEventListener("volumechange",this.onVolumeChange),e.removeEventListener("loadstart",this.onLoadStart),e.removeEventListener("onwaiting",this.onWaiting),e.removeEventListener("seeking",this.onSeeking),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("ended",this.onEnded),e.removeEventListener("suspend",this.onSuspended),e.removeEventListener("stalled",this.onStalled),e.removeEventListener("playing",this.onPlaying),e.removeEventListener("pause",this.onPause),e.removeEventListener("abort",this.onAbort),e.removeEventListener("durationchange",this.onDurationChange),e.removeEventListener("progress",this.onProgress),e.removeEventListener("timeupdate",this.onTimeUpdate)},methods:{onVolumeChange(){this.$emit("volume",this.$refs.media.volume)},onLoadStart(){this.loading=!0},onWaiting(){this.loading=!0},onSeeking(){this.seeking=!0},onSeeked(){4===this.$refs.media.readyState&&(this.loading=!1),this.current=this.$refs.media.currentTime,this.seeking=!1},onEnded(){this.ended=!0},onSuspended(){this.loading=!1},onStalled(){this.loading=!0,this.pause=!0},onPlaying(){this.playing=!0,this.paused=!1,this.ended=!1,this.current=this.$refs.media.currentTime,4===this.$refs.media.readyState&&(this.loading=!1)},onPause(){this.playing=!1,this.paused=!0,this.current=this.$refs.media.currentTime},onAbort(){this.loading=!1},onDurationChange(){this.duration=this.$refs.media.duration},onProgress(){this.current=this.$refs.media.currentTime},onTimeUpdate(){this.current=this.$refs.media.currentTime},mute(){this.$refs.media.muted=!0,this.muted=!0},unmute(){this.$refs.media.muted=!1,this.muted=!1},play(){this.$refs.media.play()},pause(){this.$refs.media.pause()},togglePlay(){this.ended&&this.seek(0),this.playing?this.pause():this.play()},toggleMute(){this.muted?this.unmute():this.mute()},seek(e){this.$refs.media.currentTime=e},load(){this.$refs.media.load(),this.resetFirstPlay()},unmuteAndTogglePlay(){this.firstPlay||(this.unmute(),this.firstPlay=!0),this.togglePlay()},unmuteOrTogglePlay(){!this.firstPlay&&(this.unmute(),this.firstPlay=!0,this.playing)||this.togglePlay()},resetFirstPlay(){this.firstPlay=!1}}},j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrubber",class:{scrubber:!0,light:e.light,loading:e.loading}},[n("div",{staticClass:"bar"}),n("div",{staticClass:"progress",style:{width:e.percent+"%"}}),n("div",{staticClass:"handler",style:{left:e.percent+"%"}})])},V=[],H={props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},light:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},data(){return{percent:0,dragging:!1}},watch:{value(e,t){e!==t&&(this.percent=100*(e-this.min)/(this.max-this.min))}},methods:{isScrubber(e){return[e,e.parentNode].includes(this.$refs.scrubber)},dragStart(e){this.isScrubber(e.target)&&(e.preventDefault(),this.dragging=!0)},drag(e){this.dragging&&(e.preventDefault(),this.updateProgress(e))},dragEnd(e){this.dragging&&e.stopPropagation(),this.dragging=!1,this.updateProgress(e)},updateProgress(e){if(!this.isScrubber(e.target))return;if("touchend"===e.type)return;const t="touchmove"===e.type?e.touches[0].clientX:e.clientX,n=this.$refs.scrubber,s=n.clientWidth;let r=t-n.getBoundingClientRect().left;r>=s&&(r=s),r<0&&(r=0),this.percent=100*r/s,this.$emit("input",this.min+(this.max-this.min)*this.percent/100),this.$emit("change")}},mounted(){window.addEventListener("touchstart",this.dragStart,!1),window.addEventListener("touchend",this.dragEnd,!1),window.addEventListener("touchmove",this.drag,{passive:!1}),window.addEventListener("mousedown",this.dragStart,!1),window.addEventListener("mousemove",this.drag,!1),window.addEventListener("click",this.dragEnd,{capture:!0})},beforeDestroy(){window.removeEventListener("touchstart",this.dragStart,!1),window.removeEventListener("touchend",this.dragEnd,!1),window.removeEventListener("touchmove",this.drag,!1),window.removeEventListener("mousedown",this.dragStart,!1),window.removeEventListener("mousemove",this.drag,!1),window.removeEventListener("click",this.dragEnd)}},I=H,A=(n("c2cd"),Object(l["a"])(I,j,V,!1,null,null,null)),D=A.exports,q={functional:!0,render(e,t){const{_c:n,_v:s,data:r,children:i=[]}=t,{class:a,staticClass:o,style:l,staticStyle:c,attrs:u={},...d}=r;return n("svg",{class:[a,o],style:[l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...d},i.concat([n("path",{attrs:{d:"M8 5v14l11-7z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}},N={functional:!0,render(e,t){const{_c:n,_v:s,data:r,children:i=[]}=t,{class:a,staticClass:o,style:l,staticStyle:c,attrs:u={},...d}=r;return n("svg",{class:[a,o],style:[l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...d},i.concat([n("path",{attrs:{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}},R={functional:!0,render(e,t){const{_c:n,_v:s,data:r,children:i=[]}=t,{class:a,staticClass:o,style:l,staticStyle:c,attrs:u={},...d}=r;return n("svg",{class:[a,o],style:[l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...d},i.concat([n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}})]))}},B={functional:!0,render(e,t){const{_c:n,_v:s,data:r,children:i=[]}=t,{class:a,staticClass:o,style:l,staticStyle:c,attrs:u={},...d}=r;return n("svg",{class:[a,o],style:[l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...d},i.concat([n("path",{attrs:{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}},U={functional:!0,render(e,t){const{_c:n,_v:s,data:r,children:i=[]}=t,{class:a,staticClass:o,style:l,staticStyle:c,attrs:u={},...d}=r;return n("svg",{class:[a,o],style:[l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...d},i.concat([n("path",{attrs:{d:"M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}},W=n("4106"),J=n.n(W);function X(e){var t=Math.floor(e/3600),n=e%3600,s=Math.floor(n/60),r=n%60,i=Math.ceil(r);return t=J()(t,2,"0"),s=J()(s,2,"0"),i=J()(i,2,"0"),"00"===t?[s,i]:[t,s,i]}n("f922");var G={mixins:[O],components:{playIcon:q,pauseIcon:N,replayIcon:R,volumeUpIcon:B,volumeOffIcon:U,scrubber:D},data(){return{controlbar:!1}},computed:{durationTime(){return X(this.duration).join(":")},currentTime(){return X(this.current).join(":")}},methods:{}},K=G,Q=Object(l["a"])(K,z,F,!1,null,null,null),Y=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"mediaPlayer",class:e.classes,on:{mouseover:e.onMouseHover,dblclick:function(t){return t.preventDefault(),function(){return e.doubleClickFullscreen?e.toggleFullScreen():null}()}}},[n("div",{staticClass:"player",on:{click:function(t){return t.preventDefault(),e.unmuteOrTogglePlay(t)}}},[n("video",{ref:"media",attrs:{width:e.width,height:e.height}},[e.canLoad?e._t("default"):e._e()],2)]),e.isInProgress?n("preloader",{staticClass:"preloader",nativeOn:{click:function(t){return e.unmuteOrTogglePlay()}}}):e._e(),n("div",{class:{"control-bar":!0,visible:e.controlbar||e.paused}},[n("scrubber",{attrs:{min:0,max:e.duration,loading:e.isInProgress},on:{input:function(t){return e.seek(e.current)}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),n("div",{staticClass:"layout"},[n("button",{staticClass:"btn",on:{click:function(t){return e.unmuteAndTogglePlay()}}},[e.playing?n("pause-icon"):e.ended?n("replay-icon"):n("play-icon")],1),n("div",{staticClass:"spacer"}),n("div",{staticClass:"flex times"},[n("span",[e._v(e._s(e.currentTime))]),n("span",[e._v(" / ")]),n("span",[e._v(e._s(e.durationTime))])]),n("button",{staticClass:"btn",on:{click:function(t){return e.toggleMute()}}},[e.muted?n("volume-off-icon"):n("volume-up-icon")],1),n("button",{staticClass:"btn",on:{click:function(t){return e.toggleFullScreen()}}},[e.fullscreen?n("fullscreen-exit-icon"):n("fullscreen-icon")],1)])],1)],1)},ee=[],te={functional:!0,render(e,t){const{_c:n,_v:s,data:r,children:i=[]}=t,{class:a,staticClass:o,style:l,staticStyle:c,attrs:u={},...d}=r;return n("svg",{class:[a,o],style:[l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...d},i.concat([n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}})]))}},ne={functional:!0,render(e,t){const{_c:n,_v:s,data:r,children:i=[]}=t,{class:a,staticClass:o,style:l,staticStyle:c,attrs:u={},...d}=r;return n("svg",{class:[a,o],style:[l,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...d},i.concat([n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}})]))}},se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"2","stroke-miterlimit":"10"}})])])},re=[],ie=(n("5f96"),{}),ae=Object(l["a"])(ie,se,re,!1,null,null,null),oe=ae.exports,le={mixins:[O],props:{width:{type:Number,default:null},height:{type:Number,default:null},doubleClickFullscreen:{type:Boolean,default:!1}},components:{playIcon:q,pauseIcon:N,replayIcon:R,volumeUpIcon:B,volumeOffIcon:U,fullscreenIcon:te,fullscreenExitIcon:ne,preloader:oe,scrubber:D},data(){return{fullscreen:!1,controlbar:!1}},computed:{classes(){return{"player-container video":!0,fullscreen:this.fullscreen}},durationTime(){return X(this.duration).join(":")},currentTime(){return X(this.current).join(":")}},methods:{onMouseHover(){this.controlbar=!0,window.clearTimeout(this.__controlbarTimeout),this.__controlbarTimeout=window.setTimeout(()=>{this.controlbar=!1},3e3)},exitFullScreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),this.fullscreen=!1},enterFullScreen(){const e=this.$refs.mediaPlayer;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!0},toggleFullScreen(){this.fullscreen?this.exitFullScreen():this.enterFullScreen()}}},ce=le,ue=Object(l["a"])(ce,Z,ee,!1,null,null,null),de=ue.exports;n("da64"),n("bf40");s["a"].use(i["a"],{iconfont:"md"}),s["a"].use(r["a"],{refreshOnceOnNavigation:!0}),s["a"].component("audio-player",Y),s["a"].component("video-player",de),s["a"].config.productionTip=!1,new s["a"]({router:$,store:M,render:e=>e(f)}).$mount("#app")},add0:function(e,t,n){},babc:function(e,t,n){},c2cd:function(e,t,n){"use strict";var s=n("80be"),r=n.n(s);r.a},c8bd:function(e,t,n){"use strict";var s=n("add0"),r=n.n(s);r.a},f922:function(e,t,n){}});
//# sourceMappingURL=app.3194b136.js.map