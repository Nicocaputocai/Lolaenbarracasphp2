if (function(t) {
	"use strict";
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
		"use strict";
		        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipetp.defaults, e), this.each(function() {
                var n = t(this),
                    r = n.data(C);
                r || (r = new i(this, e), n.data(C, r))
            })
        }

        function i(e, i) {
            function n(e) {
                if (!(de() || t(e.target).closest(i.excludedElements, Ye).length > 0)) {
                    var n, r = e.originalEvent ? e.originalEvent : e,
                        s = r.touches,
                        a = s ? s[0] : r;
                    return We = x, s ? qe = s.length : e.preventDefault(), Ie = 0, De = null, He = null, Fe = 0, Ne = 0, je = 0, Be = 1, Xe = 0, Ue = fe(), Ve = _e(), oe(), !s || qe === i.fingers || i.fingers === y || V() ? (ue(0, a), Ge = ke(), 2 == qe && (ue(1, s[1]), Ne = je = we(Ue[0].start, Ue[1].start)), (i.swipeStatus || i.pinchStatus) && (n = I(r, We))) : n = !1, n === !1 ? (We = P, I(r, We), n) : (i.hold && (ti = setTimeout(t.proxy(function() {
                        Ye.trigger("hold", [r.target]), i.hold && (n = i.hold.call(Ye, r, r.target))
                    }, this), i.longTapThreshold)), he(!0), null)
                }
            }

            function A(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (We !== T && We !== P && !le()) {
                    var n, r = e.touches,
                        s = r ? r[0] : e,
                        a = ce(s);
                    if (Qe = ke(), r && (qe = r.length), i.hold && clearTimeout(ti), We = b, 2 == qe && (0 == Ne ? (ue(1, r[1]), Ne = je = we(Ue[0].start, Ue[1].start)) : (ce(r[1]), je = we(Ue[0].end, Ue[1].end), He = be(Ue[0].end, Ue[1].end)), Be = xe(Ne, je), Xe = Math.abs(Ne - je)), qe === i.fingers || i.fingers === y || !r || V()) {
                        if (De = Se(a.start, a.end), X(t, De), Ie = Te(a.start, a.end), Fe = ye(), ge(De, Ie), (i.swipeStatus || i.pinchStatus) && (n = I(e, We)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                            var o = !0;
                            if (i.triggerOnTouchLeave) {
                                var l = Oe(this);
                                o = Ce(a.end, l)
                            }!i.triggerOnTouchEnd && o ? We = z(b) : i.triggerOnTouchLeave && !o && (We = z(T)), (We == P || We == T) && I(e, We)
                        }
                    } else We = P, I(e, We);
                    n === !1 && (We = P, I(e, We))
                }
            }

            function L(t) {
                var e = t.originalEvent ? t.originalEvent : t,
                    n = e.touches;
                return n && n.length ? (ae(), !0) : (le() && (qe = $e), Qe = ke(), Fe = ye(), N() || !F() ? (We = P, I(e, We)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && We === b ? (t.preventDefault(), We = T, I(e, We)) : !i.triggerOnTouchEnd && Z() ? (We = T, D(e, We, f)) : We === b && (We = P, I(e, We)), he(!1), null)
            }

            function M() {
                qe = 0, Qe = 0, Ge = 0, Ne = 0, je = 0, Be = 1, oe(), he(!1)
            }

            function R(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                i.triggerOnTouchLeave && (We = z(T), I(e, We))
            }

            function E() {
                Ye.unbind(Le, n), Ye.unbind(ze, M), Ye.unbind(Me, A), Ye.unbind(Re, L), Ee && Ye.unbind(Ee, R), he(!1)
            }

            function z(t) {
                var e = t,
                    n = B(),
                    r = F(),
                    s = N();
                return !n || s ? e = P : !r || t != b || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !r && t == T && i.triggerOnTouchLeave && (e = P) : e = T, e
            }

            function I(t, e) {
                var i, n = t.touches;
                return U() || q() || Y() || V() ? ((U() || q()) && (i = D(t, e, c)), (Y() || V()) && i !== !1 && (i = D(t, e, p))) : re() && i !== !1 ? i = D(t, e, g) : se() && i !== !1 ? i = D(t, e, m) : ne() && i !== !1 && (i = D(t, e, f)), e === P && M(t), e === T && (n ? n.length || M(t) : M(t)), i
            }

            function D(e, n, h) {
                var u;
                if (h == c) {
                    if (Ye.trigger("swipeStatus", [n, De || null, Ie || 0, Fe || 0, qe, Ue]), i.swipeStatus && (u = i.swipeStatus.call(Ye, e, n, De || null, Ie || 0, Fe || 0, qe, Ue), u === !1)) return !1;
                    if (n == T && W()) {
                        if (Ye.trigger("swipe", [De, Ie, Fe, qe, Ue]), i.swipe && (u = i.swipe.call(Ye, e, De, Ie, Fe, qe, Ue), u === !1)) return !1;
                        switch (De) {
                            case r:
                                Ye.trigger("swipeLeft", [De, Ie, Fe, qe, Ue]), i.swipeLeft && (u = i.swipeLeft.call(Ye, e, De, Ie, Fe, qe, Ue));
                                break;
                            case s:
                                Ye.trigger("swipeRight", [De, Ie, Fe, qe, Ue]), i.swipeRight && (u = i.swipeRight.call(Ye, e, De, Ie, Fe, qe, Ue));
                                break;
                            case a:
                                Ye.trigger("swipeUp", [De, Ie, Fe, qe, Ue]), i.swipeUp && (u = i.swipeUp.call(Ye, e, De, Ie, Fe, qe, Ue));
                                break;
                            case o:
                                Ye.trigger("swipeDown", [De, Ie, Fe, qe, Ue]), i.swipeDown && (u = i.swipeDown.call(Ye, e, De, Ie, Fe, qe, Ue))
                        }
                    }
                }
                if (h == p) {
                    if (Ye.trigger("pinchStatus", [n, He || null, Xe || 0, Fe || 0, qe, Be, Ue]), i.pinchStatus && (u = i.pinchStatus.call(Ye, e, n, He || null, Xe || 0, Fe || 0, qe, Be, Ue), u === !1)) return !1;
                    if (n == T && H()) switch (He) {
                        case l:
                            Ye.trigger("pinchIn", [He || null, Xe || 0, Fe || 0, qe, Be, Ue]), i.pinchIn && (u = i.pinchIn.call(Ye, e, He || null, Xe || 0, Fe || 0, qe, Be, Ue));
                            break;
                        case d:
                            Ye.trigger("pinchOut", [He || null, Xe || 0, Fe || 0, qe, Be, Ue]), i.pinchOut && (u = i.pinchOut.call(Ye, e, He || null, Xe || 0, Fe || 0, qe, Be, Ue))
                    }
                }
                return h == f ? (n === P || n === T) && (clearTimeout(Je), clearTimeout(ti), $() && !te() ? (Ke = ke(), Je = setTimeout(t.proxy(function() {
                    Ke = null, Ye.trigger("tap", [e.target]), i.tap && (u = i.tap.call(Ye, e, e.target))
                }, this), i.doubleTapThreshold)) : (Ke = null, Ye.trigger("tap", [e.target]), i.tap && (u = i.tap.call(Ye, e, e.target)))) : h == g ? (n === P || n === T) && (clearTimeout(Je), Ke = null, Ye.trigger("doubletap", [e.target]), i.doubleTap && (u = i.doubleTap.call(Ye, e, e.target))) : h == m && (n === P || n === T) && (clearTimeout(Je), Ke = null, Ye.trigger("longtap", [e.target]), i.longTap && (u = i.longTap.call(Ye, e, e.target))), u
            }

            function F() {
                var t = !0;
                return null !== i.threshold && (t = Ie >= i.threshold), t
            }

            function N() {
                var t = !1;
                return null !== i.cancelThreshold && null !== De && (t = me(De) - Ie >= i.cancelThreshold), t
            }

            function j() {
                return null !== i.pinchThreshold ? Xe >= i.pinchThreshold : !0
            }

            function B() {
                var t;
                return t = i.maxTimeThreshold && Fe >= i.maxTimeThreshold ? !1 : !0
            }

            function X(t, e) {
                if (i.preventDefaultEvents !== !1)
                    if (i.allowPageScroll === h) t.preventDefault();
                    else {
                        var n = i.allowPageScroll === u;
                        switch (e) {
                            case r:
                                (i.swipeLeft && n || !n && i.allowPageScroll != _) && t.preventDefault();
                                break;
                            case s:
                                (i.swipeRight && n || !n && i.allowPageScroll != _) && t.preventDefault();
                                break;
                            case a:
                                (i.swipeUp && n || !n && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case o:
                                (i.swipeDown && n || !n && i.allowPageScroll != v) && t.preventDefault()
                        }
                    }
            }

            function H() {
                var t = G(),
                    e = Q(),
                    i = j();
                return t && e && i
            }

            function V() {
                return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
            }

            function Y() {
                return !(!H() || !V())
            }

            function W() {
                var t = B(),
                    e = F(),
                    i = G(),
                    n = Q(),
                    r = N(),
                    s = !r && n && i && e && t;
                return s
            }

            function q() {
                return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
            }

            function U() {
                return !(!W() || !q())
            }

            function G() {
                return qe === i.fingers || i.fingers === y || !S
            }

            function Q() {
                return 0 !== Ue[0].end.x
            }

            function Z() {
                return !!i.tap
            }

            function $() {
                return !!i.doubleTap
            }

            function K() {
                return !!i.longTap
            }

            function J() {
                if (null == Ke) return !1;
                var t = ke();
                return $() && t - Ke <= i.doubleTapThreshold
            }

            function te() {
                return J()
            }

            function ee() {
                return (1 === qe || !S) && (isNaN(Ie) || Ie < i.threshold)
            }

            function ie() {
                return Fe > i.longTapThreshold && w > Ie
            }

            function ne() {
                return !(!ee() || !Z())
            }

            function re() {
                return !(!J() || !$())
            }

            function se() {
                return !(!ie() || !K())
            }

            function ae() {
                Ze = ke(), $e = event.touches.length + 1
            }

            function oe() {
                Ze = 0, $e = 0
            }

            function le() {
                var t = !1;
                if (Ze) {
                    var e = ke() - Ze;
                    e <= i.fingerReleaseThreshold && (t = !0)
                }
                return t
            }

            function de() {
                return !(Ye.data(C + "_intouch") !== !0)
            }

            function he(t) {
                t === !0 ? (Ye.bind(Me, A), Ye.bind(Re, L), Ee && Ye.bind(Ee, R)) : (Ye.unbind(Me, A, !1), Ye.unbind(Re, L, !1), Ee && Ye.unbind(Ee, R, !1)), Ye.data(C + "_intouch", t === !0)
            }

            function ue(t, e) {
                var i = void 0 !== e.identifier ? e.identifier : 0;
                return Ue[t].identifier = i, Ue[t].start.x = Ue[t].end.x = e.pageX || e.clientX, Ue[t].start.y = Ue[t].end.y = e.pageY || e.clientY, Ue[t]
            }

            function ce(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    i = pe(e);
                return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
            }

            function pe(t) {
                for (var e = 0; e < Ue.length; e++)
                    if (Ue[e].identifier == t) return Ue[e]
            }

            function fe() {
                for (var t = [], e = 0; 5 >= e; e++) t.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return t
            }

            function ge(t, e) {
                e = Math.max(e, me(t)), Ve[t].distance = e
            }

            function me(t) {
                return Ve[t] ? Ve[t].distance : void 0
            }

            function _e() {
                var t = {};
                return t[r] = ve(r), t[s] = ve(s), t[a] = ve(a), t[o] = ve(o), t
            }

            function ve(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function ye() {
                return Qe - Ge
            }

            function we(t, e) {
                var i = Math.abs(t.x - e.x),
                    n = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + n * n))
            }

            function xe(t, e) {
                var i = e / t * 1;
                return i.toFixed(2)
            }

            function be() {
                return 1 > Be ? d : l
            }

            function Te(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }

            function Pe(t, e) {
                var i = t.x - e.x,
                    n = e.y - t.y,
                    r = Math.atan2(n, i),
                    s = Math.round(180 * r / Math.PI);
                return 0 > s && (s = 360 - Math.abs(s)), s
            }

            function Se(t, e) {
                var i = Pe(t, e);
                return 45 >= i && i >= 0 ? r : 360 >= i && i >= 315 ? r : i >= 135 && 225 >= i ? s : i > 45 && 135 > i ? o : a
            }

            function ke() {
                var t = new Date;
                return t.getTime()
            }

            function Oe(e) {
                e = t(e);
                var i = e.offset(),
                    n = {
                        left: i.left,
                        right: i.left + e.outerWidth(),
                        top: i.top,
                        bottom: i.top + e.outerHeight()
                    };
                return n
            }

            function Ce(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }
            var Ae = S || O || !i.fallbackToMouseEvents,
                Le = Ae ? O ? k ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Me = Ae ? O ? k ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Re = Ae ? O ? k ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Ee = Ae ? null : "mouseleave",
                ze = O ? k ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Ie = 0,
                De = null,
                Fe = 0,
                Ne = 0,
                je = 0,
                Be = 1,
                Xe = 0,
                He = 0,
                Ve = null,
                Ye = t(e),
                We = "start",
                qe = 0,
                Ue = null,
                Ge = 0,
                Qe = 0,
                Ze = 0,
                $e = 0,
                Ke = 0,
                Je = null,
                ti = null;
            try {
                Ye.bind(Le, n), Ye.bind(ze, M)
            } catch (ei) {
                t.error("events not supported " + Le + "," + ze + " on jQuery.swipetp")
            }
            this.enable = function() {
                return Ye.bind(Le, n), Ye.bind(ze, M), Ye
            }, this.disable = function() {
                return E(), Ye
            }, this.destroy = function() {
                E(), Ye.data(C, null), Ye = null
            }, this.option = function(e, n) {
                if (void 0 !== i[e]) {
                    if (void 0 === n) return i[e];
                    i[e] = n
                } else t.error("Option " + e + " does not exist on jQuery.swipetp.options");
                return null
            }
        }
        var n = "1.6.9",
            r = "left",
            s = "right",
            a = "up",
            o = "down",
            l = "in",
            d = "out",
            h = "none",
            u = "auto",
            c = "swipe",
            p = "pinch",
            f = "tap",
            g = "doubletap",
            m = "longtap",
            _ = "horizontal",
            v = "vertical",
            y = "all",
            w = 10,
            x = "start",
            b = "move",
            T = "end",
            P = "cancel",
            S = "ontouchstart" in window,
            k = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            O = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            C = "TouchSwipe",
            A = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe",
                preventDefaultEvents: !0
            };
        t.fn.swipetp = function(i) {
            var n = t(this),
                r = n.data(C);
            if (r && "string" == typeof i) {
                if (r[i]) return r[i].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipetp")
            } else if (!(r || "object" != typeof i && i)) return e.apply(this, arguments);
            return n
        }, t.fn.swipetp.version = n, t.fn.swipetp.defaults = A, t.fn.swipetp.phases = {
            PHASE_START: x,
            PHASE_MOVE: b,
            PHASE_END: T,
            PHASE_CANCEL: P
        }, t.fn.swipetp.directions = {
            LEFT: r,
            RIGHT: s,
            UP: a,
            DOWN: o,
            IN: l,
            OUT: d
        }, t.fn.swipetp.pageScroll = {
            NONE: h,
            HORIZONTAL: _,
            VERTICAL: v,
            AUTO: u
        }, t.fn.swipetp.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: y
        }
    }), "undefined" == typeof console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
