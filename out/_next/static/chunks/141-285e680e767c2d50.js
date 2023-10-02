"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{2154:function(n,t,i){i.d(t,{Z:function(){return e},R:function(){return u}});var r=i(2765);function e(n,t){return"string"==typeof t&&(t=n.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return o(n,t)})}:o(n,t)}function o(n,t){var i=t.id,r=t.bbox,e=null==t.properties?{}:t.properties,o=u(n,t);return null==i&&null==r?{type:"Feature",properties:e,geometry:o}:null==r?{type:"Feature",id:i,properties:e,geometry:o}:{type:"Feature",id:i,bbox:r,properties:e,geometry:o}}function u(n,t){var i=(0,r.Z)(n.transform),e=n.arcs;function o(n){return i(n)}function u(n){for(var t=[],r=0,o=n.length;r<o;++r)!function(n,t){t.length&&t.pop();for(var r=e[n<0?~n:n],o=0,u=r.length;o<u;++o)t.push(i(r[o],o));n<0&&function(n,t){for(var i,r=n.length,e=r-t;e<--r;)i=n[e],n[e++]=n[r],n[r]=i}(t,u)}(n[r],t);return t.length<2&&t.push(t[0]),t}function l(n){for(var t=u(n);t.length<4;)t.push(t[0]);return t}function a(n){return n.map(l)}return function n(t){var i,r=t.type;switch(r){case"GeometryCollection":return{type:r,geometries:t.geometries.map(n)};case"Point":i=o(t.coordinates);break;case"MultiPoint":i=t.coordinates.map(o);break;case"LineString":i=u(t.arcs);break;case"MultiLineString":i=t.arcs.map(u);break;case"Polygon":i=a(t.arcs);break;case"MultiPolygon":i=t.arcs.map(a);break;default:return null}return{type:r,coordinates:i}}(t)}},7645:function(n,t,i){i.d(t,{Z:function(){return r}});function r(n){return n}},2765:function(n,t,i){i.d(t,{Z:function(){return e}});var r=i(7645);function e(n){if(null==n)return r.Z;var t,i,e=n.scale[0],o=n.scale[1],u=n.translate[0],l=n.translate[1];return function(n,r){r||(t=i=0);var a=2,f=n.length,c=Array(f);for(c[0]=(t+=n[0])*e+u,c[1]=(i+=n[1])*o+l;a<f;)c[a]=n[a],++a;return c}}},266:function(n,t,i){i.d(t,{dU:function(){return r}});class r{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){let t=this._partials,i=0;for(let r=0;r<this._n&&r<32;r++){let e=t[r],o=n+e,u=Math.abs(n)<Math.abs(e)?n-(o-e):e-(o-n);u&&(t[i++]=u),n=o}return t[i]=n,this._n=i+1,this}valueOf(){let n=this._partials,t=this._n,i,r,e,o=0;if(t>0){for(o=n[--t];t>0&&(o=(i=o)+(r=n[--t]),!(e=r-(o-i))););t>0&&(e<0&&n[t-1]<0||e>0&&n[t-1]>0)&&(i=o+(r=2*e),r==i-o&&(o=i))}return o}}},554:function(n,t){t.Z=n=>n},5432:function(n,t,i){i.d(t,{BZ:function(){return a},Ho:function(){return r},Kh:function(){return y},O$:function(){return d},RW:function(){return f},Wn:function(){return p},Xx:function(){return g},ZR:function(){return E},_b:function(){return m},aW:function(){return e},fv:function(){return h},mC:function(){return v},ou:function(){return u},pi:function(){return o},pu:function(){return l},uR:function(){return c},z4:function(){return s}});var r=1e-6,e=1e-12,o=Math.PI,u=o/2,l=o/4,a=2*o,f=180/o,c=o/180,p=Math.abs,s=Math.atan,h=Math.atan2,v=Math.cos,d=Math.sin,g=Math.sign||function(n){return n>0?1:n<0?-1:0},m=Math.sqrt;function y(n){return n>1?0:n<-1?o:Math.acos(n)}function E(n){return n>1?u:n<-1?-u:Math.asin(n)}},6957:function(n,t,i){i.d(t,{Z:function(){return r}});function r(){}},6133:function(n,t,i){var r=i(6957),e=1/0,o=1/0,u=-1/0,l=u,a={point:function(n,t){n<e&&(e=n),n>u&&(u=n),t<o&&(o=t),t>l&&(l=t)},lineStart:r.Z,lineEnd:r.Z,polygonStart:r.Z,polygonEnd:r.Z,result:function(){var n=[[e,o],[u,l]];return u=l=-(o=e=1/0),n}};t.Z=a},8828:function(n,t,i){let r,e,o,u;i.d(t,{Z:function(){return no}});var l,a,f,c,p=i(554),s=i(9378),h=i(266),v=i(5432),d=i(6957),g=new h.dU,m=new h.dU,y={point:d.Z,lineStart:d.Z,lineEnd:d.Z,polygonStart:function(){y.lineStart=E,y.lineEnd=Z},polygonEnd:function(){y.lineStart=y.lineEnd=y.point=d.Z,g.add((0,v.Wn)(m)),m=new h.dU},result:function(){var n=g/2;return g=new h.dU,n}};function E(){y.point=S}function S(n,t){y.point=_,l=f=n,a=c=t}function _(n,t){m.add(c*n-f*t),f=n,c=t}function Z(){_(l,a)}var R,W,$,x,H=i(6133),M=0,b=0,C=0,O=0,w=0,N=0,k=0,B=0,P=0,z={point:U,lineStart:F,lineEnd:L,polygonStart:function(){z.lineStart=A,z.lineEnd=G},polygonEnd:function(){z.point=U,z.lineStart=F,z.lineEnd=L},result:function(){var n=P?[k/P,B/P]:N?[O/N,w/N]:C?[M/C,b/C]:[NaN,NaN];return M=b=C=O=w=N=k=B=P=0,n}};function U(n,t){M+=n,b+=t,++C}function F(){z.point=X}function X(n,t){z.point=j,U($=n,x=t)}function j(n,t){var i=n-$,r=t-x,e=(0,v._b)(i*i+r*r);O+=e*($+n)/2,w+=e*(x+t)/2,N+=e,U($=n,x=t)}function L(){z.point=U}function A(){z.point=T}function G(){K(R,W)}function T(n,t){z.point=K,U(R=$=n,W=x=t)}function K(n,t){var i=n-$,r=t-x,e=(0,v._b)(i*i+r*r);O+=e*($+n)/2,w+=e*(x+t)/2,N+=e,k+=(e=x*n-$*t)*($+n),B+=e*(x+t),P+=3*e,U($=n,x=t)}function q(n){this._context=n}q.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,v.BZ)}},result:d.Z};var I,Y,D,J,Q,V=new h.dU,nn={point:d.Z,lineStart:function(){nn.point=nt},lineEnd:function(){I&&ni(Y,D),nn.point=d.Z},polygonStart:function(){I=!0},polygonEnd:function(){I=null},result:function(){var n=+V;return V=new h.dU,n}};function nt(n,t){nn.point=ni,Y=J=n,D=Q=t}function ni(n,t){J-=n,Q-=t,V.add((0,v._b)(J*J+Q*Q)),J=n,Q=t}class nr{constructor(n){this._append=null==n?ne:function(n){let t=Math.floor(n);if(!(t>=0))throw RangeError(`invalid digits: ${n}`);if(t>15)return ne;if(t!==r){let n=10**t;r=t,e=function(t){let i=1;this._+=t[0];for(let r=t.length;i<r;++i)this._+=Math.round(arguments[i]*n)/n+t[i]}}return e}(n),this._radius=4.5,this._=""}pointRadius(n){return this._radius=+n,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(n,t){switch(this._point){case 0:this._append`M${n},${t}`,this._point=1;break;case 1:this._append`L${n},${t}`;break;default:if(this._append`M${n},${t}`,this._radius!==o||this._append!==e){let n=this._radius,t=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,o=n,e=this._append,u=this._,this._=t}this._+=u}}result(){let n=this._;return this._="",n.length?n:null}}function ne(n){let t=1;this._+=n[0];for(let i=n.length;t<i;++t)this._+=arguments[t]+n[t]}function no(n,t){let i=3,r=4.5,e,o;function u(n){return n&&("function"==typeof r&&o.pointRadius(+r.apply(this,arguments)),(0,s.Z)(n,e(o))),o.result()}return u.area=function(n){return(0,s.Z)(n,e(y)),y.result()},u.measure=function(n){return(0,s.Z)(n,e(nn)),nn.result()},u.bounds=function(n){return(0,s.Z)(n,e(H.Z)),H.Z.result()},u.centroid=function(n){return(0,s.Z)(n,e(z)),z.result()},u.projection=function(t){return arguments.length?(e=null==t?(n=null,p.Z):(n=t).stream,u):n},u.context=function(n){return arguments.length?(o=null==n?(t=null,new nr(i)):new q(t=n),"function"!=typeof r&&o.pointRadius(r),u):t},u.pointRadius=function(n){return arguments.length?(r="function"==typeof n?n:(o.pointRadius(+n),+n),u):r},u.digits=function(n){if(!arguments.length)return i;if(null==n)i=null;else{let t=Math.floor(n);if(!(t>=0))throw RangeError(`invalid digits: ${n}`);i=t}return null===t&&(o=new nr(i)),u},u.projection(n).digits(i).context(t)}},5848:function(n,t,i){i.d(t,{Z:function(){return K}});var r=i(5432),e=i(6957);function o(){var n,t=[];return{point:function(t,i,r){n.push([t,i,r])},lineStart:function(){t.push(n=[])},lineEnd:e.Z,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var i=t;return t=[],n=null,i}}}function u(n,t){return(0,r.Wn)(n[0]-t[0])<r.Ho&&(0,r.Wn)(n[1]-t[1])<r.Ho}function l(n,t,i,r){this.x=n,this.z=t,this.o=i,this.e=r,this.v=!1,this.n=this.p=null}function a(n,t,i,e,o){var a,c,p=[],s=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,i,e=n[0],f=n[t];if(u(e,f)){if(!e[2]&&!f[2]){for(o.lineStart(),a=0;a<t;++a)o.point((e=n[a])[0],e[1]);o.lineEnd();return}f[0]+=2*r.Ho}p.push(i=new l(e,n,null,!0)),s.push(i.o=new l(e,null,i,!1)),p.push(i=new l(f,n,null,!1)),s.push(i.o=new l(f,null,i,!0))}}),p.length){for(s.sort(t),f(p),f(s),a=0,c=s.length;a<c;++a)s[a].e=i=!i;for(var h,v,d=p[0];;){for(var g=d,m=!0;g.v;)if((g=g.n)===d)return;h=g.z,o.lineStart();do{if(g.v=g.o.v=!0,g.e){if(m)for(a=0,c=h.length;a<c;++a)o.point((v=h[a])[0],v[1]);else e(g.x,g.n.x,1,o);g=g.n}else{if(m)for(a=(h=g.p.z).length-1;a>=0;--a)o.point((v=h[a])[0],v[1]);else e(g.x,g.p.x,-1,o);g=g.p}h=(g=g.o).z,m=!m}while(!g.v);o.lineEnd()}}}function f(n){if(t=n.length){for(var t,i,r=0,e=n[0];++r<t;)e.n=i=n[r],i.p=e,e=i;e.n=i=n[0],i.p=e}}var c=i(266);function p(n){return[(0,r.fv)(n[1],n[0]),(0,r.ZR)(n[2])]}function s(n){var t=n[0],i=n[1],e=(0,r.mC)(i);return[e*(0,r.mC)(t),e*(0,r.O$)(t),(0,r.O$)(i)]}function h(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function v(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function d(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function g(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function m(n){var t=(0,r._b)(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function y(n){return(0,r.Wn)(n[0])<=r.pi?n[0]:(0,r.Xx)(n[0])*(((0,r.Wn)(n[0])+r.pi)%r.BZ-r.pi)}function E(n){return Array.from(function*(n){for(let t of n)yield*t}(n))}function S(n,t,i,e){return function(u){var l,f,p,h=t(u),d=o(),g=t(d),S=!1,R={point:W,lineStart:x,lineEnd:H,polygonStart:function(){R.point=M,R.lineStart=b,R.lineEnd=C,f=[],l=[]},polygonEnd:function(){R.point=W,R.lineStart=x,R.lineEnd=H,f=E(f);var n=function(n,t){var i=y(t),e=t[1],o=(0,r.O$)(e),u=[(0,r.O$)(i),-(0,r.mC)(i),0],l=0,a=0,f=new c.dU;1===o?e=r.ou+r.Ho:-1===o&&(e=-r.ou-r.Ho);for(var p=0,h=n.length;p<h;++p)if(g=(d=n[p]).length)for(var d,g,E=d[g-1],S=y(E),_=E[1]/2+r.pu,Z=(0,r.O$)(_),R=(0,r.mC)(_),W=0;W<g;++W,S=x,Z=M,R=b,E=$){var $=d[W],x=y($),H=$[1]/2+r.pu,M=(0,r.O$)(H),b=(0,r.mC)(H),C=x-S,O=C>=0?1:-1,w=O*C,N=w>r.pi,k=Z*M;if(f.add((0,r.fv)(k*O*(0,r.O$)(w),R*b+k*(0,r.mC)(w))),l+=N?C+O*r.BZ:C,N^S>=i^x>=i){var B=v(s(E),s($));m(B);var P=v(u,B);m(P);var z=(N^C>=0?-1:1)*(0,r.ZR)(P[2]);(e>z||e===z&&(B[0]||B[1]))&&(a+=N^C>=0?1:-1)}}return(l<-r.Ho||l<r.Ho&&f<-r.aW)^1&a}(l,e);f.length?(S||(u.polygonStart(),S=!0),a(f,Z,n,i,u)):n&&(S||(u.polygonStart(),S=!0),u.lineStart(),i(null,null,1,u),u.lineEnd()),S&&(u.polygonEnd(),S=!1),f=l=null},sphere:function(){u.polygonStart(),u.lineStart(),i(null,null,1,u),u.lineEnd(),u.polygonEnd()}};function W(t,i){n(t,i)&&u.point(t,i)}function $(n,t){h.point(n,t)}function x(){R.point=$,h.lineStart()}function H(){R.point=W,h.lineEnd()}function M(n,t){p.push([n,t]),g.point(n,t)}function b(){g.lineStart(),p=[]}function C(){M(p[0][0],p[0][1]),g.lineEnd();var n,t,i,r,e=g.clean(),o=d.result(),a=o.length;if(p.pop(),l.push(p),p=null,a){if(1&e){if((t=(i=o[0]).length-1)>0){for(S||(u.polygonStart(),S=!0),u.lineStart(),n=0;n<t;++n)u.point((r=i[n])[0],r[1]);u.lineEnd()}return}a>1&&2&e&&o.push(o.pop().concat(o.shift())),f.push(o.filter(_))}}return R}}function _(n){return n.length>1}function Z(n,t){return((n=n.x)[0]<0?n[1]-r.ou-r.Ho:r.ou-n[1])-((t=t.x)[0]<0?t[1]-r.ou-r.Ho:r.ou-t[1])}var R=S(function(){return!0},function(n){var t,i=NaN,e=NaN,o=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,l){var a,f,c,p,s,h,v=u>0?r.pi:-r.pi,d=(0,r.Wn)(u-i);(0,r.Wn)(d-r.pi)<r.Ho?(n.point(i,e=(e+l)/2>0?r.ou:-r.ou),n.point(o,e),n.lineEnd(),n.lineStart(),n.point(v,e),n.point(u,e),t=0):o!==v&&d>=r.pi&&((0,r.Wn)(i-o)<r.Ho&&(i-=o*r.Ho),(0,r.Wn)(u-v)<r.Ho&&(u-=v*r.Ho),a=i,f=e,c=u,h=(0,r.O$)(a-c),e=(0,r.Wn)(h)>r.Ho?(0,r.z4)(((0,r.O$)(f)*(s=(0,r.mC)(l))*(0,r.O$)(c)-(0,r.O$)(l)*(p=(0,r.mC)(f))*(0,r.O$)(a))/(p*s*h)):(f+l)/2,n.point(o,e),n.lineEnd(),n.lineStart(),n.point(v,e),t=0),n.point(i=u,e=l),o=v},lineEnd:function(){n.lineEnd(),i=e=NaN},clean:function(){return 2-t}}},function(n,t,i,e){var o;if(null==n)o=i*r.ou,e.point(-r.pi,o),e.point(0,o),e.point(r.pi,o),e.point(r.pi,0),e.point(r.pi,-o),e.point(0,-o),e.point(-r.pi,-o),e.point(-r.pi,0),e.point(-r.pi,o);else if((0,r.Wn)(n[0]-t[0])>r.Ho){var u=n[0]<t[0]?r.pi:-r.pi;o=i*u/2,e.point(-u,o),e.point(0,o),e.point(u,o)}else e.point(t[0],t[1])},[-r.pi,-r.ou]);function W(n,t){t=s(t),t[0]-=n,m(t);var i=(0,r.Kh)(-t[1]);return((0>-t[2]?-i:i)+r.BZ-r.Ho)%r.BZ}function $(n,t){function i(i,r){return t((i=n(i,r))[0],i[1])}return n.invert&&t.invert&&(i.invert=function(i,r){return(i=t.invert(i,r))&&n.invert(i[0],i[1])}),i}var x=i(554);function H(n,t){return(0,r.Wn)(n)>r.pi&&(n-=Math.round(n/r.BZ)*r.BZ),[n,t]}function M(n){return function(t,i){return t+=n,(0,r.Wn)(t)>r.pi&&(t-=Math.round(t/r.BZ)*r.BZ),[t,i]}}function b(n){var t=M(n);return t.invert=M(-n),t}function C(n,t){var i=(0,r.mC)(n),e=(0,r.O$)(n),o=(0,r.mC)(t),u=(0,r.O$)(t);function l(n,t){var l=(0,r.mC)(t),a=(0,r.mC)(n)*l,f=(0,r.O$)(n)*l,c=(0,r.O$)(t),p=c*i+a*e;return[(0,r.fv)(f*o-p*u,a*i-c*e),(0,r.ZR)(p*o+f*u)]}return l.invert=function(n,t){var l=(0,r.mC)(t),a=(0,r.mC)(n)*l,f=(0,r.O$)(n)*l,c=(0,r.O$)(t),p=c*o-f*u;return[(0,r.fv)(f*o+c*u,a*i+p*e),(0,r.ZR)(p*i-a*e)]},l}function O(n){return function(t){var i=new w;for(var r in n)i[r]=n[r];return i.stream=t,i}}function w(){}H.invert=H,w.prototype={constructor:w,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var N=i(9378),k=i(6133);function B(n,t,i){var r=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=r&&n.clipExtent(null),(0,N.Z)(i,n.stream(k.Z)),t(k.Z.result()),null!=r&&n.clipExtent(r),n}function P(n,t,i){return B(n,function(i){var r=t[1][0]-t[0][0],e=t[1][1]-t[0][1],o=Math.min(r/(i[1][0]-i[0][0]),e/(i[1][1]-i[0][1])),u=+t[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+t[0][1]+(e-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([u,l])},i)}function z(n,t,i){return P(n,[[0,0],t],i)}function U(n,t,i){return B(n,function(i){var r=+t,e=r/(i[1][0]-i[0][0]),o=(r-e*(i[1][0]+i[0][0]))/2,u=-e*i[0][1];n.scale(150*e).translate([o,u])},i)}function F(n,t,i){return B(n,function(i){var r=+t,e=r/(i[1][1]-i[0][1]),o=-e*i[0][0],u=(r-e*(i[1][1]+i[0][1]))/2;n.scale(150*e).translate([o,u])},i)}var X=(0,r.mC)(30*r.uR);function j(n,t){return+t?function(n,t){function i(e,o,u,l,a,f,c,p,s,h,v,d,g,m){var y=c-e,E=p-o,S=y*y+E*E;if(S>4*t&&g--){var _=l+h,Z=a+v,R=f+d,W=(0,r._b)(_*_+Z*Z+R*R),$=(0,r.ZR)(R/=W),x=(0,r.Wn)((0,r.Wn)(R)-1)<r.Ho||(0,r.Wn)(u-s)<r.Ho?(u+s)/2:(0,r.fv)(Z,_),H=n(x,$),M=H[0],b=H[1],C=M-e,O=b-o,w=E*C-y*O;(w*w/S>t||(0,r.Wn)((y*C+E*O)/S-.5)>.3||l*h+a*v+f*d<X)&&(i(e,o,u,l,a,f,M,b,x,_/=W,Z/=W,R,g,m),m.point(M,b),i(M,b,x,_,Z,R,c,p,s,h,v,d,g,m))}}return function(t){var r,e,o,u,l,a,f,c,p,h,v,d,g={point:m,lineStart:y,lineEnd:S,polygonStart:function(){t.polygonStart(),g.lineStart=_},polygonEnd:function(){t.polygonEnd(),g.lineStart=y}};function m(i,r){i=n(i,r),t.point(i[0],i[1])}function y(){c=NaN,g.point=E,t.lineStart()}function E(r,e){var o=s([r,e]),u=n(r,e);i(c,p,f,h,v,d,c=u[0],p=u[1],f=r,h=o[0],v=o[1],d=o[2],16,t),t.point(c,p)}function S(){g.point=m,t.lineEnd()}function _(){y(),g.point=Z,g.lineEnd=R}function Z(n,t){E(r=n,t),e=c,o=p,u=h,l=v,a=d,g.point=E}function R(){i(c,p,f,h,v,d,e,o,r,u,l,a,16,t),g.lineEnd=S,S()}return g}}(n,t):O({point:function(t,i){t=n(t,i),this.stream.point(t[0],t[1])}})}var L=O({point:function(n,t){this.stream.point(n*r.uR,t*r.uR)}});function A(n,t,i,e,o,u){if(!u)return function(n,t,i,r,e){function o(o,u){return[t+n*(o*=r),i-n*(u*=e)]}return o.invert=function(o,u){return[(o-t)/n*r,(i-u)/n*e]},o}(n,t,i,e,o);var l=(0,r.mC)(u),a=(0,r.O$)(u),f=l*n,c=a*n,p=l/n,s=a/n,h=(a*i-l*t)/n,v=(a*t+l*i)/n;function d(n,r){return[f*(n*=e)-c*(r*=o)+t,i-c*n-f*r]}return d.invert=function(n,t){return[e*(p*n-s*t+h),o*(v-s*n-p*t)]},d}function G(n,t){var i=(0,r.O$)(n),e=(i+(0,r.O$)(t))/2;if((0,r.Wn)(e)<r.Ho)return function(n){var t=(0,r.mC)(n);function i(n,i){return[n*t,(0,r.O$)(i)/t]}return i.invert=function(n,i){return[n/t,(0,r.ZR)(i*t)]},i}(n);var o=1+i*(2*e-i),u=(0,r._b)(o)/e;function l(n,t){var i=(0,r._b)(o-2*e*(0,r.O$)(t))/e;return[i*(0,r.O$)(n*=e),u-i*(0,r.mC)(n)]}return l.invert=function(n,t){var i=u-t,l=(0,r.fv)(n,(0,r.Wn)(i))*(0,r.Xx)(i);return i*e<0&&(l-=r.pi*(0,r.Xx)(n)*(0,r.Xx)(i)),[l/e,(0,r.ZR)((o-(n*n+i*i)*e*e)/(2*e))]},l}function T(){var n,t,i,e;return(n=0,t=r.pi/3,(e=(i=function(n){var t,i,e,l,f,c,m,y,_,Z,M=150,w=480,N=250,k=0,B=0,X=0,G=0,T=0,K=0,q=1,I=1,Y=null,D=R,J=null,Q=x.Z,V=.5;function nn(n){return y(n[0]*r.uR,n[1]*r.uR)}function nt(n){return(n=y.invert(n[0],n[1]))&&[n[0]*r.RW,n[1]*r.RW]}function ni(){var n,e,o,u=A(M,0,0,q,I,K).apply(null,t(k,B)),l=A(M,w-u[0],N-u[1],q,I,K);return n=X,e=G,o=T,i=(n%=r.BZ)?e||o?$(b(n),C(e,o)):b(n):e||o?C(e,o):H,m=$(t,l),y=$(i,m),c=j(m,V),nr()}function nr(){return _=Z=null,nn}return nn.stream=function(n){var t;return _&&Z===n?_:_=L((t=i,O({point:function(n,i){var r=t(n,i);return this.stream.point(r[0],r[1])}}))(D(c(Q(Z=n)))))},nn.preclip=function(n){return arguments.length?(D=n,Y=void 0,nr()):D},nn.postclip=function(n){return arguments.length?(Q=n,J=e=l=f=null,nr()):Q},nn.clipAngle=function(n){return arguments.length?(D=+n?function(n){var t=(0,r.mC)(n),i=6*r.uR,e=t>0,o=(0,r.Wn)(t)>r.Ho;function l(n,i){return(0,r.mC)(n)*(0,r.mC)(i)>t}function a(n,i,e){var o=s(n),u=s(i),l=[1,0,0],a=v(o,u),f=h(a,a),c=a[0],m=f-c*c;if(!m)return!e&&n;var y=t*f/m,E=-t*c/m,S=v(l,a),_=g(l,y);d(_,g(a,E));var Z=h(_,S),R=h(S,S),W=Z*Z-R*(h(_,_)-1);if(!(W<0)){var $=(0,r._b)(W),x=g(S,(-Z-$)/R);if(d(x,_),x=p(x),!e)return x;var H,M=n[0],b=i[0],C=n[1],O=i[1];b<M&&(H=M,M=b,b=H);var w=b-M,N=(0,r.Wn)(w-r.pi)<r.Ho,k=N||w<r.Ho;if(!N&&O<C&&(H=C,C=O,O=H),k?N?C+O>0^x[1]<((0,r.Wn)(x[0]-M)<r.Ho?C:O):C<=x[1]&&x[1]<=O:w>r.pi^(M<=x[0]&&x[0]<=b)){var B=g(S,(-Z+$)/R);return d(B,_),[x,p(B)]}}}function f(t,i){var o=e?n:r.pi-n,u=0;return t<-o?u|=1:t>o&&(u|=2),i<-o?u|=4:i>o&&(u|=8),u}return S(l,function(n){var t,i,c,p,s;return{lineStart:function(){p=c=!1,s=1},point:function(h,v){var d,g,m=[h,v],y=l(h,v),E=e?y?0:f(h,v):y?f(h+(h<0?r.pi:-r.pi),v):0;!t&&(p=c=y)&&n.lineStart(),y!==c&&(!(g=a(t,m))||u(t,g)||u(m,g))&&(m[2]=1),y!==c?(s=0,y?(n.lineStart(),g=a(m,t),n.point(g[0],g[1])):(g=a(t,m),n.point(g[0],g[1],2),n.lineEnd()),t=g):o&&t&&e^y&&!(E&i)&&(d=a(m,t,!0))&&(s=0,e?(n.lineStart(),n.point(d[0][0],d[0][1]),n.point(d[1][0],d[1][1]),n.lineEnd()):(n.point(d[1][0],d[1][1]),n.lineEnd(),n.lineStart(),n.point(d[0][0],d[0][1],3))),!y||t&&u(t,m)||n.point(m[0],m[1]),t=m,c=y,i=E},lineEnd:function(){c&&n.lineEnd(),t=null},clean:function(){return s|(p&&c)<<1}}},function(t,e,o,u){!function(n,t,i,e,o,u){if(i){var l=(0,r.mC)(t),a=(0,r.O$)(t),f=e*i;null==o?(o=t+e*r.BZ,u=t-f/2):(o=W(l,o),u=W(l,u),(e>0?o<u:o>u)&&(o+=e*r.BZ));for(var c,s=o;e>0?s>u:s<u;s-=f)c=p([l,-a*(0,r.mC)(s),-a*(0,r.O$)(s)]),n.point(c[0],c[1])}}(u,n,i,o,t,e)},e?[0,-n]:[-r.pi,n-r.pi])}(Y=n*r.uR):(Y=null,R),nr()):Y*r.RW},nn.clipExtent=function(n){return arguments.length?(Q=null==n?(J=e=l=f=null,x.Z):function(n,t,i,e){function u(r,o){return n<=r&&r<=i&&t<=o&&o<=e}function l(r,o,u,l){var a=0,c=0;if(null==r||(a=f(r,u))!==(c=f(o,u))||0>p(r,o)^u>0)do l.point(0===a||3===a?n:i,a>1?e:t);while((a=(a+u+4)%4)!==c);else l.point(o[0],o[1])}function f(e,o){return(0,r.Wn)(e[0]-n)<r.Ho?o>0?0:3:(0,r.Wn)(e[0]-i)<r.Ho?o>0?2:1:(0,r.Wn)(e[1]-t)<r.Ho?o>0?1:0:o>0?3:2}function c(n,t){return p(n.x,t.x)}function p(n,t){var i=f(n,1),r=f(t,1);return i!==r?i-r:0===i?t[1]-n[1]:1===i?n[0]-t[0]:2===i?n[1]-t[1]:t[0]-n[0]}return function(r){var f,p,s,h,v,d,g,m,y,S,_,Z=r,R=o(),W={point:$,lineStart:function(){W.point=x,p&&p.push(s=[]),S=!0,y=!1,g=m=NaN},lineEnd:function(){f&&(x(h,v),d&&y&&R.rejoin(),f.push(R.result())),W.point=$,y&&Z.lineEnd()},polygonStart:function(){Z=R,f=[],p=[],_=!0},polygonEnd:function(){var t=function(){for(var t=0,i=0,r=p.length;i<r;++i)for(var o,u,l=p[i],a=1,f=l.length,c=l[0],s=c[0],h=c[1];a<f;++a)o=s,u=h,s=(c=l[a])[0],h=c[1],u<=e?h>e&&(s-o)*(e-u)>(h-u)*(n-o)&&++t:h<=e&&(s-o)*(e-u)<(h-u)*(n-o)&&--t;return t}(),i=_&&t,o=(f=E(f)).length;(i||o)&&(r.polygonStart(),i&&(r.lineStart(),l(null,null,1,r),r.lineEnd()),o&&a(f,c,t,l,r),r.polygonEnd()),Z=r,f=p=s=null}};function $(n,t){u(n,t)&&Z.point(n,t)}function x(r,o){var l=u(r,o);if(p&&s.push([r,o]),S)h=r,v=o,d=l,S=!1,l&&(Z.lineStart(),Z.point(r,o));else if(l&&y)Z.point(r,o);else{var a=[g=Math.max(-1e9,Math.min(1e9,g)),m=Math.max(-1e9,Math.min(1e9,m))],f=[r=Math.max(-1e9,Math.min(1e9,r)),o=Math.max(-1e9,Math.min(1e9,o))];(function(n,t,i,r,e,o){var u,l=n[0],a=n[1],f=t[0],c=t[1],p=0,s=1,h=f-l,v=c-a;if(u=i-l,h||!(u>0)){if(u/=h,h<0){if(u<p)return;u<s&&(s=u)}else if(h>0){if(u>s)return;u>p&&(p=u)}if(u=e-l,h||!(u<0)){if(u/=h,h<0){if(u>s)return;u>p&&(p=u)}else if(h>0){if(u<p)return;u<s&&(s=u)}if(u=r-a,v||!(u>0)){if(u/=v,v<0){if(u<p)return;u<s&&(s=u)}else if(v>0){if(u>s)return;u>p&&(p=u)}if(u=o-a,v||!(u<0)){if(u/=v,v<0){if(u>s)return;u>p&&(p=u)}else if(v>0){if(u<p)return;u<s&&(s=u)}return p>0&&(n[0]=l+p*h,n[1]=a+p*v),s<1&&(t[0]=l+s*h,t[1]=a+s*v),!0}}}}})(a,f,n,t,i,e)?(y||(Z.lineStart(),Z.point(a[0],a[1])),Z.point(f[0],f[1]),l||Z.lineEnd(),_=!1):l&&(Z.lineStart(),Z.point(r,o),_=!1)}g=r,m=o,y=l}return W}}(J=+n[0][0],e=+n[0][1],l=+n[1][0],f=+n[1][1]),nr()):null==J?null:[[J,e],[l,f]]},nn.scale=function(n){return arguments.length?(M=+n,ni()):M},nn.translate=function(n){return arguments.length?(w=+n[0],N=+n[1],ni()):[w,N]},nn.center=function(n){return arguments.length?(k=n[0]%360*r.uR,B=n[1]%360*r.uR,ni()):[k*r.RW,B*r.RW]},nn.rotate=function(n){return arguments.length?(X=n[0]%360*r.uR,G=n[1]%360*r.uR,T=n.length>2?n[2]%360*r.uR:0,ni()):[X*r.RW,G*r.RW,T*r.RW]},nn.angle=function(n){return arguments.length?(K=n%360*r.uR,ni()):K*r.RW},nn.reflectX=function(n){return arguments.length?(q=n?-1:1,ni()):q<0},nn.reflectY=function(n){return arguments.length?(I=n?-1:1,ni()):I<0},nn.precision=function(n){return arguments.length?(c=j(m,V=n*n),nr()):(0,r._b)(V)},nn.fitExtent=function(n,t){return P(nn,n,t)},nn.fitSize=function(n,t){return z(nn,n,t)},nn.fitWidth=function(n,t){return U(nn,n,t)},nn.fitHeight=function(n,t){return F(nn,n,t)},function(){return t=n.apply(this,arguments),nn.invert=t.invert&&nt,ni()}}(G))(n,t)).parallels=function(e){return arguments.length?i(n=e[0]*r.uR,t=e[1]*r.uR):[n*r.RW,t*r.RW]},e).scale(155.424).center([0,33.6442])}function K(){var n,t,i,e,o,u,l=T().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7]),a=T().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=T().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,t){u=[n,t]}};function p(n){var t=n[0],r=n[1];return u=null,i.point(t,r),u||(e.point(t,r),u)||(o.point(t,r),u)}function s(){return n=t=null,p}return p.invert=function(n){var t=l.scale(),i=l.translate(),r=(n[0]-i[0])/t,e=(n[1]-i[1])/t;return(e>=.12&&e<.234&&r>=-.425&&r<-.214?a:e>=.166&&e<.234&&r>=-.214&&r<-.115?f:l).invert(n)},p.stream=function(i){var r,e;return n&&t===i?n:(e=(r=[l.stream(t=i),a.stream(i),f.stream(i)]).length,n={point:function(n,t){for(var i=-1;++i<e;)r[i].point(n,t)},sphere:function(){for(var n=-1;++n<e;)r[n].sphere()},lineStart:function(){for(var n=-1;++n<e;)r[n].lineStart()},lineEnd:function(){for(var n=-1;++n<e;)r[n].lineEnd()},polygonStart:function(){for(var n=-1;++n<e;)r[n].polygonStart()},polygonEnd:function(){for(var n=-1;++n<e;)r[n].polygonEnd()}})},p.precision=function(n){return arguments.length?(l.precision(n),a.precision(n),f.precision(n),s()):l.precision()},p.scale=function(n){return arguments.length?(l.scale(n),a.scale(.35*n),f.scale(n),p.translate(l.translate())):l.scale()},p.translate=function(n){if(!arguments.length)return l.translate();var t=l.scale(),u=+n[0],p=+n[1];return i=l.translate(n).clipExtent([[u-.455*t,p-.238*t],[u+.455*t,p+.238*t]]).stream(c),e=a.translate([u-.307*t,p+.201*t]).clipExtent([[u-.425*t+r.Ho,p+.12*t+r.Ho],[u-.214*t-r.Ho,p+.234*t-r.Ho]]).stream(c),o=f.translate([u-.205*t,p+.212*t]).clipExtent([[u-.214*t+r.Ho,p+.166*t+r.Ho],[u-.115*t-r.Ho,p+.234*t-r.Ho]]).stream(c),s()},p.fitExtent=function(n,t){return P(p,n,t)},p.fitSize=function(n,t){return z(p,n,t)},p.fitWidth=function(n,t){return U(p,n,t)},p.fitHeight=function(n,t){return F(p,n,t)},p.scale(1070)}},9378:function(n,t,i){function r(n,t){n&&o.hasOwnProperty(n.type)&&o[n.type](n,t)}i.d(t,{Z:function(){return a}});var e={Feature:function(n,t){r(n.geometry,t)},FeatureCollection:function(n,t){for(var i=n.features,e=-1,o=i.length;++e<o;)r(i[e].geometry,t)}},o={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)n=i[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){u(n.coordinates,t,0)},MultiLineString:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)u(i[r],t,0)},Polygon:function(n,t){l(n.coordinates,t)},MultiPolygon:function(n,t){for(var i=n.coordinates,r=-1,e=i.length;++r<e;)l(i[r],t)},GeometryCollection:function(n,t){for(var i=n.geometries,e=-1,o=i.length;++e<o;)r(i[e],t)}};function u(n,t,i){var r,e=-1,o=n.length-i;for(t.lineStart();++e<o;)r=n[e],t.point(r[0],r[1],r[2]);t.lineEnd()}function l(n,t){var i=-1,r=n.length;for(t.polygonStart();++i<r;)u(n[i],t,1);t.polygonEnd()}function a(n,t){n&&e.hasOwnProperty(n.type)?e[n.type](n,t):r(n,t)}}}]);