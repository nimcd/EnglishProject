// All code and conventions are protected by copyright
! function(e, t, n) {
	function i() {
		this.rules = L.filter(L.rules, function(e) {
			return "elementexists" === e.event
		})
	}

	function a() {
		L.getToolsByType("nielsen").length > 0 && L.domReady(L.bind(this.initialize, this))
	}

	function r() {
		L.addEventHandler(e, "orientationchange", r.orientationChange)
	}

	function o() {
		var e = this.eventRegex = /^hover\(([0-9]+)\)$/,
			t = this.rules = [];
		L.each(L.rules, function(n) {
			var i = n.event.match(e);
			i && t.push([Number(n.event.match(e)[1]), n.selector])
		})
	}

	function s() {
		this.defineEvents(), this.visibilityApiHasPriority = !0, t.addEventListener ? this.setVisibilityApiPriority(!1) : this.attachDetachOlderEventListeners(!0, t, "focusout");
		L.bindEvent("aftertoolinit", function() {
			L.fireEvent(L.visibility.isHidden() ? "tabblur" : "tabfocus")
		})
	}

	function c() {
		this.lastURL = L.URL(), this._fireIfURIChanged = L.bind(this.fireIfURIChanged, this), this._onPopState = L.bind(this.onPopState, this), this._onHashChange = L.bind(this.onHashChange, this), this._pushState = L.bind(this.pushState, this), this._replaceState = L.bind(this.replaceState, this), this.initialize()
	}

	function l() {
		this.rules = L.filter(L.rules, function(e) {
			return "videoplayed" === e.event.substring(0, 11)
		}), this.eventHandler = L.bind(this.onUpdateTime, this)
	}

	function u(e) {
		this.delay = 250, this.FB = e, L.domReady(L.bind(function() {
			L.poll(L.bind(this.initialize, this), this.delay, 8)
		}, this))
	}

	function d(t) {
		L.domReady(L.bind(function() {
			this.twttr = t || e.twttr, this.initialize()
		}, this))
	}

	function h(t) {
		t = t || L.rules, this.rules = L.filter(t, function(e) {
			return "inview" === e.event
		}), this.elements = [], this.eventHandler = L.bind(this.track, this), L.addEventHandler(e, "scroll", this.eventHandler), L.addEventHandler(e, "load", this.eventHandler)
	}

	function f() {
		var e = L.filter(L.rules, function(e) {
			return 0 === e.event.indexOf("dataelementchange")
		});
		this.dataElementsNames = L.map(e, function(e) {
			var t = e.event.match(/dataelementchange\((.*)\)/i);
			return t[1]
		}, this), this.initPolling()
	}

	function g(e) {
		L.BaseTool.call(this, e), this.name = e.name || "VisitorID", this.initialize()
	}

	function p(e) {
		L.BaseTool.call(this, e), this.name = e.name || "Basic"
	}

	function m(e) {
		L.BaseTool.call(this, e), this.styleElements = {}, this.targetPageParamsStore = {}
	}

	function v(e) {
		L.BaseTool.call(this, e)
	}

	function y(e) {
		L.BaseTool.call(this, e)
	}

	function b(e) {
		L.BaseTool.call(this, e), this.varBindings = {}, this.events = [], this.products = [], this.customSetupFuns = []
	}

	function k() {
		L.BaseTool.call(this), this.asyncScriptCallbackQueue = [], this.argsForBlockingScripts = []
	}

	function S(e) {
		L.BaseTool.call(this, e), this.defineListeners(), this.beaconMethod = "plainBeacon", this.adapt = new S.DataAdapters, this.dataProvider = new S.DataProvider.Aggregate
	}
	var E = Object.prototype.toString,
		P = e._satellite && e._satellite.override,
		L = {
			initialized: !1,
			$data: function(e, t, i) {
				if (e) {
					var a = "__satellite__",
						r = L.dataCache,
						o = e[a];
					o || (o = e[a] = L.uuid++);
					var s = r[o];
					return s || (s = r[o] = {}), i === n ? s[t] : void(s[t] = i)
				}
			},
			uuid: 1,
			dataCache: {},
			keys: function(e) {
				var t = [];
				for (var n in e) e.hasOwnProperty(n) && t.push(n);
				return t
			},
			values: function(e) {
				var t = [];
				for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
				return t
			},
			isArray: Array.isArray || function(e) {
				return "[object Array]" === E.apply(e)
			},
			isObject: function(e) {
				return null != e && !L.isArray(e) && "object" == typeof e
			},
			isString: function(e) {
				return "string" == typeof e
			},
			isNumber: function(e) {
				return "[object Number]" === E.apply(e) && !L.isNaN(e)
			},
			isNaN: function(e) {
				return e !== e
			},
			isRegex: function(e) {
				return e instanceof RegExp
			},
			isLinkTag: function(e) {
				return !(!e || !e.nodeName || "a" !== e.nodeName.toLowerCase())
			},
			each: function(e, t, n) {
				for (var i = 0, a = e.length; a > i; i++) t.call(n, e[i], i, e)
			},
			map: function(e, t, n) {
				for (var i = [], a = 0, r = e.length; r > a; a++) i.push(t.call(n, e[a], a, e));
				return i
			},
			filter: function(e, t, n) {
				for (var i = [], a = 0, r = e.length; r > a; a++) {
					var o = e[a];
					t.call(n, o, a, e) && i.push(o)
				}
				return i
			},
			any: function(e, t, n) {
				for (var i = 0, a = e.length; a > i; i++) {
					var r = e[i];
					if (t.call(n, r, i, e)) return !0
				}
				return !1
			},
			every: function(e, t, n) {
				for (var i = !0, a = 0, r = e.length; r > a; a++) {
					var o = e[a];
					i = i && t.call(n, o, a, e)
				}
				return i
			},
			contains: function(e, t) {
				return -1 !== L.indexOf(e, t)
			},
			indexOf: function(e, t) {
				if (e.indexOf) return e.indexOf(t);
				for (var n = e.length; n--;)
					if (t === e[n]) return n;
				return -1
			},
			find: function(e, t, n) {
				if (!e) return null;
				for (var i = 0, a = e.length; a > i; i++) {
					var r = e[i];
					if (t.call(n, r, i, e)) return r
				}
				return null
			},
			textMatch: function(e, t) {
				if (null == t) throw new Error("Illegal Argument: Pattern is not present");
				return null == e ? !1 : "string" == typeof t ? e === t : t instanceof RegExp ? t.test(e) : !1
			},
			stringify: function(e, t) {
				if (t = t || [], L.isObject(e)) {
					if (L.contains(t, e)) return "<Cycle>";
					t.push(e)
				}
				if (L.isArray(e)) return "[" + L.map(e, function(e) {
					return L.stringify(e, t)
				}).join(",") + "]";
				if (L.isString(e)) return '"' + String(e) + '"';
				if (L.isObject(e)) {
					var n = [];
					for (var i in e) e.hasOwnProperty(i) && n.push(i + ": " + L.stringify(e[i], t));
					return "{" + n.join(", ") + "}"
				}
				return String(e)
			},
			trim: function(e) {
				return null == e ? null : e.trim ? e.trim() : e.replace(/^ */, "").replace(/ *$/, "")
			},
			bind: function(e, t) {
				return function() {
					return e.apply(t, arguments)
				}
			},
			throttle: function(e, t) {
				var n = null;
				return function() {
					var i = this,
						a = arguments;
					clearTimeout(n), n = setTimeout(function() {
						e.apply(i, a)
					}, t)
				}
			},
			domReady: function(e) {
				function n(e) {
					for (h = 1; e = a.shift();) e()
				}
				var i, a = [],
					r = !1,
					o = t,
					s = o.documentElement,
					c = s.doScroll,
					l = "DOMContentLoaded",
					u = "addEventListener",
					d = "onreadystatechange",
					h = /^loade|^c/.test(o.readyState);
				return o[u] && o[u](l, i = function() {
					o.removeEventListener(l, i, r), n()
				}, r), c && o.attachEvent(d, i = function() {
					/^c/.test(o.readyState) && (o.detachEvent(d, i), n())
				}), e = c ? function(t) {
					self != top ? h ? t() : a.push(t) : function() {
						try {
							s.doScroll("left")
						} catch (n) {
							return setTimeout(function() {
								e(t)
							}, 50)
						}
						t()
					}()
				} : function(e) {
					h ? e() : a.push(e)
				}
			}(),
			loadScript: function(e, n) {
				var i = t.createElement("script");
				L.scriptOnLoad(e, i, n), i.src = e, t.getElementsByTagName("head")[0].appendChild(i)
			},
			scriptOnLoad: function(e, t, n) {
				function i(e) {
					e && L.logError(e), n && n(e)
				}
				"onload" in t ? (t.onload = function() {
					i()
				}, t.onerror = function() {
					i(new Error("Failed to load script " + e))
				}) : "readyState" in t && (t.onreadystatechange = function() {
					var e = t.readyState;
					("loaded" === e || "complete" === e) && (t.onreadystatechange = null, i())
				})
			},
			loadScriptOnce: function(e, t) {
				L.loadedScriptRegistry[e] || L.loadScript(e, function(n) {
					n || (L.loadedScriptRegistry[e] = !0), t && t(n)
				})
			},
			loadedScriptRegistry: {},
			loadScriptSync: function(e) {
				return t.write ? L.domReadyFired ? void L.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1) : (e.indexOf('"') > -1 && (e = encodeURI(e)), void t.write('<script src="' + e + '"></script>')) : void L.notify('Cannot load sync the "' + e + '" script because "document.write" is not available', 1)
			},
			pushAsyncScript: function(e) {
				L.tools["default"].pushAsyncScript(e)
			},
			pushBlockingScript: function(e) {
				L.tools["default"].pushBlockingScript(e)
			},
			addEventHandler: e.addEventListener ? function(e, t, n) {
				e.addEventListener(t, n, !1)
			} : function(e, t, n) {
				e.attachEvent("on" + t, n)
			},
			removeEventHandler: e.removeEventListener ? function(e, t, n) {
				e.removeEventListener(t, n, !1)
			} : function(e, t, n) {
				e.detachEvent("on" + t, n)
			},
			preventDefault: e.addEventListener ? function(e) {
				e.preventDefault()
			} : function(e) {
				e.returnValue = !1
			},
			stopPropagation: function(e) {
				e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
			},
			containsElement: function(e, t) {
				return e.contains ? e.contains(t) : !!(16 & e.compareDocumentPosition(t))
			},
			matchesCss: function(n) {
				function i(e, t) {
					var n = t.tagName;
					return n ? e.toLowerCase() === n.toLowerCase() : !1
				}
				var a = n.matchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector || n.msMatchesSelector;
				return a ? function(n, i) {
					if (i === t || i === e) return !1;
					try {
						return a.call(i, n)
					} catch (r) {
						return !1
					}
				} : n.querySelectorAll ? function(e, t) {
					var n = t.parentNode;
					if (!n) return !1;
					if (e.match(/^[a-z]+$/i)) return i(e, t);
					try {
						for (var a = t.parentNode.querySelectorAll(e), r = a.length; r--;)
							if (a[r] === t) return !0
					} catch (o) {}
					return !1
				} : function(e, t) {
					if (e.match(/^[a-z]+$/i)) return i(e, t);
					try {
						return L.Sizzle.matches(e, [t]).length > 0
					} catch (n) {
						return !1
					}
				}
			}(t.documentElement),
			cssQuery: function(e) {
				return e.querySelectorAll ? function(t, n) {
					var i;
					try {
						i = e.querySelectorAll(t)
					} catch (a) {
						i = []
					}
					n(i)
				} : function(e, t) {
					if (L.Sizzle) {
						var n;
						try {
							n = L.Sizzle(e)
						} catch (i) {
							n = []
						}
						t(n)
					} else L.sizzleQueue.push([e, t])
				}
			}(t),
			hasAttr: function(e, t) {
				return e.hasAttribute ? e.hasAttribute(t) : e[t] !== n
			},
			inherit: function(e, t) {
				var n = function() {};
				n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
			},
			extend: function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			},
			toArray: function() {
				try {
					var e = Array.prototype.slice;
					return e.call(t.documentElement.childNodes, 0)[0].nodeType,
						function(t) {
							return e.call(t, 0)
						}
				} catch (n) {
					return function(e) {
						for (var t = [], n = 0, i = e.length; i > n; n++) t.push(e[n]);
						return t
					}
				}
			}(),
			equalsIgnoreCase: function(e, t) {
				return null == e ? null == t : null == t ? !1 : String(e).toLowerCase() === String(t).toLowerCase()
			},
			poll: function(e, t, n) {
				function i() {
					L.isNumber(n) && a++ >= n || e() || setTimeout(i, t)
				}
				var a = 0;
				t = t || 1e3, i()
			},
			escapeForHtml: function(e) {
				return e ? String(e).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#x27;").replace(/\//g, "&#x2F;") : e
			}
		};
	L.availableTools = {}, L.availableEventEmitters = [], L.fireOnceEvents = ["condition", "elementexists"], L.initEventEmitters = function() {
			L.eventEmitters = L.map(L.availableEventEmitters, function(e) {
				return new e
			})
		}, L.eventEmitterBackgroundTasks = function() {
			L.each(L.eventEmitters, function(e) {
				"backgroundTasks" in e && e.backgroundTasks()
			})
		}, L.initTools = function(e) {
			var t = {
					"default": new k
				},
				n = L.settings.euCookieName || "sat_track";
			for (var i in e)
				if (e.hasOwnProperty(i)) {
					var a, r, o;
					if (a = e[i], a.euCookie) {
						var s = "true" !== L.readCookie(n);
						if (s) continue
					}
					if (r = L.availableTools[a.engine], !r) {
						var c = [];
						for (var l in L.availableTools) L.availableTools.hasOwnProperty(l) && c.push(l);
						throw new Error("No tool engine named " + a.engine + ", available: " + c.join(",") + ".")
					}
					o = new r(a), o.id = i, t[i] = o
				}
			return t
		}, L.preprocessArguments = function(e, t, n, i, a) {
			function r(e) {
				return i && L.isString(e) ? e.toLowerCase() : e
			}

			function o(e) {
				var c = {};
				for (var l in e)
					if (e.hasOwnProperty(l)) {
						var u = e[l];
						L.isObject(u) ? c[l] = o(u) : L.isArray(u) ? c[l] = s(u, i) : c[l] = r(L.replace(u, t, n, a))
					}
				return c
			}

			function s(e, i) {
				for (var a = [], s = 0, c = e.length; c > s; s++) {
					var l = e[s];
					L.isString(l) ? l = r(L.replace(l, t, n)) : l && l.constructor === Object && (l = o(l)), a.push(l)
				}
				return a
			}
			return e ? s(e, i) : e
		}, L.execute = function(e, t, n, i) {
			function a(a) {
				var r = i[a || "default"];
				if (r) try {
					r.triggerCommand(e, t, n)
				} catch (o) {
					L.logError(o)
				}
			}
			if (!_satellite.settings.hideActivity)
				if (i = i || L.tools, e.engine) {
					var r = e.engine;
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var s = i[o];
							s.settings && s.settings.engine === r && a(o)
						}
				} else e.tool instanceof Array ? L.each(e.tool, function(e) {
					a(e)
				}) : a(e.tool)
		}, L.Logger = {
			outputEnabled: !1,
			messages: [],
			keepLimit: 100,
			flushed: !1,
			LEVELS: [null, null, "log", "info", "warn", "error"],
			message: function(e, t) {
				var n = this.LEVELS[t] || "log";
				this.messages.push([n, e]), this.messages.length > this.keepLimit && this.messages.shift(), this.outputEnabled && this.echo(n, e)
			},
			getHistory: function() {
				return this.messages
			},
			clearHistory: function() {
				this.messages = []
			},
			setOutputState: function(e) {
				this.outputEnabled != e && (this.outputEnabled = e, e ? this.flush() : this.flushed = !1)
			},
			echo: function(t, n) {
				e.console && e.console[t]("SATELLITE: " + n)
			},
			flush: function() {
				this.flushed || (L.each(this.messages, function(e) {
					e[2] !== !0 && (this.echo(e[0], e[1]), e[2] = !0)
				}, this), this.flushed = !0)
			}
		}, L.notify = L.bind(L.Logger.message, L.Logger), L.cleanText = function(e) {
			return null == e ? null : L.trim(e).replace(/\s+/g, " ")
		}, L.cleanText.legacy = function(e) {
			return null == e ? null : L.trim(e).replace(/\s{2,}/g, " ").replace(/[^\000-\177]*/g, "")
		}, L.text = function(e) {
			return e.textContent || e.innerText
		}, L.specialProperties = {
			text: L.text,
			cleanText: function(e) {
				return L.cleanText(L.text(e))
			}
		}, L.getObjectProperty = function(e, t, i) {
			for (var a, r = t.split("."), o = e, s = L.specialProperties, c = 0, l = r.length; l > c; c++) {
				if (null == o) return n;
				var u = r[c];
				if (i && "@" === u.charAt(0)) {
					var d = u.slice(1);
					o = s[d](o)
				} else if (o.getAttribute && (a = u.match(/^getAttribute\((.+)\)$/))) {
					var h = a[1];
					o = o.getAttribute(h)
				} else o = o[u]
			}
			return o
		}, L.getToolsByType = function(e) {
			if (!e) throw new Error("Tool type is missing");
			var t = [];
			for (var n in L.tools)
				if (L.tools.hasOwnProperty(n)) {
					var i = L.tools[n];
					i.settings && i.settings.engine === e && t.push(i)
				}
			return t
		}, L.setVar = function() {
			var e = L.data.customVars;
			if (null == e && (L.data.customVars = {}, e = L.data.customVars), "string" == typeof arguments[0]) {
				var t = arguments[0];
				e[t] = arguments[1]
			} else if (arguments[0]) {
				var n = arguments[0];
				for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
			}
		}, L.dataElementSafe = function(e, t) {
			if (arguments.length > 2) {
				var n = arguments[2];
				"pageview" === t ? L.dataElementSafe.pageviewCache[e] = n : "session" === t ? L.setCookie("_sdsat_" + e, n) : "visitor" === t && L.setCookie("_sdsat_" + e, n, 730)
			} else {
				if ("pageview" === t) return L.dataElementSafe.pageviewCache[e];
				if ("session" === t || "visitor" === t) return L.readCookie("_sdsat_" + e)
			}
		}, L.dataElementSafe.pageviewCache = {}, L.realGetDataElement = function(t) {
			var n;
			return t.selector ? L.hasSelector && L.cssQuery(t.selector, function(e) {
				if (e.length > 0) {
					var i = e[0];
					"text" === t.property ? n = i.innerText || i.textContent : t.property in i ? n = i[t.property] : L.hasAttr(i, t.property) && (n = i.getAttribute(t.property))
				}
			}) : t.queryParam ? n = t.ignoreCase ? L.getQueryParamCaseInsensitive(t.queryParam) : L.getQueryParam(t.queryParam) : t.cookie ? n = L.readCookie(t.cookie) : t.jsVariable ? n = L.getObjectProperty(e, t.jsVariable) : t.customJS ? n = t.customJS() : t.contextHub && (n = t.contextHub()), L.isString(n) && t.cleanText && (n = L.cleanText(n)), n
		}, L.getDataElement = function(e, t, i) {
			if (i = i || L.dataElements[e], null == i) return L.settings.undefinedVarsReturnEmpty ? "" : null;
			var a = L.realGetDataElement(i);
			return a === n && i.storeLength ? a = L.dataElementSafe(e, i.storeLength) : a !== n && i.storeLength && L.dataElementSafe(e, i.storeLength, a), a || t || (a = i["default"] || ""), L.isString(a) && i.forceLowerCase && (a = a.toLowerCase()), a
		}, L.getVar = function(i, a, r) {
			var o, s, c = L.data.customVars,
				l = r ? r.target || r.srcElement : null,
				u = {
					uri: L.URI(),
					protocol: t.location.protocol,
					hostname: t.location.hostname
				};
			if (L.dataElements && i in L.dataElements) return L.getDataElement(i);
			if (s = u[i.toLowerCase()], s === n)
				if ("this." === i.substring(0, 5)) i = i.slice(5), s = L.getObjectProperty(a, i, !0);
				else if ("event." === i.substring(0, 6)) i = i.slice(6), s = L.getObjectProperty(r, i);
			else if ("target." === i.substring(0, 7)) i = i.slice(7), s = L.getObjectProperty(l, i);
			else if ("window." === i.substring(0, 7)) i = i.slice(7), s = L.getObjectProperty(e, i);
			else if ("param." === i.substring(0, 6)) i = i.slice(6), s = L.getQueryParam(i);
			else if (o = i.match(/^rand([0-9]+)$/)) {
				var d = Number(o[1]),
					h = (Math.random() * (Math.pow(10, d) - 1)).toFixed(0);
				s = Array(d - h.length + 1).join("0") + h
			} else s = L.getObjectProperty(c, i);
			return s
		}, L.getVars = function(e, t, n) {
			var i = {};
			return L.each(e, function(e) {
				i[e] = L.getVar(e, t, n)
			}), i
		}, L.replace = function(e, t, n, i) {
			return "string" != typeof e ? e : e.replace(/%(.*?)%/g, function(e, a) {
				var r = L.getVar(a, t, n);
				return null == r ? L.settings.undefinedVarsReturnEmpty ? "" : e : i ? L.escapeForHtml(r) : r
			})
		}, L.escapeHtmlParams = function(e) {
			return e.escapeHtml = !0, e
		}, L.searchVariables = function(e, t, n) {
			if (!e || 0 === e.length) return "";
			for (var i = [], a = 0, r = e.length; r > a; a++) {
				var o = e[a],
					s = L.getVar(o, t, n);
				i.push(o + "=" + escape(s))
			}
			return "?" + i.join("&")
		}, L.fireRule = function(e, t, n) {
			var i = e.trigger;
			if (i) {
				for (var a = 0, r = i.length; r > a; a++) {
					var o = i[a];
					L.execute(o, t, n)
				}
				L.contains(L.fireOnceEvents, e.event) && (e.expired = !0)
			}
		}, L.isLinked = function(e) {
			for (var t = e; t; t = t.parentNode)
				if (L.isLinkTag(t)) return !0;
			return !1
		}, L.firePageLoadEvent = function(e) {
			for (var n = t.location, i = {
					type: e,
					target: n
				}, a = L.pageLoadRules, r = L.evtHandlers[i.type], o = a.length; o--;) {
				var s = a[o];
				L.ruleMatches(s, i, n) && (L.notify('Rule "' + s.name + '" fired.', 1), L.fireRule(s, n, i))
			}
			for (var c in L.tools)
				if (L.tools.hasOwnProperty(c)) {
					var l = L.tools[c];
					l.endPLPhase && l.endPLPhase(e)
				}
			r && L.each(r, function(e) {
				e(i)
			})
		}, L.track = function(e) {
			e = e.replace(/^\s*/, "").replace(/\s*$/, "");
			for (var t = 0; t < L.directCallRules.length; t++) {
				var n = L.directCallRules[t];
				if (n.name === e) return L.notify('Direct call Rule "' + e + '" fired.', 1), void L.fireRule(n, location, {
					type: e
				})
			}
			L.notify('Direct call Rule "' + e + '" not found.', 1)
		}, L.basePath = function() {
			return L.data.host ? ("https:" === t.location.protocol ? "https://" + L.data.host.https : "http://" + L.data.host.http) + "/" : this.settings.basePath
		}, L.setLocation = function(t) {
			e.location = t
		}, L.parseQueryParams = function(e) {
			var t = function(e) {
				var t = e;
				try {
					t = decodeURIComponent(e)
				} catch (n) {}
				return t
			};
			if ("" === e || L.isString(e) === !1) return {};
			0 === e.indexOf("?") && (e = e.substring(1));
			var n = {},
				i = e.split("&");
			return L.each(i, function(e) {
				e = e.split("="), e[1] && (n[t(e[0])] = t(e[1]))
			}), n
		}, L.getCaseSensitivityQueryParamsMap = function(e) {
			var t = L.parseQueryParams(e),
				n = {};
			for (var i in t) t.hasOwnProperty(i) && (n[i.toLowerCase()] = t[i]);
			return {
				normal: t,
				caseInsensitive: n
			}
		}, L.updateQueryParams = function() {
			L.QueryParams = L.getCaseSensitivityQueryParamsMap(e.location.search)
		}, L.updateQueryParams(), L.getQueryParam = function(e) {
			return L.QueryParams.normal[e]
		}, L.getQueryParamCaseInsensitive = function(e) {
			return L.QueryParams.caseInsensitive[e.toLowerCase()]
		}, L.encodeObjectToURI = function(e) {
			if (L.isObject(e) === !1) return "";
			var t = [];
			for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
			return t.join("&")
		}, L.readCookie = function(e) {
			for (var i = e + "=", a = t.cookie.split(";"), r = 0; r < a.length; r++) {
				for (var o = a[r];
					" " == o.charAt(0);) o = o.substring(1, o.length);
				if (0 === o.indexOf(i)) return o.substring(i.length, o.length)
			}
			return n
		}, L.setCookie = function(e, n, i) {
			var a;
			if (i) {
				var r = new Date;
				r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3), a = "; expires=" + r.toGMTString()
			} else a = "";
			t.cookie = e + "=" + n + a + "; path=/"
		}, L.removeCookie = function(e) {
			L.setCookie(e, "", -1)
		}, L.getElementProperty = function(e, t) {
			if ("@" === t.charAt(0)) {
				var i = L.specialProperties[t.substring(1)];
				if (i) return i(e)
			}
			return "innerText" === t ? L.text(e) : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : n
		}, L.propertiesMatch = function(e, t) {
			if (e)
				for (var n in e)
					if (e.hasOwnProperty(n)) {
						var i = e[n],
							a = L.getElementProperty(t, n);
						if ("string" == typeof i && i !== a) return !1;
						if (i instanceof RegExp && !i.test(a)) return !1
					}
			return !0
		}, L.isRightClick = function(e) {
			var t;
			return e.which ? t = 3 == e.which : e.button && (t = 2 == e.button), t
		}, L.ruleMatches = function(e, t, n, i) {
			var a = e.condition,
				r = e.conditions,
				o = e.property,
				s = t.type,
				c = e.value,
				l = t.target || t.srcElement,
				u = n === l;
			if (e.event !== s && ("custom" !== e.event || e.customEvent !== s)) return !1;
			if (!L.ruleInScope(e)) return !1;
			if ("click" === e.event && L.isRightClick(t)) return !1;
			if (e.isDefault && i > 0) return !1;
			if (e.expired) return !1;
			if ("inview" === s && t.inviewDelay !== e.inviewDelay) return !1;
			if (!u && (e.bubbleFireIfParent === !1 || 0 !== i && e.bubbleFireIfChildFired === !1)) return !1;
			if (e.selector && !L.matchesCss(e.selector, n)) return !1;
			if (!L.propertiesMatch(o, n)) return !1;
			if (null != c)
				if ("string" == typeof c) {
					if (c !== n.value) return !1
				} else if (!c.test(n.value)) return !1;
			if (a) try {
				if (!a.call(n, t, l)) return L.notify('Condition for rule "' + e.name + '" not met.', 1), !1
			} catch (d) {
				return L.notify('Condition for rule "' + e.name + '" not met. Error: ' + d.message, 1), !1
			}
			if (r) {
				var h = L.find(r, function(i) {
					try {
						return !i.call(n, t, l)
					} catch (a) {
						return L.notify('Condition for rule "' + e.name + '" not met. Error: ' + a.message, 1), !0
					}
				});
				if (h) return L.notify("Condition " + h.toString() + ' for rule "' + e.name + '" not met.', 1), !1
			}
			return !0
		}, L.evtHandlers = {}, L.bindEvent = function(e, t) {
			var n = L.evtHandlers;
			n[e] || (n[e] = []), n[e].push(t)
		}, L.whenEvent = L.bindEvent, L.unbindEvent = function(e, t) {
			var n = L.evtHandlers;
			if (n[e]) {
				var i = L.indexOf(n[e], t);
				n[e].splice(i, 1)
			}
		}, L.bindEventOnce = function(e, t) {
			var n = function() {
				L.unbindEvent(e, n), t.apply(null, arguments)
			};
			L.bindEvent(e, n)
		}, L.isVMLPoisoned = function(e) {
			if (!e) return !1;
			try {
				e.nodeName
			} catch (t) {
				if ("Attribute only valid on v:image" === t.message) return !0
			}
			return !1
		}, L.handleEvent = function(e) {
			if (!L.$data(e, "eventProcessed")) {
				var t = e.type.toLowerCase(),
					n = e.target || e.srcElement,
					i = 0,
					a = L.rules,
					r = (L.tools, L.evtHandlers[e.type]);
				if (L.isVMLPoisoned(n)) return void L.notify("detected " + t + " on poisoned VML element, skipping.", 1);
				r && L.each(r, function(t) {
					t(e)
				});
				var o = n && n.nodeName;
				o ? L.notify("detected " + t + " on " + n.nodeName, 1) : L.notify("detected " + t, 1);
				for (var s = n; s; s = s.parentNode) {
					var c = !1;
					if (L.each(a, function(t) {
							L.ruleMatches(t, e, s, i) && (L.notify('Rule "' + t.name + '" fired.', 1), L.fireRule(t, s, e), i++, t.bubbleStop && (c = !0))
						}), c) break
				}
				L.$data(e, "eventProcessed", !0)
			}
		}, L.onEvent = t.querySelectorAll ? function(e) {
			L.handleEvent(e)
		} : function() {
			var e = [],
				t = function(t) {
					t.selector ? e.push(t) : L.handleEvent(t)
				};
			return t.pendingEvents = e, t
		}(), L.fireEvent = function(e, t) {
			L.onEvent({
				type: e,
				target: t
			})
		}, L.registerEvents = function(e, t) {
			for (var n = t.length - 1; n >= 0; n--) {
				var i = t[n];
				L.$data(e, i + ".tracked") || (L.addEventHandler(e, i, L.onEvent), L.$data(e, i + ".tracked", !0))
			}
		}, L.registerEventsForTags = function(e, n) {
			for (var i = e.length - 1; i >= 0; i--)
				for (var a = e[i], r = t.getElementsByTagName(a), o = r.length - 1; o >= 0; o--) L.registerEvents(r[o], n)
		}, L.setListeners = function() {
			var e = ["click", "submit"];
			L.each(L.rules, function(t) {
				"custom" === t.event && t.hasOwnProperty("customEvent") && !L.contains(e, t.customEvent) && e.push(t.customEvent)
			}), L.registerEvents(t, e)
		}, L.getUniqueRuleEvents = function() {
			return L._uniqueRuleEvents || (L._uniqueRuleEvents = [], L.each(L.rules, function(e) {
				-1 === L.indexOf(L._uniqueRuleEvents, e.event) && L._uniqueRuleEvents.push(e.event)
			})), L._uniqueRuleEvents
		}, L.setFormListeners = function() {
			if (!L._relevantFormEvents) {
				var e = ["change", "focus", "blur", "keypress"];
				L._relevantFormEvents = L.filter(L.getUniqueRuleEvents(), function(t) {
					return -1 !== L.indexOf(e, t)
				})
			}
			L._relevantFormEvents.length && L.registerEventsForTags(["input", "select", "textarea", "button"], L._relevantFormEvents)
		}, L.setVideoListeners = function() {
			if (!L._relevantVideoEvents) {
				var e = ["play", "pause", "ended", "volumechange", "stalled", "loadeddata"];
				L._relevantVideoEvents = L.filter(L.getUniqueRuleEvents(), function(t) {
					return -1 !== L.indexOf(e, t)
				})
			}
			L._relevantVideoEvents.length && L.registerEventsForTags(["video"], L._relevantVideoEvents)
		}, L.readStoredSetting = function(t) {
			try {
				return t = "sdsat_" + t, e.localStorage.getItem(t)
			} catch (n) {
				return L.notify("Cannot read stored setting from localStorage: " + n.message, 2), null
			}
		}, L.loadStoredSettings = function() {
			var e = L.readStoredSetting("debug"),
				t = L.readStoredSetting("hide_activity");
			e && (L.settings.notifications = "true" === e), t && (L.settings.hideActivity = "true" === t)
		}, L.isRuleActive = function(e, t) {
			function n(e, t) {
				return t = a(t, {
					hour: e[f](),
					minute: e[g]()
				}), Math.floor(Math.abs((e.getTime() - t.getTime()) / 864e5))
			}

			function i(e, t) {
				function n(e) {
					return 12 * e[d]() + e[h]()
				}
				return Math.abs(n(e) - n(t))
			}

			function a(e, t) {
				var n = new Date(e.getTime());
				for (var i in t)
					if (t.hasOwnProperty(i)) {
						var a = t[i];
						switch (i) {
							case "hour":
								n[p](a);
								break;
							case "minute":
								n[m](a);
								break;
							case "date":
								n[v](a)
						}
					}
				return n
			}

			function r(e, t) {
				var n = e[f](),
					i = e[g](),
					a = t[f](),
					r = t[g]();
				return 60 * n + i > 60 * a + r
			}

			function o(e, t) {
				var n = e[f](),
					i = e[g](),
					a = t[f](),
					r = t[g]();
				return 60 * a + r > 60 * n + i
			}
			var s = e.schedule;
			if (!s) return !0;
			var c = s.utc,
				l = c ? "getUTCDate" : "getDate",
				u = c ? "getUTCDay" : "getDay",
				d = c ? "getUTCFullYear" : "getFullYear",
				h = c ? "getUTCMonth" : "getMonth",
				f = c ? "getUTCHours" : "getHours",
				g = c ? "getUTCMinutes" : "getMinutes",
				p = c ? "setUTCHours" : "setHours",
				m = c ? "setUTCMinutes" : "setMinutes",
				v = c ? "setUTCDate" : "setDate";
			if (t = t || new Date, s.repeat) {
				if (r(s.start, t)) return !1;
				if (o(s.end, t)) return !1;
				if (t < s.start) return !1;
				if (s.endRepeat && t >= s.endRepeat) return !1;
				if ("daily" === s.repeat) {
					if (s.repeatEvery) {
						var y = n(s.start, t);
						if (y % s.repeatEvery !== 0) return !1
					}
				} else if ("weekly" === s.repeat) {
					if (s.days) {
						if (!L.contains(s.days, t[u]())) return !1
					} else if (s.start[u]() !== t[u]()) return !1;
					if (s.repeatEvery) {
						var b = n(s.start, t);
						if (b % (7 * s.repeatEvery) !== 0) return !1
					}
				} else if ("monthly" === s.repeat) {
					if (s.repeatEvery) {
						var k = i(s.start, t);
						if (k % s.repeatEvery !== 0) return !1
					}
					if (s.nthWeek && s.mthDay) {
						if (s.mthDay !== t[u]()) return !1;
						var S = Math.floor((t[l]() - t[u]() + 1) / 7);
						if (s.nthWeek !== S) return !1
					} else if (s.start[l]() !== t[l]()) return !1
				} else if ("yearly" === s.repeat) {
					if (s.start[h]() !== t[h]()) return !1;
					if (s.start[l]() !== t[l]()) return !1;
					if (s.repeatEvery) {
						var b = Math.abs(s.start[d]() - t[d]());
						if (b % s.repeatEvery !== 0) return !1
					}
				}
			} else {
				if (s.start > t) return !1;
				if (s.end < t) return !1
			}
			return !0
		}, L.isOutboundLink = function(e) {
			if (!e.getAttribute("href")) return !1;
			var t = e.hostname,
				n = (e.href, e.protocol);
			if ("http:" !== n && "https:" !== n) return !1;
			var i = L.any(L.settings.domainList, function(e) {
				return L.isSubdomainOf(t, e)
			});
			return i ? !1 : t !== location.hostname
		}, L.isLinkerLink = function(e) {
			return e.getAttribute && e.getAttribute("href") ? L.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match(/^javascript/i) && !L.isOutboundLink(e) : !1
		}, L.isSubdomainOf = function(e, t) {
			if (e === t) return !0;
			var n = e.length - t.length;
			return n > 0 ? L.equalsIgnoreCase(e.substring(n), t) : !1
		}, L.getVisitorId = function() {
			var e = L.getToolsByType("visitor_id");
			return 0 === e.length ? null : e[0].getInstance()
		}, L.URI = function() {
			var e = t.location.pathname + t.location.search;
			return L.settings.forceLowerCase && (e = e.toLowerCase()), e
		}, L.URL = function() {
			var e = t.location.href;
			return L.settings.forceLowerCase && (e = e.toLowerCase()), e
		}, L.filterRules = function() {
			function e(e) {
				return L.isRuleActive(e) ? !0 : !1
			}
			L.rules = L.filter(L.rules, e), L.pageLoadRules = L.filter(L.pageLoadRules, e)
		}, L.ruleInScope = function(e, n) {
			function i(e, t) {
				function n(e) {
					return t.match(e)
				}
				var i = e.include,
					r = e.exclude;
				if (i && a(i, t)) return !0;
				if (r) {
					if (L.isString(r) && r === t) return !0;
					if (L.isArray(r) && L.any(r, n)) return !0;
					if (L.isRegex(r) && n(r)) return !0
				}
				return !1
			}

			function a(e, t) {
				function n(e) {
					return t.match(e)
				}
				return L.isString(e) && e !== t ? !0 : L.isArray(e) && !L.any(e, n) ? !0 : L.isRegex(e) && !n(e) ? !0 : !1
			}
			n = n || t.location;
			var r = e.scope;
			if (!r) return !0;
			var o = r.URI,
				s = r.subdomains,
				c = r.domains,
				l = r.protocols,
				u = r.hashes;
			return o && i(o, n.pathname + n.search) ? !1 : s && i(s, n.hostname) ? !1 : c && a(c, n.hostname) ? !1 : l && a(l, n.protocol) ? !1 : u && i(u, n.hash) ? !1 : !0
		}, L.backgroundTasks = function() {
			+new Date;
			L.setFormListeners(), L.setVideoListeners(), L.loadStoredSettings(), L.registerNewElementsForDynamicRules(), L.eventEmitterBackgroundTasks(); + new Date
		}, L.registerNewElementsForDynamicRules = function() {
			function e(t, n) {
				var i = e.cache[t];
				return i ? n(i) : void L.cssQuery(t, function(i) {
					e.cache[t] = i, n(i)
				})
			}
			e.cache = {}, L.each(L.dynamicRules, function(t) {
				e(t.selector, function(e) {
					L.each(e, function(e) {
						var n = "custom" === t.event ? t.customEvent : t.event;
						L.$data(e, "dynamicRules.seen." + n) || (L.$data(e, "dynamicRules.seen." + n, !0), L.propertiesMatch(t.property, e) && L.registerEvents(e, [n]))
					})
				})
			})
		}, L.ensureCSSSelector = function() {
			return t.querySelectorAll ? void(L.hasSelector = !0) : (L.loadingSizzle = !0, L.sizzleQueue = [], void L.loadScript(L.basePath() + "selector.js", function() {
				if (!L.Sizzle) return void L.logError(new Error("Failed to load selector.js"));
				var e = L.onEvent.pendingEvents;
				L.each(e, function(e) {
					L.handleEvent(e)
				}, this), L.onEvent = L.handleEvent, L.hasSelector = !0, delete L.loadingSizzle, L.each(L.sizzleQueue, function(e) {
					L.cssQuery(e[0], e[1])
				}), delete L.sizzleQueue
			}))
		}, L.errors = [], L.logError = function(e) {
			L.errors.push(e), L.notify(e.name + " - " + e.message, 5)
		}, L.pageBottom = function() {
			L.initialized && (L.pageBottomFired = !0, L.firePageLoadEvent("pagebottom"))
		}, L.stagingLibraryOverride = function() {
			var e = "true" === L.readStoredSetting("stagingLibrary");
			if (e) {
				for (var n, i, a, r = t.getElementsByTagName("script"), o = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, s = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, c = 0, l = r.length; l > c && (a = r[c].getAttribute("src"), !a || (n || (n = a.match(o)), i || (i = a.match(s)), !i)); c++);
				if (n && !i) {
					var u = n[1] + "satelliteLib-" + n[2] + "-staging.js";
					if (t.write) t.write('<script src="' + u + '"></script>');
					else {
						var d = t.createElement("script");
						d.src = u, t.head.appendChild(d)
					}
					return !0
				}
			}
			return !1
		}, L.checkAsyncInclude = function() {
			e.satellite_asyncLoad && L.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
		}, L.hasMultipleDomains = function() {
			return !!L.settings.domainList && L.settings.domainList.length > 1
		}, L.handleOverrides = function() {
			if (P)
				for (var e in P) P.hasOwnProperty(e) && (L.data[e] = P[e])
		}, L.privacyManagerParams = function() {
			var e = {};
			L.extend(e, L.settings.privacyManagement);
			var t = [];
			for (var n in L.tools)
				if (L.tools.hasOwnProperty(n)) {
					var i = L.tools[n],
						a = i.settings;
					if (!a) continue;
					"sc" === a.engine && t.push(i)
				}
			var r = L.filter(L.map(t, function(e) {
				return e.getTrackingServer()
			}), function(e) {
				return null != e
			});
			e.adobeAnalyticsTrackingServers = r;
			for (var o = ["bannerText", "headline", "introductoryText", "customCSS"], s = 0; s < o.length; s++) {
				var c = o[s],
					l = e[c];
				if (l)
					if ("text" === l.type) e[c] = l.value;
					else {
						if ("data" !== l.type) throw new Error("Invalid type: " + l.type);
						e[c] = L.getVar(l.value)
					}
			}
			return e
		}, L.prepareLoadPrivacyManager = function() {
			function t(e) {
				function t() {
					r++, r === a.length && (n(), clearTimeout(o), e())
				}

				function n() {
					L.each(a, function(e) {
						L.unbindEvent(e.id + ".load", t)
					})
				}

				function i() {
					n(), e()
				}
				var a = L.filter(L.values(L.tools), function(e) {
					return e.settings && "sc" === e.settings.engine
				});
				if (0 === a.length) return e();
				var r = 0;
				L.each(a, function(e) {
					L.bindEvent(e.id + ".load", t)
				});
				var o = setTimeout(i, 5e3)
			}
			L.addEventHandler(e, "load", function() {
				t(L.loadPrivacyManager)
			})
		}, L.loadPrivacyManager = function() {
			var e = L.basePath() + "privacy_manager.js";
			L.loadScript(e, function() {
				var e = L.privacyManager;
				e.configure(L.privacyManagerParams()), e.openIfRequired()
			})
		}, L.init = function(t) {
			if (!L.stagingLibraryOverride()) {
				L.configurationSettings = t;
				var i = t.tools;
				delete t.tools;
				for (var a in t) t.hasOwnProperty(a) && (L[a] = t[a]);
				L.data.customVars === n && (L.data.customVars = {}), L.data.queryParams = L.QueryParams.normal, L.handleOverrides(), L.detectBrowserInfo(), L.trackVisitorInfo && L.trackVisitorInfo(), L.loadStoredSettings(), L.Logger.setOutputState(L.settings.notifications), L.checkAsyncInclude(), L.ensureCSSSelector(), L.filterRules(), L.dynamicRules = L.filter(L.rules, function(e) {
					return e.eventHandlerOnElement
				}), L.tools = L.initTools(i), L.initEventEmitters(), L.firePageLoadEvent("aftertoolinit"), L.settings.privacyManagement && L.prepareLoadPrivacyManager(), L.hasSelector && L.domReady(L.eventEmitterBackgroundTasks), L.setListeners(), L.domReady(function() {
					L.poll(function() {
						L.backgroundTasks()
					}, L.settings.recheckEvery || 3e3)
				}), L.domReady(function() {
					L.domReadyFired = !0, L.pageBottomFired || L.pageBottom(), L.firePageLoadEvent("domready")
				}), L.addEventHandler(e, "load", function() {
					L.firePageLoadEvent("windowload")
				}), L.firePageLoadEvent("pagetop"), L.initialized = !0
			}
		}, L.pageLoadPhases = ["aftertoolinit", "pagetop", "pagebottom", "domready", "windowload"], L.loadEventBefore = function(e, t) {
			return L.indexOf(L.pageLoadPhases, e) <= L.indexOf(L.pageLoadPhases, t)
		}, L.flushPendingCalls = function(e) {
			e.pending && (L.each(e.pending, function(t) {
				var n = t[0],
					i = t[1],
					a = t[2],
					r = t[3];
				n in e ? e[n].apply(e, [i, a].concat(r)) : e.emit ? e.emit(n, i, a, r) : L.notify("Failed to trigger " + n + " for tool " + e.id, 1)
			}), delete e.pending)
		}, L.setDebug = function(t) {
			try {
				e.localStorage.setItem("sdsat_debug", t)
			} catch (n) {
				L.notify("Cannot set debug mode: " + n.message, 2)
			}
		}, L.getUserAgent = function() {
			return navigator.userAgent
		}, L.detectBrowserInfo = function() {
			function e(e) {
				return function(t) {
					for (var n in e)
						if (e.hasOwnProperty(n)) {
							var i = e[n],
								a = i.test(t);
							if (a) return n
						}
					return "Unknown"
				}
			}
			var t = e({
					"IE Edge Mobile": /Windows Phone.*Edge/,
					"IE Edge": /Edge/,
					OmniWeb: /OmniWeb/,
					"Opera Mini": /Opera Mini/,
					"Opera Mobile": /Opera Mobi/,
					Opera: /Opera/,
					Chrome: /Chrome|CriOS|CrMo/,
					Firefox: /Firefox|FxiOS/,
					"IE Mobile": /IEMobile/,
					IE: /MSIE|Trident/,
					"Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
					Safari: /Safari/
				}),
				n = e({
					Blackberry: /BlackBerry|BB10/,
					"Symbian OS": /Symbian|SymbOS/,
					Maemo: /Maemo/,
					Android: /Android/,
					Linux: / Linux /,
					Unix: /FreeBSD|OpenBSD|CrOS/,
					Windows: /[\( ]Windows /,
					iOS: /iPhone|iPad|iPod/,
					MacOS: /Macintosh;/
				}),
				i = e({
					Nokia: /Symbian|SymbOS|Maemo/,
					"Windows Phone": /Windows Phone/,
					Blackberry: /BlackBerry|BB10/,
					Android: /Android/,
					iPad: /iPad/,
					iPod: /iPod/,
					iPhone: /iPhone/,
					Desktop: /.*/
				}),
				a = L.getUserAgent();
			L.browserInfo = {
				browser: t(a),
				os: n(a),
				deviceType: i(a)
			}
		}, L.isHttps = function() {
			return "https:" == t.location.protocol
		}, L.BaseTool = function(e) {
			this.settings = e || {}, this.forceLowerCase = L.settings.forceLowerCase, "forceLowerCase" in this.settings && (this.forceLowerCase = this.settings.forceLowerCase)
		}, L.BaseTool.prototype = {
			triggerCommand: function(e, t, n) {
				var i = this.settings || {};
				if (this.initialize && this.isQueueAvailable() && this.isQueueable(e) && n && L.loadEventBefore(n.type, i.loadOn)) return void this.queueCommand(e, t, n);
				var a = e.command,
					r = this["$" + a],
					o = r ? r.escapeHtml : !1,
					s = L.preprocessArguments(e.arguments, t, n, this.forceLowerCase, o);
				r ? r.apply(this, [t, n].concat(s)) : this.$missing$ ? this.$missing$(a, t, n, s) : L.notify("Failed to trigger " + a + " for tool " + this.id, 1)
			},
			endPLPhase: function(e) {},
			isQueueable: function(e) {
				return "cancelToolInit" !== e.command
			},
			isQueueAvailable: function() {
				return !this.initialized && !this.initializing
			},
			flushQueue: function() {
				this.pending && (L.each(this.pending, function(e) {
					this.triggerCommand.apply(this, e)
				}, this), this.pending = [])
			},
			queueCommand: function(e, t, n) {
				this.pending || (this.pending = []), this.pending.push([e, t, n])
			},
			$cancelToolInit: function() {
				this._cancelToolInit = !0
			}
		}, e._satellite = L, i.prototype.backgroundTasks = function() {
			L.each(this.rules, function(e) {
				L.cssQuery(e.selector, function(e) {
					if (e.length > 0) {
						var t = e[0];
						if (L.$data(t, "elementexists.seen")) return;
						L.$data(t, "elementexists.seen", !0), L.onEvent({
							type: "elementexists",
							target: t
						})
					}
				})
			})
		}, L.availableEventEmitters.push(i),
		a.prototype = {
			obue: !1,
			initialize: function() {
				this.attachCloseListeners()
			},
			obuePrevUnload: function() {},
			obuePrevBeforeUnload: function() {},
			newObueListener: function() {
				this.obue || (this.obue = !0, this.triggerBeacons())
			},
			attachCloseListeners: function() {
				this.prevUnload = e.onunload, this.prevBeforeUnload = e.onbeforeunload, e.onunload = L.bind(function(t) {
					this.prevUnload && setTimeout(L.bind(function() {
						this.prevUnload.call(e, t)
					}, this), 1), this.newObueListener()
				}, this), e.onbeforeunload = L.bind(function(t) {
					this.prevBeforeUnload && setTimeout(L.bind(function() {
						this.prevBeforeUnload.call(e, t)
					}, this), 1), this.newObueListener()
				}, this)
			},
			triggerBeacons: function() {
				L.fireEvent("leave", t)
			}
		}, L.availableEventEmitters.push(a), r.orientationChange = function(t) {
			var n = 0 === e.orientation ? "portrait" : "landscape";
			t.orientation = n, L.onEvent(t)
		}, L.availableEventEmitters.push(r), o.prototype = {
			backgroundTasks: function() {
				var e = this;
				L.each(this.rules, function(t) {
					var n = t[1],
						i = t[0];
					L.cssQuery(n, function(t) {
						L.each(t, function(t) {
							e.trackElement(t, i)
						})
					})
				}, this)
			},
			trackElement: function(e, t) {
				var n = this,
					i = L.$data(e, "hover.delays");
				i ? L.contains(i, t) || i.push(t) : (L.addEventHandler(e, "mouseover", function(t) {
					n.onMouseOver(t, e)
				}), L.addEventHandler(e, "mouseout", function(t) {
					n.onMouseOut(t, e)
				}), L.$data(e, "hover.delays", [t]))
			},
			onMouseOver: function(e, t) {
				var n = e.target || e.srcElement,
					i = e.relatedTarget || e.fromElement,
					a = (t === n || L.containsElement(t, n)) && !L.containsElement(t, i);
				a && this.onMouseEnter(t)
			},
			onMouseEnter: function(e) {
				var t = L.$data(e, "hover.delays"),
					n = L.map(t, function(t) {
						return setTimeout(function() {
							L.onEvent({
								type: "hover(" + t + ")",
								target: e
							})
						}, t)
					});
				L.$data(e, "hover.delayTimers", n)
			},
			onMouseOut: function(e, t) {
				var n = e.target || e.srcElement,
					i = e.relatedTarget || e.toElement,
					a = (t === n || L.containsElement(t, n)) && !L.containsElement(t, i);
				a && this.onMouseLeave(t)
			},
			onMouseLeave: function(e) {
				var t = L.$data(e, "hover.delayTimers");
				t && L.each(t, function(e) {
					clearTimeout(e)
				})
			}
		}, L.availableEventEmitters.push(o), s.prototype = {
			defineEvents: function() {
				this.oldBlurClosure = function() {
					L.fireEvent("tabblur", t)
				}, this.oldFocusClosure = L.bind(function() {
					this.visibilityApiHasPriority ? L.fireEvent("tabfocus", t) : null != L.visibility.getHiddenProperty() ? L.visibility.isHidden() || L.fireEvent("tabfocus", t) : L.fireEvent("tabfocus", t)
				}, this)
			},
			attachDetachModernEventListeners: function(e) {
				var n = 0 == e ? "removeEventHandler" : "addEventHandler";
				L[n](t, L.visibility.getVisibilityEvent(), this.handleVisibilityChange)
			},
			attachDetachOlderEventListeners: function(t, n, i) {
				var a = 0 == t ? "removeEventHandler" : "addEventHandler";
				L[a](n, i, this.oldBlurClosure), L[a](e, "focus", this.oldFocusClosure)
			},
			handleVisibilityChange: function() {
				L.visibility.isHidden() ? L.fireEvent("tabblur", t) : L.fireEvent("tabfocus", t)
			},
			setVisibilityApiPriority: function(t) {
				this.visibilityApiHasPriority = t, this.attachDetachOlderEventListeners(!1, e, "blur"), this.attachDetachModernEventListeners(!1), t ? null != L.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners(!0) : this.attachDetachOlderEventListeners(!0, e, "blur") : (this.attachDetachOlderEventListeners(!0, e, "blur"), null != L.visibility.getHiddenProperty() && this.attachDetachModernEventListeners(!0))
			},
			oldBlurClosure: null,
			oldFocusClosure: null,
			visibilityApiHasPriority: !0
		}, L.availableEventEmitters.push(s), c.prototype = {
			initialize: function() {
				this.setupHistoryAPI(), this.setupHashChange()
			},
			fireIfURIChanged: function() {
				var e = L.URL();
				this.lastURL !== e && (this.fireEvent(), this.lastURL = e)
			},
			fireEvent: function() {
				L.updateQueryParams(), L.onEvent({
					type: "locationchange",
					target: t
				})
			},
			setupSPASupport: function() {
				this.setupHistoryAPI(), this.setupHashChange()
			},
			setupHistoryAPI: function() {
				var t = e.history;
				t && (t.pushState && (this.originalPushState = t.pushState, t.pushState = this._pushState), t.replaceState && (this.originalReplaceState = t.replaceState, t.replaceState = this._replaceState)), L.addEventHandler(e, "popstate", this._onPopState)
			},
			pushState: function() {
				var e = this.originalPushState.apply(history, arguments);
				return this.onPushState(), e
			},
			replaceState: function() {
				var e = this.originalReplaceState.apply(history, arguments);
				return this.onReplaceState(), e
			},
			setupHashChange: function() {
				L.addEventHandler(e, "hashchange", this._onHashChange)
			},
			onReplaceState: function() {
				setTimeout(this._fireIfURIChanged, 0)
			},
			onPushState: function() {
				setTimeout(this._fireIfURIChanged, 0)
			},
			onPopState: function() {
				setTimeout(this._fireIfURIChanged, 0)
			},
			onHashChange: function() {
				setTimeout(this._fireIfURIChanged, 0)
			},
			uninitialize: function() {
				this.cleanUpHistoryAPI(), this.cleanUpHashChange()
			},
			cleanUpHistoryAPI: function() {
				history.pushState === this._pushState && (history.pushState = this.originalPushState), history.replaceState === this._replaceState && (history.replaceState = this.originalReplaceState), L.removeEventHandler(e, "popstate", this._onPopState)
			},
			cleanUpHashChange: function() {
				L.removeEventHandler(e, "hashchange", this._onHashChange)
			}
		}, L.availableEventEmitters.push(c), l.prototype = {
			backgroundTasks: function() {
				var e = this.eventHandler;
				L.each(this.rules, function(t) {
					L.cssQuery(t.selector || "video", function(t) {
						L.each(t, function(t) {
							L.$data(t, "videoplayed.tracked") || (L.addEventHandler(t, "timeupdate", L.throttle(e, 100)), L.$data(t, "videoplayed.tracked", !0))
						})
					})
				})
			},
			evalRule: function(e, t) {
				var n = t.event,
					i = e.seekable,
					a = i.start(0),
					r = i.end(0),
					o = e.currentTime,
					s = t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
				if (s) {
					var c = s[2],
						l = Number(s[1]),
						u = "%" === c ? function() {
							return 100 * (o - a) / (r - a) >= l
						} : function() {
							return o - a >= l
						};
					!L.$data(e, n) && u() && (L.$data(e, n, !0), L.onEvent({
						type: n,
						target: e
					}))
				}
			},
			onUpdateTime: function(e) {
				var t = this.rules,
					n = e.target;
				if (n.seekable && 0 !== n.seekable.length)
					for (var i = 0, a = t.length; a > i; i++) this.evalRule(n, t[i])
			}
		}, L.availableEventEmitters.push(l), u.prototype = {
			initialize: function() {
				return this.FB = this.FB || e.FB, this.FB && this.FB.Event && this.FB.Event.subscribe ? (this.bind(), !0) : void 0
			},
			bind: function() {
				this.FB.Event.subscribe("edge.create", function() {
					L.notify("tracking a facebook like", 1), L.onEvent({
						type: "facebook.like",
						target: t
					})
				}), this.FB.Event.subscribe("edge.remove", function() {
					L.notify("tracking a facebook unlike", 1), L.onEvent({
						type: "facebook.unlike",
						target: t
					})
				}), this.FB.Event.subscribe("message.send", function() {
					L.notify("tracking a facebook share", 1), L.onEvent({
						type: "facebook.send",
						target: t
					})
				})
			}
		}, L.availableEventEmitters.push(u), d.prototype = {
			initialize: function() {
				var e = this.twttr;
				e && "function" == typeof e.ready && e.ready(L.bind(this.bind, this))
			},
			bind: function() {
				this.twttr.events.bind("tweet", function(e) {
					e && (L.notify("tracking a tweet button", 1), L.onEvent({
						type: "twitter.tweet",
						target: t
					}))
				})
			}
		}, L.availableEventEmitters.push(d), h.offset = function(n) {
			var i = null,
				a = null;
			try {
				var r = n.getBoundingClientRect(),
					o = t,
					s = o.documentElement,
					c = o.body,
					l = e,
					u = s.clientTop || c.clientTop || 0,
					d = s.clientLeft || c.clientLeft || 0,
					h = l.pageYOffset || s.scrollTop || c.scrollTop,
					f = l.pageXOffset || s.scrollLeft || c.scrollLeft;
				i = r.top + h - u, a = r.left + f - d
			} catch (g) {}
			return {
				top: i,
				left: a
			}
		}, h.getViewportHeight = function() {
			var n = e.innerHeight,
				i = t.compatMode;
			return i && (n = "CSS1Compat" == i ? t.documentElement.clientHeight : t.body.clientHeight), n
		}, h.getScrollTop = function() {
			return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop
		}, h.isElementInDocument = function(e) {
			return t.body.contains(e)
		}, h.isElementInView = function(e) {
			if (!h.isElementInDocument(e)) return !1;
			var t = h.getViewportHeight(),
				n = h.getScrollTop(),
				i = h.offset(e).top,
				a = e.offsetHeight;
			return null !== i ? !(n > i + a || i > n + t) : !1
		}, h.prototype = {
			backgroundTasks: function() {
				var e = this.elements;
				L.each(this.rules, function(t) {
					L.cssQuery(t.selector, function(n) {
						var i = 0;
						L.each(n, function(t) {
							L.contains(e, t) || (e.push(t), i++)
						}), i && L.notify(t.selector + " added " + i + " elements.", 1)
					})
				}), this.track()
			},
			checkInView: function(e, t, n) {
				var i = L.$data(e, "inview");
				if (h.isElementInView(e)) {
					i || L.$data(e, "inview", !0);
					var a = this;
					this.processRules(e, function(n, i, r) {
						if (t || !n.inviewDelay) L.$data(e, i, !0), L.onEvent({
							type: "inview",
							target: e,
							inviewDelay: n.inviewDelay
						});
						else if (n.inviewDelay) {
							var o = L.$data(e, r);
							o || (o = setTimeout(function() {
								a.checkInView(e, !0, n.inviewDelay)
							}, n.inviewDelay), L.$data(e, r, o))
						}
					}, n)
				} else {
					if (!h.isElementInDocument(e)) {
						var r = L.indexOf(this.elements, e);
						this.elements.splice(r, 1)
					}
					i && L.$data(e, "inview", !1), this.processRules(e, function(t, n, i) {
						var a = L.$data(e, i);
						a && clearTimeout(a)
					}, n)
				}
			},
			track: function() {
				for (var e = this.elements.length - 1; e >= 0; e--) this.checkInView(this.elements[e])
			},
			processRules: function(e, t, n) {
				var i = this.rules;
				n && (i = L.filter(this.rules, function(e) {
					return e.inviewDelay == n
				})), L.each(i, function(n, i) {
					var a = n.inviewDelay ? "viewed_" + n.inviewDelay : "viewed",
						r = "inview_timeout_id_" + i;
					L.$data(e, a) || L.matchesCss(n.selector, e) && t(n, a, r)
				})
			}
		}, L.availableEventEmitters.push(h), f.prototype.getStringifiedValue = e.JSON && e.JSON.stringify || L.stringify, f.prototype.initPolling = function() {
			0 !== this.dataElementsNames.length && (this.dataElementsStore = this.getDataElementsValues(), L.poll(L.bind(this.checkDataElementValues, this), 1e3))
		}, f.prototype.getDataElementsValues = function() {
			var e = {};
			return L.each(this.dataElementsNames, function(t) {
				var n = L.getVar(t);
				e[t] = this.getStringifiedValue(n)
			}, this), e
		}, f.prototype.checkDataElementValues = function() {
			L.each(this.dataElementsNames, L.bind(function(e) {
				var n = this.getStringifiedValue(L.getVar(e)),
					i = this.dataElementsStore[e];
				n !== i && (this.dataElementsStore[e] = n, L.onEvent({
					type: "dataelementchange(" + e + ")",
					target: t
				}))
			}, this))
		}, L.availableEventEmitters.push(f), L.visibility = {
			isHidden: function() {
				var e = this.getHiddenProperty();
				return e ? t[e] : !1
			},
			isVisible: function() {
				return !this.isHidden()
			},
			getHiddenProperty: function() {
				var e = ["webkit", "moz", "ms", "o"];
				if ("hidden" in t) return "hidden";
				for (var n = 0; n < e.length; n++)
					if (e[n] + "Hidden" in t) return e[n] + "Hidden";
				return null
			},
			getVisibilityEvent: function() {
				var e = this.getHiddenProperty();
				return e ? e.replace(/[H|h]idden/, "") + "visibilitychange" : null
			}
		}, L.ecommerce = {
			addItem: function() {
				var e = [].slice.call(arguments);
				L.onEvent({
					type: "ecommerce.additem",
					target: e
				})
			},
			addTrans: function() {
				var e = [].slice.call(arguments);
				L.data.saleData.sale = {
					orderId: e[0],
					revenue: e[2]
				}, L.onEvent({
					type: "ecommerce.addtrans",
					target: e
				})
			},
			trackTrans: function() {
				L.onEvent({
					type: "ecommerce.tracktrans",
					target: []
				})
			}
		}, L.extend(g.prototype, {
			getInstance: function() {
				return this.instance
			},
			initialize: function() {
				var e, t = this.settings;
				L.notify("Visitor ID: Initializing tool", 1), e = this.createInstance(t.mcOrgId, t.initVars), null !== e && (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs), t.autoRequest && e.getMarketingCloudVisitorID(), this.instance = e)
			},
			createInstance: function(e, t) {
				if (!L.isString(e)) return L.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4), null;
				e = L.replace(e), L.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1), t = this.parseValues(t);
				var n = Visitor.getInstance(e, t);
				return L.notify("Visitor ID: Set variables: " + L.stringify(t), 1), n
			},
			applyCustomerIDs: function(e, t) {
				var n = this.parseIds(t);
				e.setCustomerIDs(n), L.notify("Visitor ID: Set Customer IDs: " + L.stringify(n), 1)
			},
			parseValues: function(e) {
				if (L.isObject(e) === !1) return {};
				var t = {};
				for (var n in e) e.hasOwnProperty(n) && (t[n] = L.replace(e[n]));
				return t
			},
			parseIds: function(e) {
				var t = {};
				if (L.isObject(e) === !1) return {};
				for (var n in e)
					if (e.hasOwnProperty(n)) {
						var i = L.replace(e[n].id);
						i !== e[n].id && i && (t[n] = {}, t[n].id = i, t[n].authState = Visitor.AuthState[e[n].authState])
					}
				return t
			}
		}), L.availableTools.visitor_id = g, L.inherit(p, L.BaseTool), L.extend(p.prototype, {
			initialize: function() {
				var e = this.settings;
				if (this.settings.initTool !== !1) {
					var t = e.url;
					t = "string" == typeof t ? L.basePath() + t : L.isHttps() ? t.https : t.http, L.loadScript(t, L.bind(this.onLoad, this)), this.initializing = !0
				} else this.initialized = !0
			},
			isQueueAvailable: function() {
				return !this.initialized
			},
			onLoad: function() {
				this.initialized = !0, this.initializing = !1, this.settings.initialBeacon && this.settings.initialBeacon(), this.flushQueue()
			},
			endPLPhase: function(e) {
				var t = this.settings.loadOn;
				e === t && (L.notify(this.name + ": Initializing at " + e, 1), this.initialize())
			},
			$fire: function(e, t, n) {
				return this.initializing ? void this.queueCommand({
					command: "fire",
					arguments: [n]
				}, e, t) : void n.call(this.settings, e, t)
			}
		}), L.availableTools.am = p, L.availableTools.adlens = p, L.availableTools.aem = p, L.availableTools.__basic = p, L.inherit(m, L.BaseTool), L.extend(m.prototype, {
			name: "tnt",
			endPLPhase: function(e) {
				"aftertoolinit" === e && this.initialize()
			},
			initialize: function() {
				L.notify("Test & Target: Initializing", 1), this.initializeTargetPageParams(), this.load()
			},
			initializeTargetPageParams: function() {
				e.targetPageParams && this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())), this.updateTargetPageParams(this.settings.pageParams), this.setTargetPageParamsFunction()
			},
			load: function() {
				var e = this.getMboxURL(this.settings.mboxURL);
				this.settings.initTool !== !1 ? this.settings.loadSync ? (L.loadScriptSync(e), this.onScriptLoaded()) : (L.loadScript(e, L.bind(this.onScriptLoaded, this)), this.initializing = !0) : this.initialized = !0
			},
			getMboxURL: function(t) {
				var n = t;
				return L.isObject(t) && (n = "https:" === e.location.protocol ? t.https : t.http), n.match(/^https?:/) ? n : L.basePath() + n
			},
			onScriptLoaded: function() {
				L.notify("Test & Target: loaded.", 1), this.flushQueue(), this.initialized = !0, this.initializing = !1
			},
			$addMbox: function(e, t, n) {
				var i = n.mboxGoesAround,
					a = i + "{visibility: hidden;}",
					r = this.appendStyle(a);
				i in this.styleElements || (this.styleElements[i] = r), this.initialized ? this.$addMBoxStep2(null, null, n) : this.initializing && this.queueCommand({
					command: "addMBoxStep2",
					arguments: [n]
				}, e, t)
			},
			$addMBoxStep2: function(n, i, a) {
				var r = this.generateID(),
					o = this;
				L.addEventHandler(e, "load", L.bind(function() {
					L.cssQuery(a.mboxGoesAround, function(n) {
						var i = n[0];
						if (i) {
							var s = t.createElement("div");
							s.id = r, i.parentNode.replaceChild(s, i), s.appendChild(i), e.mboxDefine(r, a.mboxName);
							var c = [a.mboxName];
							a.arguments && (c = c.concat(a.arguments)), e.mboxUpdate.apply(null, c), o.reappearWhenCallComesBack(i, r, a.timeout, a)
						}
					})
				}, this)), this.lastMboxID = r
			},
			$addTargetPageParams: function(e, t, n) {
				this.updateTargetPageParams(n)
			},
			generateID: function() {
				var e = "_sdsat_mbox_" + String(Math.random()).substring(2) + "_";
				return e
			},
			appendStyle: function(e) {
				var n = t.getElementsByTagName("head")[0],
					i = t.createElement("style");
				return i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), n.appendChild(i), i
			},
			reappearWhenCallComesBack: function(e, t, n, i) {
				function a() {
					var e = r.styleElements[i.mboxGoesAround];
					e && (e.parentNode.removeChild(e), delete r.styleElements[i.mboxGoesAround])
				}
				var r = this;
				L.cssQuery('script[src*="omtrdc.net"]', function(e) {
					var t = e[0];
					if (t) {
						L.scriptOnLoad(t.src, t, function() {
							L.notify("Test & Target: request complete", 1), a(), clearTimeout(i)
						});
						var i = setTimeout(function() {
							L.notify("Test & Target: bailing after " + n + "ms", 1), a()
						}, n)
					} else L.notify("Test & Target: failed to find T&T ajax call, bailing", 1), a()
				})
			},
			updateTargetPageParams: function(e) {
				var t = {};
				for (var n in e) e.hasOwnProperty(n) && (t[L.replace(n)] = L.replace(e[n]));
				L.extend(this.targetPageParamsStore, t)
			},
			getTargetPageParams: function() {
				return this.targetPageParamsStore
			},
			setTargetPageParamsFunction: function() {
				e.targetPageParams = L.bind(this.getTargetPageParams, this)
			},
			parseTargetPageParamsResult: function(e) {
				var t = e;
				return L.isArray(e) && (e = e.join("&")), L.isString(e) && (t = L.parseQueryParams(e)), t
			}
		}), L.availableTools.tnt = m;
	var w = {
		allowLinker: function() {
			return L.hasMultipleDomains()
		},
		cookieDomain: function() {
			var t = L.settings.domainList,
				n = L.find(t, function(t) {
					var n = e.location.hostname;
					return L.equalsIgnoreCase(n.slice(n.length - t.length), t)
				}),
				i = n ? "." + n : "auto";
			return i
		}
	};
	L.inherit(v, L.BaseTool), L.extend(v.prototype, {
		name: "GAUniversal",
		endPLPhase: function(e) {
			var t = this.settings,
				n = t.loadOn;
			e === n && (L.notify("GAU: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
		},
		getTrackerName: function() {
			return this.settings.trackerSettings.name || ""
		},
		isPageCodeLoadSuppressed: function() {
			return this.settings.initTool === !1 || this._cancelToolInit === !0
		},
		initialize: function() {
			if (this.isPageCodeLoadSuppressed()) return this.initialized = !0, void L.notify("GAU: Page code not loaded (suppressed).", 1);
			var t = "ga";
			e[t] = e[t] || this.createGAObject(), e.GoogleAnalyticsObject = t, L.notify("GAU: Page code loaded.", 1), L.loadScriptOnce(this.getToolUrl());
			var n = this.settings;
			if (w.allowLinker() && n.allowLinker !== !1 ? this.createAccountForLinker() : this.createAccount(), this.executeInitCommands(), n.customInit) {
				var i = n.customInit,
					a = i(e[t], this.getTrackerName());
				a === !1 && (this.suppressInitialPageView = !0)
			}
			this.initialized = !0
		},
		createGAObject: function() {
			var e = function() {
				e.q.push(arguments)
			};
			return e.q = [], e.l = 1 * new Date, e
		},
		createAccount: function() {
			this.create()
		},
		createAccountForLinker: function() {
			var e = {};
			w.allowLinker() && (e.allowLinker = !0), this.create(e), this.call("require", "linker"), this.call("linker:autoLink", this.autoLinkDomains(), !1, !0)
		},
		create: function(e) {
			var t = this.settings.trackerSettings;
			t = L.preprocessArguments([t], location, null, this.forceLowerCase)[0], t.trackingId = L.replace(this.settings.trackerSettings.trackingId, location), t.cookieDomain || (t.cookieDomain = w.cookieDomain()), L.extend(t, e || {}), this.call("create", t)
		},
		autoLinkDomains: function() {
			var e = location.hostname;
			return L.filter(L.settings.domainList, function(t) {
				return t !== e
			})
		},
		executeInitCommands: function() {
			var e = this.settings;
			e.initCommands && L.each(e.initCommands, function(e) {
				var t = e.splice(2, e.length - 2);
				e = e.concat(L.preprocessArguments(t, location, null, this.forceLowerCase)), this.call.apply(this, e)
			}, this)
		},
		trackInitialPageView: function() {
			this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call("send", "pageview")
		},
		call: function() {
			return "function" != typeof ga ? void L.notify("GA Universal function not found!", 4) : void(this.isCallSuppressed() || (arguments[0] = this.cmd(arguments[0]), this.log(L.toArray(arguments)), ga.apply(e, arguments)))
		},
		isCallSuppressed: function() {
			return this._cancelToolInit === !0
		},
		$missing$: function(e, t, n, i) {
			i = i || [], i = [e].concat(i), this.call.apply(this, i)
		},
		getToolUrl: function() {
			var e = this.settings,
				t = L.isHttps();
			return e.url ? t ? e.url.https : e.url.http : (t ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js"
		},
		cmd: function(e) {
			var t = ["send", "set", "get"],
				n = this.getTrackerName();
			return n && -1 !== L.indexOf(t, e) ? n + "." + e : e
		},
		log: function(e) {
			var t = e[0],
				n = this.getTrackerName() || "default",
				i = "GA Universal: sent command " + t + " to tracker " + n;
			if (e.length > 1) {
				L.stringify(e.slice(1));
				i += " with parameters " + L.stringify(e.slice(1))
			}
			i += ".", L.notify(i, 1)
		}
	}), L.availableTools.ga_universal = v, L.inherit(y, L.BaseTool), L.extend(y.prototype, {
		name: "GA",
		initialize: function() {
			var t = this.settings,
				n = e._gaq,
				i = t.initCommands || [],
				a = t.customInit;
			if (n || (_gaq = []), this.isSuppressed()) L.notify("GA: page code not loaded(suppressed).", 1);
			else {
				if (!n && !y.scriptLoaded) {
					var r = L.isHttps(),
						o = (r ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
					t.url && (o = r ? t.url.https : t.url.http), L.loadScript(o), y.scriptLoaded = !0, L.notify("GA: page code loaded.", 1)
				}
				var s = (t.domain, t.trackerName),
					c = w.allowLinker(),
					l = L.replace(t.account, location);
				L.settings.domainList || [];
				_gaq.push([this.cmd("setAccount"), l]), c && _gaq.push([this.cmd("setAllowLinker"), c]), _gaq.push([this.cmd("setDomainName"), w.cookieDomain()]), L.each(i, function(e) {
					var t = [this.cmd(e[0])].concat(L.preprocessArguments(e.slice(1), location, null, this.forceLowerCase));
					_gaq.push(t)
				}, this), a && (this.suppressInitialPageView = !1 === a(_gaq, s)), t.pageName && this.$overrideInitialPageView(null, null, t.pageName)
			}
			this.initialized = !0, L.fireEvent(this.id + ".configure", _gaq, s)
		},
		isSuppressed: function() {
			return this._cancelToolInit || this.settings.initTool === !1
		},
		tracker: function() {
			return this.settings.trackerName
		},
		cmd: function(e) {
			var t = this.tracker();
			return t ? t + "._" + e : "_" + e
		},
		$overrideInitialPageView: function(e, t, n) {
			this.urlOverride = n
		},
		trackInitialPageView: function() {
			if (!this.isSuppressed() && !this.suppressInitialPageView)
				if (this.urlOverride) {
					var e = L.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase);
					this.$missing$("trackPageview", null, null, e)
				} else this.$missing$("trackPageview")
		},
		endPLPhase: function(e) {
			var t = this.settings.loadOn;
			e === t && (L.notify("GA: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
		},
		call: function(e, t, n, i) {
			if (!this._cancelToolInit) {
				var a = (this.settings, this.tracker()),
					r = this.cmd(e),
					i = i ? [r].concat(i) : [r];
				_gaq.push(i), a ? L.notify("GA: sent command " + e + " to tracker " + a + (i.length > 1 ? " with parameters [" + i.slice(1).join(", ") + "]" : "") + ".", 1) : L.notify("GA: sent command " + e + (i.length > 1 ? " with parameters [" + i.slice(1).join(", ") + "]" : "") + ".", 1)
			}
		},
		$missing$: function(e, t, n, i) {
			this.call(e, t, n, i)
		},
		$postTransaction: function(t, n, i) {
			var a = L.data.customVars.transaction = e[i];
			this.call("addTrans", t, n, [a.orderID, a.affiliation, a.total, a.tax, a.shipping, a.city, a.state, a.country]), L.each(a.items, function(e) {
				this.call("addItem", t, n, [e.orderID, e.sku, e.product, e.category, e.unitPrice, e.quantity])
			}, this), this.call("trackTrans", t, n)
		},
		delayLink: function(e, t) {
			var n = this;
			if (w.allowLinker() && e.hostname.match(this.settings.linkerDomains) && !L.isSubdomainOf(e.hostname, location.hostname)) {
				L.preventDefault(t);
				var i = L.settings.linkDelay || 100;
				setTimeout(function() {
					n.call("link", e, t, [e.href])
				}, i)
			}
		},
		popupLink: function(t, n) {
			if (e._gat) {
				L.preventDefault(n);
				var i = this.settings.account,
					a = e._gat._createTracker(i),
					r = a._getLinkerUrl(t.href);
				e.open(r)
			}
		},
		$link: function(e, t) {
			"_blank" === e.getAttribute("target") ? this.popupLink(e, t) : this.delayLink(e, t)
		},
		$trackEvent: function(e, t) {
			var n = Array.prototype.slice.call(arguments, 2);
			if (n.length >= 4 && null != n[3]) {
				var i = parseInt(n[3], 10);
				L.isNaN(i) && (i = 1), n[3] = i
			}
			this.call("trackEvent", e, t, n)
		}
	}), L.availableTools.ga = y, L.inherit(b, L.BaseTool), L.extend(b.prototype, {
		name: "SC",
		endPLPhase: function(e) {
			var t = this.settings.loadOn;
			e === t && this.initialize(e)
		},
		initialize: function(t) {
			if (!this._cancelToolInit)
				if (this.settings.initVars = this.substituteVariables(this.settings.initVars, {
						type: t
					}), this.settings.initTool !== !1) {
					var n = this.settings.sCodeURL || L.basePath() + "s_code.js";
					"object" == typeof n && (n = "https:" === e.location.protocol ? n.https : n.http), n.match(/^https?:/) || (n = L.basePath() + n), this.settings.initVars && this.$setVars(null, null, this.settings.initVars), L.loadScript(n, L.bind(this.onSCodeLoaded, this)), this.initializing = !0
				} else this.initializing = !0, this.pollForSC()
		},
		getS: function(t, n) {
			var i = n && n.hostname || e.location.hostname,
				a = this.concatWithToolVarBindings(n && n.setVars || this.varBindings),
				r = n && n.addEvent || this.events,
				o = this.getAccount(i),
				s = e.s_gi;
			if (!s) return null;
			if (this.isValidSCInstance(t) || (t = null), !o && !t) return L.notify("Adobe Analytics: tracker not initialized because account was not found", 1), null;
			var t = t || s(o),
				c = "D" + L.appVersion;
			"undefined" != typeof t.tagContainerMarker ? t.tagContainerMarker = c : "string" == typeof t.version && t.version.substring(t.version.length - 5) !== "-" + c && (t.version += "-" + c), t.sa && this.settings.skipSetAccount !== !0 && this.settings.initTool !== !1 && t.sa(this.settings.account), this.applyVarBindingsOnTracker(t, a), r.length > 0 && (t.events = r.join(","));
			var l = L.getVisitorId();
			return l && (t.visitor = L.getVisitorId()), t
		},
		onSCodeLoaded: function(e) {
			this.initialized = !0, this.initializing = !1;
			var t = ["Adobe Analytics: loaded", e ? " (manual)" : "", "."];
			L.notify(t.join(""), 1), L.fireEvent(this.id + ".load", this.getS()), e || (this.flushQueueExceptTrackLink(), this.sendBeacon()), this.flushQueue()
		},
		getAccount: function(t) {
			return e.s_account ? e.s_account : t && this.settings.accountByHost ? this.settings.accountByHost[t] || this.settings.account : this.settings.account
		},
		getTrackingServer: function() {
			var t = this,
				n = t.getS();
			if (n) {
				if (n.ssl && n.trackingServerSecure) return n.trackingServerSecure;
				if (n.trackingServer) return n.trackingServer
			}
			var i = t.getAccount(e.location.hostname);
			if (!i) return null;
			var a, r, o, s = "",
				c = n && n.dc;
			return a = i, r = a.indexOf(","), r >= 0 && (a = a.gb(0, r)), a = a.replace(/[^A-Za-z0-9]/g, ""), s || (s = "2o7.net"), c = c ? ("" + c).toLowerCase() : "d1", "2o7.net" == s && ("d1" == c ? c = "112" : "d2" == c && (c = "122"), o = ""), r = a + "." + c + "." + o + s
		},
		sendBeacon: function() {
			var t = this.getS(e[this.settings.renameS || "s"]);
			return t ? this.settings.customInit && this.settings.customInit(t) === !1 ? void L.notify("Adobe Analytics: custom init suppressed beacon", 1) : (this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker(t, this.varBindings), this.executeCustomSetupFuns(t), t.t(), this.clearVarBindings(), this.clearCustomSetup(), void L.notify("Adobe Analytics: tracked page view", 1)) : void L.notify("Adobe Analytics: page code not loaded", 1)
		},
		pollForSC: function() {
			L.poll(L.bind(function() {
				return "function" == typeof e.s_gi ? (this.onSCodeLoaded(!0), !0) : void 0
			}, this))
		},
		flushQueueExceptTrackLink: function() {
			if (this.pending) {
				for (var e = [], t = 0; t < this.pending.length; t++) {
					var n = this.pending[t],
						i = n[0];
					"trackLink" === i.command ? e.push(n) : this.triggerCommand.apply(this, n)
				}
				this.pending = e
			}
		},
		isQueueAvailable: function() {
			return !this.initialized
		},
		substituteVariables: function(e, t) {
			var n = {};
			for (var i in e)
				if (e.hasOwnProperty(i)) {
					var a = e[i];
					n[i] = L.replace(a, location, t)
				}
			return n
		},
		$setVars: function(e, t, n) {
			for (var i in n)
				if (n.hasOwnProperty(i)) {
					var a = n[i];
					"function" == typeof a && (a = a()), this.varBindings[i] = a
				}
			L.notify("Adobe Analytics: set variables.", 2)
		},
		$customSetup: function(e, t, n) {
			this.customSetupFuns.push(function(i) {
				n.call(e, t, i)
			})
		},
		isValidSCInstance: function(e) {
			return !!e && "function" == typeof e.t && "function" == typeof e.tl
		},
		concatWithToolVarBindings: function(e) {
			var t = this.settings.initVars || {};
			return L.map(["trackingServer", "trackingServerSecure"], function(n) {
				t[n] && !e[n] && (e[n] = t[n])
			}), e
		},
		applyVarBindingsOnTracker: function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
		},
		clearVarBindings: function() {
			this.varBindings = {}
		},
		clearCustomSetup: function() {
			this.customSetupFuns = []
		},
		executeCustomSetupFuns: function(t) {
			L.each(this.customSetupFuns, function(n) {
				n.call(e, t)
			})
		},
		$trackLink: function(e, t, n) {
			n = n || {};
			var i = n.type,
				a = n.linkName;
			!a && e && e.nodeName && "a" === e.nodeName.toLowerCase() && (a = e.innerHTML), a || (a = "link clicked");
			var r = n && n.setVars,
				o = n && n.addEvent || [],
				s = this.getS(null, {
					setVars: r,
					addEvent: o
				});
			if (!s) return void L.notify("Adobe Analytics: page code not loaded", 1);
			var c = s.linkTrackVars,
				l = s.linkTrackEvents,
				u = this.definedVarNames(r);
			n && n.customSetup && n.customSetup.call(e, t, s), o.length > 0 && u.push("events"), s.products && u.push("products"), u = this.mergeTrackLinkVars(s.linkTrackVars, u), o = this.mergeTrackLinkVars(s.linkTrackEvents, o), s.linkTrackVars = this.getCustomLinkVarsList(u);
			var d = L.map(o, function(e) {
				return e.split(":")[0]
			});
			s.linkTrackEvents = this.getCustomLinkVarsList(d), s.tl(!0, i || "o", a), L.notify(["Adobe Analytics: tracked link ", "using: linkTrackVars=", L.stringify(s.linkTrackVars), "; linkTrackEvents=", L.stringify(s.linkTrackEvents)].join(""), 1), s.linkTrackVars = c, s.linkTrackEvents = l
		},
		mergeTrackLinkVars: function(e, t) {
			return e && (t = e.split(",").concat(t)), t
		},
		getCustomLinkVarsList: function(e) {
			var t = L.indexOf(e, "None");
			return t > -1 && e.length > 1 && e.splice(t, 1), e.join(",")
		},
		definedVarNames: function(e) {
			e = e || this.varBindings;
			var t = [];
			for (var n in e) e.hasOwnProperty(n) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(n) && t.push(n);
			return t
		},
		$trackPageView: function(e, t, n) {
			var i = n && n.setVars,
				a = n && n.addEvent || [],
				r = this.getS(null, {
					setVars: i,
					addEvent: a
				});
			return r ? (r.linkTrackVars = "", r.linkTrackEvents = "", this.executeCustomSetupFuns(r), n && n.customSetup && n.customSetup.call(e, t, r), r.t(), this.clearVarBindings(), this.clearCustomSetup(), void L.notify("Adobe Analytics: tracked page view", 1)) : void L.notify("Adobe Analytics: page code not loaded", 1)
		},
		$postTransaction: function(t, n, i) {
			var a = L.data.transaction = e[i],
				r = this.varBindings,
				o = this.settings.fieldVarMapping;
			if (L.each(a.items, function(e) {
					this.products.push(e)
				}, this), r.products = L.map(this.products, function(e) {
					var t = [];
					if (o && o.item)
						for (var n in o.item)
							if (o.item.hasOwnProperty(n)) {
								var i = o.item[n];
								t.push(i + "=" + e[n]), "event" === i.substring(0, 5) && this.events.push(i)
							}
					var a = ["", e.product, e.quantity, e.unitPrice * e.quantity];
					return t.length > 0 && a.push(t.join("|")), a.join(";")
				}, this).join(","), o && o.transaction) {
				var s = [];
				for (var c in o.transaction)
					if (o.transaction.hasOwnProperty(c)) {
						var i = o.transaction[c];
						s.push(i + "=" + a[c]), "event" === i.substring(0, 5) && this.events.push(i)
					}
				r.products.length > 0 && (r.products += ","), r.products += ";;;;" + s.join("|")
			}
		},
		$addEvent: function(e, t) {
			for (var n = 2, i = arguments.length; i > n; n++) this.events.push(arguments[n])
		},
		$addProduct: function(e, t) {
			for (var n = 2, i = arguments.length; i > n; n++) this.products.push(arguments[n])
		}
	}), L.availableTools.sc = b, L.inherit(k, L.BaseTool), L.extend(k.prototype, {
		name: "Default",
		$loadIframe: function(t, n, i) {
			var a = i.pages,
				r = i.loadOn,
				o = L.bind(function() {
					L.each(a, function(e) {
						this.loadIframe(t, n, e)
					}, this)
				}, this);
			r || o(), "domready" === r && L.domReady(o), "load" === r && L.addEventHandler(e, "load", o)
		},
		loadIframe: function(e, n, i) {
			var a = t.createElement("iframe");
			a.style.display = "none";
			var r = L.data.host,
				o = i.data,
				s = this.scriptURL(i.src),
				c = L.searchVariables(o, e, n);
			r && (s = L.basePath() + s), s += c, a.src = s;
			var l = t.getElementsByTagName("body")[0];
			l ? l.appendChild(a) : L.domReady(function() {
				t.getElementsByTagName("body")[0].appendChild(a)
			})
		},
		scriptURL: function(e) {
			var t = L.settings.scriptDir || "";
			return t + e
		},
		$loadScript: function(t, n, i) {
			var a = i.scripts,
				r = i.sequential,
				o = i.loadOn,
				s = L.bind(function() {
					r ? this.loadScripts(t, n, a) : L.each(a, function(e) {
						this.loadScripts(t, n, [e])
					}, this)
				}, this);
			o ? "domready" === o ? L.domReady(s) : "load" === o && L.addEventHandler(e, "load", s) : s()
		},
		loadScripts: function(e, t, n) {
			function i() {
				if (r.length > 0 && a) {
					var c = r.shift();
					c.call(e, t, o)
				}
				var l = n.shift();
				if (l) {
					var u = L.data.host,
						d = s.scriptURL(l.src);
					u && (d = L.basePath() + d), a = l, L.loadScript(d, i)
				}
			}
			try {
				var a, n = n.slice(0),
					r = this.asyncScriptCallbackQueue,
					o = t.target || t.srcElement,
					s = this
			} catch (c) {
				console.error("scripts is", L.stringify(n))
			}
			i()
		},
		$loadBlockingScript: function(e, t, n) {
			var i = n.scripts,
				a = (n.loadOn, L.bind(function() {
					L.each(i, function(n) {
						this.loadBlockingScript(e, t, n)
					}, this)
				}, this));
			a()
		},
		loadBlockingScript: function(e, t, n) {
			var i = this.scriptURL(n.src),
				a = L.data.host,
				r = t.target || t.srcElement;
			a && (i = L.basePath() + i), this.argsForBlockingScripts.push([e, t, r]), L.loadScriptSync(i)
		},
		pushAsyncScript: function(e) {
			this.asyncScriptCallbackQueue.push(e)
		},
		pushBlockingScript: function(e) {
			var t = this.argsForBlockingScripts.shift(),
				n = t[0];
			e.apply(n, t.slice(1))
		},
		$writeHTML: L.escapeHtmlParams(function(e, n) {
			if (L.domReadyFired || !t.write) return void L.notify("Command writeHTML failed. You should try appending HTML using the async option.", 1);
			if ("pagebottom" !== n.type && "pagetop" !== n.type) return void L.notify("You can only use writeHTML on the `pagetop` and `pagebottom` events.", 1);
			for (var i = 2, a = arguments.length; a > i; i++) {
				var r = arguments[i].html;
				r = L.replace(r, e, n), t.write(r)
			}
		}),
		linkNeedsDelayActivate: function(t, n) {
			n = n || e;
			var i = t.tagName,
				a = t.getAttribute("target"),
				r = t.getAttribute("href");
			return i && "a" !== i.toLowerCase() ? !1 : r ? a ? "_blank" === a ? !1 : "_top" === a ? n.top === n : "_parent" === a ? !1 : "_self" === a ? !0 : n.name ? a === n.name : !0 : !0 : !1
		},
		$delayActivateLink: function(e, t) {
			if (this.linkNeedsDelayActivate(e)) {
				L.preventDefault(t);
				var n = L.settings.linkDelay || 100;
				setTimeout(function() {
					L.setLocation(e.href)
				}, n)
			}
		},
		isQueueable: function(e) {
			return "writeHTML" !== e.command
		}
	}), L.availableTools["default"] = k, L.inherit(S, L.BaseTool), L.extend(S.prototype, {
		name: "Nielsen",
		endPLPhase: function(e) {
			switch (e) {
				case "pagetop":
					this.initialize();
					break;
				case "pagebottom":
					this.enableTracking && (this.queueCommand({
						command: "sendFirstBeacon",
						arguments: []
					}), this.flushQueueWhenReady())
			}
		},
		defineListeners: function() {
			this.onTabFocus = L.bind(function() {
				this.notify("Tab visible, sending view beacon when ready", 1), this.tabEverVisible = !0, this.flushQueueWhenReady()
			}, this), this.onPageLeave = L.bind(function() {
				this.notify("isHuman? : " + this.isHuman(), 1), this.isHuman() && this.sendDurationBeacon()
			}, this), this.onHumanDetectionChange = L.bind(function(e) {
				this == e.target.target && (this.human = e.target.isHuman)
			}, this)
		},
		initialize: function() {
			this.initializeTracking(), this.initializeDataProviders(), this.initializeNonHumanDetection(), this.tabEverVisible = L.visibility.isVisible(), this.tabEverVisible ? this.notify("Tab visible, sending view beacon when ready", 1) : L.bindEventOnce("tabfocus", this.onTabFocus), this.initialized = !0
		},
		initializeTracking: function() {
			this.initialized || (this.notify("Initializing tracking", 1), this.addRemovePageLeaveEvent(this.enableTracking), this.addRemoveHumanDetectionChangeEvent(this.enableTracking), this.initialized = !0)
		},
		initializeDataProviders: function() {
			var e, t = this.getAnalyticsTool();
			this.dataProvider.register(new S.DataProvider.VisitorID(L.getVisitorId())), t ? (e = new S.DataProvider.Generic("rsid", function() {
				return t.settings.account
			}), this.dataProvider.register(e)) : this.notify("Missing integration with Analytics: rsid will not be sent.")
		},
		initializeNonHumanDetection: function() {
			L.nonhumandetection ? (L.nonhumandetection.init(), this.setEnableNonHumanDetection(0 == this.settings.enableNonHumanDetection ? !1 : !0), this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay(1e3 * parseInt(this.settings.nonHumanDetectionDelay))) : this.notify("NHDM is not available.")
		},
		getAnalyticsTool: function() {
			return this.settings.integratesWith ? L.tools[this.settings.integratesWith] : void 0
		},
		flushQueueWhenReady: function() {
			this.enableTracking && this.tabEverVisible && L.poll(L.bind(function() {
				return this.isReadyToTrack() ? (this.flushQueue(), !0) : void 0
			}, this), 100, 20)
		},
		isReadyToTrack: function() {
			return this.tabEverVisible && this.dataProvider.isReady()
		},
		$setVars: function(e, t, n) {
			for (var i in n) {
				var a = n[i];
				"function" == typeof a && (a = a()), this.settings[i] = a
			}
			this.notify("Set variables done", 2), this.prepareContextData()
		},
		$setEnableTracking: function(e, t, n) {
			this.notify("Will" + (n ? "" : " not") + " track time on page", 1), this.enableTracking != n && (this.addRemovePageLeaveEvent(n), this.addRemoveHumanDetectionChangeEvent(n), this.enableTracking = n)
		},
		$sendFirstBeacon: function(e, t, n) {
			this.sendViewBeacon()
		},
		setEnableNonHumanDetection: function(e) {
			e ? L.nonhumandetection.register(this) : L.nonhumandetection.unregister(this)
		},
		setNonHumanDetectionDelay: function(e) {
			L.nonhumandetection.register(this, e)
		},
		addRemovePageLeaveEvent: function(e) {
			this.notify((e ? "Attach onto" : "Detach from") + " page leave event", 1);
			var t = 0 == e ? "unbindEvent" : "bindEvent";
			L[t]("leave", this.onPageLeave)
		},
		addRemoveHumanDetectionChangeEvent: function(e) {
			this.notify((e ? "Attach onto" : "Detach from") + " human detection change event", 1);
			var t = 0 == e ? "unbindEvent" : "bindEvent";
			L[t]("humandetection.change", this.onHumanDetectionChange)
		},
		sendViewBeacon: function() {
			this.notify("Tracked page view.", 1), this.sendBeaconWith()
		},
		sendDurationBeacon: function() {
			if (!L.timetracking || "function" != typeof L.timetracking.timeOnPage || null == L.timetracking.timeOnPage()) return void this.notify("Could not track close due missing time on page", 5);
			this.notify("Tracked close", 1), this.sendBeaconWith({
				timeOnPage: Math.round(L.timetracking.timeOnPage() / 1e3),
				duration: "D",
				timer: "timer"
			});
			var e, t = "";
			for (e = 0; e < this.magicConst; e++) t += "0"
		},
		sendBeaconWith: function(e) {
			this.enableTracking && this[this.beaconMethod].call(this, this.prepareUrl(e))
		},
		plainBeacon: function(e) {
			var t = new Image;
			t.src = e, t.width = 1, t.height = 1, t.alt = ""
		},
		navigatorSendBeacon: function(e) {
			navigator.sendBeacon(e)
		},
		prepareUrl: function(e) {
			var t = this.settings;
			return L.extend(t, this.dataProvider.provide()), L.extend(t, e), this.preparePrefix(this.settings.collectionServer) + this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))
		},
		preparePrefix: function(e) {
			return "//" + encodeURIComponent(e) + ".imrworldwide.com/cgi-bin/gn?"
		},
		substituteVariables: function(e) {
			var t = {};
			for (var n in e) e.hasOwnProperty(n) && (t[n] = L.replace(e[n]));
			return t
		},
		prepareContextData: function() {
			if (!this.getAnalyticsTool()) return void this.notify("Adobe Analytics missing.");
			var e = this.settings;
			e.sdkVersion = _satellite.publishDate, this.getAnalyticsTool().$setVars(null, null, {
				contextData: this.adapt.toAnalytics(this.substituteVariables(e))
			})
		},
		isHuman: function() {
			return this.human
		},
		onTabFocus: function() {},
		onPageLeave: function() {},
		onHumanDetectionChange: function() {},
		notify: function(e, t) {
			L.notify(this.logPrefix + e, t)
		},
		beaconMethod: "plainBeacon",
		adapt: null,
		enableTracking: !1,
		logPrefix: "Nielsen: ",
		tabEverVisible: !1,
		human: !0,
		magicConst: 2e6
	}), S.DataProvider = {}, S.DataProvider.Generic = function(e, t) {
		this.key = e, this.valueFn = t
	}, L.extend(S.DataProvider.Generic.prototype, {
		isReady: function() {
			return !0
		},
		getValue: function() {
			return this.valueFn()
		},
		provide: function() {
			this.isReady() || S.prototype.notify("Not yet ready to provide value for: " + this.key, 5);
			var e = {};
			return e[this.key] = this.getValue(), e
		}
	}), S.DataProvider.VisitorID = function(e, t, n) {
		this.key = t || "uuid", this.visitorInstance = e, this.visitorInstance && (this.visitorId = e.getMarketingCloudVisitorID([this, this._visitorIdCallback])), this.fallbackProvider = n || new S.UUID
	}, L.inherit(S.DataProvider.VisitorID, S.DataProvider.Generic), L.extend(S.DataProvider.VisitorID.prototype, {
		isReady: function() {
			return null === this.visitorInstance ? !0 : !!this.visitorId
		},
		getValue: function() {
			return this.visitorId || this.fallbackProvider.get()
		},
		_visitorIdCallback: function(e) {
			this.visitorId = e
		}
	}), S.DataProvider.Aggregate = function() {
		this.providers = [];
		for (var e = 0; e < arguments.length; e++) this.register(arguments[e])
	}, L.extend(S.DataProvider.Aggregate.prototype, {
		register: function(e) {
			this.providers.push(e)
		},
		isReady: function() {
			return L.every(this.providers, function(e) {
				return e.isReady()
			})
		},
		provide: function() {
			var e = {};
			return L.each(this.providers, function(t) {
				L.extend(e, t.provide())
			}), e
		}
	}), S.UUID = function() {}, L.extend(S.UUID.prototype, {
		generate: function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
				var t = 16 * Math.random() | 0,
					n = "x" == e ? t : 3 & t | 8;
				return n.toString(16)
			})
		},
		get: function() {
			var e = L.readCookie(this.key("uuid"));
			return e ? e : (e = this.generate(), L.setCookie(this.key("uuid"), e), e)
		},
		key: function(e) {
			return "_dtm_nielsen_" + e
		}
	}), S.DataAdapters = function() {}, L.extend(S.DataAdapters.prototype, {
		toNielsen: function(e) {
			var t = (new Date).getTime(),
				i = {
					c6: "vc,",
					c13: "asid,",
					c15: "apn,",
					c27: "cln,",
					c32: "segA,",
					c33: "segB,",
					c34: "segC,",
					c35: "adrsid,",
					c29: "plid,",
					c30: "bldv,",
					c40: "adbid,"
				},
				a = {
					ci: e.clientId,
					c6: e.vcid,
					c13: e.appId,
					c15: e.appName,
					prv: 1,
					forward: 0,
					ad: 0,
					cr: e.duration || "V",
					rt: "text",
					st: "dcr",
					prd: "dcr",
					r: t,
					at: e.timer || "view",
					c16: e.sdkVersion,
					c27: e.timeOnPage || 0,
					c40: e.uuid,
					c35: e.rsid,
					ti: t,
					sup: 0,
					c32: e.segmentA,
					c33: e.segmentB,
					c34: e.segmentC,
					asn: e.assetName,
					c29: e.playerID,
					c30: e.buildVersion
				};
			for (key in a)
				if (a[key] !== n && null != a[key] && a[key] !== n && null != a && "" != a) {
					var r = encodeURIComponent(a[key]);
					i.hasOwnProperty(key) && r && (r = i[key] + r), a[key] = r
				}
			return this.filterObject(a)
		},
		toAnalytics: function(e) {
			return this.filterObject({
				"a.nielsen.clientid": e.clientId,
				"a.nielsen.vcid": e.vcid,
				"a.nielsen.appid": e.appId,
				"a.nielsen.appname": e.appName,
				"a.nielsen.accmethod": "0",
				"a.nielsen.ctype": "text",
				"a.nielsen.sega": e.segmentA,
				"a.nielsen.segb": e.segmentB,
				"a.nielsen.segc": e.segmentC,
				"a.nielsen.asset": e.assetName
			})
		},
		convertToURI: function(e) {
			if (L.isObject(e) === !1) return "";
			var t = [];
			for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
			return t.join("&")
		},
		filterObject: function(e) {
			for (var t in e) !e.hasOwnProperty(t) || null != e[t] && e[t] !== n || delete e[t];
			return e
		}
	}), L.availableTools.nielsen = S, _satellite.init({
		tools: {
			"0f698d259dbf032ad2975b0696758f0f": {
				engine: "ga",
				pageName: "%URI%",
				forceLowerCase: !0,
				euCookie: !1,
				loadOn: "pagetop",
				initCommands: [],
				account: "",
				trackerName: "0f698d259dbf032ad2975b0696758f0f"
			},
			cd27d317a9f1118073580e8feab19004: {
				engine: "sc",
				loadOn: "pagebottom",
				account: "hmhcnstaging",
				euCookie: !1,
				sCodeURL: "5d599bba477bad3ce4973aeb5c0a8c11709abbb4/s-code-contents-83e510f6b9d2db2aba14ac1971a90b92059f8c9e-staging.js",
				renameS: "s",
				initVars: {
					trackInlineStats: !0,
					trackDownloadLinks: !1,
					trackExternalLinks: !1,
					linkLeaveQueryString: !1,
					dynamicVariablePrefix: "D="
				},
				skipSetAccount: !0
			}
		},
		pageLoadRules: [{
			name: "404 Page",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					pageName: "%PageName%"
				}]
			}, {
				engine: "sc",
				command: "customSetup",
				arguments: [function(t, n) {
					e.is404Page && (n.pageName = "404 Page", n.pageType = "errorPage")
				}]
			}],
			conditions: [function() {
				return _satellite.textMatch(_satellite.getVar("is404"), "404")
			}],
			event: "pagebottom"
		}, {
			name: "Blogauthor",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar9: "%BlogAuthor%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.blogauthor
			}],
			event: "domready"
		}, {
			name: "Blogname",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar8: "%BlogName%",
					prop8: "%BlogName%"
				}]
			}, {
				engine: "sc",
				command: "addEvent",
				arguments: ["event8"]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.blogname
			}],
			event: "domready"
		}, {
			name: "Blogposttitle",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar10: "%PostTitle%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.posttitle
			}],
			event: "domready"
		}, {
			name: "Channel",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					channel: "%Channel%",
					hier1: "%Hier1%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.channel
			}],
			event: "pagebottom"
		}, {
			name: "Form Complete",
			trigger: [{
				engine: "sc",
				command: "addEvent",
				arguments: ["event11"]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.formcomplete
			}],
			event: "pagebottom"
		}, {
			name: "Form Start",
			trigger: [{
				engine: "sc",
				command: "addEvent",
				arguments: ["event10"]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.formstart
			}],
			event: "pagebottom"
		}, {
			name: "Google Analytics Code",
			trigger: [{
				command: "loadBlockingScript",
				arguments: [{
					sequential: !0,
					scripts: [{
						src: "satellite-571117f764746d08aa0068b4-staging.js"
					}]
				}]
			}],
			event: "pagetop"
		}, {
			name: "Hier1",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					hier1: "%Hier1%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.hier1
			}],
			event: "pagebottom"
		}, {
			name: "Landin Page",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					prop5: "%Landing Page%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.landingpage
			}],
			event: "pagebottom"
		}, {
			name: "Level 2",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					prop1: "%Level2%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.level2
			}],
			event: "pagebottom"
		}, {
			name: "Level 3",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					prop2: "%Level 3%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.level3
			}],
			event: "pagebottom"
		}, {
			name: "Level 4",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					prop3: "%Level 4%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.level4
			}],
			event: "pagebottom"
		}, {
			name: "Level 5",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					prop4: "%Level 5%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.level5
			}],
			event: "pagebottom"
		}, {
			name: "New Eloqua Script",
			trigger: [{
				command: "writeHTML",
				arguments: [{
					html: "<script type=\"text/javascript\" async=\"\" src=\"//img.en25.com/i/elqCfg.min.js\"></script>\n<script type=\"text/javascript\">\n		var _elqQ = _elqQ || [];\n		_elqQ.push(['elqSetSiteId', '1145']);\n		_elqQ.push(['elqTrackPageView']);\n		(function () {\n			function async_load() {\n				var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;\n				s.src = '//img.en25.com/i/elqCfg.min.js';\n				var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);\n			}\n			if (window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);\n			else if (window.attachEvent) window.attachEvent('onload', async_load); \n		})();\n</script>"
				}]
			}],
			event: "pagebottom"
		}, {
			name: "NoSearchKeyword",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar41: "%No Search Keyword%",
					prop41: "%No Search Keyword%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.nosearchkeyword
			}],
			event: "pagebottom"
		}, {
			name: "Not Signed In",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar31: "Not Signed In"
				}]
			}, {
				engine: "sc",
				command: "addEvent",
				arguments: ["event20"]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.notsignedin
			}],
			event: "pagebottom"
		}, {
			name: "PageName",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar62: "%PageName%",
					prop62: "D=v62",
					pageName: "%PageName%"
				}]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.pageName
			}],
			event: "pagebottom"
		}, {
			name: "SearchClickThroughLink",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar48: "%Search Click Through Link%",
					prop48: "%Search Click Through Link%"
				}]
			}, {
				engine: "sc",
				command: "addEvent",
				arguments: ["event16"]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.searchclickthroughlink
			}],
			event: "pagebottom"
		}, {
			name: "SearchKeyword",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar40: "%Search Keyword%",
					prop40: "%Search Keyword%"
				}]
			}, {
				engine: "sc",
				command: "addEvent",
				arguments: ["event4"]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.searchkeyword
			}],
			event: "pagebottom"
		}, {
			name: "Signed In",
			trigger: [{
				engine: "sc",
				command: "setVars",
				arguments: [{
					eVar31: "Signed In User"
				}]
			}, {
				engine: "sc",
				command: "addEvent",
				arguments: ["event19"]
			}],
			conditions: [function(e, t) {
				return "undefined" != typeof dl.signedin
			}],
			event: "pagebottom"
		}],
		rules: [{
			name: "BookMark This Page",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "BookMark this Page",
					setVars: {
						eVar62: "%PageName%",
						eVar71: "BookMark this Page",
						prop62: "D=v62",
						prop71: "D=v71"
					},
					addEvent: ["event21"]
				}]
			}],
			selector: "a",
			property: {
				className: /save-book$/i
			},
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Buy Button",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Buy Button Tracking",
					setVars: {
						eVar71: "Buy",
						prop71: "D=v71"
					}
				}]
			}],
			selector: "div#phsubheader_0_phtoolbar_0_liBuyThis a",
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Facebook Share",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Facebook Share",
					setVars: {
						eVar71: "Facebook Share"
					}
				}]
			}],
			selector: "i.icon-facebook",
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "LitNote Save Book Level",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "LitnoteSave Book Level",
					setVars: {
						eVar71: "LitnoteSave",
						eVar72: "%Bookname%",
						prop71: "D=v71"
					},
					addEvent: ["event23"]
				}]
			}],
			selector: "a",
			property: {
				"dl.tracker": "analyticsbookmark"
			},
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "LitNote Un bookmark Book Level ",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Litnote UnBookmark Book Level",
					setVars: {
						eVar71: "LitnoteSave",
						eVar72: "%Bookname%",
						prop71: "D=v71"
					},
					addEvent: ["event24"]
				}]
			}],
			selector: "a",
			property: {
				"dl-tracker": "analyticsunbookmark"
			},
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Save Button",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Saved Link Tracking",
					setVars: {
						eVar71: "Save Button"
					}
				}]
			}],
			selector: "#bttn rounded bttn-1 save save-link saveBookmarkId",
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Search Test",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Search Test",
					setVars: {
						eVar40: "%Search Keyword%",
						prop40: "%Search Keyword%"
					}
				}]
			}],
			selector: "i.icon-Search",
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "ShareButton",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Share Button Tracking",
					setVars: {
						eVar71: "Share Button"
					}
				}]
			}],
			selector: "div.share-bttn-title.rounded",
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Sign In Tracking",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Sign In Tracking",
					setVars: {
						eVar71: "Sign In",
						prop71: "D=v71"
					},
					addEvent: ["event5"]
				}]
			}],
			selector: "a#phmainsection_0_btnSignin",
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Sign up Form Start",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Sign up Form Start",
					setVars: {
						eVar71: "Sign up Form Start",
						prop71: "D=v71"
					},
					addEvent: ["event10"]
				}]
			}],
			selector: "input#txtfirstname",
			event: "focus",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Sign up Submission",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Sign up submission",
					setVars: {
						eVar71: "Sign Up Form Submission/ Sign Up",
						prop71: "D=v71"
					},
					addEvent: ["event11", "event2", "event25"]
				}]
			}],
			selector: ".checkbox-label",
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "SignUp ConfirmationEmailSent",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Email sent",
					setVars: {
						eVar13: '" Sign-up Confirmation Sent"'
					},
					addEvent: ["event26"]
				}]
			}],
			scope: {
				URI: {
					include: [/account\/Sign-In-Register/i]
				}
			},
			selector: "#lbtncreateaccount",
			property: {
				className: /bttn bttn-1/i
			},
			eventHandlerOnElement: !0,
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1,
			customEvent: "click"
		}, {
			name: "Twittter",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Twitter Share",
					setVars: {
						eVar71: "Twitter Share"
					}
				}]
			}],
			selector: "i",
			property: {
				className: "icon-twitter"
			},
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "UnBookMark This Page",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "UnBookMark this Page",
					setVars: {
						eVar62: "%PageName%",
						eVar71: "UnBookMark this Page",
						prop62: "D=v62",
						prop71: "D=v71"
					},
					addEvent: ["event22"]
				}]
			}],
			selector: "a",
			property: {
				className: /^save-book added$/i
			},
			event: "click",
			bubbleFireIfParent: !0,
			bubbleFireIfChildFired: !0,
			bubbleStop: !1
		}, {
			name: "Linker link",
			event: "click",
			trigger: [{
				engine: "ga",
				command: "link"
			}],
			selector: "a",
			conditions: [function(e, t) {
				return _satellite.isLinkerLink(this)
			}]
		}, {
			name: "facebook like",
			event: "facebook.like",
			trigger: [{
				command: "trackSocial",
				arguments: ["facebook", "like"],
				tool: ["0f698d259dbf032ad2975b0696758f0f"]
			}]
		}, {
			name: "facebook unlike",
			event: "facebook.unlike",
			trigger: [{
				command: "trackSocial",
				arguments: ["facebook", "unlike"],
				tool: ["0f698d259dbf032ad2975b0696758f0f"]
			}]
		}, {
			name: "facebook send",
			event: "facebook.send",
			trigger: [{
				command: "trackSocial",
				arguments: ["facebook", "send"],
				tool: ["0f698d259dbf032ad2975b0696758f0f"]
			}]
		}, {
			name: "twitter tweet",
			event: "twitter.tweet",
			trigger: [{
				command: "trackSocial",
				arguments: ["twitter", "tweet"],
				tool: ["0f698d259dbf032ad2975b0696758f0f"]
			}]
		}],
		directCallRules: [{
			name: "bookmark",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Litnote %BookmarkTitle%  Book Level",
					setVars: {
						eVar71: "Litnote %BookmarkFlag%",
						eVar72: "%BookmarkTitle%",
						prop71: "Litnote %BookmarkFlag%"
					},
					customSetup: function(e, t) {
						_satellite.getVar("BookmarkFlag"), _satellite.getVar("BookmarkTitle");
						return !0
					}
				}]
			}]
		}, {
			name: "analyticssearch",
			trigger: [{
				engine: "sc",
				command: "trackLink",
				arguments: [{
					type: "o",
					linkName: "Search Test 1",
					setVars: {
						eVar40: "%Search Keyword%"
					}
				}]
			}]
		}, {
			name: "Signupemailconfirmationsent"
		}],
		settings: {
			trackInternalLinks: !0,
			libraryName: "satelliteLib-be7c0d7e253ce63fcfdfe0aff228b9a92b99ce20",
			isStaging: !0,
			allowGATTcalls: !1,
			downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
			notifications: !1,
			utilVisible: !1,
			domainList: ["cliffsnotes.com"],
			scriptDir: "5d599bba477bad3ce4973aeb5c0a8c11709abbb4/scripts/",
			tagTimeout: 3e3
		},
		data: {
			URI: t.location.pathname + t.location.search,
			browser: {},
			cartItems: [],
			revenue: "",
			host: {
				http: "assets.adobedtm.com",
				https: "assets.adobedtm.com"
			}
		},
		dataElements: {
			BlogAuthor: {
				jsVariable: "dl.blogauthor",
				storeLength: "pageview"
			},
			BlogName: {
				jsVariable: "dl.blogname",
				storeLength: "pageview"
			},
			BookmarkFlag: {
				jsVariable: "dl.tracker",
				storeLength: "pageview"
			},
			BookmarkTitle: {
				jsVariable: "dl.bookname",
				storeLength: "pageview"
			},
			Bookname: {
				jsVariable: "dl.bookname",
				storeLength: "pageview"
			},
			Channel: {
				jsVariable: "dl.channel",
				storeLength: "pageview"
			},
			Formcomplete: {
				jsVariable: "dl.formcomplete",
				storeLength: "pageview"
			},
			Formstart: {
				jsVariable: "dl.formstart",
				storeLength: "pageview"
			},
			Hier1: {
				jsVariable: "dl.hier1",
				storeLength: "pageview"
			},
			is404: {
				jsVariable: "window.is404Page",
				"default": "nottrue",
				storeLength: "pageview",
				forceLowerCase: !0
			},
			"Landing Page": {
				jsVariable: "dl.landingpage",
				storeLength: "pageview"
			},
			Level2: {
				jsVariable: "dl.level2",
				storeLength: "pageview"
			},
			"Level 3": {
				jsVariable: "dl.level3",
				storeLength: "pageview"
			},
			"Level 4": {
				jsVariable: "dl.level4",
				storeLength: "pageview"
			},
			"Level 5": {
				jsVariable: "dl.level5",
				storeLength: "pageview"
			},
			"No Search Keyword": {
				jsVariable: "dl.nosearchkeyword",
				storeLength: "pageview"
			},
			"Number of Search Result": {
				jsVariable: "dl.searchresult",
				storeLength: "pageview"
			},
			PageName: {
				jsVariable: "dl.pageName",
				storeLength: "pageview"
			},
			Pagetype: {
				jsVariable: "dl.pageType",
				storeLength: "pageview"
			},
			PostTitle: {
				jsVariable: "dl.posttitle",
				storeLength: "pageview"
			},
			"Search Click Through Link": {
				jsVariable: "dl.searchclickthroughlink",
				storeLength: "pageview"
			},
			"Search Keyword": {
				jsVariable: "dl.searchkeyword",
				storeLength: "pageview"
			},
			TimeonSignup: {
				jsVariable: "dl.timeonsignup",
				storeLength: "pageview"
			}
		},
		appVersion: "6ZS",
		buildDate: "2017-01-27 21:13:52 UTC",
		publishDate: "2016-05-09 16:05:41 UTC"
	})
}(window, document);