if (1 == window.tplogs) try {
    console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try {
    console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
} catch (e) {}! function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, a, o, l = function(t) {
                var e, n = t.split("."),
                    r = i;
                for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                return r
            },
            d = l("com.greensock"),
            h = 1e-10,
            u = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            c = function() {},
            p = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            f = {},
            g = function(n, r, s, a) {
                this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = s;
                var o = [];
                this.check = function(d) {
                    for (var h, u, c, p, m = r.length, _ = m; --m > -1;)(h = f[r[m]] || new g(r[m], [])).gsClass ? (o[m] = h.gsClass, _--) : d && h.sc.push(this);
                    if (0 === _ && s)
                        for (u = ("com.greensock." + n).split("."), c = u.pop(), p = l(u.join("."))[c] = this.gsClass = s.apply(s, o), a && (i[c] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return p
                            }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                }, this.check(!0)
            },
            m = t._gsDefine = function(t, e, i, n) {
                return new g(t, e, i, n)
            },
            _ = d._class = function(t, e, i) {
                return e = e || function() {}, m(t, [], function() {
                    return e
                }, i), e
            };
        m.globals = i;
        var v = [0, 0, 1, 1],
            y = [],
            w = _("easing.Ease", function(t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
            }, !0),
            x = w.map = {},
            b = w.register = function(t, e, i, n) {
                for (var r, s, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                    for (s = l[h], r = n ? _("easing." + s, null, !0) : d.easing[s] || {}, a = u.length; --a > -1;) o = u[a], x[s + "." + o] = x[o + s] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (s = w.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, b(new w(null, null, 1, r), s, "easeOut", !0), b(new w(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), b(new w(null, null, 3, r), s, "easeInOut");
        x.linear = d.easing.Linear.easeIn, x.swing = d.easing.Quad.easeInOut;
        var T = _("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var s, l, d = this._listeners[t],
                h = 0;
            for (null == d && (this._listeners[t] = d = []), l = d.length; --l > -1;) s = d[l], s.c === e && s.s === i ? d.splice(l, 1) : 0 === h && r > s.pr && (h = l + 1);
            d.splice(h, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            }), this !== a || o || a.wake()
        }, s.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
        };
        var P = t.requestAnimationFrame,
            S = t.cancelAnimationFrame,
            k = Date.now || function() {
                return (new Date).getTime()
            },
            O = k();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !P;) P = t[n[r] + "RequestAnimationFrame"], S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        _("Ticker", function(t, e) {
            var i, n, r, s, l, d = this,
                u = k(),
                p = e !== !1 && P,
                f = 500,
                g = 33,
                m = "tick",
                _ = function(t) {
                    var e, a, o = k() - O;
                    o > f && (u += o - g), O += o, d.time = (O - u) / 1e3, e = d.time - l, (!i || e > 0 || t === !0) && (d.frame++, l += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = n(_)), a && d.dispatchEvent(m)
                };
            T.call(d), d.time = d.frame = 0, d.tick = function() {
                _(!0)
            }, d.lagSmoothing = function(t, e) {
                f = t || 1 / h, g = Math.min(e, f, 0)
            }, d.sleep = function() {
                null != r && (p && S ? S(r) : clearTimeout(r), n = c, r = null, d === a && (o = !1))
            }, d.wake = function() {
                null !== r ? d.sleep() : d.frame > 10 && (O = k() - f + 5), n = 0 === i ? c : p && P ? P : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - d.time) + 1)
                }, d === a && (o = !0), _(2)
            }, d.fps = function(t) {
                return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void d.wake()) : i
            }, d.useRAF = function(t) {
                return arguments.length ? (d.sleep(), p = t, void d.fps(i)) : p
            }, d.fps(t), setTimeout(function() {
                p && 5 > d.frame && d.useRAF(!1)
            }, 1500)
        }), s = d.Ticker.prototype = new d.events.EventDispatcher, s.constructor = d.Ticker;
        var C = _("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, V) {
                o || a.wake();
                var i = this.vars.useFrames ? H : V;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = C.ticker = new d.Ticker, s = C.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var A = function() {
            o && k() - O > 2e3 && a.wake(), setTimeout(A, 2e3)
        };
        A(), s.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {}, s.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, s._enabled = function(t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
        }, s.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && W())
            }
            return this
        }, s.progress = s.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var L = _("core.SimpleTimeline", function(t) {
            C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = L.prototype = new C, s.constructor = L, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (n = t._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function() {
            return o || a.wake(), this._totalTime
        };
        var M = _("TweenLite", function(e, i, n) {
                if (C.call(this, i, n), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? X[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                    for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(s))) : (this._siblings[r] = q(s, this, !1), 1 === l && this._siblings[r].length > 1 && G(s, this, null, 1, this._siblings[r])) : (s = a[r--] = M.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
                else this._propLookup = {}, this._siblings = q(e, this, !1), 1 === l && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
            }, !0),
            R = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            E = function(t, e) {
                var i, n = {};
                for (i in t) B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
        s = M.prototype = new C, s.constructor = M, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, M.version = "1.17.0", M.defaultEase = s._ease = new w(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = a, M.autoSleep = 120, M.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }, M.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (M.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var z = [],
            I = {},
            D = M._internals = {
                isArray: p,
                isSelector: R,
                lazyTweens: z
            },
            F = M._plugins = {},
            N = D.tweenLookup = {},
            j = 0,
            B = D.reservedProps = {
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
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1
            },
            X = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            H = C._rootFramesTimeline = new L,
            V = C._rootTimeline = new L,
            Y = 30,
            W = D.lazyRender = function() {
                var t, e = z.length;
                for (I = {}; --e > -1;) t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                z.length = 0
            };
        V._startTime = a.time, H._startTime = a.frame, V._active = H._active = !0, setTimeout(W, 1), C._updateRoot = M.render = function() {
            var t, e, i;
            if (z.length && W(), V.render((a.time - V._startTime) * V._timeScale, !1, !1), H.render((a.frame - H._startTime) * H._timeScale, !1, !1), z.length && W(), a.frame >= Y) {
                Y = a.frame + (parseInt(M.autoSleep, 10) || 120);
                for (i in N) {
                    for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete N[i]
                }
                if (i = V._first, (!i || i._paused) && M.autoSleep && !H._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", C._updateRoot);
        var q = function(t, e, i) {
                var n, r, s = t._gsTweenID;
                if (N[s || (t._gsTweenID = s = "t" + j++)] || (N[s] = {
                        target: t,
                        tweens: []
                    }), e && (n = N[s].tweens, n[r = n.length] = e, i))
                    for (; --r > -1;) n[r] === e && n.splice(r, 1);
                return N[s].tweens
            },
            U = function(t, e, i, n) {
                var r, s, a = t.vars.onOverwrite;
                return a && (r = a(t, e, i, n)), a = M.onOverwrite, a && (s = a(t, e, i, n)), r !== !1 && s !== !1
            },
            G = function(t, e, i, n, r) {
                var s, a, o, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, s = 0; l > s; s++)
                        if ((o = r[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                        else if (5 === n) break;
                    return a
                }
                var d, u = e._startTime + h,
                    c = [],
                    p = 0,
                    f = 0 === e._duration;
                for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (d = d || Q(e, 0, f), 0 === Q(o, d, f) && (c[p++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (c[p++] = o)));
                for (s = p; --s > -1;)
                    if (o = c[s], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                        if (2 !== n && !U(o, e)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            },
            Q = function(t, e, i) {
                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                    if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
            };
        s._init = function() {
            var t, e, i, n, r, s = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!s.immediateRender,
                d = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt) r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = M.to(this.target, 0, r), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (s.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (n in s) B[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = M.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = d = d ? d instanceof w ? d : "function" == typeof d ? new w(d, s.easeParams) : x[d] || M.defaultEase : M.defaultEase, s.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, n, r) {
            var s, a, o, l, d, h;
            if (null == e) return !1;
            I[e._gsTweenID] && W(), this.vars.css || e.style && e !== t && e.nodeType && F.css && this.vars.autoCSS !== !1 && E(this.vars, e);
            for (s in this.vars) {
                if (h = this.vars[s], B[s]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                else if (F[s] && (l = new F[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = d = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: s,
                            pg: !0,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[s] = d = {
                    _next: this._firstPT,
                    t: e,
                    p: s,
                    f: "function" == typeof e[s],
                    n: s,
                    pg: !1,
                    pr: 0
                }, d.s = d.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), d.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - d.s || 0;
                d && d._next && (d._next._prev = d)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && G(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), o)
        }, s.render = function(t, e, i) {
            var n, r, s, a, o = this._time,
                l = this._duration,
                d = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > d || d === h && "isPause" !== this.data) && d !== t && (i = !0, d > h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || d === t ? t : h);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && d > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (d !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || d === t ? t : h)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    c = this._easeType,
                    p = this._easePower;
                (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = d, z.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0))
            }
        }, s._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
            var n, r, s, a, o, l, d, h, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((p(e) || R(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (e === this._targets[n]) {
                            o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (d = t || o, h = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (s in d) o[s] && (u || (u = []), u.push(s));
                        if ((u || !t) && !U(this, i, e, u)) return !1
                    }
                    for (s in d)(a = o[s]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(d) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), h && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
        }, s._enabled = function(t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = q(n[i], this, !0);
                else this._siblings = q(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, M.to = function(t, e, i) {
            return new M(t, e, i)
        }, M.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
        }, M.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new M(t, e, n)
        }, M.delayedCall = function(t, e, i, n, r) {
            return new M(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, M.set = function(t, e) {
            return new M(t, 0, e)
        }, M.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : M.selector(t) || t;
            var i, n, r, s;
            if ((p(t) || R(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(M.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)
                    for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
            } else
                for (n = q(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = M.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
        };
        var Z = _("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Z.prototype
        }, !0);
        if (s = Z.prototype, Z.version = "1.10.1", Z.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
                var a, o;
                return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: s
                }, o._next && (o._next._prev = o), o) : void 0
            }, s.setRatio = function(t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, s._kill = function(t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, s._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, M._onPluginEvent = function(t, e) {
                var i, n, r, s, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                        (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, Z.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === Z.API && (F[(new t[e])._propName] = t[e]);
                return !0
            }, m.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        Z.call(this, i, n), this._overwriteProps = r || []
                    }, t.global === !0),
                    o = a.prototype = new Z(i);
                o.constructor = a, a.API = t.API;
                for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                return a.version = t.version, Z.activate([a]), a
            }, n = t._gsQueue) {
            for (r = 0; n.length > r; r++) n[r]();
            for (s in f) f[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        o = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, n, r = this.vars;
                    for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                    l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                },
                r = 1e-10,
                s = i._internals,
                a = n._internals = {},
                o = s.isSelector,
                l = s.isArray,
                d = s.lazyTweens,
                h = s.lazyRender,
                u = [],
                c = _gsScope._gsDefine.globals,
                p = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                f = a.pauseCallback = function(t, e, i, n) {
                    var s, a = t._timeline,
                        o = a._totalTime,
                        l = t._startTime,
                        d = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                        h = d ? 0 : r,
                        c = d ? r : 0;
                    if (e || !this._forcingPlayhead) {
                        for (a.pause(l), s = t._prev; s && s._startTime === l;) s._rawPrevTime = c, s = s._prev;
                        for (s = t._next; s && s._startTime === l;) s._rawPrevTime = h, s = s._next;
                        e && e.apply(n || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
                    }
                },
                g = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                m = n.prototype = new e;
            return n.version = "1.17.0", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, r) {
                var s = n.repeat && c.TweenMax || i;
                return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
            }, m.from = function(t, e, n, r) {
                return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
            }, m.fromTo = function(t, e, n, r, s) {
                var a = r.repeat && c.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s)
            }, m.staggerTo = function(t, e, r, s, a, l, d, h) {
                var u, c = new n({
                    onComplete: l,
                    onCompleteParams: d,
                    callbackScope: h,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = g(t)), s = s || 0, 0 > s && (t = g(t), t.reverse(), s *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), c.to(t[u], e, p(r), u * s);
                return this.add(c, a)
            }, m.staggerFrom = function(t, e, i, n, r, s, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, a, o)
            }, m.staggerFromTo = function(t, e, i, n, r, s, a, o, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, a, o, l)
            }, m.call = function(t, e, n, r) {
                return this.add(i.delayedCall(0, t, e, n), r)
            }, m.set = function(t, e, n) {
                return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
            }, n.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, s, a = new n(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
                return o.add(a, 0), a
            }, m.add = function(r, s, a, o) {
                var d, h, u, c, p, f;
                if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && l(r)) {
                        for (a = a || "normal", o = o || 0, d = s, h = r.length, u = 0; h > u; u++) l(c = r[u]) && (c = new n({
                            tweens: c
                        })), this.add(c, d), "string" != typeof c && "function" != typeof c && ("sequence" === a ? d = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), d += o;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, s);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this, f = p.rawTime() > r._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, m.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && l(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, m._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var n = this._last;
                return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, m.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, m.insert = m.insertMultiple = function(t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, m.appendMultiple = function(t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, m.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, m.addPause = function(t, e, n, r) {
                var s = i.delayedCall(0, f, ["{self}", e, n, r], this);
                return s.data = "isPause", this.add(s, t)
            }, m.removeLabel = function(t) {
                return delete this._labels[t], this
            }, m.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, m._parseTimeOrLabel = function(e, i, n, r) {
                var s;
                if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && l(r)))
                    for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                }
                return Number(e) + i
            }, m.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, m.stop = function() {
                return this.paused(!0)
            }, m.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, m.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, a, o, l, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    c = this._time,
                    p = this._startTime,
                    f = this._timeScale,
                    g = this._paused;
                if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        t = 0, this._initted || (l = !0)
                    }
                else this._totalTime = this._time = this._rawPrevTime = t;
                if (this._time !== c && this._first || i || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c)
                        for (n = this._first; n && (a = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                    else
                        for (n = this._last; n && (a = n._prev, !this._paused || g);)(n._active || c >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                    this._onUpdate && (e || (d.length && h(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (s && (d.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, m.getChildren = function(t, e, n, r) {
                r = r || -9999999999;
                for (var s = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (s[o++] = a) : (n !== !1 && (s[o++] = a), t !== !1 && (s = s.concat(a.getChildren(!0, e, n)), o = s.length))), a = a._next;
                return s
            }, m.getTweensOf = function(t, e) {
                var n, r, s = this._gc,
                    a = [],
                    o = 0;
                for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (a[o++] = n[r]);
                return s && this._enabled(!1, !0), a
            }, m.recent = function() {
                return this._recent
            }, m._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, m.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (n in s) s[n] >= i && (s[n] += t);
                return this._uncache(!0)
            }, m._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                return r
            }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, m.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                return e.prototype._enabled.call(this, t, i)
            }, m.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, m.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, m.paused = function(e) {
                if (!e)
                    for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, m.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, m.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, n
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
            s = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            l = s._class,
            d = function(e, i) {
                var n = l("easing." + e, function() {}, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, n
            },
            h = t.register || function() {},
            u = function(t, e, i, n) {
                var r = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new n
                }, !0);
                return h(r, t), r
            },
            c = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            p = function(e, i) {
                var n = l("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function(t) {
                    return new n(t)
                }, n
            },
            f = u("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            g = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            m = g.prototype = new t;
        return m.constructor = g, m.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
            return new g(t, e, i)
        }, e = l("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, m.config = e.config = function(t) {
            return new e(t)
        }, i = l("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, n, r, s, a, o, l = e.taper || "none", d = [], h = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = m ? m.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? (s = 1 - i, r = s * s * _) : "in" === l ? r = i * i * _ : .5 > i ? (s = 2 * i, r = .5 * s * s * _) : (s = 2 * (1 - i), r = .5 * s * s * _), f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), d[h++] = {
                x: i,
                y: n
            };
            for (d.sort(function(t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), p = u; --p > -1;) a = d[p], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, m.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", d("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), d("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), d("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", d("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), d("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), d("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function(e, i, n) {
            var r = l("easing." + e, function(t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                }, !0),
                s = r.prototype = new t;
            return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", n("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), n("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }, .45)), u("Expo", d("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), d("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), d("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", d("SineOut", function(t) {
            return Math.sin(t * o)
        }), d("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), d("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, n, r, s, a = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                },
                o = _gsScope._gsDefine.globals,
                l = {},
                d = a.prototype = new t("css");
            d.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, d = "px", a.suffixMap = {
                top: d,
                right: d,
                bottom: d,
                left: d,
                width: d,
                height: d,
                fontSize: d,
                padding: d,
                margin: d,
                perspective: d,
                lineHeight: ""
            };
            var h, u, c, p, f, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                w = /(?:\d|\-|\+|=|#|\.)*/g,
                x = /opacity *= *([^)]*)/i,
                b = /opacity:([^;]*)/i,
                T = /alpha\(opacity *=.+?\)/i,
                P = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                k = /-([a-z])/gi,
                O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                C = function(t, e) {
                    return e.toUpperCase()
                },
                A = /(?:Left|Right|Width)/i,
                L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                R = /,(?=[^\)]*(?:\(|$))/gi,
                E = Math.PI / 180,
                z = 180 / Math.PI,
                I = {},
                D = document,
                F = function(t) {
                    return D.createElementNS ? D.createElementNS("http://www.w3.org/1999/xhtml", t) : D.createElement(t)
                },
                N = F("div"),
                j = F("img"),
                B = a._internals = {
                    _specialProps: l
                },
                X = navigator.userAgent,
                H = function() {
                    var t = X.indexOf("Android"),
                        e = F("a");
                    return c = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || Number(X.substr(t + 8, 1)) > 3), f = c && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)), p = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (g = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                }(),
                V = function(t) {
                    return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                Y = function(t) {
                    window.console && console.log(t)
                },
                W = "",
                q = "",
                U = function(t, e) {
                    e = e || N;
                    var i, n, r = e.style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                    return n >= 0 ? (q = 3 === n ? "ms" : i[n], W = "-" + q.toLowerCase() + "-", q + t) : null
                },
                G = D.defaultView ? D.defaultView.getComputedStyle : function() {},
                Q = a.getStyle = function(t, e, i, n, r) {
                    var s;
                    return H || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || G(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : V(t)
                },
                Z = B.convertToPixels = function(t, i, n, r, s) {
                    if ("px" === r || !r) return n;
                    if ("auto" === r || !n) return 0;
                    var o, l, d, h = A.test(i),
                        u = t,
                        c = N.style,
                        p = 0 > n;
                    if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) o = n / 100 * (h ? t.clientWidth : t.clientHeight);
                    else {
                        if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) c[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                        else {
                            if (u = t.parentNode || D.body, l = u._gsCache, d = e.ticker.frame, l && h && l.time === d) return l.width * n / 100;
                            c[h ? "width" : "height"] = n + r
                        }
                        u.appendChild(N), o = parseFloat(N[h ? "offsetWidth" : "offsetHeight"]), u.removeChild(N), h && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = d, l.width = 100 * (o / n)), 0 !== o || s || (o = Z(t, i, n, r, !0))
                    }
                    return p ? -o : o
                },
                $ = B.calculateOffset = function(t, e, i) {
                    if ("absolute" !== Q(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top",
                        r = Q(t, "margin" + n, i);
                    return t["offset" + n] - (Z(t, e, parseFloat(r), r.replace(w, "")) || 0)
                },
                K = function(t, e) {
                    var i, n, r, s = {};
                    if (e = e || G(t, null))
                        if (i = e.length)
                            for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Pe === r) && (s[r.replace(k, C)] = e.getPropertyValue(r));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Te === i) && (s[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(k, C)] = e[i]);
                    return H || (s.opacity = V(t)), n = De(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, ke && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                },
                J = function(t, e, i, n, r) {
                    var s, a, o, l = {},
                        d = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(y, "") ? s : 0 : $(t, a), void 0 !== d[a] && (o = new pe(d, a, d[a], o)));
                    if (n)
                        for (a in n) "className" !== a && (l[a] = n[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                te = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ie = function(t, e, i) {
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = te[e],
                        s = r.length;
                    for (i = i || G(t, null); --s > -1;) n -= parseFloat(Q(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Q(t, "border" + r[s] + "Width", i, !0)) || 0;
                    return n
                },
                ne = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                },
                re = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                se = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                },
                ae = function(t, e, i, n) {
                    var r, s, a, o, l, d = 1e-6;
                    return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e), s.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), d > o && o > -d && (o = 0), o
                },
                oe = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                le = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                de = a.parseColor = function(t) {
                    var e, i, n, r, s, a;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (s + 1) : a + s - a * s, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = le(r + 1 / 3, e, i), t[1] = le(r, e, i), t[2] = le(r - 1 / 3, e, i), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                },
                he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (d in oe) he += "|" + d + "\\b";
            he = RegExp(he + ")", "gi");
            var ue = function(t, e, i, n) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var r, s = e ? (t.match(he) || [""])[0] : "",
                        a = t.split(s).join("").match(v) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        d = -1 !== t.indexOf(" ") ? " " : ",",
                        h = a.length,
                        u = h > 0 ? a[0].replace(m, "") : "";
                    return h ? r = e ? function(t) {
                        var e, c, p, f;
                        if ("number" == typeof t) t += u;
                        else if (n && R.test(t)) {
                            for (f = t.replace(R, "|").split("|"), p = 0; f.length > p; p++) f[p] = r(f[p]);
                            return f.join(",")
                        }
                        if (e = (t.match(he) || [s])[0], c = t.split(e).join("").match(v) || [], p = c.length, h > p--)
                            for (; h > ++p;) c[p] = i ? c[0 | (p - 1) / 2] : a[p];
                        return o + c.join(d) + d + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, s, c;
                        if ("number" == typeof t) t += u;
                        else if (n && R.test(t)) {
                            for (s = t.replace(R, "|").split("|"), c = 0; s.length > c; c++) s[c] = r(s[c]);
                            return s.join(",")
                        }
                        if (e = t.match(v) || [], c = e.length, h > c--)
                            for (; h > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                        return o + e.join(d) + l
                    } : function(t) {
                        return t
                    }
                },
                ce = function(t) {
                    return t = t.split(","),
                        function(e, i, n, r, s, a, o) {
                            var l, d = (i + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[t[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                            return r.parse(e, o, s, a)
                        }
                },
                pe = (B._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, r, s = this.data, a = s.proxy, o = s.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                    if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t)
                        for (o = s.firstMPT; o;) {
                            if (i = o.t, i.type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i.e = r
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                }, function(t, e, i, n, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                }),
                fe = (B._parseToProxy = function(t, e, i, n, r, s) {
                    var a, o, l, d, h, u = n,
                        c = {},
                        p = {},
                        f = i._transform,
                        g = I;
                    for (i._transform = null, I = e, n = h = i.parse(t, e, n, r), I = g, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                        if (1 >= n.type && (o = n.p, p[o] = n.s + n.c, c[o] = n.s, s || (d = new pe(n, "s", o, d, n.r), n.c = 0), 1 === n.type))
                            for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, p[o] = n.data[l], c[o] = n[l], s || (d = new pe(n, l, o, d, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: c,
                        end: p,
                        firstMPT: d,
                        pt: h
                    }
                }, B.CSSPropTween = function(t, e, n, r, a, o, l, d, h, u, c) {
                    this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof fe || s.push(this.n), this.r = d, this.type = o || 0, h && (this.pr = h, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === c ? n + r : c, a && (this._next = a, a._prev = this)
                }),
                ge = function(t, e, i, n, r, s) {
                    var a = new fe(t, e, i, n - i, r, -1, s);
                    return a.b = i, a.e = a.xs0 = n, a
                },
                me = a.parseComplex = function(t, e, i, n, r, s, a, o, l, d) {
                    i = i || s || "", a = new fe(t, e, 0, 0, a, d ? 2 : 1, null, !1, o, i, n), n += "";
                    var u, c, p, f, g, v, y, w, x, b, T, S, k = i.split(", ").join(",").split(" "),
                        O = n.split(", ").join(",").split(" "),
                        C = k.length,
                        A = h !== !1;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(R, ", ").split(" "), O = O.join(" ").replace(R, ", ").split(" "), C = k.length), C !== O.length && (k = (s || "").split(" "), C = k.length), a.plugin = l, a.setRatio = d, u = 0; C > u; u++)
                        if (f = k[u], g = O[u], w = parseFloat(f), w || 0 === w) a.appendXtra("", w, re(g, w), g.replace(_, ""), A && -1 !== g.indexOf("px"), !0);
                        else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")", f = de(f), g = de(g), x = f.length + g.length > 6, x && !H && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(O[u]).join("transparent")) : (H || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], x ? "," : S, !0), x && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, S, !1)));
                    else if (v = f.match(m)) {
                        if (y = g.match(_), !y || y.length !== v.length) return a;
                        for (p = 0, c = 0; v.length > c; c++) T = v[c], b = f.indexOf(T, p), a.appendXtra(f.substr(p, b - p), Number(T), re(y[c], T), "", A && "px" === f.substr(b + T.length, 2), 0 === c), p = b + T.length;
                        a["xs" + a.l] += f.substr(p)
                    } else a["xs" + a.l] += a.l ? " " + f : f;
                    if (-1 !== n.indexOf("=") && a.data) {
                        for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                        a.e = S + a["xs" + u]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                _e = 9;
            for (d = fe.prototype, d.l = d.pr = 0; --_e > 0;) d["xn" + _e] = 0, d["xs" + _e] = "";
            d.xs0 = "", d._next = d._prev = d.xfirst = d.data = d.plugin = d.setRatio = d.rxp = null, d.appendXtra = function(t, e, i, n, r, s) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += s && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (n || ""), a)
            };
            var ve = function(t, e) {
                    e = e || {}, this.p = e.prefix ? U(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                ye = B._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var n, r, s = t.split(","),
                        a = e.defaultValue;
                    for (i = i || [a], n = 0; s.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || a, r = new ve(s[n], e)
                },
                we = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        ye(t, {
                            parser: function(t, i, n, r, s, a, d) {
                                var h = o.com.greensock.plugins[e];
                                return h ? (h._cssRegister(), l[n].parse(t, i, n, r, s, a, d)) : (Y("Error: " + e + " js file not loaded."), s)
                            }
                        })
                    }
                };
            d = ve.prototype, d.parseComplex = function(t, e, i, n, r, s) {
                var a, o, l, d, h, u, c = this.keyword;
                if (this.multi && (R.test(i) || R.test(e) ? (o = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : c && (o = [e], l = [i])), l) {
                    for (d = l.length > o.length ? l.length : o.length, a = 0; d > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (h = e.indexOf(c), u = i.indexOf(c), h !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === h && (o[a] += " " + c)));
                    e = o.join(", "), i = l.join(", ")
                }
                return me(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
            }, d.parse = function(t, e, i, n, s, a) {
                return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), s, a)
            }, a.registerSpecialProp = function(t, e, i) {
                ye(t, {
                    parser: function(t, n, r, s, a, o) {
                        var l = new fe(t, r, 0, 0, a, 2, r, !1, i);
                        return l.plugin = o, l.setRatio = e(t, n, s._tween, r), l
                    },
                    priority: i
                })
            }, a.useSVGTransformAttr = c || p;
            var xe, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Te = U("transform"),
                Pe = W + "transform",
                Se = U("transformOrigin"),
                ke = null !== U("perspective"),
                Oe = B.Transform = function() {
                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && ke ? a.defaultForce3D || "auto" : !1
                },
                Ce = window.SVGElement,
                Ae = function(t, e, i) {
                    var n, r = D.createElementNS("http://www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(r), r
                },
                Le = D.documentElement,
                Me = function() {
                    var t, e, i, n = g || /Android/i.test(X) && !window.chrome;
                    return D.createElementNS && !n && (t = Ae("svg", Le), e = Ae("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[Te] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && ke), Le.removeChild(t)), n
                }(),
                Re = function(t, e, i, n, r) {
                    var s, o, l, d, h, u, c, p, f, g, m, _, v, y, w = t._gsTransform,
                        x = Ie(t, !0);
                    w && (v = w.xOrigin, y = w.yOrigin), (!n || 2 > (s = n.split(" ")).length) && (c = t.getBBox(), e = ne(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = d = parseFloat(s[0]), i.yOrigin = h = parseFloat(s[1]), n && x !== ze && (u = x[0], c = x[1], p = x[2], f = x[3], g = x[4], m = x[5], _ = u * f - c * p, o = d * (f / _) + h * (-p / _) + (p * m - f * g) / _, l = d * (-c / _) + h * (u / _) - (u * m - c * g) / _, d = i.xOrigin = s[0] = o, h = i.yOrigin = s[1] = l), w && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = d - v, l = h - y, w.xOffset += o * x[0] + l * x[2] - o, w.yOffset += o * x[1] + l * x[3] - l) : w.xOffset = w.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                },
                Ee = function(t) {
                    return !!(Ce && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                ze = [1, 0, 0, 1, 0, 0],
                Ie = function(t, e) {
                    var i, n, r, s, a, o = t._gsTransform || new Oe,
                        l = 1e5;
                    if (Te ? n = Q(t, Pe, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(L), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (o.svg || t.getBBox && Ee(t)) && (i && -1 !== (t.style[Te] + "").indexOf("matrix") && (n = t.style[Te], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return ze;
                    for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], _e = r.length; --_e > -1;) s = Number(r[_e]), r[_e] = (a = s - (s |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + s : s;
                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                De = B.getTransform = function(t, i, n, s) {
                    if (t._gsTransform && n && !s) return t._gsTransform;
                    var o, l, d, h, u, c, p = n ? t._gsTransform || new Oe : new Oe,
                        f = 0 > p.scaleX,
                        g = 2e-5,
                        m = 1e5,
                        _ = ke ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                        v = parseFloat(a.defaultTransformPerspective) || 0;
                    if (p.svg = !(!t.getBBox || !Ee(t)), p.svg && (Re(t, Q(t, Se, r, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), xe = a.useSVGTransformAttr || Me), o = Ie(t), o !== ze) {
                        if (16 === o.length) {
                            var y, w, x, b, T, P = o[0],
                                S = o[1],
                                k = o[2],
                                O = o[3],
                                C = o[4],
                                A = o[5],
                                L = o[6],
                                M = o[7],
                                R = o[8],
                                E = o[9],
                                I = o[10],
                                D = o[12],
                                F = o[13],
                                N = o[14],
                                j = o[11],
                                B = Math.atan2(L, I);
                            p.zOrigin && (N = -p.zOrigin, D = R * N - o[12], F = E * N - o[13], N = I * N + p.zOrigin - o[14]), p.rotationX = B * z, B && (b = Math.cos(-B), T = Math.sin(-B), y = C * b + R * T, w = A * b + E * T, x = L * b + I * T, R = C * -T + R * b, E = A * -T + E * b, I = L * -T + I * b, j = M * -T + j * b, C = y, A = w, L = x), B = Math.atan2(R, I), p.rotationY = B * z, B && (b = Math.cos(-B), T = Math.sin(-B), y = P * b - R * T, w = S * b - E * T, x = k * b - I * T, E = S * T + E * b, I = k * T + I * b, j = O * T + j * b, P = y, S = w, k = x), B = Math.atan2(S, P), p.rotation = B * z, B && (b = Math.cos(-B), T = Math.sin(-B), P = P * b + C * T, w = S * b + A * T, A = S * -T + A * b, L = k * -T + L * b, S = w), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(P * P + S * S) * m + .5) / m, p.scaleY = (0 | Math.sqrt(A * A + E * E) * m + .5) / m, p.scaleZ = (0 | Math.sqrt(L * L + I * I) * m + .5) / m, p.skewX = 0, p.perspective = j ? 1 / (0 > j ? -j : j) : 0, p.x = D, p.y = F, p.z = N, p.svg && (p.x -= p.xOrigin - (p.xOrigin * P - p.yOrigin * C), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * A))
                        } else if (!(ke && !s && o.length && p.x === o[4] && p.y === o[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(t, "display", i))) {
                            var X = o.length >= 6,
                                H = X ? o[0] : 1,
                                V = o[1] || 0,
                                Y = o[2] || 0,
                                W = X ? o[3] : 1;
                            p.x = o[4] || 0, p.y = o[5] || 0, d = Math.sqrt(H * H + V * V), h = Math.sqrt(W * W + Y * Y), u = H || V ? Math.atan2(V, H) * z : p.rotation || 0, c = Y || W ? Math.atan2(Y, W) * z + u : p.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (f ? (d *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (h *= -1, c += 0 >= c ? 180 : -180)), p.scaleX = d, p.scaleY = h, p.rotation = u, p.skewX = c, ke && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * Y), p.y -= p.yOrigin - (p.xOrigin * V + p.yOrigin * W))
                        }
                        p.zOrigin = _;
                        for (l in p) g > p[l] && p[l] > -g && (p[l] = 0)
                    }
                    return n && (t._gsTransform = p, p.svg && (xe && t.style[Te] ? e.delayedCall(.001, function() {
                        Be(t.style, Te)
                    }) : !xe && t.getAttribute("transform") && e.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), p
                },
                Fe = function(t) {
                    var e, i, n = this.data,
                        r = -n.rotation * E,
                        s = r + n.skewX * E,
                        a = 1e5,
                        o = (0 | Math.cos(r) * n.scaleX * a) / a,
                        l = (0 | Math.sin(r) * n.scaleX * a) / a,
                        d = (0 | Math.sin(s) * -n.scaleY * a) / a,
                        h = (0 | Math.cos(s) * n.scaleY * a) / a,
                        u = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        i = l, l = -d, d = -i, e = c.filter, u.filter = "";
                        var p, f, m = this.t.offsetWidth,
                            _ = this.t.offsetHeight,
                            v = "absolute" !== c.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + d + ", M22=" + h,
                            b = n.x + m * n.xPercent / 100,
                            T = n.y + _ * n.yPercent / 100;
                        if (null != n.ox && (p = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, f = (n.oyp ? .01 * _ * n.oy : n.oy) - _ / 2, b += p - (p * o + f * l), T += f - (p * d + f * h)), v ? (p = m / 2, f = _ / 2, y += ", Dx=" + (p - (p * o + f * l) + b) + ", Dy=" + (f - (p * d + f * h) + T) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === d && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                            var P, S, k, O = 8 > g ? 1 : -1;
                            for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * _)) / 2 + b), n.ieOffsetY = Math.round((_ - ((0 > h ? -h : h) * _ + (0 > d ? -d : d) * m)) / 2 + T), _e = 0; 4 > _e; _e++) S = ee[_e], P = c[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(w, "")) || 0, k = i !== n[S] ? 2 > _e ? -n.ieOffsetX : -n.ieOffsetY : 2 > _e ? p - n.ieOffsetX : f - n.ieOffsetY, u[S] = (n[S] = Math.round(i - k * (0 === _e || 2 === _e ? 1 : O))) + "px"
                        }
                    }
                },
                Ne = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                    var e, i, n, r, s, a, o, l, d, h, u, c, f, g, m, _, v, y, w, x, b, T, P, S = this.data,
                        k = this.t.style,
                        O = S.rotation,
                        C = S.rotationX,
                        A = S.rotationY,
                        L = S.scaleX,
                        M = S.scaleY,
                        R = S.scaleZ,
                        z = S.x,
                        I = S.y,
                        D = S.z,
                        F = S.svg,
                        N = S.perspective,
                        j = S.force3D;
                    if (!((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || D || N || A || C) || xe && F || !ke) return void(O || S.skewX || F ? (O *= E, T = S.skewX * E, P = 1e5, e = Math.cos(O) * L, r = Math.sin(O) * L, i = Math.sin(O - T) * -M, s = Math.cos(O - T) * M, T && "simple" === S.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, s *= v, S.skewY && (e *= v, r *= v)), F && (z += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, I += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset, xe && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), z += .01 * S.xPercent * g.width, I += .01 * S.yPercent * g.height), g = 1e-6, g > z && z > -g && (z = 0), g > I && I > -g && (I = 0)), w = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | s * P) / P + "," + z + "," + I + ")", F && xe ? this.t.setAttribute("transform", "matrix(" + w) : k[Te] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + w) : k[Te] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + L + ",0,0," + M + "," + z + "," + I + ")");
                    if (p && (g = 1e-4, g > L && L > -g && (L = R = 2e-5), g > M && M > -g && (M = R = 2e-5), !N || S.z || S.rotationX || S.rotationY || (N = 0)), O || S.skewX) O *= E, m = e = Math.cos(O), _ = r = Math.sin(O), S.skewX && (O -= S.skewX * E, m = Math.cos(O), _ = Math.sin(O), "simple" === S.skewType && (v = Math.tan(S.skewX * E), v = Math.sqrt(1 + v * v), m *= v, _ *= v, S.skewY && (e *= v, r *= v))), i = -_, s = m;
                    else {
                        if (!(A || C || 1 !== R || N || F)) return void(k[Te] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + I + "px," + D + "px)" + (1 !== L || 1 !== M ? " scale(" + L + "," + M + ")" : ""));
                        e = s = 1, i = r = 0
                    }
                    d = 1, n = a = o = l = h = u = 0, c = N ? -1 / N : 0, f = S.zOrigin, g = 1e-6, x = ",", b = "0", O = A * E, O && (m = Math.cos(O), _ = Math.sin(O), o = -_, h = c * -_, n = e * _, a = r * _, d = m, c *= m, e *= m, r *= m), O = C * E, O && (m = Math.cos(O), _ = Math.sin(O), v = i * m + n * _, y = s * m + a * _, l = d * _, u = c * _, n = i * -_ + n * m, a = s * -_ + a * m, d *= m, c *= m, i = v, s = y), 1 !== R && (n *= R, a *= R, d *= R, c *= R), 1 !== M && (i *= M, s *= M, l *= M, u *= M), 1 !== L && (e *= L, r *= L, o *= L, h *= L), (f || F) && (f && (z += n * -f, I += a * -f, D += d * -f + f), F && (z += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, I += S.yOrigin - (S.xOrigin * r + S.yOrigin * s) + S.yOffset), g > z && z > -g && (z = b), g > I && I > -g && (I = b), g > D && D > -g && (D = 0)), w = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", w += (g > e && e > -g ? b : e) + x + (g > r && r > -g ? b : r) + x + (g > o && o > -g ? b : o), w += x + (g > h && h > -g ? b : h) + x + (g > i && i > -g ? b : i) + x + (g > s && s > -g ? b : s), C || A ? (w += x + (g > l && l > -g ? b : l) + x + (g > u && u > -g ? b : u) + x + (g > n && n > -g ? b : n), w += x + (g > a && a > -g ? b : a) + x + (g > d && d > -g ? b : d) + x + (g > c && c > -g ? b : c) + x) : w += ",0,0,0,0,1,0,", w += z + x + I + x + D + x + (N ? 1 + -D / N : 1) + ")", k[Te] = w
                };
            d = Oe.prototype, d.x = d.y = d.z = d.skewX = d.skewY = d.rotation = d.rotationX = d.rotationY = d.zOrigin = d.xPercent = d.yPercent = d.xOffset = d.yOffset = 0, d.scaleX = d.scaleY = d.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, n, s, o, l) {
                    if (n._lastParsedTransform === l) return s;
                    n._lastParsedTransform = l;
                    var d, h, u, c, p, f, g, m, _, v = t._gsTransform,
                        y = n._transform = De(t, r, !0, l.parseTransform),
                        w = t.style,
                        x = 1e-6,
                        b = be.length,
                        T = l,
                        P = {},
                        S = "transformOrigin";
                    if ("string" == typeof T.transform && Te) u = N.style, u[Te] = T.transform, u.display = "block", u.position = "absolute", D.body.appendChild(N), d = De(N, null, !1), D.body.removeChild(N), null != T.xPercent && (d.xPercent = se(T.xPercent, y.xPercent)), null != T.yPercent && (d.yPercent = se(T.yPercent, y.yPercent));
                    else if ("object" == typeof T) {
                        if (d = {
                                scaleX: se(null != T.scaleX ? T.scaleX : T.scale, y.scaleX),
                                scaleY: se(null != T.scaleY ? T.scaleY : T.scale, y.scaleY),
                                scaleZ: se(T.scaleZ, y.scaleZ),
                                x: se(T.x, y.x),
                                y: se(T.y, y.y),
                                z: se(T.z, y.z),
                                xPercent: se(T.xPercent, y.xPercent),
                                yPercent: se(T.yPercent, y.yPercent),
                                perspective: se(T.transformPerspective, y.perspective)
                            }, g = T.directionalRotation, null != g)
                            if ("object" == typeof g)
                                for (u in g) T[u] = g[u];
                            else T.rotation = g;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (d.x = 0, d.xPercent = se(T.x, y.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (d.y = 0, d.yPercent = se(T.y, y.yPercent)), d.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : y.rotation, y.rotation, "rotation", P), ke && (d.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), d.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), d.skewX = null == T.skewX ? y.skewX : ae(T.skewX, y.skewX), d.skewY = null == T.skewY ? y.skewY : ae(T.skewY, y.skewY), (h = d.skewY - y.skewY) && (d.skewX += h, d.rotation += h)
                    }
                    for (ke && null != T.force3D && (y.force3D = T.force3D, f = !0), y.skewType = T.skewType || y.skewType || a.defaultSkewType, p = y.force3D || y.z || y.rotationX || y.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, p || null == T.scale || (d.scaleZ = 1); --b > -1;) i = be[b], c = d[i] - y[i], (c > x || -x > c || null != T[i] || null != I[i]) && (f = !0, s = new fe(y, i, y[i], c, s), i in P && (s.e = P[i]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
                    return c = T.transformOrigin, y.svg && (c || T.svgOrigin) && (m = y.xOffset, _ = y.yOffset, Re(t, ne(c), d, T.svgOrigin, T.smoothOrigin), s = ge(y, "xOrigin", (v ? y : d).xOrigin, d.xOrigin, s, S), s = ge(y, "yOrigin", (v ? y : d).yOrigin, d.yOrigin, s, S), (m !== y.xOffset || _ !== y.yOffset) && (s = ge(y, "xOffset", v ? m : y.xOffset, y.xOffset, s, S), s = ge(y, "yOffset", v ? _ : y.yOffset, y.yOffset, s, S)), c = xe ? null : "0px 0px"), (c || ke && p && y.zOrigin) && (Te ? (f = !0, i = Se, c = (c || Q(t, i, r, !1, "50% 50%")) + "", s = new fe(w, i, 0, 0, s, -1, S), s.b = w[i], s.plugin = o, ke ? (u = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === u || "0px" !== c[2]) ? parseFloat(c[2]) : u) || 0, s.xs0 = s.e = c[0] + " " + (c[1] || "50%") + " 0px", s = new fe(y, "zOrigin", 0, 0, s, -1, s.n), s.b = u, s.xs0 = s.e = y.zOrigin) : s.xs0 = s.e = c) : ne(c + "", y)), f && (n._transformType = y.svg && xe || !p && 3 !== this._transformType ? 2 : 3), s
                },
                prefix: !0
            }), ye("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), ye("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, s, a) {
                    e = this.format(e);
                    var o, l, d, h, u, c, p, f, g, m, _, v, y, w, x, b, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        P = t.style;
                    for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = U(T[l])), u = h = Q(t, T[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (h = u.split(" "), u = h[0], h = h[1]), c = d = o[l], p = parseFloat(u), v = u.substr((p + "").length), y = "=" === c.charAt(1), y ? (f = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), f *= parseFloat(c), _ = c.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(c), _ = c.substr((f + "").length)), "" === _ && (_ = n[i] || v), _ !== v && (w = Z(t, "borderLeft", p, v), x = Z(t, "borderTop", p, v), "%" === _ ? (u = 100 * (w / g) + "%", h = 100 * (x / m) + "%") : "em" === _ ? (b = Z(t, "borderLeft", 1, "em"), u = w / b + "em", h = x / b + "em") : (u = w + "px", h = x + "px"), y && (c = parseFloat(u) + f + _, d = parseFloat(h) + f + _)), a = me(P, T[l], u + " " + h, c + " " + d, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: ue("0px 0px 0px 0px", !1, !0)
            }), ye("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, n, s, a) {
                    var o, l, d, h, u, c, p = "background-position",
                        f = r || G(t, null),
                        m = this.format((f ? g ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        _ = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== _.indexOf("%")) && (c = Q(t, "backgroundImage").replace(O, ""), c && "none" !== c)) {
                        for (o = m.split(" "), l = _.split(" "), j.setAttribute("src", c), d = 2; --d > -1;) m = o[d], h = -1 !== m.indexOf("%"), h !== (-1 !== l[d].indexOf("%")) && (u = 0 === d ? t.offsetWidth - j.width : t.offsetHeight - j.height, o[d] = h ? parseFloat(m) / 100 * u + "px" : 100 * (parseFloat(m) / u) + "%");
                        m = o.join(" ")
                    }
                    return this.parseComplex(t.style, m, _, s, a)
                },
                formatter: ne
            }), ye("backgroundSize", {
                defaultValue: "0 0",
                formatter: ne
            }), ye("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), ye("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), ye("transformStyle", {
                prefix: !0
            }), ye("backfaceVisibility", {
                prefix: !0
            }), ye("userSelect", {
                prefix: !0
            }), ye("margin", {
                parser: ce("marginTop,marginRight,marginBottom,marginLeft")
            }), ye("padding", {
                parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), ye("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, n, s, a) {
                    var o, l, d;
                    return 9 > g ? (l = t.currentStyle, d = 8 > g ? " " : ",", o = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", e = this.format(e).split(",").join(d)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, s, a)
                }
            }), ye("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), ye("autoRound,strictUnits", {
                parser: function(t, e, i, n, r) {
                    return r
                }
            }), ye("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, n, s, a) {
                    return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), s, a)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
                }
            }), ye("borderWidth", {
                parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), ye("float,cssFloat,styleFloat", {
                parser: function(t, e, i, n, r) {
                    var s = t.style,
                        a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new fe(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
                }
            });
            var je = function(t) {
                var e, i = this.t,
                    n = i.filter || Q(this.data, "filter") || "",
                    r = 0 | this.s + this.c * t;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
            };
            ye("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, n, s, a) {
                    var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                        l = t.style,
                        d = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), d && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), H ? s = new fe(l, "opacity", o, e - o, s) : (s = new fe(l, "opacity", 100 * o, 100 * (e - o), s), s.xn1 = d ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = a, s.setRatio = je), d && (s = new fe(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                }
            });
            var Be = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Xe = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Be(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            ye("className", {
                parser: function(t, e, n, s, a, o, l) {
                    var d, h, u, c, p, f = t.getAttribute("class") || "",
                        g = t.style.cssText;
                    if (a = s._classNamePT = new fe(t, n, 0, 0, a, 2), a.setRatio = Xe, a.pr = -11, i = !0, a.b = f, h = K(t, r), u = t._gsClassPT) {
                        for (c = {}, p = u.data; p;) c[p.p] = 1, p = p._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), d = J(t, h, K(t), l, c), t.setAttribute("class", f), a.data = d.firstMPT, t.style.cssText = g, a = a.xfirst = s.parse(t, d.difs, a, o)
                }
            });
            var He = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, r, s, a = this.t.style,
                        o = l.transform.parse;
                    if ("all" === this.e) a.cssText = "", r = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Se : l[i].p), Be(a, i);
                    r && (Be(a, Te), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (ye("clearProps", {
                    parser: function(t, e, n, r, s) {
                        return s = new fe(t, n, 0, 0, s, 2), s.setRatio = He, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                    }
                }), d = "bezier,throwProps,physicsProps,physics2D".split(","), _e = d.length; _e--;) we(d[_e]);
            d = a.prototype, d._firstPT = d._lastParsedTransform = d._transform = null, d._onInitTween = function(t, e, o) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = G(t, ""), s = this._overwriteProps;
                var d, p, g, m, _, v, y, w, x, T = t.style;
                if (u && "" === T.zIndex && (d = Q(t, "zIndex", r), ("auto" === d || "" === d) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, d = K(t, r), T.cssText = m + ";" + e, d = J(t, d, K(t)).difs, !H && b.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, T.cssText = m), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (x = 3 === this._transformType, Te ? c && (u = !0, "" === T.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : T.zoom = 1, g = p; g && g._next;) g = g._next;
                    w = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, g), w.setRatio = Te ? Ne : Fe, w.data = this._transform || De(t, r, !0), w.tween = o, w.pr = -1, s.pop()
                }
                if (i) {
                    for (; p;) {
                        for (v = p._next, g = m; g && g.pr > p.pr;) g = g._next;
                        (p._prev = g ? g._prev : _) ? p._prev._next = p: m = p, (p._next = g) ? g._prev = p : _ = p, p = v
                    }
                    this._firstPT = m
                }
                return !0
            }, d.parse = function(t, e, i, s) {
                var a, o, d, u, c, p, f, g, m, _, v = t.style;
                for (a in e) p = e[a], o = l[a], o ? i = o.parse(t, p, a, this, i, s, e) : (c = Q(t, a, r) + "", m = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(p) ? (m || (p = de(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = me(v, a, c, p, !0, "transparent", i, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (d = parseFloat(c), f = d || 0 === d ? c.substr((d + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (d = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (d = $(t, a, r), f = "px") : (d = "opacity" !== a ? 0 : 1, f = "")), _ = m && "=" === p.charAt(1), _ ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), g = p.replace(w, "")) : (u = parseFloat(p), g = m ? p.replace(w, "") : ""), "" === g && (g = a in n ? n[a] : f), p = u || 0 === u ? (_ ? u + d : u) + g : e[a], f !== g && "" !== g && (u || 0 === u) && d && (d = Z(t, a, d, f), "%" === g ? (d /= Z(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = d + "%")) : "em" === g ? d /= Z(t, a, 1, "em") : "px" !== g && (u = Z(t, a, u, g), g = "px"), _ && (u || 0 === u) && (p = u + d + g)), _ && (u += d), !d && 0 !== d || !u && 0 !== u ? void 0 !== v[a] && (p || "NaN" != p + "" && null != p) ? (i = new fe(v, a, u || d || 0, 0, i, -1, a, !1, 0, c, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : c) : Y("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, d, u - d, i, 0, a, h !== !1 && ("px" === g || "zIndex" === a), 0, c, p), i.xs0 = g)) : i = me(v, a, c, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                return i
            }, d.setRatio = function(t) {
                var e, i, n, r = this._firstPT,
                    s = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                if (1 === r.type)
                                    if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, d._enableTransforms = function(t) {
                this._transform = this._transform || De(this._target, r, !0), this._transformType = this._transform.svg && xe || !t && 3 !== this._transformType ? 2 : 3
            };
            var Ve = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            d._addLazySet = function(t, e, i) {
                var n = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Ve, n.data = this
            }, d._linkCSSP = function(t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, d._kill = function(e) {
                var i, n, r, s = e;
                if (e.autoAlpha || e.alpha) {
                    s = {};
                    for (n in e) s[n] = e[n];
                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
            };
            var Ye = function(t, e, i) {
                var n, r, s, a;
                if (t.slice)
                    for (r = t.length; --r > -1;) Ye(t[r], e, i);
                else
                    for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], a = s.type, s.style && (e.push(K(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Ye(s, e, i)
            };
            return a.cascadeTo = function(t, i, n) {
                var r, s, a, o, l = e.to(t, i, n),
                    d = [l],
                    h = [],
                    u = [],
                    c = [],
                    p = e._internals.reservedProps;
                for (t = l._targets || l.target, Ye(t, h, c), l.render(i, !0, !0), Ye(t, u), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
                    if (s = J(c[r], h[r], u[r]), s.firstMPT) {
                        s = s.difs;
                        for (a in n) p[a] && (s[a] = n[a]);
                        o = {};
                        for (a in s) o[a] = h[r][a];
                        d.push(e.fromTo(c[r], i, o, s))
                    }
                return d
            }, t.activate([a]), a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, n = t.split("."),
                r = e;
            for (i = 0; n.length > i; i++) r[n[i]] = r = r[n[i]] || {};
            return r
        },
        n = i("com.greensock.utils"),
        r = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        s = document,
        a = s.defaultView ? s.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        l = function(t, e, i, n) {
            var r;
            return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), n ? r : parseInt(r, 10) || 0
        },
        d = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        h = function(t) {
            var e, i, n, r = [],
                s = t.length;
            for (e = 0; s > e; e++)
                if (i = t[e], d(i))
                    for (n = i.length, n = 0; i.length > n; n++) r.push(i[n]);
                else r.push(i);
            return r
        },
        u = ")eefec303079ad17405c",
        c = /(?:<br>|<br\/>|<br \/>)/gi,
        p = s.all && !s.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
        g = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        },
        m = n.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = m.selector(t)), !t) throw "cannot split a null element.";
            this.elements = d(t) ? h(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        _ = function(t, e, i) {
            var n = t.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (t = t.firstChild; t; t = t.nextSibling) _(t, e, i);
            else(3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        v = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        y = function(t, e, i, n, o) {
            c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
            var d, h, p, f, m, y, w, x, b, T, P, S, k, O, C = r(t),
                A = e.type || e.split || "chars,words,lines",
                L = -1 !== A.indexOf("lines") ? [] : null,
                M = -1 !== A.indexOf("words"),
                R = -1 !== A.indexOf("chars"),
                E = "absolute" === e.position || e.absolute === !0,
                z = E ? "&#173; " : " ",
                I = -999,
                D = a(t),
                F = l(t, "paddingLeft", D),
                N = l(t, "borderBottomWidth", D) + l(t, "borderTopWidth", D),
                j = l(t, "borderLeftWidth", D) + l(t, "borderRightWidth", D),
                B = l(t, "paddingTop", D) + l(t, "paddingBottom", D),
                X = l(t, "paddingLeft", D) + l(t, "paddingRight", D),
                H = l(t, "textAlign", D, !0),
                V = t.clientHeight,
                Y = t.clientWidth,
                W = "</div>",
                q = g(e.wordsClass),
                U = g(e.charsClass),
                G = -1 !== (e.linesClass || "").indexOf("++"),
                Q = e.linesClass,
                Z = -1 !== C.indexOf("<"),
                $ = !0,
                K = [],
                J = [],
                te = [];
            for (G && (Q = Q.split("++").join("")), Z && (C = C.split("<").join("{{LT}}")), d = C.length, f = q(), m = 0; d > m; m++)
                if (w = C.charAt(m), ")" === w && C.substr(m, 20) === u) f += ($ ? W : "") + "<BR/>", $ = !1, m !== d - 20 && C.substr(m + 20, 20) !== u && (f += " " + q(), $ = !0), m += 19;
                else if (" " === w && " " !== C.charAt(m - 1) && m !== d - 1 && C.substr(m - 20, 20) !== u) {
                for (f += $ ? W : "", $ = !1;
                    " " === C.charAt(m + 1);) f += z, m++;
                (")" !== C.charAt(m + 1) || C.substr(m + 1, 20) !== u) && (f += z + q(), $ = !0)
            } else f += R && " " !== w ? U() + w + "</div>" : w;
            for (t.innerHTML = f + ($ ? W : ""), Z && _(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), d = y.length, x = [], m = 0; d > m; m++) x[m] = y[m];
            if (L || E)
                for (m = 0; d > m; m++) b = x[m], p = b.parentNode === t, (p || E || R && !M) && (T = b.offsetTop, L && p && T !== I && "BR" !== b.nodeName && (h = [], L.push(h), I = T), E && (b._x = b.offsetLeft, b._y = T, b._w = b.offsetWidth, b._h = b.offsetHeight), L && (M !== p && R || (h.push(b), b._x -= F), p && m && (x[m - 1]._wordEnd = !0), "BR" === b.nodeName && b.nextSibling && "BR" === b.nextSibling.nodeName && L.push([])));
            for (m = 0; d > m; m++) b = x[m], p = b.parentNode === t, "BR" !== b.nodeName ? (E && (S = b.style, M || p || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + "px", S.top = b._y + "px", S.position = "absolute", S.display = "block", S.width = b._w + 1 + "px", S.height = b._h + "px"), M ? p && "" !== b.innerHTML ? J.push(b) : R && K.push(b) : p ? (t.removeChild(b), x.splice(m--, 1), d--) : !p && R && (T = !L && !E && b.nextSibling, t.appendChild(b), T || t.appendChild(s.createTextNode(" ")), K.push(b))) : L || E ? (t.removeChild(b), x.splice(m--, 1), d--) : M || t.appendChild(b);
            if (L) {
                for (E && (P = s.createElement("div"), t.appendChild(P), k = P.offsetWidth + "px", T = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (O = !E || !M && !R, m = 0; L.length > m; m++) {
                    for (h = L[m], P = s.createElement("div"), P.style.cssText = "display:block;text-align:" + H + ";position:" + (E ? "absolute;" : "relative;"), Q && (P.className = Q + (G ? m + 1 : "")), te.push(P), d = h.length, y = 0; d > y; y++) "BR" !== h[y].nodeName && (b = h[y], P.appendChild(b), O && (b._wordEnd || M) && P.appendChild(s.createTextNode(" ")), E && (0 === y && (P.style.top = b._y + "px", P.style.left = F + T + "px"), b.style.top = "0px", T && (b.style.left = b._x - T + "px")));
                    0 === d && (P.innerHTML = "&nbsp;"), M || R || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), E && (P.style.width = k, P.style.height = b._h + "px"), t.appendChild(P)
                }
                t.style.cssText = S
            }
            E && (V > t.clientHeight && (t.style.height = V - B + "px", V > t.clientHeight && (t.style.height = V + N + "px")), Y > t.clientWidth && (t.style.width = Y - X + "px", Y > t.clientWidth && (t.style.width = Y + j + "px"))), v(i, K), v(n, J), v(o, te)
        },
        w = m.prototype;
    w.split = function(t) {
        this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, w.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, m.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (m.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, m.version = "0.3.3"
}(_gsScope),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText");
try {
    window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (e) {}
if (1 == window.tplogs) try {
    console.groupEnd()
} catch (e) {}! function(t) {
    t.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    }, t.expr[":"].uncached = function(e) {
        var i = document.createElement("img");
        return i.src = e.src, t(e).is('img[src!=""]') && !i.complete
    }, t.fn.waitForImages = function(e, i, n) {
        if (t.isPlainObject(arguments[0]) && (i = e.each, n = e.waitForAll, e = e.finished), e = e || t.noop, i = i || t.noop, n = !!n, !t.isFunction(e) || !t.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var r = t(this),
                s = [];
            if (n) {
                var a = t.waitForImages.hasImageProperties || [],
                    o = /url\((['"]?)(.*?)\1\)/g;
                r.find("*").each(function() {
                    var e = t(this);
                    e.is("img:uncached") && s.push({
                        src: e.attr("src"),
                        element: e[0]
                    }), t.each(a, function(t, i) {
                        var n = e.css(i);
                        if (!n) return !0;
                        for (var r; r = o.exec(n);) s.push({
                            src: r[2],
                            element: e[0]
                        })
                    })
                })
            } else r.find("img:uncached").each(function() {
                s.push({
                    src: this.src,
                    element: this
                })
            });
            var l = s.length,
                d = 0;
            0 == l && e.call(r[0]), t.each(s, function(n, s) {
                var a = new Image;
                t(a).bind("load error", function(t) {
                    return d++, i.call(s.element, d, l, "load" == t.type), d == l ? (e.call(r[0]), !1) : void 0
                }), a.src = s.src
            })
        })
    }
}(jQuery), ! function(t, e) {
    "use strict";
    t.fn.extend({
        revolution: function(n) {
            var r = {
                delay: 9e3,
                responsiveLevels: 4064,
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%"
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "on",
                    opacity: "on",
                    disable_onmobile: "off"
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                    },
                    thumbnails: {
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return n = t.extend(!0, {}, r, n), this.each(function() {
                var r = t(this);
                "hero" == n.sliderType && r.find(">ul>li").each(function(e) {
                    e > 0 && t(this).remove()
                }), n.jsFileLocation = n.jsFileLocation || o("themepunch.revolution.min.js"), n.jsFileLocation = n.jsFileLocation + n.extensions, n.scriptsneeded = s(n, r), n.curWinRange = 0, t(this).on("scriptsloaded", function() {
                    return n.modulesfailing ? (r.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + n.errorm + "</div>").show(), !1) : (i.migration != e && (n = i.migration(r, n)), punchgs.force3D = !0, "on" !== n.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), d(r, n), void u(r, n))
                }), a(r, n.scriptsneeded)
            })
        },
        revaddcallback: function(i) {
            return this.each(function() {
                var n = t(this);
                if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                    var r = n.parent().find(".tp-bannertimer"),
                        s = r.data("opt");
                    s.callBackArray === e && (s.callBackArray = new Array), s.callBackArray.push(i)
                }
            })
        },
        revgetparallaxproc: function() {
            var i = t(this);
            if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                var n = i.parent().find(".tp-bannertimer"),
                    r = n.data("opt");
                return r.scrollproc
            }
        },
        revdebugmode: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var n = i.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    r.debugMode = !0, m(i, r)
                }
            })
        },
        revscroll: function(i) {
            return this.each(function() {
                var n = t(this);
                n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0 && t("body,html").animate({
                    scrollTop: n.offset().top + opt.li.height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var n = i.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    m(i, r)
                }
            })
        },
        revkill: function() {
            var n = this,
                r = t(this);
            if (punchgs.TweenLite.killDelayedCallsTo(showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), r != e && r.length > 0 && t("body").find("#" + r.attr("id")).length > 0) {
                r.data("conthover", 1), r.data("conthover-changed", 1), r.trigger("revolution.slide.onpause");
                var s = r.parent().find(".tp-bannertimer"),
                    a = s.data("opt");
                a.tonpause = !0, r.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), r.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var o = "resize.revslider-" + r.attr("id");
                t(window).off(o), r.find("*").each(function() {
                    var i = t(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != e && i.data("tween").kill(), i.data("kenburn") != e && i.data("kenburn").kill(), i.data("timeline_out") != e && i.data("timeline_out").kill(), i.data("timeline") != e && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), s.remove();
                try {
                    r.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (l) {}
                try {
                    r.closest(".rev_slider_wrapper").remove()
                } catch (l) {}
                try {
                    r.remove()
                } catch (l) {}
                return r.empty(), r.html(), r = null, a = null, delete n.c, delete n.opt, !0
            }
            return !1
        },
        revpause: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                    var n = i.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    r.tonpause = !0, i.trigger("stoptimer")
                }
            })
        },
        revresume: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
                    var n = i.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    r.tonpause = !1, i.trigger("starttimer")
                }
            })
        },
        revnext: function() {
            return this.each(function() {
                var n = t(this);
                if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                    var r = n.parent().find(".tp-bannertimer"),
                        s = r.data("opt");
                    i.callingNewSlide(s, n, 1)
                }
            })
        },
        revprev: function() {
            return this.each(function() {
                var n = t(this);
                if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                    var r = n.parent().find(".tp-bannertimer"),
                        s = r.data("opt");
                    i.callingNewSlide(s, n, -1)
                }
            })
        },
        revmaxslide: function() {
            return t(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function() {
            var i = t(this);
            if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                var n = i.parent().find(".tp-bannertimer"),
                    r = n.data("opt");
                return parseInt(r.act, 0) + 1
            }
        },
        revlastslide: function() {
            return t(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function(n) {
            return this.each(function() {
                var r = t(this);
                if (r != e && r.length > 0 && t("body").find("#" + r.attr("id")).length > 0) {
                    var s = r.parent().find(".tp-bannertimer"),
                        a = s.data("opt");
                    i.callingNewSlide(a, r, "to" + (n - 1))
                }
            })
        },
        revcallslidewithid: function(n) {
            return this.each(function() {
                var r = t(this);
                if (r != e && r.length > 0 && t("body").find("#" + r.attr("id")).length > 0) {
                    var s = r.parent().find(".tp-bannertimer"),
                        a = s.data("opt");
                    i.callingNewSlide(a, r, n)
                }
            })
        }
    });
    var i = t.fn.revolution;
    t.extend(!0, i, {
        simp: function(t, e, i) {
            var n = Math.abs(t) - Math.floor(Math.abs(t / e)) * e;
            return i ? n : 0 > t ? -1 * n : n
        },
        iOSVersion: function() {
            var t = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t
        },
        isIE: function(e, i) {
            var n = t('<div style="display:none;"/>').appendTo(t("body"));
            n.html("<!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
            var r = n.find("a").length;
            return n.remove(), r
        },
        is_mobile: function() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                e = !1;
            for (var i in t) navigator.userAgent.split(t[i]).length > 1 && (e = !0);
            return e
        },
        callBackHandling: function(e, i, n) {
            try {
                e.callBackArray && t.each(e.callBackArray, function(t, e) {
                    e && e.inmodule && e.inmodule === i && e.atposition && e.atposition === n && e.callback && e.callback.call()
                })
            } catch (r) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function() {
            var t, e = navigator.appName,
                i = navigator.userAgent,
                n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"], n[0]
        },
        get_browser_version: function() {
            var t, e = navigator.appName,
                i = navigator.userAgent,
                n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"], n[1]
        },
        getHorizontalOffset: function(t, e) {
            var i = h(t, ".outer-left"),
                n = h(t, ".outer-right");
            switch (e) {
                case "left":
                    return i;
                case "right":
                    return n;
                case "both":
                    return i + n
            }
        },
        callingNewSlide: function(e, i, n) {
            var r = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index(),
                s = 0;
            i.find(".next-revslide").removeClass("next-revslide"), n && t.isNumeric(n) || n.match(/to/g) ? (1 === n || -1 === n ? (s = r + n, s = 0 > s ? e.slideamount - 1 : s >= e.slideamount ? 0 : s) : (n = t.isNumeric(n) ? n : parseInt(n.split("to")[1], 0), s = 0 > n ? 0 : n > e.slideamount - 1 ? e.slideamount - 1 : n), i.find(".tp-revslider-slidesli:eq(" + s + ")").addClass("next-revslide")) : n && i.find(".tp-revslider-slidesli").each(function() {
                var e = t(this);
                e.data("index") === n && e.addClass("next-revslide")
            }), s = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), s !== r && -1 != s ? O(i, e) : i.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function(i, n) {
            n.slotw = Math.ceil(n.width / n.slots), n.sloth = Math.ceil("fullscreen" == n.sliderLayout ? t(window).height() / n.slots : n.height / n.slots), "on" == n.autoHeight && i !== e && "" !== i && (n.sloth = Math.ceil(i.height() / n.slots))
        },
        setSize: function(i) {
            var n = (i.top_outer || 0) + (i.bottom_outer || 0),
                r = parseInt(i.carousel.padding_top || 0, 0),
                s = parseInt(i.carousel.padding_bottom || 0, 0),
                a = i.gridheight[i.curWinRange];
            if (a = a < i.minHeight ? i.minHeight : a, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, {
                    maxHeight: a + "px"
                }), i.c.css({
                    marginTop: r,
                    marginBottom: s
                }), i.width = i.ul.width(), i.height = i.ul.height(), _(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout) {
                i.height = i.bw * i.gridheight[i.curWinRange];
                var o = (i.c.parent().width(), t(window).height());
                if (i.fullScreenOffsetContainer != e) {
                    try {
                        var l = i.fullScreenOffsetContainer.split(",");
                        l && t.each(l, function(e, i) {
                            o = t(i).length > 0 ? o - t(i).outerHeight(!0) : o
                        })
                    } catch (d) {}
                    try {
                        i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != e && i.fullScreenOffset.length > 0 ? o -= t(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != e && i.fullScreenOffset.length > 0 && (o -= parseInt(i.fullScreenOffset, 0))
                    } catch (d) {}
                }
                o = o < i.minHeight ? i.minHeight : o, o -= n, i.c.parent().height(o), i.c.closest(".rev_slider_wrapper").height(o), i.c.css({
                    height: "100%"
                }), i.height = o, i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight)
            } else i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
            var h = {
                height: r + s + n + i.height
            };
            i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(h), i.c.closest(".rev_slider_wrapper").css(h), _(i)
        },
        enterInViewPort: function(n) {
            n.waitForCountDown && (M(n.c, n), n.waitForCountDown = !1), n.waitForFirstSlide && (O(n.c, n), n.waitForFirstSlide = !1), ("playing" == n.sliderlaststatus || n.sliderlaststatus == e) && n.c.trigger("starttimer"), n.lastplayedvideos != e && n.lastplayedvideos.length > 0 && t.each(n.lastplayedvideos, function(t, e) {
                i.playVideo(e, n)
            })
        },
        leaveViewPort: function(n) {
            n.sliderlaststatus = n.sliderstatus, n.c.trigger("stoptimer"), n.playingvideos != e && n.playingvideos.length > 0 && (n.lastplayedvideos = t.extend(!0, [], n.playingvideos), n.playingvideos && t.each(n.playingvideos, function(t, e) {
                i.stopVideo && i.stopVideo(e, n)
            }))
        }
    });
    var n = i.is_mobile(),
        r = function(i, n) {
            return t("body").data(i) ? !1 : n.filesystem ? (n.errorm === e && (n.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), n.errorm = n.errorm + '<br>&lt;script type="text/javascript" src="' + n.jsFileLocation + i + n.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(n.jsFileLocation + i + n.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), n.modulesfailing = !0, !1) : (t.ajax({
                url: n.jsFileLocation + i + n.extensions_suffix,
                dataType: "script",
                cache: !0,
                error: function(t) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + n.extensions_suffix + " on Path:" + n.jsFileLocation), console.info(t)
                }
            }), void t("body").data(i, !0))
        },
        s = function(n, s) {
            var a = new Object,
                o = n.navigation;
            return a.kenburns = !1, a.parallax = !1, a.carousel = !1, a.navigation = !1, a.videos = !1, a.actions = !1, a.layeranim = !1, a.migration = !1, s.data("version") && s.data("version").match(/5./gi) ? (s.find("img").each(function() {
                "on" == t(this).data("kenburns") && (a.kenburns = !0)
            }), ("carousel" == n.sliderType || "on" == o.keyboardNavigation || "on" == o.mouseScrollNavigation || "on" == o.touch.touchenabled || o.arrows.enable || o.bullets.enable || o.thumbnails.enable || o.tabs.enable) && (a.navigation = !0), s.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                var i = t(this);
                (i.data("ytid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (a.videos = !0), (i.data("vimeoid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (a.videos = !0), i.data("actions") !== e && (a.actions = !0), a.layeranim = !0
            }), s.find("li").each(function() {
                t(this).data("link") && t(this).data("link") != e && (a.layeranim = !0, a.actions = !0)
            }), !a.videos && (s.find(".rs-background-video-layer").length > 0 || s.find(".tp-videolayer").length > 0 || s.find("iframe").length > 0 || s.find("video").length > 0) && (a.videos = !0), "carousel" == n.sliderType && (a.carousel = !0), ("off" !== n.parallax.type || n.viewPort.enable || "true" == n.viewPort.enable) && (a.parallax = !0)) : (a.kenburns = !0, a.parallax = !0, a.carousel = !1, a.navigation = !0, a.videos = !0, a.actions = !0, a.layeranim = !0, a.migration = !0), "hero" == n.sliderType && (a.carousel = !1, a.navigation = !1), window.location.href.match(/file:/gi) && (a.filesystem = !0, n.filesystem = !0), a.videos && "undefined" == typeof i.isVideoPlaying && r("revolution.extension.video", n), a.carousel && "undefined" == typeof i.prepareCarousel && r("revolution.extension.carousel", n), a.carousel || "undefined" != typeof i.animateSlide || r("revolution.extension.slideanims", n), a.actions && "undefined" == typeof i.checkActions && r("revolution.extension.actions", n), a.layeranim && "undefined" == typeof i.handleStaticLayers && r("revolution.extension.layeranimation", n), a.kenburns && "undefined" == typeof i.stopKenBurn && r("revolution.extension.kenburn", n), a.navigation && "undefined" == typeof i.createNavigation && r("revolution.extension.navigation", n), a.migration && "undefined" == typeof i.migration && r("revolution.extension.migration", n), a.parallax && "undefined" == typeof i.checkForParallax && r("revolution.extension.parallax", n), a
        },
        a = function(t, e) {
            e.filesystem || "undefined" != typeof punchgs && (!e.kenburns || e.kenburns && "undefined" != typeof i.stopKenBurn) && (!e.navigation || e.navigation && "undefined" != typeof i.createNavigation) && (!e.carousel || e.carousel && "undefined" != typeof i.prepareCarousel) && (!e.videos || e.videos && "undefined" != typeof i.resetVideo) && (!e.actions || e.actions && "undefined" != typeof i.checkActions) && (!e.layeranim || e.layeranim && "undefined" != typeof i.handleStaticLayers) && (!e.migration || e.migration && "undefined" != typeof i.migration) && (!e.parallax || e.parallax && "undefined" != typeof i.checkForParallax) && (e.carousel || !e.carousel && "undefined" != typeof i.animateSlide) ? t.trigger("scriptsloaded") : setTimeout(function() {
                a(t, e)
            }, 50)
        },
        o = function() {
            var e = new RegExp("themepunch.revolution.min.js", "gi"),
                i = "";
            return t("script").each(function() {
                var n = t(this).attr("src");
                n && n.match(e) && (i = n)
            }), i = i.replace("jquery.themepunch.revolution.min.js", ""), i = i.replace("jquery.themepunch.revolution.js", ""), i = i.split("?")[0]
        },
        l = function(e) {
            var i = 9999,
                n = 0,
                r = 0,
                s = 0,
                a = t(window).width();
            e.responsiveLevels && e.responsiveLevels.length && t.each(e.responsiveLevels, function(t, e) {
                e > a && (0 == n || n > e) && (i = e, s = t, n = e), a > e && e > n && (n = e, r = t)
            }), i > n && (s = r), e.curWinRange = s
        },
        d = function(t, e) {
            e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%"
        },
        h = function(e, i) {
            var n = 0;
            return e.find(i).each(function() {
                var e = t(this);
                !e.hasClass("tp-forcenotvisible") && n < e.outerWidth() && (n = e.outerWidth())
            }), n
        },
        u = function(r, s) {
            if (r == e) return !1;
            if (r.data("aimg") != e && ("enabled" == r.data("aie8") && i.isIE(8) || "enabled" == r.data("amobile") && n) && r.html('<img class="tp-slider-alternative-image" src="' + r.data("aimg") + '">'), r.find(">ul").addClass("tp-revslider-mainul"), s.c = r, s.ul = r.find(".tp-revslider-mainul"), s.cid = r.attr("id"), s.ul.css({
                    visibility: "visible"
                }), s.slideamount = s.ul.find(">li").length, s.ul.find(">li").each(function(e) {
                    t(this).data("originalindex", e)
                }), "on" == s.shuffle) {
                var a = new Object,
                    o = s.ul.find(">li:first-child");
                a.fstransition = o.data("fstransition"), a.fsmasterspeed = o.data("fsmasterspeed"), a.fsslotamount = o.data("fsslotamount");
                for (var d = 0; d < s.slideamount; d++) {
                    var h = Math.round(Math.random() * s.slideamount);
                    s.ul.find(">li:eq(" + h + ")").prependTo(s.ul)
                }
                var u = s.ul.find(">li:first-child");
                u.data("fstransition", a.fstransition), u.data("fsmasterspeed", a.fsmasterspeed), u.data("fsslotamount", a.fsslotamount), s.li = s.ul.find(">li")
            }
            if (s.li = s.ul.find(">li"), s.thumbs = new Array, s.slots = 4, s.act = -1, s.firststart = 1, s.loadqueue = new Array, s.syncload = 0, s.conw = r.width(), s.conh = r.height(), s.responsiveLevels.length > 1 ? s.responsiveLevels[0] = 9999 : s.responsiveLevels = 9999, t.each(s.li, function(i, n) {
                    var n = t(n),
                        r = n.find(".rev-slidebg") || n.find("img").first(),
                        a = 0;
                    n.addClass("tp-revslider-slidesli"), n.data("index") === e && n.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var o = new Object;
                    o.params = new Array, o.id = n.data("index"), o.src = n.data("thumb") !== e ? n.data("thumb") : r.data("lazyload") !== e ? r.data("lazyload") : r.attr("src"), n.data("title") !== e && o.params.push({
                        from: RegExp("\\{\\{title\\}\\}", "g"),
                        to: n.data("title")
                    }), n.data("description") !== e && o.params.push({
                        from: RegExp("\\{\\{description\\}\\}", "g"),
                        to: n.data("description")
                    });
                    for (var a = 1; 10 >= a; a++) n.data("param" + a) !== e && o.params.push({
                        from: RegExp("\\{\\{param" + a + "\\}\\}", "g"),
                        to: n.data("param" + a)
                    });
                    if (s.thumbs.push(o), n.data("origindex", n.index()), n.data("link") != e) {
                        var l = n.data("link"),
                            d = n.data("target") || "_self",
                            h = "back" === n.data("slideindex") ? 0 : 60,
                            u = n.data("linktoslide"),
                            c = u;
                        u != e && "next" != u && "prev" != u && s.li.each(function() {
                            var e = t(this);
                            e.data("origindex") + 1 == c && (u = e.index() + 1)
                        }), "slide" != l && (u = "no");
                        var p = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + h + ';" data-x="center" data-y="center" ',
                            f = "scroll_under" === u ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : '[{"event":"click","action":"jumptoslide","slide":"2","delay":"0.2"}]';
                        p = "no" == u ? p + ' data-start="0">' : p + "data-actions='" + f + '\' data-start="0">', p += '<a style="width:100%;height:100%;display:block"', p = "slide" != l ? p + ' target="' + d + '" href="' + l + '"' : p, p += '><span style="width:100%;height:100%;display:block"></span></a></div>', n.append(p)
                    }
                }), s.rle = s.responsiveLevels.length || 1, s.gridwidth = c(s.gridwidth, s.rle), s.gridheight = c(s.gridheight, s.rle), "on" == s.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (r.find(".tp-caption").each(function() {
                    var e = t(this);
                    e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400)
                }), s.li.each(function() {
                    var e = t(this);
                    e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
                    var i = e.find(".rev-slidebg") || e.find(">img").first();
                    i.data("kenburns", "off")
                })), s.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), s.autoHeight = "fullscreen" == s.sliderLayout ? "on" : s.autoHeight, "fullwidth" == s.sliderLayout && "off" == s.autoHeight && r.css({
                    maxHeight: s.gridheight[s.curWinRange] + "px"
                }), "auto" != s.sliderLayout && 0 == r.closest(".forcefullwidth_wrapper_tp_banner").length) {
                var _ = r.parent(),
                    y = _.css("marginBottom"),
                    w = _.css("marginTop");
                y = y === e ? 0 : y, w = w === e ? 0 : w, _.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + w + ";margin-bottom:" + y + '"></div>'), r.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + r.height() + 'px"></div>'), r.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), r.parent().css({
                    position: "absolute"
                })
            }
            if (s.shadow !== e && s.shadow > 0 && (r.parent().addClass("tp-shadow" + s.shadow), r.parent().append('<div class="tp-shadowcover"></div>'), r.parent().find(".tp-shadowcover").css({
                    backgroundColor: r.parent().css("backgroundColor"),
                    backgroundImage: r.parent().css("backgroundImage")
                })), l(s), !r.hasClass("revslider-initialised")) {
                r.addClass("revslider-initialised"), r.addClass("tp-simpleresponsive"), r.attr("id") == e && r.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), s.firefox13 = !1, s.ie = !t.support.opacity, s.ie9 = 9 == document.documentMode, s.origcd = s.delay;
                var x = t.fn.jquery.split("."),
                    b = parseFloat(x[0]),
                    T = parseFloat(x[1]);
                parseFloat(x[2] || "0"), 1 == b && 7 > T && r.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + x + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), b > 1 && (s.ie = !1);
                var C = new Object;
                C.addedyt = 0, C.addedvim = 0, C.addedvid = 0, r.find(".tp-caption, .rs-background-video-layer").each(function() {
                    var r = t(this),
                        a = r.data("autoplayonlyfirsttime"),
                        o = r.data("autoplay");
                    r.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(r, s);
                    var l = 0;
                    if (r.find("iframe").each(function() {
                            punchgs.TweenLite.set(t(this), {
                                autoAlpha: 0
                            }), l++
                        }), l > 0 && r.data("iframes", !0), r.hasClass("tp-caption")) {
                        var d = r.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                        r.wrap('<div class="tp-parallax-wrap" style="' + d + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + d + 'position:absolute;"><div class="tp-mask-wrap" style="' + d + 'position:absolute" ></div></div></div>');
                        var h = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                            u = r.closest(".tp-loop-wrap");
                        t.each(h, function(t, e) {
                            var i = r.find(".rs-" + e),
                                n = i.data() || "";
                            "" != n && (u.data(n), u.addClass("rs-" + e), i.children(0).unwrap(), r.data("loopanimation", "on"))
                        }), punchgs.TweenLite.set(r, {
                            visibility: "hidden"
                        })
                    }
                    var c = r.data("actions");
                    c !== e && i.checkActions(r, s, c), p(r, s), i.checkVideoApis && (C = i.checkVideoApis(r, s, C)), n && ((1 == a || "true" == a) && r.data("autoplayonlyfirsttime", "false"), (1 == o || "true" == o) && r.data("autoplay", "off")), (1 == a || "true" == a || "1sttime" == o) && r.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == o || "true" == o || "on" == o || "no1sttime" == o) && r.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), r.hover(function() {
                    r.trigger("tp-mouseenter"), s.overcontainer = !0
                }, function() {
                    r.trigger("tp-mouseleft"), s.overcontainer = !1
                }), r.on("mouseover", function() {
                    r.trigger("tp-mouseover"), s.overcontainer = !0
                }), r.find(".tp-caption video").each(function() {
                    var e = t(this);
                    e.removeClass("video-js vjs-default-skin"), e.attr("preload", ""), e.css({
                        display: "none"
                    })
                }), "standard" !== s.sliderType && (s.lazyType = "all"), P(r.find(".tp-static-layers"), s, 0), k(r.find(".tp-static-layers img"), s, function() {
                    r.find(".tp-static-layers img").each(function() {
                        var i = t(this),
                            n = i.data("lazyload") != e ? i.data("lazyload") : i.attr("src"),
                            r = S(s, n);
                        i.attr("src", r.src)
                    })
                }), s.li.each(function(e) {
                    var i = t(this);
                    ("all" == s.lazyType || "smart" == s.lazyType && (0 == e || 1 == e || e == s.slideamount || e == s.slideamount - 1)) && (P(i, s, e), k(i, s, function() {
                        "carousel" == s.sliderType && punchgs.TweenLite.to(i, 1, {
                            autoAlpha: 1,
                            ease: punchgs.Power3.easeInOut
                        })
                    }))
                });
                var A = I("#")[0];
                if (A.length < 9 && A.split("slide").length > 1) {
                    var L = parseInt(A.split("slide")[1], 0);
                    1 > L && (L = 1), L > s.slideamount && (L = s.slideamount), s.startWithSlide = L - 1
                }
                r.append('<div class="tp-loader ' + s.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === r.find(".tp-bannertimer").length && r.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), r.find(".tp-bannertimer").css({
                    width: "0%"
                }), r.find(".tp-bannertimer").data("opt", s), s.ul.css({
                    display: "block"
                }), v(r, s), "off" !== s.parallax.type && i.checkForParallax(r, s), i.setSize(s), "hero" !== s.sliderType && i.createNavigation(r, s), i.resizeThumbsTabs && i.resizeThumbsTabs(s), f(s);
                var R = s.viewPort;
                s.inviewport = !1, R != e && R.enable && (R.visible_area = parseFloat(R.visible_area) / 100, R.visible_area = R.visible_area < .001 ? 100 * R.visible_area : R.visible_area, i.scrollTicker && i.scrollTicker(s, r)), setTimeout(function() {
                    "carousel" == s.sliderType && i.prepareCarousel(s), !R.enable || R.enable && s.inviewport || R.enable && !s.inviewport && "wait" == !R.outof ? O(r, s) : s.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(s), s.slideamount > 1 && (!R.enable || R.enable && s.inviewport ? M(r, s) : s.waitForCountDown = !0), setTimeout(function() {
                        r.trigger("revolution.slide.onloaded")
                    }, 100)
                }, s.startDelay), s.startDelay = 0, t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                    t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
                        t(window).trigger("resize")
                    }, 200)
                });
                var E = "resize.revslider-" + r.attr("id");
                t(window).on(E, function() {
                    return r == e ? !1 : (0 != t("body").find(r) && f(s), void((r.outerWidth(!0) != s.width || r.is(":hidden") || "fullscreen" == s.sliderLayout && t(window).height() != s.lastwindowheight) && (s.lastwindowheight = t(window).height(), m(r, s))))
                }), g(r, s), f(s), s.disableFocusListener || "true" == s.disableFocusListener || s.disableFocusListener === !0 || z(r, s)
            }
        },
        c = function(e, i) {
            if (!t.isArray(e)) {
                var n = e;
                e = new Array, e.push(n)
            }
            if (e.length < i)
                for (var n = e[e.length - 1], r = 0; r < i - e.length + 2; r++) e.push(n);
            return e
        },
        p = function(n, r) {
            "sliderenter" === n.data("start") && (r.layersonhover === e && (r.c.on("tp-mouseenter", function() {
                r.layersonhover && t.each(r.layersonhover, function(t, n) {
                    n.data("animdirection", "in");
                    var s = n.data("timeline_out"),
                        a = "carousel" === r.sliderType ? 0 : r.width / 2 - r.gridwidth[r.curWinRange] * r.bw / 2,
                        o = 0,
                        l = n.closest(".tp-revslider-slidesli");
                    if (l.hasClass("active-revslide") || l.hasClass("processing-revslide")) {
                        s != e && (s.pause(0), s.kill()), i.animateSingleCaption(n, r, a, o, 0, !1, !0);
                        var d = n.data("timeline");
                        n.data("triggerstate", "on"), d.play(0)
                    }
                })
            }), r.c.on("tp-mouseleft", function() {
                r.layersonhover && t.each(r.layersonhover, function(t, e) {
                    e.data("animdirection", "out"), e.data("triggered", !0), e.data("triggerstate", "off"), i.stopVideo && i.stopVideo(e, r), i.endMoveCaption && i.endMoveCaption(e, null, null, r)
                })
            }), r.layersonhover = new Array), r.layersonhover.push(n))
        },
        f = function(e) {
            if ("auto" != e.sliderLayout) {
                var n = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i.getHorizontalOffset(e.c, "left"));
                punchgs.TweenLite.set(e.c.parent(), {
                    left: 0 - n + "px",
                    width: t(window).width() - i.getHorizontalOffset(e.c, "both")
                })
            } else {
                var n = i.getHorizontalOffset(e.c, "left");
                punchgs.TweenLite.set(e.ul, {
                    left: n,
                    width: e.c.width() - i.getHorizontalOffset(e.c, "both")
                })
            }
        },
        g = function(n, r, s) {
            var a = n.parent();
            t(window).width() < r.hideSliderAtLimit ? (n.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({
                display: "none"
            })) : n.is(":hidden") && s && (a.css(a.data("olddisplay") != e && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? {
                display: a.data("olddisplay")
            } : {
                display: "block"
            }), n.trigger("restarttimer"), setTimeout(function() {
                m(n, r)
            }, 150)), i.hideUnHideNav && i.hideUnHideNav(r)
        },
        m = function(t, n) {
            if (l(n), !i.resizeThumbsTabs || i.resizeThumbsTabs(n) === !0) {
                if (g(t, n, !0), f(n), "carousel" == n.sliderType && i.prepareCarousel(n, !0), t === e) return !1;
                i.setSize(n), n.conw = n.c.width(), n.conh = n.c.height();
                var r = t.find(".active-revslide .slotholder"),
                    s = t.find(".processing-revslide .slotholder");
                y(t, n, t, 2), "standard" === n.sliderType && (punchgs.TweenLite.set(s.find(".defaultimg"), {
                    opacity: 0
                }), r.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" == n.sliderType && n.lastconw != n.conw && (clearTimeout(n.pcartimer), n.pcartimer = setTimeout(function() {
                    i.prepareCarousel(n, !0)
                }, 100), n.lastconw = n.conw), i.manageNavigation && i.manageNavigation(n), i.animateTheCaptions && i.animateTheCaptions(t.find(".active-revslide"), n, !0), "on" == s.data("kenburns") && i.startKenBurn(s, n, s.data("kbtl").progress()), "on" == r.data("kenburns") && i.startKenBurn(r, n, r.data("kbtl").progress())
            }
        },
        _ = function(t) {
            t.bw = t.width / t.gridwidth[t.curWinRange], t.bh = t.height / t.gridheight[t.curWinRange], t.bh > t.bw ? t.bh = t.bw : t.bw = t.bh, (t.bh > 1 || t.bw > 1) && (t.bw = 1, t.bh = 1)
        },
        v = function(r, s) {
            if (r.find(".tp-caption").each(function() {
                    var i = t(this);
                    i.data("transition") !== e && i.addClass(i.data("transition"))
                }), s.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: r.parent().css("maxHeight")
                }), "on" == s.autoHeight && (s.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), r.css({
                    maxHeight: "none"
                }), r.parent().css({
                    maxHeight: "none"
                })), s.li.each(function(i) {
                    var n = t(this),
                        r = n.data("originalindex");
                    (s.startWithSlide != e && r == s.startWithSlide || s.startWithSlide === e && 0 == i) && n.addClass("next-revslide"), n.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === s.sliderType) {
                s.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var a = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                s.c.parent().prepend(a), s.c.parent().append(a), i.prepareCarousel(s)
            }
            r.parent().css({
                overflow: "visible"
            }), s.li.find(">img").each(function() {
                var i = t(this),
                    r = i.closest("li").find(".rs-background-video-layer");
                i.addClass("defaultimg"), "on" == s.panZoomDisableOnMobile && n && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
                var a = i.data();
                i.closest(".slotholder").data(a), r.length > 0 && a.bgparallax != e && r.data("bgparallax", a.bgparallax), "none" != s.dottedOverlay && s.dottedOverlay != e && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + s.dottedOverlay + '"></div>');
                var o = i.attr("src");
                a.src = o, a.bgfit = a.bgfit || "cover", a.bgrepeat = a.bgrepeat || "no-repeat", a.bgposition = a.bgposition || "center center";
                var l = i.closest(".slotholder");
                i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + a.bgrepeat + ";background-image:url(" + o + ");background-size:" + a.bgfit + ";background-position:" + a.bgposition + ';width:100%;height:100%;"></div>');
                var d = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                i.replaceWith(d), i = l.find(".tp-bgimg"), i.data(a), i.attr("src", o), ("standard" === s.sliderType || "undefined" === s.sliderType) && i.css({
                    opacity: 0
                })
            })
        },
        y = function(e, i, n, r) {
            i.removePrepare = i.removePrepare + r, n.find(".slot").each(function() {
                t(this).remove()
            }), i.transition = 0, i.removePrepare = 0
        },
        w = function(t) {
            var i = t;
            return t != e && t.length > 0 && (i = t.split("?")[0]), i
        },
        x = function(e, i, n) {
            i.syncload--, i.loadqueue && t.each(i.loadqueue, function(t, i) {
                var r = i.src.replace(/\.\.\/\.\.\//gi, ""),
                    s = self.location.href,
                    a = document.location.origin;
                s = s.substring(0, s.length - 1) + r, a += r, (w(a) === w(decodeURIComponent(e.src)) || w(s) === w(decodeURIComponent(e.src)) || w(i.src) === w(decodeURIComponent(e.src)) || w(i.src).replace(/^.*\/\/[^\/]+/, "") === w(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && w(e.src).match(new RegExp(r))) && (i.progress = n, i.width = e.width, i.height = e.height)
            }), b(i)
        },
        b = function(e) {
            3 != e.syncload && e.loadqueue && t.each(e.loadqueue, function(t, i) {
                if (i.progress.match(/prepared/g) && e.syncload <= 3) {
                    e.syncload++;
                    var n = new Image;
                    n.onload = function() {
                        x(this, e, "loaded")
                    }, n.onerror = function() {
                        x(this, e, "failed")
                    }, n.src = i.src, i.progress = "inload"
                }
            })
        },
        T = function(e, i, n) {
            var r = !1;
            if (i.loadqueue && t.each(i.loadqueue, function(t, i) {
                    i.src === e && (r = !0)
                }), !r) {
                var s = new Object;
                s.src = e, s.prio = n, s.progress = "prepared", i.loadqueue.push(s)
            }
        },
        P = function(i, n, r) {
            i.find("img,.defaultimg").each(function() {
                var i = t(this),
                    s = i.data("lazyload") !== e && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
                T(s, n, r)
            }), b(n)
        },
        S = function(e, i) {
            var n = new Object;
            return e.loadqueue && t.each(e.loadqueue, function(t, e) {
                e.src == i && (n = e)
            }), n
        },
        k = function(n, r, s) {
            var a = !1;
            n.find("img,.defaultimg").each(function() {
                var s = t(this),
                    o = s.data("lazyload") != e ? s.data("lazyload") : s.attr("src"),
                    l = S(r, o);
                if (s.data("loaded") === e && l !== e && l.progress && l.progress.match(/loaded/g)) {
                    if (s.attr("src", l.src), s.hasClass("defaultimg")) i.isIE(8) ? defimg.attr("src", l.src) : s.css({
                        backgroundImage: 'url("' + l.src + '")'
                    }), n.data("owidth", l.width), n.data("oheight", l.height), n.find(".slotholder").data("owidth", l.width), n.find(".slotholder").data("oheight", l.height);
                    else {
                        var d = s.data("ww"),
                            h = s.data("hh");
                        s.data("owidth", l.width), s.data("oheight", l.height), d = d == e || "auto" == d || "" == d ? l.width : d, h = h == e || "auto" == h || "" == h ? l.height : h, s.data("ww", d), s.data("hh", h)
                    }
                    s.data("loaded", !0)
                }
                l && l.progress && l.progress.match(/inprogress|inload|prepared/g) && (a = !0), 1 != r.youtubeapineeded || window.YT && YT.Player != e || (a = !0), 1 != r.vimeoapineeded || window.Froogaloop || (a = !0)
            }), a ? setTimeout(function() {
                k(n, r, s)
            }, 19) : s()
        },
        O = function(e, n) {
            if (clearTimeout(n.waitWithSwapSlide), e.find(".processing-revslide").length > 0) return n.waitWithSwapSlide = setTimeout(function() {
                O(e, n)
            }, 150), !1;
            var r = e.find(".active-revslide"),
                s = e.find(".next-revslide"),
                a = s.find(".defaultimg");
            return s.index() === r.index() ? (s.removeClass("next-revslide"), !1) : (s.removeClass("next-revslide").addClass("processing-revslide"), "on" == n.stopLoop && s.index() == n.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), e.trigger("revolution.slide.onstop"), n.noloopanymore = 1), s.index() === n.slideamount - 1 && (n.looptogo = n.looptogo - 1, n.looptogo <= 0 && (n.stopLoop = "on")), n.tonpause = !0, e.trigger("stoptimer"), n.cd = 0, e.find(".tp-loader").css({
                display: "block"
            }), P(s, n, 1), void k(s, n, function() {
                s.find(".rs-background-video-layer").each(function() {
                    var e = t(this);
                    e.hasClass("HasListener") || (e.data("bgvideo", 1), i.manageVideoLayer(e, n)), e.append('<div class="rs-fullvideo-cover"></div>')
                }), C(n, a, e)
            }))
        },
        C = function(t, n, r) {
            var s = r.find(".active-revslide"),
                a = r.find(".processing-revslide"),
                o = s.find(".slotholder"),
                l = a.find(".slotholder");
            t.tonpause = !1, t.cd = 0, r.trigger("nulltimer"), r.find(".tp-loader").css({
                display: "none"
            }), i.setSize(t), i.slotSize(n, t), i.manageNavigation && i.manageNavigation(t);
            var d = {};
            d.nextslide = a, d.currentslide = s, r.trigger("revolution.slide.onbeforeswap", d), t.transition = 1, t.videoplaying = !1, a.data("delay") != e ? (t.cd = 0, t.delay = a.data("delay")) : t.delay = t.origcd;
            var h = s.index(),
                u = a.index();
            t.sdir = h > u ? 1 : 0, "arrow" == t.sc_indicator && (0 == h && u == t.slideamount - 1 && (t.sdir = 1), h == t.slideamount - 1 && 0 == u && (t.sdir = 0)), t.lsdir = t.lsdir === e ? t.sdir : t.lsdir, t.dirc = t.lsdir != t.sdir, t.lsdir = t.sdir, s.index() != a.index() && 1 != t.firststart && i.removeTheCaptions && i.removeTheCaptions(s, t), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? t.videoplaying = !0 : r.trigger("restarttimer"), a.removeClass("rs-pause-timer-once");
            var c, p;
            if ("carousel" == t.sliderType) p = new punchgs.TimelineLite, i.prepareCarousel(t, p), A(r, t, l, o, a, s, p), t.transition = 0, t.firststart = 0;
            else {
                p = new punchgs.TimelineLite({
                    onComplete: function() {
                        A(r, t, l, o, a, s, p)
                    }
                }), p.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    opacity: 0
                })), p.pause(), 1 == t.firststart && (punchgs.TweenLite.set(s, {
                    autoAlpha: 0
                }), t.firststart = 0), punchgs.TweenLite.set(s, {
                    zIndex: 18
                }), punchgs.TweenLite.set(a, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != e && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == e && a.data("transition", "random"), c = 0;
                var f = a.data("transition") !== e ? a.data("transition").split(",") : "fade",
                    g = a.data("nexttransid") == e ? -1 : a.data("nexttransid");
                "on" == a.data("randomtransition") ? g = Math.round(Math.random() * f.length) : g += 1, g == f.length && (g = 0), a.data("nexttransid", g);
                var m = f[g];
                t.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal")), i.isIE(8) && (m = 11), p = i.animateSlide(c, m, r, t, a, s, l, o, p), "on" == l.data("kenburns") && (i.startKenBurn(l, t), p.add(punchgs.TweenLite.set(l, {
                    autoAlpha: 0
                }))), p.pause()
            }
            "off" != t.parallax.type && t.parallax.firstgo == e && i.scrollHandling && (t.parallax.firstgo = !0, t.lastscrolltop = -999, i.scrollHandling(t), setTimeout(function() {
                t.lastscrolltop = -999, i.scrollHandling(t)
            }, 210), setTimeout(function() {
                t.lastscrolltop = -999, i.scrollHandling(t)
            }, 420)), i.animateTheCaptions ? i.animateTheCaptions(a, t, null, p) : p != e && setTimeout(function() {
                p.resume()
            }, 30), punchgs.TweenLite.to(a, .001, {
                autoAlpha: 1
            })
        },
        A = function(r, s, a, o, l, d, h) {
            "carousel" === s.sliderType || (s.removePrepare = 0, punchgs.TweenLite.to(a.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function() {
                    y(r, s, l, 1)
                }
            }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function() {
                    y(r, s, d, 1)
                }
            })), r.find(".active-revslide").removeClass("active-revslide"), r.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), s.act = l.index(), ("scroll" == s.parallax.type || "scroll+mouse" == s.parallax.type || "mouse+scroll" == s.parallax.type) && (s.lastscrolltop = -999, i.scrollHandling(s)), h.clear(), o.data("kbtl") != e && (o.data("kbtl").reverse(), o.data("kbtl").timeScale(25)), "on" == a.data("kenburns") && (a.data("kbtl") != e ? (a.data("kbtl").timeScale(1), a.data("kbtl").play()) : i.startKenBurn(a, s)), l.find(".rs-background-video-layer").each(function() {
                if (n) return !1;
                var e = t(this);
                i.resetVideo(e, s), punchgs.TweenLite.fromTo(e, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function() {
                        i.animcompleted && i.animcompleted(e, s)
                    }
                })
            }), d.find(".rs-background-video-layer").each(function() {
                if (n) return !1;
                var e = t(this);
                i.stopVideo && (i.resetVideo(e, s), i.stopVideo(e, s)), punchgs.TweenLite.to(e, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var u = {};
            u.slideIndex = l.index() + 1, u.slideLIIndex = l.index(), u.slide = l, u.currentslide = l, u.prevslide = d, r.trigger("revolution.slide.onchange", u), r.trigger("revolution.slide.onafterswap", u)
        },
        L = function(e, i) {
            e.children().each(function() {
                try {
                    t(this).die("click")
                } catch (e) {}
                try {
                    t(this).die("mouseenter")
                } catch (e) {}
                try {
                    t(this).die("mouseleave")
                } catch (e) {}
                try {
                    t(this).unbind("hover")
                } catch (e) {}
            });
            try {
                e.die("click", "mouseenter", "mouseleave")
            } catch (n) {}
            clearInterval(i.cdint), e = null
        },
        M = function(r, s) {
            if (s.cd = 0, s.loop = 0, s.looptogo = s.stopAfterLoops != e && s.stopAfterLoops > -1 ? s.stopAfterLoops : 9999999, s.lastslidetoshow = s.stopAtSlide != e && s.stopAtSlide > -1 ? s.stopAtSlide : 999, s.stopLoop = "off", 0 == s.looptogo && (s.stopLoop = "on"), s.slideamount > 1 && (0 != s.stopAfterLoops || 1 != s.stopAtSlide)) {
                var a = r.find(".tp-bannertimer");
                r.on("stoptimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    e.data("tween").pause(), "on" == s.disableProgressBar && e.css({
                        visibility: "hidden"
                    }), s.sliderstatus = "paused"
                }), r.on("starttimer", function() {
                    1 != s.conthover && 1 != s.videoplaying && s.width > s.hideSliderAtLimit && 1 != s.tonpause && 1 != s.overnav && (1 === s.noloopanymore || s.viewPort.enable && !s.inviewport || (a.css({
                        visibility: "visible"
                    }), a.data("tween").resume(), s.sliderstatus = "playing")), "on" == s.disableProgressBar && a.css({
                        visibility: "hidden"
                    })
                }), r.on("restarttimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    1 === s.noloopanymore || s.viewPort.enable && !s.inviewport || (e.css({
                        visibility: "visible"
                    }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, s.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: o,
                        delay: 1
                    })), s.sliderstatus = "playing"), "on" == s.disableProgressBar && e.css({
                        visibility: "hidden"
                    })
                }), r.on("nulltimer", function() {
                    a.data("tween").pause(0), "on" == s.disableProgressBar && a.css({
                        visibility: "hidden"
                    }), s.sliderstatus = "paused"
                });
                var o = function() {
                    0 == t("body").find(r).length && (L(r, s), clearInterval(s.cdint)), r.trigger("revolution.slide.slideatend"), 1 == r.data("conthover-changed") && (s.conthover = r.data("conthover"), r.data("conthover-changed", 0)), i.callingNewSlide(s, r, 1)
                };
                a.data("tween", punchgs.TweenLite.fromTo(a, s.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: o,
                    delay: 1
                })), a.data("opt", s), r.trigger("starttimer"), r.on("tp-mouseenter", function() {
                    "on" != s.navigation.onHoverStop || n || (r.trigger("stoptimer"), r.trigger("revolution.slide.onpause"))
                }), r.on("tp-mouseleft", function() {
                    1 != r.data("conthover") && "on" == s.navigation.onHoverStop && (1 == s.viewPort.enable && s.inviewport || 0 == s.viewPort.enable) && (r.trigger("revolution.slide.onresume"), r.trigger("starttimer"))
                })
            }
        },
        R = (function() {
            var t, e, i = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (t in i)
                if (t in document) {
                    e = i[t];
                    break
                }
            return function(i) {
                return i && document.addEventListener(e, i), !document[t]
            }
        }(), function(t) {
            return t == e || t.c == e ? !1 : void punchgs.TweenLite.delayedCall(.3, function() {
                "on" == t.fallbacks.nextSlideOnWindowFocus && t.c.revnext(), t.c.revredraw(), "playing" == t.lastsliderstatus && t.c.revresume()
            })
        }),
        E = function(t) {
            t.lastsliderstatus = t.sliderstatus, t.c.revpause();
            var e = t.c.find(".active-revslide .slotholder"),
                n = t.c.find(".processing-revslide .slotholder");
            "on" == n.data("kenburns") && i.stopKenBurn(n, t), "on" == e.data("kenburns") && i.stopKenBurn(e, t)
        },
        z = function(i, n) {
            var r = document.documentMode === e,
                s = window.chrome;
            r && !s ? t(window).on("focusin", function() {
                R(n)
            }).on("focusout", function() {
                E(n)
            }) : window.addEventListener ? (window.addEventListener("focus", function() {
                R(n)
            }, !1), window.addEventListener("blur", function() {
                E(n)
            }, !1)) : (window.attachEvent("focus", function() {
                R(n)
            }), window.attachEvent("blur", function() {
                E(n)
            }))
        },
        I = function(t) {
            for (var e, i = [], n = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), r = 0; r < n.length; r++) n[r] = n[r].replace("%3D", "="), e = n[r].split("="), i.push(e[0]), i[e[0]] = e[1];
            return i
        }
}(jQuery);


