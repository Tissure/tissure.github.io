var xn = Object.defineProperty;
var wr = e => { throw TypeError(e) };
var Tn = (e, t, r) => t in e ? xn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Bt = (e, t, r) => Tn(e, typeof t != "symbol" ? t + "" : t, r),
    Ht = (e, t, r) => t.has(e) || wr("Cannot " + r);
var xe = (e, t, r) => (Ht(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
    Xe = (e, t, r) => t.has(e) ? wr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r),
    Yt = (e, t, r, n) => (Ht(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
    br = (e, t, r) => (Ht(e, t, "access private method"), r);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
    new MutationObserver(a => {
        for (const i of a)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }).observe(document, { childList: !0, subtree: !0 });

    function r(a) { const i = {}; return a.integrity && (i.integrity = a.integrity), a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i }

    function n(a) {
        if (a.ep) return;
        a.ep = !0;
        const i = r(a);
        fetch(a.href, i)
    }
})();
const kr = !1;
var ir = Array.isArray,
    En = Array.prototype.indexOf,
    or = Array.from,
    Sn = Object.defineProperty,
    Ue = Object.getOwnPropertyDescriptor,
    An = Object.getOwnPropertyDescriptors,
    Cn = Object.prototype,
    Dn = Array.prototype,
    Rr = Object.getPrototypeOf,
    xr = Object.isExtensible;
const Fr = () => { };

function qn(e) { for (var t = 0; t < e.length; t++) e[t]() }
const fe = 2,
    jr = 4,
    Tt = 8,
    sr = 16,
    Ae = 32,
    Ge = 64,
    lt = 128,
    ne = 256,
    dt = 512,
    $ = 1024,
    me = 2048,
    He = 4096,
    Te = 8192,
    Et = 16384,
    In = 32768,
    St = 65536,
    Pn = 1 << 19,
    Br = 1 << 20,
    Xt = 1 << 21,
    Qe = Symbol("$state"),
    Mn = Symbol("legacy props"),
    Ln = Symbol("");

function Hr(e) { return e === this.v }

function Nn(e, t) { return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function" }

function cr(e) { return !Nn(e, this.v) }

function zn(e) { throw new Error("https://svelte.dev/e/effect_in_teardown") }

function On() { throw new Error("https://svelte.dev/e/effect_in_unowned_derived") }

function Rn(e) { throw new Error("https://svelte.dev/e/effect_orphan") }

function Fn() { throw new Error("https://svelte.dev/e/effect_update_depth_exceeded") }

function jn(e) { throw new Error("https://svelte.dev/e/props_invalid_value") }

function Bn() { throw new Error("https://svelte.dev/e/state_descriptors_fixed") }

function Hn() { throw new Error("https://svelte.dev/e/state_prototype_fixed") }

function Yn() { throw new Error("https://svelte.dev/e/state_unsafe_mutation") }
let Un = !1;
const lr = 1,
    dr = 2,
    Yr = 4,
    Wn = 8,
    Vn = 16,
    Gn = 1,
    Jn = 4,
    Kn = 8,
    Xn = 16,
    Zn = 1,
    Qn = 2,
    Q = Symbol(),
    $n = "http://www.w3.org/1999/xhtml";
let ae = null;

function Tr(e) { ae = e }

function At(e, t = !1, r) {
    var n = ae = { p: ae, c: null, d: !1, e: null, m: !1, s: e, x: null, l: null };
    en(() => { n.d = !0 })
}

function Ct(e) {
    const t = ae;
    if (t !== null) {
        const o = t.e;
        if (o !== null) {
            var r = I,
                n = q;
            t.e = null;
            try {
                for (var a = 0; a < o.length; a++) {
                    var i = o[a];
                    Ne(i.effect), ge(i.reaction), Pt(i.fn)
                }
            } finally { Ne(r), ge(n) }
        }
        ae = t.p, t.m = !0
    }
    return {}
}

function Ur() { return !0 }

function de(e) {
    if (typeof e != "object" || e === null || Qe in e) return e;
    const t = Rr(e);
    if (t !== Cn && t !== Dn) return e;
    var r = new Map,
        n = ir(e),
        a = Y(0),
        i = q,
        o = u => {
            var c = q;
            ge(i);
            var l = u();
            return ge(c), l
        };
    return n && r.set("length", Y(e.length)), new Proxy(e, {
        defineProperty(u, c, l) {
            (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Bn();
            var p = r.get(c);
            return p === void 0 ? (p = o(() => Y(l.value)), r.set(c, p)) : T(p, o(() => de(l.value))), !0
        },
        deleteProperty(u, c) {
            var l = r.get(c);
            if (l === void 0) c in u && (r.set(c, o(() => Y(Q))), Ut(a));
            else {
                if (n && typeof c == "string") {
                    var p = r.get("length"),
                        h = Number(c);
                    Number.isInteger(h) && h < p.v && T(p, h)
                }
                T(l, Q), Ut(a)
            }
            return !0
        },
        get(u, c, l) {
            var f;
            if (c === Qe) return e;
            var p = r.get(c),
                h = c in u;
            if (p === void 0 && (!h || (f = Ue(u, c)) != null && f.writable) && (p = o(() => Y(de(h ? u[c] : Q))), r.set(c, p)), p !== void 0) { var s = v(p); return s === Q ? void 0 : s }
            return Reflect.get(u, c, l)
        },
        getOwnPropertyDescriptor(u, c) {
            var l = Reflect.getOwnPropertyDescriptor(u, c);
            if (l && "value" in l) {
                var p = r.get(c);
                p && (l.value = v(p))
            } else if (l === void 0) {
                var h = r.get(c),
                    s = h == null ? void 0 : h.v;
                if (h !== void 0 && s !== Q) return { enumerable: !0, configurable: !0, value: s, writable: !0 }
            }
            return l
        },
        has(u, c) {
            var s;
            if (c === Qe) return !0;
            var l = r.get(c),
                p = l !== void 0 && l.v !== Q || Reflect.has(u, c);
            if (l !== void 0 || I !== null && (!p || (s = Ue(u, c)) != null && s.writable)) { l === void 0 && (l = o(() => Y(p ? de(u[c]) : Q)), r.set(c, l)); var h = v(l); if (h === Q) return !1 }
            return p
        },
        set(u, c, l, p) {
            var M;
            var h = r.get(c),
                s = c in u;
            if (n && c === "length")
                for (var f = l; f < h.v; f += 1) {
                    var m = r.get(f + "");
                    m !== void 0 ? T(m, Q) : f in u && (m = o(() => Y(Q)), r.set(f + "", m))
                }
            h === void 0 ? (!s || (M = Ue(u, c)) != null && M.writable) && (h = o(() => Y(void 0)), T(h, o(() => de(l))), r.set(c, h)) : (s = h.v !== Q, T(h, o(() => de(l))));
            var C = Reflect.getOwnPropertyDescriptor(u, c);
            if (C != null && C.set && C.set.call(p, l), !s) {
                if (n && typeof c == "string") {
                    var S = r.get("length"),
                        E = Number(c);
                    Number.isInteger(E) && E >= S.v && T(S, E + 1)
                }
                Ut(a)
            }
            return !0
        },
        ownKeys(u) { v(a); var c = Reflect.ownKeys(u).filter(h => { var s = r.get(h); return s === void 0 || s.v !== Q }); for (var [l, p] of r) p.v !== Q && !(l in u) && c.push(l); return c },
        setPrototypeOf() { Hn() }
    })
}

function Ut(e, t = 1) { T(e, e.v + t) }

function Dt(e) {
    var t = fe | me,
        r = q !== null && (q.f & fe) !== 0 ? q : null;
    return I === null || r !== null && (r.f & ne) !== 0 ? t |= ne : I.f |= Br, { ctx: ae, deps: null, effects: null, equals: Hr, f: t, fn: e, reactions: null, rv: 0, v: null, wv: 0, parent: r ?? I }
}

function ue(e) { const t = Dt(e); return cn(t), t }

function ea(e) { const t = Dt(e); return t.equals = cr, t }

function Wr(e) { var t = e.effects; if (t !== null) { e.effects = null; for (var r = 0; r < t.length; r += 1) Se(t[r]) } }

function ta(e) {
    for (var t = e.parent; t !== null;) {
        if ((t.f & fe) === 0) return t;
        t = t.parent
    }
    return null
}

function Vr(e) {
    var t, r = I;
    Ne(ta(e));
    try { Wr(e), t = fn(e) } finally { Ne(r) }
    return t
}

function Gr(e) {
    var t = Vr(e),
        r = (Le || (e.f & ne) !== 0) && e.deps !== null ? He : $;
    he(e, r), e.equals(t) || (e.v = t, e.wv = dn())
}
const $e = new Map;

function ut(e, t) { var r = { f: 0, v: e, reactions: null, equals: Hr, rv: 0, wv: 0 }; return r }

function Y(e, t) { const r = ut(e); return cn(r), r }

function Jr(e, t = !1) { const r = ut(e); return t || (r.equals = cr), r }

function T(e, t, r = !1) { q !== null && !_e && Ur() && (q.f & (fe | sr)) !== 0 && !(X != null && X.includes(e)) && Yn(); let n = r ? de(t) : t; return Zt(e, n) }

function Zt(e, t) {
    if (!e.equals(t)) {
        var r = e.v;
        rt ? $e.set(e, t) : $e.set(e, r), e.v = t, (e.f & fe) !== 0 && ((e.f & me) !== 0 && Vr(e), he(e, (e.f & ne) === 0 ? $ : He)), e.wv = dn(), Kr(e, me), I !== null && (I.f & $) !== 0 && (I.f & (Ae | Ge)) === 0 && (oe === null ? ua([e]) : oe.push(e))
    }
    return t
}

function Kr(e, t) {
    var r = e.reactions;
    if (r !== null)
        for (var n = r.length, a = 0; a < n; a++) {
            var i = r[a],
                o = i.f;
            (o & me) === 0 && (he(i, t), (o & ($ | ne)) !== 0 && ((o & fe) !== 0 ? Kr(i, He) : Nt(i)))
        }
}
let ra = !1;
var Er, Xr, Zr, Qr, $r;

function na() {
    if (Er === void 0) {
        Er = window, Xr = document, Zr = /Firefox/.test(navigator.userAgent);
        var e = Element.prototype,
            t = Node.prototype,
            r = Text.prototype;
        Qr = Ue(t, "firstChild").get, $r = Ue(t, "nextSibling").get, xr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), xr(r) && (r.__t = void 0)
    }
}

function qt(e = "") { return document.createTextNode(e) }

function Me(e) { return Qr.call(e) }

function It(e) { return $r.call(e) }

function w(e, t) { return Me(e) }

function Ee(e, t) {
    { var r = Me(e); return r instanceof Comment && r.data === "" ? It(r) : r }
}

function D(e, t = 1, r = !1) { let n = e; for (; t--;) n = It(n); return n }

function aa(e) { e.textContent = "" }

function ia(e) { I === null && q === null && Rn(), q !== null && (q.f & ne) !== 0 && I === null && On(), rt && zn() }

function oa(e, t) {
    var r = t.last;
    r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e)
}

function Je(e, t, r, n = !0) {
    var a = I,
        i = { ctx: ae, deps: null, nodes_start: null, nodes_end: null, f: e | me, first: null, fn: t, last: null, next: null, parent: a, prev: null, teardown: null, transitions: null, wv: 0 };
    if (r) try { hr(i), i.f |= In } catch (c) { throw Se(i), c } else t !== null && Nt(i);
    var o = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Br | lt)) === 0;
    if (!o && n && (a !== null && oa(i, a), q !== null && (q.f & fe) !== 0)) {
        var u = q;
        (u.effects ?? (u.effects = [])).push(i)
    }
    return i
}

