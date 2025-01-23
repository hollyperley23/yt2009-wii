var _____WB$wombat$assign$function_____ = function(name) {
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function(obj) {
      this.__WB_source = obj;
      return this;
  }
} {
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  (function() {
      function g(a) {
          throw a;
      }
      var i = void 0,
          j = !0,
          k = null,
          n = !1,
          p, s = this;

      function u(a) {
          for (var a = a.split("."), b = s, c; c = a.shift();)
              if (b[c] != k) b = b[c];
              else return k;
          return b
      }

      function aa() {}

      function ba(a) {
          var b = typeof a;
          if ("object" == b)
              if (a) {
                  if (a instanceof Array) return "array";
                  if (a instanceof Object) return b;
                  var c = Object.prototype.toString.call(a);
                  if ("[object Window]" == c) return "object";
                  if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                  if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
              } else return "null";
          else if ("function" == b && "undefined" == typeof a.call) return "object";
          return b
      }

      function v(a) {
          return a !== i
      }

      function x(a) {
          return "array" == ba(a)
      }

      function y(a) {
          var b = ba(a);
          return "array" == b || "object" == b && "number" == typeof a.length
      }

      function z(a) {
          return "string" == typeof a
      }

      function ca(a) {
          return "function" == ba(a)
      }
      var A = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
          da = 0;

      function ea(a, b, c) {
          return a.call.apply(a.bind, arguments)
      }

      function fa(a, b, c) {
          a || g(Error());
          if (2 < arguments.length) {
              var d = Array.prototype.slice.call(arguments, 2);
              return function() {
                  var c = Array.prototype.slice.call(arguments);
                  Array.prototype.unshift.apply(c, d);
                  return a.apply(b, c)
              }
          }
          return function() {
              return a.apply(b, arguments)
          }
      }

      function C(a, b, c) {
          C = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
          return C.apply(k, arguments)
      }

      function ga(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return function() {
              var b = Array.prototype.slice.call(arguments);
              b.unshift.apply(b, c);
              return a.apply(this, b)
          }
      }
      var D = Date.now || function() {
          return +new Date
      };

      function E(a, b) {
          var c = a.split("."),
              d = s;
          !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
          for (var e; c.length && (e = c.shift());) !c.length && v(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
      }

      function F(a, b) {
          function c() {}
          c.prototype = b.prototype;
          a.o = b.prototype;
          a.prototype = new c
      }
      Function.prototype.bind = Function.prototype.bind || function(a, b) {
          if (1 < arguments.length) {
              var c = Array.prototype.slice.call(arguments, 1);
              c.unshift(this, a);
              return C.apply(k, c)
          }
          return C(this, a)
      };

      function G(a) {
          Error.captureStackTrace ? Error.captureStackTrace(this, G) : this.stack = Error().stack || "";
          a && (this.message = "" + a)
      }
      F(G, Error);

      function ha(a) {
          return decodeURIComponent(a.replace(/\+/g, " "))
      };
      var I = Array.prototype,
          ia = I.indexOf ? function(a, b, c) {
              return I.indexOf.call(a, b, c)
          } : function(a, b, c) {
              c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
              if (z(a)) return !z(b) || 1 != b.length ? -1 : a.indexOf(b, c);
              for (; c < a.length; c++)
                  if (c in a && a[c] === b) return c;
              return -1
          },
          J = I.forEach ? function(a, b, c) {
              I.forEach.call(a, b, c)
          } : function(a, b, c) {
              for (var d = a.length, e = z(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
          },
          ja = I.some ? function(a, b, c) {
              return I.some.call(a, b, c)
          } : function(a, b, c) {
              for (var d = a.length, e = z(a) ? a.split("") : a,
                      f = 0; f < d; f++)
                  if (f in e && b.call(c, e[f], f, a)) return j;
              return n
          };

      function ka(a, b) {
          var c = ia(a, b);
          0 <= c && I.splice.call(a, c, 1)
      }

      function la(a) {
          return I.concat.apply(I, arguments)
      }

      function ma(a) {
          var b = a.length;
          if (0 < b) {
              for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
              return c
          }
          return []
      }

      function na(a, b) {
          for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c],
                  e;
              if (x(d) || (e = y(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
              else if (e)
                  for (var f = a.length, h = d.length, m = 0; m < h; m++) a[f + m] = d[m];
              else a.push(d)
          }
      }

      function oa(a, b, c) {
          return 2 >= arguments.length ? I.slice.call(a, b) : I.slice.call(a, b, c)
      };

      function pa(a) {
          var b = [],
              c = 0,
              d;
          for (d in a) b[c++] = a[d];
          return b
      }

      function qa(a) {
          var b = [],
              c = 0,
              d;
          for (d in a) b[c++] = d;
          return b
      }
      var ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

      function sa(a, b) {
          for (var c, d, e = 1; e < arguments.length; e++) {
              d = arguments[e];
              for (c in d) a[c] = d[c];
              for (var f = 0; f < ra.length; f++) c = ra[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
          }
      };
      var K, ta, ua, va;

      function wa() {
          return s.navigator ? s.navigator.userAgent : k
      }
      va = ua = ta = K = n;
      var xa;
      if (xa = wa()) {
          var ya = s.navigator;
          K = 0 == xa.indexOf("Opera");
          ta = !K && -1 != xa.indexOf("MSIE");
          ua = !K && -1 != xa.indexOf("WebKit");
          va = !K && !ua && "Gecko" == ya.product
      }
      var za = K,
          L = ta,
          M = va,
          Aa = ua,
          Ba;
      a: {
          var Ca = "",
              Da;
          if (za && s.opera) var Ea = s.opera.version,
              Ca = "function" == typeof Ea ? Ea() : Ea;
          else if (M ? Da = /rv\:([^\);]+)(\)|;)/ : L ? Da = /MSIE\s+([^\);]+)(\)|;)/ : Aa && (Da = /WebKit\/(\S+)/), Da) var Fa = Da.exec(wa()),
              Ca = Fa ? Fa[1] : "";
          if (L) {
              var Ha, Ia = s.document;
              Ha = Ia ? Ia.documentMode : i;
              if (Ha > parseFloat(Ca)) {
                  Ba = "" + Ha;
                  break a
              }
          }
          Ba = Ca
      }
      var Ja = Ba,
          Ka = {};

      function N(a) {
          var b;
          if (!(b = Ka[a])) {
              b = 0;
              for (var c = ("" + Ja).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                  var h = c[f] || "",
                      m = d[f] || "",
                      o = RegExp("(\\d*)(\\D*)", "g"),
                      q = RegExp("(\\d*)(\\D*)", "g");
                  do {
                      var r = o.exec(h) || ["", "", ""],
                          l = q.exec(m) || ["", "", ""];
                      if (0 == r[0].length && 0 == l[0].length) break;
                      b = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1],
                          10)) > (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == l[2].length) ? -1 : (0 == r[2].length) > (0 == l[2].length) ? 1 : 0) || (r[2] < l[2] ? -1 : r[2] > l[2] ? 1 : 0)
                  } while (0 == b)
              }
              b = Ka[a] = 0 <= b
          }
          return b
      }
      var La = {};

      function Ma() {
          return La[9] || (La[9] = L && !!document.documentMode && 9 <= document.documentMode)
      };
      !L || Ma();
      !M && !L || L && Ma() || M && N("1.9.1");
      L && N("9");
      var Na = {
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          colspan: "colSpan",
          rowspan: "rowSpan",
          valign: "vAlign",
          height: "height",
          width: "width",
          usemap: "useMap",
          frameborder: "frameBorder",
          maxlength: "maxLength",
          type: "type"
      };
      var Oa = u("yt.dom.getNextId_");
      if (!Oa) {
          Oa = function() {
              return ++Pa
          };
          E("yt.dom.getNextId_", Oa);
          var Pa = 0
      };

      function Qa(a) {
          if (a = a || u("window.event")) {
              for (var b in a) 0 <= ia(Ra, b) || (this[b] = a[b]);
              if ((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
              this.target = b;
              if (b = a.relatedTarget) try {
                  b = b.nodeName && b
              } catch (c) {
                  b = k
              } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
              this.relatedTarget = b;
              this.clientX = a.clientX !== i ? a.clientX : a.pageX;
              this.clientY = a.clientY !== i ? a.clientY : a.pageY;
              if ((a.clientX || a.clientY) && document.body && document.documentElement) this.pageX = a.clientX + document.body.scrollLeft +
                  document.documentElement.scrollLeft, this.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
              this.keyCode = a.keyCode ? a.keyCode : a.which;
              this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
              this.altKey = a.altKey;
              this.ctrlKey = a.ctrlKey;
              this.shiftKey = a.shiftKey;
              this.X = a
          }
      }
      var Ra = "stopPropagation preventMouseEvent preventManipulation preventDefault layerX layerY".split(" ");
      p = Qa.prototype;
      p.type = "";
      p.target = k;
      p.relatedTarget = k;
      p.currentTarget = k;
      p.data = k;
      p.keyCode = 0;
      p.charCode = 0;
      p.altKey = n;
      p.ctrlKey = n;
      p.shiftKey = n;
      p.X = k;
      p.clientX = 0;
      p.clientY = 0;
      p.pageX = 0;
      p.pageY = 0;
      p.preventDefault = function() {
          this.X.returnValue = n;
          this.X.preventDefault && this.X.preventDefault()
      };
      var Sa = u("yt.events.listeners_") || {};
      E("yt.events.listeners_", Sa);
      var Ta = u("yt.events.counter_") || {
          count: 0
      };
      E("yt.events.counter_", Ta);

      function Ua(a, b) {
          var c = window;
          if (c && (c.addEventListener || c.attachEvent)) {
              var d;
              a: {
                  d = function(d) {
                      return d[0] == c && d[1] == a && d[2] == b && d[4] == n
                  };
                  for (var e in Sa)
                      if (d.call(i, Sa[e])) {
                          d = e;
                          break a
                      }
                  d = i
              }
              d || (d = ++Ta.count + "", e = function(a) {
                  a = new Qa(a);
                  a.currentTarget = c;
                  return b.call(c, a)
              }, Sa[d] = [c, a, b, e, n], c.addEventListener ? c.addEventListener(a, e, n) : c.attachEvent("on" + a, e))
          }
      };

      function Va() {}
      Va.prototype.r = n;
      Va.prototype.R = function() {
          this.r || (this.r = j, this.s())
      };
      Va.prototype.s = function() {
          this.I && Wa.apply(k, this.I);
          if (this.D)
              for (; this.D.length;) this.D.shift()()
      };

      function Wa(a) {
          for (var b = 0, c = arguments.length; b < c; ++b) {
              var d = arguments[b];
              y(d) ? Wa.apply(k, d) : d && "function" == typeof d.R && d.R()
          }
      };

      function O() {
          this.a = [];
          this.b = {}
      }
      F(O, Va);
      p = O.prototype;
      p.ha = 1;
      p.M = 0;
      p.xa = function(a, b, c) {
          var d = this.b[a];
          d || (d = this.b[a] = []);
          var e = this.ha;
          this.a[e] = a;
          this.a[e + 1] = b;
          this.a[e + 2] = c;
          this.ha = e + 3;
          d.push(e);
          return e
      };
      p.Z = function(a) {
          if (0 != this.M) return this.e || (this.e = []), this.e.push(a), n;
          var b = this.a[a];
          if (b) {
              var c = this.b[b];
              c && ka(c, a);
              delete this.a[a];
              delete this.a[a + 1];
              delete this.a[a + 2]
          }
          return !!b
      };
      p.wa = function(a, b) {
          var c = this.b[a];
          if (c) {
              this.M++;
              for (var d = oa(arguments, 1), e = 0, f = c.length; e < f; e++) {
                  var h = c[e];
                  this.a[h + 1].apply(this.a[h + 2], d)
              }
              this.M--;
              if (this.e && 0 == this.M)
                  for (; c = this.e.pop();) this.Z(c);
              return 0 != e
          }
          return n
      };
      p.clear = function(a) {
          if (a) {
              var b = this.b[a];
              b && (J(b, this.Z, this), delete this.b[a])
          } else this.a.length = 0, this.b = {}
      };
      p.k = function(a) {
          if (a) {
              var b = this.b[a];
              return b ? b.length : 0
          }
          a = 0;
          for (b in this.b) a += this.k(b);
          return a
      };
      p.s = function() {
          O.o.s.call(this);
          delete this.a;
          delete this.b;
          delete this.e
      };
      var Xa = window.yt && window.yt.config_ || {};
      E("yt.config_", Xa);
      var Ya = window.yt && window.yt.tokens_ || {};
      E("yt.tokens_", Ya);
      E("yt.globals_", window.yt && window.yt.globals_ || {});
      E("yt.msgs_", window.yt && window.yt.msgs_ || {});
      var Za = window.yt && window.yt.timeouts_ || [];
      E("yt.timeouts_", Za);
      E("yt.intervals_", window.yt && window.yt.intervals_ || []);

      function $a(a, b) {
          var c = window.setTimeout(a, b);
          Za.push(c);
          return c
      }
      eval("/*@cc_on!@*/false");
      var ab = u("yt.pubsub.instance_") || new O;
      O.prototype.subscribe = O.prototype.xa;
      O.prototype.unsubscribeByKey = O.prototype.Z;
      O.prototype.publish = O.prototype.wa;
      O.prototype.clear = O.prototype.clear;
      E("yt.pubsub.instance_", ab);

      function bb(a, b) {
          var c = u("yt.pubsub.instance_");
          c && c.publish.apply(c, arguments)
      };
      var P = "StopIteration" in s ? s.StopIteration : Error("StopIteration");

      function Q() {}
      Q.prototype.a = function() {
          g(P)
      };
      Q.prototype.i = function() {
          return this
      };

      function cb(a) {
          if (a instanceof Q) return a;
          if ("function" == typeof a.i) return a.i(n);
          if (y(a)) {
              var b = 0,
                  c = new Q;
              c.a = function() {
                  for (;;) {
                      b >= a.length && g(P);
                      if (b in a) return a[b++];
                      b++
                  }
              };
              return c
          }
          g(Error("Not implemented"))
      }

      function db(a, b) {
          if (y(a)) try {
              J(a, b, i)
          } catch (c) {
              c !== P && g(c)
          } else {
              a = cb(a);
              try {
                  for (;;) b.call(i, a.a(), i, a)
              } catch (d) {
                  d !== P && g(d)
              }
          }
      };

      function eb(a) {
          if ("function" == typeof a.h) return a.h();
          if (z(a)) return a.split("");
          if (y(a)) {
              for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
              return b
          }
          return pa(a)
      };

      function fb(a, b) {
          this.b = {};
          this.a = [];
          var c = arguments.length;
          if (1 < c) {
              c % 2 && g(Error("Uneven number of arguments"));
              for (var d = 0; d < c; d += 2) gb(this, arguments[d], arguments[d + 1])
          } else if (a) {
              a instanceof fb ? (c = a.n(), d = a.h()) : (c = qa(a), d = pa(a));
              for (var e = 0; e < c.length; e++) gb(this, c[e], d[e])
          }
      }
      p = fb.prototype;
      p.c = 0;
      p.C = 0;
      p.k = function() {
          return this.c
      };
      p.h = function() {
          hb(this);
          for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
          return a
      };
      p.n = function() {
          hb(this);
          return this.a.concat()
      };
      p.clear = function() {
          this.b = {};
          this.C = this.c = this.a.length = 0
      };

      function hb(a) {
          if (a.c != a.a.length) {
              for (var b = 0, c = 0; b < a.a.length;) {
                  var d = a.a[b];
                  R(a.b, d) && (a.a[c++] = d);
                  b++
              }
              a.a.length = c
          }
          if (a.c != a.a.length) {
              for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], R(e, d) || (a.a[c++] = d, e[d] = 1), b++;
              a.a.length = c
          }
      }
      p.get = function(a, b) {
          return R(this.b, a) ? this.b[a] : b
      };

      function gb(a, b, c) {
          R(a.b, b) || (a.c++, a.a.push(b), a.C++);
          a.b[b] = c
      }
      p.w = function() {
          return new fb(this)
      };
      p.i = function(a) {
          hb(this);
          var b = 0,
              c = this.a,
              d = this.b,
              e = this.C,
              f = this,
              h = new Q;
          h.a = function() {
              for (;;) {
                  e != f.C && g(Error("The map has changed since the iterator was created"));
                  b >= c.length && g(P);
                  var h = c[b++];
                  return a ? h : d[h]
              }
          };
          return h
      };

      function R(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b)
      };

      function ib() {
          this.a = D()
      }
      new ib;
      ib.prototype.reset = function() {
          this.a = D()
      };
      ib.prototype.get = function() {
          return this.a
      };

      function jb(a) {
          jb[" "](a);
          return a
      }
      jb[" "] = aa;
      !L || Ma();
      var kb = !L || Ma(),
          lb = L && !N("8");
      !Aa || N("528");
      M && N("1.9b") || L && N("8") || za && N("9.5") || Aa && N("528");
      M && !N("8") || L && N("9");

      function S(a, b) {
          this.type = a;
          this.currentTarget = this.target = b
      }
      F(S, Va);
      S.prototype.s = function() {
          delete this.type;
          delete this.target;
          delete this.currentTarget
      };
      S.prototype.a = n;
      S.prototype.preventDefault = function() {};

      function U(a, b) {
          a && mb(this, a, b)
      }
      F(U, S);
      p = U.prototype;
      p.target = k;
      p.relatedTarget = k;
      p.K = k;

      function mb(a, b, c) {
          var d = a.type = b.type;
          S.call(a, d);
          a.target = b.target || b.srcElement;
          a.currentTarget = c;
          if (c = b.relatedTarget) {
              if (M) {
                  var e;
                  a: {
                      try {
                          jb(c.nodeName);
                          e = j;
                          break a
                      } catch (f) {}
                      e = n
                  }
                  e || (c = k)
              }
          } else "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
          a.relatedTarget = c;
          a.K = b;
          b.defaultPrevented && a.preventDefault();
          delete a.a
      }
      p.preventDefault = function() {
          U.o.preventDefault.call(this);
          var a = this.K;
          if (a.preventDefault) a.preventDefault();
          else if (a.returnValue = n, lb) try {
              if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
          } catch (b) {}
      };
      p.s = function() {
          U.o.s.call(this);
          this.relatedTarget = this.currentTarget = this.target = this.K = k
      };

      function nb() {}
      var ob = 0;
      nb.prototype.key = 0;
      nb.prototype.q = n;
      nb.prototype.a = n;
      nb.prototype.handleEvent = function(a) {
          return this.b ? this.J.call(this.da || this.src, a) : this.J.handleEvent.call(this.J, a)
      };
      var V = {},
          W = {},
          X = {},
          pb = {};

      function qb(a, b, c, d, e) {
          if (b)
              if (x(b))
                  for (var f = 0; f < b.length; f++) qb(a, b[f], c, d, e);
              else {
                  var d = !!d,
                      h = W;
                  b in h || (h[b] = {
                      c: 0,
                      m: 0
                  });
                  h = h[b];
                  d in h || (h[d] = {
                      c: 0,
                      m: 0
                  }, h.c++);
                  var h = h[d],
                      m = a[A] || (a[A] = ++da),
                      o;
                  h.m++;
                  if (h[m]) {
                      o = h[m];
                      for (f = 0; f < o.length; f++)
                          if (h = o[f], h.J == c && h.da == e) {
                              if (h.q) break;
                              return
                          }
                  } else o = h[m] = [], h.c++;
                  var q = rb,
                      r = kb ? function(a) {
                          return q.call(r.src, r.key, a)
                      } : function(a) {
                          a = q.call(r.src, r.key, a);
                          if (!a) return a
                      },
                      f = r;
                  f.src = a;
                  var l = h = new nb;
                  ca(c) ? l.b = j : c && c.handleEvent && ca(c.handleEvent) ? l.b = n : g(Error("Invalid listener argument"));
                  l.J = c;
                  l.e = f;
                  l.src = a;
                  l.type = b;
                  l.capture = !!d;
                  l.da = e;
                  l.a = n;
                  l.key = ++ob;
                  l.q = n;
                  c = h.key;
                  f.key = c;
                  o.push(h);
                  V[c] = h;
                  X[m] || (X[m] = []);
                  X[m].push(h);
                  a.addEventListener ? (a == s || !a.la) && a.addEventListener(b, f, d) : a.attachEvent(b in pb ? pb[b] : pb[b] = "on" + b, f)
              }
          else g(Error("Invalid event type"))
      }

      function sb(a, b, c, d) {
          if (!d.V && d.ga) {
              for (var e = 0, f = 0; e < d.length; e++) d[e].q ? d[e].e.src = k : (e != f && (d[f] = d[e]), f++);
              d.length = f;
              d.ga = n;
              0 == f && (delete W[a][b][c], W[a][b].c--, 0 == W[a][b].c && (delete W[a][b], W[a].c--), 0 == W[a].c && delete W[a])
          }
      }

      function tb(a, b, c, d, e) {
          var f = 1,
              b = b[A] || (b[A] = ++da);
          if (a[b]) {
              a.m--;
              a = a[b];
              a.V ? a.V++ : a.V = 1;
              try {
                  for (var h = a.length, m = 0; m < h; m++) {
                      var o = a[m];
                      o && !o.q && (f &= ub(o, e) !== n)
                  }
              } finally {
                  a.V--, sb(c, d, b, a)
              }
          }
          return Boolean(f)
      }

      function ub(a, b) {
          if (a.a) {
              var c = a.key;
              if (V[c]) {
                  var d = V[c];
                  if (!d.q) {
                      var e = d.src,
                          f = d.type,
                          h = d.e,
                          m = d.capture;
                      e.removeEventListener ? (e == s || !e.la) && e.removeEventListener(f, h, m) : e.detachEvent && e.detachEvent(f in pb ? pb[f] : pb[f] = "on" + f, h);
                      e = e[A] || (e[A] = ++da);
                      h = W[f][m][e];
                      if (X[e]) {
                          var o = X[e];
                          ka(o, d);
                          0 == o.length && delete X[e]
                      }
                      d.q = j;
                      h.ga = j;
                      sb(f, m, e, h);
                      delete V[c]
                  }
              }
          }
          return a.handleEvent(b)
      }

      function rb(a, b) {
          if (!V[a]) return j;
          var c = V[a],
              d = c.type,
              e = W;
          if (!(d in e)) return j;
          var e = e[d],
              f, h;
          if (!kb) {
              f = b || u("window.event");
              var m = j in e,
                  o = n in e;
              if (m) {
                  if (0 > f.keyCode || f.returnValue != i) return j;
                  a: {
                      var q = n;
                      if (0 == f.keyCode) try {
                          f.keyCode = -1;
                          break a
                      } catch (r) {
                          q = j
                      }
                      if (q || f.returnValue == i) f.returnValue = j
                  }
              }
              q = new U;
              mb(q, f, this);
              f = j;
              try {
                  if (m) {
                      for (var l = [], B = q.currentTarget; B; B = B.parentNode) l.push(B);
                      h = e[j];
                      h.m = h.c;
                      for (var w = l.length - 1; !q.a && 0 <= w && h.m; w--) q.currentTarget = l[w], f &= tb(h, l[w], d, j, q);
                      if (o) {
                          h = e[n];
                          h.m = h.c;
                          for (w = 0; !q.a && w < l.length && h.m; w++) q.currentTarget = l[w], f &= tb(h, l[w], d, n, q)
                      }
                  } else f = ub(c, q)
              } finally {
                  l && (l.length = 0), q.R()
              }
              return f
          }
          d = new U(b, this);
          try {
              f = ub(c, d)
          } finally {
              d.R()
          }
          return f
      };
      var vb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

      function wb(a) {
          if (xb) {
              xb = n;
              var b = s.location;
              if (b) {
                  var c = b.href;
                  if (c && (c = (c = wb(c)[3] || k) && decodeURIComponent(c)) && c != b.hostname) xb = j, g(Error())
              }
          }
          return a.match(vb)
      }
      var xb = Aa;

      function yb(a) {
          if (a[1]) {
              var b = a[0],
                  c = b.indexOf("#");
              0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
              c = b.indexOf("?");
              0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = i)
          }
          return a.join("")
      }

      function zb(a, b, c) {
          if (x(b))
              for (var d = 0; d < b.length; d++) zb(a, "" + b[d], c);
          else b != k && c.push("&", a, "" === b ? "" : "=", encodeURIComponent("" + b))
      }

      function Ab(a, b) {
          for (var c in b) zb(c, b[c], a);
          return a
      };

      function Bb(a, b) {
          var c;
          if (a instanceof Bb) this.l = v(b) ? b : a.l, Cb(this, a.t), this.Q = a.Q, this.G = a.G, Db(this, a.P), this.O = a.O, Eb(this, a.a.w()), this.N = a.N;
          else if (a && (c = wb("" + a))) {
              this.l = !!b;
              Cb(this, c[1] || "", j);
              var d = c[2] || "";
              this.Q = d ? decodeURIComponent(d) : "";
              this.G = (d = c[3] || "") ? decodeURIComponent(d) : "";
              Db(this, c[4]);
              this.O = (d = c[5] || "") ? decodeURIComponent(d) : "";
              Eb(this, c[6] || "", j);
              this.N = (c = c[7] || "") ? decodeURIComponent(c) : ""
          } else this.l = !!b, this.a = new Fb(k, 0, this.l)
      }
      p = Bb.prototype;
      p.t = "";
      p.Q = "";
      p.G = "";
      p.P = k;
      p.O = "";
      p.N = "";
      p.l = n;
      p.toString = function() {
          var a = [],
              b = this.t;
          b && a.push(Gb(b, Hb), ":");
          if (b = this.G) {
              a.push("//");
              var c = this.Q;
              c && a.push(Gb(c, Hb), "@");
              a.push(encodeURIComponent("" + b));
              b = this.P;
              b != k && a.push(":", "" + b)
          }
          if (b = this.O) this.G && "/" != b.charAt(0) && a.push("/"), a.push(Gb(b, "/" == b.charAt(0) ? Ib : Jb));
          (b = this.a.toString()) && a.push("?", b);
          (b = this.N) && a.push("#", Gb(b, Kb));
          return a.join("")
      };
      p.w = function() {
          return new Bb(this)
      };

      function Cb(a, b, c) {
          a.t = c ? b ? decodeURIComponent(b) : "" : b;
          a.t && (a.t = a.t.replace(/:$/, ""))
      }

      function Db(a, b) {
          b ? (b = Number(b), (isNaN(b) || 0 > b) && g(Error("Bad port number " + b)), a.P = b) : a.P = k
      }

      function Eb(a, b, c) {
          if (b instanceof Fb) {
              a.a = b;
              b = a.a;
              if ((a = a.l) && !b.b) {
                  Y(b);
                  b.a = k;
                  var d = b.d,
                      c = function(a, b) {
                          var c = b.toLowerCase();
                          b != c && (Lb(this, b), Mb(this, c, a))
                      };
                  if ("function" == typeof d.forEach) d.forEach(c, b);
                  else if (y(d) || z(d)) J(d, c, b);
                  else {
                      var e;
                      if ("function" == typeof d.n) e = d.n();
                      else if ("function" != typeof d.h)
                          if (y(d) || z(d)) {
                              e = [];
                              for (var f = d.length, h = 0; h < f; h++) e.push(h)
                          } else e = qa(d);
                      else e = i;
                      d = eb(d);
                      f = d.length;
                      for (h = 0; h < f; h++) c.call(b, d[h], e && e[h])
                  }
              }
              b.b = a
          } else c || (b = Gb(b, Nb)), a.a = new Fb(b, 0, a.l)
      }

      function Gb(a, b) {
          return z(a) ? encodeURI(a).replace(b, Ob) : k
      }

      function Ob(a) {
          a = a.charCodeAt(0);
          return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
      }
      var Hb = /[#\/\?@]/g,
          Jb = /[\#\?:]/g,
          Ib = /[\#\?]/g,
          Nb = /[\#\?@]/g,
          Kb = /#/g;

      function Fb(a, b, c) {
          this.a = a || k;
          this.b = !!c
      }

      function Y(a) {
          if (!a.d && (a.d = new fb, a.c = 0, a.a))
              for (var b = a.a.split("&"), c = 0; c < b.length; c++) {
                  var d = b[c].indexOf("="),
                      e = k,
                      f = k;
                  0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                  e = ha(e);
                  e = Pb(a, e);
                  d = a;
                  f = f ? ha(f) : "";
                  Y(d);
                  d.a = k;
                  var e = Pb(d, e),
                      h = d.d.get(e);
                  h || gb(d.d, e, h = []);
                  h.push(f);
                  d.c++
              }
      }
      p = Fb.prototype;
      p.d = k;
      p.c = k;
      p.k = function() {
          Y(this);
          return this.c
      };

      function Lb(a, b) {
          Y(a);
          b = Pb(a, b);
          if (R(a.d.b, b)) {
              a.a = k;
              a.c -= a.d.get(b).length;
              var c = a.d;
              R(c.b, b) && (delete c.b[b], c.c--, c.C++, c.a.length > 2 * c.c && hb(c))
          }
      }
      p.clear = function() {
          this.d = this.a = k;
          this.c = 0
      };
      p.n = function() {
          Y(this);
          for (var a = this.d.h(), b = this.d.n(), c = [], d = 0; d < b.length; d++)
              for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
          return c
      };
      p.h = function(a) {
          Y(this);
          var b = [];
          if (a) {
              var c = a;
              Y(this);
              c = Pb(this, c);
              R(this.d.b, c) && (b = la(b, this.d.get(Pb(this, a))))
          } else {
              a = this.d.h();
              for (c = 0; c < a.length; c++) b = la(b, a[c])
          }
          return b
      };
      p.get = function(a, b) {
          var c = a ? this.h(a) : [];
          return 0 < c.length ? c[0] : b
      };

      function Mb(a, b, c) {
          Lb(a, b);
          0 < c.length && (a.a = k, gb(a.d, Pb(a, b), ma(c)), a.c += c.length)
      }
      p.toString = function() {
          if (this.a) return this.a;
          if (!this.d) return "";
          for (var a = [], b = this.d.n(), c = 0; c < b.length; c++)
              for (var d = b[c], e = encodeURIComponent("" + d), d = this.h(d), f = 0; f < d.length; f++) {
                  var h = e;
                  "" !== d[f] && (h += "=" + encodeURIComponent("" + d[f]));
                  a.push(h)
              }
          return this.a = a.join("&")
      };
      p.w = function() {
          var a = new Fb;
          a.a = this.a;
          this.d && (a.d = this.d.w());
          return a
      };

      function Pb(a, b) {
          var c = "" + b;
          a.b && (c = c.toLowerCase());
          return c
      };
      /*
       Portions of this code are from MochiKit, received by
       The Closure Authors under the MIT license. All other code is Copyright
       2005-2009 The Closure Authors. All Rights Reserved.
      */
      function Qb(a, b) {
          this.a = [];
          this.D = a;
          this.I = b || k
      }
      p = Qb.prototype;
      p.j = n;
      p.A = n;
      p.B = 0;
      p.ba = n;
      p.ma = n;
      p.Y = 0;
      p.cancel = function(a) {
          if (this.j) this.e instanceof Qb && this.e.cancel();
          else {
              if (this.b) {
                  var b = this.b;
                  delete this.b;
                  a ? b.cancel(a) : (b.Y--, 0 >= b.Y && b.cancel())
              }
              this.D ? this.D.call(this.I, this) : this.ba = j;
              this.j || (a = new Rb, Sb(this), Tb(this, n, a))
          }
      };
      p.ea = function(a, b) {
          Tb(this, a, b);
          this.B--;
          0 == this.B && this.j && Ub(this)
      };

      function Tb(a, b, c) {
          a.j = j;
          a.e = c;
          a.A = !b;
          Ub(a)
      }

      function Sb(a) {
          a.j && (a.ba || g(new Vb), a.ba = n)
      }

      function Wb(a) {
          return ja(a.a, function(a) {
              return ca(a[1])
          })
      }

      function Ub(a) {
          a.r && (a.j && Wb(a)) && (s.clearTimeout(a.r), delete a.r);
          a.b && (a.b.Y--, delete a.b);
          for (var b = a.e, c = n, d = n; a.a.length && 0 == a.B;) {
              var e = a.a.shift(),
                  f = e[0],
                  h = e[1],
                  e = e[2];
              if (f = a.A ? h : f) try {
                  var m = f.call(e || a.I, b);
                  v(m) && (a.A = a.A && (m == b || m instanceof Error), a.e = b = m);
                  b instanceof Qb && (d = j, a.B++)
              } catch (o) {
                  b = o, a.A = j, Wb(a) || (c = j)
              }
          }
          a.e = b;
          d && a.B && (d = b, m = C(a.ea, a, j), f = C(a.ea, a, n), d.a.push([m, f, i]), d.j && Ub(d), b.ma = j);
          c && (a.r = s.setTimeout(function() {
              g(new Xb(b))
          }, 0))
      }

      function Vb() {
          G.call(this)
      }
      F(Vb, G);
      Vb.prototype.message = "Already called";

      function Rb() {
          G.call(this)
      }
      F(Rb, G);
      Rb.prototype.message = "Deferred was cancelled";

      function Xb(a) {
          G.call(this);
          this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
      }
      F(Xb, G);

      function Yb() {
          if (this && this.fa) {
              var a = this.fa;
              a && "SCRIPT" == a.tagName && Zb(a, j, this.L)
          }
      }

      function Zb(a, b, c) {
          c != k && s.clearTimeout(c);
          a.onload = aa;
          a.onerror = aa;
          a.onreadystatechange = aa;
          b && window.setTimeout(function() {
              a && a.parentNode && a.parentNode.removeChild(a)
          }, 0)
      }

      function $b(a, b) {
          var c = "Jsloader error (code #" + a + ")";
          b && (c += ": " + b);
          G.call(this, c)
      }
      F($b, G);

      function ac(a, b) {
          this.b = new Bb(a);
          this.a = b ? b : "callback";
          this.L = 5E3
      }
      var bc = 0;
      ac.prototype.cancel = function(a) {
          a && (a.ua && a.ua.cancel(), a.va && cc(a.va, n))
      };

      function cc(a, b) {
          s._callbacks_[a] && (b ? delete s._callbacks_[a] : s._callbacks_[a] = aa)
      };

      function dc(a) {
          a = "" + a;
          if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
              return eval("(" + a + ")")
          } catch (b) {}
          g(Error("Invalid JSON string: " + a))
      }

      function ec(a) {
          return eval("(" + a + ")")
      }

      function fc(a) {
          this.a = a
      }

      function gc(a, b) {
          var c = [];
          hc(a, b, c);
          return c.join("")
      }

      function hc(a, b, c) {
          switch (typeof b) {
              case "string":
                  ic(b, c);
                  break;
              case "number":
                  c.push(isFinite(b) && !isNaN(b) ? b : "null");
                  break;
              case "boolean":
                  c.push(b);
                  break;
              case "undefined":
                  c.push("null");
                  break;
              case "object":
                  if (b == k) {
                      c.push("null");
                      break
                  }
                  if (x(b)) {
                      var d = b.length;
                      c.push("[");
                      for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], hc(a, a.a ? a.a.call(b, "" + f, e) : e, c), e = ",";
                      c.push("]");
                      break
                  }
                  c.push("{");
                  d = "";
                  for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), ic(f, c), c.push(":"),
                      hc(a, a.a ? a.a.call(b, f, e) : e, c), d = ","));
                  c.push("}");
                  break;
              case "function":
                  break;
              default:
                  g(Error("Unknown type: " + typeof b))
          }
      }
      var jc = {
              '"': '\\"',
              "\\": "\\\\",
              "/": "\\/",
              "\b": "\\b",
              "\f": "\\f",
              "\n": "\\n",
              "\r": "\\r",
              "\t": "\\t",
              "\x0B": "\\u000b"
          },
          kc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

      function ic(a, b) {
          b.push('"', a.replace(kc, function(a) {
              if (a in jc) return jc[a];
              var b = a.charCodeAt(0),
                  e = "\\u";
              16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
              return jc[a] = e + b.toString(16)
          }), '"')
      };

      function lc(a) {
          "?" == a.charAt(0) && (a = a.substr(1));
          for (var a = a.split("&"), b = {}, c = 0, d = a.length; c < d; c++) {
              var e = a[c].split("=");
              if (1 == e.length && e[0] || 2 == e.length) {
                  var f = ha(e[0] || ""),
                      e = ha(e[1] || "");
                  f in b ? x(b[f]) ? na(b[f], e) : b[f] = [b[f], e] : b[f] = e
              }
          }
          return b
      };
      var mc = k;
      "undefined" != typeof XMLHttpRequest ? mc = function() {
          return new XMLHttpRequest
      } : "undefined" != typeof ActiveXObject && (mc = function() {
          return new ActiveXObject("Microsoft.XMLHTTP")
      });

      function nc(a, b) {
          var c = b.format || "JSON";
          b.ya && (a = document.location.protocol + "//" + document.location.hostname + a);
          var d = b.ia;
          if (d) {
              var e, f = a.split("?", 2);
              e = f[0];
              var f = lc(f[1] || ""),
                  h;
              for (h in d) f[h] = d[h];
              a = yb(Ab([e], f))
          }
          e = b.za || "";
          if (d = b.aa) e = lc(e), sa(e, d), d = Ab([], e), d[0] = "", e = d.join("");
          var m = n,
              o, q;
          var d = a,
              r = function(a) {
                  if (!m) {
                      m = j;
                      o && window.clearTimeout(o);
                      var d;
                      a: switch (a && "status" in a ? a.status : -1) {
                          case 0:
                          case 200:
                          case 204:
                          case 304:
                              d = j;
                              break a;
                          default:
                              d = n
                      }
                      var e = k;
                      if (d || 400 <= a.status && 500 > a.status) {
                          var f =
                              k;
                          switch (c) {
                              case "JSON":
                                  var e = a.responseText,
                                      h = a.getResponseHeader("Content-Type") || "";
                                  e && 0 <= h.indexOf("json") && (f = ec(e));
                                  break;
                              case "XML":
                                  if (e = (e = a.responseXML) ? e ? (e = ("responseXML" in e ? e.responseXML : e).getElementsByTagName("root")) && 0 < e.length ? e[0] : k : k : k, e) f = {}, J(e.getElementsByTagName("*"), function(a) {
                                      var b = f,
                                          c = a.tagName,
                                          d = "";
                                      J(a.childNodes, function(a) {
                                          d = d + a.nodeValue
                                      });
                                      b[c] = d
                                  })
                          }
                          e = f
                      }
                      if (d) a: {
                          switch (c) {
                              case "XML":
                                  d = 0 == parseInt(e && e.return_code, 10);
                                  break a;
                              case "RAW":
                                  d = j;
                                  break a
                          }
                          d = !!e
                      }
                      e = e || {};
                      h = b.S ||
                          s;
                      d ? b.U && b.U.call(h, a, e) : b.T && b.T.call(h, a, e);
                      b.sa && b.sa.call(h, a, e)
                  }
              };
          h = b.method;
          f = e;
          e = b.headers;
          var l = mc && mc();
          if ("open" in l) {
              l.onreadystatechange = function() {
                  4 == (l && "readyState" in l ? l.readyState : 0) && r && r(l)
              };
              h = (h || "GET").toUpperCase();
              f = f || "";
              l.open(h, d, j);
              d = "POST" == h;
              if (e)
                  for (var B in e) l.setRequestHeader(B, e[B]), "content-type" == B.toLowerCase() && (d = n);
              d && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
              l.send(f);
              q = l
          } else q = i;
          b.ta && 0 < b.timeout && (o = $a(function() {
              m || (m = j, q.abort(),
                  window.clearTimeout(o), b.ta.call(b.S || s, q))
          }, b.timeout))
      };

      function oc(a) {
          this.a = a
      }
      var pc = /\s*;\s*/;

      function qc(a, b, c, d, e, f) {
          /[;=\s]/.test(b) && g(Error('Invalid cookie name "' + b + '"'));
          /[;\r\n]/.test(c) && g(Error('Invalid cookie value "' + c + '"'));
          v(d) || (d = -1);
          f = f ? ";domain=" + f : "";
          e = e ? ";path=" + e : "";
          d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(D() + 1E3 * d)).toUTCString();
          a.a.cookie = b + "=" + c + f + e + d + ""
      }
      p = oc.prototype;
      p.get = function(a, b) {
          for (var c = a + "=", d = (this.a.cookie || "").split(pc), e = 0, f; f = d[e]; e++) {
              if (0 == f.indexOf(c)) return f.substr(c.length);
              if (f == a) return ""
          }
          return b
      };
      p.n = function() {
          return rc(this).keys
      };
      p.h = function() {
          return rc(this).qa
      };
      p.k = function() {
          return !this.a.cookie ? 0 : (this.a.cookie || "").split(pc).length
      };
      p.clear = function() {
          for (var a = rc(this).keys, b = a.length - 1; 0 <= b; b--) {
              var c = a[b];
              this.get(c);
              qc(this, c, "", 0, i, i)
          }
      };

      function rc(a) {
          for (var a = (a.a.cookie || "").split(pc), b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
          return {
              keys: b,
              qa: c
          }
      }
      var sc = new oc(document);
      sc.b = 3950;

      function tc(a, b, c) {
          qc(sc, "" + a, b, c, "/", "192.168.1.184")
      }

      function uc(a) {
          return sc.get("" + a, "")
      }

      function vc(a) {
          a = "" + a;
          sc.get(a);
          qc(sc, a, "", 0, "/", "192.168.1.184")
      };

      function wc() {};

      function xc() {}
      F(xc, wc);
      xc.prototype.k = function() {
          var a = 0;
          db(this.i(j), function() {
              a++
          });
          return a
      };
      xc.prototype.clear = function() {
          var a;
          a = this.i(j);
          if (y(a)) a = ma(a);
          else {
              a = cb(a);
              var b = [];
              db(a, function(a) {
                  b.push(a)
              });
              a = b
          }
          var c = this;
          J(a, function(a) {
              c.v(a)
          })
      };

      function yc(a) {
          this.a = a
      }
      F(yc, xc);
      p = yc.prototype;
      p.W = function(a, b) {
          try {
              this.a.setItem(a, b)
          } catch (c) {
              g("Storage mechanism: Quota exceeded")
          }
      };
      p.get = function(a) {
          a = this.a.getItem(a);
          if (z(a) || a === k) return a;
          g("Storage mechanism: Invalid value was encountered")
      };
      p.v = function(a) {
          this.a.removeItem(a)
      };
      p.k = function() {
          return this.a.length
      };
      p.i = function(a) {
          var b = 0,
              c = new Q,
              d = this;
          c.a = function() {
              b >= d.k() && g(P);
              var c;
              c = d.a.key(b++);
              if (a) return c;
              c = d.a.getItem(c);
              if (z(c)) return c;
              g("Storage mechanism: Invalid value was encountered")
          };
          return c
      };
      p.clear = function() {
          this.a.clear()
      };

      function zc() {
          var a = k;
          try {
              a = window.localStorage || k
          } catch (b) {}
          this.a = a
      }
      F(zc, yc);

      function Ac(a, b) {
          if (L && !N(9)) {
              Bc || (Bc = new fb);
              this.f = Bc.get(a);
              this.f || (b ? this.f = document.getElementById(b) : (this.f = document.createElement("userdata"), this.f.addBehavior("#default#userData"), document.body.appendChild(this.f)), gb(Bc, a, this.f));
              this.ca = a;
              try {
                  this.f.load(this.ca)
              } catch (c) {
                  this.f = k
              }
          }
      }
      F(Ac, xc);
      var Cc = {
              ".": ".2E",
              "!": ".21",
              "~": ".7E",
              "*": ".2A",
              "'": ".27",
              "(": ".28",
              ")": ".29",
              "%": "."
          },
          Bc = k;
      p = Ac.prototype;
      p.f = k;
      p.ca = k;

      function Dc(a) {
          return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
              return Cc[a]
          })
      }
      p.W = function(a, b) {
          this.f.setAttribute(Dc(a), b);
          Ec(this)
      };
      p.get = function(a) {
          a = this.f.getAttribute(Dc(a));
          if (z(a) || a === k) return a;
          g("Storage mechanism: Invalid value was encountered")
      };
      p.v = function(a) {
          this.f.removeAttribute(Dc(a));
          Ec(this)
      };
      p.k = function() {
          return Fc(this).attributes.length
      };
      p.i = function(a) {
          var b = 0,
              c = Fc(this).attributes,
              d = new Q;
          d.a = function() {
              b >= c.length && g(P);
              var d;
              d = c[b++];
              if (a) return decodeURIComponent(d.nodeName.replace(/\./g, "%")).substr(1);
              d = d.nodeValue;
              if (z(d)) return d;
              g("Storage mechanism: Invalid value was encountered")
          };
          return d
      };
      p.clear = function() {
          for (var a = Fc(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
          Ec(this)
      };

      function Ec(a) {
          try {
              a.f.save(a.ca)
          } catch (b) {
              g("Storage mechanism: Quota exceeded")
          }
      }

      function Fc(a) {
          return a.f.XMLDocument.documentElement
      };

      function Gc(a, b) {
          this.u = a;
          this.p = b + "::"
      }
      F(Gc, xc);
      p = Gc.prototype;
      p.u = k;
      p.p = "";
      p.W = function(a, b) {
          this.u.W(this.p + a, b)
      };
      p.get = function(a) {
          return this.u.get(this.p + a)
      };
      p.v = function(a) {
          this.u.v(this.p + a)
      };
      p.i = function(a) {
          var b = this.u.i(j),
              c = new Q,
              d = this;
          c.a = function() {
              for (var c = b.a(); c.substr(0, d.p.length) != d.p;) c = b.a();
              return a ? c.substr(d.p.length) : d.u.get(c)
          };
          return c
      };

      function Hc(a) {
          this.H = a;
          this.ka = new fc
      }
      p = Hc.prototype;
      p.H = k;
      p.ka = k;
      p.F = function(a, b) {
          v(b) ? this.H.W(a, gc(this.ka, b)) : this.H.v(a)
      };
      p.get = function(a) {
          a = this.H.get(a);
          if (a !== k) try {
              return dc(a)
          } catch (b) {
              g("Storage: Invalid value was encountered")
          }
      };
      p.$ = function(a) {
          this.H.v(a)
      };

      function Z(a) {
          Hc.call(this, a)
      }
      F(Z, Hc);

      function Ic(a) {
          this.data = a
      }

      function Jc(a) {
          return !v(a) || a instanceof Ic ? a : new Ic(a)
      }
      Z.prototype.F = function(a, b) {
          Z.o.F.call(this, a, Jc(b))
      };
      Z.prototype.a = function(a) {
          a = Z.o.get.call(this, a);
          if (!v(a) || a instanceof Object) return a;
          g("Storage: Invalid value was encountered")
      };
      Z.prototype.get = function(a) {
          (a = this.a(a)) ? (a = a.data, v(a) || g("Storage: Invalid value was encountered")) : a = i;
          return a
      };

      function $(a) {
          Hc.call(this, a)
      }
      F($, Z);
      $.prototype.F = function(a, b, c) {
          if (b = Jc(b)) {
              if (c) {
                  if (c < D()) {
                      $.prototype.$.call(this, a);
                      return
                  }
                  b.expiration = c
              }
              b.creation = D()
          }
          $.o.F.call(this, a, b)
      };
      $.prototype.a = function(a, b) {
          var c = $.o.a.call(this, a);
          if (c) {
              var d;
              if (d = !b) {
                  d = c.creation;
                  var e = c.expiration;
                  d = !!e && e < D() || !!d && d > D()
              }
              if (d) $.prototype.$.call(this, a);
              else return c
          }
      };

      function Kc(a) {
          var b;
          b = new zc;
          var c;
          a: {
              try {
                  c = !!b.a && !!b.a.getItem;
                  break a
              } catch (d) {}
              c = n
          }
          if (!(b = c ? a ? new Gc(b, a) : b : k)) a = new Ac(a || "UserDataSharedStore"), b = a.f ? a : k;
          this.a = (a = b) ? new $(a) : k
      }
      Kc.prototype.get = function(a, b) {
          var c = "";
          if (this.a) try {
              c = this.a.get(a)
          } catch (d) {}
          if (!c && (c = uc(a)) && b) try {
              c = dc(c)
          } catch (e) {
              c = ""
          }
          return c
      };

      function Lc(a) {
          a.a && a.a.$("leanback_oauth_renew");
          vc("leanback_oauth_renew")
      };
      var Mc = s.window;

      function Nc(a) {
          this.b = a
      }
      Nc.prototype.reset = function(a, b) {
          b && (a = C(a, b));
          this.cancel();
          var c = a,
              d = this.b;
          ca(c) ? this && (c = C(c, this)) : c && "function" == typeof c.handleEvent ? c = C(c.handleEvent, c) : g(Error("Invalid listener argument"));
          this.a = 2147483647 < d ? -1 : Mc.setTimeout(c, d || 0)
      };
      Nc.prototype.cancel = function() {
          this.a != i && Mc.clearTimeout(this.a)
      };

      function Oc() {
          qb(window, "message", C(this.oa, this));
          this.z = k;
          this.e = (new Bb(s.window.location, j)).a.get("allowFrom");
          this.b = new Kc("yt.leanback");
          this.a = []
      }

      function Pc(a, b, c) {
          this.message = a;
          this.path = b;
          this.body = c || ""
      }
      p = Oc.prototype;
      p.oa = function(a) {
          a = dc(a.K.data);
          if (a.message) switch (a.message) {
              case "getPairingCode":
                  nc("/o/oauth2/device/code", {
                      format: "JSON",
                      method: "POST",
                      ia: {},
                      aa: {
                          client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
                          scope: "http://192.168.1.184"
                      },
                      U: this.ra,
                      T: function(a) {
                          this.g(a)
                      },
                      S: this
                  });
                  break;
              case "getAccessToken":
                  Qc(this, C(this.g, this, "getAccessToken"));
                  break;
              case "hasAccessToken":
                  tc("leanback_oauth_token", "");
                  var b = C(this.g, this, "hasAccessToken");
                  Qc(this, function(a) {
                      b({
                          hasToken: !!("accessToken" in
                              a && a.accessToken)
                      })
                  }, j);
                  break;
              case "cancelCredentials":
                  a = a.doCallback;
                  this.z && this.z.cancel();
                  Lc(this.b);
                  vc("leanback_oauth_token");
                  a && this.g("cancelCredentials", {
                      success: "true"
                  });
                  break;
              case "getPersonalizedData":
                  Rc(this, a.url);
                  break;
              case "getBatchData":
                  Sc(this, a.path, a.body);
                  break;
              case "makeUserAction":
                  Tc(this, a.path, a.body)
          }
      };
      p.g = function(a, b) {
          var c = this.e + "://",
              d = wb(document.location.href)[3] || k,
              c = c + (d && decodeURIComponent(d)),
              d = window.parent;
          b.message = a;
          d.postMessage(gc(new fc(i), b), c)
      };

      function Qc(a, b, c) {
          var d = uc("leanback_oauth_token"),
              e = {};
          c && !d ? Uc(a, function() {
              e.accessToken = uc("leanback_oauth_token");
              b(e)
          }, n) : (e.accessToken = d, b(e))
      }

      function Vc(a, b, c, d) {
          var e = n;
          0 == a.a.length && (e = j);
          a.a.push(new Pc(b, c, d));
          e && Uc(a, C(a.pa, a), n)
      }
      p.pa = function() {
          var a = this.a;
          this.a = [];
          J(a, function(a) {
              switch (a.message) {
                  case "getPersonalizedData":
                      Rc(this, a.path, j);
                      break;
                  case "getBatchData":
                      Sc(this, a.path, a.body, j);
                      break;
                  case "makeUserAction":
                      Tc(this, a.path, a.body, j)
              }
          }, this)
      };

      function Wc(a) {
          return a.b.get("leanback_oauth_renew")
      }

      function Xc(a, b, c) {
          a: {
              a = a.b;c = c || 31104E3;
              if (a.a) try {
                  a.a.F("leanback_oauth_renew", b, D() + 1E3 * c);
                  break a
              } catch (d) {}
              Lc(a);tc("leanback_oauth_renew", b, c)
          }
      }

      function Uc(a, b, c) {
          var d = Wc(a);
          if (d) {
              var e = {
                  client_id: "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com",
                  client_secret: "SboVhoG9s0rNafixCSGGKXAT"
              };
              c ? (e.code = d, e.grant_type = "http://192.168.1.184/grant_type/device/1.0") : (e.refresh_token = d, e.grant_type = "refresh_token");
              nc("/o/oauth2/token", {
                  format: "JSON",
                  method: "POST",
                  ia: {},
                  aa: e,
                  U: function(a, c) {
                      var d;
                      if (!c || "error" in c) d = n;
                      else {
                          d = c.refresh_token;
                          tc("leanback_oauth_token", c.access_token, c.expires_in);
                          d && Xc(this, d);
                          d = j
                      }
                      b(d)
                  },
                  T: function() {
                      b(n)
                  },
                  S: a
              })
          } else b(n)
      }
      p.ra = function(a, b) {
          var c, d, e;
          !b || "error" in b ? e = d = c = i : (c = b.user_code, d = b.verification_url, e = b.interval, Xc(this, b.device_code, 1E3 * b.expires_in));
          this.z = new Nc(1E3 * e);
          this.z.reset(this.ja, this);
          this.g("getPairingCode", {
              userCode: c,
              verificationUrl: d
          })
      };
      p.ja = function() {
          Wc(this) && Uc(this, C(function(a) {
              a ? this.g("hasAccessToken", {
                  hasToken: j
              }) : this.z.reset(this.ja, this)
          }, this), j)
      };

      function Rc(a, b, c) {
          var d = uc("leanback_oauth_token"),
              e = {
                  cacheKey: b,
                  response: ""
              };
          if (!d && Wc(a)) c ? a.g("getPersonalizedData", e) : Vc(a, "getPersonalizedData", b);
          else {
              c = {
                  key: "AI39si771wGqYuvKccp0ebB5TDzOIMtE4hYVyG3LEqQRZ-aOFibze1RFw4_pn5vuJW4YxrH9pEVFhY9F4ss7MHmaU76Liu_UMA"
              };
              d && (c.access_token = d);
              var b = yb(Ab([b], c)),
                  f = C(a.g, a, "getPersonalizedData"),
                  b = new ac(b),
                  h = C(function(a) {
                      e.response = a;
                      f(e)
                  }, a),
                  m = ga(f, e),
                  o = {},
                  q = "_" + (bc++).toString(36) + D().toString(36);
              s._callbacks_ || (s._callbacks_ = {});
              a = b.b.w();
              if (o)
                  for (var r in o)
                      if (!o.hasOwnProperty ||
                          o.hasOwnProperty(r)) {
                          var d = a,
                              c = r,
                              l = o[r];
                          x(l) || (l = ["" + l]);
                          Mb(d.a, c, l)
                      }
              h && (s._callbacks_[q] = function(a) {
                  cc(q, j);
                  h.apply(i, arguments)
              }, r = b.a, d = "_callbacks_." + q, x(d) || (d = ["" + d]), Mb(a.a, r, d));
              var B = a.toString(),
                  w = {
                      timeout: b.L,
                      na: j
                  };
              r = w.document || document;
              var t;
              t = document.createElement("SCRIPT");
              var b = {
                      fa: t,
                      L: i
                  },
                  H = new Qb(Yb, b),
                  Ga = k,
                  a = w.timeout != k ? w.timeout : 5E3;
              0 < a && (Ga = window.setTimeout(function() {
                  Zb(t, j);
                  var a = new $b(1, "Timeout reached for loading script " + B);
                  Sb(H);
                  Tb(H, n, a)
              }, a), b.L = Ga);
              t.onload = t.onreadystatechange =
                  function() {
                      if (!t.readyState || t.readyState == "loaded" || t.readyState == "complete") {
                          Zb(t, w.na || n, Ga);
                          Sb(H);
                          Tb(H, j, k)
                      }
                  };
              t.onerror = function() {
                  Zb(t, j, Ga);
                  var a = new $b(0, "Error while loading script " + B);
                  Sb(H);
                  Tb(H, n, a)
              };
              var b = {
                      type: "text/javascript",
                      charset: "UTF-8",
                      src: B
                  },
                  a = function(a, b) {
                      b == "style" ? t.style.cssText = a : b == "class" ? t.className = a : b == "for" ? t.htmlFor = a : b in Na ? t.setAttribute(Na[b], a) : b.lastIndexOf("aria-", 0) == 0 ? t.setAttribute(b, a) : t[b] = a
                  },
                  T;
              for (T in b) a.call(i, b[T], T);
              T = r.getElementsByTagName("HEAD");
              (!T || 0 == T.length ? r.documentElement : T[0]).appendChild(t);
              H.a.push([k, function() {
                  cc(q, n);
                  m && m(o)
              }, i]);
              H.j && Ub(H)
          }
      }

      function Yc(a, b, c, d, e, f) {
          d = {
              developer_key: "AI39si771wGqYuvKccp0ebB5TDzOIMtE4hYVyG3LEqQRZ-aOFibze1RFw4_pn5vuJW4YxrH9pEVFhY9F4ss7MHmaU76Liu_UMA",
              session_token: "leanback_actions" in Ya ? Ya.leanback_actions : i,
              path: e,
              data: d
          };
          f && (d.access_token = f);
          return {
              format: "JSON",
              method: "POST",
              aa: d,
              U: function(a, d) {
                  "success" in d && d.success && (b.success = j);
                  "content" in d && (b.content = d.content);
                  this.g(c, b)
              },
              T: function() {
                  this.g(c, b)
              },
              S: a
          }
      }

      function Sc(a, b, c, d) {
          var e = {
                  success: n,
                  cacheKey: b
              },
              f = uc("leanback_oauth_token");
          !f && Wc(a) ? d ? a.g("getBatchData", e) : Vc(a, "getBatchData", b, c) : nc("/leanback_actions?action_batch_gdata=1", Yc(a, e, "getBatchData", c, b, f))
      }

      function Tc(a, b, c, d) {
          var e = {
                  success: n,
                  cacheKey: b
              },
              f = uc("leanback_oauth_token");
          f ? nc("/leanback_actions?action_post_gdata=1", Yc(a, e, "makeUserAction", c, b, f)) : !Wc(a) || d ? a.g("makeUserAction", e) : Vc(a, "makeUserAction", b, c)
      };
      var Zc = {};
      var $c = {},
          ad = 0;

      function bd(a) {
          var b = new Image,
              c = "" + ad++;
          $c[c] = b;
          b.onload = b.onerror = function() {
              delete $c[c]
          };
          b.src = a;
          b = eval("null")
      };
      var cd = n;

      function dd(a) {
          if (M) try {
              eval("(0)()")
          } catch (b) {
              return b.stack.replace(/(.*):/g, "").replace(/\n/g, ",")
          } else return a
      };
      E("yt.setAjaxToken", function(a) {
          var b = arguments;
          if (1 < b.length) {
              var c = b[0];
              Ya[c] = b[1]
          } else
              for (c in b = b[0], b) Ya[c] = b[c]
      });
      E("yt.pubsub.subscribe", function(a, b, c) {
          var d = u("yt.pubsub.instance_");
          return d ? d.subscribe(a, function() {
              var a = arguments;
              $a(function() {
                  b.apply(c || s, a)
              }, 0)
          }, c) : 0
      });
      E("yt.www.leanbackoauth.init", function() {
          new Oc
      });
      Ua("load", function() {
          bb("init")
      });
      Ua("unload", function() {
          bb("dispose")
      });
      window.onerror = function(a, b, c) {
          var d;
          d = z("www-core-js") ? document.getElementById("www-core-js") : "www-core-js";
          if (!cd && d && -1 != d.src.indexOf("/debug-")) {
              c = dd(c);
              a = "error=" + encodeURIComponent(a) + "&script=" + encodeURIComponent(b) + "&linenumber=" + encodeURIComponent(c) + "&url=" + encodeURIComponent(window.location.href);
              a: {
                  var e = a || "null";
                  if ("EVENTS_TRACKER_INSTALLED" in Xa && Xa.EVENTS_TRACKER_INSTALLED) {
                      var f = Zc.jserror;
                      if (!f) {
                          var h = window._gaq._getAsyncTracker("eventsPageTracker");
                          if (!h) break a;
                          window._gaq.push(function() {
                              f =
                                  h._createEventTracker("jserror");
                              Zc.jserror = f
                          })
                      }
                      window._gaq.push(function() {
                          f._trackEvent(e, i, i)
                      })
                  }
              }
              a = "a=jserror" + (a ? "&" + a : "").replace(/\//g, "&");
              bd("/gen_204?" + a);
              cd = j
          }
      };
  })();


}
/*
   FILE ARCHIVED ON 09:36:16 Jun 22, 2012 AND RETRIEVED FROM THE
   INTERNET ARCHIVE ON 00:37:55 Jan 21, 2025.
   JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

   ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
   SECTION 108(a)(3)).
*/
/*
playback timings (ms):
captures_list: 0.575
exclusion.robots: 0.027
exclusion.robots.policy: 0.016
esindex: 0.013
cdx.remote: 15.011
LoadShardBlock: 190.473 (3)
PetaboxLoader3.datanode: 108.654 (4)
PetaboxLoader3.resolve: 132.451 (2)
load_resource: 76.117
*/