! function() {
    var e = jQuery.fn.revolution;
    jQuery.extend(!0, e, {
        stopKenBurn: function(e) {
            void 0 != e.data("kbtl") && e.data("kbtl").pause()
        },
        startKenBurn: function(e, t, a) {
            var i = e.data(),
                o = e.find(".defaultimg"),
                n = o.data("lazyload") || o.data("src"),
                r = (i.owidth / i.oheight, "carousel" === t.sliderType ? t.carousel.slide_width : t.ul.width()),
                d = t.ul.height();
            e.data("kbtl") && e.data("kbtl").kill(), a = a || 0, 0 == e.find(".tp-kbimg").length && (e.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + n + '" style="position:absolute;" width="' + i.owidth + '" height="' + i.oheight + '"></div>'), e.data("kenburn", e.find(".tp-kbimg")));
            var s = function(e, t, a, i, o, n, r) {
                    var d = e * a,
                        s = t * a,
                        l = Math.abs(i - d),
                        p = Math.abs(o - s),
                        h = new Object;
                    return h.l = (0 - n) * l, h.r = h.l + d, h.t = (0 - r) * p, h.b = h.t + s, h.h = n, h.v = r, h
                },
                l = function(e, t, a, i, o) {
                    var n = e.bgposition.split(" ") || "center center",
                        r = "center" == n[0] ? "50%" : "left" == n[0] || "left" == n[1] ? "0%" : "right" == n[0] || "right" == n[1] ? "100%" : n[0],
                        d = "center" == n[1] ? "50%" : "top" == n[0] || "top" == n[1] ? "0%" : "bottom" == n[0] || "bottom" == n[1] ? "100%" : n[1];
                    r = parseInt(r, 0) / 100 || 0, d = parseInt(d, 0) / 100 || 0;
                    var l = new Object;
                    return l.start = s(o.start.width, o.start.height, o.start.scale, t, a, r, d), l.end = s(o.start.width, o.start.height, o.end.scale, t, a, r, d), l
                },
                p = function(e, t, a) {
                    var i = a.scalestart / 100,
                        o = a.scaleend / 100,
                        n = void 0 != a.oofsetstart ? a.offsetstart.split(" ") || [0, 0] : [0, 0],
                        r = void 0 != a.offsetend ? a.offsetend.split(" ") || [0, 0] : [0, 0];
                    a.bgposition = "center center" == a.bgposition ? "50% 50%" : a.bgposition;
                    var d = new Object,
                        s = e * i,
                        p = (s / a.owidth * a.oheight, e * o);
                    if (p / a.owidth * a.oheight, d.start = new Object, d.starto = new Object, d.end = new Object, d.endo = new Object, d.start.width = e, d.start.height = d.start.width / a.owidth * a.oheight, d.start.height < t) {
                        var h = t / d.start.height;
                        d.start.height = t, d.start.width = d.start.width * h
                    }
                    d.start.transformOrigin = a.bgposition, d.start.scale = i, d.end.scale = o, d.start.rotation = a.rotatestart + "deg", d.end.rotation = a.rotateend + "deg";
                    var c = l(a, e, t, n, d);
                    n[0] = parseFloat(n[0]) + c.start.l, r[0] = parseFloat(r[0]) + c.end.l, n[1] = parseFloat(n[1]) + c.start.t, r[1] = parseFloat(r[1]) + c.end.t;
                    var u = c.start.r - c.start.l,
                        f = c.start.b - c.start.t,
                        v = c.end.r - c.end.l,
                        g = c.end.b - c.end.t;
                    return n[0] = n[0] > 0 ? 0 : u + n[0] < e ? e - u : n[0], r[0] = r[0] > 0 ? 0 : v + r[0] < e ? e - v : r[0], n[1] = n[1] > 0 ? 0 : f + n[1] < t ? t - f : n[1], r[1] = r[1] > 0 ? 0 : g + r[1] < t ? t - g : r[1], d.starto.x = n[0] + "px", d.starto.y = n[1] + "px", d.endo.x = r[0] + "px", d.endo.y = r[1] + "px", d.end.ease = d.endo.ease = a.ease, d.end.force3D = d.endo.force3D = !0, d
                };
            void 0 != e.data("kbtl") && (e.data("kbtl").kill(), e.removeData("kbtl"));
            var h = e.data("kenburn"),
                c = h.parent(),
                u = p(r, d, i),
                f = new punchgs.TimelineLite;
            f.pause(), u.start.transformOrigin = "0% 0%", u.starto.transformOrigin = "0% 0%", f.add(punchgs.TweenLite.fromTo(h, i.duration / 1e3, u.start, u.end), 0), f.add(punchgs.TweenLite.fromTo(c, i.duration / 1e3, u.starto, u.endo), 0), f.progress(a), f.play(), e.data("kbtl", f)
        }
    })
}(jQuery), ! function() {
    function e(e, t, a, i, o, n, r) {
        var d = e.find(t);
        d.css("borderWidth", n + "px"), d.css(a, 0 - n + "px"), d.css(i, "0px solid transparent"), d.css(o, r)
    }
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        animcompleted: function(e, a) {
            var i = e.data("videotype"),
                o = e.data("autoplay"),
                n = e.data("autoplayonlyfirsttime");
            void 0 != i && "none" != i && (1 == o || "true" == o || "on" == o || "1sttime" == o || n ? (t.playVideo(e, a), (n || "1sttime" == o) && (e.data("autoplayonlyfirsttime", !1), e.data("autoplay", "off"))) : "no1sttime" == o && e.data("autoplay", "on"))
        },
        handleStaticLayers: function(e, t) {
            var a = parseInt(e.data("startslide"), 0),
                i = parseInt(e.data("endslide"), 0);
            0 > a && (a = 0), 0 > i && (i = t.slideamount), 0 === a && i === t.slideamount - 1 && (i = t.slideamount + 1), e.data("startslide", a), e.data("endslide", i)
        },
        animateTheCaptions: function(e, a, i, o) {
            var n = "carousel" === a.sliderType ? 0 : a.width / 2 - a.gridwidth[a.curWinRange] * a.bw / 2,
                r = 0,
                d = e.data("index");
            a.layers = a.layers || new Object, a.layers[d] = a.layers[d] || e.find(".tp-caption"), a.layers["static"] = a.layers["static"] || a.c.find(".tp-static-layers").find(".tp-caption");
            var s = new Array;
            if (a.conh = a.c.height(), a.conw = a.c.width(), a.ulw = a.ul.width(), a.ulh = a.ul.height(), a.debugMode) {
                e.addClass("indebugmode"), e.find(".helpgrid").remove(), a.c.find(".hglayerinfo").remove(), e.append('<div class="helpgrid" style="width:' + a.gridwidth[a.curWinRange] * a.bw + "px;height:" + a.gridheight[a.curWinRange] * a.bw + 'px;"></div>');
                var l = e.find(".helpgrid");
                l.append('<div class="hginfo">Zoom:' + Math.round(100 * a.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + a.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + a.gridwidth[a.curWinRange] + "x" + a.gridheight[a.curWinRange] + "</div>"), a.c.append('<div class="hglayerinfo"></div>'), l.append('<div class="tlhg"></div>')
            }
            s && jQuery.each(s, function() {
                var e = jQuery(this);
                punchgs.TweenLite.set(e.find(".tp-videoposter"), {
                    autoAlpha: 1
                }), punchgs.TweenLite.set(e.find("iframe"), {
                    autoAlpha: 0
                })
            }), a.layers[d] && jQuery.each(a.layers[d], function(e, t) {
                s.push(t)
            }), a.layers["static"] && jQuery.each(a.layers["static"], function(e, t) {
                s.push(t)
            }), s && jQuery.each(s, function(e) {
                t.animateSingleCaption(jQuery(this), a, n, r, e, i)
            });
            var p = jQuery("body").find("#" + a.c.attr("id")).find(".tp-bannertimer");
            p.data("opt", a), void 0 != o && setTimeout(function() {
                o.resume()
            }, 30)
        },
        animateSingleCaption: function(i, n, f, m, w, b, y) {
            var x = b,
                T = p(i, n, "in", !0),
                L = i.data("_pw") || i.closest(".tp-parallax-wrap"),
                _ = i.data("_lw") || i.closest(".tp-loop-wrap"),
                k = i.data("_mw") || i.closest(".tp-mask-wrap"),
                j = i.data("responsive") || "on",
                z = i.data("responsive_offset") || "on",
                C = i.data("basealign") || "grid",
                I = "grid" === C ? n.width : n.ulw,
                O = "grid" === C ? n.height : n.ulh,
                Q = jQuery("body").hasClass("rtl");
            if (i.data("_pw") || (i.data("_pw", L), i.data("_lw", _), i.data("_mw", k)), "fullscreen" == n.sliderLayout && (m = O / 2 - n.gridheight[n.curWinRange] * n.bh / 2), ("on" == n.autoHeight || void 0 != n.minHeight && n.minHeight > 0) && (m = n.conh / 2 - n.gridheight[n.curWinRange] * n.bh / 2), 0 > m && (m = 0), n.debugMode) {
                i.closest("li").find(".helpgrid").css({
                    top: m + "px",
                    left: f + "px"
                });
                var M = n.c.find(".hglayerinfo");
                i.on("hover, mouseenter", function() {
                    var e = "";
                    i.data() && jQuery.each(i.data(), function(t, a) {
                        "object" != typeof a && (e = e + '<span style="white-space:nowrap"><span style="color:#27ae60">' + t + ":</span>" + a + "</span>&nbsp; &nbsp; ")
                    }), M.html(e)
                })
            }
            var S = l(i.data("visibility"), n)[n.curWinRange] || l(i.data("visibility"), n) || "on";
            if ("off" == S || I < n.hideCaptionAtLimit && "on" == i.data("captionhidden") || I < n.hideAllCaptionAtLimit ? i.addClass("tp-hidden-caption") : i.removeClass("tp-hidden-caption"), i.data("layertype", "html"), 0 > f && (f = 0), void 0 != i.data("thumbimage") && void 0 == i.data("videoposter") && i.data("videoposter", i.data("thumbimage")), i.hasClass("tp-videolayer") && void 0 != i.data("videoposter") && "on" == i.data("posterOnMobile") && _ISM) {
                var P = l(i.data("videowidth"), n)[n.curWinRange] || l(i.data("videowidth"), n) || "auto",
                    W = l(i.data("videoheight"), n)[n.curWinRange] || l(i.data("videoheight"), n) || "auto";
                P = parseFloat(A), W = parseFloat(H), i.append('<div class="tp-videoposter" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + i.data("videoposter") + '); background-size:cover;background-position:center center;"></div>'), i.css("100%" != P ? {
                    minWidth: P + "px",
                    minHeight: W + "px"
                } : {
                    width: "100%",
                    height: "100%"
                }), i.removeClass("tp-videolayer")
            }
            if (i.find("img").length > 0) {
                var D = i.find("img");
                i.data("layertype", "image"), 0 == D.width() && D.css({
                    width: "auto"
                }), 0 == D.height() && D.css({
                    height: "auto"
                }), void 0 == D.data("ww") && D.width() > 0 && D.data("ww", D.width()), void 0 == D.data("hh") && D.height() > 0 && D.data("hh", D.height());
                var A = D.data("ww"),
                    H = D.data("hh"),
                    R = "slide" == C ? n.ulw : n.gridwidth[n.curWinRange],
                    Y = "slide" == C ? n.ulh : n.gridheight[n.curWinRange],
                    A = l(D.data("ww"), n)[n.curWinRange] || l(D.data("ww"), n) || "auto",
                    H = l(D.data("hh"), n)[n.curWinRange] || l(D.data("hh"), n) || "auto",
                    X = "full" === A || "full-proportional" === A,
                    V = "full" === H || "full-proportional" === H;
                if ("full-proportional" === A) {
                    var F = D.data("owidth"),
                        B = D.data("oheight");
                    B / Y > F / R ? (A = R, H = B * (R / F)) : (H = Y, A = F * (Y / B))
                } else A = X ? R : parseFloat(A), H = V ? Y : parseFloat(H);
                void 0 == A && (A = 0), void 0 == H && (H = 0), "off" !== j ? (D.width("grid" != C && X ? A : A * n.bw), D.height("grid" != C && V ? H : H * n.bh)) : (D.width(A), D.height(H))
            }
            if ("slide" === C && (f = 0, m = 0), i.hasClass("tp-videolayer") || i.find("iframe").length > 0 || i.find("video").length > 0) {
                i.data("layertype", "video"), t.manageVideoLayer(i, n, b, x), b || x || (i.data("videotype"), t.resetVideo(i, n));
                var N = i.data("aspectratio");
                void 0 != N && N.split(":").length > 1 && t.prepareCoveredVideo(N, n, i);
                var D = i.find("iframe") ? i.find("iframe") : D = i.find("video"),
                    E = i.find("iframe") ? !1 : !0,
                    Z = i.hasClass("coverscreenvideo");
                D.css({
                    display: "block"
                }), void 0 == i.data("videowidth") && (i.data("videowidth", D.width()), i.data("videoheight", D.height()));
                var $, A = l(i.data("videowidth"), n)[n.curWinRange] || l(i.data("videowidth"), n) || "auto",
                    H = l(i.data("videoheight"), n)[n.curWinRange] || l(i.data("videoheight"), n) || "auto";
                A = parseFloat(A), H = parseFloat(H), void 0 === i.data("cssobj") && ($ = c(i, 0), i.data("cssobj", $));
                var q = u(i.data("cssobj"), n);
                if ("auto" == q.lineHeight && (q.lineHeight = q.fontSize + 4), i.hasClass("fullscreenvideo") || Z) {
                    f = 0, m = 0, i.data("x", 0), i.data("y", 0);
                    var U = O;
                    "on" == n.autoHeight && (U = n.conh), i.css({
                        width: I,
                        height: U
                    })
                } else punchgs.TweenLite.set(i, {
                    paddingTop: Math.round(q.paddingTop * n.bh) + "px",
                    paddingBottom: Math.round(q.paddingBottom * n.bh) + "px",
                    paddingLeft: Math.round(q.paddingLeft * n.bw) + "px",
                    paddingRight: Math.round(q.paddingRight * n.bw) + "px",
                    marginTop: q.marginTop * n.bh + "px",
                    marginBottom: q.marginBottom * n.bh + "px",
                    marginLeft: q.marginLeft * n.bw + "px",
                    marginRight: q.marginRight * n.bw + "px",
                    borderTopWidth: Math.round(q.borderTopWidth * n.bh) + "px",
                    borderBottomWidth: Math.round(q.borderBottomWidth * n.bh) + "px",
                    borderLeftWidth: Math.round(q.borderLeftWidth * n.bw) + "px",
                    borderRightWidth: Math.round(q.borderRightWidth * n.bw) + "px",
                    width: A * n.bw + "px",
                    height: H * n.bh + "px"
                });
                (0 == E && !Z || 1 != i.data("forcecover") && !i.hasClass("fullscreenvideo") && !Z) && (D.width(A * n.bw), D.height(H * n.bh))
            }
            i.find(".tp-resizeme, .tp-resizeme *").each(function() {
                v(jQuery(this), n, "rekursive", j)
            }), i.hasClass("tp-resizeme") && i.find("*").each(function() {
                v(jQuery(this), n, "rekursive", j)
            }), v(i, n, 0, j);
            var G = i.outerHeight(),
                K = i.css("backgroundColor");
            e(i, ".frontcorner", "left", "borderRight", "borderTopColor", G, K), e(i, ".frontcornertop", "left", "borderRight", "borderBottomColor", G, K), e(i, ".backcorner", "right", "borderLeft", "borderBottomColor", G, K), e(i, ".backcornertop", "right", "borderLeft", "borderTopColor", G, K), "on" == n.fullScreenAlignForce && (f = 0, m = 0);
            var J = i.data("arrobj");
            if (void 0 === J) {
                var J = new Object;
                J.voa = l(i.data("voffset"), n)[n.curWinRange] || l(i.data("voffset"), n)[0], J.hoa = l(i.data("hoffset"), n)[n.curWinRange] || l(i.data("hoffset"), n)[0], J.elx = l(i.data("x"), n)[n.curWinRange] || l(i.data("x"), n)[0], J.ely = l(i.data("y"), n)[n.curWinRange] || l(i.data("y"), n)[0]
            }
            var et = 0 == J.voa.length ? 0 : J.voa,
                tt = 0 == J.hoa.length ? 0 : J.hoa,
                at = 0 == J.elx.length ? 0 : J.elx,
                it = 0 == J.ely.length ? 0 : J.ely,
                ot = i.outerWidth(!0),
                nt = i.outerHeight(!0);
            0 == ot && 0 == nt && (ot = n.ulw, nt = n.ulh);
            var rt = "off" !== z ? parseInt(et, 0) * n.bw : parseInt(et, 0),
                dt = "off" !== z ? parseInt(tt, 0) * n.bw : parseInt(tt, 0),
                st = "grid" === C ? n.gridwidth[n.curWinRange] * n.bw : I,
                lt = "grid" === C ? n.gridheight[n.curWinRange] * n.bw : O;
            "on" == n.fullScreenAlignForce && (st = n.ulw, lt = n.ulh), at = "center" === at || "middle" === at ? st / 2 - ot / 2 + dt : "left" === at ? dt : "right" === at ? st - ot - dt : "off" !== z ? at * n.bw : at, it = "center" == it || "middle" == it ? lt / 2 - nt / 2 + rt : "top" == it ? rt : "bottom" == it ? lt - nt - rt : "off" !== z ? it * n.bw : it, Q && (at += ot);
            var pt = i.data("lasttriggerstate"),
                ht = i.data("triggerstate"),
                ct = i.data("start") || 100,
                ut = i.data("end"),
                ft = y ? 0 : "bytrigger" === ct || "sliderenter" === ct ? 0 : parseFloat(ct) / 1e3,
                vt = at + f,
                gt = it + m,
                mt = i.css("z-Index");
            y || ("reset" == pt && "bytrigger" != ct ? (i.data("triggerstate", "on"), i.data("animdirection", "in"), ht = "on") : "reset" == pt && "bytrigger" == ct && (i.data("triggerstate", "off"), i.data("animdirection", "out"), ht = "off")), punchgs.TweenLite.set(L, {
                zIndex: mt,
                top: gt,
                left: vt,
                overwrite: "auto"
            }), 0 == T && (x = !0), void 0 == i.data("timeline") || x || (2 != T && i.data("timeline").gotoAndPlay(0), x = !0), !b && i.data("timeline_out") && 2 != T && 0 != T && (i.data("timeline_out").kill(), i.data("outstarted", 0)), y && void 0 != i.data("timeline") && (i.removeData("$anims"), i.data("timeline").pause(0), i.data("timeline").kill(), void 0 != i.data("newhoveranim") && (i.data("newhoveranim").progress(0), i.data("newhoveranim").kill()), i.removeData("timeline"), punchgs.TweenLite.killTweensOf(i), i.unbind("hover"), i.removeClass("rs-hover-ready"), i.removeData("newhoveranim"));
            var wt = i.data("timeline") ? i.data("timeline").time() : 0,
                bt = void 0 !== i.data("timeline") ? i.data("timeline").progress() : 0,
                yt = i.data("timeline") || new punchgs.TimelineLite({
                    smoothChildTiming: !0
                });
            if (bt = jQuery.isNumeric(bt) ? bt : 0, yt.pause(), 1 > bt && 1 != i.data("outstarted") || 2 == T || y) {
                var xt = i;
                if (void 0 != i.data("mySplitText") && i.data("mySplitText").revert(), void 0 != i.data("splitin") && i.data("splitin").match(/chars|words|lines/g) || void 0 != i.data("splitout") && i.data("splitout").match(/chars|words|lines/g)) {
                    var Tt = i.find("a").length > 0 ? i.find("a") : i;
                    i.data("mySplitText", new punchgs.SplitText(Tt, {
                        type: "lines,words,chars",
                        charsClass: "tp-splitted",
                        wordsClass: "tp-splitted",
                        linesClass: "tp-splitted"
                    })), i.addClass("splitted")
                }
                void 0 !== i.data("mySplitText") && i.data("splitin") && i.data("splitin").match(/chars|words|lines/g) && (xt = i.data("mySplitText")[i.data("splitin")]);
                var Lt = new Object,
                    _t = void 0 != i.data("transform_in") ? i.data("transform_in").match(/\(R\)/gi) : !1;
                if (!i.data("$anims") || y || _t) {
                    var kt = a(),
                        jt = a(),
                        zt = o(),
                        Ct = void 0 !== i.data("transform_hover") || void 0 !== i.data("style_hover");
                    jt = d(jt, i.data("transform_idle")), kt = d(jt, i.data("transform_in"), 1 == n.sdir), Ct && (zt = d(zt, i.data("transform_hover")), zt = h(zt, i.data("style_hover")), i.data("hover", zt)), kt.elemdelay = void 0 == i.data("elementdelay") ? 0 : i.data("elementdelay"), jt.anim.ease = kt.anim.ease = kt.anim.ease || punchgs.Power1.easeInOut, Ct && !i.hasClass("rs-hover-ready") && (i.addClass("rs-hover-ready"), i.hover(function(e) {
                        var t = jQuery(e.currentTarget),
                            a = t.data("hover"),
                            i = t.data("timeline");
                        i && 1 == i.progress() && (void 0 === t.data("newhoveranim") || "none" === t.data("newhoveranim") ? t.data("newhoveranim", punchgs.TweenLite.to(t, a.speed, a.anim)) : (t.data("newhoveranim").progress(0), t.data("newhoveranim").play()))
                    }, function(e) {
                        var t = jQuery(e.currentTarget),
                            a = t.data("timeline");
                        a && 1 == a.progress() && void 0 != t.data("newhoveranim") && t.data("newhoveranim").reverse()
                    })), Lt = new Object, Lt.f = kt, Lt.r = jt, i.data("$anims")
                } else Lt = i.data("$anims");
                var It = s(i.data("mask_in")),
                    Ot = new punchgs.TimelineLite;
                if (Lt.f.anim.x = Lt.f.anim.x * n.bw || r(Lt.f.anim.x, n, ot, nt, gt, vt, "horizontal"), Lt.f.anim.y = Lt.f.anim.y * n.bw || r(Lt.f.anim.y, n, ot, nt, gt, vt, "vertical"), 2 != T || y) {
                    if (xt != i) {
                        var Qt = Lt.r.anim.ease;
                        yt.add(punchgs.TweenLite.set(i, Lt.r.anim)), Lt.r = a(), Lt.r.anim.ease = Qt
                    }
                    if (Lt.f.anim.visibility = "hidden", Ot.eventCallback("onStart", function() {
                            punchgs.TweenLite.set(i, {
                                visibility: "visible"
                            }), i.data("iframes") && i.find("iframe").each(function() {
                                punchgs.TweenLite.set(jQuery(this), {
                                    autoAlpha: 1
                                })
                            }), punchgs.TweenLite.set(L, {
                                visibility: "visible"
                            });
                            var e = {};
                            e.layer = i, e.eventtype = "enterstage", e.layertype = i.data("layertype"), e.layersettings = i.data(), n.c.trigger("revolution.layeraction", e)
                        }), Ot.eventCallback("onComplete", function() {
                            var e = {};
                            e.layer = i, e.eventtype = "enteredstage", e.layertype = i.data("layertype"), e.layersettings = i.data(), n.c.trigger("revolution.layeraction", e), t.animcompleted(i, n)
                        }), "sliderenter" == ct && n.overcontainer && (ft = .6), yt.add(Ot.staggerFromTo(xt, Lt.f.speed, Lt.f.anim, Lt.r.anim, Lt.f.elemdelay), ft), It) {
                        var Mt = new Object;
                        Mt.ease = Lt.r.anim.ease, Mt.overflow = It.anim.overflow = "hidden", Mt.x = Mt.y = 0, It.anim.x = It.anim.x * n.bw || r(It.anim.x, n, ot, nt, gt, vt, "horizontal"), It.anim.y = It.anim.y * n.bw || r(It.anim.y, n, ot, nt, gt, vt, "vertical"), yt.add(punchgs.TweenLite.fromTo(k, Lt.f.speed, It.anim, Mt, kt.elemdelay), ft)
                    } else yt.add(punchgs.TweenLite.set(k, {
                        overflow: "visible"
                    }, kt.elemdelay), 0)
                }
                i.data("timeline", yt), T = p(i, n, "in"), 0 !== bt && 2 != T || "bytrigger" === ut || y || "sliderleave" == ut || (void 0 == ut || -1 != T && 2 != T || "bytriger" === ut ? punchgs.TweenLite.delayedCall(999999, t.endMoveCaption, [i, k, L, n]) : punchgs.TweenLite.delayedCall(parseInt(i.data("end"), 0) / 1e3, t.endMoveCaption, [i, k, L, n])), yt = i.data("timeline"), "on" == i.data("loopanimation") && g(_, n.bw), ("sliderenter" != ct || "sliderenter" == ct && n.overcontainer) && (-1 == T || 1 == T || y || 0 == T && 1 > bt && i.hasClass("rev-static-visbile")) && (1 > bt && bt > 0 || 0 == bt && "bytrigger" != ct && "keep" != pt || 0 == bt && "bytrigger" != ct && "keep" == pt && "on" == ht || "bytrigger" == ct && "keep" == pt && "on" == ht) && yt.resume(wt)
            }
            "on" == i.data("loopanimation") && punchgs.TweenLite.set(_, {
                minWidth: ot,
                minHeight: nt
            }), 0 == i.data("slidelink") || 1 != i.data("slidelink") && !i.hasClass("slidelink") ? (punchgs.TweenLite.set(k, {
                width: "auto",
                height: "auto"
            }), i.data("slidelink", 0)) : (punchgs.TweenLite.set(k, {
                width: "100%",
                height: "100%"
            }), i.data("slidelink", 1))
        },
        endMoveCaption: function(e, t, o, n) {
            if (t = t || e.data("_mw"), o = o || e.data("_pw"), e.data("outstarted", 1), e.data("timeline")) e.data("timeline").pause();
            else if (void 0 === e.data("_pw")) return;
            var l = new punchgs.TimelineLite,
                p = new punchgs.TimelineLite,
                h = new punchgs.TimelineLite,
                c = d(a(), e.data("transform_in"), 1 == n.sdir),
                u = e.data("transform_out") ? d(i(), e.data("transform_out"), 1 == n.sdir) : d(i(), e.data("transform_in"), 1 == n.sdir),
                f = e.data("splitout") && e.data("splitout").match(/words|chars|lines/g) ? e.data("mySplitText")[e.data("splitout")] : e,
                v = void 0 == e.data("endelementdelay") ? 0 : e.data("endelementdelay"),
                g = e.innerWidth(),
                m = e.innerHeight(),
                w = o.position();
            e.data("transform_out") && e.data("transform_out").match(/auto:auto/g) && (c.speed = u.speed, c.anim.ease = u.anim.ease, u = c);
            var b = s(e.data("mask_out"));
            u.anim.x = u.anim.x * n.bw || r(u.anim.x, n, g, m, w.top, w.left, "horizontal"), u.anim.y = u.anim.y * n.bw || r(u.anim.y, n, g, m, w.top, w.left, "vertical"), p.eventCallback("onStart", function() {
                var t = {};
                t.layer = e, t.eventtype = "leavestage", t.layertype = e.data("layertype"), t.layersettings = e.data(), n.c.trigger("revolution.layeraction", t)
            }), p.eventCallback("onComplete", function() {
                punchgs.TweenLite.set(e, {
                    visibility: "hidden"
                }), punchgs.TweenLite.set(o, {
                    visibility: "hidden"
                });
                var t = {};
                t.layer = e, t.eventtype = "leftstage", t.layertype = e.data("layertype"), t.layersettings = e.data(), n.c.trigger("revolution.layeraction", t)
            }), l.add(p.staggerTo(f, u.speed, u.anim, v), 0), b ? (b.anim.ease = u.anim.ease, b.anim.overflow = "hidden", b.anim.x = b.anim.x * n.bw || r(b.anim.x, n, g, m, w.top, w.left, "horizontal"), b.anim.y = b.anim.y * n.bw || r(b.anim.y, n, g, m, w.top, w.left, "vertical"), l.add(h.to(t, u.speed, b.anim, v), 0)) : l.add(h.set(t, {
                overflow: "visible",
                overwrite: "auto"
            }, v), 0), e.data("timeline_out", l)
        },
        removeTheCaptions: function(e, a) {
            var i = e.data("index"),
                o = new Array;
            a.layers[i] && jQuery.each(a.layers[i], function(e, t) {
                o.push(t)
            }), a.layers["static"] && jQuery.each(a.layers["static"], function(e, t) {
                o.push(t)
            }), punchgs.TweenLite.killDelayedCallsTo(t.endMoveCaption), o && jQuery.each(o, function() {
                var e = jQuery(this),
                    i = p(e, a, "out");
                0 != i && (m(e), clearTimeout(e.data("videoplaywait")), t.stopVideo && t.stopVideo(e, a), t.endMoveCaption(e, null, null, a), a.playingvideos = [], a.lastplayedvideos = [])
            })
        }
    });
    var a = function() {
            var e = new Object;
            return e.anim = new Object, e.anim.x = 0, e.anim.y = 0, e.anim.z = 0, e.anim.rotationX = 0, e.anim.rotationY = 0, e.anim.rotationZ = 0, e.anim.scaleX = 1, e.anim.scaleY = 1, e.anim.skewX = 0, e.anim.skewY = 0, e.anim.opacity = 1, e.anim.transformOrigin = "50% 50%", e.anim.transformPerspective = 600, e.anim.rotation = 0, e.anim.ease = punchgs.Power3.easeOut, e.anim.force3D = "auto", e.speed = .3, e.anim.autoAlpha = 1, e.anim.visibility = "visible", e.anim.overwrite = "all", e
        },
        i = function() {
            var e = new Object;
            return e.anim = new Object, e.anim.x = 0, e.anim.y = 0, e.anim.z = 0, e
        },
        o = function() {
            var e = new Object;
            return e.anim = new Object, e.speed = .2, e
        },
        n = function(e, t) {
            if (jQuery.isNumeric(parseFloat(e))) return parseFloat(e);
            if (void 0 === e || "inherit" === e) return t;
            if (e.split("{").length > 1) {
                var a = e.split(","),
                    i = parseFloat(a[1].split("}")[0]);
                a = parseFloat(a[0].split("{")[1]), e = Math.random() * (i - a) + a
            }
            return e
        },
        r = function(e, t, a, i, o, n, r) {
            return !jQuery.isNumeric(e) && e.match(/%]/g) ? (e = e.split("[")[1].split("]")[0], "horizontal" == r ? e = (a + 2) * parseInt(e, 0) / 100 : "vertical" == r && (e = (i + 2) * parseInt(e, 0) / 100)) : (e = "layer_left" === e ? 0 - a : "layer_right" === e ? a : e, e = "layer_top" === e ? 0 - i : "layer_bottom" === e ? i : e, e = "left" === e || "stage_left" === e ? 0 - a - n : "right" === e || "stage_right" === e ? t.conw - n : "center" === e || "stage_center" === e ? t.conw / 2 - a / 2 - n : e, e = "top" === e || "stage_top" === e ? 0 - i - o : "bottom" === e || "stage_bottom" === e ? t.conh - o : "middle" === e || "stage_middle" === e ? t.conh / 2 - i / 2 - o : e), e
        },
        d = function(e, t, a) {
            var i = new Object;
            if (i = jQuery.extend(!0, {}, i, e), void 0 === t) return i;
            var o = t.split(";");
            return o && jQuery.each(o, function(e, t) {
                var o = t.split(":"),
                    r = o[0],
                    d = o[1];
                a && void 0 != d && d.length > 0 && d.match(/\(R\)/) && (d = d.replace("(R)", ""), d = "right" === d ? "left" : "left" === d ? "right" : "top" === d ? "bottom" : "bottom" === d ? "top" : d, "[" === d[0] && "-" === d[1] ? d = d.replace("[-", "[") : "[" === d[0] && "-" !== d[1] ? d = d.replace("[", "[-") : "-" === d[0] ? d = d.replace("-", "") : d[0].match(/[1-9]/) && (d = "-" + d)), void 0 != d && (d = d.replace(/\(R\)/, ""), ("rotationX" == r || "rX" == r) && (i.anim.rotationX = n(d, i.anim.rotationX) + "deg"), ("rotationY" == r || "rY" == r) && (i.anim.rotationY = n(d, i.anim.rotationY) + "deg"), ("rotationZ" == r || "rZ" == r) && (i.anim.rotation = n(d, i.anim.rotationZ) + "deg"), ("scaleX" == r || "sX" == r) && (i.anim.scaleX = n(d, i.anim.scaleX)), ("scaleY" == r || "sY" == r) && (i.anim.scaleY = n(d, i.anim.scaleY)), ("opacity" == r || "o" == r) && (i.anim.opacity = n(d, i.anim.opacity)), ("skewX" == r || "skX" == r) && (i.anim.skewX = n(d, i.anim.skewX)), ("skewY" == r || "skY" == r) && (i.anim.skewY = n(d, i.anim.skewY)), "x" == r && (i.anim.x = n(d, i.anim.x)), "y" == r && (i.anim.y = n(d, i.anim.y)), "z" == r && (i.anim.z = n(d, i.anim.z)), ("transformOrigin" == r || "tO" == r) && (i.anim.transformOrigin = d.toString()), ("transformPerspective" == r || "tP" == r) && (i.anim.transformPerspective = parseInt(d, 0)), ("speed" == r || "s" == r) && (i.speed = parseFloat(d) / 1e3), ("ease" == r || "e" == r) && (i.anim.ease = d))
            }), i
        },
        s = function(e) {
            if (void 0 === e) return !1;
            var t = new Object;
            t.anim = new Object;
            var a = e.split(";");
            return a && jQuery.each(a, function(e, a) {
                a = a.split(":");
                var i = a[0],
                    o = a[1];
                "x" == i && (t.anim.x = o), "y" == i && (t.anim.y = o), "s" == i && (t.speed = parseFloat(o) / 1e3), ("e" == i || "ease" == i) && (t.anim.ease = o)
            }), t
        },
        l = function(e, t) {
            if (void 0 == e && (e = 0), !jQuery.isArray(e) && "string" === jQuery.type(e) && (e.split(",").length > 1 || e.split("[").length > 1)) {
                e = e.replace("[", ""), e = e.replace("]", "");
                var a = e.split(e.match(/'/g) ? "'," : ",");
                e = new Array, a && jQuery.each(a, function(t, a) {
                    a = a.replace("'", ""), a = a.replace("'", ""), e.push(a)
                })
            } else {
                var i = e;
                jQuery.isArray(e) || (e = new Array, e.push(i))
            }
            var i = e[e.length - 1];
            if (e.length < t.rle)
                for (var o = 1; o <= t.curWinRange; o++) e.push(i);
            return e
        },
        p = function(e, t, a, i) {
            var o = -1;
            if (e.hasClass("tp-static-layer")) {
                var n = parseInt(e.data("startslide"), 0),
                    r = parseInt(e.data("endslide"), 0),
                    d = t.c.find(".processing-revslide").index(),
                    s = -1 != d ? d : t.c.find(".active-revslide").index();
                s = -1 == s ? 0 : s, "in" === a ? e.hasClass("rev-static-visbile") ? o = r == s || n > s || s > r ? 2 : 0 : s >= n && r >= s || n == s || r == s ? (i || (e.addClass("rev-static-visbile"), e.removeClass("rev-static-hidden")), o = 1) : o = 0 : e.hasClass("rev-static-visbile") ? n > s || s > r ? (o = 2, i || (e.removeClass("rev-static-visbile"), e.addClass("rev-static-hidden"))) : o = 0 : o = 2
            }
            return o
        },
        h = function(e, t) {
            if (void 0 === t) return e;
            t = t.replace("c:", "color:"), t = t.replace("bg:", "background-color:"), t = t.replace("bw:", "border-width:"), t = t.replace("bc:", "border-color:"), t = t.replace("br:", "borderRadius:"), t = t.replace("bs:", "border-style:"), t = t.replace("td:", "text-decoration:");
            var a = t.split(";");
            return a && jQuery.each(a, function(t, a) {
                var i = a.split(":");
                i[0].length > 0 && (e.anim[i[0]] = i[1])
            }), e
        },
        c = function(e, t) {
            var a, i = new Object,
                o = !1;
            if ("rekursive" == t && (a = e.closest(".tp-caption"), a && e.css("fontSize") === a.css("fontSize") && (o = !0)), i.basealign = e.data("basealign") || "grid", i.fontSize = o ? void 0 === a.data("fontsize") ? parseInt(a.css("fontSize"), 0) || 0 : a.data("fontsize") : void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize"), i.fontWeight = o ? void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight") : void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight"), i.whiteSpace = o ? void 0 === a.data("whitespace") ? a.css("whitespace") || "normal" : a.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace"), i.lineHeight = o ? void 0 === a.data("lineheight") ? parseInt(a.css("lineHeight"), 0) || 0 : a.data("lineheight") : void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight"), i.letterSpacing = o ? void 0 === a.data("letterspacing") ? parseFloat(a.css("letterSpacing"), 0) || 0 : a.data("letterspacing") : void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing")) || 0 : e.data("letterspacing"), i.paddingTop = void 0 === e.data("paddingtop") ? parseInt(e.css("paddingTop"), 0) || 0 : e.data("paddingtop"), i.paddingBottom = void 0 === e.data("paddingbottom") ? parseInt(e.css("paddingBottom"), 0) || 0 : e.data("paddingbottom"), i.paddingLeft = void 0 === e.data("paddingleft") ? parseInt(e.css("paddingLeft"), 0) || 0 : e.data("paddingleft"), i.paddingRight = void 0 === e.data("paddingright") ? parseInt(e.css("paddingRight"), 0) || 0 : e.data("paddingright"), i.marginTop = void 0 === e.data("margintop") ? parseInt(e.css("marginTop"), 0) || 0 : e.data("margintop"), i.marginBottom = void 0 === e.data("marginbottom") ? parseInt(e.css("marginBottom"), 0) || 0 : e.data("marginbottom"), i.marginLeft = void 0 === e.data("marginleft") ? parseInt(e.css("marginLeft"), 0) || 0 : e.data("marginleft"), i.marginRight = void 0 === e.data("marginright") ? parseInt(e.css("marginRight"), 0) || 0 : e.data("marginright"), i.borderTopWidth = void 0 === e.data("bordertopwidth") ? parseInt(e.css("borderTopWidth"), 0) || 0 : e.data("bordertopwidth"), i.borderBottomWidth = void 0 === e.data("borderbottomwidth") ? parseInt(e.css("borderBottomWidth"), 0) || 0 : e.data("borderbottomwidth"), i.borderLeftWidth = void 0 === e.data("borderleftwidth") ? parseInt(e.css("borderLeftWidth"), 0) || 0 : e.data("borderleftwidth"), i.borderRightWidth = void 0 === e.data("borderrightwidth") ? parseInt(e.css("borderRightWidth"), 0) || 0 : e.data("borderrightwidth"), "rekursive" != t) {
                if (i.color = void 0 === e.data("color") ? "nopredefinedcolor" : e.data("color"), i.whiteSpace = o ? void 0 === a.data("whitespace") ? a.css("whiteSpace") || "nowrap" : a.data("whitespace") : void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace"), i.minWidth = void 0 === e.data("width") ? parseInt(e.css("minWidth"), 0) || 0 : e.data("width"), i.minHeight = void 0 === e.data("height") ? parseInt(e.css("minHeight"), 0) || 0 : e.data("height"), void 0 != e.data("videowidth") && void 0 != e.data("videoheight")) {
                    var n = e.data("videowidth"),
                        r = e.data("videoheight");
                    n = "100%" === n ? "none" : n, r = "100%" === r ? "none" : r, e.data("width", n), e.data("height", r)
                }
                i.maxWidth = void 0 === e.data("width") ? parseInt(e.css("maxWidth"), 0) || "none" : e.data("width"), i.maxHeight = void 0 === e.data("height") ? parseInt(e.css("maxHeight"), 0) || "none" : e.data("height"), i.wan = void 0 === e.data("wan") ? parseInt(e.css("-webkit-transition"), 0) || "none" : e.data("wan"), i.moan = void 0 === e.data("moan") ? parseInt(e.css("-moz-animation-transition"), 0) || "none" : e.data("moan"), i.man = void 0 === e.data("man") ? parseInt(e.css("-ms-animation-transition"), 0) || "none" : e.data("man"), i.ani = void 0 === e.data("ani") ? parseInt(e.css("transition"), 0) || "none" : e.data("ani")
            }
            return i.styleProps = e.css(["background-color", "border-top-color", "border-bottom-color", "border-right-color", "border-left-color", "border-top-style", "border-bottom-style", "border-left-style", "border-right-style", "border-left-width", "border-right-width", "border-bottom-width", "border-top-width", "color", "text-decoration", "font-style", "border-radius"]), i
        },
        u = function(e, t) {
            var a = new Object;
            return e && jQuery.each(e, function(i, o) {
                a[i] = l(o, t)[t.curWinRange] || e[i]
            }), a
        },
        f = function(e, t, a, i) {
            return e = jQuery.isNumeric(e) ? e * t + "px" : e, e = "full" === e ? i : "auto" === e || "none" === e ? a : e
        },
        v = function(e, t, a, i) {
            var o;
            void 0 === e.data("cssobj") ? (o = c(e, a), e.data("cssobj", o)) : o = e.data("cssobj");
            var n = u(o, t),
                r = t.bw,
                d = t.bh;
            if ("off" === i && (r = 1, d = 1), "auto" == n.lineHeight && (n.lineHeight = n.fontSize + 4), !e.hasClass("tp-splitted")) {
                e.css("-webkit-transition", "none"), e.css("-moz-transition", "none"), e.css("-ms-transition", "none"), e.css("transition", "none");
                var s = void 0 !== e.data("transform_hover") || void 0 !== e.data("style_hover");
                if (s && punchgs.TweenLite.set(e, n.styleProps), punchgs.TweenLite.set(e, {
                        fontSize: Math.round(n.fontSize * r) + "px",
                        fontWeight: n.fontWeight,
                        letterSpacing: Math.floor(n.letterSpacing * r) + "px",
                        paddingTop: Math.round(n.paddingTop * d) + "px",
                        paddingBottom: Math.round(n.paddingBottom * d) + "px",
                        paddingLeft: Math.round(n.paddingLeft * r) + "px",
                        paddingRight: Math.round(n.paddingRight * r) + "px",
                        marginTop: n.marginTop * d + "px",
                        marginBottom: n.marginBottom * d + "px",
                        marginLeft: n.marginLeft * r + "px",
                        marginRight: n.marginRight * r + "px",
                        borderTopWidth: Math.round(n.borderTopWidth * d) + "px",
                        borderBottomWidth: Math.round(n.borderBottomWidth * d) + "px",
                        borderLeftWidth: Math.round(n.borderLeftWidth * r) + "px",
                        borderRightWidth: Math.round(n.borderRightWidth * r) + "px",
                        lineHeight: Math.round(n.lineHeight * d) + "px",
                        overwrite: "auto"
                    }), "rekursive" != a) {
                    var l = "slide" == n.basealign ? t.ulw : t.gridwidth[t.curWinRange],
                        p = "slide" == n.basealign ? t.ulh : t.gridheight[t.curWinRange],
                        h = f(n.maxWidth, r, "none", l),
                        v = f(n.maxHeight, d, "none", p),
                        g = f(n.minWidth, r, "0px", l),
                        m = f(n.minHeight, d, "0px", p);
                    punchgs.TweenLite.set(e, {
                        maxWidth: h,
                        maxHeight: v,
                        minWidth: g,
                        minHeight: m,
                        whiteSpace: n.whiteSpace,
                        overwrite: "auto"
                    }), "nopredefinedcolor" != n.color && punchgs.TweenLite.set(e, {
                        color: n.color,
                        overwrite: "auto"
                    })
                }
                setTimeout(function() {
                    e.css("-webkit-transition", e.data("wan")), e.css("-moz-transition", e.data("moan")), e.css("-ms-transition", e.data("man")), e.css("transition", e.data("ani"))
                }, 30)
            }
        },
        g = function(e, t) {
            if (e.hasClass("rs-pendulum") && void 0 == e.data("loop-timeline")) {
                e.data("loop-timeline", new punchgs.TimelineLite);
                var a = void 0 == e.data("startdeg") ? -20 : e.data("startdeg"),
                    i = void 0 == e.data("enddeg") ? 20 : e.data("enddeg"),
                    o = void 0 == e.data("speed") ? 2 : e.data("speed"),
                    n = void 0 == e.data("origin") ? "50% 50%" : e.data("origin"),
                    r = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("ease");
                a *= t, i *= t, e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, o, {
                    force3D: "auto",
                    rotation: a,
                    transformOrigin: n
                }, {
                    rotation: i,
                    ease: r
                })), e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, o, {
                    force3D: "auto",
                    rotation: i,
                    transformOrigin: n
                }, {
                    rotation: a,
                    ease: r,
                    onComplete: function() {
                        e.data("loop-timeline").restart()
                    }
                }))
            }
            if (e.hasClass("rs-rotate") && void 0 == e.data("loop-timeline")) {
                e.data("loop-timeline", new punchgs.TimelineLite);
                var a = void 0 == e.data("startdeg") ? 0 : e.data("startdeg"),
                    i = void 0 == e.data("enddeg") ? 360 : e.data("enddeg");
                o = void 0 == e.data("speed") ? 2 : e.data("speed"), n = void 0 == e.data("origin") ? "50% 50%" : e.data("origin"), r = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing"), a *= t, i *= t, e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, o, {
                    force3D: "auto",
                    rotation: a,
                    transformOrigin: n
                }, {
                    rotation: i,
                    ease: r,
                    onComplete: function() {
                        e.data("loop-timeline").restart()
                    }
                }))
            }
            if (e.hasClass("rs-slideloop") && void 0 == e.data("loop-timeline")) {
                e.data("loop-timeline", new punchgs.TimelineLite);
                var d = void 0 == e.data("xs") ? 0 : e.data("xs"),
                    s = void 0 == e.data("ys") ? 0 : e.data("ys"),
                    l = void 0 == e.data("xe") ? 0 : e.data("xe"),
                    p = void 0 == e.data("ye") ? 0 : e.data("ye"),
                    o = void 0 == e.data("speed") ? 2 : e.data("speed"),
                    r = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                d *= t, s *= t, l *= t, p *= t, e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, o, {
                    force3D: "auto",
                    x: d,
                    y: s
                }, {
                    x: l,
                    y: p,
                    ease: r
                })), e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, o, {
                    force3D: "auto",
                    x: l,
                    y: p
                }, {
                    x: d,
                    y: s,
                    onComplete: function() {
                        e.data("loop-timeline").restart()
                    }
                }))
            }
            if (e.hasClass("rs-pulse") && void 0 == e.data("loop-timeline")) {
                e.data("loop-timeline", new punchgs.TimelineLite);
                var h = void 0 == e.data("zoomstart") ? 0 : e.data("zoomstart"),
                    c = void 0 == e.data("zoomend") ? 0 : e.data("zoomend"),
                    o = void 0 == e.data("speed") ? 2 : e.data("speed"),
                    r = void 0 == e.data("easing") ? punchgs.Power2.easeInOut : e.data("easing");
                e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, o, {
                    force3D: "auto",
                    scale: h
                }, {
                    scale: c,
                    ease: r
                })), e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(e, o, {
                    force3D: "auto",
                    scale: c
                }, {
                    scale: h,
                    onComplete: function() {
                        e.data("loop-timeline").restart()
                    }
                }))
            }
            if (e.hasClass("rs-wave") && void 0 == e.data("loop-timeline")) {
                e.data("loop-timeline", new punchgs.TimelineLite);
                var u = void 0 == e.data("angle") ? 10 : parseInt(e.data("angle"), 0),
                    f = void 0 == e.data("radius") ? 10 : parseInt(e.data("radius"), 0),
                    o = void 0 == e.data("speed") ? -20 : e.data("speed"),
                    n = void 0 == e.data("origin") ? "50% 50%" : e.data("origin"),
                    v = n.split(" "),
                    g = new Object;
                v.length >= 1 ? (g.x = v[0], g.y = v[1]) : (g.x = "50%", g.y = "50%"), u *= t, f *= t;
                var m = 0 - e.height() / 2 + f * (-1 + parseInt(g.y, 0) / 100),
                    w = e.width() * (-.5 + parseInt(g.x, 0) / 100),
                    b = {
                        a: 0,
                        ang: u,
                        element: e,
                        unit: f,
                        xoffset: w,
                        yoffset: m
                    };
                e.data("loop-timeline").append(new punchgs.TweenLite.fromTo(b, o, {
                    a: 360
                }, {
                    a: 0,
                    force3D: "auto",
                    ease: punchgs.Linear.easeNone,
                    onUpdate: function() {
                        var e = b.a * (Math.PI / 180);
                        punchgs.TweenLite.to(b.element, .1, {
                            force3D: "auto",
                            x: b.xoffset + Math.cos(e) * b.unit,
                            y: b.yoffset + b.unit * (1 - Math.sin(e))
                        })
                    },
                    onComplete: function() {
                        e.data("loop-timeline").restart()
                    }
                }))
            }
        },
        m = function(e) {
            e.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var e = jQuery(this);
                void 0 != e.data("loop-timeline") && (e.data("loop-timeline").pause(), e.data("loop-timeline", null))
            })
        }
}(jQuery), ! function() {
    var e = jQuery.fn.revolution,
        t = e.is_mobile();
    jQuery.extend(!0, e, {
        hideUnHideNav: function(e) {
            var t = e.c.width(),
                a = e.navigation.arrows,
                i = e.navigation.bullets,
                o = e.navigation.thumbnails,
                n = e.navigation.tabs;
            p(a) && T(e.c.find(".tparrows"), a.hide_under, t, a.hide_over), p(i) && T(e.c.find(".tp-bullets"), i.hide_under, t, i.hide_over), p(o) && T(e.c.parent().find(".tp-thumbs"), o.hide_under, t, o.hide_over), p(n) && T(e.c.parent().find(".tp-tabs"), n.hide_under, t, n.hide_over), x(e)
        },
        resizeThumbsTabs: function(e) {
            if (e.navigation && e.navigation.tabs.enable || e.navigation && e.navigation.thumbnails.enable) {
                var t = (jQuery(window).width() - 480) / 500,
                    a = new punchgs.TimelineLite,
                    o = e.navigation.tabs,
                    n = e.navigation.thumbnails;
                a.pause(), t = t > 1 ? 1 : 0 > t ? 0 : t, p(o) && o.width > o.min_width && i(t, a, e.c, o, e.slideamount, "tab"), p(n) && n.width > n.min_width && i(t, a, e.c, n, e.slideamount, "thumb"), a.play(), x(e)
            }
            return !0
        },
        manageNavigation: function(t) {
            var i = e.getHorizontalOffset(t.c.parent(), "left"),
                o = e.getHorizontalOffset(t.c.parent(), "right");
            p(t.navigation.bullets) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.bullets.h_offset_old = void 0 === t.navigation.bullets.h_offset_old ? t.navigation.bullets.h_offset : t.navigation.bullets.h_offset_old, t.navigation.bullets.h_offset = "center" === t.navigation.bullets.h_align ? t.navigation.bullets.h_offset_old + i / 2 - o / 2 : t.navigation.bullets.h_offset_old + i - o), m(t.c.find(".tp-bullets"), t.navigation.bullets)), p(t.navigation.thumbnails) && m(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), p(t.navigation.tabs) && m(t.c.parent().find(".tp-tabs"), t.navigation.tabs), p(t.navigation.arrows) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.arrows.left.h_offset_old = void 0 === t.navigation.arrows.left.h_offset_old ? t.navigation.arrows.left.h_offset : t.navigation.arrows.left.h_offset_old, t.navigation.arrows.left.h_offset = "right" === t.navigation.arrows.left.h_align ? t.navigation.arrows.left.h_offset_old + o : t.navigation.arrows.left.h_offset_old + i, t.navigation.arrows.right.h_offset_old = void 0 === t.navigation.arrows.right.h_offset_old ? t.navigation.arrows.right.h_offset : t.navigation.arrows.right.h_offset_old, t.navigation.arrows.right.h_offset = "right" === t.navigation.arrows.right.h_align ? t.navigation.arrows.right.h_offset_old + o : t.navigation.arrows.right.h_offset_old + i), m(t.c.find(".tp-leftarrow.tparrows"), t.navigation.arrows.left), m(t.c.find(".tp-rightarrow.tparrows"), t.navigation.arrows.right)), p(t.navigation.thumbnails) && a(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), p(t.navigation.tabs) && a(t.c.parent().find(".tp-tabs"), t.navigation.tabs)
        },
        createNavigation: function(e, i) {
            var o = e.parent(),
                d = i.navigation.arrows,
                h = i.navigation.bullets,
                v = i.navigation.thumbnails,
                g = i.navigation.tabs,
                m = p(d),
                b = p(h),
                x = p(v),
                T = p(g);
            n(e, i), r(e, i), m && f(e, d, i), i.li.each(function() {
                var t = jQuery(this);
                b && w(e, h, t, i), x && y(e, v, t, "tp-thumb", i), T && y(e, g, t, "tp-tab", i)
            }), e.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                var t = 0 == e.find(".next-revslide").length ? e.find(".active-revslide").data("index") : e.find(".next-revslide").data("index");
                e.find(".tp-bullet").each(function() {
                    var e = jQuery(this);
                    e.data("liref") === t ? e.addClass("selected") : e.removeClass("selected")
                }), o.find(".tp-thumb, .tp-tab").each(function() {
                    var e = jQuery(this);
                    e.data("liref") === t ? (e.addClass("selected"), e.hasClass("tp-tab") ? a(o.find(".tp-tabs"), g) : a(o.find(".tp-thumbs"), v)) : e.removeClass("selected")
                });
                var n = 0,
                    r = !1;
                i.thumbs && jQuery.each(i.thumbs, function(e, a) {
                    n = r === !1 ? e : n, r = a.id === t || e === t ? !0 : r
                });
                var s = n > 0 ? n - 1 : i.slideamount - 1,
                    l = n + 1 == i.slideamount ? 0 : n + 1;
                if (d.enable === !0) {
                    var p = d.tmp;
                    jQuery.each(i.thumbs[s].params, function(e, t) {
                        p = p.replace(t.from, t.to)
                    }), d.left.j.html(p), p = d.tmp, jQuery.each(i.thumbs[l].params, function(e, t) {
                        p = p.replace(t.from, t.to)
                    }), d.right.j.html(p), punchgs.TweenLite.set(d.left.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + i.thumbs[s].src + ")"
                    }), punchgs.TweenLite.set(d.right.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + i.thumbs[l].src + ")"
                    })
                }
            }), l(d), l(h), l(v), l(g), o.on("mouseenter mousemove", function() {
                o.hasClass("tp-mouseover") || (o.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(u), m && d.hide_onleave && u(o.find(".tparrows"), d, "show"), b && h.hide_onleave && u(o.find(".tp-bullets"), h, "show"), x && v.hide_onleave && u(o.find(".tp-thumbs"), v, "show"), T && g.hide_onleave && u(o.find(".tp-tabs"), g, "show"), t && (o.removeClass("tp-mouseover"), c(e, i)))
            }), o.on("mouseleave", function() {
                o.removeClass("tp-mouseover"), c(e, i)
            }), m && d.hide_onleave && u(o.find(".tparrows"), d, "hide", 0), b && h.hide_onleave && u(o.find(".tp-bullets"), h, "hide", 0), x && v.hide_onleave && u(o.find(".tp-thumbs"), v, "hide", 0), T && g.hide_onleave && u(o.find(".tp-tabs"), g, "hide", 0), x && s(o.find(".tp-thumbs"), i), T && s(o.find(".tp-tabs"), i), "carousel" === i.sliderType && s(e, i, !0), "on" == i.navigation.touch.touchenabled && s(e, i, "swipebased")
        }
    });
    var a = function(e, t) {
            var a = (e.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", e.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                i = e.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                o = e.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
                n = e.find(a),
                r = n.find(i),
                d = t.direction,
                s = "vertical" === d ? n.find(o).first().outerHeight(!0) + t.space : n.find(o).first().outerWidth(!0) + t.space,
                l = "vertical" === d ? n.height() : n.width(),
                p = parseInt(n.find(o + ".selected").data("liindex"), 0),
                h = l / s,
                c = "vertical" === d ? n.height() : n.width(),
                u = 0 - p * s,
                f = "vertical" === d ? r.height() : r.width(),
                v = 0 - (f - c) > u ? 0 - (f - c) : v > 0 ? 0 : u,
                g = r.data("offset");
            h > 2 && (v = 0 >= u - (g + s) ? 0 - s > u - (g + s) ? g : v + s : v, v = s > u - s + g + l && u + (Math.round(h) - 2) * s < g ? u + (Math.round(h) - 2) * s : v), v = 0 - (f - c) > v ? 0 - (f - c) : v > 0 ? 0 : v, "vertical" !== d && n.width() >= r.width() && (v = 0), "vertical" === d && n.height() >= r.height() && (v = 0), e.hasClass("dragged") || ("vertical" === d ? r.data("tmmove", punchgs.TweenLite.to(r, .5, {
                top: v + "px",
                ease: punchgs.Power3.easeInOut
            })) : r.data("tmmove", punchgs.TweenLite.to(r, .5, {
                left: v + "px",
                ease: punchgs.Power3.easeInOut
            })), r.data("offset", v))
        },
        i = function(e, t, a, i, o, n) {
            var r = a.parent().find(".tp-" + n + "s"),
                d = r.find(".tp-" + n + "s-inner-wrapper"),
                s = r.find(".tp-" + n + "-mask"),
                l = i.width * e < i.min_width ? i.min_width : Math.round(i.width * e),
                p = Math.round(l / i.width * i.height),
                h = "vertical" === i.direction ? l : l * o + i.space * (o - 1),
                c = "vertical" === i.direction ? p * o + i.space * (o - 1) : p,
                u = "vertical" === i.direction ? {
                    width: l + "px"
                } : {
                    height: p + "px"
                };
            t.add(punchgs.TweenLite.set(r, u)), t.add(punchgs.TweenLite.set(d, {
                width: h + "px",
                height: c + "px"
            })), t.add(punchgs.TweenLite.set(s, {
                width: h + "px",
                height: c + "px"
            }));
            var f = d.find(".tp-" + n);
            return f && jQuery.each(f, function(e, a) {
                "vertical" === i.direction ? t.add(punchgs.TweenLite.set(a, {
                    top: e * (p + parseInt(void 0 === i.space ? 0 : i.space, 0)),
                    width: l + "px",
                    height: p + "px"
                })) : "horizontal" === i.direction && t.add(punchgs.TweenLite.set(a, {
                    left: e * (l + parseInt(void 0 === i.space ? 0 : i.space, 0)),
                    width: l + "px",
                    height: p + "px"
                }))
            }), t
        },
        o = function(e) {
            var t = 0,
                a = 0,
                i = 0,
                o = 0,
                n = 1,
                r = 1,
                d = 1;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = t * n, o = a * n, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || o) && e.deltaMode && (1 == e.deltaMode ? (i *= r, o *= r) : (i *= d, o *= d)), i && !t && (t = 1 > i ? -1 : 1), o && !a && (a = 1 > o ? -1 : 1), o = navigator.userAgent.match(/mozilla/i) ? 10 * o : o, (o > 300 || -300 > o) && (o /= 10), {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: o
            }
        },
        n = function(t, a) {
            "on" === a.navigation.keyboardNavigation && jQuery(document).keydown(function(i) {
                ("horizontal" == a.navigation.keyboard_direction && 39 == i.keyCode || "vertical" == a.navigation.keyboard_direction && 40 == i.keyCode) && (a.sc_indicator = "arrow", e.callingNewSlide(a, t, 1)), ("horizontal" == a.navigation.keyboard_direction && 37 == i.keyCode || "vertical" == a.navigation.keyboard_direction && 38 == i.keyCode) && (a.sc_indicator = "arrow", e.callingNewSlide(a, t, -1))
            })
        },
        r = function(t, a) {
            if ("on" === a.navigation.mouseScrollNavigation) {
                var i = navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                    n = navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                t.on("mousewheel DOMMouseScroll", function(r) {
                    var d = o(r.originalEvent),
                        s = t.find(".tp-revslider-slidesli.active-revslide").index(),
                        l = t.find(".tp-revslider-slidesli.processing-revslide").index(),
                        p = -1 != s && 0 == s || -1 != l && 0 == l ? !0 : !1,
                        h = -1 != s && s == a.slideamount - 1 || 1 != l && l == a.slideamount - 1 ? !0 : !1;
                    if (-1 == l) {
                        if (d.pixelY < i) {
                            if (!p) return a.sc_indicator = "arrow", e.callingNewSlide(a, t, -1), !1
                        } else if (d.pixelY > n && !h) return a.sc_indicator = "arrow", e.callingNewSlide(a, t, 1), !1
                    } else if (!h) return !1;
                    r.preventDefault()
                })
            }
        },
        d = function(e, a, i) {
            return e = t ? jQuery(i.target).closest("." + e).length || jQuery(i.srcElement).closest("." + e).length : jQuery(i.toElement).closest("." + e).length || jQuery(i.originalTarget).closest("." + e).length, e === !0 || 1 === e ? 1 : 0
        },
        s = function(a, i, o) {
            a.data("opt", i);
            var n = i.carousel;
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), n.Limit = "endless";
            var r = (t || "Firefox" === e.get_browser(), a),
                s = "vertical" === i.navigation.thumbnails.direction || "vertical" === i.navigation.tabs.direction ? "none" : "vertical",
                l = i.navigation.touch.swipe_direction || "horizontal";
            s = "swipebased" == o && "vertical" == l ? "none" : o ? "vertical" : s, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || (jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, a, .noSwipe"), r.swipetp({
                allowPageScroll: s,
                triggerOnTouchLeave: !0,
                excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
                swipeStatus: function(t, o, r, s) {
                    var p = d("rev_slider_wrapper", a, t),
                        h = d("tp-thumbs", a, t),
                        c = d("tp-tabs", a, t),
                        u = jQuery(this).attr("class"),
                        f = u.match(/tp-tabs|tp-thumb/gi) ? !0 : !1;
                    if ("carousel" === i.sliderType && (("move" === o || "end" === o || "cancel" == o) && i.dragStartedOverSlider && !i.dragStartedOverThumbs && !i.dragStartedOverTabs || "start" === o && p > 0 && 0 === h && 0 === c)) switch (i.dragStartedOverSlider = !0, s = r && r.match(/left|up/g) ? Math.round(-1 * s) : s = Math.round(1 * s), o) {
                        case "start":
                            void 0 !== n.positionanim && (n.positionanim.kill(), n.slide_globaloffset = "off" === n.infinity ? n.slide_offset : e.simp(n.slide_offset, n.maxwidth)), n.overpull = "none", n.wrap.addClass("dragged");
                            break;
                        case "move":
                            if (n.slide_offset = "off" === n.infinity ? n.slide_globaloffset + s : e.simp(n.slide_globaloffset + s, n.maxwidth), "off" === n.infinity) {
                                var v = "center" === n.horizontal_align ? (n.wrapwidth / 2 - n.slide_width / 2 - n.slide_offset) / n.slide_width : (0 - n.slide_offset) / n.slide_width;
                                "none" !== n.overpull && 0 !== n.overpull || !(0 > v || v > i.slideamount - 1) ? v >= 0 && v <= i.slideamount - 1 && (v >= 0 && s > n.overpull || v <= i.slideamount - 1 && s < n.overpull) && (n.overpull = 0) : n.overpull = s, n.slide_offset = 0 > v ? n.slide_offset + (n.overpull - s) / 1.1 + Math.sqrt(Math.abs((n.overpull - s) / 1.1)) : v > i.slideamount - 1 ? n.slide_offset + (n.overpull - s) / 1.1 - Math.sqrt(Math.abs((n.overpull - s) / 1.1)) : n.slide_offset
                            }
                            e.organiseCarousel(i, r, !0, !0);
                            break;
                        case "end":
                        case "cancel":
                            n.slide_globaloffset = n.slide_offset, n.wrap.removeClass("dragged"), e.carouselToEvalPosition(i, r), i.dragStartedOverSlider = !1, i.dragStartedOverThumbs = !1, i.dragStartedOverTabs = !1
                    } else {
                        if (("move" !== o && "end" !== o && "cancel" != o || i.dragStartedOverSlider || !i.dragStartedOverThumbs && !i.dragStartedOverTabs) && !("start" === o && p > 0 && (h > 0 || c > 0))) {
                            if ("end" == o && !f) {
                                if (i.sc_indicator = "arrow", "horizontal" == l && "left" == r || "vertical" == l && "up" == r) return e.callingNewSlide(i, i.c, 1), !1;
                                if ("horizontal" == l && "right" == r || "vertical" == l && "down" == r) return e.callingNewSlide(i, i.c, -1), !1
                            }
                            return i.dragStartedOverSlider = !1, i.dragStartedOverThumbs = !1, i.dragStartedOverTabs = !1, !0
                        }
                        h > 0 && (i.dragStartedOverThumbs = !0), c > 0 && (i.dragStartedOverTabs = !0);
                        var g = i.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                            m = i.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                            w = i.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                            b = i.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                            y = i.dragStartedOverThumbs ? i.navigation.thumbnails : i.navigation.tabs;
                        s = r && r.match(/left|up/g) ? Math.round(-1 * s) : s = Math.round(1 * s);
                        var x = a.parent().find(m),
                            T = x.find(w),
                            L = y.direction,
                            _ = "vertical" === L ? T.height() : T.width(),
                            k = "vertical" === L ? x.height() : x.width(),
                            j = "vertical" === L ? x.find(b).first().outerHeight(!0) + y.space : x.find(b).first().outerWidth(!0) + y.space,
                            z = void 0 === T.data("offset") ? 0 : parseInt(T.data("offset"), 0),
                            C = 0;
                        switch (o) {
                            case "start":
                                a.parent().find(g).addClass("dragged"), z = "vertical" === L ? T.position().top : T.position().left, T.data("offset", z), T.data("tmmove") && T.data("tmmove").pause();
                                break;
                            case "move":
                                if (k >= _) return !1;
                                C = z + s, C = C > 0 ? "horizontal" === L ? C - T.width() * (C / T.width() * C / T.width()) : C - T.height() * (C / T.height() * C / T.height()) : C;
                                var I = "vertical" === L ? 0 - (T.height() - x.height()) : 0 - (T.width() - x.width());
                                C = I > C ? "horizontal" === L ? C + T.width() * (C - I) / T.width() * (C - I) / T.width() : C + T.height() * (C - I) / T.height() * (C - I) / T.height() : C, "vertical" === L ? punchgs.TweenLite.set(T, {
                                    top: C + "px"
                                }) : punchgs.TweenLite.set(T, {
                                    left: C + "px"
                                });
                                break;
                            case "end":
                            case "cancel":
                                if (f) return C = z + s, C = "vertical" === L ? C < 0 - (T.height() - x.height()) ? 0 - (T.height() - x.height()) : C : C < 0 - (T.width() - x.width()) ? 0 - (T.width() - x.width()) : C, C = C > 0 ? 0 : C, C = Math.abs(s) > j / 10 ? 0 >= s ? Math.floor(C / j) * j : Math.ceil(C / j) * j : 0 > s ? Math.ceil(C / j) * j : Math.floor(C / j) * j, C = "vertical" === L ? C < 0 - (T.height() - x.height()) ? 0 - (T.height() - x.height()) : C : C < 0 - (T.width() - x.width()) ? 0 - (T.width() - x.width()) : C, C = C > 0 ? 0 : C, "vertical" === L ? punchgs.TweenLite.to(T, .5, {
                                    top: C + "px",
                                    ease: punchgs.Power3.easeOut
                                }) : punchgs.TweenLite.to(T, .5, {
                                    left: C + "px",
                                    ease: punchgs.Power3.easeOut
                                }), C = C ? C : "vertical" === L ? T.position().top : T.position().left, T.data("offset", C), T.data("distance", s), setTimeout(function() {
                                    i.dragStartedOverSlider = !1, i.dragStartedOverThumbs = !1, i.dragStartedOverTabs = !1
                                }, 100), a.parent().find(g).removeClass("dragged"), !1
                        }
                    }
                }
            })
        },
        l = function(e) {
            e.hide_delay = jQuery.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay / 1e3 : .2, e.hide_delay_mobile = jQuery.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile / 1e3 : .2
        },
        p = function(e) {
            return e && e.enable
        },
        h = function(e) {
            return e && e.enable && e.hide_onleave === !0 && (void 0 === e.position ? !0 : !e.position.match(/outer/g))
        },
        c = function(e, a) {
            var i = e.parent();
            h(a.navigation.arrows) && punchgs.TweenLite.delayedCall(t ? a.navigation.arrows.hide_delay_mobile : a.navigation.arrows.hide_delay, u, [i.find(".tparrows"), a.navigation.arrows, "hide"]), h(a.navigation.bullets) && punchgs.TweenLite.delayedCall(t ? a.navigation.bullets.hide_delay_mobile : a.navigation.bullets.hide_delay, u, [i.find(".tp-bullets"), a.navigation.bullets, "hide"]), h(a.navigation.thumbnails) && punchgs.TweenLite.delayedCall(t ? a.navigation.thumbnails.hide_delay_mobile : a.navigation.thumbnails.hide_delay, u, [i.find(".tp-thumbs"), a.navigation.thumbnails, "hide"]), h(a.navigation.tabs) && punchgs.TweenLite.delayedCall(t ? a.navigation.tabs.hide_delay_mobile : a.navigation.tabs.hide_delay, u, [i.find(".tp-tabs"), a.navigation.tabs, "hide"])
        },
        u = function(e, t, a, i) {
            switch (i = void 0 === i ? .5 : i, a) {
                case "show":
                    punchgs.TweenLite.to(e, i, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        overwrite: "auto"
                    });
                    break;
                case "hide":
                    punchgs.TweenLite.to(e, i, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOu,
                        overwrite: "auto"
                    })
            }
        },
        f = function(e, t, a) {
            t.style = void 0 === t.style ? "" : t.style, t.left.style = void 0 === t.left.style ? "" : t.left.style, t.right.style = void 0 === t.right.style ? "" : t.right.style, 0 === e.find(".tp-leftarrow.tparrows").length && e.append('<div class="tp-leftarrow tparrows ' + t.style + " " + t.left.style + '">' + t.tmp + "</div>"), 0 === e.find(".tp-rightarrow.tparrows").length && e.append('<div class="tp-rightarrow tparrows ' + t.style + " " + t.right.style + '">' + t.tmp + "</div>");
            var i = e.find(".tp-leftarrow.tparrows"),
                o = e.find(".tp-rightarrow.tparrows");
            o.click(function() {
                a.sc_indicator = "arrow", e.revnext()
            }), i.click(function() {
                a.sc_indicator = "arrow", e.revprev()
            }), t.right.j = e.find(".tp-rightarrow.tparrows"), t.left.j = e.find(".tp-leftarrow.tparrows"), t.padding_top = parseInt(a.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(a.carousel.padding_bottom || 0, 0), m(i, t.left), m(o, t.right), ("outer-left" == t.position || "outer-right" == t.position) && (a.outernav = !0)
        },
        v = function(e, t) {
            var a = e.outerHeight(!0),
                i = (e.outerWidth(!0), "top" === t.v_align ? {
                    top: "0px",
                    y: Math.round(t.v_offset) + "px"
                } : "center" === t.v_align ? {
                    top: "50%",
                    y: Math.round(0 - a / 2 + t.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (a + t.v_offset)) + "px"
                });
            e.hasClass("outer-bottom") || punchgs.TweenLite.set(e, i)
        },
        g = function(e, t) {
            var a = (e.outerHeight(!0), e.outerWidth(!0)),
                i = "left" === t.h_align ? {
                    left: "0px",
                    x: Math.round(t.h_offset) + "px"
                } : "center" === t.h_align ? {
                    left: "50%",
                    x: Math.round(0 - a / 2 + t.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (a + t.h_offset)) + "px"
                };
            punchgs.TweenLite.set(e, i)
        },
        m = function(e, t) {
            var a = e.closest(".tp-simpleresponsive").length > 0 ? e.closest(".tp-simpleresponsive") : e.closest(".tp-revslider-mainul").length > 0 ? e.closest(".tp-revslider-mainul") : e.closest(".rev_slider_wrapper").length > 0 ? e.closest(".rev_slider_wrapper") : e.parent().find(".tp-revslider-mainul"),
                i = a.width(),
                o = a.height();
            if (v(e, t), g(e, t), "outer-left" !== t.position || "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout ? "outer-right" !== t.position || "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout || punchgs.TweenLite.set(e, {
                    right: 0 - e.outerWidth() + "px",
                    x: t.h_offset + "px"
                }) : punchgs.TweenLite.set(e, {
                    left: 0 - e.outerWidth() + "px",
                    x: t.h_offset + "px"
                }), e.hasClass("tp-thumbs") || e.hasClass("tp-tabs")) {
                var n = e.data("wr_padding"),
                    r = e.data("maxw"),
                    d = e.data("maxh"),
                    s = e.find(e.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                    l = parseInt(t.padding_top || 0, 0),
                    p = parseInt(t.padding_bottom || 0, 0);
                r > i && "outer-left" !== t.position && "outer-right" !== t.position ? (punchgs.TweenLite.set(e, {
                    left: "0px",
                    x: 0,
                    maxWidth: i - 2 * n + "px"
                }), punchgs.TweenLite.set(s, {
                    maxWidth: i - 2 * n + "px"
                })) : (punchgs.TweenLite.set(e, {
                    maxWidth: r + "px"
                }), punchgs.TweenLite.set(s, {
                    maxWidth: r + "px"
                })), d + 2 * n > o && "outer-bottom" !== t.position && "outer-top" !== t.position ? (punchgs.TweenLite.set(e, {
                    top: "0px",
                    y: 0,
                    maxHeight: l + p + (o - 2 * n) + "px"
                }), punchgs.TweenLite.set(s, {
                    maxHeight: l + p + (o - 2 * n) + "px"
                })) : (punchgs.TweenLite.set(e, {
                    maxHeight: d + "px"
                }), punchgs.TweenLite.set(s, {
                    maxHeight: d + "px"
                })), "outer-left" !== t.position && "outer-right" !== t.position && (l = 0, p = 0), t.span === !0 && "vertical" === t.direction ? (punchgs.TweenLite.set(e, {
                    maxHeight: l + p + (o - 2 * n) + "px",
                    height: l + p + (o - 2 * n) + "px",
                    top: 0 - l,
                    y: 0
                }), v(s, t)) : t.span === !0 && "horizontal" === t.direction && (punchgs.TweenLite.set(e, {
                    maxWidth: "100%",
                    width: i - 2 * n + "px",
                    left: 0,
                    x: 0
                }), g(s, t))
            }
        },
        w = function(e, t, a, i) {
            0 === e.find(".tp-bullets").length && (t.style = void 0 === t.style ? "" : t.style, e.append('<div class="tp-bullets ' + t.style + " " + t.direction + '"></div>'));
            var o = e.find(".tp-bullets"),
                n = a.data("index"),
                r = t.tmp;
            jQuery.each(i.thumbs[a.index()].params, function(e, t) {
                r = r.replace(t.from, t.to)
            }), o.append('<div class="justaddedbullet tp-bullet">' + r + "</div>");
            var d = e.find(".justaddedbullet"),
                s = e.find(".tp-bullet").length,
                l = d.outerWidth() + parseInt(void 0 === t.space ? 0 : t.space, 0),
                p = d.outerHeight() + parseInt(void 0 === t.space ? 0 : t.space, 0);
            "vertical" === t.direction ? (d.css({
                top: (s - 1) * p + "px",
                left: "0px"
            }), o.css({
                height: (s - 1) * p + d.outerHeight(),
                width: d.outerWidth()
            })) : (d.css({
                left: (s - 1) * l + "px",
                top: "0px"
            }), o.css({
                width: (s - 1) * l + d.outerWidth(),
                height: d.outerHeight()
            })), d.find(".tp-bullet-image").css({
                backgroundImage: "url(" + i.thumbs[a.index()].src + ")"
            }), d.data("liref", n), d.click(function() {
                i.sc_indicator = "bullet", e.revcallslidewithid(n), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), d.removeClass("justaddedbullet"), t.padding_top = parseInt(i.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(i.carousel.padding_bottom || 0, 0), ("outer-left" == t.position || "outer-right" == t.position) && (i.outernav = !0), m(o, t)
        },
        b = function(e, t) {
            t = parseFloat(t), e = e.replace("#", "");
            var a = parseInt(e.substring(0, 2), 16),
                i = parseInt(e.substring(2, 4), 16),
                o = parseInt(e.substring(4, 6), 16),
                n = "rgba(" + a + "," + i + "," + o + "," + t + ")";
            return n
        },
        y = function(e, t, a, i, o) {
            var n = "tp-thumb" === i ? ".tp-thumbs" : ".tp-tabs",
                r = "tp-thumb" === i ? ".tp-thumb-mask" : ".tp-tab-mask",
                d = "tp-thumb" === i ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                s = "tp-thumb" === i ? ".tp-thumb" : ".tp-tab",
                l = "tp-thumb" === i ? ".tp-thumb-image" : ".tp-tab-image";
            if (t.visibleAmount = t.visibleAmount > o.slideamount ? o.slideamount : t.visibleAmount, t.sliderLayout = o.sliderLayout, 0 === e.parent().find(n).length) {
                t.style = void 0 === t.style ? "" : t.style;
                var p = t.span === !0 ? "tp-span-wrapper" : "",
                    h = '<div class="' + i + "s " + p + " " + t.position + " " + t.style + '"><div class="' + i + '-mask"><div class="' + i + 's-inner-wrapper" style="position:relative;"></div></div></div>';
                "outer-top" === t.position ? e.parent().prepend(h) : "outer-bottom" === t.position ? e.after(h) : e.append(h), t.padding_top = parseInt(o.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(o.carousel.padding_bottom || 0, 0), ("outer-left" == t.position || "outer-right" == t.position) && (o.outernav = !0)
            }
            var c = a.data("index"),
                u = e.parent().find(n),
                f = u.find(r),
                v = f.find(d),
                g = "horizontal" === t.direction ? t.width * t.visibleAmount + t.space * (t.visibleAmount - 1) : t.width,
                w = "horizontal" === t.direction ? t.height : t.height * t.visibleAmount + t.space * (t.visibleAmount - 1),
                y = t.tmp;
            jQuery.each(o.thumbs[a.index()].params, function(e, t) {
                y = y.replace(t.from, t.to)
            }), v.append('<div data-liindex="' + a.index() + '" data-liref="' + c + '" class="justaddedthumb ' + i + '" style="width:' + t.width + "px;height:" + t.height + 'px;">' + y + "</div>");
            var x = u.find(".justaddedthumb"),
                T = u.find(s).length,
                L = x.outerWidth() + parseInt(void 0 === t.space ? 0 : t.space, 0),
                _ = x.outerHeight() + parseInt(void 0 === t.space ? 0 : t.space, 0);
            x.find(l).css({
                backgroundImage: "url(" + o.thumbs[a.index()].src + ")"
            }), "vertical" === t.direction ? (x.css({
                top: (T - 1) * _ + "px",
                left: "0px"
            }), v.css({
                height: (T - 1) * _ + x.outerHeight(),
                width: x.outerWidth()
            })) : (x.css({
                left: (T - 1) * L + "px",
                top: "0px"
            }), v.css({
                width: (T - 1) * L + x.outerWidth(),
                height: x.outerHeight()
            })), u.data("maxw", g), u.data("maxh", w), u.data("wr_padding", t.wrapper_padding);
            var k = "outer-top" === t.position || "outer-bottom" === t.position ? "relative" : "absolute",
                j = "outer-top" !== t.position && "outer-bottom" !== t.position || "center" !== t.h_align ? "0" : "auto";
            f.css({
                maxWidth: g + "px",
                maxHeight: w + "px",
                overflow: "hidden",
                position: "relative"
            }), u.css({
                maxWidth: g + "px",
                margin: j,
                maxHeight: w + "px",
                overflow: "visible",
                position: k,
                background: b(t.wrapper_color, t.wrapper_opacity),
                padding: t.wrapper_padding + "px",
                boxSizing: "contet-box"
            }), x.click(function() {
                o.sc_indicator = "bullet";
                var t = e.parent().find(d).data("distance");
                t = void 0 === t ? 0 : t, Math.abs(t) < 10 && (e.revcallslidewithid(c), e.parent().find(n).removeClass("selected"), jQuery(this).addClass("selected"))
            }), x.removeClass("justaddedthumb"), m(u, t)
        },
        x = function(e) {
            var t = e.c.parent().find(".outer-top"),
                a = e.c.parent().find(".outer-bottom");
            e.top_outer = t.hasClass("tp-forcenotvisible") ? 0 : t.outerHeight() || 0, e.bottom_outer = a.hasClass("tp-forcenotvisible") ? 0 : a.outerHeight() || 0
        },
        T = function(e, t, a, i) {
            t > a || a > i ? e.addClass("tp-forcenotvisible") : e.removeClass("tp-forcenotvisible")
        }
}(jQuery), ! function() {
    var e = jQuery.fn.revolution,
        t = e.is_mobile();
    jQuery.extend(!0, e, {
        checkForParallax: function(a, i) {
            var o = i.parallax;
            return t && "on" == o.disable_onmobile ? !1 : (i.li.each(function() {
                for (var e = jQuery(this), t = 1; 10 >= t; t++) e.find(".rs-parallaxlevel-" + t).each(function() {
                    var e = jQuery(this),
                        a = e.closest(".tp-parallax-wrap");
                    a.data("parallaxlevel", o.levels[t - 1]), a.addClass("tp-parallax-container")
                })
            }), ("mouse" == o.type || "scroll+mouse" == o.type || "mouse+scroll" == o.type) && (a.mouseenter(function(e) {
                var t = a.find(".active-revslide"),
                    i = a.offset().top,
                    o = a.offset().left,
                    n = e.pageX - o,
                    r = e.pageY - i;
                t.data("enterx", n), t.data("entery", r)
            }), a.on("mousemove.hoverdir, mouseleave.hoverdir", function(e) {
                var t = a.find(".active-revslide");
                switch (e.type) {
                    case "mousemove":
                        if ("enterpoint" == o.origo) {
                            var n = a.offset().top,
                                r = a.offset().left;
                            void 0 == t.data("enterx") && t.data("enterx", e.pageX - r), void 0 == t.data("entery") && t.data("entery", e.pageY - n);
                            var d = t.data("enterx"),
                                s = t.data("entery"),
                                l = d - (e.pageX - r),
                                p = s - (e.pageY - n),
                                h = o.speed / 1e3 || .4
                        } else var n = a.offset().top,
                            r = a.offset().left,
                            l = i.conw / 2 - (e.pageX - r),
                            p = i.conh / 2 - (e.pageY - n),
                            h = o.speed / 1e3 || 3;
                        t.find(".tp-parallax-container").each(function() {
                            var e = jQuery(this),
                                t = parseInt(e.data("parallaxlevel"), 0) / 100,
                                a = l * t,
                                i = p * t;
                            "scroll+mouse" == o.type || "mouse+scroll" == o.type ? punchgs.TweenLite.to(e, h, {
                                force3D: "auto",
                                x: a,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(e, h, {
                                force3D: "auto",
                                x: a,
                                y: i,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        });
                        break;
                    case "mouseleave":
                        t.find(".tp-parallax-container").each(function() {
                            var e = jQuery(this);
                            "scroll+mouse" == o.type || "mouse+scroll" == o.type ? punchgs.TweenLite.to(e, 1.5, {
                                force3D: "auto",
                                x: 0,
                                ease: punchgs.Power3.easeOut
                            }) : punchgs.TweenLite.to(e, 1.5, {
                                force3D: "auto",
                                x: 0,
                                y: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                }
            }), t && (window.ondeviceorientation = function(e) {
                var t = Math.round(e.beta || 0),
                    i = Math.round(e.gamma || 0),
                    o = a.find(".active-revslide");
                if (jQuery(window).width() > jQuery(window).height()) {
                    var n = i;
                    i = t, t = n
                }
                var r = 360 / a.width() * i,
                    d = 180 / a.height() * t;
                o.find(".tp-parallax-container").each(function() {
                    var e = jQuery(this),
                        t = parseInt(e.data("parallaxlevel"), 0) / 100,
                        a = r * t,
                        i = d * t;
                    punchgs.TweenLite.to(e, .2, {
                        force3D: "auto",
                        x: a,
                        y: i,
                        ease: punchgs.Power3.easeOut
                    })
                })
            })), void e.scrollTicker(i, a))
        },
        scrollTicker: function(t, a) {
            1 != t.scrollTicker && (t.scrollTicker = !0, punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function() {
                e.scrollHandling(t)
            }, a, !0, 1))
        },
        scrollHandling: function(a) {
            a.lastwindowheight = a.lastwindowheight || jQuery(window).height();
            var i = a.c.offset().top,
                o = jQuery(window).scrollTop(),
                n = new Object,
                r = a.viewPort,
                d = a.parallax;
            if (a.lastscrolltop == o) return !1;
            a.lastscrolltop = o, n.top = i - o, n.h = 0 == a.conh ? a.c.height() : a.conh, n.bottom = i - o + n.h;
            var s = n.top < 0 ? n.top / n.h : n.bottom > a.lastwindowheight ? (n.bottom - a.lastwindowheight) / n.h : 0;
            a.scrollproc = s, e.callBackHandling && e.callBackHandling(a, "parallax", "start");
            var l = 1 - Math.abs(s);
            if (l = 0 > l ? 0 : l, r.enable && (1 - r.visible_area <= l ? a.inviewport || (a.inviewport = !0, e.enterInViewPort(a)) : a.inviewport && (a.inviewport = !1, e.leaveViewPort(a))), t && "on" == a.parallax.disable_onmobile) return !1;
            var p = new punchgs.TimelineLite;
            p.pause(), ("scroll" == d.type || "scroll+mouse" == d.type || "mouse+scroll" == d.type) && a.c.find(".tp-parallax-container").each(function() {
                var e = jQuery(this),
                    t = parseInt(e.data("parallaxlevel"), 0) / 100,
                    i = s * -(t * a.conh);
                e.data("parallaxoffset", i), p.add(punchgs.TweenLite.set(e, {
                    force3D: "auto",
                    y: i
                }), 0)
            }), a.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function() {
                var e = jQuery(this),
                    t = e.data("bgparallax") || a.parallax.bgparallax;
                if (t = "on" == t ? 1 : t, void 0 !== t || "off" !== t) {
                    var i = a.parallax.levels[parseInt(t, 0) - 1] / 100,
                        o = s * -(i * a.conh);
                    jQuery.isNumeric(o) && p.add(punchgs.TweenLite.set(e, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        backfaceVisibility: "hidden",
                        force3D: "true",
                        y: o + "px",
                        overwrite: "auto"
                    }), 0)
                }
            }), e.callBackHandling && e.callBackHandling(a, "parallax", "end"), p.play(0)
        }
    })
}(jQuery), ! function() {
    var e = jQuery.fn.revolution;
    jQuery.extend(!0, e, {
        animateSlide: function(e, t, a, i, n, r, d, s, l) {
            return o(e, t, a, i, n, r, d, s, l)
        }
    });
    var t = function(t, a, i, o) {
            var n = t,
                r = n.find(".defaultimg"),
                d = n.data("zoomstart"),
                s = n.data("rotationstart");
            void 0 != r.data("currotate") && (s = r.data("currotate")), void 0 != r.data("curscale") && "box" == o ? d = 100 * r.data("curscale") : void 0 != r.data("curscale") && (d = r.data("curscale")), e.slotSize(r, a);
            var l = r.attr("src"),
                p = r.css("backgroundColor"),
                h = a.width,
                c = a.height,
                u = r.data("fxof"),
                f = 0;
            "on" == a.autoHeight && (c = a.c.height()), void 0 == u && (u = 0);
            var v = 0,
                g = r.data("bgfit"),
                m = r.data("bgrepeat"),
                w = r.data("bgposition");
            switch (void 0 == g && (g = "cover"), void 0 == m && (m = "no-repeat"), void 0 == w && (w = "center center"), o) {
                case "box":
                    var b = 0,
                        y = 0,
                        x = 0;
                    if (b = a.sloth > a.slotw ? a.sloth : a.slotw, !i) var v = 0 - b;
                    a.slotw = b, a.sloth = b;
                    for (var y = 0, x = 0, T = 0; T < a.slots; T++) {
                        x = 0;
                        for (var L = 0; L < a.slots; L++) n.append('<div class="slot" style="position:absolute;top:' + (f + x) + "px;left:" + (u + y) + "px;width:" + b + "px;height:" + b + 'px;overflow:hidden;"><div class="slotslide" data-x="' + y + '" data-y="' + x + '" style="position:absolute;top:0px;left:0px;width:' + b + "px;height:" + b + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - x) + "px;left:" + (0 - y) + "px;width:" + h + "px;height:" + c + "px;background-color:" + p + ";background-image:url(" + l + ");background-repeat:" + m + ";background-size:" + g + ";background-position:" + w + ';"></div></div></div>'), x += b, void 0 != d && void 0 != s && punchgs.TweenLite.set(n.find(".slot").last(), {
                            rotationZ: s
                        });
                        y += b
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("horizontal" == o) {
                        if (!i) var v = 0 - a.slotw;
                        for (var L = 0; L < a.slots; L++) n.append('<div class="slot" style="position:absolute;top:' + (0 + f) + "px;left:" + (u + L * a.slotw) + "px;overflow:hidden;width:" + (a.slotw + .6) + "px;height:" + c + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + v + "px;width:" + (a.slotw + .6) + "px;height:" + c + 'px;overflow:hidden;"><div style="background-color:' + p + ";position:absolute;top:0px;left:" + (0 - L * a.slotw) + "px;width:" + h + "px;height:" + c + "px;background-image:url(" + l + ");background-repeat:" + m + ";background-size:" + g + ";background-position:" + w + ';"></div></div></div>'), void 0 != d && void 0 != s && punchgs.TweenLite.set(n.find(".slot").last(), {
                            rotationZ: s
                        })
                    } else {
                        if (!i) var v = 0 - a.sloth;
                        for (var L = 0; L < a.slots + 2; L++) n.append('<div class="slot" style="position:absolute;top:' + (f + L * a.sloth) + "px;left:" + u + "px;overflow:hidden;width:" + h + "px;height:" + a.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + v + "px;left:0px;width:" + h + "px;height:" + a.sloth + 'px;overflow:hidden;"><div style="background-color:' + p + ";position:absolute;top:" + (0 - L * a.sloth) + "px;left:0px;width:" + h + "px;height:" + c + "px;background-image:url(" + l + ");background-repeat:" + m + ";background-size:" + g + ";background-position:" + w + ';"></div></div></div>'), void 0 != d && void 0 != s && punchgs.TweenLite.set(n.find(".slot").last(), {
                            rotationZ: s
                        })
                    }
            }
        },
        a = function(e, t, a, i, o) {
            function n() {
                jQuery.each(y, function(e, t) {
                    (t[0] == a || t[8] == a) && (g = t[1], m = t[2], w = b), b += 1
                })
            }
            var r = punchgs.Power1.easeIn,
                d = punchgs.Power1.easeOut,
                s = punchgs.Power1.easeInOut,
                l = punchgs.Power2.easeIn,
                p = punchgs.Power2.easeOut,
                h = punchgs.Power2.easeInOut,
                c = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
                u = punchgs.Power3.easeInOut,
                f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                v = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                g = 0,
                m = 1,
                w = 0,
                b = 0,
                y = (new Array, [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, d, d, 500, 6],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, s, s, 700, 5],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, h, h, 700, 3],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, h, h, 700, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, d, d, 300, 5],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, d, d, 300, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, d, d, 300, 5],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, d, d, 300, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, p, p, 500, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9, p, p, 500, 25],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10, p, p, 500, 25],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, h, h, 1e3, 1],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, u, u, 1e3, 1],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, u, u, 1e3, 1],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, u, u, 1e3, 1],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, u, u, 1e3, 1],
                    ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, u, u, 1e3, 1],
                    ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, u, u, 1e3, 1],
                    ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, u, u, 1e3, 1],
                    ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, u, u, 1e3, 1],
                    ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, u, u, 1e3, 1],
                    ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, u, u, 1e3, 1],
                    ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, u, u, 1e3, 1],
                    ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, u, u, 1e3, 1],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16, u, u, 1e3, 2],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, s, s, 500, 7],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, s, s, 500, 5],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, u, u, 500, 1],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, u, u, 500, 1],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, c, u, 500, 1],
                    ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, u, u, 500, 1],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, h, h, 500, 1],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, p, p, 500, 1],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, p, p, 500, 1],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, h, h, 500, 1],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, h, h, 500, 1],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28, h, h, 1e3, 1],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, h, h, 1e3, 1],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, h, h, 1e3, 1],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, h, h, 1e3, 1],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, h, h, 1e3, 1],
                    ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, h, h, 1e3, 1],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, h, h, 1e3, 1],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, h, h, 1e3, 1],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36, h, l, 1500, 1],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37, h, l, 1500, 1],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, h, r, 1500, 1],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, h, r, 1500, 1],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, h, l, 1e3, 1],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, h, l, 1e3, 1],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, h, l, 1e3, 1],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, h, l, 1e3, 1],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, h, l, 1e3, 1],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, h, l, 1e3, 1],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, h, l, 1e3, 1]
                ]);
            "slidehorizontal" == a && (a = "slideleft", 1 == o && (a = "slideright")), "slidevertical" == a && (a = "slideup", 1 == o && (a = "slidedown")), "slideoverhorizontal" == a && (a = "slideoverleft", 1 == o && (a = "slideoverright")), "slideoververtical" == a && (a = "slideoverup", 1 == o && (a = "slideoverdown")), "slideremovehorizontal" == a && (a = "slideremoveleft", 1 == o && (a = "slideremoveright")), "slideremovevertical" == a && (a = "slideremoveup", 1 == o && (a = "slideremovedown")), "parallaxhorizontal" == a && (a = "parallaxtoleft", 1 == o && (a = "parallaxtoright")), "parallaxvertical" == a && (a = "parallaxtotop", 1 == o && (a = "parallaxtobottom")), "random" == a && (a = Math.round(Math.random() * y.length - 1), a > y.length - 1 && (a = y.length - 1)), "random-static" == a && (a = Math.round(Math.random() * f.length - 1), a > f.length - 1 && (a = f.length - 1), a = f[a]), "random-premium" == a && (a = Math.round(Math.random() * v.length - 1), a > v.length - 1 && (a = v.length - 1), a = v[a]);
            var x = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == t.isJoomla && void 0 != window.MooTools && -1 != x.indexOf(a)) {
                var T = Math.round(Math.random() * (v.length - 2)) + 1;
                T > v.length - 1 && (T = v.length - 1), 0 == T && (T = 1), a = v[T]
            }
            n(), g > 26 && (g = 26), 0 > g && (g = 0);
            var L = new Object;
            return L.nexttrans = g, L.STA = y[w], L.specials = m, L
        },
        i = function(e, t) {
            return void 0 == t || jQuery.isNumeric(e) ? e : void 0 == e ? e : e.split(",")[t]
        },
        o = function(e, o, n, r, d, s, l, p, h) {
            var c = s.index(),
                u = d.index(),
                f = c > u ? 1 : 0;
            "arrow" == r.sc_indicator && (0 == c && u == r.slideamount - 1 && (f = 1), c == r.slideamount - 1 && 0 == u && (f = 0));
            var v = a(n, r, o, l, f),
                g = v.STA,
                m = v.specials,
                e = v.nexttrans;
            "on" == l.data("kenburns") && (e = 11);
            var w = d.data("nexttransid") || 0,
                b = i(d.data("masterspeed"), w);
            b = "default" === b ? g[11] : "random" === b ? Math.round(1e3 * Math.random() + 300) : void 0 != b ? parseInt(b, 0) : g[11], b = b > r.delay ? r.delay : b, b += g[4], r.slots = i(d.data("slotamount"), w), r.slots = void 0 == r.slots || "default" == r.slots ? g[12] : "random" == r.slots ? Math.round(12 * Math.random() + 4) : g[12], r.slots = r.slots < 1 ? "boxslide" == o ? Math.round(6 * Math.random() + 3) : "flyin" == o ? Math.round(4 * Math.random() + 1) : r.slots : r.slots, r.slots = (4 == e || 5 == e || 6 == e) && r.slots < 3 ? 3 : r.slots, r.slots = 0 != g[3] ? Math.min(r.slots, g[3]) : r.slots, r.slots = 9 == e ? r.width / 20 : 10 == e ? r.height / 20 : r.slots, r.rotate = i(d.data("rotate"), w), r.rotate = void 0 == r.rotate || "default" == r.rotate ? 0 : 999 == r.rotate || "random" == r.rotate ? Math.round(360 * Math.random()) : r.rotate, r.rotate = !jQuery.support.transition || r.ie || r.ie9 ? 0 : r.rotate, 11 != e && (null != g[7] && t(p, r, g[7], g[5]), null != g[6] && t(l, r, g[6], g[5])), h.add(punchgs.TweenLite.set(l, {
                autoAlpha: 1
            }), 0), h.add(punchgs.TweenLite.set(p, {
                autoAlpha: 1
            }), 0);
            var y = i(d.data("easein"), w),
                x = i(d.data("easeout"), w);
            if (y = "default" === y ? g[9] || punchgs.Power2.easeInOut : y || g[9] || punchgs.Power2.easeInOut, x = "default" === x ? g[10] || punchgs.Power2.easeInOut : x || g[10] || punchgs.Power2.easeInOut, 0 == e) {
                var T = Math.ceil(r.height / r.sloth),
                    L = 0;
                l.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    L += 1, L == T && (L = 0), h.add(punchgs.TweenLite.from(t, b / 600, {
                        opacity: 0,
                        top: 0 - r.sloth,
                        left: 0 - r.slotw,
                        rotation: r.rotate,
                        force3D: "auto",
                        ease: y
                    }), (15 * e + 30 * L) / 1500)
                })
            }
            if (1 == e) {
                var _, k = 0;
                l.find(".slotslide").each(function(e) {
                    var t = jQuery(this),
                        a = Math.random() * b + 300,
                        i = 500 * Math.random() + 200;
                    a + i > _ && (_ = i + i, k = e), h.add(punchgs.TweenLite.from(t, a / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: r.rotate,
                        ease: y
                    }), i / 1e3)
                })
            }
            if (2 == e) {
                var j = new punchgs.TimelineLite;
                p.find(".slotslide").each(function() {
                    var e = jQuery(this);
                    j.add(punchgs.TweenLite.to(e, b / 1e3, {
                        left: r.slotw,
                        ease: y,
                        force3D: "auto",
                        rotation: 0 - r.rotate
                    }), 0), h.add(j, 0)
                }), l.find(".slotslide").each(function() {
                    var e = jQuery(this);
                    j.add(punchgs.TweenLite.from(e, b / 1e3, {
                        left: 0 - r.slotw,
                        ease: y,
                        force3D: "auto",
                        rotation: r.rotate
                    }), 0), h.add(j, 0)
                })
            }
            if (3 == e) {
                var j = new punchgs.TimelineLite;
                p.find(".slotslide").each(function() {
                    var e = jQuery(this);
                    j.add(punchgs.TweenLite.to(e, b / 1e3, {
                        top: r.sloth,
                        ease: y,
                        rotation: r.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), h.add(j, 0)
                }), l.find(".slotslide").each(function() {
                    var e = jQuery(this);
                    j.add(punchgs.TweenLite.from(e, b / 1e3, {
                        top: 0 - r.sloth,
                        rotation: r.rotate,
                        ease: x,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), h.add(j, 0)
                })
            }
            if (4 == e || 5 == e) {
                setTimeout(function() {
                    p.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var z = b / 1e3,
                    j = new punchgs.TimelineLite;
                p.find(".slotslide").each(function(t) {
                    var a = jQuery(this),
                        i = t * z / r.slots;
                    5 == e && (i = (r.slots - t - 1) * z / r.slots / 1.5), j.add(punchgs.TweenLite.to(a, 3 * z, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + r.height,
                        opacity: .5,
                        rotation: r.rotate,
                        ease: y,
                        delay: i
                    }), 0), h.add(j, 0)
                }), l.find(".slotslide").each(function(t) {
                    var a = jQuery(this),
                        i = t * z / r.slots;
                    5 == e && (i = (r.slots - t - 1) * z / r.slots / 1.5), j.add(punchgs.TweenLite.from(a, 3 * z, {
                        top: 0 - r.height,
                        opacity: .5,
                        rotation: r.rotate,
                        force3D: "auto",
                        ease: punchgs.eo,
                        delay: i
                    }), 0), h.add(j, 0)
                })
            }
            if (6 == e) {
                r.slots < 2 && (r.slots = 2), r.slots % 2 && (r.slots = r.slots + 1);
                var j = new punchgs.TimelineLite;
                setTimeout(function() {
                    p.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), p.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    if (e + 1 < r.slots / 2) var a = 90 * (e + 2);
                    else var a = 90 * (2 + r.slots - e);
                    j.add(punchgs.TweenLite.to(t, (b + a) / 1e3, {
                        top: 0 + r.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: r.rotate,
                        ease: y
                    }), 0), h.add(j, 0)
                }), l.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    if (e + 1 < r.slots / 2) var a = 90 * (e + 2);
                    else var a = 90 * (2 + r.slots - e);
                    j.add(punchgs.TweenLite.from(t, (b + a) / 1e3, {
                        top: 0 - r.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: r.rotate,
                        ease: x
                    }), 0), h.add(j, 0)
                })
            }
            if (7 == e) {
                b = 2 * b, b > r.delay && (b = r.delay);
                var j = new punchgs.TimelineLite;
                setTimeout(function() {
                    p.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), p.find(".slotslide").each(function() {
                    var e = jQuery(this).find("div");
                    j.add(punchgs.TweenLite.to(e, b / 1e3, {
                        left: 0 - r.slotw / 2 + "px",
                        top: 0 - r.height / 2 + "px",
                        width: 2 * r.slotw + "px",
                        height: 2 * r.height + "px",
                        opacity: 0,
                        rotation: r.rotate,
                        force3D: "auto",
                        ease: y
                    }), 0), h.add(j, 0)
                }), l.find(".slotslide").each(function(e) {
                    var t = jQuery(this).find("div");
                    j.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - e * r.slotw + "px",
                        ease: x,
                        force3D: "auto",
                        top: "0px",
                        width: r.width,
                        height: r.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), h.add(j, 0)
                })
            }
            if (8 == e) {
                b = 3 * b, b > r.delay && (b = r.delay);
                var j = new punchgs.TimelineLite;
                p.find(".slotslide").each(function() {
                    var e = jQuery(this).find("div");
                    j.add(punchgs.TweenLite.to(e, b / 1e3, {
                        left: 0 - r.width / 2 + "px",
                        top: 0 - r.sloth / 2 + "px",
                        width: 2 * r.width + "px",
                        height: 2 * r.sloth + "px",
                        force3D: "auto",
                        ease: y,
                        opacity: 0,
                        rotation: r.rotate
                    }), 0), h.add(j, 0)
                }), l.find(".slotslide").each(function(e) {
                    var t = jQuery(this).find("div");
                    j.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - e * r.sloth + "px",
                        width: l.find(".defaultimg").data("neww") + "px",
                        height: l.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        ease: x,
                        rotation: 0
                    }), 0), h.add(j, 0)
                })
            }
            if (9 == e || 10 == e) {
                var C = 0;
                l.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    C++, h.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: y,
                        delay: 5 * e / 1e3
                    }), 0)
                })
            }
            if (11 == e || 26 == e) {
                var C = 0;
                26 == e && (b = 0), h.add(punchgs.TweenLite.fromTo(l, b / 1e3, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: y
                }), 0), h.add(punchgs.TweenLite.to(p, b / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: y
                }), 0), h.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), h.add(punchgs.TweenLite.set(p.find("defaultimg"), {
                    autoAlpha: 1
                }), 0)
            }
            if (12 == e || 13 == e || 14 == e || 15 == e) {
                b = b, b > r.delay && (b = r.delay), setTimeout(function() {
                    punchgs.TweenLite.set(p.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var I = r.width,
                    O = r.height,
                    Q = l.find(".slotslide"),
                    M = 0,
                    S = 0,
                    P = 1,
                    W = 1,
                    D = 1,
                    A = b / 1e3,
                    H = A;
                ("fullwidth" == r.sliderLayout || "fullscreen" == r.sliderLayout) && (I = Q.width(), O = Q.height()), 12 == e ? M = I : 15 == e ? M = 0 - I : 13 == e ? S = O : 14 == e && (S = 0 - O), 1 == m && (P = 0), 2 == m && (P = 0), 3 == m && (A = b / 1300), (4 == m || 5 == m) && (W = .6), 6 == m && (W = 1.4), (5 == m || 6 == m) && (D = 1.4, P = 0, I = 0, O = 0, M = 0, S = 0), 6 == m && (D = .6), 7 == m && (I = 0, O = 0);
                var R = l.find(".slotslide"),
                    Y = p.find(".slotslide");
                if (h.add(punchgs.TweenLite.set(s, {
                        zIndex: 15
                    }), 0), h.add(punchgs.TweenLite.set(d, {
                        zIndex: 20
                    }), 0), 8 == m ? (h.add(punchgs.TweenLite.set(s, {
                        zIndex: 20
                    }), 0), h.add(punchgs.TweenLite.set(d, {
                        zIndex: 15
                    }), 0), h.add(punchgs.TweenLite.set(R, {
                        left: 0,
                        top: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        ease: y,
                        force3D: "auto"
                    }), 0)) : h.add(punchgs.TweenLite.from(R, A, {
                        left: M,
                        top: S,
                        scale: D,
                        opacity: P,
                        rotation: r.rotate,
                        ease: y,
                        force3D: "auto"
                    }), 0), (4 == m || 5 == m) && (I = 0, O = 0), 1 != m) switch (e) {
                    case 12:
                        h.add(punchgs.TweenLite.to(Y, H, {
                            left: 0 - I + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: P,
                            rotation: r.rotate,
                            ease: x
                        }), 0);
                        break;
                    case 15:
                        h.add(punchgs.TweenLite.to(Y, H, {
                            left: I + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: P,
                            rotation: r.rotate,
                            ease: x
                        }), 0);
                        break;
                    case 13:
                        h.add(punchgs.TweenLite.to(Y, H, {
                            top: 0 - O + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: P,
                            rotation: r.rotate,
                            ease: x
                        }), 0);
                        break;
                    case 14:
                        h.add(punchgs.TweenLite.to(Y, H, {
                            top: O + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: P,
                            rotation: r.rotate,
                            ease: x
                        }), 0)
                }
            }
            if (16 == e) {
                var j = new punchgs.TimelineLite;
                h.add(punchgs.TweenLite.set(s, {
                    position: "absolute",
                    "z-index": 20
                }), 0), h.add(punchgs.TweenLite.set(d, {
                    position: "absolute",
                    "z-index": 15
                }), 0), s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), s.find(".tp-half-one").clone(!0).appendTo(s).addClass("tp-half-two"), s.find(".tp-half-two").removeClass("tp-half-one");
                var I = r.width,
                    O = r.height;
                "on" == r.autoHeight && (O = n.height()), s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + I + "px;height:" + O + 'px;"></div>'), s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + I + "px;height:" + O + 'px;"></div>'), s.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), h.add(punchgs.TweenLite.set(s.find(".tp-half-two"), {
                    width: I,
                    height: O,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: O / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), h.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                    width: I,
                    height: O / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",

                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var X = (s.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    V = Math.round(20 * Math.random() - 10),
                    F = Math.round(20 * Math.random() - 10),
                    B = .4 * Math.random() - .2,
                    N = .4 * Math.random() - .2,
                    E = 1 * Math.random() + 1,
                    Z = 1 * Math.random() + 1,
                    $ = .3 * Math.random() + .3;
                h.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), h.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"), b / 800, {
                    width: I,
                    height: O / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: E,
                    rotation: X,
                    y: 0 - O - O / 4,
                    autoAlpha: 0,
                    ease: y
                }), 0), h.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"), b / 800, {
                    width: I,
                    height: O,
                    overflow: "hidden",
                    position: "absolute",
                    top: O / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: Z,
                    rotation: V,
                    y: O + O / 4,
                    ease: y,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(s, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(d, {
                            position: "absolute",
                            "z-index": 20
                        }), s.find(".tp-half-one").length > 0 && (s.find(".tp-half-one .defaultimg").unwrap(), s.find(".tp-half-one .slotholder").unwrap()), s.find(".tp-half-two").remove()
                    }
                }), 0), j.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != s.html() && h.add(punchgs.TweenLite.fromTo(d, (b - 200) / 1e3, {
                    scale: $,
                    x: r.width / 4 * B,
                    y: O / 4 * N,
                    rotation: F,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: x
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), h.add(j, 0)
            }
            if (17 == e && l.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    h.add(punchgs.TweenLite.fromTo(t, b / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: y,
                        delay: .06 * e
                    }), 0)
                }), 18 == e && l.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    h.add(punchgs.TweenLite.fromTo(t, b / 500, {
                        autoAlpha: 0,
                        rotationY: 110,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: y,
                        delay: .06 * e
                    }), 0)
                }), 19 == e || 22 == e) {
                var j = new punchgs.TimelineLite;
                h.add(punchgs.TweenLite.set(s, {
                    zIndex: 20
                }), 0), h.add(punchgs.TweenLite.set(d, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    p.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var q = 90,
                    P = 1,
                    U = "center center ";
                1 == f && (q = -90), 19 == e ? (U = U + "-" + r.height / 2, P = 0) : U += r.height / 2, punchgs.TweenLite.set(n, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), l.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    j.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: r.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationX: q
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: 50 * e / 1e3,
                        ease: y
                    }), 0), j.add(punchgs.TweenLite.to(t, .1, {
                        autoAlpha: 1,
                        delay: 50 * e / 1e3
                    }), 0), h.add(j)
                }), p.find(".slotslide").each(function(e) {
                    var t = jQuery(this),
                        a = -90;
                    1 == f && (a = 90), j.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: U,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: r.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: a,
                        delay: 50 * e / 1e3,
                        force3D: "auto",
                        ease: x
                    }), 0), h.add(j)
                }), h.add(punchgs.TweenLite.set(s, {
                    zIndex: 18
                }), 0)
            }
            if (20 == e) {
                if (setTimeout(function() {

                        p.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), 1 == f) var G = -r.width,
                    q = 80,
                    U = "20% 70% -" + r.height / 2;
                else var G = r.width,
                    q = -80,
                    U = "80% 70% -" + r.height / 2;
                l.find(".slotslide").each(function(e) {
                    var t = jQuery(this),
                        a = 50 * e / 1e3;
                    h.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        left: G,
                        rotationX: 40,
                        z: -600,
                        opacity: P,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: U,
                        transformStyle: "flat",
                        rotationY: q
                    }, {
                        left: 0,
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: a,
                        ease: y
                    }), 0)
                }), p.find(".slotslide").each(function(e) {
                    var t = jQuery(this),
                        a = 50 * e / 1e3;
                    if (a = e > 0 ? a + b / 9e3 : 0, 1 != f) var i = -r.width / 2,
                        o = 30,
                        n = "20% 70% -" + r.height / 2;
                    else var i = r.width / 2,
                        o = -30,
                        n = "80% 70% -" + r.height / 2;
                    x = punchgs.Power2.easeInOut, h.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: n,
                        transformStyle: "flat",
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 20,
                        top: 0,
                        z: -600,
                        left: i,
                        force3D: "auto",
                        rotationY: o,
                        delay: a,
                        ease: x
                    }), 0)
                })
            }
            if (21 == e || 25 == e) {
                setTimeout(function() {
                    p.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var q = 90,
                    G = -r.width,
                    K = -q;
                if (1 == f)
                    if (25 == e) {
                        var U = "center top 0";
                        q = r.rotate
                    } else {
                        var U = "left center 0";
                        K = r.rotate
                    }
                else if (G = r.width, q = -90, 25 == e) {
                    var U = "center bottom 0";
                    K = -q, q = r.rotate
                } else {
                    var U = "right center 0";
                    K = r.rotate
                }
                l.find(".slotslide").each(function() {
                    var e = jQuery(this),
                        t = b / 1.5 / 3;
                    h.add(punchgs.TweenLite.fromTo(e, 2 * t / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: K,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: U,
                        rotationY: q
                    }, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        scale: 1,
                        rotationY: 0,
                        force3D: "auto",
                        delay: t / 1e3,
                        ease: y
                    }), 0)
                }), 1 != f ? (G = -r.width, q = 90, 25 == e ? (U = "center top 0", K = -q, q = r.rotate) : (U = "left center 0", K = r.rotate)) : (G = r.width, q = -90, 25 == e ? (U = "center bottom 0", K = -q, q = r.rotate) : (U = "right center 0", K = r.rotate)), p.find(".slotslide").each(function() {
                    var e = jQuery(this);
                    h.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: U,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: K,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: q,
                        ease: x
                    }), 0)
                })
            }
            if (23 == e || 24 == e) {
                setTimeout(function() {
                    p.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var q = -90,
                    P = 1,
                    J = 0;
                if (1 == f && (q = 90), 23 == e) {
                    var U = "center center -" + r.width / 2;
                    P = 0
                } else var U = "center center " + r.width / 2;
                punchgs.TweenLite.set(n, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), l.find(".slotslide").each(function(e) {
                    var t = jQuery(this);
                    h.add(punchgs.TweenLite.fromTo(t, b / 1e3, {
                        left: J,
                        rotationX: r.rotate,
                        force3D: "auto",
                        opacity: P,
                        top: 0,
                        scale: 1,
                        transformPerspective: 1200,
                        transformOrigin: U,
                        rotationY: q
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * e / 500,
                        ease: y
                    }), 0)
                }), q = 90, 1 == f && (q = -90), p.find(".slotslide").each(function(t) {
                    var a = jQuery(this);
                    h.add(punchgs.TweenLite.fromTo(a, b / 1e3, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformStyle: "flat",
                        transformPerspective: 1200,
                        transformOrigin: U,
                        rotationY: 0
                    }, {
                        left: J,
                        rotationX: r.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: q,
                        delay: 50 * t / 500,
                        ease: x
                    }), 0), 23 == e && h.add(punchgs.TweenLite.fromTo(a, b / 2e3, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        delay: 50 * t / 500 + b / 3e3,
                        ease: x
                    }), 0)
                })
            }
            return h
        }
}(jQuery), ! function() {
    function e(e) {
        return void 0 == e ? -1 : jQuery.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
    }
    var t = jQuery.fn.revolution,
        a = t.is_mobile();
    jQuery.extend(!0, t, {
        resetVideo: function(t) {
            switch (t.data("videotype")) {
                case "youtube":
                    t.data("player");
                    try {
                        if ("on" == t.data("forcerewind") && !a) {
                            var i = e(t.data("videostartat"));
                            i = -1 == i ? 0 : i, t.data("player").seekTo(i), t.data("player").pauseVideo()
                        }
                    } catch (o) {}
                    0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "vimeo":
                    var n = $f(t.find("iframe").attr("id"));
                    try {
                        if ("on" == t.data("forcerewind") && !a) {
                            var i = e(t.data("videostartat"));
                            i = -1 == i ? 0 : i, n.api("seekTo", i), n.api("pause")
                        }
                    } catch (o) {}
                    0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "html5":
                    if (a && 1 == t.data("disablevideoonmobile")) return !1;
                    var r = t.find("video"),
                        d = r[0];
                    if (punchgs.TweenLite.to(r, .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        }), "on" == t.data("forcerewind") && !t.hasClass("videoisplaying")) try {
                        var i = e(t.data("videostartat"));
                        d.currentTime = -1 == i ? 0 : i
                    } catch (o) {}
                    "mute" == t.data("volume") && (d.muted = !0)
            }
        },
        stopVideo: function(e) {
            switch (e.data("videotype")) {
                case "youtube":
                    try {
                        var t = e.data("player");
                        t.pauseVideo()
                    } catch (a) {}
                    break;
                case "vimeo":
                    try {
                        var i = $f(e.find("iframe").attr("id"));
                        i.api("pause")
                    } catch (a) {}
                    break;
                case "html5":
                    var o = e.find("video"),
                        n = o[0];
                    n.pause()
            }
        },
        playVideo: function(o, r) {
            switch (clearTimeout(o.data("videoplaywait")), o.data("videotype")) {
                case "youtube":
                    if (0 == o.find("iframe").length) o.append(o.data("videomarkup")), n(o, r, !0);
                    else if (void 0 != o.data("player").playVideo) {
                        o.data("player").playVideo();
                        var d = e(o.data("videostartat")); - 1 != d && o.data("player").seekTo(d)
                    } else o.data("videoplaywait", setTimeout(function() {
                        t.playVideo(o, r)
                    }, 50));
                    break;
                case "vimeo":
                    if (0 == o.find("iframe").length) o.append(o.data("videomarkup")), n(o, r, !0);
                    else if (o.hasClass("rs-apiready")) {
                        var s = o.find("iframe").attr("id"),
                            l = $f(s);
                        void 0 == l.api("play") ? o.data("videoplaywait", setTimeout(function() {
                            t.playVideo(o, r)
                        }, 50)) : setTimeout(function() {
                            l.api("play");
                            var t = e(o.data("videostartat")); - 1 != t && l.api("seekTo", t)
                        }, 510)
                    } else o.data("videoplaywait", setTimeout(function() {
                        t.playVideo(o, r)
                    }, 50));
                    break;
                case "html5":
                    if (a && 1 == o.data("disablevideoonmobile")) return !1;
                    var p = o.find("video"),
                        h = p[0],
                        c = p.parent();
                    if (1 != c.data("metaloaded")) i(h, "loadedmetadata", function(a) {
                        t.resetVideo(a, r), h.play();
                        var i = e(a.data("videostartat")); - 1 != i && (h.currentTime = i)
                    }(o));
                    else {
                        h.play();
                        var d = e(o.data("videostartat")); - 1 != d && (h.currentTime = d)
                    }
            }
        },
        isVideoPlaying: function(e, t) {
            var a = !1;
            return void 0 != t.playingvideos && jQuery.each(t.playingvideos, function(t, i) {
                e.attr("id") == i.attr("id") && (a = !0)
            }), a
        },
        prepareCoveredVideo: function(e, t, a) {
            var i = a.find("iframe, video"),
                o = e.split(":")[0],
                n = e.split(":")[1],
                r = t.width / t.height,
                d = o / n,
                s = r / d * 100,
                l = d / r * 100;
            r > d ? punchgs.TweenLite.to(i, .001, {
                height: s + "%",
                width: "100%",
                top: -(s - 100) / 2 + "%",
                left: "0px",
                position: "absolute"
            }) : punchgs.TweenLite.to(i, .001, {
                width: l + "%",
                height: "100%",
                left: -(l - 100) / 2 + "%",
                top: "0px",
                position: "absolute"
            })
        },
        checkVideoApis: function(e, t, a) {
            var i = "https:" === location.protocol ? "https" : "http";
            if ((void 0 != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t.youtubeapineeded = !0), (void 0 != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == a.addedyt) {
                a.addedyt = 1;
                var o = document.createElement("script");
                o.src = "https://www.youtube.com/iframe_api";
                var n = document.getElementsByTagName("script")[0],
                    r = !0;
                jQuery("head").find("*").each(function() {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (r = !1)
                }), r && n.parentNode.insertBefore(o, n)
            }
            if ((void 0 != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t.vimeoapineeded = !0), (void 0 != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == a.addedvim) {
                a.addedvim = 1;
                var d = document.createElement("script"),
                    n = document.getElementsByTagName("script")[0],
                    r = !0;
                d.src = i + "://f.vimeocdn.com/js/froogaloop2.min.js", jQuery("head").find("*").each(function() {
                    jQuery(this).attr("src") == i + "://a.vimeocdn.com/js/froogaloop2.min.js" && (r = !1)
                }), r && n.parentNode.insertBefore(d, n)
            }
            return a
        },
        manageVideoLayer: function(o, d) {
            var s = o.data("videoattributes"),
                l = o.data("ytid"),
                p = o.data("vimeoid"),
                h = o.data("videpreload"),
                c = o.data("videomp4"),
                u = o.data("videowebm"),
                f = o.data("videoogv"),
                v = o.data("videocontrols"),
                g = "http",
                m = "loop" == o.data("videoloop") ? "loop" : "loopandnoslidestop" == o.data("videoloop") ? "loop" : "",
                w = void 0 != c || void 0 != u ? "html5" : void 0 != l && String(l).length > 1 ? "youtube" : void 0 != p && String(p).length > 1 ? "vimeo" : "none",
                b = "html5" == w && 0 == o.find("video").length ? "html5" : "youtube" == w && 0 == o.find("iframe").length ? "youtube" : "vimeo" == w && 0 == o.find("iframe").length ? "vimeo" : "none";
            switch (o.data("videotype", w), b) {
                case "html5":
                    "controls" != v && (v = "");
                    var y = '<video style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" ' + m + ' preload="' + h + '"';
                    void 0 != u && "firefox" == t.get_browser().toLowerCase() && (y = y + '<source src="' + u + '" type="video/webm" />'), void 0 != c && (y = y + '<source src="' + c + '" type="video/mp4" />'), void 0 != f && (y = y + '<source src="' + f + '" type="video/ogg" />'), y += "</video>", "controls" == v && (y += '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>'), o.data("videomarkup", y), o.append(y), (a && 1 == o.data("disablevideoonmobile") || t.isIE(8)) && o.find("video").remove(), o.find("video").each(function() {
                        var e = this,
                            a = jQuery(this);
                        a.parent().hasClass("html5vid") || a.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');
                        var n = a.parent();
                        1 != n.data("metaloaded") && i(e, "loadedmetadata", function(e) {
                            r(e, d), t.resetVideo(e, d)
                        }(o))
                    });
                    break;
                case "youtube":
                    g = "http", "https:" === location.protocol && (g = "https"), "none" == v && (s = s.replace("controls=1", "controls=0"), -1 == s.toLowerCase().indexOf("controls") && (s += "&controls=0"));
                    var x = e(o.data("videostartat")),
                        T = e(o.data("videoendat")); - 1 != x && (s = s + "&start=" + x), -1 != T && (s = s + "&end=" + T), o.data("videomarkup", '<iframe style="visible:hidden" src="' + g + "://www.youtube.com/embed/" + l + "?" + s + '" width="100%" height="100%" style="width:100%;height:100%"></iframe>');
                    break;
                case "vimeo":
                    "https:" === location.protocol && (g = "https"), o.data("videomarkup", '<iframe style="visible:hidden" src="' + g + "://player.vimeo.com/video/" + p + "?" + s + '" width="100%" height="100%" style="100%;height:100%"></iframe>')
            }
            void 0 != o.data("videoposter") && o.data("videoposter").length > 2 ? (0 == o.find(".tp-videoposter").length && o.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url(' + o.data("videoposter") + '); background-size:cover;background-position:center center;"></div>'), 0 == o.find("iframe").length && o.find(".tp-videoposter").click(function() {
                if (t.playVideo(o, d), a) {
                    if (1 == o.data("disablevideoonmobile")) return !1;
                    punchgs.TweenLite.to(o.find(".tp-videoposter"), .3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenLite.to(o.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    })
                }
            })) : 0 != o.find("iframe").length || "youtube" != w && "vimeo" != w || (o.append(o.data("videomarkup")), n(o, d, !1)), "none" != o.data("dottedoverlay") && void 0 != o.data("dottedoverlay") && 1 != o.find(".tp-dottedoverlay").length && o.append('<div class="tp-dottedoverlay ' + o.data("dottedoverlay") + '"></div>'), o.addClass("HasListener"), 1 == o.data("bgvideo") && punchgs.TweenLite.set(o.find("video, iframe"), {
                autoAlpha: 0
            })
        }
    });
    var i = function(e, t, a) {
            e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent(t, a, !1)
        },
        o = function(e, t, a) {
            var i = {};
            return i.video = e, i.videotype = t, i.settings = a, i
        },
        n = function(i, n, r) {
            var l = i.find("iframe"),
                p = "iframe" + Math.round(1e5 * Math.random() + 1),
                h = i.data("videoloop"),
                c = "loopandnoslidestop" != h;
            if (h = "loop" == h || "loopandnoslidestop" == h, 1 == i.data("forcecover")) {
                i.removeClass("fullscreenvideo").addClass("coverscreenvideo");
                var u = i.data("aspectratio");
                void 0 != u && u.split(":").length > 1 && t.prepareCoveredVideo(u, n, i)
            }
            if (l.attr("id", p), r && i.data("startvideonow", !0), 1 !== i.data("videolistenerexist")) switch (i.data("videotype")) {
                case "youtube":
                    var f = new YT.Player(p, {
                        events: {
                            onStateChange: function(t) {
                                var a = t.target.getVideoEmbedCode(),
                                    i = jQuery("#" + a.split('id="')[1].split('"')[0]),
                                    r = i.closest(".tp-simpleresponsive"),
                                    l = i.parent(),
                                    p = i.parent().data("player");
                                if (t.data == YT.PlayerState.PLAYING) punchgs.TweenLite.to(l.find(".tp-videoposter"), .3, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(l.find("iframe"), .3, {
                                    autoAlpha: 1,
                                    display: "block",
                                    ease: punchgs.Power3.easeInOut
                                }), "mute" == l.data("volume") ? p.mute() : (p.unMute(), p.setVolume(parseInt(l.data("volume"), 0) || 75)), n.videoplaying = !0, d(l, n), r.trigger("stoptimer"), n.c.trigger("revolution.slide.onvideoplay", o(p, "youtube", l.data()));
                                else {
                                    if (0 == t.data && h) {
                                        p.playVideo();
                                        var c = e(l.data("videostartat")); - 1 != c && p.seekTo(c)
                                    }(0 == t.data || 2 == t.data) && "on" == l.data("showcoveronpause") && l.find(".tp-videoposter").length > 0 && (punchgs.TweenLite.to(l.find(".tp-videoposter"), .3, {
                                        autoAlpha: 1,
                                        force3D: "auto",
                                        ease: punchgs.Power3.easeInOut
                                    }), punchgs.TweenLite.to(l.find("iframe"), .3, {
                                        autoAlpha: 0,
                                        ease: punchgs.Power3.easeInOut
                                    })), -1 != t.data && 3 != t.data && (n.videoplaying = !1, s(l, n), r.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(p, "youtube", l.data()))), 0 == t.data && 1 == l.data("nextslideatend") ? (n.c.revnext(), s(l, n)) : (s(l, n), n.videoplaying = !1, r.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(p, "youtube", l.data())))
                                }
                            },
                            onReady: function(t) {
                                var i = t.target.getVideoEmbedCode(),
                                    o = jQuery("#" + i.split('id="')[1].split('"')[0]),
                                    n = o.parent(),
                                    r = n.data("videorate");
                                if (n.data("videostart"), n.addClass("rs-apiready"), void 0 != r && t.target.setPlaybackRate(parseFloat(r)), n.find(".tp-videoposter").unbind("click"), n.find(".tp-videoposter").click(function() {
                                        a || f.playVideo()
                                    }), n.data("startvideonow")) {
                                    n.data("player").playVideo();
                                    var d = e(n.data("videostartat")); - 1 != d && n.data("player").seekTo(d)
                                }
                                n.data("videolistenerexist", 1)
                            }
                        }
                    });
                    i.data("player", f);
                    break;
                case "vimeo":
                    for (var v, g = l.attr("src"), m = {}, w = g, b = /([^&=]+)=([^&]*)/g; v = b.exec(w);) m[decodeURIComponent(v[1])] = decodeURIComponent(v[2]);
                    g = void 0 != m.player_id ? g.replace(m.player_id, p) : g + "&player_id=" + p;
                    try {
                        g = g.replace("api=0", "api=1")
                    } catch (y) {}
                    g += "&api=1", l.attr("src", g);
                    var f = i.find("iframe")[0],
                        x = (jQuery("#" + p), $f(p));
                    x.addEvent("ready", function() {
                        if (i.addClass("rs-apiready"), x.addEvent("play", function() {
                                i.data("nextslidecalled", 0), punchgs.TweenLite.to(i.find(".tp-videoposter"), .3, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(i.find("iframe"), .3, {
                                    autoAlpha: 1,
                                    display: "block",
                                    ease: punchgs.Power3.easeInOut
                                }), n.c.trigger("revolution.slide.onvideoplay", o(x, "vimeo", i.data())), n.videoplaying = !0, d(i, n), c && n.c.trigger("stoptimer"), "mute" == i.data("volume") ? x.api("setVolume", "0") : x.api("setVolume", parseInt(i.data("volume"), 0) / 100 || .75)
                            }), x.addEvent("playProgress", function(t) {
                                var a = e(i.data("videoendat"));
                                if (0 != a && Math.abs(a - t.seconds) < .3 && a > t.seconds && 1 != i.data("nextslidecalled"))
                                    if (h) {
                                        x.api("play");
                                        var o = e(i.data("videostartat")); - 1 != o && x.api("seekTo", o)
                                    } else 1 == i.data("nextslideatend") && (i.data("nextslidecalled", 1), n.c.revnext()), x.api("pause")
                            }), x.addEvent("finish", function() {
                                s(i, n), n.videoplaying = !1, n.c.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(x, "vimeo", i.data())), 1 == i.data("nextslideatend") && n.c.revnext()
                            }), x.addEvent("pause", function() {
                                i.find(".tp-videoposter").length > 0 && "on" == i.data("showcoveronpause") && (punchgs.TweenLite.to(i.find(".tp-videoposter"), .3, {
                                    autoAlpha: 1,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(i.find("iframe"), .3, {
                                    autoAlpha: 0,
                                    ease: punchgs.Power3.easeInOut
                                })), n.videoplaying = !1, s(i, n), n.c.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(x, "vimeo", i.data()))
                            }), i.find(".tp-videoposter").unbind("click"), i.find(".tp-videoposter").click(function() {
                                return a ? void 0 : (x.api("play"), !1)
                            }), i.data("startvideonow")) {
                            x.api("play");
                            var t = e(i.data("videostartat")); - 1 != t && x.api("seekTo", t)
                        }
                        i.data("videolistenerexist", 1)
                    })
            } else {
                var T = e(i.data("videostartat"));
                switch (i.data("videotype")) {
                    case "youtube":
                        r && (i.data("player").playVideo(), -1 != T && i.data("player").seekTo());
                        break;
                    case "vimeo":
                        if (r) {
                            var x = $f(i.find("iframe").attr("id"));
                            x.api("play"), -1 != T && x.api("seekTo", T)
                        }
                }
            }
        },
        r = function(n, r) {
            if (a && 1 == n.data("disablevideoonmobile")) return !1;
            var l = n.find("video"),
                p = l[0],
                h = l.parent(),
                c = n.data("videoloop"),
                u = "loopandnoslidestop" != c;
            if (c = "loop" == c || "loopandnoslidestop" == c, h.data("metaloaded", 1), void 0 == l.attr("control") && (0 != n.find(".tp-video-play-button").length || a || n.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), n.find("video, .tp-poster, .tp-video-play-button").click(function() {
                    n.hasClass("videoisplaying") ? p.pause() : p.play()
                })), 1 == n.data("forcecover") || n.hasClass("fullscreenvideo"))
                if (1 == n.data("forcecover")) {
                    h.addClass("fullcoveredvideo");
                    var f = n.data("aspectratio");
                    t.prepareCoveredVideo(f, r, n)
                } else h.addClass("fullscreenvideo");
            var v = n.find(".tp-vid-play-pause")[0],
                g = n.find(".tp-vid-mute")[0],
                m = n.find(".tp-vid-full-screen")[0],
                w = n.find(".tp-seek-bar")[0],
                b = n.find(".tp-volume-bar")[0];
            void 0 != v && (i(v, "click", function() {
                1 == p.paused ? p.play() : p.pause()
            }), i(g, "click", function() {
                0 == p.muted ? (p.muted = !0, g.innerHTML = "Unmute") : (p.muted = !1, g.innerHTML = "Mute")
            }), i(m, "click", function() {
                p.requestFullscreen ? p.requestFullscreen() : p.mozRequestFullScreen ? p.mozRequestFullScreen() : p.webkitRequestFullscreen && p.webkitRequestFullscreen()
            }), i(w, "change", function() {
                var e = p.duration * (w.value / 100);
                p.currentTime = e
            }), i(p, "timeupdate", function() {
                var t = 100 / p.duration * p.currentTime,
                    a = e(n.data("videoendat")),
                    i = p.currentTime;
                if (w.value = t, 0 != a && Math.abs(a - i) <= .3 && a > i && 1 != n.data("nextslidecalled"))
                    if (c) {
                        p.play();
                        var o = e(n.data("videostartat")); - 1 != o && (p.currentTime = o)
                    } else 1 == n.data("nextslideatend") && (n.data("nextslidecalled", 1), r.c.revnext()), p.pause()
            }), i(w, "mousedown", function() {
                n.addClass("seekbardragged"), p.pause()
            }), i(w, "mouseup", function() {
                n.removeClass("seekbardragged"), p.play()
            }), i(b, "change", function() {
                p.volume = b.value
            })), i(p, "play", function() {
                n.data("nextslidecalled", 0), "mute" == n.data("volume") && (p.muted = !0), n.addClass("videoisplaying"), d(n, r), u ? (r.videoplaying = !0, r.c.trigger("stoptimer"), r.c.trigger("revolution.slide.onvideoplay", o(p, "html5", n.data()))) : (r.videoplaying = !1, r.c.trigger("starttimer"), r.c.trigger("revolution.slide.onvideostop", o(p, "html5", n.data()))), punchgs.TweenLite.to(n.find(".tp-videoposter"), .3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(n.find("video"), .3, {
                    autoAlpha: 1,
                    display: "block",
                    ease: punchgs.Power3.easeInOut
                });
                var e = n.find(".tp-vid-play-pause")[0],
                    t = n.find(".tp-vid-mute")[0];
                void 0 != e && (e.innerHTML = "Pause"), void 0 != t && p.muted && (t.innerHTML = "Unmute")
            }), i(p, "pause", function() {
                n.find(".tp-videoposter").length > 0 && "on" == n.data("showcoveronpause") && !n.hasClass("seekbardragged") && (punchgs.TweenLite.to(n.find(".tp-videoposter"), .3, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(n.find("video"), .3, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut
                })), n.removeClass("videoisplaying"), r.videoplaying = !1, s(n, r), r.c.trigger("starttimer"), r.c.trigger("revolution.slide.onvideostop", o(p, "html5", n.data()));
                var e = n.find(".tp-vid-play-pause")[0];
                void 0 != e && (e.innerHTML = "Play")
            }), i(p, "ended", function() {
                s(n, r), r.videoplaying = !1, s(n, r), r.c.trigger("starttimer"), r.c.trigger("revolution.slide.onvideostop", o(p, "html5", n.data())), 1 == n.data("nextslideatend") && r.c.revnext(), n.removeClass("videoisplaying")
            })
        },
        d = function(e, a) {
            void 0 == a.playingvideos && (a.playingvideos = new Array), e.data("stopallvideos") && void 0 != a.playingvideos && a.playingvideos.length > 0 && (a.lastplayedvideos = jQuery.extend(!0, [], a.playingvideos), jQuery.each(a.playingvideos, function(e, i) {
                t.stopVideo(i, a)
            })), a.playingvideos.push(e)
        },
        s = function(e, t) {
            void 0 != t.playingvideos && t.playingvideos.splice(jQuery.inArray(e, t.playingvideos), 1)
        }
}(jQuery);