function en(e) { const t = Je(Tt, null, !1); return he(t, $), t.teardown = e, t }

function Qt(e) {
    ia();
    var t = I !== null && (I.f & Ae) !== 0 && ae !== null && !ae.m;
    if (t) {
        var r = ae;
        (r.e ?? (r.e = [])).push({ fn: e, effect: I, reaction: q })
    } else {
        var n = Pt(e);
        return n
    }
}

function sa(e) { const t = Je(Ge, e, !0); return (r = {}) => new Promise(n => { r.outro ? ft(t, () => { Se(t), n(void 0) }) : (Se(t), n(void 0)) }) }

function Pt(e) { return Je(jr, e, !1) }

function ca(e) { return Je(Tt, e, !0) }

function G(e, t = [], r = Dt) { const n = t.map(r); return Mt(() => e(...n.map(v))) }

function Mt(e, t = 0) { return Je(Tt | sr | t, e, !0) }

function Ve(e, t = !0) { return Je(Tt | Ae, e, !0, t) }

function tn(e) {
    var t = e.teardown;
    if (t !== null) {
        const r = rt,
            n = q;
        Sr(!0), ge(null);
        try { t.call(null) } finally { Sr(r), ge(n) }
    }
}

function rn(e, t = !1) {
    var r = e.first;
    for (e.first = e.last = null; r !== null;) {
        var n = r.next;
        (r.f & Ge) !== 0 ? r.parent = null : Se(r, t), r = n
    }
}

function la(e) {
    for (var t = e.first; t !== null;) {
        var r = t.next;
        (t.f & Ae) === 0 && Se(t), t = r
    }
}

function Se(e, t = !0) {
    var r = !1;
    (t || (e.f & Pn) !== 0) && e.nodes_start !== null && (nn(e.nodes_start, e.nodes_end), r = !0), rn(e, t && !r), mt(e, 0), he(e, Et);
    var n = e.transitions;
    if (n !== null)
        for (const i of n) i.stop();
    tn(e);
    var a = e.parent;
    a !== null && a.first !== null && an(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null
}

function nn(e, t) {
    for (; e !== null;) {
        var r = e === t ? null : It(e);
        e.remove(), e = r
    }
}

function an(e) {
    var t = e.parent,
        r = e.prev,
        n = e.next;
    r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r))
}

function ft(e, t) {
    var r = [];
    ur(e, r, !0), on(r, () => { Se(e), t && t() })
}

function on(e, t) { var r = e.length; if (r > 0) { var n = () => --r || t(); for (var a of e) a.out(n) } else t() }

function ur(e, t, r) {
    if ((e.f & Te) === 0) {
        if (e.f ^= Te, e.transitions !== null)
            for (const o of e.transitions) (o.is_global || r) && t.push(o);
        for (var n = e.first; n !== null;) {
            var a = n.next,
                i = (n.f & St) !== 0 || (n.f & Ae) !== 0;
            ur(n, t, i ? r : !1), n = a
        }
    }
}

function ht(e) { sn(e, !0) }

function sn(e, t) {
    if ((e.f & Te) !== 0) {
        e.f ^= Te, (e.f & $) === 0 && (e.f ^= $), nt(e) && (he(e, me), Nt(e));
        for (var r = e.first; r !== null;) {
            var n = r.next,
                a = (r.f & St) !== 0 || (r.f & Ae) !== 0;
            sn(r, a ? t : !1), r = n
        }
        if (e.transitions !== null)
            for (const i of e.transitions) (i.is_global || t) && i.in()
    }
}
let vt = [];

function da() {
    var e = vt;
    vt = [], qn(e)
}

function fr(e) { vt.length === 0 && queueMicrotask(da), vt.push(e) }
let it = !1,
    $t = !1,
    pt = null,
    Be = !1,
    rt = !1;

function Sr(e) { rt = e }
let ot = [];
let q = null,
    _e = !1;

function ge(e) { q = e }
let I = null;

function Ne(e) { I = e }
let X = null;

function cn(e) { q !== null && q.f & Xt && (X === null ? X = [e] : X.push(e)) }
let K = null,
    re = 0,
    oe = null;

function ua(e) { oe = e }
let ln = 1,
    _t = 0,
    Le = !1;

function dn() { return ++ln }

function nt(e) {
    var h;
    var t = e.f;
    if ((t & me) !== 0) return !0;
    if ((t & He) !== 0) {
        var r = e.deps,
            n = (t & ne) !== 0;
        if (r !== null) {
            var a, i, o = (t & dt) !== 0,
                u = n && I !== null && !Le,
                c = r.length;
            if (o || u) {
                var l = e,
                    p = l.parent;
                for (a = 0; a < c; a++) i = r[a], (o || !((h = i == null ? void 0 : i.reactions) != null && h.includes(l))) && (i.reactions ?? (i.reactions = [])).push(l);
                o && (l.f ^= dt), u && p !== null && (p.f & ne) === 0 && (l.f ^= ne)
            }
            for (a = 0; a < c; a++)
                if (i = r[a], nt(i) && Gr(i), i.wv > e.wv) return !0
        } (!n || I !== null && !Le) && he(e, $)
    }
    return !1
}

function fa(e, t) {
    for (var r = t; r !== null;) {
        if ((r.f & lt) !== 0) try { r.fn(e); return } catch { r.f ^= lt }
        r = r.parent
    }
    throw it = !1, e
}

function Ar(e) { return (e.f & Et) === 0 && (e.parent === null || (e.parent.f & lt) === 0) }

function Lt(e, t, r, n) { if (it) { if (r === null && (it = !1), Ar(t)) throw e; return } if (r !== null && (it = !0), fa(e, t), Ar(t)) throw e }

function un(e, t, r = !0) {
    var n = e.reactions;
    if (n !== null)
        for (var a = 0; a < n.length; a++) {
            var i = n[a];
            X != null && X.includes(e) || ((i.f & fe) !== 0 ? un(i, t, !1) : t === i && (r ? he(i, me) : (i.f & $) !== 0 && he(i, He), Nt(i)))
        }
}

function fn(e) {
    var f;
    var t = K,
        r = re,
        n = oe,
        a = q,
        i = Le,
        o = X,
        u = ae,
        c = _e,
        l = e.f;
    K = null, re = 0, oe = null, Le = (l & ne) !== 0 && (_e || !Be || q === null), q = (l & (Ae | Ge)) === 0 ? e : null, X = null, Tr(e.ctx), _e = !1, _t++, e.f |= Xt;
    try {
        var p = (0, e.fn)(),
            h = e.deps;
        if (K !== null) {
            var s;
            if (mt(e, re), h !== null && re > 0)
                for (h.length = re + K.length, s = 0; s < K.length; s++) h[re + s] = K[s];
            else e.deps = h = K;
            if (!Le)
                for (s = re; s < h.length; s++)((f = h[s]).reactions ?? (f.reactions = [])).push(e)
        } else h !== null && re < h.length && (mt(e, re), h.length = re);
        if (Ur() && oe !== null && !_e && h !== null && (e.f & (fe | He | me)) === 0)
            for (s = 0; s < oe.length; s++) un(oe[s], e);
        return a !== null && a !== e && (_t++, oe !== null && (n === null ? n = oe : n.push(...oe))), p
    } finally { K = t, re = r, oe = n, q = a, Le = i, X = o, Tr(u), _e = c, e.f ^= Xt }
}

function ha(e, t) {
    let r = t.reactions;
    if (r !== null) {
        var n = En.call(r, e);
        if (n !== -1) {
            var a = r.length - 1;
            a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop())
        }
    }
    r === null && (t.f & fe) !== 0 && (K === null || !K.includes(t)) && (he(t, He), (t.f & (ne | dt)) === 0 && (t.f ^= dt), Wr(t), mt(t, 0))
}

function mt(e, t) {
    var r = e.deps;
    if (r !== null)
        for (var n = t; n < r.length; n++) ha(e, r[n])
}

function hr(e) {
    var t = e.f;
    if ((t & Et) === 0) {
        he(e, $);
        var r = I,
            n = ae,
            a = Be;
        I = e, Be = !0;
        try {
            (t & sr) !== 0 ? la(e) : rn(e), tn(e);
            var i = fn(e);
            e.teardown = typeof i == "function" ? i : null, e.wv = ln;
            var o = e.deps,
                u;
            kr && Un && e.f & me
        } catch (c) { Lt(c, e, r, n || e.ctx) } finally { Be = a, I = r }
    }
}

function va() {
    try { Fn() } catch (e) {
        if (pt !== null) Lt(e, pt, null);
        else throw e
    }
}

function pa() {
    var e = Be;
    try {
        var t = 0;
        for (Be = !0; ot.length > 0;) {
            t++ > 1e3 && va();
            var r = ot,
                n = r.length;
            ot = [];
            for (var a = 0; a < n; a++) {
                var i = ma(r[a]);
                _a(i)
            }
            $e.clear()
        }
    } finally { $t = !1, Be = e, pt = null }
}

function _a(e) {
    var t = e.length;
    if (t !== 0)
        for (var r = 0; r < t; r++) { var n = e[r]; if ((n.f & (Et | Te)) === 0) try { nt(n) && (hr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? an(n) : n.fn = null)) } catch (a) { Lt(a, n, null, n.ctx) } }
}

function Nt(e) {
    $t || ($t = !0, queueMicrotask(pa));
    for (var t = pt = e; t.parent !== null;) {
        t = t.parent;
        var r = t.f;
        if ((r & (Ge | Ae)) !== 0) {
            if ((r & $) === 0) return;
            t.f ^= $
        }
    }
    ot.push(t)
}

function ma(e) {
    for (var t = [], r = e; r !== null;) {
        var n = r.f,
            a = (n & (Ae | Ge)) !== 0,
            i = a && (n & $) !== 0;
        if (!i && (n & Te) === 0) {
            if ((n & jr) !== 0) t.push(r);
            else if (a) r.f ^= $;
            else try { nt(r) && hr(r) } catch (c) { Lt(c, r, null, r.ctx) }
            var o = r.first;
            if (o !== null) { r = o; continue }
        }
        var u = r.parent;
        for (r = r.next; r === null && u !== null;) r = u.next, u = u.parent
    }
    return t
}

function v(e) {
    var t = e.f,
        r = (t & fe) !== 0;
    if (q !== null && !_e) {
        if (!(X != null && X.includes(e))) {
            var n = q.deps;
            e.rv < _t && (e.rv = _t, K === null && n !== null && n[re] === e ? re++ : K === null ? K = [e] : (!Le || !K.includes(e)) && K.push(e))
        }
    } else if (r && e.deps === null && e.effects === null) {
        var a = e,
            i = a.parent;
        i !== null && (i.f & ne) === 0 && (a.f ^= ne)
    }
    return r && (a = e, nt(a) && Gr(a)), rt && $e.has(e) ? $e.get(e) : e.v
}

