//Raphael.js
!function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = "*",
        h = function() {},
        i = function(a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = k.listeners(a),
                j = 0,
                l = [],
                m = {},
                n = [],
                o = b;
            b = a, c = 0;
            for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (l.sort(i); l[j] < 0;)
                if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
            for (p = 0; q > p; p++)
                if (e = h[p], "zIndex" in e)
                    if (e.zIndex == l[j]) {
                        if (n.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break;
                        while (e)
                    } else m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), c) break;
            return c = f, b = o, n.length ? n : null
        };
    k._events = j, k.listeners = function(a) {
        var b, c, d, e, h, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
            n: {}
        });
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
            if (d.f[e] == b) return h;
        return d.f.push(b),
            function(a) {
                +a == +a && (b.zIndex = +a)
            }
    }, k.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function() {
        c = 1
    }, k.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, k.nts = function() {
        return b.split(f)
    }, k.off = k.unbind = function(a, b) {
        if (!a) return k._events = j = {
            n: {}
        }, void 0;
        var c, d, h, i, l, m, n, o = a.split(f),
            p = [j];
        for (i = 0, l = o.length; l > i; i++)
            for (m = 0; m < p.length; m += h.length - 2) {
                if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
                else
                    for (d in c) c[e](d) && h.push(c[d]);
                p.splice.apply(p, h)
            }
        for (i = 0, l = p.length; l > i; i++)
            for (c = p[i]; c.n;) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)
                            if (c.f[m] == b) {
                                c.f.splice(m, 1);
                                break
                            }!c.f.length && delete c.f
                    }
                    for (d in c.n)
                        if (c.n[e](d) && c.n[d].f) {
                            var q = c.n[d].f;
                            for (m = 0, n = q.length; n > m; m++)
                                if (q[m] == b) {
                                    q.splice(m, 1);
                                    break
                                }!q.length && delete c.n[d].f
                        }
                } else {
                    delete c.f;
                    for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
                }
                c = c.n
            }
    }, k.once = function(a, b) {
        var c = function() {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = d, k.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
        return k
    }) : a.eve = k
}(this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function(a, b) {
    function c(a) {
        if (c.is(a, "function")) return u ? a() : b.on("raphael.DOMload", a);
        if (c.is(a, V)) return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
        var d = Array.prototype.slice.call(arguments, 0);
        if (c.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function() {
                e.call(c._engine.create[D](c, d))
            })
        }
        return c._engine.create[D](c, arguments)
    }

    function d(a) {
        if ("function" == typeof a || Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[z](c) && (b[c] = d(a[c]));
        return b
    }

    function e(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return a.push(a.splice(c, 1)[0])
    }

    function f(a, b, c) {
        function d() {
            var f = Array.prototype.slice.call(arguments, 0),
                g = f.join("?"),
                h = d.cache = d.cache || {},
                i = d.count = d.count || [];
            return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
        }
        return d
    }

    function g() {
        return this.hex
    }

    function h(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{
                x: +a[d - 2],
                y: +a[d - 1]
            }, {
                x: +a[d],
                y: +a[d + 1]
            }, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {
                x: +a[d + 4],
                y: +a[d + 5]
            }];
            b ? d ? e - 4 == d ? f[3] = {
                x: +a[0],
                y: +a[1]
            } : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {
                x: +a[2],
                y: +a[3]
            }) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }

    function i(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }

    function j(a, b, c, d, e, f, g, h, j) {
        null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
        for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
            var q = k * m[p] + k,
                r = i(q, a, c, e, g),
                s = i(q, b, d, f, h),
                t = r * r + s * s;
            o += n[p] * N.sqrt(t)
        }
        return k * o
    }

    function k(a, b, c, d, e, f, g, h, i) {
        if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
            var k, l = 1,
                m = l / 2,
                n = l - m,
                o = .01;
            for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o;) m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
            return n
        }
    }

    function l(a, b, c, d, e, f, g, h) {
        if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
                var l = i / k,
                    m = j / k,
                    n = +l.toFixed(2),
                    o = +m.toFixed(2);
                if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2))) return {
                    x: l,
                    y: m
                }
            }
        }
    }

    function m(a, b, d) {
        var e = c.bezierBBox(a),
            f = c.bezierBBox(b);
        if (!c.isBBoxIntersect(e, f)) return d ? 0 : [];
        for (var g = j.apply(0, a), h = j.apply(0, b), i = O(~~(g / 5), 1), k = O(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
            var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
            m.push({
                x: r.x,
                y: r.y,
                t: q / i
            })
        }
        for (q = 0; k + 1 > q; q++) r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({
            x: r.x,
            y: r.y,
            t: q / k
        });
        for (q = 0; i > q; q++)
            for (var s = 0; k > s; s++) {
                var t = m[q],
                    u = m[q + 1],
                    v = n[s],
                    w = n[s + 1],
                    x = Q(u.x - t.x) < .001 ? "y" : "x",
                    y = Q(w.x - v.x) < .001 ? "y" : "x",
                    z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
                if (z) {
                    if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
                    o[z.x.toFixed(4)] = z.y.toFixed(4);
                    var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
                        B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                    A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({
                        x: z.x,
                        y: z.y,
                        t1: P(A, 1),
                        t2: P(B, 1)
                    }))
                }
            }
        return p
    }

    function n(a, b, d) {
        a = c._path2curve(a), b = c._path2curve(b);
        for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
            var s = a[q];
            if ("M" == s[0]) e = i = s[1], f = j = s[2];
            else {
                "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var t = 0, u = b.length; u > t; t++) {
                    var v = b[t];
                    if ("M" == v[0]) g = k = v[1], h = l = v[2];
                    else {
                        "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var w = m(n, o, d);
                        if (d) p += w;
                        else {
                            for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                            p = p.concat(w)
                        }
                    }
                }
            }
        }
        return p
    }

    function o(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function p() {
        return this.x + H + this.y + H + this.width + " × " + this.height
    }

    function q(a, b, c, d, e, f) {
        function g(a) {
            return ((l * a + k) * a + j) * a
        }

        function h(a, b) {
            var c = i(a, b);
            return ((o * c + n) * c + m) * c
        }

        function i(a, b) {
            var c, d, e, f, h, i;
            for (e = a, i = 0; 8 > i; i++) {
                if (f = g(e) - a, Q(f) < b) return e;
                if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6) break;
                e -= f / h
            }
            if (c = 0, d = 1, e = a, c > e) return c;
            if (e > d) return d;
            for (; d > c;) {
                if (f = g(e), Q(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        var j = 3 * b,
            k = 3 * (d - b) - j,
            l = 1 - j - k,
            m = 3 * c,
            n = 3 * (e - c) - m,
            o = 1 - m - n;
        return h(a, 1 / (200 * f))
    }

    function r(a, b) {
        var c = [],
            d = {};
        if (this.ms = b, this.times = 1, a) {
            for (var e in a) a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
            c.sort(lb)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }

    function s(a, d, e, f, g, h) {
        e = _(e);
        var i, j, k, l, m, n, p = a.ms,
            r = {},
            s = {},
            t = {};
        if (f)
            for (v = 0, x = ic.length; x > v; v++) {
                var u = ic[v];
                if (u.el.id == d.id && u.anim == a) {
                    u.percent != e ? (ic.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
                    break
                }
            } else f = +s;
        for (var v = 0, x = a.percents.length; x > v; v++) {
            if (a.percents[v] == e || a.percents[v] > f * a.top) {
                e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
                break
            }
            f && d.attr(a.anim[a.percents[v]])
        }
        if (i) {
            if (j) j.initstatus = f, j.start = new Date - j.ms * f;
            else {
                for (var y in i)
                    if (i[z](y) && (db[z](y) || d.paper.customAttributes[z](y))) switch (r[y] = d.attr(y), null == r[y] && (r[y] = cb[y]), s[y] = i[y], db[y]) {
                        case T:
                            t[y] = (s[y] - r[y]) / p;
                            break;
                        case "colour":
                            r[y] = c.getRGB(r[y]);
                            var A = c.getRGB(s[y]);
                            t[y] = {
                                r: (A.r - r[y].r) / p,
                                g: (A.g - r[y].g) / p,
                                b: (A.b - r[y].b) / p
                            };
                            break;
                        case "path":
                            var B = Kb(r[y], s[y]),
                                C = B[1];
                            for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                                t[y][v] = [0];
                                for (var D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (C[v][D] - r[y][v][D]) / p
                            }
                            break;
                        case "transform":
                            var G = d._,
                                H = Pb(G[y], s[y]);
                            if (H)
                                for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++)
                                    for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p;
                            else {
                                var K = d.matrix || new o,
                                    L = {
                                        _: {
                                            transform: G.transform
                                        },
                                        getBBox: function() {
                                            return d.getBBox(1)
                                        }
                                    };
                                r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Nb(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
                            }
                            break;
                        case "csv":
                            var M = I(i[y])[J](w),
                                N = I(r[y])[J](w);
                            if ("clip-rect" == y)
                                for (r[y] = N, t[y] = [], v = N.length; v--;) t[y][v] = (M[v] - r[y][v]) / p;
                            s[y] = M;
                            break;
                        default:
                            for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--;) t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
                    }
                    var O = i.easing,
                        P = c.easing_formulas[O];
                if (!P)
                    if (P = I(O).match(Z), P && 5 == P.length) {
                        var Q = P;
                        P = function(a) {
                            return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
                        }
                    } else P = nb;
                if (n = i.start || a.start || +new Date, u = {
                        anim: a,
                        percent: e,
                        timestamp: n,
                        start: n + (a.del || 0),
                        status: 0,
                        initstatus: f || 0,
                        stop: !1,
                        ms: p,
                        easing: P,
                        from: r,
                        diff: t,
                        to: s,
                        el: d,
                        callback: i.callback,
                        prev: m,
                        next: l,
                        repeat: h || a.times,
                        origin: d.attr(),
                        totalOrigin: g
                    }, ic.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == ic.length)) return kc();
                k && (u.start = new Date - u.ms * f), 1 == ic.length && jc(kc)
            }
            b("raphael.anim.start." + d.id, d, a)
        }
    }

    function t(a) {
        for (var b = 0; b < ic.length; b++) ic[b].el.paper == a && ic.splice(b--, 1)
    }
    c.version = "2.1.2", c.eve = b;
    var u, v, w = /[, ]+/,
        x = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        y = /\{(\d+)\}/g,
        z = "hasOwnProperty",
        A = {
            doc: document,
            win: a
        },
        B = {
            was: Object.prototype[z].call(A.win, "Raphael"),
            is: A.win.Raphael
        },
        C = function() {
            this.ca = this.customAttributes = {}
        },
        D = "apply",
        E = "concat",
        F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch,
        G = "",
        H = " ",
        I = String,
        J = "split",
        K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [J](H),
        L = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        M = I.prototype.toLowerCase,
        N = Math,
        O = N.max,
        P = N.min,
        Q = N.abs,
        R = N.pow,
        S = N.PI,
        T = "number",
        U = "string",
        V = "array",
        W = Object.prototype.toString,
        X = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        Y = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        $ = N.round,
        _ = parseFloat,
        ab = parseInt,
        bb = I.prototype.toUpperCase,
        cb = c._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        db = c._availableAnimAttrs = {
            blur: T,
            "clip-rect": "csv",
            cx: T,
            cy: T,
            fill: "colour",
            "fill-opacity": T,
            "font-size": T,
            height: T,
            opacity: T,
            path: "path",
            r: T,
            rx: T,
            ry: T,
            stroke: "colour",
            "stroke-opacity": T,
            "stroke-width": T,
            transform: "transform",
            width: T,
            x: T,
            y: T
        },
        eb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        fb = {
            hs: 1,
            rg: 1
        },
        gb = /,?([achlmqrstvxz]),?/gi,
        hb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ib = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        kb = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        lb = function(a, b) {
            return _(a) - _(b)
        },
        mb = function() {},
        nb = function(a) {
            return a
        },
        ob = c._rectPath = function(a, b, c, d, e) {
            return e ? [
                ["M", a + e, b],
                ["l", c - 2 * e, 0],
                ["a", e, e, 0, 0, 1, e, e],
                ["l", 0, d - 2 * e],
                ["a", e, e, 0, 0, 1, -e, e],
                ["l", 2 * e - c, 0],
                ["a", e, e, 0, 0, 1, -e, -e],
                ["l", 0, 2 * e - d],
                ["a", e, e, 0, 0, 1, e, -e],
                ["z"]
            ] : [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ]
        },
        pb = function(a, b, c, d) {
            return null == d && (d = c), [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ]
        },
        qb = c._getPath = {
            path: function(a) {
                return a.attr("path")
            },
            circle: function(a) {
                var b = a.attrs;
                return pb(b.cx, b.cy, b.r)
            },
            ellipse: function(a) {
                var b = a.attrs;
                return pb(b.cx, b.cy, b.rx, b.ry)
            },
            rect: function(a) {
                var b = a.attrs;
                return ob(b.x, b.y, b.width, b.height, b.r)
            },
            image: function(a) {
                var b = a.attrs;
                return ob(b.x, b.y, b.width, b.height)
            },
            text: function(a) {
                var b = a._getBBox();
                return ob(b.x, b.y, b.width, b.height)
            },
            set: function(a) {
                var b = a._getBBox();
                return ob(b.x, b.y, b.width, b.height)
            }
        },
        rb = c.mapPath = function(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = Kb(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        };
    if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
        var sb, tb = A.doc.createElement("div");
        if (tb.innerHTML = '<v:shape adj="1"/>', sb = tb.firstChild, sb.style.behavior = "url(#default#VML)", !sb || "object" != typeof sb.adj) return c.type = G;
        tb = null
    }
    c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function(a, b) {
        return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || W.call(a).slice(8, -1).toLowerCase() == b
    }, c.angle = function(a, b, d, e, f, g) {
        if (null == f) {
            var h = a - d,
                i = b - e;
            return h || i ? (180 + 180 * N.atan2(-i, -h) / S + 360) % 360 : 0
        }
        return c.angle(a, b, f, g) - c.angle(d, e, f, g)
    }, c.rad = function(a) {
        return a % 360 * S / 180
    }, c.deg = function(a) {
        return 180 * a / S % 360
    }, c.snapTo = function(a, b, d) {
        if (d = c.is(d, "finite") ? d : 10, c.is(a, V)) {
            for (var e = a.length; e--;)
                if (Q(a[e] - b) <= d) return a[e]
        } else {
            a = +a;
            var f = b % a;
            if (d > f) return b - f;
            if (f > a - d) return b - f + a
        }
        return b
    }, c.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function(a) {
        var b = 0 | 16 * N.random(),
            c = "x" == a ? b : 8 | 3 & b;
        return c.toString(16)
    }), c.setWindow = function(a) {
        b("raphael.setWindow", c, A.win, a), A.win = a, A.doc = A.win.document, c._engine.initWin && c._engine.initWin(A.win)
    };
    var ub = function(a) {
            if (c.vml) {
                var b, d = /^\s+|\s+$/g;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), b = e.body
                } catch (g) {
                    b = createPopup().document.body
                }
                var h = b.createTextRange();
                ub = f(function(a) {
                    try {
                        b.style.color = I(a).replace(d, G);
                        var c = h.queryCommandValue("ForeColor");
                        return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
                    } catch (e) {
                        return "none"
                    }
                })
            } else {
                var i = A.doc.createElement("i");
                i.title = "Raphaël Colour Picker", i.style.display = "none", A.doc.body.appendChild(i), ub = f(function(a) {
                    return i.style.color = a, A.doc.defaultView.getComputedStyle(i, G).getPropertyValue("color")
                })
            }
            return ub(a)
        },
        vb = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        wb = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        xb = function() {
            return this.hex
        },
        yb = function(a, b, d) {
            if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, U)) {
                var e = c.getRGB(a);
                a = e.r, b = e.g, d = e.b
            }
            return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
        },
        zb = function(a, b, d, e) {
            a *= 255, b *= 255, d *= 255;
            var f = {
                r: a,
                g: b,
                b: d,
                hex: c.rgb(a, b, d),
                toString: xb
            };
            return c.is(e, "finite") && (f.opacity = e), f
        };
    c.color = function(a) {
        var b;
        return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
            hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = xb, a
    }, c.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = c * b, h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
    }, c.rgb2hsb = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
            h: d,
            s: e,
            b: f,
            toString: vb
        }
    }, c.rgb2hsl = function(a, b, c) {
        c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
            h: d,
            s: e,
            l: f,
            toString: wb
        }
    }, c._path2string = function() {
        return this.join(",").replace(gb, "$1")
    }, c._preload = function(a, b) {
        var c = A.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, A.doc.body.removeChild(this)
        }, c.onerror = function() {
            A.doc.body.removeChild(this)
        }, A.doc.body.appendChild(c), c.src = a
    }, c.getRGB = f(function(a) {
        if (!a || (a = I(a)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        };
        if ("none" == a) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: g
        };
        !(fb[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = ub(a));
        var b, d, e, f, h, i, j = a.match(X);
        return j ? (j[2] && (e = ab(j[2].substring(5), 16), d = ab(j[2].substring(3, 5), 16), b = ab(j[2].substring(1, 3), 16)), j[3] && (e = ab((h = j[3].charAt(3)) + h, 16), d = ab((h = j[3].charAt(2)) + h, 16), b = ab((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100)), j[5] ? (i = j[5][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsb2rgb(b, d, e, f)) : j[6] ? (i = j[6][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsl2rgb(b, d, e, f)) : (j = {
            r: b,
            g: d,
            b: e,
            toString: g
        }, j.hex = "#" + (16777216 | e | d << 8 | b << 16).toString(16).slice(1), c.is(f, "finite") && (j.opacity = f), j)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: g
        }
    }, c), c.hsb = f(function(a, b, d) {
        return c.hsb2rgb(a, b, d).hex
    }), c.hsl = f(function(a, b, d) {
        return c.hsl2rgb(a, b, d).hex
    }), c.rgb = f(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), c.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: a || .75
            },
            c = this.hsb2rgb(b.h, b.s, b.b);
        return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        })), c.hex
    }, c.getColor.reset = function() {
        delete this.start
    }, c.parsePathString = function(a) {
        if (!a) return null;
        var b = Ab(a);
        if (b.arr) return Cb(b.arr);
        var d = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            e = [];
        return c.is(a, V) && c.is(a[0], V) && (e = Cb(a)), e.length || I(a).replace(hb, function(a, b, c) {
            var f = [],
                g = b.toLowerCase();
            if (c.replace(jb, function(a, b) {
                    b && f.push(+b)
                }), "m" == g && f.length > 2 && (e.push([b][E](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][E](f));
            else
                for (; f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]););
        }), e.toString = c._path2string, b.arr = Cb(e), e
    }, c.parseTransformString = f(function(a) {
        if (!a) return null;
        var b = [];
        return c.is(a, V) && c.is(a[0], V) && (b = Cb(a)), b.length || I(a).replace(ib, function(a, c, d) {
            var e = [];
            M.call(c), d.replace(jb, function(a, b) {
                b && e.push(+b)
            }), b.push([c][E](e))
        }), b.toString = c._path2string, b
    });
    var Ab = function(a) {
        var b = Ab.ps = Ab.ps || {};
        return b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function() {
            for (var c in b) b[z](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        }), b[a]
    };
    c.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = R(j, 3),
            l = R(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            y = 90 - 180 * N.atan2(q - s, r - t) / S;
        return (q > s || t > r) && (y += 180), {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: w,
                y: x
            },
            alpha: y
        }
    }, c.bezierBBox = function(a, b, d, e, f, g, h, i) {
        c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
        var j = Jb.apply(null, a);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    }, c.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, c.isBBoxIntersect = function(a, b) {
        var d = c.isPointInsideBBox;
        return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }, c.pathIntersection = function(a, b) {
        return n(a, b)
    }, c.pathIntersectionNumber = function(a, b) {
        return n(a, b, 1)
    }, c.isPointInsidePath = function(a, b, d) {
        var e = c.pathBBox(a);
        return c.isPointInsideBBox(e, b, d) && 1 == n(a, [
            ["M", b, d],
            ["H", e.x2 + 10]
        ], 1) % 2
    }, c._removedFactory = function(a) {
        return function() {
            b("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var Bb = c.pathBBox = function(a) {
            var b = Ab(a);
            if (b.bbox) return d(b.bbox);
            if (!a) return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
            a = Kb(a);
            for (var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
                if (c = a[i], "M" == c[0]) e = c[1], f = c[2], g.push(e), h.push(f);
                else {
                    var k = Jb(e, f, c[1], c[2], c[3], c[4], c[5], c[6]);
                    g = g[E](k.min.x, k.max.x), h = h[E](k.min.y, k.max.y), e = c[5], f = c[6]
                }
            var l = P[D](0, g),
                m = P[D](0, h),
                n = O[D](0, g),
                o = O[D](0, h),
                p = n - l,
                q = o - m,
                r = {
                    x: l,
                    y: m,
                    x2: n,
                    y2: o,
                    width: p,
                    height: q,
                    cx: l + p / 2,
                    cy: m + q / 2
                };
            return b.bbox = d(r), r
        },
        Cb = function(a) {
            var b = d(a);
            return b.toString = c._path2string, b
        },
        Db = c._pathToRelative = function(a) {
            var b = Ab(a);
            if (b.rel) return Cb(b.rel);
            c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a));
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
            for (var j = i, k = a.length; k > j; j++) {
                var l = d[j] = [],
                    m = a[j];
                if (m[0] != M.call(m[0])) switch (l[0] = M.call(m[0]), l[0]) {
                    case "a":
                        l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                        break;
                    case "v":
                        l[1] = +(m[1] - f).toFixed(3);
                        break;
                    case "m":
                        g = m[1], h = m[2];
                    default:
                        for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
                } else {
                    l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                    for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
                }
                var r = d[j].length;
                switch (d[j][0]) {
                    case "z":
                        e = g, f = h;
                        break;
                    case "h":
                        e += +d[j][r - 1];
                        break;
                    case "v":
                        f += +d[j][r - 1];
                        break;
                    default:
                        e += +d[j][r - 2], f += +d[j][r - 1]
                }
            }
            return d.toString = c._path2string, b.rel = Cb(d), d
        },
        Eb = c._pathToAbsolute = function(a) {
            var b = Ab(a);
            if (b.abs) return Cb(b.abs);
            if (c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a)), !a || !a.length) return [
                ["M", 0, 0]
            ];
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                i = 0,
                j = 0;
            "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, i = f, j++, d[0] = ["M", e, f]);
            for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
                if (d.push(k = []), l = a[n], l[0] != bb.call(l[0])) switch (k[0] = bb.call(l[0]), k[0]) {
                        case "A":
                            k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                            break;
                        case "V":
                            k[1] = +l[1] + f;
                            break;
                        case "H":
                            k[1] = +l[1] + e;
                            break;
                        case "R":
                            for (var p = [e, f][E](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
                            d.pop(), d = d[E](h(p, m));
                            break;
                        case "M":
                            g = +l[1] + e, i = +l[2] + f;
                        default:
                            for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
                    } else if ("R" == l[0]) p = [e, f][E](l.slice(1)), d.pop(), d = d[E](h(p, m)), k = ["R"][E](l.slice(-2));
                    else
                        for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
                switch (k[0]) {
                    case "Z":
                        e = g, f = i;
                        break;
                    case "H":
                        e = k[1];
                        break;
                    case "V":
                        f = k[1];
                        break;
                    case "M":
                        g = k[k.length - 2], i = k[k.length - 1];
                    default:
                        e = k[k.length - 2], f = k[k.length - 1]
                }
            }
            return d.toString = c._path2string, b.abs = Cb(d), d
        },
        Fb = function(a, b, c, d) {
            return [a, b, c, d, c, d]
        },
        Gb = function(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        },
        Hb = function(a, b, c, d, e, g, h, i, j, k) {
            var l, m = 120 * S / 180,
                n = S / 180 * (+e || 0),
                o = [],
                p = f(function(a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(S / 180 * e), N.sin(S / 180 * e), (a - i) / 2),
                    r = (b - j) / 2,
                    s = q * q / (c * c) + r * r / (d * d);
                s > 1 && (s = N.sqrt(s), c = s * c, d = s * d);
                var t = c * c,
                    u = d * d,
                    v = (g == h ? -1 : 1) * N.sqrt(Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * c * r / d + (a + i) / 2,
                    x = v * -d * q / c + (b + j) / 2,
                    y = N.asin(((b - x) / d).toFixed(9)),
                    z = N.asin(((j - x) / d).toFixed(9));
                y = w > a ? S - y : y, z = w > i ? S - z : z, 0 > y && (y = 2 * S + y), 0 > z && (z = 2 * S + z), h && y > z && (y -= 2 * S), !h && z > y && (z -= 2 * S)
            }
            var A = z - y;
            if (Q(A) > m) {
                var B = z,
                    C = i,
                    D = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + c * N.cos(z), j = x + d * N.sin(z), o = Hb(i, j, c, d, e, 0, h, C, D, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                K = N.tan(A / 4),
                L = 4 / 3 * c * K,
                M = 4 / 3 * d * K,
                O = [a, b],
                P = [a + L * G, b - M * F],
                R = [i + L * I, j - M * H],
                T = [i, j];
            if (P[0] = 2 * O[0] - P[0], P[1] = 2 * O[1] - P[1], k) return [P, R, T][E](o);
            o = [P, R, T][E](o).join()[J](",");
            for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
            return U
        },
        Ib = function(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i;
            return {
                x: R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,
                y: R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h
            }
        },
        Jb = f(function(a, b, c, d, e, f, g, h) {
            var i, j = e - 2 * c + a - (g - 2 * e + c),
                k = 2 * (c - a) - 2 * (e - c),
                l = a - c,
                m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j,
                n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j,
                o = [b, h],
                p = [a, g];
            return Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
                min: {
                    x: P[D](0, p),
                    y: P[D](0, o)
                },
                max: {
                    x: O[D](0, p),
                    y: O[D](0, o)
                }
            }
        }),
        Kb = c._path2curve = f(function(a, b) {
            var c = !b && Ab(a);
            if (!b && c.curve) return Cb(c.curve);
            for (var d = Eb(a), e = b && Eb(b), f = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, g = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, h = (function(a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"][E](Hb[D](0, [b.x, b.y][E](a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][E](a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][E](Gb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"][E](Gb(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"][E](Fb(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"][E](Fb(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"][E](Fb(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"][E](Fb(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), i = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][E](c.splice(0, 6)));
                        a.splice(b, 1), l = O(d.length, e && e.length || 0)
                    }
                }, j = function(a, b, c, f, g) {
                    a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = O(d.length, e && e.length || 0))
                }, k = 0, l = O(d.length, e && e.length || 0); l > k; k++) {
                d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
                var m = d[k],
                    n = e && e[k],
                    o = m.length,
                    p = e && n.length;
                f.x = m[o - 2], f.y = m[o - 1], f.bx = _(m[o - 4]) || f.x, f.by = _(m[o - 3]) || f.y, g.bx = e && (_(n[p - 4]) || g.x), g.by = e && (_(n[p - 3]) || g.y), g.x = e && n[p - 2], g.y = e && n[p - 1]
            }
            return e || (c.curve = Cb(d)), e ? [d, e] : d
        }, null, Cb),
        Lb = (c._parseDots = f(function(a) {
            for (var b = [], d = 0, e = a.length; e > d; d++) {
                var f = {},
                    g = a[d].match(/^([^:]*):?([\d\.]*)/);
                if (f.color = c.getRGB(g[1]), f.color.error) return null;
                f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
            }
            for (d = 1, e = b.length - 1; e > d; d++)
                if (!b[d].offset) {
                    for (var h = _(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
                        if (b[j].offset) {
                            i = b[j].offset;
                            break
                        }
                    i || (i = 100, j = e), i = _(i);
                    for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, b[d].offset = h + "%"
                }
            return b
        }), c._tear = function(a, b) {
            a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
        }),
        Mb = (c._tofront = function(a, b) {
            b.top !== a && (Lb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
        }, c._toback = function(a, b) {
            b.bottom !== a && (Lb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
        }, c._insertafter = function(a, b, c) {
            Lb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
        }, c._insertbefore = function(a, b, c) {
            Lb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
        }, c.toMatrix = function(a, b) {
            var c = Bb(a),
                d = {
                    _: {
                        transform: G
                    },
                    getBBox: function() {
                        return c
                    }
                };
            return Nb(d, b), d.matrix
        }),
        Nb = (c.transformPath = function(a, b) {
            return rb(a, Mb(a, b))
        }, c._extractTransform = function(a, b) {
            if (null == b) return a._.transform;
            b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G);
            var d = c.parseTransformString(b),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = a._,
                k = new o;
            if (j.transform = d || [], d)
                for (var l = 0, m = d.length; m > l; l++) {
                    var n, p, q, r, s, t = d[l],
                        u = t.length,
                        v = I(t[0]).toLowerCase(),
                        w = t[0] != v,
                        x = w ? k.invert() : 0;
                    "t" == v && 3 == u ? w ? (n = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - n, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
                }
            a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
        }),
        Ob = function(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        },
        Pb = c._equaliseTransform = function(a, b) {
            b = I(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
            for (var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0; h > k; k++) {
                if (f = a[k] || Ob(b[k]), g = b[k] || Ob(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
                for (i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
            }
            return {
                from: i,
                to: j
            }
        };
    c._getContainer = function(a, b, d, e) {
            var f;
            return f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a), null != f ? f.tagName ? null == b ? {
                container: f,
                width: f.style.pixelWidth || f.offsetWidth,
                height: f.style.pixelHeight || f.offsetHeight
            } : {
                container: f,
                width: b,
                height: d
            } : {
                container: 1,
                x: a,
                y: b,
                width: d,
                height: e
            } : void 0
        }, c.pathToRelative = Db, c._engine = {}, c.path2curve = Kb, c.matrix = function(a, b, c, d, e, f) {
            return new o(a, b, c, d, e, f)
        },
        function(a) {
            function b(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function d(a) {
                var c = N.sqrt(b(a));
                a[0] && (a[0] /= c), a[1] && (a[1] /= c)
            }
            a.add = function(a, b, c, d, e, f) {
                var g, h, i, j, k = [
                        [],
                        [],
                        []
                    ],
                    l = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    m = [
                        [a, c, e],
                        [b, d, f],
                        [0, 0, 1]
                    ];
                for (a && a instanceof o && (m = [
                        [a.a, a.c, a.e],
                        [a.b, a.d, a.f],
                        [0, 0, 1]
                    ]), g = 0; 3 > g; g++)
                    for (h = 0; 3 > h; h++) {
                        for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                        k[g][h] = j
                    }
                this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
            }, a.invert = function() {
                var a = this,
                    b = a.a * a.d - a.b * a.c;
                return new o(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
            }, a.clone = function() {
                return new o(this.a, this.b, this.c, this.d, this.e, this.f)
            }, a.translate = function(a, b) {
                this.add(1, 0, 0, 1, a, b)
            }, a.scale = function(a, b, c, d) {
                null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
            }, a.rotate = function(a, b, d) {
                a = c.rad(a), b = b || 0, d = d || 0;
                var e = +N.cos(a).toFixed(9),
                    f = +N.sin(a).toFixed(9);
                this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
            }, a.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }, a.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }, a.get = function(a) {
                return +this[I.fromCharCode(97 + a)].toFixed(4)
            }, a.toString = function() {
                return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
            }, a.toFilter = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
            }, a.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, a.split = function() {
                var a = {};
                a.dx = this.e, a.dy = this.f;
                var e = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                a.scalex = N.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = N.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
                var f = -e[0][1],
                    g = e[1][1];
                return 0 > g ? (a.rotate = c.deg(N.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(N.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
            }, a.toTransformString = function(a) {
                var b = a || this[J]();
                return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : G) + (b.rotate ? "r" + [b.rotate, 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }(o.prototype);
    var Qb = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    v.safari = "Apple Computer, Inc." == navigator.vendor && (Qb && Qb[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Qb && Qb[1] < 8 ? function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove()
        })
    } : mb;
    for (var Rb = function() {
            this.returnValue = !1
        }, Sb = function() {
            return this.originalEvent.preventDefault()
        }, Tb = function() {
            this.cancelBubble = !0
        }, Ub = function() {
            return this.originalEvent.stopPropagation()
        }, Vb = function(a) {
            var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                c = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            return {
                x: a.clientX + c,
                y: a.clientY + b
            }
        }, Wb = function() {
            return A.doc.addEventListener ? function(a, b, c, d) {
                var e = function(a) {
                    var b = Vb(a);
                    return c.call(d, a, b.x, b.y)
                };
                if (a.addEventListener(b, e, !1), F && L[b]) {
                    var f = function(b) {
                        for (var e = Vb(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
                            if (b.targetTouches[g].target == a) {
                                b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Sb, b.stopPropagation = Ub;
                                break
                            }
                        return c.call(d, b, e.x, e.y)
                    };
                    a.addEventListener(L[b], f, !1)
                }
                return function() {
                    return a.removeEventListener(b, e, !1), F && L[b] && a.removeEventListener(L[b], e, !1), !0
                }
            } : A.doc.attachEvent ? function(a, b, c, d) {
                var e = function(a) {
                    a = a || A.win.event;
                    var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                        e = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
                        f = a.clientX + e,
                        g = a.clientY + b;
                    return a.preventDefault = a.preventDefault || Rb, a.stopPropagation = a.stopPropagation || Tb, c.call(d, a, f, g)
                };
                a.attachEvent("on" + b, e);
                var f = function() {
                    return a.detachEvent("on" + b, e), !0
                };
                return f
            } : void 0
        }(), Xb = [], Yb = function(a) {
            for (var c, d = a.clientX, e = a.clientY, f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, h = Xb.length; h--;) {
                if (c = Xb[h], F && a.touches) {
                    for (var i, j = a.touches.length; j--;)
                        if (i = a.touches[j], i.identifier == c.el._drag.id) {
                            d = i.clientX, e = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                            break
                        }
                } else a.preventDefault();
                var k, l = c.el.node,
                    m = l.nextSibling,
                    n = l.parentNode,
                    o = l.style.display;
                A.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && b("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, b("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
            }
        }, Zb = function(a) {
            c.unmousemove(Yb).unmouseup(Zb);
            for (var d, e = Xb.length; e--;) d = Xb[e], d.el._drag = {}, b("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, a);
            Xb = []
        }, $b = c.el = {}, _b = K.length; _b--;) ! function(a) {
        c[a] = $b[a] = function(b, d) {
            return c.is(b, "function") && (this.events = this.events || [], this.events.push({
                name: a,
                f: b,
                unbind: Wb(this.shape || this.node || A.doc, a, b, d || this)
            })), this
        }, c["un" + a] = $b["un" + a] = function(b) {
            for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
            return this
        }
    }(K[_b]);
    $b.data = function(a, d) {
        var e = kb[this.id] = kb[this.id] || {};
        if (0 == arguments.length) return e;
        if (1 == arguments.length) {
            if (c.is(a, "object")) {
                for (var f in a) a[z](f) && this.data(f, a[f]);
                return this
            }
            return b("raphael.data.get." + this.id, this, e[a], a), e[a]
        }
        return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
    }, $b.removeData = function(a) {
        return null == a ? kb[this.id] = {} : kb[this.id] && delete kb[this.id][a], this
    }, $b.getData = function() {
        return d(kb[this.id] || {})
    }, $b.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, $b.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var ac = [];
    $b.drag = function(a, d, e, f, g, h) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = i.clientX,
                k = i.clientY,
                l = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                m = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
            if (this._drag.id = i.identifier, F && i.touches)
                for (var n, o = i.touches.length; o--;)
                    if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) {
                        j = n.clientX, k = n.clientY;
                        break
                    }
            this._drag.x = j + m, this._drag.y = k + l, !Xb.length && c.mousemove(Yb).mouseup(Zb), Xb.push({
                el: this,
                move_scope: f,
                start_scope: g,
                end_scope: h
            }), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i)
        }
        return this._drag = {}, ac.push({
            el: this,
            start: i
        }), this.mousedown(i), this
    }, $b.onDragOver = function(a) {
        a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
    }, $b.undrag = function() {
        for (var a = ac.length; a--;) ac[a].el == this && (this.unmousedown(ac[a].start), ac.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
        !ac.length && c.unmousemove(Yb).unmouseup(Zb), Xb = []
    }, v.circle = function(a, b, d) {
        var e = c._engine.circle(this, a || 0, b || 0, d || 0);
        return this.__set__ && this.__set__.push(e), e
    }, v.rect = function(a, b, d, e, f) {
        var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.ellipse = function(a, b, d, e) {
        var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
        return this.__set__ && this.__set__.push(f), f
    }, v.path = function(a) {
        a && !c.is(a, U) && !c.is(a[0], V) && (a += G);
        var b = c._engine.path(c.format[D](c, arguments), this);
        return this.__set__ && this.__set__.push(b), b
    }, v.image = function(a, b, d, e, f) {
        var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, v.text = function(a, b, d) {
        var e = c._engine.text(this, a || 0, b || 0, I(d));
        return this.__set__ && this.__set__.push(e), e
    }, v.set = function(a) {
        !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new mc(a);
        return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
    }, v.setStart = function(a) {
        this.__set__ = a || this.set()
    }, v.setFinish = function() {
        var a = this.__set__;
        return delete this.__set__, a
    }, v.setSize = function(a, b) {
        return c._engine.setSize.call(this, a, b)
    }, v.setViewBox = function(a, b, d, e, f) {
        return c._engine.setViewBox.call(this, a, b, d, e, f)
    }, v.top = v.bottom = null, v.raphael = c;
    var bc = function(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            h = b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            i = b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: h,
            x: i
        }
    };
    v.getElementByPoint = function(a, b) {
        var c = this,
            d = c.canvas,
            e = A.doc.elementFromPoint(a, b);
        if (A.win.opera && "svg" == e.tagName) {
            var f = bc(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1])
        }
        if (!e) return null;
        for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
        return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
    }, v.getElementsByBBox = function(a) {
        var b = this.set();
        return this.forEach(function(d) {
            c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
        }), b
    }, v.getById = function(a) {
        for (var b = this.bottom; b;) {
            if (b.id == a) return b;
            b = b.next
        }
        return null
    }, v.forEach = function(a, b) {
        for (var c = this.bottom; c;) {
            if (a.call(b, c) === !1) return this;
            c = c.next
        }
        return this
    }, v.getElementsByPoint = function(a, b) {
        var c = this.set();
        return this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        }), c
    }, $b.isPointInside = function(a, b) {
        var d = this.realPath = qb[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (d = c.transformPath(d, this.attr("transform"))), c.isPointInsidePath(d, a, b)
    }, $b.getBBox = function(a) {
        if (this.removed) return {};
        var b = this._;
        return a ? ((b.dirty || !b.bboxwt) && (this.realPath = qb[this.type](this), b.bboxwt = Bb(this.realPath), b.bboxwt.toString = p, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = qb[this.type](this)), b.bbox = Bb(rb(this.realPath, this.matrix)), b.bbox.toString = p, b.dirty = b.dirtyT = 0), b.bbox)
    }, $b.clone = function() {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(a), a
    }, $b.glow = function(a) {
        if ("text" == this.type) return null;
        a = a || {};
        var b = {
                width: (a.width || 10) + (+this.attr("stroke-width") || 1),
                fill: a.fill || !1,
                opacity: a.opacity || .5,
                offsetx: a.offsetx || 0,
                offsety: a.offsety || 0,
                color: a.color || "#000"
            },
            c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || qb[this.type](this);
        f = this.matrix ? rb(f, this.matrix) : f;
        for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
            stroke: b.color,
            fill: b.fill ? b.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(b.width / c * g).toFixed(3),
            opacity: +(b.opacity / c).toFixed(3)
        }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var cc = function(a, b, d, e, f, g, h, i, l) {
            return null == l ? j(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, k(a, b, d, e, f, g, h, i, l))
        },
        dc = function(a, b) {
            return function(d, e, f) {
                d = Kb(d);
                for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
                    if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
                    else {
                        if (j = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                            if (b && !m.start) {
                                if (k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                                m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                                continue
                            }
                            if (!a && !b) return k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                                x: k.x,
                                y: k.y,
                                alpha: k.alpha
                            }
                        }
                        n += j, g = +i[5], h = +i[6]
                    }
                    l += i.shift() + i
                }
                return m.end = l, k = a ? n : b ? m : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {
                    x: k.x,
                    y: k.y,
                    alpha: k.alpha
                }), k
            }
        },
        ec = dc(1),
        fc = dc(),
        gc = dc(0, 1);
    c.getTotalLength = ec, c.getPointAtLength = fc, c.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return gc(a, b).end;
        var d = gc(a, c, 1);
        return b ? gc(d, b).end : d
    }, $b.getTotalLength = function() {
        var a = this.getPath();
        if (a) return this.node.getTotalLength ? this.node.getTotalLength() : ec(a)
    }, $b.getPointAtLength = function(a) {
        var b = this.getPath();
        if (b) return fc(b, a)
    }, $b.getPath = function() {
        var a, b = c._getPath[this.type];
        if ("text" != this.type && "set" != this.type) return b && (a = b(this)), a
    }, $b.getSubpath = function(a, b) {
        var d = this.getPath();
        if (d) return c.getSubpath(d, a, b)
    };
    var hc = c.easing_formulas = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return R(a, 1.7)
        },
        ">": function(a) {
            return R(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04,
                c = N.sqrt(.1734 + b * b),
                d = c - b,
                e = R(Q(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = R(Q(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            return a == !!a ? a : R(2, -10 * a) * N.sin((a - .075) * 2 * S / .3) + 1
        },
        bounce: function(a) {
            var b, c = 7.5625,
                d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }
    };
    hc.easeIn = hc["ease-in"] = hc["<"], hc.easeOut = hc["ease-out"] = hc[">"], hc.easeInOut = hc["ease-in-out"] = hc["<>"], hc["back-in"] = hc.backIn, hc["back-out"] = hc.backOut;
    var ic = [],
        jc = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
            setTimeout(a, 16)
        },
        kc = function() {
            for (var a = +new Date, d = 0; d < ic.length; d++) {
                var e = ic[d];
                if (!e.el.removed && !e.paused) {
                    var f, g, h = a - e.start,
                        i = e.ms,
                        j = e.easing,
                        k = e.from,
                        l = e.diff,
                        m = e.to,
                        n = (e.t, e.el),
                        o = {},
                        p = {};
                    if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && ic.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
                        if (i > h) {
                            var q = j(h / i);
                            for (var r in k)
                                if (k[z](r)) {
                                    switch (db[r]) {
                                        case T:
                                            f = +k[r] + q * i * l[r];
                                            break;
                                        case "colour":
                                            f = "rgb(" + [lc($(k[r].r + q * i * l[r].r)), lc($(k[r].g + q * i * l[r].g)), lc($(k[r].b + q * i * l[r].b))].join(",") + ")";
                                            break;
                                        case "path":
                                            f = [];
                                            for (var t = 0, u = k[r].length; u > t; t++) {
                                                f[t] = [k[r][t][0]];
                                                for (var v = 1, w = k[r][t].length; w > v; v++) f[t][v] = +k[r][t][v] + q * i * l[r][t][v];
                                                f[t] = f[t].join(H)
                                            }
                                            f = f.join(H);
                                            break;
                                        case "transform":
                                            if (l[r].real)
                                                for (f = [], t = 0, u = k[r].length; u > t; t++)
                                                    for (f[t] = [k[r][t][0]], v = 1, w = k[r][t].length; w > v; v++) f[t][v] = k[r][t][v] + q * i * l[r][t][v];
                                            else {
                                                var x = function(a) {
                                                    return +k[r][a] + q * i * l[r][a]
                                                };
                                                f = [
                                                    ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                                                ]
                                            }
                                            break;
                                        case "csv":
                                            if ("clip-rect" == r)
                                                for (f = [], t = 4; t--;) f[t] = +k[r][t] + q * i * l[r][t];
                                            break;
                                        default:
                                            var y = [][E](k[r]);
                                            for (f = [], t = n.paper.customAttributes[r].length; t--;) f[t] = +y[t] + q * i * l[r][t]
                                    }
                                    o[r] = f
                                }
                            n.attr(o),
                                function(a, c, d) {
                                    setTimeout(function() {
                                        b("raphael.anim.frame." + a, c, d)
                                    })
                                }(n.id, n, e.anim)
                        } else {
                            if (function(a, d, e) {
                                    setTimeout(function() {
                                        b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                                    })
                                }(e.callback, n, e.anim), n.attr(m), ic.splice(d--, 1), e.repeat > 1 && !e.next) {
                                for (g in m) m[z](g) && (p[g] = e.totalOrigin[g]);
                                e.el.attr(p), s(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
                            }
                            e.next && !e.stop && s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
                        }
                }
            }
            c.svg && n && n.paper && n.paper.safari(), ic.length && jc(kc)
        },
        lc = function(a) {
            return a > 255 ? 255 : 0 > a ? 0 : a
        };
    $b.animateWith = function(a, b, d, e, f, g) {
        var h = this;
        if (h.removed) return g && g.call(h), h;
        var i = d instanceof r ? d : c.animation(d, e, f, g);
        s(i, h, i.percents[0], null, h.attr());
        for (var j = 0, k = ic.length; k > j; j++)
            if (ic[j].anim == b && ic[j].el == a) {
                ic[k - 1].start = ic[j].start;
                break
            }
        return h
    }, $b.onAnimation = function(a) {
        return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
    }, r.prototype.delay = function(a) {
        var b = new r(this.anim, this.ms);
        return b.times = this.times, b.del = +a || 0, b
    }, r.prototype.repeat = function(a) {
        var b = new r(this.anim, this.ms);
        return b.del = this.del, b.times = N.floor(O(a, 0)) || 1, b
    }, c.animation = function(a, b, d, e) {
        if (a instanceof r) return a;
        (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
        var f, g, h = {};
        for (g in a) a[z](g) && _(g) != g && _(g) + "%" != g && (f = !0, h[g] = a[g]);
        return f ? (d && (h.easing = d), e && (h.callback = e), new r({
            100: h
        }, b)) : new r(a, b)
    }, $b.animate = function(a, b, d, e) {
        var f = this;
        if (f.removed) return e && e.call(f), f;
        var g = a instanceof r ? a : c.animation(a, b, d, e);
        return s(g, f, g.percents[0], null, f.attr()), f
    }, $b.setTime = function(a, b) {
        return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
    }, $b.status = function(a, b) {
        var c, d, e = [],
            f = 0;
        if (null != b) return s(a, this, -1, P(b, 1)), this;
        for (c = ic.length; c > f; f++)
            if (d = ic[f], d.el.id == this.id && (!a || d.anim == a)) {
                if (a) return d.status;
                e.push({
                    anim: d.anim,
                    status: d.status
                })
            }
        return a ? 0 : e
    }, $b.pause = function(a) {
        for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.pause." + this.id, this, ic[c].anim) !== !1 && (ic[c].paused = !0);
        return this
    }, $b.resume = function(a) {
        for (var c = 0; c < ic.length; c++)
            if (ic[c].el.id == this.id && (!a || ic[c].anim == a)) {
                var d = ic[c];
                b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
            }
        return this
    }, $b.stop = function(a) {
        for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.stop." + this.id, this, ic[c].anim) !== !1 && ic.splice(c--, 1);
        return this
    }, b.on("raphael.remove", t), b.on("raphael.clear", t), $b.toString = function() {
        return "Raphaël’s object"
    };
    var mc = function(a) {
            if (this.items = [], this.length = 0, this.type = "set", a)
                for (var b = 0, c = a.length; c > b; b++) !a[b] || a[b].constructor != $b.constructor && a[b].constructor != mc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
        },
        nc = mc.prototype;
    nc.push = function() {
        for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != $b.constructor && a.constructor != mc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, nc.pop = function() {
        return this.length && delete this[this.length--], this.items.pop()
    }, nc.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; d > c; c++)
            if (a.call(b, this.items[c], c) === !1) return this;
        return this
    };
    for (var oc in $b) $b[z](oc) && (nc[oc] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a][D](c, b)
            })
        }
    }(oc));
    return nc.attr = function(a, b) {
            if (a && c.is(a, V) && c.is(a[0], "object"))
                for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
            else
                for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, b);
            return this
        }, nc.clear = function() {
            for (; this.length;) this.pop()
        }, nc.splice = function(a, b) {
            a = 0 > a ? O(this.length + a, 0) : a, b = O(0, P(this.length - a, b));
            var c, d = [],
                e = [],
                f = [];
            for (c = 2; c < arguments.length; c++) f.push(arguments[c]);
            for (c = 0; b > c; c++) e.push(this[a + c]);
            for (; c < this.length - a; c++) d.push(this[a + c]);
            var g = f.length;
            for (c = 0; c < g + d.length; c++) this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
            for (c = this.items.length = this.length -= b - g; this[c];) delete this[c++];
            return new mc(e)
        }, nc.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0
        }, nc.animate = function(a, b, d, e) {
            (c.is(d, "function") || !d) && (e = d || null);
            var f, g, h = this.items.length,
                i = h,
                j = this;
            if (!h) return this;
            e && (g = function() {
                !--h && e.call(j)
            }), d = c.is(d, U) ? d : g;
            var k = c.animation(a, b, d, g);
            for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
            return this
        }, nc.insertAfter = function(a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, nc.getBBox = function() {
            for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
                if (!this.items[e].removed) {
                    var f = this.items[e].getBBox();
                    a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
                }
            return a = P[D](0, a), b = P[D](0, b), c = O[D](0, c), d = O[D](0, d), {
                x: a,
                y: b,
                x2: c,
                y2: d,
                width: c - a,
                height: d - b
            }
        }, nc.clone = function(a) {
            a = this.paper.set();
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, nc.toString = function() {
            return "Raphaël‘s set"
        }, nc.glow = function(a) {
            var b = this.paper.set();
            return this.forEach(function(c) {
                var d = c.glow(a);
                null != d && d.forEach(function(a) {
                    b.push(a)
                })
            }), b
        }, nc.isPointInside = function(a, b) {
            var c = !1;
            return this.forEach(function(d) {
                return d.isPointInside(a, b) ? (console.log("runned"), c = !0, !1) : void 0
            }), c
        }, c.registerFont = function(a) {
            if (!a.face) return a;
            this.fonts = this.fonts || {};
            var b = {
                    w: a.w,
                    face: {},
                    glyphs: {}
                },
                c = a.face["font-family"];
            for (var d in a.face) a.face[z](d) && (b.face[d] = a.face[d]);
            if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
                b.face["units-per-em"] = ab(a.face["units-per-em"], 10);
                for (var e in a.glyphs)
                    if (a.glyphs[z](e)) {
                        var f = a.glyphs[e];
                        if (b.glyphs[e] = {
                                w: f.w,
                                k: {},
                                d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                                    return {
                                        l: "L",
                                        c: "C",
                                        x: "z",
                                        t: "m",
                                        r: "l",
                                        v: "c"
                                    }[a] || "M"
                                }) + "z"
                            }, f.k)
                            for (var g in f.k) f[z](g) && (b.glyphs[e].k[g] = f.k[g])
                    }
            }
            return a
        }, v.getFont = function(a, b, d, e) {
            if (e = e || "normal", d = d || "normal", b = +b || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[b] || 400, c.fonts) {
                var f = c.fonts[a];
                if (!f) {
                    var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)", "i");
                    for (var h in c.fonts)
                        if (c.fonts[z](h) && g.test(h)) {
                            f = c.fonts[h];
                            break
                        }
                }
                var i;
                if (f)
                    for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != b || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
                return i
            }
        }, v.print = function(a, b, d, e, f, g, h, i) {
            g = g || "middle", h = O(P(h || 0, 1), -1), i = O(P(i || 1, 3), 1);
            var j, k = I(d)[J](G),
                l = 0,
                m = 0,
                n = G;
            if (c.is(e, "string") && (e = this.getFont(e)), e) {
                j = (f || 16) / e.face["units-per-em"];
                for (var o = e.face.bbox[J](w), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
                    if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
                    else {
                        var v = m && e.glyphs[k[t - 1]] || {},
                            x = e.glyphs[k[t]];
                        l += m ? (v.w || e.w) + (v.k && v.k[k[t]] || 0) + e.w * h : 0, m = 1
                    }
                    x && x.d && (n += c.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (b - s) / j]))
                }
            }
            return this.path(n).attr({
                fill: "#000",
                stroke: "none"
            })
        }, v.add = function(a) {
            if (c.is(a, "array"))
                for (var b, d = this.set(), e = 0, f = a.length; f > e; e++) b = a[e] || {}, x[z](b.type) && d.push(this[b.type]().attr(b));
            return d
        }, c.format = function(a, b) {
            var d = c.is(b, V) ? [0][E](b) : arguments;
            return a && c.is(a, U) && d.length - 1 && (a = a.replace(y, function(a, b) {
                return null == d[++b] ? G : d[b]
            })), a || G
        }, c.fullfill = function() {
            var a = /\{([^\}]+)\}/g,
                b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                c = function(a, c, d) {
                    var e = d;
                    return c.replace(b, function(a, b, c, d, f) {
                        b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                    }), e = (null == e || e == d ? a : e) + ""
                };
            return function(b, d) {
                return String(b).replace(a, function(a, b) {
                    return c(a, b, d)
                })
            }
        }(), c.ninja = function() {
            return B.was ? A.win.Raphael = B.is : delete Raphael, c
        }, c.st = nc,
        function(a, b, d) {
            function e() {
                /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
            }
            null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function() {
                a.removeEventListener(b, d, !1), a.readyState = "complete"
            }, !1), a.readyState = "loading"), e()
        }(document, "DOMContentLoaded"), b.on("raphael.DOMload", function() {
            u = !0
        }),
        function() {
            if (c.svg) {
                var a = "hasOwnProperty",
                    b = String,
                    d = parseFloat,
                    e = parseInt,
                    f = Math,
                    g = f.max,
                    h = f.abs,
                    i = f.pow,
                    j = /[, ]+/,
                    k = c.eve,
                    l = "",
                    m = " ",
                    n = "http://www.w3.org/1999/xlink",
                    o = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                    p = {};
                c.toString = function() {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                };
                var q = function(d, e) {
                        if (e) {
                            "string" == typeof d && (d = q(d));
                            for (var f in e) e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
                        } else d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return d
                    },
                    r = function(a, e) {
                        var j = "linear",
                            k = a.id + e,
                            m = .5,
                            n = .5,
                            o = a.node,
                            p = a.paper,
                            r = o.style,
                            s = c._g.doc.getElementById(k);
                        if (!s) {
                            if (e = b(e).replace(c._radial_gradient, function(a, b, c) {
                                    if (j = "radial", b && c) {
                                        m = d(b), n = d(c);
                                        var e = 2 * (n > .5) - 1;
                                        i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                                    }
                                    return l
                                }), e = e.split(/\s*\-\s*/), "linear" == j) {
                                var t = e.shift();
                                if (t = -d(t), isNaN(t)) return null;
                                var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                                    v = 1 / (g(h(u[2]), h(u[3])) || 1);
                                u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
                            }
                            var w = c._parseDots(e);
                            if (!w) return null;
                            if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                                s = q(j + "Gradient", {
                                    id: k
                                }), a.gradient = s, q(s, "radial" == j ? {
                                    fx: m,
                                    fy: n
                                } : {
                                    x1: u[0],
                                    y1: u[1],
                                    x2: u[2],
                                    y2: u[3],
                                    gradientTransform: a.matrix.invert()
                                }), p.defs.appendChild(s);
                                for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", {
                                    offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                                    "stop-color": w[x].color || "#fff"
                                }))
                            }
                        }
                        return q(o, {
                            fill: "url(#" + k + ")",
                            opacity: 1,
                            "fill-opacity": 1
                        }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
                    },
                    s = function(a) {
                        var b = a.getBBox(1);
                        q(a.pattern, {
                            patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
                        })
                    },
                    t = function(d, e, f) {
                        if ("path" == d.type) {
                            for (var g, h, i, j, k, m = b(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    w = m[v];
                                    break;
                                case "wide":
                                    y = 5;
                                    break;
                                case "narrow":
                                    y = 2;
                                    break;
                                case "long":
                                    x = 5;
                                    break;
                                case "short":
                                    x = 2
                            }
                            if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
                                    fill: "none",
                                    stroke: t.stroke
                                }) : (j = i = x / 2, k = {
                                    fill: t.stroke,
                                    stroke: "none"
                                }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                                var A = "raphael-marker-" + w,
                                    B = "raphael-marker-" + r + w + x + y;
                                c._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                                    "stroke-linecap": "round",
                                    d: o[w],
                                    id: A
                                })), p[A] = 1);
                                var C, D = c._g.doc.getElementById(B);
                                D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                                    id: B,
                                    markerHeight: y,
                                    markerWidth: x,
                                    orient: "auto",
                                    refX: j,
                                    refY: y / 2
                                }), C = q(q("use"), {
                                    "xlink:href": "#" + A,
                                    transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                                    "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                                }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                                var E = i * ("diamond" != w && "oval" != w);
                                f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - E * u) : (g = E * u, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = c.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
                            } else f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - g) : (g = 0, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {
                                d: c.getSubpath(t.path, g, h)
                            }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
                            for (k in p)
                                if (p[a](k) && !p[k]) {
                                    var F = c._g.doc.getElementById(k);
                                    F && F.parentNode.removeChild(F)
                                }
                        }
                    },
                    u = {
                        "": [0],
                        none: [0],
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                    v = function(a, c, d) {
                        if (c = u[b(c).toLowerCase()]) {
                            for (var e = a.attrs["stroke-width"] || "1", f = {
                                    round: e,
                                    square: e,
                                    butt: 0
                                }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--;) g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
                            q(a.node, {
                                "stroke-dasharray": g.join(",")
                            })
                        }
                    },
                    w = function(d, f) {
                        var i = d.node,
                            k = d.attrs,
                            m = i.style.visibility;
                        i.style.visibility = "hidden";
                        for (var o in f)
                            if (f[a](o)) {
                                if (!c._availableAttrs[a](o)) continue;
                                var p = f[o];
                                switch (k[o] = p, o) {
                                    case "blur":
                                        d.blur(p);
                                        break;
                                    case "href":
                                    case "title":
                                        var u = q("title"),
                                            w = c._g.doc.createTextNode(p);
                                        u.appendChild(w), i.appendChild(u);
                                        break;
                                    case "target":
                                        var x = i.parentNode;
                                        if ("a" != x.tagName.toLowerCase()) {
                                            var u = q("a");
                                            x.insertBefore(u, i), u.appendChild(i), x = u
                                        }
                                        "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                                        break;
                                    case "cursor":
                                        i.style.cursor = p;
                                        break;
                                    case "transform":
                                        d.transform(p);
                                        break;
                                    case "arrow-start":
                                        t(d, p);
                                        break;
                                    case "arrow-end":
                                        t(d, p, 1);
                                        break;
                                    case "clip-rect":
                                        var z = b(p).split(j);
                                        if (4 == z.length) {
                                            d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                            var A = q("clipPath"),
                                                B = q("rect");
                                            A.id = c.createUUID(), q(B, {
                                                x: z[0],
                                                y: z[1],
                                                width: z[2],
                                                height: z[3]
                                            }), A.appendChild(B), d.paper.defs.appendChild(A), q(i, {
                                                "clip-path": "url(#" + A.id + ")"
                                            }), d.clip = B
                                        }
                                        if (!p) {
                                            var C = i.getAttribute("clip-path");
                                            if (C) {
                                                var D = c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g, l));
                                                D && D.parentNode.removeChild(D), q(i, {
                                                    "clip-path": l
                                                }), delete d.clip
                                            }
                                        }
                                        break;
                                    case "path":
                                        "path" == d.type && (q(i, {
                                            d: p ? k.path = c._pathToAbsolute(p) : "M0,0"
                                        }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                                        break;
                                    case "width":
                                        if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                                        o = "x", p = k.x;
                                    case "x":
                                        k.fx && (p = -k.x - (k.width || 0));
                                    case "rx":
                                        if ("rx" == o && "rect" == d.type) break;
                                    case "cx":
                                        i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                        break;
                                    case "height":
                                        if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                                        o = "y", p = k.y;
                                    case "y":
                                        k.fy && (p = -k.y - (k.height || 0));
                                    case "ry":
                                        if ("ry" == o && "rect" == d.type) break;
                                    case "cy":
                                        i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                        break;
                                    case "r":
                                        "rect" == d.type ? q(i, {
                                            rx: p,
                                            ry: p
                                        }) : i.setAttribute(o, p), d._.dirty = 1;
                                        break;
                                    case "src":
                                        "image" == d.type && i.setAttributeNS(n, "href", p);
                                        break;
                                    case "stroke-width":
                                        (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                        break;
                                    case "stroke-dasharray":
                                        v(d, p, f);
                                        break;
                                    case "fill":
                                        var E = b(p).match(c._ISURL);
                                        if (E) {
                                            A = q("pattern");
                                            var F = q("image");
                                            A.id = c.createUUID(), q(A, {
                                                    x: 0,
                                                    y: 0,
                                                    patternUnits: "userSpaceOnUse",
                                                    height: 1,
                                                    width: 1
                                                }), q(F, {
                                                    x: 0,
                                                    y: 0,
                                                    "xlink:href": E[1]
                                                }), A.appendChild(F),
                                                function(a) {
                                                    c._preload(E[1], function() {
                                                        var b = this.offsetWidth,
                                                            c = this.offsetHeight;
                                                        q(a, {
                                                            width: b,
                                                            height: c
                                                        }), q(F, {
                                                            width: b,
                                                            height: c
                                                        }), d.paper.safari()
                                                    })
                                                }(A), d.paper.defs.appendChild(A), q(i, {
                                                    fill: "url(#" + A.id + ")"
                                                }), d.pattern = A, d.pattern && s(d);
                                            break
                                        }
                                        var G = c.getRGB(p);
                                        if (G.error) {
                                            if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                                                if ("opacity" in k || "fill-opacity" in k) {
                                                    var H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                                    if (H) {
                                                        var I = H.getElementsByTagName("stop");
                                                        q(I[I.length - 1], {
                                                            "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                                                        })
                                                    }
                                                }
                                                k.gradient = p, k.fill = "none";
                                                break
                                            }
                                        } else delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {
                                            opacity: k.opacity
                                        }), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {
                                            "fill-opacity": k["fill-opacity"]
                                        });
                                        G[a]("opacity") && q(i, {
                                            "fill-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                                        });
                                    case "stroke":
                                        G = c.getRGB(p), i.setAttribute(o, G.hex), "stroke" == o && G[a]("opacity") && q(i, {
                                            "stroke-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                                        }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                        break;
                                    case "gradient":
                                        ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                                        break;
                                    case "opacity":
                                        k.gradient && !k[a]("stroke-opacity") && q(i, {
                                            "stroke-opacity": p > 1 ? p / 100 : p
                                        });
                                    case "fill-opacity":
                                        if (k.gradient) {
                                            H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), H && (I = H.getElementsByTagName("stop"), q(I[I.length - 1], {
                                                "stop-opacity": p
                                            }));
                                            break
                                        }
                                    default:
                                        "font-size" == o && (p = e(p, 10) + "px");
                                        var J = o.replace(/(\-.)/g, function(a) {
                                            return a.substring(1).toUpperCase()
                                        });
                                        i.style[J] = p, d._.dirty = 1, i.setAttribute(o, p)
                                }
                            }
                        y(d, f), i.style.visibility = m
                    },
                    x = 1.2,
                    y = function(d, f) {
                        if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
                            var g = d.attrs,
                                h = d.node,
                                i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                            if (f[a]("text")) {
                                for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                                for (var j, k = b(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, {
                                    dy: i * x,
                                    x: g.x
                                }), j.appendChild(c._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
                            } else
                                for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], {
                                    dy: i * x,
                                    x: g.x
                                }) : q(m[0], {
                                    dy: 0
                                });
                            q(h, {
                                x: g.x,
                                y: g.y
                            }), d._.dirty = 1;
                            var p = d._getBBox(),
                                r = g.y - (p.y + p.height / 2);
                            r && c.is(r, "finite") && q(m[0], {
                                dy: r
                            })
                        }
                    },
                    z = function(a, b) {
                        this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                    },
                    A = c.el;
                z.prototype = A, A.constructor = z, c._engine.path = function(a, b) {
                    var c = q("path");
                    b.canvas && b.canvas.appendChild(c);
                    var d = new z(c, b);
                    return d.type = "path", w(d, {
                        fill: "none",
                        stroke: "#000",
                        path: a
                    }), d
                }, A.rotate = function(a, c, e) {
                    if (this.removed) return this;
                    if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                        var f = this.getBBox(1);
                        c = f.x + f.width / 2, e = f.y + f.height / 2
                    }
                    return this.transform(this._.transform.concat([
                        ["r", a, c, e]
                    ])), this
                }, A.scale = function(a, c, e, f) {
                    if (this.removed) return this;
                    if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                        ["s", a, c, e, f]
                    ])), this
                }, A.translate = function(a, c) {
                    return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([
                        ["t", a, c]
                    ])), this)
                }, A.transform = function(b) {
                    var d = this._;
                    if (null == b) return d.transform;
                    if (c._extractTransform(this, b), this.clip && q(this.clip, {
                            transform: this.matrix.invert()
                        }), this.pattern && s(this), this.node && q(this.node, {
                            transform: this.matrix
                        }), 1 != d.sx || 1 != d.sy) {
                        var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": e
                        })
                    }
                    return this
                }, A.hide = function() {
                    return !this.removed && this.paper.safari(this.node.style.display = "none"), this
                }, A.show = function() {
                    return !this.removed && this.paper.safari(this.node.style.display = ""), this
                }, A.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        var a = this.paper;
                        a.__set__ && a.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), c._tear(this, a), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                        for (var b in this) this[b] = "function" == typeof this[b] ? c._removedFactory(b) : null;
                        this.removed = !0
                    }
                }, A._getBBox = function() {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var a = !0
                    }
                    var b = {};
                    try {
                        b = this.node.getBBox()
                    } catch (c) {} finally {
                        b = b || {}
                    }
                    return a && this.hide(), b
                }, A.attr = function(b, d) {
                    if (this.removed) return this;
                    if (null == b) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && c.is(b, "string")) {
                        if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == b) return this._.transform;
                        for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                        return l - 1 ? h : h[g[0]]
                    }
                    if (null == d && c.is(b, "array")) {
                        for (h = {}, i = 0, l = b.length; l > i; i++) h[b[i]] = this.attr(b[i]);
                        return h
                    }
                    if (null != d) {
                        var m = {};
                        m[b] = d
                    } else null != b && c.is(b, "object") && (m = b);
                    for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
                    for (n in this.paper.customAttributes)
                        if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
                            var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                            this.attrs[n] = m[n];
                            for (var p in o) o[a](p) && (m[p] = o[p])
                        }
                    return w(this, m), this
                }, A.toFront = function() {
                    if (this.removed) return this;
                    "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                    var a = this.paper;
                    return a.top != this && c._tofront(this, a), this
                }, A.toBack = function() {
                    if (this.removed) return this;
                    var a = this.node.parentNode;
                    return "a" == a.tagName.toLowerCase() ? a.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : a.firstChild != this.node && a.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper), this.paper, this
                }, A.insertAfter = function(a) {
                    if (this.removed) return this;
                    var b = a.node || a[a.length - 1].node;
                    return b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this
                }, A.insertBefore = function(a) {
                    if (this.removed) return this;
                    var b = a.node || a[0].node;
                    return b.parentNode.insertBefore(this.node, b), c._insertbefore(this, a, this.paper), this
                }, A.blur = function(a) {
                    var b = this;
                    if (0 !== +a) {
                        var d = q("filter"),
                            e = q("feGaussianBlur");
                        b.attrs.blur = a, d.id = c.createUUID(), q(e, {
                            stdDeviation: +a || 1.5
                        }), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {
                            filter: "url(#" + d.id + ")"
                        })
                    } else b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
                    return b
                }, c._engine.circle = function(a, b, c, d) {
                    var e = q("circle");
                    a.canvas && a.canvas.appendChild(e);
                    var f = new z(e, a);
                    return f.attrs = {
                        cx: b,
                        cy: c,
                        r: d,
                        fill: "none",
                        stroke: "#000"
                    }, f.type = "circle", q(e, f.attrs), f
                }, c._engine.rect = function(a, b, c, d, e, f) {
                    var g = q("rect");
                    a.canvas && a.canvas.appendChild(g);
                    var h = new z(g, a);
                    return h.attrs = {
                        x: b,
                        y: c,
                        width: d,
                        height: e,
                        r: f || 0,
                        rx: f || 0,
                        ry: f || 0,
                        fill: "none",
                        stroke: "#000"
                    }, h.type = "rect", q(g, h.attrs), h
                }, c._engine.ellipse = function(a, b, c, d, e) {
                    var f = q("ellipse");
                    a.canvas && a.canvas.appendChild(f);
                    var g = new z(f, a);
                    return g.attrs = {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e,
                        fill: "none",
                        stroke: "#000"
                    }, g.type = "ellipse", q(f, g.attrs), g
                }, c._engine.image = function(a, b, c, d, e, f) {
                    var g = q("image");
                    q(g, {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        preserveAspectRatio: "none"
                    }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
                    var h = new z(g, a);
                    return h.attrs = {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        src: b
                    }, h.type = "image", h
                }, c._engine.text = function(a, b, d, e) {
                    var f = q("text");
                    a.canvas && a.canvas.appendChild(f);
                    var g = new z(f, a);
                    return g.attrs = {
                        x: b,
                        y: d,
                        "text-anchor": "middle",
                        text: e,
                        font: c._availableAttrs.font,
                        stroke: "none",
                        fill: "#000"
                    }, g.type = "text", w(g, g.attrs), g
                }, c._engine.setSize = function(a, b) {
                    return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, c._engine.create = function() {
                    var a = c._getContainer.apply(0, arguments),
                        b = a && a.container,
                        d = a.x,
                        e = a.y,
                        f = a.width,
                        g = a.height;
                    if (!b) throw new Error("SVG container not found.");
                    var h, i = q("svg"),
                        j = "overflow:hidden;";
                    return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
                        height: g,
                        version: 1.1,
                        width: f,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), 1 == b ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i)), b = new c._Paper, b.width = f, b.height = g, b.canvas = i, b.clear(), b._left = b._top = 0, h && (b.renderfix = function() {}), b.renderfix(), b
                }, c._engine.setViewBox = function(a, b, c, d, e) {
                    k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
                    var f, h, i = g(c / this.width, d / this.height),
                        j = this.top,
                        l = e ? "meet" : "xMinYMin";
                    for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
                            viewBox: f,
                            preserveAspectRatio: l
                        }); i && j;) h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1, j.attr({
                        "stroke-width": h
                    }), j._.dirty = 1, j._.dirtyT = 1, j = j.prev;
                    return this._viewBox = [a, b, c, d, !!e], this
                }, c.prototype.renderfix = function() {
                    var a, b = this.canvas,
                        c = b.style;
                    try {
                        a = b.getScreenCTM() || b.createSVGMatrix()
                    } catch (d) {
                        a = b.createSVGMatrix()
                    }
                    var e = -a.e % 1,
                        f = -a.f % 1;
                    (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"))
                }, c.prototype.clear = function() {
                    c.eve("raphael.clear", this);
                    for (var a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
                    this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
                }, c.prototype.remove = function() {
                    k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
                };
                var B = c.st;
                for (var C in A) A[a](C) && !B[a](C) && (B[C] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(C))
            }
        }(),
        function() {
            if (c.vml) {
                var a = "hasOwnProperty",
                    b = String,
                    d = parseFloat,
                    e = Math,
                    f = e.round,
                    g = e.max,
                    h = e.min,
                    i = e.abs,
                    j = "fill",
                    k = /[, ]+/,
                    l = c.eve,
                    m = " progid:DXImageTransform.Microsoft",
                    n = " ",
                    o = "",
                    p = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    },
                    q = /([clmz]),?([^clmz]*)/gi,
                    r = / progid:\S+Blur\([^\)]+\)/g,
                    s = /-?[^,\s-]+/g,
                    t = "position:absolute;left:0;top:0;width:1px;height:1px",
                    u = 21600,
                    v = {
                        path: 1,
                        rect: 1,
                        image: 1
                    },
                    w = {
                        circle: 1,
                        ellipse: 1
                    },
                    x = function(a) {
                        var d = /[ahqstv]/gi,
                            e = c._pathToAbsolute;
                        if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
                            var g = b(a).replace(q, function(a, b, c) {
                                var d = [],
                                    e = "m" == b.toLowerCase(),
                                    g = p[b];
                                return c.replace(s, function(a) {
                                    e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                                }), g + d
                            });
                            return g
                        }
                        var h, i, j = e(a);
                        g = [];
                        for (var k = 0, l = j.length; l > k; k++) {
                            h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
                            for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? "," : o);
                            g.push(i)
                        }
                        return g.join(n)
                    },
                    y = function(a, b, d) {
                        var e = c.matrix();
                        return e.rotate(-a, .5, .5), {
                            dx: e.x(b, d),
                            dy: e.y(b, d)
                        }
                    },
                    z = function(a, b, c, d, e, f) {
                        var g = a._,
                            h = a.matrix,
                            k = g.fillpos,
                            l = a.node,
                            m = l.style,
                            o = 1,
                            p = "",
                            q = u / b,
                            r = u / c;
                        if (m.visibility = "hidden", b && c) {
                            if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                                var s = y(f, d, e);
                                d = s.dx, e = s.dy
                            }
                            if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                                var t = l.getElementsByTagName(j);
                                t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t)
                            }
                            m.visibility = "visible"
                        }
                    };
                c.toString = function() {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                };
                var A = function(a, c, d) {
                        for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                h = e[g];
                                break;
                            case "wide":
                            case "narrow":
                                j = e[g];
                                break;
                            case "long":
                            case "short":
                                i = e[g]
                        }
                        var k = a.node.getElementsByTagName("stroke")[0];
                        k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
                    },
                    B = function(e, i) {
                        e.attrs = e.attrs || {};
                        var l = e.node,
                            m = e.attrs,
                            p = l.style,
                            q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                            r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                            s = e;
                        for (var t in i) i[a](t) && (m[t] = i[t]);
                        if (q && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
                            var y = +m.cx,
                                B = +m.cy,
                                D = +m.rx || +m.r || 0,
                                E = +m.ry || +m.r || 0;
                            l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1
                        }
                        if ("clip-rect" in i) {
                            var G = b(i["clip-rect"]).split(k);
                            if (4 == G.length) {
                                G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                                var H = l.clipRect || c._g.doc.createElement("div"),
                                    I = H.style;
                                I.clip = c.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
                            }
                            i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                        }
                        if (e.textpath) {
                            var J = e.textpath.style;
                            i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
                        }
                        if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                            var K = l.getElementsByTagName(j),
                                L = !1;
                            if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                                var M = b(i.fill).match(c._ISURL);
                                if (M) {
                                    K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                                    var N = e.getBBox(1);
                                    K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], c._preload(M[1], function() {
                                        e._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else K.color = c.getRGB(i.fill).hex, K.src = o, K.type = "solid", c.getRGB(i.fill).error && (s.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != b(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
                            }
                            if ("fill-opacity" in i || "opacity" in i) {
                                var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                                O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none")
                            }
                            l.appendChild(K);
                            var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                                Q = !1;
                            !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
                            var R = c.getRGB(i.stroke);
                            P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
                            var S = .75 * (d(i["stroke-width"]) || 1);
                            if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), i["stroke-dasharray"]) {
                                var T = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                P.dashstyle = T[a](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
                            }
                            Q && l.appendChild(P)
                        }
                        if ("text" == s.type) {
                            s.paper.canvas.style.display = o;
                            var U = s.paper.span,
                                V = 100,
                                W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                            p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = b(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var X = U.getBoundingClientRect();
                            s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                            for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++)
                                if (Y[Z] in i) {
                                    s._.dirty = 1;
                                    break
                                }
                            switch (m["text-anchor"]) {
                                case "start":
                                    s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                                    break;
                                case "end":
                                    s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                                    break;
                                default:
                                    s.textpath.style["v-text-align"] = "center", s.bbx = 0
                            }
                            s.textpath.style["v-text-kern"] = !0
                        }
                    },
                    C = function(a, f, g) {
                        a.attrs = a.attrs || {};
                        var h = (a.attrs, Math.pow),
                            i = "linear",
                            j = ".5 .5";
                        if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function(a, b, c) {
                                return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o
                            }), f = f.split(/\s*\-\s*/), "linear" == i) {
                            var k = f.shift();
                            if (k = -d(k), isNaN(k)) return null
                        }
                        var l = c._parseDots(f);
                        if (!l) return null;
                        if (a = a.shape || a.node, l.length) {
                            a.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
                            for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
                            g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), a.appendChild(g)
                        }
                        return 1
                    },
                    D = function(a, b) {
                        this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                    },
                    E = c.el;
                D.prototype = E, E.constructor = D, E.transform = function(a) {
                    if (null == a) return this._.transform;
                    var d, e = this.paper._viewBoxShift,
                        f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
                    e && (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, f + a);
                    var g, h = this.matrix.clone(),
                        i = this.skew,
                        j = this.node,
                        k = ~b(this.attrs.fill).indexOf("-"),
                        l = !b(this.attrs.fill).indexOf("url(");
                    if (h.translate(1, 1), l || k || "image" == this.type)
                        if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
                            j.style.filter = h.toFilter();
                            var m = this.getBBox(),
                                p = this.getBBox(1),
                                q = m.x - p.x,
                                r = m.y - p.y;
                            j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
                        } else j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
                    else j.style.filter = o, i.matrix = b(h), i.offset = h.offset();
                    return d && (this._.transform = d), this
                }, E.rotate = function(a, c, e) {
                    if (this.removed) return this;
                    if (null != a) {
                        if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                            var f = this.getBBox(1);
                            c = f.x + f.width / 2, e = f.y + f.height / 2
                        }
                        return this._.dirtyT = 1, this.transform(this._.transform.concat([
                            ["r", a, c, e]
                        ])), this
                    }
                }, E.translate = function(a, c) {
                    return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([
                        ["t", a, c]
                    ])), this)
                }, E.scale = function(a, c, e, f) {
                    if (this.removed) return this;
                    if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                        ["s", a, c, e, f]
                    ])), this._.dirtyT = 1, this
                }, E.hide = function() {
                    return !this.removed && (this.node.style.display = "none"), this
                }, E.show = function() {
                    return !this.removed && (this.node.style.display = o), this
                }, E._getBBox = function() {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, E.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                        for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                        this.removed = !0
                    }
                }, E.attr = function(b, d) {
                    if (this.removed) return this;
                    if (null == b) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && c.is(b, "string")) {
                        if (b == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                        return m - 1 ? h : h[g[0]]
                    }
                    if (this.attrs && null == d && c.is(b, "array")) {
                        for (h = {}, i = 0, m = b.length; m > i; i++) h[b[i]] = this.attr(b[i]);
                        return h
                    }
                    var n;
                    null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
                    for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
                    if (n) {
                        for (o in this.paper.customAttributes)
                            if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                                var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                                this.attrs[o] = n[o];
                                for (var q in p) p[a](q) && (n[q] = p[q])
                            }
                        n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
                    }
                    return this
                }, E.toFront = function() {
                    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
                }, E.toBack = function() {
                    return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
                }, E.insertAfter = function(a) {
                    return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
                }, E.insertBefore = function(a) {
                    return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
                }, E.blur = function(a) {
                    var b = this.node.runtimeStyle,
                        d = b.filter;
                    return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
                }, c._engine.path = function(a, b) {
                    var c = F("shape");
                    c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
                    var d = new D(c, b),
                        e = {
                            fill: "none",
                            stroke: "#000"
                        };
                    a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
                    var f = F("skew");
                    return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
                }, c._engine.rect = function(a, b, d, e, f, g) {
                    var h = c._rectPath(b, d, e, f, g),
                        i = a.path(h),
                        j = i.attrs;
                    return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
                }, c._engine.ellipse = function(a, b, c, d, e) {
                    var f = a.path();
                    return f.attrs, f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e
                    }), f
                }, c._engine.circle = function(a, b, c, d) {
                    var e = a.path();
                    return e.attrs, e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
                        cx: b,
                        cy: c,
                        r: d
                    }), e
                }, c._engine.image = function(a, b, d, e, f, g) {
                    var h = c._rectPath(d, e, f, g),
                        i = a.path(h).attr({
                            stroke: "none"
                        }),
                        k = i.attrs,
                        l = i.node,
                        m = l.getElementsByTagName(j)[0];
                    return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
                }, c._engine.text = function(a, d, e, g) {
                    var h = F("shape"),
                        i = F("path"),
                        j = F("textpath");
                    d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
                    var k = new D(h, a),
                        l = {
                            fill: "#000",
                            stroke: "none",
                            font: c._availableAttrs.font,
                            text: g
                        };
                    k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
                    var m = F("skew");
                    return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
                }, c._engine.setSize = function(a, b) {
                    var d = this.canvas.style;
                    return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
                }, c._engine.setViewBox = function(a, b, d, e, f) {
                    c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
                    var h, i, j = this.width,
                        k = this.height,
                        l = 1 / g(d / j, e / k);
                    return f && (h = k / e, i = j / d, j > d * h && (a -= (j - d * h) / 2 / h), k > e * i && (b -= (k - e * i) / 2 / i)), this._viewBox = [a, b, d, e, !!f], this._viewBoxShift = {
                        dx: -a,
                        dy: -b,
                        scale: l
                    }, this.forEach(function(a) {
                        a.transform("...")
                    }), this
                };
                var F;
                c._engine.initWin = function(a) {
                    var b = a.document;
                    b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                            return b.createElement("<rvml:" + a + ' class="rvml">')
                        }
                    } catch (c) {
                        F = function(a) {
                            return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, c._engine.initWin(c._g.win), c._engine.create = function() {
                    var a = c._getContainer.apply(0, arguments),
                        b = a.container,
                        d = a.height,
                        e = a.width,
                        f = a.x,
                        g = a.y;
                    if (!b) throw new Error("VML container not found.");
                    var h = new c._Paper,
                        i = h.canvas = c._g.doc.createElement("div"),
                        j = i.style;
                    return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = c._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == b ? (c._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i), h.renderfix = function() {}, h
                }, c.prototype.clear = function() {
                    c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, c.prototype.remove = function() {
                    c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                    return !0
                };
                var G = c.st;
                for (var H in E) E[a](H) && !G[a](H) && (G[H] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(H))
            }
        }(), B.was ? A.win.Raphael = c : Raphael = c, c
});

//Tweenlite.js
(function(m) {
    var F = function(a) {
            var a = a.split("."),
                c = m,
                b;
            for (b = 0; b < a.length; b++) c[a[b]] = c = c[a[b]] || {};
            return c
        },
        n = F("com.greensock"),
        o, k, d, z, G, v = {},
        C = function(a, c, b, j) {
            this.sc = v[a] ? v[a].sc : [];
            v[a] = this;
            this.gsClass = null;
            this.def = b;
            var e = c || [],
                d = [];
            this.check = function(c) {
                for (var f = e.length, g = 0, l; - 1 < --f;)(l = v[e[f]] || new C(e[f])).gsClass ? d[f] = l.gsClass : (g++, c && l.sc.push(this));
                if (0 === g && b) {
                    var c = ("com.greensock." + a).split("."),
                        f = c.pop(),
                        k = F(c.join("."))[f] = this.gsClass = b.apply(b, d);
                    j && ((m.GreenSockGlobals || m)[f] = k, "function" === typeof define && define.amd ? define((m.GreenSockAMDPath ? m.GreenSockAMDPath + "/" : "") + a.split(".").join("/"), [], function() {
                        return k
                    }) : "undefined" !== typeof module && module.exports && (module.exports = k));
                    for (f = 0; f < this.sc.length; f++) this.sc[f].check(!1)
                }
            };
            this.check(!0)
        },
        q = n._class = function(a, c, b) {
            new C(a, [], function() {
                return c
            }, b);
            return c
        };
    m._gsDefine = function(a, c, b, j) {
        return new C(a, c, b, j)
    };
    var H = [0, 0, 1, 1],
        D = [],
        s = q("easing.Ease", function(a, c, b, j) {
            this._func = a;
            this._type = b || 0;
            this._power = j || 0;
            this._params = c ? H.concat(c) : H
        }, !0);
    d = s.prototype;
    d._calcEnd = !1;
    d.getRatio = function(a) {
        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
        var c = this._type,
            b = this._power,
            j = 1 === c ? 1 - a : 2 === c ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
        1 === b ? j *= j : 2 === b ? j *= j * j : 3 === b ? j *= j * j * j : 4 === b && (j *= j * j * j * j);
        return 1 === c ? 1 - j : 2 === c ? j : 0.5 > a ? j / 2 : 1 - j / 2
    };
    o = ["Linear", "Quad", "Cubic", "Quart", "Quint"];
    for (k = o.length; - 1 < --k;) d = q("easing." + o[k], function() {}, !0), z = q("easing.Power" + k, function() {}, !0), d.easeOut = z.easeOut = new s(null, null, 1, k), d.easeIn = z.easeIn = new s(null, null, 2, k), d.easeInOut = z.easeInOut = new s(null, null, 3, k);
    q("easing.Strong", n.easing.Power4, !0);
    n.easing.Linear.easeNone = n.easing.Linear.easeIn;
    d = q("events.EventDispatcher", function(a) {
        this._listeners = {};
        this._eventTarget = a || this
    }).prototype;
    d.addEventListener = function(a, c, b, j, e) {
        var e = e || 0,
            d = this._listeners[a],
            h = 0,
            f;
        null == d && (this._listeners[a] = d = []);
        for (f = d.length; - 1 < --f;) a = d[f], a.c === c ? d.splice(f, 1) : 0 === h && a.pr < e && (h = f + 1);
        d.splice(h, 0, {
            c: c,
            s: b,
            up: j,
            pr: e
        })
    };
    d.removeEventListener = function(a, c) {
        var b = this._listeners[a];
        if (b)
            for (var j = b.length; - 1 < --j;)
                if (b[j].c === c) {
                    b.splice(j, 1);
                    break
                }
    };
    d.dispatchEvent = function(a) {
        var c = this._listeners[a];
        if (c)
            for (var b = c.length, j, d = this._eventTarget; - 1 < --b;) j = c[b], j.up ? j.c.call(j.s || d, {
                type: a,
                target: d
            }) : j.c.call(j.s || d)
    };
    var A = m.requestAnimationFrame,
        B = m.cancelAnimationFrame,
        I = Date.now || function() {
            return (new Date).getTime()
        };
    o = ["ms", "moz", "webkit", "o"];
    for (k = o.length; - 1 < --k && !A;) A = m[o[k] + "RequestAnimationFrame"], B = m[o[k] + "CancelAnimationFrame"] || m[o[k] + "CancelRequestAnimationFrame"];
    B || (B = function(a) {
        m.clearTimeout(a)
    });
    q("Ticker", function(a, c) {
        this.frame = this.time = 0;
        var b = this,
            j = I(),
            d = !1 !== c,
            i, h, f, g, l;
        this.tick = function() {
            b.time = (I() - j) / 1E3;
            if (!i || b.time >= l) b.frame++, l = b.time + g - (b.time - l) - 5E-4, l <= b.time && (l = b.time + 0.001), b.dispatchEvent("tick");
            f = h(b.tick)
        };
        this.fps = function(a) {
            if (!arguments.length) return i;
            i = a;
            g = 1 / (i || 60);
            l = this.time + g;
            h = 0 === i ? function() {} : !d || !A ? function(a) {
                return m.setTimeout(a, 1E3 * (l - b.time) + 1 >> 0 || 1)
            } : A;
            B(f);
            f = h(b.tick)
        };
        this.useRAF = function(a) {
            if (!arguments.length) return d;
            d = a;
            this.fps(i)
        };
        this.fps(a)
    });
    d = n.Ticker.prototype = new n.events.EventDispatcher;
    d.constructor = n.Ticker;
    var p = q("core.Animation", function(a, c) {
            this.vars = c || {};
            this._duration = this._totalDuration = a || 0;
            this._delay = Number(this.vars.delay) || 0;
            this._timeScale = 1;
            this._active = !0 == this.vars.immediateRender;
            this.data = this.vars.data;
            this._reversed = !0 == this.vars.reversed;
            if (t) {
                G || (r.tick(), G = !0);
                var b = this.vars.useFrames ? w : t;
                b.insert(this, b._time);
                this.vars.paused && this.paused(!0)
            }
        }),
        r = p.ticker = new n.Ticker;
    d = p.prototype;
    d._dirty = d._gc = d._initted = d._paused = !1;
    d._totalTime = d._time = 0;
    d._rawPrevTime = -1;
    d._next = d._last = d._onUpdate = d._timeline = d.timeline = null;
    d._paused = !1;
    d.play = function(a, c) {
        arguments.length && this.seek(a, c);
        this.reversed(!1);
        return this.paused(!1)
    };
    d.pause = function(a, c) {
        arguments.length && this.seek(a, c);
        return this.paused(!0)
    };
    d.resume = function(a, c) {
        arguments.length && this.seek(a, c);
        return this.paused(!1)
    };
    d.seek = function(a, c) {
        return this.totalTime(Number(a), !1 != c)
    };
    d.restart = function(a, c) {
        this.reversed(!1);
        this.paused(!1);
        return this.totalTime(a ? -this._delay : 0, !1 != c)
    };
    d.reverse = function(a, c) {
        arguments.length && this.seek(a || this.totalDuration(), c);
        this.reversed(!0);
        return this.paused(!1)
    };
    d.render = function() {};
    d.invalidate = function() {
        return this
    };
    d._enabled = function(a, c) {
        this._gc = !a;
        this._active = a && !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration;
        !0 != c && (a && null == this.timeline ? this._timeline.insert(this, this._startTime - this._delay) : !a && null != this.timeline && this._timeline._remove(this, !0));
        return !1
    };
    d._kill = function() {
        return this._enabled(!1, !1)
    };
    d.kill = function(a, c) {
        this._kill(a, c);
        return this
    };
    d._uncache = function(a) {
        for (a = a ? this : this.timeline; a;) a._dirty = !0, a = a.timeline;
        return this
    };
    d.eventCallback = function(a, c, b, j) {
        if (null == a) return null;
        if ("on" === a.substr(0, 2)) {
            if (1 === arguments.length) return this.vars[a];
            if (null == c) delete this.vars[a];
            else if (this.vars[a] = c, this.vars[a + "Params"] = b, this.vars[a + "Scope"] = j, b)
                for (var d = b.length; - 1 < --d;) "{self}" === b[d] && (b = this.vars[a + "Params"] = b.concat(), b[d] = this);
            "onUpdate" === a && (this._onUpdate = c)
        }
        return this
    };
    d.delay = function(a) {
        if (!arguments.length) return this._delay;
        this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay);
        this._delay = a;
        return this
    };
    d.duration = function(a) {
        if (!arguments.length) return this._dirty = !1, this._duration;
        this._duration = this._totalDuration = a;
        this._uncache(!0);
        this._timeline.smoothChildTiming && this._active && 0 != a && this.totalTime(this._totalTime * (a / this._duration), !0);
        return this
    };
    d.totalDuration = function(a) {
        this._dirty = !1;
        return !arguments.length ? this._totalDuration : this.duration(a)
    };
    d.time = function(a, c) {
        if (!arguments.length) return this._time;
        this._dirty && this.totalDuration();
        a > this._duration && (a = this._duration);
        return this.totalTime(a, c)
    };
    d.totalTime = function(a, c) {
        if (!arguments.length) return this._totalTime;
        if (this._timeline) {
            0 > a && (a += this.totalDuration());
            if (this._timeline.smoothChildTiming && (this._dirty && this.totalDuration(), a > this._totalDuration && (a = this._totalDuration), this._startTime = (this._paused ? this._pauseTime : this._timeline._time) - (!this._reversed ? a : this._totalDuration - a) / this._timeScale, this._timeline._dirty || this._uncache(!1), !this._timeline._active))
                for (var b = this._timeline; b._timeline;) b.totalTime(b._totalTime, !0), b = b._timeline;
            this._gc && this._enabled(!0, !1);
            this._totalTime != a && this.render(a, c, !1)
        }
        return this
    };
    d.startTime = function(a) {
        if (!arguments.length) return this._startTime;
        a != this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.insert(this, a - this._delay));
        return this
    };
    d.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        a = a || 1E-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var c = this._pauseTime || 0 == this._pauseTime ? this._pauseTime : this._timeline._totalTime;
            this._startTime = c - (c - this._startTime) * this._timeScale / a
        }
        this._timeScale = a;
        return this._uncache(!1)
    };
    d.reversed = function(a) {
        if (!arguments.length) return this._reversed;
        a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0));
        return this
    };
    d.paused = function(a) {
        if (!arguments.length) return this._paused;
        a != this._paused && this._timeline && (!a && this._timeline.smoothChildTiming && (this._startTime += this._timeline.rawTime() - this._pauseTime, this._uncache(!1)), this._pauseTime = a ? this._timeline.rawTime() : null, this._paused = a, this._active = !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration);
        this._gc && (a || this._enabled(!0, !1));
        return this
    };
    n = q("core.SimpleTimeline", function(a) {
        p.call(this, 0, a);
        this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    d = n.prototype = new p;
    d.constructor = n;
    d.kill()._gc = !1;
    d._first = d._last = null;
    d._sortChildren = !1;
    d.insert = function(a, c) {
        a._startTime = Number(c || 0) + a._delay;
        a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale);
        a.timeline && a.timeline._remove(a, !0);
        a.timeline = a._timeline = this;
        a._gc && a._enabled(!0, !0);
        var b = this._last;
        if (this._sortChildren)
            for (var d = a._startTime; b && b._startTime > d;) b = b._prev;
        b ? (a._next = b._next, b._next = a) : (a._next = this._first, this._first = a);
        a._next ? a._next._prev = a : this._last = a;
        a._prev = b;
        this._timeline && this._uncache(!0);
        return this
    };
    d._remove = function(a, c) {
        a.timeline === this && (c || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0));
        return this
    };
    d.render = function(a, c) {
        var b = this._first,
            d;
        for (this._totalTime = this._time = this._rawPrevTime = a; b;) {
            d = b._next;
            if (b._active || a >= b._startTime && !b._paused) b._reversed ? b.render((!b._dirty ? b._totalDuration : b.totalDuration()) - (a - b._startTime) * b._timeScale, c, !1) : b.render((a - b._startTime) * b._timeScale, c, !1);
            b = d
        }
    };
    d.rawTime = function() {
        return this._totalTime
    };
    var g = q("TweenLite", function(a, c, b) {
        p.call(this, c, b);
        if (null == a) throw "Cannot tween an undefined reference.";
        this.target = a;
        this._overwrite = null == this.vars.overwrite ? J[g.defaultOverwrite] : "number" === typeof this.vars.overwrite ? this.vars.overwrite >> 0 : J[this.vars.overwrite];
        if ((a instanceof Array || a.jquery) && "object" === typeof a[0]) {
            this._targets = a.slice(0);
            this._propLookup = [];
            this._siblings = [];
            for (a = 0; a < this._targets.length; a++) b = this._targets[a], b.jquery ? (this._targets.splice(a--, 1), this._targets = this._targets.concat(b.constructor.makeArray(b))) : (this._siblings[a] = x(b, this, !1), 1 === this._overwrite && 1 < this._siblings[a].length && E(b, this, null, 1, this._siblings[a]))
        } else this._propLookup = {}, this._siblings = x(a, this, !1), 1 === this._overwrite && 1 < this._siblings.length && E(a, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === c && 0 === this._delay && !1 != this.vars.immediateRender) && this.render(-this._delay, !1, !0)
    }, !0);
    d = g.prototype = new p;
    d.constructor = g;
    d.kill()._gc = !1;
    d.ratio = 0;
    d._firstPT = d._targets = d._overwrittenProps = null;
    d._notifyPluginsOfEnabled = !1;
    g.version = 12;
    g.defaultEase = d._ease = new s(null, null, 1, 1);
    g.defaultOverwrite = "auto";
    g.ticker = r;
    var K = g._plugins = {},
        u = g._tweenLookup = {},
        M = 0,
        N = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            orientToBezier: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1
        },
        J = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        w = p._rootFramesTimeline = new n,
        t = p._rootTimeline = new n;
    t._startTime = r.time;
    w._startTime = r.frame;
    t._active = w._active = !0;
    p._updateRoot = function() {
        t.render((r.time - t._startTime) * t._timeScale, !1, !1);
        w.render((r.frame - w._startTime) * w._timeScale, !1, !1);
        if (!(r.frame % 120)) {
            var a, c, b;
            for (b in u) {
                c = u[b].tweens;
                for (a = c.length; - 1 < --a;) c[a]._gc && c.splice(a, 1);
                0 === c.length && delete u[b]
            }
        }
    };
    r.addEventListener("tick", p._updateRoot);
    var x = function(a, c, b) {
            var d = a._gsTweenID,
                e;
            if (!u[d || (a._gsTweenID = d = "t" + M++)]) u[d] = {
                target: a,
                tweens: []
            };
            if (c && (a = u[d].tweens, a[e = a.length] = c, b))
                for (; - 1 < --e;) a[e] === c && a.splice(e, 1);
            return u[d].tweens
        },
        E = function(a, c, b, d, e) {
            var i, h, f;
            if (1 === d || 4 <= d) {
                a = e.length;
                for (i = 0; i < a; i++)
                    if ((f = e[i]) !== c) f._gc || f._enabled(!1, !1) && (h = !0);
                    else if (5 === d) break;
                return h
            }
            var g = c._startTime + 1E-10,
                l = [],
                k = 0,
                m;
            for (i = e.length; - 1 < --i;)
                if (!((f = e[i]) === c || f._gc || f._paused)) f._timeline !== c._timeline ? (m = m || L(c, 0), 0 === L(f, m) && (l[k++] = f)) : f._startTime <= g && f._startTime + f.totalDuration() / f._timeScale + 1E-10 > g && ((0 === c._duration || !f._initted) && 2E-10 >= g - f._startTime || (l[k++] = f));
            for (i = k; - 1 < --i;)
                if (f = l[i], 2 === d && f._kill(b, a) && (h = !0), 2 !== d || !f._firstPT && f._initted) f._enabled(!1, !1) && (h = !0);
            return h
        },
        L = function(a, c) {
            for (var b = a._timeline, d = b._timeScale, e = a._startTime; b._timeline;) {
                e += b._startTime;
                d *= b._timeScale;
                if (b._paused) return -100;
                b = b._timeline
            }
            e /= d;
            return e > c ? e - c : !a._initted && 2E-10 > e - c ? 1E-10 : (e += a.totalDuration() / a._timeScale / d) > c ? 0 : e - c - 1E-10
        };
    d._init = function() {
        this.vars.startAt && (this.vars.startAt.overwrite = 0, this.vars.startAt.immediateRender = !0, g.to(this.target, 0, this.vars.startAt));
        var a, c;
        this._ease = this.vars.ease instanceof s ? this.vars.easeParams instanceof Array ? this.vars.ease.config.apply(this.vars.ease, this.vars.easeParams) : this.vars.ease : "function" === typeof this.vars.ease ? new s(this.vars.ease, this.vars.easeParams) : g.defaultEase;
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets)
            for (a = this._targets.length; - 1 < --a;) {
                if (this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], this._overwrittenProps ? this._overwrittenProps[a] : null)) c = !0
            } else c = this._initProps(this.target, this._propLookup, this._siblings, this._overwrittenProps);
        c && g._onPluginEvent("_onInitAllProps", this);
        this._overwrittenProps && null == this._firstPT && "function" !== typeof this.target && this._enabled(!1, !1);
        if (this.vars.runBackwards)
            for (a = this._firstPT; a;) a.s += a.c, a.c = -a.c, a = a._next;
        this._onUpdate = this.vars.onUpdate;
        this._initted = !0
    };
    d._initProps = function(a, c, b, d) {
        var e, i, h, f, g, l;
        if (null == a) return !1;
        for (e in this.vars) {
            if (N[e]) {
                if ("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e)
                    if (g = this.vars[e])
                        for (i = g.length; - 1 < --i;) "{self}" === g[i] && (g = this.vars[e] = g.concat(), g[i] = this)
            } else if (K[e] && (f = new K[e])._onInitTween(a, this.vars[e], this)) {
                this._firstPT = l = {
                    _next: this._firstPT,
                    t: f,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: e,
                    pg: !0,
                    pr: f._priority
                };
                for (i = f._overwriteProps.length; - 1 < --i;) c[f._overwriteProps[i]] = this._firstPT;
                if (f._priority || f._onInitAllProps) h = !0;
                if (f._onDisable || f._onEnable) this._notifyPluginsOfEnabled = !0
            } else this._firstPT = c[e] = l = {
                _next: this._firstPT,
                t: a,
                p: e,
                f: "function" === typeof a[e],
                n: e,
                pg: !1,
                pr: 0
            }, l.s = !l.f ? parseFloat(a[e]) : a[e.indexOf("set") || "function" !== typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)](), i = this.vars[e], l.c = "number" === typeof i ? i - l.s : "string" === typeof i && "=" === i.charAt(1) ? parseInt(i.charAt(0) + "1") * Number(i.substr(2)) : Number(i) || 0;
            l && l._next && (l._next._prev = l)
        }
        return d && this._kill(d, a) ? this._initProps(a, c, b, d) : 1 < this._overwrite && this._firstPT && 1 < b.length && E(a, this, c, this._overwrite, b) ? (this._kill(c, a), this._initProps(a, c, b, d)) : h
    };
    d.render = function(a, c, b) {
        var d = this._time,
            e, i;
        if (a >= this._duration) {
            if (this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (e = !0, i = "onComplete"), 0 === this._duration) {
                if (0 === a || 0 > this._rawPrevTime) this._rawPrevTime !== a && (b = !0);
                this._rawPrevTime = a
            }
        } else if (0 >= a) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (0 !== d || 0 === this._duration && 0 < this._rawPrevTime) i = "onReverseComplete", e = this._reversed;
            0 > a ? (this._active = !1, 0 === this._duration && (0 <= this._rawPrevTime && (b = !0), this._rawPrevTime = a)) : this._initted || (b = !0)
        } else if (this._totalTime = this._time = a, this._easeType) {
            var h = a / this._duration,
                f = this._easeType,
                g = this._easePower;
            if (1 === f || 3 === f && 0.5 <= h) h = 1 - h;
            3 === f && (h *= 2);
            1 === g ? h *= h : 2 === g ? h *= h * h : 3 === g ? h *= h * h * h : 4 === g && (h *= h * h * h * h);
            this.ratio = 1 === f ? 1 - h : 2 === f ? h : 0.5 > a / this._duration ? h / 2 : 1 - h / 2
        } else this.ratio = this._ease.getRatio(a / this._duration);
        if (this._time !== d || b) {
            this._initted || (this._init(), !e && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration)));
            !this._active && !this._paused && (this._active = !0);
            if (0 === d && this.vars.onStart && (0 !== this._time || 0 === this._duration)) c || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || D);
            for (a = this._firstPT; a;) {
                if (a.f) a.t[a.p](a.c * this.ratio + a.s);
                else a.t[a.p] = a.c * this.ratio + a.s;
                a = a._next
            }
            this._onUpdate && (c || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || D));
            i && !this._gc && (e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), c || this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || D))
        }
    };
    d._kill = function(a, c) {
        "all" === a && (a = null);
        if (null == a && (null == c || c == this.target)) return this._enabled(!1, !1);
        var c = c || this._targets || this.target,
            b, d, e, i, g, f, k;
        if ((c instanceof Array || c.jquery) && "object" === typeof c[0])
            for (b = c.length; - 1 < --b;) this._kill(a, c[b]) && (g = !0);
        else {
            if (this._targets)
                for (b = this._targets.length; - 1 < --b;) {
                    if (c === this._targets[b]) {
                        i = this._propLookup[b] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        d = this._overwrittenProps[b] = a ? this._overwrittenProps[b] || {} : "all";
                        break
                    }
                } else {
                    if (c !== this.target) return !1;
                    i = this._propLookup;
                    d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
            if (i)
                for (e in f = a || i, k = a != d && "all" != d && a != i && (null == a || !0 != a._tempKill), f) {
                    if (b = i[e]) {
                        b.pg && b.t._kill(f) && (g = !0);
                        if (!b.pg || 0 === b.t._overwriteProps.length) b._prev ? b._prev._next = b._next : b === this._firstPT && (this._firstPT = b._next), b._next && (b._next._prev = b._prev), b._next = b._prev = null;
                        delete i[e]
                    }
                    k && (d[e] = 1)
                }
        }
        return g
    };
    d.invalidate = function() {
        this._notifyPluginsOfEnabled && g._onPluginEvent("_onDisable", this);
        this._onUpdate = this._overwrittenProps = this._firstPT = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = !1;
        this._propLookup = this._targets ? {} : [];
        return this
    };
    d._enabled = function(a, c) {
        if (a && this._gc)
            if (this._targets)
                for (var b = this._targets.length; - 1 < --b;) this._siblings[b] = x(this._targets[b], this, !0);
            else this._siblings = x(this.target, this, !0);
        p.prototype._enabled.call(this, a, c);
        return this._notifyPluginsOfEnabled && this._firstPT ? g._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
    };
    g.to = function(a, c, b) {
        return new g(a, c, b)
    };
    g.from = function(a, c, b) {
        b.runBackwards = !0;
        !1 != b.immediateRender && (b.immediateRender = !0);
        return new g(a, c, b)
    };
    g.fromTo = function(a, c, b, d) {
        d.startAt = b;
        b.immediateRender && (d.immediateRender = !0);
        return new g(a, c, d)
    };
    g.delayedCall = function(a, c, b, d, e) {
        return new g(c, 0, {
            delay: a,
            onComplete: c,
            onCompleteParams: b,
            onCompleteScope: d,
            onReverseComplete: c,
            onReverseCompleteParams: b,
            onReverseCompleteScope: d,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0
        })
    };
    g.set = function(a, c) {
        return new g(a, 0, c)
    };
    g.killTweensOf = g.killDelayedCallsTo = function(a, c) {
        for (var b = g.getTweensOf(a), d = b.length; - 1 < --d;) b[d]._kill(c, a)
    };
    g.getTweensOf = function(a) {
        if (null != a) {
            var c, b, d;
            if ((a instanceof Array || a.jquery) && "object" === typeof a[0]) {
                c = a.length;
                for (b = []; - 1 < --c;) b = b.concat(g.getTweensOf(a[c]));
                for (c = b.length; - 1 < --c;) {
                    d = b[c];
                    for (a = c; - 1 < --a;) d === b[a] && b.splice(c, 1)
                }
            } else {
                b = x(a).concat();
                for (c = b.length; - 1 < --c;) b[c]._gc && b.splice(c, 1)
            }
            return b
        }
    };
    var y = q("plugins.TweenPlugin", function(a, c) {
        this._overwriteProps = (a || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = c || 0
    }, !0);
    d = y.prototype;
    y.version = 12;
    y.API = 2;
    d._firstPT = null;
    d._addTween = function(a, c, b, d, e, g) {
        var h;
        if (null != d && (h = "number" === typeof d || "=" !== d.charAt(1) ? Number(d) - b : parseInt(d.charAt(0) + "1") * Number(d.substr(2)))) this._firstPT = a = {
            _next: this._firstPT,
            t: a,
            p: c,
            s: b,
            c: h,
            f: "function" === typeof a[c],
            n: e || c,
            r: g
        }, a._next && (a._next._prev = a)
    };
    d.setRatio = function(a) {
        for (var c = this._firstPT, b; c;) {
            b = c.c * a + c.s;
            c.r && (b = b + (0 < b ? 0.5 : -0.5) >> 0);
            if (c.f) c.t[c.p](b);
            else c.t[c.p] = b;
            c = c._next
        }
    };
    d._kill = function(a) {
        if (null != a[this._propName]) this._overwriteProps = [];
        else
            for (var c = this._overwriteProps.length; - 1 < --c;) null != a[this._overwriteProps[c]] && this._overwriteProps.splice(c, 1);
        for (c = this._firstPT; c;) null != a[c.n] && ((c._next && (c._next._prev = c._prev), c._prev) ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next;
        return !1
    };
    d._roundProps = function(a, c) {
        for (var b = this._firstPT; b;) {
            if (a[this._propName] || null != b.n && a[b.n.split(this._propName + "_").join("")]) b.r = c;
            b = b._next
        }
    };
    g._onPluginEvent = function(a, c) {
        var b = c._firstPT,
            d;
        if ("_onInitAllProps" === a) {
            for (var e, g, h, f; b;) {
                f = b._next;
                for (e = g; e && e.pr > b.pr;) e = e._next;
                (b._prev = e ? e._prev : h) ? b._prev._next = b: g = b;
                (b._next = e) ? e._prev = b: h = b;
                b = f
            }
            b = c._firstPT = g
        }
        for (; b;) b.pg && "function" === typeof b.t[a] && b.t[a]() && (d = !0), b = b._next;
        return d
    };
    y.activate = function(a) {
        for (var c = a.length; - 1 < --c;) a[c].API === y.API && (g._plugins[(new a[c])._propName] = a[c]);
        return !0
    };
    if (o = m._gsQueue) {
        for (k = 0; k < o.length; k++) o[k]();
        for (d in v) v[d].def || console.log("Warning: TweenLite encountered missing dependency: com.greensock." + d)
    }
})(window);

//Map path and default settings - you can edit this
var simplemaps_countymap_mapinfo = {

	map_name:"county",
	
	calibrate:{
		width:555, 
		ratio:1.58, 
		x_adjust:0, 
		y_adjust:0
	}, 
	
	label_size:28, 
	
	state_bbox_array:{'10001':{x:493, y:136, x2:498, y2:143}, '10003':{x:491, y:130, x2:495, y2:137}, '10005':{x:494, y:140, x2:502, y2:148}, '11001':{x:480, y:143, x2:483, y2:146}, '12001':{x:443, y:269, x2:450, y2:275}, '12003':{x:443, y:260, x2:449, y2:266}, '12005':{x:405, y:265, x2:412, y2:273}, '12007':{x:445, y:265, x2:449, y2:271}, '12009':{x:463, y:280, x2:471, y2:293}, '12011':{x:469, y:310, x2:479, y2:316}, '12013':{x:411, y:264, x2:416, y2:270}, '12015':{x:451, y:304, x2:461, y2:309}, '12017':{x:443, y:280, x2:450, y2:285}, '12019':{x:448, y:264, x2:454, y2:271}, '12021':{x:458, y:310, x2:470, y2:319}, '12023':{x:440, y:261, x2:444, y2:270}, '12027':{x:454, y:300, x2:460, y2:305}, '12029':{x:434, y:271, x2:440, y2:278}, '12031':{x:448, y:259, x2:456, y2:265}, '12033':{x:386, y:261, x2:394, y2:271}, '12035':{x:455, y:270, x2:460, y2:276}, '12037':{x:414, y:271, x2:424, y2:276}, '12039':{x:416, y:262, x2:423, y2:266}, '12041':{x:440, y:269, x2:443, y2:274}, '12043':{x:460, y:301, x2:468, y2:307}, '12045':{x:412, y:269, x2:416, y2:276}, '12047':{x:434, y:261, x2:442, y2:264}, '12049':{x:453, y:296, x2:459, y2:301}, '12051':{x:461, y:304, x2:469, y2:313}, '12053':{x:445, y:285, x2:452, y2:288}, '12055':{x:459, y:296, x2:467, y2:304}, '12057':{x:445, y:291, x2:453, y2:298}, '12059':{x:403, y:260, x2:409, y2:264}, '12061':{x:466, y:292, x2:473, y2:296}, '12063':{x:408, y:259, x2:417, y2:265}, '12065':{x:426, y:261, x2:431, y2:269}, '12067':{x:434, y:266, x2:440, y2:272}, '12069':{x:452, y:276, x2:459, y2:288}, '12071':{x:453, y:307, x2:461, y2:314}, '12073':{x:419, y:262, x2:426, y2:267}, '12075':{x:438, y:274, x2:446, y2:281}, '12077':{x:415, y:264, x2:421, y2:272}, '12079':{x:429, y:261, x2:436, y2:266}, '12081':{x:446, y:297, x2:454, y2:303}, '12083':{x:445, y:273, x2:455, y2:281}, '12085':{x:468, y:299, x2:477, y2:304}, '12086':{x:470, y:315, x2:479, y2:326}, '12087':{x:462, y:318, x2:479, y2:336}, '12089':{x:448, y:257, x2:455, y2:264}, '12091':{x:395, y:261, x2:400, y2:269}, '12093':{x:463, y:295, x2:470, y2:304}, '12095':{x:456, y:282, x2:465, y2:288}, '12097':{x:456, y:286, x2:467, y2:296}, '12099':{x:468, y:302, x2:479, y2:312}, '12101':{x:444, y:287, x2:452, y2:292}, '12103':{x:444, y:291, x2:447, y2:298}, '12105':{x:452, y:288, x2:464, y2:297}, '12107':{x:449, y:269, x2:457, y2:275}, '12109':{x:453, y:263, x2:459, y2:271}, '12111':{x:469, y:295, x2:475, y2:300}, '12113':{x:390, y:261, x2:396, y2:269}, '12115':{x:447, y:301, x2:454, y2:307}, '12117':{x:458, y:280, x2:463, y2:284}, '12119':{x:448, y:280, x2:453, y2:289}, '12121':{x:435, y:263, x2:441, y2:270}, '12123':{x:427, y:266, x2:435, y2:274}, '12125':{x:444, y:266, x2:448, y2:269}, '12127':{x:454, y:273, x2:466, y2:283}, '12129':{x:419, y:267, x2:426, y2:271}, '12131':{x:399, y:260, x2:406, y2:269}, '12133':{x:405, y:262, x2:411, y2:268}, '13001':{x:440, y:243, x2:445, y2:249}, '13003':{x:434, y:251, x2:440, y2:254}, '13005':{x:440, y:246, x2:444, y2:250}, '13007':{x:418, y:252, x2:423, y2:257}, '13009':{x:428, y:228, x2:432, y2:232}, '13011':{x:424, y:212, x2:427, y2:216}, '13013':{x:423, y:217, x2:426, y2:220}, '13015':{x:409, y:215, x2:414, y2:219}, '13017':{x:430, y:245, x2:435, y2:248}, '13019':{x:431, y:250, x2:436, y2:256}, '13021':{x:424, y:232, x2:428, y2:236}, '13023':{x:429, y:236, x2:433, y2:240}, '13025':{x:444, y:250, x2:450, y2:255}, '13027':{x:429, y:256, x2:433, y2:262}, '13029':{x:448, y:238, x2:455, y2:244}, '13031':{x:444, y:233, x2:451, y2:239}, '13033':{x:440, y:225, x2:449, y2:232}, '13035':{x:421, y:226, x2:424, y2:229}, '13037':{x:416, y:250, x2:420, y2:253}, '13039':{x:448, y:252, x2:454, y2:257}, '13043':{x:442, y:235, x2:446, y2:238}, '13045':{x:407, y:223, x2:413, y2:228}, '13047':{x:406, y:208, x2:409, y2:211}, '13049':{x:443, y:254, x2:449, y2:263}, '13051':{x:452, y:237, x2:458, y2:244}, '13053':{x:413, y:239, x2:417, y2:243}, '13055':{x:404, y:213, x2:408, y2:217}, '13057':{x:413, y:215, x2:418, y2:219}, '13059':{x:426, y:218, x2:429, y2:220}, '13061':{x:412, y:249, x2:416, y2:253}, '13063':{x:417, y:224, x2:419, y2:228}, '13065':{x:437, y:253, x2:444, y2:261}, '13067':{x:413, y:219, x2:417, y2:223}, '13069':{x:434, y:245, x2:440, y2:251}, '13071':{x:425, y:253, x2:431, y2:257}, '13073':{x:438, y:221, x2:442, y2:225}, '13075':{x:430, y:252, x2:433, y2:256}, '13077':{x:411, y:226, x2:417, y2:231}, '13079':{x:421, y:234, x2:426, y2:238}, '13081':{x:424, y:244, x2:428, y2:247}, '13083':{x:402, y:208, x2:405, y2:213}, '13085':{x:416, y:211, x2:421, y2:215}, '13087':{x:417, y:257, x2:422, y2:262}, '13089':{x:417, y:220, x2:421, y2:224}, '13091':{x:430, y:238, x2:436, y2:245}, '13093':{x:423, y:240, x2:428, y2:244}, '13095':{x:420, y:249, x2:425, y2:252}, '13097':{x:412, y:222, x2:415, y2:226}, '13099':{x:413, y:252, x2:418, y2:258}, '13101':{x:436, y:258, x2:442, y2:261}, '13103':{x:450, y:233, x2:455, y2:239}, '13105':{x:430, y:214, x2:436, y2:218}, '13107':{x:438, y:232, x2:445, y2:238}, '13109':{x:445, y:238, x2:449, y2:241}, '13111':{x:413, y:206, x2:418, y2:211}, '13113':{x:415, y:225, x2:418, y2:229}, '13115':{x:405, y:213, x2:410, y2:220}, '13117':{x:418, y:215, x2:421, y2:218}, '13119':{x:426, y:211, x2:430, y2:215}, '13121':{x:413, y:217, x2:420, y2:226}, '13123':{x:413, y:209, x2:418, y2:213}, '13125':{x:435, y:226, x2:439, y2:228}, '13127':{x:450, y:248, x2:455, y2:253}, '13129':{x:409, y:212, x2:413, y2:215}, '13131':{x:421, y:257, x2:425, y2:262}, '13133':{x:428, y:221, x2:432, y2:226}, '13135':{x:418, y:217, x2:423, y2:222}, '13137':{x:423, y:208, x2:427, y2:213}, '13139':{x:420, y:212, x2:424, y2:217}, '13141':{x:430, y:224, x2:435, y2:230}, '13143':{x:406, y:222, x2:410, y2:225}, '13145':{x:410, y:235, x2:416, y2:238}, '13147':{x:430, y:211, x2:433, y2:215}, '13149':{x:408, y:228, x2:412, y2:232}, '13151':{x:418, y:224, x2:423, y2:228}, '13153':{x:425, y:235, x2:429, y2:241}, '13155':{x:430, y:247, x2:435, y2:250}, '13157':{x:422, y:215, x2:427, y2:219}, '13159':{x:423, y:225, x2:427, y2:230}, '13161':{x:437, y:243, x2:441, y2:247}, '13163':{x:436, y:225, x2:441, y2:233}, '13165':{x:443, y:229, x2:446, y2:234}, '13167':{x:434, y:232, x2:440, y2:236}, '13169':{x:424, y:229, x2:429, y2:233}, '13171':{x:419, y:229, x2:422, y2:233}, '13173':{x:434, y:254, x2:437, y2:258}, '13175':{x:431, y:234, x2:438, y2:241}, '13177':{x:420, y:246, x2:425, y2:250}, '13179':{x:448, y:240, x2:456, y2:246}, '13181':{x:435, y:217, x2:440, y2:221}, '13183':{x:446, y:241, x2:452, y2:247}, '13185':{x:431, y:256, x2:437, y2:261}, '13187':{x:418, y:210, x2:422, y2:214}, '13189':{x:436, y:221, x2:440, y2:225}, '13191':{x:450, y:245, x2:455, y2:250}, '13193':{x:421, y:238, x2:425, y2:243}, '13195':{x:427, y:214, x2:432, y2:218}, '13197':{x:416, y:238, x2:419, y2:244}, '13199':{x:413, y:230, x2:417, y2:235}, '13201':{x:415, y:255, x2:420, y2:258}, '13205':{x:420, y:252, x2:426, y2:257}, '13207':{x:421, y:229, x2:426, y2:234}, '13209':{x:438, y:238, x2:441, y2:243}, '13211':{x:425, y:221, x2:429, y2:226}, '13213':{x:410, y:207, x2:413, y2:212}, '13215':{x:411, y:238, x2:416, y2:241}, '13217':{x:421, y:222, x2:425, y2:227}, '13219':{x:425, y:219, x2:429, y2:222}, '13221':{x:428, y:217, x2:434, y2:222}, '13223':{x:410, y:219, x2:413, y2:223}, '13225':{x:423, y:235, x2:426, y2:239}, '13227':{x:413, y:212, x2:417, y2:215}, '13229':{x:442, y:248, x2:447, y2:252}, '13231':{x:417, y:230, x2:420, y2:233}, '13233':{x:406, y:219, x2:411, y2:222}, '13235':{x:428, y:239, x2:431, y2:243}, '13237':{x:427, y:225, x2:431, y2:229}, '13239':{x:412, y:246, x2:414, y2:249}, '13241':{x:423, y:205, x2:428, y2:209}, '13243':{x:414, y:247, x2:419, y2:251}, '13245':{x:439, y:222, x2:445, y2:226}, '13247':{x:419, y:222, x2:422, y2:225}, '13249':{x:419, y:240, x2:422, y2:243}, '13251':{x:446, y:228, x2:451, y2:235}, '13253':{x:414, y:258, x2:418, y2:262}, '13255':{x:417, y:228, x2:421, y2:230}, '13257':{x:426, y:209, x2:429, y2:212}, '13259':{x:413, y:243, x2:417, y2:247}, '13261':{x:419, y:242, x2:425, y2:247}, '13263':{x:415, y:234, x2:420, y2:239}, '13265':{x:432, y:221, x2:435, y2:225}, '13267':{x:443, y:238, x2:448, y2:244}, '13269':{x:418, y:235, x2:423, y2:240}, '13271':{x:433, y:241, x2:439, y2:246}, '13273':{x:418, y:246, x2:421, y2:250}, '13275':{x:424, y:257, x2:429, y2:262}, '13277':{x:429, y:249, x2:432, y2:253}, '13279':{x:441, y:238, x2:443, y2:243}, '13281':{x:420, y:206, x2:424, y2:208}, '13283':{x:437, y:236, x2:441, y2:239}, '13285':{x:409, y:230, x2:413, y2:235}, '13287':{x:426, y:246, x2:430, y2:250}, '13289':{x:427, y:232, x2:431, y2:238}, '13291':{x:417, y:206, x2:422, y2:211}, '13293':{x:417, y:232, x2:421, y2:236}, '13295':{x:404, y:208, x2:409, y2:213}, '13297':{x:421, y:220, x2:426, y2:224}, '13299':{x:440, y:249, x2:446, y2:260}, '13301':{x:434, y:222, x2:439, y2:227}, '13303':{x:432, y:227, x2:439, y2:233}, '13305':{x:445, y:244, x2:451, y2:250}, '13307':{x:417, y:243, x2:419, y2:247}, '13309':{x:435, y:239, x2:440, y2:244}, '13311':{x:421, y:208, x2:424, y2:212}, '13313':{x:407, y:207, x2:411, y2:212}, '13315':{x:428, y:242, x2:433, y2:246}, '13317':{x:432, y:217, x2:437, y2:222}, '13319':{x:429, y:231, x2:434, y2:236}, '13321':{x:424, y:247, x2:429, y2:253}, '15001':{x:217, y:331, x2:232, y2:348}, '15003':{x:188, y:314, x2:196, y2:320}, '15005':{x:204, y:320, x2:205, y2:321}, '15007':{x:165, y:308, x2:176, y2:315}, '15009':{x:200, y:320, x2:217, y2:329}, '16001':{x:103, y:79, x2:109, y2:89}, '16003':{x:104, y:60, x2:111, y2:72}, '16005':{x:137, y:96, x2:144, y2:107}, '16007':{x:146, y:103, x2:152, y2:112}, '16009':{x:109, y:33, x2:116, y2:39}, '16011':{x:134, y:88, x2:148, y2:98}, '16013':{x:118, y:80, x2:135, y2:100}, '16015':{x:106, y:75, x2:119, y2:83}, '16017':{x:111, y:15, x2:121, y2:28}, '16019':{x:140, y:89, x2:154, y2:99}, '16021':{x:114, y:13, x2:122, y2:21}, '16023':{x:128, y:80, x2:139, y2:92}, '16025':{x:116, y:82, x2:122, y2:91}, '16027':{x:99, y:77, x2:104, y2:86}, '16029':{x:142, y:97, x2:153, y2:106}, '16031':{x:120, y:99, x2:133, y2:109}, '16033':{x:137, y:77, x2:151, y2:84}, '16035':{x:112, y:40, x2:129, y2:50}, '16037':{x:117, y:70, x2:134, y2:87}, '16039':{x:105, y:80, x2:119, y2:95}, '16041':{x:140, y:105, x2:146, y2:111}, '16043':{x:144, y:76, x2:156, y2:87}, '16045':{x:102, y:71, x2:109, y2:80}, '16047':{x:115, y:90, x2:120, y2:98}, '16049':{x:107, y:47, x2:131, y2:65}, '16051':{x:139, y:83, x2:149, y2:90}, '16053':{x:119, y:95, x2:125, y2:100}, '16055':{x:110, y:26, x2:117, y2:34}, '16057':{x:107, y:36, x2:115, y2:44}, '16059':{x:122, y:60, x2:139, y2:81}, '16061':{x:109, y:46, x2:115, y2:51}, '16063':{x:119, y:91, x2:128, y2:98}, '16065':{x:145, y:86, x2:151, y2:90}, '16067':{x:125, y:92, x2:131, y2:101}, '16069':{x:107, y:43, x2:113, y2:53}, '16071':{x:132, y:103, x2:141, y2:110}, '16073':{x:95, y:80, x2:115, y2:105}, '16075':{x:100, y:74, x2:106, y2:79}, '16077':{x:131, y:94, x2:139, y2:105}, '16079':{x:114, y:26, x2:126, y2:43}, '16081':{x:151, y:86, x2:155, y2:93}, '16083':{x:113, y:93, x2:124, y2:106}, '16085':{x:108, y:63, x2:124, y2:76}, '16087':{x:99, y:65, x2:108, y2:75}, '17001':{x:337, y:145, x2:344, y2:151}, '17003':{x:360, y:181, x2:364, y2:186}, '17005':{x:357, y:159, x2:361, y2:163}, '17007':{x:360, y:114, x2:363, y2:119}, '17009':{x:343, y:146, x2:347, y2:150}, '17011':{x:352, y:126, x2:359, y2:132}, '17013':{x:343, y:155, x2:349, y2:162}, '17015':{x:348, y:119, x2:354, y2:122}, '17017':{x:347, y:146, x2:353, y2:149}, '17019':{x:367, y:141, x2:373, y2:148}, '17021':{x:357, y:149, x2:363, y2:155}, '17023':{x:372, y:152, x2:377, y2:157}, '17025':{x:366, y:160, x2:371, y2:164}, '17027':{x:356, y:163, x2:362, y2:168}, '17029':{x:368, y:150, x2:373, y2:154}, '17031':{x:367, y:118, x2:375, y2:127}, '17033':{x:373, y:156, x2:378, y2:161}, '17035':{x:368, y:154, x2:373, y2:157}, '17037':{x:361, y:118, x2:364, y2:125}, '17039':{x:360, y:143, x2:366, y2:146}, '17041':{x:367, y:147, x2:373, y2:151}, '17043':{x:367, y:120, x2:371, y2:124}, '17045':{x:373, y:147, x2:377, y2:152}, '17047':{x:372, y:164, x2:374, y2:169}, '17049':{x:365, y:156, x2:370, y2:161}, '17051':{x:361, y:157, x2:366, y2:163}, '17053':{x:367, y:133, x2:372, y2:141}, '17055':{x:362, y:171, x2:367, y2:174}, '17057':{x:347, y:138, x2:353, y2:145}, '17059':{x:370, y:173, x2:374, y2:177}, '17061':{x:347, y:154, x2:351, y2:159}, '17063':{x:365, y:127, x2:368, y2:132}, '17065':{x:367, y:169, x2:370, y2:173}, '17067':{x:337, y:139, x2:343, y2:145}, '17069':{x:370, y:177, x2:374, y2:180}, '17071':{x:340, y:134, x2:344, y2:140}, '17073':{x:347, y:127, x2:353, y2:133}, '17075':{x:370, y:132, x2:376, y2:140}, '17077':{x:357, y:173, x2:363, y2:178}, '17079':{x:369, y:156, x2:374, y2:161}, '17081':{x:362, y:166, x2:367, y2:171}, '17083':{x:347, y:157, x2:352, y2:161}, '17085':{x:344, y:115, x2:351, y2:119}, '17087':{x:364, y:177, x2:368, y2:182}, '17089':{x:364, y:118, x2:368, y2:124}, '17091':{x:368, y:129, x2:375, y2:133}, '17093':{x:364, y:124, x2:368, y2:127}, '17095':{x:347, y:132, x2:352, y2:138}, '17097':{x:367, y:113, x2:372, y2:118}, '17099':{x:359, y:125, x2:365, y2:135}, '17101':{x:374, y:160, x2:378, y2:164}, '17103':{x:354, y:122, x2:361, y2:126}, '17105':{x:362, y:132, x2:369, y2:138}, '17107':{x:356, y:143, x2:361, y2:148}, '17109':{x:343, y:139, x2:348, y2:144}, '17111':{x:362, y:114, x2:368, y2:119}, '17113':{x:359, y:136, x2:367, y2:143}, '17115':{x:360, y:146, x2:365, y2:151}, '17117':{x:351, y:153, x2:356, y2:160}, '17119':{x:350, y:160, x2:357, y2:165}, '17121':{x:362, y:162, x2:367, y2:166}, '17123':{x:355, y:132, x2:361, y2:135}, '17125':{x:349, y:141, x2:356, y2:147}, '17127':{x:365, y:181, x2:370, y2:184}, '17129':{x:352, y:145, x2:356, y2:148}, '17131':{x:341, y:130, x2:347, y2:134}, '17133':{x:350, y:167, x2:355, y2:172}, '17135':{x:356, y:153, x2:362, y2:160}, '17137':{x:347, y:149, x2:353, y2:154}, '17139':{x:364, y:149, x2:368, y2:153}, '17141':{x:354, y:118, x2:361, y2:122}, '17143':{x:352, y:134, x2:357, y2:141}, '17145':{x:358, y:170, x2:363, y2:174}, '17147':{x:365, y:143, x2:368, y2:149}, '17149':{x:339, y:150, x2:347, y2:156}, '17151':{x:367, y:177, x2:371, y2:184}, '17153':{x:362, y:181, x2:366, y2:185}, '17155':{x:356, y:130, x2:360, y2:133}, '17157':{x:352, y:170, x2:358, y2:176}, '17159':{x:370, y:161, x2:374, y2:164}, '17161':{x:341, y:124, x2:350, y2:131}, '17163':{x:351, y:164, x2:357, y2:170}, '17165':{x:367, y:173, x2:371, y2:177}, '17167':{x:352, y:147, x2:360, y2:153}, '17169':{x:343, y:144, x2:350, y2:148}, '17171':{x:347, y:150, x2:350, y2:154}, '17173':{x:361, y:151, x2:368, y2:157}, '17175':{x:352, y:131, x2:355, y2:135}, '17177':{x:351, y:114, x2:356, y2:119}, '17179':{x:353, y:137, x2:359, y2:143}, '17181':{x:359, y:178, x2:364, y2:182}, '17183':{x:372, y:139, x2:377, y2:147}, '17185':{x:374, y:164, x2:377, y2:169}, '17187':{x:344, y:134, x2:348, y2:139}, '17189':{x:357, y:166, x2:362, y2:170}, '17191':{x:366, y:164, x2:372, y2:169}, '17193':{x:370, y:168, x2:374, y2:173}, '17195':{x:349, y:122, x2:355, y2:127}, '17197':{x:368, y:124, x2:375, y2:130}, '17199':{x:363, y:174, x2:367, y2:178}, '17201':{x:356, y:114, x2:361, y2:119}, '17203':{x:356, y:134, x2:362, y2:139}, '18001':{x:399, y:131, x2:402, y2:136}, '18003':{x:396, y:126, x2:402, y2:131}, '18005':{x:392, y:152, x2:396, y2:156}, '18007':{x:376, y:136, x2:380, y2:139}, '18009':{x:396, y:136, x2:398, y2:139}, '18011':{x:384, y:142, x2:389, y2:146}, '18013':{x:389, y:153, x2:392, y2:157}, '18015':{x:383, y:135, x2:387, y2:139}, '18017':{x:385, y:132, x2:389, y2:137}, '18019':{x:394, y:162, x2:399, y2:166}, '18021':{x:380, y:150, x2:383, y2:156}, '18023':{x:384, y:139, x2:389, y2:142}, '18025':{x:387, y:165, x2:391, y2:170}, '18027':{x:381, y:159, x2:384, y2:164}, '18029':{x:401, y:152, x2:404, y2:157}, '18031':{x:395, y:150, x2:399, y2:155}, '18033':{x:397, y:123, x2:401, y2:127}, '18035':{x:395, y:138, x2:399, y2:142}, '18037':{x:383, y:164, x2:387, y2:168}, '18039':{x:388, y:121, x2:393, y2:125}, '18041':{x:399, y:146, x2:402, y2:149}, '18043':{x:393, y:164, x2:396, y2:167}, '18045':{x:377, y:140, x2:381, y2:146}, '18047':{x:399, y:149, x2:404, y2:153}, '18049':{x:385, y:129, x2:391, y2:133}, '18051':{x:374, y:164, x2:381, y2:169}, '18053':{x:392, y:135, x2:396, y2:139}, '18055':{x:380, y:155, x2:386, y2:159}, '18057':{x:389, y:141, x2:393, y2:145}, '18059':{x:392, y:144, x2:396, y2:148}, '18061':{x:391, y:164, x2:395, y2:170}, '18063':{x:385, y:145, x2:389, y2:150}, '18065':{x:396, y:142, x2:399, y2:146}, '18067':{x:387, y:136, x2:392, y2:139}, '18069':{x:393, y:130, x2:397, y2:135}, '18071':{x:390, y:156, x2:395, y2:160}, '18073':{x:378, y:128, x2:381, y2:136}, '18075':{x:398, y:135, x2:403, y2:139}, '18077':{x:396, y:157, x2:401, y2:162}, '18079':{x:395, y:154, x2:398, y2:159}, '18081':{x:389, y:149, x2:393, y2:153}, '18083':{x:376, y:159, x2:382, y2:166}, '18085':{x:389, y:125, x2:393, y2:130}, '18087':{x:392, y:120, x2:397, y2:124}, '18089':{x:375, y:123, x2:378, y2:130}, '18091':{x:380, y:122, x2:384, y2:129}, '18093':{x:386, y:157, x2:390, y2:162}, '18095':{x:392, y:139, x2:396, y2:145}, '18097':{x:388, y:145, x2:392, y2:149}, '18099':{x:385, y:125, x2:389, y2:129}, '18101':{x:384, y:159, x2:387, y2:164}, '18103':{x:389, y:131, x2:392, y2:137}, '18105':{x:386, y:153, x2:390, y2:158}, '18107':{x:381, y:142, x2:385, y2:147}, '18109':{x:385, y:149, x2:390, y2:153}, '18111':{x:375, y:129, x2:378, y2:136}, '18113':{x:393, y:123, x2:398, y2:127}, '18115':{x:402, y:155, x2:405, y2:157}, '18117':{x:386, y:161, x2:391, y2:165}, '18119':{x:382, y:152, x2:386, y2:156}, '18121':{x:378, y:146, x2:382, y2:150}, '18123':{x:386, y:167, x2:389, y2:173}, '18125':{x:379, y:164, x2:383, y2:168}, '18127':{x:378, y:123, x2:381, y2:129}, '18129':{x:374, y:169, x2:377, y2:174}, '18131':{x:381, y:129, x2:386, y2:133}, '18133':{x:382, y:146, x2:386, y2:152}, '18135':{x:399, y:139, x2:403, y2:143}, '18137':{x:398, y:152, x2:402, y2:157}, '18139':{x:395, y:146, x2:399, y2:151}, '18141':{x:384, y:121, x2:389, y2:126}, '18143':{x:394, y:159, x2:398, y2:162}, '18145':{x:392, y:147, x2:396, y2:152}, '18147':{x:382, y:168, x2:386, y2:174}, '18149':{x:381, y:126, x2:385, y2:130}, '18151':{x:397, y:120, x2:401, y2:123}, '18153':{x:376, y:155, x2:381, y2:160}, '18155':{x:401, y:157, x2:405, y2:160}, '18157':{x:380, y:137, x2:384, y2:142}, '18159':{x:389, y:139, x2:393, y2:141}, '18161':{x:401, y:146, x2:404, y2:149}, '18163':{x:377, y:169, x2:380, y2:173}, '18165':{x:376, y:144, x2:378, y2:151}, '18167':{x:377, y:150, x2:380, y2:155}, '18169':{x:391, y:130, x2:394, y2:135}, '18171':{x:376, y:139, x2:380, y2:144}, '18173':{x:379, y:168, x2:384, y2:173}, '18175':{x:390, y:160, x2:395, y2:165}, '18177':{x:399, y:143, x2:403, y2:147}, '18179':{x:396, y:131, x2:400, y2:136}, '18181':{x:380, y:133, x2:385, y2:138}, '18183':{x:393, y:127, x2:396, y2:131}, '19001':{x:306, y:129, x2:310, y2:134}, '19003':{x:304, y:134, x2:308, y2:137}, '19005':{x:334, y:103, x2:340, y2:108}, '19007':{x:322, y:137, x2:326, y2:141}, '19009':{x:302, y:125, x2:306, y2:130}, '19011':{x:329, y:118, x2:333, y2:124}, '19013':{x:326, y:114, x2:331, y2:119}, '19015':{x:311, y:120, x2:316, y2:125}, '19017':{x:326, y:111, x2:330, y2:114}, '19019':{x:330, y:114, x2:335, y2:118}, '19021':{x:299, y:111, x2:304, y2:116}, '19023':{x:321, y:111, x2:326, y2:115}, '19025':{x:304, y:116, x2:309, y2:120}, '19027':{x:302, y:120, x2:307, y2:125}, '19029':{x:302, y:129, x2:306, y2:134}, '19031':{x:338, y:123, x2:342, y2:127}, '19033':{x:317, y:106, x2:321, y2:111}, '19035':{x:295, y:111, x2:299, y2:116}, '19037':{x:326, y:107, x2:330, y2:111}, '19039':{x:313, y:134, x2:317, y2:137}, '19041':{x:299, y:107, x2:304, y2:111}, '19043':{x:335, y:108, x2:342, y2:114}, '19045':{x:342, y:121, x2:349, y2:125}, '19047':{x:297, y:120, x2:302, y2:125}, '19049':{x:310, y:125, x2:315, y2:129}, '19051':{x:326, y:137, x2:331, y2:141}, '19053':{x:313, y:137, x2:317, y2:142}, '19055':{x:335, y:114, x2:340, y2:118}, '19057':{x:338, y:134, x2:342, y2:139}, '19059':{x:299, y:104, x2:304, y2:107}, '19061':{x:339, y:113, x2:346, y2:118}, '19063':{x:304, y:104, x2:308, y2:107}, '19065':{x:330, y:108, x2:335, y2:114}, '19067':{x:321, y:107, x2:326, y2:111}, '19069':{x:317, y:111, x2:322, y2:116}, '19071':{x:295, y:137, x2:300, y2:142}, '19073':{x:306, y:120, x2:311, y2:125}, '19075':{x:322, y:115, x2:326, y2:120}, '19077':{x:305, y:125, x2:310, y2:129}, '19079':{x:313, y:116, x2:318, y2:120}, '19081':{x:312, y:107, x2:317, y2:111}, '19083':{x:317, y:115, x2:322, y2:120}, '19085':{x:292, y:125, x2:298, y2:130}, '19087':{x:335, y:133, x2:338, y2:138}, '19089':{x:326, y:103, x2:330, y2:107}, '19091':{x:308, y:111, x2:313, y2:115}, '19093':{x:296, y:116, x2:300, y2:120}, '19095':{x:329, y:124, x2:334, y2:129}, '19097':{x:342, y:117, x2:349, y2:121}, '19099':{x:319, y:124, x2:325, y2:129}, '19101':{x:330, y:133, x2:335, y2:137}, '19103':{x:333, y:124, x2:338, y2:130}, '19105':{x:337, y:118, x2:342, y2:123}, '19107':{x:328, y:129, x2:333, y2:133}, '19109':{x:308, y:103, x2:313, y2:111}, '19111':{x:335, y:137, x2:341, y2:143}, '19113':{x:333, y:118, x2:338, y2:124}, '19115':{x:337, y:130, x2:342, y2:134}, '19117':{x:317, y:134, x2:322, y2:137}, '19119':{x:288, y:104, x2:295, y2:107}, '19121':{x:310, y:129, x2:315, y2:134}, '19123':{x:324, y:129, x2:328, y2:134}, '19125':{x:319, y:129, x2:324, y2:134}, '19127':{x:320, y:120, x2:324, y2:125}, '19129':{x:295, y:134, x2:299, y2:137}, '19131':{x:321, y:103, x2:326, y2:107}, '19133':{x:290, y:120, x2:297, y2:125}, '19135':{x:321, y:134, x2:326, y2:137}, '19137':{x:299, y:134, x2:304, y2:137}, '19139':{x:338, y:127, x2:344, y2:131}, '19141':{x:295, y:107, x2:299, y2:111}, '19143':{x:295, y:104, x2:299, y2:107}, '19145':{x:299, y:137, x2:304, y2:142}, '19147':{x:304, y:107, x2:308, y2:111}, '19149':{x:288, y:111, x2:295, y2:116}, '19151':{x:304, y:111, x2:308, y2:116}, '19153':{x:314, y:125, x2:319, y2:129}, '19155':{x:294, y:129, x2:302, y2:134}, '19157':{x:324, y:124, x2:329, y2:129}, '19159':{x:308, y:137, x2:313, y2:142}, '19161':{x:299, y:116, x2:304, y2:120}, '19163':{x:342, y:125, x2:348, y2:129}, '19165':{x:298, y:125, x2:303, y2:130}, '19167':{x:288, y:107, x2:295, y2:111}, '19169':{x:315, y:120, x2:320, y2:125}, '19171':{x:324, y:119, x2:329, y2:124}, '19173':{x:304, y:137, x2:308, y2:142}, '19175':{x:308, y:134, x2:313, y2:137}, '19177':{x:331, y:136, x2:335, y2:141}, '19179':{x:326, y:133, x2:331, y2:137}, '19181':{x:315, y:129, x2:319, y2:134}, '19183':{x:332, y:128, x2:337, y2:133}, '19185':{x:317, y:137, x2:322, y2:141}, '19187':{x:308, y:115, x2:313, y2:120}, '19189':{x:312, y:103, x2:317, y2:107}, '19191':{x:330, y:103, x2:335, y2:108}, '19193':{x:289, y:116, x2:297, y2:120}, '19195':{x:317, y:103, x2:321, y2:107}, '19197':{x:313, y:111, x2:317, y2:116}, '20001':{x:298, y:175, x2:303, y2:179}, '20003':{x:298, y:170, x2:303, y2:175}, '20005':{x:298, y:154, x2:304, y2:157}, '20007':{x:263, y:181, x2:270, y2:188}, '20009':{x:263, y:166, x2:269, y2:171}, '20011':{x:303, y:175, x2:308, y2:179}, '20013':{x:296, y:149, x2:300, y2:154}, '20015':{x:282, y:174, x2:288, y2:182}, '20017':{x:285, y:168, x2:290, y2:174}, '20019':{x:288, y:184, x2:294, y2:188}, '20021':{x:303, y:184, x2:308, y2:188}, '20023':{x:234, y:147, x2:240, y2:153}, '20025':{x:252, y:181, x2:257, y2:187}, '20027':{x:280, y:155, x2:284, y2:160}, '20029':{x:274, y:153, x2:280, y2:158}, '20031':{x:294, y:170, x2:298, y2:175}, '20033':{x:257, y:182, x2:263, y2:188}, '20035':{x:282, y:182, x2:288, y2:188}, '20037':{x:303, y:179, x2:308, y2:184}, '20039':{x:247, y:148, x2:252, y2:154}, '20041':{x:280, y:160, x2:285, y2:167}, '20043':{x:300, y:149, x2:304, y2:154}, '20045':{x:299, y:161, x2:303, y2:165}, '20047':{x:257, y:173, x2:263, y2:178}, '20049':{x:288, y:180, x2:294, y2:184}, '20051':{x:258, y:160, x2:263, y2:166}, '20053':{x:269, y:164, x2:274, y2:168}, '20055':{x:242, y:170, x2:251, y2:177}, '20057':{x:251, y:175, x2:257, y2:181}, '20059':{x:298, y:165, x2:303, y2:170}, '20061':{x:284, y:159, x2:288, y2:164}, '20063':{x:245, y:159, x2:252, y2:165}, '20065':{x:252, y:154, x2:258, y2:160}, '20067':{x:237, y:177, x2:242, y2:182}, '20069':{x:246, y:174, x2:251, y2:181}, '20071':{x:233, y:164, x2:238, y2:170}, '20073':{x:288, y:173, x2:294, y2:180}, '20075':{x:232, y:170, x2:238, y2:177}, '20077':{x:270, y:183, x2:275, y2:188}, '20079':{x:276, y:173, x2:282, y2:176}, '20081':{x:242, y:177, x2:246, y2:182}, '20083':{x:251, y:171, x2:258, y2:176}, '20085':{x:293, y:154, x2:298, y2:159}, '20087':{x:298, y:157, x2:302, y2:162}, '20089':{x:269, y:149, x2:275, y2:155}, '20091':{x:303, y:161, x2:307, y2:166}, '20093':{x:238, y:170, x2:242, y2:177}, '20095':{x:268, y:178, x2:275, y2:183}, '20097':{x:257, y:178, x2:263, y2:183}, '20099':{x:298, y:183, x2:303, y2:188}, '20101':{x:246, y:165, x2:251, y2:171}, '20103':{x:302, y:157, x2:305, y2:162}, '20105':{x:269, y:159, x2:274, y2:164}, '20107':{x:303, y:170, x2:307, y2:175}, '20109':{x:239, y:159, x2:246, y2:165}, '20111':{x:290, y:165, x2:294, y2:173}, '20113':{x:274, y:167, x2:280, y2:173}, '20115':{x:280, y:167, x2:285, y2:174}, '20117':{x:285, y:149, x2:291, y2:155}, '20119':{x:246, y:181, x2:252, y2:187}, '20121':{x:303, y:165, x2:307, y2:170}, '20123':{x:269, y:154, x2:274, y2:159}, '20125':{x:294, y:183, x2:298, y2:188}, '20127':{x:284, y:164, x2:290, y2:168}, '20129':{x:232, y:181, x2:237, y2:187}, '20131':{x:291, y:149, x2:296, y2:155}, '20133':{x:298, y:179, x2:303, y2:183}, '20135':{x:251, y:165, x2:258, y2:171}, '20137':{x:252, y:148, x2:258, y2:154}, '20139':{x:294, y:164, x2:299, y2:169}, '20141':{x:263, y:154, x2:269, y2:160}, '20143':{x:274, y:158, x2:280, y2:163}, '20145':{x:257, y:170, x2:264, y2:175}, '20147':{x:258, y:148, x2:263, y2:154}, '20149':{x:286, y:155, x2:293, y2:160}, '20151':{x:263, y:177, x2:269, y2:182}, '20153':{x:240, y:148, x2:247, y2:154}, '20155':{x:268, y:173, x2:276, y2:178}, '20157':{x:274, y:149, x2:280, y2:153}, '20159':{x:269, y:168, x2:274, y2:173}, '20161':{x:284, y:155, x2:290, y2:162}, '20163':{x:258, y:154, x2:263, y2:160}, '20165':{x:258, y:165, x2:263, y2:170}, '20167':{x:263, y:160, x2:269, y2:166}, '20169':{x:274, y:163, x2:280, y2:167}, '20171':{x:242, y:165, x2:247, y2:170}, '20173':{x:275, y:176, x2:282, y2:182}, '20175':{x:242, y:182, x2:246, y2:187}, '20177':{x:293, y:159, x2:298, y2:164}, '20179':{x:247, y:154, x2:252, y2:160}, '20181':{x:233, y:153, x2:240, y2:159}, '20183':{x:263, y:149, x2:269, y2:154}, '20185':{x:263, y:171, x2:269, y2:177}, '20187':{x:232, y:177, x2:238, y2:181}, '20189':{x:237, y:181, x2:242, y2:187}, '20191':{x:275, y:182, x2:282, y2:188}, '20193':{x:240, y:153, x2:247, y2:159}, '20195':{x:252, y:160, x2:258, y2:165}, '20197':{x:288, y:159, x2:294, y2:166}, '20199':{x:233, y:158, x2:239, y2:164}, '20201':{x:280, y:149, x2:286, y2:155}, '20203':{x:238, y:164, x2:242, y2:170}, '20205':{x:294, y:179, x2:298, y2:183}, '20207':{x:294, y:175, x2:298, y2:179}, '20209':{x:304, y:159, x2:307, y2:162}, '21001':{x:400, y:178, x2:405, y2:183}, '21003':{x:392, y:184, x2:396, y2:188}, '21005':{x:403, y:167, x2:406, y2:170}, '21007':{x:363, y:182, x2:367, y2:186}, '21009':{x:394, y:180, x2:398, y2:186}, '21011':{x:414, y:163, x2:419, y2:167}, '21013':{x:417, y:180, x2:422, y2:186}, '21015':{x:404, y:154, x2:407, y2:158}, '21017':{x:409, y:163, x2:414, y2:167}, '21019':{x:425, y:159, x2:428, y2:163}, '21021':{x:404, y:172, x2:408, y2:175}, '21023':{x:411, y:157, x2:414, y2:161}, '21025':{x:419, y:171, x2:426, y2:175}, '21027':{x:388, y:170, x2:393, y2:176}, '21029':{x:395, y:168, x2:400, y2:172}, '21031':{x:386, y:178, x2:391, y2:183}, '21033':{x:374, y:180, x2:378, y2:185}, '21035':{x:370, y:188, x2:375, y2:192}, '21037':{x:407, y:154, x2:410, y2:158}, '21039':{x:363, y:186, x2:367, y2:188}, '21041':{x:400, y:159, x2:404, y2:161}, '21043':{x:420, y:160, x2:426, y2:164}, '21045':{x:404, y:174, x2:408, y2:180}, '21047':{x:378, y:182, x2:383, y2:189}, '21049':{x:411, y:166, x2:415, y2:170}, '21051':{x:416, y:176, x2:421, y2:181}, '21053':{x:403, y:183, x2:407, y2:187}, '21055':{x:371, y:178, x2:377, y2:183}, '21057':{x:400, y:183, x2:404, y2:187}, '21059':{x:380, y:172, x2:386, y2:177}, '21061':{x:390, y:179, x2:395, y2:182}, '21063':{x:421, y:163, x2:425, y2:166}, '21065':{x:414, y:170, x2:418, y2:173}, '21067':{x:408, y:165, x2:411, y2:170}, '21069':{x:414, y:160, x2:419, y2:165}, '21071':{x:425, y:169, x2:429, y2:175}, '21073':{x:404, y:164, x2:407, y2:167}, '21075':{x:360, y:190, x2:367, y2:192}, '21077':{x:403, y:157, x2:406, y2:160}, '21079':{x:407, y:170, x2:411, y2:175}, '21081':{x:405, y:158, x2:409, y2:162}, '21083':{x:367, y:186, x2:371, y2:192}, '21085':{x:389, y:175, x2:394, y2:179}, '21087':{x:398, y:176, x2:402, y2:181}, '21089':{x:422, y:156, x2:427, y2:161}, '21091':{x:384, y:171, x2:388, y2:175}, '21093':{x:392, y:170, x2:398, y2:177}, '21095':{x:421, y:179, x2:427, y2:184}, '21097':{x:408, y:160, x2:412, y2:164}, '21099':{x:393, y:177, x2:398, y2:181}, '21101':{x:375, y:172, x2:381, y2:176}, '21103':{x:400, y:161, x2:405, y2:164}, '21105':{x:364, y:188, x2:367, y2:192}, '21107':{x:377, y:177, x2:382, y2:183}, '21109':{x:413, y:173, x2:417, y2:177}, '21111':{x:395, y:164, x2:400, y2:170}, '21113':{x:407, y:168, x2:410, y2:172}, '21115':{x:424, y:166, x2:428, y2:170}, '21117':{x:406, y:154, x2:409, y2:158}, '21119':{x:424, y:173, x2:428, y2:177}, '21121':{x:415, y:179, x2:420, y2:184}, '21123':{x:396, y:173, x2:400, y2:177}, '21125':{x:412, y:176, x2:417, y2:181}, '21127':{x:424, y:162, x2:430, y2:167}, '21129':{x:416, y:171, x2:420, y2:174}, '21131':{x:421, y:176, x2:424, y2:181}, '21133':{x:425, y:175, x2:430, y2:180}, '21135':{x:417, y:157, x2:423, y2:163}, '21137':{x:406, y:173, x2:411, y2:178}, '21139':{x:369, y:180, x2:373, y2:185}, '21141':{x:385, y:183, x2:389, y2:188}, '21143':{x:373, y:182, x2:377, y2:186}, '21145':{x:365, y:183, x2:370, y2:186}, '21147':{x:409, y:181, x2:414, y2:187}, '21149':{x:380, y:175, x2:384, y2:179}, '21151':{x:409, y:169, x2:414, y2:174}, '21153':{x:422, y:168, x2:426, y2:173}, '21155':{x:400, y:173, x2:405, y2:176}, '21157':{x:370, y:185, x2:374, y2:188}, '21159':{x:428, y:166, x2:431, y2:170}, '21161':{x:413, y:157, x2:417, y2:161}, '21163':{x:389, y:168, x2:395, y2:173}, '21165':{x:417, y:166, x2:420, y2:169}, '21167':{x:404, y:169, x2:407, y2:173}, '21169':{x:398, y:180, x2:401, y2:185}, '21171':{x:396, y:185, x2:402, y2:188}, '21173':{x:413, y:165, x2:417, y2:168}, '21175':{x:420, y:165, x2:424, y2:170}, '21177':{x:381, y:178, x2:386, y2:183}, '21179':{x:397, y:169, x2:403, y2:176}, '21181':{x:412, y:162, x2:415, y2:165}, '21183':{x:384, y:174, x2:389, y2:181}, '21185':{x:397, y:162, x2:401, y2:166}, '21187':{x:403, y:159, x2:408, y2:164}, '21189':{x:416, y:173, x2:420, y2:176}, '21191':{x:408, y:157, x2:411, y2:161}, '21193':{x:420, y:174, x2:426, y2:179}, '21195':{x:428, y:169, x2:435, y2:176}, '21197':{x:415, y:168, x2:418, y2:171}, '21199':{x:407, y:177, x2:413, y2:183}, '21201':{x:412, y:160, x2:414, y2:162}, '21203':{x:410, y:174, x2:414, y2:179}, '21205':{x:418, y:162, x2:421, y2:166}, '21207':{x:403, y:179, x2:407, y2:184}, '21209':{x:406, y:162, x2:410, y2:167}, '21211':{x:399, y:164, x2:404, y2:168}, '21213':{x:388, y:185, x2:392, y2:188}, '21215':{x:399, y:167, x2:403, y2:169}, '21217':{x:399, y:176, x2:404, y2:180}, '21219':{x:382, y:183, x2:385, y2:189}, '21221':{x:374, y:184, x2:379, y2:189}, '21223':{x:399, y:160, x2:402, y2:163}, '21225':{x:373, y:173, x2:377, y2:178}, '21227':{x:389, y:181, x2:394, y2:186}, '21229':{x:401, y:170, x2:404, y2:174}, '21231':{x:405, y:181, x2:410, y2:187}, '21233':{x:375, y:176, x2:381, y2:180}, '21235':{x:413, y:181, x2:418, y2:186}, '21237':{x:418, y:169, x2:422, y2:172}, '21239':{x:405, y:166, x2:408, y2:170}, '22001':{x:331, y:272, x2:336, y2:277}, '22003':{x:325, y:267, x2:331, y2:273}, '22005':{x:348, y:273, x2:353, y2:277}, '22007':{x:347, y:276, x2:351, y2:282}, '22009':{x:335, y:261, x2:341, y2:267}, '22011':{x:319, y:267, x2:327, y2:273}, '22013':{x:321, y:245, x2:328, y2:251}, '22015':{x:317, y:239, x2:322, y2:249}, '22017':{x:315, y:240, x2:321, y2:250}, '22019':{x:319, y:272, x2:328, y2:278}, '22021':{x:334, y:248, x2:339, y2:253}, '22023':{x:318, y:278, x2:331, y2:283}, '22025':{x:337, y:252, x2:342, y2:262}, '22027':{x:323, y:239, x2:329, y2:245}, '22029':{x:339, y:255, x2:344, y2:265}, '22031':{x:315, y:248, x2:322, y2:255}, '22033':{x:346, y:268, x2:351, y2:273}, '22035':{x:343, y:239, x2:347, y2:245}, '22037':{x:345, y:264, x2:351, y2:269}, '22039':{x:331, y:265, x2:336, y2:272}, '22041':{x:338, y:247, x2:343, y2:254}, '22043':{x:327, y:255, x2:335, y2:260}, '22045':{x:338, y:276, x2:347, y2:284}, '22047':{x:341, y:271, x2:349, y2:277}, '22049':{x:328, y:246, x2:334, y2:250}, '22051':{x:357, y:274, x2:362, y2:287}, '22053':{x:325, y:272, x2:331, y2:278}, '22055':{x:335, y:273, x2:339, y2:277}, '22057':{x:349, y:278, x2:361, y2:289}, '22059':{x:333, y:253, x2:337, y2:261}, '22061':{x:327, y:242, x2:332, y2:246}, '22063':{x:349, y:269, x2:356, y2:275}, '22065':{x:342, y:244, x2:348, y2:249}, '22067':{x:336, y:239, x2:343, y2:246}, '22069':{x:321, y:251, x2:329, y2:261}, '22071':{x:359, y:274, x2:365, y2:278}, '22073':{x:332, y:243, x2:338, y2:249}, '22075':{x:360, y:278, x2:372, y2:288}, '22077':{x:340, y:265, x2:345, y2:271}, '22079':{x:327, y:259, x2:337, y2:267}, '22081':{x:319, y:250, x2:325, y2:254}, '22083':{x:337, y:243, x2:343, y2:250}, '22085':{x:317, y:255, x2:324, y2:263}, '22087':{x:362, y:275, x2:368, y2:281}, '22089':{x:354, y:274, x2:359, y2:281}, '22091':{x:350, y:264, x2:354, y2:269}, '22093':{x:350, y:275, x2:353, y2:278}, '22095':{x:353, y:273, x2:357, y2:278}, '22097':{x:332, y:267, x2:342, y2:274}, '22099':{x:338, y:271, x2:348, y2:281}, '22101':{x:340, y:278, x2:349, y2:284}, '22103':{x:357, y:268, x2:366, y2:275}, '22105':{x:353, y:264, x2:358, y2:274}, '22107':{x:342, y:248, x2:348, y2:255}, '22109':{x:346, y:280, x2:357, y2:289}, '22111':{x:329, y:239, x2:336, y2:245}, '22113':{x:330, y:276, x2:339, y2:284}, '22115':{x:320, y:261, x2:329, y2:267}, '22117':{x:356, y:264, x2:363, y2:268}, '22119':{x:320, y:239, x2:324, y2:247}, '22121':{x:344, y:269, x2:348, y2:273}, '22123':{x:341, y:239, x2:345, y2:244}, '22125':{x:340, y:264, x2:347, y2:269}, '22127':{x:327, y:250, x2:334, y2:256}, '23001':{x:527, y:59, x2:531, y2:66}, '23003':{x:522, y:19, x2:545, y2:41}, '23005':{x:525, y:65, x2:533, y2:71}, '23007':{x:520, y:45, x2:530, y2:59}, '23009':{x:539, y:44, x2:548, y2:59}, '23011':{x:529, y:54, x2:535, y2:63}, '23013':{x:535, y:58, x2:542, y2:63}, '23015':{x:533, y:59, x2:538, y2:66}, '23017':{x:517, y:50, x2:528, y2:69}, '23019':{x:533, y:31, x2:545, y2:54}, '23021':{x:525, y:30, x2:538, y2:51}, '23023':{x:531, y:62, x2:535, y2:67}, '23025':{x:521, y:32, x2:535, y2:57}, '23027':{x:534, y:53, x2:540, y2:59}, '23029':{x:543, y:38, x2:555, y2:54}, '23031':{x:523, y:69, x2:530, y2:78}, '24001':{x:460, y:137, x2:467, y2:141}, '24003':{x:483, y:140, x2:487, y2:146}, '24005':{x:481, y:133, x2:487, y2:140}, '24009':{x:485, y:146, x2:489, y2:151}, '24011':{x:492, y:139, x2:495, y2:145}, '24013':{x:477, y:134, x2:482, y2:139}, '24015':{x:487, y:132, x2:492, y2:137}, '24017':{x:480, y:147, x2:486, y2:152}, '24019':{x:489, y:145, x2:495, y2:153}, '24021':{x:474, y:135, x2:479, y2:141}, '24023':{x:456, y:138, x2:461, y2:145}, '24025':{x:484, y:133, x2:489, y2:138}, '24027':{x:479, y:139, x2:484, y2:142}, '24029':{x:488, y:136, x2:493, y2:141}, '24031':{x:476, y:139, x2:482, y2:144}, '24033':{x:481, y:141, x2:486, y2:149}, '24035':{x:489, y:138, x2:493, y2:144}, '24037':{x:484, y:149, x2:489, y2:153}, '24039':{x:493, y:150, x2:498, y2:155}, '24041':{x:488, y:142, x2:493, y2:146}, '24043':{x:466, y:135, x2:475, y2:141}, '24045':{x:494, y:146, x2:500, y2:151}, '24047':{x:497, y:146, x2:502, y2:153}, '24510':{x:483, y:138, x2:485, y2:140}, '25001':{x:534, y:89, x2:540, y2:97}, '25003':{x:506, y:87, x2:510, y2:97}, '25005':{x:526, y:91, x2:532, y2:99}, '25007':{x:532, y:97, x2:537, y2:100}, '25009':{x:524, y:81, x2:530, y2:87}, '25011':{x:508, y:86, x2:516, y2:91}, '25013':{x:510, y:92, x2:519, y2:96}, '25015':{x:509, y:90, x2:517, y2:94}, '25017':{x:519, y:83, x2:528, y2:91}, '25019':{x:538, y:97, x2:541, y2:99}, '25021':{x:524, y:88, x2:529, y2:93}, '25023':{x:528, y:88, x2:534, y2:96}, '25025':{x:527, y:86, x2:528, y2:89}, '25027':{x:515, y:85, x2:525, y2:94}, '26001':{x:404, y:78, x2:410, y2:84}, '26003':{x:373, y:58, x2:384, y2:66}, '26005':{x:386, y:108, x2:392, y2:113}, '26007':{x:404, y:74, x2:409, y2:79}, '26009':{x:390, y:76, x2:395, y2:81}, '26011':{x:403, y:88, x2:408, y2:91}, '26013':{x:358, y:56, x2:365, y2:63}, '26015':{x:392, y:107, x2:397, y2:112}, '26017':{x:403, y:90, x2:408, y2:97}, '26019':{x:383, y:82, x2:387, y2:86}, '26021':{x:381, y:115, x2:387, y2:122}, '26023':{x:395, y:116, x2:400, y2:120}, '26025':{x:395, y:111, x2:401, y2:116}, '26027':{x:387, y:117, x2:391, y2:121}, '26029':{x:390, y:74, x2:396, y2:77}, '26031':{x:395, y:68, x2:400, y2:76}, '26033':{x:389, y:56, x2:406, y2:65}, '26035':{x:394, y:89, x2:399, y2:94}, '26037':{x:398, y:102, x2:403, y2:107}, '26039':{x:395, y:80, x2:400, y2:85}, '26041':{x:371, y:65, x2:379, y2:74}, '26043':{x:364, y:65, x2:369, y2:72}, '26045':{x:396, y:107, x2:401, y2:112}, '26047':{x:392, y:68, x2:396, y2:75}, '26049':{x:406, y:99, x2:411, y2:106}, '26051':{x:399, y:88, x2:403, y2:93}, '26053':{x:343, y:60, x2:356, y2:68}, '26055':{x:387, y:81, x2:391, y2:86}, '26057':{x:397, y:98, x2:402, y2:103}, '26059':{x:400, y:115, x2:405, y2:121}, '26061':{x:356, y:52, x2:362, y2:64}, '26063':{x:410, y:88, x2:418, y2:94}, '26065':{x:401, y:106, x2:406, y2:111}, '26067':{x:394, y:102, x2:399, y2:107}, '26069':{x:405, y:83, x2:410, y2:88}, '26071':{x:356, y:63, x2:364, y2:70}, '26073':{x:395, y:93, x2:400, y2:98}, '26075':{x:400, y:111, x2:406, y2:116}, '26077':{x:390, y:112, x2:395, y2:117}, '26079':{x:391, y:80, x2:396, y2:85}, '26081':{x:389, y:101, x2:394, y2:108}, '26083':{x:352, y:41, x2:366, y2:53}, '26085':{x:385, y:90, x2:390, y2:95}, '26087':{x:411, y:98, x2:416, y2:104}, '26089':{x:384, y:76, x2:389, y2:82}, '26091':{x:404, y:115, x2:410, y2:120}, '26093':{x:405, y:105, x2:410, y2:111}, '26095':{x:384, y:56, x2:390, y2:63}, '26097':{x:384, y:63, x2:400, y2:67}, '26099':{x:415, y:103, x2:418, y2:109}, '26101':{x:382, y:86, x2:387, y2:90}, '26103':{x:364, y:57, x2:373, y2:68}, '26105':{x:382, y:90, x2:386, y2:95}, '26107':{x:390, y:94, x2:395, y2:99}, '26109':{x:367, y:68, x2:372, y2:80}, '26111':{x:399, y:93, x2:404, y2:98}, '26113':{x:391, y:85, x2:396, y2:90}, '26115':{x:410, y:114, x2:415, y2:119}, '26117':{x:391, y:98, x2:398, y2:103}, '26119':{x:399, y:75, x2:404, y2:80}, '26121':{x:382, y:99, x2:389, y2:104}, '26123':{x:386, y:94, x2:391, y2:101}, '26125':{x:409, y:103, x2:416, y2:110}, '26127':{x:381, y:95, x2:386, y2:100}, '26129':{x:400, y:84, x2:405, y2:89}, '26131':{x:348, y:56, x2:357, y2:65}, '26133':{x:390, y:89, x2:395, y2:94}, '26135':{x:400, y:79, x2:405, y2:84}, '26137':{x:395, y:75, x2:400, y2:80}, '26139':{x:385, y:102, x2:390, y2:108}, '26141':{x:400, y:70, x2:408, y2:75}, '26143':{x:396, y:84, x2:401, y2:89}, '26145':{x:402, y:96, x2:409, y2:102}, '26147':{x:415, y:99, x2:421, y2:107}, '26149':{x:391, y:116, x2:396, y2:121}, '26151':{x:413, y:92, x2:420, y2:100}, '26153':{x:377, y:60, x2:385, y2:70}, '26155':{x:402, y:101, x2:407, y2:106}, '26157':{x:408, y:93, x2:414, y2:100}, '26159':{x:385, y:112, x2:391, y2:117}, '26161':{x:406, y:110, x2:412, y2:115}, '26163':{x:411, y:109, x2:418, y2:114}, '26165':{x:387, y:85, x2:392, y2:90}, '27001':{x:313, y:58, x2:320, y2:69}, '27003':{x:316, y:79, x2:321, y2:84}, '27005':{x:292, y:57, x2:301, y2:62}, '27007':{x:297, y:39, x2:307, y2:53}, '27009':{x:308, y:73, x2:314, y2:77}, '27011':{x:286, y:77, x2:293, y2:82}, '27013':{x:309, y:94, x2:314, y2:99}, '27015':{x:302, y:91, x2:309, y2:96}, '27017':{x:320, y:61, x2:327, y2:66}, '27019':{x:312, y:84, x2:316, y2:89}, '27021':{x:304, y:52, x2:313, y2:68}, '27023':{x:293, y:82, x2:300, y2:87}, '27025':{x:319, y:74, x2:324, y2:80}, '27027':{x:286, y:57, x2:292, y2:63}, '27029':{x:297, y:45, x2:301, y2:57}, '27031':{x:337, y:41, x2:350, y2:51}, '27033':{x:299, y:95, x2:304, y2:99}, '27035':{x:308, y:61, x2:313, y2:69}, '27037':{x:318, y:85, x2:323, y2:91}, '27039':{x:321, y:94, x2:324, y2:99}, '27041':{x:296, y:70, x2:301, y2:75}, '27043':{x:310, y:99, x2:315, y2:104}, '27045':{x:326, y:98, x2:333, y2:103}, '27047':{x:315, y:99, x2:321, y2:103}, '27049':{x:321, y:88, x2:328, y2:94}, '27051':{x:291, y:70, x2:296, y2:74}, '27053':{x:314, y:81, x2:319, y2:87}, '27055':{x:333, y:98, x2:338, y2:103}, '27057':{x:301, y:53, x2:305, y2:61}, '27059':{x:316, y:74, x2:321, y2:79}, '27061':{x:307, y:47, x2:320, y2:58}, '27063':{x:299, y:99, x2:304, y2:104}, '27065':{x:316, y:69, x2:320, y2:75}, '27067':{x:300, y:79, x2:305, y2:86}, '27069':{x:283, y:33, x2:290, y2:39}, '27071':{x:307, y:37, x2:319, y2:48}, '27073':{x:289, y:81, x2:296, y2:87}, '27075':{x:330, y:42, x2:337, y2:59}, '27077':{x:299, y:28, x2:307, y2:41}, '27079':{x:312, y:90, x2:316, y2:94}, '27081':{x:289, y:89, x2:293, y2:95}, '27083':{x:293, y:89, x2:297, y2:95}, '27085':{x:307, y:84, x2:312, y2:89}, '27087':{x:293, y:52, x2:297, y2:57}, '27089':{x:283, y:39, x2:297, y2:44}, '27091':{x:304, y:99, x2:310, y2:104}, '27093':{x:305, y:80, x2:309, y2:86}, '27095':{x:313, y:68, x2:317, y2:77}, '27097':{x:306, y:67, x2:314, y2:74}, '27099':{x:321, y:99, x2:327, y2:103}, '27101':{x:293, y:95, x2:298, y2:99}, '27103':{x:305, y:91, x2:313, y2:95}, '27105':{x:293, y:99, x2:299, y2:104}, '27107':{x:286, y:52, x2:293, y2:57}, '27109':{x:324, y:94, x2:330, y2:99}, '27111':{x:291, y:62, x2:301, y2:70}, '27113':{x:289, y:43, x2:297, y2:47}, '27115':{x:319, y:65, x2:327, y2:74}, '27117':{x:289, y:95, x2:293, y2:99}, '27119':{x:283, y:44, x2:297, y2:52}, '27121':{x:296, y:75, x2:301, y2:79}, '27123':{x:319, y:82, x2:321, y2:85}, '27125':{x:289, y:46, x2:296, y2:49}, '27127':{x:297, y:88, x2:304, y2:95}, '27129':{x:298, y:86, x2:307, y2:91}, '27131':{x:316, y:90, x2:321, y2:94}, '27133':{x:289, y:99, x2:293, y2:104}, '27135':{x:290, y:33, x2:301, y2:39}, '27137':{x:319, y:37, x2:331, y2:62}, '27139':{x:313, y:87, x2:318, y2:90}, '27141':{x:310, y:77, x2:316, y2:81}, '27143':{x:306, y:88, x2:314, y2:91}, '27145':{x:301, y:74, x2:311, y2:80}, '27147':{x:317, y:94, x2:321, y2:99}, '27149':{x:291, y:75, x2:296, y2:79}, '27151':{x:292, y:79, x2:300, y2:82}, '27153':{x:301, y:67, x2:306, y2:74}, '27155':{x:286, y:71, x2:291, y2:77}, '27157':{x:325, y:91, x2:332, y2:95}, '27159':{x:301, y:61, x2:305, y2:67}, '27161':{x:314, y:94, x2:318, y2:99}, '27163':{x:321, y:80, x2:323, y2:87}, '27165':{x:304, y:96, x2:309, y2:99}, '27167':{x:287, y:63, x2:291, y2:71}, '27169':{x:330, y:94, x2:337, y2:98}, '27171':{x:309, y:79, x2:316, y2:84}, '27173':{x:289, y:85, x2:299, y2:90}, '28001':{x:342, y:255, x2:347, y2:263}, '28003':{x:369, y:211, x2:374, y2:214}, '28005':{x:347, y:260, x2:354, y2:264}, '28007':{x:359, y:234, x2:365, y2:240}, '28009':{x:363, y:211, x2:367, y2:217}, '28011':{x:345, y:224, x2:351, y2:232}, '28013':{x:362, y:222, x2:367, y2:228}, '28015':{x:356, y:229, x2:362, y2:235}, '28017':{x:366, y:223, x2:371, y2:228}, '28019':{x:364, y:230, x2:368, y2:236}, '28021':{x:345, y:248, x2:351, y2:254}, '28023':{x:370, y:247, x2:376, y2:252}, '28025':{x:368, y:227, x2:374, y2:230}, '28027':{x:347, y:219, x2:353, y2:226}, '28029':{x:351, y:250, x2:358, y2:255}, '28031':{x:362, y:253, x2:366, y2:258}, '28033':{x:353, y:212, x2:360, y2:216}, '28035':{x:365, y:257, x2:369, y2:264}, '28037':{x:347, y:256, x2:352, y2:260}, '28039':{x:372, y:263, x2:378, y2:266}, '28041':{x:372, y:257, x2:377, y2:263}, '28043':{x:356, y:226, x2:363, y2:229}, '28045':{x:364, y:268, x2:368, y2:274}, '28047':{x:367, y:267, x2:373, y2:272}, '28049':{x:351, y:244, x2:358, y2:251}, '28051':{x:353, y:234, x2:361, y2:240}, '28053':{x:350, y:234, x2:354, y2:239}, '28055':{x:345, y:238, x2:351, y2:246}, '28057':{x:372, y:218, x2:376, y2:223}, '28059':{x:372, y:266, x2:378, y2:271}, '28061':{x:366, y:247, x2:371, y2:253}, '28063':{x:344, y:253, x2:351, y2:257}, '28065':{x:359, y:254, x2:364, y2:259}, '28067':{x:366, y:252, x2:371, y2:258}, '28069':{x:370, y:238, x2:376, y2:243}, '28071':{x:360, y:218, x2:365, y2:223}, '28073':{x:363, y:258, x2:367, y2:264}, '28075':{x:370, y:242, x2:376, y2:247}, '28077':{x:356, y:254, x2:360, y2:260}, '28079':{x:361, y:238, x2:366, y2:243}, '28081':{x:369, y:217, x2:373, y2:223}, '28083':{x:353, y:228, x2:357, y2:234}, '28085':{x:351, y:255, x2:357, y2:260}, '28087':{x:372, y:227, x2:376, y2:233}, '28089':{x:354, y:239, x2:361, y2:246}, '28091':{x:359, y:258, x2:363, y2:264}, '28093':{x:359, y:212, x2:365, y2:218}, '28095':{x:371, y:222, x2:376, y2:228}, '28097':{x:360, y:229, x2:364, y2:234}, '28099':{x:366, y:238, x2:370, y2:243}, '28101':{x:366, y:243, x2:371, y2:247}, '28103':{x:371, y:233, x2:376, y2:238}, '28105':{x:367, y:230, x2:372, y2:234}, '28107':{x:355, y:218, x2:360, y2:223}, '28109':{x:362, y:263, x2:367, y2:271}, '28111':{x:369, y:257, x2:373, y2:264}, '28113':{x:353, y:259, x2:357, y2:264}, '28115':{x:365, y:219, x2:370, y2:224}, '28117':{x:370, y:214, x2:374, y2:218}, '28119':{x:352, y:219, x2:356, y2:224}, '28121':{x:356, y:243, x2:362, y2:250}, '28123':{x:361, y:243, x2:366, y2:248}, '28125':{x:348, y:237, x2:351, y2:243}, '28127':{x:356, y:250, x2:363, y2:254}, '28129':{x:362, y:247, x2:366, y2:253}, '28131':{x:367, y:264, x2:372, y2:268}, '28133':{x:349, y:225, x2:353, y2:235}, '28135':{x:352, y:223, x2:358, y2:229}, '28137':{x:355, y:215, x2:360, y2:218}, '28139':{x:366, y:211, x2:370, y2:217}, '28141':{x:374, y:211, x2:376, y2:218}, '28143':{x:351, y:214, x2:355, y2:220}, '28145':{x:365, y:216, x2:370, y2:220}, '28147':{x:357, y:259, x2:362, y2:264}, '28149':{x:346, y:243, x2:353, y2:250}, '28151':{x:345, y:232, x2:350, y2:239}, '28153':{x:371, y:251, x2:376, y2:257}, '28155':{x:363, y:228, x2:368, y2:232}, '28157':{x:342, y:260, x2:348, y2:265}, '28159':{x:365, y:233, x2:371, y2:238}, '28161':{x:358, y:222, x2:363, y2:227}, '28163':{x:350, y:238, x2:359, y2:245}, '29001':{x:324, y:144, x2:329, y2:148}, '29003':{x:303, y:147, x2:307, y2:151}, '29005':{x:296, y:142, x2:302, y2:146}, '29007':{x:330, y:157, x2:339, y2:161}, '29009':{x:313, y:189, x2:318, y2:194}, '29011':{x:307, y:180, x2:313, y2:183}, '29013':{x:307, y:169, x2:313, y2:174}, '29015':{x:318, y:168, x2:323, y2:174}, '29017':{x:352, y:178, x2:356, y2:186}, '29019':{x:328, y:158, x2:332, y2:166}, '29021':{x:302, y:151, x2:307, y2:155}, '29023':{x:348, y:187, x2:354, y2:193}, '29025':{x:311, y:152, x2:316, y2:155}, '29027':{x:331, y:160, x2:337, y2:167}, '29029':{x:323, y:171, x2:330, y2:177}, '29031':{x:356, y:178, x2:360, y2:184}, '29033':{x:316, y:154, x2:322, y2:159}, '29035':{x:342, y:185, x2:348, y2:189}, '29037':{x:307, y:164, x2:313, y2:169}, '29039':{x:313, y:176, x2:318, y2:180}, '29041':{x:320, y:152, x2:326, y2:159}, '29043':{x:318, y:186, x2:325, y2:190}, '29045':{x:333, y:140, x2:338, y2:145}, '29047':{x:307, y:156, x2:311, y2:161}, '29049':{x:307, y:152, x2:311, y2:156}, '29051':{x:329, y:165, x2:333, y2:170}, '29053':{x:323, y:161, x2:328, y2:166}, '29055':{x:338, y:171, x2:343, y2:178}, '29057':{x:313, y:180, x2:318, y2:184}, '29059':{x:322, y:176, x2:325, y2:182}, '29061':{x:311, y:147, x2:316, y2:152}, '29063':{x:307, y:149, x2:311, y2:152}, '29065':{x:336, y:177, x2:343, y2:182}, '29067':{x:325, y:187, x2:333, y2:190}, '29069':{x:352, y:191, x2:356, y2:200}, '29071':{x:340, y:165, x2:346, y2:171}, '29073':{x:337, y:165, x2:340, y2:172}, '29075':{x:307, y:144, x2:311, y2:149}, '29077':{x:318, y:182, x2:323, y2:187}, '29079':{x:315, y:145, x2:319, y2:149}, '29081':{x:311, y:141, x2:315, y2:147}, '29083':{x:313, y:168, x2:318, y2:172}, '29085':{x:318, y:174, x2:323, y2:177}, '29087':{x:298, y:146, x2:303, y2:151}, '29089':{x:324, y:157, x2:329, y2:162}, '29091':{x:333, y:186, x2:338, y2:194}, '29093':{x:343, y:177, x2:349, y2:183}, '29095':{x:307, y:159, x2:312, y2:164}, '29097':{x:308, y:183, x2:313, y2:187}, '29099':{x:346, y:167, x2:351, y2:173}, '29101':{x:312, y:163, x2:318, y2:168}, '29103':{x:329, y:144, x2:333, y2:149}, '29105':{x:325, y:176, x2:332, y2:181}, '29107':{x:312, y:158, x2:318, y2:163}, '29109':{x:313, y:184, x2:318, y2:189}, '29111':{x:333, y:145, x2:338, y2:149}, '29113':{x:341, y:158, x2:347, y2:162}, '29115':{x:319, y:148, x2:324, y2:153}, '29117':{x:315, y:149, x2:320, y2:154}, '29119':{x:308, y:191, x2:313, y2:195}, '29121':{x:324, y:148, x2:330, y2:154}, '29123':{x:349, y:178, x2:353, y2:182}, '29125':{x:332, y:170, x2:337, y2:174}, '29127':{x:334, y:149, x2:340, y2:153}, '29129':{x:315, y:141, x2:319, y2:145}, '29131':{x:327, y:169, x2:332, y2:174}, '29133':{x:360, y:186, x2:364, y2:190}, '29135':{x:325, y:162, x2:330, y2:169}, '29137':{x:330, y:153, x2:336, y2:157}, '29139':{x:337, y:159, x2:341, y2:165}, '29141':{x:323, y:166, x2:327, y2:172}, '29143':{x:356, y:188, x2:362, y2:194}, '29145':{x:308, y:187, x2:313, y2:191}, '29147':{x:301, y:142, x2:307, y2:147}, '29149':{x:338, y:188, x2:344, y2:194}, '29151':{x:332, y:165, x2:337, y2:171}, '29153':{x:327, y:190, x2:333, y2:194}, '29155':{x:356, y:194, x2:360, y2:199}, '29157':{x:353, y:175, x2:359, y2:179}, '29159':{x:318, y:163, x2:323, y2:168}, '29161':{x:334, y:172, x2:339, y2:179}, '29163':{x:338, y:153, x2:346, y2:159}, '29165':{x:302, y:155, x2:307, y2:160}, '29167':{x:317, y:177, x2:322, y2:182}, '29169':{x:330, y:174, x2:334, y2:179}, '29171':{x:319, y:141, x2:326, y2:144}, '29173':{x:336, y:152, x2:341, y2:157}, '29175':{x:326, y:153, x2:330, y2:158}, '29177':{x:311, y:155, x2:316, y2:160}, '29179':{x:341, y:179, x2:347, y2:186}, '29181':{x:344, y:189, x2:349, y2:193}, '29183':{x:344, y:161, x2:352, y2:167}, '29185':{x:313, y:172, x2:319, y2:177}, '29186':{x:350, y:172, x2:355, y2:178}, '29187':{x:347, y:173, x2:353, y2:178}, '29189':{x:346, y:162, x2:352, y2:168}, '29195':{x:318, y:157, x2:325, y2:163}, '29197':{x:325, y:141, x2:329, y2:144}, '29199':{x:329, y:140, x2:333, y2:144}, '29201':{x:357, y:183, x2:362, y2:188}, '29203':{x:338, y:181, x2:344, y2:189}, '29205':{x:330, y:149, x2:334, y2:154}, '29207':{x:352, y:184, x2:358, y2:191}, '29209':{x:318, y:188, x2:321, y2:194}, '29211':{x:319, y:144, x2:324, y2:148}, '29213':{x:321, y:190, x2:327, y2:194}, '29215':{x:332, y:179, x2:338, y2:187}, '29217':{x:308, y:174, x2:313, y2:180}, '29219':{x:339, y:161, x2:344, y2:167}, '29221':{x:343, y:171, x2:348, y2:177}, '29223':{x:347, y:182, x2:354, y2:188}, '29225':{x:323, y:181, x2:327, y2:187}, '29227':{x:307, y:142, x2:311, y2:144}, '29229':{x:327, y:181, x2:332, y2:187}, '29510':{x:350, y:164, x2:352, y2:166}, '30001':{x:132, y:58, x2:152, y2:79}, '30003':{x:178, y:64, x2:200, y2:79}, '30005':{x:175, y:25, x2:189, y2:42}, '30007':{x:152, y:50, x2:159, y2:62}, '30009':{x:168, y:68, x2:183, y2:77}, '30011':{x:211, y:66, x2:221, y2:81}, '30013':{x:152, y:38, x2:165, y2:51}, '30015':{x:159, y:32, x2:176, y2:44}, '30017':{x:202, y:56, x2:216, y2:70}, '30019':{x:206, y:28, x2:216, y2:35}, '30021':{x:211, y:44, x2:220, y2:57}, '30023':{x:137, y:54, x2:146, y2:60}, '30025':{x:214, y:59, x2:222, y2:70}, '30027':{x:169, y:40, x2:186, y2:54}, '30029':{x:129, y:17, x2:146, y2:37}, '30031':{x:152, y:58, x2:161, y2:80}, '30033':{x:188, y:41, x2:205, y2:56}, '30035':{x:139, y:18, x2:155, y2:29}, '30037':{x:171, y:53, x2:179, y2:62}, '30039':{x:135, y:47, x2:143, y2:58}, '30041':{x:166, y:23, x2:178, y2:36}, '30043':{x:145, y:52, x2:153, y2:62}, '30045':{x:163, y:43, x2:172, y2:54}, '30047':{x:131, y:30, x2:140, y2:42}, '30049':{x:143, y:33, x2:156, y2:54}, '30051':{x:160, y:22, x2:167, y2:34}, '30053':{x:120, y:15, x2:134, y2:30}, '30055':{x:203, y:40, x2:213, y2:53}, '30057':{x:143, y:61, x2:155, y2:76}, '30059':{x:155, y:47, x2:167, y2:59}, '30061':{x:121, y:34, x2:131, y2:46}, '30063':{x:128, y:36, x2:141, y2:48}, '30065':{x:178, y:54, x2:189, y2:62}, '30067':{x:157, y:59, x2:168, y2:75}, '30069':{x:181, y:44, x2:189, y2:55}, '30071':{x:181, y:26, x2:198, y2:46}, '30073':{x:144, y:27, x2:160, y2:35}, '30075':{x:200, y:69, x2:213, y2:80}, '30077':{x:140, y:37, x2:149, y2:55}, '30079':{x:204, y:52, x2:217, y2:61}, '30081':{x:126, y:47, x2:137, y2:62}, '30083':{x:213, y:40, x2:223, y2:51}, '30085':{x:208, y:34, x2:224, y2:43}, '30087':{x:188, y:54, x2:204, y2:77}, '30089':{x:120, y:25, x2:134, y2:42}, '30091':{x:216, y:29, x2:224, y2:38}, '30093':{x:140, y:56, x2:148, y2:63}, '30095':{x:166, y:61, x2:178, y2:73}, '30097':{x:164, y:59, x2:173, y2:73}, '30099':{x:146, y:31, x2:160, y2:40}, '30101':{x:154, y:21, x2:163, y2:32}, '30103':{x:189, y:59, x2:195, y2:67}, '30105':{x:194, y:27, x2:209, y2:44}, '30107':{x:166, y:53, x2:175, y2:60}, '30109':{x:217, y:50, x2:223, y2:60}, '30111':{x:177, y:59, x2:191, y2:71}, '31001':{x:267, y:140, x2:271, y2:144}, '31003':{x:272, y:117, x2:276, y2:124}, '31005':{x:236, y:125, x2:242, y2:130}, '31007':{x:216, y:124, x2:223, y2:128}, '31009':{x:253, y:121, x2:258, y2:126}, '31011':{x:272, y:124, x2:276, y2:130}, '31013':{x:223, y:115, x2:230, y2:121}, '31015':{x:263, y:110, x2:272, y2:113}, '31017':{x:254, y:111, x2:259, y2:121}, '31019':{x:260, y:135, x2:267, y2:140}, '31021':{x:288, y:122, x2:292, y2:127}, '31023':{x:280, y:130, x2:285, y2:135}, '31025':{x:289, y:135, x2:295, y2:139}, '31027':{x:279, y:112, x2:284, y2:118}, '31029':{x:234, y:138, x2:242, y2:143}, '31031':{x:236, y:108, x2:254, y2:121}, '31033':{x:222, y:128, x2:230, y2:134}, '31035':{x:271, y:140, x2:276, y2:144}, '31037':{x:281, y:126, x2:285, y2:131}, '31039':{x:284, y:122, x2:288, y2:126}, '31041':{x:253, y:126, x2:263, y2:135}, '31043':{x:287, y:116, x2:290, y2:120}, '31045':{x:223, y:107, x2:230, y2:115}, '31047':{x:252, y:135, x2:260, y2:140}, '31049':{x:230, y:131, x2:235, y2:134}, '31051':{x:284, y:113, x2:287, y2:120}, '31053':{x:285, y:126, x2:290, y2:131}, '31055':{x:289, y:131, x2:294, y2:134}, '31057':{x:234, y:143, x2:241, y2:148}, '31059':{x:276, y:140, x2:280, y2:144}, '31061':{x:262, y:144, x2:267, y2:149}, '31063':{x:247, y:139, x2:255, y2:144}, '31065':{x:252, y:144, x2:258, y2:148}, '31067':{x:285, y:142, x2:289, y2:149}, '31069':{x:230, y:121, x2:236, y2:131}, '31071':{x:263, y:122, x2:267, y2:126}, '31073':{x:254, y:139, x2:258, y2:144}, '31075':{x:235, y:120, x2:242, y2:125}, '31077':{x:267, y:126, x2:272, y2:131}, '31079':{x:267, y:135, x2:271, y2:140}, '31081':{x:271, y:134, x2:276, y2:140}, '31083':{x:258, y:144, x2:262, y2:149}, '31085':{x:241, y:139, x2:247, y2:143}, '31087':{x:241, y:143, x2:247, y2:148}, '31089':{x:263, y:111, x2:272, y2:122}, '31091':{x:242, y:121, x2:247, y2:125}, '31093':{x:267, y:131, x2:272, y2:135}, '31095':{x:280, y:144, x2:285, y2:149}, '31097':{x:289, y:142, x2:293, y2:146}, '31099':{x:262, y:140, x2:267, y2:144}, '31101':{x:235, y:129, x2:243, y2:135}, '31103':{x:254, y:109, x2:263, y2:113}, '31105':{x:216, y:128, x2:223, y2:133}, '31107':{x:272, y:111, x2:279, y2:117}, '31109':{x:285, y:135, x2:289, y2:142}, '31111':{x:242, y:130, x2:253, y2:139}, '31113':{x:248, y:125, x2:253, y2:130}, '31115':{x:258, y:121, x2:263, y2:126}, '31117':{x:241, y:125, x2:248, y2:130}, '31119':{x:276, y:122, x2:280, y2:126}, '31121':{x:271, y:131, x2:278, y2:137}, '31123':{x:223, y:120, x2:230, y2:128}, '31125':{x:271, y:129, x2:277, y2:132}, '31127':{x:293, y:142, x2:298, y2:146}, '31129':{x:271, y:144, x2:276, y2:149}, '31131':{x:289, y:139, x2:296, y2:142}, '31133':{x:289, y:146, x2:293, y2:149}, '31135':{x:235, y:134, x2:243, y2:139}, '31137':{x:258, y:139, x2:263, y2:144}, '31139':{x:276, y:117, x2:281, y2:122}, '31141':{x:276, y:126, x2:282, y2:132}, '31143':{x:276, y:131, x2:280, y2:135}, '31145':{x:247, y:143, x2:252, y2:148}, '31147':{x:293, y:146, x2:300, y2:149}, '31149':{x:259, y:112, x2:263, y2:122}, '31151':{x:280, y:140, x2:285, y2:144}, '31153':{x:290, y:134, x2:295, y2:136}, '31155':{x:285, y:130, x2:290, y2:136}, '31157':{x:216, y:120, x2:223, y2:124}, '31159':{x:280, y:135, x2:285, y2:140}, '31161':{x:229, y:108, x2:236, y2:121}, '31163':{x:262, y:130, x2:267, y2:135}, '31165':{x:217, y:107, x2:223, y2:120}, '31167':{x:280, y:122, x2:284, y2:126}, '31169':{x:276, y:144, x2:280, y2:149}, '31171':{x:247, y:121, x2:253, y2:126}, '31173':{x:286, y:120, x2:291, y2:123}, '31175':{x:263, y:126, x2:267, y2:131}, '31177':{x:289, y:127, x2:294, y2:131}, '31179':{x:280, y:119, x2:286, y2:122}, '31181':{x:267, y:144, x2:271, y2:149}, '31183':{x:267, y:122, x2:272, y2:126}, '31185':{x:276, y:135, x2:280, y2:140}, '32001':{x:67, y:121, x2:84, y2:136}, '32003':{x:89, y:169, x2:110, y2:195}, '32005':{x:57, y:131, x2:64, y2:140}, '32007':{x:92, y:101, x2:122, y2:131}, '32009':{x:69, y:144, x2:82, y2:165}, '32011':{x:91, y:115, x2:101, y2:139}, '32013':{x:70, y:96, x2:95, y2:119}, '32015':{x:79, y:114, x2:96, y2:138}, '32017':{x:91, y:147, x2:114, y2:173}, '32019':{x:61, y:125, x2:70, y2:142}, '32021':{x:63, y:134, x2:78, y2:150}, '32023':{x:74, y:136, x2:105, y2:180}, '32027':{x:67, y:109, x2:88, y2:125}, '32029':{x:61, y:126, x2:66, y2:130}, '32031':{x:58, y:95, x2:73, y2:130}, '32033':{x:97, y:127, x2:118, y2:149}, '32510':{x:57, y:130, x2:62, y2:132}, '33001':{x:518, y:71, x2:523, y2:76}, '33003':{x:518, y:63, x2:524, y2:73}, '33005':{x:512, y:80, x2:518, y2:86}, '33007':{x:514, y:51, x2:521, y2:66}, '33009':{x:512, y:64, x2:520, y2:75}, '33011':{x:516, y:79, x2:525, y2:85}, '33013':{x:515, y:74, x2:523, y2:80}, '33015':{x:522, y:77, x2:528, y2:83}, '33017':{x:522, y:72, x2:527, y2:79}, '33019':{x:512, y:75, x2:516, y2:81}, '34001':{x:499, y:129, x2:506, y2:135}, '34003':{x:502, y:110, x2:506, y2:115}, '34005':{x:497, y:124, x2:505, y2:131}, '34007':{x:497, y:127, x2:501, y2:131}, '34009':{x:501, y:134, x2:504, y2:140}, '34011':{x:496, y:132, x2:501, y2:137}, '34013':{x:502, y:114, x2:504, y2:116}, '34015':{x:494, y:128, x2:500, y2:133}, '34017':{x:504, y:114, x2:505, y2:116}, '34019':{x:494, y:116, x2:499, y2:122}, '34021':{x:498, y:121, x2:502, y2:124}, '34023':{x:501, y:117, x2:504, y2:122}, '34025':{x:501, y:118, x2:507, y2:124}, '34027':{x:497, y:112, x2:502, y2:117}, '34029':{x:502, y:123, x2:507, y2:131}, '34031':{x:500, y:110, x2:504, y2:114}, '34033':{x:494, y:130, x2:499, y2:135}, '34035':{x:498, y:116, x2:502, y2:121}, '34037':{x:495, y:109, x2:501, y2:114}, '34039':{x:501, y:116, x2:504, y2:118}, '34041':{x:494, y:112, x2:498, y2:119}, '35001':{x:177, y:204, x2:187, y2:210}, '35003':{x:154, y:210, x2:170, y2:229}, '35005':{x:192, y:222, x2:213, y2:242}, '35006':{x:156, y:202, x2:177, y2:213}, '35007':{x:197, y:184, x2:212, y2:195}, '35009':{x:212, y:212, x2:220, y2:220}, '35011':{x:199, y:213, x2:210, y2:223}, '35013':{x:170, y:233, x2:182, y2:249}, '35015':{x:197, y:236, x2:210, y2:250}, '35017':{x:153, y:228, x2:168, y2:246}, '35019':{x:195, y:207, x2:209, y2:218}, '35021':{x:206, y:194, x2:217, y2:206}, '35023':{x:150, y:233, x2:160, y2:253}, '35025':{x:209, y:229, x2:218, y2:250}, '35027':{x:183, y:218, x2:199, y2:234}, '35028':{x:186, y:196, x2:188, y2:199}, '35029':{x:160, y:237, x2:172, y2:248}, '35031':{x:157, y:192, x2:177, y2:206}, '35033':{x:193, y:193, x2:207, y2:200}, '35035':{x:181, y:229, x2:198, y2:248}, '35037':{x:208, y:202, x2:220, y2:216}, '35039':{x:174, y:181, x2:195, y2:196}, '35041':{x:209, y:216, x2:219, y2:230}, '35043':{x:173, y:191, x2:188, y2:205}, '35045':{x:159, y:179, x2:177, y2:194}, '35047':{x:192, y:198, x2:214, y2:209}, '35049':{x:186, y:196, x2:193, y2:208}, '35051':{x:165, y:226, x2:183, y2:238}, '35053':{x:168, y:212, x2:188, y2:228}, '35055':{x:190, y:183, x2:199, y2:196}, '35057':{x:183, y:208, x2:196, y2:219}, '35059':{x:211, y:185, x2:222, y2:202}, '35061':{x:175, y:208, x2:184, y2:215}, '36001':{x:498, y:88, x2:502, y2:94}, '36003':{x:460, y:100, x2:467, y2:108}, '36005':{x:505, y:112, x2:507, y2:114}, '36007':{x:481, y:98, x2:489, y2:103}, '36009':{x:453, y:101, x2:461, y2:109}, '36011':{x:473, y:86, x2:479, y2:96}, '36013':{x:447, y:102, x2:454, y2:110}, '36015':{x:473, y:101, x2:478, y2:105}, '36017':{x:482, y:92, x2:488, y2:100}, '36019':{x:492, y:60, x2:500, y2:68}, '36021':{x:502, y:91, x2:506, y2:98}, '36023':{x:478, y:93, x2:483, y2:98}, '36025':{x:487, y:94, x2:497, y2:103}, '36027':{x:502, y:97, x2:507, y2:106}, '36029':{x:452, y:94, x2:459, y2:103}, '36031':{x:493, y:65, x2:502, y2:77}, '36033':{x:486, y:61, x2:495, y2:74}, '36035':{x:491, y:83, x2:498, y2:88}, '36037':{x:457, y:93, x2:463, y2:97}, '36039':{x:496, y:93, x2:503, y2:98}, '36041':{x:488, y:73, x2:497, y2:85}, '36043':{x:485, y:75, x2:492, y2:91}, '36045':{x:474, y:72, x2:482, y2:82}, '36047':{x:505, y:115, x2:506, y2:117}, '36049':{x:480, y:74, x2:487, y2:84}, '36051':{x:462, y:94, x2:468, y2:101}, '36053':{x:480, y:88, x2:488, y2:94}, '36055':{x:461, y:89, x2:468, y2:95}, '36057':{x:491, y:87, x2:498, y2:90}, '36059':{x:507, y:111, x2:511, y2:116}, '36061':{x:505, y:113, x2:506, y2:116}, '36063':{x:451, y:90, x2:457, y2:95}, '36065':{x:480, y:81, x2:488, y2:91}, '36067':{x:475, y:88, x2:482, y2:94}, '36069':{x:466, y:92, x2:472, y2:99}, '36071':{x:496, y:104, x2:504, y2:110}, '36073':{x:457, y:90, x2:462, y2:93}, '36075':{x:473, y:81, x2:481, y2:88}, '36077':{x:487, y:90, x2:494, y2:98}, '36079':{x:503, y:104, x2:508, y2:108}, '36081':{x:506, y:114, x2:508, y2:117}, '36083':{x:502, y:85, x2:506, y2:93}, '36085':{x:504, y:116, x2:505, y2:118}, '36087':{x:502, y:107, x2:505, y2:111}, '36089':{x:478, y:63, x2:490, y2:75}, '36091':{x:496, y:81, x2:502, y2:89}, '36093':{x:497, y:87, x2:501, y2:90}, '36095':{x:493, y:90, x2:498, y2:95}, '36097':{x:471, y:98, x2:477, y2:102}, '36099':{x:471, y:91, x2:475, y2:98}, '36101':{x:466, y:98, x2:474, y2:106}, '36103':{x:509, y:106, x2:522, y2:115}, '36105':{x:491, y:100, x2:499, y2:108}, '36107':{x:477, y:98, x2:482, y2:104}, '36109':{x:475, y:96, x2:480, y2:101}, '36111':{x:494, y:97, x2:503, y2:105}, '36113':{x:494, y:75, x2:501, y2:83}, '36115':{x:500, y:75, x2:505, y2:86}, '36117':{x:467, y:87, x2:474, y2:93}, '36119':{x:504, y:106, x2:508, y2:113}, '36121':{x:458, y:96, x2:463, y2:101}, '36123':{x:468, y:95, x2:473, y2:99}, '37001':{x:463, y:183, x2:466, y2:188}, '37003':{x:445, y:188, x2:448, y2:192}, '37005':{x:443, y:182, x2:448, y2:185}, '37007':{x:457, y:198, x2:462, y2:203}, '37009':{x:440, y:182, x2:445, y2:187}, '37011':{x:437, y:187, x2:440, y2:192}, '37013':{x:488, y:185, x2:495, y2:191}, '37015':{x:486, y:178, x2:492, y2:183}, '37017':{x:472, y:199, x2:481, y2:205}, '37019':{x:477, y:205, x2:485, y2:212}, '37021':{x:430, y:193, x2:437, y2:199}, '37023':{x:439, y:191, x2:445, y2:196}, '37025':{x:452, y:194, x2:457, y2:199}, '37027':{x:440, y:188, x2:445, y2:193}, '37029':{x:492, y:173, x2:500, y2:177}, '37031':{x:491, y:193, x2:500, y2:199}, '37033':{x:462, y:179, x2:467, y2:183}, '37035':{x:444, y:192, x2:450, y2:195}, '37037':{x:464, y:187, x2:471, y2:193}, '37039':{x:416, y:202, x2:422, y2:207}, '37041':{x:491, y:176, x2:495, y2:181}, '37043':{x:419, y:204, x2:425, y2:206}, '37045':{x:442, y:195, x2:447, y2:201}, '37047':{x:472, y:204, x2:481, y2:211}, '37049':{x:486, y:189, x2:495, y2:197}, '37051':{x:470, y:194, x2:477, y2:200}, '37053':{x:495, y:172, x2:501, y2:178}, '37055':{x:499, y:176, x2:506, y2:189}, '37057':{x:454, y:187, x2:459, y2:194}, '37059':{x:451, y:187, x2:455, y2:191}, '37061':{x:479, y:194, x2:485, y2:200}, '37063':{x:469, y:182, x2:472, y2:187}, '37065':{x:481, y:181, x2:486, y2:187}, '37067':{x:453, y:184, x2:458, y2:188}, '37069':{x:473, y:181, x2:478, y2:186}, '37071':{x:445, y:196, x2:450, y2:200}, '37073':{x:488, y:173, x2:494, y2:177}, '37075':{x:418, y:200, x2:423, y2:203}, '37077':{x:470, y:177, x2:473, y2:184}, '37079':{x:482, y:187, x2:486, y2:191}, '37081':{x:458, y:183, x2:463, y2:188}, '37083':{x:478, y:177, x2:486, y2:182}, '37085':{x:468, y:191, x2:475, y2:196}, '37087':{x:426, y:194, x2:431, y2:201}, '37089':{x:431, y:197, x2:436, y2:202}, '37091':{x:486, y:174, x2:491, y2:179}, '37093':{x:466, y:196, x2:471, y2:201}, '37095':{x:493, y:184, x2:504, y2:191}, '37097':{x:448, y:188, x2:452, y2:195}, '37099':{x:425, y:198, x2:430, y2:205}, '37101':{x:473, y:186, x2:479, y2:193}, '37103':{x:484, y:192, x2:491, y2:197}, '37105':{x:466, y:190, x2:470, y2:195}, '37107':{x:482, y:190, x2:487, y2:196}, '37109':{x:444, y:195, x2:450, y2:197}, '37111':{x:436, y:191, x2:441, y2:197}, '37113':{x:422, y:201, x2:428, y2:206}, '37115':{x:429, y:191, x2:434, y2:196}, '37117':{x:485, y:181, x2:492, y2:186}, '37119':{x:450, y:195, x2:455, y2:201}, '37121':{x:434, y:189, x2:438, y2:193}, '37123':{x:458, y:193, x2:464, y2:198}, '37125':{x:462, y:192, x2:470, y2:198}, '37127':{x:477, y:181, x2:482, y2:187}, '37129':{x:483, y:204, x2:486, y2:210}, '37131':{x:479, y:175, x2:487, y2:180}, '37133':{x:485, y:196, x2:491, y2:202}, '37135':{x:466, y:182, x2:469, y2:187}, '37137':{x:491, y:189, x2:496, y2:194}, '37139':{x:493, y:174, x2:498, y2:178}, '37141':{x:480, y:199, x2:488, y2:205}, '37143':{x:493, y:176, x2:497, y2:179}, '37145':{x:466, y:178, x2:470, y2:183}, '37147':{x:483, y:184, x2:489, y2:191}, '37149':{x:436, y:198, x2:440, y2:201}, '37151':{x:458, y:188, x2:464, y2:194}, '37153':{x:460, y:197, x2:466, y2:202}, '37155':{x:467, y:199, x2:474, y2:207}, '37157':{x:457, y:179, x2:463, y2:184}, '37159':{x:451, y:190, x2:458, y2:195}, '37161':{x:436, y:195, x2:442, y2:201}, '37163':{x:474, y:193, x2:481, y2:202}, '37165':{x:464, y:199, x2:468, y2:204}, '37167':{x:455, y:194, x2:460, y2:199}, '37169':{x:453, y:180, x2:458, y2:185}, '37171':{x:448, y:181, x2:453, y2:186}, '37173':{x:419, y:196, x2:427, y2:202}, '37175':{x:429, y:199, x2:434, y2:204}, '37177':{x:496, y:180, x2:500, y2:184}, '37179':{x:452, y:198, x2:458, y2:204}, '37181':{x:473, y:177, x2:475, y2:182}, '37183':{x:470, y:184, x2:477, y2:191}, '37185':{x:474, y:176, x2:479, y2:181}, '37187':{x:491, y:180, x2:496, y2:185}, '37189':{x:438, y:185, x2:443, y2:189}, '37191':{x:478, y:189, x2:483, y2:194}, '37193':{x:442, y:183, x2:449, y2:189}, '37195':{x:478, y:185, x2:483, y2:189}, '37197':{x:449, y:185, x2:453, y2:188}, '37199':{x:433, y:190, x2:437, y2:195}, '38001':{x:231, y:65, x2:240, y2:70}, '38003':{x:272, y:55, x2:279, y2:63}, '38005':{x:260, y:40, x2:271, y2:47}, '38007':{x:226, y:52, x2:232, y2:61}, '38009':{x:246, y:32, x2:258, y2:38}, '38011':{x:221, y:65, x2:231, y2:70}, '38013':{x:234, y:31, x2:242, y2:37}, '38015':{x:250, y:53, x2:257, y2:63}, '38017':{x:278, y:55, x2:287, y2:63}, '38019':{x:268, y:33, x2:277, y2:39}, '38021':{x:266, y:67, x2:276, y2:72}, '38023':{x:224, y:30, x2:234, y2:36}, '38025':{x:231, y:46, x2:239, y2:57}, '38027':{x:265, y:47, x2:272, y2:51}, '38029':{x:252, y:62, x2:259, y2:71}, '38031':{x:265, y:51, x2:272, y2:54}, '38033':{x:222, y:51, x2:226, y2:62}, '38035':{x:277, y:43, x2:286, y2:50}, '38037':{x:239, y:60, x2:249, y2:70}, '38039':{x:271, y:50, x2:276, y2:55}, '38041':{x:232, y:61, x2:240, y2:67}, '38043':{x:257, y:54, x2:263, y2:63}, '38045':{x:266, y:63, x2:275, y2:68}, '38047':{x:259, y:63, x2:266, y2:67}, '38049':{x:250, y:37, x2:257, y2:47}, '38051':{x:259, y:67, x2:267, y2:72}, '38053':{x:223, y:41, x2:236, y2:52}, '38055':{x:238, y:46, x2:253, y2:55}, '38057':{x:239, y:49, x2:247, y2:57}, '38059':{x:239, y:57, x2:253, y2:67}, '38061':{x:234, y:37, x2:242, y2:47}, '38063':{x:271, y:43, x2:277, y2:50}, '38065':{x:242, y:54, x2:250, y2:58}, '38067':{x:277, y:33, x2:284, y2:39}, '38069':{x:256, y:38, x2:263, y2:47}, '38071':{x:266, y:38, x2:274, y2:47}, '38073':{x:275, y:63, x2:282, y2:68}, '38075':{x:242, y:31, x2:250, y2:39}, '38077':{x:282, y:63, x2:288, y2:72}, '38079':{x:257, y:32, x2:263, y2:38}, '38081':{x:275, y:68, x2:282, y2:72}, '38083':{x:252, y:47, x2:258, y2:54}, '38085':{x:240, y:65, x2:253, y2:71}, '38087':{x:221, y:60, x2:232, y2:66}, '38089':{x:229, y:56, x2:240, y2:62}, '38091':{x:276, y:50, x2:281, y2:55}, '38093':{x:263, y:54, x2:272, y2:63}, '38095':{x:263, y:32, x2:268, y2:41}, '38097':{x:281, y:50, x2:286, y2:55}, '38099':{x:273, y:39, x2:284, y2:43}, '38101':{x:240, y:34, x2:250, y2:47}, '38103':{x:258, y:47, x2:265, y2:54}, '38105':{x:223, y:35, x2:234, y2:43}, '39001':{x:416, y:153, x2:420, y2:159}, '39003':{x:406, y:130, x2:411, y2:134}, '39005':{x:424, y:126, x2:428, y2:132}, '39007':{x:436, y:111, x2:442, y2:118}, '39009':{x:429, y:145, x2:435, y2:150}, '39011':{x:405, y:133, x2:411, y2:138}, '39013':{x:438, y:135, x2:443, y2:140}, '39015':{x:412, y:151, x2:416, y2:159}, '39017':{x:404, y:147, x2:409, y2:152}, '39019':{x:436, y:128, x2:440, y2:132}, '39021':{x:410, y:138, x2:416, y2:141}, '39023':{x:411, y:141, x2:416, y2:144}, '39025':{x:409, y:151, x2:412, y2:158}, '39027':{x:412, y:147, x2:416, y2:151}, '39029':{x:437, y:125, x2:443, y2:130}, '39031':{x:428, y:133, x2:434, y2:137}, '39033':{x:418, y:127, x2:422, y2:131}, '39035':{x:428, y:117, x2:434, y2:122}, '39037':{x:403, y:138, x2:407, y2:144}, '39039':{x:401, y:124, x2:407, y2:127}, '39041':{x:418, y:135, x2:423, y2:139}, '39043':{x:419, y:121, x2:425, y2:124}, '39045':{x:423, y:141, x2:427, y2:146}, '39047':{x:415, y:145, x2:419, y2:149}, '39049':{x:419, y:139, x2:423, y2:143}, '39051':{x:404, y:119, x2:410, y2:123}, '39053':{x:427, y:152, x2:431, y2:158}, '39055':{x:433, y:116, x2:437, y2:121}, '39057':{x:411, y:144, x2:415, y2:147}, '39059':{x:433, y:135, x2:438, y2:141}, '39061':{x:404, y:151, x2:410, y2:155}, '39063':{x:410, y:126, x2:415, y2:131}, '39065':{x:411, y:131, x2:416, y2:135}, '39067':{x:436, y:132, x2:441, y2:136}, '39069':{x:405, y:122, x2:410, y2:127}, '39071':{x:414, y:149, x2:419, y2:154}, '39073':{x:424, y:144, x2:430, y2:148}, '39075':{x:427, y:130, x2:433, y2:133}, '39077':{x:420, y:123, x2:425, y2:127}, '39079':{x:424, y:150, x2:428, y2:155}, '39081':{x:440, y:130, x2:443, y2:135}, '39083':{x:423, y:132, x2:428, y2:137}, '39085':{x:432, y:114, x2:437, y2:118}, '39087':{x:425, y:155, x2:430, y2:160}, '39089':{x:423, y:136, x2:428, y2:141}, '39091':{x:410, y:135, x2:415, y2:138}, '39093':{x:424, y:120, x2:429, y2:126}, '39095':{x:409, y:119, x2:416, y2:123}, '39097':{x:415, y:139, x2:419, y2:145}, '39099':{x:437, y:122, x2:443, y2:126}, '39101':{x:415, y:131, x2:421, y2:135}, '39103':{x:427, y:122, x2:432, y2:126}, '39105':{x:429, y:149, x2:435, y2:153}, '39107':{x:402, y:133, x2:406, y2:138}, '39109':{x:406, y:139, x2:411, y2:143}, '39111':{x:437, y:139, x2:442, y2:143}, '39113':{x:406, y:143, x2:411, y2:148}, '39115':{x:430, y:142, x2:435, y2:146}, '39117':{x:420, y:131, x2:423, y2:136}, '39119':{x:428, y:137, x2:434, y2:142}, '39121':{x:434, y:139, x2:438, y2:144}, '39123':{x:414, y:120, x2:421, y2:122}, '39125':{x:401, y:126, x2:406, y2:130}, '39127':{x:426, y:141, x2:431, y2:145}, '39129':{x:419, y:143, x2:424, y2:147}, '39131':{x:419, y:151, x2:424, y2:154}, '39133':{x:434, y:120, x2:438, y2:125}, '39135':{x:403, y:143, x2:407, y2:148}, '39137':{x:406, y:127, x2:411, y2:131}, '39139':{x:422, y:127, x2:426, y2:133}, '39141':{x:418, y:147, x2:424, y2:151}, '39143':{x:414, y:121, x2:420, y2:125}, '39145':{x:420, y:153, x2:426, y2:159}, '39147':{x:414, y:124, x2:421, y2:128}, '39149':{x:406, y:135, x2:410, y2:140}, '39151':{x:432, y:125, x2:438, y2:130}, '39153':{x:431, y:121, x2:434, y2:127}, '39155':{x:437, y:118, x2:442, y2:123}, '39157':{x:432, y:130, x2:437, y2:136}, '39159':{x:415, y:134, x2:419, y2:140}, '39161':{x:402, y:129, x2:406, y2:133}, '39163':{x:424, y:147, x2:429, y2:152}, '39165':{x:408, y:147, x2:412, y2:151}, '39167':{x:433, y:143, x2:441, y2:149}, '39169':{x:427, y:126, x2:432, y2:131}, '39171':{x:400, y:120, x2:405, y2:124}, '39173':{x:410, y:120, x2:415, y2:127}, '39175':{x:414, y:128, x2:418, y2:132}, '40001':{x:306, y:199, x2:309, y2:206}, '40003':{x:267, y:188, x2:272, y2:195}, '40005':{x:289, y:218, x2:297, y2:225}, '40007':{x:242, y:187, x2:253, y2:194}, '40009':{x:252, y:207, x2:258, y2:213}, '40011':{x:266, y:199, x2:271, y2:207}, '40013':{x:287, y:225, x2:296, y2:231}, '40015':{x:266, y:207, x2:272, y2:216}, '40017':{x:269, y:204, x2:276, y2:210}, '40019':{x:277, y:220, x2:284, y2:226}, '40021':{x:301, y:199, x2:306, y2:206}, '40023':{x:294, y:225, x2:302, y2:229}, '40025':{x:222, y:185, x2:232, y2:193}, '40027':{x:276, y:209, x2:282, y2:215}, '40029':{x:288, y:217, x2:293, y2:222}, '40031':{x:264, y:216, x2:271, y2:221}, '40033':{x:265, y:220, x2:271, y2:226}, '40035':{x:299, y:188, x2:304, y2:194}, '40037':{x:287, y:199, x2:293, y2:206}, '40039':{x:258, y:203, x2:266, y2:208}, '40041':{x:304, y:192, x2:308, y2:199}, '40043':{x:258, y:198, x2:266, y2:203}, '40045':{x:252, y:193, x2:258, y2:202}, '40047':{x:272, y:193, x2:279, y2:199}, '40049':{x:276, y:216, x2:284, y2:220}, '40051':{x:271, y:209, x2:276, y2:218}, '40053':{x:272, y:188, x2:279, y2:193}, '40055':{x:253, y:212, x2:259, y2:217}, '40057':{x:251, y:213, x2:255, y2:220}, '40059':{x:252, y:187, x2:260, y2:193}, '40061':{x:299, y:208, x2:306, y2:213}, '40063':{x:288, y:210, x2:294, y2:217}, '40065':{x:253, y:215, x2:261, y2:222}, '40067':{x:271, y:223, x2:277, y2:229}, '40069':{x:284, y:220, x2:289, y2:226}, '40071':{x:278, y:188, x2:286, y2:193}, '40073':{x:271, y:199, x2:276, y2:205}, '40075':{x:258, y:212, x2:266, y2:219}, '40077':{x:299, y:213, x2:305, y2:218}, '40079':{x:303, y:209, x2:310, y2:220}, '40081':{x:282, y:202, x2:287, y2:208}, '40083':{x:276, y:199, x2:282, y2:205}, '40085':{x:277, y:226, x2:284, y2:231}, '40087':{x:276, y:210, x2:284, y2:216}, '40089':{x:302, y:220, x2:310, y2:232}, '40091':{x:294, y:207, x2:300, y2:212}, '40093':{x:263, y:194, x2:272, y2:199}, '40095':{x:283, y:225, x2:287, y2:229}, '40097':{x:299, y:194, x2:304, y2:200}, '40099':{x:279, y:219, x2:285, y2:223}, '40101':{x:296, y:203, x2:303, y2:210}, '40103':{x:278, y:193, x2:284, y2:199}, '40105':{x:295, y:188, x2:300, y2:193}, '40107':{x:287, y:206, x2:294, y2:210}, '40109':{x:276, y:204, x2:282, y2:209}, '40111':{x:291, y:203, x2:296, y2:209}, '40113':{x:283, y:188, x2:293, y2:199}, '40115':{x:304, y:188, x2:308, y2:192}, '40117':{x:283, y:195, x2:291, y2:199}, '40119':{x:279, y:198, x2:287, y2:202}, '40121':{x:292, y:210, x2:300, y2:219}, '40123':{x:284, y:214, x2:289, y2:220}, '40125':{x:281, y:208, x2:287, y2:215}, '40127':{x:296, y:218, x2:305, y2:225}, '40129':{x:252, y:200, x2:259, y2:208}, '40131':{x:295, y:193, x2:300, y2:200}, '40133':{x:285, y:208, x2:289, y2:215}, '40135':{x:303, y:206, x2:310, y2:210}, '40137':{x:271, y:218, x2:277, y2:223}, '40139':{x:231, y:186, x2:243, y2:193}, '40141':{x:259, y:218, x2:266, y2:225}, '40143':{x:290, y:196, x2:296, y2:203}, '40145':{x:295, y:199, x2:302, y2:204}, '40147':{x:294, y:188, x2:296, y2:196}, '40149':{x:258, y:207, x2:266, y2:212}, '40151':{x:258, y:188, x2:268, y2:196}, '40153':{x:256, y:190, x2:263, y2:199}, '41001':{x:88, y:60, x2:105, y2:72}, '41003':{x:41, y:51, x2:48, y2:58}, '41005':{x:52, y:45, x2:63, y2:54}, '41007':{x:45, y:33, x2:51, y2:39}, '41009':{x:50, y:34, x2:55, y2:41}, '41011':{x:29, y:64, x2:38, y2:76}, '41013':{x:64, y:60, x2:77, y2:74}, '41015':{x:27, y:71, x2:36, y2:85}, '41017':{x:54, y:60, x2:73, y2:74}, '41019':{x:34, y:60, x2:53, y2:78}, '41021':{x:72, y:46, x2:79, y2:56}, '41023':{x:76, y:58, x2:92, y2:73}, '41025':{x:70, y:70, x2:89, y2:99}, '41027':{x:62, y:44, x2:66, y2:50}, '41029':{x:37, y:76, x2:49, y2:89}, '41031':{x:58, y:55, x2:73, y2:62}, '41033':{x:32, y:75, x2:40, y2:86}, '41035':{x:46, y:69, x2:61, y2:92}, '41037':{x:57, y:71, x2:75, y2:96}, '41039':{x:36, y:55, x2:58, y2:71}, '41041':{x:38, y:46, x2:44, y2:56}, '41043':{x:46, y:52, x2:60, y2:62}, '41045':{x:84, y:68, x2:102, y2:101}, '41047':{x:48, y:46, x2:61, y2:56}, '41049':{x:77, y:47, x2:86, y2:59}, '41051':{x:53, y:41, x2:62, y2:47}, '41053':{x:43, y:47, x2:50, y2:53}, '41055':{x:69, y:46, x2:75, y2:55}, '41057':{x:42, y:37, x2:50, y2:47}, '41059':{x:84, y:47, x2:98, y2:60}, '41061':{x:89, y:50, x2:101, y2:62}, '41063':{x:97, y:49, x2:110, y2:63}, '41065':{x:61, y:45, x2:73, y2:58}, '41067':{x:48, y:39, x2:54, y2:46}, '41069':{x:71, y:55, x2:80, y2:66}, '41071':{x:44, y:43, x2:52, y2:48}, '42001':{x:474, y:130, x2:479, y2:135}, '42003':{x:445, y:127, x2:452, y2:133}, '42005':{x:450, y:120, x2:456, y2:128}, '42007':{x:443, y:125, x2:447, y2:131}, '42009':{x:462, y:129, x2:467, y2:137}, '42011':{x:483, y:120, x2:492, y2:127}, '42013':{x:462, y:123, x2:467, y2:130}, '42015':{x:474, y:103, x2:483, y2:110}, '42017':{x:492, y:119, x2:500, y2:126}, '42019':{x:446, y:120, x2:451, y2:128}, '42021':{x:458, y:124, x2:464, y2:131}, '42023':{x:461, y:112, x2:466, y2:117}, '42025':{x:486, y:113, x2:491, y2:119}, '42027':{x:464, y:117, x2:475, y2:124}, '42029':{x:488, y:125, x2:494, y2:132}, '42031':{x:450, y:116, x2:455, y2:123}, '42033':{x:459, y:117, x2:466, y2:125}, '42035':{x:465, y:113, x2:475, y2:119}, '42037':{x:479, y:113, x2:484, y2:119}, '42039':{x:441, y:112, x2:450, y2:118}, '42041':{x:472, y:126, x2:479, y2:132}, '42043':{x:477, y:122, x2:482, y2:128}, '42045':{x:493, y:126, x2:496, y2:130}, '42047':{x:455, y:113, x2:464, y2:118}, '42049':{x:441, y:106, x2:449, y2:113}, '42051':{x:450, y:133, x2:457, y2:139}, '42053':{x:451, y:113, x2:456, y2:118}, '42055':{x:469, y:128, x2:475, y2:136}, '42057':{x:466, y:131, x2:470, y2:137}, '42059':{x:445, y:136, x2:451, y2:140}, '42061':{x:465, y:123, x2:471, y2:131}, '42063':{x:454, y:122, x2:460, y2:129}, '42065':{x:454, y:117, x2:459, y2:123}, '42067':{x:471, y:122, x2:478, y2:129}, '42069':{x:486, y:107, x2:490, y2:113}, '42071':{x:481, y:125, x2:489, y2:133}, '42073':{x:442, y:122, x2:447, y2:126}, '42075':{x:481, y:123, x2:486, y2:127}, '42077':{x:488, y:118, x2:493, y2:122}, '42079':{x:482, y:110, x2:489, y2:117}, '42081':{x:469, y:110, x2:481, y2:117}, '42083':{x:456, y:107, x2:463, y2:113}, '42085':{x:442, y:117, x2:447, y2:122}, '42087':{x:469, y:120, x2:474, y2:127}, '42089':{x:489, y:111, x2:495, y2:117}, '42091':{x:491, y:122, x2:497, y2:127}, '42093':{x:478, y:115, x2:481, y2:118}, '42095':{x:490, y:114, x2:495, y2:120}, '42097':{x:477, y:115, x2:483, y2:123}, '42099':{x:472, y:122, x2:479, y2:129}, '42101':{x:495, y:125, x2:498, y2:129}, '42103':{x:491, y:106, x2:497, y2:113}, '42105':{x:462, y:106, x2:469, y2:114}, '42107':{x:480, y:117, x2:489, y2:123}, '42109':{x:473, y:119, x2:478, y2:122}, '42111':{x:456, y:130, x2:462, y2:138}, '42113':{x:476, y:109, x2:482, y2:113}, '42115':{x:482, y:102, x2:489, y2:108}, '42117':{x:468, y:105, x2:476, y2:112}, '42119':{x:473, y:116, x2:478, y2:121}, '42121':{x:447, y:114, x2:452, y2:121}, '42123':{x:449, y:109, x2:456, y2:115}, '42125':{x:444, y:130, x2:451, y2:137}, '42127':{x:488, y:102, x2:493, y2:112}, '42129':{x:451, y:127, x2:459, y2:134}, '42131':{x:482, y:107, x2:487, y2:112}, '42133':{x:477, y:127, x2:487, y2:134}, '44001':{x:527, y:96, x2:529, y2:97}, '44003':{x:523, y:96, x2:527, y2:99}, '44005':{x:528, y:96, x2:530, y2:100}, '44007':{x:522, y:93, x2:527, y2:97}, '44009':{x:523, y:97, x2:527, y2:103}, '45001':{x:434, y:210, x2:439, y2:217}, '45003':{x:443, y:217, x2:451, y2:226}, '45005':{x:448, y:226, x2:454, y2:231}, '45007':{x:431, y:206, x2:438, y2:215}, '45009':{x:451, y:222, x2:456, y2:227}, '45011':{x:446, y:222, x2:452, y2:227}, '45013':{x:456, y:231, x2:462, y2:239}, '45015':{x:461, y:219, x2:470, y2:228}, '45017':{x:452, y:216, x2:459, y2:221}, '45019':{x:461, y:222, x2:472, y2:233}, '45021':{x:441, y:200, x2:446, y2:204}, '45023':{x:446, y:204, x2:453, y2:208}, '45025':{x:455, y:202, x2:464, y2:209}, '45027':{x:458, y:213, x2:464, y2:221}, '45029':{x:454, y:225, x2:463, y2:233}, '45031':{x:459, y:206, x2:466, y2:212}, '45033':{x:466, y:204, x2:472, y2:209}, '45035':{x:456, y:222, x2:464, y2:228}, '45037':{x:440, y:216, x2:446, y2:222}, '45039':{x:447, y:207, x2:454, y2:212}, '45041':{x:462, y:208, x2:470, y2:215}, '45043':{x:468, y:214, x2:474, y2:223}, '45045':{x:432, y:201, x2:439, y2:210}, '45047':{x:438, y:211, x2:443, y2:217}, '45049':{x:451, y:227, x2:457, y2:234}, '45051':{x:470, y:207, x2:478, y2:216}, '45053':{x:452, y:231, x2:458, y2:239}, '45055':{x:453, y:206, x2:459, y2:213}, '45057':{x:451, y:200, x2:457, y2:208}, '45059':{x:438, y:206, x2:445, y2:213}, '45061':{x:458, y:209, x2:463, y2:214}, '45063':{x:447, y:213, x2:454, y2:219}, '45065':{x:436, y:216, x2:441, y2:222}, '45067':{x:467, y:208, x2:472, y2:215}, '45069':{x:462, y:202, x2:467, y2:208}, '45071':{x:442, y:209, x2:449, y2:214}, '45073':{x:426, y:204, x2:432, y2:211}, '45075':{x:449, y:218, x2:462, y2:225}, '45077':{x:430, y:203, x2:435, y2:209}, '45079':{x:448, y:211, x2:457, y2:217}, '45081':{x:442, y:213, x2:447, y2:218}, '45083':{x:437, y:201, x2:443, y2:208}, '45085':{x:456, y:212, x2:463, y2:218}, '45087':{x:442, y:204, x2:447, y2:210}, '45089':{x:463, y:214, x2:471, y2:221}, '45091':{x:445, y:200, x2:452, y2:205}, '46003':{x:267, y:98, x2:272, y2:103}, '46005':{x:269, y:89, x2:276, y2:95}, '46007':{x:236, y:103, x2:245, y2:109}, '46009':{x:273, y:108, x2:278, y2:113}, '46011':{x:283, y:90, x2:289, y2:95}, '46013':{x:269, y:72, x2:276, y2:81}, '46015':{x:262, y:98, x2:267, y2:103}, '46017':{x:260, y:94, x2:266, y2:98}, '46019':{x:220, y:78, x2:230, y2:87}, '46021':{x:253, y:71, x2:260, y2:76}, '46023':{x:263, y:103, x2:274, y2:112}, '46025':{x:275, y:82, x2:280, y2:90}, '46027':{x:283, y:109, x2:286, y2:114}, '46029':{x:280, y:82, x2:285, y2:87}, '46031':{x:239, y:70, x2:255, y2:77}, '46033':{x:218, y:96, x2:231, y2:102}, '46035':{x:272, y:99, x2:275, y2:104}, '46037':{x:275, y:77, x2:282, y2:82}, '46039':{x:285, y:85, x2:289, y2:90}, '46041':{x:243, y:77, x2:255, y2:87}, '46043':{x:268, y:103, x2:274, y2:107}, '46045':{x:260, y:76, x2:269, y2:81}, '46047':{x:218, y:101, x2:228, y2:108}, '46049':{x:261, y:81, x2:269, y2:85}, '46051':{x:282, y:80, x2:289, y2:85}, '46053':{x:260, y:103, x2:270, y2:110}, '46055':{x:238, y:86, x2:247, y2:96}, '46057':{x:280, y:87, x2:285, y2:90}, '46059':{x:263, y:85, x2:269, y2:94}, '46061':{x:275, y:99, x2:279, y2:104}, '46063':{x:220, y:69, x2:231, y2:79}, '46065':{x:251, y:89, x2:260, y2:95}, '46067':{x:274, y:103, x2:280, y2:108}, '46069':{x:260, y:85, x2:263, y2:94}, '46071':{x:236, y:95, x2:247, y2:104}, '46073':{x:266, y:94, x2:272, y2:98}, '46075':{x:246, y:94, x2:253, y2:100}, '46077':{x:276, y:90, x2:283, y2:95}, '46079':{x:281, y:95, x2:285, y2:99}, '46081':{x:219, y:86, x2:225, y2:93}, '46083':{x:285, y:104, x2:289, y2:109}, '46085':{x:253, y:94, x2:263, y2:103}, '46087':{x:279, y:99, x2:283, y2:104}, '46089':{x:260, y:72, x2:269, y2:76}, '46091':{x:276, y:72, x2:282, y2:77}, '46093':{x:224, y:82, x2:239, y2:93}, '46095':{x:245, y:98, x2:254, y2:104}, '46097':{x:276, y:95, x2:281, y2:99}, '46099':{x:283, y:99, x2:289, y2:104}, '46101':{x:285, y:95, x2:289, y2:99}, '46103':{x:219, y:89, x2:238, y2:99}, '46105':{x:230, y:70, x2:239, y2:82}, '46107':{x:253, y:80, x2:261, y2:85}, '46109':{x:282, y:72, x2:289, y2:80}, '46111':{x:272, y:94, x2:276, y2:99}, '46113':{x:228, y:99, x2:236, y2:108}, '46115':{x:269, y:81, x2:276, y2:89}, '46117':{x:246, y:86, x2:258, y2:94}, '46119':{x:250, y:85, x2:260, y2:89}, '46121':{x:244, y:104, x2:254, y2:109}, '46123':{x:254, y:100, x2:260, y2:110}, '46125':{x:280, y:104, x2:285, y2:109}, '46127':{x:286, y:109, x2:289, y2:117}, '46129':{x:253, y:76, x2:260, y2:80}, '46135':{x:278, y:108, x2:283, y2:113}, '46137':{x:238, y:77, x2:247, y2:89}, '47001':{x:413, y:190, x2:418, y2:195}, '47003':{x:391, y:200, x2:395, y2:205}, '47005':{x:374, y:193, x2:377, y2:200}, '47007':{x:404, y:197, x2:408, y2:203}, '47009':{x:416, y:194, x2:422, y2:200}, '47011':{x:408, y:203, x2:411, y2:208}, '47013':{x:413, y:186, x2:418, y2:191}, '47015':{x:395, y:196, x2:398, y2:200}, '47017':{x:369, y:196, x2:375, y2:201}, '47019':{x:434, y:184, x2:438, y2:189}, '47021':{x:383, y:191, x2:387, y2:196}, '47023':{x:368, y:203, x2:373, y2:208}, '47025':{x:417, y:185, x2:423, y2:188}, '47027':{x:398, y:187, x2:404, y2:190}, '47029':{x:425, y:190, x2:429, y2:196}, '47031':{x:395, y:200, x2:399, y2:205}, '47033':{x:362, y:199, x2:367, y2:202}, '47035':{x:405, y:192, x2:411, y2:198}, '47037':{x:386, y:191, x2:391, y2:197}, '47039':{x:374, y:200, x2:377, y2:206}, '47041':{x:396, y:194, x2:401, y2:198}, '47043':{x:381, y:193, x2:385, y2:197}, '47045':{x:358, y:196, x2:364, y2:200}, '47047':{x:360, y:206, x2:365, y2:212}, '47049':{x:405, y:187, x2:410, y2:193}, '47051':{x:395, y:204, x2:400, y2:209}, '47053':{x:364, y:196, x2:369, y2:201}, '47055':{x:385, y:204, x2:390, y2:210}, '47057':{x:420, y:187, x2:425, y2:192}, '47059':{x:426, y:186, x2:432, y2:192}, '47061':{x:399, y:201, x2:402, y2:206}, '47063':{x:423, y:189, x2:427, y2:191}, '47065':{x:404, y:202, x2:409, y2:208}, '47067':{x:422, y:184, x2:429, y2:187}, '47069':{x:365, y:206, x2:369, y2:212}, '47071':{x:373, y:205, x2:378, y2:211}, '47073':{x:424, y:184, x2:431, y2:189}, '47075':{x:361, y:201, x2:366, y2:207}, '47077':{x:370, y:200, x2:375, y2:205}, '47079':{x:370, y:191, x2:376, y2:196}, '47081':{x:379, y:197, x2:385, y2:202}, '47083':{x:376, y:192, x2:381, y2:195}, '47085':{x:377, y:194, x2:381, y2:200}, '47087':{x:398, y:189, x2:402, y2:192}, '47089':{x:421, y:190, x2:425, y2:194}, '47091':{x:437, y:182, x2:440, y2:187}, '47093':{x:415, y:191, x2:421, y2:196}, '47095':{x:359, y:192, x2:362, y2:197}, '47097':{x:357, y:199, x2:362, y2:205}, '47099':{x:381, y:204, x2:385, y2:210}, '47101':{x:380, y:201, x2:384, y2:205}, '47103':{x:389, y:205, x2:395, y2:210}, '47105':{x:412, y:195, x2:416, y2:199}, '47107':{x:410, y:199, x2:414, y2:204}, '47109':{x:369, y:206, x2:373, y2:211}, '47111':{x:394, y:187, x2:398, y2:190}, '47113':{x:366, y:201, x2:370, y2:206}, '47115':{x:399, y:204, x2:404, y2:209}, '47117':{x:388, y:200, x2:392, y2:206}, '47119':{x:383, y:199, x2:389, y2:204}, '47121':{x:408, y:197, x2:412, y2:204}, '47123':{x:413, y:198, x2:419, y2:204}, '47125':{x:379, y:188, x2:385, y2:193}, '47127':{x:392, y:203, x2:395, y2:207}, '47129':{x:408, y:189, x2:414, y2:195}, '47131':{x:361, y:192, x2:367, y2:196}, '47133':{x:402, y:188, x2:406, y2:193}, '47135':{x:376, y:199, x2:380, y2:205}, '47137':{x:403, y:187, x2:409, y2:189}, '47139':{x:411, y:203, x2:416, y2:207}, '47141':{x:399, y:191, x2:406, y2:195}, '47143':{x:406, y:197, x2:411, y2:202}, '47145':{x:410, y:193, x2:415, y2:199}, '47147':{x:385, y:188, x2:390, y2:192}, '47149':{x:390, y:195, x2:395, y2:201}, '47151':{x:409, y:186, x2:414, y2:192}, '47153':{x:402, y:201, x2:406, y2:206}, '47155':{x:420, y:192, x2:426, y2:198}, '47157':{x:353, y:207, x2:360, y2:212}, '47159':{x:395, y:190, x2:399, y2:195}, '47161':{x:375, y:189, x2:380, y2:193}, '47163':{x:430, y:182, x2:439, y2:186}, '47165':{x:389, y:188, x2:394, y2:193}, '47167':{x:354, y:203, x2:362, y2:207}, '47169':{x:394, y:190, x2:397, y2:192}, '47171':{x:432, y:188, x2:435, y2:191}, '47173':{x:417, y:187, x2:420, y2:191}, '47175':{x:401, y:197, x2:405, y2:201}, '47177':{x:398, y:197, x2:402, y2:202}, '47179':{x:430, y:185, x2:434, y2:190}, '47181':{x:377, y:204, x2:382, y2:211}, '47183':{x:366, y:192, x2:371, y2:197}, '47185':{x:400, y:194, x2:405, y2:198}, '47187':{x:385, y:196, x2:391, y2:200}, '47189':{x:390, y:191, x2:397, y2:196}, '48001':{x:293, y:252, x2:302, y2:259}, '48003':{x:217, y:243, x2:226, y2:250}, '48005':{x:304, y:259, x2:314, y2:265}, '48007':{x:279, y:300, x2:285, y2:306}, '48009':{x:262, y:229, x2:268, y2:235}, '48011':{x:234, y:210, x2:240, y2:216}, '48013':{x:262, y:288, x2:270, y2:296}, '48015':{x:287, y:277, x2:293, y2:284}, '48017':{x:218, y:220, x2:224, y2:227}, '48019':{x:253, y:279, x2:262, y2:284}, '48021':{x:275, y:273, x2:282, y2:281}, '48023':{x:256, y:229, x2:262, y2:234}, '48025':{x:270, y:295, x2:278, y2:302}, '48027':{x:272, y:262, x2:282, y2:269}, '48029':{x:262, y:281, x2:270, y2:290}, '48031':{x:265, y:272, x2:270, y2:279}, '48033':{x:232, y:239, x2:238, y2:245}, '48035':{x:272, y:250, x2:279, y2:258}, '48037':{x:307, y:231, x2:315, y2:237}, '48039':{x:295, y:284, x2:304, y2:294}, '48041':{x:287, y:266, x2:293, y2:274}, '48043':{x:206, y:267, x2:223, y2:289}, '48045':{x:236, y:216, x2:241, y2:222}, '48047':{x:264, y:313, x2:271, y2:320}, '48049':{x:258, y:251, x2:264, y2:259}, '48051':{x:283, y:269, x2:290, y2:275}, '48053':{x:266, y:265, x2:273, y2:273}, '48055':{x:272, y:278, x2:279, y2:283}, '48057':{x:283, y:295, x2:290, y2:304}, '48059':{x:254, y:246, x2:260, y2:251}, '48061':{x:272, y:325, x2:280, y2:332}, '48063':{x:303, y:239, x2:307, y2:241}, '48065':{x:235, y:204, x2:241, y2:210}, '48067':{x:308, y:236, x2:315, y2:241}, '48069':{x:224, y:215, x2:230, y2:221}, '48071':{x:305, y:280, x2:312, y2:284}, '48073':{x:299, y:251, x2:306, y2:260}, '48075':{x:247, y:216, x2:251, y2:222}, '48077':{x:268, y:225, x2:273, y2:234}, '48079':{x:218, y:227, x2:223, y2:233}, '48081':{x:241, y:251, x2:247, y2:256}, '48083':{x:253, y:251, x2:259, y2:259}, '48085':{x:284, y:235, x2:290, y2:240}, '48087':{x:246, y:211, x2:252, y2:217}, '48089':{x:284, y:279, x2:291, y2:288}, '48091':{x:264, y:278, x2:271, y2:284}, '48093':{x:262, y:249, x2:270, y2:257}, '48095':{x:248, y:257, x2:254, y2:264}, '48097':{x:278, y:228, x2:283, y2:235}, '48099':{x:270, y:257, x2:278, y2:265}, '48101':{x:245, y:222, x2:251, y2:228}, '48103':{x:219, y:255, x2:224, y2:262}, '48105':{x:223, y:262, x2:239, y2:274}, '48107':{x:234, y:228, x2:240, y2:233}, '48109':{x:195, y:248, x2:206, y2:266}, '48111':{x:221, y:192, x2:230, y2:198}, '48113':{x:282, y:240, x2:288, y2:246}, '48115':{x:226, y:238, x2:232, y2:244}, '48117':{x:219, y:209, x2:229, y2:215}, '48119':{x:295, y:234, x2:301, y2:237}, '48121':{x:278, y:234, x2:285, y2:240}, '48123':{x:274, y:287, x2:282, y2:294}, '48125':{x:240, y:228, x2:245, y2:234}, '48127':{x:247, y:295, x2:255, y2:301}, '48129':{x:240, y:210, x2:246, y2:216}, '48131':{x:261, y:303, x2:268, y2:314}, '48133':{x:259, y:246, x2:267, y2:251}, '48135':{x:219, y:249, x2:225, y2:255}, '48137':{x:241, y:274, x2:252, y2:283}, '48139':{x:282, y:246, x2:289, y2:252}, '48141':{x:178, y:247, x2:185, y2:255}, '48143':{x:266, y:246, x2:273, y2:254}, '48145':{x:279, y:259, x2:287, y2:266}, '48147':{x:289, y:229, x2:295, y2:235}, '48149':{x:279, y:277, x2:287, y2:283}, '48151':{x:243, y:239, x2:249, y2:245}, '48153':{x:234, y:221, x2:240, y2:228}, '48155':{x:250, y:223, x2:257, y2:230}, '48157':{x:292, y:281, x2:300, y2:288}, '48159':{x:301, y:235, x2:303, y2:240}, '48161':{x:288, y:253, x2:296, y2:261}, '48163':{x:255, y:290, x2:262, y2:296}, '48165':{x:217, y:238, x2:227, y2:244}, '48167':{x:302, y:284, x2:312, y2:291}, '48169':{x:234, y:233, x2:240, y2:239}, '48171':{x:257, y:272, x2:265, y2:277}, '48173':{x:230, y:250, x2:236, y2:256}, '48175':{x:273, y:292, x2:280, y2:299}, '48177':{x:273, y:281, x2:281, y2:290}, '48179':{x:240, y:205, x2:246, y2:211}, '48181':{x:283, y:228, x2:289, y2:235}, '48183':{x:304, y:244, x2:309, y2:248}, '48185':{x:291, y:268, x2:296, y2:276}, '48187':{x:268, y:280, x2:275, y2:287}, '48189':{x:229, y:221, x2:235, y2:227}, '48191':{x:241, y:216, x2:247, y2:222}, '48193':{x:267, y:252, x2:274, y2:260}, '48195':{x:235, y:193, x2:241, y2:199}, '48197':{x:251, y:219, x2:257, y2:226}, '48199':{x:308, y:272, x2:315, y2:277}, '48201':{x:294, y:277, x2:305, y2:285}, '48203':{x:308, y:243, x2:315, y2:249}, '48205':{x:220, y:198, x2:230, y2:204}, '48207':{x:250, y:234, x2:256, y2:240}, '48209':{x:268, y:274, x2:274, y2:282}, '48211':{x:246, y:199, x2:252, y2:205}, '48213':{x:289, y:248, x2:300, y2:253}, '48215':{x:263, y:320, x2:272, y2:329}, '48217':{x:277, y:249, x2:286, y2:257}, '48219':{x:223, y:227, x2:229, y2:233}, '48221':{x:271, y:246, x2:276, y2:250}, '48223':{x:295, y:235, x2:301, y2:241}, '48225':{x:296, y:258, x2:305, y2:267}, '48227':{x:231, y:244, x2:237, y2:250}, '48229':{x:184, y:247, x2:196, y2:266}, '48231':{x:290, y:235, x2:295, y2:242}, '48233':{x:235, y:199, x2:241, y2:205}, '48235':{x:235, y:257, x2:242, y2:263}, '48237':{x:267, y:234, x2:273, y2:240}, '48239':{x:283, y:288, x2:290, y2:296}, '48241':{x:311, y:264, x2:317, y2:275}, '48243':{x:194, y:261, x2:211, y2:270}, '48245':{x:311, y:276, x2:318, y2:284}, '48247':{x:259, y:312, x2:265, y2:320}, '48249':{x:268, y:303, x2:273, y2:314}, '48251':{x:276, y:246, x2:282, y2:251}, '48253':{x:249, y:240, x2:255, y2:246}, '48255':{x:269, y:289, x2:276, y2:296}, '48257':{x:288, y:242, x2:293, y2:248}, '48259':{x:261, y:277, x2:266, y2:282}, '48261':{x:270, y:314, x2:278, y2:322}, '48263':{x:239, y:233, x2:245, y2:239}, '48265':{x:252, y:274, x2:261, y2:281}, '48267':{x:248, y:269, x2:257, y2:274}, '48269':{x:245, y:228, x2:251, y2:234}, '48271':{x:239, y:282, x2:247, y2:290}, '48273':{x:270, y:309, x2:279, y2:314}, '48275':{x:251, y:228, x2:256, y2:234}, '48277':{x:295, y:228, x2:301, y2:235}, '48279':{x:223, y:221, x2:229, y2:227}, '48281':{x:265, y:260, x2:272, y2:265}, '48283':{x:255, y:296, x2:262, y2:303}, '48285':{x:280, y:283, x2:287, y2:291}, '48287':{x:279, y:272, x2:286, y2:278}, '48289':{x:290, y:258, x2:297, y2:266}, '48291':{x:303, y:272, x2:311, y2:280}, '48293':{x:283, y:255, x2:291, y2:263}, '48295':{x:246, y:194, x2:252, y2:200}, '48297':{x:267, y:294, x2:273, y2:304}, '48299':{x:261, y:266, x2:267, y2:272}, '48301':{x:206, y:249, x2:214, y2:254}, '48303':{x:228, y:227, x2:234, y2:233}, '48305':{x:228, y:233, x2:234, y2:239}, '48307':{x:254, y:259, x2:260, y2:266}, '48309':{x:276, y:255, x2:285, y2:262}, '48311':{x:261, y:296, x2:267, y2:303}, '48313':{x:291, y:265, x2:298, y2:268}, '48315':{x:307, y:241, x2:315, y2:244}, '48317':{x:226, y:244, x2:232, y2:250}, '48319':{x:255, y:266, x2:261, y2:272}, '48321':{x:289, y:289, x2:299, y2:300}, '48323':{x:241, y:289, x2:247, y2:301}, '48325':{x:255, y:282, x2:262, y2:290}, '48327':{x:248, y:264, x2:255, y2:269}, '48329':{x:225, y:250, x2:231, y2:256}, '48331':{x:279, y:264, x2:287, y2:273}, '48333':{x:261, y:256, x2:269, y2:263}, '48335':{x:237, y:245, x2:243, y2:251}, '48337':{x:272, y:227, x2:278, y2:234}, '48339':{x:295, y:271, x2:304, y2:278}, '48341':{x:229, y:198, x2:235, y2:204}, '48343':{x:306, y:235, x2:308, y2:241}, '48345':{x:240, y:222, x2:246, y2:228}, '48347':{x:305, y:255, x2:312, y2:263}, '48349':{x:284, y:249, x2:293, y2:256}, '48351':{x:316, y:263, x2:320, y2:275}, '48353':{x:243, y:245, x2:249, y2:251}, '48355':{x:271, y:304, x2:282, y2:310}, '48357':{x:241, y:193, x2:247, y2:199}, '48359':{x:220, y:203, x2:229, y2:210}, '48361':{x:314, y:275, x2:319, y2:280}, '48363':{x:266, y:240, x2:271, y2:246}, '48365':{x:309, y:248, x2:315, y2:253}, '48367':{x:271, y:240, x2:277, y2:246}, '48369':{x:219, y:215, x2:225, y2:221}, '48371':{x:210, y:258, x2:230, y2:275}, '48373':{x:302, y:264, x2:310, y2:272}, '48375':{x:229, y:204, x2:235, y2:210}, '48377':{x:194, y:266, x2:207, y2:285}, '48379':{x:294, y:240, x2:297, y2:244}, '48381':{x:229, y:210, x2:235, y2:216}, '48383':{x:230, y:256, x2:236, y2:263}, '48385':{x:248, y:277, x2:253, y2:283}, '48387':{x:301, y:227, x2:307, y2:236}, '48389':{x:204, y:249, x2:217, y2:266}, '48391':{x:276, y:297, x2:285, y2:304}, '48393':{x:241, y:199, x2:247, y2:205}, '48395':{x:284, y:261, x2:291, y2:270}, '48397':{x:288, y:240, x2:290, y2:242}, '48399':{x:247, y:251, x2:253, y2:258}, '48401':{x:304, y:248, x2:310, y2:255}, '48403':{x:315, y:258, x2:320, y2:264}, '48405':{x:311, y:257, x2:316, y2:264}, '48407':{x:301, y:268, x2:306, y2:274}, '48409':{x:272, y:302, x2:280, y2:306}, '48411':{x:259, y:259, x2:267, y2:267}, '48413':{x:239, y:263, x2:248, y2:269}, '48415':{x:237, y:239, x2:243, y2:245}, '48417':{x:254, y:240, x2:260, y2:246}, '48419':{x:310, y:253, x2:317, y2:258}, '48421':{x:230, y:193, x2:236, y2:199}, '48423':{x:298, y:244, x2:305, y2:251}, '48425':{x:272, y:249, x2:276, y2:252}, '48427':{x:257, y:319, x2:267, y2:326}, '48429':{x:260, y:240, x2:266, y2:246}, '48431':{x:236, y:250, x2:241, y2:257}, '48433':{x:245, y:234, x2:251, y2:240}, '48435':{x:238, y:268, x2:248, y2:274}, '48437':{x:230, y:215, x2:236, y2:221}, '48439':{x:277, y:240, x2:282, y2:246}, '48441':{x:248, y:245, x2:254, y2:251}, '48443':{x:220, y:268, x2:231, y2:280}, '48445':{x:223, y:232, x2:228, y2:238}, '48447':{x:256, y:234, x2:262, y2:240}, '48449':{x:303, y:235, x2:306, y2:240}, '48451':{x:236, y:255, x2:248, y2:264}, '48453':{x:269, y:270, x2:278, y2:278}, '48455':{x:300, y:261, x2:306, y2:268}, '48457':{x:308, y:265, x2:315, y2:272}, '48459':{x:303, y:241, x2:308, y2:246}, '48461':{x:224, y:255, x2:230, y2:263}, '48463':{x:247, y:283, x2:255, y2:290}, '48465':{x:229, y:273, x2:241, y2:287}, '48467':{x:293, y:242, x2:299, y2:248}, '48469':{x:279, y:290, x2:286, y2:298}, '48471':{x:295, y:265, x2:301, y2:272}, '48473':{x:292, y:276, x2:296, y2:282}, '48475':{x:210, y:254, x2:219, y2:259}, '48477':{x:285, y:274, x2:292, y2:278}, '48479':{x:245, y:301, x2:261, y2:313}, '48481':{x:286, y:283, x2:295, y2:292}, '48483':{x:246, y:205, x2:252, y2:211}, '48485':{x:262, y:224, x2:268, y2:229}, '48487':{x:256, y:221, x2:262, y2:229}, '48489':{x:270, y:322, x2:279, y2:326}, '48491':{x:271, y:267, x2:281, y2:273}, '48493':{x:266, y:286, x2:274, y2:293}, '48495':{x:213, y:249, x2:219, y2:255}, '48497':{x:273, y:234, x2:279, y2:240}, '48499':{x:297, y:240, x2:303, y2:246}, '48501':{x:218, y:232, x2:223, y2:238}, '48503':{x:262, y:234, x2:268, y2:240}, '48505':{x:254, y:312, x2:259, y2:322}, '48507':{x:247, y:289, x2:255, y2:295}, '49001':{x:113, y:151, x2:130, y2:159}, '49003':{x:120, y:107, x2:141, y2:122}, '49005':{x:140, y:110, x2:146, y2:119}, '49007':{x:144, y:140, x2:157, y2:146}, '49009':{x:158, y:126, x2:168, y2:132}, '49011':{x:135, y:121, x2:142, y2:126}, '49013':{x:148, y:128, x2:158, y2:142}, '49015':{x:141, y:141, x2:155, y2:158}, '49017':{x:125, y:159, x2:154, y2:170}, '49019':{x:153, y:146, x2:165, y2:160}, '49021':{x:111, y:156, x2:128, y2:166}, '49023':{x:116, y:134, x2:140, y2:145}, '49025':{x:122, y:166, x2:145, y2:175}, '49027':{x:114, y:138, x2:136, y2:153}, '49029':{x:141, y:119, x2:147, y2:127}, '49031':{x:129, y:154, x2:136, y2:160}, '49033':{x:145, y:111, x2:151, y2:122}, '49035':{x:136, y:124, x2:143, y2:131}, '49037':{x:137, y:158, x2:163, y2:179}, '49039':{x:135, y:139, x2:144, y2:149}, '49041':{x:129, y:148, x2:142, y2:156}, '49043':{x:142, y:121, x2:158, y2:130}, '49045':{x:117, y:120, x2:137, y2:137}, '49047':{x:155, y:129, x2:167, y2:147}, '49049':{x:135, y:129, x2:148, y2:140}, '49051':{x:142, y:129, x2:149, y2:139}, '49053':{x:110, y:163, x2:123, y2:173}, '49055':{x:135, y:155, x2:154, y2:163}, '49057':{x:135, y:118, x2:146, y2:122}, '50001':{x:501, y:68, x2:507, y2:75}, '50003':{x:504, y:80, x2:509, y2:88}, '50005':{x:508, y:59, x2:514, y2:68}, '50007':{x:500, y:63, x2:505, y2:69}, '50009':{x:511, y:55, x2:516, y2:64}, '50011':{x:500, y:58, x2:506, y2:63}, '50013':{x:498, y:59, x2:500, y2:65}, '50015':{x:503, y:61, x2:508, y2:66}, '50017':{x:507, y:67, x2:513, y2:73}, '50019':{x:505, y:56, x2:512, y2:63}, '50021':{x:502, y:73, x2:508, y2:81}, '50023':{x:505, y:64, x2:510, y2:71}, '50025':{x:507, y:80, x2:514, y2:87}, '50027':{x:505, y:72, x2:512, y2:81}, '51001':{x:496, y:152, x2:501, y2:160}, '51003':{x:466, y:156, x2:472, y2:163}, '51005':{x:452, y:162, x2:458, y2:167}, '51007':{x:473, y:164, x2:479, y2:168}, '51009':{x:461, y:162, x2:466, y2:168}, '51011':{x:465, y:165, x2:470, y2:170}, '51013':{x:479, y:144, x2:481, y2:146}, '51015':{x:459, y:154, x2:466, y2:161}, '51017':{x:454, y:158, x2:459, y2:163}, '51019':{x:457, y:165, x2:463, y2:173}, '51021':{x:442, y:172, x2:447, y2:177}, '51023':{x:455, y:164, x2:460, y2:170}, '51025':{x:476, y:170, x2:481, y2:177}, '51027':{x:432, y:171, x2:438, y2:177}, '51029':{x:467, y:162, x2:472, y2:167}, '51031':{x:462, y:167, x2:468, y2:173}, '51033':{x:478, y:154, x2:483, y2:159}, '51035':{x:446, y:176, x2:452, y2:181}, '51036':{x:483, y:163, x2:487, y2:166}, '51037':{x:467, y:169, x2:472, y2:176}, '51041':{x:477, y:163, x2:483, y2:167}, '51043':{x:470, y:142, x2:473, y2:145}, '51045':{x:451, y:166, x2:455, y2:171}, '51047':{x:470, y:149, x2:477, y2:154}, '51049':{x:471, y:162, x2:474, y2:167}, '51051':{x:430, y:174, x2:435, y2:179}, '51053':{x:478, y:167, x2:482, y2:172}, '51057':{x:482, y:154, x2:488, y2:159}, '51059':{x:477, y:143, x2:482, y2:148}, '51061':{x:471, y:145, x2:477, y2:152}, '51063':{x:450, y:173, x2:455, y2:179}, '51065':{x:470, y:159, x2:474, y2:162}, '51067':{x:454, y:171, x2:460, y2:177}, '51069':{x:466, y:140, x2:471, y2:146}, '51071':{x:446, y:169, x2:451, y2:174}, '51073':{x:488, y:160, x2:492, y2:165}, '51075':{x:473, y:159, x2:479, y2:163}, '51077':{x:440, y:179, x2:449, y2:182}, '51079':{x:467, y:153, x2:471, y2:156}, '51081':{x:480, y:171, x2:485, y2:176}, '51083':{x:465, y:172, x2:471, y2:179}, '51085':{x:477, y:157, x2:484, y2:162}, '51087':{x:478, y:161, x2:483, y2:164}, '51089':{x:456, y:176, x2:460, y2:180}, '51091':{x:455, y:153, x2:460, y2:158}, '51093':{x:488, y:166, x2:492, y2:173}, '51095':{x:487, y:162, x2:490, y2:166}, '51097':{x:482, y:157, x2:489, y2:163}, '51099':{x:480, y:152, x2:483, y2:154}, '51101':{x:481, y:158, x2:487, y2:162}, '51103':{x:488, y:157, x2:492, y2:160}, '51105':{x:420, y:180, x2:429, y2:185}, '51107':{x:472, y:141, x2:478, y2:146}, '51109':{x:471, y:156, x2:477, y2:161}, '51111':{x:472, y:170, x2:477, y2:174}, '51113':{x:468, y:151, x2:472, y2:155}, '51115':{x:491, y:161, x2:493, y2:163}, '51117':{x:470, y:173, x2:477, y2:178}, '51119':{x:487, y:158, x2:492, y2:161}, '51121':{x:450, y:170, x2:454, y2:175}, '51125':{x:463, y:159, x2:468, y2:165}, '51127':{x:483, y:161, x2:488, y2:164}, '51131':{x:495, y:159, x2:499, y2:165}, '51133':{x:488, y:155, x2:492, y2:159}, '51135':{x:473, y:167, x2:478, y2:171}, '51137':{x:470, y:153, x2:476, y2:157}, '51139':{x:466, y:148, x2:469, y2:154}, '51141':{x:451, y:176, x2:457, y2:181}, '51143':{x:460, y:171, x2:465, y2:180}, '51145':{x:474, y:162, x2:479, y2:165}, '51147':{x:469, y:167, x2:474, y2:171}, '51149':{x:482, y:165, x2:486, y2:170}, '51153':{x:475, y:145, x2:480, y2:150}, '51155':{x:447, y:172, x2:451, y2:177}, '51157':{x:469, y:147, x2:473, y2:152}, '51159':{x:484, y:154, x2:489, y2:158}, '51161':{x:453, y:169, x2:457, y2:173}, '51163':{x:458, y:160, x2:463, y2:167}, '51165':{x:461, y:150, x2:468, y2:157}, '51167':{x:432, y:176, x2:438, y2:182}, '51169':{x:427, y:180, x2:434, y2:184}, '51171':{x:464, y:145, x2:469, y2:151}, '51173':{x:438, y:177, x2:444, y2:182}, '51175':{x:483, y:168, x2:488, y2:175}, '51177':{x:474, y:153, x2:480, y2:157}, '51179':{x:477, y:150, x2:480, y2:154}, '51181':{x:485, y:165, x2:490, y2:169}, '51183':{x:481, y:168, x2:487, y2:173}, '51185':{x:437, y:172, x2:443, y2:178}, '51187':{x:468, y:145, x2:472, y2:149}, '51191':{x:433, y:178, x2:441, y2:183}, '51193':{x:483, y:152, x2:489, y2:156}, '51195':{x:427, y:176, x2:433, y2:181}, '51197':{x:442, y:175, x2:449, y2:180}, '51199':{x:488, y:163, x2:492, y2:166}, '51510':{x:480, y:145, x2:481, y2:146}, '51515':{x:460, y:169, x2:461, y2:170}, '51520':{x:434, y:182, x2:436, y2:183}, '51530':{x:460, y:163, x2:461, y2:164}, '51540':{x:469, y:158, x2:470, y2:159}, '51550':{x:493, y:169, x2:497, y2:173}, '51570':{x:481, y:166, x2:482, y2:167}, '51580':{x:454, y:164, x2:455, y2:165}, '51590':{x:462, y:178, x2:464, y2:179}, '51595':{x:481, y:173, x2:482, y2:174}, '51600':{x:478, y:146, x2:479, y2:146}, '51610':{x:479, y:145, x2:480, y2:146}, '51620':{x:487, y:172, x2:488, y2:173}, '51630':{x:478, y:153, x2:479, y2:153}, '51640':{x:447, y:180, x2:448, y2:181}, '51650':{x:492, y:166, x2:494, y2:168}, '51660':{x:464, y:153, x2:465, y2:155}, '51670':{x:482, y:165, x2:483, y2:166}, '51678':{x:460, y:163, x2:460, y2:164}, '51680':{x:463, y:167, x2:465, y2:169}, '51683':{x:477, y:147, x2:477, y2:148}, '51685':{x:477, y:147, x2:478, y2:147}, '51690':{x:458, y:178, x2:459, y2:179}, '51700':{x:490, y:165, x2:493, y2:168}, '51710':{x:493, y:168, x2:495, y2:170}, '51720':{x:429, y:179, x2:430, y2:180}, '51730':{x:481, y:166, x2:483, y2:167}, '51735':{x:492, y:165, x2:493, y2:166}, '51740':{x:493, y:168, x2:494, y2:170}, '51750':{x:450, y:173, x2:451, y2:174}, '51760':{x:479, y:162, x2:481, y2:164}, '51770':{x:455, y:170, x2:457, y2:172}, '51775':{x:455, y:170, x2:456, y2:171}, '51790':{x:463, y:157, x2:464, y2:158}, '51800':{x:488, y:169, x2:493, y2:174}, '51810':{x:495, y:168, x2:499, y2:173}, '51820':{x:464, y:158, x2:465, y2:159}, '51830':{x:488, y:164, x2:489, y2:165}, '51840':{x:469, y:143, x2:470, y2:144}, '53001':{x:88, y:31, x2:101, y2:39}, '53003':{x:102, y:44, x2:107, y2:51}, '53005':{x:80, y:36, x2:89, y2:47}, '53007':{x:76, y:11, x2:87, y2:28}, '53009':{x:47, y:3, x2:62, y2:14}, '53011':{x:55, y:38, x2:61, y2:45}, '53013':{x:96, y:41, x2:102, y2:49}, '53015':{x:53, y:32, x2:62, y2:40}, '53017':{x:82, y:19, x2:95, y2:29}, '53019':{x:96, y:10, x2:104, y2:25}, '53021':{x:87, y:36, x2:97, y2:44}, '53023':{x:100, y:40, x2:105, y2:50}, '53025':{x:82, y:22, x2:95, y2:37}, '53027':{x:47, y:15, x2:56, y2:27}, '53029':{x:64, y:8, x2:66, y2:15}, '53031':{x:47, y:10, x2:64, y2:17}, '53033':{x:63, y:17, x2:76, y2:28}, '53035':{x:59, y:14, x2:65, y2:21}, '53037':{x:71, y:22, x2:84, y2:35}, '53039':{x:65, y:40, x2:81, y2:47}, '53041':{x:52, y:26, x2:70, y2:36}, '53043':{x:93, y:22, x2:104, y2:33}, '53045':{x:54, y:16, x2:61, y2:24}, '53047':{x:82, y:5, x2:99, y2:22}, '53049':{x:46, y:25, x2:53, y2:32}, '53051':{x:108, y:12, x2:114, y2:25}, '53053':{x:60, y:20, x2:71, y2:31}, '53055':{x:61, y:4, x2:65, y2:8}, '53057':{x:67, y:6, x2:82, y2:14}, '53059':{x:59, y:34, x2:68, y2:45}, '53061':{x:65, y:10, x2:79, y2:20}, '53063':{x:103, y:24, x2:111, y2:35}, '53065':{x:100, y:11, x2:111, y2:27}, '53067':{x:55, y:23, x2:63, y2:30}, '53069':{x:49, y:31, x2:53, y2:34}, '53071':{x:89, y:40, x2:98, y2:49}, '53073':{x:64, y:0, x2:83, y2:10}, '53075':{x:97, y:33, x2:109, y2:45}, '53077':{x:67, y:28, x2:83, y2:44}, '54001':{x:449, y:145, x2:453, y2:150}, '54003':{x:468, y:137, x2:472, y2:142}, '54005':{x:434, y:161, x2:440, y2:167}, '54007':{x:443, y:151, x2:448, y2:157}, '54009':{x:443, y:132, x2:444, y2:135}, '54011':{x:428, y:157, x2:433, y2:162}, '54013':{x:440, y:150, x2:443, y2:155}, '54015':{x:440, y:155, x2:445, y2:160}, '54017':{x:443, y:144, x2:446, y2:149}, '54019':{x:441, y:160, x2:446, y2:165}, '54021':{x:442, y:149, x2:446, y2:154}, '54023':{x:457, y:143, x2:461, y2:150}, '54025':{x:445, y:159, x2:454, y2:166}, '54027':{x:461, y:140, x2:467, y2:145}, '54029':{x:442, y:129, x2:444, y2:132}, '54031':{x:461, y:144, x2:466, y2:150}, '54033':{x:446, y:144, x2:450, y2:148}, '54035':{x:433, y:150, x2:438, y2:156}, '54037':{x:471, y:139, x2:474, y2:143}, '54039':{x:434, y:156, x2:441, y2:164}, '54041':{x:445, y:148, x2:449, y2:153}, '54043':{x:431, y:160, x2:435, y2:166}, '54045':{x:432, y:164, x2:439, y2:169}, '54047':{x:435, y:170, x2:442, y2:174}, '54049':{x:446, y:141, x2:452, y2:144}, '54051':{x:442, y:137, x2:445, y2:141}, '54053':{x:431, y:152, x2:435, y2:159}, '54055':{x:442, y:169, x2:447, y2:173}, '54057':{x:458, y:139, x2:464, y2:144}, '54059':{x:430, y:165, x2:437, y2:171}, '54061':{x:446, y:139, x2:453, y2:143}, '54063':{x:447, y:166, x2:453, y2:171}, '54065':{x:466, y:137, x2:470, y2:141}, '54067':{x:441, y:156, x2:449, y2:162}, '54069':{x:443, y:135, x2:445, y2:137}, '54071':{x:456, y:148, x2:462, y2:155}, '54073':{x:438, y:145, x2:441, y2:147}, '54075':{x:450, y:152, x2:456, y2:161}, '54077':{x:452, y:139, x2:457, y2:145}, '54079':{x:432, y:156, x2:436, y2:160}, '54081':{x:440, y:164, x2:446, y2:170}, '54083':{x:450, y:147, x2:458, y2:157}, '54085':{x:439, y:146, x2:444, y2:150}, '54087':{x:437, y:152, x2:442, y2:157}, '54089':{x:444, y:165, x2:448, y2:170}, '54091':{x:449, y:143, x2:452, y2:146}, '54093':{x:453, y:145, x2:459, y2:148}, '54095':{x:440, y:143, x2:445, y2:146}, '54097':{x:448, y:148, x2:451, y2:153}, '54099':{x:427, y:160, x2:432, y2:167}, '54101':{x:446, y:153, x2:451, y2:159}, '54103':{x:441, y:140, x2:447, y2:144}, '54105':{x:436, y:148, x2:441, y2:152}, '54107':{x:434, y:146, x2:439, y2:151}, '54109':{x:437, y:167, x2:443, y2:171}, '55001':{x:349, y:92, x2:353, y2:100}, '55003':{x:339, y:62, x2:345, y2:70}, '55005':{x:328, y:75, x2:334, y2:81}, '55007':{x:333, y:58, x2:340, y2:68}, '55009':{x:365, y:85, x2:369, y2:91}, '55011':{x:330, y:89, x2:335, y2:96}, '55013':{x:322, y:69, x2:329, y2:76}, '55015':{x:364, y:91, x2:367, y2:96}, '55017':{x:333, y:79, x2:340, y2:85}, '55019':{x:340, y:82, x2:346, y2:90}, '55021':{x:351, y:100, x2:359, y2:104}, '55023':{x:338, y:103, x2:344, y2:109}, '55025':{x:351, y:104, x2:359, y2:110}, '55027':{x:359, y:99, x2:364, y2:105}, '55029':{x:369, y:77, x2:375, y2:85}, '55031':{x:327, y:61, x2:333, y2:69}, '55033':{x:328, y:81, x2:333, y2:88}, '55035':{x:333, y:85, x2:340, y2:89}, '55037':{x:359, y:69, x2:365, y2:72}, '55039':{x:360, y:95, x2:367, y2:100}, '55041':{x:356, y:68, x2:362, y2:77}, '55043':{x:339, y:106, x2:346, y2:115}, '55045':{x:351, y:110, x2:356, y2:115}, '55047':{x:356, y:95, x2:360, y2:100}, '55049':{x:346, y:106, x2:352, y2:111}, '55051':{x:342, y:63, x2:348, y2:70}, '55053':{x:338, y:88, x2:346, y2:95}, '55055':{x:359, y:105, x2:364, y2:110}, '55057':{x:346, y:92, x2:351, y2:100}, '55059':{x:366, y:111, x2:371, y2:114}, '55061':{x:369, y:85, x2:373, y2:90}, '55063':{x:336, y:95, x2:341, y2:100}, '55065':{x:346, y:111, x2:352, y2:115}, '55067':{x:353, y:76, x2:361, y2:82}, '55069':{x:347, y:75, x2:353, y2:81}, '55071':{x:367, y:90, x2:372, y2:96}, '55073':{x:345, y:81, x2:356, y2:87}, '55075':{x:362, y:71, x2:370, y2:81}, '55077':{x:353, y:95, x2:357, y2:100}, '55078':{x:357, y:80, x2:362, y2:84}, '55079':{x:368, y:104, x2:370, y2:109}, '55081':{x:340, y:94, x2:346, y2:100}, '55083':{x:360, y:77, x2:369, y2:86}, '55085':{x:347, y:70, x2:357, y2:76}, '55087':{x:360, y:87, x2:366, y2:92}, '55089':{x:368, y:100, x2:370, y2:105}, '55091':{x:327, y:88, x2:333, y2:91}, '55093':{x:323, y:85, x2:329, y2:90}, '55095':{x:322, y:74, x2:329, y2:81}, '55097':{x:350, y:86, x2:356, y2:92}, '55099':{x:341, y:70, x2:348, y2:78}, '55101':{x:366, y:109, x2:371, y2:112}, '55103':{x:343, y:101, x2:348, y2:107}, '55105':{x:356, y:110, x2:362, y2:114}, '55107':{x:334, y:75, x2:342, y2:80}, '55109':{x:323, y:81, x2:329, y2:86}, '55111':{x:346, y:100, x2:353, y2:106}, '55113':{x:333, y:68, x2:342, y2:75}, '55115':{x:355, y:82, x2:365, y2:87}, '55117':{x:366, y:95, x2:371, y2:100}, '55119':{x:340, y:78, x2:348, y2:83}, '55121':{x:335, y:88, x2:338, y2:96}, '55123':{x:338, y:99, x2:347, y2:104}, '55125':{x:347, y:66, x2:357, y2:71}, '55127':{x:361, y:109, x2:366, y2:114}, '55129':{x:329, y:68, x2:334, y2:75}, '55131':{x:364, y:100, x2:368, y2:105}, '55133':{x:363, y:105, x2:368, y2:109}, '55135':{x:356, y:86, x2:361, y2:92}, '55137':{x:353, y:92, x2:359, y2:95}, '55139':{x:359, y:91, x2:364, y2:96}, '55141':{x:346, y:87, x2:351, y2:92}, '56001':{x:194, y:113, x2:206, y2:132}, '56003':{x:178, y:77, x2:191, y2:89}, '56005':{x:200, y:80, x2:211, y2:100}, '56007':{x:178, y:111, x2:198, y2:131}, '56009':{x:198, y:99, x2:210, y2:115}, '56011':{x:210, y:80, x2:220, y2:92}, '56013':{x:163, y:88, x2:186, y2:113}, '56015':{x:211, y:112, x2:217, y2:126}, '56017':{x:170, y:88, x2:186, y2:97}, '56019':{x:189, y:84, x2:202, y2:99}, '56021':{x:204, y:123, x2:216, y2:133}, '56023':{x:150, y:95, x2:160, y2:119}, '56025':{x:184, y:97, x2:200, y2:113}, '56027':{x:210, y:100, x2:218, y2:112}, '56029':{x:156, y:73, x2:179, y2:91}, '56031':{x:205, y:111, x2:212, y2:124}, '56033':{x:185, y:77, x2:202, y2:85}, '56035':{x:156, y:94, x2:170, y2:111}, '56037':{x:158, y:110, x2:184, y2:129}, '56039':{x:153, y:78, x2:164, y2:97}, '56041':{x:149, y:117, x2:159, y2:126}, '56043':{x:178, y:87, x2:191, y2:98}, '56045':{x:209, y:91, x2:219, y2:100}, '02185':{x:51, y:256, x2:98, y2:272}, '02188':{x:53, y:271, x2:75, y2:286}, '02130':{x:141, y:317, x2:144, y2:321}, '02201':{x:135, y:315, x2:146, y2:325}, '02280':{x:132, y:312, x2:142, y2:321}, '02220':{x:125, y:312, x2:132, y2:320}, '02100':{x:122, y:304, x2:128, y2:311}, '02110':{x:126, y:306, x2:132, y2:311}, '02232':{x:119, y:303, x2:136, y2:316}, '02282':{x:103, y:304, x2:120, y2:310}, '02016':{x:2, y:325, x2:44, y2:350}, '02013':{x:44, y:330, x2:66, y2:343}, '02150':{x:72, y:319, x2:84, y2:335}, '02060':{x:70, y:319, x2:72, y2:321}, '02070':{x:59, y:308, x2:73, y2:322}, '02164':{x:63, y:308, x2:79, y2:336}, '02122':{x:76, y:305, x2:91, y2:320}, '02020':{x:87, y:304, x2:91, y2:308}, '02261':{x:90, y:293, x2:109, y2:312}, '02170':{x:79, y:293, x2:94, y2:306}, '02240':{x:91, y:278, x2:107, y2:298}, '02090':{x:87, y:283, x2:97, y2:289}, '02068':{x:79, y:289, x2:92, y2:299}, '02050':{x:30, y:301, x2:80, y2:321}, '02270':{x:48, y:297, x2:62, y2:308}, '02180':{x:36, y:280, x2:64, y2:298}, '02290':{x:60, y:265, x2:102, y2:304}, '01069':{x:407, y:255, x2:415, y2:259}, '01067':{x:409, y:249, x2:413, y2:255}, '01061':{x:401, y:257, x2:409, y2:260}, '01045':{x:405, y:251, x2:410, y2:257}, '01031':{x:401, y:252, x2:406, y2:258}, '01039':{x:395, y:254, x2:402, y2:261}, '01097':{x:377, y:260, x2:383, y2:271}, '01003':{x:382, y:258, x2:389, y2:272}, '01053':{x:386, y:258, x2:396, y2:262}, '01035':{x:388, y:251, x2:396, y2:258}, '01129':{x:376, y:253, x2:383, y2:261}, '01023':{x:376, y:245, x2:381, y2:254}, '01025':{x:380, y:249, x2:386, y2:260}, '01099':{x:384, y:250, x2:393, y2:259}, '01131':{x:384, y:245, x2:393, y2:251}, '01013':{x:393, y:248, x2:398, y2:254}, '01041':{x:397, y:247, x2:401, y2:255}, '01109':{x:400, y:246, x2:406, y2:252}, '01011':{x:402, y:244, x2:409, y2:248}, '01087':{x:402, y:239, x2:408, y2:244}, '01085':{x:392, y:243, x2:398, y2:249}, '01101':{x:397, y:241, x2:403, y2:248}, '01051':{x:397, y:237, x2:403, y2:242}, '01001':{x:392, y:239, x2:397, y2:244}, '01047':{x:386, y:239, x2:393, y2:248}, '01091':{x:379, y:242, x2:386, y2:249}, '01119':{x:376, y:237, x2:382, y2:246}, '01105':{x:385, y:237, x2:390, y2:245}, '01021':{x:390, y:234, x2:397, y2:240}, '01037':{x:395, y:233, x2:401, y2:238}, '01123':{x:401, y:233, x2:406, y2:241}, '01027':{x:399, y:228, x2:405, y2:233}, '01121':{x:396, y:226, x2:402, y2:234}, '01117':{x:390, y:228, x2:397, y2:235}, '01007':{x:386, y:232, x2:392, y2:238}, '01065':{x:381, y:236, x2:386, y2:243}, '01063':{x:378, y:234, x2:383, y2:242}, '01107':{x:376, y:230, x2:381, y2:237}, '01125':{x:381, y:228, x2:389, y2:236}, '01073':{x:386, y:224, x2:395, y2:232}, '01127':{x:382, y:223, x2:390, y2:229}, '01075':{x:376, y:223, x2:380, y2:230}, '01057':{x:379, y:224, x2:385, y2:230}, '01059':{x:376, y:216, x2:383, y2:219}, '01093':{x:376, y:219, x2:382, y2:224}, '01133':{x:382, y:219, x2:388, y2:223}, '01043':{x:387, y:218, x2:395, y2:224}, '01009':{x:390, y:219, x2:396, y2:225}, '01115':{x:394, y:222, x2:399, y2:230}, '01015':{x:399, y:222, x2:405, y2:227}, '01055':{x:396, y:219, x2:403, y2:224}, '01095':{x:393, y:214, x2:398, y2:221}, '01103':{x:387, y:214, x2:393, y2:219}, '01079':{x:383, y:213, x2:388, y2:219}, '01033':{x:376, y:212, x2:384, y2:216}, '01077':{x:375, y:210, x2:386, y2:214}, '01083':{x:385, y:210, x2:391, y2:215}, '01089':{x:390, y:209, x2:396, y2:216}, '01071':{x:395, y:208, x2:403, y2:215}, '01049':{x:398, y:210, x2:404, y2:219}, '01019':{x:401, y:214, x2:406, y2:222}, '01029':{x:402, y:221, x2:408, y2:228}, '01111':{x:404, y:227, x2:409, y2:233}, '01017':{x:405, y:232, x2:411, y2:237}, '01081':{x:405, y:237, x2:412, y2:241}, '01113':{x:408, y:239, x2:414, y2:245}, '01005':{x:406, y:244, x2:413, y2:252}, '05017':{x:342, y:231, x2:346, y2:239}, '05003':{x:335, y:234, x2:342, y2:239}, '05115':{x:322, y:204, x2:327, y2:212}, '05101':{x:319, y:199, x2:325, y2:204}, '05087':{x:315, y:197, x2:320, y2:204}, '05047':{x:314, y:204, x2:317, y2:211}, '05071':{x:317, y:204, x2:323, y2:209}, '05083':{x:313, y:208, x2:322, y2:214}, '05149':{x:317, y:210, x2:326, y2:217}, '05105':{x:322, y:212, x2:330, y2:217}, '05029':{x:325, y:207, x2:330, y2:213}, '05045':{x:329, y:209, x2:334, y2:214}, '05141':{x:326, y:203, x2:333, y2:209}, '05129':{x:325, y:199, x2:331, y2:204}, '05137':{x:331, y:199, x2:337, y2:204}, '05023':{x:333, y:204, x2:337, y2:209}, '05145':{x:334, y:206, x2:342, y2:213}, '05063':{x:337, y:201, x2:343, y2:206}, '05067':{x:340, y:201, x2:345, y2:208}, '05147':{x:341, y:207, x2:345, y2:214}, '05123':{x:344, y:210, x2:352, y2:215}, '05035':{x:351, y:206, x2:356, y2:214}, '05037':{x:345, y:207, x2:351, y2:211}, '05111':{x:345, y:203, x2:353, y2:207}, '05093':{x:353, y:199, x2:359, y2:207}, '05031':{x:345, y:199, x2:353, y2:204}, '05065':{x:333, y:197, x2:338, y2:202}, '05075':{x:341, y:197, x2:348, y2:201}, '05135':{x:338, y:194, x2:342, y2:201}, '05055':{x:347, y:196, x2:353, y2:200}, '05021':{x:347, y:193, x2:355, y2:197}, '05121':{x:341, y:193, x2:347, y2:198}, '05049':{x:333, y:193, x2:340, y2:197}, '05005':{x:329, y:194, x2:333, y2:201}, '05089':{x:326, y:194, x2:331, y2:200}, '05009':{x:321, y:194, x2:326, y2:199}, '05015':{x:315, y:194, x2:321, y2:199}, '05007':{x:308, y:194, x2:316, y2:200}, '05143':{x:308, y:198, x2:315, y2:204}, '05033':{x:309, y:204, x2:315, y2:209}, '05131':{x:310, y:208, x2:314, y2:215}, '05127':{x:310, y:213, x2:318, y2:218}, '05097':{x:315, y:217, x2:321, y2:222}, '05051':{x:321, y:217, x2:327, y2:222}, '05125':{x:324, y:215, x2:333, y2:221}, '05119':{x:328, y:213, x2:335, y2:220}, '05085':{x:334, y:212, x2:340, y2:220}, '05117':{x:338, y:212, x2:342, y2:220}, '05095':{x:342, y:213, x2:346, y2:221}, '05077':{x:345, y:214, x2:352, y2:217}, '05107':{x:345, y:217, x2:351, y2:224}, '05069':{x:333, y:220, x2:342, y2:225}, '05053':{x:329, y:220, x2:334, y2:226}, '05059':{x:321, y:220, x2:329, y2:225}, '05039':{x:326, y:225, x2:333, y2:229}, '05025':{x:331, y:225, x2:336, y2:230}, '05079':{x:336, y:224, x2:342, y2:229}, '05001':{x:339, y:219, x2:346, y2:227}, '05041':{x:341, y:224, x2:348, y2:232}, '05043':{x:336, y:229, x2:342, y2:234}, '05011':{x:332, y:230, x2:337, y2:237}, '05013':{x:328, y:229, x2:333, y2:236}, '05103':{x:324, y:229, x2:330, y2:235}, '05099':{x:320, y:227, x2:324, y2:234}, '05057':{x:315, y:227, x2:321, y2:234}, '05019':{x:320, y:222, x2:327, y2:229}, '05109':{x:315, y:222, x2:321, y2:227}, '05061':{x:312, y:222, x2:317, y2:230}, '05113':{x:310, y:217, x2:315, y2:224}, '05133':{x:310, y:224, x2:315, y2:230}, '05081':{x:310, y:228, x2:317, y2:233}, '05091':{x:314, y:232, x2:319, y2:239}, '05073':{x:317, y:233, x2:322, y2:239}, '05027':{x:321, y:234, x2:326, y2:239}, '05139':{x:326, y:235, x2:336, y2:239}, '04015':{x:99, y:171, x2:125, y2:207}, '04012':{x:94, y:205, x2:111, y2:221}, '04003':{x:135, y:236, x2:152, y2:252}, '04023':{x:125, y:243, x2:136, y2:249}, '04019':{x:106, y:229, x2:137, y2:247}, '04011':{x:149, y:220, x2:155, y2:238}, '04009':{x:137, y:221, x2:152, y2:238}, '04001':{x:145, y:178, x2:161, y2:223}, '04017':{x:137, y:176, x2:151, y2:222}, '04007':{x:127, y:208, x2:145, y2:228}, '04021':{x:119, y:220, x2:139, y2:234}, '04027':{x:91, y:215, x2:109, y2:235}, '04013':{x:107, y:210, x2:133, y2:231}, '04005':{x:114, y:173, x2:143, y2:211}, '04025':{x:110, y:191, x2:130, y2:214}, '06015':{x:28, y:83, x2:35, y2:93}, '06093':{x:31, y:85, x2:54, y2:101}, '06025':{x:77, y:212, x2:96, y2:224}, '06065':{x:65, y:201, x2:99, y2:215}, '06073':{x:64, y:207, x2:80, y2:222}, '06059':{x:60, y:201, x2:67, y2:209}, '06111':{x:48, y:185, x2:56, y2:197}, '06079':{x:33, y:169, x2:50, y2:185}, '06029':{x:44, y:172, x2:71, y2:191}, '06071':{x:64, y:178, x2:103, y2:207}, '06027':{x:64, y:154, x2:91, y2:183}, '06107':{x:51, y:163, x2:68, y2:178}, '06031':{x:44, y:165, x2:54, y2:174}, '06039':{x:45, y:149, x2:62, y2:160}, '06019':{x:41, y:152, x2:67, y2:170}, '06053':{x:30, y:154, x2:45, y2:172}, '06069':{x:34, y:154, x2:43, y2:166}, '06047':{x:38, y:148, x2:51, y2:158}, '06087':{x:28, y:148, x2:35, y2:154}, '06081':{x:28, y:142, x2:32, y2:150}, '06001':{x:31, y:140, x2:38, y2:147}, '06085':{x:30, y:146, x2:39, y2:155}, '06099':{x:38, y:141, x2:49, y2:152}, '06043':{x:49, y:147, x2:60, y2:155}, '06109':{x:47, y:139, x2:61, y2:150}, '06051':{x:58, y:137, x2:74, y2:157}, '06003':{x:55, y:133, x2:60, y2:142}, '06009':{x:45, y:138, x2:55, y2:145}, '06005':{x:45, y:136, x2:56, y2:140}, '06077':{x:37, y:138, x2:45, y2:147}, '06013':{x:30, y:138, x2:39, y2:143}, '06017':{x:45, y:130, x2:58, y2:137}, '06067':{x:36, y:131, x2:46, y2:140}, '06095':{x:31, y:133, x2:39, y2:139}, '06075':{x:29, y:141, x2:30, y2:142}, '06041':{x:25, y:133, x2:30, y2:140}, '06055':{x:31, y:128, x2:35, y2:137}, '06097':{x:22, y:126, x2:32, y2:137}, '06113':{x:34, y:127, x2:41, y2:137}, '06061':{x:42, y:126, x2:58, y2:133}, '06057':{x:45, y:124, x2:59, y2:129}, '06091':{x:49, y:120, x2:60, y2:126}, '06115':{x:42, y:122, x2:50, y2:129}, '06101':{x:39, y:123, x2:44, y2:132}, '06011':{x:32, y:120, x2:40, y2:128}, '06033':{x:28, y:117, x2:34, y2:129}, '06007':{x:40, y:114, x2:49, y2:124}, '06021':{x:32, y:114, x2:41, y2:122}, '06063':{x:47, y:110, x2:59, y2:123}, '06103':{x:32, y:108, x2:49, y2:117}, '06045':{x:21, y:109, x2:33, y2:127}, '06023':{x:20, y:91, x2:33, y2:110}, '06105':{x:27, y:96, x2:41, y2:112}, '06089':{x:32, y:98, x2:52, y2:111}, '06035':{x:49, y:101, x2:64, y2:123}, '06049':{x:51, y:91, x2:67, y2:105}, '08083':{x:160, y:171, x2:172, y2:180}, '08067':{x:167, y:172, x2:177, y2:181}, '08099':{x:225, y:169, x2:233, y2:178}, '08011':{x:219, y:169, x2:226, y2:177}, '08061':{x:218, y:164, x2:233, y2:170}, '08017':{x:222, y:159, x2:233, y2:165}, '08063':{x:222, y:152, x2:234, y2:160}, '08125':{x:226, y:141, x2:234, y2:153}, '08121':{x:217, y:141, x2:227, y2:152}, '08095':{x:229, y:137, x2:235, y2:142}, '08115':{x:229, y:134, x2:235, y2:138}, '08075':{x:220, y:133, x2:229, y2:141}, '08087':{x:214, y:139, x2:221, y2:146}, '08009':{x:221, y:177, x2:232, y2:186}, '08089':{x:212, y:169, x2:219, y2:177}, '08025':{x:212, y:165, x2:218, y2:171}, '08073':{x:213, y:152, x2:223, y2:166}, '08039':{x:208, y:151, x2:217, y2:161}, '08005':{x:204, y:148, x2:218, y2:152}, '08123':{x:205, y:132, x2:220, y2:146}, '08001':{x:205, y:145, x2:218, y2:149}, '08031':{x:204, y:147, x2:208, y2:150}, '08035':{x:201, y:150, x2:208, y2:157}, '08041':{x:204, y:156, x2:214, y2:165}, '08119':{x:200, y:156, x2:204, y2:162}, '08101':{x:202, y:164, x2:213, y2:175}, '08071':{x:200, y:174, x2:222, y2:185}, '08055':{x:197, y:171, x2:209, y2:180}, '08023':{x:194, y:175, x2:201, y2:184}, '08021':{x:185, y:177, x2:195, y2:183}, '08003':{x:192, y:173, x2:198, y2:178}, '08105':{x:185, y:171, x2:192, y2:178}, '08027':{x:195, y:167, x2:203, y2:172}, '08043':{x:193, y:161, x2:204, y2:168}, '08109':{x:183, y:163, x2:198, y2:174}, '08015':{x:188, y:156, x2:195, y2:164}, '08051':{x:177, y:152, x2:191, y2:167}, '08097':{x:181, y:151, x2:190, y2:156}, '08065':{x:189, y:152, x2:193, y2:156}, '08093':{x:192, y:150, x2:201, y2:162}, '08059':{x:200, y:146, x2:205, y2:156}, '08047':{x:198, y:145, x2:201, y2:148}, '08019':{x:196, y:146, x2:201, y2:150}, '08117':{x:191, y:145, x2:197, y2:152}, '08037':{x:184, y:144, x2:193, y2:152}, '08013':{x:199, y:141, x2:205, y2:146}, '08049':{x:189, y:138, x2:199, y2:148}, '08069':{x:195, y:131, x2:207, y2:142}, '08057':{x:188, y:130, x2:198, y2:140}, '08107':{x:182, y:130, x2:190, y2:144}, '08081':{x:166, y:127, x2:184, y2:140}, '08103':{x:165, y:137, x2:186, y2:146}, '08045':{x:165, y:141, x2:186, y2:151}, '08029':{x:170, y:152, x2:180, y2:159}, '08077':{x:163, y:148, x2:181, y2:161}, '08085':{x:163, y:158, x2:179, y2:166}, '08111':{x:172, y:168, x2:177, y2:173}, '08033':{x:161, y:168, x2:174, y2:173}, '08113':{x:162, y:164, x2:175, y2:171}, '08091':{x:172, y:163, x2:177, y2:169}, '08053':{x:177, y:166, x2:183, y2:176}, '08079':{x:181, y:169, x2:186, y2:177}, '08007':{x:176, y:176, x2:187, y2:182}, '08014':{x:204, y:145, x2:205, y2:146}, '09003':{x:511, y:95, x2:518, y2:101}, '09005':{x:506, y:96, x2:512, y2:104}, '09001':{x:507, y:102, x2:512, y2:111}, '09009':{x:509, y:101, x2:517, y2:107}, '09007':{x:514, y:100, x2:519, y2:105}, '09011':{x:517, y:98, x2:524, y2:104}, '09013':{x:515, y:94, x2:519, y2:100}, '09015':{x:518, y:94, x2:523, y2:99}, '06037':{x:52, y:188, x2:67, y2:214}, '06083':{x:37, y:181, x2:50, y2:196}},
	
	location_scale:0.4, 
	
	paths:{
		 '02185':"m62.7 259.3l.88-.88.66-.44.22.44-.44.22h.44l2.2-.66 1.98-2.43 1.76.88v.44l-.66.66v.66l.66-.22.44-1.1.44-.44.66.66.22.88.66.22.22-.44 1.1-.22h1.76l.22.22-.44.66v.22l1.32.22-.22.66h.88l1.1-.66 2.42-.22 1.54.44h.66l.66.22.22.22h.88l1.1-.22h1.32l1.54.44.44-.22.88-.66.22-.22.44-.44 1.54.22 3.52 1.1 1.1 3.53.66 2.2-9 2.2.44 2.42-1.76.44-4.63.88h-.22l-10.35 1.1h-2.42v-.44h-1.76v-.44h-1.76l-1.76.22h-1.32v-.44h-.66v.22h-1.98l-.44-.22h-.22v.22h-.88l-.22-.44h-1.1v.44h-.44l-3.09-.22v.88h-1.54l-1.32-.66-.66-.88.44-1.32.22-1.54 1.54.22 1.98-.22.66-.22 1.32-1.54.66-1.98 1.32-1.98.88-.88.66.22.88-.44 1.32-1.54",
		 '02188':"m74.4 278.7h-.44l-.88.44.22.44h-1.32v1.32l-.88.22v-.44l-.44-.44h-.88v.88h-.88v-.88h-1.76v1.98h-2.2v.88h-1.32v2.2h-.44v.44h-.44l-7.71-.22v-.88h-.22l-.22-.22v-.66l-.44-.22v-1.76l-.22-2.2h.88l.44.22-.44 1.54.22.88 3.96.44 1.1-1.1h.66l-.22-.44-.66-.44-.66-.44-.88-1.1-.44-.22-.22-.66.22-.22h.44l.66 1.54.88.88.44-.22-.44-.22-.66-.88.44-1.32.22.22v-.22l-.66-.44-1.1.22h-.88l-1.54-.66-.66-2.42-2.2-2.42h1.54v-.88l3.09.22h.44v-.44h1.1l.22.44h.88v-.22h.22l.44.22h1.98v-.22h.66v.44h1.32l1.76-.22h1.76v.44h1.76v.44h1.76v1.1h.44v.44l.88.88v1.32h.88l.44.44.22 1.32-.22.88",
		 '02130':"m140.7 317.9l.88-1.1 1.76 1.54.44 1.32-.22.66-.88.22-1.54-.44v-.44l.22-.44-.66-1.32m.66 2.2l.66.44.22.88-.66-.66-.22-.66",
		 '02201':"m139.6 319.2l.66.22v-.88l-.22-.22v-.88l.22-.44.66-.44.66-.88.22-.44-.66-.44.88-.22 1.32.66h.66l.22-.44.66.44v1.32l1.54 1.98v1.76l-.44 1.54-.66.22-.44-.22-1.1-1.54.22-.88-.88-1.54-1.54-1.1-.88 1.1-.44.22.44.22v1.54h-.66l-.66-.66h.22m-4.85-1.32l1.1-.44 3.09 1.76 1.32 1.54.88.44 1.1 1.98v.66l-.66.22-1.32-1.1-1.98-.66 1.1 1.54.44-.44.44.22.44 1.1h-.66l-2.64-1.76-.22-.44.88-.88-.66-.66h-.66l-1.1-.44.22-.22h.44l.22-.22-.66-.88-.22.66-.44.22-.22-.22.22-.66-.44-1.1v-.22m.22 2.2v.44l-.22-.22.22-.22m7.49 1.32l-.22-.88.88.22.22.66-.66.44-.22-.44m-6.39.22l.88-.44.44.22-.44 1.1-.88-.22v-.66m7.71-.22l.22.22v.44h-.66l.44-.66",
		 '02280':"m140 318.4l.22.22v.88l-.66-.22.22-.66-.44-1.76-.22.88.22.44-.22.44-1.1-.22-.66-.44v-.44l.44-.88-.44-1.54-1.32-.44-.66-.44-.22-.44-1.1.22h-.66l.22-.44h.66l.22-.88.44-.66.88-.22.66.66v.66l.88-.22.22.88.66.22.66.66.44-.22 1.76.44.66.44-.22.44-.66.88-.66.44-.22.44v.88m-7-2.86l-.66-.44.22-.44h1.54l.66-.44 2.42 1.32-.66.88h-.66v-.44l-1.1-.66v.44l.88.44.22.44-.22.44h-.66v.22l-.44.22-.66-1.32-.22-.22-.44-.22-.22-.22m.22 2.2l-1.1-.66-.44-.66.22-.66.44-.22.66.44h.66l.44.88-.44.22v.44l.22.66h.44v1.32l-.44-.44.22 1.1-.44-.22-.44-1.1v-.66h.44l-.44-.44m3.08-.88l.66-.44.44.88-.44.22h-.66v-.66m-3.97 2.86l-.22-.44h.22v.66-.22m1.54.88h.44l-.22.44-.44-.22.22-.22",
		 '02220':"m126.8 312.6l1.1.44.88-.44.66 1.1v.22l-.66.22-1.54-.66-.22.22.66.88-.22.66h-.44l-1.98-1.76.88-.22v-.88l.88.22m5.51 7v.22l-.44-.22-1.1-1.1v-.66l-.44.44-.22-.44-.66-.22-.44-1.32-.44-.44v-.44l-.44.22-.66-.44.44-1.32.88.44.88-.22.22.44-.44.22h.44l1.54 2.42.88 1.98h-.22l.22.44m-5.07-4.19l.22-.22.88.88v.66l-.44.22-.66-1.54",
		 '02100':"m126.1 306.9l-.22.22-.66-1.1-.66-.44v.22l1.1 1.76.88 1.32 1.1 1.76h-.88l-.66-.66-.22-.22.44-.44-.44-.44-1.1-.22.22-1.1-.88-.66h-1.98v-1.76l.88-1.1 1.76 1.32.66-.22.22.22h.88l.44.44.22-.22.44.66h.22l-1.76.66",
		 '02110':"m131.9 310.6v.44h-.44l-1.54-1.32-1.1.44-1.76-1.1-1.1-1.98.22-.22 1.76-.66.44.44.66.22 2.2.88v.44l1.1.66-.44 1.54v.22m-2.86.22h-.44l-.22-.66.22.22.22-.22 1.1-.22-.66.44-.22.22v.22",
		 '02232':"m124.8 305.4l-1.76-1.32.44-.66.88.22.66.44.44 1.1-.66.22m1.1 4.41l.22.22-1.1.66-.44-1.32-.66-.66v.44h-.22l-1.98-.44v.22h.88l1.32.44.88 1.32-1.32 1.32-.88-.44h-.44l-.66-.22-2.2-.88.88-.88 1.32-1.98.66-.22v-.44h1.98l.88.66-.22 1.1 1.1.22.44.44-.44.44m8.37 3.74h-.66l-.22.44-.22-1.1-1.1-1.1v-.44l-.22-.66v-.22l.44-1.54 3.52 2.86-.88.22-.44.66-.22.88m-5.07-3.08l.66-.44v.22l1.76 1.76h-.44l-.66-.88-.22.22 1.54 1.54.22.44-.44.66v.66l-.66 1.1-.66-.88v-1.32l-1.1-.88-.88-1.76-.88-1.1v-.22h.22l.66.66.22.66h.44v-.22l.22-.22m-2.42 2.2l-.88-.22v.88l-.88.22-.66-.22-.22-.66.22-1.1.88-.22.44-.44 2.42.44.22.44.22.66-.22.22-.44.22-1.1-.22",
		 '02282':"m109.6 305.4h1.1l.22-.44 1.32.22.44-.88 1.32-.44.22 1.32.44.22 1.1.22.44.66 3.3 1.76.66 1.54-.88.88v-.44l-.66-.44-4.85-1.1-.22-.22v-.44h.44v-.44l-.66-1.1-.22.66-.88.88-1.98.22-1.32-.66-2.86.22-3.08 1.1 1.1-2.86 2.86-.88h.44v.44l1.54-.44h.44l.22.44",
		 '02016':"m34.92 325.4l-.44.44-.22-.22v-.22h.66m1.1 3.52h.22l-.22.22-.44-.44.44.22m7.49 14.1l.88.88-.22.44-1.76 1.32-.66.22h-.66l-1.76.66-.66-.44 2.42-.88.22-1.76.22-.22 1.32-.22v.44l.22.22.22-.22.22-.44m-7.71 3.53l1.32-.88.22-.44.44-.22.66-.22.66.22-.44.88-.88.22-1.1 1.1-1.32.66-.66.22 1.1-1.1v-.44m-31.73 0l.22.22-.22.22-.22-.22.22-.22m2.21.22h.44l.44.88-.66.44-.44-.22-.22-1.1h.44m26.66 0v.44l-.22-.22.22-.22m-1.1.44h.22l-.22.22-.22-.22h.22m-13.66.66l-.22-.22.88-.44.44.66-.66.88h-1.32l-2.42-.44 2.2.22 1.1-.44.22-.22h-.22m-5.73-.44h.44v.44l-.22.22-.44-.22v-.44h.22m-3.3 0l.44.22-.66.88h-.44l-.66-.44 1.1-.22.22-.44m23.58 0l.22.22-.22.22-.88-.22.22-.22h.66m-21.59.88l.66.22-.22.44-2.2.22 1.1-1.54h.66v.22h-.22l-.22.44h.44m20.27-.44h.22v.22h-.22v-.22zm-1.54 0l.22.22-.22.44h-.66v-.44l.66-.22m-16.3.44l.22.22h-.22v-.22m-1.54.22h.66l.22.22-.66.22-.44-.22.22-.22m-9 0v.22l-.22.22.22-.44m24.89 0l.22.22-.22.22-.22-.22.22-.22m-3.75 0l.22.22v.22h-.88l.22-.22.44-.22m-3.97.44l.44.22 1.54.44h-1.76l-.88-.22-.66-.66.66.22h.66m-17.62-.22v.44h-.22l.22-.44",
		 '02013':"m63.78 335.3v.44l-.22-.44v-.44l-.44-.22-.22.44h-.44l-.22.44-1.1.88-1.98.66-.88-.22.44-1.1h-.66l-1.1 2.64-.88.44-.66-.22v-1.1l-.44-.22-.22.44.22.44.22.88-.88.22-.44-1.1-.66.22.44.88v1.32l-.66-.22-.88.22h-1.54l-.44.22-.66.66h-1.1l-.22-.66v-.44l.66-.22.44-.66 2.42-1.1h.66l.22 1.1h.44v-1.32l1.32-.44 1.99-2.2 1.32-1.1 1.32-.44.66.22.66.22h-.22v.44l.22.44.44-.22.22-.44v-.66l.66-1.54 1.32-1.1 2.64-1.76.22.22v.22l-.44.44h-.66v.44h-.88v.44h-.88v.88h.22v1.76l-.22.44h.88v.88m-1.98 1.32h.44v.44h-.44l-.22-.22.22-.22m-.66.66h.44v.44l-.44.66-.88-.22-.22-.88.22-.22h.44l.44.22m1.76.22l.22.88-1.1 1.32v-1.32l.22-.22.44.22.22-.88m1.1.22v1.1h-.44l.44-1.1m-6.17.66l.22.22h-.44l-.44-.44.22-.22.44.44m6.61.22l.22.44-.44.22v-.66h.22m-8.37.44v.44l-.22.22-.44-.44.66-.22m8.59.22l.22.22-.22.22v-.44m-10.36 2.2l.66.22v.22h-.66l-.22-.22.22-.22m-8.15.44h.22v.44l-.44.44-.22-.66.22-.22h.22m-.66.66l-.22.44h-.66l-.22-.44.44-.44.66.44m2.2.22h.22v.22h-.88l.66-.22m-.88.22l.22.22-.66-.22h.44",
		 '02150':"m72.2 326.7l.44-.66.66-.44.22-.22.22.22.22-.22.44-.66.88-.66-.22-1.76.88-.44 1.1-.44.66-.44v-1.1h.66l.66-.22-.22-.44h1.1l-.22-.66h.44l-.22.66-.44.44-.44.22-.44.66-.22 1.54-.44.66-.66.44-.44-.22-.66.22-.44.44-.44 1.1h-.44l-.66.88-.44.22-.22-.22v.44l-1.32.88v.22l.44-.22v.88h-1.1v-.44l.44-.22.22-.44m9.47-3.96l-.22.22-1.1-.44.88-1.32.88-1.54.66-.22-.22.88v.44l.88-.22.44.22.22.66-.22.44-1.76.66-.66-.44-.22.22.44.44m-2.64 2.64l.22.66.44.22-.44-.44-.22-1.76.44-.44 1.32-.22.44-.22h.66l-.22.66.22.22.88-.88.44-.22-.22.88.44.66h.44l-.44.88-1.11 1.1-1.1 1.32-.22.22-.22-.44.22-.44h-.22l-.66 1.54-.66.66-.66.22-.44-.66-.66-1.1-.22-.66-.44-.44.22-1.1.66-.66 1.1-.22v.66m-.22 4.85l.88.22-.22.22h-.88l-.22-.22.44-.22m-.88 0l.44.22-1.1.88v-.44l.66-.66m-2.86 3.74l.44.22v.88l-.88-.22v-.44l.44-.44",
		 '02060':"m70.6 319h1.76v1.32l-2.42.22.44-.66.22-.88",
		 '02070':"m70.2 319v.22l-2.64 1.32-.44-.22-.88-1.32-.22.22-.22.88.44 1.1-.66.44h-.44l-1.32-2.42-.44-.22-.22.66h-.22l-1.1-.88.22-.22-.22-.22-1.76 1.1v-.88h.44l.44-1.32.44-.44.22-1.32.44-.88h.66v-.88l.66-1.32.44-.88h.44l1.1-2.64h2.64v.44h.44l.44-.44v-.66h.88v.44h2.86v.44l.22 1.54.22 4.19h-.44v.66h-.88l-.44.44-.22.88h-.66l-.66.44.44 1.76m-11 .88v-.44h.66l-.66.44",
		 '02164':"m72.2 326.7l-.22.44-.44.22v.44h1.1l-2.42 1.76-.44-.22-.22.88-1.32.44v.22h.22l.22.44h-1.32l-.44.66.88.88-.88 1.1-2.86.66v.66l-.22.44v-1.32h-.88l.22-.44v-1.76h-.22v-.88h.88v-.44h.88v-.44h.66l.44-.44v-.22h.66l-.22-.88.44-.88 2.2-2.2.44-4.19.66-1.1 2.42-.22v-1.32h-1.76l-.22-.22-.22.44v-.22l-.44-1.76.66-.44h.66l.22-.88.44-.44h.88v-.66h.44l-.22-4.19-.22-1.54v-.44l3.52-.22 1.32-.22h1.32l.44 2.2h-.44l.22 1.76h-.44l.22.44v1.32h-.22v.44h-.44v.44l-.22.44-.22.22-.44.44-.22.88h-.66v.88l.22.22v.44l.22 1.54h.88v1.1l-.66.44-1.1.44-.88.44.22 1.76-.88.66-.44.66-.22.22-.22-.22-.22.22-.66.44-.44.66m-1.54 4.19l.44.22h-.88l.22-.22h.22",
		 '02122':"m77 316.8l.22-.88.44-.44.22-.22.22-.44v-.44h.44v-.44h.22v-1.32l-.22-.44h.44l-.22-1.76h.44l-.44-2.2v-.22l-.22-1.98v-.44h.22l.88-.22h.88l.44-.22 2.65-.22v.88h.66l.44.22-.44.44-1.1.88-.88 1.54-.88 2.42v1.1l-1.1 1.76-1.1.66-.66.88-.66.44-.22 1.32.22.44.22-.22.88-.22 1.1.88v.22h-.44l.22.66h-1.1l.22.44-.66.22h-1.54l-.22-1.54v-.44l-.22-.22v-.88h.66m6.39-1.32l1.54-1.1.44-.88h-.44l-.66.66-.44-.22-.44-.44.22-1.32.44-1.1.22-.88v-.88l-.44-.88.88-.44 1.32-1.32.44.44h.66l.66-.44.66.22h.88l.22.22.66.44h.44v.22l.22.88v.22l.22.22.22 1.98v.22l-1.76.22-.88.44v1.32l-1.54 1.32-.22-.22-.44.44-.44 1.1-1.98.66-.66-.44v-.66",
		 '02020':"m87.8 306.7l-1.1-.88.22-.22v-.22h.22l.44-.88.22-.22h.22l.22-.22h.22l.22.22 1.76-.44v.66l.22.66v.66l.22.22v.88h-.66v.44l.22.22h-.22l-.66-.44-.22-.22h-.88l-.66-.22",
		 '02261':"m90.9 306.5v-.44l-.22-.22v-.66l-.22-.66v-.66l1.76-.22 1.32-.22-.22-.22h.22l.44-.22-.44-2.42v-.22l-.44-1.1 1.1-.22.22-.22-.22-.66v-.22l-.66-2.86-.22-.66.88-.44.66-.22h.22l.44-.22h.66l.66.22h.22l3.75-.88.44.66.22 1.1v.66h.66l.22-.66h.88l1.1.66.44 1.54.44.22v.22l.22.88 1.76-.66 2.2 7.49h-.44l-1.54.44v-.44h-.44l-2.86.88-1.1 2.86-2.86-.88v-.66l-.88.44.44.44-1.76-.66-1.98 1.76-.44-.66.22-.66h.44l.88-.44.44-.44v-.44l-1.1.44h-.88l-.22-.22.88-.66.22-.22-.88.44-.22-.44-.22.22v-1.1l-1.32.66-.22.66-1.54.66h-.22l.22-1.32-.44.22-.22 1.1.66.22.66 1.54-.22.88.88.88-.44.66-1.54.22v-.22l-.22-1.98-.22-.22v-.22l-.22-.88v-.22h-.22l-.22-.22v-.44h.66v-.44m3.31-.44v.22h-.44l.44-.22m-.66 1.1l.44.22-.44.22v-.44m-1.32 0l.44.22-.22.22-.22-.22v-.22m1.1.66v2.2l-.66-.44.22-1.1.44-.66m1.54 1.76l-.44.66-.22 1.32-.88.44v-.88l1.1-1.76v-.44l.22-.22.66.22-.44.66",
		 '02170':"m88.5 304h-.22l-.22.22h-.22l-.22.22-.44.88h-.22v.22h-1.76l-.44.44-.44-.22h-.66v-.88l-2.65.22-.44.22h-.88v-.44l-.22-.22v-1.98l-.22-.22v-1.54l-.22-2.2 2.42-.22v-.44l5.29-3.52 3.08-.44v-.22l-.22-.44 2.42-.44 1.1-.22.22 1.54.22.66.66 2.86v.22l.22.66-.22.22-1.1.22.44 1.1v.22l.44 2.42-.44.22h-.22l.22.22-1.32.22-1.76.22-1.76.44-.22-.22",
		 '02240':"m94.8 293.7l-.66.22-.88.44-.22-1.54-1.1.22-.88-3.97 1.32-.44.44-.66.66-.44h.66l2.64-1.98h.88v-.22l.44-.66-.44-.66.22-.44.22-.44.66-.44.22-1.32h.22l.66-.66.66-.22.66-.88v-.66l.44-.66 5.51 19.2-1.76.66-.22-.88v-.22l-.44-.22-.44-1.54-1.1-.66h-.88l-.22.66h-.66v-.66l-.22-1.1-.44-.66-3.75.88h-.22l-.66-.22h-.66l-.44.22h-.22",
		 '02090':"m87.4 288v-.22l-.66-2.86h.22l2.2-.44.22-.44h.88l.44-.44.44-.66.44-.22.44.22v.44l.44.44h.22l.44.66.22.22 2.42-.88 1.1-.22-.22.44.22 1.54-2.64 1.98h-.66l-.66.44-.44.66-1.32.44-1.54.22-.66-.22h-.22l-.88-1.1h-.44",
		 '02068':"m86.7 294.6l-5.29 3.52v.44l-2.42.22.88-2.43v-.66l-.88-.22-.22-1.32 1.32-.22.44-.88-.22-.88.66-.66h.44l.66.22.88-1.76 3.3-.44 2.64-.44.66.22 1.54-.22.88 3.97-2.42.44.22.44v.22l-3.08.44",
		 '02050':"m78.5 306l.22 1.98v.22h-1.32l-1.32.22-3.52.22h-2.86v-.44h-.88v.66l-.44.44h-.44v-.44h-2.64l-1.1 2.64h-.44l-.44.88-.66 1.32v.88h-.66l-.44.88-.22 1.32-.44.44-.44 1.32h-.44v.88h-.88v.88l-.66.22-1.54-.22.44-.22.44.22.22-.88-.22-1.32-.44-.88.88-1.1-.44-1.32v-.22l-1.1-2.2-.44.88-1.55.88-1.54.22-.88-.44-.22-.66-.88-1.32-1.98-1.76 1.32-.88-.22-.66h-.44v-.22l.22-.22h1.32l1.1-.22 1.1-1.76 2.2-.44.22-.22.66-.22 1.32.44 1.98-.44.66-.66 1.1-.66-.22-.44h2.86v-.44h1.76v-.44l3.52-.22v.44h3.3l1.1-.22h1.98l.88-.22h.44v-.44l.88-.22v-.22l.22-.22h.44l.22-.44v1.54l.22.22v1.98l.22.22v.44l-.88.22h-.22v.44m-47.8 1.1l.22.66.22.44.88.44.22.22h-.88l-.22-.44-.66-.88.22-.44m16.1 3.75l.66-.22 1.1.88-.22 1.32-.22.44-1.1.44-2.2-1.1-.66-.66v-.44l.22-.22h1.32l.88-.66.22.22",
		 '02270':"m61.6 303.6l.22.44-1.1.66-.66.66-1.98.44-1.32-.44-.66.22-.22.22-2.2.44-1.1 1.76-1.1.22h-1.32v-.22l.44-.22.22-.44-.88-.44-.22.44-.66-.22-1.1-2.2.22-1.32 2.42-3.08 1.1-.88-.22-.66.44-1.1.88-1.1.88-.22 1.54 1.32.66-.22 1.1-1.1.44.22.88 1.32h2.65-.22l-.22.66-.22 1.76v1.76h.44l-.22.66v.44l.22.22h.88",
		 '02180':"m63.3 293.2v.88h-.44v.44l-.44.44h-.88l-.44.44v1.32h-.22v1.32h-2.65l-.88-1.32-.44-.22.66-.88.66.22h.88l1.1-.22.66-1.32.22-.66-.66-1.98-.44-.66v-.66h.44l.66-.44v-.66l-.88-.88-.44.66-1.76.44-.88.66-3.52-.22-1.76.44-2.42-.88-.44-.44-.22-.44.22-.66-.22-1.32.22-.22.22-.66-1.98-.88-1.32-.88v-.66l3.96-2.21.44.44 1.1.22v-.22l-.66-.44v-.44l3.08-1.1.22 2.2v1.76l.44.22v.66l.22.22h.22v.88l7.71.22h.44v-.44h.88v1.32h-.22v1.76h-.44v.88h-.44v3.52h.44v.44m-12.78-12.34l-.22.22v-.22h.22m-5.29 5.95l.44-.22.22.44-.44.22-.22-.44m-8.59 5.29l.22-.44v.66l1.32.88 1.1-.66.44.22.44.44v.66l1.1.88 1.76.44-.44.88-.88-.44-.66.44-.66-.22-1.32-1.54-.88-.44h-.44l-.88.44-.66-.44v-.44l.44-1.32m20.71 2.64v.44h-.66l.22-.44h.44",
		 '02290':"m78.8 301.4h-.22l-.22.22v.22l-.88.22v.44h-.44l-.88.22h-1.98l-1.1.22h-3.3v-.44l-3.52.22v.44h-1.76v.44h-3.74l-.22-.22v-.44l.22-.66h-.44v-1.76l.22-1.76.22-.66h.22v-1.32h.22v-1.32l.44-.44h.88l.44-.44v-.44h.44v-1.32h-.44v-3.52h.44v-.88h.44v-1.76h.22v-1.32h-.44v-2.2h1.32v-.88h2.2v-1.98h1.76v.88h.88v-.88h.88l.44.44v.44l.88-.22v-1.32h1.32l-.22-.44.88-.44h.44l.22-.88-.22-1.32-.44-.44h-.88v-1.32l-.88-.88v-.44h-.44v-1.1h.66l10.35-1.1h.22l4.63-.88 1.76-.44-.44-2.42 9-2.2 3.75 13-.44.66v.66l-.66.88-.66.22-.66.66h-.22l-.22 1.32-.66.44-.22.44-.22.44.44.66-.44.66v.22h-.88l-.22-1.54.22-.44-1.1.22-2.42.88-.22-.22-.44-.66h-.22l-.44-.44v-.44l-.44-.22-.44.22-.44.66-.44.44h-.88l-.22.44-2.2.44h-.22l.66 2.86v.22h.44l.88 1.1h.22l-2.64.44-3.3.44-.88 1.76-.66-.22h-.44l-.66.66.22.88-.44.88-1.32.22.22 1.32.88.22v.66l-.88 2.43.22 2.2-.22.44h-.22",
		 '01069':"m409.7 255.3l3.61-.33-.12.34-.08.33.15.91.11.26.1.05h.09l.08.02.52.57.08.15.12.26.32.93-5.33.65-.09-1.02-.18-1.58-1.09.19-1.37.14.39-.98.06-.05.26-.08h.19.17l.37.09.28.08.5.05.17-.001.7-.6-.05-.37",
		 '01067':"m409.2 251.4l-.12-1.12 2.18-.19.06-.1.17-.5.29-.36.06-.03h.06l.19.06.1.09 1.2 2.99-.14 2.75-3.61.33-.43-3.91",
		 '01061':"m405.7 257.3l.88-.08 1.37-.14 1.09-.19.18 1.58.09 1.02-.11.02-5.89.68-1.67.17-.33-2.54 4.4-.52",
		 '01045':"m405.6 251.8l3.61-.42.43 3.91.05.37-.7.6-.17.001-.5-.05-.28-.08-.37-.09h-.17-.19l-.26.08-.06.05-.39.98-.88.08-.56-5.41.44-.05",
		 '01031':"m405.2 251.9l.56 5.41-4.4.52-.34-3.18-.13-1.16.41-.04.13-.11-.13-1.03 3.89-.42",
		 '01039':"m397.6 253.9l1.08-.14 1.1-.13.2-.02.05.19.09.74.19.17.74-.06.34 3.18.33 2.54-2.21.22-3.31.32-.36-2.52-.43-4.25 2.21-.24",
		 '01097':"m381.9 260l.09.18.24 1.02.33 1.75-.47.87-.31 1.22-.02.27.19.45.24.46-.16-.06-.04.03-.51.54-.31 1.89-.97 1.87-.64-.21-.9-.02-.25.04-.12.04-.21.22-.57-4.69-.41-3.36-.19-1.49 1.12-.09 1.1-.35 2.24-.32.53-.28",
		 '01003':"m384 258.1l1.7.54.47 3.16-.25 1.73.14.25 1.12 1.22.35.24.06.02.19.03.37.19.5.31.14.22.04.15.02.21-.11 2.82-.15 1.41-.71.32-1.5.53-1.57.4-.42.07-1.38.09-.05-.07.57-.21 1.5-.96-1.98-4-.14-.2-.07-.05-.51-.19-.15-.05-.24-.46-.19-.45.02-.27.31-1.22.47-.87-.33-1.75-.24-1.02-.09-.18.26-.42 1.87-1.51",
		 '01053':"m395.8 258.4l.36 2.52-1.06.08-4.15.37-4.8.46-.47-3.16.64.17.11-.05.61-.43.69-.08 7.27-.69-.02.09-.001.56.001.12.04.05.09.08.5.001.18-.09",
		 '01035':"m395.4 254.1l.43 4.25-.18.09-.5-.001-.09-.08-.04-.05-.001-.12.001-.56.02-.09-7.27.69v-.07l.07-.18 1.19-1.69.67-.75.78-2.28.03-.23 1.12-1.01.92-.51.25-.12h.07l.14 1.54.58 1.09.29.22 1.51-.13",
		 '01129':"m375.9 253.6l4.1-.35.001.55.19.71.56.48.15.09.46.16.41.1.43.39.31 1.25.001.08-.03.42-.1.4-.22.23-.19.26-.15.52.27.74-.26.42-.53.28-2.24.32-1.1.35-1.12.09-.95-7.48",
		 '01023':"m375.8 245.7l5.31-.47-.5.07-.28.18-.15.16-.82 3.07.05.47.05.13.08.09.09.05.28.03.15 3.76-4.1.35-.26-2.53.07-4.32.03-1.05",
		 '01025':"m384.3 249.1l2 1.92-.17.21-.39 1.55.16 1.73.14 1.26-.08.39-.23.31-.13.08-.14-.02-.23-.18-.13.001-.12.05-1 .86-.19.47v.06l.03.13.04.08.18.12-1.87 1.51-.27-.74.15-.52.19-.26.22-.23.1-.4.03-.42-.001-.08-.31-1.25-.43-.39-.41-.1-.46-.16-.15-.09-.56-.48-.19-.71-.001-.55-.15-3.76 4.41-.39",
		 '01099':"m392.7 250.4l.11 1h-.07l-.25.12-.92.51-1.12 1.01-.03.23-.78 2.28-.67.75-1.19 1.69-.07.18v.07l-.69.08-.61.43-.11.05-.64-.17-1.7-.54-.18-.12-.04-.08-.03-.13v-.06l.19-.47 1-.86.12-.05.13-.001.23.18.14.02.13-.08.23-.31.08-.39-.14-1.26-.16-1.73.39-1.55.17-.21 2.92-.3 1.59-.12 1.96-.2",
		 '01131':"m386.1 245.4l.29-.08.07.04 1.35.94 1.74 1.6 2.94-.28.64 1.06-.37 1.75-1.96.2-1.59.12-2.92.3-2-1.92.45-.23-.14-1.63.95-1.68.09-.16.1-.04.19-.001.17.02",
		 '01013':"m393.1 248.6l4.44-.47.35 3.17.05.8-.55.06.17 1.67-2.21.24-1.51.13-.29-.22-.58-1.09-.14-1.54-.11-1 .37-1.75",
		 '01041':"m400.3 247.9l.96 4.43.13 1.03-.13.11-.41.04.13 1.16-.74.06-.19-.17-.09-.74-.05-.19-.2.02-1.1.13-1.08.14-.17-1.67.55-.06-.05-.8-.35-3.17.34-1.15 1.11-.13.13 1.11 1.2-.15",
		 '01109':"m402.3 246.6l.45-.19.47.04.2.07.52.99.82 1.04 1.45-.16-.62 3.48-.44.05-3.89.42-.96-4.43 2-1.31",
		 '01011':"m408.2 243.5l.38 1.11-.18.11.09 1.13.07.47-.89.3-.86.32-.5.97-.06.31v.1l-1.45.16-.82-1.04-.52-.99-.2-.07-.47-.04-.45.19.54-2.96.66.44.09.03 4.55-.53",
		 '01087':"m404.8 239.2l.02.18 2.34.85.55-.06.18 1.12.26 2.25-4.55.53-.09-.03-.66-.44-1.32-1.75 1.38-1.09.96-.12.32-1.17.63-.26",
		 '01085':"m393.1 243.7l.29-.67.03-.06.48-.09 1.29-.15 1.33.58 1.36 3.68-.34 1.15-4.44.47-.64-1.06.63-3.86",
		 '01101':"m397.4 242.4l1.49-1.35.12.001.16.06.09.06.51.56-.05.09.86.16.75.06.25-.21 1.32 1.75-.54 2.96-2 1.31-1.2.15-.13-1.11-1.11.13-1.36-3.68.84-.93",
		 '01051':"m401.3 237.5l1.33-.13.03.001.02.17-.1.38.31 2.66.04.1.04.04-1.38 1.09-.25.21-.75-.06-.86-.16.05-.09-.51-.56-.09-.06-.16-.06-.12-.001-1.49 1.35-.41-3.83.32-.65 3.98-.42",
		 '01001':"m397 238.6l.41 3.83-.84.93-1.33-.58-1.29.15-.48.09-.03.06-.29.67-1.5-4.06 1.08-.05 1.11-.13-.06-.57 3.23-.34",
		 '01047':"m390.4 238.9l1.17.74 1.5 4.06-.63 3.86-2.94.28-1.74-1.6-1.35-.94-.07-.04-.29.08-.06-.55.55-.05-.22-2.25 1.87-.19 1.47-.19.09-.18.29-1.02.17-.78.19-1.21",
		 '01091':"m382.1 242.3l.89-.08.06.56 2.21-.21.76 2.19.06.55-.17-.02-.19.001-.1.04-.09.16-.95 1.68.14 1.63-.45.23-4.41.39-.28-.03-.09-.05-.08-.09-.05-.13-.05-.47.82-3.07.15-.16.28-.18.5-.07-.48-.4-.83-.32-.02-.08.02-.52.06-.16 1.2-1.22.09-.06.55-.17.45.06",
		 '01119':"m375.9 236.8l1.81-.21-.12 1.1.22.94 1.3 2.73.26.32h.04l.46-.13.36-.17.08-.08.21-.15.18-.09h.1l.11.07.74 1.15-.55.17-.09.06-1.2 1.22-.06.16-.02.52.02.08.83.32.48.4-5.31.47.08-3.5.08-4.56.02-.81",
		 '01105':"m385.9 237.5l1.09-.11.05.56.75-.07 2.47-.3.14 1.39-.19 1.21-.17.78-.29 1.02-.09.18-1.47.19-1.87.19.22 2.25-.55.05-.76-2.19-.21-2.24.43-1.68.44-1.24",
		 '01021':"m395.4 234.7l1.85 3.28-.32.65-3.23.34.06.57-1.11.13-1.08.05-1.17-.74-.14-1.39 1.54-.14-.19-1.9-.14-.85-.03-.29 1.73-.13 1.18-.06.18.25.35.22h.53",
		 '01037':"m399 233.2h1.78l.48 4.31-3.98.42-1.85-3.28.17-1.09 3.39-.36",
		 '01123':"m404.6 232.6l.65-.08.54 4.87-.92 1.82-.63.26-.32 1.17-.96.12-.04-.04-.04-.1-.31-2.66.1-.38-.02-.17-.03-.001-1.33.13-.48-4.31 3.78-.62",
		 '01027':"m401.9 227.8l-.35.32v.09l1.12-.12.16-.2-.02-.19 1.3-.11.44 5-3.78.62h-1.78l-.1-1.18.88-1.39 1.11-1.24.45-1.57.57-.06",
		 '01121':"m398.5 225.8l1.01-.05.31.34.1.48.31.25 2.13-.21.03.38-.51.8-.57.06-.45 1.57-1.11 1.24-.88 1.39.1 1.18-3.39.36-.04-.82 1.22-1.8.1-.78-.15-.22-.3-.21 1.14-1.4.44-.96-.05-.06-.11-.24v-.07l.5-1.14.18-.1",
		 '01117':"m394.8 227.9l1.67 1.85.3.21.15.22-.1.78-1.22 1.8.04.82-.17 1.09h-.53l-.35-.22-.18-.25-1.18.06-1.73.13.03.29-1.8-2.39.5-.18.31-.17.22-.16.4-.7 2.05-1.99.75-.08.86-.83-.02-.28",
		 '01007':"m389.3 232.3l.42-.04 1.8 2.39.14.85.19 1.9-1.54.14-2.47.3-.75.07-.05-.56-1.09.11-.16-1.66 1.11-.14-.03-1.14.27-.53.81-.9.46-.51.09-.05.7-.21h.11",
		 '01065':"m382.6 236l3.15-.24.16 1.66-.44 1.24-.43 1.68.21 2.24-2.21.21-.06-.56-.89.08.57-1.21-.53-.64-.42-1.26-.2-.98-.02-.28 1.1-1.95",
		 '01063':"m381.1 234.3l1.47 1.78-1.1 1.95.02.28.2.98.42 1.26.53.64-.57 1.21-.45-.06-.74-1.15-.11-.07h-.1l-.18.09-.21.15-.08.08-.36.17-.46.13h-.04l-.26-.32-1.3-2.73-.22-.94.12-1.1-.001-.06.93-.63.81-.46.36-.13 1.32-1.07",
		 '01107':"m380.7 229.5l.45 4.79-1.32 1.07-.36.13-.81.46-.93.63.001.06-1.81.21.08-3.87.06-3.2 3.51-.16 1.13-.1",
		 '01125':"m385 228.1h.19l.94.1.09.94.55-.03-.37.33.19.63.72.79.43.37.99.59.51.52h-.11l-.7.21-.09.05-.46.51-.81.9-.27.53.03 1.14-1.11.14-3.15.24-1.47-1.78-.45-4.79 1.07-.03.79-.09-.06-.66.33-.51 2.22-.1",
		 '01073':"m389.8 224.9l.7-.43 1.33-.09 1.21.71.81.08.37-.04.24.54.08.84-.07.29-.09.001-.07.19.07.75.1.09.29.08.02.28-.86.83-.75.08-2.05 1.99-.4.7-.22.16-.31.17-.5.18-.42.04-.51-.52-.99-.59-.43-.37-.72-.79-.19-.63.37-.33.24-.13.31-.22 1.17-1.29.23-.4.19-.39.68-1.38.15-.39",
		 '01127':"m387.5 222.8l2.15 1.56.16.54-.15.39-.68 1.38-.19.39-.23.4-1.17 1.29-.31.22-.24.13-.55.03-.09-.94-.94-.1h-.19l-.1-1.12-1.11.06-.24-2.26-1.12.04-.05-.56-.1-1.12 5.15-.35",
		 '01075':"m376.2 222.9l2.34-.12.41.36.18 2.1.32 3.13.1 1.19-3.51.16.06-2.75.1-4.08",
		 '01057':"m379.1 224.5l3.36-.23.05.56 1.12-.04.24 2.26 1.11-.06.1 1.12-2.22.1-.33.51.06.66-.79.09-1.07.03-1.13.1-.1-1.19-.32-3.13-.07-.78",
		 '01059':"m376.4 216.1l6.44-.37.3 3.39-1.11.07-.89.04-2.34.16-2.47.1.04-1.85.04-1.55",
		 '01093':"m376.3 219.5l2.47-.1 2.34-.16.89-.04.33 3.94.1 1.12-3.36.23-.11-1.32-.41-.36-2.34.12v-.37l.07-3.06",
		 '01133':"m383.1 219.1l4.44-.34-.06 3.99-5.15.35-.33-3.94 1.11-.07",
		 '01043':"m387.5 218.6l5.58-.42 1.42.45-.33.02-.31.1-.04.03-.59 1.49-.06.1-1.42 1.81-.96.84-.78.78-.4.52-2.15-1.56.06-3.99-.02-.19",
		 '01009':"m394.5 218.6l1.78 1.91-.17.37-.33 1.76.47-.05-.38.99-.27.36-.3.32h-.08l-.1-.05-1.36.44.05.47-.81-.08-1.21-.71-1.33.09-.7.43-.16-.54.4-.52.78-.78.96-.84 1.42-1.81.06-.1.59-1.49.04-.03.31-.1.33-.02",
		 '01115':"m396.3 222.6v-.04l.07-.14.24-.39.14-.11.83-.08.1.06.08.14.24.55.28.27.13.09.22-.09.56.74.13.12.04.08.001.82-.81.73-.04.13.04.3-.18.1-.5 1.14v.07l.11.24.05.06-.44.96-1.14 1.4-1.67-1.85-.29-.08-.1-.09-.07-.75.07-.19.09-.001.07-.29-.08-.84-.24-.54-.37.04-.05-.47 1.36-.44.1.05h.08l.3-.32.27-.36.38-.99",
		 '01015':"m402.5 221.6l2.24.1-1.04.97.13 1.32.17 1.61-.15.29-.84 1.02-.55.06-.03-.38-2.13.21-.31-.25-.1-.48-.31-.34-1.01.05-.04-.3.04-.13.81-.73-.001-.82-.04-.08-.13-.12.17-.001.28-.16.26-.2.59-.6.31-.51.18-.11.64-.06.87.09-.02-.43",
		 '01055':"m398.3 219l2.77-.28.15 1.15.47.04.8 1.41v.27l.02.43-.87-.09-.64.06-.18.11-.31.51-.59.6-.26.2-.28.16-.17.001-.56-.74-.22.09-.13-.09-.28-.27-.24-.55-.08-.14-.1-.06-.83.08-.14.11-.24.39-.07.14v.04l-.47.05.33-1.76.17-.37 1.95-1.53",
		 '01095':"m395.4 214.1l1.88-.19.13.74.99.74-.13 3.61-1.95 1.53-1.78-1.91-1.42-.45.02-3.15.23.54.37.22.35.06.37-.12 1.04-.53.15-.38.08-.49-.06-.17-.14-.07h-.11",
		 '01103':"m390.6 215.2l2.53-.19-.02 3.15-5.58.42-.4-4.81 3.47 1.43",
		 '01079':"m383.6 212.6l1.79.37 1.72.79.4 4.81.02.19-4.44.34-.3-3.39.81-3.11",
		 '01033':"m376.5 212l.4-.19.18-.05.73.25.23.17.16.22.07.13.08.29.13.19.83.65.09.05.32.09.48-.09.27-.15.05-.06.18-.31 1.22-.73.41-.18.23-.05h.08l.98.32-.81 3.11-6.44.37.11-4.05",
		 '01077':"m385.5 209.8l.13-.001-.24 3.15-1.79-.37-.98-.32h-.08l-.23.05-.41.18-1.22.73-.18.31-.05.06-.27.15-.48.09-.32-.09-.09-.05-.83-.65-.13-.19-.08-.29-.07-.13-.16-.22-.23-.17-.73-.25-.18.05-.4.19-1.18-1.25 2.24-.32 3.97-.31 4-.31",
		 '01083':"m389.6 209.6l.55-.05.49 5.7-3.47-1.43-1.72-.79.24-3.15 3.92-.27",
		 '01089':"m395.1 209l.22.58-.28 1.45-.1 1.32.12 1.33.38.39h.11l.14.07.06.17-.08.49-.15.38-1.04.53-.37.12-.35-.06-.37-.22-.23-.54-2.53.19-.49-5.7 4.86-.48h.08",
		 '01071':"m402.4 208.3l.41 1.58-.66 1.45-1.13 1.83-1.8 1.91-.3.2-.24.09-.31.001-.99-.74-.13-.74-1.88.19-.38-.39-.12-1.33.1-1.32.28-1.45-.22-.58 4.68-.46 2.71-.24",
		 '01049':"m402.8 209.9l.85 3 .13.44.23.82-.06-.02-.04.03-.5.58-.06.75-.33.71-1.37 1.67-.37.05-.25.24-.07.14.04.41-2.77.28.13-3.61.31-.001.24-.09.3-.2 1.8-1.91 1.13-1.83.66-1.45",
		 '01019':"m404 214.2l.88 3 .72 2.6.41 1.47-1.36.45-2.24-.1v-.27l-.8-1.41-.47-.04-.15-1.15-.04-.41.07-.14.25-.24.37-.05 1.37-1.67.33-.71.06-.75.5-.58.04-.03.06.02",
		 '01029':"m406.1 221.2l.22.79.87 3.15.6 2.15-3.62.23-1.3.11.02.19-.16.2-1.12.12v-.09l.35-.32.51-.8.55-.06.84-1.02.15-.29-.17-1.61-.13-1.32 1.04-.97 1.36-.45",
		 '01111':"m404.1 227.6l3.62-.23.19.69 1.04 3.77.08.27-3.86.44-.65.08-.44-5",
		 '01017':"m409.1 232.1l.87 3 .69 1.53-1.19.16-.37.23-3.31.4-.54-4.87 3.86-.44",
		 '01081':"m405.8 237.4l3.31-.4.37-.23 1.19-.16.78 1.72 1.03 1.15-.57.55-1.92.51-.91.62-1.12.14-.18-1.12-.55.06-2.34-.85-.02-.18.92-1.82",
		 '01113':"m412.7 241.2l-.12.46.02.11.07.08.72.19.27.22.11.22-.09.41-.03.04-1.17 2.31-1.4.18-.07-.03-.45-.47-.04-.12-.35-.41-1.65.21-.38-1.11-.26-2.25 1.12-.14.91-.62 1.92-.51.57-.55.3 1.78",
		 '01005':"m412.5 245.3l.03.96-.51 2.77.19.25-.1-.09-.19-.06h-.06l-.06.03-.29.36-.17.5-.06.1-2.18.19.12 1.12-3.61.42.62-3.48v-.1l.06-.31.5-.97.86-.32.89-.3-.07-.47-.09-1.13.18-.11 1.65-.21.35.41.04.12.45.47.07.03 1.4-.18",
		 '05017':"m344.5 231.5l.15.41h.001l.55.37.45.3.08.3-.13.26-.56.16.54 1.55.37.66.28.3.03.98v.001l-.34 1.4-.32.37-.09.1-1.06.04-1.84.07-.27.02-.2-4.95-.07-2.26 1.11-.06.06.39.29.18.79-.02.17-.58",
		 '05003':"m336.5 233.9l5.71-.13.2 4.95-6.55.27-.82-1.97.25-.65.4-.52.47-.38.21-.06.31-.26.14-1-.33-.24",
		 '05115':"m326.7 204.2l.03 1.74-.37.52.02 1.12-.35 3.8-1.33.14-2.73-1.92-.22-.12-.02-1.85h.19l.56-.59.54-1.1-.02-1.7 2.22-.001 1.47-.02",
		 '05101':"m325.1 199.1l.1 5.08-2.22.001-3.7-.35-.09-.78v-.75l.23-.57.32-.56-.18-2.04h1.86l3.68-.03",
		 '05087':"m316 196.9h1.63l.28.32.14.51v.49l.09.19.28.4.36.37h.74l.18 2.04-.32.56-.23.57v.75l.09.78-1.84-.02-2.23.17h-.54v-.94l.1-3.35.54-1.88.73-.95",
		 '05047':"m315.2 204l2.23-.17-.02 5.11-3.28 2.17-.54-2.99.16-.09.19-.62.14-.74.03-1.37 1.09-.92.19-.19v-.19h-.19",
		 '05071':"m317.4 203.8l1.84.02 3.7.35.02 1.7-.54 1.1-.56.59h-.19l.02 1.85-1.88-1.08-.44.17-.79.25-1.2.14.02-5.11",
		 '05083':"m317.4 208.9l1.2-.14.79-.25.44-.17 1.88 1.08.22.12.02 1.36-2.12.48-1.86.46-.45.18v1.15l.05.35-2.21.001-1.67-.001-.71-.37v-.57-.57l1.13.001v-.95l3.28-2.17",
		 '05149':"m321.9 209.6l2.73 1.92 1.33-.14-1.48 1.27-.85.78-.78.75-.36.4-.54.73.04 1.35-1.11.42-3.33.06-.03-3.56-.05-.35v-1.15l.45-.18 1.86-.46 2.12-.48-.02-1.36",
		 '05105':"m324.5 212.6l3.38-.05.88-.08.17-.03.14-.05.52-.43.05.05.1.27.001.12-.04.32-.05.11-.08.12-.12.12-.17.14-.07.09-.05.15.04.16.12.2.11.09.13.07.19.06-.31.22-.77.19-1.09.21v.75h.16l-.1.23-.84-.22h-1.48l-1.09.04.02 1.12-2.24.05-.04-1.35.54-.73.36-.4.78-.75.85-.78",
		 '05029':"m326.4 207.5l3.88-.04.02 1.13-.64 3.34-.52.43-.14.05-.17.03-.88.08-3.38.05 1.48-1.27.35-3.8",
		 '05045':"m334.1 208.6l.07 3.84.001.7-1.12.02-.33 1.13-2.14.02-.83-.23-.19-.06-.13-.07-.11-.09-.12-.2-.04-.16.05-.15.07-.09.17-.14.12-.12.08-.12.05-.11.04-.32-.001-.12-.1-.27-.05-.05.64-3.34 2.39-.03 1.47-.05",
		 '05141':"m330.7 203.1l1.87.92.05 4.53-2.39.03-.02-1.13-3.88.04-.02-1.12.37-.52-.03-1.74h1.86l-.02-.94 2.21-.06",
		 '05129':"m325.1 199.1h.56l.57.55 4.41-.06.001 1.13.07 2.43-2.21.06.02.94h-1.86l-1.47.02-.1-5.08",
		 '05137':"m332.8 198.6l1.23.94.06.05.19.23v.06l-.26.85 2 1 .49.18.22 2.1-4.2.08-1.87-.92-.07-2.43 1.11-.02 1.09-1.15-.02-.96",
		 '05023':"m336.8 204l.55 2.19.03 1.02-.53 1.29-2.71.06-1.47.05-.05-4.53 4.2-.08",
		 '05145':"m337.3 206.2l2.21-.05 2.5 1.07-.85 1.05-.03.77.02.08.28.39-.23 2-.22.3-3.5.93-1.49-.14-.49-.17-1.37-.02-.07-3.84 2.71-.06.53-1.29-.03-1.02",
		 '05063':"m341.7 201.3l1.64-.07-.06.23-.1.31-.29.67-.87 1.94-.22 1.66-1.41.04h-.81l-2.21.05-.55-2.19-.22-2.1 1.4-1.03 2.56-.05.001.58 1.11-.03",
		 '05067':"m343.3 201.3l1.73-.03.07 2.29.15 3.44.06 1.15-2.21.07-.07-1.15-1.01.06.04.07-2.5-1.07h.81l1.41-.04.22-1.66.87-1.94.29-.67.1-.31.06-.23",
		 '05147':"m342 207.2l-.04-.07 1.01-.06.07 1.15 2.21-.07.11 2.67-1.02 1.95-.92.03-.47.27-.09.4.001.55-.78.04-.04-1.81-1 .05-.05-.14-.03-.34.22-.3.23-2-.28-.39-.02-.08.03-.77.85-1.05",
		 '05123':"m351.1 210.6l1.07-.11.09 1.89v1.27l-5.63.28h-1.07l-.55.03.02.58-.61-1.72 1.02-1.95 5.65-.26",
		 '05035':"m354.5 206.5l.7.69.04.14.42 2.96v.001.001l-.02.04-.16.19-1.11.85-1.05.35-.13.4.02.18.27 1.74-1.18.43-.06-.92v-1.27l-.09-1.89-1.07.11-.22-3.86 2.25-.09 1.4-.06",
		 '05037':"m350.8 206.7l.22 3.86-5.65.26-.11-2.67-.06-1.15.95-.04 2.42-.23 1.1-.05 1.13.03",
		 '05111':"m345.1 203.5l1.95-.06 4.14-.22 1.7-.05.2 3.39-2.25.09-1.13-.03-1.1.05-2.42.23-.95.04-.15-3.44",
		 '05093':"m358.4 199l.55 1.22h-.29l-.19.03-.23.12-.03.02-.07.06-.91 1.94-.28 2.73-2.45 1.47-1.4.06-.2-3.39-.25-3.84 3.41-.24 2.34-.18",
		 '05031':"m352.6 199.4l.25 3.84-1.7.05-4.14.22-1.95.06-.07-2.29 1.81-1.17 4.81-.23.17-.42.82-.05",
		 '05065':"m338 196.8l-.001 4.05-1.4 1.03-.49-.18-2-1 .26-.85v-.06l-.19-.23-.06-.05-1.23-.94h-.2v-.54l.55-.23-.001-.91 4.81-.1",
		 '05075':"m342.4 196.5l1.25 1.1.7.61.32-.45 2.43-.1.62-.03v.05l-.19.49-.28.27-.15.11-.41 1.13.1.36-1.81 1.17-1.73.03-1.64.07-.04-1.73-.08-1.96-.001-.73.18-.19.74-.2",
		 '05135':"m340.8 193.5v.13l.63.64.37.18.41.58.22.67.04.83-.74.2-.18.19.001.73.08 1.96.04 1.73-1.11.03-.001-.58-2.56.05.001-4.05 1.3-.001 1.08-1.54-.04-1.74.44-.001",
		 '05055':"m347.1 196.2l.93-.07 3.36-.08.74.34.02.38 1.26-.09-1.59 2.77-.17.42-4.81.23-.1-.36.41-1.13.15-.11.28-.27.19-.49v-.05l-.62.03-.05-1.52",
		 '05021':"m349.3 193l3.66-.21.27-.02.41-.001.92 1.3.1.13.07 1.02-.11.3-.07.11-1.13.99-1.26.09-.02-.38-.74-.34-3.36.08-.93.07.06-3 2.14-.12",
		 '05121':"m347.2 193.2l-.06 3 .05 1.52-2.43.1-.32.45-.7-.61-1.25-1.1-.04-.83-.22-.67-.41-.58-.37-.18-.63-.64v-.13l2.88-.15 3.51-.2",
		 '05049':"m340.3 193.5l.04 1.74-1.08 1.54-1.3.001-4.81.1-.06-3.08.31-.02 4.61-.21 2.29-.08",
		 '05005':"m329.2 194l3.9-.16.06 3.08.001.91-.55.23v.54h.2l.02.96-1.09 1.15-1.11.02-.001-1.13v-.76l-.26-.6-.55-1.13-.48-.56-.17-.12.05-1.02v-1.4",
		 '05089':"m326.7 194.1l2.5-.09v1.4l-.05 1.02.17.12.48.56.55 1.13.26.6v.76l-4.41.06-.57-.55.21-4.99.84-.03",
		 '05009':"m325.9 194.1l-.21 4.99h-.56l-3.68.03-.09-4.9 4.54-.13",
		 '05015':"m321.3 194.2l.09 4.9h-1.86-.74l-.36-.37-.28-.4-.09-.19v-.49l-.14-.51-.28-.32h-1.63l-.58-2.48 2.9-.07 2.77-.07h.2",
		 '05007':"m313.3 194.4l2.17-.04.58 2.48-.73.95h-1.28l-1.11.25-2.21.11-.46.94-.11.56h-1.67l-.12-.77-.64-4.38 5.57-.09",
		 '05143':"m308.5 199.7h1.67l.11-.56.46-.94 2.21-.11 1.11-.25h1.28l-.54 1.88-.1 3.35v.94l-1.68-.001-1.29.16-2.55-.02-.68-4.44",
		 '05033':"m314.7 204h.73v.19l-.19.19-1.09.92-.03 1.37-.14.74-.19.62-.16.09-.62-.06-.09.001-.06.04-.09.08-.04.1.05.11.15.14.05.08.04.14v.09l-.03.08-.08.07-.66.3-.17.06-.72.05-.27-.09-.24-.3-.04-.18.04-.17v-.05l-.06-.13-.34-.27-.17-.08-.14-.03-.03.001-.19.68-.47-3.12-.24-1.56 2.55.02 1.29-.16 1.68.001",
		 '05131':"m309.9 208.8l.19-.68.03-.001.14.03.17.08.34.27.06.13v.05l-.04.17.04.18.24.3.27.09.72-.05.17-.06.66-.3.08-.07.03-.08v-.09l-.04-.14-.05-.08-.15-.14-.05-.11.04-.1.09-.08.06-.04.09-.001.62.06.54 2.99v.95l-1.13-.001v.57h-.19l-.67.28-.29.18v.09h.24v1.15l-.36.15-1.73.38-.19-.04.06-5.8v-.23",
		 '05127':"m313 212.6v.57l.71.37 1.67.001 2.21-.001.03 3.56h-.37l-.88.47-.5.6-.55.02v-.19l-.93-.14h-3.15l-.48-.25-.97-.13.03-2.66.19.04 1.73-.38.36-.15v-1.15h-.24v-.09l.29-.18.67-.28h.19",
		 '05097':"m320.9 217l-.001 4.5v.74h-5.58l-.04-4.09.55-.02.5-.6.88-.47h.37l3.33-.06",
		 '05051':"m324.3 216.6l1.11-.04.03 1.14.68.62 1.06.55.19.37v.76h-1.28l-.32.75.02.78-4.86.04.001-4.5 1.11-.42 2.24-.05",
		 '05125':"m327.8 215.4l.94.68 1.11 1.07 1.55 1.07 1.7.52.09 1.14-1.67.04-1.58.59-.66.51-.53.06-1.36-1.11v-.76l-.19-.37-1.06-.55-.68-.62-.03-1.14-1.11.04-.02-1.12 1.09-.04h1.48l.84.22.1-.23",
		 '05119':"m334.2 213.1l.53-.001.08 3.62.56 1.42.07 1.71-1.88.03h-.4l-.09-1.14-1.7-.52-1.55-1.07-1.11-1.07-.94-.68h-.16v-.75l1.09-.21.77-.19.31-.22.83.23 2.14-.02.33-1.13 1.12-.02",
		 '05085':"m334.2 212.4l1.37.02.49.17 1.49.14.05 1.41 1.16-.03.75 3.78.09.83v.2l-.42.86h-.29l-3.44.06-.07-1.71-.56-1.42-.08-3.62-.53.001-.001-.7",
		 '05117':"m337.5 212.7l3.5-.93.03.34.05.14 1-.05.04 1.81.13 4.53-2.29.05.04 1.13-.31.03h-.56l.42-.86v-.2l-.09-.83-.75-3.78-1.16.03-.05-1.41",
		 '05095':"m342.2 214l.78-.04-.001-.55.09-.4.47-.27.92-.03.61 1.72.06 1.72.56-.02.03 1.15.08 2.27.58-.001v.2l.06 1.53-.57.02h-.08l-.33-.13-.17-.12-.96-1.04-.75-1.07-.35-.44-.91.02-.13-4.53",
		 '05077':"m345 214.5l-.02-.58.55-.03h1.07l5.63-.28.06.92-1.62 2.58-5 .22-.03-1.15-.56.02-.06-1.72",
		 '05107':"m350.7 217.1l.14 1.5.11 1.16-.08.25v.02l-.02.02-.37.32-.46.22-.56.11-.55.11-1 1.81-.48.99-.15.32.04.13v.02l-1.98.1.51-2.85.57-.02-.06-1.53v-.2l-.58.001-.08-2.27 5-.22",
		 '05069':"m335.4 219.8l3.44-.06.08 3.23h1.26l.56.03.11.08.99 1.15.14.49-.08.08-.06.03-.6.12-.8-.26-1.65-.8-.24.91-2.11.1.001.38-2.97.14-.04-1.38.17-.81-.08-3.4 1.88-.03",
		 '05053':"m333.6 219.9l.08 3.4-.17.81.04 1.38-1.09.08-.99-.82-.74-.22h-1.95l-.02-3.43.53-.06.66-.51 1.58-.59 1.67-.04h.4",
		 '05059':"m327.4 220l1.36 1.11.02 3.43h-2.21-1.08l-.43-.65-3.52-.81-.57-.75v-.74l4.86-.04-.02-.78.32-.75h1.28",
		 '05039':"m326.5 224.5h2.21 1.95l.74.22.99.82-1.43.14v1.04l.19.04.38.35.25.36.72 1.27.04.24h-2.65l-3.31.001-.24-1.08.17-1.16v-2.24",
		 '05025':"m333.5 225.5l2.97-.14-.09 3.54.05 1.13-3.79.11-.08-1.13-.04-.24-.72-1.27-.25-.36-.38-.35-.19-.04v-1.04l1.43-.14 1.09-.08",
		 '05079':"m341.9 224.9l.29.84v.21l-.45.32-.88.03v1.93l.02.58-4.46.09.09-3.54-.001-.38 2.11-.1.24-.91 1.65.8.8.26.6-.12",
		 '05001':"m338.9 219.8h.85l.31-.03-.04-1.13 2.29-.05.91-.02.35.44.75 1.07.96 1.04.17.12.33.13h.08l-.51 2.85-.52.36-.17.16-.09.14-.001.29.03.19.22.22.49.76-.19.25-1.3-.38-.63-.39-.99-.08-.29-.84.06-.03.08-.08-.14-.49-.99-1.15-.11-.08-.56-.03h-1.26l-.08-3.23",
		 '05041':"m347.3 224.1l.48.38.11.28-.06.43-2.08 1.05-.86 3.69-.06.29.001.03.06.11.32.24.3.24v.001l-.03.14-.19.16-.79.32-.17.58-.79.02-.29-.18-.06-.39-1.11.06-1.24-2.79-.02-.58v-1.93l.88-.03.45-.32v-.21l.99.08.63.39 1.3.38.19-.25-.49-.76-.22-.22-.03-.19.001-.29.09-.14.17-.16.52-.36 1.98-.1",
		 '05043':"m336.4 228.9l4.46-.09 1.24 2.79.07 2.26-5.71.13-.12-.17-.18-.52v-.06l.03-.91v-.02l.34-.02-.09-2.26-.05-1.13",
		 '05011':"m332.7 230.1l3.79-.11.09 2.26-.34.02v.02l-.03.91v.06l.18.52.12.17.33.24-.14 1-.31.26-.21.06-.47.38-.4.52-.25.65-.95-.72-1.41-.73-.03-.14.03-.08-.3-.19-.06-.4.05-.4.09-.05.05.02.18-.46.24-.72.08-.4-.2-1.81-.12-.88",
		 '05013':"m329.9 229h2.65l.08 1.13.12.88.2 1.81-.08.4-.24.72-.18.46-.05-.02-.09.05-.05.4.06.4.3.19-.32.28-.47.1h-.21l-.32-.25.001-.04-.1-.4-.8-.43-.15-.04-1.51-.78-.68-.77-.09-.22-.04-.46.47-1.36.07-.06.71-.12.05-.04.35-.55.28-1.27",
		 '05103':"m326.6 229l3.31-.001-.28 1.27-.35.55-.05.04-.71.12-.07.06-.47 1.36.04.46.09.22.68.77 1.51.78-4.41.02-1.5-.94v-4.2l2.23-.5",
		 '05099':"m321.4 227.2l.77 1.1 1.66.71.23.13.28.31v4.2l-2.66.19-1.27-.37v-2.55l.11-1.97v-1.71l.88-.02",
		 '05057':"m316.6 226.7l3.91.58v1.71l-.11 1.97v2.55l-2.57-.001-1.14-1.63-1.44-1.79h1.34l.001-3.38",
		 '05019':"m320.2 222.3h.74l.57.75 3.52.81.43.65h1.08v2.24l-.17 1.16.24 1.08-2.23.5-.28-.31-.23-.13-1.66-.71-.77-1.1-.62-1.16-.16-.44-.46-2.22v-1.13",
		 '05109':"m315.3 222.3h4.84v1.13l.46 2.22.16.44.62 1.16-.88.02-3.91-.58-.03-2.27-1.12-.001-.14-.99v-1.13",
		 '05061':"m315.3 222.3v1.13l.14.99 1.12.001.03 2.27-.001 3.38h-1.34-.02l-1.19-2.14-.04-.13-.21-1.37-.08-.62-.03-.98.04-.39-.12-.06-1.52.02-.15-1v-1.12h3.38",
		 '05113':"m309.8 217.5l.97.13.48.25h3.15l.93.14v.19l.04 4.09h-3.38v1.12l.15 1-2.4.07.05-6.99",
		 '05133':"m312.1 224.4l1.52-.02.12.06-.04.39.03.98.08.62.21 1.37.04.13 1.19 2.14-.88-.001-2.8-.83-1.88-1.51.02-3.23 2.4-.07",
		 '05081':"m309.7 227.7l1.88 1.51 2.8.83.88.001h.02l1.44 1.79-2.31.8-.26-.21-.2-.08-1.04-.21-.6.09-.16.02-.05.05-1.04.53-.58-.31-.16-.1-.44-.28-.07-.09-.08-.19-.08-.22.03-3.93",
		 '05091':"m316.7 231.8l1.14 1.63-.08.83.74 1.1v.07l-.18.57-.81 1.42-.08.1-.08.07-.13.02-.6 1.07.46.76h-.1l-2.46.05-.14-6.9 2.31-.8",
		 '05073':"m317.9 233.5l2.57.001 1.27.37-.12.15-1.06 2.27-.001 3.13h-.33l-3.05.07-.46-.76.6-1.07.13-.02.08-.07.08-.1.81-1.42.18-.57v-.07l-.74-1.1.08-.83",
		 '05027':"m321.7 233.9l2.66-.19 1.5.94.04 4.66-2.69.07-2.71.07.001-3.13 1.06-2.27.12-.15",
		 '05139':"m325.9 234.6l4.41-.02.15.04.8.43.1.4-.001.04.32.25h.21l.47-.1.32-.28-.03.08.03.14 1.41.73.95.72.82 1.97-7.1.19-2.84.05-.04-4.66",
		 '04015':"m110 170.6l11.57 2.15 3.61.64-.99 2.15-.67 1.69-.05.12-.53 1.67-.03.17v.21l.12.38.11.18-.14.84-.12.22-.33.39-.13.11-.15.05-2.41.72-.45.09-.45.05-.08-.03-.6.08-1.09.42-1.56.69-.72 1.47-1.18 5.7-2.84 15.44-.23.2-.08.04-.11.02-3.83.21-4.15-1.87-.5-.87-.57-.64-.66-.79-.67-2.8-.04-.52-.72-1.13-.57-1.48v-.07l.02-.18.32-1.43.97-1.61.09-.31.05-.26.001-.29.07-1.57-.001-.38-.09-.76-.13-1.59.13-2.26.28-3.69.13-1.26v-.08l.14-.13.1-.05 1.15-.27h.63l.59.12 1.31.39.14.13.31.43.13.32.02.1v.03.11l.07.22.24.38.09.09.13.1.05.001.2.02.63.001.05-.02.02-.001.14-.16 1.31-1.77.44-2.27.25-1.3.41-2.34.05-.26.41-2.12.39-2",
		 '04012':"m102.5 204.8l4.15 1.87 3.83-.21.11-.02.08-.04.23-.2-.75 4.06-1.46 7.92-6.58-1.24.21-1.11-3.26-.61-1.08 5.51-1.09-.18-1.55-.31-.94-.16-.17-.08-.5-.35-.22-.6v-.02l.64-3.91 1.08-.27 1.3-1.53.42-1.46.31-1.53.06-.42.28-.99.3-.52.97-1.37 1.33-.51.91-.37 1.35-.78.02-.02.04-.56",
		 '04003':"m151.7 237.6l.71.09-1.96 14-4.1-.59-11.25-1.65.87-5.06 1.37-8.89 3 .47 7.93 1.14 3.42.5",
		 '04023':"m125.4 246.7l.2-1.22 2.2.35.41-2.6 3.35.46 4.36.69-.87 5.06-5.62-.87-1.3-.3-2.74-1.57",
		 '04019':"m118.7 231.5l4.37.74 2.4.47 4.05.66.36.05 1.69.17 3.35.46 2.54.39-.18 1.11-1.37 8.89-4.36-.69-3.35-.46-.41 2.6-2.2-.35-.2 1.22-.52-.3-1.64-.95-13-7.5-2.61-1.48-2.07-1.25 1.09-5.93 12.1 2.13",
		 '04011':"m149.8 221.3l.22-.45.09-.07 1.48-.85 3.18.43-2.41 17.33-.71-.09-1.02-1.49.02-.18.24-.51.14-.65v-.59l-.24-.95-.58-1.29-.16-.03-1.3-3.26 1.06-7.36",
		 '04009':"m145.5 221.8l.64.6 1.08.24 1.06-.66 1.58-.67-1.06 7.36 1.3 3.26.16.03.58 1.29.24.95v.59l-.14.65-.24.51-.02.18 1.02 1.49-3.42-.5-7.93-1.14-3-.47.18-1.11h.02l.22-1.42.7-4.65.41-2.64.11-1.25.22-.95.11-.17.38-.19.78-.24.3-.04 1.6-.18 1.79.26.21-1.42 1.14.29",
		 '04001':"m160.5 179l-1.78 12.83-2.53 18.3-1.43 10.28-3.18-.43-1.48.85-.09.07-.22.45-1.58.67-1.06.66-1.08-.24-.64-.6.32-2.13.39-.51.85-4.84 1.36-8.98.9-5.65.54-2.81.27-1.86-1.79-.27 2.55-17.2 9.68 1.38",
		 '04017':"m150.8 177.6l-2.55 17.2 1.79.27-.27 1.86-.54 2.81-.9 5.65-1.36 8.98-.85 4.84-.39.51-.32 2.13-1.14-.29.81-5.42-7.89-1.2 6-38.52 2.58.39 1.65.32 3.34.5",
		 '04007':"m137.8 211.5l-.53 3.37 7.89 1.2-1.02 6.85-1.79-.26-1.6.18-.3.04-.78.24-.38.19-.11.17-.22.95-.11 1.25h-.17l-1.9.36-1.11.77-.001.06.06.25-.03.09-.62.61h-.16l-.03-.001-1.2-3.67-.09-1.04-.24-1.04-.22-.83-.77-2.9-.31.18-.27.22-1.58-2.51-.14-2.29-.06-.19-.03-.05-.22-.1-.31.03.48-.75v-.64l-.06-.22-.17-.32-2.21-.37-.07-.12v-.03l.37-.95.74-1.81.15-.06.79-.23.26-.18.02-.02.06-.42 2.99.86 2.27 1.55 1.72 1.35 1 .26",
		 '04021':"m133.1 221.3l.22.83.24 1.04.09 1.04 1.2 3.67.03.001h.16l.62-.61.03-.09-.06-.25.001-.06 1.11-.77 1.9-.36h.17l-.41 2.64-.7 4.65-.22 1.42h-.02l-2.54-.39-3.35-.46-1.69-.17-.36-.05-4.05-.66-2.4-.47-4.37-.74.38-2.22 1.26-7.22.1-.56.05.02.96 1.18 1.18.3 1.46.26 2.74.44.35-2.22.22-1.11 3.48.59 2.23.34",
		 '04027':"m108.7 218.2l-2.05 11.1-1.09 5.93-.18-.11-14.5-8.72.36-1.55.03-.05.09-.03.19.04.46-.42.44-.63 1.13.09 1.5-.93.47-.66.09-.33.1-.85-.32-.75-.03-.03-.03-.04 1.55.31 1.09.18 1.08-5.51 3.26.61-.21 1.11 6.58 1.24",
		 '04013':"m110.2 210.3l6.17 1.11 4.65 2.36.42-.26.64-.81.05-.18.44-.67.15.04 4.32 1.34 2.43.41.31-.03.22.1.03.05.06.19.14 2.29 1.58 2.51.27-.22.31-.18.77 2.9-2.23-.34-3.48-.59-.22 1.11-.35 2.22-2.74-.44-1.46-.26-1.18-.3-.96-1.18-.05-.02-.1.56-1.26 7.22-.38 2.22-12.1-2.13 3.51-19",
		 '04005':"m136.6 175.3l6.69 1.05-5.5 35.1-1-.26-1.72-1.35-2.27-1.55-2.99-.86.38-2.12.35-2.11-.42-.07-1.82-.32-.03-.5.31-1.78-2.48-.35-.36-.03-2.95-.5.38-2.24-.95-1.08-5.09-3.21-1.78-1.82-.88-.47-.4-.09-.16-.02h-.15l1.18-5.7.72-1.47 1.56-.69 1.09-.42.6-.08.08.03.45-.05.45-.09 2.41-.72.15-.05.13-.11.33-.39.12-.22.14-.84-.11-.18-.12-.38v-.21l.03-.17.53-1.67.05-.12.67-1.69.99-2.15 11.36 1.91",
		 '04025':"m113.7 190.8h.15l.16.02.4.09.88.47 1.78 1.82 5.09 3.21.95 1.08-.38 2.24 2.95.5.36.03 2.48.35-.31 1.78.03.5 1.82.32.42.07-.35 2.11-.38 2.12-.06.42-.02.02-.26.18-.79.23-.15.06-.74 1.81-.37.95v.03l.07.12 2.21.37.17.32.06.22v.64l-.48.75-2.43-.41-4.32-1.34-.15-.04-.44.67-.05.18-.64.81-.42.26-4.65-2.36-6.17-1.11.75-4.06 2.84-15.44",
		 '06015':"m28.2 83.5l3.55 1.12 2.79.77-.31.51-.42.55-.65.06-.91.81-.73 3.38.09.3.09.83-.05.16-.45.52-.25.17-.53-.15-.37-.5.2-.67-1.05-.34-1.66-.49.16-1.08.04-.73.001-1.44v-.12l-.02-.15-.05-.17.22-2.12.33-1.22",
		 '06093':"m34.57 85.4l2.64.74h.02l.69.14.98.36.41.12.24.07 3.12.88 1.24.31 1.13.31.29.09.51.16 7.7 2.29-.25.57-.09.31-.49 1.81.001.04.05.03-1.17 4.35-.84 3.08-5.16-1.43-2.67-.78-1.95-.52.23-1.31-1.14-.7-2.02.8-1.41 1.46.09.6-.12.21-.22.17-.18-.03-.76-.38-1.3-1.37-.71-1.07-.44-.43-.46-.37.07-2.52-.18-.26-1.48-.44.25-.17.45-.52.05-.16-.09-.83-.09-.3.73-3.38.91-.81.65-.06.42-.55.31-.51",
		 '06025':"m79.9 211.8l6.48 1.36 5.32 1.04 1.38.24 2.14.43-1.08.27-.64 3.91v.02l.22.6.5.35.17.08.94.16.03.04.03.03.32.75-.1.85-.09.33-.47.66-1.5.93-1.13-.09h-.06l-7.97-.95-.16-.02-.91-.11-3.37-.4-1.43-.17-1.05-.12.49-2.13 1.02-3.59.32-1.47.59-2.98",
		 '06065':"m98.8 207.1l-.97 1.37-.3.52-.28.99-.06.42-.31 1.53-.42 1.46-1.3 1.53-2.14-.43-1.38-.24-5.32-1.04-6.48-1.36-2.25-.51-3.32-.72-2.29-.5-4.22-1.01.05-.22-1.12-1-1.51-.35.08-.37 1.38-1.35-.51-.71-.6-.23-.31-.84-.67-1.53.35-.64 1.32-1.14 1.49.34.41.09.09.22 1.38.51 3.07.68 1.35.05 2.62.46 7.59 1.6 5.29 1.12.74-.24 1.36.07 7.19 1.44",
		 '06073':"m65.2 207.5l1.51.35 1.12 1-.05.22 4.22 1.01 2.29.5 3.32.72 2.25.51-.59 2.98-.32 1.47-1.02 3.59-.49 2.13-1-.12-2.06-.25-2.09-.24-2.95-.35-2.83-.35h-.06l-.49-2.15.2-3.19v-.11l.001-.7v-.27l-.13-1.1-.05-.39-.21-.62-.02-.05-.58-1.47-.17-.41-.03-.06-.23-.5-.35-.5-.21-.23-.23-.16 1.24-1.28",
		 '06059':"m63.7 201.3l.91 1.22.67 1.53.31.84.6.23.51.71-1.38 1.35-.08.37-1.24 1.28-.07-.27-.18-.37-.11-.16-1.98-2.48-1.59-1.95-.39-.48.28-.49.58-.73 1.14-.98.48.03.12.03 1.42.32",
		 '06111':"m49.54 185.1l.59.22 1.02.48.14.33.05.35 2.6 1.2.97.24.98 6.9-.07.47-.63 1-1.24-.31-.83.35-1.03.45-.14.36-1.41-1.07-1.55-2.71-1.06-1.37-.25-.31-.13-.06.3-.21.09-.08.2-.63 1.41-5.61",
		 '06079':"m33.2 168.9l11.35 3.11.2.05-.57 2.2 1.11 1.65 1.2 2.47.44 1.29 1.12.3 1.2 1.41.5 1.51-.56 2.21h-.19l-.46-.12-2.29-1.8-1.82-1.47-.59-.55-.19-.23-2.08.6-.68.38-.7.12-.53-.55-.57-.22-1.61-.17.17-.31.001-.02.16-.36.13-.35.06-.21.05-.21.001-.06v-.02l.02-.29v-.001l-.03-.21-.05-.12-.09-.1-.31-.32-.05-.04-.09-.06-.93-2.54-1.73-3.18-1.14-1.76-.18-.18-.1-.13-.16-.57-.04-1.11",
		 '06029':"m51.4 173.7l4.89 1.21 5.54 1.36 4.42 1.03.6.17 3.82.78-.42 1.07-.1.37-.14 1.52-2.19 9.38-.36-.09-12.58-2.94.04.37-.97-.24-2.6-1.2-.05-.35-.14-.33-1.02-.48-.59-.22-.31-.08.56-2.21-.5-1.51-1.2-1.41-1.12-.3-.44-1.29-1.2-2.47-1.11-1.65.57-2.2 6.61 1.69",
		 '06071':"m70.7 178.3l2.6.63 16.64 3.68h.95l2.07 3.11.71 1.06.27.39 3.82 5.72 1.41 2.1-.32 1.43-.02.18v.07l.57 1.48.72 1.13.04.52.67 2.8.66.79.57.64.5.87-.04.56-.02.02-1.35.78-.91.37-1.33.51-7.19-1.44-1.36-.07-.74.24-5.29-1.12-7.59-1.6-2.62-.46-1.35-.05-3.07-.68-1.38-.51-.09-.22-.41-.09-1.49-.34-1.32 1.14-.35.64-.91-1.22-.09-.12-.05-.2.02-.09.27-.33.75-.36.24-.4.6-1 .69-1.5.09-.63.24-1.46.32-1.72.69-2.97.36.09 2.19-9.38.14-1.52.1-.37.42-1.07",
		 '06027':"m64.3 154.5l9.32 2.21 5.18 7.78.19.29 1.1 1.64.64.98 3.4 5.09 2.76 4.14.36.53 1.48 2.22.12.17 2.03 3h-.95l-16.64-3.68-2.6-.63-3.82-.78.49-1.07.17-.6-.05-.85-.29-4.2-.75-4.27-.24-1.92.29-1.27.09-.69-.03-.49-.17-1.58-.13-.27-.76-.82-.2-.02-.78-.55-.03-.03-.09-.19-.5-2.54.03-.78.36-.84",
		 '06107':"m66.2 164.6l.24 1.92.75 4.27.29 4.2.05.85-.17.6-.49 1.07-.6-.17-4.42-1.03-5.54-1.36-4.89-1.21 1.07-4.17.5-1.68.33-.09.26.06.42-1.66-.26-1.24-.45-.11 1.34-.82 1.88-.67 1.29.34 1.89.49.29-1.06 4.43 1.04 1.78.43",
		 '06031':"m53.3 164.8l.45.11.26 1.24-.42 1.66-.26-.06-.33.09-.5 1.68-1.07 4.17-6.61-1.69-.2-.05-.63-1.74 4.46-2.53.7-2.76 1.54.38 1.45.15 1.16-.65",
		 '06039':"m60.2 149.8l.75.2.63.2.14.17.31.62.12 1.34-3.15 1.94-.45.29-.19.19-.12.24-.09.58v.22l-.02.09-.21.48-.15.16-.28.25-.31.17-1.47-.09-.43.07-1.64 1.02-.44.29-.1.08-.71.79-.17.28-.26.25h-.04l-4.33-.14-.62-.12-.71-.58-.39-.63-.1-.24-.05-.16-.04-.24-.28-2.21.82-.49 1.96-.2 1.53.2h1l3.62-2.21 1.09.27.9-.8.23-.82 3.39-2.06.27.59",
		 '06019':"m64.3 154.5l-.36.84-.03.78.5 2.54.09.19.03.03.78.55.2.02.76.82.13.27.17 1.58.03.49-.09.69-.29 1.27-1.78-.43-4.43-1.04-.29 1.06-1.89-.49-1.29-.34-1.88.67-1.34.82-1.16.65-1.45-.15-1.54-.38-.7 2.76-4.46 2.53-2.04-2.5-.64-.91-.04-.73.27-1.35.51-.55.97-2-2.28-4 4.74-2.82.28 2.21.04.24.05.16.1.24.39.63.71.58.62.12 4.33.14h.04l.26-.25.17-.28.71-.79.1-.08.44-.29 1.64-1.02.43-.07 1.47.09.31-.17.28-.25.15-.16.21-.48.02-.09v-.22l.09-.58.12-.24.19-.19.45-.29 3.15-1.94 2.05 2.15",
		 '06053':"m34.1 154.3l-.05.26.1.4.83 1.38.94 1.69.85 2.31 1.36 2.74.62.75 1.9 1.6.27.11h.05l.08-.04.5-.74-.27 1.35.04.73.64.91 2.04 2.5.63 1.74-11.35-3.11-.32-.47-.53-.98.02-.48.001-.23.02-.42-.06-.37v-.05l-1.19-2.56-.27-.47-.51-.58-.14-.13-.1-.001-.06-.04-.1-.13-.06-.14-.25-.59-.09-.21v-.2l.33-3.28.72-.26h.02.16l.13-.05.25-.18.15-.16.11-.13.19-.29.19-.37.5-1.07v-.15l-.06-.47v-.03l1.79-.09",
		 '06069':"m34.1 154.3l.64.09.9-.5.92.19 2 .54-.21.22-.07.1-.03.07.07.19.55 1.19 1.77 1.62.11.19 2.28 4-.97 2-.51.55-.5.74-.08.04h-.05l-.27-.11-1.9-1.6-.62-.75-1.36-2.74-.85-2.31-.94-1.69-.83-1.38-.1-.4.05-.26",
		 '06047':"m48.93 148.3l.49 2.48v.19.04l-.04.04.41 2.45.27.38.73.94h-1l-1.53-.2-1.96.2-.82.49-4.74 2.82-.11-.19-1.77-1.62-.55-1.19-.07-.19.03-.07.07-.1.21-.22-.14-.14-.08-.17v-.07l.14-.5.26-.12.21-.33.14-.69-.05-.17 3.3-1.95.02-.42-.06-.13-.08-.05 1.47-.43 5.27-1.08",
		 '06087':"m30.44 148v.14l.02.07.27.57.53 1.07.26.37.69.61.43.31.87.92 1.2 1.99.07.11-.07.24-.64-.09-1.79.09-.07-.41-.16-.75-.11-.28-.1-.19-.09-.12-.2-.18-.09-.02-.5.12-.45-.02-.23-.03-.16-.04-.08-.04-.03-.02-.14-.08-.11-.06-.39-.44-.39-.56-.29-.7-.24-.73-.03-.54.08-.51.84-.14.88.24.07-.18.19-.71",
		 '06081':"m29.6 142h-.02l-.22 1.32.13.21 1.56 1.64.11.07.27.09.19-.05v-.001l.18.46-1.37 2.2-.19.71-.07.18-.88-.24-.84.14-.08.51.03.54-.08-.13-.27-.45-.37-.69-.04-.13.02-.61.17-3.34.31-1.36.38-1.36 1.08.31",
		 '06001':"m31 139.9h.45l.05.03.3.42.19.6.04.3 1.76 1.81 3.56-.09.73-.08-.41 1.46-.55 2 .07.15.55.84-3.75-1.08-.12-.001-.1.08-.08.04-.35.04-.18-.02-1.24-.42-.16-.23-.18-.46v-2.26l-.78-2.26.18-.87",
		 '06085':"m31.81 145.8l.16.23 1.24.42.18.02.35-.04.08-.04.1-.08.12.001 3.74 1.07-.16.06-.04.68.29 3.3 1.13.98.05.17-.14.69-.21.33-.26.12-.14.5v.07l.08.17.14.14-2-.54-.92-.19-.9.5.07-.24-.07-.11-1.2-1.99-.87-.92-.43-.31-.69-.61-.26-.37-.53-1.07-.27-.57-.02-.07v-.14l1.37-2.2",
		 '06099':"m45.1 141.4l1.84 3.79 1.95 3.19-5.28 1.09-1.47.43.08.05.06.13-.02.42-3.3 1.95-1.13-.98-.29-3.3.04-.68.16-.06 2.66-1.56.47-.3.2-.09 1.14-.3.25.09.5.1.58.07.55-.15.36-1.48.64-2.39",
		 '06043':"m48.93 148.3l.05-.51.09-.13.59-.42 2.93-.61.19.1.85.91.07.13.06.04.29.14.93.25h.32l1.24-.19.16-.08.87-.69.59-.13.95.68.6.69.27.72-3.39 2.06-.23.82-.9.8-1.09-.27-3.62 2.21-.73-.94-.27-.38-.41-2.45.04-.04v-.04-.19l-.49-2.48",
		 '06109':"m58.5 141.5l-.08.06-.11.38-.16 1.18.41.66.3.25.23.15.42.23.36.26.25.19.4.38.28.61.52 2.29-.35 1.13-.54.41-.18.12-.27-.59-.27-.72-.6-.69-.95-.68-.59.13-.87.69-.16.08-1.24.19h-.32l-.93-.25-.29-.14-.06-.04-.07-.13-.85-.91-.19-.1-2.93.61-.59.42-.09.13-.05.51-1.95-3.19 1.76-1.16.74-.73 1.24-1.28 1.19-1.1 1.51-1.31.24-.11.23-.07 1.24-.17 1.09 1.28.15-.07.77-.26.55-.07.39.09.05.04.04.09.32 1.19",
		 '06051':"m60.3 136.8l1.92 2.88 1.29 1.93 5.51 8.28 4.59 6.86-9.32-2.21-2.05-2.15-.12-1.34-.31-.62-.14-.17-.63-.2-.75-.2.18-.12.54-.41.35-1.13-.52-2.29-.28-.61-.4-.38-.25-.19-.36-.26-.42-.23-.23-.15-.3-.25-.41-.66.16-1.18.11-.38.08-.06 1.02-.87.47-1.08-.41-1.5.001-.13.23-.6.43-.56",
		 '06003':"m57.88 133.2l2.38 3.56-.43.56-.23.6-.001.13.41 1.5-.47 1.08-1.02.87-.32-1.19-.04-.09-.05-.04-.39-.09-.55.07-.77.26-.15.07-1.09-1.28-.26-1.1.63-2.43 1.33-.66.25-.18.81-.72.05-.08.07-.36-.001-.25-.11-.24",
		 '06009':"m55.1 139.2l-1.24.17-.23.07-.24.11-1.51 1.31-1.19 1.1-1.24 1.28-.74.73-1.76 1.16-1.84-3.79-.17-2.04.07.08.13.08.78.17 2.38-.75 1.8-.79.47-.24.44.03 3.83.24.26 1.1",
		 '06005':"m55.5 135.7l-.63 2.43-3.83-.24-.44-.03-.47.24-1.8.79-2.38.75-.78-.17-.13-.08-.07-.08-.05-.99.7-2.64.93.11 2.92.99.45.11.72.08 1.98.09.56-.09 2.33-1.3",
		 '06077':"m44.97 139.3l.17 2.04-.64 2.39-.36 1.48-.55.15-.58-.07-.5-.1-.25-.09-1.14.3-.2.09-.47.3-2.66 1.57-.55-.84-.07-.15.55-2 .41-1.46.71-3.5.44-.57 1.09-1.15h.23l.18.07.12.28.19.18.49.12 1.78.21h.07l.69-.24.82.02.05.99",
		 '06013':"m32.1 138l.87.53.5.15 2.13.52.14.001h.13l.09-.06.08-.1.21.57.09.12.25.1.11.03h.39l.44-.13.24-.15.05-.09.03-.18.05-.08.07-.04h.11l.57.1.18.09.03.04-.71 3.5-.73.08-3.56.09-1.76-1.81-.04-.3-.19-.6-.3-.42-.05-.03h-.45l-.39-.28-.37-.84 1.28-.28.21-.1.27-.22.03-.09v-.13",
		 '06017':"m57.4 131.3l.51 1.93.11.24.001.25-.07.36-.05.08-.81.72-.25.18-1.33.66-2.33 1.3-.56.09-1.98-.09-.72-.08-.45-.11-2.92-.99-.93-.11-.41-2.86 1.23-1.47.27-.6.21-.18 1.06-.3 1.36-.22.43.02.07.03.23.14.31.32.11.25.08.14.14.16.59.59.12.07h.08l.48-.09.24-.11.53-.45 2.15.08.57.05.21-.05.14-.06.04-.15.12-.09 1.36.35",
		 '06067':"m41.98 131.6l3.23 1.18.41 2.86-.7 2.64-.82-.02-.69.24h-.07l-1.78-.21-.49-.12-.19-.18-.12-.28-.18-.07h-.23l-1.09 1.15-.44.57-.03-.04-.18-.09-.57-.1h-.11l-.07.04-.05.08-.03.18-.05.09-.24.15-.44.13h-.39l-.11-.03-.25-.1-.09-.12-.21-.57.59.25.96-.09 1.1-1.14.82-1.39.66-.28.2-.12.49-1.01.44-1.78.001-.13-.001-.06-.38-.66-.04-1.27 1.14.33",
		 '06095':"m31 136.4l2.05.59.04-.12-.02-.06h-.04l-.05-.08-.04-.1.03-.11.55-1.56 1.37.38.05-.11.001-.11.001-.23v-.11l-.05-.29-.22-.67v-.06l.02-.09.45-.86.05-.06.45.08 3.41.68.1.17v.04l-.11.46-.61 2.18.98.28-.82 1.39-1.1 1.14-.96.09-.59-.25-.08.1-.09.06h-.13l-.14-.001-2.13-.52-.5-.15-.87-.53-1-1.5-.02-.08",
		 '06075':"m29.6 142l-1.08-.31.001-.21.13-.74.12-.07.46-.09.39.03.18.05.07.1.07.22-.06.77-.06.19-.24.06",
		 '06041':"m25.78 133l.12-.06.82.02.08.02 2.13 2.54 1.13 1.26-.36.94-.37 1.19-.03.1.07.11.17.21.17.28.06.14v.04l-.6.58-.27-.03-.17-.09-.11-.11-3.18-3.65.53-2.81-.03-.24-.11-.33-.04-.11",
		 '06055':"m33.68 127.6l.94.6.49 2.64.12.74.001.27v.94l-.05.06-.45.86-.02.09v.06l.22.67.05.29v.11l-.001.23-.001.11-.05.11-1.37-.38-.55 1.56-.03.11.04.1.05.08h.04l.02.06-.04.12-2.05-.59.39.07.31-.5.02-.3v-.3l-.12-1.04-.69-2.44-.4-1.09.03-.85.17-.56 1.71-.02 1.16-.98.11-.17-.04-.65",
		 '06097':"m22.43 125.6l.39-.02 1.33.001 2.92.24 2.48.75 1.2 2.82-.17.56-.03.85.4 1.09.69 2.44.12 1.04v.3l-.02.3-.31.5-.39-.07.02.08-1 .28-1.13-1.26-2.13-2.54-.08-.02-.82-.02-.12.06-.64-2.27-2.09-3.99-.63-1.12",
		 '06113':"m34.42 127l4.84 1.36 1.58 2.99.04 1.27.38.66.001.06-.001.13-.44 1.78-.49 1.01-.2.12-.66.28-.98-.28.61-2.18.11-.46v-.04l-.1-.17-3.41-.68-.45-.08v-.94l-.001-.27-.12-.74-.49-2.64-.94-.6.74-.6",
		 '06061':"m43.55 128.5l1.43-.12.48.41.1.05 1.35.45.32-.05.62-.62.09-.13.08-.2.09-.09.47-.35.47-.24.71-.36 1.37-.64.51-.12.37-.02 6.14 1.59-.48 1.9-.16.67-.14.57-1.36-.35-.12.09-.04.15-.14.06-.21.05-.57-.05-2.15-.08-.53.45-.24.11-.48.09h-.08l-.12-.07-.59-.59-.14-.16-.08-.14-.11-.25-.31-.32-.23-.14-.07-.03-.43-.02-1.36.22-1.06.3-.21.18-.27.6-1.23 1.47-3.23-1.18.8-2.36.53.14.23-.88",
		 '06057':"m58.6 126.5l-.44 1.62-6.14-1.59-.37.02-.51.12-1.37.64-.71.36-.47.24-.47.35-.09.09-.08.2-.09.13-.62.62-.32.05-1.35-.45-.1-.05-.48-.41.67-2.46.26-.42.88-.61.82-.43.54-.06.23.04.27.13.14-.16.22-.06 1.62.13 1.27-.32.03-.04.14-.12.34-.17.15-.02.71.23.2.25.07.61.21.25.13.07 4.68 1.23",
		 '06091':"m49.62 121.5l.92-.59.13-.47.26-.18.47-.14 1.83 1.43 1.99.5 2.85.76 1.44.17-.92 3.48-4.68-1.23-.13-.07-.21-.25-.07-.61-.2-.25-.71-.23-.15.02-.34.17-.14.12-.03.04-1.27.32-1.62-.13-.22.06-.14.16.96-3.08",
		 '06115':"m48.84 121.9l.78-.36-.96 3.08-.27-.13-.23-.04-.54.06-.82.43-.88.61-.26.42-.67 2.46-1.43.12-.42-.13h-.22l-.67.09-.24.19-.14.15-.001-1.34.45-2.67.06-.19.17-.36.06-.04 1.25.07 1-.07.39-.2 3.62-2.15",
		 '06101':"m42.58 124.2l-.06.04-.17.36-.06.19-.45 2.67.001 1.34.14-.15.24-.19.67-.09h.22l.42.13-.23.88-.53-.14-.8 2.36-1.14-.33-1.58-2.99.38-.75-.34-1.53-.29-.59.09-.62.79-1.44 2.69.86",
		 '06011':"m40.4 122.4l-.46.95-.79 1.44-.09.62.29.59.34 1.53-.38.75-4.84-1.36-.48-.57-.05-.1-.34-1.31.04-.91-.96-1.63-.35-.35-.55-.81-.08-.39.2-.33.4-.43 8.09 2.29",
		 '06033':"m32.3 120.1l-.4.43-.2.33.08.39.55.81.35.35.96 1.63-.04.91.34 1.31.05.1.48.57-.74.6.04.65-.11.17-1.16.98-1.71.02-1.2-2.82-.82-.93-.25-.4-.55-1.45-.17-.74.02-.11.05-.18.22-.52.22-.41.43-.13.42-.47.09-.54-.05-1.77.11-.36.08-.2.28-.61.41-.08.84.28.49-.03.17-.44.06-.19 1.42.41-.33 1.28-.11.36-.31.83",
		 '06007':"m40.3 116.8l-.13-.22.06-.38.4-.46 2.27.61.28.02.3-.16.08-.23.08-.16.15-.16.41-.3 1.74-1.08.48.13.62-.12.12-.07.14-.26.3.09.12.61.001.31-.05.18-.21.21-.8 2.33 1.42 2.58.74 1.58-3.62 2.15-.39.2-1 .07-1.25-.07-2.69-.86.46-.95.84-1.78.001-.05-.4-2.58-.49-1.19",
		 '06021':"m31.88 114.4l8.43 2.42.49 1.19.4 2.58-.001.05-.84 1.78-8.09-2.29.31-.83.11-.36.33-1.28-1.42-.41.3-2.86",
		 '06063':"m47.75 110.2l1.6.44 2.51.67-.64 2.38.12.32.92.82.36.09.2-.05.08-.3.98-.78.35-.1.36.09 1.66 1.24 2.19 2.57.28.37.48 2.09v.39l-.09.36-.48 1.43-.54.64-2.85-.76-1.99-.5-1.83-1.43-.47.14-.26.18-.13.47-.92.59-.78.36-.74-1.58-1.42-2.58.8-2.33.21-.21.05-.18-.001-.31-.12-.61-.3-.09.85-.58.04-.04.07-.11.3-.89-.12-.6-.09-.02-.67-.33-.03-.03-.04-.13v-.09l.07-.86.05-.17",
		 '06103':"m47.75 110.2l-.05.17-.07.86v.09l.04.13.03.03.67.33.09.02.12.6-.3.89-.07.11-.04.04-.85.58-.14.26-.12.07-.62.12-.48-.13-1.74 1.08-.41.3-.15.16-.08.16-.08.23-.3.16-.28-.02-2.27-.61-.4.46-.06.38.13.22-8.43-2.42-.04-.06v-.58l.29-.6.35-.2.1-.23.03-.42-.05-.14-.03-.24.21-1.76.18-.65.05-.05.12-.58v-.13l-.05-.11-.61-.69.83-.1 1.35-.03 1.08.001 2.27.31.61.42.93.3.33.09 1.24.08.93-.03.83.05 1.55.22 1.37.27 1.96.61",
		 '06045':"m22.4 108.8l4.51 1.35-.09.31 5.75 1.68.05.14-.03.42-.1.23-.35.2-.29.6v.58l.04.06-.3 2.86-.06.19-.17.44-.49.03-.84-.28-.41.08-.28.61-.08.2-.11.36.05 1.77-.09.54-.42.47-.43.13-.22.41-.22.52-.05.18-.02.11.17.74.55 1.45.25.4.82.93-2.48-.75-2.92-.24-1.33-.001-.39.02-.46-.82-.69-1.49.55-5.68.03-.22.02-.1.19-.46.22-.47.23-.33.13-.19.17-.18.06-.09.04-.05v-.001l.23-.35.02-.09.19-1.3.03-.32v-2-.03l-.43-1.15-.24-.62-.3-.78",
		 '06023':"m30.96 92.7l1.48.44.18.26-.07 2.52-.16.15-.17.23-.3.59-.02.42.05.09-.05.63-.71.72-.31.27-1.04.84-.29 1.49-2.64 8.87-4.51-1.35-.22-.38-1.91-3.66-.06-.16.24-2.34.03-.06.82-1.18.58-.74.22-.25.4-.42.59-.57.69-.74.38-.41.29-.35.38-.55.42-.73.2-.47-.05-.29 1.21-2.88.92-2.12 1.66.49 1.05.34-.2.67.37.5.53.15",
		 '06105':"m32.54 95.9l.46.37.44.43.71 1.07 1.3 1.37.76.38.18.03.22-.17.12-.21-.09-.6 1.41-1.46 2.02-.8 1.14.7-.23 1.31.19.14.16.17.03.12-.14.51-.07.11-.09.13-1.09.97-.36.13h-.06l-2.59 3.15-1.66 2.09-1.54.71-1.17.95-.14.46.61.69.05.11v.13l-.12.58-.05.05-.18.65-.21 1.76.03.24-5.75-1.68.09-.31 2.64-8.87.29-1.49 1.04-.84.31-.27.71-.72.05-.63-.05-.09.02-.42.3-.59.17-.23.16-.15",
		 '06089':"m50.77 101l1.07.28-.89 3.3-.02.43-1.2 4.35-.37 1.18-1.6-.44-1.96-.61-1.37-.27-1.55-.22-.83-.05-.93.03-1.24-.08-.33-.09-.93-.3-.61-.42-2.27-.31-1.08-.001-1.35.03-.83.1.14-.46 1.17-.95 1.54-.71 1.66-2.09 2.59-3.15h.06l.36-.13 1.09-.97.09-.13.07-.11.14-.51-.03-.12-.16-.17-.19-.14 1.95.52 2.67.78 5.16 1.43",
		 '06035':"m64.3 104.6l-1.03 4-1.16 4.61-.58 2.25-.18.73v.001l-.63 2.4-.97 3.65-.2.73-1.44-.17.54-.64.48-1.43.09-.36v-.39l-.48-2.09-.28-.37-2.19-2.57-1.66-1.24-.36-.09-.35.1-.98.78-.08.3-.2.05-.36-.09-.92-.82-.12-.32.64-2.38-2.51-.67.37-1.18 1.2-4.35.02-.43.89-3.3 12.43 3.3",
		 '06049':"m53.6 90.9l5.22 1.46 1.71.46h.001l3.38.9.36.09 2.66.67-2.64 10.19-12.43-3.3-1.07-.28.84-3.08 1.17-4.35-.05-.03-.001-.04.49-1.81.09-.31.25-.57",
		 '08083':"m172.4 172.2l-.44.39-2.3 2.99-.08.11-.86 1.42-1.36 2.45-.14.37-6.75-.9.88-6.26 1.53-1.72 6.11.81 1.15.13.88.05 1.37.17",
		 '08067':"m172.4 172.2l4.93.61-1 8.25-9.11-1.14.14-.37 1.36-2.45.86-1.42.08-.11 2.3-2.99.44-.39",
		 '08099':"m225.8 169.2l7 .45v.08l-.41 6.8-.07 1.22-7.14-.47.16-2.33h.07l.02-.19.37-5.57",
		 '08011':"m225.8 169.2l-.37 5.57-.02.19h-.07l-.16 2.33-3.32-.24-3.32-.25.67-8.1 6.59.47",
		 '08061':"m221.8 164.4l1.1.05 4.5.35 2.47.14 3.19.21-.28 4.49-7-.45-6.59-.47-1.02-.07.23-3.26.43-.06 2.12.16.78.04.09-1.13",
		 '08017':"m233.4 159.6l-.27 4.53-.07 1.07-3.19-.21-2.47-.14-4.5-.35-1.1-.05.51-5.5 1.11.05 3.33.25 2.14.11 1.46.05 3.05.19",
		 '08063':"m222.9 152.1l3.47.23 7.42.43v.07l-.33 5.65-.06 1.12-3.05-.19-1.46-.05-2.14-.11-3.33-.25-1.11-.05.09-1.15.23-2.07.28-3.63",
		 '08125':"m228.5 141.1l5.97.38-.08 1.18-.28 4.49-.34 5.57-7.42-.43.29-3.87.1-1.76.42-4.52.22-1.12 1.12.08",
		 '08121':"m217.9 146l2.28.18.15-2.14.21-2.37.14-1.12 6.67.47-.22 1.12-.42 4.52-.1 1.76-.29 3.87-3.47-.23-5.44-.43.47-5.63",
		 '08095':"m234.8 137.5l-.05.68-.22 3.34-5.97-.38.42-4 5.81.38",
		 '08115':"m229.5 133.9l5.5.37-.2 3.28-5.81-.38.21-3.28.31.02",
		 '08075':"m220.3 133.2l1.85.14 7 .51-.21 3.28-.42 4-1.12-.08-6.67-.47-1.04-1.22.2-2.31h.06l.3-3.58v-.3",
		 '08087':"m217.9 146l-4.35-.36.61-6.77 3.16.27 1.23.13 1.11.07 1.04 1.22-.14 1.12-.21 2.37-.15 2.14-2.28-.18",
		 '08009':"m221.8 177.1l3.32.24 7.14.47-.22 3.31-.33 5.14-3.19-.22-5.3-.44-1.29-.1-.86-.06.11-1.62.29-3.32h.08l.24-3.39",
		 '08089':"m219.2 168.8l-.67 8.1-6.61-.54.07-1.18.48-5.33.24.09.95.28 1.03.24 2.14.17 1.16-.68.18-1.19 1.02.07",
		 '08025':"m212.9 164.9l5.48.53-.23 3.26-.18 1.19-1.16.68-2.14-.17-1.03-.24-.95-.28-.24-.09.46-4.87",
		 '08073':"m222.9 152.1l-.28 3.63-.23 2.07-.09 1.15-.51 5.5-.09 1.13-.78-.04-2.12-.16-.43.06-5.48-.53.36-4.49 3.34.3.32-3.37.47-5.69h.07l5.44.43",
		 '08039':"m213.3 160.4l.32-3.36-6-.55.54-5.64 9.31.79-.47 5.69-.32 3.37-3.34-.3",
		 '08005':"m206.1 148.4l.83.08.65.06 2.59.27 5.41.43 2.09.19-.19 2.25h-.07l-9.31-.79-3.82-.36.02-.72.001-.11v-.02h.001 1.65l.18-.4-.07-.67.001-.11",
		 '08123':"m215.6 132.8l4.62.38v.3l-.3 3.58h-.06l-.2 2.31-1.11-.07-1.23-.13-3.16-.27-.61 6.77-8.09-.73.04-.32-.41-.04-.06.32-.3-.02.3-3.39.09-1.13 1.08.1.12-1.14.69-7.25 8.59.73",
		 '08001':"m205.3 144.9l8.32.74 4.35.36-.28 3.38-2.09-.19-5.41-.43-2.59-.27-.65-.06-.83-.09.94-.93.73.02.08-.69-.55-.06-1.24.93-1.55-.06.15-1.59.3-.14.1-.68.18.02",
		 '08031':"m204.5 147.6l1.54.07 1.25-.93.54.07-.09.67-.72-.02-.94.93-.001.22.07.67-.18.4h-1.65l.04-.47.02-.19.13-1.41",
		 '08035':"m204.3 150.5l3.82.36-.54 5.64-3.66-.35-2.92-.28 3.31-5.38",
		 '08041':"m213.3 160.4l-.36 4.49-8.86-.76.15-1.69.11-.78.1-1.12-.8-1.01.22-2.08.06-1.3 3.66.35 6 .55-.32 3.36",
		 '08119':"m201 155.9h.001l2.92.28-.06 1.3-.22 2.08.8 1.01-.1 1.12-.11.78-1.67-.13-1.3-.13.03-.31-.42-.37-.43-.05.54-5.59",
		 '08101':"m204 164.1l8.86.76-.46 4.87-.48 5.33-2.83-1.32-2.88-1.34-3.45-.09-.41-.32-.17-.16.43-4.43 1.09.1.31-3.38",
		 '08071':"m209.1 173.8l2.83 1.32-.07 1.18 6.61.54 3.32.25-.24 3.39h-.08l-.29 3.32-.11 1.62-9.4-.7-7.38-.62-2.73-.25-1.57-.18.38-3.85h.39l3.85-1.09.44-.35 1.83-2.09 1.22-1.8 1.01-.72",
		 '08055':"m197.9 171.7l.54.14h.05l1.18-.31 1.57-.75.94 1.09.17.16.41.32 3.45.09 2.88 1.34-1.01.72-1.22 1.8-1.83 2.09-.44.35-3.85 1.09h-.39l.35-1.52-.37-2.61-.95-.68-.06-.001-.72.13-.76.28-.48.4.51-2.22.03-1.88",
		 '08023':"m194.5 178.4l2.89-2.59.48-.4.76-.28.72-.13.06.001.95.68.37 2.61-.35 1.52-.38 3.85-.67-.06-5.07-.51-.4-.44-.06-.14-.001-.12.06-.26.28-.49.2-.64.24-1.56-.09-1.06",
		 '08021':"m191.6 177.5l2.94.88.09 1.06-.24 1.56-.2.64-.28.49-.06.26.001.12.06.14.4.44-2.93-.3-4.78-.49-.1-.29-1.33-2.78-.28-.2.26-2.26 6.45.74",
		 '08003':"m197.9 173.6l-.51 2.22-2.89 2.59-2.94-.88.48-4.49 5.86.56",
		 '08105':"m185.6 171.2l1.07.13-.12 1.12 5.51.59-.48 4.49-6.45-.74-.33-.04.17-1.52.36-1.82.27-2.2",
		 '08027':"m195.2 166.6l2.5.26 2.06.28 2.92.3-.43 4.43-.94-1.09-1.57.75-1.18.31h-.05l-.54-.14-.26-.39-.92-1.51-.52-1.53-.14-.28-.91-1.39",
		 '08043':"m200.4 161.5l.43.05.42.37-.03.31 1.3.13 1.67.13-.46 5.07-1.09-.1-2.92-.3-2.06-.28-2.5-.26-1.89-2.57 1.12-.77.29-.59.12-.49v-.06l-.05-.18-.29-.79-.03-.04-.18-.13-.24-.09 2.32.22 2.87.25 1.19.12",
		 '08109':"m190.9 164.1l2.39-.06 1.89 2.57.91 1.39.14.28.52 1.53.92 1.51.26.39-.03 1.88-5.86-.56-5.51-.59.12-1.12-1.07-.13-.07-.53-1.64-1.32-.11-.09-.73-.19-.31.16-.05.05.28-2.47.42-3.6 7.51.88",
		 '08015':"m188.5 155.5l3.82.44.05.25.56 1.32.41.16h.05l.05-.06.03-.06.07-.02.24.03.54.52.17.34.14 1.24-.35.91-.27.28.24.09.18.13.03.04.29.79.05.18v.06l-.12.49-.29.59-1.12.77-2.39.06-.73-1-.77-2.14-.05-.47.35-1.56.09-.19.09-.05.03-1.23-1.69-1.16.3-.75",
		 '08051':"m180.8 152l.09.76.19.36.61.78 2 .23.14.02.61.72v.25l.18.3.6.54.78.28.25.02.19-.09.39-.47.05-.21.47-.12h.07l.87.85 1.69 1.16-.03 1.23-.09.05-.09.19-.35 1.56.05.47.77 2.14.73 1-7.51-.88-.42 3.6-5.68-.68-.42-2.08 1.35.17.57-4.73.86-7.09 1.11-.37",
		 '08097':"m183.7 150.9l6.75.82-1.93 3.76-.3.75-.87-.85h-.07l-.47.12-.05.21-.39.47-.19.09-.25-.02-.78-.28-.6-.54-.18-.3v-.25l-.61-.72-.14-.02-2-.23-.61-.78-.19-.36-.09-.76-.19-1.46 3.12.37",
		 '08065':"m192.6 151.8l.7.08-.19.2-.38.65-.07.39-.05.9v.93l-.16.79-.13.26-3.82-.44 1.93-3.76h2.19",
		 '08093':"m200.8 150.2l-.55 5.65.67.07-.54 5.59-1.19-.12-2.87-.25-2.32-.22.27-.28.35-.91-.14-1.24-.17-.34-.54-.52-.24-.03-.07.02-.03.06-.05.06h-.05l-.41-.16-.56-1.32-.05-.25.13-.26.16-.79v-.93l.05-.9.07-.39.38-.65.19-.2 1.15.3 1.73-1.74.39-.64 4.24.42",
		 '08059':"m204.7 146l-.08.8-.08.8-.13 1.41-.02.19-.04.47h-.001v.02l-.001.11-.02.72-3.31 5.38h-.001l-.67-.07.55-5.65.24-2.34.22-2.15 2.78.27-.03.12.38.04",
		 '08047':"m198.6 145.2l1.71.18h.62l.38.06-.02.28-.22 2.15-1.42-.59-.26-.35-.48-.5-.56-.22.25-1.03",
		 '08019':"m198.3 146.2l.56.22.48.5.26.35 1.42.59-.24 2.34-4.24-.42.58-.46v-.07l-.05-.26-.09-.09-.24.001-.88-.47-.14-.16.05-.33.19-.33.92-.68.59-.06.22-.09.5-.41.08-.16",
		 '08117':"m191.2 144.5l.38.05 1.59.58.94.78.35.5.1.57.03.52.27.49.29.1h.51l.22-.11-.05.33.14.16.88.47.24-.001.09.09.05.26v.07l-.58.46-.39.64-1.73 1.74-1.15-.3-.7-.08-.28-1.88-1.2-4.36-.05-.38.07-.67",
		 '08037':"m189.3 144.3l1.88.21-.07.67.05.38 1.2 4.36.28 1.88h-2.19l-6.75-.82.83-7.14.8.1 3.96.37",
		 '08013':"m198.6 145.2l.65-4.21.99.09 1.45.19 3.38.27-.3 3.39-.08.73-.34-.04-.26.37-2.8-.26.02-.28-.38-.06h-.62l-1.71-.18",
		 '08049':"m189.3 144.3l.11-.97.44-4.42-.04-1.36.3.84.08.1 1.5.56 2.03.51.41.001 2.14-.1.72-.54.6-1.08 1.66 3.12-.65 4.21-.25 1.03-.08.16-.5.41-.22.09-.59.06-.92.68-.19.33-.22.11h-.51l-.29-.1-.27-.49-.03-.52-.1-.57-.35-.5-.94-.78-1.59-.58-.38-.05-1.88-.21",
		 '08069':"m195 130.9l8.8.9 3.21.31-.69 7.25-.12 1.14-1.08-.1-.09 1.13-3.38-.27-1.45-.19-.99-.09-1.66-3.12-.49-1.15-.37-1.67-.45-1.18-.11-.22-.94-1.57-.19-1.16",
		 '08057':"m188.6 130.1l5.15.63 1.25.15.19 1.16.94 1.57.11.22.45 1.18.37 1.67.49 1.15-.6 1.08-.72.54-2.14.1-.41-.001-2.03-.51-1.5-.56-.08-.1-.3-.84-.1-.41-.18-1.37v-.47l.66-1.96.09-.05.17-.16.03-.17v-.19l-.2-.56-.12-.17-.18-.18-.67-.37-.07-.03-.05.04-.15.08-.45-.43-.12-.44v-.2l.15-.33.04-.04",
		 '08107':"m184.2 129.6l4.43.52-.04.04-.15.33v.2l.12.44.45.43.15-.08.05-.04.07.03.67.37.18.18.12.17.2.56v.19l-.03.17-.17.16-.09.05-.66 1.96v.47l.18 1.37.1.41.04 1.36-.44 4.42-.11.97-3.96-.37.2-2.24.2-1.73-3.9-.44.14-1.44.46-2.66.63-.63.32-.001.24.03.15-1.21.44-3.99",
		 '08081':"m178.4 128.9l5.77.7-.44 3.99-.15 1.21-.24-.03-.32.001-.63.63-.46 2.66-.14 1.44v.04h-.08l-2.64-.37-3.94-.47-8.97-1.21.79-5.54.6-4.47 7.67 1.03 3.19.38",
		 '08103':"m181.8 139.5l3.9.44-.2 1.73-2.72-.31-.16 1.17-.13 1.1-1.24.98-2.89-.35-2.06-.22-.21 1.69-2.73-.36-2.22-.09-1.15.23-3.34-.45-.04-.14-1.47-.2 1-7.24 8.97 1.21 3.94.47 2.64.37h.08v-.04",
		 '08045':"m185.5 141.6l-.2 2.24-.8-.1-.83 7.14-3.12-.37-15.91-2.07.23-1.69.29-2.1 1.47.2.04.14 3.34.45 1.15-.23 2.22.09 2.73.36.21-1.69 2.06.22 2.89.35 1.24-.98.13-1.1.16-1.17 2.72.31",
		 '08029':"m179.7 152.4l-.86 7.09-8.71-1.09.27-2.08 4.3-2.47 1.18-.07 1.87-.08.48-.48.33-.21 1.14-.6",
		 '08077':"m164.7 148.5l15.91 2.07.19 1.46-1.11.37-1.14.6-.33.21-.48.48-1.87.08-1.18.07-4.3 2.47-.27 2.08-.29 2.17-6.76-.91.39-2.83.39-2.37.07-.5.34-2.34.43-3.11",
		 '08085':"m170.1 158.4l8.71 1.09-.57 4.73-1.35-.17.08-.3-.04-.09-4.95-.62-.001.14.34.91.75.09.27.12.33.33.09.11-.08.58-.12.27-.19-.02-10.74-1.43.44-4.49 6.76.91.29-2.17",
		 '08111':"m175.2 169l.13.1.23.12h.05l.34-.1.15-.07.14-.12v-.03l-.03-.11v-.07l.06-.37.73.09.36 4.3-4.93-.61.12-.36.36-.45.55-.1.26-.46.05-.25 1.44-1.52",
		 '08033':"m173.8 170.6l-.05.25-.26.46-.55.1-.36.45-.12.36-1.37-.17-.88-.05-1.15-.13-6.11-.81-1.53 1.72.72-5.1 2.22.31.04-.11.24-.04 5.39.73.15.26.05.21v.23l.14.31 1.58-.08.44-.13.25.09.64.52.5.63",
		 '08113':"m162.6 164.1l10.74 1.43v.1l.09.39.36 1.22.08.2.06.06.32.21.33.1.27.18.34.37.13.32-.05.24-.04.07-1.44 1.52-.5-.63-.64-.52-.25-.09-.44.13-1.58.08-.14-.31v-.23l-.05-.21-.15-.26-5.39-.73-.24.04-.04.11-2.22-.31.48-3.5",
		 '08091':"m176.9 164l.42 2.08-.29 2.35-.73-.09-.06.37v.07l.03.11v.03l-.14.12-.15.07-.34.1h-.05l-.23-.12-.13-.1.04-.07.05-.24-.13-.32-.34-.37-.27-.18-.33-.1-.32-.21-.06-.06-.08-.2-.36-1.22-.09-.39v-.1l.19.02.12-.27.08-.58-.09-.11-.33-.33-.27-.12-.75-.09-.34-.91.001-.14 4.95.62.04.09-.08.3",
		 '08053':"m177.3 166.1l5.68.68-.28 2.47-.72-.07-.69.13-.38 2.86-.001 1.59-.29 2.22-3.57-.42.34-2.8-.36-4.3.29-2.35",
		 '08079':"m182.7 169.3l.05-.05.31-.16.73.19.11.09 1.64 1.32.07.53-.27 2.2-.36 1.82-.17 1.52v.1l-4.23-.44.05-.4.29-2.22.001-1.59.38-2.86.69-.13.72.07",
		 '08007':"m177 175.6l3.57.42-.05.4 4.23.44v-.1l.33.04-.26 2.26.28.2 1.33 2.78.1.29-1.43-.15-2.57-.28-1.31-.25-4.27-.5-.62-.08.66-5.45",
		 '08014':"m204 146.1l.04-.11.26-.37.35.04.08-.73.3.02.06-.32.4.04-.03.32-.23-.02-.04.26-.18-.02-.1.68-.53.25-.38-.04",
		 '09003':"m510.6 96.2l4.63-1.09.43 1.06 1.77 3.79.03.07.05.3-.46.36-.56-.7-1.12.37-.76.36-.2.7-2.34-.23-.81-1.92.61-.26.05-2.24-1.3.41-.03-.96",
		 '09005':"m510.2 96.3l.42-.09.03.96 1.3-.41-.05 2.24-.61.26.81 1.92-1 1.24-1.72 1.22-.03.17.02.11.08.08.12.08-.02.03h-.13l-.51-.14-.76-.26-.08-.15-.18-.3-.5-1.06-.08-.09-.26-.05-.88-4.9 4.05-.86",
		 '09001':"m507.3 103.9l-.31-1.79.26.05.08.09.5 1.06.18.3.08.15.76.26.51.14h.13l.02-.03.35.13.76.25 1.68 1.19-.03.63-.12.27-.02.1.03.61.03.06.15.1-.65.18-1.63 1.23-2.24 1.9-.06.11-.03.14-1-1.3.7-.72.06-.06.31-2.08-.16-.91-.35-2.06",
		 '09009':"m514.4 101.4l.33 1 .68.71.35-.17.13.09.42.47 1.13 1.4-.5-.03-.31.08-1.3.39-.81.34-.44.06-.21-.26-.08.03-1.1 1.28-.15.21-.18.33-.001.05v.001l-.15-.1-.03-.06-.03-.61.02-.1.12-.27.03-.63-1.68-1.19-.76-.25-.35-.13-.12-.08-.08-.08-.02-.11.03-.17 1.72-1.22 1-1.24 2.34.23",
		 '09007':"m517.1 100.7l2.18 3.49-1.78.73-1.13-1.4-.42-.47-.13-.09-.35.17-.68-.71-.33-1 .2-.7.76-.36 1.12-.37.56.7",
		 '09011':"m523.3 98.9l.24 3.62-1.19.33-2.43 1.13-.51.2-.1.001-.09-.02-2.18-3.49.46-.36 1.23-1.82.61.35.33.16 1.98-.2.84-.35.65-.11.14.54",
		 '09013':"m519 94.3l.25.87-.89.23-.19.06.39 1.55.44.25.39.63-.27.32-.37.37-1.23 1.82-.05-.3-.03-.07-1.77-3.79-.43-1.06 3.47-.82.32-.06",
		 '09015':"m521.9 93.8l1.01 3.54.28 1.06-.65.11-.84.35-1.98.2-.33-.16-.61-.35.37-.37.27-.32-.39-.63-.44-.25-.39-1.55.19-.06.89-.23-.25-.87.4-.08 2.41-.57.06.19",
		 '10003':"m494.3 130.3l-.35 1.25-.21-.04-.44.65-.17.43v.07l.04.12.04.11.51 1.23 1.1 1.5-2.21 1.4-.28-1-1.16-4.33 1.54-1.87 1.84.07-.24.42",
		 '10005':"m494.9 145.3l-.69-2.44 1.36-.35.56-.51.03-.19.16-.39.78-.56.75-.42.08.35.11.13.9.72.51.39.36.14.27.05.2-.05.14-.11.02-.08.25.53.6 1.76.44 1.52.11.44-2.86.63-.14.03-.38.09-.16.03-.14.03h-.04l-.5.09-.21.04-.59.11-.29.06h-.04l-.69.12-.3.05-.12-.41-.11-.37-.13-.49-.26-.93",
		 '10001':"m492.6 137l2.21-1.4.85.5.43.56.08.12.24.61.03.21.99 2 .47.8-.75.42-.78.56-.16.39-.03.19-.56.51-1.36.35-1.46-5.21-.18-.64",
		 '12005':"m411.1 264.9l.46 4.69.41 3.54-1.16-.35-.25-.1-.08-.05-.31-.22-.39-.36-2.44-1.42-.18-.1-.13-.07-.12-.07-.19-.1-.42-.22-.18-.09-.14-.07-.17-.07-.21-.1-.18-.07-.67-.24-.13-1.55.27-.3 1.19-.52 3.38-.32.67-.07-.17-1.67.56-.06.56-.05",
		 '12063':"m409.4 259.5l5.33-.65 1.95 3.52-.59 1.43-1.82.2-.78.59-.84.14-1.48.15-.56.05-.28-2.79-.85-.48-1.06.11.88-2.25.11-.02",
		 '12015':"m454.4 305l5.66-.87.47 3.33-5.7.85.02-.41-.13-.71-.2-1-.04-.14-.17-.08-.36.06-.1.06-.54.48-.06.09.26 1.78-.03.06-.5.08-.13-.12h-.03l-.07.12-.07.25h-.16l-.05-.18-.05-.17-.03-.05-1.49-1.81 1.38-.19-.1-.76-.05-.35 2.27-.32",
		 '12051':"m460.5 307.5l4.53-.69 2.6-.42.3-2.51 1.32 7.87.16.93-4.47.79-.37-2.13-.19-1.19-3.35.57-.52-3.23",
		 '12021':"m469.4 312.6l.64 3.51.35 2.18-5.46.9-.08-.16-.05-.06-.54-.3-.29-.12-.09-.03-1.12-.24h-.14l-1.35.25-.11.07-.1.12-.001.13-.03.24-.04.15h-.08l-.06-.06-.73-1.04-1.01-1.73-.12-.47-.08-.32-.3-1.05-.25-.71-.19-.4-.001-.02.33.12 1.86-.3.9-1.49-.19-1.14 3.35-.57.19 1.19.37 2.13 4.47-.79",
		 '12011':"m469.2 311.7l6.72-1.11.55-.09 2.04-.17.24 4.43-.84.17-.45.09-.37.08-.36.16-1.66.36-2.78.45-1.16-.09-1.12.18-.64-3.51-.16-.93",
		 '12099':"m467.9 303.8l5.73-.93.12-.02 2.66-.42.68-.3.2.45.22.47.19.42.3.76.19 1.2.16 1.12.06.55.13 2.99-.02.2-2.04.17-.55.09-6.72 1.11-1.32-7.87",
		 '12115':"m454 302.8l.32 2.22-2.27.32.05.35.1.76-1.38.19-2.04-3.08-.12-.17-.17-.23-.11-.15-.52-.64-.29-.3-.61-.61 4.46-.6.31 2.25 2.25-.31",
		 '12027':"m459.4 300.2l.6 3.88-5.66.87-.55-3.87 2.25-.32 1.24-.23 2.12-.33",
		 '12043':"m466.8 300.8l1.17 3.07-.3 2.51-2.6.42-4.53.69-.47-3.33 3.39-.51-.18-1.12.95-1.3 2.57-.42",
		 '12085':"m475.1 298.7l1.99 3.46-.68.3-2.66.42-.12.02-5.73.93 1.87-3.5 2.99-.49 1.49-.25-.11-.73.97-.16",
		 '12111':"m469.1 295.9l4.07-.66 2 3.48-.97.16.11.73-1.49.25-2.99.49-.74-4.44",
		 '12061':"m466.4 292.9l4.07-.65.56-.52.06-.08 2.06 3.59-4.07.66-1.11.18-.18-1.07-1.08.18-.31-2.29",
		 '12093':"m463.6 295.7l3.06-.48 1.08-.18.18 1.07 1.11-.18.74 4.44-1.87 3.5-1.17-3.07-.97-.97-1.13-.88-1.25-2.12.23-1.14",
		 '12055':"m458.8 296.4l4.79-.7-.23 1.14 1.25 2.12 1.13.88.97.97-2.57.42-.95 1.3.18 1.12-3.39.51-.6-3.88-.59-3.87",
		 '12049':"m453.3 297.2l5.58-.84.59 3.87-2.12.33-1.24.23-2.25.32-.56-3.9",
		 '12081':"m447.6 298.1l5.69-.84.56 3.9.23 1.65-2.25.31-.31-2.25-4.46.6-.65-.61-.36-.67.3-.14.39-.25.75-1.21.05-.09.08-.39",
		 '12103':"m445.5 291.5l.41 2.62-.76.21-.04.04-.03.1.07.15.13.08 1.23.54.46-.2.06.32-.15.56-.95 2.43-.57-.8-1.23-3.08v-.03l.05-.67.03-.58-.11-.92-.09-.21-.06-.09-.2-.23 1.74-.26",
		 '12057':"m445.5 291.5l6.17-.87.56-.08.6 3.88.4 2.77-5.69.84 1.15-1.71.02-.05.25-.61.06-.33-.19-.56-.16-.22-1.71-.6h-.41l-.34.06-.32.09-.41-2.62",
		 '12053':"m444.6 284.9l2.56-.37.06.37 1.74-.28.02.25.15.21.45.51.23.14 1.45.36.38.59-2.24.33.08.55-4.36.64-.43.06-.1-3.37",
		 '12101':"m451.7 286.7l.3 2.11-.3 1.86-6.17.87-1.74.26.97-3.52.43-.06 4.36-.64-.08-.55 2.24-.33",
		 '12097':"m456.4 287.7l8.95-1.4.22 1.27.31 2.05-.07.001.54 3.31.31 2.29-3.06.48-.1-.45-.08-.32-.59-.87-.34-.48-2.51-2.3-.8-.62-2.62-1.85-.17-1.11",
		 '12105':"m456.4 287.7l.17 1.11 2.62 1.85.8.62 2.51 2.3.34.48.59.87.08.32.1.45-4.79.7-5.58.84-.4-2.77-.6-3.88-.56.08.3-1.86 1.04-.58 3.39-.54",
		 '12095':"m458.3 281.7l-.36 1.04.04.28.59.52 1.1.22 3.77-.63 1.93 3.14-8.95 1.4-.85-5.47.11-.1.11-.02.16-.02 2.36-.36",
		 '12117':"m458.3 281.7l.34-1.27.61.48 1.46.33.24.04h.07l.37-.18.11-.25.83.69.37.47.73 1.13-3.77.63-1.1-.22-.59-.52-.04-.28.36-1.04",
		 '12069':"m454.8 275.8l2.06 2.07.76.5.47.26.45.35.03.04.14.66-.06.7-.34 1.27-2.36.36-.16.02-.11.02-.11.1.85 5.47-3.39.54-1.12-7.81 3.31-.5.02-1.33-.45-2.72",
		 '12119':"m447.9 281l4-.59 1.12 7.81-1.04.58-.3-2.11-.38-.59-1.45-.36-.23-.14-.45-.51-.15-.21-.02-.25.05-.56.04-.12.14-.24.23-.31.21-.06.04-.04.12-.41v-.05l-1.42-1.28-.47-.57",
		 '12017':"m445.2 280.3l2.66.71.47.57 1.42 1.28v.05l-.12.41-.04.04-.21.06-.23.31-.14.24-.04.12-.05.56-1.74.28-.06-.37-2.56.37-.19-1.91-.07-.41-.08-.16-1.49-1.14.07-.13.11-.14.29-.28.21-.05h.17l.69.16.66-.39.2-.15v-.03",
		 '12075':"m443 273.8l2.93.62.53 3.42-1.48.22.31 2.16v.03l-.2.15-.66.39-.69-.16h-.17l-.21.05-.29.28-.11.14-.07.13.02-.43-.12-.34-.67-1.11-.27-.12-4-1.14.9-.8.48-.86.24-.82.4-1.72 3.17-.1",
		 '12083':"m445.9 274.5l2-.28.2.22-.02.14.82.36.83-.35.14-.09v-.03l-.06-.38.29-.34.24-.13.76-.3 1.8.1.31.71.56.67.5.53.53.54.45 2.72-.02 1.33-3.31.5-4 .59-2.66-.71-.31-2.16 1.48-.22-.53-3.42",
		 '12127':"m454.3 275.3l2.61-1.36.2.27.26 1.45.93-.16h.04l1.99-.36-.26-1.38.47-.75.85 1.42.69 1.06.53.82.32.43.94 1.16 2.08 2.51-2.64.44.4 2.23-.26.05-.73-1.13-.37-.47-.83-.69-.11.25-.37.18h-.07l-.24-.04-1.46-.33-.61-.48.06-.7-.14-.66-.03-.04-.45-.35-.47-.26-.76-.5-2.06-2.07-.53-.54",
		 '12009':"m463.4 283.1l.26-.05-.4-2.23 2.64-.44 2.06 2.18.02.03.09.09.02.03.82 1.5v.1l-.38.24-.1.14-.12.24v.06.001l-.04.19-.03.35.02.36.04.32.16.67.32.98.44 1 .31.56.25.38.33.51.02.03.93 1.27-.06.08-.56.52-4.07.65-.54-3.31.07-.001-.31-2.05-.22-1.27-1.93-3.14",
		 '12133':"m405.8 263.7l.07-.86.06-.29.77-.07.2.17.03.37 1.29-.11.12-.89v-.11l-.03-.14 1.06-.11.85.48.28 2.79-.56.06.17 1.67-.67.07-3.38.32-1.19.52-.27.3.4-.76.38-1.87-.17-.19-.05-.39.51-.89.14-.09",
		 '12059':"m403.4 260.2l5.89-.68-.88 2.25.03.14v.11l-.12.89-1.29.11-.03-.37-.2-.17-.77.07-.06.29-.07.86-2.13.21-.36-3.7",
		 '12131':"m401.7 260.3l1.67-.17.36 3.7 2.13-.21-.14.09-.51.89.05.39.17.19-.38 1.87-.4.76.13 1.55-4.6-.94-.7-7.91 2.21-.22",
		 '12091':"m399.5 260.6l.7 7.91-4.47.34-.6-7.85 1.06-.08 3.31-.32",
		 '12113':"m391 261.3l4.15-.37.6 7.85-1.3.33-1.8.29-.82-.5-1.39-2.53-.57-1.36-.17-.46-.04-.21-.13-.96.03-.19.21-.76.08-.13.49-.43.67-.55",
		 '12033':"m386.2 261.8l4.8-.46-.67.55-.49.43-.08.13-.21.76-.03.19.13.96.04.21.17.46.57 1.36 1.39 2.53.82.5 1.8-.29-2.56.8-.1.02-.07.02-.39.1-.26.05-.42.08-1.73.41-1.01.29.71-.32.15-1.41.11-2.82-.02-.21-.04-.15-.14-.22-.5-.31-.37-.19-.19-.03-.06-.02-.35-.24-1.12-1.22-.14-.25.25-1.73",
		 '12013':"m411.1 264.9l1.48-.15.84-.14.78-.59 1.82-.2-.53 1.2-.37 2.38-.52 1.85-3.04.33-.46-4.69",
		 '12045':"m411.6 269.6l3.04-.33 1.34 2.81.13 1.75-.61.87-.17-.03-.98.97-.1.22-1.05.09-.03-1.28-.03-.14-.17-.28-.64-.81-.27-.25-.04-.04-.41-3.54",
		 '12037':"m421.2 270.9l2.34.37.08.22.03.12.03.1v.02.14l-.06.18-.06.04-.32.09-.51-.07-.12-.03-.12-.08-.11-.19-.65.24-.26.12-1.61 1.24-.73.61-.63.47-.61.39-1.21.39-.48.11-.4-.06-.33.04-.22.06-1.04.39.1-.22.98-.97.17.03.61-.87-.13-1.75.13-.57 5.14-.57",
		 '12029':"m439.6 270.9l.22 3-.4 1.72-.24.82-.48.86-.9.8-.2-.7-.39-.59-.22-.31-.27-.13h-.27l-.52-.24-.88-.45-.26-.14-.03-.07-.36-1.8.77-2.14 4.42-.63",
		 '12041':"m439.9 270.1l.8-.7 1.75 1.08.5 3.38-3.17.1-.22-3 .34-.86",
		 '12001':"m443.7 268.8l1.26.05.31.44.12.04 1.41.24.62-.05.13-.07.07-.001.52.05.16.04.99.93.12.25-.02.15.45 3.15.06.38v.03l-.14.09-.83.35-.82-.36.02-.14-.2-.22-2 .28-2.93-.62-.5-3.38 1.23-1.62",
		 '12107':"m454.4 268.6l1.06 2.66 1.43 2.69-2.61 1.36-.5-.53-.56-.67-.31-.71-1.8-.1-.76.3-.24.13-.29.34-.45-3.15h.06l.27-.13.99-.7.05-.23.08-.09 1.02-.73.17-.03 2.39-.4",
		 '12035':"m455.4 271.2l3.35-1.15 1.72 2.9-.47.75.26 1.38-1.99.36h-.04l-.93.16-.26-1.45-.2-.27-1.43-2.69",
		 '12109':"m452.7 265.2l.6-.25h.25l.74.23 1.16-.2-.33-1.87.63-.11 1.34 3.49.95 2.26.02.04.14.29.1.23.45.82-3.35 1.15-1.06-2.66-1.64-3.42",
		 '12019':"m452.7 265.2l1.64 3.42-2.39.4-.17.03-1.02.73-.08.09-.05.23-.99.7-.27.13-.8-5.4-.08-.56 1.11-.16 2.31-.38.31-.07.35-.05.13.88",
		 '12007':"m447.6 265.6l1.03-.15.8 5.4h-.06l.02-.15-.12-.25-.99-.93-.16-.04-.52-.05-.07.001-.13.07-.62.05-1.41-.24-.12-.04-.31-.44.48-.22.7-.38 1.19-1.68.33-.64.02-.14-.08-.18",
		 '12125':"m447.6 265.6l.08.18-.02.14-.33.64-1.19 1.68-.7.38-.48.22-1.26-.05.43-2.6 3.48-.59",
		 '12121':"m440 264.2l.66 5.16-.8.7-.69-.82-.43-.42-.19-.13-1.13-.73-.53-.25-.56-.06-.05.13-.17.11-.34-.08-.14-.11-.4-.92-.15-.83v-.07l.05-.03.63-1.7.09-.38.03-.05.34-.24.41-.13.89.02.56.11 1.92.73",
		 '12067':"m435.2 265.9l-.05.03v.07l.15.83.4.92.14.11.34.08.17-.11.05-.13.56.06.53.25 1.13.73.19.13.43.42.69.82-.34.86-4.42.63-.37.06-.32-.92-.58-4.65 1.32-.18",
		 '12123':"m433.9 266.1l.58 4.65.32.92.37-.06-.77 2.14-.38-.1-1.11-.45-.12-.11-.1-.12-.39-.53v-.06l-.08-.24-.13-.19-.57-.68-.51-.35-.09-.06-1.22-.53-.66-.19-1.04-.47-.72-.42 1.54-3.05 3.88-.52.07.56 1.13-.15",
		 '12129':"m418.9 267.4l5.14-.67.12.36 1.83-.22.28 2.28-1.88.27-1.02.5-.18.1-.03.44.1.47.03.03.24.29-2.34-.37-.73-.43-.35-.24-.48-.62-.97-1.71.08-.31.14-.17",
		 '12077':"m419.5 266.2l-.6 1.22-.14.17-.08.31.97 1.71.48.62.35.24.73.43-5.14.57-.13.57-1.34-2.81.52-1.85.37-2.38.53-1.2 3.49 2.42",
		 '12039':"m422 262l1.11-.08-.45 1.22-.51 1.51-.05.11-.16.14-.22.09-1.48.75-.69.46-3.49-2.42.59-1.43h.001l5.34-.36",
		 '12073':"m426.1 261.7l-.13 1.97-.23 1.16.25 2.06-1.83.22-.12-.36-5.14.67.6-1.22.69-.46 1.48-.75.22-.09.16-.14.05-.11.51-1.51.45-1.22 2.19-.15.85-.06",
		 '12065':"m429 261.5l1.46-.1.1.15.1.72-.32.42-.88.95-.64 1.88-.08.62-1.54 3.05-.96-.03-.53-4.33.23-1.16.13-1.97 2.92-.2",
		 '12079':"m433.3 261.2l.53-.03.5.22.52 1.74.31.59.07.06.56.35-.63 1.7-1.32.18-1.13.15-.07-.56-3.88.52.08-.62.64-1.88.88-.95.32-.42-.1-.72-.1-.15 2.82-.19",
		 '12047':"m435.8 261.1l4.96-.34-.25.49v.23l.05.36.22.26.63.67.07.1.11.31v.12l-.3.77-.07.09-.59.29-.52-.05-.04-.13-1.92-.73-.56-.11-.89-.02-.41.13-.34.24-.03.05-.09.38-.56-.35-.07-.06-.31-.59-.52-1.74-.5-.22 1.92-.13",
		 '12023':"m441.9 260.6l1.38-.1.83 5.7-.43 2.6-1.23 1.62-1.75-1.08-.66-5.16.04.13.52.05.59-.29.07-.09.3-.77v-.12l-.11-.31-.07-.1-.63-.67-.22-.26-.05-.36v-.23l.25-.49 1.17-.09",
		 '12003':"m443.7 260.5l2.26-.14.32 1.81.11.29.21.3.23.18.07.001 1.26-.24.18 1.13.24 1.66-1.03.15-3.48.59-.83-5.7.45-.03",
		 '12031':"m448.4 263.8l2-2.79.94-1.28.24-.22.11-.06.77-.33 1.26.05.17.02.73.59.21.14.19.16.31 1.01.13.77.12.46.13.37.1.25-.63.11.33 1.87-1.16.2-.74-.23h-.25l-.6.25-.13-.88-.35.05-.31.07-2.31.38-1.11.16-.16-1.1",
		 '12089':"m454.2 257.3l.41 2.54-.73-.59-.17-.02-1.26-.05-.77.33-.11.06-.24.22-.94 1.28-2 2.79-.18-1.13.06-.89.06-.88v-.86l-.14-.4-.34-.44-.17-.26-.05-.27.1-1.39 1.21-.7.47.32 1.72.37 1.3.14.69-.03.94-.11.17-.02",
		 '13241':"m428.4 204.9l-.23 1.03-.96.74-.69 1.26-.17.97-3.31-.96.78-2.32.68-.11 3.89-.61",
		 '13281':"m419.8 206.2l4-.59-.78 2.32-.27.33-1.02.23-.05-.32-.38-.9-.31-.18-.31.02-.64-.36-.33-.32.06-.24",
		 '13205':"m425 251.8l.53 4.7-1.24.14-2.85.35-1.44.18v-.54l.17-.44.06-.09 1.31-1.88 1.33-1.03.57-1.14 1.55-.24",
		 '13007':"m420.3 252.5l3.15-.44-.57 1.14-1.33 1.03-1.31 1.88-.06.09-.17.44v.54l-.38.04-1.36-2.17-.22-2.25 2.26-.31",
		 '13201':"m418.2 255.1l1.36 2.17-2.05.38-2.11.21-.23-2.36 2.33-.23.69-.14v-.03",
		 '13099':"m415.9 252.2l2.09.63.22 2.25v.03l-.69.14-2.33.23.23 2.36-1.09.09-.12-.26-.08-.15-.52-.57-.08-.02h-.09l-.1-.05-.11-.26-.15-.91.08-.33.12-.34.14-2.75.24.4.25-.03.21-.07.3-.12 1.5-.25",
		 '13253':"m415.4 257.8l2.11-.21-.19.47.2 1.92-.08.65-.34.64-.43.28-.16.33-.02.2.12.26h-.001l-1.95-3.52-.32-.93 1.09-.09",
		 '13087':"m421.4 257l.56 4.98-5.34.36-.12-.26.02-.2.16-.33.43-.28.34-.64.08-.65-.2-1.92.19-.47 2.05-.38.38-.04 1.44-.18",
		 '13131':"m424.3 256.7l.14 1.27.16.35.15.19.22.21.34 3.09-2.19.15-1.11.08-.56-4.98 2.85-.35",
		 '13275':"m425.5 256.5l2.99.13.55 4.86-2.92.2-.85.06-.34-3.09-.22-.21-.15-.19-.16-.35-.14-1.27 1.24-.14",
		 '13027':"m431.4 256.4l.99 2.55-.29.31-.32.68v.05l.42.62.18.13 1 .54-2.82.19-1.46.1-.55-4.86 1.7-.75 1.17.45",
		 '13071':"m430.5 252.6l-.26 3.28-1.7.75-2.99-.13-.37-3.3 3.77-.43 1.55-.16",
		 '13075':"m431.3 252.2v.41l.07.2.07.1.6.42.18.06.9 1.93.26.8-1.98.2-1.17-.45.26-3.28.82-.4",
		 '13173':"m435.8 253.8l.83-.12.55 4-.49.33-.14-.69-.29-.52-1.5.17-.33-.94-.05-.38.19-1.22 1.39-.19v-.05l-.07-.22-.11-.18",
		 '13185':"m433.3 256.1l1.07-.12.33.94 1.5-.17.29.52.14.69-.89 3.05-1.92.13-.53.03-1-.54-.18-.13-.42-.62v-.05l.32-.68.29-.31-.99-2.55 1.98-.2",
		 '13101':"m437.2 257.7l1.43.26.13.2.16.45.32.35.16.08.29.08.41-.02.22-.03h.44l.73.05.19.08.11.11.04.07.12 1.27-1.17.09-4.96.34.89-3.05.49-.33",
		 '13065':"m436.6 253.7l3.27-.44.99 1.68.38.38.69.51 1.18 1.69.23 1.49.21 1.14.19.38-.45.03-1.38.1-.12-1.27-.04-.07-.11-.11-.19-.08-.73-.05h-.44l-.22.03-.41.02-.29-.08-.16-.08-.32-.35-.16-.45-.13-.2-1.43-.26-.55-4",
		 '13003':"m440 250.8l-.14 2.37-3.27.44-.83.12-.1-.54-.27-1.17-.5-.39-.51-.54-.02-.03-.02-.22 1.98-.23 1.46.3.17.17 2.06-.28",
		 '13019':"m434.2 250.2l.15.65.02.22.02.03.51.54.5.39.27 1.17.1.54.11.18.07.22v.05l-1.39.19-.19 1.22.05.38-1.07.12-.26-.8-.9-1.93-.18-.06-.6-.42-.07-.1-.07-.2v-.41l.83-1.75 2.1-.23",
		 '13155':"m435.4 247.4l-1.25 2.79-2.1.23-1.97-1.27.24-2.17.9-.11.62.91.69.25.97-.09.62-.3 1.28-.25",
		 '13277':"m428.6 249.7l1.58-.54 1.97 1.27-.83 1.75-.82.4-1.55.16-.35-3.05",
		 '13321':"m424.9 246.6l1.56.38.05.03.08.51.24 1.77.86-.1.1.03.33.22.41.34.35 3.05-3.77.43-.16-1.4-.56-2.62.53-2.64",
		 '13095':"m421.4 249.9l2.99-.74.56 2.62-1.55.24-3.15.44-.51-2.35 1.66-.21",
		 '13037':"m418.7 250.3l1.05-.14.51 2.35-2.26.31-2.09-.63-.16-1.52 2.95-.37",
		 '13061':"m412 249l1.96-.19.33 1.96 1.44-.11.16 1.52-1.5.25-.3.12-.21.07-.25.03-.24-.4-1.2-2.99-.19-.25",
		 '13239':"m412.5 246.2l1.79.63-.34 1.95-1.96.19.51-2.77",
		 '13243':"m417.1 246.6l.61-.07.19 1.9.38.15.49.91.04.44-.04.25-.03.1-2.95.37-1.44.1-.33-1.95.34-1.95 2.73-.26",
		 '13273':"m421.2 249.1l.19.87-1.66.21-1.05.14.03-.1.04-.25-.04-.44-.49-.91-.38-.15-.19-1.9 1.61-.81 1.29 1.07.65 2.29z",
		 '13177':"m425 245.7l-.08.84-.53 2.64-2.99.74-.19-.87-.65-2.29-.07-.55 4.51-.5",
		 '13081':"m424.4 244.2l3.81-.46.26 2.24-1.98.91-1.56-.38.08-.84-.61-1.47",
		 '13287':"m428.5 246l1.44-.1.45 1.11-.24 2.17-1.58.54-.41-.34-.33-.22-.1-.03-.86.1-.24-1.77-.08-.51-.05-.03 1.98-.91",
		 '13017':"m429.9 245.9l3.28-.45 2.09.59.16 1.38-1.28.25-.62.3-.97.09-.69-.25-.62-.91-.9.11-.45-1.11",
		 '13069':"m435.3 246.1l1.66-.7.25 1.85 2.27-.33.19 1.46.35-.05.15 1.14-.15 1.4-2.06.28-.17-.17-1.46-.3-1.98.23-.15-.65 1.25-2.79-.16-1.38",
		 '13005':"m440.6 246.2l.84.46.51.27.73.19 1.25.62.11.12.09.19-.14.02-.59.57.04.32-.41.55-.8.29-2-.4-.15-1.14-.35.05-.19-1.46 1.08-.65",
		 '13305':"m445.5 244l.93.36 3.79 2.7.59 1.03-.92 1.75-.39-.17-.44-.14-.51.2-.78.23-1.21-.09-.12-.08-1.19-1.1-.57-3.86.41-.68.41-.14",
		 '13229':"m444.1 248.1l1.13.61 1.19 1.1.65.76-.03.28-.14.16-1.81 1.22h-.03l-1.01-.14-1.84-2.23.8-.29.41-.55-.04-.32.59-.57.14-.02",
		 '13025':"m449.8 249.8l-.07 2.1-.6.89-.7.22-.19.09-.07.11-.05.52-1.42-.15-.09.87-.56.08-2.06-2.49 1.01.14h.03l1.81-1.22.14-.16.03-.28-.65-.76.12.08 1.21.09.78-.23.51-.2.44.14.39.17",
		 '13299':"m440.2 249.4l2 .4 1.84 2.23 2.06 2.49-3.11.42.35 2.79 2.66-.33.32.04-.31 2.88-2.26.14-.19-.38-.21-1.14-.23-1.49-1.18-1.69-.69-.51-.38-.38-.99-1.68.14-2.37.15-1.4",
		 '13049':"m448.2 253.8l.76 2.83-1.21.7-.1 1.39.05.27.17.26.34.44.14.4v.86l-.06.88-.06.89-1.26.24-.07-.001-.23-.18-.21-.3-.11-.29-.32-1.81.31-2.88-.32-.04-2.66.33-.35-2.79 3.11-.42.56-.08.09-.87 1.42.15",
		 '13039':"m453.5 253.4l.65 3.89-.17.02-.94.11-.69.03-1.3-.14-1.72-.37-.47-.32-.76-2.83.05-.52.07-.11.19-.09.7-.22.6-.89.04.15.03.05.89.27.52.02 2.28.94",
		 '13127':"m454.9 249.5l-1.39 3.84-2.28-.94-.52-.02-.89-.27-.03-.05-.04-.15.07-2.1.92-1.75v.04l.59.56.75.45 1.53.29 1.09.13.18-.04",
		 '13191':"m451.7 244.7l.36.1.54.38.28.07.79-.33.59.02.32.1.2.09.36.3.04.09.02.36-.29 3.63-.18.04-1.09-.13-1.53-.29-.75-.45-.59-.56v-.04l-.59-1.03 1.55-2.34",
		 '13149':"m410.9 227.7l1.12 2.49-3.04 1.59-1.04-3.77 2.96-.31",
		 '13143':"m406.3 222l1.24-.12.59-.15 1.72-.18.26 1.18-.05.72-.76.83-1.63.81-.51.05-.87-3.15",
		 '13233':"m409.6 219.1l1.33.03-.39 1.76-.75.07.07.62-1.72.18-.59.15-1.24.12-.22-.79-.41-1.47 1.73-.18-.02-.22 2.22-.26",
		 '13115':"m408.6 212.8l.96 2.43.07.59v1.74l-.22.02.15 1.51-2.22.26.02.22-1.73.18-.72-2.6.79-.08.56-1.23.55-.32.84-.63.09-.26.45-1.78.41-.04",
		 '13055':"m408.2 212.9l-.45 1.78-.09.26-.84.63-.55.32-.56 1.23-.79.08-.88-3-.23-.82 4.4-.48",
		 '13313':"m409 207.5l1.74-.2-.21.83-.66 2.88-.03.43.36.55-1.41.32-.15-1.25-1.24.13.001-.11.17-.53.12-.69.66-.2.25-.51.4-1.44-.03-.19h.03",
		 '13047':"m406 207.9l2.97-.37.03.19-.4 1.44-.25.51-.66.2-.12.69-1.58-2.66",
		 '13295':"m406 207.9l1.58 2.66-.17.53-.001.11 1.24-.13.15 1.25-.14.48-.41.04-4.4.48-.13-.44.39-.64.29-1.2-.06-.49.24-1.47.4-1.03 1.03-.14",
		 '13083':"m405 208.1l-.4 1.03-.24 1.47.06.49-.29 1.2-.39.64-.85-3-.41-1.58 1.39-.14 1.13-.12",
		 '13183':"m447.5 241.2l.27.33.6 1.23.03.14 1.54 1.19 1.66.6h.09l-1.55 2.34-3.79-2.7 1.13-3.12",
		 '13001':"m443.4 243.2l2.07.82-.41.14-.41.68.57 3.86-1.13-.61-.09-.19-.11-.12-1.25-.62-.73-.19-.51-.27-.84-.46-.22-1.64.96-.13-.18-1.29-.06-.35 2.33.35",
		 '13161':"m441.1 242.8l.06.35.18 1.29-.96.13.22 1.64-1.08.65-2.27.33-.25-1.85 1.88-1.6 1.03-.67.65-.25.54-.02",
		 '13259':"m416.6 242.6l.1-.02.11.09.09.73.07.87v.94l.15 1.39-2.73.26-1.79-.63-.03-.96 1.17-2.31 2.87-.36",
		 '13307':"m416.7 242.6l.31-.04.9.65.23.28.5.16.57-.06.13 2.15-1.61.81-.61.07-.15-1.39v-.94l-.07-.87-.09-.73-.11-.09",
		 '13261':"m421.7 242l1.75.54.95 1.71.61 1.47-4.51.5.07.55-1.29-1.07-.13-2.15-.04-.41 2.58-1.14",
		 '13315':"m431 242.4l1.78 2.44.4.63-3.28.45-1.44.1-.26-2.24-.14-1.15 1.28-.17.58-.17.19-.13.45-.05.12.03.33.26",
		 '13271':"m435.4 241.4l3.43 2.34-1.88 1.6-1.66.7-2.09-.59-.4-.63 2.59-3.42",
		 '13309':"m437.3 238.9l.73.04.1.02.09.26.38 1.29.08.69.32 1.02.11.2.05.08.69.62-1.03.67-3.43-2.34.36-.84 1.55-1.69",
		 '13091':"m430.6 240.3l1.97-2.24 2.08 3.31 1.06-.78-.36.84-2.59 3.42-1.78-2.44.27-.3.03-.1.07-.6-1.01-.78.26-.33",
		 '13235':"m430.6 240.3l-.26.33 1.01.78-.07.6-.03.1-.27.3-.33-.26-.12-.03-.45.05-.19.13-.58.17-1.28.17-.36-2.17 1.07-1.62 1.85 1.44",
		 '13093':"m427.7 240.5l.36 2.17.14 1.15-3.81.46-.95-1.71 1.74-1.78 2.52-.3",
		 '13193':"m423 238.2l1.91.26.27 2.28-1.74 1.78-1.75-.54-1.01-1.73 1.92-2.19.4.15",
		 '13249':"m419.5 240.1l1.21.19 1.01 1.73-2.58 1.14-.1-.85.13-.61.19-.28-.21-1.49.34.17zm0 0",
		 '13197':"m416.3 238.7l2.03-.6.79 1.83.21 1.49-.19.28-.13.61.1.85.04.41-.57.06-.5-.16-.23-.28-.9-.65-.31.04-.1.02-.23-3.91",
		 '13053':"m416.3 238.7l.23 3.91-2.87.36.03-.04.09-.41-.11-.22-.27-.22-.72-.19-.07-.08-.02-.11.12-.46 1.12-.59 1.19-.34.69-1.35.59-.28",
		 '13215':"m411.4 238.3l1.89-.22.04.31 2.29-.28.1.84-.69 1.35-1.19.34-1.12.59-.3-1.78-1.03-1.15",
		 '13269':"m419.8 235.5l.99.63 2.4 1.78-.52.17-1.92 2.19-1.21-.19-.34-.17-.79-1.83 1.4-2.59",
		 '13263':"m417.2 234.1l.1-.04.23.06.73.47.17.22.13.26.03.1.1.08.54.2.55.09-1.4 2.59-2.03.6-.59.28-.1-.84-.46-3.34 2-.73",
		 '13145':"m413.4 234.6l1.77.15.46 3.34-2.29.28-.04-.31-1.89.22-.78-1.72-.69-1.53 3.45-.43",
		 '13285':"m412 230.2l.87.33.49 4.1-3.45.43-.87-3-.08-.27 3.04-1.59",
		 '13045':"m410.1 222.8l1.49.23 1.3 2.55-.35.86-1.62 1.31-2.96.31-.19-.69-.6-2.15.51-.05 1.63-.81.76-.83.05-.72",
		 '13223':"m410.9 219.1l1.96-.19.19 1.7.17-.02.2 1.82-1.83.55-1.49-.23-.26-1.18-.07-.62.75-.07.39-1.76",
		 '13213':"m412.7 207.1l.23 1.71.41.31.03.04v.04l-.23.39-.28.31-.13.59.25 1.87-2.8-.33-.36-.55.03-.43.66-2.88.21-.83.36-.05 1.61-.2",
		 '13129':"m410.2 212l2.8.33.05.44.22 1.75-3.67.7-.96-2.43.14-.48 1.41-.32",
		 '13015':"m413.2 214.6l.45 4.32-2.79.27-1.33-.03-.15-1.51.22-.02v-1.74l-.07-.59 3.67-.7",
		 '13067':"m413.7 218.9l2.54-.25.43.97-.38 1.57-.12.5-.06.19-.67.84-.37.38-1.65-.62-.2-1.82-.17.02-.19-1.7.83-.08",
		 '13097':"m411.6 223l1.83-.55 1.65.62-.67 1.07-1 .64-.41.47-.09.13-.001.17-1.3-2.55",
		 '13077':"m412.5 226.4l2.58-.19.15 1.33.69.66.48.59.25.42v.47l-3.8.84-.87-.33-1.12-2.49 1.62-1.31",
		 '13199':"m416.8 230.2l.001 2.77.35 1.12-2 .73-1.77-.15-.49-4.1 3.8-.84.11.48",
		 '13231':"m416.8 230.2l.45-.39.62-.07.24.21 1.34-.15.08 2.57-2.71.6-.001-2.77",
		 '13293':"m419.5 232.3l1.66.56.12 1.06-.58 2.15-.99-.63-.55-.09-.54-.2-.1-.08-.03-.1-.13-.26-.17-.22-.73-.47-.23-.06-.1.04-.35-1.12 2.71-.6",
		 '13079':"m421.3 234l2.49-.3 2.31 1.74-2.98 2.5-2.4-1.78.58-2.15",
		 '13225':"m423.1 237.9l2.98-2.49.06 2.07-.02.14-.68 1.05-.2.13-.11.02-.25-.35-1.91-.26-.4-.15.52-.17",
		 '13153':"m426.1 235.4l1.16.21 1.43 2.58.08.65-1.07 1.62-2.52.3-.27-2.28.25.35.11-.02.2-.13.68-1.05.02-.14-.06-2.07",
		 '13023':"m432.6 238.1l-1.97 2.24-1.85-1.44-.08-.65 2.69-2.08 1.22 1.94",
		 '13175':"m431.4 236.1l2.67-1.98 1-.24.87.26 1.39.78.1 1.14.31.1-.43 2.72-1.55 1.69-1.06.78-2.08-3.31-1.22-1.94",
		 '13319':"m429.4 231.9l1.95-1.23.16-.13h.16l.73.68.58.95.48.17.18.11.29.45.15.53-.02.67-2.67 1.98-2.47-3.77.48-.43",
		 '13289':"m427.9 233.2l1.05-.84 2.47 3.77-2.69 2.08-1.43-2.58.08-.97.69-.9.11-.33-.29-.24",
		 '13021':"m425.6 232.1l.22.44.45.32.64-.08.38.08.61.35.29.24-.11.33-.69.9-.08.97-1.16-.21-2.31-1.74 1.77-1.59",
		 '13009':"m429.8 228.4l.22-.02 1.72.23.03.05v.08l-.001.1-.06.04-.04.11-.04.48.03.11.23.34.27-.23.19-.24v1.75l-.73-.68h-.16l-.16.13-1.95 1.23-1.21-3.23 1.65-.24",
		 '13169':"m428.2 228.7l1.21 3.23-.48.43-1.05.84-.61-.35-.38-.08-.64.08-.45-.32-.22-.44-1.42-2.15 2.82-.89 1.22-.34",
		 '13207':"m421.6 229.3h2.38l.14.61 1.42 2.15-1.77 1.59-2.49.3-.12-1.06.74-.08.08-.23-.39-3.28",
		 '13171':"m421.6 229.3l.39 3.28-.08.23-.74.08-1.66-.56-.08-2.57 1.3-.35.88-.11",
		 '13255':"m417.7 227.9l.36-.04 2.77.37-.07 1.25-1.3.35-1.34.15-.24-.21-.62.07-.45.39-.11-.48v-.47l1.02-1.37",
		 '13113':"m415.1 226.2l1.53-.82 1.06 2.46-1.02 1.37-.25-.42-.48-.59-.69-.66-.15-1.33",
		 '13063':"m418.4 223.9l.22.18.1.63.001.43-.14 1.5-.09.12-.51.23.09.8-.36.04-1.06-2.46 1-1.39.73-.08",
		 '13035':"m422.5 226l.78.98.75 2.36h-2.38l-.88.11.07-1.25 1.65-2.21",
		 '13151':"m418.4 223.9l1.03-.11 1.68 1.35 1.4.8-1.65 2.21-2.77-.37-.09-.8.51-.23.09-.12.14-1.5-.001-.43-.1-.63-.22-.18",
		 '13089':"m417.9 219.9l3 2.3-.31.38-.61 1.32-.61-.11-1.03.11-.73.08-.11-.95-.09-.78-.001-.12-.26-2.18.75-.05",
		 '13121':"m417.8 217l1.92 1.53-1.74 1.43-.75.05.26 2.18.001.12.09.78.11.95-1 1.39-1.53.82-2.58.19.35-.86.001-.17.09-.13.41-.47 1-.64.67-1.07.37-.38.67-.84.06-.19.12-.5.38-1.57-.43-.97 1.51-1.66",
		 '13057':"m417.5 214.5l.06.59.23 1.92-1.51 1.66-2.54.25-.45-4.32 4.21-.1",
		 '13227':"m413 212.8l.98-.14 1.98-.22.25-.22.02.19.4 1 .66-.08.13 1.11-4.21.1-.22-1.75",
		 '13085':"m417.7 211.3l.11.18 2.49 2.09.37 1.06-3.17.38-.06-.59-.13-1.11-.66.08-.4-1-.02-.19 1.47-.9",
		 '13117':"m417.5 215l3.17-.38-.84 2.28-.17 1.55-1.92-1.53-.23-1.92",
		 '13135':"m422.5 217.1l.53 2.51-1.7 2.1-.39.48-3-2.3 1.74-1.43.17-1.55 2.65.19",
		 '13247':"m422.1 222.2l-1.01 2.97-1.68-1.35.61.11.61-1.32.31-.38.39-.48.78.45",
		 '13159':"m426.7 225.6l.32 3.39-2.82.89-.14-.61-.75-2.36 1.66-2.28 1.73.97",
		 '13217':"m422.1 222.2l2.72 1.57.1.91-1.66 2.28-.78-.98-1.4-.8 1.01-2.97",
		 '13297':"m423 219.6l1.64.1 1.64.94-1.48 3.08-2.72-1.57-.78-.45 1.7-2.1",
		 '13013':"m422.5 217.1l.42.52.18.11 1 .2.26-.03h.87l.12.07.38.81-1.06.92-1.64-.1-.53-2.51",
		 '13157':"m426.7 215.7l.72 1.96-1.74 1.21-.38-.81-.12-.07h-.87l-.26.03-1-.2-.18-.11-.42-.52 1.8-2.43.33.27.22.14.13.05.46-.09.39-.13.66.49.27.23",
		 '13059':"m427.5 217.6l1.15.39h-.09l-.06.6v.04l.05.11.44.44-.27.77-2.97-1.15 1.74-1.21",
		 '13219':"m424.7 219.7l1.06-.92 2.97 1.15.09 1.12-1.22.99-1.26-1.39-1.64-.94",
		 '13211':"m427.6 222.1l1.71 2.58-2.61.99-1.73-.97-.1-.91 1.48-3.08 1.26 1.39",
		 '13237':"m426.7 225.6l2.61-.99 1.45 1.48.15.09.08.07.02.04-.09.42-.43.34-.29.15-.22.24-.12.77v.13l.02.05-1.65.24-1.22.34-.32-3.39",
		 '13141':"m433.9 224.5l.34.18.57 1.43.45.68.11.18-.31.05-.73.64-.11.22-.09.37-.07.21-.11.15-1.06.77-.47.07-.19.24-.27.23-.23-.34-.03-.11.04-.48.04-.11.06-.04.001-.1v-.08l-.03-.05-1.72-.23-.22.02-.02-.05v-.13l.12-.77.22-.24.29-.15.43-.34.09-.42-.02-.04-.08-.07-.15-.09 1.41-1.68 1.75.09",
		 '13265':"m432.3 221l.78 1.18.15.16h.02l1.31-.14.82.11-.35.54-1 .87-.35.55-.001.05.17.26-1.75-.09-.21-2.91.42-.58",
		 '13133':"m431.9 221.5l.21 2.91-1.41 1.68-1.45-1.48-1.71-2.58 1.22-.99 3.13.47",
		 '13221':"m431.5 217l2.2.64-.67.5-.22.26-.57 1.03-.4.89v.06l.49.56-.42.58-3.13-.47-.09-1.12.27-.77-.44-.44-.05-.11v-.04l.06-.6h.09l1.23-.78h.08l.15.09.58.17.14.02.71-.45",
		 '13317':"m433.7 217.7l1.38-.38 2.39 4.18-1.74.65-.31.16-.82-.11-1.31.14h-.02l-.15-.16-.78-1.18-.49-.56v-.06l.4-.89.57-1.03.22-.26.67-.5",
		 '13301':"m435.7 222.1l.65 1.29.97 1.81.47.14 1.27.16-.44.55-.78-.27-.68-.21-.32.12-1.64 1.12-.45-.68-.57-1.43-.34-.18-.17-.26.001-.05.35-.55 1-.87.35-.54.31-.16",
		 '13189':"m438 221.2l-.1.13v.17l.18 1.01.71.99.96 1.16.19.13-.55.63-.32.05-1.27-.16-.47-.14-.97-1.81-.65-1.29 1.74-.65.56-.22",
		 '13125':"m435.2 226.8l1.64-1.12.32-.12.68.21.78.27-.37.38-1.07 1.18.04.12.09.55-.86.03-1.12-1.31-.11-.18",
		 '13163':"m439.1 225.5l.32-.05 1 .44.06.001.09.07.29.33-.22 1.05-.07.57-.02.63.08.32.12.37.23.89-.13.78-.14.59-1.12 1.13-1.04-.63-.24-1.41-.48-1h-.03l-.39-.2-.44-.33-.18-.24-.3-.51.86-.03-.09-.55-.04-.12 1.07-1.18.37-.38.44-.55",
		 '13303':"m436.5 228.3l.3.51.18.24.44.33.39.2h.03l.48 1 .24 1.41-.9.45-.59.27-1.18.02-.32-.15-1.46.86-.15-.53-.29-.45-.18-.11-.48-.17-.58-.95v-1.75l.47-.07 1.06-.77.11-.15.07-.21.09-.37.11-.22.73-.64.31-.05 1.12 1.31",
		 '13167':"m439.6 232.6l-1.83 3.53-.31-.1-.1-1.14-1.39-.78-.87-.26-1 .24.02-.67 1.46-.86.32.15 1.18-.02.59-.27.9-.45 1.04.63",
		 '13283':"m437.7 236.2l1.62-.04.28.08.95.4.1.09-.02.63-.09.51-2.55 1.09-.73-.04.43-2.72",
		 '13209':"m440.6 237.8l-.07 5-.65.25-.69-.62-.05-.08-.11-.2-.32-1.02-.08-.69-.38-1.29-.09-.26-.1-.02 2.55-1.09",
		 '13279':"m440.6 237.8l1.96.17.74 2.21.1 2.96-2.33-.35-.54.02.07-5",
		 '13179':"m448.1 240.7l.38-.6.93.42 1.92.64.79.27.09.15.35.83.02.09v.04l.12.1.82.6 1.24.6.07.02-.04.1.22.2.29.09.07-.04.02-.06.03-.02.11-.02.1.04.08.53.05.4-.19.72-.11.21-.06.001-.18-.13-.02-.36-.04-.09-.36-.3-.2-.09-.32-.1-.59-.02-.79.33-.28-.07-.54-.38-.36-.1h-.09l-1.66-.6-1.54-1.19-.03-.14-.6-1.23-.27-.33.61-.52",
		 '13109':"m444.9 238.2l.63.04 2.24 1.19.8.7-.38.6-1.38.18-1.04-.25-.86-2.45",
		 '13267':"m442.5 238l2.31.18.86 2.45 1.04.25 1.38-.18-.61.52-1.13 3.12-.93-.36-2.07-.82-.1-2.96-.74-2.21",
		 '13043':"m444.3 234.9l.69.24.75 1.17-.17 1.64-.09.31-.63-.04-2.31-.18-.22-.53.48-1.54.26-.65.66-.61.57.19",
		 '13107':"m442.6 231.6l1.92 2.41-.18.91-.57-.19-.66.61-.26.65-.48 1.54.22.53-1.96-.17.09-.51.02-.63-.1-.09-.95-.4-.28-.08-1.62.04 1.83-3.53 1.12-1.13 1.88.03",
		 '13051':"m454.6 237.4l.06.25.1.52.14.56.05.05.61.24 2 .38.37.04.1.02.05.16v.11l-.04.2-.11.27-1.81 2.91-.08.11-.51.58-.08.04-.25-.05-.36-1.09-.5-1.31-1.25-.83-.9-.8-.23-.26 2.62-2.06",
		 '13029':"m447.7 239.4l3.55-1.7.76 1.78.23.26.9.8 1.25.83.5 1.31.36 1.09-.41.09-.07-.02-1.24-.6-.82-.6-.12-.1v-.04l-.02-.09-.35-.83-.09-.15-.79-.27-1.92-.64-.93-.42-.8-.7",
		 '13031':"m446.1 233.2l3.45 1.56 1.69 2.99-3.55 1.7-2.24-1.19.09-.31.17-1.64-.75-1.17-.69-.24.18-.91 1.64-.8",
		 '13165':"m442.6 231.6l-.05-.09.14-.86.39-.49 2.32-.82.36.05.46.15.11.08.1.14-.28 3.45-1.64.8-1.92-2.41",
		 '13103':"m451.1 233.1l1.13.45.21.08.96.79 1.14 2.32.14.69-2.62 2.06-.76-1.78-1.69-2.99 1.48-1.62",
		 '13251':"m446.4 229.7l2.14-2.11 2.05 3.62.47 1.88-1.48 1.62-3.45-1.56.28-3.45",
		 '13033':"m440.4 225.9l.97-.53h.07l.35.2.08.15.64.24h1.04l.88-.57.43.1 1 .76 1.8.84.88.49-2.14 2.11-.1-.14-.11-.08-.46-.15-.36-.05-2.32.82-.39.49-.14.86.05.09-1.88-.03.14-.59.13-.78-.23-.89-.12-.37-.08-.32.02-.63.07-.57.22-1.05-.29-.33-.09-.07-.06-.001",
		 '13245':"m442.4 222l.18.16.09.09.5.48.72.83.25.98.7.99-.43-.1-.88.57h-1.04l-.64-.24-.08-.15-.35-.2h-.07l-.97.53-1-.44.55-.63 2.46-2.85",
		 '13073':"m440.1 220.5l1.23 1.08 1.04.44-2.46 2.85-.19-.13-.96-1.16-.71-.99-.18-1.01v-.17l.1-.13 2.12-.78",
		 '13181':"m435.1 217.3l.91.25 1.59.95.07.02.15-.06h.05l.92.46.28.2.66.54.43.81-2.12.78-.56.22-2.39-4.18",
		 '13105':"m433.3 213.5l.4 1.03 1.88 2.31.44.67-.91-.25-1.38.38-2.2-.64-1.39-2.21 3.17-1.29",
		 '13195':"m429.7 214.3l.46.55 1.39 2.21-.71.45-.14-.02-.58-.17-.15-.09h-.08l-1.23.78-1.15-.39-.72-1.96.45-.41 2.46-.98",
		 '13011':"m426.3 212.3l.86 2.99-.45.41-.27-.23-.66-.49-.39.13-.46.09-.13-.05-.22-.14-.33-.27-.17-1.75 1.54-.86.68.17",
		 '13139':"m423.5 212.1l.67.86.17 1.75-1.8 2.43-2.65-.19.84-2.28-.37-1.06 1.28-1.3 1.86-.22",
		 '13187':"m421.1 209.5l.5 2.77-1.28 1.3-2.49-2.09.25-.63.81-.16.87-.81 1.36-.37",
		 '13123':"m412.9 208.8l2-.23.6.07.46.29.24.18.74 1 .63.91.11.31-1.47.9-.25.22-1.98.22-.98.14-.05-.44-.25-1.87.13-.59.28-.31.23-.39v-.04l-.03-.04-.41-.31",
		 '13111':"m415.8 206.7l2-.23-.42.45-.04.07v.07l.62 1.74.2.13.2-.06-.05 1.36-.27.64-.25.63-.11-.18-.11-.31-.63-.91-.74-1-.24-.18-.46-.29-.6-.07-2 .23-.23-1.71 3.12-.38",
		 '13291':"m419.1 206.3l.72-.09-.06.24.33.32.64.36.31-.02.31.18.38.9.05.32-.68 1.01-1.36.37-.87.81-.81.16.27-.64.05-1.36-.2.06-.2-.13-.62-1.74v-.07l.04-.07.42-.45 1.29-.16",
		 '13311':"m421.8 208.5l1.02-.23.56.32.07.12.07.32.41 2.46-.45.58-1.86.22-.5-2.77.68-1.01",
		 '13137':"m423.1 208l3.31.96.21.35-.93 2.83-1.54.86-.67-.86.45-.58-.41-2.46-.07-.32-.07-.12-.56-.32.27-.33",
		 '13147':"m429.9 211.4l.65.09.12-.06.43-.11.38-.05.22.06.11.08v.03l.35.54 1.12 1.57-3.17 1.29-.46-.55.25-2.91",
		 '13119':"m429.3 210.9l.65.45-.25 2.91-2.46.98-.86-2.99.21-.13.08-.03 1.99-.36.64-.83",
		 '13257':"m426.6 209.3l2.68 1.65-.64.83-1.99.36-.08.03-.21.13-.68-.17.93-2.83",
		 '15007':"m173.7 308.5h1.32l.57.38.19.56v.38l-.38.94v1.13l-.75.75-.56.38-1.88-.19-.75-.75-1.13-.38-.38-.38v-.57l.57-.75 1.88-1.51h1.32m-8.85 6l-.19-.19.19-1.13 1.13-.75.19-.56h.57l-.19 1.32-.94.38-.56.94h-.19",
		 '15003':"m196.1 319l-.75.57v-.19l-1.13.38-.94-.56-1.88.19-.75.19-.38-.94-.57-.38-.19-.56-.57-.57v-.56l-.56-.38 1.88-.38.94-1.32.56-.38.56.19.94 1.69h.19l.19.38-.19.38.19.56.75.57.19-.57h.38v.57l.38.19.19.75.57.19",
		 '15009':"m204.6 320.5h.19l.38.19h.19l-.19-.38 1.69-.38.75.19-.38.75-1.13.75h-.56l-2.26-.38-2.64.19h-.19l.57-1.51h.19l2.64.19.56.19.19.19m4.52 1.32l.56.19.94 1.51 1.88-.94 1.13.19v.19l1.51.94 1.32.38.19.38v.75l-.75.75-.94.38-1.88.75h-1.32l-.38-.19-.38-2.26-.56-.19-.38.38-1.13-.56-.75-.75-.19-.75.38-.75.19-.38h.57m-4.9 1.7h1.32l.75.56.38.56-.19.75-1.69.57-.19-.75-.19-.56-.75-.75v-.19l.56-.19m5.65 3.77l.19.19.19.75-1.51.38-.56-.19.38-.56 1.32-.56",
		 '15001':"m222.7 347.6l-.38.38-.75-.56-1.88-.75-.38-.57-.19-.38.19-3-1.32-3.2-.75-.75-.56-.75.19-.57 1.13-1.13 1.32-1.69v-.75l-.94-1.32-.19-.75.19-.75.38-.19 1.13.19.38.56 1.7.75 2.07.38 2.26.94 1.51.94.75.94.19 1.51.94-.19.38.56v.75l.94.75 1.32.56-.38.75-2.07 1.88-1.69.94-1.51.19-1.7 1.32-.94.56-1.32 2.45",
		 '15005':"m204.4 320.3l-.56-.19 1.32.19.19.38h-.19l-.38-.19h-.19l-.19-.19",
		 '19163':"m342.3 124.8l1.07-.06 3.21-.09 1.31.38-.15 1.41-.5.67-.57.67-1.82.9-.78.2h-.33l-.14-.02-1.19-1.81-.11-2.26",
		 '19045':"m342.1 121.4l7.08-.4.1 1.35-.74 1.93-.68.76-1.31-.38-3.21.09-1.07.06-.12-2.26-.06-1.14",
		 '19119':"m287.9 103.7h1.36l3.74.001h1.79v3.14l-6.72-.05-.16-3.11",
		 '19167':"m288.1 106.8l6.72.05.03 4.51-6.25-.001.65-2.25.15-.4.03-.09-.36-1.3-.09-.04h-.67l-.21-.47",
		 '19149':"m294.8 111.3v4.52l-5.86-.001-.34-.9-.24-.39-.31-.29-.25-.19.38-1.73.38-1 6.25.001",
		 '19035':"m299.3 111.3l.03 4.51-3.35.02h-1.12v-4.52l4.44-.02",
		 '19141':"m294.8 106.8l4.44.001.03 4.48-4.44.02-.03-4.51",
		 '19143':"m298.6 103.7h.62l.02 3.17-4.44-.001v-3.14l3.8-.02",
		 '19059':"m299.2 103.7l4.41-.04.05 3.17-4.44.04-.02-3.17",
		 '19041':"m299.2 106.8l4.44-.04.05 4.48-4.47.04-.03-4.48",
		 '19021':"m303.7 111.3l.05 4.53-4.48.02-.03-4.51 4.47-.04",
		 '19151':"m303.7 111.3l4.44-.04.05 3.41.02 1.11-4.47.04-.05-4.53",
		 '19147':"m308.1 106.8l.08 4.49-4.44.04-.05-4.48 4.41-.06",
		 '19063':"m308 103.6l.05 3.18-4.41.06-.05-3.17h.57l3.84-.06",
		 '19109':"m312.4 103.5l.07 3.16.08 4.5-4.44.08-.08-4.49-.05-3.18 1.83-.03 2.58-.04",
		 '19091':"m308.2 111.2l4.44-.08.07 3.41-4.46.08-.05-3.41",
		 '19193':"m294.8 115.9h1.12v.94l.37.18h.31v3.42l-6.52-.05.12-.8-.29-.54-.11-1.48.07-.18v-.2l-.04-.15-.1-.14-.13-.05-.32-.02-.34-.93 5.86.001",
		 '19093':"m299.3 115.8v1.13h.62l.001 3.43h-3.3v-3.42h-.31l-.37-.18v-.94l3.35-.02",
		 '19161':"m299.3 115.8l4.48-.02v1.12h.55l.03 3.43-2.21.001-2.21.001-.001-3.43h-.62v-1.13",
		 '19025':"m303.8 115.8l4.47-.04.001 1.11h.43l.06 3.43-2.2.03-2.19.03-.03-3.43h-.55v-1.12",
		 '19187':"m312.7 114.6l.05 2.24h.38l.08 3.39-2.22.05-2.21.05-.06-3.43h-.43l-.001-1.11-.02-1.11 4.46-.08",
		 '19073':"m308.7 120.3l2.21-.05.09 4.5-1.11.02-3.33.06-.06-4.5 2.2-.03",
		 '19027':"m304.4 120.4l2.19-.03.06 4.5-1.11.02-3.33.03-.03-4.5 2.21-.001",
		 '19047':"m302.1 120.4l.03 4.5-4.44.03h-1.11v-4.52h3.3l2.21-.001",
		 '19133':"m296.6 120.4v4.52l-4.47-.03-1.27-2.35-.79-2.18 6.52.05",
		 '19085':"m297.7 124.9v3.39h.58v1.25h-4.64l-1.34-2.28-.17-2.38 4.47.03h1.11",
		 '19165':"m297.7 124.9l4.44-.03.03 3.39h.5l.001 1.26h-1.1l-3.3.001v-1.25h-.58v-3.39",
		 '19009':"m302.2 124.9l3.33-.03.05 2.81.43.56.02 1.27-3.27.03-.001-1.26h-.5l-.03-3.39",
		 '19077':"m306.6 124.8l3.33-.06.06 3.39h.37l.02 1.26-4.41.06-.02-1.27-.43-.56-.05-2.81 1.11-.02",
		 '19001':"m310.4 129.4l.08 4.5-2.21.03-2.22.03-.06-4.49 4.41-.06",
		 '19029':"m306 129.5l.06 4.49-2.2.02-2.2.001-.03-4.49h1.1l3.27-.03",
		 '19155':"m298.3 129.5l3.3-.001.03 4.49-2.19.02h-4.54l-.68-.41-.14-2.62-.42-1.48h4.64",
		 '19071':"m295.2 137.4l4.24-.02.001 1.75.11 1.45v.97l-3.81-.04-.87-2.58.3-1.53",
		 '19129':"m299.4 134v3.34l-4.24.02-.43-1.88.13-1.47h4.54",
		 '19137':"m301.6 134l2.2-.001.03 3.35-4.42.03v-3.34l2.19-.02",
		 '19145':"m303.9 137.4l.03 2.25h.15v1.98l-2.8-.02-1.67-.001v-.97l-.11-1.45-.001-1.75 4.42-.03",
		 '19173':"m308.3 137.3l.06 4.27-1.56.02-2.75-.001v-1.98h-.15l-.03-2.25 4.44-.04",
		 '19003':"m308.3 134l.05 3.35-4.44.04-.03-3.35 2.2-.02 2.22-.03",
		 '19175':"m310.5 133.9l2.19-.04.07 3.37-4.42.05-.05-3.35 2.21-.03",
		 '19159':"m308.3 137.3l4.42-.05.08 4.2-2.11.07-2.33.06-.06-4.27",
		 '19053':"m312.7 137.3l4.44-.12.1 4.13-2.11.09-2.35.1-.08-4.2",
		 '19039':"m317.1 133.7l.09 3.42-4.44.12-.07-3.37 2.17-.12 2.24-.05",
		 '19121':"m314.7 129.2l.12 4.54-2.17.12-2.19.04-.08-4.5 4.33-.2",
		 '19049':"m314.4 124.7l.08 2.85.24.56.03 1.14-4.33.2-.02-1.26h-.37l-.06-3.39 1.11-.02 3.33-.08",
		 '19015':"m315.4 120.2l.11 4.48-1.13.03-3.33.08-.09-4.5 2.22-.05 2.22-.04",
		 '19079':"m317.2 115.6l.46 4.5-2.24.06-2.22.04-.08-3.39h-.38l-.02-1.11 4.47-.1",
		 '19197':"m312.6 111.2l4.45-.12.11 4.55-4.47.1-.02-1.12-.07-3.41",
		 '19081':"m316.9 106.6l.11 4.49-4.45.12-.08-4.5 4.43-.11",
		 '19189':"m316.9 103.4l.08 3.16-4.43.11-.07-3.16 3-.07 1.42-.04",
		 '19195':"m321.3 103.3l.1 3.16-4.43.13-.08-3.16 4.18-.12h.23",
		 '19033':"m316.9 106.6l4.43-.13.02.55.11 3.95-4.46.12-.11-4.49",
		 '19069':"m317 111.1l4.46-.12.13 4.55-4.47.12-.11-4.55",
		 '19083':"m321.6 115.5l.38 4.49-2.19.07-2.2.06-.46-4.5 4.47-.12",
		 '19169':"m319.8 120l.13 4.49-1.11.03-3.35.08-.11-4.48 2.24-.06 2.2-.06",
		 '19153':"m318.8 124.6l.31 4.61v.21l-4.44-.15-.03-1.14-.24-.56-.08-2.85 1.13-.03 3.35-.08",
		 '19181':"m319.2 129.4l.13 4.29-2.22.05-2.24.05-.12-4.54 4.44.15",
		 '19117':"m319.3 133.7l2.21-.06.12 3.4-4.45.13-.09-3.42 2.22-.05",
		 '19185':"m321.6 137l.13 4.08-2.69.13-1.78.05-.1-4.13 4.45-.13",
		 '19007':"m326.1 136.9l.16 4-.74.04-3.72.19-.13-4.08 4.44-.15",
		 '19135':"m325.9 133.5l.13 3.4-4.44.15-.12-3.4 2.21-.07 2.21-.08",
		 '19125':"m323.6 129l.16 4.51-2.21.07-2.21.06-.13-4.29v-.21l4.39-.14",
		 '19099':"m320 124.5l4.45-.14.25 4.58-1.1.04-4.39.14-.31-4.61 1.11-.03",
		 '19127':"m322 120l2.22-.08.17 4.51-4.45.14-.13-4.49 2.19-.07",
		 '19075':"m326.1 115.3l.31 3.34-2.22.09.04 1.12-2.22.08-.38-4.49 4.48-.14",
		 '19023':"m321.5 110.9l4.43-.14.12 3.43.05 1.12-4.48.14-.13-4.55",
		 '19067':"m321.4 107l4.4-.15.14 3.96-4.43.14-.11-3.95",
		 '19131':"m325.7 103.1l.12 3.72-4.4.15-.12-3.71 4.4-.16",
		 '19089':"m326.6 103.1l3.44-.14.15 3.72-4.44.18-.12-3.72.97-.04",
		 '19037':"m330.2 106.7l.06 1.69.09 2.27-4.45.17-.14-3.96 4.44-.18",
		 '19017':"m325.9 110.8l4.45-.17.14 3.43-4.47.17-.12-3.43",
		 '19013':"m330.5 114l.1 2.26.18.29.07 1.92-2.22.09-2.23.09-.31-3.34-.05-1.12 4.47-.17",
		 '19171':"m328.7 118.6l.23 5.64-4.47.17-.21-5.63 4.45-.17",
		 '19157':"m324.4 124.4l4.47-.17.19 4.58-1.1.05-3.31.13-.25-4.58",
		 '19123':"m324.7 129l3.31-.13.19 4.51-2.22.09-2.21.08-.16-4.51 1.1-.04",
		 '19179':"m328.2 133.4l2.22-.1.14 3.41-4.46.18-.13-3.4 2.22-.09",
		 '19051':"m330.5 136.7l.15 3.88-1.66.11-2.79.19-.16-4 4.46-.18",
		 '19177':"m330.5 136.7l4.46-.21.05 1.14.15 2.78h-2.21l-2.3.16-.15-3.88",
		 '19101':"m334.8 133.1l.13 3.4-4.46.21-.14-3.41 2.26-.11 2.22-.09",
		 '19011':"m333.1 118.4l.24 5.67-4.46.17-.23-5.64 2.22-.09 2.22-.12",
		 '19095':"m328.9 124.2l4.46-.17.22 4.54-1.12.06-3.38.15-.19-4.58",
		 '19107':"m329.1 128.8l3.38-.15.19 4.5-2.26.11-2.22.1-.19-4.51 1.1-.05",
		 '19183':"m333.6 128.6l2.97-.13.16.22.25.89.14 3.39-2.22.1-2.22.09-.19-4.5 1.12-.06",
		 '19087':"m337.1 133l1.17 1.09-.21 3.41-3 .13-.05-1.14-.13-3.4 2.22-.1",
		 '19111':"m335 137.6l3-.13 2.96 1.37-.68.79h-.31l-.26.02h-.08l-.51.18h-.001l-.06.03-.24.14-.09.05-.03.03-.04.03-.04.04-.41.63-.001.1.03.11.2.09.16.23.05.16v.13l-.03 1.16-.03.12-.1.09h-.001l-.3.1-.64-.05-.41-.33-.98-1.21-.04-.09.03-.26-.02-.08-.77-.58-.2-.13-.15-2.78",
		 '19057':"m342.3 133.9v.03l.04.11.05.35-.04 1.05-.08.38-.05.08-.28.16-.1.1-.75 1.07-.04.17-.07 1.46-2.96-1.37.21-3.41 4.07-.19",
		 '19115':"m336.9 129.6l1.11-.05.05 1.13 2.79-.11-.28 1.1v.11l.66.79.31.15.13-.02.08.04.08.09.45.74v.31l-4.07.19-1.17-1.09-.14-3.39",
		 '19139':"m342.4 127.1l1.19 1.81h-.59l-1.35.37-.36.13-.1.07-.08.11v.02l-.13.55-.11.44-2.79.11-.05-1.13-.09-2.27 4.47-.21",
		 '19103':"m337.8 123.9l.16 3.39.09 2.27-1.11.05-.25-.89-.16-.22-2.97.13-.22-4.54 4.45-.18",
		 '19113':"m337.5 118.2l.19 4.53.05 1.13-4.45.18-.24-5.67 2.23-.06 2.22-.11",
		 '19031':"m342.2 122.5l.12 2.26.11 2.26-4.47.21-.22-4.52 4.46-.21",
		 '19105':"m339.7 118.1l2.2-.11.18 3.39.06 1.14-4.46.21-.19-4.53 2.21-.1",
		 '19019':"m335 113.8l.03.98.06 1.28.16 1.24.05 1-2.23.06-2.22.12-.07-1.92-.18-.29-.1-2.26 4.48-.22",
		 '19065':"m330.3 108.3l4.47-.18.24 5.67-4.48.22-.14-3.43-.09-2.27",
		 '19191':"m334.5 102.7l.09 2.05h.07l.15 3.37-4.47.18-.06-1.69-.15-3.72 3.26-.14 1.11-.05",
		 '19005':"m338.1 102.6l.16 1v.66l1 .7.22.28.28.45-.04.16-.72 1.21-.25.95-4 .17-.15-3.37h-.07l-.09-2.05 3.67-.18",
		 '19043':"m338.8 108l.2 1.23.21.99.86 1.91.12.24.76.51.26.12.5.12-2.2.49-4.48.24-.24-5.67 4-.17",
		 '19055':"m335 113.8l4.48-.24.26 4.53-2.21.1-2.22.11-.05-1-.16-1.24-.06-1.28-.03-.98",
		 '19061':"m339.5 113.6l2.2-.49 1.22.23.47.11.11.05.07.07.6 1.09.1.32v.07l-.04.06-.13.23v.03.07l.02.06.08.08.22.16.64.33.81.56.03.03-1.8.09.06 1.14-2.21.11-2.2.11-.26-4.53",
		 '19097':"m345.9 116.7l.57.66.03.04v.05l-.05.36-.05.12v.08l.13.3v.001l.27.34.17.14.18.11.4.13 1.67 1.99-7.08.4-.18-3.39 2.21-.11-.06-1.14 1.8-.09",
		 '16043':"m153.1 76.1l.43.43.74 1.45.4 1.16.1.31.73.68-.99 6.26-3.34.25-.04.04h-.03l-1.47.22-1.25-.21-1.2-.78-1.28-.22.09-.55-1.64-.29.19-1.1 1.11.19 1.29-.92.6-.47.19-.83.14-.82.68-.64.83-.21.8.13.32-1.93 1.56-1.79 1.03-.39",
		 '16033':"m150.5 78.3l-.32 1.93-.8-.13-.83.21-.68.64-.14.82-.19.83-.6.47-1.29.92-1.11-.19-4.91-.86-.2 1.1-2.73-.5.59-3.33.54.15 1.1.19.33-1.86-.05-.26.11-.48.13-.2.36-.38.61-.14 3.22.8 1.37-.51 2.51.26 1.82.52 1.17.03",
		 '16009':"m109.6 33.42l1.19.27 2.37.37.12-.27.34-.11 2.21.5-1.07 4.9-1.11-.24-2.67-.79-2.07-1.65.38-1.65.3-1.34",
		 '16055':"m111.3 25.78l2.33.46 1.19.14 1.1.24-.29 1.26 1.56.34-1.35 5.95-2.21-.5-.34.11-.12.27-2.37-.37-1.19-.27 1.7-7.64",
		 '16017':"m113.8 14.97l2.09.46-.46 2.16-.49 2.16 6.23 1.34-.77 3.58-.63 2.98-.08-.17-.45-.64-.78-.62-.1-.06-.36.03-.51.44-.04.18-.25 1.42-1.56-.34.29-1.26-1.1-.24-1.19-.14-2.33-.46.19-.85 2.32-9.96",
		 '16021':"m114.2 13.1l8.25 1.79-1.33 6.22-6.23-1.34.49-2.16.46-2.16-2.09-.46.44-1.9",
		 '16057':"m108.9 36.41l2.07 1.65 2.67.79 1.11.24-.24 1.1-.73 3.34-.48.41-.73-.16-1.34-.32h-.09l-.39.14-.4.25-.11.14v.04l-.19.33-2.81-.61 1.65-7.34",
		 '16069':"m107.3 43.75l2.81.61.19-.33v-.04l.11-.14.4-.25.39-.14h.09l1.34.32-.2.91-.14.8.54.001.2.06-.09.41-.05-.04-.09-.02-.22-.04h-.05l.001.18.03.16.22.71-.06.39-.04.11-.09.11h-1.1l-1.96-.43-.05.27v.09l-.77 3.8-.16.06-.28.22-.07.08-.11.21v.15l.03.18.05.08.05.12-.03.13-.18.22-.07.05-.37.09-.1-.03-.64-1.98-.06-.89.43-1.18-.05-1.11-.09-.71-.001-.05-.28-1.14.19-.56.33-1.46",
		 '16061':"m114.4 47.55l.55 1.63-1.6.91-1.66-.91-.21.04-.03.03-1.79 1.69-.94.31.77-3.8v-.09l.05-.27 1.96.43h1.1l.09-.11.04-.11.06-.39-.22-.71-.03-.16-.001-.18h.05l.22.04.09.02.05.04.33.43 1.03.57.09.17.02.17v.23",
		 '16003':"m106.7 60.4l3.1.68.04.23.09.79-.001.59-.13.3-.06.04-.03.13 1.42.32.37.67-.5 1.22-.19.23h-.08l-.13-.08-.43.66-.13.28-.36 1-.31 2.51v1.17l-1.43.42-.83-.18-.31-.16-.78-.69-.34-1.71-.05-.65.48-2.22-2.38-.55.27-.29.21-.23.3-.52v-.11l-.05-.13-.03-.13v-.26l.23-.47.28-.26.44-.4 1.35-2.2",
		 '16087':"m103.8 65.4l2.38.55-.48 2.22.05.65.34 1.71.78.69.31.16.83.18-.54.91-.2.52-.17.84-.31 1.01-.12.3-.84-.19-4-.9.001-.02.001-.03.02-.04v-.02l.001-.13-.03-.1v-.02l-.48-.95-.09-.06-.36-.13h-.05l-.09.04-1.12-.46-.13-.23-.02-.18.001-.11.02-.07.31-2.12.11-.23 2-2.74.21-.19.06-.03.22-.05.86-.29.49-.53",
		 '16075':"m101.8 74.1l4 .9-.24 1.09-1.31.84-1.27-.29-.49 2.2-2.21-1.46.27-.45.44-.83.35-1.43.46-.56",
		 '16015':"m116.8 74.84l.48.54 1.48 2.25.04.21.04 2.13-.04.11-.26.26-.72-.02-1.91-.41-2.11.23-.19.09-1.02.95-.44.53-.41.56-.26.24-.22.1-1.28.48-.73.03-.52-.06-.11-.05-.06.06-1-1.61-1.13-1.78.07.02.02-.06.94-4.29.55.12.88-.07.34-.8 5.41 1.16.44-.001.5-.17 1.22-.75",
		 '16045':"m109.4 71.2h.05l-.48 2.2-.54-.11-.47 2.19-.55-.12-.94 4.29-.02.06-.07-.02-2.1-.46-1.82-.39.49-2.2 1.27.29 1.31-.84.24-1.09.84.19.12-.3.31-1.01.17-.84.2-.52.54-.91 1.43-.42",
		 '16027':"m100.3 77.4l2.21 1.46 1.82.39-.48 2.19.13.54-.09 1-.16.73-.39.66-.42 1.4-.59-.38-1.33-2.47-.02-.07.08-.49.001-.23-.07-.4-.06-.19-.22-.28-1.1-1.27-.31-.19 1-2.42",
		 '16001':"m104.3 79.2l2.1.46 1.13 1.78 1 1.61.06-.06-.6 2.87-.21 1-.5 2.18-2.64-.56-.14-.13-.22-.26-.29-.46-.22-.39v-.04l.07-.26.12-.18.02-.12-.18-.63-.11-.15-.07-.05-.73-.08.42-1.4.39-.66.16-.73.09-1-.13-.54.48-2.19",
		 '16039':"m118.5 80.3l.15.19-.37.97-.12.08-.29.41-.13.23-.97 2.33-.64 2.96-.44 2.18-.29 3.73-.38 1.83-3.85-.78.22-1.06.15-.32.18-.67-3.22-.91-1.89-.4-.11-.05-.59-.62-.86-.99-.4-.81-.03-.13 2.64.56.5-2.18.21-1 .6-2.87.11.05.52.06.73-.03 1.28-.48.22-.1.26-.24.41-.56.44-.53 1.02-.95.19-.09 2.11-.23 1.91.41.72.02",
		 '16073':"m99.3 79.8l.31.19 1.1 1.27.22.28.06.19.07.4-.001.23-.08.49.02.07 1.33 2.47.59.38.73.08.07.05.11.15.18.63-.02.12-.12.18-.07.26v.04l.22.39.29.46.22.26.14.13.03.13.4.81.86.99.59.62.11.05 1.89.4 3.22.91-.18.67-.15.32-.22 1.06 3.85.78-2 9.82-13.74-2.92-1.08-.25-3.64-.83-.07-.03 4.77-21.25",
		 '16025':"m118.3 81.5l.94.66 1.46.42.07.09.03.09.02.19v.59l-.07 1-.05.95 1.38 3.69.3.17-.02 1.05-.12.59-2.02-.38-4.52-.91.44-2.18.64-2.96.97-2.33.13-.23.29-.41.12-.08",
		 '16047':"m115.7 89.7l4.52.91-.88 4.42-.71 2.52-1.23-.55-.64-.59-.5-.93.25-1.09v-.06l-.38-.79-.33-.11-.26-.05-.13.05.29-3.73",
		 '16053':"m119.3 95l2.12.42-.07.34.15.22 1.79.55.84.55 1.08.21-.55 2.92h-.66l-1.18.12-.44-.44-.05-.1-.45-.39-1.48-.8-.58-.22-1.12-.73-.12-.12.71-2.52",
		 '16083':"m115.4 93.4l.13-.05.26.05.33.11.38.79v.06l-.25 1.09.5.93.64.59 1.23.55.12.12 1.12.73.58.22 1.48.8.45.39.05.1.44.44 1.18-.12-.36.05-.49.94-2.07-.12-.14.75-.04.35-.84 4.29-2.03-.4-2.47-.56-1.41-.28-1.17-.18 2-9.82.38-1.83",
		 '16031':"m124.7 100.2l2 .6.12.02.06-.001.39-.12.13-.11.15-.22.69-.89.07-.06.15-.09.39-.06.45.04.57.04.49.15.25.41.14.2.48.26h.06l.11-.09.38-.05 1.71.92-.58 3.33-.76 4.2-3.78-.64-.28-.05-3.13-.53-.3-.05-.8-.14-.11-.02-.75-.18-.63-.16-2.24-.44.84-4.29.04-.35.14-.75 2.07.12.49-.94.36-.05h.66",
		 '16071':"m138.7 103.2l.79.84v.93l.37.43.87.89.23.16.19.26.23.43-.15.88-.37-.07-.38 2.21-.52-.08-.69-.18-2-.34-2.43-.42-2.75-.46.76-4.2 3.25.56.2-1.11 1.46.26.19-1.11.73.13",
		 '16077':"m134.6 94.5l-.58 3.16 1.78.32.81-1.02.38.41 1.1-.43.12.02.26.29.22.62.68 3.59-.05.28-.18.67-.47.82-.73-.13-.19 1.11-1.46-.26-.2 1.11-3.25-.56.58-3.33-1.71-.92-.38.05.32-1.75.14-1.1.62-3.35 2.18.4",
		 '16005':"m143.2 97.2l-.76.89-.03.05-.19.45-.29 1.43-.02.36.001.14.18.73.08.05h.11l.18-.09.05-.07.08-.05.82.14.25 1.18.02.19.02 1.69v.57l-.06.37-.19-.03-.36 2.04-.82-.14-.4-.32-.87-.27-.23-.16-.87-.89-.37-.43v-.93l-.79-.84.47-.82.18-.67.05-.28-.68-3.59-.22-.62-.26-.29-.12-.02-1.1.43-.38-.41v-.09l.02-.06.14-.31.75-.27.11-.001 5.5.95",
		 '16041':"m143.6 105.2l2.59.44-.1 1.28-.41.87-.19.46-.03.23.05 1.22.03.07.62 1.34-5.67-.92.38-2.21.37.07.15-.88-.23-.43-.19-.26.87.27.4.32.82.14.36-2.04.19.03",
		 '16007':"m151.6 105.2l-1.05 6.55-4.34-.68-.62-1.34-.03-.07-.05-1.22.03-.23.19-.46.41-.87.1-1.28-.03-1.73.02-.31.33-.22 3.38.54.12.27v.09l-.09.32-.07.18-.11.24.77.38 1.05-.16",
		 '16029':"m147.6 97.9l5.07.83-1.06 6.48-1.05.16-.77-.38.11-.24.07-.18.09-.32v-.09l-.12-.27-3.38-.54-.33.22-.02.31.03 1.73-2.59-.44.06-.37v-.57l-.02-1.69-.02-.19-.25-1.18-.82-.14-.08.05-.05.07-.18.09h-.11l-.08-.05-.18-.73-.001-.14.02-.36.29-1.43.19-.45.03-.05.76-.89 4.38.77",
		 '16067':"m128.3 92.1l2.77.52-.82 4.47-.55-.1-.42 2.29-.45-.04-.39.06-.15.09-.07.06-.69.89-.15.22-.13.11-.39.12-.06.001-.12-.02-2-.6.55-2.92 1.56.31.68-1 .83-4.46",
		 '16063':"m120.2 90.6l2.02.38 6.08 1.16-.83 4.46-.68 1-1.56-.31-1.08-.21-.84-.55-1.79-.55-.15-.22.07-.34-2.12-.42.88-4.42",
		 '16019':"m148.5 90.1l2.07.4 1.43.24.13.22v.13l.76.97.68.51-.37 2.37-.6 3.79-5.07-.83.39-2.29.18-1.05-1.99-1.44-2.46-1.19-3.84-.67.45-2.57 8.21 1.4",
		 '16011':"m140.3 88.7l-.45 2.57 3.84.67 2.46 1.19 1.99 1.44-.18 1.05-.39 2.29-4.38-.77-5.5-.95-.11.001-.75.27-.14.31-.02.06v.09l-.81 1.02-1.78-.32.58-3.16.41-2.21.55.1.28-1.04.19-1.05 1.11.2 1.28-.97.2-1.05 1.64.24",
		 '16013':"m118.6 80.5l.44-.31.11-.06.34-.13.14-.02.55.11 1.04 1.07.76.85 1.04-.08 1.34.39.35.26 2.42 2.64.72.89.13.17.26.5.09.2.08.31.5-.15h.19l.24.11.05.08.36 1.14.07.53-.2.14-.19.98 2.52.47-.19 1.05 3.27.59-.41 2.21-2.18-.4-.62 3.35-.14 1.1-.32 1.75-.11.09h-.06l-.48-.26-.14-.2-.25-.41-.49-.15-.57-.04.42-2.29.55.1.82-4.47-2.77-.52-6.08-1.16.12-.59.02-1.05-.3-.17-1.38-3.69.05-.95.07-1v-.59l-.02-.19-.03-.09-.07-.09-1.46-.42-.94-.66.37-.97",
		 '16085':"m111.2 63.5v-.07l.14-.28.19-.24 1.4-.19 11.43 2.34-.18.09-.12.13-.15.36-.14.69-.09.59-.31 1.19-.53 1.02-.52.64-1.41.83-.09.02-.39-.14-.29-.4-.28-.24-.15-.05-.44.21-1.65 1.4-.31.36v.36l.02.22.05.24.22.07.05-.04.03.001.06.12.03.41-.16.73-.05.09-.2.32-.17.19-.29.27-.11.07-1.22.75-.5.17-.44.001-5.41-1.16-.34.8-.88.07.47-2.19.54.11.48-2.2h-.05v-1.17l.31-2.51.36-1 .13-.28.43-.66.13.08h.08l.19-.23.5-1.22-.37-.67",
		 '16079':"m117.2 28.2l.25-1.42.04-.18.51-.44.36-.03.1.06.78.62.45.64.08.17.27.47 1.73 3.53.001.05.001.03v.001.05.72l-.29.74-.25.56-.17 1.04v.33l1.38 1.91.19.16.15.13.47.23.69.27.15.11.78 1.77.73 1.71.41.77.23.41-11.75-2.48.24-1.1 1.07-4.9 1.35-5.95",
		 '16035':"m114.5 40.2l11.75 2.48.17 1.3.04.12 1.3 1.73.13.04.06.02h.39l.49 1.22-5.61.1-3.85.07h-.02l-1.23 1.45-.27.53-.15.17-.19.16-.14-.02-.18-.06-1.32-.62-.05-.04-.23-.32-.16-.35-.86-.54-.21-.09v-.23l-.02-.17-.09-.17-1.03-.57-.33-.43.09-.41-.2-.06-.54-.001.14-.8.2-.91.73.16.48-.41.73-3.34",
		 '16049':"m131 47.4l.05.05.03.15-.05.28-.31.88-.53 1.21-.79 1.75-2.51 6.27-.32 1.73-.16.87v.05l.03.03-.4.3-.89.56-.46-.24-.13-.13-.08-.14-.09-.09-.13-.02-.06.04-.07.14-.05.26-.06.46v.05l.32.46.46.63.39.83-.9 1.28-11.43-2.34-1.4.19-.19.24-.14.28v.07l-1.42-.32.03-.13.06-.04.13-.3.001-.59-.09-.79-.04-.23-3.1-.68.31-.65 1.56-2 .87-.88.22-.25.04-.16-.31-1.63-.06-.25-.17-.23-.15-.2-.33-.15-.79-.72-.41-.38-.03-.05-.04-.08.1.03.37-.09.07-.05.18-.22.03-.13-.05-.12-.05-.08-.03-.18v-.15l.11-.21.07-.08.28-.22.16-.06.94-.31 1.79-1.69.03-.03.21-.04 1.66.91 1.6-.91-.55-1.63.21.09.86.54.16.35.23.32.05.04 1.32.62.18.06.14.02.19-.16.15-.17.27-.53 1.23-1.45h.02l3.85-.07 5.61-.1.02.001.96.2.2-.05.14-.05.23-.05.46.06.16.13.04.04",
		 '16037':"m116.8 74.84l.11-.07.29-.27.17-.19.2-.32.05-.09.16-.73-.03-.41-.06-.12-.03-.001-.05.04-.22-.07-.05-.24-.02-.22v-.36l.31-.36 1.65-1.4.44-.21.15.05.28.24.29.4.39.14.09-.02 1.41-.83-.22.76.001.17.07.21 1.48 1.92.27.31.05.02.82-.08.28-.19.7-.59.04-.05.21-.44.21-.51.27-.4.38-.3.92-.67.17.29-.05.46.02 1.09 2.54 3.72 1.29.82.96.51.12.05.32.09.06-.001.13-.1.14-.17.09-.07.12.02.04.06.06.17.46 1.33.13.39.03.55-.05.55-.87-.16-.78 2.14-.07.36-.16 1.5-.23 1.35-.96.96-1.55.51-.89.48-.4.42-.03.07-.08-.31-.09-.2-.26-.5-.13-.17-.72-.89-2.42-2.64-.35-.26-1.34-.39-1.04.08-.76-.85-1.04-1.07-.55-.11-.14.02-.34.13-.11.06-.44.31-.15-.19.26-.26.04-.11-.04-2.13-.04-.21-1.48-2.25-.48-.54",
		 '16059':"m132.1 60.1l.19.19.87 1.23.05.16.1 1.02v.38l-.12.21-.02.77.001 1 1.41 5.25 1.5 2.08.31-.08.32.25.38.43.17.27.2.62.26 1.12v.1l-.05.1-.04.03-.001 1.61.11.61.25.36.73.82.23.09.19-.1.09-.14v-.03l.05.26-.33 1.86-1.1-.19-.54-.15-2.96-.53.05-.55-.03-.55-.13-.39-.46-1.33-.06-.17-.04-.06-.12-.02-.09.07-.14.17-.13.1-.06.001-.32-.09-.12-.05-.96-.51-1.29-.82-2.54-3.72-.02-1.09.05-.46-.17-.29-.92.67-.38.3-.27.4-.21.51-.21.44-.04.05-.7.59-.28.19-.82.08-.05-.02-.27-.31-1.48-1.92-.07-.21-.001-.17.22-.76.52-.64.53-1.02.31-1.19.09-.59.14-.69.15-.36.12-.13.18-.09.9-1.28-.39-.83-.46-.63-.32-.46v-.05l.06-.46.05-.26.07-.14.06-.04.13.02.09.09.08.14.13.13.46.24.89-.56.4-.3.4.05.36.09.11.05.66 1.05.08.31.37.06 1.77-.81 1.11-.97.79-.46",
		 '16023':"m137.3 80.2l-.59 3.33 2.73.5-.81 4.44-.2 1.05-1.28.97-1.11-.2-.19 1.05-.28 1.04-.55-.1-3.27-.59.19-1.05-2.52-.47.19-.98.2-.14-.07-.53-.36-1.14-.05-.08-.24-.11h-.19l-.5.15.03-.07.4-.42.89-.48 1.55-.51.96-.96.23-1.35.16-1.5.07-.36.78-2.14.87.16 2.96.53",
		 '16051':"m139.5 84l.2-1.1 4.91.86-.19 1.1 1.64.29-.09.55-.34 1.65-.1.56.1.09.2.001.03-.02 2.73 1.72-.06.37-8.21-1.4-1.64-.24.81-4.44",
		 '16065':"m145.9 85.7l1.28.22 1.2.78 1.25.21 1.47-.22h.03l.04-.04-.63 3.84-2.07-.4.06-.37-2.73-1.72-.03.02-.2-.001-.1-.09.1-.56.34-1.65",
		 '16081':"m154.6 86.4l-.96 6.17-.68-.51-.76-.97v-.13l-.13-.22-1.43-.24.63-3.84 3.34-.25",
		 '17183':"m376 139.2l.33 4.26.29 3.43-3.96.39-.43-4.47.13-.001-.23-2.25-.12-1.12 3.97-.41.001.18",
		 '17075':"m369.6 133l5.83-.67.6 6.72-3.97.41-1.78.13-.68-6.59",
		 '17003':"m359.8 181.5l2.4-.17-.03 1.41-.03 1.31.09.2.08.1.25.11.66.28.48 1.08-1.96-.21-.68-.56-.36-.88-.63-1.17-.26-.37-.02-1.13",
		 '17153':"m362.2 181.3l2.07-.08 1.2.27.09.99-.06.02-2.28 2.22-.66-.28-.25-.11-.08-.1-.09-.2.03-1.31.03-1.41",
		 '17127':"m365.4 181.5l2.19-.61 2.42 2.13.1 1.2-.74-.08-3.87-1.65-.09-.99",
		 '17069':"m370.8 177.2l2.48.13.8.83v.21l-.19.22-.1.02-1.41.3-.21.05-.18.05-.06.02h-.02l-.24.15-.05.03-.18.16-.26.34-.59-.19-.15-2.29.37-.03",
		 '17151':"m370.4 177.2l.15 2.29-.06.03-.17.08-.07.06-.09.06-.13.17-.05.13-.29 1.27v.09l.09.28.43.51.14.08.13.12.29.64-.15.72-.12.33-.23.1-.08.001-.1-1.2-2.42-2.13-.24-3.4 3-.24",
		 '17087':"m367.4 177.5l.24 3.4-2.19.61-1.2-.27-.22-3.46 3.37-.29",
		 '17181':"m364 177.8l.22 3.46-2.07.08-2.4.17.37-.1.12-.06v-.001l.02-.02.04-.12.04-.4v-.02-.001l-.06-.22v-.02l-.17-.38-.13-.16-.27-.26-.19-.28-.29-.54-.07-.26v-.12-.08l3.7-.63 1.14-.03",
		 '17059':"m373.5 173.2l.51 1.14-.13.49-.05.13-.08.14-.12.13-.47.34-.17.31-.08.14-.001.03-.05.14-.001.09v.001l.05.29v.001l.22.59.08.15-2.48-.13-.31-3.99 3.1-.02",
		 '17165':"m370.4 173.2l.31 3.99-.37.03-3 .24-.25-3.43-.04-.56 3.34-.28",
		 '17199':"m367.1 174.1l.25 3.43-3.37.29-1.14.03-.22-3.39 4.48-.35",
		 '17077':"m358.1 173.5l4.2-.23.35 1.13.22 3.39-3.7.63-1.75-2.89.67-2.02",
		 '17133':"m350.9 166.6l1.25 1.14 2.36 1.92.28.59-1.38.06.07 1.14-1.65.71-.51-.38-.85-.82-.03-.03-.03-.04-.19-.25-.12-.29-.13-.58-.02-.54v-.13l.02-.05.15-.5.04-.09.03-.04.69-1.81",
		 '17157':"m357.9 170.1l.21 3.43-.67 2.02-2.72-.76-2.85-2.6 1.65-.71-.07-1.14 1.38-.06 1.97-.11 1.11-.07",
		 '17145':"m357.9 170.1l4.47-.23.27 1.13-.33 2.3-4.2.23-.21-3.43",
		 '17055':"m366.9 170.7l.24 3.4-4.48.35-.35-1.13.33-2.3 4.26-.32",
		 '17065':"m370.1 168.7l.32 4.5-3.34.28-.2-2.84-.11-1.7 3.33-.24",
		 '17193':"m373.9 168.3l.37.42-.06 1.35-.14 2.99-.03.05-.03.02h-.02l-.48.02-3.1.001-.32-4.5 2.2-.19 1.6-.19",
		 '17081':"m366.6 166.1l.18 2.83.11 1.7-4.26.32-.27-1.13-.21-3.39 4.45-.34",
		 '17189':"m362.1 166.1l.02.38.21 3.39-4.47.23-1.11.07-.18-2.58.34-.34.51-.43.41-.15 3-.52 1.27-.04",
		 '17027':"m360.8 163.1h1.16l.17 3-1.27.04-3 .52-.41.15-.51.43-.34.34-.23-3.07 1.01-1.22 3.42-.22",
		 '17163':"m351.6 164.7l4.74-.23.23 3.07.18 2.58-1.97.11-.28-.59-2.36-1.92-1.25-1.14.05-.16.66-1.71",
		 '17119':"m356.7 160l.1 1.04.16.56.31.79.07.89-1.01 1.22-4.74.23-.21-1.04.73-.89.02-.12.04-.3v-.08l-.04-.07-.98-.59-.19-.11-.25-.12-.26-.08 1.23-1.04 4.44-.27.59-.04",
		 '17005':"m360.6 159.4l.23 3.71-3.42.22-.07-.89-.31-.79-.16-.56-.1-1.04 3.84-.64",
		 '17121':"m362 163.1l-.08-1.14 1.38-.09 3-.27.19 2.85.12 1.7-4.45.34-.02-.38-.17-3",
		 '17191':"m370.9 164.2l1.1.31.3 4.06-2.2.19-3.33.24-.18-2.83-.12-1.7 4.44-.27",
		 '17185':"m374.4 164.3l2.61-.19-.72 2.06-1.94 2.58-.001.06-.37-.42.02-4.06.42-.04",
		 '17047':"m373.9 164.3l-.02 4.06-1.6.19-.3-4.06 1.92-.19",
		 '17101':"m377.8 160.3h.04l.02.04.38.83v.31l-.14.82-.1.18-.08.07-.79 1-.19.53-2.61.19-.27-3.63 3.73-.35",
		 '17159':"m374.1 160.6l.27 3.63-.42.04-1.92.19-1.1-.31-.41-1.13-.03-.19v-.36h.26l-.14-1.51 3.11-.29.37-.04",
		 '17025':"m366.2 160.4l3.3-.21.07.83 1.02-.1.14 1.51h-.26v.36l.03.19.41 1.13-4.44.27-.19-2.85-.07-1.15",
		 '17079':"m372.7 156.5l.57-.06.4 4.2-4.13.39-.33-4.21 3.49-.32",
		 '17033':"m373.3 156.5l3.2-.05.2.69.47.55.72 1.28-.03.41-.07.2-.06.08.08.64-3.73.35-.37.04-.4-4.2",
		 '17023':"m372.9 152.5l2.67-.31v.14l1.55-.14-.46 2.89-.13 1.34-3.2.05-.57.06-.27-2.65.4-1.37",
		 '17035':"m372.5 153.9l.27 2.65-4.58.43-.21-2.65 4.52-.43",
		 '17049':"m368.1 156.4l.05.58 1.09-.1.27 3.37-3.3.21-1.12.12-.28-3.95",
		 '17051':"m364.8 156.6l.28 3.95 1.12-.12.07 1.15-3 .27-1.38.09.08 1.14h-1.16l-.23-3.71.92-2.54 3.31-.23",
		 '17173':"m362.2 151.1l2.11-.14.09.94 2.33 1.34.47.18.67-.05.07.95.16 2.07-3.31.23-3.31.23-.12-1.7 1.13-.05-.15-2.29-.14-1.7",
		 '17135':"m355.7 153.3l1.65-.13.19 2.28 2.76-.19 1.1-.09.12 1.7-.92 2.54-3.84.64-.59.04-.48-6.8",
		 '17083':"m351.5 156.9l.23 3.4-1.23 1.04-1.78-.43-1.63-1.86.17-.89.44-.1.28.05.06.05v.03l.17.1 1.71-.13-.05-.66 1.15-.55.46-.03",
		 '17117':"m353.5 153.4l2.21-.16.48 6.8-4.44.27-.23-3.4-.27-3.34 2.24-.17",
		 '17013':"m343.4 155.6l3.33-.13.31 3.61 1.63 1.86-2.11.56-.54-1.44-.02-.09v-.04l.27-.42v-.16l-.46-1.58-2.42-2.15",
		 '17061':"m351.2 153.6l.27 3.34-.46.03-1.15.55.05.66-1.71.13-.17-.1v-.03l-.06-.05-.28-.05-.44.1-.17.89-.31-3.61.23-1.65 2.75-.14 1.46-.09",
		 '17021':"m360.2 149.2l.76.11.16 1.88 1.11-.07.14 1.7.15 2.29-1.13.05-1.1.09-2.76.19-.19-2.28-.12-1.51 1.28-1.41 1.32-1.04h.37",
		 '17029':"m367.7 150.7l4-.34-.03-.37.36-.08.58-.06.29 2.65-.4 1.37-4.52.43-.07-.95-.23-2.65",
		 '17045':"m372.7 147.3l3.96-.39.33 3.57.15 1.68-1.55.14v-.14l-2.67.31-.29-2.65-.09-.94.24-.46-.08-1.13",
		 '17041':"m367.5 147.7l5.14-.43.08 1.13-.24.46.09.94-.58.06-.36.08.03.37-4 .34-.16-1.82.02-1.14",
		 '17139':"m367.5 148.9l.16 1.82.23 2.65-.67.05-.47-.18-2.33-1.34-.09-.94.5-1.85 2.67-.21",
		 '17115':"m364.6 145.7l.26 3.41-.5 1.85-2.11.14-1.11.07-.16-1.88-.76-.11-.1-1.35.59-1.76 1.13-.09 2.19-.24.57-.04",
		 '17167':"m356.5 147.3l.93-.07.04.56.78.14 1.83-.12.1 1.35h-.37l-1.32 1.04-1.28 1.41.12 1.51-1.65.13-2.21.16v-.38l-.07-.28-.66-1.85-.14-.86-.08-1.14-.03-.38 2.21-.14.65-.25-.02-.26v-.48l1.17-.09",
		 '17137':"m346.7 149.2l5.79-.3.08 1.14.14.86.66 1.85.07.28v.38l-2.24.17-1.46.09-.08-1.51-.78-1.48-1.13-.4-1.14.06.23-.66-.14-.48",
		 '17171':"m349.8 153.7l-2.75.14.07-.23v-.05l-.08-.26-.35-.97-.18-1.37.16-.59 1.14-.06 1.13.4.78 1.48.08 1.51",
		 '17149':"m346.9 149.7l-.23.66-.16.59.18 1.37.35.97.08.26v.05l-.07.23-.23 1.65-3.33.13-2.38-2.47-1.39-1.06-.59-.93 1.62-.06 2.83-.15-.06-1.14 3.39-.12",
		 '17009':"m343.3 146.4l1.15-.08.98-.03.74.98.23.44h.9l-.6 1.48.14.48-3.39.12-.15-3.37",
		 '17001':"m343.3 145.3l.04 1.15.15 3.37.06 1.14-2.83.15-1.62.06-.98-2.38-.69-3.29 5.86-.2",
		 '17067':"m340.3 139.6l2.74-.16.19 4.61.04 1.18-5.86.2.06-.63.72-1.72.3-.1h.001l.1-.09.02-.11.03-1.17v-.13l-.05-.16-.16-.23-.2-.09-.03-.11.001-.1.41-.63.04-.04.04-.03.03-.03.09-.05.24-.14.06-.03h.001l.51-.18h.08l.26-.02h.31",
		 '17109':"m344.2 139.5l3.34-.09.22 4.56-4.49.15-.19-4.61 1.12-.02",
		 '17169':"m343.2 144.1l4.49-.15 2.52 1.05-1.47.87-1.45 1.86h-.9l-.23-.44-.74-.98-.98.03-1.15.08-.09-2.33",
		 '17017':"m348.8 145.9l.74.85.87-.001h.02l.97-.4.9-.37.04-.07.17 2.67.03.38-5.79.3.6-1.48 1.45-1.86",
		 '17129':"m352.3 145.8l.43-.34 2.7-.54.35.06.35.38.35 1.88-1.17.09v.48l.02.26-.65.25-2.21.14-.17-2.67",
		 '17125':"m352.7 141.6l2-.13.12 1.51 1.09-.09.19 2.56-.35-.38-.35-.06-2.7.54-.43.34-.04.07-.9.37-.97.4h-.02l-.87.001-.74-.85 1.47-.87.67-.6.06-.08.46-.85.12-.73.05-.2.06-.11.91-.77.14-.08",
		 '17107':"m359.3 142.6l1.16.48.26 3-.59 1.76-1.83.12-.78-.14-.04-.56-.93.07-.35-1.88-.19-2.56 3.31-.29",
		 '17039':"m366 142.6l-1.44 3.06-.57.04-2.19.24-1.13.09-.26-3 5.6-.42",
		 '17147':"m366 142.6l1.12-.09.39 5.21-.02 1.14-2.67.21-.26-3.41 1.44-3.06",
		 '17019':"m367 141l5.13-.43.23 2.25-.13.001.43 4.47-5.14.43-.39-5.21-.13-1.52",
		 '17053':"m368.5 133.1l1.11-.13.68 6.59 1.78-.13.12 1.12-5.13.43-.22-2.83 2.18-.18-.52-4.87",
		 '17113':"m362.1 136.8l3.34-.31.1 1.13.13.69 1.11-.1.22 2.83.13 1.52-1.12.09-5.6.42-1.16-.48-.3-3.48 1.31-.13.84-.46.54-.53.45-1.19",
		 '17179':"m356 137.3l2.18-.16.05.76.09.97.58.23.3 3.48-3.31.29-1.09.09-.12-1.51-2 .13.44-1.03 2-1.28.91-1.38.07-.23-.05-.24-.06-.11",
		 '17203':"m360.8 134.6l1.12-.11.19 2.26-.45 1.19-.54.53-.84.46-1.31.13-.58-.23-.09-.97-.05-.76-2.18.16.65-2.3 4.1-.35",
		 '17143':"m355 134.4l1.65.57-.65 2.3.06.11.05.24-.07.23-.91 1.38-2 1.28-.05-.87-.05-.57-1.12.05-.04-1.12-.21-3.4 3.35-.21",
		 '17057':"m351.9 138l.04 1.12 1.12-.05.05.57.05.87-.44 1.03-.14.08-.91.77-.06.11-.05.2-.12.73-.46.85-.06.08-.67.6-2.52-1.05-.22-4.56-.05-1.13 4.45-.24",
		 '17187':"m343.9 133.8l3.34-.13.27 5.66-3.34.09-.27-5.62",
		 '17071':"m342.3 133.9l1.58-.06.27 5.62-1.12.02-2.74.16.68-.79.07-1.46.04-.17.75-1.07.1-.1.28-.16.05-.08.08-.38.04-1.05-.05-.35-.04-.11",
		 '17131':"m340.9 130.6l6.22-.26.15 3.41-3.34.13-1.58.06v-.03-.31l-.45-.74-.08-.09-.08-.04-.13.02-.31-.15-.65-.79-.001-.12.28-1.1",
		 '17095':"m351.6 132.3l.14 2.27.21 3.4-4.45.24-.22-4.53-.05-1.13 4.37-.24",
		 '17175':"m352.7 131.2l2.18.97.15 2.26-3.35.21-.14-2.27 1.15-1.18",
		 '17123':"m354.9 132.1l1.66-.11 1.32-.09-.02.32-.02.09-.06.08-.1.05-.05.06 1.89-.14 1.27 2.23-4.1.35-1.65-.57-.15-2.26",
		 '17155':"m359.3 129.7l.21 2.67-1.89.14.05-.06.1-.05.06-.08.02-.09.02-.32-1.32.09-.08-1.11 1.3-.98.52-.29.12-.001.9.09",
		 '17105':"m365.1 131.9l3.22-.33.17 1.54.52 4.87-2.18.18-1.11.1-.13-.69-.1-1.13-3.34.31-.19-2.26-.17-2.31 3.32-.28",
		 '17091':"m375.2 130.3l.19 2-5.83.67-1.11.13-.17-1.54-.02-1.14 1.67-.19.49-.75-.05-.43 4.67-.48.15 1.71",
		 '17063':"m367.9 127.1l.35 3.38.02 1.14-3.22.33-.45-4.51 3.29-.34",
		 '17197':"m367.5 123.7l2.26.32.06.57 2.46 2.03 2.54-.23.19 2.22-4.67.48.05.43-.49.75-1.67.19-.35-3.38-.37-3.38",
		 '17093':"m367.5 123.7l.37 3.38-3.29.34-.24-2.25-.08-1.14 3.24-.33",
		 '17099':"m361.2 125.5l3.21-.29.24 2.25.45 4.51-3.32.28.17 2.31-1.12.11-1.27-2.23-.21-2.67-.33-4.12 1.1-.05 1.08-.1",
		 '17011':"m359 126.2l.28 3.56-.9-.09-.12.001-.52.29-1.3.98.08 1.11-1.66.11-2.18-.97-.34-4.53 2.21-.16 4.45-.31",
		 '17073':"m352.4 126.6l.34 4.53-1.15 1.18-4.37.24-.1-2.28-.08-1.68.61-.64.11-.09.17-.08.46-.11.36-.06.5-.26.09-.19.04-.23-.001-.08-.05-.07 3.1-.19",
		 '17161':"m348.6 124.3l-.04.25v.24l.11.52.14.29.19.17.19.07.16.1.13.14.02.17v.16l-.03.29-.02.04-.16.12.05.07.001.08-.04.23-.09.19-.5.26-.36.06-.46.11-.17.08-.11.09-.61.64.08 1.68-6.22.26.11-.45.13-.55v-.02l.07-.1.11-.08.36-.13 1.35-.37h.59l.14.02h.33l.78-.2 1.82-.9.57-.67.5-.67.15-1.41.68-.76",
		 '17103':"m354.3 122.4l.64-.05 1.92-.14.001.19 3.99-.34.28 3.41-1.08.1-1.1.05.04.56-4.45.31-.26-4.1",
		 '17195':"m353.8 122l.57.34.26 4.1-2.21.16-3.1.19.16-.12.02-.04.03-.29v-.16l-.02-.17-.13-.14-.16-.1-.19-.07-.19-.17-.14-.29-.11-.52v-.24l.04-.25.74-1.93 4.44-.31",
		 '17015':"m353.5 118.6l.25 3.48-4.44.31-.1-1.35-1.67-1.99 3.77-.27 2.19-.18",
		 '17141':"m356.3 118.3l2.12-.18.05.7 2.21-.19.23 3.37-3.99.34-.001-.19-1.92.14-.64.05-.57-.34-.25-3.48 2.77-.23",
		 '17037':"m364 118.4l.31 5.63.08 1.14-3.21.29-.28-3.41-.23-3.37 2.22-.18 1.11-.09",
		 '17089':"m367.3 118.1l-.06 2.19.28 3.38-3.24.33-.31-5.63 3.33-.27",
		 '17043':"m367.5 123.7l-.28-3.38 2.2-.26.95-.1.14.46.33 3.11-1.06.5-2.26-.32",
		 '17031':"m367.7 118.1l4.17-.33.95 1.28.52 1.45.11.39.1.42.09.3.04.08.07.15.28.51.59.96.26 3.08-2.54.23-2.46-2.03-.06-.57 1.06-.5-.33-3.11-.14-.46-.95.1-2.2.26.06-2.19.37-.03",
		 '17097':"m367.3 113.7l3.78-.26.05.26.03 1.13-.09.27-.04.05-.06.41v.38l.09.4.2.48.14.3.45.69-4.17.33-.37-4.42",
		 '17111':"m366.3 113.8l.98-.1.37 4.42-.37.03-3.33.27-1.11.09-.36-4.39 3.8-.32",
		 '17007':"m361.9 114.1l.65-.05.36 4.39-2.22.18-.34-4.43 1.55-.1",
		 '17201':"m360.3 114.2l.34 4.43-2.21.19-.05-.7-2.12.18-.32-3.86.34-.02 4-.22",
		 '17177':"m351.8 114.7l4.12-.21.32 3.86-2.77.23-2.19.18-.32-4 .84-.05",
		 '17085':"m351 114.7l.32 4-3.77.27-.4-.13-.18-.11-.16-.13-.28-.35v-.001l-.13-.3v-.08l.05-.12.05-.36v-.05l-.03-.04-.57-.66-.02-.02-.81-.57-.64-.33-.22-.16-.08-.08-.02-.06v-.07-.03l.13-.23 2.03-.1 4.73-.28",
		 '18127':"m380.2 122.8l.62 6.12-.08.11-.28.15-.08-.02-.74-.47-.52-.18-.19-.05-.11.02-.54.32-.23.32-.49-4.93 2.66-1.38",
		 '18089':"m374.6 123.3l2.98.83.49 4.93-.52.35-2.35.9-.15-1.71-.45-5.31",
		 '18123':"m387 167.1l1.09-.15 1.18.66.16 1.43-.2.68h-.06l-.21.04-.05.03-.04.06-.02.14.08.77-.66 1.5-.28.22-.13.04h-.08l-1.79-1.86-.03-2.7-.06-.57 1.14-.09-.03-.19",
		 '18147':"m386 168l.03 2.7-1.57 1.04-.63.59-.75 1.36-1.47-.98-.05-.62.02-.05 1.71-2.58.45-1.22 2.26-.24",
		 '18173':"m380.7 167.9l2.46-.06.59.32-.45 1.22-1.71 2.58-.02.05.05.62-.36-.25-1.55-.41-.1-1.22-.23.02-.09-1.13v-.57l-.03-.46 1.5-.14-.05-.57",
		 '18163':"m377.1 169.3l2.22-.16v.57l.09 1.13.23-.02.1 1.22-2.46.74-.18-3.48",
		 '18129':"m374.3 168.7l2.74.57.18 3.48-2.29.18-.9 1.42-.51-1.14.48-.02h.02l.02-.001.03-.06.14-2.99.06-1.35.001-.06",
		 '18051':"m376.2 166.1l2.64-1.78.08.88.22.37.59.71.14-.05.53-.09.08.04.2 2.31-1.5.14.03.46-2.22.16-2.74-.57 1.94-2.58",
		 '18125':"m381.1 164l1.73.23.34 3.65-2.46.06-.15-1.74-.08-.04-.53.09-.14.05-.59-.71-.22-.37-.08-.88.37-.13.66-.1.07.02.55.37.13-.03.17-.15.13-.13.12-.18",
		 '18037':"m386.7 163.7l.18 1.7.19 1.7.03.19-1.14.09.06.57-2.26.24-.59-.32-.34-3.65h1.49l2.38-.52",
		 '18025':"m390.5 164.7l.54-.05.23 3.8-2.03 1.31.2-.68-.16-1.43-1.18-.66-1.09.15-.19-1.7 2.29-.25 1.43-.11-.04-.37",
		 '18061':"m393.3 164.4l.12 1.13.22.36h.03l.41.3.21.17.64.91.001.1-.25 2.27-.49.17-.3.1-1.46-.07h-.07l-.44-.17-.45-.3-.05-.03-.02-.04-.06-.09-.07-.25v-.02-.06-.09-.02l.03-.36-.23-3.8 2.22-.17",
		 '18043':"m393.7 164.4v.09l.29.07 1.58-.18.55.65-.22.83-.94 1.55-.001-.1-.64-.91-.21-.17-.41-.3h-.03l-.22-.36-.12-1.13.38-.04",
		 '18019':"m397.6 161.5l1.45.1.03.81-1.84 2.08-1.4 1.35.22-.83-.55-.65-1.58.18-.29-.07v-.09l-.08-.91.44-.22.62-.08.17-.21.14-.39-.02-.18 2.7-.88",
		 '18115':"m401.5 156.6l2.39-1.36 1 1.59-3.39.001v-.24",
		 '18155':"m401.5 156.9l3.39-.001.14.56-2.18 1.47-1.64 1.12-.35-2.87.64-.28",
		 '18077':"m398.4 157.4l2.39-.28.35 2.87-1.39-.48-.7 2.1-1.45-.1-.11-.94-.39-.14-.3-.16-.32-.34-.22-.28-.08-.71.71-.19.31-.5.1-.31.18-.41.92-.11",
		 '18143':"m396.2 158.9l.08.71.22.28.32.34.3.16.39.14.11.94-2.7.88-.64-2.2.83-1.04 1.09-.22",
		 '18175':"m390.4 160.2l3.88-.02.64 2.2.02.18-.14.39-.17.21-.62.08-.44.22.08.91-.38.04-2.22.17-.54.05-.35-3.43.23-1",
		 '18117':"m390.2 161.2l.35 3.43.04.37-1.43.11-2.29.25-.18-1.7-.21-2.07 3.72-.4",
		 '18101':"m384 159l2.19-.22.28 2.82.21 2.07-2.38.52-.3-5.19",
		 '18027':"m382.1 159.2l1.93-.19.3 5.19h-1.49l-1.73-.23-.45-1.98.13-1.06.18-.35.84-1.17.29-.23",
		 '18083':"m380.7 159.3l1.42-.08-.29.23-.84 1.17-.18.35-.13 1.06.45 1.98-.12.18-.13.13-.17.15-.13.03-.55-.37-.07-.02-.66.1-.37.13-2.64 1.78.72-2.06.19-.53.79-1 .08-.07.1-.18.14-.82v-.31l-.38-.83-.02-.04h-.04l-.08-.64 2.91-.34",
		 '18153':"m380.2 154.7l.1 1.13.32 3.42-2.91.34.06-.08.07-.2.03-.41-.72-1.28-.47-.55-.2-.69.13-1.34 3.59-.32",
		 '18055':"m382.2 155.8l3.68-.32.22 2.24.11 1.14-2.19.22-1.93.19-1.42.08-.32-3.42 1.84-.12",
		 '18093':"m386.1 157.7l3.61-.34.72 2.9-.23 1-3.72.4-.28-2.82-.11-1.14",
		 '18071':"m392 156.3l2.75-.53.4 3.37-.83 1.04-3.88.02-.72-2.9-.08-.75 2.35-.26",
		 '18079':"m398.1 153.8l.36 3.66-.92.11-.18.41-.1.31-.31.5-.71.19-1.09.22-.4-3.37 1.02-.93 2.34-1.11",
		 '18137':"m401.6 151.9l-.13 4.71v.24l-.64.28-2.39.28-.36-3.66 1.31-1.1 2.22-.76",
		 '18029':"m401.6 151.9l2.43-.26.3 2.58-.46 1.04-2.39 1.36.13-4.71",
		 '18047':"m403.8 148.8l.29 2.8-2.43.26-2.22.76-.28-2.39-.11-.93 2.57-.31 2.17-.2",
		 '18031':"m395.9 150.6l3.26-.37.28 2.39-1.31 1.1-2.34 1.11-.29-2.84.4-1.39",
		 '18005':"m395.5 152l.29 2.84-1.02.93-2.75.53-.45-3.79 1.31-.18 2.63-.32",
		 '18013':"m389.9 152.7l1.64-.2.45 3.79-2.35.26-1-3.7 1.28-.16",
		 '18105':"m386.1 153l2.46-.14 1 3.7.08.75-3.61.34-.22-2.24.28-2.41",
		 '18119':"m382.9 151.7l2.49-.2.71 1.53-.28 2.41-3.68.32-.2-2.26 1.09-.09-.13-1.7",
		 '18021':"m380.2 150.2l1.83-.15.88 1.64.13 1.7-1.09.09.2 2.26-1.84.12-.1-1.13-.3-3.39.38-.02-.09-1.13",
		 '18167':"m380.2 150.2l.09 1.13-.38.02.3 3.39-3.59.32.46-2.89-.15-1.68 1.47-.14 1.8-.15",
		 '18165':"m377.6 143.7l.07 2.28.45.59.13.17.18.36-.08 2.31.1 1-1.47.14-.33-3.57-.29-3.43 1.24.16",
		 '18121':"m380.9 145.6l.9 1.04.29 3.39-1.83.15-1.8.15-.1-1 .08-2.31-.18-.36-.13-.17-.45-.59 3.22-.3",
		 '18133':"m381.8 146.7l3.08-.28h.08l.17 1.77.29 1.25.17.36-.13 1.72-2.49.2-.88-1.64-.29-3.39",
		 '18109':"m389.5 148.9l.37 3.78-1.28.16-2.46.14-.71-1.53.13-1.72 1.88-.18-.04-.38 1.27-.15h.09l.75-.1",
		 '18081':"m392.4 148.6l.4 3.76-1.31.18-1.64.2-.37-3.78 2.92-.36",
		 '18145':"m392.4 147.8l3.12-.35.38 3.17-.4 1.39-2.63.32-.4-3.76-.08-.76",
		 '18139':"m395.7 146.3l2.89-.33.53 4.31-3.26.37-.38-3.17.23-1.18",
		 '18041':"m398.6 146l.78-.1.37-.04.09.94 1.47-.16.26 2.43-2.57.31-.41-3.39",
		 '18161':"m401.3 146.6l2.14-.41.24 2.06.07.59-2.17.2-.26-2.43",
		 '18177':"m403.1 142.6l.12 1.14.27 2.46-2.14.41-1.47.16-.09-.94-.37.04-.13-2.81 3.81-.45",
		 '18065':"m395.5 142.5l3.53-.39.23.92.13 2.81-.78.1-2.89.33-.03-2.08-.19-1.69",
		 '18059':"m395.7 144.2l.03 2.08-.23 1.18-3.12.35-.18-2.99.71-.29 2.79-.33",
		 '18097':"m392.2 144.8l.18 2.99.08.76-2.92.36-.75.1-.38-3.78.84-.11 2.96-.33",
		 '18063':"m388.4 145.3l.38 3.78h-.09l-1.27.15.04.38-1.88.18-.17-.36-.29-1.25-.17-1.77h-.08l-.07-.75 3.6-.38",
		 '18011':"m388.9 141.9l.36 3.29-.84.11-3.6.38-.33-3.31 4.42-.47",
		 '18057':"m388.8 141.4l3.7-.43.37 3.56-.71.29-2.96.33-.36-3.29-.05-.46",
		 '18135':"m398.6 139.2l4-.51.4 3.94-3.81.45-.23-.92-.38-2.97",
		 '18035':"m398.5 138.2l.12.93.38 2.97-3.53.39-.45-3.9 1.3-.14 2.18-.25",
		 '18095':"m395 138.6l.45 3.9.19 1.69-2.79.33-.37-3.56-.23-2.06 2.75-.31",
		 '18159':"m392.3 138.9l.23 2.06-3.7.43-.22-2.04 3.65-.81.04.37",
		 '18023':"m384.1 139.1l3.1-.31.65-.06.06.56.3.16.37-.04.22 2.04.05.46-4.42.47-.05-.46-.27-2.82",
		 '18107':"m384.4 141.9l.05.46.33 3.31.07.75-3.08.28-.9-1.04-.33-3.39 3.86-.37",
		 '18045':"m380.5 142.2l.33 3.39-3.22.3-.07-2.28-.31-.33-.05-.12v-.07l.13-.25 1.55-1.63.24-.2 1.2-.78.18 1.96",
		 '18075':"m402.3 135.3l.32 2.84.07.55-4 .51-.12-.93-.09-2.45 1.28-.16 2.57-.35",
		 '18009':"m396 136.1l2.38-.28.09 2.45-2.18.25-.3-2.42",
		 '18053':"m394.1 135.1l1.83-.21.14 1.12.3 2.42-1.3.14-2.75.31-.04-.37-.24-2.05-.13-1.11 2.19-.25",
		 '18067':"m389.1 136.8l2.91-.34.24 2.05-3.65.81-.37.04-.3-.16-.06-.56-.65.06-.15-1.67 2.02-.23",
		 '18015':"m387.1 137.1l.15 1.67-3.1.31-.2-1.67-.71.06-.12-1.08.05-1.07.04-.09.04-.05 1.61-.14.55-.05 1.52.41.17 1.7",
		 '18157':"m380.1 137.7l3.14-.29.71-.06.2 1.67.27 2.82-3.86.37-.18-1.96-.15-1.41-.12-1.13",
		 '18171':"m376 139.2l4.2-.37.15 1.41-1.2.78-.24.2-1.55 1.63-.13.25v.07l.05.12.31.33-1.24-.16-.33-4.26",
		 '18007':"m378.2 135.7l1.63-.15.37 3.37-4.2.37-.001-.18-.28-3.18 2.5-.22",
		 '18001':"m401.7 130.7l.3 2.51.24 2-2.57.35-.57-4.5 2.6-.36",
		 '18179':"m396.6 131.4l2.52-.3.57 4.5-1.28.16-2.38.28-.14-1.12 1.1-.13-.4-3.39",
		 '18069':"m393.5 130.6l2.96-.37.12 1.14.4 3.39-1.1.13-1.83.21-.55-4.5",
		 '18169':"m393.1 130.1l.45.53.55 4.5-2.19.25-.73.09-.54-4.49-.05-.56 2.51-.32",
		 '18103':"m390.6 131l.54 4.49.73-.09.13 1.11-2.91.34-.5-4.47 2.02-1.38",
		 '18017':"m385.7 132.7l2.89-.29.5 4.47-2.02.23-.17-1.7-1.52-.41-.55.05-.23-2.26 1.09-.09",
		 '18181':"m384.6 132.8l.23 2.26-1.61.14-.04.05-.04.09-.05 1.07.12 1.08-3.14.29-.24-2.24 1.41-2.43 3.37-.31",
		 '18003':"m401.2 126.5l.41 3.4.11.86-2.6.36-2.52.3-.12-1.14-.11-3.37 1.1-.13 3.71-.52.03.24",
		 '18183':"m393 126.9l1.11-.13.03.37 2.2-.22.11 3.37-2.96.37-.45-.53-.21-1.7.33-.04-.09-.97-.07-.53",
		 '18049':"m385.4 129.3l3.74-.4 1.44 1.55.05.56-2.02 1.38-2.89.29-.33-3.38",
		 '18131':"m385.4 129.3l.33 3.38-1.09.09-3.37.31-.32-3.36 4.45-.43",
		 '18033':"m397.1 123.4l3.71-.48.16 1.34.24 2-3.71.52-.4-3.38",
		 '18113':"m397.1 123.4l.4 3.38-1.1.13-2.2.22-.03-.37-1.11.13-.21-1.83-.13-1.11 4.4-.54",
		 '18085':"m388.9 125.5l3.88-.43.21 1.83.07.53.09.97-.33.04.21 1.7-2.51.32-1.44-1.55-.18-3.42",
		 '18099':"m388.9 125.5l.18 3.42-3.74.4-.34-3.38-.06-.56 1.72-.2 2.17-.23.06.55",
		 '18149':"m385 125.9l.34 3.38-4.45.43-.08-.84 1.06-.58.28-.18.22-.35.17-.32.06-.17.2-.76.52-.45 1.13-.11.56-.06",
		 '18073':"m380.9 128.9l.08.84.32 3.36-1.41 2.43-1.63.15-.22-2.26-.05-.02-.03-.06-.35-3.89.52-.35.23-.32.54-.32.11-.02.19.05.52.18.74.47.08.02.28-.15.08-.11",
		 '18111':"m375.2 130.3l2.35-.9.35 3.89.03.06.05.02.22 2.26-2.5.22-.32-3.54-.19-2",
		 '18151':"m400.2 120l.28.8.27 2.14-3.71.48-.37-3 3.53-.41",
		 '18087':"m395.8 120.5l.91-.1.37 3-4.4.54-.38-3.04 3.5-.4",
		 '18039':"m392.3 120.9l.38 3.04.13 1.11-3.88.43-.47-4.18 2.58-.26 1.25-.13",
		 '18141':"m388.5 121.3l.41 3.63-2.17.23-1.72.2.06.56-.56.06-.41-4.22 2.84-.29 1.56-.17",
		 '18091':"m381.2 122l2.87-.28.41 4.22-1.13.11-.52.45-.2.76-.06.17-.17.32-.22.35-.28.18-1.06.58-.62-6.12.97-.73",
		 '20043':"m300 149.1h.31v.12l.06.09 1.19 1.08.48.31.24.09.19.07.04.001h.05l.38-.04.07-.03.06-.05.35-.39.82 1.04.08.38.08.36-.21.46-.21.04-.71.63-.04.05-.34.5-.12.17-2.74-.36-.03-4.51",
		 '20013':"m295.6 149.1l4.4-.02.03 4.51-2.21.001h-2.22v-4.52",
		 '20187':"m232.4 176.6l5.2.35-.25 4.51-.32-.02-4.93-.31.22-3.31.07-1.22",
		 '20129':"m232.1 181.1l4.93.31-.28 5.1-4.83-.27h-.14l.33-5.14",
		 '20189':"m237 181.4l.32.02 4.43.26.22.001-.26 5.06-4.99-.25.28-5.1",
		 '20067':"m237.6 176.9l4.42.24-.24 4.53-4.43-.26.25-4.51",
		 '20081':"m246.4 177.4l-.18 3.39-.05 1.14-4.22-.22-.22-.001.24-4.53 4.43.23",
		 '20175':"m246.2 181.9l-.05 5-3.19-.13-1.24-.06.26-5.06 4.22.22",
		 '20119':"m250.7 181l1.1.06-.09 6.15-5.56-.23.05-5 .05-1.14 4.44.2",
		 '20069':"m250.8 175.3l-.14 5.7-4.44-.2.18-3.39-.07-1.21.12-2.25 4.41.23-.06 1.13",
		 '20057':"m250.8 175.3l6.64.29.02 2.32-.09 3.47-5.59-.31-1.1-.06.14-5.7",
		 '20025':"m257.4 181.4l.08 1.13-.16 4.96-4.72-.22-.89-.04.09-6.15 5.59.31",
		 '20033':"m262.9 182.6l-.05 5-4.65-.16-.87-.03.16-4.96 5.41.14",
		 '20097':"m257.5 177.9l5.52.22-.09 3.41-.03 1.12-5.41-.14-.08-1.13.09-3.47",
		 '20047':"m257.5 173.3l2.2.08-.04 1.13 3.31.11.001 2.28-.04 1.2-5.52-.22-.02-2.32.09-2.27",
		 '20151':"m268.5 177.1l.05 1.19-.09 3.4-5.56-.15.09-3.41.04-1.2 5.47.17",
		 '20007':"m262.9 181.5l5.56.15 1.14 1.16-.1 5-2.02-.06-4.66-.14.05-5 .03-1.12",
		 '20077':"m269.6 182.8l5.52.09-.04 5-3.17-.06-2.4-.05.1-5",
		 '20095':"m268.5 178.3l6.65.13-.06 3.38-.02 1.14-5.52-.09-1.14-1.16.09-3.4",
		 '20155':"m274.1 172.7l2.22.04-.06 3.39-1.11 2.31-6.65-.13-.05-1.19.11-4.53 5.54.12",
		 '20079':"m279.7 172.8l2.19 1.15-.02 2.27-5.55-.09.06-3.39 3.32.06",
		 '20173':"m276.3 176.1l5.55.09-.08 5.68-6.65-.09.06-3.38 1.11-2.31",
		 '20191':"m275.1 181.8l6.65.09-.02 6.19-3.22-.04-3.47-.06.04-5 .02-1.14",
		 '20035':"m281.8 181.9l6.37.05v2.26l-.03 3.94-2.29-.001-4.06-.04.02-6.19",
		 '20015':"m285 174l3.21.001-.06 6.23-.001 1.7-6.37-.05.08-5.68.02-2.27 3.15.06",
		 '20019':"m288.1 184.2l5.71.06v3.9h-.37l-5.37-.02.03-3.94",
		 '20049':"m293.9 180.3v2.82l-.03 1.14-5.71-.06v-2.26l.001-1.7 5.72.06",
		 '20073':"m293.9 172.9v1.7l-.001 3.97v1.7l-5.72-.06.06-6.23 1.67-1.12 4 .03",
		 '20125':"m293.9 183.1l4.43.02h.05l.04 1.52-.03 2.66v.81l-2.7.001h-1.81v-3.9l.03-1.14",
		 '20205':"m293.9 178.6h4.41l.02 4.53-4.43-.02v-4.52",
		 '20207':"m293.9 174.6l4.44.001-.05 3.97h-4.41l.001-3.97",
		 '20099':"m298.4 183.1l4.41-.03.13.57.06 4.42-3.42.03h-1.17v-.81l.03-2.66-.04-1.52",
		 '20133':"m302.7 178.6v.75l.04 3.78-4.41.03h-.05l-.02-4.53 4.43-.03",
		 '20001':"m302.8 174.6l-.07 3.97-4.43.03.05-3.97 4.45-.03",
		 '20021':"m302.9 183.7l4.66-.04.06 4.42-3.98.03h-.67l-.06-4.42",
		 '20037':"m307.5 179.3l.06 4v.34l-4.66.04-.13-.57-.04-3.78 4.76-.04",
		 '20011':"m302.8 174.6l4.68-.05.03 4.73-4.76.04v-.75l.07-3.97",
		 '20075':"m232.8 169.8l4.79.28.25.001-.21 3.77.04 1.9-.07 1.19-5.2-.35.41-6.8",
		 '20071':"m233.1 164.1l4.76.26-.33 5.66-4.79-.28.28-4.58.07-1.07",
		 '20199':"m239.1 158.8l-.39 5.64-.83-.04-4.76-.26.27-4.53.06-1.12 5.64.32",
		 '20181':"m233.8 152.8l6.27.38.24.001-.35 5.62-.86-.05-5.64-.32.33-5.65",
		 '20023':"m234.1 147.2l6.27.39-.35 5.63-6.27-.38v-.07l.34-5.57",
		 '20185':"m264.2 171.3l4.35.13.04 1.14-.11 4.53-5.47-.17-.001-2.28 1.1.04.11-3.38",
		 '20093':"m237.8 170.1l4.19.22h.22l-.1 2.17-.2 3.49.08 1.21-4.42-.24.07-1.19-.04-1.9.21-3.77",
		 '20055':"m246.4 170.5l4.42.24h.17l-.14 3.39-4.41-.23-.12 2.25.07 1.21-4.43-.23-.08-1.21.2-3.49.1-2.17 4.21.22",
		 '20083':"m257.5 171l.06 2.28-.09 2.27-6.64-.29.06-1.13.14-3.39 6.46.27",
		 '20145':"m257.5 169.9l5.54.21 1.17 1.18-.11 3.38-1.1-.04-3.31-.11.04-1.13-2.2-.08-.06-2.28.04-1.14",
		 '20031':"m298.4 169.5v.57l.02 1.7h-.09v2.88l-4.44-.001v-1.7l.08-3.42 4.44-.001",
		 '20003':"m298.4 170l4.44-.03.02 1.7-.1 1.74v1.14l-4.45.03v-2.88h.09l-.02-1.7",
		 '20107':"m307.4 170l.05 4.27v.3l-4.68.05v-1.14l.1-1.74-.02-1.7 4.54-.04",
		 '20121':"m307.4 165.4l.001 3.39.001 1.15-4.54.04.04-4.53 4.47-.05",
		 '20059':"m298.5 165.5l4.44-.04-.04 4.53-4.44.03v-.57l.05-3.95",
		 '20139':"m298.5 163.8v1.71l-.05 3.95-4.44.001.04-3.96v-1.7l4.44-.001",
		 '20111':"m290 165.5l4.06.001-.04 3.96-.08 3.42-4-.03.05-4.53.02-2.83",
		 '20017':"m285.3 168.3l4.66.04-.05 4.53-1.67 1.12-3.21-.001.02-2.14.05-1.28h.18l.02-2.26",
		 '20127':"m288.5 163.8l1.48 1.7-.02 2.83-4.66-.04-1.1-1.14.43-3.38 3.88.03",
		 '20115':"m284.2 167.1l1.1 1.14-.02 2.26h-.18l-.05 1.28-.02 2.14-3.15-.06-2.19-1.15.08-5.67 4.42.05",
		 '20113':"m279.8 167.1l-.08 5.67-3.32-.06-2.22-.04.09-5.67 5.53.1",
		 '20159':"m268.6 168l5.57.12-.07 4.54-5.54-.12-.04-1.14.08-3.39",
		 '20169':"m279.8 162.6l-.07 4.53-5.53-.1.03-3.4.02-1.13 5.55.1",
		 '20053':"m268.7 163.5l5.54.13-.03 3.4-.02 1.13-5.57-.12v-2.28l.07-2.26",
		 '20009':"m268.7 165.7v2.28l-.08 3.39-4.35-.13-1.17-1.18.14-4.53 5.46.15",
		 '20165':"m257.7 165.4l5.42.18h.1l-.14 4.53-5.54-.21.17-4.51",
		 '20135':"m251.1 165.1l.93.05 5.54.24h.13l-.17 4.51-.04 1.14-6.46-.27h-.17l.22-5.66",
		 '20101':"m246.7 164.9l4.4.24-.22 5.66-4.42-.24.24-5.66",
		 '20171':"m242.3 164.6l3.09.17 1.3.06-.24 5.66-4.21-.22h-.22l.28-5.66",
		 '20203':"m238.7 164.4l3.55.19-.28 5.66-4.19-.22-.25-.001.33-5.66.83.04",
		 '20109':"m240 158.8l1.48.08 1.51.11 2.76.14-.35 5.62-3.09-.17-3.55-.19.39-5.64.86.05",
		 '20063':"m246.6 159.2l5.53.28h.16l-.31 5.64-.93-.05-4.4-.24-1.3-.06.35-5.62.9.04",
		 '20195':"m252.3 159.5l5.39.22h.13l-.28 5.66-5.54-.24.31-5.64",
		 '20051':"m257.8 159.7l5.4.18h.1l-.23 5.67-5.42-.18h-.13l.28-5.66",
		 '20167':"m263.3 159.9l5.44.16-.04 3.4-.07 2.26-5.46-.15h-.1l.23-5.67",
		 '20105':"m274.3 159.1l-.06 3.39-.02 1.13-5.54-.13.04-3.4.03-1.13 5.55.14",
		 '20143':"m274.4 157.9l5.55.1-.05 2.26-.04 2.26-5.55-.1.06-3.39.03-1.13",
		 '20041':"m283.9 160.3l.69 3.42-.43 3.38-4.42-.05.07-4.53.04-2.26 4.05.04",
		 '20061':"m283.9 160.3l.03-1.15 1.1.03-.03 1.7 2.69.22h.78v.38l-.02 2.26-3.88-.03-.69-3.42",
		 '20197':"m293.1 160.5l.93 3.34v1.7l-4.06-.001-1.48-1.7.02-2.26 1.12-1.67.06.06.25.16.1.03.52-.54.67-.16 1.19.09.24.09.14.18.28.59.001.1",
		 '20177':"m293.1 159.3h4.43l.9 2.08v2.42l-4.44.001-.93-3.34.04-1.17",
		 '20045':"m301.6 161.5l1.31.79.03 3.16-4.44.04v-1.71-2.42l.43-.16.2-.02.14.02.2.09.13.14.32.19.18.05h.14l1.38-.16",
		 '20091':"m304.4 162.2l.27-.82.06-.05.13-.04h.15l.85.22 1.53-.02.03 2.56v1.41l-4.47.05-.03-3.16 1.46-.13",
		 '20209':"m307.4 159.9l-.05.6.001.9-1.53.02-.85-.22h-.15l-.13.04-.06.05-.27.82-.001-1.79.07-.96h1.06l1.91.51",
		 '20103':"m301.6 156.6l2.09-.02 1.78 2.81h-1.06l-.07.96.001 1.79-1.46.13-1.31-.79-.02-1.1.07-1.31-.02-2.47",
		 '20087':"m297.7 156.7l3.87-.02.02 2.47-.07 1.31.02 1.1-1.38.16h-.14l-.18-.05-.32-.19-.13-.14-.2-.09-.14-.02-.2.02-.43.16-.9-2.08.18-2.64",
		 '20005':"m302.4 155.1l1.34 1.47-2.09.02-3.87.02.05-3.04 2.21-.001 2.74.36-.39 1.18",
		 '20085':"m297.7 156.7l-.18 2.64h-4.43v-4.54l2.43-1.13h2.22l-.05 3.04",
		 '20149':"m293.1 159.3l-.04 1.17-.001-.1-.28-.59-.14-.18-.24-.09-1.19-.09-.67.16-.52.54-.1-.03-.25-.16-.06-.06-.71-.21-.66-.29-.93-.86-.49-.77-.49-.9v-.52l.12-.2 1.27-1.38 3.38.02h2v4.54",
		 '20161':"m284 159.2l.07-4.5 1.5.001 2.22.02-1.27 1.38-.12.2v.52l.49.9.49.77.93.86.66.29.71.21-1.12 1.67v-.38h-.78l-2.69-.22.03-1.7-1.1-.03",
		 '20027':"m279.9 158l.06-3.39 4.05.06-.07 4.5-.03 1.15-4.05-.04.05-2.26",
		 '20029':"m274.4 154.5l.03-1.13 5.55.1-.001 1.13-.06 3.39-5.55-.1.05-3.39",
		 '20123':"m274.4 154.5l-.05 3.39-.03 1.13-5.55-.14.14-4.52 5.48.14",
		 '20141':"m268.8 158.9l-.03 1.13-5.44-.16h-.1l.06-1.89.08-1.5.08-2.26 5.32.16h.18l-.14 4.52",
		 '20163':"m257.9 154.1l5.3.18.21.001-.08 2.26-.08 1.5-.06 1.89-5.4-.18h-.13l.24-5.65",
		 '20065':"m252.1 159.5l.28-5.65 5.26.21.25.001-.24 5.65-5.39-.22h-.16",
		 '20179':"m246.9 153.6l5.33.27h.18l-.28 5.65-5.53-.28.29-5.65",
		 '20193':"m240 158.8l.35-5.62 6.39.34h.2l-.29 5.65-.9-.04-2.76-.14-1.51-.11-1.48-.08",
		 '20153':"m240.4 147.6l.85.04 5.54.3.19.001-.3 5.63-6.39-.34-.24-.001.35-5.63",
		 '20039':"m247 147.9l5.34.26h.15l-.27 5.64-5.33-.27h-.2l.3-5.63",
		 '20147':"m262.3 148.6l1.1.03-.17 5.64-5.3-.18-.25-.001.24-5.64 4.39.16",
		 '20137':"m257.9 148.4h.02l-.24 5.64-5.26-.21h-.18l.27-5.64 5.39.22",
		 '20183':"m263.4 148.6l3.34.1 2.18.06-.16 5.65-5.32-.16-.21-.001.17-5.64",
		 '20089':"m271.2 148.8l3.36.08-.09 4.52-.03 1.13-5.48-.14h-.18l.16-5.65 2.26.05",
		 '20157':"m275.6 148.9l4.44.07-.06 4.52-5.55-.1.09-4.52 1.08.02",
		 '20201':"m280.1 149l4.45.06 1.09.001-.06 5.65-1.5-.001-4.05-.06.001-1.13.06-4.52",
		 '20117':"m288.9 149.1l2.2.001-.001 5.65-3.38-.02-2.22-.02.06-5.65 3.35.03",
		 '20131':"m293.4 149.1h2.19v4.52l-2.43 1.13h-2l.001-5.65h2.24",
		 '21105':"m363.9 188.4l3.19-.08.23 3.51h-.11-.08l-.78-.91-.42-.16-2.43-.59.4-1.79",
		 '21075':"m363.6 190.1l2.43.59.42.16.78.91-5.25.38-.73.1.8-1.79 1.55-.35m-3.6 2.24l-.23-.33-.001-.001-.11-.24-.001-.06-.001-.04.001-.05.001-.06.001-.05.02-.02.12-.16.06-.04.19-.03.29.05.16.04.03.02.02.02h.001l.07.1v.001l.06.15.03.14v.03.06.03l-.03.13-.001.05-.02.03-.1.19-.56.03",
		 '21013':"m421 180.5l.27.53.68 2.93-2.08 1.11-2.58.5.38-1.34.69-1.21.96-.98.43-.4.63-.7.06-.27-.05-.1-.23-.18.85.11",
		 '21121':"m417.1 179.5l.13-.001.88.11.33.09.13.12.14.16.02.09.3.13.44.14.42.08h.22l.23.18.05.1-.06.27-.63.7-.43.4-.96.98-.69 1.21-.89-.41-1.29-1.5-.44-1.28 2.08-1.55",
		 '21235':"m412.9 181.5l2.07-.39.44 1.28 1.29 1.5.89.41-.38 1.34-.58.06-2.44.28-.65-.61-.3-.37-.59-1.28-.02-.18.28-2.05",
		 '21125':"m414 176.4l2.08.64-.13 1.02.31.34.53.33.28.42.06.33-2.08 1.55-2.07.39-.64-.1.4-2.57 1.26-2.36",
		 '21051':"m417.5 175.6l.83.04 1.52.75.41.04.23.26.5 3.84-.85-.11h-.22l-.42-.08-.44-.14-.3-.13-.02-.09-.14-.16-.13-.12-.33-.09-.88-.11-.13.001-.06-.33-.28-.42-.53-.33-.31-.34.13-1.02 1.44-1.47",
		 '21131':"m420.5 176.7l.76-1.02.86.5 1.11.7.39.34.41.72.16.54-.001.56-2.9 2.04-.27-.53-.5-3.84",
		 '21095':"m424.1 179l.64.17.31.38 1.52-.82.79.43-.04.98-.21.37-2.04 1.69-2.14 1.21-1.04.55-.68-2.93 2.9-2.04",
		 '21133':"m428.2 175.2l.46.4.29-.001.28-.23h.06l.33.21.4.36-2.67 3.29-.79-.43-1.52.82-.31-.38.12.1h.04l.46-.36.03-.05.03-.15-.001-.63-.26-.5.02-.09.18-.46.29-.54.18.13h.22l.4-.31.2-.2.19-.24.7-.49.68-.23",
		 '21119':"m425.9 172.7l1 .15.74.41.09.15.05.42-.02.35.18.54.05.06.23.13.19.09-.2.21-.68.23-.7.49-.19.24-.2.2-.4.31h-.22l-.18-.13-1.62-2.53 1.6-1.5.26.18",
		 '21193':"m424 174l1.62 2.53-.29.54-.18.46-.02.09.26.5.001.63-.03.15-.03.05-.46.36h-.04l-.12-.1-.64-.17.001-.56-.16-.54-.41-.72-.39-.34-1.11-.7-.86-.5-.76 1.02-.23-.26-.34-.96 1.19-.42 2.19-1.08.78.02",
		 '21189':"m419.3 173.3l.61 2.17.34.96-.41-.04-1.52-.75-.83-.04-1.29-2.05.24.18.23.1.2.04.8-.19.6-.31.12-.18.48-.03.43.15",
		 '21109':"m414 173.2l1.9.06.24.3 1.29 2.05-1.44 1.47-2.08-.64-.16-.62-.28-.67-.3-.42-.19-.35-.05-.33.03-.15 1.03-.7",
		 '21065':"m413.7 169.5l.81.09.43.43.69.46.81.05 1.08.27-1.55 2.47-1.9-.06-.37-3.71",
		 '21129':"m417.6 170.8l2 .76-.35 1.78-.43-.15-.48.03-.12.18-.6.31-.8.19-.2-.04-.23-.1-.24-.18-.24-.3 1.55-2.47.14-.02",
		 '21025':"m419.6 171.5l.34.19.31-.17.07-.1.13-.27.03-.17-.001-.08.03-.12.05-.09.27-.16 1.48.2 3.31 1.73-1.6 1.5-.78-.02-2.19 1.08-1.19.42-.61-2.17.35-1.78",
		 '21071':"m428.3 169.3l.84.35-.27.09-.17.1-.05.07.19 1.86.3.29.17.4v.28l-.2.82-.47 1.13-.17.23-.09.08-.19-.09-.23-.13-.05-.06-.18-.54.02-.35-.05-.42-.09-.15-.74-.41-1-.15-.56-2.94h.33l1.17-.6.32-.12h.3l.85.21.03.03",
		 '21115':"m428.3 167.2v2.09l-.03-.03-.85-.21h-.3l-.32.12-1.17.6h-.33l-.9-1.75-.03-1.37.09-.28.05-.09.17-.15h.04l1.22.26 1.05.53.6.21.7.09",
		 '21153':"m424.4 168l.9 1.75.56 2.94-.26-.18-3.31-1.73-.21-.54-.19-.72 1.18-1.78.03-.03h.4l.47.09.43.19",
		 '21237':"m419.5 168.6l.14.22.55.25 1.06.36.84.78.21.54-1.48-.2-.27.16-.05.09-.03.12.001.08-.03.17-.13.27-.07.1-.31.17-.34-.19-2-.76.59-1.51 1.3-.65",
		 '21197':"m414.7 168.3l2-.09 1.54 1.02-.59 1.51-.14.02-1.08-.27-.81-.05-.69-.46-.43-.43.2-1.24",
		 '21049':"m413.2 166.1l1.44 2.23-.2 1.24-.81-.09-2.64-.18.23-2.33 1.98-.87",
		 '21173':"m414.1 165l.54.51.52.08.11.1.58.54.67.81.09.17.04 1.05-2 .09-1.44-2.23.89-1.13",
		 '21165':"m419.2 166.2l.68.13-.32 2.3-1.3.65-1.54-1.02-.04-1.05 2.52-1",
		 '21175':"m424 166.1l.41.51.03 1.37-.43-.19-.47-.09h-.4l-.03.03-1.18 1.78.19.72-.84-.78-1.06-.36-.55-.25-.14-.22.32-2.3 1.56-1.28 2.6 1.07",
		 '21063':"m424.7 163.8l-.67 2.29-2.6-1.07.05-1.01.53-1.05.24.05.77.43.41.3.78.16h.32l.17-.09",
		 '21205':"m420.3 162.5l1.19 1.51-.05 1.01-1.56 1.28-.68-.13-1.6-1.58.52-.43.17-.19.43-.66-.09-.23.1-.57.36-.67 1.22.65",
		 '21011':"m415.3 163.5l.08-.09h.04l.97.05.11.06.25.19.33.64.44.51.07-.1.02-.13 1.6 1.58-2.52 1-.09-.17-.67-.81-.58-.54-.11-.1-.52-.08-.54-.51 1.12-1.51",
		 '21181':"m413.7 161.8l1.54 1.67-1.12 1.51-2.44-2.04.77-1.25 1.25.11",
		 '21069':"m416.9 160.2l2.13 1.6-.36.67-.1.57.09.23-.43.66-.17.19-.52.43-.02.13-.07.1-.44-.51-.33-.64-.25-.19-.11-.06-.97-.05h-.04l-.08.09-1.54-1.67.41-.75.77.37 1.29-.79.75-.38",
		 '21201':"m413.4 159.8l.77 1.23-.41.75-1.25-.11-.74-1.14 1.63-.73",
		 '21023':"m413.9 157.5l-.58 2.36-1.63.73-.48-.31-.64-3.15 1.85.53 1.48-.16",
		 '21161':"m416.7 158.8l.24 1.42-.75.38-1.29.79-.77-.37-.77-1.23.58-2.36.34.05.12.04.06.05.88.91.78.39.58-.07",
		 '21135':"m422.7 156.9l-.96 3.04-.45 1.62.11.53-.04.09-.4.23-.63.14-1.22-.65-2.13-1.6-.24-1.42.05-.45.08-.13.1-.07.78-.34.12-.03h.08.001l.4.1 1.07.26.03.001.34.16h.02l.57.43 2.28-1.91",
		 '21019':"m427.5 160.2l.21 2.26-1.88.31-.47-1.64 1.27-1.91.87.98",
		 '21089':"m425.1 158.6l1.61.63-1.27 1.91-.99-.19-1.5-.67-.42-.14-.79-.19.96-3.04.18-.09.83-.38.27-.12h.001.05l.1.04.05.05.001.02.03.04.02.03v.02.02l.02.08v.09.001.16l.1.41.28.84.02.05.07.14.08.09.001.001.22.14.05.02",
		 '21043':"m421.7 159.9l.79.19.42.14 1.5.67.99.19.47 1.64-1.18 1.07-.17.09h-.32l-.78-.16-.41-.3-.77-.43-.24-.05-.53 1.05-1.19-1.51.63-.14.4-.23.04-.09-.11-.53.45-1.62",
		 '21127':"m425.9 162.7l1.88-.31-.25 1.1.04.12.09.23.18.17.19.04h.03l1.59 1.51.001.02v.08l-.26.45-1.03 1.02-.7-.09-.6-.21-1.05-.53-1.22-.26h-.04l-.17.15-.05.09-.09.28-.41-.51.67-2.29 1.18-1.07",
		 '21159':"m430.4 167.1l1.05 1.41-2.27 1.07-.84-.35v-2.09l1.03-1.02 1.05.96",
		 '21195':"m429.2 169.6l2.27-1.07.001.07.38.58 2.05 1.38.74.27.4-.09.39-.12-2.96 3.56-.38.49-1.52.86-.4.28-.11.08-.4-.36-.33-.21h-.06l-.28.23-.29.001-.46-.4.2-.21.09-.08.17-.23.47-1.13.2-.82v-.28l-.17-.4-.3-.29-.19-1.86.05-.07.17-.1.27-.09",
		 '21097':"m411.7 160.5l.74 1.14-.77 1.25-2.33 1.45-1.47-2.57.73-.74 2.63-.84.48.31",
		 '21017':"m409.4 164.4l2.33-1.45 2.44 2.04-.89 1.13-1.98.87-1.38-1.67-.52-.92",
		 '21151':"m411 169.3l2.64.18.37 3.71-1.03.7-1.52-.02-2.15-2.76.78-1.11.91-.7",
		 '21203':"m413 173.9l-.03.15.05.33.19.35.3.42.28.67.16.62-1.26 2.36-2.45-2 .32-2.1.91-.81 1.52.02",
		 '21147':"m412.3 181.4l.64.1-.28 2.05.02.18.59 1.28.3.37.65.61-.35.04-5.29.5.82-1.82.65-1.02.16-.81 2.09-1.46",
		 '21137':"m408.2 173l2.36 1.66-.32 2.1-2.06 1.43.05-.81-.26-.76-.79-.3-.61-.41-.16-.51v-1.06l1.77-1.34",
		 '21079':"m407.3 170.7l.19-.18.15-.05.74.42.04.3.32.4.15.06.03-.02.37-.57 2.15 2.76-.91.81-2.36-1.66-.99-.91.13-1.36",
		 '21113':"m407.6 168.3l2.5 1.75-.78 1.11-.37.57-.03.02-.15-.06-.32-.4-.04-.3-.74-.42-.15.05-.19.18v-.61l.28-1.89",
		 '21067':"m409.9 165.3l1.38 1.67-.23 2.33-.91.7-2.5-1.75.18-1.5 2.09-1.45",
		 '21239':"m406.7 165.9l1.12.9-.18 1.5-.28 1.89-1.03-1.29-.91-1.81 1.28-1.18",
		 '21209':"m407.9 161.8l1.47 2.57.52.92-2.09 1.45-1.12-.9-.39-2 1.41-1.75.2-.29",
		 '21073':"m405 163.9l1.3-.09.39 2-1.28 1.18-1.61.03-.05-2.7 1.24-.42",
		 '21005':"m403.8 167.1l1.61-.03.91 1.81-.8.48-1.2.79-.13.07h-.07l-.03-.04-1.24.06-.26-.94.56-.91.64-1.28",
		 '21167':"m406.3 168.8l1.03 1.29v.61l-.13 1.36-2.77.77-.37-2.74.03.04h.07l.13-.07 1.2-.79.8-.48",
		 '21021':"m407.2 172.1l.99.91-1.77 1.34-1.94.26-.04-1.12-.02-.62 2.77-.77",
		 '21045':"m404.5 174.6l1.94-.26v1.06l.16.51.61.41.79.3.26.76-.05.81-1.64 1.79-1.55-.73-1.42-1.47.77-1.44.15-1.73",
		 '21199':"m408.2 178.2l2.06-1.43 2.45 2-.4 2.57-2.09 1.46-2.81-1.37-.85-1.45 1.64-1.79",
		 '21231':"m410.2 182.8l-.16.81-.65 1.02-.82 1.82h-.08l-1.88.09-.22-.04-.12-.06-.05-.1-.26-.77-.03-.12v-.2l.03-.17-.41-1.1-.28-.48 2.12-2.06 2.81 1.37",
		 '21207':"m405 179.3l1.55.73.85 1.45-2.12 2.06-.5.47-.84-.5-.37-.16-.05.03v.06l.23.32-.14.05-.08-.02-.07-.04-.38-.49.4-.4.16-.96.35-.52.64-1.27.38-.84",
		 '21053':"m403.8 183.7l-.23-.32v-.06l.05-.03.37.16.84.5.5-.47.28.48.41 1.1-.03.17v.2l.03.12.26.77.05.1.12.06.22.04-3.16.2-.2.03.49-3.05",
		 '21057':"m403.5 182.8l-.4.4.38.49.07.04.08.02.14-.05-.49 3.05-1.43.26-1.92-2.4 1.3-1.72 2.25-.08",
		 '21001':"m403.6 177.8l1.42 1.47-.38.84-.64 1.27-.35.52-.16.96-2.25.08-1-2.12 1.64-1.27 1.73-1.74",
		 '21217':"m400.3 176.1l.02-.03.2-.08.95-.09 2.26-.02.62.45-.77 1.44-1.73 1.74-.95-1.34-.57-.72-1.18-.78-.03-.11v-.37l1.19-.07",
		 '21155':"m400.6 172.6l.38.52.44.41.78.19 2.28-.27.04 1.12-.15 1.73-.62-.45-2.26.02-.95.09-.2.08-.02.03-.69-1.09.96-2.41",
		 '21229':"m404.1 170.1l.37 2.74.02.62-2.28.27-.78-.19-.44-.41-.38-.52 2.26-2.44 1.24-.06",
		 '21215':"m399.8 167.3l3.38 1.07-.56.91-3.25.11.42-1.71v-.38",
		 '21211':"m400.9 164.4l2.88-.04.05 2.7-.64 1.28-3.38-1.07-.64-1.73.11-.15.09-.06.17-.07.38-.11.37.03.27-.12.34-.67",
		 '21103':"m401.7 161.3l.92-.25 2.39 2.87-1.24.42-2.88.04-.5-1.71 1.32-1.37",
		 '21187':"m403.9 160.1l1.38-.92.27 1.3 1.65 1.47.19.09.31.09-1.41 1.75-1.3.09-2.39-2.87 1.29-1",
		 '21081':"m406.8 157.9l.85.03.94 3.15-.73.74-.2.29-.31-.09-.19-.09-1.65-1.47-.27-1.3 1.16-.89.4-.38",
		 '21191':"m410.6 157.1l.64 3.15-2.63.84-.94-3.15 1.1-.32 1.73-1.1.1.59",
		 '21037':"m409.4 154.7l1.09 1.79-1.73 1.1-1.32-3.62 1.96.72",
		 '21117':"m407.5 154l1.32 3.62-1.1.32-.85-.03-.5-3.5 1.13-.41",
		 '21015':"m406.3 154.4l.5 3.5-.4.38-1.42-.86-.14-.56-1-1.59.46-1.04 1.99.17",
		 '21077':"m405 157.4l1.42.86-1.16.89-1.38.92-1.05-1.2 2.18-1.47",
		 '21041':"m401.2 160l1.64-1.12 1.05 1.2-1.29 1-.92.25-1.88-1.81 1.39.48",
		 '21223':"m399.8 159.5l1.88 1.81-1.32 1.37-1.23-.27-.03-.81.7-2.1",
		 '21185':"m400.4 162.7l.5 1.71-.34.67-.27.12-.37-.03-.38.11-.17.07-.09.06-.11.15-1.84-1.04 1.84-2.08 1.23.27",
		 '21111':"m397.3 164.5l1.84 1.04.64 1.73v.38l-1.22.72h-1.58l-1.54.74-.3.22-.3.42-.12-.09.25-2.27.94-1.55 1.4-1.35",
		 '21029':"m399.8 167.7l-.42 1.71-.82 1.38.1.08-.001.03-.58.7-.32.23-.44.17h-.17l-2.27-2.2.3-.42.3-.22 1.54-.74h1.58l1.22-.72",
		 '21179':"m402.6 169.3l.26.94-2.26 2.44-.96 2.41-.35.42-.04.03-.51-.18-.03-.24.02-.4.02-.2.21-.24-.23-.91-.09-.07-.7-.31-.14-.03-.69-.97h.17l.44-.17.32-.23.58-.7.001-.03-.1-.08.82-1.38 3.25-.11",
		 '21123':"m397.8 172.9l.14.03.7.31.09.07.23.91-.21.24-.02.2-.02.4.03.24.51.18.04-.03.35-.42.69 1.09-1.19.07-.68.7-2.41.03.03-1.37.68-.94.42-.53.61-1.17",
		 '21087':"m398.5 176.9l.68-.7v.37l.03.11 1.18.78.57.72.95 1.34-1.64 1.27-1.73-.76-.04-3.14",
		 '21169':"m398.5 180l1.73.76 1 2.12-1.3 1.72-1.49-.14-.34-2.12-.18-.79-.19-.52-.09-.36.29-.45.57-.22",
		 '21171':"m398.4 184.5l1.49.14 1.92 2.4-3.6.35-1.93.12-.13-1.22 2.26-1.79",
		 '21213':"m389.5 184.9l.36.65 1.89.11-.001.41.11 1.63-1.54.38h-2.06l1.25-3.18",
		 '21003':"m394 183.8l2.22 2.53.13 1.22-2.35.1-2.13.08-.11-1.63 1-1.06.31-.49.59-.68.32-.06",
		 '21009':"m397.9 180.3l-.29.45.09.36.19.52.18.79.34 2.12-2.26 1.79-2.22-2.53.37-1.7.44-1.43 3.16-.37",
		 '21099':"m396 176.9l2.41-.03.04 3.14-.57.22-3.16.37-1.25-2.07.96-1.59 1.57-.04",
		 '21093':"m394.7 169.7l.12.09 2.27 2.2.69.97-.61 1.17-.42.53-.68.94-.03 1.37-1.57.04-.16-.64-.64-.77-.19-.02-.18.1-.27.11-1.05-.4.98-2.78 1.42-.41.24-.78-.39-1.55.49-.17",
		 '21163':"m389.3 169.7l2.03-1.31-.03.36v.02.09.06.02l.07.25.06.09.02.04.05.03.45.3.44.17h.07l1.46.07.3-.1.39 1.55-.24.78-1.42.41-3.74-2.84h.06",
		 '21091':"m384.5 171.7l1.57-1.04 1.79 1.86-.1.1-.06.57.74 1.73-.17-.07-1.96-.8v-.7l-.43-.6-.62-.64-.79.001.04-.41",
		 '21027':"m387.8 172.5h.08l.13-.04.28-.22.66-1.5-.08-.77.02-.14.04-.06.05-.03.21-.04 3.74 2.84-.98 2.78-.11.08-.84.46-1-.38-.001-.05-.12-.13-.27-.13h-.04l-.23.13-.22.25-.3.46-.59-1.21.17.07-.74-1.73.06-.57.1-.1",
		 '21085':"m388.8 176.1l.3-.46.22-.25.23-.13h.04l.27.13.12.13.001.05 1 .38.84-.46.11-.08 1.05.4.27-.11.18-.1.19.02.64.77.16.64-.96 1.59-3.13.51-1.55-.82-.02-2.21",
		 '21061':"m390.4 179.1l3.13-.51 1.25 2.07-.44 1.43-3.05-1.11-.9-1.88",
		 '21227':"m391.3 181l3.05 1.11-.37 1.7-.32.06-.59.68-.31.49-1 1.06.001-.41-1.89-.11-.36-.65-.79-1.45.35-2.25 1.54-.04.69-.19",
		 '21031':"m388.8 178.3l1.55.82.9 1.88-.69.19-1.54.04-.35 2.25-2.8-.64.25-1.89.75-1.14.65-.29 1.28-1.23",
		 '21141':"m385.9 182.8l2.8.64.79 1.45-1.25 3.18-3 .36-.43-5.41 1.13-.21",
		 '21219':"m382.7 183.1l2.12-.06.43 5.41-.55.06-2.26.22.26-5.64",
		 '21177':"m383.9 178.5l2.28 2.44-.25 1.89-1.13.21-2.12.06-.85-1.03.17-.37-.68-.83-.12-.72.74-1.15 1.96-.5",
		 '21183':"m386.3 174l1.96.8.59 1.21.02 2.21-1.28 1.23-.65.29-.75 1.14-2.28-2.44.44-1.93.99-.93.56-1.15.4-.41",
		 '21059':"m381.2 172.4l.36.25 1.47.98.75-1.36.63-.59-.04.41.79-.001.62.64.43.6v.7l-.4.41-.56 1.15-.99.93-3.88-1.24.81-2.89",
		 '21149':"m380.4 175.3l3.88 1.24-.44 1.93-1.96.5-1.01-2.24-1.31-.89.84-.54",
		 '21107':"m380.9 176.7l1.01 2.24-.74 1.15.12.72.68.83-.17.37-.69.39-1.16.45-1.67-.43-1.57-2.49 1.8-1.4 1.25-.65 1.14-1.18",
		 '21047':"m381.8 182l.85 1.03-.26 5.64-3.12.32-.54.06.05-1.1-.07-3.19-.79-.4.37-1.96 1.67.43 1.16-.45.69-.39",
		 '21221':"m377.9 184.4l.79.4.07 3.19-.05 1.1-1.63.19v-.4l-1.68-.03-.6.04-.49-.86-.6-1.52 2.76-1.44 1.41-.67",
		 '21143':"m373.1 182.9l.95-.5.56.02.8 1.32 1.12 1.31-2.76 1.44-.97-1.42.3-2.18",
		 '21033':"m376.7 180l1.57 2.49-.37 1.96-1.41.67-1.12-1.31-.8-1.32-.56-.02 2.78-2.84-.09.38",
		 '21233':"m379.6 175.8l1.31.89-1.14 1.18-1.25.65-1.8 1.4.09-.38-1.45-1.19 1.83-2.22 2.4-.33",
		 '21101':"m379.7 172l1.55.41-.81 2.89-.84.54-2.4.33-2.24-3.25 2.29-.18 2.46-.74",
		 '21225':"m374 174.3l.9-1.42 2.24 3.25-1.83 2.22-1.33-.22-.8-.83-.08-.15-.22-.59v-.001l-.05-.29v-.001l.001-.09.05-.14.001-.03.08-.14.16-.31.48-.35.12-.13.08-.14.05-.13.13-.49",
		 '21055':"m375.4 178.4l1.45 1.19-2.78 2.84-.95.5-1.95-3.2.26-.34.17-.16.06-.04.24-.15h.02l.06-.02.18-.05.21-.05 1.41-.3.1-.02.19-.22v-.21l1.33.22",
		 '21139':"m371.1 179.7l1.95 3.2-.3 2.18-2.52-.33-.87-.64.74.08.08-.001.23-.1.12-.33.15-.72-.29-.64-.13-.12-.14-.08-.43-.51-.09-.28v-.09l.29-1.28.05-.13.13-.17.09-.06.07-.06.17-.08.06-.03.59.19",
		 '21035':"m370.5 188.3l3.84-.27.49.86.37 2.33-4.48.31-.22-3.23",
		 '21157':"m370.3 184.8l2.52.33.97 1.42.6 1.52-3.84.27-.19-2.49-.06-1.04",
		 '21083':"m370.3 185.8l.19 2.49.22 3.23-.28.02-3.08.22-.23-3.51-.17-2.24 3.35-.21",
		 '21145':"m365.5 182.5l3.87 1.65.87.64.06 1.04-3.35.21-.04-.1-1.47-3.42.06-.02",
		 '21039':"m367 186l.17 2.24-3.19.08-.59-.31v-.3l.29-.17.39-1.29 2.9-.35.04.1",
		 '21007':"m365.5 182.5l1.47 3.42-2.9.35-.37-.47-.48-1.08 2.28-2.22",
		 '22103':"m357.1 267.6l4.61.31 1.85 2.55.02.02.07.07.69 1.4.02.24-.1.26-.03.11v.07l.35.67.11.21.24.28.08.1.03.02.04.03.03.02h.02l.52-.03-1.07.44-.07-.04-.62-.2-2.18-.17-.26.1-1.05.63-1.24-.47-1.55-.32-.52-6.27",
		 '22117':"m361.5 263.6l1.19-.08.02.4-.14.68-.11.25h-.07l-.09.001-.03.03-.15.6-.17.82-.13.68-.12.92-4.61-.31v-.23l-.8-1.91-.35-.29-.08-1.22.97-.06 4.67-.31",
		 '22081':"m321 249.5h.47l2.64 1.05.13.13.27.4.21.65v.06l-.06.75-1.01 1.2-.45.21h-.44l-.32-.11-.06-.43-.98-.73-.12-.14-.69-1.07-.42-1.38-.72-.54 1.56-.04",
		 '22013':"m327.3 244.8l1.18 1.66-.28 3.97-1.35.03-2.72.08-2.64-1.05.54-2.27 1.47-.04.96-.61-.001-.32-.38-1.35 3.22-.1",
		 '22061':"m328.9 242.5l.89-.03.46.05.35.08 1.69.93.04 1.13.04 1.13-2.24.08.03.56-1.69.05-1.18-1.66 1.6-2.31",
		 '22049':"m328.4 246.5l1.69-.05-.03-.56 2.24-.08.04 1.04.06.16 1.11 1.02.02.56.06 1.7-5.47.19.28-3.97",
		 '22127':"m328.2 250.5l5.47-.19.11 2.82-.48 1.71-2.8.09.001.61-.04.52-3.81.14.68-2.1.2-.91.02-.16-.07-.96-.23-.83-.39-.73 1.35-.03",
		 '22021':"m333.6 248.6l3-.12 1.59 1.56.24.32.06.11.03.33-.57.35.26.91.15.3-1.24.63-3.35.13-.11-2.82-.06-1.7",
		 '22073':"m336 242.7l1.76 2.74-1.19 3-3 .12-.02-.56-1.11-1.02-.06-.16-.04-1.04-.04-1.13 1.66-.05.3-.09.11-.08 1.41-1.38.22-.35",
		 '22083':"m342.8 244.2l-.11.58-.13 1.71-1.69.09-.41.24-.94 1.12-.49 1.13-.87.91-1.59-1.56 1.19-3 .4-.36.76-.54.73-.25.67-.34.1-.11.15-.27.1-.31-.001-.05.45.14.47.91 1.21-.05",
		 '22041':"m342.5 249.2l-.71 4.19-.27-.73-.55-.26-.02.11-.2.33-.4.44-.28.2-.52.14-.16-.21-.26-.4-.39-.4-.28-.18-.16-.05-.15-.3-.26-.91.57-.35-.03-.33-.06-.11-.24-.32.87-.91.49-1.13.94-1.12.41-.24 1.69-.09-.05 2.62",
		 '22107':"m342.5 249.2l1.87-.08.05-.1.19-.13 1.2-.39.49-.08h.06l.14.12v.28.001l1.1 1.28-2.24 3.27-1.25 1.65-.11.19-1.82-.17-.41-1.66.71-4.19",
		 '22065':"m346.6 244.3l-.25.82.02.21v.001l.03.05.05.07v.02l1.2 1.28.08 1.86-1.26.16v-.001-.28l-.14-.12h-.06l-.49.08-1.2.39-.19.13-.05.1-1.87.08.05-2.62.13-1.71 3.96-.52",
		 '22035':"m345.5 238.6l-.36.57-.11.41.02.1.87 3.92.06.15.001.02.03.04.001.02.02.02.1.09.03.02.34.11.08.18-3.96.52.11-.58.31-.29.1-.31.32-1.25.17-1.43.05-.38.39-1.15.33-.75 1.06-.04",
		 '22123':"m344.5 238.7l-.33.75-.39 1.15-.05.38-.17 1.43-.32 1.25-.1.31-.31.29-1.21.05-.47-.91-.45-.14.4-1.11 1.51-3.1.06-.28 1.84-.07",
		 '22067':"m342.4 238.8l.27-.02-.06.28-1.51 3.1-.4 1.11.001.05-.1.31-.15.27-.1.11-.67.34-.73.25-.76.54-.4.36-1.76-2.74.05-.04.08-.18-.03-.68-.39-1.11.1-1.68 6.55-.27",
		 '22111':"m335.8 239l-.1 1.68.39 1.11.03.68-.08.18-.05.04-.22.35-1.41 1.38-.11.08-.3.09-1.66.05-.04-1.13-1.69-.93-.35-.08-.46-.05-.89.03-.11-3.29 7.1-.19",
		 '22027':"m325.9 239.3l2.84-.05.11 3.29-1.6 2.31-3.22.1.03-.63-.16-1.07-.55.02-.13-3.9 2.69-.07",
		 '22119':"m320.5 239.4l2.71-.07.13 3.9.55-.02.16 1.07-.03.63.38 1.35.001.32-.96.61-1.47.04-.74.001-.09-1.13-.07-3.4-.11-1.4-.31-.32-.38-.56-.2-.36v-.19l.09-.47h.33",
		 '22015':"m320.2 239.4l-.09.47v.19l.2.36.38.56.31.32.11 1.4.07 3.4.09 1.13.74-.001-.54 2.27h-.47l-.96-1.25-1.21-.64-1.36-4.16-.11-.61-.46-3.21.02-.05.12-.1h.1l3.05-.07",
		 '22017':"m317 239.5l-.12.1-.02.05.46 3.21.11.61 1.36 4.16 1.21.64.96 1.25-1.56.04v-.42l-.1-.16-.25-.27-.23-.17-.89-.3-.19-.04-.21.04-.16.1-.06.05-.54.64-.03.19.02.08-.04.11-.38.35-.59.42-1 .02-.14-6.43-.04-2.43-.04-1.79 2.46-.05",
		 '22031':"m319.4 249.6l.72.54.42 1.38.69 1.07.12.14.98.73-.91 1.15-4.78.13-1.54-1.72-.35-2.79 1-.02.59-.42.38-.35.04-.11-.02-.08.03-.19.54-.64.06-.05.16-.1.21-.04.19.04.89.3.23.17.25.27.1.16v.42",
		 '22085':"m316.7 254.7l4.78-.13.04 1.69 1.13-.03.08 2.27 1.1-.03.07 2.25-1.7.05-1.57 1.23-.13.4-.05.7.03.02-.51.13-.11-.67-.08-.42-.33-1.43-1-1.46-1.19-1.25-.55-3.32",
		 '22069':"m324.1 250.6l2.72-.08.39.73.23.83.07.96-.02.16-.2.91-.68 2.1 2.87 2.38-2.81 2.3-2.8-.14-.07-2.25-1.1.03-.08-2.27-1.13.03-.04-1.69.91-1.15.06.43.32.11h.44l.45-.21 1.01-1.2.06-.75v-.06l-.21-.65-.27-.4-.13-.13",
		 '22043':"m326.6 256.2l3.81-.14.04-.52-.001-.61 2.8-.09.13 1.63.36 1 .52.72.5.55.48.14-1.17.3-3.57 1.01-.29.04-.33-.12-.08-.05-.15-.66-.16-.81-2.87-2.38",
		 '22059':"m333.7 253.1l3.35-.13.3 7.76-.87-.09-1.28-1.79-.48-.14-.5-.55-.52-.72-.36-1-.13-1.63.48-1.71",
		 '22025':"m337.1 253l1.24-.63.16.05.28.18.39.4.26.4.16.21.52-.14.28-.2.4-.44.2-.33.02-.11.55.26.27.73.41 1.66-1.51.19-.09.08-1.18 1.42-.07.13-.41 1.66-.06.37.05 1.96.04.12.35.49-.61-.3-.23-.06-.19.03-.13.13-.08.2.11.26.13.16.04.09-.21.13-.52-.03-.05-.05-.2-.8v-.43l-.3-7.76",
		 '22029':"m342.2 255l1.82.17-.17.3v.001l-1.18 2.36-.03.05-.04.09-.41 3.37-.27 1.39-.27 2-.27.39.03-.31-.75-.61.08-.19.05-.19.29-1.49-.13-.15-.2-.1-.06.001-.37-.05-.52-.14-.25-.16-.25-.34-.35-.49-.04-.12-.05-1.96.06-.37.41-1.66.07-.13 1.18-1.42.09-.08 1.51-.19",
		 '22009':"m336.5 260.6l.87.09v.43l.2.8.05.05.52.03.21-.13-.04-.09-.13-.16-.11-.26.08-.2.13-.13.19-.03.23.06.61.3.25.34.25.16.52.14.37.05.06-.001.2.1.13.15-.29 1.49-.05.19-.08.19-.27.34-.62 2.23-4.39.18-.81-1.47.69-.37-.27-1.8-.09-2.46.1-.09.08-.03h.05l.68.32.7-.45",
		 '22079':"m329.5 258.6l.16.81.15.66.08.05.33.12.29-.04 3.57-1.01 1.17-.3 1.28 1.79-.7.45-.68-.32h-.05l-.08.03-.1.09.09 2.46.27 1.8-.69.37-1.12-.42-2.35 1.44-2.49.17-.1-1.56-.13-3.11-.58-.82-.19-.09-.94-.25 2.81-2.3",
		 '22115':"m323.9 260.7l2.8.14.94.25.19.09.58.82.13 3.11.1 1.56-1.71.21h-1.72l-3.18.09-1.51.23-.04-4.09-.03-.02.05-.7.13-.4 1.57-1.23 1.7-.05",
		 '22039':"m331.1 266.5l2.35-1.44 1.12.42.81 1.47.49 1.02.03.7.001.5-.46 1.39-.46.4-1.69.06-.37.07-.12.13-.35.59-1.54.05.02-.09.07-.07.1-.18.32-.78-.02-.06-.15-.13-.1-2.35-.02-.48-.04-1.22",
		 '22003':"m328.6 266.7l2.49-.17.04 1.22.02.48.1 2.35.15.13.02.06-.32.78-.1.18-.07.07-1.6.05-.88.46-1.77.27-1.29.22-.06-2.24.92-.04.75-.02-.05-2.6-.06-1 1.71-.21",
		 '22011':"m326.9 266.9l.06 1 .05 2.6-.75.02-.92.04.06 2.24v.27l-2.83.08-.03-1.13-1.13.03.03 1.13-2.85.08.001-.001.43-.36.04-.11v-.07l-.16-.8-.31-.38-.03-.03.13-.46 1.58-2.98.2-.86 1.51-.23 3.18-.09h1.72",
		 '22053':"m330.9 271.9l.25 5-1.24.75-2.88.08-.001-.57 1.19-.07-.2-.57-.27-.33-1.18-1.31-1.16-1.5v-.3-.27l1.29-.22 1.77-.27.88-.46 1.6-.05-.02.09",
		 '22019':"m325.4 273.1v.3l1.16 1.5 1.18 1.31.27.33.2.57-1.19.07.001.57-1.47.05v-.19l-6.62.18-.02.02v-2.49l-.34-2.02 2.85-.08-.03-1.13 1.13-.03.03 1.13 2.83-.08",
		 '22023':"m329.9 277.6l1.38-.06.17 4.41.02 1.5-.41-.1-1.03-.34-.93-.41-.51-.22-.79-.37-.37-.15h-.001l-1.29-.41-1-.24-.56-.07h-.45l-2.33.18-.71.09-1.08.16-.54.08-.65.16-.03.001-.06.02-.18.06-.36.19-.22.15-.21.18-.1-2.88 1.28-1.79.02-.02 6.62-.18v.19l1.47-.05 2.88-.08",
		 '22001':"m330.9 271.9l1.54-.05 2.76-.1.78.53.45 1.48v.28l-1.51 2-.87 1-.23.16-.22.1-.2.07-2.13-.44-.12-.04-.25-5",
		 '22097':"m339.8 266.8l.16.13.43.73.39.97.05.43-.05 1.75-.12.47.45.61.47.68-1.49.07-.08-.07-.56-.2-.67.29-.63.39-1.67.97v-.28l-.45-1.48-.78-.53-2.76.1.35-.59.12-.13.37-.07 1.69-.06.46-.4.46-1.39-.001-.5-.03-.7-.49-1.02 4.39-.18",
		 '22077':"m340.4 264.6l1.03.27-.03.31.07 1.42.03.07.08.08.07.04 1.22.63 1.78.33.06.03.21.31.34.92-1.61 2.16-2.4.11-.61.02.12-.47.05-1.75-.05-.43-.39-.97-.43-.73-.16-.13.62-2.23",
		 '22121':"m345.3 269l.29.06.09.04 1.94 4.11-1.89.1-.43-.54-1.23-1.33-.37-.28 1.61-2.16",
		 '22055':"m336.5 274l1.67-.97.58 3.78-.14.51-1.15-.47-.71-.5-.93-.31-.83-.04 1.51-2",
		 '22113':"m338.6 277.3l.07 2.96-.72.32-.23.13-.55.38-.4.38-.05.25.21.46.25.49.21.03 1.07.03-.46.42-.06-.03h-.67l-.58.09-.6.27-.43.32-.29.08h-.03-.07l-.2.001h-.05l-2.82-.37-.65-.09h-.02l-.02-1.5-.17-4.41-1.38.06 1.24-.75.12.04 2.13.44.2-.07.22-.1.23-.16.87-1 .83.04.93.31.71.5 1.15.47",
		 '22047':"m343.6 271.2l.37.28 1.23 1.33.43.54 1.89-.1 1.35-.05-.77 3.38-1.29.54-1.64-.35v-.17l-.12-.29-1.16-1.67-.19-.09-.21-.04-.35.03-.23-.02-.15-.07-.14-.12-.4-.66-.06-.18-.02-.07.02-.16-.03-.68-.05-.25-.15-.37-.71-.67 2.4-.11",
		 '22007':"m349.7 276.4l.98 2.03-1.23 2.52-.79 1.18-.24-.93.03-.83v-.49l-.09-.17-.14-.14-.23-.12h-.12l-.49-.1-.17-.16-.61-1.16-.09-.24.31-.71 1.29-.54 1.59-.13",
		 '22101':"m344.1 278.1l1.15 1.64 1.85.86 1.32.6.24.93-2.03 2.04h-.25l-.47-.09-2.22-.48-.09-.44-.07-.37-.15-.49-.82-1.28-.13-.09-1.18-.03-.17.02-1.37.4 1.78-1.68.91-1.32 1.7-.22",
		 '22109':"m349.5 280.9l1.96-.89.08-.04.15.02 2.77 2.64 2.12 2.17.16.17.07.19.07.6-.28 1.42h-1.71l-.92 1.02.13.71-2.28.51-5.1-2.37-.28-.22-.38-.4.02-.09.62-.34.76-.44.11-.12-.04-.25-.16-.39-.07-.15-.05-.04-.6-.48 2.03-2.04.79-1.18",
		 '22057':"m354.6 278.4l.61.39.97 1.04.58.74v.08l.1.14.14.03 1.25-.06.28-.001.37.09.12.07.03.1.13.91v.13l-.07.24.9 1.33.68.3.001 1.46-.67.82.34.66-.17.62-.12.12-.03.04-.72.6-.04.03-.03.02-.51.27-1.33.44h-.06l-.001-.08.27-.16.24-.04.13-.02.11-.06.28-.13.05-.03.2-.22-.001-.24-.48-.95-.19-.26-.36-.48-.2-.14-.38.06-.22.29-.2.74.28-1.42-.07-.6-.07-.19-.16-.17-2.12-2.17-2.77-2.64-.15-.02-.08.04-1.96.89 1.23-2.52 2.57.06 1.29-.11",
		 '22093':"m353.2 274.9l-.13 1.5-.3.21.22 1.08.15.59.09.2-2.57-.06-.98-2.03 3.51-1.48",
		 '22005':"m350.3 272.8l2.03 1.89.24.16.05.001.04-.02.61-.61-.06.71-3.51 1.48-1.59.13.77-3.38 1.42-.38",
		 '22033':"m350.5 267.9l-.63.94-.73.87.04 1.78.21.53.9.73-1.42.38-1.35.05-1.94-4.11.33-.65.11-.08 4.47-.42",
		 '22037':"m348 264.5l2.58-.14-.33.84.22 1.12.05.72v.94l-4.47.42-.11.08-.33.65-.09-.04-.03-.3.02-.42.16-.51.11-.15.45-.77.32-1.49.16-.89 1.28-.06",
		 '22091':"m353.5 264.1l.26 4.5-3.8.22.63-.94v-.94l-.05-.72-.22-1.12.33-.84 2.86-.17",
		 '22063':"m349.9 268.9l3.8-.22.12 2.1.27.68.87 1.2.38.39.13.11.14.06.21.05-.75.25-.25.14-.07.06-.17.37-.14.21-.15.15-.14.09-.11.02-.12-.02-.63-.3-.61.61-.04.02-.05-.001-.24-.16-2.03-1.89-.9-.73-.21-.53-.04-1.78.73-.87",
		 '22095':"m355.8 273.2l1.42.62-1.34 2-.92.7-.48.2-.12.19.02.24.17 1.18-1.29.11-.09-.2-.15-.59-.22-1.08.3-.21.19-2.21.63.3.12.02.11-.02.14-.09.15-.15.14-.21.17-.37.07-.06.25-.14.75-.25",
		 '22089':"m354.6 278.4l-.17-1.18-.02-.24.12-.19.48-.2.92-.7 1.34-2 .15 2.88.03.45.11.64.07.21.34.53.68.41-.19 1.07-.06.2-.16.5-1.25.06-.14-.03-.1-.14v-.08l-.58-.74-.97-1.04-.61-.39",
		 '22105':"m353.7 264.1l2.21-.14.08 1.22.35.29.8 1.91v.23l.52 6.27-.39-.06-1.42-.62-.21-.05-.14-.06-.13-.11-.38-.39-.87-1.2-.27-.68-.12-2.1-.26-4.5h.21",
		 '22071':"m359.2 274.2l1.24.47 1.05-.63.26-.1 2.18.17.62.2.07.04-.48.57-1.49.96-.5.6-.5 1.73-1.11-.27-.6-.61-.75-1.02.03-2.11",
		 '22087':"m362.1 276.5l.07.28.11.27.07.12.11.08 1.59.81.36.05.25-.03.27-.12.16-.13.06-.2.13-.82-.001-.31.83-.92.39-.19.46.14.29.24-.24.13-.07.07-.11.1v.22l.02.16.66.72.13.1.53.27.13.07-.75 1.25-.43.64-.64.24-.5-.19-1.17-.04-.19.06.05.38.06.11.56.31.27.11.19.04.26-.02.55.47.03.08-.001.05-.07-.1-.31-.25-1.23-.29-.79-.72-.17-.18-1.65-.44-.12.05-.07-.001-.14-.17-.25-.43-.16-.33.5-1.73",
		 '22075':"m360.5 278l1.11.27.16.33.25.43.14.17.07.001.12-.05 1.65.44.17.18.79.72 1.23.29.31.25.07.1-.21-.13-.36-.19-.97-.05-.22.13-.36.3-.09.31-.11 1.06v.06l.08.09.33.22 2.09 1.1.33-.02.87-.04 2.33.67.6.74.3.42.45.26.42-.19.08.03.08.08.19.39v.001l-.04.18-.2.47-.35.8-1.02.61-.72-.45-1.55.04-1.24-1.44-.03-.03-.15-.15-.02-.02-.12-.09-.05-.02-.33-.12-.24-.09-1.56-.57-.25-.07-.05-.001-.24-.05-.09-.02h-.02-.05l-.24-.02-.33-.03-.63-.57.14-.25.04-.09v-.12l-.001-.07-.25-.87v-.04l-.07-.04-.1-.05-.14.03-.15.06-.28.18-.18.22-.14.2-.26.03-.11-.07-.15-.16-.16-1.93-.06-.24-.45-.76-.22-.26-.36-.48-.12-.42.21-.87.45-.77",
		 '25027':"m518.7 85.2l.04.09.69.71.47-.11.15-.13.75.09.37.05 1.38.56.14.27.07.7.04.72-.11.37-.29.57.64 1.61.25.24.3.1.8.13.27 1.8-2.75.84-.06-.19-2.41.57-.4.08-.32.06-.41-1.65-.6.16-.66-.14-.04-.16v-.1l.24-.61-1.18-1.01-.17-.66-.05-1.1.11-.67-.2-1.07-.61-1.32 3.27-.71.28-.06",
		 '25017':"m524.5 83.4l.36.86.92.62 1.05.62.75.95-.05.35-.22.49-.37.34-.39.25.05 1.01-.46-.36-.03-.02-.23-.02-.16.02-.5.34.12.19.22.29.13.27-.22.7-.46.41-.62.46-.8-.13-.3-.1-.25-.24-.64-1.61.29-.57.11-.37-.04-.72-.07-.7-.14-.27-1.38-.56-.37-.05-.75-.09-.15.13-.47.11-.69-.71-.04-.09 2.28-.51.14-.03h.04l3.11-.72.23-.55",
		 '25019':"m540.1 98.4l.09-.05.15-.17.11-.2.07-.26-.04-.26-.05-.09-.1-.09-.09-.07-.05-.05v-.05l.17.04.2.17.86.97.05.18v.14.03l-.07.09-.22.17-.12.05-.76.18-.21.04-.53-.04-.91-.18-.12-.05-.09-.07-.05-.1.14-.04.12.03.05.02.47-.02.67-.17.29-.13",
		 '25001':"m534.2 93.1l.06.07.19.14.27.15.25.1.61.06.36-.02.97-.1 1.3-.8.48-.32.32-.28.1-.21.02-.11-.11-.37-.18-.46-.08-.18-.3-.42-.96-1.13-.15-.1-.17-.06-.27-.06-.07.001-.13.07-.07.06-.05.09-.03.16v.07l-.53-.21-.03-.04.04-.13.09-.1.16-.09.16-.05.28-.03.45.02.35.08.27.12.31.22.3.3.37.43.3.43.45.77.21.42.31.83.18.62.03.28-.15 1.23-.09.09-.03-.86-.02-.07-.05-.08-.24-.11-.11-.03-.07.001-2.87 1.28-.12.06-2.09 1.81-.33.43-.35-.04-.21-2.51.66-1.43",
		 '25025':"m527.6 86.4l.46.18.21 1.51-1.64.74-.05-1.01.39-.25.37-.34.22-.49.05-.35",
		 '25005':"m525.8 93.1l2.41-2.13.73 1.58.81 1.47.96.37.43.3 1 1.55-.17-.001-.43.06-.17.23-.11.14-.02.03.03.42.04.15.14.3-.83.77-.78.23-1.29-2.04-.39-.36-1.08-.6-1.28-2.47",
		 '25023':"m529.1 88.4l.88-.27.46.07.09.001.08.05.51.34 1.16 1.29 1.68 2.22.16.37.06.63-.66 1.43-1.39 1.64-1-1.55-.43-.3-.96-.37-.81-1.47-.73-1.58.89-2.5",
		 '25021':"m528.2 88.1l.9.32-.89 2.5-2.41 2.13-1.18-.12-.27-1.8.62-.46.46-.41.22-.7-.13-.27-.22-.29-.12-.19.5-.34.16-.02.23.02.03.02.46.36 1.64-.74",
		 '25009':"m528 80.6l.07.27.35.83.54 1.04.56.25-.9 1.87-.61 1.79-.46-.18-.75-.95-1.05-.62-.92-.62-.36-.86.06-.14.51-1.02.12-.13.22-.19.67-.57.87-.65.08-.03.06-.03.27-.02.66-.04",
		 '25013':"m517.2 91.8l-.24.61v.1l.04.16.66.14.6-.16.41 1.65-3.47.82-4.63 1.09-.42.09-.35-.64-.05-.12-.11-.57.35-.02-.03-1.43-.18-.78.33-.5.54-.09.12.08.25.84-.14.27.39.2.87.13.93-.001.77-.57 1.68-.69 1.65-.6",
		 '25015':"m516.1 90.8l1.18 1.01-1.65.6-1.68.69-.77.57-.93.001-.87-.13-.39-.2.14-.27-.25-.84-.12-.08-.54.09-.33.5-.03.11h-.2l-.39-.18-.21-.64v-.11h.53l-.04-1.15-.06-.97-.11-.18 1.19.67 1.57.04 1.62-.08.48-.21 1.1-.1.8.83",
		 '25003':"m506.1 87.9l2.24-.48 1 2.22.11.18.06.97.04 1.15h-.53v.11l.21.64.39.18h.2l.03-.11.18.78.03 1.43-.35.02.11.57.05.12.35.64-4.05.86-.09.02-.22-.44.14-5.69.08-3.17",
		 '25011':"m513.5 86.3l1.62-.35.61 1.32.2 1.07-.11.67.05 1.1.17.66-.8-.83-1.1.1-.48.21-1.62.08-1.57-.04-1.19-.67-1-2.22.86-.18 4.36-.93",
		 '24001':"m466.1 136.7l.37-.07.3 1.09-1.03 1.77-1.88.1-1.19-.47-1.62 2.23-1.06-.24.78-3.43 1.19-.22 4.15-.76",
		 '24023':"m460.8 137.7l-.78 3.43-1.83 2.21-1.61 1.94-1.06-6.61.82-.15 4.47-.82",
		 '24037':"m488.9 150.8l.47 1.23-.53 1.15-3.7-.75-.39-.53-.51-.9v-.24l.54-1.64.09-.08.35-.05.19-.001.4.05 3.11 1.76",
		 '24017':"m481.3 147.2l.6 1.07.16-.34.03-.1.05-.06.13-.09.32-.15 1.03-.18 1.22.28.04.07.25.69.5.15h.15l.11.46-.4-.05-.19.001-.35.05-.09.08-.54 1.64v.24l.51.9.05.33v.17l-.02.1-3.87-.62-.1-.02-.38-.18-.22-.37-.27-.84.03-.41.15-.55.41-.73.44-.54.26-1",
		 '24047':"m499 146.8l2.86-.63.05.47v.34.46l-.04.42-.39 2.96-.03.18-.03.13-.06.21-.03.15-.16.5-3.67 1.25.56-1.39-.32-1.16-.92-1.09 2.41-.68.3-.67.05-.3-.22-.61-.36-.53",
		 '24045':"m495.2 146.2l.13.49.11.37.12.41.3-.05.69-.12h.04l.29-.06.59-.11.21-.04.5-.09h.04l.14-.03.16-.03.38-.09.14-.03.36.53.22.61-.05.3-.3.67-2.41.68-2.36 1.05-.59-.2.02-.97.31-2 .06-.12.21-.12.23-.21.47-.82",
		 '24043':"m468.8 136.2l6.1-1.15-.14.71-.15.4-.08.14-.35.23-.03.14-.08.94-.02 1.21-.18 1.76-.39.05-1.46-2-2.23-1.23-.17-.18-.45-.33-.36-.13-.36-.04h-.33l-.06.02-.07.08-.26.4-.35.64-.12.001-.52-.1-.3-1.09 2.36-.45",
		 '24009':"m488.9 150.8l-3.11-1.76-.11-.46-.66-2.68.05-.11.27-.23.25-.03.37.54.69-.03v.17l.06.27.51 1.74.05.13.16.29.19.25.45.32.83.67.04.07.05.27-.07.59",
		 '24041':"m491.8 142.2l.1.31-.12 1.84-.1.41.03.04.53.44.27.06-1.91.95.03-.06-.14-.25-1.02-.81-.17.02-.55.19-.03.02-.1.24v.13l.16.15.02.13-.15.14-.11-.17-.11-.85v-.28l.19-.75.02-.03.26-.31.7-.05 2.2-1.5",
		 '24011':"m491.8 142.2l1.34-3.28 1.79 6.37h-2.43l-.27-.06-.53-.44-.03-.04.1-.41.12-1.84-.1-.31",
		 '24029':"m490 136.5l2.27-.55.28 1 .18.64-1.29.22-.82.23-.33.14-.38.49-.67 1.69-.42.2h-.31l-.59-.6-.001-.26.04-.21.41-1.93.11-.19.47-.64 1.05-.23",
		 '24510':"m485.3 139.6l-.91-.06-.77-.25-.19-1.22h1.86v1.54",
		 '24033':"m482.1 141.4l.54.27 1.69 1.24.37.83.37 2.15.66 2.68h-.15l-.5-.15-.25-.69-.04-.07-1.22-.28-1.03.18-.32.15-.13.09-.05.06-.03.1-.16.34-.6-1.07.24-1.12v-.06l1.07-1.69-1.17-.6.69-2.34",
		 '24003':"m485.3 139.6h.02l1.2 1.14.59 1.08.07.14-.36 1-.25.8-.36 1.64.09.29.07.11.29.24-.69.03-.37-.54-.25.03-.27.23-.05.11-.37-2.15-.37-.83-1.69-1.24 1.09-1.69.71-.46.91.06",
		 '24027':"m481.6 138.6l2.14 1.37-1.09 1.69-.54-.27-.16.12-.42.02-.11-.04-2.07-1.41-.47-.49-.2-.26v-.03l.02-.07.12-.13 2.79-.52",
		 '24031':"m478.8 139.1l-.12.13-.02.07v.03l.2.26.47.49 2.07 1.41.11.04.42-.02.16-.12-.69 2.34-.51-.27-.55.9-2.35-1.18-.47.05-.48.02-.36-.02h-.02l-.64-.43-.06-.04-.06-.08-.07-.22v-.001l.001-.12.02-.16v-.06l.04-.11.4-.63 2.48-2.27",
		 '24035':"m491.8 142.2l-2.2 1.5-.31-3.3.67-1.69.38-.49.33-.14.82-.23 1.29-.22.36 1.28-1.34 3.28",
		 '24015':"m487.8 132.4l3.35-.72 1.16 4.33-2.27.55-1.17-2-2-1.94.94-.2",
		 '24025':"m486.8 132.6l.06-.001 2 1.94.38 1.13.001.06-.97 1.14-.38.45-.41.45-.27-.18-.23-.17-.05-.12-.88-1.05-.59-.45-.58-.18-.2.04-.26-.21-.4-.61-.1-.22-.32-1.35 3.18-.67",
		 '24005':"m481.5 133.7l2.1-.44.32 1.35.1.22.4.61.26.21.2-.04.58.18.59.45.88 1.05.05.12h-.05l-.17.08-.23.78-.1.56.17.09.06-.02-.001.09-.03.1-.27.45-.14.17-.61-.06-.28-.06h-.02v-1.54h-1.86l.19 1.22.77.25-.71.46-2.14-1.37-.38-1.34.16-1.02.18-2.55",
		 '24013':"m481.5 133.7l-.18 2.55-.16 1.02.38 1.34-2.79.51.2-1.48.04-.4v-.03l-1.21-.88-.82-.74.39-1.04 2.1-.42 2.05-.43",
		 '24021':"m475 135l2.34-.46-.39 1.04.82.74 1.21.88v.03l-.04.4-.2 1.48-2.49 2.28-2.39-.84.18-1.76.02-1.21.08-.94.03-.14.35-.23.08-.14.15-.4.14-.71.09-.02",
		 '23003':"m533.3 31.79l-.67-2.17-7.71 2.21-2.59.73-.19-1.52v-.04-.03l.23-.69.66-1.93 1.27-3.7 1.71-4.96.7-.06.83-.02.13.04.15.21.03.05-.06.09v.001l-.02.3.45 1.45.13.12.07.03 1.35.44.35-.3.94-.89 1.04-.94 1.6-1.39.22-.13.42-.13.39-.04.16.03.72.24 2.1.9 1.89 1.19.03.06 3 9.61 1.76 5.7-.14.21v.12l.28 1.28.15.13-1.94 1.14-1.66.96v.05l.02.07-.61.35-.65.36-.2-.03-.61-2.07-.14-.61-.28-.99-.27-.86-1.68-5.37-2.27.49-1.07.31",
		 '23021':"m533.3 31.79l.5 1.8.9 3.07 1.13 3.92-1.09.62.5 1.87.88-.46 1.75 3.34-.35 1.41-2.44 1.28-1.68.85-1.24 1.01-.86.43-.61-1.02-2.65-5.18-.33-2.76.36-1.55-.75-1.36-.6-.68-1.25-4.3-.53-2.26 7.71-2.21.67 2.17",
		 '23015':"m533.2 62.1l.96-.04-.45-1.28-.05-.69.97-.03.08-.07.09-.24-.09-.81.92-.07-.23.12-.09.17.2.63.28.4.3.13.31-.02.29-.14.58.86.41.93-.38.6-.06.74-.23-.03-.18-.02-.14.18-.04.05v.3l.06.5-.16.93-.08.11-1.19.53-.28.09h-.21l-1.58-3.84",
		 '23023':"m533.2 62.1l1.58 3.84-1.46 1-.2-.96-.46-.86-.2.25h-.52l-.42-.24-.2-.29-.26-1.92.68-.05.31-.24.02-.31.02-.09.08-.15.07-.08.87-.05.07.09.03.07",
		 '23005':"m527.1 65.3v.03l.03.04.33.14.51.08 2.82.37.24-.33.25-.73.2.29.42.24h.52l.2-.25.46.86.2.96-.6.29-.47-.28-.23-.66-.09-.06-.08.03-.87 1.14-.35.62-.24 1v.09l.18.19.05 1.28-.63.54-.4-.13-1.09-.41.18-.53-1.08-.69-2.43-.65.1-2 .58-1.51.15.23.24.23.06.03.35.05.48-.48",
		 '23031':"m525.1 68.7l2.43.65 1.08.69-.18.53 1.09.41.4.13-.04.9-1.09 5.07-.12.55-.05.09-.24.21-1.26-.5-.35-1.41-.03-.03-1.09-.65-.45-.22-.17-.09-.26-.36-.09-.18-.07-.29-.16-1.76-1.14-2.96 1.78-.77",
		 '23001':"m527.8 59.3l.87-.63.6 1.19.85 2.17.91.84.26 1.92-.25.73-.24.33-2.82-.37-.51-.08-.33-.14-.03-.04v-.03l-.14-.34.83-2.24.09-.38v-1.69l-.3-.62-.05-.33.25-.31",
		 '23017':"m519.8 50.79l.7 1.63.2 1.43 1.44 3.38 1.14-1.16 1.5 1.84 2.23.16.5.75.26.53-.25.31.05.33.3.62v1.69l-.09.38-.83 2.24.14.34-.48.48-.35-.05-.06-.03-.24-.23-.15-.23-.58 1.51-.1 2-1.78.77-1.84-6.1-1.69-5.38-.13-.43-1.91-5.75-.35-.99.62-.35 1.24.69.13.06h.26l.11-.1.02-.05v-.32",
		 '23011':"m530 56.69l.96-.23 2.03-.17.1-.12-.05-.56-.31-.23-.12-.04-.16-.16-.1-.22-.04-.13 1.24-.63h.13l.06.12.001.2.27.54.61-.09.52 1.15.1 1.13-.46.05-.11 1.66.09.81-.09.24-.08.07-.97.03.05.69.45 1.28-.96.04-.03-.07-.07-.09-.87.05-.07.08-.08.15-.02.09-.02.31-.31.24-.68.05-.91-.84-.85-2.17-.6-1.19 1.33-2.03",
		 '23027':"m535.4 53.64l.51-.25.5 1 2.84-1.61.26.17-.06.8.02.07.06.08.24.15.3.27.34.89.05.25v.07l-.11.07-.97.69-.4.28-.03.16.12.21.09.12.12.03.08.06.19.2.06.41v.13l-.43 1.26-.46-.24-2.05-.85-1.03.59-.08.22-.92.07.11-1.66.46-.05-.1-1.13-.52-1.15-.61.09-.27-.54 1.7-.88",
		 '23029':"m544.7 37.99l3.03.14.1-.07.18-.06h.06l.3.23.05.08.75 2.37.07.45-.1.61-.04.06-.15.13.001.14.36.39.81.81.53.28h.02l.03.001.09.02h.05l.23-.33-.04-.21v-.36l.04-.07.11-.02 1.06.05.4.29.22.2 1.91 2.32.2.39.24.57.02.09-.24.58-.79 1.63-.21.39-.6.66-.34.07-1.23.59-2.96 3.25-.36.19-.3.13-.08.03-.12-.13-.25-.39-.27-.47-.55-.99-.04-.4-.27-.69-.64-.97-1.13-2.03.88-.46-.15-.64-.67-1.42-.8-1.51.25-.1.72-.36-.46-1.02-1.88-3.29 1.94-1.14",
		 '23019':"m542.7 39.1l1.88 3.29.46 1.02-.72.36-.25.1-2.03 1.06.75 1.41-.54 1.54-1.05.54.34.63.96 1.92-1.42.73-.58.43-.22.41-.49.27-.25.11-.26-.17-2.84 1.61-.5-1-.51.25-2.04-4.14 1.68-.85 2.44-1.28.35-1.41-1.75-3.34-.88.46-.5-1.87 1.09-.62-1.13-3.92-.9-3.07-.5-1.8 1.07-.31 2.27-.49 1.68 5.37.27.86.28.99.14.61.61 2.07.2.03.65-.36.61-.35-.02-.07v-.05l1.66-.96",
		 '23007':"m520.9 45.1l1.19 2.57 1.74 3.54 1.12-.05 1.01-.28.2-.1 3.31 5.07.51.8-1.33 2.03-.87.63-.26-.53-.5-.75-2.23-.16-1.5-1.84-1.14 1.16-1.44-3.38-.2-1.43-.7-1.63v-.43-.41l.12-2.57.13-.69.08-.16.09-.19.22-.4.34-.63.03-.05.1-.12",
		 '23025':"m524.9 31.83l.53 2.26 1.25 4.3.6.68.75 1.36-.36 1.55.33 2.76 2.65 5.18.61 1.02.86-.43 1.24-1.01 2.04 4.14-1.7.88-.001-.2-.06-.12h-.13l-1.24.63.04.13.1.22.16.16.12.04.31.23.05.56-.1.12-2.03.17-.96.23-.51-.8-3.31-5.07-.2.1-1.01.28-1.12.05-1.74-3.54-1.19-2.57.07-.09.5-.6 1.16-2.81.02-.21-.02-.54-.14-.11-.14-.07h-.43l-.17-.55-.14-.6-.28-1.62.11-.88.14-1.05v-.001l.1-.28.09-.13h.001l.02-.001.28-.21.5-.77-.1-.83-.15-1.2 2.59-.73",
		 '26053':"m347.8 59.83l.24-.02.13 2.21 1.17 1.05 3.35-.23.16 2.21 3.34-.24.22 3-.63-.31-.61-.21-.38-.08-.49-.1-6.46-1.33-.91-.19-.83-.17-1.81-2.23-1.02-.55.59-.48.18-.1 1.43-.57.55-.16.48-.2.14-.09.27-.26.65-.65.24-.34",
		 '26131':"m356 55.82l.26 3.42.61-.04.08 1.09-1.11.07.09 1.46.14 1.88.09 1.11-3.34.24-.16-2.21-3.35.23-1.17-1.05-.13-2.21-.24.02.33-.42.14-.12.35-.21.62-.19.41-.06.12.02.17.06 1.81-.31.19-.07.37-.2 3.18-2 .54-.51",
		 '26115':"m411.9 114.3l1.11-.25 1.19-.17.08.04 1.07.66-1.07 1.37-.51.92-.41.74-.04.08-.001.06.02 1-2.92.5-.7-4.6 2.21-.33",
		 '26091':"m409.7 114.6l.7 4.6-1.11.19-4.54.74-.6-4.72 2.19-.26 3.36-.56",
		 '26059':"m404.1 115.4l.6 4.72-.36.06-3.85.59-.28-.8-.49-4 1.11-.1 3.27-.44",
		 '26023':"m395.3 116.5l4.43-.52.49 4-3.53.41-.91.1-.47-4",
		 '26149':"m390.9 117l4.44-.52.47 4-3.5.4-1.25.13-.16-4",
		 '26027':"m386.5 117.4l4.37-.43.16 4-2.58.26-1.56.17-.39-4",
		 '26021':"m385 115.3l1.57 2.07.39 4-2.84.29-2.87.28.42-.36.53-.51.33-.36.51-.69.18-.33.12-.33.17-.77.49-1.42.19-.4.81-1.5",
		 '26163':"m415.6 109l2-.32-.08.69-.04.12-.22.52-.31.21-.26.13-.24.06h-.04l-.41.21-.13.14-.13.26-.21.7v.04.04l.06.74-.07 1.18-.17.76-1.07-.66-.08-.04-1.19.17-1.11.25-.71-4.48 4.38-.75",
		 '26161':"m411.2 109.8l.71 4.48-2.21.33-3.36.56-.57-4.53 4.38-.66 1.05-.18",
		 '26075':"m405.7 110.6h.09l.57 4.53-2.19.26-3.27.44-.63-4.52 1.11-.13 4.33-.57",
		 '26025':"m396.9 111.7l3.33-.4.63 4.52-1.11.1-4.43.52-.56-4.48 2.14-.27",
		 '26077':"m392.5 112.2l2.3-.23.56 4.48-4.44.52-.5-4.53 2.08-.24",
		 '26159':"m385.6 113l4.8-.52.5 4.53-4.37.43-1.57-2.07.63-2.37",
		 '26005':"m389.7 108l2.23-.24.51 4.47-2.08.24-4.8.52.15-4.55 4-.43",
		 '26015':"m396.4 107.2l.54 4.5-2.14.27-2.3.23-.51-4.47 2.21-.27 2.21-.26",
		 '26045':"m398.6 107l2.19-.25.56 4.48-1.11.13-3.33.4-.54-4.5 2.22-.26",
		 '26065':"m403 106.4l1.92-.25.73 4.51-4.33.57-.56-4.48 2.23-.35",
		 '26093':"m409.4 105.5l.8 4.48-4.38.66h-.09l-.73-4.51 2.2-.33 2.21-.31",
		 '26125':"m414.6 103.4l.94 5.65-4.38.75-1.05.18-.8-4.48-.18-1.13 1.1-.17 1.09-.23 3.27-.55",
		 '26099':"m415.7 103.2l2.28-.36.44 2.44.05.31-.92 3.16-2 .32-.94-5.65 1.08-.22",
		 '26147':"m415.1 99.8l4.56-.83.02.08.19.55.07.19.76 1.13-.06 3.61-.07 1.27-.04.31-.03.09-.47.77-.04.05-.16.05-.54.11-.52-.51-.03-.09.17-.41.18-.16.23.05.12-.16.04-.07.001-.11-.02-.12-.08-.09-.04-.02-.39-.09-.11-.02-.14.03-.22.12h-.001l-.05-.31-.44-2.44-2.28.36-.58-3.33",
		 '26087':"m410.7 99.5l-.02-.13.83-1.28 2.16-.35.08.55 1.1-.16.27 1.67.58 3.33-1.08.22-3.27.55-.66-4.39",
		 '26049':"m408.5 99.8l2.18-.31.66 4.39-1.09.23-1.1.17.18 1.13-2.21.31-.64-4.52 2-1.42",
		 '26155':"m406.5 101.3l.64 4.52-2.2.33-1.92.25-.58-4.39-.001-.13 4.08-.57",
		 '26037':"m402.4 102l.58 4.39-2.23.35-2.19.25-.53-4.48 4.37-.52",
		 '26067':"m393.6 103l4.44-.51.53 4.48-2.22.26-2.21.26-.53-4.49",
		 '26139':"m389 102.4l.28 2.23.2 1.51.2 1.88-4 .43-1.06-4.46 1.37-.14 2.03-.23-.14-1.12 1.1-.11",
		 '26121':"m382.4 99.6l3.93-.34.24 2.24 2.31-.24.12 1.13-1.1.11.14 1.12-2.03.23-1.37.14-.11-.23-.41-.73-.9-1.49-.14-.27-.33-.72-.17-.45-.18-.5",
		 '26081':"m388.9 101.2l2.12-.25 2.33-.26.26 2.26.53 4.49-2.21.27-2.23.24-.2-1.88-.2-1.51-.28-2.23-.12-1.13",
		 '26117':"m397.5 98l.61 4.46-4.44.51-.26-2.26-2.33.26-.24-2.24 4.43-.47 2.22-.26",
		 '26057':"m399.7 97.8l2.2-.27.56 4.34.001.13-4.37.52-.61-4.46 2.21-.26",
		 '26145':"m408.1 96.5l.46 3.3-2 1.42-4.08.57-.56-4.34-.02-.2 1.84-.23-.11-1.12 1.09-.12.37.33.68.11 1.19-.15.41.32.76.09",
		 '26151':"m413.1 93.3l4.69-.85.05.27.17.85.05.16 1.36 4.57.06.16.23.55-4.56.83-.27-1.67-1.1.16-.08-.55-.59-4.47",
		 '26157':"m409.8 93.1l.11.79 3.2-.54.59 4.47-2.16.35-.83 1.28.02.13-2.18.31-.46-3.3-.2-1.51 1.92-1.98",
		 '26063':"m413.1 93.3l-3.2.54-.11-.79.001-.06.1-.51.26-.82 1.11-1.94 2.53-1.61.46-.12 1.21.45.48.29.08.07.34.49.79 1.14.13.26.26.78.1.36.14.63-4.69.85",
		 '26017':"m402.9 90.4l1.11-.14.15 1.1 1.23-.14-.07 1.97 1.4 1.35 1.14.45.2 1.51-.76-.09-.41-.32-1.19.15-.68-.11-.37-.33-1.09.12-.4-3.3-.27-2.2",
		 '26111':"m399.1 93.3l2.21-.26-.02-.19 1.84-.19.4 3.3.11 1.12-1.84.23.02.2-2.2.27-.53-4.48",
		 '26073':"m399.1 93.3l.53 4.48-2.21.26-2.22.26-.55-4.46 4.45-.54",
		 '26107':"m390.3 94.3l4.38-.47.55 4.46-4.43.47-.49-4.46",
		 '26123':"m390.3 94.3l.49 4.46.24 2.24-2.12.25-2.31.24-.24-2.24-.46-4.48 4.4-.47",
		 '26127':"m382.3 95.1l3.63-.33.46 4.48-3.93.34-.67-1.29-.11-.21-.12-.3-.04-.2-.02-.15v-.19l.06-.26.15-.28.23-.37.16-.3.12-.34.05-.23.02-.35v-.04",
		 '26011':"m408.2 87.6l.03.48v.33l-.02.59-.78.92-.75.21-.22.03h-.39l-.16.12-.06.06-.18.26-.21.56-.02.1-1.23.14-.15-1.1-1.11.14-.26-2.12 2.58-.33 2.92-.41",
		 '26051':"m402.6 88.3l.53 4.32-1.84.19.02.19-2.21.26-.56-4.44 2.2-.27 1.85-.24",
		 '26035':"m396.4 89.1l2.23-.26.56 4.44-4.45.54-.5-4.51 2.17-.21",
		 '26133':"m394.2 89.3l.5 4.51-4.38.47-.52-4.49 2.11-.24 2.28-.25",
		 '26085':"m389.8 89.8l.52 4.49-4.4.47-.51-4.53 2.04-.17 2.36-.26",
		 '26105':"m382.2 90.4l3.18-.19.51 4.53-3.63.33-.49-1.92.11-1.95.32-.8",
		 '26069':"m404.6 83.6l5.18-.72.05.32.06.92-.11 1.1-.75.87-.17-.05h-.15l-.19.07-.07.05-.12.17-.1.19-.07.28-.04.83-2.92.41-.59-4.44",
		 '26129':"m404.6 83.6l.59 4.44-2.58.33-1.85.24-.56-4.44 4.41-.57",
		 '26143':"m395.8 84.6l4.4-.48.56 4.44-2.2.27-2.23.26-.52-4.49",
		 '26113':"m395.8 84.6l.52 4.49-2.17.21-2.28.25-.5-4.46 4.42-.49",
		 '26165':"m387 85.6l4.42-.48.5 4.46-2.11.24-2.36.26-.45-4.48",
		 '26101':"m387 85.6l.45 4.48-2.04.17-3.18.19.87-2.25.08-.73v-.26-1.26l3.81-.34",
		 '26001':"m404 79.1l5.15-.71.23.35.45 1.45v.32l-.07 2.33-5.18.72-.59-4.45",
		 '26135':"m399.7 79.7l4.38-.57.59 4.45-4.41.57-.56-4.45",
		 '26039':"m395.3 80.2l4.33-.47.56 4.45-4.4.48-.5-4.46",
		 '26079':"m395.3 80.2l.5 4.46-4.42.49-.43-3.86.03-.45.001-.06.27-.13 4-.45",
		 '26055':"m390 80.6l1.01.61.43 3.86-4.42.48-.34-3.36 1.58-.19 1.73-1.4",
		 '26019':"m386.7 82.2l.34 3.36-3.81.34.04-.41.001-.23-.08-.35-.08-.18-.25-.48-.07-.19v-.3-.07l.05-.09.14-.11.53-.24.59-.19.14-.15.08-.22.02-.15v-.11l2.36-.19",
		 '26089':"m388.2 82l-1.58.19-2.36.19-.1-1.12.31-.58.74-.69 1.47-.95.18-.49.97-1.86.58-.37h.09l.16.25-.48 3.51-.03.03-.13.5-.02.13v.32l.04.23.17.71",
		 '26007':"m408 74l.74.81.67 1.35-.04.05-.16-.02-.5-.13-.17-.09-.11-.14-.3-.06-.29.2-.06.09-.08.22v.05l.11.53.12.48.07.14.06.09.08.07.33.27.74.47-5.15.71-.27-1.98v-.16l.04-.09-.28-2.19 4.45-.65",
		 '26119':"m403.5 74.7l.28 2.19-.04.09v.16l.27 1.98-4.38.57-.5-4.41 1.09-.14 3.3-.45",
		 '26137':"m395.8 75.6l3.32-.36.5 4.41-4.33.47-.47-3.3.98-1.23",
		 '26009':"m389.9 76.2l.11-.001 1.38-.13.1.93.36.16 1.69-.2 1.3-.13.47 3.3-4 .45-.27.13-.001.06-.03.45-1.01-.61.07-.18.14-.41.07-.26.06-.88v-.92l-.07-.61-.31-1.14",
		 '26029':"m392.5 73.89l.63.83h.46l2.1-.22.12 1.12-.98 1.23-1.3.13-1.69.2-.36-.16-.1-.93-1.38.13-.11.001-.06-.35.1-.48.13-.17.25-.3.13-.14.82-.66.11-.06.46-.18h.64",
		 '26141':"m408 74l-4.45.65-3.3.45-.38-2.98-.35-2.48.43-.06.83 1 3.08 1.21 1.98.61.27.04.5-.06.14-.16.07.001.47.53.7 1.25",
		 '26031':"m395.7 74.5l-.76-6.38.18.26 2.46 1.18.76-.13.41-.17 1.07.25.11.08-.43.06.35 2.48.38 2.98-1.09.14-3.32.36-.12-1.12",
		 '26047':"m395.7 74.5l-2.1.22h-.46l-.63-.83.45-.07.56-.18.37-.27.02-.13-.001-.09-.04-.1-.06-.05-.54-.04-.08.06-.47-.09-.3-.26-.19-.21-.26-.55-.08-.22-.08-.37v-.08l.05-.14.27-.59.1-.14.95-1.03 1.24-.63.09-.08.45-.51.76 6.38",
		 '26097':"m384.2 63.4l5.59-.63 1.11-.13.13 1.12 6.67-.79 1.05 1 .32 1 1.14.03-1.89.52-1.89-.41-1.74.99-2.56-.54-1.09-.33-1.9-.39-.69-.04h-.14l-.64.14-.11.04-.08.05-.15.17-.5.69-.09.29-.28.48-.07.09-.29.12-1.53.06-.37-3.53",
		 '26095':"m383.8 60.1l-.24-2.37.62.05h.4l1.45-.12.4-.04.29-.05.24-.09.94-.54 1.11-.67.74 6.52-5.59.63-.36-3.33",
		 '26153':"m383.8 60.1l.36 3.33.37 3.53-.48.31-1.36-.08h-.21l-.91.14-.21.08-.5.27-.3.38-.06.12v.7l-.1.71-.1.11-.64.45-.14.06h-.04l-.17-1.77-.3-1.1-.32-2.23-1.12.1-.22-2.23 2.23-.2-.22-2.23 4.44-.45",
		 '26003':"m383.8 60.1l-4.44.45.22 2.23-2.23.2.22 2.23-4.47.43-.41-4.31.32-.29.51-.28h.08l.29.05.13.12.19.4.61.5.08.05.23.02 2.31-.6 1.61-1.45 1.68-1.35 2.29-.64.53-.13.24 2.37",
		 '26041':"m373.1 65.6l4.47-.43 1.12-.1.32 2.23.3 1.1.17 1.77-.49.12-.26-1.28-2.23.98-1.65.69-.1-.5-.09-.23-.18-.26-.13-.08-.11.03-.07.05-.09.17-1.36 3.15-.22.5v.02l-.57.05-.39-4.47-.28-.35-.2-.73 1.12-.1-.19-2.23 1.12-.1",
		 '26109':"m368.8 68.3l2.24-.19.2.73.28.35.39 4.47.57-.05-.17.65-.29.93-.83 1.87-.58.95-.56 1.72-.41-.06-.23-.04-.72-.76-.04-.07-.08-.27-.8-3.84-.09-2.33-.27-.33-.02-.02h-.001l-.17-.14 1.18-.11-.19-2.25.71-.06-.09-1.12",
		 '26043':"m364.1 65.3l4.48-.39.29 3.34.09 1.12-.71.06.19 2.25-1.18.11-2.13-.57-.12.02-.13-.04-.08-.02-.34-.28-.07-.12.001-.05.16-.21.06-.05.14-.2.13-.22-.001-.05-.03-.04-.27-.38-.14-.09-.35-4.22",
		 '26103':"m364 56.73l1.27-.07.8.21.28.08 1.39.75.37.34.08.38.09.28 1.96 2.48.08.09.15.12.14.07.37.08h.47l1.16-.18.1-.03.41 4.31-1.12.1.19 2.23-1.12.1-2.24.19-.29-3.34-4.48.39-.18-2.22-.27-3.32 1.1-.1-.09-1.09h-.02l-.45.03-.15-1.88",
		 '26071':"m358.9 63.5l5-.4.18 2.22.35 4.22-.21-.14-.34-.17-.22-.04h-.02l-2.62-.33-1.58.17-.19-.33-2.29-.59-.55-.27-.22-3-.09-1.11 2.78-.21",
		 '26061':"m359.5 52.3l1.88-.15.09 1.1.62-.05-1.69 3.39-.91.18-1.03 1.2.42 5.53-2.78.21-.14-1.88-.09-1.46 1.11-.07-.08-1.09-.61.04-.26-3.42.21-.71.12-.19.61-.57.96-.89.22-.2 1.34-.96",
		 '26013':"m364 56.73l.15 1.88.45-.03h.02l.09 1.09-1.1.1.27 3.32-5 .4-.42-5.53 1.03-1.2.91-.18-.18.8-.001.7.001.07.1.25.12.24.21-.02.03-.09.15-.25.43-.6.96-1.02.75-.52.1-.03.1.05.84.57",
		 '27055':"m337.3 98.1l.23 1.56.62 2.89-3.67.18-1.11.05-.2-4.48 4.14-.2",
		 '27045':"m329.9 98.5l3.24-.14.2 4.48-3.26.14-3.44.14-.16-4.31 3.43-.31",
		 '27071':"m307.1 40.94l-.09-4.34.12-.05.24-.02h.69l.15.03.27.14.08.16v.09.26l.05.04.18.04.85.05h.63l1.83.16.06.05.11.2.14.4.02.12-.04.33-.06.1v.06l.03.05.18.13h.33l.81-.03 1.01-.19.66-.23.05-.06.03-.14v-.07l-.04-.09-.05-.17.001-.06 1-.47.79-.23h.41l.24.22h.31.02l.46-.05.05 2.72.02 2.2.07 2.23.09.59.1 1.17.02.49-6.07.07.001.67-5.62.12-.2-6.67",
		 '27077':"m299.3 32.97l1.46-.001-.02-2.37v-.83-1.33-.36-.001l1.68.16.41.25.73.52.47 2.39.22 1.54.55 2.82.4.37.14.13.57.32.25.14.001.001h.12l.44.05.33-.15.09 4.34-6.79.1-.03-2.22h-1.13l-.001-2.21 2.18-.02-.04-2.65-.21.22-.19.11-.08.04-.67.14h-.1l-.15-.04-.4-.24-.19-.37-.04-.62.02-.22",
		 '27135':"m299.3 32.97l-.02.22.04.62.19.37.4.24.15.04h.1l.67-.14.08-.04.19-.11.21-.22.04 2.65-2.18.02.001 2.21-2.25.03-6.8-.07v-.97l-.14-1.23.001-3.6h9.3",
		 '27069':"m282.9 32.9l7.08.07-.001 3.6.14 1.23v.97l-6.71-.05.63-1.75-.38-.86-.17-.5-.62-2.03-.05-.27v-.19l.04-.19.04-.04",
		 '27125':"m296 46.56v1.12l-1.12 1.13h-4.51l-1.14-1.12v-1.48h6.75v.37",
		 '27113':"m297 43.52l.1 1.95v1.1l-1.11-.02v-.37h-6.75l-.14-2.7h2.13l.65.03 1.58.001 3.54-.03",
		 '27089':"m283.4 38.73l6.71.05 6.8.07v1.66l.001.55h.08v2.46l-3.54.03-1.58-.001-.65-.03h-2.13l-5.63-.03v-.26l.28-1.09-.06-3.07-.2-.25-.07-.04-.04-.02",
		 '27119':"m289.1 43.51l.14 2.7v1.48l1.14 1.12h4.51l1.12-1.13v-1.12l1.11.02.05 3.13.09.21h.13v2.22l-4.51.02-6.92-.03-.3-2.22-1.13-2.59-.84-3-.2-.78v-.03l5.63.03",
		 '27107':"m292.9 52.2v4.46h-1.13l-5.59-.02-.05-1.12-.16-3.35 6.92.03",
		 '27087':"m297.4 52.1l.05 4.47h-4.56v-4.46l4.51-.02",
		 '27029':"m297.1 46.58v-1.1l3.09-.001.32 1.88.1 2.55.04 3.34.15 3.34-3.38.04-.05-4.47v-2.22h-.13l-.09-.21-.05-3.13",
		 '27007':"m299.2 38.83h1.13l.03 2.22 6.79-.1.2 6.67.03 2.07.07 1.61v1.45l-2.23.48-4.52.02-.04-3.34-.1-2.55-.32-1.88-3.09.001-.1-1.95v-2.46h-.08l-.001-.55v-1.66l2.25-.03",
		 '27031':"m336.7 42.2l.46-.38.77-.38h.33.03l.04.05.35.77.15.42.28.57.09.09 1.57-.29 3.42-.27.35-.02.39.07.16.04.45.18.24.33.04.1-.02.17.04.09.23.16.64.31.21.001.22-.1 1.66-.31 1.45-.19-.001.12-.03.04-.5.39-.14.11-1.86 1.09-1.19.65-.68.37-.64.27-.78.26-.6.21-1.65.69-.82.35-1.69 1.1-1.11.92-1.3 1.25-.26-5.24-.16-2.42-.15-1.62",
		 '27075':"m336.7 42.2l.15 1.62.16 2.42.26 5.24-.19.12-.68.77-.24.28-1.09 1.5-1.41 1.7-.17.18-.36.24-.47.26-1.11 1.14-.27.3-.48.58-.28-7.44-.21-2.71-.05-1.09-.2-4.89.49-.08.24.05v.001l.03.05.13.62-.06.28-.03.08v.03l.63.18 1.35.32 1.39-.1.33-.06.2-.07.13-.07 1.83-1.47",
		 '27061':"m319 46.74v.89l.06 1.3.15 1.48.12 2.98.05 1.55.14 1.8.03 1.06-6.37.12-.07-3.52-.08-.04-.64-.12-.17-.001v.05l-.22.19-.1.05-.24-.15-.76-.51-.1-.11-.07-.19v-.32l.02-.04-.02-.23-.34-.6-.14-.12-.2-.03-1.57.74-.22.13-.55-.15-.29-.21v-1.45l-.07-1.61-.03-2.07 5.62-.12-.001-.67 6.07-.07",
		 '27057':"m300.7 53.2l4.52-.02.07 1.14.11 4.42.02 2.23h-1.13l-3.34.02-.02-2.23-.06-.15-.02-.92v-1.16l-.15-3.34",
		 '27021':"m305.2 53.2l2.23-.48.29.21.55.15.22-.13 1.57-.74.2.03.14.12.34.6.02.23-.02.04v.32l.07.19.1.11.76.51.24.15.1-.05.22-.19v-.05l.17.001.64.12.08.04.13 6.44-5 .07v1.48l.02.76.14.61.09 3.24v.53l-.05.14-.08.02-.02-.13-.06-.09-.69-.46-.3.02-.06.11-.18.11-.43.15-.09-.02-.73-.32-.25-.23-.7-.25-.43-.32-.1-3-.04-2.23h1.13l-.02-2.23-.11-4.42-.07-1.14",
		 '27159':"m304.3 61l.04 2.23.1 3 .43.32-3.8.04-.11-4.48v-1.12l3.34-.02",
		 '27005':"m300.8 56.6v1.16l.02.92.06.15.02 2.23v1.12l-4.2.05-4.8-.03-.17-5.56h1.13 4.56l3.38-.04",
		 '27027':"m291.8 56.62l.17 5.56-.95 1.12-4.48-.02v-.72l.17-2.8-.11-.3-.37-1.23-.001-1.63 5.59.02",
		 '27167':"m286.5 63.3l4.48.02v4.48h.14v2.24 1.12l-2.8-.02.17-.47.02-.08.02-.26-.03-.23-.34-2.7-1.24-2.98-.38-1.11",
		 '27111':"m291.9 62.2l4.8.03 4.2-.05.11 4.48.12 3.38-5.61.02h-4.45v-2.24h-.14v-4.48l.95-1.12",
		 '27137':"m318.7 37.3h.93l6.12 3.39.22-.16 1.79-.13.23.42.39.82.04.06.07.1 1.58.54.2 4.89.05 1.09.21 2.71.28 7.44-.4.2-.36.27-1.51 1.29-.23.21-.07.09.06.18.22.35.36.43.1.05-.05.03-.13-.05-.51-.5-.24.02-.63.43-.05.1v.09l.03.08.05.06.02.15-.12.32-.04.04-.04.03-.27.02-.25-.02-.2-.14-.14-1.29-2.06.05-4.69.15-.05-3.34-.03-1.06-.14-1.8-.05-1.55-.12-2.98-.15-1.48-.06-1.3v-.89l-.02-.49-.1-1.17-.09-.59-.07-2.23-.02-2.2-.05-2.72",
		 '27017':"m319.6 61.2l4.69-.15 2.06-.05.14 1.29.12 3.16-6.81.22-.07-1.93-.07-.3-.03-.48-.03-.64v-1.11",
		 '27115':"m319.8 65.6l6.81-.22.12 3.34.02.56.02.5-1.31.82-1.88 1.23-.45.4-.11.15-.11.2-.9 1.81-2.71.08-.11-3.22.79-.03-.06-2.28-.11-3.35",
		 '27065':"m316.5 69.1l3.39-.15.06 2.28-.79.03.11 3.22-3.36.05-.09-1.81-.04-1.37.4-.001.36-.37-.04-1.85",
		 '27001':"m319.6 57.82l.05 3.34v1.11l.03.64.03.48.07.3.07 1.93.11 3.35-3.39.15v-.34l-.03-.85-.93.001-2.35.11-.1-.07-.03-.03v-.03l-.1-4.26.27-.94-.03-1.88-.06-2.92 6.37-.12",
		 '27035':"m308.4 67.7l.08-.02.05-.14v-.53l-.09-3.24-.14-.61-.02-.76v-1.48l5-.07.03 1.88-.27.94.1 4.26v.03l.03.03.1.07-.1 1.12-5.06.09-.001-.43v-.68l.27-.45",
		 '27097':"m305.5 66.84l.25.23.73.32.09.02.43-.15.18-.11.06-.11.3-.02.69.46.06.09.02.13-.27.45v.68l.001.43 5.06-.09.05 2.23h.05l.35.75.07 1.31-2.22.03-3.09.09.74.59-3.36.07-.19-7.39",
		 '27153':"m304.8 66.6l.7.25.19 7.39-4.48.06-.09-4.29-.12-3.38 3.8-.04",
		 '27041':"m301.2 70l.09 4.29v.19l-5.59.02v-2.24h-.1v-2.24l5.61-.02",
		 '27051':"m291.1 70h4.45v2.24h.1v2.24h-4.47l-.1-3.37v-1.12",
		 '27155':"m288.3 71.1l2.8.02.1 3.37v2.24l-5.27-.04-.16-.21-.04-.05.13-.43.03-.07.001-.001.02-.02.001-.02.82-.66.31-.2.35-.19.18-.18.63-.94.001-.03v-.02-.03-.06l.02-.12.03-.28.04-.34v-.001-.03l.05-.56-.12-1.12",
		 '27011':"m285.9 76.7l5.27.04h.11v2.23l1.13.001.12 3-.64-.22-.92-.37-.09-.19-.39-.18-1.14-.24-.15-.74-.17-.4-.3-.24-.87-.42-1.32-1.47-.63-.84",
		 '27151':"m295.8 78.98l4.47-.03.1 3.36-7.2.03-.61-.32-.12-3h3.35",
		 '27149':"m295.7 74.5v2.25h.1v2.23h-3.35l-1.13-.001v-2.23h-.11v-2.24h4.47",
		 '27121':"m301.3 74.5l.02 2.24h.08l.02 2.23h-1.12l-4.47.03v-2.23h-.1v-2.25l5.59-.02",
		 '27145':"m305.7 74.2l3.36-.07 1.16 2.76.97 1.74-1.91 1.82-1.11.04-.53-.55h-.86l-2.08.03-.02-1.12-3.34.05-.02-2.23h-.08l-.02-2.24v-.19l4.48-.06",
		 '27009':"m309.1 74.2l-.74-.59 3.09-.09 2.22-.03.12 3.38-3.53.09-1.16-2.76",
		 '27095':"m313.2 68.1l2.35-.11.93-.001.03.85v.34l.04 1.85-.36.37-.4.001.04 1.37.09 1.81.09 2.26-2.25.05-.12-3.38-.07-1.31-.35-.75h-.05l-.05-2.23.1-1.12",
		 '27059':"m319.3 74.5l.06 2.23 1.09.16.08 1.69-1.3.001-2.61.08h-.55l-.06-1.86-.09-2.26 3.36-.05",
		 '27025':"m322 74.4l-.37 1.12-.001.2v.09l.02.34.03.25.12.09.43.07.18-.03.71.38.44.84.18.91-.34.87-.24.3h-.001l-.11.1-2.48.07-.05-1.48-.08-1.69-1.09-.16-.06-2.23 2.71-.08",
		 '27123':"m318.8 83.5l1.85-1.2.1 3-1.45.08-.51-1.88",
		 '27003':"m316.1 78.7h.55l2.61-.08 1.3-.001.05 1.48.05 2.23-1.85 1.2-2.67-2.64-.04-2.18",
		 '27141':"m316 76.8l.06 1.86.04 2.18h-.08l-.56-.57-.8-.02-.77.03-.13-.03-.92-.52-1.65-1.03-.97-1.74 3.53-.09 2.25-.05",
		 '27171':"m309.3 80.5l1.91-1.82 1.65 1.03.92.52.13.03.77-.03.8.02.56.57-1.09.55-.13.1-.82 1.55-.12 1.31-2.25.04-2.23.03-.12-3.93",
		 '27093':"m304.7 80l2.08-.03h.86l.53.55 1.11-.04.12 3.93-2.24 1.17-2.34.04-.12-5.6",
		 '27067':"m300.3 78.96h1.12l3.34-.05.02 1.12.12 5.6-4.48.05v-3.37l-.1-3.36",
		 '27023':"m293.2 82.3l7.2-.03v3.37l-2.15.02.001 1.78-2.34-2.35-2.74-2.79",
		 '27163':"m320.6 80.1l2.48-.07-.14 1.12-.19 1.7.03.42.22.48.2.91-.07.97-.32 1.52-2.05-1.82-.1-3-.05-2.23",
		 '27037':"m319.3 85.4l1.45-.08 2.05 1.82.65.38.04 1.09-.51 1.13-1.16.04-1.09.41.001.56-2.26-.86v-1.12h-.37l-.12-1.12-.04-.95 1.35-1.3",
		 '27053':"m316.1 80.8l2.67 2.64.51 1.88-1.35 1.3-1.75-.13-.03-1.12-2.26.06-.02-1.12.12-1.31.82-1.55.13-.1 1.09-.55h.08",
		 '27139':"m316.2 86.5l1.75.13.04.95.12 1.12h.37v1.12l-2.23.06-3.55.09 1.28-1.28.04.001.24-.1.77-.6.22-.3-.06-.12v-.19l.46-.73.34-.14h.19",
		 '27019':"m311.7 84.4l2.25-.04.02 1.12 2.26-.06.03 1.12h-.19l-.34.14-.46.73v.19l.06.12-.22.3-.77.6-.24.1-.04-.001-2.25-.95-.09-3.37",
		 '27085':"m309.4 84.4l2.23-.03.09 3.37-1.12.02-1.11.14v1l-1.9.04h-.33l-.02-1.13-.08-2.26 2.24-1.17",
		 '27143':"m311.7 87.8l2.25.95-1.28 1.28-.15 1.12-6.4.12-.06-1.11-.04-2.25 1.21-.02.02 1.13h.33l1.9-.04v-1l1.11-.14 1.12-.02",
		 '27129':"m307.2 85.6l.08 2.26-1.21.02.04 2.25.06 1.11-1.44.001-.79-.53-4.56-2.54-1.13-.7-.001-1.78 2.15-.02 4.48-.05 2.34-.04",
		 '27073':"m292.5 82l.61.32 2.74 2.79v.58l-1.02 1.11h-5.52l.001-5.98 1.14.24.39.18.09.19.92.37.64.22",
		 '27173':"m289.4 86.8h5.52l1.02-1.11v-.58l2.34 2.35 1.13.7v2.02h-2.15l-.09-1.13h-4.49l-3.3-.02.001-2.25",
		 '27081':"m292.6 89.1l.13 5.61-3.46-.001.03-4.48v-1.13l3.3.02",
		 '27083':"m297.2 94.7h-4.34-.14l-.13-5.61h4.49l.09 1.13.03 4.48",
		 '27127':"m303.9 90.7l.03 2.79-2.23.03v1.12l-3.27.001-1.21.001-.03-4.48h2.15v-2.02l4.56 2.54",
		 '27015':"m304.7 91.3l.3.09.39.19 1.95.99.11.08.22.22.84.87.06 2-4.54.07-2.32-1.1v-1.12l2.23-.03-.03-2.79.79.53",
		 '27103':"m312.6 91.1l-.28 1.13-.44 1.32.02.38.1.82-.001.09-.39.19-.08.001-.27-.08-.28-.16-.11-.09-1.91-.91-.38-.13-.84-.87-.22-.22-.11-.08-1.95-.99-.39-.19-.3-.09 1.44-.001 6.4-.12",
		 '27079':"m312.7 89.99l3.55-.09.11 4.49-2.24.05-2.26-.51-.02-.38.44-1.32.28-1.13.15-1.12",
		 '27131':"m316.3 89.9l2.23-.06 2.26.86.1 3.56h-.05l-3.33.1-1.1.04-.11-4.49",
		 '27049':"m323.5 87.5l.95.81.1.13.02.13.67.66.15.07.39.05 1.24.05.16.04.1.05.09.08.03.05.73 1.09-1.74.06-1.06 1.16.08 2.25-1.18.03-3.34.1-.1-3.56-.001-.56 1.09-.41 1.16-.04.51-1.13-.04-1.09",
		 '27157':"m328.1 90.7l1.48.56 2.15 2.67-1.95 1.2-2.22.09-.05-1.13-2.14.08-.08-2.25 1.06-1.16 1.74-.06",
		 '27169':"m331.7 93.9l2.91 2.06 1.31.45 1.35 1.71-4.14.2-3.24.14-.14-3.36 1.95-1.2",
		 '27109':"m324.2 94.2l1.18-.03 2.14-.08.05 1.13 2.22-.09.14 3.36-3.43.31-2.25-.11-.05-4.49",
		 '27039':"m320.8 94.3l3.34-.1.05 4.49-3.3.11-.14-4.5h.05",
		 '27147':"m320.8 94.3l.14 4.5h-.03l-3.32.1-.12-4.5 3.33-.1",
		 '27161':"m316.4 94.4l1.1-.04.12 4.5-2.24.06-1.11.03-.11-4.5 2.24-.05",
		 '27013':"m314.1 94.5l.11 4.5-4.45.1-1.13.02-.06-3.37-.06-2 .38.13 1.91.91.11.09.28.16.27.08.08-.001.39-.19.001-.09-.1-.82 2.26.51",
		 '27165':"m304 95.8l4.54-.07.06 3.37-4.51.06h-.05l-.04-3.36",
		 '27033':"m298.5 94.7l3.27-.001 2.32 1.1.04 3.36-5.51.05h-.09l-.02-4.51",
		 '27101':"m297.2 94.7l1.21-.001.02 4.51h-5.48-.11v-4.49h4.34",
		 '27117':"m289.3 94.7l3.46.001h.14v4.49l-3.62-.02.03-4.49",
		 '27133':"m289.3 99.2l3.62.02h.11v4.52l-3.74-.001.02-4.52",
		 '27105':"m293 99.2h5.48.09v4.49l-3.8.02h-1.79v-4.52",
		 '27063':"m304.1 99.1h.05l.05 4.5h-.57l-4.41.04h-.62v-4.49l5.51-.05",
		 '27091':"m309.8 99l.08 4.49-1.83.03-3.84.06-.05-4.5 4.51-.06 1.13-.02",
		 '27043':"m315.3 98.9l.11 4.51-3 .07-2.58.04-.08-4.49 4.45-.1 1.11-.03",
		 '27047':"m320.9 98.8l.14 4.51-4.18.12-1.42.04-.11-4.51 2.24-.06 3.32-.1",
		 '27099':"m324.2 98.7l2.25.11.16 4.31-.97.04-4.4.16h-.23l-.14-4.51h.03l3.3-.11",
		 '29143':"m358.1 187.8l1.75-.25 2.18 2.94-.8 1.79-.7.07.1-.19.02-.03.001-.05.03-.13v-.03-.06-.02l-.03-.15-.06-.15v-.001l-.07-.1h-.001l-.02-.02-.03-.02-.16-.04-.29-.05-.19.03-.06.04-.12.16-.02.02-.001.05-.001.06-.001.05.001.04v.05l.12.25.001.001.23.33.08 2.1-.54-.83-.2-.09-.75.13-.76.29-1.58.1h-.5l-.18-3.12 2.65-.15-.24-3h.13",
		 '29155':"m360 194.5l-.74 2-.91 2.47-2.34.18-.34-5.1h.5l1.58-.1.76-.29.75-.13.2.09.54.83",
		 '29005':"m295.8 141.5l3.81.04 1.67.001.02 1.29h.23l.001 1.23-.02 1.6-3.63-.001v-.23-.02-.02l-.03-.07-.68-.66-.63-1.6-.05-.23.11-.1.21-.38-.37-.32-.13.28-.55-.79",
		 '29087':"m301.5 145.7h.93l.21.4-.03.05-.05.4.13.65.06.1.12.09.52 2.98-.34.38-.07.06-.07.03-.38.04h-.05l-.04-.001-.19-.07-.24-.09-.48-.31-1.19-1.08-.06-.09v-.12l-2.41-3.39v-.04l3.63.001",
		 '29165':"m302.4 155.1l4.95-.05.02.99.05 3.85-1.91-.51-1.78-2.81-1.34-1.47",
		 '29021':"m307.2 151.4l.02.94.05 2.79-4.95.05.39-1.18.12-.17.34-.5.04-.05.71-.63.21-.04.21-.46-.08-.36-.08-.38 3-.03",
		 '29003':"m307.2 147.4l.02 1.13.07 2.85-3 .03-.82-1.04-.52-2.98h4.28",
		 '29147':"m304.1 141.6l2.75.001.36 2.39-.02 3.38h-4.28l-.12-.09-.06-.1-.13-.65.05-.4.03-.05-.21-.4h-.93l.02-1.6-.001-1.23h-.23l-.02-1.29 2.8.02",
		 '29227':"m308.4 141.6l2.33-.06.22 2.44-3.75.03-.36-2.39 1.56-.02",
		 '29075':"m307.2 144l3.75-.03.04 3.22v1.32h-3.79l-.02-1.13.02-3.38",
		 '29063':"m311 148.5l.19 3.19v.56l-3.9.05-.02-.94-.07-2.85h3.79",
		 '29049':"m311.2 152.3l.03 2.84v.94l-3.86.05-.02-.99-.05-2.79 3.9-.05",
		 '29047':"m307.3 156.1l3.86-.05.04 3.22-.29-.3-.05-.04-.1-.04h-.34l-.12.06-.06.07-.08.15-.05.23-.13.19-.29.3-1 .5-1.39.16.05-.6-.05-3.85",
		 '29025':"m311.2 151.7l1.11.02 2-.05h1.29l.06 2.25.02 1.13-4.44.06-.03-2.84v-.56",
		 '29061':"m315.4 147.1l.07 2.25.08 2.27h-1.29l-2 .05-1.11-.02-.19-3.19v-1.32l4.44-.05",
		 '29081':"m315.2 141.4l.2 4.07.04 1.7-4.44.05-.04-3.22-.22-2.44 2.11-.07 2.35-.1",
		 '29129':"m317.3 141.3l1.78-.05.14 2.56.04 1.51-3.87.13-.2-4.07 2.11-.09",
		 '29079':"m319.2 145.3l.13 3 .02.85-3.92.21-.07-2.25-.04-1.7 3.87-.13",
		 '29117':"m319.4 149.2l.02 1.14.05 2.29.96-.03-.08 1.15-4.74.18-.06-2.25-.08-2.27 3.92-.21",
		 '29033':"m315.6 153.9l4.74-.18 1.8 2.96-.41.03-.42.16-.91.81-.56.95-.11.07-.4.1-.13-.02-.06-.06-.65-.76-1.06.71-.66-.08-1.04.56-.11-4.12-.02-1.13",
		 '29177':"m315.6 155l.11 4.12-.73-.09-1.39.2-.55.44.03.05.02.14-.21.18-.11.07-.13.02-.14-.001-.2-.1-1.09-.81-.04-3.22v-.94l4.44-.06",
		 '29107':"m315.7 159.2l1.04-.56.66.08 1.06-.71-.07 4.55v.19l-3.37-.04v.38l-2.77-.05.04-2.94.2.1.14.001.13-.02.11-.07.21-.18-.02-.14-.03-.05.55-.44 1.39-.2.73.09",
		 '29095':"m312.3 160.1l-.04 2.94-.03 1.09-4.88-.1-.03-2.56-.001-.9 1.39-.16 1-.5.29-.3.13-.19.05-.23.08-.15.06-.07.12-.06h.34l.1.04.05.04.29.3 1.09.81",
		 '29101':"m318.4 162.7l-.001 4.84-5.54-.001-.62-3.44.03-1.09 2.77.05v-.38l3.37.04",
		 '29083':"m318.4 167.6v.57 3.97l-5.3.04-.22-3-.02-1.56 5.54.001",
		 '29037':"m307.4 164l4.88.1.62 3.44.02 1.56h-1.44l-.56-.06-.58-.22-2.91-.03-.001-3.39v-1.41",
		 '29185':"m313.1 172.1l5.3-.04.24 1.74-.03 2.07h-.26l-.32.56-.001.57h-.56l-1.85-.03.001-.75-2.6-.05.04-1.77.04-2.31",
		 '29013':"m307.4 168.8l2.91.03.58.22.56.06h1.44l.22 3-.04 2.31-.76-.26-.68.06-.4.06-3.77-.06-.05-4.27-.001-1.15",
		 '29039':"m313 176.2l2.6.05-.001.75 1.85.03.21 3.33h-4.66v-.76l.001-3.39",
		 '29217':"m313.1 174.4l-.04 1.77-.001 3.39-5.52-.08v-.25l-.03-4.73v-.3l3.77.06.4-.06.68-.06.76.26",
		 '29057':"m313 180.4h4.66v1.89 1.89h-4.34l-.32-.76v-3",
		 '29011':"m313 179.6v.76 3l-5.45-.1-.06-3.76 5.52.08",
		 '29097':"m313 183.4l.32.76v3.15l-5.71-.001-.05-3.66v-.34l5.45.1",
		 '29145':"m307.6 187.3l5.71.001-.02 3.9-5.64-.14-.05-3.77",
		 '29119':"m313.3 191.2l-.02 3.24-5.57.09-.03-2.19-.02-1.28 5.64.14",
		 '29109':"m317.7 184.1l.23 2.39.02 1.33.02.95h-4.63v-1.51-3.15h4.34",
		 '29009':"m313.3 188.8h4.63l.001 1.33h.4v4.17l-2.9.07-2.17.04.03-5.63",
		 '29167':"m318 177l3.91.22.2 5-4.46-.001v-1.89l-.21-3.33h.56",
		 '29209':"m317.9 187.9l2.79-.03.02 2.28h.39v4.14l-2.77.07v-4.17h-.4l-.001-1.33-.02-.95",
		 '29077':"m322.1 182.3h1.11l.02 1.88h.15l.04 2.35-5.55.03-.23-2.39v-1.89l4.46.001",
		 '29213':"m325.2 190.1h1.48l.06 4-.84.03-4.54.13h-.2v-4.14l4.05-.02",
		 '29043':"m323.5 186.5l1.66.18.04 3.4-4.05.02h-.39l-.02-2.28-2.79.03-.02-1.33 5.55-.03",
		 '29225':"m325.5 181.3l1.7-.03.04 2.84h.13l.02 2.55-2.22.03-1.66-.18-.04-2.35h-.15l-.02-1.88 2.2-.97",
		 '29059':"m323.1 175.9l2.19.02.03 2.27h.14l.03 3.08-2.2.97h-1.11l-.2-5 1.12-1.33",
		 '29085':"m318.6 173.8h4.42v2.08l-1.12 1.33-3.91-.22.001-.57.32-.56h.26l.03-2.07",
		 '29015':"m318.4 168.1l2.21.02v-.38l1.05-.001 1.19.001v3.51l.2 2.57h-4.42l-.24-1.74v-3.97",
		 '29159':"m318.4 162.5l1.94.04h2.06l.45.02v3.06 2.12l-1.19-.001-1.05.001v.38l-2.21-.02v-.57l.001-4.84v-.19",
		 '29195':"m322.2 156.7l2.6 1.97-.78 2.12-1.1 1.81-.45-.02h-2.06l-1.94-.04.07-4.55.65.76.06.06.13.02.4-.1.11-.07.56-.95.91-.81.42-.16.41-.03",
		 '29041':"m324.5 152.5l1.67 1.11-.02 3.75-1.36 1.29-2.6-1.97-1.8-2.96.08-1.15 4-.08",
		 '29115':"m324.3 148.1h.08l.05 4.38-4 .08-.96.03-.05-2.29-.02-1.14-.02-.85 4.96-.2",
		 '29211':"m319.2 143.8l2.74-.12 2.25-.07.001.56.13 3.97-4.96.2-.13-3-.04-1.51",
		 '29171':"m325.5 140.9l.18.64-.06 1.23.29 1.32-1.68.07-.001-.56-2.25.07-2.74.12-.14-2.56 2.69-.13 3.72-.19",
		 '29197':"m329 140.7l.13 3.25-3.26.16-.29-1.32.06-1.23-.18-.64.74-.04 2.79-.19",
		 '29001':"m329.1 143.9l.05.57.16 3.45-4.93.18h-.08l-.13-3.97 1.68-.07 3.26-.16",
		 '29121':"m329.3 147.9l.6 1.08.06 4.51h-.02l-3.86.08-1.67-1.11-.05-4.38 4.93-.18",
		 '29175':"m330 153.5l.04 3.35v1.32l-1.15.001-2.78-.85.02-3.75 3.86-.08",
		 '29089':"m326.1 157.4l2.78.85-1.13 3.66-2.26.07-.62-.1-.11-.05-.5-.35-.08-.11-.22-.47v-.09l.78-2.12 1.36-1.29",
		 '29053':"m324 160.8v.09l.22.47.08.11.5.35.11.05.62.1 2.26-.07.61.61-.8 2.21-.19.58-.08.28-1.27.12-.95.03-2.2-.05v-3.06l1.1-1.81",
		 '29019':"m330 158.2h2.08l.04 2.28h-.15l-.05.12-.19 1.88-.06 1.9-.51.89.08.72-1.79-1.18-1.12-2.33-.61-.61 1.13-3.66 1.15-.001",
		 '29051':"m329.5 164.8l1.79 1.18 2.16.85-1.74 3.13-.56.19-1.59-.18v-1.09h-.92l.85-4.08",
		 '29135':"m328.4 162.5l1.12 2.33-.85 4.08h-1.31l-2.24-2.08-.001-1.13.95-.03 1.27-.12.08-.28.19-.58.8-2.21",
		 '29141':"m322.9 165.6l2.2.05.001 1.13 2.24 2.08-.61 2.73-.68.35-2 .06-1.18-.79v-3.51-2.12",
		 '29131':"m328.6 168.9h.92v1.09l1.59.18.56-.19v.56l.05 1.7h.16l.04 1.88-2.23.02-.91.02-.58-.37-.19-.18-.28-.56-.02-.37-.09-.4-.38-.54-.56-.1.61-2.73h1.31",
		 '29029':"m326.7 171.6l.56.1.38.54.09.4.02.37.28.56.19.18.58.37.91-.02.05 2.1-.59.44-.7.36-.09.02-.16-.06-.38-.44-.16-.3-.07-.29.02-.03-.001-.04-2.38.04-2.19-.02v-2.08l-.2-2.57 1.18.79 2-.06.68-.35",
		 '29169':"m332 174.1h1.66l.14 5.3-2.23.06-.02-.57-1.7-.79-.03-1.89-.05-2.1 2.23-.02",
		 '29105':"m325.3 175.9l2.38-.04.001.04-.02.03.07.29.16.3.38.44.16.06.09-.02.7-.36.59-.44.03 1.89 1.7.79.02.57.04 1.71-4.42.05-1.7.03-.03-3.08h-.14l-.03-2.27",
		 '29229':"m327.2 181.3l4.42-.05.1 2.83.07.47.05 2.06-4.44.07-.02-2.55h-.13l-.04-2.84",
		 '29067':"m333.4 186.6l-.1 3.42-6.69.09h-1.48l-.04-3.4 2.22-.03 4.44-.07 1.66-.03",
		 '29153':"m326.7 190.1l6.69-.09.07 3.84-.31.02-3.9.16-2.5.09-.06-4",
		 '29091':"m337.9 186.5l.07 2.08.04 1.31-.02 2.37.06 1.38-4.61.21-.07-3.84.1-3.42 1.1-.04 1.27.001 2.05-.07",
		 '29215':"m333.8 179.4l2.24-.05.55-.02.1 2.27 1.1-.03.13 4.86-2.05.07-1.27-.001-1.1.04-1.66.03-.05-2.06-.07-.47-.1-2.83-.04-1.71 2.23-.06",
		 '29161':"m337.5 172.1l.96-.03.28 4.72-2.8.09.08 2.5-2.24.05-.14-5.3.82-.38.43-.2 1.21-.07 1.44-.04-.04-1.33",
		 '29125':"m337.2 170.4l.23 1.75.04 1.33-1.44.04-1.21.07-.43.2-.82.38h-1.66l-.04-1.88h-.16l-.05-1.7 1.72-.02 1.41-.08 2.4-.09",
		 '29151':"m337 165h.07l.2 5.39-2.4.09-1.41.08-1.72.02v-.56l1.74-3.13.4-.3.8-.76.07-.13.07-.08.09-.06 1.3-.55.33-.04.49.04",
		 '29027':"m332.2 160.5l4.73-.14.08 4.63-.49-.04-.33.04-1.3.55-.09.06-.07.08-.07.13-.8.76-.4.3-2.16-.85-.08-.72.51-.89.06-1.9.19-1.88.05-.12h.15",
		 '29137':"m335.7 152.6l.16 4.14-5.87.14-.04-3.35h.02l1.11-.03-.02-.77 3.33-.08 1.3-.05",
		 '29205':"m333.2 148.9l1.1-.03.1 3.77-3.33.08.02.77-1.11.03-.06-4.51 3.29-.1",
		 '29103':"m329.2 144.5l3.89-.13.02.57.15 3.99-3.29.1-.6-1.08-.16-3.45",
		 '29199':"m333 140.4l.11 3.96-3.89.13-.05-.57-.13-3.25 1.66-.11 2.3-.16",
		 '29045':"m335.2 140.4l.2.13.77.58.02.08-.03.26.04.09.98 1.21.41.33.64.05-.72 1.72-4.39.09-.02-.57-.11-3.96h2.21",
		 '29111':"m337.5 144.8l-.06.63.69 3.29-3.77.13-1.1.03-.15-3.99 4.39-.09",
		 '29127':"m338.1 148.8l.98 2.38.59.93-3.94.54-1.3.05-.1-3.77 3.77-.13",
		 '29173':"m335.7 152.6l3.94-.54 1.39 1.06-.25.001-2.44 2.04.3 1.71h-1.31l-1.47.05v-.19l-.16-4.14",
		 '29007':"m330 156.9l5.87-.14v.19l1.47-.05h1.31l.4 2.27-2.18 1.19-4.73.14-.04-2.28h-2.08v-1.32",
		 '29139':"m340.6 159.1l.05 1.91.09 1.93-1.5.05.05 1.76-2.21.18h-.07l-.08-4.63 2.18-1.19 1.48-.03",
		 '29163':"m341.1 153.1l2.38 2.47 2.42 2.15-2.82.15-1.78.06.04 1.15-.74.03-1.48.03-.4-2.27-.3-1.71 2.44-2.04.25-.001",
		 '29113':"m345.9 157.7l.46 1.58v.16l-.27.42v.04l.02.09.54 1.44-2.87.98-1.05.03-.75-.74-.57-.74-.76.02-.05-1.91.74-.03-.04-1.15 1.78-.06 2.82-.15",
		 '29219':"m340.6 161l.76-.02.57.74.75.74 1.05-.03.17 4.2-2.69-1.09-.06-.12-.84-.68-.11-.001-.44.14-.5-.11-.05-1.76 1.5-.05-.09-1.93",
		 '29073':"m339.8 164.9l.13 2.46.14 2.31.06 1.58-1.65.82-.96.03-.23-1.75-.2-5.39 2.21-.18.5.11",
		 '29055':"m340.1 171.3l2.73-.06.27 6-.51.58-1.59.05-.03-1.13-2.23.09-.28-4.72 1.65-.82",
		 '29065':"m342.6 177.8l.06 1.42-1.6.02.04 1.14h1.04l.05 1.12-4.42.12-1.1.03-.1-2.27-.55.02-.08-2.5 2.8-.09 2.23-.09.03 1.13 1.59-.05",
		 '29203':"m337.7 181.6l4.42-.12h.37l1.08 3.06.74.99-.93.17-1.1.06.07 2.63-4.45.15-.07-2.08-.13-4.86",
		 '29149':"m337.9 188.5l4.45-.15 1.14.73.11 4.24-2.88.15-.44.001-2.29.08-.06-1.38.02-2.37-.04-1.31",
		 '29181':"m343.5 189.1l.74-.02 1.59.04 2.31-.11 1.12 4-2.14.12-3.51.2-.11-4.24",
		 '29035':"m344.4 185.5l2.46.46 1.12 1.55.25 1.48-2.31.11-1.59-.04-.74.02-1.14-.73-.07-2.63 1.1-.06.93-.17",
		 '29179':"m342.6 179.2l1.97-.31 1.93-.09.1 2.44.29 1.87.18-.02.05.57.001.79-.39.65.04.88-2.46-.46-.74-.99-1.08-3.06h-.37l-.05-1.12h-1.04l-.04-1.14 1.6-.02",
		 '29093':"m347.7 177l1.18 1.12.09 4.24-1.86.71-.18.02-.29-1.87-.1-2.44-1.93.09-1.97.31-.06-1.42.51-.58 4.6-.18",
		 '29221':"m346 171l1.5 1.58.2 4.44-4.6.18-.27-6 3.17-.17",
		 '29071':"m343.9 166.7l2.25-1.31.09 2.24-.25 3.43-3.17.17-2.73.06-.06-1.58-.14-2.31-.13-2.46.44-.14.11.001.84.68.06.12 2.69 1.09",
		 '29510':"m351.4 163.7l.21 1.04-.66 1.71-.42-.22-.13-.69-.16-1.01.25-.51.41-.31.5-.001",
		 '29183':"m348.7 160.9l1.78.43.26.08.25.12.19.11.98.59.04.07v.08l-.04.3-.02.12-.1-.19-.16-.1-.17.001-.24.16-.17-.06-.62-.37-.1-.1-.72.06-.02.15-.08.18-.06.1-.11.09-.15.001-.36-.07h-.11l-.07.03-.07.07-.24.43-.5 1.09v.15l-.07.13-.16.09-.15.001-.86-.05-.07.02-.13.1-.29.46-.23.1-2.25 1.31-.17-4.2 2.87-.98 2.11-.56",
		 '29189':"m352.2 162.8l-.73.89-.5.001-.41.31-.25.51.16 1.01.13.69.42.22-.05.16-.69 1.81-.08-.29-.63-1.19-1.86.1-1.32.33-.11.21-.09-2.24.23-.1.29-.46.13-.1.07-.02.86.05.15-.001.16-.09.07-.13v-.15l.5-1.09.24-.43.07-.07.07-.03h.11l.36.07.15-.001.11-.09.06-.1.08-.18.02-.15.72-.06.1.1.62.37.17.06.24-.16.17-.001.16.1.1.19",
		 '29099':"m346.2 167.6l.11-.21 1.32-.33 1.86-.1.63 1.19.08.29-.03.04-.04.09-.15.5-.02.05v.13l.02.54.13.58.12.29.19.25.03.04.03.03.85.82-1.58 1.11-2.28-.31-1.5-1.58.25-3.43",
		 '29187':"m347.5 172.6l2.28.31.98.73-1.29 1.42.82.8 1.95 1.76.44-.42.46.34-.34.4-3.93.21-1.18-1.12-.2-4.44",
		 '29186':"m351.9 172.2l2.85 2.6-1.58 2.75-.46-.34-.44.42-1.95-1.76-.82-.8 1.29-1.42-.98-.73 1.58-1.11.51.38",
		 '29123':"m352.8 177.9l.04.58.13.72.11 2.98h-.73l-3.38.16-.09-4.24 3.93-.21",
		 '29223':"m349 182.4l3.38-.16.13 2.97 1.15-.06.03.58-1.41 1.63-4.3.19-1.12-1.55-.04-.88.39-.65-.001-.79-.05-.57 1.86-.71",
		 '29023':"m352.2 187.4l.5 1.32.36.78.07.03.09.07.33.64.13.46-.03.25-.09.16-.63 1.77-3.66.21-1.12-4-.25-1.48 4.3-.19",
		 '29069':"m355.5 191l.18 3.12.34 5.1-3.41.24-.82.05 1.59-2.77 1.13-.99.07-.11.11-.3-.07-1.02-.1-.13-.92-1.3-.41.001-.27.02.63-1.77 1.94-.1",
		 '29207':"m356.1 184.5l1.03-.06.2 1.2.21.28.16.26.22.54.16.44.04.69h-.13l.24 3-2.65.15-1.94.1.09-.16.03-.25-.13-.46-.33-.64-.09-.07-.07-.03-.36-.78-.5-1.32 1.41-1.63.95-.05.6-.22-.06-.95.95-.04",
		 '29017':"m355.7 178.3l.34 6.14-.95.04.06.95-.6.22-.95.05-.03-.58-1.15.06-.13-2.97h.73l-.11-2.98-.13-.72 2.89-.21",
		 '29157':"m354.7 174.8l2.72.76 1.75 2.89v.08l-3.46-.2-2.89.21-.04-.58.34-.4 1.58-2.75",
		 '29031':"m355.7 178.3l3.46.2v.12l.06.26.29.54.19.28.27.26.13.16.16.37v.03l.06.22v.001.02l-.04.4-.04.12v.001l-.02.02-.12.06-.37.1.02 1.13-2.69 1.77-1.03.06-.34-6.14",
		 '29201':"m359.8 182.6l.26.37.63 1.17.36.88.68.56-1.89 1.95-1.75.25-.04-.69-.16-.44-.22-.54-.16-.26-.21-.28-.2-1.2 2.69-1.77",
		 '29133':"m361.7 185.6l1.96.21.37.47-.39 1.29-.29.17v.3l.59.32-.4 1.79-1.55.35-2.18-2.94 1.89-1.95",
		 '28047':"m372.3 267.1l.69 3.47-.84.21-1.77.46-2.17.62-.69-.48-.26-3.53 1.12-.08.05-.39 3.86-.28",
		 '28059':"m372.3 266.3l5.22-.4.57 4.69v.19l-.79.51-.09.03-2.79-.1-.21-.05-.75-.42-.4-.23-.69-3.47-.06-.75",
		 '28043':"m358.1 226.3l1.67-.09.03.38 2.78-.18.17 2.45-2.98.21-3.64.23-.12-.57-.07-1.14 1.15-.08 1.08-.25-.03-.37-.04-.59",
		 '28161':"m362.3 222.6l.29 3.81-2.78.18-.03-.38-1.67.09-.27-3.44 2.2-.51 2.26.24",
		 '28025':"m371 226.5l.13 1.69 2.34-.17.06.08-.18.32-1.53 1.99-.06-.76-3.33.27-.37.05-.33-2.28 3.27-1.18",
		 '28155':"m366.1 227.8l1.68-.13.33 2.28-.71.43-3.06 1.17-1.34.1-.24-3.39 3.34-.45",
		 '28017':"m369.7 223.2l1.12-.08.25 3.41-3.27 1.18-1.68.13-.05-.95.56-.05-.26-3.38 3.33-.26",
		 '28013':"m362.3 222.6l2.8-.18 1.21 1.05.26 3.38-.56.05.05.95-3.34.45-.13-1.88-.29-3.81",
		 '28115':"m369.4 219.5l.29 3.75-3.33.26-1.21-1.05-.21-2.83 4.46-.13",
		 '28081':"m370.2 217.5l2.09.41.37 4.86-1.85.33-1.12.08-.29-3.75.79-1.94",
		 '28145':"m366.4 216.7l3.71-.26.08 1.14-.79 1.94-4.46.13-.11-1.5-.07-1.13 1.64-.32",
		 '28071':"m359.7 217.7l.56-.03 1.09-.09.93-.04 1.37.32 1.11.27.11 1.5.21 2.83-2.8.18-2.26-.24-.31-4.68",
		 '28137':"m354.6 215.8l1.03-.17 1.97-.64 1.98-.13.08 1.12.57.09.11 1.57-.56.03-5 .32-.16-2.2",
		 '28107':"m354.7 218l5-.32.31 4.68-2.2.51-2.16.19-.08-1.37-.67-.73-.2-2.39-.03-.56",
		 '28119':"m354.8 218.6l.2 2.39.67.73.08 1.37.07 1.13-.57.04-2.77.17-.14-2.45.55-.02-.13-2.1 1.03-.07-.1-1.1 1.11-.08",
		 '28135':"m355.7 223.1l2.16-.19.27 3.44.04.59.03.37-1.08.25-1.15.08.07 1.14-.42-.84-.14-.27-2.87.14-.12-2.26-.07-1.13 2.77-.17.57-.04-.07-1.13",
		 '28083':"m352.6 227.8l2.87-.14.14.27.42.84.12.57.28.18.03.13.16 2.49-.35.57-.39.02.07 1.08-1.66.5-1.32-.27-.35-6.23",
		 '28133':"m352.5 225.5l.12 2.26.35 6.23-1.1.07.05.76-1.73.1-.69-3.33-.06-1.12 1.12-.06-.25-4.81 2.19-.11",
		 '28053':"m353 234l1.32.27.15 2.17-.35.64-.06.05-.12-.02-.29-.18-.14-.18-.05.001-.03.04-.04.22.05.43.02.07.52.43.2.13-.92.07.06 1.11-2.23.14-.61-2.22-.28-2.24 1.73-.1-.05-.76 1.1-.07",
		 '28051':"m354.3 234.3l1.66-.5 4.65 1.25-2.05 4.48-4.38-1.43-.2-.13-.52-.43-.02-.07-.05-.43.04-.22.03-.04.05-.001.14.18.29.18.12.02.06-.05.35-.64-.15-2.17",
		 '28015':"m356.2 229.3l3.64-.23.24 3.37.76.13.74-.06.11 1.51-1.06.99-4.65-1.25-.07-1.08.39-.02.35-.57-.16-2.49-.03-.13-.28-.18",
		 '28097':"m362.8 228.9l.2 2.82 1.34-.1-.62 2.31-2.05.14-.11-1.51-.74.06-.76-.13-.24-3.37 2.98-.21",
		 '28019':"m367.4 230.4l.23 3.19-.22.02-1.04 1.22.08 1.14-1.11.09-1.62-2.18.62-2.31 3.06-1.17",
		 '28105':"m368.1 230l.37-.05 3.33-.27.06.76.25 2.83-1.54.13-2.95.23-.23-3.19.71-.43",
		 '28087':"m373.4 228.4l2.73-1.45-.06 2.75-.06 3.2-3.9.33-.25-2.83 1.53-1.99",
		 '28095':"m376.2 222.5v.37l-.1 4.08-2.73 1.45.18-.32-.06-.08-2.34.17-.13-1.69-.25-3.41 1.85-.33 3.6-.26",
		 '28057':"m376.3 217.6l-.11 4.91-3.6.26-.37-4.86 2.25-.16 1.83-.14",
		 '28117':"m373.8 214l.69 3.75-2.25.16-2.09-.41-.08-1.14.02-2.09 3.7-.28",
		 '28141':"m373.6 210.9l1.71-.14 1.18 1.25-.11 4.05-.04 1.55-1.83.14-.69-3.75-.23-3.1",
		 '28003':"m373.4 210.9l.18-.001.23 3.1-3.7.28-1.33-3 .38-.03 4.25-.34",
		 '28139':"m366.7 211.5l2.03-.16 1.33 3-.02 2.09-3.71.26-.2-2.81.55-.04.14-.58-.13-1.76",
		 '28009':"m364.9 211.6l1.89-.14.13 1.76-.14.58-.55.04.2 2.81-1.64.32-.56.04-.25-3.39-.42-.62-.28-1.28 1.62-.11",
		 '28093':"m360.2 211.9l3.06-.2.28 1.28.42.62.25 3.39.56-.04.07 1.13-1.11-.27-1.37-.32-.93.04-1.09.09-.11-1.57-.57-.09-.08-1.12-.2-2.88.84-.06",
		 '28033':"m359.3 212l.2 2.88-1.98.13-1.97.64-1.03.17-1.09-1.71-.27-1.74 6.13-.38",
		 '28143':"m353.5 214.1l1.09 1.71.16 2.2.03.56-1.11.08.1 1.1-1.03.07-1.88-1.21-.14-1.5 1.62-2.58 1.18-.43",
		 '28027':"m350.8 218.6l1.88 1.21.13 2.1-.55.02.14 2.45.07 1.13-2.19.11-.12-1.7-1.69.07-1.19.07-.04-.13.15-.32.48-.99 1-1.81.55-.11.56-.11.46-.22.37-.32.02-.02v-.02l.08-.25-.11-1.16",
		 '28011':"m347.3 224.1l1.19-.07 1.69-.07.12 1.7.25 4.81-1.12.06.06 1.12-4.83.26-.15-.41.79-.32.19-.16.03-.14v-.001l-.3-.24-.32-.24-.06-.11-.001-.03.06-.29.86-3.69 2.08-1.05.06-.43-.11-.28-.48-.38v-.02",
		 '28151':"m344.7 231.9l4.83-.26.69 3.33.28 2.24-2.22 1.27-2.62.09.31-.36.35-1.41v-.001l-.03-.98-.28-.3-.37-.66-.54-1.55.56-.16.13-.26-.08-.3-.45-.3-.55-.37h-.001",
		 '28125':"m350.5 237.2l.61 2.22-1.05 1.19.02.28.2.05.29.23.29.29.34 1.02-.001.17-.1.11-.5.07-2.61.14-.11-2.27.06-.19h.05l.08-.06.05-.08.18-1-.001-.88 2.22-1.27",
		 '28055':"m348.2 238.4l.001.88-.18 1-.05.08-.08.06h-.05l-.06.19.11 2.27 2.61-.14.06.56-.49.6-.92 1.77-1.09.34-.11-2-1.43.06-.34-.11-.03-.02-.1-.09-.02-.02-.001-.02-.03-.04-.001-.02-.06-.15-.87-3.92-.02-.1.11-.41.36-.57.09-.1 2.62-.09",
		 '28163':"m354.2 238.1l4.38 1.43-.69 1.76-.11.17-.62.44-3.17 1.8-.4.09-1.07.92-1.88-1.33-.06-.56.5-.07.1-.11.001-.17-.34-1.02-.29-.29-.29-.23-.2-.05-.02-.28 1.05-1.19 2.23-.14-.06-1.11.92-.07",
		 '28007':"m363.7 233.9l1.62 2.18.14 2.29-2.58.19-1.83.13.04.59-2.54.23 2.05-4.48 1.06-.99 2.05-.14",
		 '28159':"m367.6 233.6l2.95-.23.36 4.65-1.09.08-4.36.25-.14-2.29 1.11-.09-.08-1.14 1.04-1.22.22-.02",
		 '28103':"m372.1 233.3l3.9-.33-.08 3.87-.02.81-4.99.43-.36-4.65 1.54-.13",
		 '28069':"m370.9 238l4.99-.43-.08 4.56-5.68.45-.34-4.51 1.09-.08",
		 '28099':"m365.5 238.4l4.36-.25.34 4.51-4.35.32-.34-4.58",
		 '28079':"m365.5 238.4l.34 4.58h-.06l-4.4.29-.05-.74-.21-3.23-.04-.59 1.83-.13 2.58-.19",
		 '28089':"m358.5 239.5l2.54-.23.21 3.23-.54.65h-.24l-.56.07-1.51 1.39-.59.66-.04.1v.17l.06.22-1.38.08-.56-.05-.06-1.04-.4.02-1.83.1-.07-1.11.4-.09 3.17-1.8.62-.44.11-.17.69-1.76",
		 '28121':"m360.7 243.2l.89 4.67.15 2.25-5.44.31-.28-.8.39-1.83.66-.95.74-1.05-.06-.22v-.17l.04-.1.59-.66 1.51-1.39.56-.07h.24",
		 '28049':"m352.5 244.7l1.07-.92.07 1.11 1.83-.1.4-.02.06 1.04.56.05 1.38-.08-.74 1.05-.66.95-.39 1.83.28.8-5.31.33-.24-2.28 1.69-3.75",
		 '28149':"m346.6 244.1l1.43-.06.11 2 1.09-.34.92-1.77.49-.6 1.88 1.33-1.69 3.75-.26.31-.54.64-1.13 1-.3-.04-.95-.29-1.1-1.28 1.26-.16-.08-1.86-1.2-1.28v-.02l-.05-.07-.03-.05v-.001l-.02-.21.25-.82-.08-.18",
		 '28063':"m345.4 253.3l2.56-.03 1.89.36.03.15v.14l.09.22 1.07-.06.06 1.13.06 1.13-4.56.26-2.45-1.65 1.25-1.65",
		 '28021':"m350.8 248.4l.24 2.28v3.39l-1.07.06-.09-.22v-.14l-.03-.15-1.89-.36-2.56.03 2.24-3.27.95.29.3.04 1.13-1 .54-.64.26-.31",
		 '28029':"m356.4 250.4l1.41 3.76-1.31.54-5.36.56-.06-1.13v-3.39l5.31-.33",
		 '28127':"m361.8 250.1l1.07 3.38-1.11.15-2.38.32-1.61.22-1.41-3.76 5.44-.31",
		 '28129':"m361.6 247.8l4.43-.32.45 5.42-.92.13-2.73.4-1.07-3.38-.15-2.25",
		 '28123':"m361.3 242.5l.05.74 4.4-.29.32 4.56-4.43.32-.89-4.67.54-.65",
		 '28101':"m365.8 242.9l4.35-.32.35 4.55-4.43.33-.32-4.56h.06",
		 '28075':"m370.2 242.6l5.68-.45-.08 3.5-.03 1.05-5.23.45-.35-4.55",
		 '28023':"m375.7 246.7l-.07 4.32-4.73 1.24-.42-5.12 5.23-.45",
		 '28061':"m370.5 247.2l.42 5.12-.36.05-4.05.59-.45-5.42 4.43-.33",
		 '28067':"m370.6 252.4l.37 5-2.22.16-2.77.2-.35-4.67.92-.13 4.05-.59",
		 '28031':"m365.6 253.1l.35 4.67-.58.04-1.48.1-.07-1.03-.2-.32-.39-.23-.4-.05-.29-.14-.65-.37-.13-2.13 1.11-.15 2.73-.4",
		 '28065':"m359.4 253.9l2.38-.32.13 2.13.65.37.29.14.4.05.39.23.2.32.07 1.03-.74.05-1.87.12.05.57-1.49.09-.11-1.7-.26-1.35-.1-1.73",
		 '28077':"m357.8 254.2l1.61-.22.1 1.73.26 1.35.11 1.7-.85.76-2.24-.05-.3-4.73 1.31-.54",
		 '28085':"m356.4 254.7l.3 4.73-.18.001-3.16.19-.94.06-.19-3.38-1.14.07-.06-1.13 5.36-.56",
		 '28037':"m346.6 256.6l4.56-.26 1.14-.07.19 3.38-3.84.22-1.21.42-.71-.29-.13-3.4",
		 '28001':"m344.1 255l2.45 1.65.13 3.4-.05-.05-.77-.26-.45.08-.36.13-1.48.61-1.41 1.31-.1.23-.16.67.27-1.39.41-3.36.05-.1.03-.05 1.18-2.36v-.001l.17-.3.11-.19",
		 '28157':"m346.7 260l.71.29.6 4.13-1.28.06-5.08.24.27-2 .16-.67.1-.23 1.41-1.31 1.48-.61.36-.13.45-.08.77.26.05.05",
		 '28005':"m353.4 259.6l.26 4.51h-.21l-2.86.17-2.58.14-.6-4.13 1.21-.42 3.84-.22.94-.06",
		 '28113':"m353.4 259.6l3.16-.19.28 4.5-.97.06-2.21.14-.26-4.51",
		 '28147':"m356.8 259.4l2.24.05.08 1.31.19.74.43.53.81.51.81.13.21.93-4.67.31-.28-4.5.18-.001",
		 '28091':"m363.1 257.9l.37 5.55-.82.06-1.19.08-.21-.93-.81-.13-.81-.51-.43-.53-.19-.74-.08-1.31.85-.76 1.49-.09-.05-.57 1.87-.12",
		 '28073':"m365.4 257.8l.09 1.13 1.13-.08.29 4.33-3.35.33-.37-5.55.74-.05 1.48-.1",
		 '28035':"m368.7 257.5l.29 3.97.19 1.6.09 1.17-2.24.16-.18-1.29-.29-4.33-1.13.08-.09-1.13.58-.04 2.77-.2",
		 '28153':"m375.7 251.1l.26 2.53.43 3.36-4.29.36-1.12.08-.37-5 .36-.05 4.73-1.24",
		 '28041':"m372.1 257.3l4.29-.36.52 4.12.19 1.49-4.5.35-.5-5.6",
		 '28111':"m370.9 257.4l1.12-.08.5 5.6-.48 1.16-2.79.22-.09-1.17-.19-1.6-.29-3.97 2.22-.16",
		 '28131':"m372.1 264.1l.18 2.25.06.75-3.86.28-.05.39-1.12.08-.23-3.37 2.24-.16 2.79-.22",
		 '28109':"m366.9 263.2l.18 1.29.23 3.37-1.53.1-.68.43.08 1.31-1.09.81-.49.03-1.85-2.55.12-.92.13-.68.17-.82.15-.6.03-.03.09-.001h.07l.11-.25.14-.68-.02-.4.82-.06 3.35-.33",
		 '28045':"m363.6 270.5l.49-.03 1.09-.81-.08-1.31.68-.43 1.53-.1.26 3.53-1.87 2.61-.52.03h-.02l-.03-.02-.04-.03-.03-.02-.08-.1-.24-.28-.11-.21-.35-.67v-.07l.03-.11.1-.26-.02-.24-.69-1.4-.07-.07-.02-.02",
		 '28039':"m372.6 262.9l4.5-.35.41 3.36-5.22.4-.18-2.25.48-1.16",
		 '30091':"m224.4 30.1l-.39 4.65-.26 3.11-5-.44.1-1.11-1.02-1.21-1.86-.17.1-1.1-.56-.06.15-3.32.11-1.12 8.63.77",
		 '30085':"m216 34.89l1.86.17 1.02 1.21-.1 1.11 5 .44-.4 5-1.65-.57-1.7-.99-3.65-.92-.51.21-.23.31-.28.21-.18.09h-1.06l-.64-.13-.49-.36-.74-.14-.64-.03-1.58-.02-.43.001-.47.26-1.35.41.28-2.65.34.04.45-4.37 7.16.71",
		 '30031':"m158.9 58.2l2.47.4-.16.63-.3 1.8-.07.67-.15.93-.19 1.13-.44 2.48-.65.42-.6.23-.15 1.1-.18 1.11-1.08-.17-.43 2.21-.16.96-.17 1.27-.78 4.26-.33 2.46-.73-.68-.1-.31-.4-1.16-.74-1.45-.43-.43.34-2.04.95-5.59.26-.36.54-3.31-1.65-.27-.61-.85-.35-.63-.42-.45-.33-.24-.35-.21 1.37-.23 1.93-1.22.53-.48.12-.85.32-.52.6-.77.4-.14 1.3.14.87.14",
		 '30057':"m148 62.2l.05.02h.18l.29-.22.26-.49.05-.25.1-.09.22-.08.58-.04.77.19 1 .7.04.07-.001.14.35.21.33.24.42.45.35.63.61.85 1.65.27-.54 3.31-.26.36-.95 5.59-.34 2.04-1.03.39-2.72-.45.15-.92-1.09-.18-1.47-.29-.82-.7-.02-1.13.19-1.11-1.29-.22-.91-1.31.58-3.32.03-.57-.26-.69-.27-.08-.24.05-.15.08-.17-.02-.27-.19-.45-.58-.02-.07v-.65l.36-1.14.87-.33.43-.19.22-.16.11-.1.64-.35 2.43.35",
		 '30007':"m153.3 52.4l1.33.05.33-1.98.35-.42.05-.03.15-.03.74.37 2.2 4.47.41 2.62.06.76-.87-.14-1.3-.14-.4.14-.6.77-.32.52-.12.85-.53.48-1.93 1.22.45-2.74-1.1-.19 1.07-6.59",
		 '30043':"m148.4 53.5l.34.13.33-.08.58-.29.02-.03-.03-.21 1.55-.98 2.12.36-1.07 6.59 1.1.19-.45 2.74-1.37.23.001-.14-.04-.07-1-.7-.77-.19-.58.04-.22.08-.1.09-.05.25-.26.49-.29.22h-.18l-.05-.02-1.53-1.27-.26-.59.09-2.69v-.25l-.47-1.16-.32-.11.36-1.07v-.32l.03-.19.33-.27 1.38-.43.78-.36",
		 '30093':"m145.5 56.2l.32.11.47 1.16v.25l-.09 2.69.26.59 1.53 1.27-2.43-.35-.64.35-.11.1-.22.16-.43.19-.87.33-.38-1.27-.31-.61-.31-.31-1.44-.75-.57-.69.58-.06.4-.19.52-.33.1-.1.89-1.33.86-.99h1.09l.78-.22",
		 '30023':"m145.8 55.1l-.36 1.07-.78.22h-1.09l-.86.99-.89 1.33-.1.1-.52.33-.4.19-.58.06v-.15l-.09-.13-.06-.03-.63-.15-.34.07-1.27.61-.15.19-.65-.37-.06-.68-.22-.97-.04-.08h-.04l-.1.001v-.02l.77-.4.77-.2.99-1.51.2-1.1 2.19.39.1-.55 4.22.76",
		 '30001':"m136.6 57.71l.1-.001h.04l.04.08.22.97.06.68.65.37.15-.19 1.27-.61.34-.07.63.15.06.03.09.13v.15l.57.69 1.44.75.31.31.31.61.38 1.27-.36 1.14v.65l.02.07.45.58.27.19.17.02.15-.08.24-.05.27.08.26.69-.03.57-.58 3.32.91 1.31 1.29.22-.19 1.11.02 1.13.82.7 1.47.29 1.09.18-.15.92 2.72.45-1.56 1.79-1.17-.03-1.82-.52-2.51-.26-1.37.51-3.22-.8-.61.14-.36.38-.13.2-.11.48v.03l-.09.14-.19.1-.23-.09-.73-.82-.25-.36-.11-.61.001-1.61.04-.03.05-.1v-.1l-.26-1.12-.2-.62-.17-.27-.38-.43-.32-.25-.31.08-1.5-2.08-1.41-5.25-.001-1 .02-.77.12-.21v-.38l-.1-1.02-.05-.16-.87-1.23-.19-.19.19.001.3-.05 2.85-1.26.56-.3.32-.23.28-.53",
		 '30081':"m135.6 48.1l-.5 1.63.14 2.08.03 1.27-.46 1.17.05 1.72.65 1.22.54.45.55.09v.02l-.28.53-.32.23-.56.3-2.85 1.26-.3.05-.19-.001-.79.46-1.11.97-1.77.81-.37-.06-.08-.32-.66-1.05-.11-.05-.36-.09-.4-.05-.03-.03v-.05l.16-.87.32-1.73 2.51-6.27.79-1.75.53-1.21.31-.88.05-.28-.03-.15-.05-.05 4.56.66",
		 '30039':"m140.6 46.76l1.1 1.52.26.28.5-.13.14-.06.09.03-.57 3.24-.5 2.7-.1.55-2.19-.39-.2 1.1-.99 1.51-.77.2-.77.4-.55-.09-.54-.45-.65-1.22-.05-1.72.46-1.17-.03-1.27-.14-2.08.5-1.63.29.09 1.1.21 1.86-.85.12-.67.63-.27.99.18",
		 '30049':"m145.9 33.1l.12 2.45-.09.94.04.12.29.66.28.45.31.18.07.001 1.02-.14.99-.21h.04l.98.81.07.27-.05.06v.29l.001.03.97.69.58.22.91.13.56-.03-.68 4.09.82.8.33.28.19.02.03-.05.72.12-.46 2.72 1.16.2 1.09 2.14-.74-.37-.15.03-.05.03-.35.42-.33 1.98-1.33-.05-2.12-.36-1.55.98.03.21-.02.03-.58.29-.33.08-.34-.13.12-.36.37-1.83-.11-.81-.64-.68-1.1-.18.3-1.72-1.16-.2-.1.001-1.02-.19.74-4.2.03-.17-2.2-.39-.08-.04.7-3.88h-.16l-.24-1-.09-.52.1-1.6.02-.1 1.24-1.8.46-.49.37-.26",
		 '30077':"m141 36.81l2.77.56.09.52.24 1h.16l-.7 3.88.08.04 2.2.39-.03.17-.74 4.2 1.02.19.1-.001 1.16.2-.3 1.72 1.1.18.64.68.11.81-.37 1.83-.12.36-.78.36-1.38.43-.33.27-.03.19v.32l-4.22-.76.5-2.7.57-3.24-.09-.03-.14.06-.5.13-.26-.28-1.1-1.52.81-4.38-1.42-.25.98-5.31",
		 '30047':"m139.5 36.54l-2.71-.52.29 4.31.02.08-.21 1.1-1.08.36-2.21-.42.11-.55.28-2.22-.74-.14-.21-.09-.07-.08-.19-.35.22-.62.2-.32.05-.001.07.04.21-.31.03-1.29-.05-.07-.19-.09-.54-.1-1.47-.29.18-1.85.11-.55 1.09.22.21-1.07-.001-.38.1-.73 3.88.75.05-.35-.02-.09-.04-.05h-.06l-.001-.3.17-.15.23-.14 1.22.24 1.47 2.31.02.07.14 2.22v.32l-.04.2-.5.97",
		 '30063':"m139.5 36.54l1.45.27-.98 5.31 1.42.25-.81 4.38-.99-.18-.63.27-.12.67-1.86.85-1.1-.21-.29-.09-4.56-.66-.04-.04-.16-.13-.46-.06-.23.05-.14.05-.2.05-.96-.2-.02-.001-.49-1.22.07-.35 1.21-1.14.94-1.86-.41-.84-1.57-2.58.07-.36.97.12.49.21.63.35 1.03.76.28.29.16.45.46.46.13.09.19.07.62-.11 2.21.42 1.08-.36.21-1.1-.02-.08-.29-4.31 2.71.52",
		 '30061':"m121.2 33.82l.31.54.2.23.42.15.35.12 1.17.2.3-.08h.07l.96.18.27.13 1.73 1.22.38.33.04.29-.16.77.99.78.39.08-.07.36 1.57 2.58.41.84-.94 1.86-1.21 1.14-.07.35h-.39l-.06-.02-.13-.04-1.3-1.73-.04-.11-.17-1.31-.23-.41-.41-.77-.73-1.71-.78-1.77-.15-.11-.69-.27-.47-.23-.15-.13-.19-.16-1.38-1.91v-.32l.17-1.05",
		 '30089':"m120.4 24.67l.91.61.5-.15 1-.44.7 1.44.49 2.63.47.65.09.07 1.57.64.88-.2.42-.49.09-.69 1.23.25.15.22-.33 1.63 1.1.22.74.13 1.47.28-.21 1.08-.11.55-.18 1.85 1.47.29.54.1.19.09.05.07-.03 1.29-.21.31-.07-.04-.05.001-.2.32-.22.62.19.35.07.08.21.09.74.14-.28 2.22-.11.55-.62.11-.19-.07-.13-.09-.46-.46-.16-.45-.28-.29-1.03-.76-.63-.35-.49-.21-.97-.12-.39-.08-.99-.78.16-.77-.04-.29-.38-.33-1.73-1.22-.27-.13-.96-.18h-.07l-.3.08-1.17-.2-.35-.12-.42-.15-.2-.23-.31-.54.25-.56.29-.74v-.72-.05-.001l-.001-.03-.001-.05-1.73-3.53-.27-.47.63-2.98",
		 '30053':"m121.1 21.1l1.33-6.22 6.71 1.43 3.72.74.69.13-.001 1.78.37 1.49v.04l-.46 1.12-2.11-.42-.03.73.14.4-.86 4.35-1.27-.26-.2-.04-.23 1.09-.22 1.54-1.23-.25-.09.69-.42.49-.88.2-1.57-.64-.09-.07-.47-.65-.49-2.63-.7-1.44-1 .44-.5.15-.91-.61.77-3.58",
		 '30029':"m139.2 18.27l.16 2.2.36.25 1.84 1.32 1.67 2.85-.04.2-.06.14-.21.73.56 1.62.21.47.75 1.34-.08.53.02.07.79.54.05.04.06.02.76.23.09-.02-.13 2.29-.37.26-.46.49-1.24 1.8-.02.1-.1 1.6-2.77-.56-1.45-.27.5-.97.04-.2v-.32l-.14-2.22-.02-.07-1.47-2.31-1.22-.24-.23.14-.17.15.001.3h.06l.04.05.02.09-.05.35-3.88-.75-.1.73.001.38-.21 1.07-1.09-.22.21-1.08-1.47-.28-.74-.13-1.1-.22.33-1.63-.15-.22.22-1.54.23-1.09.2.04 1.27.26.86-4.35-.14-.4.03-.73 2.11.42.46-1.12v-.04l-.37-1.49.001-1.78 5.56 1.1",
		 '30035':"m154 27.73l-.23-.09-.32-.08-2.78-.48-.38 2.14-.04.03-6.57-1.19-.21-.47-.56-1.62.21-.73.06-.14.04-.2-1.67-2.85-1.84-1.32-.36-.25-.16-2.2.83.16 2.34.46 4.87.89.9.16 6.91 1.23-1.05 6.56",
		 '30051':"m162.8 22.49l4.48.71-.23 1.05-.68 4.38-.33 1.81-.4 2.56-.61-.09-.17 1.09-5-.79.18-1.1 1.15.18.7-4.38.75-4.37.17-1.05",
		 '30101':"m154 27.73l1.05-6.56 2.88.49.78.13 2.15.36 2 .33-.17 1.05-.75 4.37-.7 4.38-1.15-.18-2.21-.37.28-1.64-1.05-.55-.81-.33-.83-.16-1.41-1.18-.07-.15",
		 '30073':"m143.6 28.1l6.57 1.19.04-.03.38-2.14 2.78.48.32.08.23.09.07.15 1.41 1.18.83.16.81.33 1.05.55-.28 1.64 2.21.37-.18 1.1-.29 1.83-4.96-.79.09-.52-1.44-1.61-7.19-1.29-.09.02-.76-.23-.06-.02-.05-.04-.79-.54-.02-.07.08-.53-.75-1.34",
		 '30099':"m146.1 30.82l7.19 1.29 1.44 1.61-.09.52 4.96.79-.6 3.65-2.23-.37-.18 1.1-2.22-.38-.4 1.3-.89-.28-.56.03-.91-.13-.58-.22-.97-.69-.001-.03v-.29l.05-.06-.07-.27-.98-.81h-.04l-.99.21-1.02.14-.07-.001-.31-.18-.28-.45-.29-.66-.04-.12.09-.94-.12-2.45.13-2.29",
		 '30013':"m153.1 40.1l.89.28.4-1.3 2.22.38.18-1.1 2.23.37 3.75.59-.3.37-.18.19-.3.45-.05.15.04.1 2.09 2.21 1.07.55-.11.73-1.11-.18-.29.63-.11.73-.17 1.97 1.11.18-.26 2.19-.17 1.1-.17.15-.84-.91-1.13-1.44-.09-.08-1.21-.97-4.14-.09-.19 1.1-1.04-.17-1.16-.2.46-2.72-.72-.12-.03.05-.19-.02-.33-.28-.82-.8.68-4.09",
		 '30059':"m155.2 48.2l1.04.17.19-1.1 4.14.09 1.21.97.09.08 1.13 1.44.84.91-.001.29.04.14.07.15.09.12 1.31 1.38.8.001.82-.15-.37 2.43-.37 1.96-.28 1.83-.07.46-4.44-.79-2.47-.4-.06-.76-.41-2.62-2.2-4.47-1.09-2.14",
		 '30067':"m161.4 58.64l4.44.79-.19.63-.67 4.44.64.09-.32 2.33-.45 2.9-.14.32-.33 2.24 1.48.23 2.38.41-.31 2.11-2.05-.32-.76-.12-1.02-.05-3-.41h-.02l-1.36-.21-.4-.14-1.12-.23-1.52-.23.17-1.27.16-.96.43-2.21 1.08.17.18-1.11.15-1.1.6-.23.65-.42.44-2.48.19-1.13.15-.93.07-.67.3-1.8.16-.63",
		 '30041':"m167.3 23.2l10.66 1.57-.33 1.65-.21 1.14-.37 2.65-.61 3.45-.42 1.98-.56-.05-1.11-.16.17-1.12-.87-1.22-6.7-1.01-.17 1.09-1.12-.17.4-2.56.33-1.81.68-4.38.23-1.05",
		 '30015':"m165.7 32.99l1.12.17.17-1.09 6.7 1.01.87 1.22-.17 1.12 1.11.16.56.05-.76 5-.35-.16-.87.05-.99.19-.5.42v.29l-.3 1.26-.03.06-.23.18-2.75 1-.44-.06-3.71-.56-1.07-.55-2.09-2.21-.04-.1.05-.15.3-.45.18-.19.3-.37-3.75-.59.6-3.65.29-1.83 5 .79.17-1.09.61.09",
		 '30045':"m165.1 43.3l3.71.56-.11.73.64.81 1 .94 1.09.35.93.7-.52 3.68-.29 2.59-.65-.09-.39-.27-.55-.44-.08-.1-.19-.13-.75-.07h-.45l-1.56.2-.82.15-.8-.001-1.31-1.38-.09-.12-.07-.15-.04-.14.001-.29.17-.15.17-1.1.26-2.19-1.11-.18.17-1.97.11-.73.29-.63 1.11.18.11-.73",
		 '30107':"m171.5 53.66l3.14.45-.24 1.7-.74 4.32-2.23-.32-5.57-.84.28-1.83.37-1.96.37-2.43 1.56-.2h.45l.75.07.19.13.08.1.55.44.39.27.65.09",
		 '30097':"m165.9 58.97l5.57.84-.16 1.11.28 1.17 1.67.25-.15.7-.51.32-.82 1.03-.29 1.1-.3 2.22-1.1-.16-1.19.39-1.19.39-.33 2.22-1.18-.18-.34 2.25-1.48-.23.33-2.24.14-.32.45-2.9.32-2.33-.64-.09.67-4.44.19-.63.07-.46",
		 '30009':"m177.6 68.6l.44-.25.15-.03-.05.33-.09.18-.07.11h-.04l.25.87.46.83.48.06-.39.35-.3 1.05-.22 1.68 5.16.64-.08.17-1.39 2.52-3.37-.46-2.8-.37-1.19-.16-.18-.03-1.68-.31-4.79-.65.31-2.11.97.14.38-1.17.85-.83.71-.65.42-.32 1.19-.4 1.48.21.67-.67.06-.42.31-.31 1.15-.27.09.03.27.19.21.05.18.02.45-.05",
		 '30095':"m177.8 61.83l-.16 1.05-.13 1.15-.33 3.56.14.39.3.6-.45.05-.18-.02-.21-.05-.27-.19-.09-.03-1.15.27-.31.31-.06.42-.67.67-1.48-.21-1.19.4-.42.32-.71.65-.85.83-.38 1.17-.97-.14-2.38-.41.34-2.25 1.18.18.33-2.22 1.19-.39 1.19-.39 1.1.16.3-2.22.29-1.1.82-1.03.51-.32.15-.7.18-1.11 4.37.61",
		 '30037':"m178.1 53.85l-.22 1.64.1.58.58 1.23.75 2.86-.25 1.84-1.28-.17-4.37-.61-.18 1.11-1.67-.25-.28-1.17.16-1.11 2.23.32.74-4.32.24-1.7.1-.73 3.34.47",
		 '30027':"m175.3 40.65l.95.38 1.03-.34.23-.16 2.62-.04.14.03.32.21.32.76.39.25.19.18.25.36.001.09-.03.07.2.37.69.41 2.71 1.05.09.001.14-.04.12-.15-.32 2.25-.15 1.16-.2.07-2.21-.27-1.2.31-.3 1.07-.15 1.09 1.12.15-.46 3.32-.32 1.09-3.34-.47-3.34-.47-.1.73-3.14-.45.29-2.59.52-3.68-.93-.7-1.09-.35-1-.94-.64-.81.11-.73.44.06 2.75-1 .23-.18.03-.06.3-1.26v-.29l.5-.42.99-.19.87-.05.35.16",
		 '30005':"m176 35.64l.42-1.98.61-3.45.37-2.65.21-1.14.33-1.65.9.13 2.75.4.51.08h.05l3.84.52.47.06 2.14.28-.05.36-.12.73-.46 2.14-1.36 3.72-.07-.05-.31-.07-.07.18-.54 2.63-.41 3.08-2.03.44-.12-.05-1.88-.24-.11.66-.24 1.73-.32-.76-.32-.21-.14-.03-2.62.04-.23.16-1.03.34-.95-.38.76-5",
		 '30071':"m180.9 41.49l.24-1.73.11-.66 1.88.24.12.05 2.03-.44.41-3.08.54-2.63.07-.18.31.07.07.05 1.36-3.72.46-2.14.12-.73.05-.36 9 1.11-.36 1.07-.46 3.89-.92 3.75-.94-.12-.46 1.24-.6 4.23-.28 2.27-.1.41-.17.35-.04.05-.06.03-.43-.07-.75-.4-.1-.04-.36-.05-.53.25-.38.57-.31.35-1 1.05-.37.04-.05-.02.06-.47-.06-.83-.04-.23-.33-.27-.08-.04-1.09-.17-.28.04h-.37l-.84-.07-.2-.04-.06-.05-.12.15-.14.04-.09-.001-2.71-1.05-.69-.41-.2-.37.03-.07-.001-.09-.25-.36-.19-.18-.39-.25",
		 '30069':"m185.6 44.1l.06.05.2.04.84.07h.37l.28-.04 1.09.17.08.04.33.27.04.23.06.83-.06.47-.64 1.17-.19 1.29-.37 4.74v.08l.03.04.3.3.05.03.41 1.29-3.89-.47-.98-.07-2.22-.29.32-1.09.46-3.32-1.12-.15.15-1.09.3-1.07 1.2-.31 2.21.27.2-.07.15-1.16.32-2.25",
		 '30065':"m178.1 53.85l3.34.47 2.22.29.98.07 3.89.47v3.37l-.17 1.28-1.3-.16-.83.65-.2.35-.08.56-2.59-.34-.79.26-.18 1.32-3.34-.44.25-1.84-.75-2.86-.58-1.23-.1-.58.22-1.64",
		 '30111':"m188.5 58.5l.36.23.17.21.75 1.59.84 2.36-.22 1.12-.2.57-1.45-.18-1.19.6-.42.33-.06.36-.4.3-1.49-.16-.38 1.45-.44 3.39-2.31.45-1.15-.15-1.79-.28-.48-.06-.46-.83-.25-.87h.04l.07-.11.09-.18.05-.33-.15.03-.44.25-.3-.6-.14-.39.33-3.56.13-1.15.16-1.05 1.28.17 3.34.44.18-1.32.79-.26 2.59.34.08-.56.2-.35.83-.65 1.3.16.17-1.28",
		 '30003':"m195.1 67.4l-.06.49.02 1.92.58.16.87.1.18.07-.46 4.11-.32.7-.28 1.46 2.22.31 1.12.1 1.08.09-.11 2.4-5.67-.66-1.74-.21-.48-.1-4.3-.53-2.74-.34-3.07-.37 1.39-2.52.08-.17-5.16-.64.22-1.68.3-1.05.39-.35 1.79.28 1.15.15 2.31-.45.44-3.39.38-1.45 1.49.16.4-.3.06-.36.42-.33 1.19-.6 1.45.18.78.09-.14 1.1 2.22.27.42.61.57.63 1.01.12",
		 '30103':"m188.9 58.75l5 .6 1.17 1.26.41 3.4-.39 3.41-1.01-.12-.57-.63-.42-.61-2.22-.27.14-1.1-.78-.09.2-.57.22-1.12-.84-2.36-.75-1.59-.17-.21",
		 '30087':"m188.1 53.87l3.75.46.18-.05h.34l.3.03 5.78.68.31.16.65.13 4.61.49-.32.16-.42 2.95-.36 1.46-.32 2.98v.33l-.2.73-.27.35-.49 4.46-.38-.04-.22 2.09-.4 2.32-.4 1.15-.24 2.19-1.08-.09-1.12-.1-2.22-.31.28-1.46.32-.7.46-4.11-.18-.07-.87-.1-.58-.16-.02-1.92.06-.49.39-3.41-.41-3.4-1.17-1.26-5-.6-.36-.23v-3.37l-.41-1.29",
		 '30033':"m202.7 41.3l.52.06.72 1.23-.46 4.32-.3.72-.28 1.47 1.12.12-.23 2.21.73.08-.43 4.09-.02.18-4.61-.49-.65-.13-.31-.16-5.78-.68-.3-.03h-.34l-.18.05-3.75-.46-.05-.03-.3-.3-.03-.04v-.08l.37-4.74.19-1.29.64-1.17.05.02.37-.04 1-1.05.31-.35.38-.57.53-.25.36.05.1.04.75.4.43.07.06-.03.04-.05.17-.35.1-.41 1.41.56 1.91.24h.13l.82-.03.22-.03.15-.05 2.22-1.2 1.49-1.98.44-.1.27.2",
		 '30019':"m206.8 28.37l9 .91-.11 1.12-.15 3.32.56.06-.1 1.1-7.16-.71-1.41-.15-.37-.77.27-2.57-1.12-.12.12-1.1.27-.35.19-.73",
		 '30105':"m206.8 28.37l-.19.73-.27.35-.12 1.1 1.12.12-.27 2.57.37.77 1.41.15-.45 4.37-.34-.04-.28 2.65-.67.001-2.66-.57-.13-.06-.22-.23-1.03-.35-.06.03-.05.06-.12.17-.12.31v.77l-.27-.2-.44.1-1.49 1.98-2.22 1.2-.15.05-.22.03-.82.03h-.13l-1.91-.24-1.41-.56.28-2.27.6-4.23.46-1.24.94.12.92-3.75.46-3.89.36-1.07 9.12 1.03",
		 '30055':"m213.4 41l-.07.83-.16 1.5-.36.15-.09.99-1.12-.11-.35 2.21-.36 1.09-.44 4.43-3.76-.37-.11 1.12-.38-.04-.74-.08.12-1.12-1.11-.12-.73-.08.23-2.21-1.12-.12.28-1.47.3-.72.46-4.32-.72-1.23-.52-.06v-.77l.12-.31.12-.17.05-.06.06-.03 1.03.35.22.23.13.06 2.66.57.67-.001 1.35-.41.47-.26.43-.001 1.58.02.64.03.74.14.49.36",
		 '30079':"m204.5 51.5l1.11.12-.12 1.12.74.08.38.04.11-1.12 3.76.37.72.07-.26 2.61 1.13.11 1.05.85.17.19.16.27-.03.3 3.75.36-.23 2.25-.04.37-1.11-.1-.05.55-1.12-.1-.23.54-.97.28-2.26-.22-1.82-.56-.31-.41-.45-.79-.15-1.14-.25-1.15-1.87-.55-2.24-.23.43-4.09",
		 '30075':"m201.7 69.2l10.86 1.12-.41 4.42-.16 1.15-.46-.04-.43 4.52-.46-.05-6.89-.69-.65-.04-.97-.05-2.17-.23.11-2.4.24-2.19.4-1.15.4-2.32.22-2.09.38.04",
		 '30017':"m204.1 55.6l2.24.23 1.87.55.25 1.15.15 1.14.45.79.31.41 1.82.56 2.26.22.97-.28.23-.54 1.12.1-.16 1.67-1.54-.14-.13 1.38v.53l.09.27-.22 2.26-.48-.05-.42 4.48-.39-.04-10.86-1.12.49-4.46.27-.35.2-.73v-.33l.32-2.98.36-1.46.42-2.95.32-.16.02-.18",
		 '30011':"m213.8 65.93l2.31.22.99.2.49.98.45 1.13.78.1 1.52.12-.09 1.11.81.07-.69 8.6-.39 2.76-8.92-.84.43-4.52.46.04.16-1.15.41-4.42.39.04.42-4.48.48.05",
		 '30025':"m215.8 59.96l.05-.55 1.11.1.04-.37 1.68.15.55.23-.03.37 2.74.23-.11 1.29-.29 3.34-.36 4.3-.06.81-.81-.07.09-1.11-1.52-.12-.78-.1-.45-1.13-.49-.98-.99-.2-2.31-.22.22-2.26-.09-.27v-.53l.13-1.38 1.54.14.16-1.67",
		 '30109':"m222.7 50.5l-.08.86-.75 8.81-2.74-.23.03-.37-.55-.23-1.68-.15.23-2.25.95.08.59-.32.2-.17.86-1.23.24-.45.09-1.02-.02-.75-.02-.19-.07-.28-.63-1.83 2.54.23.05-.56.76.07",
		 '30021':"m212.8 44.5l-.11 1.11 2.24.22-.11 1.11 3.37.32.6 1.17-.2 2.23.82.07.63 1.83.07.28.02.19.02.75-.09 1.02-.24.45-.86 1.23-.2.17-.59.32-.95-.08-3.75-.36.03-.3-.16-.27-.17-.19-1.05-.85-1.13-.11.26-2.61-.72-.07.44-4.43.36-1.09.35-2.21 1.12.11",
		 '30083':"m223.4 42.83l-.65 7.64-.76-.07-.05.56-2.54-.23-.82-.07.2-2.23-.6-1.17-3.37-.32.11-1.11-2.24-.22.11-1.11.09-.99.36-.15.16-1.5.07-.83.64.13h1.06l.18-.09.28-.21.23-.31.51-.21 3.65.92 1.7.99 1.65.57",
		 '37043':"m421.6 203.8l2.92 1.74-.68.11-4 .59-.72.09 2.5-2.53",
		 '37113':"m425.5 201l2.97 3.93-3.89.61-2.92-1.74.22-1.24.18-.43.07-.05 2.23-.69 1.14-.39",
		 '37175':"m431.4 199l1.35 1.2.29.33.12.37.07.47.25.75.08.13.13.07-1.85 1.26-1.36.35-1.1.53.44-3.53 1.58-1.94",
		 '37099':"m426.7 198.4l3.14 2.49-.44 3.53-1 .48-2.97-3.93 1.27-2.57",
		 '37087':"m428.5 194.5l1.03 1.38 1.89 3.08-1.58 1.94-3.14-2.49-1.02-2.24-.05-.25 2.87-1.43",
		 '37173':"m425.7 196.2l1.02 2.24-1.27 2.57-1.14.39-2.23.69-.07.05-.19-.21v-.13l.07-.23.06-.07.19-.11.24-.1.15-.08.22-.5.05-.32v-.14l-.04-.24-.59-.04-3.25.2 2.82-1.78h.05.19l1.47-.15.13-.08 1.79-1.42.37-.55",
		 '37075':"m418.9 200.2l3.25-.2.59.04.04.24v.14l-.05.32-.22.5-.15.08-.24.1-.19.11-.06.07-.07.23v.13l.19.21-.18.43-1.9.41-.71.33h-.1l-.38-.16-.37-.71.42-2.31.09.03",
		 '37039':"m421.8 202.6l-.22 1.24-2.5 2.53-1.29.16-2 .23-.04-2.85.85-.75 1.11-.03.39-.33.24-.33.37.71.38.16h.1l.71-.33 1.9-.41",
		 '37121':"m437 189.2l1.39 2.34-1.39 1.35-.29-1.11-.11-.2-.58-.99-.05-.06-1.71-.65-.64.24 1.84-1.37 1.54.44",
		 '37199':"m433.6 190.1l.64-.24 1.71.65.05.06.58.99.11.2.29 1.11-1.24 1.75-1.59-1.26-1.29-1.92.73-1.34",
		 '37115':"m431.8 190.8l1.11.65 1.29 1.92-.97.35-.57.36-.33.24-.65.47-1.32.86-.8.22-1.03-1.38.4-2.03.47-.12.91-.85.65-.64.18-.13.26-.19h.05l.15.1.2.19",
		 '37021':"m435.8 194.7l1.42 2.11-.88.92-.75-.32-.68.48-.86.46-.78.29-.48-.04-.32-.07-.11-.06-.2-.04-.32.13-.1.08-.26.37-1.89-3.08.8-.22 1.32-.86.65-.47.33-.24.57-.36.97-.35 1.59 1.26",
		 '37089':"m436.3 197.7l.19.95-.63 2.53-2.15 1.13-.13-.07-.08-.13-.25-.75-.07-.47-.12-.37-.29-.33-1.35-1.2.26-.37.1-.08.32-.13.2.04.11.06.32.07.48.04.78-.29.86-.46.68-.48.75.32",
		 '37149':"m439.9 200.8l-2.58.27-1.46.07.63-2.53.62-.22.4-.14.1.001.32.14.15.1 1.65 1.39.11.17.07.74",
		 '37161':"m442 195.4l.32 2.88-.32 1.82v.55l-1.11.11-.99.11-.07-.74-.11-.17-1.65-1.39-.15-.1-.32-.14-.1-.001-.4.14-.62.22-.19-.95.88-.92 3.47-1.13 1.35-.27",
		 '37111':"m438.4 191.5l.3-.67.07.04.08.1.23.37.06.12.09.29-.07.49.77 1.56.74 1.79-3.47 1.13-1.42-2.11 1.24-1.75 1.39-1.35",
		 '37011':"m438.2 186.9l.11-.31 1.43 2.09.33 1.91-1.39.24-.3.67-1.39-2.34 1.21-2.27",
		 '37189':"m440.2 185l.92.36.6.53.4.29.86.34-.45 1.68-2.71.49-1.43-2.09.08-.21.47-.53.51-.35h.001l.05-.03.06.15.27.09h.16.02l.22-.07-.04-.61",
		 '37003':"m447.9 188.3l-.32 3.55-2.31.14-.34-2.58.56-.46.3-.12.46-.15.17.04.71-.17.57-.16.19-.09",
		 '37009':"m440.2 182.4l3.32-.33.04.26.68.95.37.31.1.16.23.48.06.39-2.07 1.94-.86-.34-.4-.29-.6-.53-.92-.36.05-2.64",
		 '37005':"m448.1 181.5l-.34 2.16-.09.37-.47.08-.2-.22-.04-.22-.45-.23-.08-.001-.65.19-.82.99-.06-.39-.23-.48-.1-.16-.37-.31-.68-.95-.04-.26 4.62-.56",
		 '37193':"m445 184.6l.82-.99.65-.19.08.001.45.23.04.22.2.22.47-.08.09-.37 1.3 1.97.28 2.34-1.48.36-.19.09-.57.16-.71.17-.17-.04-.46.15-.3.12-.56.46-2.46-1.21.45-1.68 2.07-1.94",
		 '37027':"m439.8 188.7l2.71-.49 2.46 1.21.34 2.58-.25.42-.12.16-.22.02h-1.65l-2-1.21-.85-.65-.09-.12-.33-1.91",
		 '37023':"m440.1 190.6l.09.12.85.65 2 1.21h1.65l.22-.02.12-.16-1.36 2.83-.02.06-1.62.04-1.35.27-.74-1.79-.77-1.56.07-.49-.09-.29-.06-.12-.23-.37-.08-.1-.07-.04 1.39-.24",
		 '37045':"m443.6 195.3l1.12 1.73 1.84 3.08-.41.04-4.19.44v-.55l.32-1.82-.32-2.88 1.62-.04",
		 '37071':"m444.8 197l5.21-.57-.39 3.38-2.97.27-1.84-3.08",
		 '37109':"m449.6 194.6l.26.75.09 1.13-5.21.57-1.12-1.73.02-.06 5.96-.66",
		 '37035':"m445.3 192l2.31-.14 1.34.78.38.38.5.65-.18.92-5.96.66 1.36-2.83.25-.42",
		 '37097':"m449.4 188l1.95-.26.26 2.57-.2 1.67-.08.72.6 1.62.07.24.04.23-.49.08-1.64.52-.26-.75.18-.92-.5-.65-.38-.38-1.34-.78.32-3.55 1.48-.36",
		 '37119':"m449.9 195.3l1.64-.52v.09l.001.09.4 1.14 1.31 1.55 1.32.56-2.57 3.14-.84-.86-1.56-.69.39-3.38-.09-1.13",
		 '37159':"m451.6 190.3l2.79.99 1.35.09 1.57 1.56.42.93-1.16.21-4.55.7-.04-.23-.07-.24-.6-1.62.08-.72.2-1.67",
		 '37059':"m451.3 187.7l2-.27 1.19.77.19.1.06.09.12.34.05.36-.09.76-.39.26-.1 1.15-2.79-.99-.26-2.57",
		 '37197':"m453.4 184.9l-.04 2.57-2 .27-1.95.26-.28-2.34.88-.55 1.51-.51h.61l.95.16.22.07.11.08",
		 '37171':"m451.1 181.1l1.76-.19.49 3.72.04.26-.11-.08-.22-.07-.95-.16h-.61l-1.51.51-.88.55-1.3-1.97.34-2.16.65-.07 2.29-.36",
		 '37169':"m457.1 180.3l.54 3.67-4.25.65-.49-3.72 3.94-.55.27-.04",
		 '37067':"m453.3 184.6l4.25-.65.46 3.17-3.52 1.08-1.19-.77.04-2.57-.04-.26",
		 '37057':"m454.5 188.2l3.52-1.08.15 1.16.7 5.34-1.19.22-.42-.93-1.57-1.56-1.35-.09.1-1.15.39-.26.09-.76-.05-.36-.12-.34-.06-.09-.19-.1",
		 '37167':"m456.6 194.1l1.16-.21.8.41.06.04.48.77.19.4.5 2.33.02.08-.02.12-.15.3-2.2-.33-2.33.53 1.49-4.43",
		 '37025':"m456.6 194.1l-1.49 4.43-.51-.22-1.32-.56-1.31-1.55-.4-1.14-.001-.09v-.09l.49-.08 4.55-.7",
		 '37179':"m457.4 198l.37 4.97-2.51.37-2.25.33-.21-.04v-.12l-.07-1.32-.74-.74 2.57-3.14.51.22 2.33-.53",
		 '37007':"m459.6 198.3l.03.11.12.27.49.19.27.03h.06l.06-.06.03-.04.03-.13.21-.22.13-.08h.17l.19.24.3.48.78 1.86v.07l-.1.24-.5 1.08-4.09.59-.37-4.97 2.2.33",
		 '37157':"m460.2 179.7l2.07-.35.44 3.76.001.11-5.15.68-.54-3.67 3.17-.53",
		 '37081':"m457.6 183.9l5.15-.68.67 4.39-5.21.62-.15-1.16-.46-3.17",
		 '37151':"m463.4 187.7l.12.72.6 4.22-2.19.43-3.04.59-.7-5.34 5.21-.62",
		 '37123':"m461.9 193l1.09 2.76.03.16.15.25.59.69.24.2.27.12-1.05.06-1.45.11-.55.37-1.08.47-.23.05-.36.02.15-.3.02-.12-.02-.08-.5-2.33-.19-.4-.48-.77-.06-.04-.8-.41 1.19-.22 3.04-.59",
		 '37153':"m459.6 198.3l.36-.02.23-.05 1.08-.47.55-.37 1.45-.11 1.05-.06 1.88 1.26-.51.31-.38.34-.17.18-.05.51.04.16.1.15-.15.75-.16.35-.55.7-2.49.41.5-1.08.1-.24v-.07l-.78-1.86-.3-.48-.19-.24h-.17l-.13.08-.21.22-.03.13-.03.04-.06.06h-.06l-.27-.03-.49-.19-.12-.27-.03-.11",
		 '37165':"m467.8 200.9l-.71 2.87-2.74-1.82.55-.7.16-.35.15-.75-.1-.15-.04-.16.05-.51.17-.18.38-.34.51-.31 1.61 2.41",
		 '37033':"m466.1 178.7l.53 3.86-1.05.17-2.81.41-.44-3.76.41-.08 1.29-.23 1.26-.23.81-.14",
		 '37001':"m462.7 183.2l2.81-.41.91 4.68-2.92.95-.12-.72-.67-4.39-.001-.11",
		 '37125':"m466.2 192.2l2.19 2.39 1.16 1.31.03.24-1.63-.2-.35.31-.5.59-.64 1.08-.31.56-1.88-1.26-.27-.12-.24-.2-.59-.69-.15-.25-.03-.16-1.09-2.76 2.19-.43 2.11-.41",
		 '37093':"m466.2 198.5l.31-.56.64-1.08.5-.59.35-.31 1.63.2 1.16 2.7-1.2 1.62-.57.26-1.21.17-1.61-2.41",
		 '37155':"m470.8 198.8l1.65 1.27 1.33 1.68.04.19-.1 2.3-.14.27-.5.49-.63 1.35-.53.88-4.67-3.41-.14-.1.71-2.87 1.21-.17.57-.26 1.2-1.62",
		 '37047':"m480.2 204.4l1.08.36-.62 1.98-1.26.71-1.13.39h-.12l-.08.03-.27.32-.48 1.77-.15 1-5.22-3.73.53-.88.63-1.35.5-.49.44.18h.09l.22-.04 1.15-.3 1.31.28 1.47.41 1.16-.08.76-.58",
		 '37019':"m481.2 204.8l1.44.06.86 1.01.62 1.46.22.8.05.28.21 1.38-.75.69-.85-.07h-.45l-.43.05-1.03.22-1.06.33-.04.001-1.23.71-.3.25-1.37-.97.15-1 .48-1.77.27-.32.08-.03h.12l1.13-.39 1.26-.71.62-1.98",
		 '37129':"m486 204.7l-.19.29-.18.39-.48 1.19-.08.31-.18.89-.02.11-.28 1.88-.21-1.38-.05-.28-.22-.8-.62-1.46-.86-1.01 1-.61.81-.39h.42l-.08.13.04.1.17.16.73.5h.27",
		 '37017':"m476.6 199l3.21 3.39-.14.24.03.06.26.32.18.11.32.04.38.2-.67.99-.76.58-1.16.08-1.47-.41-1.31-.28-1.15.3-.22.04h-.09l-.44-.18.14-.27.1-2.3-.04-.19-1.33-1.68.58-.27.43-.11 2.76-.53.29-.07.1-.07",
		 '37051':"m474.4 194.3l-.19 2.06v.09l.25.55.33.62.08.12 1.71 1.29-.1.07-.29.07-2.76.53-.43.11-.58.27-1.65-1.27-1.16-2.7-.03-.24.32-.14 1.86-.85.92-.49.31-.07 1.41-.02",
		 '37037':"m470 186.9l.02.33-.34 3.13.89.19-.43.89-1-.79-.2-.13-.11-.05-.28-.08-.21.02-.19.06-.44.67-.47.41-.74.52-.26.13-2.11.41-.6-4.22 2.92-.95 2.41-.26 1.12-.26",
		 '37085':"m470.6 190.6l2.27.44 2.2 2.28-.62 1.03-1.41.02-.31.07-.92.49-1.86.85-.32.14-1.16-1.31 1.69-3.14.43-.89",
		 '37105':"m466.2 192.2l.26-.13.74-.52.47-.41.44-.67.19-.06.21-.02.28.08.11.05.2.13 1 .79-1.69 3.14-2.19-2.39",
		 '37135':"m466.6 182.6l2.07-.33.2 4.92-2.41.26-.91-4.68 1.05-.17",
		 '37145':"m466.1 178.7l3.46-.63.66 3.92-1.52.24-2.07.33-.53-3.86",
		 '37063':"m470.2 182l.92 2 .64.65-.05.59-.12.33-.23.4-.6.78-.77.13-1.12.26-.2-4.92 1.52-.24",
		 '37141':"m480.9 200l4.47-.84 2.39 3.23-1.69 2.3h-.27l-.73-.5-.17-.16-.04-.1.08-.13h-.42l-.81.39-1 .61-1.44-.06-1.08-.36.67-.99-.38-.2-.32-.04-.18-.11-.26-.32-.03-.06.14-.24 1.06-2.42",
		 '37163':"m475 193.3l2.5-.08 1.69.96.31 1.39.56 2.23-.15 2.21.75.22.06-.04.13-.17-1.06 2.42-3.21-3.39-1.71-1.29-.08-.12-.33-.62-.25-.55v-.09l.19-2.06.62-1.03",
		 '37191':"m479.3 188.9l2.5-.31.68 2.55.19 2.51-3.42.5-1.69-.96.41-.59.82-1.37.52-2.32",
		 '37101':"m477.6 187.3l.45.48.55 1.02.67.11-.52 2.32-.82 1.37-.41.59-2.5.08-2.2-2.28 1.42-1.99 1.45-1.61 1.06-1.08.85.99",
		 '37183':"m471.1 184l2.18.25.59.14.74.23 1.4.79.36.3.34.46.03.13-1.06 1.08-1.45 1.61-1.42 1.99-2.27-.44-.89-.19.34-3.13-.02-.33.77-.13.6-.78.23-.4.12-.33.05-.59-.64-.65",
		 '37077':"m470.2 178l2.8-.52-.34.44-.03.25.09.84.37 1.96.25 1.2.14.08-.14 2.06-2.18-.25-.92-2-.66-3.92.63-.12",
		 '37181':"m473 177.4l1.34-.27.84 3.51-1.71 1.52-.14-.08-.25-1.2-.37-1.96-.09-.84.03-.25.34-.44",
		 '37185':"m477.1 176.6l1.48-.29.11.48-.35 4.09-3.21-.23-.84-3.51 2.8-.54",
		 '37069':"m478.3 180.9l-1.6 5.39-.03-.13-.34-.46-.36-.3-1.4-.79-.74-.23-.59-.14.14-2.06 1.71-1.52 3.21.23",
		 '37127':"m481.6 181l-.03.63-.42 2.13-.17 1.15-3.38 2.45-.85-.99 1.6-5.39 3.25.03",
		 '37131':"m486 174.9l.93.8-.41 1.46-.2 1.64-.64 1.17-.06.06-.1-.02-.88-.37-2.26-1.53-.18-.82-1.02-.55-2.43.04-.04.08-.11-.48 1.34-.26 4.75-.94 1.32-.29",
		 '37083':"m478.7 176.8l.04-.08 2.43-.04 1.02.55.18.82 2.26 1.53.88.37.1.02.06-.06-.12 1.27-.58 1.04-.21.06-1.04-.24-.18-.39-.56-.3-1.38-.43-3.25-.03.35-4.09",
		 '37065':"m485 182.2l1 2.26-.44-.09-.76.57-.22.37-.3.38-1.1 1.2-.73-.56-.47-.95-.98-.58.17-1.15.42-2.13.03-.63 1.38.43.56.3.18.39 1.04.24.21-.06",
		 '37195':"m481 184.9l.98.58.47.95.73.56-.34.4-1.06 1.26-2.5.31-.67-.11-.55-1.02-.45-.48 3.38-2.45",
		 '37079':"m482.8 187.3l2.86 2.43-.83.74-.64.5-.34.15-.09.02-.19-.22-1.14.18-.68-2.55 1.06-1.26",
		 '37107':"m486.8 190.7l-.57 1.59-.57-.08.34.89v.08l-.69 1.36-1.17 1.07-1.49-1.96-.19-2.51 1.14-.18.19.22.09-.02.34-.15.64-.5.83-.74 1.09.93",
		 '37103':"m486.2 192.3l.11.001 3.15 1.26.32.17.39-.24.12.02.06.08.19.58.39 2.43.29.31-.74.38-.78-1.07-.05-.06-.58-.44-.32-.04h-2.95l-1.07.28-.62-.34 1.17-1.07.69-1.36v-.08l-.34-.89.57.08",
		 '37061':"m479.2 194.2l3.42-.5 1.49 1.96.62.34.41.56.11 2.42v.08l.08.15-4.47.84-.13.17-.06.04-.75-.22.15-2.21-.56-2.23-.31-1.39",
		 '37133':"m484.7 196l1.07-.28h2.95l.32.04.58.44.05.06.78 1.07.92 1.74-3.69 3.37-2.39-3.23-.08-.15v-.08l-.11-2.42-.41-.56",
		 '37031':"m495.3 193.2l.04.09.19.2.42-.04 1.99-.22.31 1.54 2.1-2.24-.52 1.24-2.04 3.66-.53.32-.35-.12-1.08-.21-.53.06-.44.09-.48.14-.89.33-.83.35-.09.04-.04.02-.27.13-.23.13-.39.22-.17.09-.92-1.74.74-.38 1.37-.38 1.95-.87.61-.42.19-.62.05-.29-.07-.07-.65-.42.59-.62",
		 '37137':"m494.8 189.1h1.14l.21.06.15.22.1.22.04.2-.15.67-.29 1.25-.16.38-.57 1.14-.59.62-.45.47-.18.09-.4.05-.93-.23-.58-.32-.24-.26-.47-1.43.11-.61.13-.32.41-.5.61.37 2.14-.69.09-.49v-.12l-.11-.77",
		 '37049':"m488.6 189.3l3.45 1.49-.41.5-.13.32-.11.61.47 1.43.24.26.58.32.93.23.4-.05.18-.09.45-.47.65.42.07.07-.05.29-.19.62-.61.42-1.95.87-1.37.38-.29-.31-.39-2.43-.19-.58-.06-.08-.12-.02-.39.24-.32-.17-3.15-1.26-.11-.001.57-1.59 1.85-1.41",
		 '37147':"m486 184.5l2.02.74.63 4-1.85 1.41-1.09-.93-2.86-2.43.34-.4 1.1-1.2.3-.38.22-.37.76-.57.44.09",
		 '37117':"m485.6 181.2l.001.07.09.15 1.54 1.24.12.07 1.65.6.12.03 2-.25.74-.41-.44 2.2-.99.69-.32.21-.91-.28-1.2-.28-2.02-.74-1-2.26.58-1.04",
		 '37041':"m491.4 177.1l1.24-.99-.001 1.5.51 1.59.04.04.12.06.23.03.42.03.92-.05-2.46 1.23-.97-2.76-.04-.68",
		 '37091':"m488.5 174.4l.19.29-.001.13-.18.51-.17.08.17.7.04.05.16.11.29.08.92.15h.28l1.16.61.04.68-1.95.41-1.09.27-1.77.31h-.27l.2-1.64.41-1.46-.93-.8 2.5-.47h.02",
		 '37015':"m491.4 177.8l.97 2.76-.04 1-.49 1.17-.74.41-2 .25-.12-.03-1.65-.6-.12-.07-1.54-1.24-.09-.15-.001-.07.12-1.27.64-1.17h.27l1.77-.31 1.09-.27 1.95-.41",
		 '37073':"m492.3 173.5l.61.4.73 1.6-1 .56-1.24.99-1.16-.61h-.28l-.92-.15-.29-.08-.16-.11-.04-.05-.17-.7.17-.08.18-.51.001-.13-.19-.29 3.75-.86",
		 '37029':"m492.8 173.4l1.79-.38 1.89 1.25 1.23.67.05-.04.14.001.23.09.76.58 1.04 1.46v.03l-1.66.04-.31-.35-.78-.55-1.53-.93-2.06-.95-.69-.43-.61-.4.51-.11",
		 '37139':"m492.9 173.9l.69.43 2.06.95 1.53.93.78.55.31.35-1.26 1.13-1.02-.66-1.25-.72-1-1.17-.1-.18-.73-1.6",
		 '37143':"m493.6 175.5l.1.18 1 1.17 1.25.72 1.02.66-2.16 1.03-.92.05-.42-.03-.23-.03-.12-.06-.04-.04-.51-1.59.001-1.5 1-.56",
		 '37013':"m493.5 184.5l1.85 1.38-.84.83-.12.07-.03.05v.05l.04.15.33.61.36.47.18.2-.48.77.11.77v.12l-.09.49-2.14.69-.61-.37-3.45-1.49-.63-4 1.2.28.91.28.32-.21.99-.69 2.11-.43",
		 '37187':"m492.3 181.5l.22.09h.07l.6-.16.99-.38.31-.21.11-.15.6-.31.1.04.1.09.31.32.17 1.36-.21.69.33 1.14-2.49.42-2.11.43.44-2.2.49-1.17",
		 '37177':"m499.8 183.6l-3.82.43-.33-1.14.21-.69-.17-1.36.8-.57.55-.32.37-.14 1.16-.24.44.2.13.11.25.68-.02.17v.37l.1.71.19.72.17.85-.03.23",
		 '37053':"m496.5 172.6l2.57-.55 1.82 3.85-.2.1-1.09-2.27-.67-.74-.08-.03-1.03-.05-.15.07-.03.05-.04.09v.15l.18.28.11.13.1.05.49.22.65.72 1.82 2.79.17.37v.14h-.06l-.42-.17-.14-.09-.27-.28-.29-.38v-.03l-1.04-1.46-.76-.58-.23-.09-.14-.001-.05.04-1.23-.67-1.89-1.25 1.92-.41",
		 '38017':"m280.7 55.4l5.46.09.05 1.12.001 1.63.37 1.23.11.3-.17 2.8v.72l-4.43-.03-3.58-.06.08-4.48-.19-1.3.03-2.05 2.25.05",
		 '38077':"m286.5 63.3l.38 1.11 1.24 2.98.34 2.7.03.23-.02.26-.02.08-.17.47.12 1.12-5.99-.06-.19-.78-.07-.8.04-2.89h-.19l.06-4.46 4.43.04",
		 '38013':"m241.6 33.8l-1.12-.08-.78 1.06-.15 2.22-5.63-.4.08-1.1.08-1.11-.47-.03.27-3.54 7.87.54-.16 2.44",
		 '38023':"m224.4 30.1l9.5.76-.27 3.54.47.03-.08 1.11-10-.8.39-4.65",
		 '38105':"m224 34.7l10 .8-.08 1.1-.15 2.21.5.03-.23 3.18-.37-.19-1.98-.27-.88.08-.11.08-.23.23-.16.22v.02l.02.03.13.06.07.08v.05l-.02.07-.07.07-.41.15-.59.16-1.26.23h-.11l-.46-.4-.19-.32-.02-.4-.15-.29-.57-.19-.18.04-.18.09-.27.21v.06l.03.06.18.18-.25.37-.77.59-.55.3-.31.06-1.04-.6.4-5 .26-3.11",
		 '38061':"m239.6 37l2.25.13.3 2.26-.28 4.45.25.77.05 1.5-4.49-.29-.08 1.14-2.18-.99-.04-.04-.02-.06-.04-.38.02-.18.09-.34.03-.06.31-.37.19-.12.14-.13.13-.18.11-.23v-.07l-.03-.04-1.24-1.22-.65-.48-.37-.05.23-3.18-.5-.03.15-2.21 5.63.4",
		 '38053':"m234.1 42l.37.05.65.48 1.24 1.22.03.04v.07l-.11.23-.13.18-.14.13-.19.12-.31.37-.03.06-.09.34-.02.18.04.38.02.06.04.04-.14 1.91-4-.3-.32 4.42-4.99-.39-3.33-.29.08-.86.65-7.64 1.04.6.31-.06.55-.3.77-.59.25-.37-.18-.18-.03-.06v-.06l.27-.21.18-.09.18-.04.57.19.15.29.02.4.19.32.46.4h.11l1.26-.23.59-.16.41-.15.07-.07.02-.07v-.05l-.07-.08-.13-.06-.02-.03v-.02l.16-.22.23-.23.11-.08.88-.08 1.98.27.37.19",
		 '38025':"m237.6 46.96l.29-.43.06-.06.06-.03.13.02.48.21.09.06.02.07v.08l-.04.09-.15 1.78.02.06.04.05.43.53-.21 3.16.54.03-.27 4.07-3.37-.23-.02.37-4.49-.31.33-4.46-.59-.04.32-4.42 4 .3.14-1.91 2.18.99",
		 '38089':"m239.1 56.67l.4.4-.21 3.38-.08 1.11-7.39-.49-2.7-.2.35-4.48 1.75.13 4.49.31.02-.37 3.37.23",
		 '38033':"m226 51.61l-.37 4.47.51.04-.36 4.48-1.7-.14-.09 1.14-2.17-.18.11-1.29.75-8.81 3.33.29",
		 '38007':"m226 51.61l4.99.39.59.04-.33 4.46-1.75-.13-.35 4.48-3.35-.26.36-4.48-.51-.04.37-4.47",
		 '38011':"m230.9 65.5l-.32 4.31-9.42-.75.36-4.3 9.38.74",
		 '38087':"m225.7 60.6l3.35.26 2.7.2-.3 4.47-.63-.04-9.38-.74.29-3.34 2.17.18.09-1.14 1.7.14",
		 '38041':"m239.2 61.6l.41.03-.02 3 .21 1.56-.06.93-4.47-.3.07-.99-3.82-.25.3-4.47 7.39.49",
		 '38001':"m230.9 65.5l.63.04 3.82.25-.07.99 4.47.3-.22 3.35h-.02l-8.46-.59-.48-.04.32-4.31",
		 '38057':"m239 49.4l.19.1 2.5.96.57.17.13-.02.2-.1.44-.27.31-.1 2.24-.19h.16l.07.03.49.5-.02.08-.07.08-.33.17-.08.07-.15.17-.03.09.001.09.7 1.95.78.68-.02.3-4.47-.26-.2 3.33-2.94-.18-.4-.4.27-4.07-.54-.03.21-3.16",
		 '38037':"m239.3 60.4l3.36.2-.07 1.12 3.73.23-.19 3.32 2.24.12.14 1.13-.86.86-.91.71-.84.59-1.92.87-.71.21h-.03l-.89-.19-1.34-.47-.59-.2-.8.07.13-1.95.06-.93-.21-1.56.02-3-.41-.03.08-1.11",
		 '38085':"m248.5 66.6l.1-.46.92-.85.38-.13.13.11.35.07.91.06.22-.07.97-.38.08.15.17.45.06.24v.39l-.14 1.18-.04.12-.14.28-.17.17-.25.37-.11.26v.15l.09.8.04.13.81 1.57-2.05-.1h-.2-.07l-1.08-.05-.82-.05-2.61-.14-.92-.05-.52-.03-1.13-.06-1.36-.09-1.29-.08-1.09-.07h-.15-.02-.06l.09-1.4.8-.07.59.2 1.34.47.89.19h.03l.71-.21 1.92-.87.84-.59.91-.71.86-.86",
		 '38059':"m239.5 57.1l2.94.18 7.33.39.001.24.2.84.54 1.99.39.77.44.43.62.32.52.42.17.3.25.55-.28.41-.08.16-.13.57v.11l.05.15-.97.38-.22.07-.91-.06-.35-.07-.13-.11-.38.13-.92.85-.1.46-.14-1.13-2.24-.12.19-3.32-3.73-.23.07-1.12-3.36-.2.21-3.38",
		 '38065':"m249.6 55.4l.14 2.24-7.33-.39.2-3.33 4.47.26.02-.3 1.21-.3.31-.03.25.07.2.09.29.23.15.2.03.07.05 1.2",
		 '38075':"m241.6 33.8l.16-2.44 4.5.27-.21 3.56.26 2.23 3.39.2-.06 1.1-6.77-.4.2-3.32-1.54-.09.07-1.1",
		 '38101':"m239.6 37l.15-2.22.78-1.06 1.12.08-.07 1.1 1.54.09-.2 3.32 6.77.4-.06 1.11.2 1.17v2.31l.22 1h.11l-.12 2.22-7.87-.44-.05-1.5-.25-.77.28-4.45-.3-2.26-2.25-.13",
		 '38055':"m250 46.55l3.37.18-.1 2.22-.77-.04-.05.65-.18 3.78-.67-.04-.11 2.18-1.9-.09-.05-1.2-.03-.07-.15-.2-.29-.23-.2-.09-.25-.07-.31.03-1.21.3-.78-.68-.7-1.95-.001-.09.03-.09.15-.17.08-.07.33-.17.07-.08.02-.08-.49-.5-.07-.03h-.16l-2.24.19-.31.1-.44.27-.2.1-.13.02-.57-.17-2.5-.96-.19-.1-.43-.53-.04-.05-.02-.06.15-1.78.04-.09v-.08l-.02-.07-.09-.06-.48-.21-.13-.02-.06.03-.06.06-.29.43.08-1.14 4.49.29 7.87.44",
		 '38009':"m246.3 31.62l11.28.58-.16 3.57.32.001-.1 2.21-1.13-.04-1.12-.05.05-1.12-3.37-.17-2.27-.11-.06 1.11-3.39-.2-.26-2.23.21-3.56",
		 '38049':"m256.5 37.95l-.09 2.21.16 1.5-.02 2.98.2.75.04 1.49-3.38-.15-3.37-.18.12-2.22h-.11l-.22-1v-2.31l-.2-1.17.12-2.22.06-1.11 2.27.11 3.37.17-.05 1.12 1.12.05",
		 '38083':"m256.8 46.88l1.13.05-.1 2.22.32.001-.19 4.43-.71-.03-4.93-.23.18-3.78.05-.65.77.04.1-2.22 3.38.15",
		 '38015':"m257.2 53.6l-.2 4.43.35.001-.25 4.47-5.17-.25-.62-.32-.44-.43-.39-.77-.54-1.99-.2-.84-.001-.24-.14-2.24 1.9.09.11-2.18.67.04 4.93.23",
		 '38029':"m257.1 62.5l1.47.07.15 4.51-.2 4.39-5.57-.27h-.11l-.81-1.57-.04-.13-.09-.8v-.15l.11-.26.25-.37.17-.17.14-.28.04-.12.14-1.18v-.39l-.06-.24-.17-.45-.08-.15-.05-.15v-.11l.13-.57.08-.16.28-.41-.25-.55-.17-.3-.52-.42 5.17.25",
		 '38051':"m258.8 67.1l7.53.27.31.001-.16 4.41-6.41-.24-1.46-.07.2-4.39",
		 '38047':"m258.6 62.6l4.15.18 3.68.14-.15 4.46-7.53-.27-.15-4.51",
		 '38043':"m257.2 53.6l.71.03 4.87.19-.17 4.44h.31l-.19 4.48-4.15-.18-1.47-.07.25-4.47-.35-.001.2-4.43",
		 '38103':"m257.9 46.94l2.25.09 4.49.18-.07 2.23.27.001-.04 1.09-.12 3.34-1.89-.07-4.87-.19.19-4.43-.32-.001.1-2.22",
		 '38069':"m257.6 37.99l5.64.23-.08 2.22-3.07-.12-.19 4.47.31.001-.09 2.22-2.25-.09-1.13-.05-.04-1.49-.2-.75.02-2.98-.16-1.5.09-2.21 1.13.04",
		 '38079':"m257.6 37.99l.1-2.21-.32-.001.16-3.57 5.64.23-.14 3.58h.29l-.09 2.21-5.64-.23",
		 '38095':"m263.2 32.42l4.52.15-.09 2.29-.03 1.29h.25l-.07 2.22-.08 2.22-1.99-.07-2.54-.09.08-2.22.09-2.21h-.29l.14-3.58",
		 '38005':"m263.2 40.45l2.54.09-.09 2.75.06.09 1.79 2 .31-.07 1.68.18 1.08 1 .87.04-.02.88-6.75-.22-4.49-.18.09-2.22-.31-.001.19-4.47 3.07.12",
		 '38027':"m264.6 47.2l6.75.22.16 2.23-.03 1.09-6.73-.21.04-1.09-.27-.001.07-2.23",
		 '38031':"m264.8 50.5l6.73.21-.08 3.34-6.76-.21.12-3.34",
		 '38093':"m262.8 53.8l1.89.07 6.76.21.25 1.11-.09 3.35h.25l-.11 4.48-5.32-.14-3.68-.14.19-4.48h-.31l.17-4.44",
		 '38045':"m271.8 63l3.61.09-.1 4.48-8.67-.23-.31-.001.15-4.46 5.32.14",
		 '38021':"m266.6 67.3l8.67.23h.26l-.11 4.46-6.45-.19-2.53-.09.16-4.41",
		 '38081':"m275.5 67.6l6.5.12h.19l-.04 2.89.07.8.19.78-6.76-.12h-.27l.11-4.46",
		 '38073':"m275.4 63.1l3.14.07 3.58.06-.06 4.46-6.5-.12h-.26l.1-4.48",
		 '38003':"m276.2 55.3l2.25.05-.03 2.05.19 1.3-.08 4.48-3.14-.07-3.61-.09.11-4.48h-.25l.09-3.35 4.47.1",
		 '38039':"m276.1 49.76l.09 5.53-4.47-.1-.25-1.11.11-4.43 4.52.11",
		 '38091':"m276.1 49.76l.9.02 3.59.07.1 5.55-2.25-.05-2.25-.05-.09-5.53",
		 '38063':"m273.5 43l3.38.08-.05 2.23h.18v.02l-.09 4.44-.9-.02-4.52-.11-.16-2.23.02-.88.04-1.36.9.02.06-2.22 1.13.02",
		 '38071':"m273.4 38.55l-.04 1.5.21.73-.06 2.23-1.13-.02-.06 2.22-.9-.02-.04 1.36-.87-.04-1.08-1-1.68-.18-.31.07-1.79-2-.06-.09.09-2.75 1.99.07.08-2.22 5.64.16",
		 '38019':"m267.7 32.58l9 .22-.07 3.6h.19l-.05 2.23-3.38-.09-5.64-.16.07-2.22h-.25l.03-1.29.09-2.29",
		 '38067':"m276.7 32.8l6.2.1-.04.04-.04.19v.19l.05.27.62 2.03.17.5.38.86-.63 1.75.04.02-6.65-.12.05-2.23h-.19l.07-3.6",
		 '38099':"m273.4 38.55l3.38.09 6.65.12.07.04.2.25.06 3.07-.28 1.09-6.58-.12-3.38-.08.06-2.23-.21-.73.04-1.5",
		 '38035':"m283.5 43.2v.26.03l.2.78.84 3 1.13 2.59-5.11-.06-3.59-.07.09-4.44v-.02h-.18l.05-2.23 6.58.12",
		 '38097':"m280.6 49.84l5.11.06.3 2.22.16 3.35-5.46-.09-.1-5.55",
		 '31045':"m223 107.4l4.73.36 1.96.15-.2 2.78.13.75-.26 3.73-6.35-.44-.33-.03.35-4.49-.08-.5-.02-.99.09-1.31",
		 '31165':"m223 107.4l-.09 1.31.02.99.08.5-.35 4.49.33.03-.35 4.48.4.04-.09 1.12-6.19-.48 1.09-12.91 5.14.42",
		 '31147':"m293.4 145.7l4.48-.02 2.41 3.39h-.31l-4.4.02h-2.19v-3.39",
		 '31133':"m289 145.7l3.88.001h.55v3.39h-2.24l-2.2-.001.02-3.39",
		 '31127':"m292.8 142.3l3.48-.001.13-.28.37.32-.21.38-.11.1.05.23.63 1.6.68.66.03.07v.02.02.23.04l-4.48.02h-.55v-3.39",
		 '31097':"m292.8 142.3v3.39l-3.88-.001.001-3.39h3.87",
		 '31131':"m294.9 138.9l.87 2.58.55.79-3.48.001h-3.87l.001-3.39 5.92.001",
		 '31025':"m290.4 135.5l.07.11.14.13.71.41.09.001.26-.1.29-.14.15-.12.1-.13.22-.2.09-.06.42-.16h.22l1.32.08.07.001.22.15.43 1.88-.3 1.53-5.92-.001.02-3 1.4-.37",
		 '31153':"m290.3 133.6h3.9l.68.41-.13 1.47-.22-.15-.07-.001-1.32-.08h-.22l-.42.16-.09.06-.22.2-.1.13-.15.12-.29.14-.26.1-.09-.001-.71-.41-.14-.13-.07-.11-.08-1.88",
		 '31055':"m289 131h1.37 3.76l.14 2.62h-3.9l-1.37-2.65",
		 '31177':"m289.2 127.2l3.1.02 1.34 2.28.42 1.48h-3.76l-.92-1.16-.09-.23-.09-.31v-2.07",
		 '31021':"m290.9 122.5l1.27 2.35.17 2.38-3.1-.02-1.06-.76.02-3.56 2.69-.39",
		 '31173':"m286.6 119.5l3.63.04-.12.8.79 2.18-2.69.39-2.56-.98.04-2.26.91-.17",
		 '31043':"m287.5 116.3l1.82.47.32.02.13.05.1.14.04.15v.2l-.07.18.11 1.48.29.54-3.63-.04.88-3.19",
		 '31051':"m283.9 113.3l1.98.74.77.49.1.23.05.22-.04.15v.12l.03.12.68 1-.88 3.19-.91.17-1.84-1.14.07-5.28",
		 '31179':"m280.5 118.5l3.32.05 1.84 1.14-.04 2.26-1.86-.02-3.33-.05.06-3.38",
		 '31139':"m276 121.8l.09-4.52 3.31.05 1.1 1.14-.06 3.38-4.44-.06",
		 '31027':"m279.5 111.9l.59-.08.89.04.67.08 1.09.93 1.17.33-.07 5.28-3.32-.05-1.1-1.14.08-5.4",
		 '31107':"m271.7 111.4l1.32.6 1.03.89.2.09.17.03h.16l.48-.07.13-.08.27-.24.2-.28 1.09-.4.82.11 1.9-.13-.08 5.4-3.31-.05-4.41-.09.05-4.2v-1.56",
		 '31053':"m288.2 126.5l1.06.76v2.07l.09.31.09.23.92 1.16h-1.37l-4.18-.81v-.001l.03-3.74 3.36.04",
		 '31037':"m283.7 126.4l1.09.001-.03 3.74h-.14l-.13.04-1.44.7-1 .23h-.64l.07-4.74 2.23.03",
		 '31039':"m283.8 121.9l1.86.02 2.56.98-.02 3.56-3.36-.04-1.09-.001.05-4.51",
		 '31167':"m283.8 121.9l-.05 4.51-2.23-.03-1.11-.02.06-4.51 3.33.05",
		 '31119':"m276 121.8l4.44.06-.06 4.51-4.43-.06.02-2.26.03-2.25",
		 '31003':"m276 121.8l-.03 2.25-4.42-.08v-2.26l.11-4.52 4.41.09-.09 4.52",
		 '31011':"m271.6 124l4.42.08-.02 2.26-.05 2.8h-.53l-1.61.36-.46.18-1.84-.04.04-3.38.05-2.25",
		 '31141':"m280.4 126.4l1.11.02-.07 4.74-1.1-.23-2.23.77-1-.82-1.18-1.73.05-2.8 4.43.06",
		 '31155':"m284.8 130.2l4.18.81 1.37 2.65.08 1.88-1.4.37v-.38l-4.31-.04.08-5.29",
		 '31159':"m284.7 135.5l-.07 4.52-4.42-.06.06-4.52 4.43.06",
		 '31023':"m280.3 135.4l.07-4.52 1.1.23h.64l1-.23 1.44-.7.13-.04h.14v.001l-.08 5.29h-.02l-4.43-.06",
		 '31143':"m278.1 131.7l2.23-.77-.07 4.52-4.43-.07.001-1.65 2.25-2.03",
		 '31185':"m280.3 135.4l-.06 4.52-4.44-.08h-.001l.08-4.52 4.43.07",
		 '31081':"m275.8 135.3l-.08 4.52-4.39-.09h-.05l.05-2.26.48-.56 1.02-1.02 1.2-.96.37-.25.05.08h.001l.21-.08.5-.24.12-.09.15-.17.28-.38.08-.15-.001 1.65",
		 '31125':"m271.5 129.6l1.84.04.46-.18 1.61-.36h.53l1.18 1.73-.04 1.11h-1.38l-1.47.15-.85.18-.42.17-1.19-.02h-.2l.05-1.68h-.12-.05l.03-1.13",
		 '31121':"m271.5 130.7h.12l-.05 1.68h.2l1.19.02.42-.17.85-.18 1.47-.15h1.38l.04-1.11 1 .82-2.25 2.03-.08.15-.28.38-.15.17-.12.09-.5.24-.21.08h-.001l-.05-.08-.37.25-1.2.96-1.02 1.02-.48.56.001-2.26.11-4.51",
		 '31079':"m267.2 135.1l4.2.11-.001 2.26-.05 2.26-4.26-.12.13-4.51",
		 '31093':"m267.1 130.6l4.35.12h.05l-.11 4.51-4.2-.11h-.26l.17-4.51",
		 '31163':"m267 130.6h.07l-.17 4.51-4.44-.15.19-4.5 4.34.13",
		 '31015':"m262.9 109.7l7.11.21 1.74 1.56v1.56l-1.49-.1-1.01-.19-1.54-.52-.85-.29-.96-.55-.23-.23-.11-.04h-.15l-.11.03-1.63.68-.82.35-.07.06.11-2.5",
		 '31089':"m262.8 112.2l.07-.06.82-.35 1.63-.68.11-.03h.15l.11.04.23.23.96.55.85.29 1.54.52 1.01.19 1.49.1-.05 4.2-.11 4.52-4.39-.11-4.4-.13h-.11l.14-4.13.04-4.45-.08-.71",
		 '31175':"m262.7 126l4.33.14h.07l-.13 4.49-4.34-.13.07-4.5",
		 '31077':"m271.5 126.2l-.04 3.38-.03 1.13-4.35-.12h-.07l.13-4.49 4.37.1",
		 '31183':"m271.6 121.7v2.26l-.05 2.25-4.37-.1h-.07l.11-4.52 4.39.11",
		 '31071':"m262.6 126l.14-4.5 4.4.13-.11 4.52-4.33-.14h-.1",
		 '31115':"m262.7 121.5h.11l-.14 4.5-4.45-.16.17-4.48.23.001 4.08.12",
		 '31149':"m262.7 121.5l-4.08-.12.16-4.52h-.12l.14-3.84.71.15.52.06.19-.03.33-.12 2.07-.75.08-.04.1-.08.08.71-.04 4.45-.14 4.13",
		 '31103':"m254 109.3l6.24.26 2.63.09-.11 2.5-.1.08-.08.04-2.07.75-.33.12-.19.03-.52-.06-.71-.15-.08.03h-.18l-.69-.12-2.59-.76-.54-.22-.18-.1-.59-.52.09-1.97",
		 '31017':"m258.8 113l-.14 3.84h.12l-.16 4.52-.23-.001-4.57-.19.2-4.5-.06-5.36.59.52.18.1.54.22 2.59.76.69.12h.18l.08-.03",
		 '31009':"m252.8 121.1l.95.05 4.57.19-.17 4.48-5.4-.22h-.14l.18-4.49",
		 '31041':"m258.2 125.8l4.45.16h.1l-.07 4.5-.19 4.5-2.11-.07-7.72-.31h-.14l.08-1.51.09-1.3.05-1.64-.14-.06.2-4.49 5.4.22",
		 '31019':"m260.4 134.9l2.11.07 4.44.15h.26l-.13 4.51-.03.12-.31.04-.7.14-.37.18-.4.08-1.19-.04-1.38-.12-.08-.03-2.31-.21.09-4.88",
		 '31047':"m252.6 134.6l7.72.31-.09 4.88-2.19-.27-3.28-.32-2.35-.11.19-4.49",
		 '31137':"m258.1 139.5l2.19.27 2.31.21-.13 4-4.41-.16h-.11l.16-4.34",
		 '31099':"m267 139.8l-.12 4.41h-.03l-4.42-.14.13-4 .08.03 1.38.12 1.19.04.4-.08.37-.18.7-.14.31-.04",
		 '31001':"m267 139.8l.03-.12 4.26.12h.05l-.11 4.52-4.35-.11.12-4.41",
		 '31035':"m275.7 139.9h.001l-.08 4.53-4.39-.09h-.04l.11-4.52 4.39.09",
		 '31059':"m280.2 139.9l-.07 4.52-4.42-.08h-.03l.08-4.53 4.44.08",
		 '31151':"m280.2 139.9l4.42.06-.02 2.27-.05 2.26-4.42-.06.07-4.52",
		 '31109':"m284.7 135.5l4.31.04v.38l-.02 3-.001 3.39-4.38-.04.02-2.27.07-4.52h.02",
		 '31067':"m289 142.3l-.001 3.39-.02 3.39-3.35-.03-1.09-.001.04-4.52.05-2.26 4.38.04",
		 '31095':"m280.1 144.5l4.42.06-.04 4.52-4.45-.06.07-4.53",
		 '31169':"m280.1 144.5l-.07 4.53-4.44-.07.09-4.53 4.42.08",
		 '31129':"m275.7 144.4h.03l-.09 4.53-1.08-.02-3.36-.08.11-4.52 4.39.09",
		 '31181':"m266.9 144.2l4.35.11h.04l-.11 4.52-2.26-.05-2.18-.06.13-4.53h.03",
		 '31061':"m266.9 144.2l-.13 4.53-3.34-.1-1.1-.03.15-4.53 4.42.14",
		 '31083':"m258 143.9l4.41.16-.15 4.53-4.39-.16h-.02l.15-4.53",
		 '31073':"m258.1 139.5l-.16 4.34-4.42-.18.05-1.13 1.11.05.14-3.4 3.28.32",
		 '31065':"m252.5 143.7l1 .03 4.42.18h.11l-.15 4.53-5.39-.22h-.15l.16-4.52",
		 '31145':"m247 143.4l5.47.25-.16 4.52-5.34-.26-.19-.001.23-4.51",
		 '31087':"m241.5 143.1l5.33.3h.18l-.23 4.51-5.54-.3.26-4.51",
		 '31057':"m241.3 143.1h.19l-.26 4.51-.85-.04-6.27-.39.28-4.49 6.91.4",
		 '31063':"m247.1 138.8l5.39.25 2.35.11-.14 3.4-1.11-.05-.05 1.13-1-.03-5.47-.25h-.18l.22-4.55",
		 '31085':"m247.1 138.8l-.22 4.55-5.33-.3h-.19l.23-4.51.95.06 4.56.21",
		 '31029':"m234.7 138.2l6.85.41-.23 4.51-6.91-.4.29-4.52",
		 '31135':"m235 134.2v-.02l7.74.46-.2 3.97-.95-.06-6.85-.41.05-.68.2-3.28",
		 '31111':"m248.1 129.9l4.44.22.14.06-.05 1.64-.09 1.3-.08 1.51h.14l-.19 4.49-5.39-.25-4.56-.21.2-3.97.09-5.08 5.34.3",
		 '31101':"m235.9 129.2l5.55.33 1.32.08-.09 5.08-7.74-.46.14-2.82.83-2.21",
		 '31113':"m248.4 125.4l4.27.2h.14l-.2 4.49-4.44-.22.24-4.48",
		 '31117':"m241.7 125l2.46.15 1.69.12 1.25.06 1.25.07-.24 4.48-5.34-.3-1.32-.08.26-4.51",
		 '31005':"m236.2 124.7l5.35.31h.19l-.26 4.51-5.55-.33.28-4.5",
		 '31171':"m247.3 120.8l5.51.29-.18 4.49-4.27-.2-1.25-.07.19-4.51",
		 '31091':"m241.8 120.5l5.52.35-.19 4.51-1.25-.06-1.69-.12-2.46-.15h-.19l.25-4.52",
		 '31075':"m235.7 121.2l.65-1.09 5.51.39-.25 4.52-5.35-.31-.79-.05.24-3.46",
		 '31049':"m229.8 131l5.34.36-.14 2.82v.02l-5.5-.37.3-2.83",
		 '31069':"m235.7 121.2l-.24 3.46.79.05-.28 4.5-.83 2.21-5.34-.36-.06-2.84.22-3.21-.21-.75-.06-.38-.001-.23.03-.69.16-2.1 5.82.34",
		 '31033':"m229.7 128.2l.06 2.84-.3 2.83-.31-.02-7-.51.45-5.08.13-.56 7 .5",
		 '31123':"m229.6 120.8l.19.001-.16 2.1-.03.69.001.23.06.38.21.75-.22 3.21-7-.5.25-3.38.38-3.93 6.33.44",
		 '31105':"m222.6 128.2l-.45 5.08-1.85-.14-4.62-.38.44-5.07 6.48.51",
		 '31007':"m222.9 124.3l-.25 3.38-.13.56-6.48-.51.33-3.94 6.52.51",
		 '31157':"m222.9 120.3l.37.04-.38 3.93-6.52-.51.34-3.93 6.19.48",
		 '31013':"m229.6 120.8l-6.33-.44-.37-.04.09-1.12-.4-.04.35-4.48 6.35.44.23.001-.25 4.5.24.4.1.76",
		 '31031':"m236.3 108.3l1.94.13 2.34.18 3.74.19 3 .16 3.41.16 1.83.09.67.03.75.04-.09 1.97.06 5.36-.2 4.5-.95-.05-5.51-.29-5.52-.35-5.51-.39-.32-.03.31-4.48-.09-1.49.1-2.96-.04-.93.08-1.85",
		 '31161':"m236.3 108.3l-.08 1.85.04.93-.1 2.96.09 1.49-.31 4.48.32.03-.65 1.09-5.82-.34-.19-.001-.1-.76-.24-.4.25-4.5-.23-.001.26-3.73-.13-.75.2-2.78 6.66.46",
		 '33007':"m517.4 50.84l.35.99 1.91 5.75.13.43 1.69 5.38-.13.66-2.57 1.65-.68-.44-.37-.4-.27-.07-1.2-.28-.99-.17-.93-.69.19.02.29-.21.02-.04.13-.16.05-.08.04-.06.45-.78.04-.08.1-.29.12-1.12-.23-.38-.04-.06-.23-.28-.41-.51-.34-.33-.08-.22.001-3.16.22-.45-.08-.77.22-2.33.72-.95.1-.07.19.1.08.16.04.05.29.14.47.03.4-.08.06-.05.22-.86",
		 '33009':"m513.8 64.4l.6-.78.93.69.99.17 1.2.28.27.07.37.4.44.64.65.99.37 1.96-1.74.76.51 1.16.2.36.32.83-1.08.77-.34 1.39-.52.17-.73-.48-.27.56-.24.68-.59.05-1.04.04-1.05-.16-1.12.09.57-2.43.25-5.2-.15-.12-.17-.23-.3-1.03v-.08l.03-.13.3-.54.03-.02.05-.05.62-.39.63-.4",
		 '33017':"m522.6 73.1l.21-.51.37.79 1.03-.31.25-.59.16 1.76.07.29.09.18.26.36.17.09.45.22 1.09.65.03.03.35 1.41-.28.55-.08.12-1.8.47.23-.82-2.45-1.17.07-.16.45-1.07-.45-1-.37-.88.17-.41",
		 '33015':"m528.4 77.95l-.39 2.63-.66.04-.27.02-.06.03-.07.03-.87.65-.67.57-.22.19-.12.13-.51 1.02-1.06-.12-.9-.55-.32-.7-.23-.49.28-1.12.43-3.67 2.45 1.17-.23.82 1.8-.47.08-.12.28-.55 1.26.5",
		 '33005':"m512.2 80.8l.27.27.55-.09.03-.33.24-.15 1.53-.65-.05.45v.23l1.28-.29.17 1.42.2.94.51-.12 1.07 1.8.39.92-3.27.71-1.62.35-1.03-.83-.27-.57-.04-.13.59-2-.25-1.38-.02-.08-.3-.47",
		 '33019':"m511.9 75.1l1.12-.09 1.05.16 1.04-.04.59-.05-.63 1.74-.11 1.2.44.79.32.35.41.37-.07.81-1.28.29v-.23l.05-.45-1.53.65-.24.15-.03.33-.55.09-.27-.27-.04-.95.04-1.13-.19-.5-.45-2.06.35-1.15",
		 '33011':"m516.1 79.5l.81-.47 2.41.1 1.75.94 1.23.2-.28 1.12.23.49.32.7.9.55 1.06.12-.06.14-.23.55-3.11.72h-.04l-.14.03-2.28.51-.28.06-.39-.92-1.07-1.8-.51.12-.2-.94-.17-1.42.07-.81",
		 '33001':"m518.6 71.1l.79.5 2.29 1.27.99.18-.17.41.37.88.45 1-.45 1.07-1.21-.5-2.16-.85-.42.35-.12-.001-.8-.64-.16-.15-.49-.51.34-1.39 1.08-.77-.32-.83",
		 '33013':"m517.5 74.1l.49.51.16.15.8.64.12.001.42-.35 2.16.85 1.21.5-.07.16-.43 3.67-1.23-.2-1.75-.94-2.41-.1-.81.47-.41-.37-.32-.35-.44-.79.11-1.2.63-1.74.24-.68.27-.56.73.48.52-.17",
		 '33003':"m521.5 63.4l1.84 6.1 1.14 2.96-.25.59-1.03.31-.37-.79-.21.51-.99-.18-2.29-1.27-.79-.5-.2-.36-.51-1.16 1.74-.76-.37-1.96-.65-.99-.44-.64.68.44 2.57-1.65.13-.66",
		 '34025':"m503.9 119l1.59-.05.44-.62v-.03l.03-.04h.07l.13.06.25.32.27.85.07.3v.02l.08.6.02.26.001.55.03 1.84-1.28.2h-.32l-.8-.57-1.37.27-1.13 1.5-.5-.67-.37-.5.5-.37.58-.69v-.03l-.05-.09 1.76-3.13",
		 '34029':"m502 124.5l1.13-1.5 1.37-.27.8.57h.32l1.28-.2v.24l.05 1.05.02.29.08.89.2 1.43.05.48v.05l-.2.98-.55 1.92-.24.6-.29.31-1.2-.54.13-.23.03-.31-.52-2.25-2.27-3.26-.19-.26",
		 '36085':"m504.5 117.8l-.04.02-.09.13-.14.13h-.04l-.15.15-.09.06-.07.11-.23.09-.05-.04-.02-.06.02-.07.05-.11-.001-.15.02-.12.19-.23.04-.2-.03-.25.03-.12v-.13l.05-.2.08-.19.14-.1.25-.13.3-.16.11-.02.08.08.07.21.2.22-.03.14-.36.71-.23.23h-.05",
		 '34013':"m502.3 113.5l1.57.67-.07.47.44 1.38-2.42-.3.48-2.22",
		 '34039':"m501.8 115.7l2.42.3-.14.45-.19.001-.05.02-.02.03-.09.19.07.48-.41.001h-.11l-.45.001-1.24.44-.25.04-.2-.96.65-1.02",
		 '34017':"m505.3 114.1l-.09 1.21-.13.37-.97.76.14-.45-.44-1.38 1.48-.51",
		 '34003':"m502.1 110.4l3.41 1.02.001 1.06-.04.49-.26 1.17-1.48.51.07-.47.05-.05.06-.48-.001-.07-.39-.69-.23-.31-.42-.3-.97-.37.21-1.54",
		 '34023':"m503.8 117.2v.07l.02.15v.21l-.02.05h-.06-.07l-.14.16v.1l.11.26-.14.31v.001l-.001.14.1.2.08.08.26.03-1.75 3.13-1.64-1.25.06-.02.12-.14.89-1.55-.02-.32-.19-.06-.24-.2-.25-.27-.001-.09.06-.19.06-.07.37-.27.25-.04 1.24-.44.45-.001h.11l.41-.001",
		 '34035':"m501.1 116.7l.2.96-.37.27-.06.07-.06.19.001.09.25.27.24.2.19.06.02.32-.89 1.55-.12.14-.06.02-.06-.11-.29-.03-.63.36-.39-.56-.06-.08-.42-.88.16-.69.07-.11.11-.84-.36-1.02-.07-.13-.06-.05 1.5-.85.03.02.07.11.02.08.5 1.09.52-.46",
		 '34027':"m499.5 111.6l.91.59.62.03h.62l.58 1.27-.48 2.22-.65 1.02-.52.46-.5-1.09-.02-.08-.07-.11-.03-.02-1.5.85-1.75-.51.8-1.84 2-2.78",
		 '34031':"m501.9 110.3l.23.07-.21 1.54.97.37.42.3.23.31.39.69.001.07-.06.48-.05.05-1.57-.67-.58-1.27h-.62l-.62-.03-.91-.59.95-1.78 1.41.48",
		 '34037':"m500.5 109.8l-.95 1.78-2 2.78-2.44-1.92-.05-.07.38-.54.27-.63.06-.39-.02-.21-.04-.04.02-.18.12-.5.05-.14.23-.47.27-.29.57-.41 3.54 1.24",
		 '34041':"m495.1 112.5l2.44 1.92-.8 1.84-.09.25-.42.81-.08.1-.55.55-.95 1.06-.21.36-.1-.2-.06-.12-.24-.92-.1-.78.16-.38.08-.02.14.001.15-.02.2-.27.32-.99v-.08l-.03-.08-.91-1.08 1.05-1.96",
		 '34019':"m496.7 116.2l1.75.51.06.05.07.13.36 1.02-.11.84-.07.11-.16.69.42.88.06.08-.51.32-.29.9-.68.24h-.09l-.06-.04-.94-.57-.73-1.47-1.38-.56.21-.36.95-1.06.55-.55.08-.1.42-.81.09-.25",
		 '34021':"m499.1 120.5l.39.56.63-.36.29.03.06.11 1.64 1.25.05.09v.03l-.58.69-.5.37.37.5-1.33.19-2.6-2h.09l.68-.24.29-.9.51-.32",
		 '34007':"m496.7 128l.73-1.36 3.83 2.62-1 1.84-1.25-.98-1.4-1.54-.53-.38-.37-.19",
		 '34015':"m496.3 128.6l.38-.55.37.19.53.38 1.4 1.54 1.25.98-.77 1.43-.89-.52-4.3-1.78.24-.42 1.78-1.25",
		 '34033':"m494.3 130.3l4.3 1.78.12 1.13v.27l-.001.06-1.79-.95-.96 1.58-.15 1.03-2.07-2.53-.1-.3.32-.81.35-1.25",
		 '34011':"m501.2 134.7l-.1 1.97h-1.96l-.68-.16-1.3-.45-1.17-.65-.06-.06-.16-.2.15-1.03.96-1.58 1.79.95.001-.06v-.27l-.12-1.13.89.52 1.74 2.15",
		 '34009':"m501.2 134.7l3.14-.39-.41.64-.12.22-.14.35-.22.6-.24.86v.04l.02.02-.37 1.3-.26.64-.34.58-.5.28-.13.04-.3.03-.05-.02-.06-.08-.001-.81.02-.2.05-.27.19-.74.02-.16v-.2l-.02-.4-.05-.19-.22-.16-.1-.001.1-1.97",
		 '34001':"m506 131.3l-1.64 3-3.14.39-1.74-2.15.77-1.43 1-1.84.14.07.55.28.71.7.89.41.24.07.43.09.58-.15 1.2.54",
		 '34005':"m500.2 124l1.33-.19.5.67.19.26 2.27 3.26.52 2.25-.03.31-.13.23-.58.15-.43-.09-.24-.07-.89-.41-.71-.7-.55-.28-.14-.07-3.83-2.62.62-.91 2.11-1.79",
		 '35025':"m218.1 229.8l-.22 2.35-.5 5.53-.83 11.25-.09 1.12-.27-.02-.61-.05-.77-.06-.56-.04-.64-.05-4.31-.34.55-6.73-.98-.08.46-5.71.52.04.45-5.55.67-2.21 2.24.17 4.88.37",
		 '35015':"m197.7 241.8h.1l.54-5.7 11 .95-.46 5.71.98.08-.55 6.73-2.79-.23-.48-.04-8.95-.8.31-3.25h-.04l.32-3.44",
		 '35028':"m187.5 195.8l-.02.46-.14.97-.3-.03.25.21.02.03-.12 1.08-.15-.33-.15-.18-.42-.24-.32-.15-.06.06-.21.02-.19-.001-.1-.05-.07-.13.35-1.33.18-.35.91-.09.37.001.16.06",
		 '35039':"m177 181.1l4.27.5 1.31.25 2.57.28 1.43.15 4.78.49.11.89-.09 1.4-.13 2.78.06.77.04.81v.26l-.29 1.26-.09.18-.14.11-.32.13-.26.001-.13.03-.21.25-.04.1 1.98 1.08.84 1.38.1.22.13.22 2 1.34-1.97.25.04-.31-3.63-.37.001.17.1.001.001.05-.07.71-1.97-.22.02-.46.02-.09.04-.36-6.58-.7.17-1.54.16-1.27-3.62-.42-3.96-.52.35-3.04.13-1 .49-3.36.27-.49 1.64-1.35.42-.57",
		 '35045':"m167.3 179.9l9.11 1.14.62.08-.42.57-1.64 1.35-.27.49-.49 3.36-.13 1-.35 3.04-.37 2.82-4.75-.63-9.82-1.3 1.78-12.83 6.75.9",
		 '35031':"m158.7 191.8l9.82 1.3 4.75.63 3.27.42-1.09 8.94-2.43-.27-.87-.13-1.09-.14-7.62-1-.02.18-.57 4.3-6-.82 1.85-13.41",
		 '35001':"m176.5 204.3l2.42.29 2.08.24 1.71.2 2.49.28 1.19.16-.23 2.26-.12 1.12.98.1-.11 1.08-.83-.08-1.9-.22v-.29l-.08-.13-.09-.03-2.65-.33-.33.3-.08.12-3.18-.37-.31-1.17-.95-3.54",
		 '35061':"m177.5 207.9l.31 1.17 3.18.37.08-.12.33-.3 2.65.33.09.03.08.13v.29l-.65.73-.36 2.57-.11 1.14.55.05-.11 1.06-.84-.29-2.76-1.33-1.08-.73-.29-.04-3.08-.34.59-4.89 1.42.18",
		 '35006':"m176.5 204.3l.95 3.54-1.42-.18-.59 4.89-5.45-.65-.71-.1-3.48-.46-2.51-.3-7.13-.96.68-4.89 6 .82.57-4.3.02-.18 7.62 1 1.09.14.87.13 2.43.27 1.05 1.25",
		 '35051':"m168.4 226.1l7 .82 1.18.17 3.38.4 1.53.16 1.16.07.17 1.18-.42 4.36-6.2 2.3-.06.56-4.41-.53-.27 2.25-3.32-.4-1.15-.36-.17-.14.03-.14.12-.23.19-.76.05-.55-.02-.19-.64-5.28-.02-.1-.13-.23-.09-.03-1.43-.17.45-3.55 3.06.4",
		 '35053':"m175.5 212.6l3.08.34.29.04 1.08.73 2.76 1.33.84.29-.24 2.32 5.18.55-.37 3.35-.23 2.25-1.36-.15-.24 2.26-1.03-.11-.09-.04-1.15-.22-1.12-.13-.25 2.33-1.16-.07-1.53-.16-3.38-.4-1.18-.17-7-.82.27-2.11.95-7.96-.1-.001.37-3.09.15-1 5.45.65",
		 '35003':"m170 211.9l-.15 1-.37 3.09.1.001-.95 7.96-.27 2.11-3.06-.4-.45 3.55-4.79-.61-.99-.22-1.09-.17-4.26-.57 2.44-17.59 7.13.96 2.51.3 3.48.46.71.1",
		 '35017':"m153.8 227.7l4.26.57 1.09.17.99.22 4.79.61 1.43.17.09.03.13.23.02.1.64 5.28.02.19-.05.55-.19.76-.12.23-.03.14.17.14 1.15.36-3.39-.41-.14 1.12-3.29-.41-.73 5.6v.69l-.13 1.36-.1.75-3.33-.43.4-4.05.57-4.34-1.02-1.27-2.22-.3.29-2.23-2.06-.29.77-5.53",
		 '35023':"m153 233.2l2.06.29-.29 2.23 2.22.3 1.02 1.27-.57 4.34-.4 4.05 3.33.43-.04 1.04-.47 3.64-.27 2.13-7-.91-.11-.02-.86-.12-1.19-.17 1.96-14 .63-4.5",
		 '35029':"m171.5 237.9l-1.23 10.55-9.89-1.23.04-1.04.1-.75.13-1.36v-.69l.73-5.6 3.29.41.14-1.12 3.39.41 3.32.4",
		 '35013':"m182.4 233.3l-.14 1.22-.38-.04-1.35 12.29-2.37-.25h-.04l-.24.56-.03.09-.25 1.11.02.06.1.14.85.91-8.35-.96 1.23-10.55.27-2.25 4.41.53.06-.56 6.2-2.3",
		 '35055':"m194.3 183.1l5.07.51-.04.79-.31 2.05-.65.61-.36.14-.33.15-.24.17-.14.94-.02.7.08 1.3-.16 2.51-2.27 3-2-1.34-.13-.22-.1-.22-.84-1.38-1.98-1.08.04-.1.21-.25.13-.03.26-.001.32-.13.14-.11.09-.18.29-1.26v-.26l-.04-.81-.06-.77.13-2.78.09-1.4-.11-.89 2.93.3",
		 '35049':"m187.4 196.3l1.97.22.07-.71-.001-.05-.1-.001-.001-.17 3.63.37-.04.31-.17 1.39-1.04 10.72-5.53-.56.23-2.26.72-6.98.14-1.29.14-.97",
		 '35035':"m182.8 228.9l3.68.41 2.91.29-.1 1.1 4.35.43-.2 2.23-.2 1.45-.2.72-.3 1.1-.47 4.58 2.21.22.42.02 2.79.26-.32 3.44h.04l-.31 3.25-.77-.07-11.71-1.19-4.11-.43 1.35-12.29.38.04.14-1.22.42-4.36",
		 '35057':"m191.7 208.3l4.42.44-.54 5.61-.24-.02-.33 3.36-.11 1.12-6.44-.65-5.18-.55.24-2.32.11-1.06-.55-.05.11-1.14.36-2.57.65-.73 1.9.22.83.08.11-1.08-.98-.1.12-1.12 5.53.56",
		 '35027':"m195 217.7l4.44.42-.33 3.34-.33 3.41h.02v.03l-.46 4.79-.52 4-1.09-.04-3.32-.3.2-2.23-4.35-.43.1-1.1-2.91-.29-3.68-.41-.17-1.18.25-2.33 1.12.13 1.15.22.09.04 1.03.11.24-2.26 1.36.15.23-2.25.37-3.35 6.44.65.11-1.12",
		 '35007':"m200 183.7l1.57.18 2.73.25 7.38.62-.86 10.1-4.4-.39-4.42-.4.06-.55-4.89-.49.16-2.51-.08-1.3.02-.7.14-.94.24-.17.33-.15.36-.14.65-.61.31-2.05.04-.79.67.06",
		 '35033':"m197.2 193l4.89.49-.06.55 4.42.4.21 5.72-3.97-.31-2.65-.17-1.02-.56-2.37-1.06-3.87-.4.17-1.39 1.97-.25 2.27-3",
		 '35059':"m221.1 185.4l.86.06-.48 6.48-.42.25-.16 2.08-.24 3.41-.31 4.09-3.46-.27.26-3.35.12-.23.07-.9-4.43-.35.1-1.14-2.21-.19.05-.56.86-10.1 9.4.7",
		 '35021':"m206.4 194.4l4.4.39-.05.56 2.21.19-.1 1.14 4.43.35-.07.9-.12.23-.26 3.35-.13 1.13-.27 3.29-.11.09-2.57-.2.04-.41-.91-.08-2.21-5.13-1.56.13-2.5-.21-.21-5.72",
		 '35047':"m192.8 197.6l3.87.4 2.37 1.06 1.02.56 2.65.17 3.97.31 2.5.21 1.56-.13 2.21 5.13.91.08-.04.41-.15 1.93-2.3-.21.02-.28-2.92 1.34.07-.95-12.15-1.13-.22 2.25-4.42-.44 1.04-10.72",
		 '35037':"m216.9 201.5l3.46.27-.12 1.51-.43 5.69-.22 2.97-2.09-.16-2.65 2.08-2.48.92-.44 1.1-2.21-.18-1.89-.16.19-2.25.1-1.18.24-2.29.11-1.21 2.92-1.34-.02.28 2.3.21.15-1.93 2.57.2.11-.09.27-3.29.13-1.13",
		 '35019':"m208.5 208.6l-.11 1.21-.24 2.29-.1 1.18-2.21-.19-.48 1.09-.82 1.06-4.7-.42-.31 3.32-4.44-.42.33-3.36.24.02.76-7.87 12.15 1.13-.07.95",
		 '35011':"m208 213.3l-.19 2.25 1.89.16-.32 3.77-.03.69-.19 2.29-2.22-.2-.1 1.14-2.32-.21-4.35-.45.1-1.14-1.13-.11.33-3.34.31-3.32 4.7.42.82-1.06.48-1.09 2.21.19",
		 '35009':"m219.6 211.9l-.2 2.67-.43 5.62v.13l-7.35-.58.34-3.9.44-1.1 2.48-.92 2.65-2.08 2.09.16",
		 '35041':"m211.9 215.9l-.34 3.9 7.35.58-.5 6.18-.3 3.28-4.88-.37.09-1.12-2.22-.16.19-2.11-1.33-.11.28-3.39-1.11-.1.19-2.29.03-.69.32-3.77 2.21.18",
		 '35005':"m209.2 222.5l1.11.1-.28 3.39 1.33.11-.19 2.11 2.22.16-.09 1.12-2.24-.17-.67 2.21-.45 5.55-.52-.04-11-.95-.54 5.7h-.1l-2.79-.26-.42-.02-2.21-.22.47-4.58.3-1.1.2-.72.2-1.45 3.32.3 1.09.04.52-4 .46-4.79v-.03h-.02l.33-3.41 1.13.11-.1 1.14 4.35.45 2.32.21.1-1.14 2.22.2",
		 '32007':"m113 105.1l1.17.18 1.41.28 2.47.56 2.03.4 2.24.44-2.44 12.67-2.2 11.26-1.97-.38-5.91-1.25-2.17-.44-2.19-.47-1.9-.44-3-.63-1.59-.33-.03-5.69v-1.25l.03-.36.88-4.11-4.05-.89-4.08-.9 2.85-12.66 3.64.83 1.08.25 13.74 2.92",
		 '32033':"m100.6 127.2l3 .63 1.9.44 2.19.47 2.17.44 5.91 1.25 1.97.38-.52 2.69-.9 4.63-2.14 11-9.33-1.84-7.56-8 .74-3.48.09-.28.4-.3.24-.23.25-.29.35-.72.88-3.27.37-3.25-.001-.31",
		 '32003':"m91.1 168.9l1.31.29.28-.09 7.44 1.54 1.62.33.74.28 7.12 1.41-.41 2.12-.05.26-.41 2.34-.25 1.3-.44 2.27-1.31 1.77-.14.16-.02.001-.04.02h-.64l-.2-.02-.05-.001-.13-.1-.09-.09-.24-.38-.07-.22v-.11-.03l-.02-.1-.13-.32-.31-.43-.14-.13-1.31-.39-.59-.12h-.63l-1.15.27-.1.05-.14.13v.08l-.13 1.26-.28 3.69-.13 2.26.13 1.59.09.76.001.38-.07 1.57-.001.29-.05.26-.09.31-.97 1.61-1.41-2.1-3.82-5.72-.27-.39-.71-1.06-2.07-3.11-2.03-3 2.31-10.66",
		 '32017':"m104.8 147.4l9.33 1.84-.26 1.34-1.04 5.42-1.36 6.94-1.47 7.72-.39 2-7.12-1.41-.74-.28-1.62-.33-7.44-1.54-.28.09-1.31-.29.19-1 .58-2.71 2.5-11.63 8.81 1.83 1.62-7.99",
		 '32009':"m77.94 144.3l3.78 7.16-2.97 13.1-5.18-7.78-4.59-6.86.13.07.63.15 3.66-2.61 4.54-3.2",
		 '32023':"m78 136.3l.92-.05 2.79.04 1.71.07 7.1 1.61 6.73 1.46 7.56 8-1.62 7.99-8.81-1.83-2.5 11.63-.58 2.71-.19 1-2.31 10.66-.12-.17-1.48-2.22-.36-.53-2.76-4.14-3.4-5.09-.64-.98-1.1-1.64-.19-.29 2.97-13.1-7.37-13.96.24-1.02 3.43-.17",
		 '32011':"m95.8 114.6l4.05.89-.88 4.11-.03.36v1.25l.03 5.69 1.59.33.001.31-.37 3.25-.88 3.27-.35.72-.25.29-.24.23-.4.3-.09.28-.74 3.48-6.73-1.46.19-.67.55-2.31.97-4.29.94-4.26-.06-.02-.03-.02.96-4.09 1.5-6.97.25-.66",
		 '32015':"m91.7 113.7l4.08.9-.25.66-1.5 6.97-.96 4.09.03.02.06.02-.94 4.26-.97 4.29-.55 2.31-.19.67-7.1-1.61-1.71-.07-2.79-.04-.09-.34.05-.36.93-2.56.08-.2.13-.15 1.28-.87.66-.31.82-.16.07.02.07-.02.13-.13.09-.2.28-1.13.76-3.73-.35-.83 3.82-6.12.85-1.36 2.17.48 1.02-4.52",
		 '32021':"m69.4 134.2l8.59 2.07-3.43.17-.24 1.02 3.59 6.79-4.54 3.2-3.66 2.61-.63-.15-.13-.07-5.51-8.28 2.43.6.32-1.25.77-3.17.08-1.14-.85-.21.28-1.16.55-.67.67-.78 1.7.41",
		 '32005':"m57.5 130.7l1.18.3 1.13.47.03.2 1.94.48 2.3.61-.28 1.17h-.38l-.52-.13-.27.31-.41.87-.09.37.05 1.18.09.41.21.76-.11 1.25-.16.68-1.92-2.88-2.38-3.56-.51-1.93.14-.57",
		 '32510':"m57.67 130l3.08-.35.16.59.28.26.83.21v.07l-.21 1.29-.04.05-1.94-.48-.03-.2-1.13-.47-1.18-.3.16-.67",
		 '32019':"m66.95 126.1l1.08-.68.27-.1-.35.95-.65 1.42-.41 1.64.92 1.6.58.92.45.67.69 1.16-.11.47-1.7-.41-.67.78-.55.67-.28 1.16.85.21-.08 1.14-.77 3.17-.32 1.25-2.43-.6-1.29-1.93.16-.68.11-1.25-.21-.76-.09-.41-.05-1.18.09-.37.41-.87.27-.31.52.13h.38l.28-1.17-2.3-.61.04-.05.21-1.29v-.07l-.83-.21-.28-.26-.16-.59.68-.04 1.84-.48 2.77-3.11.91.1",
		 '32001':"m83.9 125.2l.35.83-.76 3.73-.28 1.13-.09.2-.13.13-.07.02-.07-.02-.82.16-.66.31-1.28.87-.13.15-.08.2-.93 2.56-.05.36.09.34-.92.05-8.59-2.07.11-.47-.69-1.16-.45-.67-.58-.92-.92-1.6.41-1.64.65-1.42.35-.95-.27.1-1.08.68.24-.6.29-1.36-.09-.46.26-1.77.13-.54 5.9 1.47 3.4.76 2.92.69 3.86.92",
		 '32027':"m87.7 119.1l-3.82 6.12-3.86-.92-2.92-.69-3.4-.76-5.9-1.47-1.09-.26 1.65-6.54.24.05 1.42-5.57 4.92 1.21-.32 1.33 10.78 2.54-.51 2.2 3.17.74.08.03v.08l-.44 1.9",
		 '32029':"m66 126l-2.77 3.11-1.84.48-.68.04.78-.88.41-1.46-.12-.36.04-.64 1.51-.19.74.08 1 .03.47-.07.48-.15",
		 '32031':"m72.81 96l.33.09-.46 1.72-.84 3.36-.34 2.26-.34 1.37-.24.58-.23.25-.62 2.46-.24 1 .19.05-1.42 5.57-.24-.05-1.65 6.54 1.09.26-.13.54-.26 1.77.09.46-.29 1.36-.24.6-.91-.1-.48.15-.47.07-1-.03-.74-.08-1.51.19-.04.64.12.36-.41 1.46-.78.88-3.08.35.48-1.9.44-1.62.92-3.48.2-.73.97-3.65.63-2.4v-.001l.18-.73.58-2.25 1.16-4.61 1.03-4 2.64-10.19 5.91 1.5",
		 '32013':"m73.1 96l5.06 1.28 5.39 1.24 10.9 2.48.07.03-3.87 17.2-2.17-.48-.85 1.36.44-1.9v-.08l-.08-.03-3.17-.74.51-2.2-10.78-2.54.32-1.33-4.92-1.21-.19-.05.24-1 .62-2.46.23-.25.24-.58.34-1.37.34-2.26.84-3.36.46-1.72",
		 '36019':"m498.4 59.6l-.001.22.33 2.11.46 2.69.27.5.15.13.26.15-1.09.39.03.24-.17.47-.63.44-.8.5-.7.15-1.41.51-.32-.92-.33-.87-.69-1.6-1.17-2.87-.23-.6 1.34-.39 2.21-.56 2.48-.69",
		 '36031':"m495.1 68.1l1.41-.51.7-.15.8-.5.63-.44.17-.47-.03-.24 1.09-.39.43.52.13.28.17.45.02.15-.05.54.3 1.57-.38 1.08v1.07.42l.02.43.02.05 1.07 2.54.16.28-.52.19-5.42 2.08v-.49l-.05-.19-1.02-.2-.33.15-.11.07-.09.15-1.45-1.18.6-.73-.67-1.85 1.65-.61-1.23-3.29 2-.77",
		 '36073':"m461.5 92.5l-.61.14-3.19.61-.5.12-.56-3.1 4.32-.73.54 2.96",
		 '36037':"m461.5 92.5l1.16 1.7-.11 1.67-4.73.83-.52-2.81-.11-.51.5-.12 3.19-.61.61-.14",
		 '36121':"m457.8 96.7l4.73-.83.46 2.48-.17.67-.35.3-.08.44-.06.46.001.04.23.11-2.51.48-1.48.08-.57-3.11-.23.04-.19-1.11.2-.04",
		 '36051':"m462.6 94.2l1.65-.33.11.09.05.08-.05.36v.03l-.24.05-.001.02.02.03 1.12-.21.51-.15.14.12.08.13.14.33.11.49v.02l-.33.07v1.2l.35 1.14.92-.16.21.56.12.61-1.9 1.78-1.1.17-.11-.55-1.85.31-.23-.11-.001-.04.06-.46.08-.44.35-.3.17-.67-.46-2.48.11-1.67",
		 '36093':"m497.9 87.1l.35-.05 1.24.34.41.3.11.31.82.7.06.03h.12l-3.26 1.42-.96-.66-.02-.04.03-.17 1.34-1.45-.26-.71",
		 '36057':"m497.7 86.8l.12.34.26.71-1.34 1.45-.03.17.02.04-.65.34-1.04.36-1.1-.27-.84-.03-1.15-.19-.5-2.33 2.18.33.49-.11 3.59-.81",
		 '36035':"m491.2 84.2l1.79.36 2.78-.91.75-.25 1.2 3.33-3.59.81-.49.11-2.18-.33-.25-3.11",
		 '36099':"m473.6 91.5l-.06.84.43 2.19.05.24.2.61.05.09.07.1.74.91-.08 1.03-1.83.45-1.29-2.69-.34-1.25.001-.06.02-.03.11-.05-.37-1.78 2.27-.61",
		 '36069':"m471.3 92.1l.37 1.78-.11.05-.02.03-.001.06.34 1.25-3.14.67-.16.41-.04.27-.06.61.24 1.16-1.15.22-.12-.61-.21-.56-.92.16-.35-1.14v-1.2l.33-.07v-.02l-.11-.49-.14-.33-.08-.13-.14-.12.9-.17-.25-1.16 1.05-.21 1.14-.29 1.04-.21.08.35 1.56-.32",
		 '36123':"m471.9 95.3l1.29 2.69-1.82 1.13-.37-.07-.06-.06-.12-.58-.03-.3v-.11l-2.06.42-.24-1.16.06-.61.04-.27.16-.41 3.14-.67",
		 '36097':"m473.2 98l1.83-.45.22.86.28 1.1v.23l.22 1.13.68-.12.09.43-.17.24-.41.03-.48-.12-.12-.5-.99.2-1.14.32.02.11-1.14.32-.1.02-.35-1.48-.27-1.19 1.82-1.13",
		 '36109':"m475.1 96.5l1.9-.44.04.1 1.77-.44.69 2.72-2.32 2.15-.76.15-.68.12-.22-1.13v-.23l-.28-1.1-.22-.86.08-1.03",
		 '36011':"m473.4 86.3l.41 1.48.48.5.79-.19.1.36.27 1 .13.55-.001.001h-.17l-.05.06v.07l.32 1.16.8 1.94.85-.23.65.42.29.3.03.11.48 1.86-1.77.44-.04-.1-1.9.44-.74-.91-.07-.1-.05-.09-.2-.61-.05-.24-.43-2.19.06-.84-.91-4 .75-1.14",
		 '36067':"m479.8 88.1l.18.18.66.9.44 1.23.68 2.48-3.44.99-.03-.11-.29-.3-.65-.42-.85.23-.8-1.94-.32-1.16v-.07l.05-.06h.17l.001-.001-.13-.55-.27-1 1.41-.36 1.2-.6 1.16.33.81.24",
		 '36023':"m481.7 92.9l.24.84 1.08 3.85-2.45.6-1.14.28-.69-2.72-.48-1.86 3.44-.99",
		 '36017':"m482 93.7l3.6-1.02.63-.08 1.2-.34.09 5.69.3 1.52-1.06.23-.97.21-.67-.33-1.18.02-.14.09-.11-.19-.61-1.94-1.08-3.85",
		 '36053':"m479.8 88.1l1.08.14.95-.42.46.05.22.12.58.33 1.15.76.34 1.14.04.18 1.18.65 1.72-.49-.08 1.71-1.2.34-.63.08-3.6 1.02-.24-.84-.68-2.48-.44-1.23-.66-.9-.18-.18",
		 '36065':"m486.7 80.89l1.11 3.53.36 1.29-.51 1.57-.37.95.55 2.17-.31.18-1.72.49-1.18-.65-.04-.18-.34-1.14-1.15-.76-.58-.33-.22-.12-.46-.05-.95.42-.25-2.11-.24-.03.23-2.15.57.05 2.17.2 3.31-3.33",
		 '36049':"m481.9 73.96l2.83.97 1.9 5.96-3.31 3.33-2.17-.2-.77-2.73-.38-1.23.001-1.2 1.71-1.55.26-.61-.04-.79-.62-.3.58-1.65",
		 '36043':"m484.8 74.93l2.93-.3 2.38 7.2-.42 2.05 1.57.36.25 3.11.5 2.33-1.16-.2.06.85-.11.13-2-.65-.22.69-.64.19-.08-.29-.55-2.17.37-.95.51-1.57-.36-1.29-1.11-3.53-1.9-5.96",
		 '36077':"m493.1 89.9l-.05.51.05.36.05.17.58 1.18.12.31-.2.86-.23.68-1.21.35-1.62 1.46-.82.78-.39.45-.92.69-.24.09-.74.22-.09-5.69.08-1.71.31-.18.08.29.64-.19.22-.69 2 .65.11-.13-.06-.85 1.16.2 1.15.19",
		 '36095':"m496.8 89.5l.96.66.18.13.1.64-.07.66-.06 1.21v1.46l.05.16.08-.03-1.59 1.08-2.95-1.49.23-.68.2-.86-.12-.31-.58-1.18-.05-.17-.05-.36.05-.51.84.03 1.1.27 1.04-.36.65-.34",
		 '36001':"m501 88.7l1.2-.35-.02 4.26-4.18 1.73-.08.03-.05-.16v-1.46l.06-1.21.07-.66-.1-.64-.18-.13 3.26-1.42",
		 '36091':"m496 81.99l2.44-.92.12.15.58.9.18.7.09.05.61.17.77-.74.55-.69.07.11.74 2.42.04.24.04.88-.05.45-.12.57.1 2.08-1.2.35h-.12l-.06-.03-.82-.7-.11-.31-.41-.3-1.24-.34-.35.05-.12-.34-1.2-3.33-.53-1.44",
		 '36113':"m495.8 77.1l5.42-2.08-.02 1.05-.06.78-.52 1.26-.17.45-.1.47v.09l.03.18.93 2.33-.55.69-.77.74-.61-.17-.09-.05-.18-.7-.58-.9-.12-.15-2.44.92-1.55-4.39 1.38-.53",
		 '36041':"m492.7 72.8l.67 1.85-.6.73 1.45 1.18.09-.15.11-.07.33-.15 1.02.2.05.19v.49l-1.38.53 1.55 4.39.53 1.44-.75.25-2.78.91-1.79-.36-1.57-.36.42-2.05-2.38-7.2 2.8-1.02 2.22-.8",
		 '36033':"m495.1 68.1l-2 .77 1.23 3.29-1.65.61-2.22.8-.12-.92-.33-.98-1.82-5.22-1.15-3.41-.7.16-.22-.66.24-.001 3.69-.7 1.29-.29.94-.27.1-.03.23.6 1.17 2.87.69 1.6.33.87.32.92",
		 '36089':"m486.1 62.6l.22.66.7-.16 1.15 3.41 1.82 5.22.33.98.12.92-2.8 1.02-2.93.3-2.83-.97-.67-.26-1.97-.68-1.59-.6.28-.97.26-.64.48-.78 1.44-2.24.42-.58 3.29-3.74.17-.12 1.21-.7.23-.04.68-.05",
		 '36045':"m477.7 72.4l1.59.6 1.97.68.67.26-.58 1.65.62.3.04.79-.26.61-1.71 1.55-.001 1.2.38 1.23-1.88.22-.41.19.09.34-1.65.2-.6-1.52.64-1.31.04-.07-.02-.19-.2-.51-.06-.08-.07-.02-.79-.07-.56-.23-.88-.63-.14-.36v-.15l.02-.29.22-.91 2.06-2.19 1.47-1.26",
		 '36075':"m476.6 82.2l1.65-.2-.09-.34.41-.19 1.88-.22.77 2.73-.57-.05-.23 2.15.24.03.25 2.11-1.08-.14-.81-.24-1.16-.33-1.2.6-1.41.36-.1-.36-.79.19-.48-.5-.41-1.48.43-.49 1.13-1.2.06-.04.37-.12.25.11h.14l.31-.08.52-.33.05-.06.07-.17.03-.21.02-.2-.03-.33-.11-.63-.12-.37",
		 '36117':"m472.7 87.5l.91 4-2.27.61-1.56.32-.08-.35-1.04.21-1.14.29-.65-3.08.55-.15 1.55-.4.29-.06h.43l.33.06.7-.13.05-.02 1.34-.79.22-.16.36-.41",
		 '36055':"m461.5 92.5l-.54-2.96.39-.05 1.49.03.96.23.44.25.07.03.79.32.26.05.16-.001 1.36-.84.65 3.08-1.05.21.25 1.16-.9.17-.51.15-1.12.21-.02-.03.001-.02.24-.05v-.03l.05-.36-.05-.08-.11-.09-1.65.33-1.16-1.7",
		 '36063':"m457.2 93.4l.11.51-.21.11-.98.32-3.2.66-.77.14-.3-.06-.11-.19-.43-2.18 2.05-1.1 1.75-.85.77-.3.53-.17h.06.18l.56 3.1",
		 '36029':"m457.3 93.9l.52 2.81-.2.04.19 1.11.23-.04.57 3.11-1.2.55-1.04.56-1.08.72-.23.09-.23.06-.55-.28-1.23-.69-.78-.28.02-.27.12-.33.4-1.07.25-.21.62-.51.23-.11.39-.5.11-.2v-.1l-.34-.75-.53-.96-.12-.16-.14-.09-.4-.07-.4-.17-.1-.11-.08-.28-.17-.62.77-.14 3.2-.66.98-.32.21-.11",
		 '36013':"m453 101.9l1.24 6.88-5.16.91-.14.03-1.28.22-.3-1.69-.25-1.43-.06-.34.38-.26.61-.51.82-.77.76-.76.19-.26.16-.36.42-.54.93-.73.9-.66.78.28",
		 '36009':"m458.6 100.9l1.48-.08 1.26 6.65-2.71.5-2.6.51-.42.07-1.34.23-1.24-6.88 1.23.69.55.28.23-.06.23-.09 1.08-.72 1.04-.56 1.2-.55",
		 '36003':"m462.6 100.4l1.85-.31.11.55 1.1-.17.92 6.1-4.28.81-.95.19-1.26-6.65 2.51-.48",
		 '36101':"m467.6 98.6l1.15-.22 2.06-.42v.11l.03.3.12.58.06.06.37.07.27 1.19.35 1.48.1-.02 1.14-.32.71 3.53-6 1.22-1.31.27-.92-6.1 1.9-1.78",
		 '36015':"m477.2 100.6l.56 3.62-3.45.69-.36.08-.71-3.53-.02-.11 1.14-.32.99-.2.12.5.48.12.41-.03.17-.24-.09-.43.76-.15",
		 '36107':"m480.6 98.2l.07.09.77 1.66.02.08.1.51.03.41-.27.07.6 2.35-.38.08-3.84.79-.56-3.62 2.32-2.15 1.14-.28",
		 '36007':"m483.1 97.6l.61 1.94.11.19.14-.09 1.18-.02.67.33.97-.21 1.06-.23 1.09 2.36-1.15.26-5.81 1.26-.6-2.35.27-.07-.03-.41-.1-.51-.02-.08-.77-1.66-.07-.09 2.45-.6",
		 '36025':"m493.4 93.9l2.95 1.49.16.04-.58 2.1.89.22-2.61 2.63-2.94 2.86-1.18-.19-.3-.64-.17-.16-.57-.4-.18-.04-1.09-2.36-.3-1.52.74-.22.24-.09.92-.69.39-.45.82-.78 1.62-1.46 1.21-.35",
		 '36105':"m491.3 103.3l2.94-2.86 1.32.4 2.13.68-.19.58-.37.85-.19.48.92.43 1.05.46.42.62-.33.29-.18.39-.25.65-2.56.72-.07.05v.03l.12.49.13.28-.42.05-.76.04-.17-.08-1.03-.53-.29-.28-.41-.41-.26-.59-1.53-2.75",
		 '36039':"m502.2 92.6h.05l.03.02.07.21.35 1.79.04.32-.02.18-.37.92-.28.9-.04.19-.93-.39-.42.14-.08 1-1.48.19-.73.09-1.5-.38-.89-.22.58-2.1-.16-.04 1.59-1.08 4.18-1.73",
		 '36061':"m506.2 113.9l.02.09-.18.87-.14.13-.7.62-.07-.29.09-1.21.26-1.17.6.3.12.67",
		 '36111':"m502 97.8l.19 2.21.53 1.73.2.41.32 1.88-.91.34-.68.14-.59-.02-.7-.25-1 .69-.42-.62-1.05-.46-.92-.43.19-.48.37-.85.19-.58-2.13-.68-1.32-.4 2.61-2.63 1.5.38.73-.09 1.48-.19.08-1 .42-.14.93.39-.03.65",
		 '36005':"m505.5 112.4l1.37.16.19.98-.88.31-.12-.67-.6-.3.04-.49",
		 '36047':"m505.2 115.6l.7-.62.24.06.32.73-.09 1.15-.62-.04-.42-.64-.13-.66",
		 '36087':"m503.7 107.5l.31.65.58.79.51.58.06.15.34 1.73-3.41-1.02-.23-.07 1.83-2.86v.04",
		 '36059':"m511.1 115.2l-3.05 1.05-.77-2.7 2.18-2.14 1.64 3.8",
		 '36071':"m503.2 104l.19 1.97.34 1.44-1.83 2.86-1.41-.48-3.54-1.24-.77-.75-.13-.28-.12-.49v-.03l.07-.05 2.56-.72.25-.65.18-.39.33-.29 1-.69.7.25.59.02.68-.14.91-.34",
		 '36081':"m506.2 113.9l.88-.31.21-.03.77 2.7-1.69.67.09-1.15-.32-.73-.24-.06.14-.13.18-.87-.02-.09",
		 '36103':"m511.1 115.2l-1.64-3.8-.001-.25.05-.07.77-.29 1.77.23 5.76-2.67 1.45-1.69.55-.28 2.62.88-.12.29-2.3 2-.62.48-4.96 3.6-.78.47-.55.33-.27.15-.2.1-1.5.52",
		 '36119':"m503.7 107.5l3.97-1.54.16.91-.31 2.08-.06.06-.7.72 1 1.3-.87 1.6-1.37-.16-.001-1.06-.34-1.73-.06-.15-.51-.58-.58-.79-.31-.65",
		 '36079':"m507.3 103.9l.35 2.06-3.97 1.54v-.04l-.34-1.44.3-.73 3.2-1.27.45-.12",
		 '36027':"m506.2 97.2l.88 4.9.31 1.79-.45.12-3.2 1.27-.3.73-.19-1.97-.32-1.88-.2-.41-.53-1.73-.19-2.21.13-.05h.12l1.53.36.48.13 1.79-.06.06-.97.09-.02",
		 '36021':"m502.2 92.6l3.83-1.53-.14 5.69.22.44-.06.97-1.79.06-.48-.13-1.53-.36h-.12l-.13.05.03-.65.04-.19.28-.9.37-.92.02-.18-.04-.32-.35-1.79-.07-.21-.03-.02h-.05",
		 '36083':"m502.1 86.3l3.3-.83.69 2.47-.08 3.17-3.83 1.53.02-4.26-.1-2.08",
		 '36115':"m501.8 74.8l.33.65-.17.96-.05.52.09.75.04.05.31.13 1.55.34.55 2.54.96 4.71-3.3.83.12-.57.05-.45-.04-.88-.04-.24-.74-2.42-.07-.11-.93-2.33-.03-.18v-.09l.1-.47.17-.45.52-1.26.06-.78.02-1.05.52-.19",
		 '39155':"m441.6 117.5l.02.14.75 4.56-4.59.74-.45-2.74-.33-1.97 4.6-.72",
		 '39007':"m440.9 113.1l.73 4.48-4.6.72-.44-2.74-.28-1.79 4.31-2.31.27 1.64",
		 '39087':"m426.2 154.7l.74-.04.05.85 1.21.32 1.25.88.08.98.75-.08v.56.03l-.05.92-.02.09-.02.09-.03.08-.05.07-.1.06-1.59.63-.88-.03-.87-.98-1.61-.63.61-.39.59-2.11v-.19l-.07-1.13",
		 '39145':"m419.8 153.4l.64.62.04.02 2.09-.23 1.92-.16.54-.04.04.65.23.51.92-.06.07 1.13v.19l-.59 2.11-.61.39-.05-.02-.22-.14-.001-.001-.08-.09-.07-.14-.02-.05-.28-.84-.1-.41v-.16-.02-.09l-.02-.08v-.02-.02l-.02-.03-.03-.04-.001-.02-.05-.05-.1-.04h-.05-.001l-.27.12-.83.38-.18.08-2.28 1.92-.6-5.34",
		 '39001':"m419.8 153.4l.6 5.34-.57-.43h-.02l-.34-.16-.03-.001-1.07-.26-.4-.1h-.001-.08l-.12.03-.78.34-.1.07-.08.13-.05.45-.58.07-.32-4.99 2.78-.82 1.2.35",
		 '39131':"m418.6 151.2l5.63-.39.19 2.87-1.92.16-2.09.23-.04-.02-.64-.62-1.2-.35.07-1.88",
		 '39079':"m424.4 150.3l1.12-.08 1.15.12 1.18.39.08 1.34-1.03 2.65-.74.04-.92.06-.23-.51-.04-.65-.54.04-.19-2.87.16-.54",
		 '39053':"m429.1 152l.001.19 2.27-.2.05.59-.23 1.23-.13 2.08.26 1.06.001.09v.02.04.08l-.001.06-.04.07-.02.03-.06.05-.02.02-.06.001-.19.04-.65.22-.75.08-.08-.98-1.25-.88-1.21-.32-.05-.85 1.03-2.65 1.12-.06",
		 '39105':"m429.3 149.6l5.14-.45.18 1.08-.61.27v.11l.05.18.11.14.11.08.23.15.11.13.24 1.04-.02.11-1.05.74-.33.09v-.68l-.04-.1-.25-.37-.19-.24-.73-.4h-.16l-.17.09-.46.78-.03.18-.05-.59-2.27.2-.001-.19.2-2.34",
		 '39163':"m424.3 148.2l1.12-.07 1.14-.27-.02-.34 2.23-.17.08 1.16.38-.03.09 1.16-.2 2.34-1.12.06-.08-1.34-1.18-.39-1.15-.12-1.12.08-.15-2.08",
		 '39167':"m438.2 143l.41.29 2.06-.24.04.41-.87 1.36-1.98 1.7-.44-.54-.07-.08-.25-.14h-.11l-.09.03-.1.09-.63.77-1.29 1.64-.23.51-.08-.81-.95.11-.43-.54-.17-1.71 2.24-2.14 2.94-.7",
		 '39009':"m429.7 144.9l1.11-.08 2.17 1 .17 1.71.43.54.95-.11.08.81-.18.39-5.14.45-.09-1.16-.38.03-.15-2.31 1.12-.08-.09-1.17",
		 '39073':"m427.4 144l2.29.96.09 1.17-1.12.08.08 1.15-2.23.17.02.34-1.14.27-1.12.07-.1-1.3-.07-1.12.17-.2.85-.66 1.15-.86 1.14-.07",
		 '39141':"m418.9 147l2.54-.22.22.18.13.14 2.35-.18.1 1.3.15 2.08-.16.54-5.63.39-.5-2.29.8-1.93",
		 '39071':"m416 149.2l2.14-.27.5 2.29-.07 1.88-2.78.82-1.97.24-.31-2.92 2.48-2.04",
		 '39015':"m412.3 151.3l1.27-.07.31 2.92 1.97-.24.32 4.99-.78-.39-.88-.91-.06-.05-.12-.04-.34-.05-1.48.16-.2-6.31",
		 '39025':"m412.1 151.3h.14l.2 6.31-1.85-.53-.1-.59-1.09-1.79-.04-1.99-.16-.43.39-.86 2.51-.12",
		 '39061':"m408.7 151.3l.96.16-.39.86.16.43.04 1.99-1.96-.72-1.13.41-1.99-.17-.3-2.58 1.63-.19.73-.13 1.88-.09.38.02",
		 '39027':"m414.9 147.1l1.06 2.11-2.48 2.04-1.27.07h-.14l-.22-4.08 3.04-.15",
		 '39165':"m410.5 147.3l1.36-.05.22 4.08-2.51.12-.96-.16-.59-3.83 2.48-.16",
		 '39017':"m406.9 147.6l1.11-.13.59 3.83-.38-.02-1.88.09-.73.13-1.63.19-.29-2.8-.07-.59 3.26-.69",
		 '39135':"m406.4 143.3l.58 4.23-3.26.69-.24-2.06-.27-2.46 3.19-.4",
		 '39113':"m406.9 143.2l2.62-.37-.08.16.06.2.07.12 1.05-.05.02.38-.14 3.59-2.48.16-1.11.13-.58-4.23.58-.09",
		 '39057':"m414.8 144.2l.04.73.12 2.17-3.04.15-1.36.05.14-3.59.7-.03.42.001 1.14.1.02.32 1.82.09",
		 '39047':"m414.8 144.9l3.95-.24.17 2.33-.8 1.93-2.14.27-1.06-2.11-.12-2.17",
		 '39129':"m418.7 143.1l4.12-.32.09 1.29.15 1.74 1.1-.06.07 1.12-2.35.18-.13-.14-.22-.18-2.54.22-.17-2.33-.12-1.53",
		 '39045':"m422.9 140.9l3.12-.32.08 1.21.51-.03.7 1.1.08 1.14-1.14.07-1.15.86-.85.66-.17.2-1.1.06-.15-1.74-.09-1.29.15-1.92",
		 '39127':"m426 140.6l2.26-.1 1.8 1.61.7 2.79-1.11.08-2.29-.96-.08-1.14-.7-1.1-.51.03-.08-1.21",
		 '39111':"m438.1 139.6l1.08-.13 2.29-.2.71-.08.09-.06.11 1.73-.89 1.64-.79 1-.04-.41-2.06.24-.41-.29-.18-1.3-.37.05-.27-2.09.74-.09",
		 '39121':"m437.9 138.5l.13 1.08-.74.09.27 2.09.37-.05.18 1.3-2.94.7-1.4-2-.13-1.12 1.11-.13-.05-.41.31-.38 1.41-.93.37-.09 1.11-.14",
		 '39115':"m430.1 142.1l3.72-.36 1.4 2-2.24 2.14-2.17-1-.7-2.79",
		 '39119':"m428.3 137.1l4.59-.49.31 2.85.36-.04.15 1.14.13 1.12-3.72.36-1.8-1.61-.02-3.33",
		 '39013':"m440.9 135.3l1.74-.25-.03 1.64-.4 2.43-.09.06-.71.08-2.29.2-1.08.13-.13-1.08-.36-2.82 3.34-.39",
		 '39067':"m439.8 132l.74-.09.07.56-.03.08.33 2.76-3.34.39-1.18-.4-.14-1.16.36-.05.2-.14-.19-1.56 3.18-.38",
		 '39059':"m433.6 135.6l2.76-.33 1.18.4.36 2.82-1.11.14-.37.09-1.41.93-.31.38.05.41-1.11.13-.15-1.14-.36.04-.31-2.85.35-.04.08-.05-.08-.78.42-.14",
		 '39031':"m427.8 133.4l4.61-.54.11.96.93-.11.23 1.9-.42.14.08.78-.08.05-.35.04-4.59.49-.22-.92-.3-2.81",
		 '39089':"m422.6 136.5l2.7-.22.02.24 1.11-.09 1.63-.21.22.92.02 3.33-2.26.1-3.12.32-.14-2.43-.18-1.96",
		 '39041':"m417.5 135l2.22-.17 2.82.72.06.94.18 1.96-3.99.32-.2-1.29-.73.09-.25-1.68-.11-.89",
		 '39049':"m422.8 138.5l.14 2.43-.15 1.92-4.12.32-.15-3.84.29-.5 3.99-.32",
		 '39097':"m415.6 139.6l2.9-.34.15 3.84.12 1.53-3.95.24-.04-.73.89-3.24-.06-1.3",
		 '39023':"m410.5 141.2l5.13-.28-.89 3.24-1.82-.09-.02-.32-1.14-.1-.42-.001-.7.03-.02-.38-.12-2.09",
		 '39021':"m414.9 138.2l.66 1.46.06 1.3-5.13.28-.17-3 2.26-.12.58.17 1.73-.06",
		 '39109':"m406.4 139.7l4-.32.1 1.87.12 2.09-1.05.05-.07-.12-.06-.2.08-.16-2.62.37-.5-3.57",
		 '39149':"m406.2 137.6l.11-.32.62-1.43.22-.03 3.04-.41.23 2.72.06 1.16-4 .32-.27-2.02",
		 '39037':"m406.2 137.6l.27 2.02.5 3.57-.58.09-3.19.4-.12-1.14-.4-3.94-.07-.55 3.58-.45",
		 '39107':"m405.4 133.4l.73 4.23-3.58.46-.32-2.84-.24-2 3.41.16",
		 '39011':"m406 133.3l1.68-.22.05.38 1.86-.07 1.46-.19.17 1.37-1.09.86-3.04.41-.22.03-.62 1.43-.11.32-.73-4.23.57-.07",
		 '39091':"m411.2 134.6l.41.07 3.11-.14.02.07.16 3.58-1.73.06-.58-.17-2.26.12-.23-2.72 1.09-.86",
		 '39159':"m414.8 134.6l.98-.15 1.75.57.11.89.25 1.68.73-.09.2 1.29-.29.5-2.9.34-.66-1.46-.16-3.58",
		 '39101':"m420.8 131.1l.09.75-.94.15-.28 2.15.05.66-2.22.17-1.75-.57-.32-2.33 2.94-.61 2.43-.36",
		 '39117':"m420.8 131.1l1.25-.26 1.29 1.93-.02.66.17 2-.96.08-2.82-.72-.05-.66.28-2.15.94-.15-.09-.75",
		 '39083':"m427.2 132l.56 1.39.3 2.81-1.63.21-1.11.09-.02-.24-2.7.22-.06-.94.96-.08-.17-2 .02-.66 2.75-.46 1.1-.33",
		 '39075':"m432.5 129.9l.06.43-.11.11.29 2.38-.38.04-4.61.54-.56-1.39.72-1.42 4.58-.69",
		 '39157':"m435.7 129.6l.13 1.09.55-.06.41 3.26-.2.14-.36.05.14 1.16-2.76.33-.23-1.9-.93.11-.11-.96.38-.04-.29-2.38.11-.11 3.16-.71",
		 '39019':"m437.8 128.3l2.42 1.3-.41 2.37-3.18.38-.21-1.7-.55.06-.13-1.09.74-.1-.09-.82.34-.25 1.07-.15",
		 '39081':"m440.2 129.6l1.9-.09.88 2.34-.23 2.77-.1.41-1.74.25-.33-2.76.03-.08-.07-.56-.74.09.41-2.37",
		 '39029':"m442.9 125.2l.11.62.45 2.72-1.31.95-1.9.09-2.42-1.3-.35-2.25 5.43-.83",
		 '39151':"m434.3 125.4l2.94-.45.52 3.34-1.07.15-.34.25.09.82-.74.1-3.16.71-.53-3.59 2.29-1.32",
		 '39169':"m431.5 125.9l.53.9.46 3.16-4.58.69-.65-4.16 4.23-.58",
		 '39005':"m426.7 125.6l.54.86.65 4.16-.72 1.42-1.1.33-.34-2.21-.63-.98-.39-.88-.23-1.45-.14.02.79-1.07 1.58-.2",
		 '39139':"m421.6 127.2l2.8-.37.14-.02.23 1.45.39.88.63.98.34 2.21-2.75.46-1.29-1.93-.49-3.66",
		 '39033':"m421.6 127.2l.49 3.66-1.25.26-2.43.36-.52-3.74 2.71-.42 1-.13",
		 '39175':"m414.9 128.2l2.95-.41.52 3.74-2.94.61-.2.02-.56-.11-.2-1.5-.19.02.62-2.36",
		 '39065':"m410.8 131l3.51-.43.19-.02.2 1.5.56.11.2-.02.32 2.33-.98.15-.02-.07-3.11.14-.41-.07-.46-3.62",
		 '39003':"m410.6 129.7l.17 1.29.29 2.26-1.46.19-1.86.07-.05-.38-1.68.22.26-2.31 1.12-.15 1.08-.33-.05-.38 1.08-.33 1.1-.15",
		 '39063':"m410.2 126.5l4.41-.56.31 2.24-.62 2.36-3.51.43-.17-1.29-.41-3.19",
		 '39137':"m410.2 126.5l.41 3.19-1.1.15-1.08.33.05.38-1.08.33-1.12.15-.77-1.62.28-2.32 1.08-.14 3.32-.44",
		 '39161':"m401.6 129.9l3.88-.48.77 1.62-.26 2.31-.57.07-3.41-.16-.3-2.51-.11-.86",
		 '39099':"m442.4 122.3l.47 2.89-5.43.83-.17-1.09.53-2 4.59-.74.02.1",
		 '39133':"m433.6 120.8l3.71-.57.45 2.74-.53 2-2.94.45-.7-4.63",
		 '39153':"m433.6 120.8l.7 4.63-2.29 1.32-.53-.9-.53-3.71 1.14-.18-.29-.53-.16-.36 1.97-.27",
		 '39103':"m431 122.1l.53 3.71-4.23.58-.54-.86-.12-.95 1.65-1.86.88-.32 1.84-.31",
		 '39077':"m419.9 123.6l4.77-.59.46 2.79-.79 1.07-2.8.37-1 .13-.64-3.75",
		 '39147':"m420 124l.56 3.31-2.71.42-2.95.41-.31-2.24-.14-1.13 5.54-.77",
		 '39143':"m414.1 121.6l.72-.11.08.56 2.58-.35 1.08-.16.05.36 1-.15.38 2.24-5.54.77-.37-3.18",
		 '39173':"m413.9 120.1l.21 1.53.37 3.18.14 1.13-4.41.56-.43-3.17.28-.04.93-.8.26-.49 1.17-1.68 1.47-.22",
		 '39069':"m409.6 122.4l.12.94.43 3.17-3.32.44-.43-3.38-1.08.14-.09-.74 4.38-.58",
		 '39125':"m405.8 127.1l-.28 2.32-3.88.48-.41-3.4 3.31-.41 1.18.44.07.56",
		 '39039':"m405.4 123.7l1.08-.14.43 3.38-1.08.14-.07-.56-1.18-.44-3.31.41-.03-.24-.24-2 4.41-.55",
		 '39055':"m433.2 118l.9-.14-.13-.91 1.64-.26.05-.89.92-.24.44 2.74.33 1.97-3.71.57-.44-2.84",
		 '39085':"m436.3 113.7l.28 1.79-.92.24-.05.89-1.64.26.13.91-.9.14-1.05-.64.36-.61.44-.51.29-.32.56-.51 2.06-1.36.43-.27",
		 '39035':"m432.2 117.3l1.05.64.44 2.84-1.98.27.16.36.29.53-1.14.18-1.84.31-.13-.97-.9.13-.27-2 .07.06.05.03.21.06.59.02 1.25-.24.05-.03.24-.21.66-.61.28-.31.82-.95.09-.12",
		 '39093':"m427.8 119.6l.27 2 .9-.13.13.97-.88.32-1.65 1.86.12.95-1.58.2-.46-2.79-.32-1.85 3.46-1.53",
		 '39043':"m421 120.8l.86.73.61.29.45.14.14.02.17-.02.19-.09.26-.18.73-.52.32 1.85-4.77.59-.31-1.8-1 .15-.05-.36 2.4-.8",
		 '39123':"m416.2 119.7l1.03.24 2.06.12.32-.13 1.06.64.27.18-2.4.8-1.08.16-2.58.35-.08-.56-.72.11-.21-1.53 2.32-.39",
		 '39095':"m410.4 119.2l2.92-.5 2.88 1.03-2.32.39-1.47.22-1.17 1.68-.26.49-.93.8-.28.04-.12-.94-.36-3 1.11-.19",
		 '39051':"m404.7 120.1l4.54-.74.36 3-4.38.58-.89-2.77.36-.06",
		 '39171':"m400.5 120.8l3.85-.59.89 2.77.09.74-4.41.55-.16-1.34-.27-2.14",
		 '40139':"m236.7 186.5l4.99.25 1.24.06-.1 1.94h-.09l-.24 4.52-1.35-.07-5.53-.32-4.19-.26.45-6.39 4.83.27",
		 '40025':"m222 185.5l1.29.1 5.3.44 3.19.22h.14l-.45 6.39-1.34-.09-8.62-.6.48-6.48",
		 '40115':"m307.6 188l.04 3 .02 1.28-3.92.001-.13-4.27 3.98-.03",
		 '40035':"m303 188.1h.67l.13 4.27-.04 2.09-3.32.02-1.07-1.13.21-5.22 3.42-.03",
		 '40097':"m303.7 194.4l-.001 4.52-1.11.001.001 1.13h-.93-2.41v-2.26l.03-3.39h1.1l3.32-.02",
		 '40041':"m307.7 192.3l.03 2.19.64 4.38-2.42.04-2.21.02.001-4.52.04-2.09 3.92-.001",
		 '40001':"m305.9 198.9l2.42-.04.12.77.92 6-3.48.05-.05-3.41.09-1.39-.02-1.99",
		 '40021':"m303.7 199l2.21-.02.02 1.99-.09 1.39.05 3.41-3.34.03-1.45-2.25-.02-.04-.17-1.19.04-.73.06-.12.21-.19h.14l.04-.04.27-.63v-.45h.93l-.001-1.13 1.11-.001",
		 '40135':"m309.4 205.7l.47 3.12v.23l-.64.66-1.98.07-.48-.32-.21-.06-.2.02-.06.03-.4.39-1-.96h-.34l-.51-.14-.15-.05-.16-.15-.32-.44-.83-2.33 3.34-.03 3.48-.05",
		 '40061':"m303.4 208.1l.32.44.16.15.15.05.51.14h.34l1 .96v1.29l-.78.28h-.4l.02 1.88-4.42.04v-1.33h-1.1v-.55l.04-1.21 1.11.03.75.13 1-.59.33-.66.8-.95.17-.11",
		 '40079':"m309.9 209l-.06 5.8-.03 2.66-.02 2.87-5 .08-1.31-2.24-.02-2.26.64-.94.73-.2-.04-3.38h.4l.78-.28v-1.29l.4-.39.06-.03.2-.02.21.06.48.32 1.98-.07.64-.66",
		 '40077':"m304.7 213.3l.02 1.51-.73.2-.64.94.02 2.26-4.8.03v-1.17l.05-3.35 1.39-.001.27-.37 4.42-.04",
		 '40121':"m299.2 210.2l-.04 1.21v.55h1.1v1.33l-.27.37-1.39.001-.05 3.35v1.17l-1.65 1.14h-2.22v-1.13h-2.21v-1.13l.04-3.66.29-.54.51-.69.09-.05.21-.03.38.02 2.08-.44.39-.18 2.03-1.13.7-.17",
		 '40029':"m292.5 217.1v3.39l-.56 1.14-2.78-.001-1.12-1.13.03-2.26h1.11v-1.13h3.31",
		 '40005':"m292.5 218.2h2.21v1.13h2.22v1.13l-1.13.09v4.45h-2.25l-4.41-.001.001-3.39 2.78.001.56-1.14v-2.26",
		 '40127':"m298.6 218.2l4.8-.03 1.31 2.24h-1.15l.04 3.42h-.66l-.45.24-.04.89-6.61.04v-4.45l1.13-.09v-1.13l1.65-1.14",
		 '40089':"m304.7 220.4l5-.08-.03 4.12-.05 7.16-2.79-.8-1.32-.54-1.83-1.47-1.25-1.07-.03-2.76.04-.89.45-.24h.66l-.04-3.42h1.15",
		 '40023':"m302.4 225l.03 2.76-.68-.23h-.08l-.04.02h-.001l-.23.35v.02.02.001l.05.09v.02l.02.11-.02.13-.06.13-.06.06-.28.19h-.08l-.16.02-.31.04-.73.04-.4-.03-1.06-.14-.04-.04-.04-.07v-.08l.03-.09v-.09l-.11-.29-.08-.03-.35-.02-.78.41-.89.47-.89-.09-.83-.65-.19-.23-.02-.07v-2.3l-.57-.41h2.25l6.61-.04",
		 '40013':"m293.6 225l.57.41v2.3l.02.07.19.23.83.65.89.09-.92.34-.52-.09-.62-.12-.15.001-.23.02-1.2.1-.54.13-.09.32-.07.31v.03.04l-.03.1-.03.09-.02.03-.1.1-.001.02-.19.08-.22.06-1.59.39-.1-.14-.46-.63-.14-.05-.13-.001-.55.1h-.001l-.1-.07-1.1-.74v-.03-.06-.16l.04-.21.31-3.17 1.89-.54 4.41.001",
		 '40095':"m283.6 224.8l2.76.03.56.14.41.48v.08l-.04.06-.31 3.17-1.07.48-.53.09-1-.31-.11-.08-.18-.2-.54-1.11-.36-1.52.4-1.32",
		 '40069':"m284.8 220.5l3.31.03 1.12 1.13-.001 3.39-1.89.54.04-.06v-.08l-.41-.48-.56-.14-2.76-.03.02-2.07h.55l.03-2.24h.56",
		 '40123':"m288.3 215.2l.88 1.86v1.13h-1.11l-.03 2.26-3.31-.03v-1.13h-1.11v-.56l.03-2.83.04-1.42 1.62.85 3-.12",
		 '40049':"m283.7 215.9l-.03 2.83-2.22-.03-.55.18-.03.03-.02.13.08.18.17.14.14.41.13.56-.4.07-1.76-.03-2.22-.04-1.08-2.28.05-2.25 7.74.11",
		 '40099':"m279.2 220.4l1.76.03.4-.07-.13-.56-.14-.41-.17-.14-.08-.18.02-.13.03-.03.55-.18 2.22.03v.56h1.11v1.13h-.56l-.03 2.24h-.55-1l-.11-.07-.03-.06v-.03l.12-.09-.02-.28-.03-.03-3.34-.05.03-1.69",
		 '40085':"m276.9 226l6.28.09.36 1.52-.1.06-1.6 2.78-.05.07-.11.09-.15.05-.17-.02-.15-.05-3.11-1.36-.09-.06-.06-.08v-.03l-.03-.07-.21-.96-.82.22.04-2.25",
		 '40019':"m277 220.4l2.22.04-.03 1.69 3.34.05.03.03.02.28-.12.09v.03l.03.06.11.07h1l-.02 2.07-.4 1.32-6.28-.09.03-2.82.05-2.83",
		 '40067':"m270.8 223l6.11.13-.03 2.82-.04 2.25-.38-.27-1.09-.72-.37.46-.56.58-.53.42-.33.1-.13-.001-.94-.43-.12-.11.27-.59.09-.69-.4-.16-.37.09h-.001-.23l-.45-.13h-.02l-.03-.03-.19-.37-.27-3.33",
		 '40137':"m275.9 218.1l1.08 2.28-.05 2.83-6.11-.13.03-2.82.61-2.24 4.44.09",
		 '40033':"m265.3 221.4l.56.001 1.11-.16 2.22-.32.56-.48.37-.25.71.001-.03 2.82.27 3.33-.64-1.06-1.65-.52-.41-.09-.21.12-.43.54-.57.51h-.001l-.3-.11-.5-.81-.24-.21-.24-.16h-.11l.07-2.24h-.55l.02-.94",
		 '40031':"m265.9 215.6l5.54.14-.001 2.25-.61 2.24-.71-.001-.37.25-.56.48-2.22.32-1.11.16-.56-.001.03-.98-.61-.35-1.11-.03.03-1.13.1-3.38 2.17.07",
		 '40141':"m263.7 218.9l-.03 1.13 1.11.03.61.35-.03.98-.02.94h.55l-.07 2.24-.97.3-.69-.03-.98-.24-.98-.59-.15-.08h-.001l-.98-.08h-.43-.2l-.4-.09-.22-.07-.13-.04-.19-1v-.28l.001-.3.17-.05.04-.07v-.1l-.16-.45-.07-.05-.14.02-.06-.19-.02-.25.2-.87.42-.88.24-.33.24-.05.45.03.05.05h.08l.04-.03.02-.31-.08-.15-.14-.17.71.03.35.43v.14l1.84.06",
		 '40065':"m259.3 215.8l.59-.45.1-.001.04.001.22.15.05.08.91 1.85-.48.81.14.17.08.15-.02.31-.04.03h-.08l-.05-.05-.45-.03-.24.05-.24.33-.42.88-.2.87.02.25.06.19.14-.02.07.05.16.45v.1l-.04.07-.17.05v-.001l-.5-.87-.53-.28-.46-.25-.45.81-.02.03-.09.03-.36-.03-.35-.33-.26-.15-.16-.07-.5-.06-.12-.02-.06.02-.41.52h-.41-.09l-.32-.08-.74-.7-.27-.31-.55-.71 1.92.08.1-2.82 1.46.05 1-.04-.05-.12-.001-.28.04-.1.35-.56 1.64.06.05-.12",
		 '40075':"m257.8 212h.52l5.35.18 1.85.03.54.28-.07 3.15-2.17-.07-.1 3.38-1.84-.06v-.14l-.35-.43-.71-.03.48-.81-.91-1.85-.05-.08-.22-.15-.04-.001-.1.001-.59.45-.64-.55-.08-.11-.13-1.52.1-.35.05-.29-.45-.66-.42-.36",
		 '40055':"m252.7 212.9l1.11.05.04-1.13 3.47.14.44.04.42.36.45.66-.05.29-.1.35.13 1.52.08.11.64.55-.05.12-1.64-.06-.35.56-.04.1.001.28.05.12-1 .04-1.46-.05-.56-2.87-1.65-.06.05-1.12",
		 '40057':"m251.5 212.8l1.17.05-.05 1.12 1.65.06.56 2.87-.1 2.82-1.92-.08-1.55-.77.07-2.4.15-3.68",
		 '40101':"m295.9 203h1.2l1.8.68 1.6-.13h.6l1.45 2.25.83 2.33-.17.11-.8.95-.33.66-1 .59-.75-.13-.03-3.36-3.84.02v-2.26h-.55v-1.7",
		 '40091':"m296.5 206.9l3.84-.02.03 3.36-1.11-.03-.7.17-2.03 1.13-.39.18-2.08.44-.38-.02.03-1.79v-1.13h1.1v-.36l.15-.77.4-1.15h1.14",
		 '40063':"m288.9 210.3l4.81.02-.03 1.79-.21.03-.09.05-.51.69-.29.54-.04 3.66h-3.31l-.88-1.86.02-2.66h.51v-2.26",
		 '40133':"m287 208.9l.07.07.06.02.78.05.02-.001.001-.07-.04-.16.09-.44.61-.22.31-.08-.001 2.31v2.26h-.51l-.02 2.66-3 .12.04-6.63.55-.18 1.05.32",
		 '40125':"m281.6 208l5.39.07v.8l-1.05-.32-.55.18-.04 6.63-1.62-.85-2.23.39.08-5.77.02-1.14",
		 '40027':"m276 209l5.53.09-.08 5.77-.57.04-1.32-.35-.13-.08-.05-.05-.07-.21-.08-.73-.16-.63-.5-.83-2.11-2.11-.46-.37.001-.52",
		 '40087':"m276 209.6l.46.37 2.11 2.11.5.83.16.63.08.73.07.21.05.05.13.08 1.32.35.57-.04 2.23-.39-.04 1.42-7.74-.11.07-6.24v-.001",
		 '40051':"m271.6 208.9l1.41.42 1.23.2 1.12.15h.31l.37-.14-.07 6.24-.05 2.25-4.44-.09.001-2.25.11-6.79",
		 '40015':"m269.4 206.6h.06v.14l-.05 2.13 2.19.04-.11 6.79-5.54-.14.07-3.15.04-.05.04-1.33-.02-1.33.05-2.05.04-1.13 3.23.09",
		 '40017':"m270.5 204.4l5.54.1-.05 4.53-.001.52v.001l-.37.14h-.31l-1.12-.15-1.23-.2-1.41-.42-2.19-.04.05-2.13v-.14h-.06l1.16-2.23",
		 '40109':"m276.1 204.5l5.54.1-.05 3.38-.02 1.14-5.53-.09.05-4.53",
		 '40081':"m287 201.8l-.02 3.92-.06 2.29-5.39-.07.05-3.38.03-2.82 5.39.06",
		 '40107':"m291.5 205.8v1.14h1.09v2.28h1.11v1.13l-4.81-.02.001-2.31-.31.08-.61.22-.09.44.04.16-.001.07-.02.001-.78-.05-.06-.02-.07-.07v-.8l.06-2.29 4.46.02",
		 '40111':"m295.9 203v1.7h.55v2.26h-1.14l-.4 1.15-.15.77v.36h-1.1-1.11v-2.28h-1.09v-1.14-2.83h1.65 2.21.56",
		 '40145':"m299.3 200.1h2.41v.45l-.27.63-.04.04h-.14l-.21.19-.06.12-.04.73.17 1.19.02.04h-.6l-1.6.13-1.8-.68h-1.2-.56l.6-3.98h1.48l.5.64.11.2-.05.18-.16.02.03.06.06.04h1.36",
		 '40131':"m295.5 193.3l3.88-.001 1.07 1.13h-1.1l-.03 3.39v2.26h-1.36l-.06-.04-.03-.06.16-.02.05-.18-.11-.2-.5-.64h-1.48l-.53-3.39.02-2.26",
		 '40105':"m298.4 188.1h1.17l-.21 5.22-3.88.001.22-5.22 2.7-.001",
		 '40147':"m293.9 188.1h1.81l-.22 5.22-.02 2.26h-1.95v-7.48h.37",
		 '40143':"m293.5 195.6h1.95l.53 3.39-.6 3.98h-2.21l.04-.58v-2.26l-2.77-.001v-1.12h.31l2.76.02v-3.41",
		 '40037':"m287.1 199l3.34-.001v1.12l2.77.001v2.26l-.04.58h-1.65v2.83l-4.46-.02.02-3.92.02-2.84",
		 '40119':"m283.9 197.9h1.1l-.001 1.14h2.05l-.02 2.84-5.39-.06-2.2-.59.03-2.26 2.2.03.001-1.13 2.23.02",
		 '40083':"m276.2 198.8l2.22.04 1.1.08-.03 2.26 2.2.59-.03 2.82-5.54-.1.08-5.7",
		 '40073':"m270.6 198.7l1.1.02 4.43.09-.08 5.7-5.54-.1.05-2.25.001-1.88.03-1.58",
		 '40011':"m266.2 198.6l4.41.11-.03 1.58-.001 1.88-.05 2.25-1.16 2.23-3.23-.09v-3.38l.08-4.58",
		 '40149':"m266.1 207.7l-.05 2.05.02 1.33-.04 1.33-.04.05-.54-.28-1.85-.03-5.35-.18.12-4.53 7.73.26",
		 '40009':"m258.4 206.9l-.02.56-.12 4.53h-.52l-.44-.04-3.47-.14-.04 1.13-1.11-.05-1.17-.05.09-1.97.13-3.11 4.43.19.04-1.13 2.2.08",
		 '40039':"m258.4 202.9l7.73.25v3.38l-.04 1.13-7.73-.26.02-.56.02-3.94",
		 '40043':"m262.9 198.5l3.3.05-.08 4.58-7.73-.25.04-2.61.06-1.96 4.4.19",
		 '40129':"m258.5 200.3l-.04 2.61-.02 3.94-2.2-.08-.04 1.13-4.43-.19.11-2.55.14-3.4.98-.57 1.1.27.25.31.09.07.51.32.32.12.52.13.16.02.61-.25.04-.03.5-.78.18-.59.03-.05.1-.09.26-.19.18-.09.25-.05h.43",
		 '40045':"m256.4 192.7l-.17 4.49.05 1.08 2.21.08-.06 1.96h-.43l-.25.05-.18.09-.26.19-.1.09-.03.05-.18.59-.5.78-.04.03-.61.25-.16-.02-.52-.13-.32-.12-.51-.32-.09-.07-.25-.31-1.1-.27-.98.57.09-2.27.21-5.76.06-1.21 4.08.17",
		 '40153':"m256.4 192.7l3.19.09.1-2.91v.19l.23.21.17.06.9-.04.13.04.15.09 1.73 2.42-.02 1.2-.1 4.48-4.4-.19-2.21-.08-.05-1.08.17-4.49",
		 '40093':"m271.8 194.8l-.08 3.87-1.1-.02-4.41-.11-3.3-.05.1-4.48 1.2.04.23.46.12.14.15.1.95.51.56.26.19.06.24.03.72-.07.02-.86 4.42.11",
		 '40047':"m278.5 193.3l-.07 5.57-2.22-.04-4.43-.09.08-3.87.04-1.69 6.6.13",
		 '40103':"m282.6 193.3l.48 1.14h-.23l-.02 2.25 1.1.001-.001 1.13-2.23-.02-.001 1.13-2.2-.03-1.1-.08.08-5.57 4.15.05",
		 '40117':"m283.9 197.9l.001-1.13-1.1-.001.02-2.25h.23l.05.27.24.26.14.08.3.07 2.57.43 3.63 2.56.7.87h-.31l-3.34.001h-2.05l.001-1.14h-1.1",
		 '40113':"m285.8 188.1l2.29.001 5.37.02v7.48 3.41l-2.76-.02-.7-.87-3.63-2.56-2.57-.43-.3-.07-.14-.08-.24-.26-.05-.27-.48-1.14.05-.65.55-.59 1.51-.72.2.04.08-.03.76-.47.05-2.82",
		 '40071':"m278.5 188l3.22.04 4.06.04-.05 2.82-.76.47-.08.03-.2-.04-1.51.72-.55.59-.05.65-4.15-.05.08-5.27",
		 '40053':"m275.1 188l3.47.06-.08 5.27-6.6-.13h-.05l.1-4.52v-.73l3.17.06",
		 '40003':"m269.5 187.8l2.4.05v.73l-.1 4.52h.05l-.04 1.69-4.42-.11.07-6.96 2.02.06",
		 '40151':"m258.2 187.5l4.65.16 4.66.14-.07 6.96-.02.86-.72.07-.24-.03-.19-.06-.56-.26-.95-.51-.15-.1-.12-.14-.23-.46-1.2-.04.02-1.2-1.73-2.42-.15-.09-.13-.04-.9.04-.17-.06-.23-.21v-.19l-1.56-2.4",
		 '40059':"m252.6 187.2l4.72.22.87.03 1.56 2.4-.1 2.91-3.19-.09-4.08-.17.23-5.3",
		 '40007':"m242.9 186.8l3.19.13 5.56.23.89.04-.23 5.3-.06 1.21-5.58-.25-4.2-.21.24-4.52h.09l.1-1.94",
		 '41007':"m51.2 34.41l-1.32 4.53-1.09-.27-2-.57-.03-.001v-.13l-2.14-.64 1.2-2.68.11-.4.08-.38.04-.47v-.09l3.52-.48.4-.14.05-.13.58.03.05.03.03.001.04.06.13.23.09.3-.2.58.38.59.07.02",
		 '41009':"m52.6 34.47l.46-.09.42.18 1.46 1.78.09.34.25 1.41-.08 1.23-.07.21-.23 1.57-1.47-.35-.68-.96-2.85-.84 1.32-4.53 1.39.06",
		 '41015':"m34.83 74.8l.84.33-.04.001-.17.13-1.4 1.42v.06l.05.14v.05l-.04.07-.85 1.05-.19.11-.35-.02-.49-.19-.04-.03-.15 1.87.38.23.35.51.09 1.08-.05.33-.23.36-.22.31-.63 1.32.001.35.05.34-3.55-1.12-.36-.75-.42-1.27.09-2.75.32-1.06.27-.71.07-.15.14-3.51v-1.18l1.1-1.21 2 .62.03.06.41 1.06-.04.72-.08.12-.1.35-.15.63-.07.91.04.07 1.3.13.7-.37.14-.1.14-.44.74.03.34.1",
		 '41011':"m34.83 74.8l-.34-.1-.74-.03-.14.44-.14.1-.7.37-1.3-.13-.04-.07.07-.91.15-.63.1-.35.08-.12.04-.72-.41-1.06-.03-.06-2-.62 4.82-7.4 1.71.53 1.34.43.34 2.48-.11 2.33-.62 2.12-.74.53-.51.33-.16-.05-.64 2.13-.06.46",
		 '41033':"m39.78 77.4l-2.57 8.69-2.64-.74-2.79-.77-.05-.34-.001-.35.63-1.32.22-.31.23-.36.05-.33-.09-1.08-.35-.51-.38-.23.15-1.87.04.03.49.19.35.02.19-.11.85-1.05.04-.07v-.05l-.05-.14v-.06l1.4-1.42.17-.13.04-.001-.15.55 1.45.83.41.23.33.15.51-.05.08-.12h.35l.83.25.19.15.09.33",
		 '41029':"m49.4 76.3l-1.79 6.19-.25.76-1.54 5.37-.51-.16-.29-.09-1.13-.31-1.24-.31-3.12-.88-.24-.07-.41-.12-.98-.36-.69-.14h-.02l2.57-8.69.03-.09.88-.36.36.11.95.23 2 .32 1.38-.78 1.32-.6 1.65-.3 1.07.3",
		 '41019':"m52.3 71.1l.17.08.16.21.38.99.05.24v1.05l-1.61 1.92-1.81-.22-.25.88-1.07-.3-1.65.3-1.32.6-1.38.78-2-.32-.95-.23-.36-.11-.88.36-.03.09-.09-.33-.19-.15-.83-.25h-.35l-.08.12-.51.05-.33-.15-.41-.23-1.45-.83.15-.55-.84-.33.06-.46.64-2.13.16.05.51-.33.74-.53.62-2.12.11-2.33-.34-2.48-1.34-.43-1.71-.53 1.5-2.97.83.27.97.29.28.04 1.17-.72 1.1.34.36.23.23.5-.05.15.58 1 .45.4.98.7 1.88.56-.63 2.16.03.9.95.29.12.03.02-.02 1 .25 1.2.35-.37 1.34 2.18.57 3.3.95",
		 '41035':"m54.1 69.3l6 1.65-.88 3.25-.22.51-.37 1.05-1.08 3.84-.58 2.18 3 .83 1.21.36-2.48 9.41-5.22-1.46-7.7-2.29 1.54-5.37.25-.76 1.79-6.19.25-.88 1.81.22 1.61-1.92v-1.05l-.05-.24-.38-.99-.16-.21-.17-.08 1.78-1.85",
		 '41037':"m60.1 70.9l3.09.82.13.04 5.79 1.62 3.9 1.03-.07.33-.99 3.36-.66 1.64-.94 3.26-.56 2.14 1.45.36.73.16 3.12.78-1.53 6.15-.35 1.56-.45 1.79-5.91-1.5-2.66-.67-.36-.09-3.38-.9h-.001l-1.71-.46 2.48-9.41-1.21-.36-3-.83.58-2.18 1.08-3.84.37-1.05.22-.51.88-3.25",
		 '41025':"m76.3 70.6l7.57 1.88.27-1.1 1.37.37.67.23 3.23.78-.78 3.28-.14.42-.36 1.51-.83 3.47-1.28 5.48-.56 2.7-1.23 5.38.07.25-.05.46-.69 2.85-5.39-1.24-5.06-1.28-.33-.09.45-1.79.35-1.56 1.53-6.15-3.12-.78-.73-.16-1.45-.36.56-2.14.94-3.26.66-1.64.99-3.36.07-.33.27-1.11 1.09.28.85-3.27 1.06.27",
		 '41045':"m90.1 70l.35.09.41-.1.71-.6.73-.64.08-.32.23-.14.4-.09 3.42.78.47.49.3.44-.24 1.09 2.6.59-.02.07-.001.11.02.18.13.23 1.12.46.09-.04h.05l.36.13.09.06.48.95v.02l.03.1-.001.13v.001l-.02.04-.001.03-.001.02-.46.56-.35 1.43-.44.83-.27.45-1 2.42-4.77 21.25-10.9-2.48.69-2.85.05-.46-.07-.25 1.23-5.38.56-2.7 1.28-5.48.83-3.47.36-1.51.14-.42.78-3.28.6-2.73",
		 '41001':"m92 61.2l.36-.35.83-.45.18-.02.41.5.46.36.09.03 1.92.48 1.91.44.26-1.09 2.64.59 4.29.99-.44.4-.28.26-.23.47v.26l.03.13.05.13.001.1-.31.53-.21.23-.27.29-.49.53-.86.29-.22.05-.06.03-.21.19-2 2.74-.11.23-.31 2.12-2.6-.59.24-1.09-.3-.44-.47-.49-3.42-.78-.4.09-.23.14-.08.32-.73.64-.71.6-.41.1-.35-.09-2.38-.55.06-.29.03-.08 1.16-1.83.09-.13.54-.47.69-.77.14-.21 1.59-3.42.09-.52.02-.31-.04-.25",
		 '41063':"m97.5 48.64l3.28.79 1.08.26 4.94 1.15.64 1.98.04.08.03.05.41.38.79.72.33.14.16.2.17.22.06.25.31 1.63-.04.16-.22.25-.87.88-1.56 2-.31.65-1.35 2.2-4.29-.99.24-1.07-1.87-.42-.1-1.38-.09-.4-.24-.62-.35-.08-.12-.35-.16-.9-.13-1.18-.02-2.32.24-1.06.33-.31.29-.7-1.98-.46.37-1.77",
		 '41061':"m97.1 50.4l1.98.46-.29.7-.33.31-.24 1.06.02 2.32.13 1.18.16.9.12.35.35.08.24.62.09.4.1 1.38 1.87.42-.24 1.07-2.64-.59-.26 1.09-1.91-.44-1.92-.48-.09-.03-.46-.36-.41-.5-.18.02-.83.45-.36.35-2.32-1.06.26-1.06.1-1.52-.96-.23-.18-.85.26-1.1.78.06 1.64.39 2.25-.41.71-.41.25-.52.53-2.18 1.01-1.46.76-.4",
		 '41023':"m79.5 57.6l4.5 1.11 5.72 1.4 2.32 1.06.04.25-.02.31-.09.52-1.59 3.42-.14.21-.69.77-.54.47-.09.13-1.16 1.83-.03.08-.06.29 2.38.55-.6 2.73-3.23-.78-.67-.23-1.37-.37-.27 1.1-7.57-1.88 1.12-4.35 1.68-6.46.05-.91.32-1.27",
		 '41069':"m72.5 54.77l6.22 1.63.82 1.19-.32 1.27-.05.91-1.68 6.46-1.97-.5.04-1.03-.92-.96-3.25-.83.11-.49.31-1.1.96-3.19-.28-3.37",
		 '41013':"m71.8 61.3l-.31 1.1-.11.49 3.25.83.92.96-.04 1.03 1.97.5-1.12 4.35-1.06-.27-.85 3.27-1.09-.28-3.05-.78-.19-.07.28-1.08-.8-1.37-3.32-.87.26-1.08-.88-.24-1.22-.37.58-2.16-1.02-.33.22-1.02.59-2.15 1.05.29.29-1.08 1.43.38.29-1.07 3.93 1.02",
		 '41017':"m58.3 59.97l6.53 1.82-.59 2.15-.22 1.02 1.02.33-.58 2.16 1.22.37.88.24-.26 1.08 3.32.87.8 1.37-.28 1.08.19.07 3.05.78-.27 1.11-3.9-1.03-5.79-1.62-.13-.04-3.09-.82-6-1.65.27-.45.3-.65.44-1.22 1.24-1.2 1.46-1.84.12-.28.08-.59.14-1.28.08-1.77",
		 '41031':"m60.5 54.78l5.9 1.62.98.29 5.38 1.45-.96 3.19-3.93-1.02-.29 1.07-1.43-.38-.29 1.08-1.05-.29-6.53-1.82 1.44-3.51.8-1.68",
		 '41043':"m48 52.2l.85.41 1.16.25 1.07-.15 1.38.36 2.76 1.11.33.17 1.04.76.97.7.61.2 1.49.42-1.44 3.51-.08 1.77-2.04-.56-2.66-.69-.08.11v.05l.03.04-.05.08-.41.17-.13-.04-1.05-.47-.62-.37-.34-.27-.33-.36-.21-.19-.54-.32-.94-.23-.44.26-.09.27-.14.45-1.96-.57-.34-.13.13-.37.06-.56-.001-.06-.05-.07-.12-.03-.03-.02-.001-.05-.06-.7.83-2.47 1.73-1.02-.43-1.01.16-.35",
		 '41039':"m37.7 55.5l3 .82 1.59.55 1.99.53 1.52.44.12.03.05.07.001.06-.06.56-.13.37.34.13 1.96.57.14-.45.09-.27.44-.26.94.23.54.32.21.19.33.36.34.27.62.37 1.05.47.13.04.41-.17.05-.08-.03-.04v-.05l.08-.11 2.66.69 2.04.56-.14 1.28-.08.59-.12.28-1.46 1.84-1.24 1.2-.44 1.22-.3.65-.27.45-1.78 1.85-3.3-.95-2.18-.57.37-1.34-1.2-.35-1-.25-.02.02-.12-.03-.95-.29-.03-.9.63-2.16-1.88-.56-.98-.7-.45-.4-.58-1 .05-.15-.23-.5-.36-.23-1.1-.34-1.17.72-.28-.04-.97-.29-.83-.27 1.94-4.99",
		 '41003':"m47.87 52.59l.43 1.01-1.73 1.02-.83 2.47.06.7.001.05.03.02-1.52-.44-1.99-.53-1.59-.55.03-.43.12-.35 1.41-.78.57.18.78-2.62.23-.96 3.98 1.2",
		 '41041':"m44 47.1l-1.13 3.77.12.28.89.27-.23.96-.78 2.62-.57-.18-1.41.78-.12.35-.03.43-3-.82.34-.64.51-1.03.05-.13.78-2.16 1.41-3.52.78-1.7 2.44.75",
		 '41053':"m44 47.1l.13-.4 5.72 1.71-.12.43-.74 1.26-.04.001-.47.55-.27.55-.2.95.02.08-.16.35-3.98-1.2-.89-.27-.12-.28 1.13-3.77",
		 '41071':"m47.71 42.94l2.87.86.53.54.5.59.55.79.33.19-.04.76-.75-.33-1 .78v.19l-.14.48-.2.41-.51.2-5.72-1.71-.53-.16.52-1.72 2.8.83.37-1.2.42-1.49",
		 '41047':"m52.4 46.68l.18-.14.44.13.32.29-.31.77-.11.17-.14.16-.08.03-.14.19-.1.17.47 1.08 1.23 2.22.86.72 3.49.95 2.35.66-.43.72-.8 1.68-1.49-.42-.61-.2-.97-.7-1.04-.76-.33-.17-2.76-1.11-1.38-.36-1.07.15-1.16-.25-.85-.41-.02-.08.2-.95.27-.55.47-.55.04-.001.74-1.26.12-.43.51-.2.2-.41.14-.48v-.19l1-.78.75.33",
		 '41005':"m53.99 44.79l.83.25-.02-.34h.18l7.17 2.02.38 2.83-.62.52-.05.09-1.12 2.18-.02.05-.18.89.001.04.37.74-2.35-.66-3.49-.95-.86-.72-1.23-2.22-.47-1.08.1-.17.14-.19.08-.03.14-.16.11-.17.31-.77-.32-.29-.44-.13-.18.14.04-.76 1.5-1.12",
		 '41059':"m88.7 46.52l8.66 2.08.17.04-.37 1.77-.76.4-1.01 1.46-.53 2.18-.25.52-.71.41-2.25.41-1.64-.39-.78-.06-.26 1.1.18.85.96.23-.1 1.52-.26 1.06-5.72-1.4.43-1.05 1.36-5.42-.64-1.3-1.63-.42.83-3.27.17-.61.51.03 1.35.19.25.13.23.06.39.03.32-.05.66-.19.19-.09.25-.21",
		 '41049':"m79.2 46.64h1.23l.86.09.94.09 1.75-.22.51.03-.17.61-.83 3.27 1.63.42.64 1.3-1.36 5.42-.43 1.05-4.5-1.11-.82-1.19.31-.1.28-1.08-.87-1.08-1.02-.6.86-3.24.35-1.22.64-2.45",
		 '41021':"m73.3 46.1l.19-.06.38.09.25.18.23.44.11.16.18.12.7.12 1.78.11.47-.36.29-.07 1.35-.17h.001l-.64 2.45-.35 1.22-.86 3.24 1.02.6.87 1.08-.28 1.08-.31.1-6.22-1.63-.03-.2.31-.29.15-1.12-.32-.83.42-.89.48-.94 1.08-.59.33-.17.11-.02.09-.13-.16-1.2-.64-1.09-.77-.96-.25-.28",
		 '41055':"m70.7 46.66l.47-.14.79-.12.96-.14.39-.18.25.28.77.96.64 1.09.16 1.2-.09.13-.11.02-.33.17-1.08.59-.48.94-.42.89.32.83-.15 1.12-.31.29-1.4-.38-.43-.42-1.25-1.62v-1.71l.92-.69.53-.93.16-.33.02-.09-.32-1.76",
		 '41065':"m66.3 44.72l.62.09.31.06 3.27 1.53.19.26.32 1.76-.02.09-.16.33-.53.93-.92.69v1.71l1.25 1.62.43.42 1.4.38.03.2.28 3.37-5.38-1.45-.98-.29-5.9-1.62.43-.72-.37-.74-.001-.04.18-.89.02-.05 1.12-2.18.05-.09.62-.52 1.89.52.11-.39.77-2.87.44-.67.52-1.44",
		 '41027':"m61.91 44.2l.25-.23.38-.2.53-.03.62.34.24.06.74.06.97.02.61.53-.52 1.44-.44.67-.77 2.87-.11.39-1.89-.52-.38-2.83-.24-2.57",
		 '41051':"m54.89 41.1l-.19.33-.09.23v.32l.18.23.46.48.24.18 2.5 1.54.29.14.26.07h.02.15l3.2-.45.24 2.57-7.17-2.02h-.18l.02.34-.83-.25.16-1.24-.17-.11-.5-.93-.35-.78.29-.98 1.47.35",
		 '41067':"m53.4 40.75l-.29.98.35.78.5.93.17.11-.16 1.24-1.5 1.12-.33-.19-.55-.79-.5-.59-.53-.54-2.87-.86-.18-.05.06-.18 1.23-2.17.81-.73.26-.87 2.85.84.68.96",
		 '41057':"m49.89 38.94l-.26.87-.81.73-1.23 2.17-.06.18.18.05-.42 1.49-.37 1.2-2.8-.83-.52 1.72.53.16-.13.4-2.44-.75.32-.57.04-.07.26-.5.02-.04.07-.17.2-.5 1.97-5.61.17-.58.04-.23v-.09l-.02-.68 2.14.64v.13l.03.001 2 .57 1.09.27",
		 '42101':"m498 125.8l-.62.91-.73 1.36-.38.55-.94-1.26.46-.62-.51-.4.55-.85.55.37 1-1.09.64 1.04",
		 '42017':"m494.4 119.3l1.38.56.73 1.47.94.57.06.04 2.6 2-2.11 1.79-.64-1.04-5.27-2.57 1.1-1.81 1.1-1.2.1.2",
		 '42059':"m444.9 137.2l1.99-1.09.11-.001h1.08 1.83l1.37 3.23-4.91.82-.95.15-.5-3.09",
		 '42051':"m450.7 134.1l1.28-.24 2.28-.57.24-.07.24.06.1.05 1.69.88-.25.67-.45 1.3-.08.63.34 1.51.21.14-.82.15-2.79.49-1.48.25-1.37-3.23.85-2.04",
		 '42125':"m445.3 130.4l2 1.57 2.27.94 1.04.28.09.91-.85 2.04h-1.83-1.08l-.11.001-1.99 1.09-.41-2.53-.5-3.07-.17-1 1.52-.25",
		 '42003':"m451.3 126.8l.4 2.91.03.21v.07l-.51 2.6-.09.23-.48.32-1.04-.28-2.27-.94-2-1.57 1.07-1.44.71-.66-.17-.77 4.38-.68",
		 '42007':"m443 125.8l3.44-.62.48 2.29.17.77-.71.66-1.07 1.44-1.52.25-.34-2.07-.45-2.72",
		 '42073':"m446.5 122.4l-.13 2.85-3.44.62-.11-.62-.47-2.89 2.48-.45h1.08l.59.48",
		 '42019':"m450.2 120.4l1.09 6.42-4.38.68-.48-2.29.13-2.85.7-1.47 2.9-.51.05.02",
		 '42005':"m455 121.2l.32 1.78.31 1.74-1.14 2.42-.55 1.12-2.64-1.37-1.09-6.43.25.87.03.12.22.53 1.04.66.2.03.29.02.18-.05.69-.25 1.04-.42.85-.77",
		 '42031':"m451.7 117.3l.73-.13-.11-.63.4-.07 1.44-.19.21 1.27.58 3.61-.85.77-1.04.42-.69.25-.18.05-.29-.02-.2-.03-1.04-.66-.22-.53-.03-.12-.25-.87-.05-.02.25-1.1.16-.34.18-.27.44-.41.1-.02.57-.3-.11-.65",
		 '42053':"m450.9 114.3l5.25-.93.28 1.74-.08.5-.82.13-.22.44.18 1.06-1.06.31-.21-1.27-1.44.19-.4.07.11.63-.73.13-.13-.69-.46-.79-.27-1.5",
		 '42121':"m450.9 114.3l.27 1.5.46.79.13.69.11.65-.57.3-.1.02-.44.41-.18.27-.16.34-.25 1.1-2.9.51-.69-4.07.34-.37 1.03-1.34 2-.55-.02-.08.95-.18",
		 '42085':"m441.6 117.7l4.92-.84.69 4.07-.7 1.47-.59-.48h-1.08l-2.48.45-.02-.1-.75-4.56",
		 '42039':"m449.4 111.6l.5 2.89.02.08-2 .55-1.03 1.34-.34.37-4.92.84-.02-.14-.73-4.48 5.74-.98 2.14-.39.67-.09",
		 '42049':"m449.1 109.7l.31 1.91-.67.09-2.14.39-5.74.98-.27-1.64 1.66-1.05 2.19-1.81 1.73-1.42.91-.67.06.34.25 1.43.3 1.69 1.28-.22.14-.03",
		 '42129':"m453.9 128.2l-.07.17.13.42.02.02.64.26 2.37.14 1.76-.11-.52 1.56-1.73 3.54-1.69-.88-.1-.05-.24-.06-.24.07-2.28.57-1.28.24-.09-.91.48-.32.09-.23.51-2.6v-.07l-.03-.21-.39-2.9 2.64 1.37",
		 '42063':"m455.3 122.9l3.93-.64.45 2.31-.89 4.5-1.76.11-2.37-.14-.64-.26-.02-.02-.13-.42.07-.17.55-1.12 1.14-2.42-.31-1.74",
		 '42065':"m454.4 117.6l1.06-.31.19-.2 1.05-.31 2.35.88.31.38.07.36-.54.08-.16.79v.03l.001.37.48 2.66-3.93.64-.32-1.78-.58-3.61",
		 '42123':"m454.3 108.8l1.34-.23.13.57.26 1.43-.03.13-.26.05.41 2.65-5.25.93-.95.18-.5-2.89-.31-1.91 5.16-.91",
		 '42083':"m461.3 107.5l.95-.19.95 4.86-2 .59-.67-.24-1.28.26-.49.13-1.47.3-1.21.21-.41-2.65.26-.05.03-.13-.26-1.43-.13-.57.42-.07 2.6-.51 2.71-.5",
		 '42023':"m461.2 112.7l2-.59 2.37 1.44-.35 3.48-1.4.09-.2-1.19-.37-1-1.57.29-.46-2.52",
		 '42047':"m456.1 113.4l1.21-.21 1.47-.3.49-.13 1.28-.26.67.24.46 2.52 1.57-.29.37 1 .2 1.19-3.07.34-.85.17-.5.69-.07-.36-.31-.38-2.35-.88-1.05.31-.19.2-.18-1.06.22-.44.82-.13.08-.5-.28-1.74",
		 '42033':"m463.9 117.2l1.4-.09.68.71.09 1.53.001.31-.12.8-.05.06-.54.22-.46.41-.11.12-1.09 2.26.001.04.17.21.14.09-4.31.8-.45-2.31-.48-2.66-.001-.37v-.03l.16-.79.54-.08.5-.69.85-.17 3.07-.34",
		 '42013':"m463.9 123.7l2.34-.52-.72.68-.1.19-.04.15.52 1.42.53.35.28.43v.09l-.02.12-.12.48-.64 1.98-.07.35-.1.38-1.56-.11-1.83-.34 1.64-5.56-.14-.09",
		 '42021':"m459.7 124.6l4.31-.8-1.64 5.56-.17 1.14-.88.16-1.26.19-.19-.27-.34-.14-1.25.22.52-1.56.89-4.5",
		 '42111':"m462.2 130.5l-.38 2.36.41 3.18-.03.37-.23 1-5.66 1.03-.21-.14-.34-1.51.08-.63.45-1.3.25-.67 1.73-3.54 1.25-.22.34.14.19.27 1.26-.19.88-.16",
		 '42009':"m462.4 129.4l1.83.34 1.56.11.1-.38.07-.35 1.5 1.47-.13.59-.31 1.89-.33 2.15-.27.86-.27.6-4.15.76.23-1 .03-.37-.41-3.18.38-2.36.17-1.14",
		 '42057':"m467.4 130.6l.63.31 1.53.12.69.4-.1.11-.05.09-.23.64-.04.73-.21 1.24-.12.46-.44 1.07-.24.42-2.36.45-.37.07.27-.6.27-.86.33-2.15.31-1.89.13-.59",
		 '42061':"m466.2 123.2l1.75.29 2.17-.72.24-.25-.07.3-.55 1.2-.28.54-.12.32-.07.23-.29 1.88.51.44.1.07.25-.04.64-.19.07-.15.75 1.38-1.05 2.88-.69-.4-1.53-.12-.63-.31-1.5-1.47.64-1.98.12-.48.02-.12v-.09l-.28-.43-.53-.35-.52-1.42.04-.15.1-.19.72-.68",
		 '42055':"m471.3 128.5l.24-.39.78 1.05-.1.16.26.42 1.46 1.67.38.73.69 2.84-.09.02-6.1 1.15.24-.42.44-1.07.12-.46.21-1.24.04-.73.23-.64.05-.09.1-.11 1.05-2.88",
		 '42087':"m473.1 120.4l.17.5.94 1.32-.54.37-.31.23-.59.51-.32.31-.9 1.49-1 1.98-.07.15-.64.19-.25.04-.1-.07-.51-.44.29-1.88.07-.23.12-.32.28-.54.55-1.2.07-.3 2.73-2.09",
		 '42105':"m467.9 106.2l1.24 5.81.17.81-3.68.76-2.37-1.44-.95-4.86 4.28-.81 1.31-.27",
		 '42035':"m469.3 112.8l.1.47.67.64 1.15 1.02 3.22 2.26.19-.04.07.32-1.73 1.08-1.53.64-.89-.94-.15-.29-.36-.19-3.3-.93-.81.9-.68-.71.35-3.48 3.68-.76",
		 '42027':"m465.9 117.8l.81-.9 3.3.93.36.19.15.29.89.94 1.53-.64 1.73-1.08-.44.77-.49 1.16-.66.99-2.73 2.09-.24.25-2.17.72-1.75-.29-2.34.52-.17-.21-.001-.04 1.09-2.26.11-.12.46-.41.54-.22.05-.06.12-.8-.001-.31-.09-1.53",
		 '42119':"m474.6 117.2l1.53-.55.001-.82h.63l.24.55.35 1.41-.001.16.11.23.32.42.32.24.25.07-.32-.02-1.04.21-1.25.53-2.11 1.06-.39.23-.17-.5.66-.99.49-1.16.44-.77-.07-.32",
		 '42093':"m478.2 115.1l.92.03.44.96.5.19.75 1.09.08.17.02.84-.99-.71-.21-.12h-.29l-.66.32-.54.22-.02-.03.09-1.34-.09-1.62",
		 '42117':"m474.3 104.9l1.54 5.1-.04.11-.65.63-2.17.51-3.83.8-1.24-5.81 6-1.22.36-.08",
		 '42081':"m475.8 110l.59-.04 1.07 2.21 1.76.99.45.06 1 .02-1.5 1.91-.92-.03-1.46.74h-.63l-.001.82-1.53.55-.19.04-3.22-2.26-1.15-1.02-.67-.64-.1-.47-.17-.81 3.83-.8 2.17-.51.65-.63.04-.11",
		 '42131':"m482.8 107.8l.03.11 2.31-.5 1.39-.28-.07.1-.25.87-.12.7.34.16-.37 1.12-.14.11-1.39.79-2.56.63.15-2.22.69-1.6",
		 '42113':"m476.4 109.9l5.71-.55-.15 2.22-.08.93-1.2.69-1-.02-.45-.06-1.76-.99-1.07-2.21",
		 '42037':"m481.9 112.5l.14 1.04.06.3.59.85 1.15 2.18-.3.51-.25.48v1.09l-.62.48-1.69-1.07-.02-.84-.08-.17-.75-1.09-.5-.19-.44-.96 1.5-1.91 1.2-.69",
		 '42097':"m476.8 115.8l1.46-.74.09 1.62-.09 1.34.02.03.54-.22.66-.32h.29l.21.12.99.71 1.69 1.07-2.75 2.13-.41.13-1.11.74-.45.18-.05.02-.11-.03-.16-.17.07-.15.08-.09.36-.64.07-.17.05-.17.02-.22-.08-.34.1-1.14.09-.59-.25-.07-.32-.24-.32-.42-.11-.23.001-.16-.35-1.41-.24-.55",
		 '42109':"m478.4 118.9l-.09.59-.1 1.14.08.34-.02.22-.05.17-.07.17-.36.64-.08.09-.03-.09-.06-.05-.99-.17-.68-.03-.38.23-1.34.09-.94-1.32.39-.23 2.11-1.06 1.25-.53 1.04-.21.32.02",
		 '42067':"m477.7 122.3l-.07.15-1.94 1.26-1.03.79-1.37 1.26-.73.73-.82 1.32-.16.32-.24.39-.75-1.38 1-1.98.9-1.49.32-.31.59-.51.31-.23.54-.37 1.34-.09.38-.23.68.03.99.17.06.05.03.09",
		 '42099':"m478.7 126.2l-.54.36-.43.16-3.52 1.32-1.78 1.3-.11-.16-.78-1.05.16-.32.82-1.32.73-.73 1.37-1.26 1.03-.79 1.94-1.26-.08.58-.07 2.6v.05l.13.24.14.08.98.19",
		 '42041':"m478.7 126.2l.79 1.2-.43.6-1.19.99-.66.95-.24.37-.35.32-.68.28-1.1.51-.53.76-.38-.73-1.46-1.67-.26-.42.1-.16.11.16 1.78-1.3 3.52-1.32.43-.16.54-.36",
		 '42001':"m477.2 129.9h.11l.37.11.8.37.71.9.04.18.07.62-.16.58v.05l.27 1.38-2.1.42-2.34.46-.69-2.84.53-.76 1.1-.51.68-.28.35-.32.24-.37",
		 '42133':"m479.5 127.4l1.59 1.08.91.62.63.03.26-.04.22.05 1.87 1.61 1.73 1.69.05.08v.06l-3.18.67-2.1.44-2.05.43-.27-1.38v-.05l.16-.58-.07-.62-.04-.18-.71-.9-.8-.37-.37-.11h-.11l.66-.95 1.19-.99.43-.6",
		 '42043':"m479.9 121.6l1.86.98-1.15 1.3 1.77 3.34.03-.02-1.29 1.28-1.59-1.08-.79-1.2-.98-.19-.14-.08-.13-.24v-.05l.07-2.6.08-.58.16.17.11.03.05-.02.45-.18 1.11-.74.41-.13",
		 '42075':"m481.7 122.6l1.06.57 3.24 1.71-1.33 1.09-1.19.48-1.13.78-.03.02-1.77-3.34 1.15-1.3",
		 '42071':"m486.1 124.8l3.14 1.7-.59.51-.06 2.07.04.33.05.23.13.35-.1.7-.15.57-.13.34-.57.73-.94.2-.06.001v-.06l-.05-.08-1.73-1.69-1.87-1.61-.22-.05-.26.04-.63-.03-.91-.62 1.29-1.28 1.13-.78 1.19-.48 1.33-1.09",
		 '42011':"m491.6 121.9l-1.03 2.95-1.41 1.7-3.14-1.7-3.24-1.71 1.23-.52.46-.12.19-.1 1.55-1.06.43-.53.001-.41.87-.68 4.08 2.17",
		 '42107':"m483.8 116.9l2.1.04 2.76 1.77-1.11 1.02-.87.68-.001.41-.43.53-1.55 1.06-.19.1-.46.12-1.23.52-1.06-.57-1.86-.98 2.75-2.13.62-.48v-1.09l.25-.48.3-.51",
		 '42025':"m485.9 116.9l2.25-1.75-.12-.25-.38-.31-.04-.27v-.11l.03-.06.52-.62.04-.03.23-.08.2.11.31.11 1.51 1.29-.57.7 1.26 1.45-1.2.63-1.27.97-2.76-1.77",
		 '42079':"m482 111.6l2.56-.63 1.39-.79.14-.11.08.23.23.26.57.21.57.12.73.96.23.89.08.13.13.07.31.03-.35.6-.2-.11-.23.08-.04.03-.52.62-.03.06v.11l.04.27.38.31.12.25-2.25 1.75-2.1-.04-1.15-2.18-.59-.85-.06-.3-.14-1.04.08-.93",
		 '42069':"m486.5 107.1l2.43-.52 1.27 4.81-.16.19-.38.28-.7 1.1-.31-.03-.13-.07-.08-.13-.23-.89-.73-.96-.57-.12-.57-.21-.23-.26-.08-.23.37-1.12-.34-.16.12-.7.25-.87.07-.1",
		 '42015':"m477.7 104.2l3.84-.79 1.23 4.34-.69 1.6-5.71.55-.59.04-1.54-5.1 3.45-.69",
		 '42115':"m481.9 103.4l5.81-1.26 1.19 4.49-2.43.52-1.39.28-2.31.5-.03-.11-1.23-4.34.38-.08",
		 '42127':"m487.8 102.1l1.15-.26.18.04.57.4.17.16.3.64 1.18.19 1.53 2.75-.7 2.13-.89 2.1-.21 1.21-1.37.39.38-.28.16-.19-1.27-4.81-1.19-4.49",
		 '42103':"m492.8 106l.26.59.41.41.29.28 1.03.53.17.08.76-.04.42-.05.77.75-.57.41-.27.29-.23.47-.05.14-.12.5-.02.18.04.04.02.21-.06.39-.27.63-.38.54-.13.18-.32.2-1.4-.59v-1.36l-2.14.65.21-1.21.89-2.1.7-2.13",
		 '42089':"m491 111.5l2.14-.65v1.36l1.4.59.32-.2.13-.18.05.07-1.05 1.96-2.92 2.69-1.26-1.45.57-.7-1.51-1.29-.31-.11.35-.6.7-1.1 1.37-.39",
		 '42095':"m494 114.4l.91 1.08.03.08v.08l-.32.99-.2.27-.15.02-.14-.001-.08.02-.16.38.1.78.24.92.06.12-1.1 1.2-.73-.59-1-.61-1.28-.79-.13-.16-.17-.45 1.2-.63 2.92-2.69",
		 '42077':"m489.9 117.7l.17.45.13.16 1.28.79 1 .61.73.59-1.1 1.81-.51-.27-4.08-2.17 1.11-1.02 1.27-.97",
		 '42045':"m494.3 126.4l1.05.96.94 1.26-1.78 1.25-1.84-.07 1.63-3.4",
		 '42091':"m492.1 122.2l5.27 2.57-1 1.09-.55-.37-.55.85.51.4-.46.62-1.05-.96-1.08-.25-.95-.75-.1-.14-.03-.04-1-.41-.55.06 1.03-2.95.51.27",
		 '42029':"m490.6 124.8l.55-.06 1 .41.03.04.1.14.95.75 1.08.25-1.63 3.4-1.54 1.87-3.35.72.57-.73.13-.34.15-.57.1-.7-.13-.35-.05-.23-.04-.33.06-2.07.59-.51 1.41-1.7",
		 '44003':"m526.9 96.3l-.26.99-.53.83-2.81.82-.14-.54-.28-1.06 3.05-.9.03-.001.07-.12-.03-.13.03-.13.03-.03.29-.17.13.02.12.09.19.21.13.14",
		 '44007':"m524.7 93l1.18.12 1.28 2.47-.31.62-.19-.21-.12-.09-.13-.02-.29.17-.03.03-.03.13.03.13-.07.12-.03.001-3.05.9-1.01-3.54 2.75-.84",
		 '44001':"m526.9 96.3l-.13-.14.31-.62 1.08.6.39.36-.39.59-.14.24-.001.05-.71-.22-.39-.86",
		 '44005':"m528.6 96.5l1.29 2.04-.34.44-1.27.62-.37.09-.14-.09v-.06l.28-2.16v-.001l.001-.05.14-.24.39-.59",
		 '44009':"m523.3 98.9l2.81-.82.53-.83.26.79.14.95.06.41.001.16v.24l-.02.13-.08.52-.14.52-3.08 1.56-.26-.02-.24-3.62",
		 '45077':"m431.9 203.6l1.98-.23.47.58.75 1.64.11.3.09.44-.05.06-3.33 3.04-1.04-2.81-.69-1.72.18-.66.18-.28 1.36-.35",
		 '45073':"m430.5 203.9l-.18.28-.18.66.69 1.72 1.04 2.81-1.33 2.07-.65-.09-.65-.45-2.68-1.65-.21-.35.17-.97.69-1.26.96-.74.23-1.03 1-.48 1.1-.53",
		 '45013':"m456.9 230.8l4.19 2.16.62.91.06.11.03.15-.02.19-.12.66-.1.11-2.66 2.78-.62.5-.64.48-.27-.22-1.29-1.04-.17-.27-.09-.29.001-.07.14-.57.57-.5.56-.6.3-.39.08-.36v-.83l-.41-1.53-.05-.12-.19-.28-.29-.36.37-.63",
		 '45049':"m456.9 230.8l-.37.63-.27.56-.19-.04-.32-.12-.09-.24.04-.19-.04-.19-.39-.36-.45-.29-.22.2-2.37 2.84-1.13-.45-.47-1.88.2-.1.46-.31.45-.76.09-.61.03-.48.19-.52.14-.2.12-.11 1.19-1.05 3.39 3.68",
		 '45053':"m456.5 231.4l.29.36.19.28.05.12.41 1.53v.83l-.08.36-.3.39-.56.6-.57.5-.14.57-.001.07.09.29.17.27 1.29 1.04.27.22v.6l-2-.38-.61-.24-.05-.05-.14-.56-.1-.52-.06-.25-.14-.69-1.14-2.32-.96-.79-.21-.08 2.37-2.84.22-.2.45.29.39.36.04.19-.04.19.09.24.32.12.19.04.27-.56",
		 '45067':"m467.1 209l.12-.28.59-.61.56-.25.32-.06 2.19-.22.55.35-.77 2.45-.3.54-.45.63-.04.08.04.39.04.14 1.08 1.63.58.78.41.48-1.5-.71-.13-.23-1.99-1.49-.11-.11-.17-.32-1.14-2.44-.05-.1v-.05l.15-.59",
		 '45033':"m467.2 203.8l4.67 3.41-.49.69-.55-.35-2.19.22-.32.06-.56.25-.59.61-.12.28-1.05-.71 1.19-4.46",
		 '45051':"m471.4 207.9l.49-.69 5.22 3.73 1.37.97-.44.17-.85.51-.4.3-.54.52-.05.05-.21.23-.1.11-.16.21-.22.28-.06.09-.64.98-.38.73-.13.26-2.29-1.35-.41-.48-.58-.78-1.08-1.63-.04-.14-.04-.39.04-.08.45-.63.3-.54.77-2.45",
		 '45019':"m470.4 221.8l1.88 1.03-.5 1.45-.46.12-.84.18-1.14 1.19-.77 1.13-1.59 1.79-1.83 2-.11.05-.09.05-.35.19-.82.59-.42.41-.09-.08-.66.29-.12.15.12.11.001.03-.001.09-.08.02-.2-.05-.46-.63-.63-1.41-.4-.69.24-1.13-.03-.62 1.27-.05 1.4.13.11-.001.41-.95.1-.57-.95-1.08 1.28.64 1.1.45.36.98.16.07.1-.03.09-.08 1.14-1.88.28-.92.62-1.34 1.54-1.41.37-.19",
		 '45035':"m460.6 222.9l.18.12.68.76-.11.28-.1.12.35.24 1.76 1.12.95 1.08-.1.57-.41.95-.11.001-1.4-.13-1.27.05-.23-2.26-.05-.13-.13-.09h-.03l-1.3.1-.72.16-.34-.05-.05-.03-1.97-1.15 2.73-2.46.05.05.06.08.02.1v.14l.03.09.13.19.12.06.55.13.69-.11",
		 '45015':"m462.9 219.4l.19-.16.08-.02.86-.11.3.03.78.46.36.27.16.23.08.06 1.12.6.97.32 2.64.75-.37.19-1.54 1.41-.62 1.34-.28.92-1.14 1.88-.09.08-.1.03-.16-.07-.36-.98-1.1-.45-1.28-.64-1.76-1.12-.35-.24.1-.12.11-.28-.68-.76-.18-.12 1.08-2.63 1.16-.89",
		 '45043':"m470.5 214.3l1.5.71 2.29 1.35-.67 1.28-.03.08-.07.19-.02.06v.02.001l-.22.76-.03.13-.04.18v.04l-.04.68v.36l-.001.59v.02l.03.17v.04l.16.38-.09.45-.06.11-.44.62-.44.27-1.88-1.03-2.64-.75-.07-.18v-.24l.68-1.5 1.22-2.22.13-1.23.14-.36.42-.88.06-.06.15-.06",
		 '45027':"m463.2 213.4l1.17.61-1.53 5.36-1.16.89-1.05.34-.3.06-.14-.001-.33-.11-.43-.28-.34-.32-.55-.66-.58-1.02 1.18-1.83 1.97-1.26 2.08-1.77",
		 '45089':"m470.4 214.1l.13.23-.15.06-.06.06-.42.88-.14.36-.13 1.23-1.22 2.22-.68 1.5v.24l.07.18-.97-.32-1.12-.6-.08-.06-.16-.23-.36-.27-.78-.46-.3-.03-.86.11-.08.02-.19.16 1.53-5.36.92.49.82.14 2.49.05.55-.19.09-.15.51-.39.08-.03.21.001.31.15",
		 '45041':"m465.8 208.3l.27.05 1.05.71-.15.59v.05l.05.1 1.14 2.44.17.32.11.11 1.99 1.49-.31-.15-.21-.001-.08.03-.51.39-.09.15-.55.19-2.49-.05-.82-.14-.92-.49-1.17-.61-.49-1.25-.84-.36 2.14-2.3.99-.99.73-.26",
		 '45069':"m461.9 202.3l2.49-.41 2.74 1.82.14.1-1.19 4.46-.27-.05v-.05l-.31-.8-.17-.32-.4-.16h-.06l-.03.02-.04-.02-1.26-.96-.02-.03-.03-.21.02-.06-1.62-3.34",
		 '45031':"m463.5 205.7l-.02.06.03.21.02.03 1.26.96.04.02.03-.02h.06l.4.16.17.32.31.8v.05l-.73.26-.99.99-2.14 2.3h-.04l-.86-.61-.16-.21.29-.39.05-.55-.43-.69-.44-.44-.36-.11-.91-.18v-.03l2.26-2.04 2.16-.89",
		 '45061':"m459.1 208.6l.91.18.36.11.44.44.43.69-.05.55-.29.39.16.21.86.61h.04l.84.36-.19.55-1.33.9-.16.1-3.42-1.51-.18-.74.13-.15.25-.68-.04-.39-.04-.17.3-.41.98-1.03",
		 '45055':"m457.3 205.6l1.78 2.98v.03l-.98 1.03-.3.41.04.17.04.39-.25.68-.13.15-1.29 1.12-1.02.57-1.81-1.2.28-1.18-.95-2.33 1.25-1.28h.06l.03.42.33.11.71.001 1.19-.44-.36-.68 1.37-.94",
		 '45085':"m457.5 211.5l.18.74 3.42 1.51.16-.1 1.33-.9.19-.55.49 1.25-2.08 1.77-1.97 1.26-1.18 1.83-1.11-1.12-.7-4.57 1.29-1.12",
		 '45017':"m452.5 216.1l.55.34 1.64.7.84.03 1.38.02 1.11 1.12.58 1.02-.12.28-1.09 1.03-.33.09-3.56-1.45-.98-.92.85-.54.29-.29-.15-.1-.29-.13-.55.06-.16.25-.27-.11-.02-1.09.02-.16.25-.16",
		 '45029':"m456.3 224.6l1.97 1.15.05.03.34.05.72-.16 1.3-.1h.03l.13.09.05.13.23 2.26.03.62-.24 1.13.4.69.63 1.41.46.63.2.05.08-.02.001-.09-.001-.03-.12-.11.12-.15.66-.29.09.07-.78.81h-.06-.88l-.61.14-4.19-2.16-3.39-3.68 2.72-2.41.07-.06",
		 '45005':"m453.5 227.1l-1.19 1.05-.12.11-.14.2-.19.52-.03.48-.09.61-.45.76-.46.31-.2.1-2.05-3.62-.88-.49.66-.96.99.15.99.2.86-.14.94-.28 1.36.99",
		 '45009':"m456.2 224.7l-2.72 2.41-1.36-.99-.38-.43-.05-.19-.32-2.64-.09-.46-.13-.36 1.27.56 1.16.4.34.12 1.08.56 1.19 1",
		 '45075':"m452.5 218.3l.98.92 3.56 1.45.33-.09 1.09-1.03.12-.28.55.66.34.32.43.28.33.11.14.001.3-.06 1.05-.34-1.08 2.63-.69.11-.55-.13-.12-.06-.13-.19-.03-.09v-.14l-.02-.1-.06-.08-.05-.05-2.73 2.46-.07.06-1.19-1-1.08-.56-.34-.12-1.16-.4-1.27-.56-1.69-.4 1.64-2.38 1.41-.94",
		 '45011':"m451.1 222l.13.36.09.46.32 2.64.05.19.38.43-.94.28-.86.14-.99-.2-.99-.15-.66.96-1.8-.84 3.6-4.64 1.69.4",
		 '45003':"m446.6 217l.05.07.44.45 1.45 1.09.25.03h.38l.24.03.66.18 1.04.4-1.64 2.38-3.6 4.64-1-.76-.7-.99-.25-.98-.72-.83-.5-.48-.09-.09 3.28-4.21.72-.93",
		 '45063':"m448.4 212.5l1.25 1.06h.31l.39.04.39.23.96.69.18.19.4.61.04.07.15.64-.25.16-.02.16.02 1.09.27.11.16-.25.55-.06.29.13.15.1-.29.29-.85.54-1.41.94-1.04-.4-.66-.18-.24-.03h-.38l-.25-.03-1.45-1.09-.44-.45-.05-.07.66-2.71 1.16-1.77",
		 '45079':"m453.6 210.8l-.28 1.18 1.81 1.2 1.02-.57.7 4.57-1.38-.02-.84-.03-1.64-.7-.55-.34-.15-.64-.04-.07-.4-.61-.18-.19-.96-.69-.39-.23-.39-.04h-.31l-1.25-1.06.14-.57.36.03 1.7-.04 1.63-.74 1.39-.44",
		 '45039':"m452.5 207.3l.16 1.09.95 2.33-1.39.44-1.63.74-1.7.04-.36-.03-1.62-3.1-.15-1 1.82-.18 2.43-.19 1.5-.15",
		 '45071':"m446.9 208.9l1.62 3.1-.14.57-1.16 1.77-.32.08-.46-.11-.31-.11-.69-.39-.81-.34-.27-.08-1.19.3-.29.33.04.19-.91-.75.27-.63.84-1.42.28-.28.65-1.25.48-1.12 1.37.79.37-.49.16-.08.31-.09h.14l.02.001",
		 '45081':"m443 214.2l-.04-.19.29-.33 1.19-.3.27.08.81.34.69.39.31.11.46.11.32-.08-.66 2.71-.72.93-2.05-.37-.26-.16-.14-.12-.42-1.03-.4.04-.77.31 1.12-2.44",
		 '45037':"m441.8 216.6l.77-.31.4-.04.42 1.03.14.12.26.16 2.05.37-3.28 4.21-.18-.16-1.04-.44-.93-1.62-.1-2.67 1.1-.47.39-.17",
		 '45065':"m441.4 216.8l-1.1.47.1 2.67.93 1.62-1.23-1.08-.43-.81-.66-.54-.28-.2-.92-.46h-.05l-.15.06-.07-.02-1.59-.95-.44-.67.59-.87.44-.14.39.17h.12l.68-.07.52-.16.52 1.04.82-.21.66-.11 1.12-.12.04.39",
		 '45047':"m438.5 211.2l.19.2.91.66 1.55.81.9.51.91.75-1.12 2.44-.39.17-.04-.39-1.12.12-.66.11-.82.21-.52-1.04.34-.38.2-.28.14-.37.04-.38-.05-.37-.14-.35-.22-.3-.15-.14-.21-.15-.15-.06-.4-.8.8-.99",
		 '45059':"m442.2 208.3l2.32.45-.48 1.12-.65 1.25-.28.28-.84 1.42-.27.63-.9-.51-1.55-.81-.91-.66-.19-.2-.85-.85.72-.78-.12-.65.32-1.5.26-1.19 3.42 2",
		 '45001':"m437.7 210.4l.85.85-.8.99.4.8.15.06.21.15.15.14.22.3.14.35.05.37-.04.38-.14.37-.2.28-.34.38-.52.16-.68.07h-.12l-.39-.17-.44.14-.59.87-1.88-2.31 3.98-4.17",
		 '45007':"m431.9 209.4l3.33-3.04.49 1.92.04.11.18.41.46.77 1.26.83-3.98 4.17-.4-1.03-1.12-1.57-.35-.54v-.03l-.11-.08-.22-.06-.38.05-.42.1-.13.06 1.33-2.07",
		 '45087':"m443.1 204l.72.09 1.41.06.2.06.13.07.33.25-.19.26 1.07 3.11.15 1-.02-.001h-.14l-.31.09-.16.08-.37.49-1.37-.79-2.32-.45.16-1.4.11-1.82.33-.64.27-.45",
		 '45025':"m457.8 202.9l4.09-.59 1.62 3.34-2.16.89-2.26 2.04-1.78-2.98-2-2.33 2.51-.37",
		 '45057':"m451.1 200.5l.84.86.74.74.07 1.32v.12l.21.04 2.25-.33 2 2.33-1.37.94.36.68-1.19.44-.71-.001-.33-.11-.03-.42h-.06l-1.25 1.28-.16-1.09-.39-1.15.001-.44.15-.53-.23-.65-.23-.58-.11-.18-.61-3.27",
		 '45023':"m451.7 203.8l.11.18.23.58.23.65-.15.53-.001.44.39 1.15-1.5.15-2.43.19-1.82.18-1.07-3.11 6-.94",
		 '45091':"m446.6 200.1l2.97-.27 1.56.69.61 3.27-6 .94.19-.26-.19-.36-.34-.89-.17-1.14v-.07l.69-1.44.3-.42.41-.04",
		 '45021':"m442 200.6l4.19-.44-.3.42-.69 1.44v.07l.17 1.14.34.89.19.36-.33-.25-.13-.07-.2-.06-1.41-.06-.72-.09-.53-.28-.56-1.17-1.12-1.78 1.11-.11",
		 '45083':"m439.9 200.8l.99-.11 1.12 1.78.56 1.17.53.28-.27.45-.33.64-.11 1.82-.16 1.4-3.42-2-.92-.74-.04-.1-.24-2-.3-2.31 2.58-.27",
		 '45045':"m435.9 201.2l1.46-.07.3 2.31.24 2 .04.1.92.74-.26 1.19-.32 1.5.12.65-.72.78-1.26-.83-.46-.77-.18-.41-.04-.11-.49-1.92.05-.06-.09-.44-.11-.3-.75-1.64-.47-.58-1.98.23 1.85-1.26 2.15-1.13",
		 '46105':"m231 69.84l8.46.59-.38 6.07-.35 5.59-8.72-.61.16-2.23.17-2.23.39-4.45h.07l.21-2.73",
		 '46063':"m221.1 69.1l9.42.75.48.04-.21 2.73h-.07l-.39 4.45-.17 2.23-9.82-.78.69-8.6.06-.81",
		 '46033':"m218.8 96l6.3.47 6.38.49-.03.19-.14.49-1.14 1.4-.94.11-.91.82-.12 1.67-9.81-.79.03-.33.38-4.52",
		 '46047':"m218.3 100.8l9.81.79-.45 6.15-4.73-.36-5.14-.42.51-6.16",
		 '46113':"m236.4 99.3l-.18 2.9.26.001-.07 1.12-.2 3.37.26.02-.12 1.67-6.66-.46-1.96-.15.45-6.15.12-1.67.91-.82.94-.11 5.87.41.37-.15",
		 '46007':"m244.6 103.8l-.28 5.06-3.74-.19-2.34-.18-1.94-.13.12-1.67-.26-.02.2-3.37 8.24.5",
		 '46095':"m246.5 98l.06-.07.21-.05.4.05.57.29.49.43 2.98.8 1.67.2.19.14.09.15 1 .08-.03 4.19-9.47-.46.28-5 .13-.29.08-.11.69-.39.46-.08.15.06.05.05",
		 '46121':"m244.6 103.8l9.47.46-.08 5.08-.75-.04-.67-.03-1.83-.09-3.41-.16-3-.16.28-5.06",
		 '46123':"m254.1 100.1l.27.26 1.44.07 1.77-.001.92-.48.94-.29.08.05.24.28-.11 3.14.84.03-.24 6.49-6.24-.26.08-5.08.03-4.19",
		 '46053':"m262.7 103.2l.36.82 3.93 3.81.85.64.98.44.12.001.51.2.27.24.11.16.12.23.02.08v.1l-7.11-.21-2.63-.09.24-6.49 2.2.08",
		 '46015':"m266.3 97.6l1.11.04-.04 5.64-4.69-.15.05-.06.08-.13.03-.12v-.06l-.63-1.49-.04-.07.58-2.72v-.06l-.001-.04-.4-.88 3.98.11",
		 '46003':"m271.9 97.8l.03 1.13-.07 4.56-3.59-.1-.83-.03.04-5.64 4.42.08",
		 '46035':"m275.2 99l-.06 4.54-1.4-.02-1.93-.05.07-4.56 3.32.08",
		 '46043':"m268.2 103.3l3.59.1 1.93.05-.04 3.9-5.14-2.34-.15-.04h-.24l.001-.75.05-.92",
		 '46023':"m262.7 103.2l4.69.15.83.03-.05.92-.001.75h.24l.15.04 5.14 2.34.27.39-.1.22-.26 1.95-.12 1.19-.31.9-.13.02-1.32-.6-1.74-1.56v-.1l-.02-.08-.12-.23-.11-.16-.27-.24-.51-.2-.12-.001-.98-.44-.85-.64-3.93-3.81-.36-.82",
		 '46009':"m274 107.8l4.15.08-.53 4.22-.82-.11-1.09.4-.2.28-.27.24-.13.08-.48.07h-.16l-.17-.03-.2-.09-1.03-.89.13-.02.31-.9.12-1.19.26-1.95.1-.22",
		 '46135':"m278.1 107.9l2.24.03 2.23 1.15.14 3.89-1.09-.93-.67-.08-.89-.04-.59.08-1.9.13.53-4.22",
		 '46067':"m273.7 103.5l1.4.02 3.34.06 1.92.03-.04 4.28-2.24-.03-4.15-.08-.27-.39.04-3.9",
		 '46061':"m276.3 99l2.25.05-.06 4.52-3.34-.06.06-4.54 1.08.03",
		 '46087':"m280.8 99.1l2.23.03-.06 4.51-2.54-.04-1.92-.03.06-4.52 2.22.04",
		 '46125':"m282.9 103.6h1.92l-.05 5.4-2.22-.02-2.23-1.15.04-4.28 2.54.04",
		 '46027':"m284.8 109l1.11.001-.04 4.93-1.98-.74-1.17-.33-.14-3.89 2.22.02",
		 '46127':"m289.2 109.1l-.65 2.25-.38 1-.38 1.73.25.19.31.29.24.39.34.9.34.93-1.82-.47-.68-1-.03-.12v-.12l.04-.15-.05-.22-.1-.23-.77-.49.04-4.93 3.29.02",
		 '46083':"m284.9 103.7l3.04.02.16 3.11.21.47h.67l.09.04.36 1.3-.03.09-.15.4-3.29-.02-1.11-.001.05-5.4",
		 '46099':"m285.2 99.2h4l-.02 4.52h-1.36l-3.04-.02h-1.92l.06-4.51 2.24.02",
		 '46085':"m260.4 94.1l.09 1.2.03.1.17.25.25.25.26.06.31.04.2.08.46.42.21.22.07.18v.15l-.05.3-.06.17.4.88.001.04v.06l-.58 2.72.04.07.63 1.49v.06l-.03.12-.08.13-.05.06-2.2-.08-.84-.03.11-3.14-.24-.28-.08-.05-.94.29-.92.48-1.77.001-1.44-.07-.27-.26-1-.08.06-1.38-.24-.31.18-4.16.02-.34 3.96.17.02.09.31.61.06.1.07.06.08.05.14.04 2.12.42.17-.07.07-.08.05-.1v-.07-.12l-.02-.08-.07-.13-.46-.91.79.36",
		 '46075':"m253.1 94.1l-.18 4.16.24.31-.06 1.38-.09-.15-.19-.14-1.67-.2-2.98-.8-.49-.43-.57-.29-.4-.05-.21.05-.06.07.1-1.98.28-2.23 6.28.31",
		 '46071':"m237.8 95.5l8.73.5-.1 1.98-.05-.05-.15-.06-.46.08-.69.39-.08.11-.13.29-.28 5-8.24-.5.07-1.12-.26-.001.18-2.9.39.19h.38.03l.33-.22.23-3.7h.11",
		 '46117':"m250.3 86.2l.75.45.03.03.13.4v.18l-.14.54-.1.26-.09.14-.04.29.04.18.06.11.1.12.12.08.13.06.6.15-.41.59-.07.09-.05.2-.001.14v.05l.09.12 1.85 1.4.04.03.2.09.86.25.33.05h.38l.14.04.59.2 1.47.61.08.04.13.11.07.18v.03l-.44.55-3.96-.17-.02.34-6.28-.31-1.1-.05.12-2.26.36-4.47.2-.73 1.03.36.31-.09.15-.24.57-.23.76-.12 1.05.21",
		 '46055':"m238.3 88.9l.04-.09.1-.08 2.54-.55.47-.04.25.001.06.1 1.51-.43 2.23-.83.64-.35.24-.31-.2.73-.36 4.47-.12 2.26 1.1.05-.28 2.23-8.73-.5.28-4.51h.06l.14-2.16",
		 '46103':"m219.1 92.2l5.55.46 9.82.72.33-1.21.15-.95.53-1.41.07-.12.12-.13.12-.08h.48l.59.23.38.001.67-.79.08-.04.34-.08-.14 2.16h-.06l-.28 4.51h-.11l-.23 3.7-.33.22h-.03-.38l-.39-.19-.37.15-5.87-.41 1.14-1.4.14-.49.03-.19-6.38-.49-6.3-.47.32-3.7",
		 '46081':"m219.5 86.7l1.42-.19.77-.07 2.32.19-.34 3.55-.08.93 1.12.08-.11 1.5-5.55-.46.04-.5.42-5",
		 '46019':"m230.2 79.2l-.16 2.23h-.001l-.29 3.96-.17 1.64-5.53-.42-2.32-.19-.77.07-1.42.19.45-5.49.39-2.76 9.82.78",
		 '46093':"m238.8 82.1l-.43 6.79-.35.08-.08.04-.67.79-.38-.001-.59-.23h-.48l-.12.08-.12.13-.07.12-.53 1.41-.15.95-.33 1.21-9.82-.72.11-1.5-1.12-.08.08-.93.34-3.55 5.53.42.17-1.64.29-3.96h.001l8.72.61",
		 '46137':"m239.1 76.5l4.8.29-.6 5.58-.03.58 3.32.18-.18 3.18-.24.31-.64.35-2.23.83-1.51.43-.06-.1-.25-.001-.47.04-2.54.55-.1.08-.04.09.43-6.79.35-5.59",
		 '46041':"m254.1 77.3l.56 1.21v.08l-.09.26-.25.29-.04.07-.04.11.07.34.4.6.02.14-.24.98-.46 1.08-.38.56-.15-.02-.1.03-.19.21-.13.22-.001.24.04.64.02.14.16.5-.001.1-.09.13-.15.17-1.07.95-.17.07-.34-.08-.23-.08-.27-.29-.15-.25-.07-.08-.11-.1-.17-.07h-.04l-.11.07-.09.16-.04.1-.03.13v.13l.03.08.06.06-1.05-.21-.76.12-.57.23-.15.24-.31.09-1.03-.36.18-3.18-3.32-.18.03-.58.6-5.58 10.22.52",
		 '46129':"m253.4 75.7l6.45.3h.09l-.19 4.48-5-.22-.4-.6-.07-.34.04-.11.04-.07.25-.29.09-.26v-.08l-.56-1.21-.73-1.61",
		 '46107':"m254.7 80.3l5 .22 1.23.05-.16 4.49-.93-.04-6.68-.28-.06-.2-.02-.14-.04-.64.001-.24.13-.22.19-.21.1-.03.15.02.38-.56.46-1.08.24-.98-.02-.14",
		 '46119':"m259.9 84.98l-.19 4.51-7.81-.33-.6-.15-.13-.06-.12-.08-.1-.12-.06-.11-.04-.18.04-.29.09-.14.1-.26.14-.54v-.18l-.13-.4-.03-.03-.75-.45-.06-.06-.03-.08v-.13l.03-.13.04-.1.09-.16.11-.07h.04l.17.07.11.1.07.08.15.25.27.29.23.08.34.08.17-.07 1.07-.95.15-.17.09-.13.001-.1-.09-.3 6.68.28",
		 '46065':"m259.7 89.5l-.05 4.27.46.91.07.13.02.08v.12.07l-.05.1-.07.08-.17.07-2.12-.42-.14-.04-.08-.05-.07-.06-.06-.1-.31-.61-.02-.09.44-.55v-.03l-.07-.18-.13-.11-.08-.04-1.47-.61-.59-.2-.14-.04h-.38l-.33-.05-.86-.25-.2-.09-.04-.03-1.85-1.4-.09-.12v-.05l.001-.14.05-.2.07-.09.41-.59 7.81.33",
		 '46017':"m260.4 94.1l2.56.06 3.45.09-.11 3.38-3.98-.11.06-.17.05-.3v-.15l-.07-.18-.21-.22-.46-.42-.2-.08-.31-.04-.26-.06-.25-.25-.17-.25-.03-.1-.09-1.2",
		 '46073':"m266.4 94.3l2.09.06 3.41.09-.08 3.34-4.42-.08-1.11-.04.11-3.38",
		 '46111':"m271.9 94.4l4.42.12h.04l-.1 4.47-1.08-.03-3.32-.08-.03-1.13.08-3.34",
		 '46097':"m280.8 94.6l-.06 4.48-2.22-.04-2.25-.05.1-4.47 4.43.08",
		 '46079':"m280.8 94.6l2.22.02 2.22.03-.04 4.49-2.24-.02-2.23-.03.06-4.48",
		 '46101':"m289.3 94.7l-.03 4.49h-4l.04-4.49 4 .001",
		 '46011':"m283.1 90.1l2.23.001 3.99.03-.03 4.48-4-.001-2.22-.03.07-4.48",
		 '46057':"m285.4 86.8l-.04 3.37-2.23-.001-3.35-.06.06-3.36 5.56.06",
		 '46077':"m279.8 90.1l3.35.06-.07 4.48-2.22-.02-4.43-.08h-.04l.09-4.51 3.32.06",
		 '46005':"m275.3 88.9l1.12 1.15-.09 4.51-4.42-.12-3.41-.09.11-5.65 6.68.19",
		 '46069':"m260.8 85l2.39.09-.17 4.51h.11l-.15 4.56-2.56-.06-.79-.36.05-4.27.19-4.51.93.04",
		 '46059':"m263.2 85.1l5.44.17v3.4l-.11 5.65-2.09-.06-3.45-.09.15-4.56h-.11l.17-4.51",
		 '46045':"m259.9 76l8.89.33-.11 4.48-7.74-.28-1.23-.05.19-4.48",
		 '46049':"m268.7 80.8h.04l-.12 4.47-5.44-.17-2.39-.09.16-4.49 7.74.28",
		 '46115':"m275.5 81l-.03 1.13-.08 3.18v.18h.05l-.07 3.36-6.68-.19v-3.4l.12-4.47 6.7.21",
		 '46025':"m279.9 82.2l-.04 4.48-.06 3.36-3.32-.06-1.12-1.15.07-3.36h-.05v-.18l.08-3.18 4.44.1",
		 '46029':"m279.9 82.2l2.44.03 3.12.05v2.23l-.04 2.23-5.56-.06.04-4.48",
		 '46039':"m289.4 84.6v2.22l-.001 2.25v1.13l-3.99-.03.04-3.37.04-2.23 3.93.02",
		 '46051':"m289.2 80.1l.15.74v3.76l-3.93-.02v-2.23l-3.12-.05.02-1.89 1.99.03.67-.37 4.22.03",
		 '46037':"m275.6 76.5l5.49.11.07.37 1.25.03-.06 5.24-2.44-.03-4.44-.1.14-5.62",
		 '46109':"m288.4 72.2l-.05.56v.03.001l-.04.34-.03.28-.02.12v.06.03.02l-.001.03-.63.94-.18.18-.35.19-.31.2-.82.66-.001.02-.02.02-.001.001-.03.07-.13.43.04.05.16.21.63.84 1.32 1.47.87.42.3.24.17.4-4.22-.03-.67.37-1.99-.03.04-3.36.05-4.86 5.99.06",
		 '46091':"m282.4 72.2l-.05 4.86-1.25-.03-.07-.37-5.49-.11.1-4.47 6.76.12",
		 '46013':"m269 71.85l6.45.19h.27l-.1 4.47-.11 4.49-6.7-.21h-.04l.11-4.48.13-4.48",
		 '46089':"m260 71.5l6.41.24 2.53.09-.13 4.48-8.89-.33h-.09l.17-4.47",
		 '46021':"m258.6 71.5l1.46.07-.17 4.47-6.45-.3.15-.51.1-.19.18-.12h.39l.07-.02.16-.1.05-.07.07-.16v-.23l-.55-1.97-.05-.14-.97-1 5.57.27",
		 '46031':"m239.5 70.4h.06.02.15l1.09.07 1.29.08 1.36.09 1.13.06.52.03.92.05 2.61.14.82.05 1.08.05h.07.2l2.05.1h.11l.97 1 .05.14.55 1.97v.23l-.07.16-.05.07-.16.1-.07.02h-.39l-.18.12-.1.19-.15.51.73 1.61-10.22-.52-4.8-.29.38-6.07h.02",
		 '47163':"m438.6 182.3l-1.39 1.6-3 1.91-.47.06-.16-.05-.51-.37-.36-.07-.61.19-1.27.25-.57.09.43-2.19 3.2-.48.51-.08.99-.14 2.16-.31.07-.3.98-.12",
		 '47091':"m438.6 182.3l1.83-.25-.27.35-.05 2.64.04.61-.22.07h-.02-.16l-.27-.09-.06-.15-.05.03h-.001l-.51.35-.47.53-.08.21-.11.31-.18.07-.34-.29-.7-.73-.16-.31.8-1.35v-.04l-.4-.4 1.39-1.6",
		 '47109':"m373.2 205.9l.22 5-4.25.34-.2-3.27.78-.39.12-.5.19-.34.27-.35.5-.25.19-.08.58-.09 1.6-.07",
		 '47023':"m370.4 203.5l2.8 1.98.02.49-1.6.07-.58.09-.19.08-.5.25-.27.35-.19.34-.12.5-.78.39-.22-.97-.55-.76-.04-.56 2.21-2.26",
		 '47069':"m365.7 205.9l2.47-.14.04.56.55.76.22.97.2 3.27-.38.03-2.03.16-1.89.14-.23-5.22 1.06-.52",
		 '47047':"m361.6 206.5l3-.13.23 5.22-1.62.11-3.06.2-.06-1.74-.1-1.69-.05-1.51 1.63-.47",
		 '47075':"m362.4 201.1v.04l.15.19.11.12.26.19.44.21h.22l1.11.35.79.3.15 3.39-1.06.52-3 .13-.45-2.28.08-.04.24-.18.31-1.91v-.09h-.13v-.18l.06-.22.28-.59.48.04",
		 '47113':"m370.2 200.9l.13 2.61-2.21 2.26-2.47.14-.15-3.39 1.49-1.47 2.17-.09 1.04-.06",
		 '47033':"m364 198.6l.58.37.11.7.1.26.2.4 1.35.31.68.38-1.49 1.47-.79-.3-1.11-.35h-.22l-.44-.21-.26-.19-.11-.12-.15-.19v-.04l.08-.83 1.48-1.65",
		 '47053':"m364.2 195.9l1.99-.38.3.35.77.68.08.04.08-.02.92.27.76.55.12 3.53-2.17.09-.68-.38-1.35-.31-.2-.4-.1-.26-.11-.7-.58-.37.16-2.68",
		 '47017':"m370.7 196.1l3.31.13.65 3.52.02.38-4.05.22-.15.15-.13.18-.06.17-1.04.06-.12-3.53 1.59-1.27",
		 '47183':"m367.4 191.8l3.08-.22.22 4.56-1.59 1.27-.76-.55-.92-.27-.08.02-.08-.04-.77-.68-.3-.35-.08-2.42.03-.04h.19l.15.04.15.14.16.02.7-.28-.04-.78-.17-.41h.11",
		 '47131':"m367.2 191.8h.08l.17.41.04.78-.7.28-.16-.02-.15-.14-.15-.04h-.19l-.03.04.08 2.42-1.99.38-3.39.13 1.14-3.86 5.25-.38",
		 '47095':"m361.9 192.2l-1.14 3.86-1.49.46.74-2-.08-2.1.56-.03.7-.07.73-.1",
		 '47045':"m360.8 196l3.39-.13-.16 2.68-1.48 1.65-.13-.23-.09-.11-.51-.46-.87.04-1.49.57-.51.13-.55-1.22.91-2.47 1.49-.46",
		 '47097':"m358.9 200.2l.51-.13 1.49-.57.87-.04.51.46.09.11.13.23-.08.83-.48-.04-.28.59-.06.22v.18h.13v.09l-.31 1.91-.24.18-.08.04-.46-.33-.83-.45-1.43.14-.31.11-.24.18-.54.5-.2.24-.19.43.28-2.73.91-1.94.07-.06.03-.02.23-.12.19-.03h.29",
		 '47167':"m361.1 204.2l.45 2.28-1.63.47-.2-.14-.55-.23-.07-.001-3.45.39-.49.24-.7-.69 2.45-1.47.19-.43.2-.24.54-.5.24-.18.31-.11 1.43-.14.83.45.46.33",
		 '47157':"m355.2 207.2l.49-.24 3.45-.39.07.001.55.23.2.14.05 1.51.1 1.69.06 1.74-.84.06-6.13.38-.02-.18.13-.4 1.05-.35 1.11-.85.16-.19.02-.03v-.02-.001l-.42-2.96-.04-.14",
		 '47077':"m374.6 200.1l.1 2.7-.46 1.09.06 1.37h.07l-1.24.16-2.8-1.98-.13-2.61.06-.17.13-.18.15-.15 4.05-.22",
		 '47079':"m370.7 191.5l4.48-.31.8 1.71-1.06.09-.001.02-.04.43.02.2.23.73-.81 1.4-.35.44-3.31-.13-.22-4.56.28-.02",
		 '47005':"m376 192.9l.1.09.45 1.4.43 1 .16 3v.25l-.07.54-.05.15-.17.25-.06.33-2.18-.21-.65-3.52.35-.44.81-1.4-.23-.73-.02-.2.04-.43.001-.02 1.06-.09",
		 '47039':"m374.6 199.8l2.18.21-.33.95-.17.58.15 3.28.1.18.08.09.07.04.15-.001-.15.42-2.29-.22h-.07l-.06-1.37.46-1.09-.1-2.7-.02-.38",
		 '47071':"m373.2 205.4l1.24-.16 2.29.22.02.22.17.85.47 1.63.18 2.25-2.24.32-1.71.14-.18.001-.22-5-.02-.49",
		 '47099':"m384.2 204.2l.93.06-.02.35v.33l.31 3.46.06 1.49-4 .31-.13-5.14.42-.04.87-.36-.04-.48 1.28-.1.34.12",
		 '47181':"m379.8 204.1l1.57.96.13 5.14-3.97.31-.18-2.25-.47-1.63-.17-.85-.02-.22.15-.42 2.95-1.03",
		 '47101':"m383.5 201.4l-.1.55v.27l.04.16.16.14.25.05.29.23.26.52-.04.47-.03.15-.12.19-.34-.12-1.28.1.04.48-.87.36-.42.04-1.57-.96.47-1.69.4-.27.7-.1.95.11.08-.02.42-.22.7-.45",
		 '47135':"m379.4 199.5l.87 2.92-.47 1.69-2.95 1.03-.15.001-.07-.04-.08-.09-.1-.18-.15-3.28.17-.58.33-.95.06-.33 1.25.16.26-.22.18-.04.86-.1",
		 '47081':"m384.6 197.4l.02 1.42-1.05 2.59-.7.45-.42.22-.08.02-.95-.11-.7.1-.4.27-.87-2.92 1.71-2.16 3.45.13",
		 '47085':"m380.6 194.9l.54 2.36-1.71 2.16-.86.1-.18.04-.26.22-1.25-.16.17-.25.05-.15.07-.54v-.25l-.16-3-.43-1 1.19.04.37-.19h.42l1.82.41.22.23",
		 '47083':"m380.1 192.5l.85.35-.37 2.08-.22-.23-1.82-.41h-.42l-.37.19-1.19-.04-.45-1.4 1.12.19.2.001.3-.02.2-.04.22-.07.28-.14.18-.13.14-.13 1.33-.21",
		 '47161':"m378.7 189.1l.54-.06.81 3.46-1.33.21-.14.13-.18.13-.28.14-.22.07-.2.04-.3.02-.2-.001-1.12-.19-.1-.09-.8-1.71-.37-2.33.6-.04 1.68.03v.4l1.63-.19",
		 '47125':"m384.7 188.5l.17 2.42-1.55 1.88-2.35.04-.85-.35-.81-3.46 3.12-.32 2.26-.22",
		 '47147':"m388.2 188.1h2.06l-.27.68-.57 1.7-.23.51-.59.25-1.6.44-2.21-.73-.17-2.42.55-.06 3-.36",
		 '47021':"m384.8 190.9l2.21.73-1.03 4.5-1.33.07.08-1.84-.14-.48-.21-.15.28-.43.02-.35-.03-.07-.24-.09-.53-.07-.62.07 1.55-1.88zm-.08 2.12l-.05.06.13-.06-.03-.03-.02.04-.03-.001",
		 '47043':"m380.9 192.8l2.35-.04.62-.07.53.07.24.09.03.07-.02.35-.28.43.21.15.14.48-.08 1.84-.12 1.19-3.45-.13-.54-2.36.37-2.08",
		 '47187':"m384.7 196.2l1.33-.07.21.72.14-.02.94-.91 1.48.08 1.82.71-.37 3.4-.99.14-4.66-1.43-.02-1.42.12-1.19",
		 '47119':"m384.6 198.8l4.66 1.43-1.5 3.92-2.57.03-.93-.06.12-.19.03-.15.04-.47-.26-.52-.29-.23-.25-.05-.16-.14-.04-.16v-.27l.1-.55 1.05-2.59",
		 '47117':"m389.2 200.3l.99-.14.51.27v2.53l.03.46.1.26.51.85.16.02.04-.001-2.25 1.54-1.57-1.85 1.5-3.92",
		 '47055':"m385.2 204.2l2.57-.03 1.57 1.85.26 3.52-3.92.27-.13.001-.06-1.49-.31-3.46v-.33l.02-.35",
		 '47103':"m392.3 204.6l2.46 2.72.17 1.76-4.86.48-.55.05-.26-3.52 2.25-1.54.79.06",
		 '47127':"m395.1 203.5l.06 1.02-.31 2.72-2.46-2.72 2.71-1.03",
		 '47003':"m394.9 200.7l.16 2.85-2.71 1.03-.79-.06-.04.001-.16-.02-.51-.85-.1-.26-.03-.46v-2.53l.001-.21.15-.03.82-.02 2.57.29.6.25",
		 '47149':"m391.5 194.9l.45.3 1.65 1 .17.07.69.17.97-.02-.22 3.3-.3.97-.6-.25-2.57-.29-.82.02-.15.03-.001.21-.51-.27.37-3.4.9-1.82",
		 '47037':"m387 191.7l1.6-.44 1.85 1.91 1 1.79-.9 1.82-1.82-.71-1.48-.08-.94.91-.14.02-.21-.72 1.03-4.5",
		 '47165':"m391.8 187.7l2.13-.08-.04 1.99-.37 1.87-.13.47-.36-.04-.14-.13-.03-.2-.06-.08-.11-.06h-.06l-.84.38-1.05.73-.3.59-1.85-1.91.59-.25.23-.51.57-1.7.27-.68 1.54-.38",
		 '47189':"m395.1 192l1.07 2.63.63 1.57-1.42.23-.97.02-.69-.17-.17-.07-1.65-1-.45-.3-1-1.79.3-.59 1.05-.73.84-.38h.06l.11.06.06.08.03.2.14.13.36.04.13-.47 1.57.51",
		 '47015':"m396.8 196.2l1.5 1.42-.78 2.43-2.36-.32.22-3.3 1.42-.23",
		 '47031':"m397.5 200l1.31 1.64-.03.02-.02.07.04.96.12.65.17.15-.07.42-.2.7-.06.12-1.35-.57-1.28-.12-.95.33-.1.1v.05l-.06-1.02-.16-2.85.3-.97 2.36.32",
		 '47051':"m395.1 204.6v-.05l.1-.1.95-.33 1.28.12 1.35.57.51.8.42 3-4.68.46h-.08l-.17-1.76.31-2.72",
		 '47115':"m399.3 205.5l3.14-1.59.12.18.89.36.27.07.42.42.16.23.16.65v.11l-.65 2.21-1.39.14-2.71.24-.42-3",
		 '47153':"m403.5 200.6l2.36 2.52-1.38 2.86v-.11l-.16-.65-.16-.23-.42-.42-.27-.07-.89-.36-.12-.18-.81-2.69.51-.07 1.33-.6",
		 '47061':"m401.6 201.3l.81 2.69-3.14 1.59-.51-.8.06-.12.2-.7.07-.42-.17-.15-.12-.65-.04-.96.02-.07.03-.02.47.07h.16l.64-.21.52-.11.99-.15",
		 '47175':"m404.8 197.5l-.02.07.23.25v.02l-1.47 2.75-1.33.6-.84-3.33 3.44-.36",
		 '47177':"m400.4 197.5l.87.38.84 3.33-.51.07-.99.15-.52.11-.64.21h-.16l-.47-.07-1.31-1.64.78-2.43 2.11-.12",
		 '47185':"m404.5 195.1l.22 2.41-3.44.36-.87-.38.13-2.42v-.08l.05-.09.19-.19.55-.49.15-.07.38-.09 1.44.22.51.19.16.12.55.5",
		 '47041':"m398.7 193.7l1.84 1.32-.13 2.42-2.11.12-1.5-1.42-.63-1.57 2.53-.86",
		 '47141':"m398.9 192.3l1.5.11.65-.2.32-.15.07-.1.3-.51v-.3l.87.77 2.33.83h.88l.21.06-.48.56-.86.02-.1.08v1.59l-.55-.5-.16-.12-.51-.19-1.44-.22-.38.09-.15.07-.55.49-.19.19-.05.09v.08l-1.84-1.32.13-1.4",
		 '47169':"m396.6 190.1l-1.44 1.85-1.57-.51.37-1.87 2.64.53",
		 '47111':"m396.3 187.5l1.93-.12-.09 1.61-.02 1.14-1.56-.02-2.64-.53.04-1.99 2.35-.1",
		 '47159':"m396.6 190.1l1.56.02.73 2.2-.13 1.4-2.53.86-1.07-2.63 1.44-1.85",
		 '47087':"m398.1 189l.45-.28 1.32.21.69.17.52.38.41.41.15 1.31v.3l-.3.51-.07.1-.32.15-.65.2-1.5-.11-.73-2.2.02-1.14",
		 '47133':"m403.5 188l1.87 1.41.13 1.32.18.46.4.89-.31.71h-.88l-2.33-.83-.87-.77-.15-1.31 1.97-1.89",
		 '47027':"m403.5 186.8l.05 1.24-1.97 1.89-.41-.41-.52-.38-.69-.17-1.32-.21-.45.28.09-1.61 3.6-.35 1.43-.26.2-.03",
		 '47137':"m406.6 186.6l1.88-.09.67.95-1.4-.42-.44-.07-.4.02-.63.2-.39.38-.23.38-.11.25-.19 1.24-1.87-1.41-.05-1.24 3.16-.2",
		 '47007':"m405 197.8l1.24-.19.49.05h.57l.4-.02.79-.19-1.1 1.91-.6.77-.28 1.08.15.42-.78 1.44-2.36-2.52 1.47-2.75",
		 '47049':"m409.2 187.4l.55 1.95-1.58 1.21-.08.11-.28 1.04.15.66-1.96.46-.21-.06.31-.71-.4-.89-.18-.46-.13-1.32.19-1.24.11-.25.23-.38.39-.38.63-.2.4-.02.44.07 1.4.42",
		 '47035':"m406 192.8l1.96-.46 2.71 2.92-.92 1.2-1.29.98-.79.19-.4.02h-.57l-.49-.05-1.24.19v-.02l-.23-.25.02-.07-.22-2.41v-1.59l.1-.08.86-.02.48-.56",
		 '47143':"m410.4 197.4l.13.2.03.08-.04.5-.56 1.91-1.07 1.57-.07.05-.93.48-1.32-.48-.15-.42.28-1.08.6-.77 1.1-1.91 1.29-.98.71.86",
		 '47121':"m411.7 198.6l-2.04 4.09-.8.91-.91-1.48.93-.48.07-.05 1.07-1.57.56-1.91.04-.5-.03-.08-.13-.2 1.24 1.27",
		 '47065':"m407.9 202.2l.91 1.48-.42 1.18-.06.23-.09.76.37 1.02.34.72h-.03l-2.97.37-1.03.14-1.13.12.65-2.21 1.38-2.86.78-1.44 1.32.48",
		 '47011':"m409.7 202.7l1.79 1.21-.37 3.35-.36.05-1.74.2-.34-.72-.37-1.02.09-.76.06-.23.42-1.18.8-.91",
		 '47139':"m413.5 203.1l2.24.76.04 2.85-3.12.38-1.61.2.37-3.35.29-.25.49-.19 1.13-.12.18-.28",
		 '47123':"m416.2 198.5l.09.14 1.09.62.51-.09 1.09.58.001.001-.001.05-.18.28-.42 2.31-.24.33-.39.33-1.11.03-.85.75-2.24-.76.81-.68-.09-.88-1.07-1.87-.43-.69-.001-.14-.04-.07.35-.45.3-.17.23-.11.07-.001 1.04-.03 1.46.43.06.09z",
		 '47107':"m412.1 198.6l.64.18.04.07.001.14.43.69 1.07 1.87.09.88-.81.68-.18.28-1.13.12-.49.19-.29.25-1.79-1.21 2.04-4.09.37-.04",
		 '47145':"m412.5 198.2l-.42.39-.37.04-1.24-1.27-.71-.86.92-1.2 1.5-1.05.8-.25.34-.3.63-.64.94 1.7.11.16-.19-.06-.49.19-1.64 2.57-.18.56zm0 0",
		 '47129':"m412.7 191.7l1.2 1.35-.63.64-.34.3-.8.25-1.5 1.05-2.71-2.92-.15-.66.28-1.04.08-.11 1.58-1.21 1.08 1.19.48.36 1.05.4.38.41",
		 '47151':"m408.6 186.5l5.29-.5-.06 1.13-.43 3.1-.04.75-.62.77-.38-.41-1.05-.4-.48-.36-1.08-1.19-.55-1.95-.67-.95h.08",
		 '47013':"m416.7 185.7l1.12 2.08-.25.37-.25 1.29-.11.22-.15.18-3.69 1.16.04-.75.43-3.1.06-1.13.35-.04 2.44-.28",
		 '47001':"m417 189.8l.78 1h-.03l-.18.17-1.1 1.45.001.17.23.4-1.7 1.68-.18.12-.94-1.7-1.2-1.35.62-.77 3.69-1.16",
		 '47105':"m415 194.9l1.15 1.06.08 2.54-.06-.09-1.46-.43-1.04.03-.07.001-.23.11-.3.17-.35.45-.64-.18.42-.39.18-.56 1.64-2.57.49-.19.19.06",
		 '47009':"m419.8 194.4l.88 1.52.44.66.36.17.2 1.56-2.82 1.78-.09-.03.18-.28.001-.05-.001-.001-1.09-.58-.51.09-1.09-.62-.09-.14-.08-2.54.16-.51 1.45-.72.55.04.65.33h.15l.74-.67",
		 '47155':"m424.8 193.7l.88 2.25.05.25-.37.55-1.79 1.42-.13.08-1.47.15h-.19-.05l-.2-1.56-.36-.17-.44-.66-.88-1.52.99-2.11.71.2 2.1.84 1.15.3",
		 '47093':"m420 190.8l.81.99.001.56-.99 2.11-.74.67h-.15l-.65-.33-.55-.04-1.45.72-.16.51-1.15-1.06-.11-.16.18-.12 1.7-1.68-.23-.4-.001-.17 1.1-1.45.18-.17h.03 2.18",
		 '47173':"m417.8 187.7l.29-.13.71-.2.06.03.69.74.82.22-.36 2.41h-2.18l-.78-1 .15-.18.11-.22.25-1.29.25-.37",
		 '47025':"m419.8 185.1l2.08-.23 1.19 2.26-2.75 1.26-.82-.22-.69-.74-.06-.03-.71.2-.29.13-1.12-2.08.58-.06 2.58-.5",
		 '47067':"m428.5 184l-1.13.82-.27-.03-.34-.16h-.05l-.37.26-.5.4-.47.56-1.12 1.32-1.11-.09-1.19-2.26 4.97-.63 1.57-.22",
		 '47057':"m423.1 187.1l1.11.09.44 1.32-1.97 1.77-1.9 1.48-.81-.99.36-2.41 2.75-1.26",
		 '47063':"m426.5 188.9l-.75.91-.54 1.33-2.54-.83 1.97-1.77 1.85.37",
		 '47089':"m425.2 191.1l-.45 2.54-1.15-.3-2.1-.84-.71-.2-.001-.56 1.9-1.48 2.54.83",
		 '47029':"m425.8 189.8l-.03.31.07.08.4.3.9.48 1.14.89.67.6-.4 2.03-2.87 1.43-.88-2.25.45-2.54.54-1.33",
		 '47171':"m434.1 187.7l1.39 1.06-1.84 1.37-.73 1.34-1.11-.65-.02-.74.59-.78.4-.14.24-.03.45-.29.32-.48.32-.67",
		 '47073':"m430.7 183.7l-.43 2.19-.19.31-1.08.75-.5.15-.19.1-.52.33-.23.27-.19.35-.24.28-.44.39-.11.09h-.08l-1.85-.37-.44-1.32 1.12-1.32.47-.56.5-.4.37-.26h.05l.34.16.27.03 1.13-.82 2.25-.32",
		 '47059':"m430.1 186.2l.71-.21.03.09.24 2.74.11.71.59.55.02.74-.2-.19-.15-.1h-.05l-.26.19-.18.13-.65.64-.91.85-.47.12-.67-.6-1.14-.89-.9-.48-.4-.3-.07-.08.03-.31.75-.91h.08l.11-.09.44-.39.24-.28.19-.35.23-.27.52-.33.19-.1.5-.15 1.08-.75",
		 '47179':"m430.3 185.9l.57-.09 1.27-.25.61-.19.36.07.51.37.16.05.47-.06-.14 1.91-.32.67-.32.48-.45.29-.24.03-.4.14-.59.78-.59-.55-.11-.71-.24-2.74-.03-.09-.71.21.19-.31",
		 '47019':"m437.2 183.9l.4.4v.04l-.8 1.35.16.31.7.73.34.29.18-.07-1.21 2.27-1.54-.44-1.39-1.06.14-1.91 3-1.91",
		 '48037':"m309.7 231.6l.08.22.08.19.07.09.44.28.16.1.58.31 1.04-.53.05-.05.16-.02.6-.09 1.04.21.2.08.26.21.08 3.64-.09-.2-.23-.12-.97-.16-.27.06-.34.12-.17.31.03.27.04.12-.02.04-4-.02-.36-.07-.09-.07-.03-.12-1.03-.76-.05-4.84 2.79.8",
		 '48387':"m302.5 227.7l1.25 1.07 1.83 1.47 1.32.54.05 4.84-.67-.44-3.4-.3-1.94.16-.02-.03-.07-6.36.16-.02h.08l.28-.19.06-.06.06-.13.02-.13-.02-.11v-.02l-.04-.09v-.02-.02-.02l.23-.35h.001l.04-.02h.08l.68.23",
		 '48107':"m234.2 227.5l5.56.27-.28 5.65-5.55-.28.26-5.64",
		 '48303':"m228.7 227.3l5.56.26-.26 5.64-5.56-.27.26-5.63",
		 '48219':"m223 226.9l5.63.38-.26 5.63-5.55-.35.17-5.66",
		 '48079':"m218.4 226.6l4.59.32-.17 5.66-4.94-.36.22-2.35.3-3.28",
		 '48153':"m235.6 221.3l4.55.25-.32 6.2-5.56-.27.35-6.24.99.06",
		 '48189':"m229 220.9l.98.06 4.58.29-.35 6.24-5.56-.26.36-6.32",
		 '48279':"m223.5 220.6l.95.07 4.6.3-.36 6.32-5.63-.38.45-6.31",
		 '48017':"m223.5 220.6l-.45 6.31-4.59-.32.5-6.18v-.13l4.53.32",
		 '48045':"m235.9 215.7l4 .21 1.53.08-.31 5.64-1-.05-4.55-.25.32-5.63",
		 '48437':"m230.4 215.4l3.88.25 1.66.1-.32 5.63-.99-.06-4.58-.29.35-5.63",
		 '48069':"m228.6 215.3l1.79.1-.35 5.63-.98-.06-4.6-.3.39-5.62 3.75.24",
		 '48369':"m219.4 214.6l5.44.4-.39 5.62-.95-.07-4.53-.32.43-5.62",
		 '48011':"m234.6 210l5.61.33-.35 5.62-4-.21-1.66-.1.4-5.64",
		 '48381':"m228.9 209.6l5.69.36-.4 5.64-3.88-.25-1.79-.1.38-5.64",
		 '48117':"m219.4 214.6l.2-2.67.22-2.97 2.14.15 2.22.11 4.78.37-.38 5.64-3.75-.24-5.44-.4",
		 '48065':"m235 204.3v-.05l5.58.3v.08l-.31 5.67-5.61-.33.34-5.67",
		 '48375':"m229.4 204l5.62.35-.34 5.67-5.69-.36.41-5.66",
		 '48359':"m229.4 203.9v.09l-.41 5.66-4.78-.37-2.22-.11-2.14-.15.43-5.69 9.14.57",
		 '48233':"m235.3 198.7l5.56.32-.3 5.58-5.58-.3.32-5.59",
		 '48341':"m229.7 198.3l5.58.34-.32 5.59v.05l-5.62-.35v-.09l.36-5.54",
		 '48205':"m220.7 197.7l9.1.63-.36 5.54-9.14-.57.12-1.51.31-4.09",
		 '48195':"m241.2 193.2l-.31 5.73v.03l-5.56-.32.34-5.76 5.53.32",
		 '48421':"m231.4 192.6l4.19.26-.34 5.76-5.58-.34.38-5.77 1.34.09",
		 '48111':"m230.1 192.6l-.38 5.77-9.1-.63.24-3.41.16-2.08.42-.25 8.62.6",
		 '48229':"m196.4 248.4l-.17 1.82-.28 3.51-.73 8.51-.11.76-.1.38-.22 2.21-.73.38-.07.06-.58-.83-.86-.94-.84-.72-.43-.04-.17-.06-1.35-.87-1.61-1.85-1.9-2.47-1.46-1.91-.95-1.22.52-.42.02-.71-.32-.47.61-6.31 11.71 1.19",
		 '48141':"m184.6 247.2l-.61 6.31.32.47-.02.71-.52.42-1.07-.48-.35-.18-.57-.46-.14-.12-.05-.06-.001-.02-.09-.14-.29-.91-.91-2.11-.22-.41-.38-.3-1.16-.54-.85-.91-.1-.14-.02-.06.25-1.11.03-.09.23-.55h.04l2.37.25 4.11.43",
		 '48305':"m234 233.2l-.33 5.61-1.44-.09-4.14-.23.36-5.55 5.56.27",
		 '48445':"m222.9 232.5l5.55.35-.36 5.55-1.42-.08-4.16-.28.39-5.55",
		 '48501':"m222.9 232.5l-.39 5.55-5-.37.5-5.53 4.94.36",
		 '48115':"m228.1 238.4l4.14.23-.31 5.64-5.56-.32.31-5.63 1.42.08",
		 '48165':"m217.4 237.7l5 .37 4.16.28-.31 5.63h-.09l-9.23-.64.42-5.64",
		 '48317':"m226.2 244h.09l5.56.32-.41 5.65-.88-.05-4.73-.3.37-5.63",
		 '48003':"m217 243.4l9.23.64-.37 5.63-.82-.05-5.57-.37-2.88-.23.41-5.61",
		 '48329':"m225 249.6l.82.05 4.73.3-.34 5.62-5.59-.35.38-5.61",
		 '48135':"m225 249.6l-.38 5.61-.34-.02-4.91-.35-.35-.02.4-5.59 5.57.37",
		 '48103':"m219.4 254.8l4.91.35-.3 7.29-.97-.08-.35-1.35-.1-.25-.03-.05-.14-.14-.53-.46-.14-.11-1.35-.77h-.14l-1.19.18.33-4.61",
		 '48377':"m206.8 269.9l-.09 1.4-.32 3.89-.47 6.46-.24 3-1.88-.61-.61-.24-.07-.03-.04-.04-.4-.32-.81-.64-3.88-3.67-.22-.48-1.25-3.14-.05-.13-.04-1.27.17-.93.08-1.12-.17-.74-2-4.89-.59-.37.07-.06 11.69 3.84 1.11.09",
		 '48109':"m197.1 248.5l8.95.8-1.83 11.44-9.49 4.87.22-2.21.1-.38.11-.76.73-8.51.28-3.51.17-1.82.77.07",
		 '48475':"m219.1 254.8l.35.02-.33 4.61-.78.05-.47-.47-.31-.28-.35-.21-.69-.29-.64.03h-.41l-.26-.03-.56-.13-3-1-.14-.14-.13-.23-.11-.65.03-.77.06-.44-.07-.27-.18-.29-.86-.19 3.09.25 5.77.43",
		 '48495':"m216.6 249l2.88.23-.4 5.59-5.77-.43.36-4.49.64.05.56.04.77.06.61.05.27.02.09-1.12",
		 '48301':"m206.5 249.3l2.79.23 4.31.34-.36 4.49-3.09-.25-.23-.51-.54-.78-.11-.02-.22.05v.03l-.03.02h-.1l-.24-.05-.09-.11-1.46-2.09-.64-1.33",
		 '48389':"m206.1 249.3l.48.04.64 1.33 1.46 2.09.09.11.24.05h.1l.03-.02v-.03l.22-.05.11.02.54.78.23.51.86.19.18.29.07.27-.06.44-.03.77.11.65.13.23.14.14 3 1 .56.13.26.03h.41l.64-.03-6.91 7.29-5.34-4.83 1.83-11.44",
		 '48243':"m209.6 265.5l1.5 1.42-4.25 2.93-1.11-.09-11.69-3.84.73-.38 9.49-4.87 5.34 4.83",
		 '48043':"m211.1 266.9l9.11 8.59 2.65 2.47-.58.37-1.42.64-2.04.49-.26.16-.03.02-1.52 2.47-.91 2.11-3.05 4.52-.48.13h-.08l-1.32-.33-1.11-.53-3.57-2.34-.1-.11-.45-.46-.24-.51.24-3 .47-6.46.32-3.89.09-1.4 4.25-2.93",
		 '48443':"m229.4 273.1l-.43 6.57-.2-.06-.08-.03-1.08-.25-.68-.11-1.08.08-.11.06-.73-.14-2.16-1.21-2.65-2.47.21-2.97 2.49.16.27-4 1.53-.14.79-.45 4.08.29.16-.02.61.13.44.36.07.81-.02.11-1.18 2.83-.26.48",
		 '48371':"m219.1 259.4l1.19-.18h.14l1.35.77.14.11.53.46.14.14.03.05.1.25.35 1.35 1.5.68 2.17.68.7.22 1.12.93.94 3.18.06.33-4.08-.29-.79.45-1.53.14-.27 4-2.49-.16-.21 2.97-9.11-8.59-1.5-1.42 6.91-7.29.69.29.35.21.31.28.47.47.78-.05",
		 '48461':"m224.3 255.2l.34.02 5.59.35-.46 7.36-5.77-.45.3-7.29",
		 '48383':"m230.3 255.5l5.56.33-.07 1.22-.02.36-.4 5.79-5.53-.33.46-7.36",
		 '48173':"m231.5 250l4.68.27-.34 5.63-5.56-.33.34-5.62.88.05",
		 '48227':"m237.4 244.6l-.41 5.64-.87-.05-4.68-.27.41-5.65 5.56.33",
		 '48033':"m233.6 238.8l4.14.2-.32 5.63v.05l-5.56-.33.31-5.64 1.44.09",
		 '48169':"m239.5 233.4l-.29 5.52h-1.45l-4.14-.2.33-5.61 5.55.28",
		 '48415':"m239.2 239l4.12.3-.33 5.66-5.56-.32.32-5.63h1.45",
		 '48335':"m237.4 244.6l5.56.32-.33 5.68-1.7-.1-3.94-.21.41-5.64v-.05",
		 '48431':"m236.2 250.2l.87.05 3.94.21-.3 5-.38-.14-.14 1.84-4.41-.16.07-1.22.34-5.63",
		 '48235':"m235.7 257.4l3 .18 3.26.22-.23 5.64-3-.1-3.44-.14.4-5.79",
		 '48105':"m223.1 262.4l.97.08 5.77.45 5.53.33 3.44.14-.23 4.85-.28 5.38-8.88-.5.26-.48 1.18-2.83.02-.11-.07-.81-.44-.36-.61-.13-.16.02-.06-.33-.94-3.18-1.12-.93-.7-.22-2.17-.68-1.5-.68",
		 '48465':"m229.4 273.1l8.88.5 2.89.14-.42 8.54-.11 2.36-.13.96-.06.31-.45 1.06-.15.21h-.04l-.35-.06-2.64-2.37-2.21-2.74-.03-.07-1.63-1.81-.56-.19h-.05l-1.61-.1-.26-.001-1.51-.17.43-6.57",
		 '48505':"m253.6 313.1l.99-.66.41.6 4.37.19-.19 6.17-2.62 2.67-.17-.69-.21-.84v-.001l-.35-1.28-.28-.71-.59-.83-.65-.38-.74-1.16-.04-.51.001-.05.05-.04.2-.3.08-1.05-.14-.95-.12-.19h-.02",
		 '48247':"m261.2 312.2l2.83.001.34.21-.04 1 .34.39.81 2.32-.14 3.47-6.17-.2.19-6.17 1.84-1.03",
		 '48427':"m259.2 319.4l6.17.2 1.18.04-.93 1.99-1.09 2.11-1.24 2.52-.55.08-.84-.37-3.94-1.77-.66-.43-.68-1.54-.02-.09-.02-.07 2.62-2.67",
		 '48215':"m266.5 319.7l3.89.11.28 2.17-.33.95-.15.57-.1.55 1.11.2.54.17-.02.95-.07 3.66-.08-.02-.23-.04-1.05.001h-.35l-.05.06-.38.15-1.45-.28-.85-.17-.27-.14-.17-.11-1.24-.84-.59-.71-.31-.15h-.03l-1.36-.46 1.24-2.52 1.09-2.11.93-1.99",
		 '48047':"m264.4 313.4l3.36.12 2 .06.82.68-.11 5.47-3.89-.11-1.18-.04.14-3.47-.81-2.32-.34-.39",
		 '48249':"m267.9 303.4l4 .1.96.8-1.59 1.38-.02 1.39-.13 1.8-1.35-.03-.09 4.79-2-.06.2-10.18",
		 '48409':"m272.7 302l3.16.21 3.19 1.19 1.41 2.24-1.63.25-.79-.04-1.84.04-.1.33-.82-.07-.59-.13-.3-.14-1.51-.79-.12-.47.13-.3-.96-.8.77-1.52",
		 '48391':"m280.3 297.3l3.06.63 1.37 1.26-.25 1.16-3.8.55.02.26.26.34.44.26.25.04h.24l-.07.19-1.45 1.09-1.02.5h-.04l-.22-.18-3.19-1.19 1.93-2.84 2.48-2.08",
		 '48025':"m273.3 295.7l.9 1.64 1.63.99 2 1.03-1.93 2.84-3.16-.21.11-.08-3.07-6.21.96-.33 1.03-.36.15.09.09.16.4.22.36.15.54.07",
		 '48297':"m269.7 294.1l1.03 1.27-.96.33 3.07 6.21-.11.08-.77 1.52-4-.1-1.13-.03.17-7.11 2.74-2.17",
		 '48311':"m261.7 295.8l5.3.07-.18 7.51-5.36-.14.24-7.44",
		 '48131':"m261.4 303.2l5.36.14 1.13.03-.2 10.18-3.36-.12.04-1-.34-.21-2.83-.001.21-9",
		 '48479':"m245.4 300.8l1.09.04 8.22.24-.02 2.23 6.71-.13-.21 9-1.84 1.03-4.37-.19-.41-.6-.99.66-.19-.02-.25-.16h-.02l-.39-.38-.05-.05-.02-.02-.02-.06.05-.07.32-.43.18-.43.07-.25.12-.96-.41-1.14-.24-.42-.15-.11-.51-.37-.26-.05-.03.02-.001.05-.45-.02-1.97-1.82-.36-.42-1.22-2.46-.97-1.96-.06-.05-1.36-.69",
		 '48283':"m261.7 295.7v.12l-.24 7.44-6.71.13.02-2.23.18-5.59 6.76.13",
		 '48127':"m246.8 295.1l8 .42h.15l-.18 5.59-8.22-.24.24-5.77",
		 '48323':"m247 289.5l-.28 5.62-.24 5.77-1.09-.04-.04-.04-.49-.54-.36-.46-.56-1.72-1.62-4.36-1.44-3.2-.17-1.3 6.29.27",
		 '48271':"m240.7 282.3l6.59.32-.29 6.89-6.29-.27-1.3-2.09.35.06h.04l.15-.21.45-1.06.06-.31.13-.96.11-2.36",
		 '48137':"m247.6 274l4 .17-.15 2.78-.98-.04-1.36-.16-.67 2.45-.12 1.86.02 1.57-1.1-.04-6.59-.32.42-8.54 6.5.28",
		 '48385':"m251.5 277l.76.03-.08 1.69.22.45.74.04-.14 3.6-4.62-.13-.02-1.57.12-1.86.67-2.45 1.36.16.98.04",
		 '48463':"m247.3 282.6l1.1.04 4.62.13 2.14.08-.27 6.89-7.88-.25.29-6.89",
		 '48507':"m254.9 289.7l-.15 5.78-8-.42.28-5.62 7.88.25",
		 '48163':"m261.8 290l-.12 5.69-6.76-.13h-.15l.15-5.78 6.88.23",
		 '48175':"m278.7 293.2h.84l.33.15.16.33.22.56.05 2.97-2.48 2.08-2-1.03-1.63-.99-.9-1.64 2.35-1.82 1.8-1.41h.07l.3.11.5.28.15.14.23.27",
		 '48469':"m282.5 290.2l.42.53 1.12.5.08.05.81 1.6 1.29 2.39-.07.03-.61.34-1.71.59-.88.61.27.7.17.33-3.06-.63-.05-2.97-.22-.56-.16-.33-.33-.15h-.84l3.76-3",
		 '48123':"m279.5 286.6l2.93 3.64-3.76 3-.23-.27-.15-.14-.5-.28-.3-.11h-.07l-1.8 1.41-2-2.52 1.63-1.29 4.26-3.47",
		 '48255':"m274 288.6l1.27 1.46-1.63 1.29 2 2.52-2.35 1.82-.54-.07-.36-.15-.4-.22-.09-.16-.15-.09-1.03.36-1.03-1.27-1.02-1.25 5.32-4.25",
		 '48493':"m272.8 286.6l1.23 2-5.32 4.25-2.38-3.04 3.19-4.14.07.66.04.16.1.17.32-.18 2.75.09",
		 '48013':"m261.9 287.9l4.43 1.87 2.38 3.04 1.02 1.25-2.74 2.17v-.4l-5.3-.07v-.12l.12-5.69.06-2.06",
		 '48325':"m262 282.3l-.14 5.66-.06 2.06-6.88-.23.27-6.89 4.8.21.08.12v.06l-.04.14-.1.15v.26l.07.15.05.04h.04l.5-.12 1.4-1.61",
		 '48019':"m253.2 279.2l3.46.16 1.3.17.59.31 2.27 1.24 1.53.84-.32.37-1.4 1.61-.5.12h-.04l-.05-.04-.07-.15v-.26l.1-.15.04-.14v-.06l-.08-.12-4.8-.21-2.14-.08.14-3.6",
		 '48265':"m256.7 274.4l-.05 1.96 4.25.09-.11 4.59-2.27-1.24-.59-.31-1.3-.17-3.46-.16-.74-.04-.22-.45.08-1.69-.76-.03.15-2.78 5 .24",
		 '48171':"m256.8 271.7l3.77.14 4.14.1-.09 4.65-3.71-.1-4.25-.09.13-4.7",
		 '48031':"m267.4 272.2l2.47.83-.55.89-1.48 4.06-1.33 1.26-1.88-2.64.09-4.65 2.68.25",
		 '48259':"m260.9 276.5l3.71.1 1.88 2.64-2.66 2.41-1.5.28-1.53-.84.11-4.59",
		 '48029':"m263.8 281.6l1.02-.13h.09l1.43.19.69.55.48 1.42.11.36.32.25.55.17 1.07.72.02.38-.11.12-3.19 4.14-4.43-1.87.14-5.66.32-.37 1.5-.28",
		 '48187':"m272.5 280.4l2.66 2.73-2.4 3.47-2.75-.09-.32.18-.1-.17-.04-.16-.07-.66.11-.12-.02-.38-1.07-.72-.55-.17-.32-.25-.11-.36 3.54-1.95 1.42-1.33",
		 '48091':"m267.8 277.9l2.93 2.51.32 1.24-3.54 1.95-.48-1.42-.69-.55-1.43-.19h-.09l-1.02.13 2.66-2.41 1.33-1.26",
		 '48209':"m269.3 273.9l5.08 4.38-.62.55-1.47 1.21-.07.34.1.02.17-.02-1.42 1.33-.32-1.24-2.93-2.51 1.48-4.06",
		 '48055':"m274.4 278.3l.67-.57 3.69 3.7-.02.02-3.56 1.68-2.66-2.73-.17.02-.1-.02.07-.34 1.47-1.21.62-.55",
		 '48177':"m278.7 281.4l1.93 2.04-.69.6v.94l-.45 1.57-4.26 3.47-1.27-1.46-1.23-2 2.4-3.47 3.56-1.68",
		 '48285':"m280.7 283.5l3-.03.1.03.21.13.61.57 2.59 3.12-1.11.91-3.19 2.55-3.35-4.17.45-1.57v-.94l.69-.6",
		 '48239':"m286.1 288.2l.2.21 3.72 3.67-.18 3.69-2.91-.5-.73.03-1.29-2.39-.81-1.6-.08-.05-1.12-.5 3.19-2.55",
		 '48321':"m290 292.1l3.89-2.35 1.03-1.06.27.25.07.07.46 1.54.29 1.12.09.32.03.04 2.23 1.76.04.02.69.06-.22.14-.47.3-.21.13-2.56 1.49-.81.41-1.32.58-.88.41-1.62.83-.57.38-.04.03-.77.54-.34.25-.09.15-.03-.09.07-.11 1.83-1.38.28-2.37-.05-.06-.08-.03-.23.03-.52.12-.22.07-.19.15-.22.38v-.43l.18-3.69",
		 '48481':"m292.5 283.9l.91 2.22.65 1.2.81.9.35.04-.3.42-1.03 1.06-3.89 2.35-3.72-3.67.4-.23 2.89-1.82.19-.54.54-1.09 1.23-1.26.97.41",
		 '48089':"m287.1 279.2l.38.7.46.42.11.1.71.49.11.05.2.04 2.15 2.13.28.3-1.23 1.26-.54 1.09-.19.54-2.89 1.82-.4.23-.2-.21 1.11-.91-2.59-3.12-.61-.57-.21-.13-.1-.03 3.44-4.2",
		 '48021':"m278.6 273.5l1.49.86 1.3 1.03.61 2.69-3.3 3.37-3.69-3.7.49-.45 1.31-1.33 1.41-2.68.39.22",
		 '48149':"m284.6 276.6l.29.25.37-.08.37-.13.17-.08.43.28.16.47.1.51.02.29.57 1.07-3.44 4.2-3 .03-1.93-2.04.02-.02 3.3-3.37 2.58-1.38",
		 '48287':"m280.6 272.8l2.14-1.26 1.29 1.63 1.02 1.18 1.26.58-1.73 1.74-2.58 1.38-.61-2.69-1.3-1.03-1.49-.86 2-.68",
		 '48015':"m286.5 278.1l.4-.26 3.28-.39.2.04.51.22.55.19.26.02.12-.14 1.26 4.41-.63 1.62-.97-.41-.28-.3-2.15-2.13-.2-.04-.11-.05-.71-.49-.11-.1-.46-.42-.38-.7-.57-1.07",
		 '48477':"m290.2 273.8l.12.16.13.09.08.03.61-.21.19-.23.08-.06.15.02.31.33-.05.51.68 1.36-.58 1.99-.12.14-.26-.02-.55-.19-.51-.22-.2-.04-3.28.39-.4.26-.02-.29-.1-.51-.16-.47-.43-.28-.17.08-.37.13-.37.08-.29-.25 1.73-1.74 1.65-.41.32-.09 1.69-.61.1.02.05.04",
		 '48473':"m292.4 275.8l3.22-.27.02 2-.6-.15-.6-.34-.23-.21-.33-.24.15.5 1.36 4.33-2.32.78-1.26-4.41.58-1.99",
		 '48157':"m293.1 282.2l2.32-.78 4.52 2.66-.42 1.82-1.46 1.46-.38.2-.99-.001-.43-.15-.51.22-.56.58-.35-.04-.81-.9-.65-1.2-.91-2.22.63-1.62",
		 '48039':"m300 284.1l2.33.3-.18 1.16 1.29 2.17.73 1.23-.82 1.47.12.1-.07.14-2.83 2.47-1.47.67-.69-.06-.04-.02-2.23-1.76-.03-.04-.09-.32-.29-1.12-.46-1.54-.07-.07-.27-.25.3-.42.56-.58.51-.22.43.15.99.001.38-.2 1.46-1.46.42-1.82",
		 '48339':"m295.4 270.6l2.57 1.56h1.2.73l.75.05 2.16 2.04.79 2.28-1.12 1.06-.73.69-.33.04-.2-.04-.12-.26-.32-.3-.81-.44-1.41-.75-.53.46-.79.37-.74.15-.24.02-.54.03-.02-2-.3-4.96",
		 '48201':"m295.7 277.6l.54-.03.24-.02.74-.15.79-.37.53-.46 1.41.75.81.44.32.3.12.26.2.04.33-.04.73-.69 1.12-1.06 1.34 3.63.57 2.68-.95 1.56-.57-.03-1.12.58-.54-.54-2.33-.3-4.52-2.66-1.36-4.33-.15-.5.33.24.23.21.6.34.6.15",
		 '48071':"m310.9 280h.95l.12 4v.17l-.19.09-1.74.06-2.35-.37.28-.53.16-.89v-.12l-.04-.25-.33-.66-.12-.14-.06-.02-.57.26-.26.14-1.29 1.06-.57-2.68 6-.15",
		 '48199':"m309.6 271.8l5.26-.08-.28.68-.1.3-.12.5.03.18.2.46.04.001.11.12-.2 1.26-.12.16.04 1.04-.07-.07-.83-.28-.16.02-.73.24-.03.04v.14l.03.2-.03.08-.15.21-.08.05-1.13.24-.18-.03-.31-.16-1.69.04-1.59-4.84 2.07-.5",
		 '48291':"m306.3 272.3l1.3.03 1.59 4.84 1.69-.04.08 2.88-6 .15-1.34-3.63-.79-2.28 3.5-1.95",
		 '48245':"m310.9 277.1l.31.16.18.03 1.13-.24.08-.05.15-.21.03-.08-.03-.2v-.14l.03-.04.73-.24.16-.02.83.28.07.07.03.16.23.81.03.03 1.55 1 .93.24.14.06.17.27.04.1.02.13-.02.29.1 2.88-1.04.17h-.28-.51l-.62.14-.85.34-2.47 1.13v-.17l-.12-4h-.95l-.08-2.88",
		 '48361':"m318.9 275.3v2.49l-1.28 1.79.02-.29-.02-.13-.04-.1-.17-.27-.14-.06-.93-.24-1.55-1-.03-.03-.23-.81-.03-.16-.04-1.04 2.41-.06 2.06-.07",
		 '48453':"m269.9 273l.9-2.53 1.03-.03.44.31.53.76.2.95.41.35.35.12h.26l.75-.26 1.04-.5h.22l.71.22 1.57.87-1.41 2.68-1.31 1.33-.49.45-.67.57-5.08-4.38.55-.89",
		 '48263':"m245.1 233.7l-.28 5.63-1.47-.08-4.12-.3.29-5.52 5.58.27",
		 '48267':"m254.9 268.9l-.1 2.72 2 .07-.08 2.75-5-.24-4-.17.24-5.41 7 .28",
		 '48435':"m247.9 268.6l-.24 5.41-6.5-.28-2.89-.14.28-5.38 9.35.39",
		 '48413':"m241.8 263.5l6.32.28-.22 4.87-9.35-.39.23-4.85 3 .1",
		 '48327':"m248.1 263.7l5.64.24 1.23 1.94-.1 2.97-7-.28.22-4.87",
		 '48319':"m255 265.9l4.34.15 1.4.3-.16 5.45-3.77-.14-2-.07.1-2.72.1-2.97",
		 '48299':"m260.7 266.4l5.73.16.73 1.16.05 3.37.14 1.12-2.68-.25-4.14-.1.16-5.45",
		 '48053':"m272.4 265.2l.88 1.68-2.52 3.59-.9 2.53-2.47-.83-.14-1.12-.05-3.37-.73-1.16.1-1.39 5.83.06",
		 '48491':"m273.3 266.9l1.92.42.33.08 3.4 1.57 1.73 3.83-2 .68-.39-.22-1.57-.87-.71-.22h-.22l-1.04.5-.75.26h-.26l-.35-.12-.41-.35-.2-.95-.53-.76-.44-.31-1.03.03 2.52-3.59",
		 '48051':"m286.6 269.3l.59.45-.06.08-.31.59v.04l1.03.25.95.44 1.2 1.7.17.98-.05-.04-.1-.02-1.69.61-.32.09-1.65.41-1.26-.58-1.02-1.18-1.29-1.63 3.82-2.2",
		 '48407':"m300.9 267.6l1.42.44.76.79 2.81 2.7.36.74-3.5 1.95-2.16-2.04.31-4.58",
		 '48471':"m299.7 265.1l1.2 2.55-.31 4.58-.75-.05h-.73-1.2l-2.57-1.56-.37-3 2.71-.87 2-1.65",
		 '48185':"m291.6 268.1l3.38-.53.37 3 .3 4.96-3.22.27-.68-1.36.78-1.16-.4-.27-.08-.14-.13-.23-.52-1.74.09-1.33.11-1.47",
		 '48041':"m291.6 268.1l-.11 1.47-.09 1.33.52 1.74.13.23.08.14.4.27-.78 1.16.05-.51-.31-.33-.15-.02-.08.06-.19.23-.61.21-.08-.03-.13-.09-.12-.16-.17-.98-1.2-1.7-.95-.44-1.03-.25v-.04l.31-.59.06-.08 1.23-.62.3-.53.22-.51.25-.47.3-.46.14-.18.18-.16.33-.23.45-.3.23-.11.8 1.94",
		 '48313':"m290.8 266.2l.77-.27 1-.66 1.16-.59 2.33-.03 1.63 2.11-2.71.87-3.38.53-.8-1.94",
		 '48289':"m296.3 259.4l.11.19.2.45.49 1.41-.25.63h-.05l-.09.05-.25.28-.55 1.75.001.17.11.37-2.33.03-1.16.59-1 .66-.77.27-.85-4.95.91-.72 4.93-2.64.52 1.47",
		 '48395':"m286.9 263l3.06-1.74.85 4.95-.23.11-.45.3-.33.23-.18.16-.14.18-.3.46-.25.47-.22.51-.3.53-1.23.62-.59-.45-.53-1.34-.95-1.22-.65-1.88-.13-.42 2.57-1.47",
		 '48331':"m284.3 264.5l.13.42.65 1.88.95 1.22.53 1.34-3.82 2.2-2.14 1.26-1.73-3.83.65-1.76 2.1-1.22 2.68-1.52",
		 '48027':"m277.9 261.6l1.54.54 2.25 3.82-2.1 1.22-.65 1.76-3.4-1.57-.33-.08-1.92-.42-.88-1.68.06-.44 5.44-3.14",
		 '48099':"m275.9 258.1l1.99 3.49-5.44 3.14-2.89-5.16 4.59-2.6 1.75 1.13",
		 '48281':"m268.5 260.2l1.01-.59 2.89 5.16-.06.44-5.83-.06-1.28-2.63 3.27-2.32",
		 '48333':"m266.5 256.7l2.03 3.51-3.27 2.32-.03-.15-.42-.92-1.45-1.27-.35.33-2.13-.8-.29-.37.04-.23.57-.36 1.8-1.21.25-.99 1-.13 2.24.27",
		 '48411':"m260.7 259.1l-.04.23.29.37 2.13.8.35-.33 1.45 1.27.42.92.03.15 1.28 2.63-.1 1.39-5.73-.16-1.4-.3.24-6.71 1.1-.27",
		 '48307':"m258.3 259.2l1.23.12-.24 6.71-4.34-.15-1.23-1.94.21-5.22.71.14 1 .15 2.12.05.54.13",
		 '48095':"m252.7 257.6l1.27 1.15-.21 5.22-5.64-.24.32-6.35 4.26.22",
		 '48451':"m240.7 255.5l6.45.35 1.3 1.52-.32 6.35-6.32-.28.23-5.64-3.26-.22-3-.18.02-.36 4.41.16.14-1.84.38.14",
		 '48081':"m241 250.5l1.7.1 4.68.26-.23 5-6.45-.35.3-5",
		 '48399':"m248.3 250.9l4.76.21-.34 6.52-4.26-.22-1.3-1.52.23-5 .91.04",
		 '48083':"m253.9 251.1l4.74.19-.34 7.9-.54-.13-2.12-.05-1-.15-.71-.14-1.27-1.15.34-6.52.9.05",
		 '48049':"m259.5 251.4l2.12.09 2.65 4.96-1 .13-.25.99-1.8 1.21-.57.36-1.1.27-1.23-.12.34-7.9.84.03",
		 '48093':"m265.8 249.2l2.33 4.2.84-.48.45.82.54.99-3.41 1.96-2.24-.27-2.65-4.96 4.13-2.25",
		 '48193':"m269.4 253.7l2.25-1.25 2.52 4.51-4.59 2.6-1.01.59-2.03-3.51 3.41-1.96-.54-.99",
		 '48035':"m275.9 250.2l1.5.41-.12.8-.08.67.06.55 1.73 3.12.13.2.36.23-3.62 1.98-1.75-1.13-2.52-4.51 1.55-.86 2.75-1.46",
		 '48145':"m284.7 259.1l2.22 3.91-2.57 1.47-2.68 1.52-2.25-3.82 5.28-3.07",
		 '48309':"m283.3 256.7l1.41 2.42-5.28 3.07-1.54-.54-1.99-3.49 3.62-1.98 2.65-1.49 1.13 2",
		 '48217':"m277.4 250.6l4.25-1.13 2.05 2.5 1.9 3.37-2.34 1.35-1.13-2-2.65 1.49-.36-.23-.13-.2-1.73-3.12-.06-.55.08-.67.12-.8",
		 '48293':"m285.6 255.3l2.43.26 2.83 4.95-.91.72-3.06 1.74-2.22-3.91-1.41-2.42 2.34-1.35",
		 '48161':"m292.9 252.9l-.1.6.97 1.8.7.7.37.14.87 1.03.1.74-4.93 2.64-2.83-4.95 4.84-2.78.02.09",
		 '48349':"m283.7 251.9l5.6-3.25 1.02.47.59.54.39.46.92 1.12.5.75.13.74-4.84 2.78-2.43-.26-1.9-3.37",
		 '48425':"m272.3 249.7l3.61-1.04-.02 1.49-2.75 1.46-.84-1.91",
		 '48139':"m281.7 245.8l.53.02 5.51.09.83 2.41.74.39-5.6 3.25-2.05-2.5.04-3.67",
		 '48251':"m276 245.6l.72.001 5 .14-.04 3.67-4.25 1.13-1.5-.41.02-1.49.03-3.06",
		 '48221':"m271.1 245.5l4.87.14-.03 3.06-3.61 1.04-1.26-3.62.03-.61",
		 '48143':"m271.1 246.1l1.26 3.62.84 1.91-1.55.86-2.25 1.25-.45-.82-.84.48-2.33-4.2.91-3.23 4.41.13",
		 '48133':"m259.9 245.7l5.63.17 1.09.05-.91 3.23-4.13 2.25-2.12-.09.23-5.63h.2",
		 '48059':"m254.4 245.6l5.39.19-.23 5.63-.84-.03-4.74-.19.23-5.6h.19",
		 '48441':"m254.2 245.5l-.23 5.6-.9-.05-4.76-.21.31-5.68 5.59.33",
		 '48353':"m248.6 245.2l-.31 5.68-.91-.04-4.68-.26.33-5.68 5.57.29",
		 '48151':"m244.8 239.3l4 .22-.27 5.65-5.57-.29.33-5.66 1.47.08",
		 '48253':"m248.8 239.6l1.67.07 4.06.2-.22 5.72h-.19l-5.59-.33.27-5.65",
		 '48417':"m254.6 239.8l1.52.06 4 .14-.19 5.72h-.2l-5.39-.19.22-5.72",
		 '48429':"m261.7 240.1l4 .15-.16 5.68-5.63-.17.19-5.72 1.56.05",
		 '48363':"m267.4 239.6l3.99.15-.24 5.75-.03.61-4.41-.13-1.09-.05.16-5.68 1.62-.65",
		 '48367':"m271.3 239.7l1.45.06 4.06.16-.16 5.68-.72-.001-4.87-.14.24-5.75",
		 '48439':"m276.9 240l1.57.08 3.94.12-.13 5.64-.53-.02-5-.14.16-5.68",
		 '48113':"m282.4 240.2l2-.02 3.53.09-.04 2.18-.13 3.48-5.51-.09.13-5.64",
		 '48397':"m290.3 240.2v1.81l-2.4.35.04-2.18 2.37.02",
		 '48257':"m290.3 242.1l2.38.05v6.22l-4.08-.03-.83-2.41.13-3.48 2.4-.35",
		 '48379':"m295 240.3l2.13.24.33 3.11-3.23-1.51.77-1.84",
		 '48467':"m294.2 242.1l3.23 1.51.44.43.02 2.68 1.33 1.42.24.19-6.8-.02v-6.22l1.54.02",
		 '48213':"m292.7 248.3l6.8.02-.1 2.84.35.66-6.8 1.03-.02-.09-.13-.74-.5-.75-.92-1.12-.39-.46-.59-.54-1.02-.47-.74-.39 4.08.03",
		 '48001':"m299.7 251.8l-.19 1.75.18.93.41 1.46.76.7.15.03.25.3.15.32.16.5.03.13-.15.22-2.41.38-1.74.31-.96.49-.52-1.47-.1-.74-.87-1.03-.37-.14-.7-.7-.97-1.8.1-.6 6.8-1.03",
		 '48225':"m296.3 259.4l.96-.49 1.74-.31 2.41-.38.7.27 1.09 1.12 1.19.74.5.5-5.21 4.29-2 1.65-1.63-2.11-.11-.37-.001-.17.55-1.75.25-.28.09-.05h.05l.25-.63-.49-1.41-.2-.45-.11-.19",
		 '48455':"m306.3 263.9l-3.9 4.2-1.42-.44-1.2-2.55 5.21-4.29 1.3 3.09",
		 '48373':"m309.4 265l-1.06.63 1.34 6.23-2.07.5-1.3-.03-.36-.74-2.81-2.7-.76-.79 3.9-4.2 1.25.52.96.2.9.36",
		 '48351':"m319.9 263.3l.51-.13.04 4.09-.2.86-1.58 2.98-.13.45.03.04.31.38.16.8v.07l-.04.11-.43.36-.001.001.34 2.02-2.06.07.17-5.48.03-3.62-.56-2.7 3.43-.31",
		 '48241':"m315.1 263.9l1.41-.33.56 2.7-.03 3.62-.17 5.48-2.41.06.12-.16.2-1.26-.11-.12-.04-.001-.2-.46-.03-.18.12-.5.1-.3.28-.68-.17-.27-.12-.38.03-.1.25-.48-.05-.52-.79-1.56-.1-.08-.25-.04-.07-.001-.03-.03-.74-2.17.08-.43-.04-.1-.13-.14-.51-.2-.65.02-1.1.03 3.61-.91.99-.47",
		 '48457':"m310.5 265.3l1.1-.03.65-.02.51.2.13.14.04.1-.08.43.74 2.17.03.03.07.001.25.04.1.08.79 1.56.05.52-.25.48-.03.1.12.38.17.27-5.26.08-1.34-6.23 1.06-.63 1.15.31",
		 '48005':"m305.9 259l.47.52 2.04.52.49-.08.43.18.58.31.14.15 1.83 2.22 2.2 1.58-3.61.91-1.15-.31-.9-.36-.96-.2-1.25-.52-1.3-3.09-.5-.5 1.5-1.32",
		 '48403':"m317.2 258l1.19 1.25 1 1.46.33 1.43.08.42.11.67-3.43.31-1.41.33-.09-.3-.04-1.8v-1.46l.47-.5.18-.24-.04-1.33 1.64-.26",
		 '48405':"m315.6 258.3l.04 1.33-.18.24-.47.5v1.46l.04 1.8.09.3-.99.47-2.2-1.58.06-1.54.08-2.94-.77-.86-.26-.18 3.38.36 1.18.64",
		 '48419':"m309.7 253.2l5.41-.17 1.54 1.72.55 3.32-1.64.26-1.18-.64-3.38-.36-.63-2.46-.67-1.66",
		 '48347':"m305.1 254.9l5.3-.06.63 2.46.26.18.77.86-.08 2.94-.06 1.54-1.83-2.22-.14-.15-.58-.31-.43-.18-.49.08-2.04-.52-.47-.52-.6-.59-.05-.08-.27-.73-.2-.74-.12-1.16.41-.8",
		 '48073':"m299.4 251.2l5.17-.07.57 3.77-.41.8.12 1.16.2.74.27.73.05.08.6.59-1.5 1.32-1.19-.74-1.09-1.12-.7-.27.15-.22-.03-.13-.16-.5-.15-.32-.25-.3-.15-.03-.76-.7-.41-1.46-.18-.93.19-1.75-.35-.66",
		 '48365':"m314.7 247.7l.06 2.54.35 2.79-5.41.17-.96.02-.04-1.38.21-1.6.24-.6.35-.61.33-.79v-.49l.31.28 1.18.5.09.02 3.29-.85",
		 '48401':"m308.9 247.7h.95v.49l-.33.79-.35.61-.24.6-.21 1.6.04 1.38.96-.02.67 1.66-5.3.06-.57-3.77-.04-2.99 1.92-.04 1.8-.02.7-.33",
		 '48183':"m304.5 245.9l.18-.02 1.63-.7.64-.9.08-.04.51.06.03.06.04 2.58.001.39.64.31.57.07.11-.04-.7.33-1.8.02-1.92.04-.04-2.17",
		 '48423':"m297.9 244.1l.98.88.31.14 3.11.78h.08l.21-.1.1-.2 1.8.41.04 2.17.04 2.99-5.17.07.1-2.84-.24-.19-1.33-1.42-.02-2.68",
		 '48499':"m302.6 239.8l.001 1.44.03 4.3-.1.2-.21.1h-.08l-3.11-.78-.31-.14-.98-.88-.44-.43-.33-3.11 3.84-.05 1.68-.67",
		 '48203':"m307.5 242.6l2.13 1.25 1.33-.001.36-.18 1.29-.17.76-.06.55.07.74.27.09 3.89-3.29.85-.09-.02-1.18-.5-.31-.28h-.95l-.11.04-.57-.07-.64-.31-.001-.39-.04-2.58-.03-1.82",
		 '48459':"m302.6 241.2l4.66-.08.16.33.05 1.11.03 1.82-.03-.06-.51-.06-.08.04-.64.9-1.63.7-.18.02-1.8-.41-.03-4.3",
		 '48063':"m302.6 239.8l.28-.28.92-.5.24-.05h.19l.63.001.14.05.57.71.6.41 1.09 1-4.66.08-.001-1.44",
		 '48315':"m308 241.5l6.59-.14.04 2.43-.74-.27-.55-.07-.76.06-1.29.17-.36.18-1.33.001-2.13-1.25-.05-1.11.56-.001",
		 '48067':"m308 236.4l.03.12.09.07.36.07 4 .02.02-.04-.04-.12-.03-.27.17-.31.34-.12.27-.06.97.16.23.12.09.2.07 3.26.04 1.79-6.59.14-.05-5",
		 '48343':"m306.3 235.2l.67.44 1.03.76.05 5-.56.001-.16-.33-1.09-1 .05-4.93",
		 '48449':"m306.3 235.2l-.05 4.93-.6-.41-.57-.71-.14-.05-.63-.001h-.19l-.24.05-.92.5-.04-4.6 3.4.3",
		 '48159':"m302.9 234.9l.04 4.6-.28.28-1.68.67-.04-5.36.02-.02 1.94-.16",
		 '48223':"m295 237.2l.88-.52.48-.56 1.33-.61.26-.11.55-.02 2.42-.24.04 5.36-3.84.05-2.13-.24v-3.1",
		 '48119':"m295 234l.83-.39.2-.05 1.49.11.21.03 1.18.37.21.09 1.09.74.69.13.02.03-.02.02-2.42.24-.55.02-.26.11-1.33.61-.48.56-.88.52.03-2.47.001-.67",
		 '48231':"m295 234.7l-.03 2.47v3.1l-.77 1.84-1.54-.02-2.38-.05v-1.81l.03-4.8 4.68-.74",
		 '48085':"m284.6 234.7l4.82.13.95.6-.03 4.8-2.37-.02-3.53-.09.16-5.41",
		 '48121':"m278.7 234.3l4.71.24 1.17.15-.16 5.41-2 .02-3.94-.12.25-5.7",
		 '48497':"m272.9 234.2l4.62.09 1.11.06-.25 5.7-1.57-.08-4.06-.16.15-5.6",
		 '48237':"m267.6 233.6l4.74.11.64.44-.15 5.6-1.45-.06-3.99-.15.19-5 .001-.92",
		 '48503':"m261.8 234.4l5.71.18-.19 5-1.62.65-4-.15.14-5.71",
		 '48447':"m256.3 234.2l5.55.21-.14 5.71-1.56-.05-4-.14.19-5.72",
		 '48207':"m250.7 234l5.55.19-.19 5.72-1.52-.06-4.06-.2.22-5.66",
		 '48433':"m245.1 233.7l5.64.26-.22 5.66-1.67-.07-4-.22.28-5.63",
		 '48125':"m239.8 227.8l5.56.25-.26 5.67-5.58-.27.28-5.65",
		 '48345':"m240.1 221.6l1 .05 4.54.21-.31 6.19-5.56-.25.32-6.2",
		 '48191':"m245.7 216.2l1.32.07-.28 5.62-1.05-.06-4.54-.21.31-5.64 4.25.22",
		 '48129':"m246 210.6l-.29 5.64-4.25-.22-1.53-.08.35-5.62 5.72.27",
		 '48179':"m240.5 204.6l5.67.28-.26 5.66-5.72-.27.31-5.67",
		 '48393':"m240.9 199v-.03l5.58.3h.07l-.28 5.67-5.67-.28v-.08l.3-5.58",
		 '48357':"m242.5 193.3l4.2.21-.28 5.75-5.58-.3.31-5.73 1.35.07",
		 '48295':"m246.7 193.5l5.58.25-.21 5.76-5.58-.26h-.07l.28-5.75",
		 '48211':"m252.1 199.5l-.09 2.27-.14 3.4-5.62-.26.28-5.67 5.58.26",
		 '48483':"m246.2 204.9l5.62.26-.24 5.66-5.64-.26.26-5.66",
		 '48087':"m246 210.6l5.64.26-.09 1.97-.15 3.68-4.37-.21-1.32-.07.29-5.64",
		 '48075':"m247 216.3l4.37.21-.07 2.4-.14 3.24-4.44-.22.28-5.62",
		 '48101':"m245.7 221.9l1.05.06 4.44.22-.04 1.13-.12-.23-.3.03-.1.11-.23 5.1-5-.22.31-6.19",
		 '48269':"m245.4 228l5 .22.56.03-.18 5.68-5.64-.26.26-5.67",
		 '48275':"m256.4 229.8l-.13 4.33-5.55-.19.18-5.68 1.71.07 1.44.28 1.64.36.54.38.15.28.03.17",
		 '48155':"m251.1 223.3l1.93 1.49 2.74.88.64-.1.12-.13.04-.13-.12 3.25-.04 1.3-.03-.17-.15-.28-.54-.38-1.64-.36-1.44-.28-1.71-.07-.56-.03.23-5.1.1-.11.3-.03.12.23",
		 '48197':"m252.8 219.7l.55.71.27.31.74.7.32.08h.09.41l.41-.52.06-.02.12.02.5.06.16.07.26.15-.16 4.06-.04.13-.12.13-.64.1-2.74-.88-1.93-1.49.04-1.13.14-3.24 1.55.77",
		 '48009':"m262 228.7l5.64.13-.1 4.78-.001.92-5.71-.18.19-5.65",
		 '48023':"m262 228.7l-.19 5.65-5.55-.21.13-4.33.04-1.3 5.57.19",
		 '48487':"m259.5 222.1l-.001.3v.28l.18 1 .14.05.22.07.4.09h.2.43l.98.08h.001l.15.08-.15 4.68-5.57-.19.12-3.25.16-4.06.35.33.36.03.08-.03.02-.02.46-.82.46.25.53.28.5.87v.001",
		 '48485':"m265.8 224.6h.11l.24.16.24.21.5.81.3.11h.001l.57-.51-.1 3.49-5.64-.13.15-4.68.98.59.98.24.69.03.97-.3",
		 '48077':"m271.1 226.4l.19.37.03.03h.02l.45.13h.23.001l.37-.09.4.16-.09.69-.27.59-.13 5.48-4.74-.11.1-4.78.1-3.49.43-.54.21-.12.41.09 1.65.52.64 1.06",
		 '48337':"m277.7 228l-.13 6.25-4.62-.09-.64-.44.13-5.48.12.11.94.43.13.001.33-.1.53-.42.56-.58.37-.46 1.09.72.38.27.82-.22",
		 '48097':"m283.4 227.7l-.06 6.9-4.71-.24-1.11-.06.13-6.25.21.96.03.07v.02l.06.08.09.06 3.11 1.36.15.05.17.02.15-.05.11-.09.05-.07 1.6-2.78",
		 '48147':"m295.2 229.1l-.14 4.91-.001.67-4.68.74-.95-.6.07-4.27.1.14 1.59-.39.22-.06.19-.08.001-.02.1-.1.001-.02.03-.09.03-.1v-.04-.03l.07-.31.09-.32.54-.13 1.2-.1.23-.02.15-.001.62.12.52.09",
		 '48181':"m283.5 227.6l.54 1.11.18.2.11.08 1 .31.52-.09 1.08-.49-.04.21v.16.06.03l1.1.74.1.07h.001l.55-.1.13.001.14.05.46.63-.07 4.27-4.82-.13-1.17-.15.06-6.9.1-.06",
		 '48277':"m300.8 228.7l.07 6.36-.69-.13-1.09-.74-.21-.09-1.18-.37-.21-.03-1.49-.11-.2.05-.83.39.14-4.91.92-.34.9-.47.78-.41.35.02.08.03.11.29v.09l-.03.09v.07l.04.08.04.04 1.06.14.4.03.72-.04.32-.04",
		 '49037':"m163 159.6l-.44 4.49-.48 3.5-.72 5.1-.88 6.26-9.68-1.38-3.34-.5-1.65-.32-2.58-.39-6.69-1.05.31.03.74.02 3.45-.77.34-.12.72-.62 1.98-1.87.17-.27 1.11-2.09 2.29-2.69 2.06-1.12 1.78-1.4 1.28-1.1.06-.04.91-.42.29-.31.1-.65-.001-.54-.5-2.83v-.04l-.18-.24 9.58 1.38",
		 '49017':"m128.4 158.8l.35.03 3.8.67.24.07.49.1.35.05 1.09.12 4.25.72 2.84.43 11.95 1.84-.91.42-.06.04-1.28 1.1-1.78 1.4-2.06 1.12-2.29 2.69-11.97-1.92-.05.03h-.09l-5.08-.88-1.37-.32-1.84-.33.37-2.38.17-.99 1.28-.78.79.03.32.05.21-1.11.26-2.2",
		 '49029':"m145.7 119.4l.86.29.69 1.95-.06.23-.09.18-.12.15-.25.22-1.06.17-1.6.55-.19.11-.17.16-.44.44-.02.08v.27l.03.07.05.05.41.52.28.72.03.19-.53.79-.14.06-.16.03-.09-.001-.76-.37-.8-.95-.53-3.75-.11-.45.06-.2.21-.09.55-.16.23.03.26.08.07.18.17.23.29.13.28-.02 1.58-.3.33-.26.3-.31.09-.19.31-.82",
		 '49011':"m141 121.6l.53 3.75-.16.07-.27.08-.91.14-.44-.08-.24-.05v-1.08l.04-.23-.46-.08-1.46.7-1.32.78-1.52-4.26 2.45-.39.61-.08 1.5.26 1.64.45",
		 '49057':"m144.9 118.5l.73.93-.31.82-.09.19-.3.31-.33.26-1.58.3-.28.02-.29-.13-.17-.23-.07-.18-.26-.08-.23-.03-.55.16-.21.09-.06.2.11.45-1.64-.45-1.5-.26-.61.08-2.45.39 3-2.9 1.99.34.69-.26.86-.66.05.29.05.09.93.54.16.02 2.36-.31",
		 '49033':"m150.5 111.8l-1.53 9.61-2.3 1.04.25-.22.12-.15.09-.18.06-.23-.69-1.95-.86-.29-.73-.93 1-1.55.51-1.24v-.06l-.08-3.56-.19-.97 4.34.68",
		 '49005':"m140 110.1l.52.08 5.67.92.19.97.08 3.56v.06l-.51 1.24-1 1.55-2.36.31-.16-.02-.93-.54-.05-.09-.05-.29-.03-.93-.001-.44-.17-.31-.04-.04-.48-.09-.08-1.7.17-1.11.11-.51-.09-.74-.22-.55-.29-.38-.25-.94",
		 '49003':"m122.4 106.9l.63.16.75.18.11.02.8.14.3.05 3.13.53.28.05 3.78.64 2.75.46 2.43.42 1.99.34.69.18.25.94.29.38.22.55.09.74-.11.51-.17 1.11.08 1.7.48.09.04.04.17.31.001.44.03.93-.86.66-.69.26-1.99-.34-3 2.9-3.09.46-11.83-2.19 2.44-12.67",
		 '49009':"m167.6 127.5l-.6 4.47-.72-.1-.31-.44.12-.84.04-.47-.25-.99-1.84-.25-1.31.24-3.08.3h-.33l-.97-.74-.21-.09.35-2.36 1.39.2 1.34.19.38.05 4.5.6 1.51.22",
		 '49035':"m136.4 125.6l1.32-.78 1.46-.7.46.08-.04.23v1.08l.24.05.44.08.91-.14.27-.08.16-.07.8.95.44 2.57-.46.35-.97.44-2.74.94-.37.08-1.18-.55-.55-.44-.19-4.08",
		 '49043':"m149 121.4l-.52 3.25 5.21.86 4.34.62.46.07-.35 2.36-1.6-.23-1.82-.12-4.89.23-.6.52-.73.84-.15.13-.44.08-1.47.11-.74-.42-1-.82-1.88-.04-.44-2.57.76.37.09.001.16-.03.14-.06.53-.79-.03-.19-.28-.72-.41-.52-.05-.05-.03-.07v-.27l.02-.08.44-.44.17-.16.19-.11 1.6-.55 1.06-.17 2.3-1.04",
		 '49051':"m142.8 128.8l1.88.04 1 .82.74.42 1.47-.11.44-.08.15-.13.73-.84-.51 3.17-.6 4.49-.37 2.35-1.86-.3-1.21-2-.06-.13-.001-.11.41-.88-.17-1.55-.11-.23-.23-.38-.04-.03-1.12-.62-1.07-.64-.19-.98.06-.52.24-1.4.46-.35",
		 '49049':"m142.3 129.2l-.24 1.4-.06.52.19.98 1.07.64 1.12.62.04.03.23.38.11.23.17 1.55-.41.88.001.11.06.13 1.21 2 1.86.3.15 1.16-3.79-.61-3.83-.63-1.06-.16.15-.49v-.23l-.28-.8-.05-.07-.22-.2-.97.48-.66.77-.03.15-.09.1-.6.22-.26.05-.26-.08-.11-.06.28-.89.09-.21.16-.19.07-.08-.43-1.13-.35-.5-.18-.09.38-.95.32-1.27-.17-.82-.04-.76.15-1.9.03-.09.24-.08.16.05.55.44 1.18.55.37-.08 2.74-.94.97-.44",
		 '49045':"m119.9 119.6l11.83 2.19 3.09-.46 1.52 4.26.19 4.08-.16-.05-.24.08-.03.09-.15 1.9.04.76.17.82-.32 1.27-.38.95-.67.56-.27.18-.87.36-3.69-.64-12.79-2.4.52-2.69 2.2-11.26",
		 '49023':"m135.5 135.5l.18.09.35.5.43 1.13-.07.08-.16.19-.09.21-.28.89.11.06.26.08.26-.05.6-.22.09-.1.03-.15.66-.77.97-.48.22.2.05.07.28.8v.23l-.15.49 1.06.16-.16.94-.83.45-.26 1.88-.19 1.13-.5.94-1.71-.27-1 .42-.05.28-.55-.1-1.17-.39.15-.63.26-1.38.06-.6-.02-.13-.16-.18-2.1-.36-.67-.1-12.77-2.33-2.28-.31.9-4.63 12.79 2.4 3.69.64.87-.36.27-.18.67-.56",
		 '49027':"m116.3 138.2l2.28.31 12.77 2.33.67.1 2.1.36.16.18.02.13-.06.6-.26 1.38-.15.63 1.17.39.55.1-.57 3.45-2.63 3.26-1.53.8-.17-.03-.74-.09-.2.06-.24.34-.47.87-2.84-.5v-.03l-1.14-.23-11.14-2.02.26-1.34 2.14-11",
		 '49041':"m142 149.5l-.15 1.05-.59 3.57-.08-.02-.33 2.08-4.57-.64-2.92-.5.02-.11-.62-.13-3.88-.64.17-.79.47-.87.24-.34.2-.06.74.09.17.03 1.53-.8 2.63-3.26 1.61.27.13.19 5.25.88",
		 '49039':"m144.1 139.5l-.72 4.44-.53-.09-.89 5.58-5.25-.88-.13-.19-1.61-.27.57-3.45.05-.28 1-.42 1.71.27.5-.94.19-1.13.26-1.88.83-.45.16-.94 3.83.63",
		 '49007':"m144.1 139.5l3.79.61 3.11.5.13.04.05.05 5.36.82.81.12.06.17v.09l-.05.04h-.04l-.62.35-.44.38-.72 1.4-.14.41-.06.58v.71l-10.29-1.6-.14-.91-.82-2.19-.1-.13-.1-.05.22-1.39",
		 '49013':"m158.1 128.6l.21.09-1.14 7.84-.3 2.22-.36 2.86-5.36-.82-.05-.05-.13-.04-3.11-.5-.15-1.16.37-2.35.6-4.49.51-3.17.6-.52 4.89-.23 1.82.12 1.6.23",
		 '49047':"m158.3 128.6l.97.74h.33l3.08-.3 1.31-.24 1.84.25.25.99-.04.47-.12.84.31.44.72.1-.79 5.54-1 7.24-.29 2.1-.61.38-8.98-1.28.001-.09v-.71l.06-.58.14-.41.72-1.4.44-.38.62-.35h.04l.05-.04v-.09l-.06-.17-.81-.12.36-2.86.3-2.22 1.14-7.84",
		 '49019':"m164.9 146.8l-.67 4.8-.34 2.34-.07.5-.39 2.37-.39 2.83-9.58-1.38.36-.28.13-.47v-.61l-.02-.12-.27.08h-.27l-.08-.02-.04-.04-.03-.07-.22-1.55.02-2.57.26-1.55.51-1.38.16-.31.05-.06.54-.95.59-1.19.14-.56v-.72l8.98 1.28.61-.38",
		 '49015':"m143.9 140.9l.1.05.1.13.82 2.19.14.91 10.29 1.6-.001.09v.72l-.14.56-.59 1.19-.54.95-.05.06-.16.31-.51 1.38-.26 1.55-.02 2.57.22 1.55.03.07.04.04.08.02h.27l.27-.08.02.12v.61l-.13.47-.36.28-12.68-1.97.02-.13.33-2.08.08.02.59-3.57.15-1.05.89-5.58.53.09.49-3.05",
		 '49055':"m136.2 155.5l4.57.64-.02.13 12.68 1.97.18.24v.04l.5 2.83.001.54-.1.65-.29.31-11.95-1.84-2.84-.43-4.25-.72.18-1.06.35-2.46.32-.37.66-.48",
		 '49031':"m128.8 154.1l3.88.64.62.13-.02.11 2.92.5-.66.48-.32.37-.35 2.46-.18 1.06-1.09-.12-.35-.05-.49-.1-.24-.07-3.8-.67.88-1.2.35-.34.25-.61-.001-.11-.46-.95-.47-.36-.5-.62-.001-.11.05-.42",
		 '49001':"m113.9 150.6l11.14 2.02 1.14.23v.03l2.84.5-.17.79-.05.42.001.11.5.62.47.36.46.95.001.11-.25.61-.35.34-.88 1.2-.35-.03-15.55-2.87 1.04-5.42",
		 '49021':"m112.8 156l15.55 2.87-.26 2.2-.21 1.11-.32-.05-.79-.03-1.28.78-.17.99-.37 2.38-2.28.17-1.36-.23-.4.14-.75-.03-1.06-.3-2.04-1.29-1-.9-4.63-.88 1.36-6.94",
		 '49053':"m111.5 162.9l4.63.88 1 .9 2.04 1.29 1.06.3.75.03.4-.14 1.36.23-1.13 6.39-11.57-2.15 1.47-7.72",
		 '49025':"m122.7 166.4l2.28-.17 1.84.33 1.37.32 5.08.88h.09l.05-.03 11.97 1.92-1.11 2.09-.17.27-1.98 1.87-.72.62-.34.12-3.45.77-.74-.02-.31-.03-11.36-1.91-3.61-.64 1.13-6.39",
		 '51001':"m497.5 153.2l3.67-1.25-.35.98-.79 1.3-.28.06-.08.06-.03.03-.03.04-.06.08-.04.06-.04.06-.04.06-.14.29-.18.48-.3 1.36-.04.25-.26 2.87.04.11-.51.23-.88.07-.07-.05-.04-.09.001-.03.06-.04.08-.13-.05-.52-.57-.23-.98.29-.06-.11-.001-.07.06-.5.09-.32.67-2 .47-.69.16-.22.05-.09.17-.51v-.16l-.06-1.02.33-.65",
		 '51131':"m495.6 159.6l.98-.29.57.23.05.52-.08.13-.06.04-.001.03.04.09.07.05.88-.07.51-.23.05.09v.21l-.68 3.36-.1.19-.11.2v.001l-.44.69-.001.03-.07.1-.08.07h-.06l-.61-.05-.64-.88-.27-.63-.06-.41-.03-.38v-.19l.05-1.37.05-.89.03-.29.04-.38",
		 '51027':"m435.4 170.6l.45.27-.14.06-.45.41-.03.09.07.19.87 1.24.85.74.12.06 1.15.41-.2.55-1 .64-.26.31-.91.4-.11.09-.07.21-.02.18v.29l-.09.15-.38.28-.65.09-.08-.001-2.09-3.09 2.96-3.56",
		 '51185':"m441.9 172.3l1.58 1.1-.26.85-1.13 1.7-.29.67-.77.22-.6.26-1.2.53-.8.18-1.58-2.18.26-.31 1-.64.2-.55.68.4 1.18-.23.03-.02.44-.41.89-.82.37-.75",
		 '51173':"m442.5 177.2l1.57 2.24-3.24 2.14-.13.08-1.12-1.88-1.66-1.58.51-.47.8-.18 1.2-.53.6-.26.77-.22.7.65",
		 '51520':"m435.4 183l-.99.14.51-1.02.34-.2.26-.02.17.08.08.25-.02.28-.35.5",
		 '51191':"m437.9 178.3l1.66 1.58 1.12 1.88.13-.08-.37.41-1.83.25-.98.12-.07.3-2.16.31.35-.5.02-.28-.08-.25-.17-.08-.26.02-.34.2-.51 1.02-.51.08-.6-1.41 1.99-1.83 1.5-.74 1.12-1",
		 '51167':"m436.9 175.6l1.58 2.18-.51.47-1.12 1-1.5.74-1.99 1.83-1.07-2.04.62-1.33 1.68-1.18.08.001.65-.09.38-.28.09-.15v-.29l.02-.18.07-.21.11-.09.91-.4",
		 '51720':"m430 178.7l.001-.09.2.1.09.09.02.27-.23.5-.36.1-.31-.27.04-.23.17-.32.23-.15.13-.02",
		 '51195':"m430.2 175.8l.21.96.78 1 .2.21 1.19.7.15-.07.17-.17-.62 1.33-1.43.13-.71.12-.17.06-1.08.77-.17.3v.14l-1.34-1.13.04-.98 2.67-3.29.11-.08zm-.19 2.89l-.13.02-.23.15-.17.32-.04.23.31.27.36-.1.23-.5-.02-.27-.09-.09-.2-.1-.001.09",
		 '51051':"m432.5 174.2l2.09 3.09-1.68 1.18-.17.17-.15.07-1.19-.7-.2-.21-.78-1-.21-.96.4-.28 1.52-.86.38-.49",
		 '51169':"m428.7 181.3v-.14l.17-.3 1.08-.77.17-.06.71-.12 1.43-.13 1.07 2.04.6 1.41-3.2.48-2.25.32-1.57.22.23-1.1.4-.37 1.17-1.48",
		 '51105':"m428.7 181.3l-1.17 1.48-.4.37-.23 1.1-4.97.63-2.08.23 2.08-1.11 1.04-.55 2.14-1.21 2.04-1.69.21-.37 1.34 1.13",
		 '51021':"m443.5 173.4l2.35-1.14 1.56 1.67-.43 1.04-1.18.56-.85.32-1.06-.06-.57.47-.81 1-.7-.65.29-.67 1.13-1.7.26-.85",
		 '51077':"m446.2 178.6l1.22 1.38-.07.09-.04.22.001.14.06.12.27.33.2-.05.09-.11-.001-.17.83.9-.65.07-4.62.56-3.32.33.27-.35.37-.41 3.24-2.14 2.13-.91",
		 '51640':"m447.4 180l.1-.09.11-.15.33-.09.31.05-.13.38-.2.34.001.12.001.17-.09.11-.2.05-.27-.33-.06-.12-.001-.14.04-.22.07-.09",
		 '51197':"m449.1 177.2l-2.91 1.42-2.13.91-1.57-2.24.81-1 .57-.47 1.06.06.85-.32 1.18-.56 2.14 2.21",
		 '51071':"m446.8 170.3l1 .57 1.25-.94.1-.08 1.01-.8.48.69.65 1.32-1.6 1.19-2.29 1.65-1.56-1.67.93-1.95.001.02",
		 '51750':"m450.3 174.3l-.06.05-.21-.23-.09-.16-.04-.15.04-.15.2-.22.22-.14.1-.02.09-.001.08-.03.09-.07.21.05.09.24-.08.15-.38.48-.25.19",
		 '51155':"m449.7 172.3l.8 1.04-.1.02-.22.14-.2.22-.04.15.04.15.09.16.21.23.06-.05.54 1.18-.8.82-.97.85-2.14-2.21.43-1.04 2.29-1.65",
		 '51610':"m480.1 145.3l-.6.29-.34-.45.34-.28.07.05.53.38",
		 '51013':"m480.3 144.3l.38.31.45.2.26.51-.76.12-.1.2-.49-.35-.53-.38-.07-.05-.02-.02.89-.54",
		 '51035':"m450.1 176.3l2.19 2.58-.32.8-.16.13-.14.07-.08-.001-.35-.19h-.12l-.06.03-.14.52-.05.24.23.6-2.29.36-.83-.9-.001-.12.2-.34.13-.38-.31-.05-.33.09-.11.15-.09.08-1.23-1.37 2.91-1.42.97-.85",
		 '51089':"m460.2 179.7l-3.17.53-.27.04-.11-.86-.18-.57-.08-.13-.15-.17-.27-.49-.13-.7v-.04l.11-.13.39-.15.67-.51 1.76.13.53-.19.96-.91-.05 4.15zm-2.11-2l-.05.04-.21.49.19.19.64.33.22-.12.05-.23-.25-.66-.53-.1-.07.07",
		 '51141':"m454.2 176.4l2.13.67-.39.15-.11.13v.04l.13.7.27.49.15.17.08.13.18.57.11.86-3.94.55-1.76.19-.23-.6.05-.24.14-.52.06-.03h.12l.35.19.08.001.14-.07.16-.13.32-.8 1.97-2.48",
		 '51063':"m454.8 173l-.54 3.4-1.97 2.48-2.19-2.58.8-.82.71-.22.76-.35.45-.27.03-.08.48-.72.99-.62.48-.21",
		 '51121':"m453 170.4l.35.66.59.61.36 1.29.03.22-.99.62-.48.72-.03.08-.45.27-.76.35-.71.22-.54-1.18.25-.19.38-.48.08-.15-.09-.24-.21-.05-.09.07-.08.03-.09.001-.8-1.04 1.6-1.19 1.66-.62",
		 '51775':"m455.5 170.4l-.03.06v.59l.09.15-.67-.02-.06-.66.68-.13",
		 '51067':"m457.4 171.2l2.95 1.91-.05 2.47-.96.91-.53.19-1.76-.13-.67.51-2.13-.67.54-3.4.78-.73.62.23.23.04.08-.05.35-.4.54-.89",
		 '51161':"m454.7 169.1l2.52 1.07.19 1.07-.54.89-.35.4-.08.05-.23-.04-.62-.23-.78.73-.48.21-.03-.22-.36-1.29-.59-.61-.35-.66.1-.16.45-.43.63-.27.54-.51zm.79 1.32l-.68.13.06.66.67.02.03.06.74.31h.09l.18-.17.19-.33.18-.65-.05-.15-.05-.04-.25-.13-.66-.1-.44.37-.02.04",
		 '51019':"m460.6 165.5l2.86 1.49-.77.23.3 1.31-1.19 4.16-1.49.44-2.95-1.91-.19-1.07.5-.64-.15-.74.86-1.04.1-.1.18-.06.08.02.14.11.19.19.34.02.05-.02.05-.04.51-.84.15-.35.42-1.19zm-.53 3.57h-.15l-.001.24.23.24.15.06.42-.06.14-.55-.28-.18-.46.09-.03.14",
		 '51005':"m453.7 162.3l.51-.19.67-.04h.02l.51.64.08.05 2.05.29.36-.42v1.43l-1.51-.24-.24.29.03.06-.05.19-.12.23-.35.53-.78.85-.19.17-.21-.05-.92.92-.65-.15-.18-.12-.89-.69 1.85-3.74zm.77 1.71l-.02.69.14.13.18.12.33-.27-.08-.62-.05-.11-.36-.08-.15.13",
		 '51045':"m454.7 166.1l-.09.13.08.18.76.92-.57 1.43-.22.31-.54.51-.63.27-.45.43-.1.16-1.66.62-.65-1.32.29-.25 1.15-1.02-.23-.43.32-.65.58-.7.18.12.65.15.92-.92.21.05",
		 '51023':"m457.9 164l2.27 2.64-.15.35-.51.84-.05.04-.05.02-.34-.02-.19-.19-.14-.11-.08-.02-.18.06-.1.1-.86 1.04.15.74-.5.64-2.52-1.07.22-.31.57-1.43-.76-.92-.08-.18.09-.13.19-.17.78-.85.35-.53.12-.23.05-.19-.03-.06.24-.29 1.51.24",
		 '51009':"m462.8 162.6l.33-.19.69.29.04.04 1.04.94.26.29.94 1.43h.32l-1.23 1.71-.59.57-1.17-.73-2.86-1.49h.12l.22-.18.32-.32.17-.22.21-1 .13-.45.1-.21.22-.36.1-.11h.64",
		 '51163':"m459.1 159.6l1.63.85 1.72.83.32.25.05 1.15h-.64l-.1.11-.22.36-.1.21-.13.45-.21 1-.17.22-.32.32-.22.18h-.12l-.42 1.19-2.27-2.64v-1.43l1.19-3.04zm1.2 3.63l.04-.26-.38-.09-.27.08-.15.22.11.35.18.15.16-.11.31-.35zm.33.31l-.16.08-.02.11.09.51.16.19.15.02.16-.17.05-.09.16-.55-.03-.38-.33.02-.23.23v.02",
		 '51017':"m455.6 157.8l.5.23.47.18 1.49.04.53.15.51 1.15-1.19 3.04-.36.42-2.05-.29-.08-.05-.51-.64h-.02l-.67.04-.51.19.7-1.59 1.2-2.86",
		 '51091':"m460.1 155.1l-.09.13-.52 1.55-.04.19.04.14-.18.55-.67.77-.53-.15-1.49-.04-.47-.18-.5-.23-.24-.49v-.001-.05l.62-.96.27-.95.05-.91.02-1.07 1 .24.2.09.19.19.61.91 1.73.29",
		 '51079':"m468.2 153.5l.2-.75 2.13 2.3-.61 1.26-3.13-.65 1.41-2.16",
		 '51165':"m461.8 150.2l1.84-.36 2.61 1.61-.26 1.28.8.41.75.3.16.05.53.001-1.41 2.16-.69 1.07-1.73-.99-1.53-.64-2.08-1 1.01-3.91zm2.47 3.17l-.05.04-.24.47-.05.22.09.56.04.04.25-.07.54-.48v-.2l-.15-.24-.43-.35",
		 '51015':"m460.1 155.1l.7-1 2.08 1 1.53.64 1.73.99-.06.36-.06.65.12.49v.12l-.14.24-.38.33-.77 1.58-.34.55-.78-.04-.17.04-.13.07-.61.37-.32-.25-1.72-.83-1.63-.85-.51-1.15.67-.77.18-.55-.04-.14.04-.19.52-1.55.09-.13zm3.22 2.28l-.56.23-.07.21-.03.23.1.18.24.12h.37l.19-.2.07-.18.001-.27-.09-.2-.09-.13-.11-.03-.02.03zm1.44.93l-.1-.001-.23.23-.16.24v.06l.06.15.34.15.44-.12.05-.14.04-.28v-.07l-.14-.24-.26.001-.04.03",
		 '51125':"m465.6 158.9l2.68 3.66-1.38 2.64-.41.21h-.32l-.94-1.43-.26-.29-1.04-.94-.04-.04-.69-.29-.33.19-.05-1.15.61-.37.13-.07.17-.04.78.04.34-.55.77-1.58",
		 '51029':"m472.4 162.4l.04.72-.67 1.91-.78 2.28-1.43-.5-2.67-1.55 1.38-2.64.03-.09.23-.27.47-.14.54-.07.06-.04.05-.04.001-.05-.03-.4 2.76.89",
		 '51011':"m469.5 166.8l-.52 2.07-1.33.82-2.47-2.52 1.23-1.71.41-.21 2.67 1.55",
		 '51031':"m464.6 167.7l.59-.57 2.47 2.52-.38 2.49-1.98-.16-.28-.23-1.5-.39-.87.19-.24.3-.61.83 1.19-4.16.62.36 1-1.17",
		 '51083':"m465.3 172l1.98.16 1.87.58.9 1.38.04 1.24.001.03.33.37.2.08-.5 2.15-.63.12-3.46.63-.81.14.08-6.88",
		 '51143':"m461.8 172.7l.61-.83.24-.3.87-.19 1.5.39.28.23-.08 6.88-1.26.23.3-.42.03-.07-.04-.11-.57-.59-1.3.2-.27.33-.08.14v.04l.36.22.28.49-.41.08-2.07.35.05-4.15.05-2.47 1.49-.44",
		 '51690':"m458.1 177.8l.07-.07.53.1.25.66-.05.23-.22.12-.64-.33-.19-.19.21-.49.05-.04",
		 '51590':"m464 179.1l-1.29.23-.28-.49-.36-.22v-.04l.08-.14.27-.33 1.3-.2.57.59.04.11-.03.07-.3.42",
		 '51680':"m464.6 167.7l-1 1.17-.62-.36-.3-1.31.77-.23 1.17.73",
		 '51515':"m460.1 169.1l.03-.14.46-.09.28.18-.14.55-.42.06-.15-.06-.23-.24.001-.24h.15",
		 '51770':"m455.5 170.4l.02-.04.44-.37.66.1.25.13.05.04.05.15-.18.65-.19.33-.18.17h-.09l-.74-.31-.03-.06-.09-.15v-.59l.03-.06",
		 '51530':"m460.6 163.5v-.02l.23-.23.33-.02.03.38-.16.55-.05.09-.16.17-.15-.02-.16-.19-.09-.51.02-.11.16-.08",
		 '51580':"m454.5 164l.15-.13.36.08.05.11.08.62-.33.27-.18-.12-.14-.13.02-.69",
		 '51678':"m460.3 163.2l-.31.35-.16.11-.18-.15-.11-.35.15-.22.27-.08.38.09-.04.26",
		 '51820':"m464.7 158.3l.04-.03.26-.001.14.24v.07l-.04.28-.05.14-.44.12-.34-.15-.06-.15v-.06l.16-.24.23-.23.1.001",
		 '51790':"m463.3 157.4l.02-.03.11.03.09.13.09.2-.001.27-.07.18-.19.2h-.37l-.24-.12-.1-.18.03-.23.07-.21.56-.23",
		 '51540':"m469 157.9l.22-.02.23.1.06.16-.07.39-.13.18-.4.12h-.12l-.09-.14-.02-.11.03-.25.06-.19.22-.24",
		 '51660':"m464.2 153.3l.43.35.15.24v.2l-.54.48-.25.07-.04-.04-.09-.56.05-.22.24-.47.05-.04",
		 '51003':"m466.8 155.7l3.13.65 1.72.36-.67 1.81-1.34 3 .03.4-.001.05-.05.04-.06.04-.54.07-.47.14-.23.27-.03.09-2.68-3.66.38-.33.14-.24v-.12l-.12-.49.06-.65.06-.36.69-1.07zm2.23 2.28l-.22.24-.06.19-.03.25.02.11.09.14h.12l.4-.12.13-.18.07-.39-.06-.16-.23-.1-.22.02",
		 '51065':"m471 158.5l2.66.83-.57 2.19-.66.89-2.76-.89 1.34-3",
		 '51049':"m472.4 162.4l.66-.89 1.09 1-.1 2.7-.82 1.3-2.23.79.78-2.28.67-1.91-.04-.72",
		 '51147':"m473.2 166.5l.21.91.35 2.26-1.95.91-2.79-1.72.52-2.07 1.43.5 2.23-.79",
		 '51037':"m467.7 169.7l1.33-.82 2.79 1.72-.05 2.5-1.11 2.76-.2-.08-.33-.37-.001-.03-.04-1.24-.9-1.38-1.87-.58.38-2.49",
		 '51117':"m476.7 173.6l.38 3-2.8.54-1.34.27-2.8.52.5-2.15 1.11-2.76 4.96.56",
		 '51570':"m481.7 166.7l-.18-.33-.05-.21.07-.12.17-.2.22-.03.13.1.02.13-.02.07.06.35v.02l-.08.05h-.04l-.1.04-.12.08-.07.05",
		 '51111':"m473.8 169.7l2.6.79.36 3.17-4.96-.56.05-2.5 1.95-.91",
		 '51670':"m482.3 165.4l.5-.11h.05l.3.16.1.11-.07.25-.41.33-.26-.19-.22-.55",
		 '51510':"m481.4 145.4l.07.64v.06l-.62.28-.56-.11.23-.55.1-.2.76-.12",
		 '51139':"m468.2 148.1l1.17.72-.21 1.79-.76 2.15-.2.75-.53-.001-.16-.05-.75-.3-.8-.41.26-1.28.32-1.14.28-.74.42.09.3-.39.66-1.17",
		 '51171':"m468.5 145.7l-.28 2.4-.66 1.17-.3.39-.42-.09-.28.74-.32 1.14-2.61-1.61.38-1.3.13-.41.02-.04.04-.07.51-.49.04.07.04.06h.03l.95-.89.32-.7.02-.09v-.49l2.37.2",
		 '51043':"m470.6 141.9l2.32 1.3-1.02 1.77-.33.52-1.59-.45.61-3.14",
		 '51840':"m469.3 142.8l.21.02.42.21-.42 1.01-.33-.26-.13-.52.02-.21.08-.27.15.02",
		 '51069':"m467 139.9l1.33.74 2.22 1.26-.61 3.14-1.51.66-2.37-.2.28-.47.11-.11.3-.3.15-.28.15-.35.04-.21.03-2.46-.11-1.41zm2.25 2.93l-.15-.02-.08.27-.02.21.13.52.33.26.42-1.01-.42-.21-.21-.02",
		 '51187':"m470 145l1.59.45-.95 1.73-1.27 1.6-1.17-.72.28-2.4 1.51-.66",
		 '51157':"m469.4 148.8l1.27-1.6.48.36.82.81.2.36.06.06.13.09.43.12.2-.05-.91 1.11-1.03 1.57-.57-.04-1.28-1.01.21-1.79",
		 '51113':"m469.1 150.6l1.28 1.01 1.89 2.56-1.81.87-2.13-2.3.76-2.15",
		 '51137':"m470.5 155l1.81-.87.9-.68.76-.5.54-.19.92-.24.47.14.16.08-1.89 3.59-2.54.27-1.72-.36.61-1.26",
		 '51109':"m471.6 156.7l2.54-.27 2.92.88-.4 3.77-1.53-.92-.26-.28-.79-.46-.49-.08-2.66-.83.67-1.81",
		 '51075':"m478.4 161l.12 1.87-.61-.24-1.21-.2-1.24.04v.06l-.03.07-.08.06-.17.04h-.08l-.86-.15-.11-.09-1.09-1 .57-2.19.49.08.79.46.26.28 1.53.92 1.72-.02",
		 '51145':"m478.5 162.9l-1.64 2.23-.21-.34-.33-.27-.05-.03-.27-.04-.64.06-.41.28-.36.32-.26.16-.22.02-.1-.1.1-2.7.11.09.86.15h.08l.17-.04.08-.06.03-.07v-.06l1.24-.04 1.21.2.61.24",
		 '51007':"m474 165.2l.1.1.22-.02.26-.16.36-.32.41-.28.64-.06.27.04.05.03.33.27.21.34-.18.03-.02.02.05.44.05.22 1.37.99.07.02h.12l.05-.03.001-.03v-.18l.18-.23.05-.02.43.001.24.32-1.28 1.21-4.61-.49-.21-.91.82-1.3",
		 '51135':"m473.8 169.7l-.35-2.26 4.61.49-.44 2.79-1.23-.22-2.6-.79",
		 '51025':"m476.4 170.4l1.23.22 2.56.75.47 2.3-.71 2.38-1.34.26-1.48.29-.38-3-.36-3.17",
		 '51053':"m479.3 166.7l2.14.14-.06.38.33.21.34-.02.45 2.27-1.93 1.9-.43-.14-2.56-.75.44-2.79 1.28-1.21",
		 '51595':"m482.1 173.5l.11.38-.001.17-.41.27-.24-.03-.16-.42-.001-.09.07-.17.46-.2h.12l.09.09",
		 '51081':"m482.9 173.3l1.76 1.81-4.75.94.71-2.38-.47-2.3.43.14.71.29.98 1.45.64.05zm-.83.16l-.09-.09h-.12l-.46.2-.07.17.001.09.16.42.24.03.41-.27.001-.17-.11-.38",
		 '51735':"m492.3 166.2l-.19-.73.03-.21-.02-.17v-.05l.6-.07.5.48.13.38-1.04.38",
		 '51620':"m488 172.3l.31.73v.02l-.56.15-.25-.31-.09-.32v-.19l.13-.07h.22l.24-.02",
		 '51175':"m488 172.3l-.24.02h-.22l-.13.07v.19l.09.32.25.31.56-.15v-.02l.13.03.06 1.31-2.5.47-1.32.29-1.76-1.81 4.19-3.98.91-.87v3.83",
		 '51650':"m492.3 166.2l1.04-.38.65 1.03-.4.69-.99.28-.67-1.4.38-.23",
		 '51830':"m489.3 164.9l.001.06-.11.09-.19.06-.34.04-.22-.001-.11-.09-.08-.1-.11-.61.21-.2.08.11.05.06.3.02.12-.03.27.23.09.38",
		 '51700':"m490 165.2l1.88 1.19.67 1.4-.08.23h-.08l-.12-.05-2.29-1.51-.09-.08-.07-.73.18-.45",
		 '51740':"m492.7 168.8l.61-.41.81 1.12-.98.38-.45-.67.02-.42",
		 '51199':"m488.5 164.2l.44-.98 1.96 1.44-.03.1.12.09.24.07.75-.28.05.02.07.32v.05l.02.17-.03.21.19.73-.38.23-1.88-1.19-.71-.33-.09-.38-.27-.23-.12.03-.3-.02-.05-.06",
		 '51095':"m487.9 162.3l.39.39.67.54-.44.98-.08-.11-.21.2.11.61.08.1.11.09.22.001.34-.04.19-.06.11-.09-.001-.06.71.33-.18.45-1.15-.18-1.61.22-.61-1.92 1.38-1.47",
		 '51181':"m487.1 165.7l1.61-.22.79.87-1.47 2.17-.91.87-.27-.69-.96-.67-.04.05h-.27l-.82-.3-.05-.03-.04-.05v-.04l1.48-2.11.96.14",
		 '51183':"m484.6 167.6v.04l.04.05.05.03.82.3h.27l.04-.05.96.67.27.69-4.19 3.98-.64-.05-.98-1.45-.71-.29 1.93-1.9 2.13-2",
		 '51149':"m482.8 165.3l.11-.13 3.16.32-1.48 2.11-2.13 2-.45-2.27.42.11.18-.53-.06-.32-.5-.25.26-.95.22.55.26.19.41-.33.07-.25-.1-.11-.3-.16h-.05",
		 '51730':"m482.1 166.4l.02-.04.5.25.06.32-.18.53-.42-.11-.34.02-.33-.21.06-.38.21-.15.07-.05.12-.08.1-.04h.04l.08-.05v-.02",
		 '51087':"m478.4 161h1l1.51.83.53.19 1.17.32.21.02.63.48-.45 1.54-1.86-.5.13-.79-.05-.41-.33-.5-.29-.19-.11-.03-.22.1-.58.28-.56.5-.6.03-.12-1.87",
		 '51041':"m478.5 162.9l.6-.03.35.58.62.74 1.05-.27 1.86.5-.05.81-.11.13-.5.11-.26.95-.02.04-.06-.35.02-.07-.02-.13-.13-.1-.22.03-.17.2-.07.12.05.21.18.33-.21.15-2.14-.14-.24-.32-.43-.001-.05.02-.18.23v.18l-.001.03-.05.03h-.12l-.07-.02-1.37-.99-.05-.22-.05-.44.02-.02.18-.03 1.64-2.23",
		 '51036':"m483.5 162.9l3 .89.61 1.92-.96-.14-3.16-.32.05-.81.45-1.54",
		 '51127':"m483.6 161l.76.22h2.06l.75.5.63.54-1.38 1.47-3-.89-.63-.48.82-1.37",
		 '51760':"m481.1 163.9l-1.05.27-.62-.74-.35-.58.56-.5.58-.28.22-.1.11.03.29.19.33.5.05.41-.13.79",
		 '51630':"m478.8 153.3l-.37.13-.51-.29-.06-.28.17-.13.13-.08.25.04.19.04.17.17.04.39",
		 '51600':"m478.2 145.7l.34-.15.31.05.07.1.05.38-.24.15-.35.06-.31-.22v-.16l.12-.21",
		 '51683':"m477 147.1l.22.09.09.08.08.07v.39l-.49.5-.27-.12-.08-.22.02-.14.2-.45.2-.21",
		 '51107':"m473.5 140.6l.39-.05 2.39.84-.4.63-.04.11v.06l-.02.16-.001.12v.001l.07.22.06.08.07.04.64.43h.02l.36.02.48-.02.47-.05-1.5 3.1-1.41-.99-3.18-.32 1.02-1.77.6-2.61",
		 '51061':"m471.9 145l3.18.32-.35 1.39.03.14 2.11 2.7.38.47-.66 2.07-.92.07-.13-.02-.16-.06-.09-.09-.85-1.1-.61-.97-.9-.91-.2.05-.43-.12-.13-.09-.06-.06-.2-.36-.82-.81-.48-.36.95-1.73.33-.52",
		 '51047':"m472.9 149l.9.91.61.97.85 1.1.09.09.16.06.13.02.92-.07.27.5-.81.25-.16-.08-.47-.14-.92.24-.54.19-.76.5-.9.68-1.89-2.56.57.04 1.03-1.57.91-1.11",
		 '51177':"m476.9 152.5l1.01.58.51.29.37-.13.86.33-2.05 3.79-.49-.13-2.92-.88 1.89-3.59.81-.25",
		 '51085':"m477.1 157.3l.49.13 3.45 2 .37.66.38.17 1.29.49.58.31-.82 1.37-.21-.02-1.17-.32-.53-.19-1.51-.83h-1l-1.72.02.4-3.77",
		 '51101':"m482.4 157.8l.11-.09.24.16.97 1.38 1.84.63 1.46 1 .27.41.02.05-.02.38-.05.07-.75-.5h-2.06l-.76-.22-.58-.31-1.29-.49-.38-.17-.37-.66 1.36-1.63",
		 '51097':"m482.4 157.8l.92-1.16.69.99.41.51.72.43.42-.08.47-.19.38-.04.13.08.46.46.08.19 1.29 1.4.04.97.04.11.26.27.05.12v.06l-.02.11-.08.18-.42.48-.39-.39-.63-.54.05-.07.02-.38-.02-.05-.27-.41-1.46-1-1.84-.63-.97-1.38-.24-.16-.11.09",
		 '51119':"m487.6 158.3l1.4 1.34.39.32.1.04 1.17-.06 1.29.22.03.05-.03.1-.24.24-.19.05-.82.45-2.38-.68-1.29-1.4.57-.66",
		 '51073':"m490.8 161.1l.6 1.38h-.07l-.16.33-.05.19.14.13.59.5.43.3.05.05-.12.07-.62.36-.66.3-1.96-1.44-.67-.54.42-.48.08-.18.02-.11v-.06l-.05-.12-.26-.27-.04-.11-.04-.97 2.38.68",
		 '51103':"m488 157.9l1.2-.87 2.26 1.66.47.52.12.15v.06l-.81.21-1.41-.45-.56-.31-1.28-.97",
		 '51159':"m484.3 154.9l-.02-.1.49-.63.05.02.81.68.57.6.22.04 1.17.18 1.59 1.37-1.2.87-1.51-.81-2.15-2.22",
		 '51057':"m482.9 154.1l1.45.83 2.15 2.22 1.16 1.18-.57.66-.08-.19-.46-.46-.13-.08-.38.04-.47.19-.42.08-.72-.43-.41-.51-.69-.99-.93-2.27.5-.26",
		 '51033':"m480.1 153.5l2.32.8.93 2.27-.92 1.16-1.36 1.63-3.45-2 2.05-3.79.43-.07",
		 '51059':"m478 143.2l2.35 1.18-.89.54.02.02-.34.28.34.45.6-.29.49.35-.23.55.56.11.62-.28-.24 1.12-.26 1-.88.13-3.63-2.05 1.5-3.1zm.23 2.51l-.12.21v.16l.31.22.35-.06.24-.15-.05-.38-.07-.1-.31-.05-.34.15",
		 '51153':"m475.1 145.3l1.41.99 3.63 2.05-.48 1.89-2.37-.23-.38-.47-2.11-2.7-.03-.14.35-1.39zm1.95 1.82l-.21.21-.2.45-.02.14.08.22.27.12.49-.5v-.39l-.08-.07.14-.07.18-.16v-.08l-.07-.05-.26-.09-.14.001-.06.1-.09.16zm.62.26l.19.07.08-.2-.05-.13-.13-.04-.18.19.02.09.07.001",
		 '51179':"m476.9 152.5l-.27-.5.66-2.07 2.37.23.57 1.96-.14 1.38-.43.07-.86-.33-.04-.39-.17-.17-.19-.04-.25-.04-.13.08-.17.13.06.28-1.01-.58",
		 '51099':"m480.2 152.2l3 .31-.33 1.61-.5.26-2.32-.8.14-1.38",
		 '51193':"m483.2 152.5l.51.75.96.35.38.04.96-.11 1.13-.18.13.02h.04l.88.77.09.08.2.32.05.09-.96 1.1-1.17-.18-.22-.04-.57-.6-.81-.68-.05-.02-.49.63.02.1-1.45-.83.33-1.61",
		 '51133':"m488.6 154.6l.17.13 1.03.52.27.05.33.02.08.001.09.02h.02l.85.29.35.22v.74l-.12 1.94-.18.18-2.26-1.66-1.59-1.37.96-1.1",
		 '51115':"m490.8 161.1l.82-.45.6.13.06.02.09.06.23.3.22.41.17.54.06.22v.15l-.19.78-.34-.18-1.13-.6-.6-1.38",
		 '51710':"m494.8 167.9l.24.94-.42.3-.59.37-.81-1.12 1.57-.48",
		 '51093':"m488 172.3v-3.83l1.47-2.17 2.39 2.34-.44.17-.04.02-2.95 4.21-.13-.03-.31-.73",
		 '51800':"m492.7 168.8l-.02.42.13 4.17-.51.11-3.75.86h-.02l-.06-1.31 2.95-4.21.04-.02.44-.17.8.16",
		 '51550':"m494.1 169.6l.59-.37 1.82 3.46-1.92.41-1.79.38-.13-4.17.45.67.98-.38",
		 '51810':"m494.8 167.9l1.5-.34.2-.03h.07l.13.06.08.13 2.07 3.9.16.41-2.57.55-1.82-3.46.42-.3-.24-.94",
		 '51685':"m477.3 146.8l-.14.02-.07.14-.07.13.22.09.1.09.06-.04.06-.04.04-.02.06.09v.07l.12.03.16.07.07-.2-.06-.14-.13-.04-.07-.03v-.07l-.07-.04-.27-.1z",
		 '50009':"m511.2 56.4l3.48-.96-.22.45-.001 3.16.08.22.34.33.41.51.23.28.04.06.23.38-.12 1.12-.1.29-.04.08-.45.78-.04.06-.05.08-.13.16-.02.04-.29.21-.19-.02-.6.78-1.01-.83-.43-2.61.39-1.05-1.08-.41-.36-.14.001-1.62-.06-1.34",
		 '50019':"m511.2 56.4l.06 1.34-.001 1.62.36.14-.32.8-.24.19-.93-.35-.36 1.68-.3 1.25-1.13-.27-.17-.16-.78-.96-.06-.56-1.43-.33-.52-2.93 5.83-1.46",
		 '50003':"m508.6 80.5l-.28-.02.05.75.23 1.17-1.19.22.04.27.44 2.13.8-.15.5 2.38-.86.18-2.24.48-.69-2.47-.96-4.71 3.56-.69.59.46",
		 '50013':"m499.8 59.3l.56 3.72-.7 2.3-.15-.13-.27-.5-.46-2.69-.33-2.11.001-.22 1.33-.36",
		 '50023':"m508.1 63.94l2.14.55.04.03.07.13-.001.21-.68 2.73-.51-.09-1.33 1.15-.13.99-.25 1.07-.57-.08-2.31-1.19.15-1.57-.15-.04.27-1.69.15-.68 1.51.33 1.38-.71.25-1.14",
		 '50005':"m511.7 59.5l1.08.41-.39 1.05.43 2.61 1.01.83-.63.4-.62.39-.05.05-.03.02-.3.54-.03.13v.08l.3 1.03.17.23.15.12-1.28-.15-1.18.42-.63-.12.68-2.73.001-.21-.07-.13-.04-.03-2.14-.55.28-1.11 1.13.27.3-1.25.36-1.68.93.35.24-.19.32-.8",
		 '50015':"m505.9 60.81l1.43.33.06.56.78.96.17.16-.28 1.11-.25 1.14-1.38.71-1.51-.33-1.63-2 .41-1.14.69-1.17 1.15-.49.37.18",
		 '50011':"m505.4 57.88l.52 2.93-.37-.18-1.15.49-.69 1.17-.41 1.14-2.99-.46-.56-3.72 5.65-1.38",
		 '50007':"m500.3 62.98l2.99.46 1.63 2-.15.68-.27 1.69.15.04-.15 1.57-.41-1.07-.54-.33-2.2.87-.49.05-.3-1.57.05-.54-.001-.14-.17-.46-.13-.28-.43-.52-.26-.15.7-2.3",
		 '50001':"m500.9 68.94l.49-.05 2.2-.87.54.33.41 1.07 2.31 1.19-.24.96-.19.57-.39.37-.75.64.16.34.09.15-.71-.09-1.12.33-.54.21.33.86-1.36.5-.33-.65-.16-.28-1.07-2.54-.02-.04-.02-.43v-.42-1.07l.38-1.08",
		 '50021':"m502.1 75.4l1.36-.5-.33-.86.54-.21 1.12-.33.71.09.66-.59.79.19.16.17 1.17 1.45.21 2.73-.4 1.36-.13 1.09-3.56.69-.55-2.54-1.55-.34-.31-.13-.04-.05-.09-.75.05-.52.17-.96",
		 '50025':"m508.6 80.5l1.32.11 1.17-.47 1.11-.24.04.95.3.47.02.08.25 1.38-.59 2 .04.13.27.57 1.03.83-4.36.93-.5-2.38-.8.15-.44-2.13-.04-.27 1.19-.22-.23-1.17-.05-.75.28.02",
		 '50027':"m506.6 71.6l.05.2.12.19.74.06 1.06.13 2.7.31 1.2.17-.57 2.43-.35 1.15.45 2.06.19.5-.04 1.13-1.11.24-1.17.47-1.32-.11-.59-.46.13-1.09.4-1.36-.21-2.73-1.17-1.45-.16-.17-.79-.19-.66.59-.09-.15-.16-.34.75-.64.39-.37.19-.57",
		 '50017':"m512.7 67.4l-.25 5.2-1.2-.17-2.7-.31-1.06-.13-.74-.06-.12-.19-.05-.2.24-.96.57.08.25-1.07.13-.99 1.33-1.15.51.09.63.12 1.18-.42 1.28.15",
		 '53047':"m82.4 5.2l9.55 2.51 4.74 1.19 2.47.61-.26 1.11-.61 2.1-.45 1.02-.52 2.13-.03 1.02-1.35 5.46-.07.06-1.08-.08-.02-.25.23-.26.16-.23.05-.15-.38-1.37-.06-.14-.14-.21-.54-.3-.19.02-.98.32-.93.47-2.36-.1-.59-.54.18-.64-.74-.3-.65.17-.44.14-.05.03-.02.04-.17.98v.04l.07.14-.89-.23-.77-.35-1.66-3.37-1.23-2.73-.25-1.99-.03-.16-.32-.06v-1.67l.14-.04.77-.56.02-.15-.25-2.47-.13-.54-.25-.7",
		 '53069':"m48.6 31.7l.37-1.18 1.92.6 1.23.36 1.21.34-.73 2.64-1.39-.06-.07-.02-.38-.59.2-.58-.09-.3-.13-.23-.04-.06-.03-.001-.05-.03-.58-.03-1.43-.84",
		 '53003':"m105.4 44.4l1.54.83-.19.56.28 1.14.001.05.09.71.05 1.11-.43 1.18.06.89-4.94-1.15.36-1.55.53.12.57-2.55.18-.73.23-.14.41-.09 1.11.27.14-.64",
		 '53023':"m100.4 41.1l1.06-.61.12-.04h.53l.22.09 1.3.53.42.26.44.36.87 1.61.07.55-.09.54-.14.64-1.11-.27-.41.09-.23.14-.18.73-.57 2.55-.53-.12-.36 1.55-1.08-.26.35-1.53.56-2.74-.71-1.92-1.1-.25.27-1.11.28-.79",
		 '53013':"m97.1 40.7l.1.09.28.49.09.05.38.06h.08l2.15-.14.29-.17-.28.79-.27 1.11 1.1.25.71 1.92-.56 2.74-.35 1.53-3.28-.79-.17-.04.14-.42.52-2.16-1.09-.26-.83-1.35.78-3.32.22-.39",
		 '53071':"m97.1 40.7l-.22.39-.78 3.32.83 1.35 1.09.26-.52 2.16-.14.42-8.66-2.08.12-2.53.13-.16.1-.09.4-.12.22-.03.88.05.66-.36 1.14-.72.45-.4.26-.32.34-.73.07-.11.27-.22.47-.28.79-.36h.04l1.35.22.59.22.11.12",
		 '53021':"m87.6 36.49l1.55.38 3.6.92 4.63 1.07-.25 1.92-.1-.09-.11-.12-.59-.22-1.35-.22h-.04l-.79.36-.47.28-.27.22-.07.11-.34.73-.26.32-.45.4-1.14.72-.66.36-.88-.05-.22.03-.4.12-.1.09-.13.16-.57-.53-.2-.11-.25-.08-.27-.17-.41-.59-.001-.07.05-.11.7-2.51v-.41l-.29-.47-.39-.54-.2-.46-.23-.75.001-.16.9-.54",
		 '53075':"m102.5 33.2l6.74 1.56-.38 1.65-1.65 7.34-.33 1.46-1.54-.83.09-.54-.07-.55-.87-1.61-.44-.36-.42-.26-1.3-.53-.22-.09h-.53l-.12.04-1.06.61-.29.17-2.15.14h-.08l-.38-.06-.09-.05-.28-.49.25-1.92 1.76.02.32-.3.25-.28.36-.5.24-.57 1-4.32 1.17.27",
		 '53063':"m108.1 24.1l3.36.79-.19.85-1.7 7.64-.3 1.34-6.74-1.56 1.67-7 .12.18.08.05 1.78.64.36.07.73-3.15.83.2",
		 '53051':"m114.2 13.1l-.44 1.9-2.32 9.96-3.36-.79.25-1.09-.21-1.53 1.17-5.08-1.09-.25.25-1.08.89-1.02.63-.53.68-.3.23-.96 3.33.77",
		 '53065':"m110.9 12.3l-.23.96-.68.3-.63.53-.89 1.02-.25 1.08 1.09.25-1.17 5.08.21 1.53-.25 1.09-.83-.2-.73 3.15-.36-.07-1.78-.64-.08-.05-.12-.18-1.65-.21-.64-.13-.05-.26-.21-.67-.39-.99-.03-.03h-.43l-.56.22-.26.14-.13-1.73.001-.05.06-.04.37-.14.17.04 1.03-.26 1.17-1.79.14-.26 1.41-4.63.15-1.29-.02-.37-.19-.87-.12-.1-.05-.48.11-.72.1-.43.13-.16.16-.15 6.42 1.5",
		 '53043':"m94.8 22.33l1.08.08.13.41.07.11.61.43.21.001.04-.08 1.46.47.2.41.46.55.33.21.08.02h.13l.13-.09.29-.63.26-.14.56-.22h.43l.03.03.39.99.21.67.05.26.64.13 1.65.21-1.67 7-1.17-.27-8.74-2.12 2.14-8.47",
		 '53001':"m101.4 32.92l-1 4.32-.24.57-.36.5-.25.28-.32.3-1.76-.02-4.63-1.07-3.6-.92-1.55-.38.55-2.18 1.18.3 2.14.55 1.1-4.35 8.74 2.12",
		 '53025':"m94.7 22.1l.02.25-2.14 8.47-1.1 4.35-2.14-.55-1.18-.3-.55 2.18-.9.54.05-.05v-.09l-.21-.42-.1-.12-.11-.06-.07.03-.36.28-.27.23-.28.16-.23.09h-.22l-1.6-.21-.3-.1-.07-.04-.51-1.57.4-.42.19-.23.06-.17.08-1.72-.21-1.51.25-.68.3-.49.2-.73v-.08l-.001-.06.53-1.2 1.29-1.21 2.93.69 2.4-1.85 1.57-2.37.16-.65 1.14-.69 1.03.25",
		 '53005':"m82.94 36.74l.07.04.3.1 1.6.21h.22l.23-.09.28-.16.27-.23.36-.28.07-.03.11.06.1.12.21.42v.09l-.05.05-.001.16.23.75.2.46.39.54.29.47v.41l-.7 2.51-.05.11.001.07.41.59.27.17.25.08.2.11.57.53-.12 2.53-.25.21-.19.09-.66.19-.32.05-.39-.03-.23-.06-.25-.13-1.35-.19-.51-.03-.51-.03-1.75.22-.94-.09-.86-.09.93-3.54.2-.83.02-.36 1.33-5.16",
		 '53039':"m81.1 44.1l-.67 2.55h-1.24l-1.35.17-.29.07-.47.36-1.78-.11-.7-.12-.18-.12-.11-.16-.23-.44-.25-.18-.38-.09-.19.06-.39.18-.96.14-.79.12-.47.14-.19-.26-3.27-1.53-.31-.06-.62-.09-.61-.53.23-.67-.79-.26.28-1.15.59-2.09.77.21.86.23 2.35.64.72.23 4.14 1.13 6.32 1.65",
		 '53011':"m55.1 39.52l1.38-.7 1.37-.29.41.06.2.1.16.16.27.13.8-.31.81-.33-.51 1.82-.59 1.94-.71 2.51h-.15-.02l-.25-.06-.3-.15-2.5-1.54-.24-.18-.46-.48-.18-.23v-.32l.09-.23.19-.33.23-1.57",
		 '53059':"m67.91 35.94l-1.18 4.27-.77-.21-.59 2.09-.28 1.15.79.26-.23.67-.97-.02-.74-.06-.24-.06-.62-.34-.53.03-.38.2-.25.23-3.2.45.71-2.51.59-1.94.51-1.82 1.2-4.09 6.19 1.69",
		 '53015':"m61.72 34.3l-1.2 4.09-.81.33-.8.31-.27-.13-.16-.16-.2-.1-.41-.06-1.37.29-1.38.7.07-.21.08-1.23-.25-1.41-.09-.34-1.46-1.78-.42-.18-.46.09.73-2.64 1.09.28.69.2 5.06 1.47 1.55.46",
		 '53049':"m47.3 24.54l2.05.66 2.13.6 2 .62-.57 2.08-.21.91-.25.91-.36 1.17-1.23-.36-1.92-.6-.37 1.18-1.46.23-.27-.16-1.03-1.41.69-2.03.15.45.2.1h.1l.45-.05.57-.44.08-.17.53-1.81.04-.76-.73.23-.15.02-.13-.13-.41-.47-.05-.08-.02-.03-.02-.07.17-.6",
		 '53041':"m53.5 26.43l1.79.51-.11.36 1.97.58 6.22 1.8 1.35.65 1.72.62.14-.13.36-.23.12-.06.18-.05 2.61.72.32.84.04.38-1.03 3.56-.13.24h-.04l-.06-.001-1.03-.28-6.19-1.69-1.55-.46-5.06-1.47-.69-.2-1.09-.28-1.21-.34.36-1.17.25-.91.21-.91.57-2.08",
		 '53067':"m56 23.2l1.08.32 1.91-.41.26-.1.37-.21.56 1.76.07.79.21.49.87 1.69.24.36.3.25.25.12 1.24 1.38-6.22-1.8-1.97-.58.11-.36.7-3.69",
		 '53053':"m60.5 20.31l2.39.7-.26.51.82.74.51.9 2.12 1.84.73.41 1.02.38.03-.04.3-.14.07-.03h.05l.11.03 1.19.59.59.57 1.02.74.31.11-.1.41-1.38 1.5-.09 1.54-.02.04-.09.09-2.61-.72-.18.05-.12.06-.36.23-.14.13-1.72-.62-1.35-.65-1.24-1.38-.25-.12-.3-.25-.24-.36-.87-1.69-.21-.49-.07-.79-.56-1.76-.05-.8.001-.07.08-.17.08-.09.19-.11.17-.14.14-.21.13-.38.17-.55",
		 '53077':"m71.5 27.63l.85.2.18.14.74.96.28.49v.04l.02.29.25.7.1.17 3.36.89-.03 1.13.54 1.31 3.1.85 1.52.37.51 1.57-1.33 5.16-.02.36-.2.83-.26.99-6.32-1.65-4.14-1.13-.72-.23-2.35-.64-.86-.23 1.18-4.27 1.03.28.06.001h.04l.13-.24 1.03-3.56-.04-.38-.32-.84.09-.09.02-.04.09-1.54 1.38-1.5.1-.41",
		 '53037':"m71.5 27.63l.03-.58.17-2.96.03-.15 1.12-.9 1.67-1 .97-.1.45.96.68 1.31.7.52.72.59 1.6 1.3.49.58.17.29.23.25 2.52.64.61.72.001.06v.08l-.2.73-.3.49-.25.68.21 1.51-.08 1.72-.06.17-.19.23-.4.42-1.52-.37-3.1-.85-.54-1.31.03-1.13-3.36-.89-.1-.17-.25-.7-.02-.29v-.04l-.28-.49-.74-.96-.18-.14-.85-.2",
		 '53017':"m94.7 22.1l-1.03-.25-1.14.69-.16.65-1.57 2.37-2.4 1.85-2.93-.69-1.29 1.21-.53 1.2-.61-.72.09-.17.11-.31.13-.38v-.07l-.28-.44-.87-.39-.13-.07-.25-.22-.04-.11-.03-.44v-.31l.06-.18.27-.56 1.41-2.48.13-.14.08-.05.13-.05.55-.07.11.05.11.12.05.07.06.02.84-.02 1.04-1.01.62-.68v-.1l-.03-.15-.07-.14v-.04l.17-.98.02-.04.05-.03.44-.14.65-.17.74.3-.18.64.59.54 2.36.1.93-.47.98-.32.19-.02.54.3.14.21.06.14.38 1.37-.05.15-.16.23-.23.26",
		 '53019':"m99.1 9.51l5.34 1.29-.16.15-.13.16-.1.43-.11.72.05.48.12.1.19.87.02.37-.15 1.29-1.41 4.63-.14.26-1.17 1.79-1.03.26-.17-.04-.37.14-.06.04-.001.05.13 1.73-.29.63-.13.09h-.13l-.08-.02-.33-.21-.46-.55-.2-.41-1.46-.47-.04.08-.21-.001-.61-.43-.07-.11-.13-.41.07-.06 1.35-5.46.03-1.02.52-2.13.45-1.02.61-2.1.26-1.11",
		 '53029':"m65.6 8.46l.04-.04.08-.04.06.04.03.06.06.16.32 1.08.04.15-.02.13-.02.03-.19.11-.08.02-.18-.04-.05-.02-.09-.2-.07-.06-.13-.04h-.18l-.08.04-.3.23-.23.26-.05.21.55 1.55.19.36.11.02.17.09.56.92.16.58-.09.37-.14.28-.31.23-.3-.04-.82-1.63-.19-.77-.18-.62-.53-1.34.24-.65 1.23-1.52h.18l.19.08",
		 '53061':"m67.3 10.34l4.53 1.28 2.17.61.63.19 4.19 1.15.09 1.16-.15.7-.15.53-.72.23h-.05l-.65.05-.36.13-.67 1.31-.12 1.11.07.89-2.54-.7-.31-.06-1.09-.28-4.14-1.14-2.71-.79v-.03l.1-.28 1.25-1.58.27-.02.25.03.2-.1.05-.06.15-.49v-.18l-.34-.36-.36-.74-.08-.37v-.02l.09-.32.09-.28-.08-.74v-.32l.38-.49",
		 '53033':"m76.1 19.66l.2.58-.09.2-.52.47-.03.05-.03.2-.09.77-.97.1-1.67 1-1.12.9-.03.15-.17 2.96-.03.58-.31-.11-1.02-.74-.59-.57-1.19-.59-.11-.03h-.05l-.07.03-.3.14-.03.04-1.02-.38-.73-.41-2.12-1.84-.51-.9.76-.06.13-.06.14-.53v-.12-1.07l.37-2.66.37-1.07 2.71.79 4.14 1.14 1.09.28.31.06 2.54.7",
		 '53035':"m62.2 16.27l1.61-1.06.37-.77.35.15.13.21.03.34-.18 1.2-.69 2.44-.21.96-.65 1.27-2.39-.7.43-1.42-1.26-.4-.37-.08-.37-.11.13-.14.68-.62.05-.04.19-.05 2.16-1.18",
		 '53045':"m55 17.2l.33-1.09 4.66 1.38-.19.05-.05.04-.68.62-.13.14.37.11.37.08 1.26.4-.59 1.98-.13.38-.14.21-.17.14-.19.11-.08.09-.08.17-.001.07.05.8-.37.21-.26.1-1.91.41-1.08-.32-2.4-.68-.05-.02.5-2.2.96-3.19",
		 '53027':"m47.93 14.81l1.91.58.61.4 4.57 1.38-.96 3.19-.5 2.2.05.02 2.4.68-.7 3.69-1.79-.51-2-.62-2.13-.6-2.05-.66.11-1.12.33-.18.37.21 1.56-.14.21-.04h.001l-.09-.19-1.02-1.23-.29-.23-.34-.13-.63-4.39v-.16l.08-.63.3-1.48",
		 '53031':"m47.1 9.9l1.45.42.51.18 2.09.65 3.14.94 1.33.46.64.32 4.71 1.38.8-2.84 1.12-.16.44.001.2.05.46.69-.38 2.36-1.2 1.19-.23.51-.04.14.04.07-2.16 1.18-4.66-1.38-.33 1.09-4.57-1.38-.61-.4-1.91-.58.03-.15.05-.52.05-.61.04-1.41-.001-.11-.23-1.02-.05-.09-.37-.7-.02-.03-.15-.18-.18-.1",
		 '53009':"m47.1 9.9l-.09-.25-.02-1.15.23-2.22.78-2.81.07-.04.09-.02.53.15.3.26.28.24.33.33.1.11.64.77 2.56 2.43.53.33.92.41 3.56 1.56 1.77.4 1.24.45.88.55-.8 2.84-4.71-1.38-.64-.32-1.33-.46-3.14-.94-2.09-.65-.51-.18-1.45-.42",
		 '53057':"m82.1 9.65v1.67l-1.29-.52-.79-.001-.97.32-.09.08-.12.23-.49 1.64.45.51-4.19-1.15-.63-.19-2.17-.61-4.53-1.28-.15-.42-.29-1.87.27-.05.02-.001.82-1.46-.11-.34-.24-.33.19.02 2.88.81 7.2 2.06 2.84.77.48-.02.9.17",
		 '53007':"m82.1 11.32l.32.06.03.16.25 1.99 1.23 2.73 1.66 3.37.77.35.89.23.03.15v.1l-.62.68-1.04 1.01-.84.02-.06-.02-.05-.07-.11-.12-.11-.05-.55.07-.13.05-.08.05-.13.14-1.41 2.48-.27.56-.06.18v.31l.03.44.04.11.25.22.13.07.87.39.28.44v.07l-.13.38-.11.31-.09.17-2.52-.64-.23-.25-.17-.29-.49-.58-1.6-1.3-.72-.59-.7-.52-.68-1.31-.45-.96.09-.77.03-.2.03-.05.52-.47.09-.2-.2-.58-.07-.89.12-1.11.67-1.31.36-.13.65-.05h.05l.72-.23.15-.53.15-.7-.09-1.16-.45-.51.49-1.64.12-.23.09-.08.97-.32.79.001 1.29.52",
		 '55029':"m369.2 85.2l.09-.63.67-1.21.22-.34 2.4-2.75 1.67-3.04.48-.42.3-.2h.21l.1.02.06.05.09.15.001.41-.03.25-.46 1.83-.27.41-.79 1.81-1.18 2.78-.23.59-3.32.27",
		 '55061':"m369.2 85.2l3.32-.27-.51.95-.22.71-.1.54-.33 2.42-2.05.18-.32-4.09.2-.44",
		 '55093':"m323.1 85.6l5.72-.16.1 2.24-1.59 1.92-.03-.05-.09-.08-.1-.05-.16-.04-1.24-.05-.39-.05-.15-.07-.67-.66-.02-.13-.1-.13-.95-.81-.65-.38.32-1.52",
		 '55091':"m328.9 87.7l4.44-.18.05 1.12-3.24.14-.18.09-.06.05-.05.24-.32 1.75-.03.36-1.48-.56-.73-1.09 1.59-1.92",
		 '55011':"m334.6 88.6l.21 4.51-.09 1.81-.05 1.08-2.91-2.06-2.15-2.67.03-.36.32-1.75.05-.24.06-.05.18-.09 3.24-.14 1.11-.05",
		 '55121':"m337.9 88.4l.23 4.51h.11l.13 2.16-.33-.06-1.1.32-.27.38-.001.05-.02.25.06.1.08.07.07.14v.06l-.91.05-1.31-.45.05-1.08.09-1.81-.21-4.51 3.33-.18",
		 '55053':"m337.9 88.4l2.23-.11.05 1.12 1.17 1.06 3.36-.19 1.11-.09.17 2.27.07 1.2h-1.22l-3.21.21-.98.06-.45.17-.25.24.06.76-1.66-.03-.13-2.16h-.11l-.23-4.51",
		 '55035':"m339.9 84.9l.18 3.37-2.23.11-3.33.18-1.11.05-.05-1.12-.1-2.23 6.66-.35",
		 '55019':"m339.8 82.7l5.55-.35.26 4.49.2 3.36-1.11.09-3.36.19-1.17-1.06-.05-1.12-.18-3.37-.13-2.24",
		 '55017':"m334 79.6l5.6-.28.32 5.6-6.66.35-.34-4.53 1.08-1.14",
		 '55033':"m332.9 80.7l.34 4.53.1 2.23-4.44.18-.1-2.24-.37-4.53 4.47-.17",
		 '55109':"m328.5 80.89l.37 4.53-5.72.16.07-.97-.2-.91-.22-.48-.03-.42.19-1.7 5.54-.21",
		 '55095':"m328.3 75.3l.21 5.54-5.54.21.14-1.12.11-.1h.001l.24-.3.34-.87-.18-.91-.44-.84-.71-.38-.18.03-.43-.07-.12-.09-.03-.25-.02-.34v-.09l.001-.2 3.22-.09-.03-1.11 3.38-.09.04 1.1",
		 '55005':"m329.4 75.3l4.44-.17.2 4.45-1.08 1.14-4.47.17-.21-5.54 1.12-.04",
		 '55107':"m341.6 74.7l.19 3.35-2.18 1.23-5.6.28-.2-4.45 7.78-.41",
		 '55119':"m347.6 77.7l.2 3.37-.88.05-.5.41.04.74-1.07.06-5.55.35-.19-3.36 2.18-1.23 2-.1 1.21-.12 1.8-.14.75-.04",
		 '55099':"m344.7 70.1l2.32-.15.08 1.09.27 4.4.15 2.23-.75.04-1.8.14-1.21.12-2 .1-.19-3.35-.23-4.42 3.37-.19",
		 '55113':"m333.4 68.5l5.62-.25.09 2.05.02.18 2.23-.13.23 4.42-7.78.41-.41-6.68",
		 '55129':"m328.9 68.6l4.47-.19.41 6.68-4.44.17-.2-4.43h-.15l-.08-2.24",
		 '55013':"m326.8 68.7l2.19-.09.08 2.24h.15l.2 4.43-1.12.04-.04-1.1-3.38.09.03 1.11-3.22.09.37-1.12.9-1.81.11-.2.11-.15.45-.39 1.88-1.24 1.31-.82-.02-.5-.02-.56",
		 '55031':"m326.5 62.2l.2.14.25.02.27-.02.04-.03.04-.04.12-.32v-.14l-.05-.06-.03-.09v-.09l.05-.1.63-.43.24-.02.51.5.13.05.05-.03.25.17.14.08.1.05.17.03 1.09-.18.26-.07 2.09-.88.12 3.06.07 1.1.17 3.53-4.47.19-2.19.09-.12-3.34-.12-3.16",
		 '55007':"m338.7 62.7l.32 5.53-5.62.25-.17-3.53-.07-1.1-.12-3.06.13.001.23-.05 3.53-1.46.08-.05.37-.28.11-.11.29-.36.26-.34.05-.04.85-.27.13-.02.16.05.48.37.3.34.04.07v.06l-.38.86-.56.78-.64 2.15v.04l.09.1.13.04",
		 '55003':"m338.7 62.7l.08.02h.08l.04-.001.96-.58.21-.16.13-.14 1.15.22.72.47.07 1.08.1 1.84.06 1.49 1.13-.06 1.16 1.04.1 1.11.05 1.11-3.37.19-2.23.13-.02-.18-.09-2.05-.32-5.53",
		 '55051':"m343.3 62.7l1.02.55 1.81 2.23.83.17.91.19.27 4.08-1.04.07-2.32.15-.05-1.11-.1-1.11-1.16-1.04-1.13.06-.06-1.49-.1-1.84-.07-1.08 1.19.16",
		 '55125':"m347.8 65.82l6.46 1.33.49.1.38.08.61.21.63.31.55.27.08 1.18-1.03.07.08 1.12-1.12.54-1.72-.38-6.12.43-.08-1.09 1.04-.07-.27-4.08",
		 '55085':"m356.1 70.5l.42 5.53-3.43.21-.11-1.13-2.21.15-3.35.22-.27-4.4 6.12-.43 1.72.38 1.12-.54",
		 '55069':"m353.1 76.2l.3 4.48-5.62.36-.2-3.37-.15-2.23 3.35-.22 2.21-.15.11 1.13",
		 '55067':"m353.1 76.2l3.43-.21 1.11-.09.06 1.11 2.25-.17.15 2.24.38-.03.06 1.13-3.1.23.09 1.15-2.2.15-1.92-1.03-.3-4.48",
		 '55073':"m347.8 81.1l5.62-.36 1.92 1.03.32 4.48-5.69.34-4.31.27-.26-4.49 1.07-.06-.04-.74.5-.41.88-.05",
		 '55141':"m345.6 86.8l4.31-.27.15 2.23 1.08-.07.13 1.76.11 1.64-1.64.09-3.77.24-.17-2.27-.2-3.36",
		 '55001':"m352.6 92.1l.23 3.4.27 4.39-1.72.13-.98-1.88-.85-.9-.21-.59-.58-2.28.14-.4.9-1.73 1.64-.09 1.17-.05",
		 '55057':"m346 92.4l3.77-.24-.9 1.73-.14.4.58 2.28.21.59.85.9.98 1.88-4.9.31-.07-1.17-.33-5.48-.07-1.2",
		 '55081':"m340 95.1l-.06-.76.25-.24.45-.17.98-.06 3.21-.21h1.22l.33 5.48-5.55.39-.14-2.62-.13-1.84-.55.04",
		 '55063':"m338.4 95.1l1.66.03.55-.04.13 1.84.14 2.62-3.33.17-.23-1.56-1.35-1.71.91-.05v-.06l-.07-.14-.08-.07-.06-.1.02-.25.001-.05.27-.38 1.1-.32.33.06",
		 '55123':"m346.4 99.1l.07 1.17.08 1.12-3.36.21.12 1.68-5 .26-.16-1-.62-2.89 3.33-.17 5.55-.39",
		 '55111':"m346.5 100.3l4.9-.31.48.53 1.27.37.06.05.14 2.3-.17.15-.23.11-.1.03-.14-.02-.09.03-.37.62-.02.18.07.1-1.03 1.2-3.29.75v-.03l-.3-5-1.11.08-.08-1.12",
		 '55103':"m346.5 101.4l1.11-.08.3 5v.03l-2.24-.34-2.19.5-.2-3.24-.12-1.68 3.36-.21",
		 '55023':"m338.3 103.6l5-.26.2 3.24-.68.66-2.86 1.83-.08.03-.91.14-.2-1.23.25-.95.72-1.21.04-.16-.28-.45-.22-.28-1-.7v-.66",
		 '55049':"m351.2 105.6l.29 4.51.04.56-5.54.36-.32-5 2.24.34 3.29-.75",
		 '55043':"m343.5 106.5l2.19-.5.32 5 .24 3.96-2.03.1.04-.06v-.07l-.1-.32-.6-1.09-.07-.07-.11-.05-.47-.11-1.22-.23-.5-.12-.26-.12-.76-.51-.12-.24-.86-1.91-.21-.99.91-.14.08-.03 2.86-1.83.68-.66",
		 '55065':"m346 111.1l5.54-.36.27 3.99-.84.05-4.73.28-.24-3.96",
		 '55045':"m351.5 110.1l4.42-.14.34 4.46-.34.02-4.12.21-.27-3.99-.04-.56",
		 '55077':"m356.8 95.2l.1 1.38-.22.84-.4.63.11 1.59-3.29.23-.27-4.39 3.97-.29",
		 '55097':"m349.9 86.5l5.69-.34.39 5.65-3.44.21-1.17.05-.11-1.64-.13-1.76-1.08.07-.15-2.23",
		 '55135':"m355.6 86.2l5.66-.38.08 1.13-1.19.09.12 1.58.19 2.9-1.35.11-3.11.22-.39-5.65",
		 '55137':"m359.1 91.6l.26 3.34-2.61.19-3.97.29-.23-3.4 3.44-.21 3.11-.22",
		 '55047':"m359.4 95l.09 1.13.25 3.38-1.12.09-1.12.1v-.15l-1.1.09-.11-1.59.4-.63.22-.84-.1-1.38 2.61-.19",
		 '55021':"m356.4 99.6l1.1-.09v.15l1.12-.1.31 4.5-.9.09-2.41.19-.001-.17-3.34.24-.07-.1.02-.18.37-.62.09-.03.14.02.1-.03.23-.11.17-.15-.14-2.3-.06-.05-1.27-.37-.48-.53 1.72-.13 3.29-.23",
		 '55025':"m358.9 104.1l.08 1.12.29 4.53-3.34.27-4.42.14-.29-4.51 1.03-1.2 3.34-.24.001.17 2.41-.19.9-.09",
		 '55105':"m361.5 109.6l.35 4.51-1.55.1-4 .22-.34-4.46 3.34-.27 2.23-.11",
		 '55059':"m366.2 112.3l1.11-.09-.06-.76 1.75-.15 1.85-.14.24 2.28-3.78.26-.98.1-.13-1.5",
		 '55101':"m368.2 109.1l2.28-.19.4 2.23-1.85.14-1.75.15.06.76-1.11.09-.25-2.99 2.22-.2",
		 '55127':"m363.7 109.5l2.21-.17.25 2.99.13 1.5-3.8.32-.65.05-.35-4.51 2.22-.17",
		 '55027':"m359.7 99.5l1.12-.08 3.39-.23.07.85.02.28.17 2.24-.16.001.19 2.26-1.1.07-4.43.31-.08-1.12-.31-4.5 1.12-.09",
		 '55055':"m359 105.2l4.43-.31.31 4.57-2.22.17-2.23.11-.29-4.53",
		 '55133':"m367.8 104.6l.32 4.51-2.22.2-2.21.17-.31-4.57 1.1-.07 3.32-.24",
		 '55079':"m369.4 104.4l.99 4.45-2.28.19-.32-4.51 1.61-.13",
		 '55089':"m367.7 100l2.29-.2.06.65-.1.42-.15.36-.23.4-.07.16-.06.18-.03.14-.19 1.56.03.18.17.49.05.07-1.61.13-.18-2.26.12-.96-.11-1.32",
		 '55131':"m366.6 100.1l1.12-.08.11 1.32-.12.96.18 2.26-3.32.24-.19-2.26.16-.001-.17-2.24 2.23-.18",
		 '55139':"m363.6 91.3l.37 4.53-4.47.31-.09-1.13-.26-3.34 1.35-.11 3.09-.26",
		 '55039':"m366.2 95.6l.38 4.49-2.23.18-.02-.28-.07-.85-3.39.23-1.12.08-.25-3.38 4.47-.31-.05-.59 2.28.42",
		 '55117':"m370.2 95.3l.43 1.6.07 1.03-.03.11-.66 1.83-2.29.2-1.12.08-.38-4.49 1.11-.09 2.87-.27",
		 '55015':"m365.5 91.1l1.38-.1.39 4.5-1.11.09-2.28-.42-.32-3.94 1.95-.13",
		 '55071':"m369.4 89.7l2.05-.18.43 1.23.03.24-.03.23-.05.17-.16.28-.2.22-.33.19-.18.14-.22.24-.24 1.12-.08.4-.22 1.27-2.87.27-.39-4.5 1.43-.11-.1-1.12.56-.05.56-.05",
		 '55009':"m364.6 85.5l2.31-.17-.09.19-.26 1.2v.08l.37.33.33.08.25-.001.13-.09.1-.17.12-.28.001-.07-.05-.09.02-.05.29-.33.5-.41.41-.14.32 4.09-.56.05-.56.05.1 1.12-1.43.11-1.38.1-.05-.74-.3-3.7-.5.07-.08-1.22",
		 '55087':"m361.4 86.95l3.31-.19.5-.07.3 3.7.05.74-1.95.13-3.09.26-.19-2.9-.12-1.58 1.19-.09",
		 '55115':"m357.5 81.6l.09 1.1 2.24-.17.08 1.12 2.26-.16 2.2-.14.24 2.22.08 1.22-3.31.19-.08-1.13-5.66.38-.32-4.48 2.2-.15",
		 '55078':"m357.5 81.6l-.09-1.15 3.1-.23 1.43-.11.12 2 .1 1.38-2.26.16-.08-1.12-2.24.17-.09-1.1",
		 '55083':"m362.2 76.7l1.11-.06 1.97 3.26.07 1.11 1.64.26 1.7.2-.06.001-.4.18-.06.05-.16.26-1.09 2.84-.02.44v.11l-2.31.17-.24-2.22-2.2.14-.1-1.38-.12-2-1.43.11-.06-1.13-.38.03-.15-2.24 2.26-.16",
		 '55041':"m357 68.1l2.29.59.12.43.24 3.31 2.26-.17.33 4.44-2.26.16-2.25.17-.06-1.11-1.11.09-.42-5.53-.08-1.12 1.03-.07-.08-1.18",
		 '55037':"m359.2 68.7l.19.33 1.58-.17 2.62.33h.02l.22.04.34.17.21.14.14.09.27.38.03.04.001.05-.13.22-.14.2-.06.05-.16.2-.02.05.06.11.35.28.08.02.12.03.13-.001.06.87-1.07.02-2.23.13-2.26.17-.24-3.31-.12-.43",
		 '55075':"m365.1 71.2l2.13.57.17.14h.001l.02.02.27.33.09 2.33.8 3.84.08.27.04.07.71.75.24.04.41.06-1.4 1.8-1.7-.2-1.64-.26-.07-1.11-1.97-3.26-1.11.06-.33-4.44 2.23-.13 1.07-.02-.06-.87",
		 '54003':"m469.8 137.3l2.23 1.23-.11.61-.08.18-.53.8-.19.13-.06.14-.46 1.19-.02.08v.2l-2.22-1.26.36-2.69.02-.06 1.06-.54",
		 '54037':"m472.1 138.6l1.46 2-.6 2.61-2.32-1.3v-.2l.02-.08.46-1.19.06-.14.19-.13.53-.8.08-.18.11-.61",
		 '54011':"m430.9 157.4l1.85 1.27.27 1.28-1.89 2.19-2.74-1.98 1.59-.63.1-.06.05-.07.03-.08.02-.09.02-.09.05-.92v-.03-.56l.65-.22",
		 '54099':"m428.4 160.2l2.74 1.98-.08.37.27 1.11.04.06.35.37.29.72-.74 1.11-.87 1.22-1.05-.96.26-.45v-.07l-.02-.03-1.59-1.51h-.03l-.19-.04-.18-.16-.09-.24-.04-.11.25-1.11-.21-2.26.88.03",
		 '54059':"m431.3 165.9l1.09-.57-.04.17.74 1.51.57 1.08 1.22.98.25-.11.34-.15.66-.05.74.05-.32 1.51-.65.58-.45-.27-.39.12-.4.09-.73-.27-2.06-1.38-.38-.58-.02-.06-1.04-1.42.87-1.22",
		 '54045':"m434.9 164.3l-.26.28-.15.22v.07l.04.05 1.23.26.42-.05.41.14 1.43 1.08.47.37.13.13-1.22.53-.11.31.55.43-.43.34-.5.34-.74-.05-.66.05-.34.15-.25.11-1.22-.98-.57-1.08-.74-1.51.04-.17 2.48-1.03",
		 '54109':"m438.6 166.9l.93-.18.59.03.36.38 1.12 1.46 1.42 1.28-.72 1.24-1.55-.36-1.51-.07-1.28.16-.88-.03-.51-.47.32-1.51.5-.34.43-.34-.55-.43.11-.31 1.22-.53",
		 '54047':"m436.5 170.3l.51.47.88.03 1.28-.16 1.51.07 1.55.36-.34 1.19-.37.75-.88.81-.45.41-.03.02-1.18.23-.68-.4-1.15-.41-.12-.06-.85-.74-.87-1.24-.07-.19.03-.09.45-.41.14-.06.65-.58",
		 '54055':"m444.1 168.6l2.68 1.66-.93 1.95-2.35 1.14-1.58-1.1.34-1.19.72-1.24 1.12-1.2",
		 '54063':"m448.1 166.1l3.75-.09.89.69-.58.7-.32.65.23.43-1.15 1.02-.29.25-.48-.69-1.01.8-.1.08-1.25.94-1-.57.61-1.81.71-1.96.07-.23-.06-.21",
		 '54089':"m446.4 164.6l1.71 1.53.06.21-.07.23-.71 1.96-.61 1.81-.001-.02-2.68-1.66.11-.59.04-.12.77-1.1.31-.06.1.02.33.13.1.1v.14l.06.001.13-.1v-.04l-.001-.09-.34-1.03-.39-.4-.13-.08-.08-.02 1.29-.86",
		 '54081':"m439.7 164.1l.79.12.95.85.06.04 2.26.03 1.38.32.08.02.13.08.39.4.34 1.03.001.09v.04l-.13.1-.06-.001v-.14l-.1-.1-.33-.13-.1-.02-.31.06-.77 1.1-.04.12-.11.59-1.12 1.2-1.42-1.28-1.12-1.46-.36-.38-.59-.03.18-2.61",
		 '54005':"m439.7 164.1l-.18 2.61-.93.18-.13-.13-.47-.37-1.43-1.08-.41-.14-.42.05-1.23-.26-.04-.05v-.07l.15-.22.26-.28.63-2.51 1.08-.33.26-.07.21.001 1.72 1.13.74 1.1.18.45",
		 '54043':"m433 160l1.4.43 1.04 1.37-.63 2.51-2.48 1.03-1.09.57.74-1.11-.29-.72-.35-.37-.04-.06-.27-1.11.08-.37 1.89-2.19",
		 '54079':"m436 156.2l-.49.69-1.09 2.55v.96l-1.4-.43-.27-1.28-.35-1.7.98-.79 1.76-.57.86.58",
		 '54053':"m433.5 153.3l-.001.03.1.15 1.35 1.51.28.65-1.76.57-.98.79.35 1.7-1.85-1.27.19-.04.06-.001.02-.02.06-.05.02-.03.04-.07.001-.06v-.08-.04-.02l-.001-.09-.26-1.05.13-2.09.23-1.23.03-.18.46-.78.17-.09h.15l.74.4.19.24.25.37.04.1v.68",
		 '54035':"m436.4 150.9l.99 1.28.41 3.95-1.75.09-.86-.58-.28-.65-1.35-1.51-.1-.15.001-.03.33-.09 1.05-.74.02-.11-.24-1.04-.11-.13-.23-.15-.11-.08-.11-.14-.05-.18v-.11l.61-.27 1.77.64",
		 '54039':"m436 156.2l1.75-.09.69.74 2.46-.17.27.001-.77.85.49 1.2.45 1.4-.9 4-.79-.12-.18-.45-.74-1.1-1.72-1.13-.21-.001-.26.07-1.08.33-1.04-1.37v-.96l1.09-2.55.49-.69",
		 '54019':"m445.2 161.7l1.24 2.89-1.29.86-1.38-.32-2.26-.03-.06-.04-.95-.85.89-4 .85.36.81.26h.07l.04-.04-.001-.18.21-.23.58-.04.16.06.3.24.81 1.06",
		 '54015':"m442.1 155.5l.4-.8 1.81 1.83.58.07.11.19-.8.97-2.87 2.44-.45-1.4-.49-1.2.77-.85.92-1.26",
		 '54087':"m437.4 152.2l.86-.17.75.21.61-.35.71.83.12.58.9 1.89.8.29-.92 1.26-.27-.001-2.46.17-.69-.74-.41-3.95",
		 '54013':"m441.8 150.3l.34.49.05.08.24 1.47.44 1.62-.36.72-.4.8-.8-.29-.9-1.89-.12-.58-.71-.83.91-1.66 1.31.07",
		 '54105':"m438.9 148.4l1.64 1.78-.91 1.66-.61.35-.75-.21-.86.17-.99-1.28 2.47-2.47",
		 '54107':"m437.8 146.5l1.44.75-.41 1.15-2.47 2.47-1.77-.64-.18-1.08.4-.89 1.29-1.64.63-.77.1-.09.09-.03h.11l.25.14.07.08.44.54",
		 '54073':"m441.4 145.9l-.69.39-1.28.49-.06.09-.04.17-.03.28-1.44-.75 1.98-1.7 1.56 1.03",
		 '54085':"m441.4 145.9l1.28.54 1.13 2.25-1.97 1.63-1.31-.07-1.64-1.78.41-1.15.03-.28.04-.17.06-.09 1.28-.49.69-.39",
		 '54021':"m443.8 148.7l.86.04 1.61 2.26h-.03l-.1.05-.49.25-.27.18-1.5 1.56-.96.96-.44-1.62-.24-1.47-.05-.08-.34-.49 1.97-1.63",
		 '54007':"m446.2 151l.19.42.12.13.54-.11.6.27.37.78.03.24-.04.15-1.46 3.04-2.24.62-1.81-1.83.36-.72.96-.96 1.5-1.56.27-.18.49-.25.1-.05h.03",
		 '54067':"m446.6 155.9l-.19.38.44.99.51.73 1.91.89-.81 1.04-1.34 1.63-.19.19-1.74-.04-.81-1.06-.3-.24-.16-.06-.58.04-.21.23.001.18-.04.04h-.07l-.81-.26-.85-.36 2.87-2.45.8-.97-.11-.19-.58-.07 2.24-.62",
		 '54025':"m450.1 159.3l.2 1.44 1.13.7.55.03.42-.06.57-.36 1.45-.35-.7 1.59-1.85 3.74-3.75.09-1.71-1.53-1.24-2.89 1.74.04.19-.19 1.34-1.63.81-1.04.85.41",
		 '54101':"m448 152.8l.66.05 1.18.23 1.31 2-.32 1.86-.72.82-.24-.09.18 1.55-.85-.41-1.91-.89-.51-.73-.44-.99.19-.38 1.46-3.04",
		 '54097':"m448.8 147.9l.69-.23 1.75 1.89.1 1.39-.07 1.26-1.09.21-.32.7-1.18-.23-.25-.5v-1.41-.14l.04-.04.07-.001.19-.4.16-.55-.05-1.39-.04-.55",
		 '54041':"m445.8 147.6l3 .33.04.55.05 1.39-.16.55-.19.4-.07.001-.04.04v.14 1.41l.25.5-.66-.05.04-.15-.03-.24-.37-.78-.6-.27-.54.11-.12-.13-.19-.42-1.61-2.26 1.15-1.13",
		 '54017':"m445 144l.77.15.05 3.44-1.15 1.13-.86-.04-1.13-2.25 2.31-2.43",
		 '54095':"m441.5 142.5l3.5 1.5-2.31 2.43-1.28-.54-1.56-1.03.87-1.36.79-1",
		 '54033':"m446.1 143.5l3.06.5.63 1.89-.32 1.76-.69.23-3-.33-.05-3.44.41-.6",
		 '54029':"m443.4 128.6l.34 2.07.17 1-.95.22-.88-2.34 1.31-.95",
		 '54009':"m443.9 131.6l.5 3.07-1.67-.09.23-2.77.95-.22",
		 '54069':"m442.8 134.6l1.67.09.3 1.84-2.1.12.03-1.64.1-.41",
		 '54051':"m444.7 136.6l.62 3.78-3 .5-.11-1.73.4-2.43 2.1-.12",
		 '54103':"m446.3 140.2l.42 1.04-.6 2.31-.41.6-.77-.15-3.5-1.5.89-1.64 3-.5.95-.15",
		 '54049':"m446.7 141.2l.53.25 1.89-.3.77.59.49.43 1.17.65-2.39 1.19-3.06-.5.6-2.31",
		 '54001':"m453.3 145.5l.11 1.5-.19.31-.04.09-.12 1.07v.38l-.03.1-1.79.65-1.75-1.89.32-1.76 2.52-1.19.99.74",
		 '54091':"m451.6 142.8l.47.14.29 1.74-2.52 1.19-.63-1.89 2.39-1.19",
		 '54061':"m452.7 139.1l.06.31-.08.98-.76 2 .15.59-.47-.14-1.17-.65-.49-.43-.77-.59-1.89.3-.53-.25-.42-1.04 4.91-.82 1.48-.25",
		 '54075':"m456.4 152.4l-.06.97-.02 1.07-.05.91-.27.95-.62.96v.05.001l.24.49-1.2 2.86-1.45.35-.57.36-.42.06-.55-.03-1.13-.7-.2-1.44-.18-1.55.24.09.72-.82.91-1.08 1.09-.19 1.43-1.45.07-1.04.03-.22.3-1.27.05-.04.22.04 1.38.49.04.19",
		 '54077':"m455.5 138.6l1.06 6.61.02.15-.25-.24-1.88-.4-1.11.73-.99-.74-.29-1.74-.15-.59.76-2 .08-.98-.06-.31 2.79-.49",
		 '54083':"m458.4 148.1l.09.08-.89.73-.5.61-.21.45v.02l.18.33.08.04.15.12.03.07-.02.18-.16.46-.51.98-.22.25-.04-.19-1.38-.49-.22-.04-.05.04-.3 1.27-.03.22-.07 1.04-1.43 1.45-1.09.19-.91 1.08.32-1.86-1.31-2 .32-.7 1.09-.21.07-1.26-.1-1.39 1.79-.65.03-.1v-.38l.12-1.07.04-.09.19-.31.59.9 2.95.31 1.38-.07",
		 '54071':"m458.4 148.2l2.44 1.46.87.53-1.01 3.91-.7 1-1.73-.29-.61-.91-.19-.19-.2-.09-1-.24.06-.97.22-.25.51-.98.16-.46.02-.18-.03-.07-.15-.12-.08-.04-.18-.33v-.02l.21-.45.5-.61.89-.73",
		 '54093':"m453.3 145.5l1.11-.73 1.88.4.25.24.92-.17.71.47.5.93v.35l-.02.37-.1.44-.22.34-1.38.07-2.95-.31-.59-.9-.11-1.5",
		 '54023':"m458.2 143.3l3.26.65-.06.13-.26 1.05-.29 1.56.16.45.28 1.33-.36 1.18-2.44-1.46-.09-.08.22-.34.1-.44.02-.37v-.35l-.5-.93-.71-.47-.92.17-.02-.15 1.61-1.94",
		 '54031':"m461.4 143.9l.88.35 1.49.28.89.1.62-.1.08-.06.36.04.27.16.36.29-.28.47v.49l-.02.09-.32.7-.95.89h-.03l-.04-.06-.04-.07-.51.49-.04.07-.02.04-.13.41-.38 1.3-1.84.36-.87-.53.36-1.18-.28-1.33-.16-.45.29-1.56.26-1.05.06-.13",
		 '54057':"m463.9 139.6l-2.44 4.38-3.26-.65 1.83-2.21 1.06.24 1.62-2.23 1.19.47",
		 '54027':"m463.9 139.6l1.88-.1 1.3.43.11 1.41-.03 2.46-.04.21-.15.35-.15.28-.3.3-.11.11-.36-.29-.27-.16-.36-.04-.08.06-.62.1-.89-.1-1.49-.28-.88-.35 2.44-4.38",
		 '54065':"m466.8 137.7l.52.1.12-.001.35-.64.26-.4.07-.08.06-.02h.33l.36.04.36.13.45.33.17.18-1.06.54-.02.06-.36 2.69-1.33-.74-1.3-.43 1.03-1.77",
		 '56021':"m204.7 123.3l5.96.61-.1 1.14 5.74.52-.18 2.21-.44 5.07-8.59-.73-3.21-.31.82-8.51",
		 '56015':"m217.4 112l-.67 7.88-.34 3.93-.14 1.73-5.74-.52.1-1.14 1.1-12.36 1.62.14 2.28.17 1.78.16",
		 '56039':"m155.9 77.7l3.51.55-.16 1.07 2.66.41.59.5.1.14.08.35-.04.18-.001 1.22.34 1.18.57 1.68.44.95-1.26 8.55-.22 1.11-2.66-.4-.17 1.11-2.17-.34-.12.72-2.18-.34.13-.82-1.02-.37-1.08-.17 1.33-8.54.99-6.26.33-2.46",
		 '56023':"m153.2 95l1.08.17 1.02.37-.13.82 2.18.34-.21 1.4-.78 4.43-.16.88-.52 3.35.12 2.26 2.15.36 2.43.43-.28 1.87-.21 1.9-.78 5.13-9.47-1.49.86-5.41 1.05-6.55 1.06-6.48.6-3.79",
		 '56041':"m149.7 117.2l9.47 1.49-1.11 7.45-4.34-.62-5.21-.86.52-3.25.67-4.21",
		 '56035':"m162.7 94.5l2.74.43.38 1.33.1.75-.001.1-.12.31-.06.27-.02.51.12.5.65 2.26 1.89 2.28 1.53 1.81.48.64-.19 3.38-.3 2.18-4.3-.6-2.35-.37-2.84-.48-2.43-.43-2.15-.36-.12-2.26.52-3.35.16-.88.78-4.43.21-1.4.12-.72 2.17.34.17-1.11 2.66.4.22-1.11",
		 '56029':"m167.9 75.1l4.79.65 1.68.31.18.03 1.19.16 2.8.37-.21 1.65.21.4-.31 2.76-.07 1.39-.6 4.52.21.03-.15 1.14-2.21-.3-1.29.98-.12 1.1-1.65-.22-.15 1.13-1.66-.23-.38-.02-.05-.21-.69-1.15-.47-.45-.17-.13-.45-.26h-.09l-.89.36-.14.19-.24.47-1.7.16-.89-1.69-.64-.78.23-1.6-.44-.95-.57-1.68-.34-1.18.001-1.22.04-.18-.08-.35-.1-.14-.59-.5-2.66-.41.16-1.07-3.51-.55.78-4.26 1.52.23 1.12.23.4.14 1.36.21h.02l3 .41 1.02.05.76.12 2.05.32",
		 '56037':"m160.4 109.8l2.84.48 2.35.37 4.3.6 14.34 1.89-.12 1.5.03.76-.56 4.47-.17 1.07-3.99-.52-.24 2.24-.06 1.13-.66 5.11-3.19-.38-7.67-1.03-1.51-.22-4.5-.6-.38-.05-1.34-.19-1.38-.2-.47-.07 1.11-7.45.78-5.13.21-1.9.28-1.87",
		 '56013':"m185.5 97.1l.55.07.12.39-.26 2.22-.28 2.21.11.23-.51 4.24-.44 1.46-.49 2.96.18.02-.27 2.22-14.34-1.89.3-2.18.19-3.38-.48-.64-1.53-1.81-1.89-2.28-.65-2.26-.12-.5.02-.51.06-.27.12-.31.001-.1-.1-.75-.38-1.33-2.74-.43 1.02-6.95.64.78.89 1.69 1.7-.16.24-.47.14-.19.89-.36h.09l.45.26.17.13.47.45.69 1.15.05.21.63.73.47.91-.13.93 1.13.25 1.05.15 1.09.33.68.54.3.55 1.05.52 2.13.85.81.11.59.03.31-.05 5.2.63.05-.37",
		 '56017':"m177.6 88.5l.56.07.43 1.2-.17 1.14 1 .87 1.19.52 1.46.19.47.76.17.44 2 .25.98 1.26-.22 1.86-.05.37-5.2-.63-.31.05-.59-.03-.81-.11-2.13-.85-1.05-.52-.3-.55-.68-.54-1.09-.33-1.05-.15-1.13-.25.13-.93-.47-.91-.63-.73.38.02 1.66.23.15-1.13 1.65.22.12-1.1 1.29-.98 2.21.3",
		 '56043':"m177.6 88.5l.15-1.14 10.78 1.37 2.1.28.17.02-.52 4.49-.33 4.08-3.93-.49-.55-.07.22-1.86-.98-1.26-2-.25-.17-.44-.47-.76-1.46-.19-1.19-.52-1-.87.17-1.14-.43-1.2-.56-.07",
		 '56003':"m178.6 76.7l3.37.46 3.07.37.18.15.06.08.15 1.1.16 1.5.59 1.04.43.36.24.12.16-.07.26-.05.5.31 1.39 1.25.08.2.03.28 1.34 1.64.22.75.14.87-.26 2.03-2.1-.28-10.78-1.37-.21-.03.6-4.52.07-1.39.31-2.76-.21-.4.21-1.65",
		 '56033':"m199.9 79.3l2.17.23-.15 1.61-.09 1.53-.12 1.5-.09.89-1.55-.16-2.28-.21v.05l-8.59-1.03-.03-.28-.08-.2-1.39-1.25-.5-.31-.26.05-.16.07-.24-.12-.43-.36-.59-1.04-.16-1.5-.15-1.1-.06-.08-.18-.15 2.74.34 4.3.53.48.1 1.74.21 5.67.66",
		 '56019':"m190.7 89l.26-2.03-.14-.87-.22-.75-1.34-1.64 8.59 1.03v-.05l2.28.21 1.55.16-.16 1.08-.16 1.34-.26 2.44v.13l.02.07-.09 1.06-.28 2.71-.15.71-.28 2.53-.16 1.67-.56-.05-4.73-.48-4.86-.57.001-.1.33-4.08.52-4.49-.17-.02",
		 '56025':"m186.1 97.2l3.93.49-.001.1 4.86.57 4.73.48-.02.53-.27 2.62-.36 3.3-.43 3.84-.36 3.38-5.46-.57-2.84-.35-5.34-.65-.18-.02.49-2.96.44-1.46.51-4.24-.11-.23.28-2.21.26-2.22-.12-.39",
		 '56007':"m184.5 110.9l5.34.65 2.84.35 5.46.57h.02l-.85 8-.44 4.28-.09 1.12-1.34-.13-1.09-.14-.39 3.51-.15 1.6-5.15-.63-4.43-.52-5.77-.7.66-5.11.06-1.13.24-2.24 3.99.52.17-1.07.56-4.47-.03-.76.12-1.5.27-2.22",
		 '56001':"m198.1 112.5l4.88.54-.04.31-.22.36-.37-.04-.09.94.13.1.93.19 1.18.11.19-.55.04-.55.13-.36.21-.32.46.04-.34 4.44-.13 1.52-.29 2.96-.17 1.1-.82 8.51-8.8-.9-1.25-.15.15-1.6.39-3.51 1.09.14 1.34.13.09-1.12.44-4.28.85-8",
		 '56045':"m209.7 90.9l6.26.51 3.19.29-.04.5-.32 3.7-.38 4.52-7.87-.66-1.67-.14.84-8.73",
		 '56011':"m210.6 80.3l.46.05 8.92.84-.87 10.52-3.19-.29-6.26-.51h-.03l.03-.52.65-6.95.12-1.59.15-1.54",
		 '56005':"m202.1 79.6l.97.05.65.04 6.89.69-.15 1.54-.12 1.59-.65 6.95-.03.52h.03l-.84 8.73-8.72-.83.16-1.67.28-2.53.15-.71.28-2.71.09-1.06-.02-.07v-.13l.26-2.44.16-1.34.16-1.08.09-.89.12-1.5.09-1.53.15-1.61",
		 '56009':"m200.1 98.8l8.72.83 1.67.14-.16 1.87-.56 5.93-.09 1.45-.2 2.25-1.91-.18-1.81-.14-.19 2.25-.46-.04-.21.32-.13.36-.04.55-.19.55-1.18-.11-.93-.19-.13-.1.09-.94.37.04.22-.36.04-.31-4.88-.54h-.02l.36-3.38.43-3.84.36-3.3.27-2.62.02-.53.56.05",
		 '56027':"m218.4 100.5l-.54 6.48-.42 5-1.78-.16-2.28-.17-1.62-.14-2.23-.2.2-2.25.09-1.45.56-5.93.16-1.87 7.87.66",
		 '56031':"m209.5 111.3l2.23.2-1.1 12.36-5.96-.61.17-1.1.29-2.96.13-1.52.34-4.44.19-2.25 1.81.14 1.91.18",
		 '06037':"m54.3 214.1l-.8-.03-.51-.63-.07-.11-.25-.79-.23-1.41.28.09 1.48 2.58.12.26-.03.03m-.54-8.78l-.05-.03v-.09-.02l.05.001.55.19.62.5.5.4.38.32.49 1 .04.1.03.22-.05.12-.15.09h-.09l-1.3-.61-.09-.08-.93-2.12m13.65-14.81l-.69 2.97-.32 1.72-.24 1.46-.09.63-.69 1.5-.6 1-.24.4-.75.36-.27.33-.02.09.05.2.09.12-1.42-.32-.12-.03-.48-.03-1.14.98-.58.73-.28.49-.8.11-.84-.02-.39-.15-.19-.11-.75-.49-.13-.11-.08-.45.08-.08.24-.18.13-.03.06-.13.07-.32-.08-.59-.05-.29-.03-.16-.06-.33-.1-.41-.15-.39-.001-.03-.02-.04-.12-.23-.02-.03-.09-.12-.03-.04-.03-.03-.18-.17-.26-.1-1.03-.22-.81-.11-.43.04-1.6-.71.14-.36 1.03-.45.83-.35 1.24.31.63-1 .07-.47-.98-6.9-.04-.37 12.58 2.94",
		 '06083':"m38.4 194.3l1.88.15.84.77-.03.43v.08l-.05.001-1.54.18h-.14l-.41-.42-.08-.13-.48-1.08m5.26.59l.4.28 1.05.35.04-.02h.02l.03-.001.04-.02.05-.03.03-.001.28.02.34.25.07.11v.001l-.36.28-.1.08h-.07l-1.77.03-.38-.09-.37-.15-.14-.07-.32-.15-.28-.21-.02-.08-.21-1.17.07-.09.06.02.55.22 1 .46m-6.13-13.9l1.61.17.57.22.53.55.7-.12.68-.38 2.08-.6.19.23.59.55 1.82 1.47 2.29 1.8.46.12h.19l.31.08-1.41 5.61-.2.63-.09.08-.3.21-.75-.69-.57-.25-.58-.08h-.16-.02l-.62-.03-1.3-.41-.45-.45-.76-.55-.31-.12-.79-.29-.66-.18-.77-.16-.88-.11-1.05-.18-1.35-1.77.09-1.02.66-3.4.23-.92",
		 '12071':"m452.7 309.5l1.28 2.41.15.14.21.12.74.18.11-.16.16-.08.59.12v.03l-.52.42-.13.06-.09.001-.18-.001-.35-.1-.59-.32-.06-.05-.05-.05-.09-.16-1.19-2.19v-.39m2.11-1.17l5.7-.85.52 3.23.19 1.14-.9 1.49-1.86.3-.33-.12-.37-.58-.58-.54-1.27-.82-1.26-1.88.16-1.37",
		 '12087':"m474.4 329.6l-.13.28-.47.42-.47.41-.57.21-.05.001v-.001l.05-.06.56-.55 1-.76.09.06m4.29-6.64l-.07.05-.17.31-.7 1.79-.02.08.08.19-.07.2-.17.33-1.85 2.52-.06.07-.92.87-.03-.03v-.07l.37-.56.26-.23.54-.62.35-.42.62-.93.1-.19.66-1.41.79-2.02.27.06m-7.25 8.85l-.51.47-.68.46-.34.1-.19-.15-.03-.02-.02-.04 1-.56 1.38-.77v.001l.06.13-.06.07-.62.29m-7.1 2.27v-.14l.16-.33 1.57-.82.45.08.83.19.34.52v.03l-.05.04-.11.07-.21.14-.7.34-4.46 1.64-.29.07-.03-.02-.05-.21.02-.08.17-.24.54-.13.1-.001.07.07.05.02.41-.19.17-.1.45-.38.56-.56m6-15.69l.89 5.55.52 2.12.12.18-.69.57-.94.37-.93.22-.19-.08-.51-.3-.1-.08-.48-.68-.03-.3.02-.57.05-.45.03-.11.08-.12.07-.04.15.03.03-.08v-.13l-.81-1.27-1.33-2.03-1.38-1.91 5.46-.9",
		 '12086':"m478.7 322.9l-.27-.06.12-.6.44-1.48.09-.16h.05l.09.44-.2.95-.32.91m-8.62-6.75l1.12-.18 1.16.09 2.78-.45 1.66-.36.36-.16.37-.08.45-.09.84-.17.001.03.12.71.13.94.02.29.03.58-.06.29-.06.13-.23.19-.09-.1-.15-.07-.15.04-.34.21-.11.13-.03.1-.6 2.47-.05.44.04.26.32.99.08.07h.12l.05.06-.02.14-.22.48-.49.73-.03.03-.31.34-.65.71-1.5.75-.33.16-.45.13-.74.13-1.17.02-.13-.18-.52-2.12-.89-5.55-.35-2.18",
		 '22045':"m338.4 282.8l.83-.3.27-.06.37.05 1.77.78.03.05-.02.08-.62.87-.13.08-.44.13-.19-.05-2.16-1.04-.17-.19.46-.42m6.78-6.1l1.64.35-.31.71-2.41.31-1.7.22-.91 1.32-1.78 1.68-1.1-1.02-.07-2.96.14-.51h.49l1.56-.54.21-.13.15-.04.32-.001.4.09.1.04 1.94.56 1.33-.07",
		 '22099':"m340.6 271.3l.61-.02.71.67.15.37.05.25.03.68-.02.16.02.07.06.18.4.66.14.12.15.07.23.02.35-.03.21.04.19.09 1.16 1.67.12.29v.17l-1.33.07-1.94-.56-.1-.04-.4-.09-.32.001-.15.04-.21.13-1.56.54h-.49l-.58-3.78.63-.39.67-.29.56.2.08.07 1.49-.07-.47-.68-.45-.61m3.49 6.82l2.41-.31.09.24.61 1.16.17.16.49.1h.12l.23.12.14.14.09.17v.49l-.03.83-1.32-.6-1.85-.86-1.15-1.64",
		 '22125':"m341.7 264.8l5.08-.24-.16.89-.32 1.49-.45.77-.11.15-.16.51-.02.42.03.3-.29-.06-.34-.92-.21-.31-.06-.03-1.78-.33-1.22-.63-.07-.04-.08-.08-.03-.07-.07-1.42.27-.39m-.99-.53l.75.61-1.03-.27.27-.34",
		 '22051':"m357.2 273.9l.39.06 1.55.32-.03 2.11.75 1.02.6.61-.45.77-.21.87.12.42.36.48.22.26.45.76.06.24.16 1.93-.56.19-.68-.3-.9-1.33.07-.24v-.13l-.13-.91-.03-.1-.12-.07-.37-.09-.28.001.16-.5.06-.2.19-1.07-.68-.41-.34-.53-.07-.21-.11-.64-.03-.45-.15-2.88m3.11 12.97l.32-.05.24-.27.65-.5.1.001.02.04v.03l-.06.09-.71.53-.61.63-.11.11.16-.62",
		 '25007':"m534.8 97.5l1.53.27.12.29.13.54v.08l-2.69.98-.28-.24.37-1.15.1-.17.28-.34.35-.38h.05l.05.11m-.72-.42l-.77.97-.23.26-.63.5-.33.1-.09-.02.44-.45.85-.93.41-.47.35.04",
		 '24039':"m494.5 150.6l2.36-1.05.92 1.09.32 1.16-.56 1.39-.33.65-1.19-.03-.87-1.95-.65-1.25m-1.82 2l.33-.12.13-.26.05-.26.14.33.14.42.07.23-.04.07-.11.05-.15-.05-.27-.2-.29-.22m.8 2l-.11-.37-.08-.4v-.14l.03-.09.19-.13.08-.03.09.02.33.14.07.06.02.12-.13.06-.02.39.07.27.02.24-.03.25-.27.08-.18-.18-.06-.28",
		 '24019':"m492.5 145.3h2.43l.26.93-.47.82-.23.21-.21.12-.06.12-.31 2-.02.97-1.17.36-1.37.2-.14-.05-.78-.47-.04-.03-.14-.25-.61-1.2-.32-.71.08-1.5.06-.09.22-.19.09-.05.82-.23 1.91-.95m.16 7.37l-.02-.02-.09-.14-.07-.25-.07-.54.14-.17.22-.05.33.27.02.08.06.19-.05.26-.13.26-.33.12",
		 '23013':"m542.1 60.69l-.13.28-.09.08-.37.2-.1.02-.17-.05-.76-.81-.02-.04.02-.24.1-.27.5-.61.18-.1.07.05.79 1.14.05.1-.04.17-.04.07m-6.52-1.8l.08-.22 1.03-.59 2.05.85.46.24-.09.9v.05.05l.14.48.13.33.33.28-.96 1.46-.71.45-.87.15.06-.74.38-.6-.41-.93-.58-.86-.29.14-.31.02-.3-.13-.28-.4-.2-.63.09-.17.23-.12",
		 '23009':"m542.2 57.6l.04-.02.08.02.47.14.14.1.1.16.07.65-.13.36-.19.31-.03.03h-.06l-.4-.21-.06-.07-.21-.62-.001-.05.02-.07.06-.02.08-.1.08-.4v-.09l-.02-.08-.04-.04m2.47-1.97l.48-.37.4-.23.52-.05.18.19.18.29.07.19-.08.31v.001l-.04.04-.26.3-.37.11-.11.1-.05.12.03.12.02.04h.03l.09.16-.15.35-.19.09-.66-.2-.24-.23-.19-.27-.05-.17.06-.37.23-.4.09-.13m-5.13-2.7l.25-.11.49-.27.22-.41.58-.43 1.42-.73-.96-1.92-.34-.63 1.05-.54.54-1.54-.75-1.41 2.03-1.06.8 1.51.67 1.42.15.64-.88.46 1.13 2.03.64.97.27.69.04.4.55.99.27.47.25.39.12.13.02.22-.1.19-.06.02-.05-.05-.1-.09-.11.17-.04.25-.03.18-.001.23v.07.1l-.1.001-.07-.03-.51-.51-.14-.18-.23-.52-.05-.18v-.11l-.05-.08-.06-.04-.26.03-.35.07-.31.06-.32.14-.05.46-.34.33-.3.21-.2.18-.15.3-.04.03-.06.001-.07-.05-.08-.31-.02-.17-.12-.08h-.08l-.05.04-.03.07v.09l.13.32.11.39-.04.03-.11.02-.08-.11-.001-.12-.23-.16-.24.29-.14.36.15.73.02.05.04.05.1.07.16-.04.09.1.2.28.001.06.06.31.001.11h-.09l-.17-.04v-.02l-.14-.09-.46-.22-.28-.07-.97-.19-.4.13-.16.22-.3.03-.03-.05-.28-1.16v-.25l.02-.03.07-.09.03-.38-.02-.14-.11.06v-.07l-.05-.25-.34-.89-.3-.27-.24-.15-.06-.08-.02-.07.06-.8",
		 '26033':"m403.1 64.3l.05-.04.08-.19-.02-.18-.11-.24-.21-.04-.17-.19-.15-.38.06-.07h.03l1.59-.14h.09l.41.11 1.05 1.07.07.09.001.05-.24.75-.05.08-.07.07-.31.12h-1.53l-.29-.21-.13-.17-.15-.17-.02-.19v-.14m-13.35-1.55l-.74-6.52.56-.17 1.21-.1.3.38-.09.22-.04.2v.16 2.05l.03.15.06.13.17.19.08.05.09.03 1.7.26 1.95-.4 1.39-.59.2-.18 1.95-.75.49.04.09.001.12.15.08.17-.03 1.71.001 2.46 1.09 1.09.39.37.38.24.85.33.21.03.11.36-.08.29-1.22-.03-.66-.02-.14-.06-.09-.05-1.14-.03-.32-1-1.05-1-6.67.79-.13-1.12-1.11.13",
		 '26083':"m357.2 41.81l.06-.12.02-.03.14-.16.36-.23.56-.3 1.06-.29.05.13v.13l-1.27 1.54-.74.66-1.99 1.7-1.79.93-.29.08-.29-.08-.4-.23-.2-.3.06-.16.26-.34.29-.29.7-.47.85-.5 1.92-1.2.66-.45m2.33 10.48l.41-.73.33-.43.24-.19 1.44-.94.3-.14 1.23-.34.53-.09.44-.03 1.13-.03.41.13.24.13.14.1.09.43v.06l-.89.29h-.1l-1.2.25-1.32 1.85-.25.32-.56.26-.62.05-.09-1.1-1.88.15",
		 '37055':"m499.8 183.6l.03-.23-.17-.85-.19-.72-.1-.71v-.37l.02-.17.43-.82.08-.09.36-.24.2-.06.19-.04h.11l.45.13.36.33.73 1.03.12.19.48 1.54.001.06.02.9-.33.69-.21.11-.4.13-.36-.08-1.85-.75m2.87-4.07l.19.09.18.14.24.25.18.31.14.51-.05.1h-.04l-.48-.09-.09-.07-.76-1.1-.06-.09v-.03l.08-.07.13-.03h.15l.18.07m1.21 9.43l.19-.1.15-.1.82-.56.87-.65.02-.21-.05-1.31-.06-.87-.11-1.29-.13-.59-.09-.29-.14-.31-.16-.2-.13-.16-.52-1.12.04-.04h.06.02l.02.03.27.32.1.17.31.59.18.43.25.57.08.56.02.17.09.79.09 1.15.04.94v1.15l-.05.12h-.12l-.17-.001-.2.06-.3.11-.24.15-1.07.69-.09-.17m-3-13.1l.56.91.31.47.31.41.55.64.58.78.75 1.01.5.77-.05.15-1.02-1.14-1.74-2.1-.97-1.81.2-.1",
		 '37095':"m499.8 183.6l1.85.75-.24.18-.45.66-.03.06-.28.74.04.15v.13l-.06.42-.001.09-.05.09-.38.61-.64.7-.06.04-2.61.25h-.1l-.85-.1-.68-.1-.18-.2-.36-.47-.33-.61-.04-.15v-.05l.03-.05.12-.07.84-.83-1.85-1.38 2.49-.42 3.82-.43m4.07 5.36l.09.17-.19.11-.19.15-.46.37-.65.56-.29.25-.32.38-.15.22-.1.09-.03-.04.001-.05.16-.46.19-.26.65-.57.99-.79.31-.14",
		 '35043':"m173.7 190.9l3.96.52 3.62.42-.16 1.27-.17 1.54 6.58.7-.04.36-.02.09-.16-.06-.37-.001-.91.09-.18.35-.35 1.33.07.13.1.05.19.001.21-.02.06-.06.32.15.42.24.15.18.15.33-.72 6.98-1.19-.16-2.49-.28-1.71-.2-2.08-.24-2.42-.29-1.05-1.25 1.09-8.94-3.27-.42.37-2.82m13.59 6.54l-.02-.03-.25-.21.3.03-.02.21",
		 '48489':"m278.1 322.2h.36l.72 2.42h-.2l-.87-2.42m-7.43-.27l6 .24.65 2.43-.46.56-1.26.84-3.89-.69.02-.95-.54-.17-1.11-.2.1-.55.15-.57.33-.95",
		 '48261':"m277.6 313.6h.3l-.04.12-.16.74-.09.63-.08.76-.04.68v.71l.07 1.06.05.44v.05l.14.81.2.92.36 1.3.02.05.02.05.11.35h-.36l-.76-2.82v-1.6-1.36-.54l.02-.8.05-.61.06-.31.12-.62m-7.09.75l4-.81-.03.1v.22l.05.08.07.05.99.19.26-.02.12-.05.08-.06.04-.06.18-.08.4-.15.31-.001.02.08-.28 1.8-.49 1.47-.34 2.51.44.58.28 1.6.03.42-6-.24-.28-2.17.11-5.47",
		 '48273':"m277.6 313.6l1.5-3.86.3.07-1.5 3.79h-.3m-6.48-4.69l.76.49.4.52h.1l5.82.07-.58 2.03-.35.83-.04.07-.09.11-.08.05-1.03.53-1.49-.07-4 .81-.82-.68.09-4.79 1.35.03",
		 '48355':"m281.5 306.5l-2.06 3.31-.3-.07 2.3-3.4.06.16m-10.33 2.41l.13-1.8.02-1.39 1.59-1.38-.13.3.12.47 1.51.79.3.14.59.13.82.07.1-.33 1.84-.04.79.04-.21.04-.75.34-.22.16-.15.31-.02.4.08.21.2.32.24.21.35.17.57.45-.36.82-.34.68-5.82-.07h-.1l-.4-.52-.76-.49",
		 '48057':"m284 303l.15-.59 2.57-1.76.13-.06.6-.26.89-.19.14.24-1.09.53-.16.07-.001.001-.83.51-.84.6-.73.57-1.05.92-.02.02-.03.03.28-.65m2.91-7.7l2.91.5v.43l-.7.33-1.12.45-.91-.83-.1-.3-.08-.59m-3.56 2.62l-.17-.33-.27-.7.88-.61 1.71-.59.61-.34-.17.15.6 1.43.03.03.5.09.32.22 1.32 1.19.1.1.1.13-.02.09-2.15 1.08-.1.04-.83.23-.29-.09-.08-.08-.73-.78-1.37-1.26",
		 '48167':"m311.8 284.3l-.33.15-1 .46-.08.04-.05.03-.9.42-.14.07-.41.22-.07.05-.23.14-.13.08-.04.03-.13.1-.1.07-.04.05-.03.03-.08.09-.03.04-.1.15-.05.07-.05.13-.02.05-.34.1h-.19l-.04-.04v-.15l.18-.23.95-1.01.1-.07.86-.41.58-.2.14-.02.11-.05-.06-.14v-.19l1.74-.06m-7.27.1l.52.59 1.85 1.98.9.27-.61.54-.19.15-1.07.73-1.34.92-.08.05-.14.11-.41.31-.07.06-.04.03-.16.15-.12.11-.1.13-.12-.1.82-1.47-.73-1.23-1.29-2.17.18-1.16.54.54 1.12-.58.57.03",
		 '48007':"m279.1 303.4l.22.18h.04l1.02-.5 1.45-1.09.07-.19h-.24l-.25-.04-.44-.26-.26-.34-.02-.26 3.8-.55-.1.59.13.22v.07l-.15.33-.11.09-1.44 1.18h-.32l-1 1.29-1 1.52-1.41-2.24m4.93-.41l-.28.65-2.23 2.85-.06-.16 2.56-3.33",
		 '48061':"m271.8 325.3l3.89.69 1.26-.84.46-.56.05.03.54.76-.03 1.08.41 2 .87 1.44.03.03-.14.44-2.13 1.28-1.04-.32-.16-.1-.16-.13-.67-.53-.98-1.09-.04-.14-1.33-.23-.89-.15.07-3.66m7.26-.69h.2l.32 1.34.1.5.13.95.2 1.61h-.05-.03l-.09-.13-.1-.87.001-.4-.05-.47-.11-.73-.22-1.05-.14-.41-.16-.33",
		 '53073':"m82.4 5.2l.25.7.13.54.25 2.47-.02.15-.77.56-.14.04-.9-.17-.48.02-2.84-.77-7.2-2.06-2.88-.81-.19-.02-.03-.95-.8-1.19-.75-1.67-.14-.66v-.04l.08-.13.23-.18.24-.14.18-.1 2.91.83 2.54.73 2.86.86 5.19 1.37 2.29.62m-18.53-5.2l.05.001.4.12.03.34-.07.02-.45-.16.04-.33",
		 '53055':"m63.3 7.54l.05-.45.18-.44.2-.27.4.001.65-.02-.13.3-.05.11-.49.92-.09.06-.53-.1-.08-.03-.13-.1m-.92-2.92l-.02.67.25.7.19.7-.27.25-.24-.19-.55-.59-.14-.21-.05-.13-.05-.22-.11-.84.02-.08.1-.11.2-.14.23.05.44.14m2.65.6h-.08l-.19.13v.04l-.04.25v.14l.04.06-1.63.13-.11-.44-.13-.65v-.21l.34-.25.75-.47.22-.03.2.04.14.08.31.28.62.66v.02l-.15.1-.29.1",
		 '11001':"m480.3 144.3l.55-.9.51.27 1.17.6-1.07 1.69-.07-.64-.26-.51-.45-.2-.38-.31"
	}, 
	 
	names:{
		 '01001':"Autauga",
		 '01003':"Baldwin",
		 '01005':"Barbour",
		 '01007':"Bibb",
		 '01009':"Blount",
		 '01011':"Bullock",
		 '01013':"Butler",
		 '01015':"Calhoun",
		 '01017':"Chambers",
		 '01019':"Cherokee",
		 '01021':"Chilton",
		 '01023':"Choctaw",
		 '01025':"Clarke",
		 '01027':"Clay",
		 '01029':"Cleburne",
		 '01031':"Coffee",
		 '01033':"Colbert",
		 '01035':"Conecuh",
		 '01037':"Coosa",
		 '01039':"Covington",
		 '01041':"Crenshaw",
		 '01043':"Cullman",
		 '01045':"Dale",
		 '01047':"Dallas",
		 '01049':"De Kalb",
		 '01051':"Elmore",
		 '01053':"Escambia",
		 '01055':"Etowah",
		 '01057':"Fayette",
		 '01059':"Franklin",
		 '01061':"Geneva",
		 '01063':"Greene",
		 '01065':"Hale",
		 '01067':"Henry",
		 '01069':"Houston",
		 '01071':"Jackson",
		 '01073':"Jefferson",
		 '01075':"Lamar",
		 '01077':"Lauderdale",
		 '01079':"Lawrence",
		 '01081':"Lee",
		 '01083':"Limestone",
		 '01085':"Lowndes",
		 '01087':"Macon",
		 '01089':"Madison",
		 '01091':"Marengo",
		 '01093':"Marion",
		 '01095':"Marshall",
		 '01097':"Mobile",
		 '01099':"Monroe",
		 '01101':"Montgomery",
		 '01103':"Morgan",
		 '01105':"Perry",
		 '01107':"Pickens",
		 '01109':"Pike",
		 '01111':"Randolph",
		 '01113':"Russell",
		 '01115':"St Clair",
		 '01117':"Shelby",
		 '01119':"Sumter",
		 '01121':"Talladega",
		 '01123':"Tallapoosa",
		 '01125':"Tuscaloosa",
		 '01127':"Walker",
		 '01129':"Washington",
		 '01131':"Wilcox",
		 '01133':"Winston",
		 '02013':"Aleutians East",
		 '02016':"Aleutians West",
		 '02020':"Anchorage",
		 '02050':"Bethel",
		 '02060':"Bristol Bay",
		 '02068':"Denali",
		 '02070':"Dillingham",
		 '02090':"Fairbanks North Star",
		 '02100':"Haines",
		 '02110':"Juneau",
		 '02122':"Kenai Peninsula",
		 '02130':"Ketchikan Gateway",
		 '02150':"Kodiak Island",
		 '02164':"Lake and Peninsula",
		 '02170':"Matanuska Susitna",
		 '02180':"Nome",
		 '02185':"North Slope",
		 '02188':"Northwest Arctic",
		 '02201':"Prince Wales Ketchikan",
		 '02220':"Sitka",
		 '02232':"Skagway Hoonah Angoon",
		 '02240':"Southeast Fairbanks",
		 '02261':"Valdez Cordova",
		 '02270':"Wade Hampton",
		 '02280':"Wrangell Petersburg",
		 '02282':"Yakutat",
		 '02290':"Yukon Koyukuk",
		 '04001':"Apache",
		 '04003':"Cochise",
		 '04005':"Coconino",
		 '04007':"Gila",
		 '04009':"Graham",
		 '04011':"Greenlee",
		 '04012':"La Paz",
		 '04013':"Maricopa",
		 '04015':"Mohave",
		 '04017':"Navajo",
		 '04019':"Pima",
		 '04021':"Pinal",
		 '04023':"Santa Cruz",
		 '04025':"Yavapai",
		 '04027':"Yuma",
		 '05001':"Arkansas",
		 '05003':"Ashley",
		 '05005':"Baxter",
		 '05007':"Benton",
		 '05009':"Boone",
		 '05011':"Bradley",
		 '05013':"Calhoun",
		 '05015':"Carroll",
		 '05017':"Chicot",
		 '05019':"Clark",
		 '05021':"Clay",
		 '05023':"Cleburne",
		 '05025':"Cleveland",
		 '05027':"Columbia",
		 '05029':"Conway",
		 '05031':"Craighead",
		 '05033':"Crawford",
		 '05035':"Crittenden",
		 '05037':"Cross",
		 '05039':"Dallas",
		 '05041':"Desha",
		 '05043':"Drew",
		 '05045':"Faulkner",
		 '05047':"Franklin",
		 '05049':"Fulton",
		 '05051':"Garland",
		 '05053':"Grant",
		 '05055':"Greene",
		 '05057':"Hempstead",
		 '05059':"Hot Spring",
		 '05061':"Howard",
		 '05063':"Independence",
		 '05065':"Izard",
		 '05067':"Jackson",
		 '05069':"Jefferson",
		 '05071':"Johnson",
		 '05073':"Lafayette",
		 '05075':"Lawrence",
		 '05077':"Lee",
		 '05079':"Lincoln",
		 '05081':"Little River",
		 '05083':"Logan",
		 '05085':"Lonoke",
		 '05087':"Madison",
		 '05089':"Marion",
		 '05091':"Miller",
		 '05093':"Mississippi",
		 '05095':"Monroe",
		 '05097':"Montgomery",
		 '05099':"Nevada",
		 '05101':"Newton",
		 '05103':"Ouachita",
		 '05105':"Perry",
		 '05107':"Phillips",
		 '05109':"Pike",
		 '05111':"Poinsett",
		 '05113':"Polk",
		 '05115':"Pope",
		 '05117':"Prairie",
		 '05119':"Pulaski",
		 '05121':"Randolph",
		 '05123':"St Francis",
		 '05125':"Saline",
		 '05127':"Scott",
		 '05129':"Searcy",
		 '05131':"Sebastian",
		 '05133':"Sevier",
		 '05135':"Sharp",
		 '05137':"Stone",
		 '05139':"Union",
		 '05141':"Van Buren",
		 '05143':"Washington",
		 '05145':"White",
		 '05147':"Woodruff",
		 '05149':"Yell",
		 '06001':"Alameda",
		 '06003':"Alpine",
		 '06005':"Amador",
		 '06007':"Butte",
		 '06009':"Calaveras",
		 '06011':"Colusa",
		 '06013':"Contra Costa",
		 '06015':"Del Norte",
		 '06017':"El Dorado",
		 '06019':"Fresno",
		 '06021':"Glenn",
		 '06023':"Humboldt",
		 '06025':"Imperial",
		 '06027':"Inyo",
		 '06029':"Kern",
		 '06031':"Kings",
		 '06033':"Lake",
		 '06035':"Lassen",
		 '06037':"Los Angeles",
		 '06039':"Madera",
		 '06041':"Marin",
		 '06043':"Mariposa",
		 '06045':"Mendocino",
		 '06047':"Merced",
		 '06049':"Modoc",
		 '06051':"Mono",
		 '06053':"Monterey",
		 '06055':"Napa",
		 '06057':"Nevada",
		 '06059':"Orange",
		 '06061':"Placer",
		 '06063':"Plumas",
		 '06065':"Riverside",
		 '06067':"Sacramento",
		 '06069':"San Benito",
		 '06071':"San Bernardino",
		 '06073':"San Diego",
		 '06075':"San Francisco",
		 '06077':"San Joaquin",
		 '06079':"San Luis Obispo",
		 '06081':"San Mateo",
		 '06083':"Santa Barbara",
		 '06085':"Santa Clara",
		 '06087':"Santa Cruz",
		 '06089':"Shasta",
		 '06091':"Sierra",
		 '06093':"Siskiyou",
		 '06095':"Solano",
		 '06097':"Sonoma",
		 '06099':"Stanislaus",
		 '06101':"Sutter",
		 '06103':"Tehama",
		 '06105':"Trinity",
		 '06107':"Tulare",
		 '06109':"Tuolumne",
		 '06111':"Ventura",
		 '06113':"Yolo",
		 '06115':"Yuba",
		 '08001':"Adams",
		 '08003':"Alamosa",
		 '08005':"Arapahoe",
		 '08007':"Archuleta",
		 '08009':"Baca",
		 '08011':"Bent",
		 '08013':"Boulder",
		 '08014':"Broomfield",
		 '08015':"Chaffee",
		 '08017':"Cheyenne",
		 '08019':"Clear Creek",
		 '08021':"Conejos",
		 '08023':"Costilla",
		 '08025':"Crowley",
		 '08027':"Custer",
		 '08029':"Delta",
		 '08031':"Denver",
		 '08033':"Dolores",
		 '08035':"Douglas",
		 '08037':"Eagle",
		 '08039':"Elbert",
		 '08041':"El Paso",
		 '08043':"Fremont",
		 '08045':"Garfield",
		 '08047':"Gilpin",
		 '08049':"Grand",
		 '08051':"Gunnison",
		 '08053':"Hinsdale",
		 '08055':"Huerfano",
		 '08057':"Jackson",
		 '08059':"Jefferson",
		 '08061':"Kiowa",
		 '08063':"Kit Carson",
		 '08065':"Lake",
		 '08067':"La Plata",
		 '08069':"Larimer",
		 '08071':"Las Animas",
		 '08073':"Lincoln",
		 '08075':"Logan",
		 '08077':"Mesa",
		 '08079':"Mineral",
		 '08081':"Moffat",
		 '08083':"Montezuma",
		 '08085':"Montrose",
		 '08087':"Morgan",
		 '08089':"Otero",
		 '08091':"Ouray",
		 '08093':"Park",
		 '08095':"Phillips",
		 '08097':"Pitkin",
		 '08099':"Prowers",
		 '08101':"Pueblo",
		 '08103':"Rio Blanco",
		 '08105':"Rio Grande",
		 '08107':"Routt",
		 '08109':"Saguache",
		 '08111':"San Juan",
		 '08113':"San Miguel",
		 '08115':"Sedgwick",
		 '08117':"Summit",
		 '08119':"Teller",
		 '08121':"Washington",
		 '08123':"Weld",
		 '08125':"Yuma",
		 '09001':"Fairfield",
		 '09003':"Hartford",
		 '09005':"Litchfield",
		 '09007':"Middlesex",
		 '09009':"New Haven",
		 '09011':"New London",
		 '09013':"Tolland",
		 '09015':"Windham",
		 '10001':"Kent",
		 '10003':"New Castle",
		 '10005':"Sussex",
		 '11001':"District of Columbia",
		 '12001':"Alachua",
		 '12003':"Baker",
		 '12005':"Bay",
		 '12007':"Bradford",
		 '12009':"Brevard",
		 '12011':"Broward",
		 '12013':"Calhoun",
		 '12015':"Charlotte",
		 '12017':"Citrus",
		 '12019':"Clay",
		 '12021':"Collier",
		 '12023':"Columbia",
		 '12027':"De Soto",
		 '12029':"Dixie",
		 '12031':"Duval",
		 '12033':"Escambia",
		 '12035':"Flagler",
		 '12037':"Franklin",
		 '12039':"Gadsden",
		 '12041':"Gilchrist",
		 '12043':"Glades",
		 '12045':"Gulf",
		 '12047':"Hamilton",
		 '12049':"Hardee",
		 '12051':"Hendry",
		 '12053':"Hernando",
		 '12055':"Highlands",
		 '12057':"Hillsborough",
		 '12059':"Holmes",
		 '12061':"Indian River",
		 '12063':"Jackson",
		 '12065':"Jefferson",
		 '12067':"Lafayette",
		 '12069':"Lake",
		 '12071':"Lee",
		 '12073':"Leon",
		 '12075':"Levy",
		 '12077':"Liberty",
		 '12079':"Madison",
		 '12081':"Manatee",
		 '12083':"Marion",
		 '12085':"Martin",
		 '12086':"Miami-Dade",
		 '12087':"Monroe",
		 '12089':"Nassau",
		 '12091':"Okaloosa",
		 '12093':"Okeechobee",
		 '12095':"Orange",
		 '12097':"Osceola",
		 '12099':"Palm Beach",
		 '12101':"Pasco",
		 '12103':"Pinellas",
		 '12105':"Polk",
		 '12107':"Putnam",
		 '12109':"St Johns",
		 '12111':"St Lucie",
		 '12113':"Santa Rosa",
		 '12115':"Sarasota",
		 '12117':"Seminole",
		 '12119':"Sumter",
		 '12121':"Suwannee",
		 '12123':"Taylor",
		 '12125':"Union",
		 '12127':"Volusia",
		 '12129':"Wakulla",
		 '12131':"Walton",
		 '12133':"Washington",
		 '13001':"Appling",
		 '13003':"Atkinson",
		 '13005':"Bacon",
		 '13007':"Baker",
		 '13009':"Baldwin",
		 '13011':"Banks",
		 '13013':"Barrow",
		 '13015':"Bartow",
		 '13017':"Ben Hill",
		 '13019':"Berrien",
		 '13021':"Bibb",
		 '13023':"Bleckley",
		 '13025':"Brantley",
		 '13027':"Brooks",
		 '13029':"Bryan",
		 '13031':"Bulloch",
		 '13033':"Burke",
		 '13035':"Butts",
		 '13037':"Calhoun",
		 '13039':"Camden",
		 '13043':"Candler",
		 '13045':"Carroll",
		 '13047':"Catoosa",
		 '13049':"Charlton",
		 '13051':"Chatham",
		 '13053':"Chattahoochee",
		 '13055':"Chattooga",
		 '13057':"Cherokee",
		 '13059':"Clarke",
		 '13061':"Clay",
		 '13063':"Clayton",
		 '13065':"Clinch",
		 '13067':"Cobb",
		 '13069':"Coffee",
		 '13071':"Colquitt",
		 '13073':"Columbia",
		 '13075':"Cook",
		 '13077':"Coweta",
		 '13079':"Crawford",
		 '13081':"Crisp",
		 '13083':"Dade",
		 '13085':"Dawson",
		 '13087':"Decatur",
		 '13089':"De Kalb",
		 '13091':"Dodge",
		 '13093':"Dooly",
		 '13095':"Dougherty",
		 '13097':"Douglas",
		 '13099':"Early",
		 '13101':"Echols",
		 '13103':"Effingham",
		 '13105':"Elbert",
		 '13107':"Emanuel",
		 '13109':"Evans",
		 '13111':"Fannin",
		 '13113':"Fayette",
		 '13115':"Floyd",
		 '13117':"Forsyth",
		 '13119':"Franklin",
		 '13121':"Fulton",
		 '13123':"Gilmer",
		 '13125':"Glascock",
		 '13127':"Glynn",
		 '13129':"Gordon",
		 '13131':"Grady",
		 '13133':"Greene",
		 '13135':"Gwinnett",
		 '13137':"Habersham",
		 '13139':"Hall",
		 '13141':"Hancock",
		 '13143':"Haralson",
		 '13145':"Harris",
		 '13147':"Hart",
		 '13149':"Heard",
		 '13151':"Henry",
		 '13153':"Houston",
		 '13155':"Irwin",
		 '13157':"Jackson",
		 '13159':"Jasper",
		 '13161':"Jeff Davis",
		 '13163':"Jefferson",
		 '13165':"Jenkins",
		 '13167':"Johnson",
		 '13169':"Jones",
		 '13171':"Lamar",
		 '13173':"Lanier",
		 '13175':"Laurens",
		 '13177':"Lee",
		 '13179':"Liberty",
		 '13181':"Lincoln",
		 '13183':"Long",
		 '13185':"Lowndes",
		 '13187':"Lumpkin",
		 '13189':"McDuffie",
		 '13191':"McIntosh",
		 '13193':"Macon",
		 '13195':"Madison",
		 '13197':"Marion",
		 '13199':"Meriwether",
		 '13201':"Miller",
		 '13205':"Mitchell",
		 '13207':"Monroe",
		 '13209':"Montgomery",
		 '13211':"Morgan",
		 '13213':"Murray",
		 '13215':"Muscogee",
		 '13217':"Newton",
		 '13219':"Oconee",
		 '13221':"Oglethorpe",
		 '13223':"Paulding",
		 '13225':"Peach",
		 '13227':"Pickens",
		 '13229':"Pierce",
		 '13231':"Pike",
		 '13233':"Polk",
		 '13235':"Pulaski",
		 '13237':"Putnam",
		 '13239':"Quitman",
		 '13241':"Rabun",
		 '13243':"Randolph",
		 '13245':"Richmond",
		 '13247':"Rockdale",
		 '13249':"Schley",
		 '13251':"Screven",
		 '13253':"Seminole",
		 '13255':"Spalding",
		 '13257':"Stephens",
		 '13259':"Stewart",
		 '13261':"Sumter",
		 '13263':"Talbot",
		 '13265':"Taliaferro",
		 '13267':"Tattnall",
		 '13269':"Taylor",
		 '13271':"Telfair",
		 '13273':"Terrell",
		 '13275':"Thomas",
		 '13277':"Tift",
		 '13279':"Toombs",
		 '13281':"Towns",
		 '13283':"Treutlen",
		 '13285':"Troup",
		 '13287':"Turner",
		 '13289':"Twiggs",
		 '13291':"Union",
		 '13293':"Upson",
		 '13295':"Walker",
		 '13297':"Walton",
		 '13299':"Ware",
		 '13301':"Warren",
		 '13303':"Washington",
		 '13305':"Wayne",
		 '13307':"Webster",
		 '13309':"Wheeler",
		 '13311':"White",
		 '13313':"Whitfield",
		 '13315':"Wilcox",
		 '13317':"Wilkes",
		 '13319':"Wilkinson",
		 '13321':"Worth",
		 '15001':"Hawaii",
		 '15003':"Honolulu",
		 '15007':"Kauai",
		 '15009':"Maui",
		 '16001':"Ada",
		 '16003':"Adams",
		 '16005':"Bannock",
		 '16007':"Bear Lake",
		 '16009':"Benewah",
		 '16011':"Bingham",
		 '16013':"Blaine",
		 '16015':"Boise",
		 '16017':"Bonner",
		 '16019':"Bonneville",
		 '16021':"Boundary",
		 '16023':"Butte",
		 '16025':"Camas",
		 '16027':"Canyon",
		 '16029':"Caribou",
		 '16031':"Cassia",
		 '16033':"Clark",
		 '16035':"Clearwater",
		 '16037':"Custer",
		 '16039':"Elmore",
		 '16041':"Franklin",
		 '16043':"Fremont",
		 '16045':"Gem",
		 '16047':"Gooding",
		 '16049':"Idaho",
		 '16051':"Jefferson",
		 '16053':"Jerome",
		 '16055':"Kootenai",
		 '16057':"Latah",
		 '16059':"Lemhi",
		 '16061':"Lewis",
		 '16063':"Lincoln",
		 '16065':"Madison",
		 '16067':"Minidoka",
		 '16069':"Nez Perce",
		 '16071':"Oneida",
		 '16073':"Owyhee",
		 '16075':"Payette",
		 '16077':"Power",
		 '16079':"Shoshone",
		 '16081':"Teton",
		 '16083':"Twin Falls",
		 '16085':"Valley",
		 '16087':"Washington",
		 '17001':"Adams",
		 '17003':"Alexander",
		 '17005':"Bond",
		 '17007':"Boone",
		 '17009':"Brown",
		 '17011':"Bureau",
		 '17013':"Calhoun",
		 '17015':"Carroll",
		 '17017':"Cass",
		 '17019':"Champaign",
		 '17021':"Christian",
		 '17023':"Clark",
		 '17025':"Clay",
		 '17027':"Clinton",
		 '17029':"Coles",
		 '17031':"Cook",
		 '17033':"Crawford",
		 '17035':"Cumberland",
		 '17037':"De Kalb",
		 '17039':"Dewitt",
		 '17041':"Douglas",
		 '17043':"Du Page",
		 '17045':"Edgar",
		 '17047':"Edwards",
		 '17049':"Effingham",
		 '17051':"Fayette",
		 '17053':"Ford",
		 '17055':"Franklin",
		 '17057':"Fulton",
		 '17059':"Gallatin",
		 '17061':"Greene",
		 '17063':"Grundy",
		 '17065':"Hamilton",
		 '17067':"Hancock",
		 '17069':"Hardin",
		 '17071':"Henderson",
		 '17073':"Henry",
		 '17075':"Iroquois",
		 '17077':"Jackson",
		 '17079':"Jasper",
		 '17081':"Jefferson",
		 '17083':"Jersey",
		 '17085':"Jo Daviess",
		 '17087':"Johnson",
		 '17089':"Kane",
		 '17091':"Kankakee",
		 '17093':"Kendall",
		 '17095':"Knox",
		 '17097':"Lake",
		 '17099':"La Salle",
		 '17101':"Lawrence",
		 '17103':"Lee",
		 '17105':"Livingston",
		 '17107':"Logan",
		 '17109':"McDonough",
		 '17111':"McHenry",
		 '17113':"Mclean",
		 '17115':"Macon",
		 '17117':"Macoupin",
		 '17119':"Madison",
		 '17121':"Marion",
		 '17123':"Marshall",
		 '17125':"Mason",
		 '17127':"Massac",
		 '17129':"Menard",
		 '17131':"Mercer",
		 '17133':"Monroe",
		 '17135':"Montgomery",
		 '17137':"Morgan",
		 '17139':"Moultrie",
		 '17141':"Ogle",
		 '17143':"Peoria",
		 '17145':"Perry",
		 '17147':"Piatt",
		 '17149':"Pike",
		 '17151':"Pope",
		 '17153':"Pulaski",
		 '17155':"Putnam",
		 '17157':"Randolph",
		 '17159':"Richland",
		 '17161':"Rock Island",
		 '17163':"St Clair",
		 '17165':"Saline",
		 '17167':"Sangamon",
		 '17169':"Schuyler",
		 '17171':"Scott",
		 '17173':"Shelby",
		 '17175':"Stark",
		 '17177':"Stephenson",
		 '17179':"Tazewell",
		 '17181':"Union",
		 '17183':"Vermilion",
		 '17185':"Wabash",
		 '17187':"Warren",
		 '17189':"Washington",
		 '17191':"Wayne",
		 '17193':"White",
		 '17195':"Whiteside",
		 '17197':"Will",
		 '17199':"Williamson",
		 '17201':"Winnebago",
		 '17203':"Woodford",
		 '18001':"Adams",
		 '18003':"Allen",
		 '18005':"Bartholomew",
		 '18007':"Benton",
		 '18009':"Blackford",
		 '18011':"Boone",
		 '18013':"Brown",
		 '18015':"Carroll",
		 '18017':"Cass",
		 '18019':"Clark",
		 '18021':"Clay",
		 '18023':"Clinton",
		 '18025':"Crawford",
		 '18027':"Daviess",
		 '18029':"Dearborn",
		 '18031':"Decatur",
		 '18033':"De Kalb",
		 '18035':"Delaware",
		 '18037':"Dubois",
		 '18039':"Elkhart",
		 '18041':"Fayette",
		 '18043':"Floyd",
		 '18045':"Fountain",
		 '18047':"Franklin",
		 '18049':"Fulton",
		 '18051':"Gibson",
		 '18053':"Grant",
		 '18055':"Greene",
		 '18057':"Hamilton",
		 '18059':"Hancock",
		 '18061':"Harrison",
		 '18063':"Hendricks",
		 '18065':"Henry",
		 '18067':"Howard",
		 '18069':"Huntington",
		 '18071':"Jackson",
		 '18073':"Jasper",
		 '18075':"Jay",
		 '18077':"Jefferson",
		 '18079':"Jennings",
		 '18081':"Johnson",
		 '18083':"Knox",
		 '18085':"Kosciusko",
		 '18087':"Lagrange",
		 '18089':"Lake",
		 '18091':"La Porte",
		 '18093':"Lawrence",
		 '18095':"Madison",
		 '18097':"Marion",
		 '18099':"Marshall",
		 '18101':"Martin",
		 '18103':"Miami",
		 '18105':"Monroe",
		 '18107':"Montgomery",
		 '18109':"Morgan",
		 '18111':"Newton",
		 '18113':"Noble",
		 '18115':"Ohio",
		 '18117':"Orange",
		 '18119':"Owen",
		 '18121':"Parke",
		 '18123':"Perry",
		 '18125':"Pike",
		 '18127':"Porter",
		 '18129':"Posey",
		 '18131':"Pulaski",
		 '18133':"Putnam",
		 '18135':"Randolph",
		 '18137':"Ripley",
		 '18139':"Rush",
		 '18141':"St Joseph",
		 '18143':"Scott",
		 '18145':"Shelby",
		 '18147':"Spencer",
		 '18149':"Starke",
		 '18151':"Steuben",
		 '18153':"Sullivan",
		 '18155':"Switzerland",
		 '18157':"Tippecanoe",
		 '18159':"Tipton",
		 '18161':"Union",
		 '18163':"Vanderburgh",
		 '18165':"Vermillion",
		 '18167':"Vigo",
		 '18169':"Wabash",
		 '18171':"Warren",
		 '18173':"Warrick",
		 '18175':"Washington",
		 '18177':"Wayne",
		 '18179':"Wells",
		 '18181':"White",
		 '18183':"Whitley",
		 '19001':"Adair",
		 '19003':"Adams",
		 '19005':"Allamakee",
		 '19007':"Appanoose",
		 '19009':"Audubon",
		 '19011':"Benton",
		 '19013':"Black Hawk",
		 '19015':"Boone",
		 '19017':"Bremer",
		 '19019':"Buchanan",
		 '19021':"Buena Vista",
		 '19023':"Butler",
		 '19025':"Calhoun",
		 '19027':"Carroll",
		 '19029':"Cass",
		 '19031':"Cedar",
		 '19033':"Cerro Gordo",
		 '19035':"Cherokee",
		 '19037':"Chickasaw",
		 '19039':"Clarke",
		 '19041':"Clay",
		 '19043':"Clayton",
		 '19045':"Clinton",
		 '19047':"Crawford",
		 '19049':"Dallas",
		 '19051':"Davis",
		 '19053':"Decatur",
		 '19055':"Delaware",
		 '19057':"Des Moines",
		 '19059':"Dickinson",
		 '19061':"Dubuque",
		 '19063':"Emmet",
		 '19065':"Fayette",
		 '19067':"Floyd",
		 '19069':"Franklin",
		 '19071':"Fremont",
		 '19073':"Greene",
		 '19075':"Grundy",
		 '19077':"Guthrie",
		 '19079':"Hamilton",
		 '19081':"Hancock",
		 '19083':"Hardin",
		 '19085':"Harrison",
		 '19087':"Henry",
		 '19089':"Howard",
		 '19091':"Humboldt",
		 '19093':"Ida",
		 '19095':"Iowa",
		 '19097':"Jackson",
		 '19099':"Jasper",
		 '19101':"Jefferson",
		 '19103':"Johnson",
		 '19105':"Jones",
		 '19107':"Keokuk",
		 '19109':"Kossuth",
		 '19111':"Lee",
		 '19113':"Linn",
		 '19115':"Louisa",
		 '19117':"Lucas",
		 '19119':"Lyon",
		 '19121':"Madison",
		 '19123':"Mahaska",
		 '19125':"Marion",
		 '19127':"Marshall",
		 '19129':"Mills",
		 '19131':"Mitchell",
		 '19133':"Monona",
		 '19135':"Monroe",
		 '19137':"Montgomery",
		 '19139':"Muscatine",
		 '19141':"Obrien",
		 '19143':"Osceola",
		 '19145':"Page",
		 '19147':"Palo Alto",
		 '19149':"Plymouth",
		 '19151':"Pocahontas",
		 '19153':"Polk",
		 '19155':"Pottawattamie",
		 '19157':"Poweshiek",
		 '19159':"Ringgold",
		 '19161':"Sac",
		 '19163':"Scott",
		 '19165':"Shelby",
		 '19167':"Sioux",
		 '19169':"Story",
		 '19171':"Tama",
		 '19173':"Taylor",
		 '19175':"Union",
		 '19177':"Van Buren",
		 '19179':"Wapello",
		 '19181':"Warren",
		 '19183':"Washington",
		 '19185':"Wayne",
		 '19187':"Webster",
		 '19189':"Winnebago",
		 '19191':"Winneshiek",
		 '19193':"Woodbury",
		 '19195':"Worth",
		 '19197':"Wright",
		 '20001':"Allen",
		 '20003':"Anderson",
		 '20005':"Atchison",
		 '20007':"Barber",
		 '20009':"Barton",
		 '20011':"Bourbon",
		 '20013':"Brown",
		 '20015':"Butler",
		 '20017':"Chase",
		 '20019':"Chautauqua",
		 '20021':"Cherokee",
		 '20023':"Cheyenne",
		 '20025':"Clark",
		 '20027':"Clay",
		 '20029':"Cloud",
		 '20031':"Coffey",
		 '20033':"Comanche",
		 '20035':"Cowley",
		 '20037':"Crawford",
		 '20039':"Decatur",
		 '20041':"Dickinson",
		 '20043':"Doniphan",
		 '20045':"Douglas",
		 '20047':"Edwards",
		 '20049':"Elk",
		 '20051':"Ellis",
		 '20053':"Ellsworth",
		 '20055':"Finney",
		 '20057':"Ford",
		 '20059':"Franklin",
		 '20061':"Geary",
		 '20063':"Gove",
		 '20065':"Graham",
		 '20067':"Grant",
		 '20069':"Gray",
		 '20071':"Greeley",
		 '20073':"Greenwood",
		 '20075':"Hamilton",
		 '20077':"Harper",
		 '20079':"Harvey",
		 '20081':"Haskell",
		 '20083':"Hodgeman",
		 '20085':"Jackson",
		 '20087':"Jefferson",
		 '20089':"Jewell",
		 '20091':"Johnson",
		 '20093':"Kearny",
		 '20095':"Kingman",
		 '20097':"Kiowa",
		 '20099':"Labette",
		 '20101':"Lane",
		 '20103':"Leavenworth",
		 '20105':"Lincoln",
		 '20107':"Linn",
		 '20109':"Logan",
		 '20111':"Lyon",
		 '20113':"McPherson",
		 '20115':"Marion",
		 '20117':"Marshall",
		 '20119':"Meade",
		 '20121':"Miami",
		 '20123':"Mitchell",
		 '20125':"Montgomery",
		 '20127':"Morris",
		 '20129':"Morton",
		 '20131':"Nemaha",
		 '20133':"Neosho",
		 '20135':"Ness",
		 '20137':"Norton",
		 '20139':"Osage",
		 '20141':"Osborne",
		 '20143':"Ottawa",
		 '20145':"Pawnee",
		 '20147':"Phillips",
		 '20149':"Pottawatomie",
		 '20151':"Pratt",
		 '20153':"Rawlins",
		 '20155':"Reno",
		 '20157':"Republic",
		 '20159':"Rice",
		 '20161':"Riley",
		 '20163':"Rooks",
		 '20165':"Rush",
		 '20167':"Russell",
		 '20169':"Saline",
		 '20171':"Scott",
		 '20173':"Sedgwick",
		 '20175':"Seward",
		 '20177':"Shawnee",
		 '20179':"Sheridan",
		 '20181':"Sherman",
		 '20183':"Smith",
		 '20185':"Stafford",
		 '20187':"Stanton",
		 '20189':"Stevens",
		 '20191':"Sumner",
		 '20193':"Thomas",
		 '20195':"Trego",
		 '20197':"Wabaunsee",
		 '20199':"Wallace",
		 '20201':"Washington",
		 '20203':"Wichita",
		 '20205':"Wilson",
		 '20207':"Woodson",
		 '20209':"Wyandotte",
		 '21001':"Adair",
		 '21003':"Allen",
		 '21005':"Anderson",
		 '21007':"Ballard",
		 '21009':"Barren",
		 '21011':"Bath",
		 '21013':"Bell",
		 '21015':"Boone",
		 '21017':"Bourbon",
		 '21019':"Boyd",
		 '21021':"Boyle",
		 '21023':"Bracken",
		 '21025':"Breathitt",
		 '21027':"Breckinridge",
		 '21029':"Bullitt",
		 '21031':"Butler",
		 '21033':"Caldwell",
		 '21035':"Calloway",
		 '21037':"Campbell",
		 '21039':"Carlisle",
		 '21041':"Carroll",
		 '21043':"Carter",
		 '21045':"Casey",
		 '21047':"Christian",
		 '21049':"Clark",
		 '21051':"Clay",
		 '21053':"Clinton",
		 '21055':"Crittenden",
		 '21057':"Cumberland",
		 '21059':"Daviess",
		 '21061':"Edmonson",
		 '21063':"Elliott",
		 '21065':"Estill",
		 '21067':"Fayette",
		 '21069':"Fleming",
		 '21071':"Floyd",
		 '21073':"Franklin",
		 '21075':"Fulton",
		 '21077':"Gallatin",
		 '21079':"Garrard",
		 '21081':"Grant",
		 '21083':"Graves",
		 '21085':"Grayson",
		 '21087':"Green",
		 '21089':"Greenup",
		 '21091':"Hancock",
		 '21093':"Hardin",
		 '21095':"Harlan",
		 '21097':"Harrison",
		 '21099':"Hart",
		 '21101':"Henderson",
		 '21103':"Henry",
		 '21105':"Hickman",
		 '21107':"Hopkins",
		 '21109':"Jackson",
		 '21111':"Jefferson",
		 '21113':"Jessamine",
		 '21115':"Johnson",
		 '21117':"Kenton",
		 '21119':"Knott",
		 '21121':"Knox",
		 '21123':"Larue",
		 '21125':"Laurel",
		 '21127':"Lawrence",
		 '21129':"Lee",
		 '21131':"Leslie",
		 '21133':"Letcher",
		 '21135':"Lewis",
		 '21137':"Lincoln",
		 '21139':"Livingston",
		 '21141':"Logan",
		 '21143':"Lyon",
		 '21145':"McCracken",
		 '21147':"McCreary",
		 '21149':"Mclean",
		 '21151':"Madison",
		 '21153':"Magoffin",
		 '21155':"Marion",
		 '21157':"Marshall",
		 '21159':"Martin",
		 '21161':"Mason",
		 '21163':"Meade",
		 '21165':"Menifee",
		 '21167':"Mercer",
		 '21169':"Metcalfe",
		 '21171':"Monroe",
		 '21173':"Montgomery",
		 '21175':"Morgan",
		 '21177':"Muhlenberg",
		 '21179':"Nelson",
		 '21181':"Nicholas",
		 '21183':"Ohio",
		 '21185':"Oldham",
		 '21187':"Owen",
		 '21189':"Owsley",
		 '21191':"Pendleton",
		 '21193':"Perry",
		 '21195':"Pike",
		 '21197':"Powell",
		 '21199':"Pulaski",
		 '21201':"Robertson",
		 '21203':"Rockcastle",
		 '21205':"Rowan",
		 '21207':"Russell",
		 '21209':"Scott",
		 '21211':"Shelby",
		 '21213':"Simpson",
		 '21215':"Spencer",
		 '21217':"Taylor",
		 '21219':"Todd",
		 '21221':"Trigg",
		 '21223':"Trimble",
		 '21225':"Union",
		 '21227':"Warren",
		 '21229':"Washington",
		 '21231':"Wayne",
		 '21233':"Webster",
		 '21235':"Whitley",
		 '21237':"Wolfe",
		 '21239':"Woodford",
		 '22001':"Acadia",
		 '22003':"Allen",
		 '22005':"Ascension",
		 '22007':"Assumption",
		 '22009':"Avoyelles",
		 '22011':"Beauregard",
		 '22013':"Bienville",
		 '22015':"Bossier",
		 '22017':"Caddo",
		 '22019':"Calcasieu",
		 '22021':"Caldwell",
		 '22023':"Cameron",
		 '22025':"Catahoula",
		 '22027':"Claiborne",
		 '22029':"Concordia",
		 '22031':"De Soto",
		 '22033':"East Baton Rouge",
		 '22035':"East Carroll",
		 '22037':"East Feliciana",
		 '22039':"Evangeline",
		 '22041':"Franklin",
		 '22043':"Grant",
		 '22045':"Iberia",
		 '22047':"Iberville",
		 '22049':"Jackson",
		 '22051':"Jefferson",
		 '22053':"Jefferson Davis",
		 '22055':"Lafayette",
		 '22057':"Lafourche",
		 '22059':"La Salle",
		 '22061':"Lincoln",
		 '22063':"Livingston",
		 '22065':"Madison",
		 '22067':"Morehouse",
		 '22069':"Natchitoches",
		 '22071':"Orleans",
		 '22073':"Ouachita",
		 '22075':"Plaquemines",
		 '22077':"Pointe Coupee",
		 '22079':"Rapides",
		 '22081':"Red River",
		 '22083':"Richland",
		 '22085':"Sabine",
		 '22087':"St Bernard",
		 '22089':"St Charles",
		 '22091':"St Helena",
		 '22093':"St James",
		 '22095':"St John The Baptist",
		 '22097':"St Landry",
		 '22099':"St Martin",
		 '22101':"St Mary",
		 '22103':"St Tammany",
		 '22105':"Tangipahoa",
		 '22107':"Tensas",
		 '22109':"Terrebonne",
		 '22111':"Union",
		 '22113':"Vermilion",
		 '22115':"Vernon",
		 '22117':"Washington",
		 '22119':"Webster",
		 '22121':"West Baton Rouge",
		 '22123':"West Carroll",
		 '22125':"West Feliciana",
		 '22127':"Winn",
		 '23001':"Androscoggin",
		 '23003':"Aroostook",
		 '23005':"Cumberland",
		 '23007':"Franklin",
		 '23009':"Hancock",
		 '23011':"Kennebec",
		 '23013':"Knox",
		 '23015':"Lincoln",
		 '23017':"Oxford",
		 '23019':"Penobscot",
		 '23021':"Piscataquis",
		 '23023':"Sagadahoc",
		 '23025':"Somerset",
		 '23027':"Waldo",
		 '23029':"Washington",
		 '23031':"York",
		 '24001':"Allegany",
		 '24003':"Anne Arundel",
		 '24005':"Baltimore",
		 '24009':"Calvert",
		 '24011':"Caroline",
		 '24013':"Carroll",
		 '24015':"Cecil",
		 '24017':"Charles",
		 '24019':"Dorchester",
		 '24021':"Frederick",
		 '24023':"Garrett",
		 '24025':"Harford",
		 '24027':"Howard",
		 '24029':"Kent",
		 '24031':"Montgomery",
		 '24033':"Prince Georges",
		 '24035':"Queen Annes",
		 '24037':"St Marys",
		 '24039':"Somerset",
		 '24041':"Talbot",
		 '24043':"Washington",
		 '24045':"Wicomico",
		 '24047':"Worcester",
		 '24510':"Baltimore City",
		 '25001':"Barnstable",
		 '25003':"Berkshire",
		 '25005':"Bristol",
		 '25007':"Dukes",
		 '25009':"Essex",
		 '25011':"Franklin",
		 '25013':"Hampden",
		 '25015':"Hampshire",
		 '25017':"Middlesex",
		 '25019':"Nantucket",
		 '25021':"Norfolk",
		 '25023':"Plymouth",
		 '25025':"Suffolk",
		 '25027':"Worcester",
		 '26001':"Alcona",
		 '26003':"Alger",
		 '26005':"Allegan",
		 '26007':"Alpena",
		 '26009':"Antrim",
		 '26011':"Arenac",
		 '26013':"Baraga",
		 '26015':"Barry",
		 '26017':"Bay",
		 '26019':"Benzie",
		 '26021':"Berrien",
		 '26023':"Branch",
		 '26025':"Calhoun",
		 '26027':"Cass",
		 '26029':"Charlevoix",
		 '26031':"Cheboygan",
		 '26033':"Chippewa",
		 '26035':"Clare",
		 '26037':"Clinton",
		 '26039':"Crawford",
		 '26041':"Delta",
		 '26043':"Dickinson",
		 '26045':"Eaton",
		 '26047':"Emmet",
		 '26049':"Genesee",
		 '26051':"Gladwin",
		 '26053':"Gogebic",
		 '26055':"Grand Traverse",
		 '26057':"Gratiot",
		 '26059':"Hillsdale",
		 '26061':"Houghton",
		 '26063':"Huron",
		 '26065':"Ingham",
		 '26067':"Ionia",
		 '26069':"Iosco",
		 '26071':"Iron",
		 '26073':"Isabella",
		 '26075':"Jackson",
		 '26077':"Kalamazoo",
		 '26079':"Kalkaska",
		 '26081':"Kent",
		 '26083':"Keweenaw",
		 '26085':"Lake",
		 '26087':"Lapeer",
		 '26089':"Leelanau",
		 '26091':"Lenawee",
		 '26093':"Livingston",
		 '26095':"Luce",
		 '26097':"Mackinac",
		 '26099':"Macomb",
		 '26101':"Manistee",
		 '26103':"Marquette",
		 '26105':"Mason",
		 '26107':"Mecosta",
		 '26109':"Menominee",
		 '26111':"Midland",
		 '26113':"Missaukee",
		 '26115':"Monroe",
		 '26117':"Montcalm",
		 '26119':"Montmorency",
		 '26121':"Muskegon",
		 '26123':"Newaygo",
		 '26125':"Oakland",
		 '26127':"Oceana",
		 '26129':"Ogemaw",
		 '26131':"Ontonagon",
		 '26133':"Osceola",
		 '26135':"Oscoda",
		 '26137':"Otsego",
		 '26139':"Ottawa",
		 '26141':"Presque Isle",
		 '26143':"Roscommon",
		 '26145':"Saginaw",
		 '26147':"St Clair",
		 '26149':"St Joseph",
		 '26151':"Sanilac",
		 '26153':"Schoolcraft",
		 '26155':"Shiawassee",
		 '26157':"Tuscola",
		 '26159':"Van Buren",
		 '26161':"Washtenaw",
		 '26163':"Wayne",
		 '26165':"Wexford",
		 '27001':"Aitkin",
		 '27003':"Anoka",
		 '27005':"Becker",
		 '27007':"Beltrami",
		 '27009':"Benton",
		 '27011':"Big Stone",
		 '27013':"Blue Earth",
		 '27015':"Brown",
		 '27017':"Carlton",
		 '27019':"Carver",
		 '27021':"Cass",
		 '27023':"Chippewa",
		 '27025':"Chisago",
		 '27027':"Clay",
		 '27029':"Clearwater",
		 '27031':"Cook",
		 '27033':"Cottonwood",
		 '27035':"Crow Wing",
		 '27037':"Dakota",
		 '27039':"Dodge",
		 '27041':"Douglas",
		 '27043':"Faribault",
		 '27045':"Fillmore",
		 '27047':"Freeborn",
		 '27049':"Goodhue",
		 '27051':"Grant",
		 '27053':"Hennepin",
		 '27055':"Houston",
		 '27057':"Hubbard",
		 '27059':"Isanti",
		 '27061':"Itasca",
		 '27063':"Jackson",
		 '27065':"Kanabec",
		 '27067':"Kandiyohi",
		 '27069':"Kittson",
		 '27071':"Koochiching",
		 '27073':"Lac Qui Parle",
		 '27075':"Lake",
		 '27077':"Lake of The Woods",
		 '27079':"Le Sueur",
		 '27081':"Lincoln",
		 '27083':"Lyon",
		 '27085':"McLeod",
		 '27087':"Mahnomen",
		 '27089':"Marshall",
		 '27091':"Martin",
		 '27093':"Meeker",
		 '27095':"Mille Lacs",
		 '27097':"Morrison",
		 '27099':"Mower",
		 '27101':"Murray",
		 '27103':"Nicollet",
		 '27105':"Nobles",
		 '27107':"Norman",
		 '27109':"Olmsted",
		 '27111':"Otter Tail",
		 '27113':"Pennington",
		 '27115':"Pine",
		 '27117':"Pipestone",
		 '27119':"Polk",
		 '27121':"Pope",
		 '27123':"Ramsey",
		 '27125':"Red Lake",
		 '27127':"Redwood",
		 '27129':"Renville",
		 '27131':"Rice",
		 '27133':"Rock",
		 '27135':"Roseau",
		 '27137':"St Louis",
		 '27139':"Scott",
		 '27141':"Sherburne",
		 '27143':"Sibley",
		 '27145':"Stearns",
		 '27147':"Steele",
		 '27149':"Stevens",
		 '27151':"Swift",
		 '27153':"Todd",
		 '27155':"Traverse",
		 '27157':"Wabasha",
		 '27159':"Wadena",
		 '27161':"Waseca",
		 '27163':"Washington",
		 '27165':"Watonwan",
		 '27167':"Wilkin",
		 '27169':"Winona",
		 '27171':"Wright",
		 '27173':"Yellow Medicine",
		 '28001':"Adams",
		 '28003':"Alcorn",
		 '28005':"Amite",
		 '28007':"Attala",
		 '28009':"Benton",
		 '28011':"Bolivar",
		 '28013':"Calhoun",
		 '28015':"Carroll",
		 '28017':"Chickasaw",
		 '28019':"Choctaw",
		 '28021':"Claiborne",
		 '28023':"Clarke",
		 '28025':"Clay",
		 '28027':"Coahoma",
		 '28029':"Copiah",
		 '28031':"Covington",
		 '28033':"De Soto",
		 '28035':"Forrest",
		 '28037':"Franklin",
		 '28039':"George",
		 '28041':"Greene",
		 '28043':"Grenada",
		 '28045':"Hancock",
		 '28047':"Harrison",
		 '28049':"Hinds",
		 '28051':"Holmes",
		 '28053':"Humphreys",
		 '28055':"Issaquena",
		 '28057':"Itawamba",
		 '28059':"Jackson",
		 '28061':"Jasper",
		 '28063':"Jefferson",
		 '28065':"Jefferson Davis",
		 '28067':"Jones",
		 '28069':"Kemper",
		 '28071':"Lafayette",
		 '28073':"Lamar",
		 '28075':"Lauderdale",
		 '28077':"Lawrence",
		 '28079':"Leake",
		 '28081':"Lee",
		 '28083':"Leflore",
		 '28085':"Lincoln",
		 '28087':"Lowndes",
		 '28089':"Madison",
		 '28091':"Marion",
		 '28093':"Marshall",
		 '28095':"Monroe",
		 '28097':"Montgomery",
		 '28099':"Neshoba",
		 '28101':"Newton",
		 '28103':"Noxubee",
		 '28105':"Oktibbeha",
		 '28107':"Panola",
		 '28109':"Pearl River",
		 '28111':"Perry",
		 '28113':"Pike",
		 '28115':"Pontotoc",
		 '28117':"Prentiss",
		 '28119':"Quitman",
		 '28121':"Rankin",
		 '28123':"Scott",
		 '28125':"Sharkey",
		 '28127':"Simpson",
		 '28129':"Smith",
		 '28131':"Stone",
		 '28133':"Sunflower",
		 '28135':"Tallahatchie",
		 '28137':"Tate",
		 '28139':"Tippah",
		 '28141':"Tishomingo",
		 '28143':"Tunica",
		 '28145':"Union",
		 '28147':"Walthall",
		 '28149':"Warren",
		 '28151':"Washington",
		 '28153':"Wayne",
		 '28155':"Webster",
		 '28157':"Wilkinson",
		 '28159':"Winston",
		 '28161':"Yalobusha",
		 '28163':"Yazoo",
		 '29001':"Adair",
		 '29003':"Andrew",
		 '29005':"Atchison",
		 '29007':"Audrain",
		 '29009':"Barry",
		 '29011':"Barton",
		 '29013':"Bates",
		 '29015':"Benton",
		 '29017':"Bollinger",
		 '29019':"Boone",
		 '29021':"Buchanan",
		 '29023':"Butler",
		 '29025':"Caldwell",
		 '29027':"Callaway",
		 '29029':"Camden",
		 '29031':"Cape Girardeau",
		 '29033':"Carroll",
		 '29035':"Carter",
		 '29037':"Cass",
		 '29039':"Cedar",
		 '29041':"Chariton",
		 '29043':"Christian",
		 '29045':"Clark",
		 '29047':"Clay",
		 '29049':"Clinton",
		 '29051':"Cole",
		 '29053':"Cooper",
		 '29055':"Crawford",
		 '29057':"Dade",
		 '29059':"Dallas",
		 '29061':"Daviess",
		 '29063':"Dekalb",
		 '29065':"Dent",
		 '29067':"Douglas",
		 '29069':"Dunklin",
		 '29071':"Franklin",
		 '29073':"Gasconade",
		 '29075':"Gentry",
		 '29077':"Greene",
		 '29079':"Grundy",
		 '29081':"Harrison",
		 '29083':"Henry",
		 '29085':"Hickory",
		 '29087':"Holt",
		 '29089':"Howard",
		 '29091':"Howell",
		 '29093':"Iron",
		 '29095':"Jackson",
		 '29097':"Jasper",
		 '29099':"Jefferson",
		 '29101':"Johnson",
		 '29103':"Knox",
		 '29105':"Laclede",
		 '29107':"Lafayette",
		 '29109':"Lawrence",
		 '29111':"Lewis",
		 '29113':"Lincoln",
		 '29115':"Linn",
		 '29117':"Livingston",
		 '29119':"Mcdonald",
		 '29121':"Macon",
		 '29123':"Madison",
		 '29125':"Maries",
		 '29127':"Marion",
		 '29129':"Mercer",
		 '29131':"Miller",
		 '29133':"Mississippi",
		 '29135':"Moniteau",
		 '29137':"Monroe",
		 '29139':"Montgomery",
		 '29141':"Morgan",
		 '29143':"New Madrid",
		 '29145':"Newton",
		 '29147':"Nodaway",
		 '29149':"Oregon",
		 '29151':"Osage",
		 '29153':"Ozark",
		 '29155':"Pemiscot",
		 '29157':"Perry",
		 '29159':"Pettis",
		 '29161':"Phelps",
		 '29163':"Pike",
		 '29165':"Platte",
		 '29167':"Polk",
		 '29169':"Pulaski",
		 '29171':"Putnam",
		 '29173':"Ralls",
		 '29175':"Randolph",
		 '29177':"Ray",
		 '29179':"Reynolds",
		 '29181':"Ripley",
		 '29183':"St Charles",
		 '29185':"St Clair",
		 '29186':"Ste Genevieve",
		 '29187':"St Francois",
		 '29189':"St Louis",
		 '29195':"Saline",
		 '29197':"Schuyler",
		 '29199':"Scotland",
		 '29201':"Scott",
		 '29203':"Shannon",
		 '29205':"Shelby",
		 '29207':"Stoddard",
		 '29209':"Stone",
		 '29211':"Sullivan",
		 '29213':"Taney",
		 '29215':"Texas",
		 '29217':"Vernon",
		 '29219':"Warren",
		 '29221':"Washington",
		 '29223':"Wayne",
		 '29225':"Webster",
		 '29227':"Worth",
		 '29229':"Wright",
		 '29510':"St Louis City",
		 '30001':"Beaverhead",
		 '30003':"Big Horn",
		 '30005':"Blaine",
		 '30007':"Broadwater",
		 '30009':"Carbon",
		 '30011':"Carter",
		 '30013':"Cascade",
		 '30015':"Chouteau",
		 '30017':"Custer",
		 '30019':"Daniels",
		 '30021':"Dawson",
		 '30023':"Deer Lodge",
		 '30025':"Fallon",
		 '30027':"Fergus",
		 '30029':"Flathead",
		 '30031':"Gallatin",
		 '30033':"Garfield",
		 '30035':"Glacier",
		 '30037':"Golden Valley",
		 '30039':"Granite",
		 '30041':"Hill",
		 '30043':"Jefferson",
		 '30045':"Judith Basin",
		 '30047':"Lake",
		 '30049':"Lewis and Clark",
		 '30051':"Liberty",
		 '30053':"Lincoln",
		 '30055':"McCone",
		 '30057':"Madison",
		 '30059':"Meagher",
		 '30061':"Mineral",
		 '30063':"Missoula",
		 '30065':"Musselshell",
		 '30067':"Park",
		 '30069':"Petroleum",
		 '30071':"Phillips",
		 '30073':"Pondera",
		 '30075':"Powder River",
		 '30077':"Powell",
		 '30079':"Prairie",
		 '30081':"Ravalli",
		 '30083':"Richland",
		 '30085':"Roosevelt",
		 '30087':"Rosebud",
		 '30089':"Sanders",
		 '30091':"Sheridan",
		 '30093':"Silver Bow",
		 '30095':"Stillwater",
		 '30097':"Sweet Grass",
		 '30099':"Teton",
		 '30101':"Toole",
		 '30103':"Treasure",
		 '30105':"Valley",
		 '30107':"Wheatland",
		 '30109':"Wibaux",
		 '30111':"Yellowstone",
		 '31001':"Adams",
		 '31003':"Antelope",
		 '31005':"Arthur",
		 '31007':"Banner",
		 '31009':"Blaine",
		 '31011':"Boone",
		 '31013':"Box Butte",
		 '31015':"Boyd",
		 '31017':"Brown",
		 '31019':"Buffalo",
		 '31021':"Burt",
		 '31023':"Butler",
		 '31025':"Cass",
		 '31027':"Cedar",
		 '31029':"Chase",
		 '31031':"Cherry",
		 '31033':"Cheyenne",
		 '31035':"Clay",
		 '31037':"Colfax",
		 '31039':"Cuming",
		 '31041':"Custer",
		 '31043':"Dakota",
		 '31045':"Dawes",
		 '31047':"Dawson",
		 '31049':"Deuel",
		 '31051':"Dixon",
		 '31053':"Dodge",
		 '31055':"Douglas",
		 '31057':"Dundy",
		 '31059':"Fillmore",
		 '31061':"Franklin",
		 '31063':"Frontier",
		 '31065':"Furnas",
		 '31067':"Gage",
		 '31069':"Garden",
		 '31071':"Garfield",
		 '31073':"Gosper",
		 '31075':"Grant",
		 '31077':"Greeley",
		 '31079':"Hall",
		 '31081':"Hamilton",
		 '31083':"Harlan",
		 '31085':"Hayes",
		 '31087':"Hitchcock",
		 '31089':"Holt",
		 '31091':"Hooker",
		 '31093':"Howard",
		 '31095':"Jefferson",
		 '31097':"Johnson",
		 '31099':"Kearney",
		 '31101':"Keith",
		 '31103':"Keya Paha",
		 '31105':"Kimball",
		 '31107':"Knox",
		 '31109':"Lancaster",
		 '31111':"Lincoln",
		 '31113':"Logan",
		 '31115':"Loup",
		 '31117':"McPherson",
		 '31119':"Madison",
		 '31121':"Merrick",
		 '31123':"Morrill",
		 '31125':"Nance",
		 '31127':"Nemaha",
		 '31129':"Nuckolls",
		 '31131':"Otoe",
		 '31133':"Pawnee",
		 '31135':"Perkins",
		 '31137':"Phelps",
		 '31139':"Pierce",
		 '31141':"Platte",
		 '31143':"Polk",
		 '31145':"Red Willow",
		 '31147':"Richardson",
		 '31149':"Rock",
		 '31151':"Saline",
		 '31153':"Sarpy",
		 '31155':"Saunders",
		 '31157':"Scotts Bluff",
		 '31159':"Seward",
		 '31161':"Sheridan",
		 '31163':"Sherman",
		 '31165':"Sioux",
		 '31167':"Stanton",
		 '31169':"Thayer",
		 '31171':"Thomas",
		 '31173':"Thurston",
		 '31175':"Valley",
		 '31177':"Washington",
		 '31179':"Wayne",
		 '31181':"Webster",
		 '31183':"Wheeler",
		 '31185':"York",
		 '32001':"Churchill",
		 '32003':"Clark",
		 '32005':"Douglas",
		 '32007':"Elko",
		 '32009':"Esmeralda",
		 '32011':"Eureka",
		 '32013':"Humboldt",
		 '32015':"Lander",
		 '32017':"Lincoln",
		 '32019':"Lyon",
		 '32021':"Mineral",
		 '32023':"Nye",
		 '32027':"Pershing",
		 '32029':"Storey",
		 '32031':"Washoe",
		 '32033':"White Pine",
		 '32510':"Carson City",
		 '33001':"Belknap",
		 '33003':"Carroll",
		 '33005':"Cheshire",
		 '33007':"Coos",
		 '33009':"Grafton",
		 '33011':"Hillsborough",
		 '33013':"Merrimack",
		 '33015':"Rockingham",
		 '33017':"Strafford",
		 '33019':"Sullivan",
		 '34001':"Atlantic",
		 '34003':"Bergen",
		 '34005':"Burlington",
		 '34007':"Camden",
		 '34009':"Cape May",
		 '34011':"Cumberland",
		 '34013':"Essex",
		 '34015':"Gloucester",
		 '34017':"Hudson",
		 '34019':"Hunterdon",
		 '34021':"Mercer",
		 '34023':"Middlesex",
		 '34025':"Monmouth",
		 '34027':"Morris",
		 '34029':"Ocean",
		 '34031':"Passaic",
		 '34033':"Salem",
		 '34035':"Somerset",
		 '34037':"Sussex",
		 '34039':"Union",
		 '34041':"Warren",
		 '35001':"Bernalillo",
		 '35003':"Catron",
		 '35005':"Chaves",
		 '35006':"Cibola",
		 '35007':"Colfax",
		 '35009':"Curry",
		 '35011':"De Baca",
		 '35013':"Dona Ana",
		 '35015':"Eddy",
		 '35017':"Grant",
		 '35019':"Guadalupe",
		 '35021':"Harding",
		 '35023':"Hidalgo",
		 '35025':"Lea",
		 '35027':"Lincoln",
		 '35028':"Los Alamos",
		 '35029':"Luna",
		 '35031':"Mckinley",
		 '35033':"Mora",
		 '35035':"Otero",
		 '35037':"Quay",
		 '35039':"Rio Arriba",
		 '35041':"Roosevelt",
		 '35043':"Sandoval",
		 '35045':"San Juan",
		 '35047':"San Miguel",
		 '35049':"Santa Fe",
		 '35051':"Sierra",
		 '35053':"Socorro",
		 '35055':"Taos",
		 '35057':"Torrance",
		 '35059':"Union",
		 '35061':"Valencia",
		 '36001':"Albany",
		 '36003':"Allegany",
		 '36005':"Bronx",
		 '36007':"Broome",
		 '36009':"Cattaraugus",
		 '36011':"Cayuga",
		 '36013':"Chautauqua",
		 '36015':"Chemung",
		 '36017':"Chenango",
		 '36019':"Clinton",
		 '36021':"Columbia",
		 '36023':"Cortland",
		 '36025':"Delaware",
		 '36027':"Dutchess",
		 '36029':"Erie",
		 '36031':"Essex",
		 '36033':"Franklin",
		 '36035':"Fulton",
		 '36037':"Genesee",
		 '36039':"Greene",
		 '36041':"Hamilton",
		 '36043':"Herkimer",
		 '36045':"Jefferson",
		 '36047':"Kings",
		 '36049':"Lewis",
		 '36051':"Livingston",
		 '36053':"Madison",
		 '36055':"Monroe",
		 '36057':"Montgomery",
		 '36059':"Nassau",
		 '36061':"New York",
		 '36063':"Niagara",
		 '36065':"Oneida",
		 '36067':"Onondaga",
		 '36069':"Ontario",
		 '36071':"Orange",
		 '36073':"Orleans",
		 '36075':"Oswego",
		 '36077':"Otsego",
		 '36079':"Putnam",
		 '36081':"Queens",
		 '36083':"Rensselaer",
		 '36085':"Richmond",
		 '36087':"Rockland",
		 '36089':"St Lawrence",
		 '36091':"Saratoga",
		 '36093':"Schenectady",
		 '36095':"Schoharie",
		 '36097':"Schuyler",
		 '36099':"Seneca",
		 '36101':"Steuben",
		 '36103':"Suffolk",
		 '36105':"Sullivan",
		 '36107':"Tioga",
		 '36109':"Tompkins",
		 '36111':"Ulster",
		 '36113':"Warren",
		 '36115':"Washington",
		 '36117':"Wayne",
		 '36119':"Westchester",
		 '36121':"Wyoming",
		 '36123':"Yates",
		 '37001':"Alamance",
		 '37003':"Alexander",
		 '37005':"Alleghany",
		 '37007':"Anson",
		 '37009':"Ashe",
		 '37011':"Avery",
		 '37013':"Beaufort",
		 '37015':"Bertie",
		 '37017':"Bladen",
		 '37019':"Brunswick",
		 '37021':"Buncombe",
		 '37023':"Burke",
		 '37025':"Cabarrus",
		 '37027':"Caldwell",
		 '37029':"Camden",
		 '37031':"Carteret",
		 '37033':"Caswell",
		 '37035':"Catawba",
		 '37037':"Chatham",
		 '37039':"Cherokee",
		 '37041':"Chowan",
		 '37043':"Clay",
		 '37045':"Cleveland",
		 '37047':"Columbus",
		 '37049':"Craven",
		 '37051':"Cumberland",
		 '37053':"Currituck",
		 '37055':"Dare",
		 '37057':"Davidson",
		 '37059':"Davie",
		 '37061':"Duplin",
		 '37063':"Durham",
		 '37065':"Edgecombe",
		 '37067':"Forsyth",
		 '37069':"Franklin",
		 '37071':"Gaston",
		 '37073':"Gates",
		 '37075':"Graham",
		 '37077':"Granville",
		 '37079':"Greene",
		 '37081':"Guilford",
		 '37083':"Halifax",
		 '37085':"Harnett",
		 '37087':"Haywood",
		 '37089':"Henderson",
		 '37091':"Hertford",
		 '37093':"Hoke",
		 '37095':"Hyde",
		 '37097':"Iredell",
		 '37099':"Jackson",
		 '37101':"Johnston",
		 '37103':"Jones",
		 '37105':"Lee",
		 '37107':"Lenoir",
		 '37109':"Lincoln",
		 '37111':"McDowell",
		 '37113':"Macon",
		 '37115':"Madison",
		 '37117':"Martin",
		 '37119':"Mecklenburg",
		 '37121':"Mitchell",
		 '37123':"Montgomery",
		 '37125':"Moore",
		 '37127':"Nash",
		 '37129':"New Hanover",
		 '37131':"Northampton",
		 '37133':"Onslow",
		 '37135':"Orange",
		 '37137':"Pamlico",
		 '37139':"Pasquotank",
		 '37141':"Pender",
		 '37143':"Perquimans",
		 '37145':"Person",
		 '37147':"Pitt",
		 '37149':"Polk",
		 '37151':"Randolph",
		 '37153':"Richmond",
		 '37155':"Robeson",
		 '37157':"Rockingham",
		 '37159':"Rowan",
		 '37161':"Rutherford",
		 '37163':"Sampson",
		 '37165':"Scotland",
		 '37167':"Stanly",
		 '37169':"Stokes",
		 '37171':"Surry",
		 '37173':"Swain",
		 '37175':"Transylvania",
		 '37177':"Tyrrell",
		 '37179':"Union",
		 '37181':"Vance",
		 '37183':"Wake",
		 '37185':"Warren",
		 '37187':"Washington",
		 '37189':"Watauga",
		 '37191':"Wayne",
		 '37193':"Wilkes",
		 '37195':"Wilson",
		 '37197':"Yadkin",
		 '37199':"Yancey",
		 '38001':"Adams",
		 '38003':"Barnes",
		 '38005':"Benson",
		 '38007':"Billings",
		 '38009':"Bottineau",
		 '38011':"Bowman",
		 '38013':"Burke",
		 '38015':"Burleigh",
		 '38017':"Cass",
		 '38019':"Cavalier",
		 '38021':"Dickey",
		 '38023':"Divide",
		 '38025':"Dunn",
		 '38027':"Eddy",
		 '38029':"Emmons",
		 '38031':"Foster",
		 '38033':"Golden Valley",
		 '38035':"Grand Forks",
		 '38037':"Grant",
		 '38039':"Griggs",
		 '38041':"Hettinger",
		 '38043':"Kidder",
		 '38045':"Lamoure",
		 '38047':"Logan",
		 '38049':"McHenry",
		 '38051':"McIntosh",
		 '38053':"Mckenzie",
		 '38055':"Mclean",
		 '38057':"Mercer",
		 '38059':"Morton",
		 '38061':"Mountrail",
		 '38063':"Nelson",
		 '38065':"Oliver",
		 '38067':"Pembina",
		 '38069':"Pierce",
		 '38071':"Ramsey",
		 '38073':"Ransom",
		 '38075':"Renville",
		 '38077':"Richland",
		 '38079':"Rolette",
		 '38081':"Sargent",
		 '38083':"Sheridan",
		 '38085':"Sioux",
		 '38087':"Slope",
		 '38089':"Stark",
		 '38091':"Steele",
		 '38093':"Stutsman",
		 '38095':"Towner",
		 '38097':"Traill",
		 '38099':"Walsh",
		 '38101':"Ward",
		 '38103':"Wells",
		 '38105':"Williams",
		 '39001':"Adams",
		 '39003':"Allen",
		 '39005':"Ashland",
		 '39007':"Ashtabula",
		 '39009':"Athens",
		 '39011':"Auglaize",
		 '39013':"Belmont",
		 '39015':"Brown",
		 '39017':"Butler",
		 '39019':"Carroll",
		 '39021':"Champaign",
		 '39023':"Clark",
		 '39025':"Clermont",
		 '39027':"Clinton",
		 '39029':"Columbiana",
		 '39031':"Coshocton",
		 '39033':"Crawford",
		 '39035':"Cuyahoga",
		 '39037':"Darke",
		 '39039':"Defiance",
		 '39041':"Delaware",
		 '39043':"Erie",
		 '39045':"Fairfield",
		 '39047':"Fayette",
		 '39049':"Franklin",
		 '39051':"Fulton",
		 '39053':"Gallia",
		 '39055':"Geauga",
		 '39057':"Greene",
		 '39059':"Guernsey",
		 '39061':"Hamilton",
		 '39063':"Hancock",
		 '39065':"Hardin",
		 '39067':"Harrison",
		 '39069':"Henry",
		 '39071':"Highland",
		 '39073':"Hocking",
		 '39075':"Holmes",
		 '39077':"Huron",
		 '39079':"Jackson",
		 '39081':"Jefferson",
		 '39083':"Knox",
		 '39085':"Lake",
		 '39087':"Lawrence",
		 '39089':"Licking",
		 '39091':"Logan",
		 '39093':"Lorain",
		 '39095':"Lucas",
		 '39097':"Madison",
		 '39099':"Mahoning",
		 '39101':"Marion",
		 '39103':"Medina",
		 '39105':"Meigs",
		 '39107':"Mercer",
		 '39109':"Miami",
		 '39111':"Monroe",
		 '39113':"Montgomery",
		 '39115':"Morgan",
		 '39117':"Morrow",
		 '39119':"Muskingum",
		 '39121':"Noble",
		 '39123':"Ottawa",
		 '39125':"Paulding",
		 '39127':"Perry",
		 '39129':"Pickaway",
		 '39131':"Pike",
		 '39133':"Portage",
		 '39135':"Preble",
		 '39137':"Putnam",
		 '39139':"Richland",
		 '39141':"Ross",
		 '39143':"Sandusky",
		 '39145':"Scioto",
		 '39147':"Seneca",
		 '39149':"Shelby",
		 '39151':"Stark",
		 '39153':"Summit",
		 '39155':"Trumbull",
		 '39157':"Tuscarawas",
		 '39159':"Union",
		 '39161':"Van Wert",
		 '39163':"Vinton",
		 '39165':"Warren",
		 '39167':"Washington",
		 '39169':"Wayne",
		 '39171':"Williams",
		 '39173':"Wood",
		 '39175':"Wyandot",
		 '40001':"Adair",
		 '40003':"Alfalfa",
		 '40005':"Atoka",
		 '40007':"Beaver",
		 '40009':"Beckham",
		 '40011':"Blaine",
		 '40013':"Bryan",
		 '40015':"Caddo",
		 '40017':"Canadian",
		 '40019':"Carter",
		 '40021':"Cherokee",
		 '40023':"Choctaw",
		 '40025':"Cimarron",
		 '40027':"Cleveland",
		 '40029':"Coal",
		 '40031':"Comanche",
		 '40033':"Cotton",
		 '40035':"Craig",
		 '40037':"Creek",
		 '40039':"Custer",
		 '40041':"Delaware",
		 '40043':"Dewey",
		 '40045':"Ellis",
		 '40047':"Garfield",
		 '40049':"Garvin",
		 '40051':"Grady",
		 '40053':"Grant",
		 '40055':"Greer",
		 '40057':"Harmon",
		 '40059':"Harper",
		 '40061':"Haskell",
		 '40063':"Hughes",
		 '40065':"Jackson",
		 '40067':"Jefferson",
		 '40069':"Johnston",
		 '40071':"Kay",
		 '40073':"Kingfisher",
		 '40075':"Kiowa",
		 '40077':"Latimer",
		 '40079':"Le Flore",
		 '40081':"Lincoln",
		 '40083':"Logan",
		 '40085':"Love",
		 '40087':"Mcclain",
		 '40089':"McCurtain",
		 '40091':"McIntosh",
		 '40093':"Major",
		 '40095':"Marshall",
		 '40097':"Mayes",
		 '40099':"Murray",
		 '40101':"Muskogee",
		 '40103':"Noble",
		 '40105':"Nowata",
		 '40107':"Okfuskee",
		 '40109':"Oklahoma",
		 '40111':"Okmulgee",
		 '40113':"Osage",
		 '40115':"Ottawa",
		 '40117':"Pawnee",
		 '40119':"Payne",
		 '40121':"Pittsburg",
		 '40123':"Pontotoc",
		 '40125':"Pottawatomie",
		 '40127':"Pushmataha",
		 '40129':"Roger Mills",
		 '40131':"Rogers",
		 '40133':"Seminole",
		 '40135':"Sequoyah",
		 '40137':"Stephens",
		 '40139':"Texas",
		 '40141':"Tillman",
		 '40143':"Tulsa",
		 '40145':"Wagoner",
		 '40147':"Washington",
		 '40149':"Washita",
		 '40151':"Woods",
		 '40153':"Woodward",
		 '41001':"Baker",
		 '41003':"Benton",
		 '41005':"Clackamas",
		 '41007':"Clatsop",
		 '41009':"Columbia",
		 '41011':"Coos",
		 '41013':"Crook",
		 '41015':"Curry",
		 '41017':"Deschutes",
		 '41019':"Douglas",
		 '41021':"Gilliam",
		 '41023':"Grant",
		 '41025':"Harney",
		 '41027':"Hood River",
		 '41029':"Jackson",
		 '41031':"Jefferson",
		 '41033':"Josephine",
		 '41035':"Klamath",
		 '41037':"Lake",
		 '41039':"Lane",
		 '41041':"Lincoln",
		 '41043':"Linn",
		 '41045':"Malheur",
		 '41047':"Marion",
		 '41049':"Morrow",
		 '41051':"Multnomah",
		 '41053':"Polk",
		 '41055':"Sherman",
		 '41057':"Tillamook",
		 '41059':"Umatilla",
		 '41061':"Union",
		 '41063':"Wallowa",
		 '41065':"Wasco",
		 '41067':"Washington",
		 '41069':"Wheeler",
		 '41071':"Yamhill",
		 '42001':"Adams",
		 '42003':"Allegheny",
		 '42005':"Armstrong",
		 '42007':"Beaver",
		 '42009':"Bedford",
		 '42011':"Berks",
		 '42013':"Blair",
		 '42015':"Bradford",
		 '42017':"Bucks",
		 '42019':"Butler",
		 '42021':"Cambria",
		 '42023':"Cameron",
		 '42025':"Carbon",
		 '42027':"Centre",
		 '42029':"Chester",
		 '42031':"Clarion",
		 '42033':"Clearfield",
		 '42035':"Clinton",
		 '42037':"Columbia",
		 '42039':"Crawford",
		 '42041':"Cumberland",
		 '42043':"Dauphin",
		 '42045':"Delaware",
		 '42047':"Elk",
		 '42049':"Erie",
		 '42051':"Fayette",
		 '42053':"Forest",
		 '42055':"Franklin",
		 '42057':"Fulton",
		 '42059':"Greene",
		 '42061':"Huntingdon",
		 '42063':"Indiana",
		 '42065':"Jefferson",
		 '42067':"Juniata",
		 '42069':"Lackawanna",
		 '42071':"Lancaster",
		 '42073':"Lawrence",
		 '42075':"Lebanon",
		 '42077':"Lehigh",
		 '42079':"Luzerne",
		 '42081':"Lycoming",
		 '42083':"McKean",
		 '42085':"Mercer",
		 '42087':"Mifflin",
		 '42089':"Monroe",
		 '42091':"Montgomery",
		 '42093':"Montour",
		 '42095':"Northampton",
		 '42097':"Northumberland",
		 '42099':"Perry",
		 '42101':"Philadelphia",
		 '42103':"Pike",
		 '42105':"Potter",
		 '42107':"Schuylkill",
		 '42109':"Snyder",
		 '42111':"Somerset",
		 '42113':"Sullivan",
		 '42115':"Susquehanna",
		 '42117':"Tioga",
		 '42119':"Union",
		 '42121':"Venango",
		 '42123':"Warren",
		 '42125':"Washington",
		 '42127':"Wayne",
		 '42129':"Westmoreland",
		 '42131':"Wyoming",
		 '42133':"York",
		 '44001':"Bristol",
		 '44003':"Kent",
		 '44005':"Newport",
		 '44007':"Providence",
		 '44009':"Washington",
		 '45001':"Abbeville",
		 '45003':"Aiken",
		 '45005':"Allendale",
		 '45007':"Anderson",
		 '45009':"Bamberg",
		 '45011':"Barnwell",
		 '45013':"Beaufort",
		 '45015':"Berkeley",
		 '45017':"Calhoun",
		 '45019':"Charleston",
		 '45021':"Cherokee",
		 '45023':"Chester",
		 '45025':"Chesterfield",
		 '45027':"Clarendon",
		 '45029':"Colleton",
		 '45031':"Darlington",
		 '45033':"Dillon",
		 '45035':"Dorchester",
		 '45037':"Edgefield",
		 '45039':"Fairfield",
		 '45041':"Florence",
		 '45043':"Georgetown",
		 '45045':"Greenville",
		 '45047':"Greenwood",
		 '45049':"Hampton",
		 '45051':"Horry",
		 '45053':"Jasper",
		 '45055':"Kershaw",
		 '45057':"Lancaster",
		 '45059':"Laurens",
		 '45061':"Lee",
		 '45063':"Lexington",
		 '45065':"McCormick",
		 '45067':"Marion",
		 '45069':"Marlboro",
		 '45071':"Newberry",
		 '45073':"Oconee",
		 '45075':"Orangeburg",
		 '45077':"Pickens",
		 '45079':"Richland",
		 '45081':"Saluda",
		 '45083':"Spartanburg",
		 '45085':"Sumter",
		 '45087':"Union",
		 '45089':"Williamsburg",
		 '45091':"York",
		 '46003':"Aurora",
		 '46005':"Beadle",
		 '46007':"Bennett",
		 '46009':"Bon Homme",
		 '46011':"Brookings",
		 '46013':"Brown",
		 '46015':"Brule",
		 '46017':"Buffalo",
		 '46019':"Butte",
		 '46021':"Campbell",
		 '46023':"Charles Mix",
		 '46025':"Clark",
		 '46027':"Clay",
		 '46029':"Codington",
		 '46031':"Corson",
		 '46033':"Custer",
		 '46035':"Davison",
		 '46037':"Day",
		 '46039':"Deuel",
		 '46041':"Dewey",
		 '46043':"Douglas",
		 '46045':"Edmunds",
		 '46047':"Fall River",
		 '46049':"Faulk",
		 '46051':"Grant",
		 '46053':"Gregory",
		 '46055':"Haakon",
		 '46057':"Hamlin",
		 '46059':"Hand",
		 '46061':"Hanson",
		 '46063':"Harding",
		 '46065':"Hughes",
		 '46067':"Hutchinson",
		 '46069':"Hyde",
		 '46071':"Jackson",
		 '46073':"Jerauld",
		 '46075':"Jones",
		 '46077':"Kingsbury",
		 '46079':"Lake",
		 '46081':"Lawrence",
		 '46083':"Lincoln",
		 '46085':"Lyman",
		 '46087':"McCook",
		 '46089':"McPherson",
		 '46091':"Marshall",
		 '46093':"Meade",
		 '46095':"Mellette",
		 '46097':"Miner",
		 '46099':"Minnehaha",
		 '46101':"Moody",
		 '46103':"Pennington",
		 '46105':"Perkins",
		 '46107':"Potter",
		 '46109':"Roberts",
		 '46111':"Sanborn",
		 '46113':"Shannon",
		 '46115':"Spink",
		 '46117':"Stanley",
		 '46119':"Sully",
		 '46121':"Todd",
		 '46123':"Tripp",
		 '46125':"Turner",
		 '46127':"Union",
		 '46129':"Walworth",
		 '46135':"Yankton",
		 '46137':"Ziebach",
		 '47001':"Anderson",
		 '47003':"Bedford",
		 '47005':"Benton",
		 '47007':"Bledsoe",
		 '47009':"Blount",
		 '47011':"Bradley",
		 '47013':"Campbell",
		 '47015':"Cannon",
		 '47017':"Carroll",
		 '47019':"Carter",
		 '47021':"Cheatham",
		 '47023':"Chester",
		 '47025':"Claiborne",
		 '47027':"Clay",
		 '47029':"Cocke",
		 '47031':"Coffee",
		 '47033':"Crockett",
		 '47035':"Cumberland",
		 '47037':"Davidson",
		 '47039':"Decatur",
		 '47041':"Dekalb",
		 '47043':"Dickson",
		 '47045':"Dyer",
		 '47047':"Fayette",
		 '47049':"Fentress",
		 '47051':"Franklin",
		 '47053':"Gibson",
		 '47055':"Giles",
		 '47057':"Grainger",
		 '47059':"Greene",
		 '47061':"Grundy",
		 '47063':"Hamblen",
		 '47065':"Hamilton",
		 '47067':"Hancock",
		 '47069':"Hardeman",
		 '47071':"Hardin",
		 '47073':"Hawkins",
		 '47075':"Haywood",
		 '47077':"Henderson",
		 '47079':"Henry",
		 '47081':"Hickman",
		 '47083':"Houston",
		 '47085':"Humphreys",
		 '47087':"Jackson",
		 '47089':"Jefferson",
		 '47091':"Johnson",
		 '47093':"Knox",
		 '47095':"Lake",
		 '47097':"Lauderdale",
		 '47099':"Lawrence",
		 '47101':"Lewis",
		 '47103':"Lincoln",
		 '47105':"Loudon",
		 '47107':"McMinn",
		 '47109':"McNairy",
		 '47111':"Macon",
		 '47113':"Madison",
		 '47115':"Marion",
		 '47117':"Marshall",
		 '47119':"Maury",
		 '47121':"Meigs",
		 '47123':"Monroe",
		 '47125':"Montgomery",
		 '47127':"Moore",
		 '47129':"Morgan",
		 '47131':"Obion",
		 '47133':"Overton",
		 '47135':"Perry",
		 '47137':"Pickett",
		 '47139':"Polk",
		 '47141':"Putnam",
		 '47143':"Rhea",
		 '47145':"Roane",
		 '47147':"Robertson",
		 '47149':"Rutherford",
		 '47151':"Scott",
		 '47153':"Sequatchie",
		 '47155':"Sevier",
		 '47157':"Shelby",
		 '47159':"Smith",
		 '47161':"Stewart",
		 '47163':"Sullivan",
		 '47165':"Sumner",
		 '47167':"Tipton",
		 '47169':"Trousdale",
		 '47171':"Unicoi",
		 '47173':"Union",
		 '47175':"Van Buren",
		 '47177':"Warren",
		 '47179':"Washington",
		 '47181':"Wayne",
		 '47183':"Weakley",
		 '47185':"White",
		 '47187':"Williamson",
		 '47189':"Wilson",
		 '48001':"Anderson",
		 '48003':"Andrews",
		 '48005':"Angelina",
		 '48007':"Aransas",
		 '48009':"Archer",
		 '48011':"Armstrong",
		 '48013':"Atascosa",
		 '48015':"Austin",
		 '48017':"Bailey",
		 '48019':"Bandera",
		 '48021':"Bastrop",
		 '48023':"Baylor",
		 '48025':"Bee",
		 '48027':"Bell",
		 '48029':"Bexar",
		 '48031':"Blanco",
		 '48033':"Borden",
		 '48035':"Bosque",
		 '48037':"Bowie",
		 '48039':"Brazoria",
		 '48041':"Brazos",
		 '48043':"Brewster",
		 '48045':"Briscoe",
		 '48047':"Brooks",
		 '48049':"Brown",
		 '48051':"Burleson",
		 '48053':"Burnet",
		 '48055':"Caldwell",
		 '48057':"Calhoun",
		 '48059':"Callahan",
		 '48061':"Cameron",
		 '48063':"Camp",
		 '48065':"Carson",
		 '48067':"Cass",
		 '48069':"Castro",
		 '48071':"Chambers",
		 '48073':"Cherokee",
		 '48075':"Childress",
		 '48077':"Clay",
		 '48079':"Cochran",
		 '48081':"Coke",
		 '48083':"Coleman",
		 '48085':"Collin",
		 '48087':"Collingsworth",
		 '48089':"Colorado",
		 '48091':"Comal",
		 '48093':"Comanche",
		 '48095':"Concho",
		 '48097':"Cooke",
		 '48099':"Coryell",
		 '48101':"Cottle",
		 '48103':"Crane",
		 '48105':"Crockett",
		 '48107':"Crosby",
		 '48109':"Culberson",
		 '48111':"Dallam",
		 '48113':"Dallas",
		 '48115':"Dawson",
		 '48117':"Deaf Smith",
		 '48119':"Delta",
		 '48121':"Denton",
		 '48123':"De Witt",
		 '48125':"Dickens",
		 '48127':"Dimmit",
		 '48129':"Donley",
		 '48131':"Duval",
		 '48133':"Eastland",
		 '48135':"Ector",
		 '48137':"Edwards",
		 '48139':"Ellis",
		 '48141':"El Paso",
		 '48143':"Erath",
		 '48145':"Falls",
		 '48147':"Fannin",
		 '48149':"Fayette",
		 '48151':"Fisher",
		 '48153':"Floyd",
		 '48155':"Foard",
		 '48157':"Fort Bend",
		 '48159':"Franklin",
		 '48161':"Freestone",
		 '48163':"Frio",
		 '48165':"Gaines",
		 '48167':"Galveston",
		 '48169':"Garza",
		 '48171':"Gillespie",
		 '48173':"Glasscock",
		 '48175':"Goliad",
		 '48177':"Gonzales",
		 '48179':"Gray",
		 '48181':"Grayson",
		 '48183':"Gregg",
		 '48185':"Grimes",
		 '48187':"Guadalupe",
		 '48189':"Hale",
		 '48191':"Hall",
		 '48193':"Hamilton",
		 '48195':"Hansford",
		 '48197':"Hardeman",
		 '48199':"Hardin",
		 '48201':"Harris",
		 '48203':"Harrison",
		 '48205':"Hartley",
		 '48207':"Haskell",
		 '48209':"Hays",
		 '48211':"Hemphill",
		 '48213':"Henderson",
		 '48215':"Hidalgo",
		 '48217':"Hill",
		 '48219':"Hockley",
		 '48221':"Hood",
		 '48223':"Hopkins",
		 '48225':"Houston",
		 '48227':"Howard",
		 '48229':"Hudspeth",
		 '48231':"Hunt",
		 '48233':"Hutchinson",
		 '48235':"Irion",
		 '48237':"Jack",
		 '48239':"Jackson",
		 '48241':"Jasper",
		 '48243':"Jeff Davis",
		 '48245':"Jefferson",
		 '48247':"Jim Hogg",
		 '48249':"Jim Wells",
		 '48251':"Johnson",
		 '48253':"Jones",
		 '48255':"Karnes",
		 '48257':"Kaufman",
		 '48259':"Kendall",
		 '48261':"Kenedy",
		 '48263':"Kent",
		 '48265':"Kerr",
		 '48267':"Kimble",
		 '48269':"King",
		 '48271':"Kinney",
		 '48273':"Kleberg",
		 '48275':"Knox",
		 '48277':"Lamar",
		 '48279':"Lamb",
		 '48281':"Lampasas",
		 '48283':"La Salle",
		 '48285':"Lavaca",
		 '48287':"Lee",
		 '48289':"Leon",
		 '48291':"Liberty",
		 '48293':"Limestone",
		 '48295':"Lipscomb",
		 '48297':"Live Oak",
		 '48299':"Llano",
		 '48301':"Loving",
		 '48303':"Lubbock",
		 '48305':"Lynn",
		 '48307':"McCulloch",
		 '48309':"McLennan",
		 '48311':"McMullen",
		 '48313':"Madison",
		 '48315':"Marion",
		 '48317':"Martin",
		 '48319':"Mason",
		 '48321':"Matagorda",
		 '48323':"Maverick",
		 '48325':"Medina",
		 '48327':"Menard",
		 '48329':"Midland",
		 '48331':"Milam",
		 '48333':"Mills",
		 '48335':"Mitchell",
		 '48337':"Montague",
		 '48339':"Montgomery",
		 '48341':"Moore",
		 '48343':"Morris",
		 '48345':"Motley",
		 '48347':"Nacogdoches",
		 '48349':"Navarro",
		 '48351':"Newton",
		 '48353':"Nolan",
		 '48355':"Nueces",
		 '48357':"Ochiltree",
		 '48359':"Oldham",
		 '48361':"Orange",
		 '48363':"Palo Pinto",
		 '48365':"Panola",
		 '48367':"Parker",
		 '48369':"Parmer",
		 '48371':"Pecos",
		 '48373':"Polk",
		 '48375':"Potter",
		 '48377':"Presidio",
		 '48379':"Rains",
		 '48381':"Randall",
		 '48383':"Reagan",
		 '48385':"Real",
		 '48387':"Red River",
		 '48389':"Reeves",
		 '48391':"Refugio",
		 '48393':"Roberts",
		 '48395':"Robertson",
		 '48397':"Rockwall",
		 '48399':"Runnels",
		 '48401':"Rusk",
		 '48403':"Sabine",
		 '48405':"San Augustine",
		 '48407':"San Jacinto",
		 '48409':"San Patricio",
		 '48411':"San Saba",
		 '48413':"Schleicher",
		 '48415':"Scurry",
		 '48417':"Shackelford",
		 '48419':"Shelby",
		 '48421':"Sherman",
		 '48423':"Smith",
		 '48425':"Somervell",
		 '48427':"Starr",
		 '48429':"Stephens",
		 '48431':"Sterling",
		 '48433':"Stonewall",
		 '48435':"Sutton",
		 '48437':"Swisher",
		 '48439':"Tarrant",
		 '48441':"Taylor",
		 '48443':"Terrell",
		 '48445':"Terry",
		 '48447':"Throckmorton",
		 '48449':"Titus",
		 '48451':"Tom Green",
		 '48453':"Travis",
		 '48455':"Trinity",
		 '48457':"Tyler",
		 '48459':"Upshur",
		 '48461':"Upton",
		 '48463':"Uvalde",
		 '48465':"Val Verde",
		 '48467':"Van Zandt",
		 '48469':"Victoria",
		 '48471':"Walker",
		 '48473':"Waller",
		 '48475':"Ward",
		 '48477':"Washington",
		 '48479':"Webb",
		 '48481':"Wharton",
		 '48483':"Wheeler",
		 '48485':"Wichita",
		 '48487':"Wilbarger",
		 '48489':"Willacy",
		 '48491':"Williamson",
		 '48493':"Wilson",
		 '48495':"Winkler",
		 '48497':"Wise",
		 '48499':"Wood",
		 '48501':"Yoakum",
		 '48503':"Young",
		 '48505':"Zapata",
		 '48507':"Zavala",
		 '49001':"Beaver",
		 '49003':"Box Elder",
		 '49005':"Cache",
		 '49007':"Carbon",
		 '49009':"Daggett",
		 '49011':"Davis",
		 '49013':"Duchesne",
		 '49015':"Emery",
		 '49017':"Garfield",
		 '49019':"Grand",
		 '49021':"Iron",
		 '49023':"Juab",
		 '49025':"Kane",
		 '49027':"Millard",
		 '49029':"Morgan",
		 '49031':"Piute",
		 '49033':"Rich",
		 '49035':"Salt Lake",
		 '49037':"San Juan",
		 '49039':"Sanpete",
		 '49041':"Sevier",
		 '49043':"Summit",
		 '49045':"Tooele",
		 '49047':"Uintah",
		 '49049':"Utah",
		 '49051':"Wasatch",
		 '49053':"Washington",
		 '49055':"Wayne",
		 '49057':"Weber",
		 '50001':"Addison",
		 '50003':"Bennington",
		 '50005':"Caledonia",
		 '50007':"Chittenden",
		 '50009':"Essex",
		 '50011':"Franklin",
		 '50013':"Grand Isle",
		 '50015':"Lamoille",
		 '50017':"Orange",
		 '50019':"Orleans",
		 '50021':"Rutland",
		 '50023':"Washington",
		 '50025':"Windham",
		 '50027':"Windsor",
		 '51001':"Accomack",
		 '51003':"Albemarle",
		 '51005':"Alleghany",
		 '51007':"Amelia",
		 '51009':"Amherst",
		 '51011':"Appomattox",
		 '51013':"Arlington",
		 '51015':"Augusta",
		 '51017':"Bath",
		 '51019':"Bedford",
		 '51021':"Bland",
		 '51023':"Botetourt",
		 '51025':"Brunswick",
		 '51027':"Buchanan",
		 '51029':"Buckingham",
		 '51031':"Campbell",
		 '51033':"Caroline",
		 '51035':"Carroll",
		 '51036':"Charles City",
		 '51037':"Charlotte",
		 '51041':"Chesterfield",
		 '51043':"Clarke",
		 '51045':"Craig",
		 '51047':"Culpeper",
		 '51049':"Cumberland",
		 '51051':"Dickenson",
		 '51053':"Dinwiddie",
		 '51057':"Essex",
		 '51059':"Fairfax",
		 '51061':"Fauquier",
		 '51063':"Floyd",
		 '51065':"Fluvanna",
		 '51067':"Franklin",
		 '51069':"Frederick",
		 '51071':"Giles",
		 '51073':"Gloucester",
		 '51075':"Goochland",
		 '51077':"Grayson",
		 '51079':"Greene",
		 '51081':"Greensville",
		 '51083':"Halifax",
		 '51085':"Hanover",
		 '51087':"Henrico",
		 '51089':"Henry",
		 '51091':"Highland",
		 '51093':"Isle of Wight",
		 '51095':"James City",
		 '51097':"King and Queen",
		 '51099':"King George",
		 '51101':"King William",
		 '51103':"Lancaster",
		 '51105':"Lee",
		 '51107':"Loudoun",
		 '51109':"Louisa",
		 '51111':"Lunenburg",
		 '51113':"Madison",
		 '51115':"Mathews",
		 '51117':"Mecklenburg",
		 '51119':"Middlesex",
		 '51121':"Montgomery",
		 '51125':"Nelson",
		 '51127':"New Kent",
		 '51131':"Northampton",
		 '51133':"Northumberland",
		 '51135':"Nottoway",
		 '51137':"Orange",
		 '51139':"Page",
		 '51141':"Patrick",
		 '51143':"Pittsylvania",
		 '51145':"Powhatan",
		 '51147':"Prince Edward",
		 '51149':"Prince George",
		 '51153':"Prince William",
		 '51155':"Pulaski",
		 '51157':"Rappahannock",
		 '51159':"Richmond",
		 '51161':"Roanoke",
		 '51163':"Rockbridge",
		 '51165':"Rockingham",
		 '51167':"Russell",
		 '51169':"Scott",
		 '51171':"Shenandoah",
		 '51173':"Smyth",
		 '51175':"Southampton",
		 '51177':"Spotsylvania",
		 '51179':"Stafford",
		 '51181':"Surry",
		 '51183':"Sussex",
		 '51185':"Tazewell",
		 '51187':"Warren",
		 '51191':"Washington",
		 '51193':"Westmoreland",
		 '51195':"Wise",
		 '51197':"Wythe",
		 '51199':"York",
		 '51510':"Alexandria City",
		 '51515':"Bedford City",
		 '51520':"Bristol City",
		 '51530':"Buena Vista City",
		 '51540':"Charlottesville City",
		 '51550':"Chesapeake City",
		 '51570':"Colonial Heights City",
		 '51580':"Covington City",
		 '51590':"Danville City",
		 '51595':"Emporia City",
		 '51600':"Fairfax City",
		 '51610':"Falls Church City",
		 '51620':"Franklin City",
		 '51630':"Fredericksburg City",
		 '51640':"Galax City",
		 '51650':"Hampton City",
		 '51660':"Harrisonburg City",
		 '51670':"Hopewell City",
		 '51678':"Lexington City",
		 '51680':"Lynchburg City",
		 '51683':"Manassas City",
		 '51685':"Manassas Park City",
		 '51690':"Martinsville City",
		 '51700':"Newport News City",
		 '51710':"Norfolk City",
		 '51720':"Norton City",
		 '51730':"Petersburg City",
		 '51735':"Poquoson City",
		 '51740':"Portsmouth City",
		 '51750':"Radford",
		 '51760':"Richmond City",
		 '51770':"Roanoke City",
		 '51775':"Salem City",
		 '51790':"Staunton City",
		 '51800':"Suffolk City",
		 '51810':"Virginia Beach City",
		 '51820':"Waynesboro City",
		 '51830':"Williamsburg City",
		 '51840':"Winchester City",
		 '53001':"Adams",
		 '53003':"Asotin",
		 '53005':"Benton",
		 '53007':"Chelan",
		 '53009':"Clallam",
		 '53011':"Clark",
		 '53013':"Columbia",
		 '53015':"Cowlitz",
		 '53017':"Douglas",
		 '53019':"Ferry",
		 '53021':"Franklin",
		 '53023':"Garfield",
		 '53025':"Grant",
		 '53027':"Grays Harbor",
		 '53029':"Island",
		 '53031':"Jefferson",
		 '53033':"King",
		 '53035':"Kitsap",
		 '53037':"Kittitas",
		 '53039':"Klickitat",
		 '53041':"Lewis",
		 '53043':"Lincoln",
		 '53045':"Mason",
		 '53047':"Okanogan",
		 '53049':"Pacific",
		 '53051':"Pend Oreille",
		 '53053':"Pierce",
		 '53055':"San Juan",
		 '53057':"Skagit",
		 '53059':"Skamania",
		 '53061':"Snohomish",
		 '53063':"Spokane",
		 '53065':"Stevens",
		 '53067':"Thurston",
		 '53069':"Wahkiakum",
		 '53071':"Walla Walla",
		 '53073':"Whatcom",
		 '53075':"Whitman",
		 '53077':"Yakima",
		 '54001':"Barbour",
		 '54003':"Berkeley",
		 '54005':"Boone",
		 '54007':"Braxton",
		 '54009':"Brooke",
		 '54011':"Cabell",
		 '54013':"Calhoun",
		 '54015':"Clay",
		 '54017':"Doddridge",
		 '54019':"Fayette",
		 '54021':"Gilmer",
		 '54023':"Grant",
		 '54025':"Greenbrier",
		 '54027':"Hampshire",
		 '54029':"Hancock",
		 '54031':"Hardy",
		 '54033':"Harrison",
		 '54035':"Jackson",
		 '54037':"Jefferson",
		 '54039':"Kanawha",
		 '54041':"Lewis",
		 '54043':"Lincoln",
		 '54045':"Logan",
		 '54047':"McDowell",
		 '54049':"Marion",
		 '54051':"Marshall",
		 '54053':"Mason",
		 '54055':"Mercer",
		 '54057':"Mineral",
		 '54059':"Mingo",
		 '54061':"Monongalia",
		 '54063':"Monroe",
		 '54065':"Morgan",
		 '54067':"Nicholas",
		 '54069':"Ohio",
		 '54071':"Pendleton",
		 '54073':"Pleasants",
		 '54075':"Pocahontas",
		 '54077':"Preston",
		 '54079':"Putnam",
		 '54081':"Raleigh",
		 '54083':"Randolph",
		 '54085':"Ritchie",
		 '54087':"Roane",
		 '54089':"Summers",
		 '54091':"Taylor",
		 '54093':"Tucker",
		 '54095':"Tyler",
		 '54097':"Upshur",
		 '54099':"Wayne",
		 '54101':"Webster",
		 '54103':"Wetzel",
		 '54105':"Wirt",
		 '54107':"Wood",
		 '54109':"Wyoming",
		 '55001':"Adams",
		 '55003':"Ashland",
		 '55005':"Barron",
		 '55007':"Bayfield",
		 '55009':"Brown",
		 '55011':"Buffalo",
		 '55013':"Burnett",
		 '55015':"Calumet",
		 '55017':"Chippewa",
		 '55019':"Clark",
		 '55021':"Columbia",
		 '55023':"Crawford",
		 '55025':"Dane",
		 '55027':"Dodge",
		 '55029':"Door",
		 '55031':"Douglas",
		 '55033':"Dunn",
		 '55035':"Eau Claire",
		 '55037':"Florence",
		 '55039':"Fond Du Lac",
		 '55041':"Forest",
		 '55043':"Grant",
		 '55045':"Green",
		 '55047':"Green Lake",
		 '55049':"Iowa",
		 '55051':"Iron",
		 '55053':"Jackson",
		 '55055':"Jefferson",
		 '55057':"Juneau",
		 '55059':"Kenosha",
		 '55061':"Kewaunee",
		 '55063':"La Crosse",
		 '55065':"Lafayette",
		 '55067':"Langlade",
		 '55069':"Lincoln",
		 '55071':"Manitowoc",
		 '55073':"Marathon",
		 '55075':"Marinette",
		 '55077':"Marquette",
		 '55078':"Menominee",
		 '55079':"Milwaukee",
		 '55081':"Monroe",
		 '55083':"Oconto",
		 '55085':"Oneida",
		 '55087':"Outagamie",
		 '55089':"Ozaukee",
		 '55091':"Pepin",
		 '55093':"Pierce",
		 '55095':"Polk",
		 '55097':"Portage",
		 '55099':"Price",
		 '55101':"Racine",
		 '55103':"Richland",
		 '55105':"Rock",
		 '55107':"Rusk",
		 '55109':"St Croix",                   
		 '55111':"Sauk",
		 '55113':"Sawyer",
		 '55115':"Shawano",
		 '55117':"Sheboygan",
		 '55119':"Taylor",
		 '55121':"Trempealeau",
		 '55123':"Vernon",
		 '55125':"Vilas",
		 '55127':"Walworth",
		 '55129':"Washburn",
		 '55131':"Washington",
		 '55133':"Waukesha",
		 '55135':"Waupaca",
		 '55137':"Waushara",
		 '55139':"Winnebago",
		 '55141':"Wood",
		 '56001':"Albany",
		 '56003':"Big Horn",
		 '56005':"Campbell",
		 '56007':"Carbon",
		 '56009':"Converse",
		 '56011':"Crook",
		 '56013':"Fremont",
		 '56015':"Goshen",
		 '56017':"Hot Springs",
		 '56019':"Johnson",
		 '56021':"Laramie",
		 '56023':"Lincoln",
		 '56025':"Natrona",
		 '56027':"Niobrara",
		 '56029':"Park",
		 '56031':"Platte",
		 '56033':"Sheridan",
		 '56035':"Sublette",
		 '56037':"Sweetwater",
		 '56039':"Teton",
		 '56041':"Uinta",
		 '56043':"Washakie",
		 '56045':"Weston"
	}, 
		 
	default_regions:{
		'MS':{
			name:"Mississippi",  
			states:["28001", "28003", "28005", "28007", "28009", "28011", "28013", "28015", "28017", "28019", "28021", "28023", "28025", "28027", "28029", "28031", "28033", "28035", "28037", "28039", "28041", "28043", "28045", "28047", "28049", "28051", "28053", "28055", "28057", "28059", "28061", "28063", "28065", "28067", "28069", "28071", "28073", "28075", "28077", "28079", "28081", "28083", "28085", "28087", "28089", "28091", "28093", "28095", "28097", "28099", "28101", "28103", "28105", "28107", "28109", "28111", "28113", "28115", "28117", "28119", "28121", "28123", "28125", "28127", "28129", "28131", "28133", "28135", "28137", "28139", "28141", "28143", "28145", "28147", "28149", "28151", "28153", "28155", "28157", "28159", "28161", "28163"],
			fips:"28"
		},
		 'OK':{
			name:"Oklahoma", 
			states:["40001", "40003", "40005", "40007", "40009", "40011", "40013", "40015", "40017", "40019", "40021", "40023", "40025", "40027", "40029", "40031", "40033", "40035", "40037", "40039", "40041", "40043", "40045", "40047", "40049", "40051", "40053", "40055", "40057", "40059", "40061", "40063", "40065", "40067", "40069", "40071", "40073", "40075", "40077", "40079", "40081", "40083", "40085", "40087", "40089", "40091", "40093", "40095", "40097", "40099", "40101", "40103", "40105", "40107", "40109", "40111", "40113", "40115", "40117", "40119", "40121", "40123", "40125", "40127", "40129", "40131", "40133", "40135", "40137", "40139", "40141", "40143", "40145", "40147", "40149", "40151", "40153"],
			fips:"40"
		 },
		 'DE':{
			name:"Delaware", 
			states:["10001", "10003", "10005"],
			fips:"10"
		},
		'MN':{
			name:"Minnesota", 
			states:["27001", "27003", "27005", "27007", "27009", "27011", "27013", "27015", "27017", "27019", "27021", "27023", "27025", "27027", "27029", "27031", "27033", "27035", "27037", "27039", "27041", "27043", "27045", "27047", "27049", "27051", "27053", "27055", "27057", "27059", "27061", "27063", "27065", "27067", "27069", "27071", "27073", "27075", "27077", "27079", "27081", "27083", "27085", "27087", "27089", "27091", "27093", "27095", "27097", "27099", "27101", "27103", "27105", "27107", "27109", "27111", "27113", "27115", "27117", "27119", "27121", "27123", "27125", "27127", "27129", "27131", "27133", "27135", "27137", "27139", "27141", "27143", "27145", "27147", "27149", "27151", "27153", "27155", "27157", "27159", "27161", "27163", "27165", "27167", "27169", "27171", "27173"],
			fips:"27"
		},
		'IL':{
			name:"Illinois", 
			states:["17001", "17003", "17005", "17007", "17009", "17011", "17013", "17015", "17017", "17019", "17021", "17023", "17025", "17027", "17029", "17031", "17033", "17035", "17037", "17039", "17041", "17043", "17045", "17047", "17049", "17051", "17053", "17055", "17057", "17059", "17061", "17063", "17065", "17067", "17069", "17071", "17073", "17075", "17077", "17079", "17081", "17083", "17085", "17087", "17089", "17091", "17093", "17095", "17097", "17099", "17101", "17103", "17105", "17107", "17109", "17111", "17113", "17115", "17117", "17119", "17121", "17123", "17125", "17127", "17129", "17131", "17133", "17135", "17137", "17139", "17141", "17143", "17145", "17147", "17149", "17151", "17153", "17155", "17157", "17159", "17161", "17163", "17165", "17167", "17169", "17171", "17173", "17175", "17177", "17179", "17181", "17183", "17185", "17187", "17189", "17191", "17193", "17195", "17197", "17199", "17201", "17203"],
			fips:"17"
		},
		'AR':{
			name:"Arkansas", 
			states:["05001", "05003", "05005", "05007", "05009", "05011", "05013", "05015", "05017", "05019", "05021", "05023", "05025", "05027", "05029", "05031", "05033", "05035", "05037", "05039", "05041", "05043", "05045", "05047", "05049", "05051", "05053", "05055", "05057", "05059", "05061", "05063", "05065", "05067", "05069", "05071", "05073", "05075", "05077", "05079", "05081", "05083", "05085", "05087", "05089", "05091", "05093", "05095", "05097", "05099", "05101", "05103", "05105", "05107", "05109", "05111", "05113", "05115", "05117", "05119", "05121", "05123", "05125", "05127", "05129", "05131", "05133", "05135", "05137", "05139", "05141", "05143", "05145", "05147", "05149"],
			fips:"05"
		},
		'NM':{
			name:"New Mexico", 
			states:["35001", "35003", "35005", "35006", "35007", "35009", "35011", "35013", "35015", "35017", "35019", "35021", "35023", "35025", "35027", "35028", "35029", "35031", "35033", "35035", "35037", "35039", "35041", "35043", "35045", "35047", "35049", "35051", "35053", "35055", "35057", "35059", "35061"],
			fips:"35"
		},
		'IN':{
			name:"Indiana", 
			states:["18001", "18003", "18005", "18007", "18009", "18011", "18013", "18015", "18017", "18019", "18021", "18023", "18025", "18027", "18029", "18031", "18033", "18035", "18037", "18039", "18041", "18043", "18045", "18047", "18049", "18051", "18053", "18055", "18057", "18059", "18061", "18063", "18065", "18067", "18069", "18071", "18073", "18075", "18077", "18079", "18081", "18083", "18085", "18087", "18089", "18091", "18093", "18095", "18097", "18099", "18101", "18103", "18105", "18107", "18109", "18111", "18113", "18115", "18117", "18119", "18121", "18123", "18125", "18127", "18129", "18131", "18133", "18135", "18137", "18139", "18141", "18143", "18145", "18147", "18149", "18151", "18153", "18155", "18157", "18159", "18161", "18163", "18165", "18167", "18169", "18171", "18173", "18175", "18177", "18179", "18181", "18183"],
			fips:"18"
		},
		'LO':{
			name:"Louisiana", 
			states:["22001", "22003", "22005", "22007", "22009", "22011", "22013", "22015", "22017", "22019", "22021", "22023", "22025", "22027", "22029", "22031", "22033", "22035", "22037", "22039", "22041", "22043", "22045", "22047", "22049", "22051", "22053", "22055", "22057", "22059", "22061", "22063", "22065", "22067", "22069", "22071", "22073", "22075", "22077", "22079", "22081", "22083", "22085", "22087", "22089", "22091", "22093", "22095", "22097", "22099", "22101", "22103", "22105", "22107", "22109", "22111", "22113", "22115", "22117", "22119", "22121", "22123", "22125", "22127"],
			fips:"22"
		},
		'TX':{
			name:"Texas", 
			states:["48001", "48003", "48005", "48007", "48009", "48011", "48013", "48015", "48017", "48019", "48021", "48023", "48025", "48027", "48029", "48031", "48033", "48035", "48037", "48039", "48041", "48043", "48045", "48047", "48049", "48051", "48053", "48055", "48057", "48059", "48061", "48063", "48065", "48067", "48069", "48071", "48073", "48075", "48077", "48079", "48081", "48083", "48085", "48087", "48089", "48091", "48093", "48095", "48097", "48099", "48101", "48103", "48105", "48107", "48109", "48111", "48113", "48115", "48117", "48119", "48121", "48123", "48125", "48127", "48129", "48131", "48133", "48135", "48137", "48139", "48141", "48143", "48145", "48147", "48149", "48151", "48153", "48155", "48157", "48159", "48161", "48163", "48165", "48167", "48169", "48171", "48173", "48175", "48177", "48179", "48181", "48183", "48185", "48187", "48189", "48191", "48193", "48195", "48197", "48199", "48201", "48203", "48205", "48207", "48209", "48211", "48213", "48215", "48217", "48219", "48221", "48223", "48225", "48227", "48229", "48231", "48233", "48235", "48237", "48239", "48241", "48243", "48245", "48247", "48249", "48251", "48253", "48255", "48257", "48259", "48261", "48263", "48265", "48267", "48269", "48271", "48273", "48275", "48277", "48279", "48281", "48283", "48285", "48287", "48289", "48291", "48293", "48295", "48297", "48299", "48301", "48303", "48305", "48307", "48309", "48311", "48313", "48315", "48317", "48319", "48321", "48323", "48325", "48327", "48329", "48331", "48333", "48335", "48337", "48339", "48341", "48343", "48345", "48347", "48349", "48351", "48353", "48355", "48357", "48359", "48361", "48363", "48365", "48367", "48369", "48371", "48373", "48375", "48377", "48379", "48381", "48383", "48385", "48387", "48389", "48391", "48393", "48395", "48397", "48399", "48401", "48403", "48405", "48407", "48409", "48411", "48413", "48415", "48417", "48419", "48421", "48423", "48425", "48427", "48429", "48431", "48433", "48435", "48437", "48439", "48441", "48443", "48445", "48447", "48449", "48451", "48453", "48455", "48457", "48459", "48461", "48463", "48465", "48467", "48469", "48471", "48473", "48475", "48477", "48479", "48481", "48483", "48485", "48487", "48489", "48491", "48493", "48495", "48497", "48499", "48501", "48503", "48505", "48507"],
			fips:"48"
		},
		'WI':{
			name:"Wisconsin", 
			states:["55001", "55003", "55005", "55007", "55009", "55011", "55013", "55015", "55017", "55019", "55021", "55023", "55025", "55027", "55029", "55031", "55033", "55035", "55037", "55039", "55041", "55043", "55045", "55047", "55049", "55051", "55053", "55055", "55057", "55059", "55061", "55063", "55065", "55067", "55069", "55071", "55073", "55075", "55077", "55078", "55079", "55081", "55083", "55085", "55087", "55089", "55091", "55093", "55095", "55097", "55099", "55101", "55103", "55105", "55107", "55109", "55111", "55113", "55115", "55117", "55119", "55121", "55123", "55125", "55127", "55129", "55131", "55133", "55135", "55137", "55139", "55141"],
			fips:"55"
		},
		'KS':{
			name:"Kansas", 
			states:["20001", "20003", "20005", "20007", "20009", "20011", "20013", "20015", "20017", "20019", "20021", "20023", "20025", "20027", "20029", "20031", "20033", "20035", "20037", "20039", "20041", "20043", "20045", "20047", "20049", "20051", "20053", "20055", "20057", "20059", "20061", "20063", "20065", "20067", "20069", "20071", "20073", "20075", "20077", "20079", "20081", "20083", "20085", "20087", "20089", "20091", "20093", "20095", "20097", "20099", "20101", "20103", "20105", "20107", "20109", "20111", "20113", "20115", "20117", "20119", "20121", "20123", "20125", "20127", "20129", "20131", "20133", "20135", "20137", "20139", "20141", "20143", "20145", "20147", "20149", "20151", "20153", "20155", "20157", "20159", "20161", "20163", "20165", "20167", "20169", "20171", "20173", "20175", "20177", "20179", "20181", "20183", "20185", "20187", "20189", "20191", "20193", "20195", "20197", "20199", "20201", "20203", "20205", "20207", "20209"],
			fips:"20"
		},
			
		'CT':{
			name:"Connecticut",
			states:["09001", "09003", "09005", "09007", "09009", "09011", "09013", "09015"],
			fips:"09"
		},
		'CA':{
			name:"California",
			states:["06001", "06003", "06005", "06007", "06009", "06011", "06013", "06015", "06017", "06019", "06021", "06023", "06025", "06027", "06029", "06031", "06033", "06035", "06037", "06039", "06041", "06043", "06045", "06047", "06049", "06051", "06053", "06055", "06057", "06059", "06061", "06063", "06065", "06067", "06069", "06071", "06073", "06075", "06077", "06079", "06081", "06083", "06085", "06087", "06089", "06091", "06093", "06095", "06097", "06099", "06101", "06103", "06105", "06107", "06109", "06111", "06113", "06115"],
			fips:"06"
		},
		'WV':{
			name:"West Virginia",
			states:["54001", "54003", "54005", "54007", "54009", "54011", "54013", "54015", "54017", "54019", "54021", "54023", "54025", "54027", "54029", "54031", "54033", "54035", "54037", "54039", "54041", "54043", "54045", "54047", "54049", "54051", "54053", "54055", "54057", "54059", "54061", "54063", "54065", "54067", "54069", "54071", "54073", "54075", "54077", "54079", "54081", "54083", "54085", "54087", "54089", "54091", "54093", "54095", "54097", "54099", "54101", "54103", "54105", "54107", "54109"],
			fips:"54"
		},
		'GA':{
			name:"Georgia",
			states:["13001", "13003", "13005", "13007", "13009", "13011", "13013", "13015", "13017", "13019", "13021", "13023", "13025", "13027", "13029", "13031", "13033", "13035", "13037", "13039", "13043", "13045", "13047", "13049", "13051", "13053", "13055", "13057", "13059", "13061", "13063", "13065", "13067", "13069", "13071", "13073", "13075", "13077", "13079", "13081", "13083", "13085", "13087", "13089", "13091", "13093", "13095", "13097", "13099", "13101", "13103", "13105", "13107", "13109", "13111", "13113", "13115", "13117", "13119", "13121", "13123", "13125", "13127", "13129", "13131", "13133", "13135", "13137", "13139", "13141", "13143", "13145", "13147", "13149", "13151", "13153", "13155", "13157", "13159", "13161", "13163", "13165", "13167", "13169", "13171", "13173", "13175", "13177", "13179", "13181", "13183", "13185", "13187", "13189", "13191", "13193", "13195", "13197", "13199", "13201", "13205", "13207", "13209", "13211", "13213", "13215", "13217", "13219", "13221", "13223", "13225", "13227", "13229", "13231", "13233", "13235", "13237", "13239", "13241", "13243", "13245", "13247", "13249", "13251", "13253", "13255", "13257", "13259", "13261", "13263", "13265", "13267", "13269", "13271", "13273", "13275", "13277", "13279", "13281", "13283", "13285", "13287", "13289", "13291", "13293", "13295", "13297", "13299", "13301", "13303", "13305", "13307", "13309", "13311", "13313", "13315", "13317", "13319", "13321"],
			fips:"13"
		},
		'ND':{
			name:"North Dakota",
			states:["38001", "38003", "38005", "38007", "38009", "38011", "38013", "38015", "38017", "38019", "38021", "38023", "38025", "38027", "38029", "38031", "38033", "38035", "38037", "38039", "38041", "38043", "38045", "38047", "38049", "38051", "38053", "38055", "38057", "38059", "38061", "38063", "38065", "38067", "38069", "38071", "38073", "38075", "38077", "38079", "38081", "38083", "38085", "38087", "38089", "38091", "38093", "38095", "38097", "38099", "38101", "38103", "38105"],
			fips:"38"
		},
		'PA':{
			name:"Pennsylvania",
			states:["42001", "42003", "42005", "42007", "42009", "42011", "42013", "42015", "42017", "42019", "42021", "42023", "42025", "42027", "42029", "42031", "42033", "42035", "42037", "42039", "42041", "42043", "42045", "42047", "42049", "42051", "42053", "42055", "42057", "42059", "42061", "42063", "42065", "42067", "42069", "42071", "42073", "42075", "42077", "42079", "42081", "42083", "42085", "42087", "42089", "42091", "42093", "42095", "42097", "42099", "42101", "42103", "42105", "42107", "42109", "42111", "42113", "42115", "42117", "42119", "42121", "42123", "42125", "42127", "42129", "42131", "42133"],
			fips:"42"
		},
		'AK':{
			name:"Alaska",
			states:["02013", "02016", "02020", "02050", "02060", "02068", "02070", "02090", "02100", "02110", "02122", "02130", "02150", "02164", "02170", "02180", "02185", "02188", "02201", "02220", "02232", "02240", "02261", "02270", "02280", "02282", "02290"],
			fips:"02"
		},
		'MO':{
			name:"Missouri",
			states:["29001", "29003", "29005", "29007", "29009", "29011", "29013", "29015", "29017", "29019", "29021", "29023", "29025", "29027", "29029", "29031", "29033", "29035", "29037", "29039", "29041", "29043", "29045", "29047", "29049", "29051", "29053", "29055", "29057", "29059", "29061", "29063", "29065", "29067", "29069", "29071", "29073", "29075", "29077", "29079", "29081", "29083", "29085", "29087", "29089", "29091", "29093", "29095", "29097", "29099", "29101", "29103", "29105", "29107", "29109", "29111", "29113", "29115", "29117", "29119", "29121", "29123", "29125", "29127", "29129", "29131", "29133", "29135", "29137", "29139", "29141", "29143", "29145", "29147", "29149", "29151", "29153", "29155", "29157", "29159", "29161", "29163", "29165", "29167", "29169", "29171", "29173", "29175", "29177", "29179", "29181", "29183", "29185", "29186", "29187", "29189", "29195", "29197", "29199", "29201", "29203", "29205", "29207", "29209", "29211", "29213", "29215", "29217", "29219", "29221", "29223", "29225", "29227", "29229", "29510"],
			fips:"29"
		},
		'SD':{
			name:"South Dakota",
			states:["46003", "46005", "46007", "46009", "46011", "46013", "46015", "46017", "46019", "46021", "46023", "46025", "46027", "46029", "46031", "46033", "46035", "46037", "46039", "46041", "46043", "46045", "46047", "46049", "46051", "46053", "46055", "46057", "46059", "46061", "46063", "46065", "46067", "46069", "46071", "46073", "46075", "46077", "46079", "46081", "46083", "46085", "46087", "46089", "46091", "46093", "46095", "46097", "46099", "46101", "46103", "46105", "46107", "46109", "46111", "46113", "46115", "46117", "46119", "46121", "46123", "46125", "46127", "46129", "46135", "46137"],
			fips:"46"
		},
		'CO':{
			name:"Colorado",
			states:["08001", "08003", "08005", "08007", "08009", "08011", "08013", "08014", "08015", "08017", "08019", "08021", "08023", "08025", "08027", "08029", "08031", "08033", "08035", "08037", "08039", "08041", "08043", "08045", "08047", "08049", "08051", "08053", "08055", "08057", "08059", "08061", "08063", "08065", "08067", "08069", "08071", "08073", "08075", "08077", "08079", "08081", "08083", "08085", "08087", "08089", "08091", "08093", "08095", "08097", "08099", "08101", "08103", "08105", "08107", "08109", "08111", "08113", "08115", "08117", "08119", "08121", "08123", "08125"],
			fips:"08"
		},
		'NJ':{
			name:"New Jersey",
			states:["34001", "34003", "34005", "34007", "34009", "34011", "34013", "34015", "34017", "34019", "34021", "34023", "34025", "34027", "34029", "34031", "34033", "34035", "34037", "34039", "34041"],
			fips:"34"
		},
		'WA':{
			name:"Washington",
			states:["53001", "53003", "53005", "53007", "53009", "53011", "53013", "53015", "53017", "53019", "53021", "53023", "53025", "53027", "53029", "53031", "53033", "53035", "53037", "53039", "53041", "53043", "53045", "53047", "53049", "53051", "53053", "53055", "53057", "53059", "53061", "53063", "53065", "53067", "53069", "53071", "53073", "53075", "53077"],
			fips:"53"
		},
		'NY':{
			name:"New York",
			states:["36001", "36003", "36005", "36007", "36009", "36011", "36013", "36015", "36017", "36019", "36021", "36023", "36025", "36027", "36029", "36031", "36033", "36035", "36037", "36039", "36041", "36043", "36045", "36047", "36049", "36051", "36053", "36055", "36057", "36059", "36061", "36063", "36065", "36067", "36069", "36071", "36073", "36075", "36077", "36079", "36081", "36083", "36085", "36087", "36089", "36091", "36093", "36095", "36097", "36099", "36101", "36103", "36105", "36107", "36109", "36111", "36113", "36115", "36117", "36119", "36121", "36123"],
			fips:"36"
		},
		'NV':{
			name:"Nevada",
			states:["32001", "32003", "32005", "32007", "32009", "32011", "32013", "32015", "32017", "32019", "32021", "32023", "32027", "32029", "32031", "32033", "32510"],
			fips:"32"
		},
		'DC':{
			name:"District Of Columbia",
			states:["11001"],
			fips:"11"
		},
		'MD':{
			name:"Maryland",
			states:["24001", "24003", "24005", "24009", "24011", "24013", "24015", "24017", "24019", "24021", "24023", "24025", "24027", "24029", "24031", "24033", "24035", "24037", "24039", "24041", "24043", "24045", "24047", "24510"],
			fips:"24"
		},
		'ID':{
			name:"Idaho",
			states:["16001", "16003", "16005", "16007", "16009", "16011", "16013", "16015", "16017", "16019", "16021", "16023", "16025", "16027", "16029", "16031", "16033", "16035", "16037", "16039", "16041", "16043", "16045", "16047", "16049", "16051", "16053", "16055", "16057", "16059", "16061", "16063", "16065", "16067", "16069", "16071", "16073", "16075", "16077", "16079", "16081", "16083", "16085", "16087"],
			fips:"16"
		},
		'WY':{
			name:"Wyoming",
			states:["56001", "56003", "56005", "56007", "56009", "56011", "56013", "56015", "56017", "56019", "56021", "56023", "56025", "56027", "56029", "56031", "56033", "56035", "56037", "56039", "56041", "56043", "56045"],
			fips:"56"
		},
		'AZ':{
			name:"Arizona",
			states:["04001", "04003", "04005", "04007", "04009", "04011", "04012", "04013", "04015", "04017", "04019", "04021", "04023", "04025", "04027"],
			fips:"04"
		},
		'IA':{
			name:"Iowa",
			states:["19001", "19003", "19005", "19007", "19009", "19011", "19013", "19015", "19017", "19019", "19021", "19023", "19025", "19027", "19029", "19031", "19033", "19035", "19037", "19039", "19041", "19043", "19045", "19047", "19049", "19051", "19053", "19055", "19057", "19059", "19061", "19063", "19065", "19067", "19069", "19071", "19073", "19075", "19077", "19079", "19081", "19083", "19085", "19087", "19089", "19091", "19093", "19095", "19097", "19099", "19101", "19103", "19105", "19107", "19109", "19111", "19113", "19115", "19117", "19119", "19121", "19123", "19125", "19127", "19129", "19131", "19133", "19135", "19137", "19139", "19141", "19143", "19145", "19147", "19149", "19151", "19153", "19155", "19157", "19159", "19161", "19163", "19165", "19167", "19169", "19171", "19173", "19175", "19177", "19179", "19181", "19183", "19185", "19187", "19189", "19191", "19193", "19195", "19197"],
			fips:"19"
		},
		'MI':{
			name:"Michigan",
			states:["26001", "26003", "26005", "26007", "26009", "26011", "26013", "26015", "26017", "26019", "26021", "26023", "26025", "26027", "26029", "26031", "26033", "26035", "26037", "26039", "26041", "26043", "26045", "26047", "26049", "26051", "26053", "26055", "26057", "26059", "26061", "26063", "26065", "26067", "26069", "26071", "26073", "26075", "26077", "26079", "26081", "26083", "26085", "26087", "26089", "26091", "26093", "26095", "26097", "26099", "26101", "26103", "26105", "26107", "26109", "26111", "26113", "26115", "26117", "26119", "26121", "26123", "26125", "26127", "26129", "26131", "26133", "26135", "26137", "26139", "26141", "26143", "26145", "26147", "26149", "26151", "26153", "26155", "26157", "26159", "26161", "26163", "26165"],
			fips:"26"
		},
		'UT':{
			name:"Utah",
			states:["49001", "49003", "49005", "49007", "49009", "49011", "49013", "49015", "49017", "49019", "49021", "49023", "49025", "49027", "49029", "49031", "49033", "49035", "49037", "49039", "49041", "49043", "49045", "49047", "49049", "49051", "49053", "49055", "49057"],
			fips:"49"
		},
		'VA':{
			name:"Virginia",
			states:["51001", "51003", "51005", "51007", "51009", "51011", "51013", "51015", "51017", "51019", "51021", "51023", "51025", "51027", "51029", "51031", "51033", "51035", "51036", "51037", "51041", "51043", "51045", "51047", "51049", "51051", "51053", "51057", "51059", "51061", "51063", "51065", "51067", "51069", "51071", "51073", "51075", "51077", "51079", "51081", "51083", "51085", "51087", "51089", "51091", "51093", "51095", "51097", "51099", "51101", "51103", "51105", "51107", "51109", "51111", "51113", "51115", "51117", "51119", "51121", "51125", "51127", "51131", "51133", "51135", "51137", "51139", "51141", "51143", "51145", "51147", "51149", "51153", "51155", "51157", "51159", "51161", "51163", "51165", "51167", "51169", "51171", "51173", "51175", "51177", "51179", "51181", "51183", "51185", "51187", "51191", "51193", "51195", "51197", "51199", "51510", "51515", "51520", "51530", "51540", "51550", "51570", "51580", "51590", "51595", "51600", "51610", "51620", "51630", "51640", "51650", "51660", "51670", "51678", "51680", "51683", "51685", "51690", "51700", "51710", "51720", "51730", "51735", "51740", "51750", "51760", "51770", "51775", "51790", "51800", "51810", "51820", "51830", "51840"],
			fips:"51"
		},
		'OR':{
			name:"Oregon",
			states:["41001", "41003", "41005", "41007", "41009", "41011", "41013", "41015", "41017", "41019", "41021", "41023", "41025", "41027", "41029", "41031", "41033", "41035", "41037", "41039", "41041", "41043", "41045", "41047", "41049", "41051", "41053", "41055", "41057", "41059", "41061", "41063", "41065", "41067", "41069", "41071"],
			fips:"41"
		},
		'MT':{
			name:"Montana",
			states:["30001", "30003", "30005", "30007", "30009", "30011", "30013", "30015", "30017", "30019", "30021", "30023", "30025", "30027", "30029", "30031", "30033", "30035", "30037", "30039", "30041", "30043", "30045", "30047", "30049", "30051", "30053", "30055", "30057", "30059", "30061", "30063", "30065", "30067", "30069", "30071", "30073", "30075", "30077", "30079", "30081", "30083", "30085", "30087", "30089", "30091", "30093", "30095", "30097", "30099", "30101", "30103", "30105", "30107", "30109", "30111"],
			fips:"30"
		},
		'NH':{
			name:"New Hampshire",
			states:["33001", "33003", "33005", "33007", "33009", "33011", "33013", "33015", "33017", "33019"],
			fips:"33"
		},
		'MA':{
			name:"Massachusetts",
			states:["25001", "25003", "25005", "25007", "25009", "25011", "25013", "25015", "25017", "25019", "25021", "25023", "25025", "25027"],
			fips:"25"
		},
		'SC':{
			name:"South Carolina",
			states:["45001", "45003", "45005", "45007", "45009", "45011", "45013", "45015", "45017", "45019", "45021", "45023", "45025", "45027", "45029", "45031", "45033", "45035", "45037", "45039", "45041", "45043", "45045", "45047", "45049", "45051", "45053", "45055", "45057", "45059", "45061", "45063", "45065", "45067", "45069", "45071", "45073", "45075", "45077", "45079", "45081", "45083", "45085", "45087", "45089", "45091"],
			fips:"45"
		},
		'VT':{
			name:"Vermont",
			states:["50001", "50003", "50005", "50007", "50009", "50011", "50013", "50015", "50017", "50019", "50021", "50023", "50025", "50027"],
			fips:"50"
		},
		'FL':{
			name:"Florida",
			states:["12001", "12003", "12005", "12007", "12009", "12011", "12013", "12015", "12017", "12019", "12021", "12023", "12027", "12029", "12031", "12033", "12035", "12037", "12039", "12041", "12043", "12045", "12047", "12049", "12051", "12053", "12055", "12057", "12059", "12061", "12063", "12065", "12067", "12069", "12071", "12073", "12075", "12077", "12079", "12081", "12083", "12085", "12086", "12087", "12089", "12091", "12093", "12095", "12097", "12099", "12101", "12103", "12105", "12107", "12109", "12111", "12113", "12115", "12117", "12119", "12121", "12123", "12125", "12127", "12129", "12131", "12133"],
			fips:"12"
		},
		'HI':{
			name:"Hawaii",
			states:["15001", "15003", "15007", "15009"],
			fips:"15"
		},
		'KY':{
			name:"Kentucky",
			states:["21001", "21003", "21005", "21007", "21009", "21011", "21013", "21015", "21017", "21019", "21021", "21023", "21025", "21027", "21029", "21031", "21033", "21035", "21037", "21039", "21041", "21043", "21045", "21047", "21049", "21051", "21053", "21055", "21057", "21059", "21061", "21063", "21065", "21067", "21069", "21071", "21073", "21075", "21077", "21079", "21081", "21083", "21085", "21087", "21089", "21091", "21093", "21095", "21097", "21099", "21101", "21103", "21105", "21107", "21109", "21111", "21113", "21115", "21117", "21119", "21121", "21123", "21125", "21127", "21129", "21131", "21133", "21135", "21137", "21139", "21141", "21143", "21145", "21147", "21149", "21151", "21153", "21155", "21157", "21159", "21161", "21163", "21165", "21167", "21169", "21171", "21173", "21175", "21177", "21179", "21181", "21183", "21185", "21187", "21189", "21191", "21193", "21195", "21197", "21199", "21201", "21203", "21205", "21207", "21209", "21211", "21213", "21215", "21217", "21219", "21221", "21223", "21225", "21227", "21229", "21231", "21233", "21235", "21237", "21239"],
			fips:"21"
		},
		'RI':{
			name:"Rhode Island",
			states:["44001", "44003", "44005", "44007", "44009"],
			fips:"44"
		},
		'NE':{
			name:"Nebraska",
			states:["31001", "31003", "31005", "31007", "31009", "31011", "31013", "31015", "31017", "31019", "31021", "31023", "31025", "31027", "31029", "31031", "31033", "31035", "31037", "31039", "31041", "31043", "31045", "31047", "31049", "31051", "31053", "31055", "31057", "31059", "31061", "31063", "31065", "31067", "31069", "31071", "31073", "31075", "31077", "31079", "31081", "31083", "31085", "31087", "31089", "31091", "31093", "31095", "31097", "31099", "31101", "31103", "31105", "31107", "31109", "31111", "31113", "31115", "31117", "31119", "31121", "31123", "31125", "31127", "31129", "31131", "31133", "31135", "31137", "31139", "31141", "31143", "31145", "31147", "31149", "31151", "31153", "31155", "31157", "31159", "31161", "31163", "31165", "31167", "31169", "31171", "31173", "31175", "31177", "31179", "31181", "31183", "31185"],
			fips:"31"
		},
		'OH':{
			name:"Ohio",
			states:["39001", "39003", "39005", "39007", "39009", "39011", "39013", "39015", "39017", "39019", "39021", "39023", "39025", "39027", "39029", "39031", "39033", "39035", "39037", "39039", "39041", "39043", "39045", "39047", "39049", "39051", "39053", "39055", "39057", "39059", "39061", "39063", "39065", "39067", "39069", "39071", "39073", "39075", "39077", "39079", "39081", "39083", "39085", "39087", "39089", "39091", "39093", "39095", "39097", "39099", "39101", "39103", "39105", "39107", "39109", "39111", "39113", "39115", "39117", "39119", "39121", "39123", "39125", "39127", "39129", "39131", "39133", "39135", "39137", "39139", "39141", "39143", "39145", "39147", "39149", "39151", "39153", "39155", "39157", "39159", "39161", "39163", "39165", "39167", "39169", "39171", "39173", "39175"],
			fips:"39"
		},
		'AL':{
			name:"Alabama",
			states:["01001", "01003", "01005", "01007", "01009", "01011", "01013", "01015", "01017", "01019", "01021", "01023", "01025", "01027", "01029", "01031", "01033", "01035", "01037", "01039", "01041", "01043", "01045", "01047", "01049", "01051", "01053", "01055", "01057", "01059", "01061", "01063", "01065", "01067", "01069", "01071", "01073", "01075", "01077", "01079", "01081", "01083", "01085", "01087", "01089", "01091", "01093", "01095", "01097", "01099", "01101", "01103", "01105", "01107", "01109", "01111", "01113", "01115", "01117", "01119", "01121", "01123", "01125", "01127", "01129", "01131", "01133"],
			fips:"01"
		},
		'NC':{
			name:"North Carolina",
			states:["37001", "37003", "37005", "37007", "37009", "37011", "37013", "37015", "37017", "37019", "37021", "37023", "37025", "37027", "37029", "37031", "37033", "37035", "37037", "37039", "37041", "37043", "37045", "37047", "37049", "37051", "37053", "37055", "37057", "37059", "37061", "37063", "37065", "37067", "37069", "37071", "37073", "37075", "37077", "37079", "37081", "37083", "37085", "37087", "37089", "37091", "37093", "37095", "37097", "37099", "37101", "37103", "37105", "37107", "37109", "37111", "37113", "37115", "37117", "37119", "37121", "37123", "37125", "37127", "37129", "37131", "37133", "37135", "37137", "37139", "37141", "37143", "37145", "37147", "37149", "37151", "37153", "37155", "37157", "37159", "37161", "37163", "37165", "37167", "37169", "37171", "37173", "37175", "37177", "37179", "37181", "37183", "37185", "37187", "37189", "37191", "37193", "37195", "37197", "37199"],
			fips:"37"
		},
		'TN':{
			name:"Tennessee",
			states:["47001", "47003", "47005", "47007", "47009", "47011", "47013", "47015", "47017", "47019", "47021", "47023", "47025", "47027", "47029", "47031", "47033", "47035", "47037", "47039", "47041", "47043", "47045", "47047", "47049", "47051", "47053", "47055", "47057", "47059", "47061", "47063", "47065", "47067", "47069", "47071", "47073", "47075", "47077", "47079", "47081", "47083", "47085", "47087", "47089", "47091", "47093", "47095", "47097", "47099", "47101", "47103", "47105", "47107", "47109", "47111", "47113", "47115", "47117", "47119", "47121", "47123", "47125", "47127", "47129", "47131", "47133", "47135", "47137", "47139", "47141", "47143", "47145", "47147", "47149", "47151", "47153", "47155", "47157", "47159", "47161", "47163", "47165", "47167", "47169", "47171", "47173", "47175", "47177", "47179", "47181", "47183", "47185", "47187", "47189"],
			fips:"47"
		},
		'ME':{
			name:"Maine",
			states:["23001", "23003", "23005", "23007", "23009", "23011", "23013", "23015", "23017", "23019", "23021", "23023", "23025", "23027", "23029", "23031"],
			fips:"23"
		}
	}

};
 