/********************************************
 * REVOLUTION 5.0 EXTENSION - ACTIONS
 * @version: 1.0.2 (18.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/

(function($) {

    var _R = jQuery.fn.revolution;

    ///////////////////////////////////////////
    // 	EXTENDED FUNCTIONS AVAILABLE GLOBAL  //
    ///////////////////////////////////////////
    jQuery.extend(true, _R, {
        checkActions: function(_nc, opt, as) {
            checkActions_intern(_nc, opt, as);
        }
    });

    //////////////////////////////////////////
    //	-	INITIALISATION OF ACTIONS 	-	//
    //////////////////////////////////////////
    var checkActions_intern = function(_nc, opt, as) {
        if (as)
            jQuery.each(as, function(i, a) {
                a.delay = parseInt(a.delay, 0) / 1000;
                _nc.addClass("noSwipe")
                _nc.on(a.event, function() {
                    var tnc = jQuery("#" + a.layer);
                    if (a.action == "stoplayer" || a.action == "togglelayer" || a.action == "startlayer") {
                        if (tnc.length > 0)
                            if (a.action == "startlayer" || (a.action == "togglelayer" && tnc.data('animdirection') != "in")) {
                                tnc.data('animdirection', "in");
                                var otl = tnc.data('timeline_out'),
                                    base_offsetx = opt.sliderType === "carousel" ? 0 : opt.width / 2 - (opt.gridwidth[opt.curWinRange] * opt.bw) / 2,
                                    base_offsety = 0;
                                if (otl != undefined) otl.pause(0).kill();
                                if (_R.animateSingleCaption) _R.animateSingleCaption(tnc, opt, base_offsetx, base_offsety, 0, false, true);
                                var tl = tnc.data('timeline');
                                tnc.data('triggerstate', "on");
                                punchgs.TweenLite.delayedCall(a.delay, function() {
                                    tl.play(0);
                                }, [tl]);
                            } else

                        if (a.action == "stoplayer" || (a.action == "togglelayer" && tnc.data('animdirection') != "out")) {
                            tnc.data('animdirection', "out");
                            tnc.data('triggered', true);
                            tnc.data('triggerstate', "off");
                            if (_R.stopVideo) _R.stopVideo(tnc, opt);
                            if (_R.endMoveCaption)
                                punchgs.TweenLite.delayedCall(a.delay, _R.endMoveCaption, [tnc, null, null, opt]);
                        }
                    } else
                        punchgs.TweenLite.delayedCall(a.delay, function() {
                            switch (a.action) {
                                case "scrollbelow":

                                    _nc.addClass("tp-scrollbelowslider");
                                    _nc.data('scrolloffset', a.offset);
                                    _nc.data('scrolldelay', a.delay);
                                    var off = getOffContH(opt.fullScreenOffsetContainer) || 0,
                                        aof = parseInt(a.offset, 0) || 0;
                                    off = off - aof || 0;
                                    jQuery('body,html').animate({
                                        scrollTop: (opt.c.offset().top + (jQuery(opt.li[0]).height()) - off) + "px"
                                    }, {
                                        duration: 400
                                    });
                                    break;
                                case "callback":
                                    eval(a.callback);
                                    break;
                                case "jumptoslide":
                                    switch (a.slide.toLowerCase()) {
                                        case "+1":
                                        case "next":
                                            opt.sc_indicator = "arrow";
                                            _R.callingNewSlide(opt, opt.c, 1);
                                            break;
                                        case "previous":
                                        case "prev":
                                        case "-1":
                                            opt.sc_indicator = "arrow";
                                            _R.callingNewSlide(opt, opt.c, -1);
                                            break;
                                        default:
                                            var ts = jQuery.isNumeric(a.slide) ? parseInt(a.slide, 0) : a.slide;
                                            _R.callingNewSlide(opt, opt.c, ts);
                                            break;
                                    }
                                    break;
                                case "simplelink":
                                    window.open(a.url, a.target);
                                    break;
                                case "toggleslider":
                                    if (opt.sliderstatus == "playing")
                                        opt.c.revpause();
                                    else
                                        opt.c.revresume();
                                    break;
                                case "pauseslider":
                                    opt.c.revpause();
                                    break;
                                case "playslider":
                                    opt.c.revresume();
                                    break;
                                case "playvideo":
                                    if (tnc.length > 0)
                                        _R.playVideo(tnc, opt);
                                    break;
                                case "stopvideo":
                                    if (tnc.length > 0)
                                        if (_R.stopVideo) _R.stopVideo(tnc, opt);
                                    break;
                                case "togglevideo":
                                    if (tnc.length > 0)

                                        if (!_R.isVideoPlaying(tnc, opt))
                                            _R.playVideo(tnc, opt);
                                        else
                                    if (_R.stopVideo) _R.stopVideo(tnc, opt);
                                    break;
                                case "simulateclick":
                                    if (tnc.length > 0) tnc.click();
                                    break;
                                case "toggleclass":
                                    if (tnc.length > 0)
                                        if (!tnc.hasClass(a.classname))
                                            tnc.addClass(a.classname);
                                        else
                                            tnc.removeClass(a.classname);
                                    break;
                            }
                        }, [tnc, opt, a, _nc]);
                });
                switch (a.action) {
                    case "togglelayer":
                    case "startlayer":
                    case "playlayer":
                    case "stoplayer":
                        var tnc = jQuery("#" + a.layer);
                        if (tnc.data('start') != "bytrigger") {
                            tnc.data('triggerstate', "on");
                            tnc.data('animdirection', "in");
                        }
                        break;

                }
            })
    }


    var getOffContH = function(c) {
        if (c == undefined) return 0;
        if (c.split(',').length > 1) {
            oc = c.split(",");
            var a = 0;
            if (oc)
                jQuery.each(oc, function(index, sc) {
                    if (jQuery(sc).length > 0)
                        a = a + jQuery(sc).outerHeight(true);
                });
            return a;
        } else {
            return jQuery(c).height();
        }
        return 0;
    }

})(jQuery);