function gt(e) { var t = _e; try { return _e = !0, e() } finally { _e = t } }
const ga = -7169;

function he(e, t) { e.f = e.f & ga | t }
const ya = ["touchstart", "touchmove"];

function wa(e) { return ya.includes(e) }

function ba(e) {
    var t = q,
        r = I;
    ge(null), Ne(null);
    try { return e() } finally { ge(t), Ne(r) }
}
const hn = new Set,
    er = new Set;

function ka(e, t, r, n = {}) {
    function a(i) { if (n.capture || Ze.call(t, i), !i.cancelBubble) return ba(() => r == null ? void 0 : r.call(this, i)) }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? fr(() => { t.addEventListener(e, a, n) }) : t.addEventListener(e, a, n), a
}

function yt(e, t, r, n, a) {
    var i = { capture: n, passive: a },
        o = ka(e, t, r, i);
    (t === document.body || t === window || t === document) && en(() => { t.removeEventListener(e, o, i) })
}

function vr(e) { for (var t = 0; t < e.length; t++) hn.add(e[t]); for (var r of er) r(e) }

function Ze(e) {
    var M;
    var t = this,
        r = t.ownerDocument,
        n = e.type,
        a = ((M = e.composedPath) == null ? void 0 : M.call(e)) || [],
        i = a[0] || e.target,
        o = 0,
        u = e.__root;
    if (u) {
        var c = a.indexOf(u);
        if (c !== -1 && (t === document || t === window)) { e.__root = t; return }
        var l = a.indexOf(t);
        if (l === -1) return;
        c <= l && (o = c)
    }
    if (i = a[o] || e.target, i !== t) {
        Sn(e, "currentTarget", { configurable: !0, get() { return i || r } });
        var p = q,
            h = I;
        ge(null), Ne(null);
        try {
            for (var s, f = []; i !== null;) {
                var m = i.assignedSlot || i.parentNode || i.host || null;
                try {
                    var C = i["__" + n];
                    if (C != null && (!i.disabled || e.target === i))
                        if (ir(C)) {
                            var [S, ...E] = C;
                            S.apply(i, [e, ...E])
                        } else C.call(i, e)
                } catch (P) { s ? f.push(P) : s = P }
                if (e.cancelBubble || m === t || m === null) break;
                i = m
            }
            if (s) { for (let P of f) queueMicrotask(() => { throw P }); throw s }
        } finally { e.__root = t, delete e.currentTarget, ge(p), Ne(h) }
    }
}

function vn(e) { var t = document.createElement("template"); return t.innerHTML = e, t.content }

function et(e, t) {
    var r = I;
    r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t)
}

function R(e, t) {
    var r = (t & Zn) !== 0,
        n = (t & Qn) !== 0,
        a, i = !e.startsWith("<!>");
    return () => {
        a === void 0 && (a = vn(i ? e : "<!>" + e), r || (a = Me(a)));
        var o = n || Zr ? document.importNode(a, !0) : a.cloneNode(!0);
        if (r) {
            var u = Me(o),
                c = o.lastChild;
            et(u, c)
        } else et(o, o);
        return o
    }
}

function xa(e = "") {
    { var t = qt(e + ""); return et(t, t), t }
}

function Cr() {
    var e = document.createDocumentFragment(),
        t = document.createComment(""),
        r = qt();
    return e.append(t, r), et(t, r), e
}

function L(e, t) { e !== null && e.before(t) }

function O(e, t) {
    var r = t == null ? "" : typeof t == "object" ? t + "" : t;
    r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "")
}

function Ta(e, t) { return Ea(e, t) }
const Ye = new Map;

function Ea(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: o = !0 }) {
    na();
    var u = new Set,
        c = h => {
            for (var s = 0; s < h.length; s++) {
                var f = h[s];
                if (!u.has(f)) {
                    u.add(f);
                    var m = wa(f);
                    t.addEventListener(f, Ze, { passive: m });
                    var C = Ye.get(f);
                    C === void 0 ? (document.addEventListener(f, Ze, { passive: m }), Ye.set(f, 1)) : Ye.set(f, C + 1)
                }
            }
        };
    c(or(hn)), er.add(c);
    var l = void 0,
        p = sa(() => {
            var h = r ?? t.appendChild(qt());
            return Ve(() => {
                if (i) {
                    At({});
                    var s = ae;
                    s.c = i
                }
                a && (n.$$events = a), l = e(h, n) || {}, i && Ct()
            }), () => {
                var m;
                for (var s of u) { t.removeEventListener(s, Ze); var f = Ye.get(s); --f === 0 ? (document.removeEventListener(s, Ze), Ye.delete(s)) : Ye.set(s, f) }
                er.delete(c), h !== r && ((m = h.parentNode) == null || m.removeChild(h))
            }
        });
    return Sa.set(l, p), l
}
let Sa = new WeakMap;

function V(e, t, [r, n] = [0, 0]) {
    var a = e,
        i = null,
        o = null,
        u = Q,
        c = r > 0 ? St : 0,
        l = !1;
    const p = (s, f = !0) => { l = !0, h(f, s) },
        h = (s, f) => { u !== (u = s) && (u ? (i ? ht(i) : f && (i = Ve(() => f(a))), o && ft(o, () => { o = null })) : (o ? ht(o) : f && (o = Ve(() => f(a, [r + 1, n]))), i && ft(i, () => { i = null }))) };
    Mt(() => { l = !1, t(p), l || h(null, null) }, c)
}

function tr(e, t) { return t }

function Aa(e, t, r, n) {
    for (var a = [], i = t.length, o = 0; o < i; o++) ur(t[o].e, a, !0);
    var u = i > 0 && a.length === 0 && r !== null;
    if (u) {
        var c = r.parentNode;
        aa(c), c.append(r), n.clear(), Ie(e, t[0].prev, t[i - 1].next)
    }
    on(a, () => {
        for (var l = 0; l < i; l++) {
            var p = t[l];
            u || (n.delete(p.k), Ie(e, p.prev, p.next)), Se(p.e, !u)
        }
    })
}

function wt(e, t, r, n, a, i = null) {
    var o = e,
        u = { flags: t, items: new Map, first: null },
        c = (t & Yr) !== 0;
    if (c) {
        var l = e;
        o = l.appendChild(qt())
    }
    var p = null,
        h = !1,
        s = ea(() => { var f = r(); return ir(f) ? f : f == null ? [] : or(f) });
    Mt(() => {
        var f = v(s),
            m = f.length;
        h && m === 0 || (h = m === 0, Ca(f, u, o, a, t, n, r), i !== null && (m === 0 ? p ? ht(p) : p = Ve(() => i(o)) : p !== null && ft(p, () => { p = null })), v(s))
    })
}

function Ca(e, t, r, n, a, i, o) {
    var ye, se, we, be;
    var u = (a & Wn) !== 0,
        c = (a & (lr | dr)) !== 0,
        l = e.length,
        p = t.items,
        h = t.first,
        s = h,
        f, m = null,
        C, S = [],
        E = [],
        M, P, g, A;
    if (u)
        for (A = 0; A < l; A += 1) M = e[A], P = i(M, A), g = p.get(P), g !== void 0 && ((ye = g.a) == null || ye.measure(), (C ?? (C = new Set)).add(g));
    for (A = 0; A < l; A += 1) {
        if (M = e[A], P = i(M, A), g = p.get(P), g === void 0) {
            var F = s ? s.e.nodes_start : r;
            m = qa(F, t, m, m === null ? t.first : m.next, M, P, A, n, a, o), p.set(P, m), S = [], E = [], s = m.next;
            continue
        }
        if (c && Da(g, M, A, a), (g.e.f & Te) !== 0 && (ht(g.e), u && ((se = g.a) == null || se.unfix(), (C ?? (C = new Set)).delete(g))), g !== s) {
            if (f !== void 0 && f.has(g)) {
                if (S.length < E.length) {
                    var J = E[0],
                        k;
                    m = J.prev;
                    var j = S[0],
                        ee = S[S.length - 1];
                    for (k = 0; k < S.length; k += 1) Dr(S[k], J, r);
                    for (k = 0; k < E.length; k += 1) f.delete(E[k]);
                    Ie(t, j.prev, ee.next), Ie(t, m, j), Ie(t, ee, J), s = J, m = ee, A -= 1, S = [], E = []
                } else f.delete(g), Dr(g, s, r), Ie(t, g.prev, g.next), Ie(t, g, m === null ? t.first : m.next), Ie(t, m, g), m = g;
                continue
            }
            for (S = [], E = []; s !== null && s.k !== P;)(s.e.f & Te) === 0 && (f ?? (f = new Set)).add(s), E.push(s), s = s.next;
            if (s === null) continue;
            g = s
        }
        S.push(g), m = g, s = g.next
    }
    if (s !== null || f !== void 0) {
        for (var Z = f === void 0 ? [] : or(f); s !== null;)(s.e.f & Te) === 0 && Z.push(s), s = s.next;
        var B = Z.length;
        if (B > 0) {
            var Ce = (a & Yr) !== 0 && l === 0 ? r : null;
            if (u) { for (A = 0; A < B; A += 1)(we = Z[A].a) == null || we.measure(); for (A = 0; A < B; A += 1)(be = Z[A].a) == null || be.fix() }
            Aa(t, Z, Ce, p)
        }
    }
    u && fr(() => {
        var z;
        if (C !== void 0)
            for (g of C) (z = g.a) == null || z.apply()
    }), I.first = t.first && t.first.e, I.last = m && m.e
}

function Da(e, t, r, n) {
    (n & lr) !== 0 && Zt(e.v, t), (n & dr) !== 0 ? Zt(e.i, r) : e.i = r
}

function qa(e, t, r, n, a, i, o, u, c, l) {
    var p = (c & lr) !== 0,
        h = (c & Vn) === 0,
        s = p ? h ? Jr(a) : ut(a) : a,
        f = (c & dr) === 0 ? o : ut(o),
        m = { i: f, v: s, k: i, a: null, e: null, prev: r, next: n };
    try { return m.e = Ve(() => u(e, s, f, l), ra), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? t.first = m : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m } finally { }
}

function Dr(e, t, r) {
    for (var n = e.next ? e.next.e.nodes_start : r, a = t ? t.e.nodes_start : r, i = e.e.nodes_start; i !== n;) {
        var o = It(i);
        a.before(i), i = o
    }
}

function Ie(e, t, r) { t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e) }

function Ia(e, t, r = !1, n = !1, a = !1) {
    var i = e,
        o = "";
    G(() => {
        var u = I;
        if (o !== (o = t() ?? "") && (u.nodes_start !== null && (nn(u.nodes_start, u.nodes_end), u.nodes_start = u.nodes_end = null), o !== "")) {
            var c = o + "";
            r ? c = `<svg>${c}</svg>` : n && (c = `<math>${c}</math>`);
            var l = vn(c);
            if ((r || n) && (l = Me(l)), et(Me(l), l.lastChild), r || n)
                for (; Me(l);) i.before(Me(l));
            else i.before(l)
        }
    })
}

function qr(e, t, ...r) {
    var n = e,
        a = Fr,
        i;
    Mt(() => { a !== (a = t()) && (i && (Se(i), i = null), i = Ve(() => a(n, ...r))) }, St)
}

function Pa(e, t, r) { var n = e == null ? "" : "" + e; return t && (n = n ? n + " " + t : t), n === "" ? null : n }

