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
        var f, aa = aa || {},
            l = this;

        function q(a, b) {
            for (var c = a.split("."), d = b || l, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else return null;
            return d
        }

        function ba() {}

        function ca(a) {
            a.getInstance = function() {
                return a.Cn ? a.Cn : a.Cn = new a
            }
        }

        function da(a) {
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

        function s(a) {
            return void 0 !== a
        }

        function ea(a) {
            return null != a
        }

        function t(a) {
            return "array" == da(a)
        }

        function fa(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }

        function u(a) {
            return "string" == typeof a
        }

        function ga(a) {
            return "number" == typeof a
        }

        function ha(a) {
            return "function" == da(a)
        }

        function ia(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }

        function ja(a) {
            return a[ka] || (a[ka] = ++la)
        }
        var ka = "closure_uid_" + (1E9 * Math.random() >>> 0),
            la = 0;

        function ma(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function na(a, b, c) {
            if (!a) throw Error();
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

        function v(a, b, c) {
            v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
            return v.apply(null, arguments)
        }

        function oa(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        }

        function x(a, b) {
            for (var c in b) a[c] = b[c]
        }
        var y = Date.now || function() {
            return +new Date
        };

        function z(a, b) {
            var c = a.split("."),
                d = l;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
        }

        function A(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.G = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        }
        Function.prototype.bind = Function.prototype.bind || function(a, b) {
            if (1 < arguments.length) {
                var c = Array.prototype.slice.call(arguments, 1);
                c.unshift(this, a);
                return v.apply(null, c)
            }
            return v(this, a)
        };

        function pa(a) {
            Error.captureStackTrace ? Error.captureStackTrace(this, pa) : this.stack = Error().stack || "";
            a && (this.message = String(a))
        }
        A(pa, Error);
        pa.prototype.name = "CustomError";

        function qa(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        }

        function ra(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        }

        function sa(a) {
            if (!ta.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ua, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
            return a
        }
        var ua = /&/g,
            va = /</g,
            wa = />/g,
            xa = /\"/g,
            ta = /[&<>\"]/;

        function ya(a, b) {
            for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0; 0 == c && h < g; h++) {
                var k = d[h] || "",
                    m = e[h] || "",
                    p = RegExp("(\\d*)(\\D*)", "g"),
                    r = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var n = p.exec(k) || ["", "", ""],
                        w = r.exec(m) || ["", "", ""];
                    if (0 == n[0].length && 0 == w[0].length) break;
                    c = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == w[1].length ?
                        0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == w[2].length) ? -1 : (0 == n[2].length) > (0 == w[2].length) ? 1 : 0) || (n[2] < w[2] ? -1 : n[2] > w[2] ? 1 : 0)
                } while (0 == c)
            }
            return c
        }

        function za(a) {
            for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
            return b
        }

        function Aa(a) {
            var b = Number(a);
            return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
        }

        function Ba(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        }

        function Ca(a) {
            var b = u(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };

        function Da(a) {
            return a[a.length - 1]
        }
        var Ea = Array.prototype,
            Fa = Ea.indexOf ? function(a, b, c) {
                return Ea.indexOf.call(a, b, c)
            } : function(a, b, c) {
                c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
                if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, c) : -1;
                for (; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            B = Ea.forEach ? function(a, b, c) {
                Ea.forEach.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = u(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
            },
            Ga = Ea.filter ? function(a, b, c) {
                return Ea.filter.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = [], g =
                        0, h = u(a) ? a.split("") : a, k = 0; k < d; k++)
                    if (k in h) {
                        var m = h[k];
                        b.call(c, m, k, a) && (e[g++] = m)
                    }
                return e
            },
            C = Ea.map ? function(a, b, c) {
                return Ea.map.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = Array(d), g = u(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
                return e
            },
            Ha = Ea.some ? function(a, b, c) {
                return Ea.some.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = u(a) ? a.split("") : a, g = 0; g < d; g++)
                    if (g in e && b.call(c, e[g], g, a)) return !0;
                return !1
            },
            Ia = Ea.every ? function(a, b, c) {
                return Ea.every.call(a, b, c)
            } : function(a,
                b, c) {
                for (var d = a.length, e = u(a) ? a.split("") : a, g = 0; g < d; g++)
                    if (g in e && !b.call(c, e[g], g, a)) return !1;
                return !0
            };

        function Ja(a, b) {
            var c = 0;
            B(a, function(a, e, g) {
                b.call(void 0, a, e, g) && ++c
            }, void 0);
            return c
        }

        function Ka(a, b, c) {
            b = La(a, b, c);
            return 0 > b ? null : u(a) ? a.charAt(b) : a[b]
        }

        function La(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, g = 0; g < d; g++)
                if (g in e && b.call(c, e[g], g, a)) return g;
            return -1
        }

        function Ma(a, b) {
            var c = Na(a, b, void 0);
            return 0 > c ? null : u(a) ? a.charAt(c) : a[c]
        }

        function Na(a, b, c) {
            for (var d = u(a) ? a.split("") : a, e = a.length - 1; 0 <= e; e--)
                if (e in d && b.call(c, d[e], e, a)) return e;
            return -1
        }

        function E(a, b) {
            return 0 <= Fa(a, b)
        }

        function Oa(a) {
            if (!t(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        }

        function Pa(a, b) {
            E(a, b) || a.push(b)
        }

        function Qa(a, b) {
            var c = Fa(a, b),
                d;
            (d = 0 <= c) && Ra(a, c);
            return d
        }

        function Ra(a, b) {
            Ea.splice.call(a, b, 1)
        }

        function Sa(a, b) {
            var c = La(a, b, void 0);
            0 <= c && Ra(a, c)
        }

        function Ta(a) {
            return Ea.concat.apply(Ea, arguments)
        }

        function Ua(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }

        function Va(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c],
                    e;
                if (t(d) || (e = fa(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
                else if (e)
                    for (var g = a.length, h = d.length, k = 0; k < h; k++) a[g + k] = d[k];
                else a.push(d)
            }
        }

        function Wa(a, b, c, d) {
            Ea.splice.apply(a, Xa(arguments, 1))
        }

        function Xa(a, b, c) {
            return 2 >= arguments.length ? Ea.slice.call(a, b) : Ea.slice.call(a, b, c)
        }

        function Ya(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++],
                    g = ia(e) ? "o" + ja(e) : (typeof e).charAt(0) + e;
                Object.prototype.hasOwnProperty.call(b, g) || (b[g] = !0, a[c++] = e)
            }
            a.length = c
        }

        function Za(a, b, c) {
            for (var d = 0, e = a.length, g; d < e;) {
                var h = d + e >> 1,
                    k;
                k = b(c, a[h]);
                0 < k ? d = h + 1 : (e = h, g = !k)
            }
            return g ? d : ~d
        }

        function $a(a, b) {
            Ea.sort.call(a, b || ab)
        }

        function bb(a, b) {
            var c = ab;
            $a(a, function(a, e) {
                return c(a[b], e[b])
            })
        }

        function cb(a, b, c) {
            if (!fa(a) || !fa(b) || a.length != b.length) return !1;
            var d = a.length;
            c = c || db;
            for (var e = 0; e < d; e++)
                if (!c(a[e], b[e])) return !1;
            return !0
        }

        function ab(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }

        function db(a, b) {
            return a === b
        }

        function eb(a, b, c) {
            c = Za(a, c || ab, b);
            0 > c && Wa(a, -(c + 1), 0, b)
        };

        function fb(a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        }

        function gb(a) {
            return eval("(" + a + ")")
        }

        function hb(a) {
            return ib(new jb(void 0), a)
        }

        function jb(a) {
            this.a = a
        }

        function ib(a, b) {
            var c = [];
            kb(a, b, c);
            return c.join("")
        }

        function kb(a, b, c) {
            switch (typeof b) {
                case "string":
                    lb(b, c);
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
                    if (null == b) {
                        c.push("null");
                        break
                    }
                    if (t(b)) {
                        var d = b.length;
                        c.push("[");
                        for (var e = "", g = 0; g < d; g++) c.push(e), e = b[g], kb(a, a.a ? a.a.call(b, String(g), e) : e, c), e = ",";
                        c.push("]");
                        break
                    }
                    c.push("{");
                    d = "";
                    for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), lb(g, c), c.push(":"),
                        kb(a, a.a ? a.a.call(b, g, e) : e, c), d = ","));
                    c.push("}");
                    break;
                case "function":
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
        var mb = {
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
            nb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

        function lb(a, b) {
            b.push('"', a.replace(nb, function(a) {
                if (a in mb) return mb[a];
                var b = a.charCodeAt(0),
                    e = "\\u";
                16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
                return mb[a] = e + b.toString(16)
            }), '"')
        };

        function ob(a, b, c) {
            return Math.min(Math.max(a, b), c)
        };

        function F(a, b) {
            this.x = s(a) ? a : 0;
            this.y = s(b) ? b : 0
        }
        f = F.prototype;
        f.clone = function() {
            return new F(this.x, this.y)
        };

        function qb(a, b) {
            return new F(a.x - b.x, a.y - b.y)
        }
        f.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        f.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        f.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        f.scale = function(a, b) {
            var c = ga(b) ? b : a;
            this.x *= a;
            this.y *= c;
            return this
        };

        function rb(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        f = rb.prototype;
        f.clone = function() {
            return new rb(this.top, this.right, this.bottom, this.left)
        };
        f.contains = function(a) {
            return this && a ? a instanceof rb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
        };
        f.ceil = function() {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        };
        f.floor = function() {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        };
        f.round = function() {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        };
        f.scale = function(a, b) {
            var c = ga(b) ? b : a;
            this.left *= a;
            this.right *= a;
            this.top *= c;
            this.bottom *= c;
            return this
        };

        function G(a, b) {
            this.width = a;
            this.height = b
        }

        function sb(a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        }
        f = G.prototype;
        f.clone = function() {
            return new G(this.width, this.height)
        };
        f.isEmpty = function() {
            return !(this.width * this.height)
        };
        f.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        f.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        f.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        f.scale = function(a, b) {
            var c = ga(b) ? b : a;
            this.width *= a;
            this.height *= c;
            return this
        };

        function tb(a, b) {
            return a.scale(a.width / a.height > b.width / b.height ? b.width / a.width : b.height / a.height)
        };

        function ub(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        }
        f = ub.prototype;
        f.clone = function() {
            return new ub(this.left, this.top, this.width, this.height)
        };

        function vb(a) {
            return new ub(a.left, a.top, a.right - a.left, a.bottom - a.top)
        }
        f.contains = function(a) {
            return a instanceof ub ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
        };
        f.ceil = function() {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        f.floor = function() {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        f.round = function() {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        f.scale = function(a, b) {
            var c = ga(b) ? b : a;
            this.left *= a;
            this.width *= a;
            this.top *= c;
            this.height *= c;
            return this
        };

        function wb(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        }

        function xb(a, b) {
            for (var c in a)
                if (!b.call(void 0, a[c], c, a)) return !1;
            return !0
        }

        function yb(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }

        function zb(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }

        function Ab(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        }

        function Bb(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return c
        }

        function Cb(a) {
            for (var b in a) return !1;
            return !0
        }

        function Db(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }

        function Eb(a) {
            var b = da(a);
            if ("object" == b || "array" == b) {
                if (a.clone) return a.clone();
                var b = "array" == b ? [] : {},
                    c;
                for (c in a) b[c] = Eb(a[c]);
                return b
            }
            return a
        }
        var Fb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function Gb(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < Fb.length; g++) c = Fb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }

        function Hb(a) {
            var b = arguments.length;
            if (1 == b && t(arguments[0])) return Hb.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };

        function Ib(a) {
            return function() {
                throw a;
            }
        };
        var Jb, Kb, Lb, Mb, Nb, Ob, Pb;

        function Qb() {
            return l.navigator ? l.navigator.userAgent : null
        }

        function Rb() {
            return l.navigator
        }
        Nb = Mb = Lb = Kb = Jb = !1;
        var Sb;
        if (Sb = Qb()) {
            var Tb = Rb();
            Jb = 0 == Sb.lastIndexOf("Opera", 0);
            Kb = !Jb && (-1 != Sb.indexOf("MSIE") || -1 != Sb.indexOf("Trident"));
            Mb = (Lb = !Jb && -1 != Sb.indexOf("WebKit")) && -1 != Sb.indexOf("Mobile");
            Nb = !Jb && !Lb && !Kb && "Gecko" == Tb.product
        }
        var Ub = Jb,
            H = Kb,
            Vb = Nb,
            Wb = Lb,
            Xb = Mb,
            Yb = Rb(),
            Zb = Yb && Yb.platform || "";
        Ob = -1 != Zb.indexOf("Mac");
        Pb = -1 != Zb.indexOf("Win");
        var $b = !!Rb() && -1 != (Rb().appVersion || "").indexOf("X11");

        function ac() {
            var a = l.document;
            return a ? a.documentMode : void 0
        }
        var bc;
        t: {
            var cc = "",
                dc;
            if (Ub && l.opera) var ec = l.opera.version,
                cc = "function" == typeof ec ? ec() : ec;
            else if (Vb ? dc = /rv\:([^\);]+)(\)|;)/ : H ? dc = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Wb && (dc = /WebKit\/(\S+)/), dc) var fc = dc.exec(Qb()),
                cc = fc ? fc[1] : "";
            if (H) {
                var gc = ac();
                if (gc > parseFloat(cc)) {
                    bc = String(gc);
                    break t
                }
            }
            bc = cc
        }
        var hc = bc,
            ic = {};

        function I(a) {
            return ic[a] || (ic[a] = 0 <= ya(hc, a))
        }

        function jc(a) {
            return H && kc >= a
        }
        var lc = l.document,
            kc = lc && H ? ac() || ("CSS1Compat" == lc.compatMode ? parseInt(hc, 10) : 5) : void 0;
        var mc, nc = !H || jc(9),
            oc = !Vb && !H || H && jc(9) || Vb && I("1.9.1"),
            pc = H && !I("9"),
            qc = H || Ub || Wb;

        function rc(a) {
            a = a.className;
            return u(a) && a.match(/\S+/g) || []
        }

        function sc(a, b) {
            for (var c = rc(a), d = Xa(arguments, 1), e = c.length + d.length, g = c, h = 0; h < d.length; h++) E(g, d[h]) || g.push(d[h]);
            g = c.join(" ");
            a.className = g;
            return c.length == e
        }

        function tc(a, b) {
            var c = rc(a),
                d = Xa(arguments, 1),
                c = uc(c, d).join(" ");
            a.className = c
        }

        function uc(a, b) {
            return Ga(a, function(a) {
                return !E(b, a)
            })
        };

        function vc(a) {
            return a ? new wc(xc(a)) : mc || (mc = new wc)
        }

        function J(a) {
            return u(a) ? document.getElementById(a) : a
        }

        function K(a, b) {
            var c = b || document;
            c.querySelectorAll && c.querySelector ? c = c.querySelector("." + a) : (c = b || document, c = (c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : yc("*", a, b))[0]);
            return c || null
        }

        function yc(a, b, c) {
            var d = document;
            c = c || d;
            a = a && "*" != a ? a.toUpperCase() : "";
            if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
            if (b && c.getElementsByClassName) {
                c = c.getElementsByClassName(b);
                if (a) {
                    for (var d = {}, e = 0, g = 0, h; h = c[g]; g++) a == h.nodeName && (d[e++] = h);
                    d.length = e;
                    return d
                }
                return c
            }
            c = c.getElementsByTagName(a || "*");
            if (b) {
                d = {};
                for (g = e = 0; h = c[g]; g++) a = h.className, "function" == typeof a.split && E(a.split(/\s+/), b) && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }

        function zc(a, b) {
            wb(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ac ? a.setAttribute(Ac[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }
        var Ac = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };

        function Bc(a) {
            var b = Wb || "CSS1Compat" != a.compatMode ? a.body : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return H && I("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        }

        function Cc(a, b, c) {
            var d = arguments,
                e = document,
                g = d[0],
                h = d[1];
            if (!nc && h && (h.name || h.type)) {
                g = ["<", g];
                h.name && g.push(' name="', sa(h.name), '"');
                if (h.type) {
                    g.push(' type="', sa(h.type), '"');
                    var k = {};
                    Gb(k, h);
                    delete k.type;
                    h = k
                }
                g.push(">");
                g = g.join("")
            }
            g = e.createElement(g);
            h && (u(h) ? g.className = h : t(h) ? sc.apply(null, [g].concat(h)) : zc(g, h));
            2 < d.length && Dc(e, g, d, 2);
            return g
        }

        function Dc(a, b, c, d) {
            function e(c) {
                c && b.appendChild(u(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var g = c[d];
                !fa(g) || ia(g) && 0 < g.nodeType ? e(g) : B(Ec(g) ? Ua(g) : g, e)
            }
        }

        function Fc(a) {
            return document.createElement(a)
        }

        function Gc(a, b) {
            Dc(xc(a), a, arguments, 1)
        }

        function Hc(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        }

        function Ic(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }

        function Jc(a) {
            for (; a && 1 != a.nodeType;) a = a.nextSibling;
            return a
        }

        function Kc(a) {
            if (!a) return null;
            if (a.firstChild) return a.firstChild;
            for (; a && !a.nextSibling;) a = a.parentNode;
            return a ? a.nextSibling : null
        }

        function Lc(a) {
            if (!a) return null;
            if (!a.previousSibling) return a.parentNode;
            for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
            return a
        }

        function xc(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }

        function Mc(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else Hc(a), a.appendChild(xc(a).createTextNode(String(b)))
        }
        var Nc = {
                SCRIPT: 1,
                STYLE: 1,
                HEAD: 1,
                IFRAME: 1,
                OBJECT: 1
            },
            Oc = {
                IMG: " ",
                BR: "\n"
            };

        function Pc(a, b, c) {
            if (!(a.nodeName in Nc))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Oc) b.push(Oc[a.nodeName]);
            else
                for (a = a.firstChild; a;) Pc(a, b, c), a = a.nextSibling
        }

        function Ec(a) {
            if (a && "number" == typeof a.length) {
                if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ha(a)) return "function" == typeof a.item
            }
            return !1
        }

        function Qc(a, b) {
            return b ? Rc(a, function(a) {
                return !b || E(rc(a), b)
            }) : null
        }

        function Rc(a, b, c) {
            for (var d = null == c, e = 0; a && (d || e <= c);) {
                if (b(a)) return a;
                a = a.parentNode;
                e++
            }
            return null
        }

        function wc(a) {
            this.a = a || l.document || document
        }
        f = wc.prototype;
        f.P = function(a) {
            return u(a) ? this.a.getElementById(a) : a
        };
        f.createElement = function(a) {
            return this.a.createElement(a)
        };

        function Sc(a) {
            return "CSS1Compat" == a.a.compatMode
        }

        function Tc(a) {
            return Bc(a.a)
        }
        f.appendChild = function(a, b) {
            a.appendChild(b)
        };
        f.append = Gc;
        f.getChildren = function(a) {
            return oc && void 0 != a.children ? a.children : Ga(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        };
        f.contains = function(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        };

        function Uc(a, b, c) {
            var d;
            t: if (d = Ba(c), void 0 === a.style[d] && (c = (Wb ? "Webkit" : Vb ? "Moz" : H ? "ms" : Ub ? "O" : null) + Ca(c), void 0 !== a.style[c])) {
                d = c;
                break t
            }
            d && (a.style[d] = b)
        }

        function Vc(a, b) {
            var c = xc(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
        }

        function Wc(a, b) {
            return Vc(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        }

        function Xc(a, b, c) {
            var d, e = Vb && (Ob || $b) && I("1.9");
            b instanceof F ? (d = b.x, b = b.y) : (d = b, b = c);
            a.style.left = Yc(d, e);
            a.style.top = Yc(b, e)
        }

        function Zc(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            H && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        }

        function $c(a) {
            if (H && !jc(8)) return a.offsetParent;
            var b = xc(a),
                c = Wc(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (c = Wc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        }

        function ad(a) {
            for (var b = new rb(0, Infinity, Infinity, 0), c = vc(a), d = c.a.body, e = c.a.documentElement, g = Wb || "CSS1Compat" != c.a.compatMode ? c.a.body : c.a.documentElement; a = $c(a);)
                if (!(H && 0 == a.clientWidth || Wb && 0 == a.clientHeight && a == d || a == d || a == e || "visible" == Wc(a, "overflow"))) {
                    var h = bd(a),
                        k;
                    k = a;
                    if (Vb && !I("1.9")) {
                        var m = parseFloat(Vc(k, "borderLeftWidth"));
                        if (cd(k)) var p = k.offsetWidth - k.clientWidth - m - parseFloat(Vc(k, "borderRightWidth")),
                            m = m + p;
                        k = new F(m, parseFloat(Vc(k, "borderTopWidth")))
                    } else k = new F(k.clientLeft,
                        k.clientTop);
                    h.x += k.x;
                    h.y += k.y;
                    b.top = Math.max(b.top, h.y);
                    b.right = Math.min(b.right, h.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                    b.left = Math.max(b.left, h.x)
                }
            d = g.scrollLeft;
            g = g.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, g);
            c = (c.a.parentWindow || c.a.defaultView || window).document;
            c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
            c = new G(c.clientWidth, c.clientHeight);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, g + c.height);
            return 0 <= b.top && 0 <= b.left &&
                b.bottom > b.top && b.right > b.left ? b : null
        }

        function bd(a) {
            var b, c = xc(a),
                d = Wc(a, "position"),
                e = Vb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
                g = new F(0, 0),
                h;
            b = c ? xc(c) : document;
            h = !H || jc(9) || Sc(vc(b)) ? b.documentElement : b.body;
            if (a == h) return g;
            if (a.getBoundingClientRect) b = Zc(a), a = Tc(vc(c)), g.x = b.left + a.x, g.y = b.top + a.y;
            else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
            else {
                b = a;
                do {
                    g.x += b.offsetLeft;
                    g.y +=
                        b.offsetTop;
                    b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
                    if (Wb && "fixed" == Wc(b, "position")) {
                        g.x += c.body.scrollLeft;
                        g.y += c.body.scrollTop;
                        break
                    }
                    b = b.offsetParent
                } while (b && b != a);
                if (Ub || Wb && "absolute" == d) g.y -= c.body.offsetTop;
                for (b = a;
                    (b = $c(b)) && b != c.body && b != h;) g.x -= b.scrollLeft, Ub && "TR" == b.tagName || (g.y -= b.scrollTop)
            }
            return g
        }

        function dd(a, b, c) {
            if (b instanceof G) c = b.height, b = b.width;
            else if (void 0 == c) throw Error("missing height argument");
            ed(a, b);
            a.style.height = Yc(c, !0)
        }

        function Yc(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        }

        function ed(a, b) {
            a.style.width = Yc(b, !0)
        }

        function fd(a) {
            var b = gd;
            if ("none" != Wc(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                g = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = g;
            c.visibility = e;
            return a
        }

        function gd(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Wb && !b && !c;
            return s(b) && !d || !a.getBoundingClientRect ? new G(b, c) : (a = Zc(a), new G(a.right - a.left, a.bottom - a.top))
        }

        function hd(a) {
            var b = bd(a);
            a = fd(a);
            return new ub(b.x, b.y, a.width, a.height)
        }

        function id(a, b) {
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
        }

        function cd(a) {
            return "rtl" == Wc(a, "direction")
        }

        function jd(a) {
            var b = xc(a),
                c = H && a.currentStyle;
            if (c && Sc(vc(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = kd(a, c.width, "width", "pixelWidth"), a = kd(a, c.height, "height", "pixelHeight"), new G(b, a);
            c = new G(a.offsetWidth, a.offsetHeight);
            b = ld(a);
            a = md(a);
            return new G(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
        }

        function kd(a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var e = a.style[c],
                g = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = g;
            return b
        }

        function nd(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            return c ? kd(a, c, "left", "pixelLeft") : 0
        }

        function ld(a) {
            if (H) {
                var b = nd(a, "paddingLeft"),
                    c = nd(a, "paddingRight"),
                    d = nd(a, "paddingTop");
                a = nd(a, "paddingBottom");
                return new rb(d, c, a, b)
            }
            b = Vc(a, "paddingLeft");
            c = Vc(a, "paddingRight");
            d = Vc(a, "paddingTop");
            a = Vc(a, "paddingBottom");
            return new rb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        }
        var od = {
            thin: 2,
            medium: 4,
            thick: 6
        };

        function pd(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return c in od ? od[c] : kd(a, c, "left", "pixelLeft")
        }

        function md(a) {
            if (H) {
                var b = pd(a, "borderLeft"),
                    c = pd(a, "borderRight"),
                    d = pd(a, "borderTop");
                a = pd(a, "borderBottom");
                return new rb(d, c, a, b)
            }
            b = Vc(a, "borderLeftWidth");
            c = Vc(a, "borderRightWidth");
            d = Vc(a, "borderTopWidth");
            a = Vc(a, "borderBottomWidth");
            return new rb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        }
        var qd = /[^\d]+$/,
            rd = {
                cm: 1,
                "in": 1,
                mm: 1,
                pc: 1,
                pt: 1
            },
            sd = {
                em: 1,
                ex: 1
            };

        function td(a) {
            var b = Wc(a, "fontSize"),
                c;
            c = (c = b.match(qd)) && c[0] || null;
            if (b && "px" == c) return parseInt(b, 10);
            if (H) {
                if (c in rd) return kd(a, b, "left", "pixelLeft");
                if (a.parentNode && 1 == a.parentNode.nodeType && c in sd) return a = a.parentNode, c = Wc(a, "fontSize"), kd(a, b == c ? "1em" : b, "left", "pixelLeft")
            }
            c = Cc("span", {
                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
            });
            a.appendChild(c);
            b = c.offsetHeight;
            Ic(c);
            return b
        }
        var ud = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
        var vd = "StopIteration" in l ? l.StopIteration : Error("StopIteration");

        function wd() {}
        wd.prototype.next = function() {
            throw vd;
        };
        wd.prototype.Tc = function() {
            return this
        };

        function xd(a) {
            if (a instanceof wd) return a;
            if ("function" == typeof a.Tc) return a.Tc(!1);
            if (fa(a)) {
                var b = 0,
                    c = new wd;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw vd;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        }

        function yd(a, b, c) {
            if (fa(a)) try {
                B(a, b, c)
            } catch (d) {
                if (d !== vd) throw d;
            } else {
                a = xd(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (e) {
                    if (e !== vd) throw e;
                }
            }
        }

        function zd(a) {
            if (fa(a)) return Ua(a);
            a = xd(a);
            var b = [];
            yd(a, function(a) {
                b.push(a)
            });
            return b
        };

        function Ad(a, b) {
            this.b = {};
            this.a = [];
            this.g = this.M = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof Ad ? (c = a.Hc(), d = a.tc()) : (c = zb(a), d = yb(a));
                for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
            }
        }
        f = Ad.prototype;
        f.Xa = function() {
            return this.M
        };
        f.tc = function() {
            Bd(this);
            for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
            return a
        };
        f.Hc = function() {
            Bd(this);
            return this.a.concat()
        };
        f.equals = function(a, b) {
            if (this === a) return !0;
            if (this.M != a.Xa()) return !1;
            var c = b || Cd;
            Bd(this);
            for (var d, e = 0; d = this.a[e]; e++)
                if (!c(this.get(d), a.get(d))) return !1;
            return !0
        };

        function Cd(a, b) {
            return a === b
        }
        f.isEmpty = function() {
            return 0 == this.M
        };
        f.clear = function() {
            this.b = {};
            this.g = this.M = this.a.length = 0
        };
        f.remove = function(a) {
            return Dd(this.b, a) ? (delete this.b[a], this.M--, this.g++, this.a.length > 2 * this.M && Bd(this), !0) : !1
        };

        function Bd(a) {
            if (a.M != a.a.length) {
                for (var b = 0, c = 0; b < a.a.length;) {
                    var d = a.a[b];
                    Dd(a.b, d) && (a.a[c++] = d);
                    b++
                }
                a.a.length = c
            }
            if (a.M != a.a.length) {
                for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Dd(e, d) || (a.a[c++] = d, e[d] = 1), b++;
                a.a.length = c
            }
        }
        f.get = function(a, b) {
            return Dd(this.b, a) ? this.b[a] : b
        };
        f.set = function(a, b) {
            Dd(this.b, a) || (this.M++, this.a.push(a), this.g++);
            this.b[a] = b
        };
        f.clone = function() {
            return new Ad(this)
        };
        f.Tc = function(a) {
            Bd(this);
            var b = 0,
                c = this.a,
                d = this.b,
                e = this.g,
                g = this,
                h = new wd;
            h.next = function() {
                for (;;) {
                    if (e != g.g) throw Error("The map has changed since the iterator was created");
                    if (b >= c.length) throw vd;
                    var h = c[b++];
                    return a ? h : d[h]
                }
            };
            return h
        };

        function Dd(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };

        function Ed(a) {
            if ("function" == typeof a.tc) return a.tc();
            if (u(a)) return a.split("");
            if (fa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return yb(a)
        }

        function Fd(a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if (fa(a) || u(a)) B(a, b, c);
            else {
                var d;
                if ("function" == typeof a.Hc) d = a.Hc();
                else if ("function" != typeof a.tc)
                    if (fa(a) || u(a)) {
                        d = [];
                        for (var e = a.length, g = 0; g < e; g++) d.push(g)
                    } else d = zb(a);
                else d = void 0;
                for (var e = Ed(a), g = e.length, h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
            }
        };

        function Gd(a, b, c, d, e) {
            var g = "";
            a && (g += a + ":");
            b && (g = g + "//" + b);
            c && (g += c);
            d && (g += "?" + d);
            e && (g += "#" + e);
            return g
        }
        var Hd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

        function Id(a) {
            if (Jd) {
                Jd = !1;
                var b = l.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = Kd(c)) && c != b.hostname) throw Jd = !0, Error();
                }
            }
            return a.match(Hd)
        }
        var Jd = Wb;

        function Kd(a) {
            return (a = Id(a)[3] || null) && decodeURIComponent(a)
        }

        function Ld(a) {
            return (a = Id(a)[5] || null) && decodeURIComponent(a)
        }

        function Md(a) {
            if (a[1]) {
                var b = a[0],
                    c = b.indexOf("#");
                0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
                c = b.indexOf("?");
                0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
            }
            return a.join("")
        }

        function Nd(a, b, c) {
            if (t(b))
                for (var d = 0; d < b.length; d++) Nd(a, String(b[d]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
        }

        function Od(a, b) {
            for (var c in b) Nd(c, b[c], a);
            return a
        }

        function Pd(a, b, c) {
            a = [a, "&", b];
            null != c && a.push("=", encodeURIComponent(String(c)));
            return Md(a)
        }

        function Qd(a, b, c, d) {
            for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
                var g = a.charCodeAt(b - 1);
                if (38 == g || 63 == g)
                    if (g = a.charCodeAt(b + e), !g || 61 == g || 38 == g || 35 == g) return b;
                b += e + 1
            }
            return -1
        }
        var Rd = /#|$/,
            Sd = /[?&]($|#)/;

        function Td(a, b) {
            for (var c = a.search(Rd), d = 0, e, g = []; 0 <= (e = Qd(a, d, b, c));) g.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
            g.push(a.substr(d));
            return g.join("").replace(Sd, "$1")
        };

        function Ud(a, b) {
            var c;
            if (a instanceof Ud) this.fe = s(b) ? b : a.fe, Vd(this, a.Ue), this.rh = a.rh, Wd(this, a.Wd), Xd(this, a.bg), this.cg = a.cg, Yd(this, a.a.clone()), Zd(this, a.Aj);
            else if (a && (c = Id(String(a)))) {
                this.fe = !!b;
                Vd(this, c[1] || "", !0);
                var d = c[2] || "";
                this.rh = d ? decodeURIComponent(d) : "";
                Wd(this, c[3] || "", !0);
                Xd(this, c[4]);
                this.cg = (d = c[5] || "") ? decodeURIComponent(d) : "";
                Yd(this, c[6] || "", !0);
                Zd(this, c[7] || "", !0)
            } else this.fe = !!b, this.a = new $d(null, 0, this.fe)
        }
        f = Ud.prototype;
        f.Ue = "";
        f.rh = "";
        f.Wd = "";
        f.bg = null;
        f.cg = "";
        f.Aj = "";
        f.fe = !1;
        f.toString = function() {
            var a = [],
                b = this.Ue;
            b && a.push(ae(b, be), ":");
            if (b = this.Wd) {
                a.push("//");
                var c = this.rh;
                c && a.push(ae(c, be), "@");
                a.push(encodeURIComponent(String(b)));
                b = this.bg;
                null != b && a.push(":", String(b))
            }
            if (b = this.cg) this.Wd && "/" != b.charAt(0) && a.push("/"), a.push(ae(b, "/" == b.charAt(0) ? ce : de));
            (b = this.a.toString()) && a.push("?", b);
            (b = this.Aj) && a.push("#", ae(b, ee));
            return a.join("")
        };
        f.clone = function() {
            return new Ud(this)
        };

        function Vd(a, b, c) {
            a.Ue = c ? b ? decodeURIComponent(b) : "" : b;
            a.Ue && (a.Ue = a.Ue.replace(/:$/, ""))
        }

        function Wd(a, b, c) {
            a.Wd = c ? b ? decodeURIComponent(b) : "" : b
        }

        function Xd(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.bg = b
            } else a.bg = null
        }

        function Yd(a, b, c) {
            b instanceof $d ? (a.a = b, fe(a.a, a.fe)) : (c || (b = ae(b, ge)), a.a = new $d(b, 0, a.fe))
        }

        function he(a, b, c) {
            a.a.set(b, c)
        }

        function ie(a, b, c) {
            t(c) || (c = [String(c)]);
            je(a.a, b, c)
        }

        function Zd(a, b, c) {
            a.Aj = c ? b ? decodeURIComponent(b) : "" : b;
            return a
        }

        function ke(a) {
            he(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36));
            return a
        }

        function le(a) {
            return a instanceof Ud ? a.clone() : new Ud(a, void 0)
        }

        function me(a, b, c, d) {
            var e = new Ud(null, void 0);
            a && Vd(e, a);
            b && Wd(e, b);
            c && Xd(e, c);
            d && (e.cg = d);
            return e
        }

        function ae(a, b) {
            return u(a) ? encodeURI(a).replace(b, ne) : null
        }

        function ne(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
        var be = /[#\/\?@]/g,
            de = /[\#\?:]/g,
            ce = /[\#\?]/g,
            ge = /[\#\?@]/g,
            ee = /#/g;

        function $d(a, b, c) {
            this.a = a || null;
            this.b = !!c
        }

        function oe(a) {
            if (!a.va && (a.va = new Ad, a.M = 0, a.a))
                for (var b = a.a.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        e = null,
                        g = null;
                    0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
                    e = ra(e);
                    e = pe(a, e);
                    a.add(e, g ? ra(g) : "")
                }
        }
        f = $d.prototype;
        f.va = null;
        f.M = null;
        f.Xa = function() {
            oe(this);
            return this.M
        };
        f.add = function(a, b) {
            oe(this);
            this.a = null;
            a = pe(this, a);
            var c = this.va.get(a);
            c || this.va.set(a, c = []);
            c.push(b);
            this.M++;
            return this
        };
        f.remove = function(a) {
            oe(this);
            a = pe(this, a);
            return Dd(this.va.b, a) ? (this.a = null, this.M -= this.va.get(a).length, this.va.remove(a)) : !1
        };
        f.clear = function() {
            this.va = this.a = null;
            this.M = 0
        };
        f.isEmpty = function() {
            oe(this);
            return 0 == this.M
        };

        function qe(a, b) {
            oe(a);
            b = pe(a, b);
            return Dd(a.va.b, b)
        }
        f.Hc = function() {
            oe(this);
            for (var a = this.va.tc(), b = this.va.Hc(), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
            return c
        };
        f.tc = function(a) {
            oe(this);
            var b = [];
            if (u(a)) qe(this, a) && (b = Ta(b, this.va.get(pe(this, a))));
            else {
                a = this.va.tc();
                for (var c = 0; c < a.length; c++) b = Ta(b, a[c])
            }
            return b
        };
        f.set = function(a, b) {
            oe(this);
            this.a = null;
            a = pe(this, a);
            qe(this, a) && (this.M -= this.va.get(a).length);
            this.va.set(a, [b]);
            this.M++;
            return this
        };
        f.get = function(a, b) {
            var c = a ? this.tc(a) : [];
            return 0 < c.length ? String(c[0]) : b
        };

        function je(a, b, c) {
            a.remove(b);
            0 < c.length && (a.a = null, a.va.set(pe(a, b), Ua(c)), a.M += c.length)
        }
        f.toString = function() {
            if (this.a) return this.a;
            if (!this.va) return "";
            for (var a = [], b = this.va.Hc(), c = 0; c < b.length; c++)
                for (var d = b[c], e = encodeURIComponent(String(d)), d = this.tc(d), g = 0; g < d.length; g++) {
                    var h = e;
                    "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
                    a.push(h)
                }
            return this.a = a.join("&")
        };
        f.clone = function() {
            var a = new $d;
            a.a = this.a;
            this.va && (a.va = this.va.clone(), a.M = this.M);
            return a
        };

        function pe(a, b) {
            var c = String(b);
            a.b && (c = c.toLowerCase());
            return c
        }

        function fe(a, b) {
            b && !a.b && (oe(a), a.a = null, Fd(a.va, function(a, b) {
                var e = b.toLowerCase();
                b != e && (this.remove(b), je(this, e, a))
            }, a));
            a.b = b
        };
        var re = {};

        function se(a, b, c) {
            a.dataset ? a.dataset[te(b)] = c : a.setAttribute("data-" + b, c)
        }

        function M(a, b) {
            return a.dataset ? a.dataset[te(b)] : a.getAttribute("data-" + b)
        }
        var ue = {};

        function te(a) {
            return ue[a] || (ue[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            }))
        };
        var ve = q("yt.dom.getNextId_");
        if (!ve) {
            ve = function() {
                return ++we
            };
            z("yt.dom.getNextId_", ve);
            var we = 0
        }

        function xe(a, b) {
            if (a in b) return b[a];
            var c = a.charAt(0).toUpperCase() + a.substr(1);
            if ("moz" + c in b) return b["moz" + c];
            if ("ms" + c in b) return b["ms" + c];
            if ("o" + c in b) return b["o" + c];
            if ("webkit" + c in b) return b["webkit" + c]
        }

        function ye(a) {
            var b = document,
                c;
            Ha(a, function(a) {
                c = xe(a, b);
                return !!c
            });
            return c
        };
        var ze = window.yt && window.yt.config_ || {};
        z("yt.config_", ze);
        var Ae = window.yt && window.yt.tokens_ || {};
        z("yt.tokens_", Ae);
        var Be = window.yt && window.yt.msgs_ || {};
        z("yt.msgs_", Be);
        var Ce = window.yt && window.yt.timeouts_ || [];
        z("yt.timeouts_", Ce);
        var De = window.yt && window.yt.intervals_ || [];
        z("yt.intervals_", De);

        function Ee(a) {
            Fe(ze, arguments)
        }

        function Ge(a, b) {
            return a in ze ? ze[a] : b
        }

        function He(a) {
            Fe(Ae, arguments)
        }

        function O(a, b) {
            ha(a) && (a = Ie(a));
            var c = window.setTimeout(a, b);
            Ce.push(c);
            return c
        }

        function Je(a, b) {
            ha(a) && (a = Ie(a));
            var c = window.setInterval(a, b);
            De.push(c);
            return c
        }

        function P(a) {
            window.clearTimeout(a)
        }

        function Ke(a) {
            window.clearInterval(a)
        }

        function Ie(a) {
            return a && window.yterr ? function() {
                try {
                    return a.apply(this, arguments)
                } catch (b) {
                    throw Le(b), b;
                }
            } : a
        }

        function Le(a) {
            if (window && window.yterr) {
                var b = q("yt.www.errors.log");
                b ? b(a) : (b = Ge("ERRORS") || [], b.push(a), Ee("ERRORS", b))
            }
        }

        function Me(a) {
            Fe(Be, arguments)
        }

        function Ne(a, b, c) {
            var d = b || {};
            if (a = a in Be ? Be[a] : c)
                for (var e in d) a = a.replace(RegExp("\\$" + e, "gi"), function() {
                    return d[e]
                });
            return a
        }

        function Fe(a, b) {
            if (1 < b.length) {
                var c = b[0];
                a[c] = b[1]
            } else {
                var d = b[0];
                for (c in d) a[c] = d[c]
            }
        }
        var Oe = "Microsoft Internet Explorer" == navigator.appName;

        function Pe(a) {
            if (a = a || window.event) {
                for (var b in a) b in Qe || (this[b] = a[b]);
                this.scale = a.scale;
                this.rotation = a.rotation;
                this.le = a;
                (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
                this.target = b;
                if (b = a.relatedTarget) try {
                    b = b.nodeName && b
                } catch (c) {
                    b = null
                } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
                this.relatedTarget = b;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                if (document.body && document.documentElement) {
                    b =
                        document.body.scrollLeft + document.documentElement.scrollLeft;
                    var d = document.body.scrollTop + document.documentElement.scrollTop;
                    this.pageX = void 0 != a.pageX ? a.pageX : a.clientX + b;
                    this.pageY = void 0 != a.pageY ? a.pageY : a.clientY + d
                }
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis ==
                    a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
            }
        }
        f = Pe.prototype;
        f.le = null;
        f.type = "";
        f.target = null;
        f.relatedTarget = null;
        f.currentTarget = null;
        f.data = null;
        f.source = null;
        f.state = null;
        f.keyCode = 0;
        f.charCode = 0;
        f.altKey = !1;
        f.ctrlKey = !1;
        f.shiftKey = !1;
        f.clientX = 0;
        f.clientY = 0;
        f.pageX = 0;
        f.pageY = 0;
        f.wheelDeltaX = 0;
        f.wheelDeltaY = 0;
        f.rotation = 0;
        f.scale = 1;
        f.preventDefault = function() {
            this.le.returnValue = !1;
            this.le.preventDefault && this.le.preventDefault()
        };
        f.stopPropagation = function() {
            this.le.cancelBubble = !0;
            this.le.stopPropagation && this.le.stopPropagation()
        };
        var Qe = {
            stopPropagation: 1,
            preventMouseEvent: 1,
            preventManipulation: 1,
            preventDefault: 1,
            layerX: 1,
            layerY: 1,
            scale: 1,
            rotation: 1
        };
        var Re = q("yt.events.listeners_") || {};
        z("yt.events.listeners_", Re);
        var Se = q("yt.events.counter_") || {
            count: 0
        };
        z("yt.events.counter_", Se);

        function Te(a, b, c, d) {
            return Bb(Re, function(e) {
                return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
            })
        }

        function Q(a, b, c, d) {
            if (!a || !a.addEventListener && !a.attachEvent) return "";
            d = !!d;
            var e = Te(a, b, c, d);
            if (e) return e;
            var e = ++Se.count + "",
                g = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document),
                h;
            h = g ? function(d) {
                d = new Pe(d);
                if (!Rc(d.relatedTarget, function(b) {
                        return b == a
                    })) return d.currentTarget = a, d.type = b, c.call(a, d)
            } : function(b) {
                b = new Pe(b);
                b.currentTarget = a;
                return c.call(a, b)
            };
            h = Ie(h);
            Re[e] = [a, b, c, h, d];
            a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover", h,
                d) : "mouseleave" == b && g ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
            return e
        }

        function Ue(a, b) {
            var c;
            return c = Q(a, "timeupdate", function() {
                Ve(c);
                b.apply(a, arguments)
            }, void 0)
        }

        function We(a, b, c) {
            Xe(a, "change", b, function(a) {
                return a.nodeName.toLowerCase() === c.toLowerCase() && !0
            })
        }

        function Ye(a, b, c) {
            return Xe(a, "click", b, function(a) {
                return E(rc(a), c)
            })
        }

        function Xe(a, b, c, d) {
            var e = a || document;
            return Q(e, b, function(a) {
                var b = Rc(a.target, function(a) {
                    return a === e || d(a)
                });
                b && b !== e && !b.disabled && (a.currentTarget = b, c.call(b, a))
            })
        }

        function Ve(a) {
            a && ("string" == typeof a && (a = [a]), B(a, function(a) {
                if (a in Re) {
                    var c = Re[a],
                        d = c[0],
                        e = c[1],
                        g = c[3],
                        c = c[4];
                    d.removeEventListener ? d.removeEventListener(e, g, c) : d.detachEvent && d.detachEvent("on" + e, g);
                    delete Re[a]
                }
            }))
        }

        function Ze(a) {
            for (var b in Re) Re[b][0] == a && Ve(b)
        }

        function $e(a, b) {
            if (document.createEvent) {
                var c = document.createEvent("HTMLEvents");
                c.initEvent(b, !0, !0);
                a.dispatchEvent(c)
            } else c = document.createEventObject(), a.fireEvent("on" + b, c)
        };

        function af() {
            return !!ye(["fullscreenEnabled", "fullScreenEnabled"])
        };

        function bf(a) {
            a = a || {};
            this.url = "yap";
            this.urlV8 = "yap";
            this.urlV9As2 = "yap";
            this.args = a.args || Db(cf);
            this.assets = a.assets || {};
            this.attrs = a.attrs || Db(df);
            this.params = a.params || Db(ef);
            this.minVersion = a.min_version || "1.0.0";
            this.fallback = a.fallback || null;
            this.fallbackMessage = a.fallbackMessage || null;
            this.html5 = !!a.html5;
            this.disable = a.disable || {};
            this.loaded = !!a.loaded
        }
        var cf = {
                enablejsapi: 1
            },
            df = {},
            ef = {
                allowscriptaccess: "always",
                allowfullscreen: "true",
                bgcolor: "#FFFF"
            };

        function ff(a) {
            a instanceof bf || (a = new bf(a));
            return a
        }
        bf.prototype.clone = function() {
            var a = new bf,
                b;
            for (b in this) {
                var c = this[b];
                "object" == da(c) ? a[b] = Db(c) : a[b] = c
            }
            return a
        };
        var gf = {},
            hf = 0;

        function jf(a, b) {
            if (a) {
                var c = new Image,
                    d = "" + hf++;
                gf[d] = c;
                c.onload = c.onerror = function() {
                    b && gf[d] && b();
                    delete gf[d]
                };
                c.src = a;
                c = eval("null")
            }
        };

        function kf() {}
        kf.prototype.qb = !1;
        kf.prototype.W = function() {
            return this.qb
        };
        kf.prototype.dispose = function() {
            this.qb || (this.qb = !0, this.I())
        };

        function R(a, b) {
            var c = oa(lf, b);
            a.Ua || (a.Ua = []);
            a.Ua.push(v(c, void 0))
        }
        kf.prototype.I = function() {
            if (this.Ua)
                for (; this.Ua.length;) this.Ua.shift()()
        };

        function lf(a) {
            a && "function" == typeof a.dispose && a.dispose()
        }

        function mf(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                fa(d) ? mf.apply(null, d) : lf(d)
            }
        };

        function nf(a, b) {
            this.app = a;
            this.b = null;
            this.g = {};
            this.j = {};
            this.o = {};
            this.k = {};
            this.i = null;
            this.a = b;
            S(this, "cueVideoById", this.Qo);
            S(this, "loadVideoById", this.oi);
            S(this, "cueVideoByUrl", this.Ro);
            S(this, "loadVideoByUrl", this.pp);
            S(this, "playVideo", this.qf);
            S(this, "pauseVideo", this.dl);
            S(this, "stopVideo", this.ji);
            S(this, "clearVideo", this.Oo);
            S(this, "getVideoBytesLoaded", this.dp);
            S(this, "getVideoBytesTotal", this.ep);
            S(this, "getVideoLoadedFraction", this.gp);
            S(this, "getVideoStartBytes", this.hp);
            S(this,
                "cuePlaylist", this.Po);
            S(this, "loadPlaylist", this.np);
            S(this, "nextVideo", this.rp);
            S(this, "previousVideo", this.wp);
            S(this, "playVideoAt", this.vp);
            S(this, "setShuffle", this.Bp);
            S(this, "setLoop", this.yp);
            S(this, "getPlaylist", this.Be);
            S(this, "getPlaylistIndex", this.ap);
            S(this, "getPlaylistId", this.$o);
            S(this, "loadModule", this.mp);
            S(this, "unloadModule", this.Yk);
            S(this, "setOption", this.Xk);
            S(this, "getOption", this.ii);
            S(this, "getOptions", this.Wo);
            S(this, "mute", this.Tk);
            S(this, "unMute", this.Vk);
            S(this, "isMuted",
                this.kp);
            S(this, "setVolume", this.Uk);
            S(this, "getVolume", this.Sk);
            S(this, "seekTo", this.Eg);
            S(this, "getPlayerState", this.Zo);
            S(this, "getPlaybackRate", this.Yo);
            S(this, "setPlaybackRate", this.Ap);
            S(this, "getAvailablePlaybackRates", this.To);
            S(this, "getPlaybackQuality", this.Xo);
            S(this, "setPlaybackQuality", this.zp);
            S(this, "getAvailableQualityLevels", this.Uo);
            S(this, "getCurrentTime", this.getCurrentTime);
            S(this, "getDuration", this.yg);
            S(this, "addEventListener", this.addEventListener);
            S(this, "removeEventListener",
                this.removeEventListener);
            S(this, "getVideoUrl", this.ip);
            S(this, "getDebugText", this.Vo);
            S(this, "getVideoEmbedCode", this.fp);
            S(this, "getVideoData", this.getVideoData);
            S(this, "addCueRange", this.No);
            S(this, "removeCueRange", this.xp);
            S(this, "setSize", this.Cp);
            S(this, "getApiInterface", this.So);
            S(this, "destroy", this.destroy);
            S(this, "showVideoInfo", this.Dp);
            S(this, "hideVideoInfo", this.jp);
            this.j.logFallback = v(this.qp, this);
            this.j.isNotServable = v(this.lp, this);
            this.j.getUpdatedConfigurationData = v(this.bp, this)
        }
        A(nf, kf);

        function S(a, b, c) {
            a.g[b] = v(c, a)
        }
        f = nf.prototype;
        f.So = function() {
            return zb(this.g)
        };
        f.P = function() {
            return this.b
        };
        f.addEventListener = function(a, b) {
            var c = b;
            u(b) && (c = function() {
                q(b).apply(window, arguments)
            }, this.o[b] = c);
            this.app.D(a, c)
        };
        f.Up = function(a, b) {
            var c = u(b) ? a + b : a + ja(b);
            if (!this.k[c]) {
                u(b) && (b = function() {
                    q(b).apply(window, arguments)
                });
                var d = v(function(a) {
                    b({
                        target: this.i,
                        data: a
                    })
                }, this);
                this.k[c] = d;
                this.addEventListener(a, d)
            }
        };
        f.removeEventListener = function(a, b) {
            var c = b;
            if (u(b) && b in this.o) {
                var c = this.o[b],
                    d = this.o;
                b in d && delete d[b]
            }
            this.app.Q(a, c)
        };
        f.Vp = function(a, b) {
            var c = u(b) ? a + b : a + ja(b);
            this.k[c] && this.removeEventListener(a, this.k[c])
        };
        f.Zo = function() {
            return this.app.ea
        };
        f.Eg = function(a, b) { of (this.app, !0, this.a);
            pf(this.app, a, b, void 0, this.a)
        };
        f.getCurrentTime = function() {
            var a = this.app.md;
            return a && T(this.app).b != a ? a.getCurrentTime() : this.app.getCurrentTime(this.a)
        };
        f.yg = function() {
            var a = this.app.md;
            return a ? a.gd : 0
        };
        f.Sk = function() {
            return this.app.na.volume
        };
        f.Uk = function(a) {
            var b = this.app;
            b.na.volume = a;
            b.u("internalvolumechange", b.na)
        };
        f.kp = function() {
            return this.app.na.muted
        };
        f.Tk = function() {
            var a = this.app;
            a.na.muted = !0;
            a.u("internalvolumechange", a.na)
        };
        f.Vk = function() {
            var a = this.app;
            a.na.muted = !1;
            a.u("internalvolumechange", a.na)
        };
        f.qf = function() { of (this.app, !0, this.a);
            qf(this.app, this.a)
        };
        f.dl = function() {
            var a = this.app,
                b = this.a;
            if (!rf(a, "play_pause")) {
                var c = a.T.play_pause ? a.U : null;
                c ? c.ee("control_pause") : a.ve(!1, b)
            }
        };
        f.ji = function() {
            var a = this.app;
            rf(a, "play_pause") || sf(a, this.a)
        };
        f.Oo = function() {};
        f.Yo = function() {
            return this.app.Vf
        };
        f.Ap = function(a) {
            tf(this.app, a)
        };
        f.To = function() {
            return this.app.a.pi ? uf : [1]
        };
        f.Xo = function() {
            return vf(this.app, this.a)
        };
        f.zp = function(a) {
            var b = T(this.app, this.a);
            b && wf(b, "m", a)
        };
        f.Uo = function() {
            return xf(this.app, this.a)
        };
        f.dp = function() {
            var a = yf(this.app.md);
            return Math.floor(1E3 * a)
        };
        f.ep = function() {
            return 1E3
        };
        f.gp = function() {
            return yf(this.app.md)
        };
        f.hp = function() {
            return 0
        };
        f.Cp = function() {
            this.app.R.fi()
        };
        f.mp = function(a) {
            (a = zf(this.app.k, a)) && a.load()
        };
        f.Yk = function(a) {
            (a = zf(this.app.k, a)) && a.unload()
        };
        f.oi = function(a, b, c) {
            var d = this.app,
                e = this.a;
            a = Af(d, Bf(a, d.list, b, c), e); of (d, a, e)
        };
        f.Qo = function(a, b, c) {
            var d = this.app,
                e = this.a;
            Cf(d, new Df(Bf(a, d.list, b, c)), e)
        };
        f.pp = function(a, b, c) {
            var d = this.app,
                e = this.a;
            a = Ef(a, d.list, b, c);
            b = Af(d, a, e); of (d, b, e);
            Ff(d, a.mediaContentUrl)
        };
        f.Ro = function(a, b, c) {
            var d = this.app,
                e = this.a;
            a = Ef(a, d.list, b, c);
            Cf(d, new Df(a), e);
            Ff(d, a.mediaContentUrl)
        };
        f.ip = function () {
            var a = this.app;
            var b = a.a;
        
            // Log initial application state
            console.log("App state:", this.app);
        
            var videoData = a.getVideoData(1); // Fetch video data
            console.log("Raw video data:", videoData);
        
            var videoInfo = {
                v: videoData.K,
                list: videoData.b
            };
        
            console.log("Processed video info:", videoInfo);
        
            if (b.V) {
                videoInfo.feature = "player_" + b.V;
                console.log("Added feature to video info:", videoInfo.feature);
            }
        
            var url = U(
                b.protocol + "://" + "192.168.1.184",
                videoInfo
            );
        
            console.log("Constructed URL:", url);
        
            return url;
        };        
        f.Vo = function() {
            var a = this.app,
                b = {};
            b.debug_videoId = a.g.a.K;
            b.debug_playbackQuality = vf(a);
            b.debug_date = (new Date).toString();
            return hb(b)
        };
        f.fp = function() {
            return ""
        };
        f.No = function() {
            return !1
        };
        f.xp = function() {};
        f.np = function(a, b, c, d) {
            var e = this.app;
            e.Ve = !1;
            Gf(e, a, b, c, d)
        };
        f.Po = function(a, b, c, d) {
            var e = this.app;
            e.Ve = !0;
            Gf(e, a, b, c, d)
        };
        f.rp = function() {
            Hf(this.app)
        };
        f.wp = function() {
            var a = this.app;
            a.b && (a.b.ld ? (a.b.loop || 0 <= a.b.ga - 1) && If(a, Jf(a.b)) : (Jf(a.b), a.Ve = !1))
        };
        f.vp = function(a) {
            var b = this.app;
            b.b && (b.b.ld ? If(b, Kf(b.b, a)) : b.Ve = !1, Lf(b.b, a))
        };
        f.Bp = function(a) {
            var b = this.app;
            b.b && Mf(b.b, a)
        };
        f.yp = function(a) {
            var b = this.app;
            b.b && (b.b.loop = a)
        };
        f.Be = function() {
            var a = this.app.b;
            if (!a) return null;
            for (var b = [], c = 0; c < a.Ab; c++) b[c] = Kf(a, c).K;
            return b
        };
        f.ap = function() {
            var a = this.app.b ? this.app.b.ga : null;
            return null == a ? -1 : a
        };
        f.$o = function() {
            return this.app.b && this.app.b.g ? this.app.b.g.toString() : null
        };
        f.Xk = function(a, b, c) {
            return Nf(this.app.k, a, b, c)
        };
        f.ii = function(a, b, c) {
            return Nf(this.app.k, a, b, c)
        };
        f.Wo = function(a) {
            return Of(this.app.k, a)
        };
        f.getVideoData = function() {
            var a = this.app.getVideoData(this.a) || {};
            return {
                video_id: a.K,
                author: a.author,
                title: a.title
            }
        };
        f.Dp = function() {
            var a = this.app.R;
            a.g && (a.g.show(), a.gn(), Ke(a.F), a.F = Je(v(a.gn, a), 500))
        };
        f.jp = function() {
            this.app.R.Zh()
        };
        f.qp = function() {
            Pf(this.app.g, 204)
        };
        f.lp = function() {
            var a;
            a = (a = T(this.app, 1)) && a.i;
            return !(!a || !V(a, 128) || 5 != a.a.errorCode)
        };
        f.bp = function() {
            var a = this.app,
                b = a.L.clone();
            if (a = a.g.getVideoData()) {
                var c = b.args,
                    d = Db(a.k);
                d.start = a.ma;
                x(c, d)
            }
            return b
        };
        f.destroy = function() {
            this.app.dispose()
        };
        f.I = function() {
            if (this.b) {
                for (var a in this.g) this.b[a] = null;
                for (a in this.j) this.b[a] = null
            }
            this.o = this.k = this.b = null;
            nf.G.I.call(this)
        };

        function Qf(a, b) {
            nf.call(this, a, b);
            S(this, "cueVideoByPlayerVars", this.rs);
            S(this, "loadVideoByPlayerVars", this.vs);
            S(this, "preloadVideoByPlayerVars", this.ws);
            S(this, "seekBy", this.pn);
            S(this, "enableLicenseIntercept", this.ts);
            S(this, "updatePlaylist", this.zs);
            S(this, "resumeLicenseSession", this.xs);
            S(this, "updateLastActiveTime", this.ys);
            S(this, "updateRemoteReceivers", this.As);
            S(this, "updateVideoData", this.Bs);
            S(this, "getStoryboardFormat", this.us)
        }
        A(Qf, nf);
        f = Qf.prototype;
        f.rs = function(a) {
            var b = this.a;
            Cf(this.app, new Df(a), b)
        };
        f.vs = function(a) {
            Af(this.app, a, this.a)
        };
        f.ws = function() {};
        f.pn = function(a, b, c) { of (this.app, !0, this.a);
            var d = this.app,
                e = this.a;
            pf(d, d.getCurrentTime() + a, b, c, e)
        };
        f.ts = function() {
            var a = this.app;
            a.fj || (a.fj = !0, a.eh = {})
        };
        f.zs = function() {
            var a = this.app;
            Rf(a);
            a.Wa("onPlaylistUpdate")
        };
        f.xs = function(a, b) {
            var c = this.app,
                d = c.eh[a];
            d && (Sf(d, b), d.start(), delete c.eh[a])
        };
        f.ys = function() {
            this.app.a.cb = y()
        };
        f.As = function() {};
        f.Bs = function(a) {
            var b = T(this.app, this.a || 1);
            b && (b = b.a, Tf(b, a), b.u("dataupdated"))
        };
        f.us = function() {
            return this.app.getVideoData().k.storyboard_spec
        };
        f.getVideoData = function() {
            var a = Qf.G.getVideoData.call(this),
                b = this.app.getVideoData(this.a) || {};
            a.cpn = b.wa;
            return a
        };
        f.getCurrentTime = function(a) {
            return a ? this.app.getCurrentTime(a) : Qf.G.getCurrentTime.call(this)
        };
        f.yg = function(a) {
            return a ? Uf(this.app, a) : Qf.G.yg.call(this)
        };

        function Vf(a, b) {
            Qf.call(this, a, b)
        }
        A(Vf, Qf);
        f = Vf.prototype;
        f.oi = function(a, b, c) {
            Af(this.app, Bf(a, this.app.list, b, c), this.a)
        };
        f.qf = function() {
            qf(this.app, this.a)
        };
        f.Eg = function(a, b) {
            pf(this.app, a, b, void 0, this.a)
        };

        function Wf(a) {
            return a.app.R.b
        }
        f.N = function() {
            return this.app.N()
        };
        f.Be = function() {
            return this.app.b
        };
        f.getVideoData = function() {
            return this.app.getVideoData(this.a)
        };

        function Xf(a) {
            this.j = Math.exp(Math.log(0.5) / a);
            this.a = this.i = 0
        }
        Xf.prototype.g = function(a, b) {
            var c = Math.pow(this.j, a);
            this.a = b * (1 - c) + c * this.a;
            this.i += a
        };
        Xf.prototype.b = function() {
            return this.a / (1 - Math.pow(this.j, this.i))
        };

        function Yf(a, b) {
            this.o = 0;
            this.j = a;
            this.C = b || 0.5;
            this.k = "index";
            this.a = 0;
            this.i = []
        }
        Yf.prototype.g = function(a, b) {
            Zf(this, "index");
            this.i.push({
                index: this.o++,
                Yf: a,
                value: b
            });
            this.a += a;
            for (Zf(this, "index"); this.a > this.j;) {
                var c = this.a - this.j,
                    d = this.i[0];
                d.Yf <= c ? (this.a -= d.Yf, this.i.shift()) : (this.a -= c, d.Yf -= c)
            }
        };

        function $f(a, b) {
            Zf(a, "value");
            var c = b * a.a,
                d = 0,
                e = NaN;
            a.i.some(function(a) {
                d += a.Yf;
                e = a.value;
                if (d >= c) return !0
            });
            return e
        }
        Yf.prototype.b = function() {
            return $f(this, this.C)
        };

        function Zf(a, b) {
            a.k != b && (a.k = b, bb(a.i, b))
        };

        function ag() {};

        function bg() {}
        A(bg, ag);
        bg.prototype.Xa = function() {
            var a = 0;
            yd(this.Tc(!0), function() {
                a++
            });
            return a
        };
        bg.prototype.clear = function() {
            var a = zd(this.Tc(!0)),
                b = this;
            B(a, function(a) {
                b.remove(a)
            })
        };

        function cg(a) {
            this.a = a
        }
        A(cg, bg);
        f = cg.prototype;
        f.isAvailable = function() {
            if (!this.a) return !1;
            try {
                return this.a.setItem("__sak", "1"), this.a.removeItem("__sak"), !0
            } catch (a) {
                return !1
            }
        };
        f.set = function(a, b) {
            try {
                this.a.setItem(a, b)
            } catch (c) {
                if (0 == this.a.length) throw "Storage mechanism: Storage disabled";
                throw "Storage mechanism: Quota exceeded";
            }
        };
        f.get = function(a) {
            a = this.a.getItem(a);
            if (!u(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
            return a
        };
        f.remove = function(a) {
            this.a.removeItem(a)
        };
        f.Xa = function() {
            return this.a.length
        };
        f.Tc = function(a) {
            var b = 0,
                c = this.a,
                d = new wd;
            d.next = function() {
                if (b >= c.length) throw vd;
                var d;
                d = c.key(b++);
                if (a) return d;
                d = c.getItem(d);
                if (!u(d)) throw "Storage mechanism: Invalid value was encountered";
                return d
            };
            return d
        };
        f.clear = function() {
            this.a.clear()
        };
        f.key = function(a) {
            return this.a.key(a)
        };

        function dg() {
            var a = null;
            try {
                a = window.localStorage || null
            } catch (b) {}
            this.a = a
        }
        A(dg, cg);

        function eg(a) {
            this.Oe = a;
            this.xn = new jb
        }
        f = eg.prototype;
        f.Oe = null;
        f.xn = null;
        f.set = function(a, b) {
            s(b) ? this.Oe.set(a, ib(this.xn, b)) : this.Oe.remove(a)
        };
        f.get = function(a) {
            var b;
            try {
                b = this.Oe.get(a)
            } catch (c) {
                return
            }
            if (null !== b) try {
                return fb(b)
            } catch (d) {
                throw "Storage: Invalid value was encountered";
            }
        };
        f.remove = function(a) {
            this.Oe.remove(a)
        };

        function fg() {
            var a = null;
            try {
                a = window.sessionStorage || null
            } catch (b) {}
            this.a = a
        }
        A(fg, cg);

        function gg(a) {
            eg.call(this, a)
        }
        A(gg, eg);

        function hg(a) {
            this.data = a
        }

        function ig(a) {
            return !s(a) || a instanceof hg ? a : new hg(a)
        }
        gg.prototype.set = function(a, b) {
            gg.G.set.call(this, a, ig(b))
        };
        gg.prototype.a = function(a) {
            a = gg.G.get.call(this, a);
            if (!s(a) || a instanceof Object) return a;
            throw "Storage: Invalid value was encountered";
        };
        gg.prototype.get = function(a) {
            if (a = this.a(a)) {
                if (a = a.data, !s(a)) throw "Storage: Invalid value was encountered";
            } else a = void 0;
            return a
        };

        function kg(a) {
            eg.call(this, a)
        }
        A(kg, gg);

        function lg(a) {
            var b = a.creation;
            a = a.expiration;
            return !!a && a < y() || !!b && b > y()
        }
        kg.prototype.set = function(a, b, c) {
            if (b = ig(b)) {
                if (c) {
                    if (c < y()) {
                        kg.prototype.remove.call(this, a);
                        return
                    }
                    b.expiration = c
                }
                b.creation = y()
            }
            kg.G.set.call(this, a, b)
        };
        kg.prototype.a = function(a, b) {
            var c = kg.G.a.call(this, a);
            if (c)
                if (!b && lg(c)) kg.prototype.remove.call(this, a);
                else return c
        };

        function mg(a) {
            eg.call(this, a)
        }
        A(mg, kg);

        function ng(a, b) {
            var c = [];
            yd(b, function(a) {
                var b;
                try {
                    b = mg.prototype.a.call(this, a, !0)
                } catch (g) {
                    if ("Storage: Invalid value was encountered" == g) return;
                    throw g;
                }
                s(b) ? lg(b) && c.push(a) : c.push(a)
            }, a);
            return c
        }

        function og(a, b) {
            var c = ng(a, b);
            B(c, function(a) {
                mg.prototype.remove.call(this, a)
            }, a)
        };

        function pg(a, b, c) {
            var d = c && 0 < c ? c : 0;
            c = d ? y() + 1E3 * d : 0;
            if ((d = d ? qg : rg) && window.JSON) {
                u(b) || (b = JSON.stringify(b, void 0));
                try {
                    d.set(a, b, c)
                } catch (e) {
                    d.remove(a)
                }
            }
        }

        function sg(a) {
            if (!rg && !qg || !window.JSON) return null;
            var b;
            try {
                b = rg.get(a), b = u(b) ? b : qg.get(a)
            } catch (c) {
                return null
            }
            if (!u(b)) return null;
            try {
                b = JSON.parse(b, void 0)
            } catch (d) {}
            return b
        }

        function tg(a) {
            rg && rg.remove(a);
            qg && qg.remove(a)
        }
        var qg, ug = new dg;
        qg = ug.isAvailable() ? new mg(ug) : null;
        var rg, vg = new fg;
        rg = vg.isAvailable() ? new mg(vg) : null;

        function wg(a) {
            var b = sg(a);
            if (!b) {
                var c = new dg;
                c.isAvailable() && (b = (new eg(c)).get(a))
            }
            return b
        }

        function xg(a) {
            var b = {};
            b.volume = isNaN(a.volume) ? yg().volume : ob(a.volume, 0, 100);
            b.nonNormalized = a.nonNormalized;
            b.muted = void 0 == a.muted ? yg().muted : a.muted;
            pg("yt-player-volume", b, 2592E3)
        }

        function yg() {
            var a = {
                    volume: 100,
                    muted: !1,
                    nonNormalized: 100
                },
                b = wg("yt-player-volume") || {};
            a.volume = isNaN(b.volume) ? 100 : ob(b.volume, 0, 100);
            a.nonNormalized = isNaN(b.nonNormalized) ? a.volume : b.nonNormalized;
            a.muted = void 0 == b.muted ? !1 : b.muted;
            return a
        };

        function zg(a) {
            this.g = this.i = 0;
            a.$b ? this.j = new Xf(16) : this.j = new Yf(16, 0.6);
            this.b = new Xf(4);
            a.Vj ? this.a = new Yf(8, 0.6) : a.Wj ? this.a = new Yf(16, 0.6) : a.Uj ? this.a = new Yf(24, 0.6) : this.a = new Xf(15);
            var b = wg("yt-player-bandwidth");
            a = a.Vb ? 0.1 : 0.5;
            b && !isNaN(b.byterate) ? this.a.g(a, b.byterate) : this.a.g(a, 75E3)
        }

        function Ag(a) {
            a = a.j.b();
            return a = isNaN(a) ? 0.5 : a
        }

        function Bg(a) {
            a = a.a.b();
            return 0 < a ? a : 1
        };

        function Cg() {
            this.a = [];
            this.kb = {}
        }
        A(Cg, kf);
        f = Cg.prototype;
        f.Pm = 1;
        f.mh = 0;
        f.D = function(a, b, c) {
            var d = this.kb[a];
            d || (d = this.kb[a] = []);
            var e = this.Pm;
            this.a[e] = a;
            this.a[e + 1] = b;
            this.a[e + 2] = c;
            this.Pm = e + 3;
            d.push(e);
            return e
        };
        f.Q = function(a, b, c) {
            if (a = this.kb[a]) {
                var d = this.a;
                if (a = Ka(a, function(a) {
                        return d[a + 1] == b && d[a + 2] == c
                    })) return this.xd(a)
            }
            return !1
        };
        f.xd = function(a) {
            if (0 != this.mh) return this.b || (this.b = []), this.b.push(a), !1;
            var b = this.a[a];
            if (b) {
                var c = this.kb[b];
                c && Qa(c, a);
                delete this.a[a];
                delete this.a[a + 1];
                delete this.a[a + 2]
            }
            return !!b
        };
        f.u = function(a, b) {
            var c = this.kb[a];
            if (c) {
                this.mh++;
                for (var d = Xa(arguments, 1), e = 0, g = c.length; e < g; e++) {
                    var h = c[e];
                    this.a[h + 1].apply(this.a[h + 2], d)
                }
                this.mh--;
                if (this.b && 0 == this.mh)
                    for (; c = this.b.pop();) this.xd(c);
                return 0 != e
            }
            return !1
        };
        f.clear = function(a) {
            if (a) {
                var b = this.kb[a];
                b && (B(b, this.xd, this), delete this.kb[a])
            } else this.a.length = 0, this.kb = {}
        };
        f.Xa = function(a) {
            if (a) {
                var b = this.kb[a];
                return b ? b.length : 0
            }
            a = 0;
            for (b in this.kb) a += this.Xa(b);
            return a
        };
        f.I = function() {
            Cg.G.I.call(this);
            delete this.a;
            delete this.kb;
            delete this.b
        };

        function Dg(a, b) {
            this.start = a;
            this.end = b;
            this.a = ja(this)
        }

        function Eg(a, b) {
            return a.start != b.start ? a.start - b.start : a.end != b.end ? a.end - b.end : a.a != b.a ? a.a - b.a : 0
        }
        Dg.prototype.contains = function(a, b) {
            return a >= this.start && (a < this.end || a == this.end && this.start == this.end) && (null == b || a < b && b <= this.end)
        };
        Dg.prototype.toString = function() {
            return "Interval[" + this.start + ", " + this.end + "]"
        };

        function Fg(a, b, c) {
            Dg.call(this, a, b);
            a = c || {};
            this.pa = a.id || "";
            void 0 != a.priority && (this.kg = a.priority);
            this.namespace = a.namespace || "";
            this.hc = new Cg
        }
        A(Fg, Dg);
        f = Fg.prototype;
        f.pa = "";
        f.kg = 7;
        f.active = !0;
        f.hc = null;
        f.namespace = "";
        f.getId = function() {
            return this.pa
        };

        function Gg(a, b) {
            return a.start == b.start ? a.kg == b.kg ? 0 : a.kg < b.kg ? -1 : 1 : a.start < b.start ? -1 : 1
        };

        function Hg(a, b) {
            this.type = a;
            this.currentTarget = this.target = b
        }
        f = Hg.prototype;
        f.dispose = function() {};
        f.Hd = !1;
        f.defaultPrevented = !1;
        f.ln = !0;
        f.stopPropagation = function() {
            this.Hd = !0
        };
        f.preventDefault = function() {
            this.defaultPrevented = !0;
            this.ln = !1
        };

        function Ig(a) {
            Ig[" "](a);
            return a
        }
        Ig[" "] = ba;
        var Jg = !H || jc(9),
            Kg = H && !I("9");
        !Wb || I("528");
        Vb && I("1.9b") || H && I("8") || Ub && I("9.5") || Wb && I("528");
        Vb && !I("8") || H && I("9");

        function Lg(a, b) {
            a && this.init(a, b)
        }
        A(Lg, Hg);
        f = Lg.prototype;
        f.target = null;
        f.relatedTarget = null;
        f.clientX = 0;
        f.clientY = 0;
        f.keyCode = 0;
        f.charCode = 0;
        f.ctrlKey = !1;
        f.altKey = !1;
        f.shiftKey = !1;
        f.ig = null;
        f.init = function(a, b) {
            var c = this.type = a.type;
            Hg.call(this, c);
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (Vb) {
                    var e;
                    t: {
                        try {
                            Ig(d.nodeName);
                            e = !0;
                            break t
                        } catch (g) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.state = a.state;
            this.ig = a;
            a.defaultPrevented && this.preventDefault();
            delete this.Hd
        };
        f.stopPropagation = function() {
            Lg.G.stopPropagation.call(this);
            this.ig.stopPropagation ? this.ig.stopPropagation() : this.ig.cancelBubble = !0
        };
        f.preventDefault = function() {
            Lg.G.preventDefault.call(this);
            var a = this.ig;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = !1, Kg) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {}
        };
        var Mg = "closure_listenable_" + (1E6 * Math.random() | 0);

        function Ng(a) {
            try {
                return !(!a || !a[Mg])
            } catch (b) {
                return !1
            }
        }
        var Og = 0;

        function Pg(a, b, c, d, e) {
            this.he = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Fh = e;
            this.key = ++Og;
            this.removed = this.qh = !1
        }

        function Qg(a) {
            a.removed = !0;
            a.he = null;
            a.proxy = null;
            a.src = null;
            a.Fh = null
        };

        function Rg(a) {
            this.src = a;
            this.La = {};
            this.a = 0
        }
        Rg.prototype.add = function(a, b, c, d, e) {
            var g = this.La[a];
            g || (g = this.La[a] = [], this.a++);
            var h = Sg(g, b, d, e); - 1 < h ? (a = g[h], c || (a.qh = !1)) : (a = new Pg(b, this.src, a, !!d, e), a.qh = c, g.push(a));
            return a
        };
        Rg.prototype.remove = function(a, b, c, d) {
            if (!(a in this.La)) return !1;
            var e = this.La[a];
            b = Sg(e, b, c, d);
            return -1 < b ? (Qg(e[b]), Ra(e, b), 0 == e.length && (delete this.La[a], this.a--), !0) : !1
        };

        function Tg(a, b) {
            var c = b.type;
            if (!(c in a.La)) return !1;
            var d = Qa(a.La[c], b);
            d && (Qg(b), 0 == a.La[c].length && (delete a.La[c], a.a--));
            return d
        }
        Rg.prototype.removeAll = function(a) {
            var b = 0,
                c;
            for (c in this.La)
                if (!a || c == a) {
                    for (var d = this.La[c], e = 0; e < d.length; e++) ++b, Qg(d[e]);
                    delete this.La[c];
                    this.a--
                }
            return b
        };

        function Ug(a, b, c, d, e) {
            a = a.La[b];
            b = -1;
            a && (b = Sg(a, c, d, e));
            return -1 < b ? a[b] : null
        }

        function Sg(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var g = a[e];
                if (!g.removed && g.he == b && g.capture == !!c && g.Fh == d) return e
            }
            return -1
        };
        var Vg = {},
            Wg = {},
            Xg = {};

        function Yg(a, b, c, d, e) {
            if (t(b)) {
                for (var g = 0; g < b.length; g++) Yg(a, b[g], c, d, e);
                return null
            }
            c = Zg(c);
            if (Ng(a)) a = a.listen(b, c, d, e);
            else {
                g = c;
                if (!b) throw Error("Invalid event type");
                c = !!d;
                var h = ja(a),
                    k = Wg[h];
                k || (Wg[h] = k = new Rg(a));
                d = k.add(b, g, !1, d, e);
                d.proxy || (e = $g(), d.proxy = e, e.src = a, e.he = d, a.addEventListener ? a.addEventListener(b, e, c) : a.attachEvent(b in Xg ? Xg[b] : Xg[b] = "on" + b, e), Vg[d.key] = d);
                a = d
            }
            return a
        }

        function $g() {
            var a = ah,
                b = Jg ? function(c) {
                    return a.call(b.src, b.he, c)
                } : function(c) {
                    c = a.call(b.src, b.he, c);
                    if (!c) return c
                };
            return b
        }

        function bh(a, b, c, d, e) {
            if (t(b))
                for (var g = 0; g < b.length; g++) bh(a, b[g], c, d, e);
            else c = Zg(c), Ng(a) ? a.yd(b, c, d, e) : a && (d = !!d, (a = ch(a)) && (b = Ug(a, b, c, d, e)) && dh(b))
        }

        function dh(a) {
            if (ga(a) || !a || a.removed) return !1;
            var b = a.src;
            if (Ng(b)) return Tg(b.uc, a);
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Xg ? Xg[c] : Xg[c] = "on" + c, d);
            (c = ch(b)) ? (Tg(c, a), 0 == c.a && (c.src = null, delete Wg[ja(b)])) : Qg(a);
            delete Vg[a.key];
            return !0
        }

        function eh(a, b) {
            var c = Wg[a];
            if (!c) return 0;
            var d = 0,
                e;
            for (e in c.La)
                if (!b || e == b)
                    for (var g = Ua(c.La[e]), h = 0; h < g.length; ++h) dh(g[h]) && ++d;
            return d
        }

        function fh(a, b, c, d) {
            var e = 1;
            if (a = ch(a))
                if (b = a.La[b])
                    for (b = Ua(b), a = 0; a < b.length; a++) {
                        var g = b[a];
                        g && g.capture == c && !g.removed && (e &= !1 !== gh(g, d))
                    }
            return Boolean(e)
        }

        function gh(a, b) {
            var c = a.he,
                d = a.Fh || a.src;
            a.qh && dh(a);
            return c.call(d, b)
        }

        function ah(a, b) {
            if (a.removed) return !0;
            if (!Jg) {
                var c = b || q("window.event"),
                    d = new Lg(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    t: {
                        var g = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break t
                        } catch (h) {
                            g = !0
                        }
                        if (g || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (g = d.currentTarget; g; g = g.parentNode) c.push(g);
                    for (var g = a.type, k = c.length - 1; !d.Hd && 0 <= k; k--) d.currentTarget = c[k],
                    e &= fh(c[k], g, !0, d);
                    for (k = 0; !d.Hd && k < c.length; k++) d.currentTarget = c[k],
                    e &= fh(c[k], g, !1, d)
                }
                return e
            }
            return gh(a, new Lg(b, this))
        }

        function ch(a) {
            return a[ka] ? Wg[ja(a)] || null : null
        }
        var hh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

        function Zg(a) {
            return ha(a) ? a : a[hh] || (a[hh] = function(b) {
                return a.handleEvent(b)
            })
        };

        function ih() {
            this.uc = new Rg(this);
            this.da = this
        }
        A(ih, kf);
        ih.prototype[Mg] = !0;
        f = ih.prototype;
        f.yh = null;
        f.Kj = function(a) {
            this.yh = a
        };
        f.addEventListener = function(a, b, c, d) {
            Yg(this, a, b, c, d)
        };
        f.removeEventListener = function(a, b, c, d) {
            bh(this, a, b, c, d)
        };

        function jh(a, b) {
            var c, d = a.yh;
            if (d) {
                c = [];
                for (var e = 1; d; d = d.yh) c.push(d), ++e
            }
            var d = a.da,
                e = b,
                g = e.type || e;
            if (u(e)) e = new Hg(e, d);
            else if (e instanceof Hg) e.target = e.target || d;
            else {
                var h = e,
                    e = new Hg(g, d);
                Gb(e, h)
            }
            var h = !0,
                k;
            if (c)
                for (var m = c.length - 1; !e.Hd && 0 <= m; m--) k = e.currentTarget = c[m], h = kh(k, g, !0, e) && h;
            e.Hd || (k = e.currentTarget = d, h = kh(k, g, !0, e) && h, e.Hd || (h = kh(k, g, !1, e) && h));
            if (c)
                for (m = 0; !e.Hd && m < c.length; m++) k = e.currentTarget = c[m], h = kh(k, g, !1, e) && h
        }
        f.I = function() {
            ih.G.I.call(this);
            this.uc && this.uc.removeAll(void 0);
            this.yh = null
        };
        f.listen = function(a, b, c, d) {
            return this.uc.add(a, b, !1, c, d)
        };
        f.yd = function(a, b, c, d) {
            return this.uc.remove(a, b, c, d)
        };

        function kh(a, b, c, d) {
            b = a.uc.La[b];
            if (!b) return !0;
            b = Ua(b);
            for (var e = !0, g = 0; g < b.length; ++g) {
                var h = b[g];
                if (h && !h.removed && h.capture == c) {
                    var k = h.he,
                        m = h.Fh || h.src;
                    h.qh && Tg(a.uc, h);
                    e = !1 !== k.call(m, d) && e
                }
            }
            return e && !1 != d.ln
        };

        function lh(a, b) {
            ih.call(this);
            this.a = a || 1;
            this.b = b || l;
            this.g = v(this.bq, this);
            this.i = y()
        }
        A(lh, ih);
        f = lh.prototype;
        f.ic = !1;
        f.Bb = null;

        function mh(a, b) {
            a.a = b;
            a.Bb && a.ic ? (a.stop(), a.start()) : a.Bb && a.stop()
        }
        f.bq = function() {
            if (this.ic) {
                var a = y() - this.i;
                0 < a && a < 0.8 * this.a ? this.Bb = this.b.setTimeout(this.g, this.a - a) : (this.Bb && (this.b.clearTimeout(this.Bb), this.Bb = null), jh(this, "tick"), this.ic && (this.Bb = this.b.setTimeout(this.g, this.a), this.i = y()))
            }
        };
        f.start = function() {
            this.ic = !0;
            this.Bb || (this.Bb = this.b.setTimeout(this.g, this.a), this.i = y())
        };
        f.stop = function() {
            this.ic = !1;
            this.Bb && (this.b.clearTimeout(this.Bb), this.Bb = null)
        };
        f.I = function() {
            lh.G.I.call(this);
            this.stop();
            delete this.b
        };

        function nh(a, b, c) {
            if (ha(a)) c && (a = v(a, c));
            else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
        };

        function oh() {
            this.a = []
        }

        function ph(a, b) {
            for (var c = [], d = 0; d < a.a.length; ++d) {
                var e = a.a[d];
                e.contains(b) && c.push(e);
                if (e.start > b) break
            }
            return c
        }

        function qh(a, b, c) {
            for (var d = [], e = 0; e < a.a.length; ++e) {
                var g = a.a[e];
                if (null != c && g.start > c) break;
                g.start > b && d.push(g)
            }
            return d
        }

        function rh(a, b) {
            for (var c = [], d = 0; d < a.a.length; ++d) {
                var e = a.a[d];
                e.contains(b) && c.push(e.end);
                if (e.start > b) {
                    c.push(e.start);
                    break
                }
            }
            c.sort(ab);
            return c[0]
        };
        var sh, th, uh, vh, wh;
        wh = vh = uh = th = sh = !1;
        var xh = Qb();
        xh && (-1 != xh.indexOf("Firefox") || -1 != xh.indexOf("Camino") || (-1 != xh.indexOf("iPhone") || -1 != xh.indexOf("iPod") ? sh = !0 : -1 != xh.indexOf("iPad") ? th = !0 : -1 != xh.indexOf("Chrome") ? vh = !0 : -1 != xh.indexOf("Android") ? uh = !0 : -1 != xh.indexOf("Safari") && (wh = !0)));
        var yh = sh,
            zh = th,
            Ah = uh,
            Bh = vh,
            Ch = wh;
        var Dh, Eh;
        var Fh = Qb(),
            Gh = Fh.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
        if (!Gh || 2 > Gh.length) Dh = void 0;
        else {
            var Hh = Fh.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d_\d)[_ ]/);
            Dh = Hh && 6 == Hh.length ? Number(Hh[5].replace("_", ".")) : 0
        }(Eh = 0 <= Dh) && 0 <= Qb().search("Safari") && Qb().search("Version");
        var Ih = yh || zh;

        function Jh() {
            return Kh("(ps3; leanback shell)")
        }

        function Kh(a) {
            var b = Qb();
            return b ? 0 <= b.toLowerCase().indexOf(a.toLowerCase()) : !1
        };

        function Lh() {}
        var Mh = Eh && 4 > Dh ? 0.1 : 0,
            Nh = new Lh;
        f = Lh.prototype;
        f.Kc = null;
        f.gj = !1;
        f.gd = 0;
        f.Pj = 0;

        function Oh(a, b) {
            var c = "";
            b && (a.Kc = b, c = Ph(b));
            a.src && "" == c || (c && a.src != c && (a.src = c), b && b.a || a.load())
        }

        function Qh(a, b) {
            0 < a.readyState && (a.currentTime = Math.max(Mh, b))
        }
        f.getType = function() {
            return this.type
        };
        f.Ae = function(a) {
            this.gd = a
        };
        f.getCurrentTime = function() {
            return this.Pj || this.currentTime
        };
        f.Tm = function() {
            this.Pj = this.currentTime
        };

        function yf(a) {
            var b = a.gd;
            if (Infinity == b) return 1;
            if (b && a.buffered && 0 < a.buffered.length) {
                var c = Rh(a);
                return a.buffered.end(c) / b
            }
            return 0
        }

        function Sh(a) {
            a.ended && Qh(a, 0);
            !a.hasAttribute("src") && a.Kc && (a.src = Ph(a.Kc), a.Kc.a || a.load());
            a.play()
        }

        function Th(a) {
            a.currentSrc && (Ih && Qh(a, 0), Hc(a), a.removeAttribute("src"), a.load(), a.Kc && a.Kc.a && (a.Kc = null))
        }

        function Uh(a) {
            Th(a);
            a.gd = 0;
            a.Pj = 0;
            a.Kc = null
        }

        function Vh(a, b) {
            a.defaultPlaybackRate = b;
            a.playbackRate = b
        }

        function Rh(a) {
            var b = a.buffered;
            a = a.getCurrentTime();
            for (var c = 0; c < b.length && !(b.start(c) > a); c++)
                if (a <= b.end(c)) return c;
            return 0
        }
        f.inUnbufferedArea = function() {
            var a = this.buffered;
            if (!a || !a.length) return !0;
            var b = Rh(this);
            if (0 < b) return !1;
            var c = this.getCurrentTime();
            return a.start(b) > c || a.end(b) < c
        };

        function Wh(a, b) {
            b ? a.setAttribute("crossorigin", "true") : a.removeAttribute("crossorigin")
        }
        f.yr = function() {
            this.hasAttribute("controls") && this.setAttribute("controls", "true")
        };
        f.zr = function() {
            this.gj && !this.muted && (this.muted = !0)
        };
        var Xh = [2, 5, 100, 101, 150],
            Yh = [202, 203];

        function Zh(a, b) {
            a = a || 64;
            a & 128 && !b || a & 2 && a & 16 || (this.b = a, this.a = b || null)
        }
        Zh.prototype.b = 64;
        Zh.prototype.a = null;

        function $h(a, b, c) {
            return b == a.b && c == a.a || b & 128 && !c || b & 2 && b & 16 ? a : new Zh(b, c)
        }

        function ai(a, b) {
            return $h(a, a.b | b)
        }

        function V(a, b) {
            return !!(a.b & b)
        }

        function bi(a) {
            return V(a, 128) ? -1 : V(a, 2) ? 0 : V(a, 1) && !V(a, 32) ? 3 : V(a, 64) ? -1 : V(a, 8) ? 1 : V(a, 4) ? 2 : -1
        }

        function ci() {
            var a;
            return a = 14
        };

        function W() {
            this.C = new Cg;
            R(this, this.C)
        }
        A(W, kf);
        W.prototype.D = function(a, b, c) {
            return this.W() ? 0 : this.C.D(a, b, c)
        };
        W.prototype.Q = function(a, b, c) {
            return this.W() ? !1 : this.C.Q(a, b, c)
        };
        W.prototype.xd = function(a) {
            return this.W() ? !1 : this.C.xd(a)
        };
        W.prototype.u = function(a, b) {
            return this.W() ? !1 : this.C.u.apply(this.C, arguments)
        };

        function di(a, b, c) {
            W.call(this);
            this.A = a;
            this.o = b;
            this.B = c;
            this.j = new lh(250);
            this.j.addEventListener("tick", this.vb, !1, this);
            R(this, this.j);
            this.i = [];
            this.a = [];
            this.b = new oh
        }
        A(di, W);
        f = di.prototype;
        f.Cg = !1;
        f.rf = !1;
        f.Ui = !1;
        f.Ti = !1;
        f.Af = null;
        f.es = function(a) {
            this.vb();
            B(arguments, function(a) {
                this.i.push(a);
                var c = this.b.a;
                !c.length || 0 < Eg(a, c[c.length - 1]) ? c.push(a) : eb(c, a, Eg);
                this.u("onAdd", a)
            }, this);
            this.vb()
        };
        f.gs = function(a) {
            B(arguments, function(a) {
                a = this.i.indexOf(a);
                0 <= a && ei(this, a)
            }, this);
            this.vb()
        };

        function ei(a, b) {
            var c = a.i.splice(b, 1)[0],
                d = a.b.a,
                e = Za(d, Eg || ab, c);
            0 <= e && Ra(d, e);
            b = a.a.indexOf(c);
            0 <= b && a.a.splice(b, 1);
            a.u("onRemove", c)
        }
        f.reset = function() {
            this.rf = this.Cg = !1;
            fi(this);
            for (var a = this.i.length - 1; 0 <= a; a--) ei(this, a);
            this.vb();
            this.k = null
        };

        function gi(a, b) {
            if (a.rf && !a.Cg)
                if (fi(a), V(b.state, 2)) {
                    a.k = null;
                    for (var c = [], d = 0; d < a.a.length; d++) {
                        var e = a.a[d];
                        e.active && 2147483647 > e.end && (c.push(e), a.a.splice(d--, 1))
                    }
                    d = ph(a.b, 2147483646);
                    d = d.concat(qh(a.b, 2147483646));
                    e = [];
                    if (c.length)
                        for (var g = 0; g < c.length; g++) e.push(["onExit", c[g]]);
                    c = e.concat(hi(a, d));
                    for (d = 0; d < c.length; d++) g = c[d], e = g[1], e.hc.u.apply(e.hc, g)
                } else V(b.state, 16) ? (a.g = ii(a), a.j.stop(), a.j.start(), a.vb()) : (a.j.stop(), V(b.a, 16) ? (a.g = ii(a), null != rh(a.b, Math.max(a.g - 2E3, 0)) && (a.Af =
                    nh(v(a.vb, a)))) : a.vb())
        }

        function hi(a, b) {
            var c = [];
            if (!b.length) return c;
            b.sort(Gg);
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                e.active && -1 == a.a.indexOf(e) && (a.a.push(e), c.push(["onEnter", e]))
            }
            return c
        }
        f.vb = function() {
            this.Ti = !0;
            if (!this.Ui)
                for (var a = 3; this.Ti && a;) {
                    this.Ti = !1;
                    this.Ui = !0;
                    if (this.rf && !this.Cg) {
                        fi(this);
                        for (var b = ii(this), c = [], d = 0; d < this.a.length; d++) {
                            var e = this.a[d];
                            e.active && !e.contains(b) && (c.push(["onExit", e]), this.a.splice(d--, 1))
                        }
                        d = ph(this.b, b);
                        e = this.o();
                        !V(e, 48) && b > this.g && (d = d.concat(qh(this.b, this.g, b)));
                        c = c.concat(hi(this, d));
                        this.g = b;
                        !this.Cg && this.k && (c.unshift(["onLockBlockExit", this.k]), this.k = null, V(e, 2) && (this.g = 2147483647));
                        this.B() && (b = rh(this.b, this.g), null != b &&
                            (this.Af = nh(v(this.vb, this), b - this.g)));
                        for (d = 0; d < c.length; d++) b = c[d], e = b[1], "onLockBlockExit" == b[0] || "onLockBlockEnter" == b[0] ? this.u.apply(this, b) : e.hc.u.apply(e.hc, b)
                    }
                    this.Ui = !1;
                    a--
                }
        };

        function fi(a) {
            null != a.Af && (l.clearTimeout(a.Af), a.Af = null)
        }

        function ii(a) {
            return V(a.o(), 2) ? 2147483647 : 1E3 * a.A()
        }
        f.I = function() {
            this.j.removeEventListener("tick", this.vb, !1, this);
            fi(this);
            this.k = this.b = this.a = this.i = null;
            di.G.I.call(this)
        };

        function ji(a, b) {
            for (var c = a.split(b), d = {}, e = 0, g = c.length; e < g; e++) {
                var h = c[e].split("=");
                if (1 == h.length && h[0] || 2 == h.length) {
                    var k = ra(h[0] || ""),
                        h = ra(h[1] || "");
                    k in d ? t(d[k]) ? Va(d[k], h) : d[k] = [d[k], h] : d[k] = h
                }
            }
            return d
        }

        function ki(a, b) {
            var c = [];
            wb(a, function(a, b) {
                var g = encodeURIComponent(String(b)),
                    h;
                h = t(a) ? a : [a];
                B(h, function(a) {
                    "" == a ? c.push(g) : c.push(g + "=" + encodeURIComponent(String(a)))
                })
            });
            return c.join(b)
        }

        function li(a) {
            "?" == a.charAt(0) && (a = a.substr(1));
            return ji(a, "&")
        }

        function mi(a) {
            return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), li(1 < a.length ? a[1] : a[0])) : {}
        }

        function ni(a) {
            a = Od([], a);
            a[0] = "";
            return a.join("")
        }

        function U(a, b) {
            return Md(Od([a], b))
        }
        var oi = Kd;

        function pi(a, b) {
            var c = a.split("#", 2);
            a = c[0];
            var c = 1 < c.length ? "#" + c[1] : "",
                d = a.split("?", 2);
            a = d[0];
            var d = li(d[1] || ""),
                e;
            for (e in b) d[e] = b[e];
            return U(a, d) + c
        }

        function qi(a) {
            a = oi(a);
            a = null === a ? null : a.split(".").reverse();
            return (null === a ? !1 : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? !0 : !1) || (null === a ? !1 : "google" == a[1] ? !0 : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? !0 : "uk" == a[0] && "co" == a[1] ? !0 : !1 : !1)
        };
        var ri = null;
        "undefined" != typeof XMLHttpRequest ? ri = function() {
            return new XMLHttpRequest
        } : "undefined" != typeof ActiveXObject && (ri = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });

        function si(a) {
            switch (a && "status" in a ? a.status : -1) {
                case 0:
                case 200:
                case 201:
                case 202:
                case 203:
                case 204:
                case 205:
                case 206:
                case 304:
                    return !0;
                default:
                    return !1
            }
        };

        function ti(a, b, c, d, e, g, h) {
            var k = ri && ri();
            if ("open" in k) {
                k.onreadystatechange = function() {
                    4 == (k && "readyState" in k ? k.readyState : 0) && b && Ie(b)(k)
                };
                c = (c || "GET").toUpperCase();
                d = d || "";
                k.open(c, a, !0);
                g && (k.responseType = g);
                h && (k.withCredentials = !0);
                g = "POST" == c;
                if (e = ui(a, e))
                    for (var m in e) k.setRequestHeader(m, e[m]), "content-type" == m.toLowerCase() && (g = !1);
                g && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                k.send(d);
                return k
            }
        }

        function ui(a, b) {
            b = b || {};
            var c;
            if (c = Ge("PAGE_CL"))
                if (c = Ge("PAGE_BUILD_TIMESTAMP")) {
                    var d;
                    d || (d = window.location.href);
                    c = Id(a)[1] || null;
                    var e = oi(a);
                    c && e ? (c = d, d = Id(a), c = Id(c), d = d[3] == c[3] && d[1] == c[1] && d[4] == c[4]) : d = e ? oi(d) == e && (Number(Id(d)[4] || null) || null) == (Number(Id(a)[4] || null) || null) : !0;
                    c = d || vi(a)
                }
            c && (b["X-YouTube-Page-CL"] = Ge("PAGE_CL"), b["X-YouTube-Page-Timestamp"] = Ge("PAGE_BUILD_TIMESTAMP"));
            return b
        }

        function vi(a) {
            var b = ["X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"],
                c = Ge("CORS_HEADER_WHITELIST") || {};
            a = oi(a);
            if (!a) return !0;
            var d = c[a];
            return d ? Ia(b, function(a) {
                return E(d, a)
            }) : !1
        }

        function wi(a, b) {
            var c = b.format || "JSON";
            b.gt && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
            var d = b.ht;
            d && (a = pi(a, d));
            var e = b.Vr || "";
            (d = b.zj) && u(e) && (e = li(e), Gb(e, d), e = ni(e));
            var g = !1,
                h, k = ti(a, function(a) {
                    if (!g) {
                        g = !0;
                        h && P(h);
                        var d = si(a),
                            e = null;
                        if (d || 400 <= a.status && 500 > a.status) e = xi(c, a);
                        if (d) t: {
                            switch (c) {
                                case "XML":
                                    d = 0 == parseInt(e && e.return_code, 10);
                                    break t;
                                case "RAW":
                                    d = !0;
                                    break t
                            }
                            d = !!e
                        }
                        var e = e || {},
                            k = b.Aa || l;
                        d ? b.oc && b.oc.call(k,
                            a, e) : b.onError && b.onError.call(k, a, e);
                        b.ze && b.ze.call(k, a, e)
                    }
                }, b.method, e, b.headers, b.responseType, b.withCredentials);
            b.Bm && 0 < b.timeout && (h = O(function() {
                g || (g = !0, k.abort(), P(h), b.Bm.call(b.Aa || l, k))
            }, b.timeout));
            return k
        }

        function xi(a, b) {
            var c = null;
            switch (a) {
                case "JSON":
                    var d = b.responseText,
                        e = b.getResponseHeader("Content-Type") || "";
                    d && 0 <= e.indexOf("json") && (c = gb(d));
                    break;
                case "XML":
                    if (d = (d = b.responseXML) ? yi(d) : null) c = {}, B(d.getElementsByTagName("*"), function(a) {
                        c[a.tagName] = zi(a)
                    })
            }
            return c
        }

        function yi(a) {
            return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
        }

        function zi(a) {
            var b = "";
            B(a.childNodes, function(a) {
                b += a.nodeValue
            });
            return b
        };

        function Ai(a) {
            a = a.split("");
            var b = a[0];
            a[0] = a[36 % a.length];
            a[36] = b;
            a = a.slice(3);
            a = a.reverse();
            a = a.slice(2);
            return a.join("")
        };

        function Bi() {
            this.lang = ""
        };

        function Ci(a, b, c, d, e, g) {
            this.Fa = a;
            this.i = 0 <= b.indexOf("/mp4") ? 1 : 0 <= b.indexOf("/webm") ? 2 : 0 <= b.indexOf("/x-flv") ? 3 : 0;
            this.Pa = b;
            this.b = g || 0;
            this.j = c || null;
            this.a = d || null;
            this.g = e || null
        }

        function Di(a) {
            return 2 == a.i
        }

        function Ei(a) {
            return 0 <= a.indexOf("opus") || 0 <= a.indexOf("vorbis") || 0 <= a.indexOf("mp4a")
        }

        function Fi(a) {
            return 0 <= a.indexOf("vp9") || 0 <= a.indexOf("vp8") || 0 <= a.indexOf("avc1")
        };
        var Gi = {
            Js: "auto",
            Dz: "tiny",
            Wy: "light",
            SMALL: "small",
            bz: "medium",
            LARGE: "large",
            Iy: "hd720",
            Hy: "hd1080",
            Ly: "highres",
            Iz: "unknown"
        };

        function Hi(a, b, c) {
            this.width = a;
            this.height = b;
            t: if (a || b) {
                for (var d = 1; d < Ii.length; d++) {
                    var e = Ii[d],
                        g = Ji[e];
                    if (a >= g[0] || b >= g[1]) {
                        a = e;
                        break t
                    }
                }
                a = "tiny"
            } else a = "auto";
            this.i = a;
            this.a = c || 0
        }
        var Ii = "auto highres hd1080 hd720 large medium small tiny".split(" "),
            Ji = {
                auto: [0, 0],
                tiny: [256, 144],
                light: [320, 240],
                small: [320, 240],
                medium: [640, 360],
                large: [854, 480],
                hd720: [1280, 720],
                hd1080: [1920, 1080],
                highres: [2048, 1536]
            };

        function Ki(a, b) {
            this.start = a;
            this.end = b;
            this.length = b - a + 1
        }

        function Li(a) {
            a = a.split("-");
            return 2 == a.length && (a = new Ki(parseInt(a[0], 10), parseInt(a[1], 10)), !isNaN(a.start) && !isNaN(a.end) && !isNaN(a.length) && 0 < a.length) ? a : null
        }
        Ki.prototype.toString = function() {
            return this.start + "-" + (null == this.end ? "" : this.end)
        };
        var Mi = "192.168.1.184 corp.google.com youtube.com youtube-nocookie.com prod.google.com sandbox.google.com docs.google.com drive.google.com mail.google.com play.google.com".split(" "),
            Ni = ["2mdn.net"],
            Oi = "192.168.1.184 www.google.com/aclk www.google.com/pagead/conversion googleadservices.com/aclk googleadservices.com/pagead/conversion googleads.g.doubleclick.net/aclk googleads.g.doubleclick.net/pagead/conversion".split(" ");

        function Pi(a) {
            return -1 != a.indexOf("/embed/")
        }

        function Qi(a, b) {
            return RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i").test(a)
        }

        function Ri(a) {
            a = new Ud(a);
            Vd(a, document.location.protocol);
            Wd(a, document.location.hostname);
            document.location.port && Xd(a, document.location.port);
            return a.toString()
        };

        function Si(a, b, c, d, e, g, h, k, m) {
            this.a = a;
            this.Z = b;
            this.type = c;
            this.i = 0 <= d ? d : -1;
            this.startTime = e || 0;
            this.duration = g || 0;
            this.wb = h || 0;
            this.Oa = 0 <= k ? k : this.Z.length;
            this.g = !!m;
            this.b = this.wb + this.Oa == this.Z.length;
            this.o = this.startTime + this.duration * this.wb / this.Z.length;
            this.j = this.duration * this.Oa / this.Z.length;
            this.k = this.o + this.j
        }

        function Ti(a) {
            return 1 == a.type || 2 == a.type
        }

        function Ui(a, b) {
            return a.a == b.a && a.Z.start + a.wb + a.Oa == b.Z.start + b.wb
        }
        Si.prototype.Gg = function(a) {
            return this.a.Gg(this, a)
        };

        function Vi(a, b) {
            this.info = a;
            this.data = b
        }

        function Wi(a) {
            if (a.info.Oa != a.data.length) return !1;
            if (1 == a.info.a.info.i) {
                if (8 > a.info.Oa || 4 == a.info.type) return !0;
                var b = new DataView(a.data.buffer, a.data.byteOffset, a.data.byteLength),
                    c = b.getUint32(0, !1),
                    b = b.getUint32(4, !1);
                if (2 == a.info.type) return c == a.info.Oa && 1936286840 == b;
                if (3 == a.info.type && 0 == a.info.wb) return 1836019558 == b
            }
            return !0
        };

        function Xi(a) {
            this.a = a;
            this.b = 0;
            this.g = -1
        }
        var Yi = 0;

        function Zi(a, b) {
            a.a = pi(a.a, b)
        };

        function $i() {
            this.M = 0;
            this.a = new Float64Array(128);
            this.b = new Float32Array(128);
            this.g = !1
        }
        $i.prototype.Xa = function() {
            return this.M
        };

        function aj(a, b) {
            var c = Za(a.b.subarray(0, a.M), ab, b);
            return 0 <= c ? c : Math.max(0, -c - 2)
        }

        function bj(a) {
            if (a.a.length < a.M + 1) {
                var b = 2 * a.a.length,
                    b = b + 2,
                    c = a.a;
                a.a = new Float64Array(b + 1);
                var d = a.b;
                a.b = new Float32Array(b + 1);
                for (b = 0; b < a.M + 1; b++) a.a[b] = c[b], a.b[b] = d[b]
            }
        }

        function cj(a, b) {
            this.b = a;
            this.a = 0;
            this.g = b || 0
        }

        function dj(a) {
            for (var b = ej(a, !1); 236 == b;) fj(a), b = ej(a, !1);
            return b
        }

        function gj(a) {
            var b = ej(a, !0),
                c = a.b.byteOffset + a.a,
                d = Math.min(b, a.b.buffer.byteLength - c),
                c = new DataView(a.b.buffer, c, d),
                c = new cj(c, a.g + a.a);
            a.a += b;
            return c
        }

        function hj(a) {
            for (var b = ej(a, !0), c = ij(a), d = 1; d < b; d++) c = (c << 8) + ij(a);
            return c
        }

        function fj(a) {
            var b = ej(a, !0);
            a.a += b
        }

        function ej(a, b) {
            var c = ij(a);
            if (1 == c) {
                for (var d = c = 0; 7 > d; d++) c = 256 * c + ij(a);
                return c
            }
            for (var e = 128, d = 0; 6 > d && e > c; d++) c = 256 * c + ij(a), e *= 128;
            return b ? c - e : c
        }

        function ij(a) {
            return a.b.getUint8(a.a++)
        };

        function jj(a, b, c, d) {
            this.info = b;
            this.j = new Xi(a);
            this.o = c;
            this.k = d;
            this.g = this.b = null;
            this.i = !1;
            this.index = new $i;
            b = parseInt;
            c = a.search(Rd);
            d = Qd(a, 0, "clen", c);
            if (0 > d) a = null;
            else {
                var e = a.indexOf("&", d);
                if (0 > e || e > c) e = c;
                d += 5;
                a = ra(a.substr(d, e - d))
            }
            this.a = b(a, 10)
        }

        function kj(a) {
            return !(!a.b || !a.index.Xa())
        }

        function lj(a, b) {
            var c = new Si(a, a.o, 1),
                d = new Si(a, a.k, 2),
                e = [],
                g = [c];
            Ui(c, d) ? g.push(d) : e.push([d]);
            isNaN(a.a) ? b = 0 : b > a.a && (b = a.a);
            c = g[g.length - 1];
            d = c.Z.end - g[0].Z.start + 1;
            b > d && (c = new Ki(c.Z.end + 1, c.Z.end + 1 + (b - d) - 1), g.push(new Si(a, c, 4)));
            e.push(g);
            return e
        }

        function mj(a, b, c, d) {
            for (var e = []; b < a.index.Xa(); b++) {
                var g;
                g = a.index.a[b];
                g = new Ki(g, g + (b + 1 < a.index.M || a.index.g ? a.index.a[b + 1] - a.index.a[b] : -1) - 1);
                var h = a.index.b[b],
                    k;
                k = a.index;
                var m = b;
                k = m + 1 < k.M || k.g ? k.b[m + 1] - k.b[m] : -1;
                var m = Math.max(0, c - g.start),
                    p = Math.min(g.end + 1, c + d) - (g.start + m),
                    r = b == a.index.Xa() - 1 && m + p == g.length;
                e.push(new Si(a, g, 3, b, h, k, m, p, r));
                if (g.start + m + p >= c + d) break
            }
            return e
        }

        function nj(a, b) {
            for (var c = 0; c + 1 < a.index.Xa() && b.Z.start >= a.index.a[c + 1];) c++;
            return mj(a, c, b.Z.start, b.Z.length)
        }
        jj.prototype.Gg = function(a, b) {
            kj(this);
            if (!kj(this)) {
                var c = new Ki(a.Z.end + 1, a.Z.end + 1 + b - 1);
                c.end + 1 > this.a && (c = new Ki(c.start, this.a - 1));
                return [new Si(a.a, c, 4)]
            }
            4 == a.type && (c = nj(this, a), a = c[c.length - 1]);
            var c = 0,
                d = a.Z.start + a.wb + a.Oa;
            3 == a.type && (c = a.i, d == a.Z.end + 1 && (c += 1));
            return mj(this, c, d, b)
        };

        function oj(a, b, c) {
            b = aj(a.index, b);
            return mj(a, b, a.index.a[b], c)
        };

        function pj() {
            this.duration = 0;
            this.a = {}
        }
        var qj = /PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/;

        function rj(a) {
            var b = new pj;
            B(a, function(a) {
                var d = a.type,
                    e = a.itag,
                    g = null;
                Fi(d) && (g = a.size.split("x"), g = new Hi(parseInt(g[0], 10), parseInt(g[1], 10)));
                var h = null;
                Ei(d) && (h = new Bi);
                d = new Ci(e, d, h, g, null, parseInt(a.bitrate, 10) / 8);
                g = Li(a.init);
                h = Li(a.index);
                (a = sj(a.url, d, a.s)) && (b.a[e] = new jj(a, d, g, h))
            });
            return b
        }

        function tj(a, b) {
            for (var c = a; c; c = c.parentNode)
                if (c.attributes) {
                    var d = c.attributes[b];
                    if (d) return d.value
                }
            return ""
        }

        function uj(a, b) {
            for (var c = a; c; c = c.parentNode) {
                var d = c.getElementsByTagName(b);
                if (0 < d.length) return d[0]
            }
            return null
        }

        function sj(a, b, c) {
            if (!Qi(a, Mi)) return "";
            b = {
                alr: "yes",
                mime: b.Pa.split(";")[0]
            };
            c && (b.signature = Ai(c));
            return pi(a, b)
        };
        var vj = {
            Xy: 1,
            Yy: 2,
            Zy: 3
        };
        var wj;
        var xj = Qb(),
            xj = xj.toLowerCase();
        if (-1 != xj.indexOf("android")) {
            var yj = xj.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
            if (yj) wj = Number(yj[1]);
            else {
                var zj = {
                        cupcake: 1.5,
                        donut: 1.6,
                        eclair: 2,
                        froyo: 2.2,
                        gingerbread: 2.3,
                        honeycomb: 3,
                        "ice cream sandwich": 4,
                        jellybean: 4.1
                    },
                    Aj = xj.match("(" + zb(zj).join("|") + ")");
                wj = Aj ? zj[Aj[0]] : 0
            }
        } else wj = void 0;
        var Bj, Cj;

        function Dj() {
            var a = q("yt.player.utils.videoElement_");
            a || (a = document.createElement("video"), z("yt.player.utils.videoElement_", a));
            return a
        }

        function Ej() {
            if (2.2 == wj) return !0;
            var a = Dj();
            try {
                return !(!a || !a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
            } catch (b) {
                return !1
            }
        };

        function Fj() {
            var a;
            if (void 0 == Bj && (Bj = !1, window.crypto && window.crypto.Ts)) try {
                a = new Uint8Array(1), window.crypto.Ts(a), Bj = !0
            } catch (b) {}
            if (Bj) {
                a = Array(16);
                var c = new Uint8Array(16);
                window.crypto.getRandomValues(c);
                for (var d = 0; d < a.length; d++) a[d] = c[d]
            } else
                for (a = Array(16), c = 0; 16 > c; c++) {
                    for (var d = y(), e = 0; e < d % 23; e++) a[c] = Math.random();
                    a[c] = Math.floor(256 * Math.random())
                }
            c = [];
            for (d = 0; d < a.length; d++) c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_" [a[d] & 63]);
            return c.join("")
        };

        function Gj(a, b, c) {
            b = {
                cpn: b
            };
            c && (b.ibw = "1369843");
            return {
                url: U(a, b),
                type: "application/x-mpegURL",
                quality: "auto",
                itag: "93"
            }
        };

        function X(a, b) {
            return void 0 == b ? a : "1" == b ? !0 : !1
        }

        function Hj(a, b, c) {
            for (var d in c)
                if (c[d] == b) return c[d];
            return a
        }

        function Y(a, b) {
            return void 0 == b ? a : b
        }

        function Ij(a, b) {
            var c = Y(a, b);
            c && (c = Ri(c));
            return c
        }

        function Jj(a) {
            if (!a) return 0;
            a = a.split(":");
            var b = parseFloat(a[0]),
                c = 1;
            2 == a.length && (c = parseFloat(a[1]));
            return isNaN(b) || isNaN(c) || 0 == c ? 0 : b / c
        };

        function Kj(a, b, c) {
            this.b = a;
            this.a = b;
            this.g = c
        }
        var Lj = {
                playready: ["com.youtube.playready"],
                widevine: ["com.widevine.alpha"],
                clearkey: ["org.w3.clearkey", "webkit-org.w3.clearkey"]
            },
            Mj = ["widevine", "playready"];

        function Nj(a, b, c) {
            if (!a.addKey && !a.webkitAddKey) return null;
            for (var d = 0; d < Mj.length; d++) {
                var e = Mj[d];
                if (c[e])
                    for (var g = Lj[e], h = 0; h < g.length; h++) {
                        var k = g[h];
                        if (a.canPlayType(b, k)) return new Kj(e, k, c[e])
                    }
            }
            return null
        };

        function Oj(a, b) {
            this.a = a;
            this.b = b;
            this.i = 0;
            Object.defineProperty(this, "timestampOffset", {
                get: this.Hq,
                set: this.Iq
            });
            Object.defineProperty(this, "buffered", {
                get: this.Gq
            })
        }
        f = Oj.prototype;
        f.append = function(a) {
            this.a.webkitSourceAppend(this.b, a)
        };
        f.abort = function() {
            this.a.webkitSourceAbort(this.b)
        };
        f.Gq = function() {
            return this.a.webkitSourceState == this.a.SOURCE_CLOSED ? new Pj : this.a.webkitSourceBuffered(this.b)
        };
        f.Hq = function() {
            return this.i
        };
        f.Iq = function(a) {
            this.i = a;
            this.a.webkitSourceTimestampOffset(this.b, a)
        };

        function Pj() {
            this.length = 0
        };

        function Qj(a) {
            this.activeSourceBuffers = this.sourceBuffers = [];
            this.a = a;
            this.b = NaN;
            this.g = 0;
            Object.defineProperty(this, "duration", {
                get: this.Cq,
                set: this.Fq
            });
            Object.defineProperty(this, "readyState", {
                get: this.Dq
            });
            this.a.addEventListener("webkitsourceclose", v(this.Eq, this), !0)
        }

        function Rj(a) {
            return window.MediaSource ? new window.MediaSource : window.WebKitMediaSource ? new window.WebKitMediaSource : HTMLMediaElement.prototype.webkitSourceAddId ? new Qj(a) : null
        }
        f = Qj.prototype;
        f.addEventListener = function(a, b, c) {
            this.a.addEventListener(a, b, c)
        };
        f.ll = function() {
            return this.a.webkitMediaSourceURL
        };
        f.addSourceBuffer = function(a) {
            var b = (this.g++).toString();
            this.a.webkitSourceAddId(b, a);
            a = new Oj(this.a, b);
            this.sourceBuffers.push(a);
            return a
        };
        f.removeSourceBuffer = function(a) {
            for (var b in this.sourceBuffers)
                if (a === this.sourceBuffers[b]) {
                    this.a.webkitSourceRemoveId(a.b);
                    for (a = b + 1; a < this.sourceBuffers.length; a++) this.sourceBuffers[a - 1] = this.sourceBuffers[a];
                    this.sourceBuffers.pop();
                    break
                }
        };
        f.Dq = function() {
            switch (this.a.webkitSourceState) {
                case this.a.SOURCE_CLOSED:
                    return "closed";
                case this.a.SOURCE_OPEN:
                    return "open";
                case this.a.SOURCE_ENDED:
                    return "ended"
            }
            return ""
        };
        f.endOfStream = function(a) {
            var b = this.a.EOS_NO_ERROR;
            "network" == a ? b = this.a.EOS_NETWORK_ERR : "decode" == a && (b = this.a.EOS_DECODE_ERR);
            this.a.webkitSourceEndOfStream(b)
        };
        f.Eq = function() {
            Oa(this.sourceBuffers)
        };
        f.Cq = function() {
            return this.b
        };
        f.Fq = function(a) {
            this.b = a;
            this.a.webkitSourceSetDuration && this.a.webkitSourceSetDuration(a)
        };

        function Sj() {
            this.a = []
        }
        Sj.prototype.listen = function(a, b, c) {
            if (t(b))
                for (var d = 0; d < b.length; d++) this.listen(a, b[d], c);
            else c = v(c, this), a.addEventListener(b, c, !1), this.a.push(a, b, c)
        };
        Sj.prototype.removeAll = function() {
            if (this.a)
                for (; this.a.length;) {
                    var a = this.a.shift(),
                        b = this.a.shift(),
                        c = this.a.shift();
                    a.removeEventListener && a.removeEventListener(b, c)
                }
        };
        Sj.prototype.W = function() {
            return null === this.a
        };
        Sj.prototype.dispose = function() {
            this.removeAll();
            this.a = null
        };

        function Tj(a, b, c, d) {
            this.a = [];
            this.Fe = this.Mc = null;
            this.i = b;
            this.g = Rj(a);
            this.b = "";
            this.j = null;
            this.listen(this.g, ["sourceopen", "webkitsourceopen"], oa(this.Op, d, c));
            this.listen(this.g, ["sourceclose", "webkitsourceclose"], this.Np)
        }
        A(Tj, Sj);
        var Uj = {};
        f = Tj.prototype;
        f.Ae = function(a) {
            this.isOpen() ? this.g.duration = a : this.i = a
        };
        f.isOpen = function() {
            return "open" == this.g.readyState
        };
        f.Lb = function() {
            return "closed" == this.g.readyState
        };
        f.Op = function(a, b) {
            isNaN(this.i) || (this.g.duration = this.i, this.i = NaN, this.Mc = this.g.addSourceBuffer(a), this.Fe = this.g.addSourceBuffer(b), this.j && (this.j(this), this.j = null))
        };
        f.Np = function() {
            this.dispose()
        };
        f.dispose = function() {
            Vj(this.b);
            this.b = "";
            Tj.G.dispose.call(this)
        };

        function Vj(a) {
            if (a) try {
                window.URL.revokeObjectURL(a)
            } catch (b) {}
        }

        function Wj(a, b) {
            var c = {};
            if (window.MediaSource && window.MediaSource.isTypeSupported) C(a, function(a) {
                c[a] = window.MediaSource.isTypeSupported(a)
            }), O(oa(b, c), 0);
            else {
                for (var d = !1, e = 0; e < a.length; e++) {
                    var g = Uj[a[e]];
                    if (void 0 != g) c[a[e]] = g;
                    else {
                        d = !0;
                        break
                    }
                }
                if (d) {
                    var d = Dj(),
                        e = Rj(d),
                        g = e.ll ? e.a.webkitMediaSourceURL : window.URL.createObjectURL(e),
                        h = oa(Xj, a, b, d, e, g);
                    e.addEventListener("sourceopen", h, !1);
                    e.addEventListener("webkitsourceopen", h, !1);
                    d.src = g
                } else O(oa(b, c), 0)
            }
        }

        function Xj(a, b, c, d, e) {
            for (var g = {}, h = 0; h < a.length; h++) {
                var k = Uj[a[h]];
                if (void 0 == k) {
                    try {
                        var m = d.addSourceBuffer(a[h]);
                        d.removeSourceBuffer(m);
                        k = !0
                    } catch (p) {
                        p.code == DOMException.NOT_SUPPORTED_ERR && (k = !1)
                    }
                    Uj[a[h]] = k
                }
                g[a[h]] = k
            }
            c.src = "";
            Vj(e);
            b(g)
        };

        function Yj(a, b, c, d) {
            this.a = c;
            this.b = a;
            this.j = d || "";
            this.i = b;
            this.g = {}
        }

        function Ph(a) {
            if (a.a) a = a.b;
            else if (a.i) {
                var b;
                b = (new Ud(a.b)).a.get("id");
                b = "http://192.168.1.184/api/manifest/t2b/source/youtube/id/" + encodeURIComponent(b);
                b += "/itag/" + a.j;
                b += "/mfmt/amf";
                a = Zd(new Ud(U(a.b, a.g)), b).toString()
            } else a = U(a.b, a.g);
            return a
        };

        function Zj(a, b) {
            var c = b.Fa in ak && Jh();
            this.i = (this.a = !!(a instanceof Array)) ? null : new Yj(a, c, this.a, b.Fa);
            this.b = this.a ? a[0] : null;
            this.g = this.a ? a[1] : null;
            this.cc = b
        }
        Zj.prototype.getInfo = function() {
            return this.cc
        };
        var bk = {
                'video/mp4; codecs="avc1.42001E, mp4a.40.2"': "maybe"
            },
            ck = {
                "application/x-mpegURL": "maybe"
            },
            dk = {
                "application/x-mpegURL": "maybe"
            };

        function ek(a, b, c) {
            if (!Ej()) return [];
            var d = fk(a, b);
            a = !d.length && b ? fk(a, !1) : d;
            var e = {};
            b = Dj();
            c = c || (Ah || Bh && Kh("crkey") ? !0 : !1);
            for (d = 0; d < a.length; d++) {
                var g = a[d];
                if ((b.canPlayType(g.getInfo().Pa) || gk(g)) && !(g.cc.Fa in hk || Jh() && "5" == g.cc.Fa)) {
                    var h = g.cc.a.i;
                    if (!e[h] || Di(g.getInfo()) && !c || !Di(g.getInfo()) && c) e[h] = g
                }
            }
            var k = [];
            B(Ii, function(a) {
                (g = e[a]) && k.push(g)
            });
            return k
        }

        function gk(a) {
            var b;
            a = a.getInfo().Pa;
            zh ? b = dk[a] : 2.2 == wj ? b = bk[a] : Ah && Kh("chrome") && (b = ck[a]);
            return b || ""
        }
        var ak = {
                5: !0,
                34: !0,
                35: !0
            },
            hk = {
                52: !0,
                53: !0,
                54: !0,
                55: !0,
                60: !0,
                79: !0,
                87: !0
            },
            ik = {
                Cy: 160,
                yy: 133,
                Ay: 134,
                sy: 135,
                oy: 136,
                ky: 137,
                ty: 138,
                iy: 140,
                zy: 142,
                By: 143,
                vy: 144,
                xy: 222,
                wy: 223,
                py: 145,
                ry: 224,
                qy: 225,
                ly: 146,
                ny: 226,
                my: 227,
                uy: 147,
                jy: 149,
                hy: 261,
                Ey: 161,
                Qz: 171,
                Pz: 172,
                Xz: 194,
                Uz: 195,
                Wz: 220,
                Vz: 221,
                Tz: 196,
                Sz: 197,
                Rz: 198,
                cA: 242,
                dA: 243,
                $z: 244,
                bA: 245,
                aA: 246,
                Zz: 247,
                Yz: 248
            };

        function jk(a) {
            var b = [];
            B(a, function(a) {
                a.url && b.push(kk(a.url, a.type, "auto", "0"))
            });
            return b
        }

        function kk(a, b, c, d, e) {
            var g = new Bi;
            (c = Ji[c]) || (c = Ji.small);
            e = new Hi(c[0], c[1], e ? -1 : 0);
            b = unescape(b.replace(/&quot;/g, '"'));
            return new Zj(a, new Ci(d, b, g, e))
        }

        function fk(a, b) {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d],
                    g;
                if (g = Vb)
                    if (g = 0 != e.cc.a.a) g = 1 == e.getInfo().i;
                g || 0 != e.cc.a.a == b && c.push(e)
            }
            return c
        }

        function lk(a, b, c) {
            for (var d = [], e = 0; e < a.length; e++) {
                var g = a[e];
                if (g.sig || g.s) {
                    var h = g.sig || Ai(g.s);
                    g.url = pi(g.url, {
                        signature: h
                    })
                }
                g.url && d.push(kk(g.url, g.type, g.quality, g.itag, g.stereo3d))
            }
            return ek(d, !!b, !!c)
        }

        function mk(a, b) {
            var c = jk(a);
            return ek(c, !1, !!b)
        }

        function nk(a, b, c, d, e, g) {
            if (a) {
                var h = [];
                if (g) {
                    g = {};
                    for (var k in a.a) h = a.a[k].info.Pa, g[h] = window.MediaSource && window.MediaSource.isTypeSupported ? window.MediaSource.isTypeSupported(h) : !!Dj().canPlayType(h);
                    ok(a, b, c, d, e, g)
                } else {
                    for (k in a.a) h.push(a.a[k].info.Pa);
                    Wj(h, v(ok, null, a, b, c, d, e))
                }
            } else c([])
        }

        function ok(a, b, c, d, e, g) {
            var h = null,
                k = {},
                m = {},
                p;
            for (p in ik) {
                var r = ik[p],
                    n = a.a[r];
                if (n && g[n.info.Pa] && !(0 <= n.info.Pa.indexOf("vp9") && Kh("cros armv7"))) {
                    if (n.info.g) {
                        h || (h = Dj());
                        if (!Nj(h, n.info.Pa, n.info.g)) continue;
                        if (!e && n.info.a && (1280 <= n.info.a.width || 720 <= n.info.a.height)) continue;
                        if (261 == r && !h.canPlayType('audio/mp4; codecs="aac51"', "com.widevine.alpha")) continue
                    }
                    if (r = 0 < n.info.Pa.indexOf("/webm") ? n.info.g ? 3 : 1 : 0 < n.info.Pa.indexOf("/mp4") ? n.info.g ? 4 : 2 : null) {
                        Zi(n.j, b);
                        var w = n.info.j ? k : m;
                        w[r] = w[r] || [];
                        w[r].push(n)
                    }
                }
            }
            a = [3, 4, 1, 2];
            d && (a = [4, 3, 2, 1]);
            d = null;
            for (p = 0; p < a.length; p++)
                if (k[a[p]] && m[a[p]]) {
                    d = a[p];
                    break
                }
            a = [];
            if (null != d)
                for (bb(k[d], "itag"), k = k[d].pop(), p = 0; p < m[d].length; p++) a.push(new Zj([k, m[d][p]], m[d][p].info));
            $a(a, function(a, b) {
                var c = a.getInfo(),
                    d = b.getInfo();
                return d.a.height - c.a.height || d.b - c.b
            });
            c(a)
        };

        function Df(a) {
            W.call(this);
            this.B = [];
            this.ka = new G(0, 0);
            this.U = [];
            this.L = [];
            this.k = {};
            this.ya = {};
            this.g = {};
            pk(this, a)
        }
        A(Df, W);
        var qk = "author cc_asr cc_load_policy iv_new_window iv_load_policy keywords subscribed rvs title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_price_string ypc_preview ypc_video_rental_bar_text".split(" ");
        f = Df.prototype;
        f.Y = !1;
        f.pq = !0;
        f.Sa = !1;
        f.mj = "";
        f.lj = "";
        f.kj = "";
        f.Rh = !1;
        f.ug = 1;
        f.fl = !1;
        f.Ek = 0;
        f.Id = 0;
        f.Fm = !1;
        f.oj = !1;
        f.Jk = 3;
        f.ih = "";
        f.wa = "";
        f.Xi = !1;
        f.ff = !1;
        f.bk = !1;
        f.se = 0;
        f.ce = !1;
        f.Ik = !1;
        f.af = 0;
        f.ne = !1;
        f.ck = !0;
        f.Nh = !1;
        f.Yl = !1;
        f.Eb = !1;
        f.cj = !1;
        f.Yc = !1;
        f.Ol = !1;
        f.dj = !1;
        f.Ci = 0;
        f.Ga = 0;
        f.mg = 0;
        f.aj = !1;
        f.lk = !1;
        f.Jh = !1;
        f.Kk = 0;
        f.gf = !1;
        f.Gk = !1;
        f.ma = 0;
        f.pe = null;
        f.rq = !1;
        f.re = null;
        f.Di = 1;
        f.Nd = 0;
        f.dk = !1;
        f.Nk = NaN;
        f.qq = NaN;

        function Tf(a, b) {
            var c = b || {};
            c.iv_read_url && (a.mj = Ri(c.iv_read_url));
            c.iv_invideo_url && (a.lj = Ri(c.iv_invideo_url));
            c.iv_cta_url && (a.kj = Ri(c.iv_cta_url));
            a.author = Y(a.author, c.author);
            a.oj = X(a.oj, c.cc_asr);
            a.ih = Ij(a.ih, c.ttsurl);
            a.wa = Y(a.wa, c.cpn);
            a.i = Y(a.i, c.subscribed);
            a.title = Y(a.title, c.title);
            a.$b = Y(a.$b, c.ypc_preview);
            a.aj = X(a.aj, c.paygated);
            c.keywords && (a.ya = rk(c.keywords));
            c.rvs && (a.Zc = sk(c.rvs));
            B(qk, function(a) {
                a in c && (this.k[a] = c[a])
            }, a)
        }

        function pk(a, b) {
            var c = b || {};
            a.Sa = "1" != c.hlsdvr || Ch || zh && 5 > Dh ? !1 : !0;
            a.Rh = "1" == c.infringe || "1" == c.muted;
            a.Vl = c.authkey;
            a.Cc = c.authuser;
            a.wa || (a.wa = c.cpn || Fj());
            a.Ac = c.csi_page_type;
            a.Ia = c.sw;
            a.nb = X(a.nb, c.dto);
            a.Vb = c.t;
            a.Xi = X(a.Xi, c.cenchd);
            a.ff = "1" == c.enable_cardio;
            a.bk = "1" == c.enable_cardio_before_playback;
            a.se = void 0 == (c.end || c.endSeconds) ? a.se : Number(c.end || c.endSeconds);
            a.ck = "1" != c.no_get_video_log;
            a.Nh = "1" == c.tmi;
            a.Yl = "1" == c.livemonitor;
            a.Eb = "1" == c.live_playback;
            a.cj = X(a.cj, c.mdx);
            a.dj = X(a.dj,
                c.utpsa);
            a.bm = c.iurlmaxres;
            a.H = Y(a.H, c.oauth_token);
            a.ea = Y(a.ea, c.vvt);
            a.zc = c.osig;
            a.Qb = c.ptchn;
            a.Sb = c.oid;
            a.J = c.ptk;
            a.Ub = c.pltype;
            a.j = c.plid;
            a.o = c.eventid;
            a.b = Y(a.b, c.list);
            a.Yb = c.pyv_beacon_url;
            a.dd = c.purchase_id;
            a.cb = c.sdetail;
            a.Xc = c.sourceid;
            a.ha = Y(a.ha, c.feature);
            a.Zb = 1 == (void 0 == c.is_fling ? a.Zb ? 1 : 0 : Number(c.is_fling));
            a.oa = Y(a.oa, c.ytr);
            a.dm = c.iurlsd;
            a.dk = "1" == c.skip_kansas_logging;
            a.pe = Hj(a.pe, c.vq || c.suggestedQuality, Gi);
            a.$c = c.approx_threed_layout || 0;
            a.rq = "1" == c.threed_converted;
            a.bh = c.iurl;
            a.Jh = "1" == c.sendtmp;
            a.gf = !!a.Ia || a.Jh;
            a.ma = void 0 == (c.start || c.startSeconds) ? a.ma : Number(c.start || c.startSeconds);
            a.K = c.docid || c.video_id || c.videoId;
            tk(a, c.watermark);
            a.yc = Y(a.yc, c.ypc_gid);
            a.xc = Y(a.xc, c.ypc_license_session_token);
            if (c.ad3_module || c.ad_module) "1" == c.allow_html5_ads ? (a.Y = !0, "1" == c.ad_preroll && a.L.push("ad")) : "1" == c.supported_without_ads || c.cta && c.fexp && (-1 != c.fexp.indexOf("924604") || -1 != c.fexp.indexOf("924610")) || (a.Ik = !0);
            c.adaptive_fmts && (a.pb = uk(a, c.adaptive_fmts));
            c.allow_embed &&
                (a.pq = "1" == c.allow_embed);
            c.autoplay && (a.ne = "1" == c.autoplay);
            c.iv_load_policy && (a.ja = vk(c.iv_load_policy, a.ja));
            c.cc_load_policy && (a.Jk = vk(c.cc_load_policy, 2));
            c.dash && void 0 === a.fa && (a.fa = "1" == c.dash);
            if (c.dashmpd) {
                a.T = U(c.dashmpd, {
                    cpn: a.wa
                });
                var d = /\/s\/([0-9A-F.]+)/,
                    e = d.exec(a.T);
                e && (e = Ai(e[1]), a.T = a.T.replace(d, "/signature/" + e))
            }
            c.delay && (a.O = Aa(c.delay));
            c.idpj && (a.af = Aa(c.idpj));
            c.url_encoded_fmt_stream_map && (a.U = uk(a, c.url_encoded_fmt_stream_map));
            c.hlsvp && (d = Gj(c.hlsvp, a.wa, c.fexp && -1 != c.fexp.indexOf("934005") &&
                !c.on3g), a.U.push(d));
            c.length_seconds && (a.Ga = Aa(c.length_seconds));
            c.ldpj && (a.mg = Aa(c.ldpj));
            c.loudness && (a.Da = c.loudness, a.ug = -15 < a.Da && 0 > a.Da ? Math.pow(10, (-18 - a.Da) / 20) : 1);
            c.partnerid && (a.Bc = Aa(c.partnerid));
            c.pyv_billable_url && Qi(c.pyv_billable_url, Oi) && (a.da = c.pyv_billable_url);
            c.pyv_conv_url && Qi(c.pyv_conv_url, Oi) && (a.Ca = c.pyv_conv_url);
            c.url_encoded_third_party_media && (a.re = sk(c.url_encoded_third_party_media));
            c.threed_module && !c.threed_converted && (a.Tb = c.threed_module, a.Wb = 6);
            if ("1" == c.track_embed ||
                c.tk) a.lk = !0;
            c.watch_ajax_token && He("watch_actions_ajax", c.watch_ajax_token);
            c.fresca_preroll && a.L.push("fresca");
            c.ypc_clickwrap_preroll && a.L.push("ypc_clickwrap");
            void 0 != c.start && (a.Nk = c.start);
            void 0 != c.end && (a.qq = c.end);
            a.Rb = Y(a.Rb, c.ucid);
            B(["baseUrl", "uid", "oeid", "ieid", "ppe"], function(a) {
                this.g[a] = c[a]
            }, a);
            a.g.focEnabled = "1" == c.focEnabled;
            a.g.rmktEnabled = "1" == c.rmktEnabled;
            a.Ek = wk(c.rmktPingThreshold, c.length_seconds);
            a.k = c;
            Tf(a, c);
            a.fa && xk(a)
        }

        function xk(a) {
            if (Ah && Kh("chrome") && !I(29) ? 0 : window.MediaSource || window.WebKitMediaSource || HTMLMediaElement.prototype.webkitSourceAddId)
                if (a.pb) a.F = rj(a.pb);
                else if (a.T) {
                var b = {
                    format: "RAW",
                    method: "GET",
                    Aa: a,
                    oc: a.cs,
                    onError: a.yj
                };
                a.ce = !0;
                a = Ri(a.T);
                wi(a, b)
            }
        }
        f.cs = function(a) {
            if (!this.W()) {
                if (200 <= a.status && 400 > a.status) {
                    var b = new pj;
                    t: {
                        a = a.responseText;a = (new DOMParser).parseFromString(a, "text/xml").getElementsByTagName("MPD")[0];
                        var c;
                        if (c = tj(a, "mediaPresentationDuration")) {
                            var d = qj.exec(c);
                            c = d ? 3600 * parseFloat(d[2] || 0) + 60 * parseFloat(d[4] || 0) + parseFloat(d[6] || 0) : parseFloat(c)
                        } else c = 0;b.duration = c;a = a.getElementsByTagName("Representation");
                        for (c = 0; c < a.length; c++) {
                            var d = a[c],
                                e = tj(d, "id"),
                                g = tj(d, "mimeType"),
                                h = tj(d, "codecs"),
                                g = h ? g + '; codecs="' + h + '"' : g,
                                h =
                                parseInt(tj(d, "bandwidth"), 10) / 8,
                                k = null;
                            Fi(g) && (k = new Hi(parseInt(tj(d, "width"), 10), parseInt(tj(d, "height"), 10)));
                            var m = null;
                            Ei(g) && (m = new Bi);
                            var p = null,
                                r = uj(d, "ContentProtection");
                            if (r)
                                if ((p = r.attributes.schemeIdUri) && "http://192.168.1.184/drm/2012/10/10" == p.textContent)
                                    for (p = {}, r = r.firstChild; null != r; r = r.nextSibling) "yt:SystemURL" == r.nodeName && (p[r.attributes.type.textContent] = r.textContent.trim());
                                else p = null;
                            e = new Ci(e, g, m, k, p, h);
                            g = sj(uj(d, "BaseURL").textContent, e);
                            h = uj(d, "SegmentBase");
                            d = Li(h.attributes.indexRange.value);
                            h = Li(h.getElementsByTagName("Initialization")[0].attributes.range.value);
                            d = new jj(g, e, h, d);
                            if (!d) {
                                a = !1;
                                break t
                            }
                            b.a[d.info.Fa] = d
                        }
                        a = !0
                    }
                    if (this.F = a ? b : null) this.Ga = this.F.duration || this.Ga
                }
                this.yj()
            }
        };
        f.yj = function() {
            this.W() || (this.ce = !1, this.u("dataloaded", this.k))
        };

        function yk(a, b, c, d) {
            nk(a.F, zk(a), v(function(a) {
                this.W() || (a.length ? (this.B = a, this.u("dataupdated"), b()) : (this.fa = !1, Ak(this, b, c)))
            }, a), c, a.Xi, d)
        }

        function Ak(a, b, c) {
            a.B = a.re && a.Ol ? mk(a.re, c) : lk(a.U, !!a.Tb || !1, c);
            O(v(function() {
                this.W() || (this.u("dataupdated"), b && b())
            }, a), 0)
        }

        function Bk(a, b) {
            var c = null;
            a.B.some(function(a) {
                if (a.cc.a.i == b) return c = a, !0
            });
            return c
        }

        function Ck(a) {
            var b = a.A && a.A.i;
            if (!b) return null;
            x(b.g, zk(a));
            return b
        }

        function zk(a) {
            var b = {};
            a.J && (b.ptk = a.J, b.oid = a.Sb, b.ptchn = a.Qb, b.pltype = a.Ub);
            return b
        }

        function Dk(a, b) {
            return u(a.ya[b]) ? a.ya[b] : null
        }

        function Ek(a, b) {
            var c = {
                format: "RAW",
                method: "GET",
                Aa: a,
                oc: a.os
            };
            a.ce = !0;
            wi(b, c)
        }
        f.os = function(a) {
            this.W() || (this.ce = !1, a = li(a.responseText), "fail" == a.status ? this.u("onStatusFail", a) : (pk(this, a), this.ce || this.yj()))
        };

        function vk(a, b) {
            var c = parseInt(a, 10);
            return Ab(vj, c) ? c : b
        }

        function sk(a) {
            a = a.split(",");
            return a = a.map(function(a) {
                return li(a)
            })
        }

        function uk(a, b) {
            var c = sk(b);
            B(c, function(a) {
                a.url && (a.url = U(a.url, {
                    cpn: this.wa
                }))
            }, a);
            return c
        }

        function rk(a) {
            var b = {};
            B(a.split(","), function(a) {
                var d = a.split("=");
                2 == d.length ? b[d[0]] = d[1] : b[a] = !0
            });
            return b
        }

        function tk(a, b) {
            if (b) {
                var c = b.split(",");
                2 <= c.length && (a.ed = c[1], a.qe = c[0])
            }
        }

        function Fk(a, b) {
            return !!a.k[b]
        }

        function wk(a, b) {
            var c = Aa(b),
                d = Aa(a);
            return isNaN(d) || isNaN(c) ? 0 : Math.min(d, c)
        };

        function Gk(a, b) {
            this.type = a || "";
            this.id = b || ""
        }
        Gk.prototype.toString = function() {
            return this.type + this.id
        };

        function Hk(a) {
            W.call(this);
            this.a = [];
            this.b = [];
            this.ga = Math.max(0, a.index || 0);
            this.loop = !!a.loop;
            this.ma = a.startSeconds || 0;
            this.Jl = "1" == a.mob;
            this.title = a.playlist_title || "";
            a.video_id && (this.a[this.ga] = new Df(a));
            a.api && ("string" == typeof a.api && 16 == a.api.length ? a.list = "PL" + a.api : a.playlist = a.api);
            if (a.list) switch (a.listType) {
                case "user_uploads":
                    Ik(this, a.list);
                    break;
                case "user_favorites":
                    Jk(this, a.list);
                    break;
                case "search":
                    Kk(this, a.list);
                    break;
                default:
                    a.playlist_length && (this.Ab = a.playlist_length),
                        this.g = new Gk(a.list.substr(0, 2), a.list.substr(2)), this.If || Lk(this, "/list_ajax?style=json&action_get_list=1", {
                            list: this.g
                        })
            } else if (a.playlist) {
                var b = a.playlist.toString().split(",");
                0 < this.ga && (this.a = []);
                B(b, function(a) {
                    a && this.a.push(new Df({
                        video_id: a
                    }))
                }, this);
                this.Ab = this.a.length;
                this.ld = !0
            } else a.videoList && (0 < this.ga && (this.a = []), B(a.videoList, function(a) {
                this.a.push(new Df(a))
            }, this), this.Ab = this.a.length, this.ld = !0);
            Mf(this, !!a.shuffle);
            a.suggestedQuality && (this.i = a.suggestedQuality)
        }
        A(Hk, W);
        f = Hk.prototype;
        f.loop = !1;
        f.ma = 0;
        f.vm = !1;
        f.ga = 0;
        f.title = "";
        f.Ab = 0;
        f.Jl = !1;
        f.ld = !1;
        f.If = !1;
        f.Kd = null;

        function Mk(a) {
            if (++a.ga >= a.Ab)
                if (a.loop) a.ga = 0;
                else return null;
            Lf(a, a.ga);
            return Kf(a, a.ga)
        }

        function Jf(a) {
            if (0 > --a.ga)
                if (a.loop) a.ga = a.Ab - 1;
                else return null;
            Lf(a, a.ga);
            return Kf(a, a.ga)
        }

        function Kf(a, b) {
            var c = void 0 != b ? b : a.ga;
            if (c = a.a && c in a.a ? a.a[a.b[c]] : null) c.ma = a.ma || c.Nk;
            return c
        }

        function Mf(a, b) {
            a.vm = b;
            var c = a.b && null != a.b[a.ga] ? a.b[a.ga] : a.ga;
            a.b = [];
            for (var d = 0; d < a.a.length; d++) a.b.push(d);
            a.ga = c;
            if (a.vm) {
                c = a.b[a.ga];
                for (d = 1; d < a.b.length; d++) {
                    var e = Math.floor(Math.random() * (d + 1)),
                        g = a.b[d];
                    a.b[d] = a.b[e];
                    a.b[e] = g
                }
                for (d = 0; d < a.b.length; d++) a.b[d] == c && (a.ga = d)
            }
            a.u("shuffle")
        }

        function Lf(a, b) {
            a.ga = ob(b, 0, a.Ab - 1);
            a.ma = 0
        }

        function Ik(a, b) {
            a.If || (a.g = new Gk("UU", "PLAYER_" + b), Lk(a, "/list_ajax?style=json&action_get_user_uploads_by_user=1", {
                username: b
            }))
        }

        function Jk(a, b) {
            a.If || (a.g = new Gk("FL", "PLAYER_" + b), Lk(a, "/list_ajax?style=json&action_get_favorited_by_user=1", {
                username: b
            }))
        }

        function Kk(a, b) {
            if (!a.If) {
                a.g = new Gk("SR", b);
                var c = {
                    search_query: b
                };
                a.Jl && (c.mob = "1");
                Lk(a, "/search_ajax?style=json&embeddable=1", c)
            }
        }

        function Lk(a, b, c) {
            wi(U(b, c), {
                format: "JSON",
                oc: function(a, b) {
                    Nk(this, b)
                },
                Aa: a
            })
        }

        function Nk(a, b) {
            if (b.video && b.video.length) {
                a.title = b.title;
                a.description = b.description;
                a.views = b.views;
                a.author = b.author;
                var c = Kf(a);
                a.ga = 0;
                a.a = [];
                B(b.video, function(a) {
                    a && (a.video_id = a.encrypted_id, c && a.video_id == c.K && (this.ga = this.a.length), this.a.push(new Df(a)))
                }, a);
                a.Ab = a.a.length;
                Mf(a, !1);
                a.If = !1;
                a.ld = !0;
                a.Kd && a.Kd()
            }
        }
        f.I = function() {
            this.Kd = null;
            mf(this.a);
            Hk.G.I.call(this)
        };
        var Ok = !!l.DOMTokenList,
            Pk = Ok ? function(a) {
                return a.classList
            } : function(a) {
                a = a.className;
                return u(a) && a.match(/\S+/g) || []
            },
            Qk = Ok ? function(a, b) {
                return a.classList.contains(b)
            } : function(a, b) {
                return E(Pk(a), b)
            },
            Z = Ok ? function(a, b) {
                a.classList.add(b)
            } : function(a, b) {
                Qk(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
            },
            Rk = Ok ? function(a, b) {
                B(b, function(b) {
                    Z(a, b)
                })
            } : function(a, b) {
                var c = {};
                B(Pk(a), function(a) {
                    c[a] = !0
                });
                B(b, function(a) {
                    c[a] = !0
                });
                a.className = "";
                for (var d in c) a.className += 0 < a.className.length ?
                    " " + d : d
            },
            Sk = Ok ? function(a, b) {
                a.classList.remove(b)
            } : function(a, b) {
                Qk(a, b) && (a.className = Ga(Pk(a), function(a) {
                    return a != b
                }).join(" "))
            },
            Tk = Ok ? function(a, b) {
                B(b, function(b) {
                    Sk(a, b)
                })
            } : function(a, b) {
                a.className = Ga(Pk(a), function(a) {
                    return !E(b, a)
                }).join(" ")
            };

        function Uk(a, b, c) {
            c ? Z(a, b) : Sk(a, b)
        };

        function Vk(a, b) {
            this.$e = a;
            this.je = b + "::"
        }
        A(Vk, bg);
        f = Vk.prototype;
        f.$e = null;
        f.je = "";
        f.set = function(a, b) {
            this.$e.set(this.je + a, b)
        };
        f.get = function(a) {
            return this.$e.get(this.je + a)
        };
        f.remove = function(a) {
            this.$e.remove(this.je + a)
        };
        f.Tc = function(a) {
            var b = this.$e.Tc(!0),
                c = this,
                d = new wd;
            d.next = function() {
                for (var d = b.next(); d.substr(0, c.je.length) != c.je;) d = b.next();
                return a ? d.substr(c.je.length) : c.$e.get(d)
            };
            return d
        };

        function Wk(a) {
            W.call(this);
            this.a = a;
            if (this.Mm) {
                a = "yt-html5-player-modules::" + this.Mm;
                var b = new dg;
                if (a = b.isAvailable() ? a ? new Vk(b, a) : b : null) this.o = new eg(a)
            }
        }
        A(Wk, W);
        f = Wk.prototype;
        f.ia = "";
        f.hg = "";
        f.Bf = !1;
        f.ca = !1;
        f.Hb = null;
        f.Ii = function(a) {
            var b = Ua(arguments),
                c = v(this.He, this),
                d = v(this.Te, this);
            B(b, function(a) {
                a.namespace = this.ia;
                a.hc.D("onEnter", c);
                a.hc.D("onExit", d)
            }, this);
            this.u("command_add_cuerange", b, this.a.a)
        };
        f.ar = function(a) {
            var b = Ua(arguments);
            this.u("command_remove_cuerange", b, this.a.a)
        };

        function Xk(a) {
            a.u("command_remove_cuerange_all", a.ia, a.a.a)
        }

        function Yk(a) {
            a.u("command_preroll_ready", a.ia, a.a.a)
        }

        function Zk(a, b) {
            Z(b, a.ia);
            a.a.app.R.o.appendChild(b)
        }

        function $k(a) {
            a.u("command_show_dialog_area")
        }

        function al(a) {
            a.u("command_hide_all_dialogs")
        }
        f.create = function() {
            var a = this.ia + "-created";
            this.fc(this.a);
            Qk(Wf(this.a), a);
            Z(Wf(this.a), a);
            this.Bf = !0
        };
        f.destroy = function() {
            this.unload();
            Sk(Wf(this.a), this.ia + "-created");
            this.Bf = !1
        };
        f.load = function() {
            Z(Wf(this.a), this.ia + "-loaded");
            this.u("loaded", this.ia)
        };
        f.unload = function() {
            Sk(Wf(this.a), this.ia + "-loaded");
            this.u("unloaded", this.ia)
        };
        f.He = function() {};
        f.Te = function() {};
        f.ee = function() {};
        f.log = function(a) {
            this.u("command_log", this.hg, a)
        };

        function bl(a, b, c) {
            var d = {},
                e;
            for (e in b) d[a.ia + "_" + e] = b[e];
            b = {};
            for (var g in c) b[a.ia + "_" + g] = c[g];
            a.u("command_log_timing", d, b)
        }
        f.ph = function() {
            return null
        };

        function cl(a, b) {
            if (!a.o) return null;
            var c;
            try {
                c = a.o.get(b)
            } catch (d) {
                a.o && a.o.remove(b)
            }
            return c
        }

        function dl(a, b, c) {
            if (a.o) try {
                a.o.set(b, c)
            } catch (d) {}
        }

        function el(a, b) {
            a.u("command_disable_controls", b, a.ia)
        }

        function fl(a, b) {
            a.u("command_enable_controls", b, a.ia)
        }

        function gl(a) {
            a.u("command_stop_redirect_controls")
        }

        function hl(a) {
            a.u("command_play", !1, a.a.a)
        }

        function il(a) {
            a.u("command_pause", !1, a.a.a)
        }
        f.Ma = function(a) {
            this.u("command_redirected_show_is_playing", a)
        };
        f.Dn = function() {};
        f.Om = function() {
            return []
        };
        f.fc = function() {
            return !1
        };
        f.sm = function(a, b) {
            this.Hb && this.Hb.ee && this.Hb.ee.apply(this.Hb, arguments)
        };
        f.Jg = function() {};

        function jl(a) {
            this.b = {};
            this.g = {};
            this.i = {};
            this.a = kl(this, a)
        }
        A(jl, kf);

        function kl(a, b, c) {
            var d = 0,
                e = Fc(b[d++]);
            if (u(b[d]) || t(b[d]) || null === b[d]) {
                var g = b[d++];
                t(g) && (g = g.join(" "));
                if (g = ll(a, e, "className", g)) ml(a, e, "className", g), nl(a, g, e)
            }
            for (; d < b.length; d++) {
                var h = b[d];
                if (t(h)) kl(a, h, e);
                else if (ia(h)) {
                    var g = a,
                        k = e,
                        m = void 0;
                    for (m in h) h[m] && ml(g, k, m, ll(g, k, m, h[m]))
                } else u(h) && ml(a, e, "child", ll(a, e, "child", h))
            }
            c && c.appendChild(e);
            return e
        }
        f = jl.prototype;
        f.P = function() {
            return this.a
        };

        function nl(a, b, c) {
            var d = b.split(" ");
            if (1 < d.length)
                for (b = 0; b < d.length; b++) nl(a, d[b], c);
            else a.b[b] = c
        }
        f.ub = function(a, b) {
            s(b) ? a.insertBefore(this.a, a.childNodes[b] || null) : a.appendChild(this.a)
        };
        f.Vi = function() {
            Ic(this.a)
        };

        function ll(a, b, c, d) {
            return u(d) && "{{" == d.substr(0, 2) ? (a.g[d] = [b, c], null) : d
        }
        f.update = function(a) {
            for (var b in a) ol(this, b, a[b])
        };

        function ol(a, b, c) {
            if (c != a.i[b]) {
                var d = a.g["{{" + b + "}}"];
                d && (a.i[b] = c, ml(a, d[0], d[1], c))
            }
        }

        function ml(a, b, c, d) {
            if ("child" == c) {
                Hc(b);
                if (!t(d) || t(d) && u(d[0])) d = [d];
                c = [];
                for (var e = 0; e < d.length; e++) {
                    var g = d[e];
                    null === g || (!g.nodeType || 1 != g.nodeType && 3 != g.nodeType ? t(g) && u(g[0]) ? c.push(kl(a, g)) : g.P ? c.push(g.P()) : c.push(document.createTextNode(String(g.toString()))) : c.push(g))
                }
                for (a = 0; a < c.length; a++) b.appendChild(c[a])
            } else "className" == c ? b.className = d : null === d ? b.removeAttribute(c) : b.setAttribute(c, d.toString())
        }
        f.I = function() {
            this.b = {};
            this.g = {};
            this.i = {};
            this.Vi();
            this.a = null;
            jl.G.I.call(this)
        };

        function pl(a, b) {
            var c = xe("requestAnimationFrame", window);
            return O(function() {
                c ? c.call(window, a) : a()
            }, b || 0)
        };

        function ql(a) {
            this.template = new jl(a);
            R(this, this.template);
            this.element = this.template.P();
            this.o = [];
            this.B = {}
        }
        A(ql, kf);
        f = ql.prototype;
        f.P = function() {
            return this.element
        };
        f.ub = function(a, b) {
            this.template.ub(a, b)
        };
        f.Vi = function() {
            this.template.Vi()
        };
        f.ai = function(a) {
            ol(this.template, "content", a)
        };
        f.show = function() {
            var a = this.element;
            a && (a.style.display = "block")
        };
        f.hide = function() {
            var a = this.element;
            a && (a.style.display = "none")
        };
        f.listen = function(a, b, c, d) {
            a = Q(a, b, v(c, this));
            this.o.push(a);
            u(d) && this.B[d].push(a);
            return a
        };
        f.yd = function(a) {
            Ve(a)
        };
        f.stopPropagation = function(a) {
            this.listen(this, a, function(a) {
                a.stopPropagation()
            })
        };
        f.addEventListener = function(a, b, c) {
            this.element.addEventListener ? this.element.addEventListener(a, b, c) : this.element.attachEvent && this.element.attachEvent("on" + a, b)
        };
        f.removeEventListener = function(a, b, c) {
            this.element.removeEventListener ? this.element.removeEventListener(a, b, c) : this.element.detachEvent && this.element.detachEvent("on" + a, b)
        };
        f.dispatchEvent = function(a) {
            return this.element.dispatchEvent(a)
        };
        f.I = function() {
            this.yd(this.o);
            this.element = null;
            ql.G.I.call(this)
        };

        function rl(a, b, c) {
            c = c || {};
            var d = c.Vc;
            d || (d = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(d), d = d.sheet || d.styleSheet);
            c.reset && sl(d);
            b = b instanceof Array ? b.join(";") : b;
            d.insertRule ? d.insertRule(a + "{" + b + "}", d.cssRules.length) : d.addRule(a, b, -1);
            return d
        }

        function sl(a) {
            for (var b = (a.cssRules || a.rules).length; 0 < b; b--) {
                var c = a;
                c.deleteRule ? c.deleteRule(0) : c.removeRule(0)
            }
        };

        function tl(a) {
            this.a = a
        }
        A(tl, kf);
        tl.prototype.i = null;
        tl.prototype.g = null;
        tl.prototype.b = null;

        function ul(a) {
            a.i || (a.i = K("ad-container", Wf(a.a)), a.a.N().Ta && Z(a.i, "ad-container-single-media-element"));
            return a.i
        }

        function vl(a) {
            a.b && (a.a.N().Ta ? (Sk(a.b, "ad-video"), wl(a.a.app, a.b), a.b = null) : (Ic(a.b), Uh(a.b)))
        }

        function xl(a) {
            if (!a.g) {
                if (a.a.N().Pd) {
                    var b = Fc("button");
                    Z(b, "video-click-tracking");
                    Gc(b, Ne("VISIT_ADVERTISERS_SITE"));
                    var c = Fc("div");
                    Z(c, "video-click-tracking-container");
                    c.appendChild(b);
                    ul(a).appendChild(c)
                } else b = Fc("div"), Rk(b, ["video-click-tracking", "ad-video"]), ul(a).appendChild(b);
                a.g = b
            }
            return a.g
        }
        tl.prototype.I = function() {
            tl.G.I.call(this);
            this.b && (wl(this.a.app, this.b), this.b = null);
            vl(this);
            Hc(ul(this));
            this.i = this.g = null;
            delete this.a
        };

        function yl(a) {
            if (!a.b) {
                var b;
                b = a.a.app;
                if (b.a.Ta) {
                    var c = new F(b.i.offsetLeft, b.i.offsetTop),
                        d = fd(b.i);
                    b.J = new ub(c.x, c.y, d.width, d.height);
                    zl(b.j);
                    Vh(b.i, 1);
                    Uh(b.i);
                    b = b.i
                } else b = Al.getTag();
                a.b = b;
                Rk(a.b, ["video-stream", "ad-video"])
            }
            return a.b
        };

        function Bl(a, b, c, d) {
            ql.call(this, ["div", {
                className: "ytp-button",
                role: "button",
                "aria-label": "{{label}}"
            }, "{{content}}"]);
            this.g = a;
            this.b = this.a = null;
            Q(this.element, "keypress", v(this.j, this));
            this.g.a(this.element, v(this.i, this));
            b && b && "" != b && (this.a && Sk(this.element, this.a), this.a = b, Z(this.element, b));
            c && ol(this.template, "label", c);
            d && (this.b = d)
        }
        A(Bl, ql);
        Bl.prototype.i = function() {
            return this.b ? document.createTextNode(String(this.b)) : null
        };
        Bl.prototype.show = function() {
            var a = this.element;
            a && (a.style.display = "inline-block")
        };
        Bl.prototype.j = function(a) {
            if (13 == a.keyCode || 32 == a.keyCode) $e(this.element, "click"), a.preventDefault()
        };
        Bl.prototype.I = function() {
            this.g.b(this.element);
            this.g = null;
            Ze(this.element);
            Bl.G.I.call(this)
        };

        function Cl(a, b) {
            ql.call(this, ["canvas"]);
            this.element.width = a;
            this.element.height = b;
            this.width = a;
            this.height = b;
            this.Aa = this.element.getContext("2d");
            this.a = 0;
            this.j = null
        }
        A(Cl, ql);
        Cl.prototype.g = function(a, b) {
            P(this.a);
            this.a = pl(v(this.g, this, a, b), b);
            a.call(this, new Date - this.j)
        };
        Cl.prototype.I = function() {
            P(this.a);
            this.Aa = null;
            Cl.G.I.call(this)
        };

        function Dl(a) {
            var b = Math.floor(a / 86400),
                c = Math.floor(a % 86400 / 3600),
                d = Math.floor(a % 3600 / 60);
            a = Math.floor(a % 60);
            var e = "";
            0 < b && (e += b + ":", 10 > c && (e += "0"));
            0 < c && (e += c + ":", 10 > d && (e += "0"));
            e += d + ":";
            10 > a && (e += "0");
            return e + a
        };

        function El(a, b) {
            if ((a = J(a)) && a.style) {
                a.style.display = b ? "" : "none";
                var c = a;
                b ? tc(c, "hid") : sc(c, "hid")
            }
        }

        function Fl(a) {
            B(arguments, function(a) {
                El(a, !0)
            })
        }

        function Gl(a) {
            B(arguments, function(a) {
                El(a, !1)
            })
        }

        function Hl(a) {
            var b = document.body;
            if (void 0 != b.style[a]) return a;
            a = a.charAt(0).toUpperCase() + a.substr(1);
            for (var c = ["Moz", "Webkit", "ms", "O"], d = 0; d < c.length; d++)
                if (void 0 != b.style[c[d] + a]) return c[d] + a
        }

        function Il(a, b, c) {
            (a = J(a)) && a.style && (b = Hl(b)) && (a.style[b] = c)
        };
        var Jl = window.location.protocol + "/assets/site-assets/2013tv/_static/",
            Kl = 4 / 3;

        function Ll(a, b, c) {
            var d;
            switch (b.Bc) {
                case 30:
                    d = Ml;
                    break;
                default:
                    d = Nl
            }
            return d(a, b, c)
        }

        function Nl(a, b, c) {
            if (!c) {
                c = a.clientHeight;
                a = a.clientWidth;
                if ((900 < a || 600 < c) && b.bm) return b.bm;
                if ((430 < a || 320 < c) && b.dm) return b.dm
            }
            return b.bh ? b.bh : b.K ? Ol(b.K) : ""
        }

        function Ml(a, b) {
            return b.bh ? b.bh : b.K ? U("//web.archive.org/web/20130831093956/https://docs.google.com/vt", {
                id: b.K,
                authuser: b.Cc,
                authkey: b.Vl
            }) : "//web.archive.org/web/20130831093956/https://docs.google.com/images/doclist/cleardot.gif"
        }

        function Ol(a, b) {
            return (Jl + "vi/" + escape(a) + "/" + escape(b || "hqdefault.jpg")).replace("i.", "i" + (a.charCodeAt(0) % Ge("THUMBNAIL_NUM_SHARDS", 1) + 1) + ".")
        };

        function Pl(a, b, c) {
            this.b = a;
            (a = b || null) || (a = Ql(this.b));
            a = "(" + a.join("|") + ")";
            a = qa("__%s__", a);
            this.g = RegExp(a, "g");
            this.a = c || {}
        }
        var Rl = /__([a-z]+(?:_[a-z]+)*)__/g;

        function Sl(a, b) {
            var c = J(a).innerHTML,
                c = c.replace(/^\s*(\x3c!--\s*)?/, ""),
                c = c.replace(/(\s*--\x3e)?\s*$/, "");
            return new Pl(c, b, void 0)
        }

        function Ql(a) {
            var b = [],
                c = {};
            a.replace(Rl, function(a, e) {
                e in c || (c[e] = !0, b.push(e))
            });
            return b
        }

        function Tl(a, b, c, d) {
            var e = v(function(a, e) {
                c && (e = c(e));
                return d ? b[e] || this.a[e] || "" : sa(b[e] || this.a[e] || "")
            }, a);
            return a.b.replace(a.g, e)
        };
        var Ul = {
            created: 1,
            ready: 2,
            testing: 4,
            "testing-starting": 3,
            live: 6,
            "live-starting": 5,
            complete: 8,
            "complete-starting": 7
        };
        /*
         Portions of this code are from MochiKit, received by
         The Closure Authors under the MIT license. All other code is Copyright
         2005-2009 The Closure Authors. All Rights Reserved.
        */
        function Vl(a, b) {
            this.o = [];
            this.L = a;
            this.J = b || null;
            this.k = this.g = !1;
            this.j = void 0;
            this.F = this.Xq = this.A = !1;
            this.C = 0;
            this.i = null;
            this.B = 0
        }
        Vl.prototype.cancel = function(a) {
            if (this.g) this.j instanceof Vl && this.j.cancel();
            else {
                if (this.i) {
                    var b = this.i;
                    delete this.i;
                    a ? b.cancel(a) : (b.B--, 0 >= b.B && b.cancel())
                }
                this.L ? this.L.call(this.J, this) : this.F = !0;
                this.g || this.a(new Wl)
            }
        };
        Vl.prototype.H = function(a, b) {
            this.A = !1;
            Xl(this, a, b)
        };

        function Xl(a, b, c) {
            a.g = !0;
            a.j = c;
            a.k = !b;
            Yl(a)
        }

        function Zl(a) {
            if (a.g) {
                if (!a.F) throw new $l;
                a.F = !1
            }
        }
        Vl.prototype.b = function(a) {
            Zl(this);
            Xl(this, !0, a)
        };
        Vl.prototype.a = function(a) {
            Zl(this);
            Xl(this, !1, a)
        };

        function am(a, b, c, d) {
            a.o.push([b, c, d]);
            a.g && Yl(a);
            return a
        }

        function bm(a) {
            var b = new Vl;
            am(a, b.b, b.a, b);
            return b
        }

        function cm(a) {
            return Ha(a.o, function(a) {
                return ha(a[1])
            })
        }

        function Yl(a) {
            a.C && a.g && cm(a) && (l.clearTimeout(a.C), delete a.C);
            a.i && (a.i.B--, delete a.i);
            for (var b = a.j, c = !1, d = !1; a.o.length && !a.A;) {
                var e = a.o.shift(),
                    g = e[0],
                    h = e[1],
                    e = e[2];
                if (g = a.k ? h : g) try {
                    var k = g.call(e || a.J, b);
                    s(k) && (a.k = a.k && (k == b || k instanceof Error), a.j = b = k);
                    b instanceof Vl && (d = !0, a.A = !0)
                } catch (m) {
                    b = m, a.k = !0, cm(a) || (c = !0)
                }
            }
            a.j = b;
            d && (am(b, v(a.H, a, !0), v(a.H, a, !1)), b.Xq = !0);
            c && (a.C = l.setTimeout(Ib(b), 0))
        }

        function $l() {
            pa.call(this)
        }
        A($l, pa);
        $l.prototype.message = "Deferred has already fired";
        $l.prototype.name = "AlreadyCalledError";

        function Wl() {
            pa.call(this)
        }
        A(Wl, pa);
        Wl.prototype.message = "Deferred was canceled";
        Wl.prototype.name = "CanceledError";

        function dm(a, b) {
            var c = b || {},
                d = c.document || document,
                e = Fc("SCRIPT"),
                g = {
                    Dm: e,
                    Gb: void 0
                },
                h = new Vl(em, g),
                k = null,
                m = null != c.timeout ? c.timeout : 5E3;
            0 < m && (k = window.setTimeout(function() {
                fm(e, !0);
                h.a(new gm(1, "Timeout reached for loading script " + a))
            }, m), g.Gb = k);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (fm(e, c.Qq || !1, k), h.b(null))
            };
            e.onerror = function() {
                fm(e, !0, k);
                h.a(new gm(0, "Error while loading script " + a))
            };
            zc(e, {
                type: "text/javascript",
                charset: "UTF-8",
                src: a
            });
            hm(d).appendChild(e);
            return h
        }

        function hm(a) {
            var b = a.getElementsByTagName("HEAD");
            return b && 0 != b.length ? b[0] : a.documentElement
        }

        function em() {
            if (this && this.Dm) {
                var a = this.Dm;
                a && "SCRIPT" == a.tagName && fm(a, !0, this.Gb)
            }
        }

        function fm(a, b, c) {
            null != c && l.clearTimeout(c);
            a.onload = ba;
            a.onerror = ba;
            a.onreadystatechange = ba;
            b && window.setTimeout(function() {
                Ic(a)
            }, 0)
        }

        function gm(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            pa.call(this, c);
            this.code = a
        }
        A(gm, pa);

        function im(a, b) {
            this.b = new Ud(a);
            this.a = b ? b : "callback";
            this.Gb = 5E3
        }
        var jm = 0;
        im.prototype.send = function(a, b, c, d) {
            a = a || null;
            d = d || "_" + (jm++).toString(36) + y().toString(36);
            l._callbacks_ || (l._callbacks_ = {});
            var e = this.b.clone();
            if (a)
                for (var g in a) a.hasOwnProperty && !a.hasOwnProperty(g) || ie(e, g, a[g]);
            b && (l._callbacks_[d] = km(d, b), ie(e, this.a, "_callbacks_." + d));
            b = dm(e.toString(), {
                timeout: this.Gb,
                Qq: !0
            });
            am(b, null, lm(d, a, c), void 0);
            return {
                pa: d,
                Cb: b
            }
        };
        im.prototype.cancel = function(a) {
            a && (a.Cb && a.Cb.cancel(), a.pa && mm(a.pa, !1))
        };

        function lm(a, b, c) {
            return function() {
                mm(a, !1);
                c && c(b)
            }
        }

        function km(a, b) {
            return function(c) {
                mm(a, !0);
                b.apply(void 0, arguments)
            }
        }

        function mm(a, b) {
            l._callbacks_[a] && (b ? delete l._callbacks_[a] : l._callbacks_[a] = ba)
        };

        function nm(a) {
            W.call(this);
            this.g = Tl(new Pl("https://web.archive.org/web/20130831093956/http://gdata.youtube.com/feeds/api/users/live/broadcasts/__video_id__/states?v=2&alt=json-in-script"), {
                video_id: a
            });
            this.a = new lh(15E3 + Math.floor(3E4 * Math.random()));
            this.a.addEventListener("tick", v(this.b, this));
            this.b();
            this.a.start()
        }
        A(nm, W);
        nm.prototype.I = function() {
            this.a.dispose();
            nm.G.I.call(this)
        };
        nm.prototype.b = function() {
            (new im(this.g)).send(null, v(this.j, this), v(this.i, this))
        };
        nm.prototype.j = function(a) {
            this.u("payload", a);
            mh(this.a, 15E3 + Math.floor(3E4 * Math.random()))
        };
        nm.prototype.i = function() {
            this.u("error");
            var a = this.a.a;
            192E4 > a && mh(this.a, 2 * a)
        };

        function om() {
            this.g = new jl(["div", "html5-fresca-module", ["div", "html5-fresca-band-slate", ["hgroup", "html5-fresca-message", ["h2", "html5-fresca-heading", "{{heading}}"],
                    ["h3", "html5-fresca-subheading", "{{subheading}}"],
                    ["h4", "html5-fresca-long-test", "{{long_text}}"]
                ],
                ["span", "html5-fresca-countdown", "{{countdown}}"]
            ]]);
            R(this, this.g);
            this.b = this.g.b["html5-fresca-module"];
            Z(this.b, "html5-stop-propagation");
            this.i = 0;
            this.a = null
        }
        A(om, kf);
        om.prototype.P = function() {
            return this.b
        };
        om.prototype.update = function(a) {
            if (!this.k || this.a.state != a.state || this.a.startTime != a.startTime || this.a.b != a.b || this.a.a.join() != a.a.join()) {
                this.a = a;
                this.b.style.backgroundImage = this.a.b || "none";
                a = this.a.a;
                if (!a.length) {
                    t: switch (this.a.state) {
                        case 6:
                            a = "";
                            break t;
                        case 8:
                        case 7:
                            a = Ne("FRESCA_COMPLETE_MESSAGE");
                            break t;
                        default:
                            a = Ne("FRESCA_STAND_BY_MESSAGE")
                    }
                    a = [a]
                }
                this.g.update({
                    heading: a[0] || "",
                    subheading: a[1] || "",
                    long_text: a[2] || ""
                });
                this.j()
            }
        };

        function pm(a) {
            var b = Math.floor((new Date).valueOf() / 1E3);
            return b > a ? Ne("FRESCA_STARTING_SOON_MESSAGE") : Dl(a - b)
        }
        om.prototype.j = function() {
            var a;
            a = this.a;
            a.startTime ? (a = a.state, a = 6 == a || 8 == a || 7 == a ? !1 : !0) : a = !1;
            Uk(this.b, "html5-fresca-show-countdown", a);
            a && (this.g.update({
                countdown: pm(this.a.startTime)
            }), P(this.i), this.i = O(v(this.j, this), 1E3))
        };
        om.prototype.I = function() {
            P(this.i);
            this.b = null;
            om.G.I.call(this)
        };

        function qm(a) {
            this.a = [];
            a && rm(this, a)
        }
        qm.prototype.state = -1;

        function rm(a, b) {
            var c = b.feed;
            if (c) {
                var d = c.yt$lifeCycleState;
                d && (a.state = Ul[d.$t] || -1);
                (d = c.yt$when) && d.start && (d = new Date(d.start), a.startTime = Math.floor(d.valueOf() / 1E3));
                if (c = c.yt$slate) c.imgUrl && (a.b = "url(" + c.imgUrl + ")"), (c = c.content) && c.length && (c = c.splice(0, 3), a.a = C(c, function(a) {
                    return a.$t
                }))
            }
        };

        function sm(a) {
            Wk.call(this, a)
        }
        A(sm, Wk);
        f = sm.prototype;
        f.ia = "fresca";
        f.hg = "fresca";
        f.Sg = !1;
        f.Ef = !1;
        f.fc = function() {
            return Fk(this.a.getVideoData(), "fresca_module")
        };
        f.create = function(a) {
            sm.G.create.call(this);
            this.Sg = this.Ef = !1;
            fl(this, ["play_pause", "seek"]);
            this.i = new om;
            this.a.app.R.i.appendChild(this.i.P());
            this.g = a || new nm(this.a.getVideoData().K);
            this.g.D("payload", this.Nq, this);
            this.g.D("error", this.Mq, this);
            this.D("onStateChange", this.om, this)
        };
        f.destroy = function() {
            this.ca && this.unload();
            this.Q("onStateChange", this.om, this);
            mf(this.g, this.i);
            sm.G.destroy.call(this)
        };
        f.load = function() {
            sm.G.load.call(this);
            this.ca = !0
        };
        f.unload = function() {
            this.ca = !1;
            sm.G.unload.call(this)
        };
        f.om = function(a) {
            this.b && (this.Sg = V(a.state, 2), (tm(a, 16) || this.Sg) && um(this, this.b))
        };
        f.Mq = function() {
            this.Ef || (this.b = new qm, um(this, this.b))
        };
        f.Nq = function(a) {
            this.b = new qm(a);
            6 != this.b.state || this.a.getVideoData().U.length ? um(this, this.b) : this.a.oi(this.a.getVideoData().K)
        };

        function um(a, b) {
            var c = 6 > b.state;
            !c && a.a.app.g.ka && (b.b || b.a.length) && (c = !0);
            a.Sg && !a.a.N().Fc && (c = !0);
            if (!a.Ef) switch (b.state) {
                case 6:
                    a.Ef = !0;
                    fl(a, ["play_pause", "seek"]);
                    Yk(a);
                    break;
                case 8:
                case 7:
                    c = a.Ef = !0
            }
            c && a.i.update(b);
            c && !a.ca ? a.load() : !c && a.ca && a.unload()
        }

        function vm(a) {
            return Fk(a.getVideoData(), "fresca_module") ? new sm(a) : null
        };

        function wm(a) {
            this.Hi = a || window;
            this.Ge = []
        }
        f = wm.prototype;
        f.Hi = null;
        f.Ge = null;
        f.listen = function(a, b, c, d) {
            c = v(c, d || this.Hi);
            a = Q(a, b, c);
            this.Ge.push(a);
            return a
        };
        f.yd = function(a) {
            Ve(a);
            Qa(this.Ge, a)
        };
        f.removeAll = function() {
            Ve(this.Ge);
            this.Ge = []
        };

        function xm(a, b, c) {
            this.a = a;
            this.i = b || 0;
            this.b = c;
            this.g = v(this.$p, this)
        }
        A(xm, kf);
        f = xm.prototype;
        f.pa = 0;
        f.I = function() {
            xm.G.I.call(this);
            this.stop();
            delete this.a;
            delete this.b
        };
        f.start = function(a) {
            this.stop();
            this.pa = nh(this.g, s(a) ? a : this.i)
        };
        f.stop = function() {
            0 != this.pa && l.clearTimeout(this.pa);
            this.pa = 0
        };
        f.$p = function() {
            this.pa = 0;
            this.a && this.a.call(this.b)
        };
        var ym = {},
            zm = null;

        function Am(a) {
            a = ja(a);
            delete ym[a];
            Cb(ym) && zm && zm.stop()
        }

        function Bm() {
            zm || (zm = new xm(function() {
                Cm()
            }, 20));
            var a = zm;
            0 != a.pa || a.start()
        }

        function Cm() {
            var a = y();
            wb(ym, function(b) {
                Dm(b, a)
            });
            Cb(ym) || Bm()
        };

        function Em() {
            ih.call(this);
            this.a = 0;
            this.k = this.startTime = null
        }
        A(Em, ih);
        f = Em.prototype;
        f.Ni = function() {
            this.Pc("begin")
        };
        f.oh = function() {
            this.Pc("end")
        };
        f.ze = function() {
            this.Pc("finish")
        };
        f.onStop = function() {
            this.Pc("stop")
        };
        f.Pc = function(a) {
            jh(this, a)
        };

        function Fm(a, b, c, d) {
            Em.call(this);
            if (!t(a) || !t(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.g = a;
            this.o = b;
            this.duration = c;
            this.j = d;
            this.b = []
        }
        A(Fm, Em);
        f = Fm.prototype;
        f.sc = 0;

        function Gm(a) {
            if (0 == a.a) a.sc = 0, a.b = a.g;
            else if (1 == a.a) return;
            Am(a);
            var b = y();
            a.startTime = b; - 1 == a.a && (a.startTime -= a.duration * a.sc);
            a.k = a.startTime + a.duration;
            a.sc || a.Ni();
            a.Pc("play"); - 1 == a.a && a.Pc("resume");
            a.a = 1;
            var c = ja(a);
            c in ym || (ym[c] = a);
            Bm();
            Dm(a, b)
        }
        f.stop = function(a) {
            Am(this);
            this.a = 0;
            a && (this.sc = 1);
            Hm(this, this.sc);
            this.onStop();
            this.oh()
        };
        f.I = function() {
            0 == this.a || this.stop(!1);
            this.Pc("destroy");
            Fm.G.I.call(this)
        };
        f.destroy = function() {
            this.dispose()
        };

        function Dm(a, b) {
            a.sc = (b - a.startTime) / (a.k - a.startTime);
            1 <= a.sc && (a.sc = 1);
            Hm(a, a.sc);
            1 == a.sc ? (a.a = 0, Am(a), a.ze(), a.oh()) : 1 == a.a && a.vj()
        }

        function Hm(a, b) {
            ha(a.j) && (b = a.j(b));
            a.b = Array(a.g.length);
            for (var c = 0; c < a.g.length; c++) a.b[c] = (a.o[c] - a.g[c]) * b + a.g[c]
        }
        f.vj = function() {
            this.Pc("animate")
        };
        f.Pc = function(a) {
            jh(this, new Im(a, this))
        };

        function Im(a, b) {
            Hg.call(this, a);
            this.x = b.b[0];
            this.y = b.b[1];
            this.duration = b.duration;
            this.state = b.a
        }
        A(Im, Hg);
        var Jm = /#(.)(.)(.)/;

        function Km(a) {
            if (!Lm.test(a)) throw Error("'" + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace(Jm, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
        }
        var Lm = /^#(?:[0-9a-f]{3}){1,2}$/i;

        function Mm(a, b, c, d, e) {
            Fm.call(this, b, c, d, e);
            this.element = a
        }
        A(Mm, Fm);
        Mm.prototype.i = ba;
        Mm.prototype.vj = function() {
            this.i();
            Mm.G.vj.call(this)
        };
        Mm.prototype.oh = function() {
            this.i();
            Mm.G.oh.call(this)
        };
        Mm.prototype.Ni = function() {
            this.i();
            Mm.G.Ni.call(this)
        };

        function Nm(a, b, c, d, e) {
            if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
            Mm.apply(this, arguments)
        }
        A(Nm, Mm);
        Nm.prototype.i = function() {
            this.element.style.left = Math.round(this.b[0]) + "px";
            this.element.style.top = Math.round(this.b[1]) + "px"
        };

        function Om(a) {
            return a * a * a
        }

        function Pm(a) {
            return 1 - Math.pow(1 - a, 3)
        };

        function Qm(a, b, c, d, e) {
            this.Ra = a;
            this.element = b;
            this.g = c;
            this.j = d;
            this.Oi = e;
            this.Lb = this.a = !1
        }

        function Rm(a, b) {
            var c = Cc("div", "annotation-x-button-container"),
                d = Cc("div", "annotation-x-button");
            c.appendChild(d);
            a.g.listen(c, "click", v(function(a) {
                var c = this.Oi,
                    d = this.Ra;
                d && d.i && c.log_(Sm(c, d, 4));
                b(a);
                a.stopPropagation();
                this.Lb = !0
            }, a));
            return c
        }
        f = Qm.prototype;
        f.P = function() {
            return this.element
        };
        f.show = function() {};
        f.hide = function() {};
        f.destroy = function() {
            Ic(this.element)
        };
        f.tm = function() {
            var a = this.j.tf,
                b = this.j.ac,
                c = fd(this.element),
                d = b.height - a.top,
                e = c.width < b.width && c.height < b.height;
            Xc(this.element, a.width - b.width + a.left, this.a && e ? d - c.height : d)
        };

        function Tm(a, b, c, d, e) {
            Qm.call(this, a, b, c, d, e);
            this.b = Cc("div", "invideo-video-text-container");
            this.i = !1
        }
        A(Tm, Qm);

        function Um(a) {
            var b = new Nm(a.element, [a.element.offsetLeft, a.element.offsetTop], [a.element.offsetLeft, a.element.offsetTop - a.element.offsetHeight], 300, Pm);
            Yg(b, "begin", v(function() {
                this.a = !0
            }, a));
            Gm(b)
        }

        function Vm(a) {
            var b = new Nm(a.element, [a.element.offsetLeft, a.element.offsetTop], [a.element.offsetLeft, a.element.offsetTop + a.element.offsetHeight + 4], 300, Om);
            Yg(b, "end", v(function() {
                this.a = !1;
                Gl(this.element)
            }, a));
            Gm(b)
        }

        function Wm(a) {
            dd(a.element, 444, 56);
            var b = a.Ra.data,
                c = {
                    src: b.image_url,
                    "class": "invideo-video-img"
                },
                d = Cc("div", "invideo-video-img-container"),
                c = Cc("img", c);
            dd(c, 100, 56);
            d.appendChild(c);
            a.element.appendChild(d);
            dd(a.b, 244, 56);
            d = Cc("span", "iv-subtitle-text");
            Mc(d, b.text_line_1);
            a.b.appendChild(d);
            d = Cc("span", "iv-title-text");
            Mc(d, b.text_line_2);
            a.b.appendChild(d);
            a.element.appendChild(a.b);
            b = Rm(a, v(function() {
                Vm(this)
            }, a));
            a.element.appendChild(b);
            a.g.listen(a.element, "click", v(function() {
                var a = Xm(this.Ra);
                Ym(this.Oi, this.Ra);
                window.open(a.value)
            }, a))
        }
        Tm.prototype.show = function() {
            if (!this.a) {
                this.i || (Wm(this), this.i = !0);
                this.tm();
                Fl(this.element);
                var a = this.Oi,
                    b = this.Ra;
                b && b.i && a.log_(Sm(a, b, 2));
                Um(this)
            }
        };
        Tm.prototype.hide = function() {
            this.a && Vm(this)
        };

        function Zm(a, b, c) {
            ql.call(this, ["div", "ytp-segmented-control"]);
            this.g = a;
            this.b = -1;
            this.a = [];
            s(b) && $m(this, b, c)
        }
        A(Zm, ql);

        function $m(a, b, c) {
            mf(a.a);
            a.a = [];
            for (var d = 0; d < b.length; d++) {
                var e = new Bl(a.g);
                a.a[d] = e;
                c ? e.ai(["div", b[d]]) : e.ai(b[d]);
                0 != d && Z(e.P(), "ytp-segmented-control-other");
                an(e, d == a.b);
                Q(e, "click", v(a.i, a));
                e.ub(a.element)
            }
        }
        Zm.prototype.ub = function(a, b) {
            Zm.G.ub.call(this, a, b);
            for (var c = 0, d = 0; d < this.a.length; d++) c = Math.max(c, fd(this.a[d].P()).width);
            if (c)
                for (d = 0; d < this.a.length; d++) ed(this.a[d].P(), c)
        };

        function bn(a, b) {
            a.b = b;
            for (var c = 0; c < a.a.length; c++) an(a.a[c], c == b)
        }
        Zm.prototype.getSelected = function() {
            return this.b
        };

        function an(a, b) {
            if (b) {
                var c = a.P();
                Sk(c, "ytp-segmented-control-deselected");
                Z(c, "ytp-segmented-control-selected")
            } else c = a.P(), Sk(c, "ytp-segmented-control-selected"), Z(c, "ytp-segmented-control-deselected")
        }
        Zm.prototype.i = function(a) {
            for (var b = 0; b < this.a.length; b++)
                if (this.a[b] == a.currentTarget) {
                    var c = !1;
                    this.b != b ? (c = !0, bn(this, b)) : 2 == this.a.length && (c = !0, bn(this, 0 == b ? 1 : 0));
                    if (c) {
                        $e(this.element, "change");
                        break
                    }
                }
        };
        Zm.prototype.I = function() {
            $m(this, []);
            this.g = null;
            Zm.G.I.call(this)
        };

        function cn(a, b) {
            return null != b && !!b.match(a)
        }

        function dn(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        }

        function en(a, b, c, d) {
            var e = new fn;
            e.type = c;
            e.defaultValue = d;
            e.b = oa(cn, /.+/);
            return gn(a[b], e)
        }

        function hn(a, b, c) {
            var d = new fn;
            d.type = "OPTIONAL";
            d.a = function(a) {
                if (isNaN(parseInt(a, 0))) return null;
                a = parseInt(a, 0).toString(16);
                return "#" + "000000".substring(0, 6 - a.length) + a
            };
            d.b = function(a) {
                return !!a
            };
            d.defaultValue = c;
            return gn(a[b], d)
        }

        function jn(a, b, c, d) {
            var e = new fn;
            e.type = c;
            e.defaultValue = d;
            return gn(a[b], e)
        }

        function kn(a, b, c, d, e) {
            var g = new fn;
            g.type = d;
            g.defaultValue = e;
            g.b = oa(dn, c);
            return gn(a[b], g)
        }

        function ln(a, b, c) {
            var d = new fn;
            d.type = "OPTIONAL";
            d.defaultValue = c;
            d.b = function(a) {
                return !0 == a || !1 == a
            };
            d.a = function(a) {
                return "true" == a || "false" == a ? "true" == a : a
            };
            return gn(a[b], d)
        }

        function mn(a, b, c) {
            var d = new fn;
            d.type = "OPTIONAL";
            d.defaultValue = c;
            d.a = function(a) {
                return parseFloat(a)
            };
            return gn(a[b], d)
        }

        function nn(a) {
            var b = new fn;
            b.type = "OPTIONAL";
            b.defaultValue = 0;
            b.a = function(a) {
                return parseInt(a, 10)
            };
            return gn(a.d, b)
        }

        function on(a, b, c, d, e, g, h) {
            var k = new fn;
            k.type = "OPTIONAL";
            k.a = function(a) {
                a = 10 == c ? parseFloat(a) : parseInt(a, c);
                return g && null != a && !isNaN(a) ? ob(a, d, e) : a
            };
            k.defaultValue = h;
            k.b = function(a) {
                return null != a && !isNaN(a) && a >= d && a <= e
            };
            return gn(a[b], k)
        }

        function pn(a, b) {
            var c = new fn;
            c.type = "OPTIONAL";
            c.defaultValue = 0;
            c.a = function(a) {
                if ("never" == a) return -1;
                a = a.split(":");
                if (3 < a.length) return null;
                var b = 0,
                    c = 1;
                B(a, function(a) {
                    a = parseFloat(a);
                    0 > a && (c = -c);
                    b = 60 * b + Math.abs(a)
                });
                return c * b
            };
            return gn(a[b], c)
        }

        function qn(a, b) {
            return null == b ? null : a(b)
        }

        function rn(a, b, c, d, e) {
            if (null == a || null == a[b]) return null;
            var g = new fn;
            g.type = d;
            g.defaultValue = e;
            g.b = function(a) {
                return !!a
            };
            g.a = oa(qn, c);
            return gn(a[b], g)
        }

        function gn(a, b) {
            var c;
            if ("OPTIONAL" == b.type || "REQUIRED" == b.type) {
                if (c = null == a ? null : b.a(t(a) && a.length ? a[0] : a), !b.b(c)) {
                    if ("REQUIRED" == b.type) throw "Required field missing.";
                    c = null == b.defaultValue ? null : b.defaultValue
                }
            } else c = "REPEATED" == b.type ? null != a ? sn(t(a) ? a : [a], b) : null != b.defaultValue ? t(b.defaultValue) ? b.defaultValue : [b.defaultValue] : [] : "IDLIST" == b.type ? tn(a, b) : null;
            return c
        }

        function tn(a, b) {
            function c(a) {
                return Ga(a.split(/ +/), function(a) {
                    return "" != a
                })
            }
            return null != a ? sn(c(a), b) : null != b.defaultValue ? t(b.defaultValue) ? b.defaultValue : [b.defaultValue] : []
        }

        function sn(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = b.a(a[d]);
                b.b(e) && c.push(e)
            }
            return c.length ? c : null != b.defaultValue ? t(b.defaultValue) ? b.defaultValue : [b.defaultValue] : []
        }

        function fn() {
            this.a = un;
            this.b = vn
        }
        fn.prototype.type = "OPTIONAL";
        fn.prototype.defaultValue = null;

        function un(a) {
            return null == a ? null : a.toString()
        }

        function vn(a) {
            return null != a
        };

        function wn(a) {
            this.value = a
        }

        function xn(a) {
            a = pn(a, "value");
            return new wn(a)
        };

        function yn() {}

        function zn(a) {
            var b = jn(a, "external_user_id", "OPTIONAL");
            a = jn(a, "subscription_token", "OPTIONAL");
            return b && a ? new yn : null
        };

        function An(a, b, c, d) {
            this.value = a;
            this.target = b;
            this.a = c;
            this.b = d
        }
        var Bn = {
            Tu: "current",
            dz: "new"
        };

        function Cn(a) {
            var b = jn(a, "value", "OPTIONAL");
            if (null == b || null == mi(b)) return null;
            var c = kn(a, "target", Bn, "OPTIONAL", "current");
            if (null == c) return null;
            ln(a, "trusted", !1);
            var d = jn(a, "link_class", "OPTIONAL", "");
            a = ln(a, "show_link_icon", !0);
            return new An(b, c, d, a)
        }

        function Dn(a) {
            return a.value ? a.value : null
        };

        function En(a, b, c, d) {
            this.type = a;
            this.trigger = b;
            this.url = c;
            this.duration = d
        }
        var Fn = {
                Ks: "close",
                $y: "log",
                hz: "openUrl",
                PAUSE: "pause",
                Ps: "subscribe"
            },
            Gn = {
                CLICK: "click",
                Ks: "close",
                Ms: "hidden",
                uz: "rollOut",
                Ns: "rollOver",
                Os: "shown"
            };

        function Hn(a) {
            var b = kn(a, "type", Fn, "OPTIONAL"),
                c = kn(a, "trigger", Gn, "OPTIONAL"),
                d = rn(a, "url", Cn, "OPTIONAL");
            rn(a, "subscribeData", zn, "OPTIONAL");
            a = rn(a, "duration", xn, "OPTIONAL");
            return b ? new En(b, c, d, a) : null
        };

        function In(a, b, c, d, e, g, h, k, m, p, r, n, w, L) {
            this.k = a;
            this.j = b;
            this.o = c;
            this.C = d;
            this.a = e;
            this.F = g;
            this.i = h;
            this.textAlign = k;
            this.H = m;
            this.A = p;
            this.padding = r;
            this.b = n;
            this.g = w;
            this.B = L
        }

        function Jn(a) {
            var b = hn(a, "fgColor", "#1A1A1A"),
                c = hn(a, "bgColor", "#FFF"),
                d = hn(a, "borderColor", "#000"),
                e = on(a, "borderWidth", 10, 0, 5, !1, 0),
                g = on(a, "bgAlpha", 10, 0, 1, !1, 0.8);
            on(a, "borderAlpha", 10, 0, 1, !1, 0.2);
            on(a, "gloss", 16, 0, 255, !1, 0);
            var h = hn(a, "highlightFontColor", "#F2F2F2"),
                k = on(a, "highlightWidth", 10, 0, 5, !1, 3),
                m = jn(a, "textAlign", "OPTIONAL", ""),
                p = on(a, "textSize", 10, 3.3, 30.1, !0, 3.6107),
                r = jn(a, "fontWeight", "OPTIONAL", ""),
                n;
            n = (n = a ? a.padding && a.padding.length ? a.padding[0] : a.padding : null) ? new rb(parseFloat(n.top),
                parseFloat(n.right), parseFloat(n.bottom), parseFloat(n.left)) : null;
            n = !n || null == n.top || isNaN(n.top) || null == n.right || isNaN(n.right) || null == n.bottom || isNaN(n.bottom) || null == n.left || isNaN(n.left) ? null : n;
            var w = jn(a, "effects", "IDLIST"),
                L = on(a, "cornerRadius", 10, 0, 10, !0, 0);
            a = rn(a, "gradient", Kn, "OPTIONAL");
            return new In(b, c, d, e, g, h, k, m, p, r, n, w, L, a)
        }

        function Ln(a, b, c, d, e, g, h, k) {
            this.j = a;
            this.o = b;
            this.k = c;
            this.C = d;
            this.a = e;
            this.b = g;
            this.g = h;
            this.i = k
        }

        function Kn(a) {
            var b = on(a, "x1", 10, 0, 100, !0, 0),
                c = on(a, "y1", 10, 0, 100, !0, 0),
                d = on(a, "x2", 10, 0, 100, !0, 100),
                e = on(a, "y2", 10, 0, 100, !0, 100),
                g = hn(a, "color1", "#FFF"),
                h = hn(a, "color2", "#000"),
                k = on(a, "opacity1", 10, 0, 100, !0, 100);
            a = on(a, "opacity2", 10, 0, 100, !0, 0);
            return new Ln(b, c, d, e, g, h, k, a)
        };

        function Mn(a, b) {
            this.a = a;
            this.K = b
        }

        function Nn(a) {
            var b = jn(a, "standard_url", "OPTIONAL", "");
            jn(a, "rollover_url", "OPTIONAL", "");
            jn(a, "click_url", "OPTIONAL", "");
            a = jn(a, "video_id", "OPTIONAL", "");
            return new Mn(b, a)
        };

        function On(a, b, c) {
            var d = a.C,
                e = a.A,
                g = a.a ? a.a : "xy",
                h = Pn(c, a.j, g);
            a = Qn(c, a.g, g);
            var g = 640 * b.width * h / 100,
                k = 360 * b.height * a / 100;
            return new ub(0 == d ? 640 * b.left * h / 100 : 0 < d ? d : c.width + d - g, 0 == e ? 360 * b.top * a / 100 : 0 < e ? e : c.height + e - k, g, k)
        }

        function Pn(a, b, c) {
            var d = (c = "xx" == c || "xy" == c) ? 640 : 360;
            return (d + ((c ? a.width : a.height) - d) * b) / d
        }

        function Qn(a, b, c) {
            var d = (c = "xy" == c || "yy" == c) ? 360 : 640;
            return (d + ((c ? a.height : a.width) - d) * b) / d
        };

        function Rn(a, b, c, d, e, g, h, k, m, p, r) {
            this.x = a;
            this.y = b;
            this.k = c;
            this.i = d;
            this.b = e;
            this.o = g;
            this.C = h;
            this.A = k;
            this.j = m;
            this.g = p;
            this.a = r
        }

        function Sn(a, b) {
            var c = mn(a, "x", 0),
                d = mn(a, "y", 0),
                e = mn(a, "w", 0),
                g = mn(a, "h", 0),
                h = pn(a, "t"),
                k = nn(a),
                m = mn(a, "px", 0),
                p = mn(a, "py", 0),
                r = mn(a, "scaleSlope", 1),
                n = mn(a, "scaleSlopeX", r),
                r = mn(a, "scaleSlopeY", r),
                w = jn(a, "scaleDimension", "OPTIONAL", "xy");
            return b(c, d, e, g, h, k, m, p, n, r, w)
        }

        function Tn(a, b, c) {
            c = c ? Tn(c, b) : null;
            a = On(a, new ub(a.x, a.y, a.k, a.i), b);
            c ? (a.top += c.top, a.left += c.left) : (a.top += b.top, a.left += b.left);
            c = a.clone();
            b && !b.contains(a) && (a.width < b.width ? c.left = ob(a.left, b.left, b.left + b.width - a.width) : (c.left = b.left, c.width = b.width), a.height < b.height ? c.top = ob(a.top, b.top, b.top + b.height - a.height) : (c.top = b.top, c.height = b.height));
            return c
        }

        function Un(a) {
            return Sn(a, function(a, c, d, e, g, h, k, m, p, r, n) {
                return new Rn(a, c, d, e, g, h, k, m, p, r, n)
            })
        };

        function Vn(a, b, c, d, e, g, h, k, m, p, r, n, w) {
            Rn.call(this, a, b, c, d, e, k, m, p, r, n, w);
            this.B = g;
            this.F = h
        }
        A(Vn, Rn);

        function Wn(a) {
            var b = mn(a, "sx", 0),
                c = mn(a, "sy", 0);
            return Sn(a, function(a, e, g, h, k, m, p, r, n, w, L) {
                return new Vn(a, e, g, h, k, b, c, m, p, r, n, w, L)
            })
        };

        function Xn(a, b, c) {
            this.type = a;
            this.b = b;
            this.a = c
        }
        var Yn = {
            Is: "anchored",
            pz: "rect"
        };

        function Zn(a) {
            var b = kn(a, "type", Yn, "OPTIONAL", "rect"),
                c = rn(a, "rectRegion", Un, "REPEATED");
            a = rn(a, "anchoredRegion", Wn, "REPEATED");
            return new Xn(b, c, a)
        }

        function $n(a) {
            return a.b && a.b.length ? a.b[0] : a.a && a.a.length ? a.a[0] : null
        };

        function ao(a, b) {
            this.b = a;
            this.a = b
        }

        function bo(a) {
            en(a, "timeRelative", "OPTIONAL");
            var b = en(a, "spaceRelative", "OPTIONAL");
            return (a = rn(a, "movingRegion", Zn, "REPEATED")) ? new ao(b, a) : null
        };

        function co(a, b) {
            this.state = a;
            this.a = b
        }
        var eo = {
            jz: "playerControlShow",
            Ns: "rollOver",
            Os: "shown"
        };

        function fo(a) {
            var b = kn(a, "state", eo, "OPTIONAL");
            a = en(a, "ref", "OPTIONAL", "");
            return b ? new co(b, a) : null
        };

        function go(a, b, c, d) {
            this.a = a || [];
            this.g = b || [];
            this.i = c;
            this.b = d
        }

        function ho(a) {
            var b = rn(a, "condition", fo, "REPEATED"),
                c = rn(a, "notCondition", fo, "REPEATED"),
                d = ln(a, "show_delay", !1);
            a = ln(a, "hide_delay", !1);
            return b || c ? new go(b, c, d, a) : null
        }

        function io(a, b, c) {
            B(a.a, oa(b, !1), c);
            B(a.g, oa(b, !0), c)
        };

        function jo(a, b, c, d, e, g, h, k, m, p, r, n, w, L, N, D) {
            this.id = a;
            this.author = b;
            this.type = c;
            this.style = d;
            this.o = e;
            this.a = g;
            this.g = h || [];
            this.B = k || [];
            this.b = m;
            this.F = p;
            this.j = r;
            this.C = n;
            this.i = w;
            this.k = L;
            this.data = N;
            this.A = D
        }
        var ko = {
                Is: "anchored",
                Mu: "channel",
                Ky: "highlightText",
                Uy: "label",
                lz: "popup",
                xz: "speech",
                Ps: "subscribe",
                Ez: "title",
                VIDEO: "video"
            },
            lo = {
                Uu: "custom",
                Jy: "highlight",
                IMAGE: "image",
                PAUSE: "pause",
                TEXT: "text",
                fA: "widget"
            },
            mo = {
                Oz: "video_relative",
                kz: "player_relative"
            };

        function no(a) {
            var b = en(a, "id", "REQUIRED"),
                c = en(a, "author", "OPTIONAL"),
                d = kn(a, "type", lo, "REQUIRED"),
                e = kn(a, "style", ko, "OPTIONAL"),
                g = jn(a, "TEXT", "OPTIONAL"),
                h = rn(a, "data", function(a) {
                    return 0 != a.length ? fb(a) : {}
                }, "OPTIONAL", {}),
                k = rn(a, "segment", bo, "OPTIONAL"),
                m = rn(a, "action", Hn, "REPEATED"),
                p = rn(a, "trigger", ho, "REPEATED"),
                r = rn(a, "appearance", Jn, "OPTIONAL");
            r || (r = Jn({}));
            var n = kn(a, "coordinate_system", mo, "OPTIONAL", "video_relative"),
                w = rn(a, "image_source", Nn, "OPTIONAL"),
                L = ln(a, "closeable", !0),
                N = ln(a, "logable", !0),
                D = jn(a, "html_blob", "OPTIONAL", "");
            a = jn(a, "log_data", "OPTIONAL", "");
            return b && d ? new jo(b, c, d, e, g, k, m, p, r, n, w, L, N, D, h, a) : null
        }

        function Xm(a) {
            return (a = Ka(a.g, function(a) {
                return null != a.url
            }, void 0)) ? a.url : null
        }

        function oo(a) {
            return Ha(a.g, function(a) {
                return null != a.url && a.url.b
            }, void 0)
        }

        function po(a) {
            return Ha(a.g, function(a) {
                return "click" == a.trigger
            }, void 0)
        }

        function qo(a, b, c) {
            B(a.g, b, c)
        }

        function ro(a, b, c) {
            B(a.B, b, c)
        }

        function so(a, b) {
            C(a.B, b, void 0)
        }

        function to(a) {
            return (a = a.a ? a.a.a.length ? a.a.a[0] : null : null) ? $n(a) : null
        }

        function uo(a, b) {
            var c = to(a);
            return c && b ? Pn(b, c.j, c.a ? c.a : "xy") : 1
        }

        function vo(a, b) {
            var c = to(a);
            return c && b ? Qn(b, c.g, c.a ? c.a : "xy") : 1
        };

        function wo(a, b, c) {
            this.a = {};
            this.b = !1;
            this.j = "ivTrigger:" + a;
            this.g = c;
            io(b, function(a, b) {
                var c = xo(b.state, b.a);
                this.g.D(c, v(this.i, this, c, a));
                this.a[c] = !1
            }, this)
        }
        wo.prototype.i = function(a, b, c, d) {
            this.a[a] = b ? !c : c;
            a = xb(this.a, function(a) {
                return a
            });
            this.b != a && (this.b = a, this.g.u(this.j, a, d))
        };

        function xo(a, b) {
            var c = "ivTriggerCondition:" + a;
            return b ? c + ":" + b : c
        };

        function yo(a, b, c) {
            this.i = a;
            this.Ra = b;
            this.b = c;
            this.a = null;
            this.Lb = this.isVisible = !1;
            zo(b, a)
        }

        function zo(a, b) {
            so(a, function(c) {
                return new wo(a.id, c, b)
            })
        }
        yo.prototype.hide = function() {
            this.isVisible = !1;
            this.i.Q("onResize", this.g, this);
            this.b.hide()
        };
        yo.prototype.show = function() {
            this.isVisible = !0;
            this.b.show();
            this.i.D("onResize", this.g, this)
        };
        yo.prototype.destroy = function() {
            this.i.Q("onResize", this.g, this);
            var a = this.b;
            a.i.removeAll();
            a.$ && Ic(a.$);
            a.qa && a.qa.P() && Ic(a.qa.P());
            Ao(this)
        };

        function Ao(a) {
            a.a && (a.a.stop(), a.a = null)
        }
        yo.prototype.g = function() {
            Bo(this.b)
        };

        function Co() {};

        function Do(a, b, c, d, e, g, h, k) {
            this.j = a;
            this.o = b;
            this.k = c;
            this.C = d;
            this.a = e;
            this.b = g;
            this.g = s(h) ? h : null;
            this.i = s(k) ? k : null
        }
        A(Do, Co);

        function Eo() {
            this.lb = [];
            this.M = [];
            this.Wc = []
        }
        Eo.prototype.Ze = null;
        Eo.prototype.wc = null;
        Eo.prototype.Eh = !0;
        var Fo = [2, 2, 6, 6, 0];
        f = Eo.prototype;
        f.clear = function() {
            this.lb.length = 0;
            this.M.length = 0;
            this.Wc.length = 0;
            delete this.Ze;
            delete this.wc;
            delete this.Eh;
            return this
        };

        function Go(a, b, c) {
            0 == Da(a.lb) ? a.Wc.length -= 2 : (a.lb.push(0), a.M.push(1));
            a.Wc.push(b, c);
            a.wc = a.Ze = [b, c]
        }
        f.ra = function(a) {
            var b = Da(this.lb);
            if (null == b) throw Error("Path cannot start with lineTo");
            1 != b && (this.lb.push(1), this.M.push(0));
            for (b = 0; b < arguments.length; b += 2) {
                var c = arguments[b],
                    d = arguments[b + 1];
                this.Wc.push(c, d)
            }
            this.M[this.M.length - 1] += b / 2;
            this.wc = [c, d]
        };
        f.close = function() {
            var a = Da(this.lb);
            if (null == a) throw Error("Path cannot start with close");
            4 != a && (this.lb.push(4), this.M.push(1), this.wc = this.Ze);
            return this
        };

        function Ho(a, b, c, d, e) {
            var g = a.wc[0] - b * Math.cos(d * Math.PI / 180),
                h = a.wc[1] - c * Math.sin(d * Math.PI / 180),
                g = g + b * Math.cos((d + e) * Math.PI / 180),
                h = h + c * Math.sin((d + e) * Math.PI / 180);
            a.lb.push(3);
            a.M.push(1);
            a.Wc.push(b, c, d, e, g, h);
            a.Eh = !1;
            a.wc = [g, h]
        }

        function Io(a, b) {
            for (var c = a.Wc, d = 0, e = 0, g = a.lb.length; e < g; e++) {
                var h = a.lb[e],
                    k = Fo[h] * a.M[e];
                b(h, c.slice(d, d + k));
                d += k
            }
        }
        f.clone = function() {
            var a = new this.constructor;
            a.lb = this.lb.concat();
            a.M = this.M.concat();
            a.Wc = this.Wc.concat();
            a.Ze = this.Ze && this.Ze.concat();
            a.wc = this.wc && this.wc.concat();
            a.Eh = this.Eh;
            return a
        };
        f.isEmpty = function() {
            return 0 == this.lb.length
        };

        function Jo(a, b) {
            this.A = a;
            this.B = null == b ? 1 : b
        }
        A(Jo, Co);

        function Ko(a, b) {
            this.a = a;
            this.b = b
        };

        function Lo(a) {
            this.b = a;
            this.a = {}
        }
        A(Lo, kf);
        var Mo = [];
        f = Lo.prototype;
        f.listen = function(a, b, c, d, e) {
            t(b) || (Mo[0] = b, b = Mo);
            for (var g = 0; g < b.length; g++) {
                var h = Yg(a, b[g], c || this, d || !1, e || this.b || this);
                if (!h) break;
                this.a[h.key] = h
            }
            return this
        };
        f.yd = function(a, b, c, d, e) {
            if (t(b))
                for (var g = 0; g < b.length; g++) this.yd(a, b[g], c, d, e);
            else e = e || this.b || this, c = Zg(c || this), d = !!d, b = Ng(a) ? Ug(a.uc, b, c, d, e) : a ? (a = ch(a)) ? Ug(a, b, c, d, e) : null : null, b && (dh(b), delete this.a[b.key]);
            return this
        };
        f.removeAll = function() {
            wb(this.a, dh);
            this.a = {}
        };
        f.I = function() {
            Lo.G.I.call(this);
            this.removeAll()
        };
        f.handleEvent = function() {
            throw Error("EventHandler.handleEvent not implemented");
        };

        function No() {}
        ca(No);
        No.prototype.a = 0;
        No.getInstance();

        function Oo(a) {
            ih.call(this);
            this.o = a || vc()
        }
        A(Oo, ih);
        f = Oo.prototype;
        f.mr = No.getInstance();
        f.pa = null;
        f.de = !1;
        f.zd = null;
        f.th = null;
        f.uh = null;
        f.fg = null;
        f.getId = function() {
            return this.pa || (this.pa = ":" + (this.mr.a++).toString(36))
        };
        f.P = function() {
            return this.zd
        };
        f.Kj = function(a) {
            if (this.th && this.th != a) throw Error("Method not supported");
            Oo.G.Kj.call(this, a)
        };
        f.jn = function() {
            this.zd = this.o.createElement("div")
        };
        f.eg = function() {
            Po(this, function(a) {
                a.de && a.eg()
            });
            this.j && this.j.removeAll();
            this.de = !1
        };
        f.I = function() {
            this.de && this.eg();
            this.j && (this.j.dispose(), delete this.j);
            Po(this, function(a) {
                a.dispose()
            });
            this.zd && Ic(this.zd);
            this.th = this.zd = this.fg = this.uh = null;
            Oo.G.I.call(this)
        };

        function Po(a, b) {
            a.uh && B(a.uh, b, void 0)
        }
        f.removeChild = function(a, b) {
            if (a) {
                var c = u(a) ? a : a.getId();
                a = this.fg && c ? (c in this.fg ? this.fg[c] : void 0) || null : null;
                if (c && a) {
                    var d = this.fg;
                    c in d && delete d[c];
                    Qa(this.uh, a);
                    b && (a.eg(), a.zd && Ic(a.zd));
                    c = a;
                    if (null == c) throw Error("Unable to set parent component");
                    c.th = null;
                    Oo.G.Kj.call(c, null)
                }
            }
            if (!a) throw Error("Child is not in parent component");
            return a
        };

        function Qo(a, b, c, d, e) {
            Oo.call(this, e);
            this.width = a;
            this.height = b;
            this.g = c || null;
            this.k = d || null
        }
        A(Qo, Oo);
        Qo.prototype.b = null;
        Qo.prototype.$f = function() {
            return this.de ? fd(this.P()) : ga(this.width) && ga(this.height) ? new G(this.width, this.height) : null
        };

        function Ro(a) {
            var b = a.$f();
            return b ? b.width / (a.g ? new G(a.g, a.k) : a.$f()).width : 0
        };

        function So(a, b) {
            ih.call(this);
            this.gg = a;
            this.mi = b;
            this[Mg] = !1
        }
        A(So, ih);
        f = So.prototype;
        f.mi = null;
        f.gg = null;
        f.P = function() {
            return this.gg
        };
        f.addEventListener = function(a, b, c, d) {
            Yg(this.gg, a, b, c, d)
        };
        f.removeEventListener = function(a, b, c, d) {
            bh(this.gg, a, b, c, d)
        };
        f.I = function() {
            So.G.I.call(this);
            var a = this.gg;
            if (a) Ng(a) ? a.uc && a.uc.removeAll(void 0) : eh(ja(a), void 0);
            else {
                var a = 0,
                    b;
                for (b in Wg) a += eh(b)
            }
        };

        function To(a, b, c, d) {
            So.call(this, a, b);
            a = this.mi;
            b = this.P();
            c ? (b.setAttribute("stroke", c.b), c = c.a, u(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / Ro(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
            c = this.mi;
            a = this.P();
            if (d instanceof Jo) a.setAttribute("fill", d.A), a.setAttribute("fill-opacity", d.B);
            else if (d instanceof Do) {
                b = "lg-" + d.j + "-" + d.o + "-" + d.k + "-" + d.C + "-" + d.a + "-" + d.b;
                var e = b in c.a ? c.a[b] : null;
                if (!e) {
                    var e = Uo(c, "linearGradient", {
                            x1: d.j,
                            y1: d.o,
                            x2: d.k,
                            y2: d.C,
                            gradientUnits: "userSpaceOnUse"
                        }),
                        g = "stop-color:" + d.a;
                    ga(d.g) && (g += ";stop-opacity:" + d.g);
                    g = Uo(c, "stop", {
                        offset: "0%",
                        style: g
                    });
                    e.appendChild(g);
                    g = "stop-color:" + d.b;
                    ga(d.i) && (g += ";stop-opacity:" + d.i);
                    d = Uo(c, "stop", {
                        offset: "100%",
                        style: g
                    });
                    e.appendChild(d);
                    e = Vo(c, b, e)
                }
                a.setAttribute("fill", "url(#" + e + ")")
            } else a.setAttribute("fill", "none")
        }
        A(To, So);

        function Wo(a, b) {
            So.call(this, a, b)
        }
        A(Wo, So);

        function Xo(a, b) {
            So.call(this, a, b)
        }
        A(Xo, So);

        function Yo(a, b, c, d) {
            To.call(this, a, b, c, d)
        }
        A(Yo, To);

        function Zo(a, b) {
            So.call(this, a, b)
        }
        A(Zo, Wo);
        Zo.prototype.clear = function() {
            Hc(this.P())
        };

        function $o(a, b, c, d) {
            To.call(this, a, b, c, d)
        }
        A($o, Yo);

        function ap(a, b) {
            So.call(this, a, b)
        }
        A(ap, Xo);

        function bp(a, b, c, d, e) {
            Qo.call(this, a, b, c, d, e);
            this.a = {};
            this.C = Wb && !I(526);
            this.A = new Lo(this)
        }
        var cp;
        A(bp, Qo);
        var dp = 0;

        function Uo(a, b, c) {
            a = a.o.a.createElementNS("http://www.w3.org/2000/svg", b);
            if (c)
                for (var d in c) a.setAttribute(d, c[d]);
            return a
        }
        f = bp.prototype;
        f.jn = function() {
            var a = Uo(this, "svg", {
                    width: this.width,
                    height: this.height,
                    overflow: "hidden"
                }),
                b = Uo(this, "g");
            this.i = Uo(this, "defs");
            this.b = new Zo(b, this);
            a.appendChild(this.i);
            a.appendChild(b);
            this.zd = a;
            this.g && (this.P().setAttribute("preserveAspectRatio", "none"), this.C ? this.Am() : this.P().setAttribute("viewBox", "0 0 " + (this.g ? this.g + " " + this.k : "")))
        };
        f.Am = function() {
            if (this.de) {
                var a = this.$f();
                0 == a.width ? this.P().style.visibility = "hidden" : (this.P().style.visibility = "", this.b.P().setAttribute("transform", "scale(" + a.width / this.g + " " + a.height / this.k + ") translate(0 0)"))
            }
        };
        f.$f = function() {
            if (!Vb) return this.de ? fd(this.P()) : bp.G.$f.call(this);
            var a = this.width,
                b = this.height,
                c = u(a) && -1 != a.indexOf("%"),
                d = u(b) && -1 != b.indexOf("%");
            if (!this.de && (c || d)) return null;
            var e, g;
            c && (e = this.P().parentNode, g = fd(e), a = parseFloat(a) * g.width / 100);
            d && (e = e || this.P().parentNode, g = g || fd(e), b = parseFloat(b) * g.height / 100);
            return new G(a, b)
        };
        f.clear = function() {
            this.b.clear();
            Hc(this.i);
            this.a = {}
        };

        function ep(a, b, c, d) {
            b = Uo(a, "path", {
                d: fp(b)
            });
            c = new $o(b, a, c, d);
            a.b.P().appendChild(c.P())
        }

        function fp(a) {
            var b = [];
            Io(a, function(a, d) {
                switch (a) {
                    case 0:
                        b.push("M");
                        Array.prototype.push.apply(b, d);
                        break;
                    case 1:
                        b.push("L");
                        Array.prototype.push.apply(b, d);
                        break;
                    case 2:
                        b.push("C");
                        Array.prototype.push.apply(b, d);
                        break;
                    case 3:
                        var e = d[3];
                        b.push("A", d[0], d[1], 0, 180 < Math.abs(e) ? 1 : 0, 0 < e ? 1 : 0, d[4], d[5]);
                        break;
                    case 4:
                        b.push("Z")
                }
            });
            return b.join(" ")
        }

        function Vo(a, b, c) {
            if (b in a.a) return a.a[b];
            var d = "_svgdef_" + dp++;
            c.setAttribute("id", d);
            a.a[b] = d;
            a.i.appendChild(c);
            return d
        }
        f.eg = function() {
            bp.G.eg.call(this);
            this.C && this.A.yd(gp(), "tick", this.Am)
        };
        f.I = function() {
            delete this.a;
            delete this.i;
            delete this.b;
            bp.G.I.call(this)
        };

        function gp() {
            cp || (cp = new lh(400), cp.start());
            return cp
        };

        function hp(a, b, c) {
            this.a = a;
            this.b = 0;
            this.i = b;
            c && (this.zl = c)
        }
        f = hp.prototype;
        f.zl = 70;
        f.Gi = !1;
        f.start = function(a) {
            this.k = y();
            this.b = a;
            this.j = this.k + this.b;
            this.Gi = !0;
            Fl(this.a);
            Ke(this.g);
            this.g = Je(v(this.Wp, this), this.zl)
        };
        f.stop = function() {
            this.Gi = !1;
            Gl(this.a);
            this.g && Ke(this.g)
        };
        f.Wp = function() {
            if (this.Gi) {
                var a = y(),
                    b;
                b = 0 == this.b || a >= this.j ? 0 : 1 - (a - this.k) / this.b;
                var c = K("countdowntimer-diminishing-pieslice", this.a),
                    d;
                d = yc("svg", null, this.a);
                d = d.length ? d[0] : null;
                !d && this.a.querySelectorAll && (d = this.a.querySelectorAll("svg"), d = d.length ? d[0] : null);
                d = parseInt(d.getAttribute("width"), 10);
                var e = new Eo,
                    g = d / 2 - 5;
                Go(e, d / 2, d / 2);
                e.ra(d / 2, 5);
                Ho(e, g, g, -90, 360 * -b);
                e.ra(d / 2, d / 2);
                e.close();
                c.setAttribute("d", fp(e));
                a >= this.j && (this.stop(), this.i && this.i())
            }
        };

        function ip(a) {
            this.a = a
        }
        var jp = /\s*;\s*/;
        f = ip.prototype;
        f.set = function(a, b, c, d, e, g) {
            if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
            if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
            s(c) || (c = -1);
            e = e ? ";domain=" + e : "";
            d = d ? ";path=" + d : "";
            g = g ? ";secure" : "";
            c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
            this.a.cookie = a + "=" + b + e + d + c + g
        };
        f.get = function(a, b) {
            for (var c = a + "=", d = (this.a.cookie || "").split(jp), e = 0, g; g = d[e]; e++) {
                if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
                if (g == a) return ""
            }
            return b
        };
        f.remove = function(a, b, c) {
            var d = s(this.get(a));
            this.set(a, "", 0, b, c);
            return d
        };
        f.Hc = function() {
            return kp(this).keys
        };
        f.tc = function() {
            return kp(this).qr
        };
        f.isEmpty = function() {
            return !this.a.cookie
        };
        f.Xa = function() {
            return this.a.cookie ? (this.a.cookie || "").split(jp).length : 0
        };
        f.clear = function() {
            for (var a = kp(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
        };

        function kp(a) {
            a = (a.a.cookie || "").split(jp);
            for (var b = [], c = [], d, e, g = 0; e = a[g]; g++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return {
                keys: b,
                qr: c
            }
        }
        var lp = new ip(document);
        lp.b = 3950;

        function mp(a, b, c) {
            lp.set("" + a, b, c, "/", "192.168.1.184")
        };

        function np() {
            var a;
            if (a = lp.get("PREF", void 0)) {
                a = unescape(a).split("&");
                for (var b = 0; b < a.length; b++) {
                    var c = a[b].split("="),
                        d = c[0];
                    (c = c[1]) && (op[d] = c.toString())
                }
            }
        }
        ca(np);
        var op = q("yt.prefs.UserPrefs.prefs_") || {};
        z("yt.prefs.UserPrefs.prefs_", op);

        function pp(a) {
            if (/^f([1-9][0-9]*)$/.test(a)) throw "ExpectedRegexMatch: " + a;
        }

        function qp(a) {
            if (!/^\w+$/.test(a)) throw "ExpectedRegexMismatch: " + a;
        }
        np.prototype.get = function(a, b) {
            qp(a);
            pp(a);
            var c = void 0 !== op[a] ? op[a].toString() : null;
            return null != c ? c : b ? b : ""
        };
        np.prototype.set = function(a, b) {
            qp(a);
            pp(a);
            if (null == b) throw "ExpectedNotNull";
            op[a] = b.toString()
        };
        np.prototype.remove = function(a) {
            qp(a);
            pp(a);
            delete op[a]
        };
        np.prototype.clear = function() {
            op = {}
        };
        var rp = {
            vx: 0,
            $v: 1,
            Uv: 2,
            Vw: 3,
            aw: 4,
            Zx: 5,
            ay: 6,
            Yx: 7,
            Wx: 8,
            Xx: 9,
            $x: 10,
            Vx: 11,
            Cx: 12,
            Bx: 13,
            Ax: 14,
            Dw: 15,
            jx: 16,
            mx: 17,
            nx: 18,
            lx: 19,
            kx: 20,
            Ex: 21,
            ew: 22,
            Ux: 23,
            dw: 24,
            Cv: 25,
            fw: 26,
            Bw: 27,
            yx: 28,
            cw: 29,
            xx: 30,
            Lx: 31,
            Kx: 32,
            xw: 33,
            Ix: 34,
            Fx: 35,
            Gx: 36,
            Hx: 37,
            Jx: 38,
            Ww: 39,
            qx: 40,
            Dv: 41,
            px: 42,
            Fv: 43,
            Tv: 44,
            iw: 45,
            gx: 46,
            Nx: 47,
            by: 48,
            cy: 49,
            fy: 50,
            zx: 51,
            Sv: 52,
            Wv: 53,
            hx: 54,
            Rw: 55,
            gw: 56,
            wx: 57,
            tx: 58,
            Aw: 59,
            bx: 60,
            Sw: 61,
            Xw: 62,
            Ev: 63,
            Rx: 64,
            Lv: 65,
            Jv: 66,
            Yw: 67,
            Zv: 68,
            ow: 69,
            Lw: 70,
            cx: 71,
            Cw: 72,
            ux: 73,
            Zw: 74,
            Ox: 75,
            Iv: 76,
            ox: 77,
            qw: 78,
            Px: 79,
            Tw: 80,
            Vv: 81,
            ax: 82,
            Mw: 83,
            Ow: 84,
            Nw: 85,
            Pw: 86,
            Qw: 87,
            Mv: 88,
            Bv: 89,
            Nv: 90,
            ix: 91,
            fx: 92,
            Yv: 93,
            ey: 94,
            ww: 95,
            uw: 96,
            yw: 97,
            Uw: 98,
            jw: 99,
            $w: 100,
            Fw: 101,
            Ew: 102,
            Hw: 103,
            Iw: 104,
            Gw: 105,
            Qx: 106,
            Ls: 107,
            rw: 108,
            sx: 109,
            tw: 110,
            Jw: 111,
            Kw: 112,
            rx: 113,
            bw: 114,
            Tx: 115,
            Sx: 116,
            Mx: 117,
            Xv: 118,
            hw: 119,
            kw: 120,
            mw: 121,
            Kv: 122,
            Ov: 123,
            lw: 124,
            Rv: 125,
            Pv: 126,
            Qv: 127,
            Hv: 128,
            Gv: 129,
            zw: 130
        };
        var sp = q("yt.pubsub.instance_") || new Cg;
        Cg.prototype.subscribe = Cg.prototype.D;
        Cg.prototype.unsubscribeByKey = Cg.prototype.xd;
        Cg.prototype.publish = Cg.prototype.u;
        Cg.prototype.clear = Cg.prototype.clear;
        z("yt.pubsub.instance_", sp);

        function tp(a, b, c) {
            var d = up();
            d && d.subscribe(a, function() {
                var a = arguments;
                try {
                    O(function() {
                        b.apply(c || l, a)
                    }, 0)
                } catch (d) {
                    Le(d)
                }
            }, c)
        }

        function vp(a, b) {
            var c = up();
            return c ? c.publish.apply(c, arguments) : !1
        }

        function wp(a) {
            var b = up();
            b && b.clear(a)
        }

        function up() {
            return q("yt.pubsub.instance_")
        };

        function xp(a, b, c, d, e, g) {
            var h, k;
            if (h = c.offsetParent) {
                var m = "HTML" == h.tagName || "BODY" == h.tagName;
                m && "static" == Wc(h, "position") || (k = bd(h), m || (m = (m = cd(h)) && Vb ? -h.scrollLeft : !m || H && I("8") || "visible" == Wc(h, "overflowX") ? h.scrollLeft : h.scrollWidth - h.clientWidth - h.scrollLeft, k = qb(k, new F(m, h.scrollTop))))
            }
            h = k || new F;
            k = hd(a);
            if (m = ad(a)) {
                var p = vb(m),
                    m = Math.max(k.left, p.left),
                    r = Math.min(k.left + k.width, p.left + p.width);
                if (m <= r) {
                    var n = Math.max(k.top, p.top),
                        p = Math.min(k.top + k.height, p.top + p.height);
                    n <= p && (k.left =
                        m, k.top = n, k.width = r - m, k.height = p - n)
                }
            }
            m = vc(a);
            n = vc(c);
            if (m.a != n.a) {
                var r = m.a.body,
                    n = n.a.parentWindow || n.a.defaultView,
                    p = new F(0, 0),
                    w = xc(r) ? xc(r).parentWindow || xc(r).defaultView : window,
                    L = r;
                do {
                    var N;
                    if (w == n) N = bd(L);
                    else {
                        var D = L;
                        N = void 0;
                        if (D.getBoundingClientRect) N = Zc(D), N = new F(N.left, N.top);
                        else {
                            N = Tc(vc(D));
                            var pb = bd(D);
                            N = new F(pb.x - N.x, pb.y - N.y)
                        }
                        if (Vb && !I(12)) {
                            pb = void 0;
                            H ? pb = "-ms-transform" : Wb ? pb = "-webkit-transform" : Ub ? pb = "-o-transform" : Vb && (pb = "-moz-transform");
                            var jg = void 0;
                            pb && (jg = Wc(D, pb));
                            jg ||
                                (jg = Wc(D, "transform"));
                            D = jg ? (D = jg.match(ud)) ? new F(parseFloat(D[1]), parseFloat(D[2])) : new F(0, 0) : new F(0, 0);
                            N = new F(N.x + D.x, N.y + D.y)
                        }
                    }
                    p.x += N.x;
                    p.y += N.y
                } while (w && w != n && (L = w.frameElement) && (w = w.parent));
                r = qb(p, bd(r));
                H && !Sc(m) && (r = qb(r, Tc(m)));
                k.left += r.x;
                k.top += r.y
            }
            a = (b & 4 && cd(a) ? b ^ 2 : b) & -5;
            b = new F(a & 2 ? k.left + k.width : k.left, a & 1 ? k.top + k.height : k.top);
            b = qb(b, h);
            e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
            if (e = ad(c)) e.top -= h.y, e.right -= h.x, e.bottom -= h.y, e.left -= h.x;
            a = b.clone();
            h = (d & 4 && cd(c) ? d ^ 2 : d) & -5;
            b = fd(c);
            d = b.clone();
            if (g || 0 != h) h & 2 ? a.x -= d.width + (g ? g.right : 0) : g && (a.x += g.left), h & 1 ? a.y -= d.height + (g ? g.bottom : 0) : g && (a.y += g.top);
            e ? (g = a, h = 65, k = 0, 65 == (h & 65) && (g.x < e.left || g.x >= e.right) && (h &= -2), 132 == (h & 132) && (g.y < e.top || g.y >= e.bottom) && (h &= -5), g.x < e.left && h & 1 && (g.x = e.left, k |= 1), g.x < e.left && g.x + d.width > e.right && h & 16 && (d.width = Math.max(d.width - (g.x + d.width - e.right), 0), k |= 4), g.x + d.width > e.right && h & 1 && (g.x = Math.max(e.right - d.width, e.left), k |= 1), h & 2 && (k = k | (g.x < e.left ? 16 : 0) | (g.x + d.width > e.right ? 32 : 0)), g.y <
                e.top && h & 4 && (g.y = e.top, k |= 2), g.y <= e.top && g.y + d.height < e.bottom && h & 32 && (d.height = Math.max(d.height - (e.top - g.y), 0), g.y = e.top, k |= 8), g.y >= e.top && g.y + d.height > e.bottom && h & 32 && (d.height = Math.max(d.height - (g.y + d.height - e.bottom), 0), k |= 8), g.y + d.height > e.bottom && h & 4 && (g.y = Math.max(e.bottom - d.height, e.top), k |= 2), h & 8 && (k = k | (g.y < e.top ? 64 : 0) | (g.y + d.height > e.bottom ? 128 : 0)), g = k) : g = 256;
            g & 496 || (Xc(c, a), sb(b, d) || (e = Sc(vc(xc(c))), !H || e && I("8") ? (c = c.style, Vb ? c.MozBoxSizing = "border-box" : Wb ? c.WebkitBoxSizing = "border-box" :
                c.boxSizing = "border-box", c.width = Math.max(d.width, 0) + "px", c.height = Math.max(d.height, 0) + "px") : (g = c.style, e ? (e = ld(c), c = md(c), g.pixelWidth = d.width - c.left - e.left - e.right - c.right, g.pixelHeight = d.height - c.top - e.top - e.bottom - c.bottom) : (g.pixelWidth = d.width, g.pixelHeight = d.height))))
        };
        var yp = {},
            zp = "ontouchstart" in document;

        function Ap(a, b, c) {
            var d;
            switch (a) {
                case "mouseover":
                case "mouseout":
                    d = 3;
                    break;
                case "mouseenter":
                case "mouseleave":
                    d = 9
            }
            return Rc(c, function(a) {
                return E(rc(a), b)
            }, d)
        }

        function Bp(a) {
            var b = "mouseover" == a.type && "mouseenter" in yp || "mouseout" == a.type && "mouseleave" in yp,
                c = a.type in yp || b;
            if ("HTML" != a.target.tagName && c) {
                if (b) {
                    var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
                        c = yp[b],
                        d;
                    for (d in c.kb) {
                        var e = Ap(b, d, a.target);
                        e && !Rc(a.relatedTarget, function(a) {
                            return a == e
                        }) && c.u(d, e, b, a)
                    }
                }
                if (b = yp[a.type])
                    for (d in b.kb)(e = Ap(a.type, d, a.target)) && b.u(d, e, a.type, a)
            }
        }
        Q(document, "blur", Bp, !0);
        Q(document, "change", Bp, !0);
        Q(document, "click", Bp);
        Q(document, "focus", Bp, !0);
        Q(document, "mouseover", Bp);
        Q(document, "mouseout", Bp);
        Q(document, "mousedown", Bp);
        Q(document, "keydown", Bp);
        Q(document, "keyup", Bp);
        Q(document, "keypress", Bp);
        Q(document, "cut", Bp);
        Q(document, "paste", Bp);
        zp && (Q(document, "touchstart", Bp), Q(document, "touchend", Bp), Q(document, "touchcancel", Bp));
        z("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});

        function Cp() {}
        Cp.prototype.a = function(a, b, c) {
            var d = M(a, b);
            if (d && (d = q(d))) {
                var e = Xa(arguments, 2);
                Wa(e, 0, 0, a);
                d.apply(null, e)
            }
        };
        Cp.prototype.removeData = function(a, b) {
            a.dataset ? delete a.dataset[te(b)] : a.removeAttribute("data-" + b)
        };

        function Dp(a, b) {
            return "yt-uix" + (a.zn ? "-" + a.zn : "") + (b ? "-" + b : "")
        };

        function Ep() {}
        A(Ep, Cp);
        ca(Ep);
        f = Ep.prototype;
        f.zn = "button";
        f.Qm = null;

        function Fp(a, b) {
            var c = b.iframeMask;
            c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = Dp(a, "menu-mask"), b.iframeMask = c);
            return c
        }

        function Gp(a, b, c, d) {
            var e = Qc(b, Dp(a, "group")),
                g = !!M(b, "button-menu-ignore-group"),
                e = e && !g ? e : b,
                g = 5,
                h = 4,
                k = hd(b);
            if (E(rc(b), Dp(a, "reverse"))) {
                g = 4;
                h = 5;
                k = k.top + "px";
                try {
                    c.style.maxHeight = k
                } catch (m) {}
            }
            E(rc(b), "flip") && (E(rc(b), Dp(a, "reverse")) ? (g = 6, h = 7) : (g = 7, h = 6));
            var p;
            M(b, "button-has-sibling-menu") ? p = $c(e) : M(b, "button-menu-root-container") && (p = Hp(b));
            H && !I("8") && (p = null);
            var r;
            p && (r = hd(p), r = new rb(-r.top, r.left, r.top, -r.left));
            p = new F(0, 1);
            E(rc(b), Dp(a, "center-menu")) && (p.x -= Math.round((fd(c).width -
                fd(b).width) / 2));
            d && (p.y += Bc(document).y);
            if (a = Fp(a, b)) b = fd(c), a.style.width = b.width + "px", a.style.height = b.height + "px", xp(e, g, a, h, p, r), d && Il(a, "position", "fixed");
            xp(e, g, c, h, p, r)
        }

        function Hp(a) {
            if (M(a, "button-menu-root-container")) {
                var b = M(a, "button-menu-root-container");
                return Qc(a, b)
            }
            return document.body
        }
        f.Sm = function(a) {
            if (a) {
                var b = Ip(this, a);
                if (b) {
                    a.setAttribute("aria-pressed", "true");
                    a.setAttribute("aria-expanded", "true");
                    b.originalParentNode = b.parentNode;
                    b.activeButtonNode = a;
                    b.parentNode.removeChild(b);
                    var c;
                    c = M(a, "button-has-sibling-menu") ? a.parentNode : Hp(a);
                    c.appendChild(b);
                    b.style.minWidth = a.offsetWidth - 2 + "px";
                    var d = Fp(this, a);
                    d && c.appendChild(d);
                    c = !!M(a, "button-menu-fixed");
                    Gp(this, a, b, c);
                    Fl(b);
                    this.a(a, "button-menu-action", !0);
                    sc(a, Dp(this, "active"));
                    c = v(this.pr, this, a);
                    b = Q(document, "click",
                        c);
                    c = Q(document, "contextmenu", c);
                    se(a, "button-listener", b);
                    se(a, "button-context-menu-listener", c);
                    this.Qm = a
                }
            }
        };

        function Jp(a, b) {
            if (b) {
                var c = Ip(a, b);
                if (c) {
                    a.Qm = null;
                    b.setAttribute("aria-pressed", "false");
                    b.setAttribute("aria-expanded", "false");
                    b.removeAttribute("aria-activedescendant");
                    Gl(c);
                    a.a(b, "button-menu-action", !1);
                    var d = Fp(a, b);
                    O(function() {
                        d && d.parentNode && d.parentNode.removeChild(d);
                        c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = null, c.activeButtonNode = null)
                    }, 1)
                }
                var e = Qc(b, Dp(a, "group"));
                tc(b, Dp(a, "active"));
                e && tc(e, Dp(a, "group-active"));
                if (e = M(b, "button-listener")) Ve(e), a.removeData(b, "button-listener");
                if (e = M(b, "button-context-menu-listener")) Ve(e), a.removeData(b, "button-context-menu-listener")
            }
        }

        function Kp(a, b) {
            var c = Ip(a, b);
            c && Gp(a, b, c)
        }

        function Lp(a, b) {
            return Ip(a, b)
        }
        f.pr = function(a, b) {
            var c;
            c = b || window.event;
            c = c.target || c.srcElement;
            3 == c.nodeType && (c = c.parentNode);
            var d = Qc(c, Dp(this));
            if (d) {
                var d = Ip(this, d),
                    e = Ip(this, a);
                if (d == e) return
            }
            if (!Qc(c, Dp(this, "menu")) || E(rc(c), Dp(this, "menu-item")) || E(rc(c), Dp(this, "menu-close")))
                if (Jp(this, a), (d = Qc(c, Dp(this, "menu"))) && M(a, "button-menu-indicate-selected")) {
                    if (e = K(Dp(this, "content"), a)) {
                        var g;
                        pc && "innerText" in c ? g = c.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (g = [], Pc(c, g, !0), g = g.join(""));
                        g = g.replace(/ \xAD /g, " ").replace(/\xAD/g,
                            "");
                        g = g.replace(/\u200B/g, "");
                        pc || (g = g.replace(/ +/g, " "));
                        " " != g && (g = g.replace(/^\s*/, ""));
                        Mc(e, g)
                    }
                    e = Dp(this, "menu-item-selected");
                    (d = K(e, d)) && tc(d, e);
                    sc(c.parentNode, e)
                }
        };

        function Ip(a, b) {
            if (!b.widgetMenu) {
                var c = M(b, "button-menu-id"),
                    c = c && J(c),
                    d = Dp(a, "menu");
                c ? (sc(c, d), sc(c, Dp(a, "menu-external"))) : c = K(d, b);
                b.widgetMenu = c
            }
            return b.widgetMenu
        }
        f.click = function(a) {
            if (Ip(this, a)) {
                var b = Ip(this, a),
                    c = Qc(b.activeButtonNode || b.parentNode, Dp(this));
                c && c != a ? (Jp(this, c), O(v(this.Sm, this, a), 1)) : (b = J(b)) && "none" != b.style.display && !E(rc(b), "hid") ? Jp(this, a) : this.Sm(a);
                a.focus()
            }
            this.a(a, "button-action")
        };

        function Mp(a, b, c) {
            this.i = a;
            this.g = b;
            this.b = c;
            this.a = v(this.aq, this)
        }
        A(Mp, kf);
        f = Mp.prototype;
        f.Xf = !1;
        f.Vd = null;
        f.stop = function() {
            this.Vd && (l.clearTimeout(this.Vd), this.Vd = null, this.Xf = !1)
        };
        f.I = function() {
            Mp.G.I.call(this);
            this.stop()
        };
        f.aq = function() {
            this.Vd = null;
            this.Xf && (this.Xf = !1, Np(this))
        };

        function Np(a) {
            a.Vd = nh(a.a, a.g);
            a.i.call(a.b)
        };

        function Op(a, b) {
            Pp().tick[a] = b || y()
        }

        function Qp(a) {
            var b = Pp().tick;
            return a in b
        }

        function Rp(a) {
            var b = "https:" == window.location.protocol ? "https://web.archive.org/web/20130831093956/https://gg.google.com/csi" : "https://web.archive.org/web/20130831093956/http://csi.gstatic.com/csi",
                c = "",
                d;
            for (d in a) c += "&" + d + "=" + a[d];
            jf(b + "?" + c.substring(1))
        }

        function Sp() {
            return Pp().info
        }

        function Pp() {
            return q("ytcsi.data_") || Tp()
        }

        function Tp() {
            var a = {
                tick: {},
                span: {},
                info: {}
            };
            z("ytcsi.data_", a);
            return a
        };

        function Up(a) {
            if (!a) return !1;
            a = a.replace(/https?:\/\//g, "");
            var b = a.split("/", 1);
            if (!b || 1 > b.length || !b[0]) return !1;
            b = b[0].toLowerCase().split(".").reverse();
            return 2 > b.length ? !1 : ("com" == b[0] && "192.168.1.184" == b[1] || "be" == b[0] && "youtu" == b[1]) && -1 == a.indexOf("/redirect?")
        }

        function Vp(a, b) {
            if ("new" == a.target) return -1;
            var c = Dn(a);
            if (!c) return -1;
            var c = c.replace(/https?:\/\//g, ""),
                d;
            (d = !Up(c)) || (d = Ld(c) || "", d = d.split("/"), d = "/" + (1 < d.length ? d[1] : ""), d = "/watch" != d);
            if (d) return -1;
            d = mi(c);
            if (!d || d.v != b.K || d.list || d.p) return -1;
            c = c.split("#", 2);
            if (!c || 2 > c.length) return -1;
            (c = li(c[1])) && c.t ? (d = c.t, c = 0, -1 != d.indexOf("h") && (d = d.split("h"), c = 3600 * d[0], d = d[1]), -1 != d.indexOf("m") && (d = d.split("m"), c = 60 * d[0] + c, d = d[1]), -1 != d.indexOf("s") ? (d = d.split("s"), c = 1 * d[0] + c) : c = 1 * d + c) : c = -1;
            return c
        };

        function Wp(a, b) {
            this.b = a;
            this.a = b
        }

        function Ym(a, b, c) {
            b && b.i && Xm(b) && a.log_(Sm(a, b, 3), c)
        }

        function Sm(a, b, c) {
            var d = {};
            d["iv-event"] = c;
            d["a-id"] = b.id;
            d["a-type"] = Xp(b);
            if (c = Xm(b)) d.link = escape(Dn(c)), c.a && (d["l-class"] = c.a);
            d.ps = a.a.Ea;
            if (b.A) {
                var e = new $d(b.A);
                B(e.Hc(), function(a) {
                    d[a] = e.get(a)
                })
            }
            return d
        }

        function Xp(a) {
            switch (a.type) {
                case "text":
                    switch (a.style) {
                        case "popup":
                            return 1;
                        case "speech":
                            return 2;
                        case "anchored":
                            return 8;
                        case "label":
                            return 9;
                        case "title":
                            return 4;
                        default:
                            return 0
                    }
                case "highlight":
                    return 3;
                case "image":
                    switch (a.style) {
                        case "video":
                            return 11;
                        case "channel":
                            return 10;
                        default:
                            return 0
                    }
                default:
                    return 0
            }
        }
        Wp.prototype.log_ = function(a, b) {
            this.b.u("command_log", "iv", a, b)
        };

        function Yp(a, b) {
            this.start = a < b ? a : b;
            this.end = a < b ? b : a
        }
        Yp.prototype.clone = function() {
            return new Yp(this.start, this.end)
        };

        function Zp() {}
        f = Zp.prototype;
        f.gc = !1;
        f.ge = null;
        f.Mj = null;

        function $p(a, b, c) {
            a.ge ? (dd(a.ge.P(), b, c), a.ge.clear()) : (b = new bp(b, c, void 0, void 0, void 0), a.ge = b, a.ge.jn(), a.Mj = Cc("div"), a.Mj.appendChild(a.ge.P()));
            return a.ge
        }
        f.P = function() {
            return this.Mj
        };
        f.qd = function() {};

        function aq(a, b, c) {
            var d = document.createElementNS("http://www.w3.org/2000/svg", a);
            b && wb(b, function(a, b) {
                d.setAttribute(b, a)
            });
            for (var e = 2; e < arguments.length; e++) d.appendChild(arguments[e]);
            return d
        }

        function bq(a, b) {
            var c;
            c = ":" + (No.getInstance().a++).toString(36);
            b.setAttribute("result", c);
            a.appendChild(b);
            return c
        };

        function cq(a, b) {
            var c = bq(a, aq("feGaussianBlur", {
                    "in": b,
                    stdDeviation: "1.8"
                })),
                c = bq(a, aq("feDiffuseLighting", {
                    "in": c,
                    surfaceScale: "4",
                    diffuseConstant: "1"
                }, aq("feDistantLight", {
                    azimuth: "270",
                    elevation: "15",
                    "lighting-color": "white"
                }))),
                c = bq(a, aq("feComposite", {
                    "in": c,
                    in2: b,
                    operator: "in"
                }));
            return bq(a, aq("feComposite", {
                in2: c,
                "in": b,
                operator: "arithmetic",
                k2: 1,
                k3: 0.5,
                k4: 0
            }))
        }

        function dq(a, b) {
            var c = bq(a, aq("feOffset", {
                    "in": b,
                    dx: "-7",
                    dy: "-7"
                })),
                c = bq(a, aq("feGaussianBlur", {
                    "in": c,
                    stdDeviation: "3"
                })),
                c = bq(a, aq("feColorMatrix", {
                    "in": c,
                    type: "matrix",
                    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
                })),
                d = bq(a, aq("feColorMatrix", {
                    "in": b,
                    type: "matrix",
                    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
                })),
                d = bq(a, aq("feGaussianBlur", {
                    "in": d,
                    stdDeviation: "1"
                })),
                c = bq(a, aq("feComposite", {
                    operator: "out",
                    "in": c,
                    in2: d
                }));
            return bq(a, aq("feComposite", {
                operator: "over",
                "in": b,
                in2: c
            }))
        }

        function eq(a, b) {
            return b
        }

        function fq(a) {
            var b = aq("filter", {
                    filterUnits: "userSpaceOnUse"
                }),
                c = "SourceGraphic";
            B(a, function(a) {
                t: {
                    switch (a) {
                        case "bevel":
                            a = cq;
                            break t;
                        case "dropshadow":
                            a = dq;
                            break t
                    }
                    a = eq
                }
                c = a(b, c)
            });
            return b
        }

        function gq(a) {
            a = Ga(a, function(a) {
                return a in hq
            });
            $a(a, function(a, c) {
                return hq[a] - hq[c]
            });
            return a
        }

        function iq(a, b) {
            if (!b) return null;
            var c = "effects:" + (b ? b.join("|") : ""),
                d = c in a.a ? a.a[c] : null;
            if (d) return d;
            d = fq(b);
            return 0 < d.childNodes.length ? Vo(a, c, d) : null
        }

        function jq(a) {
            return Ka(a, function(a) {
                return "dropshadow" == a
            }) ? new rb(0, 7, 7, 0) : new rb(0, 0, 0, 0)
        }
        var hq = {
            bevel: 1,
            dropshadow: 2
        };

        function kq(a, b, c, d, e) {
            b = lq(b, c, d ? d.a / 2 + 1 : 0);
            ep(a, b, d, e)
        }

        function lq(a, b, c) {
            var d = new Eo;
            Go(d, a.left + b + c, a.top + c);
            d.ra(a.left + a.width - b - c, a.top + c);
            Ho(d, b, b, -90, 90);
            d.ra(a.left + a.width - c, a.top + a.height - b - c);
            Ho(d, b, b, 0, 90);
            d.ra(a.left + b + c, a.top + a.height - c);
            Ho(d, b, b, 90, 90);
            d.ra(a.left + c, a.top + b + c);
            Ho(d, b, b, 180, 90);
            d.close();
            return d
        }

        function mq(a, b, c) {
            b && c && a.setAttribute(b, "url(#" + c + ")")
        }

        function nq(a, b, c, d) {
            var e = a.B;
            e ? a = new Do(e.j * b / 100, e.o * c / 100, e.k * b / 100, e.C * c / 100, e.a, e.b, e.g, e.i) : (b = d ? Math.max(a.a, 0.9) : a.a, a = new Jo(a.j, b));
            return a
        }

        function oq(a, b) {
            var c = new rb(a.top, a.left + a.width, a.top + a.height, a.left),
                d = jq(b);
            ia(d) ? (c.top -= d.top, c.right += d.right, c.bottom += d.bottom, c.left -= d.left) : (c.top -= d, c.right += void 0, c.bottom += void 0, c.left -= NaN);
            return vb(c)
        }

        function pq(a, b, c) {
            c.length && (b = Ka(b.childNodes, function(a) {
                return "g" == a.tagName
            })) && (a = iq(a, gq(c)), mq(b, "filter", a))
        };

        function qq() {}
        A(qq, Zp);
        qq.prototype.a = 0;
        qq.prototype.qd = function(a, b, c) {
            var d = a.b,
                e = d.C,
                g = this.gc && po(a),
                e = (e += g ? 1 : 0) ? new Ko(e, g ? d.k : d.o) : null;
            if (g = to(a)) {
                var h = Tn(g, b, c);
                if (!(0 >= h.width || 0 >= h.height)) {
                    var k;
                    if (k = (a = (a = a.a ? a.a.a.length ? a.a.a[0] : null : null) && a.a ? a.a : null) && a.length ? a[0] : null) {
                        var m;
                        c = c ? Tn(c, b) : null;
                        a = On(k, new ub(k.B, k.F, k.k, k.i), b);
                        c ? (a.top += c.top, a.left += c.left) : (a.top += b.top, a.left += b.left);
                        m = new F(a.left, a.top);
                        c = h.clone();
                        a = new ub(m.x, m.y, 1, 1);
                        var g = Math.max(c.left + c.width, a.left + a.width),
                            p = Math.max(c.top + c.height, a.top +
                                a.height);
                        c.left = Math.min(c.left, a.left);
                        c.top = Math.min(c.top, a.top);
                        c.width = g - c.left;
                        c.height = p - c.top;
                        c = oq(c, d.b);
                        a = $p(this, c.width, c.height);
                        var g = nq(d, c.width, c.height, this.gc),
                            h = new ub(h.left - c.left, h.top - c.top, h.width, h.height),
                            r = new F(m.x - c.left, m.y - c.top);
                        this.a = 17 * Qn(b, k.g, k.a ? k.a : "xy");
                        b = d.g;
                        k = e ? e.a / 2 : 0;
                        m = rq(h, r);
                        var p = this.b(h, b, r, m),
                            n = r.x,
                            r = r.y,
                            w = h.width,
                            L = h.height,
                            N = h.left,
                            h = h.top,
                            D = new Eo;
                        Go(D, N + b + k, h + k);
                        "t" == m && (D.ra(p.start, h + k), D.ra(n, r), D.ra(p.end, h + k));
                        D.ra(N + w - b - k, h + k);
                        Ho(D, b, b, -90, 90);
                        "r" == m && (D.ra(N + w - k, p.start), D.ra(n, r), D.ra(N + w - k, p.end));
                        D.ra(N + w - k, h + L - b - k);
                        Ho(D, b, b, 0, 90);
                        "b" == m && (D.ra(p.end, h + L - k), D.ra(n, r), D.ra(p.start, h + L - k));
                        D.ra(N + b + k, h + L - k);
                        Ho(D, b, b, 90, 90);
                        "l" == m && (D.ra(N + k, p.end), D.ra(n, r), D.ra(N + k, p.start));
                        D.ra(N + k, h + b + k);
                        Ho(D, b, b, 180, 90);
                        D.close();
                        ep(a, D, e, g);
                        if (e = this.P()) Z(e, "annotation-shape"), Z(e, "annotation-speech-shape"), Xc(e, c.left, c.top), dd(e, c.width, c.height), pq(a, e, d.b)
                    }
                }
            }
        };

        function rq(a, b) {
            var c = a.top - b.y,
                d = b.x - a.left - a.width,
                e = b.y - a.top - a.height,
                g = a.left - b.x,
                h = Math.max(c, d, e, g);
            if (0 > h) return "i";
            switch (h) {
                case c:
                    return "t";
                case d:
                    return "r";
                case e:
                    return "b";
                case g:
                    return "l"
            }
            return "i"
        }
        qq.prototype.b = function(a, b, c, d) {
            function e(a, c, d) {
                h = Math.min(Math.max(d - 2 * b, 0), g);
                k = ob(a - h / 2, c + b, c + d - h - b)
            }
            var g = this.a,
                h = 0,
                k = 0;
            "t" == d || "b" == d ? e(c.x, a.left, a.width) : "l" != d && "r" != d || e(c.y, a.top, a.height);
            return new Yp(k, k + h)
        };

        function sq() {}
        A(sq, Zp);
        sq.prototype.qd = function(a, b, c) {
            var d = to(a);
            d && (b = Tn(d, b, c), 0 >= b.width || 0 >= b.height || (a = a.b, c = oq(b, a.b), d = $p(this, c.width, c.height), kq(d, new ub(0, 0, b.width, b.height), a.g, new Ko(!a.i && this.gc ? 1 : a.i, a.j), new Jo("#000", 0)), b = this.P(), Z(b, "annotation-shape"), id(b, this.gc ? Math.max(a.a, 0.9) : a.a), Xc(b, c.left, c.top), dd(b, c.width, c.height)))
        };

        function tq(a, b, c) {
            this.a = a || 0;
            this.g = b || 0;
            this.b = c || !1
        }
        A(tq, Zp);

        function uq(a, b) {
            var c = a.width,
                d = a.height,
                e = 0,
                g = 0;
            0 < b && (a.width / a.height > b ? (d = a.width / b, g = (a.height - d) / 2) : (c = a.height * b, e = (a.width - c) / 2));
            return new ub(e, g, c, d)
        }
        tq.prototype.qd = function(a, b, c) {
            var d = Tn(to(a), b, c);
            if (!(0 >= d.width || 0 >= d.height)) {
                var e = uq(d, this.g);
                e.left += d.left;
                e.top += d.top;
                b = a.b;
                c = oq(e, b.b);
                var g = $p(this, c.width, c.height),
                    h = new Jo("#000", 0),
                    e = uq(e, this.a);
                a = a.j ? a.j.a ? a.j.a : a.j.K ? Ol(a.j.K, "hqdefault.jpg") : "" : "";
                e = Uo(g, "image", {
                    x: e.left,
                    y: e.top,
                    width: e.width,
                    height: e.height,
                    "image-rendering": "optimizeQuality",
                    preserveAspectRatio: "none"
                });
                e.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
                a = new ap(e, g);
                g.b.P().appendChild(a.P());
                if (e =
                    this.P()) {
                    var k = this.gc ? Math.max(b.a, 0.9) : b.a;
                    id(e, k);
                    if (this.b && 0 < b.i) {
                        var k = new Ko(b.i, b.j),
                            d = new ub(0, 0, d.width, d.height),
                            m;
                        m = lq(d, b.g, k.a / 2 + 1);
                        var p = "mask" in g.a ? g.a.mask : null;
                        if (p) m = p;
                        else {
                            var p = document.createElementNS("http://www.w3.org/2000/svg", "mask"),
                                r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            r.setAttribute("d", fp(m));
                            r.setAttribute("fill", "#FFF");
                            p.appendChild(r);
                            m = Vo(g, "mask", p)
                        }
                        mq(a.P(), "mask", m);
                        kq(g, d, b.g, k, h)
                    }
                    Z(e, "annotation-shape");
                    Z(e, "annotation-image-shape");
                    Xc(e, c.left, c.top);
                    dd(e, c.width, c.height);
                    pq(g, e, b.b)
                }
            }
        };

        function vq() {}
        A(vq, Zp);
        vq.prototype.qd = function(a, b, c) {
            var d = to(a);
            if (d) {
                var e = Tn(d, b, c);
                if (!(0 >= e.width || 0 >= e.height)) {
                    b = a.b;
                    c = oq(e, b.b);
                    var d = $p(this, c.width, c.height),
                        g = b.C;
                    a = this.gc && po(a);
                    a = (g += a ? 1 : 0) ? new Ko(g, a ? b.k : b.o) : null;
                    g = new ub(0, 0, e.width, e.height);
                    e = nq(b, e.width, e.height, this.gc);
                    kq(d, g, b.g, a, e);
                    if (a = this.P()) Z(a, "annotation-shape"), Z(a, "annotation-popup-shape"), Xc(a, c.left, c.top), dd(a, c.width, c.height), pq(d, a, b.b)
                }
            }
        };

        function wq() {}
        A(wq, qq);
        wq.prototype.b = function(a, b, c, d) {
            function e(a, c, d) {
                h = Math.min(Math.max(d - 2 * b, 0), g);
                k = a <= c + d / 2 ? Math.max(c + d / 4 - h / 2, c + b) : Math.min(c + 3 * d / 4 - h / 2, c + d - h - b)
            }
            var g = this.a,
                h = 0,
                k = 0;
            "t" == d || "b" == d ? e(c.x, a.left, a.width) : "l" != d && "r" != d || e(c.y, a.top, a.height);
            return new Yp(k, k + h)
        };

        function xq(a, b) {
            this.b = J(a);
            this.a = Sl(this.b, b)
        }

        function yq(a, b) {
            var c = Tl(a.a, b, void 0),
                c = c.replace(/^[\s\xa0]+/, ""),
                d;
            d = String(c.substr(0, 3)).toLowerCase();
            (d = 0 == ("<tr" < d ? -1 : "<tr" == d ? 0 : 1)) && (c = "<table><tbody>" + c + "</tbody></table>");
            var e = c,
                g = document,
                c = g.createElement("div");
            H ? (c.innerHTML = "<br>" + e, c.removeChild(c.firstChild)) : c.innerHTML = e;
            if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
            else {
                for (e = g.createDocumentFragment(); c.firstChild;) e.appendChild(c.firstChild);
                c = e
            }
            d && (c = void 0 != (void 0 != c.firstElementChild ? c.firstElementChild : Jc(c.firstChild)).firstElementChild ?
                (void 0 != c.firstElementChild ? c.firstElementChild : Jc(c.firstChild)).firstElementChild : Jc((void 0 != c.firstElementChild ? c.firstElementChild : Jc(c.firstChild)).firstChild));
            return c
        };

        function zq(a, b, c, d, e) {
            this.a = a;
            this.j = b;
            this.g = c;
            this.o = d;
            this.k = e;
            this.i = new wm(this)
        }
        f = zq.prototype;
        f.$ = null;
        f.lc = null;
        f.xb = null;
        f.qa = null;
        f.nj = null;

        function Aq(a, b) {
            var c = v(function(a, c, g) {
                c = g ? Bq(this, c, v(g, this)) : Bq(this, c);
                this.i.listen(b, a, c)
            }, a);
            c("mouseover", "e", a.$r);
            c("mouseout", "d", a.Zr);
            c("click", "b");
            c("mousedown", "a");
            c("touchend", "b")
        }

        function Cq(a) {
            if (a.a.C) {
                var b;
                if (Ha(a.a.g, function(a) {
                        return "close" == a.type
                    }, void 0)) b = a.$;
                else {
                    b = yq(new xq("annotation-close-button-template", []), {});
                    if (!(b instanceof Element)) return;
                    a.xb = b;
                    se(a.xb, "annotation_id", a.a.id);
                    a.$.appendChild(a.xb);
                    b = a.xb
                }
                var c = function(a) {
                    a.stopPropagation()
                };
                a.i.listen(b, "click", Bq(a, "c", c));
                a.i.listen(b, "touchend", Bq(a, "c", c))
            }
        }

        function Bq(a, b, c) {
            return v(function(a) {
                if (this.k) c && c(a);
                else if (a.target instanceof Element) {
                    Gl(a.target);
                    var e = document.elementFromPoint(a.x, a.y);
                    Fl(a.target);
                    Qk(e, "annotation") && $e(e, a.type)
                }
                this.o.u(b, this.a)
            }, a)
        }
        f.$r = function() {
            this.xb && Fl(this.xb);
            this.lc && id(this.lc, 1);
            var a = Dq(this);
            this.qa && (this.qa.gc = !0, id(this.$, Eq(this) ? 1 : 0), a && this.qa.qd(this.a, a, Fq(this)))
        };
        f.Zr = function() {
            this.xb && Gl(this.xb);
            this.lc && id(this.lc, 0);
            var a = Dq(this);
            this.qa && (this.qa.gc = !1, id(this.$, Eq(this) ? 1 : 0), a && this.qa.qd(this.a, a, Fq(this)))
        };

        function Fq(a) {
            return a.nj ? to(a.nj) : null
        }

        function Bo(a) {
            if (a.$ || a.qa) {
                var b = to(a.a);
                if (b) {
                    var c = Dq(a),
                        d = Fq(a);
                    if (a.$ && c) {
                        b = Tn(b, c, d);
                        dd(a.$, b.width, b.height);
                        Xc(a.$, b.left, b.top);
                        var e = a.g.tf;
                        e && (e = new rb(360 * Gq(a).top * vo(a.a, e) / 100, 640 * Gq(a).right * uo(a.a, e) / 100, 360 * Gq(a).bottom * vo(a.a, e) / 100, 640 * Gq(a).left * uo(a.a, e) / 100), a.lc && (e.right += 1.5 * c.height / 100), a.$.style.padding = e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px");
                        "label" == a.a.style && a.b && (a.b.style.padding = a.$.style.padding);
                        if (a.lc) {
                            e = 4.2 * c.height / 100;
                            e = new G(e, e);
                            dd(a.lc,
                                e);
                            if ("highlight" == a.a.type || "label" == a.a.style) var g = 1.5 * c.height / 100,
                                e = new F(b.width - e.width - g, b.height - e.height - g);
                            else e = new F(b.width - e.width - 3 * c.height / 100, (b.height - e.height) / 2);
                            Xc(a.lc, e)
                        }
                        if (a.xb) {
                            dd(a.xb, new G(18, 18));
                            var e = a.xb,
                                g = fd(a.xb),
                                h = 9 <= c.left + c.width - (b.left + b.width),
                                k = 9 <= b.top - c.top;
                            Xc(e, h && k ? new F(b.width - 9, -9) : h ? new F(b.width - 9, b.height > 27 + g.height ? 9 : b.height - 9) : k ? new F(b.width > 27 + g.width ? b.width - 9 - g.width : -9, -9) : b.width / c.width > b.height / c.height ? new F(b.width > 27 + g.width ? b.width -
                                9 - g.width : -9, b.height - 9) : new F(-9, b.height > 27 + g.height ? 9 : b.height - 9))
                        }
                    }
                    a.qa && c && a.qa.qd(a.a, c, d);
                    if (a.$) {
                        c = a.$;
                        d = a.a.b;
                        c.style.color = "highlightText" == a.a.style ? d.F : d.k;
                        c.style.fontSize = 360 * d.H * vo(a.a, a.g.tf) / 100 + "px";
                        c.style.textAlign = d.textAlign ? d.textAlign : "title" == a.a.style || "highlightText" == a.a.style ? "center" : "left";
                        d.A && (c.style.fontWeight = d.A);
                        a = a.$;
                        c = a.style.overflow;
                        (d = K("annotation-link-icon", a)) && Gl(d);
                        a.style.overflow = "scroll";
                        for (b = 100; 0 < b && !(a.scrollHeight <= a.offsetHeight && a.scrollWidth <=
                                a.offsetWidth); b--) {
                            e = td(a);
                            if (5 > e) break;
                            e--;
                            a.style.fontSize = e + "px"
                        }
                        a.style.overflow = c;
                        d && Fl(d)
                    }
                }
            }
        }

        function Gq(a) {
            var b = a.a.b;
            return b.padding ? b.padding : new rb("speech" == a.a.style ? 1.6 : 0.8, "speech" == a.a.style ? 1.6 : 0.8, "speech" == a.a.style ? 1.6 : 0.8, "speech" == a.a.style ? 1.6 : 0.8)
        }
        f.show = function() {
            var a = this.a.b,
                a = (a && 0 == a.a || "title" == this.a.style || "highlightText" == this.a.style || "pause" == this.a.type ? !1 : !0) && !this.qa,
                b = !this.$,
                c = "widget" == this.a.type;
            if (a) {
                var d = Dq(this);
                if (d) {
                    var e = null;
                    "highlight" == this.a.type || "label" == this.a.style ? e = new sq : "popup" == this.a.style ? e = new vq : "anchored" == this.a.style ? e = new qq : "speech" == this.a.style ? e = new wq : "image" == this.a.type && ("video" == this.a.style ? e = new tq(4 / 3, 16 / 9, !0) : "channel" == this.a.style && (e = new tq));
                    e && (e.qd(this.a, d, Fq(this)), this.qa =
                        e, d = e.P()) && (Gl(d), Z(d, "annotation-type-" + this.a.type.toLowerCase()), this.j(d))
                }
            }
            if (b) {
                d = ["annotation", "hid"];
                "highlightText" != this.a.style || d.push("annotation-no-mouse");
                d.push("annotation-type-" + this.a.type.toLowerCase());
                this.$ = Cc("div", d);
                this.a.o && ("label" == this.a.style ? (this.b = Cc("div", ["label-text"]), this.b.style.backgroundColor = this.a.b.j, Mc(this.b, this.a.o), this.$.appendChild(this.b)) : Mc(this.$, this.a.o));
                se(this.$, "annotation_id", this.a.id);
                this.j(this.$);
                Aq(this, this.$);
                if (po(this.a) &&
                    "image" != this.a.type && oo(this.a)) {
                    if (d = Xm(this.a)) this.$.title = Dn(d);
                    this.lc = Cc("span", "annotation-link-icon");
                    this.$.appendChild(this.lc)
                }
                Cq(this);
                po(this.a) || (this.$.style.cursor = "default")
            }
            c && ("subscribe" == this.a.style ? K("yt-uix-subscription-button", this.$) || (this.$.innerHTML = this.a.k) : this.a.k && (this.$.innerHTML = this.a.k));
            if (a || b) {
                t: {
                    a = this.a.a.a;
                    if (a.length && (a = $n(a[0]))) {
                        a = a.o;
                        break t
                    }
                    a = 0
                }
                this.$ && (this.$.style.zIndex = a);this.qa && this.qa.P() && (this.qa.P().style.zIndex = a)
            }
            Fl(this.$);
            id(this.$,
                Eq(this) ? 1 : 0);
            Bo(this);
            this.qa && Fl(this.qa.P())
        };
        f.hide = function() {
            Gl(this.$);
            this.qa && Gl(this.qa.P())
        };

        function Eq(a) {
            return "label" != a.a.style || a.qa.gc
        }

        function Dq(a) {
            var b = a.g.tf;
            return b ? "player_relative" == a.a.F ? (a = a.g.ac) ? new ub(-b.left, -b.top, a.width, a.height) : null : new ub(0, 0, b.width, b.height) : null
        };

        function Hq(a) {
            Wk.call(this, a);
            this.b = {};
            this.i = {};
            this.j = new Wp(this.C, this.a.N());
            var b = Wf(a),
                c = K("html5-annotations-button", b);
            this.g = this.k = null;
            a.N().zc ? (Ic(c), a = this.a.app.R.L(), this.g = new Zm(a, [a.getMsg("YTP_ON"), a.getMsg("YTP_OFF")]), Q(this.g, "change", v(this.Go, this)), this.k = {
                label: this.a.app.R.L().getMsg("YTP_ANNOTATIONS_TITLE"),
                element: this.g,
                priority: 2
            }) : Q(c, "click", v(this.Fo, this));
            this.D("onHideControls", this.Eo, this);
            this.D("onShowControls", this.Io, this);
            this.D("onStateChange", this.Ho,
                this);
            this.D("e", this.Ko, this);
            this.D("d", this.Jo, this);
            this.D("a", this.Co, this);
            this.D("b", this.Bo, this);
            this.D("c", this.Do, this);
            b = K("video-annotations", b);
            b = K("countdowntimer", b);
            this.A = Cc("DIV", ["video-annotations", "html5-stop-propagation"]);
            Zk(this, this.A);
            Zk(this, b);
            this.B = new hp(b, v(this.ci, this))
        }
        A(Hq, Wk);
        f = Hq.prototype;
        f.ia = "iv-module";
        f.Ij = !1;
        f.en = !0;
        f.ca = !1;
        f.Nc = 0;

        function Iq(a) {
            return K("video-annotations", Wf(a)) && Jq(a) ? new Hq(a) : null
        }

        function Jq(a) {
            return "leanback" == a.N().V ? !1 : Fk(a.getVideoData(), "iv3_module")
        }
        f.fc = function() {
            return Jq(this.a)
        };
        f.create = function() {
            Hq.G.create.call(this);
            this.k && this.u("module_menu_add", this.k);
            1 == (this.a.N().ha || this.a.getVideoData().ja) ? this.load() : Kq(this, "tooltip-default")
        };
        f.destroy = function() {
            this.unload();
            this.k && this.u("module_menu_remove", this.k);
            Hq.G.destroy.call(this)
        };
        f.Fo = function() {
            this.ca || this.Nc ? this.unload() : this.load()
        };
        f.Go = function() {
            var a = this.ca || this.Nc,
                b = 0 == this.g.getSelected();
            a && !b ? this.unload() : !a && b && this.load()
        };
        f.Ho = function(a) {
            this.en = V(a.state, 8);
            0 > tm(a, 4) && this.B.stop()
        };
        f.load = function() {
            Hq.G.load.call(this);
            Kq(this, "tooltip-alt");
            var a = {
                    format: "XML",
                    method: "GET",
                    ze: v(this.Em, this, null)
                },
                b = this.a.getVideoData();
            b.mj && (this.Nc++, wi(b.mj, a));
            b.lj && (this.Nc++, wi(b.lj, a));
            b.kj && (this.a.N().Ub || this.a.N().Yb) && (a = {
                format: "XML",
                method: "GET",
                ze: v(this.Em, this, v(this.Yq, this, b.Ca))
            }, this.Nc++, wi(b.kj, a));
            this.g && bn(this.g, 0)
        };
        f.unload = function() {
            this.g && bn(this.g, 1);
            this.j.log_({
                "iv-event": 1
            });
            this.ci();
            Xk(this);
            wb(this.b, function(a) {
                a.destroy()
            });
            wb(this.i, function(a) {
                a.destroy()
            });
            this.Nc = 0;
            this.ca = !1;
            this.b = {};
            this.i = {};
            Kq(this, "tooltip-default");
            Hq.G.unload.call(this)
        };

        function Kq(a, b) {
            var c = K("html5-annotations-button", Wf(a.a));
            if (c) {
                var d = M(c, b) || "";
                se(c, "tooltip", d);
                c.setAttribute("aria-label", d)
            }
        }

        function Lq(a, b) {
            for (var c = {}, d = 0; d < b.attributes.length; d++) {
                var e = b.attributes[d];
                c[e.name] = e.nodeValue
            }
            for (d = 0; d < b.childNodes.length; d++)
                if (e = b.childNodes[d], e.tagName) {
                    var g;
                    if (c[e.tagName]) g = c[e.tagName];
                    else if ("html_blob" == e.tagName || "data" == e.tagName) {
                        c[e.tagName] = e.childNodes[0].nodeValue.trim();
                        continue
                    } else g = [], c[e.tagName] = g;
                    e && "TEXT" == e.tagName ? 1 == e.childNodes.length && 3 == e.childNodes[0].nodeType ? g.push(e.childNodes[0].nodeValue) : g.push("") : e && g.push(Lq(a, e))
                }
            return c
        }
        f.Em = function(a, b) {
            if (this.Nc && !this.ca) {
                this.Nc--;
                var c = b.responseXML ? b.responseXML.getElementsByTagName("annotations") : null;
                if (si(b) && c) {
                    c = c[0];
                    a && a(c);
                    Mq(this, c);
                    Z(Wf(this.a), this.ia + "-loaded");
                    0 == this.Nc && (this.ca = !0);
                    var c = [],
                        d;
                    for (d in this.b) {
                        var e = this.b[d].Ra;
                        if (e.a)
                            if (e = e.a, e.a.length)
                                if (e = e.a[0].b || e.a[0].a, !e || 2 > e.length) e = null;
                                else var g = e.length - 1,
                                    e = 0 >= e[0].b && 0 >= e[g].b ? null : {
                                        start: e[0].b,
                                        end: e[g].b
                                    };
                        else e = null;
                        else e = null;
                        if (g = e) e = 1E3 * g.start, g = 1E3 * g.end, 0 == e && (e++, g++), e == g && g++,
                            g < e || (e = new Fg(e, g, {
                                id: d
                            }), c.push(e))
                    }
                    for (d in this.i) e = this.i[d].Ra, e = new Fg(e.data.start_ms, e.data.end_ms, {
                        id: d
                    }), c.push(e);
                    this.Ii.apply(this, c)
                }
            }
        };

        function Nq(a, b) {
            var c = Oq(a, b);
            if (!c) return null;
            ro(b, function(a) {
                a = v(this.bs, this, b.id, a);
                this.D("ivTrigger:" + b.id, a)
            }, a);
            return new yo(a.C, b, c)
        }

        function Pq(a, b) {
            var c = Cc("div", ["annotation", "annotation-type-custom", "hid"]);
            a.A.appendChild(c);
            var d = null;
            switch (b.style) {
                case "video":
                    d = new Tm(b, c, new wm(a), a.a.N(), a.j)
            }
            d && a.C.D("onResize", d.tm, d);
            return d
        }

        function Mq(a, b) {
            for (var c = b.getElementsByTagName("annotation"), d = 0; d < c.length; d++) {
                var e = Lq(a, c[d]),
                    g = null;
                try {
                    g = no(e)
                } catch (h) {}
                g && ("custom" == g.type ? (e = Pq(a, g)) && (a.i[g.id] = e) : (e = Nq(a, g)) && (a.b[g.id] = e))
            }
            wb(a.b, function(a) {
                var b = a.Ra;
                b.a && b.a.b && (b = this.b[b.a.b]) && (a.b.nj = b.Ra)
            }, a)
        }
        f.He = function(a) {
            Hq.G.He.call(this, a);
            a = a.getId();
            var b = this.b[a],
                c = this.i[a];
            c && !c.Lb ? c.show() : b && !b.Lb && (b = b.Ra, "pause" == b.type ? Qq(this, b) : (Rq(this, a), a = this.j, b && b.i && a.log_(Sm(a, b, 2))))
        };
        f.Te = function(a) {
            Hq.G.Te.call(this, a);
            Sq(this, a.getId())
        };

        function Qq(a, b) {
            if (a.en) {
                var c = Ka(b.g, function(a) {
                    return "pause" == a.type && !!a.duration && !!a.duration.value
                }, void 0);
                c && (a.Ij = !0, a.u("command_pause"), a.B.start(1E3 * c.duration.value))
            }
        }

        function Sq(a, b, c, d) {
            var e = a.i[b];
            if (e && !e.Lb) e.hide();
            else if (b = a.b[b]) Ao(b), d = d && a.b[d] && a.b[d].isVisible, c && c.b && d ? (a = v(a.pm, a, b), b.a = new xm(a, 2E3), b.a.start()) : a.pm(b)
        }
        f.pm = function(a) {
            if (a) {
                a.hide();
                var b = a.Ra.id;
                this.u(xo("shown", b), !1, b);
                Tq(this, a.Ra, "hidden")
            }
        };

        function Rq(a, b, c, d) {
            if (b = a.b[b]) Ao(b), d = d && a.b[d] && a.b[d].isVisible, c && c.i && d ? (a = v(a.qm, a, b), b.a = new xm(a, 2E3), b.a.start()) : a.qm(b)
        }
        f.qm = function(a) {
            if (a) {
                a.show();
                var b = a.Ra.id;
                this.u(xo("shown", b), !0, b);
                Tq(this, a.Ra, "shown")
            }
        };
        f.bs = function(a, b, c, d) {
            c ? Rq(this, a, b, d) : Sq(this, a, b, d)
        };
        f.Co = function(a) {
            if (a && a.id) {
                var b = this.j;
                a && a.i && Xm(a) && b.log_(Sm(b, a, 8))
            }
        };
        f.Bo = function(a) {
            if (a && a.id) {
                var b = Xm(a),
                    c = v(function() {
                        b && Tq(this, a, "click")
                    }, this);
                Up(Dn(b)) && "new" != b.target || (c(), c = null);
                Ym(this.j, a, c)
            }
        };

        function Tq(a, b, c) {
            qo(b, function(a) {
                if (a.trigger == c) switch (a.type) {
                    case "log":
                        a.url && jf(a.url.value);
                        break;
                    case "openUrl":
                        var e = this.a.getVideoData(),
                            g = Vp(a.url, e);
                        if (-1 != g) {
                            this.u("command_seek", g);
                            this.ci();
                            break
                        }
                        if (e = (g = Dn(a.url)) ? Up(g) ? pi(g, {
                                src_vid: e.K,
                                feature: "iv",
                                annotation_id: b.id
                            }) : g : null) il(this), window.open(e, a.url.target ? "new" == a.url.target ? "_blank" : "_top" : Up(Dn(a.url)) ? "_top" : "_blank")
                }
            }, a)
        }
        f.Eo = function() {
            this.u(xo("playerControlShow", void 0), !1, void 0)
        };
        f.Io = function() {
            this.u(xo("playerControlShow", void 0), !0, void 0)
        };
        f.Ko = function(a) {
            a = a.id;
            this.u(xo("rollOver", a), !0, a)
        };
        f.Jo = function(a) {
            a = a.id;
            this.u(xo("rollOver", a), !1, a)
        };
        f.Do = function(a) {
            if (a || a.id)
                if (this.b[a.id].Lb = !0, Sq(this, a.id), a) {
                    var b = this.j;
                    a && a.i && b.log_(Sm(b, a, 4));
                    Tq(this, a, "close")
                }
        };
        f.ci = function() {
            this.B.stop();
            this.Ij && (this.Ij = !1, this.u("command_play"))
        };

        function Oq(a, b) {
            if (Uq(b)) {
                var c = b.C || Ha(b.g, function(a) {
                    return "click" == a || "rollOut" == a || "rollOut" == a
                }, void 0);
                return new zq(b, v(a.A.appendChild, a.A), a.a.N(), a.C, c)
            }
            return null
        }

        function Uq(a) {
            if ("highlight" == a.type || "image" == a.type || "widget" == a.type) return !0;
            if ("text" == a.type)
                for (var b in ko)
                    if (a.style == ko[b]) return !0;
            return !1
        }

        function Vq(a, b, c, d, e) {
            var g = a.ownerDocument.createElement("action");
            g.setAttribute("type", "log");
            g.setAttribute("trigger", d);
            a = a.ownerDocument.createElement("url");
            d = {};
            d.value = "a_id=" + c;
            d.label = "cta_annotation_" + e;
            b = pi(b, d);
            a.setAttribute("value", b);
            g.appendChild(a);
            return g
        }
        f.Yq = function(a, b) {
            if (a)
                for (var c = b.getElementsByTagName("annotation"), d = 0; d < c.length; d++) {
                    var e = c[d],
                        g = Lq(this, e);
                    if (ln(g, "logable", !0)) {
                        var g = en(g, "id", "REQUIRED"),
                            h = e.getElementsByTagName("action"),
                            h = h.length ? h[0] : null;
                        e.insertBefore(Vq(e, a, g, "shown", "shown"), h);
                        e.insertBefore(Vq(e, a, g, "click", "clicked"), h);
                        e.insertBefore(Vq(e, a, g, "close", "closed"), h)
                    }
                }
        };
        z("yt.pubsub.publish", vp);

        function Wq(a) {
            this.b = a || 1;
            Cl.call(this, 30 * this.b, 30 * this.b);
            this.k = this.width / 2;
            this.i = this.height / 2;
            this.C = 0;
            this.Aa.translate(this.k, this.i)
        }
        A(Wq, Cl);
        Wq.prototype.show = function() {
            Wq.G.show.call(this);
            var a = this.A;
            this.j = new Date;
            this.g(a, 125)
        };
        Wq.prototype.A = function() {
            this.Aa.clearRect(-this.k, -this.i, this.width, this.height);
            for (var a = this.C++ % 8, b = 0; 8 > b; b++) {
                var c = 2 * Math.PI / 8 * (a + b),
                    d = 11 * this.b * Math.cos(c),
                    c = 11 * this.b * Math.sin(c),
                    e = (b + 1) / 9;
                this.Aa.beginPath();
                this.Aa.arc(d, c, 4 * this.b, 0, 2 * Math.PI, !1);
                this.Aa.fillStyle = "rgba(189, 189, 189, " + e + ")";
                this.Aa.fill()
            }
        };
        Wq.prototype.hide = function() {
            P(this.a);
            Wq.G.hide.call(this)
        };
        var Xq = RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");

        function Yq(a) {
            ql.call(this, ["span"]);
            this.element.innerHTML = a
        }
        A(Yq, ql);
        var Zq = ["left", "right", "center"],
            $q = {
                id: 0,
                priority: 0,
                Qg: 7,
                Rg: 50,
                Zs: 80,
                ud: 95,
                Jc: 15,
                Mi: 100,
                isVisible: !0,
                textAlign: Zq[2],
                Qd: 0,
                backgroundColor: "#080808",
                Pg: "#fff",
                Qs: 1,
                Jj: 1
            },
            ar = {
                id: 99,
                priority: 1,
                Qg: 0,
                Rg: 5,
                ud: 7,
                Jc: 2,
                Mi: 32,
                textAlign: Zq[0]
            },
            br = ["CA", "MX", "US"];

        function cr(a) {
            a = a || $q;
            x(this, a)
        }
        f = cr.prototype;
        f.Qg = 7;
        f.Rg = 50;
        f.ud = 95;
        f.Zs = 80;
        f.Qd = 0;
        f.textAlign = "center";
        f.backgroundColor = "#080808";
        f.Pg = "#fff";
        f.Qs = 1;
        f.Jj = 1;
        f.Jc = 15;
        f.Mi = 32;
        f.isVisible = !0;
        f.fontFamily = '"Arial Unicode Ms", Arial';
        f.hs = "100%";

        function dr(a, b) {
            this.id = a;
            this.ba = new cr(b);
            var c = "caption-window";
            0 == this.id && (c = "standard-caption-window");
            this.aa = Cc("div", {
                id: "caption-window-" + this.id,
                "class": c
            });
            this.bb = Cc("span", {
                "class": "captions-text",
                style: "visibility: hidden"
            });
            this.bb.innerHTML = "C";
            this.X = Cc("span", {
                "class": "captions-text",
                tabindex: "4",
                "aria-live": "assertive"
            });
            this.Ch = Cc("div", {
                "class": "caption-window-transform"
            });
            this.Ch.appendChild(this.X);
            this.aa.appendChild(this.Ch)
        }
        f = dr.prototype;
        f.id = 0;
        f.ba = null;
        f.Qf = "";
        f.Pb = null;
        f.aa = null;
        f.Ch = null;
        f.X = null;
        f.bb = null;
        f.type = 1;
        f.getType = function() {
            return this.type
        };
        f.wh = function() {
            var a;
            this.bb.style.fontFamily = this.X.style.fontFamily;
            this.aa.appendChild(this.bb);
            a = this.bb.offsetHeight;
            this.aa.removeChild(this.bb);
            return a
        };
        f.Xe = function() {
            this.X && (0 != this.id && (ed(this.aa, "100%"), ed(this.aa, this.X.offsetWidth)), er(this), El(this.aa, this.ba.isVisible))
        };

        function er(a) {
            Xc(a.aa, a.ba.Rg + "%", a.ba.ud + "%");
            for (var b = 0; 8 >= b; b++) Sk(a.aa, "anchor-point-" + b);
            Z(a.aa, "anchor-point-" + a.ba.Qg)
        }
        f.Hm = function(a) {
            var b = [];
            B(a, function(a) {
                a.zh ? b[b.length - 1] += a.td : b.push(a.td)
            });
            this.Xd(b.join("\n"));
            this.Pb = a
        };
        f.Xd = function(a) {
            this.Qf = a = fr(a);
            this.X.innerHTML = this.Qf;
            this.Lj();
            this.Xe()
        };
        f.Lj = function() {
            this.aa.style.textAlign = this.ba.textAlign;
            this.X.style.backgroundColor = this.ba.backgroundColor;
            this.X.style.color = this.ba.Pg;
            this.X.style.opacity = this.ba.Jj;
            this.X.style.fontFamily = this.ba.fontFamily;
            this.X.style.fontSize = this.ba.hs;
            1 == this.ba.Qd ? this.X.setAttribute("dir", "rtl") : this.X.removeAttribute("dir")
        };
        f.toString = function() {
            var a = "Caption window (" + this.id + "): " + this.Qf,
                b;
            for (b in this.ba) a += b + " " + this.ba[b] + " | ";
            return a
        };

        function fr(a) {
            a = a.split("\n");
            for (var b = 0, c = a.length; b < c; b++) a[b] = a[b] ? "&nbsp;" + a[b] + "&nbsp;" : "";
            return a.join("<br>")
        }
        f.Dh = function() {
            this.Pb = [];
            this.Xd("")
        };

        function gr(a, b) {
            dr.call(this, a, b);
            this.X.style.display = "block";
            this.X.style.padding = "0";
            this.hb = [];
            var c = this.X;
            Sk(c, "captions-text");
            Z(c, "caption-painton-text-rows")
        }
        A(gr, dr);
        f = gr.prototype;
        f.type = 0;
        f.Rl = "";
        f.Pf = !1;
        f.Za = null;
        f.hb = null;
        f.wh = function() {
            return this.hb[0] ? this.hb[0].offsetHeight : 0
        };

        function hr(a) {
            return a.hb.reduce(function(a, c) {
                return Math.max(a, c.offsetWidth)
            }, 0)
        }
        f.Xe = function() {
            0 != this.id && (ed(this.aa, "100%"), ed(this.aa, this.Pf ? hr(this) : this.Za.width));
            var a = Math.round(this.ba.Jc * this.wh()),
                b = this.aa;
            u("max-height") ? Uc(b, a + "px", "max-height") : wb("max-height", oa(Uc, b));
            er(this);
            El(this.aa, this.ba.isVisible)
        };
        f.Xd = function(a) {
            this.Dh();
            a = fr(a);
            this.Pf || (this.Qf = a);
            a = a.split("<br>");
            for (var b = 0, c = a.length; b < c; b++)
                if (a[b]) {
                    var d = Cc("div", {
                            "class": "caption-row-holder"
                        }),
                        e = Cc("span", {
                            "class": "caption-row captions-text"
                        });
                    d.appendChild(e);
                    e.innerHTML = a[b];
                    this.Pf || (this.X.style.height = this.Za.height + "px", this.X.style.width = this.Za.width + "px", d.style.position = "absolute", d.style.top = this.Za.Ql[b] + "px", d.style.left = this.Za.Pl[b] + "px");
                    this.X.appendChild(d);
                    this.hb.push(e)
                }
            this.Lj();
            this.Xe()
        };
        f.Dh = function() {
            for (var a = 0, b = this.hb.length; a < b; a++) {
                var c = Qc(this.hb[a], "caption-row-holder");
                Ic(c)
            }
            this.hb = []
        };
        f.Lj = function() {
            this.aa.style.textAlign = this.ba.textAlign;
            for (var a = 0, b = this.hb.length; a < b; a++) this.hb[a].style.backgroundColor = this.ba.backgroundColor;
            this.X.style.color = this.ba.Pg;
            this.X.style.opacity = this.ba.Jj;
            this.X.style.fontFamily = this.ba.fontFamily;
            1 == this.ba.Qd ? this.X.setAttribute("dir", "rtl") : this.X.removeAttribute("dir")
        };

        function ir(a, b) {
            dr.call(this, a, b);
            this.Pb = [];
            this.Fd = [];
            this.ab = [];
            this.Ye = new lh(433);
            this.Ye.stop();
            Q(this.Ye, "tick", v(this.ms, this))
        }
        A(ir, dr);
        f = ir.prototype;
        f.type = 2;
        f.is = 32;
        f.ab = null;
        f.Gd = 0;
        f.Fd = null;
        f.Ye = null;
        f.Xe = function() {
            ed(this.aa, "100%");
            var a = this.aa.offsetWidth,
                a = Math.min(jr(this), a);
            ed(this.aa, a + "px");
            ed(this.Ch, "100%");
            this.X.style.whiteSpace = "nowrap";
            er(this);
            El(this.aa, this.ba.isVisible)
        };
        f.Hm = function(a) {
            var b = a.length;
            if (0 >= b) this.Dh();
            else {
                for (var c = 0; c < b && 0 <= this.Pb.indexOf(a[c]);) c++;
                this.Pb = this.Pb.concat(a.slice(c));
                kr(this)
            }
        };
        f.Dh = function() {
            this.Pb = [];
            this.ab = [];
            this.Gd = 0;
            this.ab = [];
            this.Fd = [];
            lr(this)
        };

        function kr(a) {
            if (!mr(a))
                if (a.Gd >= a.Pb.length) lr(a);
                else {
                    var b = a.ab.length - 1;
                    0 > b && (a.Fd.push(0), a.Gd = 0, a.ab.push(""), b = 0);
                    for (var c = a.Pb.length, d = a.Gd; d < c; d++) {
                        var e = a.Pb[d];
                        if ("\n" == e.td) {
                            a.Gd++;
                            a.Fd[b]++;
                            break
                        }
                        if (e.zh || 0 == a.ab[b].length) a.ab[b] += e.td, a.Gd++, a.Fd[b]++;
                        else break
                    }
                    lr(a);
                    d < c && !mr(a) && (b = a.wh(), Z(a.X, "caption-rollup"), a.aa.style.overflow = "hidden", a.X.style.top = -b + "px", a.Ye.start())
                }
        }

        function mr(a) {
            return a.Ye.ic || Qk(a.X, "caption-rollup")
        }
        f.ms = function() {
            this.aa.style.overflow = "visible";
            this.X.style.top = 0;
            this.Ye.stop();
            Sk(this.X, "caption-rollup");
            this.ab.push("");
            this.Fd.push(0);
            kr(this)
        };

        function lr(a) {
            if (!mr(a)) {
                for (; a.ab.length < a.ba.Jc;) a.ab.unshift(""), a.Fd.unshift(0);
                for (; a.ab.length > a.ba.Jc;) {
                    a.ab.shift();
                    var b = a.Fd.shift();
                    0 < b && (a.Gd -= b, a.Pb.splice(0, b))
                }
                a.Xd(a.ab.join("\n"))
            }
        }

        function jr(a) {
            a.bb.style.fontFamily = a.X.style.fontFamily;
            a.bb.style.fontSize = a.X.style.fontSize;
            a.X.appendChild(a.bb);
            a.bb.innerHTML = "\u2014";
            var b = a.bb.offsetWidth;
            a.bb.innerHTML = "&nbsp;";
            b = 2 * a.bb.offsetWidth + b * a.is;
            a.X.removeChild(a.bb);
            return b
        };

        function nr(a) {
            this.a = a.Li;
            this.i = a.priority;
            this.Mb = a.Mb || this.Mb
        }
        nr.prototype.a = 0;
        nr.prototype.i = 0;
        nr.prototype.Mb = 0;
        nr.prototype.toString = function() {
            return this.a + ", " + this.Mb
        };

        function or(a) {
            nr.call(this, a);
            this.td = a.text || this.td;
            this.Kg = a.windowId || this.Kg;
            this.zh = a.params.append || this.zh;
            this.rn = a.params.row || this.rn;
            this.qn = a.params.ls || this.qn
        }
        A(or, nr);
        f = or.prototype;
        f.td = "";
        f.zh = !1;
        f.rn = 0;
        f.qn = 0;
        f.Kg = 0;
        f.toString = function() {
            return this.a + ", " + this.Mb + ": " + this.td
        };

        function pr(a) {
            var b = a.firstChild && a.firstChild.nodeValue || "",
                c = 1E3 * parseFloat(a.getAttribute("start") || 0);
            a.getAttribute("t") && (c = parseInt(a.getAttribute("t"), 10));
            var d = 1E3 * parseFloat(a.getAttribute("dur") || 0);
            a.getAttribute("d") && (d = parseFloat(a.getAttribute("d")));
            var e = parseInt(a.getAttribute("w"), 10) || 0,
                b = {
                    Li: c,
                    Mb: d,
                    text: b,
                    windowId: e,
                    priority: 5,
                    params: {}
                };
            a.getAttribute("r") && (b.params.row = parseInt(a.getAttribute("r"), 10));
            a.getAttribute("c") && (b.params.ls = parseInt(a.getAttribute("c"), 10));
            a.getAttribute("append") && (b.priority = 6, b.params.append = !0);
            return new or(b)
        }

        function qr(a) {
            nr.call(this, a);
            this.id = a.windowId || this.id;
            this.params = a.params
        }
        A(qr, nr);
        qr.prototype.id = 0;
        qr.prototype.params = null;
        qr.prototype.g = "";
        qr.prototype.b = !1;

        function rr() {
            return new qr({
                Li: -2147483648,
                Mb: 4294967295,
                params: $q
            })
        };

        function sr(a) {
            if ("undefined" != typeof DOMParser) return (new DOMParser).parseFromString(a, "application/xml");
            if ("undefined" != typeof ActiveXObject) {
                var b = new ActiveXObject("MSXML2.DOMDocument");
                if (b) {
                    b.resolveExternals = !1;
                    b.validateOnParse = !1;
                    try {
                        b.setProperty("ProhibitDTD", !0), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
                    } catch (c) {}
                }
                b.loadXML(a);
                return b
            }
            throw Error("Your browser does not support loading xml documents");
        };

        function tr(a) {
            this.b = [];
            this.g = [];
            this.a = {};
            if (a && (a = sr(a)) && a.firstChild) switch (this.i = a, this.i.firstChild.tagName) {
                case "timedtext":
                    a = this.i.firstChild.childNodes;
                    for (var b = 0, c = a.length; b < c; b++) switch (a[b].tagName) {
                        case "window":
                            var d = a[b],
                                e = parseInt(d.getAttribute("id"), 10),
                                g = void 0;
                            t: {
                                var h = this.a[e];
                                if (d.getAttribute("t") || d.getAttribute("start")) {
                                    g = parseInt(d.getAttribute("t"), 10);
                                    d.getAttribute("start") && (g = 1E3 * parseFloat(d.getAttribute("start")));
                                    h && (h.a + h.Mb >= g ? h.Mb = g : h = null);
                                    switch (d.getAttribute("op")) {
                                        case "kill":
                                            g =
                                                null;
                                            break t;
                                        case "define":
                                            h = null
                                    }
                                    h ? h.j = !0 : h = rr();
                                    var k = {};
                                    x(k, h ? h.params : $q);
                                    d.getAttribute("id") && (k.id = d.getAttribute("id"));
                                    d.getAttribute("op") && (k.ct = d.getAttribute("op"));
                                    d.getAttribute("rc") && (k.Jc = parseInt(d.getAttribute("rc"), 10));
                                    d.getAttribute("cc") && (k.Mi = parseInt(d.getAttribute("cc"), 10));
                                    d.getAttribute("ap") && (h = parseInt(d.getAttribute("ap"), 10), k.Qg = 0 > h || 8 < h ? 7 : h);
                                    d.getAttribute("ah") && (k.Rg = parseInt(d.getAttribute("ah"), 10));
                                    d.getAttribute("av") && (k.ud = parseInt(d.getAttribute("av"),
                                        10));
                                    d.getAttribute("id") && (k.id = parseInt(d.getAttribute("id"), 10) || 0);
                                    d.getAttribute("vs") && (k.isVisible = Boolean(d.getAttribute("vs")));
                                    d.getAttribute("ju") && (k.textAlign = Zq[parseInt(d.getAttribute("ju"), 10)]);
                                    d.getAttribute("pd") && (k.Qd = 1, 0 == parseInt(d.getAttribute("pd"), 10) && (k.Qd = 0));
                                    d.getAttribute("bc") && (k.backgroundColor = parseInt(d.getAttribute("bc"), 16));
                                    d.getAttribute("bo") && (k.opacity = parseInt(d.getAttribute("bo"), 10) / 100);
                                    d.getAttribute("fc") && (k.Pg = parseInt(d.getAttribute("fc"), 16));
                                    d.getAttribute("sd") &&
                                        (k.Bi = parseInt(d.getAttribute("sd"), 10));
                                    h = parseInt(d.getAttribute("d"), 10) || 1E3 * parseFloat(d.getAttribute("dur")) || 2147483647;
                                    d = {
                                        Li: g,
                                        Mb: h,
                                        params: k,
                                        windowId: parseInt(d.getAttribute("id"), 10)
                                    };
                                    g = new qr(d)
                                } else g = null
                            }
                            this.a[e] = g;
                            this.g.push(g);
                            break;
                        case "text":
                            e = pr(a[b]), this.b.push(e), d = e.Kg, this.a[d] && (d = this.a[d], e = e.td, "" != d.g && (d.b = !0), d.g += e)
                    }
                    break;
                default:
                    for (this.g.push(rr()), a = this.i.firstChild.childNodes, b = 0, c = a.length; b < c; b++) e = pr(a[b]), this.b.push(e)
            }
        }
        tr.prototype.b = null;
        tr.prototype.g = null;
        tr.prototype.a = null;

        function ur(a) {
            this.a = a.languageCode;
            this.b = a.languageName || null;
            this.g = a.languageOriginal || null;
            this.id = a.id || null;
            this.i = a.is_default || !1
        };

        function vr(a) {
            a = a || {};
            this.Zi = a.format;
            this.b = a.languageCode || "";
            this.Jf = a.languageName;
            this.fb = a.kind || "";
            this.zb = a.name;
            this.pa = a.id;
            this.Ri = a.is_servable;
            this.Wg = a.is_default;
            this.Xg = a.is_translateable;
            a.translationLanguage && (this.a = new ur(a.translationLanguage))
        }

        function wr(a) {
            var b = {
                format: a.Zi,
                languageCode: a.b,
                languageName: a.Jf,
                displayName: xr(a),
                kind: a.fb,
                name: a.zb,
                id: a.pa,
                is_servable: a.Ri,
                is_default: a.Wg,
                is_translateable: a.Xg
            };
            a.a && (b.translationLanguage = {
                languageCode: a.a.a,
                languageName: a.a.b,
                languageOriginal: a.a.g,
                id: a.a.id,
                is_default: a.a.i
            });
            return b
        }
        f = vr.prototype;
        f.Jf = null;
        f.fb = null;
        f.zb = null;
        f.pa = null;
        f.Ri = !1;
        f.Wg = !1;
        f.Xg = !1;
        f.Zi = 1;

        function xr(a) {
            var b = [a.Jf];
            if ("asr" == a.fb) {
                var c = Ne("HTML5_SUBS_ASR");
                b.push(" (", c, ")")
            }
            a.zb && b.push(" - ", a.zb);
            a.a && b.push(" >> ", a.a.b);
            return b.join("")
        }
        f.toString = function() {
            var a = [this.b, ": ", this.zb, " (", this.fb, ")"];
            this.a && a.push(" >> ", this.a.a);
            return a.join("")
        };
        f.equals = function(a) {
            if (!a) return !1;
            var b = this.a,
                c = a.a;
            if (b && c) {
                if (b.a != c.a) return !1
            } else if (b || c) return !1;
            return this.b == a.b && this.zb == a.zb && this.fb == a.fb
        };

        function yr() {
            this.g = [];
            this.a = []
        }
        yr.prototype.g = null;
        yr.prototype.a = null;
        yr.prototype.b = -1;

        function zr(a, b) {
            return b ? a.a.concat(a.g) : a.a
        }

        function Ar(a, b) {
            switch (b.fb) {
                case "asr":
                    return Br(b, a.g);
                default:
                    if (b.Wg || 0 > a.b) a.b = a.a.length;
                    return Br(b, a.a)
            }
        }

        function Br(a, b) {
            return Ka(b, v(a.equals, a)) ? !1 : (b.push(a), !0)
        };

        function Cr(a, b, c, d) {
            this.Uc = a;
            c ? this.Uc = pi(this.Uc, {
                hl: c
            }) : (a = mi(this.Uc).hl || "", a = a.split("_").join("-"), this.Uc = pi(this.Uc, {
                hl: a
            }));
            this.lh = b;
            this.nn = !!d;
            this.Sc = new yr;
            this.dh = [];
            this.on = {}
        }
        f = Cr.prototype;
        f.Uc = "";
        f.lh = null;
        f.nn = !1;
        f.Sc = null;
        f.dh = null;
        f.on = null;

        function Dr(a, b) {
            return Ka(zr(a.Sc, !0), function(a) {
                return a.toString() == b
            })
        }

        function Er(a, b) {
            var c = a.Uc,
                d = {
                    v: a.lh,
                    type: "track",
                    lang: b.b,
                    name: b.zb,
                    kind: b.fb,
                    fmt: b.Zi
                };
            b.a && (d.tlang = b.a.a);
            return c = pi(c, d)
        }

        function Fr(a, b, c) {
            var d = Er(a, b);
            a = v(function(a) {
                a = new tr(a.responseText);
                c(a, b)
            }, a);
            ti(d, a)
        }

        function Gr(a) {
            var b = a.Sc.b;
            a = zr(a.Sc, !0);
            return 0 > b ? null : a[b]
        }

        function Hr(a, b) {
            var c = a.Uc,
                d = {
                    type: "list",
                    tlangs: 1,
                    v: a.lh,
                    fmts: Number(!0)
                };
            a.nn && (d.asrs = 1);
            c = pi(c, d);
            d = v(function(a) {
                    if ((a = a.responseXML) && a.firstChild) {
                        for (var c = this.Sc, d = a.getElementsByTagName("track"), k = d.length, m = 0; m < k; m++) {
                            var p = parseInt(d[m].getAttribute("formats"), 10) || 1,
                                r = d[m].getAttribute("lang_code"),
                                n = d[m].getAttribute("lang_translated"),
                                w = d[m].getAttribute("name"),
                                L = d[m].getAttribute("kind") || "",
                                N = d[m].getAttribute("id"),
                                D = "true" == d[m].getAttribute("lang_default"),
                                pb = "true" == d[m].getAttribute("cantran");
                            Ar(c, new vr({
                                format: p,
                                languageCode: r,
                                languageName: n,
                                name: w,
                                kind: L,
                                id: N,
                                is_servable: !0,
                                is_default: D,
                                is_translateable: pb
                            }))
                        }
                        a = a.getElementsByTagName("target");
                        c = a.length;
                        for (d = 0; d < c; d++) k = a[d].getAttribute("lang_code"), m = a[d].getAttribute("lang_translated"), p = a[d].getAttribute("lang_original"), r = a[d].getAttribute("id"), n = "true" == a[d].getAttribute("lang_default"), k = {
                            languageCode: k,
                            languageName: m,
                            languageOriginal: p,
                            id: r,
                            is_default: n
                        }, this.on[k.languageCode] = k.languageName, this.dh.push(new ur(k))
                    }
                    b()
                },
                a);
            ti(c, d)
        };

        function Ir(a) {
            Wk.call(this, a);
            var b = Wf(a);
            this.Lc = a.N();
            this.Tl = a.app.R;
            this.Dd = [];
            this.ua = {};
            this.rd = {};
            this.Ud = [];
            this.i = K("captions-translation-select", b);
            this.Hj = K("captions-translation-dialog", b);
            this.Gj = K("captions-settings-dialog", b);
            this.mc = K("html5-captions-button", b);
            Q(this.mc, "click", v(this.Gr, this));
            Q(K("captions-translation-confirm", b), "click", v(this.Or, this));
            Q(K("captions-translation-cancel", b), "click", v(this.Ul, this));
            We(K("captions-settings-background-opacity", b), v(this.Er, this),
                "INPUT");
            We(K("captions-settings-text-opacity", b), v(this.Nr, this), "INPUT");
            We(K("captions-settings-window-opacity", b), v(this.Pr, this), "INPUT");
            We(K("captions-settings-char-edge-style", b), v(this.Hr, this), "SELECT");
            Q(K("captions-settings-font-family", b), "change", v(this.Lr, this));
            Q(K("captions-settings-font-inc", b), "click", v(this.dn, this));
            Q(K("captions-settings-font-dec", b), "click", v(this.cn, this));
            Q(K("captions-settings-confirm", b), "click", v(this.Dr, this));
            Q(K("captions-settings-cancel", b), "click",
                v(this.Mr, this));
            a = K("captions-settings-dialog", b);
            Ye(a, v(this.Ir, this), "html5-color-picker-button");
            this.mc && (this.vc = K("html5-captions-tracks", this.mc), this.De = Lp(Ep.getInstance(), this.mc), a = K("html5-captions-track-template", this.De), this.bn = new xq(a, ["track_id", "track_display_name"]), Ye(this.De, v(this.Fr, this), "yt-uix-button-menu-item"));
            this.Se = new lh;
            this.Se.stop();
            Q(this.Se, "tick", v(this.rj, this));
            this.D("onResize", v(this.jm, this));
            this.D("onBackgroundChange", v(this.Rr, this));
            this.D("onTextOpacityChange",
                v(this.Sr, this));
            this.D("onWindowOpacityChange", v(this.Tr, this));
            this.D("onFontSizeIncrease", v(this.dn, this));
            this.D("onFontSizeDecrease", v(this.cn, this));
            this.D("onShowControls", v(this.Kr, this));
            this.D("onHideControls", v(this.Jr, this));
            "detailpage" == this.Lc.V && (b = K("captions-account-settings-link", b)) && Fl(b);
            this.Yg = new dr(99, ar);
            this.Of = new lh(2E3);
            this.Of.stop();
            Q(this.Of, "tick", v(this.Qr, this))
        }
        A(Ir, Wk);
        f = Ir.prototype;
        f.ia = "captions";
        f.hg = "cc";
        f.Mm = "subtitlesModuleData";
        f.nh = !1;
        f.ej = !1;
        f.qc = null;
        f.Lc = null;
        f.Tl = null;
        f.mc = null;
        f.De = null;
        f.bn = null;
        f.Hj = null;
        f.Gj = null;
        f.vc = null;
        f.Ud = null;
        f.Dd = null;
        f.ua = null;
        f.rd = null;
        f.Se = null;
        f.Yg = null;
        f.Of = null;
        f.gb = null;
        f.Tg = !1;
        f.Im = 1;
        var Jr = {
            background: "#080808",
            backgroundOpacity: 1,
            charEdgeStyle: "uniform",
            color: "#fff",
            fontFamily: '"Arial Unicode Ms", Arial',
            fontFamilyOption: "propSans",
            fontSizeIncrement: 0,
            textOpacity: 1,
            windowColor: "#080808",
            windowOpacity: 0
        };
        f = Ir.prototype;
        f.yb = null;
        f.Il = !1;
        f.create = function() {
            Ir.G.create.call(this);
            this.qc = this.a.getVideoData();
            var a = this.a.N().U; - 1 == br.indexOf(a) && Z(Wf(this.a), "cc-international");
            this.b = Db(Jr);
            x(this.b, cl(this, "display-settings"));
            1 == this.Lc.a.cc_load_policy || 1 == this.qc.Jk || "alwayson" == Dk(this.qc, "yt:cc") ? a = !0 : (a = cl(this, "module-enabled"), a = null != a ? !!a : "on" == Dk(this.qc, "yt:cc") || this.Lc.a.cc_prefer_on);
            a && this.load()
        };
        f.destroy = function() {
            this.unload();
            Ir.G.destroy.call(this)
        };
        f.load = function() {
            if (this.nh) this.ca && (Ir.G.load.call(this), this.Tg = "alwayson" == Dk(this.qc, "yt:cc"), this.De && Uk(this.De, "captions-always-on", this.Tg), dl(this, "module-enabled", !0), this.nh = !1, Kr(this), this.jm());
            else {
                this.nh = !0;
                this.ca = !1;
                var a = this.qc.k.cc_lang_pref || this.Lc.a.cc_lang_pref || Dk(this.qc, "yt:cc_default_lang") || this.Lc.j,
                    a = a && a.split("_").join("-");
                this.gb = new Cr(this.qc.ih, this.qc.K, a, this.qc.oj);
                a = v(this.$l, this);
                Hr(this.gb, a)
            }
        };
        f.unload = function() {
            this.Hb && (Lr(this, !1), this.sm("control_subtitles_set_track"));
            Mr(this);
            al(this);
            dl(this, "module-enabled", !1);
            this.nh = !1;
            this.ca && (this.ca = !1, Ir.G.unload.call(this))
        };
        f.log_ = function() {};

        function Nr(a, b) {
            a.i && (Hc(a.i), B(b, function(a) {
                var b = Fc("option");
                b.setAttribute("value", a.a);
                b.appendChild(document.createTextNode(String(a.b + " -- " + a.g)));
                this.i.appendChild(b)
            }, a))
        }
        f.$l = function() {
            this.vc && Hc(this.vc);
            Nr(this, this.gb.dh);
            var a = zr(this.gb.Sc, !0);
            if (0 < a.length) {
                this.log_("Caption track list loaded, found " + a.length + " tracks.");
                B(a, function(a) {
                    if (a.Ri) {
                        var b = a.toString();
                        a = xr(a);
                        Or(this, b, a)
                    }
                }, this);
                var b = this.gb.Sc.b;
                (a = a[b] && a[b].toString()) && Pr(this, a);
                this.mc && Kp(Ep.getInstance(), this.mc);
                (a = Gr(this.gb)) ? (this.ej = !0, Qr(this, a)) : (this.ca || (this.ca = !0, this.load()), this.u("publish_external_event", "onCaptionsTrackListChanged"))
            } else this.log_("No captions found."),
                this.unload(), Gl(this.De), Gl(this.mc)
        };
        f.Pq = function(a, b) {
            var c = a.g.concat(a.b);
            this.log_("Caption track loaded with " + c.length + " events.");
            Mr(this);
            this.Ud = Ua(c);
            this.yb = b;
            this.Il = Xq.test(b.b);
            this.ca || (this.ca = !0, this.load());
            this.ej && (this.ej = !1, this.u("publish_external_event", "onCaptionsTrackListChanged"));
            c = C(c, function(a, b) {
                return new Fg(a.a, a.a + a.Mb, {
                    id: "caption" + b
                })
            });
            this.Ii.apply(this, c);
            this.Zl(b)
        };
        f.Zl = function(a) {
            var b = {
                trackName: a.zb,
                trackKind: a.fb
            };
            a.a ? (b.trackLangCode = a.a.a, b.fromLangCode = a.b) : b.trackLangCode = a.b;
            this.log(b);
            var b = this.Yg,
                c = xr(a);
            c && (c = c.replace(/<[^>]*>?/g, ""), b.Xd(c));
            Zk(this, this.Yg.aa);
            this.Of.start();
            this.u("publish_external_event", "captionschanged", wr(a))
        };
        f.He = function(a) {
            0 == a.getId().indexOf("caption") && (a = parseInt(a.getId().split("caption")[1], 10), !isNaN(a) && this.Ud[a] && (this.Dd.push(this.Ud[a]), this.Se.start()))
        };
        f.Te = function(a) {
            0 == a.getId().indexOf("caption") && (a = parseInt(a.getId().split("caption")[1], 10), !isNaN(a) && this.Ud[a] && (a = this.Dd.indexOf(this.Ud[a]), 0 <= a && this.Dd.splice(a, 1), this.Se.start()))
        };

        function Rr(a, b) {
            if (b instanceof qr) {
                var c = a.ua[b.id];
                x(b.params, a.b);
                c && c.getType() != (b.params.Bi ? 2 : b.b ? 0 : 1) && (Ic(c.aa), delete a.ua[b.id]);
                if (!a.ua[b.id]) {
                    var c = a.ua,
                        d = b.id,
                        e;
                    t: {
                        e = b.id;
                        var g = b.params;
                        switch (b.params.Bi ? 2 : b.b ? 0 : 1) {
                            case 0:
                                e = new gr(e, g);
                                break t;
                            case 2:
                                e = new ir(e, g);
                                break t;
                            default:
                                e = new dr(e, g)
                        }
                    }
                    c[d] = e;
                    c = a.ua[b.id].aa;
                    Uk(c, "captions-asr", "asr" == a.yb.fb);
                    null != b.params.Qd && (b.params.Qd = a.Il ? 1 : 0);
                    0 == a.ua[b.id].id ? (Z(c, a.ia), d = a.a.app.R.A, d.insertBefore(c, d.childNodes[0] || null)) : Zk(a,
                        c)
                }
                x(a.ua[b.id].ba, b.params);
                if (0 == (b.params.Bi ? 2 : b.b ? 0 : 1)) {
                    c = a.ua[b.id];
                    c.Rl = b.g;
                    c.Za = {};
                    c.Pf = !0;
                    c.Xd(c.Rl);
                    c.Za.Jc = c.hb.length;
                    c.Za.width = c.aa.offsetWidth;
                    c.Za.height = c.aa.offsetHeight;
                    c.Za.Pl = [];
                    c.Za.Ql = [];
                    for (d = 0; d < c.Za.Jc; d++) c.Za.Ql.push(c.hb[d].offsetTop), c.Za.Pl.push(c.hb[d].offsetLeft);
                    c.Pf = !1;
                    c.Xd(c.Qf)
                }
            } else c = b.Kg, a.rd[c] || (a.rd[c] = []), a.rd[c].push(b)
        }
        f.jm = function() {
            if (this.ca) {
                al(this);
                this.Im = Sr(this.Lc).height / 360;
                Kr(this);
                for (var a in this.ua) this.ua[a].Xe()
            }
        };

        function Tr(a) {
            var b = [],
                c;
            for (c in a.ua) {
                var d = a.ua[c];
                d instanceof gr && b.push(a.ua[c])
            }
            if (0 != b.length) {
                b.sort(function(a, b) {
                    return b.ba.ud - a.ba.ud
                });
                c = Sr(a.Lc).height;
                var e = a.ua[b[0].id].ba.ud,
                    g;
                for (g in b) {
                    d = a.ua[b[g].id];
                    d.ba.ud = e;
                    var h = Math.round(d.ba.Jc * d.wh()),
                        e = e - Math.round(100 * (h / c));
                    d.Xe()
                }
            }
        }
        f.Qr = function() {
            this.Of.stop();
            Ic(this.Yg.aa)
        };
        f.rj = function() {
            this.Se.stop();
            var a = this.Dd.length,
                b;
            for (b in this.rd) delete this.rd[b];
            this.Dd.sort(function(a, b) {
                return a.a == b.a ? a.i - b.i : a.a - b.a
            });
            for (var c = 0; c < a; c++) Rr(this, this.Dd[c]);
            for (b in this.ua) this.rd[b] ? this.ua[b].Hm(this.rd[b]) : (Ic(this.ua[b].aa), delete this.ua[b]);
            Tr(this);
            this.log_("Refreshing caption display...")
        };

        function Ur(a, b) {
            var c = K(a).querySelectorAll("." + b + " input[type=radio]"),
                d = Na(c, function(a) {
                    return a.checked
                }),
                d = (-1 == d ? 1 : d + 1) % c.length;
            c[d].click()
        }
        f.Rr = function() {
            Ur("captions-settings-background-opacity", "captions-settings-background-opacity-radio")
        };
        f.Sr = function() {
            Ur("captions-settings-text-opacity", "captions-settings-text-opacity-radio")
        };
        f.Tr = function() {
            Ur("captions-settings-window-opacity", "captions-settings-window-opacity-radio")
        };
        f.Er = function(a) {
            a = parseFloat(a.target.getAttribute("value"));
            isNaN(a) || (this.b.backgroundOpacity = a, Kr(this))
        };
        f.Nr = function(a) {
            a = parseFloat(a.target.getAttribute("value"));
            isNaN(a) || (this.b.textOpacity = a, Kr(this))
        };
        f.Pr = function(a) {
            a = parseFloat(a.target.getAttribute("value"));
            isNaN(a) || (this.b.windowOpacity = a, Kr(this))
        };
        f.Hr = function(a) {
            a.target && (this.b.charEdgeStyle = a.target.value, Kr(this))
        };
        f.Lr = function(a) {
            a.target && (this.b.fontFamilyOption = a.target.value, Kr(this))
        };
        f.Kr = function() {
            var a = this.ua[0];
            a && a.aa && (a = a.aa, Sk(a, "controls-hidden"), Z(a, "controls-visible"))
        };
        f.Jr = function() {
            var a = this.ua[0];
            a && a.aa && (a = a.aa, Qk(a, "controls-visible") && (Sk(a, "controls-visible"), Z(a, "controls-hidden")))
        };
        f.cn = function() {
            Vr(this, -1)
        };
        f.dn = function() {
            Vr(this, 1)
        };

        function Vr(a, b) {
            a.b.fontSizeIncrement += b;
            Kr(a)
        }

        function Wr(a, b) {
            var c = K(b);
            c && (c.querySelector('input[value="' + a.toFixed(1) + '"]').checked = !0)
        }

        function Xr(a, b, c) {
            var d = K(b);
            d && (b = d.querySelector("span.yt-uix-form-input-select-value"), d = d.querySelector("select"), d.value = a.b[c], Mc(b, d.options[d.selectedIndex].text))
        }

        function Mr(a) {
            Xk(a);
            a.Dd = [];
            a.Ud = [];
            a.yb = null;
            a.rj()
        }

        function Qr(a, b) {
            if (b)
                if (a.Hb) a.yb = b, Lr(a, !0), a.sm("control_subtitles_set_track", wr(b));
                else if (a.Lc.$c) {
                var c = a.gb,
                    d = a.Tl.a,
                    e = v(a.Zl, a),
                    g = c.Uc,
                    c = {
                        v: c.lh,
                        type: "track",
                        lang: b.b,
                        name: b.zb,
                        kind: b.fb,
                        fmt: "vtt"
                    };
                b.a && (c.tlang = b.a.a);
                var h = document.createElement("track");
                h.src = pi(g, c);
                h.mode = "showing";
                h.setAttribute("kind", "captions");
                h.setAttribute("default", "");
                d.appendChild(h);
                e(b)
            } else Fr(a.gb, b, v(a.Pq, a))
        }
        f.Gr = function() {
            this.ca ? O(v(this.mn, this), 1) : this.load()
        };
        f.Fr = function(a) {
            a = a.currentTarget;
            var b = M(a, "action");
            if (b) switch (b) {
                case "translate":
                    this.Tg || (al(this), $k(this), Fl(this.Hj));
                    break;
                case "settings":
                    al(this);
                    $k(this);
                    Yr(this);
                    Fl(this.Gj);
                    break;
                case "captions-off":
                    this.unload()
            } else(a = M(a, "trackid")) ? (Pr(this, a), b = Dr(this.gb, a), Qr(this, b), this.log_("Caption change failed for " + a)) : this.log_("onCaptionTrackClicked_ empty, ignoring")
        };

        function Pr(a, b) {
            if (a.vc) {
                var c = K("yt-uix-button-menu-item.active", a.vc);
                c && Sk(c, "active");
                if (c = a.vc.querySelector(".yt-uix-button-menu-item" + ('[data-trackid="' + b + '"]'))) Z(c, "active"), a.mn()
            }
        }
        f.mn = function() {
            var a = K("yt-uix-button-menu-item.active", this.vc);
            if (a) {
                var b = this.vc,
                    c = H && !I(8) ? 0 : b.offsetTop,
                    d = a.offsetTop + a.offsetHeight - c - (b.clientHeight + b.scrollTop) + 1;
                b.scrollTop += Math.max(d, 0);
                d = b.scrollTop - (a.offsetTop - c) + 1;
                b.scrollTop -= Math.max(d, 0)
            }
        };
        f.Ul = function() {
            Gl(this.Hj)
        };
        f.Or = function() {
            if (!this.Tg) {
                this.Ul();
                var a;
                t: {
                    var b = this.gb.dh;
                    for (a = 0; a < b.length; a++) {
                        var c = b[a];
                        if (c.a == this.i.value) {
                            a = c;
                            break t
                        }
                    }
                    a = null
                }
                a && (c = this.yb, b = new vr, b.b = c.b, b.Jf = c.Jf, b.zb = c.zb, b.fb = c.fb, b.Wg = !1, b.Xg = c.Xg, b.a = a, Ar(this.gb.Sc, b) && (a = b.toString(), Or(this, a, xr(b)), Pr(this, a), this.mc && Kp(Ep.getInstance(), this.mc)), Qr(this, b))
            }
        };
        f.Dr = function() {
            Gl(this.Gj)
        };
        f.Mr = function() {
            delete this.b;
            this.b = Db(Jr);
            dl(this, "display-settings", this.b);
            Kr(this)
        };

        function Kr(a) {
            Zr(a);
            var b = Km(a.b.background),
                c = a.b.backgroundOpacity;
            dl(a, "display-settings", a.b);
            a.k = rl(".captions-text, .caption-row", "background-color: rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + c + ") !important;", {
                Vc: a.k,
                reset: !0
            });
            Wr(c, "captions-settings-background-opacity");
            b = Km(a.b.color);
            c = a.b.textOpacity;
            dl(a, "display-settings", a.b);
            a.F = rl(".captions-text", "color: rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + c + ") !important;", {
                Vc: a.F,
                reset: !0
            });
            Wr(c, "captions-settings-text-opacity");
            b = Km(a.b.windowColor);
            c =
                a.b.windowOpacity;
            dl(a, "display-settings", a.b);
            a.J = rl(".caption-window-transform", "background-color: rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + c + ") !important;", {
                Vc: a.J,
                reset: !0
            });
            Wr(c, "captions-settings-window-opacity");
            dl(a, "display-settings", a.b);
            var b = a.b.charEdgeStyle,
                d = a.b.textOpacity;
            if ("none" == b) sl(a.j);
            else {
                var c = "",
                    e = "rgba(34, 34, 34, " + d + ")",
                    d = "rgba(204, 204, 204, " + d + ")";
                switch (b) {
                    case "dropShadow":
                        c = "text-shadow: 2px 2px 3px " + e + ", 2px 2px 4px " + e + ", 2px 2px 5px " + e + ";";
                        break;
                    case "raised":
                        c =
                            "text-shadow: 1px 1px " + e + ", 2px 2px " + e + ", 3px 3px " + e + ";";
                        break;
                    case "depressed":
                        c = "text-shadow: 1px 1px " + d + ", 0 1px " + d + ", -1px -1px " + e + ", 0 -1px " + e + ";";
                        break;
                    case "uniform":
                        c = "text-shadow: 0 0 4px " + e + ", 0 0 4px " + e + ", 0 0 4px " + e + ", 0 0 4px " + e + ";"
                }
                a.j = rl(".captions-text", c, {
                    Vc: a.j,
                    reset: !0
                })
            }
            Xr(a, "captions-settings-char-edge-style", "charEdgeStyle");
            c = b = "";
            switch (a.b.fontFamilyOption) {
                case "monoSerif":
                    b = '"Courier New", Courier, "Nimbus Mono L", monospace';
                    break;
                case "propSerif":
                    b = '"Times New Roman", Times, Georgia, Cambria, serif';
                    break;
                case "monoSans":
                    b = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, monospace';
                    break;
                case "propSans":
                    b = '"Arial Unicode Ms", Arial, Helvetica, Verdana, sans-serif';
                    break;
                case "casual":
                    b = '"Comic Sans MS", Impact, fantasy';
                    break;
                case "cursive":
                    b = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", cursive';
                    break;
                case "smallCaps":
                    b = '"Arial Unicode Ms", Arial, Helvetica, Verdana, sans-serif', c = "font-variant: small-caps;"
            }
            a.A = rl(".captions-text", c + "font-family: " + b + " !important;", {
                Vc: a.A,
                reset: !0
            });
            a.b.fontFamily = b;
            dl(a, "display-settings", a.b);
            Xr(a, "captions-settings-font-family", "fontFamilyOption");
            dl(a, "display-settings", a.b);
            b = "font-size: " + Math.round(((a.b.fontSizeIncrement || 0) + 16) * a.Im) + "px;";
            a.B = rl(".caption-window-transform", b, {
                Vc: a.B,
                reset: !0
            });
            a.rj()
        }
        f.Ir = function(a) {
            var b = v(function(b) {
                var d = M(a.currentTarget, b.toLowerCase());
                d && (this.b[b] = d)
            }, this);
            b("color");
            b("background");
            b("windowColor");
            Kr(this);
            dl(this, "display-settings", this.b)
        };

        function Yr(a) {
            var b = {
                    Vc: a.g
                },
                c = a.b.color,
                d = a.b.background,
                e = a.b.windowColor;
            c && (a.g = rl('.html5-popup-dialog button[data-color="' + c + '"]', "border: 3px solid #992121;", b));
            d && (a.g = rl('.html5-popup-dialog button[data-background="' + d + '"]', "border: 3px solid #992121;", b));
            e && (a.g = rl('.html5-popup-dialog button[data-windowcolor="' + e + '"]', "border: 3px solid #992121;", b))
        }

        function Zr(a) {
            var b = [],
                c = v(function(a) {
                    var c = this.b[a];
                    c && b.push(a + ": " + c + " !important")
                }, a);
            c("color");
            c("background");
            c = {
                Vc: a.g,
                reset: !0
            };
            a.g = rl(".captions-text", b, c);
            var d = Km(a.b.windowColor),
                c = {
                    Vc: a.H,
                    reset: !0
                };
            a.H = rl(".caption-window-transform", "background-color: rgba(" + d[0] + "," + d[1] + "," + d[2] + ", 1)", c);
            Yr(a)
        }

        function Or(a, b, c) {
            a.vc && (b = yq(a.bn, {
                track_id: b,
                track_display_name: c
            }), a.vc.appendChild(b))
        }

        function $r(a) {
            return Ir.prototype.fc(a) ? new Ir(a) : null
        }
        f.Dn = function(a, b) {
            switch (a) {
                case "fontSize":
                    return isNaN(b) || (this.b.fontSizeIncrement = b, Kr(this)), this.b.fontSizeIncrement;
                case "reload":
                    b && Hr(this.gb, v(this.$l, this));
                    break;
                case "track":
                    if (b) {
                        if (!ia(b)) break;
                        var c = new vr(b);
                        c.equals(this.yb) || (Qr(this, c), Pr(this, c.toString()))
                    } else return this.yb ? wr(this.yb) : {};
                    return "";
                case "tracklist":
                    return this.ca ? C(zr(this.gb.Sc, b && b.includeAsr), function(a) {
                        return wr(a)
                    }) : []
            }
        };
        f.Om = function() {
            return ["reload", "fontSize", "track", "tracklist"]
        };
        f.fc = function(a) {
            return !!a.getVideoData().ih
        };
        f.Jg = function(a) {
            a ? (a = this.yb, Mr(this), this.yb = a) : (Lr(this, this.ca), this.yb && Qr(this, this.yb))
        };

        function Lr(a, b) {
            Uk(Wf(a.a), a.ia + "-loaded", b)
        };
        var as = {
                su: "ERROR_ALREADY_PINNED_ON_A_DEVICE",
                uu: "ERROR_AUTHENTICATION_EXPIRED",
                vu: "ERROR_AUTHENTICATION_MALFORMED",
                wu: "ERROR_AUTHENTICATION_MISSING",
                zu: "ERROR_BAD_REQUEST",
                Du: "ERROR_CANNOT_ACTIVATE_RENTAL",
                Ku: "ERROR_CGI_PARAMS_MALFORMED",
                Lu: "ERROR_CGI_PARAMS_MISSING",
                vv: "DEVICE_FALLBACK",
                yv: "ERROR_LICENSE",
                gy: "FLASH_FALLBACK",
                Gy: "ERROR_GEO_FAILURE",
                My: "HTML5_DEFAULT_FALLBACK",
                Ny: "HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
                Ry: "ERROR_INVALID_DRM_MESSAGE",
                Vy: "LEARN_MORE",
                ez: "ERROR_NOT_SIGNED_IN",
                nz: "ERROR_PURCHASE_NOT_FOUND",
                oz: "ERROR_PURCHASE_REFUNDED",
                rz: "ERROR_RENTAL_EXPIRED",
                Eu: "ERROR_CAST_SESSION_DEVICE_MISMATCHED",
                Fu: "ERROR_CAST_SESSION_VIDEO_MISMATCHED",
                Hu: "ERROR_CAST_TOKEN_FAILED",
                Gu: "ERROR_CAST_TOKEN_EXPIRED",
                Iu: "ERROR_CAST_TOKEN_MALFORMED",
                wz: "ERROR_SERVER_ERROR",
                zz: "ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
                Az: "ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",
                Bz: "ERROR_STREAMING_NOT_ALLOWED",
                Cz: "ERROR_STREAMING_UNAVAILABLE",
                tz: "ERROR_RETRYABLE_ERROR",
                Gz: "ERROR_TOO_MANY_STREAMS_PER_USER",
                Fz: "ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",
                Jz: "ERROR_UNSUPPORTED_DEVICE",
                Kz: "ERROR_UNUSUAL_ACTIVITY",
                Mz: "ERROR_VIDEO_FORBIDDEN",
                Nz: "ERROR_VIDEO_NOT_FOUND"
            },
            bs = {
                300: "ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",
                301: "ERROR_ALREADY_PINNED_ON_A_DEVICE",
                303: "ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
                304: "ERROR_TOO_MANY_STREAMS_PER_USER",
                305: "ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",
                400: "ERROR_VIDEO_NOT_FOUND",
                401: "ERROR_GEO_FAILURE",
                402: "ERROR_STREAMING_NOT_ALLOWED",
                403: "ERROR_UNSUPPORTED_DEVICE",
                405: "ERROR_VIDEO_FORBIDDEN",
                500: "ERROR_PURCHASE_NOT_FOUND",
                501: "ERROR_RENTAL_EXPIRED",
                502: "ERROR_PURCHASE_REFUNDED",
                5E3: "ERROR_BAD_REQUEST",
                5001: "ERROR_CGI_PARAMS_MISSING",
                5002: "ERROR_CGI_PARAMS_MALFORMED",
                5100: "ERROR_AUTHENTICATION_MISSING",
                5101: "ERROR_AUTHENTICATION_MALFORMED",
                5102: "ERROR_AUTHENTICATION_EXPIRED",
                5200: "ERROR_CAST_TOKEN_MALFORMED",
                5201: "ERROR_CAST_TOKEN_EXPIRED",
                5202: "ERROR_CAST_TOKEN_FAILED",
                5203: "ERROR_CAST_SESSION_VIDEO_MISMATCHED",
                5204: "ERROR_CAST_SESSION_DEVICE_MISMATCHED",
                6E3: "ERROR_INVALID_DRM_MESSAGE",
                7E3: "ERROR_SERVER_ERROR",
                8E3: "ERROR_RETRYABLE_ERROR"
            };

        function cs() {
            this.a = [];
            this.i = {};
            this.o = {};
            this.C = {};
            this.b = this.j = null;
            this.g = [];
            this.k = null
        }
        A(cs, kf);
        cs.prototype.Wq = function(a) {
            if (this.b) {
                var b;
                var c = ja(a);
                b = this.i[c];
                if (!b)
                    if (this.b) {
                        if (b = a(this.b)) {
                            a = this.i[c] = b;
                            for (var d in this.j) a.D(d, this.j[d]);
                            a.D("command_log_timing", this.A, this);
                            R(this, b)
                        }
                    } else b = null;
                b && b.fc(this.b) && !E(this.a, b) && (b.create(), this.a.push(b), E(this.g, b.ia) && (b.Hb = this.k, b.Jg(!!b.Hb)))
            }
        };

        function ds(a) {
            B(a.a, function(a) {
                a.destroy()
            });
            a.a = []
        }

        function es(a, b, c) {
            fs(a);
            a.k = b;
            a.g = Ua(c);
            B(a.a, function(a) {
                0 <= Fa(c, a.ia) && (a.Hb = b, a.Jg(!!a.Hb))
            })
        }

        function fs(a) {
            B(a.g, function(a) {
                if (a = zf(this, a)) a.Hb = null, a.Jg(!1)
            }, a);
            a.k = null;
            a.g = []
        }

        function Nf(a, b, c, d) {
            return b && c ? (a = zf(a, b)) ? a.Dn(c, d) : null : null
        }

        function Of(a, b) {
            if (!b) return C(a.a, function(a) {
                return a.ia
            });
            var c = zf(a, b);
            return c ? c.Om() : []
        }

        function zf(a, b) {
            return Ka(a.a, function(a) {
                return a.ia == b
            })
        }
        cs.prototype.B = function(a, b) {
            B(this.a, function(c) {
                c.u(a, b)
            })
        };

        function gs(a) {
            var b = [];
            B(a.a, function(a) {
                (a = a.ph()) && b.push(a)
            });
            return b
        }
        cs.prototype.A = function(a, b) {
            x(this.C, a || null);
            x(this.o, b || null)
        };

        function hs(a) {
            this.a = {};
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.a[c.a] = c
            }
        }

        function is(a) {
            a = yb(a.a);
            $a(a, function(a, c) {
                return a.a - c.a
            });
            return a
        };

        function js(a, b, c) {
            this.b = a;
            this.a = b;
            this.i = !!c.Ie;
            this.g = c.S
        };

        function ks() {
            this.Bd = {};
            this.a = this.Ka().a;
            this.nc = null
        }
        f = ks.prototype;
        f.Ka = function() {
            var a = this.constructor,
                b;
            if (!(b = a.tn)) {
                var c;
                b = a.Fs;
                var d = [];
                for (c in b) b.hasOwnProperty(c) && (0 == c || d.push(new js(a, c, b[c])));
                c = new hs(d);
                b = a.tn = c
            }
            return b
        };
        f.has = function(a) {
            a.b.Ka();
            this.Ka();
            return null != this.Bd[a.a]
        };
        f.get = function(a, b) {
            a.b.Ka();
            this.Ka();
            var c;
            c = this.a[a.a];
            var d = ls(this, c);
            c.i ? (t(d), c = d[b || 0]) : (t(d), c = d);
            return c
        };
        f.set = function(a, b) {
            a.b.Ka();
            this.Ka();
            var c = a.a;
            this.Bd[c] = b;
            this.nc && (this.nc[c] = b)
        };
        f.add = function(a, b) {
            a.b.Ka();
            this.Ka();
            var c = a.a;
            this.Bd[c] || (this.Bd[c] = []);
            this.Bd[c].push(b);
            this.nc && delete this.nc[c]
        };
        f.clear = function(a) {
            a.b.Ka();
            this.Ka();
            a = a.a;
            delete this.Bd[a];
            this.nc && delete this.nc[a]
        };
        f.equals = function(a) {
            if (!a || this.constructor != a.constructor) return !1;
            for (var b = is(this.Ka()), c = 0; c < b.length; c++) {
                var d = b[c];
                if (this.has(d) != a.has(d)) return !1;
                if (this.has(d)) {
                    var e = 11 == d.g || 10 == d.g,
                        g = ls(this, d),
                        h = ls(a, d);
                    if (d.i) {
                        if (g.length != h.length) return !1;
                        for (d = 0; d < g.length; d++)
                            if (e ? !g[d].equals(h[d]) : g[d] != h[d]) return !1
                    } else if (e ? !g.equals(h) : g != h) return !1
                }
            }
            return !0
        };

        function ms(a, b) {
            for (var c = is(a.Ka()), d = 0; d < c.length; d++) {
                var e = c[d];
                if (b.has(e)) {
                    a.nc && delete a.nc[e.a];
                    var g = 11 == e.g || 10 == e.g;
                    if (e.i) {
                        var h, k = b;
                        h = e;
                        h.b.Ka();
                        k.Ka();
                        h = ls(k, k.a[h.a]);
                        null == h || t(h);
                        h = h || [];
                        for (k = 0; k < h.length; k++) a.add(e, g ? h[k].clone() : h[k])
                    } else h = ls(b, e), g ? (g = ls(a, e)) ? ms(g, h) : a.set(e, h.clone()) : a.set(e, h)
                }
            }
        }
        f.clone = function() {
            var a = new this.constructor;
            a != this && (a.Bd = {}, a.nc && (a.nc = {}), ms(a, this));
            return a
        };

        function ls(a, b) {
            var c = a.Bd[b.a];
            return null == c ? null : c
        }

        function ns(a, b) {
            a.Fs = b;
            a.Ka = function() {
                return a.tn || (new a).Ka()
            }
        };
        var os = {
            Dt: 0,
            Xu: 1,
            jv: 2,
            Ct: 3,
            Lt: 4,
            Vu: 5,
            hv: 6,
            dv: 7,
            ev: 8,
            fv: 9,
            av: 10,
            cv: 11,
            Nt: 12,
            Mt: 13,
            Bt: 14,
            ut: 15,
            Wu: 20,
            lv: 21,
            tt: 22,
            Yu: 23,
            kv: 24,
            iv: 25,
            It: 30,
            mv: 31,
            Ht: 32,
            Jt: 33,
            $u: 40,
            Zu: 41,
            Ot: 42,
            Pt: 43,
            vt: 50,
            zt: 51,
            Et: 52,
            Ft: 53,
            Gt: 54,
            lt: 55,
            nt: 56,
            Kt: 57,
            At: 58,
            xt: 60,
            wt: 61,
            qt: 70,
            kt: 80,
            Qt: 90
        };

        function ps() {
            ks.apply(this)
        }
        A(ps, ks);

        function qs() {
            ks.apply(this)
        }
        A(qs, ks);

        function rs() {
            ks.apply(this)
        }
        A(rs, ks);

        function ss() {
            ks.apply(this)
        }
        A(ss, ks);

        function ts() {
            ks.apply(this)
        }
        A(ts, ks);

        function us() {
            ks.apply(this)
        }
        A(us, ks);
        ns(ps, {
            0: {
                name: "YtAdType",
                lg: "video.YtAdType"
            },
            1: {
                name: "ad_namespace",
                required: !0,
                S: 14,
                defaultValue: 0,
                type: {
                    qu: 0,
                    wv: 1,
                    ru: 2,
                    Ju: 3,
                    Fy: 4,
                    uv: 5,
                    sv: 6,
                    Au: 7,
                    qv: 8,
                    Bu: 9,
                    pv: 10,
                    rv: 11,
                    tu: 12,
                    gA: 13
                }
            },
            2: {
                name: "ad_format",
                required: !0,
                S: 14,
                defaultValue: 0,
                type: {
                    nu: 0,
                    Sy: 1,
                    Qy: 2,
                    cz: 3,
                    Lz: 4,
                    Ty: 5,
                    Oy: 6,
                    Py: 7,
                    hA: 8,
                    xv: 9
                }
            },
            3: {
                name: "ad_invideo",
                S: 14,
                defaultValue: 0,
                type: {
                    pu: 0,
                    Ou: 1,
                    Pu: 2,
                    Qu: 3,
                    Ru: 4,
                    Nu: 5,
                    Cu: 6
                }
            },
            4: {
                name: "invideo_autoplay",
                S: 14,
                defaultValue: 0,
                type: {
                    xu: 0,
                    mz: 1
                }
            },
            5: {
                name: "ad_instream",
                S: 14,
                defaultValue: 0,
                type: {
                    ou: 0,
                    Hz: 1
                }
            },
            6: {
                name: "ad_instream_long",
                S: 8,
                type: Boolean
            }
        });
        ns(qs, {
            0: {
                name: "AdId",
                lg: "video.AdId"
            },
            1: {
                name: "ad_network",
                S: 14,
                defaultValue: 1,
                type: {
                    iz: 1,
                    jt: 2
                }
            },
            2: {
                name: "ad_network_name",
                S: 9,
                type: String
            },
            3: {
                name: "ad_id",
                required: !0,
                S: 9,
                type: String
            }
        });
        ns(rs, {
            0: {
                name: "YtAdEvent",
                lg: "video.YtAdEvent"
            },
            1: {
                name: "ad_event_type",
                required: !0,
                S: 14,
                defaultValue: 0,
                type: {
                    Zt: 0,
                    gu: 1,
                    au: 2,
                    ju: 3,
                    bu: 4,
                    cu: 5,
                    Wt: 6,
                    Ut: 7,
                    nv: 8,
                    Rt: 9,
                    hu: 10,
                    iu: 11,
                    St: 12,
                    ov: 13,
                    ku: 14,
                    Xt: 15,
                    Tt: 16,
                    Yt: 17,
                    Vt: 18,
                    lu: 100,
                    mu: 101,
                    eu: 130,
                    du: 131,
                    fu: 132
                }
            },
            2: {
                name: "wall_time",
                required: !0,
                S: 2,
                type: Number
            },
            3: {
                name: "media_time",
                required: !0,
                S: 2,
                type: Number
            },
            4: {
                name: "logentry_time_usec",
                required: !0,
                S: 3,
                type: String
            },
            5: {
                name: "ad_error_type",
                S: 14,
                defaultValue: 0,
                type: os
            }
        });
        ns(ss, {
            0: {
                name: "YtAdSlot",
                lg: "video.YtAdSlot"
            },
            1: {
                name: "slot_time",
                required: !0,
                S: 2,
                type: Number
            },
            2: {
                name: "ad_type",
                required: !0,
                S: 11,
                type: ps
            },
            3: {
                name: "ad_events",
                Ie: !0,
                S: 11,
                type: rs
            },
            4: {
                name: "ad_video_duration",
                S: 2,
                type: Number
            },
            5: {
                name: "ad_id",
                S: 9,
                type: String
            },
            6: {
                name: "slot_index",
                S: 5,
                type: Number
            }
        });
        ns(ts, {
            0: {
                name: "YtVideoMetadata",
                lg: "video.YtVideoMetadata"
            },
            1: {
                name: "content_owner_ids",
                Ie: !0,
                S: 9,
                type: String
            },
            2: {
                name: "video_duration_seconds",
                S: 2,
                type: Number
            },
            3: {
                name: "all_content_owner_ids",
                S: 9,
                type: String
            }
        });
        ns(us, {
            0: {
                name: "YtWatchAdInfo",
                lg: "video.YtWatchAdInfo"
            },
            1: {
                name: "video_id",
                required: !0,
                S: 9,
                type: String
            },
            2: {
                name: "allowed_ads",
                Ie: !0,
                S: 11,
                type: ps
            },
            3: {
                name: "ad_slots",
                Ie: !0,
                S: 11,
                type: ss
            },
            4: {
                name: "ps",
                S: 9,
                type: String
            },
            5: {
                name: "el",
                S: 9,
                type: String
            },
            6: {
                name: "country",
                S: 9,
                type: String
            },
            7: {
                name: "feature",
                S: 9,
                type: String
            },
            8: {
                name: "blocked",
                S: 8,
                type: Boolean
            },
            9: {
                name: "plid",
                S: 9,
                type: String
            },
            10: {
                name: "video_metadata",
                S: 11,
                type: ts
            },
            11: {
                name: "experiment_id",
                Ie: !0,
                S: 3,
                type: String
            },
            12: {
                name: "ad_flags",
                S: 4,
                type: String
            },
            13: {
                name: "all_experiment_ids",
                S: 9,
                type: String
            },
            14: {
                name: "no_ads_returned",
                S: 8,
                type: Boolean
            },
            15: {
                name: "ad_errors",
                Ie: !0,
                S: 14,
                defaultValue: 0,
                type: os
            },
            16: {
                name: "ad_slot_with_event",
                S: 11,
                type: ss
            }
        });

        function vs(a, b) {
            Qf.call(this, a, b)
        }
        A(vs, Qf);
        f = vs.prototype;
        f.qf = function() { of (this.app, !0, this.a);
            this.app.we(!1, this.a)
        };
        f.dl = function() {
            this.app.ve(!1, this.a)
        };
        f.pn = function(a, b, c) { of (this.app, !0, this.a);
            var d = this.app,
                e = this.a;
            d.xe(d.getCurrentTime() + a, b, c, e)
        };
        f.Eg = function(a, b) { of (this.app, !0, this.a);
            this.app.xe(a, b, void 0, this.a)
        };
        f.ji = function() {
            sf(this.app, this.a)
        };

        function ws(a) {
            this.app = a;
            Wk.call(this, a.H)
        }
        A(ws, Wk);
        var xs = {
            fz: "0",
            gz: "1",
            zv: "2",
            Js: "3",
            yu: "4",
            vz: "5"
        };
        var ys = {
            qz: "red",
            eA: "white"
        };
        var zs = {
            Ms: "0",
            yz: "1",
            Su: "2"
        };
        var As = {
                "ad-trueview-indisplay-pv": 6,
                "ad-trueview-insearch": 7
            },
            Bs = {
                "ad-trueview-indisplay-pv": 2,
                "ad-trueview-insearch": 2
            },
            Cs = {
                detailpage: {
                    jc: !0
                }
            };
        Cs.embedded = {
            ti: af(),
            vi: "4",
            kc: !0
        };
        Cs.profilepage = {
            Ys: !0
        };
        var Ds = "ad blogger books docs google-live play picasaweb".split(" "),
            Es = {
                ad: {
                    hd: !1,
                    ke: !1,
                    Fb: !1,
                    Jb: !1,
                    jc: !1,
                    kc: !1,
                    tb: "adt"
                },
                blazer: {
                    Mh: "youtube_mobile",
                    ob: !1,
                    Rs: !1,
                    Gh: !1,
                    Hh: !1,
                    Dc: !0,
                    Ec: !1,
                    Ta: !1,
                    Pd: !0
                },
                blogger: {
                    hd: !1,
                    ke: !1,
                    Fb: !1,
                    Jb: !1,
                    Fc: !1,
                    jc: !1,
                    kc: !1,
                    tb: "bl"
                },
                books: {
                    hd: !1,
                    ke: !1,
                    Fb: !1,
                    Jb: !1,
                    Fc: !1,
                    jc: !0,
                    kc: !1,
                    tb: "gb"
                },
                docs: {
                    hd: !1,
                    ke: !1,
                    Fb: !1,
                    Jb: !1,
                    Fc: !1,
                    jc: !1,
                    kc: !1,
                    tb: "gd"
                },
                "google-live": {
                    hd: !1,
                    ke: !1,
                    Fb: !1,
                    Jb: !1,
                    Fc: !1,
                    jc: !1,
                    kc: !1,
                    tb: "gl"
                },
                play: {
                    Jb: !1,
                    Fc: !1,
                    jc: !1,
                    kc: !1,
                    tb: "gp"
                },
                "native": {
                    Gh: !1,
                    Hh: !1,
                    Ec: !0
                },
                olympics: {
                    Gh: !1,
                    Hh: !1,
                    yi: !0,
                    Pd: !0
                },
                picasaweb: {
                    hd: !1,
                    ke: !1,
                    Fb: !1,
                    Jb: !1,
                    Fc: !1,
                    jc: !1,
                    kc: !1,
                    tb: "pw"
                },
                touch: {
                    Gh: !1,
                    Hh: !1,
                    Pd: !0
                }
            };

        function Fs(a) {
            this.i = [];
            this.a = {};
            Gs(this, a.fexp);
            this.ka = Y(this.ka, a.origin);
            this.V = a.el || this.V;
            var b = Cs[this.V];
            b && x(this, b);
            b = a.ps || this.Ea;
            0 < navigator.msMaxTouchPoints && (b = "touch");
            this.Ea = b;
            (b = Es[this.Ea]) && x(this, b);
            Hs(this) && E(Ds, this.Ea);
            this.pi = !(!Dj().defaultPlaybackRate || Ub || zh || yh || Ah);
            a.use_media_volume || (b = Dj(), b.muted = !b.muted);
            this.Dk = Ah;
            if (zh || yh) this.jk = this.Tb || "blazer" != this.Ea;
            b = X(this.ti, a.fs);
            this.ti = "detailpage" == this.V || "olympics" == this.Ea ? b : b && af();
            this.Cc = Y(this.Cc, a.authuser);
            this.vi = Hj(this.vi, a.autohide, xs);
            this.ob = X(this.ob, a.autoplay);
            this.wi = X(this.wi, a.autoplayoverride);
            this.color = Hj(this.color, a.color, ys);
            this.k = Y(this.k, a.content_v);
            this.xi = Hj(this.xi, a.controls, zs);
            this.C = Y(this.C, a.cbrand);
            this.A = Y(this.A, a.cbr);
            this.B = Y(this.B, a.cbrver);
            this.cf = Y(this.cf, a.c);
            this.oe = Y(this.oe, a.cver);
            this.F = Y(this.F, a.cmodel);
            this.H = Y(this.H, a.cnetwork);
            this.J = Y(this.J, a.cos);
            this.L = Y(this.L, a.cosver);
            this.O = Y(this.O, a.cplatform);
            this.wg = X(this.wg, a.edu_mode);
            this.g = Y(this.g,
                a.eurl);
            this.T = Y(this.T, a.framer);
            this.ha = Hj(this.ha, a.iv_load_policy, vj);
            this.j = Y(this.j, a.hl);
            this.nl = X(this.nl, a.bwlogging);
            this.Dc = X(this.Dc, a.is_html5_mobile_device);
            this.pl = X(this.pl, a.player_wide);
            this.ql = X(this.ql, a.is_playground);
            this.loop = X(this.loop, a.loop);
            this.vf = X(this.vf, a.modestbranding);
            "red" != this.color && (this.vf = !1);
            this.og = X(this.og, a.noadapt);
            this.bf = X(this.bf, a.on3g);
            this.te = Y(this.te, a.pageid);
            this.Uh = Hj(this.Uh, a.vq, Gi);
            this.Sh = Y(this.Sh, a.playerapiid);
            this.vg = X(this.vg, a.playsinline);
            this.U = Y(this.U, a.cr);
            this.ja = Y(this.ja, a.q);
            this.Fb = X(this.Fb, a.logwatch);
            this.ki = X(this.ki, a.canplaylive);
            this.li = X(this.li, a.canplaypaid);
            this.Jb = X(this.Jb, a.showinfo);
            this.Fc = X(this.Fc, a.rel);
            this.jc = X(this.jc, a.enablesizebutton);
            this.rl = X(this.rl, a.ss);
            this.pb = Y(this.pb, a.theme);
            this.Ec = X(this.Ec, a.use_native_controls);
            this.Ta = !yh && X(this.Ta, a.svt);
            Hs(this) && (this.Dg = X(this.Dg, a.altf), this.kf = X(this.kf, a.retryneterr), this.yi = X(this.yi, a.nologo));
            this.kf = this.kf || this.Ac;
            this.Ec && (this.vf = !0,
                this.ha = 3);
            this.zi = X(this.zi, a.ssl);
            if (this.Pd = X(this.Pd, a.use_tablet_controls)) this.pb = "dark";
            var b = this.xg,
                c = a.video_container_override;
            if (c) {
                var d = c.split("x");
                2 == d.length && (c = parseInt(d[0], 10), d = parseInt(d[1], 10), b = isNaN(c) || isNaN(d) || 0 >= c * d ? b : new G(c, d))
            }
            this.xg = b;
            this.nb = Y(this.nb, a.attrib);
            this.ya = Y(this.ya, a.sk);
            this.protocol = this.zi ? "https" : "http";
            this.hf = "0" != this.xi;
            this.Qh = X(this.hf, a.store_user_volume);
            this.fd = X(this.fd, a.use_media_volume);
            (b = a.BASE_YT_URL) && Qi(b, Mi) && (this.rb = b);
            Is(this,
                a);
            Js(this, a);
            "detailpage" == this.V && delete this.g;
            this.Ih = Ks(this) + "s";
            this.kc = this.vf && !this.Ec ? !this.Jb : this.Jb || this.hf ? !1 : this.kc;
            b = this.ob || "detailpage" == this.V;
            c = !0;
            this.Dc && (c = !1);
            Kh("nintendo wiiu") && (c = !1);
            this.wi && (c = !0);
            this.ik = b && c;
            this.a = a
        }
        A(Fs, kf);
        f = Fs.prototype;
        f.ti = !0;
        f.Cc = "";
        f.vi = "2";
        f.ob = !1;
        f.wi = !1;
        f.rb = "/";
        f.Rs = !0;
        f.color = "red";
        f.xi = "1";
        f.cf = "web";
        f.oe = "html5";
        f.wg = !1;
        f.Gh = !0;
        f.Hh = !0;
        f.pi = !1;
        f.V = "detailpage";
        f.nl = !1;
        f.Si = !1;
        f.Dc = !1;
        f.Zg = !1;
        f.pl = !1;
        f.hd = !0;
        f.ql = !1;
        f.ke = !0;
        f.Yh = !1;
        f.loop = !1;
        f.vf = !1;
        f.og = !1;
        f.Uh = null;
        f.Sh = "";
        f.bf = !1;
        f.te = "";
        f.Ea = null;
        f.vg = !1;
        f.Dg = !1;
        f.Dk = !1;
        f.kf = !1;
        f.ik = !1;
        f.Fb = !1;
        f.ki = !0;
        f.li = !0;
        f.hf = !0;
        f.Qh = !0;
        f.fd = !1;
        f.Jb = !0;
        f.Fc = !0;
        f.Ys = !1;
        f.jc = !1;
        f.kc = !1;
        f.rl = !1;
        f.yi = !1;
        f.jk = !1;
        f.Ec = !1;
        f.Ta = !0;
        f.zi = !1;
        f.Pd = !1;
        f.ac = null;
        f.xg = null;
        f.Zq = null;
        f.tf = null;
        f.Ha = null;
        f.$h = null;
        f.tb = "yt";

        function Is(a, b) {
            a.Fb = X(a.Fb, b.logwatch);
            a.oa = void 0 == b.user_age ? a.oa : Number(b.user_age);
            a.qe = Y(a.qe, b.user_display_image);
            a.Lh = Y(a.Lh, b.user_display_name);
            a.za = Y(a.za, b.user_gender)
        }

        function Js(a, b) {
            var c;
            t: {
                if (b && ((c = b.adformat) || (c = (c = b.attrib) && c in As && c in Bs ? Bs[c] + "_" + As[c] : void 0), c)) {
                    var d = c.match(/^(\d*)_((\d*)_?(\d*))$/);
                    if (d && 5 == d.length && (d = d[3], d = 6 == d || 7 == d || 9 == d || 11 == d, Qi(a.ka, Ni) || d)) break t
                }
                c = void 0
            }
            c && (a.b = c, a.a.adformat = b.adformat);
            c = b.agcid;
            a.Xb = c;
            a.a.agcid = c;
            c = b.feature;
            a.o = c;
            a.a.feature = c;
            if (c = b.referrer) a.referrer = c, a.a.referrer = c;
            "1" == b.enablecsi && (a.Si = !1)
        }

        function Ls(a) {
            var b = {};
            b.c = a.cf;
            a.oe && (b.cver = a.oe);
            a.O && (b.cplatform = a.O);
            a.C && (b.cbrand = a.C);
            a.F && (b.cmodel = a.F);
            a.H && (b.cnetwork = a.H);
            a.A && (b.cbr = a.A);
            a.B && (b.cbrver = a.B);
            a.J && (b.cos = a.J);
            a.L && (b.cosver = a.L);
            return b
        }

        function Gs(a, b) {
            if (b) {
                a.i = b.split(",");
                var c = {};
                B(a.i, function(a) {
                    c[a] = !0
                });
                a.Tb = !!c["918108"];
                a.ek = !!c["912711"];
                a.$c = !!c["925900"];
                a.ed = !!c["913559"];
                a.Zb = !!c["930401"];
                a.Tj = !!c["913428"];
                a.ea = !!c["904828"] || !!c["904830"];
                a.Sj = !!c["913424"];
                a.Ca = !!c["932206"];
                a.yc = !!c["932217"];
                a.Rj = !!c["932225"];
                a.$b = !!c["932246"];
                a.Rb = !!c["932245"];
                a.xc = !!c["932240"];
                a.Xc = !!c["932236"];
                a.Wb = !!c["932237"];
                a.Qb = !!c["932242"];
                a.Sb = !!c["932243"];
                a.Vb = !!c["932247"];
                a.Zc = !!c["932248"];
                a.Ia = !!c["932239"];
                a.dd = !!c["932249"];
                a.Ub = !!c["924604"];
                a.Yb = !!c["924610"];
                a.Ac = !!c["918117"];
                a.zc = !!c["907226"] && "leanback" != a.V;
                a.da = !!c["938600"]
            }
        }

        function Ms(a, b) {
            switch (b.Bc) {
                case 38:
                    var c = b.K.indexOf(":"),
                        d = b.K.slice(0, c),
                        c = b.K.slice(c + 1);
                    return U("//web.archive.org/web/20130831093956/https://play.google.com/books/volumes/" + d + "/content/media", {
                        aid: c,
                        sig: b.zc
                    });
                case 30:
                    return d = "//web.archive.org/web/20130831093956/https://docs.google.com/", a.rb != Fs.prototype.rb && (d = a.rb), U(d + "get_video_info", {
                        docid: b.K,
                        authuser: b.Cc,
                        authkey: b.Vl,
                        eurl: a.g
                    });
                case 33:
                    return U("192.168.1.184/get_video_info", {
                        key: b.K
                    });
                default:
                    return d = {
                            html5: "1",
                            video_id: b.K,
                            cpn: b.wa,
                            eurl: a.g,
                            ps: a.Ea,
                            el: a.V,
                            hl: a.j,
                            list: b.b,
                            agcid: a.Xb,
                            sts: 15944
                        },
                        b.ea ? d.vvt = b.ea : b.H && (d.access_token = b.H), a.b && (d.adformat = a.b), b.ja && (d.iv_load_policy = b.ja), b.ne && (d.autoplay = "1"), b.cj && (d.mdx = "1"), b.dj && (d.utpsa = "1"), b.Zb && (d.is_fling = "1"), c = Ns(a), c.width && (d.width = c.width), c.height && (d.height = c.height), b.$b && (d.ypc_preview = "1"), b.Yc && (d.splay = "1"), a.k && (d.content_v = a.k), b.Yl && (d.livemonitor = 1), a.Cc && (d.authuser = a.Cc), a.te && (d.pageid = a.te), x(d, Ls(a)), U(a.rb + "get_video_info", d)
            }
        }

        function Ks(a) {
            return a.wg ? "//web.archive.org/web/20130831093956/https://s.youtubeeducation.com/" : a.ke ? "//web.archive.org/web/20130831093956/https://s.youtube.com/" : "//web.archive.org/web/20130831093956/https://video.google.com/"
        }

        function Os(a) {
            return a.referrer ? a.referrer.slice(0, 128) : ""
        }

        function Ns(a) {
            return (a = a.$h) ? new G(a.clientWidth, a.clientHeight) : new G(Number.NaN, Number.NaN)
        }

        function Sr(a) {
            return a.Ha ? new G(a.Ha.clientWidth, a.Ha.clientHeight) : new G(Number.NaN, Number.NaN)
        }

        function Ps(a) {
            var b = {};
            if (!a.Ha) return b;
            a.Ha.webkitDecodedFrameCount && (b.hmewdfc = a.Ha.webkitDecodedFrameCount, b.hmewdrop = a.Ha.webkitDroppedFrameCount, b.hmewvdbc = a.Ha.webkitVideoDecodedByteCount, b.hmewadbc = a.Ha.webkitAudioDecodedByteCount);
            a.Ha.mozParsedFrames && (b.hmempf = a.Ha.mozParsedFrames, b.hmemdf = a.Ha.mozDecodedFrames, b.hmempresented = a.Ha.mozPresentedFrames, b.hmempainted = a.Ha.mozPaintedFrames, b.hmempaintdelay = a.Ha.mozPaintDelay);
            return b
        }

        function Qs(a) {
            var b = q("yt.www.watch.activity.getTimeSinceActive", window);
            if ("detailpage" == a.V && b) return b();
            var c;
            a.cb && (c = y() - a.cb);
            return c
        }

        function Hs(a) {
            a = Qi(a.ka, Mi) && Pi(document.location.toString());
            var b = Qi(document.location.toString(), Mi) && !Pi(document.location.toString());
            return a || b
        }
        f.I = function() {
            this.$h = this.Ha = null;
            Fs.G.I.call(this)
        };

        function Rs(a) {
            this.a = a;
            this.pendingRequests_ = [];
            this.g = [];
            this.b = this.i = null;
            this.j = 0
        }

        function Ss(a, b) {
            a.pendingRequests_.push(b);
            a.i = b.g[b.g.length - 1];
            a.j += b.Z.length
        }

        function Ts(a) {
            for (; a.pendingRequests_.length && 5 == a.pendingRequests_[0].state;) {
                var b = a.pendingRequests_.shift();
                B(b.o, a.C, a)
            }
        }
        Rs.prototype.C = function(a) {
            if (4 == a.info.type) {
                for (var b = nj(a.info.a, a.info), c = [], d = 0; d < b.length; d++) {
                    var e = b[d].Z.start + b[d].wb - a.info.Z.start;
                    c.push(new Vi(b[d], a.data.subarray(e, e + b[d].Oa)))
                }
                Va(this.g, c)
            } else 3 == a.info.type && this.g.push(a)
        };

        function Us(a) {
            a.pendingRequests_.length ? a.i = Da(a.pendingRequests_[a.pendingRequests_.length - 1].g) : a.g.length ? a.i = Da(a.g).info : a.i = a.b
        }

        function Vs(a) {
            return kj(a.a) ? a.a.index.g ? a.a.index.b[a.a.index.M] : -1 : NaN
        }

        function Ws(a, b) {
            kj(a.a);
            a.i = oj(a.a, b, 0)[0];
            a.b && a.b.g && (a.b = null);
            return a.i.startTime
        }

        function Xs(a) {
            Ys(a);
            if (a.a.info.a && a.b && !a.b.b) {
                var b = La(a.g, function(a) {
                    return a.info.b
                });
                a.g = Xa(a.g, 0, b + 1);
                a.k = !0
            } else a.g = [];
            if (a.g.length)
                for (a.j = a.g[0].data.buffer.byteLength, b = 1; b < a.g.length; b++) a.g[b].data.buffer != a.g[b - 1].data.buffer && (a.j += a.g[b].data.buffer.byteLength);
            else a.j = 0
        }

        function Zs(a) {
            var b = !1,
                c;
            for (c = 0; c < a.pendingRequests_.length; c++)
                if (7 == a.pendingRequests_[c].state) {
                    b = !0;
                    break
                }
            if (b) {
                for (; c < a.pendingRequests_.length;) a.o(a.pendingRequests_.pop());
                Us(a)
            }
        }

        function $s(a) {
            var b = a.b;
            a.g.length && (b = Da(a.g).info);
            b = a.i || b;
            return b.Gg(b.Z.length - (b.Oa + b.wb))
        }

        function at(a) {
            return Ha(a.g, function(a) {
                return a.info.b
            })
        }

        function bt(a) {
            return Ja(a.pendingRequests_, function(a) {
                return !(!a.b || 1 != a.b.priority) && !(4 <= a.state)
            })
        }
        Rs.prototype.o = function(a) {
            Ti(a.g[0]) || a.dispose();
            this.j -= a.Z.length
        };

        function Ys(a) {
            B(a.pendingRequests_, a.o, a);
            a.pendingRequests_ = [];
            a.i = null
        };

        function ct(a, b) {
            this.state = 1;
            this.g = b;
            this.k = a;
            this.o = null;
            for (var c = 1; c < b.length; c++);
            c = b[b.length - 1];
            this.Z = new Ki(b[0].Z.start + b[0].wb, c.Z.start + c.wb + c.Oa - 1);
            this.C = this.g[0].a.j;
            this.F = NaN;
            this.A = this.j = 0;
            this.i = NaN;
            this.b = this.B = null;
            this.H = ""
        }
        f = ct.prototype;
        f.start = function() {
            var a = 6 == this.state;
            1 == this.state || 3 == this.state || a && dt(this);
            et(this, 2);
            if (a) {
                if (this.j < this.k.k) {
                    this.j++;
                    a = 0.5 + Math.random();
                    O(v(this.Fl, this), 1E4 * a);
                    return
                }
                a = this.C;
                if (!(this.F <= a.g)) {
                    a.b++;
                    a.g = Yi - 1;
                    var b;
                    b = le(a.a).Wd;
                    var c = Ri(a.a);
                    a.a = pi(c, {
                        cmo: "pf=" + a.b,
                        shost: b
                    })
                }
                this.j = 0
            }
            O(v(this.Fl, this), 0)
        };
        f.Fl = function() {
            if (!this.W()) {
                this.F = Yi++;
                var a = {
                    range: this.Z.toString(),
                    keepalive: "yes"
                };
                4 == this.g[this.g.length - 1].type && (a.fr = "yes");
                a = U(this.C.a, a);
                this.j && (a = Pd(Td(a, "playerretry"), "playerretry", this.j.toString()));
                this.H = a;
                var b = {
                    format: "RAW",
                    method: "GET",
                    responseType: "arraybuffer",
                    withCredentials: !0,
                    ze: v(this.zo, this)
                };
                this.a = wi(a, b);
                this.A = 0;
                this.b && (a = this.b, a.a = y(), a.j = a.a, a.b = 0, a.o = 0, a.i = !1, a.k = {
                    Mk: Ag(a.g),
                    yo: a.g.b.b() || 0,
                    xo: Bg(a.g)
                }, ft(a), this.a.addEventListener("progress", v(this.Ao, this), !1), 0 < this.k.a && !Ti(this.g[0]) && (this.i = O(v(this.Rk, this), this.k.a)))
            }
        };
        f.Ao = function(a) {
            if (!this.W()) {
                var b = this.b,
                    c = a.timeStamp,
                    d = a.loaded;
                c < b.a && (c = y());
                if (!(20 > c - b.j)) {
                    if (32768 < d) {
                        gt(b, c);
                        var e = (c - b.j) / 1E3,
                            g = d - b.b;
                        if (0 < g)
                            if (0.2 < e || 1024 > g) b.o += e;
                            else {
                                var h = b.g,
                                    e = Math.max(e, 0.05);
                                h.a.g(e, g / e)
                            }
                    }
                    b.j = c;
                    b.b = d
                }
                this.b.b > this.b.A && 4 > this.state && et(this, 4);
                4 == a.target.readyState && ht(this.b, a.timeStamp)
            }
        };
        f.zo = function(a) {
            if (!this.W() && a == this.a) {
                this.i && (P(this.i), this.i = NaN);
                var b = null == a.response || 400 <= a.status;
                if (!b) {
                    a = a.response;
                    var c;
                    t: {
                        if (2048 > a.byteLength && (c = String.fromCharCode.apply(String, new Uint8Array(a)), Qi(c, Mi))) break t;c = ""
                    }
                    if (c) a = this.C, c = Td(c, "keepalive"), c = Td(c, "playerretry"), c = Td(c, "range"), c = Td(c, "shost"), a.a = c, et(this, 3);
                    else if (a.byteLength != this.Z.length) b = !0;
                    else {
                        c = this.g;
                        for (var d = new Uint8Array(a), e = [], g = 0, h = 0; h < c.length; h++) {
                            var k = c[h],
                                m;
                            m = Ti(k) ? a.slice ? new Uint8Array(a.slice(g,
                                g + k.Oa)) : new Uint8Array(d.subarray(g, g + k.Oa)) : d.subarray(g, g + k.Oa);
                            e.push(new Vi(k, m));
                            g += k.Oa
                        }
                        this.o = e;
                        et(this, 5)
                    }
                }
                b && (dt(this), et(this, 6))
            }
        };

        function dt(a) {
            return a.j < a.k.k ? !0 : !(a.F > a.C.g && 1 <= a.C.b)
        }

        function et(a, b) {
            a.state = b;
            3 <= a.state && a.B && a.B(a)
        }
        f.Rk = function() {
            this.i = NaN;
            if (!this.W() && this.b) {
                var a = !1;
                if (this.b.i) {
                    var b = this.b.C;
                    ft(this.b);
                    this.b.C - b >= 0.8 * (this.k.a / 1E3) ? (this.A++, a = 5 <= this.A) : this.A = 0
                } else a = 5 < y() / 1E3 - (this.b.a / 1E3 + this.b.k.Mk);
                a ? (et(this, 7), it(this), ht(this.b, Date.now())) : this.i = O(v(this.Rk, this), this.k.a)
            }
        };
        f.W = function() {
            return -1 == this.state
        };
        f.dispose = function() {
            et(this, -1);
            this.B = this.o = null;
            it(this);
            P(this.i);
            this.i = NaN
        };

        function it(a) {
            if (a.a) {
                var b = a.a;
                a.a = null;
                b.abort()
            }
        };

        function jt(a, b, c, d) {
            this.priority = b;
            this.g = a;
            this.A = d;
            this.b = this.j = this.a = NaN;
            this.o = 0;
            this.B = c;
            this.C = NaN;
            this.i = !1
        }

        function ht(a, b) {
            b < a.a && (b = y());
            gt(a, b);
            var c = a.g,
                d = a.b,
                e = a.o,
                d = Math.max(d, 32768);
            c.b.g(1, e / d);
            c = a.g;
            d = b - a.a;
            e = a.b;
            isNaN(e) || (c.g += e);
            isNaN(d) || (c.i += d / 1E3)
        }

        function ft(a) {
            var b = a.B - a.b,
                b = b * a.k.yo + b / a.k.xo,
                c = y() / 1E3,
                b = a.i ? b + c : b + Math.max(c, a.a / 1E3 + a.k.Mk);
            a.C = b
        }

        function gt(a, b) {
            a.i || (a.g.j.g(1, (b - a.a) / 1E3), a.i = !0)
        };

        function kt(a, b, c, d) {
            W.call(this);
            this.k = a;
            this.a = b;
            this.i = new Rs(c);
            this.b = new Rs(d);
            this.j = this.A = this.B = NaN;
            this.L = this.J = this.H = !1;
            this.o = NaN;
            this.O = !1
        }
        A(kt, W);
        var lt = 2 / 24;
        f = kt.prototype;
        f.Fp = function(a) {
            this.g = a;
            a.Mc.appendBuffer && (a.Mc.addEventListener("updateend", v(this.We, this), !1), a.Fe.addEventListener("updateend", v(this.We, this), !1));
            mt(this)
        };

        function nt(a) {
            a.g && a.g.Mc && a.g.Mc.removeEventListener && (a.g.Mc.removeEventListener("updateend", v(a.We, a)), a.g.Fe.removeEventListener("updateend", v(a.We, a)));
            a.g = null
        }

        function ot(a) {
            if (0 < a.a.i) {
                var b = (a.i.a.info.b + a.b.a.info.b + 12500) * a.a.i;
                if (0 < a.a.g) {
                    if (b > a.a.g) return;
                    b = a.a.g
                }
                b = {
                    cwndbw: (8 * b / 1024).toFixed(0)
                };
                Zi(a.i.a.j, b);
                Zi(a.b.a.j, b)
            }
        }

        function pt(a, b, c) {
            c -= 2;
            c -= c * b * (a.k.b.b() || 0);
            c = Math.max(a.a.H, Math.min(a.a.L, c));
            a = Math.max(a.a.J, Math.ceil(a.a.H * b));
            return Math.min(a, Math.ceil(c * b))
        }

        function qt(a, b) {
            var c = Math.min(2.5, Ag(a.k));
            return Math.ceil(b * c + 32768)
        }

        function rt(a, b) {
            if (!b.i) {
                if (!kj(b.a)) return;
                Ws(b, a.j)
            }
            if (!(b.j > a.a.C)) {
                var c = b.i;
                4 == c.type && kj(c.a) && (b.i = Da(nj(c.a, c)), c = b.i);
                if (!c.g && (kj(c.a) || (isNaN(c.a.a) ? 0 : c.Z.end + 1 < c.a.a)) && (3 == c.type || !c.a.info.j)) {
                    var d = a.j + a.a.A;
                    if (!(3 == c.type && c.k > d || 2 <= bt(b) + 1)) {
                        var d = c.k - a.j,
                            e = c.a.info.b,
                            g = kj(c.a) ? pt(a, e, d) : a.a.F,
                            h = qt(a, c.a.info.b),
                            k = !1,
                            e = !1;
                        if (c && 3 == c.type && kj(b.a) && c.a != b.a) {
                            var d = pt(a, b.a.info.b, d + (c.startTime + c.duration - c.k)),
                                m = qt(a, b.a.info.b),
                                e = c.a.info.b < b.a.info.b;
                            if (!e || d >= m) k = !0, g = d, h = m
                        }
                        d =
                            h;
                        0 < g && (d = Math.max(a.a.F, g, Math.min(2 * g, h)));
                        if (k) {
                            c = b.i ? b.i.startTime + b.i.duration + lt : 0;
                            if (a.a.b && e) t: {
                                e = Ag(a.k) + d * (a.k.b.b() || 0) + d / Bg(a.k) + a.j + 2,
                                e = Math.min(e, c),
                                e = aj(b.a.index, e),
                                e + 1 < b.a.index.Xa() && (c = b.a.index.b[e + 1]),
                                e = c;
                                if (b.pendingRequests_.length) {
                                    if (b.pendingRequests_[0].g[0].startTime <= e) break t;
                                    Ys(b)
                                }
                                for (g = b.g.length - 1; 0 <= g; g--) h = b.g[g],
                                h.info.startTime > e && (b.g.pop(), b.g.length && b.g[g - 1].data.buffer == h.data.buffer || (b.j -= h.data.buffer.byteLength));Us(b)
                            }
                            b.i && !b.i.b && (e = new ct(a.a, $s(b)),
                                st(a, e, !0), Ss(b, e));
                            b.i && (c = b.i ? b.i.startTime + b.i.duration + lt : 0);
                            d = new ct(a.a, oj(b.a, c, d))
                        } else d = new ct(a.a, c.Gg(d));
                        st(a, d, !1);
                        Ss(b, d)
                    }
                }
            }
        }

        function st(a, b, c) {
            c = c ? 2 : 1;
            a.a.O && (c = 0);
            var d = Math.min(2.5, Ag(a.k)),
                e = Bg(a.k);
            b.b = new jt(a.k, c, b.Z.length, 0.95 * b.Z.length - d * e);
            a = v(a.Jq, a);
            b.B = a;
            b.start()
        }
        f.Jq = function(a) {
            if (!this.W()) {
                var b = 6 == a.state && dt(a);
                3 == a.state || b ? (b && this.u("softerror", 209), a.start()) : 5 == a.state ? (this.F || (this.F = a.H), tt(this), B(a.o, function(a) {
                    if (Ti(a.info)) t: {
                        var b = a.info.a;
                        if (1 == a.info.type) {
                            if (b.b) break t;
                            b.b = a.data
                        } else if (2 == a.info.type) {
                            if (b.g || b.index.Xa()) break t;
                            if (1 == b.info.i) {
                                var e = b.index,
                                    g = a.info.Z.start;
                                a = new DataView(a.data.buffer);
                                var h = 0,
                                    k = a.getUint32(0, !1),
                                    m = a.getUint8(h + 8),
                                    h = h + 12,
                                    p = a.getUint32(h + 4, !1),
                                    h = h + 8,
                                    r;
                                0 == m ? (m = a.getUint32(h, !1), r = a.getUint32(h + 4, !1), h += 8) : (m = (a.getUint32(h, !1) << 32) + a.getUint32(h + 4, !1), r = (a.getUint32(h + 8, !1) << 32) + a.getUint32(h + 12, !1), h += 16);
                                e.a[0] = r + (k + g);
                                e.b[0] = m;
                                e.g = !0;
                                g = a.getUint16(h + 2, !1);
                                h += 4;
                                for (k = 0; k < g; k++) {
                                    var n = a.getUint32(h, !1);
                                    r = a.getUint32(h + 4, !1);
                                    h += 12;
                                    m = e;
                                    r = r / p;
                                    m.M++;
                                    bj(m);
                                    m.a[m.M] = m.a[m.M - 1] + n;
                                    m.b[m.M] = m.b[m.M - 1] + r
                                }
                            } else b.g = a.data
                        }
                        if (Di(b.info) && b.b && b.g) {
                            e = b.index;
                            k = b.g.buffer;
                            h = new cj(new DataView(b.b.buffer));
                            if (440786851 == dj(h) && (fj(h), 408125543 == dj(h))) {
                                p = h;
                                g = p.a;
                                a = ej(p, !0);
                                p.a = g;
                                h = gj(h);
                                p = h.g + h.a;
                                for (n =
                                    dj(h); 357149030 != n;) fj(h), n = dj(h);
                                h = gj(h);
                                m = 1E6;
                                r = 1E9;
                                for (g = 0; !(h.a >= h.b.byteLength);)
                                    if (n = dj(h), 2807729 == n) m = hj(h);
                                    else if (2807730 == n) r = hj(h);
                                else if (17545 == n) {
                                    var g = h,
                                        n = ej(g, !0),
                                        w = 0;
                                    4 == n ? w = g.b.getFloat32(g.a) : 8 == n && (w = g.b.getFloat64(g.a));
                                    g.a += n;
                                    g = w
                                } else fj(h);
                                m /= r;
                                g *= m;
                                h = new cj(new DataView(k));
                                if (475249515 == dj(h)) {
                                    for (h = gj(h); !(h.a >= h.b.byteLength);)
                                        if (n = dj(h), 187 == n) {
                                            k = gj(h);
                                            n = m;
                                            r = p;
                                            if (179 != dj(k)) n = null;
                                            else if (n *= hj(k), 183 != dj(k)) n = null;
                                            else {
                                                k = gj(k);
                                                for (w = r; !(k.a >= k.b.byteLength);) 241 == dj(k) ?
                                                    w = hj(k) + r : fj(k);
                                                n = [w, n]
                                            }
                                            k = e;
                                            r = n[0];
                                            n = n[1];
                                            bj(k);
                                            k.a[k.M] = r;
                                            k.b[k.M] = n;
                                            k.M++
                                        } else fj(h);
                                    h = g;
                                    a = a + p;
                                    bj(e);
                                    e.g = !0;
                                    e.b[e.M] = h;
                                    e.a[e.M] = a
                                }
                            }
                            b.g = null
                        }
                    }
                }), !Ia(a.o, function(a) {
                    return Wi(a)
                }) || kj(a.g[0].a) && !isNaN(a.g[0].a.a) && (a.g[0].a.index.g ? a.g[0].a.index.a[a.g[0].a.index.M] : -1) != a.g[0].a.a ? ut(this, 126) : mt(this)) : 7 == a.state || 4 == a.state ? (7 == a.state && this.u("softerror", 210), mt(this)) : ut(this, 121)
            }
        };

        function tt(a) {
            if (!a.O && a.F && window.performance && window.performance.getEntriesByName) {
                var b = window.performance.getEntriesByName(a.F);
                if (b.length) {
                    var b = b[0],
                        c = window.performance.timing.navigationStart;
                    Op("vrst", c + b.fetchStart);
                    Op("vdns", c + b.domainLookupEnd);
                    Op("vreq", c + b.requestStart);
                    Op("fvb", c + b.responseStart);
                    a.O = !0
                }
            }
        }

        function mt(a) {
            isNaN(a.B) && (a.B = O(v(a.We, a), 0))
        }

        function vt(a) {
            isNaN(a.A) && (a.A = O(v(function() {
                this.We();
                this.A = NaN
            }, a), 1E3))
        }
        f.We = function() {
            this.B = NaN;
            if (!this.J && this.g) {
                var a = Math.floor(Math.max(Vs(this.i), Vs(this.b)));
                isNaN(a) || (this.g.Ae(a), this.J = !0)
            }
            if (!this.W())
                if ("prerender" == window.document.webkitVisibilityState) vt(this);
                else {
                    this.g && this.g.Lb() && nt(this);
                    Ts(this.b);
                    Ts(this.i);
                    Zs(this.b);
                    Zs(this.i);
                    if (this.g) {
                        a = wt(this, this.b, this.g.Fe);
                        if (!a) {
                            var b = xt(this.g.Fe, this.j);
                            if (!isNaN(b) || this.b.b && this.b.b.g) this.b.b && this.b.b.g && (b = NaN), a = wt(this, this.i, this.g.Mc, b)
                        }
                        if (a) {
                            this.g.Mc.appendBuffer || mt(this);
                            return
                        }
                        if (this.b.b &&
                            this.b.b.g && this.i.b && this.i.b.g && this.g.isOpen()) {
                            a = this.g;
                            a.isOpen() && a.g.endOfStream();
                            return
                        }
                    }
                    this.Fk();
                    rt(this, this.b);
                    rt(this, this.i)
                }
        };
        f.Fk = function() {
            if (!this.W() && !isNaN(this.a.o)) {
                var a;
                a = Bg(this.k);
                var b = Ag(this.k) + 1048576 * (this.k.b.b() || 0);
                a = a * Math.min(1, 1048576 / (a * b));
                !isNaN(this.o) && Math.abs(this.o - a) / a < this.a.o || (Math.round(a / 1024), Math.round(this.o / 1024), this.u("bandwidthchange", a), pg("yt-player-bandwidth", {
                    byterate: a
                }, 2592E3), this.o = a)
            }
        };

        function wt(a, b, c, d) {
            if (c.updating) return !0;
            var e = b.g.length ? b.g[0].info : null;
            if (!e) return !1;
            !b.b || b.b.b || Ui(b.b, e) || (b.b = null, a.g.isOpen() && c.abort(), c.g = null);
            var g;
            g = e.a;
            kj(g);
            c.g != g.b ? (c.g = g.b, c.appendBuffer ? (c.appendBuffer(g.b), g = c.updating) : (c.append(g.b), g = !0)) : g = !1;
            if (g) return !0;
            g = !1;
            if (d) {
                if (e.o >= d) return !1;
                g = 1.5 < e.j
            }
            if (!b.k && (g ? e.o + 1 : e.k) - a.j > a.a.B) return !1;
            a = e.o - a.j;
            if (b.a.info.a && !(at(b) || b.b && !b.b.b || b.k || 2 >= a)) return !1;
            g ? (a = b.g[0], d = Math.min(1, a.info.j), d = Math.floor(a.data.length * (d /
                a.info.j)), e = new Si(a.info.a, a.info.Z, a.info.type, a.info.i, a.info.startTime, a.info.duration, a.info.wb, d, !1), g = a.data.subarray(0, d), a.info = new Si(a.info.a, a.info.Z, a.info.type, a.info.i, a.info.startTime, a.info.duration, a.info.wb + d, a.info.Oa - d, a.info.g), a.data = a.data.subarray(d), a = new Vi(e, g), b.b = a.info) : (a = b.g.shift(), b.g.length && b.g[0].data.buffer == a.data.buffer || (b.j -= a.data.buffer.byteLength), b.b = a.info);
            b.k && b.b.b && (b.k = !1);
            b = a;
            c.appendBuffer ? (c.appendBuffer(b.data), c = c.updating) : (c.append(b.data),
                c = !0);
            return c
        }

        function xt(a, b) {
            for (var c = 0; c < a.buffered.length; c++)
                if (a.buffered.start(c) <= b && a.buffered.end(c) >= b) return a.buffered.end(c);
            return NaN
        }

        function zt(a, b) {
            if (!a.W()) {
                var c = At(a, a.b, b, a.g && a.g.Fe),
                    d = At(a, a.i, c, a.g && a.g.Mc);
                a.j = Math.max(b, c, d);
                a.H = !0;
                mt(a)
            }
        }

        function At(a, b, c, d) {
            if (kj(b.a))
                if (d) {
                    if (a.L && a.a.b) return Xs(b), Ws(b, c);
                    var e = xt(d, c),
                        g = NaN,
                        h = b.b;
                    h && (g = xt(d, h.a.index.b[h.i]));
                    if (e == g) return c;
                    Xs(b);
                    b.a.info.a && b.b && !b.b.b && !at(b) && (d = new ct(a.a, $s(b)), st(a, d, !0), Ss(b, d));
                    if (isNaN(e)) return Ws(b, c);
                    Ws(b, e + lt)
                } else Ws(b, c);
            else b.a.i ? 0 != c && Ys(b) : Bt(a, b, !1);
            return c
        }

        function Bt(a, b, c) {
            var d = c ? 65536 : 0;
            c && !isNaN(a.a.j) && (d = Math.floor(Math.max(d, a.a.j * b.a.info.b)));
            c = lj(b.a, d);
            B(c, function(a) {
                var c = new ct(this.a, a);
                st(this, c, !0);
                Ti(a[a.length - 1]) || Ss(b, c)
            }, a);
            b.a.i = !0
        }
        f.I = function() {
            nt(this);
            Ys(this.i);
            Ys(this.b);
            this.b = this.i = null;
            kt.G.I.call(this)
        };

        function ut(a, b) {
            a.u("fatalerror", b);
            if (a.g && a.g.isOpen()) {
                var c = a.g;
                c.isOpen() && c.g.endOfStream("network")
            }
            a.dispose()
        };

        function Ct() {
            this.B = 30;
            this.A = 40;
            this.C = 20971520;
            this.H = this.j = 2;
            this.F = 131072;
            this.L = 15;
            this.J = 2097152;
            this.o = 0.1;
            this.k = 2;
            this.b = !0;
            this.g = this.i = this.a = NaN
        };

        function Dt(a, b, c) {
            this.a = a;
            this.headers = b;
            this.message = c
        };

        function Et(a, b, c, d, e, g, h) {
            this.a = [];
            this.g = a;
            this.k = b.g;
            this.j = b;
            this.i = c;
            this.F = d;
            this.H = e;
            this.b = [];
            this.J = h || null;
            this.B = this.L = !1;
            this.A = null;
            this.o = !0;
            this.C = {};
            this.listen(this.g, ["keymessage", "webkitkeymessage"], this.hi);
            this.listen(this.g, ["keyadded", "webkitkeyadded"], this.vo);
            this.listen(this.g, ["keyerror", "webkitkeyerror"], this.wo);
            g && this.b.push(g)
        }
        A(Et, Sj);

        function Sf(a, b) {
            if (Qi(b, Mi)) {
                for (var c in a.C) b = Pd(Td(b, c), c, a.C[c]);
                a.k = b
            } else Ft(a, "u")
        }
        f = Et.prototype;
        f.start = function() {
            this.W() || (this.L = !0, this.b.length && this.hi(this.b.shift()))
        };
        f.dispose = function() {
            Et.G.dispose.call(this);
            this.H = this.g = null
        };
        f.hi = function(a) {
            this.W() || a.sessionId != this.i || (this.B && a.defaultURL && Sf(this, a.defaultURL), this.L ? (this.A = a, Gt(this, a)) : this.b.push(a))
        };
        f.vo = function(a) {
            this.W() || a.sessionId != this.i || (this.B = !0, this.b.length && this.hi(this.b.shift()))
        };

        function Gt(a, b) {
            var c = {
                format: "RAW",
                method: "POST",
                Vr: b.message.buffer,
                responseType: "arraybuffer",
                withCredentials: !0,
                oc: a.Wr,
                onError: a.Nl,
                Aa: a
            };
            a.J && (c.headers = {
                Authorization: "Bearer " + a.J
            });
            var d = a.k;
            a.o || (d = Pd(Td(d, "exclude_customdata"), "exclude_customdata", "1"));
            wi(d, c)
        }
        f.Wr = function(a) {
            if (!this.W())
                if (0 != a.status && a.response) {
                    t: {
                        a = new Uint8Array(a.response);
                        var b = 0,
                            c = String.fromCharCode.apply(String, a.subarray(0, 16384)).split("\r\n"),
                            d = c[0];Ra(c, 0);c.pop();
                        var b = b + (d.length + 2),
                            e = d.match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);
                        if (null != e) {
                            d = e[1];
                            isFinite(d) && (d = String(d));
                            for (var d = u(d) ? /^\s*-?0x/i.test(d) ? parseInt(d, 16) : parseInt(d, 10) : NaN, g = {}, h = 0; h < c.length; h++) {
                                e = c[h];
                                b += e.length + 2;
                                if (0 == e.length) {
                                    a = new Dt(d, g, a.subarray(b));
                                    break t
                                }
                                e = e.match(/([^:]+):\s+([^]+)/);
                                if (null ==
                                    e) break;
                                g[e[1]] = e[2]
                            }
                        }
                        a = null
                    }
                    0 != a.a ? (b = bs[a.a.toString()], Ft(this, "f" + a.a, b ? b : "ERROR_LICENSE")) : (a = a.message, this.g.addKey ? this.g.addKey(this.j.a, a, this.F, this.i) : this.g.webkitAddKey(this.j.a, a, this.F, this.i))
                }
            else this.Nl(a)
        };
        f.wo = function(a) {
            this.W() || a.sessionId != this.i || ("playready" == this.j.b && a.errorCode == a.MEDIA_KEYERR_UNKNOWN && 2 == a.systemCode && this.o ? (this.o = !1, Gt(this, this.A)) : Ft(this, "s" + a.errorCode.code + "." + a.systemCode))
        };
        f.Nl = function(a) {
            Ft(this, "r" + a.status)
        };

        function Ft(a, b, c) {
            a.W() || a.H(b, c);
            a.dispose()
        };

        function Ht(a, b, c, d) {
            this.a = [];
            this.b = a;
            this.g = b;
            this.B = c;
            this.o = d;
            this.A = null;
            this.j = {};
            this.C = {};
            this.i = null;
            this.k = [];
            this.listen(this.b, ["needkey", "webkitneedkey"], this.F);
            this.listen(this.b, ["keymessage", "webkitkeymessage"], this.J);
            this.listen(this.b, ["keyerror", "webkitkeyerror"], this.H)
        }
        A(Ht, Sj);
        Ht.prototype.dispose = function() {
            Ht.G.dispose.call(this);
            this.b = null;
            wb(this.j, function(a) {
                a.dispose()
            })
        };
        Ht.prototype.F = function(a) {
            a = a.initData;
            if (!this.i && Cb(this.j) || "widevine" != this.g.b) {
                var b = String.fromCharCode.apply(String, a);
                if (!this.C[b]) {
                    this.C[b] = !0;
                    b = "clearkey" == this.g.b;
                    if (112 == a[4] && 115 == a[5] && 115 == a[6] && 104 == a[7] && b) {
                        t: {
                            for (var c = new DataView(a.buffer), b = 0; b < c.byteLength;) {
                                var d = c.getUint32(b, !1);
                                if (1886614376 != c.getUint32(b + 4, !1)) break;
                                if (1477738184 == c.getUint32(b + 12, !1) && 69420633 == c.getUint32(b + 16, !1) && 2464609580 == c.getUint32(b + 20, !1) && 1558758348 == c.getUint32(b + 24, !1)) {
                                    c = c.getUint32(b +
                                        28, !1);
                                    if (16 != c) break;
                                    a = a.subarray(b + 32, b + 32 + c);
                                    break t
                                }
                                b += d
                            }
                            a = null
                        }
                        if (!a) return
                    }
                    this.i ? this.k.push(a) : It(this, a)
                }
            }
        };

        function It(a, b) {
            if (!a.W()) {
                try {
                    a.b.generateKeyRequest ? a.b.generateKeyRequest(a.g.a, b) : a.b.webkitGenerateKeyRequest(a.g.a, b)
                } catch (c) {
                    var d = "g";
                    c instanceof DOMException && (d += c.code);
                    a.o(d, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK", !0);
                    return
                }
                a.i = b
            }
        }
        Ht.prototype.J = function(a) {
            if (!this.W() && this.b && !this.j[a.sessionId]) {
                var b = new Et(this.b, this.g, a.sessionId, this.i, this.o, a, this.A);
                this.j[a.sessionId] = b;
                this.i = null;
                this.B(b);
                this.k.length && It(this, this.k.shift())
            }
        };
        Ht.prototype.H = function(a) {
            !this.W() && this.b && (this.j[a.sessionId] || this.o("s" + a.errorCode.code + "." + a.systemCode))
        };

        function Jt(a) {
            this.a = a;
            this.b = NaN
        }

        function Kt(a, b) {
            var c, d;
            d = b.pe;
            d && d && "unknown" != d || (d = (d = a.a.Uh) && d && "unknown" != d ? d : "auto");
            if (d && "auto" != d && (c = null, d = Ii.indexOf(d), 0 <= d))
                for (; d < Ii.length && !(c = Bk(b, Ii[d])); d++);
            if (!c) {
                c = b.B;
                var e;
                a.a.ac ? (d = a.a.ac.clone(), yh && !a.a.vg && (d = (window.screen && window.screen.width ? new G(window.screen.width, window.screen.height) : null) || d), d.scale(yh || Ob ? window.devicePixelRatio || 1 : 1), e = a.a.xg || d) : e = a.a.xg;
                t: {
                    d = a.b;
                    var g = 0,
                        h = 0;null !== e && (g = e.width, h = e.height);e = 16 / 9;g > Math.round(e * h) && (g = Math.round(e * h));
                    g *= h;e = null;
                    for (h = 0; h < c.length; h++) {
                        e = c[h];
                        var k = e.getInfo(),
                            k = k.a.width * k.a.height * ("medium" == e.cc.a.i ? 0.26 : 0.85) > g,
                            m = !0;
                        e.a && d && (m = e.b.info.b + e.g.info.b < d);
                        if (!k && m) {
                            c = e;
                            break t
                        }
                    }
                    c = e
                }
                c || (c = b.B[0])
            }
            return c
        };

        function Lt() {
            this.b = this.a = NaN
        }

        function Mt(a, b, c) {
            if (a.a == b) return 500 < c - a.b;
            a.a = b;
            a.b = c;
            return !1
        };
        var Nt = [102, 107, 108];
        var uf = [0.25, 0.5, 1, 1.5, 2];

        function Ot(a, b) {
            this.state = a;
            this.a = b
        }

        function tm(a, b) {
            return V(a.state, b) && !V(a.a, b) ? 1 : !V(a.state, b) && V(a.a, b) ? -1 : 0
        };

        function Pt(a, b) {
            W.call(this);
            this.oa = new Lt;
            this.A = new di(v(this.getCurrentTime, this), v(this.po, this), v(this.ng, this));
            R(this, this.A);
            this.L = NaN;
            this.O = this.F = null;
            this.o = a;
            this.Da = new Jt(a);
            this.ha = NaN;
            this.ka = !1;
            this.g = this.k = null;
            this.T = [];
            this.U = !1;
            this.ja = NaN;
            this.i = new Zh;
            this.da = b;
            this.H = this.fa = null;
            this.B = NaN;
            this.J = new wm(this);
            this.b = this.a = null;
            this.ea = NaN;
            this.j = null
        }
        A(Pt, W);
        f = Pt.prototype;
        f.I = function() {
            P(this.ea);
            P(this.Ca);
            Ke(this.ja);
            Qt(this);
            zl(this);
            mf(this.k, this.H, this.J, this.a);
            this.a = this.J = this.i = this.k = this.O = this.oa = null
        };

        function Rt(a, b) {
            a.U = !1;
            a.L = NaN;
            a.b && Uh(a.b);
            St(a);
            Qt(a);
            mf(a.k, a.a);
            a.k = null;
            a.A.reset();
            2 == a.da && (b.fa = !1, b.Ol = !0);
            a.a = b;
            a.a.D("dataupdated", a.uq, a);
            a.a.D("dataloaded", a.tq, a);
            a.a.D("onStatusFail", a.sq, a);
            if (b.se && b.se > b.ma) {
                var c = b.se;
                a.O && (a.Bg(a.ya), a.ya = null);
                a.O = new Fg(1E3 * c, 2147483646);
                a.O.hc.D("onEnter", a.of, a);
                a.Ki(a.O)
            }
            Tt(a, "newdata")
        }

        function Qt(a) {
            Ke(a.ha);
            a.j && (lf(a.j), a.j = null)
        }
        f.getVideoData = function() {
            return this.a
        };
        f.N = function() {
            return this.o
        };

        function Ut(a) {
            return !(!a.a || !a.a.B.length)
        }

        function Vt(a) {
            if (a.a && (a.a.K || a.a.re)) return !0;
            Wt(a, 2);
            return !1
        }

        function Xt(a) {
            a.U || (Yt(a, ai(new Zh, 8)), a.j && Zt(a.j), a.U = !0, !Vt(a) || a.a && a.a.ce || $t(a, v(function() {
                if (Ut(this)) au(this);
                else if (!this.a.ce)
                    if (bu(this)) au(this);
                    else {
                        var a = Ms(this.o, this.a);
                        Ek(this.a, a)
                    }
            }, a)))
        }

        function cu(a) {
            if (!a.T.length) {
                if (!a.A.rf) {
                    var b = a.A;
                    b.g = ii(b);
                    b.rf = !0;
                    b.vb()
                }
                a.T.length || 0 < ph(a.A.b, -2147483648).length || a.u("playbackready", a)
            }
        }
        f.oo = function() {
            var a = this.j,
                b = this.a.Ci;
            a.Jm != b && (du(a, {
                metric: "heartbeat",
                tpmt: this.a.Nd
            }), a.Jm = b)
        };

        function au(a) {
            a.T = Ua(a.a.L);
            a.a.Sa && (eu(a, a.a.Ga), fu(a, !0));
            wf(a, "i");
            a.u("playbackdataloaded")
        }
        f.of = function(a) {
            gu(this);
            Yt(this, !1 == a ? new Zh : new Zh(ci()))
        };

        function Pf(a, b, c) {
            console.log("a:", a); // Log the entire 'a' object
        
            if (!a || !a.a) {
                console.error("a.a is null or undefined", a);
                return; // Early exit if a.a is not valid
            }
        
            console.log("a.a is valid:", a.a);
            
            const errorData = {
                event: "streamingerror",
                ec: b,
                v: a.a.K // This is now safe to access because we've checked a.a
            };
        
            console.log("Initial errorData:", errorData);
        
            if (c) {
                errorData.em = c;
                console.log("Updated errorData with 'em':", errorData);
            }
        
            x(errorData, Ls(a.o));
            console.log("Called x() with errorData:", errorData);
        
            if (a.j) {
                hu(a.j, errorData);
                console.log("Called hu() with errorData:", errorData);
            }
        }
        
        
        function Wt(a, b, c, d) {
            if (Ab(as, c)) var e = c;
            else var g = c;
            Yt(a, $h(a.i, 128, {
                errorCode: b,
                errorDetail: d,
                message: g,
                messageKey: e
            }))
        }

        function iu(a, b) {
            a.T = a.T.filter(function(a) {
                return b != a
            });
            cu(a)
        }
        f.ng = function() {
            return V(this.i, 8) && !V(this.i, 64) && !V(this.i, 2)
        };

        function bu(a) {
            return !(!a.a || !a.a.K && !a.a.re || a.a.K)
        }
        f.po = function() {
            return this.i
        };

        function ju(a, b) {
            a.b && zl(a);
            a.b = b;
            ku(a)
        }

        function zl(a) {
            a.g = null;
            a.b && (St(a), a.J.removeAll(), Uh(a.b), a.b = null)
        }

        function lu(a) {
            if (a.b) {
                var b = Ck(a.a);
                if (a.a.A && a.a.A.a) {
                    var c = a.a.A,
                        b = c.g,
                        c = c.b;
                    a.g || (a.g = new Tj(a.b, a.a.Ga, b.info.Pa, c.info.Pa), b = a.g, b.b || (b.b = b.g.ll ? b.g.a.webkitMediaSourceURL : window.URL.createObjectURL(b.g)), a.Ia = new Yj(b.b, !1, !0), b = v(a.k.Fp, a.k), a.g.j = b);
                    b = a.Ia
                }
                a.b.Kc != b ? mu(a, b) : (V(a.i, 64) && Yt(a, ai(a.i, 8)), Sh(a.b), a.a.Eb && !a.a.Sa && nu(a, Infinity))
            }
        }

        function wf(a, b, c) {
            if (!a.W() && Ut(a) && !V(a.i, 128)) {
                var d = NaN;
                !a.fa || a.o.Ca || a.o.og || (d = Bg(a.fa), "i" == b && (d = a.o.Rb ? 0.4 * d : 0.6 * d));
                a.Da.b = d;
                var e = Kt(a.Da, a.a),
                    d = e.getInfo(),
                    g = e.a ? e.b.info : d;
                if (a.a.a != d || a.a.za != g || a.a.Xb != b || c && a.a.pe != c) {
                    a.a.A = e;
                    a.a.a = d;
                    a.a.za = g;
                    a.a.Xb = b;
                    c && (a.a.pe = c);
                    c = "m" == a.a.Xb;
                    if (e.a)
                        if (a.k) {
                            var h = a.k,
                                e = e.g;
                            h.W() || (h.L = c, h.b.a != e && (h.b.a = e, ot(h), c && Xs(h.b), e.i || Bt(h, h.b, !1)))
                        } else {
                            var g = a.o,
                                k = new Ct;
                            if (g.Ca || g.og) k.o = NaN;
                            g.yc && (k.k = 0);
                            g.xc && (k.j = 3);
                            g.Qj && (k.H = 1, k.F = 49152);
                            g.Wb &&
                                (k.L = 30);
                            g.Xc && (k.a = 700);
                            g.Qb && (k.i = 3);
                            g.Sb && (k.i = 1.5, k.g = 1048576);
                            k = Db(k);
                            k.B = 10;
                            k.A = 20;
                            k.C = 10485760;
                            k.J = 1048576;
                            k.b = !1;
                            g.Zc && (k.b = !0);
                            Bh && Kh("crkey") && (g = Db(k), g.j = 3.5, g.B = 20, g.A = 40, g.C = 20971520, g.b = !0, g.a = 700, g.k = 2, k = g);
                            g = k;
                            a.a.nb && (g.a = NaN);
                            a.k = new kt(a.fa, g, e.b, e.g);
                            a.k.D("bandwidthchange", a.ho, a);
                            a.k.D("fatalerror", a.jo, a);
                            a.k.D("softerror", a.ko, a);
                            e = a.k;
                            g = a.a.ma;
                            ot(e);
                            0 == g && (e.b.a.i || Bt(e, e.b, !0), e.i.a.i || Bt(e, e.i, !0));
                            zt(e, g);
                            Op("gv");
                            O(v(e.Fk, e), 0);
                            t: {
                                e = Dj();
                                for (h in Uj)
                                    if (!!e.canPlayType(h) !=
                                        Uj[h]) {
                                        h = !1;
                                        break t
                                    }
                                h = !0
                            }
                            h || Pf(a, 211)
                        }
                    else a.ng() && lu(a);
                    a.j && (h = a.j.j, g = a.a, e = ou(h), isNaN(e) || (e = e.toFixed(3), g = Kt(h.J, g).cc.Fa, h.A && (b = "i", h.A = !1), b = [e, d.Fa, g, h.H, b].join(":"), h.a.vfs.push(b), b = Sr(h.g), 0 < b.width && 0 < b.height && h.a.view.push(e + ":" + Math.round(b.width) + ":" + Math.round(b.height)), h.H = d.Fa), d = ou(h), isNaN(d) || pu(h, d, h.C), h.k());
                    a.u("internalvideoformatchange", a.a, c)
                }
            }
        }
        f.ho = function(a) {
            this.Da.b = a;
            wf(this, "a");
            if (this.j) {
                var b = this.j.j,
                    c = ou(b);
                isNaN(c) || b.a.bwe.push(c.toFixed(3) + ":" + a.toFixed(3))
            }
        };
        f.jo = function(a) {
            Wt(this, a)
        };
        f.ko = function(a) {
            Pf(this, a);
            if (this.j) this.j.onError(a)
        };

        function gu(a) {
            V(a.i, 64) && Yt(a, $h(a.i, a.i.b & -9));
            a.b && a.b.pause()
        }

        function nu(a, b, c, d) {
            if (a.b) {
                if (a.b) {
                    b = b || 0;
                    var e = 1 > a.b.seekable.length ? NaN : a.b.seekable.end(a.b.seekable.length - 1);
                    a.k && !isNaN(Math.floor(Math.min(Vs(a.k.i), Vs(a.k.b)))) && (e = Math.floor(Math.min(Vs(a.k.i), Vs(a.k.b))));
                    b > e && (b = e, fu(a, !0));
                    0 > b && (b = 0)
                } else b = 0;
                a.a.ma = b;
                a.B = b;
                c ? a.Ei() : (V(a.i, 32) || (Yt(a, ai(a.i, 32)), V(a.i, 8) && gu(a), a.u("beginseeking", a)), d && (a.H || (a.H = new xm(a.Ei, d, a)), a.H.start()), qu(a, !0));
                a.O && b > a.a.se && (a.Bg(a.ya), a.ya = null);
                a.u("seekto", a, b)
            } else a.a.ma = b || 0
        }
        f.Ei = function() {
            if (!isNaN(this.B) && this.b) {
                var a = this.Gc();
                !this.a.Eb && this.B >= Math.floor(a) ? (this.B = a, this.u("endseeking", this), gu(this), this.of()) : (this.k && zt(this.k, this.B), Qh(this.b, this.B))
            }
            this.H && (this.H.dispose(), this.H = null);
            V(this.i, 32) && (Yt(this, $h(this.i, this.i.b & -33)), this.u("endseeking", this))
        };
        f.getCurrentTime = function() {
            if (!isNaN(this.B)) return this.B;
            var a = 0;
            this.b ? a = this.b.getCurrentTime() : this.a && (a = this.a.Id);
            return a
        };
        f.Gc = function() {
            var a = 0;
            this.b && (a = this.b.gd);
            0 == a && this.a && (a = this.a.Ga);
            return a
        };

        function ru(a, b) {
            var c = isNaN(b) ? a.getCurrentTime() : b,
                d = a.Gc();
            return Infinity == d ? 1 : d ? c / d : 0
        }
        f.Mo = function() {
            var a;
            if (this.a) {
                a = this.a;
                var b = {};
                a.a && (b.fmt = a.a.Fa, a.za && (b.afmt = a.za.Fa));
                a.Tb && (b.threed = a.Wb);
                b.plid = a.j;
                b.ei = a.o;
                b.list = a.b;
                b.cpn = a.wa;
                a.K && (b.v = a.K);
                a.Rh && (b.infringe = 1);
                a.Yc && (b.splay = 1);
                a.Eb && (b.live = a.Sa ? "dvr" : "live");
                a.ne && (b.autoplay = 1);
                a.cb && (b.sdetail = a.cb);
                a.Bc && (b.partnerid = a.Bc);
                a = b
            } else a = {};
            return a
        };
        f.Ki = function(a) {
            this.A.es(a)
        };
        f.Bg = function(a) {
            this.A.gs(a)
        };
        f.tq = function(a) {
            this.u("commoninfoloaded", a);
            Tt(this, "dataloaded");
            $t(this, v(function() {
                this.U && au(this)
            }, this))
        };
        f.uq = function() {
            Tt(this)
        };
        f.sq = function(a) {
            Wt(this, parseInt(a.errorcode, 10), unescape(a.reason), a.errordetail)
        };

        function Tt(a, b) {
            a.u("internalvideodatachange", b || "dataupdated", a, a.a)
        }

        function $t(a, b) {
            if (Ut(a)) O(b, 0);
            else {
                var c = a.a,
                    d = a.o.Dg;
                c.F ? yk(c, b, !!d, !!a.o.dd) : Ak(c, b, !!d)
            }
        }

        function ku(a) {
            B("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange error waiting abort".split(" "), function(a) {
                this.J.listen(this.b, a, this.wr)
            }, a)
        }
        f.wr = function(a) {
            var b = a.target;
            if (b.currentSrc) {
                switch (a.type) {
                    case "durationchange":
                        this.a.Sa || (b.Ae(b.duration || 0), b = b.gd, (!this.g || isFinite(b) && 0 < b) && eu(this, b));
                        break;
                    case "ended":
                        Yt(this, $h(this.i, 4));
                        break;
                    case "loadedmetadata":
                        this.a.ma && (this.b.currentTime = this.a.ma), this.o.jk && this.a.ma && (this.L = this.a.ma, this.b.pause());
                    case "loadeddata":
                        this.ea && P(this.ea);
                        break;
                    case "loadstart":
                        Ke(this.ja);
                        this.ja = Je(v(this.yl, this), 100);
                        var b = this.J,
                            c = this.b,
                            d = v(this.yl, b.Hi),
                            c = Ue(c, d);
                        b.Ge.push(c);
                        break;
                    case "progress":
                        this.L && this.b.seekable.length && this.b.seekable.end(0) > this.L && (this.b.currentTime = this.L, this.L = NaN, this.za = this.J.listen(this.b, "canplay", this.Ip));
                    case "suspend":
                        qu(this);
                        this.u("onLoadProgress", this, this.b ? yf(this.b) : 0);
                        break;
                    case "seeking":
                        su(this);
                        break;
                    case "timeupdate":
                        su(this), qu(this), this.u("onVideoProgress", this, b.getCurrentTime())
                }
                this.u("videoelementevent", a);
                t: if (b = this.i, d = this.oa, V(b, 128)) a = b;
                    else {
                        var c = b.b,
                            e = b.a,
                            g = a.target;
                        switch (a.type) {
                            case "ended":
                                if (0 >=
                                    g.networkState) break;
                                c = ci();
                                e = null;
                                break;
                            case "pause":
                                V(b, 32) || V(b, 2) || (c = 4, e = null);
                                break;
                            case "playing":
                                c = 8;
                                e = null;
                                break;
                            case "abort":
                            case "error":
                                c |= 256;
                                a = g.error;
                                d = 107;
                                if (a && a.code) switch (a.code) {
                                    case a.MEDIA_ERR_ABORTED:
                                        d = 200;
                                        break;
                                    case a.MEDIA_ERR_NETWORK:
                                        d = 201;
                                        break;
                                    case a.MEDIA_ERR_DECODE:
                                        d = 202;
                                        break;
                                    case a.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                        d = 203
                                }
                                e = {
                                    errorCode: d
                                };
                                E(Yh, e.errorCode) && (c |= 128);
                                break;
                            case "canplay":
                                c &= -2;
                                break;
                            case "progress":
                                V(b, 8) && (g = a.target.getCurrentTime(), d && Mt(d, g, a.timeStamp) &&
                                    (c |= 1));
                                break;
                            case "seeked":
                                c &= -18;
                                break;
                            case "seeking":
                                c |= 16;
                                g.inUnbufferedArea() && (c |= 1);
                                c &= -3;
                                break;
                            case "waiting":
                                V(b, 2) || (c |= 1);
                                break;
                            case "timeupdate":
                                V(b, 16) || (c &= -2);
                                c &= -65;
                                break;
                            default:
                                a = b;
                                break t
                        }
                        a = $h(b, c, e)
                    }
                Yt(this, a)
            }
        };
        f.yl = function() {
            if (this.b && 0 < this.b.getCurrentTime() && 0 < this.b.gd && !this.a.Gk) {
                Ke(this.ja);
                this.a.Gk = !0;
                if (this.j) {
                    var a = this.j;
                    if (a.i) a.log_("Attempted to start sending initial pings twice.");
                    else {
                        a.a.gf && (a.C = [10 + a.a.af, 10, 10, 40 + a.a.mg - a.a.af, 40], a.g = a.C[0]);
                        var b = tu(a, "playback");
                        b.C = a.g;
                        b.ef = !0;
                        a.dc = a.ue();
                        a.lf = a.dc;
                        a.b.ea ? (a.o = [a.dc], a.k = [a.dc]) : (b.k = [a.dc], b.o = b.k);
                        a.Vh = (y() - a.ye) / 1E3;
                        b.send();
                        a.a.gf && (void 0 != a.A && Ke(a.A), a.A = Je(v(a.no, a), 100), a.Jd ? a.log_("Do not call startSendingDetailedPings_ twice") :
                            (b = a.g, uu(a), a.Jd = Je(v(a.Th, a), 1E3 * b)));
                        if (a.b.Fb)
                            if (a.i) a.log_("Tried to logUserWatch inappropriately.", re.debug.lo.mo);
                            else {
                                var b = a.b,
                                    c = a.a,
                                    b = {
                                        noflv: "1",
                                        html5: "1",
                                        video_id: c.K,
                                        cpn: c.wa,
                                        plid: c.j,
                                        ei: c.o,
                                        referrer: Os(b),
                                        eurl: b.g,
                                        framer: b.T,
                                        feature: b.o,
                                        fmt: c.a ? c.a.Fa : 0,
                                        ptk: c.J,
                                        skl: c.dk,
                                        access_token: c.H,
                                        ucid: c.Rb
                                    };
                                x(b, vu(a));
                                b = U(a.b.rb + "user_watch", b);
                                jf(b)
                            }
                        a.a.J && jf(U(a.b.rb + "ptracking", {
                            html5: "1",
                            video_id: a.a.K,
                            cpn: a.a.wa,
                            plid: a.a.j,
                            ei: a.a.o,
                            ptk: a.a.J,
                            oid: a.a.Sb,
                            ptchn: a.a.Qb,
                            pltype: a.a.Ub,
                            content_v: a.b.k
                        }));
                        if (a.a.ck && a.b.hd)
                            if (a.i) a.log_("Tried to logGetVideo inappropriately.", re.debug.lo.mo);
                            else {
                                var b = a.b,
                                    c = a.a,
                                    d = {
                                        noflv: 1,
                                        video_id: c.K,
                                        cpn: c.wa,
                                        el: b.V,
                                        ps: b.Ea,
                                        referrer: Os(b),
                                        eurl: b.g,
                                        framer: b.T,
                                        fmt: c.a ? c.a.Fa : 0,
                                        ptk: c.J,
                                        subscribed: c.i,
                                        t: c.Vb
                                    };
                                b.ob && (d.autoplay = "1");
                                c.Yc && (d.splay = "1");
                                0 < c.ma && (d.start = 1E3 * c.ma);
                                c.Nh && (d.tmi = "1");
                                b = U(a.Ck, d);
                                jf(b)
                            }
                        a.a.ff && du(a, {
                            metric: "playback"
                        });
                        a.i = !0
                    }
                }
                Ke(this.ha);
                this.a.ff && (this.j.i || this.a.bk) && (this.ha = Je(v(this.oo, this), 3E4));
                this.u("playbackstarted")
            }
        };
        f.Ip = function() {
            this.za && (this.J.yd(this.za), this.za = void 0, Sh(this.b))
        };

        function qu(a, b) {
            if (a.b) {
                var c = a.getCurrentTime();
                if (a.k) {
                    var d = a.k;
                    if (!d.H || d.j <= c && c < d.j + 10) d.j = c, d.H = !1;
                    vt(d)
                }
                a.a.Sa && c > a.Gc() && (d = a.Gc(), 0 == d && (d = c), eu(a, 1.2 * d));
                var d = ru(a),
                    e = 0;
                a.b.buffered && 0 < a.b.buffered.length && (a.a.Sa ? a.ka || (e = (1 > a.b.seekable.length ? NaN : a.b.seekable.end(a.b.seekable.length - 1)) / a.Gc()) : e = a.b ? yf(a.b) : 0);
                5 < c && (a.a.ma = c);
                a.Ca && P(a.Ca);
                a.b.paused || a.b.ended || (a.Ca = a.b.played && 0 == a.b.played.length ? O(v(a.wl, a), 100) : O(v(a.wl, a), 1E3));
                a.a.Id = c;
                if (!b && a.ng()) {
                    var g = a.a.Ci,
                        h = a.a.Id;
                    0 < g && h > g && (a.a.Nd += h - g);
                    a.a.Ga && a.a.O && a.a.Nd >= a.a.O && (g = a.j, g.i && g.a.O && (h = tu(g, "delayplay"), h.Ph = !0, wu(g, h)), a.a.O = NaN)
                }
                if (a.a.lk && (g = a.a.Di, h = a.a.Id, 1 == g && 0 < h || 2 == g && 20 <= h || 3 == g && 30 <= h)) {
                    g = a.j;
                    if (g.i) {
                        var h = g.b,
                            k = g.a,
                            g = {
                                ns: "yt",
                                html5: "1",
                                docid: k.K,
                                plid: k.j,
                                ei: k.o,
                                cpn: k.wa,
                                fmt: k.a ? k.a.Fa : 0,
                                el: h.V,
                                ps: h.Ea,
                                subscribed: k.i,
                                yttk: "1",
                                st: g.ue(),
                                et: g.ue(),
                                ctp: k.Di,
                                vid: h.ya
                            },
                            g = U("https://192.168.1.184/s", g);
                        jf(g)
                    }
                    a.a.Di++
                }
                a.u("progresssync", a, c, d, e, b);
                a.a.Ci = c
            }
        }
        f.wl = function() {
            this.b && (this.b.Tm(), V(this.i, 8) && Mt(this.oa, this.getCurrentTime(), Date.now()) && Yt(this, ai(this.i, 1)), qu(this))
        };

        function Yt(a, b) {
            if (b.b != a.i.b || b.a != a.i.a) {
                var c = new Ot(b, a.i);
                a.i = b;
                a.o.kf && V(b, 8) && 0 < tm(c, 256) && 201 == b.a.errorCode && setTimeout(v(function() {
                    this.b && (this.a.A && !this.a.A.a && this.b.load(), lu(this))
                }, a), 500);
                0 > tm(c, 8) && fu(a, !1);
                0 < tm(c, 32) && fu(a, !1);
                a.a && a.a.Eb && a.a.Sa && V(c.state, 2) && (eu(a, a.getCurrentTime()), qu(a, !0));
                V(b, 256) && xu(a, b);
                a.j && yu(a.j, c);
                gi(a.A, c);
                a.u("statechange", c)
            }
        }

        function xu(a, b) {
            var c = b.a;
            Ke(a.ha);
            if (a.a.ff && E(Nt, c.errorCode)) {
                var d = a.j,
                    c = c.errorCode;
                d.F || (d.F = new Pl("error-__ec__"));
                c = {
                    metric: Tl(d.F, {
                        ec: c
                    })
                };
                du(d, c)
            }
        }

        function su(a) {
            V(a.i, 2) || V(a.i, 32) || (a.B = NaN)
        }

        function fu(a, b) {
            a.a && a.a.Sa && a.ka != b && (a.ka = b, a.u("liveviewshift", b))
        }

        function mu(a, b) {
            a.o.Ia && Wh(a.b, b.a || Qi(b.b, Mi));
            Oh(a.b, b);
            a.g && !b.a && (a.g = null);
            a.a.a && a.a.a.g && zu(a);
            P(a.ea);
            a.ea = O(v(a.oq, a), 15E3);
            a.o.Dk ? O(v(function() {
                Sh(this.b)
            }, a), 0) : Sh(a.b)
        }

        function zu(a) {
            var b = a.a.a && a.a.a.g || null;
            b && !a.F && a.b && ((b = Nj(a.b, a.a.a.Pa, b)) ? (a.F = new Ht(a.b, b, v(a.nq, a), v(a.mq, a)), a.F.A = a.a.H, R(a, a.F)) : Wt(a, 203, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK"))
        }

        function St(a) {
            a.F && (a.F.dispose(), a.F = null)
        }
        f.nq = function(a) {
            var b = Ls(this.o);
            b.cpn = this.a.wa;
            this.a.ea && (b.vvt = this.a.ea);
            Gb(a.C, b);
            Sf(a, a.k);
            this.u("newlicensesession", a)
        };
        f.mq = function(a, b, c) {
            Wt(this, c ? 5 : 206, s(b) ? b : "ERROR_LICENSE", a)
        };
        f.oq = function() {
            Pf(this, 102);
            if (this.j) this.j.onError(102);
            this.u("loadsofttimeout")
        };

        function eu(a, b) {
            a.b && a.b.Ae(b);
            a.a.Ga != b && (a.a.Ga = b, Tt(a))
        };

        function Au() {}
        ca(Au);
        f = Au.prototype;
        f.Cb = null;
        f.sh = null;
        f.load = function(a) {
            if (this.Cb) return bm(this.Cb);
            this.Cb = new Vl;
            this.sh = a ? a : "3";
            am(dm("3.1" == this.sh ? "//web.archive.org/web/20130831093956/https://s0.2mdn.net/instream/html5/ima3.js" : "//web.archive.org/web/20130831093956/https://s0.2mdn.net/instream/html5/ima.js"), this.Gs, this.un, this);
            return this.Cb
        };
        f.getVersion = function() {
            return this.sh
        };
        f.Gs = function() {
            "3.1" == this.sh && this.Cb ? this.Cb.b() : (google.ima.SdkLoader.setCallbacks(v(this.Cb.b, this.Cb), v(this.xr, this)), google.ima.SdkLoader.load("3", void 0))
        };
        f.xr = function(a) {
            this.un(Error("Google Ads SDK Failed to load: " + a))
        };
        f.un = function(a) {
            this.Cb.a(a)
        };

        function Bu(a) {
            return a ? -1 != a.toString().search(/(?:true|1)/i) : !1
        }

        function Cu(a, b) {
            if (a) {
                var c = "getErrorCode" in a ? a.getErrorCode() : null;
                c ? b.error_code = c : (c = a.message, 50 < c.length && (c = c.substring(0, 47) + "..."), b.error_message = c)
            }
        }

        function Du(a, b) {
            if (a && "3.1" == Au.getInstance().getVersion()) {
                var c = a.getAdId();
                if (c) {
                    var d = a.getWrapperAdIds() || [];
                    b.ad_id = Ta(d, c).join(",");
                    if (c = a.getAdSystem()) d = a.getWrapperAdSystems() || [], b.ad_sys = Ta(d, c).join(",");
                    a.isSkippable() && (b.skip = 1)
                }
            }
        }

        function Eu(a, b) {
            if (a[b]) return Bu(a[b]);
            var c = b.toLowerCase(),
                d;
            for (d in a)
                if (d && d.toLowerCase() == c) return Bu(a[d]);
            return !1
        };

        function Fu(a) {
            var b = q("yt.www.watch.ads.handleMoveGutCompanion");
            b && b(1 == a ? !0 : !1)
        }

        function Gu(a) {
            var b = q("yt.www.watch.ads.handleShowAfvCompanionAdDiv");
            b && b(0 < (a & 3))
        };

        function Hu(a, b) {
            this.a = a;
            this.j = b
        }
        Hu.prototype.i = null;
        Hu.prototype.b = NaN;

        function Iu(a, b, c) {
            a.a.u("AD_LOGGING_EVENT", b, c)
        }

        function Ju(a) {
            Ku(a);
            var b = Lu(a);
            if (a.g) {
                var c = Mu(a.j),
                    d = a.g.y - c.top,
                    d = Math.round(a.g.x - c.left) + "x" + Math.round(d);
                b.ck_xy = d;
                b.ck_wh = c.width + "x" + c.height
            }
            Iu(a, 15, b)
        }

        function Nu(a) {
            Ku(a);
            var b = Lu(a);
            if (isNaN(a.b)) Ku(a);
            else {
                var c = y() - a.b;
                b.ad_stl = c
            }
            Iu(a, 4, b)
        }

        function Ou(a) {
            Ku(a);
            var b = Lu(a),
                c = a.a.Rm();
            c ? b.ad_fmt = c : Ku(a);
            Iu(a, 5, b)
        }

        function Lu(a) {
            var b = {},
                c = a.a.ta,
                d = a.a.Je(),
                e = a.a.Nm();
            Du(a.a.Tf(), b);
            d && 0 < d && (b.ad_len = d);
            c && c.K ? b.ad_v = c.K : e && (c = oi(e), b.ad_dom = c, b.ad_v_url = e);
            b.at = a.a.getType();
            return b
        }

        function Ku(a) {
            a.i || (a.i = "InstreamAdDisplay (" + a.a.getType() + ")")
        };

        function Pu(a, b, c, d) {
            W.call(this);
            this.a = b;
            this.a.D("onVolumeChange", this.Hp, this);
            this.a.D("control_toggle_play_pause", this.kl, this);
            this.a.D("control_play", this.Ag, this);
            this.a.D("control_pause", this.ri, this);
            this.b = c;
            this.j = d;
            this.i = new Hu(this, this.a);
            this.o = a + "_2";
            this.g = new wm(this)
        }
        A(Pu, W);
        f = Pu.prototype;
        f.Ja = null;
        f.ta = null;
        f.Qe = !1;
        f.Lf = null;
        f.Kf = null;
        f.Mf = null;
        f.show = function() {
            this.i.b = y();
            var a = "";
            if ("3.1" == Qu()) a = this.j;
            else {
                var b = null;
                try {
                    b = this.b.getSelectedCreative(), a = b.getMediaUrl("video/x-flv") || b.getMediaUrl("video/mp4") || b.getMediaUrl("video/webm")
                } catch (c) {
                    Ru(this, c);
                    return
                }
            }
            if (a) {
                b = mi(a);
                b = b.v || b.video_id;
                if (!b) {
                    var d = Ld(a).match(/^\/watch\/([^\/]*)$/i);
                    d && (b = d[1])
                }
                b || (a = a.match(/yt_vid\/([a-zA-Z0-9_-]{11})/), null != a && 1 < a.length && (b = a[1]));
                a = b ? new Df({
                    video_id: b,
                    dash: "0"
                }) : null
            } else a = null;
            this.ta = a;
            var e;
            this.ta ? (this.ta.Yc = !0, e = {
                    video_id: this.ta.K
                },
                this.ta.D("onStatusFail", this.Ll, this), this.ta.D("dataloaded", this.Kl, this), a = this.a.N(), a = new Fs(a.a), a.V = "adunit", a.ob = !0, a = Ms(a, this.ta), Ek(this.ta, a)) : Su(this);
            Tu(this.a, -1, e);
            this.tl()
        };

        function Uu(a) {
            a.ta && (a.ta.Q("onStatusFail", a.Ll, a), a.ta.Q("dataloaded", a.Kl, a))
        }
        f.Kl = function() {
            Uu(this);
            var a = this.a.N(),
                b = this.ta,
                c = v(this.hr, this),
                a = a.Dg;
            b.F ? yk(b, c, !!a, !1) : Ak(b, c, !!a)
        };
        f.hr = function() {
            var a = Kt(new Jt(this.a.N()), this.ta);
            a ? (a = a.i) ? (a = new Ud(Ph(a)), a.a.set("autoplay", "1"), a = a.toString(), "3.1" == Qu() ? this.b.setMediaUrl(a) : this.b.getSelectedCreative().setMediaUrl(a), Su(this)) : Ru(this, Error("Failed to determine ad media resource.")) : Ru(this, Error("Failed to determine ad media format."))
        };

        function Su(a) {
            Fu(1);
            Gu(1);
            a.a.N();
            var b = a.a.b,
                c = yl(b),
                d;
            (d = b.a.N().Ta) || (!qc || H && I("9") && !I("10") && l.SVGElement && c instanceof l.SVGElement ? (d = c.parentNode, d = ia(d) && 1 == d.nodeType ? d : null) : d = c.parentElement);
            d || ul(b).appendChild(c);
            a.Ja = c;
            a.Mf = Wf(a.a.a);
            a.a.la.J ? Ic(K("video-ad-status-bar")) : (b = Wf(a.a.a), a.Lf = K("video-ad-time-left", b), b = K("html5-ad-progress-list", b), c = Fc("div"), Rk(c, ["html5-ad-progress", "html5-progress-section"]), b.appendChild(c), a.Kf = c, a.g.listen(a.Ja, "timeupdate", a.hq));
            Rk(a.Mf, ["ad-showing",
                "ad-interrupting"
            ]);
            a.g.listen(xl(a.a.b), "mouseup", a.lq);
            a.g.listen(a.Ja, "waiting", a.tl);
            a.a.D("onResize", a.$i, a);
            try {
                a.g.listen(a.b, google.ima.AdErrorEvent.Type.AD_ERROR, a.jq);
                a.g.listen(a.b, google.ima.AdEvent.Type.CLICK, a.iq);
                a.g.listen(a.b, google.ima.AdEvent.Type.COMPLETE, a.kq);
                a.g.listen(a.b, google.ima.AdEvent.Type.PAUSED, a.Wl);
                a.g.listen(a.b, google.ima.AdEvent.Type.STARTED, a.Xl);
                a.$i();
                var e = a.a,
                    g = e.b,
                    h = Vu(e);
                g.a.N().Ta && (dd(g.b, h), Xc(g.b, 0, 0));
                a.b.start()
            } catch (k) {
                Ru(a, k)
            }
        }
        f.Xl = function() {
            this.Qe = !0;
            this.k || (this.k = !0, Nu(this.i), Wu(this.a, 1));
            if (0 == this.Je()) {
                var a = this.Ja;
                a.Ae(a.duration || 0)
            }
            this.a.Ma(!0);
            Tu(this.a, 1);
            this.u("adPlay", this)
        };
        f.Wl = function() {
            this.Qe = !1;
            this.a.Ma(!1);
            Tu(this.a, 2)
        };
        f.kq = function() {
            Ou(this.i);
            this.Qe = !1;
            Tu(this.a, 0);
            Wu(this.a, 2);
            this.u("adEnd", this)
        };
        f.jq = function(a) {
            Ru(this, a.getError())
        };

        function Ru(a, b) {
            a.Qe = !1;
            Tu(a.a, 0);
            a.u("adError", b)
        }
        f.Ll = function() {
            Uu(this);
            Ru(this, Error("Request to get video data failed."))
        };
        f.iq = function() {
            Ju(this.i);
            "3.1" == Qu() || this.a.la.A || O(v(this.Ag, this), 0);
            this.u("select")
        };
        f.lq = function(a) {
            this.i.g = new F(a.pageX, a.pageY)
        };
        f.hq = function() {
            var a = Dl(this.b.getRemainingTime());
            this.Lf.innerHTML = a;
            0 == this.Je() && (a = this.Ja, a.Ae(a.duration || 0));
            a = this.Je() ? this.Ja.getCurrentTime() / this.Je() : 0;
            a = Math.round(1E3 * a) / 10;
            this.Kf.style.width = a + "%"
        };
        f.tl = function() {
            !this.Qe && this.k || Tu(this.a, 3)
        };
        f.I = function() {
            this.a.Q("control_toggle_play_pause", this.kl, this);
            this.a.Q("control_play", this.Ag, this);
            this.a.Q("control_pause", this.ri, this);
            this.a.Q("onResize", this.$i, this);
            this.g.removeAll();
            Uu(this);
            this.b.destroy();
            this.Ja && (vl(this.a.b), this.Ja = null);
            this.Lf && (this.Lf.innerHTML = "", this.Lf = null);
            this.Kf && (Ic(this.Kf), this.Kf = null);
            this.Mf && (Tk(this.Mf, ["ad-showing", "ad-interrupting"]), this.Mf = null);
            Pu.G.I.call(this)
        };
        f.getType = function() {
            return this.o
        };
        f.Tf = function() {
            return this.b.getCurrentAd()
        };
        f.Je = function() {
            return this.Ja ? this.Ja.gd : null
        };
        f.Rm = function() {
            return this.Ja ? this.Ja.getType() : null
        };
        f.Nm = function() {
            return this.Ja && this.Ja.currentSrc ? this.Ja.currentSrc : null
        };
        f.Hp = function(a) {
            a = a.muted ? 0 : a.volume;
            isNaN(a) || (a = ob(a / 100, 0, 1), this.b.setVolume(a))
        };
        f.kl = function() {
            this.Qe ? this.ri() : this.Ag()
        };
        f.Ag = function() {
            this.Ja && (this.b.resume(), this.Xl())
        };
        f.ri = function() {
            this.Ja && (this.b.pause(), this.Wl())
        };
        f.$i = function() {
            var a = Vu(this.a);
            this.b.resize(a.width, a.height, google.ima.ViewMode.NORMAL)
        };

        function Xu(a, b, c) {
            W.call(this);
            this.a = b;
            this.a.D("control_toggle_play_pause", this.jl, this);
            this.a.D("control_play", this.zg, this);
            this.a.D("control_pause", this.qi, this);
            this.b = c;
            this.j = new Hu(this, this.a);
            this.o = a + "_2";
            this.i = new wm(this);
            this.g = Yu(b);
            this.g.D("statechange", this.gl, this);
            this.g.D("internalvideodatachange", this.il, this);
            this.ta = null
        }
        A(Xu, W);
        f = Xu.prototype;
        f.wj = !1;
        f.yf = null;
        f.xf = null;
        f.zf = null;
        f.show = function() {
            var a = this.a;
            Zu(a.app, Yu(a));
            this.j.b = y();
            Fu(1);
            Gu(1);
            this.zf = Wf(this.a.a);
            if (this.a.la.J) Ic(K("video-ad-status-bar"));
            else {
                a = Wf(this.a.a);
                this.yf = K("video-ad-time-left", a);
                var a = K("html5-ad-progress-list", a),
                    b = Fc("div");
                Rk(b, ["html5-ad-progress", "html5-progress-section"]);
                a.appendChild(b);
                this.xf = b;
                this.g.D("progresssync", this.ul, this)
            }
            Rk(this.zf, ["ad-showing", "ad-interrupting"]);
            this.i.listen(xl(this.a.b), "mouseup", this.Mp);
            this.a.D("onResize", this.Ai, this);
            try {
                this.i.listen(this.b,
                    google.ima.AdErrorEvent.Type.AD_ERROR, this.Kp), this.i.listen(this.b, google.ima.AdEvent.Type.CLICK, this.Jp), this.i.listen(this.b, google.ima.AdEvent.Type.COMPLETE, this.Lp), this.i.listen(this.b, google.ima.AdEvent.Type.PAUSED, this.Bl), this.i.listen(this.b, google.ima.AdEvent.Type.STARTED, this.Cl), this.Ai(), this.b.start()
            } catch (c) {
                $u(this, c)
            }
        };
        f.il = function(a, b, c) {
            "newdata" == a && this.ta != c && Tu(this.a, -1, {
                video_id: c.K
            });
            this.ta = c
        };
        f.gl = function(a) {
            a = a.state;
            V(a, 128) && $u(this, Error(a.a.message || "Video player error."))
        };
        f.Cl = function() {
            this.wj = !0;
            this.k || (this.k = !0, Nu(this.j), Wu(this.a, 1));
            Tu(this.a, 1);
            this.u("adPlay", this)
        };
        f.Bl = function() {
            this.wj = !1;
            Tu(this.a, 2)
        };
        f.Lp = function() {
            Ou(this.j);
            Tu(this.a, 0);
            Wu(this.a, 2);
            this.u("adEnd", this)
        };
        f.Kp = function(a) {
            $u(this, a.getError())
        };

        function $u(a, b) {
            a.g.of();
            Tu(a.a, 0);
            a.u("adError", b)
        }
        f.Jp = function() {
            Ju(this.j);
            "3.1" == Qu() || this.a.la.A || O(v(this.zg, this), 0);
            this.u("select")
        };
        f.Mp = function(a) {
            this.j.g = new F(a.pageX, a.pageY)
        };
        f.ul = function(a, b, c) {
            this.yf.innerHTML = Dl(a.Gc() - b);
            a = Math.round(1E3 * c) / 10;
            this.xf.style.width = a + "%"
        };
        f.I = function() {
            this.a.Q("control_toggle_play_pause", this.jl, this);
            this.a.Q("control_play", this.zg, this);
            this.a.Q("control_pause", this.qi, this);
            this.a.Q("onResize", this.Ai, this);
            this.i.removeAll();
            this.g.D("statechange", this.gl, this);
            this.g.Q("internalvideodatachange", this.il, this);
            this.g.Q("progresssync", this.ul, this);
            var a = this.a;
            a.g && av(a.app, a.g);
            this.b.destroy();
            this.yf && (this.yf.innerHTML = "", this.yf = null);
            this.xf && (Ic(this.xf), this.xf = null);
            this.zf && (Tk(this.zf, ["ad-showing", "ad-interrupting"]),
                this.zf = null);
            Xu.G.I.call(this)
        };
        f.getType = function() {
            return this.o
        };
        f.Tf = function() {
            return this.b.getCurrentAd()
        };
        f.Je = function() {
            return this.g.Gc()
        };
        f.Rm = function() {
            return this.ta && this.ta.a ? this.ta.a.Pa : null
        };
        f.Nm = function() {
            if (!this.ta) return null;
            var a = Ck(this.ta);
            return a ? Ph(a) : null
        };
        f.jl = function() {
            this.wj ? this.qi() : this.zg()
        };
        f.zg = function() {
            this.b.resume();
            this.Cl()
        };
        f.qi = function() {
            this.b.pause();
            this.Bl()
        };
        f.Ai = function() {
            var a = Vu(this.a);
            this.b.resize(a.width, a.height, google.ima.ViewMode.NORMAL)
        };

        function bv(a, b) {
            this.a = a;
            this.j = b;
            this.a.getType()
        }

        function cv(a, b, c) {
            a.a.u("AD_LOGGING_EVENT", b, c)
        }

        function dv(a) {
            var b = {};
            Du(a.a.Tf(), b);
            a.i && a.b && (b.ot = a.b - a.i);
            var c;
            c = (a.j.a.app.N(), 2);
            b.ad_ps = c;
            b.at = a.a.getType();
            return b
        };

        function ev(a, b, c) {
            W.call(this);
            this.b = b;
            this.a = c;
            this.i = new bv(this, b);
            this.k = a + "_1";
            this.g = new wm(this)
        }
        A(ev, W);
        f = ev.prototype;
        f.pd = null;
        f.Al = !1;
        f.show = function() {
            Z(Wf(this.b.a), "ad-showing");
            this.pd = ul(this.b.b);
            Z(this.pd, "ad-overlay");
            this.g.listen(this.pd, "mouseup", this.Tp);
            try {
                jd(this.pd);
                this.g.listen(this.a, google.ima.AdEvent.Type.USER_CLOSE, this.Qp);
                this.g.listen(this.a, google.ima.AdEvent.Type.CLICK, this.Sp);
                this.g.listen(this.a, google.ima.AdErrorEvent.Type.AD_ERROR, this.Rp);
                fv(this, google.ima.ViewMode.NORMAL);
                this.wf();
                this.a.start();
                var a = this.i;
                a.i = y();
                var b = dv(a);
                cv(a, 3, b);
                this.Al = !0;
                this.b.D("onResize", this.wf, this);
                this.b.D("onStateChange",
                    this.Dl, this);
                this.u("adEnd", this)
            } catch (c) {
                this.u("adError", c)
            }
        };
        f.Tf = function() {
            return this.a.getCurrentAd()
        };
        f.getType = function() {
            return this.k
        };
        f.I = function() {
            this.g.removeAll();
            this.b.Q("onResize", this.wf, this);
            this.b.Q("onStateChange", this.Dl, this);
            Sk(Wf(this.b.a), "ad-showing");
            this.a && (this.a.destroy(), this.a = null);
            this.pd && Sk(this.pd, "ad-overlay");
            this.pd = null;
            ev.G.I.call(this)
        };
        f.Qp = function() {
            var a = this.i;
            a.b = y();
            var b = dv(a);
            cv(a, 6, b)
        };
        f.Sp = function() {
            il(this.b);
            var a = this.i;
            a.b = y();
            var b = dv(a);
            if (a.g) {
                var c = Mu(a.j),
                    d = a.g.y - c.top,
                    d = Math.round(a.g.x - c.left) + "x" + Math.round(d);
                b.ck_xy = d;
                b.ck_wh = c.width + "x" + c.height
            }
            cv(a, 100, b)
        };
        f.Tp = function(a) {
            this.i.g = a.target == a.currentTarget ? null : new F(a.pageX, a.pageY)
        };
        f.Rp = function(a) {
            a = a.getError();
            this.u("adError", a)
        };
        f.Dl = function(a) {
            V(a.state, 16) && fv(this, google.ima.ViewMode.NORMAL)
        };

        function fv(a, b) {
            a.j != b && (a.j = b, a.Al && a.wf())
        }
        f.wf = function() {
            var a = jd(this.pd);
            this.a.resize(a.width, a.height, this.j)
        };

        function gv(a, b) {
            W.call(this);
            this.Y = a;
            this.a = b
        }
        A(gv, W);
        gv.prototype.show = function() {
            var a = q("afcAdCall");
            a && a();
            a = {};
            a.ad_id = this.a;
            a.at = this.getType();
            this.u("AD_LOGGING_EVENT", 3, a);
            this.u("adEnd", this)
        };

        function hv(a, b) {
            ev.call(this, 1, a, b)
        }
        A(hv, ev);
        hv.prototype.wf = function() {};
        hv.prototype.getType = function() {
            return "1_3"
        };

        function iv(a, b, c, d) {
            W.call(this);
            this.pa = b;
            this.b = a;
            this.start = c;
            this.g = d;
            this.a = null
        }
        A(iv, W);
        f = iv.prototype;
        f.Bj = !0;
        f.Zd = !1;
        f.isVisible = !0;
        f.Yd = "unloaded";
        f.ij = !1;

        function jv(a) {
            return 0 == a.start ? kv(a) && lv(a) ? -2147483648 : 0 : -1 == a.start || -2 == a.start ? 2147483647 : 1E3 * a.start
        }

        function kv(a) {
            return "loaded" == a.Yd || "error" == a.Yd
        }

        function lv(a) {
            if (!kv(a)) throw Error("Preroll status is undefined before ad load.");
            return 0 == a.start && a.Zd
        }

        function mv(a) {
            a.Yd = "loading";
            var b = a.g.shift();
            b ? (0 == a.start && nv(a.b, "nl"), b = b.create(a.start, a.pa, a.b), R(a, b), am(b.load(), a.sr, a.rr, a)) : (ov(a.b, 2, pv(a, {})), a.Yd = "error", qv(a))
        }
        f.getId = function() {
            return this.pa
        };

        function rv(a) {
            a.a.Q("adEnd", a.wm, a);
            a.a.Q("adError", a.zm, a);
            a.a.Q("AD_LOGGING_EVENT", a.xm, a);
            a.a.Q("select", a.ym, a)
        }
        f.rr = function(a) {
            a instanceof Wl || mv(this)
        };
        f.sr = function(a) {
            this.start = a.startTime;
            this.a = a.Zp;
            R(this, this.a);
            0 == this.pa && (a = this.a.getType(), this.b.i.at = a);
            this.a instanceof Pu || this.a instanceof Xu ? this.Zd = !0 : this.a instanceof gv ? this.isVisible = !1 : this.a instanceof hv && (this.isVisible = !1);
            this.Yd = "loaded";
            qv(this)
        };

        function qv(a) {
            a.u("adBreakComplete", a)
        }
        f.show = function() {
            this.ij ? this.a instanceof ev && fv(this.a, google.ima.ViewMode.NORMAL) : (this.ij = !0, this.a instanceof Pu && nv(this.b, "bs"), this.a.D("adEnd", this.wm, this), this.a.D("adError", this.zm, this), this.a.D("AD_LOGGING_EVENT", this.xm, this), this.a.D("select", this.ym, this), this.a.show())
        };
        f.wm = function() {
            if (this.Zd) {
                rv(this);
                var a = this.b;
                a.la.xc && !a.di && (jf(a.N().rb + "mac_204?action_fcts=1"), a.di = !0)
            }
            qv(this)
        };
        f.zm = function(a) {
            if (a) {
                var b = {};
                Cu(a, b);
                pv(this, b);
                sv(this.b, 32, b)
            }
            rv(this);
            qv(this)
        };
        f.xm = function(a, b) {
            pv(this, b);
            ov(this.b, a, b)
        };
        f.ym = function() {
            this.Bj = !1
        };

        function pv(a, b) {
            b.sst = a.start;
            b.sidx = 0
        };

        function tv(a) {
            this.qo = a
        }

        function uv(a) {
            try {
                var b = sr(a).getElementsByTagName("AdBreak"),
                    c = C(b, function(a) {
                        a = a.getAttribute("time");
                        return Aa(a)
                    });
                return new tv(c)
            } catch (d) {
                return new tv([0])
            }
        };

        function vv(a, b, c, d) {
            this.i = a;
            this.j = b;
            this.b = c;
            this.k = d
        }
        vv.prototype.g = "";
        vv.prototype.a = "";

        function wv(a) {
            var b = {};
            b.l_ns = a.j;
            b.l_state = a.k;
            b.sst = a.i;
            b.sidx = 0;
            a.g && (b.at = a.g);
            a.a && (b.ad_id = a.a);
            return b
        };

        function xv(a, b, c, d, e) {
            this.j = a;
            this.g = b;
            this.A = c;
            this.Y = d;
            this.b = e;
            this.a = new vv(b, this.j, d, e);
            this.C = new wm(this);
            this.i = new wm(this)
        }
        A(xv, kf);
        f = xv.prototype;
        f.lm = null;
        f.Oc = null;
        f.load = function() {
            if (this.Oc) return this.Oc;
            this.Oc = new Vl;
            var a = this.Y.N().ac || yv,
                b;
            this.Y.la.a ? b = !1 : (b = 0 < (this.b & 3) ? 190 : 200, b = 200 > a.width || a.height < b);
            if (b) {
                b = this.a;
                var c = wv(b);
                c.ck_wh = a.width + "x" + a.height;
                sv(b.b, 14, c);
                this.be(Error("The player size is too small."))
            } else am(this.Y.nf, this.Oq, this.Rc, this);
            return this.Oc
        };
        f.hj = function() {
            var a = new google.ima.AdsRenderingSettings;
            a.baseYouTubeUrl = this.Y.N().rb;
            a.contentId = this.Y.getVideoData().K;
            a.useStyledNonLinearAds = !0;
            a.useVideoAdUi = this.Y.la.J;
            a.youTubeAdNamespace = this.j;
            return a
        };

        function zv(a, b) {
            a.lm = b;
            var c = b.getType();
            a.a.g = c
        }
        f.Oq = function(a) {
            var b = this.a;
            ov(b.b, 9, wv(b));
            b = new google.ima.AdsRequest;
            b.adTagUrl = this.o();
            var c = this.Y.N().ac || yv;
            b.linearAdSlotWidth = c.width;
            b.linearAdSlotHeight = c.height;
            b.nonLinearAdSlotWidth = c.width;
            b.nonLinearAdSlotHeight = 100;
            "3.1" == Qu() && (b.useLatestAdsLoader = this.Y.la.ed);
            var c = this.b,
                d = q("yt.www.watch.ads.setGutSlotSizes");
            d && d(0 < (c & 3), 0 < (c & 12));
            this.C.listen(a, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.Lq);
            this.C.listen(a, google.ima.AdErrorEvent.Type.AD_ERROR, this.Kq);
            this.rm(a, b)
        };
        f.Lq = function(a) {
            if (a.getUserRequestContext() === this) {
                try {
                    var b;
                    if ("3.1" == Qu()) {
                        var c = this.hj();
                        b = a.getAdsManager({}, c)
                    } else b = a.getAdsManager({})
                } catch (d) {
                    this.Rc(d);
                    return
                }
                this.i.listen(b, google.ima.AdEvent.Type.LOADED, v(this.Yr, this, b));
                this.i.listen(b, google.ima.AdErrorEvent.Type.AD_ERROR, v(this.Xr, this, b));
                B([google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED], function(a) {
                    this.i.listen(b, a, ba)
                }, this);
                a = Vu(this.Y);
                try {
                    b.init(a.width, a.height, google.ima.ViewMode.NORMAL)
                } catch (e) {
                    b.destroy(), this.Rc(e)
                }
            }
        };
        f.Yr = function(a, b) {
            this.i.removeAll();
            var c = b.getAd(),
                d = c.isLinear(),
                e = this.a,
                g = wv(e);
            g.ad_man = d ? "instream" : "overlay";
            ov(e.b, 12, g);
            e = "";
            "3.1" == Qu() && (e = b.getAdData().mediaUrl);
            switch (d ? this.Yi(a, c, e) : this.Hf(a, c)) {
                case 0:
                    Av(this);
                    break;
                case 1:
                    a.destroy();
                    this.be(Error("Unable to create a display state."));
                    break;
                case 2:
                    c = this.a;
                    sv(c.b, 21, wv(c));
                    a.destroy();
                    this.be(Error("Fallback to next ad."));
                    break;
                default:
                    a.destroy()
            }
        };
        f.Xr = function(a, b) {
            this.i.removeAll();
            a.destroy();
            this.Rc(b.getError())
        };
        f.Kq = function(a) {
            var b = a.getError();
            b.getType() == google.ima.AdError.Type.AD_LOAD && a.getUserRequestContext() === this && this.Rc(b)
        };
        f.Yi = function(a, b, c) {
            b = b.getAdId();
            this.a.a = b;
            a = this.Y.la.fa ? new Xu(this.j, this.Y, a) : new Pu(this.j, this.Y, a, c);
            zv(this, a);
            return 0
        };
        f.Hf = function(a, b) {
            var c = b.getAdId();
            this.a.a = c;
            zv(this, new ev(this.j, this.Y, a));
            return 0
        };
        f.Rc = function(a) {
            if (a instanceof Wl) this.Oc.cancel();
            else {
                var b = this.a,
                    c = wv(b);
                a && Cu(a, c);
                sv(b.b, 32, c);
                this.be(a)
            }
        };

        function Av(a) {
            a.Oc.b({
                Zp: a.lm,
                startTime: a.g
            })
        }
        f.be = function(a) {
            this.Oc.a(a)
        };
        f.I = function() {
            this.C.removeAll();
            this.i.removeAll();
            this.Oc && this.Oc.cancel();
            xv.G.I.call(this)
        };
        f.rm = function(a, b) {
            try {
                a.requestAds(b, this)
            } catch (c) {
                this.Rc(c)
            }
        };

        function Bv(a, b) {
            this.a = a;
            this.b = b
        };

        function Cv(a) {
            gv.call(this, a, "")
        }
        A(Cv, gv);
        Cv.prototype.getType = function() {
            return "2_3"
        };
        Cv.prototype.Tf = function() {
            return null
        };

        function Dv(a, b, c, d) {
            xv.call(this, 2, a, b, c, d);
            this.k = new Bv(this.Y.la, this.Y.N());
            (a = q("yt.www.watch.ads.handleSetAfvCompanionVars")) && a(0 < (d & 3))
        }
        A(Dv, xv);
        Dv.prototype.hj = function() {
            var a = Dv.G.hj.call(this);
            a.a = 0 == this.A;
            a.b = !0;
            return a
        };
        Dv.prototype.o = function() {
            var a = this.k,
                b = this.b,
                c = 0 == this.g || -1 == this.g ? this.g : 1E3 * this.g,
                d = {};
            d.eid = a.a.Vb;
            d.videoad_start_delay = c;
            d.scs = a.a.Ac;
            d.client = a.a.$c;
            d.description_url = a.a.Ua;
            d.loeid = a.a.dd;
            d.cust_gender = a.a.Zb;
            d.host = a.a.host;
            d.hl = a.b.j;
            d.max_ad_duration = a.a.Xc;
            d.url = "embedded" == a.b.V && a.b.g ? a.b.g : a.a.Ua;
            a.a.Sb && (d.adtest = "on");
            isNaN(a.a.T) || (d.cust_age = a.a.T);
            isNaN(a.a.ha) || (d.hostTierId = a.a.ha);
            a.a.Ca && (d.yt_pt = a.a.Ca);
            a.a.cb && (d.video_cpm = a.a.cb);
            a.a.k && (d.as_dbp = a.a.k);
            d.ytdevice =
                a.a.Zc;
            c = "";
            b & 2 && b & 1 ? c = "video" : b & 2 ? c = "skippablevideo" : b & 1 && (c = "standardvideo");
            b & 4 && (c && (c += "_"), c += "text_image_flash");
            d.ad_type = c;
            0 < (b & 3) ? a.a.ka && (d.channel = a.a.ka.join("+")) : b & 4 && a.a.Da && (d.channel = a.a.Da.join("+"));
            a.a.yc && (d.lsv = 1);
            var a = d,
                b = {},
                e;
            for (e in a) ea.call(void 0, a[e]) && (b[e] = a[e]);
            return "//googleads.g.doubleclick.net/pagead/ads?" + ki(b, "&")
        };
        Dv.prototype.Hf = function(a, b) {
            if (this.Y.la.a) return 1;
            0 == this.g && (this.g = 10, this.a.i = 10, ov(this.Y, 1));
            Gu(this.b);
            return Dv.G.Hf.call(this, a, b)
        };
        Dv.prototype.be = function(a) {
            var b = this.Y.la;
            b.a ? Dv.G.be.call(this, a) : b.ja || this.b & 4 ? (zv(this, new Cv(this.Y)), Av(this)) : Dv.G.be.call(this, a)
        };

        function Ev(a, b) {
            if (a) {
                this.sn = a;
                this.Wm = b;
                var c, d = this.sn,
                    e = d.indexOf(";sz=");
                c = ji(d.substring(e), ";");
                d = d.substring(0, e).split("pfadx");
                if (c = 2 != d.length ? null : {
                        Cs: d[0],
                        Ds: d[1],
                        Es: c
                    }) this.Vm = c.Cs, this.Xm = c.Ds, this.Ym = c.Es
            }
        }
        f = Ev.prototype;
        f.sn = "";
        f.Vm = "";
        f.Wm = !1;
        f.Dj = "";
        f.Xm = "";
        f.Ym = null;

        function Fv(a, b, c, d) {
            xv.call(this, 1, a, b, c, d);
            this.k = new Ev(this.Y.la.Qb, this.Y.la.Rb)
        }
        A(Fv, xv);
        Fv.prototype.o = function() {
            var a = this.k,
                b = this.b,
                c = [];
            b & 1 && c.push("480x360");
            b & 2 && c.push("480x361");
            b & 12 && c.push("480x70");
            var d = [],
                e, g;
            b & 12 && (d.push("300x250"), e = "watch-channel-brand-div", g = 1);
            0 < (b & 3) && (d.push("300x60"), e = "watch-longform-ad", g = 1);
            b = {
                Zm: e,
                dg: c,
                $m: g,
                ur: !0,
                Cj: d
            };
            c = Eb(a.Ym);
            b.tr && (c.pos = b.tr);
            b.$m && (c.tile = b.$m.toString());
            b.Zm && (c.kmyd = b.Zm);
            b.ur && (t(c["!c"]) ? c["!c"].push("html5") : c["!c"] = c["!c"] ? [c["!c"], "html5"] : "html5");
            b.Cj && 0 < b.Cj.length && a.Wm && (c.ciu_szs = b.Cj.join(","));
            c.dcmt =
                "text/xml";
            Jh() && (c.kmob = "ps3");
            a.Dj || (a.Dj = Math.floor(999999999 * Math.random()).toString());
            c.ord = a.Dj;
            b.dg && b.dg.length && "sz" in c && delete c.sz;
            c = ki(c, ";");
            b.dg && b.dg.length && (c = "sz=" + b.dg.join(",") + ";" + c);
            return [a.Vm, "pfadx", a.Xm, ";", c, "?"].join("")
        };
        Fv.prototype.Hf = function(a, b) {
            var c = b.getAdId();
            this.a.a = c;
            c = b.getTraffickingParameters();
            return Eu(c, "rm") ? (1 != this.b && (c = q("yt.www.watch.ads.handleHideCompanion")) && c(), Gv(a), 2) : Eu(c, "blockAllAds") ? (Gv(a), zv(this, new hv(this.Y, a)), 0) : Eu(c, "hideMaster") ? (zv(this, new hv(this.Y, a)), 0) : this.Y.la.a ? 1 : "3.1" == Qu() ? (zv(this, new ev(this.j, this.Y, a)), 0) : 1
        };

        function Gv(a) {
            a.sendImpressionUrls && a.sendImpressionUrls()
        };

        function Hv(a, b, c) {
            var d = c.la;
            this.k = d.Tb;
            var e = 0,
                d = d.Yb.toUpperCase();
            "INVIDEO" == d ? e = 4 : "INSTREAM" == d ? e = 1 : "MPU" == d && (e = 8);
            xv.call(this, 2, a, b, c, e)
        }
        A(Hv, xv);

        function Iv(a) {
            var b = new Vl;
            wi(a, {
                format: "RAW",
                method: "GET",
                timeout: 5E3,
                Bm: function() {
                    b.a(Error(a + " timed out"))
                },
                onError: function(c) {
                    b.a(Error("Problem loading " + a + " with status code " + c.status))
                },
                oc: function(a) {
                    b.b(a)
                }
            });
            return b
        }
        Hv.prototype.o = function() {
            return ""
        };
        Hv.prototype.rm = function(a, b) {
            var c = this.b;
            c & 1 || c & 4 ? this.k && "goo.gl" == oi(this.k) ? (c = Iv("https://web.archive.org/web/20130831093956/https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBbSB-E7SYd1iggX6r2b5C7ljvO6fVqaj0&shortUrl=" + this.k), am(c, function(a) {
                    a = fb(a.responseText);
                    if (!a || !a.longUrl) throw Error("Invalid expanded forced ad URL");
                    a = pi(a.longUrl, {
                        video_format: "43"
                    });
                    return Iv(a)
                }, null, this), am(c, function(c) {
                    b.adsResponse = c.responseText;
                    a.requestAds(b, this)
                }, null, this), am(c, null, this.Rc, this)) : this.Rc(Error("Invalid URL: " + this.k)) :
                this.Rc(Error("Invalid request type: " + c))
        };

        function Jv(a, b, c) {
            this.a = a;
            this.g = b;
            this.b = yh || zh ? "html5_ios" : Ah ? "html5_android" : Jh() ? "html5_ps3" : "leanback" == c ? "html5_tv_leanback" : "html5"
        };

        function Kv(a, b, c, d) {
            xv.call(this, 4, a, b, c, d);
            this.k = new Jv(this.Y.la, this.Y.getVideoData().Ga, this.Y.N().V)
        }
        A(Kv, xv);
        Kv.prototype.o = function() {
            var a;
            a = this.k;
            if (a.a.H && a.a.Ia) {
                var b = "10613:10613_youtube_" + a.b,
                    c = "youtube_watch_" + a.b,
                    d = "10613:10613_youtube_" + a.b.split("_")[0],
                    e = {
                        nw: "10613"
                    };
                e.asnw = a.a.H;
                e.ssnw = a.a.H;
                e.caid = a.a.Ia;
                e.prof = b;
                e.vdur = a.g;
                e.csid = c;
                e.resp = "vast2";
                e.crtp = "vast2s";
                e.flag = "+emcr";
                b = {};
                isNaN(a.a.U) || (b._fw_d_001 = a.a.U);
                a.a.nb && (b._fw_d_002 = a.a.nb);
                a.a.ya && (b["_fwu:10613:lang"] = a.a.ya);
                a.a.k && (b._fw_dbp = a.a.k);
                b._fw_yt_type = a.a.F ? "short" : "long";
                var c = {
                        ptgt: "a",
                        slid: "preroll"
                    },
                    g = "";
                a.a.g && !a.a.b ?
                    g = ";linear-skippable" : !a.a.g && a.a.b && (g = ";video");
                c.slau = "preroll" + g;
                c.w = "480";
                c.h = "360";
                c.tpos = "0";
                c.tpcl = "preroll";
                c.envp = d;
                c.cd = "1440,900";
                a = "//web.archive.org/web/20130831093956/https://2975c.v.fwmrm.net/ad/g/1?" + ki(e, "&") + ";" + ki(b, "&") + ";" + ki(c, "&")
            } else a = "";
            return a
        };
        Kv.prototype.Yi = function(a, b) {
            return 0 != this.g ? 1 : Kv.G.Yi.call(this, a, b, null)
        };
        Kv.prototype.Hf = function() {
            return 1
        };

        function Lv(a, b) {
            this.b = a;
            this.a = b
        }
        Lv.prototype.create = function(a, b, c) {
            switch (this.b) {
                case 1:
                    return new Dv(a, b, c, this.a);
                case 2:
                    return new Fv(a, b, c, this.a);
                case 4:
                    return new Kv(a, b, c, this.a);
                case 3:
                    return new Hv(a, b, c);
                default:
                    return null
            }
        };

        function Mv(a) {
            this.a = a
        };

        function Nv(a, b) {
            this.pb = a;
            this.a = (this.A = this.pb.Dc) || !0;
            var c = "3.1" == Au.getInstance().getVersion();
            this.J = !this.a && c;
            this.fa = a.Ta && c && !this.a;
            this.apply(b)
        }
        var Ov = {
            az: "m",
            Av: "f"
        };
        Nv.prototype.apply = function(a) {
            var b = E(this.pb.i, "908301"),
                c = "3.1" == Au.getInstance().getVersion(),
                d = Bu(a.instream),
                e = (!this.a || b) && c && Bu(a.trueview),
                g = Bu(a.aftv) && (!this.a || b);
            this.L = a.ad_slots;
            this.O = a.ad_breaks;
            this.Xb = a.ad_flags || 0;
            this.T = parseInt(a.cust_age, 10);
            this.Vb = a.cafe_experiment_id;
            var h = parseInt(a.cust_gender, 10);
            isNaN(h) || (this.Zb = h);
            this.Qb = a.ad_tag;
            this.Sb = !!a.adtest;
            this.U = parseInt(a.ad_age, 10);
            this.Ub = a.cid;
            this.Ua = a.ad_eurl;
            this.ea = a.excluded_ads;
            this.Yb = a.force_ad_type;
            this.Tb =
                a.force_ad_url;
            this.nb = Bb(Ov, function(b) {
                return b == a.ad_gender
            });
            this.k = a.dbp;
            this.Rb = !!a.mpu;
            this.host = a.ad_host;
            this.ha = parseInt(a.ad_host_tier, 10);
            this.$b = 1 == a.ad_logging_flag;
            this.o = Bu(a.afv) && !this.a;
            this.i = g && e;
            this.j = g && d && !Bu(a.no_afv_instream);
            this.B = Bu(a.dclk);
            this.yc = 1 == a.livestream;
            this.oa = Bu(a.forced_ad) && b && c;
            this.C = 1 == parseInt(a.tpas_ad_type_id, 10);
            this.zc = !!a.fqsf;
            this.b = d;
            this.za = Bu(a.invideo) && !this.a;
            this.qb = Bu(a.mpu) && !this.a;
            this.xc = Bu(a.shortform);
            this.F = Bu(a.sffb);
            this.Ac = "1" ==
                a.as_launched_in_country;
            this.da = !this.a && !this.C;
            this.g = e;
            b = a.ad_channel_code_instream;
            this.ka = u(b) ? b.split(",") : [];
            this.ya = a.ad_language_iso639_2;
            this.dd = a.loeid;
            b = parseInt(a.afv_instream_max, 10);
            isNaN(b) && (b = 15E3);
            this.Xc = b;
            b = a.ad_channel_code_overlay;
            this.Da = u(b) ? b.split(",") : [];
            this.Ca = a.yt_pt;
            this.$c = a.ad_video_pub_id;
            this.cb = parseInt(a.afv_video_min_cpm, 10);
            this.ja = g && this.F && !this.o;
            this.Wb = this.o || this.ja;
            this.Zc = parseInt(a.ad_device, 10);
            this.Ia = a.tpas_video_id;
            this.H = a.tpas_partner_id;
            this.ed =
                a.new_html5_ad_loader
        };
        Nv.prototype.da = !0;

        function Pv(a, b) {
            this.b = b;
            this.g = [];
            this.i = {};
            this.j = {};
            this.a = a
        }
        A(Pv, kf);
        f = Pv.prototype;
        f.wd = null;

        function Qv(a) {
            a.g.length || ($a(a.b, function(a, c) {
                return a.getId() - c.getId()
            }), a.g = Ga(a.b, function(a) {
                return "unloaded" == a.Yd
            }), 0 == a.g.length ? Yk(a.a) : (null === Ka(a.g, function(a) {
                return 0 == a.start
            }) && Yk(a.a), Rv(a)))
        }

        function Rv(a) {
            if (a.g.length) {
                var b = a.g.shift();
                b.D("adBreakComplete", a.xj, a);
                mv(b)
            }
        }
        f.xj = function(a) {
            a.Q("adBreakComplete", this.xj, this);
            O(v(this.ks, this, a), 0)
        };
        f.ks = function(a) {
            var b = Fa(this.b, a),
                c = this.b[b + 1],
                b = this.b[b - 1],
                d = 2147483646; - 2 == a.start || -1 == a.start ? d = 2147483647 : c && 2147483647 != c.start && (d = jv(c) - 1);
            0 == a.pa && (nv(this.a, "bl"), lv(a) || nv(this.a, "fb"));
            if (c = "loaded" != a.Yd) {
                if (b && kv(b)) {
                    var e = jv(b);
                    e > d && (d = e);
                    Sv(this, b);
                    Tv(this, b, d)
                }
            } else this.i[a.getId()] = a, Tv(this, a, d);
            Yk(this.a);
            c && this.Rf(a);
            Rv(this)
        };

        function Tv(a, b, c) {
            var d = jv(b);
            if (!isNaN(d)) {
                var e = {};
                e.priority = -2 != b.start ? 2 : 3;
                e.id = String(b.getId());
                e.visible = b.isVisible;
                c = new Fg(d, c, e);
                a.j[b.getId()] = c;
                a.a.Ii(c)
            }
        }

        function Sv(a, b) {
            a.j[b.getId()] && (a.a.ar(a.j[b.getId()]), delete a.j[b.getId()])
        }
        f.Rf = function(a) {
            a.Q("adBreakComplete", this.xj, this);
            this.wd && a == this.wd && (this.wd = null);
            Sv(this, a);
            Qa(this.b, a);
            delete this.i[a.getId()];
            lf(a)
        };
        f.Vq = function(a) {
            if (a.Zd) {
                if (-1 != a.start && a.Bj) {
                    var b = this.a;
                    Uv(b);
                    hl(b)
                } else lv(a) && !a.Bj ? (b = this.a, Uv(b), hl(b)) : (Uv(this.a), this.a.Ma(!1));
                this.Rf(a)
            } else a.isVisible || this.Rf(a)
        };
        f.I = function() {
            B(this.b, this.Rf, this);
            Pv.G.I.call(this)
        };

        function Vv(a, b) {
            this.g = a;
            b && (this.b = b)
        }

        function Wv(a) {
            var b = {};
            b.allowed = a.g;
            a.b && (b.ex_ads = a.b);
            a.a && (b.at = a.a);
            return b
        };

        function Xv(a, b) {
            this.i = a;
            this.a = b;
            this.C = y();
            this.b = a.la;
            this.g = {};
            var c = [];
            this.b.C && this.b.b && c.push("4_2");
            this.b.B && (this.b.b && c.push("1_2"), this.b.g && c.push("1_2_1"), this.b.za && c.push("1_1"), this.b.qb && c.push("1_3"));
            this.b.i && c.push("2_2_1");
            this.b.j && c.push("2_2");
            this.b.o && c.push("2_1");
            this.b.Wb && c.push("2_3");
            this.j = c.join(",");
            this.o = new Vv(this.j, this.b.ea);
            this.g.allowed = this.j;
            (c = this.b.ea) && (this.g.ex_ads = c)
        }
        var Yv = [9, 10, 11, 12],
            Zv = [21, 30],
            $v = [1009];
        Xv.prototype.k = 0;

        function aw(a, b) {
            if (!a.b.$b) return !1;
            var c = a.i.N();
            if (E(c.i, "906335")) return !0;
            c = b.ad_event;
            return E(Yv, c) || 7 == c && (c = b.ad_error, E(Zv, c) || 32 == c && E($v, b.error_code)) ? !1 : !0
        };

        function bw(a) {
            ws.call(this, a);
            this.j = {};
            this.i = {
                at: "0"
            };
            this.b = new tl(this.a);
            this.g = null;
            a = this.getVideoData().k.html5_sdk_version;
            this.k = Au.getInstance().load(a)
        }
        A(bw, ws);
        var yv = new G(0, 0);
        f = bw.prototype;
        f.ia = "ad";
        f.hg = "ad";
        f.Ld = null;
        f.jd = null;
        f.la = null;
        f.di = !1;
        f.Ji = !1;
        f.nf = null;
        f.Vg = null;
        f.fc = function() {
            return !!this.app.H.getVideoData().Y
        };
        f.create = function() {
            bw.G.create.call(this);
            this.ca = !0;
            nv(this, "i");
            this.la = new Nv(this.N(), this.a.getVideoData().k || {});
            this.Ld = new Xv(this, this.a);
            Fu();
            this.di = !1;
            var a = bm(this.k);
            this.nf = am(a, this.ro, null, this);
            t: {
                var a = new Mv(this),
                    b = [];
                try {
                    var c = a.a.la,
                        d;
                    if (c.da) {
                        var e;
                        if (c.O) e = uv(c.O);
                        else {
                            var g;
                            if (c.L) {
                                var h = C(c.L.split(","), Aa);
                                g = new tv(h)
                            } else g = new tv([0]);
                            e = g
                        }
                        d = e
                    } else d = new tv([0]);
                    for (var k = d.qo, c = 0; c < k.length; c++) {
                        var m = a.a;
                        d = c;
                        var p = k[c],
                            r;
                        if (a.a.la.F) {
                            e = [];
                            var n = a.a.la;
                            if (n.oa) e.push(new Lv(3,
                                0));
                            else {
                                n.C && (n.b || n.g) && e.push(new Lv(4, 1));
                                n.B && (g = 0, n.b && (g |= 1), n.g && (g |= 2), n.za && (g |= 4), n.qb && (g |= 8), 0 < g && e.push(new Lv(2, g)));
                                if (n.j || n.i) g = 0, n.j && (g |= 1), n.i && (g |= 2), e.push(new Lv(1, g));
                                n.o && e.push(new Lv(1, 4))
                            }
                        } else {
                            e = [];
                            var w = a.a.la;
                            if (w.oa) e.push(new Lv(3, 0));
                            else {
                                w.C && w.b && e.push(new Lv(4, 1));
                                if (w.B) {
                                    var L = 0;
                                    w.b && (L |= 1);
                                    w.g && (L |= 2);
                                    0 < L && e.push(new Lv(2, L))
                                }
                                if (w.j || w.i) L = 0, w.j && (L |= 1), w.i && (L |= 2), e.push(new Lv(1, L))
                            }
                        }
                        r = e;
                        var N = new iv(m, d, p, r);
                        b.push(N)
                    }
                } catch (D) {} finally {
                    break t
                }
            }
            k = b;
            nv(this,
                "bd");
            this.jd = new Pv(this, k);
            Qv(this.jd);
            k = {};
            k.allowed = this.Ld.j;
            bl(this, {}, k)
        };
        f.destroy = function() {
            this.Ji && Uv(this);
            this.ca = !1;
            this.g && av(this.app, this.g);
            mf(this.jd, this.g);
            this.g = this.jd = null;
            this.nf && (this.nf.cancel(), this.nf = null);
            this.Ld = null;
            var a = this.b;
            vl(a);
            Hc(ul(a));
            a.g = null;
            bw.G.destroy.call(this)
        };
        f.getVideoData = function() {
            return this.app.getVideoData(1)
        };
        f.N = function() {
            return this.app.N()
        };

        function ov(a, b, c) {
            a = a.Ld;
            c = c || {};
            var d = (y() - a.C) / 1E3;
            c.art = d;
            d = a.i.N();
            d.o && (c.feature = d.fa);
            c.ad_flags = a.b.Xb;
            var e = a.b.Ub;
            e && (c.cid = e);
            c.mt = a.a.getCurrentTime();
            (d = Qs(d)) && (c.lact = d);
            (d = a.a.yg()) && (c.len = d);
            a.b.zc && (c.fqsf = 1);
            (d = Au.getInstance().getVersion()) && (c.sdkv = d);
            c.ad_event = b;
            if (3 == b || 4 == b) a.o.a = c.at;
            b = c;
            if (aw(a, b)) {
                var g;
                t: {
                    c = a.g;d = Db(b);
                    for (g in c) {
                        if (g in d) {
                            g = null;
                            break t
                        }
                        d[g] = c[g]
                    }
                    g = d
                }
                null === g ? a.i.log(a.g) : b = g;
                a.i.log(b);
                a.g = {}
            }
        }

        function sv(a, b, c) {
            c = c || {};
            c.ad_error = b;
            ov(a, 7, c)
        }
        f.ph = function() {
            return this.Ld ? this.Ld.o : bw.G.ph.call(this)
        };

        function Qu() {
            return Au.getInstance().getVersion()
        }

        function Yu(a) {
            if (!a.g) {
                var b = new Fs(a.N().a);
                b.V = "adunit";
                b.ob = !0;
                a.g = new Pt(b, 2)
            }
            return a.g
        }

        function Vu(a) {
            var b = a.N().ac || yv;
            a.la.a || (b.height -= 27);
            return b
        }

        function Mu(a) {
            a = a.N().ac || yv;
            return new ub(0, 0, a.width, a.height)
        }

        function Uv(a) {
            vl(a.b);
            a.Ji = !1;
            gl(a);
            fl(a, ["seek", "settings"]);
            a.N().fd && fl(a, ["audio"])
        }

        function Wu(a, b) {
            switch (b) {
                case 1:
                    a.u("publish_external_event", "onAdStart");
                    break;
                case 2:
                    a.u("publish_external_event", "onAdEnd")
            }
        }

        function Tu(a, b, c) {
            a.u("publish_external_event", "onAdStateChange", b, a.b.a.N().Ta ? a.b.a.app.R.a : yl(a.b), c)
        }
        f.He = function(a) {
            bw.G.He.call(this, a);
            var b = parseInt(a.getId(), 10);
            if (this.jd && !isNaN(b) && (a = this.jd, s(b) && (b = a.i[b]))) {
                if (a.wd != b || b.Zd || !b.isVisible) a.wd && a.Rf(a.wd), a.wd = b, b.D("adBreakComplete", a.Vq, a), b.Zd && (a = a.a, a.Ji = !0, a.u("command_redirect_controls", a, ["play_pause"], void 0), el(a, ["seek", "settings"]), a.N().fd && el(a, ["audio"]), il(a));
                b.show()
            }
        };
        f.Te = function(a) {
            bw.G.Te.call(this, a);
            var b = parseInt(a.getId(), 10),
                c = 1E3 * this.a.getCurrentTime();
            this.jd && !isNaN(b) && c > a.start && (2147483647 == a.end || 2147483646 == a.end) && (a = this.jd, (b = a.i[b]) && a.wd == b && !b.Zd && b.isVisible && b.ij && b.a instanceof ev && fv(b.a, google.ima.ViewMode.FULLSCREEN))
        };
        f.ro = function() {
            nv(this, "sdk");
            if (this.Vg) return this.Vg;
            var a;
            if (this.la.fa) {
                a = new vs(this.app, 2);
                var b = google.ima.AdDisplayContainer,
                    c = ul(this.b),
                    d = xl(this.b);
                a.i || (a.i = Db(a.g), a.i.addEventListener = v(a.Up, a), a.i.removeEventListener = v(a.Vp, a));
                a = new b(c, void 0, d, a.i)
            } else {
                a = this.b.a.N().Ta ? this.b.a.app.R.a : yl(this.b);
                if (!a) return a = Error("AdModule.getVideoElement returned an invalid element."), b = new Vl, b.a(a), b;
                a = new google.ima.AdDisplayContainer(ul(this.b), a, xl(this.b))
            }
            return this.Vg = new google.ima.AdsLoader(a)
        };

        function nv(a, b) {
            var c = b;
            "nl" == b && (c = a.Ld, c.k++, c = c.k.toString());
            a.j[c] = y();
            "bs" != c && "fb" != c || bl(a, a.j, a.i)
        }
        f.ee = function(a) {
            this.u(a)
        };

        function cw(a) {
            a && (this.name = sa(a.name), this.Na = a.screenId, this.Db = a.loungeToken, this.$a = a.dialId || "")
        }
        f = cw.prototype;
        f.name = "";
        f.Na = "";
        f.Db = "";
        f.$a = "";
        f.An = function() {
            return {
                key: this.Na,
                name: this.name
            }
        };
        f.toString = function() {
            var a = this.Db ? this.Db.slice(-6) : "null";
            return "{name:" + this.name + ",screenId:" + this.Na + ",loungeToken:..." + a + ",dialId:" + this.$a + "}"
        };

        function dw(a) {
            return a ? a.toString() : "null"
        }

        function ew(a) {
            a = a || [];
            return "[" + C(a, function(a) {
                return dw(a)
            }).join(",") + "]"
        };

        function fw(a) {
            a && (this.id = a.id || "", this.name = sa(a.name || ""), this.activityId = a.activityId || "", this.status = a.status || "UNKNOWN")
        }
        f = fw.prototype;
        f.id = "";
        f.name = "";
        f.activityId = "";
        f.status = "UNKNOWN";
        f.An = function() {
            return {
                key: this.id,
                name: this.name
            }
        };

        function gw(a) {
            return {
                id: a.id,
                name: a.name,
                activityId: a.activityId,
                status: a.status
            }
        }
        f.toString = function() {
            return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.activityId + ",status:" + this.status + "}"
        };

        function hw(a) {
            a = a || [];
            return "[" + C(a, function(a) {
                return a ? a.toString() : "null"
            }).join(",") + "]"
        };

        function iw() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
        }

        function jw(a, b) {
            return Ka(a, function(a) {
                return a.key == b
            })
        }

        function kw(a) {
            return C(a, function(a) {
                return a.An()
            })
        }

        function lw(a) {
            return C(a, function(a) {
                return gw(a)
            })
        }

        function mw(a) {
            return C(a, function(a) {
                return new fw(a)
            })
        }

        function nw(a, b) {
            return a || b ? a && b ? a.id == b.id && a.name == b.name : !1 : !0
        }

        function ow(a, b) {
            return Ka(a, function(a) {
                return a.id == b
            })
        }

        function pw(a) {
            return C(a, function(a) {
                return {
                    name: a.name,
                    screenId: a.Na,
                    loungeToken: a.Db,
                    dialId: a.$a
                }
            })
        }

        function qw(a) {
            return C(a, function(a) {
                return new cw(a)
            })
        }

        function rw(a, b) {
            return a || b ? a && b ? a.Na == b.Na : !1 : !0
        }

        function sw(a, b) {
            return a || b ? a && b ? a.Na == b.Na && a.Db == b.Db && a.name == b.name && a.$a == b.$a : !1 : !0
        }

        function tw(a, b) {
            return Ka(a, function(a) {
                return rw(a, b)
            })
        }

        function uw(a, b) {
            return Ka(a, function(a) {
                return b == a.Na || b == a.$a
            })
        };

        function vw() {
            var a = ww(),
                b = xw();
            E(a, b);
            yw() && eb(a, b);
            a = zw(a);
            0 == a.length ? lp.remove("remote_sid", "/", "youtube.com") : mp("remote_sid", a.join(","))
        }

        function ww() {
            var a = sg("yt-remote-connected-devices") || [];
            $a(a);
            return a
        }

        function zw(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return C(a, function(a, b) {
                return 0 == b ? a : a.substring(c.length)
            })
        }

        function Aw(a) {
            pg("yt-remote-connected-devices", a, 86400)
        }

        function xw() {
            if (Bw) return Bw;
            var a = sg("yt-remote-device-id");
            a || (a = iw(), pg("yt-remote-device-id", a, 31536E3));
            for (var b = ww(), c = 1, d = a; E(b, d);) c++, d = a + "#" + c;
            return Bw = d
        }

        function Cw() {
            return sg("yt-remote-session-browser-channel")
        }

        function yw() {
            return sg("yt-remote-session-screen-id")
        }

        function Dw(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = C(Ew(), function(a) {
                    return a.loungeToken
                }),
                c = C(a, function(a) {
                    return a.loungeToken
                });
            Ia(c, function(a) {
                return !E(b, a)
            }) && pg("yt-remote-lounge-token-expiration", !0, 86400);
            pg("yt-remote-local-screens", a, 31536E3)
        }

        function Ew() {
            return sg("yt-remote-local-screens") || []
        }

        function Fw() {
            return sg("yt-remote-online-screens") || []
        }

        function Gw(a) {
            pg("yt-remote-online-dial-devices", a, 30)
        }

        function Hw() {
            return sg("yt-remote-online-dial-devices") || []
        }

        function Iw(a, b) {
            a ? pg("yt-remote-session-video-id", a) : tg("yt-remote-session-video-id");
            b ? pg("yt-remote-session-list-id", b) : tg("yt-remote-session-list-id")
        }

        function Jw(a) {
            a || (tg("yt-remote-session-screen-id"), tg("yt-remote-session-video-id"), tg("yt-remote-session-list-id"));
            vw();
            a = ww();
            Qa(a, xw());
            Aw(a)
        }
        var Bw = "";

        function Kw() {
            var a = qw(Fw()),
                b = mw(Hw()),
                b = Ga(b, function(b) {
                    return !uw(a, b.id)
                });
            return kw(Ta(a, b))
        };

        function Lw(a) {
            return Mw(a || arguments.callee.caller, [])
        }

        function Mw(a, b) {
            var c = [];
            if (E(b, a)) c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(Nw(a) + "(");
                for (var d = a.arguments, e = 0; e < d.length; e++) {
                    0 < e && c.push(", ");
                    var g;
                    g = d[e];
                    switch (typeof g) {
                        case "object":
                            g = g ? "object" : "null";
                            break;
                        case "string":
                            break;
                        case "number":
                            g = String(g);
                            break;
                        case "boolean":
                            g = g ? "true" : "false";
                            break;
                        case "function":
                            g = (g = Nw(g)) ? g : "[fn]";
                            break;
                        default:
                            g = typeof g
                    }
                    40 < g.length && (g = g.substr(0, 40) + "...");
                    c.push(g)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(Mw(a.caller, b))
                } catch (h) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ?
                c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        }

        function Nw(a) {
            if (Ow[a]) return Ow[a];
            a = String(a);
            if (!Ow[a]) {
                var b = /function ([^\(]+)/.exec(a);
                Ow[a] = b ? b[1] : "[Anonymous]"
            }
            return Ow[a]
        }
        var Ow = {};

        function Pw(a, b, c, d, e) {
            this.reset(a, b, c, d, e)
        }
        Pw.prototype.b = null;
        Pw.prototype.a = null;
        var Qw = 0;
        Pw.prototype.reset = function(a, b, c, d, e) {
            "number" == typeof e || Qw++;
            this.i = d || y();
            this.j = a;
            this.k = b;
            this.g = c;
            delete this.b;
            delete this.a
        };
        Pw.prototype.getMessage = function() {
            return this.k
        };

        function Rw(a) {
            this.b = a
        }
        Rw.prototype.a = null;

        function Sw(a, b) {
            this.name = a;
            this.value = b
        }
        Sw.prototype.toString = function() {
            return this.name
        };
        var Tw = new Sw("SHOUT", 1200),
            Uw = new Sw("SEVERE", 1E3),
            Vw = new Sw("WARNING", 900),
            Ww = new Sw("INFO", 800);
        f = Rw.prototype;
        f.Rq = function() {};
        f.Tq = function() {
            return !1
        };
        f.getChildren = function() {
            this.a || (this.a = {});
            return this.a
        };
        f.log = function() {};
        f.Sq = function(a, b, c) {
            var d = new Pw(a, String(b), this.b);
            if (c) {
                d.b = c;
                var e;
                var g = arguments.callee.caller;
                try {
                    var h;
                    var k = q("window.location.href");
                    if (u(c)) h = {
                        message: c,
                        name: "Unknown error",
                        lineNumber: "Not available",
                        fileName: k,
                        stack: "Not available"
                    };
                    else {
                        var m, p, r = !1;
                        try {
                            m = c.lineNumber || c.ft || "Not available"
                        } catch (n) {
                            m = "Not available", r = !0
                        }
                        try {
                            p = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k
                        } catch (w) {
                            p = "Not available", r = !0
                        }
                        h = !r && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                            message: c.message ||
                                "Not available",
                            name: c.name || "UnknownError",
                            lineNumber: m,
                            fileName: p,
                            stack: c.stack || "Not available"
                        }
                    }
                    e = "Message: " + sa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + sa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + sa(Lw(g) + "-> ")
                } catch (L) {
                    e = "Exception trying to expose exception! You win, we lose. " + L
                }
                d.a = e
            }
            return d
        };
        f.info = function() {};
        var Xw = {},
            Yw = null;

        function Zw() {
            Yw || (Yw = new Rw(""), Xw[""] = Yw)
        }

        function $w(a) {
            Zw();
            var b;
            if (!(b = Xw[a])) {
                b = new Rw(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                $w(a.substr(0, c)).getChildren()[d] = b;
                Xw[a] = b
            }
            return b
        };

        function ax() {
            this.a = y()
        }
        var bx = new ax;
        ax.prototype.set = function(a) {
            this.a = a
        };
        ax.prototype.reset = function() {
            this.set(y())
        };
        ax.prototype.get = function() {
            return this.a
        };

        function cx(a) {
            this.g = a || "";
            this.i = bx
        }
        cx.prototype.b = !0;
        cx.prototype.a = !1;

        function dx(a) {
            return 10 > a ? "0" + a : String(a)
        }

        function ex(a, b) {
            var c = (a.i - b) / 1E3,
                d = c.toFixed(3),
                e = 0;
            if (1 > c) e = 2;
            else
                for (; 100 > c;) e++, c *= 10;
            for (; 0 < e--;) d = " " + d;
            return d
        }

        function fx(a) {
            cx.call(this, a)
        }
        A(fx, cx);

        function gx(a, b) {
            var c = [];
            c.push(a.g, " ");
            if (a.b) {
                var d = new Date(b.i);
                c.push("[", dx(d.getFullYear() - 2E3) + dx(d.getMonth() + 1) + dx(d.getDate()) + " " + dx(d.getHours()) + ":" + dx(d.getMinutes()) + ":" + dx(d.getSeconds()) + "." + dx(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            c.push("[", ex(b, a.i.get()), "s] ");
            c.push("[", b.g, "] ");
            c.push(b.getMessage());
            a.a && b.b && c.push("\n", b.a);
            c.push("\n");
            return c.join("")
        };

        function hx(a, b) {
            this.b = new jb(a);
            this.a = b ? gb : fb
        }
        hx.prototype.stringify = function(a) {
            return ib(this.b, a)
        };
        hx.prototype.parse = function(a) {
            return this.a(a)
        };

        function ix() {};

        function jx() {}
        jx.prototype.a = null;
        var kx;

        function lx() {}
        A(lx, jx);

        function mx(a) {
            return (a = nx(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        }

        function ox(a) {
            var b = {};
            nx(a) && (b[0] = !0, b[1] = !0);
            return b
        }

        function nx(a) {
            if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.b = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.b
        }
        kx = new lx;

        function px(a, b, c, d, e) {
            this.b = a;
            this.a = b;
            this.j = c;
            this.g = d;
            this.i = e || 1;
            this.Gb = 45E3;
            this.o = new Lo(this);
            this.k = new lh;
            mh(this.k, 250)
        }
        f = px.prototype;
        f.Od = null;
        f.Kb = !1;
        f.Pe = null;
        f.tj = null;
        f.uf = null;
        f.Me = null;
        f.nd = null;
        f.eb = null;
        f.od = null;
        f.Ba = null;
        f.Ff = 0;
        f.Nb = null;
        f.Ee = null;
        f.Sd = null;
        f.sf = -1;
        f.El = !0;
        f.Td = !1;
        f.Fi = 0;
        f.Ng = null;

        function qx(a, b) {
            switch (a) {
                case 0:
                    return "Non-200 return code (" + b + ")";
                case 1:
                    return "XMLHTTP failure (no data)";
                case 2:
                    return "HttpConnection timeout";
                default:
                    return "Unknown error"
            }
        }
        var rx = {},
            sx = {};
        f = px.prototype;
        f.setTimeout = function(a) {
            this.Gb = a
        };

        function tx(a, b, c) {
            a.Me = 1;
            a.nd = ke(b.clone());
            a.od = c;
            a.C = !0;
            ux(a, null)
        }

        function vx(a, b, c, d, e) {
            a.Me = 1;
            a.nd = ke(b.clone());
            a.od = null;
            a.C = c;
            e && (a.El = !1);
            ux(a, d)
        }

        function ux(a, b) {
            a.uf = y();
            wx(a);
            a.eb = a.nd.clone();
            ie(a.eb, "t", a.i);
            a.Ff = 0;
            a.Ba = a.b.Qi(a.b.Ug() ? b : null);
            0 < a.Fi && (a.Ng = new Mp(v(a.Gl, a, a.Ba), a.Fi));
            a.o.listen(a.Ba, "readystatechange", a.Pp);
            var c = a.Od ? Db(a.Od) : {};
            a.od ? (a.Ee = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.Ba.send(a.eb, a.Ee, a.od, c)) : (a.Ee = "GET", a.El && !Wb && (c.Connection = "close"), a.Ba.send(a.eb, a.Ee, null, c));
            a.b.Ib(1);
            var d = a.od;
            if (d)
                for (var c = "", d = d.split("&"), e = 0; e < d.length; e++) {
                    var g = d[e].split("=");
                    if (1 < g.length) var h =
                        g[0],
                        g = g[1],
                        k = h.split("_"),
                        c = 2 <= k.length && "type" == k[1] ? c + (h + "=" + g + "&") : c + (h + "=redacted&")
                } else c = null;
            a.a.info("XMLHTTP REQ (" + a.g + ") [attempt " + a.i + "]: " + a.Ee + "\n" + a.eb + "\n" + c)
        }
        f.Pp = function(a) {
            a = a.target;
            var b = this.Ng;
            b && 3 == xx(a) ? (this.a.debug("Throttling readystatechange."), b.Vd ? b.Xf = !0 : Np(b)) : this.Gl(a)
        };
        f.Gl = function(a) {
            try {
                if (a == this.Ba) t: {
                    var b = xx(this.Ba),
                        c = this.Ba.i,
                        d = yx(this.Ba);
                    if (H && !jc(10) || Wb && !I("420+")) {
                        if (4 > b) break t
                    } else if (3 > b || 3 == b && !Ub && !zx(this.Ba)) break t;this.Td || 4 != b || 7 == c || (8 == c || 0 >= d ? this.b.Ib(3) : this.b.Ib(2));Ax(this);
                    var e = yx(this.Ba);this.sf = e;
                    var g = zx(this.Ba);g || this.a.debug("No response text for uri " + this.eb + " status " + e);this.Kb = 200 == e;this.a.info("XMLHTTP RESP (" + this.g + ") [ attempt " + this.i + "]: " + this.Ee + "\n" + this.eb + "\n" + b + " " + e);this.Kb ? (4 == b && Bx(this), this.C ? (Cx(this,
                        b, g), Ub && this.Kb && 3 == b && (this.o.listen(this.k, "tick", this.Gp), this.k.start())) : (Dx(this.a, this.g, g, null), Ex(this, g)), this.Kb && !this.Td && (4 == b ? this.b.Mg(this) : (this.Kb = !1, wx(this)))) : (this.Sd = 400 == e && 0 < g.indexOf("Unknown SID") ? 3 : 0, $(), Bx(this), Fx(this))
                }
            } catch (h) {
                this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.Ba && zx(this.Ba) && zx(this.Ba)
            } finally {}
        };

        function Cx(a, b, c) {
            for (var d = !0; !a.Td && a.Ff < c.length;) {
                var e = Gx(a, c);
                if (e == sx) {
                    4 == b && (a.Sd = 4, $(), d = !1);
                    Dx(a.a, a.g, null, "[Incomplete Response]");
                    break
                } else if (e == rx) {
                    a.Sd = 4;
                    $();
                    Dx(a.a, a.g, c, "[Invalid Chunk]");
                    d = !1;
                    break
                } else Dx(a.a, a.g, e, null), Ex(a, e)
            }
            4 == b && 0 == c.length && (a.Sd = 1, $(), d = !1);
            a.Kb = a.Kb && d;
            d || (Dx(a.a, a.g, c, "[Invalid Chunked Response]"), Bx(a), Fx(a))
        }
        f.Gp = function() {
            var a = xx(this.Ba),
                b = zx(this.Ba);
            this.Ff < b.length && (Ax(this), Cx(this, a, b), this.Kb && 4 != a && wx(this))
        };

        function Gx(a, b) {
            var c = a.Ff,
                d = b.indexOf("\n", c);
            if (-1 == d) return sx;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return rx;
            d += 1;
            if (d + c > b.length) return sx;
            var e = b.substr(d, c);
            a.Ff = d + c;
            return e
        }

        function Hx(a, b) {
            a.uf = y();
            wx(a);
            var c = b ? window.location.hostname : "";
            a.eb = a.nd.clone();
            he(a.eb, "DOMAIN", c);
            he(a.eb, "t", a.i);
            try {
                a.Nb = new ActiveXObject("htmlfile")
            } catch (d) {
                Bx(a);
                a.Sd = 7;
                $();
                Fx(a);
                return
            }
            var e = "<html><body>";
            b && (e += '<script>document.domain="' + c + '"\x3c/script>');
            e += "</body></html>";
            a.Nb.open();
            a.Nb.write(e);
            a.Nb.close();
            a.Nb.parentWindow.m = v(a.Yp, a);
            a.Nb.parentWindow.d = v(a.Ml, a, !0);
            a.Nb.parentWindow.rpcClose = v(a.Ml, a, !1);
            c = a.Nb.createElement("div");
            a.Nb.parentWindow.document.body.appendChild(c);
            c.innerHTML = '<iframe src="' + a.eb + '"></iframe>';
            a.a.info("TRIDENT REQ (" + a.g + ") [ attempt " + a.i + "]: GET\n" + a.eb);
            a.b.Ib(1)
        }
        f.Yp = function(a) {
            Ix(v(this.Ws, this, a), 0)
        };
        f.Ws = function(a) {
            if (!this.Td) {
                var b = this.a;
                b.info("TRIDENT TEXT (" + this.g + "): " + Jx(b, a));
                Ax(this);
                Ex(this, a);
                wx(this)
            }
        };
        f.Ml = function(a) {
            Ix(v(this.Vs, this, a), 0)
        };
        f.Vs = function(a) {
            this.Td || (this.a.info("TRIDENT TEXT (" + this.g + "): " + a ? "success" : "failure"), Bx(this), this.Kb = a, this.b.Mg(this), this.b.Ib(4))
        };
        f.cancel = function() {
            this.Td = !0;
            Bx(this)
        };

        function wx(a) {
            a.tj = y() + a.Gb;
            Kx(a, a.Gb)
        }

        function Kx(a, b) {
            if (null != a.Pe) throw Error("WatchDog timer not null");
            a.Pe = Ix(v(a.Hs, a), b)
        }

        function Ax(a) {
            a.Pe && (l.clearTimeout(a.Pe), a.Pe = null)
        }
        f.Hs = function() {
            this.Pe = null;
            var a = y();
            0 <= a - this.tj ? (this.a.info("TIMEOUT: " + this.eb), 2 != this.Me && this.b.Ib(3), Bx(this), this.Sd = 2, $(), Fx(this)) : Kx(this, this.tj - a)
        };

        function Fx(a) {
            a.b.Lb() || a.Td || a.b.Mg(a)
        }

        function Bx(a) {
            Ax(a);
            lf(a.Ng);
            a.Ng = null;
            a.k.stop();
            a.o.removeAll();
            if (a.Ba) {
                var b = a.Ba;
                a.Ba = null;
                b.abort();
                b.dispose()
            }
            a.Nb && (a.Nb = null)
        }

        function Ex(a, b) {
            try {
                a.b.an(a, b), a.b.Ib(4)
            } catch (c) {}
        };

        function Lx() {}

        function Dx(a, b, c, d) {
            a.info("XMLHTTP TEXT (" + b + "): " + Jx(a, c) + (d ? " " + d : ""))
        }
        Lx.prototype.debug = function(a) {
            this.info(a)
        };
        Lx.prototype.info = function() {};

        function Jx(a, b) {
            if (!b || "y2f%" == b) return b;
            try {
                var c = gb(b);
                if (c)
                    for (var d = 0; d < c.length; d++)
                        if (t(c[d])) {
                            var e = c[d];
                            if (!(2 > e.length)) {
                                var g = e[1];
                                if (t(g) && !(1 > g.length)) {
                                    var h = g[0];
                                    if ("noop" != h && "stop" != h)
                                        for (var k = 1; k < g.length; k++) g[k] = ""
                                }
                            }
                        }
                return hb(c)
            } catch (m) {
                return a.debug("Exception parsing expected JS array - probably was not JS"), b
            }
        };

        function Mx(a, b, c, d, e) {
            (new Lx).debug("TestLoadImageWithRetries: " + e);
            if (0 == d) c(!1);
            else {
                var g = e || 0;
                d--;
                Nx(a, b, function(e) {
                    e ? c(!0) : l.setTimeout(function() {
                        Mx(a, b, c, d, g)
                    }, g)
                })
            }
        }

        function Nx(a, b, c) {
            var d = new Lx;
            d.debug("TestLoadImage: loading " + a);
            var e = new Image;
            e.onload = function() {
                try {
                    d.debug("TestLoadImage: loaded"), Ox(e), c(!0)
                } catch (a) {}
            };
            e.onerror = function() {
                try {
                    d.debug("TestLoadImage: error"), Ox(e), c(!1)
                } catch (a) {}
            };
            e.onabort = function() {
                try {
                    d.debug("TestLoadImage: abort"), Ox(e), c(!1)
                } catch (a) {}
            };
            e.ontimeout = function() {
                try {
                    d.debug("TestLoadImage: timeout"), Ox(e), c(!1)
                } catch (a) {}
            };
            l.setTimeout(function() {
                if (e.ontimeout) e.ontimeout()
            }, b);
            e.src = a
        }

        function Ox(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        };

        function Px(a, b) {
            this.a = a;
            this.b = b;
            this.g = new hx(null, !0)
        }
        f = Px.prototype;
        f.Wi = null;
        f.ib = null;
        f.gh = !1;
        f.am = null;
        f.fh = null;
        f.jj = null;
        f.qj = null;
        f.jb = null;
        f.ae = -1;
        f.Sf = null;
        f.Uf = null;
        f.connect = function(a) {
            this.qj = a;
            a = Qx(this.a, this.qj);
            $();
            this.am = y();
            var b = this.a.A;
            null != b ? (this.Sf = b[0], (this.Uf = b[1]) ? (this.jb = 1, Rx(this)) : (this.jb = 2, Sx(this))) : (ie(a, "MODE", "init"), this.ib = new px(this, this.b, void 0, void 0, void 0), this.ib.Od = this.Wi, vx(this.ib, a, !1, null, !0), this.jb = 0)
        };

        function Rx(a) {
            var b = Tx(a.a, a.Uf, "/mail/images/cleardot.gif");
            ke(b);
            Mx(b.toString(), 5E3, v(a.nr, a), 3, 2E3);
            a.Ib(1)
        }
        f.nr = function(a) {
            if (a) this.jb = 2, Sx(this);
            else {
                $();
                var b = this.a;
                b.a.debug("Test Connection Blocked");
                b.Ic = b.Cd.ae;
                Ux(b, 9)
            }
            a && this.Ib(2)
        };

        function Sx(a) {
            a.b.debug("TestConnection: starting stage 2");
            var b = a.a.B;
            if (null != b) a.b.debug("TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), $(), b ? ($(), Vx(a.a, a, !1)) : ($(), Vx(a.a, a, !0));
            else if (a.ib = new px(a, a.b, void 0, void 0, void 0), a.ib.Od = a.Wi, b = Wx(a.a, a.Sf, a.qj), $(), !H || jc(10)) ie(b, "TYPE", "xmlhttp"), vx(a.ib, b, !1, a.Sf, !1);
            else {
                ie(b, "TYPE", "html");
                var c = a.ib;
                a = Boolean(a.Sf);
                c.Me = 3;
                c.nd = ke(b.clone());
                Hx(c, a)
            }
        }
        f.Qi = function(a) {
            return this.a.Qi(a)
        };
        f.abort = function() {
            this.ib && (this.ib.cancel(), this.ib = null);
            this.ae = -1
        };
        f.Lb = function() {
            return !1
        };
        f.an = function(a, b) {
            this.ae = a.sf;
            if (0 == this.jb)
                if (this.b.debug("TestConnection: Got data for stage 1"), b) {
                    try {
                        var c = this.g.parse(b)
                    } catch (d) {
                        Xx(this.a, this);
                        return
                    }
                    this.Sf = c[0];
                    this.Uf = c[1]
                } else this.b.debug("TestConnection: Null responseText"), Xx(this.a, this);
            else if (2 == this.jb)
                if (this.gh) $(), this.jj = y();
                else if ("11111" == b) {
                if ($(), this.gh = !0, this.fh = y(), c = this.fh - this.am, !H || jc(10) || 500 > c) this.ae = 200, this.ib.cancel(), this.b.debug("Test connection succeeded; using streaming connection"), $(), Vx(this.a,
                    this, !0)
            } else $(), this.fh = this.jj = y(), this.gh = !1
        };
        f.Mg = function() {
            this.ae = this.ib.sf;
            if (!this.ib.Kb) this.b.debug("TestConnection: request failed, in state " + this.jb), 0 == this.jb ? $() : 2 == this.jb && $(), Xx(this.a, this);
            else if (0 == this.jb) this.b.debug("TestConnection: request complete for initial check"), this.Uf ? (this.jb = 1, Rx(this)) : (this.jb = 2, Sx(this));
            else if (2 == this.jb) {
                this.b.debug("TestConnection: request complete for stage 2");
                var a = !1;
                (a = !H || jc(10) ? this.gh : 200 > this.jj - this.fh ? !1 : !0) ? (this.b.debug("Test connection succeeded; using streaming connection"), $(),
                    Vx(this.a, this, !0)) : (this.b.debug("Test connection failed; not using streaming"), $(), Vx(this.a, this, !1))
            }
        };
        f.Ug = function() {
            return this.a.Ug()
        };
        f.Ib = function(a) {
            this.a.Ib(a)
        };

        function Yx(a) {
            ih.call(this);
            this.headers = new Ad;
            this.j = a || null;
            this.b = !1;
            this.H = this.a = null;
            this.O = this.A = "";
            this.i = 0;
            this.k = "";
            this.g = this.L = this.C = this.J = !1;
            this.o = 0;
            this.B = null;
            this.T = "";
            this.F = this.U = !1
        }
        A(Yx, ih);
        var Zx = /^https?$/i,
            $x = ["POST", "PUT"];
        f = Yx.prototype;
        f.send = function(a, b, c, d) {
            if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.A + "; newUri=" + a);
            b = b ? b.toUpperCase() : "GET";
            this.A = a;
            this.k = "";
            this.i = 0;
            this.O = b;
            this.J = !1;
            this.b = !0;
            this.a = this.j ? mx(this.j) : mx(kx);
            this.H = this.j ? this.j.a || (this.j.a = ox(this.j)) : kx.a || (kx.a = ox(kx));
            this.a.onreadystatechange = v(this.Zk, this);
            try {
                ix(ay(this, "Opening Xhr")), this.L = !0, this.a.open(b, a, !0), this.L = !1
            } catch (e) {
                ix(ay(this, "Error opening Xhr: " + e.message));
                by(this, e);
                return
            }
            a = c || "";
            var g = this.headers.clone();
            d && Fd(d, function(a, b) {
                g.set(b, a)
            });
            d = Ka(g.Hc(), cy);
            c = l.FormData && a instanceof l.FormData;
            !E($x, b) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            Fd(g, function(a, b) {
                this.a.setRequestHeader(b, a)
            }, this);
            this.T && (this.a.responseType = this.T);
            "withCredentials" in this.a && (this.a.withCredentials = this.U);
            try {
                dy(this), 0 < this.o && (this.F = H && I(9) && ga(this.a.timeout) && s(this.a.ontimeout), ix(ay(this, "Will abort after " + this.o + "ms if incomplete, xhr2 " + this.F)),
                    this.F ? (this.a.timeout = this.o, this.a.ontimeout = v(this.Gb, this)) : this.B = nh(this.Gb, this.o, this)), ix(ay(this, "Sending request")), this.C = !0, this.a.send(a), this.C = !1
            } catch (h) {
                ix(ay(this, "Send error: " + h.message)), by(this, h)
            }
        };

        function cy(a) {
            return "content-type" == a.toLowerCase()
        }
        f.Gb = function() {
            "undefined" != typeof aa && this.a && (this.k = "Timed out after " + this.o + "ms, aborting", this.i = 8, ay(this, this.k), jh(this, "timeout"), this.abort(8))
        };

        function by(a, b) {
            a.b = !1;
            a.a && (a.g = !0, a.a.abort(), a.g = !1);
            a.k = b;
            a.i = 5;
            ey(a);
            fy(a)
        }

        function ey(a) {
            a.J || (a.J = !0, jh(a, "complete"), jh(a, "error"))
        }
        f.abort = function(a) {
            this.a && this.b && (ay(this, "Aborting"), this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.i = a || 7, jh(this, "complete"), jh(this, "abort"), fy(this))
        };
        f.I = function() {
            this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), fy(this, !0));
            Yx.G.I.call(this)
        };
        f.Zk = function() {
            this.W() || (this.L || this.C || this.g ? gy(this) : this.Ur())
        };
        f.Ur = function() {
            gy(this)
        };

        function gy(a) {
            if (a.b && "undefined" != typeof aa)
                if (a.H[1] && 4 == xx(a) && 2 == yx(a)) ay(a, "Local request error detected and ignored");
                else if (a.C && 4 == xx(a)) nh(a.Zk, 0, a);
            else if (jh(a, "readystatechange"), 4 == xx(a)) {
                ay(a, "Request complete");
                a.b = !1;
                try {
                    var b = yx(a),
                        c, d;
                    t: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            d = !0;
                            break t;
                        default:
                            d = !1
                    }
                    if (!(c = d)) {
                        var e;
                        if (e = 0 === b) {
                            var g = Id(String(a.A))[1] || null;
                            if (!g && self.location) var h = self.location.protocol,
                                g = h.substr(0, h.length - 1);
                            e = !Zx.test(g ?
                                g.toLowerCase() : "")
                        }
                        c = e
                    }
                    if (c) jh(a, "complete"), jh(a, "success");
                    else {
                        a.i = 6;
                        var k;
                        try {
                            k = 2 < xx(a) ? a.a.statusText : ""
                        } catch (m) {
                            k = ""
                        }
                        a.k = k + " [" + yx(a) + "]";
                        ey(a)
                    }
                } finally {
                    fy(a)
                }
            }
        }

        function fy(a, b) {
            if (a.a) {
                dy(a);
                var c = a.a,
                    d = a.H[0] ? ba : null;
                a.a = null;
                a.H = null;
                b || jh(a, "ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        }

        function dy(a) {
            a.a && a.F && (a.a.ontimeout = null);
            ga(a.B) && (l.clearTimeout(a.B), a.B = null)
        }

        function xx(a) {
            return a.a ? a.a.readyState : 0
        }

        function yx(a) {
            try {
                return 2 < xx(a) ? a.a.status : -1
            } catch (b) {
                return -1
            }
        }

        function zx(a) {
            try {
                return a.a ? a.a.responseText : ""
            } catch (b) {
                return ""
            }
        }

        function ay(a, b) {
            return b + " [" + a.O + " " + a.A + " " + yx(a) + "]"
        };

        function hy(a, b, c) {
            this.C = a || null;
            this.b = 1;
            this.g = [];
            this.i = [];
            this.a = new Lx;
            this.k = new hx(null, !0);
            this.A = b || null;
            this.B = null != c ? c : null
        }

        function iy(a, b) {
            this.a = a;
            this.map = b;
            this.Aa = null
        }
        f = hy.prototype;
        f.Zf = null;
        f.Ya = null;
        f.xa = null;
        f.Pi = null;
        f.Og = null;
        f.Sl = null;
        f.$g = null;
        f.Cf = 0;
        f.Bq = 0;
        f.Qa = null;
        f.vd = null;
        f.Qc = null;
        f.$d = null;
        f.Cd = null;
        f.Hg = null;
        f.Ce = -1;
        f.im = -1;
        f.Ic = -1;
        f.Df = 0;
        f.Ke = 0;
        f.Rd = 8;
        var jy = new ih;

        function ky(a) {
            Hg.call(this, "statevent", a)
        }
        A(ky, Hg);

        function ly(a, b) {
            Hg.call(this, "timingevent", a);
            this.size = b
        }
        A(ly, Hg);

        function my(a) {
            Hg.call(this, "serverreachability", a)
        }
        A(my, Hg);
        f = hy.prototype;
        f.connect = function(a, b, c, d, e) {
            this.a.debug("connect()");
            $();
            this.Pi = b;
            this.Zf = c || {};
            d && s(e) && (this.Zf.OSID = d, this.Zf.OAID = e);
            this.a.debug("connectTest_()");
            this.Cd = new Px(this, this.a);
            this.Cd.Wi = null;
            this.Cd.g = this.k;
            this.Cd.connect(a)
        };
        f.disconnect = function() {
            this.a.debug("disconnect()");
            ny(this);
            if (3 == this.b) {
                var a = this.Cf++,
                    b = this.Og.clone();
                he(b, "SID", this.j);
                he(b, "RID", a);
                he(b, "TYPE", "terminate");
                oy(this, b);
                a = new px(this, this.a, this.j, a, void 0);
                a.Me = 2;
                a.nd = ke(b.clone());
                (new Image).src = a.nd;
                a.uf = y();
                wx(a)
            }
            py(this)
        };

        function ny(a) {
            a.Cd && (a.Cd.abort(), a.Cd = null);
            a.xa && (a.xa.cancel(), a.xa = null);
            a.Qc && (l.clearTimeout(a.Qc), a.Qc = null);
            qy(a);
            a.Ya && (a.Ya.cancel(), a.Ya = null);
            a.vd && (l.clearTimeout(a.vd), a.vd = null)
        }
        f.Lb = function() {
            return 0 == this.b
        };

        function ry(a) {
            var b = 0;
            a.xa && b++;
            a.Ya && b++;
            return b
        }

        function sy(a) {
            a.Ya || a.vd || (a.vd = Ix(v(a.nm, a), 0), a.Df = 0)
        }
        f.nm = function(a) {
            this.vd = null;
            this.a.debug("startForwardChannel_");
            if (1 == this.b) {
                if (!a) {
                    this.a.debug("open_()");
                    this.Cf = Math.floor(1E5 * Math.random());
                    a = this.Cf++;
                    var b = new px(this, this.a, "", a, void 0);
                    b.Od = null;
                    var c = ty(this),
                        d = this.Og.clone();
                    he(d, "RID", a);
                    this.C && he(d, "CVER", this.C);
                    oy(this, d);
                    tx(b, d, c);
                    this.Ya = b;
                    this.b = 2
                }
            } else 3 == this.b && (a ? uy(this, a) : 0 == this.g.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.Ya || (uy(this), this.a.debug("startForwardChannel_ finished, sent request")))
        };

        function uy(a, b) {
            var c, d;
            b ? 6 < a.Rd ? (a.g = a.i.concat(a.g), a.i.length = 0, c = a.Cf - 1, d = ty(a)) : (c = b.g, d = b.od) : (c = a.Cf++, d = ty(a));
            var e = a.Og.clone();
            he(e, "SID", a.j);
            he(e, "RID", c);
            he(e, "AID", a.Ce);
            oy(a, e);
            c = new px(a, a.a, a.j, c, a.Df + 1);
            c.Od = null;
            c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
            a.Ya = c;
            tx(c, e, d)
        }

        function oy(a, b) {
            if (a.Qa) {
                var c = a.Qa.vn(a);
                c && Fd(c, function(a, c) {
                    he(b, c, a)
                })
            }
        }

        function ty(a) {
            var b = Math.min(a.g.length, 1E3),
                c = ["count=" + b],
                d;
            6 < a.Rd && 0 < b ? (d = a.g[0].a, c.push("ofs=" + d)) : d = 0;
            for (var e = 0; e < b; e++) {
                var g = a.g[e].a,
                    h = a.g[e].map,
                    g = 6 >= a.Rd ? e : g - d;
                try {
                    Fd(h, function(a, b) {
                        c.push("req" + g + "_" + b + "=" + encodeURIComponent(a))
                    })
                } catch (k) {
                    c.push("req" + g + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.i = a.i.concat(a.g.splice(0, b));
            return c.join("&")
        }

        function vy(a) {
            a.xa || a.Qc || (a.o = 1, a.Qc = Ix(v(a.Km, a), 0), a.Ke = 0)
        }

        function wy(a) {
            if (a.xa || a.Qc || 3 <= a.Ke) return !1;
            a.a.debug("Going to retry GET");
            a.o++;
            a.Qc = Ix(v(a.Km, a), xy(a, a.Ke));
            a.Ke++;
            return !0
        }
        f.Km = function() {
            this.Qc = null;
            this.a.debug("Creating new HttpRequest");
            this.xa = new px(this, this.a, this.j, "rpc", this.o);
            this.xa.Od = null;
            this.xa.Fi = 0;
            var a = this.Sl.clone();
            he(a, "RID", "rpc");
            he(a, "SID", this.j);
            he(a, "CI", this.Hg ? "0" : "1");
            he(a, "AID", this.Ce);
            oy(this, a);
            if (!H || jc(10)) he(a, "TYPE", "xmlhttp"), vx(this.xa, a, !0, this.$g, !1);
            else {
                he(a, "TYPE", "html");
                var b = this.xa,
                    c = Boolean(this.$g);
                b.Me = 3;
                b.nd = ke(a.clone());
                Hx(b, c)
            }
            this.a.debug("New Request created")
        };

        function Vx(a, b, c) {
            a.a.debug("Test Connection Finished");
            a.Hg = c;
            a.Ic = b.ae;
            a.a.debug("connectChannel_()");
            a.lr(1, 0);
            a.Og = Qx(a, a.Pi);
            sy(a)
        }

        function Xx(a, b) {
            a.a.debug("Test Connection Failed");
            a.Ic = b.ae;
            Ux(a, 2)
        }
        f.an = function(a, b) {
            if (0 != this.b && (this.xa == a || this.Ya == a))
                if (this.Ic = a.sf, this.Ya == a && 3 == this.b)
                    if (7 < this.Rd) {
                        var c;
                        try {
                            c = this.k.parse(b)
                        } catch (d) {
                            c = null
                        }
                        if (t(c) && 3 == c.length) {
                            var e = c;
                            if (0 == e[0]) t: if (this.a.debug("Server claims our backchannel is missing."), this.Qc) this.a.debug("But we are currently starting the request.");
                                else {
                                    if (this.xa)
                                        if (this.xa.uf + 3E3 < this.Ya.uf) qy(this), this.xa.cancel(), this.xa = null;
                                        else break t;
                                    wy(this);
                                    $()
                                }
                            else this.im = e[1], c = this.im - this.Ce, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " +
                                c + " arrays) are outstanding on the BackChannel"), 37500 > e && this.Hg && 0 == this.Ke && !this.$d && (this.$d = Ix(v(this.wq, this), 6E3)))
                        } else this.a.debug("Bad POST response data returned"), Ux(this, 11)
                    } else "y2f%" != b && (this.a.debug("Bad data returned - missing/invald magic cookie"), Ux(this, 11));
            else if (this.xa == a && qy(this), !/^[\s\xa0]*$/.test(b))
                for (c = this.k.parse(b), t(c), e = 0; e < c.length; e++) {
                    var g = c[e];
                    this.Ce = g[0];
                    g = g[1];
                    2 == this.b ? "c" == g[0] ? (this.j = g[1], this.$g = g[2], g = g[3], null != g ? this.Rd = g : this.Rd = 6, this.b = 3,
                        this.Qa && this.Qa.hm(this), this.Sl = Wx(this, this.$g, this.Pi), vy(this)) : "stop" == g[0] && Ux(this, 7) : 3 == this.b && ("stop" == g[0] ? Ux(this, 7) : "noop" != g[0] && this.Qa && this.Qa.gm(this, g), this.Ke = 0)
                }
        };
        f.wq = function() {
            null != this.$d && (this.$d = null, this.xa.cancel(), this.xa = null, wy(this), $())
        };

        function qy(a) {
            null != a.$d && (l.clearTimeout(a.$d), a.$d = null)
        }
        f.Mg = function(a) {
            this.a.debug("Request complete");
            var b;
            if (this.xa == a) qy(this), this.xa = null, b = 2;
            else if (this.Ya == a) this.Ya = null, b = 1;
            else return;
            this.Ic = a.sf;
            if (0 != this.b)
                if (a.Kb) 1 == b ? (y(), jh(jy, new ly(jy, a.od ? a.od.length : 0)), sy(this), this.i.length = 0) : vy(this);
                else {
                    var c = a.Sd;
                    if (3 == c || 7 == c || 0 == c && 0 < this.Ic) this.a.debug("Not retrying due to error type");
                    else {
                        this.a.debug("Maybe retrying, last error: " + qx(c, this.Ic));
                        var d;
                        if (d = 1 == b) this.Ya || this.vd ? d = !1 : 1 == this.b || 2 <= this.Df ? d = !1 : (this.a.debug("Going to retry POST"),
                            this.vd = Ix(v(this.nm, this, a), xy(this, this.Df)), this.Df++, d = !0);
                        if (d || 2 == b && wy(this)) return;
                        this.a.debug("Exceeded max number of retries")
                    }
                    this.a.debug("Error: HTTP request failed");
                    switch (c) {
                        case 1:
                            Ux(this, 5);
                            break;
                        case 4:
                            Ux(this, 10);
                            break;
                        case 3:
                            Ux(this, 6);
                            break;
                        case 7:
                            Ux(this, 12);
                            break;
                        default:
                            Ux(this, 2)
                    }
                }
        };

        function xy(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.Qa || (a.a.debug("Inactive channel"), c *= 2);
            return c * b
        }
        f.lr = function(a) {
            if (!E(arguments, this.b)) throw Error("Unexpected channel state: " + this.b);
        };

        function Ux(a, b) {
            a.a.info("Error code " + b);
            if (2 == b || 9 == b) {
                var c = null;
                a.Qa && (c = null);
                var d = v(a.or, a);
                c || (c = new Ud("//web.archive.org/web/20130831093956/https://www.google.com/images/cleardot.gif"), ke(c));
                Nx(c.toString(), 1E4, d)
            } else $();
            yy(a, b)
        }
        f.or = function(a) {
            a ? (this.a.info("Successfully pinged google.com"), $()) : (this.a.info("Failed to ping google.com"), $(), yy(this, 8))
        };

        function yy(a, b) {
            a.a.debug("HttpChannel: error - " + b);
            a.b = 0;
            a.Qa && a.Qa.Cm(a, b);
            py(a);
            ny(a)
        }

        function py(a) {
            a.b = 0;
            a.Ic = -1;
            if (a.Qa)
                if (0 == a.i.length && 0 == a.g.length) a.Qa.bj(a);
                else {
                    a.a.debug("Number of undelivered maps, pending: " + a.i.length + ", outgoing: " + a.g.length);
                    var b = Ua(a.i),
                        c = Ua(a.g);
                    a.i.length = 0;
                    a.g.length = 0;
                    a.Qa.bj(a, b, c)
                }
        }

        function Qx(a, b) {
            var c = Tx(a, null, b);
            a.a.debug("GetForwardChannelUri: " + c);
            return c
        }

        function Wx(a, b, c) {
            b = Tx(a, a.Ug() ? b : null, c);
            a.a.debug("GetBackChannelUri: " + b);
            return b
        }

        function Tx(a, b, c) {
            var d = le(c);
            if ("" != d.Wd) b && Wd(d, b + "." + d.Wd), Xd(d, d.bg);
            else var e = window.location,
                d = me(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c);
            a.Zf && Fd(a.Zf, function(a, b) {
                he(d, b, a)
            });
            he(d, "VER", a.Rd);
            oy(a, d);
            return d
        }
        f.Qi = function(a) {
            if (a) throw Error("Can't create secondary domain capable XhrIo object.");
            a = new Yx;
            a.U = !1;
            return a
        };

        function Ix(a, b) {
            if (!ha(a)) throw Error("Fn must not be null and must be a function");
            return l.setTimeout(function() {
                a()
            }, b)
        }
        f.Ib = function() {
            jh(jy, new my(jy))
        };

        function $() {
            jh(jy, new ky(jy))
        }
        f.Ug = function() {
            return !(!H || jc(10))
        };

        function zy() {}
        f = zy.prototype;
        f.hm = function() {};
        f.gm = function() {};
        f.Cm = function() {};
        f.bj = function() {};
        f.vn = function() {
            return {}
        };

        function Ay() {
            v(this.i, this);
            this.a = new fx;
            this.a.b = !1;
            this.b = this.a.a = !1;
            this.g = "";
            this.j = {}
        }

        function By() {
            var a = Cy;
            !0 != a.b && (Zw(), a.b = !0)
        }
        Ay.prototype.i = function(a) {
            if (!this.j[a.g]) {
                var b = gx(this.a, a),
                    c = Dy;
                if (c) switch (a.j) {
                    case Tw:
                        Ey(c, "info", b);
                        break;
                    case Uw:
                        Ey(c, "error", b);
                        break;
                    case Vw:
                        Ey(c, "warn", b);
                        break;
                    default:
                        Ey(c, "debug", b)
                } else window.opera ? window.opera.postError(b) : this.g += b
            }
        };
        var Cy = null,
            Dy = window.console;

        function Ey(a, b, c) {
            if (a[b]) a[b](c);
            else a.log(c)
        };
        var Fy = null,
            Gy = null,
            Hy = Array(50),
            Iy = -1,
            Jy = !1;

        function Ky(a) {
            var b = (Iy + 1) % 50;
            Iy = b;
            Hy[b] = a;
            Jy || (Jy = 49 == b)
        }

        function Ly(a) {
            var b = Hy;
            if (b[0]) {
                var c = Iy,
                    d = Jy ? c : -1;
                do {
                    var d = (d + 1) % 50,
                        e = b[d];
                    B(a, function(a) {
                        a(e)
                    })
                } while (d != c);
                Hy = Array(50);
                Iy = -1;
                Jy = !1
            }
        }

        function My(a, b) {
            var c = q("yt.remote.debug.logger_"),
                d = q("yt.remote.debug.handlers_");
            if (c) {
                if (c.log(Ww, a + ": " + b, void 0), d && 0 != d.length) {
                    Ly(d);
                    var e = c.getLogRecord(Ww, a + ": " + b, void 0);
                    B(d, function(a) {
                        a(e)
                    })
                }
            } else d && 0 != d.length || Ky(new Pw(Ww, String(b), "yt.remote"))
        };

        function Ny(a) {
            My("CAST", a)
        }

        function Oy(a) {
            var b = Py();
            b && b.logMessage && (a = gx(Qy, a), b.logMessage(a))
        }

        function Ry() {
            if (!Sy) {
                0 == Ty.length && Va(Ty, Hw());
                var a;
                "cast" in window ? (a = window.cast || {}, a = "ActivityStatus" in a && "Api" in a && "LaunchRequest" in a && "Receiver" in a) : a = !1;
                if (a) {
                    if (a = Py()) a.removeReceiverListener("YouTube", Uy), a.addReceiverListener("YouTube", Uy), Ny("API initialized in the other binary");
                    else {
                        a = new cast.Api;
                        z("yt.remote.castapi.api_", a);
                        a.addReceiverListener("YouTube", Uy);
                        Qy = new fx;
                        Qy.b = !1;
                        Qy.a = !1;
                        a = q("yt.remote.debug.logger_");
                        var b = q("yt.remote.debug.handlers_");
                        a && b || (Cy || (Cy = new Ay), -1 != window.location.href.indexOf("Debug=true") && By(), By(), Cy.a.a = !0, Fy = q("yt.remote.debug.logger_") || $w("yt.remote"), Rw.prototype.log = Rw.prototype.log, Rw.prototype.getLogRecord = Rw.prototype.Sq, Rw.prototype.addHandler = Rw.prototype.Rq, Rw.prototype.removeHandler = Rw.prototype.Tq, z("yt.remote.debug.logger_", Fy), Gy = q("yt.remote.debug.handlers_") || [], z("yt.remote.debug.handlers_", Gy), q("yt.remote.debug.logger_"), b = q("yt.remote.debug.handlers_"));
                        b && (b.push(Oy), Ly(b));
                        Ny("API initialized")
                    }
                    Sy = !0
                }
            }
        }

        function Vy(a) {
            var b = La(Ty, function(b) {
                return b.id == a.id
            });
            0 <= b && (Ty[b] = gw(a))
        }

        function Uy(a) {
            Ny("Updating receivers: " + hb(a));
            Wy(a);
            vp("yt-remote-cast-device-list-update", Xy());
            B(Xy(), function(a) {
                Yy(a.id)
            });
            B(a, function(a) {
                a.isTabProjected && (a = Zy(a.id), Ny("Detected device: " + a.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event."), vp("yt-remote-cast-device-tab-projected", a))
            })
        }

        function $y(a, b) {
            Ny("Updating " + a + " activity status: " + hb(b));
            var c = Zy(a);
            c ? (b.activityId && (c.activityId = b.activityId), c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN", "RUNNING" != c.status && (c.activityId = ""), Vy(c), vp("yt-remote-cast-device-status-update", c)) : Ny("Device not found")
        }

        function Xy() {
            Ry();
            return mw(Ty)
        }

        function Wy(a) {
            a = C(a, function(a) {
                var c = {
                    id: a.id,
                    name: a.name
                };
                if (a = Zy(a.id)) c.activityId = a.activityId, c.status = a.status;
                return c
            });
            Oa(Ty);
            Va(Ty, a)
        }

        function Zy(a) {
            var b = Xy();
            return Ka(b, function(b) {
                return b.id == a
            }) || null
        }

        function Yy(a) {
            var b = Zy(a),
                c = Py();
            c && b && b.activityId && c.getActivityStatus(b.activityId, function(b) {
                "error" == b.status && (b.status = "stopped");
                $y(a, b)
            })
        }

        function az(a, b, c, d) {
            Ry();
            var e = Zy(a),
                g = Py();
            if (g && e) {
                var h = new cast.Receiver(e.id, e.name),
                    h = new cast.LaunchRequest("YouTube", h);
                h.parameters = "pairingCode=" + b;
                h.description = new cast.LaunchDescription;
                h.description.text = document.title;
                c && (h.parameters += "&v=" + c, d && (h.parameters += "&t=" + Math.round(d)), h.description.url = "http://i.ytimg.com/vi/" + c + "/default.jpg");
                "UNKNOWN" != e.status && (e.status = "UNKNOWN", Vy(e), vp("yt-remote-cast-device-status-update", e));
                Ny("Sending a cast launch request with params: " +
                    h.parameters);
                g.launch(h, oa($y, a))
            } else Ny("No cast API or no cast device. Dropping cast launch.")
        }

        function bz(a) {
            Ry();
            var b = Zy(a),
                c = Py();
            c && b && b.activityId ? (Ny("Stopping cast activity"), c.stopActivity(b.activityId, oa($y, a))) : Ny("Dropping cast activity stop")
        }

        function Py() {
            return q("yt.remote.castapi.api_")
        }
        var Qy = null,
            Sy = !1,
            Ty = q("yt.remote.castapi.devices_") || [];
        z("yt.remote.castapi.devices_", Ty);

        function cz(a) {
            a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.Um = a.user || "")
        }
        f = cz.prototype;
        f.id = "";
        f.name = "";
        f.app = "";
        f.type = "REMOTE_CONTROL";
        f.Um = "";
        f.equals = function(a) {
            return a ? this.id == a.id : !1
        };

        function dz(a, b) {
            this.action = a;
            this.params = b || null
        };

        function ez(a, b) {
            lh.call(this);
            if (ha(a)) b && (a = v(a, b));
            else if (a && ha(a.handleEvent)) a = v(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.o = a;
            Yg(this, "tick", v(this.k, this));
            this.stop();
            mh(this, 5E3 + 2E4 * Math.random())
        }
        A(ez, lh);
        ez.prototype.j = 0;
        ez.prototype.k = function() {
            if (500 < this.a) {
                var a = this.a;
                24E4 > 2 * a && (a *= 2);
                mh(this, a)
            }
            this.o()
        };
        ez.prototype.start = function() {
            ez.G.start.call(this);
            this.j = y() + this.a
        };
        ez.prototype.stop = function() {
            this.j = 0;
            ez.G.stop.call(this)
        };

        function fz(a, b) {
            this.k = a;
            this.j = b;
            this.g = new Cg;
            this.b = new ez(this.Xp, this);
            this.a = null
        }
        A(fz, zy);
        f = fz.prototype;
        f.Lg = "";
        f.Gf = 0;
        f.hh = 0;
        f.debug = function() {};
        f.D = function(a, b, c) {
            return this.g.D(a, b, c)
        };
        f.Q = function(a, b, c) {
            return this.g.Q(a, b, c)
        };
        f.xd = function(a) {
            return this.g.xd(a)
        };
        f.u = function(a, b) {
            return this.g.u.apply(this.g, arguments)
        };
        f.connect = function(a, b, c) {
            if (!this.a || 2 != this.a.b) {
                this.Lg = "";
                this.b.stop();
                this.i = a || null;
                this.Gf = b || 0;
                a = this.k + "/test";
                b = this.k + "/bind";
                var d = new hy("1", c ? c.firstTestResults : null, c ? c.secondTestResults : null),
                    e = this.a;
                e && (e.Qa = null);
                d.Qa = this;
                this.a = d;
                e ? (3 != e.b && 0 == ry(e) || this.debug("BrowserChannelServices.Channel: unexpected reconnect state: " + e.b), this.a.connect(a, b, this.j, e.j, e.Ce)) : c ? this.a.connect(a, b, this.j, c.sessionId, c.arrayId) : this.a.connect(a, b, this.j)
            }
        };
        f.disconnect = function(a) {
            this.hh = a || 0;
            this.b.stop();
            this.a && 0 != this.a.b && this.a.disconnect();
            this.hh = 0
        };
        f.sendMessage = function(a, b) {
            if (!this.a || 0 == this.a.b || 2 != this.a.b && 3 != this.a.b && !this.b.ic) this.debug("Ignoring message: " + a);
            else {
                var c = {
                    _sc: a
                };
                b && Gb(c, b);
                this.debug("Sending message: " + hb(c));
                var d = this.a;
                if (0 == d.b) throw Error("Invalid operation: sending map when state is closed");
                1E3 == d.g.length && hb(c);
                d.g.push(new iy(d.Bq++, c));
                2 != d.b && 3 != d.b || sy(d)
            }
        };
        f.hm = function() {
            var a = this.b;
            a.stop();
            mh(a, 5E3 + 2E4 * Math.random());
            this.i = null;
            this.Gf = 0;
            this.u("handlerOpened")
        };
        f.Cm = function(a, b) {
            var c = 2 == b && 401 == this.a.Ic;
            4 == b || c || (6 == b && (c = this.b, c.stop(), mh(c, 500)), this.b.start());
            this.u("handlerError", b)
        };
        f.bj = function() {
            this.b.ic || this.u("handlerClosed")
        };
        f.vn = function() {
            var a = {
                v: 2
            };
            this.Lg && (a.gsessionid = this.Lg);
            0 != this.Gf && (a.ui = "" + this.Gf);
            0 != this.hh && (a.ui = "" + this.hh);
            this.i && Gb(a, this.i);
            return a
        };
        f.gm = function(a, b) {
            this.debug("Channel received array: " + b);
            "S" == b[0] ? this.Lg = b[1] : this.g.u("handlerMessage", new dz(b[0], b[1]))
        };

        function gz(a, b) {
            (a.j.loungeIdToken = b) || a.b.stop()
        }

        function hz(a) {
            return a.b.ic ? a.b.j - y() : NaN
        }
        f.Xp = function() {
            this.b.stop();
            0 != ry(this.a) ? this.b.start() : this.connect(this.i, this.Gf)
        };

        function iz() {
            this.b = [];
            this.index = -1;
            jz(this)
        }

        function jz(a) {
            a.volume = -1;
            a.muted = !1;
            a.g = null;
            a.a = -1;
            a.i = null;
            a.j = 0;
            a.k = y()
        }

        function kz(a) {
            return a.b[a.index]
        }

        function lz(a, b) {
            a.j = b;
            a.k = y()
        }

        function mz(a) {
            switch (a.a) {
                case 1:
                    return (y() - a.k) / 1E3 + a.j;
                case -1E3:
                    return 0
            }
            return a.j
        }

        function nz(a, b) {
            var c = a.index;
            a.index = Fa(a.b, b);
            c != a.index && jz(a)
        }

        function oz(a, b, c) {
            c = c || kz(a);
            if (cb(a.b, b) && c == kz(a)) return !1;
            a.b = Ua(b);
            nz(a, c);
            return !0
        }
        iz.prototype.add = function(a, b) {
            return a && !E(this.b, a) ? (!b || -1 < this.index && this.index >= this.b.length - 1 ? this.b.push(a) : this.b.splice(this.index + 1, 0, a), !0) : !1
        };
        iz.prototype.remove = function(a) {
            var b = kz(this);
            return Qa(this.b, a) ? (this.index = Fa(this.b, b), !0) : !1
        };

        function pz() {
            W.call(this);
            this.Ob = qw(Ew());
            this.log_("Initializing local screens: " + ew(this.Ob));
            this.jh = [];
            this.pj = null;
            this.b = [];
            this.a = [];
            this.kh(Xy());
            this.log_("Initializing DIAL devices: " + hw(this.a));
            var a = qw(Fw());
            qz(this, a);
            this.log_("Initializing online screens: " + ew(this.b));
            rz(this)
        }
        A(pz, W);
        var sz = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 1E4, 15E3, 2E4];
        f = pz.prototype;
        f.ag = NaN;
        f.log_ = function(a) {
            My("RM", a)
        };

        function tz(a) {
            var b = navigator.userAgent;
            if (0 <= b.search("MSIE") && (b = b.match(/MSIE ([\d.]+)/)[1], 0 > ya(b, "10.0"))) return a;
            b = Id(document.location.href);
            return Gd("https", b[3], a)
        }

        function rz(a) {
            tp("yt-remote-cast-device-list-update", a.kh, a);
            tp("yt-remote-cast-device-status-update", a.ds, a);
            tp("yt-remote-cast-device-tab-projected", function(a) {
                this.u("connectToReceiver", a.id)
            }, a);
            a.Ej();
            Je(v(a.Ej, a), 1E4)
        }
        f.u = function(a, b) {
            if (this.W()) return !1;
            this.log_("Firing " + a);
            return this.C.u.apply(this.C, arguments)
        };
        f.Ej = function() {
            var a = Xy();
            0 == a.length || this.kh(a);
            a = uz(this);
            0 == a.length || (sg("yt-remote-lounge-token-expiration") ? vz(this, a) : wz(this))
        };
        f.ah = function() {
            var a = uz(this),
                b = Ga(a, function(a) {
                    return !!tw(this.b, a)
                }, this);
            qz(this, b);
            this.kh(Xy());
            this.u("managedScreenChange", a)
        };

        function xz(a, b) {
            return Ga(b, function(a) {
                return a.$a ? (a = ow(this.a, a.$a), !!a && "RUNNING" == a.status) : !0
            }, a)
        }
        f.kh = function(a) {
            var b = !1;
            B(a, function(a) {
                var c = uw(this.Ob, a.id);
                c && c.name != a.name && (this.log_("Renaming screen id " + c.id + " from " + c.name + " to " + a.name), c.name = a.name, b = !0)
            }, this);
            b && (this.log_("Renaming due to DIAL."), yz(this));
            Gw(lw(a));
            var c = !cb(this.a, a, nw);
            c && this.log_("Updating DIAL devices: " + hw(this.a) + " to " + hw(a));
            this.a = a;
            qz(this, this.b);
            c && this.u("onlineReceiverChange")
        };
        f.ds = function(a) {
            var b = ow(this.a, a.id);
            b && (this.log_("Updating DIAL device: " + b.id + "(" + b.name + ") from status: " + b.status + " to status: " + a.status + " and from activityId: " + b.activityId + " to activityId: " + a.activityId), b.activityId = a.activityId, b.status = a.status, Gw(lw(this.a)));
            qz(this, this.b)
        };

        function qz(a, b, c) {
            b = xz(a, b);
            var d = !cb(a.b, b, sw);
            if (d || c) c = pw(b), pg("yt-remote-online-screens", c, 60);
            d && (a.log_("Updating online screens: " + ew(a.b) + " -> " + ew(b)), a.b = b, a.u("onlineReceiverChange"))
        }

        function vz(a, b) {
            var c = [],
                d = {};
            B(b, function(a) {
                a.Db && (d[a.Db] = a, c.push(a.Db))
            });
            var e = {
                method: "POST",
                zj: {
                    lounge_token: c.join(",")
                },
                Aa: a,
                oc: function(a, b) {
                    var c = [];
                    B(b.screens || [], function(a) {
                        "online" == a.status && c.push(d[a.loungeToken])
                    });
                    var e = this.pj ? zz(this, this.pj) : null;
                    e && !tw(c, e) && c.push(e);
                    qz(this, c, !0)
                }
            };
            wi(tz("/api/lounge/pairing/get_screen_availability"), e)
        }

        function wz(a) {
            var b = uz(a),
                c = C(b, function(a) {
                    return a.Na
                });
            0 != c.length && (a.log_("Updating lounge tokens for: " + hb(c)), wi(tz("/api/lounge/pairing/get_lounge_token_batch"), {
                zj: {
                    screen_ids: c.join(",")
                },
                method: "POST",
                Aa: a,
                oc: function(a, c) {
                    Az(this, c.screens || []);
                    this.Ob = Ga(this.Ob, function(a) {
                        return !!a.Db
                    });
                    yz(this);
                    vz(this, b)
                }
            }))
        }

        function Az(a, b) {
            B(Ta(a.Ob, a.jh), function(a) {
                var d = Ka(b, function(b) {
                    return a.Na == b.screenId
                });
                d && (a.Db = d.loungeToken)
            })
        }

        function yz(a) {
            var b = qw(Ew());
            cb(a.Ob, b, sw) || (a.log_("Saving local screens: " + ew(b) + " to " + ew(a.Ob)), Dw(pw(a.Ob)), a.ah())
        }

        function Bz(a, b, c) {
            var d = La(b, function(a) {
                    return rw(c, a)
                }),
                e = 0 > d ? !0 : !1;
            0 > d ? b.push(c) : b[d] = c;
            tw(a.b, c) || a.b.push(c);
            return e
        }
        f.Lm = function(a, b, c) {
            var d = !1;
            b >= sz.length && (this.log_("Pairing DIAL device " + a + " with " + c + " timed out."), d = !0);
            var e = ow(this.a, a);
            if (!e) this.log_("Pairing DIAL device " + a + " with " + c + " failed: no device for " + a), d = !0;
            else if ("ERROR" == e.status || "STOPPED" == e.status) this.log_("Pairing DIAL device " + a + " with " + c + " failed: launch error on " + a), d = !0;
            d ? (Cz(this), this.u("screenPair", null)) : wi(tz("/api/lounge/pairing/get_screen"), {
                method: "POST",
                zj: {
                    pairing_code: c
                },
                Aa: this,
                oc: function(a, b) {
                    Cz(this);
                    var d = new cw(b.screen);
                    d.name = e.name;
                    d.$a = e.id;
                    var m = Bz(this, this.Ob, d);
                    this.log_("Paired with " + (m ? "a new" : "an old") + " local screen:" + dw(d));
                    yz(this);
                    this.u("screenPair", d);
                    this.log_("Pairing " + c + " succeeded.");
                    this.u("screenPair", d)
                },
                onError: function() {
                    this.log_("Polling pairing code: " + c);
                    P(this.ag);
                    this.ag = O(v(this.Lm, this, a, b + 1, c), sz[b])
                }
            })
        };

        function Dz(a, b, c, d, e) {
            Cz(a);
            ow(a.a, b) ? (c || (c = iw(), az(b, c, d, e)), a.ag = O(v(a.Lm, a, b, 0, c), sz[0])) : a.log_("No DIAL device with id: " + b)
        }

        function Cz(a) {
            P(a.ag);
            a.ag = NaN
        }

        function zz(a, b) {
            var c = uw(uz(a), b);
            a.log_("Found screen: " + dw(c) + " with key: " + b);
            return c
        }

        function Ez(a, b) {
            var c = uw(a.b, b);
            a.log_("Found online screen: " + dw(c) + " with key: " + b);
            return c
        }

        function Fz(a, b) {
            var c = ow(a.a, b);
            if (!c) {
                var d = uw(a.Ob, b);
                d && (c = ow(a.a, d.$a))
            }
            a.log_("Found DIAL: " + (c ? c.toString() : "null") + " with key: " + b);
            return c
        }

        function uz(a) {
            return Ta(a.jh, Ga(a.Ob, function(a) {
                return !tw(this.jh, a)
            }, a))
        }

        function Gz() {
            var a = Hz.getInstance().b,
                b = tz("/api/lounge/screens");
            wi(b, {
                method: "GET",
                Aa: a,
                oc: function(a, b) {
                    this.jh = C(yb(b), function(a) {
                        return new cw(a)
                    });
                    this.Ej();
                    this.ah();
                    this.u("accountScreenLoad")
                },
                onError: function() {}
            })
        };

        function Iz(a, b) {
            W.call(this);
            if (qg) {
                var c = qg;
                og(c, c.Oe.Tc(!0))
            }
            vw();
            $w("goog.net.BrowserChannel");
            this.b = new pz;
            c = xw();
            this.i = new fz("/api/lounge/bc", {
                device: "REMOTE_CONTROL",
                id: c,
                name: a,
                app: b
            });
            this.a = null;
            this.A = [];
            this.i.D("handlerOpened", this.Aq, this);
            this.i.D("handlerClosed", this.xq, this);
            this.i.D("handlerError", this.yq, this);
            this.i.D("handlerMessage", this.zq, this);
            this.b.D("managedScreenChange", this.ah, this);
            this.log_("Initializing with device id = " + c + ", name = " + a + ", app = " + b)
        }
        A(Iz, W);
        f = Iz.prototype;
        f.Nf = NaN;
        f.sj = NaN;
        f.Ah = NaN;
        f.Bh = NaN;
        f.log_ = function(a) {
            My("RC", a)
        };

        function Jz(a) {
            var b = yw();
            return b ? zz(a.b, b) : null
        }

        function Kz(a, b, c) {
            a.Q("connectionOpened", b, c);
            a.Q("connectionClosed", b, c);
            a.Q("connectionError", b, c)
        }

        function Lz(a, b) {
            "connectionError" == b && tg("yt-remote-session-screen-id");
            a.log_("Firing " + b);
            a.u(b, "connectionOpened" == b);
            a.o = null
        }

        function Mz(a, b) {
            "playerChange" == b ? (P(a.Ah), a.Ah = O(v(function() {
                this.u("playerChange");
                this.Ah = NaN
            }, a), 2E3)) : "playlistChange" == b && (P(a.Bh), a.Bh = O(v(function() {
                this.u("playlistChange");
                this.Bh = NaN
            }, a), 2E3))
        }

        function Nz(a, b) {
            "playerChange" == b && isNaN(a.Ah) && a.u("playerChange");
            "playlistChange" == b && isNaN(a.Bh) && a.u("playlistChange")
        }

        function Oz(a, b) {
            b ? (a.log_("Changing current screen id from: " + a.j + " to " + b.Na), a.j = b.Na, gz(a.i, b.Db)) : (a.log_("Removing current screen id: " + a.j), a.j = "", gz(a.i, ""))
        }

        function Pz(a) {
            return a.j ? zz(a.b, a.j) : null
        }
        f.connect = function(a) {
            this.log_("Connecting to the receiver: " + hb(a));
            var b = Ez(this.b, a.key);
            b ? Qz(this, b) : (a = Fz(this.b, a.key)) ? Rz(this, a) : O(v(function() {
                Lz(this, "connectionError")
            }, this), 0)
        };

        function Sz(a) {
            a = a || 0;
            5 >= a && (a = 0);
            return a
        }

        function Qz(a, b) {
            a.log_("Connecting to screen: " + dw(b));
            var c = Jz(a);
            c && !rw(b, c) ? a.disconnect() : Tz(a);
            a.a = null;
            Oz(a, b);
            c = {};
            if (a.g) {
                c.videoIds = Uz(a.g).join(",");
                c.videoId = a.g.a.getVideoData().K;
                c.videoSources = Vz(a.g).join(",");
                var d = a.o ? a.o.currentTime : a.g.a.getCurrentTime();
                c.currentTime = Sz(d)
            }
            Cb(c) ? a.log_("Connecting with empty params") : a.log_("Connecting with setPlaylist and params: " + hb(c));
            a.g ? Iw(a.g.a.getVideoData().K, Wz(a.g)) : Iw("", "");
            a.i.connect(Cb(c) ? {} : {
                    method: "setPlaylist",
                    params: hb(c)
                },
                1, Cw());
            a.a = new iz;
            Cb(c) || (a.a.b = c.videoIds.split(","), nz(a.a, c.videoId));
            Xz(a)
        }

        function Rz(a, b) {
            a.log_("Connecting to DIAL device: " + (b ? b.toString() : "null"));
            Yz(a);
            Zz(a);
            var c = a.o ? a.o.pairingCode : "";
            c ? Dz(a.b, b.id, c) : a.g ? Dz(a.b, b.id, "", a.g.a.getVideoData().K, a.g.a.getCurrentTime()) : Dz(a.b, b.id, "");
            a.k = b.id;
            a.b.D("screenPair", a.Hl, a)
        }
        f.Hl = function(a) {
            this.log_("Paired with a DIAL screen: " + dw(a));
            Yz(this);
            a ? Qz(this, a) : (this.k = "", Lz(this, "connectionError"))
        };
        f.disconnect = function() {
            this.log_("Disconnecting with user intent.");
            Zz(this);
            Jw();
            this.i.disconnect(1)
        };

        function Zz(a) {
            Cz(a.b);
            var b = Ka(a.A, function(a) {
                return "REMOTE_CONTROL" == a.type
            });
            b ? (a.log_("Did not stop DIAL device, because another remote is connected: " + hb(b ? {
                id: b.id,
                name: b.name,
                app: b.app,
                type: b.type,
                user: b.Um
            } : null)), a.k = "") : (b = Pz(a), a.k ? (a.log_("Stopping DIAL device: " + a.k), bz(a.k), a.k = "") : b && b.$a && (a.log_("Stopping DIAL device: " + b.$a), bz(b.$a)))
        }

        function Tz(a) {
            a.log_("Disconnecting from screen.");
            a.i.disconnect(2)
        }

        function $z(a, b) {
            var c = Pz(a),
                d = Ka(b, function(a) {
                    return c && (a.key == c.Na || a.key == c.$a) || this.k && (a = Fz(this.b, a.key)) && a.id == this.k ? !0 : !1
                }, a);
            a.log_("Found current receiver: " + hb(d) + " in " + hb(b));
            return d
        }

        function aA(a) {
            return bA(a) ? a.a : null
        }

        function cA(a, b, c) {
            c ? a.log_("Sending: action=" + b + ", params=" + hb(c)) : a.log_("Sending: action=" + b);
            dA(a) ? a.log_("Action = " + b + " was ignored due to reconnecting.") : a.i.sendMessage(b, c)
        }

        function eA(a, b, c, d) {
            d = Sz(d);
            a.a.add(b, !0) && cA(a, "insertVideo", {
                videoId: b,
                videoSource: c
            });
            lz(a.a, d);
            nz(a.a, b);
            Mz(a, "playlistChange");
            cA(a, "setVideo", {
                currentTime: d,
                videoId: b
            })
        }

        function fA(a, b, c, d, e) {
            e = Sz(e);
            cA(a, "setPlaylist", {
                videoIds: c.join(","),
                videoId: b,
                videoSources: C(c, function() {
                    return d
                }),
                currentTime: e
            });
            lz(a.a, e);
            oz(a.a, c, b);
            Mz(a, "playlistChange")
        }

        function gA(a) {
            var b = sg("yt-remote-session-video-id"),
                c = sg("yt-remote-session-list-id"),
                d = a.g.a.getVideoData().K,
                e = Wz(a.g);
            Iw(d, e);
            a.log_("Watch context changed: videoId from " + b + " to " + d + " listId from " + c + " to " + e);
            var g = !1,
                h = !1;
            d && d != b && (g = !0);
            e && e != c && (h = !0);
            g ? (b = Vz(a.g), c = a.g.a.Be(), b = b[c ? c.ga : 0], c = a.g.a.getCurrentTime(), h ? fA(a, d, Uz(a.g), b, c) : eA(a, d, b, c)) : h && (d = Uz(a.g), h = Vz(a.g), cA(a, "updatePlaylist", {
                videoIds: d.join(","),
                videoSources: h.join(",")
            }), oz(a.a, d), Mz(a, "playlistChange"))
        }

        function hA(a) {
            cA(a, "play");
            lz(a.a, mz(a.a)); - 1E3 != a.a.a && (a.a.a = 1);
            Mz(a, "playerChange")
        }
        f.um = function() {
            cA(this, "getNowPlaying")
        };

        function bA(a) {
            var b = a.i.a;
            return !!b && 3 == b.b && !!a.j && isNaN(a.Nf)
        }

        function Xz(a) {
            iA(a);
            a.Nf = O(v(function() {
                iA(this);
                Oz(this, null);
                this.k = "";
                this.a = null;
                this.log_("Connecting timeout");
                Lz(this, "connectionError");
                Jw();
                this.i.disconnect(1)
            }, a), 1E4)
        }

        function iA(a) {
            P(a.Nf);
            a.Nf = NaN
        }

        function jA(a) {
            P(a.sj);
            a.sj = NaN
        }

        function Yz(a) {
            a.b.Q("screenPair", a.Hl, a)
        }
        f.Aq = function() {
            this.log_("Channel opened");
            var a = this.j;
            pg("yt-remote-session-browser-channel", {
                firstTestResults: [""],
                secondTestResults: !this.i.a.Hg,
                sessionId: this.i.a.j,
                arrayId: this.i.a.Ce
            });
            pg("yt-remote-session-screen-id", a);
            var a = ww(),
                b = xw();
            E(a, b) || a.push(b);
            Aw(a);
            vw();
            this.g && (this.g.a.getVideoData().b && !Wz(this.g) ? this.log_("Wait for playlist data to be loaded.") : gA(this))
        };

        function kA(a) {
            Jw(!0);
            jA(a);
            a.b.pj = null;
            Oz(a, null);
            a.k = ""
        }
        f.xq = function() {
            this.log_("Channel closed");
            var a = !!this.j && isNaN(this.Nf);
            kA(this);
            a && Lz(this, "connectionClosed")
        };
        f.yq = function(a) {
            dA(this) ? this.log_("Channel error: " + a + " with reconnection in " + hz(this.i) + " ms") : this.log_("Channel error: " + a + " without reconnection");
            dA(this) || kA(this);
            iA(this);
            Lz(this, "connectionError")
        };

        function lA(a, b) {
            switch (b.action) {
                case "loungeStatus":
                    var c = fb(b.params.devices);
                    a.A = C(c, function(a) {
                        return new cz(a)
                    });
                    break;
                case "loungeScreenDisconnected":
                    Sa(a.A, function(a) {
                        return "LOUNGE_SCREEN" == a.type
                    });
                    break;
                case "remoteConnected":
                    var d = new cz(fb(b.params.device));
                    Ka(a.A, function(a) {
                        return a.equals(d)
                    }) || Pa(a.A, d);
                    break;
                case "remoteDisconnected":
                    d = new cz(fb(b.params.device)), Sa(a.A, function(a) {
                        return a.equals(d)
                    })
            }
        }

        function mA(a, b) {
            var c = !1;
            if ("loungeStatus" == b.action) c = !!Ka(a.A, function(a) {
                return "LOUNGE_SCREEN" == a.type
            });
            else if ("loungeScreenConnected" == b.action) c = !0;
            else if ("loungeScreenDisconnected" == b.action) c = !1;
            else return;
            c != bA(a) && (c ? (iA(a), Lz(a, "connectionOpened"), a.um()) : a.disconnect())
        }

        function dA(a) {
            return !isNaN(hz(a.i))
        }
        f.zq = function(a) {
            a.params ? this.log_("Received: action=" + a.action + ", params=" + hb(a.params)) : this.log_("Received: action=" + a.action);
            lA(this, a);
            mA(this, a);
            if (bA(this)) {
                var b = !1,
                    c = !1,
                    d, e, g, h, k, m, p;
                a.params && (d = a.params.videoId || a.params.video_id, e = a.params.videoIds || a.params.video_ids, g = a.params.state, h = a.params.currentTime || a.params.current_time, k = a.params.volume, m = a.params.muted, s(a.params.currentError) && (p = fb(a.params.currentError)));
                if ("onSubtitlesTrackChanged" == a.action) d == kz(this.a) && (delete a.params.videoId,
                    Cb(a.params) ? this.a.g = null : this.a.g = a.params, Nz(this, "playerChange"));
                else if (kz(this.a) || '"onStateChange"' != a.action) "playlistModified" != a.action && "nowPlayingPlaylist" != a.action || e ? (d || "nowPlaying" != a.action && "nowPlayingPlaylist" != a.action ? d ? d != kz(this.a) && (b = !0) : d = kz(this.a) : (nz(this.a, ""), b = !0), e && (e = e.split(","), oz(this.a, e, d) && (b = !0))) : (oz(this.a, []), b = !0), this.a.add(d) && cA(this, "getPlaylist"), d && nz(this.a, d), b && Nz(this, "playlistChange"), s(g) && (b = parseInt(g, 10), b = isNaN(b) ? -1 : b, -1 == b && -1E3 == this.a.a &&
                    (b = -1E3), c = c || b != this.a.a, this.a.a = b, d = null, -1E3 == b && (d = this.a.i || "unknown", p && (d = p.reason || d)), c = c || this.a.i != d, this.a.i = d, 1 == this.a.a ? (jA(this), this.sj = O(v(this.um, this), 2E4)) : jA(this)), "onError" != a.action || -1 != this.a.a && -1E3 != this.a.a || (a = fb(a.params.errors) || [], 1 == a.length && "PLAYER_ERROR" == a[0].error && a[0].videoId == kz(this.a) && (this.a.a = -1E3, this.a.i = a[0].reason || "unknown", c = !0)), h && (b = parseInt(h, 10), lz(this.a, isNaN(b) ? 0 : b), c = !0), s(k) && (b = parseInt(k, 10), isNaN(b) || (c = c || this.a.volume != b, this.a.volume =
                    b), s(m) && (m = "true" == m, c = c || this.a.muted != m, this.a.muted = m)), c && Nz(this, "playerChange")
            }
        };
        f.ah = function() {
            this.j && !Pz(this) ? (this.log_("Dropping current screen with id: " + this.j), this.disconnect(), this.a = null) : Jz(this) || Jw()
        };

        function Hz() {
            Iz.call(this, "Desktop", "youtube-desktop");
            Q(window, "unload", v(this.B, this));
            Q(window, "beforeunload", v(this.B, this))
        }
        A(Hz, Iz);
        ca(Hz);
        Hz.prototype.B = function() {
            Tz(this)
        };

        function nA(a, b) {
            this.a = a;
            this.a.D("onVolumeChange", this.Fg, this);
            this.a.D("onPlaylistUpdate", this.$k, this);
            this.i = NaN;
            this.b = b;
            this.b.D("playerChange", this.al, this);
            this.b.D("playlistChange", this.bl, this);
            this.k = 0;
            this.g = {};
            this.j = new Mp(this.Ep, 1E3, this);
            R(this, this.j);
            this.o = 0
        }
        A(nA, kf);
        f = nA.prototype;
        f.I = function() {
            oA(this);
            this.a.Q("onVolumeChange", this.Fg, this);
            this.a.Q("onPlaylistUpdate", this.$k, this);
            this.a = null;
            this.b.Q("playerChange", this.al, this);
            this.b.Q("playlistChange", this.bl, this);
            this.b = null
        };
        f.as = function(a, b) {
            aA(this.b) && (pA(this) ? this.Br.apply(this, arguments) : this.Cr.apply(this, arguments))
        };
        f.Cr = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    qA(this, this.a.a.getCurrentTime());
                    break;
                case "control_seek":
                    qA(this, c[0])
            }
        };
        f.Br = function(a, b) {
            var c = aA(this.b),
                d = Array.prototype.slice.call(arguments, 1);
            switch (a) {
                case "control_toggle_play_pause":
                    1 == c.a ? rA(this) : (hA(this.b), this.a.Ma(!0));
                    break;
                case "control_play":
                    hA(this.b);
                    this.a.Ma(!0);
                    break;
                case "control_pause":
                    rA(this);
                    break;
                case "control_seek":
                    this.o = d[0];
                    c = this.j;
                    c.Vd ? c.Xf = !0 : Np(c);
                    break;
                case "control_subtitles_set_track":
                    sA(this, d[0])
            }
        };

        function rA(a) {
            var b = a.b;
            cA(b, "pause");
            lz(b.a, mz(b.a)); - 1E3 != b.a.a && (b.a.a = 2);
            Mz(b, "playerChange");
            tA(a, mz(aA(a.b)));
            oA(a);
            a.a.Ma(!1)
        }
        f.Ep = function() {
            var a = this.o,
                b = aA(this.b);
            oA(this);
            tA(this, a); - 1 == b.a ? qA(this, a) : (b = this.b, cA(b, "seekTo", {
                newTime: a
            }), lz(b.a, a), -1E3 != b.a.a && (b.a.a = 3), Mz(b, "playerChange"))
        };

        function sA(a, b) {
            if (pA(a)) {
                var c = a.b,
                    d = a.a.a.getVideoData().K;
                b ? (c.a.g = {
                    trackName: b.name,
                    languageCode: b.languageCode,
                    sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                    languageName: b.languageName,
                    format: b.format,
                    kind: b.kind
                }, d = {
                    videoId: d
                }, Gb(d, c.a.g), cA(c, "setSubtitlesTrack", d)) : cA(c, "setSubtitlesTrack");
                Mz(c, "playerChange");
                a.g = aA(a.b).g
            }
        }

        function qA(a, b) {
            eA(a.b, a.a.a.getVideoData().K, "VI", b);
            var c = a.a;
            uA(c);
            vA(c.g)
        }
        f.Fg = function(a) {
            if (pA(this)) {
                var b = Math.round(a.volume),
                    c = this.b;
                a = !!a.muted;
                var d = {
                    volume: b,
                    muted: a
                }; - 1 != c.a.volume && (d.delta = b - c.a.volume);
                c.a.muted = a;
                c.a.volume = b;
                cA(c, "setVolume", d);
                Mz(c, "playerChange")
            }
        };
        f.$k = function() {
            gA(this.b)
        };
        f.al = function() {
            if (pA(this)) {
                var a = aA(this.b);
                oA(this);
                switch (a.a) {
                    case 1:
                        wA(this);
                        this.a.Ma(!0);
                        break;
                    case 3:
                        var b = this.a;
                        uA(b);
                        vA(b.g);
                        break;
                    case 0:
                        this.a.Ma(!1);
                        this.j.stop();
                        b = this.a.a;
                        (b = T(b.app, b.a || 1)) && b.of(!0);
                        tA(this, this.a.a.getVideoData().Ga);
                        break;
                    case 2:
                        this.a.Ma(!1);
                        tA(this, mz(a));
                        break;
                    case -1:
                        this.a.Ma(!1);
                        break;
                    case -1E3:
                        var b = this.a,
                            c = Ne("REMOTE_PLAYER_ERROR");
                        uA(b);
                        xA(b.g, c)
                }
                0 == this.k && (b = this.a.a, (b = T(b.app, b.a || 1)) && b.of(!1));
                this.k = a.a;
                yA(this);
                b = Math.round(this.a.a.Sk()); - 1 !=
                    a.volume && b != a.volume && (this.a.Q("onVolumeChange", this.Fg, this), this.a.a.Uk(a.volume), a.muted ? this.a.a.Tk() : this.a.a.Vk(), this.a.D("onVolumeChange", this.Fg, this))
            } else this.a.Ma(!1)
        };

        function yA(a) {
            var b = aA(a.b).g;
            if (!(b || a.g ? b && a.g && b.trackName == a.g.trackName && b.languageCode == a.g.languageCode && b.languageName == a.g.languageName && b.format == a.g.format && b.kind == a.g.kind : 1))
                if (a.g = b) {
                    var c = a.a.a.ii("captions", "tracklist", {
                            dt: 1
                        }),
                        c = Ka(c, function(a) {
                            return a.languageCode == b.languageCode && a.name == b.trackName
                        });
                    a.a.a.Xk("captions", "track", c)
                } else a.a.a.Yk("captions")
        }
        f.bl = function() {
            pA(this) || (tA(this, 0), oA(this), this.a.Ma(!1))
        };

        function pA(a) {
            var b = aA(a.b);
            return !!b && kz(b) == a.a.a.getVideoData().K
        }

        function wA(a) {
            oA(a);
            dA(a.b) || (tA(a, mz(aA(a.b))), a.i = O(v(function() {
                wA(this)
            }, a), 500))
        }

        function oA(a) {
            P(a.i);
            a.i = NaN
        }

        function tA(a, b) {
            var c = a.a.a.getVideoData().Ga;
            a.a.u("command_progress", b, b / c, void 0)
        };

        function zA() {
            ql.call(this, ["div", ["html5-bezel", "html5-center-overlay"],
                ["div", "{{icon}}"]
            ]);
            this.hide()
        }
        A(zA, ql);
        zA.prototype.hide = function() {
            zA.G.hide.call(this);
            AA(this)
        };
        zA.prototype.setIcon = function(a) {
            ol(this.template, "icon", a)
        };
        zA.prototype.show = function(a) {
            AA(this);
            a && this.setIcon(a);
            zA.G.show.call(this)
        };

        function AA(a) {
            P(NaN);
            Sk(a.element, "html5-bezel-fade")
        };

        function BA(a) {
            ql.call(this, ["div", "ytp-thumbnail"]);
            this.a = a
        }
        A(BA, ql);
        BA.prototype.show = function(a) {
            if (a || this.element.childNodes.length) {
                if (a) {
                    Hc(this.element);
                    var b = this.element,
                        c = this.a;
                    if (void 0 != Hl("backgroundSize")) d = document.createElement("div"), d.style.backgroundImage = "url(" + Ll(b, a, c) + ")";
                    else {
                        var d = document.createElement("img");
                        d.src = Ll(b, a, c);
                        a = d;
                        b.clientWidth / b.clientHeight < Kl ? (a.style.height = "100%", a.style.width = "auto") : (a.style.height = "auto", a.style.width = "100%")
                    }
                    Z(d, "video-thumbnail");
                    this.element.appendChild(d)
                }
                BA.G.show.call(this)
            }
        };

        function CA(a, b, c, d) {
            W.call(this);
            this.T = d;
            this.b = this.a = null;
            this.H = c;
            this.O = new Pl(Ne("REMOTE_PLAYER_RECONNECT_TIME"), ["formatted_time"]);
            this.B = new Pl(Ne("REMOTE_CONNECTED_STATUS"), ["receiver_name"]);
            this.F = new Pl(Ne("REMOTE_CONNECTING_STATUS"), ["receiver_name"]);
            this.L = new Pl(Ne("REMOTE_ERROR_STATUS"), ["receiver_name"]);
            this.j = this.F;
            this.g = this.A = this.k = this.i = null;
            this.J = "";
            this.o = null;
            this.k = K("ytp-remote-display-container", b);
            this.i = K("html5-remote-display-status-bar", b);
            DA(this);
            b = K("html5-remote-display-error",
                b);
            c = Fc("div");
            b.appendChild(c);
            Z(c, "html5-remote-display-error-icon");
            this.A = Fc("div");
            b.appendChild(this.A);
            this.g = new Bl(this.T, "ytp-button-remote-reconnect");
            this.g.ai(Ne("REMOTE_PLAYER_RECONNECT_BUTTON"));
            this.g.ub(b);
            this.J = Q(this.g, "click", v(this.u, this, "reconnectclicked"));
            this.o = new BA(a.a.N().Dc);
            this.o.ub(this.k);
            this.o.show(a.a.getVideoData());
            R(this, this.o);
            this.a = new zA;
            this.a.ub(this.k);
            this.a.hide();
            R(this, this.a);
            this.b = new Wq;
            Z(this.b.element, "html5-center-overlay");
            Z(this.b.element,
                "html5-center-transform");
            this.b.ub(this.k);
            this.b.show();
            R(this, this.b)
        }
        A(CA, W);
        CA.prototype.I = function() {
            Ve(this.J);
            this.i.innerHTML = "";
            CA.G.I.call(this);
            this.o = this.i = this.a = null
        };

        function EA(a) {
            a.j = a.F;
            DA(a);
            FA(a, !1);
            a.a.hide();
            a.b.show()
        }

        function vA(a) {
            a.j = a.B;
            DA(a);
            FA(a, !1);
            a.a.hide();
            a.b.show()
        }

        function xA(a, b) {
            a.j = a.L;
            DA(a);
            a.a.hide();
            a.b.hide();
            a.g.hide();
            a.A.innerHTML = b;
            FA(a, !0)
        }

        function FA(a, b) {
            Uk(a.k, "ytp-remote-error", b)
        }

        function GA(a, b) {
            xA(a, Tl(a.O, {
                formatted_time: Dl(b / 1E3)
            }));
            a.g.show()
        }

        function DA(a) {
            a.i && (a.i.innerHTML = Tl(a.j, {
                receiver_name: '<span class="mdx-receiver">' + a.H + "</span>"
            }, void 0, !0))
        };

        function HA(a) {
            W.call(this);
            this.k = this.g = "";
            this.j = null;
            this.i = a;
            this.a = this.b = null;
            IA(this, a)
        }
        A(HA, W);
        HA.prototype.I = function() {
            Ve(this.g);
            Ve(this.k)
        };

        function JA(a, b) {
            var c = "";
            B(b, function(a) {
                c += Tl(this.j, {
                    receiver_key: a.key,
                    receiver_name: a.name
                })
            }, a);
            a.a.innerHTML = c;
            Kp(Ep.getInstance(), a.i)
        }

        function KA(a, b) {
            var c = K("active", a.a);
            if (c) {
                if (M(c, "value") == b) return;
                Tk(c, ["active", "selected"])
            }(c = a.a.querySelector('[data-value="' + b + '"]')) && Rk(c, ["active", "selected"])
        }

        function IA(a, b) {
            a.b = Lp(Ep.getInstance(), b);
            var c = K("html5-remote-receiver-template", a.b);
            a.j = Sl(c, ["receiver_key", "receiver_name"]);
            a.a = K("html5-remote-receivers", a.b);
            a.a.innerHTML = "";
            a.g = Ye(a.b, v(a.o, a), "yt-uix-button-menu-item");
            a.k = Q(b, "click", v(function() {
                this.u("menushown")
            }, a))
        }
        HA.prototype.o = function(a) {
            (a = a.currentTarget) && "remote-select-receiver" == M(a, "action") && (a = M(a, "value"), KA(this, a), this.u("selectreceiver", a))
        };

        function LA(a) {
            ws.call(this, a);
            var b = Wf(this.a);
            this.F = a.R.L();
            this.k = {
                key: iw(),
                name: Ne("REMOTE_LOCAL_SCREEN")
            };
            this.g = this.j = null;
            this.b = MA(this);
            this.B = NaN;
            a = this.b;
            a.o = sg("yt-remote-delayed-connect-key");
            if (a.o) a.log_("Connecting with the delayed connect data: " + hb(a.o)), a.connect({
                key: a.o.key
            }), tg("yt-remote-delayed-connect-key");
            else {
                var c = Jz(a);
                c ? c.Na == a.j ? a.log_("Skipping connecting because current connection exists.") : (a.log_("Resuming MDx session: " + dw(c)), Oz(a, c), a.i.connect({}, 0, Cw()),
                    a.a = new iz, Xz(a)) : (Jw(), a.log_("Skipping connecting because no session screen found."))
            }
            this.A = new HA(K("html5-remote-button", b));
            this.A.D("selectreceiver", this.gi, this);
            R(this, this.A);
            this.i = this.k;
            this.mf()
        }
        A(LA, ws);
        var NA = ["play_pause", "seek"],
            OA = ["captions"];
        f = LA.prototype;
        f.ia = "remote";
        f.hg = "remote";
        f.fc = function() {
            return this.app.H.N().Yh
        };
        f.create = function() {
            LA.G.create.call(this);
            var a = this.b = MA(this),
                b = this.xl;
            Kz(a, b, this);
            a.D("connectionOpened", b, this);
            a.D("connectionClosed", b, this);
            a.D("connectionError", b, this);
            this.b.b.D("onlineReceiverChange", this.mf, this);
            this.b.b.D("connectToReceiver", this.gi, this);
            this.mf();
            this.i != this.k && 3 < this.a.app.B && this.load()
        };

        function PA(a) {
            a.b && (Kz(a.b, a.xl, a), a.b.b.Q("onlineReceiverChange", a.mf, a), a.b.b.Q("connectToReceiver", a.gi, a), a.b.g = null, a.b = null)
        }
        f.destroy = function() {
            var a = this.A;
            Jp(Ep.getInstance(), a.i);
            PA(this);
            LA.G.destroy.call(this)
        };
        f.load = function() {
            if (!this.ca) {
                LA.G.load.call(this);
                this.mf();
                var a = K("html5-remote-module", Wf(this.a));
                this.g = new CA(this, a, this.i.name, this.F);
                this.g.D("reconnectclicked", this.Pk, this);
                this.j = new nA(this, this.b);
                sA(this.j, this.a.ii("captions", "track"));
                this.a.ji();
                this.u("command_redirect_controls", this, NA, OA);
                var b = this.b.o ? this.b.o.currentTime : 0;
                0 != b && O(v(function() {
                    tA(this.j, b)
                }, this), 0);
                aA(this.b) && 0 != aA(this.b).b.length && this.a.qf();
                this.ca = !0
            }
        };
        f.unload = function() {
            this.ca && (this.ca = !1, QA(this, this.k), this.Ma(!1), gl(this), this.g.Q("reconnectclicked", this.Pk, this), uA(this), mf(this.j, this.g), this.g = this.j = null, LA.G.unload.call(this))
        };
        f.I = function() {
            PA(this);
            uA(this);
            mf(this.j, this.g);
            this.g = this.j = null;
            LA.G.I.call(this)
        };

        function Wz(a) {
            return a.a.Be() ? a.a.getVideoData().b : ""
        }

        function Uz(a) {
            var b = a.a.Be();
            if (b) {
                a = [];
                for (var c = 0; c < b.Ab; c++) a[c] = Kf(b, c).K;
                return a
            }
            return [a.a.getVideoData().K]
        }

        function Vz(a) {
            var b = Wz(a);
            if (b) {
                b = b.substr(0, 2);
                a = a.a.Be().Ab;
                for (var c = [], d = 0; d < a; d++) c[d] = b;
                b = c
            } else b = ["VI"];
            return b
        }

        function MA(a) {
            var b = Hz.getInstance();
            b.g = a;
            return b
        }
        f.xl = function() {
            uA(this);
            this.ca && dA(this.b) ? RA(this) : aA(this.b) ? this.load() : this.unload()
        };
        f.Pk = function() {
            var a = this.b;
            dA(a) && (a = a.i.b, a.ic && (a.stop(), a.start(), a.k()));
            EA(this.g)
        };
        f.ee = function(a, b) {
            this.j.as.apply(this.j, arguments)
        };
        f.gi = function(a) {
            if (this.i.key != a)
                if (this.k.key == a) {
                    var b = aA(this.b);
                    a = !!b && 1 == b.a && kz(b) == this.a.getVideoData().K;
                    b = b ? mz(b) : 0;
                    this.i = this.k;
                    this.b.disconnect();
                    this.unload();
                    a && (this.a.Eg(b), this.a.qf())
                } else if (a = jw(Kw(), a)) QA(this, a), this.b.connect(a), this.load()
        };

        function QA(a, b) {
            (a.i || b ? a.i && b && a.i.key == b.key : 1) || (a.i = b, KA(a.A, b.key))
        }
        f.mf = function() {
            var a = Kw();
            this.b && (this.i = $z(this.b, a) || this.k);
            a.unshift(this.k);
            JA(this.A, a);
            KA(this.A, this.i.key);
            this.g && (a = this.g, a.H = this.i.name, DA(a))
        };

        function RA(a) {
            uA(a);
            dA(a.b) ? (GA(a.g, hz(a.b.i)), a.B = O(v(function() {
                RA(this)
            }, a), 1E3)) : EA(a.g)
        }

        function uA(a) {
            P(a.B);
            a.B = NaN
        }
        f.Ma = function(a) {
            uA(this);
            var b = this.g;
            b.j = b.B;
            DA(b);
            FA(b, !1);
            b.b.hide();
            b.a.show();
            b.a.setIcon(a ? "html5-bezel-pause" : "html5-bezel-play");
            LA.G.Ma.call(this, a)
        };

        function SA() {
            ql.call(this, ["div", "html5-video-info-panel", ["span", "html5-video-info-panel-close", {
                    role: "button",
                    title: "close"
                }, "[x]"],
                ["div", "html5-video-info-panel-content", ["table", "html5-video-info-table", ["tr", "", ["th", "", "Video ID:"],
                            ["td", "", "{{video_id}}"]
                        ],
                        ["tr", "", ["th", "", "Dimensions:"],
                            ["td", "", "{{dimensions}}"]
                        ],
                        ["tr", "", ["th", "", "Resolution:"],
                            ["td", "", "{{resolution}}"]
                        ],
                        ["tr", "", ["th", "", "Volume:"],
                            ["td", "", "{{volume}}"]
                        ],
                        ["tr", "", ["th", "", "Stream Type:"],
                            ["td", "", "{{stream_type}}"]
                        ],
                        ["tr", "", ["th", "", "Mime Type:"],
                            ["td", "", "{{mime}}"]
                        ],
                        ["tr", "", ["th", "", "DASH:"],
                            ["td", "", "{{dash}}"]
                        ],
                        ["tr", "", ["th", "", "DRM:"],
                            ["td", "", "{{drm}}"]
                        ]
                    ],
                    ["table", ["html5-video-info-table", "html5-video-element-info-table"],
                        ["tr", "", ["th", "", "Decoded Frames"],
                            ["th", "", "Dropped Frames"],
                            ["th", "", "Parsed Frames"],
                            ["th", "", "Presented Frames"]
                        ],
                        ["tr", "", ["td", "", "{{decoded_frames}}"],
                            ["td", "", "{{dropped_frames}}"],
                            ["td", "", "{{parsed_frames}}"],
                            ["td", "", "{{presented_frames}}"]
                        ],
                        ["tr", "", ["th", "", "Video Bytes Decoded"],
                            ["th", "", "Audio Bytes Decoded"],
                            ["th", "", "Painted Frames"],
                            ["th", "", "Paint Delay"]
                        ],
                        ["tr", "", ["td", "", "{{video_bytes_decoded}}"],
                            ["td", "", "{{audio_bytes_decoded}}"],
                            ["td", "", "{{painted_frames}}"],
                            ["td", "", "{{paint_delay}}"]
                        ]
                    ]
                ]
            ]);
            this.a = this.template.b["html5-video-info-panel-close"]
        }
        A(SA, ql);
        SA.prototype.update = function(a) {
            a.dimensions = a.video_element_width + " x " + a.video_element_height;
            a.resolution = a.video_width + " x " + a.video_height;
            a.volume += "%";
            a.drm = a.drm_flavor + " / " + a.drm_key_system;
            this.template.update(a)
        };
        SA.prototype.I = function() {
            this.a = null;
            SA.G.I.call(this)
        };

        function TA(a) {
            W.call(this);
            this.app = a;
            this.A = this.o = this.a = this.j = this.i = this.b = this.Va = null;
            this.H = this.J = 0;
            this.k = null;
            a = a.N();
            this.B = Pi(document.location.toString()) || "blazer" == a.Ea;
            this.F = 0;
            this.g = null;
            this.app.D("videodatachange", this.uo, this)
        }
        A(TA, W);
        var UA = null;

        function VA(a, b) {
            UA = b.cloneNode(!0);
            a.b = b;
            a.b.setAttribute("id", a.app.L.attrs.id);
            var c = J(a.Va);
            c != a.b && c.appendChild(a.b);
            (c = J("html5-player-messages")) && B(c.children, function(a) {
                try {
                    var b = JSON.parse(a.innerHTML);
                    Me(a.id, b)
                } catch (c) {
                    Me(a.id, a.innerHTML)
                }
            })
        }
        f = TA.prototype;
        f.addClass = function(a) {
            Rk(this.b, arguments)
        };
        f.uj = function(a) {
            this.a = a;
            this.a.parentNode || this.i.appendChild(this.a);
            Z(this.a, "video-stream");
            Z(this.a, "html5-main-video");
            a = this.app.N();
            a.Ec && a.hf && this.a.setAttribute("controls", !0);
            a.vg && this.a.setAttribute("webkit-playsinline", !0);
            this.a.setAttribute("x-webkit-airplay", "allow")
        };
        f.fi = function() {
            this.j && sb(this.kd(), this.j) || WA(this)
        };

        function WA(a) {
            if (a.a) {
                var b = a.kd();
                if (!b.isEmpty()) {
                    var c = XA(a),
                        d = a.kd(),
                        e = 1,
                        g = YA(a);
                    if (g) {
                        var h = ZA(a, d, c, g, !1),
                            e = h.width / h.height / (c.width / c.height);
                        dd(a.a, h.width / e, h.height);
                        Xc(a.a, h.left + h.width / 2 * (1 - 1 / e), h.top)
                    } else dd(a.a, d), Xc(a.a, 0, 0);
                    c = ZA(a, d, c, g, !0);
                    dd(a.o, c.width, c.height);
                    Xc(a.o, c.left, c.top);
                    Il(a.a, "transform", 1 == e ? "none" : "scaleX(" + e + ")");
                    a.j && sb(b, a.j) || (a.j = b);
                    a.u("resize")
                }
            }
        }
        f.uo = function(a, b) {
            this.a.setAttribute("data-youtube-id", b.K);
            Ih && (b.title ? this.a.setAttribute("title", b.title) : this.a.removeAttribute("title"));
            var c = Dk(b, "yt:bgcolor");
            this.i.style.backgroundColor = c ? c : "";
            this.J = Jj(Dk(b, "yt:stretch"));
            this.H = Jj(Dk(b, "yt:crop"))
        };
        f.pk = function() {};
        f.kd = function() {
            return this.i ? new G(this.i.clientWidth, this.i.clientHeight) : new G(0, 0)
        };

        function XA(a) {
            return a.a ? new G(a.a.videoWidth, a.a.videoHeight) : new G(0, 0)
        }

        function ZA(a, b, c, d, e) {
            c.isEmpty() ? e = b : d ? (c = new G(a.J || c.width / c.height, 1), a = new G(a.H || c.width / c.height, 1), tb(a, c), d = a.width / a.height > b.width / b.height ? b.width / a.width : b.height / a.height, e = e ? a.scale(d) : c.scale(d)) : e = tb(c.clone(), b);
            return new ub((b.width - e.width) / 2, (b.height - e.height) / 2, e.width, e.height)
        }

        function YA(a) {
            return !a.app.N().Ec && !XA(a).isEmpty()
        }
        f.Ak = function() {};
        f.gn = function() {
            var a = T(this.app),
                b = this.app.getVideoData(),
                c = this.app.Ok(),
                d = this.a,
                c = {
                    video_id: b.K,
                    video_width: d.videoWidth,
                    video_height: d.videoHeight,
                    video_element_width: d.clientWidth,
                    video_element_height: d.clientHeight,
                    dash: "no",
                    mime: "",
                    drm_flavor: "",
                    drm_key_system: "",
                    volume: Math.round(this.app.na.volume),
                    stream_type: this.app.N().protocol,
                    decoded_frames: c.hmewdfc || c.hmemdf || "-",
                    dropped_frames: c.hmewdrop || "-",
                    parsed_frames: c.hmempf || "-",
                    presented_frames: c.hmempresented || "-",
                    video_bytes_decoded: c.hmewvdbc ||
                        "-",
                    audio_bytes_decoded: c.hmewadbc || "-",
                    painted_frames: c.hmempainted || "-",
                    paint_delay: c.hmempaintdelay || "-"
                };
            b.a && (c.dash = b.a.j && b.a.a ? "no" : "yes", c.mime = b.a.Pa);
            if (a = a.F ? a.F.g : null) c.drm_flavor = a.b, c.drm_key_system = a.a;
            this.g.update(c)
        };
        f.Zh = function(a) {
            a && a.stopPropagation();
            this.g && (Ke(this.F), this.g.hide())
        };
        f.I = function() {
            this.k && (this.B ? Ve(this.k) : Ke(this.k));
            this.Zh();
            this.g && Ze(this.g.a);
            Ic(this.b);
            this.A = this.o = this.a = this.i = this.b = this.Va = null;
            TA.G.I.call(this)
        };

        function $A(a) {
            TA.call(this, a);
            this.B = !0
        }
        A($A, TA);
        $A.prototype.kd = function() {
            return new G(window.innerWidth, window.innerHeight)
        };
        $A.prototype.uj = function(a) {
            if (!a.parentNode) {
                var b = this.i;
                b.insertBefore(a, b.childNodes[0] || null)
            }
            $A.G.uj.call(this, a)
        };

        function aB() {
            this.a = [];
            this.b = []
        }
        ca(aB);
        var Al = q("yt.player.utils.VideoTagPool.instance_") || aB.getInstance();
        z("yt.player.utils.VideoTagPool.instance_", Al);
        f = aB.prototype;
        f.Ss = function(a) {
            if (!(this.a.length >= a)) {
                a -= this.a.length;
                for (var b = 0; b < a; b++) {
                    var c = bB(this);
                    this.a.push(c)
                }
            }
        };

        function bB(a) {
            var b = document.createElement("video");
            x(b, Nh);
            Q(b, "loadeddata", v(b.yr, b));
            Q(b, "volumechange", v(b.zr, b));
            Q(b, "timeupdate", v(b.Tm, b));
            yh && 6 <= Dh && Q(b, "webkitbeginfullscreen", v(b.play, b));
            Oh(b);
            if (a.b.length) {
                var c = a.b[0],
                    d = c.muted;
                b.volume = 100 * c.volume / 100;
                b.muted = d
            }
            a.b.push(b);
            Q(b, "volumechange", v(a.Ar, a));
            return b
        }
        f.Ar = function(a) {
            a = a.target;
            var b = a.volume,
                c = a.muted;
            B(this.a, function(a) {
                a.volume = b;
                a.muted = c
            })
        };
        f.$s = function() {
            return this.a.length ? this.a.pop() : bB(this)
        };
        f.Xs = function(a) {
            a && E(this.b, a) && (Uh(a), Ze(a), Qa(this.b, a))
        };
        f.Us = function(a) {
            return this.a.length >= (a || 1)
        };
        aB.prototype.fillPool = aB.prototype.Ss;
        aB.prototype.getTag = aB.prototype.$s;
        aB.prototype.releaseTag = aB.prototype.Xs;
        aB.prototype.hasTags = aB.prototype.Us;

        function cB(a, b) {
            Cl.call(this, a, b);
            this.k = null;
            this.C = this.A = this.i = this.b = 0;
            Z(this.element, "ytp-tv-static");
            dB(this, a, b)
        }
        A(cB, Cl);

        function eB(a) {
            for (var b = Math.floor(0.6 * a), c = b; c < a; ++c) {
                for (var d = !1, e = 2; e < Math.sqrt(c); e++) {
                    if (!(c % e)) {
                        d = !1;
                        break
                    }
                    d = !0
                }
                if (d) return c
            }
            return b
        }

        function dB(a, b, c) {
            if (b && c) {
                a.width = a.element.width = b;
                a.height = a.element.height = c;
                var d = document.createElement("canvas");
                d.width = b;
                d.height = c;
                for (var e = d.getContext("2d"), g = e.getImageData(0, 0, b, c), h = b * c, k = 0; k < h; k++) {
                    var m = 4 * k;
                    g.data[m] = g.data[m + 1] = g.data[m + 2] = Math.floor(35 * Math.random());
                    g.data[m + 3] = 255
                }
                e.putImageData(g, 0, 0);
                a.k = d;
                a.A = eB(b);
                a.C = eB(c / 10);
                a.Aa.scale(1.5, 1.5)
            }
        }
        cB.prototype.show = function() {
            cB.G.show.call(this);
            var a = this.F;
            this.j = new Date;
            this.g(a, 75)
        };
        cB.prototype.F = function() {
            var a = 1 - 1 / 1.5;
            this.b = (this.b + this.A) % (this.width * a);
            this.i = (this.i + this.C) % (this.height * a);
            this.Aa.drawImage(this.k, -1 * this.b, -1 * this.i)
        };
        cB.prototype.hide = function() {
            P(this.a);
            cB.G.hide.call(this)
        };

        function fB() {
            ql.call(this, ["div", ["ytp-error", "html5-stop-propagation"],
                ["div", "ytp-error-content", ["div", "ytp-error-content-wrap", "{{content}}"]]
            ]);
            this.b = [];
            if (void 0 == Cj) {
                var a = document.createElement("canvas");
                Cj = !(!a.getContext || !a.getContext("2d"))
            }
            Cj && (this.a = new cB(1, 1), this.a.ub(this.element, 0), R(this, this.a))
        }
        A(fB, ql);
        fB.prototype.show = function() {
            var a = this.element;
            a && (a.style.display = "table");
            this.a && dB(this.a, this.element.clientWidth, this.element.clientHeight);
            this.a && this.a.show()
        };
        fB.prototype.hide = function() {
            fB.G.hide.call(this);
            this.a && this.a.hide()
        };
        fB.prototype.I = function() {
            Ve(this.b);
            this.b = [];
            fB.G.I.call(this)
        };

        function Ef(a, b, c, d) {
            "string" == typeof a && (a = {
                mediaContentUrl: a
            });
            var e = a,
                g = /\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);
            e.video_id = g && g[2] ? g[2] : null;
            return Bf(a, b, c, d)
        }

        function Bf(a, b, c, d) {
            b = {
                endSeconds: void 0,
                list: b,
                mediaContentUrl: void 0,
                startSeconds: c,
                suggestedQuality: d,
                video_id: a
            };
            if (ia(a)) {
                for (var e in b) b[e] = b[e] || a[e];
                b.video_id = a.video_id || a.videoId
            }
            return b
        };

        function gB() {
            this.a = {};
            this.i = this.j = NaN;
            this.B = 0;
            this.A = !0
        }
        var hB = {
            "-1": "N",
            3: "B",
            0: "EN",
            2: "PA",
            1: "PL"
        };

        function ou(a) {
            return (y() - a.B) / 1E3
        }
        gB.prototype.k = function() {
            var a = {},
                b;
            for (b in this.a) 0 < this.a[b].length && (a[b] = this.a[b].join(","), this.a[b] = []);
            if (!Cb(a)) {
                var c = {},
                    d = ou(this);
                if (!isNaN(d)) {
                    d = d.toFixed(3);
                    if (this.o) {
                        var e = this.o.g,
                            g = this.o.i;
                        0 < e && (a.bwm = d + ":" + e + ":" + g.toFixed(3));
                        e = this.o;
                        e.i = 0;
                        e.g = 0
                    }
                    e = Ps(this.g);
                    "hmewdrop" in e && (a.df = d + ":" + e.hmewdrop)
                }
                c.event = "streamingstats";
                this.b.a && (c.fmt = this.b.a.Fa);
                c.cpn = this.b.wa;
                c.ei = this.b.o;
                c.docid = this.b.K;
                c.ns = this.g.tb;
                this.g.b && (c.adformat = this.g.b);
                this.b.Eb && (c.live = this.b.Sa ? "dvr" :
                    "live");
                c.html5 = "1";
                c = U(Ks(this.g) + "stream_204", c);
                for (b in a) c += "&" + b + "=" + a[b];
                jf(c);
                iB(this)
            }
            jB(this)
        };

        function kB(a) {
            lB(a);
            mB(a);
            for (var b in a.a) a.a[b] = []
        }
        gB.prototype.onError = function(a) {
            var b = ou(this);
            isNaN(b) || this.a.error.push(b.toFixed(3) + ":" + a + ":" + this.b.Id.toFixed(3))
        };

        function jB(a) {
            lB(a);
            a.j = Je(v(a.k, a), 1E4)
        }

        function lB(a) {
            isNaN(a.j) || (Ke(a.j), a.j = NaN)
        }

        function iB(a) {
            mB(a);
            a.i = Je(v(a.F, a), 3E4)
        }

        function mB(a) {
            isNaN(a.i) || (Ke(a.i), a.i = NaN)
        }

        function pu(a, b, c) {
            void 0 != c && (a.a.vps.push(b.toFixed(3) + ":" + c), a.C = c)
        }
        gB.prototype.F = function() {
            if ("PL" == this.C) {
                var a = ou(this);
                isNaN(a) || (pu(this, a, this.C), this.k())
            }
        };

        function nB(a, b, c, d) {
            c = c || "";
            this.k = [];
            this.o = [];
            this.J = [];
            this.H = "watchtime" == c;
            this.ed = Ks(b) + "api/stats/" + c;
            d && (this.fk = d.fs, this.Ua = d.nbe, this.ea = d.bc, this.fa = d.bd, this.Wb = d.bt, d.rtn && (this.C = d.rtn), this.H ? (this.qb = d.state, 0 < d.rti && (this.A = d.rti)) : (this.oa = d.mos, this.ya = d.volume, d.at && (this.O = d.at), d.allowed && (this.U = d.allowed), d.ex_ads && (this.ja = d.ex_ads)));
            this.L = b.b;
            this.qg = b.ob;
            this.ha = b.k;
            this.Xb = b.C;
            this.Vb = b.A;
            this.Zb = b.B;
            this.Qb = b.cf;
            this.Sb = b.oe;
            this.Ub = b.F;
            this.Yb = b.H;
            this.Tb = b.J;
            this.Rb =
                b.L;
            this.$b = b.O;
            this.g = b.g;
            this.yc = b.V;
            this.J = b.i;
            this.da = b.da;
            this.Ac = b.j;
            this.hk = b.tb;
            this.Xc = b.Ea;
            this.referrer = b.referrer;
            this.Zc = b.U;
            this.F = b.o;
            this.$c = b.ja;
            this.Ca = b.oa;
            this.Ia = b.za;
            this.qe = Qs(b);
            !a.a || a.ka.isEmpty();
            this.qg = a.ne || this.qg;
            this.cb = a.wa;
            this.pb = a.Id;
            this.ka = a.O;
            this.nb = a.Ia;
            this.a = a.a;
            this.gk = a.Yc;
            this.xc = a.af;
            a.Eb && (this.za = a.Sa ? "dvr" : "live");
            this.dd = a.mg;
            this.Bc = a.Bc;
            this.j = a.j;
            this.zc = a.o;
            this.b = a.b;
            this.F = a.ha || this.F;
            this.Da = a.oa;
            this.i = a.i;
            this.K = a.K
        }
        f = nB.prototype;
        f.qg = !1;
        f.Ph = !1;
        f.kk = !1;
        f.fk = !1;
        f.ef = !1;
        f.gk = !1;
        f.hk = "yt";
        f.wn = !1;
        f.send = function() {
            if (!this.wn) {
                var a = this.Oj(),
                    a = U(this.ed, a);
                jf(a);
                this.wn = !0
            }
        };
        f.Oj = function() {
            var a = {
                ns: this.hk,
                el: this.yc,
                hl: this.Ac,
                cr: this.Zc,
                cpn: this.cb,
                docid: this.K,
                ver: 2,
                referrer: this.referrer,
                cmt: this.Md(this.pb),
                plid: this.j,
                ei: this.zc,
                fmt: this.a ? this.a.Fa : 0,
                fs: this.fk ? "1" : "0",
                rt: this.Md(this.T),
                c: this.Qb,
                cver: this.Sb,
                subscribed: this.i,
                lact: this.qe,
                cplatform: this.$b,
                cbrand: this.Xb,
                cmodel: this.Ub,
                cnetwork: this.Yb,
                cbr: this.Vb,
                cbrver: this.Zb,
                cos: this.Tb,
                cosver: this.Rb,
                q: this.$c
            };
            this.qg && (a.autoplay = "1");
            this.kk && (a["final"] = "1");
            this.gk && (a.splay = "1");
            this.Kh && (a.ssrt =
                "1");
            this.ka && (a.delay = this.ka);
            this.L && (a.adformat = this.L);
            this.ha && (a.content_v = this.ha);
            void 0 != this.Ca && this.Ia && (a.uga = this.Ia + this.Ca);
            void 0 != this.B && (a.len = this.Md(this.B));
            !this.H && 0 < this.J.length && (a.fexp = this.J.toString());
            void 0 != this.oa && (a.mos = this.oa);
            void 0 != this.ya && (a.volume = this.ya);
            void 0 != this.qb && (a.state = this.qb);
            void 0 != this.C && (a.rtn = this.Md(this.C));
            this.F && (a.feature = this.F);
            this.b && (a.list = this.b);
            this.Da && (a.ytr = this.Da);
            this.H ? (a.idpj = this.xc, a.ldpj = this.dd, void 0 != this.A &&
                (a.rti = this.Md(this.A))) : (void 0 != this.O && (a.at = this.O), void 0 != this.U && (a.allowed = this.U), void 0 != this.ja && (a.ex_ads = this.ja));
            void 0 != this.za && (a.live = this.za);
            this.da || (a.ps = this.Xc, a.sw = this.nb, this.ea && (a.bc = this.ea), this.fa && (a.bd = this.fa, a.bt = this.Wb), 0 < this.Ua && (a.nbe = this.Ua));
            !this.ef && 0 < this.k.length && (a.st = this.k.map(this.Md).join(","), a.et = this.o.map(this.Md).join(","));
            return a
        };
        f.Md = function(a) {
            return (1 * a.toFixed(3)).toString()
        };

        function oB(a, b, c, d) {
            this.k = [];
            this.o = [];
            this.F = [];
            this.ek = b.Ih;
            c && (this.da = c.nbe, this.Ua = c.bc, this.ea = c.bd, this.zc = c.bt, this.Xj = c.fs, this.Yj = c.mos, this.Kh = c.ssrt, this.source = c.sourceid, this.cb = c.sd, this.Sj = c.hmewadbc, this.Ia = c.hmewdfc, this.En = c.hmewdrop, this.Fn = c.hmewvdbc, this.Xc = c.hmemdf, this.Zc = c.hmempaintdelay, this.$c = c.hmempainted, this.za = c.hmempf, this.ed = c.hmempresented, this.Lh = c.volume);
            this.Mh = b.Mh;
            this.pg = b.ob;
            this.fa = b.k;
            this.Vb = b.C;
            this.Zb = b.A;
            this.Qb = b.B;
            this.Sb = b.cf;
            this.Ub = b.oe;
            this.Yb =
                b.F;
            this.Tb = b.H;
            this.Rb = b.J;
            this.$b = b.L;
            this.Wb = b.O;
            this.g = b.g;
            this.xc = b.V;
            this.F = b.i;
            this.Ac = b.T;
            this.dd = b.j;
            this.$j = b.tb;
            this.bf = b.bf ? "1" : void 0;
            this.L = Ns(b);
            this.qe = b.Ea;
            this.referrer = Os(b);
            this.Tj = b.U;
            this.H = b.o;
            this.O = new G(window.screen.width, window.screen.height);
            this.Uj = b.ja;
            this.qb = b.oa;
            this.ya = b.za;
            this.Qj = Qs(b);
            this.U = Sr(b);
            this.Ca = b.nb;
            this.Rj = b.ya;
            !a.a || a.ka.isEmpty();
            this.pg = a.ne || this.pg;
            this.pb = a.wa;
            this.nb = a.Ac;
            this.ha = a.O;
            this.Xb = a.Ia;
            this.a = a.a;
            this.Zj = a.Yc;
            this.ka = a.af;
            a.Eb && (this.ja =
                a.Sa ? "dvr" : "live");
            this.oa = a.mg;
            this.Bc = a.Bc;
            this.j = a.j;
            this.yc = a.o;
            this.b = a.b;
            this.Ih = a.cb;
            this.H = a.ha || this.H;
            this.Wj = a.oa;
            this.ak = a.Jh;
            this.i = a.i;
            this.Vj = a.Wb;
            this.K = a.K;
            this.Da = a.ka;
            this.J = d || []
        }
        f = oB.prototype;
        f.pg = !1;
        f.Ph = !1;
        f.Xj = !1;
        f.ef = !1;
        f.Yj = !1;
        f.Zj = !1;
        f.Kh = !1;
        f.$j = "yt";
        f.ak = !1;
        f.yn = !1;
        f.send = function() {
            if (!this.yn) {
                var a = this.Oj(),
                    a = U(this.ek, a);
                jf(a);
                this.yn = !0
            }
        };
        f.Oj = function() {
            var a = {
                html5: "1",
                ns: this.$j,
                ps: this.qe,
                el: this.xc,
                hl: this.dd,
                cr: this.Tj,
                c: this.Sb,
                cpn: this.pb,
                docid: this.K,
                sd: this.cb,
                sourceid: this.source,
                referrer: this.referrer,
                q: this.Uj,
                plid: this.j,
                ei: this.yc,
                fmt: this.a ? this.a.Fa : 0,
                fs: this.Xj ? "1" : "0",
                screenw: this.O.width,
                screenh: this.O.height,
                w: this.U.width,
                h: this.U.height,
                vw: this.Da.width,
                vh: this.Da.height,
                playerw: this.L.width,
                playerh: this.L.height,
                vid: this.Rj,
                rt: this.tg(this.T),
                mos: this.Yj,
                volume: this.Lh,
                app: this.Mh,
                csipt: this.nb,
                on3g: this.bf,
                partnerid: this.Bc,
                sdetail: this.Ih,
                subscribed: this.i,
                sw: this.Xb,
                list: this.b,
                eurl: this.g,
                framer: this.Ac,
                feature: this.H,
                ytr: this.Wj,
                threed: this.Vj,
                lact: this.Qj,
                cver: this.Ub,
                cplatform: this.Wb,
                cbrand: this.Vb,
                cmodel: this.Yb,
                cnetwork: this.Tb,
                cbr: this.Zb,
                cbrver: this.Qb,
                cos: this.Rb,
                cosver: this.$b
            };
            this.ef && (a.playback = "1");
            this.pg && (a.autoplay = "1");
            this.Zj && (a.splay = "1");
            this.Kh && (a.ssrt = "1");
            this.ha && (a.delay = this.ha);
            this.ak && !this.ef && (a.vtmp = "1");
            this.Ph && (a.tv = "1");
            this.fa && (a.content_v = this.fa);
            void 0 !=
                this.qb && this.ya && (a.uga = this.ya + this.qb);
            void 0 != this.B && (a.len = this.tg(this.B));
            0 < this.F.length && (a.fexp = this.F.toString());
            0 < this.ka && (a.idpj = this.ka);
            0 < this.oa && (a.ldpj = this.oa);
            void 0 != this.Ca && (a.attrib = this.Ca);
            void 0 != this.ja && (a.live = this.ja);
            this.Ua && (a.bc = this.Ua);
            this.ea && (a.bd = this.ea, a.bt = this.zc);
            0 < this.da && (a.nbe = this.da);
            void 0 != this.Ia && (a.hmewdfc = this.Ia, a.hmewdrop = this.En, a.hmewvdbc = this.Fn, a.hmewadbc = this.Sj);
            void 0 != this.za && (a.hmempf = this.za, a.hmemdf = this.Xc, a.hmempresented =
                this.ed, a.hmempainted = this.$c, a.hmempaintdelay = this.Zc);
            0 < this.k.length && (a.st = this.k.map(this.tg).join(","), a.et = this.o.map(this.tg).join(","));
            for (var b = 0; b < this.J.length; b++) wb(Wv(this.J[b]), function(b, d) {
                d in a || (a[d] = b)
            });
            return a
        };
        f.tg = function(a) {
            return (1 * a.toFixed(3)).toString()
        };

        function pB() {
            this.o = [];
            this.k = [];
            this.C = [10, 10, 10, 40];
            this.j = new gB;
            this.B = "paused";
            this.g = this.H = 0;
            this.L = !1
        }
        A(pB, kf);
        f = pB.prototype;
        f.Jd = NaN;
        f.Fj = 0;
        f.km = 0;
        f.ni = null;
        f.Wk = null;
        f.Qk = function() {
            return []
        };
        f.ue = null;
        f.Ck = "";
        f.dc = 0;
        f.Jm = 0;
        f.Gm = !1;
        f.Vh = 0;
        f.ye = 0;
        f.Wf = 0;
        f.lf = 0;

        function qB(a) {
            var b = a.Wk();
            a.ni && x(b, a.ni());
            return b
        }
        f.Th = function(a) {
            this.Fj = Math.min(this.Fj + 1, this.C.length - 1);
            var b = this.C[this.Fj];
            this.H = this.g;
            a && (this.g = (y() - this.ye) / 1E3);
            this.g += b;
            a = tu(this, "watchtime");
            a.C = this.g;
            a.A = this.H;
            rB(this);
            wu(this, a);
            uu(this);
            this.Jd = Je(v(this.Th, this), 1E3 * b)
        };

        function uu(a) {
            isNaN(a.Jd) || (Ke(a.Jd), a.Jd = NaN)
        }
        f.no = function() {
            var a = this.ue(),
                b = (y() - this.ye) / 1E3,
                c = a - this.dc;
            if (0 != c) {
                var d = b - this.Vh;
                if (0 > c || c > d + 0.2) rB(this), this.lf = a;
                this.Vh = b
            }
            this.dc = a
        };

        function rB(a) {
            if (400 < a.km) uu(a);
            else if (3 < a.dc - a.lf || a.b.ea) a.o[a.Wf] = a.lf, a.k[a.Wf] = a.dc, a.Wf++, a.lf = a.dc
        }

        function tu(a, b) {
            var c = qB(a),
                d = a.Qk();
            a.b.ea ? (x(c, {
                state: a.B
            }), B(d, function(a) {
                x(c, Wv(a))
            }), d = new nB(a.a, a.b, b, c)) : d = new oB(a.a, a.b, c, d);
            d.T = (y() - a.ye) / 1E3;
            d.B = a.J();
            return d
        }

        function vu(a) {
            var b = a.b;
            a = a.a;
            var c = a.ha || b.o,
                c = {
                    ns: b.tb,
                    html5: "1",
                    el: b.V,
                    ps: b.Ea,
                    fexp: b.i.join(",") || void 0,
                    feature: c || void 0,
                    ytr: a.oa || void 0,
                    list: a.b,
                    d: b.Da,
                    f: b.fa
                };
            b.ob && (c.autoplay = "1");
            a.i && (c.subscribed = a.i);
            return c
        }

        function Zt(a) {
            a.ye = y();
            a = a.j;
            kB(a);
            a.a.vps.push("0.000:N");
            a.B = y();
            jB(a);
            iB(a)
        }
        f.onError = function(a) {
            this.j.onError(a)
        };

        function yu(a, b) {
            V(b.state, 8) ? (a.B = "playing", a.i && !a.Jd && a.a.gf && a.Th(!0)) : a.B = "paused";
            if (V(b.state, 2)) {
                uu(a);
                var c = tu(a, "watchtime");
                c.A = null;
                c.C = null;
                rB(a);
                wu(a, c)
            }
            var c = a.j,
                d = b.state;
            t: {
                var e = ou(c);
                if (!isNaN(e)) {
                    var g = b.state,
                        h;
                    if (!V(g, 32) && 0 < tm(b, 16) || 0 < tm(b, 32)) {
                        if (V(b.a, 32)) break t;
                        h = "S"
                    }
                    V(g, 128) && (h = "ER");
                    h || (h = hB[bi(g)], "B" == h && V(g, 4) && (h = "PB"));
                    null != h && pu(c, e, h)
                }
            }
            V(d, 8) && (isNaN(c.j) && jB(c), isNaN(c.i) && iB(c));
            if (0 < tm(b, 256) || V(d, 128)) c.onError(d.a.errorCode);
            (V(d, 2) || V(d, 128)) && c.k()
        }

        function wu(a, b) {
            if (b || 0 < a.Wf && a.a.gf) {
                var c = b || tu(a, "watchtime"),
                    d = !0;
                a.o.length && a.k.length && (c.k = a.o, c.o = a.k, d = c.k[c.k.length - 1] == c.o[c.o.length - 1]);
                a.Gm && d || (d && (c.C = null), c.send(), a.km++);
                a.Gm = d;
                a.o = [];
                a.k = []
            }
            a.Wf = 0
        }

        function hu(a, b, c) {
            b.rt = (y() - a.ye) / 1E3;
            x(b, qB(a));
            a = U("streamingerror" == b.event ? "http://192.168.1.184/stream_204" : a.b.rb + "player_204", vu(a));
            a = U(a, b);
            jf(a, c)
        }

        function du(a, b) {
            var c = a.b,
                d = a.a,
                e = {
                    ns: c.tb,
                    el: c.V,
                    eurl: c.g,
                    fmt: d.a ? d.a.Fa : 0,
                    html5: 1,
                    list: d.b,
                    plid: d.j,
                    ei: d.o,
                    ps: c.Ea,
                    noflv: 1,
                    st: a.ue(),
                    video_id: d.K
                };
            c.ob && (b.autoplay = "1");
            d.Nh && (b.tmi = "1");
            x(e, b);
            x(e, Ls(c));
            jf(U("//web.archive.org/web/20130831093956/https://www.youtube.com/live_204", e))
        }
        f.log_ = function() {};
        f.I = function() {
            pB.G.I.call(this);
            uu(this);
            void 0 != this.A && Ke(this.A)
        };

        function sB(a, b) {
            W.call(this);
            this.B = 1;
            this.da = {};
            this.D("openingpage", v(this.Sn, this));
            this.D("initializingmode", v(this.Pn, this));
            this.D("internalenvironmentdatachange", v(this.On, this));
            this.D("internalvolumechange", v(this.mk, this));
            this.L = null;
            this.L = ff(b);
            var c = this.L.args;
            lf(this.a);
            this.a = new Fs(c || {});
            this.u("internalenvironmentdatachange", "newdata");
            this.ha = Hs(this.a) ? new Qf(this, 1) : new nf(this, 1);
            R(this, this.ha);
            this.fa = new Vf(this);
            R(this, this.fa);
            this.H = new Vf(this, 1);
            R(this, this.H);
            this.O = {};
            this.ka = Hb(["internalvideodatachange", this.In, "liveviewshift", this.Qn, "commoninfoloaded", this.Nn, "playbackready", this.Jn, "playbackstarted", this.Kn, "statechange", this.Ln, "videoelementevent", this.fo]);
            this.oa = new zg(this.a);
            this.k = new cs;
            R(this, this.k);
            this.g = null;
            c = new Pt(this.a, 1);
            if (this.g != c) {
                if (this.g) {
                    var d = this.g,
                        e = this.ka,
                        g;
                    for (g in e) d.Q(g, e[g], this)
                }
                c.fa = this.oa;
                g = this.ka;
                for (var h in g) c.D(h, g[h], this);
                this.g = c
            }
            this.ja = Hb(["beginseeking", this.Mn, "endseeking", this.bo, "internalvideodatachange",
                this.Bk, "internalvideoformatchange", this.$n, "progresssync", this.Wn, "seekto", this.Xn, "onLoadProgress", this.Rn, "onVideoProgress", this.ao, "newlicensesession", this.co, "playbackdataloaded", this.Un, "playbackready", this.Tn, "statechange", this.Vn
            ]);
            this.j = null;
            Zu(this, this.g);
            this.ea = -1;
            this.F = this.o = null;
            this.A = {};
            this.J = null;
            this.T = {};
            this.U = null;
            this.R = new $A(this);
            R(this, this.R);
            this.R.D("templateerror", this.Yn, this);
            this.R.D("templateready", this.Zn, this);
            this.R.D("resize", this.eo, this);
            Op("fs");
            h = this.R;
            h.Va = a;
            c = J(h.Va);
            (c = Qk(c, "html5-video-player") ? c : K("html5-video-player", c)) || (c = UA || K("html5-video-player"));
            c ? (VA(h, c), h.u("templateready"), c = !0) : c = !1;
            c || h.u("templateerror");
            h = this.k;
            c = {};
            c.loaded = v(this.qk, this);
            c.unloaded = v(this.rk, this);
            c.command_pause = tB(this.ve, this);
            c.command_play = tB(this.we, this);
            c.command_seek = tB(this.xe, this);
            c.command_disable_controls = v(this.jf, this);
            c.command_enable_controls = v(this.sg, this);
            c.command_redirect_controls = v(this.yk, this);
            c.command_stop_redirect_controls =
                v(this.rg, this);
            c.command_redirected_show_is_playing = v(this.R.Ak, this.R);
            c.command_progress = v(this.Oh, this);
            c.command_add_cuerange = v(this.nk, this);
            c.command_remove_cuerange = v(this.vk, this);
            c.command_remove_cuerange_all = v(this.wk, this);
            c.command_preroll_ready = v(this.zk, this);
            c.command_hide_all_dialogs = v(this.R.pk, this.R);
            c.command_clear_video_overlays = v(this.ok, this);
            c.command_log = v(this.xk, this);
            c.publish_external_event = v(this.uk, this);
            c.module_menu_add = v(this.Gn, this);
            c.module_menu_remove = v(this.Hn,
                this);
            h.j = c;
            c = this.fa;
            h.b != c && (ds(h), h.i = {}, h.b = c)
        }
        A(sB, W);
        f = sB.prototype;
        f.md = null;
        f.list = null;
        f.Ve = !0;
        f.na = null;
        f.Ne = null;
        f.Vf = 1;
        f.R = null;
        f.Wh = null;
        f.Re = null;
        f.fj = !1;
        f.eh = null;
        f.fm = 0;

        function uB(a) {
            var b = Al.getTag();
            a.i = b;
            a.md = a.i;
            a.j && ju(a.j, b);
            Vh(a.i, a.Vf);
            if (a.a.fd) a.Re && Ve(a.Re), a.Re = Q(a.i, "volumechange", v(a.Uq, a), !1);
            else {
                var b = a.i,
                    c = a.na.muted;
                b.volume = a.na.volume / 100;
                b.muted = c
            }
            a.R.uj(a.i);
            a.a.Ha = a.i
        }

        function vB(a) {
            if (a.i) {
                a.Re && (Ve(a.Re), a.Re = null);
                a.j && zl(a.j);
                var b = a.R;
                b.a && (Ic(b.a), b.a = null);
                a.a.Ha = null;
                Al.releaseTag(a.i);
                a.i = null
            }
        }

        function wl(a, b) {
            a.a.Ta ? (a.J && (Xc(a.i, a.J.left, a.J.top), dd(a.i, new G(a.J.width, a.J.height)), a.J = null), Uh(a.i), zl(a.j), ju(a.j, a.i), Vh(a.i, a.Vf)) : Al.releaseTag(b)
        }

        function Zu(a, b) {
            if (a.j != b) {
                a.j && (ds(a.k), av(a, a.j));
                a.O[b.da] = b;
                a.j = b;
                a.i && ju(b, a.i);
                var c = a.ja,
                    d;
                for (d in c) b.D(d, c[d], a);
                a.u("videoplayerchange", b);
                Ut(b) && wB(a)
            }
        }

        function av(a, b) {
            zl(b);
            var c = a.ja,
                d;
            for (d in c) b.Q(d, c[d], a);
            b != a.g && (c = b.da, a.O[c] == b && delete a.O[c]);
            b == a.j && (a.j = null, b != a.g && Zu(a, a.g))
        }

        function T(a, b) {
            return b ? a.O[b] || null : a.j
        }

        function wB(a) {
            var b = a.j.getVideoData();
            a.Bk("newdata", a.j, b);
            var c = a.k,
                d;
            d = [vm, $r];
            a.a.Zb && d.push(Iq);
            B(d, c.Wq, c);
            a.u("videoready", b);
            6 != a.B && cu(a.j)
        }
        f.Jn = function() {
            xB(this, 5)
        };
        f.Tn = function(a) {
            a = a.i;
            V(a, 8) && !V(a, 2) && this.we()
        };

        function yB(a, b) {
            R(a, b);
            b.D("loaded", a.qk, a);
            b.D("unloaded", a.rk, a);
            b.D("command_pause", tB(a.ve, a));
            b.D("command_play", tB(a.we, a));
            b.D("command_seek", tB(a.xe, a));
            b.D("command_disable_controls", a.jf, a);
            b.D("command_enable_controls", a.sg, a);
            b.D("command_redirect_controls", a.yk, a);
            b.D("command_stop_redirect_controls", a.rg, a);
            b.D("command_redirected_show_is_playing", a.R.Ak, a.R);
            b.D("command_progress", a.Oh, a);
            b.D("command_add_cuerange", a.nk, a);
            b.D("command_remove_cuerange", a.vk, a);
            b.D("command_remove_cuerange_all",
                a.wk, a);
            b.D("command_preroll_ready", a.zk, a);
            b.D("command_hide_all_dialogs", a.R.pk, a.R);
            b.D("command_clear_video_overlays", a.ok, a);
            b.D("command_log", a.xk, a);
            b.D("publish_external_event", a.uk, a);
            b.D("command_log_timing", a.k.A, a.k)
        }

        function zB(a) {
            a && a.Bf && a.destroy()
        }
        f.Wa = function(a, b) {
            this.u.apply(this, arguments);
            this.hn.apply(this, arguments)
        };
        f.xh = function(a, b) {
            var c = Ua(arguments);
            Hs(this.a) && c.push(this.j.da);
            this.u.apply(this, c)
        };
        f.N = function() {
            return this.a
        };
        f.getVideoData = function(a) {
            return (a = T(this, a)) ? a.getVideoData() : null
        };
        f.log_ = function() {};
        f.Pn = function() {
            Ke(0);
            this.a.fd || this.mk(this.na)
        };
        f.Ok = function() {
            var a = Ps(this.a);
            a.fs = this.a.Zg;
            a.volume = Math.round(this.na.volume);
            a.mos = this.na.muted ? 1 : 0;
            this.a.ed && this.b && this.b.g && "WL" == this.b.g.type && (a.ssrt = 1);
            return a
        };
        f.Lo = function() {
            var a = gs(this.k);
            if (this.o) {
                var b = this.o.ph();
                b && a.push(b)
            }
            return a
        };
        f.Yn = function() {
            AB(this, 5)
        };
        f.Zn = function() {
            this.a.$h = this.R.b;
            var a = this.R,
                b = a.app.N(),
                c = a.b;
            a.addClass("el-" + b.V);
            a.addClass("ps-" + b.Ea);
            Uk(c, "html5-native-controls", b.Ec);
            Uk(c, "html5-mobile", b.Dc);
            b.hf || a.addClass("html5-chromeless");
            b.Ta || a.addClass("tag-pool-enabled");
            c.style.display = "";
            a.i = K("html5-video-container", c);
            a.o = K("html5-video-content", c);
            a.A = K("html5-video-controls", c);
            a.g = new SA;
            a.g.ub(c);
            Q(a.g.a, "click", v(a.Zh, a));
            R(a, a.g);
            a.B ? a.k = Q(window, "resize", v(a.fi, a)) : a.k = Je(v(a.fi, a), 250);
            a = this.ha;
            a.b = this.R.b;
            for (var d in a.g) a.b[d] =
                a.g[d];
            for (d in a.j) a.b[d] = a.j[d];
            d = v(this.to, this);
            a = document;
            b = "onfullscreenchange" in a ? "fullscreenchange" : "onmozfullscreenchange" in a ? "mozfullscreenchange" : "onmsfullscreenchange" in a ? "msfullscreenchange" : "onofullscreenchange" in a ? "ofullscreenchange" : "onwebkitfullscreenchange" in a ? "webkitfullscreenchange" : null;
            "msfullscreenchange" == b && (b = "MSFullscreenChange");
            this.Wh = b ? Q(a, b, d) : null;
            d = this.L.args;
            this.a.Qh ? this.na = yg() : this.na || (this.na = {
                volume: 100,
                muted: !1,
                nonNormalized: 100
            });
            uB(this);
            a = new Df(d);
            Rt(this.g, a);
            b = this.getVideoData();
            if ("detailpage" == this.a.V) {
                var c = b.K,
                    e = wg("yt-player-restore-playhead"),
                    c = e ? e[c] : void 0;
                c && (b.ma = c)
            }
            tg("yt-player-restore-playhead");
            this.a.ac = this.R.kd();
            "detailpage" != this.a.V && d && (d.playlist || d.list || d.api) && (BB(this, d), a.K || a.re || (d = this.b, a = v(this.Lk, this), d.Kd = a, d.ld && O(d.Kd, 0)));
            if (d = this.L.args.jsapicallback) ha(d) || (d = q(d)), d && tB(v(d, l, this.a.Sh), l);
            this.a.Yh = !1;
            Ej() ? this.a.ik ? CB(this) : "leanback" != this.a.V && DB(this) : AB(this, 5, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK")
        };

        function DB(a) {
            a.u("initializingmode");
            xB(a, 2)
        }

        function CB(a) {
            a.u("initializingmode");
            Zu(a, a.g);
            xB(a, 3);
            a.a.Ta || (vB(a), uB(a), ju(a.g, a.i));
            Xt(a.g);
            EB(a, 3)
        }

        function tB(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments);
                O(function() {
                    a.apply(b || this, c)
                }, 0)
            }
        }
        f.xk = function(a, b, c) {
            var d = T(this);
            b.event = a;
            d.j && hu(d.j, b, c)
        };

        function tf(a, b) {
            if (!isNaN(b) && a.i) {
                var c = 1,
                    c = a.a.pi ? uf : [1],
                    c = 1 > b ? Ka(c, function(a) {
                        return a >= b
                    }) : Ma(c, function(a) {
                        return a <= b
                    });
                a.Vf != c && (a.Vf = c, a.g == a.j && Vh(a.i, c), a.u("onPlaybackRateChange", c))
            }
        }

        function vf(a, b) {
            var c = a.getVideoData(b);
            return c && c.a ? c.a.a.i : "unknown"
        }
        f.getCurrentTime = function(a) {
            return (a = T(this, a)) ? a.getCurrentTime() : 0
        };

        function Uf(a, b) {
            var c = T(a, b);
            return c ? c.Gc() : 0
        }

        function xf(a, b) {
            var c = a.getVideoData(b);
            if (!c) return [];
            c = C(c.B, function(a) {
                return a.cc.a.i
            });
            Ya(c);
            return c
        }
        f.fo = function(a) {
            var b = a.target;
            switch (a.type) {
                case "loadedmetadata":
                    Qp("fvb") || Op("fvb");
                    WA(this.R);
                    break;
                case "loadstart":
                    Qp("gv") || Op("gv");
                    break;
                case "progress":
                case "timeupdate":
                    Qp("l2s") || (a = Rh(b), a < b.buffered.length && 2 < b.buffered.end(a) && Op("l2s"))
            }
        };
        f.co = function(a) {
            if (this.fj) {
                var b = this.fm.toString();
                this.fm++;
                this.eh[b] = a;
                a = {
                    request: Ua(a.b[0] ? a.b[0].message : null),
                    sessionId: b,
                    system: a.j.a,
                    url: a.k
                };
                this.u("onNewLicenseSession", a)
            } else a.start()
        };
        f.Rn = function(a, b) {
            this.xh("onLoadProgress", b)
        };
        f.ao = function(a, b) {
            this.xh("onVideoProgress", b)
        };
        f.Wn = function(a, b, c, d, e) {
            if (!e && a.ng() && !bu(a)) {
                e = a.getVideoData();
                if (this.a.hd && e.Ga && !e.fl && e.Nd >= e.Kk) {
                    var g;
                    g = a.N();
                    var h = ob(e.Id / e.Ga, 0, 1),
                        h = {
                            html5: "1",
                            video_id: e.K,
                            eurl: g.g,
                            framer: g.T,
                            feature: g.o,
                            ps: g.Ea,
                            el: g.V,
                            hl: g.j,
                            list: e.b,
                            w: h,
                            l: e.Ga,
                            plid: e.j,
                            ei: e.o,
                            t: e.Vb,
                            access_token: e.H,
                            tpmt: e.Nd,
                            cpn: e.wa
                        };
                    g.b && (h.adformat = g.b);
                    g.referrer && (h.referrer = Os(g));
                    g.ob && (h.autoplay = "1");
                    g.Cc && (h.authuser = g.Cc);
                    g.te && (h.pageid = g.te);
                    e.Yc && (h.splay = "1");
                    e.i && (h.subscribed = e.i);
                    x(h, Ls(g));
                    g = U(g.rb + "set_awesome",
                        h);
                    jf(g);
                    e.fl = !0
                }
                e.Ga && e.Nd >= e.Ek && FB(this)
            }
            this.Oh(b, c, d, a)
        };
        f.Oh = function(a, b, c, d) {
            this.u("progresssync", a, b, c || 0, (d || T(this)).da)
        };
        f.Ln = function(a) {
            console.log("f.Ln called with state:", a.state);
        
            if (!V(a.state, 2) || !GB(this)) {
                console.log("Initial checks failed, proceeding with further checks...");
        
                if (V(a.state, 2)) {
                    console.log("State is valid and flag 2 is set.");
                    this.ve();
        
                    if (V(a.a, 32)) {
                        console.log("Flag 32 is set. Calling this.g.Ei()");
                        this.g.Ei();
                    }
        
                    if (this.a.Dc && this.a.Zg !== false) {
                        console.log("Conditions for exiting fullscreen are met.");
                        if (af()) {
                            console.log("Fullscreen APIs available. Attempting to exit fullscreen...");
                            var exitFullscreen = ye(["exitFullscreen", "cancelFullscreen", "cancelFullScreen"]);
                            if (exitFullscreen) exitFullscreen.call(document);
                        } else {
                            console.log("Fullscreen APIs not available. Falling back...");
                            this.u("onFullScreenToggleRequest");
                            HB(this, false);
                        }
                    }
                }
        
                if (tm(a, 256) > 0) {
                    console.log("Error handling required. Retrieving error info...");
                    var errorInfo = a.state.a;
                    console.log("Error info:", errorInfo);
                    Pf(this.g, errorInfo.errorCode, errorInfo.errorDetail);
                }
        
                if (V(a.state, 128)) {
                    console.log("Handling specific error codes...");
                    var state = a.state;
                    Ke(0);
                    sf(this);
                    var errorDetails = state.a;
                    console.log("Error details:", errorDetails);
        
                    if (errorDetails.errorCode === 206) {
                        console.log("Error code 206 detected. Handling fallback...");
                        Pf(this.g, errorDetails.errorCode, errorDetails.errorDetail);
                    }
        
                    if (!GB(this)) {
                        if (!errorDetails.message) {
                            if (!errorDetails.messageKey) errorDetails.messageKey = "HTML5_DEFAULT_FALLBACK";
                            errorDetails.message = Ne(errorDetails.messageKey);
                        }
        
                        if (errorDetails.errorCode === 5) {
                            console.log("Special handling for error code 5.");
                            Pf(this.g, 208, errorDetails.errorDetail);
                        }
        
                        var errorCategory = 5;
                        if (errorDetails.errorCode === 206) errorCategory = 150;
                        if (E(Xh, errorDetails.errorCode)) errorCategory = errorDetails.errorCode;
        
                        console.log("Emitting error events with category:", errorCategory);
                        this.u("onError", errorCategory);
                        this.u("onDetailedError", errorDetails);
                    }
                }
        
                console.log("Emitting application state change event.");
                this.u("applicationplayerstatechange", a);
        
                if (V(a.state, 2)) {
                    console.log("Handling play/pause toggle...");
                    var videoData = this.getVideoData();
                    console.log("Video data:", videoData);
        
                    if (videoData.Eb && !videoData.Sa) {
                        console.log("Toggling play/pause.");
                        this.jf(["play_pause"]);
                    }
                }
            }
        };        
        f.Vn = function(a) {
            !V(a.state, 32) && 0 > tm(a, 16) && (!V(a.state, 8) || this.i.ended && !V(a.state, 2) || this.we());
            this.u("presentingplayerstatechange", a);
            this.hn("onStateChange", a);
            EB(this, bi(a.state))
        };
        f.In = function(a, b, c) {
            if ("newdata" == a) {
                zB(this.o);
                zB(this.F);
                a = [];
                for (var d in this.A) rf(this, d) && a.push(d);
                this.A = {};
                0 < a.length && this.u("controlsenabled", a);
                this.rg();
                this.da = {}
            }
            this.getVideoData().Rh ? (this.Ne = Db(this.na), this.jf(["audio"]), d = this.i, d.gj = !0, d.muted = !0) : (rf(this, "audio") && this.sg(["audio"]), this.i.gj = !1, this.Ne && (this.na = this.Ne, this.u("internalvolumechange", this.na), this.Ne = null));
            d = this.getVideoData();
            d.Eb && !this.a.ki ? AB(this, 205, "DEVICE_FALLBACK") : d.Eb && !d.Sa ? this.jf(["seek"]) :
                this.sg(["seek"]);
            this.getVideoData().aj && !this.a.li && AB(this, 207, "DEVICE_FALLBACK");
            if (c.da || c.g.focEnabled || c.g.rmktEnabled) c = 1E3 * this.getVideoData().Ga, IB(this, "part2viewed", 0, c), IB(this, "videoplaytime25", 0.25 * c, c), IB(this, "videoplaytime50", 0.5 * c, c), IB(this, "videoplaytime75", 0.75 * c, c), IB(this, "videoplaytime100", c, 2147483647), IB(this, "conversionview", c, 2147483647)
        };
        f.Bk = function(a, b, c) {
            if ("newdata" == a && (ds(this.k), tf(this, 1), !b.j && !bu(b))) {
                var d = new pB,
                    e = v(this.Ok, this);
                d.ni = e;
                e = v(this.Lo, this);
                d.Qk = e;
                Qt(b);
                if (b.a && !bu(b)) {
                    b.j = d;
                    d.O = b.fa;
                    e = v(b.Gc, b);
                    d.J = e;
                    e = v(b.getCurrentTime, b);
                    d.ue = e;
                    e = v(b.Mo, b);
                    d.Wk = e;
                    e = b.o;
                    d.a = b.a;
                    d.b = e;
                    d.Ck = d.b.rb + "get_video";
                    d.i = !1;
                    var e = d.j,
                        g = d.b,
                        h = d.O;
                    e.b = d.a;
                    e.g = g;
                    e.o = h;
                    e.J = new Jt(e.g);
                    e.a.bwe = [];
                    e.a.error = [];
                    e.a.vfs = [];
                    e.a.vps = [];
                    e.a.view = [];
                    d.L = !0;
                    b.a.ff && du(b.j, {
                        metric: "connected"
                    })
                }
            }
            this.na.volume = (this.na.nonNormalized || this.na.volume) *
                this.getVideoData().ug;
            c.Kk = Math.min(0.8 * c.Ga, 180);
            this.Wa("videodatachange", a, c, b.da)
        };
        f.$n = function(a, b) {
            var c = this.j.getVideoData();
            a == c && this.u("onPlaybackQualityChange", a.a.a.i, b)
        };
        f.On = function() {
            "detailpage" == this.a.V && Rf(this)
        };

        function Rf(a) {
            var b = JB();
            if (b && 0 <= b.index) {
                var c = [];
                B(b.videoIds, function(a) {
                    if (a = b.videoData ? b.videoData[a] : void 0) a.video_id = a.id, c.push(a)
                });
                BB(a, {
                    videoList: c,
                    loop: b.autoPlay,
                    index: b.index
                })
            }
        }

        function BB(a, b) {
            lf(a.b);
            a.b = new Hk(b)
        }

        function IB(a, b, c, d) {
            b in a.da || (c = new Fg(c, d, {
                id: b,
                priority: 1
            }), c.hc.D("onEnter", a.fn, a), c.hc.D("onExit", a.fn, a), a.g.Ki(c), a.da[b] = c)
        }
        f.fn = function(a) {
            var b = a.getId(),
                c = this.g.getVideoData();
            "part2viewed" == b ? (c.da && jf(c.da), c.Yb && jf(c.Yb)) : "conversionview" == b && FB(this);
            c.Ca && (b = a.getId(), c = pi(c.Ca, {
                label: b
            }), jf(c));
            this.g.Bg(a)
        };

        function FB(a) {
            var b = a.g.getVideoData();
            if (!b.Fm) {
                b.g.eventLabel = a.a.V;
                b.g.playerStyle = a.a.Ea;
                b.da && (b.g.feature = "pyv");
                b.g.vid = b.K;
                b.g.isAd = !("adunit" != a.a.V && !b.da);
                a = b.g;
                if (a.baseUrl && a.uid) {
                    var c = a.rmktEnabled,
                        d = a.focEnabled && !a.isAd;
                    if (c || d) {
                        var e = {
                            label: d ? "followon_view" : "default"
                        };
                        if (c) {
                            c = {
                                utuid: a.uid,
                                type: "view"
                            };
                            a.vid && (c.utvid = a.vid);
                            a.eventLabel && (c.el = a.eventLabel);
                            a.playerStyle && (c.ps = a.playerStyle);
                            a.feature && (c.feature = a.feature);
                            a.ppe && (c.ppe = a.ppe);
                            var g, h = [];
                            for (g in c) h.push(encodeURIComponent(g) +
                                "=" + encodeURIComponent(c[g]));
                            g = h.join(";");
                            e.data = g
                        }
                        d && a.vid && a.uid && (a.oeid || a.ieid) && (a.oeid && (e.oeid = a.oeid), a.ieid && (e.ieid = a.ieid), e.evid = a.vid);
                        d && (e.foc_id = a.uid);
                        a = U(a.baseUrl, e)
                    } else a = null
                } else a = null;
                a && jf(a);
                b.Fm = !0
            }
        }

        function xB(a, b) {
            b != a.B && (2 == b && EB(a, 5), a.B = b, a.u("appstatechange", b))
        }

        function EB(a, b) {
            a.ea != b && (a.ea = b, a.xh("onStateChange", b))
        }

        function AB(a, b, c) {
            Wt(a.g, b, c, void 0)
        }
        f.xe = function(a, b, c, d) {
            (d = T(this, d)) && nu(d, a, !1 != b, c)
        };
        f.Xn = function(a, b) {
            var c = a.getVideoData();
            if (1 == this.B || 2 == this.B) c.ma = b;
            2 == this.B ? CB(this) : (c = ru(a, b), this.Wa("seekto", c))
        };
        f.Mn = function() {
            this.Wa("beginseeking")
        };
        f.bo = function() {
            this.Wa("endseeking")
        };

        function Ff(a, b) {
            var c;
            if (c = (new Ud(b)).a) {
                var d = a.a;
                d.Da = c.get("d", d.Da);
                d.fa = c.get("f", d.fa)
            }
        }

        function Af(a, b, c) {
            b = new Df(b);
            return KB(a, b, void 0, c)
        }

        function KB(a, b, c, d) {
            var e = T(a, d);
            if (!e) return !1;
            void 0 != c && (b.pe = c);
            sf(a, d);
            Rt(e, b);
            if (!Vt(e)) return !1;
            Js(e.N(), b.k);
            e == a.g ? (xB(a, 1), CB(a)) : Xt(e);
            return !0
        }

        function If(a, b) {
            var c = KB(a, b); of (a, c, void 0)
        }

        function of (a, b, c) {
            c = T(a, c);
            b && c == a.g && (c.getVideoData().Yc = !0)
        }

        function Cf(a, b, c) {
            var d = T(a, c);
            d && (sf(a, c), Rt(d, b), Vt(d) && (Js(d.N(), b.k), d == a.g && (xB(a, 1), DB(a))))
        }

        function Gf(a, b, c, d, e) {
            "string" == typeof b || b instanceof Array ? BB(a, {
                api: b,
                index: c,
                startSeconds: d,
                suggestedQuality: e
            }) : BB(a, b);
            b = a.b;
            a = v(a.Lk, a);
            b.Kd = a;
            b.ld && O(b.Kd, 0)
        }
        f.Lk = function() {
            var a = Kf(this.b);
            this.getVideoData().ne || !this.Ve ? If(this, a) : Cf(this, a)
        };

        function GB(a) {
            var b;
            if (b = a.b && ("embedded" == a.a.V || a.a.Zg)) b = JB(), b = !(!a.b || !(a.b.loop || a.b.ga + 1 < a.b.Ab) || b && !b.autoPlay);
            return b ? (Hf(a), !0) : !1
        }

        function Hf(a) {
            a.b && (a.b.ld ? (a.b.loop || a.b.ga + 1 < a.b.Ab) && If(a, Mk(a.b)) : (Mk(a.b), a.Ve = !1))
        }

        function JB() {
            var a = q("yt.www.watch.lists.getState");
            return a ? a() : null
        }
        f.nk = function(a, b) {
            var c = T(this, b);
            c && (B(a, c.Ki, c), this.u("cuerangesadded", a))
        };
        f.vk = function(a, b) {
            var c = T(this, b);
            c && (B(a, c.Bg, c), this.u("cuerangesremoved", a))
        };
        f.wk = function(a, b) {
            var c = T(this, b);
            if (c) {
                for (var c = c.A, d = c.i.length - 1; 0 <= d; d--) c.i[d].namespace == a && ei(c, d);
                c.vb()
            }
        };
        f.zk = function(a, b) {
            var c = T(this, b);
            c && iu(c, a)
        };
        f.Kn = function() {
            LB(this)
        };

        function LB(a) {
            if (!a.a.Si) {
                var b = a.g.getVideoData();
                if (b.K) {
                    var c = b.K;
                    Sp().docid = c
                }
                b.o && (c = b.o, Sp().ei = c);
                b.wa && (c = b.wa, Sp().cpn = c);
                0 < b.ma && (c = b.ma.toString(), Sp().start = c);
                b = b.a.Fa.toString();
                Sp().fmt = b;
                b = Math.round((a.g.b ? yf(a.g.b) : 0) * Uf(a)).toString();
                Sp().tds = b;
                Op("aft");
                if ("detailpage" == a.a.V) {
                    var b = a.k.C,
                        d;
                    for (d in b) Op(d, b[d]);
                    d = a.k.o;
                    for (var e in d) b = e, c = d[e], Sp()[b] = c;
                    b = Pp().tick;
                    e = Pp().span;
                    c = Sp();
                    if (d = q("yt.timing.reportbuilder_")) {
                        if (d = d.apply(null, [b, e, c, void 0])) Rp(d), Tp()
                    } else {
                        d = {
                            v: 2,
                            s: "youtube",
                            action: Ge("TIMING_ACTION")
                        };
                        var g = Ge("TIMING_INFO") || {},
                            h;
                        for (h in g) c[h] = g[h];
                        h = c.srt;
                        delete c.srt;
                        if (!h && 0 !== h) try {
                            var k = (window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance).timing;
                            h = k.responseStart - k.navigationStart
                        } catch (m) {
                            c.pt && (h = c.pt)
                        }
                        if (h || 0 === h) c.srt = h;
                        b.aft || (b.aft = b.vr && b.cl && b.cl > b.vr ? b.cl : b.vr ? b.vr : b.ol);
                        b.aft && b.plev && (b.aft = Math.min(b.aft, b.plev));
                        b.vr && b.gv && (e.vl = Math.round(b.vr - b.gv));
                        for (var p in c) "_" != p.charAt(0) && (d[p] = c[p]);
                        k = {};
                        p = [];
                        h = b._start;
                        for (var r in b) "_" != r.charAt(0) && (c = Math.max(Math.round(b[r] - h), 0), k[r] = c, p.push(r + "." + c));
                        d.rt = p.join(",");
                        r = {};
                        p = [];
                        for (var n in e) "_" != n.charAt(0) && (r[n] = e[n], p.push(n + "." + e[n]));
                        d.it = p.join(",");
                        Rp(d);
                        (n = q("ytdebug.logTiming")) && n(d, k, r);
                        Tp()
                    }
                }
                a.a.Si = !0
            }
        }
        f.qk = function(a) {
            "remote" == a ? (xB(this, 6), zB(this.o)) : this.xh("onApiChange")
        };
        f.rk = function(a) {
            "remote" == a && DB(this)
        };
        f.Uq = function() {
            if (!rf(this, "audio")) {
                var a = 100 * this.i.volume,
                    a = {
                        volume: a,
                        nonNormalized: a / this.getVideoData().ug,
                        muted: this.i.muted
                    };
                this.na = Db(a);
                this.Wa("onVolumeChange", a)
            }
        };
        f.mk = function(a) {
            a.volume = ob(a.volume, 0, 100);
            a.nonNormalized = a.volume / this.getVideoData().ug;
            this.a.Qh && !this.a.fd && xg(a);
            if (rf(this, "audio")) this.Ne && (this.Ne = Db(a), this.Wa("onVolumeChange", a));
            else {
                var b = this.i,
                    c = a.muted;
                b.volume = a.volume / 100;
                b.muted = c;
                this.a.fd || this.Wa("onVolumeChange", a)
            }
        };
        f.to = function() {
            HB(this, !!ye(["fullscreenElement", "fullScreenElement"]))
        };

        function HB(a, b) {
            if ("detailpage" == a.a.V && !b) {
                var c = a.g.getVideoData(),
                    d = q("checkCurrentVideo");
                if (d && Ge("VIDEO_ID") != c.K) {
                    var e = a.getCurrentTime(),
                        g = {};
                    g[c.K] = e;
                    pg("yt-player-restore-playhead", g, 172800);
                    d(c.K);
                    a.u("openingpage")
                }
            }
            a.a.Zg = b;
            WA(a.R);
            a.Wa("fullscreentoggled", b)
        }
        f.eo = function() {
            this.a.ac = this.R.kd();
            if (this.i) {
                var a = this.getVideoData();
                0 != this.i.readyState && (a.ka = new G(this.i.videoWidth, this.i.videoHeight));
                this.a.Zq = ZA(this.R, this.R.kd(), XA(this.R), YA(this.R), void 0);
                this.a.tf = ZA(this.R, this.R.kd(), XA(this.R), YA(this.R), !0);
                wf(T(this), "r");
                this.u("resize", Ns(this.a));
                this.Wa("onResize")
            }
        };
        f.ok = function() {
            this.Wa("clearvideooverlays")
        };
        f.Gn = function(a) {
            this.Wa("menu_add", a)
        };
        f.Hn = function(a) {
            this.Wa("menu_remove", a)
        };
        f.Qn = function(a) {
            this.Wa("liveviewshift", a)
        };
        f.uk = function(a, b) {
            if ("onAdStateChange" == a) {
                var c = arguments[1],
                    d = arguments[2],
                    e = arguments[3] || {};
                1 == c && LB(this);
                "leanback" == this.a.V && Hs(this.a) && (0 == c ? this.md = this.i : this.md = d, this.u("onAdStateChange", c, e.video_id))
            } else this.u.apply(this, arguments)
        };
        f.hn = function(a, b) {
            this.k.B.apply(this.k, arguments);
            this.o && this.o.u.apply(this.o, arguments);
            this.F && this.F.u.apply(this.F, arguments)
        };
        f.we = function(a, b) {
            var c = T(this, b);
            c && (2 == this.B ? CB(this) : c.U ? (a && c.getVideoData(), V(c.i, 2) ? this.xe(0) : lu(c)) : Xt(c))
        };
        f.ve = function(a, b) {
            var c = T(this, b);
            c && (a && c.getVideoData(), gu(c))
        };

        function sf(a, b) {
            var c = T(a, b);
            if (c && 1 != a.B && 2 != a.B) {
                gu(c);
                if (c.j) {
                    var d = c.j,
                        e = tu(d, "watchtime");
                    e.kk = !0;
                    e.A = null;
                    e.C = null;
                    rB(d);
                    wu(d, e);
                    e = d.j;
                    e.k();
                    kB(e);
                    d.I()
                }
                c.U = !1;
                c.b && (St(c), c.g && (mf(c.k, c.g), c.k = null, c.g = null), c.a && (c.a.ma = c.getCurrentTime()), c.B = NaN, Th(c.b), c.o.Ia && Wh(c.b, !1), V(c.i, 128) || Yt(c, $h(c.i)))
            }
        }

        function qf(a, b) {
            if (!rf(a, "play_pause")) {
                var c = a.T.play_pause ? a.U : null;
                c ? c.ee("control_play") : a.we(!1, b)
            }
        }

        function pf(a, b, c, d, e) {
            if (!rf(a, "seek")) {
                var g = a.T.seek ? a.U : null;
                g ? g.ee("control_seek", b) : a.xe(b, c, d, e)
            }
        }
        f.Nn = function(a) {
            Is(this.a, a)
        };
        f.Un = function() {
            console.log("f.Un called.");
        
            // Check if the current video data is equal to the value of this.g
            if (this.j == this.g) {
                // Check for device fallback condition
                if (this.getVideoData(1).Ik && !this.a.Dc) {
                    let fallbackType = "DEVICE_FALLBACK";
                    console.log("Device fallback triggered.");
        
                    // Check for specific devices and adjust fallback type accordingly
                    if (Xb || Kh("iemobile") || Kh("xbox") && Kh("trident") || Kh("nintendo wiiu")) {
                        fallbackType = "FLASH_FALLBACK";
                        console.log("Flash fallback triggered.");
                    }
        
                    // Call AB with appropriate parameters
                    console.log("Triggering AB with type:", fallbackType);
                    AB(this, 5, fallbackType);
                }
                // Check for availability of valid video formats
                else if ((a = Ut(this.g)) || (a = ((a = this.getVideoData()) && a.L.length && !a.U.length ? 0 <= Fa(a.L, "fresca") : !1) || !1), a) {
                    console.log("Valid video formats found. Proceeding...");
        
                    // Handle conditions for video playback setup
                    if (this.g.T.length || 0 < ph(this.g.A.b, -2147483648).length) {
                        console.log("Video conditions met, triggering xB and zB.");
                        xB(this, 4);
                        zB(this.o);
                    }
        
                    // Ensure video playback object is created if necessary
                    if (!this.o && this.H.getVideoData().Y) {
                        console.log("Creating new video object bw.");
                        this.o = new bw(this);
                        yB(this, this.o);
                    }
        
                    // Ensure video object is initialized and created
                    if (this.o && !this.o.Bf && this.o.fc(this.H)) {
                        console.log("Initializing video object.");
                        this.o.create();
                    }
        
                    // Ensure fallback object is created if necessary
                    if (!this.F && this.H.N().Yh) {
                        console.log("Creating new fallback object LA.");
                        this.F = new LA(this);
                        yB(this, this.F);
                    }
        
                    // Ensure fallback object is initialized and created
                    if (this.F && !this.F.Bf && this.F.fc(this.H)) {
                        console.log("Initializing fallback object.");
                        this.F.create();
                    }
        
                    // Call wB to complete setup
                    console.log("Calling wB.");
                    wB(this);
                } else {
                    // If no valid formats found
                    console.log("No available formats. Logging error and triggering fallback.");
                    this.getVideoData();
                    this.log_("No available formats");
                    AB(this, 5, "HTML5_NO_AVAILABLE_FORMATS_FALLBACK");
                }
            } else {
                // Call wB if the condition is not met
                console.log("Condition not met for this.j == this.g. Calling wB.");
                wB(this);
            }
        };        
        f.Sn = function() {
            this.ve()
        };

        function rf(a, b) {
            return !(!a.A[b] || !a.A[b].length)
        }
        f.jf = function(a, b) {
            b = b || "defaultcontext";
            var c = [];
            B(a, function(a) {
                this.A[a] ? 0 > this.A[a].indexOf(b) && this.A[a].push(b) : (this.A[a] = [b], c.push(a))
            }, this);
            0 < c.length && this.u("controlsdisabled", c)
        };
        f.sg = function(a, b) {
            b = b || "defaultcontext";
            var c = [];
            B(a, function(a) {
                if (rf(this, a)) {
                    var e = this.A[a].indexOf(b);
                    0 <= e && this.A[a].splice(e, 1);
                    0 == this.A[a].length && c.push(a)
                }
            }, this);
            0 < c.length && this.u("controlsenabled", c)
        };
        f.yk = function(a, b, c) {
            this.rg();
            this.U = a;
            b && B(b, function(a) {
                this.T[a] = !0
            }, this);
            c && es(this.k, a, c)
        };
        f.rg = function() {
            this.U = null;
            this.T = {};
            fs(this.k)
        };
        f.I = function() {
            vB(this);
            this.Wh && Ve(this.Wh);
            Ke(0);
            mf(yb(this.O));
            this.O = {};
            this.j = this.g = null;
            mf(this.a, this.b);
            this.L = this.H = this.ha = this.fa = this.md = null;
            sB.G.I.call(this)
        };
        z("yt.player.Application", sB);

        function MB() {
            this.a = [];
            NB(this)
        }
        ca(MB);
        f = MB.prototype;
        f.mb = 0;
        f.ie = 0;
        f.jg = 0;
        f.Nj = "";
        f.Ed = 0;
        f.load = function(a) {
            3 <= this.Ed ? a(this) : this.a.push(a)
        };
        f.getVersion = function() {
            return [this.mb, this.ie, this.jg]
        };

        function OB(a, b, c, d) {
            b = "string" == typeof b ? b.split(".") : [b, c, d];
            b[0] = parseInt(b[0], 10) || 0;
            b[1] = parseInt(b[1], 10) || 0;
            b[2] = parseInt(b[2], 10) || 0;
            return a.mb > b[0] || a.mb == b[0] && a.ie > b[1] || a.mb == b[0] && a.ie == b[1] && a.jg >= b[2]
        }

        function PB(a) {
            return -1 < a.Nj.indexOf("Gnash") && -1 == a.Nj.indexOf("AVM2") || 9 == a.mb && 1 == a.ie || 9 == a.mb && 0 == a.ie && 1 == a.jg ? !1 : 9 <= a.mb
        }

        function NB(a) {
            if (3 > a.Ed)
                if (1 > a.Ed) {
                    var b = q("window.navigator.plugins"),
                        c = q("window.navigator.mimeTypes"),
                        b = b && b["Shockwave Flash"],
                        c = c && c["application/x-shockwave-flash"],
                        c = b && c && c.enabledPlugin && b.description || "";
                    if (b = c) {
                        var d = b.indexOf("Shockwave Flash");
                        0 <= d && (b = b.substr(d + 15));
                        for (var d = b.split(" "), e = "", b = "", g = 0, h = d.length; g < h; g++)
                            if (e)
                                if (b) break;
                                else b = d[g];
                        else e = d[g];
                        e = e.split(".");
                        d = parseInt(e[0], 10) || 0;
                        e = parseInt(e[1], 10) || 0;
                        g = 0;
                        if ("r" == b.charAt(0) || "d" == b.charAt(0)) g = parseInt(b.substr(1),
                            10) || 0;
                        b = [d, e, g]
                    } else b = [0, 0, 0];
                    a.Nj = c;
                    c = b;
                    a.mb = c[0];
                    a.ie = c[1];
                    a.jg = c[2];
                    a.Ed = 1;
                    0 < a.mb ? QB(a) : NB(a)
                } else 2 > a.Ed ? RB(a) : QB(a)
        }
        f.Bn = function(a) {
            a ? (a = a.split(" ")[1].split(","), a = [parseInt(a[0], 10) || 0, parseInt(a[1], 10) || 0, parseInt(a[2], 10) || 0]) : a = [0, 0, 0];
            this.mb = a[0];
            this.ie = a[1];
            this.jg = a[2];
            this.Ed = 2;
            0 < this.mb ? QB(this) : NB(this)
        };

        function QB(a) {
            if (3 > a.Ed) {
                a.Ed = 3;
                for (var b = 0, c = a.a.length; b < c; b++) a.a[b](a);
                a.a = []
            }
        }

        function RB(a) {
            function b() {
                if (c && "GetVariable" in c) try {
                    d = c.GetVariable("$version")
                } catch (a) {
                    d = ""
                }
                d || 10 <= m ? (e && g && e.removeChild(g), k(d || "")) : (m++, O(b, 10))
            }
            var c, d, e, g;
            if (Oe) {
                try {
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (h) {
                    c = null
                }
                c || a.Bn("")
            } else e = document.getElementsByTagName("body")[0], g = document.createElement("object"), g.setAttribute("type", "application/x-shockwave-flash"), c = e.appendChild(g);
            var k = v(a.Bn, a),
                m = 0;
            O(b, 0)
        };

        function SB(a, b, c) {
            if ((a = J(a)) && b && c) {
                c = ff(c);
                var d = Db(c.attrs);
                d.tabindex = 0;
                var e = Db(c.params);
                e.flashvars = ni(c.args);
                if (Oe) {
                    d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                    e.movie = b;
                    b = document.createElement("object");
                    for (var g in d) b.setAttribute(g, d[g]);
                    for (g in e) d = document.createElement("param"), d.setAttribute("name", g), d.setAttribute("value", e[g]), b.appendChild(d)
                } else {
                    d.type = "application/x-shockwave-flash";
                    d.src = b;
                    b = document.createElement("embed");
                    b.setAttribute("name", d.id);
                    for (g in d) b.setAttribute(g,
                        d[g]);
                    for (g in e) b.setAttribute(g, e[g])
                }
                e = document.createElement("div");
                e.appendChild(b);
                a.innerHTML = e.innerHTML
            }
        }

        function TB(a, b) {
            a = J(a);
            b = ff(b);
            if (window != window.top) {
                var c = null;
                document.referrer && (c = document.referrer.substring(0, 128));
                b.args.framer = c
            }
            UB(function(c) {
                OB(c, b.minVersion) || Ge("IS_OPERA_MINI") ? (c = VB(b, c), SB(a, c, b)) : WB(a, b, c)
            })
        }

        function XB(a, b, c) {
            if (a && a.attrs && a.attrs.id) {
                a = ff(a);
                var d = !!b,
                    e = J(a.attrs.id),
                    g = e ? e.parentNode : null;
                if (e && g) {
                    if (window != window.top) {
                        var h = null;
                        if (document.referrer) {
                            var k = document.referrer.substring(0, 128);
                            qi(k) || (h = k)
                        } else h = "unknown";
                        h && (d = !0, a.args.framer = h)
                    }
                    UB(function(b) {
                        if (OB(b, a.minVersion) || Ge("IS_OPERA_MINI")) {
                            var h = VB(a, b),
                                k = ""; - 1 < navigator.userAgent.indexOf("Sony/COM2") || (k = e.getAttribute("src") || e.movie);
                            (k != h || d) && SB(g, h, a);
                            (Pb ? OB(b, 11, 2) : Ob ? OB(b, 11, 3) : PB(b)) || (b = J("flash10-promo-div"),
                                np.getInstance(), h = rp.Ls, k = void 0 !== op["f" + (Math.floor(h / 31) + 1)] ? op["f" + (Math.floor(h / 31) + 1)].toString() : null, h = !!(((null != k && /^[A-Fa-f0-9]+$/.test(k) ? parseInt(k, 16) : null) || 0) & 1 << h % 31), b && !h && Fl(b))
                        } else WB(g, a, b);
                        c && c()
                    })
                } else O(function() {
                    XB(a, b, c)
                }, 50)
            }
        }

        function WB(a, b, c) {
            0 == c.mb && b.fallback ? b.fallback() : 0 == c.mb && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + Ne("FLASH_UPGRADE", void 0, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="https://web.archive.org/web/20130831093956/http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
        }

        function VB(a, b) {
            return PB(b) && a.url || (-1 < navigator.userAgent.indexOf("Sony/COM2") && !OB(b, 9, 1, 58) ? !1 : !0) && a.urlV9As2 || a.urlV8 || a.url
        }

        function UB(a) {
            MB.getInstance().load(function(b) {
                np.getInstance().set("fv", b.getVersion().join("."));
                var c;
                c = [];
                for (var d in op) c.push(d + "=" + escape(op[d]));
                c = c.join("&");
                mp("PREF", c, 63072E3);
                a(b)
            })
        };

        function YB(a, b) {
            ZB(a, b)
        }

        function ZB(a, b) {
            var c = "js-" + za(a),
                d = document.getElementById(c),
                e = d && M(d, "loaded"),
                g = d && !e;
            e ? b && b() : (b && tp(c, b), g || (d = $B(a, c, function() {
                M(d, "loaded") || (se(d, "loaded", "true"), vp(c), wp(c))
            })))
        }

        function $B(a, b, c) {
            var d = document.createElement("script");
            d.id = b;
            d.onload = function() {
                c && setTimeout(c, 0)
            };
            d.onreadystatechange = function() {
                switch (d.readyState) {
                    case "loaded":
                    case "complete":
                        d.onload()
                }
            };
            d.src = a;
            a = document.getElementsByTagName("head")[0] || document.body;
            a.insertBefore(d, a.firstChild);
            return d
        };

        function aC(a) {
            var b = "css-" + za(a),
                c = document.getElementById(b),
                d = c && M(c, "loaded");
            d || c && !d || (c = bC(a, b, function() {
                M(c, "loaded") || (se(c, "loaded", "true"), vp(b), wp(b))
            }))
        }

        function bC(a, b, c) {
            var d = document.createElement("link");
            d.id = b;
            d.rel = "stylesheet";
            d.onload = function() {
                c && setTimeout(c, 0)
            };
            d.href = a;
            (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
            return d
        };
        var cC = {};

        function dC(a, b) {
            a = J(a);
            if (!a) return null;
            b = ff(b);
            var c = "player" + ja(a),
                d = cC[c];
            d || (d = new eC(a, c), cC[c] = d, vp("player-added", d.b));
            O(function() {
                var a = d;
                if (!a.W()) {
                    fC(a, b);
                    var c = void 0;
                    Ge("PLAYER_FLIP") || (c = gC(a) || void 0);
                    a.Ig(c);
                    a.k && hC(a)
                }
            }, 0);
            return d.b
        }

        function iC() {
            for (var a in cC) {
                var b = cC[a];
                b && b.cancel()
            }
        }

        function jC(a) {
            if (a = J(a)) {
                a = "player" + ja(a);
                var b = cC[a];
                b && b.dispose();
                cC[a] = null
            }
        }

        function kC(a) {
            a = J(a);
            if (!a) return null;
            a = "player" + ja(a);
            return (a = cC[a]) ? a.b : null
        }

        function eC(a, b) {
            this.Va = a;
            this.F = b;
            this.k = !1;
            this.b = {};
            lC(this);
            this.A = this.o = null;
            this.C = new Cg;
            R(this, this.C);
            this.j = {};
            this.i = this.H = this.L = this.g = this.a = null;
            this.J = !1;
            this.B = {};
            this.T = ["onReady"];
            this.O = 0
        }
        A(eC, kf);

        function fC(a, b) {
            a.a = b.clone();
            a.g = a.a.attrs.id || a.g;
            "video-player" == a.g && (a.g = a.F, a.a.attrs.id = a.F);
            a.Va.id == a.g && (a.g = a.g + "-player", a.a.attrs.id = a.g);
            a.L = a.a.args.el;
            var c;
            (c = a.a.args.eurl) || (c = document.location.toString(), c = Pi(c) ? document.referrer && document.referrer.substring(0, 128) || "unknown" : c);
            a.a.args.eurl = c;
            a.a.args.enablejsapi = "1";
            a.a.args.playerapiid = a.F;
            Ej() && (mC() || a.a.assets.js) || (a.a.args.html5_unavailable = "1", a.a.disable.html5 = !0);
            a.a.fallback = v(a.bi, a);
            a.H || (a.H = nC(a, a.a.args.jsapicallback ||
                "onYouTubePlayerReady"));
            a.a.args.jsapicallback = null;
            (c = a.a.attrs.width) && ed(a.Va, Number(c) || c);
            if (c = a.a.attrs.height) a.Va.style.height = Yc(Number(c) || c, !0);
            c = a.Va;
            u("overflow") ? Uc(c, "hidden", "overflow") : wb("overflow", oa(Uc, c));
            a.a.args.has_mdx_screens && Gz()
        }

        function hC(a) {
            a.a.loaded || (a.a.loaded = !0, "0" != a.a.args.autoplay ? a.b.loadVideoByPlayerVars(a.a.args) : a.b.cueVideoByPlayerVars(a.a.args))
        }
        f = eC.prototype;
        f.Xh = function(a) {
            var b = Kw();
            if (jw(b, a) && "html5" != this.i) {
                var b = this.a.args.video_id,
                    c = this.b.getCurrentTime();
                this.b.stopVideo();
                var d = Hz.getInstance(),
                    c = Sz(c),
                    e = {
                        key: a,
                        videoId: b,
                        currentTime: c
                    };
                d.log_("Setting the delayed connect data: " + hb(e));
                !Ez(d.b, a) && (a = Fz(d.b, a)) && (d = iw(), e.pairingCode = d, az(a.id, d, b, c));
                pg("yt-remote-delayed-connect-key", e);
                this.Ig("html5")
            }
        };
        f.bi = function(a) {
            var b = J(this.g);
            a = ff(a || this.a);
            var c = !0;
            if ("flash" == this.i) a.disable.flash = !0, "html5" == gC(this) && (c = !1);
            else if ("html5" == this.i) {
                var d = J(this.g);
                d.stopVideo && d.stopVideo();
                a.disable.flash ? c = !1 : (a.args.autoplay = 1, a.args.html5_unavailable = "1", a.disable.html5 = !0, b.logFallback())
            }
            c && (fC(this, a), this.Ig())
        };
        f.Ig = function(a) {
            if (!this.W()) {
                if (!a) {
                    a = !!this.a.disable.html5;
                    var b = !!this.a.disable.flash;
                    a = !this.a.html5 && !b || a ? b ? "unsupported" : "flash" : "html5"
                }("flash" == a ? this.ir : "html5" == a ? this.jr : this.kr).call(this)
            }
        };

        function mC() {
            return q("yt.player.Application")
        }
        f.jr = function() {
            if (!this.J) {
                var a = this.a.clone();
                if ("html5" == gC(this)) this.i = "html5", this.k || this.pf();
                else {
                    oC(this);
                    this.i = "html5";
                    this.a.loaded = !0;
                    var b = function() {
                        new(mC())(this.Va, a);
                        this.pf()
                    };
                    this.J = !0;
                    mC() ? b.call(this) : (YB(this.a.assets.js, v(b, this)), aC(this.a.assets.css))
                }
            }
        };
        f.ir = function() {
            this.i = "flash";
            var a = this.a.clone();
            a.attrs.width = a.attrs.width || "100%";
            a.attrs.height = a.attrs.height || "100%";
            "flash" == gC(this) ? this.k || XB(a, !1, v(this.pf, this)) : (this.a.loaded = !0, TB(this.Va, a), this.pf())
        };
        f.pf = function() {
            var a = J(this.g);
            if (a && a.getApiInterface)
                if (this.J = !1, a.isNotServable && a.isNotServable()) this.bi(a.getUpdatedConfigurationData());
                else {
                    lC(this);
                    this.k = !0;
                    var a = J(this.g),
                        b = a.getApiInterface();
                    a.addEventListener && (this.o = v(a.addEventListener, a));
                    a.removeEventListener && (this.A = v(a.removeEventListener, a));
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        this.b[d] || (this.b[d] = v(a[d], a))
                    }
                    for (var e in this.j) this.o(e, this.j[e]);
                    this.Le("onVolumeChange", v(this.gq, this));
                    this.Le("onError", v(this.fq,
                        this));
                    this.Le("onTabOrderChange", v(this.cq, this));
                    this.Le("onNavigate", v(this.dq, this));
                    "flash" == this.i && this.Le("onRemoteReceiverSelected", v(this.Xh, this));
                    e = Hz.getInstance();
                    e.b.D("onlineReceiverChange", this.Hk, this);
                    e.b.D("connectToReceiver", this.Xh, this);
                    hC(this);
                    this.H && this.H(this.b);
                    this.C.u("onReady", this.b);
                    vp("player-ready", this.b)
                }
            else this.O = O(v(this.pf, this), 50)
        };

        function lC(a) {
            a.k = !1;
            if (a.A)
                for (var b in a.j) a.A(b, a.j[b]);
            a.o = null;
            a.A = null;
            for (var c in a.b) a.b[c] = null;
            a.b.addEventListener = v(a.Le, a);
            a.b.removeEventListener = v(a.gr, a);
            a.b.destroy = v(a.br, a);
            a.b.getPlayerType = v(a.dr, a);
            a.b.writePlayer = v(a.Ig, a);
            a.b.isReady = v(a.er, a)
        }
        f.er = function() {
            return this.k
        };
        f.Hk = function() {
            this.b.updateRemoteReceivers && this.b.updateRemoteReceivers(Kw())
        };
        f.Le = function(a, b) {
            var c = nC(this, b);
            if (c) {
                if (!E(this.T, a) && !this.j[a]) {
                    var d = pC(this, a);
                    this.o && this.o(a, d)
                }
                this.C.D(a, c);
                "onReady" == a && this.k && O(oa(c, this.b), 0)
            }
        };
        f.gr = function(a, b) {
            var c = nC(this, b);
            c && this.C.Q(a, c)
        };

        function nC(a, b) {
            var c = b;
            if ("string" == typeof b) {
                if (a.B[b]) return a.B[b];
                c = function() {
                    var a = q(b);
                    a && a.apply(l, arguments)
                };
                a.B[b] = c
            }
            return c ? c : null
        }

        function pC(a, b) {
            var c = "ytPlayer" + b + a.F;
            a.j[b] = c;
            l[c] = function(c) {
                O(function() {
                    a.W() || a.C.u(b, c)
                }, 0)
            };
            return c
        }
        f.cq = function(a) {
            a = a ? Lc : Kc;
            for (var b = a(document.activeElement); b && (1 != b.nodeType || (b.focus(), b != document.activeElement));) b = a(b)
        };
        f.dq = function(a) {
            var b = Ge("EVENT_ID");
            if (b) {
                var c = a.url;
                a = {
                    ei: b,
                    feature: a.feature
                };
                b = Kd(c);
                if (b == Kd(window.location.href) || !b && 0 == c.lastIndexOf("/", 0))
                    if (c = Id(c), c = Gd(null, null, c[5], c[6], c[7]), b = c.indexOf("#"), c = 0 > b ? c : c.substr(0, b)) c = "s_tempdata-" + za(c), a = a ? ni(a) : "", mp(c, a, 5)
            }
        };
        f.gq = function(a) {
            xg(a)
        };
        f.fq = function(a) {
            var b = J(this.g);
            5 == a && this.bi(b.getUpdatedConfigurationData())
        };
        f.kr = function() {
            oC(this);
            this.i = "unsupported";
            var a = Ne("PLAYER_FALLBACK_OVERRIDE");
            if (!a) {
                var a = Ne("PLAYER_FALLBACK", void 0, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="https://web.archive.org/web/20130831093956/http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'),
                    b = navigator.userAgent.match(/Version\/(\d).*Safari/);
                b && 5 <= parseInt(b[1], 10) && (a = Ne("QUICKTIME_FALLBACK", void 0, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="https://web.archive.org/web/20130831093956/http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="https://web.archive.org/web/20130831093956/http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'))
            }
            var b =
                new fB,
                c = "embedded" == this.L;
            Ve(b.b);
            b.b = [];
            ol(b.template, "content", new Yq(a));
            if (c)
                for (a = b.element.getElementsByTagName("a"), c = 0; c < a.length; c++) a[c].setAttribute("target", "_blank");
            b.ub(this.Va)
        };
        f.dr = function() {
            return this.i || gC(this)
        };

        function gC(a) {
            return (a = J(a.g)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null
        }

        function oC(a) {
            a.cancel();
            lC(a);
            a.i = null;
            var b = J(a.g);
            b && b.destroy && b.destroy();
            Hc(a.Va)
        }
        f.br = function() {
            qC(this.Va)
        };
        f.cancel = function() {
            this.a.assets.js && wp("js-" + za(this.a.assets.js));
            P(this.O)
        };
        f.I = function() {
            oC(this);
            this.B = null;
            for (var a in this.j) l[this.j[a]] = null;
            this.b = null;
            this.a && (this.a = this.a.fallback = null);
            a = Hz.getInstance();
            a.b.Q("onlineReceiverChange", this.Hk, this);
            a.b.Q("connectToReceiver", this.Xh, this);
            eC.G.I.call(this)
        };
        var rC = q("yt.player.embed") || dC;
        z("yt.player.embed", rC);
        var qC = q("yt.player.destroy") || jC;
        z("yt.player.destroy", qC);
        var sC = q("yt.player.cancelAll") || iC;
        z("yt.player.cancelAll", sC);
        var tC = q("yt.player.getPlayerByElement") || kC;
        z("yt.player.getPlayerByElement", tC);
        z("yt.player.embed", rC);
    })();


}
