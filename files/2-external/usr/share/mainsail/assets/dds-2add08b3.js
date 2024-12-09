import{A as D,R as At,L as yt,I as pt,_ as Ct,a as T,F as w,T as H,C as g}from"./Viewer-9f77fc9e.js";import{C as Ft}from"./cubemapToSphericalPolynomial-06a0076b.js";import"./index-8adf53f4.js";import"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";import"./codemirror-0a1db0c7.js";D.prototype._partialLoadFile=function(F,n,e,r,o=null){const i=t=>{e[n]=t,e._internalCount++,e._internalCount===6&&r(e)},u=(t,l)=>{o&&t&&o(t.status+" "+t.statusText,l)};this._loadFile(F,i,void 0,void 0,!0,u)};D.prototype._cascadeLoadFiles=function(F,n,e,r=null){const o=[];o._internalCount=0;for(let i=0;i<6;i++)this._partialLoadFile(e[i],i,o,n,r)};D.prototype._cascadeLoadImgs=function(F,n,e,r,o=null,i){const u=[];u._internalCount=0;for(let t=0;t<6;t++)this._partialLoadImg(r[t],t,u,F,n,e,o,i)};D.prototype._partialLoadImg=function(F,n,e,r,o,i,u=null,t){const l=At();yt(F,c=>{e[n]=c,e._internalCount++,r&&r.removePendingData(l),e._internalCount===6&&i&&i(o,e)},(c,f)=>{r&&r.removePendingData(l),u&&u(c,f)},r?r.offlineProvider:null,t),r&&r.addPendingData(l)};D.prototype.createCubeTextureBase=function(F,n,e,r,o=null,i=null,u,t=null,l=!1,a=0,s=0,c=null,f=null,G=null,y=!1,p=null){const A=c||new pt(this,7);A.isCube=!0,A.url=F,A.generateMipMaps=!r,A._lodGenerationScale=a,A._lodGenerationOffset=s,A._useSRGBBuffer=!!y&&this._caps.supportSRGBBuffers&&(this.version>1||this.isWebGPU||!!r),A!==c&&(A.label=F.substring(0,60)),this._doNotHandleContextLost||(A._extension=t,A._files=e,A._buffer=p);const _=F;this._transformTextureUrl&&!c&&(F=this._transformTextureUrl(F));const B=F.split("?")[0],P=B.lastIndexOf("."),L=t||(P>-1?B.substring(P).toLowerCase():""),O=Ct(L),k=(d,h)=>{F===_?i&&d&&i(d.status+" "+d.statusText,h):(T.Warn("Failed to load ".concat(F,", falling back to the ").concat(_)),this.createCubeTextureBase(_,n,e,!!r,o,i,u,t,l,a,s,A,f,G,y,p))};if(O)O.then(d=>{const h=R=>{f&&f(A,R),d.loadCubeData(R,A,l,o,i)};p?h(p):e&&e.length===6?d.supportCascades?this._cascadeLoadFiles(n,R=>h(R.map(X=>new Uint8Array(X))),e,i):i?i("Textures type does not support cascades."):T.Warn("Texture loader does not support cascades."):this._loadFile(F,R=>h(new Uint8Array(R)),void 0,void 0,!0,k)});else{if(!e||e.length===0)throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");this._cascadeLoadImgs(n,A,(d,h)=>{G&&G(d,h)},e,i)}return this._internalTexturesCache.push(A),A};const dt=542327876,Q=131072,V=512,Y=4,Z=64,S=131072;function N(F){return F.charCodeAt(0)+(F.charCodeAt(1)<<8)+(F.charCodeAt(2)<<16)+(F.charCodeAt(3)<<24)}function _t(F){return String.fromCharCode(F&255,F>>8&255,F>>16&255,F>>24&255)}const q=N("DXT1"),tt=N("DXT3"),et=N("DXT5"),$=N("DX10"),rt=113,at=116,nt=2,st=10,Gt=88,j=31,mt=0,ht=1,ot=2,ft=3,v=4,it=7,J=20,lt=21,bt=22,Bt=23,xt=24,Rt=25,Ot=26,Ut=28,wt=32;class C{static GetDDSInfo(n){const e=new Int32Array(n.buffer,n.byteOffset,j),r=new Int32Array(n.buffer,n.byteOffset,j+4);let o=1;e[ot]&Q&&(o=Math.max(1,e[it]));const i=e[lt],u=i===$?r[wt]:0;let t=0;switch(i){case rt:t=2;break;case at:t=1;break;case $:if(u===st){t=2;break}if(u===nt){t=1;break}}return{width:e[v],height:e[ft],mipmapCount:o,isFourCC:(e[J]&Y)===Y,isRGB:(e[J]&Z)===Z,isLuminance:(e[J]&S)===S,isCube:(e[Ut]&V)===V,isCompressed:i===q||i===tt||i===et,dxgiFormat:u,textureType:t}}static _GetHalfFloatAsFloatRGBAArrayBuffer(n,e,r,o,i,u){const t=new Float32Array(o),l=new Uint16Array(i,r);let a=0;for(let s=0;s<e;s++)for(let c=0;c<n;c++){const f=(c+s*n)*4;t[a]=w(l[f]),t[a+1]=w(l[f+1]),t[a+2]=w(l[f+2]),C.StoreLODInAlphaChannel?t[a+3]=u:t[a+3]=w(l[f+3]),a+=4}return t}static _GetHalfFloatRGBAArrayBuffer(n,e,r,o,i,u){if(C.StoreLODInAlphaChannel){const t=new Uint16Array(o),l=new Uint16Array(i,r);let a=0;for(let s=0;s<e;s++)for(let c=0;c<n;c++){const f=(c+s*n)*4;t[a]=l[f],t[a+1]=l[f+1],t[a+2]=l[f+2],t[a+3]=H(u),a+=4}return t}return new Uint16Array(i,r,o)}static _GetFloatRGBAArrayBuffer(n,e,r,o,i,u){if(C.StoreLODInAlphaChannel){const t=new Float32Array(o),l=new Float32Array(i,r);let a=0;for(let s=0;s<e;s++)for(let c=0;c<n;c++){const f=(c+s*n)*4;t[a]=l[f],t[a+1]=l[f+1],t[a+2]=l[f+2],t[a+3]=u,a+=4}return t}return new Float32Array(i,r,o)}static _GetFloatAsHalfFloatRGBAArrayBuffer(n,e,r,o,i,u){const t=new Uint16Array(o),l=new Float32Array(i,r);let a=0;for(let s=0;s<e;s++)for(let c=0;c<n;c++)t[a]=H(l[a]),t[a+1]=H(l[a+1]),t[a+2]=H(l[a+2]),C.StoreLODInAlphaChannel?t[a+3]=H(u):t[a+3]=H(l[a+3]),a+=4;return t}static _GetFloatAsUIntRGBAArrayBuffer(n,e,r,o,i,u){const t=new Uint8Array(o),l=new Float32Array(i,r);let a=0;for(let s=0;s<e;s++)for(let c=0;c<n;c++){const f=(c+s*n)*4;t[a]=g(l[f])*255,t[a+1]=g(l[f+1])*255,t[a+2]=g(l[f+2])*255,C.StoreLODInAlphaChannel?t[a+3]=u:t[a+3]=g(l[f+3])*255,a+=4}return t}static _GetHalfFloatAsUIntRGBAArrayBuffer(n,e,r,o,i,u){const t=new Uint8Array(o),l=new Uint16Array(i,r);let a=0;for(let s=0;s<e;s++)for(let c=0;c<n;c++){const f=(c+s*n)*4;t[a]=g(w(l[f]))*255,t[a+1]=g(w(l[f+1]))*255,t[a+2]=g(w(l[f+2]))*255,C.StoreLODInAlphaChannel?t[a+3]=u:t[a+3]=g(w(l[f+3]))*255,a+=4}return t}static _GetRGBAArrayBuffer(n,e,r,o,i,u,t,l,a){const s=new Uint8Array(o),c=new Uint8Array(i,r);let f=0;for(let G=0;G<e;G++)for(let y=0;y<n;y++){const p=(y+G*n)*4;s[f]=c[p+u],s[f+1]=c[p+t],s[f+2]=c[p+l],s[f+3]=c[p+a],f+=4}return s}static _ExtractLongWordOrder(n){return n===0||n===255||n===-16777216?0:1+C._ExtractLongWordOrder(n>>8)}static _GetRGBArrayBuffer(n,e,r,o,i,u,t,l){const a=new Uint8Array(o),s=new Uint8Array(i,r);let c=0;for(let f=0;f<e;f++)for(let G=0;G<n;G++){const y=(G+f*n)*3;a[c]=s[y+u],a[c+1]=s[y+t],a[c+2]=s[y+l],c+=3}return a}static _GetLuminanceArrayBuffer(n,e,r,o,i){const u=new Uint8Array(o),t=new Uint8Array(i,r);let l=0;for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=s+a*n;u[l]=t[c],l++}return u}static UploadDDSLevels(n,e,r,o,i,u,t=-1,l,a=!0){let s=null;o.sphericalPolynomial&&(s=[]);const c=!!n.getCaps().s3tc;e.generateMipMaps=i;const f=new Int32Array(r.buffer,r.byteOffset,j);let G,y,p,A=0,_,B,P,L,O=0,k=1;if(f[mt]!==dt){T.Error("Invalid magic number in DDS header");return}if(!o.isFourCC&&!o.isRGB&&!o.isLuminance){T.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");return}if(o.isCompressed&&!c){T.Error("Compressed textures are not supported on this platform.");return}let d=f[bt];_=f[ht]+4;let h=!1;if(o.isFourCC)switch(G=f[lt],G){case q:k=8,O=33777;break;case tt:k=16,O=33778;break;case et:k=16,O=33779;break;case rt:h=!0,d=64;break;case at:h=!0,d=128;break;case $:{_+=5*4;let b=!1;switch(o.dxgiFormat){case st:h=!0,d=64,b=!0;break;case nt:h=!0,d=128,b=!0;break;case Gt:o.isRGB=!0,o.isFourCC=!1,d=32,b=!0;break}if(b)break}default:T.Error(["Unsupported FourCC code:",_t(G)]);return}const R=C._ExtractLongWordOrder(f[Bt]),X=C._ExtractLongWordOrder(f[xt]),K=C._ExtractLongWordOrder(f[Rt]),ct=C._ExtractLongWordOrder(f[Ot]);h&&(O=n._getRGBABufferInternalSizedFormat(o.textureType)),P=1,f[ot]&Q&&i!==!1&&(P=Math.max(1,f[it]));const ut=l||0,M=n.getCaps();for(let b=ut;b<u;b++){for(y=f[v],p=f[ft],L=0;L<P;++L){if(t===-1||t===L){const m=t===-1?L:0;if(!o.isCompressed&&o.isFourCC){e.format=5,A=y*p*4;let x=null;if(n._badOS||n._badDesktopOS||!M.textureHalfFloat&&!M.textureFloat)d===128?(x=C._GetFloatAsUIntRGBAArrayBuffer(y,p,r.byteOffset+_,A,r.buffer,m),s&&m==0&&s.push(C._GetFloatRGBAArrayBuffer(y,p,r.byteOffset+_,A,r.buffer,m))):d===64&&(x=C._GetHalfFloatAsUIntRGBAArrayBuffer(y,p,r.byteOffset+_,A,r.buffer,m),s&&m==0&&s.push(C._GetHalfFloatAsFloatRGBAArrayBuffer(y,p,r.byteOffset+_,A,r.buffer,m))),e.type=0;else{const W=M.textureFloat&&(a&&M.textureFloatLinearFiltering||!a),z=M.textureHalfFloat&&(a&&M.textureHalfFloatLinearFiltering||!a),E=(d===128||d===64&&!z)&&W?1:(d===64||d===128&&!W)&&z?2:0;let I,U=null;switch(d){case 128:{switch(E){case 1:I=C._GetFloatRGBAArrayBuffer,U=null;break;case 2:I=C._GetFloatAsHalfFloatRGBAArrayBuffer,U=C._GetFloatRGBAArrayBuffer;break;case 0:I=C._GetFloatAsUIntRGBAArrayBuffer,U=C._GetFloatRGBAArrayBuffer;break}break}default:{switch(E){case 1:I=C._GetHalfFloatAsFloatRGBAArrayBuffer,U=null;break;case 2:I=C._GetHalfFloatRGBAArrayBuffer,U=C._GetHalfFloatAsFloatRGBAArrayBuffer;break;case 0:I=C._GetHalfFloatAsUIntRGBAArrayBuffer,U=C._GetHalfFloatAsFloatRGBAArrayBuffer;break}break}}e.type=E,x=I(y,p,r.byteOffset+_,A,r.buffer,m),s&&m==0&&s.push(U?U(y,p,r.byteOffset+_,A,r.buffer,m):x)}x&&n._uploadDataToTextureDirectly(e,x,b,m)}else if(o.isRGB)e.type=0,d===24?(e.format=4,A=y*p*3,B=C._GetRGBArrayBuffer(y,p,r.byteOffset+_,A,r.buffer,R,X,K),n._uploadDataToTextureDirectly(e,B,b,m)):(e.format=5,A=y*p*4,B=C._GetRGBAArrayBuffer(y,p,r.byteOffset+_,A,r.buffer,R,X,K,ct),n._uploadDataToTextureDirectly(e,B,b,m));else if(o.isLuminance){const x=n._getUnpackAlignement(),W=y;A=Math.floor((y+x-1)/x)*x*(p-1)+W,B=C._GetLuminanceArrayBuffer(y,p,r.byteOffset+_,A,r.buffer),e.format=1,e.type=0,n._uploadDataToTextureDirectly(e,B,b,m)}else A=Math.max(4,y)/4*Math.max(4,p)/4*k,B=new Uint8Array(r.buffer,r.byteOffset+_,A),e.type=0,n._uploadCompressedDataToTextureDirectly(e,O,y,p,B,b,m)}_+=d?y*p*(d/8):A,y*=.5,p*=.5,y=Math.max(1,y),p=Math.max(1,p)}if(l!==void 0)break}s&&s.length>0?o.sphericalPolynomial=Ft.ConvertCubeMapToSphericalPolynomial({size:f[v],right:s[0],left:s[1],up:s[2],down:s[3],front:s[4],back:s[5],format:5,type:1,gammaSpace:!1}):o.sphericalPolynomial=void 0}}C.StoreLODInAlphaChannel=!1;export{C as DDSTools};