function Ir(e, t = !1) {
    var r = t ? " !important;" : ";",
        n = "";
    for (var a in e) {
        var i = e[a];
        i != null && i !== "" && (n += " " + a + ": " + i + r)
    }
    return n
}

function Ma(e, t) {
    if (t) {
        var r = "",
            n, a;
        return Array.isArray(t) ? (n = t[0], a = t[1]) : n = t, n && (r += Ir(n)), a && (r += Ir(a, !0)), r = r.trim(), r === "" ? null : r
    }
    return String(e)
}

function bt(e, t, r, n, a, i) {
    var o = e.__className;
    if (o !== r || o === void 0) {
        var u = Pa(r, n);
        u == null ? e.removeAttribute("class") : e.className = u, e.__className = r
    }
    return i
}

function Wt(e, t = {}, r, n) {
    for (var a in r) {
        var i = r[a];
        t[a] !== i && (r[a] == null ? e.style.removeProperty(a) : e.style.setProperty(a, i, n))
    }
}

function pn(e, t, r, n) {
    var a = e.__style;
    if (a !== t) {
        var i = Ma(t, n);
        i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t
    } else n && (Array.isArray(n) ? (Wt(e, r == null ? void 0 : r[0], n[0]), Wt(e, r == null ? void 0 : r[1], n[1], "important")) : Wt(e, r, n));
    return n
}
const La = Symbol("is custom element"),
    Na = Symbol("is html");

