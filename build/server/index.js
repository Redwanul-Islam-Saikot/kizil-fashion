import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AlignJustify, Briefcase, ChevronRight, Copy, Facebook, Heart, Instagram, Mail, MapPin, Phone, Search, Send, ShoppingCart, Twitter, User, Zap } from "lucide-react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region shared/Navbar.tsx
function KizilHeader() {
	const [categoryOpen, setCategoryOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "w-full font-sans",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center gap-4 border-b border-gray-200 px-4 py-4 sm:px-6 lg:gap-6",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#",
					className: "flex-shrink-0 text-2xl font-serif font-bold tracking-wide text-gray-900 sm:text-3xl",
					children: ["KI", /* @__PURE__ */ jsx("span", {
						className: "text-orange-600",
						children: "ZIL"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-shrink-0 items-center gap-2",
					children: [/* @__PURE__ */ jsx(Phone, {
						className: "h-5 w-5 text-orange-600",
						strokeWidth: 2
					}), /* @__PURE__ */ jsxs("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs text-gray-400",
							children: "Contact us 24/7"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm font-bold text-gray-900",
							children: "(02)-55048474"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "order-2 w-full flex-1 sm:order-none sm:w-auto sm:min-w-[200px]",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2.5",
						children: [/* @__PURE__ */ jsx(Search, {
							className: "h-4 w-4 flex-shrink-0 text-orange-600",
							strokeWidth: 2.5
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							placeholder: "Search for products",
							className: "w-full bg-transparent text-sm text-gray-500 placeholder-gray-400 outline-none"
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "order-3 ml-auto flex flex-wrap items-center gap-4 sm:order-none sm:gap-6",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "flex items-center gap-2 text-gray-700 hover:text-orange-600",
							children: [/* @__PURE__ */ jsx(User, {
								className: "h-5 w-5",
								strokeWidth: 1.75
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: "Your Account"
							})]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "flex items-center gap-2 text-gray-700 hover:text-orange-600",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(Heart, {
									className: "h-5 w-5",
									strokeWidth: 1.75
								}), /* @__PURE__ */ jsx("span", {
									className: "absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white",
									children: "0"
								})]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: "Wishlist"
							})]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "flex items-center gap-2 text-gray-700 hover:text-orange-600",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(ShoppingCart, {
									className: "h-5 w-5",
									strokeWidth: 1.75
								}), /* @__PURE__ */ jsx("span", {
									className: "absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white",
									children: "0"
								})]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: "Cart"
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center justify-between gap-4 bg-gray-900 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setCategoryOpen((open) => !open),
						className: "flex items-center gap-2 rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap",
						children: [/* @__PURE__ */ jsx(AlignJustify, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						}), "SHOP BY CATEGORY"]
					}), categoryOpen && /* @__PURE__ */ jsx("div", {
						className: "absolute left-0 top-full z-20 mt-2 w-60 rounded-lg bg-white shadow-lg ring-1 ring-black/5",
						children: /* @__PURE__ */ jsx("div", {
							className: "py-2",
							children: [
								"Tops Collection",
								"Bottoms Wear",
								"Loungewear",
								"Scarves & Wraps",
								"Accessories"
							].map((category) => /* @__PURE__ */ jsxs("a", {
								href: "#",
								className: "flex items-center justify-between px-4 py-3 text-sm text-gray-900 hover:bg-gray-50",
								children: [category, /* @__PURE__ */ jsx(ChevronRight, {
									className: "h-4 w-4 text-gray-400",
									strokeWidth: 2
								})]
							}, category))
						})
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-sm font-medium text-gray-200 hover:text-white",
							children: "Our Collections"
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "flex items-center gap-1.5 text-sm font-medium text-gray-200 hover:text-white",
							children: [/* @__PURE__ */ jsx(Zap, {
								className: "h-4 w-4 text-orange-500",
								strokeWidth: 2,
								fill: "currentColor"
							}), "Flash Deals"]
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-sm font-medium text-gray-200 hover:text-white",
							children: "New Arrival"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-sm font-medium text-orange-500 hover:text-orange-400",
							children: "Bundle Products"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-4 sm:gap-6 lg:ml-8 lg:gap-8",
					children: [/* @__PURE__ */ jsxs("a", {
						href: "#",
						className: "flex items-center gap-1.5 text-sm font-medium text-gray-200 hover:text-white",
						children: [/* @__PURE__ */ jsx(Briefcase, {
							className: "h-4 w-4 text-orange-500",
							strokeWidth: 2
						}), "Corporate Enquiries"]
					}), /* @__PURE__ */ jsxs("a", {
						href: "#",
						className: "flex items-center gap-1.5 text-sm font-medium text-gray-200 hover:text-white",
						children: [/* @__PURE__ */ jsx(MapPin, {
							className: "h-4 w-4 text-orange-500",
							strokeWidth: 2
						}), "Track Your Order"]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region shared/Footer.tsx
function KizilFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "w-full font-sans bg-[#f5f5f5]",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-10 px-6 py-10 sm:px-10 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4 md:w-full lg:w-auto lg:flex-[2]",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "#",
								className: "inline-block text-3xl font-serif font-bold tracking-wide text-gray-900",
								children: ["KI", /* @__PURE__ */ jsx("span", {
									className: "text-orange-600",
									children: "ZIL"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3 text-sm text-gray-500",
								children: [/* @__PURE__ */ jsx(Send, {
									className: "mt-0.5 h-4 w-4 flex-shrink-0 -rotate-45 text-gray-700",
									strokeWidth: 1.75
								}), /* @__PURE__ */ jsx("span", { children: "29 SE 2nd Ave, Miami Florida 33131, United States" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 text-sm text-gray-500",
								children: [
									/* @__PURE__ */ jsx(Mail, {
										className: "h-4 w-4 flex-shrink-0 text-gray-700",
										strokeWidth: 1.75
									}),
									/* @__PURE__ */ jsx("span", { children: "info@kinzil.com" }),
									/* @__PURE__ */ jsx(Copy, {
										className: "h-4 w-4 flex-shrink-0 cursor-pointer text-gray-400 hover:text-gray-600",
										strokeWidth: 1.75
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg font-bold text-gray-900",
								children: "(+92) 3942 7879"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3 md:flex-1 lg:flex-1",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold uppercase tracking-wide text-gray-900",
							children: "Shopping"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3 text-sm text-gray-500",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:text-orange-600",
									children: "Wishlist"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:text-orange-600",
									children: "Cart"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:text-orange-600",
									children: "Shop by Category"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3 md:flex-1 lg:flex-1",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold uppercase tracking-wide text-gray-900",
							children: "Information"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3 text-sm text-gray-500",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:text-orange-600",
									children: "Track My Order"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:text-orange-600",
									children: "Corporate Enquires"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:text-orange-600",
									children: "FAQs"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3 md:flex-1 lg:flex-1",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold uppercase tracking-wide text-gray-900",
							children: "Account"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3 text-sm text-gray-500",
							children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "#",
								className: "hover:text-orange-600",
								children: "My Account"
							}) }), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "#",
								className: "hover:text-orange-600",
								children: "My Orders"
							}) })]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-gray-200" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-center gap-6 px-6 py-6 text-sm text-gray-500 sm:px-10 lg:justify-between",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "text-center lg:text-left",
						children: [
							"Copyright ©",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "text-orange-600 hover:underline",
								children: "360D Soul Limited"
							}),
							" ",
							"2026. All rights reserved."
						]
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#",
						"aria-label": "Facebook",
						className: "text-gray-800 hover:text-orange-600",
						children: /* @__PURE__ */ jsx(Facebook, {
							className: "h-5 w-5",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#",
						"aria-label": "Twitter",
						className: "text-gray-800 hover:text-orange-600",
						children: /* @__PURE__ */ jsx(Twitter, {
							className: "h-5 w-5",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#",
						"aria-label": "Instagram",
						className: "text-gray-800 hover:text-orange-600",
						children: /* @__PURE__ */ jsx(Instagram, {
							className: "h-5 w-5",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#",
						className: "hover:text-orange-600",
						children: "Teams & Condition"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#",
						className: "hover:text-orange-600",
						children: "Privacy & Policy"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#",
						className: "hover:text-orange-600",
						children: "Refund Policy"
					})
				]
			})
		]
	});
}
//#endregion
//#region layout/MainLayout.tsx
var MainLayout_exports = /* @__PURE__ */ __exportAll({ default: () => MainLayout_default });
var MainLayout_default = UNSAFE_withComponentProps(function MainLayout() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(KizilHeader, {}),
		/* @__PURE__ */ jsx(Outlet, {}),
		/* @__PURE__ */ jsx(KizilFooter, {})
	] });
});
//#endregion
//#region app/welcome/welcome.tsx
function Welcome() {
	return /* @__PURE__ */ jsx("h1", { children: "Hello" });
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Kizil Fashion" }, {
		name: "description",
		content: "Welcome to Kizil Fashion!"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(Welcome, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-CA4tIQAn.js",
		"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-Bqbv7jHH.js",
			"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
			"css": ["/assets/root-C-hMvmbU.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"../layout/MainLayout": {
			"id": "../layout/MainLayout",
			"parentId": "root",
			"path": void 0,
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/MainLayout-G1hd7UzM.js",
			"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "../layout/MainLayout",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-ePVW-BSQ.js",
			"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-41f40511.js",
	"version": "41f40511",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": true,
	"v8_trailingSlashAwareDataRequests": true,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": true,
	"v8_splitRouteModules": true,
	"v8_viteEnvironmentApi": true
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"../layout/MainLayout": {
		id: "../layout/MainLayout",
		parentId: "root",
		path: void 0,
		index: void 0,
		caseSensitive: void 0,
		module: MainLayout_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "../layout/MainLayout",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
