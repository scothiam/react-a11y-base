import * as e from "react";
import t, { Fragment as n, PureComponent as r, cloneElement as i, createContext as a, createElement as o, forwardRef as s, isValidElement as c, memo as l, useCallback as u, useContext as d, useEffect as f, useId as p, useImperativeHandle as m, useLayoutEffect as h, useMemo as g, useReducer as _, useRef as v, useState as y, useSyncExternalStore as b, version as x } from "react";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
import * as T from "react-dom";
import E, { createPortal as D, flushSync as O } from "react-dom";
//#region \0rolldown/runtime.js
var k = Object.create, A = Object.defineProperty, j = Object.getOwnPropertyDescriptor, M = Object.getOwnPropertyNames, N = Object.getPrototypeOf, P = Object.prototype.hasOwnProperty, F = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), I = (e, t) => {
	let n = {};
	for (var r in e) A(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || A(n, Symbol.toStringTag, { value: "Module" }), n;
}, L = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = M(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !P.call(e, s) && s !== n && A(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = j(t, s)) || r.enumerable
	});
	return e;
}, R = (e, t, n) => (n = e == null ? {} : k(N(e)), L(t || !e || !e.__esModule ? A(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), z = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
function ee(t, n) {
	let r = e.createContext(n), i = (t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ C(r.Provider, {
			value: a,
			children: n
		});
	};
	i.displayName = t + "Provider";
	function a(i) {
		let a = e.useContext(r);
		if (a) return a;
		if (n !== void 0) return n;
		throw Error(`\`${i}\` must be used within \`${t}\``);
	}
	return [i, a];
}
function B(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i), o = r.length;
		r = [...r, i];
		let s = (n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ C(c.Provider, {
				value: l,
				children: i
			});
		};
		s.displayName = n + "Provider";
		function c(r, s) {
			let c = s?.[t]?.[o] || a, l = e.useContext(c);
			if (l) return l;
			if (i !== void 0) return i;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [s, c];
	}
	let a = () => {
		let n = r.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return a.scopeName = t, [i, te(a, ...n)];
}
function te(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function ne(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function re(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = ne(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : ne(e[t], null);
			}
		};
	};
}
function V(...t) {
	return e.useCallback(re(...t), t);
}
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function ie(t) {
	let n = /* @__PURE__ */ ae(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(ce);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ C(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ C(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function ae(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = ue(r), a = le(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? re(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var oe = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function se(e) {
	let t = ({ children: e }) => /* @__PURE__ */ C(S, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = oe, t;
}
function ce(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === oe;
}
function le(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function ue(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-collection/dist/index.mjs
function de(e) {
	let n = e + "CollectionProvider", [r, i] = B(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: n, children: r } = e, i = t.useRef(null), o = t.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ C(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	};
	s.displayName = n;
	let c = e + "CollectionSlot", l = /* @__PURE__ */ ie(c), u = t.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ C(l, {
			ref: V(t, o(c, n).collectionRef),
			children: r
		});
	});
	u.displayName = c;
	let d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ ie(d), m = t.forwardRef((e, n) => {
		let { scope: r, children: i, ...a } = e, s = t.useRef(null), c = V(n, s), l = o(d, r);
		return t.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ C(p, {
			[f]: "",
			ref: c,
			children: i
		});
	});
	m.displayName = d;
	function h(n) {
		let r = o(e + "CollectionConsumer", n);
		return t.useCallback(() => {
			let e = r.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${f}]`));
			return Array.from(r.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [r.collectionRef, r.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
typeof window < "u" && window.document && window.document.createElement;
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var fe = globalThis?.document ? e.useLayoutEffect : () => {}, pe = e.useInsertionEffect || fe;
function me({ prop: t, defaultProp: n, onChange: r = () => {}, caller: i }) {
	let [a, o, s] = he({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0, l = c ? t : a;
	{
		let n = e.useRef(t !== void 0);
		e.useEffect(() => {
			let e = n.current;
			e !== c && console.warn(`${i} is changing from ${e ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), n.current = c;
		}, [c, i]);
	}
	return [l, e.useCallback((e) => {
		if (c) {
			let n = ge(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
function he({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return pe(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
function ge(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var U = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((t, n) => {
	let r = /* @__PURE__ */ ie(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ C(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function _e(e, t) {
	e && T.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
function ve(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var ye = (t) => {
	let { present: n, children: r } = t, i = be(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = V(i.ref, Se(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
};
ye.displayName = "Presence";
function be(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), [s, c] = ve(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return e.useEffect(() => {
		let e = xe(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), fe(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = xe(e);
			t ? c("MOUNT") : i === "none" || e?.display === "none" ? c("UNMOUNT") : c(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, c]), fe(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = xe(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (c("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === n && (o.current = xe(i.current));
			};
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else c("ANIMATION_END");
	}, [n, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: e.useCallback((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function xe(e) {
	return e?.animationName || "none";
}
function Se(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var Ce = e.useId || (() => void 0), we = 0;
function Te(t) {
	let [n, r] = e.useState(Ce());
	return fe(() => {
		t || r((e) => e ?? String(we++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
//#endregion
//#region node_modules/@radix-ui/react-collapsible/dist/index.mjs
var Ee = "Collapsible", [De, Oe] = B(Ee), [ke, Ae] = De(Ee), je = e.forwardRef((t, n) => {
	let { __scopeCollapsible: r, open: i, defaultOpen: a, disabled: o, onOpenChange: s, ...c } = t, [l, u] = me({
		prop: i,
		defaultProp: a ?? !1,
		onChange: s,
		caller: Ee
	});
	return /* @__PURE__ */ C(ke, {
		scope: r,
		disabled: o,
		contentId: Te(),
		open: l,
		onOpenToggle: e.useCallback(() => u((e) => !e), [u]),
		children: /* @__PURE__ */ C(U.div, {
			"data-state": Le(l),
			"data-disabled": o ? "" : void 0,
			...c,
			ref: n
		})
	});
});
je.displayName = Ee;
var Me = "CollapsibleTrigger", Ne = e.forwardRef((e, t) => {
	let { __scopeCollapsible: n, ...r } = e, i = Ae(Me, n);
	return /* @__PURE__ */ C(U.button, {
		type: "button",
		"aria-controls": i.contentId,
		"aria-expanded": i.open || !1,
		"data-state": Le(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: H(e.onClick, i.onOpenToggle)
	});
});
Ne.displayName = Me;
var Pe = "CollapsibleContent", Fe = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Ae(Pe, e.__scopeCollapsible);
	return /* @__PURE__ */ C(ye, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ C(Ie, {
			...r,
			ref: t,
			present: e
		})
	});
});
Fe.displayName = Pe;
var Ie = e.forwardRef((t, n) => {
	let { __scopeCollapsible: r, present: i, children: a, ...o } = t, s = Ae(Pe, r), [c, l] = e.useState(i), u = e.useRef(null), d = V(n, u), f = e.useRef(0), p = f.current, m = e.useRef(0), h = m.current, g = s.open || c, _ = e.useRef(g), v = e.useRef(void 0);
	return e.useEffect(() => {
		let e = requestAnimationFrame(() => _.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), fe(() => {
		let e = u.current;
		if (e) {
			v.current = v.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			f.current = t.height, m.current = t.width, _.current || (e.style.transitionDuration = v.current.transitionDuration, e.style.animationName = v.current.animationName), l(i);
		}
	}, [s.open, i]), /* @__PURE__ */ C(U.div, {
		"data-state": Le(s.open),
		"data-disabled": s.disabled ? "" : void 0,
		id: s.contentId,
		hidden: !g,
		...o,
		ref: d,
		style: {
			"--radix-collapsible-content-height": p ? `${p}px` : void 0,
			"--radix-collapsible-content-width": h ? `${h}px` : void 0,
			...t.style
		},
		children: g && a
	});
});
function Le(e) {
	return e ? "open" : "closed";
}
var Re = je, ze = Ne, Be = Fe, Ve = e.createContext(void 0);
function He(t) {
	let n = e.useContext(Ve);
	return t || n || "ltr";
}
//#endregion
//#region node_modules/@radix-ui/react-accordion/dist/index.mjs
var Ue = "Accordion", We = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
], [Ge, Ke, qe] = de(Ue), [Je, Ye] = B(Ue, [qe, Oe]), Xe = Oe(), Ze = t.forwardRef((e, t) => {
	let { type: n, ...r } = e, i = r, a = r;
	return /* @__PURE__ */ C(Ge.Provider, {
		scope: e.__scopeAccordion,
		children: n === "multiple" ? /* @__PURE__ */ C(rt, {
			...a,
			ref: t
		}) : /* @__PURE__ */ C(nt, {
			...i,
			ref: t
		})
	});
});
Ze.displayName = Ue;
var [Qe, $e] = Je(Ue), [et, tt] = Je(Ue, { collapsible: !1 }), nt = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, collapsible: o = !1, ...s } = e, [c, l] = me({
		prop: r,
		defaultProp: i ?? "",
		onChange: a,
		caller: Ue
	});
	return /* @__PURE__ */ C(Qe, {
		scope: e.__scopeAccordion,
		value: t.useMemo(() => c ? [c] : [], [c]),
		onItemOpen: l,
		onItemClose: t.useCallback(() => o && l(""), [o, l]),
		children: /* @__PURE__ */ C(et, {
			scope: e.__scopeAccordion,
			collapsible: o,
			children: /* @__PURE__ */ C(ot, {
				...s,
				ref: n
			})
		})
	});
}), rt = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, ...o } = e, [s, c] = me({
		prop: r,
		defaultProp: i ?? [],
		onChange: a,
		caller: Ue
	}), l = t.useCallback((e) => c((t = []) => [...t, e]), [c]), u = t.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c]);
	return /* @__PURE__ */ C(Qe, {
		scope: e.__scopeAccordion,
		value: s,
		onItemOpen: l,
		onItemClose: u,
		children: /* @__PURE__ */ C(et, {
			scope: e.__scopeAccordion,
			collapsible: !0,
			children: /* @__PURE__ */ C(ot, {
				...o,
				ref: n
			})
		})
	});
}), [it, at] = Je(Ue), ot = t.forwardRef((e, n) => {
	let { __scopeAccordion: r, disabled: i, dir: a, orientation: o = "vertical", ...s } = e, c = V(t.useRef(null), n), l = Ke(r), u = He(a) === "ltr", d = H(e.onKeyDown, (e) => {
		if (!We.includes(e.key)) return;
		let t = e.target, n = l().filter((e) => !e.ref.current?.disabled), r = n.findIndex((e) => e.ref.current === t), i = n.length;
		if (r === -1) return;
		e.preventDefault();
		let a = r, s = i - 1, c = () => {
			a = r + 1, a > s && (a = 0);
		}, d = () => {
			a = r - 1, a < 0 && (a = s);
		};
		switch (e.key) {
			case "Home":
				a = 0;
				break;
			case "End":
				a = s;
				break;
			case "ArrowRight":
				o === "horizontal" && (u ? c() : d());
				break;
			case "ArrowDown":
				o === "vertical" && c();
				break;
			case "ArrowLeft":
				o === "horizontal" && (u ? d() : c());
				break;
			case "ArrowUp":
				o === "vertical" && d();
				break;
		}
		n[a % i].ref.current?.focus();
	});
	return /* @__PURE__ */ C(it, {
		scope: r,
		disabled: i,
		direction: a,
		orientation: o,
		children: /* @__PURE__ */ C(Ge.Slot, {
			scope: r,
			children: /* @__PURE__ */ C(U.div, {
				...s,
				"data-orientation": o,
				ref: c,
				onKeyDown: i ? void 0 : d
			})
		})
	});
}), st = "AccordionItem", [ct, lt] = Je(st), ut = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, value: r, ...i } = e, a = at(st, n), o = $e(st, n), s = Xe(n), c = Te(), l = r && o.value.includes(r) || !1, u = a.disabled || e.disabled;
	return /* @__PURE__ */ C(ct, {
		scope: n,
		open: l,
		disabled: u,
		triggerId: c,
		children: /* @__PURE__ */ C(Re, {
			"data-orientation": a.orientation,
			"data-state": _t(l),
			...s,
			...i,
			ref: t,
			disabled: u,
			open: l,
			onOpenChange: (e) => {
				e ? o.onItemOpen(r) : o.onItemClose(r);
			}
		})
	});
});
ut.displayName = st;
var dt = "AccordionHeader", ft = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = at(Ue, n), a = lt(dt, n);
	return /* @__PURE__ */ C(U.h3, {
		"data-orientation": i.orientation,
		"data-state": _t(a.open),
		"data-disabled": a.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
ft.displayName = dt;
var pt = "AccordionTrigger", mt = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = at(Ue, n), a = lt(pt, n), o = tt(pt, n), s = Xe(n);
	return /* @__PURE__ */ C(Ge.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ C(ze, {
			"aria-disabled": a.open && !o.collapsible || void 0,
			"data-orientation": i.orientation,
			id: a.triggerId,
			...s,
			...r,
			ref: t
		})
	});
});
mt.displayName = pt;
var ht = "AccordionContent", gt = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = at(Ue, n), a = lt(ht, n), o = Xe(n);
	return /* @__PURE__ */ C(Be, {
		role: "region",
		"aria-labelledby": a.triggerId,
		"data-orientation": i.orientation,
		...o,
		...r,
		ref: t,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...e.style
		}
	});
});
gt.displayName = ht;
function _t(e) {
	return e ? "open" : "closed";
}
var vt = Ze, yt = ut, bt = ft, xt = mt, St = gt;
//#endregion
//#region src/components/Accordion/Accordion.tsx
function Ct({ items: e, defaultValue: t, className: n = "acc" }) {
	return /* @__PURE__ */ C(vt, {
		type: "multiple",
		className: n,
		defaultValue: t,
		children: e.map((e) => /* @__PURE__ */ w(yt, {
			value: e.id,
			className: "acc__item",
			children: [/* @__PURE__ */ C(bt, {
				asChild: !0,
				children: /* @__PURE__ */ C("h3", {
					className: "acc__h",
					children: /* @__PURE__ */ w(xt, {
						className: "acc__trigger",
						children: [
							/* @__PURE__ */ C("span", {
								className: "acc__indicator",
								"aria-hidden": "true",
								children: "▸"
							}),
							/* @__PURE__ */ C("span", {
								className: "acc__label",
								children: e.head
							}),
							/* @__PURE__ */ C("span", {
								className: "mono acc__hint",
								"aria-hidden": "true"
							})
						]
					})
				})
			}), /* @__PURE__ */ C(St, {
				className: "acc__content",
				children: /* @__PURE__ */ C("p", { children: e.body })
			})]
		}, e.id))
	});
}
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function wt(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var Tt = "rovingFocusGroup.onEntryFocus", Et = {
	bubbles: !1,
	cancelable: !0
}, Dt = "RovingFocusGroup", [Ot, kt, At] = de(Dt), [jt, Mt] = B(Dt, [At]), [Nt, Pt] = jt(Dt), Ft = e.forwardRef((e, t) => /* @__PURE__ */ C(Ot.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ C(Ot.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ C(It, {
			...e,
			ref: t
		})
	})
}));
Ft.displayName = Dt;
var It = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = V(n, p), h = He(o), [g, _] = me({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: Dt
	}), [v, y] = e.useState(!1), b = wt(u), x = kt(r), S = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(Tt, b), () => e.removeEventListener(Tt, b);
	}, [b]), /* @__PURE__ */ C(Nt, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => _(e), [_]),
		onItemShiftTab: e.useCallback(() => y(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ C(U.div, {
			tabIndex: v || w === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: H(t.onMouseDown, () => {
				S.current = !0;
			}),
			onFocus: H(t.onFocus, (e) => {
				let t = !S.current;
				if (e.target === e.currentTarget && t && !v) {
					let t = new CustomEvent(Tt, Et);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = x().filter((e) => e.focusable);
						Ht([
							e.find((e) => e.active),
							e.find((e) => e.id === g),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				S.current = !1;
			}),
			onBlur: H(t.onBlur, () => y(!1))
		})
	});
}), Lt = "RovingFocusGroupItem", Rt = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = Te(), u = o || l, d = Pt(Lt, r), f = d.currentTabStopId === u, p = kt(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
	return e.useEffect(() => {
		if (i) return m(), () => h();
	}, [
		i,
		m,
		h
	]), /* @__PURE__ */ C(Ot.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ C(U.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: H(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: H(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: H(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = Vt(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? Ut(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Ht(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
});
Rt.displayName = Lt;
var zt = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Bt(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function Vt(e, t, n) {
	let r = Bt(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return zt[r];
}
function Ht(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Ut(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Wt = Ft, Gt = Rt, Kt = "Tabs", [qt, Jt] = B(Kt, [Mt]), Yt = Mt(), [Xt, Zt] = qt(Kt), Qt = e.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = He(s), [d, f] = me({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: Kt
	});
	return /* @__PURE__ */ C(Xt, {
		scope: n,
		baseId: Te(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ C(U.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
});
Qt.displayName = Kt;
var $t = "TabsList", en = e.forwardRef((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = Zt($t, n);
	return /* @__PURE__ */ C(Wt, {
		asChild: !0,
		...Yt(n),
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ C(U.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
});
en.displayName = $t;
var tn = "TabsTrigger", nn = e.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = Zt(tn, n), s = Yt(n), c = on(o.baseId, r), l = sn(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ C(Gt, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ C(U.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: H(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: H(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: H(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
});
nn.displayName = tn;
var rn = "TabsContent", an = e.forwardRef((t, n) => {
	let { __scopeTabs: r, value: i, forceMount: a, children: o, ...s } = t, c = Zt(rn, r), l = on(c.baseId, i), u = sn(c.baseId, i), d = i === c.value, f = e.useRef(d);
	return e.useEffect(() => {
		let e = requestAnimationFrame(() => f.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ C(ye, {
		present: a || d,
		children: ({ present: e }) => /* @__PURE__ */ C(U.div, {
			"data-state": d ? "active" : "inactive",
			"data-orientation": c.orientation,
			role: "tabpanel",
			"aria-labelledby": l,
			hidden: !e,
			id: u,
			tabIndex: 0,
			...s,
			ref: n,
			style: {
				...t.style,
				animationDuration: f.current ? "0s" : void 0
			},
			children: e && o
		})
	});
});
an.displayName = rn;
function on(e, t) {
	return `${e}-trigger-${t}`;
}
function sn(e, t) {
	return `${e}-content-${t}`;
}
var cn = Qt, ln = en, un = nn, dn = an;
//#endregion
//#region src/components/Tabs/Tabs.tsx
function fn({ tabs: e, defaultValue: t, listLabel: n, activationMode: r = "automatic", className: i = "tabs" }) {
	return /* @__PURE__ */ w(cn, {
		defaultValue: t ?? e[0]?.value,
		className: i,
		activationMode: r,
		children: [/* @__PURE__ */ C(ln, {
			className: "tabs__list",
			"aria-label": n,
			children: e.map((e) => /* @__PURE__ */ C(un, {
				value: e.value,
				className: "tabs__tab",
				children: e.label
			}, e.value))
		}), e.map((e) => /* @__PURE__ */ C(dn, {
			value: e.value,
			className: "tabs__panel",
			children: e.body
		}, e.value))]
	});
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/chain.mjs
function pn(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var W = typeof document < "u" ? t.useLayoutEffect : () => {}, mn = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
}, hn = /*#__PURE__*/ t.createContext(mn), gn = /*#__PURE__*/ t.createContext(!1), _n = !!(typeof window < "u" && window.document && window.document.createElement), vn = /* @__PURE__ */ new WeakMap();
function yn(e = !1) {
	let n = d(hn), r = v(null);
	if (r.current === null && !e) {
		let e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (e) {
			let t = vn.get(e);
			t == null ? vn.set(e, {
				id: n.current,
				state: e.memoizedState
			}) : e.memoizedState !== t.state && (n.current = t.id, vn.delete(e));
		}
		r.current = ++n.current;
	}
	return r.current;
}
function bn(e) {
	let t = d(hn);
	t === mn && !_n && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
	let n = yn(!!e), r = t === mn && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function xn(e) {
	let n = t.useId(), [r] = y(En()), i = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${mn.prefix}`;
	return e || `${i}-${n}`;
}
var Sn = typeof t.useId == "function" ? xn : bn;
function Cn() {
	return !1;
}
function wn() {
	return !0;
}
function Tn(e) {
	return () => {};
}
function En() {
	return typeof t.useSyncExternalStore == "function" ? t.useSyncExternalStore(Tn, Cn, wn) : d(gn);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useValueEffect.mjs
function Dn(e) {
	let [t, n] = y(e), r = v(t), i = v(null), a = v(() => {
		if (!i.current) return;
		let e = i.current.next();
		if (e.done) {
			i.current = null;
			return;
		}
		r.current === e.value ? a.current() : n(e.value);
	});
	return W(() => {
		r.current = t, i.current && a.current();
	}), [t, u((e) => {
		i.current = e(r.current), a.current();
	}, [a])];
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useId.mjs
var On = !!(typeof window < "u" && window.document && window.document.createElement), kn = /* @__PURE__ */ new Map(), An;
typeof FinalizationRegistry < "u" && (An = new FinalizationRegistry((e) => {
	kn.delete(e);
}));
function jn(e) {
	let [t, n] = y(e), r = v(null), i = Sn(t), a = v(null);
	if (An && An.register(a, i), On) {
		let e = kn.get(i);
		e && !e.includes(r) ? e.push(r) : kn.set(i, [r]);
	}
	return W(() => {
		let e = i;
		return () => {
			An && An.unregister(a), kn.delete(e);
		};
	}, [i]), f(() => {
		let e = r.current;
		return e && n(e), () => {
			e && (r.current = null);
		};
	}), i;
}
function Mn(e, t) {
	if (e === t) return e;
	let n = kn.get(e);
	if (n) return n.forEach((e) => e.current = t), t;
	let r = kn.get(t);
	return r ? (r.forEach((t) => t.current = e), e) : t;
}
function Nn(e = []) {
	let t = jn(), [n, r] = Dn(t), i = u(() => {
		r(function* () {
			yield t, yield document.getElementById(t) ? t : void 0;
		});
	}, [t, r]);
	return W(i, [
		t,
		i,
		...e
	]), n;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/mergeRefs.mjs
function Pn(...e) {
	return e.length === 1 && e[0] ? e[0] : (t) => {
		let n = !1, r = e.map((e) => {
			let r = Fn(e, t);
			return n ||= typeof r == "function", r;
		});
		if (n) return () => {
			r.forEach((t, n) => {
				typeof t == "function" ? t() : Fn(e[n], null);
			});
		};
	};
}
function Fn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function In(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = In(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Ln() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = In(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/mergeProps.mjs
function G(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let e in r) {
			let n = t[e], i = r[e];
			typeof n == "function" && typeof i == "function" && e[0] === "o" && e[1] === "n" && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = pn(n, i) : (e === "className" || e === "UNSAFE_className") && typeof n == "string" && typeof i == "string" ? t[e] = Ln(n, i) : e === "id" && n && i ? t.id = Mn(n, i) : e === "ref" && n && i ? t.ref = Pn(n, i) : t[e] = i === void 0 ? n : i;
		}
	}
	return t;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useObjectRef.mjs
function Rn(e) {
	let t = v(null), n = v(void 0), r = u((t) => {
		if (typeof e == "function") {
			let n = e, r = n(t);
			return () => {
				typeof r == "function" ? r() : n(null);
			};
		} else if (e) return e.current = t, () => {
			e.current = null;
		};
	}, [e]);
	return g(() => ({
		get current() {
			return t.current;
		},
		set current(e) {
			t.current = e, n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
		}
	}), [r]);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/utils.mjs
var zn = Symbol("default");
function Bn({ values: e, children: n }) {
	for (let [r, i] of e) n = /*#__PURE__*/ t.createElement(r.Provider, { value: i }, n);
	return n;
}
function Vn(e) {
	let { className: t, style: n, children: r, defaultClassName: i, defaultChildren: a, defaultStyle: o, values: s, render: c } = e;
	return g(() => {
		let e, l, u;
		return e = typeof t == "function" ? t({
			...s,
			defaultClassName: i
		}) : t, l = typeof n == "function" ? n({
			...s,
			defaultStyle: o || {}
		}) : n, u = typeof r == "function" ? r({
			...s,
			defaultChildren: a
		}) : r ?? a, {
			className: e ?? i,
			style: l || o ? {
				...o,
				...l
			} : void 0,
			children: u ?? a,
			"data-rac": "",
			render: c ? (e) => c(e, s) : void 0
		};
	}, [
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	]);
}
function Hn(e, t) {
	let n = d(e);
	if (t === null) return null;
	if (n && typeof n == "object" && "slots" in n && n.slots) {
		let e = t || zn;
		if (!n.slots[e]) {
			let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)), r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
			throw Error(`${r} Valid slot names are ${e}.`);
		}
		return n.slots[e];
	}
	return n;
}
function Un(e, t, n) {
	let { ref: r, ...i } = Hn(n, e.slot) || {}, a = Rn(g(() => Pn(t, r), [t, r])), o = G(i, e);
	return "style" in i && i.style && "style" in e && e.style && (typeof i.style == "function" || typeof e.style == "function" ? o.style = (t) => {
		let n = typeof i.style == "function" ? i.style(t) : i.style, r = {
			...t.defaultStyle,
			...n
		}, a = typeof e.style == "function" ? e.style({
			...t,
			defaultStyle: r
		}) : e.style;
		return {
			...r,
			...a
		};
	} : o.style = {
		...i.style,
		...e.style
	}), [o, a];
}
function Wn(e = !0) {
	let [t, n] = y(e), r = v(!1), i = u((e) => {
		r.current = !0, n(!!e);
	}, []);
	return W(() => {
		r.current || n(!1);
	}, []), [i, t];
}
function Gn(e) {
	let t = /^(data-.*)$/, n = {};
	for (let r in e) t.test(r) || (n[r] = e[r]);
	return n;
}
function Kn(e, n, r) {
	let { render: i, ...a } = n, o = v(null), s = g(() => Pn(r, o), [r, o]);
	W(() => {
		process.env.NODE_ENV !== "production" && i && (o.current ? o.current.localName !== e && console.warn(`Unexpected DOM element returned by custom \`render\` function. Expected <${e}>, got <${o.current.localName}>. This may break the component behavior and accessibility.`) : console.warn("Ref was not connected to DOM element returned by custom `render` function. Did you forget to pass through or merge the `ref`?"));
	}, [e, i]);
	let c = {
		...a,
		ref: s
	};
	return i ? i(c, void 0) : /*#__PURE__*/ t.createElement(e, c);
}
var qn = {}, K = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = qn[t];
	return n || (n = /*#__PURE__*/ s(Kn.bind(null, t)), qn[t] = n), n;
} }), Jn = "react-aria-clear-focus", Yn = "react-aria-focus", q = (e) => e?.ownerDocument ?? document, Xn = (e) => e && "window" in e && e.window === e ? e : q(e).defaultView || window;
function Zn(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function Qn(e) {
	return Zn(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
//#endregion
//#region node_modules/react-stately/dist/private/flags/flags.mjs
var $n = !1;
function er() {
	return $n;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
function J(e, t) {
	if (!er()) return t && e ? e.contains(t) : !1;
	if (!e || !t) return !1;
	let n = t;
	for (; n !== null;) {
		if (n === e) return !0;
		n = n.tagName === "SLOT" && n.assignedSlot ? n.assignedSlot.parentNode : Qn(n) ? n.host : n.parentNode;
	}
	return !1;
}
var tr = (e = document) => {
	if (!er()) return e.activeElement;
	let t = e.activeElement;
	for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
	return t;
};
function Y(e) {
	if (er() && e.target instanceof Element && e.target.shadowRoot) {
		if ("composedPath" in e) return e.composedPath()[0] ?? null;
		if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
	}
	return e.target;
}
function nr(e) {
	if (!e) return !1;
	let t = e.getRootNode(), n = Xn(e);
	if (!(t instanceof n.Document || t instanceof n.ShadowRoot)) return !1;
	let r = t.activeElement;
	return r != null && e.contains(r);
}
//#endregion
//#region node_modules/react-aria/dist/private/focus/virtualFocus.mjs
function rr(e) {
	let t = or(q(e));
	t !== e && (t && ir(t, e), e && ar(e, t));
}
function ir(e, t) {
	e.dispatchEvent(new FocusEvent("blur", { relatedTarget: t })), e.dispatchEvent(new FocusEvent("focusout", {
		bubbles: !0,
		relatedTarget: t
	}));
}
function ar(e, t) {
	e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })), e.dispatchEvent(new FocusEvent("focusin", {
		bubbles: !0,
		relatedTarget: t
	}));
}
function or(e) {
	let t = tr(e), n = t?.getAttribute("aria-activedescendant");
	return n && e.getElementById(n) || t;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
function sr(e) {
	if (lr()) e.focus({ preventScroll: !0 });
	else {
		let t = ur(e);
		e.focus(), dr(t);
	}
}
var cr = null;
function lr() {
	if (cr == null) {
		cr = !1;
		try {
			document.createElement("div").focus({ get preventScroll() {
				return cr = !0, !0;
			} });
		} catch {}
	}
	return cr;
}
function ur(e) {
	let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
	for (; t instanceof HTMLElement && t !== r;) (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
		element: t,
		scrollTop: t.scrollTop,
		scrollLeft: t.scrollLeft
	}), t = t.parentNode;
	return r instanceof HTMLElement && n.push({
		element: r,
		scrollTop: r.scrollTop,
		scrollLeft: r.scrollLeft
	}), n;
}
function dr(e) {
	for (let { element: t, scrollTop: n, scrollLeft: r } of e) t.scrollTop = n, t.scrollLeft = r;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/isElementVisible.mjs
var fr = typeof Element < "u" && "checkVisibility" in Element.prototype;
function pr(e) {
	let t = Xn(e);
	if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
	let { display: n, visibility: r } = e.style, i = n !== "none" && r !== "hidden" && r !== "collapse";
	if (i) {
		let { getComputedStyle: t } = e.ownerDocument.defaultView, { display: n, visibility: r } = t(e);
		i = n !== "none" && r !== "hidden" && r !== "collapse";
	}
	return i;
}
function mr(e, t) {
	return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function hr(e, t) {
	return fr ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && pr(e) && mr(e, t) && (!e.parentElement || hr(e.parentElement, e));
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/isFocusable.mjs
var gr = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable^=\"false\"])",
	"permission"
], _r = gr.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
gr.push("[tabindex]:not([tabindex=\"-1\"]):not([disabled])");
var vr = gr.join(":not([hidden]):not([tabindex=\"-1\"]),");
function yr(e, t) {
	return e.matches(_r) && !xr(e) && (t?.skipVisibilityCheck || hr(e));
}
function br(e) {
	return e.matches(vr) && hr(e) && !xr(e);
}
function xr(e) {
	let t = e;
	for (; t != null;) {
		if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
		t = t.parentElement;
	}
	return !1;
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/utils.mjs
function Sr(e) {
	let t = e;
	return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t;
}
function Cr(e, t) {
	Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function wr(e) {
	let t = v({
		isFocused: !1,
		observer: null
	});
	return W(() => {
		let e = t.current;
		return () => {
			e.observer &&= (e.observer.disconnect(), null);
		};
	}, []), u((n) => {
		let r = Y(n);
		if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
			t.current.isFocused = !0;
			let n = r;
			n.addEventListener("focusout", (r) => {
				if (t.current.isFocused = !1, n.disabled) {
					let t = Sr(r);
					e?.(t);
				}
				t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
			}, { once: !0 }), t.current.observer = new MutationObserver(() => {
				if (t.current.isFocused && n.disabled) {
					t.current.observer?.disconnect();
					let e = n === tr() ? null : tr();
					n.dispatchEvent(new FocusEvent("blur", { relatedTarget: e })), n.dispatchEvent(new FocusEvent("focusout", {
						bubbles: !0,
						relatedTarget: e
					}));
				}
			}), t.current.observer.observe(n, {
				attributes: !0,
				attributeFilter: ["disabled"]
			});
		}
	}, [e]);
}
var Tr = !1;
function Er(e) {
	for (; e && !yr(e, { skipVisibilityCheck: !0 });) e = e.parentElement;
	let t = Xn(e), n = t.document.activeElement;
	if (!n || n === e) return;
	Tr = !0;
	let r = !1, i = (e) => {
		(Y(e) === n || r) && e.stopImmediatePropagation();
	}, a = (t) => {
		(Y(t) === n || r) && (t.stopImmediatePropagation(), !e && !r && (r = !0, sr(n), c()));
	}, o = (t) => {
		(Y(t) === e || r) && t.stopImmediatePropagation();
	}, s = (t) => {
		(Y(t) === e || r) && (t.stopImmediatePropagation(), r || (r = !0, sr(n), c()));
	};
	t.addEventListener("blur", i, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", o, !0);
	let c = () => {
		cancelAnimationFrame(l), t.removeEventListener("blur", i, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", o, !0), Tr = !1, r = !1;
	}, l = requestAnimationFrame(c);
	return c;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/platform.mjs
function Dr(e) {
	if (typeof window > "u" || window.navigator == null) return !1;
	let t = window.navigator.userAgentData?.brands;
	return Array.isArray(t) && t.some((t) => e.test(t.brand)) || e.test(window.navigator.userAgent);
}
function Or(e) {
	return typeof window < "u" && window.navigator != null ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function kr(e) {
	if (process.env.NODE_ENV === "test") return e;
	let t = null;
	return () => (t ??= e(), t);
}
var Ar = kr(function() {
	return Or(/^Mac/i);
}), jr = kr(function() {
	return Or(/^iPhone/i);
}), Mr = kr(function() {
	return Or(/^iPad/i) || Ar() && navigator.maxTouchPoints > 1;
}), Nr = kr(function() {
	return jr() || Mr();
}), Pr = kr(function() {
	return Ar() || Nr();
}), Fr = kr(function() {
	return Dr(/AppleWebKit/i) && !Ir();
}), Ir = kr(function() {
	return Dr(/Chrome/i);
}), Lr = kr(function() {
	return Dr(/Android/i);
}), Rr = kr(function() {
	return Dr(/Firefox/i);
});
//#endregion
//#region node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
function zr(e) {
	return e.pointerType === "" && e.isTrusted ? !0 : Lr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Br(e) {
	return !Lr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/openLink.mjs
var Vr = /*#__PURE__*/ a({
	isNative: !0,
	open: Kr,
	useHref: (e) => e
});
function Hr() {
	return d(Vr);
}
function Ur(e, t) {
	let n = e.getAttribute("target");
	return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey;
}
function Wr(e, t, n = !0) {
	let { metaKey: r, ctrlKey: i, altKey: a, shiftKey: o } = t;
	Rr() && window.event?.type?.startsWith("key") && e.target === "_blank" && (Ar() ? r = !0 : i = !0);
	let s = Fr() && Ar() && !Mr() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
		keyIdentifier: "Enter",
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o
	}) : new MouseEvent("click", {
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o,
		detail: 1,
		bubbles: !0,
		cancelable: !0
	});
	Wr.isOpening = n, sr(e), e.dispatchEvent(s), Wr.isOpening = !1;
}
Wr.isOpening = !1;
function Gr(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute("data-href")) {
		let n = document.createElement("a");
		n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
	}
}
function Kr(e, t) {
	Gr(e, (e) => Wr(e, t));
}
function qr(e) {
	let t = Hr().useHref(e.href ?? "");
	return {
		"data-href": e.href ? t : void 0,
		"data-target": e.target,
		"data-rel": e.rel,
		"data-download": e.download,
		"data-ping": e.ping,
		"data-referrer-policy": e.referrerPolicy
	};
}
function Jr(e) {
	let t = Hr().useHref(e?.href ?? ""), n = {};
	if (e) for (let r of [
		"href",
		"target",
		"rel",
		"download",
		"ping",
		"referrerPolicy"
	]) r in e && (n[r] = r === "href" ? t : e[r]);
	return n;
}
function Yr(e, t, n, r) {
	!t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && Ur(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r));
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var Xr = null, Zr = /* @__PURE__ */ new Set(), Qr = /* @__PURE__ */ new Map(), $r = !1, ei = !1, ti = {
	Tab: !0,
	Escape: !0
};
function ni(e, t) {
	for (let n of Zr) n(e, t);
}
function ri(e) {
	return !(e.metaKey || !Ar() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function ii(e) {
	$r = !0, !Wr.isOpening && ri(e) && (Xr = "keyboard", ni("keyboard", e));
}
function ai(e) {
	Xr = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && ($r = !0, ni("pointer", e));
}
function oi(e) {
	!Wr.isOpening && zr(e) && ($r = !0, Xr = "virtual");
}
function si(e) {
	let t = Xn(Y(e)), n = q(Y(e));
	Y(e) === t || Y(e) === n || Tr || !e.isTrusted || (!$r && !ei && (Xr = "virtual", ni("virtual", e)), $r = !1, ei = !1);
}
function ci() {
	Tr || ($r = !1, ei = !0);
}
function li(e) {
	if (typeof window > "u" || typeof document > "u") return;
	let t = Xn(e), n = q(e);
	if (Qr.get(t)) return;
	let r = t.HTMLElement.prototype.focus;
	t.HTMLElement.prototype.focus = function() {
		$r = !0, r.apply(this, arguments);
	}, n.addEventListener("keydown", ii, !0), n.addEventListener("keyup", ii, !0), n.addEventListener("click", oi, !0), t.addEventListener("focus", si, !0), t.addEventListener("blur", ci, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ai, !0), n.addEventListener("pointermove", ai, !0), n.addEventListener("pointerup", ai, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", ai, !0), n.addEventListener("mousemove", ai, !0), n.addEventListener("mouseup", ai, !0)), t.addEventListener("beforeunload", () => {
		ui(e);
	}, { once: !0 }), Qr.set(t, { focus: r });
}
var ui = (e, t) => {
	let n = Xn(e), r = q(e);
	t && r.removeEventListener("DOMContentLoaded", t), Qr.has(n) && (n.HTMLElement.prototype.focus = Qr.get(n).focus, r.removeEventListener("keydown", ii, !0), r.removeEventListener("keyup", ii, !0), r.removeEventListener("click", oi, !0), n.removeEventListener("focus", si, !0), n.removeEventListener("blur", ci, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ai, !0), r.removeEventListener("pointermove", ai, !0), r.removeEventListener("pointerup", ai, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", ai, !0), r.removeEventListener("mousemove", ai, !0), r.removeEventListener("mouseup", ai, !0)), Qr.delete(n));
};
function di(e) {
	let t = q(e), n;
	return t.readyState === "loading" ? (n = () => {
		li(e);
	}, t.addEventListener("DOMContentLoaded", n)) : li(e), () => ui(e, n);
}
typeof document < "u" && di();
function fi() {
	return Xr !== "pointer";
}
function pi() {
	return Xr;
}
function mi(e) {
	Xr = e, ni(e, null);
}
function hi() {
	li();
	let [e, t] = y(Xr);
	return f(() => {
		let e = () => {
			t(Xr);
		};
		return Zr.add(e), () => {
			Zr.delete(e);
		};
	}, []), En() ? null : e;
}
var gi = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function _i(e, t, n) {
	let r = n ? Y(n) : void 0, i = q(r), a = Xn(r), o = a === void 0 ? HTMLInputElement : a.HTMLInputElement, s = a === void 0 ? HTMLTextAreaElement : a.HTMLTextAreaElement, c = a === void 0 ? HTMLElement : a.HTMLElement, l = a === void 0 ? KeyboardEvent : a.KeyboardEvent, u = tr(i);
	return e = e || u instanceof o && !gi.has(u.type) || u instanceof s || u instanceof c && u.isContentEditable, !(e && t === "keyboard" && n instanceof l && !ti[n.key]);
}
function vi(e, t, n) {
	li(), f(() => {
		if (n?.enabled === !1) return;
		let t = (t, r) => {
			_i(!!n?.isTextInput, t, r) && e(fi());
		};
		return Zr.add(t), () => {
			Zr.delete(t);
		};
	}, t);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/keyboard.mjs
function yi(e) {
	return Ar() ? e.metaKey : e.ctrlKey;
}
var bi = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function xi(e) {
	return e instanceof HTMLInputElement && !bi.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var Si = t.useInsertionEffect ?? W;
function Ci(e) {
	let t = v(null);
	return Si(() => {
		t.current = e;
	}, [e]), u((...e) => {
		let n = t.current;
		return n?.(...e);
	}, []);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useEvent.mjs
function wi(e, t, n, r) {
	let i = Ci(n), a = n == null;
	f(() => {
		if (a || !e.current) return;
		let n = e.current;
		return n.addEventListener(t, i, r), () => {
			n.removeEventListener(t, i, r);
		};
	}, [
		e,
		t,
		r,
		a
	]);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useLabels.mjs
function Ti(e, t) {
	let { id: n, "aria-label": r, "aria-labelledby": i } = e;
	return n = jn(n), i && r ? i = [...new Set([n, ...i.trim().split(/\s+/)])].join(" ") : i &&= i.trim().split(/\s+/).join(" "), !r && !i && t && (r = t), {
		id: n,
		"aria-label": r,
		"aria-labelledby": i
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/utils.mjs
var Ei = new Set([
	"Arab",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]), Di = new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function Oi(e) {
	if (Intl.Locale) {
		let t = new Intl.Locale(e).maximize(), n = typeof t.getTextInfo == "function" ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === "rtl";
		if (t.script) return Ei.has(t.script);
	}
	let t = e.split("-")[0];
	return Di.has(t);
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs
var ki = Symbol.for("react-aria.i18n.locale");
function Ai() {
	let e = typeof window < "u" && window[ki] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return {
		locale: e,
		direction: Oi(e) ? "rtl" : "ltr"
	};
}
var ji = Ai(), Mi = /* @__PURE__ */ new Set();
function Ni() {
	ji = Ai();
	for (let e of Mi) e(ji);
}
function Pi() {
	let e = En(), [t, n] = y(ji);
	return f(() => (Mi.size === 0 && window.addEventListener("languagechange", Ni), Mi.add(n), () => {
		Mi.delete(n), Mi.size === 0 && window.removeEventListener("languagechange", Ni);
	}), []), e ? {
		locale: typeof window < "u" && window[ki] || "en-US",
		direction: "ltr"
	} : t;
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/I18nProvider.mjs
var Fi = /*#__PURE__*/ t.createContext(null);
function Ii() {
	let e = Pi();
	return d(Fi) || e;
}
//#endregion
//#region node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs
var Li = Symbol.for("react-aria.i18n.locale"), Ri = Symbol.for("react-aria.i18n.strings"), zi = void 0, Bi = class e {
	constructor(e, t = "en-US") {
		this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t;
	}
	getStringForLocale(e, t) {
		let n = this.getStringsForLocale(t)[e];
		if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
		return n;
	}
	getStringsForLocale(e) {
		let t = this.strings[e];
		return t || (t = Vi(e, this.strings, this.defaultLocale), this.strings[e] = t), t;
	}
	static getGlobalDictionaryForPackage(t) {
		if (typeof window > "u") return null;
		let n = window[Li];
		if (zi === void 0) {
			let t = window[Ri];
			if (!t) return null;
			zi = {};
			for (let r in t) zi[r] = new e({ [n]: t[r] }, n);
		}
		let r = zi?.[t];
		if (!r) throw Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
		return r;
	}
};
function Vi(e, t, n = "en-US") {
	if (t[e]) return t[e];
	let r = Hi(e);
	if (t[r]) return t[r];
	for (let e in t) if (e.startsWith(r + "-")) return t[e];
	return t[n];
}
function Hi(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
//#endregion
//#region node_modules/@internationalized/string/dist/private/LocalizedStringFormatter.mjs
var Ui = /* @__PURE__ */ new Map(), Wi = /* @__PURE__ */ new Map(), Gi = class {
	constructor(e, t) {
		this.locale = e, this.strings = t;
	}
	format(e, t) {
		let n = this.strings.getStringForLocale(e, this.locale);
		return typeof n == "function" ? n(t, this) : n;
	}
	plural(e, t, n = "cardinal") {
		let r = t["=" + e];
		if (r) return typeof r == "function" ? r() : r;
		let i = this.locale + ":" + n, a = Ui.get(i);
		return a || (a = new Intl.PluralRules(this.locale, { type: n }), Ui.set(i, a)), r = t[a.select(e)] || t.other, typeof r == "function" ? r() : r;
	}
	number(e) {
		let t = Wi.get(this.locale);
		return t || (t = new Intl.NumberFormat(this.locale), Wi.set(this.locale, t)), t.format(e);
	}
	select(e, t) {
		let n = e[t] || e.other;
		return typeof n == "function" ? n() : n;
	}
}, Ki = /* @__PURE__ */ new WeakMap();
function qi(e) {
	let t = Ki.get(e);
	return t || (t = new Bi(e), Ki.set(e, t)), t;
}
function Ji(e, t) {
	return t && Bi.getGlobalDictionaryForPackage(t) || qi(e);
}
function Yi(e, t) {
	let { locale: n } = Ii(), r = Ji(e, t);
	return g(() => new Gi(n, r), [n, r]);
}
//#endregion
//#region node_modules/react-stately/dist/private/utils/useControlledState.mjs
var Xi = typeof document < "u" ? t.useInsertionEffect ?? t.useLayoutEffect : () => {};
function Zi(e, t, n) {
	let [r, i] = y(e || t), a = v(r), o = v(e !== void 0), s = e !== void 0;
	f(() => {
		let e = o.current;
		e !== s && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}.`), o.current = s;
	}, [s]);
	let c = s ? e : r;
	Xi(() => {
		a.current = c;
	});
	let [, l] = _(() => ({}), {});
	return [c, u((e, ...t) => {
		let r = typeof e == "function" ? e(a.current) : e;
		Object.is(a.current, r) || (a.current = r, i(r), l(), n?.(r, ...t));
	}, [n])];
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Autocomplete.mjs
var Qi = /*#__PURE__*/ a(null), $i = /*#__PURE__*/ a(null), ea = class {
	constructor(e) {
		this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = this.constructor.type, this.key = e;
	}
	get childNodes() {
		throw Error("childNodes is not supported");
	}
	clone() {
		let e = new this.constructor(this.key);
		return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e.render = this.render, e.colSpan = this.colSpan, e.colIndex = this.colIndex, e;
	}
	filter(e, t, n) {
		let r = this.clone();
		return t.addDescendants(r, e), r;
	}
}, ta = class extends ea {
	filter(e, t, n) {
		let [r, i] = aa(e, t, this.firstChildKey, n), a = this.clone();
		return a.firstChildKey = r, a.lastChildKey = i, a;
	}
};
(class extends ea {
	static {
		this.type = "header";
	}
});
var na = class extends ea {
	static {
		this.type = "loader";
	}
}, ra = class extends ta {
	static {
		this.type = "item";
	}
	filter(e, t, n) {
		if (n(this.textValue, this)) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
};
(class extends ta {
	static {
		this.type = "section";
	}
	filter(e, t, n) {
		let r = super.filter(e, t, n);
		if (r && r.lastChildKey !== null) {
			let t = e.getItem(r.lastChildKey);
			if (t && t.type !== "header") return r;
		}
		return null;
	}
});
var ia = class {
	get size() {
		return this.itemCount;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	*[Symbol.iterator]() {
		let e = this.firstKey == null ? void 0 : this.keyMap.get(this.firstKey);
		for (; e;) yield e, e = e.nextKey == null ? void 0 : this.keyMap.get(e.nextKey);
	}
	getChildren(e) {
		let t = this.keyMap;
		return { *[Symbol.iterator]() {
			let n = t.get(e), r = n?.firstChildKey == null ? null : t.get(n.firstChildKey);
			for (; r;) yield r, r = r.nextKey == null ? void 0 : t.get(r.nextKey);
		} };
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		if (!t) return null;
		if (t.prevKey != null) {
			for (t = this.keyMap.get(t.prevKey); t && t.type !== "item" && t.lastChildKey != null;) t = this.keyMap.get(t.lastChildKey);
			return t?.key ?? null;
		}
		return t.parentKey;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		if (!t) return null;
		if (t.type !== "item" && t.firstChildKey != null) return t.firstChildKey;
		for (; t;) {
			if (t.nextKey != null) return t.nextKey;
			if (t.parentKey != null) t = this.keyMap.get(t.parentKey);
			else return null;
		}
		return null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		let e = this.lastKey == null ? null : this.keyMap.get(this.lastKey);
		for (; e?.lastChildKey != null;) e = this.keyMap.get(e.lastChildKey);
		return e?.key ?? null;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at() {
		throw Error("Not implemented");
	}
	clone() {
		let e = this.constructor, t = new e();
		return t.keyMap = new Map(this.keyMap), t.firstKey = this.firstKey, t.lastKey = this.lastKey, t.itemCount = this.itemCount, t;
	}
	addNode(e) {
		if (this.frozen) throw Error("Cannot add a node to a frozen collection");
		e.type === "item" && this.keyMap.get(e.key) == null && this.itemCount++, this.keyMap.set(e.key, e);
	}
	addDescendants(e, t) {
		this.addNode(e);
		let n = t.getChildren(e.key);
		for (let e of n) this.addDescendants(e, t);
	}
	removeNode(e) {
		if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
		let t = this.keyMap.get(e);
		t != null && t.type === "item" && this.itemCount--, this.keyMap.delete(e);
	}
	commit(e, t, n = !1) {
		if (this.frozen) throw Error("Cannot commit a frozen collection");
		this.firstKey = e, this.lastKey = t, this.frozen = !n;
	}
	filter(e) {
		let t = new this.constructor(), [n, r] = aa(this, t, this.firstKey, e);
		return t?.commit(n, r), t;
	}
	constructor() {
		this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1, this.itemCount = 0;
	}
};
function aa(e, t, n, r) {
	if (n == null) return [null, null];
	let i = null, a = null, o = e.getItem(n);
	for (; o != null;) {
		let n = o.filter(e, t, r);
		n != null && (n.nextKey = null, a && (n.prevKey = a.key, a.nextKey = n.key), i ??= n, t.addNode(n), a = n), o = o.nextKey == null ? null : e.getItem(o.nextKey);
	}
	if (a && a.type === "separator") {
		let e = a.prevKey;
		t.removeNode(a.key), e == null ? a = null : (a = t.getItem(e), a.nextKey = null);
	}
	return [i?.key ?? null, a?.key ?? null];
}
//#endregion
//#region node_modules/react-aria/dist/private/collections/Document.mjs
var oa = class {
	constructor(e) {
		this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = e;
	}
	*[Symbol.iterator]() {
		let e = this.firstChild;
		for (; e;) yield e, e = e.nextSibling;
	}
	get firstChild() {
		return this._firstChild;
	}
	set firstChild(e) {
		this._firstChild = e, this.ownerDocument.markDirty(this);
	}
	get lastChild() {
		return this._lastChild;
	}
	set lastChild(e) {
		this._lastChild = e, this.ownerDocument.markDirty(this);
	}
	get previousSibling() {
		return this._previousSibling;
	}
	set previousSibling(e) {
		this._previousSibling = e, this.ownerDocument.markDirty(this);
	}
	get nextSibling() {
		return this._nextSibling;
	}
	set nextSibling(e) {
		this._nextSibling = e, this.ownerDocument.markDirty(this);
	}
	get parentNode() {
		return this._parentNode;
	}
	set parentNode(e) {
		this._parentNode = e, this.ownerDocument.markDirty(this);
	}
	get isConnected() {
		return this.parentNode?.isConnected || !1;
	}
	invalidateChildIndices(e) {
		(this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || e.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = e, this.ownerDocument.markDirty(this));
	}
	updateChildIndices() {
		let e = this._minInvalidChildIndex;
		for (; e;) e.index = e.previousSibling ? e.previousSibling.index + 1 : 0, e = e.nextSibling;
		this._minInvalidChildIndex = null;
	}
	appendChild(e) {
		e.parentNode && e.parentNode.removeChild(e), this.firstChild ??= e, this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
	}
	insertBefore(e, t) {
		if (t == null) return this.appendChild(e);
		e.parentNode && e.parentNode.removeChild(e), e.nextSibling = t, e.previousSibling = t.previousSibling, e.index = t.index - 1, this.firstChild === t ? this.firstChild = e : t.previousSibling && (t.previousSibling.nextSibling = e), t.previousSibling = e, e.parentNode = t.parentNode, this.invalidateChildIndices(e), this.isConnected && this.ownerDocument.queueUpdate();
	}
	removeChild(e) {
		e.parentNode === this && (this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null), e.nextSibling && (this.invalidateChildIndices(e.nextSibling), e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.markDirty(e), this.isConnected && this.ownerDocument.queueUpdate());
	}
	addEventListener() {}
	removeEventListener() {}
	get previousVisibleSibling() {
		let e = this.previousSibling;
		for (; e && e.isHidden;) e = e.previousSibling;
		return e;
	}
	get nextVisibleSibling() {
		let e = this.nextSibling;
		for (; e && e.isHidden;) e = e.nextSibling;
		return e;
	}
	get firstVisibleChild() {
		let e = this.firstChild;
		for (; e && e.isHidden;) e = e.nextSibling;
		return e;
	}
	get lastVisibleChild() {
		let e = this.lastChild;
		for (; e && e.isHidden;) e = e.previousSibling;
		return e;
	}
}, sa = class e extends oa {
	constructor(e, t) {
		super(t), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.isHidden = !1, this.node = null;
	}
	get index() {
		return this._index;
	}
	set index(e) {
		this._index = e, this.ownerDocument.markDirty(this);
	}
	get level() {
		return this.parentNode instanceof e ? this.parentNode.level + +(this.parentNode.node?.type === "item") : 0;
	}
	getMutableNode() {
		return this.node == null ? null : (this.isMutated ||= (this.node = this.node.clone(), !0), this.ownerDocument.markDirty(this), this.node);
	}
	updateNode() {
		let t = this.nextVisibleSibling, n = this.getMutableNode();
		if (n != null && (n.index = this.index, n.level = this.level, n.parentKey = this.parentNode instanceof e ? this.parentNode.node?.key ?? null : null, n.prevKey = this.previousVisibleSibling?.node?.key ?? null, n.nextKey = t?.node?.key ?? null, n.hasChildNodes = !!this.firstChild, n.firstChildKey = this.firstVisibleChild?.node?.key ?? null, n.lastChildKey = this.lastVisibleChild?.node?.key ?? null, (n.colSpan != null || n.colIndex != null) && t)) {
			let e = (n.colIndex ?? n.index) + (n.colSpan ?? 1);
			if (t.node != null && e !== t.node.colIndex) {
				let n = t.getMutableNode();
				n.colIndex = e;
			}
		}
	}
	setProps(e, t, n, r, i) {
		let a, { value: o, textValue: s, id: c, ...l } = e;
		if (this.node == null ? (a = new n(c ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = a) : a = this.getMutableNode(), l.ref = t, a.props = l, a.rendered = r, a.render = i, a.value = o, e["aria-label"] && (a["aria-label"] = e["aria-label"]), a.textValue = s || (typeof l.children == "string" ? l.children : "") || e["aria-label"] || "", c != null && c !== a.key) throw Error("Cannot change the id of an item");
		l.colSpan != null && (a.colSpan = l.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
	}
	get style() {
		let e = this;
		return {
			get display() {
				return e.isHidden ? "none" : "";
			},
			set display(t) {
				let n = t === "none";
				if (e.isHidden !== n) {
					(e.parentNode?.firstVisibleChild === e || e.parentNode?.lastVisibleChild === e) && e.ownerDocument.markDirty(e.parentNode);
					let t = e.previousVisibleSibling, r = e.nextVisibleSibling;
					t && e.ownerDocument.markDirty(t), r && e.ownerDocument.markDirty(r), e.isHidden = n, e.ownerDocument.markDirty(e);
				}
			}
		};
	}
	hasAttribute() {}
	setAttribute() {}
	setAttributeNS() {}
	removeAttribute() {}
}, ca = class extends oa {
	constructor(e) {
		super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = e, this.nextCollection = e;
	}
	get isConnected() {
		return !0;
	}
	createElement(e) {
		return new sa(e, this);
	}
	getMutableCollection() {
		return this.nextCollection ||= this.collection.clone(), this.nextCollection;
	}
	markDirty(e) {
		this.dirtyNodes.add(e);
	}
	addNode(e) {
		if (e.isHidden || e.node == null) return;
		let t = this.getMutableCollection();
		if (!t.getItem(e.node.key)) for (let t of e) this.addNode(t);
		t.addNode(e.node);
	}
	removeNode(e) {
		for (let t of e) this.removeNode(t);
		e.node && this.getMutableCollection().removeNode(e.node.key);
	}
	getCollection() {
		return this.inSubscription ? this.collection : (this.queuedRender = !1, this.updateCollection(), this.collection);
	}
	updateCollection() {
		for (let e of this.dirtyNodes) e instanceof sa && (!e.isConnected || e.isHidden) ? this.removeNode(e) : e.updateChildIndices();
		for (let e of this.dirtyNodes) e instanceof sa ? (e.isConnected && !e.isHidden && (e.updateNode(), this.addNode(e)), e.node && this.dirtyNodes.delete(e), e.isMutated = !1) : this.dirtyNodes.delete(e);
		this.nextCollection && (this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null));
	}
	queueUpdate() {
		if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
			this.queuedRender = !0, this.inSubscription = !0, this.isSSR || (this.collection = this.collection.clone());
			for (let e of this.subscriptions) e();
			this.inSubscription = !1;
		}
	}
	subscribe(e) {
		return this.subscriptions.add(e), () => this.subscriptions.delete(e);
	}
	resetAfterSSR() {
		this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
	}
};
//#endregion
//#region node_modules/react-aria/dist/private/collections/useCachedChildren.mjs
function la(e) {
	let { children: t, items: n, idScope: r, addIdAndValue: a, dependencies: o = [] } = e, s = g(() => process.env.NODE_ENV !== "production" && typeof t == "function" ? t.toString() : void 0, [t]), c = g(() => /* @__PURE__ */ new WeakMap(), [...o, s]);
	return g(() => {
		if (n && typeof t == "function") {
			let e = [];
			for (let o of n) {
				let n = ua(o) ? o : null, s = n ? c.get(n) : null;
				if (!s) {
					s = t(o);
					let l = s.props.id ?? o?.key ?? o?.id;
					r != null && s.props.id == null && l != null && (l = r + ":" + l);
					let u = l ?? e.length;
					s = i(s, a ? {
						key: u,
						id: l,
						value: o
					} : { key: u }), n && c.set(n, s);
				}
				e.push(s);
			}
			return e;
		} else if (typeof t != "function") return t;
	}, [
		t,
		n,
		c,
		r,
		a
	]);
}
function ua(e) {
	switch (typeof e) {
		case "object": return e != null;
		case "function":
		case "symbol": return !0;
		default: return !1;
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/runAfterTransition.mjs
var da = /* @__PURE__ */ new Map(), fa = /* @__PURE__ */ new Set();
function pa() {
	if (typeof window > "u") return;
	function e(e) {
		return "propertyName" in e;
	}
	let t = (t) => {
		let r = Y(t);
		if (!e(t) || !r) return;
		let i = da.get(r);
		i || (i = /* @__PURE__ */ new Set(), da.set(r, i), r.addEventListener("transitioncancel", n, { once: !0 })), i.add(t.propertyName);
	}, n = (t) => {
		let r = Y(t);
		if (!e(t) || !r) return;
		let i = da.get(r);
		if (i && (i.delete(t.propertyName), i.size === 0 && (r.removeEventListener("transitioncancel", n), da.delete(r)), da.size === 0)) {
			for (let e of fa) e();
			fa.clear();
		}
	};
	document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", pa) : pa());
function ma() {
	for (let [e] of da) "isConnected" in e && !e.isConnected && da.delete(e);
}
function ha(e) {
	requestAnimationFrame(() => {
		ma(), da.size === 0 ? e() : fa.add(e);
	});
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/focusSafely.mjs
function ga(e) {
	if (!e.isConnected) return;
	let t = q(e);
	if (pi() === "virtual") {
		let n = tr(t);
		ha(() => {
			let r = tr(t);
			(r === n || r === t.body) && e.isConnected && sr(e);
		});
	} else sr(e);
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocus.mjs
function _a(e) {
	let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e, a = u((e) => {
		if (Y(e) === e.currentTarget) return r && r(e), i && i(!1), !0;
	}, [r, i]), o = wr(a), s = u((e) => {
		let t = Y(e), r = q(t), a = r ? tr(r) : tr();
		t === e.currentTarget && t === a && (n && n(e), i && i(!0), o(e));
	}, [
		i,
		n,
		o
	]);
	return { focusProps: {
		onFocus: !t && (n || i || r) ? s : void 0,
		onBlur: !t && (r || i) ? a : void 0
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/createEventHandler.mjs
function va(e) {
	if (!e) return;
	let t = !0;
	return (n) => {
		e({
			...n,
			preventDefault() {
				n.preventDefault();
			},
			isDefaultPrevented() {
				return n.isDefaultPrevented();
			},
			stopPropagation() {
				t && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : t = !0;
			},
			continuePropagation() {
				t = !1;
			},
			isPropagationStopped() {
				return t;
			}
		}), t && n.stopPropagation();
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useKeyboard.mjs
function ya(e) {
	return { keyboardProps: e.isDisabled ? {} : {
		onKeyDown: va(e.onKeyDown),
		onKeyUp: va(e.onKeyUp)
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useSyncRef.mjs
function ba(e, t) {
	W(() => {
		if (e && e.ref && t) return e.ref.current = t.current, () => {
			e.ref && (e.ref.current = null);
		};
	});
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var xa = /*#__PURE__*/ t.createContext(null);
function Sa(e) {
	let t = d(xa) || {};
	ba(t, e);
	let { ref: n, ...r } = t;
	return r;
}
function Ca(e, t) {
	let { focusProps: n } = _a(e), { keyboardProps: r } = ya(e), i = G(n, r), a = Sa(t), o = e.isDisabled ? {} : a, s = v(e.autoFocus);
	f(() => {
		s.current && t.current && ga(t.current), s.current = !1;
	}, [t]);
	let c = e.excludeFromTabOrder ? -1 : 0;
	return e.isDisabled && (c = void 0), { focusableProps: G({
		...i,
		tabIndex: c
	}, o) };
}
//#endregion
//#region node_modules/react-aria/dist/private/collections/Hidden.mjs
typeof HTMLTemplateElement < "u" && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
	configurable: !0,
	enumerable: !0,
	get: function() {
		return this.content.firstChild;
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.appendChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.removeChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
	configurable: !0,
	enumerable: !0,
	value: function(e, t) {
		return this.content.insertBefore(e, t);
	}
}));
var wa = /*#__PURE__*/ a(!1);
function Ta(e) {
	if (d(wa)) return /*#__PURE__*/ t.createElement(t.Fragment, null, e.children);
	let n = /*#__PURE__*/ t.createElement(wa.Provider, { value: !0 }, e.children);
	return /*#__PURE__*/ t.createElement("template", null, n);
}
function Ea(e) {
	let t = (t, n) => d(wa) ? null : e(t, n);
	return t.displayName = e.displayName || e.name, s(t);
}
function Da() {
	return d(wa);
}
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var Oa = /* @__PURE__ */ F(((e) => {
	var t = z("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), ka = /* @__PURE__ */ F(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = z("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Aa = (/* @__PURE__ */ F(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Oa() : t.exports = ka();
})))(), ja = /*#__PURE__*/ a(!1), Ma = /*#__PURE__*/ a(null);
function Na(e) {
	if (d(Ma)) return e.content;
	let { collection: n, document: r } = La(e.createCollection);
	return /*#__PURE__*/ t.createElement(t.Fragment, null, /*#__PURE__*/ t.createElement(Ta, null, /*#__PURE__*/ t.createElement(Ma.Provider, { value: r }, e.content)), /*#__PURE__*/ t.createElement(Pa, {
		render: e.children,
		collection: n
	}));
}
function Pa({ collection: e, render: t }) {
	return t(e);
}
function Fa(e, t, n) {
	let r = En(), i = v(r);
	return i.current = r, (0, Aa.useSyncExternalStore)(e, u(() => i.current ? n() : t(), [t, n]));
}
var Ia = typeof t.useSyncExternalStore == "function" ? t.useSyncExternalStore : Fa;
function La(e) {
	let [t] = y(() => new ca(e?.() || new ia()));
	return {
		collection: Ia(u((e) => t.subscribe(e), [t]), u(() => {
			let e = t.getCollection();
			return t.isSSR && t.resetAfterSSR(), e;
		}, [t]), u(() => (t.isSSR = !0, t.getCollection()), [t])),
		document: t
	};
}
var Ra = /*#__PURE__*/ a(null);
function za(e) {
	return class extends ea {
		static {
			this.type = e;
		}
	};
}
function Ba(e, n, r, i, a, o) {
	typeof e == "string" && (e = za(e));
	let s = u((t) => {
		t?.setProps(n, r, e, i, o);
	}, [
		n,
		r,
		i,
		o,
		e
	]), c = d(Ra);
	if (c) {
		let s = c.ownerDocument.nodesByProps.get(n);
		return s || (s = c.ownerDocument.createElement(e.type), s.setProps(n, r, e, i, o), c.appendChild(s), c.ownerDocument.updateCollection(), c.ownerDocument.nodesByProps.set(n, s)), a ? /*#__PURE__*/ t.createElement(Ra.Provider, { value: s }, a) : null;
	}
	return /*#__PURE__*/ t.createElement(e.type, { ref: s }, a);
}
function Va(e, n) {
	let r = ({ node: e }) => n(e.props, e.props.ref, e), i = s((i, a) => {
		let o = d(xa);
		if (!d(ja)) {
			if (n.length >= 3) throw Error(n.name + " cannot be rendered outside a collection.");
			return n(i, a);
		}
		return Ba(e, i, a, "children" in i ? i.children : null, null, (e) => /*#__PURE__*/ t.createElement(xa.Provider, { value: o }, /*#__PURE__*/ t.createElement(r, { node: e })));
	});
	return i.displayName = n.name, i;
}
function Ha(e, n, r = Ua) {
	let i = ({ node: e }) => n(e.props, e.props.ref, e), a = s((n, a) => Ba(e, n, a, null, r(n), (e) => /*#__PURE__*/ t.createElement(i, { node: e })) ?? /*#__PURE__*/ t.createElement(t.Fragment, null));
	return a.displayName = n.name, a;
}
function Ua(e) {
	return la({
		...e,
		addIdAndValue: !0
	});
}
var Wa = /*#__PURE__*/ a(null);
function Ga(e) {
	let n = d(Wa), r = (n?.dependencies || []).concat(e.dependencies), i = e.idScope ?? n?.idScope, a = Ua({
		...e,
		idScope: i,
		dependencies: r
	});
	return d(Ma) && (a = /*#__PURE__*/ t.createElement(Ka, null, a)), n = g(() => ({
		dependencies: r,
		idScope: i
	}), [i, ...r]), /*#__PURE__*/ t.createElement(Wa.Provider, { value: n }, a);
}
function Ka({ children: e }) {
	let n = d(Ma), r = g(() => /*#__PURE__*/ t.createElement(Ma.Provider, { value: null }, /*#__PURE__*/ t.createElement(ja.Provider, { value: !0 }, e)), [e]);
	return En() ? /*#__PURE__*/ t.createElement(Ra.Provider, { value: n }, r) : /*#__PURE__*/ D(r, n);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Collection.mjs
var qa = /*#__PURE__*/ a(null), Ja = {
	CollectionRoot({ collection: e, renderDropIndicator: t }) {
		return Ya(e, null, t);
	},
	CollectionBranch({ collection: e, parent: t, renderDropIndicator: n }) {
		return Ya(e, t, n);
	}
};
function Ya(e, n, r) {
	return la({
		items: n ? e.getChildren(n.key) : e,
		dependencies: [r],
		children(n) {
			if (n.type === "content") return /*#__PURE__*/ t.createElement(t.Fragment, null);
			let i = n.render(n);
			return !r || n.type !== "item" ? i : /*#__PURE__*/ t.createElement(t.Fragment, null, r({
				type: "item",
				key: n.key,
				dropPosition: "before"
			}), i, Xa(e, n, r));
		}
	});
}
function Xa(e, t, n) {
	let r = t.key, a = e.getKeyAfter(r), o = a == null ? null : e.getItem(a);
	for (; o != null && o.type !== "item";) a = e.getKeyAfter(o.key), o = a == null ? null : e.getItem(a);
	let s = t.nextKey == null ? null : e.getItem(t.nextKey);
	for (; s != null && s.type !== "item";) s = s.nextKey == null ? null : e.getItem(s.nextKey);
	let l = [];
	if (s == null) {
		let r = t;
		for (; r?.type === "item" && (!o || r.parentKey !== o.parentKey && o.level < r.level);) {
			let t = n({
				type: "item",
				key: r.key,
				dropPosition: "after"
			});
			/*#__PURE__*/ c(t) && l.push(/*#__PURE__*/ i(t, { key: `${r.key}-after` })), r = r.parentKey == null ? null : e.getItem(r.parentKey);
		}
	}
	return l;
}
var Za = /*#__PURE__*/ a(Ja), Qa = new Set(["id"]), $a = new Set([
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-details"
]), eo = new Set([
	"href",
	"hrefLang",
	"target",
	"rel",
	"download",
	"ping",
	"referrerPolicy"
]), to = new Set([
	"dir",
	"lang",
	"hidden",
	"inert",
	"translate"
]), no = new Set(/* @__PURE__ */ "onClick.onAuxClick.onContextMenu.onDoubleClick.onMouseDown.onMouseEnter.onMouseLeave.onMouseMove.onMouseOut.onMouseOver.onMouseUp.onTouchCancel.onTouchEnd.onTouchMove.onTouchStart.onPointerDown.onPointerMove.onPointerUp.onPointerCancel.onPointerEnter.onPointerLeave.onPointerOver.onPointerOut.onGotPointerCapture.onLostPointerCapture.onScroll.onWheel.onAnimationStart.onAnimationEnd.onAnimationIteration.onTransitionCancel.onTransitionEnd.onTransitionRun.onTransitionStart".split(".")), ro = /^(data-.*)$/;
function io(e, t = {}) {
	let { labelable: n, isLink: r, global: i, events: a = i, propNames: o } = t, s = {};
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (Qa.has(t) || n && $a.has(t) || r && eo.has(t) || i && to.has(t) || a && (no.has(t) || t.endsWith("Capture") && no.has(t.slice(0, -7))) || o?.has(t) || ro.test(t)) && (s[t] = e[t]);
	return s;
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/textSelection.mjs
var ao = "default", oo = "", so = /* @__PURE__ */ new WeakMap();
function co(e) {
	if (Nr()) {
		if (ao === "default") {
			let t = q(e);
			oo = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
		}
		ao = "disabled";
	} else if (e instanceof HTMLElement || e instanceof SVGElement) {
		let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		so.set(e, e.style[t]), e.style[t] = "none";
	}
}
function lo(e) {
	if (Nr()) {
		if (ao !== "disabled") return;
		ao = "restoring", setTimeout(() => {
			ha(() => {
				if (ao === "restoring") {
					let t = q(e);
					t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = oo || ""), oo = "", ao = "default";
				}
			});
		}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && so.has(e)) {
		let t = so.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), so.delete(e);
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/getNonce.mjs
function uo(e) {
	return e?.defaultView?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0;
}
var fo = /* @__PURE__ */ new WeakMap();
function po(e) {
	let t = e ?? (typeof document < "u" ? document : void 0);
	if (!t) return uo(t);
	if (fo.has(t)) return fo.get(t);
	let n = t.querySelector("meta[property=\"csp-nonce\"]"), r = n && n instanceof Xn(n).HTMLMetaElement && (n.nonce || n.content) || uo(t) || void 0;
	return r !== void 0 && fo.set(t, r), r;
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/context.mjs
var mo = t.createContext({ register: () => {} });
mo.displayName = "PressResponderContext";
//#endregion
//#region node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
function ho() {
	let e = v(/* @__PURE__ */ new Map()), t = u((t, n, r, i) => {
		let a = i?.once ? (...t) => {
			e.current.delete(r), r(...t);
		} : r;
		e.current.set(r, {
			type: n,
			eventTarget: t,
			fn: a,
			options: i
		}), t.addEventListener(n, a, i);
	}, []), n = u((t, n, r, i) => {
		let a = e.current.get(r)?.fn || r;
		t.removeEventListener(n, a, i), e.current.delete(r);
	}, []), r = u(() => {
		e.current.forEach((e, t) => {
			n(e.eventTarget, e.type, t, e.options);
		});
	}, [n]);
	return f(() => r, [r]), {
		addGlobalListener: t,
		removeGlobalListener: n,
		removeAllGlobalListeners: r
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/usePress.mjs
function go(e) {
	let t = d(mo);
	if (t) {
		let { register: n, ref: r, ...i } = t;
		e = G(i, e), n();
	}
	return ba(t, e.ref), e;
}
var _o = class {
	#e;
	constructor(e, t, n, r) {
		this.#e = !0;
		let i = (r?.target ?? n.currentTarget)?.getBoundingClientRect(), a, o = 0, s, c = null;
		n.clientX != null && n.clientY != null && (s = n.clientX, c = n.clientY), i && (s != null && c != null ? (a = s - i.left, o = c - i.top) : (a = i.width / 2, o = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = o, this.key = n.key;
	}
	continuePropagation() {
		this.#e = !1;
	}
	get shouldStopPropagation() {
		return this.#e;
	}
}, vo = Symbol("linkClicked"), yo = "react-aria-pressable-style", bo = "data-react-aria-pressable";
function xo(e) {
	let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: i, onPressUp: a, onClick: o, isDisabled: s, isPressed: c, preventFocusOnPress: l, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: p, ref: m, ...h } = go(e), [_, b] = y(!1), x = v({
		isPressed: !1,
		ignoreEmulatedMouseEvents: !1,
		didFirePressStart: !1,
		isTriggeringEvent: !1,
		activePointerId: null,
		target: null,
		isOverTarget: !1,
		pointerType: null,
		disposables: []
	}), { addGlobalListener: S, removeAllGlobalListeners: C } = ho(), w = u((e, t) => {
		let i = x.current;
		if (s || i.didFirePressStart) return !1;
		let a = !0;
		if (i.isTriggeringEvent = !0, r) {
			let n = new _o("pressstart", t, e);
			r(n), a = n.shouldStopPropagation;
		}
		return n && n(!0), i.isTriggeringEvent = !1, i.didFirePressStart = !0, b(!0), a;
	}, [
		s,
		r,
		n
	]), T = u((e, r, a = !0) => {
		let o = x.current;
		if (!o.didFirePressStart) return !1;
		o.didFirePressStart = !1, o.isTriggeringEvent = !0;
		let c = !0;
		if (i) {
			let t = new _o("pressend", r, e);
			i(t), c = t.shouldStopPropagation;
		}
		if (n && n(!1), b(!1), t && a && !s) {
			let n = new _o("press", r, e);
			t(n), c &&= n.shouldStopPropagation;
		}
		return o.isTriggeringEvent = !1, c;
	}, [
		s,
		i,
		n,
		t
	]), E = Ci(T), D = Ci(u((e, t) => {
		let n = x.current;
		if (s) return !1;
		if (a) {
			n.isTriggeringEvent = !0;
			let r = new _o("pressup", t, e);
			return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation;
		}
		return !0;
	}, [s, a])), k = u((e) => {
		let t = x.current;
		if (t.isPressed && t.target) {
			t.didFirePressStart && t.pointerType != null && T(Do(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, C(), p || lo(t.target);
			for (let e of t.disposables) e();
			t.disposables = [];
		}
	}, [
		p,
		C,
		T
	]), A = Ci(k);
	f(() => {
		s && x.current.isPressed && A({
			currentTarget: x.current.target,
			shiftKey: !1,
			ctrlKey: !1,
			metaKey: !1,
			altKey: !1
		});
	}, [s]);
	let j = u((e) => {
		d && k(e);
	}, [d, k]), M = u((e) => {
		s || o?.(e);
	}, [s, o]), N = u((e, t) => {
		if (!s && o) {
			let n = new MouseEvent("click", e);
			Cr(n, t), o(Sr(n));
		}
	}, [s, o]), P = g(() => {
		let e = x.current, t = {
			onKeyDown(t) {
				if (Co(t.nativeEvent, t.currentTarget) && J(t.currentTarget, Y(t))) {
					Mo(Y(t), t.key) && t.preventDefault();
					let r = !0;
					!e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", r = w(t, "keyboard"));
					let i = t.currentTarget;
					S(q(t.currentTarget), "keyup", pn((t) => {
						Co(t, i) && !t.repeat && J(i, Y(t)) && e.target && D(Do(e.target, t), "keyboard");
					}, n), !0), r && t.stopPropagation(), t.metaKey && Ar() && e.metaKeyEvents?.set(t.key, t.nativeEvent);
				} else t.key === "Meta" && (e.metaKeyEvents = /* @__PURE__ */ new Map());
			},
			onClick(t) {
				if (!(t && !J(t.currentTarget, Y(t))) && t && t.button === 0 && !e.isTriggeringEvent && !Wr.isOpening) {
					let n = !0;
					if (s && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && (e.pointerType === "virtual" || zr(t.nativeEvent))) {
						let e = w(t, "virtual"), r = D(t, "virtual"), i = E(t, "virtual");
						M(t), n = e && r && i;
					} else if (e.isPressed && e.pointerType !== "keyboard") {
						let r = e.pointerType || t.nativeEvent.pointerType || "virtual", i = D(Do(t.currentTarget, t), r), a = E(Do(t.currentTarget, t), r, !0);
						n = i && a, e.isOverTarget = !1, M(t), A(t);
					}
					e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation();
				}
			}
		}, n = (t) => {
			if (e.isPressed && e.target && Co(t, e.target)) {
				Mo(Y(t), t.key) && t.preventDefault();
				let n = Y(t), r = J(e.target, n);
				E(Do(e.target, t), "keyboard", r), r && N(t, e.target), C(), t.key !== "Enter" && So(e.target) && J(e.target, n) && !t[vo] && (t[vo] = !0, Wr(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key);
			} else if (t.key === "Meta" && e.metaKeyEvents?.size) {
				let t = e.metaKeyEvents;
				e.metaKeyEvents = void 0;
				for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", n));
			}
		};
		if (typeof PointerEvent < "u") {
			t.onPointerDown = (t) => {
				if (t.button !== 0 || !J(t.currentTarget, Y(t))) return;
				if (Br(t.nativeEvent)) {
					e.pointerType = "virtual";
					return;
				}
				e.pointerType = t.pointerType;
				let i = !0;
				if (!e.isPressed) {
					e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, p || co(e.target), i = w(t, e.pointerType);
					let a = Y(t);
					"releasePointerCapture" in a && ("hasPointerCapture" in a ? a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId) : a.releasePointerCapture(t.pointerId)), S(q(t.currentTarget), "pointerup", n, !1), S(q(t.currentTarget), "pointercancel", r, !1);
				}
				i && t.stopPropagation();
			}, t.onMouseDown = (t) => {
				if (J(t.currentTarget, Y(t)) && t.button === 0) {
					if (l) {
						let n = Er(t.target);
						n && e.disposables.push(n);
					}
					t.stopPropagation();
				}
			}, t.onPointerUp = (t) => {
				!J(t.currentTarget, Y(t)) || e.pointerType === "virtual" || t.button === 0 && !e.isPressed && D(t, e.pointerType || t.pointerType);
			}, t.onPointerEnter = (t) => {
				t.pointerId === e.activePointerId && e.target && !e.isOverTarget && e.pointerType != null && (e.isOverTarget = !0, w(Do(e.target, t), e.pointerType));
			}, t.onPointerLeave = (t) => {
				t.pointerId === e.activePointerId && e.target && e.isOverTarget && e.pointerType != null && (e.isOverTarget = !1, E(Do(e.target, t), e.pointerType, !1), j(t));
			};
			let n = (t) => {
				if (t.pointerId === e.activePointerId && e.isPressed && t.button === 0 && e.target) {
					if (J(e.target, Y(t)) && e.pointerType != null) {
						let n = !1, r = setTimeout(() => {
							e.isPressed && e.target instanceof HTMLElement && (n ? A(t) : (sr(e.target), e.target.click()));
						}, 80);
						S(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r));
					} else A(t);
					e.isOverTarget = !1;
				}
			}, r = (e) => {
				A(e);
			};
			t.onDragStart = (e) => {
				J(e.currentTarget, Y(e)) && A(e);
			};
		} else if (process.env.NODE_ENV === "test") {
			t.onMouseDown = (t) => {
				if (!(t.button !== 0 || !J(t.currentTarget, Y(t)))) {
					if (e.ignoreEmulatedMouseEvents) {
						t.stopPropagation();
						return;
					}
					if (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = zr(t.nativeEvent) ? "virtual" : "mouse", O(() => w(t, e.pointerType)) && t.stopPropagation(), l) {
						let n = Er(t.target);
						n && e.disposables.push(n);
					}
					S(q(t.currentTarget), "mouseup", n, !1);
				}
			}, t.onMouseEnter = (t) => {
				if (!J(t.currentTarget, Y(t))) return;
				let n = !0;
				e.isPressed && !e.ignoreEmulatedMouseEvents && e.pointerType != null && (e.isOverTarget = !0, n = w(t, e.pointerType)), n && t.stopPropagation();
			}, t.onMouseLeave = (t) => {
				if (!J(t.currentTarget, Y(t))) return;
				let n = !0;
				e.isPressed && !e.ignoreEmulatedMouseEvents && e.pointerType != null && (e.isOverTarget = !1, n = E(t, e.pointerType, !1), j(t)), n && t.stopPropagation();
			}, t.onMouseUp = (t) => {
				J(t.currentTarget, Y(t)) && !e.ignoreEmulatedMouseEvents && t.button === 0 && !e.isPressed && D(t, e.pointerType || "mouse");
			};
			let n = (t) => {
				if (t.button === 0) {
					if (e.ignoreEmulatedMouseEvents) {
						e.ignoreEmulatedMouseEvents = !1;
						return;
					}
					e.target && J(e.target, Y(t)) && e.pointerType != null || A(t), e.isOverTarget = !1;
				}
			};
			t.onTouchStart = (t) => {
				if (!J(t.currentTarget, Y(t))) return;
				let n = wo(t.nativeEvent);
				n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", p || co(e.target), w(Eo(e.target, t), e.pointerType) && t.stopPropagation(), S(Xn(t.currentTarget), "scroll", r, !0));
			}, t.onTouchMove = (t) => {
				if (!J(t.currentTarget, Y(t))) return;
				if (!e.isPressed) {
					t.stopPropagation();
					return;
				}
				let n = To(t.nativeEvent, e.activePointerId), r = !0;
				n && Ao(n, t.currentTarget) ? !e.isOverTarget && e.pointerType != null && (e.isOverTarget = !0, r = w(Eo(e.target, t), e.pointerType)) : e.isOverTarget && e.pointerType != null && (e.isOverTarget = !1, r = E(Eo(e.target, t), e.pointerType, !1), j(Eo(e.target, t))), r && t.stopPropagation();
			}, t.onTouchEnd = (t) => {
				if (!J(t.currentTarget, Y(t))) return;
				if (!e.isPressed) {
					t.stopPropagation();
					return;
				}
				let n = To(t.nativeEvent, e.activePointerId), r = !0;
				n && Ao(n, t.currentTarget) && e.pointerType != null ? (D(Eo(e.target, t), e.pointerType), r = E(Eo(e.target, t), e.pointerType), N(t.nativeEvent, e.target)) : e.isOverTarget && e.pointerType != null && (r = E(Eo(e.target, t), e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !p && lo(e.target), C();
			}, t.onTouchCancel = (t) => {
				J(t.currentTarget, Y(t)) && (t.stopPropagation(), e.isPressed && A(Eo(e.target, t)));
			};
			let r = (t) => {
				e.isPressed && J(Y(t), e.target) && A({
					currentTarget: e.target,
					shiftKey: !1,
					ctrlKey: !1,
					metaKey: !1,
					altKey: !1
				});
			};
			t.onDragStart = (e) => {
				J(e.currentTarget, Y(e)) && A(e);
			};
		}
		return t;
	}, [
		S,
		s,
		l,
		C,
		p,
		j,
		w,
		M,
		N
	]);
	return f(() => {
		if (!m || process.env.NODE_ENV === "test") return;
		let e = q(m.current);
		if (!e || !e.head || e.getElementById(yo)) return;
		let t = e.createElement("style");
		t.id = yo;
		let n = po(e);
		n && (t.nonce = n), t.textContent = `
@layer {
  [${bo}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t);
	}, [m]), f(() => {
		let e = x.current;
		return () => {
			p || lo(e.target ?? void 0);
			for (let t of e.disposables) t();
			e.disposables = [];
		};
	}, [p]), {
		isPressed: c || _,
		pressProps: G(h, P, { [bo]: !0 })
	};
}
function So(e) {
	return e.tagName === "A" && e.hasAttribute("href");
}
function Co(e, t) {
	let { key: n, code: r } = e, i = t, a = i.getAttribute("role");
	return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(i instanceof Xn(i).HTMLInputElement && !Po(i, n) || i instanceof Xn(i).HTMLTextAreaElement || i.isContentEditable) && !((a === "link" || !a && So(i)) && n !== "Enter");
}
function wo(e) {
	let { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function To(e, t) {
	let n = e.changedTouches;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (r.identifier === t) return r;
	}
	return null;
}
function Eo(e, t) {
	let n = 0, r = 0;
	return t.targetTouches && t.targetTouches.length === 1 && (n = t.targetTouches[0].clientX, r = t.targetTouches[0].clientY), {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
		clientX: n,
		clientY: r
	};
}
function Do(e, t) {
	let n = t.clientX, r = t.clientY;
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
		clientX: n,
		clientY: r,
		key: t.key
	};
}
function Oo(e) {
	let t = 0, n = 0;
	return e.width === void 0 ? e.radiusX !== void 0 && (t = e.radiusX) : t = e.width / 2, e.height === void 0 ? e.radiusY !== void 0 && (n = e.radiusY) : n = e.height / 2, {
		top: e.clientY - n,
		right: e.clientX + t,
		bottom: e.clientY + n,
		left: e.clientX - t
	};
}
function ko(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Ao(e, t) {
	return ko(t.getBoundingClientRect(), Oo(e));
}
function jo(e) {
	return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !So(e);
}
function Mo(e, t) {
	return e instanceof HTMLInputElement ? !Po(e, t) : jo(e);
}
var No = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function Po(e, t) {
	return e.type === "checkbox" || e.type === "radio" ? t === " " : No.has(e.type);
}
//#endregion
//#region node_modules/react-aria/dist/private/link/useLink.mjs
function Fo(e, t) {
	let { elementType: n = "a", onPress: r, onPressStart: i, onPressEnd: a, onClick: o, isDisabled: s, ...c } = e, l = {};
	n !== "a" && (l = {
		role: "link",
		tabIndex: s ? void 0 : 0
	});
	let { focusableProps: u } = Ca(e, t), { pressProps: d, isPressed: f } = xo({
		onPress: r,
		onPressStart: i,
		onPressEnd: a,
		onClick: o,
		isDisabled: s,
		ref: t
	}), p = io(c, { labelable: !0 }), m = G(u, d), h = Hr();
	return {
		isPressed: f,
		linkProps: G(p, Jr(e), {
			...m,
			...l,
			"aria-disabled": s || void 0,
			"aria-current": e["aria-current"],
			onClick: (t) => {
				d.onClick?.(t), Yr(t, h, e.href, e.routerOptions);
			}
		})
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
function Io(e) {
	let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e, a = v({ isFocusWithin: !1 }), { addGlobalListener: o, removeAllGlobalListeners: s } = ho(), c = u((e) => {
		J(e.currentTarget, Y(e)) && a.current.isFocusWithin && !J(e.currentTarget, e.relatedTarget) && (a.current.isFocusWithin = !1, s(), n && n(e), i && i(!1));
	}, [
		n,
		i,
		a,
		s
	]), l = wr(c), d = u((e) => {
		if (!J(e.currentTarget, Y(e))) return;
		let t = Y(e), n = q(t), s = tr(n);
		if (!a.current.isFocusWithin && s === t) {
			r && r(e), i && i(!0), a.current.isFocusWithin = !0, l(e);
			let t = e.currentTarget;
			o(n, "focus", (e) => {
				let r = Y(e);
				if (a.current.isFocusWithin && !J(t, r)) {
					let e = new n.defaultView.FocusEvent("blur", { relatedTarget: r });
					Cr(e, t), c(Sr(e));
				}
			}, { capture: !0 });
		}
	}, [
		r,
		i,
		l,
		o,
		c
	]);
	return t ? { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} } : { focusWithinProps: {
		onFocus: d,
		onBlur: c
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/focus/useFocusRing.mjs
function Lo(e = {}) {
	let { autoFocus: t = !1, isTextInput: n, within: r } = e, i = v({
		isFocused: !1,
		isFocusVisible: t || fi()
	}), [a, o] = y(!1), [s, c] = y(() => i.current.isFocused && i.current.isFocusVisible), l = u(() => c(i.current.isFocused && i.current.isFocusVisible), []), d = u((e) => {
		i.current.isFocused = e, i.current.isFocusVisible = fi(), o(e), l();
	}, [l]);
	vi((e) => {
		i.current.isFocusVisible = e, l();
	}, [n, a], {
		enabled: a,
		isTextInput: n
	});
	let { focusProps: f } = _a({
		isDisabled: r,
		onFocusChange: d
	}), { focusWithinProps: p } = Io({
		isDisabled: !r,
		onFocusWithinChange: d
	});
	return {
		isFocused: a,
		isFocusVisible: s,
		focusProps: r ? p : f
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useHover.mjs
var Ro = !1, zo = 0;
function Bo() {
	Ro = !0, setTimeout(() => {
		Ro = !1;
	}, 500);
}
function Vo(e) {
	e.pointerType === "touch" && Bo();
}
function Ho() {
	let e = q(null);
	if (e !== void 0) return zo === 0 && (typeof PointerEvent < "u" ? e.addEventListener("pointerup", Vo) : process.env.NODE_ENV === "test" && e.addEventListener("touchend", Bo)), zo++, () => {
		zo--, !(zo > 0) && (typeof PointerEvent < "u" ? e.removeEventListener("pointerup", Vo) : process.env.NODE_ENV === "test" && e.removeEventListener("touchend", Bo));
	};
}
function Uo(e) {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e, [a, o] = y(!1), s = v({
		isHovered: !1,
		ignoreEmulatedMouseEvents: !1,
		pointerType: "",
		target: null
	}).current;
	f(Ho, []);
	let { addGlobalListener: c, removeAllGlobalListeners: l } = ho(), { hoverProps: u, triggerHoverEnd: d } = g(() => {
		let e = (e, r) => {
			if (s.pointerType = r, i || r === "touch" || s.isHovered || !J(e.currentTarget, Y(e))) return;
			s.isHovered = !0;
			let l = e.currentTarget;
			s.target = l, c(q(Y(e)), "pointerover", (e) => {
				s.isHovered && s.target && !J(s.target, Y(e)) && a(e, e.pointerType);
			}, { capture: !0 }), t && t({
				type: "hoverstart",
				target: l,
				pointerType: r
			}), n && n(!0), o(!0);
		}, a = (e, t) => {
			let i = s.target;
			s.pointerType = "", s.target = null, !(t === "touch" || !s.isHovered || !i) && (s.isHovered = !1, l(), r && r({
				type: "hoverend",
				target: i,
				pointerType: t
			}), n && n(!1), o(!1));
		}, u = {};
		return typeof PointerEvent < "u" ? (u.onPointerEnter = (t) => {
			Ro && t.pointerType === "mouse" || e(t, t.pointerType);
		}, u.onPointerLeave = (e) => {
			!i && J(e.currentTarget, Y(e)) && a(e, e.pointerType);
		}) : process.env.NODE_ENV === "test" && (u.onTouchStart = () => {
			s.ignoreEmulatedMouseEvents = !0;
		}, u.onMouseEnter = (t) => {
			!s.ignoreEmulatedMouseEvents && !Ro && e(t, "mouse"), s.ignoreEmulatedMouseEvents = !1;
		}, u.onMouseLeave = (e) => {
			!i && J(e.currentTarget, Y(e)) && a(e, "mouse");
		}), {
			hoverProps: u,
			triggerHoverEnd: a
		};
	}, [
		t,
		n,
		r,
		i,
		s,
		c,
		l
	]);
	return f(() => {
		i && d({ currentTarget: s.target }, s.pointerType);
	}, [i]), {
		hoverProps: u,
		isHovered: a
	};
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Link.mjs
var Wo = /*#__PURE__*/ a(null), Go = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, Wo);
	let r = e.href && !e.isDisabled ? "a" : "span", { linkProps: i, isPressed: a } = Fo({
		...e,
		elementType: r
	}, n), o = K[r], { hoverProps: s, isHovered: c } = Uo(e), { focusProps: l, isFocused: u, isFocusVisible: d } = Lo(), f = Vn({
		...e,
		defaultClassName: "react-aria-Link",
		values: {
			isCurrent: !!e["aria-current"],
			isDisabled: e.isDisabled || !1,
			isPressed: a,
			isHovered: c,
			isFocused: u,
			isFocusVisible: d
		}
	}), p = io(e, { global: !0 });
	return delete p.onClick, /*#__PURE__*/ t.createElement(o, {
		ref: n,
		slot: e.slot || void 0,
		...G(p, f, i, s, l),
		"data-focused": u || void 0,
		"data-hovered": c || void 0,
		"data-pressed": a || void 0,
		"data-focus-visible": d || void 0,
		"data-current": !!e["aria-current"] || void 0,
		"data-disabled": e.isDisabled || void 0
	}, f.children);
}), Ko = {};
Ko = { breadcrumbs: "عناصر الواجهة" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/bg-BG.mjs
var qo = {};
qo = { breadcrumbs: "Трохи хляб" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/cs-CZ.mjs
var Jo = {};
Jo = { breadcrumbs: "Popis cesty" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/da-DK.mjs
var Yo = {};
Yo = { breadcrumbs: "Brødkrummer" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/de-DE.mjs
var Xo = {};
Xo = { breadcrumbs: "Breadcrumbs" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/el-GR.mjs
var Zo = {};
Zo = { breadcrumbs: "Πλοηγήσεις breadcrumb" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/en-US.mjs
var Qo = {};
Qo = { breadcrumbs: "Breadcrumbs" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/es-ES.mjs
var $o = {};
$o = { breadcrumbs: "Migas de pan" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/et-EE.mjs
var es = {};
es = { breadcrumbs: "Lingiread" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/fi-FI.mjs
var ts = {};
ts = { breadcrumbs: "Navigointilinkit" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/fr-FR.mjs
var ns = {};
ns = { breadcrumbs: "Chemin de navigation" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/he-IL.mjs
var rs = {};
rs = { breadcrumbs: "שבילי ניווט" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/hr-HR.mjs
var is = {};
is = { breadcrumbs: "Navigacijski putovi" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/hu-HU.mjs
var as = {};
as = { breadcrumbs: "Morzsamenü" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/it-IT.mjs
var os = {};
os = { breadcrumbs: "Breadcrumb" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/ja-JP.mjs
var ss = {};
ss = { breadcrumbs: "パンくずリスト" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/ko-KR.mjs
var cs = {};
cs = { breadcrumbs: "탐색 표시" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/lt-LT.mjs
var ls = {};
ls = { breadcrumbs: "Naršymo kelias" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/lv-LV.mjs
var us = {};
us = { breadcrumbs: "Atpakaļceļi" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/nb-NO.mjs
var ds = {};
ds = { breadcrumbs: "Navigasjonsstier" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/nl-NL.mjs
var fs = {};
fs = { breadcrumbs: "Broodkruimels" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/pl-PL.mjs
var ps = {};
ps = { breadcrumbs: "Struktura nawigacyjna" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/pt-BR.mjs
var ms = {};
ms = { breadcrumbs: "Caminho detalhado" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/pt-PT.mjs
var hs = {};
hs = { breadcrumbs: "Categorias" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/ro-RO.mjs
var gs = {};
gs = { breadcrumbs: "Miez de pâine" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/ru-RU.mjs
var _s = {};
_s = { breadcrumbs: "Навигация" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/sk-SK.mjs
var vs = {};
vs = { breadcrumbs: "Navigačné prvky Breadcrumbs" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/sl-SI.mjs
var ys = {};
ys = { breadcrumbs: "Drobtine" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/sr-SP.mjs
var bs = {};
bs = { breadcrumbs: "Putanje navigacije" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/sv-SE.mjs
var xs = {};
xs = { breadcrumbs: "Sökvägar" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/tr-TR.mjs
var Ss = {};
Ss = { breadcrumbs: "İçerik haritaları" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/uk-UA.mjs
var Cs = {};
Cs = { breadcrumbs: "Навігаційна стежка" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/zh-CN.mjs
var ws = {};
ws = { breadcrumbs: "导航栏" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/breadcrumbs/zh-TW.mjs
var Ts = {};
Ts = { breadcrumbs: "導覽列" };
//#endregion
//#region node_modules/react-aria/dist/private/breadcrumbs/intlStrings.mjs
var Es = {};
Es = {
	"ar-AE": Ko,
	"bg-BG": qo,
	"cs-CZ": Jo,
	"da-DK": Yo,
	"de-DE": Xo,
	"el-GR": Zo,
	"en-US": Qo,
	"es-ES": $o,
	"et-EE": es,
	"fi-FI": ts,
	"fr-FR": ns,
	"he-IL": rs,
	"hr-HR": is,
	"hu-HU": as,
	"it-IT": os,
	"ja-JP": ss,
	"ko-KR": cs,
	"lt-LT": ls,
	"lv-LV": us,
	"nb-NO": ds,
	"nl-NL": fs,
	"pl-PL": ps,
	"pt-BR": ms,
	"pt-PT": hs,
	"ro-RO": gs,
	"ru-RU": _s,
	"sk-SK": vs,
	"sl-SI": ys,
	"sr-SP": bs,
	"sv-SE": xs,
	"tr-TR": Ss,
	"uk-UA": Cs,
	"zh-CN": ws,
	"zh-TW": Ts
};
//#endregion
//#region node_modules/react-aria/dist/private/breadcrumbs/useBreadcrumbs.mjs
function Ds(e) {
	return e && e.__esModule ? e.default : e;
}
function Os(e) {
	let { "aria-label": t, ...n } = e, r = Yi(Ds(Es), "@react-aria/breadcrumbs");
	return { navProps: {
		...io(n, { labelable: !0 }),
		"aria-label": t || r.format("breadcrumbs")
	} };
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Breadcrumbs.mjs
var ks = /*#__PURE__*/ a(null), As = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, ks);
	let { CollectionRoot: r } = d(Za), { navProps: i } = Os(e), a = io(e, {
		global: !0,
		labelable: !0
	});
	return /*#__PURE__*/ t.createElement(Na, { content: /*#__PURE__*/ t.createElement(Ga, e) }, (o) => /*#__PURE__*/ t.createElement(K.ol, {
		render: e.render,
		ref: n,
		...G(a, i),
		slot: e.slot || void 0,
		style: e.style,
		className: e.className ?? "react-aria-Breadcrumbs"
	}, /*#__PURE__*/ t.createElement(ks.Provider, { value: e }, /*#__PURE__*/ t.createElement(r, { collection: o }))));
}), js = /*#__PURE__*/ Va(class extends ea {
	static {
		this.type = "item";
	}
}, function(e, n, r) {
	let i = r.nextKey == null, { isDisabled: a, onAction: o } = Hn(ks), s = {
		"aria-current": i ? "page" : null,
		isDisabled: a || i,
		onPress: () => o?.(r.key)
	}, c = Vn({
		...r.props,
		children: r.rendered,
		values: {
			isDisabled: a || i,
			isCurrent: i
		},
		defaultClassName: "react-aria-Breadcrumb"
	}), l = io(e, {
		global: !0,
		labelable: !0
	});
	return delete l.id, /*#__PURE__*/ t.createElement(K.li, {
		...l,
		...c,
		ref: n,
		"data-disabled": a || i || void 0,
		"data-current": i || void 0
	}, /*#__PURE__*/ t.createElement(Wo.Provider, { value: s }, c.children));
}), Ms = /*#__PURE__*/ a({}), Ns = /*#__PURE__*/ Ea(function(e, n) {
	[e, n] = Un(e, n, Ms);
	let { elementType: r = "label", ...i } = e, a = K[r];
	return /*#__PURE__*/ t.createElement(a, {
		className: "react-aria-Label",
		...i,
		ref: n
	});
});
//#endregion
//#region node_modules/react-aria/dist/private/label/useLabel.mjs
function Ps(e) {
	let { id: t, label: n, "aria-labelledby": r, "aria-label": i, labelElementType: a = "label" } = e;
	t = jn(t);
	let o = jn(), s = {};
	n ? (r = r ? `${o} ${r}` : o, s = {
		id: o,
		htmlFor: a === "label" ? t : void 0
	}) : !r && !i && process.env.NODE_ENV !== "production" && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
	let c = Ti({
		id: t,
		"aria-label": i,
		"aria-labelledby": r
	});
	return {
		labelProps: s,
		fieldProps: c
	};
}
//#endregion
//#region node_modules/@internationalized/number/dist/private/NumberFormatter.mjs
var Fs = /* @__PURE__ */ new Map(), Is = !1;
try {
	Is = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var Ls = !1;
try {
	Ls = new Intl.NumberFormat("de-DE", {
		style: "unit",
		unit: "degree"
	}).resolvedOptions().style === "unit";
} catch {}
var Rs = { degree: { narrow: {
	default: "°",
	"ja-JP": " 度",
	"zh-TW": "度",
	"sl-SI": " °"
} } }, zs = class {
	constructor(e, t = {}) {
		this.numberFormatter = Bs(e, t), this.options = t;
	}
	format(e) {
		let t = "";
		if (t = !Is && this.options.signDisplay != null ? Vs(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), this.options.style === "unit" && !Ls) {
			let { unit: e, unitDisplay: n = "short", locale: r } = this.resolvedOptions();
			if (!e) return t;
			let i = Rs[e]?.[n];
			t += i[r] || i.default;
		}
		return t;
	}
	formatToParts(e) {
		return this.numberFormatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.format(e)} \u{2013} ${this.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.numberFormatter.formatToParts(e), r = this.numberFormatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.numberFormatter.resolvedOptions();
		return !Is && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), !Ls && this.options.style === "unit" && (e = {
			...e,
			style: "unit",
			unit: this.options.unit,
			unitDisplay: this.options.unitDisplay
		}), e;
	}
};
function Bs(e, t = {}) {
	let { numberingSystem: n } = t;
	if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !Ls) {
		let { unit: e, unitDisplay: n = "short" } = t;
		if (!e) throw Error("unit option must be provided with style: \"unit\"");
		if (!Rs[e]?.[n]) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
		t = {
			...t,
			style: "decimal"
		};
	}
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (Fs.has(r)) return Fs.get(r);
	let i = new Intl.NumberFormat(e, t);
	return Fs.set(r, i), i;
}
function Vs(e, t, n) {
	if (t === "auto") return e.format(n);
	if (t === "never") return e.format(Math.abs(n));
	{
		let r = !1;
		if (t === "always" ? r = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), r) {
			let t = e.format(-n), r = e.format(n), i = t.replace(r, "").replace(/\u200e|\u061C/, "");
			return [...i].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), t.replace(r, "!!!").replace(i, "+").replace("!!!", r);
		} else return e.format(n);
	}
}
//#endregion
//#region node_modules/@internationalized/number/dist/private/NumberParser.mjs
var Hs = /* @__PURE__ */ RegExp("^.*\\(.*\\).*$"), Us = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng",
	"fullwide"
], Ws = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return Ks(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return Ks(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return Ks(this.locale, this.options, e).options.numberingSystem;
	}
}, Gs = /* @__PURE__ */ new Map();
function Ks(e, t, n) {
	let r = qs(e, t);
	if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
		for (let i of Us) if (i !== r.options.numberingSystem) {
			let r = qs(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function qs(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""), r = Gs.get(n);
	return r || (r = new Js(e, t), Gs.set(n, r)), r;
}
var Js = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = Zs(e, this.formatter, this.options, t), this.options.style === "percent" && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
	}
	parse(e) {
		let t = this.formatter.resolvedOptions().useGrouping, n = this.sanitize(e);
		if (!t && this.symbols.group && n.includes(this.symbols.group)) return NaN;
		if (this.symbols.group && (n = n.replaceAll(this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
			let e = n.indexOf("-");
			n = n.replace("-", ""), n = n.replace("+", "");
			let t = n.indexOf(".");
			t === -1 && (t = n.length), n = n.replace(".", ""), n = t - 2 == 0 ? `0.${n}` : t - 2 == -1 ? `0.0${n}` : t - 2 == -2 ? "0.00" : `${n.slice(0, t - 2)}.${n.slice(t - 2)}`, e > -1 && (n = `-${n}`);
		}
		let r = n ? +n : NaN;
		if (isNaN(r)) return NaN;
		if (this.options.style === "percent") {
			let e = {
				...this.options,
				style: "decimal",
				minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
				maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20)
			};
			return new Ws(this.locale, e).parse(new zs(this.locale, e).format(r));
		}
		return this.options.currencySign === "accounting" && Hs.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = Qs(e, ",", this.symbols.decimal), e = Qs(e, "،", this.symbols.decimal)), this.symbols.group && t && (e = Qs(e, ".", this.symbols.group))), this.symbols.group === "’" && e.includes("'") && t && (e = Qs(e, "'", this.symbols.group)), this.symbols.group === "'" && e.includes("’") && t && (e = Qs(e, "’", this.symbols.group)), this.options.locale === "fr-FR" && this.symbols.group && t && (e = Qs(e, " ", this.symbols.group), e = Qs(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -Infinity, n = Infinity) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = Qs(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
	}
}, Ys = new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]), Xs = [
	0,
	4,
	2,
	1,
	11,
	20,
	3,
	7,
	100,
	21,
	.1,
	1.1
];
function Zs(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand",
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = Xs.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === "unit");
		return n && !e.some((e) => e.type === "integer" || e.type === "fraction") ? {
			unit: n.value,
			value: Xs[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === "minusSign")?.value ?? "-", u = o.find((e) => e.type === "plusSign")?.value;
	!u && (r?.signDisplay === "exceptZero" || r?.signDisplay === "always") && (u = "+");
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === "decimal")?.value, f = a.find((e) => e.type === "group")?.value, p = a.filter((e) => !Ys.has(e.type)).map((e) => $s(e.value)), m = s.flatMap((e) => e.filter((e) => !Ys.has(e.type)).map((e) => $s(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? /* @__PURE__ */ RegExp("\\p{White_Space}|\\p{Cf}", "gu") : RegExp(`${h.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu"), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join("")}]`, "g");
	return {
		minusSign: l,
		plusSign: u,
		decimal: d,
		group: f,
		literals: g,
		numeral: y,
		numerals: _,
		index: (e) => String(v.get(e)),
		noNumeralUnits: c
	};
}
function Qs(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function $s(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/useNumberFormatter.mjs
function ec(e = {}) {
	let { locale: t } = Ii();
	return g(() => new zs(t, e), [t, e]);
}
//#endregion
//#region node_modules/react-stately/dist/private/utils/number.mjs
function tc(e, t = -Infinity, n = Infinity) {
	return Math.min(Math.max(e, t), n);
}
function nc(e, t) {
	let n = e, r = 0, i = t.toString(), a = i.toLowerCase().indexOf("e-");
	if (a > 0) r = Math.abs(Math.floor(Math.log10(Math.abs(t)))) + a;
	else {
		let e = i.indexOf(".");
		e >= 0 && (r = i.length - e);
	}
	if (r > 0) {
		let e = 10 ** r;
		n = Math.round(n * e) / e;
	}
	return n;
}
function rc(e, t, n, r) {
	t = Number(t), n = Number(n);
	let i = (e - (isNaN(t) ? 0 : t)) % r, a = nc(Math.abs(i) * 2 >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i, r);
	return isNaN(t) ? !isNaN(n) && a > n && (a = Math.floor(nc(n / r, r)) * r) : a < t ? a = t : !isNaN(n) && a > n && (a = t + Math.floor(nc((n - t) / r, r)) * r), a = nc(a, r), a;
}
//#endregion
//#region node_modules/react-aria/dist/private/progress/useProgressBar.mjs
function ic(e) {
	let { value: t = 0, minValue: n = 0, maxValue: r = 100, valueLabel: i, isIndeterminate: a, formatOptions: o = { style: "percent" } } = e, s = io(e, { labelable: !0 }), { labelProps: c, fieldProps: l } = Ps({
		...e,
		labelElementType: "span"
	});
	t = tc(t, n, r);
	let u = (t - n) / (r - n), d = ec(o);
	if (!a && !i) {
		let e = o.style === "percent" ? u : t;
		i = d.format(e);
	}
	return {
		progressBarProps: G(s, {
			...l,
			"aria-valuenow": a ? void 0 : t,
			"aria-valuemin": n,
			"aria-valuemax": r,
			"aria-valuetext": a ? void 0 : i,
			role: "progressbar"
		}),
		labelProps: c
	};
}
//#endregion
//#region node_modules/react-aria-components/dist/private/ProgressBar.mjs
var ac = /*#__PURE__*/ a(null), oc = 7e3, sc = null;
function cc(e, t = "assertive", n = oc) {
	sc ? sc.announce(e, t, n) : (sc = new uc(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? sc.announce(e, t, n) : setTimeout(() => {
		sc?.isAttached() && sc?.announce(e, t, n);
	}, 100));
}
function lc(e) {
	sc && sc.clear(e);
}
var uc = class {
	constructor() {
		this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
			border: 0,
			clip: "rect(0 0 0 0)",
			clipPath: "inset(50%)",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			whiteSpace: "nowrap"
		}), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
	}
	isAttached() {
		return this.node?.isConnected;
	}
	createLog(e) {
		let t = document.createElement("div");
		return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t;
	}
	destroy() {
		this.node &&= (document.body.removeChild(this.node), null);
	}
	announce(e, t = "assertive", n = oc) {
		if (!this.node) return;
		let r = document.createElement("div");
		typeof e == "object" ? (r.setAttribute("role", "img"), r.setAttribute("aria-labelledby", e["aria-labelledby"])) : r.textContent = e, t === "assertive" ? this.assertiveLog?.appendChild(r) : this.politeLog?.appendChild(r), e !== "" && setTimeout(() => {
			r.remove();
		}, n);
	}
	clear(e) {
		this.node && ((!e || e === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
	}
};
//#endregion
//#region node_modules/react-aria/dist/private/button/useButton.mjs
function dc(e, t) {
	let { elementType: n = "button", isDisabled: r, onPress: i, onPressStart: a, onPressEnd: o, onPressUp: s, onPressChange: c, preventFocusOnPress: l, allowFocusWhenDisabled: u, onClick: d, href: f, target: p, rel: m, type: h = "button" } = e, g;
	g = n === "button" ? {
		type: h,
		disabled: r,
		form: e.form,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formMethod: e.formMethod,
		formNoValidate: e.formNoValidate,
		formTarget: e.formTarget,
		name: e.name,
		value: e.value
	} : {
		role: "button",
		href: n === "a" && !r ? f : void 0,
		target: n === "a" ? p : void 0,
		type: n === "input" ? h : void 0,
		disabled: n === "input" ? r : void 0,
		"aria-disabled": !r || n === "input" ? void 0 : r,
		rel: n === "a" ? m : void 0
	};
	let { pressProps: _, isPressed: v } = xo({
		onPressStart: a,
		onPressEnd: o,
		onPressChange: c,
		onPress: i,
		onPressUp: s,
		onClick: d,
		isDisabled: r,
		preventFocusOnPress: l,
		ref: t
	}), { focusableProps: y } = Ca(e, t);
	u && (y.tabIndex = r ? -1 : y.tabIndex);
	let b = G(y, _, io(e, { labelable: !0 }));
	return {
		isPressed: v,
		buttonProps: G(g, b, {
			"aria-haspopup": e["aria-haspopup"],
			"aria-expanded": e["aria-expanded"],
			"aria-controls": e["aria-controls"],
			"aria-pressed": e["aria-pressed"],
			"aria-current": e["aria-current"],
			"aria-disabled": e["aria-disabled"]
		})
	};
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Button.mjs
var fc = /*#__PURE__*/ a({}), pc = /*#__PURE__*/ Ea(function(e, n) {
	[e, n] = Un(e, n, fc);
	let r = e, { isPending: i } = r, { buttonProps: a, isPressed: o } = dc(e, n);
	a = hc(a, i);
	let { focusProps: s, isFocused: c, isFocusVisible: l } = Lo(e), { hoverProps: u, isHovered: d } = Uo({
		...e,
		isDisabled: e.isDisabled || i
	}), p = {
		isHovered: d,
		isPressed: (r.isPressed || o) && !i,
		isFocused: c,
		isFocusVisible: l,
		isDisabled: e.isDisabled || !1,
		isPending: i ?? !1
	}, m = Vn({
		...e,
		values: p,
		defaultClassName: "react-aria-Button"
	}), h = jn(a.id), g = jn(), _ = a["aria-labelledby"];
	i && (_ ? _ = `${_} ${g}` : a["aria-label"] && (_ = `${h} ${g}`));
	let y = v(i);
	f(() => {
		let e = { "aria-labelledby": _ || h };
		(!y.current && c && i || y.current && c && !i) && cc(e, "assertive"), y.current = i;
	}, [
		i,
		c,
		_,
		h
	]);
	let b = io(e, { global: !0 });
	return delete b.onClick, /*#__PURE__*/ t.createElement(K.button, {
		...G(b, m, a, s, u),
		type: a.type === "submit" && i ? "button" : a.type,
		id: h,
		ref: n,
		"aria-labelledby": _,
		slot: e.slot || void 0,
		"aria-disabled": i ? "true" : a["aria-disabled"],
		"data-disabled": e.isDisabled || void 0,
		"data-pressed": p.isPressed || void 0,
		"data-hovered": d || void 0,
		"data-focused": c || void 0,
		"data-pending": i || void 0,
		"data-focus-visible": l || void 0
	}, /*#__PURE__*/ t.createElement(ac.Provider, { value: { id: g } }, m.children));
}), mc = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function hc(e, t) {
	if (t) {
		for (let t in e) t.startsWith("on") && !mc.test(t) && (e[t] = void 0);
		e.href = void 0, e.target = void 0;
	}
	return e;
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Text.mjs
var gc = /*#__PURE__*/ a({});
//#endregion
//#region node_modules/react-aria/dist/private/utils/useUpdateEffect.mjs
function _c(e, t) {
	let n = v(!0), r = v(null), i = Ci(e);
	f(() => (n.current = !0, () => {
		n.current = !1;
	}), []), f(() => {
		let e = r.current;
		n.current ? n.current = !1 : (!e || t.some((t, n) => !Object.is(t, e[n]))) && i(), r.current = t;
	}, t);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/isScrollable.mjs
function vc(e, t) {
	if (!e) return !1;
	let n = window.getComputedStyle(e), r = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
	return e === r && n.overflow !== "hidden" && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/getScrollParent.mjs
function yc(e, t) {
	let n = e;
	for (vc(n, t) && (n = n.parentElement); n && !vc(n, t);) n = n.parentElement;
	return n || document.scrollingElement || document.documentElement;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/getScrollParents.mjs
function bc(e, t) {
	let n = [], r = document.scrollingElement || document.documentElement;
	for (; e && (vc(e, t) && n.push(e), e !== r);) e = e.parentElement;
	return n;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/scrollIntoView.mjs
function xc(e, t, n = {}) {
	let { block: r = "nearest", inline: i = "nearest" } = n;
	if (e === t) return;
	let a = e.scrollTop, o = e.scrollLeft, s = t.getBoundingClientRect(), c = e.getBoundingClientRect(), l = window.getComputedStyle(t), u = window.getComputedStyle(e), d = document.scrollingElement || document.documentElement, f = e === d, p = e === d ? 0 : c.top, m = e === d ? e.clientHeight : c.bottom, h = e === d ? 0 : c.left, g = e === d ? e.clientWidth : c.right, _ = parseFloat(l.scrollMarginTop) || 0, v = parseFloat(l.scrollMarginBottom) || 0, y = parseFloat(l.scrollMarginLeft) || 0, b = parseFloat(l.scrollMarginRight) || 0, x = parseFloat(u.scrollPaddingTop) || 0, S = parseFloat(u.scrollPaddingBottom) || 0, C = parseFloat(u.scrollPaddingLeft) || 0, w = parseFloat(u.scrollPaddingRight) || 0, T = parseFloat(u.borderTopWidth) || 0, E = parseFloat(u.borderBottomWidth) || 0, D = parseFloat(u.borderLeftWidth) || 0, O = parseFloat(u.borderRightWidth) || 0, k = s.top - _, A = s.bottom + v, j = s.left - y, M = s.right + b, N = e === d ? 0 : D + O, P = e === d ? 0 : T + E, F = e === d ? 0 : e.offsetWidth - e.clientWidth - N, I = e === d ? 0 : e.offsetHeight - e.clientHeight - P, L = p + (f ? 0 : T) + x, R = m - (f ? 0 : E) - S - I, z = h + (f ? 0 : D) + C, ee = g - (f ? 0 : O) - w;
	u.direction === "rtl" && !Nr() ? z += F : ee -= F;
	let B = k < L || A > R, te = j < z || M > ee;
	if (B && r === "start") a += k - L;
	else if (B && r === "center") a += (k + A) / 2 - (L + R) / 2;
	else if (B && r === "end") a += A - R;
	else if (B && r === "nearest") {
		let e = k - L, t = A - R;
		a += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (te && i === "start") o += j - z;
	else if (te && i === "center") o += (j + M) / 2 - (z + ee) / 2;
	else if (te && i === "end") o += M - ee;
	else if (te && i === "nearest") {
		let e = j - z, t = M - ee;
		o += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (process.env.NODE_ENV === "test") {
		e.scrollLeft = o, e.scrollTop = a;
		return;
	}
	e.scrollTo({
		left: o,
		top: a
	});
}
function Sc(e, t = {}) {
	let { containingElement: n } = t;
	if (e && e.isConnected) {
		let t = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(t).overflow !== "hidden") {
			let { left: t, top: r } = e.getBoundingClientRect();
			e?.scrollIntoView?.({ block: "nearest" });
			let { left: i, top: a } = e.getBoundingClientRect();
			(Math.abs(t - i) > 1 || Math.abs(r - a) > 1) && (n?.scrollIntoView?.({
				block: "center",
				inline: "center"
			}), e.scrollIntoView?.({ block: "nearest" }));
		} else {
			let { left: t, top: r } = e.getBoundingClientRect(), i = bc(e, !0);
			for (let t of i) xc(t, e);
			let { left: a, top: o } = e.getBoundingClientRect();
			if (Math.abs(t - a) > 1 || Math.abs(r - o) > 1) {
				i = n ? bc(n, !0) : [];
				for (let e of i) xc(e, n, {
					block: "center",
					inline: "center"
				});
				for (let t of bc(e, !0)) xc(t, e);
			}
		}
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useDescription.mjs
var Cc = 0, wc = /* @__PURE__ */ new Map();
function Tc(e) {
	let [t, n] = y();
	return W(() => {
		if (!e) return;
		let t = wc.get(e);
		if (t) n(t.element.id);
		else {
			let r = `react-aria-description-${Cc++}`;
			n(r);
			let i = document.createElement("div");
			i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
				refCount: 0,
				element: i
			}, wc.set(e, t);
		}
		return t.refCount++, () => {
			t && --t.refCount === 0 && (t.element.remove(), wc.delete(e));
		};
	}, [e]), { "aria-describedby": e ? t : void 0 };
}
//#endregion
//#region node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var Ec = {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap"
};
function Dc(e = {}) {
	let { style: t, isFocusable: n } = e, [r, i] = y(!1), { focusWithinProps: a } = Io({
		isDisabled: !n,
		onFocusWithinChange: (e) => i(e)
	}), o = g(() => r ? t : t ? {
		...Ec,
		...t
	} : Ec, [r]);
	return { visuallyHiddenProps: {
		...a,
		style: o
	} };
}
function Oc(e) {
	let { children: n, elementType: r = "div", isFocusable: i, style: a, ...o } = e, { visuallyHiddenProps: s } = Dc(e);
	return /*#__PURE__*/ t.createElement(r, G(o, s), n);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/FieldError.mjs
var kc = /*#__PURE__*/ a(null), Ac = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valueMissing: !1,
	valid: !0
}, jc = {
	...Ac,
	customError: !0,
	valid: !1
}, Mc = {
	isInvalid: !1,
	validationDetails: Ac,
	validationErrors: []
}, Nc = a({}), Pc = "__reactAriaFormValidationState";
function Fc(e) {
	if (e.__reactAriaFormValidationState) {
		let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[Pc];
		return {
			realtimeValidation: t,
			displayValidation: n,
			updateValidation: r,
			resetValidation: i,
			commitValidation: a
		};
	}
	return Ic(e);
}
function Ic(e) {
	let { isInvalid: t, validationState: n, name: r, value: i, builtinValidation: a, validate: o, validationBehavior: s = "aria" } = e;
	n && (t ||= n === "invalid");
	let c = t === void 0 ? null : {
		isInvalid: t,
		validationErrors: [],
		validationDetails: jc
	}, l = g(() => !o || i == null ? null : zc(Rc(o, i)), [o, i]);
	a?.validationDetails.valid && (a = void 0);
	let u = d(Nc), p = g(() => r ? Array.isArray(r) ? r.flatMap((e) => Lc(u[e])) : Lc(u[r]) : [], [u, r]), [m, h] = y(u), [_, b] = y(!1);
	u !== m && (h(u), b(!1));
	let x = g(() => zc(_ ? [] : p), [_, p]), S = v(Mc), [C, w] = y(Mc), T = v(Mc), E = () => {
		if (!D) return;
		O(!1);
		let e = l || a || S.current;
		Bc(e, T.current) || (T.current = e, w(e));
	}, [D, O] = y(!1);
	return f(E), {
		realtimeValidation: c || x || l || a || Mc,
		displayValidation: s === "native" ? c || x || C : c || x || l || a || C,
		updateValidation(e) {
			s === "aria" && !Bc(C, e) ? w(e) : S.current = e;
		},
		resetValidation() {
			let e = Mc;
			Bc(e, T.current) || (T.current = e, w(e)), s === "native" && O(!1), b(!0);
		},
		commitValidation() {
			s === "native" && O(!0), b(!0);
		}
	};
}
function Lc(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function Rc(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		if (n && typeof n != "boolean") return Lc(n);
	}
	return [];
}
function zc(e) {
	return e.length ? {
		isInvalid: !0,
		validationErrors: e,
		validationDetails: jc
	} : null;
}
function Bc(e, t) {
	return e === t ? !0 : !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Form.mjs
var Vc = /*#__PURE__*/ a(null);
//#endregion
//#region node_modules/react-aria/dist/private/label/useField.mjs
function Hc(e) {
	let { description: t, errorMessage: n, isInvalid: r, validationState: i } = e, { labelProps: a, fieldProps: o } = Ps(e), s = Nn([
		!!t,
		!!n,
		r,
		i
	]), c = Nn([
		!!t,
		!!n,
		r,
		i
	]);
	return o = G(o, { "aria-describedby": [
		s,
		c,
		e["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 }), {
		labelProps: a,
		fieldProps: o,
		descriptionProps: { id: s },
		errorMessageProps: { id: c }
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useFormReset.mjs
function Uc(e, t, n) {
	let r = Ci((e) => {
		n && !e.defaultPrevented && n(t);
	});
	f(() => {
		let t = e?.current?.form;
		return t?.addEventListener("reset", r), () => {
			t?.removeEventListener("reset", r);
		};
	}, [e]);
}
//#endregion
//#region node_modules/react-aria/dist/private/form/useFormValidation.mjs
function Wc(e, t, n) {
	let { validationBehavior: r, focus: i } = e;
	W(() => {
		if (r === "native" && n?.current && !n.current.disabled) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
			n.current.setCustomValidity(e), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(Kc(n.current));
		}
	});
	let a = v(!1), o = Ci(() => {
		a.current || t.resetValidation();
	}), s = Ci((e) => {
		t.displayValidation.isInvalid || t.commitValidation();
		let r = n?.current?.form;
		!e.defaultPrevented && n && r && qc(r) === n.current && (i ? i() : n.current?.focus(), mi("keyboard")), e.preventDefault();
	}), c = Ci(() => {
		t.commitValidation();
	});
	f(() => {
		let e = n?.current;
		if (!e) return;
		let t = e.form, r = t?.reset;
		return t && (t.reset = () => {
			a.current = !window.event || window.event.type === "message" && Y(window.event) instanceof MessagePort, r?.call(t), a.current = !1;
		}), e.addEventListener("invalid", s), e.addEventListener("change", c), t?.addEventListener("reset", o), () => {
			e.removeEventListener("invalid", s), e.removeEventListener("change", c), t?.removeEventListener("reset", o), t && (t.reset = r);
		};
	}, [n, r]);
}
function Gc(e) {
	let t = e.validity;
	return {
		badInput: t.badInput,
		customError: t.customError,
		patternMismatch: t.patternMismatch,
		rangeOverflow: t.rangeOverflow,
		rangeUnderflow: t.rangeUnderflow,
		stepMismatch: t.stepMismatch,
		tooLong: t.tooLong,
		tooShort: t.tooShort,
		typeMismatch: t.typeMismatch,
		valueMissing: t.valueMissing,
		valid: t.valid
	};
}
function Kc(e) {
	return {
		isInvalid: !e.validity.valid,
		validationDetails: Gc(e),
		validationErrors: e.validationMessage ? [e.validationMessage] : []
	};
}
function qc(e) {
	for (let t = 0; t < e.elements.length; t++) {
		let n = e.elements[t];
		if (n.validity?.valid === !1) return n;
	}
	return null;
}
//#endregion
//#region node_modules/react-stately/dist/private/toggle/useToggleState.mjs
function Jc(e = {}) {
	let { isReadOnly: t } = e, [n, r] = Zi(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = y(n);
	function a(e) {
		t || r(e);
	}
	function o() {
		t || r(!n);
	}
	return {
		isSelected: n,
		defaultSelected: e.defaultSelected ?? i,
		setSelected: a,
		toggle: o
	};
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Checkbox.mjs
var Yc = /*#__PURE__*/ a(null), Xc = /*#__PURE__*/ a(null), Zc = /*#__PURE__*/ a({}), Qc = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, Zc);
	let { isDisabled: r, isInvalid: i, isReadOnly: a, onHoverStart: o, onHoverChange: s, onHoverEnd: c, ...l } = e;
	r ??= !!e["aria-disabled"] && e["aria-disabled"] !== "false", i ??= !!e["aria-invalid"] && e["aria-invalid"] !== "false";
	let { hoverProps: u, isHovered: d } = Uo({
		onHoverStart: o,
		onHoverChange: s,
		onHoverEnd: c,
		isDisabled: r
	}), { isFocused: f, isFocusVisible: p, focusProps: m } = Lo({ within: !0 }), h = Vn({
		...e,
		values: {
			isHovered: d,
			isFocusWithin: f,
			isFocusVisible: p,
			isDisabled: r,
			isInvalid: i
		},
		defaultClassName: "react-aria-Group"
	});
	return /*#__PURE__*/ t.createElement(K.div, {
		...G(l, m, u),
		...h,
		ref: n,
		role: e.role ?? "group",
		slot: e.slot ?? void 0,
		"data-focus-within": f || void 0,
		"data-hovered": d || void 0,
		"data-focus-visible": p || void 0,
		"data-disabled": r || void 0,
		"data-invalid": i || void 0,
		"data-readonly": a || void 0
	}, h.children);
}), $c = /*#__PURE__*/ a({}), el = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, tl = /*#__PURE__*/ Ea(function(e, n) {
	[e, n] = Un(e, n, $c);
	let { hoverProps: r, isHovered: i } = Uo({
		...e,
		isDisabled: e.disabled
	}), { isFocused: a, isFocusVisible: o, focusProps: s } = Lo({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), c = !!e["aria-invalid"] && e["aria-invalid"] !== "false", l = Vn({
		...e,
		values: {
			isHovered: i,
			isFocused: a,
			isFocusVisible: o,
			isDisabled: e.disabled || !1,
			isInvalid: c
		},
		defaultClassName: "react-aria-Input"
	});
	return /*#__PURE__*/ t.createElement(K.input, {
		...G(el(e), s, r),
		...l,
		ref: n,
		"data-focused": a || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": i || void 0,
		"data-focus-visible": o || void 0,
		"data-invalid": c || void 0
	});
});
//#endregion
//#region node_modules/react-aria/dist/private/textfield/useTextField.mjs
function nl(e, n) {
	let { inputElementType: r = "input", isDisabled: i = !1, isRequired: a = !1, isReadOnly: o = !1, type: s = "text", validationBehavior: c = "aria" } = e, [l, u] = Zi(e.value, e.defaultValue || "", e.onChange), { focusableProps: d } = Ca(e, n), f = Fc({
		...e,
		value: l
	}), { isInvalid: p, validationErrors: m, validationDetails: h } = f.displayValidation, { labelProps: g, fieldProps: _, descriptionProps: v, errorMessageProps: b } = Hc({
		...e,
		isInvalid: p,
		errorMessage: e.errorMessage || m
	}), x = io(e, { labelable: !0 }), S = {
		type: s,
		pattern: e.pattern
	}, [C] = y(l);
	return Uc(n, e.defaultValue ?? C, u), Wc(e, f, n), {
		labelProps: g,
		inputProps: G(x, r === "input" ? S : void 0, {
			disabled: i,
			readOnly: o,
			required: a && c === "native",
			"aria-required": a && c === "aria" || void 0,
			"aria-invalid": p || void 0,
			"aria-errormessage": e["aria-errormessage"],
			"aria-activedescendant": e["aria-activedescendant"],
			"aria-autocomplete": e["aria-autocomplete"],
			"aria-haspopup": e["aria-haspopup"],
			"aria-controls": e["aria-controls"],
			value: l,
			onChange: (e) => u(Y(e).value),
			autoComplete: e.autoComplete,
			autoCapitalize: e.autoCapitalize,
			maxLength: e.maxLength,
			minLength: e.minLength,
			name: e.name,
			form: e.form,
			placeholder: e.placeholder,
			inputMode: e.inputMode,
			autoCorrect: e.autoCorrect,
			spellCheck: e.spellCheck,
			[parseInt(t.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
			onCopy: e.onCopy,
			onCut: e.onCut,
			onPaste: e.onPaste,
			onCompositionEnd: e.onCompositionEnd,
			onCompositionStart: e.onCompositionStart,
			onCompositionUpdate: e.onCompositionUpdate,
			onSelect: e.onSelect,
			onBeforeInput: e.onBeforeInput,
			onInput: e.onInput,
			...d,
			..._
		}),
		descriptionProps: v,
		errorMessageProps: b,
		isInvalid: p,
		validationErrors: m,
		validationDetails: h
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/textfield/useFormattedTextField.mjs
function rl() {
	return typeof window < "u" && window.InputEvent && typeof InputEvent.prototype.getTargetRanges == "function";
}
function il(e, t, n) {
	let r = Ci((e) => {
		let r = n.current;
		if (!r) return;
		let i = null;
		switch (e.inputType) {
			case "historyUndo":
			case "historyRedo": return;
			case "insertLineBreak": return;
			case "deleteContent":
			case "deleteByCut":
			case "deleteByDrag":
				i = r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case "deleteContentForward":
				i = r.selectionEnd === r.selectionStart ? r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd + 1) : r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case "deleteContentBackward":
				i = r.selectionEnd === r.selectionStart ? r.value.slice(0, r.selectionStart - 1) + r.value.slice(r.selectionStart) : r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case "deleteSoftLineBackward":
			case "deleteHardLineBackward":
				i = r.value.slice(r.selectionStart);
				break;
			default:
				e.data != null && (i = r.value.slice(0, r.selectionStart) + e.data + r.value.slice(r.selectionEnd));
				break;
		}
		(i == null || !t.validate(i)) && e.preventDefault();
	});
	f(() => {
		if (!rl() || !n.current) return;
		let e = n.current;
		return e.addEventListener("beforeinput", r, !1), () => {
			e.removeEventListener("beforeinput", r, !1);
		};
	}, [n]);
	let i = rl() ? null : (e) => {
		let n = Y(e).value.slice(0, Y(e).selectionStart) + e.data + Y(e).value.slice(Y(e).selectionEnd);
		t.validate(n) || e.preventDefault();
	}, { labelProps: a, inputProps: o, descriptionProps: s, errorMessageProps: c, ...l } = nl(e, n), u = v(null);
	return {
		inputProps: G(o, {
			onBeforeInput: i,
			onCompositionStart() {
				let { value: e, selectionStart: t, selectionEnd: r } = n.current;
				u.current = {
					value: e,
					selectionStart: t,
					selectionEnd: r
				};
			},
			onCompositionEnd() {
				if (n.current && !t.validate(n.current.value)) {
					let { value: e, selectionStart: r, selectionEnd: i } = u.current;
					n.current.value = e, n.current.setSelectionRange(r, i), t.setInputValue(e);
				}
			}
		}),
		labelProps: a,
		descriptionProps: s,
		errorMessageProps: c,
		...l
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useScrollWheel.mjs
function al(e, t) {
	let { onScroll: n, isDisabled: r } = e, i = u((e) => {
		e.ctrlKey || (e.preventDefault(), e.stopPropagation(), n && n({
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}));
	}, [n]);
	wi(t, "wheel", r ? void 0 : i);
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/ar-AE.mjs
var ol = {};
ol = { Empty: "فارغ" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/bg-BG.mjs
var sl = {};
sl = { Empty: "Изпразни" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/cs-CZ.mjs
var cl = {};
cl = { Empty: "Prázdné" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/da-DK.mjs
var ll = {};
ll = { Empty: "Tom" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/de-DE.mjs
var ul = {};
ul = { Empty: "Leer" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/el-GR.mjs
var dl = {};
dl = { Empty: "Άδειο" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/en-US.mjs
var fl = {};
fl = { Empty: "Empty" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/es-ES.mjs
var pl = {};
pl = { Empty: "Vacío" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/et-EE.mjs
var ml = {};
ml = { Empty: "Tühjenda" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/fi-FI.mjs
var hl = {};
hl = { Empty: "Tyhjä" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/fr-FR.mjs
var gl = {};
gl = { Empty: "Vide" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/he-IL.mjs
var _l = {};
_l = { Empty: "ריק" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/hr-HR.mjs
var vl = {};
vl = { Empty: "Prazno" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/hu-HU.mjs
var yl = {};
yl = { Empty: "Üres" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/it-IT.mjs
var bl = {};
bl = { Empty: "Vuoto" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/ja-JP.mjs
var xl = {};
xl = { Empty: "空" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/ko-KR.mjs
var Sl = {};
Sl = { Empty: "비어 있음" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/lt-LT.mjs
var Cl = {};
Cl = { Empty: "Tuščias" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/lv-LV.mjs
var wl = {};
wl = { Empty: "Tukšs" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/nb-NO.mjs
var Tl = {};
Tl = { Empty: "Tom" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/nl-NL.mjs
var El = {};
El = { Empty: "Leeg" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/pl-PL.mjs
var Dl = {};
Dl = { Empty: "Pusty" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/pt-BR.mjs
var Ol = {};
Ol = { Empty: "Vazio" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/pt-PT.mjs
var kl = {};
kl = { Empty: "Vazio" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/ro-RO.mjs
var Al = {};
Al = { Empty: "Gol" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/ru-RU.mjs
var jl = {};
jl = { Empty: "Не заполнено" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/sk-SK.mjs
var Ml = {};
Ml = { Empty: "Prázdne" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/sl-SI.mjs
var Nl = {};
Nl = { Empty: "Prazen" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/sr-SP.mjs
var Pl = {};
Pl = { Empty: "Prazno" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/sv-SE.mjs
var Fl = {};
Fl = { Empty: "Tomt" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/tr-TR.mjs
var Il = {};
Il = { Empty: "Boş" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/uk-UA.mjs
var Ll = {};
Ll = { Empty: "Пусто" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/zh-CN.mjs
var Rl = {};
Rl = { Empty: "空" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/spinbutton/zh-TW.mjs
var zl = {};
zl = { Empty: "空白" };
//#endregion
//#region node_modules/react-aria/dist/private/spinbutton/intlStrings.mjs
var Bl = {};
Bl = {
	"ar-AE": ol,
	"bg-BG": sl,
	"cs-CZ": cl,
	"da-DK": ll,
	"de-DE": ul,
	"el-GR": dl,
	"en-US": fl,
	"es-ES": pl,
	"et-EE": ml,
	"fi-FI": hl,
	"fr-FR": gl,
	"he-IL": _l,
	"hr-HR": vl,
	"hu-HU": yl,
	"it-IT": bl,
	"ja-JP": xl,
	"ko-KR": Sl,
	"lt-LT": Cl,
	"lv-LV": wl,
	"nb-NO": Tl,
	"nl-NL": El,
	"pl-PL": Dl,
	"pt-BR": Ol,
	"pt-PT": kl,
	"ro-RO": Al,
	"ru-RU": jl,
	"sk-SK": Ml,
	"sl-SI": Nl,
	"sr-SP": Pl,
	"sv-SE": Fl,
	"tr-TR": Il,
	"uk-UA": Ll,
	"zh-CN": Rl,
	"zh-TW": zl
};
//#endregion
//#region node_modules/react-aria/dist/private/spinbutton/useSpinButton.mjs
function Vl(e) {
	return e && e.__esModule ? e.default : e;
}
var Hl = () => {};
function Ul(e) {
	let t = v(void 0), { value: n, textValue: r, minValue: i, maxValue: a, isDisabled: o, isReadOnly: s, isRequired: c, onIncrement: l, onIncrementPage: d, onDecrement: p, onDecrementPage: m, onDecrementToMin: h, onIncrementToMax: g } = e, _ = Yi(Vl(Bl), "@react-aria/spinbutton"), b = v(!1), x = u(() => {
		clearTimeout(t.current), b.current = !1;
	}, []), S = Ci(() => {
		x();
	});
	f(() => () => S(), []);
	let C = (e) => {
		if (!(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || s || e.nativeEvent.isComposing)) switch (e.key) {
			case "PageUp": if (d) {
				e.preventDefault(), d?.();
				break;
			}
			case "ArrowUp":
			case "Up":
				l && (e.preventDefault(), l?.());
				break;
			case "PageDown": if (m) {
				e.preventDefault(), m?.();
				break;
			}
			case "ArrowDown":
			case "Down":
				p && (e.preventDefault(), p?.());
				break;
			case "Home":
				h && (e.preventDefault(), h?.());
				break;
			case "End":
				g && (e.preventDefault(), g?.());
				break;
		}
	}, w = v(!1), T = () => {
		w.current = !0;
	}, E = () => {
		w.current = !1;
	}, D = r === "" ? _.format("Empty") : (r || `${n}`).replace("-", "−");
	f(() => {
		w.current && (lc("assertive"), cc(D, "assertive"));
	}, [D]);
	let O = u(() => {
		x();
	}, [x]), k = Ci(l ?? Hl), A = Ci(p ?? Hl), j = Ci(() => {
		(a === void 0 || isNaN(a) || n === void 0 || isNaN(n) || n < a) && (k(), M(60));
	}), M = Ci((e) => {
		S(), b.current = !0, t.current = window.setTimeout(j, e);
	}), N = Ci(() => {
		(i === void 0 || isNaN(i) || n === void 0 || isNaN(n) || n > i) && (A(), P(60));
	}), P = Ci((e) => {
		S(), b.current = !0, t.current = window.setTimeout(N, e);
	}), F = (e) => {
		e.preventDefault();
	}, { addGlobalListener: I, removeAllGlobalListeners: L } = ho(), R = v(!1), [z, ee] = y(null);
	f(() => {
		z === "touch" ? M(600) : z ? M(400) : z || S();
	}, [z]);
	let [B, te] = y(null);
	return f(() => {
		B === "touch" ? P(600) : B ? P(400) : B || S();
	}, [B]), {
		spinButtonProps: {
			role: "spinbutton",
			"aria-valuenow": n !== void 0 && !isNaN(n) ? n : void 0,
			"aria-valuetext": D,
			"aria-valuemin": i,
			"aria-valuemax": a,
			"aria-disabled": o || void 0,
			"aria-readonly": s || void 0,
			"aria-required": c || void 0,
			onKeyDown: C,
			onFocus: T,
			onBlur: E
		},
		incrementButtonProps: {
			onPressStart: (e) => {
				x(), e.pointerType === "touch" ? (I(window, "pointercancel", O, { capture: !0 }), R.current = !1, ee("touch")) : (l?.(), ee("mouse")), I(window, "contextmenu", F);
			},
			onPressUp: (e) => {
				x(), e.pointerType === "touch" && (R.current = !0), L(), ee(null);
			},
			onPressEnd: (e) => {
				x(), e.pointerType === "touch" && !b.current && R.current && l?.(), R.current = !1, ee(null);
			},
			onFocus: T,
			onBlur: E
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				x(), e.pointerType === "touch" ? (I(window, "pointercancel", O, { capture: !0 }), R.current = !1, te("touch")) : (p?.(), te("mouse"));
			},
			onPressUp: (e) => {
				x(), e.pointerType === "touch" && (R.current = !0), L(), te(null);
			},
			onPressEnd: (e) => {
				x(), e.pointerType === "touch" && !b.current && R.current && p?.(), R.current = !1, te(null);
			},
			onFocus: T,
			onBlur: E
		}
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/ar-AE.mjs
var Wl = {};
Wl = {
	decrease: (e) => `\u{62E}\u{641}\u{636} ${e.fieldLabel}`,
	increase: (e) => `\u{632}\u{64A}\u{627}\u{62F}\u{629} ${e.fieldLabel}`,
	numberField: "حقل رقمي"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/bg-BG.mjs
var Gl = {};
Gl = {
	decrease: (e) => `\u{41D}\u{430}\u{43C}\u{430}\u{43B}\u{44F}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{441}\u{438}\u{43B}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	numberField: "Номер на полето"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/cs-CZ.mjs
var Kl = {};
Kl = {
	decrease: (e) => `Sn\xed\u{17E}it ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}it ${e.fieldLabel}`,
	numberField: "Číselné pole"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/da-DK.mjs
var ql = {};
ql = {
	decrease: (e) => `Reducer ${e.fieldLabel}`,
	increase: (e) => `\xd8g ${e.fieldLabel}`,
	numberField: "Talfelt"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/de-DE.mjs
var Jl = {};
Jl = {
	decrease: (e) => `${e.fieldLabel} verringern`,
	increase: (e) => `${e.fieldLabel} erh\xf6hen`,
	numberField: "Nummernfeld"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/el-GR.mjs
var Yl = {};
Yl = {
	decrease: (e) => `\u{39C}\u{3B5}\u{3AF}\u{3C9}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	increase: (e) => `\u{391}\u{3CD}\u{3BE}\u{3B7}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	numberField: "Πεδίο αριθμού"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/en-US.mjs
var Xl = {};
Xl = {
	decrease: (e) => `Decrease ${e.fieldLabel}`,
	increase: (e) => `Increase ${e.fieldLabel}`,
	numberField: "Number field"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/es-ES.mjs
var Zl = {};
Zl = {
	decrease: (e) => `Reducir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: "Campo de número"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/et-EE.mjs
var Ql = {};
Ql = {
	decrease: (e) => `V\xe4henda ${e.fieldLabel}`,
	increase: (e) => `Suurenda ${e.fieldLabel}`,
	numberField: "Numbri väli"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/fi-FI.mjs
var $l = {};
$l = {
	decrease: (e) => `V\xe4henn\xe4 ${e.fieldLabel}`,
	increase: (e) => `Lis\xe4\xe4 ${e.fieldLabel}`,
	numberField: "Numerokenttä"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/fr-FR.mjs
var eu = {};
eu = {
	decrease: (e) => `Diminuer ${e.fieldLabel}`,
	increase: (e) => `Augmenter ${e.fieldLabel}`,
	numberField: "Champ de nombre"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/he-IL.mjs
var tu = {};
tu = {
	decrease: (e) => `\u{5D4}\u{5E7}\u{5D8}\u{5DF} ${e.fieldLabel}`,
	increase: (e) => `\u{5D4}\u{5D2}\u{5D3}\u{5DC} ${e.fieldLabel}`,
	numberField: "שדה מספר"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/hr-HR.mjs
var nu = {};
nu = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: "Polje broja"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/hu-HU.mjs
var ru = {};
ru = {
	decrease: (e) => `${e.fieldLabel} cs\xf6kkent\xe9se`,
	increase: (e) => `${e.fieldLabel} n\xf6vel\xe9se`,
	numberField: "Számmező"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/it-IT.mjs
var iu = {};
iu = {
	decrease: (e) => `Riduci ${e.fieldLabel}`,
	increase: (e) => `Aumenta ${e.fieldLabel}`,
	numberField: "Campo numero"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/ja-JP.mjs
var au = {};
au = {
	decrease: (e) => `${e.fieldLabel}\u{3092}\u{7E2E}\u{5C0F}`,
	increase: (e) => `${e.fieldLabel}\u{3092}\u{62E1}\u{5927}`,
	numberField: "数値フィールド"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/ko-KR.mjs
var ou = {};
ou = {
	decrease: (e) => `${e.fieldLabel} \u{AC10}\u{C18C}`,
	increase: (e) => `${e.fieldLabel} \u{C99D}\u{AC00}`,
	numberField: "번호 필드"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/lt-LT.mjs
var su = {};
su = {
	decrease: (e) => `Suma\u{17E}inti ${e.fieldLabel}`,
	increase: (e) => `Padidinti ${e.fieldLabel}`,
	numberField: "Numerio laukas"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/lv-LV.mjs
var cu = {};
cu = {
	decrease: (e) => `Samazin\u{101}\u{161}ana ${e.fieldLabel}`,
	increase: (e) => `Palielin\u{101}\u{161}ana ${e.fieldLabel}`,
	numberField: "Skaitļu lauks"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/nb-NO.mjs
var lu = {};
lu = {
	decrease: (e) => `Reduser ${e.fieldLabel}`,
	increase: (e) => `\xd8k ${e.fieldLabel}`,
	numberField: "Tallfelt"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/nl-NL.mjs
var uu = {};
uu = {
	decrease: (e) => `${e.fieldLabel} verlagen`,
	increase: (e) => `${e.fieldLabel} verhogen`,
	numberField: "Getalveld"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/pl-PL.mjs
var du = {};
du = {
	decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
	increase: (e) => `Zwi\u{119}ksz ${e.fieldLabel}`,
	numberField: "Pole numeru"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/pt-BR.mjs
var fu = {};
fu = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: "Campo de número"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/pt-PT.mjs
var pu = {};
pu = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: "Campo numérico"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/ro-RO.mjs
var mu = {};
mu = {
	decrease: (e) => `Sc\u{103}dere ${e.fieldLabel}`,
	increase: (e) => `Cre\u{219}tere ${e.fieldLabel}`,
	numberField: "Câmp numeric"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/ru-RU.mjs
var hu = {};
hu = {
	decrease: (e) => `\u{423}\u{43C}\u{435}\u{43D}\u{44C}\u{448}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	numberField: "Числовое поле"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/sk-SK.mjs
var gu = {};
gu = {
	decrease: (e) => `Zn\xed\u{17E}i\u{165} ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}i\u{165} ${e.fieldLabel}`,
	numberField: "Číselné pole"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/sl-SI.mjs
var _u = {};
_u = {
	decrease: (e) => `Upadati ${e.fieldLabel}`,
	increase: (e) => `Pove\u{10D}ajte ${e.fieldLabel}`,
	numberField: "Številčno polje"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/sr-SP.mjs
var vu = {};
vu = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: "Polje broja"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/sv-SE.mjs
var yu = {};
yu = {
	decrease: (e) => `Minska ${e.fieldLabel}`,
	increase: (e) => `\xd6ka ${e.fieldLabel}`,
	numberField: "Nummerfält"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/tr-TR.mjs
var bu = {};
bu = {
	decrease: (e) => `${e.fieldLabel} azalt`,
	increase: (e) => `${e.fieldLabel} artt\u{131}r`,
	numberField: "Sayı alanı"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/uk-UA.mjs
var xu = {};
xu = {
	decrease: (e) => `\u{417}\u{43C}\u{435}\u{43D}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	increase: (e) => `\u{417}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	numberField: "Поле номера"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/zh-CN.mjs
var Su = {};
Su = {
	decrease: (e) => `\u{964D}\u{4F4E} ${e.fieldLabel}`,
	increase: (e) => `\u{63D0}\u{9AD8} ${e.fieldLabel}`,
	numberField: "数字字段"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/numberfield/zh-TW.mjs
var Cu = {};
Cu = {
	decrease: (e) => `\u{7E2E}\u{5C0F} ${e.fieldLabel}`,
	increase: (e) => `\u{653E}\u{5927} ${e.fieldLabel}`,
	numberField: "數字欄位"
};
//#endregion
//#region node_modules/react-aria/dist/private/numberfield/intlStrings.mjs
var wu = {};
wu = {
	"ar-AE": Wl,
	"bg-BG": Gl,
	"cs-CZ": Kl,
	"da-DK": ql,
	"de-DE": Jl,
	"el-GR": Yl,
	"en-US": Xl,
	"es-ES": Zl,
	"et-EE": Ql,
	"fi-FI": $l,
	"fr-FR": eu,
	"he-IL": tu,
	"hr-HR": nu,
	"hu-HU": ru,
	"it-IT": iu,
	"ja-JP": au,
	"ko-KR": ou,
	"lt-LT": su,
	"lv-LV": cu,
	"nb-NO": lu,
	"nl-NL": uu,
	"pl-PL": du,
	"pt-BR": fu,
	"pt-PT": pu,
	"ro-RO": mu,
	"ru-RU": hu,
	"sk-SK": gu,
	"sl-SI": _u,
	"sr-SP": vu,
	"sv-SE": yu,
	"tr-TR": bu,
	"uk-UA": xu,
	"zh-CN": Su,
	"zh-TW": Cu
};
//#endregion
//#region node_modules/react-aria/dist/private/numberfield/useNumberField.mjs
function Tu(e) {
	return e && e.__esModule ? e.default : e;
}
function Eu(e, t, n) {
	let { id: r, decrementAriaLabel: i, incrementAriaLabel: a, isDisabled: o, isReadOnly: s, isRequired: c, minValue: l, maxValue: d, autoFocus: f, label: p, formatOptions: m, onBlur: h = () => {}, onFocus: _, onFocusChange: v, onKeyDown: b, onKeyUp: x, description: S, errorMessage: C, isWheelDisabled: w, ...T } = e, { increment: E, incrementToMax: D, decrement: k, decrementToMin: A, numberValue: j, inputValue: M, commit: N, commitValidation: P } = t, F = Yi(Tu(wu), "@react-aria/numberfield"), I = u(() => {
		let e = n.current?.value ?? "";
		O(() => {
			N();
		}), n.current?.value !== e && cc(n.current?.value ?? "", "assertive");
	}, [N, n]), L = jn(r), { focusProps: R } = _a({ onBlur() {
		I();
	} }), z = ec(m), ee = g(() => z.resolvedOptions(), [z]), B = ec({
		...m,
		currencySign: void 0
	}), { spinButtonProps: te, incrementButtonProps: ne, decrementButtonProps: re } = Ul({
		isDisabled: o,
		isReadOnly: s,
		isRequired: c,
		maxValue: d,
		minValue: l,
		onIncrement: E,
		onIncrementToMax: D,
		onDecrement: k,
		onDecrementToMin: A,
		value: j,
		textValue: g(() => isNaN(j) ? "" : B.format(j), [B, j])
	}), [V, ie] = y(!1), { focusWithinProps: ae } = Io({
		isDisabled: o,
		onFocusWithinChange: ie
	});
	al({
		onScroll: u((e) => {
			Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? E() : e.deltaY < 0 && k());
		}, [k, E]),
		isDisabled: w || o || s || !V
	}, n);
	let oe = (ee.maximumFractionDigits ?? 0) > 0, se = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, ce = "numeric";
	jr() ? se ? ce = "text" : oe && (ce = "decimal") : Lr() && (se ? ce = "numeric" : oe && (ce = "decimal"));
	let le = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, ue = (t) => {
		e.onPaste?.(t);
		let n = Y(t);
		n && (n.selectionEnd ?? -1) - (n.selectionStart ?? 0) === n.value.length && (t.preventDefault(), N(t.clipboardData?.getData?.("text/plain")?.trim() ?? ""));
	}, de = io(e), H = u((e) => {
		e.nativeEvent.isComposing || (e.key === "Enter" ? (O(() => {
			N();
		}), P()) : e.continuePropagation());
	}, [N, P]), { isInvalid: fe, validationErrors: pe, validationDetails: me } = t.displayValidation, { labelProps: he, inputProps: ge, descriptionProps: U, errorMessageProps: _e } = il({
		...T,
		...de,
		name: void 0,
		form: void 0,
		label: p,
		autoFocus: f,
		isDisabled: o,
		isReadOnly: s,
		isRequired: c,
		validate: void 0,
		[Pc]: t,
		value: M,
		defaultValue: "!",
		autoComplete: "off",
		"aria-label": e["aria-label"] || void 0,
		"aria-labelledby": e["aria-labelledby"] || void 0,
		id: L,
		type: "text",
		inputMode: ce,
		onChange: le,
		onBlur: h,
		onFocus: _,
		onFocusChange: v,
		onKeyDown: g(() => pn(H, b), [H, b]),
		onKeyUp: x,
		onPaste: ue,
		description: S,
		errorMessage: C
	}, t, n);
	Uc(n, t.defaultNumberValue, t.setNumberValue), Ou(t, e.validationBehavior, e.commitBehavior, n, t.minValue, t.maxValue, e.step, t.numberValue);
	let ve = G(te, R, ge, {
		role: null,
		"aria-roledescription": Nr() ? null : F.format("numberField"),
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null,
		autoCorrect: "off",
		spellCheck: "false"
	});
	e.validationBehavior === "native" && (ve["aria-required"] = void 0);
	let ye = (e) => {
		tr() !== n.current && (e.pointerType === "mouse" ? n.current?.focus() : e.target.focus());
	}, be = e["aria-label"] || (typeof e.label == "string" ? e.label : ""), xe;
	be || (xe = e.label == null ? e["aria-labelledby"] : he.id);
	let Se = jn(), Ce = jn(), we = G(ne, {
		"aria-label": a || F.format("increase", { fieldLabel: be }).trim(),
		id: xe && !a ? Se : null,
		"aria-labelledby": xe && !a ? `${Se} ${xe}` : null,
		"aria-controls": L,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canIncrement,
		onPressStart: ye
	}), Te = G(re, {
		"aria-label": i || F.format("decrease", { fieldLabel: be }).trim(),
		id: xe && !i ? Ce : null,
		"aria-labelledby": xe && !i ? `${Ce} ${xe}` : null,
		"aria-controls": L,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canDecrement,
		onPressStart: ye
	});
	return {
		groupProps: {
			...ae,
			role: "group",
			"aria-disabled": o,
			"aria-invalid": fe ? "true" : void 0
		},
		labelProps: he,
		inputProps: ve,
		incrementButtonProps: we,
		decrementButtonProps: Te,
		errorMessageProps: _e,
		descriptionProps: U,
		isInvalid: fe,
		validationErrors: pe,
		validationDetails: me
	};
}
var Du = null;
function Ou(e, t, n, r, i, a, o, s) {
	W(() => {
		let c = r.current;
		if (n !== "validate" || e.realtimeValidation.isInvalid || !c || c.disabled || (!Du && typeof document < "u" && (Du = document.createElement("input"), Du.type = "number"), !Du)) return;
		Du.min = i != null && !isNaN(i) ? String(i) : "", Du.max = a != null && !isNaN(a) ? String(a) : "", Du.step = o != null && !isNaN(o) ? String(o) : "", Du.value = s != null && !isNaN(s) ? String(s) : "";
		let l = c.validity.valid && Du.validity.valid, u = c.validationMessage || Du.validationMessage, d = {
			isInvalid: !l,
			validationErrors: u ? [u] : [],
			validationDetails: {
				badInput: c.validity.badInput,
				customError: c.validity.customError,
				patternMismatch: c.validity.patternMismatch,
				rangeOverflow: Du.validity.rangeOverflow,
				rangeUnderflow: Du.validity.rangeUnderflow,
				stepMismatch: Du.validity.stepMismatch,
				tooLong: c.validity.tooLong,
				tooShort: c.validity.tooShort,
				typeMismatch: c.validity.typeMismatch,
				valueMissing: c.validity.valueMissing,
				valid: l
			}
		};
		e.updateValidation(d), t === "native" && !Du.validity.valid && c.setCustomValidity(Du.validationMessage);
	});
}
//#endregion
//#region node_modules/react-stately/dist/private/numberfield/useNumberFieldState.mjs
function ku(e) {
	let { minValue: t, maxValue: n, step: r, formatOptions: i, value: a, defaultValue: o = NaN, onChange: s, locale: c, isDisabled: l, isReadOnly: d, commitBehavior: f = "snap" } = e;
	a === null && (a = NaN);
	let p = u((e) => r === void 0 || isNaN(r) ? tc(e, t, n) : rc(e, t, n, r), [
		r,
		t,
		n
	]);
	a !== void 0 && !isNaN(a) && f === "snap" && (a = p(a)), !isNaN(o) && f === "snap" && (o = p(o));
	let [m, h] = Zi(a, isNaN(o) ? NaN : o, s), [_] = y(m), [v, b] = y(() => isNaN(m) ? "" : new zs(c, i).format(m)), x = g(() => new Ws(c, i), [c, i]), S = g(() => x.getNumberingSystem(v), [x, v]), C = g(() => new zs(c, {
		...i,
		numberingSystem: S
	}), [
		c,
		i,
		S
	]), w = g(() => C.resolvedOptions(), [C]), T = u((e) => isNaN(e) || e === null ? "" : C.format(e), [C]), E = Fc({
		...e,
		value: m
	}), D = r !== void 0 && !isNaN(r) ? r : 1;
	w.style === "percent" && (r === void 0 || isNaN(r)) && (D = .01);
	let [O, k] = y(m), [A, j] = y(c), [M, N] = y(i);
	(!Object.is(m, O) || c !== A || !Au(i, M)) && (b(T(m)), k(m), j(c), N(i));
	let P = g(() => x.parse(v), [x, v]), F = (e) => {
		let t = e === void 0 ? v : e, n = P;
		if (e !== void 0 && (n = x.parse(t)), !t.length) {
			h(NaN), b(a === void 0 ? "" : T(m));
			return;
		}
		if (isNaN(n)) {
			b(T(m));
			return;
		}
		let r = f === "snap" ? p(n) : n;
		r = x.parse(T(r));
		let i = r !== m;
		h(r), b(T(a === void 0 ? r : m)), i && E.commitValidation();
	}, I = (e, r = 0) => {
		let i = P;
		if (isNaN(i)) return rc(isNaN(r) ? 0 : r, t, n, D);
		{
			let r = rc(i, t, n, D);
			return e === "+" && r > i || e === "-" && r < i ? r : rc(ju(e, i, D), t, n, D);
		}
	}, L = () => {
		let e = I("+", t);
		e === m && b(T(e)), h(e), E.commitValidation();
	}, R = () => {
		let e = I("-", n);
		e === m && b(T(e)), h(e), E.commitValidation();
	}, z = () => {
		n != null && (h(rc(n, t, n, D)), E.commitValidation());
	}, ee = () => {
		t != null && (h(t), E.commitValidation());
	}, B = g(() => !l && !d && (isNaN(P) || n === void 0 || isNaN(n) || rc(P, t, n, D) > P || ju("+", P, D) <= n), [
		l,
		d,
		t,
		n,
		D,
		P
	]), te = g(() => !l && !d && (isNaN(P) || t === void 0 || isNaN(t) || rc(P, t, n, D) < P || ju("-", P, D) >= t), [
		l,
		d,
		t,
		n,
		D,
		P
	]), ne = (e) => x.isValidPartialNumber(e, t, n);
	return {
		...E,
		validate: ne,
		increment: L,
		incrementToMax: z,
		decrement: R,
		decrementToMin: ee,
		canIncrement: B,
		canDecrement: te,
		minValue: t,
		maxValue: n,
		numberValue: P,
		defaultNumberValue: isNaN(o) ? _ : o,
		setNumberValue: h,
		setInputValue: b,
		inputValue: v,
		commit: F
	};
}
function Au(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
function ju(e, t, n) {
	let r = e === "+" ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split("."), a = n.toString().split("."), o = i[1] && i[1].length || 0, s = a[1] && a[1].length || 0, c = 10 ** Math.max(o, s);
		t = Math.round(t * c), n = Math.round(n * c), r = e === "+" ? t + n : t - n, r /= c;
	}
	return r;
}
//#endregion
//#region node_modules/react-aria-components/dist/private/DragAndDrop.mjs
var Mu = /*#__PURE__*/ a({}), Nu = /*#__PURE__*/ a(null), Pu = /*#__PURE__*/ s(function(e, n) {
	let { render: r } = d(Nu);
	return /*#__PURE__*/ t.createElement(t.Fragment, null, r(e, n));
});
function Fu(e, n) {
	let r = e?.renderDropIndicator, i = e?.isVirtualDragging?.(), a = u((e) => {
		if (i || n?.isDropTarget(e)) return r ? r(e) : /*#__PURE__*/ t.createElement(Pu, { target: e });
	}, [
		n?.target,
		i,
		r
	]);
	return e?.useDropIndicator ? a : void 0;
}
function Iu(e, t, n) {
	let r = e.focusedKey, i = null;
	if (t?.isVirtualDragging?.() && n?.target?.type === "item" && (i = n.target.key, n.target.dropPosition === "after")) {
		let e = n.collection.getKeyAfter(i), t = null;
		if (e != null) {
			let r = n.collection.getItem(i)?.level ?? 0;
			for (; e != null;) {
				let i = n.collection.getItem(e);
				if (!i) break;
				if (i.type !== "item") {
					e = n.collection.getKeyAfter(e);
					continue;
				}
				if ((i.level ?? 0) <= r) break;
				t = e, e = n.collection.getKeyAfter(e);
			}
		}
		i = e ?? t ?? i;
	}
	return g(() => new Set([r, i].filter((e) => e != null)), [r, i]);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Header.mjs
var Lu = /*#__PURE__*/ a({}), Ru = /*#__PURE__*/ a(null);
function zu(e) {
	let n = v({});
	return /*#__PURE__*/ t.createElement(Ru.Provider, { value: n }, e.children);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var Bu = /*#__PURE__*/ a({ isSelected: !1 }), Vu = /*#__PURE__*/ a({});
(class extends ea {
	static {
		this.type = "separator";
	}
	filter(e, t) {
		let n = t.getItem(this.prevKey);
		if (n && n.type !== "separator") {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
});
//#endregion
//#region node_modules/react-aria/dist/private/listbox/utils.mjs
var Hu = /* @__PURE__ */ new WeakMap();
function Uu(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Wu(e, t) {
	let n = Hu.get(e);
	if (!n) throw Error("Unknown list");
	return `${n.id}-option-${Uu(t)}`;
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/shadowdom/ShadowTreeWalker.mjs
var Gu = class {
	constructor(e, t, n, r) {
		this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (e) => {
			if (e.nodeType === Node.ELEMENT_NODE) {
				let t = e.shadowRoot;
				if (t) {
					let e = this._doc.createTreeWalker(t, this.whatToShow, { acceptNode: this._acceptNode });
					return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
				} else if (typeof this.filter == "function") return this.filter(e);
				else if (this.filter?.acceptNode) return this.filter.acceptNode(e);
				else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
			}
			return NodeFilter.FILTER_SKIP;
		}, this._doc = e, this.root = t, this.filter = r ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
		let i = t.shadowRoot;
		if (i) {
			let e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
			this._walkerStack.unshift(e);
		}
	}
	get currentNode() {
		return this._currentNode;
	}
	set currentNode(e) {
		if (!J(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
		let t = [], n = e, r = e;
		for (this._currentNode = e; n && n !== this.root;) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			let e = n, i = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
			t.push(i), i.currentNode = r, this._currentSetFor.add(i), n = r = e.host;
		} else n = n.parentNode;
		let i = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
		t.push(i), i.currentNode = r, this._currentSetFor.add(i), this._walkerStack = t;
	}
	get doc() {
		return this._doc;
	}
	firstChild() {
		let e = this.currentNode, t = this.nextNode();
		return J(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null);
	}
	lastChild() {
		let e = this._walkerStack[0].lastChild();
		return e && (this.currentNode = e), e;
	}
	nextNode() {
		let e = this._walkerStack[0].nextNode();
		if (e) {
			if (e.shadowRoot) {
				let t;
				if (typeof this.filter == "function" ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
				let n = this.nextNode();
				return n && (this.currentNode = n), n;
			}
			return e && (this.currentNode = e), e;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.nextNode();
			return e && (this.currentNode = e), e;
		} else return null;
	}
	previousNode() {
		let e = this._walkerStack[0];
		if (e.currentNode === e.root) {
			if (this._currentSetFor.has(e)) if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
				this._walkerStack.shift();
				let e = this.previousNode();
				return e && (this.currentNode = e), e;
			} else return null;
			return null;
		}
		let t = e.previousNode();
		if (t) {
			if (t.shadowRoot) {
				let e;
				if (typeof this.filter == "function" ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
				let n = this.lastChild();
				return n && (this.currentNode = n), n;
			}
			return t && (this.currentNode = t), t;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.previousNode();
			return e && (this.currentNode = e), e;
		} else return null;
	}
	nextSibling() {
		return null;
	}
	previousSibling() {
		return null;
	}
	parentNode() {
		return null;
	}
};
function Ku(e, t, n, r) {
	return er() ? new Gu(e, t, n, r) : e.createTreeWalker(t, n, r);
}
//#endregion
//#region node_modules/react-aria/dist/private/focus/FocusScope.mjs
var qu = /*#__PURE__*/ t.createContext(null), Ju = "react-aria-focus-scope-restore", Yu = null;
function Xu(e) {
	let { children: n, contain: r, restoreFocus: i, autoFocus: a } = e, o = v(null), s = v(null), c = v([]), { parentNode: l } = d(qu) || {}, u = g(() => new vd({ scopeRef: c }), [c]);
	W(() => {
		let e = l || yd.root;
		if (yd.getTreeNode(e.scopeRef) && Yu && !sd(Yu, e.scopeRef)) {
			let t = yd.getTreeNode(Yu);
			t && (e = t);
		}
		e.addChild(u), yd.addNode(u);
	}, [u, l]), W(() => {
		let e = yd.getTreeNode(c);
		e && (e.contain = !!r);
	}, [r]), W(() => {
		let e = o.current?.nextSibling, t = [], n = (e) => e.stopPropagation();
		for (; e && e !== s.current;) t.push(e), e.addEventListener(Ju, n), e = e.nextSibling;
		return c.current = t, () => {
			for (let e of t) e.removeEventListener(Ju, n);
		};
	}, [n]), fd(c, i, r), nd(c, r), md(c, i, r), dd(c, a), f(() => {
		let e = tr(q(c.current ? c.current[0] : void 0)), t = null;
		if (id(e, c.current)) {
			for (let n of yd.traverse()) n.scopeRef && id(e, n.scopeRef.current) && (t = n);
			t === yd.getTreeNode(c) && (Yu = t.scopeRef);
		}
	}, [c]), W(() => () => {
		let e = yd.getTreeNode(c)?.parent?.scopeRef ?? null;
		(c === Yu || sd(c, Yu)) && (!e || yd.getTreeNode(e)) && (Yu = e), yd.removeTreeNode(c);
	}, [c]);
	let p = g(() => Zu(c), []), m = g(() => ({
		focusManager: p,
		parentNode: u
	}), [u, p]);
	return /*#__PURE__*/ t.createElement(qu.Provider, { value: m }, /*#__PURE__*/ t.createElement("span", {
		"data-focus-scope-start": !0,
		hidden: !0,
		ref: o
	}), n, /*#__PURE__*/ t.createElement("span", {
		"data-focus-scope-end": !0,
		hidden: !0,
		ref: s
	}));
}
function Zu(e) {
	return {
		focusNext(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || tr(q(n[0] ?? void 0)), c = n[0].previousElementSibling, l = gd(Qu(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = id(s, n) ? s : c;
			let u = l.nextNode();
			return !u && a && (l.currentNode = c, u = l.nextNode()), u && cd(u, !0), u;
		},
		focusPrevious(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || tr(q(n[0] ?? void 0)), c = n[n.length - 1].nextElementSibling, l = gd(Qu(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = id(s, n) ? s : c;
			let u = l.previousNode();
			return !u && a && (l.currentNode = c, u = l.previousNode()), u && cd(u, !0), u;
		},
		focusFirst(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = gd(Qu(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[0].previousElementSibling;
			let o = a.nextNode();
			return o && cd(o, !0), o;
		},
		focusLast(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = gd(Qu(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[n.length - 1].nextElementSibling;
			let o = a.previousNode();
			return o && cd(o, !0), o;
		}
	};
}
function Qu(e) {
	return e[0].parentElement;
}
function $u(e) {
	let t = yd.getTreeNode(Yu);
	for (; t && t.scopeRef !== e;) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function ed(e) {
	if (!e.form) return Array.from(q(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((e) => !e.form);
	let t = e.form.elements.namedItem(e.name), n = Xn(e);
	return t instanceof n.RadioNodeList ? Array.from(t).filter((e) => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : [];
}
function td(e) {
	if (e.checked) return !0;
	let t = ed(e);
	return t.length > 0 && !t.some((e) => e.checked);
}
function nd(e, t) {
	let n = v(void 0), r = v(void 0);
	W(() => {
		let i = e.current;
		if (!t) {
			r.current &&= (cancelAnimationFrame(r.current), void 0);
			return;
		}
		let a = q(i ? i[0] : void 0), o = (t) => {
			if (t.key !== "Tab" || t.altKey || t.ctrlKey || t.metaKey || !$u(e) || t.isComposing) return;
			let n = tr(a), r = e.current;
			if (!r || !id(n, r)) return;
			let i = gd(Qu(r), { tabbable: !0 }, r);
			if (!n) return;
			i.currentNode = n;
			let o = t.shiftKey ? i.previousNode() : i.nextNode();
			o ||= (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), o && (cd(o, !0), o instanceof Xn(o).HTMLInputElement && o.select());
		}, s = (t) => {
			(!Yu || sd(Yu, e)) && id(Y(t), e.current) ? (Yu = e, n.current = Y(t)) : $u(e) && !ad(Y(t), e) ? n.current ? n.current.focus() : Yu && Yu.current && ud(Yu.current) : $u(e) && (n.current = Y(t));
		}, c = (t) => {
			r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
				let r = pi(), i = (r === "virtual" || r === null) && Lr() && Ir(), o = tr(a);
				if (!i && o && $u(e) && !ad(o, e)) {
					Yu = e;
					let r = Y(t);
					r && r.isConnected ? (n.current = r, n.current?.focus()) : Yu.current && ud(Yu.current);
				}
			});
		};
		return a.addEventListener("keydown", o, !1), a.addEventListener("focusin", s, !1), i?.forEach((e) => e.addEventListener("focusin", s, !1)), i?.forEach((e) => e.addEventListener("focusout", c, !1)), () => {
			a.removeEventListener("keydown", o, !1), a.removeEventListener("focusin", s, !1), i?.forEach((e) => e.removeEventListener("focusin", s, !1)), i?.forEach((e) => e.removeEventListener("focusout", c, !1));
		};
	}, [e, t]), W(() => () => {
		r.current && cancelAnimationFrame(r.current);
	}, [r]);
}
function rd(e) {
	return ad(e);
}
function id(e, t) {
	return !e || !t ? !1 : t.some((t) => J(t, e));
}
function ad(e, t = null) {
	if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
	for (let { scopeRef: n } of yd.traverse(yd.getTreeNode(t))) if (n && id(e, n.current)) return !0;
	return !1;
}
function od(e) {
	return ad(e, Yu);
}
function sd(e, t) {
	let n = yd.getTreeNode(t)?.parent;
	for (; n;) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function cd(e, t = !1) {
	if (e != null && !t) try {
		ga(e);
	} catch {}
	else if (e != null) try {
		e.focus();
	} catch {}
}
function ld(e, t = !0) {
	let n = e[0].previousElementSibling, r = Qu(e), i = gd(r, { tabbable: t }, e);
	i.currentNode = n;
	let a = i.nextNode();
	return t && !a && (r = Qu(e), i = gd(r, { tabbable: !1 }, e), i.currentNode = n, a = i.nextNode()), a;
}
function ud(e, t = !0) {
	cd(ld(e, t));
}
function dd(e, n) {
	let r = t.useRef(n);
	f(() => {
		r.current && (Yu = e, !id(tr(q(e.current ? e.current[0] : void 0)), Yu.current) && e.current && ud(e.current)), r.current = !1;
	}, [e]);
}
function fd(e, t, n) {
	W(() => {
		if (t || n) return;
		let r = e.current, i = q(r ? r[0] : void 0), a = (t) => {
			let n = Y(t);
			id(n, e.current) ? Yu = e : rd(n) || (Yu = null);
		};
		return i.addEventListener("focusin", a, !1), r?.forEach((e) => e.addEventListener("focusin", a, !1)), () => {
			i.removeEventListener("focusin", a, !1), r?.forEach((e) => e.removeEventListener("focusin", a, !1));
		};
	}, [
		e,
		t,
		n
	]);
}
function pd(e) {
	let t = yd.getTreeNode(Yu);
	for (; t && t.scopeRef !== e;) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function md(e, t, n) {
	let r = v(typeof document < "u" ? tr(q(e.current ? e.current[0] : void 0)) : null);
	W(() => {
		let r = e.current, i = q(r ? r[0] : void 0);
		if (!t || n) return;
		let a = () => {
			(!Yu || sd(Yu, e)) && id(tr(i), e.current) && (Yu = e);
		};
		return i.addEventListener("focusin", a, !1), r?.forEach((e) => e.addEventListener("focusin", a, !1)), () => {
			i.removeEventListener("focusin", a, !1), r?.forEach((e) => e.removeEventListener("focusin", a, !1));
		};
	}, [e, n]), W(() => {
		let r = q(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = (t) => {
			if (t.key !== "Tab" || t.altKey || t.ctrlKey || t.metaKey || !$u(e) || t.isComposing) return;
			let n = r.activeElement;
			if (!ad(n, e) || !pd(e)) return;
			let i = yd.getTreeNode(e);
			if (!i) return;
			let a = i.nodeToRestore, o = gd(r.body, { tabbable: !0 });
			o.currentNode = n;
			let s = t.shiftKey ? o.previousNode() : o.nextNode();
			if ((!a || !a.isConnected || a === r.body) && (a = void 0, i.nodeToRestore = void 0), (!s || !ad(s, e)) && a) {
				o.currentNode = a;
				do
					s = t.shiftKey ? o.previousNode() : o.nextNode();
				while (ad(s, e));
				t.preventDefault(), t.stopPropagation(), s ? cd(s, !0) : rd(a) ? cd(a, !0) : n.blur();
			}
		};
		return n || r.addEventListener("keydown", i, !0), () => {
			n || r.removeEventListener("keydown", i, !0);
		};
	}, [
		e,
		t,
		n
	]), W(() => {
		let n = q(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = yd.getTreeNode(e);
		if (i) return i.nodeToRestore = r.current ?? void 0, () => {
			let r = yd.getTreeNode(e);
			if (!r) return;
			let i = r.nodeToRestore, a = tr(n);
			if (t && i && (a && ad(a, e) || a === n.body && pd(e))) {
				let t = yd.clone();
				requestAnimationFrame(() => {
					if (n.activeElement === n.body) {
						let n = t.getTreeNode(e);
						for (; n;) {
							if (n.nodeToRestore && n.nodeToRestore.isConnected) {
								hd(n.nodeToRestore);
								return;
							}
							n = n.parent;
						}
						for (n = t.getTreeNode(e); n;) {
							if (n.scopeRef && n.scopeRef.current && yd.getTreeNode(n.scopeRef)) {
								hd(ld(n.scopeRef.current, !0));
								return;
							}
							n = n.parent;
						}
					}
				});
			}
		};
	}, [e, t]);
}
function hd(e) {
	e.dispatchEvent(new CustomEvent(Ju, {
		bubbles: !0,
		cancelable: !0
	})) && cd(e);
}
function gd(e, t, n) {
	let r = t?.tabbable ? br : yr, i = q(e?.nodeType === Node.ELEMENT_NODE ? e : null), a = Ku(i, e || i, NodeFilter.SHOW_ELEMENT, { acceptNode(e) {
		return J(t?.from, e) || t?.tabbable && e.tagName === "INPUT" && e.getAttribute("type") === "radio" && (!td(e) || a.currentNode.tagName === "INPUT" && a.currentNode.type === "radio" && a.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : r(e) && (!n || id(e, n)) && (!t?.accept || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	return t?.from && (a.currentNode = t.from), a;
}
var _d = class e {
	constructor() {
		this.fastMap = /* @__PURE__ */ new Map(), this.root = new vd({ scopeRef: null }), this.fastMap.set(null, this.root);
	}
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(e) {
		return this.fastMap.get(e);
	}
	addTreeNode(e, t, n) {
		let r = this.fastMap.get(t ?? null);
		if (!r) return;
		let i = new vd({ scopeRef: e });
		r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n);
	}
	addNode(e) {
		this.fastMap.set(e.scopeRef, e);
	}
	removeTreeNode(e) {
		if (e === null) return;
		let t = this.fastMap.get(e);
		if (!t) return;
		let n = t.parent;
		for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && id(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
		let r = t.children;
		n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
	}
	*traverse(e = this.root) {
		if (e.scopeRef != null && (yield e), e.children.size > 0) for (let t of e.children) yield* this.traverse(t);
	}
	clone() {
		let t = new e();
		for (let e of this.traverse()) t.addTreeNode(e.scopeRef, e.parent?.scopeRef ?? null, e.nodeToRestore);
		return t;
	}
}, vd = class {
	constructor(e) {
		this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
	}
	addChild(e) {
		this.children.add(e), e.parent = this;
	}
	removeChild(e) {
		this.children.delete(e), e.parent = void 0;
	}
}, yd = new _d();
//#endregion
//#region node_modules/react-aria/dist/private/selection/utils.mjs
function bd(e) {
	return Pr() ? e.altKey : e.ctrlKey;
}
function xd(e, t) {
	let n = `[data-key="${CSS.escape(String(t))}"]`, r = e.current?.dataset.collection;
	return r && (n = `[data-collection="${CSS.escape(r)}"]${n}`), e.current?.querySelector(n);
}
var Sd = /* @__PURE__ */ new WeakMap();
function Cd(e) {
	let t = jn();
	return Sd.set(e, t), t;
}
function wd(e) {
	return Sd.get(e);
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useTypeSelect.mjs
var Td = 1e3;
function Ed(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, i = v({
		search: "",
		timeout: void 0
	}).current;
	return { typeSelectProps: { onKeyDownCapture: t.getKeyForSearch ? (e) => {
		let a = Dd(e.key);
		if (!(!a || e.ctrlKey || e.metaKey || !J(e.currentTarget, Y(e)) || i.search.length === 0 && a === " ")) {
			if (a === " " && i.search.trim().length > 0 && (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()), i.search += a, t.getKeyForSearch != null) {
				let e = t.getKeyForSearch(i.search, n.focusedKey);
				e ??= t.getKeyForSearch(i.search), e != null && (n.setFocusedKey(e), r && r(e));
			}
			clearTimeout(i.timeout), i.timeout = setTimeout(() => {
				i.search = "";
			}, Td);
		}
	} : void 0 } };
}
function Dd(e) {
	return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useUpdateLayoutEffect.mjs
function Od(e, t) {
	let n = v(!0), r = v(null);
	W(() => (n.current = !0, () => {
		n.current = !1;
	}), []), W(() => {
		n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t;
	}, t);
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs
function kd(e) {
	let { selectionManager: t, keyboardDelegate: n, ref: r, autoFocus: i = !1, shouldFocusWrap: a = !1, disallowEmptySelection: o = !1, disallowSelectAll: s = !1, escapeKeyBehavior: c = "clearSelection", selectOnFocus: l = t.selectionBehavior === "replace", disallowTypeAhead: u = !1, shouldUseVirtualFocus: d, allowsTabNavigation: p = !1, scrollRef: m = r, linkBehavior: h = "action" } = e, { direction: g } = Ii(), _ = Hr(), y = (e) => {
		if (e.altKey && e.key === "Tab" && e.preventDefault(), !r.current || !J(r.current, Y(e))) return;
		let i = (n, i) => {
			if (n != null) {
				if (t.isLink(n) && h === "selection" && l && !bd(e)) {
					O(() => {
						t.setFocusedKey(n, i);
					});
					let a = xd(r, n), o = t.getItemProps(n);
					a && _.open(a, e, o.href, o.routerOptions);
					return;
				}
				if (t.setFocusedKey(n, i), t.isLink(n) && h === "override") return;
				e.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(n) : l && !bd(e) && t.replaceSelection(n);
			}
		};
		switch (e.key) {
			case "ArrowDown":
				if (n.getKeyBelow) {
					let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyBelow?.(t.focusedKey);
					r == null && a && (r = n.getFirstKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r));
				}
				break;
			case "ArrowUp":
				if (n.getKeyAbove) {
					let r = t.focusedKey == null ? n.getLastKey?.() : n.getKeyAbove?.(t.focusedKey);
					r == null && a && (r = n.getLastKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r));
				}
				break;
			case "ArrowLeft":
				if (n.getKeyLeftOf) {
					let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyLeftOf?.(t.focusedKey);
					r == null && a && (r = g === "rtl" ? n.getFirstKey?.(t.focusedKey) : n.getLastKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r, g === "rtl" ? "first" : "last"));
				}
				break;
			case "ArrowRight":
				if (n.getKeyRightOf) {
					let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyRightOf?.(t.focusedKey);
					r == null && a && (r = g === "rtl" ? n.getLastKey?.(t.focusedKey) : n.getFirstKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r, g === "rtl" ? "last" : "first"));
				}
				break;
			case "Home":
				if (n.getFirstKey) {
					if (t.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let r = n.getFirstKey(t.focusedKey, yi(e));
					t.setFocusedKey(r), r != null && (yi(e) && e.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(r) : l && t.replaceSelection(r));
				}
				break;
			case "End":
				if (n.getLastKey) {
					if (t.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let r = n.getLastKey(t.focusedKey, yi(e));
					t.setFocusedKey(r), r != null && (yi(e) && e.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(r) : l && t.replaceSelection(r));
				}
				break;
			case "PageDown":
				if (n.getKeyPageBelow && t.focusedKey != null) {
					let r = n.getKeyPageBelow(t.focusedKey);
					r != null && (e.preventDefault(), i(r));
				}
				break;
			case "PageUp":
				if (n.getKeyPageAbove && t.focusedKey != null) {
					let r = n.getKeyPageAbove(t.focusedKey);
					r != null && (e.preventDefault(), i(r));
				}
				break;
			case "a":
				yi(e) && t.selectionMode === "multiple" && s !== !0 && (e.preventDefault(), t.selectAll());
				break;
			case "Escape":
				c === "clearSelection" && !o && t.selectedKeys.size !== 0 && (e.stopPropagation(), e.preventDefault(), t.clearSelection());
				break;
			case "Tab": if (!p) {
				if (e.shiftKey) r.current.focus();
				else {
					let e = gd(r.current, { tabbable: !0 }), t, n;
					do
						n = e.lastChild(), n && (t = n);
					while (n);
					let i = tr();
					t && (!nr(t) || i && !br(i)) && sr(t);
				}
				break;
			}
		}
	}, b = v({
		top: 0,
		left: 0
	});
	wi(m, "scroll", () => {
		b.current = {
			top: m.current?.scrollTop ?? 0,
			left: m.current?.scrollLeft ?? 0
		};
	});
	let x = (e) => {
		if (t.isFocused) {
			J(e.currentTarget, Y(e)) || t.setFocused(!1);
			return;
		}
		if (J(e.currentTarget, Y(e))) {
			if (t.setFocused(!0), t.focusedKey == null) {
				let r = (e) => {
					e != null && (t.setFocusedKey(e), l && !t.isSelected(e) && t.replaceSelection(e));
				}, i = e.relatedTarget;
				i && e.currentTarget.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_FOLLOWING ? r(t.lastSelectedKey ?? n.getLastKey?.()) : r(t.firstSelectedKey ?? n.getFirstKey?.());
			} else m.current && (m.current.scrollTop = b.current.top, m.current.scrollLeft = b.current.left);
			if (t.focusedKey != null && m.current) {
				let e = xd(r, t.focusedKey);
				e instanceof HTMLElement && (!nr(e) && !d && sr(e), pi() === "keyboard" && Sc(e, { containingElement: r.current }));
			}
		}
	}, S = (e) => {
		J(e.currentTarget, e.relatedTarget) || t.setFocused(!1);
	}, C = v(!1);
	wi(r, Yn, d ? (e) => {
		let { detail: n } = e;
		e.stopPropagation(), t.setFocused(!0), n?.focusStrategy === "first" && (C.current = !0);
	} : void 0), Od(() => {
		if (C.current) {
			let e = n.getFirstKey?.() ?? null;
			if (e == null) {
				let e = tr();
				rr(r.current), ar(e, null), t.collection.size > 0 && (C.current = !1);
			} else t.setFocusedKey(e), C.current = !1;
		}
	}, [t.collection]), Od(() => {
		t.collection.size > 0 && (C.current = !1);
	}, [t.focusedKey]), wi(r, Jn, d ? (e) => {
		e.stopPropagation(), t.setFocused(!1), e.detail?.clearFocusKey && t.setFocusedKey(null);
	} : void 0);
	let w = v(i), T = v(!1);
	f(() => {
		if (w.current) {
			let e = null;
			i === "first" && (e = n.getFirstKey?.() ?? null), i === "last" && (e = n.getLastKey?.() ?? null);
			let a = t.selectedKeys;
			if (a.size) {
				for (let n of a) if (t.canSelectItem(n)) {
					e = n;
					break;
				}
			}
			t.setFocused(!0), t.setFocusedKey(e), e == null && !d && r.current && ga(r.current), t.collection.size > 0 && (w.current = !1, T.current = !0);
		}
	});
	let E = v(t.focusedKey), D = v(null);
	f(() => {
		if (t.isFocused && t.focusedKey != null && (t.focusedKey !== E.current || T.current) && m.current && r.current) {
			let e = pi(), n = xd(r, t.focusedKey);
			if (!(n instanceof HTMLElement)) return;
			(e === "keyboard" || T.current) && (D.current && cancelAnimationFrame(D.current), D.current = requestAnimationFrame(() => {
				m.current && (xc(m.current, n), e !== "virtual" && Sc(n, { containingElement: r.current }));
			}));
		}
		!d && t.isFocused && t.focusedKey == null && E.current != null && r.current && ga(r.current), E.current = t.focusedKey, T.current = !1;
	}), f(() => () => {
		D.current && cancelAnimationFrame(D.current);
	}, []), wi(r, "react-aria-focus-scope-restore", (e) => {
		e.preventDefault(), t.setFocused(!0);
	});
	let k = {
		onKeyDown: y,
		onFocus: x,
		onBlur: S,
		onMouseDown(e) {
			m.current === Y(e) && e.preventDefault();
		}
	}, { typeSelectProps: A } = Ed({
		keyboardDelegate: n,
		selectionManager: t
	});
	u || (k = G(A, k));
	let j;
	d || (j = t.focusedKey == null ? 0 : -1);
	let M = Cd(t.collection);
	return { collectionProps: G(k, {
		tabIndex: j,
		"data-collection": M
	}) };
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/DOMLayoutDelegate.mjs
var Ad = class {
	constructor(e) {
		this.ref = e;
	}
	getItemRect(e) {
		let t = this.ref.current;
		if (!t) return null;
		let n = e == null ? null : xd(this.ref, e);
		if (!n) return null;
		let r = t.getBoundingClientRect(), i = n.getBoundingClientRect();
		return {
			x: i.left - r.left - t.clientLeft + t.scrollLeft,
			y: i.top - r.top - t.clientTop + t.scrollTop,
			width: i.width,
			height: i.height
		};
	}
	getContentSize() {
		let e = this.ref.current;
		return {
			width: e?.scrollWidth ?? 0,
			height: e?.scrollHeight ?? 0
		};
	}
	getVisibleRect() {
		let e = this.ref.current;
		return {
			x: e?.scrollLeft ?? 0,
			y: e?.scrollTop ?? 0,
			width: e?.clientWidth ?? 0,
			height: e?.clientHeight ?? 0
		};
	}
}, jd = class {
	constructor(...e) {
		if (e.length === 1) {
			let t = e[0];
			this.collection = t.collection, this.ref = t.ref, this.collator = t.collator, this.disabledKeys = t.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = t.disabledBehavior || "all", this.orientation = t.orientation || "vertical", this.direction = t.direction, this.layout = t.layout || "stack", this.layoutDelegate = t.layoutDelegate || new Ad(t.ref);
		} else this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new Ad(this.ref);
		this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
	}
	isDisabled(e) {
		return this.disabledBehavior === "all" && (e.props?.isDisabled || this.disabledKeys.has(e.key)) && e.props?.disabledBehavior !== "selection";
	}
	findNextNonDisabled(e, t, n = !1) {
		let r = e;
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (e?.type === "item" && (n || !this.isDisabled(e))) return r;
			r = t(r);
		}
		return null;
	}
	getNextKey(e, t) {
		let n = e;
		return n = this.collection.getKeyAfter(n), this.findNextNonDisabled(n, (e) => this.collection.getKeyAfter(e), t?.includeDisabled);
	}
	getPreviousKey(e, t) {
		let n = e;
		return n = this.collection.getKeyBefore(n), this.findNextNonDisabled(n, (e) => this.collection.getKeyBefore(e), t?.includeDisabled);
	}
	findKey(e, t, n) {
		let r = e, i = this.layoutDelegate.getItemRect(r);
		if (!i || r == null) return null;
		let a = i;
		do {
			if (r = t(r), r == null) break;
			i = this.layoutDelegate.getItemRect(r);
		} while (i && n(a, i) && r != null);
		return r;
	}
	isSameRow(e, t) {
		return e.y === t.y || e.x !== t.x;
	}
	isSameColumn(e, t) {
		return e.x === t.x || e.y !== t.y;
	}
	getKeyBelow(e, t) {
		return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (e) => this.getNextKey(e, t), this.isSameRow) : this.getNextKey(e, t);
	}
	getKeyAbove(e, t) {
		return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (e) => this.getPreviousKey(e, t), this.isSameRow) : this.getPreviousKey(e, t);
	}
	getNextColumn(e, t, n) {
		return t ? this.getPreviousKey(e, n) : this.getNextKey(e, n);
	}
	getKeyRightOf(e, t) {
		let n = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
		return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (e) => this.layoutDelegate[n](e), t?.includeDisabled)) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "rtl", t) : this.findKey(e, (e) => this.getNextColumn(e, this.direction === "rtl", t), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "rtl", t) : null;
	}
	getKeyLeftOf(e, t) {
		let n = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
		return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (e) => this.layoutDelegate[n](e), t?.includeDisabled)) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "ltr", t) : this.findKey(e, (e) => this.getNextColumn(e, this.direction === "ltr", t), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "ltr", t) : null;
	}
	getFirstKey() {
		let e = this.collection.getFirstKey();
		return this.findNextNonDisabled(e, (e) => this.collection.getKeyAfter(e));
	}
	getLastKey() {
		let e = this.collection.getLastKey();
		return this.findNextNonDisabled(e, (e) => this.collection.getKeyBefore(e));
	}
	getKeyPageAbove(e) {
		let t = this.ref.current, n = this.layoutDelegate.getItemRect(e);
		if (!n) return null;
		if (t && !vc(t)) return this.getFirstKey();
		let r = e;
		if (this.orientation === "horizontal") {
			let e = Math.max(0, n.x + n.width - this.layoutDelegate.getVisibleRect().width);
			for (; n && n.x > e && r != null;) r = this.getKeyAbove(r), n = r == null ? null : this.layoutDelegate.getItemRect(r);
		} else {
			let e = Math.max(0, n.y + n.height - this.layoutDelegate.getVisibleRect().height);
			for (; n && n.y > e && r != null;) r = this.getKeyAbove(r), n = r == null ? null : this.layoutDelegate.getItemRect(r);
		}
		return r ?? this.getFirstKey();
	}
	getKeyPageBelow(e) {
		let t = this.ref.current, n = this.layoutDelegate.getItemRect(e);
		if (!n) return null;
		if (t && !vc(t)) return this.getLastKey();
		let r = e;
		if (this.orientation === "horizontal") {
			let e = Math.min(this.layoutDelegate.getContentSize().width, n.x - n.width + this.layoutDelegate.getVisibleRect().width);
			for (; n && n.x < e && r != null;) r = this.getKeyBelow(r), n = r == null ? null : this.layoutDelegate.getItemRect(r);
		} else {
			let e = Math.min(this.layoutDelegate.getContentSize().height, n.y - n.height + this.layoutDelegate.getVisibleRect().height);
			for (; n && n.y < e && r != null;) r = this.getKeyBelow(r), n = r == null ? null : this.layoutDelegate.getItemRect(r);
		}
		return r ?? this.getLastKey();
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let n = this.collection, r = t || this.getFirstKey();
		for (; r != null;) {
			let t = n.getItem(r);
			if (!t) return null;
			let i = t.textValue.slice(0, e.length);
			if (t.textValue && this.collator.compare(i, e) === 0) return r;
			r = this.getNextKey(r);
		}
		return null;
	}
}, Md = /* @__PURE__ */ new Map();
function Nd(e) {
	let { locale: t } = Ii(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (Md.has(n)) return Md.get(n);
	let r = new Intl.Collator(t, e);
	return Md.set(n, r), r;
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useSelectableList.mjs
function Pd(e) {
	let { selectionManager: t, collection: n, disabledKeys: r, ref: i, keyboardDelegate: a, layoutDelegate: o, orientation: s } = e, c = Nd({
		usage: "search",
		sensitivity: "base"
	}), l = t.disabledBehavior, u = g(() => a || new jd({
		collection: n,
		disabledKeys: r,
		disabledBehavior: l,
		ref: i,
		collator: c,
		layoutDelegate: o,
		orientation: s
	}), [
		a,
		o,
		n,
		r,
		i,
		c,
		l,
		s
	]), { collectionProps: d } = kd({
		...e,
		ref: i,
		selectionManager: t,
		keyboardDelegate: u
	});
	return { listProps: d };
}
//#endregion
//#region node_modules/react-aria/dist/private/listbox/useListBox.mjs
function Fd(e, t, n) {
	let r = io(e, { labelable: !0 }), i = e.selectionBehavior || "toggle", a = e.orientation || "vertical", o = e.linkBehavior || (i === "replace" ? "action" : "override");
	i === "toggle" && o === "action" && (o = "override");
	let { listProps: s } = Pd({
		...e,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: o
	}), { focusWithinProps: c } = Io({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), l = jn(e.id);
	Hu.set(t, {
		id: l,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: o,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: u, fieldProps: d } = Ps({
		...e,
		id: l,
		labelElementType: "span"
	});
	return {
		labelProps: u,
		listBoxProps: G(r, c, t.selectionManager.selectionMode === "multiple" ? { "aria-multiselectable": "true" } : {}, {
			role: "listbox",
			"aria-orientation": a,
			...G(d, s)
		})
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useLongPress.mjs
var Id = 500;
function Ld(e) {
	let { isDisabled: t, onLongPressStart: n, onLongPressEnd: r, onLongPress: i, threshold: a = Id, accessibilityDescription: o } = e, s = v(void 0), { addGlobalListener: c, removeGlobalListener: l } = ho(), { pressProps: u } = xo({
		isDisabled: t,
		onPressStart(e) {
			if (e.continuePropagation(), (e.pointerType === "mouse" || e.pointerType === "touch") && (n && n({
				...e,
				type: "longpressstart"
			}), s.current = setTimeout(() => {
				e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })), q(e.target).activeElement !== e.target && sr(e.target), i && i({
					...e,
					type: "longpress"
				}), s.current = void 0;
			}, a), e.pointerType === "touch")) {
				let t = (e) => {
					e.preventDefault();
				}, n = Xn(e.target);
				c(e.target, "contextmenu", t, { once: !0 }), c(n, "pointerup", () => {
					setTimeout(() => {
						l(e.target, "contextmenu", t);
					}, 30);
				}, { once: !0 });
			}
		},
		onPressEnd(e) {
			s.current && clearTimeout(s.current), r && (e.pointerType === "mouse" || e.pointerType === "touch") && r({
				...e,
				type: "longpressend"
			});
		}
	});
	return { longPressProps: G(u, Tc(i && !t ? o : void 0)) };
}
//#endregion
//#region node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
function Rd(e) {
	let { id: t, selectionManager: n, key: r, ref: i, shouldSelectOnPressUp: a, shouldUseVirtualFocus: o, focus: s, isDisabled: c, onAction: l, allowsDifferentPressOrigin: u, linkBehavior: d = "action" } = e, p = Hr();
	t = jn(t);
	let m = (e) => {
		if (e.pointerType === "keyboard" && bd(e)) n.toggleSelection(r);
		else {
			if (n.selectionMode === "none") return;
			if (n.isLink(r)) {
				if (d === "selection" && i.current) {
					let t = n.getItemProps(r);
					p.open(i.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
					return;
				} else if (d === "override" || d === "none") return;
			}
			n.selectionMode === "single" ? n.isSelected(r) && !n.disallowEmptySelection ? n.toggleSelection(r) : n.replaceSelection(r) : e && e.shiftKey ? n.extendSelection(r) : n.selectionBehavior === "toggle" || e && (yi(e) || e.pointerType === "touch" || e.pointerType === "virtual") ? n.toggleSelection(r) : n.replaceSelection(r);
		}
	};
	f(() => {
		r === n.focusedKey && n.isFocused && (o ? rr(i.current) : s ? s() : tr() !== i.current && i.current && ga(i.current));
	}, [
		i,
		r,
		n.focusedKey,
		n.childFocusStrategy,
		n.isFocused,
		o
	]), c ||= n.isDisabled(r);
	let h = {};
	!o && !c ? h = {
		tabIndex: r === n.focusedKey ? 0 : -1,
		onFocus(e) {
			Y(e) === i.current && n.setFocusedKey(r);
		}
	} : c && (h.onMouseDown = (e) => {
		e.preventDefault();
	}), f(() => {
		c && n.focusedKey === r && n.setFocusedKey(null);
	}, [
		n,
		c,
		r
	]);
	let g = n.isLink(r) && d === "override", _ = l && e.UNSTABLE_itemBehavior === "action", y = n.isLink(r) && d !== "selection" && d !== "none", b = !c && n.canSelectItem(r) && !g && !_, x = (l || y) && !c, S = x && (n.selectionBehavior === "replace" ? !b : !b || n.isEmpty), C = x && b && n.selectionBehavior === "replace", w = S || C, T = v(null), E = w && b, D = v(!1), O = v(!1), k = n.getItemProps(r), A = (e) => {
		l && (l(), i.current?.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }))), y && i.current && p.open(i.current, e, k.href, k.routerOptions);
	}, j = { ref: i };
	if (a ? (j.onPressStart = (e) => {
		T.current = e.pointerType, D.current = E, e.pointerType === "keyboard" && (!w || Bd(e.key)) && m(e);
	}, u ? (j.onPressUp = S ? void 0 : (e) => {
		e.pointerType === "mouse" && b && m(e);
	}, j.onPress = S ? A : (e) => {
		e.pointerType !== "keyboard" && e.pointerType !== "mouse" && b && m(e);
	}) : j.onPress = (e) => {
		if (S || C && e.pointerType !== "mouse") {
			if (e.pointerType === "keyboard" && !zd(e.key)) return;
			A(e);
		} else e.pointerType !== "keyboard" && b && m(e);
	}) : (j.onPressStart = (e) => {
		T.current = e.pointerType, D.current = E, O.current = S, b && (e.pointerType === "mouse" && !S || e.pointerType === "keyboard" && (!x || Bd(e.key))) && m(e);
	}, j.onPress = (e) => {
		(e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && w && zd(e.key) || e.pointerType === "mouse" && O.current) && (w ? A(e) : b && m(e));
	}), h["data-collection"] = wd(n.collection), h["data-key"] = r, j.preventFocusOnPress = o, o && (j = G(j, {
		onPressStart(e) {
			e.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(r));
		},
		onPress(e) {
			e.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(r));
		}
	})), k) for (let e of [
		"onPressStart",
		"onPressEnd",
		"onPressChange",
		"onPress",
		"onPressUp",
		"onClick"
	]) k[e] && (j[e] = pn(j[e], k[e]));
	let { pressProps: M, isPressed: N } = xo(j), P = C ? (e) => {
		T.current === "mouse" && (e.stopPropagation(), e.preventDefault(), A(e));
	} : void 0, { longPressProps: F } = Ld({
		isDisabled: !E,
		onLongPress(e) {
			e.pointerType === "touch" && (m(e), n.setSelectionBehavior("toggle"));
		}
	}), I = (e) => {
		T.current === "touch" && D.current && e.preventDefault();
	}, L = d !== "none" && n.isLink(r) ? (e) => {
		Wr.isOpening || e.preventDefault();
	} : void 0;
	return {
		itemProps: G(h, b || S || o && !c ? M : {}, E ? F : {}, {
			onDoubleClick: P,
			onDragStartCapture: I,
			onClick: L,
			id: t
		}, o ? { onMouseDown: (e) => e.preventDefault() } : void 0),
		isPressed: N,
		isSelected: n.isSelected(r),
		isFocused: n.isFocused && n.focusedKey === r,
		isDisabled: c,
		allowsSelection: b,
		hasAction: w
	};
}
function zd(e) {
	return e === "Enter";
}
function Bd(e) {
	return e === " ";
}
//#endregion
//#region node_modules/react-stately/dist/private/collections/getChildNodes.mjs
function Vd(e, t) {
	return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function Hd(e) {
	return Ud(e, 0);
}
function Ud(e, t) {
	if (t < 0) return;
	let n = 0;
	for (let r of e) {
		if (n === t) return r;
		n++;
	}
}
function Wd(e) {
	let t;
	for (let n of e) t = n;
	return t;
}
function Gd(e, t, n) {
	if (t.parentKey === n.parentKey) return t.index - n.index;
	let r = [...Kd(e, t), t], i = [...Kd(e, n), n], a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
	return a === -1 ? r.findIndex((e) => e === n) >= 0 ? 1 : (i.findIndex((e) => e === t), -1) : (t = r[a], n = i[a], t.index - n.index);
}
function Kd(e, t) {
	let n = [], r = t;
	for (; r?.parentKey != null;) r = e.getItem(r.parentKey), r && n.unshift(r);
	return n;
}
//#endregion
//#region node_modules/react-stately/dist/private/collections/getItemCount.mjs
var qd = /* @__PURE__ */ new WeakMap();
function Jd(e) {
	let t = qd.get(e);
	if (t != null) return t;
	let n = 0, r = (t) => {
		for (let i of t) i.type === "section" ? r(Vd(i, e)) : i.type === "item" && n++;
	};
	return r(e), qd.set(e, n), n;
}
//#endregion
//#region node_modules/react-aria/dist/private/listbox/useOption.mjs
function Yd(e, t, n) {
	let { key: r } = e, i = Hu.get(t), a = e.isDisabled ?? t.selectionManager.isDisabled(r), o = e.isSelected ?? t.selectionManager.isSelected(r), s = e.shouldSelectOnPressUp ?? i?.shouldSelectOnPressUp, c = e.shouldFocusOnHover ?? i?.shouldFocusOnHover, l = e.shouldUseVirtualFocus ?? i?.shouldUseVirtualFocus, u = e.isVirtualized ?? i?.isVirtualized, d = Nn(), f = Nn(), p = {
		role: "option",
		"aria-disabled": a || void 0,
		"aria-selected": t.selectionManager.selectionMode === "none" ? void 0 : o,
		"aria-label": e["aria-label"],
		"aria-labelledby": d,
		"aria-describedby": f
	}, m = t.collection.getItem(r);
	if (u) {
		let e = Number(m?.index);
		p["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, p["aria-setsize"] = Jd(t.collection);
	}
	let h = i?.onAction ? () => i?.onAction?.(r) : void 0, g = Wu(t, r), { itemProps: _, isPressed: v, isFocused: y, hasAction: b, allowsSelection: x } = Rd({
		selectionManager: t.selectionManager,
		key: r,
		ref: n,
		shouldSelectOnPressUp: s,
		allowsDifferentPressOrigin: s && c,
		isVirtualized: u,
		shouldUseVirtualFocus: l,
		isDisabled: a,
		onAction: h || m?.props?.onAction ? pn(m?.props?.onAction, h) : void 0,
		linkBehavior: i?.linkBehavior,
		UNSTABLE_itemBehavior: i?.UNSTABLE_itemBehavior,
		id: g
	}), { hoverProps: S } = Uo({
		isDisabled: a || !c,
		onHoverStart() {
			fi() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r));
		}
	}), C = io(m?.props);
	delete C.id;
	let w = Jr(m?.props);
	return {
		optionProps: {
			...p,
			...G(C, _, S, w),
			id: g
		},
		labelProps: { id: d },
		descriptionProps: { id: f },
		isFocused: y,
		isFocusVisible: y && t.selectionManager.isFocused && fi(),
		isSelected: o,
		isDisabled: a,
		isPressed: v,
		allowsSelection: x,
		hasAction: b
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/listbox/useListBoxSection.mjs
function Xd(e) {
	let { heading: t, "aria-label": n } = e, r = jn();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? {
			id: r,
			role: "presentation",
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: "group",
			"aria-label": n,
			"aria-labelledby": t ? r : void 0
		}
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/inertValue.mjs
function Zd(e) {
	let t = x.split(".");
	return parseInt(t[0], 10) >= 19 ? e : e ? "true" : void 0;
}
//#endregion
//#region node_modules/react-stately/dist/private/list/ListCollection.mjs
var Qd = class {
	constructor(e) {
		this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e;
		let t = (e) => {
			if (this.keyMap.set(e.key, e), e.childNodes && e.type === "section") for (let n of e.childNodes) t(n);
		};
		for (let n of e) t(n);
		let n = null, r = 0, i = 0;
		for (let [e, t] of this.keyMap) n ? (n.nextKey = e, t.prevKey = n.key) : (this.firstKey = e, t.prevKey = void 0), t.type === "item" && (t.index = r++), (t.type === "section" || t.type === "item") && i++, n = t, n.nextKey = void 0;
		this._size = i, this.lastKey = n?.key ?? null;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey ?? null : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey ?? null : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		return this.keyMap.get(e)?.childNodes || [];
	}
}, $d = class e extends Set {
	constructor(t, n, r) {
		super(t), t instanceof e ? (this.anchorKey = n ?? t.anchorKey, this.currentKey = r ?? t.currentKey) : (this.anchorKey = n ?? null, this.currentKey = r ?? null);
	}
};
//#endregion
//#region node_modules/react-stately/dist/private/selection/useMultipleSelectionState.mjs
function ef(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function tf(e) {
	let { selectionMode: t = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: r, selectionBehavior: i = "toggle", disabledBehavior: a = "all" } = e, o = v(!1), [, s] = y(!1), c = v(null), l = v(null), [, u] = y(null), [d, p] = Zi(g(() => nf(e.selectedKeys), [e.selectedKeys]), g(() => nf(e.defaultSelectedKeys, new $d()), [e.defaultSelectedKeys]), e.onSelectionChange), m = g(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), [h, _] = y(i);
	i === "replace" && h === "toggle" && typeof d == "object" && d.size === 0 && _("replace");
	let b = v(i);
	return f(() => {
		i !== b.current && (_(i), b.current = i);
	}, [i]), {
		selectionMode: t,
		disallowEmptySelection: n,
		selectionBehavior: h,
		setSelectionBehavior: _,
		get isFocused() {
			return o.current;
		},
		setFocused(e) {
			o.current = e, s(e);
		},
		get focusedKey() {
			return c.current;
		},
		get childFocusStrategy() {
			return l.current;
		},
		setFocusedKey(e, t = "first") {
			c.current = e, l.current = t, u(e);
		},
		selectedKeys: d,
		setSelectedKeys(e) {
			(r || !ef(e, d)) && p(e);
		},
		disabledKeys: m,
		disabledBehavior: a
	};
}
function nf(e, t) {
	return e ? e === "all" ? "all" : new $d(e) : t;
}
//#endregion
//#region node_modules/react-stately/dist/private/selection/SelectionManager.mjs
var rf = class e {
	constructor(e, t, n) {
		this.collection = e, this.state = t, this.allowsCellSelection = n?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = n?.layoutDelegate || null, this.fullCollection = n?.fullCollection || null;
	}
	get selectionMode() {
		return this.state.selectionMode;
	}
	get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	setSelectionBehavior(e) {
		this.state.setSelectionBehavior(e);
	}
	get isFocused() {
		return this.state.isFocused;
	}
	setFocused(e) {
		this.state.setFocused(e);
	}
	get focusedKey() {
		return this.state.focusedKey;
	}
	get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	setFocusedKey(e, t) {
		(e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
	}
	get selectedKeys() {
		return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
	}
	get rawSelection() {
		return this.state.selectedKeys;
	}
	isSelected(e) {
		if (this.state.selectionMode === "none") return !1;
		let t = this.getKey(e);
		return t == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(t) : this.state.selectedKeys.has(t);
	}
	get isEmpty() {
		return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
	}
	get isSelectAll() {
		if (this.isEmpty) return !1;
		if (this.state.selectedKeys === "all") return !0;
		if (this._isSelectAll != null) return this._isSelectAll;
		let e = this.getSelectAllKeys(), t = this.state.selectedKeys;
		return this._isSelectAll = e.every((e) => t.has(e)), this._isSelectAll;
	}
	get firstSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && Gd(this.collection, n, e) < 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get lastSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && Gd(this.collection, n, e) > 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	extendSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n;
		if (this.state.selectedKeys === "all") n = new $d([t], t, t);
		else {
			let e = this.state.selectedKeys, r = e.anchorKey ?? t;
			n = new $d(e, r, t);
			for (let i of this.getKeyRange(r, e.currentKey ?? t)) n.delete(i);
			for (let e of this.getKeyRange(t, r)) this.canSelectItem(e) && n.add(e);
		}
		this.state.setSelectedKeys(n);
	}
	getKeyRange(e, t) {
		let n = this.collection.getItem(e), r = this.collection.getItem(t);
		return n && r ? Gd(this.collection, n, r) <= 0 ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
	}
	getKeyRangeInternal(e, t) {
		if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
		let n = [], r = e;
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (e && (e.type === "item" || e.type === "cell" && this.allowsCellSelection) && n.push(r), r === t) return n;
			r = this.collection.getKeyAfter(r);
		}
		return [];
	}
	getKey(e) {
		let t = this.collection.getItem(e);
		if (!t || t.type === "cell" && this.allowsCellSelection) return e;
		for (; t && t.type !== "item" && t.parentKey != null;) t = this.collection.getItem(t.parentKey);
		return !t || t.type !== "item" ? null : t.key;
	}
	toggleSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single" && !this.isSelected(e)) {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n = new $d(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
		n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), !(this.disallowEmptySelection && n.size === 0) && this.state.setSelectedKeys(n);
	}
	replaceSelection(e) {
		if (this.selectionMode === "none") return;
		let t = this.getKey(e);
		if (t == null) return;
		let n = this.canSelectItem(t) ? new $d([t], t, t) : new $d();
		this.state.setSelectedKeys(n);
	}
	setSelectedKeys(e) {
		if (this.selectionMode === "none") return;
		let t = new $d();
		for (let n of e) {
			let e = this.getKey(n);
			if (e != null && (t.add(e), this.selectionMode === "single")) break;
		}
		this.state.setSelectedKeys(t);
	}
	getSelectAllKeys() {
		let e = this.fullCollection ?? this.collection, t = [], n = (r) => {
			for (; r != null;) {
				if (this.canSelectItemIn(r, e)) {
					let i = e.getItem(r);
					i?.type === "item" && t.push(r), i?.hasChildNodes && (this.allowsCellSelection || i.type !== "item") && n(Hd(Vd(i, e))?.key ?? null);
				}
				r = e.getKeyAfter(r);
			}
		};
		return n(e.getFirstKey()), t;
	}
	selectAll() {
		!this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
	}
	clearSelection() {
		!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new $d());
	}
	toggleSelectAll() {
		this.isSelectAll ? this.clearSelection() : this.selectAll();
	}
	select(e, t) {
		this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || t && (t.pointerType === "touch" || t.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
	}
	isSelectionEqual(e) {
		if (e === this.state.selectedKeys) return !0;
		let t = this.selectedKeys;
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	canSelectItem(e) {
		return this.canSelectItemIn(e, this.collection);
	}
	canSelectItemIn(e, t) {
		if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e)) return !1;
		let n = t.getItem(e);
		return !(!n || n?.props?.isDisabled || n.type === "cell" && !this.allowsCellSelection);
	}
	isDisabled(e) {
		let t = this.collection.getItem(e);
		return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(e) || !!t?.props?.isDisabled) && t?.props?.disabledBehavior !== "selection";
	}
	isLink(e) {
		return !!this.collection.getItem(e)?.props?.href;
	}
	getItemProps(e) {
		return this.collection.getItem(e)?.props;
	}
	withCollection(t) {
		return new e(t, this.state, {
			allowsCellSelection: this.allowsCellSelection,
			layoutDelegate: this.layoutDelegate || void 0,
			fullCollection: this.fullCollection ?? this.collection
		});
	}
}, af = class {
	build(e, t) {
		return this.context = t, of(() => this.iterateCollection(e));
	}
	*iterateCollection(e) {
		let { children: n, items: r } = e;
		if (t.isValidElement(n) && n.type === t.Fragment) yield* this.iterateCollection({
			children: n.props.children,
			items: r
		});
		else if (typeof n == "function") {
			if (!r) throw Error("props.children was a function but props.items is missing");
			let e = 0;
			for (let t of r) yield* this.getFullNode({
				value: t,
				index: e
			}, { renderer: n }), e++;
		} else {
			let e = [];
			t.Children.forEach(n, (t) => {
				t && e.push(t);
			});
			let r = 0;
			for (let t of e) {
				let e = this.getFullNode({
					element: t,
					index: r
				}, {});
				for (let t of e) r++, yield t;
			}
		}
	}
	getKey(e, t, n, r) {
		if (e.key != null) return e.key;
		if (t.type === "cell" && t.key != null) return `${r}${t.key}`;
		let i = t.value;
		if (i != null) {
			let e = i.key ?? i.id;
			if (e == null) throw Error("No key found for item");
			return e;
		}
		return r ? `${r}.${t.index}` : `$.${t.index}`;
	}
	getChildState(e, t) {
		return { renderer: t.renderer || e.renderer };
	}
	*getFullNode(e, n, r, i) {
		if (t.isValidElement(e.element) && e.element.type === t.Fragment) {
			let a = [];
			t.Children.forEach(e.element.props.children, (e) => {
				a.push(e);
			});
			let o = e.index ?? 0;
			for (let e of a) yield* this.getFullNode({
				element: e,
				index: o++
			}, n, r, i);
			return;
		}
		let a = e.element;
		if (!a && e.value && n && n.renderer) {
			let t = this.cache.get(e.value);
			if (t && (!t.shouldInvalidate || !t.shouldInvalidate(this.context))) {
				t.index = e.index, t.parentKey = i ? i.key : null, yield t;
				return;
			}
			a = n.renderer(e.value);
		}
		if (t.isValidElement(a)) {
			let t = a.type;
			if (typeof t != "function" && typeof t.getCollectionNode != "function") {
				let e = a.type;
				throw Error(`Unknown element <${e}> in collection.`);
			}
			let o = t.getCollectionNode(a.props, this.context), s = e.index ?? 0, c = o.next();
			for (; !c.done && c.value;) {
				let t = c.value;
				e.index = s;
				let l = t.key ?? null;
				l ??= t.element ? null : this.getKey(a, e, n, r);
				let u = [...this.getFullNode({
					...t,
					key: l,
					index: s,
					wrapper: sf(e.wrapper, t.wrapper)
				}, this.getChildState(n, t), r ? `${r}${a.key}` : a.key, i)];
				for (let n of u) {
					if (n.value = t.value ?? e.value ?? null, n.value && this.cache.set(n.value, n), e.type && n.type !== e.type) throw Error(`Unsupported type <${cf(n.type)}> in <${cf(i?.type ?? "unknown parent type")}>. Only <${cf(e.type)}> is supported.`);
					s++, yield n;
				}
				c = o.next(u);
			}
			return;
		}
		if (e.key == null || e.type == null) return;
		let o = this, s = {
			type: e.type,
			props: e.props,
			key: e.key,
			parentKey: i ? i.key : null,
			value: e.value ?? null,
			level: (i?.level ?? 0) + +(i?.type === "item"),
			index: e.index,
			rendered: e.rendered,
			textValue: e.textValue ?? "",
			"aria-label": e["aria-label"],
			wrapper: e.wrapper,
			shouldInvalidate: e.shouldInvalidate,
			hasChildNodes: e.hasChildNodes || !1,
			childNodes: of(function* () {
				if (!e.hasChildNodes || !e.childNodes) return;
				let t = 0;
				for (let r of e.childNodes()) {
					r.key != null && (r.key = `${s.key}${r.key}`);
					let e = o.getFullNode({
						...r,
						index: t
					}, o.getChildState(n, r), s.key, s);
					for (let n of e) t++, yield n;
				}
			})
		};
		yield s;
	}
	constructor() {
		this.cache = /* @__PURE__ */ new WeakMap();
	}
};
function of(e) {
	let t = [], n = null;
	return { *[Symbol.iterator]() {
		for (let e of t) yield e;
		n ||= e();
		for (let e of n) t.push(e), yield e;
	} };
}
function sf(e, t) {
	if (e && t) return (n) => e(t(n));
	if (e) return e;
	if (t) return t;
}
function cf(e) {
	return e[0].toUpperCase() + e.slice(1);
}
//#endregion
//#region node_modules/react-stately/dist/private/collections/useCollection.mjs
function lf(e, t, n) {
	let r = g(() => new af(), []), { children: i, items: a, collection: o } = e;
	return g(() => o || t(r.build({
		children: i,
		items: a
	}, n)), [
		r,
		i,
		a,
		o,
		n,
		t
	]);
}
//#endregion
//#region node_modules/react-stately/dist/private/list/useListState.mjs
function uf(e) {
	let { filter: t, layoutDelegate: n } = e, r = tf(e), i = g(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), a = lf(e, u((e) => t ? new Qd(t(e)) : new Qd(e), [t]), g(() => ({ suppressTextValueWarning: e.suppressTextValueWarning }), [e.suppressTextValueWarning])), o = g(() => new rf(a, r, { layoutDelegate: n }), [
		a,
		r,
		n
	]);
	return ff(a, o), {
		collection: a,
		disabledKeys: i,
		selectionManager: o
	};
}
function df(e, t) {
	let n = g(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return ff(n, r), {
		collection: n,
		selectionManager: r,
		disabledKeys: e.disabledKeys
	};
}
function ff(e, t) {
	let n = v(null);
	f(() => {
		if (t.focusedKey != null && !e.getItem(t.focusedKey) && n.current) {
			let r = n.current.getKeyAfter(t.focusedKey), i = null;
			for (; r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyAfter(r);
			}
			if (i == null) for (r = n.current.getKeyBefore(t.focusedKey); r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyBefore(r);
			}
			t.setFocusedKey(i);
		}
		n.current = e;
	}, [e, t]);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useLoadMoreSentinel.mjs
function pf(e, t) {
	let { collection: n, onLoadMore: r, scrollOffset: i = 1 } = e, a = v(null), o = Ci((e) => {
		for (let t of e) t.isIntersecting && r && r();
	});
	W(() => (t.current && (a.current = new IntersectionObserver(o, {
		root: yc(t?.current),
		rootMargin: `0px ${100 * i}% ${100 * i}% ${100 * i}%`
	}), a.current.observe(t.current)), () => {
		a.current && a.current.disconnect();
	}), [
		n,
		t,
		i
	]);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/ListBox.mjs
var mf = /*#__PURE__*/ a(null), hf = /*#__PURE__*/ a(null), gf = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, mf);
	let r = d(hf);
	return r ? /*#__PURE__*/ t.createElement(vf, {
		state: r,
		props: e,
		listBoxRef: n
	}) : /*#__PURE__*/ t.createElement(Na, { content: /*#__PURE__*/ t.createElement(Ga, e) }, (r) => /*#__PURE__*/ t.createElement(_f, {
		props: e,
		listBoxRef: n,
		collection: r
	}));
});
function _f({ props: e, listBoxRef: n, collection: r }) {
	e = {
		...e,
		collection: r,
		children: null,
		items: null
	};
	let { layoutDelegate: i } = d(Za), a = uf({
		...e,
		layoutDelegate: i
	});
	return /*#__PURE__*/ t.createElement(vf, {
		state: a,
		props: e,
		listBoxRef: n
	});
}
function vf({ state: e, props: n, listBoxRef: r }) {
	[n, r] = Un(n, r, Qi);
	let { dragAndDropHooks: i, layout: a = "stack", orientation: o = "vertical", filter: s } = n, c = df(e, s), { collection: l, selectionManager: u } = c, p = !!i?.useDraggableCollectionState, m = !!i?.useDroppableCollectionState, { direction: h } = Ii(), { disabledBehavior: _, disabledKeys: y } = u, b = Nd({
		usage: "search",
		sensitivity: "base"
	}), { isVirtualized: x, layoutDelegate: S, dropTargetDelegate: C, CollectionRoot: w } = d(Za), T = g(() => n.keyboardDelegate || new jd({
		collection: l,
		collator: b,
		ref: r,
		disabledKeys: y,
		disabledBehavior: _,
		layout: a,
		orientation: o,
		direction: h,
		layoutDelegate: S
	}), [
		l,
		b,
		r,
		_,
		y,
		o,
		h,
		n.keyboardDelegate,
		a,
		S
	]), { listBoxProps: E } = Fd({
		...n,
		shouldSelectOnPressUp: p || n.shouldSelectOnPressUp,
		keyboardDelegate: T,
		isVirtualized: x
	}, c, r), D = v(p), O = v(m);
	f(() => {
		process.env.NODE_ENV !== "production" && (D.current !== p && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), O.current !== m && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
	}, [p, m]);
	let k, A, j, M = !1, N = null, P = v(null);
	if (p && i) {
		k = i.useDraggableCollectionState({
			collection: l,
			selectionManager: u,
			preview: i.renderDragPreview ? P : void 0
		}), i.useDraggableCollection({}, k, r);
		let e = i.DragPreview;
		N = i.renderDragPreview ? /*#__PURE__*/ t.createElement(e, { ref: P }, i.renderDragPreview) : null;
	}
	if (m && i) {
		A = i.useDroppableCollectionState({
			collection: l,
			selectionManager: u
		});
		let e = i.dropTargetDelegate || C || new i.ListDropTargetDelegate(l, r, {
			orientation: o,
			layout: a,
			direction: h
		});
		j = i.useDroppableCollection({
			keyboardDelegate: T,
			dropTargetDelegate: e
		}, A, r), M = A.isDropTarget({ type: "root" });
	}
	let { focusProps: F, isFocused: I, isFocusVisible: L } = Lo(), R = c.collection.size === 0, z = {
		isDropTarget: M,
		isEmpty: R,
		isFocused: I,
		isFocusVisible: L,
		layout: n.layout || "stack",
		orientation: o,
		state: c
	}, ee = Vn({
		...n,
		children: void 0,
		defaultClassName: "react-aria-ListBox",
		values: z
	}), B = null;
	R && n.renderEmptyState && (B = /*#__PURE__*/ t.createElement("div", {
		role: "option",
		style: { display: "contents" }
	}, n.renderEmptyState(z)));
	let te = io(n, { global: !0 });
	return /*#__PURE__*/ t.createElement(Xu, null, /*#__PURE__*/ t.createElement(K.div, {
		...G(te, ee, E, F, j?.collectionProps),
		ref: r,
		slot: n.slot || void 0,
		onScroll: n.onScroll,
		"data-drop-target": M || void 0,
		"data-empty": R || void 0,
		"data-focused": I || void 0,
		"data-focus-visible": L || void 0,
		"data-layout": n.layout || "stack",
		"data-orientation": o
	}, /*#__PURE__*/ t.createElement(Bn, { values: [
		[mf, n],
		[hf, c],
		[Mu, {
			dragAndDropHooks: i,
			dragState: k,
			dropState: A
		}],
		[Vu, { elementType: "div" }],
		[Nu, { render: xf }],
		[qa, {
			name: "ListBoxSection",
			render: yf
		}]
	] }, /*#__PURE__*/ t.createElement(zu, null, /*#__PURE__*/ t.createElement(w, {
		collection: l,
		scrollRef: r,
		persistedKeys: Iu(u, i, A),
		renderDropIndicator: Fu(i, A)
	}))), B, N));
}
function yf(e, n, r, i = "react-aria-ListBoxSection") {
	let a = d(hf), { dragAndDropHooks: o, dropState: s } = d(Mu), { CollectionBranch: c } = d(Za), [l, u] = Wn(), { headingProps: f, groupProps: p } = Xd({
		heading: u,
		"aria-label": e["aria-label"] ?? void 0
	}), m = Vn({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: i,
		values: void 0
	}), h = io(e, { global: !0 });
	return delete h.id, /*#__PURE__*/ t.createElement(K.section, {
		...G(h, m, p),
		ref: n
	}, /*#__PURE__*/ t.createElement(Lu.Provider, { value: {
		...f,
		ref: l
	} }, /*#__PURE__*/ t.createElement(c, {
		collection: a.collection,
		parent: r,
		renderDropIndicator: Fu(o, s)
	})));
}
var bf = /*#__PURE__*/ Va(ra, function(e, n, r) {
	let i = Rn(n), a = d(hf), { dragAndDropHooks: o, dragState: s, dropState: c } = d(Mu), l = s && !(s.isDisabled || s.selectionManager.isDisabled(r.key)), { optionProps: u, labelProps: p, descriptionProps: m, ...h } = Yd({
		key: r.key,
		"aria-label": e?.["aria-label"]
	}, a, i), { hoverProps: g, isHovered: _ } = Uo({
		isDisabled: !h.allowsSelection && !h.hasAction && !l,
		onHoverStart: r.props.onHoverStart,
		onHoverChange: r.props.onHoverChange,
		onHoverEnd: r.props.onHoverEnd
	}), { keyboardProps: v } = ya(e), { focusProps: y } = _a(e), b = null;
	s && o && (b = o.useDraggableItem({
		key: r.key,
		hasAction: h.hasAction
	}, s));
	let x = null;
	c && o && (x = o.useDroppableItem({ target: {
		type: "item",
		key: r.key,
		dropPosition: "on"
	} }, c, i));
	let S = s && s.isDragging(r.key), C = Vn({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: "react-aria-ListBoxItem",
		values: {
			...h,
			isHovered: _,
			selectionMode: a.selectionManager.selectionMode,
			selectionBehavior: a.selectionManager.selectionBehavior,
			allowsDragging: !!s,
			isDragging: S,
			isDropTarget: x?.isDropTarget
		}
	});
	f(() => {
		!r.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
	}, [r.textValue]);
	let w = e.href ? K.a : K.div, T = io(e, { global: !0 });
	return delete T.id, delete T.onClick, e.href && u.tabIndex == null && (u.tabIndex = -1), /*#__PURE__*/ t.createElement(w, {
		...G(T, C, u, g, v, y, b?.dragProps, x?.dropProps),
		ref: i,
		"data-allows-dragging": !!s || void 0,
		"data-selected": h.isSelected || void 0,
		"data-disabled": h.isDisabled || void 0,
		"data-hovered": _ || void 0,
		"data-focused": h.isFocused || void 0,
		"data-focus-visible": h.isFocusVisible || void 0,
		"data-pressed": h.isPressed || void 0,
		"data-dragging": S || void 0,
		"data-drop-target": x?.isDropTarget || void 0,
		"data-selection-mode": a.selectionManager.selectionMode === "none" ? void 0 : a.selectionManager.selectionMode
	}, /*#__PURE__*/ t.createElement(Bn, { values: [[gc, { slots: {
		[zn]: p,
		label: p,
		description: m
	} }], [Bu, { isSelected: h.isSelected }]] }, C.children));
});
function xf(e, n) {
	n = Rn(n);
	let { dragAndDropHooks: r, dropState: i } = d(Mu), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = r.useDropIndicator(e, i, n);
	return o ? null : /*#__PURE__*/ t.createElement(Cf, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		ref: n
	});
}
function Sf(e, n) {
	let { dropIndicatorProps: r, isDropTarget: i, ...a } = e, o = Vn({
		...a,
		defaultClassName: "react-aria-DropIndicator",
		values: { isDropTarget: i }
	});
	return /*#__PURE__*/ t.createElement(t.Fragment, null, /*#__PURE__*/ t.createElement(K.div, {
		...r,
		...o,
		role: "option",
		ref: n,
		"data-drop-target": i || void 0
	}));
}
var Cf = /*#__PURE__*/ s(Sf);
Va(na, function(e, n, r) {
	let i = d(hf), { isLoading: a, onLoadMore: o, scrollOffset: s, ...c } = e, l = v(null);
	pf(g(() => ({
		onLoadMore: o,
		collection: i?.collection,
		sentinelRef: l,
		scrollOffset: s
	}), [
		o,
		s,
		i?.collection
	]), l);
	let u = Vn({
		...c,
		id: void 0,
		children: r.rendered,
		defaultClassName: "react-aria-ListBoxLoadingIndicator",
		values: void 0
	});
	return /*#__PURE__*/ t.createElement(t.Fragment, null, /*#__PURE__*/ t.createElement("div", {
		style: {
			position: "relative",
			width: 0,
			height: 0
		},
		inert: Zd(!0)
	}, /*#__PURE__*/ t.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: l,
		style: {
			position: "absolute",
			height: 1,
			width: 1
		}
	})), a && u.children && /*#__PURE__*/ t.createElement(t.Fragment, null, /*#__PURE__*/ t.createElement(K.div, {
		...G(io(e, { global: !0 }), { tabIndex: -1 }),
		...u,
		role: "option",
		ref: n
	}, u.children)));
});
//#endregion
//#region node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var wf = /*#__PURE__*/ a({ placement: "bottom" }), Tf = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
function Ef(e) {
	return e.dataset.liveAnnouncer === "true" || e.dataset.reactAriaTopLayer !== void 0;
}
var Df = /* @__PURE__ */ new WeakMap(), Of = [];
function kf(e, t) {
	let n = Xn(e?.[0]), r = t instanceof n.Element ? { root: t } : t, i = r?.root ?? document.body, a = r?.shouldUseInert && Tf, o = new Set(e), s = /* @__PURE__ */ new Set(), c = (e) => a && e instanceof n.HTMLElement ? e.inert : e.getAttribute("aria-hidden") === "true", l = (e, t) => {
		a && e instanceof n.HTMLElement ? e.inert = t : t ? e.setAttribute("aria-hidden", "true") : (e.removeAttribute("aria-hidden"), e instanceof n.HTMLElement && (e.inert = !1));
	}, u = /* @__PURE__ */ new Set();
	if (er()) for (let t of e) {
		let e = t;
		for (; e && e !== i;) {
			let t = e.getRootNode();
			"shadowRoot" in t && u.add(t.shadowRoot), e = t.parentNode;
		}
	}
	let d = (e) => {
		for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) o.add(t);
		let t = (e) => {
			if (s.has(e) || o.has(e) || e.parentElement && s.has(e.parentElement) && e.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
			for (let t of o) if (J(e, t)) return NodeFilter.FILTER_SKIP;
			return NodeFilter.FILTER_ACCEPT;
		}, n = Ku(q(e), e, NodeFilter.SHOW_ELEMENT, { acceptNode: t }), r = t(e);
		if (r === NodeFilter.FILTER_ACCEPT && f(e), r !== NodeFilter.FILTER_REJECT) {
			let e = n.nextNode();
			for (; e != null;) f(e), e = n.nextNode();
		}
	}, f = (e) => {
		let t = Df.get(e) ?? 0;
		c(e) && t === 0 || (t === 0 && l(e, !0), s.add(e), Df.set(e, t + 1));
	};
	Of.length && Of[Of.length - 1].disconnect(), d(i);
	let p = new MutationObserver((e) => {
		for (let t of e) if (t.type === "childList") {
			if (t.target.isConnected && ![...o, ...s].some((e) => J(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && Ef(e) ? o.add(e) : e instanceof Element && d(e);
			if (er()) {
				for (let e of u) if (!e.isConnected) {
					p.disconnect();
					break;
				}
			}
		}
	});
	p.observe(i, {
		childList: !0,
		subtree: !0
	});
	let m = /* @__PURE__ */ new Set();
	if (er()) for (let e of u) {
		let t = new MutationObserver((e) => {
			for (let t of e) if (t.type === "childList") {
				if (t.target.isConnected && ![...o, ...s].some((e) => J(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && Ef(e) ? o.add(e) : e instanceof Element && d(e);
				if (er()) {
					for (let e of u) if (!e.isConnected) {
						p.disconnect();
						break;
					}
				}
			}
		});
		t.observe(e, {
			childList: !0,
			subtree: !0
		}), m.add(t);
	}
	let h = {
		visibleNodes: o,
		hiddenNodes: s,
		observe() {
			p.observe(i, {
				childList: !0,
				subtree: !0
			});
		},
		disconnect() {
			p.disconnect();
		}
	};
	return Of.push(h), () => {
		if (p.disconnect(), er()) for (let e of m) e.disconnect();
		for (let e of s) {
			let t = Df.get(e);
			t != null && (t === 1 ? (l(e, !1), Df.delete(e)) : Df.set(e, t - 1));
		}
		h === Of[Of.length - 1] ? (Of.pop(), Of.length && Of[Of.length - 1].observe()) : Of.splice(Of.indexOf(h), 1);
	};
}
function Af(e) {
	let t = Of[Of.length - 1];
	if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
		t.visibleNodes.delete(e);
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/calculatePosition.mjs
var jf = {
	top: "top",
	bottom: "top",
	left: "left",
	right: "left"
}, Mf = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, Nf = {
	top: "left",
	left: "top"
}, Pf = {
	top: "height",
	left: "width"
}, Ff = {
	width: "totalWidth",
	height: "totalHeight"
}, If = {}, Lf = () => typeof document < "u" ? window.visualViewport : null;
function Rf(e, t) {
	let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = {}, l = (t?.scale ?? 1) > 1;
	if (e.tagName === "BODY" || e.tagName === "HTML") {
		let l = document.documentElement;
		i = l.clientWidth, a = l.clientHeight, n = t?.width ?? i, r = t?.height ?? a, c.top = l.scrollTop || e.scrollTop, c.left = l.scrollLeft || e.scrollLeft, t && (o = t.offsetTop, s = t.offsetLeft);
	} else ({width: n, height: r, top: o, left: s} = Yf(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, i = n, a = r;
	return Fr() && (e.tagName === "BODY" || e.tagName === "HTML") && l && (c.top = 0, c.left = 0, o = t?.pageTop ?? 0, s = t?.pageLeft ?? 0), {
		width: n,
		height: r,
		totalWidth: i,
		totalHeight: a,
		scroll: c,
		top: o,
		left: s
	};
}
function zf(e) {
	return {
		top: e.scrollTop,
		left: e.scrollLeft,
		width: e.scrollWidth,
		height: e.scrollHeight
	};
}
function Bf(e, t, n, r, i, a, o) {
	let s = i.scroll[e] ?? 0, c = r[Pf[e]], l = o[e] + r.scroll[jf[e]] + a, u = o[e] + r.scroll[jf[e]] + c - a, d = t - s + r.scroll[jf[e]] + o[e] - r[jf[e]], f = t - s + n + r.scroll[jf[e]] + o[e] - r[jf[e]];
	return d < l ? l - d : f > u ? Math.max(u - f, l - d) : 0;
}
function Vf(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0
	};
}
function Hf(e) {
	if (If[e]) return If[e];
	let [t, n] = e.split(" "), r = jf[t] || "right", i = Nf[r];
	jf[n] || (n = "center");
	let a = Pf[r], o = Pf[i];
	return If[e] = {
		placement: t,
		crossPlacement: n,
		axis: r,
		crossAxis: i,
		size: a,
		crossSize: o
	}, If[e];
}
function Uf(e, t, n, r, i, a, o, s, c, l, u) {
	let { placement: d, crossPlacement: f, axis: p, crossAxis: m, size: h, crossSize: g } = r, _ = {};
	_[m] = e[m] ?? 0, f === "center" ? _[m] += ((e[g] ?? 0) - (n[g] ?? 0)) / 2 : f !== m && (_[m] += (e[g] ?? 0) - (n[g] ?? 0)), _[m] += a;
	let v = e[m] - n[g] + c + l, y = e[m] + e[g] - c - l;
	if (_[m] = tc(_[m], v, y), d === p) {
		let t = s ? u[h] : u[Ff[h]];
		_[Mf[p]] = Math.floor(t - e[p] + i);
	} else _[p] = Math.floor(e[p] + e[h] + i);
	return _;
}
function Wf(e, t, n, r, i, a, o, s, c, l, u) {
	let d = (e.top == null ? c[Ff.height] - (e.bottom ?? 0) - o : e.top) - (c.scroll.top ?? 0), f = l ? n.top : 0, p = {
		top: Math.max(t.top + f, (u?.offsetTop ?? t.top) + f),
		bottom: Math.min(t.top + t.height + f, (u?.offsetTop ?? 0) + (u?.height ?? 0))
	};
	return s === "top" ? Math.max(0, d + o - p.top - ((i.top ?? 0) + (i.bottom ?? 0) + a)) : Math.max(0, p.bottom - d - ((i.top ?? 0) + (i.bottom ?? 0) + a));
}
function Gf(e, t, n, r, i, a, o, s) {
	let { placement: c, axis: l, size: u } = a;
	return c === l ? Math.max(0, n[l] - (o.scroll[l] ?? 0) - (e[l] + (s ? t[l] : 0)) - (r[l] ?? 0) - r[Mf[l]] - i) : Math.max(0, e[u] + e[l] + (s ? t[l] : 0) - n[l] - n[u] + (o.scroll[l] ?? 0) - (r[l] ?? 0) - r[Mf[l]] - i);
}
function Kf(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
	let v = Hf(e), { size: y, crossAxis: b, crossSize: x, placement: S, crossPlacement: C } = v, w = Uf(t, s, n, v, u, d, l, f, m, h, c), T = u, E = Gf(s, l, t, i, a + u, v, c, g);
	if (o && n[y] > E) {
		let e = Hf(`${Mf[S]} ${C}`), r = Uf(t, s, n, e, u, d, l, f, m, h, c);
		Gf(s, l, t, i, a + u, e, c, g) > E && (v = e, w = r, T = u);
	}
	let D = "bottom";
	v.axis === "top" ? v.placement === "top" ? D = "top" : v.placement === "bottom" && (D = "bottom") : v.crossAxis === "top" && (v.crossPlacement === "top" ? D = "bottom" : v.crossPlacement === "bottom" && (D = "top"));
	let O = Bf(b, w[b], n[x], s, c, a, l);
	w[b] += O;
	let k = Wf(w, s, l, f, i, a, n.height, D, c, g, _);
	p && p < k && (k = p), n.height = Math.min(n.height, k), w = Uf(t, s, n, v, T, d, l, f, m, h, c), O = Bf(b, w[b], n[x], s, c, a, l), w[b] += O;
	let A = {}, j = t[b] - w[b] - i[jf[b]], M = j + .5 * t[x], N = m / 2 + h, P = jf[b] === "left" ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0), F = n[x] - P - m / 2 - h;
	A[b] = tc(tc(M, t[b] + m / 2 - (w[b] + i[jf[b]]), t[b] + t[x] - m / 2 - (w[b] + i[jf[b]])), N, F), {placement: S, crossPlacement: C} = v, m ? j = A[b] : C === "right" ? j += t[x] : C === "center" && (j += t[x] / 2);
	let I = S === "left" || S === "top" ? n[y] : 0, L = {
		x: S === "top" || S === "bottom" ? j : I,
		y: S === "left" || S === "right" ? j : I
	};
	return {
		position: w,
		maxHeight: k,
		arrowOffsetLeft: A.left,
		arrowOffsetTop: A.top,
		placement: S,
		triggerAnchorPoint: L
	};
}
function qf(e) {
	let { placement: t, targetNode: n, overlayNode: r, scrollNode: i, padding: a, shouldFlip: o, boundaryElement: s, offset: c, crossOffset: l, maxHeight: u, arrowSize: d = 0, arrowBoundaryOffset: f = 0 } = e, p = Lf(), m = r instanceof HTMLElement ? Zf(r) : document.documentElement, h = m === document.documentElement, g = window.getComputedStyle(m).position, _ = !!g && g !== "static", v = h ? Yf(n, !1) : Xf(n, m, !1);
	if (!h) {
		let { marginTop: e, marginLeft: t } = window.getComputedStyle(n);
		v.top += parseInt(e, 10) || 0, v.left += parseInt(t, 10) || 0;
	}
	let y = Yf(r, !0), b = Vf(r);
	y.width += (b.left ?? 0) + (b.right ?? 0), y.height += (b.top ?? 0) + (b.bottom ?? 0);
	let x = zf(i), S = Rf(s, p), C = Rf(m, p), w;
	if ((s.tagName === "BODY" || s.tagName === "HTML") && !h) {
		let e = Jf(m, !1);
		w = {
			top: -(e.top - S.top),
			left: -(e.left - S.left),
			width: 0,
			height: 0
		};
	} else w = (s.tagName === "BODY" || s.tagName === "HTML") && h ? {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	} : Xf(s, m, !1);
	let T = J(s, m);
	return Kf(t, v, y, x, b, a, o, S, C, w, c, l, _, u, d, f, T, p);
}
function Jf(e, t) {
	let { top: n, left: r, width: i, height: a } = e.getBoundingClientRect();
	return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, a = e.offsetHeight), {
		top: n,
		left: r,
		width: i,
		height: a
	};
}
function Yf(e, t) {
	let { top: n, left: r, width: i, height: a } = Jf(e, t), { scrollTop: o, scrollLeft: s, clientTop: c, clientLeft: l } = document.documentElement;
	return {
		top: n + o - c,
		left: r + s - l,
		width: i,
		height: a
	};
}
function Xf(e, t, n) {
	let r = window.getComputedStyle(e), i;
	if (r.position === "fixed") i = Jf(e, n);
	else {
		i = Yf(e, n);
		let r = Yf(t, n), a = window.getComputedStyle(t);
		r.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft, i.top -= r.top, i.left -= r.left;
	}
	return i.top -= parseInt(r.marginTop, 10) || 0, i.left -= parseInt(r.marginLeft, 10) || 0, i;
}
function Zf(e) {
	let t = e.offsetParent;
	if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Qf(t) && (t = document.documentElement), t == null) for (t = e.parentElement; t && !Qf(t);) t = t.parentElement;
	return t || document.documentElement;
}
function Qf(e) {
	let t = window.getComputedStyle(e);
	return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useCloseOnScroll.mjs
var $f = /* @__PURE__ */ new WeakMap();
function ep(e) {
	let { triggerRef: t, isOpen: n, onClose: r } = e;
	f(() => {
		if (!n || r === null) return;
		let e = (e) => {
			let n = Y(e);
			if (!t.current || n instanceof Node && !J(n, t.current) || n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
			let i = r || $f.get(t.current);
			i && i();
		};
		return window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("scroll", e, !0);
		};
	}, [
		n,
		r,
		t
	]);
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
function tp() {
	return window.ResizeObserver !== void 0;
}
function np(e) {
	let { ref: t, box: n, onResize: r } = e, i = Ci(r);
	f(() => {
		let e = t?.current;
		if (e) if (tp()) {
			let t = new window.ResizeObserver((e) => {
				e.length && i();
			});
			return t.observe(e, { box: n }), () => {
				e && t.unobserve(e);
			};
		} else return window.addEventListener("resize", i, !1), () => {
			window.removeEventListener("resize", i, !1);
		};
	}, [t, n]);
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs
var rp = typeof document < "u" ? window.visualViewport : null;
function ip(e) {
	let { direction: t } = Ii(), { arrowSize: n, targetRef: r, overlayRef: i, arrowRef: a, scrollRef: o = i, placement: s = "bottom", containerPadding: c = 12, shouldFlip: l = !0, boundaryElement: d = typeof document < "u" ? document.body : null, offset: p = 0, crossOffset: m = 0, shouldUpdatePosition: h = !0, isOpen: g = !0, onClose: _, maxHeight: b, arrowBoundaryOffset: x = 0 } = e, [S, C] = y(null), w = [
		h,
		s,
		i.current,
		r.current,
		a?.current,
		o.current,
		c,
		l,
		d,
		p,
		m,
		g,
		t,
		b,
		x,
		n
	], T = v(rp?.scale);
	f(() => {
		g && (T.current = rp?.scale);
	}, [g]);
	let E = u(() => {
		if (h === !1 || !g || !i.current || !r.current || !d || rp?.scale !== T.current) return;
		let e = null;
		if (o.current && nr(o.current)) {
			let t = tr()?.getBoundingClientRect(), n = o.current.getBoundingClientRect();
			e = {
				type: "top",
				offset: (t?.top ?? 0) - n.top
			}, e.offset > n.height / 2 && (e.type = "bottom", e.offset = (t?.bottom ?? 0) - n.bottom);
		}
		let u = i.current;
		!b && i.current && (u.style.top = "0px", u.style.bottom = "", u.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
		let f = qf({
			placement: op(s, t),
			overlayNode: i.current,
			targetNode: r.current,
			scrollNode: o.current || i.current,
			padding: c,
			shouldFlip: l,
			boundaryElement: d,
			offset: p,
			crossOffset: m,
			maxHeight: b,
			arrowSize: n ?? (a?.current ? Jf(a.current, !0).width : 0),
			arrowBoundaryOffset: x
		});
		if (!f.position) return;
		u.style.top = "", u.style.bottom = "", u.style.left = "", u.style.right = "", Object.keys(f.position).forEach((e) => u.style[e] = f.position[e] + "px"), u.style.maxHeight = f.maxHeight == null ? "" : f.maxHeight + "px";
		let _ = tr();
		if (e && _ && o.current) {
			let t = _.getBoundingClientRect(), n = o.current.getBoundingClientRect(), r = t[e.type] - n[e.type];
			o.current.scrollTop += r - e.offset;
		}
		C(f);
	}, w);
	W(E, w), ap(E), np({
		ref: i,
		onResize: E
	}), np({
		ref: r,
		onResize: E
	});
	let D = v(!1);
	W(() => {
		let e, t = () => {
			D.current = !0, clearTimeout(e), e = setTimeout(() => {
				D.current = !1;
			}, 500), E();
		}, n = () => {
			D.current && t();
		};
		return rp?.addEventListener("resize", t), rp?.addEventListener("scroll", n), () => {
			rp?.removeEventListener("resize", t), rp?.removeEventListener("scroll", n);
		};
	}, [E]);
	let O = u(() => {
		D.current || _?.();
	}, [_, D]);
	return ep({
		triggerRef: r,
		isOpen: g,
		onClose: _ && O
	}), {
		overlayProps: { style: {
			position: S ? "absolute" : "fixed",
			top: S ? void 0 : 0,
			left: S ? void 0 : 0,
			zIndex: 1e5,
			...S?.position,
			maxHeight: S?.maxHeight ?? "100vh"
		} },
		placement: S?.placement ?? null,
		triggerAnchorPoint: S?.triggerAnchorPoint ?? null,
		arrowProps: {
			"aria-hidden": "true",
			role: "presentation",
			style: {
				left: S?.arrowOffsetLeft,
				top: S?.arrowOffsetTop
			}
		},
		updatePosition: E
	};
}
function ap(e) {
	W(() => (window.addEventListener("resize", e, !1), () => {
		window.removeEventListener("resize", e, !1);
	}), [e]);
}
function op(e, t) {
	return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/useInteractOutside.mjs
function sp(e) {
	let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: i } = e, a = v({
		isPointerDown: !1,
		ignoreEmulatedMouseEvents: !1
	}), o = Ci((e) => {
		n && cp(e, t) && (i && i(e), a.current.isPointerDown = !0);
	}), s = Ci((e) => {
		n && n(e);
	});
	f(() => {
		let e = a.current;
		if (r) return;
		let n = t.current, i = q(n);
		if (typeof PointerEvent < "u") {
			let n = (n) => {
				e.isPointerDown && cp(n, t) && s(n), e.isPointerDown = !1;
			};
			return i.addEventListener("pointerdown", o, !0), i.addEventListener("click", n, !0), () => {
				i.removeEventListener("pointerdown", o, !0), i.removeEventListener("click", n, !0);
			};
		} else if (process.env.NODE_ENV === "test") {
			let n = (n) => {
				e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && cp(n, t) && s(n), e.isPointerDown = !1;
			}, r = (n) => {
				e.ignoreEmulatedMouseEvents = !0, e.isPointerDown && cp(n, t) && s(n), e.isPointerDown = !1;
			};
			return i.addEventListener("mousedown", o, !0), i.addEventListener("mouseup", n, !0), i.addEventListener("touchstart", o, !0), i.addEventListener("touchend", r, !0), () => {
				i.removeEventListener("mousedown", o, !0), i.removeEventListener("mouseup", n, !0), i.removeEventListener("touchstart", o, !0), i.removeEventListener("touchend", r, !0);
			};
		}
	}, [t, r]);
}
function cp(e, t) {
	if (e.button > 0) return !1;
	let n = Y(e);
	if (n) {
		let e = n.ownerDocument;
		if (!e || !J(e.documentElement, n) || n.closest("[data-react-aria-top-layer]")) return !1;
	}
	return t.current ? !e.composedPath().includes(t.current) : !1;
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useOverlay.mjs
var lp = [];
function up(e, t) {
	let { onClose: n, shouldCloseOnBlur: r, isOpen: i, isDismissable: a = !1, isKeyboardDismissDisabled: o = !1, shouldCloseOnInteractOutside: s } = e, c = v(void 0);
	f(() => {
		if (i && !lp.includes(t)) return lp.push(t), () => {
			let e = lp.indexOf(t);
			e >= 0 && lp.splice(e, 1);
		};
	}, [i, t]);
	let l = () => {
		lp[lp.length - 1] === t && n && n();
	}, u = (e) => {
		let n = lp[lp.length - 1];
		c.current = n, (!s || s(Y(e))) && n === t && e.stopPropagation();
	}, d = (e) => {
		(!s || s(Y(e))) && (lp[lp.length - 1] === t && e.stopPropagation(), c.current === t && l()), c.current = void 0;
	}, p = (e) => {
		e.key === "Escape" && !o && !e.nativeEvent.isComposing && (e.stopPropagation(), e.preventDefault(), l());
	};
	sp({
		ref: t,
		onInteractOutside: a && i ? d : void 0,
		onInteractOutsideStart: u
	});
	let { focusWithinProps: m } = Io({
		isDisabled: !r,
		onBlurWithin: (e) => {
			!e.relatedTarget || od(e.relatedTarget) || (!s || s(e.relatedTarget)) && n?.();
		}
	});
	return {
		overlayProps: {
			onKeyDown: p,
			...m
		},
		underlayProps: {}
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/usePreventScroll.mjs
var dp = typeof document < "u" && window.visualViewport, fp = 0, pp;
function mp(e = {}) {
	let { isDisabled: t } = e;
	W(() => {
		if (!t) return fp++, fp === 1 && (pp = Nr() ? gp() : hp()), () => {
			fp--, fp === 0 && pp();
		};
	}, [t]);
}
function hp() {
	let e = window.innerWidth - document.documentElement.clientWidth;
	return pn(e > 0 && ("scrollbarGutter" in document.documentElement.style ? _p(document.documentElement, "scrollbarGutter", "stable") : _p(document.documentElement, "paddingRight", `${e}px`)), _p(document.documentElement, "overflow", "hidden"));
}
function gp() {
	let e = _p(document.documentElement, "overflow", "hidden"), t, n = !1, r = (e) => {
		let r = Y(e);
		t = vc(r) ? r : yc(r, !0), n = !1;
		let i = r.ownerDocument.defaultView.getSelection();
		i && !i.isCollapsed && i.containsNode(r, !0) && (n = !0), e.composedPath().some((e) => e instanceof HTMLInputElement && e.type === "range") && (n = !0), "selectionStart" in r && "selectionEnd" in r && r.selectionStart < r.selectionEnd && r.ownerDocument.activeElement === r && (n = !0);
	}, i = document.createElement("style"), a = po();
	a && (i.nonce = a), i.textContent = "@layer {\n  * {\n    overscroll-behavior: contain;\n  }\n}", document.head.prepend(i);
	let o = (e) => {
		if (!(e.touches.length === 2 || n)) {
			if (!t || t === document.documentElement || t === document.body) {
				e.preventDefault();
				return;
			}
			t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth && e.preventDefault();
		}
	}, s = (e) => {
		let t = Y(e), n = e.relatedTarget;
		n && xi(n) ? (n.focus({ preventScroll: !0 }), yp(n, xi(t))) : n || (t.parentElement?.closest("[tabindex]"))?.focus({ preventScroll: !0 });
	}, c = HTMLElement.prototype.focus;
	HTMLElement.prototype.focus = function(e) {
		let t = tr(), n = t != null && xi(t);
		c.call(this, {
			...e,
			preventScroll: !0
		}), (!e || !e.preventScroll) && yp(this, n);
	};
	let l = pn(vp(document, "touchstart", r, {
		passive: !1,
		capture: !0
	}), vp(document, "touchmove", o, {
		passive: !1,
		capture: !0
	}), vp(document, "blur", s, !0));
	return () => {
		e(), l(), i.remove(), HTMLElement.prototype.focus = c;
	};
}
function _p(e, t, n) {
	let r = e.style[t];
	return e.style[t] = n, () => {
		e.style[t] = r;
	};
}
function vp(e, t, n, r) {
	return e.addEventListener(t, n, r), () => {
		e.removeEventListener(t, n, r);
	};
}
function yp(e, t) {
	t || !dp ? bp(e) : dp.addEventListener("resize", () => bp(e), { once: !0 });
}
function bp(e) {
	let t = document.scrollingElement || document.documentElement, n = e;
	for (; n && n !== t;) {
		let e = yc(n);
		if (e !== document.documentElement && e !== document.body && e !== n) {
			let t = e.getBoundingClientRect(), r = n.getBoundingClientRect();
			if (r.top < t.top || r.bottom > t.top + n.clientHeight) {
				let n = t.bottom;
				dp && (n = Math.min(n, dp.offsetTop + dp.height));
				let i = r.top - t.top - ((n - t.top) / 2 - r.height / 2);
				e.scrollTo({
					top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + i)),
					behavior: "smooth"
				});
			}
		}
		n = e.parentElement;
	}
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/usePopover.mjs
function xp(e, t) {
	let { triggerRef: n, popoverRef: r, groupRef: i, isNonModal: a, isKeyboardDismissDisabled: o, shouldCloseOnInteractOutside: s, ...c } = e, l = c.trigger === "SubmenuTrigger", { overlayProps: u, underlayProps: d } = up({
		isOpen: t.isOpen,
		onClose: t.close,
		shouldCloseOnBlur: !0,
		isDismissable: !a || l,
		isKeyboardDismissDisabled: o,
		shouldCloseOnInteractOutside: s
	}, i ?? r), { overlayProps: p, arrowProps: m, placement: h, triggerAnchorPoint: g } = ip({
		...c,
		targetRef: n,
		overlayRef: r,
		isOpen: t.isOpen,
		onClose: a && !l ? t.close : null
	});
	return mp({ isDisabled: a || !t.isOpen }), f(() => {
		if (t.isOpen && r.current) return a ? Af(i?.current ?? r.current) : kf([i?.current ?? r.current], { shouldUseInert: !0 });
	}, [
		a,
		t.isOpen,
		r,
		i
	]), {
		popoverProps: G(u, p),
		arrowProps: m,
		underlayProps: d,
		placement: h,
		triggerAnchorPoint: g
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ar-AE.mjs
var Sp = {};
Sp = { dismiss: "تجاهل" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/bg-BG.mjs
var Cp = {};
Cp = { dismiss: "Отхвърляне" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/cs-CZ.mjs
var wp = {};
wp = { dismiss: "Odstranit" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/da-DK.mjs
var Tp = {};
Tp = { dismiss: "Luk" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/de-DE.mjs
var Ep = {};
Ep = { dismiss: "Schließen" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/el-GR.mjs
var Dp = {};
Dp = { dismiss: "Απόρριψη" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/en-US.mjs
var Op = {};
Op = { dismiss: "Dismiss" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/es-ES.mjs
var kp = {};
kp = { dismiss: "Descartar" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/et-EE.mjs
var Ap = {};
Ap = { dismiss: "Lõpeta" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/fi-FI.mjs
var jp = {};
jp = { dismiss: "Hylkää" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/fr-FR.mjs
var Mp = {};
Mp = { dismiss: "Rejeter" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/he-IL.mjs
var Np = {};
Np = { dismiss: "התעלם" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/hr-HR.mjs
var Pp = {};
Pp = { dismiss: "Odbaci" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/hu-HU.mjs
var Fp = {};
Fp = { dismiss: "Elutasítás" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/it-IT.mjs
var Ip = {};
Ip = { dismiss: "Ignora" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ja-JP.mjs
var Lp = {};
Lp = { dismiss: "閉じる" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ko-KR.mjs
var Rp = {};
Rp = { dismiss: "무시" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/lt-LT.mjs
var zp = {};
zp = { dismiss: "Atmesti" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/lv-LV.mjs
var Bp = {};
Bp = { dismiss: "Nerādīt" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/nb-NO.mjs
var Vp = {};
Vp = { dismiss: "Lukk" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/nl-NL.mjs
var Hp = {};
Hp = { dismiss: "Negeren" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/pl-PL.mjs
var Up = {};
Up = { dismiss: "Zignoruj" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/pt-BR.mjs
var Wp = {};
Wp = { dismiss: "Descartar" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/pt-PT.mjs
var Gp = {};
Gp = { dismiss: "Dispensar" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ro-RO.mjs
var Kp = {};
Kp = { dismiss: "Revocare" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/ru-RU.mjs
var qp = {};
qp = { dismiss: "Пропустить" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sk-SK.mjs
var Jp = {};
Jp = { dismiss: "Zrušiť" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sl-SI.mjs
var Yp = {};
Yp = { dismiss: "Opusti" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sr-SP.mjs
var Xp = {};
Xp = { dismiss: "Odbaci" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/sv-SE.mjs
var Zp = {};
Zp = { dismiss: "Avvisa" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/tr-TR.mjs
var Qp = {};
Qp = { dismiss: "Kapat" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/uk-UA.mjs
var $p = {};
$p = { dismiss: "Скасувати" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/zh-CN.mjs
var em = {};
em = { dismiss: "取消" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/overlays/zh-TW.mjs
var tm = {};
tm = { dismiss: "關閉" };
//#endregion
//#region node_modules/react-aria/dist/private/overlays/intlStrings.mjs
var nm = {};
nm = {
	"ar-AE": Sp,
	"bg-BG": Cp,
	"cs-CZ": wp,
	"da-DK": Tp,
	"de-DE": Ep,
	"el-GR": Dp,
	"en-US": Op,
	"es-ES": kp,
	"et-EE": Ap,
	"fi-FI": jp,
	"fr-FR": Mp,
	"he-IL": Np,
	"hr-HR": Pp,
	"hu-HU": Fp,
	"it-IT": Ip,
	"ja-JP": Lp,
	"ko-KR": Rp,
	"lt-LT": zp,
	"lv-LV": Bp,
	"nb-NO": Vp,
	"nl-NL": Hp,
	"pl-PL": Up,
	"pt-BR": Wp,
	"pt-PT": Gp,
	"ro-RO": Kp,
	"ru-RU": qp,
	"sk-SK": Jp,
	"sl-SI": Yp,
	"sr-SP": Xp,
	"sv-SE": Zp,
	"tr-TR": Qp,
	"uk-UA": $p,
	"zh-CN": em,
	"zh-TW": tm
};
//#endregion
//#region node_modules/react-aria/dist/private/overlays/DismissButton.mjs
function rm(e) {
	return e && e.__esModule ? e.default : e;
}
function im(e) {
	let { onDismiss: n, ...r } = e, i = Ti(r, Yi(rm(nm), "@react-aria/overlays").format("dismiss")), a = () => {
		n && n();
	};
	return /*#__PURE__*/ t.createElement(Oc, null, /*#__PURE__*/ t.createElement("button", {
		...i,
		tabIndex: -1,
		onClick: a,
		style: {
			width: 1,
			height: 1
		}
	}));
}
//#endregion
//#region node_modules/react-aria/dist/private/interactions/PressResponder.mjs
function am({ children: e }) {
	let n = g(() => ({ register: () => {} }), []);
	return /*#__PURE__*/ t.createElement(mo.Provider, { value: n }, e);
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/PortalProvider.mjs
var om = /*#__PURE__*/ a({});
function sm() {
	return d(om) ?? {};
}
//#endregion
//#region node_modules/react-aria/dist/private/overlays/Overlay.mjs
var cm = /*#__PURE__*/ t.createContext(null);
function lm(e) {
	let n = En(), { portalContainer: r = n ? null : document.body, isExiting: i } = e, [a, o] = y(!1), s = g(() => ({
		contain: a,
		setContain: o
	}), [a, o]), { getContainer: c } = sm();
	if (!e.portalContainer && c && (r = c()), !r) return null;
	let l = e.children;
	return e.disableFocusManagement || (l = /*#__PURE__*/ t.createElement(Xu, {
		restoreFocus: !0,
		contain: (e.shouldContainFocus || a) && !i
	}, l)), l = /*#__PURE__*/ t.createElement(cm.Provider, { value: s }, /*#__PURE__*/ t.createElement(am, null, l)), /*#__PURE__*/ E.createPortal(l, r);
}
//#endregion
//#region node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
function um(e) {
	let [t, n] = Zi(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
	return {
		isOpen: t,
		setOpen: n,
		open: u(() => {
			n(!0);
		}, [n]),
		close: u(() => {
			n(!1);
		}, [n]),
		toggle: u(() => {
			n(!t);
		}, [n, t])
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/utils/animation.mjs
function dm(e, t = !0) {
	let [n, r] = y(!0), i = n && t;
	return W(() => {
		if (i && e.current && "getAnimations" in e.current) for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel();
	}, [e, i]), pm(e, i, u(() => r(!1), [])), i;
}
function fm(e, t) {
	let [n, r] = y(t ? "open" : "closed");
	switch (n) {
		case "open":
			t || r("exiting");
			break;
		case "closed":
		case "exiting":
			t && r("open");
			break;
	}
	let i = n === "exiting";
	return pm(e, i, u(() => {
		r((e) => e === "exiting" ? "closed" : e);
	}, [])), i;
}
function pm(e, t, n) {
	W(() => {
		if (t && e.current) {
			if (!("getAnimations" in e.current)) {
				n();
				return;
			}
			let t = e.current.getAnimations();
			if (t.length === 0) {
				n();
				return;
			}
			let r = !1;
			return Promise.allSettled(t.map((e) => e.finished)).then(() => {
				r || O(() => {
					n();
				});
			}), () => {
				r = !0;
			};
		}
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Popover.mjs
var mm = /*#__PURE__*/ a(null), hm = /*#__PURE__*/ a(null), gm = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, mm);
	let r = d(nh), i = um(e), a = e.isOpen != null || e.defaultOpen != null || !r ? i : r, o = fm(n, a.isOpen) || e.isExiting || !1, s = Da(), { direction: c } = Ii();
	if (s) {
		let n = e.children;
		return typeof n == "function" && (n = n({
			trigger: e.trigger || null,
			placement: "bottom",
			isEntering: !1,
			isExiting: !1,
			defaultChildren: null
		})), /*#__PURE__*/ t.createElement(t.Fragment, null, n);
	}
	return a && !a.isOpen && !o ? null : /*#__PURE__*/ t.createElement(_m, {
		...e,
		triggerRef: e.triggerRef,
		state: a,
		popoverRef: n,
		isExiting: o,
		dir: c
	});
});
function _m({ state: e, isExiting: n, UNSTABLE_portalContainer: r, clearContexts: i, ...a }) {
	let o = v(null), s = v(null), c = d(hm), l = c && a.trigger === "SubmenuTrigger", { popoverProps: p, underlayProps: m, arrowProps: h, placement: _, triggerAnchorPoint: b } = xp({
		...a,
		offset: a.offset ?? 8,
		arrowRef: o,
		groupRef: l ? c : s
	}, e), x = a.popoverRef, S = dm(x, !!_) || a.isEntering || !1, C = Vn({
		...a,
		defaultClassName: "react-aria-Popover",
		values: {
			trigger: a.trigger || null,
			placement: _,
			isEntering: S,
			isExiting: n
		}
	}), w = !a.isNonModal || a.trigger === "SubmenuTrigger", [T, E] = y(!1);
	W(() => {
		x.current && E(w && !x.current.querySelector("[role=dialog]"));
	}, [x, w]), f(() => {
		T && (a.trigger !== "SubmenuTrigger" || pi() !== "pointer") && x.current && !nr(x.current) && ga(x.current);
	}, [
		T,
		x,
		a.trigger
	]);
	let D = g(() => {
		let e = C.children;
		if (i) for (let n of i) e = /*#__PURE__*/ t.createElement(n.Provider, { value: null }, e);
		return e;
	}, [C.children, i]), [O, k] = y(null), A = u(() => {
		a.triggerRef.current && k(a.triggerRef.current.getBoundingClientRect().width + "px");
	}, [a.triggerRef]);
	W(A, [A]), np({
		ref: C.style?.["--trigger-width"] ? void 0 : a.triggerRef,
		onResize: A
	});
	let j = {
		...p.style,
		"--trigger-anchor-point": b ? `${b.x}px ${b.y}px` : void 0,
		...C.style,
		"--trigger-width": C.style?.["--trigger-width"] || O
	}, M = /*#__PURE__*/ t.createElement(K.div, {
		...G(io(a, { global: !0 }), p),
		...C,
		role: T ? "dialog" : void 0,
		tabIndex: T ? -1 : void 0,
		"aria-label": a["aria-label"],
		"aria-labelledby": a["aria-labelledby"],
		ref: x,
		slot: a.slot || void 0,
		style: j,
		dir: a.dir,
		"data-trigger": a.trigger,
		"data-placement": _,
		"data-entering": S || void 0,
		"data-exiting": n || void 0
	}, !a.isNonModal && /*#__PURE__*/ t.createElement(im, { onDismiss: e.close }), /*#__PURE__*/ t.createElement(wf.Provider, { value: {
		...h,
		placement: _,
		ref: o
	} }, D), /*#__PURE__*/ t.createElement(im, { onDismiss: e.close }));
	return l ? /*#__PURE__*/ t.createElement(lm, {
		...a,
		shouldContainFocus: T,
		isExiting: n,
		portalContainer: r ?? c?.current ?? void 0
	}, M) : /*#__PURE__*/ t.createElement(lm, {
		...a,
		shouldContainFocus: T,
		isExiting: n,
		portalContainer: r
	}, !a.isNonModal && e.isOpen && /*#__PURE__*/ t.createElement("div", {
		"data-testid": "underlay",
		...m,
		style: {
			position: "fixed",
			inset: 0
		}
	}), /*#__PURE__*/ t.createElement("div", {
		ref: s,
		style: { display: "contents" }
	}, /*#__PURE__*/ t.createElement(hm.Provider, { value: s }, M)));
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ar-AE.mjs
var vm = {};
vm = { longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/bg-BG.mjs
var ym = {};
ym = { longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/cs-CZ.mjs
var bm = {};
bm = { longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/da-DK.mjs
var xm = {};
xm = { longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/de-DE.mjs
var Sm = {};
Sm = { longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/el-GR.mjs
var Cm = {};
Cm = { longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/en-US.mjs
var wm = {};
wm = { longPressMessage: "Long press or press Alt + ArrowDown to open menu" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/es-ES.mjs
var Tm = {};
Tm = { longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/et-EE.mjs
var Em = {};
Em = { longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/fi-FI.mjs
var Dm = {};
Dm = { longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/fr-FR.mjs
var Om = {};
Om = { longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu." };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/he-IL.mjs
var km = {};
km = { longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/hr-HR.mjs
var Am = {};
Am = { longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/hu-HU.mjs
var jm = {};
jm = { longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/it-IT.mjs
var Mm = {};
Mm = { longPressMessage: "Premi a lungo o premi Alt + Freccia giù per aprire il menu" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ja-JP.mjs
var Nm = {};
Nm = { longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ko-KR.mjs
var Pm = {};
Pm = { longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/lt-LT.mjs
var Fm = {};
Fm = { longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“." };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/lv-LV.mjs
var Im = {};
Im = { longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/nb-NO.mjs
var Lm = {};
Lm = { longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/nl-NL.mjs
var Rm = {};
Rm = { longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/pl-PL.mjs
var zm = {};
zm = { longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/pt-BR.mjs
var Bm = {};
Bm = { longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/pt-PT.mjs
var Vm = {};
Vm = { longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ro-RO.mjs
var Hm = {};
Hm = { longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/ru-RU.mjs
var Um = {};
Um = { longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sk-SK.mjs
var Wm = {};
Wm = { longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sl-SI.mjs
var Gm = {};
Gm = { longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sr-SP.mjs
var Km = {};
Km = { longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/sv-SE.mjs
var qm = {};
qm = { longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/tr-TR.mjs
var Jm = {};
Jm = { longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/uk-UA.mjs
var Ym = {};
Ym = { longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/zh-CN.mjs
var Xm = {};
Xm = { longPressMessage: "长按或按 Alt + 向下方向键以打开菜单" };
//#endregion
//#region node_modules/react-aria/dist/private/intl/menu/zh-TW.mjs
var Zm = {};
Zm = { longPressMessage: "長按或按 Alt+向下鍵以開啟功能表" };
//#endregion
//#region node_modules/react-aria/dist/private/menu/intlStrings.mjs
var Qm = {};
Qm = {
	"ar-AE": vm,
	"bg-BG": ym,
	"cs-CZ": bm,
	"da-DK": xm,
	"de-DE": Sm,
	"el-GR": Cm,
	"en-US": wm,
	"es-ES": Tm,
	"et-EE": Em,
	"fi-FI": Dm,
	"fr-FR": Om,
	"he-IL": km,
	"hr-HR": Am,
	"hu-HU": jm,
	"it-IT": Mm,
	"ja-JP": Nm,
	"ko-KR": Pm,
	"lt-LT": Fm,
	"lv-LV": Im,
	"nb-NO": Lm,
	"nl-NL": Rm,
	"pl-PL": zm,
	"pt-BR": Bm,
	"pt-PT": Vm,
	"ro-RO": Hm,
	"ru-RU": Um,
	"sk-SK": Wm,
	"sl-SI": Gm,
	"sr-SP": Km,
	"sv-SE": qm,
	"tr-TR": Jm,
	"uk-UA": Ym,
	"zh-CN": Xm,
	"zh-TW": Zm
};
//#endregion
//#region node_modules/react-aria/dist/private/overlays/useOverlayTrigger.mjs
function $m(e, t, n) {
	let { type: r } = e, { isOpen: i } = t;
	f(() => {
		n && n.current && $f.set(n.current, t.close);
	});
	let a;
	r === "menu" ? a = !0 : r === "listbox" && (a = "listbox");
	let o = jn();
	return {
		triggerProps: {
			"aria-haspopup": a,
			"aria-expanded": i,
			"aria-controls": i ? o : void 0,
			onPress: t.toggle
		},
		overlayProps: { id: o }
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/menu/useMenuTrigger.mjs
function eh(e) {
	return e && e.__esModule ? e.default : e;
}
function th(e, t, n) {
	let { type: r = "menu", isDisabled: i, trigger: a = "press" } = e, o = jn(), { triggerProps: s, overlayProps: c } = $m({ type: r }, t, n), l = (e) => {
		if (!i && !(a === "longPress" && !e.altKey) && n && n.current) switch (e.key) {
			case "Enter":
			case " ": if (a === "longPress" || e.isDefaultPrevented()) return;
			case "ArrowDown":
				"continuePropagation" in e || e.stopPropagation(), e.preventDefault(), t.toggle("first");
				break;
			case "ArrowUp":
				"continuePropagation" in e || e.stopPropagation(), e.preventDefault(), t.toggle("last");
				break;
			default: "continuePropagation" in e && e.continuePropagation();
		}
	}, u = Yi(eh(Qm), "@react-aria/menu"), { longPressProps: d } = Ld({
		isDisabled: i || a !== "longPress",
		accessibilityDescription: u.format("longPressMessage"),
		onLongPressStart() {
			t.close();
		},
		onLongPress() {
			t.open("first");
		}
	}), f = {
		preventFocusOnPress: !0,
		onPressStart(e) {
			e.pointerType !== "touch" && e.pointerType !== "keyboard" && !i && (sr(e.target), t.open(e.pointerType === "virtual" ? "first" : null));
		},
		onPress(e) {
			e.pointerType === "touch" && !i && (sr(e.target), t.toggle());
		}
	};
	return delete s.onPress, {
		menuTriggerProps: {
			...s,
			...a === "press" ? f : d,
			id: o,
			onKeyDown: l
		},
		menuProps: {
			...c,
			"aria-labelledby": o,
			autoFocus: t.focusStrategy || !0,
			onClose: t.close
		}
	};
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Dialog.mjs
var nh = /*#__PURE__*/ a(null), rh = {};
rh = {
	buttonLabel: "عرض المقترحات",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
		other: () => `${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
	})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
			other: () => `${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", محدد",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "مقترحات",
	selectedAnnouncement: (e) => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/bg-BG.mjs
var ih = {};
ih = {
	buttonLabel: "Покажи предложения",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
		other: () => `${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
	})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
			other: () => `${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", избрани",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/cs-CZ.mjs
var ah = {};
ah = {
	buttonLabel: "Zobrazit doporučení",
	countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount, {
		one: () => `je ${t.number(e.optionCount)} mo\u{17E}nost`,
		other: () => `jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount, {
			one: () => `s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,
			other: () => `se ${t.number(e.groupCount)} mo\u{17E}nostmi`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: " (vybráno)",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybr\xe1no`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/da-DK.mjs
var oh = {};
oh = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,
		other: () => `${t.number(e.optionCount)} muligheder tilg\xe6ngelige`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} mulighed`,
			other: () => `${t.number(e.groupCount)} muligheder`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valgt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/de-DE.mjs
var sh = {};
sh = {
	buttonLabel: "Empfehlungen anzeigen",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} Option`,
		other: () => `${t.number(e.optionCount)} Optionen`
	})} verf\xfcgbar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} Option`,
			other: () => `${t.number(e.groupCount)} Optionen`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", ausgewählt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Empfehlungen",
	selectedAnnouncement: (e) => `${e.optionText}, ausgew\xe4hlt`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/el-GR.mjs
var ch = {};
ch = {
	buttonLabel: "Προβολή προτάσεων",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
		other: () => `${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `
	})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
			other: () => `${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", επιλεγμένο",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Προτάσεις",
	selectedAnnouncement: (e) => `${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/en-US.mjs
var lh = {};
lh = {
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Entered group ${e.groupTitle}, with ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selected",
		other: ""
	}, e.isSelected)}`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} available.`,
	selectedAnnouncement: (e) => `${e.optionText}, selected`,
	buttonLabel: "Show suggestions",
	listboxLabel: "Suggestions"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/es-ES.mjs
var uh = {};
uh = {
	buttonLabel: "Mostrar sugerencias",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opci\xf3n`,
		other: () => `${t.number(e.optionCount)} opciones`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opci\xf3n`,
			other: () => `${t.number(e.groupCount)} opciones`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", seleccionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugerencias",
	selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/et-EE.mjs
var dh = {};
dh = {
	buttonLabel: "Kuva soovitused",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} valik`,
		other: () => `${t.number(e.optionCount)} valikud`
	})} saadaval.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} valik`,
			other: () => `${t.number(e.groupCount)} valikud`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valitud",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Soovitused",
	selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/fi-FI.mjs
var fh = {};
fh = {
	buttonLabel: "Näytä ehdotukset",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} vaihtoehto`,
		other: () => `${t.number(e.optionCount)} vaihtoehdot`
	})} saatavilla.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Mentiin ryhm\xe4\xe4n ${e.groupTitle}, ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} vaihtoehdon`,
			other: () => `${t.number(e.groupCount)} vaihtoehdon`
		})} kanssa.`,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valittu",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Ehdotukset",
	selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/fr-FR.mjs
var ph = {};
ph = {
	buttonLabel: "Afficher les suggestions",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", sélectionné(s)",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggestions",
	selectedAnnouncement: (e) => `${e.optionText}, s\xe9lectionn\xe9`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/he-IL.mjs
var mh = {};
mh = {
	buttonLabel: "הצג הצעות",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,
		other: () => `${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
	})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount, {
			one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,
			other: () => `${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", נבחר",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "הצעות",
	selectedAnnouncement: (e) => `${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/hr-HR.mjs
var hh = {};
hh = {
	buttonLabel: "Prikaži prijedloge",
	countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} opcije/a`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", odabranih",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Prijedlozi",
	selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/hu-HU.mjs
var gh = {};
gh = {
	buttonLabel: "Javaslatok megjelenítése",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} lehet\u{151}s\xe9g`,
		other: () => `${t.number(e.optionCount)} lehet\u{151}s\xe9g`
	})} \xe1ll rendelkez\xe9sre.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} lehet\u{151}s\xe9get`,
			other: () => `${t.number(e.groupCount)} lehet\u{151}s\xe9get`
		})} tartalmaz. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", kijelölve",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Javaslatok",
	selectedAnnouncement: (e) => `${e.optionText}, kijel\xf6lve`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/it-IT.mjs
var _h = {};
_h = {
	buttonLabel: "Mostra suggerimenti",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opzione disponibile`,
		other: () => `${t.number(e.optionCount)} opzioni disponibili`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opzione`,
			other: () => `${t.number(e.groupCount)} opzioni`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selezionato",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggerimenti",
	selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/ja-JP.mjs
var vh = {};
vh = {
	buttonLabel: "候補を表示",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
		other: () => `${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
	})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
			other: () => `${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
		})}\u{3092}\u{542B}\u{3080}\u{3002}`,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: "、選択済み",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "候補",
	selectedAnnouncement: (e) => `${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/ko-KR.mjs
var yh = {};
yh = {
	buttonLabel: "제안 사항 표시",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
		other: () => `${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`
	})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
			other: () => `${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 선택됨",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "제안",
	selectedAnnouncement: (e) => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/lt-LT.mjs
var bh = {};
bh = {
	buttonLabel: "Rodyti pasiūlymus",
	countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} parinktis`,
		other: () => `${t.number(e.optionCount)} parinktys (-i\u{173})`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} parinktimi`,
			other: () => `${t.number(e.groupCount)} parinktimis (-i\u{173})`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", pasirinkta",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Pasiūlymai",
	selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/lv-LV.mjs
var xh = {};
xh = {
	buttonLabel: "Rādīt ieteikumus",
	countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcijas`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opciju`,
			other: () => `${t.number(e.groupCount)} opcij\u{101}m`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", atlasīta",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Ieteikumi",
	selectedAnnouncement: (e) => `${e.optionText}, atlas\u{12B}ta`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/nb-NO.mjs
var Sh = {};
Sh = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativer`
	})} finnes.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativer`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valgt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/nl-NL.mjs
var Ch = {};
Ch = {
	buttonLabel: "Suggesties weergeven",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} optie`,
		other: () => `${t.number(e.optionCount)} opties`
	})} beschikbaar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} optie`,
			other: () => `${t.number(e.groupCount)} opties`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", geselecteerd",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggesties",
	selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/pl-PL.mjs
var wh = {};
wh = {
	buttonLabel: "Wyświetlaj sugestie",
	countAnnouncement: (e, t) => `dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcja`,
		other: () => `${t.number(e.optionCount)} opcje(-i)`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcj\u{105}`,
			other: () => `${t.number(e.groupCount)} opcjami`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", wybrano",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestie",
	selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/pt-BR.mjs
var Th = {};
Th = {
	buttonLabel: "Mostrar sugestões",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\xe7\xe3o`,
		other: () => `${t.number(e.optionCount)} op\xe7\xf5es`
	})} dispon\xedvel.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\xe7\xe3o`,
			other: () => `${t.number(e.groupCount)} op\xe7\xf5es`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selecionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/pt-PT.mjs
var Eh = {};
Eh = {
	buttonLabel: "Apresentar sugestões",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\xe7\xe3o`,
		other: () => `${t.number(e.optionCount)} op\xe7\xf5es`
	})} dispon\xedvel.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\xe7\xe3o`,
			other: () => `${t.number(e.groupCount)} op\xe7\xf5es`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selecionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/ro-RO.mjs
var Dh = {};
Dh = {
	buttonLabel: "Afișare sugestii",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\u{21B}iune`,
		other: () => `${t.number(e.optionCount)} op\u{21B}iuni`
	})} disponibile.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\u{21B}iune`,
			other: () => `${t.number(e.groupCount)} op\u{21B}iuni`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selectat",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestii",
	selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/ru-RU.mjs
var Oh = {};
Oh = {
	buttonLabel: "Показать предложения",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
		other: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`
	})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,
			other: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", выбранными",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/sk-SK.mjs
var kh = {};
kh = {
	buttonLabel: "Zobraziť návrhy",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,
		other: () => `${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`
	})} k dispoz\xedcii.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,
			other: () => `${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", vybraté",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybrat\xe9`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/sl-SI.mjs
var Ah = {};
Ah = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcija`,
			other: () => `${t.number(e.groupCount)} opcije`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", izbrano",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Predlogi",
	selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/sr-SP.mjs
var jh = {};
jh = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} optione/a`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", izabranih",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Predlozi",
	selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/sv-SE.mjs
var Mh = {};
Mh = {
	buttonLabel: "Visa förslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativ`
	})} tillg\xe4ngliga.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativ`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valda",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Förslag",
	selectedAnnouncement: (e) => `${e.optionText}, valda`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/tr-TR.mjs
var Nh = {};
Nh = {
	buttonLabel: "Önerileri göster",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} se\xe7enek`,
		other: () => `${t.number(e.optionCount)} se\xe7enekler`
	})} kullan\u{131}labilir.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} se\xe7enek`,
			other: () => `${t.number(e.groupCount)} se\xe7enekler`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", seçildi",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Öneriler",
	selectedAnnouncement: (e) => `${e.optionText}, se\xe7ildi`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/uk-UA.mjs
var Ph = {};
Ph = {
	buttonLabel: "Показати пропозиції",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
		other: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
	})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
			other: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", вибрано",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Пропозиції",
	selectedAnnouncement: (e) => `${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/zh-CN.mjs
var Fh = {};
Fh = {
	buttonLabel: "显示建议",
	countAnnouncement: (e, t) => `\u{6709} ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
		other: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`
	})}\u{53EF}\u{7528}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
			other: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 已选择",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "建议",
	selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/combobox/zh-TW.mjs
var Ih = {};
Ih = {
	buttonLabel: "顯示建議",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`,
		other: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`
	})} \u{53EF}\u{7528}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`,
			other: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 已選取",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "建議",
	selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};
//#endregion
//#region node_modules/react-aria/dist/private/combobox/intlStrings.mjs
var Lh = {};
Lh = {
	"ar-AE": rh,
	"bg-BG": ih,
	"cs-CZ": ah,
	"da-DK": oh,
	"de-DE": sh,
	"el-GR": ch,
	"en-US": lh,
	"es-ES": uh,
	"et-EE": dh,
	"fi-FI": fh,
	"fr-FR": ph,
	"he-IL": mh,
	"hr-HR": hh,
	"hu-HU": gh,
	"it-IT": _h,
	"ja-JP": vh,
	"ko-KR": yh,
	"lt-LT": bh,
	"lv-LV": xh,
	"nb-NO": Sh,
	"nl-NL": Ch,
	"pl-PL": wh,
	"pt-BR": Th,
	"pt-PT": Eh,
	"ro-RO": Dh,
	"ru-RU": Oh,
	"sk-SK": kh,
	"sl-SI": Ah,
	"sr-SP": jh,
	"sv-SE": Mh,
	"tr-TR": Nh,
	"uk-UA": Ph,
	"zh-CN": Fh,
	"zh-TW": Ih
};
//#endregion
//#region node_modules/react-aria/dist/private/combobox/useComboBox.mjs
function Rh(e) {
	return e && e.__esModule ? e.default : e;
}
function zh(e, t) {
	let { buttonRef: n, popoverRef: r, inputRef: i, listBoxRef: a, keyboardDelegate: o, layoutDelegate: s, shouldFocusWrap: c, isReadOnly: l, isDisabled: u } = e, d = v(null);
	n ??= d;
	let p = Yi(Rh(Lh), "@react-aria/combobox"), { menuTriggerProps: m, menuProps: h } = th({
		type: "listbox",
		isDisabled: u || l
	}, t, n);
	Hu.set(t, { id: h.id });
	let { collection: _ } = t, { disabledKeys: y } = t.selectionManager, b = g(() => o || new jd({
		collection: _,
		disabledKeys: y,
		ref: a,
		layoutDelegate: s
	}), [
		o,
		s,
		_,
		y,
		a
	]), { collectionProps: x } = kd({
		selectionManager: t.selectionManager,
		keyboardDelegate: b,
		disallowTypeAhead: !0,
		disallowEmptySelection: !0,
		shouldFocusWrap: c,
		ref: i,
		isVirtualized: !0
	}), S = Hr(), C = (n) => {
		if (!n.nativeEvent.isComposing) switch (n.key) {
			case "Enter":
			case "Tab":
				if (t.isOpen && n.key === "Enter" && n.preventDefault(), t.isOpen && a.current && t.selectionManager.focusedKey != null) {
					let e = t.collection.getItem(t.selectionManager.focusedKey);
					if (e?.props.href) {
						let r = a.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
						n.key === "Enter" && r instanceof HTMLAnchorElement && S.open(r, n, e.props.href, e.props.routerOptions), t.close();
						break;
					} else if (e?.props.onAction) {
						e.props.onAction(), t.close();
						break;
					}
				}
				(n.key === "Enter" || t.isOpen) && t.commit();
				break;
			case "Escape":
				(!t.selectionManager.isEmpty || t.inputValue === "" || e.allowsCustomValue) && n.continuePropagation(), t.revert();
				break;
			case "ArrowDown":
				t.open("first", "manual");
				break;
			case "ArrowUp":
				t.open("last", "manual");
				break;
			case "ArrowLeft":
			case "ArrowRight":
				t.selectionManager.setFocusedKey(null);
				break;
		}
	}, w = (i) => {
		let a = n?.current && n.current === i.relatedTarget, o = J(r.current, i.relatedTarget);
		a || o || (e.onBlur && e.onBlur(i), t.setFocused(!1));
	}, T = (n) => {
		t.isFocused || (e.onFocus && e.onFocus(n), t.setFocused(!0));
	}, E = Bh([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), { isInvalid: D, validationErrors: O, validationDetails: k } = t.displayValidation, { labelProps: A, inputProps: j, descriptionProps: M, errorMessageProps: N } = nl({
		...e,
		isRequired: e.selectionMode === "multiple" ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
		onChange: t.setInputValue,
		onKeyDown: l ? e.onKeyDown : pn(t.isOpen && x.onKeyDown, C, e.onKeyDown),
		onBlur: w,
		value: t.inputValue,
		defaultValue: t.defaultInputValue,
		onFocus: T,
		autoComplete: "off",
		validate: void 0,
		[Pc]: t,
		"aria-describedby": [E, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
	}, i);
	Uc(i, t.defaultValue, t.setValue);
	let P = (e) => {
		e.pointerType === "touch" && (i.current?.focus(), t.toggle(null, "manual"));
	}, F = (e) => {
		e.pointerType !== "touch" && (i.current?.focus(), t.toggle(e.pointerType === "keyboard" || e.pointerType === "virtual" ? "first" : null, "manual"));
	}, I = Ti({
		id: m.id,
		"aria-label": p.format("buttonLabel"),
		"aria-labelledby": e["aria-labelledby"] || A.id
	}), L = Ti({
		id: h.id,
		"aria-label": p.format("listboxLabel"),
		"aria-labelledby": e["aria-labelledby"] || A.id
	}), R = v(0), z = (e) => {
		if (u || l) return;
		if (e.timeStamp - R.current < 500) {
			e.preventDefault(), i.current?.focus();
			return;
		}
		let n = Y(e).getBoundingClientRect(), r = e.changedTouches[0], a = Math.ceil(n.left + .5 * n.width), o = Math.ceil(n.top + .5 * n.height);
		r.clientX === a && r.clientY === o && (e.preventDefault(), i.current?.focus(), t.toggle(null, "manual"), R.current = e.timeStamp);
	}, ee = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, B = ee?.parentKey ?? null, te = t.selectionManager.focusedKey ?? null, ne = v(B), re = v(te);
	f(() => {
		if (Pr() && ee != null && te != null && te !== re.current) {
			let e = t.selectionManager.isSelected(te), n = B == null ? null : t.collection.getItem(B), r = n?.["aria-label"] || (typeof n?.rendered == "string" ? n.rendered : "") || "";
			cc(p.format("focusAnnouncement", {
				isGroupChange: (n && B !== ne.current) ?? !1,
				groupTitle: r,
				groupCount: n ? [...Vd(n, t.collection)].length : 0,
				optionText: ee["aria-label"] || ee.textValue || "",
				isSelected: e
			}));
		}
		ne.current = B, re.current = te;
	});
	let V = Jd(t.collection), ie = v(V), ae = v(t.isOpen);
	f(() => {
		let e = t.isOpen !== ae.current && (t.selectionManager.focusedKey == null || Pr());
		t.isOpen && (e || V !== ie.current) && cc(p.format("countAnnouncement", { optionCount: V })), ie.current = V, ae.current = t.isOpen;
	});
	let oe = v(t.selectedKey);
	return f(() => {
		if (Pr() && t.isFocused && t.selectedItem && t.selectedKey !== oe.current) {
			let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "";
			cc(p.format("selectedAnnouncement", { optionText: e }));
		}
		oe.current = t.selectedKey;
	}), f(() => {
		if (t.isOpen) return kf([i.current, r.current].filter((e) => e != null));
	}, [
		t.isOpen,
		i,
		r
	]), _c(() => {
		!ee && i.current && tr(q(i.current)) === i.current && ar(i.current, null);
	}, [ee]), wi(a, "react-aria-item-action", t.isOpen ? () => {
		t.close();
	} : void 0), {
		labelProps: A,
		buttonProps: {
			...m,
			...I,
			excludeFromTabOrder: !0,
			preventFocusOnPress: !0,
			onPress: P,
			onPressStart: F,
			isDisabled: u || l
		},
		inputProps: G(j, {
			role: "combobox",
			"aria-expanded": m["aria-expanded"],
			"aria-controls": t.isOpen ? h.id : void 0,
			"aria-autocomplete": "list",
			"aria-activedescendant": ee ? Wu(t, ee.key) : void 0,
			onTouchEnd: z,
			autoCorrect: "off",
			spellCheck: "false"
		}),
		listBoxProps: G(h, L, {
			autoFocus: t.focusStrategy || !0,
			shouldUseVirtualFocus: !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			linkBehavior: "selection",
			UNSTABLE_itemBehavior: "action"
		}),
		valueProps: { id: E },
		descriptionProps: M,
		errorMessageProps: N,
		isInvalid: D,
		validationErrors: O,
		validationDetails: k
	};
}
function Bh(e = []) {
	let t = jn(), [n, r] = y(!0), [i, a] = y(e);
	return i.some((t, n) => !Object.is(t, e[n])) && (r(!0), a(e)), f(() => {
		n && !document.getElementById(t) && r(!1);
	}, [
		t,
		n,
		i
	]), n ? t : void 0;
}
//#endregion
//#region node_modules/react-stately/dist/private/combobox/useComboBoxState.mjs
function Vh(e) {
	let { defaultFilter: t, menuTrigger: n = "input", allowsEmptyCollection: r = !1, allowsCustomValue: i, shouldCloseOnBlur: a = !0, selectionMode: o = "single" } = e, [s, c] = y(!1), [l, d] = y(!1), [p, m] = y(null), h = g(() => e.defaultValue === void 0 ? o === "single" ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		o
	]), _ = g(() => e.value === void 0 ? o === "single" ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		o
	]), [b, x] = Zi(_, h, e.onChange), S = o === "single" && Array.isArray(b) ? b[0] : b, C = (t) => {
		if (o === "single") {
			let n = Array.isArray(t) ? t[0] ?? null : t;
			x(n), n !== S && e.onSelectionChange?.(n);
		} else {
			let e = [];
			Array.isArray(t) ? e = t : t != null && (e = [t]), x(e);
		}
	}, { collection: w, selectionManager: T, disabledKeys: E } = uf({
		...e,
		items: e.items ?? e.defaultItems,
		selectionMode: o,
		disallowEmptySelection: o === "single",
		allowDuplicateSelectionEvents: !0,
		selectedKeys: g(() => Gh(S), [S]),
		onSelectionChange: (t) => {
			if (t !== "all") if (o === "single") {
				let n = t.values().next().value ?? null;
				n === S ? (e.onSelectionChange?.(n), ae(), re()) : C(n);
			} else C([...t]);
		}
	}), D = o === "single" ? T.firstSelectedKey : null, O = g(() => [...T.selectedKeys].map((e) => w.getItem(e)).filter((e) => e != null), [T.selectedKeys, w]), [k, A] = Zi(e.inputValue, Wh(e.defaultInputValue, D, w) || "", e.onInputChange), [j] = y(S), [M] = y(k), N = w, P = g(() => e.items != null || !t ? w : Hh(w, k, t), [
		w,
		k,
		t,
		e.items
	]), [F, I] = y(P), L = v("focus"), R = (t) => {
		e.onOpenChange && e.onOpenChange(t, t ? L.current : void 0), T.setFocused(t), t || T.setFocusedKey(null);
	}, z = um({
		...e,
		onOpenChange: R,
		isOpen: void 0,
		defaultOpen: void 0
	}), ee = (t = null, i) => {
		let a = i === "manual" || i === "focus" && n === "focus";
		(r || P.size > 0 || a && N.size > 0 || e.items) && (a && !z.isOpen && e.items === void 0 && c(!0), L.current = i, m(t), z.open());
	}, B = (t = null, i) => {
		let a = i === "manual" || i === "focus" && n === "focus";
		!(r || P.size > 0 || a && N.size > 0 || e.items) && !z.isOpen || (a && !z.isOpen && e.items === void 0 && c(!0), z.isOpen || (L.current = i), ne(t));
	}, te = u(() => {
		I(s ? N : P);
	}, [
		s,
		N,
		P
	]), ne = u((e = null) => {
		z.isOpen && te(), m(e), z.toggle();
	}, [z, te]), re = u(() => {
		z.isOpen && (te(), z.close());
	}, [z, te]), [V, ie] = y(k), ae = () => {
		let e = D == null ? "" : w.getItem(D)?.textValue ?? "";
		ie(e), A(e);
	}, oe = v(S), se = v(D == null ? "" : w.getItem(D)?.textValue ?? "");
	f(() => {
		l && (P.size > 0 || r) && !z.isOpen && k !== V && n !== "manual" && ee(null, "input"), !s && !r && z.isOpen && P.size === 0 && re(), S != null && S !== oe.current && o === "single" && re(), k !== V && (T.setFocusedKey(null), c(!1), o === "single" && k === "" && (e.inputValue === void 0 || _ === void 0) && C(null)), S !== oe.current && (e.inputValue === void 0 || _ === void 0) ? ae() : V !== k && ie(k);
		let t = D == null ? "" : w.getItem(D)?.textValue ?? "";
		!l && D != null && e.inputValue === void 0 && D === oe.current && se.current !== t && (ie(t), A(t)), oe.current = S, se.current = t;
	});
	let ce = Fc({
		...e,
		value: g(() => Array.isArray(S) && S.length === 0 ? null : {
			inputValue: k,
			value: S,
			selectedKey: D
		}, [
			k,
			D,
			S
		])
	}), le = () => {
		i && D == null ? ue() : de();
	}, ue = () => {
		if (o === "multiple") {
			ie(k), re();
			return;
		}
		oe.current = null, C(null), re();
	}, de = (t = !1) => {
		if (_ !== void 0 && e.inputValue !== void 0) {
			let n = D == null ? "" : w.getItem(D)?.textValue ?? "";
			(t || o === "multiple" || k !== n) && (e.onSelectionChange?.(D), e.onChange?.(S)), ie(n), re();
		} else ae(), re();
	}, H = () => {
		i ? k === (D == null ? "" : w.getItem(D)?.textValue ?? "") ? de() : ue() : de();
	}, fe = () => {
		z.isOpen && T.focusedKey != null ? T.isSelected(T.focusedKey) && o === "single" ? de(!0) : T.select(T.focusedKey) : H();
	}, pe = v([k, S]), me = (t) => {
		t ? (pe.current = [k, S], n === "focus" && !e.isReadOnly && ee(null, "focus")) : (a && H(), (k !== pe.current[0] || S !== pe.current[1]) && ce.commitValidation()), d(t);
	}, he = g(() => z.isOpen ? s ? N : P : F, [
		z.isOpen,
		N,
		P,
		s,
		F
	]), ge = e.defaultSelectedKey ?? (o === "single" ? j : null);
	return {
		...ce,
		...z,
		focusStrategy: p,
		toggle: B,
		open: ee,
		close: H,
		selectionManager: T,
		value: S,
		defaultValue: h ?? j,
		setValue: C,
		selectedKey: D,
		selectedItems: O,
		defaultSelectedKey: ge,
		setSelectedKey: C,
		disabledKeys: E,
		isFocused: l,
		setFocused: me,
		selectedItem: O[0] ?? null,
		collection: he,
		inputValue: k,
		defaultInputValue: Wh(e.defaultInputValue, ge, w) ?? M,
		setInputValue: A,
		commit: fe,
		revert: le
	};
}
function Hh(e, t, n) {
	return new Qd(Uh(e, e, t, n));
}
function Uh(e, t, n, r) {
	let i = [];
	for (let a of t) if (a.type === "section" && a.hasChildNodes) {
		let t = Uh(e, Vd(a, e), n, r);
		[...t].some((e) => e.type === "item") && i.push({
			...a,
			childNodes: t
		});
	} else (a.type === "item" && r(a.textValue, n) || a.type !== "item") && i.push({ ...a });
	return i;
}
function Wh(e, t, n) {
	return e == null && t != null ? n.getItem(t)?.textValue ?? "" : e;
}
function Gh(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
//#endregion
//#region node_modules/react-aria/dist/private/i18n/useFilter.mjs
function Kh(e) {
	let t = Nd({
		usage: "search",
		...e
	}), n = u((e, n) => n.length === 0 ? !0 : (e = e.normalize("NFC"), n = n.normalize("NFC"), t.compare(e.slice(0, n.length), n) === 0), [t]), r = u((e, n) => n.length === 0 ? !0 : (e = e.normalize("NFC"), n = n.normalize("NFC"), t.compare(e.slice(-n.length), n) === 0), [t]), i = u((e, n) => {
		if (n.length === 0) return !0;
		e = e.normalize("NFC"), n = n.normalize("NFC");
		let r = 0, i = n.length;
		for (; r + i <= e.length; r++) {
			let a = e.slice(r, r + i);
			if (t.compare(n, a) === 0) return !0;
		}
		return !1;
	}, [t]);
	return g(() => ({
		startsWith: n,
		endsWith: r,
		contains: i
	}), [
		n,
		r,
		i
	]);
}
//#endregion
//#region node_modules/react-aria-components/dist/private/ComboBox.mjs
var qh = /*#__PURE__*/ a(null), Jh = /*#__PURE__*/ a(null), Yh = /*#__PURE__*/ Ea(function(e, n) {
	[e, n] = Un(e, n, qh);
	let { children: r, isDisabled: i = !1, isInvalid: a = !1, isRequired: o = !1, isReadOnly: s = !1 } = e, c = g(() => /*#__PURE__*/ t.createElement(mf.Provider, { value: { items: e.items ?? e.defaultItems } }, typeof r == "function" ? r({
		isOpen: !1,
		isDisabled: i,
		isInvalid: a,
		isRequired: o,
		defaultChildren: null,
		isReadOnly: s
	}) : r), [
		r,
		i,
		a,
		o,
		s,
		e.items,
		e.defaultItems
	]);
	return /*#__PURE__*/ t.createElement(Na, { content: c }, (r) => /*#__PURE__*/ t.createElement(Zh, {
		props: e,
		collection: r,
		comboBoxRef: n
	}));
}), Xh = [
	Ms,
	fc,
	$c,
	Zc,
	gc
];
function Zh({ props: e, collection: n, comboBoxRef: r }) {
	let { name: i, formValue: a = "key", allowsCustomValue: o } = e;
	o && (a = "text");
	let { validationBehavior: s } = Hn(Vc) || {}, c = e.validationBehavior ?? s ?? "native", { contains: l } = Kh({ sensitivity: "base" }), d = Vh({
		...e,
		defaultFilter: e.defaultFilter || l,
		items: e.items,
		children: void 0,
		collection: n,
		validationBehavior: c
	}), f = v(null), p = v(null), m = v(null), h = v(null), _ = v(null), [b, x] = Wn(!e["aria-label"] && !e["aria-labelledby"]), { buttonProps: S, inputProps: C, listBoxProps: w, labelProps: T, descriptionProps: E, errorMessageProps: D, valueProps: O, ...k } = zh({
		...Gn(e),
		label: x,
		inputRef: p,
		buttonRef: f,
		listBoxRef: h,
		popoverRef: _,
		name: a === "text" ? i : void 0,
		validationBehavior: c
	}, d), [A, j] = y(null);
	np({
		ref: p,
		onResize: u(() => {
			if (p.current && !m.current) {
				let e = f.current?.getBoundingClientRect(), t = p.current.getBoundingClientRect(), n = e ? Math.min(e.left, t.left) : t.left;
				j((e ? Math.max(e.right, t.right) : t.right) - n + "px");
			}
		}, [
			f,
			p,
			j
		])
	});
	let M = g(() => ({ get current() {
		return m.current || p.current;
	} }), [m, p]), N = g(() => ({
		isOpen: d.isOpen,
		isDisabled: e.isDisabled || !1,
		isInvalid: k.isInvalid || !1,
		isRequired: e.isRequired || !1,
		isReadOnly: e.isReadOnly || !1
	}), [
		d.isOpen,
		e.isDisabled,
		k.isInvalid,
		e.isRequired,
		e.isReadOnly
	]), P = Vn({
		...e,
		values: N,
		defaultClassName: "react-aria-ComboBox"
	}), F = io(e, { global: !0 });
	delete F.id;
	let I = [];
	if (i && a === "key") {
		let n = Array.isArray(d.value) ? d.value : [d.value];
		n.length === 0 && (n = [null]), I = n.map((n, r) => /*#__PURE__*/ t.createElement("input", {
			key: r,
			type: "hidden",
			name: i,
			form: e.form,
			value: n ?? ""
		}));
	}
	return /*#__PURE__*/ t.createElement(Bn, { values: [
		[Jh, d],
		[Ms, {
			...T,
			ref: b
		}],
		[fc, {
			...S,
			ref: f,
			isPressed: d.isOpen
		}],
		[$c, {
			...C,
			ref: p
		}],
		[nh, d],
		[mm, {
			ref: _,
			triggerRef: M,
			scrollRef: h,
			placement: "bottom start",
			isNonModal: !0,
			trigger: "ComboBox",
			style: { "--trigger-width": A },
			clearContexts: Xh
		}],
		[mf, {
			...w,
			ref: h
		}],
		[hf, d],
		[gc, { slots: {
			description: E,
			errorMessage: D
		} }],
		[Zc, {
			ref: m,
			isInvalid: k.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[kc, k],
		[Qh, O]
	] }, /*#__PURE__*/ t.createElement(K.div, {
		...F,
		...P,
		ref: r,
		slot: e.slot || void 0,
		"data-focused": d.isFocused || void 0,
		"data-open": d.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-invalid": k.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, P.children, I));
}
var Qh = /*#__PURE__*/ a(null), $h = {};
$h = {
	deselectedItem: (e) => `${e.item} \u{63A}\u{64A}\u{631} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
	longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
	select: "تحديد",
	selectedAll: "جميع العناصر المحددة.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "لم يتم تحديد عناصر",
		one: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`,
		other: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/bg-BG.mjs
var eg = {};
eg = {
	deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{435} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`,
	longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
	select: "Изберете",
	selectedAll: "Всички елементи са избрани.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Няма избрани елементи",
		one: () => `${t.number(e.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
		other: () => `${t.number(e.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/cs-CZ.mjs
var tg = {};
tg = {
	deselectedItem: (e) => `Polo\u{17E}ka ${e.item} nen\xed vybr\xe1na.`,
	longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
	select: "Vybrat",
	selectedAll: "Vybrány všechny položky.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nevybrány žádné položky",
		one: () => `Vybr\xe1na ${t.number(e.count)} polo\u{17E}ka`,
		other: () => `Vybr\xe1no ${t.number(e.count)} polo\u{17E}ek`
	})}.`,
	selectedItem: (e) => `Vybr\xe1na polo\u{17E}ka ${e.item}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/da-DK.mjs
var ng = {};
ng = {
	deselectedItem: (e) => `${e.item} ikke valgt.`,
	longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
	select: "Vælg",
	selectedAll: "Alle elementer valgt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ingen elementer valgt",
		one: () => `${t.number(e.count)} element valgt`,
		other: () => `${t.number(e.count)} elementer valgt`
	})}.`,
	selectedItem: (e) => `${e.item} valgt.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/de-DE.mjs
var rg = {};
rg = {
	deselectedItem: (e) => `${e.item} nicht ausgew\xe4hlt.`,
	longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
	select: "Auswählen",
	selectedAll: "Alle Elemente ausgewählt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Keine Elemente ausgewählt",
		one: () => `${t.number(e.count)} Element ausgew\xe4hlt`,
		other: () => `${t.number(e.count)} Elemente ausgew\xe4hlt`
	})}.`,
	selectedItem: (e) => `${e.item} ausgew\xe4hlt.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/el-GR.mjs
var ig = {};
ig = {
	deselectedItem: (e) => `\u{394}\u{3B5}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${e.item}.`,
	longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
	select: "Επιλογή",
	selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Δεν επιλέχθηκαν στοιχεία",
		one: () => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${t.number(e.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
		other: () => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B1}\u{3BD} ${t.number(e.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
	})}.`,
	selectedItem: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${e.item}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/en-US.mjs
var ag = {};
ag = {
	deselectedItem: (e) => `${e.item} not selected.`,
	select: "Select",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "No items selected",
		one: () => `${t.number(e.count)} item selected`,
		other: () => `${t.number(e.count)} items selected`
	})}.`,
	selectedAll: "All items selected.",
	selectedItem: (e) => `${e.item} selected.`,
	longPressToSelect: "Long press to enter selection mode."
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/es-ES.mjs
var og = {};
og = {
	deselectedItem: (e) => `${e.item} no seleccionado.`,
	longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
	select: "Seleccionar",
	selectedAll: "Todos los elementos seleccionados.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ningún elemento seleccionado",
		one: () => `${t.number(e.count)} elemento seleccionado`,
		other: () => `${t.number(e.count)} elementos seleccionados`
	})}.`,
	selectedItem: (e) => `${e.item} seleccionado.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/et-EE.mjs
var sg = {};
sg = {
	deselectedItem: (e) => `${e.item} pole valitud.`,
	longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
	select: "Vali",
	selectedAll: "Kõik üksused valitud.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Üksusi pole valitud",
		one: () => `${t.number(e.count)} \xfcksus valitud`,
		other: () => `${t.number(e.count)} \xfcksust valitud`
	})}.`,
	selectedItem: (e) => `${e.item} valitud.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/fi-FI.mjs
var cg = {};
cg = {
	deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
	longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
	select: "Valitse",
	selectedAll: "Kaikki kohteet valittu.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ei yhtään kohdetta valittu",
		one: () => `${t.number(e.count)} kohde valittu`,
		other: () => `${t.number(e.count)} kohdetta valittu`
	})}.`,
	selectedItem: (e) => `${e.item} valittu.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/fr-FR.mjs
var lg = {};
lg = {
	deselectedItem: (e) => `${e.item} non s\xe9lectionn\xe9.`,
	longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
	select: "Sélectionner",
	selectedAll: "Tous les éléments sélectionnés.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Aucun élément sélectionné",
		one: () => `${t.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
		other: () => `${t.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
	})}.`,
	selectedItem: (e) => `${e.item} s\xe9lectionn\xe9.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/he-IL.mjs
var ug = {};
ug = {
	deselectedItem: (e) => `${e.item} \u{5DC}\u{5D0} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`,
	longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
	select: "בחר",
	selectedAll: "כל הפריטים נבחרו.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "לא נבחרו פריטים",
		one: () => `\u{5E4}\u{5E8}\u{5D9}\u{5D8} ${t.number(e.count)} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
		other: () => `${t.number(e.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/hr-HR.mjs
var dg = {};
dg = {
	deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
	longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
	select: "Odaberite",
	selectedAll: "Odabrane su sve stavke.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nije odabrana nijedna stavka",
		one: () => `Odabrana je ${t.number(e.count)} stavka`,
		other: () => `Odabrano je ${t.number(e.count)} stavki`
	})}.`,
	selectedItem: (e) => `Stavka ${e.item} je odabrana.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/hu-HU.mjs
var fg = {};
fg = {
	deselectedItem: (e) => `${e.item} nincs kijel\xf6lve.`,
	longPressToSelect: "Nyomja hosszan a kijelöléshez.",
	select: "Kijelölés",
	selectedAll: "Az összes elem kijelölve.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Egy elem sincs kijelölve",
		one: () => `${t.number(e.count)} elem kijel\xf6lve`,
		other: () => `${t.number(e.count)} elem kijel\xf6lve`
	})}.`,
	selectedItem: (e) => `${e.item} kijel\xf6lve.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/it-IT.mjs
var pg = {};
pg = {
	deselectedItem: (e) => `${e.item} non selezionato.`,
	longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
	select: "Seleziona",
	selectedAll: "Tutti gli elementi selezionati.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nessun elemento selezionato",
		one: () => `${t.number(e.count)} elemento selezionato`,
		other: () => `${t.number(e.count)} elementi selezionati`
	})}.`,
	selectedItem: (e) => `${e.item} selezionato.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/ja-JP.mjs
var mg = {};
mg = {
	deselectedItem: (e) => `${e.item} \u{304C}\u{9078}\u{629E}\u{3055}\u{308C}\u{3066}\u{3044}\u{307E}\u{305B}\u{3093}\u{3002}`,
	longPressToSelect: "長押しして選択モードを開きます。",
	select: "選択",
	selectedAll: "すべての項目を選択しました。",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "項目が選択されていません",
		one: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`,
		other: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`
	})}\u{3002}`,
	selectedItem: (e) => `${e.item} \u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/ko-KR.mjs
var hg = {};
hg = {
	deselectedItem: (e) => `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C9C0} \u{C54A}\u{C558}\u{C2B5}\u{B2C8}\u{B2E4}.`,
	longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
	select: "선택",
	selectedAll: "모든 항목이 선택되었습니다.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "선택된 항목이 없습니다",
		one: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`,
		other: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`
	})}.`,
	selectedItem: (e) => `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/lt-LT.mjs
var gg = {};
gg = {
	deselectedItem: (e) => `${e.item} nepasirinkta.`,
	longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
	select: "Pasirinkti",
	selectedAll: "Pasirinkti visi elementai.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nepasirinktas nė vienas elementas",
		one: () => `Pasirinktas ${t.number(e.count)} elementas`,
		other: () => `Pasirinkta element\u{173}: ${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `Pasirinkta: ${e.item}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/lv-LV.mjs
var _g = {};
_g = {
	deselectedItem: (e) => `Vienums ${e.item} nav atlas\u{12B}ts.`,
	longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
	select: "Atlasīt",
	selectedAll: "Atlasīti visi vienumi.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nav atlasīts neviens vienums",
		one: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`,
		other: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `Atlas\u{12B}ts vienums ${e.item}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/nb-NO.mjs
var vg = {};
vg = {
	deselectedItem: (e) => `${e.item} er ikke valgt.`,
	longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
	select: "Velg",
	selectedAll: "Alle elementer er valgt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ingen elementer er valgt",
		one: () => `${t.number(e.count)} element er valgt`,
		other: () => `${t.number(e.count)} elementer er valgt`
	})}.`,
	selectedItem: (e) => `${e.item} er valgt.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/nl-NL.mjs
var yg = {};
yg = {
	deselectedItem: (e) => `${e.item} niet geselecteerd.`,
	longPressToSelect: "Druk lang om de selectiemodus te openen.",
	select: "Selecteren",
	selectedAll: "Alle items geselecteerd.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Geen items geselecteerd",
		one: () => `${t.number(e.count)} item geselecteerd`,
		other: () => `${t.number(e.count)} items geselecteerd`
	})}.`,
	selectedItem: (e) => `${e.item} geselecteerd.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/pl-PL.mjs
var bg = {};
bg = {
	deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
	longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
	select: "Zaznacz",
	selectedAll: "Wszystkie zaznaczone elementy.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nie zaznaczono żadnych elementów",
		one: () => `${t.number(e.count)} zaznaczony element`,
		other: () => `${t.number(e.count)} zaznaczonych element\xf3w`
	})}.`,
	selectedItem: (e) => `Zaznaczono ${e.item}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/pt-BR.mjs
var xg = {};
xg = {
	deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
	longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
	select: "Selecionar",
	selectedAll: "Todos os itens selecionados.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nenhum item selecionado",
		one: () => `${t.number(e.count)} item selecionado`,
		other: () => `${t.number(e.count)} itens selecionados`
	})}.`,
	selectedItem: (e) => `${e.item} selecionado.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/pt-PT.mjs
var Sg = {};
Sg = {
	deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
	longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
	select: "Selecionar",
	selectedAll: "Todos os itens selecionados.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nenhum item selecionado",
		one: () => `${t.number(e.count)} item selecionado`,
		other: () => `${t.number(e.count)} itens selecionados`
	})}.`,
	selectedItem: (e) => `${e.item} selecionado.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/ro-RO.mjs
var Cg = {};
Cg = {
	deselectedItem: (e) => `${e.item} neselectat.`,
	longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
	select: "Selectare",
	selectedAll: "Toate elementele selectate.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Niciun element selectat",
		one: () => `${t.number(e.count)} element selectat`,
		other: () => `${t.number(e.count)} elemente selectate`
	})}.`,
	selectedItem: (e) => `${e.item} selectat.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/ru-RU.mjs
var wg = {};
wg = {
	deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
	longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
	select: "Выбрать",
	selectedAll: "Выбраны все элементы.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Нет выбранных элементов",
		one: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}`,
		other: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/sk-SK.mjs
var Tg = {};
Tg = {
	deselectedItem: (e) => `Nevybrat\xe9 polo\u{17E}ky: ${e.item}.`,
	longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
	select: "Vybrať",
	selectedAll: "Všetky vybraté položky.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Žiadne vybraté položky",
		one: () => `${t.number(e.count)} vybrat\xe1 polo\u{17E}ka`,
		other: () => `Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `Vybrat\xe9 polo\u{17E}ky: ${e.item}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/sl-SI.mjs
var Eg = {};
Eg = {
	deselectedItem: (e) => `Element ${e.item} ni izbran.`,
	longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
	select: "Izberite",
	selectedAll: "Vsi elementi so izbrani.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Noben element ni izbran",
		one: () => `${t.number(e.count)} element je izbran`,
		other: () => `${t.number(e.count)} elementov je izbranih`
	})}.`,
	selectedItem: (e) => `Element ${e.item} je izbran.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/sr-SP.mjs
var Dg = {};
Dg = {
	deselectedItem: (e) => `${e.item} nije izabrano.`,
	longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
	select: "Izaberite",
	selectedAll: "Izabrane su sve stavke.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nije izabrana nijedna stavka",
		one: () => `Izabrana je ${t.number(e.count)} stavka`,
		other: () => `Izabrano je ${t.number(e.count)} stavki`
	})}.`,
	selectedItem: (e) => `${e.item} je izabrano.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/sv-SE.mjs
var Og = {};
Og = {
	deselectedItem: (e) => `${e.item} ej markerat.`,
	longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
	select: "Markera",
	selectedAll: "Alla markerade objekt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Inga markerade objekt",
		one: () => `${t.number(e.count)} markerat objekt`,
		other: () => `${t.number(e.count)} markerade objekt`
	})}.`,
	selectedItem: (e) => `${e.item} markerat.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/tr-TR.mjs
var kg = {};
kg = {
	deselectedItem: (e) => `${e.item} se\xe7ilmedi.`,
	longPressToSelect: "Seçim moduna girmek için uzun basın.",
	select: "Seç",
	selectedAll: "Tüm ögeler seçildi.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Hiçbir öge seçilmedi",
		one: () => `${t.number(e.count)} \xf6ge se\xe7ildi`,
		other: () => `${t.number(e.count)} \xf6ge se\xe7ildi`
	})}.`,
	selectedItem: (e) => `${e.item} se\xe7ildi.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/uk-UA.mjs
var Ag = {};
Ag = {
	deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
	longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
	select: "Вибрати",
	selectedAll: "Усі елементи вибрано.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Жодних елементів не вибрано",
		one: () => `${t.number(e.count)} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
		other: () => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}\u{432}: ${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/zh-CN.mjs
var jg = {};
jg = {
	deselectedItem: (e) => `\u{672A}\u{9009}\u{62E9} ${e.item}\u{3002}`,
	longPressToSelect: "长按以进入选择模式。",
	select: "选择",
	selectedAll: "已选择所有项目。",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "未选择项目",
		one: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`,
		other: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`
	})}\u{3002}`,
	selectedItem: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.item}\u{3002}`
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/grid/zh-TW.mjs
var Mg = {};
Mg = {
	deselectedItem: (e) => `\u{672A}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
	longPressToSelect: "長按以進入選擇模式。",
	select: "選取",
	selectedAll: "已選取所有項目。",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "未選取任何項目",
		one: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`,
		other: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`
	})}\u{3002}`,
	selectedItem: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`
};
//#endregion
//#region node_modules/react-aria/dist/private/grid/intlStrings.mjs
var Ng = {};
Ng = {
	"ar-AE": $h,
	"bg-BG": eg,
	"cs-CZ": tg,
	"da-DK": ng,
	"de-DE": rg,
	"el-GR": ig,
	"en-US": ag,
	"es-ES": og,
	"et-EE": sg,
	"fi-FI": cg,
	"fr-FR": lg,
	"he-IL": ug,
	"hr-HR": dg,
	"hu-HU": fg,
	"it-IT": pg,
	"ja-JP": mg,
	"ko-KR": hg,
	"lt-LT": gg,
	"lv-LV": _g,
	"nb-NO": vg,
	"nl-NL": yg,
	"pl-PL": bg,
	"pt-BR": xg,
	"pt-PT": Sg,
	"ro-RO": Cg,
	"ru-RU": wg,
	"sk-SK": Tg,
	"sl-SI": Eg,
	"sr-SP": Dg,
	"sv-SE": Og,
	"tr-TR": kg,
	"uk-UA": Ag,
	"zh-CN": jg,
	"zh-TW": Mg
};
//#endregion
//#region node_modules/react-aria/dist/private/grid/useGridSelectionAnnouncement.mjs
function Pg(e) {
	return e && e.__esModule ? e.default : e;
}
function Fg(e, t) {
	let { getRowText: n = (e) => t.collection.getTextValue?.(e) ?? t.collection.getItem(e)?.textValue } = e, r = Yi(Pg(Ng), "@react-aria/grid"), i = t.selectionManager.rawSelection, a = v(i), o = u(() => {
		if (!t.selectionManager.isFocused || i === a.current) {
			a.current = i;
			return;
		}
		let e = Ig(i, a.current), o = Ig(a.current, i), s = t.selectionManager.selectionBehavior === "replace", c = [];
		if (t.selectionManager.selectedKeys.size === 1 && s) {
			let e = t.selectionManager.selectedKeys.keys().next().value;
			if (e != null && t.collection.getItem(e)) {
				let t = n(e);
				t && c.push(r.format("selectedItem", { item: t }));
			}
		} else if (e.size === 1 && o.size === 0) {
			let t = e.keys().next().value;
			if (t != null) {
				let e = n(t);
				e && c.push(r.format("selectedItem", { item: e }));
			}
		} else if (o.size === 1 && e.size === 0) {
			let e = o.keys().next().value;
			if (e != null && t.collection.getItem(e)) {
				let t = n(e);
				t && c.push(r.format("deselectedItem", { item: t }));
			}
		}
		t.selectionManager.selectionMode === "multiple" && (c.length === 0 || i === "all" || i.size > 1 || a.current === "all" || a.current?.size > 1) && c.push(i === "all" ? r.format("selectedAll") : r.format("selectedCount", { count: i.size })), c.length > 0 && cc(c.join(" ")), a.current = i;
	}, [
		i,
		t.selectionManager.selectedKeys,
		t.selectionManager.isFocused,
		t.selectionManager.selectionBehavior,
		t.selectionManager.selectionMode,
		t.collection,
		n,
		r
	]);
	_c(() => {
		if (t.selectionManager.isFocused) o();
		else {
			let e = requestAnimationFrame(o);
			return () => cancelAnimationFrame(e);
		}
	}, [i, t.selectionManager.isFocused]);
}
function Ig(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (e === "all" || t === "all") return n;
	for (let r of e.keys()) t.has(r) || n.add(r);
	return n;
}
//#endregion
//#region node_modules/react-aria/dist/private/focus/useHasTabbableChild.mjs
function Lg(e, t) {
	let n = t?.isDisabled, [r, i] = y(!1);
	return W(() => {
		if (e?.current && !n) {
			let t = () => {
				e.current && i(!!gd(e.current, { tabbable: !0 }).nextNode());
			};
			t();
			let n = new MutationObserver(t);
			return n.observe(e.current, {
				subtree: !0,
				childList: !0,
				attributes: !0,
				attributeFilter: ["tabIndex", "disabled"]
			}), () => {
				n.disconnect();
			};
		}
	}), n ? !1 : r;
}
//#endregion
//#region node_modules/react-aria/dist/private/grid/useHighlightSelectionDescription.mjs
function Rg(e) {
	return e && e.__esModule ? e.default : e;
}
function zg(e) {
	let t = Yi(Rg(Ng), "@react-aria/grid"), n = hi(), r = (n === "pointer" || n === "virtual" || n == null) && typeof window < "u" && "ontouchstart" in window;
	return Tc(g(() => {
		let n = e.selectionManager.selectionMode, i = e.selectionManager.selectionBehavior, a;
		return r && (a = t.format("longPressToSelect")), i === "replace" && n !== "none" && e.hasItemActions ? a : void 0;
	}, [
		e.selectionManager.selectionMode,
		e.selectionManager.selectionBehavior,
		e.hasItemActions,
		t,
		r
	]));
}
//#endregion
//#region node_modules/react-aria/dist/private/grid/useGridSelectionCheckbox.mjs
function Bg(e) {
	return e && e.__esModule ? e.default : e;
}
function Vg(e, t) {
	let { key: n } = e, r = t.selectionManager, i = jn(), a = !t.selectionManager.canSelectItem(n), o = t.selectionManager.isSelected(n);
	return { checkboxProps: {
		id: i,
		"aria-label": Yi(Bg(Ng), "@react-aria/grid").format("select"),
		isSelected: o,
		isDisabled: a,
		onChange: () => r.toggleSelection(n)
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/meter/useMeter.mjs
function Hg(e) {
	let { progressBarProps: t, labelProps: n } = ic(e);
	return {
		meterProps: {
			...t,
			role: "meter progressbar"
		},
		labelProps: n
	};
}
for (var Ug = /*#__PURE__*/ a(null), Wg = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, Ug);
	let { value: r = 0, minValue: i = 0, maxValue: a = 100 } = e;
	r = tc(r, i, a);
	let [o, s] = Wn(!e["aria-label"] && !e["aria-labelledby"]), { meterProps: c, labelProps: l } = Hg({
		...e,
		label: s
	}), u = (r - i) / (a - i) * 100, d = Vn({
		...e,
		defaultClassName: "react-aria-Meter",
		values: {
			percentage: u,
			valueText: c["aria-valuetext"]
		}
	}), f = io(e, { global: !0 });
	return /*#__PURE__*/ t.createElement(K.div, {
		...G(f, d, c),
		ref: n,
		slot: e.slot || void 0
	}, /*#__PURE__*/ t.createElement(Ms.Provider, { value: {
		...l,
		ref: o,
		elementType: "span"
	} }, d.children));
}), Gg = /*#__PURE__*/ a(null), Kg = /*#__PURE__*/ a(null), qg = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, Gg);
	let { validationBehavior: r } = Hn(Vc) || {}, i = e.validationBehavior ?? r ?? "native", { locale: a } = Ii(), o = ku({
		...e,
		locale: a,
		validationBehavior: i
	}), s = v(null), [c, l] = Wn(!e["aria-label"] && !e["aria-labelledby"]), { labelProps: u, groupProps: d, inputProps: f, incrementButtonProps: p, decrementButtonProps: m, descriptionProps: h, errorMessageProps: g, ..._ } = Eu({
		...Gn(e),
		label: l,
		validationBehavior: i
	}, o, s), y = Vn({
		...e,
		values: {
			state: o,
			isDisabled: e.isDisabled || !1,
			isInvalid: _.isInvalid || !1,
			isRequired: e.isRequired || !1,
			isReadOnly: e.isReadOnly || !1
		},
		defaultClassName: "react-aria-NumberField"
	}), b = io(e, { global: !0 });
	return delete b.id, /*#__PURE__*/ t.createElement(Bn, { values: [
		[Kg, o],
		[Zc, d],
		[$c, {
			...f,
			ref: s
		}],
		[Ms, {
			...u,
			ref: c
		}],
		[fc, { slots: {
			increment: p,
			decrement: m
		} }],
		[gc, { slots: {
			description: h,
			errorMessage: g
		} }],
		[kc, _]
	] }, /*#__PURE__*/ t.createElement(K.div, {
		...b,
		...y,
		ref: n,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": _.isInvalid || void 0
	}), e.name && /*#__PURE__*/ t.createElement("input", {
		type: "hidden",
		name: e.name,
		form: e.form,
		value: isNaN(o.numberValue) ? "" : o.numberValue,
		disabled: e.isDisabled || void 0
	}));
}), Jg = 10, Yg = 5, Xg = class {
	setup(e, t, n) {
		this.delegate = e, this.state = t, this.direction = n;
	}
	getDropTargetFromPoint(e, t, n) {
		let r = this.delegate.getDropTargetFromPoint(e, t, n);
		return !r || r.type === "root" ? r : this.resolveDropTarget(r, e, t, n);
	}
	resolveDropTarget(e, t, n, r) {
		let i = this.pointerTracking, a = n - i.lastY, o = t - i.lastX, s = i.yDirection, c = i.xDirection;
		if (Math.abs(a) > Yg && (s = a > 0 ? "down" : "up", i.yDirection = s, i.lastY = n), Math.abs(o) > Jg && (c = o > 0 ? "right" : "left", i.xDirection = c, i.lastX = t), e.dropPosition === "before") {
			let t = this.state.collection.getKeyBefore(e.key);
			for (; t != null;) {
				let e = this.state.collection.getItem(t);
				if (e?.type === "item") break;
				t = e?.parentKey ?? null;
			}
			if (t != null) {
				let n = {
					type: "item",
					key: t,
					dropPosition: "after"
				};
				r(n) && (e = n);
			}
		}
		let l = this.getPotentialTargets(e, r);
		if (l.length === 0) return { type: "root" };
		let u;
		return l.length > 1 ? u = this.selectTarget(l, e, t, n, s, c) : (u = l[0], i.boundaryContext = null), u;
	}
	getPotentialTargets(e, t) {
		if (e.dropPosition === "on") return [e];
		let n = e, r = this.state.collection, i = r.getItem(n.key);
		for (; i && i?.type !== "item" && i.nextKey != null;) n.key = i.nextKey, i = r.getItem(i.nextKey);
		let a = [n];
		if (i && i.hasChildNodes && this.state.expandedKeys.has(i.key) && r.getChildren && n.dropPosition === "after") {
			let e = i.firstChildKey == null ? null : r.getItem(i.firstChildKey);
			for (; e && e.type !== "item";) e = e.nextKey == null ? null : r.getItem(e.nextKey);
			if (e?.type === "item") {
				let n = {
					type: "item",
					key: e.key,
					dropPosition: "before"
				};
				return t(n) ? [n] : [];
			}
		}
		if (i?.nextKey != null) return [e];
		let o = i?.parentKey, s = [];
		for (; o != null;) {
			let e = r.getItem(o), n = e?.nextKey == null ? null : r.getItem(e.nextKey);
			if (!n || n.parentKey !== o) {
				let e = {
					type: "item",
					key: o,
					dropPosition: "after"
				};
				if (t(e) && s.push(e), n) break;
			}
			o = e?.parentKey;
		}
		if (s.length > 0 && a.push(...s), a.length === 1) {
			let e = r.getKeyAfter(n.key), a = e == null ? null : r.getItem(e);
			if (e != null && a && i && a.level != null && i.level != null && a.level > i.level) {
				let n = {
					type: "item",
					key: e,
					dropPosition: "before"
				};
				if (t(n)) return [n];
			}
		}
		return a.filter(t);
	}
	selectTarget(e, t, n, r, i, a) {
		if (e.length < 2) return e[0];
		let o = this.pointerTracking, s = this.state.collection.getItem(t.key)?.parentKey;
		if (s == null) return e[0];
		(!o.boundaryContext || o.boundaryContext.parentKey !== s) && (o.boundaryContext = {
			parentKey: s,
			preferredTargetIndex: o.yDirection === "up" ? e.length - 1 : 0,
			lastSwitchY: r,
			lastSwitchX: n
		});
		let c = o.boundaryContext, l = Math.abs(n - c.lastSwitchX);
		if (Math.abs(r - c.lastSwitchY) > Yg && i) {
			let t = c.preferredTargetIndex || 0;
			i === "down" && t === 0 ? c.preferredTargetIndex = e.length - 1 : i === "up" && t === e.length - 1 && (c.preferredTargetIndex = 0), o.xDirection = null;
		}
		if (l > Jg && a) {
			let t = c.preferredTargetIndex || 0;
			a === "left" ? this.direction === "ltr" ? t < e.length - 1 && (c.preferredTargetIndex = t + 1, c.lastSwitchX = n) : t > 0 && (c.preferredTargetIndex = t - 1, c.lastSwitchX = n) : a === "right" && (this.direction === "ltr" ? t > 0 && (c.preferredTargetIndex = t - 1, c.lastSwitchX = n) : t < e.length - 1 && (c.preferredTargetIndex = t + 1, c.lastSwitchX = n)), o.yDirection = null;
		}
		return e[Math.max(0, Math.min(c.preferredTargetIndex || 0, e.length - 1))];
	}
	constructor() {
		this.delegate = null, this.state = null, this.direction = "ltr", this.pointerTracking = {
			lastY: 0,
			lastX: 0,
			yDirection: null,
			xDirection: null,
			boundaryContext: null
		};
	}
}, Zg = class {
	constructor(e) {
		this.keyMap = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.columnCount = e?.columnCount, this.rows = [];
		let t = (r) => {
			let i = this.keyMap.get(r.key);
			e.visitNode && (r = e.visitNode(r)), this.keyMap.set(r.key, r);
			let a = /* @__PURE__ */ new Set(), o = null, s = !1;
			if (r.type === "item") {
				for (let e of r.childNodes) if (e.props?.colSpan !== void 0) {
					s = !0;
					break;
				}
			}
			for (let e of r.childNodes) e.type === "cell" && s && (e.colspan = e.props?.colSpan, e.colSpan = e.props?.colSpan, e.colIndex = o ? (o.colIndex ?? o.index) + (o.colSpan ?? 1) : e.index), e.type === "cell" && e.parentKey == null && (e.parentKey = r.key), a.add(e.key), o ? (o.nextKey = e.key, e.prevKey = o.key) : e.prevKey = null, t(e), o = e;
			if (o && (o.nextKey = null), i) for (let e of i.childNodes) a.has(e.key) || n(e);
		}, n = (e) => {
			this.keyMap.delete(e.key);
			for (let t of e.childNodes) this.keyMap.get(t.key) === t && n(t);
		}, r = null;
		for (let [n, i] of e.items.entries()) {
			let e = {
				...i,
				level: i.level ?? 0,
				key: i.key ?? "row-" + n,
				type: i.type ?? "row",
				value: i.value ?? null,
				hasChildNodes: !0,
				childNodes: [...i.childNodes],
				rendered: i.rendered,
				textValue: i.textValue ?? "",
				index: i.index ?? n
			};
			r ? (r.nextKey = e.key, e.prevKey = r.key) : e.prevKey = null, this.rows.push(e), t(e), r = e;
		}
		r && (r.nextKey = null);
	}
	*[Symbol.iterator]() {
		yield* [...this.rows];
	}
	get size() {
		return [...this.rows].length;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey ?? null : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey ?? null : null;
	}
	getFirstKey() {
		return [...this.rows][0]?.key;
	}
	getLastKey() {
		let e = [...this.rows];
		return e[e.length - 1]?.key;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		return this.keyMap.get(e)?.childNodes || [];
	}
}, Qg = "row-header-column-" + Math.random().toString(36).slice(2), $g = "row-header-column-" + Math.random().toString(36).slice(2); Qg === $g;) $g = "row-header-column-" + Math.random().toString(36).slice(2);
function e_(e, t) {
	if (t.length === 0) return [];
	let n = [], r = /* @__PURE__ */ new Map();
	for (let i of t) {
		let t = i.parentKey, a = [i];
		for (; t != null;) {
			let n = e.get(t);
			if (!n) break;
			if (r.has(n)) {
				n.colSpan ??= 0, n.colSpan++, n.colspan = n.colSpan;
				let { column: e, index: t } = r.get(n);
				if (t > a.length) break;
				for (let n = t; n < a.length; n++) e.splice(n, 0, null);
				for (let t = a.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t);
			} else n.colSpan = 1, n.colspan = 1, a.push(n), r.set(n, {
				column: a,
				index: a.length - 1
			});
			t = n.parentKey;
		}
		n.push(a), i.index = n.length - 1;
	}
	let i = Math.max(...n.map((e) => e.length)), a = Array(i).fill(0).map(() => []), o = 0;
	for (let e of n) {
		let t = i - 1;
		for (let n of e) {
			if (n) {
				let e = a[t], r = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
				if (r < o) {
					let i = {
						type: "placeholder",
						key: "placeholder-" + n.key,
						colspan: o - r,
						colSpan: o - r,
						index: r,
						value: null,
						rendered: null,
						level: t,
						hasChildNodes: !1,
						childNodes: [],
						textValue: ""
					};
					e.length > 0 && (e[e.length - 1].nextKey = i.key, i.prevKey = e[e.length - 1].key), e.push(i);
				}
				e.length > 0 && (e[e.length - 1].nextKey = n.key, n.prevKey = e[e.length - 1].key), n.level = t, n.colIndex = o, e.push(n);
			}
			t--;
		}
		o++;
	}
	let s = 0;
	for (let e of a) {
		let n = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
		if (n < t.length) {
			let r = {
				type: "placeholder",
				key: "placeholder-" + e[e.length - 1].key,
				colSpan: t.length - n,
				colspan: t.length - n,
				index: n,
				value: null,
				rendered: null,
				level: s,
				hasChildNodes: !1,
				childNodes: [],
				textValue: "",
				prevKey: e[e.length - 1].key
			};
			e.push(r);
		}
		s++;
	}
	return a.map((e, t) => ({
		type: "headerrow",
		key: "headerrow-" + t,
		index: t,
		value: null,
		rendered: null,
		level: 0,
		hasChildNodes: !0,
		childNodes: e,
		textValue: ""
	}));
}
var t_ = class extends Zg {
	constructor(e, t, n) {
		let r = /* @__PURE__ */ new Set(), i = null, a = [];
		if (n?.showSelectionCheckboxes) {
			let e = {
				type: "column",
				key: Qg,
				value: null,
				textValue: "",
				level: 0,
				index: +!!n?.showDragButtons,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isSelectionCell: !0 }
			};
			a.unshift(e);
		}
		if (n?.showDragButtons) {
			let e = {
				type: "column",
				key: $g,
				value: null,
				textValue: "",
				level: 0,
				index: 0,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isDragButtonCell: !0 }
			};
			a.unshift(e);
		}
		let o = [], s = /* @__PURE__ */ new Map(), c = (e) => {
			switch (e.type) {
				case "body":
					i = e;
					break;
				case "column":
					s.set(e.key, e), e.hasChildNodes || (a.push(e), e.props.isRowHeader && r.add(e.key));
					break;
				case "item":
					o.push(e);
					return;
			}
			for (let t of e.childNodes) c(t);
		};
		for (let t of e) c(t);
		let l = e_(s, a);
		if (l.forEach((e, t) => o.splice(t, 0, e)), super({
			columnCount: a.length,
			items: o,
			visitNode: (e) => (e.column = a[e.index], e)
		}), this._size = 0, this.columns = a, this.rowHeaderColumnKeys = r, this.body = i, this.headerRows = l, this._size = [...i.childNodes].length, this.rowHeaderColumnKeys.size === 0) {
			let e = this.columns.find((e) => !e.props?.isDragButtonCell && !e.props?.isSelectionCell);
			e && this.rowHeaderColumnKeys.add(e.key);
		}
	}
	*[Symbol.iterator]() {
		yield* this.body.childNodes;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		return this.keyMap.get(e)?.prevKey ?? null;
	}
	getKeyAfter(e) {
		return this.keyMap.get(e)?.nextKey ?? null;
	}
	getFirstKey() {
		return Hd(this.body.childNodes)?.key ?? null;
	}
	getLastKey() {
		return Wd(this.body.childNodes)?.key ?? null;
	}
	getItem(e) {
		return e === this.body.key ? this.body : this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		if (e === this.body.key) return this.body.childNodes;
		let t = this.getItem(e);
		return t?.type === "item" ? [...t.childNodes].filter((e) => e.type === "cell") : super.getChildren(e);
	}
	getTextValue(e) {
		let t = this.getItem(e);
		if (!t) return "";
		if (t.textValue) return t.textValue;
		let n = this.rowHeaderColumnKeys;
		if (n) {
			let e = [];
			for (let r of t.childNodes) {
				let t = this.columns[r.index];
				if (n.has(t.key) && r.textValue && e.push(r.textValue), e.length === n.size) break;
			}
			return e.join(" ");
		}
		return "";
	}
};
//#endregion
//#region node_modules/react-stately/dist/private/grid/useGridState.mjs
function n_(e) {
	let { collection: t, focusMode: n } = e, r = e.UNSAFE_selectionState || tf(e), i = g(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), a = r.setFocusedKey;
	r.setFocusedKey = (e, r) => {
		if (n === "cell" && e != null) {
			let n = t.getItem(e);
			if (n?.type === "item") {
				let i = Vd(n, t);
				e = r === "last" ? Wd(i)?.key ?? null : Hd(i)?.key ?? null;
			}
		}
		a(e, r);
	};
	let o = g(() => new rf(t, r), [t, r]), s = v(null);
	return f(() => {
		if (r.focusedKey != null && s.current && !t.getItem(r.focusedKey)) {
			let e = s.current.getItem(r.focusedKey), n = e?.parentKey != null && (e.type === "cell" || e.type === "rowheader" || e.type === "column") ? s.current.getItem(e.parentKey) : e;
			if (!n) {
				r.setFocusedKey(null);
				return;
			}
			let i = s.current.rows, a = t.rows, c = i.length - a.length, l = Math.min(c > 1 ? Math.max(n.index - c + 1, 0) : n.index, a.length - 1), u = null;
			for (; l >= 0;) {
				if (!o.isDisabled(a[l].key) && a[l].type !== "headerrow") {
					u = a[l];
					break;
				}
				l < a.length - 1 ? l++ : (l > n.index && (l = n.index), l--);
			}
			if (u) {
				let i = u.hasChildNodes ? [...Vd(u, t)] : [], a = u.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : u.key;
				r.setFocusedKey(a);
			} else r.setFocusedKey(null);
		}
		s.current = t;
	}, [
		t,
		o,
		r,
		r.focusedKey
	]), {
		collection: t,
		disabledKeys: i,
		isKeyboardNavigationDisabled: !1,
		selectionManager: o
	};
}
//#endregion
//#region node_modules/react-stately/dist/private/table/useTableState.mjs
var r_ = {
	ascending: "descending",
	descending: "ascending"
};
function i_(e) {
	let [t, n] = y(!1), { selectionMode: r = "none", showSelectionCheckboxes: i, showDragButtons: a, treeColumn: o = null } = e, s = g(() => ({
		showSelectionCheckboxes: i && r !== "none",
		showDragButtons: a,
		selectionMode: r,
		columns: []
	}), [
		e.children,
		i,
		r,
		a
	]), c = lf(e, u((e) => new t_(e, null, s), [s]), s), { disabledKeys: l, selectionManager: d } = n_({
		...e,
		collection: c,
		disabledBehavior: e.disabledBehavior || "selection"
	}), [f, p] = Zi(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange);
	return {
		collection: c,
		disabledKeys: l,
		selectionManager: d,
		showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
		sortDescriptor: e.sortDescriptor ?? null,
		isKeyboardNavigationDisabled: c.size === 0 || t,
		setKeyboardNavigationDisabled: n,
		sort(t, n) {
			e.onSortChange?.({
				column: t,
				direction: n ?? (e.sortDescriptor?.column === t ? r_[e.sortDescriptor.direction] : "ascending")
			});
		},
		expandedKeys: f,
		toggleKey(e) {
			p((t) => {
				let n = new Set(t);
				return n.has(e) ? n.delete(e) : n.add(e), n;
			});
		},
		treeColumn: o
	};
}
function a_(e, t) {
	let n = g(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return {
		...e,
		collection: n,
		selectionManager: r
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/grid/GridKeyboardDelegate.mjs
var o_ = class {
	constructor(e) {
		if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || "all", this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw Error("Either a layout or a ref must be specified.");
		this.layoutDelegate = e.layoutDelegate || (e.layout ? new s_(e.layout) : new Ad(e.ref)), this.focusMode = e.focusMode ?? "row";
	}
	isCell(e) {
		return e.type === "cell";
	}
	isRow(e) {
		return e.type === "row" || e.type === "item";
	}
	isDisabled(e) {
		return this.disabledBehavior === "all" && (e.props?.isDisabled || this.disabledKeys.has(e.key)) && e.props?.disabledBehavior !== "selection";
	}
	findPreviousKey(e, t, n = !1) {
		let r = e == null ? this.collection.getLastKey() : this.collection.getKeyBefore(e);
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (!e) return null;
			if ((n || !this.isDisabled(e)) && (!t || t(e))) return r;
			r = this.collection.getKeyBefore(r);
		}
		return null;
	}
	findNextKey(e, t, n = !1) {
		let r = e == null ? this.collection.getFirstKey() : this.collection.getKeyAfter(e);
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (!e) return null;
			if ((n || !this.isDisabled(e)) && (!t || t(e))) return r;
			if (r = this.collection.getKeyAfter(r), r == null) return null;
		}
		return null;
	}
	getKeyForItemInRowByIndex(e, t = 0) {
		if (t < 0) return null;
		let n = this.collection.getItem(e);
		if (!n) return null;
		let r = 0;
		for (let e of Vd(n, this.collection)) {
			if (e.colSpan && e.colSpan + r > t || (e.colSpan && (r = r + e.colSpan - 1), r === t)) return e.key ?? null;
			r++;
		}
		return null;
	}
	getKeyBelow(e, t) {
		let n = e, r = this.collection.getItem(n);
		if (!r || (this.isCell(r) && (n = r.parentKey ?? null), n == null)) return null;
		if (n = this.findNextKey(n, (e) => e.type === "item", t?.includeDisabled), n != null) {
			if (this.isCell(r)) {
				let e = r.colIndex ? r.colIndex : r.index;
				return this.getKeyForItemInRowByIndex(n, e);
			}
			if (this.focusMode === "row") return n;
		}
		return null;
	}
	getKeyAbove(e, t) {
		let n = e, r = this.collection.getItem(n);
		if (!r || (this.isCell(r) && (n = r.parentKey ?? null), n == null)) return null;
		if (n = this.findPreviousKey(n, (e) => e.type === "item", t?.includeDisabled), n != null) {
			if (this.isCell(r)) {
				let e = r.colIndex ? r.colIndex : r.index;
				return this.getKeyForItemInRowByIndex(n, e);
			}
			if (this.focusMode === "row") return n;
		}
		return null;
	}
	getKeyRightOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = Vd(t, this.collection);
			return (this.direction === "rtl" ? Wd(e)?.key : Hd(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = Vd(n, this.collection), i = (this.direction === "rtl" ? Ud(r, t.index - 1) : Ud(r, t.index + 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === "row" ? t.parentKey ?? null : (this.direction === "rtl" ? this.getFirstKey(e) : this.getLastKey(e)) ?? null;
		}
		return null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = Vd(t, this.collection);
			return (this.direction === "rtl" ? Hd(e)?.key : Wd(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = Vd(n, this.collection), i = (this.direction === "rtl" ? Ud(r, t.index + 1) : Ud(r, t.index - 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === "row" ? t.parentKey ?? null : (this.direction === "rtl" ? this.getLastKey(e) : this.getFirstKey(e)) ?? null;
		}
		return null;
	}
	getFirstKey(e, t) {
		let n = e ?? null, r;
		if (n != null) {
			if (r = this.collection.getItem(n), !r) return null;
			if (this.isCell(r) && !t && r.parentKey != null) {
				let e = this.collection.getItem(r.parentKey);
				return e ? Hd(Vd(e, this.collection))?.key ?? null : null;
			}
		}
		if (n = this.findNextKey(void 0, (e) => e.type === "item"), n != null && (r && this.isCell(r) && t || this.focusMode === "cell")) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			n = Hd(Vd(e, this.collection))?.key ?? null;
		}
		return n;
	}
	getLastKey(e, t) {
		let n = e ?? null, r;
		if (n != null) {
			if (r = this.collection.getItem(n), !r) return null;
			if (this.isCell(r) && !t && r.parentKey != null) {
				let e = this.collection.getItem(r.parentKey);
				return e ? Wd(Vd(e, this.collection))?.key ?? null : null;
			}
		}
		if (n = this.findPreviousKey(void 0, (e) => e.type === "item"), n != null && (r && this.isCell(r) && t || this.focusMode === "cell")) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			n = Wd(Vd(e, this.collection))?.key ?? null;
		}
		return n;
	}
	getKeyPageAbove(e) {
		let t = e, n = this.layoutDelegate.getItemRect(t);
		if (!n) return null;
		let r = Math.max(0, n.y + n.height - this.layoutDelegate.getVisibleRect().height);
		for (; n && n.y > r && t != null && (t = this.getKeyAbove(t) ?? null, t != null);) n = this.layoutDelegate.getItemRect(t);
		return t;
	}
	getKeyPageBelow(e) {
		let t = e, n = this.layoutDelegate.getItemRect(t);
		if (!n) return null;
		let r = this.layoutDelegate.getVisibleRect().height, i = Math.min(this.layoutDelegate.getContentSize().height, n.y + r);
		for (; n && n.y + n.height < i;) {
			let e = this.getKeyBelow(t);
			if (e == null) break;
			n = this.layoutDelegate.getItemRect(e), t = e;
		}
		return t;
	}
	getKeyForSearch(e, t) {
		let n = t ?? null;
		if (!this.collator) return null;
		let r = this.collection;
		if (n = t ?? this.getFirstKey(), n == null) return null;
		let i = r.getItem(n);
		if (!i) return null;
		i.type === "cell" && (n = i.parentKey ?? null);
		let a = !1;
		for (; n != null;) {
			let t = r.getItem(n);
			if (!t) return null;
			if (t.textValue) {
				let n = t.textValue.slice(0, e.length);
				if (this.collator.compare(n, e) === 0) return this.isRow(t) && this.focusMode === "cell" ? Hd(Vd(t, this.collection))?.key ?? null : t.key;
			}
			n = this.findNextKey(n, (e) => e.type === "item"), n == null && !a && (n = this.getFirstKey(), a = !0);
		}
		return null;
	}
}, s_ = class {
	constructor(e) {
		this.layout = e;
	}
	getContentSize() {
		return this.layout.getContentSize();
	}
	getItemRect(e) {
		return this.layout.getLayoutInfo(e)?.rect || null;
	}
	getVisibleRect() {
		return this.layout.virtualizer.visibleRect;
	}
}, c_ = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/react-aria/dist/private/grid/useGrid.mjs
function l_(e, t, n) {
	let { isVirtualized: r, disallowTypeAhead: i, keyboardDelegate: a, focusMode: o, scrollRef: s, getRowText: c, onRowAction: l, onCellAction: d, escapeKeyBehavior: f = "clearSelection", shouldSelectOnPressUp: p } = e, { selectionManager: m } = t;
	!e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
	let h = Nd({
		usage: "search",
		sensitivity: "base"
	}), { direction: _ } = Ii(), v = t.selectionManager.disabledBehavior, y = g(() => a || new o_({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: v,
		ref: n,
		direction: _,
		collator: h,
		focusMode: o
	}), [
		a,
		t.collection,
		t.disabledKeys,
		v,
		n,
		_,
		h,
		o
	]), { collectionProps: b } = kd({
		ref: n,
		selectionManager: m,
		keyboardDelegate: y,
		isVirtualized: r,
		scrollRef: s,
		disallowTypeAhead: i,
		escapeKeyBehavior: f
	}), x = jn(e.id);
	c_.set(t, {
		keyboardDelegate: y,
		actions: {
			onRowAction: l,
			onCellAction: d
		},
		shouldSelectOnPressUp: p
	});
	let S = zg({
		selectionManager: m,
		hasItemActions: !!(l || d)
	}), C = io(e, { labelable: !0 }), w = u((e) => {
		if (m.isFocused) {
			J(e.currentTarget, Y(e)) || m.setFocused(!1);
			return;
		}
		J(e.currentTarget, Y(e)) && m.setFocused(!0);
	}, [m]), T = g(() => ({
		onBlur: b.onBlur,
		onFocus: w
	}), [w, b.onBlur]), E = Lg(n, { isDisabled: t.collection.size !== 0 }), D = G(C, {
		role: "grid",
		id: x,
		"aria-multiselectable": m.selectionMode === "multiple" ? "true" : void 0
	}, t.isKeyboardNavigationDisabled ? T : b, t.collection.size === 0 && { tabIndex: E ? -1 : 0 } || void 0, S);
	return r && (D["aria-rowcount"] = t.collection.size, D["aria-colcount"] = t.collection.columnCount), Fg({ getRowText: c }, t), { gridProps: D };
}
//#endregion
//#region node_modules/react-aria/dist/private/table/utils.mjs
var u_ = /* @__PURE__ */ new WeakMap();
function d_(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function f_(e, t) {
	let n = u_.get(e);
	if (!n) throw Error("Unknown grid");
	return `${n}-${d_(t)}`;
}
function p_(e, t, n) {
	let r = u_.get(e);
	if (!r) throw Error("Unknown grid");
	return `${r}-${d_(t)}-${d_(n)}`;
}
function m_(e, t) {
	return [...e.collection.rowHeaderColumnKeys].map((n) => p_(e, t, n)).join(" ");
}
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/ar-AE.mjs
var h_ = {};
h_ = {
	ascending: "تصاعدي",
	ascendingSort: (e) => `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{635}\u{627}\u{639}\u{62F}\u{64A}`,
	columnSize: (e) => `${e.value} \u{628}\u{627}\u{644}\u{628}\u{643}\u{633}\u{644}`,
	descending: "تنازلي",
	descendingSort: (e) => `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{646}\u{627}\u{632}\u{644}\u{64A}`,
	resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
	select: "تحديد",
	selectAll: "تحديد الكل",
	sortable: "عمود قابل للترتيب",
	collapse: "طي",
	expand: "تمديد"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/bg-BG.mjs
var g_ = {};
g_ = {
	ascending: "възходящ",
	ascendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432}\u{44A}\u{432} \u{432}\u{44A}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
	columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}\u{435}\u{43B}\u{430}`,
	descending: "низходящ",
	descendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432} \u{43D}\u{438}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
	resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
	select: "Изберете",
	selectAll: "Изберете всичко",
	sortable: "сортираща колона",
	collapse: "Свиване",
	expand: "Разширяване"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/cs-CZ.mjs
var __ = {};
__ = {
	ascending: "vzestupně",
	ascendingSort: (e) => `\u{159}azeno vzestupn\u{11B} podle sloupce ${e.columnName}`,
	columnSize: (e) => `${e.value} pixel\u{16F}`,
	descending: "sestupně",
	descendingSort: (e) => `\u{159}azeno sestupn\u{11B} podle sloupce ${e.columnName}`,
	resizerDescription: "Stisknutím klávesy Enter začnete měnit velikost",
	select: "Vybrat",
	selectAll: "Vybrat vše",
	sortable: "sloupec s možností řazení",
	collapse: "Sbalit",
	expand: "Roztáhnout"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/da-DK.mjs
var v_ = {};
v_ = {
	ascending: "stigende",
	ascendingSort: (e) => `sorteret efter kolonne ${e.columnName} i stigende r\xe6kkef\xf8lge`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "faldende",
	descendingSort: (e) => `sorteret efter kolonne ${e.columnName} i faldende r\xe6kkef\xf8lge`,
	resizerDescription: "Tryk på Enter for at ændre størrelse",
	select: "Vælg",
	selectAll: "Vælg alle",
	sortable: "sorterbar kolonne",
	collapse: "Skjul",
	expand: "Udvid"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/de-DE.mjs
var y_ = {};
y_ = {
	ascending: "aufsteigend",
	ascendingSort: (e) => `sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
	columnSize: (e) => `${e.value} Pixel`,
	descending: "absteigend",
	descendingSort: (e) => `sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
	resizerDescription: "Eingabetaste zum Starten der Größenänderung drücken",
	select: "Auswählen",
	selectAll: "Alles auswählen",
	sortable: "sortierbare Spalte",
	collapse: "Reduzieren",
	expand: "Erweitern"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/el-GR.mjs
var b_ = {};
b_ = {
	ascending: "αύξουσα",
	ascendingSort: (e) => `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3B1}\u{3CD}\u{3BE}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
	columnSize: (e) => `${e.value} pixel`,
	descending: "φθίνουσα",
	descendingSort: (e) => `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3C6}\u{3B8}\u{3AF}\u{3BD}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
	resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
	select: "Επιλογή",
	selectAll: "Επιλογή όλων",
	sortable: "Στήλη διαλογής",
	collapse: "Σύμπτυξη",
	expand: "Ανάπτυξη"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/en-US.mjs
var x_ = {};
x_ = {
	select: "Select",
	selectAll: "Select All",
	sortable: "sortable column",
	ascending: "ascending",
	descending: "descending",
	ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
	descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
	columnSize: (e) => `${e.value} pixels`,
	resizerDescription: "Press Enter to start resizing",
	expand: "Expand",
	collapse: "Collapse"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/es-ES.mjs
var S_ = {};
S_ = {
	ascending: "ascendente",
	ascendingSort: (e) => `ordenado por columna ${e.columnName} en sentido ascendente`,
	columnSize: (e) => `${e.value} p\xedxeles`,
	descending: "descendente",
	descendingSort: (e) => `ordenado por columna ${e.columnName} en orden descendente`,
	resizerDescription: "Pulse Intro para empezar a redimensionar",
	select: "Seleccionar",
	selectAll: "Seleccionar todos",
	sortable: "columna ordenable",
	collapse: "Contraer",
	expand: "Ampliar"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/et-EE.mjs
var C_ = {};
C_ = {
	ascending: "tõusev järjestus",
	ascendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} t\xf5usvas j\xe4rjestuses`,
	columnSize: (e) => `${e.value} pikslit`,
	descending: "laskuv järjestus",
	descendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} laskuvas j\xe4rjestuses`,
	resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
	select: "Vali",
	selectAll: "Vali kõik",
	sortable: "sorditav veerg",
	collapse: "Ahenda",
	expand: "Laienda"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/fi-FI.mjs
var w_ = {};
w_ = {
	ascending: "nouseva",
	ascendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
	columnSize: (e) => `${e.value} pikseli\xe4`,
	descending: "laskeva",
	descendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
	resizerDescription: "Aloita koon muutos painamalla Enter-näppäintä",
	select: "Valitse",
	selectAll: "Valitse kaikki",
	sortable: "lajiteltava sarake",
	collapse: "Pienennä",
	expand: "Laajenna"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/fr-FR.mjs
var T_ = {};
T_ = {
	ascending: "croissant",
	ascendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre croissant`,
	columnSize: (e) => `${e.value}\xa0pixels`,
	descending: "décroissant",
	descendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre d\xe9croissant`,
	resizerDescription: "Appuyez sur Entrée pour commencer le redimensionnement.",
	select: "Sélectionner",
	selectAll: "Sélectionner tout",
	sortable: "colonne triable",
	collapse: "Réduire",
	expand: "Développer"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/he-IL.mjs
var E_ = {};
E_ = {
	ascending: "עולה",
	ascendingSort: (e) => `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5E2}\u{5D5}\u{5DC}\u{5D4}`,
	columnSize: (e) => `${e.value} \u{5E4}\u{5D9}\u{5E7}\u{5E1}\u{5DC}\u{5D9}\u{5DD}`,
	descending: "יורד",
	descendingSort: (e) => `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5D9}\u{5D5}\u{5E8}\u{5D3}`,
	resizerDescription: "הקש Enter כדי לשנות את הגודל",
	select: "בחר",
	selectAll: "בחר הכול",
	sortable: "עמודה שניתן למיין",
	collapse: "כווץ",
	expand: "הרחב"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/hr-HR.mjs
var D_ = {};
D_ = {
	ascending: "rastući",
	ascendingSort: (e) => `razvrstano po stupcima ${e.columnName} rastu\u{107}em redoslijedom`,
	columnSize: (e) => `${e.value} piksela`,
	descending: "padajući",
	descendingSort: (e) => `razvrstano po stupcima ${e.columnName} padaju\u{107}im redoslijedom`,
	resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
	select: "Odaberite",
	selectAll: "Odaberite sve",
	sortable: "stupac koji se može razvrstati",
	collapse: "Sažmi",
	expand: "Proširi"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/hu-HU.mjs
var O_ = {};
O_ = {
	ascending: "növekvő",
	ascendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, n\xf6vekv\u{151} sorrendben`,
	columnSize: (e) => `${e.value} k\xe9ppont`,
	descending: "csökkenő",
	descendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, cs\xf6kken\u{151} sorrendben`,
	resizerDescription: "Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",
	select: "Kijelölés",
	selectAll: "Összes kijelölése",
	sortable: "rendezendő oszlop",
	collapse: "Összecsukás",
	expand: "Kibontás"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/it-IT.mjs
var k_ = {};
k_ = {
	ascending: "crescente",
	ascendingSort: (e) => `in ordine crescente in base alla colonna ${e.columnName}`,
	columnSize: (e) => `${e.value} pixel`,
	descending: "decrescente",
	descendingSort: (e) => `in ordine decrescente in base alla colonna ${e.columnName}`,
	resizerDescription: "Premi Invio per iniziare a ridimensionare",
	select: "Seleziona",
	selectAll: "Seleziona tutto",
	sortable: "colonna ordinabile",
	collapse: "Comprimi",
	expand: "Espandi"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/ja-JP.mjs
var A_ = {};
A_ = {
	ascending: "昇順",
	ascendingSort: (e) => `\u{5217} ${e.columnName} \u{3092}\u{6607}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
	columnSize: (e) => `${e.value} \u{30D4}\u{30AF}\u{30BB}\u{30EB}`,
	descending: "降順",
	descendingSort: (e) => `\u{5217} ${e.columnName} \u{3092}\u{964D}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
	resizerDescription: "Enter キーを押してサイズ変更を開始",
	select: "選択",
	selectAll: "すべて選択",
	sortable: "並べ替え可能な列",
	collapse: "折りたたむ",
	expand: "展開"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/ko-KR.mjs
var j_ = {};
j_ = {
	ascending: "오름차순",
	ascendingSort: (e) => `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{C624}\u{B984}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
	columnSize: (e) => `${e.value} \u{D53D}\u{C140}`,
	descending: "내림차순",
	descendingSort: (e) => `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{B0B4}\u{B9BC}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
	resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
	select: "선택",
	selectAll: "모두 선택",
	sortable: "정렬 가능한 열",
	collapse: "접기",
	expand: "펼치기"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/lt-LT.mjs
var M_ = {};
M_ = {
	ascending: "didėjančia tvarka",
	ascendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} did\u{117}jan\u{10D}ia tvarka`,
	columnSize: (e) => `${e.value} piks.`,
	descending: "mažėjančia tvarka",
	descendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} ma\u{17E}\u{117}jan\u{10D}ia tvarka`,
	resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
	select: "Pasirinkti",
	selectAll: "Pasirinkti viską",
	sortable: "rikiuojamas stulpelis",
	collapse: "Sutraukti",
	expand: "Išskleisti"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/lv-LV.mjs
var N_ = {};
N_ = {
	ascending: "augošā secībā",
	ascendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} augo\u{161}\u{101} sec\u{12B}b\u{101}`,
	columnSize: (e) => `${e.value} pikse\u{13C}i`,
	descending: "dilstošā secībā",
	descendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} dilsto\u{161}\u{101} sec\u{12B}b\u{101}`,
	resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
	select: "Atlasīt",
	selectAll: "Atlasīt visu",
	sortable: "kārtojamā kolonna",
	collapse: "Sakļaut",
	expand: "Izvērst"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/nb-NO.mjs
var P_ = {};
P_ = {
	ascending: "stigende",
	ascendingSort: (e) => `sortert etter kolonne ${e.columnName} i stigende rekkef\xf8lge`,
	columnSize: (e) => `${e.value} piksler`,
	descending: "synkende",
	descendingSort: (e) => `sortert etter kolonne ${e.columnName} i synkende rekkef\xf8lge`,
	resizerDescription: "Trykk på Enter for å starte størrelsesendring",
	select: "Velg",
	selectAll: "Velg alle",
	sortable: "kolonne som kan sorteres",
	collapse: "Skjul",
	expand: "Utvid"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/nl-NL.mjs
var F_ = {};
F_ = {
	ascending: "oplopend",
	ascendingSort: (e) => `gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "aflopend",
	descendingSort: (e) => `gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
	resizerDescription: "Druk op Enter om het formaat te wijzigen",
	select: "Selecteren",
	selectAll: "Alles selecteren",
	sortable: "sorteerbare kolom",
	collapse: "Samenvouwen",
	expand: "Uitvouwen"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/pl-PL.mjs
var I_ = {};
I_ = {
	ascending: "rosnąco",
	ascendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku rosn\u{105}cym`,
	columnSize: (e) => `Liczba pikseli: ${e.value}`,
	descending: "malejąco",
	descendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku malej\u{105}cym`,
	resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
	select: "Zaznacz",
	selectAll: "Zaznacz wszystko",
	sortable: "kolumna z możliwością sortowania",
	collapse: "Zwiń",
	expand: "Rozwiń"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/pt-BR.mjs
var L_ = {};
L_ = {
	ascending: "crescente",
	ascendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem crescente`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "decrescente",
	descendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem decrescente`,
	resizerDescription: "Pressione Enter para começar a redimensionar",
	select: "Selecionar",
	selectAll: "Selecionar tudo",
	sortable: "coluna classificável",
	collapse: "Recolher",
	expand: "Expandir"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/pt-PT.mjs
var R_ = {};
R_ = {
	ascending: "ascendente",
	ascendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem ascendente`,
	columnSize: (e) => `${e.value} pixels`,
	descending: "descendente",
	descendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem descendente`,
	resizerDescription: "Prima Enter para iniciar o redimensionamento",
	select: "Selecionar",
	selectAll: "Selecionar tudo",
	sortable: "Coluna ordenável",
	collapse: "Colapsar",
	expand: "Expandir"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/ro-RO.mjs
var z_ = {};
z_ = {
	ascending: "crescătoare",
	ascendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine cresc\u{103}toare`,
	columnSize: (e) => `${e.value} pixeli`,
	descending: "descrescătoare",
	descendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine descresc\u{103}toare`,
	resizerDescription: "Apăsați pe Enter pentru a începe redimensionarea",
	select: "Selectare",
	selectAll: "Selectare totală",
	sortable: "coloană sortabilă",
	collapse: "Restrângeți",
	expand: "Extindeți"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/ru-RU.mjs
var B_ = {};
B_ = {
	ascending: "возрастание",
	ascendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{432}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}\u{430}\u{43D}\u{438}\u{44F}`,
	columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}.`,
	descending: "убывание",
	descendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{443}\u{431}\u{44B}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
	resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
	select: "Выбрать",
	selectAll: "Выбрать все",
	sortable: "сортируемый столбец",
	collapse: "Свернуть",
	expand: "Развернуть"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/sk-SK.mjs
var V_ = {};
V_ = {
	ascending: "vzostupne",
	ascendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
	columnSize: (e) => `Po\u{10D}et pixelov: ${e.value}`,
	descending: "zostupne",
	descendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
	resizerDescription: "Stlačením klávesu Enter začnete zmenu veľkosti",
	select: "Vybrať",
	selectAll: "Vybrať všetko",
	sortable: "zoraditeľný stĺpec",
	collapse: "Zbaliť",
	expand: "Rozbaliť"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/sl-SI.mjs
var H_ = {};
H_ = {
	ascending: "naraščajoče",
	ascendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v nara\u{161}\u{10D}ajo\u{10D}em vrstnem redu`,
	columnSize: (e) => `${e.value} slikovnih pik`,
	descending: "padajoče",
	descendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v padajo\u{10D}em vrstnem redu`,
	resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
	select: "Izberite",
	selectAll: "Izberite vse",
	sortable: "razvrstljivi stolpec",
	collapse: "Strni",
	expand: "Razširi"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/sr-SP.mjs
var U_ = {};
U_ = {
	ascending: "rastući",
	ascendingSort: (e) => `sortirano po kolonama ${e.columnName} rastu\u{107}im redosledom`,
	columnSize: (e) => `${e.value} piksela`,
	descending: "padajući",
	descendingSort: (e) => `sortirano po kolonama ${e.columnName} padaju\u{107}im redosledom`,
	resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
	select: "Izaberite",
	selectAll: "Izaberite sve",
	sortable: "kolona koja se može sortirati",
	collapse: " Skupi",
	expand: "Proširi"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/sv-SE.mjs
var W_ = {};
W_ = {
	ascending: "stigande",
	ascendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i stigande ordning`,
	columnSize: (e) => `${e.value} pixlar`,
	descending: "fallande",
	descendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i fallande ordning`,
	resizerDescription: "Tryck på Retur för att börja ändra storlek",
	select: "Markera",
	selectAll: "Markera allt",
	sortable: "sorterbar kolumn",
	collapse: "Dölj",
	expand: "Expandera"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/tr-TR.mjs
var G_ = {};
G_ = {
	ascending: "artan sırada",
	ascendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re artan d\xfczende s\u{131}rala`,
	columnSize: (e) => `${e.value} piksel`,
	descending: "azalan sırada",
	descendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re azalan d\xfczende s\u{131}rala`,
	resizerDescription: "Yeniden boyutlandırmak için Enter'a basın",
	select: "Seç",
	selectAll: "Tümünü Seç",
	sortable: "Sıralanabilir sütun",
	collapse: "Daralt",
	expand: "Genişlet"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/uk-UA.mjs
var K_ = {};
K_ = {
	ascending: "висхідний",
	ascendingSort: (e) => `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{432}\u{438}\u{441}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
	columnSize: (e) => `${e.value} \u{43F}\u{456}\u{43A}\u{441}.`,
	descending: "низхідний",
	descendingSort: (e) => `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{43D}\u{438}\u{437}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
	resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
	select: "Вибрати",
	selectAll: "Вибрати все",
	sortable: "сортувальний стовпець",
	collapse: "Згорнути",
	expand: "Розгорнути"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/zh-CN.mjs
var q_ = {};
q_ = {
	ascending: "升序",
	ascendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{5347}\u{5E8F}\u{6392}\u{5E8F}`,
	columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
	descending: "降序",
	descendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{964D}\u{5E8F}\u{6392}\u{5E8F}`,
	resizerDescription: "按“输入”键开始调整大小。",
	select: "选择",
	selectAll: "全选",
	sortable: "可排序的列",
	collapse: "折叠",
	expand: "扩展"
};
//#endregion
//#region node_modules/react-aria/dist/private/intl/table/zh-TW.mjs
var J_ = {};
J_ = {
	ascending: "遞增",
	ascendingSort: (e) => `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{589E}\u{6392}\u{5E8F}`,
	columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
	descending: "遞減",
	descendingSort: (e) => `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{6E1B}\u{6392}\u{5E8F}`,
	resizerDescription: "按 Enter 鍵以開始調整大小",
	select: "選取",
	selectAll: "全選",
	sortable: "可排序的欄",
	collapse: "收合",
	expand: "展開"
};
//#endregion
//#region node_modules/react-aria/dist/private/table/intlStrings.mjs
var Y_ = {};
Y_ = {
	"ar-AE": h_,
	"bg-BG": g_,
	"cs-CZ": __,
	"da-DK": v_,
	"de-DE": y_,
	"el-GR": b_,
	"en-US": x_,
	"es-ES": S_,
	"et-EE": C_,
	"fi-FI": w_,
	"fr-FR": T_,
	"he-IL": E_,
	"hr-HR": D_,
	"hu-HU": O_,
	"it-IT": k_,
	"ja-JP": A_,
	"ko-KR": j_,
	"lt-LT": M_,
	"lv-LV": N_,
	"nb-NO": P_,
	"nl-NL": F_,
	"pl-PL": I_,
	"pt-BR": L_,
	"pt-PT": R_,
	"ro-RO": z_,
	"ru-RU": B_,
	"sk-SK": V_,
	"sl-SI": H_,
	"sr-SP": U_,
	"sv-SE": W_,
	"tr-TR": G_,
	"uk-UA": K_,
	"zh-CN": q_,
	"zh-TW": J_
};
//#endregion
//#region node_modules/react-aria/dist/private/table/TableKeyboardDelegate.mjs
var X_ = class extends o_ {
	isCell(e) {
		return e.type === "cell" || e.type === "rowheader" || e.type === "column";
	}
	getKeyBelow(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === "column") {
			let e = Hd(Vd(n, this.collection));
			if (e) return e.key;
			let t = this.getFirstKey();
			return t == null || !this.collection.getItem(t) ? null : super.getKeyForItemInRowByIndex(t, n.index);
		}
		return super.getKeyBelow(e, t);
	}
	getKeyAbove(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === "column") {
			let e = n.parentKey == null ? null : this.collection.getItem(n.parentKey);
			return e && e.type === "column" ? e.key : null;
		}
		let r = super.getKeyAbove(e, t), i = r == null ? null : this.collection.getItem(r);
		return i && i.type !== "headerrow" ? r : this.isCell(n) ? this.collection.columns[n.index].key : this.collection.columns[0].key;
	}
	findNextColumnKey(e) {
		let t = this.findNextKey(e.key, (e) => e.type === "column");
		if (t != null) return t;
		let n = this.collection.headerRows[e.level];
		for (let e of Vd(n, this.collection)) if (e.type === "column") return e.key;
		return null;
	}
	findPreviousColumnKey(e) {
		let t = this.findPreviousKey(e.key, (e) => e.type === "column");
		if (t != null) return t;
		let n = this.collection.headerRows[e.level], r = [...Vd(n, this.collection)];
		for (let e = r.length - 1; e >= 0; e--) {
			let t = r[e];
			if (t.type === "column") return t.key;
		}
		return null;
	}
	getKeyRightOf(e) {
		let t = this.collection.getItem(e);
		return t ? t.type === "column" ? this.direction === "rtl" ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e) : null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		return t ? t.type === "column" ? this.direction === "rtl" ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e) : null;
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let n = this.collection, r = t ?? this.getFirstKey();
		if (r == null) return null;
		let i = n.getItem(r);
		i?.type === "cell" && (r = i.parentKey ?? null);
		let a = !1;
		for (; r != null;) {
			let o = n.getItem(r);
			if (!o) return null;
			if (o.textValue) {
				let t = o.textValue.slice(0, e.length);
				if (this.collator.compare(t, e) === 0) return o.key;
			}
			for (let r of Vd(o, this.collection)) {
				let a = n.columns[r.index];
				if (n.rowHeaderColumnKeys.has(a.key) && r.textValue) {
					let a = r.textValue.slice(0, e.length);
					if (this.collator.compare(a, e) === 0) return (t == null ? i : n.getItem(t))?.type === "cell" ? r.key : o.key;
				}
			}
			r = this.getKeyBelow(r), r == null && !a && (r = this.getFirstKey(), a = !0);
		}
		return null;
	}
};
//#endregion
//#region node_modules/react-aria/dist/private/table/useTable.mjs
function Z_(e) {
	return e && e.__esModule ? e.default : e;
}
function Q_(e, t, n) {
	let { keyboardDelegate: r, isVirtualized: i, layoutDelegate: a, layout: o } = e, s = Nd({
		usage: "search",
		sensitivity: "base"
	}), { direction: c } = Ii(), l = t.selectionManager.disabledBehavior, u = g(() => r || new X_({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: l,
		ref: n,
		direction: c,
		collator: s,
		layoutDelegate: a,
		layout: o
	}), [
		r,
		t.collection,
		t.disabledKeys,
		l,
		n,
		c,
		s,
		a,
		o
	]), d = jn(e.id);
	u_.set(t, d);
	let { gridProps: f } = l_({
		...e,
		id: d,
		keyboardDelegate: u
	}, t, n);
	i && (f["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), t.treeColumn != null && (f.role = "treegrid");
	let { column: p, direction: m } = t.sortDescriptor || {}, h = Yi(Z_(Y_), "@react-aria/table"), _ = g(() => {
		let e = t.collection.columns.find((e) => e.key === p)?.textValue ?? "";
		return m && p ? h.format(`${m}Sort`, { columnName: e }) : void 0;
	}, [
		m,
		p,
		t.collection.columns
	]), v = Tc(_);
	return _c(() => {
		_ && cc(_, "assertive", 500);
	}, [_]), { gridProps: G(f, v, { "aria-describedby": [v["aria-describedby"], f["aria-describedby"]].filter(Boolean).join(" ") }) };
}
//#endregion
//#region node_modules/react-aria/dist/private/grid/useGridCell.mjs
function $_(e, t, n) {
	let { node: r, isVirtualized: i, focusMode: a = "child", shouldSelectOnPressUp: o, onAction: s } = e, { direction: c } = Ii(), { keyboardDelegate: l, actions: { onCellAction: u } } = c_.get(t), d = v(null), f = () => {
		if (n.current) {
			let e = gd(n.current);
			if (a === "child") {
				if (nr(n.current) && n.current !== tr()) return;
				let r = t.selectionManager.childFocusStrategy === "last" ? ev(e) : e.firstChild();
				if (r) {
					ga(r);
					return;
				}
			}
			(d.current != null && r.key !== d.current || !nr(n.current)) && ga(n.current);
		}
	}, { itemProps: p, isPressed: m } = Rd({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		focus: f,
		shouldSelectOnPressUp: o,
		onAction: u ? () => u(r.key) : s,
		isDisabled: t.collection.size === 0
	}), h = G(p, {
		role: "gridcell",
		onKeyDownCapture: (e) => {
			let i = tr();
			if (!J(e.currentTarget, Y(e)) || t.isKeyboardNavigationDisabled || !n.current || !i) return;
			let o = gd(n.current);
			switch (o.currentNode = i, e.key) {
				case "ArrowLeft": {
					let t = c === "rtl" ? o.nextNode() : o.previousNode();
					if (a === "child" && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) ga(t), Sc(t, { containingElement: yc(n.current) });
					else {
						if (l.getKeyLeftOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						a === "cell" && c === "rtl" ? (ga(n.current), Sc(n.current, { containingElement: yc(n.current) })) : (o.currentNode = n.current, t = c === "rtl" ? o.firstChild() : ev(o), t && (ga(t), Sc(t, { containingElement: yc(n.current) })));
					}
					break;
				}
				case "ArrowRight": {
					let t = c === "rtl" ? o.previousNode() : o.nextNode();
					if (a === "child" && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) ga(t), Sc(t, { containingElement: yc(n.current) });
					else {
						if (l.getKeyRightOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						a === "cell" && c === "ltr" ? (ga(n.current), Sc(n.current, { containingElement: yc(n.current) })) : (o.currentNode = n.current, t = c === "rtl" ? ev(o) : o.firstChild(), t && (ga(t), Sc(t, { containingElement: yc(n.current) })));
					}
					break;
				}
				case "ArrowUp":
				case "ArrowDown":
					!e.altKey && J(n.current, Y(e)) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
					break;
			}
		},
		"aria-colspan": r.colSpan,
		"aria-colindex": r.colIndex == null ? void 0 : r.colIndex + 1,
		colSpan: i ? void 0 : r.colSpan,
		onFocus: (e) => {
			if (d.current = r.key, Y(e) !== n.current) {
				fi() || t.selectionManager.setFocusedKey(r.key);
				return;
			}
			requestAnimationFrame(() => {
				a === "child" && tr() === n.current && f();
			});
		}
	});
	return i && (h["aria-colindex"] = (r.colIndex ?? r.index) + 1), o && h.tabIndex != null && h.onPointerDown == null && (h.onPointerDown = (e) => {
		let t = e.currentTarget, n = t.getAttribute("tabindex");
		t.removeAttribute("tabindex"), requestAnimationFrame(() => {
			n != null && t.setAttribute("tabindex", n);
		});
	}), {
		gridCellProps: h,
		isPressed: m
	};
}
function ev(e) {
	let t = null, n = null;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
//#endregion
//#region node_modules/react-aria/dist/private/table/useTableColumnHeader.mjs
function tv(e) {
	return e && e.__esModule ? e.default : e;
}
function nv(e, t, n) {
	let { node: r } = e, i = r.props.allowsSorting, { gridCellProps: a } = $_({
		...e,
		focusMode: "child"
	}, t, n), o = r.props.isSelectionCell && t.selectionManager.selectionMode === "single", { pressProps: s, isPressed: c } = xo({
		isDisabled: !i || o,
		onPress() {
			t.sort(r.key);
		},
		ref: n
	}), { focusableProps: l } = Ca({}, n), u, d = t.sortDescriptor?.column === r.key, p = t.sortDescriptor?.direction;
	r.props.allowsSorting && !Lr() && (u = d ? p : "none");
	let m = Yi(tv(Y_), "@react-aria/table"), h;
	i && (h = `${m.format("sortable")}`, d && p && Lr() && (h = `${h}, ${m.format(p)}`));
	let g = Tc(h), _ = t.collection.size === 0;
	return f(() => {
		_ && t.selectionManager.focusedKey === r.key && t.selectionManager.setFocusedKey(null);
	}, [
		_,
		t.selectionManager,
		r.key
	]), {
		columnHeaderProps: {
			...G(l, a, s, g, _ ? { tabIndex: -1 } : null),
			role: "columnheader",
			id: f_(t, r.key),
			"aria-colspan": r.colSpan && r.colSpan > 1 ? r.colSpan : void 0,
			"aria-sort": u
		},
		isPressed: c
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/grid/useGridRow.mjs
function rv(e, t, n) {
	let { node: r, isVirtualized: i, shouldSelectOnPressUp: a, onAction: o } = e, { actions: s, shouldSelectOnPressUp: c } = c_.get(t), l = s.onRowAction ? () => s.onRowAction?.(r.key) : o, { itemProps: u, ...d } = Rd({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		shouldSelectOnPressUp: c || a,
		onAction: l || r?.props?.onAction ? pn(r?.props?.onAction, l) : void 0,
		isDisabled: t.collection.size === 0
	}), f = t.selectionManager.isSelected(r.key), p = {
		role: "row",
		"aria-selected": t.selectionManager.selectionMode === "none" ? void 0 : f,
		"aria-disabled": d.isDisabled || void 0,
		...u
	};
	return i && (p["aria-rowindex"] = r.index + 1), {
		rowProps: p,
		...d
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/table/useTableRow.mjs
function iv(e) {
	return e && e.__esModule ? e.default : e;
}
var av = {
	expand: {
		ltr: "ArrowRight",
		rtl: "ArrowLeft"
	},
	collapse: {
		ltr: "ArrowLeft",
		rtl: "ArrowRight"
	}
};
function ov(e, t, n) {
	let { node: r, isVirtualized: i } = e, { rowProps: a, ...o } = rv(e, t, n), { direction: s } = Ii();
	i && t.treeColumn == null ? a["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete a["aria-rowindex"];
	let c = t.treeColumn != null && (t.expandedKeys === "all" || t.expandedKeys.has(r.key)), l = Yi(iv(Y_), "@react-aria/table"), u = Ti({
		"aria-label": c ? l.format("collapse") : l.format("expand"),
		"aria-labelledby": m_(t, r.key)
	}), d = {}, f = {};
	if (t.treeColumn != null) {
		let e = t.collection.getItem(r.key);
		if (e != null) {
			let n = sv(t.collection, r), i = e.props?.hasChildRows || e.props?.UNSTABLE_childItems || n?.type !== "cell", a = t.collection.getItem(r.parentKey), c = a.type === "tablebody" || a.type === "body", l = sv(t.collection, a);
			for (; l && l.type !== "item" && l.prevKey != null;) l = t.collection.getItem(l.prevKey);
			d = {
				onKeyDown: (n) => {
					n.key === av.expand[s] && t.selectionManager.focusedKey === e.key && i && t.expandedKeys !== "all" && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : n.key === av.collapse[s] && t.selectionManager.focusedKey === e.key && (t.expandedKeys === "all" ? t.expandedKeys === "all" && (t.toggleKey(e.key), n.stopPropagation()) : i && t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : !t.expandedKeys.has(e.key) && e.parentKey != null && e.level > 0 && (t.selectionManager.setFocusedKey(e.parentKey), n.stopPropagation()));
				},
				"aria-expanded": i ? t.expandedKeys === "all" || t.expandedKeys.has(r.key) : void 0,
				"aria-level": e.level + 1,
				"aria-posinset": e.index - (c ? 0 : t.collection.columnCount) + 1,
				"aria-setsize": l.index - (c ? 0 : t.collection.columnCount) + 1
			}, f = {
				isDisabled: o.isDisabled,
				onPress: () => {
					o.isDisabled || (t.toggleKey(r.key), t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r.key));
				},
				excludeFromTabOrder: !0,
				preventFocusOnPress: !0,
				"data-react-aria-prevent-focus": !0,
				...u
			};
		}
	}
	let p = qr(r.props), m = o.hasAction ? p : {};
	return {
		rowProps: {
			...G(a, d, m),
			"aria-labelledby": m_(t, r.key)
		},
		expandButtonProps: f,
		...o
	};
}
function sv(e, t) {
	return "lastChildKey" in t ? t.lastChildKey == null ? null : e.getItem(t.lastChildKey) : Array.from(t.childNodes).findLast((e) => e.parentKey === t.key);
}
//#endregion
//#region node_modules/react-aria/dist/private/table/useTableHeaderRow.mjs
function cv(e, t, n) {
	let { node: r, isVirtualized: i } = e, a = { role: "row" };
	return i && t.treeColumn == null && (a["aria-rowindex"] = r.index + 1), { rowProps: a };
}
//#endregion
//#region node_modules/react-aria/dist/private/table/useTableCell.mjs
function lv(e, t, n) {
	let { gridCellProps: r, isPressed: i } = $_(e, t, n), a = e.node.column?.key;
	return a != null && t.collection.rowHeaderColumnKeys.has(a) && (r.role = "rowheader", r.id = p_(t, e.node.parentKey, a)), {
		gridCellProps: r,
		isPressed: i
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/table/useTableSelectionCheckbox.mjs
function uv(e) {
	return e && e.__esModule ? e.default : e;
}
function dv(e, t) {
	let { key: n } = e, { checkboxProps: r } = Vg(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${m_(t, n)}`
	} };
}
function fv(e) {
	let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
	return { checkboxProps: {
		"aria-label": Yi(uv(Y_), "@react-aria/table").format(r === "single" ? "select" : "selectAll"),
		isSelected: n,
		isDisabled: r !== "multiple" || e.collection.size === 0 || e.collection.rows.length === 1 && e.collection.rows[0].type === "loader",
		isIndeterminate: !t && !n,
		onChange: () => e.selectionManager.toggleSelectAll()
	} };
}
//#endregion
//#region node_modules/react-aria/dist/private/grid/useGridRowGroup.mjs
function pv() {
	return { rowGroupProps: { role: "rowgroup" } };
}
//#endregion
//#region node_modules/react-aria/dist/private/table/useTableRowGroup.mjs
function mv() {
	return pv();
}
//#endregion
//#region node_modules/react-aria-components/dist/private/Table.mjs
var hv = class extends ia {
	withExpandedKeys(e) {
		let t = this.clone();
		return t.expandedKeys = e, t.frozen = this.frozen, t.rows = Array.from(t.getRows()), t;
	}
	addNode(e) {
		super.addNode(e), this.columnsDirty ||= e.type === "column", e.type === "tableheader" && (this.head = e);
	}
	getRows() {
		let e = [];
		for (let t of this) (t.type === "tablebody" || t.type === "tablefooter") && e.push(...this.getChildren(t.key));
		return e;
	}
	get body() {
		for (let e of this) if (e.type === "tablebody") return e;
		return new Pv(-2);
	}
	commit(e, t, n = !1) {
		this.updateColumns(n), this.firstKey = e, this.lastKey = t, this.rows = [];
		for (let e of this.getRows()) {
			let t = e.lastChildKey;
			if (t != null) {
				let e = this.getItem(t);
				for (; e && e.type !== "cell";) e = e.prevKey == null ? null : this.getItem(e.prevKey);
				if (e) {
					let t = (e.colIndex ?? e.index) + (e.colSpan ?? 1);
					if (t !== this.columns.length && !n) throw Error(`Cell count must match column count. Found ${t} cells and ${this.columns.length} columns.`);
				}
			}
			this.rows.push(e);
		}
		super.commit(e, t, n);
	}
	updateColumns(e) {
		if (!this.columnsDirty) return;
		this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
		let t = /* @__PURE__ */ new Map(), n = (e) => {
			switch (e.type) {
				case "column":
					t.set(e.key, e), e.hasChildNodes || (e.index = this.columns.length, this.columns.push(e), e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key));
					break;
			}
			for (let t of this.getChildren(e.key)) n(t);
		};
		for (let e of this.getChildren(this.head.key)) n(e);
		if (this.headerRows = e_(t, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw Error("A table must have at least one Column with the isRowHeader prop set to true");
	}
	get columnCount() {
		return this.columns.length;
	}
	*[Symbol.iterator]() {
		let e = this.firstKey;
		for (; e != null;) {
			let t = this.getItem(e);
			t && (yield t), e = t?.nextKey ?? null;
		}
	}
	getFirstKey() {
		for (let e of this) if (e.type === "tablebody") return e.firstChildKey ?? null;
		return null;
	}
	getLastKey() {
		let e = this.lastKey;
		if (e == null) return null;
		let t = this.getItem(e);
		for (; t?.lastChildKey != null && (t.type !== "item" || this.expandedKeys.has(t.key));) t = this.getItem(t.lastChildKey);
		return t?.key;
	}
	getKeyAfter(e) {
		let t = this.getItem(e);
		if (t?.type === "column") return t.nextKey ?? null;
		if (!t) return null;
		if (t.type === "item" && t.firstChildKey != null && this.expandedKeys.has(t.key)) {
			let e = this.getItem(t.firstChildKey);
			for (; e;) {
				if (e.type === "item") return e.key;
				e = e.nextKey == null ? null : this.getItem(e.nextKey);
			}
		}
		return super.getKeyAfter(e);
	}
	getKeyBefore(e) {
		let t = this.getItem(e);
		if (t?.type === "column") return t.prevKey ?? null;
		if (!t) return null;
		let n = null;
		if (t.prevKey != null) {
			for (t = this.getItem(t.prevKey); t && (t.type !== "item" || this.expandedKeys.has(t.key)) && t.lastChildKey != null;) t = this.getItem(t.lastChildKey);
			n = t?.key ?? null;
		}
		return n ??= t.parentKey, n != null && this.getItem(n)?.type === "tableheader" ? null : n;
	}
	getChildren(e) {
		let t = this.getItem(e);
		if (!t) {
			for (let t of this.headerRows) if (t.key === e) return t.childNodes;
		}
		let n = this;
		return t?.type === "tablebody" || t?.type === "tablefooter" ? { *[Symbol.iterator]() {
			let e = t.firstChildKey, r = e == null ? null : n.getItem(e);
			for (; r;) {
				yield r;
				let e = n.getKeyAfter(r.key);
				if (r = e == null ? null : n.getItem(e), r && r.parentKey === t.parentKey) break;
			}
		} } : { *[Symbol.iterator]() {
			let t = n.getItem(e), r = t?.firstChildKey == null ? null : n.getItem(t.firstChildKey);
			for (; r && (yield r, r = r.nextKey == null ? null : n.getItem(r.nextKey), !(t?.type === "item" && r?.type !== "cell")););
		} };
	}
	clone() {
		let e = super.clone();
		return e.headerRows = this.headerRows, e.columns = this.columns, e.rows = this.rows, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e;
	}
	getTextValue(e) {
		let t = this.getItem(e);
		if (!t) return "";
		if (t.textValue) return t.textValue;
		let n = this.rowHeaderColumnKeys, r = [];
		for (let t of this.getChildren(e)) {
			let e = this.columns[t.index];
			if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break;
		}
		return r.join(" ");
	}
	constructor(...e) {
		super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new Tv(-1), this.columnsDirty = !0, this.expandedKeys = /* @__PURE__ */ new Set();
	}
}, gv = /*#__PURE__*/ a(null), _v = /*#__PURE__*/ a(null), vv = /*#__PURE__*/ a(null), yv = /*#__PURE__*/ a(null), bv = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, _v);
	let r = tf(e), { selectionBehavior: i, selectionMode: a, disallowEmptySelection: o } = r, s = !!e.dragAndDropHooks?.useDraggableCollectionState, c = g(() => ({
		selectionBehavior: a === "none" ? null : i,
		selectionMode: a,
		disallowEmptySelection: o,
		allowsDragging: s
	}), [
		i,
		a,
		o,
		s
	]), l = /*#__PURE__*/ t.createElement(wv.Provider, { value: c }, /*#__PURE__*/ t.createElement(Ga, e));
	return /*#__PURE__*/ t.createElement(Na, {
		content: l,
		createCollection: () => new hv()
	}, (i) => /*#__PURE__*/ t.createElement(Cv, {
		props: e,
		forwardedRef: n,
		selectionState: r,
		collection: i
	}));
}), xv = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.table, {
		...e,
		ref: n
	});
}), Sv = {
	expand: {
		ltr: "ArrowRight",
		rtl: "ArrowLeft"
	},
	collapse: {
		ltr: "ArrowLeft",
		rtl: "ArrowRight"
	}
};
function Cv({ props: e, forwardedRef: n, selectionState: r, collection: i }) {
	[e, n] = Un(e, n, Qi);
	let { shouldUseVirtualFocus: a, disallowTypeAhead: o, filter: s, ...c } = e, l = d(gv);
	n = Rn(g(() => Pn(n, l?.tableRef), [n, l?.tableRef]));
	let [u, p] = Zi(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange);
	i = g(() => i.withExpandedKeys(u), [i, u]);
	let m = i_({
		...c,
		collection: i,
		children: void 0,
		UNSAFE_selectionState: r,
		expandedKeys: u,
		onExpandedChange: p
	}), h = a_(m, s), { isVirtualized: _, layoutDelegate: b, dropTargetDelegate: x, CollectionRoot: S } = d(Za), { dragAndDropHooks: C } = e, { gridProps: w } = Q_({
		...c,
		layoutDelegate: b,
		isVirtualized: _
	}, h, n), T = h.selectionManager, E = !!C?.useDraggableCollectionState, D = !!C?.useDroppableCollectionState, O = v(E), k = v(D);
	f(() => {
		process.env.NODE_ENV !== "production" && (O.current !== E && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), k.current !== D && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
	}, [E, D]);
	let A, j, M, N = !1, P = null, F = v(null), { direction: I } = Ii(), [L] = y(() => new Xg());
	if (E && C) {
		A = C.useDraggableCollectionState({
			collection: h.collection,
			selectionManager: T,
			preview: C.renderDragPreview ? F : void 0
		}), C.useDraggableCollection({}, A, n);
		let e = C.DragPreview;
		P = C.renderDragPreview ? /*#__PURE__*/ t.createElement(e, { ref: F }, C.renderDragPreview) : null;
	}
	if (D && C) {
		j = C.useDroppableCollectionState({
			collection: h.collection,
			selectionManager: T
		});
		let e = new jd({
			collection: h.collection,
			disabledKeys: T.disabledKeys,
			disabledBehavior: T.disabledBehavior,
			ref: n,
			layoutDelegate: b
		}), t = C.dropTargetDelegate || x || new C.ListDropTargetDelegate(i.rows, n);
		L.setup(t, m, I), M = C.useDroppableCollection({
			keyboardDelegate: e,
			dropTargetDelegate: L,
			onDropActivate: (e) => {
				if (e.target.type === "item") {
					let t = e.target.key, n = m.collection.getItem(t), r = u.has(t);
					n && n.hasChildNodes && (!r || C?.isVirtualDragging?.()) && m.toggleKey(t);
				}
			},
			onKeyDown: (e) => {
				let t = j?.target;
				if (t && t.type === "item" && t.dropPosition === "on") {
					let n = m.collection.getItem(t.key);
					(e.key === Sv.expand[I] && n?.hasChildNodes && !m.expandedKeys.has(t.key) || e.key === Sv.collapse[I] && n?.hasChildNodes && m.expandedKeys.has(t.key)) && m.toggleKey(t.key);
				}
			}
		}, j, n), N = j.isDropTarget({ type: "root" });
	}
	let { focusProps: R, isFocused: z, isFocusVisible: ee } = Lo(), B = Vn({
		...e,
		children: void 0,
		defaultClassName: "react-aria-Table",
		values: {
			isDropTarget: N,
			isFocused: z,
			isFocusVisible: ee,
			state: h
		}
	}), te = !!(E && !A?.isDisabled), ne = B.style, re = null;
	l && (re = l.useTableColumnResizeState({ tableWidth: l.tableWidth }, h), _ || (ne = {
		...ne,
		tableLayout: "fixed",
		width: "min-content"
	}));
	let V = io(e, { global: !0 });
	return /*#__PURE__*/ t.createElement(Bn, { values: [
		[vv, h],
		[yv, re],
		[Mu, {
			dragAndDropHooks: C,
			dragState: A,
			dropState: j
		}],
		[Nu, { render: Wv }],
		[Qi, null],
		[$i, null]
	] }, /*#__PURE__*/ t.createElement(Xu, null, /*#__PURE__*/ t.createElement(xv, {
		...G(V, B, w, R, M?.collectionProps),
		style: ne,
		ref: n,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-allows-dragging": te || void 0,
		"data-drop-target": N || void 0,
		"data-focused": z || void 0,
		"data-focus-visible": ee || void 0
	}, /*#__PURE__*/ t.createElement(zu, null, /*#__PURE__*/ t.createElement(S, {
		collection: h.collection,
		scrollRef: l?.scrollRef ?? n,
		persistedKeys: Iu(T, C, j)
	})))), P);
}
var wv = /*#__PURE__*/ a(null), Tv = class extends ea {
	static {
		this.type = "tableheader";
	}
}, Ev = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.thead, {
		...e,
		ref: n
	});
}), Dv = /*#__PURE__*/ Ha(Tv, (e, n) => {
	let r = d(vv).collection, i = la({
		items: r.headerRows,
		children: u((e) => {
			switch (e.type) {
				case "headerrow": return /*#__PURE__*/ t.createElement(kv, { item: e });
				default: throw Error("Unsupported node type in TableHeader: " + e.type);
			}
		}, [])
	}), { rowGroupProps: a } = mv(), { hoverProps: o, isHovered: s } = Uo({
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), c = Vn({
		...e,
		children: void 0,
		defaultClassName: "react-aria-TableHeader",
		values: { isHovered: s }
	});
	return /*#__PURE__*/ t.createElement(Ev, {
		...G(io(e, { global: !0 }), a, o),
		...c,
		ref: n,
		"data-hovered": s || void 0
	}, i);
}, (e) => /*#__PURE__*/ t.createElement(Ga, {
	dependencies: e.dependencies,
	items: e.columns
}, e.children)), Ov = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement("div", {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement("tr", {
		...e,
		ref: n
	});
});
function kv({ item: e }) {
	let n = v(null), r = d(vv), { isVirtualized: i, CollectionBranch: a } = d(Za), { rowProps: o } = cv({
		node: e,
		isVirtualized: i
	}, r, n), { checkboxProps: s } = fv(r);
	return /*#__PURE__*/ t.createElement(Ov, {
		...o,
		ref: n
	}, /*#__PURE__*/ t.createElement(Bn, { values: [[Yc, { slots: { selection: s } }], [Xc, { slots: { selection: s } }]] }, /*#__PURE__*/ t.createElement(a, {
		collection: r.collection,
		parent: e
	})));
}
var Av = class extends ea {
	static {
		this.type = "column";
	}
}, jv = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.th, {
		...e,
		ref: n
	});
}), Mv = /*#__PURE__*/ Va(Av, (e, n, r) => {
	let i = Rn(n), a = d(vv), { isVirtualized: o } = d(Za), { columnHeaderProps: s, isPressed: c } = nv({
		node: r,
		isVirtualized: o
	}, a, i), { isFocused: l, isFocusVisible: u, focusProps: f } = Lo(), p = d(yv), m = !1;
	if (p) m = p.resizingColumn === r.key;
	else if (process.env.NODE_ENV !== "production") for (let e in [
		"width",
		"defaultWidth",
		"minWidth",
		"maxWidth"
	]) e in r.props && console.warn(`The ${e} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
	let { hoverProps: h, isHovered: g } = Uo({ isDisabled: !e.allowsSorting }), _ = Vn({
		...e,
		id: void 0,
		children: r.rendered,
		defaultClassName: "react-aria-Column",
		values: {
			isHovered: g,
			isPressed: c,
			isFocused: l,
			isFocusVisible: u,
			allowsSorting: r.props.allowsSorting,
			sortDirection: a.sortDescriptor?.column === r.key ? a.sortDescriptor.direction : void 0,
			isResizing: m,
			startResize: () => {
				if (p) p.startResize(r.key), a.setKeyboardNavigationDisabled(!0);
				else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
			},
			sort: (e) => {
				a.sort(r.key, e);
			}
		}
	}), v = _.style;
	p && (v = {
		...v,
		width: p.getColumnWidth(r.key)
	});
	let y = io(e, { global: !0 });
	return delete y.id, /*#__PURE__*/ t.createElement(jv, {
		...G(y, s, f, h),
		..._,
		style: v,
		ref: i,
		"data-hovered": g || void 0,
		"data-pressed": c || void 0,
		"data-focused": l || void 0,
		"data-focus-visible": u || void 0,
		"data-resizing": m || void 0,
		"data-allows-sorting": r.props.allowsSorting || void 0,
		"data-sort-direction": a.sortDescriptor?.column === r.key ? a.sortDescriptor.direction : void 0
	}, /*#__PURE__*/ t.createElement(Bn, { values: [[Nv, {
		column: r,
		triggerRef: i
	}], [Za, Ja]] }, _.children));
}), Nv = /*#__PURE__*/ a(null), Pv = class extends ta {
	static {
		this.type = "tablebody";
	}
}, Fv = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.tbody, {
		...e,
		ref: n
	});
}), Iv = /*#__PURE__*/ Ha(Pv, (e, n, r) => {
	let i = d(vv), { isVirtualized: a } = d(Za), o = i.collection, { CollectionBranch: s } = d(Za), { dragAndDropHooks: c, dropState: l } = d(Mu), u = !!c?.useDroppableCollectionState && !l?.isDisabled, f = u && !!l && (l.isDropTarget({ type: "root" }) ?? !1), p = o.size === 0, m = {
		isDropTarget: f,
		isEmpty: p
	}, h = Vn({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: "react-aria-TableBody",
		values: m
	}), g, _ = o.columnCount;
	if (p && e.renderEmptyState && i) {
		let n = {}, r = {}, i = {};
		a ? (r["aria-colspan"] = _, i = { display: "contents" }) : r.colSpan = _, g = /*#__PURE__*/ t.createElement(zv, {
			role: "row",
			...n,
			style: i
		}, /*#__PURE__*/ t.createElement(Hv, {
			role: "rowheader",
			...r,
			style: i
		}, e.renderEmptyState(m)));
	}
	let { rowGroupProps: v } = mv(), y = io(e, { global: !0 });
	return /*#__PURE__*/ t.createElement(Fv, {
		...G(y, h, v),
		ref: n,
		"data-empty": p || void 0
	}, u && /*#__PURE__*/ t.createElement(Yv, null), /*#__PURE__*/ t.createElement(s, {
		collection: o,
		parent: r,
		renderDropIndicator: Fu(c, l)
	}), g);
});
(class extends ta {
	static {
		this.type = "tablefooter";
	}
});
var Lv = /*#__PURE__*/ a({ isFocusVisibleWithinRow: !1 }), Rv = class extends ea {
	static {
		this.type = "item";
	}
	filter(e, t, n) {
		let r = e.getChildren(this.key);
		for (let i of r) if (n(i.textValue, i)) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
}, zv = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.tr, {
		...e,
		ref: n
	});
}), Bv = /*#__PURE__*/ Ha(Rv, (e, n, r) => {
	let i = Rn(n), a = d(vv), { dragAndDropHooks: o, dragState: s, dropState: c } = d(Mu), { isVirtualized: l, CollectionBranch: u } = d(Za), p = s && !(s.isDisabled || s.selectionManager.isDisabled(r.key)), { rowProps: m, expandButtonProps: h, ...g } = ov({
		node: r,
		shouldSelectOnPressUp: !!s,
		isVirtualized: l
	}, a, i), { isFocused: _, isFocusVisible: y, focusProps: b } = Lo(), { isFocusVisible: x, focusProps: S } = Lo({ within: !0 }), { hoverProps: C, isHovered: w } = Uo({
		isDisabled: !g.allowsSelection && !g.hasAction && !p,
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), { checkboxProps: T } = dv({ key: r.key }, a), E;
	s && o && (E = o.useDraggableItem({
		key: r.key,
		hasDragButton: !0
	}, s));
	let D, O = v(null), { visuallyHiddenProps: k } = Dc();
	c && o && (D = o.useDropIndicator({ target: {
		type: "item",
		key: r.key,
		dropPosition: "on"
	} }, c, O));
	let A = v(null);
	f(() => {
		s && !A.current && process.env.NODE_ENV !== "production" && console.warn("Draggable items in a Table must contain a <Button slot=\"drag\"> element so that keyboard and screen reader users can drag them.");
	}, []);
	let j = s && s.isDragging(r.key), { children: M, ...N } = e, P = e.hasChildItems || a.collection.getItem(r.lastChildKey)?.type !== "cell", F = P && a.expandedKeys.has(r.key), I = Vn({
		...N,
		id: void 0,
		defaultClassName: "react-aria-Row",
		defaultStyle: { "--table-row-level": r.level + 1 },
		values: {
			...g,
			state: a,
			isHovered: w,
			isFocused: _,
			isFocusVisible: y,
			selectionMode: a.selectionManager.selectionMode,
			selectionBehavior: a.selectionManager.selectionBehavior,
			isDragging: j,
			isDropTarget: D?.isDropTarget,
			isFocusVisibleWithin: x,
			id: r.key,
			hasChildItems: P,
			isExpanded: F,
			level: r.level + 1
		}
	}), L = io(e, { global: !0 });
	return delete L.id, delete L.onClick, /*#__PURE__*/ t.createElement(t.Fragment, null, D && !D.isHidden && /*#__PURE__*/ t.createElement(zv, {
		role: "row",
		style: { height: 0 }
	}, /*#__PURE__*/ t.createElement(Hv, {
		role: "gridcell",
		colSpan: a.collection.columnCount,
		style: { padding: 0 }
	}, /*#__PURE__*/ t.createElement("div", {
		role: "button",
		...k,
		...D.dropIndicatorProps,
		ref: O
	}))), /*#__PURE__*/ t.createElement(zv, {
		...G(L, I, m, b, C, E?.dragProps, S),
		ref: i,
		"data-disabled": g.isDisabled || void 0,
		"data-selected": g.isSelected || void 0,
		"data-hovered": w || void 0,
		"data-focused": g.isFocused || void 0,
		"data-focus-visible": y || void 0,
		"data-pressed": g.isPressed || void 0,
		"data-dragging": j || void 0,
		"data-drop-target": D?.isDropTarget || void 0,
		"data-selection-mode": a.selectionManager.selectionMode === "none" ? void 0 : a.selectionManager.selectionMode,
		"data-focus-visible-within": x || void 0,
		"data-expanded": F || void 0,
		"data-has-child-items": P || void 0,
		"data-level": r.level + 1
	}, /*#__PURE__*/ t.createElement(Bn, { values: [
		[Yc, { slots: {
			[zn]: {},
			selection: T
		} }],
		[Xc, { slots: {
			[zn]: {},
			selection: T
		} }],
		[fc, { slots: {
			[zn]: {},
			chevron: h,
			drag: {
				...E?.dragButtonProps,
				ref: A,
				style: { pointerEvents: "none" }
			}
		} }],
		[Bu, { isSelected: g.isSelected }],
		[Lv, { isFocusVisibleWithinRow: x }]
	] }, /*#__PURE__*/ t.createElement(u, {
		collection: a.collection,
		parent: r
	}))));
}, (e) => {
	if (e.id == null && typeof e.children == "function") throw Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
	let n = [e.value].concat(e.dependencies);
	return /*#__PURE__*/ t.createElement(Ga, {
		dependencies: n,
		items: e.columns,
		idScope: e.id
	}, e.children);
}), Vv = class extends ea {
	static {
		this.type = "cell";
	}
}, Hv = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.td, {
		...e,
		ref: n
	});
}), Uv = /*#__PURE__*/ Va(Vv, (e, n, r) => {
	let i = Rn(n), a = d(vv), { dragState: o } = d(Mu), { isVirtualized: s } = d(Za);
	r.column = a.collection.columns[r.index];
	let { gridCellProps: c, isPressed: l } = lv({
		node: r,
		shouldSelectOnPressUp: !!o,
		isVirtualized: s
	}, a, i), { isFocused: u, isFocusVisible: f, focusProps: p } = Lo(), { hoverProps: m, isHovered: h } = Uo({}), { isFocusVisibleWithinRow: g } = d(Lv), _ = r.parentKey == null ? !1 : a.selectionManager.isSelected(r.parentKey), v = r.colIndex || r.index, y = a.collection.getItem(r.parentKey), b = y.props.hasChildItems || a.collection.getItem(y.lastChildKey)?.type !== "cell", x = b && a.expandedKeys.has(r.parentKey), S = a.selectionManager.isDisabled(r.parentKey), C = Vn({
		...e,
		id: void 0,
		defaultClassName: "react-aria-Cell",
		values: {
			isFocused: u,
			isFocusVisible: f,
			isFocusVisibleWithinRow: g,
			isPressed: l,
			isHovered: h,
			isSelected: _,
			id: r.key,
			columnIndex: v,
			hasChildItems: b,
			isExpanded: x,
			isDisabled: S,
			level: y.level + 1,
			isTreeColumn: r.column.key === a.treeColumn
		}
	}), w = io(e, { global: !0 });
	return delete w.id, /*#__PURE__*/ t.createElement(Hv, {
		...G(w, C, c, p, m),
		ref: i,
		"data-focused": u || void 0,
		"data-focus-visible": f || void 0,
		"data-focus-visible-within-row": g || void 0,
		"data-pressed": l || void 0,
		"data-selected": _ || void 0,
		"data-column-index": v,
		"data-expanded": x || void 0,
		"data-has-child-items": b || void 0,
		"data-level": y.level + 1,
		"data-tree-column": r.column.key === a.treeColumn || void 0,
		"data-disabled": S || void 0
	}, /*#__PURE__*/ t.createElement(Za.Provider, { value: Ja }, C.children));
});
function Wv(e, n) {
	n = Rn(n);
	let { dragAndDropHooks: r, dropState: i } = d(Mu), a = v(null), { dropIndicatorProps: o, isHidden: s, isDropTarget: c } = r.useDropIndicator(e, i, a);
	if (s) return null;
	let l = i && e.target.type === "item" ? (i.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
	return /*#__PURE__*/ t.createElement(Jv, {
		...e,
		dropIndicatorProps: o,
		isDropTarget: c,
		buttonRef: a,
		level: l,
		ref: n
	});
}
var Gv = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.tr, {
		...e,
		ref: n
	});
}), Kv = /*#__PURE__*/ s(function(e, n) {
	let { isVirtualized: r } = d(Za);
	return r ? /*#__PURE__*/ t.createElement(K.div, {
		...e,
		ref: n
	}) : /*#__PURE__*/ t.createElement(K.td, {
		...e,
		ref: n
	});
});
function qv(e, n) {
	let { dropIndicatorProps: r, isDropTarget: i, buttonRef: a, level: o, ...s } = e, c = d(vv), { visuallyHiddenProps: l } = Dc(), u = Vn({
		...s,
		defaultClassName: "react-aria-DropIndicator",
		defaultStyle: { "--table-row-level": o + 1 },
		values: { isDropTarget: i }
	});
	return /*#__PURE__*/ t.createElement(Gv, {
		...io(e, { global: !0 }),
		...u,
		role: "row",
		ref: n,
		"data-drop-target": i || void 0,
		"aria-level": o
	}, /*#__PURE__*/ t.createElement(Kv, {
		role: "gridcell",
		colSpan: c.collection.columnCount,
		style: { padding: 0 }
	}, /*#__PURE__*/ t.createElement("div", {
		...l,
		role: "button",
		...r,
		ref: a
	}), u.children));
}
var Jv = /*#__PURE__*/ s(qv);
function Yv() {
	let e = d(vv), { dragAndDropHooks: n, dropState: r } = d(Mu), i = v(null), { dropIndicatorProps: a } = n.useDropIndicator({ target: { type: "root" } }, r, i), o = r.isDropTarget({ type: "root" }), { visuallyHiddenProps: s } = Dc();
	return !o && a["aria-hidden"] ? null : /*#__PURE__*/ t.createElement(zv, {
		role: "row",
		"aria-hidden": a["aria-hidden"],
		style: { height: 0 }
	}, /*#__PURE__*/ t.createElement(Hv, {
		role: "gridcell",
		colSpan: e.collection.columnCount,
		style: { padding: 0 }
	}, /*#__PURE__*/ t.createElement("div", {
		role: "button",
		...s,
		...a,
		ref: i
	})));
}
Va(na, function(e, n, r) {
	let i = d(vv), { isVirtualized: a } = d(Za), { isLoading: o, onLoadMore: s, scrollOffset: c, ...l } = e, u = i.collection.columns.length, f = v(null);
	pf(g(() => ({
		onLoadMore: s,
		collection: i?.collection,
		sentinelRef: f,
		scrollOffset: c
	}), [
		s,
		c,
		i?.collection
	]), f);
	let p = Vn({
		...l,
		id: void 0,
		children: r.rendered,
		defaultClassName: "react-aria-TableLoadingIndicator",
		defaultStyle: { "--table-row-level": r.level + 1 },
		values: void 0
	}), m = {}, h = {}, _ = {};
	return a ? (h["aria-colspan"] = u, _ = { display: "contents" }) : h.colSpan = u, /*#__PURE__*/ t.createElement(t.Fragment, null, /*#__PURE__*/ t.createElement(zv, {
		style: { height: 0 },
		inert: Zd(!0)
	}, /*#__PURE__*/ t.createElement(Hv, { style: {
		padding: 0,
		border: 0
	} }, /*#__PURE__*/ t.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: f,
		style: {
			position: "relative",
			height: 1,
			width: 1
		}
	}))), o && p.children && /*#__PURE__*/ t.createElement(zv, {
		...G(io(e, { global: !0 }), m),
		...p,
		role: "row",
		ref: n,
		"aria-level": r.level + 1,
		"data-level": r.level + 1
	}, /*#__PURE__*/ t.createElement(Hv, {
		role: "rowheader",
		...h,
		style: _
	}, p.children)));
});
//#endregion
//#region node_modules/react-aria/dist/private/button/useToggleButton.mjs
function Xv(e, t, n) {
	let { isSelected: r } = t, { isPressed: i, buttonProps: a } = dc({
		...e,
		onPress: pn(t.toggle, e.onPress)
	}, n);
	return {
		isPressed: i,
		isSelected: r,
		isDisabled: e.isDisabled || !1,
		buttonProps: G(a, { "aria-pressed": r })
	};
}
//#endregion
//#region node_modules/react-aria/dist/private/button/useToggleButtonGroup.mjs
function Zv(e, t, n) {
	let r = {
		isSelected: t.selectedKeys.has(e.id),
		defaultSelected: !1,
		setSelected(n) {
			t.setSelected(e.id, n);
		},
		toggle() {
			t.toggleKey(e.id);
		}
	}, { isPressed: i, isSelected: a, isDisabled: o, buttonProps: s } = Xv({
		...e,
		id: void 0,
		isDisabled: e.isDisabled || t.isDisabled
	}, r, n);
	return t.selectionMode === "single" && (s.role = "radio", s["aria-checked"] = r.isSelected, delete s["aria-pressed"]), {
		isPressed: i,
		isSelected: a,
		isDisabled: o,
		buttonProps: s
	};
}
//#endregion
//#region node_modules/react-aria-components/dist/private/ToggleButtonGroup.mjs
var Qv = /*#__PURE__*/ a(null), $v = /*#__PURE__*/ a({}), ey = /*#__PURE__*/ s(function(e, n) {
	[e, n] = Un(e, n, $v);
	let r = d(Qv), i = Jc(r && e.id != null ? {
		isSelected: r.selectedKeys.has(e.id),
		onChange(t) {
			r.setSelected(e.id, t);
		}
	} : e), { buttonProps: a, isPressed: o, isSelected: s, isDisabled: c } = r && e.id != null ? Zv({
		...e,
		id: e.id
	}, r, n) : Xv({
		...e,
		id: e.id == null ? void 0 : String(e.id)
	}, i, n), { focusProps: l, isFocused: u, isFocusVisible: f } = Lo(e), { hoverProps: p, isHovered: m } = Uo({
		...e,
		isDisabled: c
	}), h = Vn({
		...e,
		id: void 0,
		values: {
			isHovered: m,
			isPressed: o,
			isFocused: u,
			isSelected: i.isSelected,
			isFocusVisible: f,
			isDisabled: c,
			state: i
		},
		defaultClassName: "react-aria-ToggleButton"
	}), g = io(e, { global: !0 });
	return delete g.id, delete g.onClick, /*#__PURE__*/ t.createElement(K.button, {
		...G(g, h, a, l, p),
		ref: n,
		slot: e.slot || void 0,
		"data-focused": u || void 0,
		"data-disabled": c || void 0,
		"data-pressed": o || void 0,
		"data-selected": s || void 0,
		"data-hovered": m || void 0,
		"data-focus-visible": f || void 0
	}, /*#__PURE__*/ t.createElement(Bu.Provider, { value: { isSelected: s } }, h.children));
});
//#endregion
//#region src/components/Button/Button.tsx
function ty(e) {
	let t = "s-btn";
	switch (e) {
		case "primary": return `${t} s-btn--primary`;
		case "ghost": return `${t} s-btn--ghost`;
		case "danger": return `${t} s-btn--danger`;
		default: return t;
	}
}
function ny({ variant: e = "secondary", className: t, ...n }) {
	return /* @__PURE__ */ C(pc, {
		className: [ty(e), t].filter(Boolean).join(" "),
		...n
	});
}
function ry({ className: e, ...t }) {
	return /* @__PURE__ */ C(ey, {
		className: [
			"s-btn",
			"btn__toggle",
			e
		].filter(Boolean).join(" "),
		...t
	});
}
function iy({ children: e }) {
	return /* @__PURE__ */ C("div", {
		className: "btn__row",
		children: e
	});
}
function ay({ children: e }) {
	return /* @__PURE__ */ C("div", {
		className: "btn",
		children: e
	});
}
//#endregion
//#region src/components/Alert/Alert.tsx
function oy({ className: e = "alert" }) {
	let [t, n] = y([]);
	function r(e, t) {
		n((n) => [...n, {
			id: Date.now() + Math.random(),
			tone: e,
			text: t
		}]);
	}
	function i() {
		n([]);
	}
	let a = t.filter((e) => e.tone === "info"), o = t.filter((e) => e.tone !== "info");
	return /* @__PURE__ */ w("div", {
		className: e,
		children: [
			/* @__PURE__ */ w("div", {
				className: "alert__controls",
				children: [
					/* @__PURE__ */ C("button", {
						className: "s-btn",
						onClick: () => r("info", "Draft saved."),
						children: "Push info"
					}),
					/* @__PURE__ */ C("button", {
						className: "s-btn",
						onClick: () => r("warn", "Unsaved changes since the last sync."),
						children: "Push warning"
					}),
					/* @__PURE__ */ C("button", {
						className: "s-btn s-btn--danger",
						onClick: () => r("error", "Network unreachable — alert announced assertively."),
						children: "Push error"
					}),
					/* @__PURE__ */ C("button", {
						className: "s-btn s-btn--ghost",
						onClick: i,
						children: "Clear"
					})
				]
			}),
			/* @__PURE__ */ w("div", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "false",
				"aria-relevant": "additions",
				className: "alert__log",
				children: [/* @__PURE__ */ C("p", {
					className: "alert__loglabel mono",
					children: "status · polite"
				}), a.length === 0 ? /* @__PURE__ */ C("p", {
					className: "alert__empty mono",
					children: "No status messages."
				}) : /* @__PURE__ */ C("ul", { children: a.map((e) => /* @__PURE__ */ w("li", {
					className: `alert__msg alert__msg--${e.tone}`,
					children: [/* @__PURE__ */ C("span", {
						className: "mono",
						children: e.tone.toUpperCase()
					}), /* @__PURE__ */ C("span", { children: e.text })]
				}, e.id)) })]
			}),
			/* @__PURE__ */ w("div", {
				role: "alert",
				"aria-live": "assertive",
				"aria-atomic": "true",
				"aria-relevant": "additions",
				className: "alert__log",
				children: [/* @__PURE__ */ C("p", {
					className: "alert__loglabel mono",
					children: "alert · assertive"
				}), o.length === 0 ? /* @__PURE__ */ C("p", {
					className: "alert__empty mono",
					children: "No alerts. Trigger one above."
				}) : /* @__PURE__ */ C("ul", { children: o.map((e) => /* @__PURE__ */ w("li", {
					className: `alert__msg alert__msg--${e.tone}`,
					children: [/* @__PURE__ */ C("span", {
						className: "mono",
						children: e.tone.toUpperCase()
					}), /* @__PURE__ */ C("span", { children: e.text })]
				}, e.id)) })]
			})
		]
	});
}
//#endregion
//#region node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function sy(t, n = globalThis?.document) {
	let r = wt(t);
	e.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
	}, [r, n]);
}
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var cy = "DismissableLayer", ly = "dismissableLayer.update", uy = "dismissableLayer.pointerDownOutside", dy = "dismissableLayer.focusOutside", fy, py = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), my = e.forwardRef((t, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = t, u = e.useContext(py), [d, f] = e.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = e.useState({}), h = V(n, (e) => f(e)), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = _y((e) => {
		let t = e.target, n = [...u.branches].some((e) => e.contains(t));
		!x || n || (a?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), w = vy((e) => {
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p);
	return sy((e) => {
		y === u.layers.size - 1 && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	}, p), e.useEffect(() => {
		if (d) return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (fy = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), yy(), () => {
			r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = fy);
		};
	}, [
		d,
		p,
		r,
		u
	]), e.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), yy());
	}, [d, u]), e.useEffect(() => {
		let e = () => m({});
		return document.addEventListener(ly, e), () => document.removeEventListener(ly, e);
	}, []), /* @__PURE__ */ C(U.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: H(t.onFocusCapture, w.onFocusCapture),
		onBlurCapture: H(t.onBlurCapture, w.onBlurCapture),
		onPointerDownCapture: H(t.onPointerDownCapture, S.onPointerDownCapture)
	});
});
my.displayName = cy;
var hy = "DismissableLayerBranch", gy = e.forwardRef((t, n) => {
	let r = e.useContext(py), i = e.useRef(null), a = V(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ C(U.div, {
		...t,
		ref: a
	});
});
gy.displayName = hy;
function _y(t, n = globalThis?.document) {
	let r = wt(t), i = e.useRef(!1), a = e.useRef(() => {});
	return e.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let t = function() {
					by(uy, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, { once: !0 })) : t();
			} else n.removeEventListener("click", a.current);
			i.current = !1;
		}, t = window.setTimeout(() => {
			n.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current);
		};
	}, [n, r]), { onPointerDownCapture: () => i.current = !0 };
}
function vy(t, n = globalThis?.document) {
	let r = wt(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && by(dy, r, { originalEvent: e }, { discrete: !1 });
		};
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function yy() {
	let e = new CustomEvent(ly);
	document.dispatchEvent(e);
}
function by(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? _e(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var xy = "focusScope.autoFocusOnMount", Sy = "focusScope.autoFocusOnUnmount", Cy = {
	bubbles: !1,
	cancelable: !0
}, wy = "FocusScope", Ty = e.forwardRef((t, n) => {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = t, [c, l] = e.useState(null), u = wt(a), d = wt(o), f = e.useRef(null), p = V(n, (e) => l(e)), m = e.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	e.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (m.paused || !c) return;
				let t = e.target;
				c.contains(t) ? f.current = t : My(f.current, { select: !0 });
			}, t = function(e) {
				if (m.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (c.contains(t) || My(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && My(c);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		c,
		m.paused
	]), e.useEffect(() => {
		if (c) {
			Ny.add(m);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(xy, Cy);
				c.addEventListener(xy, u), c.dispatchEvent(t), t.defaultPrevented || (Ey(Iy(Oy(c)), { select: !0 }), document.activeElement === e && My(c));
			}
			return () => {
				c.removeEventListener(xy, u), setTimeout(() => {
					let t = new CustomEvent(Sy, Cy);
					c.addEventListener(Sy, d), c.dispatchEvent(t), t.defaultPrevented || My(e ?? document.body, { select: !0 }), c.removeEventListener(Sy, d), Ny.remove(m);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		m
	]);
	let h = e.useCallback((e) => {
		if (!r && !i || m.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = Dy(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && My(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && My(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		m.paused
	]);
	return /* @__PURE__ */ C(U.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: h
	});
});
Ty.displayName = wy;
function Ey(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (My(r, { select: t }), document.activeElement !== n) return;
}
function Dy(e) {
	let t = Oy(e);
	return [ky(t, e), ky(t.reverse(), e)];
}
function Oy(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function ky(e, t) {
	for (let n of e) if (!Ay(n, { upTo: t })) return n;
}
function Ay(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function jy(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function My(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && jy(e) && t && e.select();
	}
}
var Ny = Py();
function Py() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Fy(e, t), e.unshift(t);
		},
		remove(t) {
			e = Fy(e, t), e[0]?.resume();
		}
	};
}
function Fy(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Iy(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var Ly = "Portal", Ry = e.forwardRef((t, n) => {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	fe(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? E.createPortal(/* @__PURE__ */ C(U.div, {
		...i,
		ref: n
	}), s) : null;
});
Ry.displayName = Ly;
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var zy = 0;
function By() {
	e.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vy()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vy()), zy++, () => {
			zy === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), zy--;
		};
	}, []);
}
function Vy() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var Hy = function() {
	return Hy = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Hy.apply(this, arguments);
};
function Uy(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Wy(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Gy = "right-scroll-bar-position", Ky = "width-before-scroll-bar", qy = "with-scroll-bars-hidden", Jy = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Yy(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function Xy(e, t) {
	var n = y(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Zy = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Qy = /* @__PURE__ */ new WeakMap();
function $y(e, t) {
	var n = Xy(t || null, function(t) {
		return e.forEach(function(e) {
			return Yy(e, t);
		});
	});
	return Zy(function() {
		var t = Qy.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Yy(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Yy(e, a);
			});
		}
		Qy.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function eb(e) {
	return e;
}
function tb(e, t) {
	t === void 0 && (t = eb);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function nb(e) {
	e === void 0 && (e = {});
	var t = tb(null);
	return t.options = Hy({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var rb = function(t) {
	var n = t.sideCar, r = Uy(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Hy({}, r));
};
rb.isSideCarExport = !0;
function ib(e, t) {
	return e.useMedium(t), rb;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var ab = nb(), ob = function() {}, sb = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: ob,
		onWheelCapture: ob,
		onTouchMoveCapture: ob
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = Uy(t, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = $y([r, n]), w = Hy(Hy({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: ab,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Hy(Hy({}, w), { ref: C })) : e.createElement(y, Hy({}, w, {
		className: l,
		ref: C
	}), c));
});
sb.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, sb.classNames = {
	fullWidth: Ky,
	zeroRight: Gy
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var cb, lb = function() {
	if (cb) return cb;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function ub() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = lb();
	return t && e.setAttribute("nonce", t), e;
}
function db(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fb(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var pb = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = ub()) && (db(t, n), fb(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, mb = function() {
	var t = pb();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, hb = function() {
	var e = mb();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, gb = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, _b = function(e) {
	return parseInt(e || "", 10) || 0;
}, vb = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		_b(n),
		_b(r),
		_b(i)
	];
}, yb = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return gb;
	var t = vb(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, bb = hb(), xb = "data-scroll-locked", Sb = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${qy} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${xb}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Gy} {
    right: ${s}px ${r};
  }
  
  .${Ky} {
    margin-right: ${s}px ${r};
  }
  
  .${Gy} .${Gy} {
    right: 0 ${r};
  }
  
  .${Ky} .${Ky} {
    margin-right: 0 ${r};
  }
  
  body[${xb}] {
    ${Jy}: ${s}px;
  }
`;
}, Cb = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, wb = function() {
	e.useEffect(function() {
		return document.body.setAttribute(xb, (Cb() + 1).toString()), function() {
			var e = Cb() - 1;
			e <= 0 ? document.body.removeAttribute(xb) : document.body.setAttribute(xb, e.toString());
		};
	}, []);
}, Tb = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	wb();
	var o = e.useMemo(function() {
		return yb(a);
	}, [a]);
	return e.createElement(bb, { styles: Sb(o, !n, a, r ? "" : "!important") });
}, Eb = !1;
if (typeof window < "u") try {
	var Db = Object.defineProperty({}, "passive", { get: function() {
		return Eb = !0, !0;
	} });
	window.addEventListener("test", Db, Db), window.removeEventListener("test", Db, Db);
} catch {
	Eb = !1;
}
var Ob = Eb ? { passive: !1 } : !1, kb = function(e) {
	return e.tagName === "TEXTAREA";
}, Ab = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !kb(e) && n[t] === "visible");
}, jb = function(e) {
	return Ab(e, "overflowY");
}, Mb = function(e) {
	return Ab(e, "overflowX");
}, Nb = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Ib(e, r)) {
			var i = Lb(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Pb = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Fb = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Ib = function(e, t) {
	return e === "v" ? jb(t) : Mb(t);
}, Lb = function(e, t) {
	return e === "v" ? Pb(t) : Fb(t);
}, Rb = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, zb = function(e, t, n, r, i) {
	var a = Rb(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Lb(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Ib(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Bb = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Vb = function(e) {
	return [e.deltaX, e.deltaY];
}, Hb = function(e) {
	return e && "current" in e ? e.current : e;
}, Ub = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Wb = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Gb = 0, Kb = [];
function qb(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Gb++)[0], o = e.useState(hb)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = Wy([t.lockRef.current], (t.shards || []).map(Hb), !0).filter(Boolean);
			return e.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), e.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = e.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = Bb(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Nb(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Nb(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return zb(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!Kb.length || Kb[Kb.length - 1] !== o)) {
			var r = "deltaY" in t ? Vb(t) : Bb(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Ub(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(Hb).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = e.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: Jb(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = Bb(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, Vb(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, Bb(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return Kb.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Ob), document.addEventListener("touchmove", l, Ob), document.addEventListener("touchstart", d, Ob), function() {
			Kb = Kb.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Ob), document.removeEventListener("touchmove", l, Ob), document.removeEventListener("touchstart", d, Ob);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: Wb(a) }) : null, m ? e.createElement(Tb, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Jb(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Yb = ib(ab, qb), Xb = e.forwardRef(function(t, n) {
	return e.createElement(sb, Hy({}, t, {
		ref: n,
		sideCar: Yb
	}));
});
Xb.classNames = sb.classNames;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var Zb = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Qb = /* @__PURE__ */ new WeakMap(), $b = /* @__PURE__ */ new WeakMap(), ex = {}, tx = 0, nx = function(e) {
	return e && (e.host || nx(e.parentNode));
}, rx = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = nx(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, ix = function(e, t, n, r) {
	var i = rx(t, Array.isArray(e) ? e : [e]);
	ex[n] || (ex[n] = /* @__PURE__ */ new WeakMap());
	var a = ex[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Qb.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Qb.set(e, c), a.set(e, l), o.push(e), c === 1 && i && $b.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), tx++, function() {
		o.forEach(function(e) {
			var t = Qb.get(e) - 1, i = a.get(e) - 1;
			Qb.set(e, t), a.set(e, i), t || ($b.has(e) || e.removeAttribute(r), $b.delete(e)), i || e.removeAttribute(n);
		}), tx--, tx || (Qb = /* @__PURE__ */ new WeakMap(), Qb = /* @__PURE__ */ new WeakMap(), $b = /* @__PURE__ */ new WeakMap(), ex = {});
	};
}, ax = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Zb(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), ix(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, ox = "Dialog", [sx, cx] = B(ox), [lx, ux] = sx(ox), dx = (t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), [u, d] = me({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: ox
	});
	return /* @__PURE__ */ C(lx, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: Te(),
		titleId: Te(),
		descriptionId: Te(),
		open: u,
		onOpenChange: d,
		onOpenToggle: e.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: r
	});
};
dx.displayName = ox;
var fx = "DialogTrigger", px = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = ux(fx, n), a = V(t, i.triggerRef);
	return /* @__PURE__ */ C(U.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Nx(i.open),
		...r,
		ref: a,
		onClick: H(e.onClick, i.onOpenToggle)
	});
});
px.displayName = fx;
var mx = "DialogPortal", [hx, gx] = sx(mx, { forceMount: void 0 }), _x = (t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = ux(mx, n);
	return /* @__PURE__ */ C(hx, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ C(ye, {
			present: r || o.open,
			children: /* @__PURE__ */ C(Ry, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
};
_x.displayName = mx;
var vx = "DialogOverlay", yx = e.forwardRef((e, t) => {
	let n = gx(vx, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = ux(vx, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ C(ye, {
		present: r || a.open,
		children: /* @__PURE__ */ C(xx, {
			...i,
			ref: t
		})
	}) : null;
});
yx.displayName = vx;
var bx = /* @__PURE__ */ ie("DialogOverlay.RemoveScroll"), xx = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = ux(vx, n);
	return /* @__PURE__ */ C(Xb, {
		as: bx,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ C(U.div, {
			"data-state": Nx(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), Sx = "DialogContent", Cx = e.forwardRef((e, t) => {
	let n = gx(Sx, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = ux(Sx, e.__scopeDialog);
	return /* @__PURE__ */ C(ye, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ C(wx, {
			...i,
			ref: t
		}) : /* @__PURE__ */ C(Tx, {
			...i,
			ref: t
		})
	});
});
Cx.displayName = Sx;
var wx = e.forwardRef((t, n) => {
	let r = ux(Sx, t.__scopeDialog), i = e.useRef(null), a = V(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return ax(e);
	}, []), /* @__PURE__ */ C(Ex, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: H(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: H(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: H(t.onFocusOutside, (e) => e.preventDefault())
	});
}), Tx = e.forwardRef((t, n) => {
	let r = ux(Sx, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ C(Ex, {
		...t,
		ref: n,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || r.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, e.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let n = e.target;
			r.triggerRef.current?.contains(n) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && a.current && e.preventDefault();
		}
	});
}), Ex = e.forwardRef((t, n) => {
	let { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = t, c = ux(Sx, r), l = e.useRef(null), u = V(n, l);
	return By(), /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C(Ty, {
		asChild: !0,
		loop: !0,
		trapped: i,
		onMountAutoFocus: a,
		onUnmountAutoFocus: o,
		children: /* @__PURE__ */ C(my, {
			role: "dialog",
			id: c.contentId,
			"aria-describedby": c.descriptionId,
			"aria-labelledby": c.titleId,
			"data-state": Nx(c.open),
			...s,
			ref: u,
			onDismiss: () => c.onOpenChange(!1)
		})
	}), /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C(Lx, { titleId: c.titleId }), /* @__PURE__ */ C(zx, {
		contentRef: l,
		descriptionId: c.descriptionId
	})] })] });
}), Dx = "DialogTitle", Ox = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = ux(Dx, n);
	return /* @__PURE__ */ C(U.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
Ox.displayName = Dx;
var kx = "DialogDescription", Ax = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = ux(kx, n);
	return /* @__PURE__ */ C(U.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
Ax.displayName = kx;
var jx = "DialogClose", Mx = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = ux(jx, n);
	return /* @__PURE__ */ C(U.button, {
		type: "button",
		...r,
		ref: t,
		onClick: H(e.onClick, () => i.onOpenChange(!1))
	});
});
Mx.displayName = jx;
function Nx(e) {
	return e ? "open" : "closed";
}
var Px = "DialogTitleWarning", [Fx, Ix] = ee(Px, {
	contentName: Sx,
	titleName: Dx,
	docsSlug: "dialog"
}), Lx = ({ titleId: t }) => {
	let n = Ix(Px), r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
	return e.useEffect(() => {
		t && (document.getElementById(t) || console.error(r));
	}, [r, t]), null;
}, Rx = "DialogDescriptionWarning", zx = ({ contentRef: t, descriptionId: n }) => {
	let r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ix(Rx).contentName}}.`;
	return e.useEffect(() => {
		let e = t.current?.getAttribute("aria-describedby");
		n && e && (document.getElementById(n) || console.warn(r));
	}, [
		r,
		t,
		n
	]), null;
}, Bx = dx, Vx = px, Hx = _x, Ux = yx, Wx = Cx, Gx = Ox, Kx = Ax, qx = Mx, Jx = "AlertDialog", [Yx, Xx] = B(Jx, [cx]), Zx = cx(), Qx = (e) => {
	let { __scopeAlertDialog: t, ...n } = e;
	return /* @__PURE__ */ C(Bx, {
		...Zx(t),
		...n,
		modal: !0
	});
};
Qx.displayName = Jx;
var $x = "AlertDialogTrigger", eS = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ C(Vx, {
		...Zx(n),
		...r,
		ref: t
	});
});
eS.displayName = $x;
var tS = "AlertDialogPortal", nS = (e) => {
	let { __scopeAlertDialog: t, ...n } = e;
	return /* @__PURE__ */ C(Hx, {
		...Zx(t),
		...n
	});
};
nS.displayName = tS;
var rS = "AlertDialogOverlay", iS = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ C(Ux, {
		...Zx(n),
		...r,
		ref: t
	});
});
iS.displayName = rS;
var aS = "AlertDialogContent", [oS, sS] = Yx(aS), cS = /* @__PURE__ */ se("AlertDialogContent"), lS = e.forwardRef((t, n) => {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = Zx(r), s = e.useRef(null), c = V(n, s), l = e.useRef(null);
	return /* @__PURE__ */ C(Fx, {
		contentName: aS,
		titleName: uS,
		docsSlug: "alert-dialog",
		children: /* @__PURE__ */ C(oS, {
			scope: r,
			cancelRef: l,
			children: /* @__PURE__ */ w(Wx, {
				role: "alertdialog",
				...o,
				...a,
				ref: c,
				onOpenAutoFocus: H(a.onOpenAutoFocus, (e) => {
					e.preventDefault(), l.current?.focus({ preventScroll: !0 });
				}),
				onPointerDownOutside: (e) => e.preventDefault(),
				onInteractOutside: (e) => e.preventDefault(),
				children: [/* @__PURE__ */ C(cS, { children: i }), /* @__PURE__ */ C(vS, { contentRef: s })]
			})
		})
	});
});
lS.displayName = aS;
var uS = "AlertDialogTitle", dS = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ C(Gx, {
		...Zx(n),
		...r,
		ref: t
	});
});
dS.displayName = uS;
var fS = "AlertDialogDescription", pS = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ C(Kx, {
		...Zx(n),
		...r,
		ref: t
	});
});
pS.displayName = fS;
var mS = "AlertDialogAction", hS = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e;
	return /* @__PURE__ */ C(qx, {
		...Zx(n),
		...r,
		ref: t
	});
});
hS.displayName = mS;
var gS = "AlertDialogCancel", _S = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = sS(gS, n), a = Zx(n), o = V(t, i);
	return /* @__PURE__ */ C(qx, {
		...a,
		...r,
		ref: o
	});
});
_S.displayName = gS;
var vS = ({ contentRef: t }) => {
	let n = `\`${aS}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${aS}\` by passing a \`${fS}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${aS}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
	return e.useEffect(() => {
		document.getElementById(t.current?.getAttribute("aria-describedby")) || console.warn(n);
	}, [n, t]), null;
}, yS = Qx, bS = eS, xS = nS, SS = iS, CS = lS, wS = hS, TS = _S, ES = dS, DS = pS;
//#endregion
//#region src/components/AlertDialog/AlertDialog.tsx
function OS({ onCancel: e, onConfirm: t, className: n = "adlg" }) {
	return /* @__PURE__ */ C("div", {
		className: n,
		children: /* @__PURE__ */ w(yS, { children: [/* @__PURE__ */ C(bS, {
			asChild: !0,
			children: /* @__PURE__ */ C("button", {
				className: "s-btn s-btn--danger",
				children: "Delete project…"
			})
		}), /* @__PURE__ */ w(xS, { children: [/* @__PURE__ */ C(SS, { className: "adlg__overlay" }), /* @__PURE__ */ w(CS, {
			className: "adlg__content",
			children: [
				/* @__PURE__ */ C("span", {
					className: "mono adlg__kicker",
					children: "Confirmation required"
				}),
				/* @__PURE__ */ C(ES, {
					className: "adlg__title",
					children: "Delete this project?"
				}),
				/* @__PURE__ */ w(DS, {
					className: "adlg__desc",
					children: [
						"Deleting ",
						/* @__PURE__ */ C("em", { children: "Specimen Library" }),
						" will permanently remove its drafts, notes, and rendered patterns. This action cannot be undone."
					]
				}),
				/* @__PURE__ */ w("div", {
					className: "adlg__row",
					children: [/* @__PURE__ */ C(TS, {
						asChild: !0,
						children: /* @__PURE__ */ C("button", {
							className: "s-btn",
							onClick: e,
							children: "Keep project"
						})
					}), /* @__PURE__ */ C(wS, {
						asChild: !0,
						children: /* @__PURE__ */ C("button", {
							className: "s-btn s-btn--danger",
							onClick: t,
							children: "Yes, delete"
						})
					})]
				})
			]
		})] })] })
	});
}
//#endregion
//#region src/components/Breadcrumb/Breadcrumb.tsx
function kS({ items: e, className: t = "bc", navLabel: n = "Breadcrumb" }) {
	return /* @__PURE__ */ C("div", {
		className: "bc__nav",
		children: /* @__PURE__ */ C(As, {
			"aria-label": n,
			className: t,
			children: e.map((t, n) => /* @__PURE__ */ w(js, {
				id: t.id,
				className: "bc__item",
				children: [t.href ? /* @__PURE__ */ C(Go, {
					href: t.href,
					className: "bc__link",
					children: t.label
				}) : /* @__PURE__ */ C("span", {
					"aria-current": "page",
					className: "bc__current",
					children: t.label
				}), n < e.length - 1 && /* @__PURE__ */ C("span", {
					"aria-hidden": "true",
					className: "bc__sep",
					children: "/"
				})]
			}, t.id))
		})
	});
}
//#endregion
//#region node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function AS(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function jS(e) {
	return AS(e) || Array.isArray(e);
}
function MS() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function NS(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !jS(r) || !jS(i) ? r === i : NS(r, i);
	});
}
function PS(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function FS(e, t) {
	if (e.length !== t.length) return !1;
	let n = PS(e), r = PS(t);
	return n.every((e, t) => {
		let n = r[t];
		return NS(e, n);
	});
}
//#endregion
//#region node_modules/embla-carousel/esm/embla-carousel.esm.js
function IS(e) {
	return typeof e == "number";
}
function LS(e) {
	return typeof e == "string";
}
function RS(e) {
	return typeof e == "boolean";
}
function zS(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function BS(e) {
	return Math.abs(e);
}
function VS(e) {
	return Math.sign(e);
}
function HS(e, t) {
	return BS(e - t);
}
function US(e, t) {
	return e === 0 || t === 0 || BS(e) <= BS(t) ? 0 : BS(HS(BS(e), BS(t)) / e);
}
function WS(e) {
	return Math.round(e * 100) / 100;
}
function GS(e) {
	return XS(e).map(Number);
}
function KS(e) {
	return e[qS(e)];
}
function qS(e) {
	return Math.max(0, e.length - 1);
}
function JS(e, t) {
	return t === qS(e);
}
function YS(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function XS(e) {
	return Object.keys(e);
}
function ZS(e, t) {
	return [e, t].reduce((e, t) => (XS(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = zS(r) && zS(i) ? ZS(r, i) : i;
	}), e), {});
}
function QS(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function $S(e, t) {
	let n = {
		start: r,
		center: i,
		end: a
	};
	function r() {
		return 0;
	}
	function i(e) {
		return a(e) / 2;
	}
	function a(e) {
		return t - e;
	}
	function o(r, i) {
		return LS(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function eC() {
	let e = [];
	function t(t, n, i, a = { passive: !0 }) {
		let o;
		if ("addEventListener" in t) t.addEventListener(n, i, a), o = () => t.removeEventListener(n, i, a);
		else {
			let e = t;
			e.addListener(i), o = () => e.removeListener(i);
		}
		return e.push(o), r;
	}
	function n() {
		e = e.filter((e) => e());
	}
	let r = {
		add: t,
		clear: n
	};
	return r;
}
function tC(e, t, n, r) {
	let i = eC(), a = 1e3 / 60, o = null, s = 0, c = 0;
	function l() {
		i.add(e, "visibilitychange", () => {
			e.hidden && m();
		});
	}
	function u() {
		p(), i.clear();
	}
	function d(e) {
		if (!c) return;
		o || (o = e, n(), n());
		let i = e - o;
		for (o = e, s += i; s >= a;) n(), s -= a;
		r(s / a), c &&= t.requestAnimationFrame(d);
	}
	function f() {
		c ||= t.requestAnimationFrame(d);
	}
	function p() {
		t.cancelAnimationFrame(c), o = null, s = 0, c = 0;
	}
	function m() {
		o = null, s = 0;
	}
	return {
		init: l,
		destroy: u,
		start: f,
		stop: p,
		update: n,
		render: r
	};
}
function nC(e, t) {
	let n = t === "rtl", r = e === "y", i = r ? "y" : "x", a = r ? "x" : "y", o = !r && n ? -1 : 1, s = u(), c = d();
	function l(e) {
		let { height: t, width: n } = e;
		return r ? t : n;
	}
	function u() {
		return r ? "top" : n ? "right" : "left";
	}
	function d() {
		return r ? "bottom" : n ? "left" : "right";
	}
	function f(e) {
		return e * o;
	}
	return {
		scroll: i,
		cross: a,
		startEdge: s,
		endEdge: c,
		measureSize: l,
		direction: f
	};
}
function rC(e = 0, t = 0) {
	let n = BS(e - t);
	function r(t) {
		return t < e;
	}
	function i(e) {
		return e > t;
	}
	function a(e) {
		return r(e) || i(e);
	}
	function o(n) {
		return a(n) ? r(n) ? e : t : n;
	}
	function s(e) {
		return n ? e - n * Math.ceil((e - t) / n) : e;
	}
	return {
		length: n,
		max: t,
		min: e,
		constrain: o,
		reachedAny: a,
		reachedMax: i,
		reachedMin: r,
		removeOffset: s
	};
}
function iC(e, t, n) {
	let { constrain: r } = rC(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? BS((i + e) % i) : r(e);
	}
	function s() {
		return a;
	}
	function c(e) {
		return a = o(e), d;
	}
	function l(e) {
		return u().set(s() + e);
	}
	function u() {
		return iC(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function aC(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = eC(), w = eC(), T = rC(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, D = {
		mouse: 500,
		touch: 600
	}, O = m ? 43 : 25, k = !1, A = 0, j = 0, M = !1, N = !1, P = !1, F = !1;
	function I(e) {
		if (!v) return;
		function n(t) {
			(RS(v) || v(e, t)) && te(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", re).add(r, "contextmenu", re).add(r, "click", V, !0);
	}
	function L() {
		C.clear(), w.clear();
	}
	function R() {
		let e = F ? n : t;
		w.add(e, "touchmove", ne, S).add(e, "touchend", re).add(e, "mousemove", ne, S).add(e, "mouseup", re);
	}
	function z(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function ee() {
		return (m ? D : E)[F ? "mouse" : "touch"];
	}
	function B(e, t) {
		let n = d.add(VS(e) * -1), r = u.byDistance(e, !m).distance;
		return m || BS(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function te(e) {
		let t = QS(e, r);
		F = t, P = m && t && !e.buttons && k, k = HS(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (z(e.target) || (M = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), R(), A = a.readPoint(e), j = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function ne(e) {
		if (!QS(e, r) && e.touches.length >= 2) return re(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = HS(t, A), c = HS(n, j);
		if (!N && !F && (!e.cancelable || (N = o > c, !N))) return re(e);
		let u = a.pointerMove(e);
		o > h && (P = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function re(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * ee(), r = B(b(n), t), i = US(n, r), o = O - 10 * i, s = _ + i / 50;
		N = !1, M = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), F = !1, f.emit("pointerUp");
	}
	function V(e) {
		P &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function ie() {
		return M;
	}
	return {
		init: I,
		destroy: L,
		pointerDown: ie
	};
}
function oC(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (QS(n, t) ? n : n.touches[0])[i];
	}
	function o(e) {
		return n = e, r = e, a(e);
	}
	function s(e) {
		let t = a(e) - a(r), o = i(e) - i(n) > 170;
		return r = e, o && (n = e), t;
	}
	function c(e) {
		if (!n || !r) return 0;
		let t = a(r) - a(n), o = i(e) - i(n), s = i(e) - i(r) > 170, c = t / o;
		return o && !s && BS(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function sC() {
	function e(e) {
		let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
		return {
			top: t,
			right: n + r,
			bottom: t + i,
			left: n,
			width: r,
			height: i
		};
	}
	return { measure: e };
}
function cC(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function lC(e, t, n, r, i, a, o) {
	let s = [e].concat(r), c, l, u = [], d = !1;
	function f(e) {
		return i.measureSize(o.measure(e));
	}
	function p(i) {
		if (!a) return;
		l = f(e), u = r.map(f);
		function o(n) {
			for (let a of n) {
				if (d) return;
				let n = a.target === e, o = r.indexOf(a.target), s = n ? l : u[o];
				if (BS(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(RS(a) || a(i, e)) && o(e);
		}), n.requestAnimationFrame(() => {
			s.forEach((e) => c.observe(e));
		});
	}
	function m() {
		d = !0, c && c.disconnect();
	}
	return {
		init: p,
		destroy: m
	};
}
function uC(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = VS(a), d = u, x;
	}
	function p() {
		return BS(r.get() - t.get()) < .001;
	}
	function m() {
		return c;
	}
	function h() {
		return s;
	}
	function g() {
		return o;
	}
	function _() {
		return y(i);
	}
	function v() {
		return b(a);
	}
	function y(e) {
		return c = e, x;
	}
	function b(e) {
		return l = e, x;
	}
	let x = {
		direction: h,
		duration: m,
		velocity: g,
		seek: f,
		settled: p,
		useBaseFriction: v,
		useBaseDuration: _,
		useFriction: b,
		useDuration: y
	};
	return x;
}
function dC(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = rC(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = BS(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && BS(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
	}
	function d(e) {
		c = !e;
	}
	return {
		shouldConstrain: l,
		constrain: u,
		toggleActive: d
	};
}
function fC(e, t, n, r, i) {
	let a = rC(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return HS(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = KS(o);
		return rC(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = JS(n, t);
			return s ? i : c || l(r, o) ? r : l(i, o) ? i : o;
		}).map((e) => parseFloat(e.toFixed(3)));
	}
	function f() {
		if (t <= e + i) return [a.max];
		if (r === "keepSnaps") return o;
		let { min: n, max: c } = s;
		return o.slice(n, c);
	}
	return {
		snapsContained: c,
		scrollContainLimit: s
	};
}
function pC(e, t, n) {
	let r = t[0];
	return { limit: rC(n ? r - e : KS(t), r) };
}
function mC(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = rC(t.min + i, t.max + i);
	function s(e) {
		return e === 1 ? o(n.get()) : e === -1 ? a(n.get()) : !1;
	}
	function c(t) {
		if (!s(t)) return;
		let n = t * -1 * e;
		r.forEach((e) => e.add(n));
	}
	return { loop: c };
}
function hC(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function gC(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => KS(e)[o] - e[0][a]).map(BS);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -BS(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function _C(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = JS(n, t);
			return r ? YS(KS(n[0]) + 1) : i ? YS(qS(a) - KS(n)[0] + 1, KS(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function vC(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => BS(e) - BS(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => BS(e.diff) - BS(t.diff))[0];
		return {
			index: i,
			distance: r
		};
	}
	function u(t, r) {
		let i = [
			t,
			t + n,
			t - n
		];
		if (!e) return t;
		if (!r) return c(i);
		let a = i.filter((e) => VS(e) === r);
		return a.length ? c(a) : KS(i) - n;
	}
	function d(e, n) {
		return {
			index: e,
			distance: u(t[e] - i.get(), n)
		};
	}
	function f(n, r) {
		let o = i.get() + n, { index: s, distance: c } = l(o), d = !e && a(o);
		return !r || d ? {
			index: s,
			distance: n
		} : {
			index: s,
			distance: n + u(t[s] - c, 0)
		};
	}
	return {
		byDistance: f,
		byIndex: d,
		shortcut: u
	};
}
function yC(e, t, n, r, i, a, o) {
	function s(i) {
		let s = i.distance, c = i.index !== t.get();
		a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(i.index), o.emit("select"));
	}
	function c(e, t) {
		s(i.byDistance(e, t));
	}
	function l(e, n) {
		let r = t.clone().set(e);
		s(i.byIndex(r.get(), n));
	}
	return {
		distance: c,
		index: l
	};
}
function bC(e, t, n, r, i, a, o, s) {
	let c = {
		passive: !0,
		capture: !0
	}, l = 0;
	function u(u) {
		if (!s) return;
		function f(t) {
			if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
			o.emit("slideFocusStart"), e.scrollLeft = 0;
			let a = n.findIndex((e) => e.includes(t));
			IS(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(RS(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function xC(e) {
	let t = e;
	function n() {
		return t;
	}
	function r(e) {
		t = o(e);
	}
	function i(e) {
		t += o(e);
	}
	function a(e) {
		t -= o(e);
	}
	function o(e) {
		return IS(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function SC(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = WS(e.direction(t));
		o !== i && (r.transform = n(o), i = o);
	}
	function l(e) {
		a = !e;
	}
	function u() {
		a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
	}
	return {
		clear: u,
		to: c,
		toggleActive: l
	};
}
function CC(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = GS(i), d = GS(i).reverse(), f = _().concat(v());
	function p(e, t) {
		return e.reduce((e, t) => e - i[t], t);
	}
	function m(e, t) {
		return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, []);
	}
	function h(e) {
		return a.map((n, i) => ({
			start: n - r[i] + l + e,
			end: n + t - l + e
		}));
	}
	function g(t, r, i) {
		let a = h(r);
		return t.map((t) => {
			let r = i ? 0 : -n, o = i ? n : 0, l = i ? "end" : "start", u = a[t][l];
			return {
				index: t,
				loopPoint: u,
				slideLocation: xC(-1),
				translate: SC(e, c[t]),
				target: () => s.get() > u ? r : o
			};
		});
	}
	function _() {
		let e = o[0];
		return g(m(d, e), n, !1);
	}
	function v() {
		return g(m(u, t - o[0] - 1), -n, !0);
	}
	function y() {
		return f.every(({ index: e }) => p(u.filter((t) => t !== e), t) <= .1);
	}
	function b() {
		f.forEach((e) => {
			let { target: t, translate: n, slideLocation: r } = e, i = t();
			i !== r.get() && (n.to(i), r.set(i));
		});
	}
	function x() {
		f.forEach((e) => e.translate.clear());
	}
	return {
		canLoop: y,
		clear: x,
		loop: b,
		loopPoints: f
	};
}
function wC(e, t, n) {
	let r, i = !1;
	function a(a) {
		if (!n) return;
		function o(e) {
			for (let n of e) if (n.type === "childList") {
				a.reInit(), t.emit("slidesChanged");
				break;
			}
		}
		r = new MutationObserver((e) => {
			i || (RS(n) || n(a, e)) && o(e);
		}), r.observe(e, { childList: !0 });
	}
	function o() {
		r && r.disconnect(), i = !0;
	}
	return {
		init: a,
		destroy: o
	};
}
function TC(e, t, n, r) {
	let i = {}, a = null, o = null, s, c = !1;
	function l() {
		s = new IntersectionObserver((e) => {
			c || (e.forEach((e) => {
				let n = t.indexOf(e.target);
				i[n] = e;
			}), a = null, o = null, n.emit("slidesInView"));
		}, {
			root: e.parentElement,
			threshold: r
		}), t.forEach((e) => s.observe(e));
	}
	function u() {
		s && s.disconnect(), c = !0;
	}
	function d(e) {
		return XS(i).reduce((t, n) => {
			let r = parseInt(n), { isIntersecting: a } = i[r];
			return (e && a || !e && !a) && t.push(r), t;
		}, []);
	}
	function f(e = !0) {
		if (e && a) return a;
		if (!e && o) return o;
		let t = d(e);
		return e && (a = t), e || (o = t), t;
	}
	return {
		init: l,
		destroy: u,
		get: f
	};
}
function EC(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return BS(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(KS(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = JS(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(BS);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function DC(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = IS(n);
	function p(e, t) {
		return GS(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? GS(e).reduce((n, f, p) => {
			let m = KS(n) || 0, h = m === 0, g = f === qS(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = BS(v - (!r && g ? d(s) : 0) - (_ + y));
			return p && b > t + c && n.push(f), g && n.push(e.length), n;
		}, []).map((t, n, r) => {
			let i = Math.max(r[n - 1] || 0);
			return e.slice(i, t);
		}) : [];
	}
	function h(e) {
		return f ? p(e, n) : m(e);
	}
	return { groupSlides: h };
}
function OC(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = sC(), w = C.measure(t), T = n.map(C.measure), E = nC(c, l), D = E.measureSize(w), O = cC(D), k = $S(s, D), A = !d && !!v, { slideSizes: j, slideSizesWithGaps: M, startGap: N, endGap: P } = EC(E, w, T, n, d || !!v, i), F = DC(E, D, g, d, w, T, N, P, 2), { snaps: I, snapsAligned: L } = gC(E, k, w, T, F), R = -KS(I) + KS(M), { snapsContained: z, scrollContainLimit: ee } = fC(D, R, L, v, 2), B = A ? z : L, { limit: te } = pC(R, B, d), ne = iC(qS(B), u, d), re = ne.clone(), V = GS(n), ie = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, ae = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, oe = tC(r, i, () => ie(ye), (e) => ae(ye, e)), se = .68, ce = B[ne.get()], le = xC(ce), ue = xC(ce), de = xC(ce), H = xC(ce), fe = uC(le, de, ue, H, f, se), pe = vC(d, B, R, te, H), me = yC(oe, ne, re, fe, pe, H, o), he = hC(te), ge = eC(), U = TC(t, n, o, h), { slideRegistry: _e } = _C(A, v, B, ee, F, V), ve = bC(e, n, _e, me, fe, ge, o, S), ye = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: oe,
		axis: E,
		dragHandler: aC(E, e, r, i, H, oC(E, i), le, oe, me, fe, pe, ne, o, O, p, m, _, se, x),
		eventStore: ge,
		percentOfView: O,
		index: ne,
		indexPrevious: re,
		limit: te,
		location: le,
		offsetLocation: de,
		previousLocation: ue,
		options: a,
		resizeHandler: lC(t, o, i, n, E, y, C),
		scrollBody: fe,
		scrollBounds: dC(te, de, H, fe, O),
		scrollLooper: mC(R, te, de, [
			le,
			de,
			ue,
			H
		]),
		scrollProgress: he,
		scrollSnapList: B.map(he.get),
		scrollSnaps: B,
		scrollTarget: pe,
		scrollTo: me,
		slideLooper: CC(E, D, R, j, M, I, B, de, n),
		slideFocus: ve,
		slidesHandler: wC(t, o, b),
		slidesInView: U,
		slideIndexes: V,
		slideRegistry: _e,
		slidesToScroll: F,
		target: H,
		translate: SC(E, t)
	};
	return ye;
}
function kC() {
	let e = {}, t;
	function n(e) {
		t = e;
	}
	function r(t) {
		return e[t] || [];
	}
	function i(e) {
		return r(e).forEach((n) => n(t, e)), c;
	}
	function a(t, n) {
		return e[t] = r(t).concat([n]), c;
	}
	function o(t, n) {
		return e[t] = r(t).filter((e) => e !== n), c;
	}
	function s() {
		e = {};
	}
	let c = {
		init: n,
		emit: i,
		off: o,
		on: a,
		clear: s
	};
	return c;
}
var AC = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: !1,
	dragThreshold: 10,
	loop: !1,
	skipSnaps: !1,
	duration: 25,
	startIndex: 0,
	active: !0,
	watchDrag: !0,
	watchResize: !0,
	watchSlides: !0,
	watchFocus: !0
};
function jC(e) {
	function t(e, t) {
		return ZS(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, XS(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => XS(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function MC(e) {
	let t = [];
	function n(n, r) {
		return t = r.filter(({ options: t }) => e.optionsAtMedia(t).active !== !1), t.forEach((t) => t.init(n, e)), r.reduce((e, t) => Object.assign(e, { [t.name]: t }), {});
	}
	function r() {
		t = t.filter((e) => e.destroy());
	}
	return {
		init: n,
		destroy: r
	};
}
function NC(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = jC(i), o = MC(a), s = eC(), c = kC(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = D, g = !1, _, v = l(AC, NC.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (LS(t) ? e.querySelector(t) : t) || e.children[0];
		let r = LS(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = OC(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function E(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", D)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(ie), _.eventHandler.init(ie), _.resizeHandler.init(ie), _.slidesHandler.init(ie), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(ie), x = o.init(ie, b)));
	}
	function D(e, t) {
		let n = L();
		O(), E(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function O() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function k() {
		g || (g = !0, s.clear(), O(), c.emit("destroy"), c.clear());
	}
	function A(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function j(e) {
		A(_.index.add(1).get(), e, -1);
	}
	function M(e) {
		A(_.index.add(-1).get(), e, 1);
	}
	function N() {
		return _.index.add(1).get() !== L();
	}
	function P() {
		return _.index.add(-1).get() !== L();
	}
	function F() {
		return _.scrollSnapList;
	}
	function I() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function L() {
		return _.index.get();
	}
	function R() {
		return _.indexPrevious.get();
	}
	function z() {
		return _.slidesInView.get();
	}
	function ee() {
		return _.slidesInView.get(!1);
	}
	function B() {
		return x;
	}
	function te() {
		return _;
	}
	function ne() {
		return e;
	}
	function re() {
		return S;
	}
	function V() {
		return C;
	}
	let ie = {
		canScrollNext: N,
		canScrollPrev: P,
		containerNode: re,
		internalEngine: te,
		destroy: k,
		off: p,
		on: f,
		emit: m,
		plugins: B,
		previousScrollSnap: R,
		reInit: h,
		rootNode: ne,
		scrollNext: j,
		scrollPrev: M,
		scrollProgress: I,
		scrollSnapList: F,
		scrollTo: A,
		selectedScrollSnap: L,
		slideNodes: V,
		slidesInView: z,
		slidesNotInView: ee
	};
	return E(t, n), setTimeout(() => c.emit("init"), 0), ie;
}
NC.globalOptions = void 0;
//#endregion
//#region node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function PC(e = {}, t = []) {
	let n = v(e), r = v(t), [i, a] = y(), [o, s] = y(), c = u(() => {
		i && i.reInit(n.current, r.current);
	}, [i]);
	return f(() => {
		NS(n.current, e) || (n.current = e, c());
	}, [e, c]), f(() => {
		FS(r.current, t) || (r.current = t, c());
	}, [t, c]), f(() => {
		if (MS() && o) {
			NC.globalOptions = PC.globalOptions;
			let e = NC(o, n.current, r.current);
			return a(e), () => e.destroy();
		} else a(void 0);
	}, [o, a]), [s, i];
}
PC.globalOptions = void 0;
//#endregion
//#region src/components/Carousel/Carousel.tsx
function FC({ slides: e, label: t = "Featured typefaces", autoRotateMs: n = 4500, className: r = "car" }) {
	let [i, a] = PC({
		loop: !0,
		align: "center"
	}), [o, s] = y(0), [c, l] = y(!1), d = u(() => a?.scrollPrev(), [a]), p = u(() => a?.scrollNext(), [a]), m = u((e) => a?.scrollTo(e), [a]);
	return f(() => {
		if (!a) return;
		let e = () => s(a.selectedScrollSnap());
		return a.on("select", e), e(), () => {
			a.off("select", e);
		};
	}, [a]), f(() => {
		if (!a || c) return;
		let e = window.setInterval(() => a.scrollNext(), n);
		return () => window.clearInterval(e);
	}, [
		a,
		c,
		n
	]), /* @__PURE__ */ w("section", {
		className: r,
		"aria-roledescription": "carousel",
		"aria-label": t,
		"aria-live": c ? "polite" : "off",
		children: [
			/* @__PURE__ */ C("div", {
				className: "car__viewport",
				ref: i,
				children: /* @__PURE__ */ C("div", {
					className: "car__track",
					children: e.map((t, n) => /* @__PURE__ */ w("article", {
						id: `slide-${n}`,
						className: "car__slide",
						"aria-roledescription": "slide",
						"aria-label": `${n + 1} of ${e.length}: ${t.t}`,
						children: [
							/* @__PURE__ */ C("span", {
								className: "mono car__num",
								children: t.n
							}),
							/* @__PURE__ */ C("h4", {
								className: "car__title",
								children: t.t
							}),
							/* @__PURE__ */ w("p", {
								className: "car__quote",
								children: [
									"“",
									t.q,
									"”"
								]
							})
						]
					}, n))
				})
			}),
			/* @__PURE__ */ w("div", {
				className: "car__controls",
				children: [
					/* @__PURE__ */ C("button", {
						type: "button",
						className: "s-btn",
						onClick: d,
						"aria-label": "Previous slide",
						children: "‹ Prev"
					}),
					/* @__PURE__ */ C("button", {
						type: "button",
						className: "s-btn",
						onClick: () => l((e) => !e),
						"aria-pressed": c,
						children: c ? "Resume rotation" : "Pause rotation"
					}),
					/* @__PURE__ */ C("button", {
						type: "button",
						className: "s-btn",
						onClick: p,
						"aria-label": "Next slide",
						children: "Next ›"
					})
				]
			}),
			/* @__PURE__ */ C("ol", {
				className: "car__dots",
				role: "tablist",
				"aria-label": "Choose slide",
				children: e.map((e, t) => /* @__PURE__ */ C("li", { children: /* @__PURE__ */ C("button", {
					type: "button",
					role: "tab",
					"aria-selected": t === o,
					"aria-controls": `slide-${t}`,
					className: "car__dot",
					"data-active": t === o,
					onClick: () => m(t),
					children: /* @__PURE__ */ w("span", {
						className: "sr",
						children: [
							"Slide ",
							t + 1,
							": ",
							e.t
						]
					})
				}) }, t))
			})
		]
	});
}
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
function IC(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
//#endregion
//#region node_modules/@radix-ui/react-use-size/dist/index.mjs
function LC(t) {
	let [n, r] = e.useState(void 0);
	return fe(() => {
		if (t) {
			r({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let n = e[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = t.offsetWidth, a = t.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
		} else r(void 0);
	}, [t]), n;
}
//#endregion
//#region node_modules/@radix-ui/react-checkbox/dist/index.mjs
var RC = "Checkbox", [zC, BC] = B(RC), [VC, HC] = zC(RC);
function UC(t) {
	let { __scopeCheckbox: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = me({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: RC
	}), [h, g] = e.useState(null), [_, v] = e.useState(null), y = e.useRef(!1), b = h ? !!s || !!h.closest("form") : !0, x = {
		checked: p,
		disabled: o,
		setChecked: m,
		control: h,
		setControl: g,
		name: c,
		form: s,
		value: d,
		hasConsumerStoppedPropagationRef: y,
		required: u,
		defaultChecked: QC(a) ? !1 : a,
		isFormControl: b,
		bubbleInput: _,
		setBubbleInput: v
	};
	return /* @__PURE__ */ C(VC, {
		scope: n,
		...x,
		children: ZC(f) ? f(x) : i
	});
}
var WC = "CheckboxTrigger", GC = e.forwardRef(({ __scopeCheckbox: t, onKeyDown: n, onClick: r, ...i }, a) => {
	let { control: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, isFormControl: m, bubbleInput: h } = HC(WC, t), g = V(a, d), _ = e.useRef(l);
	return e.useEffect(() => {
		let e = o?.form;
		if (e) {
			let t = () => f(_.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [o, f]), /* @__PURE__ */ C(U.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": QC(l) ? "mixed" : l,
		"aria-required": u,
		"data-state": $C(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...i,
		ref: g,
		onKeyDown: H(n, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: H(r, (e) => {
			f((e) => QC(e) ? !0 : !e), h && m && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
});
GC.displayName = WC;
var KC = e.forwardRef((e, t) => {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ C(UC, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C(GC, {
			...d,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ C(XC, { __scopeCheckbox: n })] })
	});
});
KC.displayName = RC;
var qC = "CheckboxIndicator", JC = e.forwardRef((e, t) => {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = HC(qC, n);
	return /* @__PURE__ */ C(ye, {
		present: r || QC(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ C(U.span, {
			"data-state": $C(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
});
JC.displayName = qC;
var YC = "CheckboxBubbleInput", XC = e.forwardRef(({ __scopeCheckbox: t, ...n }, r) => {
	let { control: i, hasConsumerStoppedPropagationRef: a, checked: o, defaultChecked: s, required: c, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: m } = HC(YC, t), h = V(r, m), g = IC(o), _ = LC(i);
	e.useEffect(() => {
		let e = p;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !a.current;
		if (g !== o && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = QC(o), n.call(e, QC(o) ? !1 : o), e.dispatchEvent(t);
		}
	}, [
		p,
		g,
		o,
		a
	]);
	let v = e.useRef(QC(o) ? !1 : o);
	return /* @__PURE__ */ C(U.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s ?? v.current,
		required: c,
		disabled: l,
		name: u,
		value: d,
		form: f,
		...n,
		tabIndex: -1,
		ref: h,
		style: {
			...n.style,
			..._,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
XC.displayName = YC;
function ZC(e) {
	return typeof e == "function";
}
function QC(e) {
	return e === "indeterminate";
}
function $C(e) {
	return QC(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region src/components/Checkbox/Checkbox.tsx
function ew({ items: e, legend: t = "Perceivable — checklist", defaultChecked: n, className: r = "cb" }) {
	let [i, a] = y(n ?? Object.fromEntries(e.map((e) => [e.id, !1]))), o = g(() => e.every((e) => i[e.id]) ? !0 : e.some((e) => i[e.id]) ? "indeterminate" : !1, [i, e]);
	function s(t) {
		let n = t === !0, r = {};
		e.forEach((e) => r[e.id] = n), a(r);
	}
	return /* @__PURE__ */ w("fieldset", {
		className: r,
		children: [
			/* @__PURE__ */ C("legend", {
				className: "mono",
				children: t
			}),
			/* @__PURE__ */ w("label", {
				className: "cb__row cb__row--parent",
				children: [/* @__PURE__ */ C(KC, {
					className: "cb__box cb__box--parent",
					checked: o,
					onCheckedChange: s,
					children: /* @__PURE__ */ C(JC, {
						className: "cb__ind",
						forceMount: !0,
						children: o === "indeterminate" ? "–" : o ? "✓" : ""
					})
				}), /* @__PURE__ */ w("span", { children: [
					/* @__PURE__ */ C("strong", { children: "All criteria" }),
					" ",
					/* @__PURE__ */ C("span", {
						className: "mono cb__state",
						children: o === "indeterminate" ? "mixed" : o ? "checked" : "unchecked"
					})
				] })]
			}),
			/* @__PURE__ */ C("ul", {
				className: "cb__list",
				children: e.map((e) => /* @__PURE__ */ C("li", { children: /* @__PURE__ */ w("label", {
					className: "cb__row",
					children: [/* @__PURE__ */ C(KC, {
						className: "cb__box",
						checked: i[e.id],
						onCheckedChange: (t) => a((n) => ({
							...n,
							[e.id]: t === !0
						})),
						children: /* @__PURE__ */ C(JC, {
							className: "cb__ind",
							children: "✓"
						})
					}), /* @__PURE__ */ C("span", { children: e.label })]
				}) }, e.id))
			})
		]
	});
}
//#endregion
//#region src/components/Combobox/Combobox.tsx
function tw({ options: e, label: t = "Body face", placeholder: n = "Search a typeface…", defaultSelectedKey: r = null, onSelectionChange: i, className: a = "cmb" }) {
	let [o, s] = y(r);
	function c(e) {
		let t = e ?? null;
		s(t), i?.(t);
	}
	return /* @__PURE__ */ C("div", {
		className: a,
		children: /* @__PURE__ */ w(Yh, {
			className: "cmb__root",
			menuTrigger: "focus",
			selectedKey: o,
			onSelectionChange: c,
			children: [
				/* @__PURE__ */ C(Ns, {
					className: "mono cmb__label",
					children: t
				}),
				/* @__PURE__ */ w("div", {
					className: "cmb__field",
					children: [/* @__PURE__ */ C(tl, {
						className: "cmb__input",
						placeholder: n
					}), /* @__PURE__ */ C(pc, {
						className: "cmb__btn",
						"aria-label": "Show suggestions",
						children: "▾"
					})]
				}),
				/* @__PURE__ */ C(gm, {
					className: "cmb__pop",
					offset: 4,
					children: /* @__PURE__ */ C(gf, {
						className: "cmb__list",
						children: e.map((e) => /* @__PURE__ */ w(bf, {
							id: e.id,
							textValue: e.name,
							className: "cmb__opt",
							children: [/* @__PURE__ */ C("span", {
								className: "cmb__optName",
								children: e.name
							}), /* @__PURE__ */ C("span", {
								className: "cmb__optNote",
								children: e.note
							})]
						}, e.id))
					})
				})
			]
		})
	});
}
function nw(e, t) {
	return e.find((e) => e.id === t)?.name ?? "(none)";
}
//#endregion
//#region src/components/Dialog/Dialog.tsx
function rw({ triggerLabel: e = "Rename specimen…", onSave: t, className: n = "dlg" }) {
	let [r, i] = y(""), [a, o] = y(!1);
	function s(e) {
		e.preventDefault(), t?.(r || "(empty)"), o(!1);
	}
	return /* @__PURE__ */ C("div", {
		className: n,
		children: /* @__PURE__ */ w(Bx, {
			open: a,
			onOpenChange: o,
			children: [/* @__PURE__ */ C(Vx, {
				asChild: !0,
				children: /* @__PURE__ */ C("button", {
					className: "s-btn s-btn--primary",
					children: e
				})
			}), /* @__PURE__ */ w(Hx, { children: [/* @__PURE__ */ C(Ux, { className: "dlg__overlay" }), /* @__PURE__ */ w(Wx, {
				className: "dlg__content",
				children: [
					/* @__PURE__ */ C("span", {
						className: "mono dlg__kicker",
						children: "Edit metadata"
					}),
					/* @__PURE__ */ C(Gx, {
						className: "dlg__title",
						children: "Rename specimen"
					}),
					/* @__PURE__ */ C(Kx, {
						className: "dlg__desc",
						children: "Give this specimen a short, distinctive name. It will appear in the sidebar and in the printed colophon."
					}),
					/* @__PURE__ */ w("form", {
						onSubmit: s,
						className: "dlg__form",
						children: [/* @__PURE__ */ w("label", {
							className: "s-field",
							children: [/* @__PURE__ */ C("span", { children: "Display name" }), /* @__PURE__ */ C("input", {
								autoFocus: !0,
								className: "s-input",
								value: r,
								onChange: (e) => i(e.target.value),
								placeholder: "e.g. Trifold Accordion"
							})]
						}), /* @__PURE__ */ w("div", {
							className: "dlg__row",
							children: [/* @__PURE__ */ C(qx, {
								asChild: !0,
								children: /* @__PURE__ */ C("button", {
									type: "button",
									className: "s-btn",
									children: "Cancel"
								})
							}), /* @__PURE__ */ C("button", {
								type: "submit",
								className: "s-btn s-btn--primary",
								children: "Save"
							})]
						})]
					})
				]
			})] })]
		})
	});
}
//#endregion
//#region src/components/Disclosure/Disclosure.tsx
function iw({ label: e, children: t, defaultOpen: n = !1, className: r = "dsc" }) {
	let [i, a] = y(n);
	return /* @__PURE__ */ w(Re, {
		open: i,
		onOpenChange: a,
		className: r,
		children: [/* @__PURE__ */ C(ze, {
			asChild: !0,
			children: /* @__PURE__ */ w("button", {
				className: "dsc__trigger",
				children: [/* @__PURE__ */ C("span", {
					className: "dsc__chevron",
					"aria-hidden": "true",
					children: i ? "▾" : "▸"
				}), /* @__PURE__ */ C("span", {
					className: "dsc__label",
					children: e
				})]
			})
		}), /* @__PURE__ */ C(Be, {
			className: "dsc__content",
			children: /* @__PURE__ */ C("div", {
				className: "dsc__panel",
				children: t
			})
		})]
	});
}
//#endregion
//#region src/components/Feed/Feed.tsx
var aw = [
	"On the optical sizes of Fraunces",
	"Notes on warm paper",
	"Why one accent colour is enough",
	"Setting the baseline grid at 88 px",
	"A defence of italic display",
	"Mono labels as visual rhythm",
	"Specimen sheets, then and now",
	"The case against three accents",
	"Letterspacing as breath",
	"Drafting a specimen colophon",
	"Caution orange, a personal history",
	"On thinking with the keyboard"
];
function ow(e, t = aw) {
	return {
		id: e,
		title: t[e % t.length],
		meta: `№${String(e + 1).padStart(3, "0")} · 4 min read · Studio Notes`,
		body: "We keep returning to the same handful of moves: a deep ink set on warm paper, hairline rules organising the page, a single signal colour interrupting the brown-and-cream calm. The longer we work in this register the more we trust that restraint is generative rather than limiting."
	};
}
function sw({ initialCount: e = 4, batchSize: t = 3, label: n = "Studio Notes", className: r = "feed" }) {
	let [i, a] = y(() => Array.from({ length: e }, (e, t) => ow(t))), [o, s] = y(!1), c = v(null);
	function l() {
		o || (s(!0), window.setTimeout(() => {
			a((e) => [...e, ...Array.from({ length: t }, (t, n) => ow(e.length + n))]), s(!1);
		}, 350));
	}
	f(() => {
		let e = c.current;
		if (!e) return;
		let t = new IntersectionObserver((e) => {
			e.some((e) => e.isIntersecting) && l();
		}, { rootMargin: "240px" });
		return t.observe(e), () => t.disconnect();
	}, []);
	let u = g(() => i.length, [i]);
	return /* @__PURE__ */ w("section", {
		className: r,
		role: "feed",
		"aria-busy": o,
		"aria-label": n,
		tabIndex: 0,
		children: [
			i.map((e) => /* @__PURE__ */ w("article", {
				className: "feed__article",
				"aria-posinset": e.id + 1,
				"aria-setsize": -1,
				tabIndex: 0,
				children: [/* @__PURE__ */ w("header", { children: [/* @__PURE__ */ C("p", {
					className: "mono feed__meta",
					children: e.meta
				}), /* @__PURE__ */ C("h4", {
					className: "feed__title",
					children: e.title
				})] }), /* @__PURE__ */ C("p", {
					className: "feed__body",
					children: e.body
				})]
			}, e.id)),
			/* @__PURE__ */ C("div", {
				ref: c,
				className: "feed__sentinel",
				"aria-live": "polite",
				children: o ? "Loading more…" : `Showing ${u} articles · scroll for more`
			}),
			/* @__PURE__ */ C("button", {
				type: "button",
				className: "s-btn s-btn--ghost feed__more",
				onClick: l,
				children: "Load more manually"
			})
		]
	});
}
//#endregion
//#region node_modules/@tanstack/table-core/build/lib/index.mjs
function cw() {
	return {
		accessor: (e, t) => typeof e == "function" ? {
			...t,
			accessorFn: e
		} : {
			...t,
			accessorKey: e
		},
		display: (e) => e,
		group: (e) => e
	};
}
function lw(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function uw(e, t) {
	return (n) => {
		t.setState((t) => ({
			...t,
			[e]: lw(n, t[e])
		}));
	};
}
function dw(e) {
	return e instanceof Function;
}
function fw(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "number");
}
function pw(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i != null && i.length && r(i);
		});
	};
	return r(e), n;
}
function X(e, t, n) {
	let r = [], i;
	return (a) => {
		let o;
		n.key && n.debug && (o = Date.now());
		let s = e(a);
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug && (c = Date.now()), i = t(...s), n == null || n.onChange == null || n.onChange(i), n.key && n.debug && n != null && n.debug()) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return i;
	};
}
function Z(e, t, n, r) {
	return {
		debug: () => e?.debugAll ?? e[t],
		key: process.env.NODE_ENV === "development" && n,
		onChange: r
	};
}
function mw(e, t, n, r) {
	let i = {
		id: `${t.id}_${n.id}`,
		row: t,
		column: n,
		getValue: () => t.getValue(r),
		renderValue: () => i.getValue() ?? e.options.renderFallbackValue,
		getContext: X(() => [
			e,
			n,
			t,
			i
		], (e, t, n, r) => ({
			table: e,
			column: t,
			row: n,
			cell: r,
			getValue: r.getValue,
			renderValue: r.renderValue
		}), Z(e.options, "debugCells", "cell.getContext"))
	};
	return e._features.forEach((r) => {
		r.createCell == null || r.createCell(i, n, t, e);
	}, {}), i;
}
function hw(e, t, n, r) {
	let i = {
		...e._getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = i.id ?? (a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) ?? (typeof i.header == "string" ? i.header : void 0), s;
	if (i.accessorFn ? s = i.accessorFn : a && (s = a.includes(".") ? (e) => {
		let t = e;
		for (let e of a.split(".")) t = t?.[e], process.env.NODE_ENV !== "production" && t === void 0 && console.warn(`"${e}" in deeply nested key "${a}" returned undefined.`);
		return t;
	} : (e) => e[i.accessorKey]), !o) throw process.env.NODE_ENV === "production" ? Error() : Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header");
	let c = {
		id: `${String(o)}`,
		accessorFn: s,
		parent: r,
		depth: n,
		columnDef: i,
		columns: [],
		getFlatColumns: X(() => [!0], () => [c, ...c.columns?.flatMap((e) => e.getFlatColumns())], Z(e.options, "debugColumns", "column.getFlatColumns")),
		getLeafColumns: X(() => [e._getOrderColumnsFn()], (e) => {
			var t;
			return (t = c.columns) != null && t.length ? e(c.columns.flatMap((e) => e.getLeafColumns())) : [c];
		}, Z(e.options, "debugColumns", "column.getLeafColumns"))
	};
	for (let t of e._features) t.createColumn == null || t.createColumn(c, e);
	return c;
}
var gw = "debugHeaders";
function _w(e, t, n) {
	let r = {
		id: n.id ?? t.id,
		column: t,
		index: n.index,
		isPlaceholder: !!n.isPlaceholder,
		placeholderId: n.placeholderId,
		depth: n.depth,
		subHeaders: [],
		colSpan: 0,
		rowSpan: 0,
		headerGroup: null,
		getLeafHeaders: () => {
			let e = [], t = (n) => {
				n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n);
			};
			return t(r), e;
		},
		getContext: () => ({
			table: e,
			header: r,
			column: t
		})
	};
	return e._features.forEach((t) => {
		t.createHeader == null || t.createHeader(r, e);
	}), r;
}
var vw = { createTable: (e) => {
	e.getHeaderGroups = X(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => {
		let a = r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], o = i?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], s = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id)));
		return yw(t, [
			...a,
			...s,
			...o
		], e);
	}, Z(e.options, gw, "getHeaderGroups")), e.getCenterHeaderGroups = X(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => (n = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id))), yw(t, n, e, "center")), Z(e.options, gw, "getCenterHeaderGroups")), e.getLeftHeaderGroups = X(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left
	], (t, n, r) => yw(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "left"), Z(e.options, gw, "getLeftHeaderGroups")), e.getRightHeaderGroups = X(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.right
	], (t, n, r) => yw(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "right"), Z(e.options, gw, "getRightHeaderGroups")), e.getFooterGroups = X(() => [e.getHeaderGroups()], (e) => [...e].reverse(), Z(e.options, gw, "getFooterGroups")), e.getLeftFooterGroups = X(() => [e.getLeftHeaderGroups()], (e) => [...e].reverse(), Z(e.options, gw, "getLeftFooterGroups")), e.getCenterFooterGroups = X(() => [e.getCenterHeaderGroups()], (e) => [...e].reverse(), Z(e.options, gw, "getCenterFooterGroups")), e.getRightFooterGroups = X(() => [e.getRightHeaderGroups()], (e) => [...e].reverse(), Z(e.options, gw, "getRightFooterGroups")), e.getFlatHeaders = X(() => [e.getHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Z(e.options, gw, "getFlatHeaders")), e.getLeftFlatHeaders = X(() => [e.getLeftHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Z(e.options, gw, "getLeftFlatHeaders")), e.getCenterFlatHeaders = X(() => [e.getCenterHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Z(e.options, gw, "getCenterFlatHeaders")), e.getRightFlatHeaders = X(() => [e.getRightHeaderGroups()], (e) => e.map((e) => e.headers).flat(), Z(e.options, gw, "getRightFlatHeaders")), e.getCenterLeafHeaders = X(() => [e.getCenterFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Z(e.options, gw, "getCenterLeafHeaders")), e.getLeftLeafHeaders = X(() => [e.getLeftFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Z(e.options, gw, "getLeftLeafHeaders")), e.getRightLeafHeaders = X(() => [e.getRightFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), Z(e.options, gw, "getRightLeafHeaders")), e.getLeafHeaders = X(() => [
		e.getLeftHeaderGroups(),
		e.getCenterHeaderGroups(),
		e.getRightHeaderGroups()
	], (e, t, n) => [
		...e[0]?.headers ?? [],
		...t[0]?.headers ?? [],
		...n[0]?.headers ?? []
	].map((e) => e.getLeafHeaders()).flat(), Z(e.options, gw, "getLeafHeaders"));
} };
function yw(e, t, n, r) {
	let i = 0, a = function(e, t) {
		t === void 0 && (t = 1), i = Math.max(i, t), e.filter((e) => e.getIsVisible()).forEach((e) => {
			var n;
			(n = e.columns) != null && n.length && a(e.columns, t + 1);
		}, 0);
	};
	a(e);
	let o = [], s = (e, t) => {
		let i = {
			depth: t,
			id: [r, `${t}`].filter(Boolean).join("_"),
			headers: []
		}, a = [];
		e.forEach((e) => {
			let o = [...a].reverse()[0], s = e.column.depth === i.depth, c, l = !1;
			if (s && e.column.parent ? c = e.column.parent : (c = e.column, l = !0), o && o?.column === c) o.subHeaders.push(e);
			else {
				let i = _w(n, c, {
					id: [
						r,
						t,
						c.id,
						e?.id
					].filter(Boolean).join("_"),
					isPlaceholder: l,
					placeholderId: l ? `${a.filter((e) => e.column === c).length}` : void 0,
					depth: t,
					index: a.length
				});
				i.subHeaders.push(e), a.push(i);
			}
			i.headers.push(e), e.headerGroup = i;
		}), o.push(i), t > 0 && s(a, t - 1);
	};
	s(t.map((e, t) => _w(n, e, {
		depth: i,
		index: t
	})), i - 1), o.reverse();
	let c = (e) => e.filter((e) => e.column.getIsVisible()).map((e) => {
		let t = 0, n = 0, r = [0];
		e.subHeaders && e.subHeaders.length ? (r = [], c(e.subHeaders).forEach((e) => {
			let { colSpan: n, rowSpan: i } = e;
			t += n, r.push(i);
		})) : t = 1;
		let i = Math.min(...r);
		return n += i, e.colSpan = t, e.rowSpan = n, {
			colSpan: t,
			rowSpan: n
		};
	});
	return c(o[0]?.headers ?? []), o;
}
var bw = (e, t, n, r, i, a, o) => {
	let s = {
		id: t,
		index: r,
		original: n,
		depth: i,
		parentId: o,
		_valuesCache: {},
		_uniqueValuesCache: {},
		getValue: (t) => {
			if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return s._valuesCache[t] = n.accessorFn(s.original, r), s._valuesCache[t];
		},
		getUniqueValues: (t) => {
			if (s._uniqueValuesCache.hasOwnProperty(t)) return s._uniqueValuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return n.columnDef.getUniqueValues ? (s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[t]) : (s._uniqueValuesCache[t] = [s.getValue(t)], s._uniqueValuesCache[t]);
		},
		renderValue: (t) => s.getValue(t) ?? e.options.renderFallbackValue,
		subRows: a ?? [],
		getLeafRows: () => pw(s.subRows, (e) => e.subRows),
		getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
		getParentRows: () => {
			let e = [], t = s;
			for (;;) {
				let n = t.getParentRow();
				if (!n) break;
				e.push(n), t = n;
			}
			return e.reverse();
		},
		getAllCells: X(() => [e.getAllLeafColumns()], (t) => t.map((t) => mw(e, s, t, t.id)), Z(e.options, "debugRows", "getAllCells")),
		_getAllCellsByColumnId: X(() => [s.getAllCells()], (e) => e.reduce((e, t) => (e[t.column.id] = t, e), {}), Z(e.options, "debugRows", "getAllCellsByColumnId"))
	};
	for (let t = 0; t < e._features.length; t++) {
		let n = e._features[t];
		n == null || n.createRow == null || n.createRow(s, e);
	}
	return s;
}, xw = { createColumn: (e, t) => {
	e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
		if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
	};
} }, Sw = (e, t, n) => {
	var r, i;
	let a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
	return !!(!((i = e.getValue(t)) == null || (i = i.toString()) == null || (i = i.toLowerCase()) == null) && i.includes(a));
};
Sw.autoRemove = (e) => Mw(e);
var Cw = (e, t, n) => {
	var r;
	return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Cw.autoRemove = (e) => Mw(e);
var ww = (e, t, n) => {
	var r;
	return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === n?.toLowerCase();
};
ww.autoRemove = (e) => Mw(e);
var Tw = (e, t, n) => e.getValue(t)?.includes(n);
Tw.autoRemove = (e) => Mw(e);
var Ew = (e, t, n) => !n.some((n) => {
	var r;
	return !((r = e.getValue(t)) != null && r.includes(n));
});
Ew.autoRemove = (e) => Mw(e) || !(e != null && e.length);
var Dw = (e, t, n) => n.some((n) => e.getValue(t)?.includes(n));
Dw.autoRemove = (e) => Mw(e) || !(e != null && e.length);
var Ow = (e, t, n) => e.getValue(t) === n;
Ow.autoRemove = (e) => Mw(e);
var kw = (e, t, n) => e.getValue(t) == n;
kw.autoRemove = (e) => Mw(e);
var Aw = (e, t, n) => {
	let [r, i] = n, a = e.getValue(t);
	return a >= r && a <= i;
};
Aw.resolveFilterValue = (e) => {
	let [t, n] = e, r = typeof t == "number" ? t : parseFloat(t), i = typeof n == "number" ? n : parseFloat(n), a = t === null || Number.isNaN(r) ? -Infinity : r, o = n === null || Number.isNaN(i) ? Infinity : i;
	if (a > o) {
		let e = a;
		a = o, o = e;
	}
	return [a, o];
}, Aw.autoRemove = (e) => Mw(e) || Mw(e[0]) && Mw(e[1]);
var jw = {
	includesString: Sw,
	includesStringSensitive: Cw,
	equalsString: ww,
	arrIncludes: Tw,
	arrIncludesAll: Ew,
	arrIncludesSome: Dw,
	equals: Ow,
	weakEquals: kw,
	inNumberRange: Aw
};
function Mw(e) {
	return e == null || e === "";
}
var Nw = {
	getDefaultColumnDef: () => ({ filterFn: "auto" }),
	getInitialState: (e) => ({
		columnFilters: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onColumnFiltersChange: uw("columnFilters", e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	createColumn: (e, t) => {
		e.getAutoFilterFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			return typeof n == "string" ? jw.includesString : typeof n == "number" ? jw.inNumberRange : typeof n == "boolean" || typeof n == "object" && n ? jw.equals : Array.isArray(n) ? jw.arrIncludes : jw.weakEquals;
		}, e.getFilterFn = () => dw(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : t.options.filterFns?.[e.columnDef.filterFn] ?? jw[e.columnDef.filterFn], e.getCanFilter = () => (e.columnDef.enableColumnFilter ?? !0) && (t.options.enableColumnFilters ?? !0) && (t.options.enableFilters ?? !0) && !!e.accessorFn, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
			var n;
			return (n = t.getState().columnFilters) == null || (n = n.find((t) => t.id === e.id)) == null ? void 0 : n.value;
		}, e.getFilterIndex = () => t.getState().columnFilters?.findIndex((t) => t.id === e.id) ?? -1, e.setFilterValue = (n) => {
			t.setColumnFilters((t) => {
				let r = e.getFilterFn(), i = t?.find((t) => t.id === e.id), a = lw(n, i ? i.value : void 0);
				if (Pw(r, a, e)) return t?.filter((t) => t.id !== e.id) ?? [];
				let o = {
					id: e.id,
					value: a
				};
				return i ? t?.map((t) => t.id === e.id ? o : t) ?? [] : t != null && t.length ? [...t, o] : [o];
			});
		};
	},
	createRow: (e, t) => {
		e.columnFilters = {}, e.columnFiltersMeta = {};
	},
	createTable: (e) => {
		e.setColumnFilters = (t) => {
			let n = e.getAllLeafColumns();
			e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange((e) => lw(t, e)?.filter((e) => {
				let t = n.find((t) => t.id === e.id);
				return !(t && Pw(t.getFilterFn(), e.value, t));
			}));
		}, e.resetColumnFilters = (t) => {
			e.setColumnFilters(t ? [] : e.initialState?.columnFilters ?? []);
		}, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
	}
};
function Pw(e, t, n) {
	return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || t === void 0 || typeof t == "string" && !t;
}
var Fw = {
	sum: (e, t, n) => n.reduce((t, n) => {
		let r = n.getValue(e);
		return t + (typeof r == "number" ? r : 0);
	}, 0),
	min: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r > n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	max: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r < n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	extent: (e, t, n) => {
		let r, i;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r === void 0 ? n >= n && (r = i = n) : (r > n && (r = n), i < n && (i = n)));
		}), [r, i];
	},
	mean: (e, t) => {
		let n = 0, r = 0;
		if (t.forEach((t) => {
			let i = t.getValue(e);
			i != null && (i = +i) >= i && (++n, r += i);
		}), n) return r / n;
	},
	median: (e, t) => {
		if (!t.length) return;
		let n = t.map((t) => t.getValue(e));
		if (!fw(n)) return;
		if (n.length === 1) return n[0];
		let r = Math.floor(n.length / 2), i = n.sort((e, t) => e - t);
		return n.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r];
	},
	unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
	uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
	count: (e, t) => t.length
}, Iw = {
	getDefaultColumnDef: () => ({
		aggregatedCell: (e) => {
			var t;
			return ((t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
		},
		aggregationFn: "auto"
	}),
	getInitialState: (e) => ({
		grouping: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onGroupingChange: uw("grouping", e),
		groupedColumnMode: "reorder"
	}),
	createColumn: (e, t) => {
		e.toggleGrouping = () => {
			t.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((t) => t !== e.id) : [...t ?? [], e.id]);
		}, e.getCanGroup = () => (e.columnDef.enableGrouping ?? !0) && (t.options.enableGrouping ?? !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue), e.getIsGrouped = () => t.getState().grouping?.includes(e.id), e.getGroupedIndex = () => t.getState().grouping?.indexOf(e.id), e.getToggleGroupingHandler = () => {
			let t = e.getCanGroup();
			return () => {
				t && e.toggleGrouping();
			};
		}, e.getAutoAggregationFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			if (typeof n == "number") return Fw.sum;
			if (Object.prototype.toString.call(n) === "[object Date]") return Fw.extent;
		}, e.getAggregationFn = () => {
			if (!e) throw Error();
			return dw(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : t.options.aggregationFns?.[e.columnDef.aggregationFn] ?? Fw[e.columnDef.aggregationFn];
		};
	},
	createTable: (e) => {
		e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
			e.setGrouping(t ? [] : e.initialState?.grouping ?? []);
		}, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
	},
	createRow: (e, t) => {
		e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
			if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
			let r = t.getColumn(n);
			return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
		}, e._groupingValuesCache = {};
	},
	createCell: (e, t, n, r) => {
		e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
			var t;
			return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((t = n.subRows) != null && t.length);
		};
	}
};
function Lw(e, t, n) {
	if (!(t != null && t.length) || !n) return e;
	let r = e.filter((e) => !t.includes(e.id));
	return n === "remove" ? r : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
}
var Rw = {
	getInitialState: (e) => ({
		columnOrder: [],
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnOrderChange: uw("columnOrder", e) }),
	createColumn: (e, t) => {
		e.getIndex = X((e) => [Yw(t, e)], (t) => t.findIndex((t) => t.id === e.id), Z(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => Yw(t, n)[0]?.id === e.id, e.getIsLastColumn = (n) => {
			let r = Yw(t, n);
			return r[r.length - 1]?.id === e.id;
		};
	},
	createTable: (e) => {
		e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
			e.setColumnOrder(t ? [] : e.initialState.columnOrder ?? []);
		}, e._getOrderColumnsFn = X(() => [
			e.getState().columnOrder,
			e.getState().grouping,
			e.options.groupedColumnMode
		], (e, t, n) => (r) => {
			let i = [];
			if (!(e != null && e.length)) i = r;
			else {
				let t = [...e], n = [...r];
				for (; n.length && t.length;) {
					let e = t.shift(), r = n.findIndex((t) => t.id === e);
					r > -1 && i.push(n.splice(r, 1)[0]);
				}
				i = [...i, ...n];
			}
			return Lw(i, t, n);
		}, Z(e.options, "debugTable", "_getOrderColumnsFn"));
	}
}, zw = () => ({
	left: [],
	right: []
}), Bw = {
	getInitialState: (e) => ({
		columnPinning: zw(),
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnPinningChange: uw("columnPinning", e) }),
	createColumn: (e, t) => {
		e.pin = (n) => {
			let r = e.getLeafColumns().map((e) => e.id).filter(Boolean);
			t.setColumnPinning((e) => n === "right" ? {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: [...(e?.right ?? []).filter((e) => !(r != null && r.includes(e))), ...r]
			} : n === "left" ? {
				left: [...(e?.left ?? []).filter((e) => !(r != null && r.includes(e))), ...r],
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			} : {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			});
		}, e.getCanPin = () => e.getLeafColumns().some((e) => (e.columnDef.enablePinning ?? !0) && (t.options.enableColumnPinning ?? t.options.enablePinning ?? !0)), e.getIsPinned = () => {
			let n = e.getLeafColumns().map((e) => e.id), { left: r, right: i } = t.getState().columnPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "left" : o ? "right" : !1;
		}, e.getPinnedIndex = () => {
			var n;
			let r = e.getIsPinned();
			return r ? ((n = t.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) ?? -1 : 0;
		};
	},
	createRow: (e, t) => {
		e.getCenterVisibleCells = X(() => [
			e._getAllVisibleCells(),
			t.getState().columnPinning.left,
			t.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.column.id));
		}, Z(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = X(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "left"
		})), Z(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = X(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "right"
		})), Z(t.options, "debugRows", "getRightVisibleCells"));
	},
	createTable: (e) => {
		e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => e.setColumnPinning(t ? zw() : e.initialState?.columnPinning ?? zw()), e.getIsSomeColumnsPinned = (t) => {
			let n = e.getState().columnPinning;
			return t ? !!n[t]?.length : !!(n.left?.length || n.right?.length);
		}, e.getLeftLeafColumns = X(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), Z(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = X(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), Z(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = X(() => [
			e.getAllLeafColumns(),
			e.getState().columnPinning.left,
			e.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.id));
		}, Z(e.options, "debugColumns", "getCenterLeafColumns"));
	}
};
function Vw(e) {
	return e || (typeof document < "u" ? document : null);
}
var Hw = {
	size: 150,
	minSize: 20,
	maxSize: 2 ** 53 - 1
}, Uw = () => ({
	startOffset: null,
	startSize: null,
	deltaOffset: null,
	deltaPercentage: null,
	isResizingColumn: !1,
	columnSizingStart: []
}), Ww = {
	getDefaultColumnDef: () => Hw,
	getInitialState: (e) => ({
		columnSizing: {},
		columnSizingInfo: Uw(),
		...e
	}),
	getDefaultOptions: (e) => ({
		columnResizeMode: "onEnd",
		columnResizeDirection: "ltr",
		onColumnSizingChange: uw("columnSizing", e),
		onColumnSizingInfoChange: uw("columnSizingInfo", e)
	}),
	createColumn: (e, t) => {
		e.getSize = () => {
			let n = t.getState().columnSizing[e.id];
			return Math.min(Math.max(e.columnDef.minSize ?? Hw.minSize, n ?? e.columnDef.size ?? Hw.size), e.columnDef.maxSize ?? Hw.maxSize);
		}, e.getStart = X((e) => [
			e,
			Yw(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0), Z(t.options, "debugColumns", "getStart")), e.getAfter = X((e) => [
			e,
			Yw(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0), Z(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
			t.setColumnSizing((t) => {
				let { [e.id]: n, ...r } = t;
				return r;
			});
		}, e.getCanResize = () => (e.columnDef.enableResizing ?? !0) && (t.options.enableColumnResizing ?? !0), e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
	},
	createHeader: (e, t) => {
		e.getSize = () => {
			let t = 0, n = (e) => {
				e.subHeaders.length ? e.subHeaders.forEach(n) : t += e.column.getSize() ?? 0;
			};
			return n(e), t;
		}, e.getStart = () => {
			if (e.index > 0) {
				let t = e.headerGroup.headers[e.index - 1];
				return t.getStart() + t.getSize();
			}
			return 0;
		}, e.getResizeHandler = (n) => {
			let r = t.getColumn(e.column.id), i = r?.getCanResize();
			return (a) => {
				if (!r || !i || (a.persist == null || a.persist(), qw(a) && a.touches && a.touches.length > 1)) return;
				let o = e.getSize(), s = e ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()]) : [[r.id, r.getSize()]], c = qw(a) ? Math.round(a.touches[0].clientX) : a.clientX, l = {}, u = (e, n) => {
					typeof n == "number" && (t.setColumnSizingInfo((e) => {
						let r = t.options.columnResizeDirection === "rtl" ? -1 : 1, i = (n - (e?.startOffset ?? 0)) * r, a = Math.max(i / (e?.startSize ?? 0), -.999999);
						return e.columnSizingStart.forEach((e) => {
							let [t, n] = e;
							l[t] = Math.round(Math.max(n + n * a, 0) * 100) / 100;
						}), {
							...e,
							deltaOffset: i,
							deltaPercentage: a
						};
					}), (t.options.columnResizeMode === "onChange" || e === "end") && t.setColumnSizing((e) => ({
						...e,
						...l
					})));
				}, d = (e) => u("move", e), f = (e) => {
					u("end", e), t.setColumnSizingInfo((e) => ({
						...e,
						isResizingColumn: !1,
						startOffset: null,
						startSize: null,
						deltaOffset: null,
						deltaPercentage: null,
						columnSizingStart: []
					}));
				}, p = Vw(n), m = {
					moveHandler: (e) => d(e.clientX),
					upHandler: (e) => {
						p?.removeEventListener("mousemove", m.moveHandler), p?.removeEventListener("mouseup", m.upHandler), f(e.clientX);
					}
				}, h = {
					moveHandler: (e) => (e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1),
					upHandler: (e) => {
						p?.removeEventListener("touchmove", h.moveHandler), p?.removeEventListener("touchend", h.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), f(e.touches[0]?.clientX);
					}
				}, g = Kw() ? { passive: !1 } : !1;
				qw(a) ? (p?.addEventListener("touchmove", h.moveHandler, g), p?.addEventListener("touchend", h.upHandler, g)) : (p?.addEventListener("mousemove", m.moveHandler, g), p?.addEventListener("mouseup", m.upHandler, g)), t.setColumnSizingInfo((e) => ({
					...e,
					startOffset: c,
					startSize: o,
					deltaOffset: 0,
					deltaPercentage: 0,
					columnSizingStart: s,
					isResizingColumn: r.id
				}));
			};
		};
	},
	createTable: (e) => {
		e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
			e.setColumnSizing(t ? {} : e.initialState.columnSizing ?? {});
		}, e.resetHeaderSizeInfo = (t) => {
			e.setColumnSizingInfo(t ? Uw() : e.initialState.columnSizingInfo ?? Uw());
		}, e.getTotalSize = () => e.getHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getLeftTotalSize = () => e.getLeftHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getCenterTotalSize = () => e.getCenterHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getRightTotalSize = () => e.getRightHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0;
	}
}, Gw = null;
function Kw() {
	if (typeof Gw == "boolean") return Gw;
	let e = !1;
	try {
		let t = { get passive() {
			return e = !0, !1;
		} }, n = () => {};
		window.addEventListener("test", n, t), window.removeEventListener("test", n);
	} catch {
		e = !1;
	}
	return Gw = e, Gw;
}
function qw(e) {
	return e.type === "touchstart";
}
var Jw = {
	getInitialState: (e) => ({
		columnVisibility: {},
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnVisibilityChange: uw("columnVisibility", e) }),
	createColumn: (e, t) => {
		e.toggleVisibility = (n) => {
			e.getCanHide() && t.setColumnVisibility((t) => ({
				...t,
				[e.id]: n ?? !e.getIsVisible()
			}));
		}, e.getIsVisible = () => {
			let n = e.columns;
			return (n.length ? n.some((e) => e.getIsVisible()) : t.getState().columnVisibility?.[e.id]) ?? !0;
		}, e.getCanHide = () => (e.columnDef.enableHiding ?? !0) && (t.options.enableHiding ?? !0), e.getToggleVisibilityHandler = () => (t) => {
			e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e._getAllVisibleCells = X(() => [e.getAllCells(), t.getState().columnVisibility], (e) => e.filter((e) => e.column.getIsVisible()), Z(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = X(() => [
			e.getLeftVisibleCells(),
			e.getCenterVisibleCells(),
			e.getRightVisibleCells()
		], (e, t, n) => [
			...e,
			...t,
			...n
		], Z(t.options, "debugRows", "getVisibleCells"));
	},
	createTable: (e) => {
		let t = (t, n) => X(() => [n(), n().filter((e) => e.getIsVisible()).map((e) => e.id).join("_")], (e) => e.filter((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), Z(e.options, "debugColumns", t));
		e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
			e.setColumnVisibility(t ? {} : e.initialState.columnVisibility ?? {});
		}, e.toggleAllColumnsVisible = (t) => {
			t ??= !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, n) => ({
				...e,
				[n.id]: t || !(n.getCanHide != null && n.getCanHide())
			}), {}));
		}, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((e) => !(e.getIsVisible != null && e.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
			e.toggleAllColumnsVisible(t.target?.checked);
		};
	}
};
function Yw(e, t) {
	return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
var Xw = { createTable: (e) => {
	e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
		if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
	};
} }, Zw = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultOptions: (e) => ({
		onGlobalFilterChange: uw("globalFilter", e),
		globalFilterFn: "auto",
		getColumnCanGlobalFilter: (t) => {
			var n;
			let r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
			return typeof r == "string" || typeof r == "number";
		}
	}),
	createColumn: (e, t) => {
		e.getCanGlobalFilter = () => (e.columnDef.enableGlobalFilter ?? !0) && (t.options.enableGlobalFilter ?? !0) && (t.options.enableFilters ?? !0) && ((t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) ?? !0) && !!e.accessorFn;
	},
	createTable: (e) => {
		e.getGlobalAutoFilterFn = () => jw.includesString, e.getGlobalFilterFn = () => {
			let { globalFilterFn: t } = e.options;
			return dw(t) ? t : t === "auto" ? e.getGlobalAutoFilterFn() : e.options.filterFns?.[t] ?? jw[t];
		}, e.setGlobalFilter = (t) => {
			e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
		}, e.resetGlobalFilter = (t) => {
			e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
		};
	}
}, Qw = {
	getInitialState: (e) => ({
		expanded: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onExpandedChange: uw("expanded", e),
		paginateExpandedRows: !0
	}),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetExpanded = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetExpanded ?? !e.options.manualExpanding) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetExpanded(), n = !1;
				});
			}
		}, e.setExpanded = (t) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(t), e.toggleAllRowsExpanded = (t) => {
			t ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
		}, e.resetExpanded = (t) => {
			e.setExpanded(t ? {} : e.initialState?.expanded ?? {});
		}, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (t) => {
			t.persist == null || t.persist(), e.toggleAllRowsExpanded();
		}, e.getIsSomeRowsExpanded = () => {
			let t = e.getState().expanded;
			return t === !0 || Object.values(t).some(Boolean);
		}, e.getIsAllRowsExpanded = () => {
			let t = e.getState().expanded;
			return typeof t == "boolean" ? t === !0 : !(!Object.keys(t).length || e.getRowModel().flatRows.some((e) => !e.getIsExpanded()));
		}, e.getExpandedDepth = () => {
			let t = 0;
			return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((e) => {
				let n = e.split(".");
				t = Math.max(t, n.length);
			}), t;
		}, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
	},
	createRow: (e, t) => {
		e.toggleExpanded = (n) => {
			t.setExpanded((r) => {
				let i = r === !0 ? !0 : !!(r != null && r[e.id]), a = {};
				if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
					a[e] = !0;
				}) : a = r, n ??= !i, !i && n) return {
					...a,
					[e.id]: !0
				};
				if (i && !n) {
					let { [e.id]: t, ...n } = a;
					return n;
				}
				return r;
			});
		}, e.getIsExpanded = () => {
			let n = t.getState().expanded;
			return !!((t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) ?? (n === !0 || n?.[e.id]));
		}, e.getCanExpand = () => {
			var n;
			return (t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) ?? ((t.options.enableExpanding ?? !0) && !!((n = e.subRows) != null && n.length));
		}, e.getIsAllParentsExpanded = () => {
			let n = !0, r = e;
			for (; n && r.parentId;) r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
			return n;
		}, e.getToggleExpandedHandler = () => {
			let t = e.getCanExpand();
			return () => {
				t && e.toggleExpanded();
			};
		};
	}
}, $w = 0, eT = 10, tT = () => ({
	pageIndex: $w,
	pageSize: eT
}), nT = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...tT(),
			...e?.pagination
		}
	}),
	getDefaultOptions: (e) => ({ onPaginationChange: uw("pagination", e) }),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetPageIndex = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetPageIndex(), n = !1;
				});
			}
		}, e.setPagination = (t) => e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange((e) => lw(t, e)), e.resetPagination = (t) => {
			e.setPagination(t ? tT() : e.initialState.pagination ?? tT());
		}, e.setPageIndex = (t) => {
			e.setPagination((n) => {
				let r = lw(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
				return r = Math.max(0, Math.min(r, i)), {
					...n,
					pageIndex: r
				};
			});
		}, e.resetPageIndex = (t) => {
			var n;
			e.setPageIndex(t ? $w : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageIndex) ?? $w);
		}, e.resetPageSize = (t) => {
			var n;
			e.setPageSize(t ? eT : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageSize) ?? eT);
		}, e.setPageSize = (t) => {
			e.setPagination((e) => {
				let n = Math.max(1, lw(t, e.pageSize)), r = e.pageSize * e.pageIndex, i = Math.floor(r / n);
				return {
					...e,
					pageIndex: i,
					pageSize: n
				};
			});
		}, e.setPageCount = (t) => e.setPagination((n) => {
			let r = lw(t, e.options.pageCount ?? -1);
			return typeof r == "number" && (r = Math.max(-1, r)), {
				...n,
				pageCount: r
			};
		}), e.getPageOptions = X(() => [e.getPageCount()], (e) => {
			let t = [];
			return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t;
		}, Z(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
			let { pageIndex: t } = e.getState().pagination, n = e.getPageCount();
			return n === -1 ? !0 : n === 0 ? !1 : t < n - 1;
		}, e.previousPage = () => e.setPageIndex((e) => e - 1), e.nextPage = () => e.setPageIndex((e) => e + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => e.options.pageCount ?? Math.ceil(e.getRowCount() / e.getState().pagination.pageSize), e.getRowCount = () => e.options.rowCount ?? e.getPrePaginationRowModel().rows.length;
	}
}, rT = () => ({
	top: [],
	bottom: []
}), iT = {
	getInitialState: (e) => ({
		rowPinning: rT(),
		...e
	}),
	getDefaultOptions: (e) => ({ onRowPinningChange: uw("rowPinning", e) }),
	createRow: (e, t) => {
		e.pin = (n, r, i) => {
			let a = r ? e.getLeafRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], o = i ? e.getParentRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], s = new Set([
				...o,
				e.id,
				...a
			]);
			t.setRowPinning((e) => n === "bottom" ? {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: [...(e?.bottom ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)]
			} : n === "top" ? {
				top: [...(e?.top ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)],
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			} : {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			});
		}, e.getCanPin = () => {
			let { enableRowPinning: n, enablePinning: r } = t.options;
			return typeof n == "function" ? n(e) : n ?? r ?? !0;
		}, e.getIsPinned = () => {
			let n = [e.id], { top: r, bottom: i } = t.getState().rowPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "top" : o ? "bottom" : !1;
		}, e.getPinnedIndex = () => {
			let n = e.getIsPinned();
			return n ? ((n === "top" ? t.getTopRows() : t.getBottomRows())?.map((e) => {
				let { id: t } = e;
				return t;
			}))?.indexOf(e.id) ?? -1 : -1;
		};
	},
	createTable: (e) => {
		e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => e.setRowPinning(t ? rT() : e.initialState?.rowPinning ?? rT()), e.getIsSomeRowsPinned = (t) => {
			let n = e.getState().rowPinning;
			return t ? !!n[t]?.length : !!(n.top?.length || n.bottom?.length);
		}, e._getPinnedRows = (t, n, r) => (e.options.keepPinnedRows ?? !0 ? (n ?? []).map((t) => {
			let n = e.getRow(t, !0);
			return n.getIsAllParentsExpanded() ? n : null;
		}) : (n ?? []).map((e) => t.find((t) => t.id === e))).filter(Boolean).map((e) => ({
			...e,
			position: r
		})), e.getTopRows = X(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), Z(e.options, "debugRows", "getTopRows")), e.getBottomRows = X(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), Z(e.options, "debugRows", "getBottomRows")), e.getCenterRows = X(() => [
			e.getRowModel().rows,
			e.getState().rowPinning.top,
			e.getState().rowPinning.bottom
		], (e, t, n) => {
			let r = new Set([...t ?? [], ...n ?? []]);
			return e.filter((e) => !r.has(e.id));
		}, Z(e.options, "debugRows", "getCenterRows"));
	}
}, aT = {
	getInitialState: (e) => ({
		rowSelection: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onRowSelectionChange: uw("rowSelection", e),
		enableRowSelection: !0,
		enableMultiRowSelection: !0,
		enableSubRowSelection: !0
	}),
	createTable: (e) => {
		e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => e.setRowSelection(t ? {} : e.initialState.rowSelection ?? {}), e.toggleAllRowsSelected = (t) => {
			e.setRowSelection((n) => {
				t = t === void 0 ? !e.getIsAllRowsSelected() : t;
				let r = { ...n }, i = e.getPreGroupedRowModel().flatRows;
				return t ? i.forEach((e) => {
					e.getCanSelect() && (r[e.id] = !0);
				}) : i.forEach((e) => {
					delete r[e.id];
				}), r;
			});
		}, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
			let r = t === void 0 ? !e.getIsAllPageRowsSelected() : t, i = { ...n };
			return e.getRowModel().rows.forEach((t) => {
				oT(i, t.id, r, !0, e);
			}), i;
		}), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = X(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? sT(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Z(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = X(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? sT(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Z(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = X(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? sT(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, Z(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
			let t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState(), r = !!(t.length && Object.keys(n).length);
			return r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r;
		}, e.getIsAllPageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()), { rowSelection: n } = e.getState(), r = !!t.length;
			return r && t.some((e) => !n[e.id]) && (r = !1), r;
		}, e.getIsSomeRowsSelected = () => {
			let t = Object.keys(e.getState().rowSelection ?? {}).length;
			return t > 0 && t < e.getFilteredRowModel().flatRows.length;
		}, e.getIsSomePageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows;
			return e.getIsAllPageRowsSelected() ? !1 : t.filter((e) => e.getCanSelect()).some((e) => e.getIsSelected() || e.getIsSomeSelected());
		}, e.getToggleAllRowsSelectedHandler = () => (t) => {
			e.toggleAllRowsSelected(t.target.checked);
		}, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
			e.toggleAllPageRowsSelected(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e.toggleSelected = (n, r) => {
			let i = e.getIsSelected();
			t.setRowSelection((a) => {
				if (n = n === void 0 ? !i : n, e.getCanSelect() && i === n) return a;
				let o = { ...a };
				return oT(o, e.id, n, r?.selectChildren ?? !0, t), o;
			});
		}, e.getIsSelected = () => {
			let { rowSelection: n } = t.getState();
			return cT(e, n);
		}, e.getIsSomeSelected = () => {
			let { rowSelection: n } = t.getState();
			return lT(e, n) === "some";
		}, e.getIsAllSubRowsSelected = () => {
			let { rowSelection: n } = t.getState();
			return lT(e, n) === "all";
		}, e.getCanSelect = () => typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : t.options.enableRowSelection ?? !0, e.getCanSelectSubRows = () => typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : t.options.enableSubRowSelection ?? !0, e.getCanMultiSelect = () => typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : t.options.enableMultiRowSelection ?? !0, e.getToggleSelectedHandler = () => {
			let t = e.getCanSelect();
			return (n) => {
				t && e.toggleSelected(n.target?.checked);
			};
		};
	}
}, oT = (e, t, n, r, i) => {
	var a;
	let o = i.getRow(t, !0);
	n ? (o.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), o.getCanSelect() && (e[t] = !0)) : delete e[t], r && (a = o.subRows) != null && a.length && o.getCanSelectSubRows() && o.subRows.forEach((t) => oT(e, t.id, n, r, i));
};
function sT(e, t) {
	let n = e.getState().rowSelection, r = [], i = {}, a = function(e, t) {
		return e.map((e) => {
			var t;
			let o = cT(e, n);
			if (o && (r.push(e), i[e.id] = e), (t = e.subRows) != null && t.length && (e = {
				...e,
				subRows: a(e.subRows)
			}), o) return e;
		}).filter(Boolean);
	};
	return {
		rows: a(t.rows),
		flatRows: r,
		rowsById: i
	};
}
function cT(e, t) {
	return t[e.id] ?? !1;
}
function lT(e, t, n) {
	var r;
	if (!((r = e.subRows) != null && r.length)) return !1;
	let i = !0, a = !1;
	return e.subRows.forEach((e) => {
		if (!(a && !i) && (e.getCanSelect() && (cT(e, t) ? a = !0 : i = !1), e.subRows && e.subRows.length)) {
			let n = lT(e, t);
			n === "all" ? a = !0 : (n === "some" && (a = !0), i = !1);
		}
	}), i ? "all" : a ? "some" : !1;
}
var uT = /([0-9]+)/gm, dT = (e, t, n) => yT(vT(e.getValue(n)).toLowerCase(), vT(t.getValue(n)).toLowerCase()), fT = (e, t, n) => yT(vT(e.getValue(n)), vT(t.getValue(n))), pT = (e, t, n) => _T(vT(e.getValue(n)).toLowerCase(), vT(t.getValue(n)).toLowerCase()), mT = (e, t, n) => _T(vT(e.getValue(n)), vT(t.getValue(n))), hT = (e, t, n) => {
	let r = e.getValue(n), i = t.getValue(n);
	return r > i ? 1 : r < i ? -1 : 0;
}, gT = (e, t, n) => _T(e.getValue(n), t.getValue(n));
function _T(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function vT(e) {
	return typeof e == "number" ? isNaN(e) || e === Infinity || e === -Infinity ? "" : String(e) : typeof e == "string" ? e : "";
}
function yT(e, t) {
	let n = e.split(uT).filter(Boolean), r = t.split(uT).filter(Boolean);
	for (; n.length && r.length;) {
		let e = n.shift(), t = r.shift(), i = parseInt(e, 10), a = parseInt(t, 10), o = [i, a].sort();
		if (isNaN(o[0])) {
			if (e > t) return 1;
			if (t > e) return -1;
			continue;
		}
		if (isNaN(o[1])) return isNaN(i) ? -1 : 1;
		if (i > a) return 1;
		if (a > i) return -1;
	}
	return n.length - r.length;
}
var bT = {
	alphanumeric: dT,
	alphanumericCaseSensitive: fT,
	text: pT,
	textCaseSensitive: mT,
	datetime: hT,
	basic: gT
}, xT = [
	vw,
	Jw,
	Rw,
	Bw,
	xw,
	Nw,
	Xw,
	Zw,
	{
		getInitialState: (e) => ({
			sorting: [],
			...e
		}),
		getDefaultColumnDef: () => ({
			sortingFn: "auto",
			sortUndefined: 1
		}),
		getDefaultOptions: (e) => ({
			onSortingChange: uw("sorting", e),
			isMultiSortEvent: (e) => e.shiftKey
		}),
		createColumn: (e, t) => {
			e.getAutoSortingFn = () => {
				let n = t.getFilteredRowModel().flatRows.slice(10), r = !1;
				for (let t of n) {
					let n = t?.getValue(e.id);
					if (Object.prototype.toString.call(n) === "[object Date]") return bT.datetime;
					if (typeof n == "string" && (r = !0, n.split(uT).length > 1)) return bT.alphanumeric;
				}
				return r ? bT.text : bT.basic;
			}, e.getAutoSortDir = () => typeof t.getFilteredRowModel().flatRows[0]?.getValue(e.id) == "string" ? "asc" : "desc", e.getSortingFn = () => {
				if (!e) throw Error();
				return dw(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : t.options.sortingFns?.[e.columnDef.sortingFn] ?? bT[e.columnDef.sortingFn];
			}, e.toggleSorting = (n, r) => {
				let i = e.getNextSortingOrder(), a = n != null;
				t.setSorting((o) => {
					let s = o?.find((t) => t.id === e.id), c = o?.findIndex((t) => t.id === e.id), l = [], u, d = a ? n : i === "desc";
					return u = o != null && o.length && e.getCanMultiSort() && r ? s ? "toggle" : "add" : o != null && o.length && c !== o.length - 1 ? "replace" : s ? "toggle" : "replace", u === "toggle" && (a || i || (u = "remove")), u === "add" ? (l = [...o, {
						id: e.id,
						desc: d
					}], l.splice(0, l.length - (t.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : l = u === "toggle" ? o.map((t) => t.id === e.id ? {
						...t,
						desc: d
					} : t) : u === "remove" ? o.filter((t) => t.id !== e.id) : [{
						id: e.id,
						desc: d
					}], l;
				});
			}, e.getFirstSortDir = () => e.columnDef.sortDescFirst ?? t.options.sortDescFirst ?? e.getAutoSortDir() === "desc" ? "desc" : "asc", e.getNextSortingOrder = (n) => {
				let r = e.getFirstSortDir(), i = e.getIsSorted();
				return i ? i !== r && (t.options.enableSortingRemoval ?? !0) && (!n || (t.options.enableMultiRemove ?? !0)) ? !1 : i === "desc" ? "asc" : "desc" : r;
			}, e.getCanSort = () => (e.columnDef.enableSorting ?? !0) && (t.options.enableSorting ?? !0) && !!e.accessorFn, e.getCanMultiSort = () => e.columnDef.enableMultiSort ?? t.options.enableMultiSort ?? !!e.accessorFn, e.getIsSorted = () => {
				let n = t.getState().sorting?.find((t) => t.id === e.id);
				return n ? n.desc ? "desc" : "asc" : !1;
			}, e.getSortIndex = () => t.getState().sorting?.findIndex((t) => t.id === e.id) ?? -1, e.clearSorting = () => {
				t.setSorting((t) => t != null && t.length ? t.filter((t) => t.id !== e.id) : []);
			}, e.getToggleSortingHandler = () => {
				let n = e.getCanSort();
				return (r) => {
					n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
				};
			};
		},
		createTable: (e) => {
			e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
				e.setSorting(t ? [] : e.initialState?.sorting ?? []);
			}, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
		}
	},
	Iw,
	Qw,
	nT,
	iT,
	aT,
	Ww
];
function ST(e) {
	process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
	let t = [...xT, ...e._features ?? []], n = { _features: t }, r = n._features.reduce((e, t) => Object.assign(e, t.getDefaultOptions == null ? void 0 : t.getDefaultOptions(n)), {}), i = (e) => n.options.mergeOptions ? n.options.mergeOptions(r, e) : {
		...r,
		...e
	}, a = { ...e.initialState ?? {} };
	n._features.forEach((e) => {
		a = (e.getInitialState == null ? void 0 : e.getInitialState(a)) ?? a;
	});
	let o = [], s = !1, c = {
		_features: t,
		options: {
			...r,
			...e
		},
		initialState: a,
		_queue: (e) => {
			o.push(e), s || (s = !0, Promise.resolve().then(() => {
				for (; o.length;) o.shift()();
				s = !1;
			}).catch((e) => setTimeout(() => {
				throw e;
			})));
		},
		reset: () => {
			n.setState(n.initialState);
		},
		setOptions: (e) => {
			n.options = i(lw(e, n.options));
		},
		getState: () => n.options.state,
		setState: (e) => {
			n.options.onStateChange == null || n.options.onStateChange(e);
		},
		_getRowId: (e, t, r) => (n.options.getRowId == null ? void 0 : n.options.getRowId(e, t, r)) ?? `${r ? [r.id, t].join(".") : t}`,
		getCoreRowModel: () => (n._getCoreRowModel ||= n.options.getCoreRowModel(n), n._getCoreRowModel()),
		getRowModel: () => n.getPaginationRowModel(),
		getRow: (e, t) => {
			let r = (t ? n.getPrePaginationRowModel() : n.getRowModel()).rowsById[e];
			if (!r && (r = n.getCoreRowModel().rowsById[e], !r)) throw process.env.NODE_ENV === "production" ? Error() : Error(`getRow could not find row with ID: ${e}`);
			return r;
		},
		_getDefaultColumnDef: X(() => [n.options.defaultColumn], (e) => (e ??= {}, {
			header: (e) => {
				let t = e.header.column.columnDef;
				return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
			},
			cell: (e) => {
				var t;
				return ((t = e.renderValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
			},
			...n._features.reduce((e, t) => Object.assign(e, t.getDefaultColumnDef == null ? void 0 : t.getDefaultColumnDef()), {}),
			...e
		}), Z(e, "debugColumns", "_getDefaultColumnDef")),
		_getColumnDefs: () => n.options.columns,
		getAllColumns: X(() => [n._getColumnDefs()], (e) => {
			let t = function(e, r, i) {
				return i === void 0 && (i = 0), e.map((e) => {
					let a = hw(n, e, i, r), o = e;
					return a.columns = o.columns ? t(o.columns, a, i + 1) : [], a;
				});
			};
			return t(e);
		}, Z(e, "debugColumns", "getAllColumns")),
		getAllFlatColumns: X(() => [n.getAllColumns()], (e) => e.flatMap((e) => e.getFlatColumns()), Z(e, "debugColumns", "getAllFlatColumns")),
		_getAllFlatColumnsById: X(() => [n.getAllFlatColumns()], (e) => e.reduce((e, t) => (e[t.id] = t, e), {}), Z(e, "debugColumns", "getAllFlatColumnsById")),
		getAllLeafColumns: X(() => [n.getAllColumns(), n._getOrderColumnsFn()], (e, t) => t(e.flatMap((e) => e.getLeafColumns())), Z(e, "debugColumns", "getAllLeafColumns")),
		getColumn: (e) => {
			let t = n._getAllFlatColumnsById()[e];
			return process.env.NODE_ENV !== "production" && !t && console.error(`[Table] Column with id '${e}' does not exist.`), t;
		}
	};
	Object.assign(n, c);
	for (let e = 0; e < n._features.length; e++) {
		let t = n._features[e];
		t == null || t.createTable == null || t.createTable(n);
	}
	return n;
}
function CT() {
	return (e) => X(() => [e.options.data], (t) => {
		let n = {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, r = function(t, i, a) {
			i === void 0 && (i = 0);
			let o = [];
			for (let c = 0; c < t.length; c++) {
				let l = bw(e, e._getRowId(t[c], c, a), t[c], c, i, void 0, a?.id);
				if (n.flatRows.push(l), n.rowsById[l.id] = l, o.push(l), e.options.getSubRows) {
					var s;
					l.originalSubRows = e.options.getSubRows(t[c], c), (s = l.originalSubRows) != null && s.length && (l.subRows = r(l.originalSubRows, i + 1, l));
				}
			}
			return o;
		};
		return n.rows = r(t), n;
	}, Z(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
//#endregion
//#region node_modules/@tanstack/react-table/build/lib/index.mjs
function wT(t, n) {
	return t ? TT(t) ? /*#__PURE__*/ e.createElement(t, n) : t : null;
}
function TT(e) {
	return ET(e) || typeof e == "function" || DT(e);
}
function ET(e) {
	return typeof e == "function" && (() => {
		let t = Object.getPrototypeOf(e);
		return t.prototype && t.prototype.isReactComponent;
	})();
}
function DT(e) {
	return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function OT(t) {
	let n = {
		state: {},
		onStateChange: () => {},
		renderFallbackValue: null,
		...t
	}, [r] = e.useState(() => ({ current: ST(n) })), [i, a] = e.useState(() => r.current.initialState);
	return r.current.setOptions((e) => ({
		...e,
		...t,
		state: {
			...i,
			...t.state
		},
		onStateChange: (e) => {
			a(e), t.onStateChange == null || t.onStateChange(e);
		}
	})), r.current;
}
//#endregion
//#region src/components/Grid/Grid.tsx
var kT = cw();
function AT({ rows: e, ariaLabel: t = "Pattern delivery status", className: n = "grd" }) {
	let r = g(() => [
		kT.accessor("pattern", { header: "Pattern" }),
		kT.accessor("status", { header: "Status" }),
		kT.accessor("spec", { header: "Spec" }),
		kT.accessor("notes", { header: "Notes" })
	], []), i = OT({
		data: g(() => e, [e]),
		columns: r,
		getCoreRowModel: CT()
	}), a = v(null), [o, s] = y({
		r: 0,
		c: 0
	});
	f(() => {
		(a.current?.querySelector(`[data-r="${o.r}"][data-c="${o.c}"]`))?.focus();
	}, [o]);
	let c = i.getRowModel().rows.length, l = r.length;
	function u(e) {
		let { r: t, c: n } = o, r = t, i = n;
		if (e.key === "ArrowRight") i = Math.min(n + 1, l - 1);
		else if (e.key === "ArrowLeft") i = Math.max(n - 1, 0);
		else if (e.key === "ArrowDown") r = Math.min(t + 1, c);
		else if (e.key === "ArrowUp") r = Math.max(t - 1, 0);
		else if (e.key === "Home") i = 0;
		else if (e.key === "End") i = l - 1;
		else if (e.key === "PageDown") r = c;
		else if (e.key === "PageUp") r = 0;
		else return;
		e.preventDefault(), s({
			r,
			c: i
		});
	}
	return /* @__PURE__ */ C("div", {
		className: "grd__wrap",
		role: "grid",
		"aria-label": t,
		"aria-rowcount": c + 1,
		"aria-colcount": l,
		onKeyDown: u,
		children: /* @__PURE__ */ w("table", {
			className: n,
			ref: a,
			role: "presentation",
			children: [/* @__PURE__ */ C("thead", {
				role: "presentation",
				children: i.getHeaderGroups().map((e) => /* @__PURE__ */ C("tr", {
					role: "row",
					children: e.headers.map((e, t) => /* @__PURE__ */ C("th", {
						role: "columnheader",
						"aria-rowindex": 1,
						"aria-colindex": t + 1,
						"data-r": 0,
						"data-c": t,
						tabIndex: o.r === 0 && o.c === t ? 0 : -1,
						children: wT(e.column.columnDef.header, e.getContext())
					}, e.id))
				}, e.id))
			}), /* @__PURE__ */ C("tbody", {
				role: "presentation",
				children: i.getRowModel().rows.map((e, t) => /* @__PURE__ */ C("tr", {
					role: "row",
					"aria-rowindex": t + 2,
					children: e.getVisibleCells().map((e, n) => {
						let r = n === 0, i = String(e.getValue()), a = e.column.id === "status";
						return /* @__PURE__ */ C("td", {
							role: r ? "rowheader" : "gridcell",
							"aria-colindex": n + 1,
							"data-r": t + 1,
							"data-c": n,
							tabIndex: o.r === t + 1 && o.c === n ? 0 : -1,
							children: a ? /* @__PURE__ */ C("span", {
								className: `grd__chip grd__chip--${i}`,
								children: i
							}) : wT(e.column.columnDef.cell, e.getContext())
						}, e.id);
					})
				}, e.id))
			})]
		})
	});
}
//#endregion
//#region src/components/Landmarks/Landmarks.tsx
var jT = [
	{
		tag: "<header>",
		role: "banner",
		note: "Site-wide masthead."
	},
	{
		tag: "<nav>",
		role: "navigation",
		note: "Primary navigation; label when more than one."
	},
	{
		tag: "<main>",
		role: "main",
		note: "Where the page’s unique content lives. One per page."
	},
	{
		tag: "<aside>",
		role: "complementary",
		note: "Tangentially related to the main content."
	},
	{
		tag: "<section aria-label>",
		role: "region",
		note: "Generic landmark when no other fits."
	},
	{
		tag: "<form aria-label>",
		role: "form",
		note: "Becomes a landmark when explicitly labelled."
	},
	{
		tag: "<search>",
		role: "search",
		note: "Search forms (HTML element shipped 2023)."
	},
	{
		tag: "<footer>",
		role: "contentinfo",
		note: "Copyright, supplementary links."
	}
];
function MT({ rows: e = jT, className: t = "lm" }) {
	return /* @__PURE__ */ w("div", {
		className: t,
		children: [/* @__PURE__ */ w("div", {
			className: "lm__page",
			"aria-label": "Sample page wireframe",
			children: [
				/* @__PURE__ */ w("div", {
					className: "lm__zone lm__zone--banner",
					children: [/* @__PURE__ */ C("span", {
						className: "mono",
						children: "<header>"
					}), /* @__PURE__ */ C("span", {
						className: "mono",
						children: "role=banner"
					})]
				}),
				/* @__PURE__ */ w("div", {
					className: "lm__zone lm__zone--nav",
					children: [/* @__PURE__ */ C("span", {
						className: "mono",
						children: "<nav>"
					}), /* @__PURE__ */ C("span", {
						className: "mono",
						children: "role=navigation"
					})]
				}),
				/* @__PURE__ */ w("div", {
					className: "lm__zone lm__zone--main",
					children: [
						/* @__PURE__ */ C("span", {
							className: "mono",
							children: "<main>"
						}),
						/* @__PURE__ */ C("span", {
							className: "mono",
							children: "role=main"
						}),
						/* @__PURE__ */ w("div", {
							className: "lm__zone lm__zone--region",
							children: [/* @__PURE__ */ C("span", {
								className: "mono",
								children: "<section aria-label=\"Featured\">"
							}), /* @__PURE__ */ C("span", {
								className: "mono",
								children: "role=region"
							})]
						})
					]
				}),
				/* @__PURE__ */ w("div", {
					className: "lm__zone lm__zone--side",
					children: [/* @__PURE__ */ C("span", {
						className: "mono",
						children: "<aside>"
					}), /* @__PURE__ */ C("span", {
						className: "mono",
						children: "role=complementary"
					})]
				}),
				/* @__PURE__ */ w("div", {
					className: "lm__zone lm__zone--foot",
					children: [/* @__PURE__ */ C("span", {
						className: "mono",
						children: "<footer>"
					}), /* @__PURE__ */ C("span", {
						className: "mono",
						children: "role=contentinfo"
					})]
				})
			]
		}), /* @__PURE__ */ w("table", {
			className: "lm__table",
			children: [/* @__PURE__ */ C("thead", { children: /* @__PURE__ */ w("tr", { children: [
				/* @__PURE__ */ C("th", { children: "Element" }),
				/* @__PURE__ */ C("th", { children: "Role" }),
				/* @__PURE__ */ C("th", { children: "Use it for" })
			] }) }), /* @__PURE__ */ C("tbody", { children: e.map((e) => /* @__PURE__ */ w("tr", { children: [
				/* @__PURE__ */ C("td", { children: /* @__PURE__ */ C("code", { children: e.tag }) }),
				/* @__PURE__ */ C("td", { children: /* @__PURE__ */ C("span", {
					className: "mono lm__rolepill",
					children: e.role
				}) }),
				/* @__PURE__ */ C("td", { children: e.note })
			] }, e.role)) })]
		})]
	});
}
//#endregion
//#region src/components/Link/Link.tsx
function NT({ items: e, lede: t = "Links inside running prose should sit unmistakeably apart from the surrounding type — colour alone is not enough, so we lean on weight and a hairline underline.", quote: n = "“The link is the founding metaphor of the web. Treat it with the dignity it’s owed.”", className: r = "lnk" }) {
	return /* @__PURE__ */ w("div", {
		className: r,
		children: [
			/* @__PURE__ */ C("p", {
				className: "lnk__lede",
				children: t
			}),
			/* @__PURE__ */ C("ul", {
				className: "lnk__list",
				children: e.map((e) => /* @__PURE__ */ C("li", { children: /* @__PURE__ */ w(Go, {
					href: e.href,
					target: e.external ? "_blank" : void 0,
					rel: e.external ? "noreferrer" : void 0,
					isDisabled: e.disabled,
					className: `lnk__a${e.disabled ? " lnk__a--disabled" : ""}`,
					children: [e.label, e.external && /* @__PURE__ */ C("span", {
						"aria-hidden": "true",
						className: "lnk__ext",
						children: "↗"
					})]
				}) }, e.id))
			}),
			/* @__PURE__ */ C("p", {
				className: "lnk__quote",
				children: n
			})
		]
	});
}
//#endregion
//#region src/components/Listbox/Listbox.tsx
function PT({ options: e, label: t = "Paper stock — select one or more", ariaLabel: n = "Paper stock", defaultSelectedKeys: r = [], selectionMode: i = "multiple", onSelectionChange: a, className: o = "lb" }) {
	let [s, c] = y(new Set(r));
	function l(e) {
		c(e), a?.(e);
	}
	return /* @__PURE__ */ w("div", {
		className: o,
		children: [/* @__PURE__ */ C(Ns, {
			className: "mono lb__label",
			children: t
		}), /* @__PURE__ */ C(gf, {
			"aria-label": n,
			selectionMode: i,
			selectedKeys: s,
			onSelectionChange: l,
			className: "lb__root",
			children: e.map((e) => /* @__PURE__ */ w(bf, {
				id: e.id,
				textValue: e.name,
				className: "lb__opt",
				children: [
					/* @__PURE__ */ C("span", {
						className: "lb__optName",
						children: e.name
					}),
					/* @__PURE__ */ C("span", {
						className: "lb__optNote",
						children: e.note
					}),
					/* @__PURE__ */ C("span", {
						className: "lb__check",
						"aria-hidden": "true",
						children: "✓"
					})
				]
			}, e.id))
		})]
	});
}
function FT(e, t) {
	let n = Array.from(t);
	return n.length === 0 ? "(none)" : n.map((t) => e.find((e) => e.id === t)?.name).join(", ");
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var IT = [
	"top",
	"right",
	"bottom",
	"left"
], LT = Math.min, RT = Math.max, zT = Math.round, BT = Math.floor, VT = (e) => ({
	x: e,
	y: e
}), HT = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function UT(e, t, n) {
	return RT(e, LT(t, n));
}
function WT(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function GT(e) {
	return e.split("-")[0];
}
function KT(e) {
	return e.split("-")[1];
}
function qT(e) {
	return e === "x" ? "y" : "x";
}
function JT(e) {
	return e === "y" ? "height" : "width";
}
function YT(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function XT(e) {
	return qT(YT(e));
}
function ZT(e, t, n) {
	n === void 0 && (n = !1);
	let r = KT(e), i = XT(e), a = JT(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = oE(o)), [o, oE(o)];
}
function QT(e) {
	let t = oE(e);
	return [
		$T(e),
		t,
		$T(t)
	];
}
function $T(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var eE = ["left", "right"], tE = ["right", "left"], nE = ["top", "bottom"], rE = ["bottom", "top"];
function iE(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? tE : eE : t ? eE : tE;
		case "left":
		case "right": return t ? nE : rE;
		default: return [];
	}
}
function aE(e, t, n, r) {
	let i = KT(e), a = iE(GT(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map($T)))), a;
}
function oE(e) {
	let t = GT(e);
	return HT[t] + e.slice(t.length);
}
function sE(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function cE(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : sE(e);
}
function lE(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function uE(e, t, n) {
	let { reference: r, floating: i } = e, a = YT(t), o = XT(t), s = JT(o), c = GT(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (KT(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function dE(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = WT(t, e), p = cE(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = lE(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = lE(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var fE = 50, pE = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: dE
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = uE(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < fE && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = uE(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, mE = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = WT(e, t) || {};
		if (l == null) return {};
		let d = cE(u), f = {
			x: n,
			y: r
		}, p = XT(i), m = JT(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = LT(d[_], T), D = LT(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = UT(O, A, k), M = !c.arrow && KT(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), hE = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = WT(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = GT(r), _ = YT(o), v = GT(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [oE(o)] : QT(o)), x = p !== "none";
			!d && x && b.push(...aE(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ZT(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== YT(t)) || T.every((e) => YT(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = YT(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function gE(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function _E(e) {
	return IT.some((t) => e[t] >= 0);
}
var vE = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = WT(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = gE(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: _E(e)
					} };
				}
				case "escaped": {
					let e = gE(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: _E(e)
					} };
				}
				default: return {};
			}
		}
	};
}, yE = /*#__PURE__*/ new Set(["left", "top"]);
async function bE(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = GT(n), s = KT(n), c = YT(n) === "y", l = yE.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = WT(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var xE = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await bE(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, SE = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = WT(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = YT(GT(i)), p = qT(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = UT(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = UT(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, CE = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = WT(e, t), u = {
				x: n,
				y: r
			}, d = YT(i), f = qT(d), p = u[f], m = u[d], h = WT(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = yE.has(GT(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, wE = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = WT(e, t), u = await o.detectOverflow(t, l), d = GT(i), f = KT(i), p = YT(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = LT(h - u[g], v), x = LT(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = RT(u.left, 0), t = RT(u.right, 0), n = RT(u.top, 0), r = RT(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : RT(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : RT(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function TE() {
	return typeof window < "u";
}
function EE(e) {
	return kE(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function DE(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function OE(e) {
	return ((kE(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function kE(e) {
	return TE() ? e instanceof Node || e instanceof DE(e).Node : !1;
}
function AE(e) {
	return TE() ? e instanceof Element || e instanceof DE(e).Element : !1;
}
function jE(e) {
	return TE() ? e instanceof HTMLElement || e instanceof DE(e).HTMLElement : !1;
}
function ME(e) {
	return !TE() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof DE(e).ShadowRoot;
}
function NE(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = WE(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function PE(e) {
	return /^(table|td|th)$/.test(EE(e));
}
function FE(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var IE = /transform|translate|scale|rotate|perspective|filter/, LE = /paint|layout|strict|content/, RE = (e) => !!e && e !== "none", zE;
function BE(e) {
	let t = AE(e) ? WE(e) : e;
	return RE(t.transform) || RE(t.translate) || RE(t.scale) || RE(t.rotate) || RE(t.perspective) || !HE() && (RE(t.backdropFilter) || RE(t.filter)) || IE.test(t.willChange || "") || LE.test(t.contain || "");
}
function VE(e) {
	let t = KE(e);
	for (; jE(t) && !UE(t);) {
		if (BE(t)) return t;
		if (FE(t)) return null;
		t = KE(t);
	}
	return null;
}
function HE() {
	return zE ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), zE;
}
function UE(e) {
	return /^(html|body|#document)$/.test(EE(e));
}
function WE(e) {
	return DE(e).getComputedStyle(e);
}
function GE(e) {
	return AE(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function KE(e) {
	if (EE(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ME(e) && e.host || OE(e);
	return ME(t) ? t.host : t;
}
function qE(e) {
	let t = KE(e);
	return UE(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : jE(t) && NE(t) ? t : qE(t);
}
function JE(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = qE(e), i = r === e.ownerDocument?.body, a = DE(r);
	if (i) {
		let e = YE(a);
		return t.concat(a, a.visualViewport || [], NE(r) ? r : [], e && n ? JE(e) : []);
	} else return t.concat(r, JE(r, [], n));
}
function YE(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function XE(e) {
	let t = WE(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = jE(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = zT(n) !== a || zT(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ZE(e) {
	return AE(e) ? e : e.contextElement;
}
function QE(e) {
	let t = ZE(e);
	if (!jE(t)) return VT(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = XE(t), o = (a ? zT(n.width) : n.width) / r, s = (a ? zT(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var $E = /*#__PURE__*/ VT(0);
function eD(e) {
	let t = DE(e);
	return !HE() || !t.visualViewport ? $E : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function tD(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== DE(e) ? !1 : t;
}
function nD(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ZE(e), o = VT(1);
	t && (r ? AE(r) && (o = QE(r)) : o = QE(e));
	let s = tD(a, n, r) ? eD(a) : VT(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = DE(a), t = r && AE(r) ? DE(r) : r, n = e, i = YE(n);
		for (; i && r && t !== n;) {
			let e = QE(i), t = i.getBoundingClientRect(), r = WE(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = DE(i), i = YE(n);
		}
	}
	return lE({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function rD(e, t) {
	let n = GE(e).scrollLeft;
	return t ? t.left + n : nD(OE(e)).left + n;
}
function iD(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - rD(e, n),
		y: n.top + t.scrollTop
	};
}
function aD(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = OE(r), s = t ? FE(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = VT(1), u = VT(0), d = jE(r);
	if ((d || !d && !a) && ((EE(r) !== "body" || NE(o)) && (c = GE(r)), d)) {
		let e = nD(r);
		l = QE(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? iD(o, c) : VT(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function oD(e) {
	return Array.from(e.getClientRects());
}
function sD(e) {
	let t = OE(e), n = GE(e), r = e.ownerDocument.body, i = RT(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = RT(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + rD(e), s = -n.scrollTop;
	return WE(r).direction === "rtl" && (o += RT(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var cD = 25;
function lD(e, t) {
	let n = DE(e), r = OE(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = HE();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = rD(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= cD && (a -= o);
	} else l <= cD && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function uD(e, t) {
	let n = nD(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = jE(e) ? QE(e) : VT(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function dD(e, t, n) {
	let r;
	if (t === "viewport") r = lD(e, n);
	else if (t === "document") r = sD(OE(e));
	else if (AE(t)) r = uD(t, n);
	else {
		let n = eD(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return lE(r);
}
function fD(e, t) {
	let n = KE(e);
	return n === t || !AE(n) || UE(n) ? !1 : WE(n).position === "fixed" || fD(n, t);
}
function pD(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = JE(e, [], !1).filter((e) => AE(e) && EE(e) !== "body"), i = null, a = WE(e).position === "fixed", o = a ? KE(e) : e;
	for (; AE(o) && !UE(o);) {
		let t = WE(o), n = BE(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || NE(o) && !n && fD(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = KE(o);
	}
	return t.set(e, r), r;
}
function mD(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? FE(t) ? [] : pD(t, this._c) : [].concat(n), r], o = dD(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = dD(t, a[e], i);
		s = RT(n.top, s), c = LT(n.right, c), l = LT(n.bottom, l), u = RT(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function hD(e) {
	let { width: t, height: n } = XE(e);
	return {
		width: t,
		height: n
	};
}
function gD(e, t, n) {
	let r = jE(t), i = OE(t), a = n === "fixed", o = nD(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = VT(0);
	function l() {
		c.x = rD(i);
	}
	if (r || !r && !a) if ((EE(t) !== "body" || NE(i)) && (s = GE(t)), r) {
		let e = nD(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? iD(i, s) : VT(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function _D(e) {
	return WE(e).position === "static";
}
function vD(e, t) {
	if (!jE(e) || WE(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return OE(e) === n && (n = n.ownerDocument.body), n;
}
function yD(e, t) {
	let n = DE(e);
	if (FE(e)) return n;
	if (!jE(e)) {
		let t = KE(e);
		for (; t && !UE(t);) {
			if (AE(t) && !_D(t)) return t;
			t = KE(t);
		}
		return n;
	}
	let r = vD(e, t);
	for (; r && PE(r) && _D(r);) r = vD(r, t);
	return r && UE(r) && _D(r) && !BE(r) ? n : r || VE(e) || n;
}
var bD = async function(e) {
	let t = this.getOffsetParent || yD, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: gD(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function xD(e) {
	return WE(e).direction === "rtl";
}
var SD = {
	convertOffsetParentRelativeRectToViewportRelativeRect: aD,
	getDocumentElement: OE,
	getClippingRect: mD,
	getOffsetParent: yD,
	getElementRects: bD,
	getClientRects: oD,
	getDimensions: hD,
	getScale: QE,
	isElement: AE,
	isRTL: xD
};
function CD(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function wD(e, t) {
	let n = null, r, i = OE(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = BT(d), h = BT(i.clientWidth - (u + f)), g = BT(i.clientHeight - (d + p)), _ = BT(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: RT(0, LT(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !CD(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function TD(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ZE(e), u = i || a ? [...l ? JE(l) : [], ...t ? JE(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? wD(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? nD(e) : null;
	c && g();
	function g() {
		let t = nD(e);
		h && !CD(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var ED = xE, DD = SE, OD = hE, kD = wE, AD = vE, jD = mE, MD = CE, ND = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: SD,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return pE(e, t, {
		...i,
		platform: a
	});
}, PD = typeof document < "u" ? h : function() {};
function FD(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!FD(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !FD(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function ID(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function LD(e, t) {
	let n = ID(e);
	return Math.round(t * n) / n;
}
function RD(t) {
	let n = e.useRef(t);
	return PD(() => {
		n.current = t;
	}), n;
}
function zD(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	FD(p, i) || m(i);
	let [h, g] = e.useState(null), [_, v] = e.useState(null), y = e.useCallback((e) => {
		e !== C.current && (C.current = e, g(e));
	}, []), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, v(e));
	}, []), x = o || h, S = s || _, C = e.useRef(null), w = e.useRef(null), E = e.useRef(d), D = l != null, O = RD(l), k = RD(a), A = RD(u), j = e.useCallback(() => {
		if (!C.current || !w.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), ND(C.current, w.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !FD(E.current, t) && (E.current = t, T.flushSync(() => {
				f(t);
			}));
		});
	}, [
		p,
		n,
		r,
		k,
		A
	]);
	PD(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	PD(() => (M.current = !0, () => {
		M.current = !1;
	}), []), PD(() => {
		if (x && (C.current = x), S && (w.current = S), x && S) {
			if (O.current) return O.current(x, S, j);
			j();
		}
	}, [
		x,
		S,
		j,
		O,
		D
	]);
	let N = e.useMemo(() => ({
		reference: C,
		floating: w,
		setReference: y,
		setFloating: b
	}), [y, b]), P = e.useMemo(() => ({
		reference: x,
		floating: S
	}), [x, S]), F = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = LD(P.floating, d.x), n = LD(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...ID(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		c,
		P.floating,
		d.x,
		d.y
	]);
	return e.useMemo(() => ({
		...d,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: F
	}), [
		d,
		j,
		N,
		P,
		F
	]);
}
var BD = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : jD({
				element: r.current,
				padding: i
			}).fn(n) : r ? jD({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, VD = (e, t) => {
	let n = ED(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, HD = (e, t) => {
	let n = DD(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, UD = (e, t) => ({
	fn: MD(e).fn,
	options: [e, t]
}), WD = (e, t) => {
	let n = OD(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, GD = (e, t) => {
	let n = kD(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, KD = (e, t) => {
	let n = AD(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, qD = (e, t) => {
	let n = BD(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, JD = "Arrow", YD = e.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ C(U.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ C("polygon", { points: "0,0 30,0 15,10" })
	});
});
YD.displayName = JD;
var XD = YD, ZD = "Popper", [QD, $D] = B(ZD), [eO, tO] = QD(ZD), nO = (t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null);
	return /* @__PURE__ */ C(eO, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		children: r
	});
};
nO.displayName = ZD;
var rO = "PopperAnchor", iO = e.forwardRef((t, n) => {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = tO(rO, r), s = e.useRef(null), c = V(n, s), l = e.useRef(null);
	return e.useEffect(() => {
		let e = l.current;
		l.current = i?.current || s.current, e !== l.current && o.onAnchorChange(l.current);
	}), i ? null : /* @__PURE__ */ C(U.div, {
		...a,
		ref: c
	});
});
iO.displayName = rO;
var aO = "PopperContent", [oO, sO] = QD(aO), cO = e.forwardRef((t, n) => {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: p = !1, updatePositionStrategy: m = "optimized", onPlaced: h, ...g } = t, _ = tO(aO, r), [v, y] = e.useState(null), b = V(n, (e) => y(e)), [x, S] = e.useState(null), w = LC(x), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(fO),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = zD({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: (...e) => TD(...e, { animationFrame: m === "always" }),
		elements: { reference: _.anchor },
		middleware: [
			VD({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && HD({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === "partial" ? UD() : void 0,
				...j
			}),
			l && WD({ ...j }),
			GD({
				...j,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			x && qD({
				element: x,
				padding: c
			}),
			pO({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && KD({
				strategy: "referenceHidden",
				...j
			})
		]
	}), [L, R] = mO(P), z = wt(h);
	fe(() => {
		F && z?.();
	}, [F, z]);
	let ee = I.arrow?.x, B = I.arrow?.y, te = I.arrow?.centerOffset !== 0, [ne, re] = e.useState();
	return fe(() => {
		v && re(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ C("div", {
		ref: M.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: F ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ne,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ C(oO, {
			scope: r,
			placedSide: L,
			onArrowChange: S,
			arrowX: ee,
			arrowY: B,
			shouldHideArrow: te,
			children: /* @__PURE__ */ C(U.div, {
				"data-side": L,
				"data-align": R,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: F ? void 0 : "none"
				}
			})
		})
	});
});
cO.displayName = aO;
var lO = "PopperArrow", uO = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, dO = e.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = sO(lO, n), a = uO[i.placedSide];
	return /* @__PURE__ */ C("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ C(XD, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
dO.displayName = lO;
function fO(e) {
	return e !== null;
}
var pO = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = mO(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function mO(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var hO = nO, gO = iO, _O = cO, vO = dO, yO = ["Enter", " "], bO = [
	"ArrowDown",
	"PageUp",
	"Home"
], xO = [
	"ArrowUp",
	"PageDown",
	"End"
], SO = [...bO, ...xO], CO = {
	ltr: [...yO, "ArrowRight"],
	rtl: [...yO, "ArrowLeft"]
}, wO = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, TO = "Menu", [EO, DO, OO] = de(TO), [kO, AO] = B(TO, [
	OO,
	$D,
	Mt
]), jO = $D(), MO = Mt(), [NO, PO] = kO(TO), [FO, IO] = kO(TO), LO = (t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = jO(n), [l, u] = e.useState(null), d = e.useRef(!1), f = wt(o), p = He(a);
	return e.useEffect(() => {
		let e = () => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => d.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ C(hO, {
		...c,
		children: /* @__PURE__ */ C(NO, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ C(FO, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
};
LO.displayName = TO;
var RO = "MenuAnchor", zO = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(gO, {
		...jO(n),
		...r,
		ref: t
	});
});
zO.displayName = RO;
var BO = "MenuPortal", [VO, HO] = kO(BO, { forceMount: void 0 }), UO = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = PO(BO, t);
	return /* @__PURE__ */ C(VO, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ C(ye, {
			present: n || a.open,
			children: /* @__PURE__ */ C(Ry, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
UO.displayName = BO;
var WO = "MenuContent", [GO, KO] = kO(WO), qO = e.forwardRef((e, t) => {
	let n = HO(WO, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = PO(WO, e.__scopeMenu), o = IO(WO, e.__scopeMenu);
	return /* @__PURE__ */ C(EO.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ C(ye, {
			present: r || a.open,
			children: /* @__PURE__ */ C(EO.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ C(JO, {
					...i,
					ref: t
				}) : /* @__PURE__ */ C(YO, {
					...i,
					ref: t
				})
			})
		})
	});
}), JO = e.forwardRef((t, n) => {
	let r = PO(WO, t.__scopeMenu), i = e.useRef(null), a = V(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return ax(e);
	}, []), /* @__PURE__ */ C(ZO, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: H(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), YO = e.forwardRef((e, t) => {
	let n = PO(WO, e.__scopeMenu);
	return /* @__PURE__ */ C(ZO, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), XO = /* @__PURE__ */ ie("MenuContent.ScrollLock"), ZO = e.forwardRef((t, n) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, _ = PO(WO, r), v = IO(WO, r), y = jO(r), b = MO(r), x = DO(r), [S, w] = e.useState(null), T = e.useRef(null), E = V(n, T, _.onContentChange), D = e.useRef(0), O = e.useRef(""), k = e.useRef(0), A = e.useRef(null), j = e.useRef("right"), M = e.useRef(0), N = h ? Xb : e.Fragment, P = h ? {
		as: XO,
		allowPinchZoom: !0
	} : void 0, F = (e) => {
		let t = O.current + e, n = x().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Fk(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			O.current = t, window.clearTimeout(D.current), t !== "" && (D.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	e.useEffect(() => () => window.clearTimeout(D.current), []), By();
	let I = e.useCallback((e) => j.current === A.current?.side && Lk(e, A.current?.area), []);
	return /* @__PURE__ */ C(GO, {
		scope: r,
		searchRef: O,
		onItemEnter: e.useCallback((e) => {
			I(e) && e.preventDefault();
		}, [I]),
		onItemLeave: e.useCallback((e) => {
			I(e) || (T.current?.focus(), w(null));
		}, [I]),
		onTriggerLeave: e.useCallback((e) => {
			I(e) && e.preventDefault();
		}, [I]),
		pointerGraceTimerRef: k,
		onPointerGraceIntentChange: e.useCallback((e) => {
			A.current = e;
		}, []),
		children: /* @__PURE__ */ C(N, {
			...P,
			children: /* @__PURE__ */ C(Ty, {
				asChild: !0,
				trapped: a,
				onMountAutoFocus: H(o, (e) => {
					e.preventDefault(), T.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: s,
				children: /* @__PURE__ */ C(my, {
					asChild: !0,
					disableOutsidePointerEvents: c,
					onEscapeKeyDown: u,
					onPointerDownOutside: d,
					onFocusOutside: f,
					onInteractOutside: p,
					onDismiss: m,
					children: /* @__PURE__ */ C(Wt, {
						asChild: !0,
						...b,
						dir: v.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: S,
						onCurrentTabStopIdChange: w,
						onEntryFocus: H(l, (e) => {
							v.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ C(_O, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": Ak(_.open),
							"data-radix-menu-content": "",
							dir: v.dir,
							...y,
							...g,
							ref: E,
							style: {
								outline: "none",
								...g.style
							},
							onKeyDown: H(g.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && F(e.key));
								let i = T.current;
								if (e.target !== i || !SO.includes(e.key)) return;
								e.preventDefault();
								let a = x().filter((e) => !e.disabled).map((e) => e.ref.current);
								xO.includes(e.key) && a.reverse(), Nk(a);
							}),
							onBlur: H(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(D.current), O.current = "");
							}),
							onPointerMove: H(t.onPointerMove, Rk((e) => {
								let t = e.target, n = M.current !== e.clientX;
								e.currentTarget.contains(t) && n && (j.current = e.clientX > M.current ? "right" : "left", M.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
qO.displayName = WO;
var QO = "MenuGroup", $O = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(U.div, {
		role: "group",
		...r,
		ref: t
	});
});
$O.displayName = QO;
var ek = "MenuLabel", tk = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(U.div, {
		...r,
		ref: t
	});
});
tk.displayName = ek;
var nk = "MenuItem", rk = "menu.itemSelect", ik = e.forwardRef((t, n) => {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = IO(nk, t.__scopeMenu), c = KO(nk, t.__scopeMenu), l = V(n, o), u = e.useRef(!1), d = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(rk, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(rk, (e) => i?.(e), { once: !0 }), _e(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ C(ak, {
		...a,
		ref: l,
		disabled: r,
		onClick: H(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: H(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: H(t.onKeyDown, (e) => {
			let t = c.searchRef.current !== "";
			r || t && e.key === " " || yO.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
ik.displayName = nk;
var ak = e.forwardRef((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = KO(nk, r), c = MO(r), l = e.useRef(null), u = V(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ C(EO.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ C(Gt, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ C(U.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: H(t.onPointerMove, Rk((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: H(t.onPointerLeave, Rk((e) => s.onItemLeave(e))),
				onFocus: H(t.onFocus, () => f(!0)),
				onBlur: H(t.onBlur, () => f(!1))
			})
		})
	});
}), ok = "MenuCheckboxItem", sk = e.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ C(hk, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ C(ik, {
			role: "menuitemcheckbox",
			"aria-checked": jk(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Mk(n),
			onSelect: H(i.onSelect, () => r?.(jk(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
sk.displayName = ok;
var ck = "MenuRadioGroup", [lk, uk] = kO(ck, {
	value: void 0,
	onValueChange: () => {}
}), dk = e.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = wt(r);
	return /* @__PURE__ */ C(lk, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ C($O, {
			...i,
			ref: t
		})
	});
});
dk.displayName = ck;
var fk = "MenuRadioItem", pk = e.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = uk(fk, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ C(hk, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ C(ik, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Mk(a),
			onSelect: H(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
pk.displayName = fk;
var mk = "MenuItemIndicator", [hk, gk] = kO(mk, { checked: !1 }), _k = e.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = gk(mk, n);
	return /* @__PURE__ */ C(ye, {
		present: r || jk(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ C(U.span, {
			...i,
			ref: t,
			"data-state": Mk(a.checked)
		})
	});
});
_k.displayName = mk;
var vk = "MenuSeparator", yk = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(U.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
yk.displayName = vk;
var bk = "MenuArrow", xk = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(vO, {
		...jO(n),
		...r,
		ref: t
	});
});
xk.displayName = bk;
var Sk = "MenuSub", [Ck, wk] = kO(Sk), Tk = (t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = PO(Sk, n), s = jO(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = wt(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ C(hO, {
		...s,
		children: /* @__PURE__ */ C(NO, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ C(Ck, {
				scope: n,
				contentId: Te(),
				triggerId: Te(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
};
Tk.displayName = Sk;
var Ek = "MenuSubTrigger", Dk = e.forwardRef((t, n) => {
	let r = PO(Ek, t.__scopeMenu), i = IO(Ek, t.__scopeMenu), a = wk(Ek, t.__scopeMenu), o = KO(Ek, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ C(zO, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ C(ak, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": a.contentId,
			"data-state": Ak(r.open),
			...t,
			ref: re(n, a.onTriggerChange),
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: H(t.onPointerMove, Rk((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: H(t.onPointerLeave, Rk((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: H(t.onKeyDown, (e) => {
				let n = o.searchRef.current !== "";
				t.disabled || n && e.key === " " || CO[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
});
Dk.displayName = Ek;
var Ok = "MenuSubContent", kk = e.forwardRef((t, n) => {
	let r = HO(WO, t.__scopeMenu), { forceMount: i = r.forceMount, ...a } = t, o = PO(WO, t.__scopeMenu), s = IO(WO, t.__scopeMenu), c = wk(Ok, t.__scopeMenu), l = e.useRef(null), u = V(n, l);
	return /* @__PURE__ */ C(EO.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ C(ye, {
			present: i || o.open,
			children: /* @__PURE__ */ C(EO.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ C(ZO, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: "start",
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: H(t.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: H(t.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: H(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = wO[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
kk.displayName = Ok;
function Ak(e) {
	return e ? "open" : "closed";
}
function jk(e) {
	return e === "indeterminate";
}
function Mk(e) {
	return jk(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Nk(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Pk(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Fk(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Pk(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Ik(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Lk(e, t) {
	return t ? Ik({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Rk(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var zk = LO, Bk = zO, Vk = UO, Hk = qO, Uk = $O, Wk = tk, Gk = ik, Kk = sk, qk = dk, Jk = pk, Yk = _k, Xk = yk, Zk = xk, Qk = Tk, $k = Dk, eA = kk, tA = "DropdownMenu", [nA, rA] = B(tA, [AO]), iA = AO(), [aA, oA] = nA(tA), sA = (t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = iA(n), u = e.useRef(null), [d, f] = me({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: tA
	});
	return /* @__PURE__ */ C(aA, {
		scope: n,
		triggerId: Te(),
		triggerRef: u,
		contentId: Te(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ C(zk, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
};
sA.displayName = tA;
var cA = "DropdownMenuTrigger", lA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = oA(cA, n);
	return /* @__PURE__ */ C(Bk, {
		asChild: !0,
		...iA(n),
		children: /* @__PURE__ */ C(U.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: re(t, a.triggerRef),
			onPointerDown: H(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: H(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
lA.displayName = cA;
var uA = "DropdownMenuPortal", dA = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e;
	return /* @__PURE__ */ C(Vk, {
		...iA(t),
		...n
	});
};
dA.displayName = uA;
var fA = "DropdownMenuContent", pA = e.forwardRef((t, n) => {
	let { __scopeDropdownMenu: r, ...i } = t, a = oA(fA, r), o = iA(r), s = e.useRef(!1);
	return /* @__PURE__ */ C(Hk, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: H(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: H(t.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
		}),
		style: {
			...t.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
pA.displayName = fA;
var mA = "DropdownMenuGroup", hA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Uk, {
		...iA(n),
		...r,
		ref: t
	});
});
hA.displayName = mA;
var gA = "DropdownMenuLabel", _A = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Wk, {
		...iA(n),
		...r,
		ref: t
	});
});
_A.displayName = gA;
var vA = "DropdownMenuItem", yA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Gk, {
		...iA(n),
		...r,
		ref: t
	});
});
yA.displayName = vA;
var bA = "DropdownMenuCheckboxItem", xA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Kk, {
		...iA(n),
		...r,
		ref: t
	});
});
xA.displayName = bA;
var SA = "DropdownMenuRadioGroup", CA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(qk, {
		...iA(n),
		...r,
		ref: t
	});
});
CA.displayName = SA;
var wA = "DropdownMenuRadioItem", TA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Jk, {
		...iA(n),
		...r,
		ref: t
	});
});
TA.displayName = wA;
var EA = "DropdownMenuItemIndicator", DA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Yk, {
		...iA(n),
		...r,
		ref: t
	});
});
DA.displayName = EA;
var OA = "DropdownMenuSeparator", kA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Xk, {
		...iA(n),
		...r,
		ref: t
	});
});
kA.displayName = OA;
var AA = "DropdownMenuArrow", jA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(Zk, {
		...iA(n),
		...r,
		ref: t
	});
});
jA.displayName = AA;
var MA = (e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = iA(t), [s, c] = me({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ C(Qk, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, NA = "DropdownMenuSubTrigger", PA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C($k, {
		...iA(n),
		...r,
		ref: t
	});
});
PA.displayName = NA;
var FA = "DropdownMenuSubContent", IA = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e;
	return /* @__PURE__ */ C(eA, {
		...iA(n),
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
IA.displayName = FA;
var LA = sA, RA = lA, zA = dA, BA = pA, VA = _A, HA = yA, UA = kA, WA = MA, GA = PA, KA = IA;
//#endregion
//#region src/components/MenuButton/MenuButton.tsx
function qA({ onSelect: e, className: t = "menu" }) {
	return /* @__PURE__ */ C("div", {
		className: t,
		children: /* @__PURE__ */ w(LA, { children: [/* @__PURE__ */ C(RA, {
			asChild: !0,
			children: /* @__PURE__ */ w("button", {
				className: "s-btn",
				children: ["File actions ", /* @__PURE__ */ C("span", {
					"aria-hidden": "true",
					children: "▾"
				})]
			})
		}), /* @__PURE__ */ C(zA, { children: /* @__PURE__ */ w(BA, {
			className: "menu__content",
			align: "start",
			sideOffset: 6,
			children: [
				/* @__PURE__ */ C(VA, {
					className: "menu__label mono",
					children: "File"
				}),
				/* @__PURE__ */ w(HA, {
					className: "menu__item",
					onSelect: () => e?.("New specimen"),
					children: ["New specimen ", /* @__PURE__ */ C("span", {
						className: "mono menu__kbd",
						children: "⌘N"
					})]
				}),
				/* @__PURE__ */ w(HA, {
					className: "menu__item",
					onSelect: () => e?.("Open from disk"),
					children: ["Open from disk… ", /* @__PURE__ */ C("span", {
						className: "mono menu__kbd",
						children: "⌘O"
					})]
				}),
				/* @__PURE__ */ C(UA, { className: "menu__sep" }),
				/* @__PURE__ */ C(VA, {
					className: "menu__label mono",
					children: "Export"
				}),
				/* @__PURE__ */ C(HA, {
					className: "menu__item",
					onSelect: () => e?.("Export as PDF"),
					children: "Export as PDF"
				}),
				/* @__PURE__ */ C(HA, {
					className: "menu__item",
					onSelect: () => e?.("Export as HTML"),
					children: "Export as HTML"
				}),
				/* @__PURE__ */ w(WA, { children: [/* @__PURE__ */ w(GA, {
					className: "menu__item menu__item--sub",
					children: ["More formats ", /* @__PURE__ */ C("span", {
						"aria-hidden": "true",
						children: "›"
					})]
				}), /* @__PURE__ */ C(zA, { children: /* @__PURE__ */ w(KA, {
					className: "menu__content",
					sideOffset: 4,
					alignOffset: -4,
					children: [/* @__PURE__ */ C(HA, {
						className: "menu__item",
						onSelect: () => e?.("Export as EPUB"),
						children: "EPUB"
					}), /* @__PURE__ */ C(HA, {
						className: "menu__item",
						onSelect: () => e?.("Export as Plain text"),
						children: "Plain text"
					})]
				}) })] }),
				/* @__PURE__ */ C(UA, { className: "menu__sep" }),
				/* @__PURE__ */ C(HA, {
					className: "menu__item menu__item--danger",
					onSelect: () => e?.("Discarded changes"),
					children: "Discard changes"
				})
			]
		}) })] })
	});
}
//#endregion
//#region node_modules/@radix-ui/react-menubar/dist/index.mjs
var JA = "Menubar", [YA, XA, ZA] = de(JA), [QA, $A] = B(JA, [ZA, Mt]), ej = AO(), tj = Mt(), [nj, rj] = QA(JA), ij = e.forwardRef((t, n) => {
	let { __scopeMenubar: r, value: i, onValueChange: a, defaultValue: o, loop: s = !0, dir: c, ...l } = t, u = He(c), d = tj(r), [f, p] = me({
		prop: i,
		onChange: a,
		defaultProp: o ?? "",
		caller: JA
	}), [m, h] = e.useState(null);
	return /* @__PURE__ */ C(nj, {
		scope: r,
		value: f,
		onMenuOpen: e.useCallback((e) => {
			p(e), h(e);
		}, [p]),
		onMenuClose: e.useCallback(() => p(""), [p]),
		onMenuToggle: e.useCallback((e) => {
			p((t) => t ? "" : e), h(e);
		}, [p]),
		dir: u,
		loop: s,
		children: /* @__PURE__ */ C(YA.Provider, {
			scope: r,
			children: /* @__PURE__ */ C(YA.Slot, {
				scope: r,
				children: /* @__PURE__ */ C(Wt, {
					asChild: !0,
					...d,
					orientation: "horizontal",
					loop: s,
					dir: u,
					currentTabStopId: m,
					onCurrentTabStopIdChange: h,
					children: /* @__PURE__ */ C(U.div, {
						role: "menubar",
						...l,
						ref: n
					})
				})
			})
		})
	});
});
ij.displayName = JA;
var aj = "MenubarMenu", [oj, sj] = QA(aj), cj = (t) => {
	let { __scopeMenubar: n, value: r, ...i } = t, a = Te(), o = r || a || "LEGACY_REACT_AUTO_VALUE", s = rj(aj, n), c = ej(n), l = e.useRef(null), u = e.useRef(!1), d = s.value === o;
	return e.useEffect(() => {
		d || (u.current = !1);
	}, [d]), /* @__PURE__ */ C(oj, {
		scope: n,
		value: o,
		triggerId: Te(),
		triggerRef: l,
		contentId: Te(),
		wasKeyboardTriggerOpenRef: u,
		children: /* @__PURE__ */ C(zk, {
			...c,
			open: d,
			onOpenChange: (e) => {
				e || s.onMenuClose();
			},
			modal: !1,
			dir: s.dir,
			...i
		})
	});
};
cj.displayName = aj;
var lj = "MenubarTrigger", uj = e.forwardRef((t, n) => {
	let { __scopeMenubar: r, disabled: i = !1, ...a } = t, o = tj(r), s = ej(r), c = rj(lj, r), l = sj(lj, r), u = e.useRef(null), d = V(n, u, l.triggerRef), [f, p] = e.useState(!1), m = c.value === l.value;
	return /* @__PURE__ */ C(YA.ItemSlot, {
		scope: r,
		value: l.value,
		disabled: i,
		children: /* @__PURE__ */ C(Gt, {
			asChild: !0,
			...o,
			focusable: !i,
			tabStopId: l.value,
			children: /* @__PURE__ */ C(Bk, {
				asChild: !0,
				...s,
				children: /* @__PURE__ */ C(U.button, {
					type: "button",
					role: "menuitem",
					id: l.triggerId,
					"aria-haspopup": "menu",
					"aria-expanded": m,
					"aria-controls": m ? l.contentId : void 0,
					"data-highlighted": f ? "" : void 0,
					"data-state": m ? "open" : "closed",
					"data-disabled": i ? "" : void 0,
					disabled: i,
					...a,
					ref: d,
					onPointerDown: H(t.onPointerDown, (e) => {
						!i && e.button === 0 && e.ctrlKey === !1 && (c.onMenuOpen(l.value), m || e.preventDefault());
					}),
					onPointerEnter: H(t.onPointerEnter, () => {
						c.value && !m && (c.onMenuOpen(l.value), u.current?.focus());
					}),
					onKeyDown: H(t.onKeyDown, (e) => {
						i || (["Enter", " "].includes(e.key) && c.onMenuToggle(l.value), e.key === "ArrowDown" && c.onMenuOpen(l.value), [
							"Enter",
							" ",
							"ArrowDown"
						].includes(e.key) && (l.wasKeyboardTriggerOpenRef.current = !0, e.preventDefault()));
					}),
					onFocus: H(t.onFocus, () => p(!0)),
					onBlur: H(t.onBlur, () => p(!1))
				})
			})
		})
	});
});
uj.displayName = lj;
var dj = "MenubarPortal", fj = (e) => {
	let { __scopeMenubar: t, ...n } = e;
	return /* @__PURE__ */ C(Vk, {
		...ej(t),
		...n
	});
};
fj.displayName = dj;
var pj = "MenubarContent", mj = e.forwardRef((t, n) => {
	let { __scopeMenubar: r, align: i = "start", ...a } = t, o = ej(r), s = rj(pj, r), c = sj(pj, r), l = XA(r), u = e.useRef(!1);
	return /* @__PURE__ */ C(Hk, {
		id: c.contentId,
		"aria-labelledby": c.triggerId,
		"data-radix-menubar-content": "",
		...o,
		...a,
		ref: n,
		align: i,
		onCloseAutoFocus: H(t.onCloseAutoFocus, (e) => {
			!s.value && !u.current && c.triggerRef.current?.focus(), u.current = !1, e.preventDefault();
		}),
		onFocusOutside: H(t.onFocusOutside, (e) => {
			let t = e.target;
			l().some((e) => e.ref.current?.contains(t)) && e.preventDefault();
		}),
		onInteractOutside: H(t.onInteractOutside, () => {
			u.current = !0;
		}),
		onEntryFocus: (e) => {
			c.wasKeyboardTriggerOpenRef.current || e.preventDefault();
		},
		onKeyDown: H(t.onKeyDown, (e) => {
			if (["ArrowRight", "ArrowLeft"].includes(e.key)) {
				let t = e.target, n = t.hasAttribute("data-radix-menubar-subtrigger"), r = t.closest("[data-radix-menubar-content]") !== e.currentTarget, i = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === e.key;
				if (!i && n || r && i) return;
				let a = l().filter((e) => !e.disabled).map((e) => e.value);
				i && a.reverse();
				let o = a.indexOf(c.value);
				a = s.loop ? zj(a, o + 1) : a.slice(o + 1);
				let [u] = a;
				u && s.onMenuOpen(u);
			}
		}, { checkForDefaultPrevented: !1 }),
		style: {
			...t.style,
			"--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
			"--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
			"--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
mj.displayName = pj;
var hj = "MenubarGroup", gj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Uk, {
		...ej(n),
		...r,
		ref: t
	});
});
gj.displayName = hj;
var _j = "MenubarLabel", vj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Wk, {
		...ej(n),
		...r,
		ref: t
	});
});
vj.displayName = _j;
var yj = "MenubarItem", bj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Gk, {
		...ej(n),
		...r,
		ref: t
	});
});
bj.displayName = yj;
var xj = "MenubarCheckboxItem", Sj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Kk, {
		...ej(n),
		...r,
		ref: t
	});
});
Sj.displayName = xj;
var Cj = "MenubarRadioGroup", wj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(qk, {
		...ej(n),
		...r,
		ref: t
	});
});
wj.displayName = Cj;
var Tj = "MenubarRadioItem", Ej = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Jk, {
		...ej(n),
		...r,
		ref: t
	});
});
Ej.displayName = Tj;
var Dj = "MenubarItemIndicator", Oj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Yk, {
		...ej(n),
		...r,
		ref: t
	});
});
Oj.displayName = Dj;
var kj = "MenubarSeparator", Aj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Xk, {
		...ej(n),
		...r,
		ref: t
	});
});
Aj.displayName = kj;
var jj = "MenubarArrow", Mj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(Zk, {
		...ej(n),
		...r,
		ref: t
	});
});
Mj.displayName = jj;
var Nj = "MenubarSub", Pj = (e) => {
	let { __scopeMenubar: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = ej(t), [s, c] = me({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: Nj
	});
	return /* @__PURE__ */ C(Qk, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
Pj.displayName = Nj;
var Fj = "MenubarSubTrigger", Ij = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C($k, {
		"data-radix-menubar-subtrigger": "",
		...ej(n),
		...r,
		ref: t
	});
});
Ij.displayName = Fj;
var Lj = "MenubarSubContent", Rj = e.forwardRef((e, t) => {
	let { __scopeMenubar: n, ...r } = e;
	return /* @__PURE__ */ C(eA, {
		...ej(n),
		"data-radix-menubar-content": "",
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
			"--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
			"--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Rj.displayName = Lj;
function zj(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Bj = ij, Vj = cj, Hj = uj, Uj = fj, Wj = mj, Gj = bj, Kj = Sj, qj = Oj, Jj = Aj, Yj = Pj, Xj = Ij, Zj = Rj;
//#endregion
//#region src/components/Menubar/Menubar.tsx
function Qj({ onSelect: e, className: t = "menu" }) {
	let [n, r] = y(!0), [i, a] = y(!1);
	return /* @__PURE__ */ C("div", {
		className: t,
		children: /* @__PURE__ */ w(Bj, {
			className: "menubar",
			children: [
				/* @__PURE__ */ w(Vj, { children: [/* @__PURE__ */ C(Hj, {
					className: "menubar__trigger",
					children: "File"
				}), /* @__PURE__ */ C(Uj, { children: /* @__PURE__ */ w(Wj, {
					className: "menubar__content",
					align: "start",
					sideOffset: 4,
					children: [
						/* @__PURE__ */ C(Gj, {
							className: "menubar__item",
							onSelect: () => e?.("New"),
							children: "New"
						}),
						/* @__PURE__ */ C(Gj, {
							className: "menubar__item",
							onSelect: () => e?.("Open…"),
							children: "Open…"
						}),
						/* @__PURE__ */ C(Gj, {
							className: "menubar__item",
							onSelect: () => e?.("Save"),
							children: "Save"
						}),
						/* @__PURE__ */ C(Jj, { className: "menubar__sep" }),
						/* @__PURE__ */ C(Gj, {
							className: "menubar__item",
							onSelect: () => e?.("Quit"),
							children: "Quit"
						})
					]
				}) })] }),
				/* @__PURE__ */ w(Vj, { children: [/* @__PURE__ */ C(Hj, {
					className: "menubar__trigger",
					children: "Edit"
				}), /* @__PURE__ */ C(Uj, { children: /* @__PURE__ */ w(Wj, {
					className: "menubar__content",
					align: "start",
					sideOffset: 4,
					children: [
						/* @__PURE__ */ C(Gj, {
							className: "menubar__item",
							onSelect: () => e?.("Undo"),
							children: "Undo"
						}),
						/* @__PURE__ */ C(Gj, {
							className: "menubar__item",
							onSelect: () => e?.("Redo"),
							children: "Redo"
						}),
						/* @__PURE__ */ C(Jj, { className: "menubar__sep" }),
						/* @__PURE__ */ w(Yj, { children: [/* @__PURE__ */ C(Xj, {
							className: "menubar__item",
							children: "Find ›"
						}), /* @__PURE__ */ C(Uj, { children: /* @__PURE__ */ w(Zj, {
							className: "menubar__content",
							sideOffset: 4,
							children: [/* @__PURE__ */ C(Gj, {
								className: "menubar__item",
								onSelect: () => e?.("Find in file"),
								children: "In file"
							}), /* @__PURE__ */ C(Gj, {
								className: "menubar__item",
								onSelect: () => e?.("Find in project"),
								children: "In project"
							})]
						}) })] })
					]
				}) })] }),
				/* @__PURE__ */ w(Vj, { children: [/* @__PURE__ */ C(Hj, {
					className: "menubar__trigger",
					children: "View"
				}), /* @__PURE__ */ C(Uj, { children: /* @__PURE__ */ w(Wj, {
					className: "menubar__content",
					align: "start",
					sideOffset: 4,
					children: [/* @__PURE__ */ w(Kj, {
						className: "menubar__item",
						checked: n,
						onCheckedChange: (t) => {
							r(t === !0), e?.(`Sidebar ${t ? "on" : "off"}`);
						},
						children: [
							/* @__PURE__ */ C(qj, {
								asChild: !0,
								children: /* @__PURE__ */ C("span", {
									className: "menubar__check",
									"aria-hidden": "true",
									children: "✓"
								})
							}),
							!n && /* @__PURE__ */ C("span", {
								className: "menubar__check",
								"aria-hidden": "true"
							}),
							"Sidebar"
						]
					}), /* @__PURE__ */ w(Kj, {
						className: "menubar__item",
						checked: i,
						onCheckedChange: (t) => {
							a(t === !0), e?.(`Inspector ${t ? "on" : "off"}`);
						},
						children: [
							/* @__PURE__ */ C(qj, {
								asChild: !0,
								children: /* @__PURE__ */ C("span", {
									className: "menubar__check",
									"aria-hidden": "true",
									children: "✓"
								})
							}),
							!i && /* @__PURE__ */ C("span", {
								className: "menubar__check",
								"aria-hidden": "true"
							}),
							"Inspector"
						]
					})]
				}) })] })
			]
		})
	});
}
//#endregion
//#region src/components/Meter/Meter.tsx
function $j(e) {
	return e < 30 ? "low" : e < 70 ? "ok" : e < 90 ? "high" : "max";
}
function eM({ label: e = "Ink reservoir", defaultValue: t = 62, min: n = 0, max: r = 100, showDemoControl: i = !0, className: a = "mt" }) {
	let [o, s] = y(t), c = $j(o);
	return /* @__PURE__ */ w("div", {
		className: a,
		children: [/* @__PURE__ */ C(Wg, {
			value: o,
			minValue: n,
			maxValue: r,
			className: `mt__root mt__root--${c}`,
			children: ({ percentage: t }) => /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ w("div", {
					className: "mt__head",
					children: [/* @__PURE__ */ C(Ns, {
						className: "mono",
						children: e
					}), /* @__PURE__ */ w("span", {
						className: "mt__num",
						children: [Math.round(t), "%"]
					})]
				}),
				/* @__PURE__ */ w("div", {
					className: "mt__bar",
					children: [/* @__PURE__ */ C("div", {
						className: "mt__fill",
						style: { width: `${t}%` }
					}), [
						10,
						25,
						50,
						75,
						90
					].map((e) => /* @__PURE__ */ C("span", {
						className: "mt__tick",
						style: { left: `${e}%` },
						"aria-hidden": "true"
					}, e))]
				}),
				/* @__PURE__ */ w("p", {
					className: "mt__zone mono",
					children: [
						c === "low" && "Low — refill soon",
						c === "ok" && "Okay — within nominal",
						c === "high" && "High — slow refill",
						c === "max" && "Maximum — pause"
					]
				})
			] })
		}), i && /* @__PURE__ */ w("label", {
			className: "mt__control s-field",
			children: [/* @__PURE__ */ C("span", { children: "Adjust value (demo only)" }), /* @__PURE__ */ C("input", {
				type: "range",
				min: n,
				max: r,
				value: o,
				onChange: (e) => s(Number(e.target.value)),
				className: "mt__range",
				"aria-label": "Demo: change meter value"
			})]
		})]
	});
}
//#endregion
//#region node_modules/@radix-ui/react-radio-group/dist/index.mjs
var tM = "Radio", [nM, rM] = B(tM), [iM, aM] = nM(tM), oM = e.forwardRef((t, n) => {
	let { __scopeRadio: r, name: i, checked: a = !1, required: o, disabled: s, value: c = "on", onCheck: l, form: u, ...d } = t, [f, p] = e.useState(null), m = V(n, (e) => p(e)), h = e.useRef(!1), g = f ? u || !!f.closest("form") : !0;
	return /* @__PURE__ */ w(iM, {
		scope: r,
		checked: a,
		disabled: s,
		children: [/* @__PURE__ */ C(U.button, {
			type: "button",
			role: "radio",
			"aria-checked": a,
			"data-state": dM(a),
			"data-disabled": s ? "" : void 0,
			disabled: s,
			value: c,
			...d,
			ref: m,
			onClick: H(t.onClick, (e) => {
				a || l?.(), g && (h.current = e.isPropagationStopped(), h.current || e.stopPropagation());
			})
		}), g && /* @__PURE__ */ C(uM, {
			control: f,
			bubbles: !h.current,
			name: i,
			value: c,
			checked: a,
			required: o,
			disabled: s,
			form: u,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
oM.displayName = tM;
var sM = "RadioIndicator", cM = e.forwardRef((e, t) => {
	let { __scopeRadio: n, forceMount: r, ...i } = e, a = aM(sM, n);
	return /* @__PURE__ */ C(ye, {
		present: r || a.checked,
		children: /* @__PURE__ */ C(U.span, {
			"data-state": dM(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t
		})
	});
});
cM.displayName = sM;
var lM = "RadioBubbleInput", uM = e.forwardRef(({ __scopeRadio: t, control: n, checked: r, bubbles: i = !0, ...a }, o) => {
	let s = e.useRef(null), c = V(s, o), l = IC(r), u = LC(n);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (l !== r && n) {
			let t = new Event("click", { bubbles: i });
			n.call(e, r), e.dispatchEvent(t);
		}
	}, [
		l,
		r,
		i
	]), /* @__PURE__ */ C(U.input, {
		type: "radio",
		"aria-hidden": !0,
		defaultChecked: r,
		...a,
		tabIndex: -1,
		ref: c,
		style: {
			...a.style,
			...u,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
uM.displayName = lM;
function dM(e) {
	return e ? "checked" : "unchecked";
}
var fM = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], pM = "RadioGroup", [mM, hM] = B(pM, [Mt, rM]), gM = Mt(), _M = rM(), [vM, yM] = mM(pM), bM = e.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, name: r, defaultValue: i, value: a, required: o = !1, disabled: s = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = gM(n), m = He(l), [h, g] = me({
		prop: a,
		defaultProp: i ?? null,
		onChange: d,
		caller: pM
	});
	return /* @__PURE__ */ C(vM, {
		scope: n,
		name: r,
		required: o,
		disabled: s,
		value: h,
		onValueChange: g,
		children: /* @__PURE__ */ C(Wt, {
			asChild: !0,
			...p,
			orientation: c,
			dir: m,
			loop: u,
			children: /* @__PURE__ */ C(U.div, {
				role: "radiogroup",
				"aria-required": o,
				"aria-orientation": c,
				"data-disabled": s ? "" : void 0,
				dir: m,
				...f,
				ref: t
			})
		})
	});
});
bM.displayName = pM;
var xM = "RadioGroupItem", SM = e.forwardRef((t, n) => {
	let { __scopeRadioGroup: r, disabled: i, ...a } = t, o = yM(xM, r), s = o.disabled || i, c = gM(r), l = _M(r), u = e.useRef(null), d = V(n, u), f = o.value === a.value, p = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			fM.includes(e.key) && (p.current = !0);
		}, t = () => p.current = !1;
		return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("keyup", t);
		};
	}, []), /* @__PURE__ */ C(Gt, {
		asChild: !0,
		...c,
		focusable: !s,
		active: f,
		children: /* @__PURE__ */ C(oM, {
			disabled: s,
			required: o.required,
			checked: f,
			...l,
			...a,
			name: o.name,
			ref: d,
			onCheck: () => o.onValueChange(a.value),
			onKeyDown: H((e) => {
				e.key === "Enter" && e.preventDefault();
			}),
			onFocus: H(a.onFocus, () => {
				p.current && u.current?.click();
			})
		})
	});
});
SM.displayName = xM;
var CM = "RadioGroupIndicator", wM = e.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, ...r } = e;
	return /* @__PURE__ */ C(cM, {
		..._M(n),
		...r,
		ref: t
	});
});
wM.displayName = CM;
var TM = bM, EM = SM, DM = wM;
//#endregion
//#region src/components/RadioGroup/RadioGroup.tsx
function OM({ options: e, legend: t = "Choose a plan", defaultValue: n, ariaLabel: r = "Pricing tier", className: i = "rg" }) {
	let [a, o] = y(n ?? e[0]?.id ?? "");
	return /* @__PURE__ */ w("fieldset", {
		className: i,
		children: [/* @__PURE__ */ C("legend", {
			className: "mono",
			children: t
		}), /* @__PURE__ */ C(TM, {
			value: a,
			onValueChange: o,
			className: "rg__group",
			"aria-label": r,
			children: e.map((e) => /* @__PURE__ */ w("label", {
				className: "rg__card",
				"data-selected": a === e.id,
				children: [
					/* @__PURE__ */ C(EM, {
						value: e.id,
						className: "rg__radio",
						children: /* @__PURE__ */ C(DM, { className: "rg__dot" })
					}),
					/* @__PURE__ */ C("span", {
						className: "rg__title",
						children: e.title
					}),
					/* @__PURE__ */ C("span", {
						className: "rg__price mono",
						children: e.price
					}),
					/* @__PURE__ */ C("span", {
						className: "rg__note",
						children: e.note
					})
				]
			}, e.id))
		})]
	});
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
function kM(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region node_modules/@radix-ui/react-slider/dist/index.mjs
var AM = ["PageUp", "PageDown"], jM = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], MM = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
}, NM = "Slider", [PM, FM, IM] = de(NM), [LM, RM] = B(NM, [IM]), [zM, BM] = LM(NM), VM = e.forwardRef((t, n) => {
	let { name: r, min: i = 0, max: a = 100, step: o = 1, orientation: s = "horizontal", disabled: c = !1, minStepsBetweenThumbs: l = 0, defaultValue: u = [i], value: d, onValueChange: f = () => {}, onValueCommit: p = () => {}, inverted: m = !1, form: h, ...g } = t, _ = e.useRef(/* @__PURE__ */ new Set()), v = e.useRef(0), y = s === "horizontal" ? WM : GM, [b = [], x] = me({
		prop: d,
		defaultProp: u,
		onChange: (e) => {
			[..._.current][v.current]?.focus(), f(e);
		}
	}), S = e.useRef(b);
	function w(e) {
		D(e, aN(b, e));
	}
	function T(e) {
		D(e, v.current);
	}
	function E() {
		let e = S.current[v.current];
		b[v.current] !== e && p(b);
	}
	function D(e, t, { commit: n } = { commit: !1 }) {
		let r = uN(o), s = kM(dN(Math.round((e - i) / o) * o + i, r), [i, a]);
		x((e = []) => {
			let r = nN(e, s, t);
			if (cN(r, l * o)) {
				v.current = r.indexOf(s);
				let t = String(r) !== String(e);
				return t && n && p(r), t ? r : e;
			} else return e;
		});
	}
	return /* @__PURE__ */ C(zM, {
		scope: t.__scopeSlider,
		name: r,
		disabled: c,
		min: i,
		max: a,
		valueIndexToChangeRef: v,
		thumbs: _.current,
		values: b,
		orientation: s,
		form: h,
		children: /* @__PURE__ */ C(PM.Provider, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ C(PM.Slot, {
				scope: t.__scopeSlider,
				children: /* @__PURE__ */ C(y, {
					"aria-disabled": c,
					"data-disabled": c ? "" : void 0,
					...g,
					ref: n,
					onPointerDown: H(g.onPointerDown, () => {
						c || (S.current = b);
					}),
					min: i,
					max: a,
					inverted: m,
					onSlideStart: c ? void 0 : w,
					onSlideMove: c ? void 0 : T,
					onSlideEnd: c ? void 0 : E,
					onHomeKeyDown: () => !c && D(i, 0, { commit: !0 }),
					onEndKeyDown: () => !c && D(a, b.length - 1, { commit: !0 }),
					onStepKeyDown: ({ event: e, direction: t }) => {
						if (!c) {
							let n = AM.includes(e.key) || e.shiftKey && jM.includes(e.key) ? 10 : 1, r = v.current, i = b[r];
							D(i + o * n * t, r, { commit: !0 });
						}
					}
				})
			})
		})
	});
});
VM.displayName = NM;
var [HM, UM] = LM(NM, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), WM = e.forwardRef((t, n) => {
	let { min: r, max: i, dir: a, inverted: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onStepKeyDown: u, ...d } = t, [f, p] = e.useState(null), m = V(n, (e) => p(e)), h = e.useRef(void 0), g = He(a), _ = g === "ltr", v = _ && !o || !_ && o;
	function y(e) {
		let t = h.current || f.getBoundingClientRect(), n = lN([0, t.width], v ? [r, i] : [i, r]);
		return h.current = t, n(e - t.left);
	}
	return /* @__PURE__ */ C(HM, {
		scope: t.__scopeSlider,
		startEdge: v ? "left" : "right",
		endEdge: v ? "right" : "left",
		direction: v ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ C(KM, {
			dir: g,
			"data-orientation": "horizontal",
			...d,
			ref: m,
			style: {
				...d.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (e) => {
				let t = y(e.clientX);
				s?.(t);
			},
			onSlideMove: (e) => {
				let t = y(e.clientX);
				c?.(t);
			},
			onSlideEnd: () => {
				h.current = void 0, l?.();
			},
			onStepKeyDown: (e) => {
				let t = MM[v ? "from-left" : "from-right"].includes(e.key);
				u?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}), GM = e.forwardRef((t, n) => {
	let { min: r, max: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = t, d = e.useRef(null), f = V(n, d), p = e.useRef(void 0), m = !a;
	function h(e) {
		let t = p.current || d.current.getBoundingClientRect(), n = lN([0, t.height], m ? [i, r] : [r, i]);
		return p.current = t, n(e - t.top);
	}
	return /* @__PURE__ */ C(HM, {
		scope: t.__scopeSlider,
		startEdge: m ? "bottom" : "top",
		endEdge: m ? "top" : "bottom",
		size: "height",
		direction: m ? 1 : -1,
		children: /* @__PURE__ */ C(KM, {
			"data-orientation": "vertical",
			...u,
			ref: f,
			style: {
				...u.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (e) => {
				let t = h(e.clientY);
				o?.(t);
			},
			onSlideMove: (e) => {
				let t = h(e.clientY);
				s?.(t);
			},
			onSlideEnd: () => {
				p.current = void 0, c?.();
			},
			onStepKeyDown: (e) => {
				let t = MM[m ? "from-bottom" : "from-top"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}), KM = e.forwardRef((e, t) => {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = BM(NM, n);
	return /* @__PURE__ */ C(U.span, {
		...l,
		ref: t,
		onKeyDown: H(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : AM.concat(jM).includes(e.key) && (c(e), e.preventDefault());
		}),
		onPointerDown: H(e.onPointerDown, (e) => {
			let t = e.target;
			t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : r(e);
		}),
		onPointerMove: H(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && i(e);
		}),
		onPointerUp: H(e.onPointerUp, (e) => {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e));
		})
	});
}), qM = "SliderTrack", JM = e.forwardRef((e, t) => {
	let { __scopeSlider: n, ...r } = e, i = BM(qM, n);
	return /* @__PURE__ */ C(U.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
});
JM.displayName = qM;
var YM = "SliderRange", XM = e.forwardRef((t, n) => {
	let { __scopeSlider: r, ...i } = t, a = BM(YM, r), o = UM(YM, r), s = V(n, e.useRef(null)), c = a.values.length, l = a.values.map((e) => rN(e, a.min, a.max)), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
	return /* @__PURE__ */ C(U.span, {
		"data-orientation": a.orientation,
		"data-disabled": a.disabled ? "" : void 0,
		...i,
		ref: s,
		style: {
			...t.style,
			[o.startEdge]: u + "%",
			[o.endEdge]: d + "%"
		}
	});
});
XM.displayName = YM;
var ZM = "SliderThumb", QM = e.forwardRef((t, n) => {
	let r = FM(t.__scopeSlider), [i, a] = e.useState(null), o = V(n, (e) => a(e)), s = e.useMemo(() => i ? r().findIndex((e) => e.ref.current === i) : -1, [r, i]);
	return /* @__PURE__ */ C($M, {
		...t,
		ref: o,
		index: s
	});
}), $M = e.forwardRef((t, n) => {
	let { __scopeSlider: r, index: i, name: a, ...o } = t, s = BM(ZM, r), c = UM(ZM, r), [l, u] = e.useState(null), d = V(n, (e) => u(e)), f = l ? s.form || !!l.closest("form") : !0, p = LC(l), m = s.values[i], h = m === void 0 ? 0 : rN(m, s.min, s.max), g = iN(i, s.values.length), _ = p?.[c.size], v = _ ? oN(_, h, c.direction) : 0;
	return e.useEffect(() => {
		if (l) return s.thumbs.add(l), () => {
			s.thumbs.delete(l);
		};
	}, [l, s.thumbs]), /* @__PURE__ */ w("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[c.startEdge]: `calc(${h}% + ${v}px)`
		},
		children: [/* @__PURE__ */ C(PM.ItemSlot, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ C(U.span, {
				role: "slider",
				"aria-label": t["aria-label"] || g,
				"aria-valuemin": s.min,
				"aria-valuenow": m,
				"aria-valuemax": s.max,
				"aria-orientation": s.orientation,
				"data-orientation": s.orientation,
				"data-disabled": s.disabled ? "" : void 0,
				tabIndex: s.disabled ? void 0 : 0,
				...o,
				ref: d,
				style: m === void 0 ? { display: "none" } : t.style,
				onFocus: H(t.onFocus, () => {
					s.valueIndexToChangeRef.current = i;
				})
			})
		}), f && /* @__PURE__ */ C(tN, {
			name: a ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
			form: s.form,
			value: m
		}, i)]
	});
});
QM.displayName = ZM;
var eN = "RadioBubbleInput", tN = e.forwardRef(({ __scopeSlider: t, value: n, ...r }, i) => {
	let a = e.useRef(null), o = V(a, i), s = IC(n);
	return e.useEffect(() => {
		let e = a.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, r = Object.getOwnPropertyDescriptor(t, "value").set;
		if (s !== n && r) {
			let t = new Event("input", { bubbles: !0 });
			r.call(e, n), e.dispatchEvent(t);
		}
	}, [s, n]), /* @__PURE__ */ C(U.input, {
		style: { display: "none" },
		...r,
		ref: o,
		defaultValue: n
	});
});
tN.displayName = eN;
function nN(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
function rN(e, t, n) {
	return kM(100 / (n - t) * (e - t), [0, 100]);
}
function iN(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
function aN(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
function oN(e, t, n) {
	let r = e / 2;
	return (r - lN([0, 50], [0, r])(t) * n) * n;
}
function sN(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function cN(e, t) {
	if (t > 0) {
		let n = sN(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
function lN(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function uN(e) {
	return (String(e).split(".")[1] || "").length;
}
function dN(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
var fN = VM, pN = JM, mN = XM, hN = QM;
//#endregion
//#region src/components/Slider/Slider.tsx
function gN({ label: e = "Ink opacity", defaultValue: t = 42, min: n = 0, max: r = 100, step: i = 1, showPreview: a = !0, className: o = "sl" }) {
	let [s, c] = y([t]);
	return /* @__PURE__ */ w("div", {
		className: o,
		children: [
			/* @__PURE__ */ w("div", {
				className: "sl__readout",
				children: [/* @__PURE__ */ C("span", {
					className: "mono",
					children: e
				}), /* @__PURE__ */ w("span", {
					className: "sl__value",
					children: [s[0].toString().padStart(2, "0"), "%"]
				})]
			}),
			/* @__PURE__ */ w(fN, {
				className: "sl__root",
				value: s,
				onValueChange: c,
				min: n,
				max: r,
				step: i,
				"aria-label": e,
				children: [/* @__PURE__ */ C(pN, {
					className: "sl__track",
					children: /* @__PURE__ */ C(mN, { className: "sl__range" })
				}), /* @__PURE__ */ C(hN, {
					className: "sl__thumb",
					"aria-valuetext": `${s[0]} percent`
				})]
			}),
			/* @__PURE__ */ C("div", {
				className: "sl__ticks mono",
				"aria-hidden": "true",
				children: [
					0,
					25,
					50,
					75,
					100
				].map((e) => /* @__PURE__ */ C("span", { children: e }, e))
			}),
			a && /* @__PURE__ */ C("div", {
				className: "sl__preview",
				style: { opacity: s[0] / 100 },
				"aria-hidden": "true",
				children: "INK"
			})
		]
	});
}
//#endregion
//#region src/components/SliderMulti/SliderMulti.tsx
function _N({ label: e = "Price range", defaultValue: t = [20, 60], min: n = 0, max: r = 100, step: i = 5, showHistogram: a = !0, className: o = "sl" }) {
	let [s, c] = y(t);
	return /* @__PURE__ */ w("div", {
		className: o,
		children: [
			/* @__PURE__ */ w("div", {
				className: "sl__readout",
				children: [/* @__PURE__ */ C("span", {
					className: "mono",
					children: e
				}), /* @__PURE__ */ w("span", {
					className: "sl__value",
					children: [
						"$",
						s[0],
						" ",
						/* @__PURE__ */ C("span", {
							className: "slm__dash",
							children: "→"
						}),
						" $",
						s[1]
					]
				})]
			}),
			/* @__PURE__ */ w(fN, {
				className: "sl__root",
				value: s,
				onValueChange: (e) => c(e),
				min: n,
				max: r,
				step: i,
				minStepsBetweenThumbs: 1,
				children: [
					/* @__PURE__ */ C(pN, {
						className: "sl__track",
						children: /* @__PURE__ */ C(mN, { className: "sl__range" })
					}),
					/* @__PURE__ */ C(hN, {
						className: "sl__thumb",
						"aria-label": "Minimum price",
						"aria-valuetext": `${s[0]} dollars`
					}),
					/* @__PURE__ */ C(hN, {
						className: "sl__thumb",
						"aria-label": "Maximum price",
						"aria-valuetext": `${s[1]} dollars`
					})
				]
			}),
			/* @__PURE__ */ C("div", {
				className: "sl__ticks mono",
				"aria-hidden": "true",
				children: [
					0,
					25,
					50,
					75,
					100
				].map((e) => /* @__PURE__ */ w("span", { children: ["$", e] }, e))
			}),
			a && /* @__PURE__ */ C("div", {
				className: "slm__hist",
				"aria-hidden": "true",
				children: Array.from({ length: 20 }).map((e, t) => {
					let n = t * 5, r = n >= s[0] && n <= s[1];
					return /* @__PURE__ */ C("span", {
						className: "slm__bar",
						style: {
							height: `${20 + Math.abs(Math.sin(t)) * 60}%`,
							opacity: r ? 1 : .2
						}
					}, t);
				})
			})
		]
	});
}
//#endregion
//#region src/components/Spinbutton/Spinbutton.tsx
function vN({ className: e = "spn" }) {
	let [t, n] = y(50), [r, i] = y(12);
	return /* @__PURE__ */ w("div", {
		className: e,
		children: [
			/* @__PURE__ */ w(qg, {
				value: t,
				onChange: n,
				minValue: 1,
				maxValue: 500,
				step: 1,
				className: "spn__root",
				children: [/* @__PURE__ */ C(Ns, {
					className: "mono spn__label",
					children: "Copies (1 – 500)"
				}), /* @__PURE__ */ w(Qc, {
					className: "spn__group",
					children: [
						/* @__PURE__ */ C(pc, {
							slot: "decrement",
							className: "spn__btn",
							"aria-label": "Decrease",
							children: "−"
						}),
						/* @__PURE__ */ C(tl, { className: "spn__input" }),
						/* @__PURE__ */ C(pc, {
							slot: "increment",
							className: "spn__btn",
							"aria-label": "Increase",
							children: "+"
						})
					]
				})]
			}),
			/* @__PURE__ */ w(qg, {
				value: r,
				onChange: i,
				minValue: 6,
				maxValue: 144,
				step: .5,
				formatOptions: {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1
				},
				className: "spn__root",
				children: [/* @__PURE__ */ C(Ns, {
					className: "mono spn__label",
					children: "Type size (6 – 144 pt, half steps)"
				}), /* @__PURE__ */ w(Qc, {
					className: "spn__group",
					children: [
						/* @__PURE__ */ C(pc, {
							slot: "decrement",
							className: "spn__btn",
							"aria-label": "Decrease",
							children: "−"
						}),
						/* @__PURE__ */ C(tl, { className: "spn__input" }),
						/* @__PURE__ */ C(pc, {
							slot: "increment",
							className: "spn__btn",
							"aria-label": "Increase",
							children: "+"
						})
					]
				})]
			}),
			/* @__PURE__ */ C("p", {
				className: "spn__sample",
				style: { fontSize: `${Math.max(r, 6)}pt` },
				children: "Hamburgefonstiv"
			})
		]
	});
}
//#endregion
//#region node_modules/@radix-ui/react-switch/dist/index.mjs
var yN = "Switch", [bN, xN] = B(yN), [SN, CN] = bN(yN), wN = e.forwardRef((t, n) => {
	let { __scopeSwitch: r, name: i, checked: a, defaultChecked: o, required: s, disabled: c, value: l = "on", onCheckedChange: u, form: d, ...f } = t, [p, m] = e.useState(null), h = V(n, (e) => m(e)), g = e.useRef(!1), _ = p ? d || !!p.closest("form") : !0, [v, y] = me({
		prop: a,
		defaultProp: o ?? !1,
		onChange: u,
		caller: yN
	});
	return /* @__PURE__ */ w(SN, {
		scope: r,
		checked: v,
		disabled: c,
		children: [/* @__PURE__ */ C(U.button, {
			type: "button",
			role: "switch",
			"aria-checked": v,
			"aria-required": s,
			"data-state": kN(v),
			"data-disabled": c ? "" : void 0,
			disabled: c,
			value: l,
			...f,
			ref: h,
			onClick: H(t.onClick, (e) => {
				y((e) => !e), _ && (g.current = e.isPropagationStopped(), g.current || e.stopPropagation());
			})
		}), _ && /* @__PURE__ */ C(ON, {
			control: p,
			bubbles: !g.current,
			name: i,
			value: l,
			checked: v,
			required: s,
			disabled: c,
			form: d,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
wN.displayName = yN;
var TN = "SwitchThumb", EN = e.forwardRef((e, t) => {
	let { __scopeSwitch: n, ...r } = e, i = CN(TN, n);
	return /* @__PURE__ */ C(U.span, {
		"data-state": kN(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
EN.displayName = TN;
var DN = "SwitchBubbleInput", ON = e.forwardRef(({ __scopeSwitch: t, control: n, checked: r, bubbles: i = !0, ...a }, o) => {
	let s = e.useRef(null), c = V(s, o), l = IC(r), u = LC(n);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (l !== r && n) {
			let t = new Event("click", { bubbles: i });
			n.call(e, r), e.dispatchEvent(t);
		}
	}, [
		l,
		r,
		i
	]), /* @__PURE__ */ C("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: r,
		...a,
		tabIndex: -1,
		ref: c,
		style: {
			...a.style,
			...u,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
ON.displayName = DN;
function kN(e) {
	return e ? "checked" : "unchecked";
}
var AN = wN, jN = EN;
//#endregion
//#region src/components/Switch/Switch.tsx
function MN({ items: e, defaultState: t, className: n = "sw" }) {
	let [r, i] = y(t ?? Object.fromEntries(e.map((e) => [e.id, !1])));
	return /* @__PURE__ */ C("ul", {
		className: n,
		children: e.map((e) => /* @__PURE__ */ w("li", {
			className: "sw__row",
			children: [/* @__PURE__ */ w("div", {
				className: "sw__copy",
				children: [/* @__PURE__ */ C("span", {
					className: "sw__label",
					children: e.label
				}), /* @__PURE__ */ C("span", {
					className: "sw__help",
					children: e.help
				})]
			}), /* @__PURE__ */ C(AN, {
				checked: r[e.id],
				onCheckedChange: (t) => i((n) => ({
					...n,
					[e.id]: t
				})),
				className: "sw__root",
				"aria-label": e.label,
				children: /* @__PURE__ */ C(jN, { className: "sw__thumb" })
			})]
		}, e.id))
	});
}
//#endregion
//#region src/components/Table/Table.tsx
function NN({ rows: e, ariaLabel: t = "Pattern catalogue", className: n = "tbl" }) {
	let [r, i] = y({
		column: "pattern",
		direction: "ascending"
	}), [a, o] = y(/* @__PURE__ */ new Set()), s = g(() => {
		let t = r.column, n = r.direction === "ascending" ? 1 : -1;
		return [...e].sort((e, r) => (e[t] < r[t] ? -1 : +(e[t] > r[t])) * n);
	}, [r, e]);
	return /* @__PURE__ */ w(bv, {
		"aria-label": t,
		className: n,
		sortDescriptor: r,
		onSortChange: i,
		selectionMode: "multiple",
		selectedKeys: a,
		onSelectionChange: o,
		children: [/* @__PURE__ */ w(Dv, { children: [
			/* @__PURE__ */ C(Mv, {
				id: "pattern",
				isRowHeader: !0,
				allowsSorting: !0,
				className: "tbl__th",
				children: "Pattern"
			}),
			/* @__PURE__ */ C(Mv, {
				id: "library",
				allowsSorting: !0,
				className: "tbl__th",
				children: "Library"
			}),
			/* @__PURE__ */ C(Mv, {
				id: "role",
				allowsSorting: !0,
				className: "tbl__th",
				children: "Role"
			}),
			/* @__PURE__ */ C(Mv, {
				id: "released",
				allowsSorting: !0,
				className: "tbl__th",
				children: "Released"
			})
		] }), /* @__PURE__ */ C(Iv, { children: s.map((e) => /* @__PURE__ */ w(Bv, {
			id: e.id,
			className: "tbl__tr",
			children: [
				/* @__PURE__ */ C(Uv, {
					className: "tbl__td tbl__td--name",
					children: e.pattern
				}),
				/* @__PURE__ */ C(Uv, {
					className: "tbl__td mono",
					children: e.library
				}),
				/* @__PURE__ */ C(Uv, {
					className: "tbl__td mono",
					children: e.role
				}),
				/* @__PURE__ */ C(Uv, {
					className: "tbl__td mono",
					children: e.released
				})
			]
		}, e.id)) })]
	});
}
//#endregion
//#region node_modules/@radix-ui/react-separator/dist/index.mjs
var PN = "Separator", FN = "horizontal", IN = ["horizontal", "vertical"], LN = e.forwardRef((e, t) => {
	let { decorative: n, orientation: r = FN, ...i } = e, a = RN(r) ? r : FN, o = n ? { role: "none" } : {
		"aria-orientation": a === "vertical" ? a : void 0,
		role: "separator"
	};
	return /* @__PURE__ */ C(U.div, {
		"data-orientation": a,
		...o,
		...i,
		ref: t
	});
});
LN.displayName = PN;
function RN(e) {
	return IN.includes(e);
}
var zN = LN, BN = "Toggle", VN = e.forwardRef((e, t) => {
	let { pressed: n, defaultPressed: r, onPressedChange: i, ...a } = e, [o, s] = me({
		prop: n,
		onChange: i,
		defaultProp: r ?? !1,
		caller: BN
	});
	return /* @__PURE__ */ C(U.button, {
		type: "button",
		"aria-pressed": o,
		"data-state": o ? "on" : "off",
		"data-disabled": e.disabled ? "" : void 0,
		...a,
		ref: t,
		onClick: H(e.onClick, () => {
			e.disabled || s(!o);
		})
	});
});
VN.displayName = BN;
//#endregion
//#region node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var HN = "ToggleGroup", [UN, WN] = B(HN, [Mt]), GN = Mt(), KN = t.forwardRef((e, t) => {
	let { type: n, ...r } = e;
	if (n === "single") return /* @__PURE__ */ C(YN, {
		...r,
		ref: t
	});
	if (n === "multiple") return /* @__PURE__ */ C(XN, {
		...r,
		ref: t
	});
	throw Error(`Missing prop \`type\` expected on \`${HN}\``);
});
KN.displayName = HN;
var [qN, JN] = UN(HN), YN = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, ...o } = e, [s, c] = me({
		prop: r,
		defaultProp: i ?? "",
		onChange: a,
		caller: HN
	});
	return /* @__PURE__ */ C(qN, {
		scope: e.__scopeToggleGroup,
		type: "single",
		value: t.useMemo(() => s ? [s] : [], [s]),
		onItemActivate: c,
		onItemDeactivate: t.useCallback(() => c(""), [c]),
		children: /* @__PURE__ */ C($N, {
			...o,
			ref: n
		})
	});
}), XN = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, ...o } = e, [s, c] = me({
		prop: r,
		defaultProp: i ?? [],
		onChange: a,
		caller: HN
	}), l = t.useCallback((e) => c((t = []) => [...t, e]), [c]), u = t.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c]);
	return /* @__PURE__ */ C(qN, {
		scope: e.__scopeToggleGroup,
		type: "multiple",
		value: s,
		onItemActivate: l,
		onItemDeactivate: u,
		children: /* @__PURE__ */ C($N, {
			...o,
			ref: n
		})
	});
});
KN.displayName = HN;
var [ZN, QN] = UN(HN), $N = t.forwardRef((e, t) => {
	let { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: i = !0, orientation: a, dir: o, loop: s = !0, ...c } = e, l = GN(n), u = He(o), d = {
		role: "group",
		dir: u,
		...c
	};
	return /* @__PURE__ */ C(ZN, {
		scope: n,
		rovingFocus: i,
		disabled: r,
		children: i ? /* @__PURE__ */ C(Wt, {
			asChild: !0,
			...l,
			orientation: a,
			dir: u,
			loop: s,
			children: /* @__PURE__ */ C(U.div, {
				...d,
				ref: t
			})
		}) : /* @__PURE__ */ C(U.div, {
			...d,
			ref: t
		})
	});
}), eP = "ToggleGroupItem", tP = t.forwardRef((e, n) => {
	let r = JN(eP, e.__scopeToggleGroup), i = QN(eP, e.__scopeToggleGroup), a = GN(e.__scopeToggleGroup), o = r.value.includes(e.value), s = i.disabled || e.disabled, c = {
		...e,
		pressed: o,
		disabled: s
	}, l = t.useRef(null);
	return i.rovingFocus ? /* @__PURE__ */ C(Gt, {
		asChild: !0,
		...a,
		focusable: !s,
		active: o,
		ref: l,
		children: /* @__PURE__ */ C(nP, {
			...c,
			ref: n
		})
	}) : /* @__PURE__ */ C(nP, {
		...c,
		ref: n
	});
});
tP.displayName = eP;
var nP = t.forwardRef((e, t) => {
	let { __scopeToggleGroup: n, value: r, ...i } = e, a = JN(eP, n), o = {
		role: "radio",
		"aria-checked": e.pressed,
		"aria-pressed": void 0
	};
	return /* @__PURE__ */ C(VN, {
		...a.type === "single" ? o : void 0,
		...i,
		ref: t,
		onPressedChange: (e) => {
			e ? a.onItemActivate(r) : a.onItemDeactivate(r);
		}
	});
}), rP = KN, iP = tP, aP = "Toolbar", [oP, sP] = B(aP, [Mt, WN]), cP = Mt(), lP = WN(), [uP, dP] = oP(aP), fP = e.forwardRef((e, t) => {
	let { __scopeToolbar: n, orientation: r = "horizontal", dir: i, loop: a = !0, ...o } = e, s = cP(n), c = He(i);
	return /* @__PURE__ */ C(uP, {
		scope: n,
		orientation: r,
		dir: c,
		children: /* @__PURE__ */ C(Wt, {
			asChild: !0,
			...s,
			orientation: r,
			dir: c,
			loop: a,
			children: /* @__PURE__ */ C(U.div, {
				role: "toolbar",
				"aria-orientation": r,
				dir: c,
				...o,
				ref: t
			})
		})
	});
});
fP.displayName = aP;
var pP = "ToolbarSeparator", mP = e.forwardRef((e, t) => {
	let { __scopeToolbar: n, ...r } = e;
	return /* @__PURE__ */ C(zN, {
		orientation: dP(pP, n).orientation === "horizontal" ? "vertical" : "horizontal",
		...r,
		ref: t
	});
});
mP.displayName = pP;
var hP = "ToolbarButton", gP = e.forwardRef((e, t) => {
	let { __scopeToolbar: n, ...r } = e;
	return /* @__PURE__ */ C(Gt, {
		asChild: !0,
		...cP(n),
		focusable: !e.disabled,
		children: /* @__PURE__ */ C(U.button, {
			type: "button",
			...r,
			ref: t
		})
	});
});
gP.displayName = hP;
var _P = "ToolbarLink", vP = e.forwardRef((e, t) => {
	let { __scopeToolbar: n, ...r } = e;
	return /* @__PURE__ */ C(Gt, {
		asChild: !0,
		...cP(n),
		focusable: !0,
		children: /* @__PURE__ */ C(U.a, {
			...r,
			ref: t,
			onKeyDown: H(e.onKeyDown, (e) => {
				e.key === " " && e.currentTarget.click();
			})
		})
	});
});
vP.displayName = _P;
var yP = "ToolbarToggleGroup", bP = e.forwardRef((e, t) => {
	let { __scopeToolbar: n, ...r } = e, i = dP(yP, n), a = lP(n);
	return /* @__PURE__ */ C(rP, {
		"data-orientation": i.orientation,
		dir: i.dir,
		...a,
		...r,
		ref: t,
		rovingFocus: !1
	});
});
bP.displayName = yP;
var xP = "ToolbarToggleItem", SP = e.forwardRef((e, t) => {
	let { __scopeToolbar: n, ...r } = e, i = lP(n);
	return /* @__PURE__ */ C(gP, {
		asChild: !0,
		__scopeToolbar: e.__scopeToolbar,
		children: /* @__PURE__ */ C(iP, {
			...i,
			...r,
			ref: t
		})
	});
});
SP.displayName = xP;
var CP = fP, wP = mP, TP = gP, EP = vP, DP = bP, OP = SP;
//#endregion
//#region src/components/Toolbar/Toolbar.tsx
function kP({ className: e = "tb" }) {
	let [t, n] = y(["bold"]), [r, i] = y("left");
	return /* @__PURE__ */ w("div", {
		className: e,
		children: [/* @__PURE__ */ w(CP, {
			className: "tb__root",
			"aria-label": "Formatting",
			children: [
				/* @__PURE__ */ w(DP, {
					type: "multiple",
					value: t,
					onValueChange: n,
					className: "tb__group",
					"aria-label": "Text style",
					children: [
						/* @__PURE__ */ C(OP, {
							className: "tb__btn",
							value: "bold",
							"aria-label": "Bold",
							children: /* @__PURE__ */ C("strong", { children: "B" })
						}),
						/* @__PURE__ */ C(OP, {
							className: "tb__btn",
							value: "italic",
							"aria-label": "Italic",
							children: /* @__PURE__ */ C("em", { children: "I" })
						}),
						/* @__PURE__ */ C(OP, {
							className: "tb__btn",
							value: "underline",
							"aria-label": "Underline",
							children: /* @__PURE__ */ C("u", { children: "U" })
						}),
						/* @__PURE__ */ C(OP, {
							className: "tb__btn",
							value: "strike",
							"aria-label": "Strikethrough",
							children: /* @__PURE__ */ C("s", { children: "S" })
						})
					]
				}),
				/* @__PURE__ */ C(wP, { className: "tb__sep" }),
				/* @__PURE__ */ w(DP, {
					type: "single",
					value: r,
					onValueChange: (e) => e && i(e),
					className: "tb__group",
					"aria-label": "Alignment",
					children: [
						/* @__PURE__ */ C(OP, {
							className: "tb__btn",
							value: "left",
							"aria-label": "Align left",
							children: /* @__PURE__ */ C("span", {
								"aria-hidden": "true",
								children: "⫷"
							})
						}),
						/* @__PURE__ */ C(OP, {
							className: "tb__btn",
							value: "center",
							"aria-label": "Align centre",
							children: /* @__PURE__ */ C("span", {
								"aria-hidden": "true",
								children: "≡"
							})
						}),
						/* @__PURE__ */ C(OP, {
							className: "tb__btn",
							value: "right",
							"aria-label": "Align right",
							children: /* @__PURE__ */ C("span", {
								"aria-hidden": "true",
								children: "⫸"
							})
						})
					]
				}),
				/* @__PURE__ */ C(wP, { className: "tb__sep" }),
				/* @__PURE__ */ C(EP, {
					className: "tb__link",
					href: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",
					target: "_blank",
					rel: "noreferrer",
					children: "APG spec ↗"
				}),
				/* @__PURE__ */ C(TP, {
					className: "s-btn s-btn--primary",
					style: { marginLeft: "auto" },
					children: "Publish"
				})
			]
		}), /* @__PURE__ */ w("p", {
			className: "tb__preview",
			style: {
				fontWeight: t.includes("bold") ? 700 : 400,
				fontStyle: t.includes("italic") ? "italic" : "normal",
				textDecoration: [t.includes("underline") ? "underline" : "", t.includes("strike") ? "line-through" : ""].filter(Boolean).join(" "),
				textAlign: r
			},
			children: [
				"The toolbar holds a single tab stop. Press ",
				/* @__PURE__ */ C("kbd", { children: "Tab" }),
				" in, then ride the arrow keys to traverse without leaving the group."
			]
		})]
	});
}
//#endregion
//#region node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var AP = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), jP = "VisuallyHidden", MP = e.forwardRef((e, t) => /* @__PURE__ */ C(U.span, {
	...e,
	ref: t,
	style: {
		...AP,
		...e.style
	}
}));
MP.displayName = jP;
var NP = MP, [PP, FP] = B("Tooltip", [$D]), IP = $D(), LP = "TooltipProvider", RP = 700, zP = "tooltip.open", [BP, VP] = PP(LP), HP = (t) => {
	let { __scopeTooltip: n, delayDuration: r = RP, skipDelayDuration: i = 300, disableHoverableContent: a = !1, children: o } = t, s = e.useRef(!0), c = e.useRef(!1), l = e.useRef(0);
	return e.useEffect(() => {
		let e = l.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ C(BP, {
		scope: n,
		isOpenDelayedRef: s,
		delayDuration: r,
		onOpen: e.useCallback(() => {
			window.clearTimeout(l.current), s.current = !1;
		}, []),
		onClose: e.useCallback(() => {
			window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, i);
		}, [i]),
		isPointerInTransitRef: c,
		onPointerInTransitChange: e.useCallback((e) => {
			c.current = e;
		}, []),
		disableHoverableContent: a,
		children: o
	});
};
HP.displayName = LP;
var UP = "Tooltip", [WP, GP] = PP(UP), KP = (t) => {
	let { __scopeTooltip: n, children: r, open: i, defaultOpen: a, onOpenChange: o, disableHoverableContent: s, delayDuration: c } = t, l = VP(UP, t.__scopeTooltip), u = IP(n), [d, f] = e.useState(null), p = Te(), m = e.useRef(0), h = s ?? l.disableHoverableContent, g = c ?? l.delayDuration, _ = e.useRef(!1), [v, y] = me({
		prop: i,
		defaultProp: a ?? !1,
		onChange: (e) => {
			e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(zP))) : l.onClose(), o?.(e);
		},
		caller: UP
	}), b = e.useMemo(() => v ? _.current ? "delayed-open" : "instant-open" : "closed", [v]), x = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = 0, _.current = !1, y(!0);
	}, [y]), S = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = 0, y(!1);
	}, [y]), w = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = window.setTimeout(() => {
			_.current = !0, y(!0), m.current = 0;
		}, g);
	}, [g, y]);
	return e.useEffect(() => () => {
		m.current &&= (window.clearTimeout(m.current), 0);
	}, []), /* @__PURE__ */ C(hO, {
		...u,
		children: /* @__PURE__ */ C(WP, {
			scope: n,
			contentId: p,
			open: v,
			stateAttribute: b,
			trigger: d,
			onTriggerChange: f,
			onTriggerEnter: e.useCallback(() => {
				l.isOpenDelayedRef.current ? w() : x();
			}, [
				l.isOpenDelayedRef,
				w,
				x
			]),
			onTriggerLeave: e.useCallback(() => {
				h ? S() : (window.clearTimeout(m.current), m.current = 0);
			}, [S, h]),
			onOpen: x,
			onClose: S,
			disableHoverableContent: h,
			children: r
		})
	});
};
KP.displayName = UP;
var qP = "TooltipTrigger", JP = e.forwardRef((t, n) => {
	let { __scopeTooltip: r, ...i } = t, a = GP(qP, r), o = VP(qP, r), s = IP(r), c = V(n, e.useRef(null), a.onTriggerChange), l = e.useRef(!1), u = e.useRef(!1), d = e.useCallback(() => l.current = !1, []);
	return e.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ C(gO, {
		asChild: !0,
		...s,
		children: /* @__PURE__ */ C(U.button, {
			"aria-describedby": a.open ? a.contentId : void 0,
			"data-state": a.stateAttribute,
			...i,
			ref: c,
			onPointerMove: H(t.onPointerMove, (e) => {
				e.pointerType !== "touch" && !u.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0);
			}),
			onPointerLeave: H(t.onPointerLeave, () => {
				a.onTriggerLeave(), u.current = !1;
			}),
			onPointerDown: H(t.onPointerDown, () => {
				a.open && a.onClose(), l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
			}),
			onFocus: H(t.onFocus, () => {
				l.current || a.onOpen();
			}),
			onBlur: H(t.onBlur, a.onClose),
			onClick: H(t.onClick, a.onClose)
		})
	});
});
JP.displayName = qP;
var YP = "TooltipPortal", [XP, ZP] = PP(YP, { forceMount: void 0 }), QP = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = GP(YP, t);
	return /* @__PURE__ */ C(XP, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ C(ye, {
			present: n || a.open,
			children: /* @__PURE__ */ C(Ry, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
QP.displayName = YP;
var $P = "TooltipContent", eF = e.forwardRef((e, t) => {
	let n = ZP($P, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = GP($P, e.__scopeTooltip);
	return /* @__PURE__ */ C(ye, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ C(aF, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ C(tF, {
			side: i,
			...a,
			ref: t
		})
	});
}), tF = e.forwardRef((t, n) => {
	let r = GP($P, t.__scopeTooltip), i = VP($P, t.__scopeTooltip), a = e.useRef(null), o = V(n, a), [s, c] = e.useState(null), { trigger: l, onClose: u } = r, d = a.current, { onPointerInTransitChange: f } = i, p = e.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = e.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = lF(r, cF(r, n.getBoundingClientRect())), a = uF(t.getBoundingClientRect());
		c(fF([...i, ...a])), f(!0);
	}, [f]);
	return e.useEffect(() => () => p(), [p]), e.useEffect(() => {
		if (l && d) {
			let e = (e) => m(e, d), t = (e) => m(e, l);
			return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
				l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t);
			};
		}
	}, [
		l,
		d,
		m,
		p
	]), e.useEffect(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !dF(n, s);
				r ? p() : i && (p(), u());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		l,
		d,
		s,
		u,
		p
	]), /* @__PURE__ */ C(aF, {
		...t,
		ref: o
	});
}), [nF, rF] = PP(UP, { isInside: !1 }), iF = /* @__PURE__ */ se("TooltipContent"), aF = e.forwardRef((t, n) => {
	let { __scopeTooltip: r, children: i, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = t, l = GP($P, r), u = IP(r), { onClose: d } = l;
	return e.useEffect(() => (document.addEventListener(zP, d), () => document.removeEventListener(zP, d)), [d]), e.useEffect(() => {
		if (l.trigger) {
			let e = (e) => {
				e.target?.contains(l.trigger) && d();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [l.trigger, d]), /* @__PURE__ */ C(my, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: s,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: d,
		children: /* @__PURE__ */ w(_O, {
			"data-state": l.stateAttribute,
			...u,
			...c,
			ref: n,
			style: {
				...c.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ C(iF, { children: i }), /* @__PURE__ */ C(nF, {
				scope: r,
				isInside: !0,
				children: /* @__PURE__ */ C(NP, {
					id: l.contentId,
					role: "tooltip",
					children: a || i
				})
			})]
		})
	});
});
eF.displayName = $P;
var oF = "TooltipArrow", sF = e.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = IP(n);
	return rF(oF, n).isInside ? null : /* @__PURE__ */ C(vO, {
		...i,
		...r,
		ref: t
	});
});
sF.displayName = oF;
function cF(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function lF(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function uF(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function dF(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function fF(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), pF(t);
}
function pF(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var mF = HP, hF = KP, gF = JP, _F = QP, vF = eF, yF = sF;
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function bF({ hints: e, lede: t = "Hover or tab onto each highlighted term to read its definition.", bodyPrefix: r = "Set your body type with thoughtful ", bodySuffix: i = " The body settles, the page becomes inviting, and readers reach the end without realising they read at all.", delayDuration: a = 150 }) {
	return /* @__PURE__ */ w(mF, {
		delayDuration: a,
		children: [/* @__PURE__ */ C("p", {
			className: "tt__lede",
			children: t
		}), /* @__PURE__ */ w("p", {
			className: "tt__body",
			children: [
				r,
				e.map((t, r) => {
					let i = r < e.length - 2 ? "," : r === e.length - 2 ? ", and" : ".";
					return /* @__PURE__ */ w(n, { children: [/* @__PURE__ */ w("span", {
						className: "tt__chunk",
						children: [/* @__PURE__ */ w(hF, { children: [/* @__PURE__ */ C(gF, {
							asChild: !0,
							children: /* @__PURE__ */ C("button", {
								type: "button",
								className: "tt__term",
								children: t.label
							})
						}), /* @__PURE__ */ C(_F, { children: /* @__PURE__ */ w(vF, {
							className: "tt__content",
							sideOffset: 6,
							children: [
								/* @__PURE__ */ C("strong", {
									className: "tt__head",
									children: t.label
								}),
								/* @__PURE__ */ C("span", { children: t.body }),
								/* @__PURE__ */ C(yF, { className: "tt__arrow" })
							]
						}) })] }), i]
					}), " "] }, t.key);
				}),
				i
			]
		})]
	});
}
//#endregion
//#region node_modules/react-arborist/dist/module/context.js
var xF = a(null);
function SF() {
	let e = d(xF);
	if (e === null) throw Error("No Tree Api Provided");
	return e;
}
var CF = a(null);
function wF() {
	let e = d(CF);
	if (e === null) throw Error("Provide a NodesContext");
	return e;
}
var TF = a(null);
function EF() {
	let e = d(TF);
	if (e === null) throw Error("Provide a DnDContext");
	return e;
}
var DF = a(0);
function OF() {
	d(DF);
}
//#endregion
//#region node_modules/react-arborist/dist/module/utils.js
var kF = /* @__PURE__ */ I({
	access: () => WF,
	bound: () => AF,
	dfs: () => LF,
	focusNextElement: () => zF,
	focusPrevElement: () => BF,
	getInsertIndex: () => XF,
	getInsertParentId: () => $F,
	getTreeLinePrefix: () => QF,
	identify: () => KF,
	identifyNull: () => GF,
	indexOf: () => FF,
	isClosed: () => MF,
	isDescendant: () => PF,
	isItem: () => jF,
	isOpenWithEmptyChildren: () => NF,
	mergeRefs: () => qF,
	noop: () => IF,
	safeRun: () => JF,
	waitFor: () => YF,
	walk: () => RF
});
function AF(e, t, n) {
	return Math.max(Math.min(e, n), t);
}
function jF(e) {
	return e && e.isLeaf;
}
function MF(e) {
	return e && e.isInternal && !e.isOpen;
}
function NF(e) {
	return e && e.isOpen && !e.children?.length;
}
var PF = (e, t) => {
	let n = e;
	for (; n;) {
		if (n.id === t.id) return !0;
		n = n.parent;
	}
	return !1;
}, FF = (e) => {
	if (!e.parent) throw Error("Node does not have a parent");
	return e.parent.children.findIndex((t) => t.id === e.id);
};
function IF() {}
function LF(e, t) {
	if (!e) return null;
	if (e.id === t) return e;
	if (e.children) for (let n of e.children) {
		let e = LF(n, t);
		if (e) return e;
	}
	return null;
}
function RF(e, t) {
	if (t(e), e.children) for (let n of e.children) RF(n, t);
}
function zF(e) {
	let t = UF(e), n;
	for (let r = 0; r < t.length; ++r) if (t[r] === e) {
		n = VF(t, r);
		break;
	}
	n?.focus();
}
function BF(e) {
	let t = UF(e), n;
	for (let r = 0; r < t.length; ++r) if (t[r] === e) {
		n = HF(t, r);
		break;
	}
	n?.focus();
}
function VF(e, t) {
	return t + 1 < e.length ? e[t + 1] : e[0];
}
function HF(e, t) {
	return t - 1 >= 0 ? e[t - 1] : e[e.length - 1];
}
function UF(e) {
	return Array.from(document.querySelectorAll("button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"]):not([disabled]), details:not([disabled]), summary:not(:disabled)")).filter((t) => t === e || !e.contains(t));
}
function WF(e, t) {
	return typeof t == "boolean" ? t : typeof t == "string" ? e[t] : t(e);
}
function GF(e) {
	return e === null ? null : KF(e);
}
function KF(e) {
	return typeof e == "string" ? e : e.id;
}
function qF(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
function JF(e, ...t) {
	if (e) return e(...t);
}
function YF(e) {
	return new Promise((t, n) => {
		let r = 0;
		function i() {
			r += 1, r === 100 && n(), e() ? t() : setTimeout(i, 10);
		}
		i();
	});
}
function XF(e) {
	let t = e.focusedNode;
	return t ? t.isOpen ? 0 : t.parent ? t.childIndex + 1 : 0 : e.root.children?.length ?? 0;
}
var ZF = {
	last: "└ ",
	middle: "├ ",
	pipe: "│ ",
	blank: "　 "
};
function QF(e, t = {}) {
	let n = Object.assign(Object.assign({}, ZF), t);
	if (e.level === 0) return "";
	let r = e.nextSibling === null ? n.last : n.middle, i = e.parent;
	for (; i && i.level > 0;) r = (i.nextSibling === null ? n.blank : n.pipe) + r, i = i.parent;
	return r;
}
function $F(e) {
	let t = e.focusedNode;
	return t ? t.isOpen ? t.id : t.parent && !t.parent.isRoot ? t.parent.id : null : null;
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/default-cursor.js
var eI = {
	display: "flex",
	alignItems: "center",
	zIndex: 1
}, tI = {
	flex: 1,
	height: "2px",
	background: "#4B91E2",
	borderRadius: "1px"
}, nI = {
	width: "4px",
	height: "4px",
	boxShadow: "0 0 0 3px #4B91E2",
	borderRadius: "50%"
}, rI = t.memo(function({ top: e, left: t, indent: n }) {
	let r = {
		position: "absolute",
		pointerEvents: "none",
		top: e - 2 + "px",
		left: t + "px",
		right: n + "px"
	};
	return w("div", {
		style: Object.assign(Object.assign({}, eI), r),
		children: [C("div", { style: Object.assign({}, nI) }), C("div", { style: Object.assign({}, tI) })]
	});
});
//#endregion
//#region node_modules/react-arborist/dist/module/components/default-row.js
function iI({ node: e, attrs: t, innerRef: n, children: r }) {
	return C("div", Object.assign({}, t, {
		ref: n,
		onFocus: (e) => e.stopPropagation(),
		onClick: e.handleClick,
		children: r
	}));
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/default-node.js
function aI(e) {
	return w("div", {
		ref: e.dragHandle,
		style: e.style,
		children: [
			C("span", {
				onClick: (t) => {
					t.stopPropagation(), e.node.toggle();
				},
				children: e.node.isLeaf ? "🌳" : e.node.isOpen ? "🗁" : "🗀"
			}),
			" ",
			e.node.isEditing ? C(sI, Object.assign({}, e)) : C(oI, Object.assign({}, e))
		]
	});
}
function oI(e) {
	return C(S, { children: C("span", { children: e.node.data.name }) });
}
function sI({ node: e }) {
	let t = v();
	return f(() => {
		var e, n;
		(e = t.current) == null || e.focus(), (n = t.current) == null || n.select();
	}, []), C("input", {
		ref: t,
		defaultValue: e.data.name,
		onBlur: () => e.reset(),
		onKeyDown: (n) => {
			n.key === "Escape" && e.reset(), n.key === "Enter" && e.submit(t.current?.value || "");
		}
	});
}
//#endregion
//#region node_modules/react-arborist/dist/module/state/edit-slice.js
function cI(e) {
	return {
		type: "EDIT",
		id: e
	};
}
function lI(e = { id: null }, t) {
	return t.type === "EDIT" ? Object.assign(Object.assign({}, e), { id: t.id }) : e;
}
//#endregion
//#region node_modules/react-arborist/dist/module/state/focus-slice.js
function uI(e) {
	return {
		type: "FOCUS",
		id: e
	};
}
function dI() {
	return { type: "TREE_BLUR" };
}
function fI(e = {
	id: null,
	treeFocused: !1
}, t) {
	return t.type === "FOCUS" ? Object.assign(Object.assign({}, e), {
		id: t.id,
		treeFocused: !0
	}) : t.type === "TREE_BLUR" ? Object.assign(Object.assign({}, e), { treeFocused: !1 }) : e;
}
//#endregion
//#region node_modules/react-arborist/dist/module/interfaces/node-api.js
var pI = class e {
	constructor(e) {
		this.handleClick = (e) => {
			e.metaKey && !this.tree.props.disableMultiSelection ? this.isSelected ? this.deselect() : this.selectMulti() : e.shiftKey && !this.tree.props.disableMultiSelection ? this.selectContiguous() : (this.select(), this.activate());
		}, this.tree = e.tree, this.id = e.id, this.data = e.data, this.level = e.level, this.children = e.children, this.parent = e.parent, this.isDraggable = e.isDraggable, this.rowIndex = e.rowIndex;
	}
	get isRoot() {
		return this.id === mI;
	}
	get isLeaf() {
		return !Array.isArray(this.children);
	}
	get isInternal() {
		return !this.isLeaf;
	}
	get isOpen() {
		return this.isLeaf ? !1 : this.tree.isOpen(this.id);
	}
	get isClosed() {
		return this.isLeaf ? !1 : !this.tree.isOpen(this.id);
	}
	get isEditable() {
		return this.tree.isEditable(this.data);
	}
	get isSelectable() {
		return this.tree.isSelectable(this.data);
	}
	get isEditing() {
		return this.tree.editingId === this.id;
	}
	get isSelected() {
		return this.tree.isSelected(this.id);
	}
	get isOnlySelection() {
		return this.isSelected && this.tree.hasOneSelection;
	}
	get isSelectedStart() {
		return this.isSelected && !this.prev?.isSelected;
	}
	get isSelectedEnd() {
		return this.isSelected && !this.next?.isSelected;
	}
	get isFocused() {
		return this.tree.isFocused(this.id);
	}
	get isDragging() {
		return this.tree.isDragging(this.id);
	}
	get willReceiveDrop() {
		return this.tree.willReceiveDrop(this.id);
	}
	get state() {
		return {
			isClosed: this.isClosed,
			isDragging: this.isDragging,
			isEditing: this.isEditing,
			isFocused: this.isFocused,
			isInternal: this.isInternal,
			isLeaf: this.isLeaf,
			isOpen: this.isOpen,
			isSelected: this.isSelected,
			isSelectedEnd: this.isSelectedEnd,
			isSelectedStart: this.isSelectedStart,
			willReceiveDrop: this.willReceiveDrop
		};
	}
	get childIndex() {
		return this.parent && this.parent.children ? this.parent.children.findIndex((e) => e.id === this.id) : -1;
	}
	get next() {
		return this.rowIndex === null ? null : this.tree.at(this.rowIndex + 1);
	}
	get prev() {
		return this.rowIndex === null ? null : this.tree.at(this.rowIndex - 1);
	}
	get nextSibling() {
		let e = this.childIndex;
		return this.parent?.children[e + 1] ?? null;
	}
	isAncestorOf(e) {
		if (!e) return !1;
		let t = e;
		for (; t;) {
			if (t.id === this.id) return !0;
			t = t.parent;
		}
		return !1;
	}
	select() {
		this.tree.select(this);
	}
	deselect() {
		this.tree.deselect(this);
	}
	selectMulti() {
		this.tree.selectMulti(this);
	}
	selectContiguous() {
		this.tree.selectContiguous(this);
	}
	activate() {
		this.tree.activate(this);
	}
	focus() {
		this.tree.focus(this);
	}
	toggle() {
		this.tree.toggle(this);
	}
	open() {
		this.tree.open(this);
	}
	openParents() {
		this.tree.openParents(this);
	}
	close() {
		this.tree.close(this);
	}
	submit(e) {
		this.tree.submit(this, e);
	}
	reset() {
		this.tree.reset();
	}
	clone() {
		return new e(Object.assign({}, this));
	}
	edit() {
		return this.tree.edit(this);
	}
}, mI = "__REACT_ARBORIST_INTERNAL_ROOT__";
function hI(e) {
	function t(n, r, i) {
		let a = new pI({
			tree: e,
			data: n,
			level: r,
			parent: i,
			id: e.accessId(n),
			children: null,
			isDraggable: e.isDraggable(n),
			rowIndex: null
		}), o = e.accessChildren(n);
		return o && (a.children = o.map((e) => t(e, r + 1, a))), a;
	}
	let n = new pI({
		tree: e,
		id: mI,
		data: { id: mI },
		level: -1,
		parent: null,
		children: null,
		isDraggable: !0,
		rowIndex: null
	});
	return n.children = (e.props.data ?? []).map((e) => t(e, 0, n)), n;
}
//#endregion
//#region node_modules/react-arborist/dist/module/state/open-slice.js
var gI = {
	open(e, t) {
		return {
			type: "VISIBILITY_OPEN",
			id: e,
			filtered: t
		};
	},
	close(e, t) {
		return {
			type: "VISIBILITY_CLOSE",
			id: e,
			filtered: t
		};
	},
	toggle(e, t) {
		return {
			type: "VISIBILITY_TOGGLE",
			id: e,
			filtered: t
		};
	},
	clear(e) {
		return {
			type: "VISIBILITY_CLEAR",
			filtered: e
		};
	}
};
function _I(e = {}, t) {
	if (t.type === "VISIBILITY_OPEN") return Object.assign(Object.assign({}, e), { [t.id]: !0 });
	if (t.type === "VISIBILITY_CLOSE") return Object.assign(Object.assign({}, e), { [t.id]: !1 });
	if (t.type === "VISIBILITY_TOGGLE") {
		let n = e[t.id];
		return Object.assign(Object.assign({}, e), { [t.id]: !n });
	} else if (t.type === "VISIBILITY_CLEAR") return {};
	else return e;
}
function vI(e = {
	filtered: {},
	unfiltered: {}
}, t) {
	return t.type.startsWith("VISIBILITY") ? t.filtered ? Object.assign(Object.assign({}, e), { filtered: _I(e.filtered, t) }) : Object.assign(Object.assign({}, e), { unfiltered: _I(e.unfiltered, t) }) : e;
}
//#endregion
//#region node_modules/react-arborist/dist/module/state/initial.js
var yI = (e) => ({
	nodes: {
		open: {
			filtered: {},
			unfiltered: e?.initialOpenState ?? {}
		},
		focus: {
			id: null,
			treeFocused: !1
		},
		edit: { id: null },
		drag: {
			id: null,
			selectedIds: [],
			destinationParentId: null,
			destinationIndex: null
		},
		selection: {
			ids: /* @__PURE__ */ new Set(),
			anchor: null,
			mostRecent: null
		}
	},
	dnd: {
		cursor: { type: "none" },
		dragId: null,
		dragIds: [],
		parentId: null,
		index: -1
	}
}), bI = {
	clear: () => ({ type: "SELECTION_CLEAR" }),
	only: (e) => ({
		type: "SELECTION_ONLY",
		id: KF(e)
	}),
	add: (e) => ({
		type: "SELECTION_ADD",
		ids: (Array.isArray(e) ? e : [e]).map(KF)
	}),
	remove: (e) => ({
		type: "SELECTION_REMOVE",
		ids: (Array.isArray(e) ? e : [e]).map(KF)
	}),
	set: (e) => Object.assign({ type: "SELECTION_SET" }, e),
	mostRecent: (e) => ({
		type: "SELECTION_MOST_RECENT",
		id: e === null ? null : KF(e)
	}),
	anchor: (e) => ({
		type: "SELECTION_ANCHOR",
		id: e === null ? null : KF(e)
	})
};
function xI(e = yI().nodes.selection, t) {
	let n = e.ids;
	switch (t.type) {
		case "SELECTION_CLEAR": return Object.assign(Object.assign({}, e), { ids: /* @__PURE__ */ new Set() });
		case "SELECTION_ONLY": return Object.assign(Object.assign({}, e), { ids: new Set([t.id]) });
		case "SELECTION_ADD": return t.ids.length === 0 ? e : (t.ids.forEach((e) => n.add(e)), Object.assign(Object.assign({}, e), { ids: new Set(n) }));
		case "SELECTION_REMOVE": return t.ids.length === 0 ? e : (t.ids.forEach((e) => n.delete(e)), Object.assign(Object.assign({}, e), { ids: new Set(n) }));
		case "SELECTION_SET": return Object.assign(Object.assign({}, e), {
			ids: t.ids,
			mostRecent: t.mostRecent,
			anchor: t.anchor
		});
		case "SELECTION_MOST_RECENT": return Object.assign(Object.assign({}, e), { mostRecent: t.id });
		case "SELECTION_ANCHOR": return Object.assign(Object.assign({}, e), { anchor: t.id });
		default: return e;
	}
}
//#endregion
//#region node_modules/react-arborist/dist/module/state/dnd-slice.js
var SI = {
	cursor(e) {
		return {
			type: "DND_CURSOR",
			cursor: e
		};
	},
	dragStart(e, t) {
		return {
			type: "DND_DRAG_START",
			id: e,
			dragIds: t
		};
	},
	dragEnd() {
		return { type: "DND_DRAG_END" };
	},
	hovering(e, t) {
		return {
			type: "DND_HOVERING",
			parentId: e,
			index: t
		};
	}
};
function CI(e = yI().dnd, t) {
	switch (t.type) {
		case "DND_CURSOR": return Object.assign(Object.assign({}, e), { cursor: t.cursor });
		case "DND_DRAG_START": return Object.assign(Object.assign({}, e), {
			dragId: t.id,
			dragIds: t.dragIds
		});
		case "DND_DRAG_END": return yI().dnd;
		case "DND_HOVERING": return Object.assign(Object.assign({}, e), {
			parentId: t.parentId,
			index: t.index
		});
		default: return e;
	}
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/default-drag-preview.js
var wI = {
	position: "fixed",
	pointerEvents: "none",
	zIndex: 100,
	left: 0,
	top: 0,
	width: "100%",
	height: "100%"
}, TI = (e) => {
	if (!e) return { display: "none" };
	let { x: t, y: n } = e;
	return { transform: `translate(${t}px, ${n}px)` };
}, EI = (e) => {
	if (!e) return { display: "none" };
	let { x: t, y: n } = e;
	return { transform: `translate(${t + 10}px, ${n + 10}px)` };
};
function DI({ offset: e, mouse: t, id: n, dragIds: r, isDragging: i }) {
	return w(OI, {
		isDragging: i,
		children: [C(kI, {
			offset: e,
			children: C(jI, {
				id: n,
				dragIds: r
			})
		}), C(AI, {
			mouse: t,
			count: r.length
		})]
	});
}
var OI = l(function(e) {
	return e.isDragging ? C("div", {
		style: wI,
		children: e.children
	}) : null;
});
function kI(e) {
	return C("div", {
		className: "row preview",
		style: TI(e.offset),
		children: e.children
	});
}
function AI(e) {
	let { count: t, mouse: n } = e;
	return t > 1 ? C("div", {
		className: "selected-count",
		style: EI(n),
		children: t
	}) : null;
}
var jI = l(function(e) {
	let t = SF(), n = t.get(e.id);
	return n ? C(t.renderNode, {
		preview: !0,
		node: n,
		style: {
			paddingLeft: n.level * t.indent,
			opacity: .2,
			background: "transparent"
		},
		tree: t
	}) : null;
});
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function MI() {
	return MI = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, MI.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function NI(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function PI(e, t) {
	return PI = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, PI(e, t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function FI(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, PI(e, t);
}
//#endregion
//#region node_modules/memoize-one/dist/memoize-one.esm.js
var II = Number.isNaN || function(e) {
	return typeof e == "number" && e !== e;
};
function LI(e, t) {
	return !!(e === t || II(e) && II(t));
}
function RI(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (!LI(e[n], t[n])) return !1;
	return !0;
}
function zI(e, t) {
	t === void 0 && (t = RI);
	var n, r = [], i, a = !1;
	function o() {
		var o = [...arguments];
		return a && n === this && t(o, r) ? i : (i = e.apply(this, o), a = !0, n = this, r = o, i);
	}
	return o;
}
//#endregion
//#region node_modules/react-window/dist/index.esm.js
var BI = typeof performance == "object" && typeof performance.now == "function" ? function() {
	return performance.now();
} : function() {
	return Date.now();
};
function VI(e) {
	cancelAnimationFrame(e.id);
}
function HI(e, t) {
	var n = BI();
	function r() {
		BI() - n >= t ? e.call(null) : i.id = requestAnimationFrame(r);
	}
	var i = { id: requestAnimationFrame(r) };
	return i;
}
var UI = -1;
function WI(e) {
	if (e === void 0 && (e = !1), UI === -1 || e) {
		var t = document.createElement("div"), n = t.style;
		n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), UI = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
	}
	return UI;
}
var GI = null;
function KI(e) {
	if (e === void 0 && (e = !1), GI === null || e) {
		var t = document.createElement("div"), n = t.style;
		n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
		var r = document.createElement("div"), i = r.style;
		return i.width = "100px", i.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? GI = "positive-descending" : (t.scrollLeft = 1, GI = t.scrollLeft === 0 ? "negative" : "positive-ascending"), document.body.removeChild(t), GI;
	}
	return GI;
}
process.env.NODE_ENV !== "production" && typeof window < "u" && window.WeakSet;
var qI = 150, JI = function(e, t) {
	return e;
}, YI = null, XI = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && window.WeakSet !== void 0 && (YI = /*#__PURE__*/ new WeakSet(), XI = /*#__PURE__*/ new WeakSet());
function ZI(e) {
	var t, n = e.getItemOffset, i = e.getEstimatedTotalSize, a = e.getItemSize, s = e.getOffsetForIndexAndAlignment, c = e.getStartIndexForOffset, l = e.getStopIndexForStartIndex, u = e.initInstanceProps, d = e.shouldResetStyleCacheOnItemSizeChange, f = e.validateProps;
	return t = /*#__PURE__*/ function(e) {
		FI(t, e);
		function t(t) {
			var r = e.call(this, t) || this;
			return r._instanceProps = u(r.props, NI(r)), r._outerRef = void 0, r._resetIsScrollingTimeoutId = null, r.state = {
				instance: NI(r),
				isScrolling: !1,
				scrollDirection: "forward",
				scrollOffset: typeof r.props.initialScrollOffset == "number" ? r.props.initialScrollOffset : 0,
				scrollUpdateWasRequested: !1
			}, r._callOnItemsRendered = void 0, r._callOnItemsRendered = zI(function(e, t, n, i) {
				return r.props.onItemsRendered({
					overscanStartIndex: e,
					overscanStopIndex: t,
					visibleStartIndex: n,
					visibleStopIndex: i
				});
			}), r._callOnScroll = void 0, r._callOnScroll = zI(function(e, t, n) {
				return r.props.onScroll({
					scrollDirection: e,
					scrollOffset: t,
					scrollUpdateWasRequested: n
				});
			}), r._getItemStyle = void 0, r._getItemStyle = function(e) {
				var t = r.props, i = t.direction, o = t.itemSize, s = t.layout, c = r._getItemStyleCache(d && o, d && s, d && i), l;
				if (c.hasOwnProperty(e)) l = c[e];
				else {
					var u = n(r.props, e, r._instanceProps), f = a(r.props, e, r._instanceProps), p = i === "horizontal" || s === "horizontal", m = i === "rtl", h = p ? u : 0;
					c[e] = l = {
						position: "absolute",
						left: m ? void 0 : h,
						right: m ? h : void 0,
						top: p ? 0 : u,
						height: p ? "100%" : f,
						width: p ? f : "100%"
					};
				}
				return l;
			}, r._getItemStyleCache = void 0, r._getItemStyleCache = zI(function(e, t, n) {
				return {};
			}), r._onScrollHorizontal = function(e) {
				var t = e.currentTarget, n = t.clientWidth, i = t.scrollLeft, a = t.scrollWidth;
				r.setState(function(e) {
					if (e.scrollOffset === i) return null;
					var t = r.props.direction, o = i;
					if (t === "rtl") switch (KI()) {
						case "negative":
							o = -i;
							break;
						case "positive-descending":
							o = a - n - i;
							break;
					}
					return o = Math.max(0, Math.min(o, a - n)), {
						isScrolling: !0,
						scrollDirection: e.scrollOffset < o ? "forward" : "backward",
						scrollOffset: o,
						scrollUpdateWasRequested: !1
					};
				}, r._resetIsScrollingDebounced);
			}, r._onScrollVertical = function(e) {
				var t = e.currentTarget, n = t.clientHeight, i = t.scrollHeight, a = t.scrollTop;
				r.setState(function(e) {
					if (e.scrollOffset === a) return null;
					var t = Math.max(0, Math.min(a, i - n));
					return {
						isScrolling: !0,
						scrollDirection: e.scrollOffset < t ? "forward" : "backward",
						scrollOffset: t,
						scrollUpdateWasRequested: !1
					};
				}, r._resetIsScrollingDebounced);
			}, r._outerRefSetter = function(e) {
				var t = r.props.outerRef;
				r._outerRef = e, typeof t == "function" ? t(e) : typeof t == "object" && t && t.hasOwnProperty("current") && (t.current = e);
			}, r._resetIsScrollingDebounced = function() {
				r._resetIsScrollingTimeoutId !== null && VI(r._resetIsScrollingTimeoutId), r._resetIsScrollingTimeoutId = HI(r._resetIsScrolling, qI);
			}, r._resetIsScrolling = function() {
				r._resetIsScrollingTimeoutId = null, r.setState({ isScrolling: !1 }, function() {
					r._getItemStyleCache(-1, null);
				});
			}, r;
		}
		t.getDerivedStateFromProps = function(e, t) {
			return QI(e, t), f(e), null;
		};
		var r = t.prototype;
		return r.scrollTo = function(e) {
			e = Math.max(0, e), this.setState(function(t) {
				return t.scrollOffset === e ? null : {
					scrollDirection: t.scrollOffset < e ? "forward" : "backward",
					scrollOffset: e,
					scrollUpdateWasRequested: !0
				};
			}, this._resetIsScrollingDebounced);
		}, r.scrollToItem = function(e, t) {
			t === void 0 && (t = "auto");
			var n = this.props, r = n.itemCount, i = n.layout, a = this.state.scrollOffset;
			e = Math.max(0, Math.min(e, r - 1));
			var o = 0;
			if (this._outerRef) {
				var c = this._outerRef;
				o = i === "vertical" ? c.scrollWidth > c.clientWidth ? WI() : 0 : c.scrollHeight > c.clientHeight ? WI() : 0;
			}
			this.scrollTo(s(this.props, e, t, a, this._instanceProps, o));
		}, r.componentDidMount = function() {
			var e = this.props, t = e.direction, n = e.initialScrollOffset, r = e.layout;
			if (typeof n == "number" && this._outerRef != null) {
				var i = this._outerRef;
				t === "horizontal" || r === "horizontal" ? i.scrollLeft = n : i.scrollTop = n;
			}
			this._callPropsCallbacks();
		}, r.componentDidUpdate = function() {
			var e = this.props, t = e.direction, n = e.layout, r = this.state, i = r.scrollOffset;
			if (r.scrollUpdateWasRequested && this._outerRef != null) {
				var a = this._outerRef;
				if (t === "horizontal" || n === "horizontal") if (t === "rtl") switch (KI()) {
					case "negative":
						a.scrollLeft = -i;
						break;
					case "positive-ascending":
						a.scrollLeft = i;
						break;
					default:
						var o = a.clientWidth;
						a.scrollLeft = a.scrollWidth - o - i;
						break;
				}
				else a.scrollLeft = i;
				else a.scrollTop = i;
			}
			this._callPropsCallbacks();
		}, r.componentWillUnmount = function() {
			this._resetIsScrollingTimeoutId !== null && VI(this._resetIsScrollingTimeoutId);
		}, r.render = function() {
			var e = this.props, t = e.children, n = e.className, r = e.direction, a = e.height, s = e.innerRef, c = e.innerElementType, l = e.innerTagName, u = e.itemCount, d = e.itemData, f = e.itemKey, p = f === void 0 ? JI : f, m = e.layout, h = e.outerElementType, g = e.outerTagName, _ = e.style, v = e.useIsScrolling, y = e.width, b = this.state.isScrolling, x = r === "horizontal" || m === "horizontal", S = x ? this._onScrollHorizontal : this._onScrollVertical, C = this._getRangeToRender(), w = C[0], T = C[1], E = [];
			if (u > 0) for (var D = w; D <= T; D++) E.push(o(t, {
				data: d,
				key: p(D, d),
				index: D,
				isScrolling: v ? b : void 0,
				style: this._getItemStyle(D)
			}));
			var O = i(this.props, this._instanceProps);
			return o(h || g || "div", {
				className: n,
				onScroll: S,
				ref: this._outerRefSetter,
				style: MI({
					position: "relative",
					height: a,
					width: y,
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					willChange: "transform",
					direction: r
				}, _)
			}, o(c || l || "div", {
				children: E,
				ref: s,
				style: {
					height: x ? "100%" : O,
					pointerEvents: b ? "none" : void 0,
					width: x ? O : "100%"
				}
			}));
		}, r._callPropsCallbacks = function() {
			if (typeof this.props.onItemsRendered == "function" && this.props.itemCount > 0) {
				var e = this._getRangeToRender(), t = e[0], n = e[1], r = e[2], i = e[3];
				this._callOnItemsRendered(t, n, r, i);
			}
			if (typeof this.props.onScroll == "function") {
				var a = this.state, o = a.scrollDirection, s = a.scrollOffset, c = a.scrollUpdateWasRequested;
				this._callOnScroll(o, s, c);
			}
		}, r._getRangeToRender = function() {
			var e = this.props, t = e.itemCount, n = e.overscanCount, r = this.state, i = r.isScrolling, a = r.scrollDirection, o = r.scrollOffset;
			if (t === 0) return [
				0,
				0,
				0,
				0
			];
			var s = c(this.props, o, this._instanceProps), u = l(this.props, s, o, this._instanceProps), d = !i || a === "backward" ? Math.max(1, n) : 1, f = !i || a === "forward" ? Math.max(1, n) : 1;
			return [
				Math.max(0, s - d),
				Math.max(0, Math.min(t - 1, u + f)),
				s,
				u
			];
		}, t;
	}(r), t.defaultProps = {
		direction: "ltr",
		itemData: void 0,
		layout: "vertical",
		overscanCount: 2,
		useIsScrolling: !1
	}, t;
}
var QI = function(e, t) {
	var n = e.children, r = e.direction, i = e.height, a = e.layout, o = e.innerTagName, s = e.outerTagName, c = e.width, l = t.instance;
	if (process.env.NODE_ENV !== "production") {
		(o != null || s != null) && XI && !XI.has(l) && (XI.add(l), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
		var u = r === "horizontal" || a === "horizontal";
		switch (r) {
			case "horizontal":
			case "vertical":
				YI && !YI.has(l) && (YI.add(l), console.warn("The direction prop should be either \"ltr\" (default) or \"rtl\". Please use the layout prop to specify \"vertical\" (default) or \"horizontal\" orientation."));
				break;
			case "ltr":
			case "rtl": break;
			default: throw Error("An invalid \"direction\" prop has been specified. Value should be either \"ltr\" or \"rtl\". " + ("\"" + r + "\" was specified."));
		}
		switch (a) {
			case "horizontal":
			case "vertical": break;
			default: throw Error("An invalid \"layout\" prop has been specified. Value should be either \"horizontal\" or \"vertical\". " + ("\"" + a + "\" was specified."));
		}
		if (n == null) throw Error("An invalid \"children\" prop has been specified. Value should be a React component. " + ("\"" + (n === null ? "null" : typeof n) + "\" was specified."));
		if (u && typeof c != "number") throw Error("An invalid \"width\" prop has been specified. Horizontal lists must specify a number for width. " + ("\"" + (c === null ? "null" : typeof c) + "\" was specified."));
		if (!u && typeof i != "number") throw Error("An invalid \"height\" prop has been specified. Vertical lists must specify a number for height. " + ("\"" + (i === null ? "null" : typeof i) + "\" was specified."));
	}
}, $I = 50, eL = function(e, t, n) {
	var r = e.itemSize, i = n.itemMetadataMap, a = n.lastMeasuredIndex;
	if (t > a) {
		var o = 0;
		if (a >= 0) {
			var s = i[a];
			o = s.offset + s.size;
		}
		for (var c = a + 1; c <= t; c++) {
			var l = r(c);
			i[c] = {
				offset: o,
				size: l
			}, o += l;
		}
		n.lastMeasuredIndex = t;
	}
	return i[t];
}, tL = function(e, t, n) {
	var r = t.itemMetadataMap, i = t.lastMeasuredIndex;
	return (i > 0 ? r[i].offset : 0) >= n ? nL(e, t, i, 0, n) : rL(e, t, Math.max(0, i), n);
}, nL = function(e, t, n, r, i) {
	for (; r <= n;) {
		var a = r + Math.floor((n - r) / 2), o = eL(e, a, t).offset;
		if (o === i) return a;
		o < i ? r = a + 1 : o > i && (n = a - 1);
	}
	return r > 0 ? r - 1 : 0;
}, rL = function(e, t, n, r) {
	for (var i = e.itemCount, a = 1; n < i && eL(e, n, t).offset < r;) n += a, a *= 2;
	return nL(e, t, Math.min(n, i - 1), Math.floor(n / 2), r);
}, iL = function(e, t) {
	var n = e.itemCount, r = t.itemMetadataMap, i = t.estimatedItemSize, a = t.lastMeasuredIndex, o = 0;
	if (a >= n && (a = n - 1), a >= 0) {
		var s = r[a];
		o = s.offset + s.size;
	}
	var c = (n - a - 1) * i;
	return o + c;
}, aL = /*#__PURE__*/ ZI({
	getItemOffset: function(e, t, n) {
		return eL(e, t, n).offset;
	},
	getItemSize: function(e, t, n) {
		return n.itemMetadataMap[t].size;
	},
	getEstimatedTotalSize: iL,
	getOffsetForIndexAndAlignment: function(e, t, n, r, i, a) {
		var o = e.direction, s = e.height, c = e.layout, l = e.width, u = o === "horizontal" || c === "horizontal" ? l : s, d = eL(e, t, i), f = iL(e, i), p = Math.max(0, Math.min(f - u, d.offset)), m = Math.max(0, d.offset - u + d.size + a);
		switch (n === "smart" && (n = r >= m - u && r <= p + u ? "auto" : "center"), n) {
			case "start": return p;
			case "end": return m;
			case "center": return Math.round(m + (p - m) / 2);
			default: return r >= m && r <= p ? r : r < m ? m : p;
		}
	},
	getStartIndexForOffset: function(e, t, n) {
		return tL(e, n, t);
	},
	getStopIndexForStartIndex: function(e, t, n, r) {
		for (var i = e.direction, a = e.height, o = e.itemCount, s = e.layout, c = e.width, l = i === "horizontal" || s === "horizontal" ? c : a, u = eL(e, t, r), d = n + l, f = u.offset + u.size, p = t; p < o - 1 && f < d;) p++, f += eL(e, p, r).size;
		return p;
	},
	initInstanceProps: function(e, t) {
		var n = {
			itemMetadataMap: {},
			estimatedItemSize: e.estimatedItemSize || $I,
			lastMeasuredIndex: -1
		};
		return t.resetAfterIndex = function(e, r) {
			r === void 0 && (r = !0), n.lastMeasuredIndex = Math.min(n.lastMeasuredIndex, e - 1), t._getItemStyleCache(-1), r && t.forceUpdate();
		}, n;
	},
	shouldResetStyleCacheOnItemSizeChange: !1,
	validateProps: function(e) {
		var t = e.itemSize;
		if (process.env.NODE_ENV !== "production" && typeof t != "function") throw Error("An invalid \"itemSize\" prop has been specified. Value should be a function. " + ("\"" + (t === null ? "null" : typeof t) + "\" was specified."));
	}
}), oL = /*#__PURE__*/ ZI({
	getItemOffset: function(e, t) {
		return t * e.itemSize;
	},
	getItemSize: function(e, t) {
		return e.itemSize;
	},
	getEstimatedTotalSize: function(e) {
		var t = e.itemCount;
		return e.itemSize * t;
	},
	getOffsetForIndexAndAlignment: function(e, t, n, r, i, a) {
		var o = e.direction, s = e.height, c = e.itemCount, l = e.itemSize, u = e.layout, d = e.width, f = o === "horizontal" || u === "horizontal" ? d : s, p = Math.max(0, c * l - f), m = Math.min(p, t * l), h = Math.max(0, t * l - f + l + a);
		switch (n === "smart" && (n = r >= h - f && r <= m + f ? "auto" : "center"), n) {
			case "start": return m;
			case "end": return h;
			case "center":
				var g = Math.round(h + (m - h) / 2);
				return g < Math.ceil(f / 2) ? 0 : g > p + Math.floor(f / 2) ? p : g;
			default: return r >= h && r <= m ? r : r < h ? h : m;
		}
	},
	getStartIndexForOffset: function(e, t) {
		var n = e.itemCount, r = e.itemSize;
		return Math.max(0, Math.min(n - 1, Math.floor(t / r)));
	},
	getStopIndexForStartIndex: function(e, t, n) {
		var r = e.direction, i = e.height, a = e.itemCount, o = e.itemSize, s = e.layout, c = e.width, l = r === "horizontal" || s === "horizontal", u = t * o, d = Math.ceil(((l ? c : i) + n - u) / o);
		return Math.max(0, Math.min(a - 1, t + d - 1));
	},
	initInstanceProps: function(e) {},
	shouldResetStyleCacheOnItemSizeChange: !0,
	validateProps: function(e) {
		var t = e.itemSize;
		if (process.env.NODE_ENV !== "production" && typeof t != "number") throw Error("An invalid \"itemSize\" prop has been specified. Value should be a number. " + ("\"" + (t === null ? "null" : typeof t) + "\" was specified."));
	}
});
//#endregion
//#region node_modules/react-arborist/dist/module/components/cursor.js
function sL() {
	let e = SF(), t = EF().cursor;
	if (!t || t.type !== "line") return null;
	let n = e.indent, r = e.rowTopPosition(t.index) + (e.props.padding ?? e.props.paddingTop ?? 0), i = n * t.level, a = e.renderCursor;
	return C(a, {
		top: r,
		left: i,
		indent: n
	});
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/list-outer-element.js
var cL = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}, lL = s(function(e, t) {
	let { children: n } = e, r = cL(e, ["children"]), i = SF();
	return w("div", Object.assign({ ref: t }, r, {
		onClick: (e) => {
			e.currentTarget === e.target && i.deselectAll();
		},
		children: [C(uL, {}), n]
	}));
}), uL = () => {
	let e = SF();
	return C("div", {
		style: {
			height: e.rowTopPosition(e.visibleNodes.length),
			width: "100%",
			position: "absolute",
			left: "0",
			right: "0"
		},
		children: C(sL, {})
	});
}, dL = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}, fL = s(function(e, t) {
	var { style: n } = e, r = dL(e, ["style"]);
	let i = SF(), a = i.props.padding ?? i.props.paddingTop ?? 0, o = i.props.padding ?? i.props.paddingBottom ?? 0;
	return C("div", Object.assign({
		ref: t,
		style: Object.assign(Object.assign({}, n), { height: `${parseFloat(n.height) + a + o}px` })
	}, r));
}), pL = a({ dragDropManager: void 0 }), mL;
(function(e) {
	e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(mL ||= {});
//#endregion
//#region node_modules/@react-dnd/invariant/dist/invariant.esm.js
function Q(e, t) {
	var n = [...arguments].slice(2);
	if (process.env.NODE_ENV !== "production" && t === void 0) throw Error("invariant requires an error message argument");
	if (!e) {
		var r;
		if (t === void 0) r = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
		else {
			var i = 0;
			r = Error(t.replace(/%s/g, function() {
				return n[i++];
			})), r.name = "Invariant Violation";
		}
		throw r.framesToPop = 1, r;
	}
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/types.js
var hL = "dnd-core/INIT_COORDS", gL = "dnd-core/BEGIN_DRAG", _L = "dnd-core/PUBLISH_DRAG_SOURCE", vL = "dnd-core/HOVER", yL = "dnd-core/DROP", bL = "dnd-core/END_DRAG";
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js
function xL(e, t) {
	return {
		type: hL,
		payload: {
			sourceClientOffset: t || null,
			clientOffset: e || null
		}
	};
}
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/js_utils.js
function SL(e) {
	"@babel/helpers - typeof";
	return SL = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, SL(e);
}
function CL(e, t, n) {
	return t.split(".").reduce(function(e, t) {
		return e && e[t] ? e[t] : n || null;
	}, e);
}
function wL(e, t) {
	return e.filter(function(e) {
		return e !== t;
	});
}
function TL(e) {
	return SL(e) === "object";
}
function EL(e, t) {
	var n = /* @__PURE__ */ new Map(), r = function(e) {
		n.set(e, n.has(e) ? n.get(e) + 1 : 1);
	};
	e.forEach(r), t.forEach(r);
	var i = [];
	return n.forEach(function(e, t) {
		e === 1 && i.push(t);
	}), i;
}
function DL(e, t) {
	return e.filter(function(e) {
		return t.indexOf(e) > -1;
	});
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js
var OL = {
	type: hL,
	payload: {
		clientOffset: null,
		sourceClientOffset: null
	}
};
function kL(e) {
	return function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { publishSource: !0 }, r = n.publishSource, i = r === void 0 ? !0 : r, a = n.clientOffset, o = n.getSourceClientOffset, s = e.getMonitor(), c = e.getRegistry();
		e.dispatch(xL(a)), AL(t, s, c);
		var l = NL(t, s);
		if (l === null) {
			e.dispatch(OL);
			return;
		}
		var u = null;
		if (a) {
			if (!o) throw Error("getSourceClientOffset must be defined");
			jL(o), u = o(l);
		}
		e.dispatch(xL(a, u));
		var d = c.getSource(l).beginDrag(s, l);
		if (d != null) return ML(d), c.pinSource(l), {
			type: gL,
			payload: {
				itemType: c.getSourceType(l),
				item: d,
				sourceId: l,
				clientOffset: a || null,
				sourceClientOffset: u || null,
				isSourcePublic: !!i
			}
		};
	};
}
function AL(e, t, n) {
	Q(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
		Q(n.getSource(e), "Expected sourceIds to be registered.");
	});
}
function jL(e) {
	Q(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function ML(e) {
	Q(TL(e), "Item must be an object.");
}
function NL(e, t) {
	for (var n = null, r = e.length - 1; r >= 0; r--) if (t.canDragSource(e[r])) {
		n = e[r];
		break;
	}
	return n;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js
function PL(e) {
	return function() {
		if (e.getMonitor().isDragging()) return { type: _L };
	};
}
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/matchesType.js
function FL(e, t) {
	return t === null ? e === null : Array.isArray(e) ? e.some(function(e) {
		return e === t;
	}) : e === t;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js
function IL(e) {
	return function(t) {
		var n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).clientOffset;
		LL(t);
		var r = t.slice(0), i = e.getMonitor(), a = e.getRegistry();
		return RL(r, i, a), zL(r, a, i.getItemType()), BL(r, i, a), {
			type: vL,
			payload: {
				targetIds: r,
				clientOffset: n || null
			}
		};
	};
}
function LL(e) {
	Q(Array.isArray(e), "Expected targetIds to be an array.");
}
function RL(e, t, n) {
	Q(t.isDragging(), "Cannot call hover while not dragging."), Q(!t.didDrop(), "Cannot call hover after drop.");
	for (var r = 0; r < e.length; r++) {
		var i = e[r];
		Q(e.lastIndexOf(i) === r, "Expected targetIds to be unique in the passed array."), Q(n.getTarget(i), "Expected targetIds to be registered.");
	}
}
function zL(e, t, n) {
	for (var r = e.length - 1; r >= 0; r--) {
		var i = e[r];
		FL(t.getTargetType(i), n) || e.splice(r, 1);
	}
}
function BL(e, t, n) {
	e.forEach(function(e) {
		n.getTarget(e).hover(t, e);
	});
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js
function VL(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function HL(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? VL(Object(n), !0).forEach(function(t) {
			UL(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : VL(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function UL(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function WL(e) {
	return function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), r = e.getRegistry();
		GL(n), JL(n).forEach(function(i, a) {
			var o = KL(i, a, r, n), s = {
				type: yL,
				payload: { dropResult: HL(HL({}, t), o) }
			};
			e.dispatch(s);
		});
	};
}
function GL(e) {
	Q(e.isDragging(), "Cannot call drop while not dragging."), Q(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function KL(e, t, n, r) {
	var i = n.getTarget(e), a = i ? i.drop(r, e) : void 0;
	return qL(a), a === void 0 && (a = t === 0 ? {} : r.getDropResult()), a;
}
function qL(e) {
	Q(e === void 0 || TL(e), "Drop result must either be an object or undefined.");
}
function JL(e) {
	var t = e.getTargetIds().filter(e.canDropOnTarget, e);
	return t.reverse(), t;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js
function YL(e) {
	return function() {
		var t = e.getMonitor(), n = e.getRegistry();
		XL(t);
		var r = t.getSourceId();
		return r != null && (n.getSource(r, !0).endDrag(t, r), n.unpinSource()), { type: bL };
	};
}
function XL(e) {
	Q(e.isDragging(), "Cannot call endDrag while not dragging.");
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/dragDrop/index.js
function ZL(e) {
	return {
		beginDrag: kL(e),
		publishDragSource: PL(e),
		hover: IL(e),
		drop: WL(e),
		endDrag: YL(e)
	};
}
//#endregion
//#region node_modules/dnd-core/dist/esm/classes/DragDropManagerImpl.js
function QL(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function $L(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function eR(e, t, n) {
	return t && $L(e.prototype, t), n && $L(e, n), e;
}
function tR(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var nR = /*#__PURE__*/ function() {
	function e(t, n) {
		var r = this;
		QL(this, e), tR(this, "store", void 0), tR(this, "monitor", void 0), tR(this, "backend", void 0), tR(this, "isSetUp", !1), tR(this, "handleRefCountChange", function() {
			var e = r.store.getState().refCount > 0;
			r.backend && (e && !r.isSetUp ? (r.backend.setup(), r.isSetUp = !0) : !e && r.isSetUp && (r.backend.teardown(), r.isSetUp = !1));
		}), this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange);
	}
	return eR(e, [
		{
			key: "receiveBackend",
			value: function(e) {
				this.backend = e;
			}
		},
		{
			key: "getMonitor",
			value: function() {
				return this.monitor;
			}
		},
		{
			key: "getBackend",
			value: function() {
				return this.backend;
			}
		},
		{
			key: "getRegistry",
			value: function() {
				return this.monitor.registry;
			}
		},
		{
			key: "getActions",
			value: function() {
				var e = this, t = this.store.dispatch;
				function n(n) {
					return function() {
						var r = [...arguments], i = n.apply(e, r);
						i !== void 0 && t(i);
					};
				}
				var r = ZL(this);
				return Object.keys(r).reduce(function(e, t) {
					var i = r[t];
					return e[t] = n(i), e;
				}, {});
			}
		},
		{
			key: "dispatch",
			value: function(e) {
				this.store.dispatch(e);
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/dnd-core/node_modules/redux/es/redux.js
function rR(e) {
	return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var iR = (function() {
	return typeof Symbol == "function" && Symbol.observable || "@@observable";
})(), aR = function() {
	return Math.random().toString(36).substring(7).split("").join(".");
}, oR = {
	INIT: "@@redux/INIT" + aR(),
	REPLACE: "@@redux/REPLACE" + aR(),
	PROBE_UNKNOWN_ACTION: function() {
		return "@@redux/PROBE_UNKNOWN_ACTION" + aR();
	}
};
function sR(e) {
	if (typeof e != "object" || !e) return !1;
	for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function cR(e) {
	if (e === void 0) return "undefined";
	if (e === null) return "null";
	var t = typeof e;
	switch (t) {
		case "boolean":
		case "string":
		case "number":
		case "symbol":
		case "function": return t;
	}
	if (Array.isArray(e)) return "array";
	if (dR(e)) return "date";
	if (uR(e)) return "error";
	var n = lR(e);
	switch (n) {
		case "Symbol":
		case "Promise":
		case "WeakMap":
		case "WeakSet":
		case "Map":
		case "Set": return n;
	}
	return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function lR(e) {
	return typeof e.constructor == "function" ? e.constructor.name : null;
}
function uR(e) {
	return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function dR(e) {
	return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function fR(e) {
	var t = typeof e;
	return process.env.NODE_ENV !== "production" && (t = cR(e)), t;
}
function pR(e, t, n) {
	var r;
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(process.env.NODE_ENV === "production" ? rR(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(process.env.NODE_ENV === "production" ? rR(1) : "Expected the enhancer to be a function. Instead, received: '" + fR(n) + "'");
		return n(pR)(e, t);
	}
	if (typeof e != "function") throw Error(process.env.NODE_ENV === "production" ? rR(2) : "Expected the root reducer to be a function. Instead, received: '" + fR(e) + "'");
	var i = e, a = t, o = [], s = o, c = !1;
	function l() {
		s === o && (s = o.slice());
	}
	function u() {
		if (c) throw Error(process.env.NODE_ENV === "production" ? rR(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
		return a;
	}
	function d(e) {
		if (typeof e != "function") throw Error(process.env.NODE_ENV === "production" ? rR(4) : "Expected the listener to be a function. Instead, received: '" + fR(e) + "'");
		if (c) throw Error(process.env.NODE_ENV === "production" ? rR(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
		var t = !0;
		return l(), s.push(e), function() {
			if (t) {
				if (c) throw Error(process.env.NODE_ENV === "production" ? rR(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
				t = !1, l();
				var n = s.indexOf(e);
				s.splice(n, 1), o = null;
			}
		};
	}
	function f(e) {
		if (!sR(e)) throw Error(process.env.NODE_ENV === "production" ? rR(7) : "Actions must be plain objects. Instead, the actual type was: '" + fR(e) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
		if (e.type === void 0) throw Error(process.env.NODE_ENV === "production" ? rR(8) : "Actions may not have an undefined \"type\" property. You may have misspelled an action type string constant.");
		if (c) throw Error(process.env.NODE_ENV === "production" ? rR(9) : "Reducers may not dispatch actions.");
		try {
			c = !0, a = i(a, e);
		} finally {
			c = !1;
		}
		for (var t = o = s, n = 0; n < t.length; n++) {
			var r = t[n];
			r();
		}
		return e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(process.env.NODE_ENV === "production" ? rR(10) : "Expected the nextReducer to be a function. Instead, received: '" + fR(e));
		i = e, f({ type: oR.REPLACE });
	}
	function m() {
		var e, t = d;
		return e = { subscribe: function(e) {
			if (typeof e != "object" || !e) throw Error(process.env.NODE_ENV === "production" ? rR(11) : "Expected the observer to be an object. Instead, received: '" + fR(e) + "'");
			function n() {
				e.next && e.next(u());
			}
			return n(), { unsubscribe: t(n) };
		} }, e[iR] = function() {
			return this;
		}, e;
	}
	return f({ type: oR.INIT }), r = {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p
	}, r[iR] = m, r;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/equality.js
var mR = function(e, t) {
	return e === t;
};
function hR(e, t) {
	return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function gR(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mR;
	if (e.length !== t.length) return !1;
	for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
	return !0;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/dragOffset.js
function _R(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function vR(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? _R(Object(n), !0).forEach(function(t) {
			yR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _R(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function yR(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var bR = {
	initialSourceClientOffset: null,
	initialClientOffset: null,
	clientOffset: null
};
function xR() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bR, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
	switch (t.type) {
		case hL:
		case gL: return {
			initialSourceClientOffset: n.sourceClientOffset,
			initialClientOffset: n.clientOffset,
			clientOffset: n.clientOffset
		};
		case vL: return hR(e.clientOffset, n.clientOffset) ? e : vR(vR({}, e), {}, { clientOffset: n.clientOffset });
		case bL:
		case yL: return bR;
		default: return e;
	}
}
//#endregion
//#region node_modules/dnd-core/dist/esm/actions/registry.js
var SR = "dnd-core/ADD_SOURCE", CR = "dnd-core/ADD_TARGET", wR = "dnd-core/REMOVE_SOURCE", TR = "dnd-core/REMOVE_TARGET";
function ER(e) {
	return {
		type: SR,
		payload: { sourceId: e }
	};
}
function DR(e) {
	return {
		type: CR,
		payload: { targetId: e }
	};
}
function OR(e) {
	return {
		type: wR,
		payload: { sourceId: e }
	};
}
function kR(e) {
	return {
		type: TR,
		payload: { targetId: e }
	};
}
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/dragOperation.js
function AR(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function jR(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? AR(Object(n), !0).forEach(function(t) {
			MR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : AR(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function MR(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var NR = {
	itemType: null,
	item: null,
	sourceId: null,
	targetIds: [],
	dropResult: null,
	didDrop: !1,
	isSourcePublic: null
};
function PR() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : NR, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
	switch (t.type) {
		case gL: return jR(jR({}, e), {}, {
			itemType: n.itemType,
			item: n.item,
			sourceId: n.sourceId,
			isSourcePublic: n.isSourcePublic,
			dropResult: null,
			didDrop: !1
		});
		case _L: return jR(jR({}, e), {}, { isSourcePublic: !0 });
		case vL: return jR(jR({}, e), {}, { targetIds: n.targetIds });
		case TR: return e.targetIds.indexOf(n.targetId) === -1 ? e : jR(jR({}, e), {}, { targetIds: wL(e.targetIds, n.targetId) });
		case yL: return jR(jR({}, e), {}, {
			dropResult: n.dropResult,
			didDrop: !0,
			targetIds: []
		});
		case bL: return jR(jR({}, e), {}, {
			itemType: null,
			item: null,
			sourceId: null,
			dropResult: null,
			didDrop: !1,
			isSourcePublic: null,
			targetIds: []
		});
		default: return e;
	}
}
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/refCount.js
function FR() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
	switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
		case SR:
		case CR: return e + 1;
		case wR:
		case TR: return e - 1;
		default: return e;
	}
}
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/dirtiness.js
var IR = [], LR = [];
IR.__IS_NONE__ = !0, LR.__IS_ALL__ = !0;
function RR(e, t) {
	return e === IR ? !1 : e === LR || t === void 0 ? !0 : DL(t, e).length > 0;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js
function zR() {
	arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
	var e = arguments.length > 1 ? arguments[1] : void 0;
	switch (e.type) {
		case vL: break;
		case SR:
		case CR:
		case TR:
		case wR: return IR;
		case gL:
		case _L:
		case bL:
		case yL:
		default: return LR;
	}
	var t = e.payload, n = t.targetIds, r = n === void 0 ? [] : n, i = t.prevTargetIds, a = i === void 0 ? [] : i, o = EL(r, a);
	if (!(o.length > 0 || !gR(r, a))) return IR;
	var s = a[a.length - 1], c = r[r.length - 1];
	return s !== c && (s && o.push(s), c && o.push(c)), o;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/stateId.js
function BR() {
	return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0) + 1;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/reducers/index.js
function VR(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function HR(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? VR(Object(n), !0).forEach(function(t) {
			UR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : VR(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function UR(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function WR() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
	return {
		dirtyHandlerIds: zR(e.dirtyHandlerIds, {
			type: t.type,
			payload: HR(HR({}, t.payload), {}, { prevTargetIds: CL(e, "dragOperation.targetIds", []) })
		}),
		dragOffset: xR(e.dragOffset, t),
		refCount: FR(e.refCount, t),
		dragOperation: PR(e.dragOperation, t),
		stateId: BR(e.stateId)
	};
}
//#endregion
//#region node_modules/dnd-core/dist/esm/utils/coords.js
function GR(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function KR(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function qR(e) {
	var t = e.clientOffset, n = e.initialClientOffset, r = e.initialSourceClientOffset;
	return !t || !n || !r ? null : KR(GR(t, r), n);
}
function JR(e) {
	var t = e.clientOffset, n = e.initialClientOffset;
	return !t || !n ? null : KR(t, n);
}
//#endregion
//#region node_modules/dnd-core/dist/esm/classes/DragDropMonitorImpl.js
function YR(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function XR(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function ZR(e, t, n) {
	return t && XR(e.prototype, t), n && XR(e, n), e;
}
function QR(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var $R = /*#__PURE__*/ function() {
	function e(t, n) {
		YR(this, e), QR(this, "store", void 0), QR(this, "registry", void 0), this.store = t, this.registry = n;
	}
	return ZR(e, [
		{
			key: "subscribeToStateChange",
			value: function(e) {
				var t = this, n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { handlerIds: void 0 }).handlerIds;
				Q(typeof e == "function", "listener must be a function."), Q(n === void 0 || Array.isArray(n), "handlerIds, when specified, must be an array of strings.");
				var r = this.store.getState().stateId;
				return this.store.subscribe(function() {
					var i = t.store.getState(), a = i.stateId;
					try {
						a === r || a === r + 1 && !RR(i.dirtyHandlerIds, n) || e();
					} finally {
						r = a;
					}
				});
			}
		},
		{
			key: "subscribeToOffsetChange",
			value: function(e) {
				var t = this;
				Q(typeof e == "function", "listener must be a function.");
				var n = this.store.getState().dragOffset;
				return this.store.subscribe(function() {
					var r = t.store.getState().dragOffset;
					r !== n && (n = r, e());
				});
			}
		},
		{
			key: "canDragSource",
			value: function(e) {
				if (!e) return !1;
				var t = this.registry.getSource(e);
				return Q(t, `Expected to find a valid source. sourceId=${e}`), this.isDragging() ? !1 : t.canDrag(this, e);
			}
		},
		{
			key: "canDropOnTarget",
			value: function(e) {
				if (!e) return !1;
				var t = this.registry.getTarget(e);
				return Q(t, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop() ? !1 : FL(this.registry.getTargetType(e), this.getItemType()) && t.canDrop(this, e);
			}
		},
		{
			key: "isDragging",
			value: function() {
				return !!this.getItemType();
			}
		},
		{
			key: "isDraggingSource",
			value: function(e) {
				if (!e) return !1;
				var t = this.registry.getSource(e, !0);
				return Q(t, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic() || this.registry.getSourceType(e) !== this.getItemType() ? !1 : t.isDragging(this, e);
			}
		},
		{
			key: "isOverTarget",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { shallow: !1 };
				if (!e) return !1;
				var n = t.shallow;
				if (!this.isDragging()) return !1;
				var r = this.registry.getTargetType(e), i = this.getItemType();
				if (i && !FL(r, i)) return !1;
				var a = this.getTargetIds();
				if (!a.length) return !1;
				var o = a.indexOf(e);
				return n ? o === a.length - 1 : o > -1;
			}
		},
		{
			key: "getItemType",
			value: function() {
				return this.store.getState().dragOperation.itemType;
			}
		},
		{
			key: "getItem",
			value: function() {
				return this.store.getState().dragOperation.item;
			}
		},
		{
			key: "getSourceId",
			value: function() {
				return this.store.getState().dragOperation.sourceId;
			}
		},
		{
			key: "getTargetIds",
			value: function() {
				return this.store.getState().dragOperation.targetIds;
			}
		},
		{
			key: "getDropResult",
			value: function() {
				return this.store.getState().dragOperation.dropResult;
			}
		},
		{
			key: "didDrop",
			value: function() {
				return this.store.getState().dragOperation.didDrop;
			}
		},
		{
			key: "isSourcePublic",
			value: function() {
				return !!this.store.getState().dragOperation.isSourcePublic;
			}
		},
		{
			key: "getInitialClientOffset",
			value: function() {
				return this.store.getState().dragOffset.initialClientOffset;
			}
		},
		{
			key: "getInitialSourceClientOffset",
			value: function() {
				return this.store.getState().dragOffset.initialSourceClientOffset;
			}
		},
		{
			key: "getClientOffset",
			value: function() {
				return this.store.getState().dragOffset.clientOffset;
			}
		},
		{
			key: "getSourceClientOffset",
			value: function() {
				return qR(this.store.getState().dragOffset);
			}
		},
		{
			key: "getDifferenceFromInitialOffset",
			value: function() {
				return JR(this.store.getState().dragOffset);
			}
		}
	]), e;
}(), ez = 0;
function tz() {
	return ez++;
}
//#endregion
//#region node_modules/dnd-core/dist/esm/contracts.js
function nz(e) {
	"@babel/helpers - typeof";
	return nz = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, nz(e);
}
function rz(e) {
	Q(typeof e.canDrag == "function", "Expected canDrag to be a function."), Q(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), Q(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function iz(e) {
	Q(typeof e.canDrop == "function", "Expected canDrop to be a function."), Q(typeof e.hover == "function", "Expected hover to be a function."), Q(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function az(e, t) {
	if (t && Array.isArray(e)) {
		e.forEach(function(e) {
			return az(e, !1);
		});
		return;
	}
	Q(typeof e == "string" || nz(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
//#endregion
//#region node_modules/@react-dnd/asap/dist/esm/makeRequestCall.mjs
var oz = typeof global < "u" ? global : self, sz = oz.MutationObserver || oz.WebKitMutationObserver;
function cz(e) {
	return function() {
		let t = setTimeout(r, 0), n = setInterval(r, 50);
		function r() {
			clearTimeout(t), clearInterval(n), e();
		}
	};
}
function lz(e) {
	let t = 1, n = new sz(e), r = document.createTextNode("");
	return n.observe(r, { characterData: !0 }), function() {
		t = -t, r.data = t;
	};
}
var uz = typeof sz == "function" ? lz : cz, dz = class {
	enqueueTask(e) {
		let { queue: t, requestFlush: n } = this;
		t.length || (n(), this.flushing = !0), t[t.length] = e;
	}
	constructor() {
		this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
			let { queue: e } = this;
			for (; this.index < e.length;) {
				let t = this.index;
				if (this.index++, e[t].call(), this.index > this.capacity) {
					for (let t = 0, n = e.length - this.index; t < n; t++) e[t] = e[t + this.index];
					e.length -= this.index, this.index = 0;
				}
			}
			e.length = 0, this.index = 0, this.flushing = !1;
		}, this.registerPendingError = (e) => {
			this.pendingErrors.push(e), this.requestErrorThrow();
		}, this.requestFlush = uz(this.flush), this.requestErrorThrow = cz(() => {
			if (this.pendingErrors.length) throw this.pendingErrors.shift();
		});
	}
}, fz = class {
	call() {
		try {
			this.task && this.task();
		} catch (e) {
			this.onError(e);
		} finally {
			this.task = null, this.release(this);
		}
	}
	constructor(e, t) {
		this.onError = e, this.release = t, this.task = null;
	}
}, pz = class {
	create(e) {
		let t = this.freeTasks, n = t.length ? t.pop() : new fz(this.onError, (e) => t[t.length] = e);
		return n.task = e, n;
	}
	constructor(e) {
		this.onError = e, this.freeTasks = [];
	}
}, mz = new dz(), hz = new pz(mz.registerPendingError);
function gz(e) {
	mz.enqueueTask(hz.create(e));
}
//#endregion
//#region node_modules/dnd-core/dist/esm/classes/HandlerRegistryImpl.js
function _z(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function vz(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function yz(e, t, n) {
	return t && vz(e.prototype, t), n && vz(e, n), e;
}
function bz(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xz(e, t) {
	return Ez(e) || Tz(e, t) || Cz(e, t) || Sz();
}
function Sz() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Cz(e, t) {
	if (e) {
		if (typeof e == "string") return wz(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wz(e, t);
	}
}
function wz(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Tz(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function Ez(e) {
	if (Array.isArray(e)) return e;
}
function Dz(e) {
	var t = tz().toString();
	switch (e) {
		case mL.SOURCE: return `S${t}`;
		case mL.TARGET: return `T${t}`;
		default: throw Error(`Unknown Handler Role: ${e}`);
	}
}
function Oz(e) {
	switch (e[0]) {
		case "S": return mL.SOURCE;
		case "T": return mL.TARGET;
		default: Q(!1, `Cannot parse handler ID: ${e}`);
	}
}
function kz(e, t) {
	var n = e.entries(), r = !1;
	do {
		var i = n.next(), a = i.done;
		if (xz(i.value, 2)[1] === t) return !0;
		r = !!a;
	} while (!r);
	return !1;
}
var Az = /*#__PURE__*/ function() {
	function e(t) {
		_z(this, e), bz(this, "types", /* @__PURE__ */ new Map()), bz(this, "dragSources", /* @__PURE__ */ new Map()), bz(this, "dropTargets", /* @__PURE__ */ new Map()), bz(this, "pinnedSourceId", null), bz(this, "pinnedSource", null), bz(this, "store", void 0), this.store = t;
	}
	return yz(e, [
		{
			key: "addSource",
			value: function(e, t) {
				az(e), rz(t);
				var n = this.addHandler(mL.SOURCE, e, t);
				return this.store.dispatch(ER(n)), n;
			}
		},
		{
			key: "addTarget",
			value: function(e, t) {
				az(e, !0), iz(t);
				var n = this.addHandler(mL.TARGET, e, t);
				return this.store.dispatch(DR(n)), n;
			}
		},
		{
			key: "containsHandler",
			value: function(e) {
				return kz(this.dragSources, e) || kz(this.dropTargets, e);
			}
		},
		{
			key: "getSource",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
				return Q(this.isSourceId(e), "Expected a valid source ID."), t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
			}
		},
		{
			key: "getTarget",
			value: function(e) {
				return Q(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
			}
		},
		{
			key: "getSourceType",
			value: function(e) {
				return Q(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
			}
		},
		{
			key: "getTargetType",
			value: function(e) {
				return Q(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
			}
		},
		{
			key: "isSourceId",
			value: function(e) {
				return Oz(e) === mL.SOURCE;
			}
		},
		{
			key: "isTargetId",
			value: function(e) {
				return Oz(e) === mL.TARGET;
			}
		},
		{
			key: "removeSource",
			value: function(e) {
				var t = this;
				Q(this.getSource(e), "Expected an existing source."), this.store.dispatch(OR(e)), gz(function() {
					t.dragSources.delete(e), t.types.delete(e);
				});
			}
		},
		{
			key: "removeTarget",
			value: function(e) {
				Q(this.getTarget(e), "Expected an existing target."), this.store.dispatch(kR(e)), this.dropTargets.delete(e), this.types.delete(e);
			}
		},
		{
			key: "pinSource",
			value: function(e) {
				var t = this.getSource(e);
				Q(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t;
			}
		},
		{
			key: "unpinSource",
			value: function() {
				Q(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
			}
		},
		{
			key: "addHandler",
			value: function(e, t, n) {
				var r = Dz(e);
				return this.types.set(r, t), e === mL.SOURCE ? this.dragSources.set(r, n) : e === mL.TARGET && this.dropTargets.set(r, n), r;
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/dnd-core/dist/esm/createDragDropManager.js
function jz(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Mz(arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1), i = new nR(r, new $R(r, new Az(r))), a = e(i, t, n);
	return i.receiveBackend(a), i;
}
function Mz(e) {
	var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
	return pR(WR, e && t && t({
		name: "dnd-core",
		instanceId: "dnd-core"
	}));
}
//#endregion
//#region node_modules/react-dnd/dist/esm/core/DndProvider.js
var Nz = ["children"];
function Pz(e, t) {
	return zz(e) || Rz(e, t) || Iz(e, t) || Fz();
}
function Fz() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Iz(e, t) {
	if (e) {
		if (typeof e == "string") return Lz(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lz(e, t);
	}
}
function Lz(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Rz(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function zz(e) {
	if (Array.isArray(e)) return e;
}
function Bz(e, t) {
	if (e == null) return {};
	var n = Vz(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Vz(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var Hz = 0, Uz = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Wz = l(function(e) {
	var t = e.children, n = Pz(Gz(Bz(e, Nz)), 2), r = n[0], i = n[1];
	return f(function() {
		if (i) {
			var e = qz();
			return ++Hz, function() {
				--Hz === 0 && (e[Uz] = null);
			};
		}
	}, []), C(pL.Provider, Object.assign({ value: r }, { children: t }), void 0);
});
function Gz(e) {
	return "manager" in e ? [{ dragDropManager: e.manager }, !1] : [Kz(e.backend, e.context, e.options, e.debugMode), !e.context];
}
function Kz(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qz(), n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = t;
	return i[Uz] || (i[Uz] = { dragDropManager: jz(e, t, n, r) }), i[Uz];
}
function qz() {
	return typeof global < "u" ? global : window;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/internals/DragSourceMonitorImpl.js
function Jz(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Yz(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function Xz(e, t, n) {
	return t && Yz(e.prototype, t), n && Yz(e, n), e;
}
function Zz(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var Qz = !1, $z = !1, eB = /*#__PURE__*/ function() {
	function e(t) {
		Jz(this, e), Zz(this, "internalMonitor", void 0), Zz(this, "sourceId", null), this.internalMonitor = t.getMonitor();
	}
	return Xz(e, [
		{
			key: "receiveHandlerId",
			value: function(e) {
				this.sourceId = e;
			}
		},
		{
			key: "getHandlerId",
			value: function() {
				return this.sourceId;
			}
		},
		{
			key: "canDrag",
			value: function() {
				Q(!Qz, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
				try {
					return Qz = !0, this.internalMonitor.canDragSource(this.sourceId);
				} finally {
					Qz = !1;
				}
			}
		},
		{
			key: "isDragging",
			value: function() {
				if (!this.sourceId) return !1;
				Q(!$z, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
				try {
					return $z = !0, this.internalMonitor.isDraggingSource(this.sourceId);
				} finally {
					$z = !1;
				}
			}
		},
		{
			key: "subscribeToStateChange",
			value: function(e, t) {
				return this.internalMonitor.subscribeToStateChange(e, t);
			}
		},
		{
			key: "isDraggingSource",
			value: function(e) {
				return this.internalMonitor.isDraggingSource(e);
			}
		},
		{
			key: "isOverTarget",
			value: function(e, t) {
				return this.internalMonitor.isOverTarget(e, t);
			}
		},
		{
			key: "getTargetIds",
			value: function() {
				return this.internalMonitor.getTargetIds();
			}
		},
		{
			key: "isSourcePublic",
			value: function() {
				return this.internalMonitor.isSourcePublic();
			}
		},
		{
			key: "getSourceId",
			value: function() {
				return this.internalMonitor.getSourceId();
			}
		},
		{
			key: "subscribeToOffsetChange",
			value: function(e) {
				return this.internalMonitor.subscribeToOffsetChange(e);
			}
		},
		{
			key: "canDragSource",
			value: function(e) {
				return this.internalMonitor.canDragSource(e);
			}
		},
		{
			key: "canDropOnTarget",
			value: function(e) {
				return this.internalMonitor.canDropOnTarget(e);
			}
		},
		{
			key: "getItemType",
			value: function() {
				return this.internalMonitor.getItemType();
			}
		},
		{
			key: "getItem",
			value: function() {
				return this.internalMonitor.getItem();
			}
		},
		{
			key: "getDropResult",
			value: function() {
				return this.internalMonitor.getDropResult();
			}
		},
		{
			key: "didDrop",
			value: function() {
				return this.internalMonitor.didDrop();
			}
		},
		{
			key: "getInitialClientOffset",
			value: function() {
				return this.internalMonitor.getInitialClientOffset();
			}
		},
		{
			key: "getInitialSourceClientOffset",
			value: function() {
				return this.internalMonitor.getInitialSourceClientOffset();
			}
		},
		{
			key: "getSourceClientOffset",
			value: function() {
				return this.internalMonitor.getSourceClientOffset();
			}
		},
		{
			key: "getClientOffset",
			value: function() {
				return this.internalMonitor.getClientOffset();
			}
		},
		{
			key: "getDifferenceFromInitialOffset",
			value: function() {
				return this.internalMonitor.getDifferenceFromInitialOffset();
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd/dist/esm/internals/DropTargetMonitorImpl.js
function tB(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function nB(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function rB(e, t, n) {
	return t && nB(e.prototype, t), n && nB(e, n), e;
}
function iB(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var aB = !1, oB = /*#__PURE__*/ function() {
	function e(t) {
		tB(this, e), iB(this, "internalMonitor", void 0), iB(this, "targetId", null), this.internalMonitor = t.getMonitor();
	}
	return rB(e, [
		{
			key: "receiveHandlerId",
			value: function(e) {
				this.targetId = e;
			}
		},
		{
			key: "getHandlerId",
			value: function() {
				return this.targetId;
			}
		},
		{
			key: "subscribeToStateChange",
			value: function(e, t) {
				return this.internalMonitor.subscribeToStateChange(e, t);
			}
		},
		{
			key: "canDrop",
			value: function() {
				if (!this.targetId) return !1;
				Q(!aB, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
				try {
					return aB = !0, this.internalMonitor.canDropOnTarget(this.targetId);
				} finally {
					aB = !1;
				}
			}
		},
		{
			key: "isOver",
			value: function(e) {
				return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, e) : !1;
			}
		},
		{
			key: "getItemType",
			value: function() {
				return this.internalMonitor.getItemType();
			}
		},
		{
			key: "getItem",
			value: function() {
				return this.internalMonitor.getItem();
			}
		},
		{
			key: "getDropResult",
			value: function() {
				return this.internalMonitor.getDropResult();
			}
		},
		{
			key: "didDrop",
			value: function() {
				return this.internalMonitor.didDrop();
			}
		},
		{
			key: "getInitialClientOffset",
			value: function() {
				return this.internalMonitor.getInitialClientOffset();
			}
		},
		{
			key: "getInitialSourceClientOffset",
			value: function() {
				return this.internalMonitor.getInitialSourceClientOffset();
			}
		},
		{
			key: "getSourceClientOffset",
			value: function() {
				return this.internalMonitor.getSourceClientOffset();
			}
		},
		{
			key: "getClientOffset",
			value: function() {
				return this.internalMonitor.getClientOffset();
			}
		},
		{
			key: "getDifferenceFromInitialOffset",
			value: function() {
				return this.internalMonitor.getDifferenceFromInitialOffset();
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd/dist/esm/internals/wrapConnectorHooks.js
function sB(e) {
	if (typeof e.type != "string") {
		var t = e.type.displayName || e.type.name || "the component";
		throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`);
	}
}
function cB(e) {
	return function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (!c(t)) {
			var r = t;
			return e(r, n), r;
		}
		var i = t;
		return sB(i), dB(i, n ? function(t) {
			return e(t, n);
		} : e);
	};
}
function lB(e) {
	var t = {};
	return Object.keys(e).forEach(function(n) {
		var r = e[n];
		if (n.endsWith("Ref")) t[n] = e[n];
		else {
			var i = cB(r);
			t[n] = function() {
				return i;
			};
		}
	}), t;
}
function uB(e, t) {
	typeof e == "function" ? e(t) : e.current = t;
}
function dB(e, t) {
	var n = e.ref;
	return Q(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? i(e, { ref: function(e) {
		uB(n, e), uB(t, e);
	} }) : i(e, { ref: t });
}
//#endregion
//#region node_modules/react-dnd/dist/esm/internals/isRef.js
function fB(e) {
	"@babel/helpers - typeof";
	return fB = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, fB(e);
}
function pB(e) {
	return e !== null && fB(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
function mB(e, t, n, r) {
	var i = n ? n.call(r, e, t) : void 0;
	if (i !== void 0) return !!i;
	if (e === t) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	var a = Object.keys(e), o = Object.keys(t);
	if (a.length !== o.length) return !1;
	for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
		var l = a[c];
		if (!s(l)) return !1;
		var u = e[l], d = t[l];
		if (i = n ? n.call(r, u, d, l) : void 0, i === !1 || i === void 0 && u !== d) return !1;
	}
	return !0;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/internals/SourceConnector.js
function hB(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function gB(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function _B(e, t, n) {
	return t && gB(e.prototype, t), n && gB(e, n), e;
}
function vB(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var yB = /*#__PURE__*/ function() {
	function e(t) {
		var n = this;
		hB(this, e), vB(this, "hooks", lB({
			dragSource: function(e, t) {
				n.clearDragSource(), n.dragSourceOptions = t || null, pB(e) ? n.dragSourceRef = e : n.dragSourceNode = e, n.reconnectDragSource();
			},
			dragPreview: function(e, t) {
				n.clearDragPreview(), n.dragPreviewOptions = t || null, pB(e) ? n.dragPreviewRef = e : n.dragPreviewNode = e, n.reconnectDragPreview();
			}
		})), vB(this, "handlerId", null), vB(this, "dragSourceRef", null), vB(this, "dragSourceNode", void 0), vB(this, "dragSourceOptionsInternal", null), vB(this, "dragSourceUnsubscribe", void 0), vB(this, "dragPreviewRef", null), vB(this, "dragPreviewNode", void 0), vB(this, "dragPreviewOptionsInternal", null), vB(this, "dragPreviewUnsubscribe", void 0), vB(this, "lastConnectedHandlerId", null), vB(this, "lastConnectedDragSource", null), vB(this, "lastConnectedDragSourceOptions", null), vB(this, "lastConnectedDragPreview", null), vB(this, "lastConnectedDragPreviewOptions", null), vB(this, "backend", void 0), this.backend = t;
	}
	return _B(e, [
		{
			key: "receiveHandlerId",
			value: function(e) {
				this.handlerId !== e && (this.handlerId = e, this.reconnect());
			}
		},
		{
			key: "connectTarget",
			get: function() {
				return this.dragSource;
			}
		},
		{
			key: "dragSourceOptions",
			get: function() {
				return this.dragSourceOptionsInternal;
			},
			set: function(e) {
				this.dragSourceOptionsInternal = e;
			}
		},
		{
			key: "dragPreviewOptions",
			get: function() {
				return this.dragPreviewOptionsInternal;
			},
			set: function(e) {
				this.dragPreviewOptionsInternal = e;
			}
		},
		{
			key: "reconnect",
			value: function() {
				this.reconnectDragSource(), this.reconnectDragPreview();
			}
		},
		{
			key: "reconnectDragSource",
			value: function() {
				var e = this.dragSource, t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
				if (t && this.disconnectDragSource(), this.handlerId) {
					if (!e) {
						this.lastConnectedDragSource = e;
						return;
					}
					t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions));
				}
			}
		},
		{
			key: "reconnectDragPreview",
			value: function() {
				var e = this.dragPreview, t = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
				if (t && this.disconnectDragPreview(), this.handlerId) {
					if (!e) {
						this.lastConnectedDragPreview = e;
						return;
					}
					t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = e, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, e, this.dragPreviewOptions));
				}
			}
		},
		{
			key: "didHandlerIdChange",
			value: function() {
				return this.lastConnectedHandlerId !== this.handlerId;
			}
		},
		{
			key: "didConnectedDragSourceChange",
			value: function() {
				return this.lastConnectedDragSource !== this.dragSource;
			}
		},
		{
			key: "didConnectedDragPreviewChange",
			value: function() {
				return this.lastConnectedDragPreview !== this.dragPreview;
			}
		},
		{
			key: "didDragSourceOptionsChange",
			value: function() {
				return !mB(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
			}
		},
		{
			key: "didDragPreviewOptionsChange",
			value: function() {
				return !mB(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
			}
		},
		{
			key: "disconnectDragSource",
			value: function() {
				this.dragSourceUnsubscribe &&= (this.dragSourceUnsubscribe(), void 0);
			}
		},
		{
			key: "disconnectDragPreview",
			value: function() {
				this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
			}
		},
		{
			key: "dragSource",
			get: function() {
				return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
			}
		},
		{
			key: "dragPreview",
			get: function() {
				return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
			}
		},
		{
			key: "clearDragSource",
			value: function() {
				this.dragSourceNode = null, this.dragSourceRef = null;
			}
		},
		{
			key: "clearDragPreview",
			value: function() {
				this.dragPreviewNode = null, this.dragPreviewRef = null;
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd/dist/esm/internals/TargetConnector.js
function bB(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function xB(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function SB(e, t, n) {
	return t && xB(e.prototype, t), n && xB(e, n), e;
}
function CB(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var wB = /*#__PURE__*/ function() {
	function e(t) {
		var n = this;
		bB(this, e), CB(this, "hooks", lB({ dropTarget: function(e, t) {
			n.clearDropTarget(), n.dropTargetOptions = t, pB(e) ? n.dropTargetRef = e : n.dropTargetNode = e, n.reconnect();
		} })), CB(this, "handlerId", null), CB(this, "dropTargetRef", null), CB(this, "dropTargetNode", void 0), CB(this, "dropTargetOptionsInternal", null), CB(this, "unsubscribeDropTarget", void 0), CB(this, "lastConnectedHandlerId", null), CB(this, "lastConnectedDropTarget", null), CB(this, "lastConnectedDropTargetOptions", null), CB(this, "backend", void 0), this.backend = t;
	}
	return SB(e, [
		{
			key: "connectTarget",
			get: function() {
				return this.dropTarget;
			}
		},
		{
			key: "reconnect",
			value: function() {
				var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
				e && this.disconnectDropTarget();
				var t = this.dropTarget;
				if (this.handlerId) {
					if (!t) {
						this.lastConnectedDropTarget = t;
						return;
					}
					e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions));
				}
			}
		},
		{
			key: "receiveHandlerId",
			value: function(e) {
				e !== this.handlerId && (this.handlerId = e, this.reconnect());
			}
		},
		{
			key: "dropTargetOptions",
			get: function() {
				return this.dropTargetOptionsInternal;
			},
			set: function(e) {
				this.dropTargetOptionsInternal = e;
			}
		},
		{
			key: "didHandlerIdChange",
			value: function() {
				return this.lastConnectedHandlerId !== this.handlerId;
			}
		},
		{
			key: "didDropTargetChange",
			value: function() {
				return this.lastConnectedDropTarget !== this.dropTarget;
			}
		},
		{
			key: "didOptionsChange",
			value: function() {
				return !mB(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
			}
		},
		{
			key: "disconnectDropTarget",
			value: function() {
				this.unsubscribeDropTarget &&= (this.unsubscribeDropTarget(), void 0);
			}
		},
		{
			key: "dropTarget",
			get: function() {
				return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
			}
		},
		{
			key: "clearDropTarget",
			value: function() {
				this.dropTargetRef = null, this.dropTargetNode = null;
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd/dist/esm/internals/registration.js
function TB(e, t, n) {
	var r = n.getRegistry(), i = r.addTarget(e, t);
	return [i, function() {
		return r.removeTarget(i);
	}];
}
function EB(e, t, n) {
	var r = n.getRegistry(), i = r.addSource(e, t);
	return [i, function() {
		return r.removeSource(i);
	}];
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useIsomorphicLayoutEffect.js
var DB = typeof window < "u" ? h : f;
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/DragSourceImpl.js
function OB(e) {
	"@babel/helpers - typeof";
	return OB = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, OB(e);
}
function kB(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function AB(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function jB(e, t, n) {
	return t && AB(e.prototype, t), n && AB(e, n), e;
}
function MB(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var NB = /*#__PURE__*/ function() {
	function e(t, n, r) {
		kB(this, e), MB(this, "spec", void 0), MB(this, "monitor", void 0), MB(this, "connector", void 0), this.spec = t, this.monitor = n, this.connector = r;
	}
	return jB(e, [
		{
			key: "beginDrag",
			value: function() {
				var e = this.spec, t = this.monitor, n = null;
				return n = OB(e.item) === "object" ? e.item : typeof e.item == "function" ? e.item(t) : {}, n ?? null;
			}
		},
		{
			key: "canDrag",
			value: function() {
				var e = this.spec, t = this.monitor;
				return typeof e.canDrag == "boolean" ? e.canDrag : typeof e.canDrag == "function" ? e.canDrag(t) : !0;
			}
		},
		{
			key: "isDragging",
			value: function(e, t) {
				var n = this.spec, r = this.monitor, i = n.isDragging;
				return i ? i(r) : t === e.getSourceId();
			}
		},
		{
			key: "endDrag",
			value: function() {
				var e = this.spec, t = this.monitor, n = this.connector, r = e.end;
				r && r(t.getItem(), t), n.reconnect();
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/useDragSource.js
function PB(e, t, n) {
	var r = g(function() {
		return new NB(e, t, n);
	}, [t, n]);
	return f(function() {
		r.spec = e;
	}, [e]), r;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDragDropManager.js
function FB() {
	var e = d(pL).dragDropManager;
	return Q(e != null, "Expected drag drop context"), e;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/useDragType.js
function IB(e) {
	return g(function() {
		var t = e.type;
		return Q(t != null, "spec.type must be defined"), t;
	}, [e]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/useRegisteredDragSource.js
function LB(e, t) {
	return HB(e) || VB(e, t) || zB(e, t) || RB();
}
function RB() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function zB(e, t) {
	if (e) {
		if (typeof e == "string") return BB(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BB(e, t);
	}
}
function BB(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function VB(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function HB(e) {
	if (Array.isArray(e)) return e;
}
function UB(e, t, n) {
	var r = FB(), i = PB(e, t, n), a = IB(e);
	DB(function() {
		if (a != null) {
			var e = LB(EB(a, i, r), 2), o = e[0], s = e[1];
			return t.receiveHandlerId(o), n.receiveHandlerId(o), s;
		}
	}, [
		r,
		t,
		n,
		i,
		a
	]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useOptionalFactory.js
function WB(e) {
	return JB(e) || qB(e) || KB(e) || GB();
}
function GB() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function KB(e, t) {
	if (e) {
		if (typeof e == "string") return YB(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return YB(e, t);
	}
}
function qB(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function JB(e) {
	if (Array.isArray(e)) return YB(e);
}
function YB(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function XB(e, t) {
	var n = WB(t || []);
	return t == null && typeof e != "function" && n.push(e), g(function() {
		return typeof e == "function" ? e() : e;
	}, n);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/useDragSourceMonitor.js
function ZB() {
	var e = FB();
	return g(function() {
		return new eB(e);
	}, [e]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/useDragSourceConnector.js
function QB(e, t) {
	var n = FB(), r = g(function() {
		return new yB(n.getBackend());
	}, [n]);
	return DB(function() {
		return r.dragSourceOptions = e || null, r.reconnect(), function() {
			return r.disconnectDragSource();
		};
	}, [r, e]), DB(function() {
		return r.dragPreviewOptions = t || null, r.reconnect(), function() {
			return r.disconnectDragPreview();
		};
	}, [r, t]), r;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useCollector.js
var $B = /* @__PURE__ */ R((/* @__PURE__ */ F(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})))());
function eV(e, t) {
	return aV(e) || iV(e, t) || nV(e, t) || tV();
}
function tV() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function nV(e, t) {
	if (e) {
		if (typeof e == "string") return rV(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rV(e, t);
	}
}
function rV(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function iV(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function aV(e) {
	if (Array.isArray(e)) return e;
}
function oV(e, t, n) {
	var r = eV(y(function() {
		return t(e);
	}), 2), i = r[0], a = r[1], o = u(function() {
		var r = t(e);
		(0, $B.default)(i, r) || (a(r), n && n());
	}, [
		i,
		e,
		n
	]);
	return DB(o), [i, o];
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useMonitorOutput.js
function sV(e, t) {
	return fV(e) || dV(e, t) || lV(e, t) || cV();
}
function cV() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function lV(e, t) {
	if (e) {
		if (typeof e == "string") return uV(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return uV(e, t);
	}
}
function uV(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function dV(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function fV(e) {
	if (Array.isArray(e)) return e;
}
function pV(e, t, n) {
	var r = sV(oV(e, t, n), 2), i = r[0], a = r[1];
	return DB(function() {
		var t = e.getHandlerId();
		if (t != null) return e.subscribeToStateChange(a, { handlerIds: [t] });
	}, [e, a]), i;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useCollectedProps.js
function mV(e, t, n) {
	return pV(t, e || function() {
		return {};
	}, function() {
		return n.reconnect();
	});
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/connectors.js
function hV(e) {
	return g(function() {
		return e.hooks.dragSource();
	}, [e]);
}
function gV(e) {
	return g(function() {
		return e.hooks.dragPreview();
	}, [e]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrag/useDrag.js
function _V(e, t) {
	var n = XB(e, t);
	Q(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
	var r = ZB(), i = QB(n.options, n.previewOptions);
	return UB(n, r, i), [
		mV(n.collect, r, i),
		hV(i),
		gV(i)
	];
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/useAccept.js
function vV(e) {
	var t = e.accept;
	return g(function() {
		return Q(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
	}, [t]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/DropTargetImpl.js
function yV(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function bV(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function xV(e, t, n) {
	return t && bV(e.prototype, t), n && bV(e, n), e;
}
function SV(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var CV = /*#__PURE__*/ function() {
	function e(t, n) {
		yV(this, e), SV(this, "spec", void 0), SV(this, "monitor", void 0), this.spec = t, this.monitor = n;
	}
	return xV(e, [
		{
			key: "canDrop",
			value: function() {
				var e = this.spec, t = this.monitor;
				return e.canDrop ? e.canDrop(t.getItem(), t) : !0;
			}
		},
		{
			key: "hover",
			value: function() {
				var e = this.spec, t = this.monitor;
				e.hover && e.hover(t.getItem(), t);
			}
		},
		{
			key: "drop",
			value: function() {
				var e = this.spec, t = this.monitor;
				if (e.drop) return e.drop(t.getItem(), t);
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/useDropTarget.js
function wV(e, t) {
	var n = g(function() {
		return new CV(e, t);
	}, [t]);
	return f(function() {
		n.spec = e;
	}, [e]), n;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/useRegisteredDropTarget.js
function TV(e, t) {
	return AV(e) || kV(e, t) || DV(e, t) || EV();
}
function EV() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function DV(e, t) {
	if (e) {
		if (typeof e == "string") return OV(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return OV(e, t);
	}
}
function OV(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function kV(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function AV(e) {
	if (Array.isArray(e)) return e;
}
function jV(e, t, n) {
	var r = FB(), i = wV(e, t), a = vV(e);
	DB(function() {
		var e = TV(TB(a, i, r), 2), o = e[0], s = e[1];
		return t.receiveHandlerId(o), n.receiveHandlerId(o), s;
	}, [
		r,
		t,
		i,
		n,
		a.map(function(e) {
			return e.toString();
		}).join("|")
	]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/useDropTargetMonitor.js
function MV() {
	var e = FB();
	return g(function() {
		return new oB(e);
	}, [e]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/useDropTargetConnector.js
function NV(e) {
	var t = FB(), n = g(function() {
		return new wB(t.getBackend());
	}, [t]);
	return DB(function() {
		return n.dropTargetOptions = e || null, n.reconnect(), function() {
			return n.disconnectDropTarget();
		};
	}, [e]), n;
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/connectors.js
function PV(e) {
	return g(function() {
		return e.hooks.dropTarget();
	}, [e]);
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDrop/useDrop.js
function FV(e, t) {
	var n = XB(e, t), r = MV(), i = NV(n.options);
	return jV(n, r, i), [mV(n.collect, r, i), PV(i)];
}
//#endregion
//#region node_modules/react-dnd/dist/esm/hooks/useDragLayer.js
function IV(e, t) {
	return VV(e) || BV(e, t) || RV(e, t) || LV();
}
function LV() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function RV(e, t) {
	if (e) {
		if (typeof e == "string") return zV(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zV(e, t);
	}
}
function zV(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function BV(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function VV(e) {
	if (Array.isArray(e)) return e;
}
function HV(e) {
	var t = FB().getMonitor(), n = IV(oV(t, e), 2), r = n[0], i = n[1];
	return f(function() {
		return t.subscribeToOffsetChange(i);
	}), f(function() {
		return t.subscribeToStateChange(i);
	}), r;
}
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js
function UV(e) {
	var t = null;
	return function() {
		return t ??= e(), t;
	};
}
function WV(e, t) {
	return e.filter(function(e) {
		return e !== t;
	});
}
function GV(e, t) {
	var n = /* @__PURE__ */ new Set(), r = function(e) {
		return n.add(e);
	};
	e.forEach(r), t.forEach(r);
	var i = [];
	return n.forEach(function(e) {
		return i.push(e);
	}), i;
}
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js
function KV(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function qV(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function JV(e, t, n) {
	return t && qV(e.prototype, t), n && qV(e, n), e;
}
function YV(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var XV = /*#__PURE__*/ function() {
	function e(t) {
		KV(this, e), YV(this, "entered", []), YV(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
	}
	return JV(e, [
		{
			key: "enter",
			value: function(e) {
				var t = this, n = this.entered.length, r = function(n) {
					return t.isNodeInDocument(n) && (!n.contains || n.contains(e));
				};
				return this.entered = GV(this.entered.filter(r), [e]), n === 0 && this.entered.length > 0;
			}
		},
		{
			key: "leave",
			value: function(e) {
				var t = this.entered.length;
				return this.entered = WV(this.entered.filter(this.isNodeInDocument), e), t > 0 && this.entered.length === 0;
			}
		},
		{
			key: "reset",
			value: function() {
				this.entered = [];
			}
		}
	]), e;
}(), ZV = UV(function() {
	return /firefox/i.test(navigator.userAgent);
}), QV = UV(function() {
	return !!window.safari;
});
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js
function $V(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function eH(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function tH(e, t, n) {
	return t && eH(e.prototype, t), n && eH(e, n), e;
}
function nH(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var rH = /*#__PURE__*/ function() {
	function e(t, n) {
		$V(this, e), nH(this, "xs", void 0), nH(this, "ys", void 0), nH(this, "c1s", void 0), nH(this, "c2s", void 0), nH(this, "c3s", void 0);
		for (var r = t.length, i = [], a = 0; a < r; a++) i.push(a);
		i.sort(function(e, n) {
			return t[e] < t[n] ? -1 : 1;
		});
		for (var o = [], s = [], c = [], l, u, d = 0; d < r - 1; d++) l = t[d + 1] - t[d], u = n[d + 1] - n[d], s.push(l), o.push(u), c.push(u / l);
		for (var f = [c[0]], p = 0; p < s.length - 1; p++) {
			var m = c[p], h = c[p + 1];
			if (m * h <= 0) f.push(0);
			else {
				l = s[p];
				var g = s[p + 1], _ = l + g;
				f.push(3 * _ / ((_ + g) / m + (_ + l) / h));
			}
		}
		f.push(c[c.length - 1]);
		for (var v = [], y = [], b, x = 0; x < f.length - 1; x++) {
			b = c[x];
			var S = f[x], C = 1 / s[x], w = S + f[x + 1] - b - b;
			v.push((b - S - w) * C), y.push(w * C * C);
		}
		this.xs = t, this.ys = n, this.c1s = f, this.c2s = v, this.c3s = y;
	}
	return tH(e, [{
		key: "interpolate",
		value: function(e) {
			var t = this.xs, n = this.ys, r = this.c1s, i = this.c2s, a = this.c3s, o = t.length - 1;
			if (e === t[o]) return n[o];
			for (var s = 0, c = a.length - 1, l; s <= c;) {
				l = Math.floor(.5 * (s + c));
				var u = t[l];
				if (u < e) s = l + 1;
				else if (u > e) c = l - 1;
				else return n[l];
			}
			o = Math.max(0, c);
			var d = e - t[o], f = d * d;
			return n[o] + r[o] * d + i[o] * f + a[o] * d * f;
		}
	}]), e;
}(), iH = 1;
function aH(e) {
	var t = e.nodeType === iH ? e : e.parentElement;
	if (!t) return null;
	var n = t.getBoundingClientRect(), r = n.top;
	return {
		x: n.left,
		y: r
	};
}
function oH(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
function sH(e) {
	var t;
	return e.nodeName === "IMG" && (ZV() || !((t = document.documentElement) != null && t.contains(e)));
}
function cH(e, t, n, r) {
	var i = e ? t.width : n, a = e ? t.height : r;
	return QV() && e && (a /= window.devicePixelRatio, i /= window.devicePixelRatio), {
		dragPreviewWidth: i,
		dragPreviewHeight: a
	};
}
function lH(e, t, n, r, i) {
	var a = sH(t), o = aH(a ? e : t), s = {
		x: n.x - o.x,
		y: n.y - o.y
	}, c = e.offsetWidth, l = e.offsetHeight, u = r.anchorX, d = r.anchorY, f = cH(a, t, c, l), p = f.dragPreviewWidth, m = f.dragPreviewHeight, h = function() {
		var e = new rH([
			0,
			.5,
			1
		], [
			s.y,
			s.y / l * m,
			s.y + m - l
		]).interpolate(d);
		return QV() && a && (e += (window.devicePixelRatio - 1) * m), e;
	}, g = function() {
		return new rH([
			0,
			.5,
			1
		], [
			s.x,
			s.x / c * p,
			s.x + p - c
		]).interpolate(u);
	}, _ = i.offsetX, v = i.offsetY, y = _ === 0 || _, b = v === 0 || v;
	return {
		x: y ? _ : g(),
		y: b ? v : h()
	};
}
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js
var uH = /* @__PURE__ */ I({
	FILE: () => dH,
	HTML: () => mH,
	TEXT: () => pH,
	URL: () => fH
}), dH = "__NATIVE_FILE__", fH = "__NATIVE_URL__", pH = "__NATIVE_TEXT__", mH = "__NATIVE_HTML__";
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js
function hH(e, t, n) {
	return t.reduce(function(t, n) {
		return t || e.getData(n);
	}, "") ?? n;
}
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js
var gH;
function _H(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var vH = (gH = {}, _H(gH, dH, {
	exposeProperties: {
		files: function(e) {
			return Array.prototype.slice.call(e.files);
		},
		items: function(e) {
			return e.items;
		},
		dataTransfer: function(e) {
			return e;
		}
	},
	matchesTypes: ["Files"]
}), _H(gH, mH, {
	exposeProperties: {
		html: function(e, t) {
			return hH(e, t, "");
		},
		dataTransfer: function(e) {
			return e;
		}
	},
	matchesTypes: ["Html", "text/html"]
}), _H(gH, fH, {
	exposeProperties: {
		urls: function(e, t) {
			return hH(e, t, "").split("\n");
		},
		dataTransfer: function(e) {
			return e;
		}
	},
	matchesTypes: ["Url", "text/uri-list"]
}), _H(gH, pH, {
	exposeProperties: {
		text: function(e, t) {
			return hH(e, t, "");
		},
		dataTransfer: function(e) {
			return e;
		}
	},
	matchesTypes: ["Text", "text/plain"]
}), gH);
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js
function yH(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function bH(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function xH(e, t, n) {
	return t && bH(e.prototype, t), n && bH(e, n), e;
}
function SH(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var CH = /*#__PURE__*/ function() {
	function e(t) {
		yH(this, e), SH(this, "item", void 0), SH(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
	}
	return xH(e, [
		{
			key: "initializeExposedProperties",
			value: function() {
				var e = this;
				Object.keys(this.config.exposeProperties).forEach(function(t) {
					Object.defineProperty(e.item, t, {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`), null;
						}
					});
				});
			}
		},
		{
			key: "loadDataTransfer",
			value: function(e) {
				var t = this;
				if (e) {
					var n = {};
					Object.keys(this.config.exposeProperties).forEach(function(r) {
						n[r] = {
							value: t.config.exposeProperties[r](e, t.config.matchesTypes),
							configurable: !0,
							enumerable: !0
						};
					}), Object.defineProperties(this.item, n);
				}
			}
		},
		{
			key: "canDrag",
			value: function() {
				return !0;
			}
		},
		{
			key: "beginDrag",
			value: function() {
				return this.item;
			}
		},
		{
			key: "isDragging",
			value: function(e, t) {
				return t === e.getSourceId();
			}
		},
		{
			key: "endDrag",
			value: function() {}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js
function wH(e, t) {
	var n = new CH(vH[e]);
	return n.loadDataTransfer(t), n;
}
function TH(e) {
	if (!e) return null;
	var t = Array.prototype.slice.call(e.types || []);
	return Object.keys(vH).filter(function(e) {
		return vH[e].matchesTypes.some(function(e) {
			return t.indexOf(e) > -1;
		});
	})[0] || null;
}
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js
function EH(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function DH(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function OH(e, t, n) {
	return t && DH(e.prototype, t), n && DH(e, n), e;
}
function kH(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var AH = /*#__PURE__*/ function() {
	function e(t, n) {
		EH(this, e), kH(this, "ownerDocument", null), kH(this, "globalContext", void 0), kH(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = n;
	}
	return OH(e, [
		{
			key: "window",
			get: function() {
				if (this.globalContext) return this.globalContext;
				if (typeof window < "u") return window;
			}
		},
		{
			key: "document",
			get: function() {
				var e;
				if ((e = this.globalContext) != null && e.document) return this.globalContext.document;
				if (this.window) return this.window.document;
			}
		},
		{
			key: "rootElement",
			get: function() {
				return this.optionsArgs?.rootElement || this.window;
			}
		}
	]), e;
}();
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/HTML5BackendImpl.js
function jH(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function MH(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? jH(Object(n), !0).forEach(function(t) {
			$(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jH(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function NH(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function PH(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function FH(e, t, n) {
	return t && PH(e.prototype, t), n && PH(e, n), e;
}
function $(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var IH = /*#__PURE__*/ function() {
	function e(t, n, r) {
		var i = this;
		NH(this, e), $(this, "options", void 0), $(this, "actions", void 0), $(this, "monitor", void 0), $(this, "registry", void 0), $(this, "enterLeaveCounter", void 0), $(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), $(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), $(this, "sourceNodes", /* @__PURE__ */ new Map()), $(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), $(this, "dragStartSourceIds", null), $(this, "dropTargetIds", []), $(this, "dragEnterTargetIds", []), $(this, "currentNativeSource", null), $(this, "currentNativeHandle", null), $(this, "currentDragSourceNode", null), $(this, "altKeyPressed", !1), $(this, "mouseMoveTimeoutTimer", null), $(this, "asyncEndDragFrameId", null), $(this, "dragOverTargetIds", null), $(this, "lastClientOffset", null), $(this, "hoverRafId", null), $(this, "getSourceClientOffset", function(e) {
			var t = i.sourceNodes.get(e);
			return t && aH(t) || null;
		}), $(this, "endDragNativeItem", function() {
			i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
		}), $(this, "isNodeInDocument", function(e) {
			return !!(e && i.document && i.document.body && i.document.body.contains(e));
		}), $(this, "endDragIfSourceWasRemovedFromDOM", function() {
			var e = i.currentDragSourceNode;
			e == null || i.isNodeInDocument(e) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
		}), $(this, "handleTopDragStartCapture", function() {
			i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
		}), $(this, "handleTopDragStart", function(e) {
			if (!e.defaultPrevented) {
				var t = i.dragStartSourceIds;
				i.dragStartSourceIds = null;
				var n = oH(e);
				i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(t || [], {
					publishSource: !1,
					getSourceClientOffset: i.getSourceClientOffset,
					clientOffset: n
				});
				var r = e.dataTransfer, a = TH(r);
				if (i.monitor.isDragging()) {
					if (r && typeof r.setDragImage == "function") {
						var o = i.monitor.getSourceId(), s = i.sourceNodes.get(o), c = i.sourcePreviewNodes.get(o) || s;
						if (c) {
							var l = i.getCurrentSourcePreviewNodeOptions(), u = l.anchorX, d = l.anchorY, f = l.offsetX, p = l.offsetY, m = lH(s, c, n, {
								anchorX: u,
								anchorY: d
							}, {
								offsetX: f,
								offsetY: p
							});
							r.setDragImage(c, m.x, m.y);
						}
					}
					try {
						r?.setData("application/json", {});
					} catch {}
					i.setCurrentDragSourceNode(e.target), i.getCurrentSourcePreviewNodeOptions().captureDraggingState ? i.actions.publishDragSource() : setTimeout(function() {
						return i.actions.publishDragSource();
					}, 0);
				} else if (a) i.beginDragNativeItem(a);
				else if (r && !r.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
				else e.preventDefault();
			}
		}), $(this, "handleTopDragEndCapture", function() {
			i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
		}), $(this, "handleTopDragEnterCapture", function(e) {
			if (i.dragEnterTargetIds = [], !(!i.enterLeaveCounter.enter(e.target) || i.monitor.isDragging())) {
				var t = e.dataTransfer, n = TH(t);
				n && i.beginDragNativeItem(n, t);
			}
		}), $(this, "handleTopDragEnter", function(e) {
			var t = i.dragEnterTargetIds;
			i.dragEnterTargetIds = [], i.monitor.isDragging() && (i.altKeyPressed = e.altKey, t.length > 0 && i.actions.hover(t, { clientOffset: oH(e) }), t.some(function(e) {
				return i.monitor.canDropOnTarget(e);
			}) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = i.getCurrentDropEffect())));
		}), $(this, "handleTopDragOverCapture", function() {
			i.dragOverTargetIds = [];
		}), $(this, "handleTopDragOver", function(e) {
			var t = i.dragOverTargetIds;
			if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
				e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
				return;
			}
			i.altKeyPressed = e.altKey, i.lastClientOffset = oH(e), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
				i.monitor.isDragging() && i.actions.hover(t || [], { clientOffset: i.lastClientOffset }), i.hoverRafId = null;
			})), (t || []).some(function(e) {
				return i.monitor.canDropOnTarget(e);
			}) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
		}), $(this, "handleTopDragLeaveCapture", function(e) {
			i.isDraggingNativeItem() && e.preventDefault(), i.enterLeaveCounter.leave(e.target) && i.isDraggingNativeItem() && setTimeout(function() {
				return i.endDragNativeItem();
			}, 0);
		}), $(this, "handleTopDropCapture", function(e) {
			if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
				var t;
				e.preventDefault(), (t = i.currentNativeSource) == null || t.loadDataTransfer(e.dataTransfer);
			} else TH(e.dataTransfer) && e.preventDefault();
			i.enterLeaveCounter.reset();
		}), $(this, "handleTopDrop", function(e) {
			var t = i.dropTargetIds;
			i.dropTargetIds = [], i.actions.hover(t, { clientOffset: oH(e) }), i.actions.drop({ dropEffect: i.getCurrentDropEffect() }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
		}), $(this, "handleSelectStart", function(e) {
			var t = e.target;
			typeof t.dragDrop == "function" && (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.isContentEditable || (e.preventDefault(), t.dragDrop()));
		}), this.options = new AH(n, r), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new XV(this.isNodeInDocument);
	}
	return FH(e, [
		{
			key: "profile",
			value: function() {
				return {
					sourcePreviewNodes: this.sourcePreviewNodes.size,
					sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
					sourceNodeOptions: this.sourceNodeOptions.size,
					sourceNodes: this.sourceNodes.size,
					dragStartSourceIds: this.dragStartSourceIds?.length || 0,
					dropTargetIds: this.dropTargetIds.length,
					dragEnterTargetIds: this.dragEnterTargetIds.length,
					dragOverTargetIds: this.dragOverTargetIds?.length || 0
				};
			}
		},
		{
			key: "window",
			get: function() {
				return this.options.window;
			}
		},
		{
			key: "document",
			get: function() {
				return this.options.document;
			}
		},
		{
			key: "rootElement",
			get: function() {
				return this.options.rootElement;
			}
		},
		{
			key: "setup",
			value: function() {
				var e = this.rootElement;
				if (e !== void 0) {
					if (e.__isReactDndBackendSetUp) throw Error("Cannot have two HTML5 backends at the same time.");
					e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
				}
			}
		},
		{
			key: "teardown",
			value: function() {
				var e = this.rootElement;
				if (e !== void 0 && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
					var t;
					(t = this.window) == null || t.cancelAnimationFrame(this.asyncEndDragFrameId);
				}
			}
		},
		{
			key: "connectDragPreview",
			value: function(e, t, n) {
				var r = this;
				return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t), function() {
					r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e);
				};
			}
		},
		{
			key: "connectDragSource",
			value: function(e, t, n) {
				var r = this;
				this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
				var i = function(t) {
					return r.handleDragStart(t, e);
				}, a = function(e) {
					return r.handleSelectStart(e);
				};
				return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", i), t.addEventListener("selectstart", a), function() {
					r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", i), t.removeEventListener("selectstart", a), t.setAttribute("draggable", "false");
				};
			}
		},
		{
			key: "connectDropTarget",
			value: function(e, t) {
				var n = this, r = function(t) {
					return n.handleDragEnter(t, e);
				}, i = function(t) {
					return n.handleDragOver(t, e);
				}, a = function(t) {
					return n.handleDrop(t, e);
				};
				return t.addEventListener("dragenter", r), t.addEventListener("dragover", i), t.addEventListener("drop", a), function() {
					t.removeEventListener("dragenter", r), t.removeEventListener("dragover", i), t.removeEventListener("drop", a);
				};
			}
		},
		{
			key: "addEventListeners",
			value: function(e) {
				e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
			}
		},
		{
			key: "removeEventListeners",
			value: function(e) {
				e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
			}
		},
		{
			key: "getCurrentSourceNodeOptions",
			value: function() {
				var e = this.monitor.getSourceId(), t = this.sourceNodeOptions.get(e);
				return MH({ dropEffect: this.altKeyPressed ? "copy" : "move" }, t || {});
			}
		},
		{
			key: "getCurrentDropEffect",
			value: function() {
				return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
			}
		},
		{
			key: "getCurrentSourcePreviewNodeOptions",
			value: function() {
				var e = this.monitor.getSourceId();
				return MH({
					anchorX: .5,
					anchorY: .5,
					captureDraggingState: !1
				}, this.sourcePreviewNodeOptions.get(e) || {});
			}
		},
		{
			key: "isDraggingNativeItem",
			value: function() {
				var e = this.monitor.getItemType();
				return Object.keys(uH).some(function(t) {
					return uH[t] === e;
				});
			}
		},
		{
			key: "beginDragNativeItem",
			value: function(e, t) {
				this.clearCurrentDragSourceNode(), this.currentNativeSource = wH(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
			}
		},
		{
			key: "setCurrentDragSourceNode",
			value: function(e) {
				var t = this;
				this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
				var n = 1e3;
				this.mouseMoveTimeoutTimer = setTimeout(function() {
					return t.rootElement?.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, !0);
				}, n);
			}
		},
		{
			key: "clearCurrentDragSourceNode",
			value: function() {
				if (this.currentDragSourceNode) {
					if (this.currentDragSourceNode = null, this.rootElement) {
						var e;
						(e = this.window) == null || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
					}
					return this.mouseMoveTimeoutTimer = null, !0;
				}
				return !1;
			}
		},
		{
			key: "handleDragStart",
			value: function(e, t) {
				e.defaultPrevented || (this.dragStartSourceIds ||= [], this.dragStartSourceIds.unshift(t));
			}
		},
		{
			key: "handleDragEnter",
			value: function(e, t) {
				this.dragEnterTargetIds.unshift(t);
			}
		},
		{
			key: "handleDragOver",
			value: function(e, t) {
				this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t);
			}
		},
		{
			key: "handleDrop",
			value: function(e, t) {
				this.dropTargetIds.unshift(t);
			}
		}
	]), e;
}(), LH;
function RH() {
	return LH || (LH = new Image(), LH.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), LH;
}
//#endregion
//#region node_modules/react-dnd-html5-backend/dist/esm/index.js
var zH = function(e, t, n) {
	return new IH(e, t, n);
};
//#endregion
//#region node_modules/react-arborist/dist/module/dnd/drag-hook.js
function BH(e) {
	let t = SF(), n = t.selectedIds, [r, i, a] = _V(() => ({
		canDrag: () => e.isDraggable,
		type: "NODE",
		item: () => {
			let r = t.isSelected(e.id) ? Array.from(n) : [e.id];
			return t.dispatch(SI.dragStart(e.id, r)), {
				id: e.id,
				dragIds: r
			};
		},
		end: () => {
			t.hideCursor(), t.redrawList(), t.dispatch(SI.dragEnd());
		}
	}), [n, e]);
	return f(() => {
		a(RH());
	}, [a]), i;
}
//#endregion
//#region node_modules/react-arborist/dist/module/dnd/compute-drop.js
function VH(e, t) {
	let n = e.getBoundingClientRect(), r = t.x - Math.round(n.x), i = t.y - Math.round(n.y), a = n.height, o = i < a / 2, s = !o, c = a / 4, l = i > c && i < a - c;
	return {
		x: r,
		inTopHalf: o,
		inBottomHalf: s,
		inMiddle: l,
		atTop: !l && o,
		atBottom: !l && s
	};
}
function HH(e, t, n, r) {
	return e ? e.isInternal ? r.atTop ? [t, e] : r.inMiddle ? [e, e] : [e, n] : r.inTopHalf ? [t, e] : [e, n] : [t, null];
}
function UH(e, t) {
	return {
		parentId: e || null,
		index: t
	};
}
function WH(e, t) {
	return {
		type: "line",
		index: e,
		level: t
	};
}
function GH(e) {
	return {
		type: "highlight",
		id: e
	};
}
function KH(e, t) {
	let n = e;
	for (; n.parent && n.level > t;) n = n.parent;
	return {
		parentId: n.parent?.id || null,
		index: FF(n) + 1
	};
}
function qH(e) {
	let t = VH(e.element, e.offset), n = e.indent, r = Math.round(Math.max(0, t.x - n) / n), { node: i, nextNode: a, prevNode: o } = e, [s, c] = HH(i, o, a, t);
	if (i && i.isInternal && t.inMiddle) return {
		drop: UH(i.id, null),
		cursor: GH(i.id)
	};
	if (!s) return {
		drop: UH(c?.parent?.id, 0),
		cursor: WH(0, 0)
	};
	if (jF(s)) {
		let e = AF(r, c?.level || 0, s.level);
		return {
			drop: KH(s, e),
			cursor: WH(s.rowIndex + 1, e)
		};
	}
	if (MF(s)) {
		let e = AF(r, c?.level || 0, s.level);
		return {
			drop: KH(s, e),
			cursor: WH(s.rowIndex + 1, e)
		};
	}
	if (NF(s)) {
		let e = AF(r, 0, s.level + 1);
		return e > s.level ? {
			drop: UH(s.id, 0),
			cursor: WH(s.rowIndex + 1, e)
		} : {
			drop: KH(s, e),
			cursor: WH(s.rowIndex + 1, e)
		};
	}
	return {
		drop: UH(s?.id, 0),
		cursor: WH(s.rowIndex + 1, s.level + 1)
	};
}
//#endregion
//#region node_modules/react-arborist/dist/module/dnd/drop-hook.js
function JH(e, t) {
	let n = SF(), [r, i] = FV(() => ({
		accept: "NODE",
		canDrop: () => n.canDrop(),
		hover: (r, i) => {
			let a = i.getClientOffset();
			if (!e.current || !a) return;
			let { cursor: o, drop: s } = qH({
				element: e.current,
				offset: a,
				indent: n.indent,
				node: t,
				prevNode: t.prev,
				nextNode: t.next
			});
			s && n.dispatch(SI.hovering(s.parentId, s.index)), i.canDrop() ? o && n.showCursor(o) : n.hideCursor();
		},
		drop: (e, t) => {
			if (!t.canDrop()) return null;
			let { parentId: r, index: i, dragIds: a } = n.state.dnd;
			JF(n.props.onMove, {
				dragIds: a,
				parentId: r === "__REACT_ARBORIST_INTERNAL_ROOT__" ? null : r,
				index: i === null ? 0 : i,
				dragNodes: n.dragNodes,
				parentNode: n.get(r)
			}), n.open(r);
		}
	}), [
		t,
		e.current,
		n.props
	]);
	return i;
}
//#endregion
//#region node_modules/react-arborist/dist/module/hooks/use-fresh-node.js
function YH(e) {
	let t = SF(), n = t.at(e);
	if (!n) throw Error(`Could not find node for index: ${e}`);
	return g(() => {
		let r = n.clone();
		return t.visibleNodes[e] = r, r;
	}, [...Object.values(n.state), n]);
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/row-container.js
var XH = t.memo(function({ index: e, style: t }) {
	OF(), wF();
	let n = SF(), r = YH(e), i = v(null), a = BH(r), o = JH(i, r), s = u((e) => {
		i.current = e, o(e);
	}, [o]), c = n.indent * r.level, l = g(() => ({ paddingLeft: c }), [c]), d = g(() => Object.assign(Object.assign({}, t), { top: parseFloat(t.top) + (n.props.padding ?? n.props.paddingTop ?? 0) }), [
		t,
		n.props.padding,
		n.props.paddingTop
	]), p = {
		role: "treeitem",
		"aria-level": r.level + 1,
		"aria-selected": r.isSelected,
		"aria-expanded": r.isOpen,
		style: d,
		tabIndex: -1,
		className: n.props.rowClassName
	};
	f(() => {
		var e;
		!r.isEditing && r.isFocused && ((e = i.current) == null || e.focus({ preventScroll: !0 }));
	}, [
		r.isEditing,
		r.isFocused,
		i.current
	]);
	let m = n.renderNode, h = n.renderRow;
	return C(h, {
		node: r,
		innerRef: s,
		attrs: p,
		children: C(m, {
			node: r,
			tree: n,
			style: l,
			dragHandle: a
		})
	});
}), ZH = "", QH = null;
function $H() {
	OF();
	let e = SF();
	return C("div", {
		role: "tree",
		style: {
			height: e.height,
			width: e.width,
			minHeight: 0,
			minWidth: 0
		},
		onContextMenu: e.props.onContextMenu,
		onClick: e.props.onClick,
		tabIndex: 0,
		onFocus: (t) => {
			t.currentTarget.contains(t.relatedTarget) || e.onFocus();
		},
		onBlur: (t) => {
			t.currentTarget.contains(t.relatedTarget) || e.onBlur();
		},
		onKeyDown: (t) => {
			if (e.isEditing) return;
			if (t.key === "Backspace") {
				if (!e.props.onDelete) return;
				let t = Array.from(e.selectedIds);
				if (t.length > 1) {
					let n = e.mostRecentNode;
					for (; n && n.isSelected;) n = n.nextSibling;
					n ||= e.lastNode, e.focus(n, { scroll: !1 }), e.delete(Array.from(t));
				} else {
					let t = e.focusedNode;
					if (t) {
						let n = t.nextSibling, r = t.parent;
						e.focus(n || r, { scroll: !1 }), e.delete(t);
					}
				}
				return;
			}
			if (t.key === "Tab" && !t.shiftKey) {
				t.preventDefault(), zF(t.currentTarget);
				return;
			}
			if (t.key === "Tab" && t.shiftKey) {
				t.preventDefault(), BF(t.currentTarget);
				return;
			}
			if (t.key === "ArrowDown") {
				t.preventDefault();
				let n = e.nextNode;
				if (t.metaKey) {
					e.select(e.focusedNode), e.activate(e.focusedNode);
					return;
				} else if (!t.shiftKey || e.props.disableMultiSelection) {
					e.focus(n);
					return;
				} else {
					if (!n) return;
					let t = e.focusedNode;
					t ? t.isSelected ? e.selectContiguous(n) : e.selectMulti(n) : e.focus(e.firstNode);
					return;
				}
			}
			if (t.key === "ArrowUp") {
				t.preventDefault();
				let n = e.prevNode;
				if (!t.shiftKey || e.props.disableMultiSelection) {
					e.focus(n);
					return;
				} else {
					if (!n) return;
					let t = e.focusedNode;
					t ? t.isSelected ? e.selectContiguous(n) : e.selectMulti(n) : e.focus(e.lastNode);
					return;
				}
			}
			if (t.key === "ArrowRight") {
				let t = e.focusedNode;
				if (!t) return;
				t.isInternal && t.isOpen ? e.focus(e.nextNode) : t.isInternal && e.open(t.id);
				return;
			}
			if (t.key === "ArrowLeft") {
				let t = e.focusedNode;
				if (!t || t.isRoot) return;
				t.isInternal && t.isOpen ? e.close(t.id) : t.parent?.isRoot || e.focus(t.parent);
				return;
			}
			if (t.key === "a" && t.metaKey && !e.props.disableMultiSelection) {
				t.preventDefault(), e.selectAll();
				return;
			}
			if (t.key === "a" && !t.metaKey && e.props.onCreate) {
				e.createLeaf();
				return;
			}
			if (t.key === "A" && !t.metaKey) {
				if (!e.props.onCreate) return;
				e.createInternal();
				return;
			}
			if (t.key === "Home") {
				t.preventDefault(), e.focus(e.firstNode);
				return;
			}
			if (t.key === "End") {
				t.preventDefault(), e.focus(e.lastNode);
				return;
			}
			if (t.key === "Enter") {
				let t = e.focusedNode;
				if (!t || !t.isEditable || !e.props.onRename) return;
				setTimeout(() => {
					t && e.edit(t);
				});
				return;
			}
			if (t.key === " ") {
				t.preventDefault();
				let n = e.focusedNode;
				if (!n) return;
				n.isLeaf ? (n.select(), n.activate()) : n.toggle();
				return;
			}
			if (t.key === "*") {
				let t = e.focusedNode;
				if (!t) return;
				e.openSiblings(t);
				return;
			}
			if (t.key === "PageUp") {
				t.preventDefault(), e.pageUp();
				return;
			}
			t.key === "PageDown" && (t.preventDefault(), e.pageDown()), clearTimeout(QH), ZH += t.key, QH = setTimeout(() => {
				ZH = "";
			}, 600);
			let n = e.visibleNodes.find((e) => {
				let t = e.data.name;
				return typeof t == "string" ? t.toLowerCase().startsWith(ZH) : !1;
			});
			n && e.focus(n.id);
		},
		children: C(eU, {})
	});
}
function eU() {
	let e = SF(), t = {
		className: e.props.className,
		outerRef: e.listEl,
		itemCount: e.visibleNodes.length,
		height: e.height,
		width: e.width,
		overscanCount: e.overscanCount,
		itemKey: (t) => e.visibleNodes[t]?.id || t,
		outerElementType: e.props.outerElementType ?? lL,
		innerElementType: e.props.innerElementType ?? fL,
		onScroll: e.props.onScroll,
		onItemsRendered: e.onItemsRendered.bind(e)
	};
	return typeof e.props.rowHeight == "function" ? C(aL, Object.assign({}, t, {
		itemSize: e.rowHeightAt,
		ref: e.list,
		children: XH
	})) : C(oL, Object.assign({}, t, {
		itemSize: e.rowHeight,
		ref: e.list,
		children: XH
	}));
}
//#endregion
//#region node_modules/react-arborist/dist/module/data/create-list.js
function tU(e) {
	return e.isFiltered ? rU(e.root, e.isMatch.bind(e)) : nU(e.root);
}
function nU(e) {
	let t = [];
	function n(e) {
		var r;
		e.level >= 0 && t.push(e), e.isOpen && ((r = e.children) == null || r.forEach(n));
	}
	return n(e), t.forEach(iU), t;
}
function rU(e, t) {
	let n = {}, r = [];
	function i(e) {
		if (!e.isRoot && t(e)) {
			n[e.id] = !0;
			let t = e.parent;
			for (; t;) n[t.id] = !0, t = t.parent;
		}
		if (e.children) for (let t of e.children) i(t);
	}
	function a(e) {
		var t;
		e.level >= 0 && n[e.id] && r.push(e), e.isOpen && ((t = e.children) == null || t.forEach(a));
	}
	return i(e), a(e), r.forEach(iU), r;
}
function iU(e, t) {
	e.rowIndex = t;
}
//#endregion
//#region node_modules/react-arborist/dist/module/data/create-index.js
var aU = (e) => e.reduce((e, t, n) => (e[t.id] = n, e), {}), oU = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, { safeRun: sU, identify: cU, identifyNull: lU } = kF, uU = class e {
	constructor(e, t, n, r) {
		this.store = e, this.props = t, this.list = n, this.listEl = r, this.visibleStartIndex = 0, this.visibleStopIndex = 0, this.rowOffsets = null, this.rowHeightAt = (e) => {
			let t = this.props.rowHeight;
			if (typeof t == "function") {
				let n = this.at(e);
				return n ? t(n) : this.rowHeight;
			}
			return t ?? 24;
		}, this.rowTopPosition = (e) => {
			if (typeof this.props.rowHeight != "function") return e * this.rowHeight;
			let t = this.getRowOffsets();
			return t[Math.max(0, Math.min(e, t.length - 1))];
		}, this.redrawList = (e = 0) => {
			this.rowOffsets = null;
			let t = this.list.current;
			t && "resetAfterIndex" in t && t.resetAfterIndex(Math.max(0, e));
		}, this.root = hI(this), this.visibleNodes = tU(this), this.idToIndex = aU(this.visibleNodes);
	}
	update(e) {
		this.props = e, this.root = hI(this), this.visibleNodes = tU(this), this.idToIndex = aU(this.visibleNodes), this.rowOffsets = null;
		let t = this.list.current;
		t && "resetAfterIndex" in t && t.resetAfterIndex(0, !1);
	}
	dispatch(e) {
		return this.store.dispatch(e);
	}
	get state() {
		return this.store.getState();
	}
	get openState() {
		return this.state.nodes.open.unfiltered;
	}
	get width() {
		return this.props.width ?? 300;
	}
	get height() {
		return this.props.height ?? 500;
	}
	get indent() {
		return this.props.indent ?? 24;
	}
	get rowHeight() {
		return typeof this.props.rowHeight == "number" ? this.props.rowHeight : 24;
	}
	getRowOffsets() {
		if (this.rowOffsets) return this.rowOffsets;
		let e = [0];
		for (let t = 0; t < this.visibleNodes.length; t++) e.push(e[t] + this.rowHeightAt(t));
		return this.rowOffsets = e, e;
	}
	get overscanCount() {
		return this.props.overscanCount ?? 1;
	}
	get searchTerm() {
		return (this.props.searchTerm || "").trim();
	}
	get matchFn() {
		let e = this.props.searchMatch ?? ((e, t) => JSON.stringify(Object.values(e.data)).toLocaleLowerCase().includes(t.toLocaleLowerCase()));
		return (t) => e(t, this.searchTerm);
	}
	accessChildren(e) {
		return WF(e, this.props.childrenAccessor || "children") ?? null;
	}
	accessId(e) {
		let t = WF(e, this.props.idAccessor || "id");
		if (!t) throw Error("Data must contain an 'id' property or props.idAccessor must return a string");
		return t;
	}
	get firstNode() {
		return this.visibleNodes[0] ?? null;
	}
	get lastNode() {
		return this.visibleNodes[this.visibleNodes.length - 1] ?? null;
	}
	get focusedNode() {
		return this.get(this.state.nodes.focus.id) ?? null;
	}
	get mostRecentNode() {
		return this.get(this.state.nodes.selection.mostRecent) ?? null;
	}
	get nextNode() {
		let e = this.indexOf(this.focusedNode);
		return e === null ? null : this.at(e + 1);
	}
	get prevNode() {
		let e = this.indexOf(this.focusedNode);
		return e === null ? null : this.at(e - 1);
	}
	get(e) {
		return e && e in this.idToIndex && this.visibleNodes[this.idToIndex[e]] || null;
	}
	at(e) {
		return this.visibleNodes[e] || null;
	}
	nodesBetween(e, t) {
		if (e === null || t === null) return [];
		let n = this.indexOf(e) ?? 0, r = this.indexOf(t);
		if (r === null) return [];
		let i = Math.min(n, r), a = Math.max(n, r);
		return this.visibleNodes.slice(i, a + 1);
	}
	indexOf(e) {
		let t = GF(e);
		return t ? this.idToIndex[t] : null;
	}
	get editingId() {
		return this.state.nodes.edit.id;
	}
	createInternal() {
		return this.create({ type: "internal" });
	}
	createLeaf() {
		return this.create({ type: "leaf" });
	}
	create() {
		return oU(this, arguments, void 0, function* (e = {}) {
			let t = e.parentId === void 0 ? $F(this) : e.parentId, n = e.index ?? XF(this), r = e.type ?? "leaf", i = yield sU(this.props.onCreate, {
				type: r,
				parentId: t,
				index: n,
				parentNode: this.get(t)
			});
			i && (this.focus(i), setTimeout(() => {
				this.edit(i).then(() => {
					this.select(i), this.activate(i);
				});
			}));
		});
	}
	delete(e) {
		return oU(this, void 0, void 0, function* () {
			if (!e) return;
			let t = (Array.isArray(e) ? e : [e]).map(cU), n = t.map((e) => this.get(e)).filter((e) => !!e), r = n.length ? Math.min(...n.map((e) => e.rowIndex ?? 0)) : 0;
			yield sU(this.props.onDelete, {
				nodes: n,
				ids: t
			}), this.redrawList(r);
		});
	}
	edit(t) {
		let n = cU(t);
		return this.resolveEdit({ cancelled: !0 }), this.scrollTo(n), this.dispatch(cI(n)), this.redrawList(this.get(n)?.rowIndex ?? 0), new Promise((t) => {
			e.editPromise = t;
		});
	}
	submit(e, t) {
		return oU(this, void 0, void 0, function* () {
			if (!e) return;
			let n = cU(e);
			yield sU(this.props.onRename, {
				id: n,
				name: t,
				node: this.get(n)
			}), this.dispatch(cI(null)), this.resolveEdit({
				cancelled: !1,
				value: t
			}), this.redrawList(this.get(n)?.rowIndex ?? 0), setTimeout(() => this.onFocus());
		});
	}
	reset() {
		this.dispatch(cI(null)), this.resolveEdit({ cancelled: !0 }), this.redrawList(), setTimeout(() => this.onFocus());
	}
	activate(e) {
		let t = this.get(lU(e));
		t && sU(this.props.onActivate, t);
	}
	resolveEdit(t) {
		let n = e.editPromise;
		n && n(t), e.editPromise = null;
	}
	get selectedIds() {
		return this.state.nodes.selection.ids;
	}
	get selectedNodes() {
		let e = [];
		for (let t of Array.from(this.selectedIds)) {
			let n = this.get(t);
			n && e.push(n);
		}
		return e;
	}
	focus(e, t = {}) {
		e && (this.props.selectionFollowsFocus ? this.select(e) : (this.dispatch(uI(cU(e))), t.scroll !== !1 && this.scrollTo(e), this.focusedNode && sU(this.props.onFocus, this.focusedNode)));
	}
	pageUp() {
		let e = this.visibleStartIndex, t = this.visibleStopIndex - e, n = this.focusedNode?.rowIndex ?? 0;
		n = n > e ? e : Math.max(e - t, 0), this.focus(this.at(n));
	}
	pageDown() {
		let e = this.visibleStartIndex, t = this.visibleStopIndex, n = t - e, r = this.focusedNode?.rowIndex ?? 0;
		r = r < t ? t : Math.min(r + n, this.visibleNodes.length - 1), this.focus(this.at(r));
	}
	select(e, t = {}) {
		if (!e) return;
		let n = t.focus !== !1, r = cU(e);
		n && this.dispatch(uI(r)), this.get(r)?.isSelectable && this.setSelection({
			ids: [r],
			anchor: r,
			mostRecent: r
		}), this.scrollTo(r, t.align), this.focusedNode && n && sU(this.props.onFocus, this.focusedNode);
	}
	deselect(e) {
		if (!e) return;
		let t = cU(e);
		this.dispatch(bI.remove(t)), sU(this.props.onSelect, this.selectedNodes);
	}
	selectMulti(e, t = {}) {
		let n = this.get(lU(e));
		if (!n) return;
		let r = t.focus !== !1;
		r && this.dispatch(uI(n.id)), n.isSelectable && (this.dispatch(bI.add(n.id)), this.dispatch(bI.anchor(n.id)), this.dispatch(bI.mostRecent(n.id))), this.scrollTo(n, t.align), this.focusedNode && r && sU(this.props.onFocus, this.focusedNode), sU(this.props.onSelect, this.selectedNodes);
	}
	selectContiguous(e) {
		if (!e) return;
		let t = cU(e);
		if (this.dispatch(uI(t)), this.get(t)?.isSelectable) {
			let { anchor: e, mostRecent: n } = this.state.nodes.selection, r = this.filterSelectableNodes(this.nodesBetween(e, lU(t)));
			this.dispatch(bI.remove(this.nodesBetween(e, n))), this.dispatch(bI.add(r)), this.dispatch(bI.mostRecent(t));
		}
		this.scrollTo(t), this.focusedNode && sU(this.props.onFocus, this.focusedNode), sU(this.props.onSelect, this.selectedNodes);
	}
	deselectAll() {
		this.setSelection({
			ids: [],
			anchor: null,
			mostRecent: null
		}), sU(this.props.onSelect, this.selectedNodes);
	}
	selectAll() {
		let e = this.filterSelectableNodes(Object.keys(this.idToIndex));
		this.setSelection({
			ids: e,
			anchor: e[0] ?? null,
			mostRecent: e[e.length - 1] ?? null
		}), this.dispatch(uI(this.lastNode?.id)), this.focusedNode && sU(this.props.onFocus, this.focusedNode), sU(this.props.onSelect, this.selectedNodes);
	}
	filterSelectableNodes(e) {
		return e.map((e) => this.get(cU(e))).filter((e) => !!e && e.isSelectable);
	}
	setSelection(e) {
		let t = new Set(e.ids?.map(cU)), n = lU(e.anchor), r = lU(e.mostRecent);
		this.dispatch(bI.set({
			ids: t,
			anchor: n,
			mostRecent: r
		})), sU(this.props.onSelect, this.selectedNodes);
	}
	get cursorParentId() {
		let { cursor: e } = this.state.dnd;
		switch (e.type) {
			case "highlight": return e.id;
			default: return null;
		}
	}
	get cursorOverFolder() {
		return this.state.dnd.cursor.type === "highlight";
	}
	get dragNodes() {
		return this.state.dnd.dragIds.map((e) => this.get(e)).filter((e) => !!e);
	}
	get dragNode() {
		return this.get(this.state.nodes.drag.id);
	}
	get dragDestinationParent() {
		return this.get(this.state.nodes.drag.destinationParentId);
	}
	get dragDestinationIndex() {
		return this.state.nodes.drag.destinationIndex;
	}
	canDrop() {
		if (this.isFiltered) return !1;
		let e = this.get(this.state.dnd.parentId) ?? this.root, t = this.dragNodes, n = this.props.disableDrop;
		for (let n of t) if (!n || !e || n.isInternal && PF(e, n)) return !1;
		return typeof n == "function" ? !n({
			parentNode: e,
			dragNodes: this.dragNodes,
			index: this.state.dnd.index || 0
		}) : typeof n == "string" ? !e.data[n] : typeof n == "boolean" ? !n : !0;
	}
	hideCursor() {
		this.dispatch(SI.cursor({ type: "none" }));
	}
	showCursor(e) {
		this.dispatch(SI.cursor(e));
	}
	open(e, t = !0) {
		let n = lU(e);
		n && (this.isOpen(n) || (this.dispatch(gI.open(n, this.isFiltered)), t && this.redrawList(this.get(n)?.rowIndex ?? 0), sU(this.props.onToggle, n)));
	}
	close(e, t = !0) {
		let n = lU(e);
		n && this.isOpen(n) && (this.dispatch(gI.close(n, this.isFiltered)), t && this.redrawList(this.get(n)?.rowIndex ?? 0), sU(this.props.onToggle, n));
	}
	toggle(e) {
		let t = lU(e);
		if (t) return this.isOpen(t) ? this.close(t) : this.open(t);
	}
	openParents(e) {
		let t = lU(e);
		if (!t) return;
		let n = LF(this.root, t)?.parent;
		for (; n;) this.open(n.id, !1), n = n.parent;
		this.redrawList();
	}
	openSiblings(e) {
		let t = e.parent;
		if (!t) this.toggle(e.id);
		else if (t.children) {
			let n = e.isOpen;
			for (let e of t.children) e.isInternal && (n ? this.close(e.id, !1) : this.open(e.id, !1));
			this.redrawList(), this.scrollTo(this.focusedNode);
		}
	}
	openAll() {
		RF(this.root, (e) => {
			e.isInternal && this.open(e.id, !1);
		}), this.redrawList();
	}
	closeAll() {
		RF(this.root, (e) => {
			e.isInternal && this.close(e.id, !1);
		}), this.redrawList();
	}
	scrollTo(e, t = "smart") {
		if (!e) return;
		let n = cU(e);
		return this.openParents(n), YF(() => n in this.idToIndex).then(() => {
			var e;
			let r = this.idToIndex[n];
			r !== void 0 && ((e = this.list.current) == null || e.scrollToItem(r, t));
		}).catch(() => {});
	}
	get isEditing() {
		return this.state.nodes.edit.id !== null;
	}
	get isFiltered() {
		return !!this.props.searchTerm?.trim();
	}
	get hasFocus() {
		return this.state.nodes.focus.treeFocused;
	}
	get hasNoSelection() {
		return this.state.nodes.selection.ids.size === 0;
	}
	get hasOneSelection() {
		return this.state.nodes.selection.ids.size === 1;
	}
	get hasMultipleSelections() {
		return this.state.nodes.selection.ids.size > 1;
	}
	isSelected(e) {
		return e ? this.state.nodes.selection.ids.has(e) : !1;
	}
	isOpen(e) {
		if (!e) return !1;
		if (e === "__REACT_ARBORIST_INTERNAL_ROOT__") return !0;
		let t = this.props.openByDefault ?? !0;
		return this.isFiltered ? this.state.nodes.open.filtered[e] ?? !0 : this.state.nodes.open.unfiltered[e] ?? t;
	}
	isEditable(e) {
		return this.isActionPossible(e, this.props.disableEdit);
	}
	isDraggable(e) {
		return this.isActionPossible(e, this.props.disableDrag);
	}
	isSelectable(e) {
		return this.isActionPossible(e, this.props.disableSelect);
	}
	isActionPossible(e, t = () => !1) {
		return !WF(e, t);
	}
	isDragging(e) {
		let t = lU(e);
		return t ? this.state.nodes.drag.id === t : !1;
	}
	isFocused(e) {
		return this.hasFocus && this.state.nodes.focus.id === e;
	}
	isMatch(e) {
		return this.matchFn(e);
	}
	willReceiveDrop(e) {
		let t = lU(e);
		if (!t) return !1;
		let { destinationParentId: n, destinationIndex: r } = this.state.nodes.drag;
		return t === n && r === null;
	}
	onFocus() {
		let e = this.focusedNode || this.firstNode;
		e && this.dispatch(uI(e.id));
	}
	onBlur() {
		this.dispatch(dI());
	}
	onItemsRendered(e) {
		this.visibleStartIndex = e.visibleStartIndex, this.visibleStopIndex = e.visibleStopIndex;
	}
	get renderContainer() {
		return this.props.renderContainer || $H;
	}
	get renderRow() {
		return this.props.renderRow || iI;
	}
	get renderNode() {
		return this.props.children || aI;
	}
	get renderDragPreview() {
		return this.props.renderDragPreview || DI;
	}
	get renderCursor() {
		return this.props.renderCursor || rI;
	}
};
//#endregion
//#region node_modules/redux/dist/redux.mjs
function dU(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var fU = typeof Symbol == "function" && Symbol.observable || "@@observable", pU = () => Math.random().toString(36).substring(7).split("").join("."), mU = {
	INIT: `@@redux/INIT${/* @__PURE__ */ pU()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ pU()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${pU()}`
};
function hU(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function gU(e) {
	if (e === void 0) return "undefined";
	if (e === null) return "null";
	let t = typeof e;
	switch (t) {
		case "boolean":
		case "string":
		case "number":
		case "symbol":
		case "function": return t;
	}
	if (Array.isArray(e)) return "array";
	if (yU(e)) return "date";
	if (vU(e)) return "error";
	let n = _U(e);
	switch (n) {
		case "Symbol":
		case "Promise":
		case "WeakMap":
		case "WeakSet":
		case "Map":
		case "Set": return n;
	}
	return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function _U(e) {
	return typeof e.constructor == "function" ? e.constructor.name : null;
}
function vU(e) {
	return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function yU(e) {
	return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function bU(e) {
	let t = typeof e;
	return process.env.NODE_ENV !== "production" && (t = gU(e)), t;
}
function xU(e, t, n) {
	if (typeof e != "function") throw Error(process.env.NODE_ENV === "production" ? dU(2) : `Expected the root reducer to be a function. Instead, received: '${bU(e)}'`);
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(process.env.NODE_ENV === "production" ? dU(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(process.env.NODE_ENV === "production" ? dU(1) : `Expected the enhancer to be a function. Instead, received: '${bU(n)}'`);
		return n(xU)(e, t);
	}
	let r = e, i = t, a = /* @__PURE__ */ new Map(), o = a, s = 0, c = !1;
	function l() {
		o === a && (o = /* @__PURE__ */ new Map(), a.forEach((e, t) => {
			o.set(t, e);
		}));
	}
	function u() {
		if (c) throw Error(process.env.NODE_ENV === "production" ? dU(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
		return i;
	}
	function d(e) {
		if (typeof e != "function") throw Error(process.env.NODE_ENV === "production" ? dU(4) : `Expected the listener to be a function. Instead, received: '${bU(e)}'`);
		if (c) throw Error(process.env.NODE_ENV === "production" ? dU(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
		let t = !0;
		l();
		let n = s++;
		return o.set(n, e), function() {
			if (t) {
				if (c) throw Error(process.env.NODE_ENV === "production" ? dU(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
				t = !1, l(), o.delete(n), a = null;
			}
		};
	}
	function f(e) {
		if (!hU(e)) throw Error(process.env.NODE_ENV === "production" ? dU(7) : `Actions must be plain objects. Instead, the actual type was: '${bU(e)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
		if (e.type === void 0) throw Error(process.env.NODE_ENV === "production" ? dU(8) : "Actions may not have an undefined \"type\" property. You may have misspelled an action type string constant.");
		if (typeof e.type != "string") throw Error(process.env.NODE_ENV === "production" ? dU(17) : `Action "type" property must be a string. Instead, the actual type was: '${bU(e.type)}'. Value was: '${e.type}' (stringified)`);
		if (c) throw Error(process.env.NODE_ENV === "production" ? dU(9) : "Reducers may not dispatch actions.");
		try {
			c = !0, i = r(i, e);
		} finally {
			c = !1;
		}
		return (a = o).forEach((e) => {
			e();
		}), e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(process.env.NODE_ENV === "production" ? dU(10) : `Expected the nextReducer to be a function. Instead, received: '${bU(e)}`);
		r = e, f({ type: mU.REPLACE });
	}
	function m() {
		let e = d;
		return {
			subscribe(t) {
				if (typeof t != "object" || !t) throw Error(process.env.NODE_ENV === "production" ? dU(11) : `Expected the observer to be an object. Instead, received: '${bU(t)}'`);
				function n() {
					let e = t;
					e.next && e.next(u());
				}
				return n(), { unsubscribe: e(n) };
			},
			[fU]() {
				return this;
			}
		};
	}
	return f({ type: mU.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[fU]: m
	};
}
function SU(e) {
	typeof console < "u" && typeof console.error == "function" && console.error(e);
	try {
		throw Error(e);
	} catch {}
}
function CU(e, t, n, r) {
	let i = Object.keys(t), a = n && n.type === mU.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
	if (i.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
	if (!hU(e)) return `The ${a} has unexpected type of "${bU(e)}". Expected argument to be an object with the following keys: "${i.join("\", \"")}"`;
	let o = Object.keys(e).filter((e) => !t.hasOwnProperty(e) && !r[e]);
	if (o.forEach((e) => {
		r[e] = !0;
	}), !(n && n.type === mU.REPLACE) && o.length > 0) return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join("\", \"")}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join("\", \"")}". Unexpected keys will be ignored.`;
}
function wU(e) {
	Object.keys(e).forEach((t) => {
		let n = e[t];
		if (n(void 0, { type: mU.INIT }) === void 0) throw Error(process.env.NODE_ENV === "production" ? dU(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
		if (n(void 0, { type: mU.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(process.env.NODE_ENV === "production" ? dU(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${mU.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
	});
}
function TU(e) {
	let t = Object.keys(e), n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		process.env.NODE_ENV !== "production" && e[i] === void 0 && SU(`No reducer provided for key "${i}"`), typeof e[i] == "function" && (n[i] = e[i]);
	}
	let r = Object.keys(n), i;
	process.env.NODE_ENV !== "production" && (i = {});
	let a;
	try {
		wU(n);
	} catch (e) {
		a = e;
	}
	return function(e = {}, t) {
		if (a) throw a;
		if (process.env.NODE_ENV !== "production") {
			let r = CU(e, n, t, i);
			r && SU(r);
		}
		let o = !1, s = {};
		for (let i = 0; i < r.length; i++) {
			let a = r[i], c = n[a], l = e[a], u = c(l, t);
			if (u === void 0) {
				let e = t && t.type;
				throw Error(process.env.NODE_ENV === "production" ? dU(14) : `When called with an action of type ${e ? `"${String(e)}"` : "(unknown type)"}, the slice reducer for key "${a}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
			}
			s[a] = u, o ||= u !== l;
		}
		return o ||= r.length !== Object.keys(e).length, o ? s : e;
	};
}
//#endregion
//#region node_modules/react-arborist/dist/module/state/drag-slice.js
function EU(e = yI().nodes.drag, t) {
	switch (t.type) {
		case "DND_DRAG_START": return Object.assign(Object.assign({}, e), {
			id: t.id,
			selectedIds: t.dragIds
		});
		case "DND_DRAG_END": return Object.assign(Object.assign({}, e), {
			id: null,
			destinationParentId: null,
			destinationIndex: null,
			selectedIds: []
		});
		case "DND_HOVERING": return t.parentId !== e.destinationParentId || t.index != e.destinationIndex ? Object.assign(Object.assign({}, e), {
			destinationParentId: t.parentId,
			destinationIndex: t.index
		}) : e;
		default: return e;
	}
}
//#endregion
//#region node_modules/react-arborist/dist/module/state/root-reducer.js
var DU = TU({
	nodes: TU({
		focus: fI,
		edit: lI,
		open: vI,
		selection: xI,
		drag: EU
	}),
	dnd: CI
}), OU = yI();
function kU({ treeProps: e, imperativeHandle: t, children: n }) {
	let r = v(null), i = v(null), a = v(xU(DU, yI(e))), o = (0, Aa.useSyncExternalStore)(a.current.subscribe, a.current.getState, () => OU), s = g(() => new uU(a.current, e, r, i), []), c = v(0);
	return g(() => {
		c.current += 1, s.update(e);
	}, Object.values(e)), g(() => {
		c.current += 1, s.update(s.props);
	}, [o.nodes.open]), m(t, () => s), f(() => {
		s.props.selection ? s.select(s.props.selection, { focus: !1 }) : s.deselectAll();
	}, [s.props.selection]), f(() => {
		s.props.searchTerm || a.current.dispatch(gI.clear(!0));
	}, [s.props.searchTerm]), C(xF.Provider, {
		value: s,
		children: C(DF.Provider, {
			value: c.current,
			children: C(CF.Provider, {
				value: o.nodes,
				children: C(TF.Provider, {
					value: o.dnd,
					children: C(Wz, Object.assign({}, e.dndManager ? { manager: e.dndManager } : {
						backend: e.dndBackend || zH,
						options: { rootElement: s.props.dndRootElement || void 0 }
					}, { children: n }))
				})
			})
		})
	});
}
//#endregion
//#region node_modules/react-arborist/dist/module/dnd/outer-drop-hook.js
function AU() {
	let e = SF(), [, t] = FV(() => ({
		accept: "NODE",
		canDrop: (t, n) => n.isOver({ shallow: !0 }) ? e.canDrop() : !1,
		hover: (t, n) => {
			if (!n.isOver({ shallow: !0 })) return;
			let r = n.getClientOffset();
			if (!e.listEl.current || !r) return;
			let { cursor: i, drop: a } = qH({
				element: e.listEl.current,
				offset: r,
				indent: e.indent,
				node: null,
				prevNode: e.visibleNodes[e.visibleNodes.length - 1],
				nextNode: null
			});
			a && e.dispatch(SI.hovering(a.parentId, a.index)), n.canDrop() ? i && e.showCursor(i) : e.hideCursor();
		}
	}), [e]);
	t(e.listEl);
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/outer-drop.js
function jU(e) {
	return AU(), e.children;
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/tree-container.js
function MU() {
	return C(S, { children: C(SF().props.renderContainer || $H, {}) });
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/drag-preview-container.js
function NU() {
	let e = SF(), { offset: t, mouse: n, item: r, isDragging: i } = HV((e) => ({
		offset: e.getSourceClientOffset(),
		mouse: e.getClientOffset(),
		item: e.getItem(),
		isDragging: e.isDragging()
	}));
	return C(e.props.renderDragPreview || DI, {
		offset: t,
		mouse: n,
		id: r?.id || null,
		dragIds: r?.dragIds || [],
		isDragging: i
	});
}
//#endregion
//#region node_modules/react-arborist/dist/module/data/simple-tree.js
var PU = class {
	constructor(e) {
		this.root = FU(e);
	}
	get data() {
		return this.root.children?.map((e) => e.data) ?? [];
	}
	create(e) {
		let t = e.parentId ? this.find(e.parentId) : this.root;
		if (!t) return null;
		t.addChild(e.data, e.index);
	}
	move(e) {
		let t = this.find(e.id), n = e.parentId ? this.find(e.parentId) : this.root;
		!t || !n || (n.addChild(t.data, e.index), t.drop());
	}
	update(e) {
		let t = this.find(e.id);
		t && t.update(e.changes);
	}
	drop(e) {
		let t = this.find(e.id);
		t && t.drop();
	}
	find(e, t = this.root) {
		if (!t) return null;
		if (t.id === e) return t;
		if (t.children) {
			for (let n of t.children) {
				let t = this.find(e, n);
				if (t) return t;
			}
			return null;
		}
		return null;
	}
};
function FU(e) {
	let t = new LU({ id: "ROOT" }, null);
	return t.children = e.map((e) => IU(e, t)), t;
}
function IU(e, t) {
	let n = new LU(e, t);
	return e.children && (n.children = e.children.map((e) => IU(e, n))), n;
}
var LU = class {
	constructor(e, t) {
		this.data = e, this.parent = t, this.id = e.id;
	}
	hasParent() {
		return !!this.parent;
	}
	get childIndex() {
		return this.hasParent() ? this.parent.children.indexOf(this) : -1;
	}
	addChild(e, t) {
		let n = IU(e, this);
		this.children = this.children ?? [], this.children.splice(t, 0, n), this.data.children = this.data.children ?? [], this.data.children.splice(t, 0, e);
	}
	removeChild(e) {
		var t, n;
		(t = this.children) == null || t.splice(e, 1), (n = this.data.children) == null || n.splice(e, 1);
	}
	update(e) {
		if (this.hasParent()) {
			let t = this.childIndex;
			this.parent.addChild(Object.assign(Object.assign({}, this.data), e), t), this.drop();
		}
	}
	drop() {
		this.hasParent() && this.parent.removeChild(this.childIndex);
	}
}, RU = 0;
function zU(e) {
	let [t, n] = y(e), r = g(() => new PU(t), [t]);
	return [t, {
		onMove: (e) => {
			for (let t of e.dragIds) r.move({
				id: t,
				parentId: e.parentId,
				index: e.index
			});
			n(r.data);
		},
		onRename: ({ name: e, id: t }) => {
			r.update({
				id: t,
				changes: { name: e }
			}), n(r.data);
		},
		onCreate: ({ parentId: e, index: t, type: i }) => {
			let a = {
				id: `simple-tree-id-${RU++}`,
				name: ""
			};
			return i === "internal" && (a.children = []), r.create({
				parentId: e,
				index: t,
				data: a
			}), n(r.data), a;
		},
		onDelete: (e) => {
			e.ids.forEach((e) => r.drop({ id: e })), n(r.data);
		}
	}];
}
//#endregion
//#region node_modules/react-arborist/dist/module/hooks/use-validated-props.js
function BU(e) {
	if (e.initialData && e.data) throw Error("React Arborist Tree => Provide either a data or initialData prop, but not both.");
	if (e.initialData && (e.onCreate || e.onDelete || e.onMove || e.onRename)) throw Error("React Arborist Tree => You passed the initialData prop along with a data handler.\nUse the data prop if you want to provide your own handlers.");
	if (e.initialData) {
		let [t, n] = zU(e.initialData);
		return Object.assign(Object.assign(Object.assign({}, e), n), { data: t });
	} else return e;
}
//#endregion
//#region node_modules/react-arborist/dist/module/components/tree.js
function VU(e, t) {
	return w(kU, {
		treeProps: BU(e),
		imperativeHandle: t,
		children: [C(jU, { children: C(MU, {}) }), C(NU, {})]
	});
}
var HU = s(VU);
//#endregion
//#region src/components/TreeView/TreeView.tsx
function UU({ node: e, style: t, dragHandle: n }) {
	let r = e.isLeaf;
	return /* @__PURE__ */ w("div", {
		ref: n,
		className: "tv__row",
		style: t,
		"data-selected": e.isSelected,
		"data-focused": e.isFocused,
		children: [
			/* @__PURE__ */ C("span", {
				className: "tv__chev",
				"aria-hidden": "true",
				onClick: (t) => {
					t.stopPropagation(), e.toggle();
				},
				children: r ? "·" : e.isOpen ? "▾" : "▸"
			}),
			/* @__PURE__ */ C("span", {
				className: "tv__icon mono",
				"aria-hidden": "true",
				children: r ? "txt" : "dir"
			}),
			/* @__PURE__ */ C("span", {
				className: "tv__name",
				children: e.data.name
			})
		]
	});
}
function WU({ data: e, height: t = 340, onFocusChange: n, className: r = "tv__frame" }) {
	return /* @__PURE__ */ C("div", {
		className: r,
		children: /* @__PURE__ */ C(HU, {
			data: g(() => e, [e]),
			openByDefault: !1,
			width: "100%",
			height: t,
			indent: 20,
			rowHeight: 30,
			onFocus: (e) => n?.(e?.data.name ?? null),
			children: UU
		})
	});
}
//#endregion
//#region src/components/Treegrid/Treegrid.tsx
function GU({ node: e, style: t }) {
	let n = e.isLeaf, r = e.data, i = (e.level + 1) * 16;
	return /* @__PURE__ */ w("div", {
		role: "row",
		"aria-level": e.level + 1,
		"aria-posinset": e.childIndex + 1,
		"aria-setsize": e.parent?.children?.length ?? 1,
		"aria-expanded": n ? void 0 : e.isOpen,
		"aria-selected": e.isSelected,
		className: "trg__row",
		"data-focused": e.isFocused,
		style: t,
		onClick: () => n ? e.select() : e.toggle(),
		children: [
			/* @__PURE__ */ w("div", {
				role: "gridcell",
				className: "trg__cell trg__cell--name",
				style: { paddingLeft: i },
				children: [/* @__PURE__ */ C("span", {
					className: "trg__chev",
					"aria-hidden": "true",
					children: n ? "·" : e.isOpen ? "▾" : "▸"
				}), /* @__PURE__ */ C("span", {
					className: n ? "trg__file" : "trg__folder",
					children: r.name
				})]
			}),
			/* @__PURE__ */ C("div", {
				role: "gridcell",
				className: "trg__cell mono",
				children: r.owner
			}),
			/* @__PURE__ */ C("div", {
				role: "gridcell",
				className: "trg__cell mono",
				children: r.size
			}),
			/* @__PURE__ */ C("div", {
				role: "gridcell",
				className: "trg__cell mono",
				children: r.modified
			})
		]
	});
}
function KU({ data: e, ariaLabel: t = "Project files", height: n = 340, openByDefault: r = !0, className: i = "trg" }) {
	let a = g(() => e, [e]);
	return /* @__PURE__ */ w("div", {
		role: "treegrid",
		"aria-label": t,
		"aria-rowcount": -1,
		"aria-colcount": 4,
		className: i,
		children: [/* @__PURE__ */ w("div", {
			role: "row",
			className: "trg__row trg__row--head",
			children: [
				/* @__PURE__ */ C("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "name"
				}),
				/* @__PURE__ */ C("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "owner"
				}),
				/* @__PURE__ */ C("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "size"
				}),
				/* @__PURE__ */ C("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "modified"
				})
			]
		}), /* @__PURE__ */ C(HU, {
			data: a,
			openByDefault: r,
			width: "100%",
			height: n,
			indent: 0,
			rowHeight: 30,
			children: GU
		})]
	});
}
//#endregion
//#region node_modules/react-resizable-panels/dist/react-resizable-panels.js
function qU(e, t) {
	let n = getComputedStyle(e);
	return t * parseFloat(n.fontSize);
}
function JU(e, t) {
	let n = getComputedStyle(e.ownerDocument.documentElement);
	return t * parseFloat(n.fontSize);
}
function YU(e) {
	return e / 100 * window.innerHeight;
}
function XU(e) {
	return e / 100 * window.innerWidth;
}
function ZU(e) {
	switch (typeof e) {
		case "number": return [e, "px"];
		case "string": {
			let t = parseFloat(e);
			return e.endsWith("%") ? [t, "%"] : e.endsWith("px") ? [t, "px"] : e.endsWith("rem") ? [t, "rem"] : e.endsWith("em") ? [t, "em"] : e.endsWith("vh") ? [t, "vh"] : e.endsWith("vw") ? [t, "vw"] : [t, "%"];
		}
	}
}
function QU({ groupSize: e, panelElement: t, styleProp: n }) {
	let r, [i, a] = ZU(n);
	switch (a) {
		case "%":
			r = i / 100 * e;
			break;
		case "px":
			r = i;
			break;
		case "rem":
			r = JU(t, i);
			break;
		case "em":
			r = qU(t, i);
			break;
		case "vh":
			r = YU(i);
			break;
		case "vw":
			r = XU(i);
			break;
	}
	return r;
}
function $U(e) {
	return parseFloat(e.toFixed(3));
}
function eW({ group: e }) {
	let { orientation: t, panels: n } = e;
	return n.reduce((e, n) => (e += t === "horizontal" ? n.element.offsetWidth : n.element.offsetHeight, e), 0);
}
function tW(e) {
	let { panels: t } = e, n = eW({ group: e });
	return n === 0 ? t.map((e) => ({
		groupResizeBehavior: e.panelConstraints.groupResizeBehavior,
		collapsedSize: 0,
		collapsible: e.panelConstraints.collapsible === !0,
		defaultSize: void 0,
		disabled: e.panelConstraints.disabled,
		minSize: 0,
		maxSize: 100,
		panelId: e.id
	})) : t.map((e) => {
		let { element: t, panelConstraints: r } = e, i = 0;
		r.collapsedSize !== void 0 && (i = $U(QU({
			groupSize: n,
			panelElement: t,
			styleProp: r.collapsedSize
		}) / n * 100));
		let a;
		r.defaultSize !== void 0 && (a = $U(QU({
			groupSize: n,
			panelElement: t,
			styleProp: r.defaultSize
		}) / n * 100));
		let o = 0;
		r.minSize !== void 0 && (o = $U(QU({
			groupSize: n,
			panelElement: t,
			styleProp: r.minSize
		}) / n * 100));
		let s = 100;
		return r.maxSize !== void 0 && (s = $U(QU({
			groupSize: n,
			panelElement: t,
			styleProp: r.maxSize
		}) / n * 100)), {
			groupResizeBehavior: r.groupResizeBehavior,
			collapsedSize: i,
			collapsible: r.collapsible === !0,
			defaultSize: a,
			disabled: r.disabled,
			minSize: o,
			maxSize: s,
			panelId: e.id
		};
	});
}
function nW(e, t = "Assertion error") {
	if (!e) throw Error(t);
}
function rW(e, t) {
	return Array.from(t).sort(e === "horizontal" ? iW : aW);
}
function iW(e, t) {
	let n = e.element.offsetLeft - t.element.offsetLeft;
	return n === 0 ? e.element.offsetWidth - t.element.offsetWidth : n;
}
function aW(e, t) {
	let n = e.element.offsetTop - t.element.offsetTop;
	return n === 0 ? e.element.offsetHeight - t.element.offsetHeight : n;
}
function oW(e) {
	return typeof e == "object" && !!e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function sW(e, t) {
	return {
		x: e.x >= t.left && e.x <= t.right ? 0 : Math.min(Math.abs(e.x - t.left), Math.abs(e.x - t.right)),
		y: e.y >= t.top && e.y <= t.bottom ? 0 : Math.min(Math.abs(e.y - t.top), Math.abs(e.y - t.bottom))
	};
}
function cW({ orientation: e, rects: t, targetRect: n }) {
	let r = {
		x: n.x + n.width / 2,
		y: n.y + n.height / 2
	}, i, a = Number.MAX_VALUE;
	for (let n of t) {
		let { x: t, y: o } = sW(r, n), s = e === "horizontal" ? t : o;
		s < a && (a = s, i = n);
	}
	return nW(i, "No rect found"), i;
}
var lW;
function uW() {
	return lW === void 0 && (lW = typeof matchMedia == "function" ? !!matchMedia("(pointer:coarse)").matches : !1), lW;
}
function dW(e) {
	let { element: t, orientation: n, panels: r, separators: i } = e, a = rW(n, Array.from(t.children).filter(oW).map((e) => ({ element: e }))).map(({ element: e }) => e), o = [], s = !1, c = !1, l = -1, u = -1, d = 0, f, p = [];
	{
		let e = -1;
		for (let t of a) t.hasAttribute("data-panel") && (e++, t.hasAttribute("data-disabled") || (d++, l === -1 && (l = e), u = e));
	}
	if (d > 1) {
		let t = -1;
		for (let d of a) if (d.hasAttribute("data-panel")) {
			t++;
			let i = r.find((e) => e.element === d);
			if (i) {
				if (f) {
					let r = f.element.getBoundingClientRect(), a = d.getBoundingClientRect(), m;
					if (c) {
						let e = n === "horizontal" ? new DOMRect(r.right, r.top, 0, r.height) : new DOMRect(r.left, r.bottom, r.width, 0), t = n === "horizontal" ? new DOMRect(a.left, a.top, 0, a.height) : new DOMRect(a.left, a.top, a.width, 0);
						switch (p.length) {
							case 0:
								m = [e, t];
								break;
							case 1: {
								let i = p[0];
								m = [i, cW({
									orientation: n,
									rects: [r, a],
									targetRect: i.element.getBoundingClientRect()
								}) === r ? t : e];
								break;
							}
							default:
								m = p;
								break;
						}
					} else m = p.length ? p : [n === "horizontal" ? new DOMRect(r.right, a.top, a.left - r.right, a.height) : new DOMRect(a.left, r.bottom, a.width, a.top - r.bottom)];
					for (let n of m) {
						let r = "width" in n ? n : n.element.getBoundingClientRect(), a = uW() ? e.resizeTargetMinimumSize.coarse : e.resizeTargetMinimumSize.fine;
						if (r.width < a) {
							let e = a - r.width;
							r = new DOMRect(r.x - e / 2, r.y, r.width + e, r.height);
						}
						if (r.height < a) {
							let e = a - r.height;
							r = new DOMRect(r.x, r.y - e / 2, r.width, r.height + e);
						}
						!s && !(t <= l || t > u) && o.push({
							group: e,
							groupSize: eW({ group: e }),
							panels: [f, i],
							separator: "width" in n ? void 0 : n,
							rect: r
						}), s = !1;
					}
				}
				c = !1, f = i, p = [];
			}
		} else if (d.hasAttribute("data-separator")) {
			d.ariaDisabled !== null && (s = !0);
			let e = i.find((e) => e.element === d);
			e ? p.push(e) : (f = void 0, p = []);
		} else c = !0;
	}
	return o;
}
var fW = class {
	#e = {};
	addListener(e, t) {
		let n = this.#e[e];
		return n === void 0 ? this.#e[e] = [t] : n.includes(t) || n.push(t), () => {
			this.removeListener(e, t);
		};
	}
	emit(e, t) {
		let n = this.#e[e];
		if (n !== void 0) if (n.length === 1) n[0].call(null, t);
		else {
			let e = !1, r = null, i = Array.from(n);
			for (let n = 0; n < i.length; n++) {
				let a = i[n];
				try {
					a.call(null, t);
				} catch (t) {
					r === null && (e = !0, r = t);
				}
			}
			if (e) throw r;
		}
	}
	removeAllListeners() {
		this.#e = {};
	}
	removeListener(e, t) {
		let n = this.#e[e];
		if (n !== void 0) {
			let e = n.indexOf(t);
			e >= 0 && n.splice(e, 1);
		}
	}
}, pW = /* @__PURE__ */ new Map(), mW = new fW();
function hW(e) {
	pW = new Map(pW), pW.delete(e);
}
function gW(e, t) {
	for (let [t] of pW) if (t.id === e) return t;
}
function _W(e, t) {
	for (let [t, n] of pW) if (t.id === e) return n;
	if (t) throw Error(`Could not find data for Group with id ${e}`);
}
function vW() {
	return pW;
}
function yW(e, t) {
	return mW.addListener("groupChange", (n) => {
		n.group.id === e && t(n);
	});
}
function bW(e, t) {
	let n = pW.get(e);
	pW = new Map(pW), pW.set(e, t), mW.emit("groupChange", {
		group: e,
		prev: n,
		next: t
	});
}
function xW(e, t, n) {
	let r, i = {
		x: Infinity,
		y: Infinity
	};
	for (let a of t) {
		let t = sW(n, a.rect);
		switch (e) {
			case "horizontal":
				t.x <= i.x && (r = a, i = t);
				break;
			case "vertical":
				t.y <= i.y && (r = a, i = t);
				break;
		}
	}
	return r ? {
		distance: i,
		hitRegion: r
	} : void 0;
}
function SW(e) {
	return typeof e == "object" && !!e && "nodeType" in e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function CW(e, t) {
	if (e === t) throw Error("Cannot compare node with itself");
	let n = {
		a: kW(e),
		b: kW(t)
	}, r;
	for (; n.a.at(-1) === n.b.at(-1);) r = n.a.pop(), n.b.pop();
	nW(r, "Stacking order can only be calculated for elements with a common ancestor");
	let i = {
		a: OW(DW(n.a)),
		b: OW(DW(n.b))
	};
	if (i.a === i.b) {
		let e = r.childNodes, t = {
			a: n.a.at(-1),
			b: n.b.at(-1)
		}, i = e.length;
		for (; i--;) {
			let n = e[i];
			if (n === t.a) return 1;
			if (n === t.b) return -1;
		}
	}
	return Math.sign(i.a - i.b);
}
var wW = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function TW(e) {
	let t = getComputedStyle(AW(e) ?? e).display;
	return t === "flex" || t === "inline-flex";
}
function EW(e) {
	let t = getComputedStyle(e);
	return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || TW(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || wW.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function DW(e) {
	let t = e.length;
	for (; t--;) {
		let n = e[t];
		if (nW(n, "Missing node"), EW(n)) return n;
	}
	return null;
}
function OW(e) {
	return e && Number(getComputedStyle(e).zIndex) || 0;
}
function kW(e) {
	let t = [];
	for (; e;) t.push(e), e = AW(e);
	return t;
}
function AW(e) {
	let { parentNode: t } = e;
	return SW(t) ? t.host : t;
}
function jW(e, t) {
	return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function MW({ groupElement: e, hitRegion: t, pointerEventTarget: n }) {
	if (!oW(n) || n.contains(e) || e.contains(n)) return !0;
	if (CW(n, e) > 0) {
		let r = n;
		for (; r;) {
			if (r.contains(e)) return !0;
			if (jW(r.getBoundingClientRect(), t)) return !1;
			r = r.parentElement;
		}
	}
	return !0;
}
function NW(e, t) {
	let n = [];
	return t.forEach((t, r) => {
		if (r.disabled) return;
		let i = dW(r), a = xW(r.orientation, i, {
			x: e.clientX,
			y: e.clientY
		});
		a && a.distance.x <= 0 && a.distance.y <= 0 && MW({
			groupElement: r.element,
			hitRegion: a.hitRegion.rect,
			pointerEventTarget: e.target
		}) && n.push(a.hitRegion);
	}), n;
}
function PW(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
	return !0;
}
function FW(e, t, n = 0) {
	return Math.abs($U(e) - $U(t)) <= n;
}
function IW(e, t) {
	return FW(e, t) ? 0 : e > t ? 1 : -1;
}
function LW({ overrideDisabledPanels: e, panelConstraints: t, prevSize: n, size: r }) {
	let { collapsedSize: i = 0, collapsible: a, disabled: o, maxSize: s = 100, minSize: c = 0 } = t;
	if (o && !e) return n;
	if (IW(r, c) < 0) if (a) {
		let e = (i + c) / 2;
		r = IW(r, e) < 0 ? i : c;
	} else r = c;
	return r = Math.min(s, r), r = $U(r), r;
}
function RW({ delta: e, initialLayout: t, panelConstraints: n, pivotIndices: r, prevLayout: i, trigger: a }) {
	if (FW(e, 0)) return t;
	let o = a === "imperative-api", s = Object.values(t), c = Object.values(i), l = [...s], [u, d] = r;
	nW(u != null, "Invalid first pivot index"), nW(d != null, "Invalid second pivot index");
	let f = 0;
	switch (a) {
		case "keyboard":
			{
				let t = e < 0 ? d : u, r = n[t];
				nW(r, `Panel constraints not found for index ${t}`);
				let { collapsedSize: i = 0, collapsible: a, minSize: o = 0 } = r;
				if (a) {
					let n = s[t];
					if (nW(n != null, `Previous layout not found for panel index ${t}`), FW(n, i)) {
						let t = o - n;
						IW(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
					}
				}
			}
			{
				let t = e < 0 ? u : d, r = n[t];
				nW(r, `No panel constraints found for index ${t}`);
				let { collapsedSize: i = 0, collapsible: a, minSize: o = 0 } = r;
				if (a) {
					let n = s[t];
					if (nW(n != null, `Previous layout not found for panel index ${t}`), FW(n, o)) {
						let t = n - i;
						IW(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
					}
				}
			}
			break;
		default: {
			let t = e < 0 ? d : u, r = n[t];
			nW(r, `Panel constraints not found for index ${t}`);
			let i = s[t], { collapsible: a, collapsedSize: o, minSize: c } = r;
			if (a && IW(i, c) < 0) if (e > 0) {
				let t = c - o, n = t / 2;
				IW(i + e, c) < 0 && (e = IW(e, n) <= 0 ? 0 : t);
			} else {
				let t = c - o, n = 100 - t / 2;
				IW(i - e, c) < 0 && (e = IW(100 + e, n) > 0 ? 0 : -t);
			}
			break;
		}
	}
	{
		let t = e < 0 ? 1 : -1, r = e < 0 ? d : u, i = 0;
		for (;;) {
			let e = s[r];
			nW(e != null, `Previous layout not found for panel index ${r}`);
			let a = LW({
				overrideDisabledPanels: o,
				panelConstraints: n[r],
				prevSize: e,
				size: 100
			}) - e;
			if (i += a, r += t, r < 0 || r >= n.length) break;
		}
		let a = Math.min(Math.abs(e), Math.abs(i));
		e = e < 0 ? 0 - a : a;
	}
	{
		let t = e < 0 ? u : d;
		for (; t >= 0 && t < n.length;) {
			let r = Math.abs(e) - Math.abs(f), i = s[t];
			nW(i != null, `Previous layout not found for panel index ${t}`);
			let a = i - r, c = LW({
				overrideDisabledPanels: o,
				panelConstraints: n[t],
				prevSize: i,
				size: a
			});
			if (!FW(i, c) && (f += i - c, l[t] = c, f.toFixed(3).localeCompare(Math.abs(e).toFixed(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? t-- : t++;
		}
	}
	if (PW(c, l)) return i;
	{
		let t = e < 0 ? d : u, r = s[t];
		nW(r != null, `Previous layout not found for panel index ${t}`);
		let i = r + f, a = LW({
			overrideDisabledPanels: o,
			panelConstraints: n[t],
			prevSize: r,
			size: i
		});
		if (l[t] = a, !FW(a, i)) {
			let t = i - a, r = e < 0 ? d : u;
			for (; r >= 0 && r < n.length;) {
				let i = l[r];
				nW(i != null, `Previous layout not found for panel index ${r}`);
				let a = i + t, s = LW({
					overrideDisabledPanels: o,
					panelConstraints: n[r],
					prevSize: i,
					size: a
				});
				if (FW(i, s) || (t -= s - i, l[r] = s), FW(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	if (!FW(Object.values(l).reduce((e, t) => t + e, 0), 100, .1)) return i;
	let p = Object.keys(i);
	return l.reduce((e, t, n) => (e[p[n]] = t, e), {});
}
function zW(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (t[n] === void 0 || IW(e[n], t[n]) !== 0) return !1;
	return !0;
}
function BW({ layout: e, panelConstraints: t }) {
	let n = Object.values(e), r = [...n], i = r.reduce((e, t) => e + t, 0);
	if (r.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${r.map((e) => `${e}%`).join(", ")}`);
	if (!FW(i, 100) && r.length > 0) for (let e = 0; e < t.length; e++) {
		let t = r[e];
		nW(t != null, `No layout data found for index ${e}`), r[e] = 100 / i * t;
	}
	let a = 0;
	for (let e = 0; e < t.length; e++) {
		let i = n[e];
		nW(i != null, `No layout data found for index ${e}`);
		let o = r[e];
		nW(o != null, `No layout data found for index ${e}`);
		let s = LW({
			overrideDisabledPanels: !0,
			panelConstraints: t[e],
			prevSize: i,
			size: o
		});
		o != s && (a += o - s, r[e] = s);
	}
	if (!FW(a, 0)) for (let e = 0; e < t.length; e++) {
		let n = r[e];
		nW(n != null, `No layout data found for index ${e}`);
		let i = n + a, o = LW({
			overrideDisabledPanels: !0,
			panelConstraints: t[e],
			prevSize: n,
			size: i
		});
		if (n !== o && (a -= o - n, r[e] = o, FW(a, 0))) break;
	}
	let o = Object.keys(e);
	return r.reduce((e, t, n) => (e[o[n]] = t, e), {});
}
function VW({ groupId: e, panelId: t }) {
	let n = () => {
		let t = vW();
		for (let [n, { defaultLayoutDeferred: r, derivedPanelConstraints: i, layout: a, groupSize: o, separatorToPanels: s }] of t) if (n.id === e) return {
			defaultLayoutDeferred: r,
			derivedPanelConstraints: i,
			group: n,
			groupSize: o,
			layout: a,
			separatorToPanels: s
		};
		throw Error(`Group ${e} not found`);
	}, r = () => {
		let e = n().derivedPanelConstraints.find((e) => e.panelId === t);
		if (e !== void 0) return e;
		throw Error(`Panel constraints not found for Panel ${t}`);
	}, i = () => {
		let e = n().group.panels.find((e) => e.id === t);
		if (e !== void 0) return e;
		throw Error(`Layout not found for Panel ${t}`);
	}, a = () => {
		let e = n().layout[t];
		if (e !== void 0) return e;
		throw Error(`Layout not found for Panel ${t}`);
	}, o = ({ nextSize: e, panels: n, prevLayout: r, derivedPanelConstraints: i }) => {
		let o = a(), s = n.findIndex((e) => e.id === t), c = s === 0, l = s === n.length - 1;
		if (l && e < o && (c || n.slice(0, s).every((e, t) => {
			let n = i[t];
			return n?.collapsible && FW(n.collapsedSize, r[n.panelId]);
		}))) {
			let e = n.slice(0, s).reduce((e, t) => e + r[t.id], 0);
			return {
				...r,
				[t]: $U(100 - e)
			};
		}
		return RW({
			delta: l ? o - e : e - o,
			initialLayout: r,
			panelConstraints: i,
			pivotIndices: l ? [s - 1, s] : [s, s + 1],
			prevLayout: r,
			trigger: "imperative-api"
		});
	}, s = (e) => {
		if (e === a()) return;
		let { defaultLayoutDeferred: t, derivedPanelConstraints: r, group: i, groupSize: s, layout: c, separatorToPanels: l } = n(), u = BW({
			layout: o({
				nextSize: e,
				panels: i.panels,
				prevLayout: c,
				derivedPanelConstraints: r
			}),
			panelConstraints: r
		});
		zW(c, u) || bW(i, {
			defaultLayoutDeferred: t,
			derivedPanelConstraints: r,
			groupSize: s,
			layout: u,
			separatorToPanels: l
		});
	};
	return {
		collapse: () => {
			let { collapsible: e, collapsedSize: t } = r(), { mutableValues: n } = i(), o = a();
			e && o !== t && (n.expandToSize = o, s(t));
		},
		expand: () => {
			let { collapsible: e, collapsedSize: t, minSize: n } = r(), { mutableValues: o } = i(), c = a();
			if (e && c === t) {
				let e = o.expandToSize ?? n;
				e === 0 && (e = 1), s(e);
			}
		},
		getSize: () => {
			let { group: e } = n(), t = a(), { element: r } = i();
			return {
				asPercentage: t,
				inPixels: e.orientation === "horizontal" ? r.offsetWidth : r.offsetHeight
			};
		},
		isCollapsed: () => {
			let { collapsible: e, collapsedSize: t } = r(), n = a();
			return e && FW(t, n);
		},
		resize: (e) => {
			let { group: t } = n(), { element: r } = i(), a = eW({ group: t });
			s($U(QU({
				groupSize: a,
				panelElement: r,
				styleProp: e
			}) / a * 100));
		}
	};
}
function HW(e) {
	e.defaultPrevented || NW(e, vW()).forEach((t) => {
		if (t.separator && !t.separator.disableDoubleClick) {
			let n = t.panels.find((e) => e.panelConstraints.defaultSize !== void 0);
			if (n) {
				let r = n.panelConstraints.defaultSize, i = VW({
					groupId: t.group.id,
					panelId: n.id
				});
				i && r !== void 0 && (i.resize(r), e.preventDefault());
			}
		}
	});
}
function UW(e) {
	let t = vW();
	for (let [n] of t) if (n.separators.some((t) => t.element === e)) return n;
	throw Error("Could not find parent Group for separator element");
}
function WW({ groupId: e }) {
	let t = () => {
		let t = vW();
		for (let [n, r] of t) if (n.id === e) return {
			group: n,
			...r
		};
		throw Error(`Could not find Group with id "${e}"`);
	};
	return {
		getLayout() {
			let { defaultLayoutDeferred: e, layout: n } = t();
			return e ? {} : n;
		},
		setLayout(e) {
			let { defaultLayoutDeferred: n, derivedPanelConstraints: r, group: i, groupSize: a, layout: o, separatorToPanels: s } = t(), c = BW({
				layout: e,
				panelConstraints: r
			});
			return n ? o : (zW(o, c) || bW(i, {
				defaultLayoutDeferred: n,
				derivedPanelConstraints: r,
				groupSize: a,
				layout: c,
				separatorToPanels: s
			}), c);
		}
	};
}
function GW(e, t) {
	let n = UW(e), r = _W(n.id, !0), i = n.separators.find((t) => t.element === e);
	nW(i, "Matching separator not found");
	let a = r.separatorToPanels.get(i);
	nW(a, "Matching panels not found");
	let o = a.map((e) => n.panels.indexOf(e)), s = WW({ groupId: n.id }).getLayout(), c = BW({
		layout: RW({
			delta: t,
			initialLayout: s,
			panelConstraints: r.derivedPanelConstraints,
			pivotIndices: o,
			prevLayout: s,
			trigger: "keyboard"
		}),
		panelConstraints: r.derivedPanelConstraints
	});
	zW(s, c) || bW(n, {
		defaultLayoutDeferred: r.defaultLayoutDeferred,
		derivedPanelConstraints: r.derivedPanelConstraints,
		groupSize: r.groupSize,
		layout: c,
		separatorToPanels: r.separatorToPanels
	});
}
function KW(e) {
	if (e.defaultPrevented) return;
	let t = e.currentTarget, n = UW(t);
	if (!n.disabled) switch (e.key) {
		case "ArrowDown":
			e.preventDefault(), n.orientation === "vertical" && GW(t, 5);
			break;
		case "ArrowLeft":
			e.preventDefault(), n.orientation === "horizontal" && GW(t, -5);
			break;
		case "ArrowRight":
			e.preventDefault(), n.orientation === "horizontal" && GW(t, 5);
			break;
		case "ArrowUp":
			e.preventDefault(), n.orientation === "vertical" && GW(t, -5);
			break;
		case "End":
			e.preventDefault(), GW(t, 100);
			break;
		case "Enter": {
			e.preventDefault();
			let n = UW(t), { derivedPanelConstraints: r, layout: i, separatorToPanels: a } = _W(n.id, !0), o = n.separators.find((e) => e.element === t);
			nW(o, "Matching separator not found");
			let s = a.get(o);
			nW(s, "Matching panels not found");
			let c = s[0], l = r.find((e) => e.panelId === c.id);
			if (nW(l, "Panel metadata not found"), l.collapsible) {
				let e = i[c.id];
				GW(t, (l.collapsedSize === e ? n.mutableState.expandedPanelSizes[c.id] ?? l.minSize : l.collapsedSize) - e);
			}
			break;
		}
		case "F6": {
			e.preventDefault();
			let n = UW(t).separators.map((e) => e.element), r = Array.from(n).findIndex((t) => t === e.currentTarget);
			nW(r !== null, "Index not found"), n[e.shiftKey ? r > 0 ? r - 1 : n.length - 1 : r + 1 < n.length ? r + 1 : 0].focus({ preventScroll: !0 });
			break;
		}
		case "Home":
			e.preventDefault(), GW(t, -100);
			break;
	}
}
var qW = {
	cursorFlags: 0,
	state: "inactive"
}, JW = new fW();
function YW() {
	return qW;
}
function XW(e) {
	return JW.addListener("change", e);
}
function ZW(e) {
	let t = qW, n = { ...qW };
	n.cursorFlags = e, qW = n, JW.emit("change", {
		prev: t,
		next: n
	});
}
function QW(e) {
	let t = qW;
	qW = e, JW.emit("change", {
		prev: t,
		next: e
	});
}
function $W(e) {
	if (e.defaultPrevented || e.pointerType === "mouse" && e.button > 0) return;
	let t = vW(), n = NW(e, t), r = /* @__PURE__ */ new Map(), i = !1;
	n.forEach((e) => {
		e.separator && (i || (i = !0, e.separator.element.focus({
			focusVisible: !1,
			preventScroll: !0
		})));
		let n = t.get(e.group);
		n && r.set(e.group, n.layout);
	}), QW({
		cursorFlags: 0,
		hitRegions: n,
		initialLayoutMap: r,
		pointerDownAtPoint: {
			x: e.clientX,
			y: e.clientY
		},
		state: "active"
	}), n.length && e.preventDefault();
}
var eG = (e) => e, tG = () => {}, nG = 1, rG = 2, iG = 4, aG = 8, oG = 3, sG = 12, cG;
function lG() {
	return cG === void 0 && (cG = !1, typeof window < "u" && (window.navigator.userAgent.includes("Chrome") || window.navigator.userAgent.includes("Firefox")) && (cG = !0)), cG;
}
function uG({ cursorFlags: e, groups: t, state: n }) {
	let r = 0, i = 0;
	switch (n) {
		case "active":
		case "hover": t.forEach((e) => {
			if (!e.mutableState.disableCursor) switch (e.orientation) {
				case "horizontal":
					r++;
					break;
				case "vertical":
					i++;
					break;
			}
		});
	}
	if (!(r === 0 && i === 0)) {
		switch (n) {
			case "active":
				if (e && lG()) {
					let t = (e & nG) !== 0, n = (e & rG) !== 0, r = (e & iG) !== 0, i = (e & aG) !== 0;
					if (t) return r ? "se-resize" : i ? "ne-resize" : "e-resize";
					if (n) return r ? "sw-resize" : i ? "nw-resize" : "w-resize";
					if (r) return "s-resize";
					if (i) return "n-resize";
				}
				break;
		}
		return lG() ? r > 0 && i > 0 ? "move" : r > 0 ? "ew-resize" : "ns-resize" : r > 0 && i > 0 ? "grab" : r > 0 ? "col-resize" : "row-resize";
	}
}
var dG = /* @__PURE__ */ new WeakMap();
function fG(e) {
	if (e.defaultView === null || e.defaultView === void 0) return;
	let { prevStyle: t, styleSheet: n } = dG.get(e) ?? {};
	n === void 0 && (n = new e.defaultView.CSSStyleSheet(), e.adoptedStyleSheets && (Object.isExtensible(e.adoptedStyleSheets) ? e.adoptedStyleSheets.push(n) : e.adoptedStyleSheets = [...e.adoptedStyleSheets, n]));
	let r = YW();
	switch (r.state) {
		case "active":
		case "hover": {
			let e = uG({
				cursorFlags: r.cursorFlags,
				groups: r.hitRegions.map((e) => e.group),
				state: r.state
			}), i = `*, *:hover {cursor: ${e} !important; }`;
			if (t === i) return;
			t = i, e ? n.cssRules.length === 0 ? n.insertRule(i) : n.replaceSync(i) : n.cssRules.length === 1 && n.deleteRule(0);
			break;
		}
		case "inactive":
			t = void 0, n.cssRules.length === 1 && n.deleteRule(0);
			break;
	}
	dG.set(e, {
		prevStyle: t,
		styleSheet: n
	});
}
function pG({ document: e, event: t, hitRegions: n, initialLayoutMap: r, mountedGroups: i, pointerDownAtPoint: a, prevCursorFlags: o }) {
	let s = 0;
	n.forEach((e) => {
		let { group: n, groupSize: o } = e, { orientation: c, panels: l } = n, { disableCursor: u } = n.mutableState, d = 0;
		d = a ? c === "horizontal" ? (t.clientX - a.x) / o * 100 : (t.clientY - a.y) / o * 100 : c === "horizontal" ? t.clientX < 0 ? -100 : 100 : t.clientY < 0 ? -100 : 100;
		let f = r.get(n), p = i.get(n);
		if (!f || !p) return;
		let { defaultLayoutDeferred: m, derivedPanelConstraints: h, groupSize: g, layout: _, separatorToPanels: v } = p;
		if (h && _ && v) {
			let t = RW({
				delta: d,
				initialLayout: f,
				panelConstraints: h,
				pivotIndices: e.panels.map((e) => l.indexOf(e)),
				prevLayout: _,
				trigger: "mouse-or-touch"
			});
			if (zW(t, _)) {
				if (d !== 0 && !u) switch (c) {
					case "horizontal":
						s |= d < 0 ? nG : rG;
						break;
					case "vertical":
						s |= d < 0 ? iG : aG;
						break;
				}
			} else bW(e.group, {
				defaultLayoutDeferred: m,
				derivedPanelConstraints: h,
				groupSize: g,
				layout: t,
				separatorToPanels: v
			});
		}
	});
	let c = 0;
	t.movementX === 0 ? c |= o & oG : c |= s & oG, t.movementY === 0 ? c |= o & sG : c |= s & sG, ZW(c), fG(e);
}
function mG(e) {
	let t = vW(), n = YW();
	switch (n.state) {
		case "active": pG({
			document: e.currentTarget,
			event: e,
			hitRegions: n.hitRegions,
			initialLayoutMap: n.initialLayoutMap,
			mountedGroups: t,
			prevCursorFlags: n.cursorFlags
		});
	}
}
function hG(e) {
	if (e.defaultPrevented) return;
	let t = YW(), n = vW();
	switch (t.state) {
		case "active":
			if (e.buttons === 0) {
				QW({
					cursorFlags: 0,
					state: "inactive"
				}), t.hitRegions.forEach((e) => {
					let t = _W(e.group.id, !0);
					bW(e.group, t);
				});
				return;
			}
			for (let n of t.hitRegions) if (n.separator) {
				let { element: t } = n.separator;
				t.hasPointerCapture?.(e.pointerId) || t.setPointerCapture?.(e.pointerId);
			}
			pG({
				document: e.currentTarget,
				event: e,
				hitRegions: t.hitRegions,
				initialLayoutMap: t.initialLayoutMap,
				mountedGroups: n,
				pointerDownAtPoint: t.pointerDownAtPoint,
				prevCursorFlags: t.cursorFlags
			});
			break;
		default: {
			let r = NW(e, n);
			r.length === 0 ? t.state !== "inactive" && QW({
				cursorFlags: 0,
				state: "inactive"
			}) : QW({
				cursorFlags: 0,
				hitRegions: r,
				state: "hover"
			}), fG(e.currentTarget);
			break;
		}
	}
}
function gG(e) {
	if (e.relatedTarget instanceof HTMLIFrameElement) switch (YW().state) {
		case "hover": QW({
			cursorFlags: 0,
			state: "inactive"
		});
	}
}
function _G(e) {
	if (e.defaultPrevented || e.pointerType === "mouse" && e.button > 0) return;
	let t = YW();
	switch (t.state) {
		case "active": QW({
			cursorFlags: 0,
			state: "inactive"
		}), t.hitRegions.length > 0 && (fG(e.currentTarget), t.hitRegions.forEach((e) => {
			let t = _W(e.group.id, !0);
			bW(e.group, t);
		}), e.preventDefault());
	}
}
function vG(e) {
	let t = 0, n = 0, r = {};
	for (let i of e) if (i.defaultSize !== void 0) {
		t++;
		let e = $U(i.defaultSize);
		n += e, r[i.panelId] = e;
	} else r[i.panelId] = void 0;
	let i = e.length - t;
	if (i !== 0) {
		let t = $U((100 - n) / i);
		for (let n of e) n.defaultSize === void 0 && (r[n.panelId] = t);
	}
	return r;
}
function yG(e, t, n) {
	if (!n[0]) return;
	let r = e.panels.find((e) => e.element === t);
	if (!r || !r.onResize) return;
	let i = eW({ group: e }), a = e.orientation === "horizontal" ? r.element.offsetWidth : r.element.offsetHeight, o = r.mutableValues.prevSize, s = {
		asPercentage: $U(a / i * 100),
		inPixels: a
	};
	r.mutableValues.prevSize = s, r.onResize(s, r.id, o);
}
function bG(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function xG({ group: e, nextGroupSize: t, prevGroupSize: n, prevLayout: r }) {
	if (n <= 0 || t <= 0 || n === t) return r;
	let i = 0, a = 0, o = !1, s = /* @__PURE__ */ new Map(), c = [];
	for (let l of e.panels) {
		let e = r[l.id] ?? 0;
		switch (l.panelConstraints.groupResizeBehavior) {
			case "preserve-pixel-size": {
				o = !0;
				let r = $U(e / 100 * n / t * 100);
				s.set(l.id, r), i += r;
				break;
			}
			default:
				c.push(l.id), a += e;
				break;
		}
	}
	if (!o || c.length === 0) return r;
	let l = 100 - i, u = { ...r };
	if (s.forEach((e, t) => {
		u[t] = e;
	}), a > 0) for (let e of c) u[e] = $U((r[e] ?? 0) / a * l);
	else {
		let e = $U(l / c.length);
		for (let t of c) u[t] = e;
	}
	return u;
}
function SG(e, t) {
	let n = e.map((e) => e.id), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let e of n) if (!r.includes(e)) return !1;
	return !0;
}
var CG = /* @__PURE__ */ new Map();
function wG(e) {
	let t = !0;
	nW(e.element.ownerDocument.defaultView, "Cannot register an unmounted Group");
	let n = e.element.ownerDocument.defaultView.ResizeObserver, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = new n((n) => {
		for (let r of n) {
			let { borderBoxSize: n, target: i } = r;
			if (i === e.element) {
				if (t) {
					let t = eW({ group: e });
					if (t === 0) return;
					let n = _W(e.id);
					if (!n) return;
					let r = tW(e), i = n.defaultLayoutDeferred ? vG(r) : n.layout, a = BW({
						layout: xG({
							group: e,
							nextGroupSize: t,
							prevGroupSize: n.groupSize,
							prevLayout: i
						}),
						panelConstraints: r
					});
					if (!n.defaultLayoutDeferred && zW(n.layout, a) && bG(n.derivedPanelConstraints, r) && n.groupSize === t) return;
					bW(e, {
						defaultLayoutDeferred: !1,
						derivedPanelConstraints: r,
						groupSize: t,
						layout: a,
						separatorToPanels: n.separatorToPanels
					});
				}
			} else yG(e, i, n);
		}
	});
	a.observe(e.element), e.panels.forEach((e) => {
		nW(!r.has(e.id), `Panel ids must be unique; id "${e.id}" was used more than once`), r.add(e.id), e.onResize && a.observe(e.element);
	});
	let o = eW({ group: e }), s = tW(e), c = e.panels.map(({ id: e }) => e).join(","), l = e.mutableState.defaultLayout;
	l && (SG(e.panels, l) || (l = void 0));
	let u = BW({
		layout: e.mutableState.layouts[c] ?? l ?? vG(s),
		panelConstraints: s
	}), d = e.element.ownerDocument;
	CG.set(d, (CG.get(d) ?? 0) + 1);
	let f = /* @__PURE__ */ new Map();
	return dW(e).forEach((e) => {
		e.separator && f.set(e.separator, e.panels);
	}), bW(e, {
		defaultLayoutDeferred: o === 0,
		derivedPanelConstraints: s,
		groupSize: o,
		layout: u,
		separatorToPanels: f
	}), e.separators.forEach((e) => {
		nW(!i.has(e.id), `Separator ids must be unique; id "${e.id}" was used more than once`), i.add(e.id), e.element.addEventListener("keydown", KW);
	}), CG.get(d) === 1 && (d.addEventListener("dblclick", HW, !0), d.addEventListener("pointerdown", $W, !0), d.addEventListener("pointerleave", mG), d.addEventListener("pointermove", hG), d.addEventListener("pointerout", gG), d.addEventListener("pointerup", _G, !0)), function() {
		t = !1, CG.set(d, Math.max(0, (CG.get(d) ?? 0) - 1)), hW(e), e.separators.forEach((e) => {
			e.element.removeEventListener("keydown", KW);
		}), CG.get(d) || (d.removeEventListener("dblclick", HW, !0), d.removeEventListener("pointerdown", $W, !0), d.removeEventListener("pointerleave", mG), d.removeEventListener("pointermove", hG), d.removeEventListener("pointerout", gG), d.removeEventListener("pointerup", _G, !0)), a.disconnect();
	};
}
function TG() {
	let [e, t] = y({});
	return [e, u(() => t({}), [])];
}
function EG(e) {
	let t = p();
	return `${e ?? t}`;
}
var DG = typeof window < "u" ? h : f;
function OG(e) {
	let t = v(e);
	return DG(() => {
		t.current = e;
	}, [e]), u((...e) => t.current?.(...e), [t]);
}
function kG(...e) {
	return OG((t) => {
		e.forEach((e) => {
			if (e) switch (typeof e) {
				case "function":
					e(t);
					break;
				case "object":
					e.current = t;
					break;
			}
		});
	});
}
function AG(e) {
	let t = v({ ...e });
	return DG(() => {
		for (let n in e) t.current[n] = e[n];
	}, [e]), t.current;
}
var jG = a(null);
function MG(e, t) {
	let n = v({
		getLayout: () => ({}),
		setLayout: eG
	});
	m(t, () => n.current, []), DG(() => {
		Object.assign(n.current, WW({ groupId: e }));
	});
}
function NG({ children: e, className: t, defaultLayout: n, disableCursor: r, disabled: i, elementRef: a, groupRef: o, id: s, onLayoutChange: c, onLayoutChanged: l, orientation: u = "horizontal", resizeTargetMinimumSize: d = {
	coarse: 20,
	fine: 10
}, style: p, ...m }) {
	let h = v({
		onLayoutChange: {},
		onLayoutChanged: {}
	}), _ = OG((e) => {
		zW(h.current.onLayoutChange, e) || (h.current.onLayoutChange = e, c?.(e));
	}), y = OG((e) => {
		zW(h.current.onLayoutChanged, e) || (h.current.onLayoutChanged = e, l?.(e));
	}), b = EG(s), x = v(null), [S, w] = TG(), T = v({
		lastExpandedPanelSizes: {},
		layouts: {},
		panels: [],
		resizeTargetMinimumSize: d,
		separators: []
	}), E = kG(x, a);
	MG(b, o);
	let D = OG((e, t) => {
		let r = YW(), i = gW(e), a = _W(e);
		if (a) {
			let e = !1;
			switch (r.state) {
				case "active":
					e = r.hitRegions.some((e) => e.group === i);
					break;
			}
			return {
				flexGrow: a.layout[t] ?? 1,
				pointerEvents: e ? "none" : void 0
			};
		}
		if (n?.[t]) return { flexGrow: n?.[t] };
	}), O = AG({
		defaultLayout: n,
		disableCursor: r
	}), k = g(() => ({
		get disableCursor() {
			return !!O.disableCursor;
		},
		getPanelStyles: D,
		id: b,
		orientation: u,
		registerPanel: (e) => {
			let t = T.current;
			return t.panels = rW(u, [...t.panels, e]), w(), () => {
				t.panels = t.panels.filter((t) => t !== e), w();
			};
		},
		registerSeparator: (e) => {
			let t = T.current;
			return t.separators = rW(u, [...t.separators, e]), w(), () => {
				t.separators = t.separators.filter((t) => t !== e), w();
			};
		},
		updatePanelProps: (e, { disabled: t }) => {
			let n = T.current.panels.find((t) => t.id === e);
			n && (n.panelConstraints.disabled = t);
			let r = gW(b), i = _W(b);
			r && i && bW(r, {
				...i,
				derivedPanelConstraints: tW(r)
			});
		},
		updateSeparatorProps: (e, { disabled: t, disableDoubleClick: n }) => {
			let r = T.current.separators.find((t) => t.id === e);
			r && (r.disabled = t, r.disableDoubleClick = n);
		}
	}), [
		D,
		b,
		w,
		u,
		O
	]), A = v(null);
	return DG(() => {
		let e = x.current;
		if (e === null) return;
		let t = T.current, n;
		if (O.defaultLayout !== void 0 && Object.keys(O.defaultLayout).length === t.panels.length) {
			n = {};
			for (let e of t.panels) {
				let t = O.defaultLayout[e.id];
				t !== void 0 && (n[e.id] = t);
			}
		}
		let r = {
			disabled: !!i,
			element: e,
			id: b,
			mutableState: {
				defaultLayout: n,
				disableCursor: !!O.disableCursor,
				expandedPanelSizes: T.current.lastExpandedPanelSizes,
				layouts: T.current.layouts
			},
			orientation: u,
			panels: t.panels,
			resizeTargetMinimumSize: t.resizeTargetMinimumSize,
			separators: t.separators
		};
		A.current = r;
		let a = wG(r), { defaultLayoutDeferred: o, derivedPanelConstraints: s, layout: c } = _W(r.id, !0);
		!o && s.length > 0 && (_(c), y(c));
		let l = yW(b, (e) => {
			let { defaultLayoutDeferred: t, derivedPanelConstraints: n, layout: i } = e.next;
			if (t || n.length === 0) return;
			let a = r.panels.map(({ id: e }) => e).join(",");
			r.mutableState.layouts[a] = i, n.forEach((t) => {
				if (t.collapsible) {
					let { layout: n } = e.prev ?? {};
					if (n) {
						let e = FW(t.collapsedSize, i[t.panelId]), a = FW(t.collapsedSize, n[t.panelId]);
						e && !a && (r.mutableState.expandedPanelSizes[t.panelId] = n[t.panelId]);
					}
				}
			});
			let o = YW().state !== "active";
			_(i), o && y(i);
		});
		return () => {
			A.current = null, a(), l();
		};
	}, [
		i,
		b,
		y,
		_,
		u,
		S,
		O
	]), f(() => {
		let e = A.current;
		e && (e.mutableState.defaultLayout = n, e.mutableState.disableCursor = !!r);
	}), /* @__PURE__ */ C(jG.Provider, {
		value: k,
		children: /* @__PURE__ */ C("div", {
			...m,
			className: t,
			"data-group": !0,
			"data-testid": b,
			id: b,
			ref: E,
			style: {
				height: "100%",
				width: "100%",
				overflow: "hidden",
				...p,
				display: "flex",
				flexDirection: u === "horizontal" ? "row" : "column",
				flexWrap: "nowrap",
				touchAction: u === "horizontal" ? "pan-y" : "pan-x"
			},
			children: e
		})
	});
}
NG.displayName = "Group";
function PG() {
	let e = d(jG);
	return nW(e, "Group Context not found; did you render a Panel or Separator outside of a Group?"), e;
}
function FG(e, t) {
	let { id: n } = PG(), r = v({
		collapse: tG,
		expand: tG,
		getSize: () => ({
			asPercentage: 0,
			inPixels: 0
		}),
		isCollapsed: () => !1,
		resize: tG
	});
	m(t, () => r.current, []), DG(() => {
		Object.assign(r.current, VW({
			groupId: n,
			panelId: e
		}));
	});
}
function IG({ children: e, className: t, collapsedSize: n = "0%", collapsible: r = !1, defaultSize: i, disabled: a, elementRef: o, groupResizeBehavior: s = "preserve-relative-size", id: c, maxSize: l = "100%", minSize: u = "0%", onResize: d, panelRef: p, style: m, ...h }) {
	let g = !!c, _ = EG(c), y = AG({ disabled: a }), x = v(null), S = kG(x, o), { getPanelStyles: w, id: T, orientation: E, registerPanel: D, updatePanelProps: O } = PG(), k = d !== null, A = OG((e, t, n) => {
		d?.(e, c, n);
	});
	DG(() => {
		let e = x.current;
		if (e !== null) return D({
			element: e,
			id: _,
			idIsStable: g,
			mutableValues: {
				expandToSize: void 0,
				prevSize: void 0
			},
			onResize: k ? A : void 0,
			panelConstraints: {
				groupResizeBehavior: s,
				collapsedSize: n,
				collapsible: r,
				defaultSize: i,
				disabled: y.disabled,
				maxSize: l,
				minSize: u
			}
		});
	}, [
		s,
		n,
		r,
		i,
		k,
		_,
		g,
		l,
		u,
		A,
		D,
		y
	]), f(() => {
		O(_, { disabled: a });
	}, [
		a,
		_,
		O
	]), FG(_, p);
	let j = () => {
		let e = w(T, _);
		if (e) return JSON.stringify(e);
	}, M = b((e) => yW(T, e), j, j), N;
	return N = M ? JSON.parse(M) : i === void 0 ? { flexGrow: 1 } : {
		flexGrow: void 0,
		flexShrink: void 0,
		flexBasis: i
	}, /* @__PURE__ */ C("div", {
		...h,
		"data-disabled": a || void 0,
		"data-panel": !0,
		"data-testid": _,
		id: _,
		ref: S,
		style: {
			...LG,
			display: "flex",
			flexBasis: 0,
			flexShrink: 1,
			overflow: "visible",
			...N
		},
		children: /* @__PURE__ */ C("div", {
			className: t,
			style: {
				maxHeight: "100%",
				maxWidth: "100%",
				flexGrow: 1,
				overflow: "auto",
				...m,
				touchAction: E === "horizontal" ? "pan-y" : "pan-x"
			},
			children: e
		})
	});
}
IG.displayName = "Panel";
var LG = {
	minHeight: 0,
	maxHeight: "100%",
	height: "auto",
	minWidth: 0,
	maxWidth: "100%",
	width: "auto",
	border: "none",
	borderWidth: 0,
	padding: 0,
	margin: 0
};
function RG({ layout: e, panelConstraints: t, panelId: n, panelIndex: r }) {
	let i, a, o = e[n], s = t.find((e) => e.panelId === n);
	if (s) {
		let c = s.maxSize, l = s.collapsible ? s.collapsedSize : s.minSize, u = [r, r + 1];
		a = BW({
			layout: RW({
				delta: l - o,
				initialLayout: e,
				panelConstraints: t,
				pivotIndices: u,
				prevLayout: e
			}),
			panelConstraints: t
		})[n], i = BW({
			layout: RW({
				delta: c - o,
				initialLayout: e,
				panelConstraints: t,
				pivotIndices: u,
				prevLayout: e
			}),
			panelConstraints: t
		})[n];
	}
	return {
		valueControls: n,
		valueMax: i,
		valueMin: a,
		valueNow: o
	};
}
function zG({ children: e, className: t, disabled: n, disableDoubleClick: r, elementRef: i, id: a, style: o, ...s }) {
	let c = EG(a), l = AG({
		disabled: n,
		disableDoubleClick: r
	}), [u, d] = y({}), [p, m] = y("inactive"), [h, g] = y(!1), _ = v(null), b = kG(_, i), { disableCursor: x, id: S, orientation: w, registerSeparator: T, updateSeparatorProps: E } = PG(), D = w === "horizontal" ? "vertical" : "horizontal";
	DG(() => {
		let e = _.current;
		if (e !== null) {
			let t = {
				disabled: l.disabled,
				disableDoubleClick: l.disableDoubleClick,
				element: e,
				id: c
			}, n = T(t), r = XW((e) => {
				m(e.next.state !== "inactive" && e.next.hitRegions.some((e) => e.separator === t) ? e.next.state : "inactive");
			}), i = yW(S, (e) => {
				let { derivedPanelConstraints: n, layout: r, separatorToPanels: i } = e.next, a = i.get(t);
				if (a) {
					let e = a[0], t = a.indexOf(e);
					d(RG({
						layout: r,
						panelConstraints: n,
						panelId: e.id,
						panelIndex: t
					}));
				}
			});
			return () => {
				r(), i(), n();
			};
		}
	}, [
		S,
		c,
		T,
		l
	]), f(() => {
		E(c, {
			disabled: n,
			disableDoubleClick: r
		});
	}, [
		n,
		r,
		c,
		E
	]);
	let O;
	n && !x && (O = "not-allowed");
	let k;
	if (n) k = "disabled";
	else switch (p) {
		case "active":
			k = "active";
			break;
		default: k = h ? "focus" : p;
	}
	return /* @__PURE__ */ C("div", {
		...s,
		"aria-controls": u.valueControls,
		"aria-disabled": n || void 0,
		"aria-orientation": D,
		"aria-valuemax": u.valueMax,
		"aria-valuemin": u.valueMin,
		"aria-valuenow": u.valueNow,
		children: e,
		className: t,
		"data-separator": k,
		"data-testid": c,
		id: c,
		onBlur: () => g(!1),
		onFocus: () => g(!0),
		ref: b,
		role: "separator",
		style: {
			flexBasis: "auto",
			cursor: O,
			...o,
			flexGrow: 0,
			flexShrink: 0,
			touchAction: "none"
		},
		tabIndex: n ? void 0 : 0
	});
}
zG.displayName = "Separator";
//#endregion
//#region src/components/WindowSplitter/WindowSplitter.tsx
function BG({ className: e = "ws" }) {
	return /* @__PURE__ */ C("div", {
		className: e,
		children: /* @__PURE__ */ w(NG, {
			orientation: "horizontal",
			className: "ws__group",
			id: "outer",
			children: [
				/* @__PURE__ */ w(IG, {
					defaultSize: "30%",
					minSize: "15%",
					className: "ws__pane",
					children: [/* @__PURE__ */ C("header", {
						className: "ws__head",
						children: /* @__PURE__ */ C("span", {
							className: "mono",
							children: "left · outline"
						})
					}), /* @__PURE__ */ w("ul", {
						className: "ws__list",
						children: [
							/* @__PURE__ */ C("li", { children: "Front matter" }),
							/* @__PURE__ */ C("li", { children: "Vol. 01 — Form Controls" }),
							/* @__PURE__ */ C("li", { children: "Vol. 02 — Composite" }),
							/* @__PURE__ */ C("li", { children: "Vol. 03 — Layout" }),
							/* @__PURE__ */ C("li", { children: "Colophon" })
						]
					})]
				}),
				/* @__PURE__ */ C(zG, {
					className: "ws__handle ws__handle--h",
					children: /* @__PURE__ */ C("span", {
						className: "ws__grip",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ C(IG, {
					className: "ws__pane ws__pane--main",
					children: /* @__PURE__ */ w(NG, {
						orientation: "vertical",
						id: "inner",
						children: [
							/* @__PURE__ */ w(IG, {
								defaultSize: "65%",
								className: "ws__pane",
								children: [/* @__PURE__ */ C("header", {
									className: "ws__head",
									children: /* @__PURE__ */ C("span", {
										className: "mono",
										children: "top · editor"
									})
								}), /* @__PURE__ */ C("pre", {
									className: "ws__code",
									children: "<Tree>\n  <Branch label=\"Vol. 01\">\n    <Leaf>Accordion</Leaf>\n    <Leaf>Checkbox</Leaf>\n  </Branch>\n</Tree>"
								})]
							}),
							/* @__PURE__ */ C(zG, {
								className: "ws__handle ws__handle--v",
								children: /* @__PURE__ */ C("span", {
									className: "ws__grip ws__grip--v",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ w(IG, {
								defaultSize: "35%",
								className: "ws__pane",
								children: [/* @__PURE__ */ C("header", {
									className: "ws__head",
									children: /* @__PURE__ */ C("span", {
										className: "mono",
										children: "bottom · console"
									})
								}), /* @__PURE__ */ w("p", {
									className: "ws__console",
									children: [
										"Drag the handles, or focus them with ",
										/* @__PURE__ */ C("kbd", { children: "Tab" }),
										" and press the arrow keys to resize the panes precisely."
									]
								})]
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
export { Ct as Accordion, ny as ActionButton, oy as Alert, OS as AlertDialog, kS as Breadcrumb, ay as ButtonGroup, iy as ButtonRow, FC as Carousel, ew as Checkbox, tw as Combobox, rw as Dialog, iw as Disclosure, sw as Feed, AT as Grid, MT as Landmarks, NT as Link, PT as Listbox, qA as MenuButton, Qj as Menubar, eM as Meter, OM as RadioGroup, gN as Slider, _N as SliderMulti, vN as Spinbutton, MN as Switch, NN as Table, fn as Tabs, ry as ToggleActionButton, kP as Toolbar, bF as Tooltip, WU as TreeView, KU as Treegrid, BG as WindowSplitter, nw as getComboboxSelectionLabel, FT as getListboxSelectionLabels, ow as makeFeedPost };