function Vt(e, t, r, n) {
    var a = za(e);
    a[t] !== (a[t] = r) && (t === "loading" && (e[Ln] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Oa(e).includes(t) ? e[t] = r : e.setAttribute(t, r))
}

function za(e) {
    return e.__attributes ?? (e.__attributes = {
        [La]: e.nodeName.includes("-"),
        [Na]: e.namespaceURI === $n
    })
}
var Pr = new Map;

function Oa(e) {
    var t = Pr.get(e.nodeName);
    if (t) return t;
    Pr.set(e.nodeName, t = []);
    for (var r, n = e, a = Element.prototype; a !== n;) {
        r = An(n);
        for (var i in r) r[i].set && t.push(i);
        n = Rr(n)
    }
    return t
}
var Pe, We, tt, kt, _n;
const xt = class xt {
    constructor(t) {
        Xe(this, kt);
        Xe(this, Pe, new WeakMap);
        Xe(this, We);
        Xe(this, tt);
        Yt(this, tt, t)
    }
    observe(t, r) {
        var n = xe(this, Pe).get(t) || new Set;
        return n.add(r), xe(this, Pe).set(t, n), br(this, kt, _n).call(this).observe(t, xe(this, tt)), () => {
            var a = xe(this, Pe).get(t);
            a.delete(r), a.size === 0 && (xe(this, Pe).delete(t), xe(this, We).unobserve(t))
        }
    }
};
Pe = new WeakMap, We = new WeakMap, tt = new WeakMap, kt = new WeakSet, _n = function () { return xe(this, We) ?? Yt(this, We, new ResizeObserver(t => { for (var r of t) { xt.entries.set(r.target, r); for (var n of xe(this, Pe).get(r.target) || []) n(r) } })) }, Bt(xt, "entries", new WeakMap);
let rr = xt;
var Ra = new rr({ box: "border-box" });

function mn(e, t, r) {
    var n = Ra.observe(e, () => r(e[t]));
    Pt(() => (gt(() => r(e[t])), n))
}

function Mr(e, t) { return e === t || (e == null ? void 0 : e[Qe]) === t }

function Fa(e = {}, t, r, n) { return Pt(() => { var a, i; return ca(() => { a = i, i = [], gt(() => { e !== r(...i) && (t(e, ...i), a && Mr(r(...a), e) && t(null, ...a)) }) }), () => { fr(() => { i && Mr(r(...i), e) && t(null, ...i) }) } }), e }
let at = !1;

function ja(e) { var t = at; try { return at = !1, [e(), at] } finally { at = t } }

function Lr(e) { var t; return ((t = e.ctx) == null ? void 0 : t.d) ?? !1 }

function je(e, t, r, n) {
    var A;
    var a = (r & Gn) !== 0,
        i = !0,
        o = (r & Kn) !== 0,
        u = (r & Xn) !== 0,
        c = !1,
        l;
    o ? [l, c] = ja(() => e[t]) : l = e[t];
    var p = Qe in e || Mn in e,
        h = o && (((A = Ue(e, t)) == null ? void 0 : A.set) ?? (p && t in e && (F => e[t] = F))) || void 0,
        s = n,
        f = !0,
        m = !1,
        C = () => (m = !0, f && (f = !1, u ? s = gt(n) : s = n), s);
    l === void 0 && n !== void 0 && (h && i && jn(), l = C(), h && h(l));
    var S;
    if (S = () => { var F = e[t]; return F === void 0 ? C() : (f = !0, m = !1, F) }, (r & Jn) === 0) return S;
    if (h) { var E = e.$$legacy; return function (F, J) { return arguments.length > 0 ? ((!J || E || c) && h(J ? S() : F), F) : S() } }
    var M = !1,
        P = Jr(l),
        g = Dt(() => {
            var F = S(),
                J = v(P);
            return M ? (M = !1, J) : P.v = F
        });
    return o && v(g), a || (g.equals = cr),
        function (F, J) {
            if (arguments.length > 0) {
                const k = J ? v(g) : o ? de(F) : F;
                if (!g.equals(k)) {
                    if (M = !0, T(P, k), m && s !== void 0 && (s = k), Lr(g)) return F;
                    gt(() => v(g))
                }
                return F
            }
            return Lr(g) ? g.v : v(g)
        }
}
const Ba = "5";
var Or;
typeof window < "u" && ((Or = window.__svelte ?? (window.__svelte = {})).v ?? (Or.v = new Set)).add(Ba);
class zt {
    constructor(t) {
        Bt(this, "cards");
        this.cards = t
    }
    static Default() { return new zt([{ type: "time", id: "time-1", count: 25, durations: [2, 3, 5] }, { type: "time", id: "time-2", count: 15, durations: [4, 6, 10] }, { type: "time", id: "time-3", count: 10, durations: [6, 9, 15] }, { type: "time", id: "time-4", count: 3, durations: [8, 12, 20] }, { type: "time", id: "time-5", count: 2, durations: [12, 18, 30] }, { type: "powerup", id: "randomize", count: 4 }, { type: "powerup", id: "veto", count: 4 }, { type: "powerup", id: "duplicate", count: 2 }, { type: "powerup", id: "move", count: 1 }, { type: "powerup", id: "draw-2", count: 4 }, { type: "powerup", id: "draw-3", count: 4 }, { type: "powerup", id: "expand-1", count: 2 }, { type: "curse", id: "zoologist", count: 1 }, { type: "curse", id: "unguided-tourist", count: 1 }, { type: "curse", id: "endless-tumble", count: 1 }, { type: "curse", id: "hidden-hangman", count: 1 }, { type: "curse", id: "overflowing-chalice", count: 1 }, { type: "curse", id: "mediocre-travel-agent", count: 1 }, { type: "curse", id: "luxury-car", count: 1 }, { type: "curse", id: "u-turn", count: 1 }, { type: "curse", id: "bridge-troll", count: 1 }, { type: "curse", id: "water-weight", count: 1 }, { type: "curse", id: "jammed-door", count: 1 }, { type: "curse", id: "cairn", count: 1 }, { type: "curse", id: "urban-explorer", count: 1 }, { type: "curse", id: "impressionable-consumer", count: 1 }, { type: "curse", id: "egg-partner", count: 1 }, { type: "curse", id: "distant-cuisine", count: 1 }, { type: "curse", id: "right-turn", count: 1 }, { type: "curse", id: "labyrinth", count: 1 }, { type: "curse", id: "bird-guide", count: 1 }, { type: "curse", id: "spotty-memory", count: 1 }, { type: "curse", id: "lemon-phylactery", count: 1 }, { type: "curse", id: "drained-brain", count: 1 }, { type: "curse", id: "ransom-note", count: 1 }, { type: "curse", id: "gamblers-feet", count: 1 }].map(t => ({ ...t }))) }
    count() { return this.cards.reduce((t, r) => t + r.count, 0) }
    draw(t) {
        if (t) return t.count--, t.count === 0 && this.cards.splice(this.cards.indexOf(t), 1), t;
        const r = this.count();
        if (r == 0) return null;
        let n = Math.floor(Math.random() * r);
        for (let a = 0; a < this.cards.length; a++) {
            if (n < this.cards[a].count) { const i = this.cards[a]; return this.cards[a].count--, this.cards[a].count == 0 && this.cards.splice(a, 1), i }
            n -= this.cards[a].count
        }
    }
    restore(t) { t.count++, t.count === 1 && this.cards.push(t) }
}
const Ha = {
    "lang.ru": "RU", "lang.en": "EN", "shuffle-deck": "Перетасовать колоду", "shuffle-deck-confirm": "Вы уверены, что хотите перетасовать колоду?", "save-state": "Сохранить состояние", "save-state-success": "Состояние скопировано в буфер обмена", "save-state-error": "Ошибка при копировании состояния", "load-state": "Загрузить состояние", "load-state-info": "Вставьте состояние в поле ниже", "load-state-error": "Ошибка при загрузке состояния", map: "Открыть карту", rules: "Общие правила", curses: "Проклятия", "switch-to-en": "Switch to English", "switch-to-ru": "Русская версия", undo: "Отменить действие", redo: "Вернуть действие", "expand-1-confirm": "Хотите сыграть эту карту? Это увеличит лимит карт в руке на 1.", "casting-cost": "Цена:", "curse-of": "Проклятие", min: "мин", "size.small": "S", "size.medium": "M", "size.large": "L", intro: '<p>Это колода беглеца для Jet Lag The Game: Hide and Seek. <a href="https://jetlag.denull.ru/ru/rules" target="_blank">Что это такое?</a></p>', "pull-to-draw": "Потяните вниз, чтобы взять карту", "tap-or-pull": `Нажмите, чтобы свернуть, или
потяните вверх, чтобы сыграть/сбросить`, "overlimit-notice": "У вас превышен лимит карт в руке. Вы должны немедленно сыграть или сбросить лишние карты.", duplicate: "Дублировать эту карту", "in-hand": "В руке:", "time-bonuses": "Бонусное время:", "card.time.title": "Бонусное время", "card.randomize.title": "Поменять вопрос", "card.randomize.description": `Сыграйте вместо ответа на вопрос.
Из той же категории будет выбран случайный ещё не заданный вопрос, на который вы должны ответить.`, "card.veto.title": "Вето на вопрос", "card.veto.description": `Сыграйте вместо ответа на вопрос.
Сыщики не получат ответа, а вы — награды за вопрос.`, "card.duplicate.title": "Скопировать другую карту", "card.duplicate.description": `Используйте эту карту чтобы сыграть копию любой другой карты в вашей руке.
Это может быть использовано для дублирования бонусного времени в конце вашего раунда.`, "card.move.title": "Перемещение", "card.move.description": `Сбросьте все карты и отправьте сыщикам расположение вашей станции.
Эта карта даёт {10|20|60} минут чтобы назначить новую зону укрытия в другом месте на игровой карте. До завершения этого периода сыщикам запрещено перемещаться, а ваш таймер укрытия будет приостановлен. Эту карту нельзя сыграть в финале раунда.`, "card.draw-2.title": "Сбрось 1, возьми 2", "card.draw-2.description": "Сбросьте любую другую карту с руки. Затем возьмите и оставьте на руке две карты из колоды беглеца.", "card.draw-3.title": "Сбрось 2, возьми 3", "card.draw-3.description": "Сбросьте две другие карты с руки. Затем возьмите и оставьте на руке три карты из колоды беглеца.", "card.expand-1.title": "Возьми 1, добавь 1", "card.expand-1.description": `Возьмите одну карту из колоды беглеца.
До конца раунда вы можете держать в руке одну дополнительную карту.`, "card.zoologist.title": "Зоолога", "card.zoologist.description": "Сделайте фото дикого животного — рыбы, птицы, млекопитающего, рептилии, амфибии или насекомого. Прежде чем задать следующий вопрос, сыщики должны сфотографировать дикое животное из той же категории.", "card.zoologist.cost": "Фото животного", "card.unguided-tourist.title": "Туриста без путеводителя", "card.unguided-tourist.description": "Отправьте сыщикам неувеличенное изображение Google Street View с улицы в пределах 150м от их текущего местоположения. Снимок должен быть параллелен горизонту и включать хотя бы одно рукотворное сооружение, кроме дороги. Прежде чем сыщики смогут использовать транспорт или задать следующий вопрос, они должны найти в реальности то, что вы им отправили, не прибегая к помощи интернета. Они должны отправить фото беглецу для проверки.", "card.unguided-tourist.cost": "Сыщики должны быть на улице", "card.endless-tumble.title": "Бесконечного падения", "card.endless-tumble.description": "Прежде чем сыщики смогут задать следующий вопрос, они должны бросить кубик на расстояние не менее 30 м, и на нём должно выпасть 5 или 6. Кубик должен прокатиться всё расстояние без посторонней помощи, только благодаря импульсу от начального броска и гравитации. Если сыщики случайно попали в кого-то кубиком, вы получаете бонус {10|20|30} минут.", "card.endless-tumble.cost": "Бросьте кубик. Если выпало 5 или 6, эта карта не срабатывает", "card.hidden-hangman.title": "Сбежавшего от виселицы", "card.hidden-hangman.description": "Перед тем как задать следующий вопрос или пересесть на другой вид транспорта, сыщики должны победить беглеца в «Виселицу».", "card.hidden-hangman.cost": "Сбросить 2 карты", "card.overflowing-chalice.title": "Переполненной чаши", "card.overflowing-chalice.description": "Отвечая на следующие три вопроса, вы можете дополнительно брать (не оставлять на руке) по одной дополнительной карте из колоды беглеца.", "card.overflowing-chalice.cost": "Сбросить карту", "card.mediocre-travel-agent.title": "Посредственного турагента", "card.mediocre-travel-agent.description": "Выберите любое общедоступное место в пределах {400|400|500}м от текущего местоположения сыщиков. Они не должны находиться в транспорте. Прежде чем задать следующий вопрос, они должны посетить это место, проведя в нём не менее {5|5|10} минут. Они должны отправить вам как минимум три фотографии того, как они наслаждаются отпуском, и доставить вам сувенир. Если этот сувенир будет потерян до того, как они смогут добраться до вас, вы получаете дополнительно {30|45|60} минут.", "card.mediocre-travel-agent.cost": "Их место отдыха должно быть дальше от вас, чем их текущее местоположение", "card.luxury-car.title": "Роскошного автомобиля", "card.luxury-car.description": "Сделайте фото автомобиля. Прежде чем задать следующий вопрос, сыщики должны сфотографировать более дорогой автомобиль.", "card.luxury-car.cost": "Фото автомобиля", "card.u-turn.title": "Разворота", "card.u-turn.description": "Сыщики должны выйти из текущего вида транспорта на следующей станции (при условии, что эта станция обслуживается другим видом транспорта) в течение следующих {0,5|0,5|1} ч.", "card.u-turn.cost": "Сыщики должны удаляться от вас. (Т.е. их следующая станция дальше от вас, чем они сейчас.)", "card.bridge-troll.title": "Тролля под мостом", "card.bridge-troll.description": "Сыщики должны задать свой следующий вопрос из-под моста", "card.bridge-troll.cost": "Сыщики должны быть на расстоянии не менее {0,3|1,5|9,1}км от вас", "card.water-weight.title": "Веса воды", "card.water-weight.description": "Сыщики должны приобрести и до конца вашего забега нести не менее 2л жидкости на каждого сыщика. Они не могут задать следующий вопрос, пока не приобретут жидкость. Вода может быть распределена между сыщиками по их усмотрению. Если в какой-либо момент жидкость будет потеряна или оставлена позади, беглец получает бонусные {30|30|60} минут.", "card.water-weight.cost": "Сыщики должны быть в пределах 300 метров от водоема", "card.jammed-door.title": "Заклинившей двери", "card.jammed-door.description": "В течение следующих {0,5|1|3} часов, перед тем как пройти через дверной проём в здание, заведение, поезд или иное транспортное средство, сыщики должны сначала бросить 2 кубика. Они не смогут войти в это пространство (в том числе через другие двери), если они не выпадет 7 или больше. Проход через любой дверной проём можно попробовать снова через {5|10|15} минут.", "card.jammed-door.cost": "Сбросить 2 карты", "card.cairn.title": "Каменной башни", "card.cairn.description": "У вас есть одна попытка сложить как можно больше камней друг на друга в вертикальную башню. Каждый камень может касаться только одного другого камня. После добавления камня в башню его нельзя удалить. Перед добавлением следующего камня башня должна простоять не менее 5 секунд. Если в любой момент любой камень, кроме нижнего, коснётся земли, башня считается упавшей. Когда башня упадёт, скажите сыщикам, сколько в ней было камней последний раз, когда она простояла пять секунд. Прежде чем задать следующий вопрос, сыщики должны будут построить каменную башню из того же количества камней, с соблюдением тех же условий. Если их башня упадёт, они должны начать заново. Камни следует собирать в природе, и обе команды должны разобрать камни после строительства.", "card.cairn.cost": "Построить каменную башню", "card.urban-explorer.title": "Городского исследователя", "card.urban-explorer.description": "До конца раунда сыщики не могут задавать вопросы, находясь в транспорте или на железнодорожной станции.", "card.urban-explorer.cost": "Сбросить 2 карты", "card.impressionable-consumer.title": "Впечатлительного потребителя", "card.impressionable-consumer.description": "Прежде чем задать следующий вопрос, сыщики должны войти и получить доступ (если требуется) в место или купить продукт, рекламу которого они увидели. Эта реклама должна быть найдена в реальном мире и должна находиться на расстоянии не менее 30 м от самого продукта или места.", "card.impressionable-consumer.cost": "Следующий вопрос сыщиков бесплатный", "card.egg-partner.title": "Яйца-компаньона", "card.egg-partner.description": "Прежде чем задать следующий вопрос, сыщики должны приобрести яйцо. С этого момента яйцо считается официальным участником команды сыщиков. Если любой участник команды будет оставлен позади или погибнет (в случае яйца гибелью считается появление трещины в скорлупе) до конца вашего раунда, вы получаете дополнительно {30|45|60} минут. Это проклятие нельзя сыграть в финале раунда.", "card.egg-partner.cost": "Сбросить две карты", "card.distant-cuisine.title": "Заморской кухни", "card.distant-cuisine.description": "Найдите ресторан в вашей зоне, который явно подаёт блюда определённой зарубежной страны. Прежде чем задать следующий вопрос, сыщики должны посетить ресторан, подающий блюда из страны, которая находится на равном или большем расстоянии.", "card.distant-cuisine.cost": "Вы должны быть в ресторане", "card.right-turn.title": "Правого поворота", "card.right-turn.description": "В течение следующих {20|40|60} минут сыщики могут поворачивать только направо на каждом перекрёстке (двигаться прямо тоже разрешено). Если в какой-то момент они окажутся в тупике, где они не могут продолжать движение вперёд или повернуть направо на протяжении 300 м, они должны сделать разворот на 180°. Правый поворот определяется как дорога под любым углом, которая отклоняется вправо от сыщиков.", "card.right-turn.cost": "Сбросить любую карту", "card.labyrinth.title": "Лабиринта", "card.labyrinth.description": "Потратьте до {10|20|30} минут на рисование решаемого лабиринта и отправьте его фото сыщикам. Вы не можете использовать интернет для исследования дизайнов лабиринтов. Прежде чем задать следующий вопрос, сыщики должны решить лабиринт.", "card.labyrinth.cost": "Нарисовать лабиринт", "card.bird-guide.title": "Определителя птиц", "card.bird-guide.description": "У вас есть один шанс снять птицу на видео как можно дольше, до {5|10|15} минут подряд. Ваш таймер останавливается как только птица покинет кадр. Затем сыщики должны снимать птицу в течение того же времени или дольше.", "card.bird-guide.cost": "Снять птицу на видео", "card.spotty-memory.title": "Провалов в памяти", "card.spotty-memory.description": "До конца раунда одна случайная категория вопросов будет отключена. После того как это проклятие сыграно, сыщики должны бросить кубик, чтобы определить категорию вопросов, которая будет отключена. Категория остаётся отключённой до следующего заданного вопроса, после чего снова бросается кубик для выбора категории. Одна и та же категория может быть отключена несколько раз подряд.", "card.spotty-memory.cost": "Сбросить карту бонусного времени", "card.lemon-phylactery.title": "Лимонного амулета", "card.lemon-phylactery.description": "Перед тем как задать следующий вопрос, сыщики должны найти лимон и прикрепить его к верхнему слою своей одежды или к коже. Если в какой-то момент один из этих лимонов перестанет касаться сыщика, вы получите {30|45|60} минут. Это проклятие нельзя сыграть в финале раунда.", "card.lemon-phylactery.cost": "Сбросить карту усиления", "card.drained-brain.title": "Пустой головы", "card.drained-brain.description": "Выберите три вопроса в разных категориях. Сыщики не могут задавать эти вопросы до конца раунда.", "card.drained-brain.cost": "Сбросить все карты с руки", "card.ransom-note.title": "Анонимной записки", "card.ransom-note.description": "Следующий вопрос, который зададут сыщики, должен быть составлен из слов и букв, вырезанных из любого печатного материала. Вопрос должен быть связным и содержать не менее 5 слов.", "card.ransom-note.cost": "Написать «анонимка» из вырезанных букв (не используя эту карту)", "card.gamblers-feet.title": "Хождения по костям", "card.gamblers-feet.description": "В течение следующих {20|40|60} минут сыщики должны бросать кубик каждый раз перед тем как сделать несколько шагов. Выпавшее число определяет число шагов, которое они могут сделать в любом направлении.", "card.gamblers-feet.cost": "Бросьте кубик; если выпало чётное число, это проклятие не срабатывает"
},
    Ya = {
        "lang.ru": "RU", "lang.en": "EN", "shuffle-deck": "Shuffle Deck", "shuffle-deck-confirm": "Are you sure you want to shuffle the deck?", "save-state": "Save State", "save-state-success": "State copied to clipboard", "save-state-error": "Error copying state", "load-state": "Load State", "load-state-info": "Paste state below", "load-state-error": "Error loading state", map: "Open Map", rules: "General Rules", curses: "Curses", "switch-to-en": "Switch to English", "switch-to-ru": "Русская версия", undo: "Undo Action", redo: "Redo Action", "expand-1-confirm": "Do you want to play this card? It will increase your hand limit by 1.", "casting-cost": "Casting cost:", "curse-of": "Curse of", min: "min", "size.small": "S", "size.medium": "M", "size.large": "L", intro: '<p>This is the Hiders deck for Jet Lag The Game: Hide and Seek. <a href="https://jetlag.denull.ru/en/rules" target="_blank">What is it?</a></p>', "pull-to-draw": "Pull down to draw a card", "tap-or-pull": `Tap to collapse or
pull up to play/discard`, "overlimit-notice": "Your hand is over the limit. You should play or discard some cards immediately.", duplicate: "Duplicate This Card", "in-hand": "In Hand:", "time-bonuses": "Time Bonuses:", "card.time.title": "Time Bonus", "card.randomize.title": "Randomize Question", "card.randomize.description": `Play instead of answering a question.
A new unasked question from the same category is chosen, at random, which you answer instead.`, "card.veto.title": `Veto
Question`, "card.veto.description": `Play instead of answering a question.
No answer is given, and no reward is earned.`, "card.duplicate.title": "Duplicate Another Card", "card.duplicate.description": `Play this card as a copy of any other card in your hand.
This may be used to duplicate a time bonus at the end of your round.`, "card.move.title": "Move", "card.move.description": `Discard your hand and send the hiders the location of your transit station.
This card grants {10|20|60} minute period to establish a new hiding zone somewhere else on the game map. The seekers are frozen and your hiding timer is paused until this new hiding period has concluded. This card cannot be played during the endgame.`, "card.draw-2.title": "Discard 1, Draw 2", "card.draw-2.description": "Discard one other card from your hand. Then, draw and keep two cards from the hider deck.", "card.draw-3.title": "Discard 2, Draw 3", "card.draw-3.description": "Discard two other cards from your hand. Then, draw and keep three cards from the hider deck.", "card.expand-1.title": "Draw 1, Expand 1", "card.expand-1.description": `Draw one card from the hider deck.
For the rest of the round, you can hold one additional card in your hand.`, "card.zoologist.title": "The Zoologist", "card.zoologist.description": "Take a photo of a wild fish, bird, mammal, reptile, amphibian or bug. The seeker(s) must take a picture of a wild animal in the same category before asking another question.", "card.zoologist.cost": "A photo of an animal", "card.unguided-tourist.title": "The Unguided Tourist", "card.unguided-tourist.description": "Send the seeker(s) an unzoomed google Street View image from a street within 150m of where they are now. The shot has to be parallel to the horizon and include at least one human-built structure other than a road. Without using the internet for research, they must find what you sent them in real life before they can use transportation or ask another question. They must send a picture the hiders for verification.", "card.unguided-tourist.cost": "Seeker(s) must be outside", "card.endless-tumble.title": "The Endless Tumble", "card.endless-tumble.description": "Seekers Must roll a die at least 30m and have it land on a 5 or a 6 before they can ask another question. The die must roll the full distance, unaided, using only the momentum from the initial throw and gravity to travel the 30m. If the seekers accidentally hit someone with a die you are awarded a {10|20|30} minute bonus", "card.endless-tumble.cost": "Roll a die. If its 5 or 6 this card has no effect", "card.hidden-hangman.title": "The Hidden Hangman", "card.hidden-hangman.description": "Before asking another question or boarding another form of transportation, seeker(s) must be the hider(s) in game of hangman.", "card.hidden-hangman.cost": "Discard 2 cards", "card.overflowing-chalice.title": "The Overflowing Chalice", "card.overflowing-chalice.description": "For the next three questions, you may draw (not keep) an additional card when drawing from the hider deck", "card.overflowing-chalice.cost": "Discard a card", "card.mediocre-travel-agent.title": "The Mediocre Travel Agent", "card.mediocre-travel-agent.description": "Choose any publicly-accessible place within {400|400|500}m of the seeker(s) current location. They cannot currently be on transit. They must go there, and spend at least {5|5|10} minutes there, before asking another question. They must send you at least three photos of them enjoying their vacation, and procure an object to bring you as souvenir. If this souvenir is lost before they can get to you, you are awarded and extra {30|45|60} minutes.", "card.mediocre-travel-agent.cost": "Their vacation destination must be further from you than their current location", "card.luxury-car.title": "The Luxury Car", "card.luxury-car.description": "Take a photo of a car. The seekers must take a photo of a more expensive car before asking another question.", "card.luxury-car.cost": "A photo of a car", "card.u-turn.title": "The U-Turn", "card.u-turn.description": "Seeker(s) must disembark their current mode of transportation at the next station (as long as that station is served by another form of transit in the next {0.5|0.5|1} hours", "card.u-turn.cost": "Seekers must be heading the wrong way. (Their next station is further from you then they are.)", "card.bridge-troll.title": "The Bridge Troll", "card.bridge-troll.description": "The seekers must ask their next question from under a bridge", "card.bridge-troll.cost": "Seekers Must be at least {0.3|1.5|9.1}km from you", "card.water-weight.title": "Water Weight", "card.water-weight.description": "Seeker(s) must acquire and carry at least 2 liters of liquid per seeker for the rest of your run. They cannot ask another question until they have acquired the liquid. The water may be distributed between seeker as they see fit. If the liquid is lost or abandoned at any point the hider is awarded a {30|30|60} minute bonus", "card.water-weight.cost": "Seekers must be within 300 meters of a body of water", "card.jammed-door.title": "The Jammed Door", "card.jammed-door.description": "For the next {0.5|1|3} hours, whenever the seeker(s) want to pass through a doorway into a building, business, train, or other vehicle they must first roll 2 dice. If they do not roll a 7 or higher they cannot enter that space (including through other doorways). Any given doorway can be reattempted after {5|10|15} minutes.", "card.jammed-door.cost": "Discard 2 cards", "card.cairn.title": "The Cairn", "card.cairn.description": "You have one attempt to stack as many rocks on top of each other as you can in a freestanding tower. Each rock may only touch one other rock. Once you have added a rock to the tower it may not be removed. Before adding another rock, the tower must stand for at least 5 seconds. If at any point any rock other then the base rock touches the ground, your tower has fallen. Once your tower falls tell the seekers how many rocks high your tower was when it last stood for five seconds. The seekers must then construct a rock tower of the same number of rocks, under the same parameters before asking another question. If their tower falls they must restart. The rocks must be found in nature and both teams must disperse the rocks after building.", "card.cairn.cost": "Build a rock tower", "card.urban-explorer.title": "The Urban Explorer", "card.urban-explorer.description": "For the rest of the run seekers cannot ask question when they are on transit or in a train station", "card.urban-explorer.cost": "Discard 2 cards", "card.impressionable-consumer.title": "The Impressionable Consumer", "card.impressionable-consumer.description": "Seekers must enter and gain admission (if applicable) to a location or buy a product that they saw an advertisement for before asking another question. This advertisement musts be found out in the world and must be at least 30m from the product or location itself.", "card.impressionable-consumer.cost": "The seekers next question is free", "card.egg-partner.title": "The Egg Partner", "card.egg-partner.description": "Seeker(s) must acquire an egg before asking another question. This egg is now treated as an official team member of the seekers. If any team members are abandoned or killed (defined as crack in the eggs case) before the end of your run you are awarded an extra {30|45|60} minutes. This course cannot be played during the endgame.", "card.egg-partner.cost": "Discard two cards", "card.distant-cuisine.title": "The Distant Cuisine", "card.distant-cuisine.description": "Find a restaurant within your zone that explicitly serves food from a specific foreign country. The seekers must visit a restaurant serving food from a country that is equal or great distance away before asking another question", "card.distant-cuisine.cost": "You must be at the restaurant", "card.right-turn.title": "The Right Turn", "card.right-turn.description": "For the next {20|40|60} minutes the seekers can only turn right at any street intersection. If at any point they find themselves in dead end where they cannot continue forward or turn right for another 300m they must do a full 180. A right turn is defined as a road at any angle that veers to the right of the seekers", "card.right-turn.cost": "Discard a card", "card.labyrinth.title": "The Labyrinth", "card.labyrinth.description": "Spend up to {10|20|30} minutes drawing a solvable maze and send a photo of it to the seekers. You cannot use the internet to research maze designs. The seekers musts solve the maze before asking another question.", "card.labyrinth.cost": "Draw a maze", "card.bird-guide.title": "The Bird Guide", "card.bird-guide.description": "You have one chance to film a bird for as long as possible. Up to {5|10|15} minutes straight, if at any point the bird leaves the frame your timer is stopped. The seekers must then film a bird for the same amount of time or longer", "card.bird-guide.cost": "Film a bird", "card.spotty-memory.title": "Spotty Memory", "card.spotty-memory.description": "For the rest of the run, one random category of questions will be disabled at all times. After this curse is played seeker(s) must roll a die to determine the category of questions to be disabled. The catergy remain disabled until the next question is asked at which point a die is rolled again to choose a category. The same category can be disabled multiple times in a row", "card.spotty-memory.cost": "Discard a time bonus card", "card.lemon-phylactery.title": "The Lemon Phylactery", "card.lemon-phylactery.description": "Before asking another question the seeker(s) must each find a lemon and affix it to their outermost layer of their clothes or skin. If at any point one of these lemons is no longer touching a seeker you are awarded {30|45|60} minutes. This curse cannot be played during the endgame.", "card.lemon-phylactery.cost": "Discard a powerup card", "card.drained-brain.title": "The Drained Brain", "card.drained-brain.description": "Choose three questions in different categories. The seekers cannot ask those questions for the rest of the run.", "card.drained-brain.cost": "Discard your hand", "card.ransom-note.title": "The Ransom Note", "card.ransom-note.description": "The next question that the seekers ask must be composed of words and letters cut out of any printed material. The question must be coherent and include at least 5 words.", "card.ransom-note.cost": 'Spell out "Ransom Note" as a ransom note (without using this card)', "card.gamblers-feet.title": "The Gambler's Feet", "card.gamblers-feet.description": "For the next {20|40|60} minutes seekers must roll a die before they take any steps in any direction. They may take that many steps before rolling again", "card.gamblers-feet.cost": "Roll a die if its even number this curse has no effect"
    },
    Ua = { ru: Ha, en: Ya },
    // Wa = () => {
    //     return "en";
    //     // const e = window.location.pathname;
    //     // if (e.startsWith("/ru/")) return "ru";
    //     // if (e.startsWith("/en/")) return "en";
    //     // const t = navigator.language.toLowerCase();
    //     // if (t.startsWith("ru")) return "ru";
    //     // if (t.startsWith("en")) return "en";
    //     // const r = navigator.languages.map(n => n.toLowerCase());
    //     // return r.some(n => n.startsWith("ru")) ? "ru" : r.some(n => n.startsWith("en")) ? "en" : "ru"
    // },
    d = de({ lang: "en", touch: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, deck: zt.Default(), hand: [], discarded: [], history: { actions: [], index: 0 }, gameSize: 1, handLimit: 6 }),
    Va = () => d.hand.reduce((e, { card: t }) => { var r; return e + (t.type === "time" ? ((r = t.durations) == null ? void 0 : r[d.gameSize]) ?? 0 : 0) }, 0);

function b(e, t) { return Ua[d.lang][e] || (t === void 0 ? e : t) }
const Ga = 1e3;

function st(e) { d.history.actions = d.history.actions.slice(0, d.history.index + 1), d.history.actions.push(e), d.history.index = d.history.actions.length, d.history.actions.length > Ga && (d.history.actions.shift(), d.history.index--) }

function nr() { return d.history.index > 0 }

function ar() { return d.history.index < d.history.actions.length }

function Ja() {
    if (!nr()) return;
    d.history.index--;
    const e = d.history.actions[d.history.index];
    switch (e.type) {
        case "draw":
            { const r = d.hand[d.hand.length - 1].card; d.hand.pop(), d.deck.restore(r); break }
        case "duplicate":
            { d.hand.pop(), e.duplicateCard && d.hand.splice(e.index, 0, e.duplicateCard); break }
        case "discard":
            const t = d.discarded.pop();
            d.hand.splice(e.index, 0, { uid: Math.random(), card: t, y0: 0, discarded: !1 }), t.id === "expand-1" && e.played && d.handLimit--;
            break;
        case "shuffle":
            _r(e.before);
            break
    }
}

function Ka() {
    if (!ar()) return;
    d.history.index++;
    const e = d.history.actions[d.history.index - 1];
    switch (e.type) {
        case "draw":
            d.deck.draw(e.card.card), d.hand.push(e.card);
            break;
        case "duplicate":
            d.hand.push(e.card), e.duplicateCard && d.hand.splice(e.index, 1);
            break;
        case "discard":
            const t = d.hand.splice(e.index, 1)[0];
            t.card.id === "expand-1" && e.played && d.handLimit++, d.discarded.push(t.card);
            break;
        case "shuffle":
            ct();
            break
    }
}

function Nr(e) { let t = 0; for (let r = 0; r < e; r++) d.hand[r].discarded || t++; return t }

function ct() {
    if (window.confirm(b("shuffle-deck-confirm"))) {
        const e = pr();
        d.deck = zt.Default(), d.hand = [], d.discarded = [], st({ type: "shuffle", before: e })
    }
}

function Xa(e) {
    if (navigator.clipboard) return navigator.clipboard.writeText(e); {
        const t = document.createElement("textarea");
        t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
        try { if (!document.execCommand("copy")) throw new Error("Failed") } catch (r) { throw r } finally { document.body.removeChild(t) }
    }
}

function pr() { return JSON.stringify({ deck: d.deck.cards, hand: d.hand.filter(({ discarded: e }) => !e).map(({ card: e }) => e), discarded: d.discarded, gameSize: d.gameSize, handLimit: d.handLimit }) }

function _r(e) {
    const { deck: t, hand: r, discarded: n, handLimit: a, gameSize: i } = JSON.parse(e);
    d.deck.cards = t, d.gameSize = i === void 0 ? 1 : i, d.hand = r.map(o => ({ uid: Math.random(), card: o, y0: 0, discarded: !1 }));
    for (let o = 0; o < d.hand.length; o++) d.hand[o].y0 = 0;
    d.discarded = n, d.handLimit = a || 6
}
async function Gt() { try { await Xa(pr()), alert(b("save-state-success")) } catch { alert(b("save-state-error")) } }

function Jt() { const e = prompt(b("load-state-info")); if (e !== null) try { _r(e) } catch { alert(b("load-state-error")) } }
var Za = R("<span> </span>"),
    Qa = R('<span class="text__durations-span svelte-olrowu"></span>');

function Kt(e, t) {
    At(t, !0);
    const r = ue(() => t.text.split(/{([^}]+)}/));
    var n = Cr(),
        a = Ee(n);
    wt(a, 17, () => v(r), tr, (i, o, u) => {
        var c = Cr(),
            l = Ee(c); {
            var p = s => {
                var f = xa();
                G(() => O(f, v(o))), L(s, f)
            },
                h = s => {
                    var f = Qa();
                    wt(f, 21, () => v(o).split("|"), tr, (m, C, S) => {
                        var E = Za();
                        const M = ue(() => ["small", "medium", "large"][S]);
                        E.__pointerdown = g => { g.stopPropagation(), d.gameSize = S };
                        var P = w(E);
                        G(g => { bt(E, 1, `text__duration is-${v(M)}${d.gameSize === S ? " is-active" : ""}`, "svelte-olrowu"), O(P, `${g ?? ""} ${v(C) ?? ""}`) }, [() => b(`size.${v(M)}`)]), L(m, E)
                    }), L(s, f)
                };
            V(l, s => { u % 2 === 0 ? s(p) : s(h, !1) })
        }
        L(i, c)
    }), L(e, n), Ct()
}
vr(["pointerdown"]);
var $a = R('<img class="card__image svelte-2cgj1n"> <h2 class="card__title svelte-2cgj1n"> </h2>', 1),
    ei = R('<div><div class="card__duration-size svelte-2cgj1n"> </div> <div class="card__duration-body svelte-2cgj1n"><div class="card__duration-value svelte-2cgj1n"> </div> <div class="card__duration-label svelte-2cgj1n"> </div></div></div>'),
    ti = R('<div class="card__durations svelte-2cgj1n"></div>'),
    ri = R('<p class="card__description svelte-2cgj1n"><!></p>'),
    ni = R(`<h2 class="card__curse-name svelte-2cgj1n"> </h2> <div class="card__curse-description svelte-2cgj1n"><!></div> <div class="card__footer svelte-2cgj1n"><div class="card__curse-cost svelte-2cgj1n"> <!></div> <a class="card__curse-info svelte-2cgj1n" target="_blank" aria-label="Info"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 416.979 416.979" xml:space="preserve" class="svelte-2cgj1n"><g class="svelte-2cgj1n"><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
                c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
                c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
                c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
                c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z" class="svelte-2cgj1n"></path></g></svg></a></div>`, 1),
    ai = R("<!> <!> <!> <!>", 1),
    ii = R('<div class="card__bottom-hint svelte-2cgj1n"> </div>'),
    oi = R('<div class="card__bottom svelte-2cgj1n"><!></div>'),
    si = R('<div><div class="card__body svelte-2cgj1n"><!> <!></div> <div class="card__back svelte-2cgj1n"><div class="card__back-body svelte-2cgj1n"></div></div></div>');

