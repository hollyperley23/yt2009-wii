var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){function g(a){throw a;}
var i=void 0,k=!0,l=null,m=!1,q,r=this,aa=function(a,b){var c=a.split("."),d=r;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&s(b)?d[e]=b:d=d[e]?d[e]:d[e]={}},ba=function(a){for(var a=a.split("."),b=r,c;c=a.shift();)if(b[c]!=l)b=b[c];else return l;return b},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";
if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},s=function(a){return a!==i},u=function(a){return"array"==t(a)},v=function(a){var b=t(a);
return"array"==b||"object"==b&&"number"==typeof a.length},x=function(a){return"string"==typeof a},y="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ca=0,da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){a||g(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},z=function(a,
b,c){z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return z.apply(l,arguments)},B=Date.now||function(){return+new Date},C=function(a,b){function c(){}c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return z.apply(l,c)}return z(this,a)};var fa=function(a){this.stack=Error().stack||"";a&&(this.message=""+a)};C(fa,Error);var ga=function(a,b){for(var c=1;c<arguments.length;c++)var d=(""+arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a},ha=/^[a-zA-Z0-9\-_.!~*'()]*$/,D=function(a){a=""+a;return!ha.test(a)?encodeURIComponent(a):a};var ia=function(a,b){b.unshift(a);fa.call(this,ga.apply(l,b));b.shift()};C(ia,fa);var ja=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);g(new ia(""+e,f||[]))},ka=function(a,b,c){!a&&ja("",l,b,Array.prototype.slice.call(arguments,2));return a},la=function(a,b,c){!x(a)&&ja("Expected string but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2));return a};var E=Array.prototype,na=E.indexOf?function(a,b,c){ka(a.length!=l);return E.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:0>c?Math.max(0,a.length+c):c;if(x(a))return!x(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},oa=E.forEach?function(a,b,c){ka(a.length!=l);E.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},pa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(u(d)||
(e=v(d))&&d.hasOwnProperty("callee"))a.push.apply(a,d);else if(e)for(var f=a.length,h=d.length,j=0;j<h;j++)a[f+j]=d[j];else a.push(d)}};var qa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},sa="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),ta=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sa.length;f++)c=sa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var F,ua,va,wa,xa=function(){return r.navigator?r.navigator.userAgent:l};wa=va=ua=F=m;var ya;if(ya=xa()){var za=r.navigator;F=0==ya.indexOf("Opera");ua=!F&&-1!=ya.indexOf("MSIE");va=!F&&-1!=ya.indexOf("WebKit");wa=!F&&!va&&"Gecko"==za.product}var Aa=F,G=ua,H=wa,I=va,Ba;
a:{var Ca="",Da;if(Aa&&r.opera)var Ea=r.opera.version,Ca="function"==typeof Ea?Ea():Ea;else if(H?Da=/rv\:([^\);]+)(\)|;)/:G?Da=/MSIE\s+([^\);]+)(\)|;)/:I&&(Da=/WebKit\/(\S+)/),Da)var Fa=Da.exec(xa()),Ca=Fa?Fa[1]:"";if(G){var Ga,Ha=r.document;Ga=Ha?Ha.documentMode:i;if(Ga>parseFloat(Ca)){Ba=""+Ga;break a}}Ba=Ca}
var Ia=Ba,Ja={},J=function(a){var b;if(!(b=Ja[a])){b=0;for(var c=(""+Ia).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",j=d[f]||"",n=RegExp("(\\d*)(\\D*)","g"),o=RegExp("(\\d*)(\\D*)","g");do{var w=n.exec(h)||["","",""],p=o.exec(j)||["","",""];if(0==w[0].length&&0==p[0].length)break;b=((0==w[1].length?0:parseInt(w[1],10))<(0==p[1].length?0:parseInt(p[1],10))?-1:(0==w[1].length?
0:parseInt(w[1],10))>(0==p[1].length?0:parseInt(p[1],10))?1:0)||((0==w[2].length)<(0==p[2].length)?-1:(0==w[2].length)>(0==p[2].length)?1:0)||(w[2]<p[2]?-1:w[2]>p[2]?1:0)}while(0==b)}b=Ja[a]=0<=b}return b},Ka={},La=function(){return Ka[9]||(Ka[9]=G&&!!document.documentMode&&9<=document.documentMode)};var Ma=function(a){Ma[" "](a);return a};Ma[" "]=function(){};!G||La();var Na=!G||La();G&&J("8");!I||J("528");H&&J("1.9b")||G&&J("8")||Aa&&J("9.5")||I&&J("528");H&&!J("8")||G&&J("9");var Oa=function(){};Oa.prototype.pa=m;Oa.prototype.R=function(){this.pa||(this.pa=k,this.S())};Oa.prototype.S=function(){this.Da&&Pa.apply(l,this.Da)};var Pa=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];v(d)?Pa.apply(l,d):d&&"function"==typeof d.R&&d.R()}};var K=function(a,b){this.type=a;this.currentTarget=this.target=b};C(K,Oa);K.prototype.S=function(){delete this.type;delete this.target;delete this.currentTarget};K.prototype.ca=m;K.prototype.Ba=k;var Qa=function(a,b){a&&this.N(a,b)};C(Qa,K);q=Qa.prototype;q.target=l;q.relatedTarget=l;q.offsetX=0;q.offsetY=0;q.clientX=0;q.clientY=0;q.screenX=0;q.screenY=0;q.button=0;q.keyCode=0;q.charCode=0;q.ctrlKey=m;q.altKey=m;q.shiftKey=m;q.metaKey=m;q.Y=l;
q.N=function(a,b){var c=this.type=a.type;K.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(H){var e;a:{try{Ma(d.nodeName);e=k;break a}catch(f){}e=m}e||(d=l)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=I||a.offsetX!==i?a.offsetX:a.layerX;this.offsetY=I||a.offsetY!==i?a.offsetY:a.layerY;this.clientX=a.clientX!==i?a.clientX:a.pageX;this.clientY=a.clientY!==i?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.Y=a;delete this.Ba;delete this.ca};q.S=function(){Qa.J.S.call(this);this.relatedTarget=this.currentTarget=this.target=this.Y=l};var Ra=function(){},Sa=0;q=Ra.prototype;q.key=0;q.z=m;q.ma=m;q.N=function(a,b,c,d,e,f){"function"==t(a)?this.na=k:a&&a.handleEvent&&"function"==t(a.handleEvent)?this.na=m:g(Error("Invalid listener argument"));this.M=a;this.ia=b;this.src=c;this.type=d;this.capture=!!e;this.ha=f;this.ma=m;this.key=++Sa;this.z=m};q.handleEvent=function(a){return this.na?this.M.call(this.ha||this.src,a):this.M.handleEvent.call(this.M,a)};var L={},M={},N={},O={},Ta=function(a,b,c,d,e){if(b)if(u(b))for(var f=0;f<b.length;f++)Ta(a,b[f],c,d,e);else{var d=!!d,h=M;b in h||(h[b]={a:0,t:0});h=h[b];d in h||(h[d]={a:0,t:0},h.a++);var h=h[d],j=a[y]||(a[y]=++ca),n;h.t++;if(h[j]){n=h[j];for(f=0;f<n.length;f++)if(h=n[f],h.M==c&&h.ha==e){if(h.z)break;return}}else n=h[j]=[],h.a++;f=Ua();f.src=a;h=new Ra;h.N(c,f,a,b,d,e);c=h.key;f.key=c;n.push(h);L[c]=h;N[j]||(N[j]=[]);N[j].push(h);a.addEventListener?(a==r||!a.qa)&&a.addEventListener(b,f,d):a.attachEvent(b in
O?O[b]:O[b]="on"+b,f)}else g(Error("Invalid event type"))},Ua=function(){var a=Va,b=Na?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b},Wa=function(a,b,c,d){if(!d.Q&&d.ka){for(var e=0,f=0;e<d.length;e++)d[e].z?d[e].ia.src=l:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.ka=m;0==f&&(delete M[a][b][c],M[a][b].a--,0==M[a][b].a&&(delete M[a][b],M[a].a--),0==M[a].a&&delete M[a])}},Ya=function(a,b,c,d,e){var f=1,b=b[y]||(b[y]=++ca);if(a[b]){a.t--;a=a[b];a.Q?
a.Q++:a.Q=1;try{for(var h=a.length,j=0;j<h;j++){var n=a[j];n&&!n.z&&(f&=Xa(n,e)!==m)}}finally{a.Q--,Wa(c,d,b,a)}}return Boolean(f)},Xa=function(a,b){var c=a.handleEvent(b);if(a.ma){var d=a.key;if(L[d]){var e=L[d];if(!e.z){var f=e.src,h=e.type,j=e.ia,n=e.capture;f.removeEventListener?(f==r||!f.qa)&&f.removeEventListener(h,j,n):f.detachEvent&&f.detachEvent(h in O?O[h]:O[h]="on"+h,j);f=f[y]||(f[y]=++ca);j=M[h][n][f];if(N[f]){var o=N[f],w=na(o,e);0<=w&&(ka(o.length!=l),E.splice.call(o,w,1));0==o.length&&
delete N[f]}e.z=k;j.ka=k;Wa(h,n,f,j);delete L[d]}}}return c},Va=function(a,b){if(!L[a])return k;var c=L[a],d=c.type,e=M;if(!(d in e))return k;var e=e[d],f,h;if(!Na){f=b||ba("window.event");var j=k in e,n=m in e;if(j){if(0>f.keyCode||f.returnValue!=i)return k;a:{var o=m;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(w){o=k}if(o||f.returnValue==i)f.returnValue=k}}o=new Qa;o.N(f,this);f=k;try{if(j){for(var p=[],ma=o.currentTarget;ma;ma=ma.parentNode)p.push(ma);h=e[k];h.t=h.a;for(var A=p.length-1;!o.ca&&
0<=A&&h.t;A--)o.currentTarget=p[A],f&=Ya(h,p[A],d,k,o);if(n){h=e[m];h.t=h.a;for(A=0;!o.ca&&A<p.length&&h.t;A++)o.currentTarget=p[A],f&=Ya(h,p[A],d,m,o)}}else f=Xa(c,o)}finally{p&&(p.length=0),o.R()}return f}d=new Qa(b,this);try{f=Xa(c,d)}finally{d.R()}return f};var P="StopIteration"in r?r.StopIteration:Error("StopIteration"),Q=function(){};Q.prototype.next=function(){g(P)};Q.prototype.o=function(){return this};var Za=function(a){if(a instanceof Q)return a;if("function"==typeof a.o)return a.o(m);if(v(a)){var b=0,c=new Q;c.next=function(){for(;;){b>=a.length&&g(P);if(b in a)return a[b++];b++}};return c}g(Error("Not implemented"))},$a=function(a,b){if(v(a))try{oa(a,b,i)}catch(c){c!==P&&g(c)}else{a=Za(a);try{for(;;)b.call(i,a.next(),i,a)}catch(d){d!==P&&g(d)}}};var ab=function(a){if("function"==typeof a.n)return a.n();if(x(a))return a.split("");if(v(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return qa(a)},bb=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(v(a)||x(a))oa(a,b,c);else{var d;if("function"==typeof a.s)d=a.s();else if("function"!=typeof a.n)if(v(a)||x(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=ra(a);else d=i;for(var e=ab(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}};var R=function(a,b){this.i={};this.c=[];var c=arguments.length;if(1<c){c%2&&g(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof R?(c=a.s(),d=a.n()):(c=ra(a),d=qa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};q=R.prototype;q.a=0;q.P=0;q.C=function(){return this.a};q.n=function(){cb(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.i[this.c[b]]);return a};q.s=function(){cb(this);return this.c.concat()};
q.k=function(a){return S(this.i,a)};q.remove=function(a){return S(this.i,a)?(delete this.i[a],this.a--,this.P++,this.c.length>2*this.a&&cb(this),k):m};var cb=function(a){if(a.a!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];S(a.i,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.a!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],S(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};R.prototype.get=function(a,b){return S(this.i,a)?this.i[a]:b};
R.prototype.set=function(a,b){S(this.i,a)||(this.a++,this.c.push(a),this.P++);this.i[a]=b};R.prototype.F=function(){return new R(this)};R.prototype.o=function(a){cb(this);var b=0,c=this.c,d=this.i,e=this.P,f=this,h=new Q;h.next=function(){for(;;){e!=f.P&&g(Error("The map has changed since the iterator was created"));b>=c.length&&g(P);var h=c[b++];return a?h:d[h]}};return h};var S=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var db=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),gb=function(a){if(eb){eb=m;var b=r.location;if(b){var c=b.href;if(c&&(c=fb(c))&&c!=b.hostname)eb=k,g(Error())}}return a.match(db)},eb=I,fb=function(a){return(a=gb(a)[3]||l)&&decodeURIComponent(a)},hb=function(a,b){for(var c in b){var d=c,e=b[c],f=a;if(u(e))for(var h=0;h<e.length;h++)f.push("&",d),""!==e[h]&&f.push("=",D(e[h]));else e!=l&&(f.push("&",d),""!==e&&
f.push("=",D(e)))}return a};var T=function(a,b){var c;a instanceof T?(this.w(b==l?a.e:b),ib(this,a.m),jb(this,a.H),kb(this,a.p),lb(this,a.v),this.setPath(a.getPath()),mb(this,a.f.F()),nb(this,a.G)):a&&(c=gb(""+a))?(this.w(!!b),ib(this,c[1]||"",k),jb(this,c[2]||"",k),kb(this,c[3]||"",k),lb(this,c[4]),this.setPath(c[5]||"",k),mb(this,c[6]||"",k),nb(this,c[7]||"",k)):(this.w(!!b),this.f=new U(l,this,this.e))};q=T.prototype;q.m="";q.H="";q.p="";q.v=l;q.r="";q.G="";q.Ea=m;q.e=m;
q.toString=function(){if(this.g)return this.g;var a=[];this.m&&a.push(ob(this.m,pb),":");this.p&&(a.push("//"),this.H&&a.push(ob(this.H,pb),"@"),a.push(x(this.p)?encodeURIComponent(this.p):l),this.v!=l&&a.push(":",""+this.v));this.r&&(this.p&&"/"!=this.r.charAt(0)&&a.push("/"),a.push(ob(this.r,"/"==this.r.charAt(0)?qb:rb)));var b=""+this.f;b&&a.push("?",b);this.G&&a.push("#",ob(this.G,sb));return this.g=a.join("")};
q.F=function(){var a=this.m,b=this.H,c=this.p,d=this.v,e=this.r,f=this.f.F(),h=this.G,j=new T(l,this.e);a&&ib(j,a);b&&jb(j,b);c&&kb(j,c);d&&lb(j,d);e&&j.setPath(e);f&&mb(j,f);h&&nb(j,h);return j};
var ib=function(a,b,c){V(a);delete a.g;a.m=c?b?decodeURIComponent(b):"":b;a.m&&(a.m=a.m.replace(/:$/,""))},jb=function(a,b,c){V(a);delete a.g;a.H=c?b?decodeURIComponent(b):"":b},kb=function(a,b,c){V(a);delete a.g;a.p=c?b?decodeURIComponent(b):"":b},lb=function(a,b){V(a);delete a.g;b?(b=Number(b),(isNaN(b)||0>b)&&g(Error("Bad port number "+b)),a.v=b):a.v=l};T.prototype.getPath=function(){return this.r};T.prototype.setPath=function(a,b){V(this);delete this.g;this.r=b?a?decodeURIComponent(a):"":a;return this};
var mb=function(a,b,c){V(a);delete a.g;b instanceof U?(a.f=b,a.f.Z=a,a.f.w(a.e)):(c||(b=ob(b,tb)),a.f=new U(b,a,a.e))},nb=function(a,b,c){V(a);delete a.g;a.G=c?b?decodeURIComponent(b):"":b},V=function(a){a.Ea&&g(Error("Tried to modify a read-only Uri"))};T.prototype.w=function(a){this.e=a;this.f&&this.f.w(a);return this};
var ub=/^[a-zA-Z0-9\-_.!~*'():\/;?]*$/,ob=function(a,b){var c=l;x(a)&&(c=a,ub.test(c)||(c=encodeURI(a)),0<=c.search(b)&&(c=c.replace(b,vb)));return c},vb=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},pb=/[#\/\?@]/g,rb=/[\#\?:]/g,qb=/[\#\?]/g,tb=/[\#\?@]/g,sb=/#/g,U=function(a,b,c){this.j=a||l;this.Z=b||l;this.e=!!c},X=function(a){if(!a.b&&(a.b=new R,a.a=0,a.j))for(var b=a.j.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=l,f=l;0<=d?(e=b[c].substring(0,
d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=W(a,e);a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}};q=U.prototype;q.b=l;q.a=l;q.C=function(){X(this);return this.a};q.add=function(a,b){X(this);wb(this);a=W(this,a);if(this.k(a)){var c=this.b.get(a);u(c)?c.push(b):this.b.set(a,[c,b])}else this.b.set(a,b);this.a++;return this};q.remove=function(a){X(this);a=W(this,a);if(this.b.k(a)){wb(this);var b=this.b.get(a);u(b)?this.a-=b.length:this.a--;return this.b.remove(a)}return m};
q.k=function(a){X(this);a=W(this,a);return this.b.k(a)};q.s=function(){X(this);for(var a=this.b.n(),b=this.b.s(),c=[],d=0;d<b.length;d++){var e=a[d];if(u(e))for(var f=0;f<e.length;f++)c.push(b[d]);else c.push(b[d])}return c};q.n=function(a){X(this);if(a)if(a=W(this,a),this.k(a)){var b=this.b.get(a);if(u(b))return b;a=[];a.push(b)}else a=[];else for(var b=this.b.n(),a=[],c=0;c<b.length;c++){var d=b[c];u(d)?pa(a,d):a.push(d)}return a};
q.set=function(a,b){X(this);wb(this);a=W(this,a);if(this.k(a)){var c=this.b.get(a);u(c)?this.a-=c.length:this.a--}this.b.set(a,b);this.a++;return this};q.get=function(a,b){X(this);a=W(this,a);if(this.k(a)){var c=this.b.get(a);return u(c)?c[0]:c}return b};
q.toString=function(){if(this.j)return this.j;if(!this.b)return"";for(var a=[],b=0,c=this.b.s(),d=0;d<c.length;d++){var e=c[d],f=D(e),e=this.b.get(e);if(u(e))for(var h=0;h<e.length;h++)0<b&&a.push("&"),a.push(f),""!==e[h]&&a.push("=",D(e[h])),b++;else 0<b&&a.push("&"),a.push(f),""!==e&&a.push("=",D(e)),b++}return this.j=a.join("")};var wb=function(a){delete a.$;delete a.j;a.Z&&delete a.Z.g};U.prototype.F=function(){var a=new U;this.$&&(a.$=this.$);this.j&&(a.j=this.j);this.b&&(a.b=this.b.F());return a};
var W=function(a,b){var c=""+b;a.e&&(c=c.toLowerCase());return c};U.prototype.w=function(a){a&&!this.e&&(X(this),wb(this),bb(this.b,function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.add(d,a))},this));this.e=a};var xb=function(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var a=a.split("&"),b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=e[0],e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?u(b[f])?pa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b},yb=function(a){a=hb([],a);a[0]="";return a.join("")},zb=function(a,b){var c=a.split("?",2),a=c[0],c=xb(c[1]||""),d;for(d in b)c[d]=b[d];d=hb([a],c);if(d[1]){var c=d[0],e=c.indexOf("#");0<=e&&(d.push(c.substr(e)),d[0]=c=
c.substr(0,e));e=c.indexOf("?");0>e?d[1]="?":e==c.length-1&&(d[1]=i)}return d.join("")};!G||La();!H&&!G||G&&La()||H&&J("1.9.1");G&&J("9");var Ab=function(a){a=""+a;if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}g(Error("Invalid JSON string: "+a))},Bb=function(a){return eval("("+a+")")},Cb=function(a){this.T=a},Eb=function(a,b){var c=[];Db(a,b,c);return c.join("")},Db=function(a,b,c){switch(typeof b){case "string":Fb(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==l){c.push("null");break}if(u(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Db(a,a.T?a.T.call(b,""+f,e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Fb(f,c),c.push(":"),Db(a,a.T?a.T.call(b,f,e):e,c),d=","));c.push("}");break;
case "function":break;default:g(Error("Unknown type: "+typeof b))}},Gb={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Hb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Fb=function(a,b){b.push('"',a.replace(Hb,function(a){if(a in Gb)return Gb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Gb[a]=e+b.toString(16)}),'"')};var Ib=l;"undefined"!=typeof XMLHttpRequest?Ib=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Ib=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var Jb=function(a){switch(a&&"status"in a?a.status:-1){case 0:case 200:case 204:case 304:return k;default:return m}};var Kb=function(a,b,c,d,e){var f=Ib&&Ib();if("open"in f){f.onreadystatechange=function(){4==(f&&"readyState"in f?f.readyState:0)&&b&&b(f)};c=(c||"GET").toUpperCase();d=d||"";f.open(c,a,k);a="POST"==c;if(e)for(var h in e)f.setRequestHeader(h,e[h]),"content-type"==h.toLowerCase()&&(a=m);a&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");f.send(d)}},Mb=function(a,b){var c=b.format||"JSON";b.Fa&&(a=document.location.protocol+"//"+document.location.hostname+a);var d=b.la;d&&(a=zb(a,
d));var e=b.Ga||"";if(d=b.ta)e=xb(e),ta(e,d),e=yb(e);Kb(a,function(a){var d=Jb(a),e=l;if(d||400<=a.status&&500>a.status)e=Lb(c,a);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=k;break a}d=!!e}var e=e||{},n=b.X||r;d?b.ba&&b.ba.call(n,a,e):b.aa&&b.aa.call(n,a,e);b.xa&&b.xa.call(n,a,e)},b.method,e,b.headers)},Lb=function(a,b){var c=l;switch(a){case "JSON":var d=b.responseText,e=b.getResponseHeader("Content-Type")||"";d&&0<=e.indexOf("json")&&(c=Bb(d));break;case "XML":if(d=
(d=b.responseXML)?Nb(d):l)c={},oa(d.getElementsByTagName("*"),function(a){c[a.tagName]=Ob(a)})}return c},Nb=function(a){return!a?l:(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:l},Ob=function(a){var b="";oa(a.childNodes,function(a){b+=a.nodeValue});return b},Pb=ba("yt.net.ajax.tokenMap_")||{};aa("yt.net.ajax.tokenMap_",Pb);var Qb=function(){};var Rb=function(){};C(Rb,Qb);Rb.prototype.C=function(){var a=0;$a(this.o(k),function(b){la(b);a++});return a};var Sb=function(a){this.l=a};C(Sb,Rb);q=Sb.prototype;q.fa=function(){try{return!!this.l&&!!this.l.getItem}catch(a){}return m};q.set=function(a,b){try{this.l.setItem(a,b)}catch(c){g("Storage mechanism: Quota exceeded")}};q.get=function(a){a=this.l.getItem(a);if(x(a)||a===l)return a;g("Storage mechanism: Invalid value was encountered")};q.remove=function(a){this.l.removeItem(a)};q.C=function(){return this.l.length};
q.o=function(a){var b=0,c=new Q,d=this;c.next=function(){b>=d.C()&&g(P);var c=la(d.l.key(b++));if(a)return c;c=d.l.getItem(c);if(x(c))return c;g("Storage mechanism: Invalid value was encountered")};return c};var Tb=function(){var a=l;try{a=window.localStorage||l}catch(b){}this.l=a};C(Tb,Sb);var Vb=function(a,b){if(G&&!J(9)){Ub||(Ub=new R);this.d=Ub.get(a);this.d||(b?this.d=document.getElementById(b):(this.d=document.createElement("userdata"),this.d.addBehavior("#default#userData"),document.body.appendChild(this.d)),Ub.set(a,this.d));this.ea=a;try{this.d.load(this.ea)}catch(c){this.d=l}}};C(Vb,Rb);var Wb={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ub=l;Vb.prototype.d=l;Vb.prototype.ea=l;
var Xb=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Wb[a]})};q=Vb.prototype;q.fa=function(){return!!this.d};q.set=function(a,b){this.d.setAttribute(Xb(a),b);Yb(this)};q.get=function(a){a=this.d.getAttribute(Xb(a));if(x(a)||a===l)return a;g("Storage mechanism: Invalid value was encountered")};q.remove=function(a){this.d.removeAttribute(Xb(a));Yb(this)};q.C=function(){return this.d.XMLDocument.documentElement.attributes.length};
q.o=function(a){var b=0,c=this.d.XMLDocument.documentElement.attributes,d=new Q;d.next=function(){b>=c.length&&g(P);var d=ka(c[b++]);if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(x(d))return d;g("Storage mechanism: Invalid value was encountered")};return d};var Yb=function(a){try{a.d.save(a.ea)}catch(b){g("Storage mechanism: Quota exceeded")}};var Zb=function(a,b){this.B=a;this.u=b+"::"};C(Zb,Rb);q=Zb.prototype;q.B=l;q.u="";q.set=function(a,b){this.B.set(this.u+a,b)};q.get=function(a){return this.B.get(this.u+a)};q.remove=function(a){this.B.remove(this.u+a)};q.o=function(a){var b=this.B.o(k),c=new Q,d=this;c.next=function(){for(var c=b.next();c.substr(0,d.u.length)!=d.u;)c=b.next();return a?c.substr(d.u.length):d.B.get(c)};return c};var $b=function(a){this.K=a;this.oa=new Cb};q=$b.prototype;q.K=l;q.oa=l;q.set=function(a,b){s(b)?this.K.set(a,Eb(this.oa,b)):this.K.remove(a)};q.get=function(a){a=this.K.get(a);if(a!==l)try{return Ab(a)}catch(b){g("Storage: Invalid value was encountered")}};q.remove=function(a){this.K.remove(a)};var Y=function(a){$b.call(this,a)};C(Y,$b);var ac=function(a){this.data=a},bc=function(a){return!s(a)||a instanceof ac?a:new ac(a)};Y.prototype.set=function(a,b){Y.J.set.call(this,a,bc(b))};Y.prototype.ga=function(a){a=Y.J.get.call(this,a);if(!s(a)||a instanceof Object)return a;g("Storage: Invalid value was encountered")};Y.prototype.get=function(a){(a=this.ga(a))?(a=a.data,s(a)||g("Storage: Invalid value was encountered")):a=i;return a};var Z=function(a){$b.call(this,a)};C(Z,Y);Z.prototype.set=function(a,b,c){if(b=bc(b)){if(c){if(c<B()){Z.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Z.J.set.call(this,a,b)};Z.prototype.ga=function(a,b){var c=Z.J.ga.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<B()||!!d&&d>B()}if(d)Z.prototype.remove.call(this,a);else return c}};var cc=function(a){this.L=a},dc=/\s*;\s*/;q=cc.prototype;q.set=function(a,b,c,d,e,f){/[;=\s]/.test(a)&&g(Error('Invalid cookie name "'+a+'"'));/[;\r\n]/.test(b)&&g(Error('Invalid cookie value "'+b+'"'));s(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*c)).toUTCString();this.L.cookie=a+"="+b+e+d+c+f};
q.get=function(a,b){for(var c=a+"=",d=(this.L.cookie||"").split(dc),e=0,f;f=d[e];e++)if(0==f.indexOf(c))return f.substr(c.length);return b};q.remove=function(a,b,c){var d=this.k(a);this.set(a,"",0,b,c);return d};q.s=function(){return ec(this).keys};q.n=function(){return ec(this).Ca};q.C=function(){return!this.L.cookie?0:(this.L.cookie||"").split(dc).length};q.k=function(a){return s(this.get(a))};
var ec=function(a){for(var a=(a.L.cookie||"").split(dc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,Ca:c}},fc=new cc(document);fc.Ha=3950;var gc=document.domain;var hc=function(){var a;a=new Tb;if(!(a=a.fa()?new Zb(a,"yt.leanback"):l))a=new Vb("yt.leanback"),a=a.fa()?a:l;this.D=a?new Z(a):l};hc.prototype.set=function(a,b,c){if(this.D)try{this.D.set(a,b,B()+1E3*c);return}catch(d){}this.remove(a);fc.set("yt-dev."+a,b,c||31104E3,"/",gc)};hc.prototype.get=function(a){var b="";if(this.D)try{b=this.D.get(a)}catch(c){}b||(b=fc.get("yt-dev."+a,""));return b};hc.prototype.remove=function(a){this.D&&this.D.remove(a);fc.remove("yt-dev."+a,"/",gc)};var $=function(){this.U="ytloungescreenid";this.ra=2;this.q=this.h="";this.ja=[];this.O=[];this.W=[];this.da=0;this.V=new hc;var a=this.V.get(this.U);a&&(this.h=a)};$.prototype.sa=function(){return!!this.h};
var ic=function(a,b){a.h?b(a.h):(a.ja.push(b),Kb("/api/lounge/pairing/generate_screen_id",z(a.Aa,a)))},jc=function(a,b){a.q?b(a.q):(a.O.push(b),ic(a,z(function(a){if(a)Mb("/api/lounge/pairing/get_lounge_token_batch",{ta:{screen_ids:a},method:"POST",ba:this.ua,aa:z(function(){for(;b=this.O.pop();)b("")},this),X:this});else for(var b;b=this.O.pop();)b()},a)))},kc=function(a,b,c){ic(a,z(function(a){this.h?(Mb("/api/lounge/pairing/register_pairing_code",{la:{screen_id:this.h,pairing_code:a,access_type:"permanent"},
format:"RAW",X:this}),c(this.h)):c("")},a,b))},mc=function(a,b){a.W.push(b);lc(a)},lc=function(a){jc(a,z(function(a){if(!a)for(var c;c=this.W.pop();)c();Mb("/api/lounge/pairing/get_pairing_code",{la:{lounge_token:a,access_type:"permanent"},format:"RAW",ba:this.wa,aa:this.va,X:this})},a))};$.prototype.Aa=function(a){if(Jb(a)){this.h=a.responseText;this.V.set(this.U,this.h,31536E3);for(var b;b=this.ja.pop();)b(a.responseText)}};
$.prototype.ua=function(a){a=Ab(a.responseText);for(this.q=a.screens&&a.screens[0].loungeToken?a.screens[0].loungeToken:"";a=this.O.pop();)a(this.q)};$.prototype.wa=function(a){for(var b;b=this.W.pop();)b(a.responseText);this.da=0};$.prototype.va=function(){this.da<this.ra&&(this.q="",this.da++,lc(this))};var nc=function(){Ta(window,"message",z(this.ya,this));this.za=(new T(r.window.location,k)).f.get("allowFrom")||window.location.hash.substring(1);this.A=new $};
nc.prototype.ya=function(a){a=Ab(a.Y.data);if(a.message)switch(a.message){case "hasScreenId":a=z(this.I,this,"hasScreenId");this.A.sa()?a({hasScreenId:k}):a({hasScreenId:m});break;case "retrieveLoungeToken":oc(this,z(this.I,this,"retrieveLoungeToken"));break;case "refreshLoungeToken":a=z(this.I,this,"refreshLoungeToken");this.A.q="";oc(this,a);break;case "retrievePairingCode":pc(this,z(this.I,this,"retrievePairingCode"));break;case "registerPairingCode":qc(this,a.pairingCode,z(this.I,this,"registerPairingCode"));
break;case "clearAll":a=this.A,a.V.remove(a.U),a.h="",a.q=""}};nc.prototype.I=function(a,b){var c=this.za+"://"+fb(document.location.href),d=window.parent;b.message=a;d.postMessage(Eb(new Cb(i),b),c)};var oc=function(a,b){jc(a.A,function(a){b({loungeToken:a||""})})},pc=function(a,b){mc(a.A,function(a){b({pairingCode:a||""})})},qc=function(a,b,c){kc(a.A,b,function(a){c({screenId:a})})};aa("yt.www.remotepairing.init",function(){new nc});})();


}
/*
     FILE ARCHIVED ON 13:18:18 Aug 25, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:42:36 Jan 21, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.872
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.023
  esindex: 0.015
  cdx.remote: 13.225
  LoadShardBlock: 204.15 (3)
  PetaboxLoader3.datanode: 202.52 (4)
  load_resource: 79.755
  PetaboxLoader3.resolve: 57.491
*/