var _____WB$wombat$assign$function_____ = function (name) {
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
      this.__WB_source = obj;
      return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  (function () {
      var p = this;
      function r(a) {
          var b = typeof a;
          if ("object" == b)
              if (a) {
                  if (a instanceof Array) return "array";
                  if (a instanceof Object) return b;
                  var c = Object.prototype.toString.call(a);
                  if ("[object Window]" == c) return "object";
                  if ("[object Array]" == c || ("number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))) return "array";
                  if ("[object Function]" == c || ("undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))) return "function";
              } else return "null";
          else if ("function" == b && "undefined" == typeof a.call) return "object";
          return b;
      }
      Math.random();
      function s(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return function () {
              var b = c.slice();
              b.push.apply(b, arguments);
              return a.apply(this, b);
          };
      }
      var v;
      function y(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
      }
      Math.random();
      function z(a, b) {
          this.x = void 0 !== a ? a : 0;
          this.y = void 0 !== b ? b : 0;
      }
      function A(a, b) {
          this.width = a;
          this.height = b;
      }
      var B;
      i: {
          var C = p.navigator;
          if (C) {
              var D = C.userAgent;
              if (D) {
                  B = D;
                  break i;
              }
          }
          B = "";
      }
      var E = -1 != B.indexOf("Opera") || -1 != B.indexOf("OPR"),
          F = -1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE"),
          G = -1 != B.indexOf("Gecko") && -1 == B.toLowerCase().indexOf("webkit") && !(-1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE")),
          H = -1 != B.toLowerCase().indexOf("webkit");
      function I() {
          var a = p.document;
          return a ? a.documentMode : void 0;
      }
      var J = (function () {
              var a = "",
                  b;
              if (E && p.opera) return (a = p.opera.version), "function" == r(a) ? a() : a;
              G ? (b = /rv\:([^\);]+)(\)|;)/) : F ? (b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/) : H && (b = /WebKit\/(\S+)/);
              b && (a = (a = b.exec(B)) ? a[1] : "");
              return F && ((b = I()), b > parseFloat(a)) ? String(b) : a;
          })(),
          K = {};
      function L(a) {
          var b;
          if (!(b = K[a])) {
              b = 0;
              for (
                  var c = String(J)
                          .replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                          .split("."),
                      n = String(a)
                          .replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                          .split("."),
                      l = Math.max(c.length, n.length),
                      f = 0;
                  0 == b && f < l;
                  f++
              ) {
                  var k = c[f] || "",
                      h = n[f] || "",
                      q = RegExp("(\\d*)(\\D*)", "g"),
                      e = RegExp("(\\d*)(\\D*)", "g");
                  do {
                      var g = q.exec(k) || ["", "", ""],
                          m = e.exec(h) || ["", "", ""];
                      if (0 == g[0].length && 0 == m[0].length) break;
                      b = y(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || y(0 == g[2].length, 0 == m[2].length) || y(g[2], m[2]);
                  } while (0 == b);
              }
              b = K[a] = 0 <= b;
          }
          return b;
      }
      var M = p.document,
          N = M && F ? I() || ("CSS1Compat" == M.compatMode ? parseInt(J, 10) : 5) : void 0;
      (!G && !F) || (F && F && 9 <= N) || (G && L("1.9.1"));
      F && L("9");
      function O(a) {
          return a ? new P(Q(a)) : v || (v = new P());
      }
      function R() {
          var a = (window.top || window).document,
              a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
          return new A(a.clientWidth, a.clientHeight);
      }
      function S(a) {
          return H || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
      }
      function Q(a) {
          return 9 == a.nodeType ? a : a.ownerDocument || a.document;
      }
      function T(a, b) {
          for (var c = 0; a; ) {
              if (b(a)) return a;
              a = a.parentNode;
              c++;
          }
          return null;
      }
      function P(a) {
          this.a = a || p.document || document;
      }
      function V(a) {
          var b = a.a;
          a = S(b);
          b = b.parentWindow || b.defaultView;
          return F && L("10") && b.pageYOffset != a.scrollTop ? new z(a.scrollLeft, a.scrollTop) : new z(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
      }
      function W(a) {
          var b;
          i: {
              b = Q(a);
              if (b.defaultView && b.defaultView.getComputedStyle && (b = b.defaultView.getComputedStyle(a, null))) {
                  b = b.position || b.getPropertyValue("position") || "";
                  break i;
              }
              b = "";
          }
          return b || (a.currentStyle ? a.currentStyle.position : null) || (a.style && a.style.position);
      }
      function X(a) {
          if (F && !(F && 8 <= N)) return a.offsetParent;
          var b = Q(a),
              c = W(a),
              n = "fixed" == c || "absolute" == c;
          for (a = a.parentNode; a && a != b; a = a.parentNode)
              if (((c = W(a)), (n = n && "static" == c && a != b.documentElement && a != b.body), !n && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))) return a;
          return null;
      }
      function Y(a) {
          return (
              null !=
              T(a, function (a) {
                  var c;
                  i: {
                      try {
                          var n = Q(a);
                          if (n.defaultView && n.defaultView.getComputedStyle) {
                              var l = n.defaultView.getComputedStyle(a, null);
                              if (l) {
                                  c = l.position || l.getPropertyValue("position") || "";
                                  break i;
                              }
                          } else {
                              c = (a.currentStyle ? a.currentStyle.position : null) || "";
                              break i;
                          }
                      } catch (f) {}
                      c = "";
                  }
                  return "fixed" == c;
              })
          );
      }
      function Z(a, b) {
          var c = "border: 0; vertical-align:bottom; background: none; display: block; width: 100%; height: 100%; z-index: 10000000; top: -100%; left: 0; visibility: visible; opacity: 1;",
              c = b.isMobileBrowser ? c + "position: absolute" : c + "position: fixed",
              n = { id: "google-feedback-wizard", style: c, frameborder: "0", allowTransparency: "true" },
              c = a.document,
              l = top.GOOGLE_FEEDBACK_PARAMETERS;
          if (c.getElementById("google-feedback-wizard")) "help" == l.flow && (c = l.defaultHelpArticleId) && window.top.GOOGLE_HELP_DISPLAY_ARTICLE_FUNCTION(c);
          else {
              a.GOOGLE_FEEDBACK_OPENDATA = b;
              var f = c.createElement("iframe"),
                  k;
              for (k in n) f.setAttribute(k, n[k]);
              if ((k = l.customZIndex)) f.style.zIndex = k;
              c.body.appendChild(f);
              c = f.contentDocument || f.contentWindow.document;
              c.open();
              c.write(b.wizardHtml);
              c.close();
          }
      }
      function $(a, b) {
          var c = p.top,
              n = c.document,
              l = c.location.href;
          if ("help" == a.flow) {
              var f = a.anchor,
                  k = window.top.document;
              if (!k.getElementById("google-feedback-wizard") && !k.getElementById("google-help-interstitial")) {
                  var h = k.createElement("iframe");
                  h.id = "google-help-interstitial";
                  h.setAttribute("style", "background-color: white; border: 1px solid #bbb; border-radius: 2px;box-shadow: 0 4px 8px rgba(0,0,0,.2); display: block; height: 32px; position: absolute; width: 40px; z-index: 10000000;");
                  k.body.appendChild(h);
                  k = h.contentDocument || h.contentWindow.document;
                  k.open();
                  k.write(
                      '<html> <body style="margin: 0; overflow: hidden;">  <img src="https://web.archive.org/web/20140523024712/https://www.gstatic.com/feedback/img/loading-int.gif"       width="20" height="20" style="margin-top: 6px" id="loading-gif"> </body></html>'
                  );
                  k.close();
                  var q = 40;
                  if (f) {
                      f.getBoundingClientRect && ((q = f.getBoundingClientRect()), (q = Math.max((q.width ? q.width : q.right - q.left) - 2, 40)), (q = Math.min(q, 100)), (h.style.width = q + "px"));
                      var e;
                      if ((e = f && h))
                          i: {
                              if (f.getBoundingClientRect && ((e = f.getBoundingClientRect()), 0 == e.left && 0 == e.right && 0 == e.top && 0 == e.bottom)) {
                                  e = !1;
                                  break i;
                              }
                              e = !0;
                          }
                      if (e) {
                          var g,
                              m = Q(f),
                              U = W(f),
                              aa = G && m.getBoxObjectFor && !f.getBoundingClientRect && "absolute" == U && (g = m.getBoxObjectFor(f)) && (0 > g.screenX || 0 > g.screenY);
                          e = new z(0, 0);
                          var u;
                          g = m ? Q(m) : document;
                          (u = !F || (F && 9 <= N)) || (u = "CSS1Compat" == O(g).a.compatMode);
                          u = u ? g.documentElement : g.body;
                          if (f != u)
                              if (f.getBoundingClientRect) {
                                  e: {
                                      var d;
                                      try {
                                          d = f.getBoundingClientRect();
                                      } catch (ca) {
                                          g = { left: 0, top: 0, right: 0, bottom: 0 };
                                          break e;
                                      }
                                      F && f.ownerDocument.body && ((g = f.ownerDocument), (d.left -= g.documentElement.clientLeft + g.body.clientLeft), (d.top -= g.documentElement.clientTop + g.body.clientTop));
                                      g = d;
                                  }
                                  d = V(O(m));
                                  e.x = g.left + d.x;
                                  e.y = g.top + d.y;
                              } else if (m.getBoxObjectFor && !aa) (g = m.getBoxObjectFor(f)), (d = m.getBoxObjectFor(u)), (e.x = g.screenX - d.screenX), (e.y = g.screenY - d.screenY);
                              else {
                                  d = f;
                                  do {
                                      e.x += d.offsetLeft;
                                      e.y += d.offsetTop;
                                      d != f && ((e.x += d.clientLeft || 0), (e.y += d.clientTop || 0));
                                      if (H && "fixed" == W(d)) {
                                          e.x += m.body.scrollLeft;
                                          e.y += m.body.scrollTop;
                                          break;
                                      }
                                      d = d.offsetParent;
                                  } while (d && d != f);
                                  if (E || (H && "absolute" == U)) e.y -= m.body.offsetTop;
                                  for (d = f; (d = X(d)) && d != m.body && d != u; ) (e.x -= d.scrollLeft), (E && "TR" == d.tagName) || (e.y -= d.scrollTop);
                              }
                          Y(f) ? (d = R()) : ((d = O(window.top)), (d = S(d.a)), (d = new A(d.scrollWidth, d.scrollHeight)));
                          e.x > d.width / 2 ? ((g = e.x + f.offsetWidth - h.offsetWidth), g + h.offsetWidth + 0 > d.width && (g -= 0)) : (g = e.x);
                          var x;
                          e.y > d.height / 2 ? (x = e.y - h.offsetHeight - 10) : (x = e.y + f.offsetHeight + 10);
                          h.style.left = g + "px";
                          h.style.top = x + "px";
                      }
                  } else (f = R()), (x = V(O((window.top || p || window).document))), (h.style.top = f.height / 2 + x.y + "px"), (h.style.left = f.width / 2 - q / 2 + "px");
                  h = q / 2 - 10 + "px";
                  k = k.getElementById("loading-gif");
                  k.style.marginLeft = h;
                  k.style.marginRight = h;
              }
              a.shownInterstitialAt = new Date();
          }
          l = { serverUri: "//web.archive.org/web/20140523024712/http://www.google.com/tools/feedback", hl: a.locale || "en", url: l, productData: b };
          b && JSON && JSON.stringify && ((h = JSON.stringify(b)), 200 >= h.length && (l.psdJson = h));
          for (var t in a) l[t] = a[t];
          c.GOOGLE_FEEDBACK_PARAMETERS = l;
          c.GOOGLE_FEEDBACK_WIZARD = s(Z, c);
          var c = l.serverUri + "/activate.js?",
              w;
          for (w in l) (t = l[w]), (h = typeof t), ("object" == h && null != t) || "function" == h || null === t || void 0 === t || (c += "&" + encodeURIComponent(w) + "=" + encodeURIComponent(t));
          w = n.createElement("script");
          w.src = c.toString();
          n.body.appendChild(w);
      }
      var ba = p.GOOGLE_FEEDBACK_START_ARGUMENTS;
      p.GOOGLE_FEEDBACK_START = $;
      $.apply(p, ba);
  })();
}
/*
   FILE ARCHIVED ON 02:47:12 May 23, 2014 AND RETRIEVED FROM THE
   INTERNET ARCHIVE ON 00:42:48 Jan 21, 2025.
   JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

   ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
   SECTION 108(a)(3)).
*/
/*
playback timings (ms):
captures_list: 0.588
exclusion.robots: 0.028
exclusion.robots.policy: 0.016
esindex: 0.011
cdx.remote: 16.28
LoadShardBlock: 198.012 (3)
PetaboxLoader3.datanode: 205.238 (4)
load_resource: 128.267
PetaboxLoader3.resolve: 92.287
*/
