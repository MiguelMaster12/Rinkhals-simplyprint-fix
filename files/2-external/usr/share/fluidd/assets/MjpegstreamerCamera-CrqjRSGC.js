var l=Object.defineProperty;var _=(a,e,r)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var n=(a,e,r)=>_(a,typeof e!="symbol"?e+"":e,r);import{m as u,C as p,j as g,R as f,k as h}from"./index-B6qYYCY3.js";var v=Object.defineProperty,C=Object.getOwnPropertyDescriptor,i=(a,e,r,t)=>{for(var s=t>1?void 0:t?C(e,r):e,c=a.length-1,o;c>=0;c--)(o=a[c])&&(s=(t?o(e,r,s):o(s))||s);return t&&s&&v(e,r,s),s};let m=class extends u(p){constructor(){super(...arguments);n(this,"cameraImage");n(this,"cameraImageSource","")}startPlayback(){const r=this.buildAbsoluteUrl(this.camera.stream_url||"");r.searchParams.set("cacheBust",Date.now().toString()),this.cameraImageSource=r.toString(),this.$emit("update:raw-camera-url",this.cameraImageSource)}stopPlayback(){this.cameraImageSource="",this.cameraImage.src=""}};i([f("streamingElement")],m.prototype,"cameraImage",2);m=i([g({})],m);var I=function(){var e=this,r=e._self._c;return e._self._setupProxy,r("img",{ref:"streamingElement",style:e.cameraStyle,attrs:{src:e.cameraImageSource,crossorigin:e.crossorigin}})},P=[],S=h(m,I,P,!1,null,null);const y=S.exports;export{y as default};
