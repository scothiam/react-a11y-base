import * as e from "@radix-ui/react-accordion";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
import * as i from "@radix-ui/react-tabs";
import { Breadcrumb as a, Breadcrumbs as o, Button as s, Cell as c, Column as l, ComboBox as u, Group as d, Input as f, Label as p, Link as m, ListBox as h, ListBoxItem as g, Meter as _, NumberField as v, Popover as y, RouterProvider as b, Row as x, Table as S, TableBody as C, TableHeader as w, ToggleButton as T } from "react-aria-components";
import { Fragment as ee, useCallback as E, useEffect as D, useMemo as O, useRef as k, useState as A } from "react";
import * as j from "@radix-ui/react-alert-dialog";
import te from "embla-carousel-react";
import * as M from "@radix-ui/react-checkbox";
import * as N from "@radix-ui/react-dialog";
import * as P from "@radix-ui/react-collapsible";
import { createColumnHelper as ne, flexRender as F, getCoreRowModel as I, useReactTable as re } from "@tanstack/react-table";
import * as L from "@radix-ui/react-dropdown-menu";
import * as R from "@radix-ui/react-menubar";
import * as z from "@radix-ui/react-radio-group";
import * as B from "@radix-ui/react-slider";
import * as V from "@radix-ui/react-switch";
import * as H from "@radix-ui/react-toolbar";
import * as U from "@radix-ui/react-tooltip";
import { Tree as W } from "react-arborist";
import { Group as G, Panel as K, Separator as q } from "react-resizable-panels";
//#region src/components/Accordion/Accordion.tsx
function J({ items: t, defaultValue: i, className: a = "acc" }) {
	return /* @__PURE__ */ n(e.Root, {
		type: "multiple",
		className: a,
		defaultValue: i,
		children: t.map((t) => /* @__PURE__ */ r(e.Item, {
			value: t.id,
			className: "acc__item",
			children: [/* @__PURE__ */ n(e.Header, {
				asChild: !0,
				children: /* @__PURE__ */ n("h3", {
					className: "acc__h",
					children: /* @__PURE__ */ r(e.Trigger, {
						className: "acc__trigger",
						children: [
							/* @__PURE__ */ n("span", {
								className: "acc__indicator",
								"aria-hidden": "true",
								children: "▸"
							}),
							/* @__PURE__ */ n("span", {
								className: "acc__label",
								children: t.head
							}),
							/* @__PURE__ */ n("span", {
								className: "mono acc__hint",
								"aria-hidden": "true"
							})
						]
					})
				})
			}), /* @__PURE__ */ n(e.Content, {
				className: "acc__content",
				children: /* @__PURE__ */ n("p", { children: t.body })
			})]
		}, t.id))
	});
}
//#endregion
//#region src/components/Tabs/Tabs.tsx
function Y({ tabs: e, defaultValue: t, listLabel: a, activationMode: o = "automatic", className: s = "tabs" }) {
	let c = t ?? e[0]?.value;
	return /* @__PURE__ */ r(i.Root, {
		defaultValue: c,
		className: s,
		activationMode: o,
		children: [/* @__PURE__ */ n(i.List, {
			className: "tabs__list",
			"aria-label": a,
			children: e.map((e) => /* @__PURE__ */ n(i.Trigger, {
				value: e.value,
				className: "tabs__tab",
				children: e.label
			}, e.value))
		}), e.map((e) => /* @__PURE__ */ n(i.Content, {
			value: e.value,
			className: "tabs__panel",
			children: e.body
		}, e.value))]
	});
}
//#endregion
//#region src/components/Button/Button.tsx
function X(e) {
	let t = "s-btn";
	switch (e) {
		case "primary": return `${t} s-btn--primary`;
		case "ghost": return `${t} s-btn--ghost`;
		case "danger": return `${t} s-btn--danger`;
		default: return t;
	}
}
function ie({ variant: e = "secondary", className: t, ...r }) {
	return /* @__PURE__ */ n(s, {
		className: [X(e), t].filter(Boolean).join(" "),
		...r
	});
}
function ae({ className: e, ...t }) {
	return /* @__PURE__ */ n(T, {
		className: [
			"s-btn",
			"btn__toggle",
			e
		].filter(Boolean).join(" "),
		...t
	});
}
function oe({ children: e }) {
	return /* @__PURE__ */ n("div", {
		className: "btn__row",
		children: e
	});
}
function se({ children: e }) {
	return /* @__PURE__ */ n("div", {
		className: "btn",
		children: e
	});
}
//#endregion
//#region src/components/Alert/Alert.tsx
function ce({ className: e = "alert" }) {
	let [t, i] = A([]);
	function a(e, t) {
		i((n) => [...n, {
			id: Date.now() + Math.random(),
			tone: e,
			text: t
		}]);
	}
	function o() {
		i([]);
	}
	let s = t.filter((e) => e.tone === "info"), c = t.filter((e) => e.tone !== "info");
	return /* @__PURE__ */ r("div", {
		className: e,
		children: [
			/* @__PURE__ */ r("div", {
				className: "alert__controls",
				children: [
					/* @__PURE__ */ n("button", {
						className: "s-btn",
						onClick: () => a("info", "Draft saved."),
						children: "Push info"
					}),
					/* @__PURE__ */ n("button", {
						className: "s-btn",
						onClick: () => a("warn", "Unsaved changes since the last sync."),
						children: "Push warning"
					}),
					/* @__PURE__ */ n("button", {
						className: "s-btn s-btn--danger",
						onClick: () => a("error", "Network unreachable — alert announced assertively."),
						children: "Push error"
					}),
					/* @__PURE__ */ n("button", {
						className: "s-btn s-btn--ghost",
						onClick: o,
						children: "Clear"
					})
				]
			}),
			/* @__PURE__ */ r("div", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "false",
				"aria-relevant": "additions",
				className: "alert__log",
				children: [/* @__PURE__ */ n("p", {
					className: "alert__loglabel mono",
					children: "status · polite"
				}), s.length === 0 ? /* @__PURE__ */ n("p", {
					className: "alert__empty mono",
					children: "No status messages."
				}) : /* @__PURE__ */ n("ul", { children: s.map((e) => /* @__PURE__ */ r("li", {
					className: `alert__msg alert__msg--${e.tone}`,
					children: [/* @__PURE__ */ n("span", {
						className: "mono",
						children: e.tone.toUpperCase()
					}), /* @__PURE__ */ n("span", { children: e.text })]
				}, e.id)) })]
			}),
			/* @__PURE__ */ r("div", {
				role: "alert",
				"aria-live": "assertive",
				"aria-atomic": "true",
				"aria-relevant": "additions",
				className: "alert__log",
				children: [/* @__PURE__ */ n("p", {
					className: "alert__loglabel mono",
					children: "alert · assertive"
				}), c.length === 0 ? /* @__PURE__ */ n("p", {
					className: "alert__empty mono",
					children: "No alerts. Trigger one above."
				}) : /* @__PURE__ */ n("ul", { children: c.map((e) => /* @__PURE__ */ r("li", {
					className: `alert__msg alert__msg--${e.tone}`,
					children: [/* @__PURE__ */ n("span", {
						className: "mono",
						children: e.tone.toUpperCase()
					}), /* @__PURE__ */ n("span", { children: e.text })]
				}, e.id)) })]
			})
		]
	});
}
//#endregion
//#region src/components/Alert/StatusAlert.tsx
function le({ title: e, message: t, tone: i = "info", className: a = "alert" }) {
	return /* @__PURE__ */ n("div", {
		className: a,
		role: i === "error" ? "alert" : "status",
		"aria-live": i === "error" ? "assertive" : "polite",
		"aria-atomic": "true",
		children: /* @__PURE__ */ n("div", {
			className: "alert__log",
			children: /* @__PURE__ */ r("div", {
				className: `alert__msg alert__msg--${i}`,
				children: [/* @__PURE__ */ n("span", {
					className: "mono",
					children: i.toUpperCase()
				}), /* @__PURE__ */ r("span", { children: [
					/* @__PURE__ */ n("strong", { children: e }),
					" — ",
					t
				] })]
			})
		})
	});
}
//#endregion
//#region src/components/AlertDialog/AlertDialog.tsx
function ue({ onCancel: e, onConfirm: t, className: i = "adlg" }) {
	return /* @__PURE__ */ n("div", {
		className: i,
		children: /* @__PURE__ */ r(j.Root, { children: [/* @__PURE__ */ n(j.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ n("button", {
				className: "s-btn s-btn--danger",
				children: "Delete project…"
			})
		}), /* @__PURE__ */ r(j.Portal, { children: [/* @__PURE__ */ n(j.Overlay, { className: "adlg__overlay" }), /* @__PURE__ */ r(j.Content, {
			className: "adlg__content",
			children: [
				/* @__PURE__ */ n("span", {
					className: "mono adlg__kicker",
					children: "Confirmation required"
				}),
				/* @__PURE__ */ n(j.Title, {
					className: "adlg__title",
					children: "Delete this project?"
				}),
				/* @__PURE__ */ r(j.Description, {
					className: "adlg__desc",
					children: [
						"Deleting ",
						/* @__PURE__ */ n("em", { children: "Specimen Library" }),
						" will permanently remove its drafts, notes, and rendered patterns. This action cannot be undone."
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "adlg__row",
					children: [/* @__PURE__ */ n(j.Cancel, {
						asChild: !0,
						children: /* @__PURE__ */ n("button", {
							className: "s-btn",
							onClick: e,
							children: "Keep project"
						})
					}), /* @__PURE__ */ n(j.Action, {
						asChild: !0,
						children: /* @__PURE__ */ n("button", {
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
function de({ items: e, className: t = "bc", navLabel: i = "Breadcrumb" }) {
	return /* @__PURE__ */ n("div", {
		className: "bc__nav",
		children: /* @__PURE__ */ n(o, {
			"aria-label": i,
			className: t,
			children: e.map((t, i) => /* @__PURE__ */ r(a, {
				id: t.id,
				className: "bc__item",
				children: [t.href ? /* @__PURE__ */ n(m, {
					href: t.href,
					className: "bc__link",
					children: t.label
				}) : /* @__PURE__ */ n("span", {
					"aria-current": "page",
					className: "bc__current",
					children: t.label
				}), i < e.length - 1 && /* @__PURE__ */ n("span", {
					"aria-hidden": "true",
					className: "bc__sep",
					children: "/"
				})]
			}, t.id))
		})
	});
}
//#endregion
//#region src/components/Carousel/Carousel.tsx
function fe({ slides: e, label: t = "Featured typefaces", autoRotateMs: i = 4500, className: a = "car" }) {
	let [o, s] = te({
		loop: !0,
		align: "center"
	}), [c, l] = A(0), [u, d] = A(!1), f = E(() => s?.scrollPrev(), [s]), p = E(() => s?.scrollNext(), [s]), m = E((e) => s?.scrollTo(e), [s]);
	return D(() => {
		if (!s) return;
		let e = () => l(s.selectedScrollSnap());
		return s.on("select", e), e(), () => {
			s.off("select", e);
		};
	}, [s]), D(() => {
		if (!s || u) return;
		let e = window.setInterval(() => s.scrollNext(), i);
		return () => window.clearInterval(e);
	}, [
		s,
		u,
		i
	]), /* @__PURE__ */ r("section", {
		className: a,
		"aria-roledescription": "carousel",
		"aria-label": t,
		"aria-live": u ? "polite" : "off",
		children: [
			/* @__PURE__ */ n("div", {
				className: "car__viewport",
				ref: o,
				children: /* @__PURE__ */ n("div", {
					className: "car__track",
					children: e.map((t, i) => /* @__PURE__ */ r("article", {
						id: `slide-${i}`,
						className: "car__slide",
						"aria-roledescription": "slide",
						"aria-label": `${i + 1} of ${e.length}: ${t.t}`,
						children: [
							/* @__PURE__ */ n("span", {
								className: "mono car__num",
								children: t.n
							}),
							/* @__PURE__ */ n("h4", {
								className: "car__title",
								children: t.t
							}),
							/* @__PURE__ */ r("p", {
								className: "car__quote",
								children: [
									"“",
									t.q,
									"”"
								]
							})
						]
					}, i))
				})
			}),
			/* @__PURE__ */ r("div", {
				className: "car__controls",
				children: [
					/* @__PURE__ */ n("button", {
						type: "button",
						className: "s-btn",
						onClick: f,
						"aria-label": "Previous slide",
						children: "‹ Prev"
					}),
					/* @__PURE__ */ n("button", {
						type: "button",
						className: "s-btn",
						onClick: () => d((e) => !e),
						"aria-pressed": u,
						children: u ? "Resume rotation" : "Pause rotation"
					}),
					/* @__PURE__ */ n("button", {
						type: "button",
						className: "s-btn",
						onClick: p,
						"aria-label": "Next slide",
						children: "Next ›"
					})
				]
			}),
			/* @__PURE__ */ n("ol", {
				className: "car__dots",
				role: "tablist",
				"aria-label": "Choose slide",
				children: e.map((e, t) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n("button", {
					type: "button",
					role: "tab",
					"aria-selected": t === c,
					"aria-controls": `slide-${t}`,
					className: "car__dot",
					"data-active": t === c,
					onClick: () => m(t),
					children: /* @__PURE__ */ r("span", {
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
//#region src/components/Checkbox/Checkbox.tsx
function pe({ items: e, legend: t = "Perceivable — checklist", defaultChecked: i, className: a = "cb" }) {
	let [o, s] = A(i ?? Object.fromEntries(e.map((e) => [e.id, !1]))), c = O(() => e.every((e) => o[e.id]) ? !0 : e.some((e) => o[e.id]) ? "indeterminate" : !1, [o, e]);
	function l(t) {
		let n = t === !0, r = {};
		e.forEach((e) => r[e.id] = n), s(r);
	}
	return /* @__PURE__ */ r("fieldset", {
		className: a,
		children: [
			/* @__PURE__ */ n("legend", {
				className: "mono",
				children: t
			}),
			/* @__PURE__ */ r("label", {
				className: "cb__row cb__row--parent",
				children: [/* @__PURE__ */ n(M.Root, {
					className: "cb__box cb__box--parent",
					checked: c,
					onCheckedChange: l,
					children: /* @__PURE__ */ n(M.Indicator, {
						className: "cb__ind",
						forceMount: !0,
						children: c === "indeterminate" ? "–" : c ? "✓" : ""
					})
				}), /* @__PURE__ */ r("span", { children: [
					/* @__PURE__ */ n("strong", { children: "All criteria" }),
					" ",
					/* @__PURE__ */ n("span", {
						className: "mono cb__state",
						children: c === "indeterminate" ? "mixed" : c ? "checked" : "unchecked"
					})
				] })]
			}),
			/* @__PURE__ */ n("ul", {
				className: "cb__list",
				children: e.map((e) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ r("label", {
					className: "cb__row",
					children: [/* @__PURE__ */ n(M.Root, {
						className: "cb__box",
						checked: o[e.id],
						onCheckedChange: (t) => s((n) => ({
							...n,
							[e.id]: t === !0
						})),
						children: /* @__PURE__ */ n(M.Indicator, {
							className: "cb__ind",
							children: "✓"
						})
					}), /* @__PURE__ */ n("span", { children: e.label })]
				}) }, e.id))
			})
		]
	});
}
//#endregion
//#region src/components/Combobox/Combobox.tsx
function me({ options: e, label: t = "Body face", placeholder: i = "Search a typeface…", defaultSelectedKey: a = null, selectedKey: o, onSelectionChange: c, inputValue: l, onInputChange: d, onFocus: m, allowsEmptyCollection: _ = !1, menuTrigger: v = "focus", ariaLabel: b, className: x = "cmb" }) {
	let [S, C] = A(a), w = o === void 0 ? S : o;
	function T(e) {
		let t = e ?? null;
		o === void 0 && C(t), c?.(t);
	}
	return /* @__PURE__ */ n("div", {
		className: x,
		children: /* @__PURE__ */ r(u, {
			className: "cmb__root",
			menuTrigger: v,
			selectedKey: w,
			onSelectionChange: T,
			inputValue: l,
			onInputChange: d,
			onFocus: m,
			allowsEmptyCollection: _,
			"aria-label": t === null ? b : void 0,
			items: e,
			children: [
				t !== null && /* @__PURE__ */ n(p, {
					className: "mono cmb__label",
					children: t
				}),
				/* @__PURE__ */ r("div", {
					className: "cmb__field",
					children: [/* @__PURE__ */ n(f, {
						className: "cmb__input",
						placeholder: i
					}), /* @__PURE__ */ n(s, {
						className: "cmb__btn",
						"aria-label": "Show suggestions",
						children: "▾"
					})]
				}),
				/* @__PURE__ */ n(y, {
					className: "cmb__pop",
					offset: 4,
					children: /* @__PURE__ */ n(h, {
						className: "cmb__list",
						children: (e) => /* @__PURE__ */ r(g, {
							id: e.id,
							textValue: e.name,
							className: "cmb__opt",
							children: [/* @__PURE__ */ n("span", {
								className: "cmb__optName",
								children: e.name
							}), /* @__PURE__ */ n("span", {
								className: "cmb__optNote",
								children: e.note
							})]
						})
					})
				})
			]
		})
	});
}
function he(e, t) {
	return e.find((e) => e.id === t)?.name ?? "(none)";
}
//#endregion
//#region src/components/Dialog/Dialog.tsx
function ge({ triggerLabel: e = "Rename specimen…", onSave: t, className: i = "dlg" }) {
	let [a, o] = A(""), [s, c] = A(!1);
	function l(e) {
		e.preventDefault(), t?.(a || "(empty)"), c(!1);
	}
	return /* @__PURE__ */ n("div", {
		className: i,
		children: /* @__PURE__ */ r(N.Root, {
			open: s,
			onOpenChange: c,
			children: [/* @__PURE__ */ n(N.Trigger, {
				asChild: !0,
				children: /* @__PURE__ */ n("button", {
					className: "s-btn s-btn--primary",
					children: e
				})
			}), /* @__PURE__ */ r(N.Portal, { children: [/* @__PURE__ */ n(N.Overlay, { className: "dlg__overlay" }), /* @__PURE__ */ r(N.Content, {
				className: "dlg__content",
				children: [
					/* @__PURE__ */ n("span", {
						className: "mono dlg__kicker",
						children: "Edit metadata"
					}),
					/* @__PURE__ */ n(N.Title, {
						className: "dlg__title",
						children: "Rename specimen"
					}),
					/* @__PURE__ */ n(N.Description, {
						className: "dlg__desc",
						children: "Give this specimen a short, distinctive name. It will appear in the sidebar and in the printed colophon."
					}),
					/* @__PURE__ */ r("form", {
						onSubmit: l,
						className: "dlg__form",
						children: [/* @__PURE__ */ r("label", {
							className: "s-field",
							children: [/* @__PURE__ */ n("span", { children: "Display name" }), /* @__PURE__ */ n("input", {
								autoFocus: !0,
								className: "s-input",
								value: a,
								onChange: (e) => o(e.target.value),
								placeholder: "e.g. Trifold Accordion"
							})]
						}), /* @__PURE__ */ r("div", {
							className: "dlg__row",
							children: [/* @__PURE__ */ n(N.Close, {
								asChild: !0,
								children: /* @__PURE__ */ n("button", {
									type: "button",
									className: "s-btn",
									children: "Cancel"
								})
							}), /* @__PURE__ */ n("button", {
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
function _e({ label: e, children: t, defaultOpen: i = !1, className: a = "dsc" }) {
	let [o, s] = A(i);
	return /* @__PURE__ */ r(P.Root, {
		open: o,
		onOpenChange: s,
		className: a,
		children: [/* @__PURE__ */ n(P.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ r("button", {
				className: "dsc__trigger",
				children: [/* @__PURE__ */ n("span", {
					className: "dsc__chevron",
					"aria-hidden": "true",
					children: o ? "▾" : "▸"
				}), /* @__PURE__ */ n("span", {
					className: "dsc__label",
					children: e
				})]
			})
		}), /* @__PURE__ */ n(P.Content, {
			className: "dsc__content",
			children: /* @__PURE__ */ n("div", {
				className: "dsc__panel",
				children: t
			})
		})]
	});
}
//#endregion
//#region src/components/Feed/Feed.tsx
var ve = [
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
function Z(e, t = ve) {
	return {
		id: e,
		title: t[e % t.length],
		meta: `№${String(e + 1).padStart(3, "0")} · 4 min read · Studio Notes`,
		body: "We keep returning to the same handful of moves: a deep ink set on warm paper, hairline rules organising the page, a single signal colour interrupting the brown-and-cream calm. The longer we work in this register the more we trust that restraint is generative rather than limiting."
	};
}
function ye({ initialCount: e = 4, batchSize: t = 3, label: i = "Studio Notes", className: a = "feed" }) {
	let [o, s] = A(() => Array.from({ length: e }, (e, t) => Z(t))), [c, l] = A(!1), u = k(null);
	function d() {
		c || (l(!0), window.setTimeout(() => {
			s((e) => [...e, ...Array.from({ length: t }, (t, n) => Z(e.length + n))]), l(!1);
		}, 350));
	}
	D(() => {
		let e = u.current;
		if (!e) return;
		let t = new IntersectionObserver((e) => {
			e.some((e) => e.isIntersecting) && d();
		}, { rootMargin: "240px" });
		return t.observe(e), () => t.disconnect();
	}, []);
	let f = O(() => o.length, [o]);
	return /* @__PURE__ */ r("section", {
		className: a,
		role: "feed",
		"aria-busy": c,
		"aria-label": i,
		tabIndex: 0,
		children: [
			o.map((e) => /* @__PURE__ */ r("article", {
				className: "feed__article",
				"aria-posinset": e.id + 1,
				"aria-setsize": -1,
				tabIndex: 0,
				children: [/* @__PURE__ */ r("header", { children: [/* @__PURE__ */ n("p", {
					className: "mono feed__meta",
					children: e.meta
				}), /* @__PURE__ */ n("h4", {
					className: "feed__title",
					children: e.title
				})] }), /* @__PURE__ */ n("p", {
					className: "feed__body",
					children: e.body
				})]
			}, e.id)),
			/* @__PURE__ */ n("div", {
				ref: u,
				className: "feed__sentinel",
				"aria-live": "polite",
				children: c ? "Loading more…" : `Showing ${f} articles · scroll for more`
			}),
			/* @__PURE__ */ n("button", {
				type: "button",
				className: "s-btn s-btn--ghost feed__more",
				onClick: d,
				children: "Load more manually"
			})
		]
	});
}
//#endregion
//#region src/components/Grid/Grid.tsx
var Q = ne();
function be({ rows: e, ariaLabel: t = "Pattern delivery status", className: i = "grd" }) {
	let a = O(() => [
		Q.accessor("pattern", { header: "Pattern" }),
		Q.accessor("status", { header: "Status" }),
		Q.accessor("spec", { header: "Spec" }),
		Q.accessor("notes", { header: "Notes" })
	], []), o = re({
		data: O(() => e, [e]),
		columns: a,
		getCoreRowModel: I()
	}), s = k(null), [c, l] = A({
		r: 0,
		c: 0
	});
	D(() => {
		(s.current?.querySelector(`[data-r="${c.r}"][data-c="${c.c}"]`))?.focus();
	}, [c]);
	let u = o.getRowModel().rows.length, d = a.length;
	function f(e) {
		let { r: t, c: n } = c, r = t, i = n;
		if (e.key === "ArrowRight") i = Math.min(n + 1, d - 1);
		else if (e.key === "ArrowLeft") i = Math.max(n - 1, 0);
		else if (e.key === "ArrowDown") r = Math.min(t + 1, u);
		else if (e.key === "ArrowUp") r = Math.max(t - 1, 0);
		else if (e.key === "Home") i = 0;
		else if (e.key === "End") i = d - 1;
		else if (e.key === "PageDown") r = u;
		else if (e.key === "PageUp") r = 0;
		else return;
		e.preventDefault(), l({
			r,
			c: i
		});
	}
	return /* @__PURE__ */ n("div", {
		className: "grd__wrap",
		role: "grid",
		"aria-label": t,
		"aria-rowcount": u + 1,
		"aria-colcount": d,
		onKeyDown: f,
		children: /* @__PURE__ */ r("table", {
			className: i,
			ref: s,
			role: "presentation",
			children: [/* @__PURE__ */ n("thead", {
				role: "presentation",
				children: o.getHeaderGroups().map((e) => /* @__PURE__ */ n("tr", {
					role: "row",
					children: e.headers.map((e, t) => /* @__PURE__ */ n("th", {
						role: "columnheader",
						"aria-rowindex": 1,
						"aria-colindex": t + 1,
						"data-r": 0,
						"data-c": t,
						tabIndex: c.r === 0 && c.c === t ? 0 : -1,
						children: F(e.column.columnDef.header, e.getContext())
					}, e.id))
				}, e.id))
			}), /* @__PURE__ */ n("tbody", {
				role: "presentation",
				children: o.getRowModel().rows.map((e, t) => /* @__PURE__ */ n("tr", {
					role: "row",
					"aria-rowindex": t + 2,
					children: e.getVisibleCells().map((e, r) => {
						let i = r === 0, a = String(e.getValue()), o = e.column.id === "status";
						return /* @__PURE__ */ n("td", {
							role: i ? "rowheader" : "gridcell",
							"aria-colindex": r + 1,
							"data-r": t + 1,
							"data-c": r,
							tabIndex: c.r === t + 1 && c.c === r ? 0 : -1,
							children: o ? /* @__PURE__ */ n("span", {
								className: `grd__chip grd__chip--${a}`,
								children: a
							}) : F(e.column.columnDef.cell, e.getContext())
						}, e.id);
					})
				}, e.id))
			})]
		})
	});
}
//#endregion
//#region src/components/Landmarks/Landmarks.tsx
var xe = [
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
function Se({ rows: e = xe, className: t = "lm" }) {
	return /* @__PURE__ */ r("div", {
		className: t,
		children: [/* @__PURE__ */ r("div", {
			className: "lm__page",
			"aria-label": "Sample page wireframe",
			children: [
				/* @__PURE__ */ r("div", {
					className: "lm__zone lm__zone--banner",
					children: [/* @__PURE__ */ n("span", {
						className: "mono",
						children: "<header>"
					}), /* @__PURE__ */ n("span", {
						className: "mono",
						children: "role=banner"
					})]
				}),
				/* @__PURE__ */ r("div", {
					className: "lm__zone lm__zone--nav",
					children: [/* @__PURE__ */ n("span", {
						className: "mono",
						children: "<nav>"
					}), /* @__PURE__ */ n("span", {
						className: "mono",
						children: "role=navigation"
					})]
				}),
				/* @__PURE__ */ r("div", {
					className: "lm__zone lm__zone--main",
					children: [
						/* @__PURE__ */ n("span", {
							className: "mono",
							children: "<main>"
						}),
						/* @__PURE__ */ n("span", {
							className: "mono",
							children: "role=main"
						}),
						/* @__PURE__ */ r("div", {
							className: "lm__zone lm__zone--region",
							children: [/* @__PURE__ */ n("span", {
								className: "mono",
								children: "<section aria-label=\"Featured\">"
							}), /* @__PURE__ */ n("span", {
								className: "mono",
								children: "role=region"
							})]
						})
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "lm__zone lm__zone--side",
					children: [/* @__PURE__ */ n("span", {
						className: "mono",
						children: "<aside>"
					}), /* @__PURE__ */ n("span", {
						className: "mono",
						children: "role=complementary"
					})]
				}),
				/* @__PURE__ */ r("div", {
					className: "lm__zone lm__zone--foot",
					children: [/* @__PURE__ */ n("span", {
						className: "mono",
						children: "<footer>"
					}), /* @__PURE__ */ n("span", {
						className: "mono",
						children: "role=contentinfo"
					})]
				})
			]
		}), /* @__PURE__ */ r("table", {
			className: "lm__table",
			children: [/* @__PURE__ */ n("thead", { children: /* @__PURE__ */ r("tr", { children: [
				/* @__PURE__ */ n("th", { children: "Element" }),
				/* @__PURE__ */ n("th", { children: "Role" }),
				/* @__PURE__ */ n("th", { children: "Use it for" })
			] }) }), /* @__PURE__ */ n("tbody", { children: e.map((e) => /* @__PURE__ */ r("tr", { children: [
				/* @__PURE__ */ n("td", { children: /* @__PURE__ */ n("code", { children: e.tag }) }),
				/* @__PURE__ */ n("td", { children: /* @__PURE__ */ n("span", {
					className: "mono lm__rolepill",
					children: e.role
				}) }),
				/* @__PURE__ */ n("td", { children: e.note })
			] }, e.role)) })]
		})]
	});
}
//#endregion
//#region src/components/Link/Link.tsx
function Ce({ items: e, lede: t = "Links inside running prose should sit unmistakeably apart from the surrounding type — colour alone is not enough, so we lean on weight and a hairline underline.", quote: i = "“The link is the founding metaphor of the web. Treat it with the dignity it’s owed.”", className: a = "lnk" }) {
	return /* @__PURE__ */ r("div", {
		className: a,
		children: [
			/* @__PURE__ */ n("p", {
				className: "lnk__lede",
				children: t
			}),
			/* @__PURE__ */ n("ul", {
				className: "lnk__list",
				children: e.map((e) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ r(m, {
					href: e.href,
					target: e.external ? "_blank" : void 0,
					rel: e.external ? "noreferrer" : void 0,
					isDisabled: e.disabled,
					className: `lnk__a${e.disabled ? " lnk__a--disabled" : ""}`,
					children: [e.label, e.external && /* @__PURE__ */ n("span", {
						"aria-hidden": "true",
						className: "lnk__ext",
						children: "↗"
					})]
				}) }, e.id))
			}),
			/* @__PURE__ */ n("p", {
				className: "lnk__quote",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/Listbox/Listbox.tsx
function we({ options: e, label: t = "Paper stock — select one or more", ariaLabel: i = "Paper stock", defaultSelectedKeys: a = [], selectionMode: o = "multiple", onSelectionChange: s, className: c = "lb" }) {
	let [l, u] = A(new Set(a));
	function d(e) {
		u(e), s?.(e);
	}
	return /* @__PURE__ */ r("div", {
		className: c,
		children: [/* @__PURE__ */ n(p, {
			className: "mono lb__label",
			children: t
		}), /* @__PURE__ */ n(h, {
			"aria-label": i,
			selectionMode: o,
			selectedKeys: l,
			onSelectionChange: d,
			className: "lb__root",
			children: e.map((e) => /* @__PURE__ */ r(g, {
				id: e.id,
				textValue: e.name,
				className: "lb__opt",
				children: [
					/* @__PURE__ */ n("span", {
						className: "lb__optName",
						children: e.name
					}),
					/* @__PURE__ */ n("span", {
						className: "lb__optNote",
						children: e.note
					}),
					/* @__PURE__ */ n("span", {
						className: "lb__check",
						"aria-hidden": "true",
						children: "✓"
					})
				]
			}, e.id))
		})]
	});
}
function Te(e, t) {
	let n = Array.from(t);
	return n.length === 0 ? "(none)" : n.map((t) => e.find((e) => e.id === t)?.name).join(", ");
}
//#endregion
//#region src/components/MenuButton/MenuButton.tsx
function Ee({ items: e, menuLabel: t = "File", triggerLabel: i = "File actions", triggerClassName: a = "s-btn", onSelect: o, className: s = "menu" }) {
	return e && e.length > 0 ? /* @__PURE__ */ n("div", {
		className: s,
		children: /* @__PURE__ */ r(L.Root, { children: [/* @__PURE__ */ n(L.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ r("button", {
				type: "button",
				className: a,
				children: [
					i,
					" ",
					/* @__PURE__ */ n("span", {
						"aria-hidden": "true",
						children: "▾"
					})
				]
			})
		}), /* @__PURE__ */ n(L.Portal, { children: /* @__PURE__ */ r(L.Content, {
			className: "menu__content",
			align: "start",
			sideOffset: 6,
			children: [t && /* @__PURE__ */ n(L.Label, {
				className: "menu__label",
				children: t
			}), e.map((e) => /* @__PURE__ */ n(L.Item, {
				className: "menu__item",
				onSelect: () => e.onSelect?.(),
				children: e.label
			}, e.id))]
		}) })] })
	}) : /* @__PURE__ */ n("div", {
		className: s,
		children: /* @__PURE__ */ r(L.Root, { children: [/* @__PURE__ */ n(L.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ r("button", {
				type: "button",
				className: a,
				children: [
					i,
					" ",
					/* @__PURE__ */ n("span", {
						"aria-hidden": "true",
						children: "▾"
					})
				]
			})
		}), /* @__PURE__ */ n(L.Portal, { children: /* @__PURE__ */ r(L.Content, {
			className: "menu__content",
			align: "start",
			sideOffset: 6,
			children: [
				/* @__PURE__ */ n(L.Label, {
					className: "menu__label mono",
					children: t
				}),
				/* @__PURE__ */ r(L.Item, {
					className: "menu__item",
					onSelect: () => o?.("New specimen"),
					children: ["New specimen ", /* @__PURE__ */ n("span", {
						className: "mono menu__kbd",
						children: "⌘N"
					})]
				}),
				/* @__PURE__ */ r(L.Item, {
					className: "menu__item",
					onSelect: () => o?.("Open from disk"),
					children: ["Open from disk… ", /* @__PURE__ */ n("span", {
						className: "mono menu__kbd",
						children: "⌘O"
					})]
				}),
				/* @__PURE__ */ n(L.Separator, { className: "menu__sep" }),
				/* @__PURE__ */ n(L.Label, {
					className: "menu__label mono",
					children: "Export"
				}),
				/* @__PURE__ */ n(L.Item, {
					className: "menu__item",
					onSelect: () => o?.("Export as PDF"),
					children: "Export as PDF"
				}),
				/* @__PURE__ */ n(L.Item, {
					className: "menu__item",
					onSelect: () => o?.("Export as HTML"),
					children: "Export as HTML"
				}),
				/* @__PURE__ */ r(L.Sub, { children: [/* @__PURE__ */ r(L.SubTrigger, {
					className: "menu__item menu__item--sub",
					children: ["More formats ", /* @__PURE__ */ n("span", {
						"aria-hidden": "true",
						children: "›"
					})]
				}), /* @__PURE__ */ n(L.Portal, { children: /* @__PURE__ */ r(L.SubContent, {
					className: "menu__content",
					sideOffset: 4,
					alignOffset: -4,
					children: [/* @__PURE__ */ n(L.Item, {
						className: "menu__item",
						onSelect: () => o?.("Export as EPUB"),
						children: "EPUB"
					}), /* @__PURE__ */ n(L.Item, {
						className: "menu__item",
						onSelect: () => o?.("Export as Plain text"),
						children: "Plain text"
					})]
				}) })] }),
				/* @__PURE__ */ n(L.Separator, { className: "menu__sep" }),
				/* @__PURE__ */ n(L.Item, {
					className: "menu__item menu__item--danger",
					onSelect: () => o?.("Discarded changes"),
					children: "Discard changes"
				})
			]
		}) })] })
	});
}
//#endregion
//#region src/components/Menubar/Menubar.tsx
function De({ onSelect: e, className: t = "menu" }) {
	let [i, a] = A(!0), [o, s] = A(!1);
	return /* @__PURE__ */ n("div", {
		className: t,
		children: /* @__PURE__ */ r(R.Root, {
			className: "menubar",
			children: [
				/* @__PURE__ */ r(R.Menu, { children: [/* @__PURE__ */ n(R.Trigger, {
					className: "menubar__trigger",
					children: "File"
				}), /* @__PURE__ */ n(R.Portal, { children: /* @__PURE__ */ r(R.Content, {
					className: "menubar__content",
					align: "start",
					sideOffset: 4,
					children: [
						/* @__PURE__ */ n(R.Item, {
							className: "menubar__item",
							onSelect: () => e?.("New"),
							children: "New"
						}),
						/* @__PURE__ */ n(R.Item, {
							className: "menubar__item",
							onSelect: () => e?.("Open…"),
							children: "Open…"
						}),
						/* @__PURE__ */ n(R.Item, {
							className: "menubar__item",
							onSelect: () => e?.("Save"),
							children: "Save"
						}),
						/* @__PURE__ */ n(R.Separator, { className: "menubar__sep" }),
						/* @__PURE__ */ n(R.Item, {
							className: "menubar__item",
							onSelect: () => e?.("Quit"),
							children: "Quit"
						})
					]
				}) })] }),
				/* @__PURE__ */ r(R.Menu, { children: [/* @__PURE__ */ n(R.Trigger, {
					className: "menubar__trigger",
					children: "Edit"
				}), /* @__PURE__ */ n(R.Portal, { children: /* @__PURE__ */ r(R.Content, {
					className: "menubar__content",
					align: "start",
					sideOffset: 4,
					children: [
						/* @__PURE__ */ n(R.Item, {
							className: "menubar__item",
							onSelect: () => e?.("Undo"),
							children: "Undo"
						}),
						/* @__PURE__ */ n(R.Item, {
							className: "menubar__item",
							onSelect: () => e?.("Redo"),
							children: "Redo"
						}),
						/* @__PURE__ */ n(R.Separator, { className: "menubar__sep" }),
						/* @__PURE__ */ r(R.Sub, { children: [/* @__PURE__ */ n(R.SubTrigger, {
							className: "menubar__item",
							children: "Find ›"
						}), /* @__PURE__ */ n(R.Portal, { children: /* @__PURE__ */ r(R.SubContent, {
							className: "menubar__content",
							sideOffset: 4,
							children: [/* @__PURE__ */ n(R.Item, {
								className: "menubar__item",
								onSelect: () => e?.("Find in file"),
								children: "In file"
							}), /* @__PURE__ */ n(R.Item, {
								className: "menubar__item",
								onSelect: () => e?.("Find in project"),
								children: "In project"
							})]
						}) })] })
					]
				}) })] }),
				/* @__PURE__ */ r(R.Menu, { children: [/* @__PURE__ */ n(R.Trigger, {
					className: "menubar__trigger",
					children: "View"
				}), /* @__PURE__ */ n(R.Portal, { children: /* @__PURE__ */ r(R.Content, {
					className: "menubar__content",
					align: "start",
					sideOffset: 4,
					children: [/* @__PURE__ */ r(R.CheckboxItem, {
						className: "menubar__item",
						checked: i,
						onCheckedChange: (t) => {
							a(t === !0), e?.(`Sidebar ${t ? "on" : "off"}`);
						},
						children: [
							/* @__PURE__ */ n(R.ItemIndicator, {
								asChild: !0,
								children: /* @__PURE__ */ n("span", {
									className: "menubar__check",
									"aria-hidden": "true",
									children: "✓"
								})
							}),
							!i && /* @__PURE__ */ n("span", {
								className: "menubar__check",
								"aria-hidden": "true"
							}),
							"Sidebar"
						]
					}), /* @__PURE__ */ r(R.CheckboxItem, {
						className: "menubar__item",
						checked: o,
						onCheckedChange: (t) => {
							s(t === !0), e?.(`Inspector ${t ? "on" : "off"}`);
						},
						children: [
							/* @__PURE__ */ n(R.ItemIndicator, {
								asChild: !0,
								children: /* @__PURE__ */ n("span", {
									className: "menubar__check",
									"aria-hidden": "true",
									children: "✓"
								})
							}),
							!o && /* @__PURE__ */ n("span", {
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
function Oe(e) {
	return e < 30 ? "low" : e < 70 ? "ok" : e < 90 ? "high" : "max";
}
function ke({ label: e = "Ink reservoir", defaultValue: i = 62, min: a = 0, max: o = 100, showDemoControl: s = !0, className: c = "mt" }) {
	let [l, u] = A(i), d = Oe(l);
	return /* @__PURE__ */ r("div", {
		className: c,
		children: [/* @__PURE__ */ n(_, {
			value: l,
			minValue: a,
			maxValue: o,
			className: `mt__root mt__root--${d}`,
			children: ({ percentage: i }) => /* @__PURE__ */ r(t, { children: [
				/* @__PURE__ */ r("div", {
					className: "mt__head",
					children: [/* @__PURE__ */ n(p, {
						className: "mono",
						children: e
					}), /* @__PURE__ */ r("span", {
						className: "mt__num",
						children: [Math.round(i), "%"]
					})]
				}),
				/* @__PURE__ */ r("div", {
					className: "mt__bar",
					children: [/* @__PURE__ */ n("div", {
						className: "mt__fill",
						style: { width: `${i}%` }
					}), [
						10,
						25,
						50,
						75,
						90
					].map((e) => /* @__PURE__ */ n("span", {
						className: "mt__tick",
						style: { left: `${e}%` },
						"aria-hidden": "true"
					}, e))]
				}),
				/* @__PURE__ */ r("p", {
					className: "mt__zone mono",
					children: [
						d === "low" && "Low — refill soon",
						d === "ok" && "Okay — within nominal",
						d === "high" && "High — slow refill",
						d === "max" && "Maximum — pause"
					]
				})
			] })
		}), s && /* @__PURE__ */ r("label", {
			className: "mt__control s-field",
			children: [/* @__PURE__ */ n("span", { children: "Adjust value (demo only)" }), /* @__PURE__ */ n("input", {
				type: "range",
				min: a,
				max: o,
				value: l,
				onChange: (e) => u(Number(e.target.value)),
				className: "mt__range",
				"aria-label": "Demo: change meter value"
			})]
		})]
	});
}
//#endregion
//#region src/components/RadioGroup/RadioGroup.tsx
function Ae({ options: e, legend: t = "Choose a plan", defaultValue: i, ariaLabel: a = "Pricing tier", className: o = "rg" }) {
	let [s, c] = A(i ?? e[0]?.id ?? "");
	return /* @__PURE__ */ r("fieldset", {
		className: o,
		children: [/* @__PURE__ */ n("legend", {
			className: "mono",
			children: t
		}), /* @__PURE__ */ n(z.Root, {
			value: s,
			onValueChange: c,
			className: "rg__group",
			"aria-label": a,
			children: e.map((e) => /* @__PURE__ */ r("label", {
				className: "rg__card",
				"data-selected": s === e.id,
				children: [
					/* @__PURE__ */ n(z.Item, {
						value: e.id,
						className: "rg__radio",
						children: /* @__PURE__ */ n(z.Indicator, { className: "rg__dot" })
					}),
					/* @__PURE__ */ n("span", {
						className: "rg__title",
						children: e.title
					}),
					/* @__PURE__ */ n("span", {
						className: "rg__price mono",
						children: e.price
					}),
					/* @__PURE__ */ n("span", {
						className: "rg__note",
						children: e.note
					})
				]
			}, e.id))
		})]
	});
}
//#endregion
//#region src/components/RouterBridge/AriaRouterBridge.tsx
function je({ navigate: e, useHref: t, children: r }) {
	return /* @__PURE__ */ n(b, {
		navigate: e,
		useHref: t,
		children: r
	});
}
//#endregion
//#region src/components/Slider/Slider.tsx
function Me({ label: e = "Ink opacity", defaultValue: t = 42, min: i = 0, max: a = 100, step: o = 1, showPreview: s = !0, className: c = "sl" }) {
	let [l, u] = A([t]);
	return /* @__PURE__ */ r("div", {
		className: c,
		children: [
			/* @__PURE__ */ r("div", {
				className: "sl__readout",
				children: [/* @__PURE__ */ n("span", {
					className: "mono",
					children: e
				}), /* @__PURE__ */ r("span", {
					className: "sl__value",
					children: [l[0].toString().padStart(2, "0"), "%"]
				})]
			}),
			/* @__PURE__ */ r(B.Root, {
				className: "sl__root",
				value: l,
				onValueChange: u,
				min: i,
				max: a,
				step: o,
				"aria-label": e,
				children: [/* @__PURE__ */ n(B.Track, {
					className: "sl__track",
					children: /* @__PURE__ */ n(B.Range, { className: "sl__range" })
				}), /* @__PURE__ */ n(B.Thumb, {
					className: "sl__thumb",
					"aria-valuetext": `${l[0]} percent`
				})]
			}),
			/* @__PURE__ */ n("div", {
				className: "sl__ticks mono",
				"aria-hidden": "true",
				children: [
					0,
					25,
					50,
					75,
					100
				].map((e) => /* @__PURE__ */ n("span", { children: e }, e))
			}),
			s && /* @__PURE__ */ n("div", {
				className: "sl__preview",
				style: { opacity: l[0] / 100 },
				"aria-hidden": "true",
				children: "INK"
			})
		]
	});
}
//#endregion
//#region src/components/SliderMulti/SliderMulti.tsx
function Ne({ label: e = "Price range", defaultValue: t = [20, 60], min: i = 0, max: a = 100, step: o = 5, showHistogram: s = !0, className: c = "sl" }) {
	let [l, u] = A(t);
	return /* @__PURE__ */ r("div", {
		className: c,
		children: [
			/* @__PURE__ */ r("div", {
				className: "sl__readout",
				children: [/* @__PURE__ */ n("span", {
					className: "mono",
					children: e
				}), /* @__PURE__ */ r("span", {
					className: "sl__value",
					children: [
						"$",
						l[0],
						" ",
						/* @__PURE__ */ n("span", {
							className: "slm__dash",
							children: "→"
						}),
						" $",
						l[1]
					]
				})]
			}),
			/* @__PURE__ */ r(B.Root, {
				className: "sl__root",
				value: l,
				onValueChange: (e) => u(e),
				min: i,
				max: a,
				step: o,
				minStepsBetweenThumbs: 1,
				children: [
					/* @__PURE__ */ n(B.Track, {
						className: "sl__track",
						children: /* @__PURE__ */ n(B.Range, { className: "sl__range" })
					}),
					/* @__PURE__ */ n(B.Thumb, {
						className: "sl__thumb",
						"aria-label": "Minimum price",
						"aria-valuetext": `${l[0]} dollars`
					}),
					/* @__PURE__ */ n(B.Thumb, {
						className: "sl__thumb",
						"aria-label": "Maximum price",
						"aria-valuetext": `${l[1]} dollars`
					})
				]
			}),
			/* @__PURE__ */ n("div", {
				className: "sl__ticks mono",
				"aria-hidden": "true",
				children: [
					0,
					25,
					50,
					75,
					100
				].map((e) => /* @__PURE__ */ r("span", { children: ["$", e] }, e))
			}),
			s && /* @__PURE__ */ n("div", {
				className: "slm__hist",
				"aria-hidden": "true",
				children: Array.from({ length: 20 }).map((e, t) => {
					let r = t * 5, i = r >= l[0] && r <= l[1];
					return /* @__PURE__ */ n("span", {
						className: "slm__bar",
						style: {
							height: `${20 + Math.abs(Math.sin(t)) * 60}%`,
							opacity: i ? 1 : .2
						}
					}, t);
				})
			})
		]
	});
}
//#endregion
//#region src/components/Spinbutton/Spinbutton.tsx
function Pe({ className: e = "spn" }) {
	let [t, i] = A(50), [a, o] = A(12);
	return /* @__PURE__ */ r("div", {
		className: e,
		children: [
			/* @__PURE__ */ r(v, {
				value: t,
				onChange: i,
				minValue: 1,
				maxValue: 500,
				step: 1,
				className: "spn__root",
				children: [/* @__PURE__ */ n(p, {
					className: "mono spn__label",
					children: "Copies (1 – 500)"
				}), /* @__PURE__ */ r(d, {
					className: "spn__group",
					children: [
						/* @__PURE__ */ n(s, {
							slot: "decrement",
							className: "spn__btn",
							"aria-label": "Decrease",
							children: "−"
						}),
						/* @__PURE__ */ n(f, { className: "spn__input" }),
						/* @__PURE__ */ n(s, {
							slot: "increment",
							className: "spn__btn",
							"aria-label": "Increase",
							children: "+"
						})
					]
				})]
			}),
			/* @__PURE__ */ r(v, {
				value: a,
				onChange: o,
				minValue: 6,
				maxValue: 144,
				step: .5,
				formatOptions: {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1
				},
				className: "spn__root",
				children: [/* @__PURE__ */ n(p, {
					className: "mono spn__label",
					children: "Type size (6 – 144 pt, half steps)"
				}), /* @__PURE__ */ r(d, {
					className: "spn__group",
					children: [
						/* @__PURE__ */ n(s, {
							slot: "decrement",
							className: "spn__btn",
							"aria-label": "Decrease",
							children: "−"
						}),
						/* @__PURE__ */ n(f, { className: "spn__input" }),
						/* @__PURE__ */ n(s, {
							slot: "increment",
							className: "spn__btn",
							"aria-label": "Increase",
							children: "+"
						})
					]
				})]
			}),
			/* @__PURE__ */ n("p", {
				className: "spn__sample",
				style: { fontSize: `${Math.max(a, 6)}pt` },
				children: "Hamburgefonstiv"
			})
		]
	});
}
//#endregion
//#region src/components/Switch/Switch.tsx
function $({ items: e, defaultState: t, className: i = "sw" }) {
	let [a, o] = A(t ?? Object.fromEntries(e.map((e) => [e.id, !1])));
	return /* @__PURE__ */ n("ul", {
		className: i,
		children: e.map((e) => /* @__PURE__ */ r("li", {
			className: "sw__row",
			children: [/* @__PURE__ */ r("div", {
				className: "sw__copy",
				children: [/* @__PURE__ */ n("span", {
					className: "sw__label",
					children: e.label
				}), /* @__PURE__ */ n("span", {
					className: "sw__help",
					children: e.help
				})]
			}), /* @__PURE__ */ n(V.Root, {
				checked: a[e.id],
				onCheckedChange: (t) => o((n) => ({
					...n,
					[e.id]: t
				})),
				className: "sw__root",
				"aria-label": e.label,
				children: /* @__PURE__ */ n(V.Thumb, { className: "sw__thumb" })
			})]
		}, e.id))
	});
}
//#endregion
//#region src/components/Table/Table.tsx
function Fe({ rows: e, ariaLabel: t = "Pattern catalogue", className: i = "tbl" }) {
	let [a, o] = A({
		column: "pattern",
		direction: "ascending"
	}), [s, u] = A(/* @__PURE__ */ new Set()), d = O(() => {
		let t = a.column, n = a.direction === "ascending" ? 1 : -1;
		return [...e].sort((e, r) => (e[t] < r[t] ? -1 : +(e[t] > r[t])) * n);
	}, [a, e]);
	return /* @__PURE__ */ r(S, {
		"aria-label": t,
		className: i,
		sortDescriptor: a,
		onSortChange: o,
		selectionMode: "multiple",
		selectedKeys: s,
		onSelectionChange: u,
		children: [/* @__PURE__ */ r(w, { children: [
			/* @__PURE__ */ n(l, {
				id: "pattern",
				isRowHeader: !0,
				allowsSorting: !0,
				className: "tbl__th",
				children: "Pattern"
			}),
			/* @__PURE__ */ n(l, {
				id: "library",
				allowsSorting: !0,
				className: "tbl__th",
				children: "Library"
			}),
			/* @__PURE__ */ n(l, {
				id: "role",
				allowsSorting: !0,
				className: "tbl__th",
				children: "Role"
			}),
			/* @__PURE__ */ n(l, {
				id: "released",
				allowsSorting: !0,
				className: "tbl__th",
				children: "Released"
			})
		] }), /* @__PURE__ */ n(C, { children: d.map((e) => /* @__PURE__ */ r(x, {
			id: e.id,
			className: "tbl__tr",
			children: [
				/* @__PURE__ */ n(c, {
					className: "tbl__td tbl__td--name",
					children: e.pattern
				}),
				/* @__PURE__ */ n(c, {
					className: "tbl__td mono",
					children: e.library
				}),
				/* @__PURE__ */ n(c, {
					className: "tbl__td mono",
					children: e.role
				}),
				/* @__PURE__ */ n(c, {
					className: "tbl__td mono",
					children: e.released
				})
			]
		}, e.id)) })]
	});
}
//#endregion
//#region src/components/Toolbar/Toolbar.tsx
function Ie({ className: e = "tb" }) {
	let [t, i] = A(["bold"]), [a, o] = A("left");
	return /* @__PURE__ */ r("div", {
		className: e,
		children: [/* @__PURE__ */ r(H.Root, {
			className: "tb__root",
			"aria-label": "Formatting",
			children: [
				/* @__PURE__ */ r(H.ToggleGroup, {
					type: "multiple",
					value: t,
					onValueChange: i,
					className: "tb__group",
					"aria-label": "Text style",
					children: [
						/* @__PURE__ */ n(H.ToggleItem, {
							className: "tb__btn",
							value: "bold",
							"aria-label": "Bold",
							children: /* @__PURE__ */ n("strong", { children: "B" })
						}),
						/* @__PURE__ */ n(H.ToggleItem, {
							className: "tb__btn",
							value: "italic",
							"aria-label": "Italic",
							children: /* @__PURE__ */ n("em", { children: "I" })
						}),
						/* @__PURE__ */ n(H.ToggleItem, {
							className: "tb__btn",
							value: "underline",
							"aria-label": "Underline",
							children: /* @__PURE__ */ n("u", { children: "U" })
						}),
						/* @__PURE__ */ n(H.ToggleItem, {
							className: "tb__btn",
							value: "strike",
							"aria-label": "Strikethrough",
							children: /* @__PURE__ */ n("s", { children: "S" })
						})
					]
				}),
				/* @__PURE__ */ n(H.Separator, { className: "tb__sep" }),
				/* @__PURE__ */ r(H.ToggleGroup, {
					type: "single",
					value: a,
					onValueChange: (e) => e && o(e),
					className: "tb__group",
					"aria-label": "Alignment",
					children: [
						/* @__PURE__ */ n(H.ToggleItem, {
							className: "tb__btn",
							value: "left",
							"aria-label": "Align left",
							children: /* @__PURE__ */ n("span", {
								"aria-hidden": "true",
								children: "⫷"
							})
						}),
						/* @__PURE__ */ n(H.ToggleItem, {
							className: "tb__btn",
							value: "center",
							"aria-label": "Align centre",
							children: /* @__PURE__ */ n("span", {
								"aria-hidden": "true",
								children: "≡"
							})
						}),
						/* @__PURE__ */ n(H.ToggleItem, {
							className: "tb__btn",
							value: "right",
							"aria-label": "Align right",
							children: /* @__PURE__ */ n("span", {
								"aria-hidden": "true",
								children: "⫸"
							})
						})
					]
				}),
				/* @__PURE__ */ n(H.Separator, { className: "tb__sep" }),
				/* @__PURE__ */ n(H.Link, {
					className: "tb__link",
					href: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",
					target: "_blank",
					rel: "noreferrer",
					children: "APG spec ↗"
				}),
				/* @__PURE__ */ n(H.Button, {
					className: "s-btn s-btn--primary",
					style: { marginLeft: "auto" },
					children: "Publish"
				})
			]
		}), /* @__PURE__ */ r("p", {
			className: "tb__preview",
			style: {
				fontWeight: t.includes("bold") ? 700 : 400,
				fontStyle: t.includes("italic") ? "italic" : "normal",
				textDecoration: [t.includes("underline") ? "underline" : "", t.includes("strike") ? "line-through" : ""].filter(Boolean).join(" "),
				textAlign: a
			},
			children: [
				"The toolbar holds a single tab stop. Press ",
				/* @__PURE__ */ n("kbd", { children: "Tab" }),
				" in, then ride the arrow keys to traverse without leaving the group."
			]
		})]
	});
}
//#endregion
//#region src/components/Tooltip/Tooltip.tsx
function Le({ hints: e, lede: t = "Hover or tab onto each highlighted term to read its definition.", bodyPrefix: i = "Set your body type with thoughtful ", bodySuffix: a = " The body settles, the page becomes inviting, and readers reach the end without realising they read at all.", delayDuration: o = 150 }) {
	return /* @__PURE__ */ r(U.Provider, {
		delayDuration: o,
		children: [/* @__PURE__ */ n("p", {
			className: "tt__lede",
			children: t
		}), /* @__PURE__ */ r("p", {
			className: "tt__body",
			children: [
				i,
				e.map((t, i) => {
					let a = i < e.length - 2 ? "," : i === e.length - 2 ? ", and" : ".";
					return /* @__PURE__ */ r(ee, { children: [/* @__PURE__ */ r("span", {
						className: "tt__chunk",
						children: [/* @__PURE__ */ r(U.Root, { children: [/* @__PURE__ */ n(U.Trigger, {
							asChild: !0,
							children: /* @__PURE__ */ n("button", {
								type: "button",
								className: "tt__term",
								children: t.label
							})
						}), /* @__PURE__ */ n(U.Portal, { children: /* @__PURE__ */ r(U.Content, {
							className: "tt__content",
							sideOffset: 6,
							children: [
								/* @__PURE__ */ n("strong", {
									className: "tt__head",
									children: t.label
								}),
								/* @__PURE__ */ n("span", { children: t.body }),
								/* @__PURE__ */ n(U.Arrow, { className: "tt__arrow" })
							]
						}) })] }), a]
					}), " "] }, t.key);
				}),
				a
			]
		})]
	});
}
//#endregion
//#region src/components/TreeView/TreeView.tsx
function Re({ node: e, style: t, dragHandle: i }) {
	let a = e.isLeaf;
	return /* @__PURE__ */ r("div", {
		ref: i,
		className: "tv__row",
		style: t,
		"data-selected": e.isSelected,
		"data-focused": e.isFocused,
		children: [
			/* @__PURE__ */ n("span", {
				className: "tv__chev",
				"aria-hidden": "true",
				onClick: (t) => {
					t.stopPropagation(), e.toggle();
				},
				children: a ? "·" : e.isOpen ? "▾" : "▸"
			}),
			/* @__PURE__ */ n("span", {
				className: "tv__icon mono",
				"aria-hidden": "true",
				children: a ? "txt" : "dir"
			}),
			/* @__PURE__ */ n("span", {
				className: "tv__name",
				children: e.data.name
			})
		]
	});
}
function ze({ data: e, height: t = 340, onFocusChange: r, className: i = "tv__frame" }) {
	return /* @__PURE__ */ n("div", {
		className: i,
		children: /* @__PURE__ */ n(W, {
			data: O(() => e, [e]),
			openByDefault: !1,
			width: "100%",
			height: t,
			indent: 20,
			rowHeight: 30,
			onFocus: (e) => r?.(e?.data.name ?? null),
			children: Re
		})
	});
}
//#endregion
//#region src/components/Treegrid/Treegrid.tsx
function Be({ node: e, style: t }) {
	let i = e.isLeaf, a = e.data, o = (e.level + 1) * 16;
	return /* @__PURE__ */ r("div", {
		role: "row",
		"aria-level": e.level + 1,
		"aria-posinset": e.childIndex + 1,
		"aria-setsize": e.parent?.children?.length ?? 1,
		"aria-expanded": i ? void 0 : e.isOpen,
		"aria-selected": e.isSelected,
		className: "trg__row",
		"data-focused": e.isFocused,
		style: t,
		onClick: () => i ? e.select() : e.toggle(),
		children: [
			/* @__PURE__ */ r("div", {
				role: "gridcell",
				className: "trg__cell trg__cell--name",
				style: { paddingLeft: o },
				children: [/* @__PURE__ */ n("span", {
					className: "trg__chev",
					"aria-hidden": "true",
					children: i ? "·" : e.isOpen ? "▾" : "▸"
				}), /* @__PURE__ */ n("span", {
					className: i ? "trg__file" : "trg__folder",
					children: a.name
				})]
			}),
			/* @__PURE__ */ n("div", {
				role: "gridcell",
				className: "trg__cell mono",
				children: a.owner
			}),
			/* @__PURE__ */ n("div", {
				role: "gridcell",
				className: "trg__cell mono",
				children: a.size
			}),
			/* @__PURE__ */ n("div", {
				role: "gridcell",
				className: "trg__cell mono",
				children: a.modified
			})
		]
	});
}
function Ve({ data: e, ariaLabel: t = "Project files", height: i = 340, openByDefault: a = !0, className: o = "trg" }) {
	let s = O(() => e, [e]);
	return /* @__PURE__ */ r("div", {
		role: "treegrid",
		"aria-label": t,
		"aria-rowcount": -1,
		"aria-colcount": 4,
		className: o,
		children: [/* @__PURE__ */ r("div", {
			role: "row",
			className: "trg__row trg__row--head",
			children: [
				/* @__PURE__ */ n("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "name"
				}),
				/* @__PURE__ */ n("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "owner"
				}),
				/* @__PURE__ */ n("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "size"
				}),
				/* @__PURE__ */ n("span", {
					role: "columnheader",
					className: "trg__cell mono",
					children: "modified"
				})
			]
		}), /* @__PURE__ */ n(W, {
			data: s,
			openByDefault: a,
			width: "100%",
			height: i,
			indent: 0,
			rowHeight: 30,
			children: Be
		})]
	});
}
//#endregion
//#region src/components/WindowSplitter/WindowSplitter.tsx
function He({ className: e = "ws" }) {
	return /* @__PURE__ */ n("div", {
		className: e,
		children: /* @__PURE__ */ r(G, {
			orientation: "horizontal",
			className: "ws__group",
			id: "outer",
			children: [
				/* @__PURE__ */ r(K, {
					defaultSize: "30%",
					minSize: "15%",
					className: "ws__pane",
					children: [/* @__PURE__ */ n("header", {
						className: "ws__head",
						children: /* @__PURE__ */ n("span", {
							className: "mono",
							children: "left · outline"
						})
					}), /* @__PURE__ */ r("ul", {
						className: "ws__list",
						children: [
							/* @__PURE__ */ n("li", { children: "Front matter" }),
							/* @__PURE__ */ n("li", { children: "Vol. 01 — Form Controls" }),
							/* @__PURE__ */ n("li", { children: "Vol. 02 — Composite" }),
							/* @__PURE__ */ n("li", { children: "Vol. 03 — Layout" }),
							/* @__PURE__ */ n("li", { children: "Colophon" })
						]
					})]
				}),
				/* @__PURE__ */ n(q, {
					className: "ws__handle ws__handle--h",
					children: /* @__PURE__ */ n("span", {
						className: "ws__grip",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ n(K, {
					className: "ws__pane ws__pane--main",
					children: /* @__PURE__ */ r(G, {
						orientation: "vertical",
						id: "inner",
						children: [
							/* @__PURE__ */ r(K, {
								defaultSize: "65%",
								className: "ws__pane",
								children: [/* @__PURE__ */ n("header", {
									className: "ws__head",
									children: /* @__PURE__ */ n("span", {
										className: "mono",
										children: "top · editor"
									})
								}), /* @__PURE__ */ n("pre", {
									className: "ws__code",
									children: "<Tree>\n  <Branch label=\"Vol. 01\">\n    <Leaf>Accordion</Leaf>\n    <Leaf>Checkbox</Leaf>\n  </Branch>\n</Tree>"
								})]
							}),
							/* @__PURE__ */ n(q, {
								className: "ws__handle ws__handle--v",
								children: /* @__PURE__ */ n("span", {
									className: "ws__grip ws__grip--v",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ r(K, {
								defaultSize: "35%",
								className: "ws__pane",
								children: [/* @__PURE__ */ n("header", {
									className: "ws__head",
									children: /* @__PURE__ */ n("span", {
										className: "mono",
										children: "bottom · console"
									})
								}), /* @__PURE__ */ r("p", {
									className: "ws__console",
									children: [
										"Drag the handles, or focus them with ",
										/* @__PURE__ */ n("kbd", { children: "Tab" }),
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
export { J as Accordion, ie as ActionButton, ce as Alert, ue as AlertDialog, je as AriaRouterBridge, de as Breadcrumb, se as ButtonGroup, oe as ButtonRow, fe as Carousel, pe as Checkbox, me as Combobox, ge as Dialog, _e as Disclosure, ye as Feed, be as Grid, Se as Landmarks, Ce as Link, we as Listbox, Ee as MenuButton, De as Menubar, ke as Meter, Ae as RadioGroup, Me as Slider, Ne as SliderMulti, Pe as Spinbutton, le as StatusAlert, $ as Switch, Fe as Table, Y as Tabs, ae as ToggleActionButton, Ie as Toolbar, Le as Tooltip, ze as TreeView, Ve as Treegrid, He as WindowSplitter, he as getComboboxSelectionLabel, Te as getListboxSelectionLabels, Z as makeFeedPost };