function zr(e, t) {
    At(t, !0);
    let r = je(t, "active", 3, !1),
        n = je(t, "flipped", 3, !1),
        a = je(t, "animated", 3, !1),
        i = je(t, "canDuplicate", 3, !1),
        o = je(t, "y", 3, 0),
        u = je(t, "scale", 3, 1),
        c = je(t, "height", 15);
    const l = t.y0 === void 0 ? o() : t.y0;
    let p = Y(de(l)),
        h = Y(de(t.y0 === void 0 ? n() : !0));
    Qt(() => { T(p, o()), setTimeout(() => { T(h, n()) }, 500) });
    let s = null,
        f = !1;

    function m(k) { s = [k.clientX, k.clientY], f = !0 }

    function C(k) {
        if (s) {
            const j = [k.clientX, k.clientY],
                ee = j[0] - s[0],
                Z = j[1] - s[1];
            Math.sqrt(ee * ee + Z * Z) > 10 && (f = !1)
        }
    }

    function S(k) {
        var j;
        f && ((j = t.onClick) == null || j.call(t)), s = null
    }
    var E = si();
    let M;
    var P = w(E);
    P.__pointerdown = m, P.__pointermove = C, P.__pointerup = S;
    var g = w(P); {
        var A = k => {
            var j = ai(),
                ee = Ee(j); {
                var Z = z => {
                    var te = $a(),
                        _ = Ee(te),
                        y = D(_, 2),
                        x = w(y);
                    G((N, W) => { Vt(_, "src", `assets/${t.card.id}.svg`), Vt(_, "alt", N), O(x, W) }, [() => b(`card.${t.card.type == "time" ? "time" : t.card.id}.title`), () => b(`card.${t.card.type == "time" ? "time" : t.card.id}.title`)]), L(z, te)
                };
                V(ee, z => {
                    (t.card.type === "time" || t.card.type === "powerup") && z(Z)
                })
            }
            var B = D(ee, 2); {
                var Ce = z => {
                    var te = ti();
                    wt(te, 21, () => t.card.durations, tr, (_, y, x) => {
                        var N = ei();
                        const W = ue(() => ["small", "medium", "large"][x]);
                        N.__pointerdown = pe => { pe.stopPropagation(), d.gameSize = x };
                        var ce = w(N),
                            ke = w(ce),
                            De = D(ce, 2),
                            ve = w(De),
                            ze = w(ve),
                            U = D(ve, 2),
                            le = w(U);
                        G((pe, Ke) => { bt(N, 1, `card__duration is-${v(W)}${x === d.gameSize ? " is-active" : ""}`, "svelte-2cgj1n"), O(ke, pe), O(ze, v(y)), O(le, Ke) }, [() => b(`size.${v(W)}`), () => b("min")]), L(_, N)
                    }), L(z, te)
                };
                V(B, z => { t.card.type === "time" && z(Ce) })
            }
            var ye = D(B, 2); {
                var se = z => {
                    var te = ri(),
                        _ = w(te);
                    const y = ue(() => b(`card.${t.card.id}.description`));
                    Kt(_, { get text() { return v(y) } }), L(z, te)
                };
                V(ye, z => { t.card.type === "powerup" && z(se) })
            }
            var we = D(ye, 2); {
                var be = z => {
                    var te = ni(),
                        _ = Ee(te),
                        y = w(_),
                        x = D(_, 2),
                        N = w(x);
                    const W = ue(() => b(`card.${t.card.id}.description`));
                    Kt(N, { get text() { return v(W) } });
                    var ce = D(x, 2),
                        ke = w(ce),
                        De = w(ke),
                        ve = D(De);
                    const ze = ue(() => b(`card.${t.card.id}.cost`));
                    Kt(ve, { get text() { return v(ze) } });
                    var U = D(ke, 2);
                    G((le, pe, Ke) => { O(y, `${le ?? ""} ${pe ?? ""}`), O(De, `${Ke ?? ""} `), Vt(U, "href", `https://jetlag.denull.ru/en/rules/curses#${t.card.id}`) }, [() => b("curse-of"), () => b(`card.${t.card.id}.title`), () => b("casting-cost")]), L(z, te)
                };
                V(we, z => { t.card.type === "curse" && z(be) })
            }
            L(k, j)
        };
        V(g, k => { t.card && k(A) })
    }
    var F = D(g, 2); {
        var J = k => {
            var j = oi(),
                ee = w(j); {
                var Z = (B, Ce) => {
                    {
                        var ye = se => {
                            var we = ii(),
                                be = w(we);
                            G(z => O(be, z), [() => b("tap-or-pull")]), L(se, we)
                        };
                        V(B, se => { d.hand.length < 3 && se(ye) }, Ce)
                    }
                };
                V(ee, B => { i(), B(Z, !1) })
            }
            L(k, j)
        };
        V(F, k => { r() && k(J) })
    }
    G(() => { bt(E, 1, `card${r() ? " is-active" : ""}${v(h) ? " is-flipped" : ""}${a() ? " is-animated" : ""}`, "svelte-2cgj1n"), M = pn(E, "", M, { "--card-y": v(p), "--card-scale": u() }) }), yt("transitionend", E, function (...k) {
        var j;
        (j = t.onTransitionEnd) == null || j.apply(this, k)
    }), mn(E, "clientHeight", c), L(e, E), Ct()
}
vr(["pointerdown", "pointermove", "pointerup"]);
var ci = R('<div class="menu-trigger"><!></div> <div><!></div>', 1);

