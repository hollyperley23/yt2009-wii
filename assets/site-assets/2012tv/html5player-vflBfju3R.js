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
        function e(a) {
            throw a;
        }
        var h = void 0,
            j = !0,
            k = null,
            l = !1,
            n, p = this;

        function r(a) {
            for (var a = a.split("."), b = p, c; c = a.shift();)
                if (b[c] != k) b = b[c];
                else return k;
            return b
        }

        function aa() {}

        function ba(a) {
            a.getInstance = function() {
                return a.Sm ? a.Sm : a.Sm = new a
            }
        }

        function ca(a) {
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

        function da(a) {
            return a !== h
        }

        function ea(a) {
            return a != k
        }

        function s(a) {
            return "array" == ca(a)
        }

        function fa(a) {
            var b = ca(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }

        function u(a) {
            return "string" == typeof a
        }

        function ga(a) {
            return "function" == ca(a)
        }

        function ha(a) {
            var b = typeof a;
            return "object" == b && a != k || "function" == b
        }

        function ia(a) {
            return a[ja] || (a[ja] = ++ka)
        }
        var ja = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
            ka = 0;

        function la(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function ma(a, b, c) {
            a || e(Error());
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

        function w(a, b, c) {
            w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
            return w.apply(k, arguments)
        }

        function na(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = Array.prototype.slice.call(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        }

        function x(a, b) {
            for (var c in b) a[c] = b[c]
        }
        var y = Date.now || function() {
            return +new Date
        };

        function oa(a, b) {
            var c = a.split("."),
                d = p;
            !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
            for (var f; c.length && (f = c.shift());) !c.length && da(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
        }

        function z(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.s = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        }
        Function.prototype.bind = Function.prototype.bind || function(a, b) {
            if (1 < arguments.length) {
                var c = Array.prototype.slice.call(arguments, 1);
                c.unshift(this, a);
                return w.apply(k, c)
            }
            return w(this, a)
        };

        function pa(a) {
            Error.captureStackTrace ? Error.captureStackTrace(this, pa) : this.stack = Error().stack || "";
            a && (this.message = "" + a)
        }
        z(pa, Error);
        pa.prototype.name = "CustomError";

        function qa(a, b) {
            for (var c = 1; c < arguments.length; c++) var d = ("" + arguments[c]).replace(/\$/g, "$$$$"),
                a = a.replace(/\%s/, d);
            return a
        }

        function ra(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }

        function sa(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        }

        function ta(a) {
            if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;"));
            return a
        }
        var va = /&/g,
            wa = /</g,
            xa = />/g,
            Aa = /\"/g,
            ua = /[&<>\"]/;

        function Ba(a) {
            var b = Number(a);
            return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
        };
        var A = Array.prototype,
            Ca = A.indexOf ? function(a, b, c) {
                return A.indexOf.call(a, b, c)
            } : function(a, b, c) {
                c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
                if (u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
                for (; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            B = A.forEach ? function(a, b, c) {
                A.forEach.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = u(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
            },
            Da = A.filter ? function(a, b, c) {
                return A.filter.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = [], g = 0, i = u(a) ? a.split("") :
                        a, m = 0; m < d; m++)
                    if (m in i) {
                        var o = i[m];
                        b.call(c, o, m, a) && (f[g++] = o)
                    }
                return f
            },
            Ea = A.map ? function(a, b, c) {
                return A.map.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = Array(d), g = u(a) ? a.split("") : a, i = 0; i < d; i++) i in g && (f[i] = b.call(c, g[i], i, a));
                return f
            },
            Fa = A.some ? function(a, b, c) {
                return A.some.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, f = u(a) ? a.split("") : a, g = 0; g < d; g++)
                    if (g in f && b.call(c, f[g], g, a)) return j;
                return l
            };

        function Ga(a, b) {
            var c;
            a: {
                c = a.length;
                for (var d = u(a) ? a.split("") : a, f = 0; f < c; f++)
                    if (f in d && b.call(h, d[f], f, a)) {
                        c = f;
                        break a
                    }
                c = -1
            }
            return 0 > c ? k : u(a) ? a.charAt(c) : a[c]
        }

        function Ha(a, b) {
            return 0 <= Ca(a, b)
        }

        function Ia(a) {
            if (!s(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        }

        function Ja(a, b) {
            var c = Ca(a, b);
            0 <= c && A.splice.call(a, c, 1)
        }

        function Ka(a) {
            return A.concat.apply(A, arguments)
        }

        function La(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }

        function Ma(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c],
                    f;
                if (s(d) || (f = fa(d)) && d.hasOwnProperty("callee")) a.push.apply(a, d);
                else if (f)
                    for (var g = a.length, i = d.length, m = 0; m < i; m++) a[g + m] = d[m];
                else a.push(d)
            }
        }

        function Na(a, b, c, d) {
            A.splice.apply(a, Oa(arguments, 1))
        }

        function Oa(a, b, c) {
            return 2 >= arguments.length ? A.slice.call(a, b) : A.slice.call(a, b, c)
        }

        function Pa(a, b) {
            A.sort.call(a, b || Qa)
        }

        function Qa(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
        var Ra = "StopIteration" in p ? p.StopIteration : Error("StopIteration");

        function Sa() {}
        Sa.prototype.a = function() {
            e(Ra)
        };
        Sa.prototype.kc = function() {
            return this
        };

        function Ta(a) {
            if (a instanceof Sa) return a;
            if ("function" == typeof a.kc) return a.kc(l);
            if (fa(a)) {
                var b = 0,
                    c = new Sa;
                c.a = function() {
                    for (;;) {
                        b >= a.length && e(Ra);
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            e(Error("Not implemented"))
        }

        function Ua(a, b) {
            if (fa(a)) try {
                B(a, b, h)
            } catch (c) {
                c !== Ra && e(c)
            } else {
                a = Ta(a);
                try {
                    for (;;) b.call(h, a.a(), h, a)
                } catch (d) {
                    d !== Ra && e(d)
                }
            }
        };

        function Va(a, b) {
            for (var c in a) b.call(h, a[c], c, a)
        }

        function Wa(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }

        function Xa(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }

        function Ya(a, b) {
            for (var c in a)
                if (b.call(h, a[c], c, a)) return c
        }

        function Za(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        }

        function $a(a) {
            var b = ca(a);
            if ("object" == b || "array" == b) {
                if (a.X) return a.X();
                var b = "array" == b ? [] : {},
                    c;
                for (c in a) b[c] = $a(a[c]);
                return b
            }
            return a
        }
        var ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function bb(a, b) {
            for (var c, d, f = 1; f < arguments.length; f++) {
                d = arguments[f];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < ab.length; g++) c = ab[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };

        function cb(a) {
            if ("function" == typeof a.bb) return a.bb();
            if (u(a)) return a.split("");
            if (fa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Wa(a)
        };

        function db(a, b) {
            this.b = {};
            this.a = [];
            var c = arguments.length;
            if (1 < c) {
                c % 2 && e(Error("Uneven number of arguments"));
                for (var d = 0; d < c; d += 2) eb(this, arguments[d], arguments[d + 1])
            } else if (a) {
                a instanceof db ? (c = a.jc(), d = a.bb()) : (c = Xa(a), d = Wa(a));
                for (var f = 0; f < c.length; f++) eb(this, c[f], d[f])
            }
        }
        n = db.prototype;
        n.D = 0;
        n.Fe = 0;
        n.Hb = function() {
            return this.D
        };
        n.bb = function() {
            fb(this);
            for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
            return a
        };
        n.jc = function() {
            fb(this);
            return this.a.concat()
        };
        n.equals = function(a, b) {
            if (this === a) return j;
            if (this.D != a.Hb()) return l;
            var c = b || gb;
            fb(this);
            for (var d, f = 0; d = this.a[f]; f++)
                if (!c(this.get(d), a.get(d))) return l;
            return j
        };

        function gb(a, b) {
            return a === b
        }
        n.isEmpty = function() {
            return 0 == this.D
        };
        n.clear = function() {
            this.b = {};
            this.Fe = this.D = this.a.length = 0
        };

        function fb(a) {
            if (a.D != a.a.length) {
                for (var b = 0, c = 0; b < a.a.length;) {
                    var d = a.a[b];
                    hb(a.b, d) && (a.a[c++] = d);
                    b++
                }
                a.a.length = c
            }
            if (a.D != a.a.length) {
                for (var f = {}, c = b = 0; b < a.a.length;) d = a.a[b], hb(f, d) || (a.a[c++] = d, f[d] = 1), b++;
                a.a.length = c
            }
        }
        n.get = function(a, b) {
            return hb(this.b, a) ? this.b[a] : b
        };

        function eb(a, b, c) {
            hb(a.b, b) || (a.D++, a.a.push(b), a.Fe++);
            a.b[b] = c
        }
        n.X = function() {
            return new db(this)
        };
        n.kc = function(a) {
            fb(this);
            var b = 0,
                c = this.a,
                d = this.b,
                f = this.Fe,
                g = this,
                i = new Sa;
            i.a = function() {
                for (;;) {
                    f != g.Fe && e(Error("The map has changed since the iterator was created"));
                    b >= c.length && e(Ra);
                    var i = c[b++];
                    return a ? i : d[i]
                }
            };
            return i
        };

        function hb(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        var ib, jb, kb, lb, mb, nb, ob;

        function pb() {
            return p.navigator ? p.navigator.userAgent : k
        }

        function qb() {
            return p.navigator
        }
        mb = lb = kb = jb = ib = l;
        var rb;
        if (rb = pb()) {
            var sb = qb();
            ib = 0 == rb.indexOf("Opera");
            jb = !ib && -1 != rb.indexOf("MSIE");
            lb = (kb = !ib && -1 != rb.indexOf("WebKit")) && -1 != rb.indexOf("Mobile");
            mb = !ib && !kb && "Gecko" == sb.product
        }
        var tb = ib,
            C = jb,
            ub = mb,
            vb = kb,
            wb = lb,
            xb = qb(),
            yb = xb && xb.platform || "";
        nb = -1 != yb.indexOf("Mac");
        ob = -1 != yb.indexOf("Win");
        var zb = !!qb() && -1 != (qb().appVersion || "").indexOf("X11"),
            Ab;
        a: {
            var Bb = "",
                Cb;
            if (tb && p.opera) var Db = p.opera.version,
                Bb = "function" == typeof Db ? Db() : Db;
            else if (ub ? Cb = /rv\:([^\);]+)(\)|;)/ : C ? Cb = /MSIE\s+([^\);]+)(\)|;)/ : vb && (Cb = /WebKit\/(\S+)/), Cb) var Eb = Cb.exec(pb()),
                Bb = Eb ? Eb[1] : "";
            if (C) {
                var Fb, Gb = p.document;
                Fb = Gb ? Gb.documentMode : h;
                if (Fb > parseFloat(Bb)) {
                    Ab = "" + Fb;
                    break a
                }
            }
            Ab = Bb
        }
        var Hb = Ab,
            Ib = {};

        function E(a) {
            var b;
            if (!(b = Ib[a])) {
                b = 0;
                for (var c = ra("" + Hb).split("."), d = ra("" + a).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                    var i = c[g] || "",
                        m = d[g] || "",
                        o = RegExp("(\\d*)(\\D*)", "g"),
                        q = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var v = o.exec(i) || ["", "", ""],
                            t = q.exec(m) || ["", "", ""];
                        if (0 == v[0].length && 0 == t[0].length) break;
                        b = ((0 == v[1].length ? 0 : parseInt(v[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == v[1].length ? 0 : parseInt(v[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == v[2].length) < (0 ==
                            t[2].length) ? -1 : (0 == v[2].length) > (0 == t[2].length) ? 1 : 0) || (v[2] < t[2] ? -1 : v[2] > t[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = Ib[a] = 0 <= b
            }
            return b
        }
        var Jb = {};

        function Kb(a) {
            return Jb[a] || (Jb[a] = C && !!document.documentMode && document.documentMode >= a)
        };

        function Lb(a, b, c) {
            return Math.min(Math.max(a, b), c)
        };

        function F(a, b) {
            this.x = da(a) ? a : 0;
            this.y = da(b) ? b : 0
        }
        F.prototype.X = function() {
            return new F(this.x, this.y)
        };

        function Mb(a, b) {
            var c = a.x - b.x,
                d = a.y - b.y;
            return Math.sqrt(c * c + d * d)
        };

        function Nb(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        Nb.prototype.X = function() {
            return new Nb(this.top, this.right, this.bottom, this.left)
        };
        Nb.prototype.contains = function(a) {
            return !this || !a ? l : a instanceof Nb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
        };

        function G(a, b) {
            this.width = a;
            this.height = b
        }

        function Ob(a, b) {
            return a == b ? j : !a || !b ? l : a.width == b.width && a.height == b.height
        }
        n = G.prototype;
        n.X = function() {
            return new G(this.width, this.height)
        };
        n.isEmpty = function() {
            return !(this.width * this.height)
        };
        n.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        n.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        n.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };

        function Pb(a, b) {
            a.width *= b;
            a.height *= b;
            return a
        };

        function Qb(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        }
        Qb.prototype.X = function() {
            return new Qb(this.left, this.top, this.width, this.height)
        };
        Qb.prototype.contains = function(a) {
            return a instanceof Qb ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
        };

        function Rb() {}
        Rb.prototype.C = l;
        Rb.prototype.Ja = function() {
            this.C || (this.C = j, this.G())
        };
        Rb.prototype.G = function() {
            this.ce && Sb.apply(k, this.ce);
            if (this.Wa)
                for (; this.Wa.length;) this.Wa.shift()()
        };

        function Tb(a) {
            a && "function" == typeof a.Ja && a.Ja()
        }

        function Sb(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                fa(d) ? Sb.apply(k, d) : Tb(d)
            }
        };

        function I() {
            this.a = [];
            this.Sa = {}
        }
        z(I, Rb);
        n = I.prototype;
        n.$l = 1;
        n.dg = 0;
        n.o = function(a, b, c) {
            var d = this.Sa[a];
            d || (d = this.Sa[a] = []);
            var f = this.$l;
            this.a[f] = a;
            this.a[f + 1] = b;
            this.a[f + 2] = c;
            this.$l = f + 3;
            d.push(f);
            return f
        };
        n.O = function(a, b, c) {
            if (a = this.Sa[a]) {
                var d = this.a;
                if (a = Ga(a, function(a) {
                        return d[a + 1] == b && d[a + 2] == c
                    })) return this.cg(a)
            }
            return l
        };
        n.cg = function(a) {
            if (0 != this.dg) return this.b || (this.b = []), this.b.push(a), l;
            var b = this.a[a];
            if (b) {
                var c = this.Sa[b];
                c && Ja(c, a);
                delete this.a[a];
                delete this.a[a + 1];
                delete this.a[a + 2]
            }
            return !!b
        };
        n.j = function(a, b) {
            var c = this.Sa[a];
            if (c) {
                this.dg++;
                for (var d = Oa(arguments, 1), f = 0, g = c.length; f < g; f++) {
                    var i = c[f];
                    this.a[i + 1].apply(this.a[i + 2], d)
                }
                this.dg--;
                if (this.b && 0 == this.dg)
                    for (; c = this.b.pop();) this.cg(c);
                return 0 != f
            }
            return l
        };
        n.clear = function(a) {
            if (a) {
                var b = this.Sa[a];
                b && (B(b, this.cg, this), delete this.Sa[a])
            } else this.a.length = 0, this.Sa = {}
        };
        n.Hb = function(a) {
            if (a) {
                var b = this.Sa[a];
                return b ? b.length : 0
            }
            a = 0;
            for (b in this.Sa) a += this.Hb(b);
            return a
        };
        n.G = function() {
            I.s.G.call(this);
            delete this.a;
            delete this.Sa;
            delete this.b
        };

        function Ub(a) {
            Ub[" "](a);
            return a
        }
        Ub[" "] = aa;
        !C || Kb(9);
        var Vb = !C || Kb(9),
            Wb = C && !E("8");
        !vb || E("528");
        ub && E("1.9b") || C && E("8") || tb && E("9.5") || vb && E("528");
        ub && !E("8") || C && E("9");

        function Xb(a, b) {
            this.type = a;
            this.currentTarget = this.target = b
        }
        z(Xb, Rb);
        n = Xb.prototype;
        n.G = function() {
            delete this.type;
            delete this.target;
            delete this.currentTarget
        };
        n.Oc = l;
        n.Fg = j;
        n.stopPropagation = function() {
            this.Oc = j
        };
        n.preventDefault = function() {
            this.Fg = l
        };

        function Yb(a, b) {
            a && Zb(this, a, b)
        }
        z(Yb, Xb);
        n = Yb.prototype;
        n.target = k;
        n.relatedTarget = k;
        n.clientX = 0;
        n.clientY = 0;
        n.Xq = 0;
        n.Wq = l;
        n.Gb = k;

        function Zb(a, b, c) {
            var d = a.type = b.type;
            Xb.call(a, d);
            a.target = b.target || b.srcElement;
            a.currentTarget = c;
            if (c = b.relatedTarget) {
                if (ub) {
                    var f;
                    a: {
                        try {
                            Ub(c.nodeName);
                            f = j;
                            break a
                        } catch (g) {}
                        f = l
                    }
                    f || (c = k)
                }
            } else "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
            a.relatedTarget = c;
            a.clientX = b.clientX !== h ? b.clientX : b.pageX;
            a.clientY = b.clientY !== h ? b.clientY : b.pageY;
            a.Xq = b.keyCode || 0;
            a.Wq = b.ctrlKey;
            a.Gb = b;
            b.defaultPrevented && a.preventDefault();
            delete a.Oc
        }
        n.stopPropagation = function() {
            Yb.s.stopPropagation.call(this);
            this.Gb.stopPropagation ? this.Gb.stopPropagation() : this.Gb.cancelBubble = j
        };
        n.preventDefault = function() {
            Yb.s.preventDefault.call(this);
            var a = this.Gb;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = l, Wb) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {}
        };
        n.Wp = function() {
            return this.Gb
        };
        n.G = function() {
            Yb.s.G.call(this);
            this.relatedTarget = this.currentTarget = this.target = this.Gb = k
        };

        function $b() {}
        var ac = 0;
        $b.prototype.key = 0;
        $b.prototype.Dc = l;
        $b.prototype.a = l;
        $b.prototype.handleEvent = function(a) {
            return this.b ? this.Cd.call(this.Rf || this.src, a) : this.Cd.handleEvent.call(this.Cd, a)
        };
        var bc = {},
            cc = {},
            dc = {},
            ec = {};

        function fc(a, b, c, d, f) {
            if (b) {
                if (s(b)) {
                    for (var g = 0; g < b.length; g++) fc(a, b[g], c, d, f);
                    return k
                }
                var d = !!d,
                    i = cc;
                b in i || (i[b] = {
                    D: 0,
                    Oa: 0
                });
                i = i[b];
                d in i || (i[d] = {
                    D: 0,
                    Oa: 0
                }, i.D++);
                var i = i[d],
                    m = ia(a),
                    o;
                i.Oa++;
                if (i[m]) {
                    o = i[m];
                    for (g = 0; g < o.length; g++)
                        if (i = o[g], i.Cd == c && i.Rf == f) {
                            if (i.Dc) break;
                            return o[g].key
                        }
                } else o = i[m] = [], i.D++;
                var q = gc,
                    v = Vb ? function(a) {
                        return q.call(v.src, v.key, a)
                    } : function(a) {
                        a = q.call(v.src, v.key, a);
                        if (!a) return a
                    },
                    g = v;
                g.src = a;
                var t = i = new $b;
                ga(c) ? t.b = j : c && c.handleEvent && ga(c.handleEvent) ?
                    t.b = l : e(Error("Invalid listener argument"));
                t.Cd = c;
                t.e = g;
                t.src = a;
                t.type = b;
                t.capture = !!d;
                t.Rf = f;
                t.a = l;
                t.key = ++ac;
                t.Dc = l;
                c = i.key;
                g.key = c;
                o.push(i);
                bc[c] = i;
                dc[m] || (dc[m] = []);
                dc[m].push(i);
                a.addEventListener ? (a == p || !a.fi) && a.addEventListener(b, g, d) : a.attachEvent(b in ec ? ec[b] : ec[b] = "on" + b, g);
                return c
            }
            e(Error("Invalid event type"))
        }

        function hc(a, b, c, d, f) {
            if (s(b))
                for (var g = 0; g < b.length; g++) hc(a, b[g], c, d, f);
            else if (d = !!d, a = ic(a, b, d))
                for (g = 0; g < a.length; g++)
                    if (a[g].Cd == c && a[g].capture == d && a[g].Rf == f) {
                        jc(a[g].key);
                        break
                    }
        }

        function jc(a) {
            if (!bc[a]) return l;
            var b = bc[a];
            if (b.Dc) return l;
            var c = b.src,
                d = b.type,
                f = b.e,
                g = b.capture;
            c.removeEventListener ? (c == p || !c.fi) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in ec ? ec[d] : ec[d] = "on" + d, f);
            c = ia(c);
            f = cc[d][g][c];
            if (dc[c]) {
                var i = dc[c];
                Ja(i, b);
                0 == i.length && delete dc[c]
            }
            b.Dc = j;
            f.im = j;
            kc(d, g, c, f);
            delete bc[a];
            return j
        }

        function kc(a, b, c, d) {
            if (!d.zb && d.im) {
                for (var f = 0, g = 0; f < d.length; f++) d[f].Dc ? d[f].e.src = k : (f != g && (d[g] = d[f]), g++);
                d.length = g;
                d.im = l;
                0 == g && (delete cc[a][b][c], cc[a][b].D--, 0 == cc[a][b].D && (delete cc[a][b], cc[a].D--), 0 == cc[a].D && delete cc[a])
            }
        }

        function lc(a) {
            var b, c = 0,
                d = b == k;
            b = !!b;
            if (a == k) Va(dc, function(a) {
                for (var f = a.length - 1; 0 <= f; f--) {
                    var g = a[f];
                    if (d || b == g.capture) jc(g.key), c++
                }
            });
            else if (a = ia(a), dc[a])
                for (var a = dc[a], f = a.length - 1; 0 <= f; f--) {
                    var g = a[f];
                    if (d || b == g.capture) jc(g.key), c++
                }
        }

        function ic(a, b, c) {
            var d = cc;
            return b in d && (d = d[b], c in d && (d = d[c], a = ia(a), d[a])) ? d[a] : k
        }

        function mc(a, b, c, d, f) {
            var g = 1,
                b = ia(b);
            if (a[b]) {
                a.Oa--;
                a = a[b];
                a.zb ? a.zb++ : a.zb = 1;
                try {
                    for (var i = a.length, m = 0; m < i; m++) {
                        var o = a[m];
                        o && !o.Dc && (g &= nc(o, f) !== l)
                    }
                } finally {
                    a.zb--, kc(c, d, b, a)
                }
            }
            return Boolean(g)
        }

        function nc(a, b) {
            a.a && jc(a.key);
            return a.handleEvent(b)
        }

        function gc(a, b) {
            if (!bc[a]) return j;
            var c = bc[a],
                d = c.type,
                f = cc;
            if (!(d in f)) return j;
            var f = f[d],
                g, i;
            if (!Vb) {
                g = b || r("window.event");
                var m = j in f,
                    o = l in f;
                if (m) {
                    if (0 > g.keyCode || g.returnValue != h) return j;
                    a: {
                        var q = l;
                        if (0 == g.keyCode) try {
                            g.keyCode = -1;
                            break a
                        } catch (v) {
                            q = j
                        }
                        if (q || g.returnValue == h) g.returnValue = j
                    }
                }
                q = new Yb;
                Zb(q, g, this);
                g = j;
                try {
                    if (m) {
                        for (var t = [], H = q.currentTarget; H; H = H.parentNode) t.push(H);
                        i = f[j];
                        i.Oa = i.D;
                        for (var Z = t.length - 1; !q.Oc && 0 <= Z && i.Oa; Z--) q.currentTarget = t[Z], g &= mc(i, t[Z], d, j, q);
                        if (o) {
                            i =
                                f[l];
                            i.Oa = i.D;
                            for (Z = 0; !q.Oc && Z < t.length && i.Oa; Z++) q.currentTarget = t[Z], g &= mc(i, t[Z], d, l, q)
                        }
                    } else g = nc(c, q)
                } finally {
                    t && (t.length = 0), q.Ja()
                }
                return g
            }
            d = new Yb(b, this);
            try {
                g = nc(c, d)
            } finally {
                d.Ja()
            }
            return g
        };

        function oc() {}
        z(oc, Rb);
        n = oc.prototype;
        n.fi = j;
        n.yg = k;
        n.gj = function(a) {
            this.yg = a
        };
        n.addEventListener = function(a, b, c, d) {
            fc(this, a, b, c, d)
        };
        n.removeEventListener = function(a, b, c, d) {
            hc(this, a, b, c, d)
        };
        n.dispatchEvent = function(a) {
            var b = a.type || a,
                c = cc;
            if (b in c) {
                if (u(a)) a = new Xb(a, this);
                else if (a instanceof Xb) a.target = a.target || this;
                else {
                    var d = a,
                        a = new Xb(b, this);
                    bb(a, d)
                }
                var d = 1,
                    f, c = c[b],
                    b = j in c,
                    g;
                if (b) {
                    f = [];
                    for (g = this; g; g = g.yg) f.push(g);
                    g = c[j];
                    g.Oa = g.D;
                    for (var i = f.length - 1; !a.Oc && 0 <= i && g.Oa; i--) a.currentTarget = f[i], d &= mc(g, f[i], a.type, j, a) && a.Fg != l
                }
                if (l in c)
                    if (g = c[l], g.Oa = g.D, b)
                        for (i = 0; !a.Oc && i < f.length && g.Oa; i++) a.currentTarget = f[i], d &= mc(g, f[i], a.type, l, a) && a.Fg != l;
                    else
                        for (f = this; !a.Oc && f &&
                            g.Oa; f = f.yg) a.currentTarget = f, d &= mc(g, f, a.type, l, a) && a.Fg != l;
                a = Boolean(d)
            } else a = j;
            return a
        };
        n.G = function() {
            oc.s.G.call(this);
            lc(this);
            this.yg = k
        };

        function pc(a, b) {
            this.b = a || 1;
            this.i = b || qc;
            this.k = w(this.u, this);
            this.n = y()
        }
        z(pc, oc);
        pc.prototype.e = l;
        var qc = p.window;
        pc.prototype.a = k;

        function rc(a, b) {
            a.b = b;
            a.a && a.e ? (sc(a), a.start()) : a.a && sc(a)
        }
        pc.prototype.u = function() {
            if (this.e) {
                var a = y() - this.n;
                0 < a && a < 0.8 * this.b ? this.a = this.i.setTimeout(this.k, this.b - a) : (this.dispatchEvent("tick"), this.e && (this.a = this.i.setTimeout(this.k, this.b), this.n = y()))
            }
        };
        pc.prototype.start = function() {
            this.e = j;
            this.a || (this.a = this.i.setTimeout(this.k, this.b), this.n = y())
        };

        function sc(a) {
            a.e = l;
            a.a && (a.i.clearTimeout(a.a), a.a = k)
        }
        pc.prototype.G = function() {
            pc.s.G.call(this);
            sc(this);
            delete this.i
        };

        function tc(a, b) {
            ga(a) || (a && "function" == typeof a.handleEvent ? a = w(a.handleEvent, a) : e(Error("Invalid listener argument")));
            return 2147483647 < b ? -1 : qc.setTimeout(a, b || 0)
        };
        var uc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

        function vc(a) {
            if (wc) {
                wc = l;
                var b = p.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = xc(c)) && c != b.hostname) wc = j, e(Error())
                }
            }
            return a.match(uc)
        }
        var wc = vb;

        function xc(a) {
            return (a = vc(a)[3] || k) && decodeURIComponent(a)
        }

        function yc(a, b, c) {
            if (s(b))
                for (var d = 0; d < b.length; d++) yc(a, "" + b[d], c);
            else b != k && c.push("&", a, "" === b ? "" : "=", encodeURIComponent("" + b))
        }

        function zc(a, b) {
            for (var c in b) yc(c, b[c], a);
            return a
        };

        function Ac(a, b) {
            var c;
            if (a instanceof Ac) this.Gc = da(b) ? b : a.Gc, Bc(this, a.Kd), this.pg = a.pg, this.Id = a.Id, Cc(this, a.og), this.Ed = a.Ed, Dc(this, a.a.X()), this.ng = a.ng;
            else if (a && (c = vc("" + a))) {
                this.Gc = !!b;
                Bc(this, c[1] || "", j);
                this.pg = c[2] ? decodeURIComponent(c[2] || "") : "";
                var d = c[3] || "";
                this.Id = d ? decodeURIComponent(d) : "";
                Cc(this, c[4]);
                this.Ed = c[5] ? decodeURIComponent(c[5] || "") : "";
                Dc(this, c[6] || "", j);
                this.ng = c[7] ? decodeURIComponent(c[7] || "") : ""
            } else this.Gc = !!b, this.a = new Ec(k, 0, this.Gc)
        }
        n = Ac.prototype;
        n.Kd = "";
        n.pg = "";
        n.Id = "";
        n.og = k;
        n.Ed = "";
        n.ng = "";
        n.Gc = l;
        n.toString = function() {
            var a = [],
                b = this.Kd;
            b && a.push(Fc(b, Gc), ":");
            if (b = this.Id) {
                a.push("//");
                var c = this.pg;
                c && a.push(Fc(c, Gc), "@");
                a.push(encodeURIComponent("" + b));
                b = this.og;
                b != k && a.push(":", "" + b)
            }
            if (b = this.Ed) this.Id && "/" != b.charAt(0) && a.push("/"), a.push(Fc(b, "/" == b.charAt(0) ? Hc : Ic));
            (b = this.a.toString()) && a.push("?", b);
            (b = this.ng) && a.push("#", Fc(b, Jc));
            return a.join("")
        };
        n.X = function() {
            return new Ac(this)
        };

        function Bc(a, b, c) {
            a.Kd = c ? b ? decodeURIComponent(b) : "" : b;
            a.Kd && (a.Kd = a.Kd.replace(/:$/, ""))
        }

        function Cc(a, b) {
            b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.og = b) : a.og = k
        }

        function Dc(a, b, c) {
            if (b instanceof Ec) {
                a.a = b;
                b = a.a;
                if ((a = a.Gc) && !b.b) {
                    Kc(b);
                    b.a = k;
                    var d = b.ba,
                        c = function(a, b) {
                            var c = b.toLowerCase();
                            b != c && (Lc(this, b), Lc(this, c), 0 < a.length && (this.a = k, eb(this.ba, Mc(this, c), La(a)), this.D += a.length))
                        };
                    if ("function" == typeof d.forEach) d.forEach(c, b);
                    else if (fa(d) || u(d)) B(d, c, b);
                    else {
                        var f;
                        if ("function" == typeof d.jc) f = d.jc();
                        else if ("function" != typeof d.bb)
                            if (fa(d) || u(d)) {
                                f = [];
                                for (var g = d.length, i = 0; i < g; i++) f.push(i)
                            } else f = Xa(d);
                        else f = h;
                        d = cb(d);
                        g = d.length;
                        for (i = 0; i < g; i++) c.call(b,
                            d[i], f && f[i])
                    }
                }
                b.b = a
            } else c || (b = Fc(b, Nc)), a.a = new Ec(b, 0, a.Gc)
        }

        function Fc(a, b) {
            return u(a) ? encodeURI(a).replace(b, Oc) : k
        }

        function Oc(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
        var Gc = /[#\/\?@]/g,
            Ic = /[\#\?:]/g,
            Hc = /[\#\?]/g,
            Nc = /[\#\?@]/g,
            Jc = /#/g;

        function Ec(a, b, c) {
            this.a = a || k;
            this.b = !!c
        }

        function Kc(a) {
            if (!a.ba && (a.ba = new db, a.D = 0, a.a))
                for (var b = a.a.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        f = k,
                        g = k;
                    0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
                    f = sa(f);
                    f = Mc(a, f);
                    d = a;
                    g = g ? sa(g) : "";
                    Kc(d);
                    d.a = k;
                    var f = Mc(d, f),
                        i = d.ba.get(f);
                    i || eb(d.ba, f, i = []);
                    i.push(g);
                    d.D++
                }
        }
        n = Ec.prototype;
        n.ba = k;
        n.D = k;
        n.Hb = function() {
            Kc(this);
            return this.D
        };

        function Lc(a, b) {
            Kc(a);
            b = Mc(a, b);
            if (hb(a.ba.b, b)) {
                a.a = k;
                a.D -= a.ba.get(b).length;
                var c = a.ba;
                hb(c.b, b) && (delete c.b[b], c.D--, c.Fe++, c.a.length > 2 * c.D && fb(c))
            }
        }
        n.clear = function() {
            this.ba = this.a = k;
            this.D = 0
        };
        n.isEmpty = function() {
            Kc(this);
            return 0 == this.D
        };
        n.jc = function() {
            Kc(this);
            for (var a = this.ba.bb(), b = this.ba.jc(), c = [], d = 0; d < b.length; d++)
                for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
            return c
        };
        n.bb = function(a) {
            Kc(this);
            var b = [];
            if (a) {
                var c = a;
                Kc(this);
                c = Mc(this, c);
                hb(this.ba.b, c) && (b = Ka(b, this.ba.get(Mc(this, a))))
            } else {
                a = this.ba.bb();
                for (c = 0; c < a.length; c++) b = Ka(b, a[c])
            }
            return b
        };
        n.get = function(a, b) {
            var c = a ? this.bb(a) : [];
            return 0 < c.length ? c[0] : b
        };
        n.toString = function() {
            if (this.a) return this.a;
            if (!this.ba) return "";
            for (var a = [], b = this.ba.jc(), c = 0; c < b.length; c++)
                for (var d = b[c], f = encodeURIComponent("" + d), d = this.bb(d), g = 0; g < d.length; g++) {
                    var i = f;
                    "" !== d[g] && (i += "=" + encodeURIComponent("" + d[g]));
                    a.push(i)
                }
            return this.a = a.join("&")
        };
        n.X = function() {
            var a = new Ec;
            a.a = this.a;
            this.ba && (a.ba = this.ba.X());
            return a
        };

        function Mc(a, b) {
            var c = "" + b;
            a.b && (c = c.toLowerCase());
            return c
        };

        function Pc() {
            this.a = y()
        }
        new Pc;
        Pc.prototype.reset = function() {
            this.a = y()
        };
        Pc.prototype.get = function() {
            return this.a
        };
        var Qc, Rc = !C || Kb(9);
        !ub && !C || C && Kb(9) || ub && E("1.9.1");
        C && E("9");

        function Sc(a) {
            a = a.className;
            return u(a) && a.match(/\S+/g) || []
        }

        function J(a, b) {
            var c = Sc(a),
                d = Oa(arguments, 1),
                f = c.length + d.length;
            Tc(c, d);
            a.className = c.join(" ");
            return c.length == f
        }

        function K(a, b) {
            var c = Sc(a),
                d = Oa(arguments, 1),
                c = Uc(c, d);
            a.className = c.join(" ")
        }

        function Tc(a, b) {
            for (var c = 0; c < b.length; c++) Ha(a, b[c]) || a.push(b[c])
        }

        function Uc(a, b) {
            return Da(a, function(a) {
                return !Ha(b, a)
            })
        }

        function Vc(a, b, c) {
            var d = Sc(a);
            u(b) ? Ja(d, b) : s(b) && (d = Uc(d, b));
            u(c) && !Ha(d, c) ? d.push(c) : s(c) && Tc(d, c);
            a.className = d.join(" ")
        }

        function Wc(a, b) {
            return Ha(Sc(a), b)
        }

        function Xc(a, b, c) {
            c ? J(a, b) : K(a, b)
        };

        function Yc(a) {
            return a ? new Zc($c(a)) : Qc || (Qc = new Zc)
        }

        function L(a) {
            return u(a) ? document.getElementById(a) : a
        }

        function ad(a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : bd("*", a, b)
        }

        function M(a, b) {
            var c = b || document,
                d = k;
            return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : ad(a, b)[0]) || k
        }

        function bd(a, b, c) {
            var d = document,
                c = c || d,
                a = a && "*" != a ? a.toUpperCase() : "";
            if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
            if (b && c.getElementsByClassName) {
                c = c.getElementsByClassName(b);
                if (a) {
                    for (var d = {}, f = 0, g = 0, i; i = c[g]; g++) a == i.nodeName && (d[f++] = i);
                    d.length = f;
                    return d
                }
                return c
            }
            c = c.getElementsByTagName(a || "*");
            if (b) {
                d = {};
                for (g = f = 0; i = c[g]; g++) a = i.className, "function" == typeof a.split && Ha(a.split(/\s+/), b) && (d[f++] = i);
                d.length = f;
                return d
            }
            return c
        }

        function cd(a, b) {
            Va(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in dd ? a.setAttribute(dd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }
        var dd = {
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

        function ed(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new G(a.clientWidth, a.clientHeight)
        }

        function fd(a) {
            var b = !vb && "CSS1Compat" == a.compatMode ? a.documentElement : a.body,
                a = a.parentWindow || a.defaultView;
            return new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        }

        function gd(a, b, c) {
            var d = arguments,
                f = document,
                g = d[0],
                i = d[1];
            if (!Rc && i && (i.name || i.type)) {
                g = ["<", g];
                i.name && g.push(' name="', ta(i.name), '"');
                if (i.type) {
                    g.push(' type="', ta(i.type), '"');
                    var m = {};
                    bb(m, i);
                    i = m;
                    delete i.type
                }
                g.push(">");
                g = g.join("")
            }
            g = f.createElement(g);
            i && (u(i) ? g.className = i : s(i) ? J.apply(k, [g].concat(i)) : cd(g, i));
            2 < d.length && hd(f, g, d, 2);
            return g
        }

        function hd(a, b, c, d) {
            function f(c) {
                c && b.appendChild(u(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var g = c[d];
                if (fa(g) && !(ha(g) && 0 < g.nodeType)) {
                    var i = B,
                        m;
                    a: {
                        if ((m = g) && "number" == typeof m.length) {
                            if (ha(m)) {
                                m = "function" == typeof m.item || "string" == typeof m.item;
                                break a
                            }
                            if (ga(m)) {
                                m = "function" == typeof m.item;
                                break a
                            }
                        }
                        m = l
                    }
                    i(m ? La(g) : g, f)
                } else f(g)
            }
        }

        function id(a, b) {
            hd($c(a), a, arguments, 1)
        }

        function jd(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        }

        function N(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : k
        }

        function kd(a, b) {
            var c = b.parentNode;
            c && c.replaceChild(a, b)
        }

        function $c(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }

        function ld(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else jd(a), a.appendChild($c(a).createTextNode(b))
        }

        function md(a, b) {
            var c;
            c = b ? nd(a, function(a) {
                return !b || Wc(a, b)
            }, j) : k;
            return c
        }

        function nd(a, b, c, d) {
            c || (a = a.parentNode);
            for (var c = d == k, f = 0; a && (c || f <= d);) {
                if (b(a)) return a;
                a = a.parentNode;
                f++
            }
            return k
        }

        function Zc(a) {
            this.a = a || p.document || document
        }
        n = Zc.prototype;
        n.P = function(a) {
            return u(a) ? this.a.getElementById(a) : a
        };

        function od(a) {
            return "CSS1Compat" == a.a.compatMode
        }
        n.appendChild = function(a, b) {
            a.appendChild(b)
        };
        n.append = id;
        n.dp = jd;
        n.Zk = N;
        n.contains = function(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        };

        function pd(a, b, c) {
            a.dataset ? a.dataset[qd(b)] = c : a.setAttribute("data-" + b, c)
        }

        function rd(a, b) {
            return a.dataset ? a.dataset[qd(b)] : a.getAttribute("data-" + b)
        }

        function sd(a, b) {
            a.dataset ? delete a.dataset[qd(b)] : a.removeAttribute("data-" + b)
        }
        var td = {};

        function qd(a) {
            return td[a] || (td[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            }))
        };
        var ud = r("yt.dom.getNextId_");
        if (!ud) {
            ud = function() {
                return ++vd
            };
            oa("yt.dom.getNextId_", ud);
            var vd = 0
        }

        function wd(a) {
            var b = a.cloneNode(l);
            "TR" == b.tagName || "SELECT" == b.tagName ? B(a.childNodes, function(a) {
                b.appendChild(wd(a))
            }) : b.innerHTML = a.innerHTML;
            return b
        }

        function xd(a, b) {
            var c = bd(a, k, b);
            return c.length ? c[0] : k
        }

        function yd(a, b) {
            return M(a, b)
        }

        function zd(a, b) {
            if (a in b) return b[a];
            var c = a.charAt(0).toUpperCase() + a.substr(1);
            if ("moz" + c in b) return b["moz" + c];
            if ("ms" + c in b) return b["ms" + c];
            if ("o" + c in b) return b["o" + c];
            if ("webkit" + c in b) return b["webkit" + c]
        };

        function Ad(a) {
            if (a = a || r("window.event")) {
                for (var b in a) Ha(Bd, b) || (this[b] = a[b]);
                if ((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
                this.target = b;
                if (b = a.relatedTarget) try {
                    b = b.nodeName && b
                } catch (c) {
                    b = k
                } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
                this.relatedTarget = b;
                this.clientX = a.clientX !== h ? a.clientX : a.pageX;
                this.clientY = a.clientY !== h ? a.clientY : a.pageY;
                if ((a.clientX || a.clientY) && document.body && document.documentElement) this.pageX = a.clientX + document.body.scrollLeft +
                    document.documentElement.scrollLeft, this.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.Kb = a
            }
        }
        var Bd = "stopPropagation preventMouseEvent preventManipulation preventDefault layerX layerY".split(" ");
        n = Ad.prototype;
        n.type = "";
        n.target = k;
        n.relatedTarget = k;
        n.currentTarget = k;
        n.data = k;
        n.source = k;
        n.keyCode = 0;
        n.charCode = 0;
        n.altKey = l;
        n.ctrlKey = l;
        n.shiftKey = l;
        n.Kb = k;
        n.clientX = 0;
        n.clientY = 0;
        n.pageX = 0;
        n.pageY = 0;
        n.changedTouches = k;
        n.preventDefault = function() {
            this.Kb.returnValue = l;
            this.Kb.preventDefault && this.Kb.preventDefault()
        };
        n.Cf = function() {
            this.Kb.Cf ? this.Kb.Cf() : this.preventDefault()
        };
        n.stopPropagation = function() {
            this.Kb.cancelBubble = j;
            this.Kb.stopPropagation && this.Kb.stopPropagation()
        };
        var Cd = r("yt.events.listeners_") || {};
        oa("yt.events.listeners_", Cd);
        var Dd = r("yt.events.counter_") || {
            count: 0
        };
        oa("yt.events.counter_", Dd);

        function Ed(a, b, c, d) {
            return Ya(Cd, function(f) {
                return f[0] == a && f[1] == b && f[2] == c && f[4] == !!d
            })
        }

        function O(a, b, c, d) {
            function f(b) {
                b = new Ad(b);
                b.currentTarget = a;
                return c.call(a, b)
            }
            if (!a || !a.addEventListener && !a.attachEvent) return "";
            var d = !!d,
                g = Ed(a, b, c, d);
            if (g) return g;
            g = ++Dd.count + "";
            Cd[g] = [a, b, c, f, d];
            a.addEventListener ? a.addEventListener(b, f, d) : a.attachEvent("on" + b, f);
            return g
        }

        function Fd(a, b, c) {
            if (zd("pointerEnabled", window.navigator)) return b = b.charAt(0).toUpperCase() + b.substr(1).toLowerCase(), O(a, "MSPointer" + b, function(a) {
                c(a)
            });
            var d = b = b.toLowerCase();
            switch (b) {
                case "down":
                    d = "start";
                    break;
                case "up":
                    d = "end";
                    break;
                case "over":
                    d = "enter";
                    break;
                case "out":
                    d = "leave"
            }
            var f = l,
                g = 0;
            return [O(a, "touch" + d, function(a) {
                window.clearTimeout(g);
                f = j;
                B(a.changedTouches, function(b) {
                    var d = new Ad(a);
                    x(d, b);
                    c(d)
                });
                g = window.setTimeout(function() {
                    f = l
                }, 400)
            }), O(a, "mouse" + b, function(a) {
                f || c(a)
            })]
        }

        function Gd(a, b, c) {
            var d = a || document;
            O(d, "click", function(a) {
                var g = nd(a.target, function(a) {
                    return a === d || Wc(a, c)
                }, j);
                g && g !== d && (a.currentTarget = g, b.call(g, a))
            })
        }

        function Hd(a) {
            "string" == typeof a && (a = [a]);
            B(a, function(a) {
                if (a in Cd) {
                    var c = Cd[a],
                        d = c[0],
                        f = c[1],
                        g = c[3],
                        c = c[4];
                    d.removeEventListener ? d.removeEventListener(f, g, c) : d.detachEvent("on" + f, g);
                    delete Cd[a]
                }
            })
        };

        function Id() {
            var a = zd("fullScreenEnabled", document);
            return a || a == h && !ub && !!zd("requestFullScreen", document.body)
        };

        function Jd(a) {
            this.b = a || window;
            this.a = []
        }
        Jd.prototype.b = k;
        Jd.prototype.a = k;
        Jd.prototype.N = function(a, b, c, d) {
            c = w(c, d || this.b);
            a = O(a, b, c);
            this.a.push(a);
            return a
        };

        function Kd(a, b, c, d) {
            d = w(d, a.b);
            b = Fd(b, c, d);
            a.a.push(b)
        }
        Jd.prototype.e = function(a) {
            Hd(a);
            Ja(this.a, a)
        };

        function Ld(a) {
            for (var b = 0; b < a.a.length; b++) Hd(a.a[b]);
            a.a = []
        };

        function Md(a) {
            a = a || {};
            this.url = a.url || this.url;
            this.urlV8 = a.url_v8 || this.urlV8;
            this.urlV9As2 = a.url_v9as2 || this.urlV9As2;
            this.minVersion = a.min_version || this.minVersion;
            this.args = a.args || Za(Nd);
            this.assets = a.assets || {};
            this.attrs = a.attrs || Za(Od);
            this.params = a.params || Za(Pd);
            this.fallback = a.fallback || this.fallback;
            this.fallbackMessage = a.fallbackMessage || this.fallbackMessage;
            this.html5 = a.html5 || this.html5;
            this.disable = a.disable || {}
        }
        var Nd = {
                enablejsapi: 1
            },
            Od = {
                width: "640",
                height: "385"
            },
            Pd = {
                allowscriptaccess: "always",
                allowfullscreen: "true",
                bgcolor: "#000000"
            };
        n = Md.prototype;
        n.url = "";
        n.urlV8 = "";
        n.urlV9As2 = "";
        n.minVersion = "8.0.0";
        n.html5 = l;

        function Qd(a) {
            a = "" + a;
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            e(Error("Invalid JSON string: " + a))
        }

        function Rd(a) {
            return eval("(" + a + ")")
        }

        function Sd() {}

        function Td(a, b) {
            var c = [];
            Ud(a, b, c);
            return c.join("")
        }

        function Ud(a, b, c) {
            switch (typeof b) {
                case "string":
                    Vd(b, c);
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
                    if (s(b)) {
                        var d = b.length;
                        c.push("[");
                        for (var f = "", g = 0; g < d; g++) c.push(f), Ud(a, b[g], c), f = ",";
                        c.push("]");
                        break
                    }
                    c.push("{");
                    d = "";
                    for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), Vd(f, c), c.push(":"), Ud(a, g, c), d = ","));
                    c.push("}");
                    break;
                case "function":
                    break;
                default:
                    e(Error("Unknown type: " + typeof b))
            }
        }
        var Wd = {
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
            Xd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

        function Vd(a, b) {
            b.push('"', a.replace(Xd, function(a) {
                if (a in Wd) return Wd[a];
                var b = a.charCodeAt(0),
                    f = "\\u";
                16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
                return Wd[a] = f + b.toString(16)
            }), '"')
        };

        function Yd(a, b) {
            for (var c = a.split(b), d = {}, f = 0, g = c.length; f < g; f++) {
                var i = c[f].split("=");
                if (1 == i.length && i[0] || 2 == i.length) {
                    var m = sa(i[0] || ""),
                        i = sa(i[1] || "");
                    m in d ? s(d[m]) ? Ma(d[m], i) : d[m] = [d[m], i] : d[m] = i
                }
            }
            return d
        }

        function Zd(a, b) {
            var c = [];
            Va(a, function(a, b) {
                var g = encodeURIComponent("" + b),
                    i;
                i = s(a) ? a : [a];
                B(i, function(a) {
                    "" == a ? c.push(g) : c.push(g + "=" + encodeURIComponent("" + a))
                })
            });
            return c.join(b)
        }

        function $d(a) {
            "?" == a.charAt(0) && (a = a.substr(1));
            return Yd(a, "&")
        }

        function ae(a) {
            return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), $d(1 < a.length ? a[1] : a[0])) : {}
        }

        function be(a) {
            a = zc([], a);
            a[0] = "";
            return a.join("")
        }

        function P(a, b) {
            var c = zc([a], b);
            if (c[1]) {
                var d = c[0],
                    f = d.indexOf("#");
                0 <= f && (c.push(d.substr(f)), c[0] = d = d.substr(0, f));
                f = d.indexOf("?");
                0 > f ? c[1] = "?" : f == d.length - 1 && (c[1] = h)
            }
            return c.join("")
        }
        var ce = xc;

        function de(a, b) {
            var c = a.split("?", 2),
                a = c[0],
                c = $d(c[1] || ""),
                d;
            for (d in b) c[d] = b[d];
            return P(a, c)
        };
        var ee = window.yt && window.yt.config_ || {};
        oa("yt.config_", ee);
        var fe = window.yt && window.yt.tokens_ || {};
        oa("yt.tokens_", fe);
        oa("yt.globals_", window.yt && window.yt.globals_ || {});
        var ge = window.yt && window.yt.msgs_ || {};
        oa("yt.msgs_", ge);
        var he = window.yt && window.yt.timeouts_ || [];
        oa("yt.timeouts_", he);
        var ie = window.yt && window.yt.intervals_ || [];
        oa("yt.intervals_", ie);

        function je(a) {
            return a in ee ? ee[a] : h
        }

        function ke(a) {
            var b = arguments;
            if (1 < b.length) {
                var c = b[0];
                fe[c] = b[1]
            } else
                for (c in b = b[0], b) fe[c] = b[c]
        }

        function le(a) {
            return a in fe ? fe[a] : h
        }

        function Q(a, b) {
            var c = window.setTimeout(a, b);
            he.push(c);
            return c
        }

        function me(a, b) {
            var c = window.setInterval(a, b);
            ie.push(c);
            return c
        }

        function ne(a) {
            window.clearInterval(a)
        }

        function oe(a, b, c) {
            var d = b || {};
            if (a = a in ge ? ge[a] : c)
                for (var f in d) a = a.replace(RegExp("\\$" + f, "gi"), function() {
                    return d[f]
                });
            return a
        }
        eval("/*@cc_on!@*/false");
        var pe = k;
        "undefined" != typeof XMLHttpRequest ? pe = function() {
            return new XMLHttpRequest
        } : "undefined" != typeof ActiveXObject && (pe = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });

        function qe(a) {
            switch (a && "status" in a ? a.status : -1) {
                case 0:
                case 200:
                case 204:
                case 304:
                    return j;
                default:
                    return l
            }
        };

        function re(a, b, c, d, f) {
            var g = pe && pe();
            if ("open" in g) {
                g.onreadystatechange = function() {
                    4 == (g && "readyState" in g ? g.readyState : 0) && b && b(g)
                };
                c = (c || "GET").toUpperCase();
                d = d || "";
                g.open(c, a, j);
                a = "POST" == c;
                if (f)
                    for (var i in f) g.setRequestHeader(i, f[i]), "content-type" == i.toLowerCase() && (a = l);
                a && g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                g.send(d);
                return g
            }
        }

        function se(a, b) {
            var c = b.format || "JSON";
            b.gq && (a = document.location.protocol + "//" + document.location.hostname + a);
            var d = b.ug;
            d && (a = de(a, d));
            var f = b.nr || "";
            if (d = b.jm) f = $d(f), bb(f, d), f = be(f);
            var g = l,
                i, m = re(a, function(a) {
                    if (!g) {
                        g = j;
                        i && window.clearTimeout(i);
                        var d = qe(a),
                            f = k;
                        if (d || 400 <= a.status && 500 > a.status) {
                            var m = k;
                            switch (c) {
                                case "JSON":
                                    var f = a.responseText,
                                        H = a.getResponseHeader("Content-Type") || "";
                                    f && 0 <= H.indexOf("json") && (m = Rd(f));
                                    break;
                                case "XML":
                                    if (f = (f = a.responseXML) ? f ? (f = ("responseXML" in f ? f.responseXML :
                                            f).getElementsByTagName("root")) && 0 < f.length ? f[0] : k : k : k, f) m = {}, B(f.getElementsByTagName("*"), function(a) {
                                        var b = m,
                                            c = a.tagName,
                                            d = "";
                                        B(a.childNodes, function(a) {
                                            d = d + a.nodeValue
                                        });
                                        b[c] = d
                                    })
                            }
                            f = m
                        }
                        if (d) a: {
                            switch (c) {
                                case "XML":
                                    d = 0 == parseInt(f && f.return_code, 10);
                                    break a;
                                case "RAW":
                                    d = j;
                                    break a
                            }
                            d = !!f
                        }
                        f = f || {};
                        H = b.Mc || p;
                        d ? b.cb && b.cb.call(H, a, f) : b.Ib && b.Ib.call(H, a, f);
                        b.Le && b.Le.call(H, a, f)
                    }
                }, b.method, f, b.headers);
            b.Rq && 0 < b.timeout && (i = Q(function() {
                    g || (g = j, m.abort(), window.clearTimeout(i), b.Rq.call(b.Mc || p, m))
                },
                b.timeout))
        }
        var te = {
                html5_ajax: "action_get_html5_token",
                watch_actions_ajax: "action_get_watch_actions_token",
                addto_ajax: "action_get_wl_token"
            },
            ue = {
                html5_ajax: "html5_ajax_token",
                watch_actions_ajax: "watch_actions_ajax_token",
                addto_ajax: "addto_ajax_token"
            };

        function ve(a, b, c) {
            if (le(a) && b) window.setTimeout(b, 0);
            else {
                var d = vc(document.location.href),
                    f = d[1],
                    g = d[2],
                    i = d[3],
                    d = d[4],
                    m = [];
                f && m.push(f, ":");
                i && (m.push("//"), g && m.push(g, "@"), m.push(i), d && m.push(":", d));
                f = m.join("") + "/token_ajax";
                g = {};
                g[te[a]] = 1;
                se(f, {
                    format: "RAW",
                    method: "GET",
                    ug: g,
                    Le: function(d) {
                        var f = $d(d.responseText),
                            g = f[ue[a]];
                        if (g) {
                            ke(a, g);
                            b && b()
                        } else c && c(d, f)
                    }
                })
            }
        };
        var we = {},
            xe = 0;

        function ye(a) {
            var b = new Image,
                c = "" + xe++;
            we[c] = b;
            b.onload = b.onerror = function() {
                delete we[c]
            };
            b.src = a;
            b = eval("null")
        };

        function ze(a) {
            this.n = a;
            this.a = 0;
            this.b = this.i(k)
        }

        function Ae(a, b, c) {
            for (var d = a.b, a = a.a; 0 <= a; a--) {
                for (; d.links[a] && d.links[a].value < b;) d = d.links[a];
                c && (c[a] = d)
            }
            return (d = d.Hc()) && d.value == b ? d : k
        }

        function Be(a, b) {
            var c = [],
                d = Ae(a, b, c);
            return d ? d.Hc() : c[0].Hc()
        }

        function Ce(a, b) {
            var c = [],
                d = Ae(a, b, c);
            return d ? d : a.k(b, c)
        }
        ze.prototype.k = function(a, b) {
            var c;
            for (c = 0; 0.25 > this.n() && c <= this.a && 15 > c;) c++;
            for (; this.a < c;) b[++this.a] = this.b;
            for (var d = this.i(a), f = 0; f <= c; f++) d.links[f] = b[f].links[f], b[f].links[f] = d;
            return d
        };
        ze.prototype.e = function(a, b) {
            for (var c = 0; c <= a.getLevel(); c++) b[c].links[c] = a.links[c];
            for (; !this.b.links[this.a] && 0 < this.a;) this.a--;
            return a
        };
        ze.prototype.i = function(a) {
            return new De(a)
        };
        ze.prototype.toString = function(a) {
            for (var a = a || 0, b = "", c = this.b; c.links[a];) c = c.links[a], b = b.concat(b.length ? "," : "", c.toString());
            return "[" + b + "]"
        };

        function De(a) {
            this.value = a;
            this.links = []
        }
        De.prototype.getLevel = function() {
            return this.links.length - 1
        };
        De.prototype.Hc = function() {
            return this.links[0] || k
        };
        De.prototype.toString = function() {
            return "" + this.value
        };

        function Ee(a, b) {
            this.start = a;
            this.end = b;
            this.Dd = Fe++
        }
        var Fe = 0;
        Ee.prototype.contains = function(a, b) {
            return a >= this.start && a < this.end && (b == k || a < b && b <= this.end)
        };

        function Ge(a) {
            ze.call(this, a)
        }
        Ge.prototype = new ze(Math.random);
        Ge.prototype.constructor = Ge;

        function He(a, b) {
            for (var c = [], d = a.b, f = a.a; 0 <= f; f--) {
                for (; d.links[f] && d.links[f].value <= b;) d = d.links[f];
                var g = c,
                    i = d.aa[f],
                    m = h;
                for (m in i) g.push(i[1 * m])
            }
            if (d.value == b)
                for (var o in d.ze) f = d.ze[o], f.start == f.end && c.push(f);
            return c
        }

        function Ie(a, b, c) {
            for (var d = [], b = Be(a, b), a = c == k ? k : Be(a, c); b && b != a;) {
                var c = d,
                    f = b.ze,
                    g = h;
                for (g in f) c.push(f[1 * g]);
                b = b.Hc()
            }
            return d
        }
        Ge.prototype.k = function(a, b) {
            var c = ze.prototype.k.call(this, a, b),
                d, f, g, i = {};
            for (d = 0; d < c.getLevel() && c.links[d + 1]; d++) {
                for (f in i) g = i[f], g.contains(c.value, c.links[d + 1].value) ? Je(g, c.links[d], c.links[d + 1], d) : (c.Ca(d, g), delete i[f]);
                for (f in b[d].aa[d]) g = b[d].aa[d][1 * f], g.contains(c.value, c.links[d + 1].value) ? (Je(g, c.links[d], c.links[d + 1], d), i[f] = g) : c.Ca(d, g)
            }
            for (f in i) c.Ca(d, i[f]);
            for (f in b[d].aa[d]) c.Ca(d, b[d].aa[d][1 * f]);
            i = {};
            for (d = 0; d < c.getLevel() && b[d + 1] != this.b; d++) {
                for (f in i) g = i[f], g.contains(b[d].value,
                    c.value) && !g.contains(b[d + 1].value, c.value) ? (b[d].Ca(d, g), delete i[f]) : Je(g, b[d + 1], c, d);
                for (f in b[d].aa[d]) g = b[d].aa[d][1 * f], g.contains(b[d + 1].value, c.value) && (Je(g, b[d + 1], c, d), i[f] = g)
            }
            for (f in i) b[d].Ca(d, i[f]);
            return c
        };
        Ge.prototype.e = function(a, b) {
            var c, d, f, g = {};
            for (c = a.getLevel(); 0 <= c; c--) {
                for (d in g) {
                    for (var i = f = g[d], m = b[c + 1], o = b[c], q = c; m && m != o;) m.Ca(q, i), m = m.links[q];
                    a.links[c] && f.contains(b[c].value, a.links[c].value) && (b[c].Ca(c, f), delete g[d])
                }
                for (d in b[c].aa[c])
                    if (f = b[c].aa[c][1 * d], !a.links[c] || !f.contains(b[c].value, a.links[c].value)) b[c].vd(c, f), g[d] = f
            }
            g = {};
            for (c = a.getLevel(); 0 <= c; c--) {
                for (d in g) {
                    i = f = g[d];
                    m = a.links[c];
                    o = a.links[c + 1];
                    for (q = c; m && m != o;) m.Ca(q, i), m = m.links[q];
                    a.links[c] && f.contains(b[c].value,
                        a.links[c].value) && delete g[d]
                }
                for (d in a.aa[c])
                    if (f = a.aa[c][1 * d], a.links[c] && (b[c] == this.b || !f.contains(b[c].value, a.links[c].value))) g[d] = f
            }
            return ze.prototype.e.call(this, a, b)
        };
        Ge.prototype.i = function(a) {
            return new Ke(a)
        };

        function Le(a, b, c, d) {
            for (var f = 0; b.links[f] && a.contains(b.value, b.links[f].value);) {
                for (; f < b.getLevel() && b.links[f + 1] && a.contains(b.value, b.links[f + 1].value);) f++;
                b.links[f] && (d(b, f), b = b.links[f])
            }
            for (; b != c;) {
                for (; 0 < f && (!b.links[f] || !a.contains(b.value, b.links[f].value));) f--;
                d(b, f);
                b = b.links[f]
            }
        }

        function Je(a, b, c, d) {
            for (; b && b != c;) b.vd(d, a), b = b.links[d]
        }

        function Ke(a) {
            De.call(this, a);
            this.ze = {};
            this.aa = [];
            this.a = 0
        }
        Ke.prototype = new De(Math.random);
        Ke.prototype.constructor = Ke;
        Ke.prototype.Ca = function(a, b) {
            this.aa[a] || (this.aa[a] = {});
            this.aa[a][b.Dd] = b
        };
        Ke.prototype.vd = function(a, b) {
            this.aa[a] && delete this.aa[a][b.Dd]
        };

        function Me(a, b, c) {
            Ee.call(this, a, b);
            a = c || {};
            this.Om = a.id;
            a.priority != h && (this.Pm = a.priority);
            this.Si = a.namespace || "";
            this.visible = a.visible || l;
            this.pubsub = new I
        }
        Me.prototype = new Ee(0, 0);
        n = Me.prototype;
        n.constructor = Me;
        n.Om = "";
        n.Pm = 10;
        n.Ue = j;
        n.visible = l;
        n.pubsub = k;
        n.Si = "";
        n.getId = function() {
            return this.Om
        };
        n.Fc = function() {
            return this.Pm
        };

        function Ne(a, b) {
            return a.start == b.start ? a.Fc() == b.Fc() ? 0 : a.Fc() < b.Fc() ? -1 : 1 : a.start < b.start ? -1 : 1
        };
        var Oe = {
            Rs: "audio",
            fu: "play_pause",
            qu: "seek"
        };

        function Pe(a, b) {
            a = a || 128;
            a & 4 && a & 33 || a & 2 && 2 != a || (this.a = a, this.setData(b))
        }
        Pe.prototype.a = 128;

        function Qe(a, b, c) {
            return b == a.a && c == a.b ? a : new Pe(b, c)
        }

        function R(a, b) {
            return (a.a & b) == b
        }
        Pe.prototype.setData = function(a) {
            this.b = a
        };
        Pe.prototype.getData = function() {
            return this.b
        };

        function Re(a) {
            return R(a, 256) ? -1 : R(a, 1) ? 3 : R(a, 4) ? 0 : R(a, 2) ? 5 : R(a, 16) ? 1 : R(a, 8) ? 2 : -1
        };

        function Se(a, b, c) {
            this.k = a;
            this.C = b;
            this.n = c;
            this.pubsub = new I;
            this.i = new pc(250);
            this.i.addEventListener("tick", w(this.Va, this));
            this.Za = [];
            this.a = [];
            this.Pb = new Ge(Math.random)
        }
        n = Se.prototype;
        n.zb = l;
        n.We = l;
        n.Kh = l;
        n.Jh = l;
        n.de = k;
        n.pubsub = k;
        n.gm = function(a) {
            var b = La(arguments);
            this.Va();
            b.forEach(function(a) {
                this.Za.push(a);
                var b = this.Pb,
                    f = Ce(b, a.start),
                    b = Ce(b, a.end);
                f.ze[a.Dd] = a;
                f.a++;
                b.a++;
                Le(a, f, b, function(b, d) {
                    b.aa[d] && b.aa[d][a.Dd] == a && e(Error("Interval already exists: " + a));
                    b.Ca(d, a)
                });
                this.pubsub.j("onAdd", a)
            }, this);
            this.Va()
        };
        n.dm = function(a) {
            La(arguments).forEach(function(a) {
                a = this.Za.indexOf(a);
                0 <= a && Te(this, a)
            }, this);
            this.Va()
        };

        function Te(a, b) {
            var c = a.Za.splice(b, 1)[0],
                d = a.Pb,
                f = [],
                g = Ae(d, c.start, f),
                i = Ae(d, c.end);
            (!g || !i) && e(Error("Interval not found: " + c));
            Le(c, g, i, function(a, b) {
                a.aa[b] && a.aa[b][c.Dd] == c || e(Error("Interval not found: " + c));
                a.vd(b, c)
            });
            delete g.ze[c.Dd];
            0 == --g.a && d.e(g, f);
            i = Ae(d, c.end, f);
            0 == --i.a && d.e(i, f);
            b = a.a.indexOf(c);
            0 <= b && a.a.splice(b, 1);
            a.pubsub.j("onRemove", c)
        }

        function Ue(a) {
            a.b = 1E3 * a.k();
            a.We = j;
            a.Va()
        }
        n.reset = function() {
            this.We = this.zb = l;
            Ve(this);
            for (var a = this.Za.length - 1; 0 <= a; a--) Te(this, a);
            this.Va();
            this.e = k
        };

        function We(a, b) {
            var c = [];
            if (!b.length) return c;
            b.sort(Ne);
            for (var d = 0; d < b.length; d++) {
                var f = b[d];
                f.Ue && -1 == a.a.indexOf(f) && (a.a.push(f), c.push(["onEnter", f]))
            }
            return c
        }
        n.Va = function() {
            this.Jh = j;
            if (!this.Kh)
                for (var a = 3; this.Jh && a;) {
                    this.Jh = l;
                    this.Kh = j;
                    if (this.We && !this.zb) {
                        Ve(this);
                        for (var b = 1E3 * this.k(), c = [], d = 0; d < this.a.length; d++) {
                            var f = this.a[d];
                            f.Ue && !f.contains(b) && (c.push(["onExit", f]), this.a.splice(d--, 1))
                        }
                        d = He(this.Pb, b);
                        f = this.C();
                        !R(f, 64) && b > this.b && (d = d.concat(Ie(this.Pb, this.b, b)));
                        c = c.concat(We(this, d));
                        this.b = b;
                        !this.zb && this.e && (c.unshift(["onLockBlockExit", this.e]), this.e = k, R(f, 4) && (this.b = 2147483647));
                        if (R(f, 16) && !this.n() && (b = Be(this.Pb, this.b))) this.de =
                            tc(w(this.Va, this), b.value - this.b);
                        for (d = 0; d < c.length; d++) b = c[d], f = b[1], "onLockBlockExit" == b[0] || "onLockBlockEnter" == b[0] ? this.pubsub.j.apply(this.pubsub, b) : f.pubsub.j.apply(f.pubsub, b)
                    }
                    this.Kh = l;
                    a--
                }
        };

        function Ve(a) {
            a.de != k && (qc.clearTimeout(a.de), a.de = k)
        };

        function Xe() {
            this.Ya = {}
        }
        n = Xe.prototype;
        n.wl = k;
        n.oi = k;
        n.vl = 0;
        n.width = 0;
        n.height = 0;
        n.ka = 0;
        n.rows = 0;
        n.Xb = 0;
        n.pi = k;

        function Ye(a, b) {
            var c = a.wl,
                c = c.replace("$N", a.oi),
                c = c.replace("$L", a.vl.toString()),
                c = c.replace("$M", b.toString());
            a.pi && (c = P(c, {
                sigh: a.pi
            }));
            return c
        }

        function Ze(a, b) {
            var c = Math.floor(b / (a.ka * a.rows)),
                d = a.ka * a.rows,
                f = b % d,
                g = f % a.ka,
                f = Math.floor(f / a.ka),
                i = a.rows,
                m = a.Xb - d * c;
            m < d && (i = Math.ceil(m / a.ka));
            return {
                url: Ye(a, c),
                Uq: g,
                ka: a.ka,
                row: f,
                rows: i,
                Gm: a.width * a.ka,
                Fm: a.height * i
            }
        };

        function $e(a) {
            this.a = [];
            this.b = {};
            for (var a = a.split("|"), b = a[0], c = 1, d, f; c < a.length; c++) d = a[c].split("#"), f = new Xe, f.vl = c - 1, f.width = parseInt(d[0], 10), f.height = parseInt(d[1], 10), f.Xb = parseInt(d[2], 10), f.ka = parseInt(d[3], 10), f.rows = parseInt(d[4], 10), f.wl = b, f.oi = d[6], f.pi = d[7], this.a.push(f);
            1 < this.a.length && -1 != this.getLevel(0).oi.indexOf("default") && this.a.splice(0, 1)
        }
        $e.prototype.a = k;
        $e.prototype.b = k;

        function af(a, b) {
            var c = a.getLevel(0).Xb;
            return Lb(Math.round(c * b), 0, c - 1)
        }
        $e.prototype.getLevel = function(a) {
            return this.a[a]
        };

        function bf(a, b) {
            var c = a.b[b];
            if (c) return c;
            for (var c = a.a.length, d = 0; d < c; d++)
                if (a.getLevel(d).width >= b) return a.b[b] = d;
            a.b[b] = c - 1;
            return c - 1
        };
        var cf = {
            "0": "MONO",
            1: "LEFT_RIGHT",
            2: "RIGHT_LEFT",
            3: "TOP_BOTTOM",
            4: "BOTTOM_TOP"
        };
        var df, ff, gf;
        gf = ff = df = l;
        var hf = pb();
        hf && (-1 != hf.indexOf("Firefox") || -1 != hf.indexOf("Camino") || (-1 != hf.indexOf("iPhone") || -1 != hf.indexOf("iPod") ? df = j : -1 != hf.indexOf("iPad") ? ff = j : -1 != hf.indexOf("Android") && (gf = j)));
        var jf = df,
            kf = ff,
            lf = gf;

        function mf(a) {
            var b = pb();
            return !b ? l : 0 <= b.toLowerCase().indexOf(a)
        };

        function nf(a, b, c, d, f) {
            this.we = a;
            b = b.replace(/&quot;/g, '"');
            this.Tf = unescape(b);
            a = of [c].split("x");
            this.size = new G(parseInt(a[0], 10), parseInt(a[1], 10));
            this.Uf = pf[c];
            this.pb = c;
            this.b = qf[d];
            this.a = d;
            this.e = !!f
        }
        n = nf.prototype;
        n.we = "";
        n.Tf = "";
        n.Uf = "";
        n.pb = "";
        n.size = k;
        n.toString = function() {
            return this.Uf + ": " + this.Tf
        };

        function rf(a) {
            var b = new Ac(a.we),
                b = "https://web.archive.org/web/20120622093201/http://www.youtube.com/api/manifest/t2b/source/youtube/id/" + b.a.get("id"),
                b = b + ("/itag/" + a.a);
            return a.we + "#" + (b + "/mfmt/amf")
        }
        var sf = {
                'video/mp4; codecs="avc1.42001E, mp4a.40.2"': "maybe"
            },
            tf = {
                "application/x-mpegURL": "maybe"
            };

        function uf() {
            if (mf("android 2.2")) return j;
            var a = document.createElement("video");
            return a && a.canPlayType && (a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') || a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
        }
        var vf = {
                Ts: "auto",
                Ot: "light",
                SMALL: "small",
                Wt: "medium",
                LARGE: "large",
                Ct: "hd720",
                Bt: "hd1080",
                It: "highres"
            },
            wf = {
                hd1080: j,
                hd720: j
            },
            xf = ["hd1080", "hd720", "large", "medium", "small"],
            of = {
                auto: "Auto",
                light: "320x240",
                small: "320x240",
                medium: "640x360",
                large: "854x480",
                hd720: "1280x720",
                hd1080: "1920x1080",
                highres: "2048x1536"
            },
            pf = {
                auto: "auto",
                light: "240p",
                small: "240p",
                medium: "360p",
                large: "480p",
                hd720: "720p",
                hd1080: "1080p",
                highres: "Original"
            },
            yf = {
                5: j,
                34: j,
                35: j
            };

        function zf(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var f = a[d];
                f.e == b && c.push(f)
            }
            return c
        }

        function Af(a, b) {
            var c = a.length;
            if (2 > c) return a;
            if (b)
                for (var b = 0.76 * b, d = 0; d < c; d++) {
                    if (b >= a[d].b) return a.slice(d)
                } else
                    for (d = 0; d < c; d++)
                        if (!wf[a[d].pb]) return a.slice(d);
            return [a[c - 1]]
        }

        function Bf(a, b, c) {
            var d = 0,
                f = 0;
            a !== k && (d = a.width, f = a.height);
            a = 16 / 9;
            d > Math.round(a * f) && (d = Math.round(a * f));
            for (var d = d * f, f = k, a = 0, g = b.length; a < g; a++) {
                var i = b[a];
                if (!c || !wf[i.pb]) {
                    if (i.size.width * i.size.height * ("medium" == i.pb ? 0.26 : 0.85) < d) return i;
                    f = i
                }
            }
            return f
        }
        var qf = {
            17: 80,
            18: 736,
            22: 3192,
            36: 256,
            37: 6192,
            43: 928,
            44: 2280,
            45: 3192,
            46: 6192,
            82: 928,
            83: 2280,
            84: 3192,
            85: 6192,
            100: 928,
            101: 2280,
            102: 3192,
            103: 6192
        };
        var Cf = ["corp.google.com", "youtube.com"],
            Df = "www.google.com/aclk www.google.com/pagead/conversion googleadservices.com/aclk googleadservices.com/pagead/conversion googleads.g.doubleclick.net/aclk googleads.g.doubleclick.net/pagead/conversion".split(" ");

        function Ef(a, b) {
            return RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i").test(a)
        };

        function S(a, b) {
            return b == h ? a : "1" == b ? j : l
        }

        function Ff(a, b, c) {
            for (var d in c)
                if (c[d] == b) return c[d];
            return a
        }

        function T(a, b) {
            return b == h ? a : b
        };

        function U() {
            this.b = new I
        }
        z(U, Rb);
        U.prototype.o = function(a, b, c) {
            this.C || this.b.o(a, b, c)
        };
        U.prototype.O = function(a, b, c) {
            this.C || this.b.O(a, b, c)
        };
        U.prototype.j = function(a, b) {
            this.C || this.b.j.apply(this.b, arguments)
        };
        U.prototype.G = function() {
            U.s.G.call(this);
            Tb(this.b)
        };

        function Gf(a, b) {
            this.a = a;
            this.b = b
        }
        Gf.prototype.getKey = function() {
            return this.a
        };
        Gf.prototype.getValue = function() {
            return this.b
        };
        Gf.prototype.X = function() {
            return new Gf(this.a, this.b)
        };

        function Hf(a) {
            this.a = [];
            if (a) a: {
                var b, c;
                if (a instanceof Hf) {
                    if (b = a.jc(), c = a.bb(), 0 >= a.Hb()) {
                        for (var a = this.a, d = 0; d < b.length; d++) a.push(new Gf(b[d], c[d]));
                        break a
                    }
                } else b = Xa(a),
                c = Wa(a);
                for (d = 0; d < b.length; d++) If(this, b[d], c[d])
            }
        }

        function If(a, b, c) {
            var d = a.a;
            d.push(new Gf(b, c));
            b = d.length - 1;
            a = a.a;
            for (c = a[b]; 0 < b;)
                if (d = b - 1 >> 1, a[d].getKey() > c.getKey()) a[b] = a[d], b = d;
                else break;
            a[b] = c
        }
        n = Hf.prototype;
        n.bb = function() {
            for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getValue());
            return b
        };
        n.jc = function() {
            for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getKey());
            return b
        };
        n.X = function() {
            return new Hf(this)
        };
        n.Hb = function() {
            return this.a.length
        };
        n.isEmpty = function() {
            return 0 == this.a.length
        };
        n.clear = function() {
            Ia(this.a)
        };

        function Jf() {
            Hf.call(this)
        }
        z(Jf, Hf);

        function Kf(a) {
            this.a = a;
            this.e = new Jf;
            this.k = {};
            this.i = new I
        }
        Kf.prototype.b = l;

        function Lf(a, b, c) {
            for (var c = bf(a.a, c), d; 0 <= c; c--) {
                d = b;
                var f = a.a.getLevel(c);
                if (d = f.Ya[Math.floor(d / (f.ka * f.rows))] ? Ze(f, d) : k) return d
            }
            return Ze(a.a.getLevel(0), b)
        }

        function Mf(a) {
            if (!a.b)
                if (a.e.isEmpty()) a.b = l;
                else {
                    a.b = j;
                    var b;
                    var c = a.e,
                        d = c.a,
                        f = d.length;
                    b = d[0];
                    if (0 >= f) b = h;
                    else {
                        if (1 == f) Ia(d);
                        else {
                            d[0] = d.pop();
                            for (var d = 0, c = c.a, f = c.length, g = c[d]; d < f >> 1;) {
                                var i = 2 * d + 1,
                                    m = 2 * d + 2,
                                    i = m < f && c[m].getKey() < c[i].getKey() ? m : i;
                                if (c[i].getKey() > g.getKey()) break;
                                c[d] = c[i];
                                d = i
                            }
                            c[d] = g
                        }
                        b = b.getValue()
                    }
                    d = new Image;
                    d.src = Ye(a.a.getLevel(b.lk), b.mk);
                    d.onload = w(a.n, a, b.lk, b.mk)
                }
        }
        Kf.prototype.n = function(a, b) {
            this.b = l;
            var c = this.a.getLevel(a);
            c.Ya[b] = j;
            Mf(this);
            var d, f = c.ka * c.rows;
            d = b * f;
            c = Math.min(d + f, c.Xb - 1);
            d = [d, c];
            this.i.j("l", d[0], d[1])
        };

        function Nf(a) {
            this.b = new I;
            this.jb = [];
            this.$d = [];
            this.k = [];
            this.wb = {};
            this.ja = {};
            this.Ua = {};
            this.setData(a)
        }
        z(Nf, U);
        var Of = {
                St: 1,
                Tt: 2,
                Ut: 3
            },
            Pf = /\/img\/watermark\/youtube_(hd_)?watermark(-vfl\S{6})?.png$/,
            Qf = "author cc_asr cc_load_policy iv_allow_external_links iv_new_window iv_load_policy keywords subscribed rvs title ttsurl ypc_buy_url ypc_cart_id ypc_price_string ypc_preview ypc_video_rental_bar_text".split(" ");
        n = Nf.prototype;
        n.Cl = l;
        n.dk = j;
        n.xa = l;
        n.ji = l;
        n.ki = j;
        n.Mg = l;
        n.Ng = 1;
        n.Jj = l;
        n.qj = 0;
        n.Hl = l;
        n.ei = l;
        n.Xj = 3;
        n.Pf = "";
        n.Rd = l;
        n.gh = l;
        n.Se = 0;
        n.Wg = l;
        n.sj = j;
        n.Vg = l;
        n.xb = l;
        n.sc = l;
        n.ia = 0;
        n.Og = 0;
        n.rj = l;
        n.Zg = l;
        n.Tg = l;
        n.ca = 0;
        n.gf = l;
        n.Ic = l;
        n.kh = 1;
        n.tj = l;

        function Rf(a, b) {
            var c = b || {};
            a.ji = S(a.ji, c.iv_allow_external_links);
            a.ki = S(a.ki, c.iv_new_window);
            a.author = T(a.author, c.author);
            a.ei = S(a.ei, c.cc_asr);
            var d = T(a.Pf, c.ttsurl),
                d = new Ac(d);
            d.Id = document.location.host;
            d = d.toString();
            a.Pf = d;
            a.a = T(a.a, c.subscribed);
            a.title = T(a.title, c.title);
            a.ig = T(a.ig, c.ypc_buy_url);
            a.vi = T(a.vi, c.ypc_cart_id);
            a.Wc = T(a.Wc, c.ypc_video_rental_bar_text);
            a.na = T(a.na, c.ypc_preview);
            a.Xc = T(a.Xc, c.ypc_price_string);
            if (c.keywords) {
                var d = Yd(c.keywords, ","),
                    f = {},
                    g;
                for (g in d) f[g] =
                    d[g] ? d[g] : j;
                a.ja = f
            }
            c.rvs && (a.Kl = Sf(c.rvs));
            Qf.forEach(function(a) {
                a in c && (this.wb[a] = c[a])
            }, a)
        }
        n.setData = function(a) {
            var b = a || {};
            this.xa = "1" == b.hlsdvr;
            this.Mg = "1" == b.infringe || "1" == b.muted;
            this.Yc = b.csi_page_type;
            this.Zc = b.sw;
            this.ya = b.t;
            this.Rd = "1" == b.enable_cardio;
            this.Wg = "1" == b.autoplay;
            this.sj = "1" != b.no_get_video_log;
            this.Vg = "1" == b.tmi;
            this.xb = "1" == b.live_playback;
            this.zl = b.iurlmaxres;
            this.Zd = b.oauth_token;
            this.z = b.ptchn;
            this.za = b.oid;
            this.e = b.ptk;
            this.hb = b.pltype;
            this.oa = b.plid;
            this.i = b.hbid;
            this.Ha = b.list;
            this.ib = b.pyv_beacon_url;
            this.V = b.sdetail;
            this.Yd = b.sourceid;
            this.Al = b.iurlsd;
            this.tj =
                "1" == b.skip_kansas_logging;
            this.n = this.n || b.vq;
            this.Vd = b.approx_threed_layout || 0;
            this.gf = "1" == b.threed_converted;
            this.Bl = b.iurl;
            this.Zg = "1" == b.sendtmp;
            this.Tg = !!this.Zc || this.Zg;
            a = b.start;
            a = Number(a);
            this.ca = isNaN(a) ? this.ca || 0 : a;
            this.B = b.video_id;
            if (a = b.watermark) a = a.split(","), 2 <= a.length && (this.ma = a[1], this.Vc = a[0]);
            if (b.ad3_module || b.ad_module) "1" == b.allow_html5_ads ? (this.Cl = j, "1" == b.ad_preroll && this.k.push("ad")) : "1" != b.supported_without_ads && (this.gh = j);
            b.allow_embed && (this.dk = "1" == b.allow_embed);
            b.iv_load_policy && (this.ra = Tf(b.iv_load_policy, this.ra));
            b.cc_load_policy && (this.Xj = Tf(b.cc_load_policy, 2));
            b.delay && (this.u = Ba(b.delay));
            b.idpj && (this.Se = Ba(b.idpj));
            b.url_encoded_fmt_stream_map && (this.$d = Sf(b.url_encoded_fmt_stream_map));
            b.hlsvp && this.$d.push({
                url: b.hlsvp,
                type: "application/x-mpegURL",
                quality: "auto",
                itag: "93"
            });
            b.length_seconds && (this.ia = Ba(b.length_seconds));
            b.ldpj && (this.Og = Ba(b.ldpj));
            b.loudness && (this.pa = b.loudness, this.Ng = -15 < this.pa && 0 > this.pa ? Math.pow(10, (-18 - this.pa) / 20) :
                1);
            b.pyv_billable_url && Ef(b.pyv_billable_url, Df) && (this.L = b.pyv_billable_url);
            b.pyv_conv_url && Ef(b.pyv_conv_url, Df) && (this.Lb = b.pyv_conv_url);
            b.threed_module && !b.threed_converted && (this.me = b.threed_module, this.Tc = 6);
            if ("1" == b.track_embed || b.tk) this.rj = j;
            b.watch_ajax_token && ke("watch_actions_ajax", b.watch_ajax_token);
            b.fresca_preroll && this.k.push("fresca");
            ["baseUrl", "uid", "convViewUrl", "oeid", "ieid"].forEach(function(a) {
                this.Ua[a] = b[a]
            }, this);
            this.Ua.focEnabled = "1" == b.focEnabled;
            this.Ua.rmktEnabled =
                "1" == b.rmktEnabled;
            var a = Ba(b.length_seconds),
                c = Ba(b.rmktPingThreshold);
            this.qj = isNaN(c) || isNaN(a) ? 0 : Math.min(c, a);
            this.wb = b;
            Rf(this, b);
            Uf(this)
        };

        function Uf(a) {
            var b, c = !(!a.me && !a.Ic);
            b = a.$d;
            for (var d = [], f = 0, g = b.length; f < g; ++f) {
                var i = b[f];
                i.sig && (i.url = de(i.url, {
                    signature: i.sig
                }));
                d.push(new nf(i.url, i.type, i.quality, i.itag, i.stereo3d))
            }
            b = d;
            if (uf()) {
                d = zf(b, c);
                b = !d.length && c ? zf(b, l) : d;
                c = [];
                d = [];
                f = document.createElement("video");
                for (g = 0; g < b.length; g++) {
                    var i = b[g],
                        m = f.canPlayType(i.Tf);
                    if (!m) {
                        var m = h,
                            o = i.Tf;
                        kf ? m = tf[o] : mf("android 2.2") && (m = sf[o]);
                        m = m || ""
                    }
                    m && ("no" != m && -1 == d.indexOf(i.Uf)) && (d.push(i.Uf), c.push(i))
                }
                b = c
            } else b = [];
            a.jb = b
        }

        function Vf(a, b) {
            var c = k;
            a.jb.some(function(a) {
                if (a.pb == b) return c = a, j
            });
            return c
        }

        function Wf(a) {
            var b = "",
                c = {};
            a.format && (b = a.format.a in yf && mf("(PS3; Leanback Shell)") ? rf(a.format) : a.format.we, a.e && a.z && (c.ptk = a.e, c.oid = a.za, c.ptchn = a.z, c.pltype = a.hb));
            return P(b, c)
        }

        function Xf(a, b) {
            return !u(a.ja[b]) ? k : a.ja[b]
        }

        function Yf(a) {
            !a.dd && a.wb.storyboard_spec && (a.dd = new $e(a.wb.storyboard_spec));
            return a.dd
        }

        function Zf(a) {
            var b = Yf(a);
            !a.ed && b && (a.ed = new Kf(b));
            return a.ed
        }

        function $f(a, b) {
            se(b, {
                format: "RAW",
                method: "GET",
                Mc: a,
                cb: a.Yq
            })
        }
        n.Yq = function(a) {
            this.C || (a = $d(a.responseText), "fail" == a.status ? this.j("onStatusFail", a) : (this.setData(a), this.j("videoinfo", a)))
        };

        function Tf(a, b) {
            var c = parseInt(a, 10),
                d;
            a: {
                for (d in Of)
                    if (Of[d] == c) {
                        d = j;
                        break a
                    }
                d = l
            }
            return d ? c : b
        }

        function Sf(a) {
            a = a.split(",");
            return a = a.map(function(a) {
                return $d(a)
            })
        }

        function ag(a, b) {
            return !!a.wb[b]
        }
        n.toggleThreeD = function() {
            this.Ic = !this.Ic;
            Uf(this)
        };

        function bg(a, b) {
            this.type = a || "";
            this.id = b || ""
        }
        bg.prototype.toString = function() {
            return this.type + this.id
        };

        function cg(a) {
            this.ea = [];
            this.a = [];
            this.fa = Math.max(0, a.index || 0);
            this.loop = !!a.loop;
            this.ca = a.startSeconds || 0;
            this.al = "1" == a.mob;
            a.video_id && (this.ea[this.fa] = new Nf(a));
            a.api && ("string" == typeof a.api && 16 == a.api.length ? a.list = "PL" + a.api : a.playlist = a.api);
            if (a.list) switch (a.listType) {
                case "user_uploads":
                    var b = a.list;
                    this.Xa || (this.b = new bg("UU", "PLAYER_" + b), dg(this, "/list_ajax?style=json&action_get_user_uploads_by_user=1", {
                        username: b
                    }));
                    break;
                case "user_favorites":
                    b = a.list;
                    this.Xa || (this.b = new bg("FL",
                        "PLAYER_" + b), dg(this, "/list_ajax?style=json&action_get_favorited_by_user=1", {
                        username: b
                    }));
                    break;
                case "search":
                    b = a.list;
                    this.Xa || (this.b = new bg("SR", b), b = {
                        search_query: b
                    }, this.al && (b.mob = "1"), dg(this, "/search_ajax?style=json&embeddable=1", b));
                    break;
                default:
                    this.b = new bg(a.list.substr(0, 2), a.list.substr(2)), this.Xa || dg(this, "/list_ajax?style=json&action_get_list=1", {
                        list: this.b
                    })
            } else a.playlist ? (b = a.playlist.toString().split(","), 0 < this.fa && (this.ea = []), B(b, function(a) {
                    a && this.ea.push(new Nf({
                        video_id: a
                    }))
                },
                this), this.Gf = this.ea.length, this.Ya = j) : a.videoList && (0 < this.fa && (this.ea = []), B(a.videoList, function(a) {
                this.ea.push(new Nf(a))
            }, this), this.Gf = this.ea.length, this.Ya = j);
            this.setShuffle(!!a.shuffle);
            a.suggestedQuality && (this.e = a.suggestedQuality)
        }
        n = cg.prototype;
        n.loop = l;
        n.ca = 0;
        n.Zl = l;
        n.fa = 0;
        n.Gf = 0;
        n.al = l;
        n.Ya = l;
        n.Xa = l;
        n.Hc = function() {
            if (++this.fa >= this.ea.length)
                if (this.loop) this.fa = 0;
                else return k;
            eg(this, this.fa);
            return fg(this, this.fa)
        };

        function gg(a) {
            if (0 > --a.fa)
                if (a.loop) a.fa = a.ea.length - 1;
                else return k;
            eg(a, a.fa);
            return fg(a, a.fa)
        }

        function fg(a, b) {
            var c = b != h ? b : a.fa;
            return c in a.ea ? a.ea[a.a[c]] : k
        }
        n.setShuffle = function(a) {
            this.Zl = a;
            this.a = [];
            for (a = 0; a < this.ea.length; a++) this.a.push(a);
            if (this.Zl)
                for (a = 1; a < this.a.length; a++) {
                    var b = Math.floor(Math.random() * a),
                        c = this.a[a];
                    this.a[a] = this.a[b];
                    this.a[b] = c
                }
        };

        function eg(a, b) {
            a.fa = Lb(b, 0, a.ea.length - 1);
            a.ca = 0
        }

        function dg(a, b, c) {
            se(P(b, c), {
                format: "JSON",
                cb: function(a, b) {
                    b.video && b.video.length && (this.ea = [], B(b.video, function(a) {
                        a && (a.video_id = a.encrypted_id, this.ea.push(new Nf(a)))
                    }, this), this.Gf = this.ea.length, this.setShuffle(l), this.Xa = l, this.Ya = j, this.Yh && this.Yh())
                },
                Mc: a
            })
        };

        function hg(a, b, c) {
            a.style[("" + c).replace(/\-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })] = b
        }

        function ig(a, b) {
            var c = $c(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
        }

        function jg(a, b) {
            return ig(a, b) || (a.currentStyle ? a.currentStyle[b] : k) || a.style && a.style[b]
        }

        function kg(a, b, c) {
            var d, f = ub && (nb || zb) && E("1.9");
            b instanceof F ? (d = b.x, b = b.y) : (d = b, b = c);
            a.style.left = lg(d, f);
            a.style.top = lg(b, f)
        }

        function mg(a) {
            if (wb && vb) {
                var b = a.ownerDocument.defaultView;
                if (b != b.top) return l
            }
            return !!a.getBoundingClientRect
        }

        function ng(a) {
            var b = a.getBoundingClientRect();
            C && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        }

        function og(a) {
            if (C && !Kb(8)) return a.offsetParent;
            for (var b = $c(a), c = jg(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
                if (c = jg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return k
        }

        function pg(a) {
            var b, c = $c(a),
                d = jg(a, "position"),
                f = ub && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
                g = new F(0, 0),
                i;
            b = c ? $c(c) : document;
            i = C && !Kb(9) && !od(Yc(b)) ? b.body : b.documentElement;
            if (a == i) return g;
            if (mg(a)) b = ng(a), a = Yc(c), a = fd(a.a), g.x = b.left + a.x, g.y = b.top + a.y;
            else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(i), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
            else {
                b = a;
                do {
                    g.x += b.offsetLeft;
                    g.y += b.offsetTop;
                    b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
                    if (vb && "fixed" == jg(b, "position")) {
                        g.x += c.body.scrollLeft;
                        g.y += c.body.scrollTop;
                        break
                    }
                    b = b.offsetParent
                } while (b && b != a);
                if (tb || vb && "absolute" == d) g.y -= c.body.offsetTop;
                for (b = a;
                    (b = og(b)) && b != c.body && b != i;)
                    if (g.x -= b.scrollLeft, !tb || "TR" != b.tagName) g.y -= b.scrollTop
            }
            return g
        }

        function qg(a, b) {
            var c = rg(a),
                d = rg(b);
            return new F(c.x - d.x, c.y - d.y)
        }

        function rg(a) {
            var b = new F;
            if (1 == a.nodeType) {
                if (mg(a)) {
                    var c = ng(a);
                    b.x = c.left;
                    b.y = c.top
                } else {
                    var c = Yc(a),
                        c = fd(c.a),
                        d = pg(a);
                    b.x = d.x - c.x;
                    b.y = d.y - c.y
                }
                if (ub && !E(12)) {
                    var f;
                    C ? f = "-ms-transform" : vb ? f = "-webkit-transform" : tb ? f = "-o-transform" : ub && (f = "-moz-transform");
                    var g;
                    f && (g = jg(a, f));
                    g || (g = jg(a, "transform"));
                    g ? (a = g.match(sg), a = !a ? new F(0, 0) : new F(parseFloat(a[1]), parseFloat(a[2]))) : a = new F(0, 0);
                    b = new F(b.x + a.x, b.y + a.y)
                }
            } else f = ga(a.Wp), g = a, a.targetTouches ? g = a.targetTouches[0] : f && a.Gb.targetTouches && (g =
                a.Gb.targetTouches[0]), b.x = g.clientX, b.y = g.clientY;
            return b
        }

        function tg(a, b, c) {
            b instanceof G ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
            ug(a, b);
            a.style.height = lg(c, j)
        }

        function lg(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        }

        function ug(a, b) {
            a.style.width = lg(b, j)
        }

        function vg(a) {
            if ("none" != jg(a, "display")) return wg(a);
            var b = a.style,
                c = b.display,
                d = b.visibility,
                f = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = wg(a);
            b.display = c;
            b.position = f;
            b.visibility = d;
            return a
        }

        function wg(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = vb && !b && !c;
            return (!da(b) || d) && a.getBoundingClientRect ? (a = ng(a), new G(a.right - a.left, a.bottom - a.top)) : new G(b, c)
        }

        function xg(a, b) {
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
        }

        function yg(a) {
            var b = $c(a),
                c = C && a.currentStyle;
            if (c && od(Yc(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = zg(a, c.width, "width", "pixelWidth"), a = zg(a, c.height, "height", "pixelHeight"), new G(b, a);
            c = new G(a.offsetWidth, a.offsetHeight);
            b = Ag(a);
            a = Bg(a);
            return new G(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
        }

        function zg(a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var f = a.style[c],
                g = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = f;
            a.runtimeStyle[c] = g;
            return b
        }

        function Cg(a, b) {
            return zg(a, a.currentStyle ? a.currentStyle[b] : k, "left", "pixelLeft")
        }

        function Ag(a) {
            if (C) {
                var b = Cg(a, "paddingLeft"),
                    c = Cg(a, "paddingRight"),
                    d = Cg(a, "paddingTop"),
                    a = Cg(a, "paddingBottom");
                return new Nb(d, c, a, b)
            }
            b = ig(a, "paddingLeft");
            c = ig(a, "paddingRight");
            d = ig(a, "paddingTop");
            a = ig(a, "paddingBottom");
            return new Nb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        }
        var Dg = {
            thin: 2,
            medium: 4,
            thick: 6
        };

        function Eg(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : k)) return 0;
            var c = a.currentStyle ? a.currentStyle[b + "Width"] : k;
            return c in Dg ? Dg[c] : zg(a, c, "left", "pixelLeft")
        }

        function Bg(a) {
            if (C) {
                var b = Eg(a, "borderLeft"),
                    c = Eg(a, "borderRight"),
                    d = Eg(a, "borderTop"),
                    a = Eg(a, "borderBottom");
                return new Nb(d, c, a, b)
            }
            b = ig(a, "borderLeftWidth");
            c = ig(a, "borderRightWidth");
            d = ig(a, "borderTopWidth");
            a = ig(a, "borderBottomWidth");
            return new Nb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        }
        var Fg = /[^\d]+$/,
            Gg = {
                cm: 1,
                "in": 1,
                mm: 1,
                pc: 1,
                pt: 1
            },
            Hg = {
                em: 1,
                ex: 1
            };

        function Ig(a) {
            var b = jg(a, "fontSize"),
                c;
            c = (c = b.match(Fg)) && c[0] || k;
            if (b && "px" == c) return parseInt(b, 10);
            if (C) {
                if (c in Gg) return zg(a, b, "left", "pixelLeft");
                if (a.parentNode && 1 == a.parentNode.nodeType && c in Hg) return a = a.parentNode, c = jg(a, "fontSize"), zg(a, b == c ? "1em" : b, "left", "pixelLeft")
            }
            c = gd("span", {
                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
            });
            a.appendChild(c);
            b = c.offsetHeight;
            N(c);
            return b
        }
        var sg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

        function Jg(a, b, c) {
            this.a = b.name || k;
            this.Hi = {};
            for (a = 0; a < c.length; a++) b = c[a], this.Hi[b.a] = b
        }
        Jg.prototype.getName = function() {
            return this.a
        };

        function Kg(a) {
            a = Wa(a.Hi);
            Pa(a, function(a, c) {
                return a.a - c.a
            });
            return a
        };

        function Lg(a, b, c) {
            this.a = b;
            this.i = c.name;
            this.e = !!c.zd;
            this.b = c.I
        }
        Lg.prototype.getName = function() {
            return this.i
        };

        function Mg() {
            this.Pa = {};
            this.Je = this.constructor.Je;
            this.a = this.Je.Hi;
            this.Qa = k
        }
        n = Mg.prototype;
        n.hi = function() {
            return this.Je
        };

        function Ng(a, b) {
            var c = b.a;
            return c in a.Pa && da(a.Pa[c]) && a.Pa[c] !== k
        }
        n.get = function(a, b) {
            var c;
            c = this.a[a.a];
            var d = Og(this, c);
            c.e ? (s(d), c = d[b || 0]) : (s(d), c = d);
            return c
        };
        n.clear = function(a) {
            a = a.a;
            delete this.Pa[a];
            this.Qa && delete this.Qa[a]
        };
        n.equals = function(a) {
            if (!a || this.constructor != a.constructor) return l;
            for (var b = Kg(this.hi()), c = 0; c < b.length; c++) {
                var d = b[c];
                if (Ng(this, d) != Ng(a, d)) return l;
                if (Ng(this, d)) {
                    var f = 11 == d.b || 10 == d.b,
                        g = Og(this, d),
                        i = Og(a, d);
                    if (d.e) {
                        if (g.length != i.length) return l;
                        for (d = 0; d < g.length; d++)
                            if (!(f ? g[d].equals(i[d]) : g[d] == i[d])) return l
                    } else if (!(f ? g.equals(i) : g == i)) return l
                }
            }
            return j
        };

        function Pg(a, b) {
            for (var c = Kg(a.hi()), d = 0; d < c.length; d++) {
                var f = c[d];
                if (Ng(b, f)) {
                    a.Qa && delete a.Qa[f.a];
                    var g = 11 == f.b || 10 == f.b;
                    if (f.e) {
                        var i;
                        i = b;
                        i = Og(i, i.a[f.a]);
                        i == k || s(i);
                        i = i || [];
                        for (var m = 0; m < i.length; m++) {
                            var o = a,
                                q = f,
                                v = g ? i[m].X() : i[m],
                                q = q.a;
                            o.Pa[q] || (o.Pa[q] = []);
                            o.Pa[q].push(v);
                            o.Qa && delete o.Qa[q]
                        }
                    } else i = Og(b, f), g ? (g = Og(a, f)) ? Pg(g, i) : (g = a, i = i.X(), f = f.a, g.Pa[f] = i, g.Qa && (g.Qa[f] = i)) : (g = a, f = f.a, g.Pa[f] = i, g.Qa && (g.Qa[f] = i))
                }
            }
        }
        n.X = function() {
            var a = new this.constructor;
            a.Pa = {};
            a.Qa && (a.Qa = {});
            Pg(a, this);
            return a
        };

        function Og(a, b) {
            var c = b.a;
            if (!c in a.Pa) return k;
            c = a.Pa[c];
            return c == k ? k : c
        }

        function Qg(a, b) {
            var c = [],
                d, f;
            for (f in b) b.hasOwnProperty(f) && (0 == f ? d = b[0] : c.push(new Lg(0, f, b[f])));
            a.Je = new Jg(0, d, c);
            a.hi = function() {
                return a.Je
            }
        };
        var Rg = {
            Ur: 0,
            Br: 1,
            Qr: 2,
            Tr: 3,
            ds: 4,
            ur: 5,
            Lr: 6,
            Ir: 7,
            Jr: 8,
            Kr: 9,
            Gr: 10,
            Hr: 11,
            gs: 12,
            es: 13,
            Sr: 14,
            yr: 20,
            Zr: 21,
            Cr: 22,
            Dr: 23,
            Yr: 24,
            Mr: 25,
            as: 30,
            bs: 31,
            $r: 32,
            cs: 33,
            Fr: 40,
            Er: 41,
            hs: 42,
            is: 43,
            Nr: 50,
            Rr: 51,
            Vr: 52,
            Wr: 53,
            Xr: 54,
            xr: 55,
            zr: 56,
            Pr: 60,
            Or: 61,
            Ar: 70,
            wr: 80,
            js: 90
        };

        function Sg() {
            Mg.apply(this)
        }
        z(Sg, Mg);

        function Tg() {
            Mg.apply(this)
        }
        z(Tg, Mg);

        function Ug() {
            Mg.apply(this)
        }
        z(Ug, Mg);

        function Vg() {
            Mg.apply(this)
        }
        z(Vg, Mg);

        function Wg() {
            Mg.apply(this)
        }
        z(Wg, Mg);

        function Xg() {
            Mg.apply(this)
        }
        z(Xg, Mg);
        Qg(Sg, {
            "0": {
                name: "YtAdType",
                Pe: "video.YtAdType"
            },
            1: {
                name: "ad_namespace",
                required: j,
                I: 14,
                defaultValue: 0,
                type: {
                    Ms: 0,
                    wt: 1,
                    Ns: 2,
                    ft: 3,
                    At: 4,
                    tu: 5,
                    ku: 6,
                    Zs: 7,
                    xt: 8,
                    $s: 9,
                    ct: 10,
                    ju: 11,
                    Ss: 12,
                    Qu: 13
                }
            },
            2: {
                name: "ad_format",
                required: j,
                I: 14,
                defaultValue: 0,
                type: {
                    Js: 0,
                    Lt: 1,
                    Kt: 2,
                    Zt: 3,
                    Eu: 4,
                    Mt: 5
                }
            },
            3: {
                name: "ad_invideo",
                I: 14,
                defaultValue: 0,
                type: {
                    Ls: 0,
                    it: 1,
                    jt: 2,
                    kt: 3,
                    lt: 4,
                    ht: 5,
                    dt: 6
                }
            },
            4: {
                name: "invideo_autoplay",
                I: 14,
                defaultValue: 0,
                type: {
                    Vs: 0,
                    iu: 1
                }
            },
            5: {
                name: "ad_instream",
                I: 14,
                defaultValue: 0,
                type: {
                    Ks: 0,
                    Cu: 1
                }
            },
            6: {
                name: "ad_instream_long",
                I: 8,
                type: Boolean
            }
        });
        Qg(Tg, {
            "0": {
                name: "AdId",
                Pe: "video.AdId"
            },
            1: {
                name: "ad_network",
                I: 14,
                defaultValue: 1,
                type: {
                    cu: 1,
                    tr: 2
                }
            },
            2: {
                name: "ad_network_name",
                I: 9,
                type: String
            },
            3: {
                name: "ad_id",
                required: j,
                I: 9,
                type: String
            }
        });
        Qg(Ug, {
            "0": {
                name: "YtAdEvent",
                Pe: "video.YtAdEvent"
            },
            1: {
                name: "ad_event_type",
                required: j,
                I: 14,
                defaultValue: 0,
                type: {
                    vs: 0,
                    Cs: 1,
                    ws: 2,
                    Fs: 3,
                    xs: 4,
                    ys: 5,
                    rs: 6,
                    qs: 7,
                    ms: 8,
                    ks: 9,
                    Ds: 10,
                    Es: 11,
                    ls: 12,
                    ts: 13,
                    Gs: 14,
                    us: 15,
                    os: 16,
                    Hs: 100,
                    Is: 101,
                    As: 130,
                    zs: 131,
                    Bs: 132
                }
            },
            2: {
                name: "wall_time",
                required: j,
                I: 2,
                type: Number
            },
            3: {
                name: "media_time",
                required: j,
                I: 2,
                type: Number
            },
            4: {
                name: "logentry_time_usec",
                required: j,
                I: 3,
                type: String
            },
            5: {
                name: "ad_error_type",
                I: 14,
                defaultValue: 0,
                type: Rg
            }
        });
        Qg(Vg, {
            "0": {
                name: "YtAdSlot",
                Pe: "video.YtAdSlot"
            },
            1: {
                name: "slot_time",
                required: j,
                I: 2,
                type: Number
            },
            2: {
                name: "ad_type",
                required: j,
                I: 11,
                type: Sg
            },
            3: {
                name: "ad_events",
                zd: j,
                I: 11,
                type: Ug
            },
            4: {
                name: "ad_video_duration",
                I: 2,
                type: Number
            },
            5: {
                name: "ad_id",
                I: 9,
                type: String
            },
            6: {
                name: "slot_index",
                I: 5,
                type: Number
            }
        });
        Qg(Wg, {
            "0": {
                name: "YtVideoMetadata",
                Pe: "video.YtVideoMetadata"
            },
            1: {
                name: "content_owner_ids",
                zd: j,
                I: 9,
                type: String
            },
            2: {
                name: "video_duration_seconds",
                I: 2,
                type: Number
            },
            3: {
                name: "all_content_owner_ids",
                I: 9,
                type: String
            }
        });
        Qg(Xg, {
            "0": {
                name: "YtWatchAdInfo",
                Pe: "video.YtWatchAdInfo"
            },
            1: {
                name: "video_id",
                required: j,
                I: 9,
                type: String
            },
            2: {
                name: "allowed_ads",
                zd: j,
                I: 11,
                type: Sg
            },
            3: {
                name: "ad_slots",
                zd: j,
                I: 11,
                type: Vg
            },
            4: {
                name: "ps",
                I: 9,
                type: String
            },
            5: {
                name: "el",
                I: 9,
                type: String
            },
            6: {
                name: "country",
                I: 9,
                type: String
            },
            7: {
                name: "feature",
                I: 9,
                type: String
            },
            8: {
                name: "blocked",
                I: 8,
                type: Boolean
            },
            9: {
                name: "plid",
                I: 9,
                type: String
            },
            10: {
                name: "video_metadata",
                I: 11,
                type: Wg
            },
            11: {
                name: "experiment_id",
                zd: j,
                I: 3,
                type: String
            },
            12: {
                name: "ad_flags",
                I: 4,
                type: String
            },
            13: {
                name: "all_experiment_ids",
                I: 9,
                type: String
            },
            14: {
                name: "no_ads_returned",
                I: 8,
                type: Boolean
            },
            15: {
                name: "ad_errors",
                zd: j,
                I: 14,
                defaultValue: 0,
                type: Rg
            },
            16: {
                name: "ad_slot_with_event",
                I: 11,
                type: Vg
            }
        });

        function Yg() {};

        function Zg() {}
        z(Zg, Yg);
        Zg.prototype.Hb = function() {
            var a = 0;
            Ua(this.kc(j), function() {
                a++
            });
            return a
        };
        Zg.prototype.clear = function() {
            var a;
            a = this.kc(j);
            if (fa(a)) a = La(a);
            else {
                a = Ta(a);
                var b = [];
                Ua(a, function(a) {
                    b.push(a)
                });
                a = b
            }
            var c = this;
            B(a, function(a) {
                c.yc(a)
            })
        };

        function $g(a) {
            this.a = a
        }
        z($g, Zg);

        function ah(a) {
            try {
                return !!a.a && !!a.a.getItem
            } catch (b) {}
            return l
        }
        n = $g.prototype;
        n.qi = function(a, b) {
            try {
                this.a.setItem(a, b)
            } catch (c) {
                e("Storage mechanism: Quota exceeded")
            }
        };
        n.get = function(a) {
            a = this.a.getItem(a);
            if (u(a) || a === k) return a;
            e("Storage mechanism: Invalid value was encountered")
        };
        n.yc = function(a) {
            this.a.removeItem(a)
        };
        n.Hb = function() {
            return this.a.length
        };
        n.kc = function(a) {
            var b = 0,
                c = new Sa,
                d = this;
            c.a = function() {
                b >= d.Hb() && e(Ra);
                var c;
                c = d.a.key(b++);
                if (a) return c;
                c = d.a.getItem(c);
                if (u(c)) return c;
                e("Storage mechanism: Invalid value was encountered")
            };
            return c
        };
        n.clear = function() {
            this.a.clear()
        };

        function bh() {
            var a = k;
            try {
                a = window.localStorage || k
            } catch (b) {}
            this.a = a
        }
        z(bh, $g);

        function ch(a, b) {
            this.Ld = a;
            this.Kc = b + "::"
        }
        z(ch, Zg);
        n = ch.prototype;
        n.Ld = k;
        n.Kc = "";
        n.qi = function(a, b) {
            this.Ld.qi(this.Kc + a, b)
        };
        n.get = function(a) {
            return this.Ld.get(this.Kc + a)
        };
        n.yc = function(a) {
            this.Ld.yc(this.Kc + a)
        };
        n.kc = function(a) {
            var b = this.Ld.kc(j),
                c = new Sa,
                d = this;
            c.a = function() {
                for (var c = b.a(); c.substr(0, d.Kc.length) != d.Kc;) c = b.a();
                return a ? c.substr(d.Kc.length) : d.Ld.get(c)
            };
            return c
        };

        function dh(a) {
            this.a = a;
            this.b = new Sd
        }
        dh.prototype.a = k;
        dh.prototype.b = k;

        function eh(a, b, c) {
            da(c) ? a.a.qi(b, Td(a.b, c)) : a.a.yc(b)
        }
        dh.prototype.get = function(a) {
            a = this.a.get(a);
            if (a !== k) try {
                return Qd(a)
            } catch (b) {
                e("Storage: Invalid value was encountered")
            }
        };

        function fh(a) {
            this.pubsub = new I;
            this.a = a;
            if (this.Di) {
                var a = "yt-html5-player-modules::" + this.Di,
                    b = new bh;
                if (a = ah(b) ? a ? new ch(b, a) : b : k) this.n = new dh(a)
            }
        }
        n = fh.prototype;
        n.pubsub = k;
        n.U = "";
        n.Nc = "";
        n.ga = l;
        n.ad = function(a) {
            var b = La(arguments),
                c = w(this.ob, this),
                d = w(this.rb, this);
            b.forEach(function(a) {
                a.Si = this.U;
                a.pubsub.o("onEnter", c);
                a.pubsub.o("onExit", d)
            }, this);
            this.pubsub.j("command_add_cuerange", b)
        };
        n.vk = function(a) {
            var b = La(arguments);
            this.pubsub.j("command_remove_cuerange", b)
        };

        function gh(a) {
            a.pubsub.j("command_remove_cuerange_all", a.U)
        }

        function hh(a) {
            a.pubsub.j("command_preroll_ready", a.U)
        }
        n.appendToVideoContent = function(a) {
            J(a, this.U);
            this.a.appendToVideoContent(a)
        };
        n.appendAboveVideoControls = function(a) {
            J(a, this.U);
            this.a.appendAboveVideoControls(a)
        };

        function ih(a) {
            a.pubsub.j("command_show_dialog_area")
        }

        function jh(a) {
            a.pubsub.j("command_hide_all_dialogs")
        }
        n.create = function() {
            J(this.a.getRootNode(), this.U + "-created")
        };
        n.destroy = function() {
            this.$();
            K(this.a.getRootNode(), this.U + "-created")
        };
        n.load = function() {
            J(this.a.getRootNode(), this.U + "-loaded");
            this.pubsub.j("loaded")
        };
        n.$ = function() {
            K(this.a.getRootNode(), this.U + "-loaded")
        };
        n.ob = function() {};
        n.rb = function() {};
        n.lg = function() {};
        n.log = function(a) {
            this.pubsub.j("command_log", this.Nc, a)
        };

        function kh(a, b, c) {
            var d = {},
                f;
            for (f in b) d[a.U + "_" + f] = b[f];
            var b = {},
                g;
            for (g in c) b[a.U + "_" + g] = c[g];
            a.pubsub.j("command_log_timing", d, b)
        }

        function lh(a, b) {
            if (!a.n) return k;
            var c;
            try {
                c = a.n.get(b)
            } catch (d) {
                a.n && a.n.a.yc(b)
            }
            return c
        }

        function mh(a, b, c) {
            if (a.n) try {
                eh(a.n, b, c)
            } catch (d) {}
        }
        n.playVideo = function() {
            this.pubsub.j("command_play")
        };

        function nh(a, b) {
            a.pubsub.j("command_redirected_show_is_playing", b)
        }
        n.Tm = function() {};
        n.Im = function() {
            return []
        };
        n.eb = function() {
            return l
        };

        function oh() {}
        var ph = new oh;

        function qh() {
            var a = document.createElement("video");
            x(a, ph);
            O(a, "loadeddata", w(a.er, a));
            return a
        }
        n = oh.prototype;
        n.tg = 0;

        function rh(a, b) {
            var c = b || "";
            a.src && "" == c || (c && (a.src = c), a.load())
        }
        n.seekTo = function(a) {
            0 != this.readyState && (this.currentTime = a)
        };
        n.getType = function() {
            return this.type
        };
        n.getDuration = function(a) {
            a && (this.tg = this.duration || 0);
            return this.tg
        };
        n.getCurrentTime = function() {
            return this.currentTime
        };
        n.getLoadProgressFraction = function() {
            var a = this.getDuration();
            if (Infinity == a) return 1;
            if (a && this.buffered && 0 < this.buffered.length) {
                var b = this.getBufferedTimeRangeIndex();
                return this.buffered.end(b) / a
            }
            return 0
        };
        n.playVideo = function() {
            this.ended && (this.currentTime = 0);
            this.hasAttribute("src") || (this.setAttribute("src", this.a || ""), this.a = k, this.load());
            this.play()
        };

        function sh(a) {
            a.currentSrc && (a.a = a.currentSrc, jd(a), a.removeAttribute("src"), a.load())
        }
        n.getVolume = function() {
            return 100 * this.volume
        };
        n.isMuted = function() {
            return this.muted
        };
        n.getBufferedTimeRangeIndex = function() {
            for (var a = this.buffered, b = this.getCurrentTime(), c = 0; c < a.length && !(a.start(c) > b); c++)
                if (b <= a.end(c)) return c;
            return 0
        };
        n.er = function() {
            this.hasAttribute("controls") && this.setAttribute("controls", "true")
        };
        var th = {
                wu: "html5-stop-propagation",
                Us: "html5-autohide",
                gt: "html5-chromeless",
                Dt: "hide-controls",
                Pt: "html5-live-dvr-disabled",
                Qt: "html5-live-dvr-engaged",
                Rt: "html5-live-playback",
                Yt: "modest-branding",
                $t: "html5-native-controls",
                ru: "seeking-mode",
                yu: "html5-tablet",
                xu: "html5-tablet-body",
                Fu: "html5-video-container",
                Gu: "html5-video-content",
                Hu: "html5-video-controls",
                Iu: "html5-video-fallback",
                Ju: "html5-video-fallback-content",
                Ku: "html5-storyboard",
                Lu: "html5-video-loader",
                Ou: "html5-watermark",
                Ys: "html5-branded-watermark",
                Nu: "html5-viewport-sheet",
                nt: "html5-context-menu",
                bn: "html5-context-menu-copy-video-url",
                dn: "html5-context-menu-pop-out",
                cn: "html5-context-menu-copy-video-url-at-current-time",
                an: "html5-context-menu-copy-embed-html",
                gn: "html5-context-menu-stop-download",
                en: "html5-context-menu-report-playback-issue",
                $m: "html5-context-menu-copy-debug-info",
                fn: "html5-context-menu-show-video-info",
                qt: "html5-show-video-info-template",
                Xt: "html5-modal-panel",
                Jt: "html5-info-bar",
                Et: "html5-hide-share",
                Ft: "html5-hide-volume",
                Mu: "video-thumbnail",
                Ws: "html5-bezel",
                Xs: "html5-bezel-fade",
                hu: "html5-popup-dialog",
                Ps: "html5-async-progress",
                Qs: "html5-async-success",
                Os: "html5-async-error",
                pu: "html5-scalable-icon",
                eu: "player-root",
                du: "player-container",
                qr: "player-actions-container",
                or: "player-actions-close",
                pr: "player-actions-close-button",
                rr: "player-actions-share",
                sr: "small-view"
            },
            uh = {
                "-1": "",
                "0": "ended-mode",
                1: "playing-mode",
                2: "paused-mode",
                3: "buffering-mode",
                5: "cued-mode"
            };
        var vh = {
                mu: "red",
                Pu: "white"
            },
            wh = {
                br: "0",
                vu: "1",
                tt: "2"
            },
            xh = {
                detailpage: {
                    Re: j
                }
            };
        xh.embedded = {
            Qe: zd("fullScreenEnabled", document),
            ui: j
        };
        var yh = {
            blazer: {
                jh: "youtube_mobile",
                ub: l,
                Oj: l,
                le: l,
                Nb: j,
                Ta: l,
                wa: j
            },
            "native": {
                le: l,
                Ta: j
            },
            olympics: {
                le: l,
                wa: j
            },
            touch: {
                le: l,
                wa: j
            }
        };

        function zh(a) {
            this.b = [];
            this.eventLabel = a.el || this.eventLabel;
            var b = xh[this.eventLabel];
            b && x(this, b);
            this.Aa = a.ps || this.Aa;
            (b = yh[this.Aa]) && x(this, b);
            !tb && (!kf && !jf) && (this.ak = j);
            var b = document.createElement("video"),
                c = b.muted;
            b.muted = !c;
            b.muted != c && (this.vj = j);
            Ah(this, a)
        }
        n = zh.prototype;
        n.lj = j;
        n.Qe = j;
        n.rc = l;
        n.ub = l;
        n.cf = l;
        n.gb = "/";
        n.Oj = j;
        n.ae = "red";
        n.Bh = "1";
        n.le = j;
        n.ak = l;
        n.vj = l;
        n.eventLabel = "detailpage";
        n.zh = l;
        n.Nb = l;
        n.kd = l;
        n.th = l;
        n.loop = l;
        n.Sc = l;
        n.Pg = l;
        n.Lg = "";
        n.be = l;
        n.Aa = k;
        n.ih = l;
        n.Xd = l;
        n.qc = j;
        n.$c = j;
        n.hf = j;
        n.Re = l;
        n.ui = l;
        n.Ug = l;
        n.ff = l;
        n.Ta = l;
        n.wa = l;
        n.Ve = k;
        n.wc = k;

        function Ah(a, b) {
            a.lj = "0" != b.add_player_event_listeners;
            var c = S(a.Qe, b.fs);
            a.Qe = "detailpage" == a.eventLabel || "olympics" == a.Aa ? c : c && Id();
            a.rc = S(a.rc, "3" == b.autohide);
            a.ub = S(a.ub, b.autoplay);
            a.cf = S(a.cf, b.bwa);
            a.ae = Ff(a.ae, b.color, vh);
            a.L = T(a.L, b.content_v);
            a.Bh = Ff(a.Bh, b.controls, wh);
            a.a = T(a.a, b.eurl);
            a.k = T(a.k, b.framer);
            a.zh = S(a.zh, b.fshd);
            a.e = T(a.e, b.hl);
            a.Nb = S(a.Nb, b.is_html5_mobile_device);
            a.kd = S(a.kd, b.player_wide);
            a.th = S(a.th, b.is_playground);
            a.loop = S(a.loop, b.loop);
            a.Sc = S(a.Sc, b.modestbranding);
            "red" != a.ae && (a.Sc = l);
            a.hb = b.nbcolympicsadkeyvalues;
            a.ib = b.nbcolympicssitesection;
            a.be = S(a.be, b.on3g);
            a.n = Ff(a.n, b.vq, vf);
            a.Lg = T(a.Lg, b.playerapiid);
            a.ih = S(a.ih, b.playsinline);
            a.referrer = T(a.referrer, b.referrer);
            a.i = T(a.i, b.feature);
            a.V = T(a.V, b.cr);
            a.ra = T(a.ra, b.q);
            a.Xd = S(a.Xd, b.logwatch);
            a.$c = S(a.$c, b.showinfo);
            a.hf = S(a.hf, b.rel);
            a.Re = S(a.Re, b.enablesizebutton);
            a.Ug = S(a.Ug, b.ss);
            a.u = T(a.u, b.theme);
            a.Ta = S(a.Ta, b.use_native_controls);
            a.ff = S(a.ff, b.ssl);
            a.wa = S(a.wa, b.use_tablet_controls);
            a.za = T(a.za,
                b.attrib);
            a.z = T(a.z, b.sk);
            a.na = a.ff ? "https" : "http";
            a.qc = "0" != a.Bh;
            if (c = b.BASE_YT_URL) Ef(c, Cf) && (a.gb = c);
            if (c = b.fexp) a.b = c.split(","), a.b.forEach(function() {});
            Bh(a, b);
            if ("detailpage" != a.eventLabel && (b.list || b.api)) a.Pg = j;
            "detailpage" == a.eventLabel && delete a.a;
            a.C = b
        }

        function Ch(a, b) {
            a.ja = b.get("d", a.ja);
            a.pa = b.get("c", a.pa);
            a.ma = b.get("f", a.ma)
        }

        function Bh(a, b) {
            a.Xd = S(a.Xd, b.logwatch);
            a.ya = b.user_age == h ? a.ya : Number(b.user_age);
            a.Wa = T(a.Wa, b.user_gender)
        }

        function Dh(a, b) {
            var c = {
                html5: "1",
                video_id: b.B,
                eurl: a.a,
                ps: a.Aa,
                el: a.eventLabel,
                hl: a.e,
                list: b.Ha,
                access_token: b.Zd
            };
            b.na && (c.ypc_preview = "1");
            return P(a.gb + "get_video_info", c)
        }

        function Eh(a) {
            var b = {
                contact_type: "playbackissue",
                html5: 1,
                plid: a.oa,
                v: a.B
            };
            a.format && (b.fmt = a.format.a);
            return P("//web.archive.org/web/20120622093201/http://www.google.com/support/youtube/bin/request.py", b)
        }

        function Fh(a) {
            a = a.Lb;
            return !a ? new G(Number.NaN, Number.NaN) : new G(a.clientWidth, a.clientHeight)
        }

        function Gh(a) {
            return !a.m ? new G(Number.NaN, Number.NaN) : new G(a.m.clientWidth, a.m.clientHeight)
        }

        function Hh() {
            return Ef(document.location.toString(), Cf) && 0 != document.location.pathname.indexOf("/embed/")
        };

        function Ih(a, b) {
            this.a = a;
            this.b = b
        };

        function Jh(a) {
            var b = parseInt(a, 10),
                a = parseInt(b / 3600, 10),
                c = parseInt(b % 3600 / 60, 10),
                b = parseInt(b % 60, 10),
                d = "";
            0 < a && (d += a.toString() + ":", 10 > c && (d += "0"));
            d += c.toString() + ":";
            10 > b && (d += "0");
            return d += b.toString()
        };

        function Kh(a, b, c) {
            this.n = a;
            this.k = b;
            this.i = c;
            this.e = w(this.u, this)
        }
        z(Kh, Rb);
        Kh.prototype.b = l;
        Kh.prototype.a = k;
        Kh.prototype.G = function() {
            Kh.s.G.call(this);
            this.a && (qc.clearTimeout(this.a), this.a = k, this.b = l)
        };
        Kh.prototype.u = function() {
            this.a = k;
            this.b && (this.b = l, Lh(this))
        };

        function Lh(a) {
            a.a = tc(a.e, a.k);
            a.n.call(a.i)
        };

        function Mh(a, b, c, d) {
            var f = Math.min(c / (b.Gm / b.ka), d / (b.Fm / b.rows)),
                g = b.Gm * f,
                f = b.Fm * f,
                g = Math.floor(g / b.ka) * b.ka,
                f = Math.floor(f / b.rows) * b.rows,
                i = g / b.ka,
                m = f / b.rows,
                o = Math.floor((c - i) / 2),
                c = Math.ceil((c - i) / 2),
                d = Math.floor((d - m) / 2),
                b = {
                    width: i + "px",
                    height: m + "px",
                    "margin-top": d + "px",
                    "margin-bottom": d + "px",
                    "margin-left": o + "px",
                    "margin-right": c + "px",
                    "background-image": "url(" + b.url + ")",
                    "background-position": -1 * b.Uq * i + "px " + -1 * b.row * m + "px",
                    "background-size": g + "px " + f + "px"
                };
            u(b) ? hg(a, h, b) : Va(b, na(hg, a))
        };

        function Nh() {
            this.C = new Kh(this.Sq, 250, this)
        }
        n = Nh.prototype;
        n.jf = l;
        n.vc = 0;
        n.Dh = 0;
        n.Xh = 0;
        n.gl = 10;
        n.Ba = 0;
        n.kf = 0;
        n.Qh = 0;
        n.nk = 0;
        n.ek = function(a, b) {
            this.a.style.display = "none";
            for (var c, d, f = a; f <= b; f++)
                if (d = this.a.children[f]) c = Lf(this.e, f, this.Ba), Mh(d, c, this.Ba, this.kf);
            this.a.style.display = ""
        };

        function Oh(a, b) {
            if (b != a.Qh) {
                var c = Lf(a.e, b, 2 * a.Ba),
                    d = Math.round(2 * a.Ba),
                    f = Math.round(2 * a.kf);
                Mh(a.u, c, d, f);
                a.Qh = b
            }
        }
        n.Sq = function() {
            for (var a = this.Dh, b = Math.max(Math.floor(a / this.Ba), 0), a = Math.min(Math.ceil((a + this.vc) / this.Ba), this.i.getLevel(0).Xb - 1); b <= a; b++) {
                for (var c = this.e, d = b, f = bf(c.a, 2 * this.Ba), g = h, i = h; 0 <= f; f--)
                    if (g = c.a.getLevel(f), i = Math.floor(d / (g.ka * g.rows)), !g.Ya[i]) {
                        var g = c,
                            m = f,
                            o = m + "-" + i;
                        g.k[o] || (g.k[o] = j, If(g.e, m, {
                            lk: m,
                            mk: i
                        }))
                    }
                Mf(c)
            }
        };

        function Ph(a, b) {
            a.gl = Math.min(10, Math.ceil(a.vc / 72));
            a.Ba = Math.floor(a.vc / a.gl);
            a.kf = 0.555 * a.Ba;
            var c = a.i.getLevel(0).Xb;
            a.Xh = a.Ba * c;
            ug(a.a, a.Xh);
            var c = Math.round(2 * a.Ba),
                d = 0.555 * c + 12;
            tg(a.n, c, d);
            kg(a.n, (a.vc - c) / 2);
            a.b.style.height = lg(d + 20, j);
            b && (c = a.i.getLevel(0).Xb, a.ek(0, c - 1), Oh(a, a.Qh))
        };

        function Qh(a, b, c, d) {
            this.n = a;
            this.width = b;
            this.e = c;
            this.k = d;
            this.b = b - c - d;
            this.i = Math.min(a - c, this.b);
            this.a = Lb(this.i / this.b, 0, 1)
        };

        function Rh(a, b) {
            if ((a = L(a)) && a.style) a.style.display = b ? "" : "none", Xc(a, "hid", !b)
        }

        function Sh(a) {
            a = L(a);
            return !a ? l : !("none" == a.style.display || Wc(a, "hid"))
        }

        function V(a) {
            B(arguments, function(a) {
                Rh(a, j)
            })
        }

        function W(a) {
            B(arguments, function(a) {
                Rh(a, l)
            })
        };

        function Th() {}
        n = Th.prototype;
        n.Xe = l;
        n.pk = 0;
        n.Ma = function() {
            W(this.a)
        };
        n.reset = function() {
            K(this.a, "with-thumbnail");
            this.e = this.i = k
        };
        n.Ln = function(a, b) {
            (a <= this.b || this.b <= b) && Uh(this)
        };

        function Uh(a) {
            var b = Lf(a.e, a.b, 108);
            Mh(a.C, b, 108, 60)
        };

        function Vh() {
            this.b = new I
        }
        z(Vh, U);

        function Wh(a, b, c, d, f, g) {
            var a = a.X(),
                i = (c & 4 && "rtl" == jg(b, "direction") ? c ^ 2 : c) & -5,
                m = vg(b),
                c = m.X();
            if (d || 0 != i)(i & 2 ? a.x -= c.width + (d ? d.right : 0) : d && (a.x += d.left), i & 1) ? a.y -= c.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (g) {
                if (f) {
                    d = a;
                    i = 0;
                    if (65 == (g & 65) && (d.x < f.left || d.x >= f.right)) g &= -2;
                    if (132 == (g & 132) && (d.y < f.top || d.y >= f.bottom)) g &= -5;
                    d.x < f.left && g & 1 && (d.x = f.left, i |= 1);
                    d.x < f.left && (d.x + c.width > f.right && g & 16) && (c.width = Math.max(c.width - (d.x + c.width - f.right), 0), i |= 4);
                    d.x + c.width > f.right && g & 1 && (d.x = Math.max(f.right -
                        c.width, f.left), i |= 1);
                    g & 2 && (i |= (d.x < f.left ? 16 : 0) | (d.x + c.width > f.right ? 32 : 0));
                    d.y < f.top && g & 4 && (d.y = f.top, i |= 2);
                    d.y >= f.top && (d.y + c.height > f.bottom && g & 32) && (c.height = Math.max(c.height - (d.y + c.height - f.bottom), 0), i |= 8);
                    d.y + c.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - c.height, f.top), i |= 2);
                    g & 8 && (i |= (d.y < f.top ? 64 : 0) | (d.y + c.height > f.bottom ? 128 : 0));
                    f = i
                } else f = 256;
                if (f & 496) return
            }
            kg(b, a);
            Ob(m, c) || (f = od(Yc($c(b))), C && (!f || !E("8")) ? (a = b.style, f ? (f = Ag(b), b = Bg(b), a.pixelWidth = c.width - b.left - f.left - f.right - b.right,
                a.pixelHeight = c.height - b.top - f.top - f.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)) : (b = b.style, ub ? b.MozBoxSizing = "border-box" : vb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px"))
        };
        var Xh = {},
            Yh = "ontouchstart" in document;

        function Zh(a, b, c) {
            return nd(b, function(b) {
                return Wc(b, a)
            }, j, c) || k
        }

        function $h(a) {
            if ("HTML" != a.target.tagName && a.type in Xh) {
                var b = Xh[a.type],
                    c;
                for (c in b.Sa) {
                    var d;
                    d = a.type;
                    var f = Xh[d].maxNumParents[c],
                        g = h;
                    0 < f ? g = f : -1 != d.indexOf("mouse") && (g = 2);
                    d = g;
                    var i = Zh(c, a.target, d);
                    i && (f = j, b.checkRelatedTarget[c] && (a.relatedTarget && nd(a.relatedTarget, function(a) {
                        return a == i
                    }, j, d)) && (f = l), f && b.j(c, i, a.type, a))
                }
            }
        }
        O(document, "blur", $h, j);
        O(document, "change", $h, j);
        O(document, "click", $h);
        O(document, "focus", $h, j);
        O(document, "mouseover", $h);
        O(document, "mouseout", $h);
        O(document, "mousedown", $h);
        O(document, "keydown", $h);
        O(document, "keyup", $h);
        O(document, "keypress", $h);
        O(document, "cut", $h);
        O(document, "paste", $h);
        Yh && (O(document, "touchstart", $h), O(document, "touchend", $h), O(document, "touchcancel", $h));
        oa("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});

        function ai() {}
        ai.prototype.e = function(a, b, c) {
            var d = this.getData(a, b);
            if (d && (d = r(d))) {
                var f = Oa(arguments, 2);
                Na(f, 0, 0, a);
                d.apply(k, f)
            }
        };
        ai.prototype.getData = function(a, b) {
            return rd(a, b)
        };
        ai.prototype.setData = function(a, b, c) {
            pd(a, b, c)
        };

        function X(a, b) {
            return "yt-uix" + (a.b ? "-" + a.b : "") + (b ? "-" + b : "")
        };

        function bi() {}
        z(bi, ai);
        ba(bi);
        bi.prototype.b = "tooltip";

        function ci(a, b, c) {
            a.setData(b, "tooltip-text", c);
            a = a.getData(b, "content-id");
            if (a = L(a)) a.innerHTML = c
        }
        bi.prototype.dc = function(a) {
            return this.getData(a, "tooltip-text") || a.title
        };

        function di(a, b, c, d, f, g) {
            Xc(c, X(a, "tip-reverse"), g);
            var i = 0;
            g && (i = 1);
            var m = vg(b),
                g = new F((m.width - 10) / 2, g ? m.height : 0),
                o = pg(b);
            Wh(new F(o.x + g.x, o.y + g.y), c, i);
            var i = ed(window),
                o = rg(c),
                c = vg(d),
                q = c.width / 2;
            f && (f.style.left = "3px", f.style.height = c.height + "px", f.style.width = c.width + "px");
            f = !!(i.height < o.y + m.height);
            m = !!(o.y < m.height);
            g = !!(o.x < q);
            i = !!(i.width < o.x + q);
            o = (c.width + 3) / -2 - -5;
            a = a.getData(b, "force-tooltip-direction");
            if ("left" == a || g) o = -5;
            else if ("right" == a || i) o = 20 - c.width - 3;
            d.style.left = o + "px";
            return !(f || m)
        }

        function ei(a, b, c) {
            var a = X(a),
                d = b.__yt_uid_key;
            d || (d = ud(), b.__yt_uid_key = d);
            b = a + d;
            c && (b += "-" + c);
            return b
        };

        function fi(a, b) {
            K(a, "html5-async-progress", "html5-async-success", "html5-async-error");
            b && J(a, b);
            var c = bi.getInstance();
            if (a) {
                var d = L(ei(c, a));
                if (d) {
                    var f = (c = L("yt-uix-tooltip-shared-mask")) && nd(c, function(a) {
                        return a == d
                    }, l, 2);
                    c && f && (c.parentNode.removeChild(c), W(c), document.body.appendChild(c));
                    N(d);
                    sd(a, "content-id")
                }
            }
        }

        function gi(a, b) {
            fi(a, "html5-async-error");
            if (b) {
                var c = bi.getInstance(),
                    d = c.dc(a);
                ci(c, a, b);
                if (a) {
                    var f = c.dc(a);
                    if (f) {
                        var g = L(ei(c, a));
                        if (!g) {
                            g = document.createElement("div");
                            g.id = ei(c, a);
                            g.className = X(c, "tip");
                            var i = document.createElement("div");
                            i.className = X(c, "tip-body");
                            var m = document.createElement("div");
                            m.className = X(c, "tip-arrow");
                            var o = document.createElement("div");
                            o.className = X(c, "tip-content");
                            var q;
                            q = k;
                            ob && Wc(a, X(c, "masked")) && ((q = L("yt-uix-tooltip-shared-mask")) ? (q.parentNode.removeChild(q),
                                V(q)) : (q = document.createElement("iframe"), q.src = 'javascript:""', q.id = "yt-uix-tooltip-shared-mask", q.className = X(c, "tip-mask")));
                            var v = ei(c, a, "content");
                            o.id = v;
                            c.setData(a, "content-id", v);
                            i.appendChild(o);
                            q && g.appendChild(q);
                            g.appendChild(i);
                            g.appendChild(m);
                            (zd("fullScreenElement", document) || document.body).appendChild(g);
                            ci(c, a, f);
                            if ((f = parseInt(c.getData(a, "tooltip-max-width"), 10)) && i.offsetWidth > f) i.style.width = f + "px", J(o, X(c, "normal-wrap"));
                            o = Wc(a, X(c, "reverse"));
                            di(c, a, g, i, q, o) || di(c, a, g, i, q, !o);
                            var t = X(c, "tip-visible");
                            Q(function() {
                                J(g, t)
                            }, 0)
                        }
                    }
                }
                c.setData(a, "tooltip-text", d)
            }
        };

        function hi(a, b, c, d) {
            if (this.b = !!c) this.Mi = Math.max(800, this.Mi);
            this.C = a;
            this.L = b;
            this.k = d;
            ii ? a.ontouchstart = w(this.aq, this) : a.onmousedown = w(this.$p, this);
            a.onclick = w(this.ml, this)
        }
        var ii = "ontouchstart" in document,
            ji = [],
            ki = l;
        n = hi.prototype;
        n.Mi = 500;
        n.aq = function(a) {
            if (!(1 < a.touches.length) && !a._stop) {
                this.Sf = a._stop = j;
                this.b || (this.C.ontouchend = w(this.ml, this), document.body.addEventListener("touchend", li(this), l));
                document.body.addEventListener("touchmove", mi(this), l);
                document.body.addEventListener("touchcancel", li(this), l);
                ni(this);
                this.u = window.setTimeout(w(this.Vf, this, j), 100);
                var b = a.touches[0];
                this.a = new F(b.clientX, b.clientY);
                if (!this.b && (!this.k || this.k(a))) {
                    var c = this.a;
                    ji.push(c);
                    window.setTimeout(function() {
                        var a = ji.indexOf(c);
                        a !=
                            -1 && ji.splice(a, 1)
                    }, 2500)
                }
            }
        };
        n.$p = function(a) {
            a.stopPropagation();
            this.Sf = j;
            ni(this);
            this.Vf(j)
        };
        n.ml = function(a) {
            if (("touchend" != a.type || this.Sf) && !a._stop) a._stop = j, this.Vf(j), window.setTimeout(w(function() {
                this.jg();
                this.L(a)
            }, this), 0)
        };
        n.mq = function(a) {
            1 < a.touches.length ? this.jg() : (a = a.touches[0], a = new F(a.clientX, a.clientY), this.a && 12 < Mb(this.a, a) && this.jg())
        };

        function mi(a) {
            a.e || (a.e = w(a.mq, a));
            return a.e
        }
        n.jg = function() {
            window.clearTimeout(this.u);
            window.clearTimeout(this.z);
            this.Vf(l);
            this.Sf = l;
            document.body.removeEventListener("touchmove", mi(this), l);
            document.body.removeEventListener("touchend", li(this), l);
            document.body.removeEventListener("touchcancel", li(this), l)
        };

        function li(a) {
            a.i || (a.i = w(a.jg, a));
            return a.i
        }
        n.Vf = function(a) {
            this.n && Xc(this.C, this.n, a)
        };

        function ni(a) {
            a.Oq && (a.z = window.setTimeout(w(function() {
                this.Sf = l;
                this.Oq()
            }, a), a.Mi))
        };

        function oi() {}
        z(oi, ai);
        ba(oi);
        oi.prototype.b = "button";
        oi.prototype.a = k;

        function pi() {
            this.Cb = {};
            this.Wi = {};
            this.e = k
        }
        n = pi.prototype;
        n.Lk = function() {};
        n.Ej = function() {};
        n.Ql = function() {};
        n.Ij = function() {};
        n.rl = function() {};
        n.Ia = function(a) {
            return !(!this.Cb[a] || !this.Cb[a].length)
        };
        n.Pc = function(a, b) {
            b = b || "defaultcontext";
            a.forEach(function(a) {
                this.Cb[a] ? 0 > this.Cb[a].indexOf(b) && this.Cb[a].push(b) : this.Cb[a] = [b]
            }, this)
        };
        n.Ud = function(a, b) {
            b = b || "defaultcontext";
            a.forEach(function(a) {
                if (this.Ia(a)) {
                    var d = this.Cb[a].indexOf(b);
                    0 <= d && this.Cb[a].splice(d, 1)
                }
            }, this)
        };
        n.Lh = function(a, b) {
            this.Td();
            this.e = a;
            b.forEach(function(a) {
                this.Wi[a] = j
            }, this)
        };
        n.Td = function() {
            this.e = k;
            this.Wi = {}
        };

        function qi(a) {
            return !a.Wi.play_pause ? k : a.e
        }
        n.Ri = function() {};
        n.hh = function() {};
        n.Em = function() {};
        n.Te = function() {};
        n.fm = function() {};
        n.mh = function() {};
        n.ee = function() {};
        n.ll = function() {};
        n.qe = function() {};
        n.wk = function() {};
        n.bj = function() {};
        n.Mk = function() {};
        n.kl = function() {};
        n.Oi = function() {};
        n.Kk = function() {};
        n.Bm = function() {};
        n.Am = function() {};
        n.Ea = function() {
            return 0
        };
        n.Ca = function() {};
        n.vd = function() {};
        n.Il = function() {
            return l
        };
        n.Fk = function() {};
        n.Ek = function() {};

        function ri(a) {
            pi.call(this);
            this.b = a;
            this.a = {};
            this.Ee = new Jd(this);
            this.Zf = new Jd(this);
            this.Yf = new Jd(this)
        }
        z(ri, pi);
        var si = ["html5-play-button", "html5-pause-button", "html5-replay-button", "html5-stop-button"];
        n = ri.prototype;
        n.T = k;
        n.nb = k;
        n.xc = k;
        n.ke = k;
        n.Nj = k;
        n.oh = k;
        n.Lj = k;
        n.kj = 0;
        n.Mj = k;
        n.Bb = k;
        n.je = k;
        n.gd = k;
        n.Ee = k;
        n.he = k;
        n.Zf = k;
        n.ld = k;
        n.Tb = k;
        n.ph = k;
        n.mb = k;
        n.qh = k;
        n.Yf = k;
        n.af = k;
        n.$e = k;
        n.rh = k;
        n.sh = k;
        n.Ye = k;
        n.bf = k;
        n.ie = k;
        n.jj = l;
        n.Dm = l;
        n.Rj = k;
        n.Sb = k;
        n.pubsub = k;
        n.kg = l;
        n.Lk = function(a) {
            this.T = a;
            this.pubsub = new I;
            this.nb = M("html5-play-button", a);
            (new hi(this.nb, w(this.Fn, this))).n = "html5-active";
            this.xc = M("html5-progress-bar", a);
            this.ke = M("html5-progress-list", this.xc);
            O(this.xc, "click", w(this.Kj, this));
            Fd(this.xc, "over", w(this.xn, this));
            this.oh = M("html5-play-progress", this.ke);
            this.b.ae && J(this.oh, this.b.ae);
            this.Lj = M("html5-load-progress", this.ke);
            this.Nj = M("html5-ad-progress-list", this.xc);
            this.he = M("html5-scrubber-button", a);
            Fd(this.he, "down", w(this.zn, this));
            this.Mj = M("html5-progress-screenreader", a);
            var b = M("html5-progress-tooltip", a),
                c = this.Bb = new Th;
            c.a = b;
            c.k = M("html5-progress-tooltip-arrow", c.a);
            c.C = M("html5-progress-tooltip-thumbnail", c.a);
            c.n = M("html5-progress-tooltip-timestamp", c.a);
            this.b.le || (this.Bb.Xe = j);
            var b = M("html5-storyboard", a),
                c = this.gd = new Nh,
                d = Fh(this.b);
            c.b = b;
            c.vc = d.width;
            c.a = M("html5-storyboard-filmstrip", c.b);
            c.n = M("html5-storyboard-lens", c.b);
            c.u = M("html5-storyboard-lens-thumbnail", c.b);
            c.z = M("html5-storyboard-lens-timestamp",
                c.b);
            c.k = M("html5-storyboard-thumbnail", c.a);
            N(c.k);
            b = M("progress-text", a);
            c = this.je = new Vh;
            c.a = M("current-time", b);
            c.e = M("duration-time", b);
            c.i = M("html5-live-indicator", b);
            O(c.i, "click", w(c.j, c, "seek_to_head"));
            this.je.o("seek_to_head", w(this.Gn, this));
            this.ld = M("html5-volume-control", a);
            O(this.ld, "keydown", w(this.Hn, this));
            this.Tb = M("html5-volume-button", this.ld);
            O(this.Tb, "click", w(this.Qj, this));
            this.ph = M("html5-volume-panel", this.ld);
            this.mb = M("html5-volume-slider", this.ld);
            Fd(this.mb, "down",
                w(this.Cn, this));
            this.qh = M("html5-volume-slider-foreground", this.ld);
            this.sh = M("html5-threed-popup-menu", a);
            this.rh = M("html5-small-player-button", a);
            O(this.rh, "click", w(this.Pj, this));
            this.$e = M("html5-large-player-button", a);
            O(this.$e, "click", w(this.Pj, this));
            this.af = M("html5-fullscreen-button", a);
            O(this.af, "click", w(this.Bn, this));
            this.Ye = M("html5-quality-button", a);
            this.ie = M("html5-quality-popup-menu", this.Ye);
            Gd(this.ie, w(this.yn, this), "yt-uix-button-menu-item");
            this.bf = M("html5-speed-popup-menu",
                this.Ye);
            Gd(this.bf, w(this.An, this), "yt-uix-button-menu-item");
            this.Sb = M("html5-watch-later-button", a);
            O(this.Sb, "click", w(this.Dn, this));
            Rh(this.Sb, this.b.Oj);
            this.Rj = M("html5-watch-on-youtube-button", a);
            O(this.Rj, "click", w(this.En, this))
        };
        n.Ej = function(a) {
            this.Te(a.ca || 0);
            ti(this, 0);
            this.ee(0);
            this.Bb.reset();
            fi(this.Sb);
            this.bj("1.0")
        };
        n.Ql = function(a) {
            var b = this.Bb;
            if (!b.Xe)
                if (Yf(a)) {
                    J(b.a, "with-thumbnail");
                    b.i = Yf(a);
                    b.e = Zf(a);
                    var c = w(b.Ln, b);
                    b.e.i.o("l", c)
                } else b.reset();
            b = this.gd;
            b.k && jd(b.a);
            K(b.b, "enabled");
            b.i = k;
            b.e = k;
            if (Yf(a)) {
                b.jf = j;
                J(b.b, "enabled");
                b.i = Yf(a);
                b.e = Zf(a);
                a = w(b.ek, b);
                b.e.i.o("l", a);
                Ph(b);
                for (var a = b.a.cloneNode(j), c = b.i.getLevel(0).Xb, d, f, g = 0; g < c; g++) f = b.k.cloneNode(l), d = Lf(b.e, g, b.Ba), Mh(f, d, b.Ba, b.kf), a.appendChild(f);
                kd(a, b.a);
                b.a = a
            } else b.jf = l
        };
        n.Ij = function(a) {
            this.Em(a.ia);
            this.Ri(a.jb);
            this.Dm = a.xb && !a.xa
        };
        n.rl = function(a) {
            var b = this.gd;
            b.jf && (b.vc = a.width, Ph(b, j))
        };
        n.Pc = function(a, b) {
            ri.s.Pc.call(this, a, b);
            ui(this, a)
        };
        n.Ud = function(a, b) {
            ri.s.Ud.call(this, a, b);
            ui(this, a)
        };

        function ui(a, b) {
            b.forEach(function(a) {
                Xc(this.T, "disabled-control-" + a, this.Ia(a))
            }, a)
        }
        n.Lh = function(a, b) {
            ri.s.Lh.call(this, a, b);
            b.forEach(function(a) {
                J(this.T, "redirected-control-" + a)
            }, this)
        };
        n.Td = function() {
            ri.s.Td.call(this);
            for (var a in Oe) K(this.T, "redirected-control-" + Oe[a])
        };
        n.Ri = function(a) {
            var b = ad("yt-uix-button-menu-item", this.ie);
            B(b, function(b) {
                b.style.display = "none";
                for (var d = 0, f = a.length; d < f; d++) rd(b, "value") == a[d].pb && (b.style.display = "list-item")
            }, this);
            this.jj = !!a.length;
            Rh(this.ie, this.jj);
            Rh(this.Ye, this.jj)
        };
        n.Hn = function(a) {
            var b = a.keyCode;
            if (32 == b || 13 == b) this.Qj(), a.preventDefault()
        };
        n.hh = function(a, b) {
            pd(this.Tb, "value", b || 0 == a ? "off" : 20 > a ? "min" : 40 > a ? "quiet" : 60 > a ? "normal" : 80 > a ? "loud" : "max");
            pd(this.Tb, "volume", a);
            var c = this.mb.clientWidth - 6,
                d = this.mb.style.backgroundPosition.split(" "),
                d = 1 < d.length ? d[1] : "0px";
            if (b) this.mb.style.backgroundPosition = "-" + c + "px " + d, this.qh.style.left = "0px";
            else {
                var f;
                0 >= a ? f = 0 : 100 <= a ? f = c : (f = (c - 0) * a / 100, f = 0 >= f ? 0 : f >= c ? c : 0 + Math.round(f));
                this.qh.style.left = f + "px";
                this.mb.style.backgroundPosition = "-" + (c - f) + "px " + d
            }
            c = Math.round(a);
            d = c + "% " + oe("HTML5_VOLUME_SETTING") +
                (b ? " " + oe("HTML5_VOLUME_MUTED") : "");
            this.ph.setAttribute("aria-valuenow", c);
            this.ph.setAttribute("aria-valuetext", d);
            vi(this.Tb, b ? "title-alt" : "title-default");
            this.Tb.setAttribute("aria-label", (b ? oe("HTML5_VOLUME_UNMUTE") : oe("HTML5_VOLUME_MUTE")) + " " + oe("HTML5_CONTROL_TOGGLE"))
        };
        n.Em = function(a) {
            this.je.e.innerHTML = Jh(a);
            this.Bb.pk = a;
            this.gd.nk = a
        };
        n.Te = function(a) {
            this.je.a.innerHTML = Jh(a)
        };
        n.fm = function(a) {
            wi(this.ie, a)
        };

        function wi(a, b) {
            var c = M("yt-uix-button-menu-item.active", a);
            c && K(c, "active");
            c = a.querySelector(".yt-uix-button-menu-item" + ('[data-value="' + b + '"]'));
            J(c, "active")
        }
        n.Qj = function() {
            this.pubsub.j("mutetoggled")
        };
        n.mh = function(a) {
            this.kg || ti(this, a)
        };

        function ti(a, b) {
            a.kj = b;
            var c = Math.round(1E3 * b) / 10;
            a.oh.style.width = c + "%";
            a.he.style.left = c + "%"
        }
        n.ee = function(a) {
            a = Math.max(this.kj, a);
            a = Math.round(1E3 * a) / 10;
            this.Lj.style.width = a + "%"
        };
        n.ll = function(a, b) {
            this.Mj.innerHTML = parseInt(100 * this.kj, 10) + "% at " + parseInt(a, 10) + " of " + parseInt(b, 10) + " seconds"
        };
        n.qe = function(a) {
            a ? this.Dm ? (Vc(this.nb, si, "html5-stop-button"), vi(this.nb, "title-stop")) : (Vc(this.nb, si, "html5-pause-button"), vi(this.nb, "title-pause")) : (Vc(this.nb, si, "html5-play-button"), vi(this.nb, "title-default"))
        };
        n.kl = function() {
            Vc(this.nb, si, "html5-replay-button");
            vi(this.nb, "title-replay")
        };
        n.Fn = function() {
            this.pubsub.j("playpausetoggled")
        };
        n.zn = function(a) {
            a.Cf();
            this.kg = j;
            this.pubsub.j("beginseeking");
            Kd(this.Zf, document, "move", this.Kj);
            Kd(this.Zf, document, "up", this.Cq)
        };
        n.Cq = function() {
            this.kg = l;
            Ld(this.Zf);
            this.pubsub.j("endseeking")
        };
        n.Kj = function(a) {
            a.Cf();
            var b = xi(this, a.pageX).a;
            ti(this, b);
            this.pubsub.j("seekto", b);
            var c = this.gd;
            if (c.jf) {
                c.Dh = c.Xh * b - c.vc / 2;
                kg(c.a, -1 * c.Dh);
                var d = af(c.i, b);
                Oh(c, d);
                ld(c.z, Jh(c.nk * b));
                b = c.C;
                !b.a ? Lh(b) : b.b = j
            }
            a.preventDefault()
        };

        function xi(a, b) {
            var c = a.ke.clientWidth,
                d = pg(a.ke),
                f = a.he.clientWidth / 2;
            return new Qh(b - d.x, c, f, f)
        }
        n.xn = function() {
            if (!this.kg && !this.Ia("seek")) {
                var a = this.Bb;
                a.Xe || V(a.a);
                Kd(this.Ee, this.xc, "move", w(this.Qp, this));
                Kd(this.Ee, this.xc, "out", w(this.Sl, this));
                Kd(this.Ee, this.he, "down", w(this.Sl, this))
            }
        };
        n.Qp = function(a) {
            var b = xi(this, a.pageX),
                a = this.Bb;
            if (!a.Xe) {
                var c = b.width,
                    d = b.n,
                    f = a.a.offsetWidth,
                    g = f / 2,
                    i = Lb(d - g, 2, c - f - 2);
                kg(a.a, i);
                var m = a.k.offsetWidth / 2,
                    o = g - m;
                d > c - g ? o = Math.min(d - i - m, f - b.k - 2 - m) : d < g && (o = Math.max(d - m, b.e - 2 - m));
                kg(a.k, o);
                ld(a.n, Jh(a.pk * b.a));
                a.i && (b = af(a.i, b.a), b != a.b && (a.b = b, Uh(a)))
            }
        };
        n.Sl = function() {
            Ld(this.Ee);
            this.Bb.Ma()
        };
        n.Cn = function(a) {
            this.pubsub.j("beginvolume");
            J(this.Tb, "changing");
            var b = this.mb.clientWidth,
                a = 100 * (qg(a, this.mb).x / b);
            yi(this, a);
            Kd(this.Yf, document, "move", this.Aq);
            Kd(this.Yf, document, "up", this.Bq)
        };
        n.Aq = function(a) {
            var b = this.mb.clientWidth,
                b = 100 * (qg(a, this.mb).x / b);
            yi(this, b);
            a.preventDefault()
        };

        function yi(a, b) {
            var c = {
                volume: Lb(b, 0, 100),
                muted: l
            };
            a.pubsub.j("volumechanged", c)
        }
        n.Bq = function() {
            K(this.Tb, "changing");
            Ld(this.Yf);
            this.pubsub.j("endvolume")
        };
        n.Pj = function(a) {
            this.pubsub.j("sizechangerequested", a.currentTarget == this.$e)
        };
        n.yn = function(a) {
            a = rd(a.currentTarget, "value");
            this.pubsub.j("qualitychanged", a)
        };
        n.Bn = function() {
            this.pubsub.j("fullscreentoggled")
        };
        n.wk = function(a) {
            vi(this.af, a ? "title-alt" : "title-default")
        };
        n.bj = function(a) {
            wi(this.bf, a)
        };
        n.An = function(a) {
            a = rd(a.currentTarget, "value");
            this.pubsub.j("speedchanged", a);
            this.bj(a)
        };
        n.Mk = function() {
            V(this.bf)
        };
        n.Oi = function(a) {
            var b = M("html5-threed-conversion-on", this.sh),
                c = M("html5-threed-conversion-off", this.sh);
            Rh(b, !a);
            Rh(c, a)
        };
        n.Kk = function() {
            V(this.$e);
            V(this.rh)
        };
        n.Bm = function() {
            fi(this.Sb, "html5-async-success")
        };
        n.Am = function(a) {
            gi(this.Sb, a)
        };
        n.Dn = function() {
            Wc(this.Sb, "html5-async-progress") || (fi(this.Sb, "html5-async-progress"), this.pubsub.j("watchlater"))
        };
        n.En = function() {
            this.pubsub.j("watchonyoutube")
        };
        n.Ea = function(a, b) {
            return this.pubsub.o(a, b)
        };

        function vi(a, b) {
            var c = rd(a, b);
            c || (c = rd(a, "tooltip-title"), pd(a, "title-default", c));
            a.setAttribute("title", c);
            a.setAttribute("aria-label", c);
            pd(a, "tooltip-title", c);
            pd(a, "tooltip-text", c)
        }
        n.Ca = function(a) {
            a = Lb(Math.round(100 * a), 0, 100);
            if (!this.a[a]) {
                var b = document.createElement("div");
                b.style.left = a + "%";
                J(b, "html5-ad-progress", "html5-progress-section");
                this.Nj.appendChild(b);
                this.a[a] = b
            }
        };
        n.vd = function(a) {
            a = Lb(Math.round(100 * a), 0, 100);
            this.a[a] && (N(this.a[a]), delete this.a[a])
        };
        n.Il = function() {
            var a = oi.getInstance(),
                b;
            if (b = !!a.a) {
                var a = a.a,
                    c = this.T,
                    a = L(a),
                    c = L(c);
                b = !!nd(a, function(a) {
                    return a === c
                }, j, h)
            }
            return b
        };
        n.Fk = function() {
            var a = oi.getInstance();
            if (a.a) {
                var b = a.a;
                if (b) {
                    var c;
                    if (!b.widgetMenu) {
                        var d = a.getData(b, "button-menu-id"),
                            d = d && L(d),
                            f = X(a, "menu");
                        d ? (J(d, f), J(d, X(a, "menu-external"))) : d = M(f, b);
                        b.widgetMenu = d
                    }
                    if (c = b.widgetMenu) {
                        a.a = k;
                        b.setAttribute("aria-pressed", "false");
                        b.setAttribute("aria-expanded", "false");
                        W(c);
                        a.e(b, "button-menu-action", l);
                        var g;
                        !ob || !Wc(b, X(a, "masked")) ? g = k : (d = b.iframeMask, d || (d = document.createElement("iframe"), d.src = 'javascript:""', d.className = X(a, "menu-mask"), b.iframeMask =
                            d), g = d);
                        Q(function() {
                            g && g.parentNode && g.parentNode.removeChild(g);
                            if (c.originalParentNode) {
                                c.parentNode.removeChild(c);
                                c.originalParentNode.appendChild(c);
                                c.originalParentNode = k;
                                c.activeButtonNode = k
                            }
                        }, 1)
                    }
                    d = md(b, X(a, "group"));
                    K(b, X(a, "active"));
                    d && K(d, X(a, "group-active"));
                    if (d = a.getData(b, "button-listener")) Hd(d), sd(b, "button-listener");
                    if (a = a.getData(b, "button-context-menu-listener")) Hd(a), sd(b, "button-context-menu-listener")
                }
            }
        };
        n.Ek = function() {
            W(this.af)
        };
        n.Gn = function() {
            this.pubsub.j("seekto", Infinity)
        };

        function zi(a) {
            return a ? -1 != a.toString().search(/(?:true|1)/i) : l
        }

        function Ai(a, b) {
            if (a) {
                var c = "getErrorCode" in a ? a.getErrorCode() : k;
                c !== k ? b.error_code = c : (c = a.message, 50 < c.length && (c = c.substring(0, 47) + "..."), b.error_message = c)
            }
        };
        var Bi = [4, 2];

        function Ci(a) {
            var b = r("yt.www.watch.ads.handleMoveGutCompanion");
            b && b(1 == a ? j : l)
        }

        function Di(a) {
            var b = r("showAfvCompanionAdDiv");
            b && b(1 == a)
        };

        function Ei(a) {
            return Ha(a.b, "908301")
        };

        function Fi(a, b) {
            this.a = a;
            this.e = b
        }
        Fi.prototype.k = k;
        Fi.prototype.b = NaN;

        function Gi(a, b, c) {
            a.a.j("AD_LOGGING_EVENT", b, c)
        }

        function Hi(a) {
            var b = {},
                c = a.a.i,
                d = Ii(a.a),
                f = a.a.m && a.a.m.currentSrc ? a.a.m.currentSrc : k;
            d && 0 < d && (b.ad_len = d);
            if (c && c.B) b.ad_v = c.B;
            else if (f) {
                c = ce(f);
                b.ad_dom = c;
                if (!(c = Ji(a.e))) c = a.e.getEnvironmentData(), c = Ha(c.b, "921801");
                c && (b.ad_v_url = f)
            }
            b.at = a.a.getType();
            return b
        }

        function Ki(a) {
            a.k || (a.k = "InstreamAdDisplay (" + a.a.getType() + ")")
        };

        function Li(a, b) {
            this.b = new I;
            this.a = a;
            this.e = b;
            this.a.o("control_toggle_play_pause", this.bk, this);
            this.a.o("control_play", this.Ze, this);
            this.a.o("control_pause", this.Ch, this);
            this.n = new Fi(this, this.a);
            this.k = new Jd(this)
        }
        z(Li, U);
        n = Li.prototype;
        n.ii = l;
        n.fj = function() {
            this.n.b = y();
            var a = k,
                b = "";
            try {
                a = this.e.getSelectedCreative(), b = a.getMediaUrl("video/x-flv") || a.getMediaUrl("video/mp4")
            } catch (c) {
                Mi(this, c);
                return
            }
            a = b;
            if (!(b = a === k)) b = ce(a), b = b === k ? k : b.split(".").reverse(), b = !(b === k ? 0 : "com" == b[0] && b[1].match(/^youtube(?:-nocookie)?$/));
            b ? a = k : (a = ae(a), a = a.v || a.video_id, a = a === k ? k : new Nf({
                video_id: a
            }));
            (this.i = a) ? (a = this.a.getEnvironmentData(), a.th && (this.i = new Nf({
                    video_id: "szCiX51Kq8s"
                })), Ni(this.a, -1, this.i.B), this.i.o("onStatusFail", this.hk, this),
                this.i.o("videoinfo", this.ik, this), a = new zh(a.C), a.eventLabel = "adunit", a = Dh(a, this.i), $f(this.i, a)) : (Ni(this.a, -1), Oi(this))
        };

        function Pi(a) {
            a.i && (a.i.O("onStatusFail", a.hk, a), a.i.O("videoinfo", a.ik, a))
        }
        n.ik = function() {
            Pi(this);
            var a = k;
            this.i.jb && (a = Bf(this.a.getEnvironmentData().Ve, this.i.jb));
            if (a) {
                var b = this.e.getSelectedCreative(),
                    a = a.a in yf && mf("(PS3; Leanback Shell)") ? rf(a) : a.we;
                b.setMediaUrl(a);
                Oi(this)
            } else Mi(this, Error(this.i.B + " does not have any supported video formats for this browser"))
        };

        function Oi(a) {
            Ci(1);
            Di(1);
            var b = a.a.u,
                c = a.a.getRootNode();
            a.u = c;
            a.m = Qi(a.a.i);
            b.appendChild(Ri(a.a.i), a.m);
            a.z = M("video-ad-time-left", c || b.a);
            var c = M("html5-ad-progress-list", c || b.a),
                d = b.a.createElement("div");
            J(d, "html5-ad-progress", "html5-progress-section");
            b.appendChild(c, d);
            a.L = d;
            J(a.u, "ad-showing", "ad-interrupting");
            a.k.N(Si(a.a.i), "mouseup", a.cp);
            a.k.N(a.m, "timeupdate", a.$o);
            try {
                a.k.N(a.e, google.ima.AdErrorEvent.Type.AD_ERROR, a.bp), B([google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
                    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED
                ], function(a) {
                    this.k.N(this.e, a, aa)
                }, a), a.k.N(a.e, google.ima.AdEvent.Type.CLICK, a.ap), a.k.N(a.e, google.ima.AdEvent.Type.COMPLETE, a.Zo), a.k.N(a.e, google.ima.AdEvent.Type.PAUSED, a.Vk), a.k.N(a.e, google.ima.AdEvent.Type.STARTED, a.Wk), a.e.start()
            } catch (f) {
                Mi(a, f)
            }
        }
        n.Wk = function() {
            this.ii = j;
            if (!this.V) {
                this.V = j;
                var a = this.n;
                Ki(a);
                var b = Hi(a);
                if (isNaN(a.b)) Ki(a);
                else {
                    var c = y() - a.b;
                    b.ad_stl = c
                }
                Gi(a, 4, b)
            }
            nh(this.a, j);
            Ni(this.a, 1);
            this.j("adPlay", this)
        };
        n.Vk = function() {
            this.ii = l;
            nh(this.a, l);
            Ni(this.a, 2)
        };
        n.Zo = function() {
            var a = this.n;
            Ki(a);
            var b = Hi(a),
                c = a.a.m ? a.a.m.getType() : k;
            c ? b.ad_fmt = c : Ki(a);
            Gi(a, 5, b);
            Ni(this.a, 0);
            this.j("adEnd", this)
        };
        n.bp = function(a) {
            Mi(this, a.getError())
        };

        function Mi(a, b) {
            Ni(a.a, 0);
            a.j("adError", b)
        }
        n.hk = function() {
            Pi(this);
            Mi(this, Error("Request to get video data failed."))
        };
        n.ap = function() {
            var a = this.n;
            Ki(a);
            var b = Hi(a);
            if (a.i) {
                var c = Ti(a.e),
                    d = a.i.y - c.top,
                    d = Math.round(a.i.x - c.left) + "x" + Math.round(d);
                b.ck_xy = d;
                b.ck_wh = c.width + "x" + c.height
            }
            Gi(a, 15, b);
            Q(w(this.Ze, this), 0);
            this.j("select")
        };
        n.cp = function(a) {
            this.n.i = new F(a.pageX, a.pageY)
        };
        n.$o = function() {
            var a = Jh(this.e.getRemainingTime());
            this.z.innerHTML = a;
            0 == Ii(this) && (a = this.m, a.tg = a.duration || 0);
            a = Ii(this) ? this.m.getCurrentTime() / Ii(this) : 0;
            a = Math.round(1E3 * a) / 10;
            this.L.style.width = a + "%"
        };
        n.G = function() {
            this.a.O("control_toggle_play_pause", this.bk, this);
            this.a.O("control_play", this.Ze, this);
            this.a.O("control_pause", this.Ch, this);
            Ld(this.k);
            Pi(this);
            this.e && (this.e.destroy(), this.e = k);
            var a = this.a.u;
            this.m && (a.Zk(this.m), this.m = k);
            this.z && (this.z.innerHTML = "", this.z = k);
            this.L && (a.Zk(this.L), this.L = k);
            this.u && (K(this.u, "ad-showing", "ad-interrupting"), this.u = k);
            Li.s.G.call(this)
        };
        n.getType = function() {
            return "1_2"
        };

        function Ii(a) {
            return a.m ? a.m.getDuration() : k
        }
        n.bk = function() {
            this.ii ? this.Ch() : this.Ze()
        };
        n.Ze = function() {
            this.m && (this.e.resume(), this.Wk())
        };
        n.Ch = function() {
            this.m && (this.e.pause(), this.Vk())
        };

        function Ui(a, b) {
            Li.call(this, a, b)
        }
        z(Ui, Li);
        Ui.prototype.getType = function() {
            return "2_2"
        };

        function Vi(a, b) {
            this.e = a;
            this.b = b;
            this.e.getType()
        }

        function Wi(a, b, c) {
            a.e.j("AD_LOGGING_EVENT", b, c)
        }

        function Xi(a) {
            var b = {};
            a.k && a.a && (b.ot = a.a - a.k);
            var c;
            c = a.b.isFullscreen() ? 2 : a.b.getEnvironmentData().kd ? 1 : 0;
            b.ad_ps = c;
            b.at = a.e.getType();
            return b
        };

        function Yi(a, b) {
            this.b = new I;
            this.e = a;
            this.a = b;
            this.n = new Vi(this, a);
            this.k = new Jd(this)
        }
        z(Yi, U);
        n = Yi.prototype;
        n.$b = k;
        n.yk = l;
        n.fj = function() {
            var a = this.e.getRootNode();
            J(a, "ad-showing");
            this.$b = Ri(this.e.i);
            J(this.$b, "ad-overlay");
            this.k.N(this.$b, "mouseup", this.Yn);
            try {
                var b = yg(this.$b);
                this.k.N(this.a, google.ima.AdEvent.Type.USER_CLOSE, this.Vn);
                this.k.N(this.a, google.ima.AdEvent.Type.CLICK, this.Xn);
                this.k.N(this.a, google.ima.AdErrorEvent.Type.AD_ERROR, this.Wn);
                B([google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED], function(a) {
                    this.k.N(this.a,
                        a, aa)
                }, this);
                Zi(this, google.ima.ViewMode.NORMAL);
                this.a.init(b.width, b.height, this.u);
                this.a.start();
                var c = this.n;
                c.k = y();
                var d = Xi(c);
                Wi(c, 3, d);
                this.yk = j;
                this.e.o("onResize", this.rf, this);
                this.e.o("onStateChange", this.gk, this);
                this.j("adEnd", this)
            } catch (f) {
                this.j("adError", f)
            }
        };
        n.G = function() {
            Ld(this.k);
            this.e.O("onResize", this.rf, this);
            this.e.O("onStateChange", this.gk, this);
            var a = this.e.getRootNode();
            K(a, "ad-showing");
            this.a && (this.a.destroy(), this.a = k);
            this.$b && K(this.$b, "ad-overlay");
            this.$b = k;
            Yi.s.G.call(this)
        };
        n.Vn = function() {
            var a = this.n;
            a.a = y();
            var b = Xi(a);
            Wi(a, 6, b)
        };
        n.Xn = function() {
            this.e.pubsub.j("command_pause");
            var a = this.n;
            a.a = y();
            var b = Xi(a);
            if (a.i) {
                var c = Ti(a.b),
                    d = a.i.y - c.top,
                    d = Math.round(a.i.x - c.left) + "x" + Math.round(d);
                b.ck_xy = d;
                b.ck_wh = c.width + "x" + c.height
            }
            Wi(a, 100, b)
        };
        n.Yn = function(a) {
            this.n.i = a.target == a.currentTarget ? k : new F(a.pageX, a.pageY)
        };
        n.Wn = function(a) {
            a = a.getError();
            this.j("adError", a)
        };
        n.gk = function(a) {
            R(a.a, 32) && Zi(this, google.ima.ViewMode.NORMAL)
        };

        function Zi(a, b) {
            a.u != b && (a.u = b, a.yk && a.rf())
        }
        n.rf = function() {
            var a = yg(this.$b);
            this.a.resize(a.width, a.height, this.u)
        };

        function $i(a, b) {
            Yi.call(this, a, b)
        }
        z($i, Yi);
        $i.prototype.getType = function() {
            return "2_1"
        };

        function aj(a, b) {
            this.b = new I;
            this.n = a;
            this.k = b
        }
        z(aj, U);
        aj.prototype.fj = function() {
            this.e();
            var a = {};
            a.ad_id = this.k;
            a.at = this.getType();
            this.j("AD_LOGGING_EVENT", 3, a);
            this.j("adEnd", this)
        };

        function bj(a) {
            aj.call(this, a, NaN)
        }
        z(bj, aj);
        bj.prototype.e = function() {
            var a = r("afcAdCall");
            a && a()
        };
        bj.prototype.getType = function() {
            return "2_3"
        };

        function cj(a) {
            this.a = a
        };

        function dj(a, b) {
            this.b = a;
            this.a = b
        }

        function ej(a, b) {
            var c = fj(a);
            c.ad_man = b;
            gj(a.a.e, 12, c)
        }

        function hj(a, b) {
            a.b.j("AD_TRACKING_EVENT", new cj(b))
        }

        function fj(a) {
            var b = {};
            b.l_ns = a.b.Li();
            b.l_state = a.b.n;
            b.sst = a.b.k;
            b.sidx = a.b.u;
            var c = a.b.Rb();
            c && (b.at = c.getType());
            a = a.b.lf;
            isNaN(a) || (b.ad_id = a);
            return b
        };
        /*
         Portions of this code are from MochiKit, received by
         The Closure Authors under the MIT license. All other code is Copyright
         2005-2009 The Closure Authors. All Rights Reserved.
        */
        function jj(a, b) {
            this.a = [];
            this.k = b || k
        }
        n = jj.prototype;
        n.wd = l;
        n.xe = l;
        n.ye = 0;
        n.Qm = l;
        n.Yo = l;
        n.Xo = 0;
        n.Ok = function(a, b) {
            kj(this, a, b);
            this.ye--;
            0 == this.ye && this.wd && lj(this)
        };

        function kj(a, b, c) {
            a.wd = j;
            a.b = c;
            a.xe = !b;
            lj(a)
        }

        function mj(a) {
            a.wd && (a.Qm || e(new nj), a.Qm = l)
        }

        function oj(a) {
            return Fa(a.a, function(a) {
                return ga(a[1])
            })
        }

        function lj(a) {
            a.e && (a.wd && oj(a)) && (p.clearTimeout(a.e), delete a.e);
            a.i && (a.i.Xo--, delete a.i);
            for (var b = a.b, c = l, d = l; a.a.length && 0 == a.ye;) {
                var f = a.a.shift(),
                    g = f[0],
                    i = f[1],
                    f = f[2];
                if (g = a.xe ? i : g) try {
                    var m = g.call(f || a.k, b);
                    da(m) && (a.xe = a.xe && (m == b || m instanceof Error), a.b = b = m);
                    b instanceof jj && (d = j, a.ye++)
                } catch (o) {
                    b = o, a.xe = j, oj(a) || (c = j)
                }
            }
            a.b = b;
            d && a.ye && (d = b, m = w(a.Ok, a, j), g = w(a.Ok, a, l), d.a.push([m, g, h]), d.wd && lj(d), b.Yo = j);
            c && (a.e = p.setTimeout(function() {
                e(new pj(b))
            }, 0))
        }

        function nj() {
            pa.call(this)
        }
        z(nj, pa);
        nj.prototype.message = "Already called";

        function pj(a) {
            pa.call(this);
            this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
        }
        z(pj, pa);

        function qj(a, b, c) {
            c != k && p.clearTimeout(c);
            a.onload = aa;
            a.onerror = aa;
            a.onreadystatechange = aa;
            b && window.setTimeout(function() {
                N(a)
            }, 0)
        }

        function rj(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            pa.call(this, c);
            this.code = a
        }
        z(rj, pa);

        function sj() {
            this.b = new I;
            this.a = "unloaded"
        }
        z(sj, U);
        ba(sj);
        n = sj.prototype;
        n.load = function(a) {
            "unloaded" == this.a ? (this.a = "loading", this.sl(a)) : "loaded" == this.a ? this.j("googleAdSdkLoaded", this) : "error" == this.a && tj(this)
        };
        n.sl = function(a) {
            if (r("google.ima.SdkLoader")) google.ima.SdkLoader.setCallbacks(w(this.Jp, this), w(this.ai, this)), google.ima.SdkLoader.load("3");
            else {
                var b = a ? "//web.archive.org/web/20120622093201/http://static.doubleclick.net/instream/html5/ima.js" : "//web.archive.org/web/20120622093201/http://s0.2mdn.net/instream/html5/ima.js",
                    c = {},
                    a = c.document || document,
                    d = document.createElement("SCRIPT"),
                    f = {
                        b: d,
                        Ip: h
                    },
                    g = new jj(0, f),
                    i = k,
                    m = c.timeout != k ? c.timeout : 5E3;
                0 < m && (i = window.setTimeout(function() {
                    qj(d, j);
                    var a = new rj(1, "Timeout reached for loading script " + b);
                    mj(g);
                    kj(g, l, a)
                }, m), f.Ip = i);
                d.onload =
                    d.onreadystatechange = function() {
                        if (!d.readyState || d.readyState == "loaded" || d.readyState == "complete") {
                            qj(d, c.lr || l, i);
                            mj(g);
                            kj(g, j, k)
                        }
                    };
                d.onerror = function() {
                    qj(d, j, i);
                    var a = new rj(0, "Error while loading script " + b);
                    mj(g);
                    kj(g, l, a)
                };
                cd(d, {
                    type: "text/javascript",
                    charset: "UTF-8",
                    src: b
                });
                f = a.getElementsByTagName("HEAD");
                (!f || 0 == f.length ? a.documentElement : f[0]).appendChild(d);
                g.a.push([this.sl, this.ai, this]);
                g.wd && lj(g)
            }
        };
        n.Jp = function() {
            try {
                this.e = new google.ima.AdsLoader, this.e.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.Gp, l, this), this.e.addEventListener(google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED, this.Hp, l, this), this.e.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.Fp, l, this), this.a = "loaded"
            } catch (a) {
                this.ai(a);
                return
            }
            this.j("googleAdSdkLoaded", this)
        };
        n.ai = function(a) {
            "number" == typeof a && (a = Error("Google Ads SDK Failed. Error code: " + a));
            this.i = a;
            this.a = "error";
            tj(this)
        };

        function tj(a) {
            a.j("googleAdSdkError", a.i)
        }
        n.Gp = function(a) {
            this.j("adsManagerLoaded", a)
        };
        n.Hp = function(a) {
            this.j("customContentLoaded", a)
        };
        n.Fp = function(a) {
            var b = a.getError();
            b.getType() == google.ima.AdError.Type.AD_LOAD && (a = a.getUserRequestContext(), this.j("adsManagerLoadError", b, a))
        };

        function uj(a, b, c, d, f) {
            this.b = new I;
            this.k = a;
            this.u = c;
            this.a = d;
            this.n = f;
            this.i = new dj(this, d)
        }
        z(uj, U);
        n = uj.prototype;
        n.Zb = k;
        n.lf = NaN;
        n.load = function() {
            if ("leanback" != this.a.getEnvironmentData().eventLabel) {
                var a = vg(this.a.getRootNode()),
                    b = 1 == this.n ? 190 : 200;
                if (200 > a.width || a.height < b) {
                    var b = this.i,
                        c = fj(b);
                    c.ck_wh = a.width + "x" + a.height;
                    vj(b.a, 14, c);
                    this.ud();
                    return
                }
            }
            this.e = sj.getInstance();
            this.e.o("googleAdSdkLoaded", this.jl, this);
            this.e.o("googleAdSdkError", this.il, this);
            this.e.load(this.a.getEnvironmentData().ff)
        };
        n.jl = function() {
            wj(this);
            xj(this.a, "sdk");
            this.Fi()
        };
        n.il = function(a) {
            wj(this);
            this.Be(a, this)
        };

        function wj(a) {
            a.e && (a.e.O("googleAdSdkLoaded", a.jl, a), a.e.O("googleAdSdkError", a.il, a), a.e.O("adsManagerLoaded", a.bl, a), a.e.O("customContentLoaded", a.dl, a), a.e.O("adsManagerLoadError", a.Be, a))
        }
        n.Fi = function() {
            var a = this.i,
                b = fj(a);
            gj(a.a.e, 9, b);
            a = new google.ima.AdsRequest;
            a.adTagUrl = this.Qf();
            b = this.a.getRootNode();
            b = M("html5-video-container", b || this.a.u.a);
            b = vg(b);
            a.nonLinearAdSlotHeight = b.height;
            a.linearAdSlotHeight = b.height;
            a.nonLinearAdSlotWidth = b.width;
            a.linearAdSlotWidth = b.width;
            var c = this.n;
            if (b = r("yt.www.watch.ads.setGutSlotSizes")) {
                var d = 1 == c,
                    c = Ha(Bi, c);
                b(d, c)
            }
            this.e.o("adsManagerLoaded", this.bl, this);
            this.e.o("customContentLoaded", this.dl, this);
            this.e.o("adsManagerLoadError", this.Be,
                this);
            try {
                var f = this.e;
                f.e && f.e.requestAds(a, this)
            } catch (g) {
                this.Be(g, this)
            }
        };
        n.bl = function(a) {
            if (a.getUserRequestContext() === this) {
                var b = new google.ima.AdsRenderingSettings;
                b.baseYouTubeUrl = this.a.getEnvironmentData().gb;
                b.contentId = this.a.getVideoData().B;
                try {
                    var c = new google.ima.AdDisplayContainer(Ri(this.a.i)),
                        d = a.getAdsManager(c, {}, Qi(this.a.i), Si(this.a.i))
                } catch (f) {
                    this.Be(f, this);
                    return
                }
                a = d.getCurrentAd().isLinear();
                ej(this.i, a ? "instream" : "overlay");
                (a ? this.wi(d) : this.xi(d)) ? yj(this): this.ud()
            }
        };
        n.dl = function(a) {
            a.getUserRequestContext() === this && (ej(this.i, "customContent"), this.dj(a.getContent()) ? yj(this) : this.ud())
        };
        n.Be = function(a, b) {
            if (b === this) {
                var c = this.i,
                    d = fj(c);
                a && Ai(a, d);
                vj(c.a, 32, d);
                this.ud()
            }
        };

        function yj(a) {
            a.j("adLoaded", a)
        }
        n.ud = function() {
            this.j("adError", this)
        };
        n.G = function() {
            wj(this);
            uj.s.G.call(this)
        };
        n.Rb = function() {
            return this.Zb
        };

        function zj(a, b, c, d, f) {
            uj.call(this, a, 0, c, d, f);
            this.z = new Ih(this.a.b, this.a.getEnvironmentData());
            (a = r("setAfvCompanionVars")) && a(1 == f)
        }
        z(zj, uj);
        n = zj.prototype;
        n.Li = function() {
            return 2
        };
        n.Qf = function() {
            var a = this.z,
                b = this.n,
                c = 0 == this.k || -1 == this.k ? this.k : 1E3 * this.k,
                d = {};
            d.eid = a.a.ed;
            d.videoad_start_delay = c;
            d.scs = a.a.bh;
            d.client = a.a.ah;
            d.description_url = a.a.Wc;
            d.loeid = a.b.b ? a.b.b.join(",") : "";
            d.cust_gender = a.a.dd;
            d.host = a.a.fh;
            d.yt_up = a.a.Zc;
            d.hl = a.b.e;
            d.max_ad_duration = a.a.dh;
            d.wham = a.a.eh;
            isNaN(a.a.L) || (d.cust_age = a.a.L);
            isNaN(a.a.ma) || (d.hostTierId = a.a.ma);
            switch (b) {
                case 1:
                    d.ad_type = "video";
                    a.a.na && (d.channel = a.a.na.join("+"));
                    break;
                case 2:
                    d.ad_type = "text_image_flash", a.a.hb &&
                        (d.channel = a.a.hb.join("+"))
            }
            a.a.Yd && (d.lsv = 1);
            var a = d,
                b = {},
                f;
            for (f in a) ea.call(h, a[f]) && (b[f] = a[f]);
            return "//googleads.g.doubleclick.net/pagead/ads?" + Zd(b, "&")
        };
        n.wi = function(a) {
            this.Zb = new Ui(this.a, a);
            return j
        };
        n.xi = function(a) {
            this.a.b.Vd || (this.k = 10, gj(this.a.e, 1, h));
            Di(this.n);
            this.Zb = new $i(this.a, a);
            return j
        };
        n.dj = function() {
            return l
        };
        n.ud = function() {
            this.a.b.ra || 2 == this.n ? (this.Zb = new bj(this.a), yj(this)) : zj.s.ud.call(this)
        };

        function Aj(a) {
            if ("undefined" != typeof DOMParser) return (new DOMParser).parseFromString(a, "application/xml");
            if ("undefined" != typeof ActiveXObject) {
                var b = new ActiveXObject("MSXML2.DOMDocument");
                if (b) {
                    b.resolveExternals = l;
                    b.validateOnParse = l;
                    try {
                        b.setProperty("ProhibitDTD", j), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
                    } catch (c) {}
                }
                b.loadXML(a);
                return b
            }
            e(Error("Your browser does not support loading xml documents"))
        };

        function Bj(a, b, c) {
            this.a = a;
            this.b = b;
            this.e = c
        };

        function Cj(a) {
            if (a.V) {
                this.Wl = a.V;
                this.Ol = a.ce;
                var b = this.Wl,
                    c = b.indexOf(";sz="),
                    a = Yd(b.substring(c), ";"),
                    b = b.substring(0, c).split("pfadx");
                if (a = 2 != b.length ? k : {
                        Rp: b[0],
                        Sp: b[1],
                        Tp: a
                    }) this.Nl = a.Rp, this.Pl = a.Sp, this.a = a.Tp
            }
        }
        n = Cj.prototype;
        n.Wl = "";
        n.Nl = "";
        n.Ol = l;
        n.Gi = "";
        n.Pl = "";

        function Dj(a, b) {
            var c = $a(a.a);
            b.Ac && b.Ac.length && (c.sz = b.Ac.join(","));
            b.Eh && (c.pos = b.Eh);
            b.pf && (c.dc_seed = b.pf);
            b.td && (c.tile = b.td.toString());
            b.ri && (c.kmyd = b.ri);
            b.Dl && (s(c["!c"]) ? c["!c"].push("html5") : c["!c"] = c["!c"] ? [c["!c"], "html5"] : "html5", c.html5 = "1");
            b.fg && (0 < b.fg.length && a.Ol) && (c.ciu_szs = b.fg.join(","));
            "pfadx" == b.rd ? c.dcmt = "text/xml" : "dcmt" in c && delete c.dcmt;
            var d;
            if (!(d = b.mr)) a.Gi || (a.Gi = Math.floor(999999999 * Math.random()).toString()), d = a.Gi;
            c.ord = d;
            c = Zd(c, ";");
            return [a.Nl, b.rd, a.Pl,
                ";", c, "?"
            ].join("")
        };

        function Ej(a, b, c) {
            aj.call(this, a, b);
            this.a = c
        }
        z(Ej, aj);
        Ej.prototype.e = function() {
            Fj(this.n, this.a);
            var a = this.a,
                b = r("setCompanion");
            b && b(a)
        };
        Ej.prototype.getType = function() {
            return "1_3"
        };

        function Gj(a, b) {
            Yi.call(this, a, b)
        }
        z(Gj, Yi);
        Gj.prototype.rf = function() {};
        Gj.prototype.getType = function() {
            return "1_3"
        };

        function Hj(a, b, c, d, f) {
            uj.call(this, a, 0, c, d, f);
            this.z = new Cj(this.a.b)
        }
        z(Hj, uj);
        n = Hj.prototype;
        n.Li = function() {
            return 1
        };
        n.Qf = function() {
            var a;
            a: switch (a = this.z, this.n) {
                case 1:
                    a = Dj(a, {
                        rd: "pfadx",
                        Ac: ["480x360"],
                        Eh: 0 == this.k ? "pre" : -1 == this.k ? "post" : "mid;pos=" + this.u,
                        td: this.u + 1,
                        ri: "watch-longform-ad",
                        Dl: j,
                        fg: ["300x60"]
                    });
                    break a;
                case 4:
                    a = Dj(a, {
                        rd: "pfadx",
                        ri: "watch-longform-ad",
                        Ac: ["480x70"],
                        td: 1,
                        Dl: j,
                        fg: ["300x250"]
                    });
                    break a;
                default:
                    a = ""
            }
            return a
        };
        n.wi = function(a) {
            this.Zb = new Li(this.a, a);
            return j
        };
        n.xi = function(a) {
            return a.getCurrentAd().getTraffickingParameters().hideMaster ? (this.Zb = new Gj(this.a, a), j) : l
        };
        n.Fi = function() {
            Fj(this.a, this.Qf());
            Hj.s.Fi.call(this)
        };
        n.dj = function(a) {
            try {
                var b, c = Aj(a),
                    d = parseInt(ra(c.getElementsByTagName("adId")[0].firstChild.data), 10),
                    f = ra(c.getElementsByTagName("trackImp")[0].firstChild.data),
                    g = "true" == ra(c.getElementsByTagName("rm")[0].firstChild.data);
                b = new Bj(d, f, g)
            } catch (i) {
                return vj(this.i.a, 20), l
            }
            isNaN(b.a) && (a = this.i, vj(a.a, 41, fj(a)));
            this.lf = b.a;
            a: switch (a = this.z, c = this.lf, this.n) {
                case 1:
                    a = Dj(a, {
                        Eh: 0 == this.k ? "pre" : -1 == this.k ? "post" : "mid;pos=" + c,
                        rd: "adi",
                        pf: c,
                        Ac: ["300x60"],
                        td: 1
                    });
                    break a;
                case 4:
                    a = Dj(a, {
                        rd: "adi",
                        pf: c,
                        Ac: ["300x250"],
                        td: 1
                    });
                    break a;
                default:
                    a = k
            }
            c = this.i;
            d = b.b;
            d === k || !d.length ? vj(c.a, 40, fj(c)) : (hj(c, d), hj(c, fj(c)));
            4 == this.n && (c = Dj(this.z, {
                rd: "adx",
                pf: this.lf,
                Ac: ["450x60"],
                td: 1
            }), Fj(this.a, c), hj(this.i, c));
            if (b.e) return 1 != this.n && (b = r("closeInPageAdIFrame")) && b(), a !== k && (Fj(this.a, a), hj(this.i, a)), b = this.i, vj(b.a, 21, fj(b)), l;
            a && 4 == this.n ? this.Zb = new Ej(this.a, b.a, a) : a && (Fj(this.a, a), hj(this.i, a));
            b = this.i;
            vj(b.a, 24, fj(b));
            return j
        };

        function Ij(a, b, c, d) {
            this.a = a;
            this.i = b;
            this.e = d;
            this.b = jf || kf ? "html5_ios" : lf ? "html5_android" : "leanback" == c ? "html5_tv_leanback" : "html5"
        }

        function Jj(a, b) {
            if (!a.a.C || !a.a.ib) return "";
            var c = b ? "169843:nbcu_olympics_html5_video" : "10613:10613_youtube_" + a.b,
                d = b ? a.e.ib : "youtube_watch_" + a.b,
                f = b ? "169843:nbcu_olympics_html5_video" : "10613:10613_youtube_" + a.b.split("_")[0],
                g = {};
            g.nw = b ? "169843" : "10613";
            g.asnw = a.a.C;
            g.ssnw = a.a.C;
            g.caid = a.a.ib;
            g.prof = c;
            g.vdur = a.i;
            g.csid = d;
            g.resp = "vast2";
            g.flag = "+emcr";
            b && (g.afid = "38128742", g.sfid = "205016");
            c = {};
            isNaN(a.a.ja) || (c._fw_d_001 = a.a.ja);
            a.a.pa && (c._fw_d_002 = a.a.pa);
            a.a.Wa && (c["_fwu:10613:lang"] = a.a.Wa);
            c._fw_yt_type = a.a.n ? "short" : "long";
            d = a.e.hb;
            if (b && d)
                for (var d = d.split(","), i = 0; i < d.length; i++) {
                    var m = d[i].split(":");
                    2 == m.length && (c[m[0]] = m[1])
                }
            d = {
                ptgt: "a",
                slid: "preroll",
                slau: "preroll",
                w: "480",
                h: "360",
                tpos: "0",
                tpcl: "preroll"
            };
            d.envp = f;
            d.cd = "1440,900";
            return (b ? "https://web.archive.org/web/20120622093201/http://29773c.v.fwmrm.net/ad/g/1?" : "https://web.archive.org/web/20120622093201/http://2975c.v.fwmrm.net/ad/g/1?") + Zd(g, "&") + ";" + Zd(c, "&") + ";" + Zd(d, "&")
        };

        function Kj(a, b) {
            Li.call(this, a, b)
        }
        z(Kj, Li);
        Kj.prototype.getType = function() {
            return "4_2"
        };

        function Lj(a, b, c, d, f) {
            uj.call(this, a, 0, c, d, f);
            this.z = new Ij(this.a.b, this.a.getVideoData().ia, this.a.getEnvironmentData().eventLabel, this.a.getEnvironmentData())
        }
        z(Lj, uj);
        n = Lj.prototype;
        n.Li = function() {
            return 4
        };
        n.Qf = function() {
            return "olympics" == this.a.getEnvironmentData().Aa ? Jj(this.z, j) : Jj(this.z, l)
        };
        n.wi = function(a) {
            if (0 != this.k) return l;
            this.Zb = new Kj(this.a, a);
            return j
        };
        n.xi = function() {
            return l
        };
        n.dj = function() {
            return l
        };

        function Mj(a, b, c, d) {
            switch (c) {
                case 1:
                    return new zj(a, 0, b, d, 1);
                case 2:
                    return new zj(a, 0, b, d, 2);
                case 3:
                    return new Hj(a, 0, b, d, 1);
                case 4:
                    return new Hj(a, 0, b, d, 4);
                case 5:
                    return new Lj(a, 0, b, d, 1);
                default:
                    return k
            }
        };

        function Nj(a, b, c) {
            this.b = new I;
            this.id = a;
            this.index = b || 0;
            this.Gh = !!c
        }
        z(Nj, U);
        n = Nj.prototype;
        n.Gh = l;
        n.Fl = l;
        n.Da = k;
        n.Ga = k;
        n.mi = l;
        n.load = function() {
            this.Da && (this.Da.o("adLoaded", this.vm, this), this.Da.o("adError", this.Ni, this), this.Da.o("AD_TRACKING_EVENT", this.wm, this), this.Da.load())
        };
        n.vm = function() {
            Oj(this);
            this.Da.Rb() ? (this.Ga = this.Da.Rb(), this.j("adLoaded", this, this.Da.k)) : this.Ni()
        };
        n.Ni = function() {
            Oj(this);
            this.j("adError", this)
        };
        n.wm = function(a) {
            this.j("AD_TRACKING_EVENT", a)
        };

        function Oj(a) {
            a.Da.O("adLoaded", a.vm, a);
            a.Da.O("adError", a.Ni, a);
            a.Da.O("AD_TRACKING_EVENT", a.wm, a)
        }
        n.Rb = function() {
            return this.Ga
        };

        function Pj(a) {
            a.mi ? a.Ga instanceof Yi && Zi(a.Ga, google.ima.ViewMode.NORMAL) : (a.mi = j, a.Ga.o("adPlay", a.Gq, a), a.Ga.o("adEnd", a.Fq, a), a.Ga.o("adError", a.Jq, a), a.Ga.o("AD_LOGGING_EVENT", a.Hq, a), a.Ga.o("select", a.Iq, a), a.Ga.fj())
        }
        n.Gq = function() {
            this.j("adPlay", this)
        };
        n.Fq = function() {
            this.j("adEnd", this)
        };
        n.Iq = function() {
            this.Fl = j
        };
        n.Hq = function(a, b) {
            this.j("AD_LOGGING_EVENT", a, b)
        };
        n.Jq = function(a) {
            this.j("adError", this, a)
        };
        n.G = function() {
            Nj.s.G.call(this);
            Tb(this.Da);
            Tb(this.Ga)
        };

        function Qj(a, b) {
            this.b = new I;
            this.n = b;
            this.e = a;
            this.pd = "unloaded";
            this.a = [];
            this.i = [];
            this.k = [];
            this.z = {};
            this.u = []
        }
        z(Qj, U);
        n = Qj.prototype;
        n.start = NaN;
        n.si = j;
        n.zc = l;
        n.isVisible = j;
        n.Fb = NaN;
        n.$k = l;
        n.$f = NaN;
        n.Ka = function() {
            return isNaN(this.start) ? k : 0 == this.start ? Rj(this) && Sj(this) ? -2147483648 : 0 : -1 == this.start || -2 == this.start ? 2147483647 : 1E3 * this.start
        };

        function Rj(a) {
            return "loaded" == a.pd || "error" == a.pd
        }

        function Sj(a) {
            Rj(a) || e(Error("Preroll status is undefined before ad load."));
            return 0 == a.start && a.zc
        }
        n.Of = function() {
            this.pd = "loading";
            var a = this.a.length,
                b = this.k.shift();
            !b || 0 == a ? (this.pd = "error", B(this.a, Tb), this.a = [], Tj(this)) : (this.i = [], B(this.a, function(a) {
                if (!this.z[a.id]) {
                    a.Gh || (this.$k = j);
                    var d = Mj(this.start, a.index, b, this.e);
                    a.Da = d;
                    this.i.push(a)
                }
            }, this), 0 == this.start && xj(this.e, "nl"), Uj(this))
        };
        n.getId = function() {
            return this.n
        };

        function Uj(a) {
            if (a.i.length) {
                var b = a.i.shift();
                b.o("adLoaded", a.Sk, a);
                b.o("adError", a.Tk, a);
                b.o("AD_TRACKING_EVENT", a.Uk, a);
                b.load()
            } else a.$k && !Fa(a.a, function(a) {
                return a.Rb() && !a.Gh
            }) && a.k.length ? (b = new Nj(a.$f), a.a.push(b), a.Of()) : (a.pd = "loaded", Tj(a))
        }

        function Vj(a, b) {
            b.O("adEnd", a.rk, a);
            b.O("adError", a.uk, a);
            b.O("AD_LOGGING_EVENT", a.qk, a)
        }
        n.Tk = function(a) {
            this.$f = !this.$f ? a.id : Math.min(this.$f, a.id);
            Ja(this.a, a);
            Tb(a);
            Uj(this)
        };
        n.Uk = function(a) {
            this.u.push(a)
        };
        n.Sk = function(a, b) {
            this.start = b;
            a.O("adLoaded", this.Sk, this);
            a.O("adError", this.Tk, this);
            a.O("AD_TRACKING_EVENT", this.Uk, this);
            this.z[a.id] = j;
            if (0 == this.n) {
                var c = a.Rb().getType();
                this.e.z.at = c
            }
            c = a.Rb();
            c instanceof Li ? this.zc = j : c instanceof aj ? this.isVisible = l : c instanceof Gj && (this.isVisible = l);
            Uj(this)
        };

        function Tj(a) {
            a.j("adBreakComplete", a)
        }
        n.G = function() {
            Qj.s.G.call(this);
            B(this.a, Tb);
            this.a = [];
            this.k = this.a = k
        };
        n.rk = function(a) {
            if (this.zc) {
                Vj(this, a);
                a = this.e;
                if ((a.a.getVideoData().wb || {}).shortform && !a.El) ye(a.getEnvironmentData().gb + "mac_204?action_fcts=1"), a.El = j;
                this.a[this.Fb].Fl && (this.si = l)
            }
            Tj(this)
        };
        n.uk = function(a, b) {
            if (b) {
                var c = {};
                Ai(b, c);
                c.sst = this.start;
                c.sidx = this.Fb;
                vj(this.e, 32, c)
            }
            Vj(this, a);
            Tj(this)
        };
        n.qk = function(a, b) {
            b.sst = this.start;
            b.sidx = this.Fb;
            gj(this.e.e, a, b)
        };

        function Wj(a) {
            this.Kn = a
        };

        function Xj(a) {
            this.b = new I;
            this.a = a;
            this.e = []
        }
        z(Xj, U);
        Xj.prototype.i = 0;
        Xj.prototype.k = 0;
        Xj.prototype.complete = function() {
            this.j("adBreaksComplete", this.e)
        };

        function Yj(a) {
            this.apply(a)
        }
        var Zj = {
            Vt: "m",
            zt: "f"
        };
        Yj.prototype.apply = function(a) {
            this.u = a.ad_slots;
            this.z = a.ad_breaks;
            this.Lb = a.ad_flags || 0;
            this.L = parseInt(a.cust_age, 10);
            this.ed = a.cafe_experiment_id;
            var b = parseInt(a.cust_gender, 10);
            isNaN(b) || (this.dd = b);
            this.V = a.ad_tag;
            this.ja = parseInt(a.ad_age, 10);
            this.Vc = a.cid;
            this.Wc = a.ad_eurl;
            this.Xc = a.duplicate_xfp;
            this.Yc = a.excluded_ads;
            this.pa = Ya(Zj, function(b) {
                return b == a.ad_gender
            });
            this.fh = a.ad_host;
            this.ma = parseInt(a.ad_host_tier, 10);
            this.Zc = a.icm_profile;
            this.Tc = 1 == a.ad_logging_flag;
            this.b = zi(a.aftv);
            this.e = zi(a.afv);
            this.ce = !!a.gut_tag;
            this.k = zi(a.dclk);
            this.Yd = 1 == a.livestream;
            this.i = 1 == parseInt(a.tpas_ad_type_id, 10);
            this.Zd = !!a.fqsf;
            this.a = zi(a.instream);
            this.ya = zi(a.mpu);
            this.n = zi(a.sffb);
            this.Vd = a.wl_cid && a.wl_ad_slots;
            this.bh = "1" == a.as_launched_in_country;
            b = a.ad_channel_code_instream;
            this.na = u(b) ? b.split(",") : [];
            this.Wa = a.ad_language_iso639_2;
            this.za = a.sf30;
            b = parseInt(a.afv_instream_max, 10);
            this.za ? b = 3E4 : isNaN(b) && (b = 15E3);
            this.dh = b;
            b = a.ad_channel_code_overlay;
            this.hb = u(b) ? b.split(",") : [];
            this.ah = a.ad_video_pub_id;
            this.ra = this.b && this.n && !this.e;
            this.Rc = this.e || this.ra;
            this.ib = a.tpas_video_id;
            this.C = a.tpas_partner_id;
            this.eh = a.wham
        };

        function $j(a, b) {
            this.e = a;
            this.F = b;
            this.k = y();
            this.a = a.b;
            this.b = {};
            this.i = 0;
            this.b.allowed = ak(this);
            var c = this.a.Yc;
            c && (this.b.ex_ads = c);
            (c = this.a.za) && (this.b.sf30 = c)
        }

        function gj(a, b, c) {
            var c = c || {},
                d = (y() - a.k) / 1E3;
            c.art = d;
            d = a.e.getEnvironmentData();
            c.feature = d.i;
            c.ad_flags = a.a.Lb;
            (d = a.a.Vc) && (c.cid = d);
            c.mt = a.F.getCurrentTime();
            (d = a.F.getDuration()) && (c.len = d);
            a.a.Zd && (c.fqsf = 1);
            c.ad_event = b;
            b = c;
            if (a.a.Tc) {
                var f;
                a: {
                    c = a.b;d = Za(b);
                    for (f in c) {
                        if (f in d) {
                            f = k;
                            break a
                        }
                        d[f] = c[f]
                    }
                    f = d
                }
                f === k ? a.e.log(a.b) : b = f;
                a.e.log(b);
                a.b = {}
            }
        }

        function ak(a) {
            var b = [];
            a.a.i && a.a.a && b.push("4_2");
            a.a.k && (a.a.a && b.push("1_2"), a.a.ya && b.push("1_3"));
            a.a.e && b.push("2_1");
            a.a.b && a.a.a && b.push("2_2");
            a.a.Rc && b.push("2_3");
            return b.join(",")
        };

        function bk(a, b) {
            this.b = b;
            this.e = [];
            this.i = {};
            this.Za = {};
            this.a = a
        }
        z(bk, Rb);
        n = bk.prototype;
        n.Vb = k;
        n.Of = function() {
            this.e.length || (Pa(this.b, function(a, b) {
                return a.getId() - b.getId()
            }), this.e = Da(this.b, function(a) {
                return "unloaded" == a.pd
            }), 0 == this.e.length ? hh(this.a) : (Ga(this.e, function(a) {
                return 0 == a.start
            }) === k && hh(this.a), ck(this)))
        };

        function ck(a) {
            if (a.e.length) {
                var b = a.e.shift();
                b.o("adBreakComplete", a.Ai, a);
                b.Of()
            }
        }
        n.Ai = function(a) {
            a.O("adBreakComplete", this.Ai, this);
            Q(w(this.Vq, this, a), 0)
        };
        n.Vq = function(a) {
            var b = Ca(this.b, a),
                c = this.b[b + 1],
                b = this.b[b - 1],
                d = 2147483646; - 2 == a.start || -1 == a.start ? d = 2147483647 : c && 2147483647 != c.start && (d = c.Ka() - 1);
            0 == a.n && (xj(this.a, "bl"), Sj(a) || xj(this.a, "fb"));
            if (c = !(Rj(a) && 0 < a.a.length)) {
                if (b && Rj(b)) {
                    var f = b.Ka();
                    f > d && (d = f);
                    dk(this, b);
                    ek(this, b, d)
                }
            } else this.i[a.getId()] = a, ek(this, a, d);
            hh(this.a);
            c && this.pe(a);
            ck(this)
        };

        function ek(a, b, c) {
            var d = b.Ka();
            if (d !== k) {
                var f = {};
                f.priority = -2 != b.start ? 1 : 2;
                f.id = b.getId();
                f.visible = b.isVisible;
                c = new Me(d, c, f);
                a.Za[b.getId()] = c;
                a.a.ad(c)
            }
        }

        function dk(a, b) {
            a.Za[b.getId()] && (a.a.vk(a.Za[b.getId()]), delete a.Za[b.getId()])
        }
        n.pe = function(a) {
            a.O("adBreakComplete", this.Ai, this);
            this.Vb && a == this.Vb && (this.Vb = k);
            dk(this, a);
            Ja(this.b, a);
            delete this.i[a.getId()];
            Tb(a)
        };
        n.Un = function(a) {
            if (a.zc) {
                if (-1 != a.start && a.si) {
                    var b = this.a;
                    fk(b);
                    b.playVideo()
                } else Sj(a) && !a.si ? (b = this.a, fk(b), b.playVideo()) : (fk(this.a), nh(this.a, l));
                this.pe(a)
            } else a.isVisible || this.pe(a)
        };
        n.G = function() {
            B(this.b, this.pe, this);
            bk.s.G.call(this)
        };

        function gk(a, b) {
            this.n = b;
            this.k = a;
            B(b, function(a) {
                a.o("adBreakComplete", this.b, this)
            }, this);
            this.a = {}
        }
        z(gk, Rb);
        gk.prototype.b = function(a) {
            if (!a.C)
                if (this.e(a), 0 == a.start) B(a.u, this.i, this);
                else {
                    var b = a.Ka();
                    if (b) {
                        var c = "ADT_" + a.getId(),
                            b = new Me(b, 2147483647, {
                                id: c,
                                priority: 0
                            });
                        this.a[c] = a.u;
                        this.k.ad(b)
                    }
                }
        };
        gk.prototype.e = function(a) {
            a.C || a.O("adBreakComplete", this.b, this)
        };
        gk.prototype.i = function(a) {
            u(a.a) ? ye(a.a) : gj(this.k.e, 13, a.a)
        };
        gk.prototype.G = function() {
            gk.s.G.call(this);
            B(this.n, this.e, this)
        };

        function hk() {
            this.e = new Jd(this);
            this.a = [];
            this.b = []
        }
        ba(hk);
        var ik = r("yt.player.utils.VideoTagPool.instance_") || hk.getInstance();
        oa("yt.player.utils.VideoTagPool.instance_", ik);
        n = hk.prototype;
        n.fr = function(a) {
            if (!(this.a.length >= a))
                for (var a = a - this.a.length, b = 0; b < a; b++) {
                    var c = jk(this);
                    this.a.push(c)
                }
        };

        function jk(a) {
            var b = qh();
            rh(b);
            if (a.b.length) {
                var c = a.b[0],
                    d = c.getVolume(),
                    c = c.isMuted();
                b.volume = d / 100;
                b.muted = c
            }
            a.b.push(b);
            a.e.N(b, "volumechange", a.Zp);
            return b
        }
        n.Zp = function(a) {
            var a = a.target,
                b = a.volume,
                c = a.muted;
            this.a.forEach(function(a) {
                a.volume = b;
                a.muted = c
            }, this)
        };
        n.jr = function() {
            return this.a.length ? this.a.pop() : jk(this)
        };
        n.hr = function(a) {
            a && Ha(this.b, a) && (sh(a), a.a = k, Ja(this.b, a))
        };
        n.gr = function(a) {
            return this.a.length >= (a || 1)
        };
        hk.prototype.fillPool = hk.prototype.fr;
        hk.prototype.getTag = hk.prototype.jr;
        hk.prototype.releaseTag = hk.prototype.hr;
        hk.prototype.hasTags = hk.prototype.gr;

        function kk(a, b, c) {
            this.i = a;
            this.a = b;
            this.k = c
        }
        z(kk, Rb);
        kk.prototype.b = k;
        kk.prototype.e = k;
        kk.prototype.m = k;

        function Ri(a) {
            a.b || (a.b = M("ad-container", a.i || a.a.a));
            return a.b
        }

        function Qi(a) {
            a.m || (a.m = ik.getTag(), J(a.m, "video-stream", "ad-video"));
            return a.m
        }

        function Si(a) {
            if (!a.e) {
                var b;
                if (a.k.wa) {
                    b = a.a.a.createElement("button");
                    J(b, "video-click-tracking");
                    a.a.append(b, oe("VISIT_ADVERTISERS_SITE"));
                    var c = a.a.a.createElement("div");
                    J(c, "video-click-tracking-container");
                    a.a.appendChild(c, b);
                    a.a.appendChild(Ri(a), c)
                } else b = a.a.a.createElement("div"), J(b, "video-click-tracking", "ad-video"), a.a.appendChild(Ri(a), b);
                a.e = b
            }
            return a.e
        }
        kk.prototype.G = function() {
            kk.s.G.call(this);
            this.m && ik.releaseTag(this.m);
            this.a.dp(Ri(this));
            this.a = this.b = this.e = this.m = k
        };

        function lk(a) {
            fh.call(this, a);
            this.L = {};
            this.z = {
                at: 0
            };
            this.u = new Zc;
            this.i = new kk(this.getRootNode(), this.u, this.getEnvironmentData())
        }
        z(lk, fh);
        n = lk.prototype;
        n.U = "ad";
        n.Nc = "ad";
        n.md = k;
        n.El = l;
        n.Ph = l;
        n.eb = function(a) {
            return a.getVideoData().Cl
        };
        n.create = function() {
            lk.s.create.call(this);
            this.ga = j;
            xj(this, "i");
            this.b = new Yj(this.a.getVideoData().wb || {});
            this.e = new $j(this, this.a);
            Ci();
            this.md = new Xj(this);
            this.md.o("adBreaksComplete", this.Yj, this);
            var a = this.md;
            try {
                var b = a.a.b,
                    c;
                if (a.a.getEnvironmentData().Nb || Ji(a.a)) c = new Wj([0]);
                else {
                    var d;
                    if (b.i) d = new Wj([0]);
                    else {
                        var f;
                        if (b.z) try {
                            var g = Aj(b.z).getElementsByTagName("AdBreak"),
                                i = Ea(g, function(a) {
                                    a = a.getAttribute("time");
                                    return Ba(a)
                                });
                            f = new Wj(i)
                        } catch (m) {
                            f = new Wj([0])
                        } else {
                            var o;
                            if (b.u) {
                                var q =
                                    Ea(b.u.split(","), Ba);
                                o = new Wj(q)
                            } else o = new Wj([0]);
                            f = o
                        }
                        d = f
                    }
                    c = d
                }
                for (var v = c.Kn, b = 0; b < v.length; b++) {
                    c = a;
                    var t = v[b],
                        H;
                    if (a.a.b.n) {
                        var Z = a.a;
                        d = [];
                        var ya = Z.b;
                        ya.i && ya.a && d.push(5);
                        ya.k && (ya.a ? d.push(3) : ya.ya && d.push(4));
                        ya.b && Ei(Z.getEnvironmentData()) && d.push(1);
                        ya.e && d.push(2)
                    } else {
                        var za = a.a;
                        d = [];
                        var D = za.b,
                            ij = D.a;
                        D.i && ij && d.push(5);
                        D.k && ij && d.push(3);
                        D.b && Ei(za.getEnvironmentData()) && d.push(1)
                    }
                    d = H = d;
                    var ef = new Qj(c.a, c.i++);
                    ef.start = t;
                    for (f = 0; 1 > f; f++) {
                        var g = ef,
                            no = new Nj(c.k++, 0, l);
                        g.a.push(no)
                    }
                    ef.k =
                        d;
                    a.e.push(ef)
                }
                a.complete()
            } catch (ep) {
                a.complete()
            }
            a = {};
            a.allowed = ak(this.e);
            kh(this, {}, a)
        };
        n.destroy = function() {
            this.Ph && fk(this);
            this.ga = l;
            Tb(this.md);
            this.md = k;
            Tb(this.k);
            this.k = k;
            Tb(this.C);
            this.C = k;
            lk.s.destroy.call(this)
        };
        n.getVideoData = function() {
            return this.a.getVideoData()
        };
        n.getEnvironmentData = function() {
            return this.a.getEnvironmentData()
        };
        n.isFullscreen = function() {
            return this.a.isFullscreen() || Ji(this)
        };

        function Ji(a) {
            return "leanback" == a.getEnvironmentData().eventLabel
        }
        n.o = function(a, b, c) {
            this.pubsub.o(a, b, c)
        };
        n.O = function(a, b, c) {
            this.pubsub.O(a, b, c)
        };
        n.j = function(a, b) {
            this.pubsub.j.apply(this.pubsub, arguments)
        };

        function vj(a, b, c) {
            c = c || {};
            c.ad_error = b;
            gj(a.e, 7, c)
        }
        n.getRootNode = function() {
            return this.a.getRootNode()
        };

        function Ti(a) {
            var b = a.getRootNode(),
                a = pg(b),
                b = vg(b);
            return new Qb(a.x, a.y, b.width, b.height)
        }
        n.Yj = function(a) {
            this.md.O("adBreaksComplete", this.Yj, this);
            xj(this, "bd");
            this.C = new gk(this, a);
            this.k = new bk(this, a);
            this.k.Of()
        };

        function fk(a) {
            a.Ph = l;
            a.pubsub.j("command_stop_redirect_controls");
            a.pubsub.j("command_enable_controls", ["seek"], a.U);
            a.pubsub.j("command_ad_break_ended")
        }

        function Ni(a, b, c) {
            a.pubsub.j("command_broadcast_ad_state_change", b, Qi(a.i), c)
        }
        n.ob = function(a) {
            lk.s.ob.call(this, a);
            var b = a.getId(),
                c;
            if (c = this.C) c = a.getId(), c = u(c) && 0 == c.lastIndexOf("ADT_", 0);
            if (c) {
                a.Ue = l;
                c = this.C;
                var d = c.a[b];
                d && (delete c.a[b], B(d, c.i, c));
                this.vk(a)
            } else if (this.k && !isNaN(b) && (a = this.k, da(b) && (b = a.i[b])))
                if (a.Vb == b && !b.zc && b.isVisible || (a.Vb && a.pe(a.Vb), a.Vb = b, b.o("adBreakComplete", a.Un, a), b.zc && (a = a.a, a.Ph = j, a.pubsub.j("command_redirect_controls", a, ["play_pause"]), a.pubsub.j("command_disable_controls", ["seek"], a.U), a.pubsub.j("command_ad_break_started"),
                        a.pubsub.j("command_pause"))), 0 != b.a.length) isNaN(b.Fb) ? (b.Fb = 0, a = b.a[b.Fb], a.Rb() instanceof Li && xj(b.e, "bs"), a.o("adEnd", b.rk, b), a.o("adError", b.uk, b), a.o("AD_LOGGING_EVENT", b.qk, b), Pj(a)) : Pj(b.a[b.Fb])
        };
        n.rb = function(a) {
            lk.s.rb.call(this, a);
            var b = a.getId(),
                c = 1E3 * this.a.getCurrentTime();
            if (this.k && !isNaN(b) && c > a.start && (2147483647 == a.end || 2147483646 == a.end))
                if (a = this.k, (b = a.i[b]) && a.Vb == b && (!b.zc && b.isVisible) && !isNaN(b.Fb)) b = b.a[b.Fb], b.mi && b.Ga instanceof Yi && Zi(b.Ga, google.ima.ViewMode.FULLSCREEN)
        };

        function xj(a, b) {
            var c = b;
            "nl" == b && (c = a.e, c.i++, c = c.i.toString());
            a.L[c] = y();
            ("bs" == c || "fb" == c) && kh(a, a.L, a.z)
        }

        function Fj(a, b) {
            var c = a.b.Xc;
            if (c) {
                var d = /\/N\d*/;
                b && b.match(d) ? c = b.replace(d, "/" + c) : (d = new Ac(b), d.Ed = c + d.Ed, c = d.toString());
                re(c)
            }
        }
        n.lg = function(a) {
            this.pubsub.j(a)
        };

        function mk(a) {
            return !lk.prototype.eb(a) ? k : new lk(a)
        };

        function nk(a, b) {
            if ("view" == a && b.convViewUrl) return b.convViewUrl;
            if (!b.baseUrl || !b.uid) return k;
            var c = b.rmktEnabled && b.vid,
                d = b.focEnabled && !b.isAd;
            if (!c && !d) return k;
            var f = {
                label: d ? "followon_" + a : "default"
            };
            if (c) {
                c = {
                    utvid: b.vid,
                    utuid: b.uid,
                    type: a
                };
                b.eventLabel && (c.el = b.eventLabel);
                b.playerStyle && (c.ps = b.playerStyle);
                var g = [],
                    i;
                for (i in c) g.push(encodeURIComponent(i) + "=" + encodeURIComponent(c[i]));
                f.data = g.join(";")
            }
            if (d && "view" == a && b.vid && b.uid && (b.oeid || b.ieid)) b.oeid && (f.oeid = b.oeid), b.ieid && (f.ieid =
                b.ieid), f.evid = b.vid;
            d && (f.foc_id = b.uid);
            return P(b.baseUrl, f)
        };

        function ok(a, b, c) {
            var d = {};
            0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
            d.video_id = a;
            d.plid = c.oa;
            a = {
                screen: be({
                    h: screen.height,
                    w: screen.width,
                    d: screen.colorDepth
                }),
                session_token: le("watch_actions_ajax")
            };
            c.Pq && (a.station_id = c.Pq);
            se("/watch_actions_ajax", {
                format: "XML",
                method: "POST",
                ug: d,
                jm: a,
                cb: c.cb,
                Ib: c.Ib,
                Le: c.Le
            })
        };

        function pk(a, b) {
            this.Fh = b;
            this.F = a;
            var c = a.getRootNode();
            this.a = M("html5-endscreen-actionbar", c);
            this.i = M("html5-actionbar-replay-button", this.a);
            O(this.i, "click", w(this.Sn, this));
            this.e = M("html5-like-button", this.a);
            O(this.e, "click", w(this.Rn, this));
            this.b = M("html5-dislike-button", this.a);
            O(this.b, "click", w(this.Qn, this));
            this.k = M("html5-share-button", this.a);
            O(this.k, "click", w(this.Tn, this))
        }
        n = pk.prototype;
        n.Fh = k;
        n.reset = function() {
            fi(this.b);
            fi(this.e)
        };

        function qk(a, b, c) {
            if (!Wc(c, "html5-async-progress")) {
                var d = a.F.getVideoData();
                fi(c, "html5-async-progress");
                a = a = {
                    oa: d.oa,
                    cb: w(a.Eq, a, c),
                    Ib: w(a.Dq, a, c)
                };
                ve("watch_actions_ajax", w(ok, p, d.B, b ? 0 : 1, a), a.Ib);
                je("CONVERSION_CONFIG_DICT") || (b = nk(b ? "like" : "dislike", d.Ua)) && ye(b)
            }
        }
        n.Sn = function() {
            this.Fh.j("command_play")
        };
        n.Rn = function(a) {
            qk(this, j, a.currentTarget)
        };
        n.Qn = function(a) {
            qk(this, l, a.currentTarget)
        };
        n.Tn = function() {
            this.Fh.j("command_share")
        };
        n.Eq = function(a) {
            fi(a, "html5-async-success")
        };
        n.Dq = function(a, b, c) {
            gi(a, c && c.error_message)
        };

        function rk(a, b) {
            this.Od = a;
            this.pubsub = b;
            this.Bg = yd("html5-endscreen", this.Od.getRootNode());
            J(this.Bg, this.Nm);
            this.lc = yd("html5-endscreen-content", this.Od.getRootNode())
        }
        n = rk.prototype;
        n.Nm = "base-endscreen";
        n.Bg = k;
        n.lc = k;
        n.pubsub = k;
        n.Od = k;
        n.create = function() {};
        n.destroy = function() {};

        function sk(a, b, c) {
            var c = c || {},
                d = c.Jc;
            d || (d = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(d), d = d.sheet || d.styleSheet);
            c.reset && tk(d);
            b = b instanceof Array ? b.join(";") : b;
            d.insertRule ? d.insertRule(a + "{" + b + "}", d.cssRules.length) : d.addRule(a, b, -1);
            return d
        }

        function tk(a) {
            for (var b = (a.cssRules || a.rules).length; 0 < b; b--) {
                var c = a;
                c.deleteRule ? c.deleteRule(0) : c.removeRule(0)
            }
        };
        var uk = window.location.protocol + "//web.archive.org/web/20120622093201/http://i.ytimg.com/",
            vk = 4 / 3;

        function wk(a, b, c) {
            if (!c) {
                c = a.clientHeight;
                a = a.clientWidth;
                if ((900 < a || 600 < c) && b.zl) return b.zl;
                if ((430 < a || 320 < c) && b.Al) return b.Al
            }
            return b.Bl ? b.Bl : b.B ? xk(b.B) : ""
        }

        function xk(a, b) {
            return (uk + "vi/" + escape(a) + "/" + escape(b || "hqdefault.jpg")).replace("i.", "i" + (a.charCodeAt(0) % 4 + 1) + ".")
        };

        function yk(a, b) {
            this.a = a;
            var c = b || k;
            if (!c) {
                var d = [],
                    f = {};
                this.a.replace(zk, function(a, b) {
                    b in f || (f[b] = j, d.push(b))
                });
                c = d
            }
            c = qa("__%s__", "(" + c.join("|") + ")");
            this.b = RegExp(c, "g")
        }
        var zk = /__([a-z]+(?:_[a-z]+)*)__/g;

        function Ak(a, b) {
            var c = L(a).innerHTML,
                c = c.replace(/^\s*(<\!--\s*)?/, ""),
                c = c.replace(/(\s*--\>)?\s*$/, "");
            return new yk(c, b)
        }
        yk.prototype.Ab = function(a, b, c) {
            var d = w(function(d, g) {
                b && (g = b(g));
                return c ? a[g] || "" : ta(a[g] || "")
            }, this);
            return this.a.replace(this.b, d)
        };

        function Bk() {
            var a = M("videowall-info-template");
            this.a = Ak(a, ["title", "author", "duration", "view_count"])
        }
        Bk.prototype.Ab = function(a) {
            var b = Za(a);
            b.duration = Jh(a.length_seconds);
            return this.a.Ab(b)
        };

        function Ck(a) {
            this.F = a;
            this.i = new Bk;
            a = M("videowall-still-content-template");
            this.k = Ak(a, ["info"]);
            a = document.createElement("a");
            a.tabIndex = 0;
            J(a, "videowall-still");
            O(a, "click", w(this.Lp, this));
            O(a, "keypress", w(this.Mp, this));
            this.a = a
        }
        n = Ck.prototype;
        n.update = function(a, b) {
            if (this.b != a.id) {
                this.e = a;
                this.b = a.id;
                var c;
                c = b ? "hqdefault.jpg" : "mqdefault.jpg";
                var d = {
                    info: this.i.Ab(a)
                };
                c = xk(this.b, c);
                this.a.style.backgroundImage = "url(" + c + ")";
                this.a.innerHTML = this.k.Ab(d, h, j);
                Xc(this.a, "videowall-still-featured", a.featured)
            }
        };
        n.P = function() {
            return this.a
        };
        n.select = function() {
            var a = "endscreen";
            if (this.e.featured) switch (this.e.feature_type) {
                case "fvwb":
                    a = "fvwpb";
                    break;
                default:
                    a = "fvwp"
            } else this.e.pinned && (a = "pinned");
            this.F.watchVideoById(this.b, a)
        };
        n.Lp = function() {
            this.select()
        };
        n.Mp = function(a) {
            switch (a.keyCode) {
                case 13:
                case 32:
                    this.select(), a.preventDefault()
            }
        };

        function Dk(a, b) {
            rk.call(this, a, b);
            this.cj = [];
            this.pubsub.o("onResize", this.Lq, this);
            this.pubsub.o("onVideoDataChange", this.Mq, this)
        }
        z(Dk, rk);
        n = Dk.prototype;
        n.Nm = "videowall-endscreen";
        n.Ne = k;
        n.sb = k;
        n.cj = k;
        n.ym = l;
        n.Oe = 0;
        n.create = function() {
            Dk.s.create.call(this);
            this.sb = this.Od.getVideoData().Kl;
            Ek(this)
        };
        n.destroy = function() {
            this.lc.innerHTML = "";
            delete this.sb;
            Dk.s.destroy.call(this)
        };

        function Ek(a) {
            if (a.sb && a.sb.length) {
                Xc(a.Bg, "endscreen-enable-layout", j);
                a.lc.innerHTML = "";
                tg(a.lc, "", "");
                var b = vg(a.lc);
                b.height -= 30;
                var c = Math.floor(b.width / 158),
                    d = Math.floor(b.height / (158 / 1.45));
                if (1 > d || 1 > c) a.Oe = 0;
                else {
                    var f = a.sb.length,
                        g = l;
                    a.sb[0].featured && (2 < d && 2 < c) && (g = j, f += 3);
                    Xc(a.lc, "feature-video", g);
                    for (var i = 0, m = 0, o = b.width / b.height, q = j; 0 <= f && (i < c || m < d);) {
                        var v = f >= m,
                            t = f >= i;
                        if (q && t || !v && t) f -= i, m++;
                        else if (v) f -= m, i++;
                        else break;
                        q = 1.45 * (i / m) > o
                    }
                    a.ym = q;
                    c = new G(i, m);
                    a.ym ? (d = 1 / c.width, b = b.width *
                        d, d = b / 1.45) : (d = 1 / c.height, d *= b.height, b = 1.45 * d);
                    b = new G(Math.floor(b), Math.floor(d));
                    a.Oe = c.width * c.height;
                    g && (a.Oe -= 3);
                    a.Ne && tk(a.Ne);
                    g = Fk(b);
                    d = {
                        Jc: a.Ne
                    };
                    a.Ne = sk(".videowall-still", g, d);
                    g = Fk(Pb(b.X(), 2));
                    d.Jc = a.Ne;
                    sk(".feature-video .videowall-still:first-child", g, d);
                    tg(a.lc, b.width * c.width, b.height * c.height)
                }
                g = 0;
                for (b = a.Oe; g < b; g++) c = a, d = g, f = c.cj[d], f || (f = new Ck(c.Od), c.cj[d] = f), f.update(c.sb[d], 0 == d && c.sb[0].featured), a.lc.appendChild(f.P());
                Xc(a.Bg, "endscreen-enable-layout", l)
            }
        }

        function Fk(a) {
            return ["width:" + a.width + "px", "height:" + a.height + "px"]
        }
        n.Lq = function() {
            Ek(this)
        };
        n.Mq = function() {
            var a = this.Od.getVideoData().Kl;
            this.sb != a && (this.sb = a, Ek(this))
        };

        function Gk(a) {
            fh.call(this, a);
            a.getEnvironmentData().hf ? this.mg = new Dk(this.a, this.pubsub) : this.mg = new rk(this.a, this.pubsub);
            this.Rl = new pk(this.a, this.pubsub)
        }
        z(Gk, fh);
        n = Gk.prototype;
        n.U = "endscreen";
        n.Nc = "end";
        n.Rl = k;
        n.mg = k;
        n.create = function() {
            Gk.s.create.call(this);
            var a = Math.max(1E3 * (this.a.getVideoData().ia - 10), 0),
                a = new Me(a, 2147483646, {
                    id: "preload"
                }),
                b = new Me(2147483646, 2147483647, {
                    id: "load",
                    He: 9
                });
            this.ad(a, b)
        };
        n.destroy = function() {
            gh(this);
            this.Rl.reset();
            Gk.s.destroy.call(this)
        };
        n.load = function() {
            Gk.s.load.call(this);
            this.ga = j
        };
        n.$ = function() {
            this.mg.destroy();
            Gk.s.$.call(this);
            this.ga = l
        };
        n.ob = function(a) {
            Gk.s.ob.call(this, a);
            "preload" == a.getId() ? this.mg.create() : this.a.getAutoplay() || this.load()
        };
        n.rb = function(a) {
            "load" == a.getId() && this.$();
            Gk.s.rb.call(this, a)
        };
        n.eb = function() {
            return j
        };

        function Hk(a) {
            return "leanback" != a.getEnvironmentData().eventLabel ? new Gk(a) : k
        };
        var Ik = {
            created: 1,
            ready: 2,
            testing: 4,
            "testing-starting": 3,
            live: 6,
            "live-starting": 5,
            complete: 8,
            "complete-starting": 7
        };

        function Jk(a) {
            this.b = new I;
            this.n = (new yk("https://web.archive.org/web/20120622093201/http://stage.gdata.youtube.com/feeds/api/users/live/broadcasts/__video_id__/states")).Ab({
                video_id: a
            });
            this.a = new pc(15E3 + Math.floor(3E4 * Math.random()));
            this.a.addEventListener("tick", w(this.e, this));
            this.e();
            this.a.start()
        }
        z(Jk, U);
        Jk.prototype.G = function() {
            this.a.Ja();
            Jk.s.G.call(this)
        };
        Jk.prototype.e = function() {
            se(this.n + ("?cb=" + (new Date).valueOf()), {
                format: "RAW",
                method: "GET",
                Ib: this.i,
                cb: this.k,
                Mc: this
            })
        };
        Jk.prototype.k = function(a) {
            this.j("payload", a.responseText);
            rc(this.a, 15E3 + Math.floor(3E4 * Math.random()))
        };
        Jk.prototype.i = function() {
            this.j("error");
            var a = this.a.b;
            192E4 > a && rc(this.a, 2 * a)
        };

        function Kk(a) {
            this.b = [];
            if (a) {
                var a = Aj(a),
                    b = a.documentElement.getAttribute("xmlns:yt") || a.documentElement.getAttribute("yt"),
                    c = a.getElementsByTagNameNS(b, "lifeCycleState"),
                    d = a.getElementsByTagNameNS(b, "when"),
                    a = a.getElementsByTagNameNS(b, "slate");
                c.length && (this.a = Ik[c[0].textContent] || -1);
                d.length && (c = new Date(d[0].getAttribute("start")), this.i = Math.floor(c.valueOf() / 1E3));
                if (a.length) {
                    c = a[0].getElementsByTagName("content");
                    if (d = Math.min(c.length, 3)) {
                        for (var b = [], f = 0; f < d; f++) b[f] = c[f].textContent;
                        this.b = b
                    }
                    if (a = a[0].getAttribute("imgUrl")) this.e = "url(" + a + ")"
                }
            }
        }
        Kk.prototype.a = -1;

        function Lk(a) {
            this.i = M("html5-fresca-module", a);
            this.k = M("html5-fresca-countdown", a);
            this.C = M("html5-fresca-message", a);
            a = M("html5-fresca-template", a);
            this.n = Ak(a, ["heading", "subheading", "long_text"])
        }
        Lk.prototype.update = function(a) {
            if (!this.u || this.a.a != a.a || this.a.i != a.i || this.a.e != a.e || this.a.b.join() != a.b.join()) {
                this.a = a;
                this.i.style.backgroundImage = this.a.e || "none";
                a = this.a.b;
                if (!a.length) {
                    a: switch (this.a.a) {
                        case 6:
                            a = "";
                            break a;
                        case 8:
                        case 7:
                            a = oe("FRESCA_COMPLETE_MESSAGE", h, "Thanks for watching!");
                            break a;
                        default:
                            a = oe("FRESCA_STAND_BY_MESSAGE", h, "Please stand by.")
                    }
                    a = [a]
                }
                this.C.innerHTML = this.n.Ab({
                    heading: a[0] || "",
                    subheading: a[1] || "",
                    long_text: a[2] || ""
                });
                this.e()
            }
        };
        Lk.prototype.Ja = function() {
            window.clearTimeout(this.b)
        };
        Lk.prototype.e = function() {
            var a;
            a = this.a;
            a.i ? (a = a.a, a = 6 == a || 8 == a || 7 == a ? l : j) : a = l;
            Xc(this.i, "html5-fresca-show-countdown", a);
            if (a) {
                a = this.a.i;
                var b = Math.floor((new Date).valueOf() / 1E3);
                this.k.innerHTML = b > a ? "" : Jh(a - b);
                window.clearTimeout(this.b);
                this.b = Q(w(this.e, this), 1E3)
            }
        };

        function Mk(a) {
            fh.call(this, a)
        }
        z(Mk, fh);
        n = Mk.prototype;
        n.U = "fresca";
        n.Nc = "fresca";
        n.uf = l;
        n.vf = l;
        n.eb = function() {
            return ag(this.a.getVideoData(), "fresca_module")
        };
        n.create = function() {
            Mk.s.create.call(this);
            this.uf = this.vf = l;
            this.i = new Lk(this.a.getRootNode());
            this.e = new Jk(this.a.getVideoData().B);
            this.e.o("payload", this.tp, this);
            this.e.o("error", this.sp, this);
            this.pubsub.o("onStateChange", this.ok, this)
        };
        n.destroy = function() {
            this.ga && this.$();
            this.pubsub.O("onStateChange", this.ok, this);
            this.e.Ja();
            this.i.Ja();
            delete this.e;
            delete this.i;
            delete this.b;
            Mk.s.destroy.call(this)
        };
        n.load = function() {
            Mk.s.load.call(this);
            this.ga = j
        };
        n.$ = function() {
            this.ga = l;
            Mk.s.$.call(this)
        };
        n.ok = function(a) {
            this.b && (this.uf = R(a.a, 4), (Nk(a, 32) || this.uf) && Ok(this, this.b))
        };
        n.sp = function() {
            this.b = new Kk;
            Ok(this, this.b)
        };
        n.tp = function(a) {
            this.b = new Kk(a);
            6 == this.b.a && !this.a.getVideoData().$d.length ? this.a.loadVideoById(this.a.getVideoData().B) : Ok(this, this.b)
        };

        function Ok(a, b) {
            var c = 6 > b.a;
            if (!c && a.a.isPeggedToLive() && (b.e || b.b.length)) c = j;
            a.uf && !a.a.getEnvironmentData().hf && (c = j);
            if (!a.vf) switch (b.a) {
                case 6:
                    a.vf = j;
                    hh(a);
                    break;
                case 8:
                case 7:
                    c = a.vf = j
            }
            c && a.i.update(b);
            c && !a.ga ? a.load() : !c && a.ga && a.$()
        }

        function Pk(a) {
            return !ag(a.getVideoData(), "fresca_module") ? k : new Mk(a)
        };

        function Qk(a, b) {
            return b != k && !!b.match(a)
        }

        function Rk(a, b) {
            for (var c in a)
                if (a[c] == b) return j;
            return l
        }

        function Sk(a, b, c) {
            var d = new Tk;
            d.type = c;
            d.defaultValue = h;
            d.b = na(Qk, /.+/);
            return Uk(a[b], d)
        }

        function Vk(a, b, c) {
            var d = new Tk;
            d.type = "OPTIONAL";
            d.a = function(a) {
                if (isNaN(parseInt(a, 0))) return k;
                a = parseInt(a, 0).toString(16);
                return "#" + "000000".substring(0, 6 - a.length) + a
            };
            d.b = function(a) {
                return !!a
            };
            d.defaultValue = c;
            return Uk(a[b], d)
        }

        function Wk(a, b, c, d) {
            var f = new Tk;
            f.type = c;
            f.defaultValue = d;
            return Uk(a[b], f)
        }

        function Xk(a, b, c, d, f) {
            var g = new Tk;
            g.type = d;
            g.defaultValue = f;
            g.b = na(Rk, c);
            return Uk(a[b], g)
        }

        function Yk(a, b) {
            var c = new Tk;
            c.type = "OPTIONAL";
            c.defaultValue = 0;
            c.a = function(a) {
                return parseFloat(a)
            };
            return Uk(a[b], c)
        }

        function Zk(a) {
            var b = new Tk;
            b.type = "OPTIONAL";
            b.defaultValue = 0;
            b.a = function(a) {
                return parseInt(a, 10)
            };
            Uk(a.d, b)
        }

        function $k(a, b, c, d, f, g, i) {
            var m = new Tk;
            m.type = "OPTIONAL";
            m.a = function(a) {
                a = 10 == c ? parseFloat(a) : parseInt(a, c);
                return g && a != k && !isNaN(a) ? Lb(a, d, f) : a
            };
            m.defaultValue = i;
            m.b = function(a) {
                return a != k && !isNaN(a) && a >= d && a <= f
            };
            return Uk(a[b], m)
        }

        function al(a, b) {
            var c = new Tk;
            c.type = "OPTIONAL";
            c.defaultValue = 0;
            c.a = function(a) {
                a = a.match(/([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(\.[0-9])/);
                return !a ? -1 : 3600 * parseFloat(a[1]) + 60 * parseFloat(a[2]) + parseFloat(a[3]) + parseFloat(a[4])
            };
            return Uk(a[b], c)
        }

        function bl(a, b) {
            if (b == k) return k;
            var c = new a;
            c.Na(b);
            return c
        }

        function cl(a, b, c, d) {
            if (a == k || a[b] == k) return k;
            var f = new Tk;
            f.type = d;
            f.defaultValue = h;
            f.b = function(a) {
                return !!a
            };
            f.a = na(bl, c);
            return Uk(a[b], f)
        }

        function Uk(a, b) {
            var c;
            "OPTIONAL" == b.type || "REQUIRED" == b.type ? (c = a == k ? k : b.a(s(a) && a.length ? a[0] : a), b.b(c) || ("REQUIRED" == b.type && e("Required field missing."), c = b.defaultValue == k ? k : b.defaultValue)) : c = "REPEATED" == b.type ? a != k ? dl(s(a) ? a : [a], b) : b.defaultValue != k ? s(b.defaultValue) ? b.defaultValue : [b.defaultValue] : [] : "IDLIST" == b.type ? a != k ? dl(Da(a.split(/ +/), function(a) {
                return "" != a
            }), b) : b.defaultValue != k ? s(b.defaultValue) ? b.defaultValue : [b.defaultValue] : [] : k;
            return c
        }

        function dl(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var f = b.a(a[d]);
                b.b(f) && c.push(f)
            }
            return c.length ? c : b.defaultValue != k ? s(b.defaultValue) ? b.defaultValue : [b.defaultValue] : []
        }

        function Tk() {}
        Tk.prototype.type = "OPTIONAL";
        Tk.prototype.a = function(a) {
            return a == k ? k : a.toString()
        };
        Tk.prototype.b = function(a) {
            return a != k
        };
        Tk.prototype.defaultValue = k;

        function el() {}
        var fl = {
            CLICK: "click",
            br: "hidden",
            nu: "rollOut",
            ou: "rollOver",
            su: "shown"
        };
        el.prototype.Na = function(a) {
            Sk(a, "ref", "OPTIONAL");
            Xk(a, "state", fl, "OPTIONAL")
        };

        function gl() {}
        gl.prototype.Na = function(a) {
            cl(a, "condition", el, "REPEATED")
        };

        function hl() {}
        var il = {
            ut: "current",
            au: "new"
        };
        hl.prototype.type = k;
        hl.prototype.value = k;
        hl.prototype.target = k;
        hl.prototype.Na = function(a) {
            this.value = Wk(a, "value", "OPTIONAL");
            this.target = Xk(a, "target", il, "OPTIONAL", "current")
        };

        function jl() {}
        jl.prototype.value = 0;
        jl.prototype.Na = function(a) {
            this.value = al(a, "value")
        };

        function kl() {}
        var ll = {
            bu: "openUrl",
            dr: "pause"
        };
        n = kl.prototype;
        n.type = k;
        n.trigger = k;
        n.url = k;
        n.sf = k;
        n.Na = function(a) {
            this.type = Xk(a, "type", ll, "OPTIONAL");
            this.trigger = Xk(a, "trigger", fl, "OPTIONAL");
            this.url = cl(a, "url", hl, "OPTIONAL");
            this.sf = cl(a, "duration", jl, "OPTIONAL")
        };

        function ml() {
            this.a = []
        }
        n = ml.prototype;
        n.re = "#1A1A1A";
        n.od = "#FFF";
        n.Ef = "#000";
        n.Ff = 0;
        n.nd = 0.8;
        n.Tl = 0.2;
        n.Ul = 0;
        n.Zh = "#F2F2F2";
        n.ni = 3;
        n.$h = 3.6107;
        n.Df = "";
        n.padding = k;
        n.Na = function(a) {
            this.re = Vk(a, "fgColor", this.re);
            this.od = Vk(a, "bgColor", this.od);
            this.Ef = Vk(a, "borderColor", this.Ef);
            this.Ff = $k(a, "borderWidth", 16, 1, 5, l, this.Ff);
            this.nd = $k(a, "bgAlpha", 10, 0, 1, l, this.nd);
            this.Tl = $k(a, "borderAlpha", 10, 0, 1, l, this.Tl);
            this.Ul = $k(a, "gloss", 16, 0, 255, l, this.Ul);
            this.Zh = Vk(a, "highlightFontColor", this.Zh);
            this.ni = $k(a, "highlightWidth", 16, 1, 5, l, this.ni);
            this.$h = $k(a, "textSize", 10, 3.3, 30.1, j, this.$h);
            this.Df = Wk(a, "fontWeight", "OPTIONAL", this.Df);
            var b = a ? !a.padding || !a.padding.length ?
                a.padding : a.padding[0] : k;
            this.padding = (b = b ? new Nb(parseFloat(b.top), parseFloat(b.right), parseFloat(b.bottom), parseFloat(b.left)) : k) && b.top != k && !isNaN(b.top) && b.right != k && !isNaN(b.right) && b.bottom != k && !isNaN(b.bottom) && b.left != k && !isNaN(b.left) ? b : k;
            this.a = Wk(a, "effects", "IDLIST")
        };

        function nl() {}
        n = nl.prototype;
        n.x = 0;
        n.y = 0;
        n.bg = 0;
        n.ag = 0;
        n.Gd = 0;
        n.Na = function(a) {
            this.x = Yk(a, "x");
            this.y = Yk(a, "y");
            this.bg = Yk(a, "w");
            this.ag = Yk(a, "h");
            this.Gd = al(a, "t");
            Zk(a)
        };

        function ol() {}
        n = ol.prototype;
        n.x = 0;
        n.y = 0;
        n.bg = 0;
        n.ag = 0;
        n.Gd = 0;
        n.Xk = 0;
        n.Yk = 0;
        n.Na = function(a) {
            this.x = Yk(a, "x");
            this.y = Yk(a, "y");
            this.Xk = Yk(a, "sx");
            this.Yk = Yk(a, "sy");
            this.bg = Yk(a, "w");
            this.ag = Yk(a, "h");
            this.Gd = al(a, "t");
            Zk(a)
        };

        function pl() {}
        var ql = {
            ar: "anchored",
            lu: "rect"
        };
        pl.prototype.type = "rect";
        pl.prototype.b = k;
        pl.prototype.a = k;
        pl.prototype.Na = function(a) {
            this.type = Xk(a, "type", ql, "OPTIONAL", "rect");
            this.b = cl(a, "rectRegion", nl, "REPEATED");
            this.a = cl(a, "anchoredRegion", ol, "REPEATED")
        };

        function rl() {}
        rl.prototype.b = k;
        rl.prototype.a = k;
        rl.prototype.Na = function(a) {
            Sk(a, "timeRelative", "OPTIONAL");
            this.b = Sk(a, "spaceRelative", "OPTIONAL");
            this.a = cl(a, "movingRegion", pl, "REPEATED")
        };

        function sl(a) {
            if (!a.a) return k;
            a = a.a[0].b || a.a[0].a;
            if (!a || 2 > a.length) return k;
            var b = a.length - 1;
            return 0 == a[0].Gd && 0 == a[b] ? k : {
                start: a[0].Gd,
                end: a[b].Gd
            }
        };

        function tl() {}
        var ul = {
                ar: "anchored",
                vt: "donation",
                Ht: "highlightText",
                Nt: "label",
                gu: "popup",
                uu: "speech",
                Bu: "title"
            },
            vl = {
                Gt: "highlight",
                dr: "pause",
                zu: "text",
                Au: "thumbnail"
            };
        tl.prototype.Na = function(a) {
            this.id = Sk(a, "id", "REQUIRED");
            this.author = Sk(a, "author", "OPTIONAL");
            this.type = Xk(a, "type", vl, "REQUIRED");
            this.style = Xk(a, "style", ul, "OPTIONAL", "");
            this.i = Wk(a, "TEXT", "OPTIONAL");
            this.a = cl(a, "segment", rl, "REQUIRED");
            this.e = cl(a, "action", kl, "REPEATED");
            this.trigger = cl(a, "trigger", gl, "REPEATED");
            this.b = cl(a, "appearance", ml, "OPTIONAL");
            this.b || (this.b = new ml)
        };

        function wl(a) {
            if (!a.e) return k;
            for (var b in a.e)
                if (a.e[b].url) return a.e[b].url;
            return k
        }

        function xl(a) {
            return !a.e ? l : a.e.some(function(a) {
                return a.trigger && "click" == a.trigger
            })
        }

        function yl(a) {
            return (a = (a = a.a && a.a.a ? a.a.a[0] : k) ? a.b || a.a : k) ? new Qb(a[0].x, a[0].y, a[0].bg, a[0].ag) : new Qb(0, 0, 0, 0)
        };

        function zl() {
            this.la = [];
            this.D = [];
            this.Jb = []
        }
        zl.prototype.Pd = k;
        zl.prototype.tb = k;
        zl.prototype.Dg = j;
        var Al = [2, 2, 6, 6, 0];
        zl.prototype.clear = function() {
            this.la.length = 0;
            this.D.length = 0;
            this.Jb.length = 0;
            delete this.Pd;
            delete this.tb;
            delete this.Dg;
            return this
        };

        function Bl(a, b, c) {
            0 == a.la[a.la.length - 1] ? a.Jb.length -= 2 : (a.la.push(0), a.D.push(1));
            a.Jb.push(b, c);
            a.tb = a.Pd = [b, c]
        }
        zl.prototype.a = function(a) {
            var b = this.la[this.la.length - 1];
            b == k && e(Error("Path cannot start with lineTo"));
            1 != b && (this.la.push(1), this.D.push(0));
            for (b = 0; b < arguments.length; b += 2) {
                var c = arguments[b],
                    d = arguments[b + 1];
                this.Jb.push(c, d)
            }
            this.D[this.D.length - 1] += b / 2;
            this.tb = [c, d]
        };

        function Cl(a) {
            var b = a.la[a.la.length - 1];
            b == k && e(Error("Path cannot start with close"));
            4 != b && (a.la.push(4), a.D.push(1), a.tb = a.Pd)
        }

        function Dl(a, b, c, d, f) {
            var g = a.tb[0] - b * Math.cos(d * Math.PI / 180) + b * Math.cos((d + f) * Math.PI / 180),
                i = a.tb[1] - c * Math.sin(d * Math.PI / 180) + c * Math.sin((d + f) * Math.PI / 180);
            a.la.push(3);
            a.D.push(1);
            a.Jb.push(b, c, d, f, g, i);
            a.Dg = l;
            a.tb = [g, i]
        }
        zl.prototype.X = function() {
            var a = new this.constructor;
            a.la = this.la.concat();
            a.D = this.D.concat();
            a.Jb = this.Jb.concat();
            a.Pd = this.Pd && this.Pd.concat();
            a.tb = this.tb && this.tb.concat();
            a.Dg = this.Dg;
            return a
        };
        zl.prototype.isEmpty = function() {
            return 0 == this.la.length
        };

        function El(a) {
            this.b = a;
            this.a = []
        }
        z(El, Rb);
        var Fl = [];
        El.prototype.N = function(a, b, c, d, f) {
            s(b) || (Fl[0] = b, b = Fl);
            for (var g = 0; g < b.length; g++) {
                var i = fc(a, b[g], c || this, d || l, f || this.b || this);
                this.a.push(i)
            }
            return this
        };
        El.prototype.e = function(a, b, c, d, f) {
            if (s(b))
                for (var g = 0; g < b.length; g++) this.e(a, b[g], c, d, f);
            else {
                a: {
                    c = c || this;f = f || this.b || this;d = !!d;
                    if (a = ic(a, b, d))
                        for (b = 0; b < a.length; b++)
                            if (!a[b].Dc && a[b].Cd == c && a[b].capture == d && a[b].Rf == f) {
                                a = a[b];
                                break a
                            }
                    a = k
                }
                a && (a = a.key, jc(a), Ja(this.a, a))
            }
            return this
        };
        El.prototype.G = function() {
            El.s.G.call(this);
            B(this.a, jc);
            this.a.length = 0
        };
        El.prototype.handleEvent = function() {
            e(Error("EventHandler.handleEvent not implemented"))
        };

        function Gl() {}
        ba(Gl);
        Gl.prototype.a = 0;
        Gl.getInstance();

        function Hl(a) {
            this.k = a || Yc()
        }
        z(Hl, oc);
        n = Hl.prototype;
        n.Yp = Gl.getInstance();
        n.am = k;
        n.$a = l;
        n.T = k;
        n.Fd = k;
        n.wg = k;
        n.vg = k;
        n.getId = function() {
            return this.am || (this.am = ":" + (this.Yp.a++).toString(36))
        };
        n.P = function() {
            return this.T
        };
        n.gj = function(a) {
            this.Fd && this.Fd != a && e(Error("Method not supported"));
            Hl.s.gj.call(this, a)
        };
        n.yi = function() {
            this.T = this.k.a.createElement("div")
        };
        n.Ab = function(a) {
            this.$a && e(Error("Component already rendered"));
            this.T || this.yi();
            a ? a.insertBefore(this.T, k) : this.k.a.body.appendChild(this.T);
            (!this.Fd || this.Fd.$a) && this.eg()
        };
        n.eg = function() {
            this.$a = j;
            Il(this, function(a) {
                !a.$a && a.P() && a.eg()
            })
        };
        n.De = function() {
            Il(this, function(a) {
                a.$a && a.De()
            });
            if (this.n) {
                var a = this.n;
                B(a.a, jc);
                a.a.length = 0
            }
            this.$a = l
        };
        n.G = function() {
            Hl.s.G.call(this);
            this.$a && this.De();
            this.n && (this.n.Ja(), delete this.n);
            Il(this, function(a) {
                a.Ja()
            });
            this.T && N(this.T);
            this.Fd = this.T = this.vg = this.wg = k
        };

        function Il(a, b) {
            a.wg && B(a.wg, b, h)
        }
        n.removeChild = function(a, b) {
            if (a) {
                var c = u(a) ? a : a.getId(),
                    d;
                this.vg && c ? (d = this.vg, d = (c in d ? d[c] : h) || k) : d = k;
                a = d;
                c && a && (d = this.vg, c in d && delete d[c], Ja(this.wg, a), b && (a.De(), a.T && N(a.T)), c = a, c == k && e(Error("Unable to set parent component")), c.Fd = k, Hl.s.gj.call(c, k))
            }
            a || e(Error("Child is not in parent component"));
            return a
        };

        function Jl(a, b, c, d, f) {
            this.k = f || Yc();
            this.width = a;
            this.height = b;
            this.b = c || k;
            this.u = d || k
        }
        z(Jl, Hl);
        Jl.prototype.e = k;
        Jl.prototype.Jd = function() {
            return this.$a ? vg(this.P()) : "number" == typeof this.width && "number" == typeof this.height ? new G(this.width, this.height) : k
        };

        function Kl(a) {
            var b = a.Jd();
            return b ? b.width / (a.b ? new G(a.b, a.u) : a.Jd()).width : 0
        };

        function Ll() {};

        function Ml(a, b) {
            this.a = a;
            this.b = b == k ? 1 : b
        }
        z(Ml, Ll);

        function Nl(a, b) {
            this.a = a;
            this.b = b
        };

        function Ol(a, b) {
            this.T = a;
            this.ul = b;
            this.fi = l
        }
        z(Ol, oc);
        n = Ol.prototype;
        n.ul = k;
        n.T = k;
        n.P = function() {
            return this.T
        };
        n.addEventListener = function(a, b, c, d) {
            fc(this.T, a, b, c, d)
        };
        n.removeEventListener = function(a, b, c, d) {
            hc(this.T, a, b, c, d)
        };
        n.G = function() {
            Ol.s.G.call(this);
            lc(this.T)
        };

        function Pl(a, b, c, d) {
            Ol.call(this, a, b);
            a = this.ul;
            b = this.P();
            c ? (b.setAttribute("stroke", c.b), c = c.a, u(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / Kl(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
            c = this.P();
            d instanceof Ml ? (c.setAttribute("fill", d.a), c.setAttribute("fill-opacity", d.b)) : c.setAttribute("fill", "none")
        }
        z(Pl, Ol);

        function Ql(a, b) {
            Ol.call(this, a, b)
        }
        z(Ql, Ol);

        function Rl(a, b, c, d) {
            Pl.call(this, a, b, c, d)
        }
        z(Rl, Pl);

        function Sl(a, b) {
            Ol.call(this, a, b)
        }
        z(Sl, Ql);
        Sl.prototype.clear = function() {
            jd(this.P())
        };

        function Tl(a, b, c, d) {
            Pl.call(this, a, b, c, d)
        }
        z(Tl, Rl);

        function Ul(a, b, c, d, f) {
            Jl.call(this, a, b, c, d, f);
            this.a = {};
            this.z = vb && !E(526);
            this.L = new El(this)
        }
        var Vl;
        z(Ul, Jl);
        var Wl = 0;

        function Xl(a, b, c) {
            a = a.k.a.createElementNS("http://www.w3.org/2000/svg", b);
            if (c)
                for (var d in c) a.setAttribute(d, c[d]);
            return a
        }
        n = Ul.prototype;
        n.yi = function() {
            var a = Xl(this, "svg", {
                    width: this.width,
                    height: this.height,
                    overflow: "hidden"
                }),
                b = Xl(this, "g");
            this.i = Xl(this, "defs");
            this.e = new Sl(b, this);
            a.appendChild(this.i);
            a.appendChild(b);
            this.T = a;
            this.b && (this.P().setAttribute("preserveAspectRatio", "none"), this.z ? this.gg() : this.P().setAttribute("viewBox", "0 0 " + (this.b ? this.b + " " + this.u : "")))
        };
        n.gg = function() {
            if (this.$a) {
                var a = this.Jd();
                0 == a.width ? this.P().style.visibility = "hidden" : (this.P().style.visibility = "", this.e.P().setAttribute("transform", "scale(" + a.width / this.b + " " + a.height / this.u + ") translate(0 0)"))
            }
        };
        n.Jd = function() {
            if (!ub) return this.$a ? vg(this.P()) : Ul.s.Jd.call(this);
            var a = this.width,
                b = this.height,
                c = u(a) && -1 != a.indexOf("%"),
                d = u(b) && -1 != b.indexOf("%");
            if (!this.$a && (c || d)) return k;
            var f, g;
            c && (f = this.P().parentNode, g = vg(f), a = parseFloat(a) * g.width / 100);
            d && (f = f || this.P().parentNode, g = g || vg(f), b = parseFloat(b) * g.height / 100);
            return new G(a, b)
        };
        n.clear = function() {
            this.e.clear();
            jd(this.i);
            this.a = {}
        };

        function Yl(a, b, c, d) {
            b = Xl(a, "path", {
                d: Zl(b)
            });
            c = new Tl(b, a, c, d);
            a.e.P().appendChild(c.P())
        }

        function Zl(a) {
            for (var b = [], c = a.Jb, d = 0, f = 0, g = a.la.length; f < g; f++) {
                var i = a.la[f],
                    m = Al[i] * a.D[f],
                    o = c.slice(d, d + m);
                switch (i) {
                    case 0:
                        b.push("M");
                        Array.prototype.push.apply(b, o);
                        break;
                    case 1:
                        b.push("L");
                        Array.prototype.push.apply(b, o);
                        break;
                    case 2:
                        b.push("C");
                        Array.prototype.push.apply(b, o);
                        break;
                    case 3:
                        i = o[3];
                        b.push("A", o[0], o[1], 0, 180 < Math.abs(i) ? 1 : 0, 0 < i ? 1 : 0, o[4], o[5]);
                        break;
                    case 4:
                        b.push("Z")
                }
                d += m
            }
            return b.join(" ")
        }
        n.eg = function() {
            var a = this.Jd();
            Ul.s.eg.call(this);
            a || this.dispatchEvent("resize");
            if (this.z) {
                var a = this.width,
                    b = this.height;
                "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && this.L.N($l(), "tick", this.gg);
                this.gg()
            }
        };
        n.De = function() {
            Ul.s.De.call(this);
            this.z && this.L.e($l(), "tick", this.gg)
        };
        n.G = function() {
            delete this.a;
            delete this.i;
            delete this.e;
            Ul.s.G.call(this)
        };

        function $l() {
            Vl || (Vl = new pc(400), Vl.start());
            return Vl
        };

        function am(a, b) {
            this.start = a < b ? a : b;
            this.end = a < b ? b : a
        }
        am.prototype.X = function() {
            return new am(this.start, this.end)
        };

        function bm(a, b, c) {
            var d = document.createElementNS("http://www.w3.org/2000/svg", a);
            b && Va(b, function(a, b) {
                d.setAttribute(b, a)
            });
            for (var f = 2; f < arguments.length; f++) d.appendChild(arguments[f]);
            return d
        }

        function cm(a, b) {
            var c;
            c = ":" + (Gl.getInstance().a++).toString(36);
            b.setAttribute("result", c);
            a.appendChild(b);
            return c
        };

        function dm(a, b) {
            var c = cm(a, bm("feGaussianBlur", {
                    "in": b,
                    stdDeviation: "1.8"
                })),
                c = cm(a, bm("feDiffuseLighting", {
                    "in": c,
                    surfaceScale: "4",
                    diffuseConstant: "1"
                }, bm("feDistantLight", {
                    azimuth: "270",
                    elevation: "15",
                    "lighting-color": "white"
                }))),
                c = cm(a, bm("feComposite", {
                    "in": c,
                    in2: b,
                    operator: "in"
                }));
            return cm(a, bm("feComposite", {
                in2: c,
                "in": b,
                operator: "arithmetic",
                k2: 1,
                k3: 0.5,
                k4: 0
            }))
        }

        function em(a, b) {
            var c = cm(a, bm("feOffset", {
                    "in": b,
                    dx: "3",
                    dy: "3"
                })),
                c = cm(a, bm("feGaussianBlur", {
                    "in": c,
                    stdDeviation: "3"
                })),
                c = cm(a, bm("feColorMatrix", {
                    "in": c,
                    type: "matrix",
                    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
                })),
                d = cm(a, bm("feColorMatrix", {
                    "in": b,
                    type: "matrix",
                    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
                })),
                d = cm(a, bm("feGaussianBlur", {
                    "in": d,
                    stdDeviation: "1"
                })),
                c = cm(a, bm("feComposite", {
                    operator: "out",
                    "in": c,
                    in2: d
                }));
            return cm(a, bm("feComposite", {
                operator: "over",
                "in": b,
                in2: c
            }))
        }

        function fm(a, b) {
            return b
        }

        function gm(a) {
            a = Da(a, function(a) {
                return a in hm
            });
            Pa(a, function(a, c) {
                return hm[a] - hm[c]
            });
            return a
        }

        function im(a, b) {
            if (!b) return k;
            var c = "effects:" + (b ? b.join("|") : ""),
                d = c in a.a ? a.a[c] : k;
            if (d) return d;
            var f = bm("filter", {
                    filterUnits: "userSpaceOnUse"
                }),
                g = "SourceGraphic";
            B(b, function(a) {
                a: {
                    switch (a) {
                        case "bevel":
                            a = dm;
                            break a;
                        case "dropshadow":
                            a = em;
                            break a
                    }
                    a = fm
                }
                g = a(f, g)
            });
            0 < f.childNodes.length ? c in a.a ? c = a.a[c] : (d = "_svgdef_" + Wl++, f.setAttribute("id", d), a.a[c] = d, a.i.appendChild(f), c = d) : c = k;
            return c
        }
        var hm = {
            bevel: 1,
            dropshadow: 2
        };

        function jm(a, b) {
            return new Qb(a.width * b.left / 100 + a.left, a.height * b.top / 100 + a.top, a.width * b.width / 100, a.height * b.height / 100)
        };

        function km() {}
        km.prototype.b = l;
        km.prototype.a = k;

        function lm(a, b, c) {
            a.a ? (tg(a.a.P(), b, c), a.a.clear()) : (a.a = new Ul(b, c), a.a.yi());
            return a.a
        }
        km.prototype.P = function() {
            return this.a ? this.a.P() : k
        };
        km.prototype.e = function() {};

        function mm() {}
        z(mm, km);
        mm.prototype.e = function(a, b) {
            var c = nm,
                d = yl(a);
            if (!(0 >= d.width || 0 >= d.height)) {
                var f = a.b || new ml,
                    g = jm(b, d),
                    i = om(g, f.a),
                    d = lm(this, i.width, i.height),
                    m = f.Ff,
                    o = this.b && xl(a),
                    m = (m += o ? 1 : 0) ? new Nl(m, o ? f.re : f.Ef) : k,
                    c = new Ml(f.od, c(this.b, f.nd));
                pm(d, new Qb(0, 0, g.width, g.height), m, c);
                c = d.P();
                qm(c, "annotation-shape");
                qm(c, "annotation-popup-shape");
                kg(c, i.left, i.top);
                tg(c, i.width, i.height);
                if (f.a && (i = Ga(c.childNodes, function(a) {
                        return "g" == a.tagName
                    })))(f = im(d, gm(f.a))) && i.setAttribute("filter", "url(#" + f + ")")
            }
        };

        function rm() {}
        z(rm, km);
        rm.prototype.e = function(a, b) {
            var c = nm,
                d = yl(a);
            if (!(0 >= d.width || 0 >= d.height)) {
                var f = a.b || new ml,
                    g = jm(b, d),
                    d = om(g, f.a),
                    i = lm(this, d.width, d.height);
                pm(i, new Qb(0, 0, g.width, g.height), new Nl(f.ni, f.od), new Ml("#000", 0));
                g = i.P();
                qm(g, "annotation-shape");
                g.style.opacity = c(this.b, f.nd);
                kg(g, d.left, d.top);
                tg(g, d.width, d.height)
            }
        };

        function sm() {}
        z(sm, km);
        var Y = {
            Nf: "t",
            Lf: "l",
            Kf: "b",
            Mf: "r",
            Mm: "i",
            Du: ""
        };
        sm.prototype.e = function(a, b) {
            var c = nm,
                d = a.b || new ml,
                f = d.Ff,
                g = this.b && xl(a),
                f = (f += g ? 1 : 0) ? new Nl(f, g ? d.re : d.Ef) : k,
                c = new Ml(d.od, c(this.b, d.nd)),
                g = yl(a);
            if (!(0 >= g.width || 0 >= g.height)) {
                var i = jm(b, g);
                g = !a.a || !a.a.a ? k : (g = a.a.a[0].a) ? new F(g[0].Xk, g[0].Yk) : k;
                if (g) {
                    var m = new F(b.width * g.x / 100 + b.left, b.height * g.y / 100 + b.top),
                        g = i.X(),
                        o = new Qb(m.x, m.y, 1, 1),
                        q = Math.max(g.left + g.width, o.left + o.width),
                        v = Math.max(g.top + g.height, o.top + o.height);
                    g.left = Math.min(g.left, o.left);
                    g.top = Math.min(g.top, o.top);
                    g.width = q - g.left;
                    g.height = v - g.top;
                    var o = om(g, d.a),
                        g = lm(this, o.width, o.height),
                        t = new Qb(i.left - o.left, i.top - o.top, i.width, i.height),
                        H = new F(m.x - o.left, m.y - o.top);
                    this.i = 4.5 * b.height / 100;
                    var i = f ? f.a / 2 : 0,
                        m = tm(t, H),
                        q = this.k(t, H, m),
                        v = H.x,
                        H = H.y,
                        Z = t.width,
                        ya = t.height,
                        za = t.left,
                        t = t.top,
                        D = new zl;
                    Bl(D, za + 4 + i, t + i);
                    m == Y.Nf && (D.a(q.start, t + i), D.a(v, H), D.a(q.end, t + i));
                    D.a(za + Z - 4 - i, t + i);
                    Dl(D, 4, 4, -90, 90);
                    m == Y.Mf && (D.a(za + Z - i, q.start), D.a(v, H), D.a(za + Z - i, q.end));
                    D.a(za + Z - i, t + ya - 4 - i);
                    Dl(D, 4, 4, 0, 90);
                    m == Y.Kf && (D.a(q.end, t + ya - i), D.a(v,
                        H), D.a(q.start, t + ya - i));
                    D.a(za + 4 + i, t + ya - i);
                    Dl(D, 4, 4, 90, 90);
                    m == Y.Lf && (D.a(za + i, q.end), D.a(v, H), D.a(za + i, q.start));
                    D.a(za + i, t + 4 + i);
                    Dl(D, 4, 4, 180, 90);
                    Cl(D);
                    Yl(g, D, f, c);
                    f = g.P();
                    qm(f, "annotation-shape");
                    qm(f, "annotation-speech-shape");
                    kg(f, o.left, o.top);
                    tg(f, o.width, o.height);
                    if (d.a && (f = Ga(f.childNodes, function(a) {
                            return a.tagName == "g"
                        })))(d = im(g, gm(d.a))) && f.setAttribute("filter", "url(#" + d + ")")
                }
            }
        };

        function tm(a, b) {
            var c = a.top - b.y,
                d = b.x - a.left - a.width,
                f = b.y - a.top - a.height,
                g = a.left - b.x,
                i = Math.max(c, d, f, g);
            if (0 > i) return Y.Mm;
            switch (i) {
                case c:
                    return Y.Nf;
                case d:
                    return Y.Mf;
                case f:
                    return Y.Kf;
                case g:
                    return Y.Lf
            }
            return Y.Mm
        }
        sm.prototype.k = function(a, b, c) {
            function d(a, b, c) {
                i = Math.min(Math.max(c - 2 * f, 0), g);
                m = Lb(a - i / 2, b + f, b + c - i - f)
            }
            var f = 4,
                g = this.i,
                i = 0,
                m = 0;
            c == Y.Nf || c == Y.Kf ? d(b.x, a.left, a.width) : (c == Y.Lf || c == Y.Mf) && d(b.y, a.top, a.height);
            return new am(m, m + i)
        };

        function um() {}
        z(um, sm);
        um.prototype.k = function(a, b, c) {
            function d(a, b, c) {
                i = Math.min(Math.max(c - 2 * f, 0), g);
                m = a <= b + c / 2 ? Math.max(b + c / 4 - i / 2, b + f) : Math.min(b + 3 * c / 4 - i / 2, b + c - i - f)
            }
            var f = 4,
                g = this.i,
                i = 0,
                m = 0;
            c == Y.Nf || c == Y.Kf ? d(b.x, a.left, a.width) : (c == Y.Lf || c == Y.Mf) && d(b.y, a.top, a.height);
            return new am(m, m + i)
        };

        function pm(a, b, c, d) {
            var f = new zl,
                g = c ? c.a / 2 + 1 : 0;
            Bl(f, b.left + 4 + g, b.top + g);
            f.a(b.left + b.width - 4 - g, b.top + g);
            Dl(f, 4, 4, -90, 90);
            f.a(b.left + b.width - g, b.top + b.height - 4 - g);
            Dl(f, 4, 4, 0, 90);
            f.a(b.left + 4 + g, b.top + b.height - g);
            Dl(f, 4, 4, 90, 90);
            f.a(b.left + g, b.top + 4 + g);
            Dl(f, 4, 4, 180, 90);
            Cl(f);
            Yl(a, f, c, d)
        }

        function qm(a, b) {
            var c = a.getAttribute("class"),
                c = c ? c.split(/\s+/) : []; - 1 == c.indexOf(b) && (c.push(b), a.setAttribute("class", c.join(" ")))
        }

        function nm(a, b) {
            return a ? Math.max(b, 0.9) : b
        }

        function om(a, b) {
            var c = new Nb(a.top, a.left + a.width, a.top + a.height, a.left),
                d = Ga(b, function(a) {
                    return "dropshadow" == a
                }) ? new Nb(0, 8, 8, 0) : new Nb(0, 0, 0, 0);
            ha(d) ? (c.top -= d.top, c.right += d.right, c.bottom += d.bottom, c.left -= d.left) : (c.top -= d, c.right += h, c.bottom += h, c.left -= NaN);
            return new Qb(c.left, c.top, c.right - c.left, c.bottom - c.top)
        };

        function vm(a, b, c) {
            this.a = a;
            this.e = 0;
            this.k = b;
            c && (this.u = c)
        }
        vm.prototype.u = 70;
        vm.prototype.b = l;
        vm.prototype.start = function(a) {
            this.C = y();
            this.e = a;
            this.n = this.C + this.e;
            this.b = j;
            var a = this.a,
                b = a.getAttribute("class"),
                b = b ? b.split(/\s+/) : [],
                c = b.indexOf("hid"); - 1 != c && (b.splice(c, 1), a.setAttribute("class", b.join(" ")));
            ne(this.i);
            this.i = me(w(this.z, this), this.u)
        };

        function wm(a) {
            a.b = l;
            qm(a.a, "hid");
            a.i && ne(a.i)
        }
        vm.prototype.z = function() {
            if (this.b) {
                var a = y(),
                    b;
                b = a >= this.n ? 0 : 1 - (a - this.C) / this.e;
                var c = M("countdowntimer-diminishing-pieslice", this.a),
                    d = parseInt(this.a.getAttribute("width"), 10),
                    f = new zl,
                    g = d / 2 - 5;
                Bl(f, d / 2, d / 2);
                f.a(d / 2, 5);
                Dl(f, g, g, -90, 360 * -b);
                f.a(d / 2, d / 2);
                Cl(f);
                c.setAttribute("d", Zl(f));
                a >= this.n && (wm(this), this.k && this.k())
            }
        };

        function xm() {
            var a = new bh;
            a && ah(a) && (this.e = new dh(a), this.a = new dh(a), this.b = new dh(a))
        }
        xm.prototype.b = k;
        xm.prototype.a = k;
        xm.prototype.e = k;
        xm.prototype.getVolume = function() {
            var a = {
                volume: 100,
                muted: l,
                nonNormalized: 100
            };
            if (this.b) {
                var b = {};
                try {
                    b = this.b.get("yt-player-volume") || {}
                } catch (c) {
                    this.b.a.yc("yt-player-volume")
                }
                a.volume = isNaN(b.volume) ? 100 : Lb(b.volume, 0, 100);
                a.nonNormalized = isNaN(b.nonNormalized) ? a.volume : b.nonNormalized;
                a.muted = b.muted == h ? l : b.muted
            }
            return a
        };
        var $ = r("yt.timing") || {};
        oa("yt.timing", $);
        $.Tu = 0;
        $.Su = 0;
        $.Ob = function(a, b) {
            var c = $.timer || {};
            c[a] = b ? b : y();
            $.timer = c
        };
        $.info = function(a, b) {
            var c = $.info_args || {};
            c[a] = b;
            $.info_args = c
        };
        $.ef = function() {
            var a = je("TIMING_ACTION"),
                b = $.timer || {},
                c = $.info_args || {},
                d = b.start,
                f = "",
                g = [],
                i = [];
            delete b.start;
            $.srt && (f = "&srt=" + $.srt);
            b.aft && b.plev && (b.aft = Math.min(b.aft, b.plev));
            for (var m in b) g.push(m + "." + Math.round(b[m] - d));
            for (m in c) i.push(m + "=" + c[m]);
            b.vr && b.gv && g.push("vl." + Math.round(b.vr - b.gv));
            !b.aft && b.vr && b.cl ? b.cl > b.vr ? g.push("aft." + Math.round(b.cl - d)) : g.push("aft." + Math.round(b.vr - d)) : !b.aft && b.vr ? g.push("aft." + Math.round(b.vr - d)) : b.aft || g.push("aft." + Math.round(b.ol - d));
            ye(["https:" ==
                window.location.protocol ? "https://web.archive.org/web/20120622093201/https://gg.google.com/csi" : "https://web.archive.org/web/20120622093201/http://csi.gstatic.com/csi", "?v=2&s=youtube&action=", a, f, "&", i.join("&"), "&rt=", g.join(",")
            ].join(""))
        };
        $.Zq = function() {
            var a = je("TIMING_ACTION"),
                b = $.timer || {};
            a && b.start && ($.wff && -1 != a.indexOf("ajax") && b.vr && b.cl ? $.ef() : $.wff && -1 == a.indexOf("ajax") && b.vr ? $.ef() : !$.wff && (b.ol || b.aft) && $.ef())
        };
        $.Ru = function() {
            $.Ob("ol");
            $.Zq()
        };

        function ym(a, b) {
            b || (b = {});
            var c = window,
                d = "undefined" != typeof a.href ? a.href : "" + a,
                f = b.target || a.target,
                g = [],
                i;
            for (i in b) switch (i) {
                case "width":
                case "height":
                case "top":
                case "left":
                    g.push(i + "=" + b[i]);
                    break;
                case "target":
                case "noreferrer":
                    break;
                default:
                    g.push(i + "=" + (b[i] ? 1 : 0))
            }
            g = g.join(",");
            if (b.noreferrer) {
                if (c = c.open("", f, g)) C && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), c.opener = k, vb ? c.location.href = d : (d = ta(d), c.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'), c.document.close())
            } else c =
                c.open(d, f, g);
            return c
        };
        var zm = r("yt.prefs.UserPrefs.prefs_") || {};
        oa("yt.prefs.UserPrefs.prefs_", zm);
        var Am = r("yt.pubsub.instance_") || new I;
        I.prototype.subscribe = I.prototype.o;
        I.prototype.unsubscribeByKey = I.prototype.cg;
        I.prototype.publish = I.prototype.j;
        I.prototype.clear = I.prototype.clear;
        oa("yt.pubsub.instance_", Am);

        function Bm(a, b) {
            var c = r("yt.pubsub.instance_");
            c && c.publish.apply(c, arguments)
        };
        C || ub && E("1.9.3");
        new I;
        document.createElement("input");
        var Cm = RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
        new I;
        var Dm = {
            "plus.google.com": k,
            "oz-dev.plus.corp.google.com": k,
            "www.kickstarter.com": "/projects/",
            "www.causes.com": k,
            "www.donorschoose.org": k,
            "www.indiegogo.com": k,
            "www.rockethub.com": k
        };

        function Em(a) {
            if (!a) return l;
            var a = a.replace(/https?:\/\//g, ""),
                b = a.split("/", 1);
            if (!b || 1 > b.length || !b[0]) return l;
            b = b[0].toLowerCase().split(".").reverse();
            return 2 > b.length ? l : ("com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[1]) && -1 == a.indexOf("/redirect?")
        }

        function Fm(a) {
            if (!a) return l;
            var b = vc(a),
                a = b[3],
                b = b[5];
            if (!a || !b) return l;
            a = a.toLowerCase();
            return a in Dm ? (a = Dm[a]) ? 0 == b.indexOf(a) : j : l
        }

        function Gm(a, b) {
            if ("new" == a.target) return -1;
            var c = a.value ? a.value : k;
            if (!c) return -1;
            var c = c.replace(/https?:\/\//g, ""),
                d;
            if (!(d = !Em(c))) d = (d = vc(c)[5] || k) && decodeURIComponent(d) || "", d = d.split("/"), d = "/" + (1 < d.length ? d[1] : ""), d = "/watch" != d;
            if (d) return -1;
            d = ae(c);
            if (!d || d.v != b.B || d.list || d.p) return -1;
            c = c.split("#", 2);
            if (!c || 2 > c.length) return -1;
            (c = $d(c[1])) && c.t ? (d = c.t, c = 0, -1 != d.indexOf("h") && (d = d.split("h"), c = 3600 * d[0], d = d[1]), -1 != d.indexOf("m") && (d = d.split("m"), c = 60 * d[0] + c, d = d[1]), -1 != d.indexOf("s")) ?
                (d = d.split("s"), c = 1 * d[0] + c) : c = 1 * d + c : c = -1;
            return c
        };

        function Hm(a) {
            this.b = a;
            this.a = {}
        }

        function Im(a, b) {
            var c = {};
            c["iv-event"] = b;
            c["a-id"] = a.id;
            c["a-type"] = Jm(a);
            var d = wl(a);
            d && (c["l-type"] = d.type, c.link = escape(d.value ? d.value : k));
            return c
        }

        function Jm(a) {
            switch (a.type) {
                case "text":
                    switch (a.style) {
                        case "popup":
                        case "donation":
                            return 1;
                        case "speech":
                            return 2;
                        case "title":
                            return 4;
                        default:
                            return 0
                    }
                case "highlight":
                    return 3;
                case "thumbnail":
                    return 5;
                default:
                    return 0
            }
        }

        function Km(a, b) {
            a.b.j("command_log", "iv", b)
        };

        function Lm(a, b, c, d) {
            this.H = a;
            this.e = b;
            this.Yb = c;
            this.Ge = d;
            this.b = new Jd;
            this.tf = this.Z = this.M = k
        }
        n = Lm.prototype;
        n.H = k;
        n.M = k;
        n.qb = k;
        n.La = k;
        n.Yb = k;
        n.Ge = k;
        n.Z = k;
        n.tf = k;
        n.Nn = function(a) {
            this.Ge.j("closed", this.H);
            a.stopPropagation()
        };
        n.Mn = function(a) {
            this.Ge.j("click", this.H);
            a.stopPropagation()
        };
        n.Pn = function() {
            this.La && V(this.La);
            this.qb && xg(this.qb, 1);
            if (this.Z) {
                this.Z.b = j;
                xg(this.M, Mm(this) ? 1 : 0);
                var a = this.Yb.wc;
                a && this.Z.e(this.H, a)
            }
            this.Ge.j("mouseover", this.H)
        };
        n.On = function() {
            this.La && W(this.La);
            this.qb && (this.qb.style.opacity = 0.6);
            if (this.Z) {
                this.Z.b = l;
                xg(this.M, Mm(this) ? 1 : 0);
                var a = this.Yb.wc;
                a && this.Z.e(this.H, a)
            }
            this.Ge.j("mouseout", this.H)
        };

        function Nm(a) {
            if (a.M || a.Z) {
                var b;
                if (a.tf) {
                    b = yl(a.tf);
                    var c = yl(a.H);
                    !b || !c ? b = k : (c.top += b.top, c.left += b.left, b = c)
                } else b = yl(a.H);
                if (c = b) {
                    b = a.Yb.wc;
                    if (a.M && b) {
                        c = jm(b, c);
                        tg(a.M, c.width, c.height);
                        kg(a.M, c.left, c.top);
                        var d = Gh(a.Yb);
                        if (d) {
                            var f;
                            f = a.H.b;
                            f = f.padding ? f.padding : new Nb("speech" == a.H.style ? 1.6 : 0.8, "speech" == a.H.style ? 1.6 : 0.8, "speech" == a.H.style ? 1.6 : 0.8, "speech" == a.H.style ? 1.6 : 0.8);
                            d = new Nb(f.top * d.height / 100, f.right * d.width / 100, f.bottom * d.height / 100, f.left * d.width / 100);
                            a.qb && (d.right += 1.5 * b.height /
                                100);
                            a.M.style.padding = d.top + "px " + d.right + "px " + d.bottom + "px " + d.left + "px"
                        }
                        "label" == a.H.style && a.a && (a.a.style.padding = a.M.style.padding);
                        a.qb && (d = 4.2 * b.height / 100, d = new G(d, d), tg(a.qb, d), "highlight" == a.H.type || "label" == a.H.style ? (f = 1.5 * b.height / 100, d = new F(c.width - d.width - f, c.height - d.height - f)) : d = new F(c.width - d.width - 3 * b.height / 100, (c.height - d.height) / 2), kg(a.qb, d));
                        if (a.La) {
                            var g = 6 * b.height / 100;
                            tg(a.La, new G(g, g));
                            d = a.La;
                            f = vg(a.La);
                            var g = g / 2,
                                i = b.left + b.width - (c.left + c.width) >= g,
                                m = c.top - b.top >=
                                g;
                            kg(d, i && m ? new F(c.width - g, -g) : i ? new F(c.width - g, c.height > 3 * g + f.height ? g : c.height - g) : m ? new F(c.width > 3 * g + f.width ? c.width - g - f.width : -g, -g) : c.width / b.width > c.height / b.height ? new F(c.width > 3 * g + f.width ? c.width - g - f.width : -g, c.height - g) : new F(-g, c.height > 3 * g + f.height ? g : c.height - g))
                        }
                    }
                    a.Z && b && a.Z.e(a.H, b);
                    b = a.M;
                    c = a.H.b || new ml;
                    d = a.Yb.wc;
                    b.style.color = "highlightText" == a.H.style ? c.Zh : c.re;
                    b.style.fontSize = d.height * c.$h / 100 + "px";
                    if ("title" == a.H.style || "highlightText" == a.H.style) b.style.textAlign = "center";
                    c.Df &&
                        (b.style.fontWeight = c.Df);
                    if (a.M)
                        for (b = 10; a.M.scrollHeight > a.M.offsetHeight && b;) {
                            c = Ig(a.M);
                            if (5 > c) break;
                            c--;
                            a.M.style.fontSize = c + "px";
                            b--
                        }
                }
            }
        }
        n.Ma = function() {
            W(this.M);
            this.Z && W(this.Z.P())
        };

        function Mm(a) {
            return "label" != a.H.style || a.Z.b
        };

        function Om(a) {
            fh.call(this, a);
            this.L = a.getEnvironmentData();
            this.b = {};
            this.e = {};
            this.C = {};
            this.u = {};
            this.i = {};
            this.k = new Hm(this.pubsub);
            var b = a.getRootNode(),
                a = Pm;
            this.V = M(a.up, b);
            O(this.V, "click", w(this.zp, this));
            this.pubsub.o("onResize", w(this.Ap, this));
            this.pubsub.o("onStateChange", w(this.Dp, this));
            this.pubsub.o("mouseover", w(this.Cp, this));
            this.pubsub.o("mouseout", w(this.Bp, this));
            this.pubsub.o("click", w(this.xp, this));
            this.pubsub.o("closed", w(this.yp, this));
            b = M(a.vp, b);
            a = M(a.wp, b);
            this.appendToVideoContent(a);
            this.z = new vm(a, w(this.Vh, this))
        }
        z(Om, fh);
        var Pm = {
            up: "html5-annotations-button",
            vp: "video-annotations",
            wp: "countdowntimer"
        };
        n = Om.prototype;
        n.U = "iv";
        n.Ih = l;
        n.kk = j;
        n.ga = l;
        n.Xa = l;

        function Qm(a) {
            return !yd("video-annotations", a.getRootNode()) || !Rm(a) ? k : new Om(a)
        }

        function Rm(a) {
            return "leanback" == a.getEnvironmentData().eventLabel ? l : ag(a.getVideoData(), "iv3_module")
        }
        n.eb = function() {
            return Rm(this.a)
        };
        n.create = function() {
            Om.s.create.call(this);
            this.g = this.a.getVideoData();
            1 == this.g.ra && this.load()
        };
        n.destroy = function() {
            this.$();
            Om.s.destroy.call(this)
        };
        n.zp = function() {
            this.ga || this.Xa ? this.$() : this.load()
        };
        n.Ap = function() {
            for (var a in this.C) Nm(this.C[a])
        };
        n.Dp = function(a) {
            this.kk = R(a.a, 16);
            0 > Nk(a, 8) && wm(this.z)
        };
        n.load = function() {
            Om.s.load.call(this);
            var a = {
                format: "XML",
                method: "GET",
                ug: {
                    video_id: this.g.B
                },
                Le: w(this.fq, this)
            };
            this.Xa = j;
            se(this.L.gb + "annotations_iv/read2", a)
        };
        n.$ = function() {
            Km(this.k, {
                "iv-event": 1
            });
            this.Vh();
            gh(this);
            for (var a in this.b) delete this.b[a];
            for (a in this.e) {
                var b = this.e[a];
                Ld(b.b);
                b.M && N(b.M);
                b.Z && b.Z.P() && N(b.Z.P());
                delete this.e[a]
            }
            this.ga = this.Xa = l;
            this.u = {};
            this.i = {};
            this.e = {};
            this.b = {};
            Om.s.$.call(this)
        };

        function Sm(a, b) {
            for (var c = {}, d = 0; d < b.attributes.length; d++) {
                var f = b.attributes[d];
                c[f.name] = f.nodeValue
            }
            for (d = 0; d < b.childNodes.length; d++)
                if (f = b.childNodes[d], f.tagName) {
                    var g;
                    c[f.tagName] ? g = c[f.tagName] : (g = [], c[f.tagName] = g);
                    f && "TEXT" == f.tagName ? 1 == f.childNodes.length && 3 == f.childNodes[0].nodeType ? g.push(f.childNodes[0].nodeValue) : g.push("") : f && g.push(Sm(a, f))
                }
            return c
        }
        n.fq = function(a) {
            if (this.Xa && !this.ga) {
                this.Xa = l;
                var b = a.responseXML ? a.responseXML.getElementsByTagName("annotations") : k;
                if (qe(a) && b) {
                    a = b[0].getElementsByTagName("annotation");
                    for (b = 0; b < a.length; b++) {
                        var c = Sm(this, a[b]),
                            d = new tl;
                        try {
                            d.Na(c)
                        } catch (f) {
                            continue
                        }
                        this.b[d.id] = d
                    }
                    for (var g in this.b) {
                        a = this.b[g];
                        b = a;
                        c = h;
                        b: if ("highlight" == b.type) c = j;
                            else {
                                if ("text" == b.type)
                                    for (c in c = h, ul)
                                        if (b.style == ul[c]) {
                                            c = j;
                                            break b
                                        }
                                c = l
                            }
                        c ? (c = new Lm(b, w(this.appendToVideoContent, this), this.L, this.pubsub), b = this.e[b.id] =
                            c) : b = k;
                        if (b && a.a && a.a.b) {
                            c = a.a.b;
                            if (d = this.b[c]) b.tf = d;
                            this.i[c] = a.id
                        }
                    }
                    J(this.a.getRootNode(), this.U + "-loaded");
                    this.ga = j;
                    g = [];
                    for (var i in this.b) a = this.b[i], a.a && (a.a && sl(a.a)) && (b = sl(a.a), a = 1E3 * b.start, b = 1E3 * b.end, 0 == a && (a++, b++), a == b && b++, a = new Me(a, b, {
                        id: i
                    }), g.push(a));
                    this.ad.apply(this, g)
                }
            }
        };
        n.ob = function(a) {
            Om.s.ob.call(this, a);
            a = a.getId();
            if (!this.u[a]) {
                var b = this.b[a];
                if ("pause" == b.type) {
                    if (this.kk && (a = b.e ? (a = b.e.filter(function(a) {
                            return "pause" == a.type
                        })) ? a[0] : k : k, a && a.sf && a.sf.value)) this.Ih = j, this.pubsub.j("command_pause"), this.z.start(1E3 * a.sf.value)
                } else Tm(this, a), b = this.k, a = this.b[a], !b.a[a.id] && wl(a) && (b.a[a.id] = j, Km(b, Im(a, 2)))
            }
        };
        n.rb = function(a) {
            Om.s.rb.call(this, a);
            Um(this, a.getId())
        };

        function Um(a, b) {
            var c = a.e[b];
            if (c) {
                var d = a.i[b];
                d && Um(a, d);
                c.Ma();
                delete a.C[b]
            }
        }

        function Tm(a, b) {
            var c = a.e[b];
            if (c) {
                if (c.Yb.wc) {
                    var d = c.H.b;
                    if (!(d && 0 == d.nd || "title" == c.H.style || "highlightText" == c.H.style || "pause" == c.H.type) && !c.Z)
                        if (d = c.Yb.wc) {
                            var f = k;
                            "highlight" == c.H.type || "label" == c.H.style ? f = new rm : "popup" == c.H.style ? f = new mm : "anchored" == c.H.style ? f = new sm : "speech" == c.H.style && (f = new um);
                            f && (f.e(c.H, d), c.Z = f, d = f.P(), W(d), c.e(d))
                        }
                    if (!c.M) {
                        c.M = gd("div", ["annotation", "hid"]);
                        c.H.i && ("label" == c.H.style ? (d = c.H.b || new ml, c.a = gd("div", ["label-text"]), c.a.style.backgroundColor = d.od,
                            ld(c.a, c.H.i), c.M.appendChild(c.a)) : ld(c.M, c.H.i));
                        pd(c.M, "annotation_id", c.H.id);
                        c.e(c.M);
                        c.b.N(c.M, "mouseover", w(c.Pn, c));
                        c.b.N(c.M, "mouseout", w(c.On, c));
                        c.b.N(c.M, "click", w(c.Mn, c));
                        if (xl(c.H)) {
                            if (d = wl(c.H)) c.M.title = d.value ? d.value : k;
                            c.qb = gd("span", "annotation-link-icon");
                            c.M.appendChild(c.qb)
                        }
                        d = M("annotation-close-button-container", h);
                        d = wd(L(d));
                        d.removeAttribute("id");
                        c.La = d;
                        pd(c.La, "annotation_id", c.H.id);
                        c.b.N(c.La, "click", w(c.Nn, c));
                        c.M.appendChild(c.La)
                    }
                    V(c.M);
                    xg(c.M, Mm(c) ? 1 : 0);
                    Nm(c);
                    c.Z &&
                        V(c.Z.P())
                }
                a.C[b] = c
            }
        }
        n.xp = function(a) {
            if (a && a.id) {
                var b = this.k;
                wl(a) && Km(b, Im(a, 3));
                if (b = wl(a)) {
                    var c = Gm(b, this.g);
                    if (-1 != c) this.pubsub.j("command_seek", c), this.Vh();
                    else {
                        var c = this.g,
                            d = b.value ? b.value : k;
                        d ? Em(d) ? (c = d.split("#", 2), a = de(c[0], {
                            feature: "iv",
                            annotation_id: a.id
                        }) + (c[1] ? "#" + c[1] : "")) : a = c.ji || Fm(d) ? d : k : a = k;
                        a && window.open(a, !this.g.ki ? "_top" : "embedded" == this.L.eventLabel ? "_blank" : b.target ? "new" == b.target ? "_blank" : "_top" : Em(b.value ? b.value : k) ? "_top" : "_blank")
                    }
                }
            }
        };
        n.Cp = function(a) {
            (a = this.i[a.id]) && Tm(this, a)
        };
        n.Bp = function(a) {
            (a = this.i[a.id]) && Um(this, a)
        };
        n.yp = function(a) {
            if (a || a.id) this.u[a.id] = j, Um(this, a.id), a && Km(this.k, Im(a, 4))
        };
        n.Vh = function() {
            wm(this.z);
            this.Ih && (this.Ih = l, this.pubsub.j("command_play"))
        };
        var Vm = ["left", "right", "center"],
            Wm = {
                id: 0,
                He: 0,
                Hf: 7,
                If: 50,
                ir: 80,
                Jf: 95,
                cc: 15,
                gi: 100,
                isVisible: j,
                textAlign: Vm[2],
                Cc: 0,
                backgroundColor: "#080808",
                Bf: "#fff",
                opacity: 0.8
            },
            Xm = {
                id: 99,
                He: 1,
                Hf: 0,
                If: 5,
                Jf: 7,
                cc: 2,
                gi: 32,
                textAlign: Vm[0]
            };

        function Ym(a) {
            a = a || Wm;
            x(this, a)
        }
        n = Ym.prototype;
        n.Hf = 7;
        n.If = 50;
        n.Jf = 95;
        n.ir = 80;
        n.Cc = 0;
        n.textAlign = "center";
        n.backgroundColor = "#080808";
        n.Bf = "#fff";
        n.opacity = 0.8;
        n.cc = 15;
        n.gi = 32;
        n.isVisible = j;
        n.fontFamily = '"Arial Unicode Ms", Arial';
        n.Nq = "100%";

        function Zm(a, b) {
            this.id = a;
            this.S = new Ym(b);
            var c = "caption-window";
            0 == this.id && (c = "standard-caption-window");
            this.Q = gd("div", {
                id: "caption-window-" + this.id,
                "class": c
            });
            this.Qd = gd("span", {
                "class": "captions-text",
                style: "visibility: hidden"
            });
            this.Qd.innerHTML = "C";
            this.R = gd("span", {
                "class": "captions-text",
                tabindex: "4",
                "aria-live": "assertive"
            });
            c = gd("div", {
                "class": "caption-window-transform"
            });
            c.appendChild(this.R);
            this.Q.appendChild(c)
        }
        n = Zm.prototype;
        n.id = 0;
        n.S = k;
        n.Ce = "";
        n.fb = k;
        n.Q = k;
        n.R = k;
        n.Qd = k;
        n.type = 1;
        n.getType = function() {
            return this.type
        };
        n.ej = function() {
            var a;
            this.Qd.style.fontFamily = this.R.style.fontFamily;
            this.Q.appendChild(this.Qd);
            a = this.Qd.offsetHeight;
            this.Q.removeChild(this.Qd);
            return a
        };
        n.Cg = function() {
            this.R && (0 != this.id && (ug(this.Q, "100%"), ug(this.Q, this.R.offsetWidth)), $m(this), Rh(this.Q, this.S.isVisible))
        };

        function $m(a) {
            kg(a.Q, a.S.If + "%", a.S.Jf + "%");
            for (var b = 0; 8 >= b; b++) K(a.Q, "anchor-point-" + b);
            J(a.Q, "anchor-point-" + a.S.Hf)
        }
        n.pl = function(a) {
            var b = [];
            a.forEach(function(a) {
                a.zg ? b[b.length - 1] += a.dc() : b.push(a.dc())
            }, this);
            this.Bc(b.join("\n"));
            this.fb = a
        };
        n.Bc = function(a) {
            this.Ce = a = an(a);
            this.R.innerHTML = this.Ce;
            this.hj();
            this.Cg()
        };
        n.hj = function() {
            this.Q.style.textAlign = this.S.textAlign;
            this.R.style.backgroundColor = this.S.backgroundColor;
            this.R.style.color = this.S.Bf;
            this.R.style.opacity = this.S.opacity;
            this.R.style.fontFamily = this.S.fontFamily;
            this.R.style.fontSize = this.S.Nq;
            1 == this.S.Cc ? this.R.setAttribute("dir", "rtl") : this.R.removeAttribute("dir")
        };
        n.toString = function() {
            var a = "Caption window (" + this.id + "): " + this.Ce,
                b;
            for (b in this.S) a += b + " " + this.S[b] + " | ";
            return a
        };

        function an(a) {
            for (var a = a.split("\n"), b = 0, c = a.length; b < c; b++) a[b] = a[b] ? "&nbsp;" + a[b] + "&nbsp;" : "";
            return a.join("<br>")
        }
        n.Eg = function() {
            this.fb = [];
            this.Bc("")
        };

        function bn(a, b) {
            Zm.call(this, a, b);
            this.R.style.display = "block";
            this.R.style.padding = "0";
            this.Ra = []
        }
        z(bn, Zm);
        n = bn.prototype;
        n.type = 0;
        n.ql = "";
        n.Ec = l;
        n.ic = k;
        n.Ra = k;
        n.ej = function() {
            return this.Ra[0] ? this.Ra[0].offsetHeight : 0
        };
        n.Cg = function() {
            0 != this.id && (this.Ec = j, ug(this.Q, "100%"), ug(this.Q, this.Ec ? this.Ra.reduce(function(a, b) {
                return Math.max(a, b.offsetWidth)
            }, 0) : this.ic.width), this.Ec = l);
            var a = Math.round(this.S.cc * this.ej()),
                b = this.Q;
            u("max-height") ? hg(b, a + "px", "max-height") : Va("max-height", na(hg, b));
            $m(this);
            Rh(this.Q, this.S.isVisible)
        };
        n.Bc = function(a) {
            this.Eg();
            a = an(a);
            this.Ec || (this.Ce = a);
            for (var a = a.split("<br>"), b = 0, c = a.length; b < c; b++)
                if (a[b]) {
                    var d = gd("div", {
                            "class": "caption-row-holder"
                        }),
                        f = gd("span", {
                            "class": "caption-row captions-text"
                        });
                    d.appendChild(f);
                    f.innerHTML = a[b];
                    this.Ec || (f.style.left = this.ic.nl[b]);
                    this.R.appendChild(d);
                    this.Ra.push(f)
                }
            this.hj();
            this.Cg()
        };
        n.Eg = function() {
            for (var a = 0, b = this.Ra.length; a < b; a++) {
                var c = md(this.Ra[a], "caption-row-holder");
                N(c)
            }
            this.Ra = []
        };
        n.hj = function() {
            this.Q.style.textAlign = this.S.textAlign;
            for (var a = 0, b = this.Ra.length; a < b; a++) this.Ra[a].style.backgroundColor = this.S.backgroundColor;
            this.R.style.color = this.S.Bf;
            this.R.style.opacity = this.S.opacity;
            this.R.style.fontFamily = this.S.fontFamily;
            1 == this.S.Cc ? this.R.setAttribute("dir", "rtl") : this.R.removeAttribute("dir")
        };

        function cn(a, b) {
            Zm.call(this, a, b);
            this.fb = [];
            this.nc = [];
            this.va = [];
            this.Md = new pc(433);
            sc(this.Md);
            O(this.Md, "tick", w(this.Tq, this))
        }
        z(cn, Zm);
        n = cn.prototype;
        n.type = 2;
        n.va = k;
        n.oc = 0;
        n.nc = k;
        n.Md = k;
        n.pl = function(a) {
            var b = a.length;
            if (0 >= b) this.Eg();
            else {
                for (var c = 0; c < b && 0 <= this.fb.indexOf(a[c]);) c++;
                this.fb = this.fb.concat(a.slice(c));
                dn(this)
            }
        };
        n.Eg = function() {
            this.fb = [];
            this.va = [];
            this.oc = 0;
            this.va = [];
            this.nc = [];
            en(this)
        };

        function dn(a) {
            if (!fn(a))
                if (a.oc >= a.fb.length) en(a);
                else {
                    var b = a.va.length - 1;
                    0 > b && (a.nc.push(0), a.oc = 0, a.va.push(""), b = 0);
                    for (var c = a.fb.length, d = a.oc; d < c; d++) {
                        var f = a.fb[d];
                        if ("\n" == f.dc()) {
                            a.oc++;
                            a.nc[b]++;
                            break
                        }
                        if (f.zg || 0 == a.va[b].length) a.va[b] += f.dc(), a.oc++, a.nc[b]++;
                        else break
                    }
                    en(a);
                    d < c && !fn(a) && (b = a.ej(), J(a.R, "caption-rollup"), a.Q.style.overflow = "hidden", a.R.style.top = -b + "px", a.Md.start())
                }
        }

        function fn(a) {
            return a.Md.e || Wc(a.R, "caption-rollup")
        }
        n.Tq = function() {
            this.Q.style.overflow = "visible";
            this.R.style.top = 0;
            sc(this.Md);
            K(this.R, "caption-rollup");
            this.va.push("");
            this.nc.push(0);
            dn(this)
        };

        function en(a) {
            if (!fn(a)) {
                for (; a.va.length < a.S.cc;) a.va.unshift(""), a.nc.unshift(0);
                for (; a.va.length > a.S.cc;) {
                    a.va.shift();
                    var b = a.nc.shift();
                    0 < b && (a.oc -= b, a.fb.splice(0, b))
                }
                a.Bc(a.va.join("\n"))
            }
        };

        function gn(a) {
            this.Hg = a.ci;
            this.Jm = a.He;
            this.ab = a.ab || this.ab
        }
        n = gn.prototype;
        n.Hg = 0;
        n.Jm = 0;
        n.ab = 0;
        n.Ka = function() {
            return this.Hg
        };
        n.Fc = function() {
            return this.Jm
        };
        n.toString = function() {
            return this.Hg + ", " + this.ab
        };

        function hn(a) {
            gn.call(this, a);
            this.Gg = a.text || this.Gg;
            this.Af = a.bi || this.Af;
            this.zg = a.params.append || this.zg;
            this.Lm = a.params.row || this.Lm;
            this.Km = a.params.Qq || this.Km
        }
        z(hn, gn);
        n = hn.prototype;
        n.Gg = "";
        n.zg = l;
        n.Lm = 0;
        n.Km = 0;
        n.Af = 0;
        n.dc = function() {
            return this.Gg
        };
        n.toString = function() {
            return this.Hg + ", " + this.ab + ": " + this.Gg
        };

        function jn(a) {
            var b = a.firstChild && a.firstChild.nodeValue || "",
                c = 1E3 * parseFloat(a.getAttribute("start") || 0);
            a.getAttribute("t") && (c = parseInt(a.getAttribute("t"), 10));
            var d = 1E3 * parseFloat(a.getAttribute("dur") || 0);
            a.getAttribute("d") && (d = parseFloat(a.getAttribute("d")));
            var f = parseInt(a.getAttribute("w"), 10) || 0,
                b = {
                    ci: c,
                    ab: d,
                    text: b,
                    bi: f,
                    He: 5,
                    params: {}
                };
            a.getAttribute("r") && (b.params.row = parseInt(a.getAttribute("r"), 10));
            a.getAttribute("c") && (b.params.Qq = parseInt(a.getAttribute("c"), 10));
            a.getAttribute("append") &&
                (b.He = 6, b.params.append = j);
            return new hn(b)
        }

        function kn(a) {
            gn.call(this, a);
            this.id = a.bi || this.id;
            this.params = a.params
        }
        z(kn, gn);
        kn.prototype.id = 0;
        kn.prototype.params = k;
        kn.prototype.b = "";
        kn.prototype.a = l;

        function ln() {
            return new kn({
                ci: -2147483648,
                ab: 4294967295,
                params: Wm
            })
        };

        function mn(a) {
            this.b = [];
            this.e = [];
            this.a = {};
            if (a && (a = Aj(a)) && a.firstChild) switch (this.hc = a, this.hc.firstChild.tagName) {
                case "timedtext":
                    for (var a = this.hc.firstChild.childNodes, b = 0, c = a.length; b < c; b++) switch (a[b].tagName) {
                        case "window":
                            var d = a[b],
                                f = parseInt(d.getAttribute("id"), 10),
                                g = h;
                            a: {
                                var i = this.a[f];
                                if (!d.getAttribute("t") && !d.getAttribute("start")) g = k;
                                else {
                                    g = parseInt(d.getAttribute("t"), 10);
                                    d.getAttribute("start") && (g = 1E3 * parseFloat(d.getAttribute("start")));
                                    i && (i.Ka() + i.ab >= g ? i.ab = g : i = k);
                                    switch (d.getAttribute("op")) {
                                        case "kill":
                                            g =
                                                k;
                                            break a;
                                        case "define":
                                            i = k
                                    }
                                    i ? i.e = j : i = ln();
                                    var m = {};
                                    x(m, i ? i.params : Wm);
                                    d.getAttribute("id") && (m.id = d.getAttribute("id"));
                                    d.getAttribute("op") && (m.kr = d.getAttribute("op"));
                                    d.getAttribute("rc") && (m.cc = parseInt(d.getAttribute("rc"), 10));
                                    d.getAttribute("cc") && (m.gi = parseInt(d.getAttribute("cc"), 10));
                                    d.getAttribute("ap") && (i = parseInt(d.getAttribute("ap"), 10), m.Hf = 0 > i || 8 < i ? 7 : i);
                                    d.getAttribute("ah") && (m.If = parseInt(d.getAttribute("ah"), 10));
                                    d.getAttribute("av") && (m.Jf = parseInt(d.getAttribute("av"), 10));
                                    d.getAttribute("id") && (m.id = parseInt(d.getAttribute("id"), 10) || 0);
                                    d.getAttribute("vs") && (m.isVisible = Boolean(d.getAttribute("vs")));
                                    d.getAttribute("ju") && (m.textAlign = Vm[parseInt(d.getAttribute("ju"), 10)]);
                                    d.getAttribute("pd") && (m.Cc = 1, 0 == parseInt(d.getAttribute("pd"), 10) && (m.Cc = 0));
                                    d.getAttribute("bc") && (m.backgroundColor = parseInt(d.getAttribute("bc"), 16));
                                    d.getAttribute("bo") && (m.opacity = parseInt(d.getAttribute("bo"), 10) / 100);
                                    d.getAttribute("fc") && (m.Bf = parseInt(d.getAttribute("fc"), 16));
                                    d.getAttribute("sd") &&
                                        (m.Wh = parseInt(d.getAttribute("sd"), 10));
                                    i = parseInt(d.getAttribute("d"), 10) || 1E3 * parseFloat(d.getAttribute("dur")) || 2147483647;
                                    d = {
                                        ci: g,
                                        ab: i,
                                        params: m,
                                        bi: parseInt(d.getAttribute("id"), 10)
                                    };
                                    g = new kn(d)
                                }
                            }
                            this.a[f] = g;
                            this.e.push(g);
                            break;
                        case "text":
                            f = jn(a[b]), this.b.push(f), d = f.Af, this.a[d] && (d = this.a[d], f = f.dc(), "" != d.b && (d.a = j), d.b += f)
                    }
                    break;
                default:
                    this.e.push(ln());
                    a = this.hc.firstChild.childNodes;
                    b = 0;
                    for (c = a.length; b < c; b++) f = jn(a[b]), this.b.push(f)
            }
        }
        mn.prototype.b = k;
        mn.prototype.e = k;
        mn.prototype.a = k;

        function nn(a) {
            a = a || {};
            this.Uh = a.format;
            this.b = a.languageCode || "";
            this.ue = a.languageName;
            this.ua = a.kind;
            this.ac = a.name;
            this.Pk = a.id;
            this.Mh = a.is_servable;
            this.xf = a.is_default;
            this.yf = a.is_translateable;
            a.translationLanguage && (this.a = new on(a.translationLanguage))
        }
        n = nn.prototype;
        n.ue = k;
        n.ua = k;
        n.ac = k;
        n.Pk = k;
        n.Mh = l;
        n.xf = l;
        n.yf = l;
        n.Uh = 1;
        n.getName = function() {
            return this.ac
        };

        function pn(a) {
            var b = [a.ue];
            if (a.ua) {
                var c = "asr" == a.ua ? oe("HTML5_SUBS_TRANSCRIBED") : a.ua;
                b.push(" (", c, ")")
            }
            a.ac && b.push(" - ", a.ac);
            a.a && b.push(" >> ", a.a.wf);
            return b.join("")
        }
        n.toString = function() {
            var a = [this.b, ": ", this.ac, " (", this.ua, ")"];
            this.a && a.push(" >> ", this.a.Eb);
            return a.join("")
        };
        n.equals = function(a) {
            if (!a) return l;
            var b = this.a,
                c = a.a;
            if (b && c) {
                if (b.Eb != c.Eb) return l
            } else if (b || c) return l;
            return this.b == a.b && this.getName() == a.getName() && this.ua == a.ua
        };

        function on(a) {
            this.Eb = a.languageCode;
            this.wf = a.languageName;
            this.Nh = a.languageOriginal;
            this.id = a.id;
            this.Qk = a.is_default
        }
        n = on.prototype;
        n.Eb = k;
        n.wf = k;
        n.Nh = k;
        n.id = k;
        n.Qk = l;

        function qn(a) {
            this.Me = [];
            this.Xf = [];
            this.mc = [];
            a && (a && a.firstChild) && (this.hc = a, rn(this), sn(this))
        }
        n = qn.prototype;
        n.hc = k;
        n.Me = k;
        n.Xf = k;
        n.mc = k;
        n.Ag = -1;

        function tn(a, b) {
            switch (b.ua) {
                case "asr":
                    Ga(a.Me, w(b.equals, b)) || a.mc.push(b);
                    break;
                default:
                    if (b.xf || 0 > a.Ag) a.Ag = a.mc.length;
                    Ga(a.mc, w(b.equals, b)) || a.mc.push(b)
            }
        }

        function rn(a) {
            for (var b = a.hc.getElementsByTagName("track"), c = b.length, d = 0; d < c; d++) {
                var f = parseInt(b[d].getAttribute("formats"), 10) || 1,
                    g = b[d].getAttribute("lang_code"),
                    i = b[d].getAttribute("lang_translated"),
                    m = b[d].getAttribute("name"),
                    o = b[d].getAttribute("kind") || "",
                    q = b[d].getAttribute("id"),
                    v = "true" == b[d].getAttribute("lang_default"),
                    t = "true" == b[d].getAttribute("cantran");
                tn(a, new nn({
                    format: f,
                    languageCode: g,
                    languageName: i,
                    name: m,
                    kind: o,
                    id: q,
                    is_servable: j,
                    is_default: v,
                    is_translateable: t
                }))
            }
        }

        function sn(a) {
            for (var b = a.hc.getElementsByTagName("target"), c = b.length, d = 0; d < c; d++) {
                var f = b[d].getAttribute("lang_code"),
                    g = b[d].getAttribute("lang_translated"),
                    i = b[d].getAttribute("lang_original"),
                    m = b[d].getAttribute("id"),
                    o = "true" == b[d].getAttribute("lang_default");
                a.Xf.push(new on({
                    languageCode: f,
                    languageName: g,
                    languageOriginal: i,
                    id: m,
                    is_default: o
                }))
            }
        };

        function un(a, b, c, d) {
            this.a = a;
            c ? this.a = de(this.a, {
                hl: c
            }) : (a = ae(this.a).hl || "", a = a.split("_").join("-"), this.a = de(this.a, {
                hl: a
            }));
            this.b = b;
            this.e = !!d;
            this.Fa = new qn
        }
        un.prototype.a = "";
        un.prototype.b = k;
        un.prototype.e = l;
        un.prototype.Fa = k;

        function vn(a, b, c) {
            var d = a.a,
                f = {
                    v: a.b,
                    type: "track",
                    lang: b.b,
                    name: b.getName(),
                    kind: b.ua,
                    fmt: b.Uh
                };
            b.a && (f.tlang = b.a.Eb);
            d = de(d, f);
            a = w(function(a) {
                a = new mn(a.responseText);
                c(a, b)
            }, a);
            re(d, a)
        }

        function wn(a, b) {
            var c = a.a,
                d = {
                    type: "list",
                    tlangs: 1,
                    v: a.b,
                    fmts: Number(j)
                };
            a.e && (d.asrs = 1);
            c = de(c, d);
            d = w(function(a) {
                var c = this.Fa;
                if ((a = a.responseXML) && a.firstChild) c.hc = a, rn(c), sn(c);
                b()
            }, a);
            re(c, d)
        };

        function xn(a) {
            fh.call(this, a);
            var b = a.getRootNode();
            this.yd = a.getEnvironmentData();
            this.fc = [];
            this.ha = {};
            this.gc = {};
            this.se = [];
            this.di = M("captions-translation-select", b);
            this.Vi = M("captions-translation-dialog", b);
            this.Ui = M("captions-transcribe-dialog", b);
            this.Nd = M("captions-transcribe-menu-item", b);
            this.Ti = M("captions-settings-dialog", b);
            this.xg = M("html5-captions-button", b);
            O(this.xg, "click", w(this.pq, this));
            O(M("captions-translation-confirm", b), "click", w(this.wq, this));
            O(M("captions-translation-cancel",
                b), "click", w(this.fl, this));
            O(M("captions-transcribe-confirm", b), "click", w(this.uq, this));
            O(M("captions-transcribe-cancel", b), "click", w(this.pm, this));
            O(M("captions-settings-bg", b), "click", w(this.sm, this));
            O(M("captions-settings-font-inc", b), "click", w(this.rm, this));
            O(M("captions-settings-font-dec", b), "click", w(this.qm, this));
            O(M("captions-settings-confirm", b), "click", w(this.nq, this));
            O(M("captions-settings-cancel", b), "click", w(this.tq, this));
            a = M("captions-settings-dialog", b);
            Gd(a, w(this.qq, this),
                "html5-color-picker-button");
            this.Qi = M("html5-captions-tracks", this.xg);
            this.Ci = M("html5-popup-menu", this.xg);
            Gd(this.Ci, w(this.oq, this), "yt-uix-button-menu-item");
            this.Bd = new pc;
            sc(this.Bd);
            O(this.Bd, "tick", w(this.$i, this));
            this.pubsub.o("onResize", w(this.yq, this));
            this.pubsub.o("onToggleBackground", w(this.sm, this));
            this.pubsub.o("onFontSizeIncrease", w(this.rm, this));
            this.pubsub.o("onFontSizeDecrease", w(this.qm, this));
            this.pubsub.o("showcontrols", w(this.sq, this));
            this.pubsub.o("hidecontrols", w(this.rq,
                this));
            "detailpage" == this.yd.eventLabel && (b = M("captions-account-settings-link", b)) && V(b);
            this.of = new Zm(99, Xm);
            this.te = new pc(2E3);
            sc(this.te);
            O(this.te, "tick", w(this.xq, this))
        }
        z(xn, fh);
        n = xn.prototype;
        n.U = "cc";
        n.Nc = "cc";
        n.Di = "subtitlesModuleData";
        n.g = k;
        n.yd = k;
        n.xg = k;
        n.Ci = k;
        n.Vi = k;
        n.Ui = k;
        n.Nd = k;
        n.Ti = k;
        n.Qi = k;
        n.se = k;
        n.fc = k;
        n.ha = k;
        n.gc = k;
        n.Bd = k;
        n.of = k;
        n.te = k;
        n.ta = k;
        n.qd = l;
        n.tm = 1;
        n.W = {
            fontFamily: '"Arial Unicode Ms", Arial',
            fontSizeIncrement: 0,
            backgroundEnabled: j
        };
        n.mf = k;
        n.jk = l;
        n.create = function() {
            xn.s.create.call(this);
            this.g = this.a.getVideoData();
            var a;
            1 == this.yd.C.cc_load_policy || 1 == this.g.Xj || "alwayson" == Xf(this.g, "yt:cc") ? a = j : (a = lh(this, "module-enabled"), a = a != k ? !!a : "on" == Xf(this.g, "yt:cc"));
            a && this.load()
        };
        n.destroy = function() {
            this.$();
            xn.s.destroy.call(this)
        };
        n.load = function() {
            xn.s.load.call(this);
            this.qd = "alwayson" == Xf(this.g, "yt:cc");
            Xc(this.Ci, "captions-always-on", this.qd);
            var a = this.g.wb.cc_lang_pref || this.yd.C.cc_lang_pref || Xf(this.g, "yt:cc_default_lang") || this.yd.e,
                a = a && a.split("_").join("-");
            this.ta = new un(this.g.Pf, this.g.B, a, this.g.ei);
            wn(this.ta, w(this.bm, this));
            mh(this, "module-enabled", j);
            this.W = lh(this, "display-settings") || Za(this.W);
            yn(this);
            this.ga = j
        };
        n.$ = function() {
            zn(this);
            jh(this);
            mh(this, "module-enabled", l);
            this.ga = l;
            xn.s.$.call(this)
        };
        n.bm = function() {
            var a = this.ta,
                b = w(this.Wf, this),
                c = a.Fa.Ag,
                d = a.Fa.mc;
            0 > c || vn(a, d[c], b);
            jd(this.Qi.children[0]);
            a = this.ta.Fa.Xf;
            jd(this.di);
            a.forEach(function(a) {
                var b = document.createElement("option");
                b.setAttribute("value", a.Eb);
                b.appendChild(document.createTextNode(a.wf + " -- " + a.Nh));
                this.di.appendChild(b)
            }, this);
            a = this.ta.Fa.Me;
            a.length ? this.qd || (K(this.Nd, "disabled"), V(this.Nd)) : W(this.Nd);
            b = this.ta.Fa.mc;
            if (0 < b.length) {
                var f = this.ta.Fa.Ag;
                b.forEach(function(a, b) {
                    if (a.Mh) {
                        var c = a.toString(),
                            d = pn(a),
                            q = l;
                        b == f && (q = j);
                        An(this, c, d, q)
                    }
                }, this)
            } else a.length || this.$()
        };
        n.Wf = function(a, b) {
            var c = a.e.concat(a.b);
            zn(this);
            this.se = La(c);
            this.mf = b;
            this.jk = Cm.test(b.b);
            var d = [];
            c.forEach(function(a, b) {
                var c = new Me(a.Ka(), a.Ka() + a.ab, {
                    id: b
                });
                d.push(c)
            }, this);
            this.ad.apply(this, d);
            c = {
                trackName: b.getName(),
                trackKind: b.ua
            };
            b.a ? (c.trackLangCode = b.a.Eb, c.fromLangCode = b.b) : c.trackLangCode = b.b;
            this.log(c);
            var c = this.of,
                f = pn(b);
            if (f) {
                var g = document.createElement("div");
                g.innerHTML = f;
                f = g.textContent || "";
                c.Bc(f)
            }
            this.appendToVideoContent(this.of.Q);
            this.te.start();
            c = {
                format: b.Uh,
                languageCode: b.b,
                languageName: b.ue,
                kind: b.ua,
                name: b.ac,
                id: b.Pk,
                is_servable: b.Mh,
                is_default: b.xf,
                is_translateable: b.yf
            };
            b.a && (c.translationLanguage = {
                languageCode: b.a.Eb,
                languageName: b.a.wf,
                languageOriginal: b.a.Nh,
                id: b.a.id,
                is_default: b.a.Qk
            });
            this.pubsub.j("publish_external_event", "captionschanged", c)
        };
        n.ob = function(a) {
            a = this.se[a.getId()];
            this.fc.push(a);
            this.Bd.start()
        };
        n.rb = function(a) {
            a = this.se[a.getId()];
            a = this.fc.indexOf(a);
            0 <= a && this.fc.splice(a, 1);
            this.Bd.start()
        };
        n.yq = function() {
            this.tm = Gh(this.yd).height / 360;
            Bn(this);
            for (var a in this.ha) this.ha[a].Cg()
        };
        n.xq = function() {
            sc(this.te);
            N(this.of.Q)
        };
        n.$i = function() {
            sc(this.Bd);
            Bn(this);
            var a = this.fc.length,
                b;
            for (b in this.gc) delete this.gc[b];
            this.fc.sort(function(a, b) {
                return a.Ka() == b.Ka() ? a.Fc() - b.Fc() : a.Ka() - b.Ka()
            });
            for (var c = 0; c < a; c++) {
                var d = this.fc[c];
                if (d instanceof kn) {
                    var f = this.ha[d.id];
                    x(d.params, this.W);
                    if (f && f.getType() != (d.params.Wh ? 2 : d.a ? 0 : 1)) N(f.Q), delete this.ha[d.id];
                    if (!this.ha[d.id]) {
                        var f = this.ha,
                            g = d.id,
                            i = h;
                        a: {
                            var i = d.id,
                                m = d.params;
                            switch (d.params.Wh ? 2 : d.a ? 0 : 1) {
                                case 0:
                                    i = new bn(i, m);
                                    break a;
                                case 2:
                                    i = new cn(i, m);
                                    break a;
                                default:
                                    i =
                                        new Zm(i, m)
                            }
                        }
                        f[g] = i;
                        f = this.ha[d.id].Q;
                        Xc(f, "captions-asr", "asr" == this.mf.ua);
                        d.params.Cc != k && (d.params.Cc = this.jk ? 1 : 0);
                        0 == this.ha[d.id].id ? this.appendAboveVideoControls(f) : this.appendToVideoContent(f)
                    }
                    x(this.ha[d.id].S, d.params);
                    if (0 == (d.params.Wh ? 2 : d.a ? 0 : 1)) {
                        f = this.ha[d.id];
                        f.ql = d.b;
                        f.ic = {};
                        f.Ec = j;
                        f.Bc(f.ql);
                        f.ic.cc = f.Ra.length;
                        f.ic.width = f.Q.offsetWidth;
                        f.ic.nl = [];
                        for (d = 0; d < f.ic.cc; d++) f.ic.nl.push(f.Ra[d].offsetLeft);
                        f.Ec = l;
                        f.Bc(f.Ce)
                    }
                } else f = d.Af, this.gc[f] || (this.gc[f] = []), this.gc[f].push(d)
            }
            for (b in this.ha) this.gc[b] ?
                this.ha[b].pl(this.gc[b]) : (N(this.ha[b].Q), delete this.ha[b])
        };
        n.sm = function() {
            this.W.backgroundEnabled = !this.W.backgroundEnabled;
            Cn(this)
        };
        n.sq = function() {
            var a = this.ha[0];
            a && a.Q && Vc(a.Q, "controls-hidden", "controls-visible")
        };
        n.rq = function() {
            var a = this.ha[0];
            if (a && a.Q) {
                for (var a = a.Q, b = Sc(a), c = l, d = 0; d < b.length; d++) "controls-visible" == b[d] && (Na(b, d--, 1), c = j);
                c && (b.push("controls-hidden"), a.className = b.join(" "))
            }
        };
        n.qm = function() {
            Dn(this, -1)
        };
        n.rm = function() {
            Dn(this, 1)
        };

        function Dn(a, b) {
            a.W.fontSizeIncrement += b;
            Bn(a)
        }

        function Bn(a) {
            mh(a, "display-settings", a.W);
            var b = "font-size: " + Math.round(((a.W.fontSizeIncrement || 0) + 16) * a.tm) + "px;";
            a.i = sk(".caption-window-transform", b, {
                Jc: a.i,
                reset: j
            })
        }

        function Cn(a) {
            mh(a, "display-settings", a.W);
            a.W.backgroundEnabled ? tk(a.e) : a.e = sk(".captions-text, .caption-row", "background-color: transparent !important;text-shadow: #000 0 0 4px, #000 0 0 4px, #000 0 0 4px, #000 0 0 4px;", {
                Jc: a.e,
                reset: j
            })
        }

        function zn(a) {
            gh(a);
            a.fc = [];
            a.se = [];
            a.mf = k;
            a.$i()
        }
        n.pq = function() {
            this.ga || this.load()
        };
        n.oq = function(a) {
            var a = md(a.target, "yt-uix-button-menu-item"),
                b = rd(a, "action");
            if (b) switch (b) {
                case "translate":
                    this.qd || (jh(this), ih(this), V(this.Vi));
                    break;
                case "transcribe":
                    Wc(this.Nd, "disabled") || (jh(this), ih(this), V(this.Ui));
                    break;
                case "settings":
                    jh(this);
                    ih(this);
                    En(this);
                    V(this.Ti);
                    break;
                case "captions-off":
                    this.$()
            } else {
                var c = rd(a, "trackid");
                if (c) {
                    var a = this.ta,
                        b = w(this.Wf, this),
                        d;
                    (d = Ga(a.Fa.mc.concat(a.Fa.Me), function(a) {
                        return a.toString() == c
                    })) && vn(a, d, b)
                }
            }
        };
        n.fl = function() {
            W(this.Vi)
        };
        n.wq = function() {
            if (!this.qd) {
                this.fl();
                var a;
                a: {
                    a = this.ta.Fa.Xf;
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if (c.Eb == this.di.value) {
                            a = c;
                            break a
                        }
                    }
                    a = k
                }
                a && (b = this.mf, c = new nn, c.b = b.b, c.ue = b.ue, c.ac = b.ac, c.ua = b.ua, c.xf = l, c.yf = b.yf, c.a = a, tn(this.ta.Fa, c), An(this, c.toString(), pn(c), j), vn(this.ta, c, w(this.Wf, this)))
            }
        };
        n.pm = function() {
            W(this.Ui)
        };
        n.uq = function() {
            if (!this.qd) {
                this.pm();
                J(this.Nd, "disabled");
                var a = this.ta.Fa.Me;
                a.length && (a = a[0], An(this, a.toString(), pn(a), j), vn(this.ta, a, w(this.Wf, this)))
            }
        };
        n.nq = function() {
            W(this.Ti)
        };
        n.tq = function() {
            delete this.W;
            this.W = Za(this.W);
            mh(this, "display-settings", this.W);
            yn(this);
            this.$i();
            Cn(this)
        };
        n.qq = function(a) {
            var b = w(function(b) {
                var d = rd(a.currentTarget, b);
                d && (this.W[b] = d)
            }, this);
            b("color");
            b("background");
            yn(this);
            mh(this, "display-settings", this.W)
        };

        function En(a) {
            var b = {
                    Jc: a.b
                },
                c = a.W.color,
                d = a.W.background;
            c && (a.b = sk('.html5-popup-dialog button[data-color="' + c + '"]', "border: 3px solid #992121;", b));
            d && (a.b = sk('.html5-popup-dialog button[data-background="' + d + '"]', "border: 3px solid #992121;", b))
        }

        function yn(a) {
            var b = [],
                c = w(function(a) {
                    var c = this.W[a];
                    c && b.push(a + ": " + c + " !important")
                }, a);
            c("color");
            c("background");
            a.b = sk(".captions-text", b, {
                Jc: a.b,
                reset: j
            });
            En(a)
        }

        function An(a, b, c, d) {
            var a = a.Qi.children[0],
                f = document.createElement("li");
            f.setAttribute("class", "yt-uix-button-menu-item");
            f.setAttribute("data-trackid", b);
            var b = "caption-track-" + b,
                g = document.createElement("input");
            g.setAttribute("type", "radio");
            g.setAttribute("name", "language");
            g.setAttribute("value", c);
            g.id = b;
            g.checked = d;
            J(g, "yt-uix-button-menu-close");
            c = document.createTextNode(c);
            d = document.createElement("label");
            d.setAttribute("for", b);
            f.appendChild(g);
            d.appendChild(c);
            f.appendChild(d);
            a.appendChild(f)
        }

        function Fn(a) {
            return !xn.prototype.eb(a) ? k : new xn(a)
        }
        n.Tm = function(a, b) {
            switch (a) {
                case "reload":
                    b && wn(this.ta, w(this.bm, this));
                    break;
                case "fontSize":
                    isNaN(b) || (this.W.fontSizeIncrement = b, Bn(this))
            }
        };
        n.Im = function() {
            return ["reload", "fontSize"]
        };
        n.eb = function(a) {
            return !!a.getVideoData().Pf
        };

        function Gn() {
            var a = pb(),
                b;
            if (b = uf()) {
                a: {
                    if (navigator.plugins && 0 < navigator.plugins.length)
                        for (b = 0; b < navigator.plugins.length; b++)
                            if (0 <= navigator.plugins[b].name.indexOf("NVIDIA 3D Vision")) {
                                b = j;
                                break a
                            }
                    b = l
                }
                if (b) a: {
                    var c = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                    if (c && 1 < c.length && 4 <= c[1]) {
                        c = document.createElement("embed");
                        c.setAttribute("id", "NvImageDetectionFFID");
                        c.setAttribute("style", "visibility: hidden");
                        c.setAttribute("width", 25);
                        c.setAttribute("height", 25);
                        c.setAttribute("type", "image/jps");
                        id(document.documentElement, c);
                        c = L("NvImageDetectionFFID");
                        try {
                            if (c != k) {
                                b = 27527 <= c.NvGetDriverVersion();
                                break a
                            }
                        } catch (d) {}
                    }
                    b = l
                }
            }
            return b || a && -1 != a.indexOf("Sony")
        };

        function Hn(a) {
            fh.call(this, a);
            var b = a.getVideoData();
            b.me && In(this);
            Jn(this, "html5-threed-conversion-on", w(this.Pp, this));
            Jn(this, "html5-threed-conversion-off", w(this.Op, this));
            var c = this.a.getRootNode(),
                a = M("html5-threed-popup-menu-change-mode-link", c),
                c = M("html5-threed-dialog-change-mode-button", c),
                b = "/select_3d_mode?video_id=" + b.B;
            a.setAttribute("href", b);
            c.setAttribute("href", b)
        }
        z(Hn, fh);
        n = Hn.prototype;
        n.Di = "threeDModuleData";
        n.Lc = k;

        function Jn(a, b, c) {
            a = a.a.getRootNode();
            b = M(b, a);
            O(b, "click", c)
        }
        n.U = "threed";
        n.Nc = "threed";
        n.create = function() {
            this.a.preparePlayerThreeD();
            Hn.s.create.call(this)
        };
        n.destroy = function() {
            this.a.preparePlayerThreeD(j);
            this.$();
            Hn.s.destroy.call(this)
        };

        function Kn(a) {
            return Hn.prototype.eb(a) ? new Hn(a) : k
        }
        n.eb = function(a) {
            a = a.getVideoData();
            return !!a.me || !!a.gf
        };
        n.Pp = function() {
            Ln(this, j)
        };
        n.Op = function() {
            Ln(this, l)
        };

        function Ln(a, b) {
            var c = a.a.getVideoData();
            c.gf && c.Ic != b && (a.a.toggleThreeD(), b ? In(a) : jh(a))
        }

        function In(a) {
            if (!lh(a, "warning-shown") && !Gn()) {
                var b = a.a.getRootNode();
                a.Lc = M("threed-html5-warning-dialog", b);
                V(a.Lc);
                Q(w(function() {
                    Mn(this)
                }, a), 0);
                O(a.Lc, "mouseover", w(function() {
                    K(this.Lc, "hide-dialog")
                }, a));
                O(a.Lc, "mouseout", w(function() {
                    Mn(this)
                }, a));
                Jn(a, "threed-html5-warning-close", w(a.Xp, a))
            }
        }

        function Mn(a) {
            J(a.Lc, "hide-dialog");
            Q(w(function() {
                Wc(this.Lc, "hide-dialog") && jh(this)
            }, a), 9E3)
        }
        n.Xp = function() {
            mh(this, "warning-shown", j);
            jh(this)
        };

        function Nn(a, b) {
            var c = M("html5-ypc-module", a.getRootNode());
            this.Ji = M("html5-ypc-overlay", c);
            this.a = M("html5-ypc-message", c);
            this.Ii = M("html5-ypc-purchase", c);
            this.Yl = M("html5-module-close", c);
            this.sg = M("html5-module-recall", c);
            a.appendAboveVideoControls(c);
            this.Ll = b;
            O(this.Ii, "click", w(this.Vp, this));
            O(this.Yl, "click", w(this.Up, this));
            O(this.sg, "click", w(this.Xl, this))
        }
        n = Nn.prototype;
        n.Ji = k;
        n.Ii = k;
        n.Yl = k;
        n.sg = k;
        n.Ll = k;
        n.update = function(a, b) {
            ld(this.a, a);
            ld(this.Ii, b);
            this.Xl()
        };
        n.Vp = function() {
            this.Ll.j("ypcContentRequest")
        };
        n.Xl = function() {
            kd(this.Ji, this.sg)
        };
        n.Up = function() {
            kd(this.sg, this.Ji)
        };

        function On(a) {
            fh.call(this, a);
            this.pubsub.o("ypcContentRequest", this.Kq, this);
            this.yl = new Nn(a, this.pubsub);
            this.xl = new Me(0, 2147483646, {
                priority: 1
            })
        }
        z(On, fh);
        n = On.prototype;
        n.U = "ypc";
        n.Nc = "ypc";
        n.yl = k;
        n.xl = k;
        n.eb = function() {
            return ag(this.a.getVideoData(), "ypc_module")
        };

        function Pn(a) {
            return !ag(a.getVideoData(), "ypc_module") ? k : new On(a)
        }
        n.create = function() {
            On.s.create.call(this);
            this.g = this.a.getVideoData();
            this.g.na ? (this.yl.update(this.g.Wc, this.g.Xc), this.ad(this.xl)) : this.a.loadVideoByPlayerVars({
                video_id: this.g.B,
                ypc_preview: 1
            })
        };
        n.destroy = function() {
            gh(this)
        };
        n.ob = function(a) {
            On.s.ob.call(this, a);
            this.load()
        };
        n.rb = function(a) {
            this.$();
            On.s.rb.call(this, a)
        };
        n.Kq = function() {
            if (this.g.ig) "embedded" == this.a.getEnvironmentData().eventLabel ? ym(this.g.ig) : window.location = P(this.g.ig, {}) + "";
            else if (this.g.vi) {
                var a = r("yt.www.watch.player.handleEndPreview");
                a && a(this.g.vi)
            }
        };

        function Qn() {
            this.uc = [];
            this.Ei = {};
            this.uh = {};
            this.wh = {}
        }
        n = Qn.prototype;
        n.uc = k;
        n.Ei = k;
        n.Ah = k;
        n.uh = k;
        n.wh = k;
        n.F = k;
        n.co = function(a) {
            (a = Rn(this, a)) && a.load()
        };
        n.Jo = function(a) {
            (a = Rn(this, a)) && a.$()
        };
        n.Nk = function(a, b, c) {
            if (!a || !b) return k;
            (a = Rn(this, a)) && a.Tm(b, c);
            return k
        };
        n.Wo = function(a) {
            if (!a) {
                var b = [];
                this.uc.forEach(function(a) {
                    b.push(a.U)
                });
                return b
            }
            return (a = Rn(this, a)) ? a.Im() : []
        };
        n.Np = function(a, b) {
            x(this.wh, a || k);
            x(this.uh, b || k)
        };

        function Rn(a, b) {
            var c;
            a.uc.some(function(a) {
                if (a.U == b) return c = a, j
            });
            return c
        };

        function Sn(a) {
            this.b = new I;
            this.F = a
        }
        var Tn;
        z(Sn, U);
        n = Sn.prototype;
        n.Th = function(a, b) {
            this.ja = a;
            this.n = b;
            L(this.ja) || "complete" == document.readyState ? this.xm() : O(document, "DOMContentLoaded", w(this.xm, this))
        };
        n.xm = function() {
            this.j("documentready");
            var a = L(this.ja);
            Wc(a, "html5-video-player") ? (a && (this.K = a), this.j("templateready")) : this.Pi() || this.j("templateerror")
        };
        n.Pi = function() {
            var a = L("video-player") || Tn;
            if (!a) return l;
            Un(this, a);
            this.j("templateready");
            return j
        };

        function Un(a, b) {
            Tn = b;
            var c = b.cloneNode(j);
            c && (a.K = c);
            a.K.setAttribute("id", a.n.attrs.id || "video-player");
            L(a.ja).appendChild(a.K)
        }
        n.bo = function() {
            return this.K
        };
        n.Dk = function() {
            return k
        };
        n.Kg = function() {
            var a = this.F.getEnvironmentData(),
                b = this.K;
            J(b, "el-" + a.eventLabel);
            a.Ta && J(b, "html5-native-controls");
            a.qc || J(b, "html5-chromeless");
            b.style.display = "";
            this.e = M("html5-video-container", b);
            this.k = M("html5-video-content", b);
            O(window, "resize", w(this.Ke, this))
        };
        n.Ke = function() {
            var a = Vn(this);
            if (!a.isEmpty() && (!this.pa || !Ob(a, this.pa))) this.pa = a, this.Xi(a), this.j("resize")
        };
        n.Xi = function() {
            var a = Wn(this);
            tg(this.k, a.width, a.height);
            var b = Vn(this);
            kg(this.k, (b.width - a.width) / 2, (b.height - a.height) / 2)
        };
        n.Yg = function(a) {
            this.m.setAttribute("data-youtube-id", a.B);
            var b = Xf(a, "yt:bgcolor");
            b && (this.e.style.backgroundColor = b);
            Xc(this.K, "html5-live-playback", a.xb);
            Xc(this.K, "html5-live-dvr-disabled", a.xb && !a.xa)
        };
        n.Hh = function() {};
        n.Ml = function() {};
        n.Jl = function() {};
        n.qf = function() {};
        n.hg = function() {};
        n.Gl = function() {};
        n.ti = function() {};
        n.hm = function() {};
        n.Ki = function() {};
        n.tl = function() {};
        n.li = function() {};
        n.Gk = function() {};
        n.Cm = function() {
            return l
        };
        n.ij = function() {};
        n.zm = function() {};
        n.om = function() {};
        n.xk = function() {};
        n.Bi = function() {
            this.Ke()
        };

        function Vn(a) {
            return !a.e ? new G(0, 0) : new G(a.e.clientWidth, a.e.clientHeight)
        }

        function Wn(a) {
            var b = Vn(a),
                c = !a.m ? new G(0, 0) : new G(a.m.videoWidth, a.m.videoHeight);
            return a.F.getEnvironmentData().Ta || c.isEmpty() ? b : Pb(c, c.width / c.height > b.width / b.height ? b.width / c.width : b.height / c.height)
        }
        n.appendToVideoContent = function(a) {
            this.k.appendChild(a)
        };
        n.appendAboveVideoControls = function() {};

        function Xn() {
            this.lb = new Jd
        }
        n = Xn.prototype;
        n.Cj = k;
        n.fe = k;
        n.Dj = k;
        n.Ig = k;
        n.uj = k;
        n.fd = k;
        n.hn = function() {
            this.Ma()
        };
        n.jn = function(a) {
            a.preventDefault();
            a.stopPropagation()
        };
        n.Ma = function() {
            W(this.fd);
            Bm("panelhidden")
        };
        n.kn = function(a) {
            27 == a.keyCode && this.Ma()
        };
        n.yj = function() {
            this.fe.select()
        };

        function Yn(a, b) {
            a.Ig && K(a.fd, a.Ig);
            a.Ig = b;
            J(a.fd, a.Ig);
            V(a.fd)
        };

        function Zn(a) {
            this.F = a;
            this.F.pubsub.o("internalvideodatachange", this.bq, this);
            this.lb = new Jd;
            this.b = new Xn
        }
        n = Zn.prototype;
        n.Jg = 0;

        function $n(a, b, c) {
            b = M(th[b], a.a);
            O(b, "click", w(function(a, b) {
                this.Ma();
                a.call(this, b);
                b.stopPropagation()
            }, a, c))
        }
        n.bq = function(a, b) {
            var c = M("html5-context-menu-copy-embed-html", this.a);
            Rh(c, b.dk)
        };
        n.Fj = function(a) {
            var b = this.F.zf();
            a && (b += "#t=" + Math.floor(this.F.getCurrentTime()) + "s");
            ao(this, b, "URL")
        };
        n.nn = function() {
            var a = je("EMBED_HTML_TEMPLATE"),
                b = je("EMBED_HTML_URL"),
                c = Fh(this.F.getEnvironmentData()),
                d = this.F.getVideoData().B,
                b = b.replace(/__videoid__/g, d),
                a = a.replace(/__url__/g, ta(b)),
                a = a.replace(/__width__/g, c.width),
                a = a.replace(/__height__/g, c.height);
            ao(this, a, "Text")
        };

        function ao(a, b, c) {
            if (!window.clipboardData || !window.clipboardData.setData(c, b)) a = a.b, Yn(a, "html5-modal-panel-clipboard-substitute"), a.fe.value = b, a.fe.focus(), Q(w(a.yj, a), 100)
        }
        n.pn = function() {
            var a = this.F.getVideoData(),
                b = this.F.getEnvironmentData(),
                c = {
                    eurl: b.a,
                    html5: 1
                };
            5 != this.F.fk() && (c.autoplay = 1, c.vq = a.format.pb);
            var d = Math.round(this.F.getCurrentTime());
            10 < d && (c.start = d);
            a = "/embed/" + a.B;
            a = P(a, c);
            d = Fh(b);
            b = this.F;
            c = a;
            a = {
                top: 0,
                left: 0,
                width: d.width,
                height: d.height,
                resizable: j
            };
            b.qa && bo(b, l);
            b.pubsub.j("openingpage");
            b = a || {};
            b.target = b.target || c.target || "YouTube";
            b.width = b.width || 600;
            b.height = b.height || 600;
            if (b = ym(c, b)) b.opener || (b.opener = window), b.focus()
        };
        n.sn = function() {
            co(this.F)
        };
        n.qn = function() {
            var a = this.F.getVideoData(),
                b = this.F.getEnvironmentData(),
                c = Fh(b),
                d = Gh(b),
                c = {
                    cr: b.V,
                    csipt: a.Yc,
                    ec: 108,
                    feature: b.i,
                    h: d.height,
                    hl: b.e,
                    playerh: c.height,
                    playerw: c.width,
                    ptk: a.e,
                    referrer: b.referrer,
                    screenh: window.screen.height,
                    screenw: window.screen.width,
                    sdetail: a.V,
                    shost: ce(Wf(a)),
                    sourceid: a.Yd,
                    vid: b.z,
                    vq: b.n,
                    w: d.width
                };
            x(c, this.F.Sg());
            c.videoId && (c.v = c.videoId, delete c.videoId);
            b.Nb && (c.mobile = "1");
            this.F.Uj("streamingerror", c);
            window.open(Eh(a))
        };
        n.mn = function() {
            ao(this, eo(this.F, j), "Text")
        };
        n.rn = function() {
            this.Jg || (this.Jg = me(w(this.Rm, this), 500));
            this.Rm();
            var a = w(function() {
                    ne(this.Jg);
                    this.Jg = k
                }, this),
                b = r("yt.pubsub.instance_");
            b && b.subscribe("panelhidden", function() {
                var b = arguments;
                Q(function() {
                    a.apply(p, b)
                }, 0)
            }, h)
        };
        n.Rm = function() {
            var a = this.F.Sg(),
                b = this.F.getEnvironmentData(),
                c = Gh(b),
                b = {
                    videoId: this.F.getVideoData().B,
                    videoWidth: c.width,
                    videoHeight: c.height,
                    volume: Math.round(this.F.getVolume()),
                    streamType: b.na,
                    decodedFrames: a.hmewdfc || a.hmemdf || "-",
                    droppedFrames: a.hmewdrop || "-",
                    parsedFrames: a.hmempf || "-",
                    presentedFrames: a.hmempresented || "-",
                    videoBytesDecoded: a.hmewvdbc || "-",
                    audioBytesDecoded: a.hmewadbc || "-",
                    paintedFrames: a.hmempainted || "-",
                    paintDelay: a.hmempaintdelay || "-"
                },
                a = this.b,
                b = a.a.Ab(b);
            Yn(a, "html5-modal-panel-infobox");
            a.uj.innerHTML = b
        };
        n.ln = function(a) {
            a.preventDefault();
            if (!Sh(this.b.fd)) {
                Sh(this.a) && a.stopPropagation();
                var b = this.a,
                    c, d;
                d || (d = 0);
                if (!c) {
                    var f = document.body;
                    c = new Nb(0, Infinity, Infinity, 0);
                    for (var g = Yc(f), i = g.a.body, m = g.a.documentElement, o = !vb && "CSS1Compat" == g.a.compatMode ? g.a.documentElement : g.a.body; f = og(f);)
                        if ((!C || 0 != f.clientWidth) && (!vb || 0 != f.clientHeight || f != i) && f != i && f != m && "visible" != jg(f, "overflow")) {
                            var q = pg(f),
                                v;
                            v = f;
                            if (ub && !E("1.9")) {
                                var t = parseFloat(ig(v, "borderLeftWidth"));
                                if ("rtl" == jg(v, "direction")) var H =
                                    v.offsetWidth - v.clientWidth - t - parseFloat(ig(v, "borderRightWidth")),
                                    t = t + H;
                                v = new F(t, parseFloat(ig(v, "borderTopWidth")))
                            } else v = new F(v.clientLeft, v.clientTop);
                            q.x += v.x;
                            q.y += v.y;
                            c.top = Math.max(c.top, q.y);
                            c.right = Math.min(c.right, q.x + f.clientWidth);
                            c.bottom = Math.min(c.bottom, q.y + f.clientHeight);
                            c.left = Math.max(c.left, q.x)
                        }
                    i = o.scrollLeft;
                    o = o.scrollTop;
                    c.left = Math.max(c.left, i);
                    c.top = Math.max(c.top, o);
                    g = ed(g.a.parentWindow || g.a.defaultView || window);
                    c.right = Math.min(c.right, i + g.width);
                    c.bottom = Math.min(c.bottom,
                        o + g.height);
                    c = 0 <= c.top && 0 <= c.left && c.bottom > c.top && c.right > c.left ? c : k
                }
                Wh(new F(a.pageX, a.pageY), b, d, k, c, 5);
                V(this.a);
                this.lb.N(this.a, "contextmenu", function(a) {
                    a.preventDefault()
                });
                a = w(function() {
                    this.lb.N(document, "click", w(this.Ma, this));
                    this.lb.N(document, "contextmenu", w(this.Ma, this));
                    this.lb.N(window, "blur", w(this.Ma, this))
                }, this);
                Q(a, 0);
                this.lb.N(document, "keydown", w(this.Ep, this))
            }
        };
        n.Ep = function(a) {
            27 == a.keyCode && this.Ma(a)
        };
        n.Ma = function() {
            W(this.a);
            Ld(this.lb)
        };

        function fo() {
            this.b = new I
        }
        z(fo, U);
        fo.prototype.k = k;
        fo.prototype.e = k;
        fo.prototype.i = k;
        fo.prototype.update = function(a, b) {
            a ? (V(this.a), ld(this.k, a), b ? (V(this.e), ld(this.i, b)) : W(this.e)) : W(this.a)
        };

        function go(a) {
            Sn.call(this, a);
            this.ra = new Jd(this);
            this.za = w(this.Hm, this)
        }
        z(go, Sn);
        n = go.prototype;
        n.aj = 0;
        n.Th = function(a, b) {
            go.s.Th.call(this, a, b);
            var c;
            if (c = this.n.assets.css) {
                c = gd("div", {
                    "class": "html5-player-css-loaded"
                });
                document.body.appendChild(c);
                var d = "none" == ig(c, "display");
                N(c);
                c = !d
            }
            if (c) {
                c = {
                    rel: "stylesheet",
                    type: "text/css",
                    href: this.n.assets.css
                };
                d = document.getElementById("www-player-css");
                c.id = "www-player-css";
                var f = d || document.createElement("link");
                cd(f, c);
                d || document.getElementsByTagName("head")[0].appendChild(f)
            }
        };
        n.Pi = function() {
            go.s.Pi.call(this) || se(this.n.assets.html, {
                format: "RAW",
                method: "GET",
                cb: w(this.zq, this)
            });
            return j
        };
        n.zq = function(a) {
            if (a.responseText) {
                var b = document.createElement("div");
                b.innerHTML = a.responseText;
                Un(this, M("html5-video-player", b));
                this.j("templateready")
            } else this.j("templateerror")
        };
        n.Dk = function() {
            return this.ma
        };
        n.Kg = function() {
            go.s.Kg.call(this);
            var a = this.F.getEnvironmentData(),
                b = this.K;
            a.u && J(b, a.u + "-theme");
            (a.Sc || !a.qc) && J(b, "modest-branding");
            a.Ug && J(b, "html5-hide-share");
            a.vj || J(b, "html5-hide-volume");
            a.rc && J(b, "html5-autohide");
            a.wa && (J(b, "html5-tablet"), J(document.body, "html5-tablet-body"));
            this.ma = M("html5-video-controls", b);
            this.L = M("html5-video-fallback", b);
            this.na = M("html5-video-fallback-content", this.L);
            this.i = M("html5-video-loader", b);
            this.a = M("html5-watermark", b);
            var c = M("html5-context-menu",
                    b),
                d = M("html5-modal-panel", b),
                a = this.z = new Zn(this.F);
            a.a = c;
            N(a.a);
            document.body.appendChild(a.a);
            c = a.b;
            c.fd = d;
            c.Dj = M("html5-modal-panel-close-button", d);
            c.Cj = M("html5-modal-panel-clipboard-substitute-content", d);
            c.fe = xd("input", c.Cj);
            c.uj = M("html5-modal-panel-infobox-content", d);
            var f = M("html5-show-video-info-template", d);
            c.a = Ak(f, "videoId videoWidth videoHeight volume streamType decodedFrames droppedFrames parsedFrames presentedFrames videoBytesDecoded audioBytesDecoded paintedFrames paintDelay".split(" "));
            c.lb.N(document, "keydown", w(c.kn, c));
            c.lb.N(c.Dj, "click", w(c.hn, c));
            c.lb.N(d, "contextmenu", w(c.jn, c));
            O(c.fe, "click", w(c.yj, c));
            var d = {
                    $m: a.mn,
                    an: a.nn,
                    bn: w(a.Fj, a, l),
                    cn: w(a.Fj, a, j),
                    dn: a.pn,
                    en: a.qn,
                    fn: a.rn,
                    gn: a.sn
                },
                g;
            for (g in d) $n(a, g, d[g]);
            g = M("html5-context-menu-pop-out", a.a);
            Rh(g, window.opener == k);
            b = M("html5-info-bar", b);
            g = this.V = new fo;
            g.a = b;
            O(g.a, "click", w(g.j, g, "click"));
            g.k = M("html5-title", g.a);
            g.e = M("html5-author", g.a);
            g.i = xd("span", g.e);
            var i = this.F.getEnvironmentData();
            i.wa ? (b = w(function(a) {
                return ho(a) ||
                    Wc(a.target, "html5-draggable")
            }, this), new hi(this.K, w(function(a) {
                var b = R(this.F.J, 2);
                if (b) b && ik.hasTags(h) && this.Gj(a);
                else if (ho(a)) {
                    Wc(this.K, "hide-controls") ? this.j("showcontrols") : this.j("hidecontrols");
                    this.j("hidemenus")
                }
            }, this), l, b), O(this.K, "gesturechange", w(this.un, this)), O(this.K, "gestureend", w(this.vn, this))) : (O(this.K, "click", w(this.Gj, this)), O(this.K, "dblclick", w(this.tn, this)), O(this.K, "click", w(this.j, this, "showcontrols")), Fd(this.K, "move", w(this.j, this, "showcontrols")), Fd(this.K,
                "out", w(this.j, this, "hidecontrols")));
            var m = w(function() {
                ik.fillPool(4);
                if (i.wa && ii && !ki) {
                    ki = j;
                    document.addEventListener("click", function(a) {
                        for (var b = new F(a.clientX, a.clientY), c = 0, d; d = ji[c]; c++)
                            if (Mb(d, b) < 25) {
                                a.stopPropagation();
                                a.preventDefault();
                                ji.splice(c, 1);
                                break
                            }
                    }, j)
                }
                var a = Ed(this.K, "click", m, j);
                a && Hd(a)
            }, this);
            O(this.K, "click", m, j);
            O(this.K, "keypress", w(this.wn, this));
            O(this.K, "keydown", w(this.on, this));
            O(this.K, "contextmenu", w(this.z.ln, this.z));
            O(this.a, "click", w(this.Hj, this));
            "embedded" ==
            i.eventLabel && this.V.o("click", w(this.Hj, this))
        };
        n.Xi = function(a) {
            go.s.Xi.call(this, a);
            var b = a.width,
                a = a.height,
                c = 0,
                d = 0;
            b / a > 480 / 360 ? (c = a, d = 360) : (c = b, d = 480);
            b = Lb(c / d, 0.53, 1);
            this.ya = sk(".html5-scalable-icon", ["transform: scale(" + b + ") !important", "-webkit-transform: scale(" + b + ") !important", "-moz-transform: scale(" + b + ") !important", "-o-transform: scale(" + b + ") !important", "-ms-transform: scale(" + b + ") !important"], {
                Jc: this.ya,
                reset: j
            });
            Ld(this.ra);
            b = L("watch-player");
            (a = vb ? "webkitTransitionEnd" : tb ? "oTransitionEnd" : ub ? "transitionend" : C && E(10) ? "MSTransitionEnd" :
                k) && b && this.ra.N(b, a, w(this.Ke, this));
            Q(w(this.Ke, this), 1E3)
        };
        n.Yg = function(a) {
            go.s.Yg.call(this, a);
            var b = this.F.getEnvironmentData();
            "embedded" == b.eventLabel && b.$c && this.V.update(a.title, a.author)
        };
        n.Hh = function(a) {
            go.s.Hh.call(this, a);
            Vc(this.K, uh[Re(a.b)], uh[Re(a.a)]);
            R(a.a, 1) ? this.tl() : this.li();
            0 < Nk(a, 64) ? J(this.K, "seeking-mode") : 0 > Nk(a, 64) && K(this.K, "seeking-mode")
        };
        n.Gj = function(a) {
            var b = this.F.getEnvironmentData();
            ho(a) && (this.K.focus(), (R(this.F.J, 2) || !b.Ta) && this.j("playpausetoggled", j))
        };
        n.tn = function(a) {
            ho(a) && this.j("fullscreentoggled")
        };

        function io(a, b, c) {
            1 * (a.qa ? -1 : 1) > (a.qa ? -c : b) && a.j("fullscreentoggled")
        }
        n.un = function(a) {
            io(this, 1.3, 0.7);
            a.preventDefault()
        };
        n.vn = function() {
            io(this, 1.1, 0.9)
        };

        function ho(a) {
            return !md(a.target, "html5-stop-propagation")
        }
        n.wn = function(a) {
            var b = a.keyCode;
            if (179 == b || 178 == b)
                if (179 == b && (this.j("playpausetoggled", j), a.preventDefault()), 178 == b) this.j("stop"), a.preventDefault();
            98 == b && this.j("publishtomodules", "onToggleBackground");
            (187 == b || 43 == b) && this.j("publishtomodules", "onFontSizeIncrease");
            (189 == b || 45 == b) && this.j("publishtomodules", "onFontSizeDecrease");
            32 == b && ho(a) && (this.j("playpausetoggled", j), a.preventDefault())
        };
        n.on = function(a) {
            var b = a.keyCode;
            if (38 == b || 40 == b || 37 == b || 39 == b) 38 == b ? this.j("increasevolume") : 40 == b ? this.j("decreasevolume") : 37 == b ? this.j("seekby", -20) : 39 == b && this.j("seekby", 20), a.preventDefault();
            27 == b && (this.j("exitfullscreen"), a.preventDefault())
        };
        n.Hj = function(a) {
            a.preventDefault();
            this.j("visitparentsite")
        };
        n.Ml = function() {
            K(this.K, "hide-controls")
        };
        n.Jl = function() {
            J(this.K, "hide-controls")
        };
        n.qf = function(a) {
            Xc(this.K, "html5-autohide", a)
        };
        n.hg = function() {
            K(this.a, "html5-branded-watermark");
            V(this.a)
        };
        n.Gl = function(a) {
            this.a.src = a;
            J(this.a, "html5-branded-watermark");
            V(this.a)
        };
        n.ti = function() {
            W(this.a)
        };
        n.hm = function(a) {
            this.Ki();
            var b = this.F.getEnvironmentData(),
                c = this.e,
                b = b.Nb,
                d = document.body;
            d.style.backgroundSize != h || d.style.MozBackgroundSize != h || d.style.WebkitBackgroundSize != h || d.style.MsBackgroundSize != h || d.style.OBackgroundSize != h ? (d = document.createElement("div"), d.style.backgroundImage = "url(" + wk(c, a, b) + ")") : (d = document.createElement("img"), d.src = wk(c, a, b), a = d, c.clientWidth / c.clientHeight < vk ? (a.style.height = "100%", a.style.width = "auto") : (a.style.height = "auto", a.style.width = "100%"));
            J(d, "video-thumbnail");
            this.u = d;
            this.e.appendChild(this.u)
        };
        n.Ki = function() {
            this.u && (N(this.u), this.u = k)
        };
        n.tl = function() {
            clearTimeout(this.aj);
            this.Hm()
        };
        n.Hm = function() {
            var a = "rotate(" + 45 * Math.floor(y() / 125) + "deg)";
            this.i.style.MozTransform = a;
            this.i.style.WebkitTransform = a;
            this.i.style.OTransform = a;
            this.i.style.msTransform = a;
            this.aj = setTimeout(this.za, 125)
        };
        n.li = function() {
            clearTimeout(this.aj)
        };
        n.Gk = function() {
            var a = ad("html5-popup-dialog", this.K);
            B(a, function(a) {
                W(a)
            }, this)
        };
        n.Cm = function() {
            return !!this.na
        };
        n.ij = function(a) {
            this.na.innerHTML = a;
            V(this.L)
        };
        n.zm = function() {
            W(this.L)
        };
        n.om = function(a) {
            var b = document.createElement("div");
            J(b, "html5-bezel", "html5-center-overlay");
            var c = document.createElement("div");
            J(c, a);
            b.appendChild(c);
            this.e.appendChild(b);
            Q(function() {
                J(b, "html5-bezel-fade")
            }, 0);
            Q(function() {
                N(b)
            }, 300)
        };
        n.xk = function(a) {
            M("html5-viewport-sheet").disabled = !a
        };
        n.Bi = function(a) {
            pd(document.body, "player-size", a);
            go.s.Bi.call(this, a)
        };
        n.appendAboveVideoControls = function(a) {
            var b = this.ma;
            b.insertBefore(a, b.childNodes[0] || k)
        };

        function jo(a) {
            return (a = /\/([ve]|embed)\/([^\?]+)/.exec(a)) && a[2] ? a[2] : k
        };
        var ko = [102, 107, 108];

        function lo(a, b, c) {
            this.b = [];
            this.e = [];
            this.i = [];
            c = c || {};
            this.k = c.nbe;
            this.n = c.bc;
            this.C = c.bd;
            this.Lb = c.bt;
            this.wj = c.fs;
            this.xj = c.mos;
            this.source = c.sourceid;
            this.dd = c.sd;
            this.Xm = c.hmewadbc;
            this.ib = c.hmewdfc;
            this.Ym = c.hmewdrop;
            this.Zm = c.hmewvdbc;
            this.ce = c.hmemdf;
            this.Zd = c.hmempaintdelay;
            this.Yd = c.hmempainted;
            this.ra = c.hmempf;
            this.Vd = c.hmempresented;
            this.ed = c.volume;
            this.jh = b.jh;
            this.zj = b.ub;
            this.ja = b.L;
            this.Zc = b.a;
            this.eventLabel = b.eventLabel;
            this.i = b.b;
            this.Tc = b.k;
            this.Rc = b.e;
            this.be = b.be ? "1" : h;
            this.z =
                Fh(b);
            this.dh = b.Aa;
            this.referrer = b.referrer;
            this.ah = b.V;
            this.fh = b.i;
            this.L = new G(window.screen.width, window.screen.height);
            this.Um = b.ra;
            this.ya = b.ya;
            this.Wa = b.Wa;
            var d, c = r("yt.www.watch.activity.getTimeSinceActive");
            "detailpage" == b.eventLabel && c && (d = c());
            this.Wc = d;
            this.V = Gh(b);
            this.hb = b.za;
            this.Wm = b.z;
            a.format && a.Rc && (this.Xc = a.Yc, this.pa = a.u, this.Yc = a.Zc, this.format = a.format, this.Aj = a.sc, this.ma = a.Se, this.na = a.Og, this.oa = a.oa, this.bh = a.i, this.Ha = a.Ha, this.eh = a.V, this.Bj = a.Zg, this.a = a.a, this.Vm = a.Tc,
                this.B = a.B, this.za = a.Rc)
        }
        n = lo.prototype;
        n.zj = l;
        n.pj = l;
        n.wj = l;
        n.Rg = l;
        n.xj = l;
        n.Aj = l;
        n.Bj = l;
        n.Tj = l;

        function mo(a) {
            if (!a.Tj) {
                var b = {
                    html5: "1",
                    ns: "yt",
                    ps: a.dh,
                    el: a.eventLabel,
                    hl: a.Rc,
                    cr: a.ah,
                    docid: a.B,
                    sd: a.dd,
                    sourceid: a.source,
                    referrer: a.referrer,
                    q: a.Um,
                    plid: a.oa,
                    fmt: a.format ? a.format.a : 0,
                    fs: a.wj ? "1" : "0",
                    screenw: a.L.width,
                    screenh: a.L.height,
                    w: a.V.width,
                    h: a.V.height,
                    vw: a.za.width,
                    vh: a.za.height,
                    playerw: a.z.width,
                    playerh: a.z.height,
                    vid: a.Wm,
                    hbid: a.bh,
                    rt: a.df(a.Vc),
                    mos: a.xj,
                    volume: a.ed,
                    app: a.jh,
                    csipt: a.Xc,
                    on3g: a.be,
                    sdetail: a.eh,
                    subscribed: a.a,
                    sw: a.Yc,
                    list: a.Ha,
                    eurl: a.Zc,
                    framer: a.Tc,
                    feature: a.fh,
                    threed: a.Vm,
                    lact: a.Wc
                };
                a.Rg && (b.playback = "1");
                a.zj && (b.autoplay = "1");
                a.Aj && (b.splay = "1");
                a.pa && (b.delay = a.pa);
                a.Bj && !a.Rg && (b.vtmp = "1");
                a.pj && (b.tv = "1");
                a.ja && (b.content_v = a.ja);
                a.ya != h && a.Wa && (b.uga = a.Wa + a.ya);
                a.u != h && (b.len = a.df(a.u));
                0 < a.i.length && (b.fexp = a.i.toString());
                0 < a.ma && (b.idpj = a.ma);
                0 < a.na && (b.ldpj = a.na);
                a.hb != h && (b.attrib = a.hb);
                a.n && (b.bc = a.n);
                a.C && (b.bd = a.C, b.bt = a.Lb);
                0 < a.k && (b.nbe = a.k);
                a.ib != h && (b.hmewdfc = a.ib, b.hmewdrop = a.Ym, b.hmewvdbc = a.Zm, b.hmewadbc = a.Xm);
                a.ra != h && (b.hmempf = a.ra, b.hmemdf = a.ce,
                    b.hmempresented = a.Vd, b.hmempainted = a.Yd, b.hmempaintdelay = a.Zd);
                0 < a.b.length && (b.st = a.b.map(a.df).join(","), b.et = a.e.map(a.df).join(","));
                b = P("//web.archive.org/web/20120622093201/http://s.youtube.com/s", b);
                ye(b);
                a.Tj = j
            }
        }
        n.df = function(a) {
            return (1 * a.toFixed(3)).toString()
        };

        function oo() {}
        z(oo, Rb);
        n = oo.prototype;
        n.xh = [10, 10, 10, 40];
        n.Yi = 0;
        n.Vl = 0;
        n.$g = k;
        n.Qc = k;
        n.oj = "";
        n.Ub = 0;
        n.nm = 0;
        n.yh = 0;
        n.Wd = 0;
        n.Ie = 0;
        n.qg = [];
        n.ne = 0;
        n.rg = [];
        n.Vj = function() {
            po(this);
            this.Yi = Math.min(this.Yi + 1, this.xh.length - 1);
            var a = this.xh[this.Yi];
            qo(this);
            this.e = me(w(this.Vj, this), 1E3 * a)
        };

        function qo(a) {
            a.e != h && ne(a.e)
        }
        n.In = function() {
            var a = this.Qc(),
                b = (y() - this.Wd) / 1E3,
                c = a - this.Ub;
            if (0 != c) {
                var d = b - this.yh;
                if (0 > c || c > d + 0.2) ro(this), this.ne = a;
                this.yh = b
            }
            this.Ub = a
        };

        function ro(a) {
            400 < a.Vl ? qo(a) : 3 < a.Ub - a.ne && (a.rg[a.Ie] = a.ne, a.qg[a.Ie] = a.Ub, a.Ie++, a.ne = a.Ub)
        }

        function so(a) {
            var b = {},
                c = a.$g();
            x(b, c);
            b = new lo(a.g, a.a, b);
            b.Vc = (y() - a.Wd) / 1E3;
            b.u = a.n();
            return b
        }

        function to(a) {
            var b = a.a,
                a = a.g,
                c = {
                    ns: "yt",
                    html5: "1",
                    el: b.eventLabel,
                    ps: b.Aa,
                    fexp: b.b.join(",") || h,
                    list: a.Ha,
                    d: b.ja,
                    c: b.pa,
                    f: b.ma
                };
            b.ub && (c.autoplay = "1");
            a.a && (c.subscribed = a.a);
            return c
        }

        function po(a) {
            ro(a);
            uo(a, h)
        }

        function uo(a, b) {
            if (b || 0 < a.Ie && a.g.Tg) {
                var c = b || so(a);
                a.rg.length && a.qg.length && (c.b = a.rg, c.e = a.qg);
                mo(c);
                a.rg = [];
                a.qg = [];
                a.Vl++
            }
            a.Ie = 0
        }

        function vo(a, b) {
            b.rt = (y() - a.Wd) / 1E3;
            var c = a.$g();
            x(b, c);
            "streamingerror" == b.event ? (c = "//web.archive.org/web/20120622093201/http://s.youtube.com/stream_204", b.videoId && delete b.videoId) : c = a.a.gb + "player_204";
            c = P(c, to(a));
            c = P(c, b);
            ye(c)
        }

        function wo(a, b) {
            var c = a.a,
                d = a.g,
                f = {
                    el: c.eventLabel,
                    eurl: c.a,
                    fmt: d.format ? d.format.a : 0,
                    html5: 1,
                    list: d.Ha,
                    plid: d.oa,
                    ps: c.Aa,
                    noflv: 1,
                    st: a.Qc(),
                    video_id: d.B
                };
            c.ub && (b.autoplay = "1");
            d.Vg && (b.tmi = "1");
            x(f, b);
            c = be(f);
            ye("/live_204?" + c)
        }
        n.G = function() {
            oo.s.G.call(this);
            qo(this);
            this.i != h && ne(this.i)
        };

        function xo() {
            this.a = this.e = 0;
            this.b = []
        }

        function yo(a) {
            var b = Qa;
            Pa(a.b, function(a, c) {
                return b(a.value, c.value)
            });
            var c = 0.5 * a.a,
                d = 0,
                f = NaN;
            a.b.some(function(a) {
                d += a.Ae;
                f = a.value;
                if (d >= c) return j
            });
            return f
        };

        function zo() {
            this.b = new I;
            this.e = new xo;
            this.a = []
        }
        z(zo, U);

        function Ao(a) {
            if (2 > a.a.length) a.a = [];
            else {
                for (var b, c = a.a.shift(); b = a.a.shift();) {
                    var d;
                    d = b;
                    var f = (d.timeStamp - c.timeStamp) / 1E3;
                    if (0 >= f) d = k;
                    else {
                        var g = d.Zj - c.Zj;
                        d = {
                            weight: Math.min(f + g, 12 / 2.2),
                            bitrate: g / f * d.Jn
                        }
                    }
                    if (d) {
                        c = a.e;
                        f = d.weight;
                        d = d.bitrate;
                        c.b.push({
                            index: c.e++,
                            Ae: f,
                            value: d
                        });
                        for (c.a += f; 12 < c.a;) d = c.a - 12, f = c.b[0], f.Ae <= d ? (c.a -= f.Ae, c.b.shift()) : (c.a -= d, f.Ae -= d);
                        c = b
                    }
                }
                a.j("update", yo(a.e))
            }
        };

        function Bo(a, b) {
            this.a = a;
            this.b = b
        }

        function Nk(a, b) {
            return R(a.a, b) && !R(a.b, b) ? 1 : !R(a.a, b) && R(a.b, b) ? -1 : 0
        };

        function Co(a) {
            this.a = a
        }

        function Do(a, b) {
            var c = k;
            b.n && (c = Vf(b, b.n));
            !c && "auto" != a.a.n && (c = Vf(b, a.a.n));
            c || (c = b.jb, a.a.cf && (c = Af(c, a.a.Rk)), (c = Bf(a.a.Ve, c, !a.a.zh)) || (c = b.jb[0]));
            return c
        };

        function Eo(a) {
            this.b = new I;
            this.e = a;
            this.a = new Co(this.e)
        }
        z(Eo, U);

        function Fo(a, b) {
            var c = Do(a.a, b);
            c != b.format && (b.format = c, a.j("internalvideoformatchange", b, c))
        };

        function Go(a, b, c) {
            this.C = {};
            this.i = [];
            this.Mb = new xm;
            this.pubsub = new I;
            this.pubsub.o("openingpage", w(this.jp, this));
            this.pubsub.o("initializingmode", w(this.ip, this));
            this.pubsub.o("statechange", w(this.kp, this));
            this.pubsub.o("internalenvironmentdatachange", w(this.hp, this));
            this.pubsub.o("internalvideodatachange", w(this.rp, this));
            this.pubsub.o("internalvolumechange", w(this.Qg, this));
            b instanceof Md || (b = new Md(b));
            this.kb = b;
            this.a = new zh(this.kb.args);
            this.pubsub.j("internalenvironmentdatachange",
                "newdata");
            this.a.wa && (this.a.u = "dark");
            this.Oh = new Jd(this);
            this.Wb = new Eo(this.a);
            this.Wb.o("internalvideoformatchange", w(this.op, this));
            this.sa = new Se(w(this.getCurrentTime, this), w(this.Sj, this), w(this.gp, this));
            this.da = new Qn;
            this.J = new Pe;
            this.k = new pc(3E4);
            this.k.addEventListener("tick", w(this.lp, this));
            c ? this.A = c(this) : this.A = new go(this);
            this.A.o("documentready", this.pp, this);
            this.A.o("templateerror", this.mp, this);
            this.A.o("templateready", this.np, this);
            this.A.o("resize", this.qp, this);
            this.A.Th(a,
                this.kb)
        }
        n = Go.prototype;
        n.Db = k;
        n.Sh = k;
        n.ve = k;
        n.Oh = k;
        n.list = k;
        n.r = k;
        n.lh = 0;
        n.qa = l;
        n.Zi = l;
        n.da = k;
        n.xd = j;
        n.Hd = j;
        n.zi = 0;
        n.tc = 0;
        n.Wj = l;
        n.pubsub = k;
        n.sa = k;
        n.kb = k;
        n.J = k;
        n.Mb = k;
        n.Y = k;
        n.Qb = 0;
        n.ge = 0;
        n.jd = 0;
        n.Xg = j;
        n.nj = 0;
        n.oe = k;
        n.Wb = k;
        n.A = k;

        function Ho(a, b, c) {
            Ld(a.Oh);
            a.m = b;
            a.Db = a.m;
            "loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange error stalled waiting abort emptied".split(" ").forEach(function(a) {
                this.Oh.N(this.m, a, this.Kp)
            }, a);
            var b = a.m,
                d = a.Y.muted;
            b.volume = a.Y.volume / 100;
            b.muted = d;
            b = a.A;
            b.m = a.m;
            c != l && !b.m.parentNode && b.k.appendChild(b.m);
            J(b.m, "video-stream");
            c = b.F.getEnvironmentData();
            c.Ta && c.qc && b.m.setAttribute("controls", j);
            c.loop && b.m.setAttribute("loop",
                j);
            c.ih && b.m.setAttribute("webkit-playsinline", j);
            b.m.setAttribute("x-webkit-airplay", "allow");
            a.a.m = a.m
        }

        function Io(a) {
            a.i = La(a.g.k);
            Fo(a.Wb, a.g);
            Jo(a);
            a.r.Ql(a.g);
            var b = a.da,
                c = [mk];
            Ma(c, Qm, Hk, Pk, Fn, Kn, Pn);
            c.forEach(function(a) {
                var b;
                var c = ia(a);
                b = this.Ei[c];
                if (!b && (b = a(this.F))) {
                    var a = this.Ei[c] = b,
                        i;
                    for (i in this.Ah) a.pubsub.o(i, this.Ah[i]);
                    a.pubsub.o("command_log_timing", this.Np, this)
                }
                b && b.eb(this.F) && (b.create(), this.uc.push(b))
            }, b);
            a.g.xa && (Ko(a, a.g.ia), Lo(a, j));
            a.pubsub.j("videoready")
        }

        function Jo(a) {
            a.g && a.g.ma && !Pf.test(a.g.ma) ? a.A.Gl(a.g.ma) : a.a.Sc && a.a.$c ? a.A.ti() : a.a.Sc && !a.a.$c ? a.A.hg() : a.a.ui && !a.a.$c && !a.a.qc ? a.A.hg() : a.a.ui && a.a.Ta ? a.A.hg() : a.A.ti()
        }

        function Mo(a, b) {
            a.g && a.g.Ja();
            a.g = new Nf(b);
            a.g.o("videoinfo", a.cq, a);
            a.g.o("onStatusFail", a.dq, a);
            a.pubsub.j("internalvideodatachange", "newdata", a.g)
        }
        n.getVideoData = function() {
            return this.g
        };
        n.getEnvironmentData = function() {
            return this.a
        };
        n.ip = function() {
            ne(this.tc);
            this.Qg(this.Y);
            this.A.zm()
        };
        n.Sg = function() {
            var a = {},
                a = this.g,
                b = {};
            a.format && (b.fmt = a.format.a);
            a.me && (b.threed = a.Tc);
            b.plid = a.oa;
            b.list = a.Ha;
            a.B && (b.videoId = a.B);
            a.Mg && (b.infringe = 1);
            a.sc && (b.splay = 1);
            a.i && (b.hbid = a.i);
            a.xb && (b.live = a.xa ? "dvr" : "live");
            a.Wg && (b.autoplay = 1);
            a.V && (b.sdetail = a.V);
            a = b;
            this.m.webkitDecodedFrameCount && (a.hmewdfc = this.m.webkitDecodedFrameCount, a.hmewdrop = this.m.webkitDroppedFrameCount, a.hmewvdbc = this.m.webkitVideoDecodedByteCount, a.hmewadbc = this.m.webkitAudioDecodedByteCount);
            this.m.mozParsedFrames &&
                (a.hmempf = this.m.mozParsedFrames, a.hmemdf = this.m.mozDecodedFrames, a.hmempresented = this.m.mozPresentedFrames, a.hmempainted = this.m.mozPaintedFrames, a.hmempaintdelay = this.m.mozPaintDelay);
            a.fs = this.qa;
            a.volume = this.getVolume();
            a.mos = this.isMuted() ? 1 : 0;
            return a
        };
        n.pp = function() {
            $.Ob("fs")
        };
        n.mp = function() {
            No(this, 5)
        };
        n.np = function() {
            this.a.Lb = this.A.K;
            this.A.Kg();
            this.a.Ta || !this.a.qc ? this.r = new pi : this.r = new ri(this.a);
            this.r.Lk(this.A.Dk());
            this.r.Ea("playpausetoggled", w(this.Ik, this));
            this.r.Ea("seekto", w(this.vo, this));
            this.r.Ea("mutetoggled", w(this.ro, this));
            this.r.Ea("volumechanged", w(this.Rh, this));
            this.r.Ea("speedchanged", w(this.wo, this));
            this.r.Ea("sizechangerequested", w(this.so, this));
            this.r.Ea("fullscreentoggled", w(this.Hk, this));
            this.r.Ea("qualitychanged", w(this.to, this));
            this.r.Ea("beginseeking",
                w(this.mo, this));
            this.r.Ea("endseeking", w(this.oo, this));
            this.r.Ea("watchlater", w(this.zo, this));
            this.r.Ea("watchonyoutube", w(this.Ao, this));
            this.a.ak && this.r.Mk();
            this.a.Re && (this.r.Kk(), Oo(this));
            this.a.Qe || this.r.Ek();
            if (this.a.lj) {
                var a = this.A;
                a.o("showcontrols", this.Sd, this);
                a.o("hidecontrols", this.Ak, this);
                a.o("hidemenus", this.r.Fk, this.r);
                a.o("increasevolume", this.qo, this);
                a.o("decreasevolume", this.no, this);
                a.o("playpausetoggled", this.Ik, this);
                a.o("exitfullscreen", this.po, this);
                a.o("fullscreentoggled",
                    this.Hk, this);
                a.o("seekby", this.uo, this);
                a.o("stop", this.xo, this);
                a.o("publishtomodules", this.vb, this);
                a.o("visitparentsite", this.yo, this);
                Jo(this);
                var a = w(this.ko, this),
                    b = document,
                    c;
                (c = "onfullscreenchange" in b ? "fullscreenchange" : "onmozfullscreenchange" in b ? "mozfullscreenchange" : "onmsfullscreenchange" in b ? "msfullscreenchange" : "onofullscreenchange" in b ? "ofullscreenchange" : "onwebkitfullscreenchange" in b ? "webkitfullscreenchange" : k) && O(b, c, a)
            }
            this.Y = this.Mb.getVolume();
            Ho(this, qh(), l);
            Mo(this, this.kb.args);
            if ("detailpage" == this.a.eventLabel) {
                a: {
                    b = this.Mb;a = this.g.B;
                    if (b.a && (b = b.a.get("yt-player-restore-playhead"))) {
                        a = b[a];
                        break a
                    }
                    a = h
                }
                a && (this.g.ca = a)
            }
            a = this.Mb;
            a.a && a.a.a.yc("yt-player-restore-playhead");
            this.a.Ve = Vn(this.A);
            a = this.A.K;
            this.ve = {
                addEventListener: w(this.addEventListener, this),
                getCurrentTime: w(function() {
                    return this.Db.getCurrentTime()
                }, this),
                getPlayerState: w(this.fk, this),
                seekTo: w(this.Ho, this),
                getDuration: w(function() {
                    return this.Db ? this.Db.getDuration() : 0
                }, this),
                getVolume: w(this.getVolume,
                    this),
                setVolume: w(this.Vo, this),
                isMuted: w(this.isMuted, this),
                mute: w(this.Bk, this),
                unMute: w(this.Ck, this),
                playVideo: w(this.Go, this),
                pauseVideo: w(this.Jk, this),
                stopVideo: w(this.Eo, this),
                getPlaybackQuality: w(this.ck, this),
                setPlaybackQuality: w(this.Io, this),
                getAvailableQualityLevels: w(this.$n, this),
                getVideoBytesLoaded: w(function() {
                    var a = this.Db.getLoadProgressFraction();
                    return Math.floor(a * 1E3)
                }, this),
                getVideoBytesTotal: w(function() {
                    return 1E3
                }, this),
                getVideoLoadedFraction: w(function() {
                        return this.Db.getLoadProgressFraction()
                    },
                    this),
                getVideoStartBytes: w(function() {
                    var a = this.Db,
                        b = 0;
                    a.getDuration() && (b = a.startTime / a.getDuration());
                    return Math.floor(b * 1E3)
                }, this),
                setSize: w(this.Uo, this),
                loadModule: w(this.da.co, this.da),
                unloadModule: w(this.da.Jo, this.da),
                loadVideoById: w(this.hd, this),
                cueVideoById: w(this.nh, this),
                loadVideoByUrl: w(this.Fo, this),
                cueVideoByUrl: w(this.Mo, this),
                getVideoUrl: w(this.zf, this),
                getDebugText: w(this.ao, this),
                addCueRange: w(this.Ko, this),
                loadPlaylist: w(this.Qo, this),
                cuePlaylist: w(this.Lo, this),
                nextVideo: w(this.mj,
                    this),
                previousVideo: w(this.So, this),
                playVideoAt: w(this.Ro, this),
                setLoop: w(this.To, this),
                setShuffle: w(this.setShuffle, this),
                getPlaylist: w(this.No, this),
                getPlaylistId: w(this.Oo, this),
                getPlaylistIndex: w(this.Po, this),
                setOption: w(this.da.Nk, this.da),
                getOption: w(this.da.Nk, this.da),
                getOptions: w(this.da.Wo, this.da),
                getApiInterface: w(function() {
                    var a = [],
                        b;
                    for (b in this.ve) a.push(b);
                    return a
                }, this),
                getVideoData: w(function() {
                    return {
                        video_id: this.g.B,
                        author: this.g.author,
                        title: this.g.title
                    }
                }, this),
                destroy: function() {}
            };
            Hh() && x(this.ve, {
                loadVideoByPlayerVars: w(this.loadVideoByPlayerVars, this),
                cueVideoByPlayerVars: w(this.cueVideoByPlayerVars, this)
            });
            this.Sh = Za(this.ve);
            b = {
                loadVideoById: w(this.loadVideoById, this),
                loadVideoByPlayerVars: w(this.loadVideoByPlayerVars, this),
                cueVideoByPlayerVars: w(this.cueVideoByPlayerVars, this),
                watchVideoById: w(this.watchVideoById, this),
                playVideo: w(this.zk, this),
                seekTo: w(this.nf, this),
                appendToVideoContent: w(this.A.appendToVideoContent, this.A),
                appendAboveVideoControls: w(this.A.appendAboveVideoControls,
                    this.A),
                preparePlayerThreeD: w(this.preparePlayerThreeD, this),
                toggleThreeD: w(this.toggleThreeD, this),
                getAutoplay: w(this.getAutoplay, this),
                getRootNode: w(this.A.bo, this.A),
                getEnvironmentData: w(this.getEnvironmentData, this),
                getPlayerStateObject: w(this.Sj, this),
                getVideoData: w(this.getVideoData, this),
                isFullscreen: w(function() {
                    return this.qa
                }, this),
                Ia: w(this.r.Ia, this.r),
                isPeggedToLive: w(this.isPeggedToLive, this),
                updateVideoData: w(this.updateVideoData, this)
            };
            x(this.Sh, b);
            x(a, this.ve);
            (a = r(this.kb.args.jsapicallback ||
                "onYouTubePlayerReady")) && a(this.a.Lg);
            a = this.da;
            b = {};
            b.loaded = w(this.io, this);
            b.command_ad_break_started = w(this.ho, this);
            b.command_ad_break_ended = w(this.fo, this);
            b.command_broadcast_ad_state_change = w(this.jo, this);
            b.command_pause = Po(this.yb, this);
            b.command_play = Po(this.playVideo, this);
            b.command_seek = Po(this.seekTo, this);
            b.command_disable_controls = w(this.r.Pc, this.r);
            b.command_enable_controls = w(this.r.Ud, this.r);
            b.command_redirect_controls = w(this.r.Lh, this.r);
            b.command_stop_redirect_controls = w(this.r.Td,
                this.r);
            b.command_redirected_show_is_playing = w(this.r.qe, this.r);
            b.command_add_cuerange = w(this.Zn, this);
            b.command_remove_cuerange = w(this.Bo, this);
            b.command_remove_cuerange_all = w(this.Co, this);
            b.command_preroll_ready = w(this.eo, this);
            b.command_hide_all_dialogs = w(this.A.Gk, this.A);
            b.command_share = w(this.Do, this);
            b.command_log = w(this.Uj, this);
            b.publish_external_event = w(this.lo, this);
            a.Ah = b;
            a.F = this.Sh;
            uf() ? this.a.ub || "detailpage" == this.a.eventLabel && !this.a.wa && !this.a.Ta ? Qo(this) : "leanback" != this.a.eventLabel &&
                Ro(this, j) : No(this, 5, oe("HTML5_NO_AVAILABLE_FORMATS_FALLBACK"))
        };

        function Ro(a, b) {
            (a.xd = b) ? (a.pubsub.j("initializingmode"), a.A.hm(a.g), So(a, Qe(a.J, 2))) : a.A.Ki()
        }

        function Qo(a) {
            if (a.g.gh && !a.a.Nb) No(a, 5);
            else {
                a.pubsub.j("initializingmode");
                Ro(a, l);
                if (a.m) {
                    var b = a.A;
                    N(b.m);
                    b.m = k;
                    ik.releaseTag(a.m)
                }
                a.e.Wd = y();
                Ho(a, ik.getTag());
                So(a, Qe(a.J, 1));
                To(a) && (a.g && a.g.jb.length ? Io(a) : (b = Dh(a.a, a.g), $f(a.g, b)))
            }
        }

        function Po(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments);
                tc(function() {
                    a.apply(b || this, c)
                })
            }
        }
        n.ho = function() {
            this.pubsub.j("command_ad_break_started")
        };
        n.fo = function() {
            this.pubsub.j("command_ad_break_ended")
        };
        n.jo = function(a, b, c) {
            "leanback" == this.a.eventLabel && Hh() && (0 == a ? this.Db = this.m : this.Db = b, this.pubsub.j("onAdStateChange", a, c))
        };
        n.Uj = function(a, b) {
            b.event = a;
            vo(this.e, b)
        };
        n.Do = function() {
            this.pubsub.j("SHARE_CLICKED", this.g.B, this.g.Ha)
        };
        n.Kp = function(a) {
            var b = a.target;
            if (b.currentSrc) {
                switch (a.type) {
                    case "durationchange":
                        this.g.xa || Ko(this, b.getDuration(j));
                        break;
                    case "abort":
                    case "error":
                        var c = {
                                event: "streamingerror"
                            },
                            b = a.target.error;
                        c.ec = 107;
                        b && b.code && (b.code == b.MEDIA_ERR_ABORTED ? c.ec = 200 : b.code == b.MEDIA_ERR_NETWORK ? c.ec = 201 : b.code == b.MEDIA_ERR_DECODE ? c.ec = 202 : b.code == b.MEDIA_ERR_SRC_NOT_SUPPORTED && (c.ec = 203));
                        vo(this.e, c);
                        sc(this.k);
                        this.g.Rd && Ha(ko, c.ec) && (b = this.e, c = c.ec, b.k || (b.k = new yk("error-__ec__")), c = {
                                metric: b.k.Ab({
                                    ec: c
                                })
                            },
                            wo(b, c));
                        break;
                    case "ended":
                        So(this, Qe(this.J, 8));
                        break;
                    case "loadeddata":
                        this.n && window.clearTimeout(this.n);
                        break;
                    case "loadedmetadata":
                        $.Ob("fvb");
                        this.g.ca && (this.m.currentTime = this.g.ca);
                        Uo(this);
                        break;
                    case "loadstart":
                        $.Ob("gv");
                        this.tc && ne(this.tc);
                        this.tc = me(w(this.$j, this), 100);
                        break;
                    case "playing":
                        this.tc && ($.Ob("plev"), this.$j());
                        break;
                    case "progress":
                    case "suspend":
                        this.Uc();
                        this.pubsub.j("onLoadProgress", this.getLoadProgressFraction());
                        break;
                    case "stalled":
                        vo(this.e, {
                            event: "streamingerror",
                            ec: 300
                        });
                        break;
                    case "timeupdate":
                        this.Uc(), this.pubsub.j("onVideoProgress", b.currentTime)
                }
                if (this.oe) switch (b = this.oe, c = this.g, a.type) {
                    case "abort":
                    case "emptied":
                    case "ended":
                    case "error":
                    case "seeking":
                    case "stalled":
                    case "suspend":
                        Ao(b);
                        break;
                    case "progress":
                        var d = a.target.buffered;
                        1 > d.length || (c = {
                            Jn: c.format.b,
                            Zj: d.end(a.target.getBufferedTimeRangeIndex()),
                            timeStamp: a.timeStamp
                        }, b.a.push(c), 15 <= b.a.length && Ao(b))
                }
                b = this.J;
                if (R(b, 256)) a = b;
                else {
                    c = b.a;
                    switch (a.type) {
                        case "ended":
                            c = 28;
                            break;
                        case "pause":
                            !R(b,
                                64) && !R(b, 4) && (c = 8);
                            break;
                        case "play":
                            c = 16;
                            break;
                        case "playing":
                            c = 16;
                            break;
                        case "seeked":
                            c &= -33;
                            break;
                        case "seeking":
                            c = (c | 32) & -5;
                            break;
                        case "waiting":
                            c |= 1
                    }
                    a = Qe(b, c)
                }
                So(this, a)
            }
        };

        function Vo(a, b) {
            a.A.li();
            Ro(a, l);
            a.A.Cm() ? b ? a.A.ij(b) : a.A.ij(oe("HTML5_DEFAULT_FALLBACK")) : a.kb.fallbackMessage && a.kb.fallbackMessage()
        }
        n.toggleThreeD = function() {
            var a = this.Wb,
                b = this.g;
            b.toggleThreeD();
            Fo(a, b);
            this.preparePlayerThreeD();
            this.r && (this.r.Ri(this.g.jb), this.r.Oi(this.g.Ic))
        };
        n.ck = function() {
            var a, b = Do(this.Wb.a, this.g);
            b && (a = b.pb);
            return a
        };
        n.Io = function(a) {
            var b = this.Wb,
                c = this.g;
            c.n = a;
            Fo(b, c)
        };
        n.$n = function() {
            for (var a = this.g, b = [], c = 0; c < xf.length; c++) Vf(a, xf[c]) && b.push(xf[c]);
            return b
        };
        n.$q = function() {
            var a = {
                    lq: this.g.B,
                    iq: "WL",
                    lm: k,
                    cb: this.jq,
                    Ib: this.km,
                    Mc: this
                },
                b = {
                    video_ids: a.lq,
                    playlist_id: a.Ha || "",
                    new_playlist_name: a.kq || "",
                    session_token: le("addto_ajax")
                },
                c = je("PLAYBACK_ID");
            c && (b.plid = c);
            c = {};
            a.hq && (c["private"] = a.hq);
            a.lm && (c.feature = a.lm);
            var d = "";
            switch (a.iq) {
                case "PL":
                    d = a.kq ? "action_add_to_new_playlist" : "action_add_to_playlist";
                    break;
                case "FL":
                    d = "action_add_to_favorites";
                    break;
                case "WL":
                    d = "action_add_to_watch_later_list"
            }
            c[d] = 1;
            se("/addto_ajax", {
                gq: j,
                format: "XML",
                method: "POST",
                ug: c,
                jm: b,
                Mc: a.Mc,
                Ib: a.Ib,
                cb: a.cb
            })
        };
        n.jq = function() {
            this.r.Bm()
        };
        n.km = function(a, b) {
            this.r.Am(b && b.error_message)
        };

        function eo(a, b) {
            var c = {};
            b && (c = so(a.e));
            c.debug_videoId = a.g.B;
            c.debug_playbackQuality = a.ck();
            c.debug_date = (new Date).toString();
            return JSON.stringify(c)
        }
        n.ao = function() {
            return eo(this)
        };
        n.preparePlayerThreeD = function(a) {
            this.g.gf && this.r && this.r.Oi(this.g.Ic);
            (a = !!this.g.me || !!this.g.Ic || !a) && this.m.setAttribute("mozStereoMode", "1");
            if (Gn()) {
                this.m.setAttribute("mozStereoMode", a ? "1" : "0");
                var b = cf[a ? this.g.Vd : 0],
                    a = document.createElement("NvStereoExtDataElement");
                a.setAttribute("stereoMode", b);
                id(document.documentElement, a);
                document.createEvent ? (b = document.createEvent("HTMLEvents"), b.initEvent("3DModeEvent", j, j), a.dispatchEvent(b)) : (b = document.createEventObject(), a.fireEvent("on3DModeEvent",
                    b))
            }
        };
        n.getCurrentTime = function() {
            return this.m.getCurrentTime()
        };
        n.fk = function() {
            return Re(this.J)
        };
        n.Sj = function() {
            return this.J
        };
        n.kp = function(a) {
            this.A.Hh(a);
            var b;
            0 < Nk(a, 16) ? (this.r.qe(j), b = j) : 0 > Nk(a, 16) ? (this.r.qe(l), Lo(this, l)) : 0 > Nk(a, 4) && this.r.qe(R(a.a, 16));
            0 > Nk(a, 32) && (this.r.Te(this.getCurrentTime()), this.r.ll(this.getCurrentTime(), this.getDuration()));
            0 < Nk(a, 64) ? (b = l, Lo(this, l)) : 0 > Nk(a, 64) && R(this.J, 16) && this.m.playVideo();
            R(a.a, 4) && (this.yb(), b = l, this.r.kl());
            this.a.rc && b != k && (this.A.qf(b), this.Sd());
            if (R(a.a, 256)) {
                a = a.a;
                ne(this.tc);
                co(this);
                a = a.getData();
                if (5 == a.errorCode) {
                    var c = a.message;
                    if (this.kb.fallback) {
                        b =
                            this.kb;
                        this.g && x(b.args, this.g.wb);
                        b.args.html5_unavailable = "1";
                        var d = this.A.K.parentNode;
                        b.fallbackMessage = w(function() {
                            d.appendChild(this.A.K);
                            Vo(this, c)
                        }, this);
                        this.kb.fallback(b, c)
                    } else Vo(this, c)
                } else Vo(this, a.message);
                this.pubsub.j("onError", a.errorCode)
            }
        };
        n.rp = function(a) {
            if ("newdata" == a) {
                sc(this.k);
                this.e && (this.e.Ja(), delete this.e);
                var b = this.e = new oo,
                    c = this.a,
                    d = w(this.Sg, this),
                    f = w(this.getDuration, this),
                    g = w(this.getCurrentTime, this);
                b.g = this.g;
                b.a = c;
                b.oj = b.a.gb + "get_video";
                b.$g = d;
                b.n = f;
                b.Qc = g;
                b.b = l;
                b = this.da;
                b.uc.forEach(function(a) {
                    a.destroy()
                });
                b.uc = [];
                this.r.Cb = {};
                this.r.Td();
                this.r.Ej(this.g);
                this.sa && this.sa.reset();
                this.g.Rd && wo(this.e, {
                    metric: "connected"
                });
                this.C = {}
            }
            this.A.Yg(this.g);
            this.r.Ij(this.g);
            this.nj = Math.min(0.8 * this.g.ia, 180);
            this.Y.volume = (this.Y.nonNormalized || this.Y.volume) * this.g.Ng;
            this.g.Mg ? (b = this.m, b.volume = 0, b.muted = j, this.r.hh(0, j), this.r.Pc(["audio"])) : this.r.Ia("audio") && (this.r.Ud(["audio"]), this.Qg(this.Y));
            this.g.xb && !this.g.xa ? this.r.Pc(["seek"]) : this.r.Ud(["seek"]);
            if (this.g.L || this.g.Ua.focEnabled || this.g.Ua.rmktEnabled) b = 1E3 * this.g.ia, Wo(this, "part2viewed", 0, b), Wo(this, "videoplaytime25", 0.25 * b, b), Wo(this, "videoplaytime50", 0.5 * b, b), Wo(this, "videoplaytime75", 0.75 * b, b), Wo(this, "videoplaytime100", b, 2147483647),
                Wo(this, "conversionview", b, 2147483647);
            this.vb("onVideoDataChange", a);
            this.pubsub.j("onVideoDataChange", a, this.g)
        };
        n.op = function(a, b) {
            a == this.g && (this.r.fm(b.pb), this.xd || (0 == this.i.length ? (Ue(this.sa), this.playVideo()) : this.yb()), this.pubsub.j("onPlaybackQualityChange", b.pb))
        };
        n.hp = function() {
            if (this.a.Pg) {
                var a = this.b = new cg(this.a.C),
                    b = w(this.ep, this);
                a.Yh = b;
                a.Ya && a.Yh()
            }
            if (this.a.cf) {
                var a = this.a,
                    c;
                b = this.Mb;
                b.e && (c = b.e.get("yt-player-bwc"));
                a.Rk = c;
                this.oe = new zo;
                this.oe.o("update", this.fp, this)
            } else this.oe = k
        };

        function Wo(a, b, c, d) {
            b in a.C || (c = new Me(c, d, {
                id: b,
                priority: 0
            }), c.pubsub.o("onEnter", a.um, a), c.pubsub.o("onExit", a.um, a), a.sa.gm(c), a.C[b] = c)
        }
        n.um = function(a) {
            var b = a.getId();
            "part2viewed" == b ? (this.g.L && ye(this.g.L), this.g.ib && ye(this.g.ib)) : "videoplaytime25" == b || "videoplaytime50" == b || "videoplaytime75" == b ? po(this.e) : "conversionview" == b && Xo(this);
            this.g.Lb && (b = a.getId(), b = de(this.g.Lb, {
                label: b
            }), ye(b));
            this.sa.dm(a)
        };

        function Xo(a) {
            if (!a.g.Hl) {
                a.g.Ua.eventLabel = a.a.eventLabel;
                a.g.Ua.playerStyle = a.a.Aa;
                a.g.Ua.vid = a.g.B;
                a.g.Ua.isAd = !!("adunit" == a.a.eventLabel || a.g.L);
                var b = nk("view", a.g.Ua);
                b && ye(b);
                a.g.Hl = j
            }
        }

        function So(a, b) {
            if (b.a != a.J.a) {
                var c = new Bo(b, a.J);
                a.J = b;
                var d = "embedded" == a.a.eventLabel;
                if (R(b, 4) && (a.qa || d) && a.getAutoplay()) a.mj();
                else {
                    a.pubsub.j("statechange", c);
                    d = a.sa;
                    if (d.We && !d.zb)
                        if (Ve(d), R(c.a, 4)) {
                            d.e = k;
                            for (var f = [], g = 0; g < d.a.length; g++) {
                                var i = d.a[g];
                                i.Ue && 2147483647 > i.end && (f.push(i), d.a.splice(g--, 1))
                            }
                            g = [];
                            if (f.length)
                                for (i = 0; i < f.length; i++) g.push(["onExit", f[i]]);
                            d = g.concat(We(d, Ie(d.Pb, d.b)));
                            for (g = 0; g < d.length; g++) f = d[g], i = f[1], i.pubsub.j.apply(i.pubsub, f)
                        } else R(c.a, 32) ? (d.b = 1E3 *
                            d.k(), sc(d.i), d.i.start(), d.Va()) : (sc(d.i), R(c.b, 32) ? R(c.a, 16) && !d.n() && Be(d.Pb, Math.max(d.b - 2E3, 0)) && (d.de = tc(w(d.Va, d))) : d.Va());
                    a.vb("onStateChange", c);
                    a.pubsub.j("onStateChange", Re(b));
                    R(b, 4) && (a.g.xb && (a.g.xa ? (Ko(a, a.m.currentTime), a.Uc()) : a.r.Pc(["play_pause"])), a.Sd())
                }
            }
        }

        function No(a, b, c) {
            So(a, Qe(a.J, 256, {
                errorCode: b,
                message: c
            }))
        }
        n.gp = function() {
            return this.m.paused || this.m.ended
        };
        n.isPeggedToLive = function() {
            return this.Zi
        };

        function Lo(a, b) {
            a.g.xa && a.Zi != b && (a.Zi = b, Xc(a.A.K, "html5-live-dvr-engaged", !b))
        }
        n.seekTo = function(a) {
            var a = a || 0,
                b = 1 > this.m.seekable.length ? NaN : this.m.seekable.end(this.m.seekable.length - 1);
            a > b && (a = b, Lo(this, j));
            this.xd ? (this.g.ca = a, Qo(this)) : this.m.seekTo(a)
        };
        n.getDuration = function() {
            return this.m ? this.m.getDuration() : 0
        };

        function Ko(a, b) {
            a.m.tg = b;
            a.g.ia != b && (a.g.ia = b, a.pubsub.j("internalvideodatachange", "videoinfo", a.g))
        }
        n.getLoadProgressFraction = function() {
            return this.m.getLoadProgressFraction()
        };
        n.getVolume = function() {
            return this.Y.volume
        };
        n.Vo = function(a) {
            this.Y.volume = a;
            this.pubsub.j("internalvolumechange", this.Y)
        };
        n.Rh = function(a) {
            this.Y = a;
            this.pubsub.j("internalvolumechange", this.Y)
        };
        n.isMuted = function() {
            return this.Y.muted
        };
        n.Bk = function() {
            this.Y.muted = j;
            this.pubsub.j("internalvolumechange", this.Y)
        };
        n.Ck = function() {
            this.Y.muted = l;
            this.pubsub.j("internalvolumechange", this.Y)
        };

        function Yo(a, b, c, d) {
            "object" == typeof b && b != k && (c = b.start, d = b.vq, b = b.video_id);
            return {
                list: a.list,
                start: c,
                video_id: b,
                vq: d
            }
        }
        n.loadVideoById = function(a, b, c) {
            return this.loadVideoByPlayerVars(Yo(this, a, b, c))
        };
        n.loadVideoByPlayerVars = function(a) {
            co(this);
            Mo(this, a);
            if (!To(this)) return l;
            Qo(this);
            return j
        };
        n.hd = function(a, b, c) {
            this.loadVideoById(a, b, c) && (this.g.sc = j)
        };
        n.Fo = function(a, b, c) {
            var d = jo(a);
            this.hd(d, b, c);
            (a = (new Ac(a)).a) && Ch(this.a, a)
        };
        n.nh = function(a, b, c) {
            return this.cueVideoByPlayerVars(Yo(this, a, b, c))
        };
        n.cueVideoByPlayerVars = function(a) {
            co(this);
            Mo(this, a);
            To(this) && Ro(this, j)
        };
        n.Mo = function(a, b, c) {
            var d = jo(a);
            this.nh(d, b, c);
            (a = (new Ac(a)).a) && Ch(this.a, a)
        };
        n.watchVideoById = function(a, b) {
            if (this.g.B == a) this.seekTo(0, j);
            else if (!this.qa && "detailpage" == this.a.eventLabel) {
                var c = {};
                b && (c.feature = b);
                c.list = this.g.Ha;
                window.location.href = Zo(this, a, c)
            } else this.loadVideoById(a)
        };
        n.Lo = function(a, b, c, d) {
            this.Hd = j;
            $o(this, a, b, c, d)
        };
        n.Qo = function(a, b, c, d) {
            this.Hd = l;
            $o(this, a, b, c, d)
        };

        function $o(a, b, c, d, f) {
            var g = b;
            if ("string" == typeof b || b instanceof Array) g = {
                api: b,
                index: c,
                startSeconds: d,
                suggestedQuality: f
            };
            Ah(a.a, g);
            a.pubsub.j("internalenvironmentdatachange")
        }
        n.ep = function() {
            this.g.Wg || !this.Hd ? this.hd(fg(this.b).B, this.b.ca, this.b.e) : this.nh(fg(this.b).B, this.b.ca, this.b.e)
        };
        n.getAutoplay = function() {
            return !(!this.b || !(this.b.loop || this.b.fa + 1 < this.b.ea.length))
        };
        n.mj = function() {
            this.b && (this.b.Ya ? (this.b.loop || this.b.fa + 1 < this.b.ea.length) && this.hd(this.b.Hc().B) : (this.b.Hc(), this.Hd = l))
        };
        n.So = function() {
            this.b && (this.b.Ya ? (this.b.loop || 0 <= this.b.fa - 1) && this.hd(gg(this.b).B) : (gg(this.b), this.Hd = l))
        };
        n.Ro = function(a) {
            this.b && (this.b.Ya ? this.hd(fg(this.b, a).B) : this.Hd = l, eg(this.b, a))
        };
        n.No = function() {
            if (!this.b) return k;
            for (var a = [], b = 0; b < this.b.Gf; b++) a[b] = fg(this.b, b).B;
            return a
        };
        n.Oo = function() {
            return !this.b || !this.b.b ? k : this.b.b.toString()
        };
        n.Po = function() {
            return this.b ? this.b.fa : k
        };
        n.setShuffle = function(a) {
            this.b && this.b.setShuffle(a)
        };
        n.To = function(a) {
            this.b && (this.b.loop = a)
        };

        function To(a) {
            if (a.g.B) return j;
            No(a, 2);
            return l
        }
        n.zf = function() {
            return Zo(this, this.g.B)
        };

        function Zo(a, b, c) {
            b = {
                list: a.g.Ha,
                v: b
            };
            a.a.eventLabel && (b.feature = "player_" + a.a.eventLabel);
            c && x(b, c);
            return P(a.a.na + "://" + ("www.youtube-nocookie.com" == window.location.host ? "www.youtube.com" : window.location.host) + "/watch", b)
        }
        n.Ko = function() {};
        n.Zn = function(a) {
            var b = this.g.ia;
            0 < b && a.forEach(function(a) {
                a.visible && this.r.Ca(a.start / (1E3 * b))
            }, this);
            this.sa.gm.apply(this.sa, a)
        };
        n.Bo = function(a) {
            var b = this.g.ia;
            0 < b && a.forEach(function(a) {
                a.visible && this.r.vd(a.start / (1E3 * b))
            }, this);
            this.sa.dm.apply(this.sa, a)
        };
        n.Co = function(a) {
            for (var b = this.sa, c = b.Za.length - 1; 0 <= c; c--) b.Za[c].Si == a && Te(b, c);
            b.Va()
        };
        n.eo = function(a) {
            this.i = this.i.filter(function(b) {
                return b != a
            });
            0 == this.i.length ? (Ue(this.sa), 0 < He(this.sa.Pb, -2147483648).length ? So(this, Qe(this.J, this.J.a & -2)) : this.playVideo()) : this.yb()
        };
        n.addEventListener = function(a, b) {
            var c = b;
            "string" == typeof b && (c = function() {
                r(b).apply(window, arguments)
            });
            this.pubsub.o(a, c)
        };
        n.wo = function(a) {
            var b = this.m,
                a = parseFloat(a);
            b.defaultPlaybackRate = a;
            b.playbackRate = a
        };
        n.eq = function() {
            vo(this.e, {
                event: "streamingerror",
                ec: 102
            })
        };
        n.ro = function() {
            this.isMuted() ? this.Ck() : this.Bk()
        };
        n.Ik = function(a) {
            if (!this.r.Ia("play_pause") && (!this.a.wa || !this.xd || ik.hasTags(h))) {
                var b = qi(this.r);
                b ? b.lg("control_toggle_play_pause") : this.xd ? Qo(this) : R(this.J, 8) ? this.playVideo(a) : this.yb(a)
            }
        };
        n.xo = function() {
            this.Jk()
        };
        n.$j = function() {
            if (0 < this.m.currentTime && 0 < this.m.getDuration() && !this.Wj) {
                ne(this.tc);
                this.g.B && $.info("docid", this.g.B);
                this.g.oa && $.info("plid", this.g.oa);
                this.g.i && $.info("hbid", this.g.i);
                0 < this.g.ca && $.info("start", this.g.ca.toString());
                $.info("fmt", this.g.format.a.toString());
                $.info("tds", Math.round(this.getLoadProgressFraction() * this.getDuration()).toString());
                $.Ob("aft");
                if ("detailpage" == this.a.eventLabel) {
                    var a = this.da.wh,
                        b;
                    for (b in a) $.Ob(b, a[b]);
                    var a = this.da.uh,
                        c;
                    for (c in a) $.info(c, a[c]);
                    $.ef()
                }
                this.Wj = j;
                c = this.e;
                if (!c.b) {
                    a = so(c);
                    a.Rg = j;
                    c.Ub = c.Qc();
                    c.ne = c.Ub;
                    a.b = [c.Ub];
                    a.e = a.b;
                    c.yh = (y() - c.Wd) / 1E3;
                    mo(a);
                    c.g.Tg && (oo.prototype.xh = [10 + c.g.Se, 10, 10, 40 + c.g.Og - c.g.Se, 40], c.i != h && ne(c.i), c.i = me(w(c.In, c), 100), c.e || (qo(c), c.e = me(w(c.Vj, c), 1E4)));
                    c.a.Xd && !c.b && (a = c.a, b = c.g, a = {
                        noflv: "1",
                        html5: "1",
                        video_id: b.B,
                        plid: b.oa,
                        referrer: a.referrer,
                        eurl: a.a,
                        framer: a.k,
                        feature: a.i,
                        fmt: b.format ? b.format.a : 0,
                        ptk: b.e,
                        skl: b.tj
                    }, x(a, to(c)), a = P(c.a.gb + "user_watch", a), ye(a));
                    c.g.e && c.g.z && ye(P(c.a.gb + "ptracking", {
                        html5: "1",
                        video_id: c.g.B,
                        plid: c.g.oa,
                        ptk: c.g.e,
                        oid: c.g.za,
                        ptchn: c.g.z,
                        pltype: c.g.hb,
                        content_v: c.a.L
                    }));
                    if (c.g.sj && !c.b) {
                        a = c.a;
                        b = c.g;
                        var d = {
                            noflv: 1,
                            video_id: b.B,
                            el: a.eventLabel,
                            ps: a.Aa,
                            referrer: a.referrer,
                            eurl: a.a,
                            framer: a.k,
                            fmt: b.format ? b.format.a : 0,
                            ptk: b.e,
                            subscribed: b.a,
                            t: b.ya
                        };
                        a.ub && (d.autoplay = "1");
                        b.sc && (d.splay = "1");
                        0 < b.ca && (d.start = 1E3 * b.ca);
                        b.Vg && (d.tmi = "1");
                        a = P(c.oj, d);
                        ye(a)
                    }
                    c.g.Rd && wo(c, {
                        metric: "playback"
                    });
                    c.b = j
                }
                this.g.Rd && this.e.b && this.k.start()
            }
        };
        n.lp = function() {
            var a = this.e,
                b = this.ge;
            a.nm != b && (wo(a, {
                metric: "heartbeat",
                tpmt: this.jd
            }), a.nm = b)
        };
        n.io = function() {
            this.pubsub.j("onApiChange")
        };
        n.Qg = function(a) {
            a.volume = Lb(a.volume, 0, 100);
            a.nonNormalized = a.volume / this.g.Ng;
            if (this.a.qc) {
                var b = this.Mb;
                if (b.b) {
                    var c = {};
                    c.volume = isNaN(a.volume) ? b.getVolume().volume : Lb(a.volume, 0, 100);
                    c.nonNormalized = a.nonNormalized;
                    c.muted = a.muted == h ? b.getVolume().muted : a.muted;
                    try {
                        eh(b.b, "yt-player-volume", c)
                    } catch (d) {}
                }
            }
            this.r.Ia("audio") || (this.r.hh(a.volume, a.muted), b = this.m, c = a.muted, b.volume = a.volume / 100, b.muted = c, this.pubsub.j("onVolumeChange", a))
        };
        n.Uc = function() {
            this.Qb = this.m.currentTime;
            if (R(this.J, 16) && this.Xg) {
                0 < this.ge && this.Qb > this.ge && (this.jd += this.Qb - this.ge);
                if (this.g.ia && !this.g.Jj && this.jd >= this.nj) {
                    var a;
                    a = this.a;
                    var b = this.g,
                        c = Lb(this.Qb / b.ia, 0, 1),
                        c = {
                            html5: "1",
                            video_id: b.B,
                            eurl: a.a,
                            framer: a.k,
                            referrer: a.referrer,
                            feature: a.i,
                            ps: a.Aa,
                            el: a.eventLabel,
                            hl: a.e,
                            list: b.Ha,
                            w: c,
                            l: b.ia,
                            plid: b.oa,
                            t: b.ya
                        };
                    a.ub && (c.autoplay = "1");
                    b.sc && (c.splay = "1");
                    b.a && (c.subscribed = b.a);
                    b.i && (c.hbid = b.i);
                    a = P(a.gb + "set_awesome", c);
                    ye(a);
                    this.g.Jj = j
                }
                this.g.ia &&
                    (this.g.u && this.jd >= this.g.u) && (a = this.e, a.b && a.g.u && (b = so(a), b.pj = j, uo(a, b)), this.g.u = NaN);
                this.g.ia && this.jd >= this.g.qj && Xo(this)
            }
            if (this.g.rj && (a = this.g.kh, 1 == a && 0 < this.Qb || 2 == a && 20 <= this.Qb || 3 == a && 30 <= this.Qb)) a = this.e, a.b && (b = a.a, c = a.g, a = {
                ns: "yt",
                html5: "1",
                docid: c.B,
                plid: c.oa,
                fmt: c.format ? c.format.a : 0,
                el: b.eventLabel,
                ps: b.Aa,
                subscribed: c.a,
                yttk: "1",
                st: a.Qc(),
                et: a.Qc(),
                ctp: c.kh,
                vid: b.z
            }, a = P("//web.archive.org/web/20120622093201/http://s2.youtube.com/s", a), ye(a)), this.g.kh++;
            this.ge = this.Qb;
            a = this.getCurrentTime();
            0 < a && (this.g.ca = a, this.r.Te(a));
            this.g.xa && a > this.getDuration() && (b = this.getDuration(), 0 == b && (b = a), Ko(this, 1.2 * b));
            b = this.getDuration();
            b = Infinity == b ? 1 : b ? this.getCurrentTime() / b : 0;
            this.r.mh(b);
            if (this.m.buffered && 0 < this.m.buffered.length) {
                a = this.getLoadProgressFraction();
                var d = this.m,
                    b = d.buffered;
                !b || !b.length ? b = j : (c = d.getBufferedTimeRangeIndex(), 0 < c ? b = l : (d = d.getCurrentTime(), b = b.start(c) > d || b.end(c) < d));
                b ? So(this, Qe(this.J, this.J.a | 1)) : So(this, Qe(this.J, this.J.a & -2));
                this.r.ee(a);
                b = this.m.getBufferedTimeRangeIndex();
                !$.timer.l2s &&
                    2 < this.m.buffered.end(b) && $.Ob("l2s");
                this.m.buffered.end(b);
                this.g.xa ? this.isPeggedToLive() || (a = (1 > this.m.seekable.length ? NaN : this.m.seekable.end(this.m.seekable.length - 1)) / this.getDuration(), this.r.ee(a)) : this.r.ee(a)
            } else 0 < a && this.r.mh(b);
            this.getDuration();
            this.lh && window.clearTimeout(this.lh);
            !this.m.paused && !this.m.ended && (this.lh = this.m.played && 0 == this.m.played.length ? window.setTimeout(w(this.Uc, this), 100) : window.setTimeout(w(this.Uc, this), 500))
        };
        n.fp = function(a) {
            try {
                eh(this.Mb.e, "yt-player-bwc", a)
            } catch (b) {}
            this.a.Rk = a
        };
        n.mo = function() {
            this.pubsub.j("beginseeking");
            this.vb("beginseeking");
            So(this, Qe(this.J, this.J.a | 64));
            R(this.J, 16) && this.yb()
        };
        n.oo = function() {
            this.vb("endseeking");
            this.pubsub.j("endseeking");
            So(this, Qe(this.J, this.J.a & -65));
            this.Sd()
        };
        n.vo = function(a) {
            var b = R(this.J, 64);
            b || So(this, Qe(this.J, this.J.a | 64));
            this.nf(a * this.getDuration(), j);
            this.Xg = l;
            this.Uc();
            this.Xg = j;
            this.pubsub.j("seekto", a);
            this.vb("seekto", a);
            b || So(this, Qe(this.J, this.J.a & -65))
        };
        n.uo = function(a) {
            this.nf(this.getCurrentTime() + a, j)
        };
        n.so = function(a) {
            this.qa && bo(this, l);
            a != this.a.kd && (this.a.kd = a, this.pubsub.j("SIZE_CLICKED", a), Oo(this))
        };
        n.po = function() {
            this.qa && bo(this, l)
        };
        n.Hk = function() {
            bo(this, !this.qa)
        };
        n.to = function(a) {
            var b = this.Wb,
                c = this.g;
            c.n = a;
            Fo(b, c)
        };
        n.zo = function() {
            ve("addto_ajax", w(this.$q, this), w(this.km, this))
        };
        n.Ao = function() {
            ap(this, this.zf())
        };
        n.yo = function() {
            this.g && this.g.Vc ? ap(this, this.g.Vc) : ap(this, this.zf())
        };
        n.qo = function() {
            this.Rh({
                volume: this.Y.volume + 5,
                muted: l
            })
        };
        n.no = function() {
            this.Rh({
                volume: this.Y.volume - 5,
                muted: l
            })
        };
        n.ko = function() {
            var a = zd("fullScreen", document);
            a == k && (a = !this.qa);
            bp(this, a)
        };

        function bp(a, b) {
            a.A.xk(b);
            if ("detailpage" == a.a.eventLabel)
                if (b) {
                    var c = r("yt.www.lists.getState"),
                        d = c ? c() : h;
                    if (d && 0 <= d.index) {
                        var f = [];
                        d.videoIds.forEach(function(a) {
                            if (a = d.videoData ? d.videoData[a] : h) a.video_id = a.id, f.push(a)
                        });
                        a.b = new cg({
                            videoList: f,
                            loop: d.autoPlay,
                            index: d.index
                        });
                        a.a.Pg = j
                    }
                } else if ((c = r("checkCurrentVideo")) && je("VIDEO_ID") != a.g.B) {
                var g = a.Mb;
                try {
                    var i = {};
                    i[a.g.B] = a.m.currentTime;
                    eh(g.a, "yt-player-restore-playhead", i)
                } catch (m) {}
                c(a.g.B);
                a.pubsub.j("openingpage")
            }
            a.qa = b;
            !b && !a.a.rc ?
                a.A.qf(l) : a.A.qf(j);
            a.Sd();
            Oo(a);
            a.r.wk(b)
        }

        function Oo(a) {
            var b = "small";
            a.qa ? b = "fullscreen" : a.a.kd && (b = "large");
            a.A.Bi(b)
        }
        n.qp = function() {
            Uo(this)
        };
        n.lo = function(a, b) {
            this.pubsub.j(a, b)
        };
        n.vb = function(a, b) {
            this.da && B(this.da.uc, function(c) {
                c.pubsub.j(a, b)
            })
        };
        n.playVideo = function(a) {
            this.xd ? Qo(this) : (a && cp(this), this.m.currentSrc != Wf(this.g) ? (a = Wf(this.g), rh(this.m, a), this.n && window.clearTimeout(this.n), this.n = Q(w(this.eq, this), 15E3), Q(w(function() {
                this.m.playVideo()
            }, this), 0)) : (this.m.playVideo(), this.g.xb && !this.g.xa && this.seekTo(Infinity)))
        };
        n.yb = function(a) {
            a && cp(this);
            this.m.pause()
        };

        function co(a) {
            if (!R(a.J, 128)) {
                var b = a.e;
                po(b);
                b.G();
                a.yb();
                a.g.ca = a.m.currentTime;
                sh(a.m);
                So(a, Qe(a.J))
            }
        }
        n.updateVideoData = function(a) {
            Rf(this.g, a);
            this.pubsub.j("internalvideodatachange", "videoinfo", this.g)
        };
        n.Go = function() {
            this.g.sc = j;
            this.zk()
        };
        n.zk = function() {
            if (!this.r.Ia("play_pause")) {
                var a = qi(this.r);
                a ? a.lg("control_play") : this.playVideo()
            }
        };
        n.Jk = function() {
            if (!this.r.Ia("play_pause")) {
                var a = qi(this.r);
                a ? a.lg("control_pause") : this.yb()
            }
        };
        n.Eo = function() {
            this.r.Ia("play_pause") || co(this)
        };
        n.Ho = function(a, b) {
            this.g.sc = j;
            this.nf(a, b)
        };
        n.nf = function(a, b) {
            this.r.Ia("seek") || this.seekTo(a, b)
        };

        function bo(a, b) {
            if (Id())
                if (b) {
                    var c = a.A.K,
                        d = zd("requestFullScreen", c);
                    d && d.apply(c)
                } else(c = zd("cancelFullScreen", document)) && c.call(document);
            else a.pubsub.j("onFullScreenToggleRequest"), bp(a, b)
        }

        function ap(a, b) {
            a.qa && bo(a, l);
            a.pubsub.j("openingpage");
            ym(b)
        }
        n.cq = function(a) {
            Bh(this.a, a);
            this.pubsub.j("internalvideodatachange", "videoinfo", this.g);
            this.g.gh && !this.a.Nb ? No(this, 5) : this.g && this.g.jb.length || (!this.g || !this.g.k.length || this.g.$d.length ? 0 : 0 <= Ca(this.g.k, "fresca")) ? Io(this) : No(this, 5, oe("HTML5_NO_AVAILABLE_FORMATS_FALLBACK"))
        };
        n.dq = function(a) {
            No(this, a.errorcode, unescape(a.reason))
        };
        n.jp = function() {
            this.yb()
        };
        n.Sd = function() {
            this.A.Ml();
            window.clearTimeout(this.zi);
            R(this.J, 4) || dp(this);
            this.a.rc && this.vb("showcontrols")
        };

        function dp(a) {
            var b = a.a.wa ? 4E3 : 3E3;
            a.zi = Q(w(a.Ak, a), b)
        }
        n.Uo = function() {
            this.A.Ke()
        };
        n.Ak = function() {
            R(this.J, 64) || this.r.Il() ? (window.clearTimeout(this.zi), dp(this)) : (this.A.Jl(), this.a.rc && this.vb("hidecontrols"))
        };

        function cp(a) {
            a.A.om(R(a.J, 8) ? "html5-bezel-play" : a.g.xb && !a.g.xa ? "html5-bezel-stop" : "html5-bezel-pause")
        }

        function Uo(a) {
            a.a.Ve = Vn(a.A);
            if (a.m) {
                0 != a.m.readyState && (a.g.Rc = new G(a.m.videoWidth, a.m.videoHeight));
                var b = Wn(a.A);
                a.a.wc = new Qb(0, 0, b.width, b.height);
                Fo(a.Wb, a.g);
                a.r.rl(Fh(a.a));
                a.pubsub.j("onResize");
                a.vb("onResize")
            }
        }
        oa("yt.player.VideoPlayer", Go);
    })();


}
/*
     FILE ARCHIVED ON 09:32:01 Jun 22, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:40:07 Jan 21, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.575
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 115.919
  LoadShardBlock: 1307.884 (6)
  PetaboxLoader3.resolve: 1028.489 (5)
  PetaboxLoader3.datanode: 431.717 (8)
  load_resource: 238.664 (2)
*/