function li(e, t) {
    let r = Y(!1),
        n = Y(void 0),
        a = Y(de({ x: 0, y: 0 }));

    function i(s) {
        s == null || s.stopPropagation();
        const f = v(n).getBoundingClientRect();
        T(a, { x: f.right, y: f.bottom }, !0), T(r, !0)
    }
    var o = ci();
    yt("click", Xr, () => T(r, !1));
    var u = Ee(o),
        c = w(u);
    qr(c, () => t.trigger, () => i), Fa(u, s => T(n, s), () => v(n));
    var l = D(u, 2);
    let p;
    var h = w(l);
    qr(h, () => t.children), G(() => { bt(l, 1, `menu ${v(r) ? "is-active" : ""}`), p = pn(l, "", p, { "--anchor-x": v(a).x, "--anchor-y": v(a).y }) }), L(e, o)
}
var di = R('<button class="btn-menu svelte-4qc5dm" aria-label="Menu"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L20 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M4 6L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>'),
    ui = (e, t) => { T(t, null), Ja() },
    fi = R('<button class="svelte-4qc5dm"> </button>'),
    hi = (e, t) => { T(t, null), Ka() },
    vi = R('<button class="svelte-4qc5dm"> </button>'),
    pi = R("<!> <!> <hr>", 1),
    _i = R('<button class="svelte-4qc5dm"> </button>'),
    mi = R('<button class="svelte-4qc5dm"> </button>'),
    gi = R('<button class="svelte-4qc5dm"> </button> <hr> <!> <button class="svelte-4qc5dm"> </button> <button class="svelte-4qc5dm"> </button> <hr> <a href="https://taibeled.github.io/JetLagHideAndSeek/" target="_blank"> </a> <a href="rules" target="_blank"> </a> <a href="rules/curses" target="_blank"> </a> <hr> <!> <!>', 1),
    yi = R('<div class="intro svelte-4qc5dm"><!></div>'),
    wi = R('<div class="pull-to-draw svelte-4qc5dm"><p> </p></div>'),
    bi = R('<div class="info svelte-4qc5dm"><div class="info__buttons svelte-4qc5dm"><!></div> <div class="info__counts"> </div> <div class="info__time"> </div></div> <div class="hand svelte-4qc5dm"><!> <!> <!> <!></div>', 1);

function ki(e, t) {
    At(t, !0);
    let r = Y(0),
        n = Y(0),
        a = Y(null),
        i = null,
        o = Y(0),
        u = Y(!1),
        c = Y(!1);

    function l(_, y = 0) { d.hand.push({ uid: Math.random(), card: _, y0: y - v(n), discarded: !1 }), T(a, d.hand.length - 1) }

    function p(_) { i = [_.clientX, _.clientY], T(u, !1), T(c, !1) }

    function h(_) {
        if (i) {
            const y = [_.clientX, _.clientY];
            y[0] - i[0];
            const x = y[1] - i[1];
            T(o, x * .9)
        }
    }

    function s(_) {
        if (i = null, T(u, !0), T(c, !0), setTimeout(() => { T(o, 0) }, 0), v(o) > 80) {
            T(c, !1);
            const y = d.deck.draw();
            y && (l(y, v(o)), st({ type: "draw", card: d.hand[d.hand.length - 1] }))
        } else v(a) !== null && v(o) < -80 && (d.hand[v(a)].discarded = !0, T(a, null))
    }

    function f(_) { i = null, T(u, !0), T(c, !0), setTimeout(() => { T(o, 0) }, 0) }

    function m() { return d.hand.filter(({ discarded: _ }) => !_).length }

    function C(_) { const y = Nr(_); if (d.hand[_].discarded) return -v(n); if (v(a) === null) { const x = (v(r) - 20) / Math.max(6, m()); return v(r) - x * (m() - y) } return v(a) === _ ? 20 + Math.min(0, v(o)) : v(r) - 10 * (m() - y) - 10 }

    function S(_) { const y = Nr(_); return v(a) === null || v(a) === _ ? 1 : 1 - .01 * (d.hand.length - y) }

    function E(_) { d.hand[_].discarded || T(a, v(a) === null ? _ : null, !0) }
    Qt(() => {
        const _ = pr();
        window.localStorage.setItem("state", _), window.localStorage.setItem("history", JSON.stringify(d.history))
    }), Qt(() => {
        const _ = window.location.pathname,
            // y = `/${d.lang}${_.replace(/^\/(?:ru|en)/, "")}`;
            // y = `/${_.replace(/^\/(?:ru|en)/, "")}`;
            y = _;
        _ !== y && window.history.replaceState(null, "", y)
    });
    const M = window.localStorage.getItem("state"),
        P = window.localStorage.getItem("history");
    if (M) try { _r(M) } catch (_) { console.error(_) }
    if (P) try { d.history = JSON.parse(P) } catch (_) { console.error(_) }
    var g = bi(),
        A = Ee(g),
        F = w(A),
        J = w(F);
    li(J, {
        trigger: (y, x = Fr) => {
            var N = di();
            N.__click = function (...W) {
                var ce;
                (ce = x()) == null || ce.apply(this, W)
            }, L(y, N)
        },
        children: (y, x) => {
            var N = gi(),
                W = Ee(N);
            W.__click = function (...H) { ct == null || ct.apply(this, H) };
            var ce = w(W),
                ke = D(W, 4); {
                var De = H => {
                    var ie = pi(),
                        qe = Ee(ie); {
                        var Oe = Re => {
                            var Fe = fi();
                            Fe.__click = [ui, a];
                            var Ft = w(Fe);
                            G(jt => O(Ft, jt), [() => b("undo")]), L(Re, Fe)
                        };
                        V(qe, Re => { nr() && Re(Oe) })
                    }
                    var Ot = D(qe, 2); {
                        var Rt = Re => {
                            var Fe = vi();
                            Fe.__click = [hi, a];
                            var Ft = w(Fe);
                            G(jt => O(Ft, jt), [() => b("redo")]), L(Re, Fe)
                        };
                        V(Ot, Re => { ar() && Re(Rt) })
                    }
                    L(H, ie)
                };
                V(ke, H => {
                    (nr() || ar()) && H(De)
                })
            }
            var ve = D(ke, 2);
            ve.__click = function (...H) { Gt == null || Gt.apply(this, H) };
            var ze = w(ve),
                U = D(ve, 2);
            U.__click = function (...H) { Jt == null || Jt.apply(this, H) };
            var le = w(U),
                pe = D(U, 4),
                Ke = w(pe),
                mr = D(pe, 2),
                gn = w(mr),
                gr = D(mr, 2),
                yn = w(gr),
                yr = D(gr, 4); {
                var wn = H => {
                    var ie = _i();
                    ie.__click = () => d.lang = "en";
                    var qe = w(ie);
                    G(Oe => O(qe, Oe), [() => b("switch-to-en")]), L(H, ie)
                };
                V(yr, H => { d.lang === "ru" && H(wn) })
            }
            var bn = D(yr, 2); {
                var kn = H => {
                    var ie = mi();
                    ie.__click = () => d.lang = "ru";
                    var qe = w(ie);
                    G(Oe => O(qe, Oe), [() => b("switch-to-ru")]), L(H, ie)
                };
                V(bn, H => { d.lang === "en" && H(kn) })
            }
            G((H, ie, qe, Oe, Ot, Rt) => { O(ce, H), O(ze, ie), O(le, qe), O(Ke, Oe), O(gn, Ot), O(yn, Rt) }, [() => b("shuffle-deck"), () => b("save-state"), () => b("load-state"), () => b("map"), () => b("rules"), () => b("curses")]), L(y, N)
        }
    });
    var k = D(F, 2),
        j = w(k),
        ee = D(k, 2),
        Z = w(ee),
        B = D(A, 2);
    B.__pointerdown = _ => { d.touch && _.currentTarget.setPointerCapture(_.pointerId), p(_) }, B.__pointermove = h, B.__pointerup = s;
    var Ce = w(B); {
        var ye = _ => {
            var y = yi(),
                x = w(y);
            Ia(x, () => b("intro")), L(_, y)
        };
        V(Ce, _ => { d.hand.length === 0 && _(ye) })
    }
    var se = D(Ce, 2); {
        var we = _ => {
            var y = wi(),
                x = w(y),
                N = w(x);
            G(W => O(N, W), [() => b("pull-to-draw")]), L(_, y)
        };
        V(se, _ => {
            (d.hand.length === 0 || v(a) === null) && _(we)
        })
    }
    var be = D(se, 2);
    wt(be, 19, () => d.hand, ({ uid: _, card: y, y0: x, discarded: N }) => _, (_, y, x) => {
        let N = () => v(y).card,
            W = () => v(y).y0,
            ce = () => v(y).discarded;
        const ke = ue(() => v(a) === v(x)),
            De = ue(() => d.hand.findIndex(({ card: U }) => U.id === "duplicate") !== -1 && N().id !== "duplicate"),
            ve = ue(() => C(v(x))),
            ze = ue(() => S(v(x)));
        zr(_, {
            get card() { return N() },
            get active() { return v(ke) },
            flipped: !1,
            get canDuplicate() { return v(De) },
            get y0() { return W() },
            get y() { return v(ve) },
            get scale() { return v(ze) },
            get animated() { return v(u) },
            onClick: () => E(v(x)),
            onTransitionEnd: () => {
                if (d.hand[v(x)].y0 = C(v(x)), ce()) {
                    const U = d.hand[v(x)].card;
                    let le = !1;
                    U.id === "expand-1" && window.confirm(b("expand-1-confirm")) && (d.handLimit++, le = !0), d.discarded.push(U), d.hand.splice(v(x), 1), st({ type: "discard", index: v(x), played: le })
                }
            },
            onDuplicate: () => {
                const U = d.hand.findIndex(({ card: pe }) => pe.id === "duplicate");
                let le = null;
                U !== -1 && (le = d.hand[U], d.hand.splice(U, 1)), l(N(), 0), st({ type: "duplicate", index: U, card: d.hand[d.hand.length - 1], duplicateCard: le })
            }
        })
    });
    var z = D(be, 2);
    const te = ue(() => v(o) - v(n));
    zr(z, { flipped: !0, get animated() { return v(c) }, get y() { return v(te) }, get height() { return v(n) }, set height(_) { T(n, _, !0) } }), G((_, y, x, N) => { O(j, `${_ ?? ""} ${d.hand.length ?? ""} / ${d.handLimit ?? ""}`), O(Z, `${y ?? ""} ${x ?? ""} ${N ?? ""}`) }, [() => b("in-hand"), () => b("time-bonuses"), Va, () => b("min")]), yt("pointercancel", B, f), yt("pointerleave", B, f), mn(B, "clientHeight", _ => T(r, _)), L(e, g), Ct()
}
vr(["click", "pointerdown", "pointermove", "pointerup"]);
Ta(ki, { target: document.getElementById("app") });