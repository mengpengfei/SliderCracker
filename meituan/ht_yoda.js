var babelHelpers = {}
var ts = Date.now();
var cts = Date.now() + 1000;

var window = {
	seed: {
		env: "pro"
	},
	innerWidth: 1920,
	innerHeight: 1080,
	location: {
		href: "https://epassport.meituan.com/account/unitivelogin…e.waimai.meituan.com%2Fv2%2Fepassport%2FchangePwd"
	},
	Yoda: {},
	behavior: '',
	token: '',
	ts: ts,
	cts: cts,
	token_btoa: '',
	img_token: '',
	Function: new Function,
	Navigator: {},
	Image: {},
	Screen: {},
	Audio: {},
	Location: {},
	sleep: function(numberMillis) {
		var now = new Date();
		var exitTime = now.getTime() + numberMillis;
		while (true) {
			now = new Date();
			if (now.getTime() > exitTime)
				return;
		}
	},
	btoa: function (str) {
		var buffer;
		if (str instanceof Buffer) {
			buffer = str;
		} else {
			buffer = Buffer.from(str.toString(), 'binary');
		}
		return buffer.toString('base64');
	},
	atob: function (str) {
		return Buffer.from(str, 'base64').toString('binary');
	},
	point: function() {
		// 宽度
		var witdh = 800
		// 高度
		var height = 600
		// 滑块
		var a = 33
		// 滑框
		var b = 230
		// 边距
		var c = (witdh - b) / 2
		// 最大值
		var d = b + c
		// 最小值1
		var e = b - a + c
		// y 轴 最大值
		var f = 307 + a
		var trace = [];
		var F = 0

		while (true) {
			// y 轴 上下浮动
			var g = Math.ceil(Math.random() * a);
			if (F > d) {
				break
			}
			if (!F) {
				F = F + (c + (a / 2)) + (Math.ceil(Math.random() * 5))
			}
			else {
				F = F + a + (Math.ceil(Math.random() * 5))
			}

			var S = f + g;
			var T = Math.floor(Math.random() * (20000 - 15000) + 1) + 15000;
			trace.push([0, parseInt(F), parseInt(parseInt(S) / 2), T]);
		}

		return trace
	},
	mT: function() {
		var mt = [];
		var k = Math.floor(Math.random() * 60);
		for (var i = 1; i <= 60; i++) {
			window.sleep(0.5)
			var page_x = Math.floor(Math.random() * ((1283 - 482) + 1)) + 482;
			var page_y = Math.floor(Math.random() * ((295 - 245) + 1)) + 245;
			var t = Date.now() - window.ts;
			mt.push(`${page_x}, ${page_y}, ${t}`)
		}
		mt.length > 60 && (mt = mt.slice(0, 60))
		return mt
  },
  dT: function () {
		var a_T = [];
    var list = ['DIV'];
    var k = Math.floor(Math.random() * 3) + 1;
		for (var t = 1; t < k; t++) {
			var page_x = Math.floor(Math.random() * ((1283) - (482 + 1))) + 482;
			var page_y = Math.floor(Math.random() * ((295) - (245 + 1))) + 245;
			var i = Date.now() - window.ts;
			var s = list[Math.floor(Math.random() * list.length)];
			a_T.push(`${page_x}, ${page_y}, ${s}, ${i}`)
		}
		return a_T
	},
	kT: function () {
		var k_T = []
		for (var t = 1; t <= 5; t++) {
			window.sleep(0.2);
			var i = Date.now() - window.ts;
			var s = Math.floor(Math.random() * ((90) - (65 + 1))) + 65;
			var r = String(s).charCodeAt();
			k_T.push(`${r}, INPUT, ${i}`)

		}
		return k_T
	},
	aT: function () {
		var a_T = [];
		var list = ['BUTTON','INPUT','DIV', 'A', 'HTML'];
		for (var t = 1; t < 10; t++) {
			var page_x = Math.floor(Math.random() * ((1283) - (482 + 1))) + 482;
			var page_y = Math.floor(Math.random() * ((295) - (245 + 1))) + 245;
			var i = Date.now() - window.ts;
			var s = list[Math.floor(Math.random() * list.length)];
			a_T.push(`${page_x}, ${page_y}, ${s}, ${i}`)
		}
		return a_T
	}
};

var navigator = {
	userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'
};

var document = {
	documentElement: {
		clientWidth: 1920,
		clientHeight: 1080
  },
	referrer: "https://epassport.meituan.com/account/unitivelogin?bg_source=3&service=waimai&platform=2&continue=http://e.waimai.meituan.com/v2/epassport/entry&left_bottom_link=%2Faccount%2Funitivesignup%3Fbg_source%3D3%26service%3Dwaimai%26platform%3D2%26continue%3Dhttp%3A%2F%2Fe.waimai.meituan.com%2Fv2%2Fepassport%2FsignUp%26extChannel%3Dwaimaie%26ext_sign_up_channel%3Dwaimaie&right_bottom_link=%2Faccount%2Funitiverecover%3Fbg_source%3D3%26service%3Dwaimai%26platform%3D2%26continue%3Dhttp%3A%2F%2Fe.waimai.meituan.com%2Fv2%2Fepassport%2FchangePwd"
};

document.createElement = function () {}

var screen = {
	width: 1920,
	height: 1080,
	availWidth: 1858,
	availHeight: 1080,
	colorDepth: 24,
	pixelDepth: 24
};

window.navigator = navigator;
window.document = document;
window.screen = screen;
window.babelHelpers = babelHelpers;


;(function() {
  // var babelHelpers = {};
  var g;
  if (typeof window !== "undefined") {
      g = window
  } else if (typeof global !== "undefined") {
      g = global
  } else if (typeof self !== "undefined") {
      g = self
  } else {
      g = this
  }
  g.babelHelpers = babelHelpers;
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj
  }
  : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj
  }
  ;
  babelHelpers.jsx = function() {
      var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
      return function createRawReactElement(type, props, key, children) {
          var defaultProps = type && type.defaultProps;
          var childrenLength = arguments.length - 3;
          if (!props && childrenLength !== 0) {
              props = {}
          }
          if (props && defaultProps) {
              for (var propName in defaultProps) {
                  if (props[propName] === void 0) {
                      props[propName] = defaultProps[propName]
                  }
              }
          } else if (!props) {
              props = defaultProps || {}
          }
          if (childrenLength === 1) {
              props.children = children
          } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                  childArray[i] = arguments[i + 3]
              }
              props.children = childArray
          }
          return {
              $$typeof: REACT_ELEMENT_TYPE,
              type: type,
              key: key === undefined ? null : "" + key,
              ref: null,
              props: props,
              _owner: null
          }
      }
  }();
  babelHelpers.asyncToGenerator = function(fn) {
      return function() {
          var gen = fn.apply(this, arguments);
          return new Promise(function(resolve, reject) {
              function step(key, arg) {
                  try {
                      var info = gen[key](arg);
                      var value = info.value
                  } catch (error) {
                      reject(error);
                      return
                  }
                  if (info.done) {
                      resolve(value)
                  } else {
                      return Promise.resolve(value).then(function(value) {
                          return step("next", value)
                      }, function(err) {
                          return step("throw", err)
                      })
                  }
              }
              return step("next")
          }
          )
      }
  }
  ;
  babelHelpers.classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function")
      }
  }
  ;
  babelHelpers.createClass = function() {
      function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value"in descriptor)
                  descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor)
          }
      }
      return function(Constructor, protoProps, staticProps) {
          if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
              defineProperties(Constructor, staticProps);
          return Constructor
      }
  }();
  babelHelpers.defineEnumerableProperties = function(obj, descs) {
      for (var key in descs) {
          var desc = descs[key];
          desc.configurable = desc.enumerable = true;
          if ("value"in desc)
              desc.writable = true;
          Object.defineProperty(obj, key, desc)
      }
      return obj
  }
  ;
  babelHelpers.defaults = function(obj, defaults) {
      var keys = Object.getOwnPropertyNames(defaults);
      for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = Object.getOwnPropertyDescriptor(defaults, key);
          if (value && value.configurable && obj[key] === undefined) {
              Object.defineProperty(obj, key, value)
          }
      }
      return obj
  }
  ;
  babelHelpers.defineProperty = function(obj, key, value) {
      if (key in obj) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          })
      } else {
          obj[key] = value
      }
      return obj
  }
  ;
  babelHelpers.extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
              }
          }
      }
      return target
  }
  ;
  babelHelpers.get = function get(object, property, receiver) {
      if (object === null)
          object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
              return undefined
          } else {
              return get(parent, property, receiver)
          }
      } else if ("value"in desc) {
          return desc.value
      } else {
          var getter = desc.get;
          if (getter === undefined) {
              return undefined
          }
          return getter.call(receiver)
      }
  }
  ;
  babelHelpers.inherits = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
          }
      });
      if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
  }
  ;
  babelHelpers.instanceof = function(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return right[Symbol.hasInstance](left)
      } else {
          return left instanceof right
      }
  }
  ;
  babelHelpers.interopRequireDefault = function(obj) {
      return obj && obj.__esModule ? obj : {
          "default": obj
      }
  }
  ;
  babelHelpers.interopRequireWildcard = function(obj) {
      if (obj && obj.__esModule) {
          return obj
      } else {
          var newObj = {};
          if (obj != null) {
              for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                      newObj[key] = obj[key]
              }
          }
          newObj.default = obj;
          return newObj
      }
  }
  ;
  babelHelpers.newArrowCheck = function(innerThis, boundThis) {
      if (innerThis !== boundThis) {
          throw new TypeError("Cannot instantiate an arrow function")
      }
  }
  ;
  babelHelpers.objectDestructuringEmpty = function(obj) {
      if (obj == null)
          throw new TypeError("Cannot destructure undefined")
  }
  ;
  babelHelpers.objectWithoutProperties = function(obj, keys) {
      var target = {};
      for (var i in obj) {
          if (keys.indexOf(i) >= 0)
              continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
              continue;
          target[i] = obj[i]
      }
      return target
  }
  ;
  babelHelpers.possibleConstructorReturn = function(self, call) {
      if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self
  }
  ;
  babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;
  babelHelpers.set = function set(object, property, value, receiver) {
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent !== null) {
              set(parent, property, value, receiver)
          }
      } else if ("value"in desc && desc.writable) {
          desc.value = value
      } else {
          var setter = desc.set;
          if (setter !== undefined) {
              setter.call(receiver, value)
          }
      }
      return value
  }
  ;
  babelHelpers.slicedToArray = function() {
      function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);
                  if (i && _arr.length === i)
                      break
              }
          } catch (err) {
              _d = true;
              _e = err
          } finally {
              try {
                  if (!_n && _i["return"])
                      _i["return"]()
              } finally {
                  if (_d)
                      throw _e
              }
          }
          return _arr
      }
      return function(arr, i) {
          if (Array.isArray(arr)) {
              return arr
          } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i)
          } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }
      }
  }();
  babelHelpers.slicedToArrayLoose = function(arr, i) {
      if (Array.isArray(arr)) {
          return arr
      } else if (Symbol.iterator in Object(arr)) {
          var _arr = [];
          for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done; ) {
              _arr.push(_step.value);
              if (i && _arr.length === i)
                  break
          }
          return _arr
      } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
  }
  ;
  babelHelpers.taggedTemplateLiteral = function(strings, raw) {
      return Object.freeze(Object.defineProperties(strings, {
          raw: {
              value: Object.freeze(raw)
          }
      }))
  }
  ;
  babelHelpers.taggedTemplateLiteralLoose = function(strings, raw) {
      strings.raw = raw;
      return strings
  }
  ;
  babelHelpers.temporalRef = function(val, name, undef) {
      if (val === undef) {
          throw new ReferenceError(name + " is not defined - temporal dead zone")
      } else {
          return val
      }
  }
  ;
  babelHelpers.temporalUndefined = {};
  babelHelpers.toArray = function(arr) {
      return Array.isArray(arr) ? arr : Array.from(arr)
  }
  ;
  babelHelpers.toConsumableArray = function(arr) {
      if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
              arr2[i] = arr[i];
          return arr2
      } else {
          return Array.from(arr)
      }
  }
}
)();
/* Yoda loader for desktop | 2019-7-2 15:39:10 */
!function(t) {
  function e(r) {
      if (n[r])
          return n[r].exports;
      var i = n[r] = {
          exports: {},
          id: r,
          loaded: !1
      };
      return t[r].call(i.exports, i, i.exports, e),
      i.loaded = !0,
      i.exports
  }
  var n = {};
  return e.m = t,
  e.c = n,
  e.p = "",
  e(0)
}([function(t, e, n) {
  "use strict";
  n(1),
  n(2)
}
, function(t, e, n) {
  var r, i;
  !function(a, o) {
      "use strict";
      r = o,
      i = "function" == typeof r ? r.call(e, n, e, t) : r,
      !(void 0 !== i && (t.exports = i))
  }(void 0, function() {
      var t, e, n = Array, r = n.prototype, i = Object, a = i.prototype, o = Function, s = o.prototype, l = String, u = l.prototype, f = Number, c = f.prototype, h = r.slice, d = r.splice, p = r.push, g = r.unshift, b = r.concat, y = r.join, _ = s.call, w = s.apply, v = Math.max, m = Math.min, T = a.toString, k = "function" == typeof Symbol && "symbol" === babelHelpers.typeof(Symbol.toStringTag), E = Function.prototype.toString, x = /^\s*class /, S = function(t) {
          try {
              var e = E.call(t)
                , n = e.replace(/\/\/.*\n/g, "")
                , r = n.replace(/\/\*[.\s\S]*\*\//g, "")
                , i = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
              return x.test(i)
          } catch (t) {
              return !1
          }
      }, O = function(t) {
          try {
              return !S(t) && (E.call(t),
              !0)
          } catch (t) {
              return !1
          }
      }, B = "[object Function]", A = "[object GeneratorFunction]", t = function(t) {
          if (!t)
              return !1;
          if ("function" != typeof t && "object" !== ("undefined" == typeof t ? "undefined" : babelHelpers.typeof(t)))
              return !1;
          if (k)
              return O(t);
          if (S(t))
              return !1;
          var e = T.call(t);
          return e === B || e === A
      }, M = RegExp.prototype.exec, C = function(t) {
          try {
              return M.call(t),
              !0
          } catch (t) {
              return !1
          }
      }, j = "[object RegExp]";
      e = function(t) {
          return "object" === ("undefined" == typeof t ? "undefined" : babelHelpers.typeof(t)) && (k ? C(t) : T.call(t) === j)
      }
      ;
      var P, R = String.prototype.valueOf, I = function(t) {
          try {
              return R.call(t),
              !0
          } catch (t) {
              return !1
          }
      }, D = "[object String]";
      P = function(t) {
          return "string" == typeof t || "object" === ("undefined" == typeof t ? "undefined" : babelHelpers.typeof(t)) && (k ? I(t) : T.call(t) === D)
      }
      ;
      var N = i.defineProperty && function() {
          try {
              var t = {};
              i.defineProperty(t, "x", {
                  enumerable: !1,
                  value: t
              });
              for (var e in t)
                  return !1;
              return t.x === t
          } catch (t) {
              return !1
          }
      }()
        , L = function(t) {
          var e;
          return e = N ? function(t, e, n, r) {
              !r && e in t || i.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: n
              })
          }
          : function(t, e, n, r) {
              !r && e in t || (t[e] = n)
          }
          ,
          function(n, r, i) {
              for (var a in r)
                  t.call(r, a) && e(n, a, r[a], i)
          }
      }(a.hasOwnProperty)
        , F = function(t) {
          var e = "undefined" == typeof t ? "undefined" : babelHelpers.typeof(t);
          return null === t || "object" !== e && "function" !== e
      }
        , z = f.isNaN || function(t) {
          return t !== t
      }
        , U = {
          ToInteger: function(t) {
              var e = +t;
              return z(e) ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))),
              e
          },
          ToPrimitive: function(e) {
              var n, r, i;
              if (F(e))
                  return e;
              if (r = e.valueOf,
              t(r) && (n = r.call(e),
              F(n)))
                  return n;
              if (i = e.toString,
              t(i) && (n = i.call(e),
              F(n)))
                  return n;
              throw new TypeError
          },
          ToObject: function(t) {
              if (null == t)
                  throw new TypeError("can't convert " + t + " to object");
              return i(t)
          },
          ToUint32: function(t) {
              return t >>> 0
          }
      }
        , H = function() {};
      L(s, {
          bind: function(e) {
              var n = this;
              if (!t(n))
                  throw new TypeError("Function.prototype.bind called on incompatible " + n);
              for (var r, a = h.call(arguments, 1), s = function() {
                  if (this instanceof r) {
                      var t = w.call(n, this, b.call(a, h.call(arguments)));
                      return i(t) === t ? t : this
                  }
                  return w.call(n, e, b.call(a, h.call(arguments)))
              }, l = v(0, n.length - a.length), u = [], f = 0; f < l; f++)
                  p.call(u, "$" + f);
              return r = o("binder", "return function (" + y.call(u, ",") + "){ return binder.apply(this, arguments); }")(s),
              n.prototype && (H.prototype = n.prototype,
              r.prototype = new H,
              H.prototype = null),
              r
          }
      });
      var Z = _.bind(a.hasOwnProperty)
        , G = _.bind(a.toString)
        , Y = _.bind(h)
        , V = w.bind(h)
        , X = _.bind(u.slice)
        , W = _.bind(u.split)
        , J = _.bind(u.indexOf)
        , K = _.bind(p)
        , q = _.bind(a.propertyIsEnumerable)
        , $ = _.bind(r.sort)
        , Q = n.isArray || function(t) {
          return "[object Array]" === G(t)
      }
        , tt = 1 !== [].unshift(0);
      L(r, {
          unshift: function() {
              return g.apply(this, arguments),
              this.length
          }
      }, tt),
      L(n, {
          isArray: Q
      });
      var et = i("a")
        , nt = "a" !== et[0] || !(0 in et)
        , rt = function(t) {
          var e = !0
            , n = !0
            , r = !1;
          if (t)
              try {
                  t.call("foo", function(t, n, r) {
                      "object" !== ("undefined" == typeof r ? "undefined" : babelHelpers.typeof(r)) && (e = !1)
                  }),
                  t.call([1], function() {
                      "use strict";
                      n = "string" == typeof this
                  }, "x")
              } catch (t) {
                  r = !0
              }
          return !!t && !r && e && n
      };
      L(r, {
          forEach: function(e) {
              var n, r = U.ToObject(this), i = nt && P(this) ? W(this, "") : r, a = -1, o = U.ToUint32(i.length);
              if (arguments.length > 1 && (n = arguments[1]),
              !t(e))
                  throw new TypeError("Array.prototype.forEach callback must be a function");
              for (; ++a < o; )
                  a in i && ("undefined" == typeof n ? e(i[a], a, r) : e.call(n, i[a], a, r))
          }
      }, !rt(r.forEach)),
      L(r, {
          map: function(e) {
              var r, i = U.ToObject(this), a = nt && P(this) ? W(this, "") : i, o = U.ToUint32(a.length), s = n(o);
              if (arguments.length > 1 && (r = arguments[1]),
              !t(e))
                  throw new TypeError("Array.prototype.map callback must be a function");
              for (var l = 0; l < o; l++)
                  l in a && ("undefined" == typeof r ? s[l] = e(a[l], l, i) : s[l] = e.call(r, a[l], l, i));
              return s
          }
      }, !rt(r.map)),
      L(r, {
          filter: function(e) {
              var n, r, i = U.ToObject(this), a = nt && P(this) ? W(this, "") : i, o = U.ToUint32(a.length), s = [];
              if (arguments.length > 1 && (r = arguments[1]),
              !t(e))
                  throw new TypeError("Array.prototype.filter callback must be a function");
              for (var l = 0; l < o; l++)
                  l in a && (n = a[l],
                  ("undefined" == typeof r ? e(n, l, i) : e.call(r, n, l, i)) && K(s, n));
              return s
          }
      }, !rt(r.filter)),
      L(r, {
          every: function(e) {
              var n, r = U.ToObject(this), i = nt && P(this) ? W(this, "") : r, a = U.ToUint32(i.length);
              if (arguments.length > 1 && (n = arguments[1]),
              !t(e))
                  throw new TypeError("Array.prototype.every callback must be a function");
              for (var o = 0; o < a; o++)
                  if (o in i && !("undefined" == typeof n ? e(i[o], o, r) : e.call(n, i[o], o, r)))
                      return !1;
              return !0
          }
      }, !rt(r.every)),
      L(r, {
          some: function(e) {
              var n, r = U.ToObject(this), i = nt && P(this) ? W(this, "") : r, a = U.ToUint32(i.length);
              if (arguments.length > 1 && (n = arguments[1]),
              !t(e))
                  throw new TypeError("Array.prototype.some callback must be a function");
              for (var o = 0; o < a; o++)
                  if (o in i && ("undefined" == typeof n ? e(i[o], o, r) : e.call(n, i[o], o, r)))
                      return !0;
              return !1
          }
      }, !rt(r.some));
      var it = !1;
      r.reduce && (it = "object" === babelHelpers.typeof(r.reduce.call("es5", function(t, e, n, r) {
          return r
      }))),
      L(r, {
          reduce: function(e) {
              var n = U.ToObject(this)
                , r = nt && P(this) ? W(this, "") : n
                , i = U.ToUint32(r.length);
              if (!t(e))
                  throw new TypeError("Array.prototype.reduce callback must be a function");
              if (0 === i && 1 === arguments.length)
                  throw new TypeError("reduce of empty array with no initial value");
              var a, o = 0;
              if (arguments.length >= 2)
                  a = arguments[1];
              else
                  for (; ; ) {
                      if (o in r) {
                          a = r[o++];
                          break
                      }
                      if (++o >= i)
                          throw new TypeError("reduce of empty array with no initial value")
                  }
              for (; o < i; o++)
                  o in r && (a = e(a, r[o], o, n));
              return a
          }
      }, !it);
      var at = !1;
      r.reduceRight && (at = "object" === babelHelpers.typeof(r.reduceRight.call("es5", function(t, e, n, r) {
          return r
      }))),
      L(r, {
          reduceRight: function(e) {
              var n = U.ToObject(this)
                , r = nt && P(this) ? W(this, "") : n
                , i = U.ToUint32(r.length);
              if (!t(e))
                  throw new TypeError("Array.prototype.reduceRight callback must be a function");
              if (0 === i && 1 === arguments.length)
                  throw new TypeError("reduceRight of empty array with no initial value");
              var a, o = i - 1;
              if (arguments.length >= 2)
                  a = arguments[1];
              else
                  for (; ; ) {
                      if (o in r) {
                          a = r[o--];
                          break
                      }
                      if (--o < 0)
                          throw new TypeError("reduceRight of empty array with no initial value")
                  }
              if (o < 0)
                  return a;
              do
                  o in r && (a = e(a, r[o], o, n));
              while (o--);return a
          }
      }, !at);
      var ot = r.indexOf && [0, 1].indexOf(1, 2) !== -1;
      L(r, {
          indexOf: function(t) {
              var e = nt && P(this) ? W(this, "") : U.ToObject(this)
                , n = U.ToUint32(e.length);
              if (0 === n)
                  return -1;
              var r = 0;
              for (arguments.length > 1 && (r = U.ToInteger(arguments[1])),
              r = r >= 0 ? r : v(0, n + r); r < n; r++)
                  if (r in e && e[r] === t)
                      return r;
              return -1
          }
      }, ot);
      var st = r.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
      L(r, {
          lastIndexOf: function(t) {
              var e = nt && P(this) ? W(this, "") : U.ToObject(this)
                , n = U.ToUint32(e.length);
              if (0 === n)
                  return -1;
              var r = n - 1;
              for (arguments.length > 1 && (r = m(r, U.ToInteger(arguments[1]))),
              r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--)
                  if (r in e && t === e[r])
                      return r;
              return -1
          }
      }, st);
      var lt = function() {
          var t = [1, 2]
            , e = t.splice();
          return 2 === t.length && Q(e) && 0 === e.length
      }();
      L(r, {
          splice: function(t, e) {
              return 0 === arguments.length ? [] : d.apply(this, arguments)
          }
      }, !lt);
      var ut = function() {
          var t = {};
          return r.splice.call(t, 0, 0, 1),
          1 === t.length
      }();
      L(r, {
          splice: function(t, e) {
              if (0 === arguments.length)
                  return [];
              var n = arguments;
              return this.length = v(U.ToInteger(this.length), 0),
              arguments.length > 0 && "number" != typeof e && (n = Y(arguments),
              n.length < 2 ? K(n, this.length - t) : n[1] = U.ToInteger(e)),
              d.apply(this, n)
          }
      }, !ut);
      var ft = function() {
          var t = new n(1e5);
          return t[8] = "x",
          t.splice(1, 1),
          7 === t.indexOf("x")
      }()
        , ct = function() {
          var t = 256
            , e = [];
          return e[t] = "a",
          e.splice(t + 1, 0, "b"),
          "a" === e[t]
      }();
      L(r, {
          splice: function(t, e) {
              for (var n, r = U.ToObject(this), i = [], a = U.ToUint32(r.length), o = U.ToInteger(t), s = o < 0 ? v(a + o, 0) : m(o, a), u = m(v(U.ToInteger(e), 0), a - s), f = 0; f < u; )
                  n = l(s + f),
                  Z(r, n) && (i[f] = r[n]),
                  f += 1;
              var c, h = Y(arguments, 2), d = h.length;
              if (d < u) {
                  f = s;
                  for (var p = a - u; f < p; )
                      n = l(f + u),
                      c = l(f + d),
                      Z(r, n) ? r[c] = r[n] : delete r[c],
                      f += 1;
                  f = a;
                  for (var g = a - u + d; f > g; )
                      delete r[f - 1],
                      f -= 1
              } else if (d > u)
                  for (f = a - u; f > s; )
                      n = l(f + u - 1),
                      c = l(f + d - 1),
                      Z(r, n) ? r[c] = r[n] : delete r[c],
                      f -= 1;
              f = s;
              for (var b = 0; b < h.length; ++b)
                  r[f] = h[b],
                  f += 1;
              return r.length = a - u + d,
              i
          }
      }, !ft || !ct);
      var ht, dt = r.join;
      try {
          ht = "1,2,3" !== Array.prototype.join.call("123", ",")
      } catch (t) {
          ht = !0
      }
      ht && L(r, {
          join: function(t) {
              var e = "undefined" == typeof t ? "," : t;
              return dt.call(P(this) ? W(this, "") : this, e)
          }
      }, ht);
      var pt = "1,2" !== [1, 2].join(void 0);
      pt && L(r, {
          join: function(t) {
              var e = "undefined" == typeof t ? "," : t;
              return dt.call(this, e)
          }
      }, pt);
      var gt = function(t) {
          for (var e = U.ToObject(this), n = U.ToUint32(e.length), r = 0; r < arguments.length; )
              e[n + r] = arguments[r],
              r += 1;
          return e.length = n + r,
          n + r
      }
        , bt = function() {
          var t = {}
            , e = Array.prototype.push.call(t, void 0);
          return 1 !== e || 1 !== t.length || "undefined" != typeof t[0] || !Z(t, 0)
      }();
      L(r, {
          push: function(t) {
              return Q(this) ? p.apply(this, arguments) : gt.apply(this, arguments)
          }
      }, bt);
      var yt = function() {
          var t = []
            , e = t.push(void 0);
          return 1 !== e || 1 !== t.length || "undefined" != typeof t[0] || !Z(t, 0)
      }();
      L(r, {
          push: gt
      }, yt),
      L(r, {
          slice: function(t, e) {
              var n = P(this) ? W(this, "") : this;
              return V(n, arguments)
          }
      }, nt);
      var _t = function() {
          try {
              return [1, 2].sort(null),
              [1, 2].sort({}),
              !0
          } catch (t) {}
          return !1
      }()
        , wt = function() {
          try {
              return [1, 2].sort(/a/),
              !1
          } catch (t) {}
          return !0
      }()
        , vt = function() {
          try {
              return [1, 2].sort(void 0),
              !0
          } catch (t) {}
          return !1
      }();
      L(r, {
          sort: function(e) {
              if ("undefined" == typeof e)
                  return $(this);
              if (!t(e))
                  throw new TypeError("Array.prototype.sort callback must be a function");
              return $(this, e)
          }
      }, _t || !vt || !wt);
      var mt = !q({
          toString: null
      }, "toString")
        , Tt = q(function() {}, "prototype")
        , kt = !Z("x", "0")
        , Et = function(t) {
          var e = t.constructor;
          return e && e.prototype === t
      }
        , xt = {
          $window: !0,
          $console: !0,
          $parent: !0,
          $self: !0,
          $frame: !0,
          $frames: !0,
          $frameElement: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $external: !0,
          $width: !0,
          $height: !0
      }
        , St = function() {
          if ("undefined" == typeof window)
              return !1;
          for (var t in window)
              try {
                  !xt["$" + t] && Z(window, t) && null !== window[t] && "object" === babelHelpers.typeof(window[t]) && Et(window[t])
              } catch (t) {
                  return !0
              }
          return !1
      }()
        , Ot = function(t) {
          if ("undefined" == typeof window || !St)
              return Et(t);
          try {
              return Et(t)
          } catch (t) {
              return !1
          }
      }
        , Bt = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
        , At = Bt.length
        , Mt = function(t) {
          return "[object Arguments]" === G(t)
      }
        , Ct = function(e) {
          return null !== e && "object" === ("undefined" == typeof e ? "undefined" : babelHelpers.typeof(e)) && "number" == typeof e.length && e.length >= 0 && !Q(e) && t(e.callee)
      }
        , jt = Mt(arguments) ? Mt : Ct;
      L(i, {
          keys: function(e) {
              var n = t(e)
                , r = jt(e)
                , i = null !== e && "object" === ("undefined" == typeof e ? "undefined" : babelHelpers.typeof(e))
                , a = i && P(e);
              if (!i && !n && !r)
                  throw new TypeError("Object.keys called on a non-object");
              var o = []
                , s = Tt && n;
              if (a && kt || r)
                  for (var u = 0; u < e.length; ++u)
                      K(o, l(u));
              if (!r)
                  for (var f in e)
                      s && "prototype" === f || !Z(e, f) || K(o, l(f));
              if (mt)
                  for (var c = Ot(e), h = 0; h < At; h++) {
                      var d = Bt[h];
                      c && "constructor" === d || !Z(e, d) || K(o, d)
                  }
              return o
          }
      });
      var Pt = i.keys && function() {
          return 2 === i.keys(arguments).length
      }(1, 2)
        , Rt = i.keys && function() {
          var t = i.keys(arguments);
          return 1 !== arguments.length || 1 !== t.length || 1 !== t[0]
      }(1)
        , It = i.keys;
      L(i, {
          keys: function(t) {
              return It(jt(t) ? Y(t) : t)
          }
      }, !Pt || Rt);
      var Dt, Nt, Lt = 0 !== new Date((-0xc782b5b342b24)).getUTCMonth(), Ft = new Date((-0x55d318d56a724)), zt = new Date(14496624e5), Ut = "Mon, 01 Jan -45875 11:59:59 GMT" !== Ft.toUTCString(), Ht = Ft.getTimezoneOffset();
      Ht < -720 ? (Dt = "Tue Jan 02 -45875" !== Ft.toDateString(),
      Nt = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(zt.toString())) : (Dt = "Mon Jan 01 -45875" !== Ft.toDateString(),
      Nt = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(zt.toString()));
      var Zt = _.bind(Date.prototype.getFullYear)
        , Gt = _.bind(Date.prototype.getMonth)
        , Yt = _.bind(Date.prototype.getDate)
        , Vt = _.bind(Date.prototype.getUTCFullYear)
        , Xt = _.bind(Date.prototype.getUTCMonth)
        , Wt = _.bind(Date.prototype.getUTCDate)
        , Jt = _.bind(Date.prototype.getUTCDay)
        , Kt = _.bind(Date.prototype.getUTCHours)
        , qt = _.bind(Date.prototype.getUTCMinutes)
        , $t = _.bind(Date.prototype.getUTCSeconds)
        , Qt = _.bind(Date.prototype.getUTCMilliseconds)
        , te = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        , ee = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        , ne = function(t, e) {
          return Yt(new Date(e,t,0))
      };
      L(Date.prototype, {
          getFullYear: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = Zt(this);
              return t < 0 && Gt(this) > 11 ? t + 1 : t
          },
          getMonth: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = Zt(this)
                , e = Gt(this);
              return t < 0 && e > 11 ? 0 : e
          },
          getDate: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = Zt(this)
                , e = Gt(this)
                , n = Yt(this);
              if (t < 0 && e > 11) {
                  if (12 === e)
                      return n;
                  var r = ne(0, t + 1);
                  return r - n + 1
              }
              return n
          },
          getUTCFullYear: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = Vt(this);
              return t < 0 && Xt(this) > 11 ? t + 1 : t
          },
          getUTCMonth: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = Vt(this)
                , e = Xt(this);
              return t < 0 && e > 11 ? 0 : e
          },
          getUTCDate: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = Vt(this)
                , e = Xt(this)
                , n = Wt(this);
              if (t < 0 && e > 11) {
                  if (12 === e)
                      return n;
                  var r = ne(0, t + 1);
                  return r - n + 1
              }
              return n
          }
      }, Lt),
      L(Date.prototype, {
          toUTCString: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = Jt(this)
                , e = Wt(this)
                , n = Xt(this)
                , r = Vt(this)
                , i = Kt(this)
                , a = qt(this)
                , o = $t(this);
              return te[t] + ", " + (e < 10 ? "0" + e : e) + " " + ee[n] + " " + r + " " + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + " GMT"
          }
      }, Lt || Ut),
      L(Date.prototype, {
          toDateString: function() {
              if (!(this && this instanceof Date))
                  throw new TypeError("this is not a Date object.");
              var t = this.getDay()
                , e = this.getDate()
                , n = this.getMonth()
                , r = this.getFullYear();
              return te[t] + " " + ee[n] + " " + (e < 10 ? "0" + e : e) + " " + r
          }
      }, Lt || Dt),
      (Lt || Nt) && (Date.prototype.toString = function() {
          if (!(this && this instanceof Date))
              throw new TypeError("this is not a Date object.");
          var t = this.getDay()
            , e = this.getDate()
            , n = this.getMonth()
            , r = this.getFullYear()
            , i = this.getHours()
            , a = this.getMinutes()
            , o = this.getSeconds()
            , s = this.getTimezoneOffset()
            , l = Math.floor(Math.abs(s) / 60)
            , u = Math.floor(Math.abs(s) % 60);
          return te[t] + " " + ee[n] + " " + (e < 10 ? "0" + e : e) + " " + r + " " + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + " GMT" + (s > 0 ? "-" : "+") + (l < 10 ? "0" + l : l) + (u < 10 ? "0" + u : u)
      }
      ,
      N && i.defineProperty(Date.prototype, "toString", {
          configurable: !0,
          enumerable: !1,
          writable: !0
      }));
      var re = -621987552e5
        , ie = "-000001"
        , ae = Date.prototype.toISOString && new Date(re).toISOString().indexOf(ie) === -1
        , oe = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date((-1)).toISOString()
        , se = _.bind(Date.prototype.getTime);
      L(Date.prototype, {
          toISOString: function() {
              if (!isFinite(this) || !isFinite(se(this)))
                  throw new RangeError("Date.prototype.toISOString called on non-finite value.");
              var t = Vt(this)
                , e = Xt(this);
              t += Math.floor(e / 12),
              e = (e % 12 + 12) % 12;
              var n = [e + 1, Wt(this), Kt(this), qt(this), $t(this)];
              t = (t < 0 ? "-" : t > 9999 ? "+" : "") + X("00000" + Math.abs(t), 0 <= t && t <= 9999 ? -4 : -6);
              for (var r = 0; r < n.length; ++r)
                  n[r] = X("00" + n[r], -2);
              return t + "-" + Y(n, 0, 2).join("-") + "T" + Y(n, 2).join(":") + "." + X("000" + Qt(this), -3) + "Z"
          }
      }, ae || oe);
      var le = function() {
          try {
              return Date.prototype.toJSON && null === new Date(NaN).toJSON() && new Date(re).toJSON().indexOf(ie) !== -1 && Date.prototype.toJSON.call({
                  toISOString: function() {
                      return !0
                  }
              })
          } catch (t) {
              return !1
          }
      }();
      le || (Date.prototype.toJSON = function(e) {
          var n = i(this)
            , r = U.ToPrimitive(n);
          if ("number" == typeof r && !isFinite(r))
              return null;
          var a = n.toISOString;
          if (!t(a))
              throw new TypeError("toISOString property is not callable");
          return a.call(n)
      }
      );
      var ue = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z")
        , fe = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"))
        , ce = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
      if (ce || fe || !ue) {
          var he = Math.pow(2, 31) - 1
            , de = z(new Date(1970,0,1,0,0,0,he + 1).getTime());
          Date = function(t) {
              var e = function(n, r, i, a, o, s, u) {
                  var f, c = arguments.length;
                  if (this instanceof t) {
                      var h = s
                        , d = u;
                      if (de && c >= 7 && u > he) {
                          var p = Math.floor(u / he) * he
                            , g = Math.floor(p / 1e3);
                          h += g,
                          d -= 1e3 * g
                      }
                      f = 1 === c && l(n) === n ? new t(e.parse(n)) : c >= 7 ? new t(n,r,i,a,o,h,d) : c >= 6 ? new t(n,r,i,a,o,h) : c >= 5 ? new t(n,r,i,a,o) : c >= 4 ? new t(n,r,i,a) : c >= 3 ? new t(n,r,i) : c >= 2 ? new t(n,r) : c >= 1 ? new t(n instanceof t ? +n : n) : new t
                  } else
                      f = t.apply(this, arguments);
                  return F(f) || L(f, {
                      constructor: e
                  }, !0),
                  f
              }
                , n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$")
                , r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
                , i = function(t, e) {
                  var n = e > 1 ? 1 : 0;
                  return r[e] + Math.floor((t - 1969 + n) / 4) - Math.floor((t - 1901 + n) / 100) + Math.floor((t - 1601 + n) / 400) + 365 * (t - 1970)
              }
                , a = function(e) {
                  var n = 0
                    , r = e;
                  if (de && r > he) {
                      var i = Math.floor(r / he) * he
                        , a = Math.floor(i / 1e3);
                      n += a,
                      r -= 1e3 * a
                  }
                  return f(new t(1970,0,1,0,0,n,r))
              };
              for (var o in t)
                  Z(t, o) && (e[o] = t[o]);
              L(e, {
                  now: t.now,
                  UTC: t.UTC
              }, !0),
              e.prototype = t.prototype,
              L(e.prototype, {
                  constructor: e
              }, !0);
              var s = function(e) {
                  var r = n.exec(e);
                  if (r) {
                      var o, s = f(r[1]), l = f(r[2] || 1) - 1, u = f(r[3] || 1) - 1, c = f(r[4] || 0), h = f(r[5] || 0), d = f(r[6] || 0), p = Math.floor(1e3 * f(r[7] || 0)), g = Boolean(r[4] && !r[8]), b = "-" === r[9] ? 1 : -1, y = f(r[10] || 0), _ = f(r[11] || 0), w = h > 0 || d > 0 || p > 0;
                      return c < (w ? 24 : 25) && h < 60 && d < 60 && p < 1e3 && l > -1 && l < 12 && y < 24 && _ < 60 && u > -1 && u < i(s, l + 1) - i(s, l) && (o = 60 * (24 * (i(s, l) + u) + c + y * b),
                      o = 1e3 * (60 * (o + h + _ * b) + d) + p,
                      g && (o = a(o)),
                      -864e13 <= o && o <= 864e13) ? o : NaN
                  }
                  return t.parse.apply(this, arguments)
              };
              return L(e, {
                  parse: s
              }),
              e
          }(Date)
      }
      Date.now || (Date.now = function() {
          return (new Date).getTime()
      }
      );
      var pe = c.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))
        , ge = {
          base: 1e7,
          size: 6,
          data: [0, 0, 0, 0, 0, 0],
          multiply: function(t, e) {
              for (var n = -1, r = e; ++n < ge.size; )
                  r += t * ge.data[n],
                  ge.data[n] = r % ge.base,
                  r = Math.floor(r / ge.base)
          },
          divide: function(t) {
              for (var e = ge.size, n = 0; --e >= 0; )
                  n += ge.data[e],
                  ge.data[e] = Math.floor(n / t),
                  n = n % t * ge.base
          },
          numToString: function() {
              for (var t = ge.size, e = ""; --t >= 0; )
                  if ("" !== e || 0 === t || 0 !== ge.data[t]) {
                      var n = l(ge.data[t]);
                      "" === e ? e = n : e += X("0000000", 0, 7 - n.length) + n
                  }
              return e
          },
          pow: function t(e, n, r) {
              return 0 === n ? r : n % 2 === 1 ? t(e, n - 1, r * e) : t(e * e, n / 2, r)
          },
          log: function(t) {
              for (var e = 0, n = t; n >= 4096; )
                  e += 12,
                  n /= 4096;
              for (; n >= 2; )
                  e += 1,
                  n /= 2;
              return e
          }
      }
        , be = function(t) {
          var e, n, r, i, a, o, s, u;
          if (e = f(t),
          e = z(e) ? 0 : Math.floor(e),
          e < 0 || e > 20)
              throw new RangeError("Number.toFixed called with invalid number of decimals");
          if (n = f(this),
          z(n))
              return "NaN";
          if (n <= -1e21 || n >= 1e21)
              return l(n);
          if (r = "",
          n < 0 && (r = "-",
          n = -n),
          i = "0",
          n > 1e-21)
              if (a = ge.log(n * ge.pow(2, 69, 1)) - 69,
              o = a < 0 ? n * ge.pow(2, -a, 1) : n / ge.pow(2, a, 1),
              o *= 4503599627370496,
              a = 52 - a,
              a > 0) {
                  for (ge.multiply(0, o),
                  s = e; s >= 7; )
                      ge.multiply(1e7, 0),
                      s -= 7;
                  for (ge.multiply(ge.pow(10, s, 1), 0),
                  s = a - 1; s >= 23; )
                      ge.divide(1 << 23),
                      s -= 23;
                  ge.divide(1 << s),
                  ge.multiply(1, 1),
                  ge.divide(2),
                  i = ge.numToString()
              } else
                  ge.multiply(0, o),
                  ge.multiply(1 << -a, 0),
                  i = ge.numToString() + X("0.00000000000000000000", 2, 2 + e);
          return e > 0 ? (u = i.length,
          i = u <= e ? r + X("0.0000000000000000000", 0, e - u + 2) + i : r + X(i, 0, u - e) + "." + X(i, u - e)) : i = r + i,
          i
      };
      L(c, {
          toFixed: be
      }, pe);
      var ye = function() {
          try {
              return "1" === 1..toPrecision(void 0)
          } catch (t) {
              return !0
          }
      }()
        , _e = c.toPrecision;
      L(c, {
          toPrecision: function(t) {
              return "undefined" == typeof t ? _e.call(this) : _e.call(this, t)
          }
      }, ye),
      2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function() {
          var t = "undefined" == typeof /()??/.exec("")[1]
            , n = Math.pow(2, 32) - 1;
          u.split = function(r, i) {
              var a = String(this);
              if ("undefined" == typeof r && 0 === i)
                  return [];
              if (!e(r))
                  return W(this, r, i);
              var o, s, l, u, f = [], c = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""), h = 0, d = new RegExp(r.source,c + "g");
              t || (o = new RegExp("^" + d.source + "$(?!\\s)",c));
              var g = "undefined" == typeof i ? n : U.ToUint32(i);
              for (s = d.exec(a); s && (l = s.index + s[0].length,
              !(l > h && (K(f, X(a, h, s.index)),
              !t && s.length > 1 && s[0].replace(o, function() {
                  for (var t = 1; t < arguments.length - 2; t++)
                      "undefined" == typeof arguments[t] && (s[t] = void 0)
              }),
              s.length > 1 && s.index < a.length && p.apply(f, Y(s, 1)),
              u = s[0].length,
              h = l,
              f.length >= g))); )
                  d.lastIndex === s.index && d.lastIndex++,
                  s = d.exec(a);
              return h === a.length ? !u && d.test("") || K(f, "") : K(f, X(a, h)),
              f.length > g ? Y(f, 0, g) : f
          }
      }() : "0".split(void 0, 0).length && (u.split = function(t, e) {
          return "undefined" == typeof t && 0 === e ? [] : W(this, t, e)
      }
      );
      var we = u.replace
        , ve = function() {
          var t = [];
          return "x".replace(/x(.)?/g, function(e, n) {
              K(t, n)
          }),
          1 === t.length && "undefined" == typeof t[0]
      }();
      ve || (u.replace = function(n, r) {
          var i = t(r)
            , a = e(n) && /\)[*?]/.test(n.source);
          if (i && a) {
              var o = function(t) {
                  var e = arguments.length
                    , i = n.lastIndex;
                  n.lastIndex = 0;
                  var a = n.exec(t) || [];
                  return n.lastIndex = i,
                  K(a, arguments[e - 2], arguments[e - 1]),
                  r.apply(this, a)
              };
              return we.call(this, n, o)
          }
          return we.call(this, n, r)
      }
      );
      var me = u.substr
        , Te = "".substr && "b" !== "0b".substr(-1);
      L(u, {
          substr: function(t, e) {
              var n = t;
              return t < 0 && (n = v(this.length + t, 0)),
              me.call(this, n, e)
          }
      }, Te);
      var ke = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
        , Ee = "​"
        , xe = "[" + ke + "]"
        , Se = new RegExp("^" + xe + xe + "*")
        , Oe = new RegExp(xe + xe + "*$")
        , Be = u.trim && (ke.trim() || !Ee.trim());
      L(u, {
          trim: function() {
              if ("undefined" == typeof this || null === this)
                  throw new TypeError("can't convert " + this + " to object");
              return l(this).replace(Se, "").replace(Oe, "")
          }
      }, Be);
      var Ae = _.bind(String.prototype.trim)
        , Me = u.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;
      L(u, {
          lastIndexOf: function(t) {
              if ("undefined" == typeof this || null === this)
                  throw new TypeError("can't convert " + this + " to object");
              for (var e = l(this), n = l(t), r = arguments.length > 1 ? f(arguments[1]) : NaN, i = z(r) ? 1 / 0 : U.ToInteger(r), a = m(v(i, 0), e.length), o = n.length, s = a + o; s > 0; ) {
                  s = v(0, s - o);
                  var u = J(X(e, s, a + o), n);
                  if (u !== -1)
                      return s + u
              }
              return -1
          }
      }, Me);
      var Ce = u.lastIndexOf;
      if (L(u, {
          lastIndexOf: function(t) {
              return Ce.apply(this, arguments)
          }
      }, 1 !== u.lastIndexOf.length),
      8 === parseInt(ke + "08") && 22 === parseInt(ke + "0x16") || (parseInt = function(t) {
          var e = /^[\-+]?0[xX]/;
          return function(n, r) {
              var i = Ae(String(n))
                , a = f(r) || (e.test(i) ? 16 : 10);
              return t(i, a)
          }
      }(parseInt)),
      1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function(t) {
          return function(e) {
              var n = Ae(String(e))
                , r = t(n);
              return 0 === r && "-" === X(n, 0, 1) ? -0 : r
          }
      }(parseFloat)),
      "RangeError: test" !== String(new RangeError("test"))) {
          var je = function() {
              if ("undefined" == typeof this || null === this)
                  throw new TypeError("can't convert " + this + " to object");
              var t = this.name;
              "undefined" == typeof t ? t = "Error" : "string" != typeof t && (t = l(t));
              var e = this.message;
              return "undefined" == typeof e ? e = "" : "string" != typeof e && (e = l(e)),
              t ? e ? t + ": " + e : t : e
          };
          Error.prototype.toString = je
      }
      if (N) {
          var Pe = function(t, e) {
              if (q(t, e)) {
                  var n = Object.getOwnPropertyDescriptor(t, e);
                  n.configurable && (n.enumerable = !1,
                  Object.defineProperty(t, e, n))
              }
          };
          Pe(Error.prototype, "message"),
          "" !== Error.prototype.message && (Error.prototype.message = ""),
          Pe(Error.prototype, "name")
      }
      if ("/a/gim" !== String(/a/gim)) {
          var Re = function() {
              var t = "/" + this.source + "/";
              return this.global && (t += "g"),
              this.ignoreCase && (t += "i"),
              this.multiline && (t += "m"),
              t
          };
          RegExp.prototype.toString = Re
      }
  })
}
, function(t, e, n) {
  "use strict";
  n(3);
  var r = n(4)
    , i = babelHelpers.interopRequireDefault(r)
    , a = n(5)
    , o = babelHelpers.interopRequireDefault(a)
    , s = n(6)
    , l = babelHelpers.interopRequireDefault(s)
    , u = n(7)
    , f = babelHelpers.interopRequireDefault(u)
    , c = n(33)
    , h = babelHelpers.interopRequireDefault(c)
    , d = n(38)
    , p = babelHelpers.interopRequireDefault(d);
  (0,
  o.default)(window),
  window.Yoda.request = l.default,
  window.Yoda.Promise = f.default,
  window.Yoda.Ballade = h.default,
  window.Yoda.Adapter = p.default,
  window.Yoda.encode = i.default.encode,
  window.Yoda.decode = i.default.decode
  // window.addEventListener("error", function(t) {
  //     var e = t.filename || ""
  //       , n = t.error || {
  //         message: "yoda",
  //         stack: "error"
  //     }
  //       , r = /mxx\/yoda/gi
  //       , i = r.test(e);
  //     return n && "production" === window.YODA_CONFIG.__ENV__ && i && window.Yoda.CAT.sendLog(window.location.href, "jsError", "【js全局捕获异常】", n.message),
  //     !1
  // })
}
, function(t, e) {
  "use strict";
  window.YODA_CONFIG = {},
  window.YODA_CONFIG.__APP_NAME__ = "yoda",
  window.YODA_CONFIG.__API_URL__ = "https://verify.meituan.com",
  window.YODA_CONFIG.__ENV__ = "production"
}
, function(t, e) {
  "use strict";
  var n = {};
  n.PADCHAR = "=",
  n.ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  n.makeDOMException = function() {
      try {
          return new DOMException(DOMException.INVALID_CHARACTER_ERR)
      } catch (e) {
          var t = new Error("DOM Exception 5");
          return t.code = t.number = 5,
          t.name = t.description = "INVALID_CHARACTER_ERR",
          t.toString = function() {
              return "Error: " + t.name + ": " + t.message
          }
          ,
          t
      }
  }
  ,
  n.getbyte64 = function(t, e) {
      var r = n.ALPHA.indexOf(t.charAt(e));
      if (r === -1)
          throw n.makeDOMException();
      return r
  }
  ,
  n.decode = function(t) {
      t = "" + t;
      var e, r, i, a = n.getbyte64, o = t.length;
      if (0 === o)
          return t;
      if (o % 4 !== 0)
          throw n.makeDOMException();
      e = 0,
      t.charAt(o - 1) === n.PADCHAR && (e = 1,
      t.charAt(o - 2) === n.PADCHAR && (e = 2),
      o -= 4);
      var s = [];
      for (r = 0; r < o; r += 4)
          i = a(t, r) << 18 | a(t, r + 1) << 12 | a(t, r + 2) << 6 | a(t, r + 3),
          s.push(String.fromCharCode(i >> 16, i >> 8 & 255, 255 & i));
      switch (e) {
      case 1:
          i = a(t, r) << 18 | a(t, r + 1) << 12 | a(t, r + 2) << 6,
          s.push(String.fromCharCode(i >> 16, i >> 8 & 255));
          break;
      case 2:
          i = a(t, r) << 18 | a(t, r + 1) << 12,
          s.push(String.fromCharCode(i >> 16))
      }
      return s.join("")
  }
  ,
  n.getbyte = function(t, e) {
      var r = t.charCodeAt(e);
      if (r > 255)
          throw n.makeDOMException();
      return r
  }
  ,
  n.encode = function(t) {
      if (1 !== arguments.length)
          throw new SyntaxError("Not enough arguments");
      var e, r, i = n.PADCHAR, a = n.ALPHA, o = n.getbyte, s = [];
      t = "" + t;
      var l = t.length - t.length % 3;
      if (0 === t.length)
          return t;
      for (e = 0; e < l; e += 3)
          r = o(t, e) << 16 | o(t, e + 1) << 8 | o(t, e + 2),
          s.push(a.charAt(r >> 18)),
          s.push(a.charAt(r >> 12 & 63)),
          s.push(a.charAt(r >> 6 & 63)),
          s.push(a.charAt(63 & r));
      switch (t.length - l) {
      case 1:
          r = o(t, e) << 16,
          s.push(a.charAt(r >> 18) + a.charAt(r >> 12 & 63) + i + i);
          break;
      case 2:
          r = o(t, e) << 16 | o(t, e + 1) << 8,
          s.push(a.charAt(r >> 18) + a.charAt(r >> 12 & 63) + a.charAt(r >> 6 & 63) + i)
      }
      return s.join("")
  }
  ,
  window.btoa || (window.btoa = n.encode),
  window.atob || (window.atob = n.decode),
  t.exports = n
}
, function(t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
      value: !0
  }),
  e.default = function(t) {
      function e(t) {
          switch ("undefined" == typeof t ? "undefined" : babelHelpers.typeof(t)) {
          case "undefined":
              return "undefined";
          case "boolean":
              return "boolean";
          case "number":
              return "number";
          case "string":
              return "string";
          default:
              return null === t ? "null" : "object"
          }
      }
      function n(t) {
          return Object.prototype.toString.call(t).replace(/^\[object *|\]$/g, "")
      }
      function r(t) {
          return "function" == typeof t
      }
      function i(t) {
          if (null === t || t === A)
              throw TypeError();
          return Object(t)
      }
      function a(t) {
          return t >> 0
      }
      function o(t) {
          return t >>> 0
      }
      function s(e) {
          function n(t) {
              Object.defineProperty(e, t, {
                  get: function() {
                      return e._getter(t)
                  },
                  set: function(n) {
                      e._setter(t, n)
                  },
                  enumerable: !0,
                  configurable: !1
              })
          }
          if (!("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS"in t)) {
              if (e.length > M)
                  throw RangeError("Array too large for polyfill");
              var r;
              for (r = 0; r < e.length; r += 1)
                  n(r)
          }
      }
      function l(t, e) {
          var n = 32 - e;
          return t << n >> n
      }
      function u(t, e) {
          var n = 32 - e;
          return t << n >>> n
      }
      function f(t) {
          return [255 & t]
      }
      function c(t) {
          return l(t[0], 8)
      }
      function h(t) {
          return [255 & t]
      }
      function d(t) {
          return u(t[0], 8)
      }
      function p(t) {
          return t = L(Number(t)),
          [t < 0 ? 0 : t > 255 ? 255 : 255 & t]
      }
      function g(t) {
          return [255 & t, t >> 8 & 255]
      }
      function b(t) {
          return l(t[1] << 8 | t[0], 16)
      }
      function y(t) {
          return [255 & t, t >> 8 & 255]
      }
      function _(t) {
          return u(t[1] << 8 | t[0], 16)
      }
      function w(t) {
          return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
      }
      function v(t) {
          return l(t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], 32)
      }
      function m(t) {
          return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
      }
      function T(t) {
          return u(t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], 32)
      }
      function k(t, e, n) {
          function r(t) {
              var e = P(t)
                , n = t - e;
              return n < .5 ? e : n > .5 ? e + 1 : e % 2 ? e + 1 : e
          }
          var i, a, o, s = (1 << e - 1) - 1;
          if (t !== t)
              a = (1 << e) - 1,
              o = N(2, n - 1),
              i = 0;
          else if (t === 1 / 0 || t === -(1 / 0))
              a = (1 << e) - 1,
              o = 0,
              i = t < 0 ? 1 : 0;
          else if (0 === t)
              a = 0,
              o = 0,
              i = 1 / t === -(1 / 0) ? 1 : 0;
          else if (i = t < 0,
          t = j(t),
          t >= N(2, 1 - s)) {
              a = D(P(R(t) / C), 1023);
              var l = t / N(2, a);
              l < 1 && (a -= 1,
              l *= 2),
              l >= 2 && (a += 1,
              l /= 2);
              var u = N(2, n);
              o = r(l * u) - u,
              a += s,
              o / u >= 1 && (a += 1,
              o = 0),
              a > 2 * s && (a = (1 << e) - 1,
              o = 0)
          } else
              a = 0,
              o = r(t / N(2, 1 - s - n));
          var f, c = [];
          for (f = n; f; f -= 1)
              c.push(o % 2 ? 1 : 0),
              o = P(o / 2);
          for (f = e; f; f -= 1)
              c.push(a % 2 ? 1 : 0),
              a = P(a / 2);
          c.push(i ? 1 : 0),
          c.reverse();
          for (var h = c.join(""), d = []; h.length; )
              d.unshift(parseInt(h.substring(0, 8), 2)),
              h = h.substring(8);
          return d
      }
      function E(t, e, n) {
          var r, i, a, o, s, l, u, f, c = [];
          for (r = 0; r < t.length; ++r)
              for (a = t[r],
              i = 8; i; i -= 1)
                  c.push(a % 2 ? 1 : 0),
                  a >>= 1;
          return c.reverse(),
          o = c.join(""),
          s = (1 << e - 1) - 1,
          l = parseInt(o.substring(0, 1), 2) ? -1 : 1,
          u = parseInt(o.substring(1, 1 + e), 2),
          f = parseInt(o.substring(1 + e), 2),
          u === (1 << e) - 1 ? 0 !== f ? NaN : l * (1 / 0) : u > 0 ? l * N(2, u - s) * (1 + f / N(2, n)) : 0 !== f ? l * N(2, -(s - 1)) * (f / N(2, n)) : l < 0 ? -0 : 0
      }
      function x(t) {
          return E(t, 11, 52)
      }
      function S(t) {
          return k(t, 11, 52)
      }
      function O(t) {
          return E(t, 8, 23)
      }
      function B(t) {
          return k(t, 8, 23)
      }
      var A = void 0
        , M = 1e5
        , C = Math.LN2
        , j = Math.abs
        , P = Math.floor
        , R = Math.log
        , I = Math.max
        , D = Math.min
        , N = Math.pow
        , L = Math.round;
      !function() {
          var t = Object.defineProperty
            , e = !function() {
              try {
                  return Object.defineProperty({}, "x", {})
              } catch (t) {
                  return !1
              }
          }();
          t && !e || (Object.defineProperty = function(e, n, r) {
              if (t)
                  try {
                      return t(e, n, r)
                  } catch (t) {}
              if (e !== Object(e))
                  throw TypeError("Object.defineProperty called on non-object");
              return Object.prototype.__defineGetter__ && "get"in r && Object.prototype.__defineGetter__.call(e, n, r.get),
              Object.prototype.__defineSetter__ && "set"in r && Object.prototype.__defineSetter__.call(e, n, r.set),
              "value"in r && (e[n] = r.value),
              e
          }
          )
      }(),
      function() {
          function l(t) {
              if (t = a(t),
              t < 0)
                  throw RangeError("ArrayBuffer size is not a small enough positive integer.");
              Object.defineProperty(this, "byteLength", {
                  value: t
              }),
              Object.defineProperty(this, "_bytes", {
                  value: Array(t)
              });
              for (var e = 0; e < t; e += 1)
                  this._bytes[e] = 0
          }
          function u() {
              if (!arguments.length || "object" !== babelHelpers.typeof(arguments[0]))
                  return function(t) {
                      if (t = a(t),
                      t < 0)
                          throw RangeError("length is not a small enough positive integer.");
                      Object.defineProperty(this, "length", {
                          value: t
                      }),
                      Object.defineProperty(this, "byteLength", {
                          value: t * this.BYTES_PER_ELEMENT
                      }),
                      Object.defineProperty(this, "buffer", {
                          value: new l(this.byteLength)
                      }),
                      Object.defineProperty(this, "byteOffset", {
                          value: 0
                      })
                  }
                  .apply(this, arguments);
              if (arguments.length >= 1 && "object" === e(arguments[0]) && arguments[0]instanceof u)
                  return function(t) {
                      if (this.constructor !== t.constructor)
                          throw TypeError();
                      var e = t.length * this.BYTES_PER_ELEMENT;
                      Object.defineProperty(this, "buffer", {
                          value: new l(e)
                      }),
                      Object.defineProperty(this, "byteLength", {
                          value: e
                      }),
                      Object.defineProperty(this, "byteOffset", {
                          value: 0
                      }),
                      Object.defineProperty(this, "length", {
                          value: t.length
                      });
                      for (var n = 0; n < this.length; n += 1)
                          this._setter(n, t._getter(n))
                  }
                  .apply(this, arguments);
              if (arguments.length >= 1 && "object" === e(arguments[0]) && !(arguments[0]instanceof u) && !(arguments[0]instanceof l || "ArrayBuffer" === n(arguments[0])))
                  return function(t) {
                      var e = t.length * this.BYTES_PER_ELEMENT;
                      Object.defineProperty(this, "buffer", {
                          value: new l(e)
                      }),
                      Object.defineProperty(this, "byteLength", {
                          value: e
                      }),
                      Object.defineProperty(this, "byteOffset", {
                          value: 0
                      }),
                      Object.defineProperty(this, "length", {
                          value: t.length
                      });
                      for (var n = 0; n < this.length; n += 1) {
                          var r = t[n];
                          this._setter(n, Number(r))
                      }
                  }
                  .apply(this, arguments);
              if (arguments.length >= 1 && "object" === e(arguments[0]) && (arguments[0]instanceof l || "ArrayBuffer" === n(arguments[0])))
                  return function(t, e, n) {
                      if (e = o(e),
                      e > t.byteLength)
                          throw RangeError("byteOffset out of range");
                      if (e % this.BYTES_PER_ELEMENT)
                          throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");
                      if (n === A) {
                          var r = t.byteLength - e;
                          if (r % this.BYTES_PER_ELEMENT)
                              throw RangeError("length of buffer minus byteOffset not a multiple of the element size");
                          n = r / this.BYTES_PER_ELEMENT
                      } else
                          n = o(n),
                          r = n * this.BYTES_PER_ELEMENT;
                      if (e + r > t.byteLength)
                          throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
                      Object.defineProperty(this, "buffer", {
                          value: t
                      }),
                      Object.defineProperty(this, "byteLength", {
                          value: r
                      }),
                      Object.defineProperty(this, "byteOffset", {
                          value: e
                      }),
                      Object.defineProperty(this, "length", {
                          value: n
                      })
                  }
                  .apply(this, arguments);
              throw TypeError()
          }
          function k(t, e, n) {
              var r = function t() {
                  Object.defineProperty(this, "constructor", {
                      value: t
                  }),
                  u.apply(this, arguments),
                  s(this)
              };
              "__proto__"in r ? r.__proto__ = u : (r.from = u.from,
              r.of = u.of),
              r.BYTES_PER_ELEMENT = t;
              var i = function() {};
              return i.prototype = E,
              r.prototype = new i,
              Object.defineProperty(r.prototype, "BYTES_PER_ELEMENT", {
                  value: t
              }),
              Object.defineProperty(r.prototype, "_pack", {
                  value: e
              }),
              Object.defineProperty(r.prototype, "_unpack", {
                  value: n
              }),
              r
          }
          t.ArrayBuffer = t.ArrayBuffer || l,
          Object.defineProperty(u, "from", {
              value: function(t) {
                  return new this(t)
              }
          }),
          Object.defineProperty(u, "of", {
              value: function() {
                  return new this(arguments)
              }
          });
          var E = {};
          u.prototype = E,
          Object.defineProperty(u.prototype, "_getter", {
              value: function(t) {
                  if (arguments.length < 1)
                      throw SyntaxError("Not enough arguments");
                  if (t = o(t),
                  t >= this.length)
                      return A;
                  var e, n, r = [];
                  for (e = 0,
                  n = this.byteOffset + t * this.BYTES_PER_ELEMENT; e < this.BYTES_PER_ELEMENT; e += 1,
                  n += 1)
                      r.push(this.buffer._bytes[n]);
                  return this._unpack(r)
              }
          }),
          Object.defineProperty(u.prototype, "get", {
              value: u.prototype._getter
          }),
          Object.defineProperty(u.prototype, "_setter", {
              value: function(t, e) {
                  if (arguments.length < 2)
                      throw SyntaxError("Not enough arguments");
                  if (t = o(t),
                  !(t >= this.length)) {
                      var n, r, i = this._pack(e);
                      for (n = 0,
                      r = this.byteOffset + t * this.BYTES_PER_ELEMENT; n < this.BYTES_PER_ELEMENT; n += 1,
                      r += 1)
                          this.buffer._bytes[r] = i[n]
                  }
              }
          }),
          Object.defineProperty(u.prototype, "constructor", {
              value: u
          }),
          Object.defineProperty(u.prototype, "copyWithin", {
              value: function(t, e) {
                  var n = arguments[2]
                    , r = i(this)
                    , s = r.length
                    , l = o(s);
                  l = I(l, 0);
                  var u, f = a(t);
                  u = f < 0 ? I(l + f, 0) : D(f, l);
                  var c, h = a(e);
                  c = h < 0 ? I(l + h, 0) : D(h, l);
                  var d;
                  d = n === A ? l : a(n);
                  var p;
                  p = d < 0 ? I(l + d, 0) : D(d, l);
                  var g, b = D(p - c, l - u);
                  for (c < u && u < c + b ? (g = -1,
                  c = c + b - 1,
                  u = u + b - 1) : g = 1; b > 0; )
                      r._setter(u, r._getter(c)),
                      c += g,
                      u += g,
                      b -= 1;
                  return r
              }
          }),
          Object.defineProperty(u.prototype, "every", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (!r(t))
                      throw TypeError();
                  for (var i = arguments[1], a = 0; a < n; a++)
                      if (!t.call(i, e._getter(a), a, e))
                          return !1;
                  return !0
              }
          }),
          Object.defineProperty(u.prototype, "fill", {
              value: function(t) {
                  var e = arguments[1]
                    , n = arguments[2]
                    , r = i(this)
                    , s = r.length
                    , l = o(s);
                  l = I(l, 0);
                  var u, f = a(e);
                  u = f < 0 ? I(l + f, 0) : D(f, l);
                  var c;
                  c = n === A ? l : a(n);
                  var h;
                  for (h = c < 0 ? I(l + c, 0) : D(c, l); u < h; )
                      r._setter(u, t),
                      u += 1;
                  return r
              }
          }),
          Object.defineProperty(u.prototype, "filter", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (!r(t))
                      throw TypeError();
                  for (var i = [], a = arguments[1], s = 0; s < n; s++) {
                      var l = e._getter(s);
                      t.call(a, l, s, e) && i.push(l)
                  }
                  return new this.constructor(i)
              }
          }),
          Object.defineProperty(u.prototype, "find", {
              value: function(t) {
                  var e = i(this)
                    , n = e.length
                    , a = o(n);
                  if (!r(t))
                      throw TypeError();
                  for (var s = arguments.length > 1 ? arguments[1] : A, l = 0; l < a; ) {
                      var u = e._getter(l)
                        , f = t.call(s, u, l, e);
                      if (Boolean(f))
                          return u;
                      ++l
                  }
                  return A
              }
          }),
          Object.defineProperty(u.prototype, "findIndex", {
              value: function(t) {
                  var e = i(this)
                    , n = e.length
                    , a = o(n);
                  if (!r(t))
                      throw TypeError();
                  for (var s = arguments.length > 1 ? arguments[1] : A, l = 0; l < a; ) {
                      var u = e._getter(l)
                        , f = t.call(s, u, l, e);
                      if (Boolean(f))
                          return l;
                      ++l
                  }
                  return -1
              }
          }),
          Object.defineProperty(u.prototype, "forEach", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (!r(t))
                      throw TypeError();
                  for (var i = arguments[1], a = 0; a < n; a++)
                      t.call(i, e._getter(a), a, e)
              }
          }),
          Object.defineProperty(u.prototype, "indexOf", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (0 === n)
                      return -1;
                  var r = 0;
                  if (arguments.length > 0 && (r = Number(arguments[1]),
                  r !== r ? r = 0 : 0 !== r && r !== 1 / 0 && r !== -(1 / 0) && (r = (r > 0 || -1) * P(j(r)))),
                  r >= n)
                      return -1;
                  for (var i = r >= 0 ? r : I(n - j(r), 0); i < n; i++)
                      if (e._getter(i) === t)
                          return i;
                  return -1
              }
          }),
          Object.defineProperty(u.prototype, "join", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  for (var e = Object(this), n = o(e.length), r = Array(n), i = 0; i < n; ++i)
                      r[i] = e._getter(i);
                  return r.join(t === A ? "," : t)
              }
          }),
          Object.defineProperty(u.prototype, "lastIndexOf", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (0 === n)
                      return -1;
                  var r = n;
                  arguments.length > 1 && (r = Number(arguments[1]),
                  r !== r ? r = 0 : 0 !== r && r !== 1 / 0 && r !== -(1 / 0) && (r = (r > 0 || -1) * P(j(r))));
                  for (var i = r >= 0 ? D(r, n - 1) : n - j(r); i >= 0; i--)
                      if (e._getter(i) === t)
                          return i;
                  return -1
              }
          }),
          Object.defineProperty(u.prototype, "map", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (!r(t))
                      throw TypeError();
                  var i = [];
                  i.length = n;
                  for (var a = arguments[1], s = 0; s < n; s++)
                      i[s] = t.call(a, e._getter(s), s, e);
                  return new this.constructor(i)
              }
          }),
          Object.defineProperty(u.prototype, "reduce", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (!r(t))
                      throw TypeError();
                  if (0 === n && 1 === arguments.length)
                      throw TypeError();
                  var i, a = 0;
                  for (i = arguments.length >= 2 ? arguments[1] : e._getter(a++); a < n; )
                      i = t.call(A, i, e._getter(a), a, e),
                      a++;
                  return i
              }
          }),
          Object.defineProperty(u.prototype, "reduceRight", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (!r(t))
                      throw TypeError();
                  if (0 === n && 1 === arguments.length)
                      throw TypeError();
                  var i, a = n - 1;
                  for (i = arguments.length >= 2 ? arguments[1] : e._getter(a--); a >= 0; )
                      i = t.call(A, i, e._getter(a), a, e),
                      a--;
                  return i
              }
          }),
          Object.defineProperty(u.prototype, "reverse", {
              value: function() {
                  if (this === A || null === this)
                      throw TypeError();
                  for (var t = Object(this), e = o(t.length), n = P(e / 2), r = 0, i = e - 1; r < n; ++r,
                  --i) {
                      var a = t._getter(r);
                      t._setter(r, t._getter(i)),
                      t._setter(i, a)
                  }
                  return t
              }
          }),
          Object.defineProperty(u.prototype, "set", {
              value: function(t, e) {
                  if (arguments.length < 1)
                      throw SyntaxError("Not enough arguments");
                  var n, r, i, a, s, l, u, f, c, h;
                  if ("object" === babelHelpers.typeof(arguments[0]) && arguments[0].constructor === this.constructor) {
                      if (n = arguments[0],
                      i = o(arguments[1]),
                      i + n.length > this.length)
                          throw RangeError("Offset plus length of array is out of range");
                      if (f = this.byteOffset + i * this.BYTES_PER_ELEMENT,
                      c = n.length * this.BYTES_PER_ELEMENT,
                      n.buffer === this.buffer) {
                          for (h = [],
                          s = 0,
                          l = n.byteOffset; s < c; s += 1,
                          l += 1)
                              h[s] = n.buffer._bytes[l];
                          for (s = 0,
                          u = f; s < c; s += 1,
                          u += 1)
                              this.buffer._bytes[u] = h[s]
                      } else
                          for (s = 0,
                          l = n.byteOffset,
                          u = f; s < c; s += 1,
                          l += 1,
                          u += 1)
                              this.buffer._bytes[u] = n.buffer._bytes[l]
                  } else {
                      if ("object" !== babelHelpers.typeof(arguments[0]) || "undefined" == typeof arguments[0].length)
                          throw TypeError("Unexpected argument type(s)");
                      if (r = arguments[0],
                      a = o(r.length),
                      i = o(arguments[1]),
                      i + a > this.length)
                          throw RangeError("Offset plus length of array is out of range");
                      for (s = 0; s < a; s += 1)
                          l = r[s],
                          this._setter(i + s, Number(l))
                  }
              }
          }),
          Object.defineProperty(u.prototype, "slice", {
              value: function(t, e) {
                  for (var n = i(this), r = n.length, s = o(r), l = a(t), u = l < 0 ? I(s + l, 0) : D(l, s), f = e === A ? s : a(e), c = f < 0 ? I(s + f, 0) : D(f, s), h = c - u, d = n.constructor, p = new d(h), g = 0; u < c; ) {
                      var b = n._getter(u);
                      p._setter(g, b),
                      ++u,
                      ++g
                  }
                  return p
              }
          }),
          Object.defineProperty(u.prototype, "some", {
              value: function(t) {
                  if (this === A || null === this)
                      throw TypeError();
                  var e = Object(this)
                    , n = o(e.length);
                  if (!r(t))
                      throw TypeError();
                  for (var i = arguments[1], a = 0; a < n; a++)
                      if (t.call(i, e._getter(a), a, e))
                          return !0;
                  return !1
              }
          }),
          Object.defineProperty(u.prototype, "sort", {
              value: function(t) {
                  function e(e, n) {
                      return e !== e && n !== n ? 0 : e !== e ? 1 : n !== n ? -1 : t !== A ? t(e, n) : e < n ? -1 : e > n ? 1 : 0
                  }
                  if (this === A || null === this)
                      throw TypeError();
                  for (var n = Object(this), r = o(n.length), i = Array(r), a = 0; a < r; ++a)
                      i[a] = n._getter(a);
                  for (i.sort(e),
                  a = 0; a < r; ++a)
                      n._setter(a, i[a]);
                  return n
              }
          }),
          Object.defineProperty(u.prototype, "subarray", {
              value: function(t, e) {
                  function n(t, e, n) {
                      return t < e ? e : t > n ? n : t
                  }
                  t = a(t),
                  e = a(e),
                  arguments.length < 1 && (t = 0),
                  arguments.length < 2 && (e = this.length),
                  t < 0 && (t = this.length + t),
                  e < 0 && (e = this.length + e),
                  t = n(t, 0, this.length),
                  e = n(e, 0, this.length);
                  var r = e - t;
                  return r < 0 && (r = 0),
                  new this.constructor(this.buffer,this.byteOffset + t * this.BYTES_PER_ELEMENT,r)
              }
          });
          var M = k(1, f, c)
            , C = k(1, h, d)
            , R = k(1, p, d)
            , N = k(2, g, b)
            , L = k(2, y, _)
            , F = k(4, w, v)
            , z = k(4, m, T)
            , U = k(4, B, O)
            , H = k(8, S, x)
            , Z = document.documentMode || +(navigator.userAgent.match(/MSIE (\d+)/) && RegExp.$1) || !t.Int8Array;
          t.Int8Array = Z ? M : t.Int8Array,
          t.Uint8Array = Z ? C : t.Uint8Array,
          t.Uint8ClampedArray = Z ? R : t.Uint8ClampedArray,
          t.Int16Array = Z ? N : t.Int16Array,
          t.Uint16Array = Z ? L : t.Uint16Array,
          t.Int32Array = Z ? F : t.Int32Array,
          t.Uint32Array = Z ? z : t.Uint32Array,
          t.Float32Array = Z ? U : t.Float32Array,
          t.Float64Array = Z ? H : t.Float64Array
      }(),
      function() {
          function e(t, e) {
              return r(t.get) ? t.get(e) : t[e]
          }
          function i(t, e, r) {
              if (!(t instanceof ArrayBuffer || "ArrayBuffer" === n(t)))
                  throw TypeError();
              if (e = o(e),
              e > t.byteLength)
                  throw RangeError("byteOffset out of range");
              if (r = r === A ? t.byteLength - e : o(r),
              e + r > t.byteLength)
                  throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
              Object.defineProperty(this, "buffer", {
                  value: t
              }),
              Object.defineProperty(this, "byteLength", {
                  value: r
              }),
              Object.defineProperty(this, "byteOffset", {
                  value: e
              })
          }
          function a(t) {
              return function(n, r) {
                  if (n = o(n),
                  n + t.BYTES_PER_ELEMENT > this.byteLength)
                      throw RangeError("Array index out of range");
                  n += this.byteOffset;
                  for (var i = new Uint8Array(this.buffer,n,t.BYTES_PER_ELEMENT), a = [], s = 0; s < t.BYTES_PER_ELEMENT; s += 1)
                      a.push(e(i, s));
                  return Boolean(r) === Boolean(l) && a.reverse(),
                  e(new t(new Uint8Array(a).buffer), 0)
              }
          }
          function s(t) {
              return function(n, r, i) {
                  if (n = o(n),
                  n + t.BYTES_PER_ELEMENT > this.byteLength)
                      throw RangeError("Array index out of range");
                  var a, s, u = new t([r]), f = new Uint8Array(u.buffer), c = [];
                  for (a = 0; a < t.BYTES_PER_ELEMENT; a += 1)
                      c.push(e(f, a));
                  Boolean(i) === Boolean(l) && c.reverse(),
                  s = new Uint8Array(this.buffer,n,t.BYTES_PER_ELEMENT),
                  s.set(c)
              }
          }
          var l = function() {
              var t = new Uint16Array([4660])
                , n = new Uint8Array(t.buffer);
              return 18 === e(n, 0)
          }();
          Object.defineProperty(i.prototype, "getUint8", {
              value: a(Uint8Array)
          }),
          Object.defineProperty(i.prototype, "getInt8", {
              value: a(Int8Array)
          }),
          Object.defineProperty(i.prototype, "getUint16", {
              value: a(Uint16Array)
          }),
          Object.defineProperty(i.prototype, "getInt16", {
              value: a(Int16Array)
          }),
          Object.defineProperty(i.prototype, "getUint32", {
              value: a(Uint32Array)
          }),
          Object.defineProperty(i.prototype, "getInt32", {
              value: a(Int32Array)
          }),
          Object.defineProperty(i.prototype, "getFloat32", {
              value: a(Float32Array)
          }),
          Object.defineProperty(i.prototype, "getFloat64", {
              value: a(Float64Array)
          }),
          Object.defineProperty(i.prototype, "setUint8", {
              value: s(Uint8Array)
          }),
          Object.defineProperty(i.prototype, "setInt8", {
              value: s(Int8Array)
          }),
          Object.defineProperty(i.prototype, "setUint16", {
              value: s(Uint16Array)
          }),
          Object.defineProperty(i.prototype, "setInt16", {
              value: s(Int16Array)
          }),
          Object.defineProperty(i.prototype, "setUint32", {
              value: s(Uint32Array)
          }),
          Object.defineProperty(i.prototype, "setInt32", {
              value: s(Int32Array)
          }),
          Object.defineProperty(i.prototype, "setFloat32", {
              value: s(Float32Array)
          }),
          Object.defineProperty(i.prototype, "setFloat64", {
              value: s(Float64Array)
          }),
          t.DataView = t.DataView || i
      }()
  }
}
, function(t, e, n) {
  "use strict";
  function r(t, e, n, r) {
      return r = r || {},
      r["Content-Type"] = "application/x-www-form-urlencoded",
      new l.default(function(i, a) {
          var o = Date.now()
            , s = new XMLHttpRequest;
          if ("withCredentials"in s) {
              if (s.open(e, t, !0),
              r)
                  for (var l in r)
                      r.hasOwnProperty(l) && s.setRequestHeader(l, r[l]);
              s.onload = function() {
                  if (4 === s.readyState)
                      if (s.status >= 200 && s.status < 300) {
                          var e = JSON.parse(s.response)
                            , n = 1;
                          e.status && (n = e.status),
                          window.Yoda && window.Yoda.CAT && window.Yoda.CAT.postBatch(t, 0, 0, Date.now() - o, s.status + "|" + n, "ajax"),
                          i(e),
                          s = null
                      } else
                          a(new Error(s.statusText)),
                          s = null
              }
              ,
              s.ontimeout = function(e) {
                  window.Yoda.CAT.postBatch(t, 0, 0, Date.now() - o, "500|0", "ajax"),
                  window.Yoda.CAT.sendLog(t, "ajaxError", "【请求后端API接口超时】", e.message),
                  a(new Error("请求超时:" + t)),
                  s = null
              }
              ,
              s.onerror = function(e) {
                  window.Yoda.CAT.postBatch(t, 0, 0, Date.now() - o, "500|0", "ajax"),
                  window.Yoda.CAT.sendLog(t, "ajaxError", "【请求后端API接口ERROR】", e.message),
                  a(new Error(s.statusText)),
                  s = null
              }
              ,
              s.send(n)
          } else
              "undefined" != typeof XDomainRequest ? (0,
              f.default)({
                  url: t,
                  callback: "callback",
                  data: n,
                  success: function(t) {
                      i(t)
                  },
                  fail: function(t) {
                      a(new Error(t))
                  },
                  time: 1e4
              }) : (a(new Error("创建xhr对象失败")),
              window.Yoda.CAT.sendLog(t, "ajaxError", "【请求后端API接口】", "创建XMLHttpRequest对象失败"),
              s = null)
      }
      ).catch(function(e) {
          "production" === window.YODA_CONFIG.__ENV__ && window.Yoda.CAT.sendLog(t, "ajaxError", "【请求后端API接口】:发生异常promise-catch", e.message)
      })
  }
  function i(t) {
      var e = "&";
      return t.indexOf("?") === -1 && (e = "?"),
      t += e + o("GET", t, ""),
      r(t, "GET", null)
  }
  function a(t, e, n) {
      if (null !== e && "object" === ("undefined" == typeof e ? "undefined" : babelHelpers.typeof(e)) && !(e instanceof String || window.FormData && e instanceof window.FormData)) {
          var i = [];
          for (var a in e)
              i.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
          e = i.join("&")
      }
      var s = "&";
      return (!e || e.length < 1) && (s = ""),
      e += s + o("POST", t, e),
      r(t, "POST", e, n)
  }
  function o(t, e, n) {
      try {
          if (e.indexOf(d._a) > 0 || n.length > 0 && n.indexOf(d._a) > 0)
              return "";
          var r = "";
          return "GET" === t ? r = d.reload(e) : (e = e.indexOf("?") > 0 ? e + "&" + n : e + "?" + n,
          r = d.reload(e)),
          r || window.Yoda.CAT.sendLog(e, "jsError", "【url参数处理异常】", "t 为空"),
          encodeURIComponent(d._a) + "=" + encodeURIComponent(r)
      } catch (t) {
          "production" === window.YODA_CONFIG.__ENV__ && window.Yoda.CAT.sendLog(e, "jsError", "【url参数处理异常】", t.message)
      }
  }
  var s = n(7)
    , l = babelHelpers.interopRequireDefault(s)
    , u = n(11)
    , f = babelHelpers.interopRequireDefault(u)
    , c = n(12)
    , h = babelHelpers.interopRequireDefault(c)
    , d = new h.default
    , p = {
      post: a,
      get: i
  };
  t.exports = p
}
, function(t, e, n) {
  (function(e) {
      !function(n) {
          function r() {}
          function i(t, e) {
              return function() {
                  t.apply(e, arguments)
              }
          }
          function a(t) {
              if ("object" != typeof this)
                  throw new TypeError("Promises must be constructed via new");
              if ("function" != typeof t)
                  throw new TypeError("not a function");
              this._state = 0,
              this._handled = !1,
              this._value = void 0,
              this._deferreds = [],
              c(t, this)
          }
          function o(t, e) {
              for (; 3 === t._state; )
                  t = t._value;
              return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0,
              void a._immediateFn(function() {
                  var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                  if (null === n)
                      return void (1 === t._state ? s : l)(e.promise, t._value);
                  var r;
                  try {
                      r = n(t._value)
                  } catch (t) {
                      return void l(e.promise, t)
                  }
                  s(e.promise, r)
              }))
          }
          function s(t, e) {
              try {
                  if (e === t)
                      throw new TypeError("A promise cannot be resolved with itself.");
                  if (e && ("object" == typeof e || "function" == typeof e)) {
                      var n = e.then;
                      if (e instanceof a)
                          return t._state = 3,
                          t._value = e,
                          void u(t);
                      if ("function" == typeof n)
                          return void c(i(n, e), t)
                  }
                  t._state = 1,
                  t._value = e,
                  u(t)
              } catch (e) {
                  l(t, e)
              }
          }
          function l(t, e) {
              t._state = 2,
              t._value = e,
              u(t)
          }
          function u(t) {
              2 === t._state && 0 === t._deferreds.length && a._immediateFn(function() {
                  t._handled || a._unhandledRejectionFn(t._value)
              });
              for (var e = 0, n = t._deferreds.length; e < n; e++)
                  o(t, t._deferreds[e]);
              t._deferreds = null
          }
          function f(t, e, n) {
              this.onFulfilled = "function" == typeof t ? t : null,
              this.onRejected = "function" == typeof e ? e : null,
              this.promise = n
          }
          function c(t, e) {
              var n = !1;
              try {
                  t(function(t) {
                      n || (n = !0,
                      s(e, t))
                  }, function(t) {
                      n || (n = !0,
                      l(e, t))
                  })
              } catch (t) {
                  if (n)
                      return;
                  n = !0,
                  l(e, t)
              }
          }
          var h = setTimeout;
          a.prototype.catch = function(t) {
              return this.then(null, t)
          }
          ,
          a.prototype.then = function(t, e) {
              var n = new this.constructor(r);
              return o(this, new f(t,e,n)),
              n
          }
          ,
          a.all = function(t) {
              var e = Array.prototype.slice.call(t);
              return new a(function(t, n) {
                  function r(a, o) {
                      try {
                          if (o && ("object" == typeof o || "function" == typeof o)) {
                              var s = o.then;
                              if ("function" == typeof s)
                                  return void s.call(o, function(t) {
                                      r(a, t)
                                  }, n)
                          }
                          e[a] = o,
                          0 === --i && t(e)
                      } catch (t) {
                          n(t)
                      }
                  }
                  if (0 === e.length)
                      return t([]);
                  for (var i = e.length, a = 0; a < e.length; a++)
                      r(a, e[a])
              }
              )
          }
          ,
          a.resolve = function(t) {
              return t && "object" == typeof t && t.constructor === a ? t : new a(function(e) {
                  e(t)
              }
              )
          }
          ,
          a.reject = function(t) {
              return new a(function(e, n) {
                  n(t)
              }
              )
          }
          ,
          a.race = function(t) {
              return new a(function(e, n) {
                  for (var r = 0, i = t.length; r < i; r++)
                      t[r].then(e, n)
              }
              )
          }
          ,
          a._immediateFn = "function" == typeof e && function(t) {
              e(t)
          }
          || function(t) {
              h(t, 0)
          }
          ,
          a._unhandledRejectionFn = function(t) {
              "undefined" != typeof console && console
          }
          ,
          a._setImmediateFn = function(t) {
              a._immediateFn = t
          }
          ,
          a._setUnhandledRejectionFn = function(t) {
              a._unhandledRejectionFn = t
          }
          ,
          "undefined" != typeof t && t.exports ? t.exports = a : n.Promise || (n.Promise = a)
      }(this)
  }
  ).call(e, n(8).setImmediate)
}
, function(t, e, n) {
  function r(t, e) {
      this._id = t,
      this._clearFn = e
  }
  var i = Function.prototype.apply;
  e.setTimeout = function() {
      return new r(i.call(setTimeout, window, arguments),clearTimeout)
  }
  ,
  e.setInterval = function() {
      return new r(i.call(setInterval, window, arguments),clearInterval)
  }
  ,
  e.clearTimeout = e.clearInterval = function(t) {
      t && t.close()
  }
  ,
  r.prototype.unref = r.prototype.ref = function() {}
  ,
  r.prototype.close = function() {
      this._clearFn.call(window, this._id)
  }
  ,
  e.enroll = function(t, e) {
      clearTimeout(t._idleTimeoutId),
      t._idleTimeout = e
  }
  ,
  e.unenroll = function(t) {
      clearTimeout(t._idleTimeoutId),
      t._idleTimeout = -1
  }
  ,
  e._unrefActive = e.active = function(t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function() {
          t._onTimeout && t._onTimeout()
      }, e))
  }
  ,
  n(9),
  e.setImmediate = setImmediate,
  e.clearImmediate = clearImmediate
}
, function(t, e, n) {
  (function(t, e) {
      !function(t, n) {
          "use strict";
          function r(t) {
              "function" != typeof t && (t = new Function("" + t));
              for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)
                  e[n] = arguments[n + 1];
              var r = {
                  callback: t,
                  args: e
              };
              return g[p] = r,
              d(p),
              p++
          }
          function i(t) {
              delete g[t]
          }
          function a(t) {
              var e = t.callback
                , r = t.args;
              switch (r.length) {
              case 0:
                  e();
                  break;
              case 1:
                  e(r[0]);
                  break;
              case 2:
                  e(r[0], r[1]);
                  break;
              case 3:
                  e(r[0], r[1], r[2]);
                  break;
              default:
                  e.apply(n, r)
              }
          }
          function o(t) {
              if (b)
                  setTimeout(o, 0, t);
              else {
                  var e = g[t];
                  if (e) {
                      b = !0;
                      try {
                          a(e)
                      } finally {
                          i(t),
                          b = !1
                      }
                  }
              }
          }
          function s() {
              d = function(t) {
                  e.nextTick(function() {
                      o(t)
                  })
              }
          }
          function l() {
              if (t.postMessage && !t.importScripts) {
                  var e = !0
                    , n = t.onmessage;
                  return t.onmessage = function() {
                      e = !1
                  }
                  ,
                  t.postMessage("", "*"),
                  t.onmessage = n,
                  e
              }
          }
          function u() {
              var e = "setImmediate$" + Math.random() + "$"
                , n = function(n) {
                  n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && o(+n.data.slice(e.length))
              };
              t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n),
              d = function(n) {
                  t.postMessage(e + n, "*")
              }
          }
          function f() {
              var t = new MessageChannel;
              t.port1.onmessage = function(t) {
                  var e = t.data;
                  o(e)
              }
              ,
              d = function(e) {
                  t.port2.postMessage(e)
              }
          }
          function c() {
              var t = y.documentElement;
              d = function(e) {
                  var n = y.createElement("script");
                  n.onreadystatechange = function() {
                      o(e),
                      n.onreadystatechange = null,
                      t.removeChild(n),
                      n = null
                  }
                  ,
                  t.appendChild(n)
              }
          }
          function h() {
              d = function(t) {
                  setTimeout(o, 0, t)
              }
          }
          if (!t.setImmediate) {
              var d, p = 1, g = {}, b = !1, y = t.document, _ = Object.getPrototypeOf && Object.getPrototypeOf(t);
              _ = _ && _.setTimeout ? _ : t,
              "[object process]" === {}.toString.call(t.process) ? s() : l() ? u() : t.MessageChannel ? f() : y && "onreadystatechange"in y.createElement("script") ? c() : h(),
              _.setImmediate = r,
              _.clearImmediate = i
          }
      }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self)
  }
  ).call(e, function() {
      return this
  }(), n(10))
}
, function(t, e) {
  function n() {
      throw new Error("setTimeout has not been defined")
  }
  function r() {
      throw new Error("clearTimeout has not been defined")
  }
  function i(t) {
      if (f === setTimeout)
          return setTimeout(t, 0);
      if ((f === n || !f) && setTimeout)
          return f = setTimeout,
          setTimeout(t, 0);
      try {
          return f(t, 0)
      } catch (e) {
          try {
              return f.call(null, t, 0)
          } catch (e) {
              return f.call(this, t, 0)
          }
      }
  }
  function a(t) {
      if (c === clearTimeout)
          return clearTimeout(t);
      if ((c === r || !c) && clearTimeout)
          return c = clearTimeout,
          clearTimeout(t);
      try {
          return c(t)
      } catch (e) {
          try {
              return c.call(null, t)
          } catch (e) {
              return c.call(this, t)
          }
      }
  }
  function o() {
      g && d && (g = !1,
      d.length ? p = d.concat(p) : b = -1,
      p.length && s())
  }
  function s() {
      if (!g) {
          var t = i(o);
          g = !0;
          for (var e = p.length; e; ) {
              for (d = p,
              p = []; ++b < e; )
                  d && d[b].run();
              b = -1,
              e = p.length
          }
          d = null,
          g = !1,
          a(t)
      }
  }
  function l(t, e) {
      this.fun = t,
      this.array = e
  }
  function u() {}
  var f, c, h = t.exports = {};
  !function() {
      try {
          f = "function" == typeof setTimeout ? setTimeout : n
      } catch (t) {
          f = n
      }
      try {
          c = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (t) {
          c = r
      }
  }();
  var d, p = [], g = !1, b = -1;
  h.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
      p.push(new l(t,e)),
      1 !== p.length || g || i(s)
  }
  ,
  l.prototype.run = function() {
      this.fun.apply(null, this.array)
  }
  ,
  h.title = "browser",
  h.browser = !0,
  h.env = {},
  h.argv = [],
  h.version = "",
  h.versions = {},
  h.on = u,
  h.addListener = u,
  h.once = u,
  h.off = u,
  h.removeListener = u,
  h.removeAllListeners = u,
  h.emit = u,
  h.prependListener = u,
  h.prependOnceListener = u,
  h.listeners = function(t) {
      return []
  }
  ,
  h.binding = function(t) {
      throw new Error("process.binding is not supported")
  }
  ,
  h.cwd = function() {
      return "/"
  }
  ,
  h.chdir = function(t) {
      throw new Error("process.chdir is not supported")
  }
  ,
  h.umask = function() {
      return 0
  }
}
, function(t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
      value: !0
  });
  var n = function(t) {
      if (t = t || {},
      !t.url || !t.callback)
          throw new Error("参数异常,请检查");
      var e = ("jsonp_" + Math.random()).replace(".", "")
        , n = document.getElementsByTagName("head")[0]
        , r = "";
      t.data ? r = t.data + "&" + t.callback + "=" + e : r += t.callback + "=" + e;
      var i = document.createElement("script");
      n.appendChild(i),
      window[e] = function(r) {
          n.removeChild(i),
          clearTimeout(i.timer),
          window[e] = null,
          t.success && t.success(r)
      }
      ,
      t.url.indexOf("?") ? i.src = t.url + "&" + r : i.src = t.url + "?" + r,
      t.time && (i.timer = setTimeout(function() {
          window[e] = null,
          n.removeChild(i),
          t.fail && t.fail({
              message: "请求超时"
          })
      }, t.time))
  };
  e.default = n
}
, function(t, e, n) {
  "use strict";
  var r = n(13)
    , i = n(29)
    , a = babelHelpers.interopRequireDefault(i)
    , o = n(30)
    , s = babelHelpers.interopRequireDefault(o)
    , l = n(31)
    , u = babelHelpers.interopRequireDefault(l)
    , f = n(32)
    , c = babelHelpers.interopRequireDefault(f);
  u.default.event();
  var h = function() {
      var t = function() {
          var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            , e = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          return [t, e]
      }
        , e = function() {
          var t = [screen.width, screen.height]
            , e = [screen.availWidth, screen.availHeight]
            , n = screen.colorDepth
            , r = screen.pixelDepth;
          return [t, e, n, r]
      }
        , n = function() {
          try {
              var t = Function("return this")()
                , e = function() {
                  var e = (t.constructor + "").match(/ (\w+)|$/)[1];
                  if (!e)
                      try {
                          "[object]" === t && (e = "Window")
                      } catch (t) {
                          e = "WSH"
                      }
                  return e
              }()
                , n = "";
              switch (e) {
              case "Window":
                  break;
              case "DedicatedWorkerGlobalScope":
                  n = "ww";
                  break;
              case "WSH":
                  n = "wsh";
                  break;
              case "Object":
                  n = "nj";
                  break;
              default:
                  n = "ot"
              }
              return n
          } catch (t) {
              return "abnormal"
          }
      }
        , i = function() {
          return window._phantom || window.phantom || window.callPhantom ? "ps" : n() || a.default.getwd()
      }
        , o = function() {
          var t = document.referrer
            , e = window.location.href;
          return [e, t]
      }
        , l = function(t) {
          try {
              t = (0,
              r.deflate)(JSON.stringify(t), {
                  to: "string"
              })
          } catch (e) {
              throw new Error(t + " - 错误信息:" + e.message)
          }
          try {
              t = btoa(t)
          } catch (e) {
              throw t = "",
              new Error(t + " - 错误信息:" + e.message)
          }
          return t
      }
        , f = function() {
          var t = window.navigator
            , e = t.plugins
            , n = []
            , r = void 0;
          for (r in e)
              if (e.hasOwnProperty(r)) {
                  var i = e[r].name || "";
                  n.push(i)
              }
          return n
      }
        , h = {
          v: "2.1.0",
          ts: (new Date).getTime(),
          cts: (new Date).getTime(),
          brVD: t(),
          brR: e(),
          bI: o(),
          aM: i() || "",
          broP: f(),
          cV: s.default.getCanvasFp(),
          wV: s.default.getWebglVendor(),
          wR: s.default.getWebglRenderer(),
          aF: ""
      };
      return window.OscillatorNode && c.default.start(),
      setTimeout(function() {
          s.default.getFonts(h)
      }, 0),
      h.aM || (a.default.listenwd(function(t) {
          t && t.length > 0 && (h.aM = t)
      }),
      h.aM || (h.aM = "")),
      Object.defineProperty(h, "_a", {
          get: function() {
              var t = ""
                , e = 0
                , n = 3;
              for (e; e < 6; ) {
                  var r = "";
                  switch (n) {
                  case 47:
                      r = "e",
                      n = 78;
                      break;
                  case 3:
                      r = "_",
                      n = 9;
                      break;
                  case 78:
                      r = "n";
                      break;
                  case 9:
                      r = "t",
                      n = 36;
                      break;
                  case 36:
                      r = "o",
                      n = 5;
                      break;
                  default:
                      n = 47,
                      r = "k"
                  }
                  e++,
                  t += r
              }
              return t
          }
      }),
      h.reload = function() {
          h.cts = Date.now();
          var t = u.default.data()
            , e = t.mT
            , n = t.kT
            , r = t.aT
            , i = t.tT
            , a = t.dT
            , o = t.sT
            , s = t.inputs
            , f = t.buttons
            , d = c.default.audioData()
            , p = d.data;
          h.mT = e,
          h.kT = n,
          h.aT = r,
          h.tT = i,
          h.dT = a,
          h.sT = o,
          h.inputs = s,
          h.buttons = f,
          h.aF = p;
          var g = l(h);
          return g
      }
      ,
      {
          reload: h.reload,
          _a: h._a
      }
  };
  t.exports = h
}
, function(t, e, n) {
  "use strict";
  var r = n(14).assign
    , i = n(15)
    , a = n(23)
    , o = n(27)
    , s = {};
  r(s, i, a, o),
  t.exports = s
}
, function(t, e) {
  "use strict";
  var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
  e.assign = function(t) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
          var n = e.shift();
          if (n) {
              if ("object" != typeof n)
                  throw new TypeError(n + "must be non-object");
              for (var r in n)
                  n.hasOwnProperty(r) && (t[r] = n[r])
          }
      }
      return t
  }
  ,
  e.shrinkBuf = function(t, e) {
      return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e,
      t)
  }
  ;
  var r = {
      arraySet: function(t, e, n, r, i) {
          if (e.subarray && t.subarray)
              return void t.set(e.subarray(n, n + r), i);
          for (var a = 0; a < r; a++)
              t[i + a] = e[n + a]
      },
      flattenChunks: function(t) {
          var e, n, r, i, a, o;
          for (r = 0,
          e = 0,
          n = t.length; e < n; e++)
              r += t[e].length;
          for (o = new Uint8Array(r),
          i = 0,
          e = 0,
          n = t.length; e < n; e++)
              a = t[e],
              o.set(a, i),
              i += a.length;
          return o
      }
  }
    , i = {
      arraySet: function(t, e, n, r, i) {
          for (var a = 0; a < r; a++)
              t[i + a] = e[n + a]
      },
      flattenChunks: function(t) {
          return [].concat.apply([], t)
      }
  };
  e.setTyped = function(t) {
      t ? (e.Buf8 = Uint8Array,
      e.Buf16 = Uint16Array,
      e.Buf32 = Int32Array,
      e.assign(e, r)) : (e.Buf8 = Array,
      e.Buf16 = Array,
      e.Buf32 = Array,
      e.assign(e, i))
  }
  ,
  e.setTyped(n)
}
, function(t, e, n) {
  "use strict";
  function r(t) {
      if (!(this instanceof r))
          return new r(t);
      this.options = l.assign({
          level: _,
          method: v,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: w,
          to: ""
      }, t || {});
      var e = this.options;
      e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
      this.err = 0,
      this.msg = "",
      this.ended = !1,
      this.chunks = [],
      this.strm = new c,
      this.strm.avail_out = 0;
      var n = s.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
      if (n !== g)
          throw new Error(f[n]);
      if (e.header && s.deflateSetHeader(this.strm, e.header),
      e.dictionary) {
          var i;
          if (i = "string" == typeof e.dictionary ? u.string2buf(e.dictionary) : "[object ArrayBuffer]" === h.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary,
          n = s.deflateSetDictionary(this.strm, i),
          n !== g)
              throw new Error(f[n]);
          this._dict_set = !0
      }
  }
  function i(t, e) {
      var n = new r(e);
      if (n.push(t, !0),
      n.err)
          throw n.msg || f[n.err];
      return n.result
  }
  function a(t, e) {
      return e = e || {},
      e.raw = !0,
      i(t, e)
  }
  function o(t, e) {
      return e = e || {},
      e.gzip = !0,
      i(t, e)
  }
  var s = n(16)
    , l = n(14)
    , u = n(21)
    , f = n(20)
    , c = n(22)
    , h = Object.prototype.toString
    , d = 0
    , p = 4
    , g = 0
    , b = 1
    , y = 2
    , _ = -1
    , w = 0
    , v = 8;
  r.prototype.push = function(t, e) {
      var n, r, i = this.strm, a = this.options.chunkSize;
      if (this.ended)
          return !1;
      r = e === ~~e ? e : e === !0 ? p : d,
      "string" == typeof t ? i.input = u.string2buf(t) : "[object ArrayBuffer]" === h.call(t) ? i.input = new Uint8Array(t) : i.input = t,
      i.next_in = 0,
      i.avail_in = i.input.length;
      do {
          if (0 === i.avail_out && (i.output = new l.Buf8(a),
          i.next_out = 0,
          i.avail_out = a),
          n = s.deflate(i, r),
          n !== b && n !== g)
              return this.onEnd(n),
              this.ended = !0,
              !1;
          0 !== i.avail_out && (0 !== i.avail_in || r !== p && r !== y) || ("string" === this.options.to ? this.onData(u.buf2binstring(l.shrinkBuf(i.output, i.next_out))) : this.onData(l.shrinkBuf(i.output, i.next_out)))
      } while ((i.avail_in > 0 || 0 === i.avail_out) && n !== b);return r === p ? (n = s.deflateEnd(this.strm),
      this.onEnd(n),
      this.ended = !0,
      n === g) : r !== y || (this.onEnd(g),
      i.avail_out = 0,
      !0)
  }
  ,
  r.prototype.onData = function(t) {
      this.chunks.push(t)
  }
  ,
  r.prototype.onEnd = function(t) {
      t === g && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = l.flattenChunks(this.chunks)),
      this.chunks = [],
      this.err = t,
      this.msg = this.strm.msg
  }
  ,
  e.Deflate = r,
  e.deflate = i,
  e.deflateRaw = a,
  e.gzip = o
}
, function(t, e, n) {
  "use strict";
  function r(t, e) {
      return t.msg = R[e],
      e
  }
  function i(t) {
      return (t << 1) - (t > 4 ? 9 : 0)
  }
  function a(t) {
      for (var e = t.length; --e >= 0; )
          t[e] = 0
  }
  function o(t) {
      var e = t.state
        , n = e.pending;
      n > t.avail_out && (n = t.avail_out),
      0 !== n && (M.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out),
      t.next_out += n,
      e.pending_out += n,
      t.total_out += n,
      t.avail_out -= n,
      e.pending -= n,
      0 === e.pending && (e.pending_out = 0))
  }
  function s(t, e) {
      C._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
      t.block_start = t.strstart,
      o(t.strm)
  }
  function l(t, e) {
      t.pending_buf[t.pending++] = e
  }
  function u(t, e) {
      t.pending_buf[t.pending++] = e >>> 8 & 255,
      t.pending_buf[t.pending++] = 255 & e
  }
  function f(t, e, n, r) {
      var i = t.avail_in;
      return i > r && (i = r),
      0 === i ? 0 : (t.avail_in -= i,
      M.arraySet(e, t.input, t.next_in, i, n),
      1 === t.state.wrap ? t.adler = j(t.adler, e, i, n) : 2 === t.state.wrap && (t.adler = P(t.adler, e, i, n)),
      t.next_in += i,
      t.total_in += i,
      i)
  }
  function c(t, e) {
      var n, r, i = t.max_chain_length, a = t.strstart, o = t.prev_length, s = t.nice_match, l = t.strstart > t.w_size - ct ? t.strstart - (t.w_size - ct) : 0, u = t.window, f = t.w_mask, c = t.prev, h = t.strstart + ft, d = u[a + o - 1], p = u[a + o];
      t.prev_length >= t.good_match && (i >>= 2),
      s > t.lookahead && (s = t.lookahead);
      do
          if (n = e,
          u[n + o] === p && u[n + o - 1] === d && u[n] === u[a] && u[++n] === u[a + 1]) {
              a += 2,
              n++;
              do
                  ;
              while (u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && a < h);if (r = ft - (h - a),
              a = h - ft,
              r > o) {
                  if (t.match_start = e,
                  o = r,
                  r >= s)
                      break;
                  d = u[a + o - 1],
                  p = u[a + o]
              }
          }
      while ((e = c[e & f]) > l && 0 !== --i);return o <= t.lookahead ? o : t.lookahead
  }
  function h(t) {
      var e, n, r, i, a, o = t.w_size;
      do {
          if (i = t.window_size - t.lookahead - t.strstart,
          t.strstart >= o + (o - ct)) {
              M.arraySet(t.window, t.window, o, o, 0),
              t.match_start -= o,
              t.strstart -= o,
              t.block_start -= o,
              n = t.hash_size,
              e = n;
              do
                  r = t.head[--e],
                  t.head[e] = r >= o ? r - o : 0;
              while (--n);n = o,
              e = n;
              do
                  r = t.prev[--e],
                  t.prev[e] = r >= o ? r - o : 0;
              while (--n);i += o
          }
          if (0 === t.strm.avail_in)
              break;
          if (n = f(t.strm, t.window, t.strstart + t.lookahead, i),
          t.lookahead += n,
          t.lookahead + t.insert >= ut)
              for (a = t.strstart - t.insert,
              t.ins_h = t.window[a],
              t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[a + ut - 1]) & t.hash_mask,
              t.prev[a & t.w_mask] = t.head[t.ins_h],
              t.head[t.ins_h] = a,
              a++,
              t.insert--,
              !(t.lookahead + t.insert < ut)); )
                  ;
      } while (t.lookahead < ct && 0 !== t.strm.avail_in)
  }
  function d(t, e) {
      var n = 65535;
      for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
              if (h(t),
              0 === t.lookahead && e === I)
                  return vt;
              if (0 === t.lookahead)
                  break
          }
          t.strstart += t.lookahead,
          t.lookahead = 0;
          var r = t.block_start + n;
          if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r,
          t.strstart = r,
          s(t, !1),
          0 === t.strm.avail_out))
              return vt;
          if (t.strstart - t.block_start >= t.w_size - ct && (s(t, !1),
          0 === t.strm.avail_out))
              return vt
      }
      return t.insert = 0,
      e === L ? (s(t, !0),
      0 === t.strm.avail_out ? Tt : kt) : t.strstart > t.block_start && (s(t, !1),
      0 === t.strm.avail_out) ? vt : vt
  }
  function p(t, e) {
      for (var n, r; ; ) {
          if (t.lookahead < ct) {
              if (h(t),
              t.lookahead < ct && e === I)
                  return vt;
              if (0 === t.lookahead)
                  break
          }
          if (n = 0,
          t.lookahead >= ut && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask,
          n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
          t.head[t.ins_h] = t.strstart),
          0 !== n && t.strstart - n <= t.w_size - ct && (t.match_length = c(t, n)),
          t.match_length >= ut)
              if (r = C._tr_tally(t, t.strstart - t.match_start, t.match_length - ut),
              t.lookahead -= t.match_length,
              t.match_length <= t.max_lazy_match && t.lookahead >= ut) {
                  t.match_length--;
                  do
                      t.strstart++,
                      t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask,
                      n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                      t.head[t.ins_h] = t.strstart;
                  while (0 !== --t.match_length);t.strstart++
              } else
                  t.strstart += t.match_length,
                  t.match_length = 0,
                  t.ins_h = t.window[t.strstart],
                  t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
              r = C._tr_tally(t, 0, t.window[t.strstart]),
              t.lookahead--,
              t.strstart++;
          if (r && (s(t, !1),
          0 === t.strm.avail_out))
              return vt
      }
      return t.insert = t.strstart < ut - 1 ? t.strstart : ut - 1,
      e === L ? (s(t, !0),
      0 === t.strm.avail_out ? Tt : kt) : t.last_lit && (s(t, !1),
      0 === t.strm.avail_out) ? vt : mt
  }
  function g(t, e) {
      for (var n, r, i; ; ) {
          if (t.lookahead < ct) {
              if (h(t),
              t.lookahead < ct && e === I)
                  return vt;
              if (0 === t.lookahead)
                  break
          }
          if (n = 0,
          t.lookahead >= ut && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask,
          n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
          t.head[t.ins_h] = t.strstart),
          t.prev_length = t.match_length,
          t.prev_match = t.match_start,
          t.match_length = ut - 1,
          0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - ct && (t.match_length = c(t, n),
          t.match_length <= 5 && (t.strategy === V || t.match_length === ut && t.strstart - t.match_start > 4096) && (t.match_length = ut - 1)),
          t.prev_length >= ut && t.match_length <= t.prev_length) {
              i = t.strstart + t.lookahead - ut,
              r = C._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - ut),
              t.lookahead -= t.prev_length - 1,
              t.prev_length -= 2;
              do
                  ++t.strstart <= i && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + ut - 1]) & t.hash_mask,
                  n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                  t.head[t.ins_h] = t.strstart);
              while (0 !== --t.prev_length);if (t.match_available = 0,
              t.match_length = ut - 1,
              t.strstart++,
              r && (s(t, !1),
              0 === t.strm.avail_out))
                  return vt
          } else if (t.match_available) {
              if (r = C._tr_tally(t, 0, t.window[t.strstart - 1]),
              r && s(t, !1),
              t.strstart++,
              t.lookahead--,
              0 === t.strm.avail_out)
                  return vt
          } else
              t.match_available = 1,
              t.strstart++,
              t.lookahead--
      }
      return t.match_available && (r = C._tr_tally(t, 0, t.window[t.strstart - 1]),
      t.match_available = 0),
      t.insert = t.strstart < ut - 1 ? t.strstart : ut - 1,
      e === L ? (s(t, !0),
      0 === t.strm.avail_out ? Tt : kt) : t.last_lit && (s(t, !1),
      0 === t.strm.avail_out) ? vt : mt
  }
  function b(t, e) {
      for (var n, r, i, a, o = t.window; ; ) {
          if (t.lookahead <= ft) {
              if (h(t),
              t.lookahead <= ft && e === I)
                  return vt;
              if (0 === t.lookahead)
                  break
          }
          if (t.match_length = 0,
          t.lookahead >= ut && t.strstart > 0 && (i = t.strstart - 1,
          r = o[i],
          r === o[++i] && r === o[++i] && r === o[++i])) {
              a = t.strstart + ft;
              do
                  ;
              while (r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && i < a);t.match_length = ft - (a - i),
              t.match_length > t.lookahead && (t.match_length = t.lookahead)
          }
          if (t.match_length >= ut ? (n = C._tr_tally(t, 1, t.match_length - ut),
          t.lookahead -= t.match_length,
          t.strstart += t.match_length,
          t.match_length = 0) : (n = C._tr_tally(t, 0, t.window[t.strstart]),
          t.lookahead--,
          t.strstart++),
          n && (s(t, !1),
          0 === t.strm.avail_out))
              return vt
      }
      return t.insert = 0,
      e === L ? (s(t, !0),
      0 === t.strm.avail_out ? Tt : kt) : t.last_lit && (s(t, !1),
      0 === t.strm.avail_out) ? vt : mt
  }
  function y(t, e) {
      for (var n; ; ) {
          if (0 === t.lookahead && (h(t),
          0 === t.lookahead)) {
              if (e === I)
                  return vt;
              break
          }
          if (t.match_length = 0,
          n = C._tr_tally(t, 0, t.window[t.strstart]),
          t.lookahead--,
          t.strstart++,
          n && (s(t, !1),
          0 === t.strm.avail_out))
              return vt
      }
      return t.insert = 0,
      e === L ? (s(t, !0),
      0 === t.strm.avail_out ? Tt : kt) : t.last_lit && (s(t, !1),
      0 === t.strm.avail_out) ? vt : mt
  }
  function _(t, e, n, r, i) {
      this.good_length = t,
      this.max_lazy = e,
      this.nice_length = n,
      this.max_chain = r,
      this.func = i
  }
  function w(t) {
      t.window_size = 2 * t.w_size,
      a(t.head),
      t.max_lazy_match = A[t.level].max_lazy,
      t.good_match = A[t.level].good_length,
      t.nice_match = A[t.level].nice_length,
      t.max_chain_length = A[t.level].max_chain,
      t.strstart = 0,
      t.block_start = 0,
      t.lookahead = 0,
      t.insert = 0,
      t.match_length = t.prev_length = ut - 1,
      t.match_available = 0,
      t.ins_h = 0
  }
  function v() {
      this.strm = null,
      this.status = 0,
      this.pending_buf = null,
      this.pending_buf_size = 0,
      this.pending_out = 0,
      this.pending = 0,
      this.wrap = 0,
      this.gzhead = null,
      this.gzindex = 0,
      this.method = $,
      this.last_flush = -1,
      this.w_size = 0,
      this.w_bits = 0,
      this.w_mask = 0,
      this.window = null,
      this.window_size = 0,
      this.prev = null,
      this.head = null,
      this.ins_h = 0,
      this.hash_size = 0,
      this.hash_bits = 0,
      this.hash_mask = 0,
      this.hash_shift = 0,
      this.block_start = 0,
      this.match_length = 0,
      this.prev_match = 0,
      this.match_available = 0,
      this.strstart = 0,
      this.match_start = 0,
      this.lookahead = 0,
      this.prev_length = 0,
      this.max_chain_length = 0,
      this.max_lazy_match = 0,
      this.level = 0,
      this.strategy = 0,
      this.good_match = 0,
      this.nice_match = 0,
      this.dyn_ltree = new M.Buf16(2 * st),
      this.dyn_dtree = new M.Buf16(2 * (2 * at + 1)),
      this.bl_tree = new M.Buf16(2 * (2 * ot + 1)),
      a(this.dyn_ltree),
      a(this.dyn_dtree),
      a(this.bl_tree),
      this.l_desc = null,
      this.d_desc = null,
      this.bl_desc = null,
      this.bl_count = new M.Buf16(lt + 1),
      this.heap = new M.Buf16(2 * it + 1),
      a(this.heap),
      this.heap_len = 0,
      this.heap_max = 0,
      this.depth = new M.Buf16(2 * it + 1),
      a(this.depth),
      this.l_buf = 0,
      this.lit_bufsize = 0,
      this.last_lit = 0,
      this.d_buf = 0,
      this.opt_len = 0,
      this.static_len = 0,
      this.matches = 0,
      this.insert = 0,
      this.bi_buf = 0,
      this.bi_valid = 0
  }
  function m(t) {
      var e;
      return t && t.state ? (t.total_in = t.total_out = 0,
      t.data_type = q,
      e = t.state,
      e.pending = 0,
      e.pending_out = 0,
      e.wrap < 0 && (e.wrap = -e.wrap),
      e.status = e.wrap ? dt : _t,
      t.adler = 2 === e.wrap ? 0 : 1,
      e.last_flush = I,
      C._tr_init(e),
      z) : r(t, H)
  }
  function T(t) {
      var e = m(t);
      return e === z && w(t.state),
      e
  }
  function k(t, e) {
      return t && t.state ? 2 !== t.state.wrap ? H : (t.state.gzhead = e,
      z) : H
  }
  function E(t, e, n, i, a, o) {
      if (!t)
          return H;
      var s = 1;
      if (e === Y && (e = 6),
      i < 0 ? (s = 0,
      i = -i) : i > 15 && (s = 2,
      i -= 16),
      a < 1 || a > Q || n !== $ || i < 8 || i > 15 || e < 0 || e > 9 || o < 0 || o > J)
          return r(t, H);
      8 === i && (i = 9);
      var l = new v;
      return t.state = l,
      l.strm = t,
      l.wrap = s,
      l.gzhead = null,
      l.w_bits = i,
      l.w_size = 1 << l.w_bits,
      l.w_mask = l.w_size - 1,
      l.hash_bits = a + 7,
      l.hash_size = 1 << l.hash_bits,
      l.hash_mask = l.hash_size - 1,
      l.hash_shift = ~~((l.hash_bits + ut - 1) / ut),
      l.window = new M.Buf8(2 * l.w_size),
      l.head = new M.Buf16(l.hash_size),
      l.prev = new M.Buf16(l.w_size),
      l.lit_bufsize = 1 << a + 6,
      l.pending_buf_size = 4 * l.lit_bufsize,
      l.pending_buf = new M.Buf8(l.pending_buf_size),
      l.d_buf = 1 * l.lit_bufsize,
      l.l_buf = 3 * l.lit_bufsize,
      l.level = e,
      l.strategy = o,
      l.method = n,
      T(t)
  }
  function x(t, e) {
      return E(t, e, $, tt, et, K)
  }
  function S(t, e) {
      var n, s, f, c;
      if (!t || !t.state || e > F || e < 0)
          return t ? r(t, H) : H;
      if (s = t.state,
      !t.output || !t.input && 0 !== t.avail_in || s.status === wt && e !== L)
          return r(t, 0 === t.avail_out ? G : H);
      if (s.strm = t,
      n = s.last_flush,
      s.last_flush = e,
      s.status === dt)
          if (2 === s.wrap)
              t.adler = 0,
              l(s, 31),
              l(s, 139),
              l(s, 8),
              s.gzhead ? (l(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)),
              l(s, 255 & s.gzhead.time),
              l(s, s.gzhead.time >> 8 & 255),
              l(s, s.gzhead.time >> 16 & 255),
              l(s, s.gzhead.time >> 24 & 255),
              l(s, 9 === s.level ? 2 : s.strategy >= X || s.level < 2 ? 4 : 0),
              l(s, 255 & s.gzhead.os),
              s.gzhead.extra && s.gzhead.extra.length && (l(s, 255 & s.gzhead.extra.length),
              l(s, s.gzhead.extra.length >> 8 & 255)),
              s.gzhead.hcrc && (t.adler = P(t.adler, s.pending_buf, s.pending, 0)),
              s.gzindex = 0,
              s.status = pt) : (l(s, 0),
              l(s, 0),
              l(s, 0),
              l(s, 0),
              l(s, 0),
              l(s, 9 === s.level ? 2 : s.strategy >= X || s.level < 2 ? 4 : 0),
              l(s, Et),
              s.status = _t);
          else {
              var h = $ + (s.w_bits - 8 << 4) << 8
                , d = -1;
              d = s.strategy >= X || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3,
              h |= d << 6,
              0 !== s.strstart && (h |= ht),
              h += 31 - h % 31,
              s.status = _t,
              u(s, h),
              0 !== s.strstart && (u(s, t.adler >>> 16),
              u(s, 65535 & t.adler)),
              t.adler = 1
          }
      if (s.status === pt)
          if (s.gzhead.extra) {
              for (f = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > f && (t.adler = P(t.adler, s.pending_buf, s.pending - f, f)),
              o(t),
              f = s.pending,
              s.pending !== s.pending_buf_size)); )
                  l(s, 255 & s.gzhead.extra[s.gzindex]),
                  s.gzindex++;
              s.gzhead.hcrc && s.pending > f && (t.adler = P(t.adler, s.pending_buf, s.pending - f, f)),
              s.gzindex === s.gzhead.extra.length && (s.gzindex = 0,
              s.status = gt)
          } else
              s.status = gt;
      if (s.status === gt)
          if (s.gzhead.name) {
              f = s.pending;
              do {
                  if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > f && (t.adler = P(t.adler, s.pending_buf, s.pending - f, f)),
                  o(t),
                  f = s.pending,
                  s.pending === s.pending_buf_size)) {
                      c = 1;
                      break
                  }
                  c = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0,
                  l(s, c)
              } while (0 !== c);s.gzhead.hcrc && s.pending > f && (t.adler = P(t.adler, s.pending_buf, s.pending - f, f)),
              0 === c && (s.gzindex = 0,
              s.status = bt)
          } else
              s.status = bt;
      if (s.status === bt)
          if (s.gzhead.comment) {
              f = s.pending;
              do {
                  if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > f && (t.adler = P(t.adler, s.pending_buf, s.pending - f, f)),
                  o(t),
                  f = s.pending,
                  s.pending === s.pending_buf_size)) {
                      c = 1;
                      break
                  }
                  c = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0,
                  l(s, c)
              } while (0 !== c);s.gzhead.hcrc && s.pending > f && (t.adler = P(t.adler, s.pending_buf, s.pending - f, f)),
              0 === c && (s.status = yt)
          } else
              s.status = yt;
      if (s.status === yt && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && o(t),
      s.pending + 2 <= s.pending_buf_size && (l(s, 255 & t.adler),
      l(s, t.adler >> 8 & 255),
      t.adler = 0,
      s.status = _t)) : s.status = _t),
      0 !== s.pending) {
          if (o(t),
          0 === t.avail_out)
              return s.last_flush = -1,
              z
      } else if (0 === t.avail_in && i(e) <= i(n) && e !== L)
          return r(t, G);
      if (s.status === wt && 0 !== t.avail_in)
          return r(t, G);
      if (0 !== t.avail_in || 0 !== s.lookahead || e !== I && s.status !== wt) {
          var p = s.strategy === X ? y(s, e) : s.strategy === W ? b(s, e) : A[s.level].func(s, e);
          if (p !== Tt && p !== kt || (s.status = wt),
          p === vt || p === Tt)
              return 0 === t.avail_out && (s.last_flush = -1),
              z;
          if (p === mt && (e === D ? C._tr_align(s) : e !== F && (C._tr_stored_block(s, 0, 0, !1),
          e === N && (a(s.head),
          0 === s.lookahead && (s.strstart = 0,
          s.block_start = 0,
          s.insert = 0))),
          o(t),
          0 === t.avail_out))
              return s.last_flush = -1,
              z
      }
      return e !== L ? z : s.wrap <= 0 ? U : (2 === s.wrap ? (l(s, 255 & t.adler),
      l(s, t.adler >> 8 & 255),
      l(s, t.adler >> 16 & 255),
      l(s, t.adler >> 24 & 255),
      l(s, 255 & t.total_in),
      l(s, t.total_in >> 8 & 255),
      l(s, t.total_in >> 16 & 255),
      l(s, t.total_in >> 24 & 255)) : (u(s, t.adler >>> 16),
      u(s, 65535 & t.adler)),
      o(t),
      s.wrap > 0 && (s.wrap = -s.wrap),
      0 !== s.pending ? z : U)
  }
  function O(t) {
      var e;
      return t && t.state ? (e = t.state.status,
      e !== dt && e !== pt && e !== gt && e !== bt && e !== yt && e !== _t && e !== wt ? r(t, H) : (t.state = null,
      e === _t ? r(t, Z) : z)) : H
  }
  function B(t, e) {
      var n, r, i, o, s, l, u, f, c = e.length;
      if (!t || !t.state)
          return H;
      if (n = t.state,
      o = n.wrap,
      2 === o || 1 === o && n.status !== dt || n.lookahead)
          return H;
      for (1 === o && (t.adler = j(t.adler, e, c, 0)),
      n.wrap = 0,
      c >= n.w_size && (0 === o && (a(n.head),
      n.strstart = 0,
      n.block_start = 0,
      n.insert = 0),
      f = new M.Buf8(n.w_size),
      M.arraySet(f, e, c - n.w_size, n.w_size, 0),
      e = f,
      c = n.w_size),
      s = t.avail_in,
      l = t.next_in,
      u = t.input,
      t.avail_in = c,
      t.next_in = 0,
      t.input = e,
      h(n); n.lookahead >= ut; ) {
          r = n.strstart,
          i = n.lookahead - (ut - 1);
          do
              n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + ut - 1]) & n.hash_mask,
              n.prev[r & n.w_mask] = n.head[n.ins_h],
              n.head[n.ins_h] = r,
              r++;
          while (--i);n.strstart = r,
          n.lookahead = ut - 1,
          h(n)
      }
      return n.strstart += n.lookahead,
      n.block_start = n.strstart,
      n.insert = n.lookahead,
      n.lookahead = 0,
      n.match_length = n.prev_length = ut - 1,
      n.match_available = 0,
      t.next_in = l,
      t.input = u,
      t.avail_in = s,
      n.wrap = o,
      z
  }
  var A, M = n(14), C = n(17), j = n(18), P = n(19), R = n(20), I = 0, D = 1, N = 3, L = 4, F = 5, z = 0, U = 1, H = -2, Z = -3, G = -5, Y = -1, V = 1, X = 2, W = 3, J = 4, K = 0, q = 2, $ = 8, Q = 9, tt = 15, et = 8, nt = 29, rt = 256, it = rt + 1 + nt, at = 30, ot = 19, st = 2 * it + 1, lt = 15, ut = 3, ft = 258, ct = ft + ut + 1, ht = 32, dt = 42, pt = 69, gt = 73, bt = 91, yt = 103, _t = 113, wt = 666, vt = 1, mt = 2, Tt = 3, kt = 4, Et = 3;
  A = [new _(0,0,0,0,d), new _(4,4,8,4,p), new _(4,5,16,8,p), new _(4,6,32,32,p), new _(4,4,16,16,g), new _(8,16,32,32,g), new _(8,16,128,128,g), new _(8,32,128,256,g), new _(32,128,258,1024,g), new _(32,258,258,4096,g)],
  e.deflateInit = x,
  e.deflateInit2 = E,
  e.deflateReset = T,
  e.deflateResetKeep = m,
  e.deflateSetHeader = k,
  e.deflate = S,
  e.deflateEnd = O,
  e.deflateSetDictionary = B,
  e.deflateInfo = "pako deflate (from Nodeca project)"
}
, function(t, e, n) {
  "use strict";
  function r(t) {
      for (var e = t.length; --e >= 0; )
          t[e] = 0
  }
  function i(t, e, n, r, i) {
      this.static_tree = t,
      this.extra_bits = e,
      this.extra_base = n,
      this.elems = r,
      this.max_length = i,
      this.has_stree = t && t.length
  }
  function a(t, e) {
      this.dyn_tree = t,
      this.max_code = 0,
      this.stat_desc = e
  }
  function o(t) {
      return t < 256 ? lt[t] : lt[256 + (t >>> 7)]
  }
  function s(t, e) {
      t.pending_buf[t.pending++] = 255 & e,
      t.pending_buf[t.pending++] = e >>> 8 & 255
  }
  function l(t, e, n) {
      t.bi_valid > J - n ? (t.bi_buf |= e << t.bi_valid & 65535,
      s(t, t.bi_buf),
      t.bi_buf = e >> J - t.bi_valid,
      t.bi_valid += n - J) : (t.bi_buf |= e << t.bi_valid & 65535,
      t.bi_valid += n)
  }
  function u(t, e, n) {
      l(t, n[2 * e], n[2 * e + 1])
  }
  function f(t, e) {
      var n = 0;
      do
          n |= 1 & t,
          t >>>= 1,
          n <<= 1;
      while (--e > 0);return n >>> 1
  }
  function c(t) {
      16 === t.bi_valid ? (s(t, t.bi_buf),
      t.bi_buf = 0,
      t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf,
      t.bi_buf >>= 8,
      t.bi_valid -= 8)
  }
  function h(t, e) {
      var n, r, i, a, o, s, l = e.dyn_tree, u = e.max_code, f = e.stat_desc.static_tree, c = e.stat_desc.has_stree, h = e.stat_desc.extra_bits, d = e.stat_desc.extra_base, p = e.stat_desc.max_length, g = 0;
      for (a = 0; a <= W; a++)
          t.bl_count[a] = 0;
      for (l[2 * t.heap[t.heap_max] + 1] = 0,
      n = t.heap_max + 1; n < X; n++)
          r = t.heap[n],
          a = l[2 * l[2 * r + 1] + 1] + 1,
          a > p && (a = p,
          g++),
          l[2 * r + 1] = a,
          r > u || (t.bl_count[a]++,
          o = 0,
          r >= d && (o = h[r - d]),
          s = l[2 * r],
          t.opt_len += s * (a + o),
          c && (t.static_len += s * (f[2 * r + 1] + o)));
      if (0 !== g) {
          do {
              for (a = p - 1; 0 === t.bl_count[a]; )
                  a--;
              t.bl_count[a]--,
              t.bl_count[a + 1] += 2,
              t.bl_count[p]--,
              g -= 2
          } while (g > 0);for (a = p; 0 !== a; a--)
              for (r = t.bl_count[a]; 0 !== r; )
                  i = t.heap[--n],
                  i > u || (l[2 * i + 1] !== a && (t.opt_len += (a - l[2 * i + 1]) * l[2 * i],
                  l[2 * i + 1] = a),
                  r--)
      }
  }
  function d(t, e, n) {
      var r, i, a = new Array(W + 1), o = 0;
      for (r = 1; r <= W; r++)
          a[r] = o = o + n[r - 1] << 1;
      for (i = 0; i <= e; i++) {
          var s = t[2 * i + 1];
          0 !== s && (t[2 * i] = f(a[s]++, s))
      }
  }
  function p() {
      var t, e, n, r, a, o = new Array(W + 1);
      for (n = 0,
      r = 0; r < H - 1; r++)
          for (ft[r] = n,
          t = 0; t < 1 << et[r]; t++)
              ut[n++] = r;
      for (ut[n - 1] = r,
      a = 0,
      r = 0; r < 16; r++)
          for (ct[r] = a,
          t = 0; t < 1 << nt[r]; t++)
              lt[a++] = r;
      for (a >>= 7; r < Y; r++)
          for (ct[r] = a << 7,
          t = 0; t < 1 << nt[r] - 7; t++)
              lt[256 + a++] = r;
      for (e = 0; e <= W; e++)
          o[e] = 0;
      for (t = 0; t <= 143; )
          ot[2 * t + 1] = 8,
          t++,
          o[8]++;
      for (; t <= 255; )
          ot[2 * t + 1] = 9,
          t++,
          o[9]++;
      for (; t <= 279; )
          ot[2 * t + 1] = 7,
          t++,
          o[7]++;
      for (; t <= 287; )
          ot[2 * t + 1] = 8,
          t++,
          o[8]++;
      for (d(ot, G + 1, o),
      t = 0; t < Y; t++)
          st[2 * t + 1] = 5,
          st[2 * t] = f(t, 5);
      ht = new i(ot,et,Z + 1,G,W),
      dt = new i(st,nt,0,Y,W),
      pt = new i(new Array(0),rt,0,V,K)
  }
  function g(t) {
      var e;
      for (e = 0; e < G; e++)
          t.dyn_ltree[2 * e] = 0;
      for (e = 0; e < Y; e++)
          t.dyn_dtree[2 * e] = 0;
      for (e = 0; e < V; e++)
          t.bl_tree[2 * e] = 0;
      t.dyn_ltree[2 * q] = 1,
      t.opt_len = t.static_len = 0,
      t.last_lit = t.matches = 0
  }
  function b(t) {
      t.bi_valid > 8 ? s(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
      t.bi_buf = 0,
      t.bi_valid = 0
  }
  function y(t, e, n, r) {
      b(t),
      r && (s(t, n),
      s(t, ~n)),
      j.arraySet(t.pending_buf, t.window, e, n, t.pending),
      t.pending += n
  }
  function _(t, e, n, r) {
      var i = 2 * e
        , a = 2 * n;
      return t[i] < t[a] || t[i] === t[a] && r[e] <= r[n]
  }
  function w(t, e, n) {
      for (var r = t.heap[n], i = n << 1; i <= t.heap_len && (i < t.heap_len && _(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
      !_(e, r, t.heap[i], t.depth)); )
          t.heap[n] = t.heap[i],
          n = i,
          i <<= 1;
      t.heap[n] = r
  }
  function v(t, e, n) {
      var r, i, a, s, f = 0;
      if (0 !== t.last_lit)
          do
              r = t.pending_buf[t.d_buf + 2 * f] << 8 | t.pending_buf[t.d_buf + 2 * f + 1],
              i = t.pending_buf[t.l_buf + f],
              f++,
              0 === r ? u(t, i, e) : (a = ut[i],
              u(t, a + Z + 1, e),
              s = et[a],
              0 !== s && (i -= ft[a],
              l(t, i, s)),
              r--,
              a = o(r),
              u(t, a, n),
              s = nt[a],
              0 !== s && (r -= ct[a],
              l(t, r, s)));
          while (f < t.last_lit);u(t, q, e)
  }
  function m(t, e) {
      var n, r, i, a = e.dyn_tree, o = e.stat_desc.static_tree, s = e.stat_desc.has_stree, l = e.stat_desc.elems, u = -1;
      for (t.heap_len = 0,
      t.heap_max = X,
      n = 0; n < l; n++)
          0 !== a[2 * n] ? (t.heap[++t.heap_len] = u = n,
          t.depth[n] = 0) : a[2 * n + 1] = 0;
      for (; t.heap_len < 2; )
          i = t.heap[++t.heap_len] = u < 2 ? ++u : 0,
          a[2 * i] = 1,
          t.depth[i] = 0,
          t.opt_len--,
          s && (t.static_len -= o[2 * i + 1]);
      for (e.max_code = u,
      n = t.heap_len >> 1; n >= 1; n--)
          w(t, a, n);
      i = l;
      do
          n = t.heap[1],
          t.heap[1] = t.heap[t.heap_len--],
          w(t, a, 1),
          r = t.heap[1],
          t.heap[--t.heap_max] = n,
          t.heap[--t.heap_max] = r,
          a[2 * i] = a[2 * n] + a[2 * r],
          t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1,
          a[2 * n + 1] = a[2 * r + 1] = i,
          t.heap[1] = i++,
          w(t, a, 1);
      while (t.heap_len >= 2);t.heap[--t.heap_max] = t.heap[1],
      h(t, e),
      d(a, u, t.bl_count)
  }
  function T(t, e, n) {
      var r, i, a = -1, o = e[1], s = 0, l = 7, u = 4;
      for (0 === o && (l = 138,
      u = 3),
      e[2 * (n + 1) + 1] = 65535,
      r = 0; r <= n; r++)
          i = o,
          o = e[2 * (r + 1) + 1],
          ++s < l && i === o || (s < u ? t.bl_tree[2 * i] += s : 0 !== i ? (i !== a && t.bl_tree[2 * i]++,
          t.bl_tree[2 * $]++) : s <= 10 ? t.bl_tree[2 * Q]++ : t.bl_tree[2 * tt]++,
          s = 0,
          a = i,
          0 === o ? (l = 138,
          u = 3) : i === o ? (l = 6,
          u = 3) : (l = 7,
          u = 4))
  }
  function k(t, e, n) {
      var r, i, a = -1, o = e[1], s = 0, f = 7, c = 4;
      for (0 === o && (f = 138,
      c = 3),
      r = 0; r <= n; r++)
          if (i = o,
          o = e[2 * (r + 1) + 1],
          !(++s < f && i === o)) {
              if (s < c) {
                  do
                      u(t, i, t.bl_tree);
                  while (0 !== --s)
              } else
                  0 !== i ? (i !== a && (u(t, i, t.bl_tree),
                  s--),
                  u(t, $, t.bl_tree),
                  l(t, s - 3, 2)) : s <= 10 ? (u(t, Q, t.bl_tree),
                  l(t, s - 3, 3)) : (u(t, tt, t.bl_tree),
                  l(t, s - 11, 7));
              s = 0,
              a = i,
              0 === o ? (f = 138,
              c = 3) : i === o ? (f = 6,
              c = 3) : (f = 7,
              c = 4)
          }
  }
  function E(t) {
      var e;
      for (T(t, t.dyn_ltree, t.l_desc.max_code),
      T(t, t.dyn_dtree, t.d_desc.max_code),
      m(t, t.bl_desc),
      e = V - 1; e >= 3 && 0 === t.bl_tree[2 * it[e] + 1]; e--)
          ;
      return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
      e
  }
  function x(t, e, n, r) {
      var i;
      for (l(t, e - 257, 5),
      l(t, n - 1, 5),
      l(t, r - 4, 4),
      i = 0; i < r; i++)
          l(t, t.bl_tree[2 * it[i] + 1], 3);
      k(t, t.dyn_ltree, e - 1),
      k(t, t.dyn_dtree, n - 1)
  }
  function S(t) {
      var e, n = 4093624447;
      for (e = 0; e <= 31; e++,
      n >>>= 1)
          if (1 & n && 0 !== t.dyn_ltree[2 * e])
              return R;
      if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
          return I;
      for (e = 32; e < Z; e++)
          if (0 !== t.dyn_ltree[2 * e])
              return I;
      return R
  }
  function O(t) {
      gt || (p(),
      gt = !0),
      t.l_desc = new a(t.dyn_ltree,ht),
      t.d_desc = new a(t.dyn_dtree,dt),
      t.bl_desc = new a(t.bl_tree,pt),
      t.bi_buf = 0,
      t.bi_valid = 0,
      g(t)
  }
  function B(t, e, n, r) {
      l(t, (N << 1) + (r ? 1 : 0), 3),
      y(t, e, n, !0)
  }
  function A(t) {
      l(t, L << 1, 3),
      u(t, q, ot),
      c(t)
  }
  function M(t, e, n, r) {
      var i, a, o = 0;
      t.level > 0 ? (t.strm.data_type === D && (t.strm.data_type = S(t)),
      m(t, t.l_desc),
      m(t, t.d_desc),
      o = E(t),
      i = t.opt_len + 3 + 7 >>> 3,
      a = t.static_len + 3 + 7 >>> 3,
      a <= i && (i = a)) : i = a = n + 5,
      n + 4 <= i && e !== -1 ? B(t, e, n, r) : t.strategy === P || a === i ? (l(t, (L << 1) + (r ? 1 : 0), 3),
      v(t, ot, st)) : (l(t, (F << 1) + (r ? 1 : 0), 3),
      x(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1),
      v(t, t.dyn_ltree, t.dyn_dtree)),
      g(t),
      r && b(t)
  }
  function C(t, e, n) {
      return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255,
      t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e,
      t.pending_buf[t.l_buf + t.last_lit] = 255 & n,
      t.last_lit++,
      0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++,
      e--,
      t.dyn_ltree[2 * (ut[n] + Z + 1)]++,
      t.dyn_dtree[2 * o(e)]++),
      t.last_lit === t.lit_bufsize - 1
  }
  var j = n(14)
    , P = 4
    , R = 0
    , I = 1
    , D = 2
    , N = 0
    , L = 1
    , F = 2
    , z = 3
    , U = 258
    , H = 29
    , Z = 256
    , G = Z + 1 + H
    , Y = 30
    , V = 19
    , X = 2 * G + 1
    , W = 15
    , J = 16
    , K = 7
    , q = 256
    , $ = 16
    , Q = 17
    , tt = 18
    , et = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
    , nt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
    , rt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
    , it = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    , at = 512
    , ot = new Array(2 * (G + 2));
  r(ot);
  var st = new Array(2 * Y);
  r(st);
  var lt = new Array(at);
  r(lt);
  var ut = new Array(U - z + 1);
  r(ut);
  var ft = new Array(H);
  r(ft);
  var ct = new Array(Y);
  r(ct);
  var ht, dt, pt, gt = !1;
  e._tr_init = O,
  e._tr_stored_block = B,
  e._tr_flush_block = M,
  e._tr_tally = C,
  e._tr_align = A
}
, function(t, e) {
  "use strict";
  function n(t, e, n, r) {
      for (var i = 65535 & t | 0, a = t >>> 16 & 65535 | 0, o = 0; 0 !== n; ) {
          o = n > 2e3 ? 2e3 : n,
          n -= o;
          do
              i = i + e[r++] | 0,
              a = a + i | 0;
          while (--o);i %= 65521,
          a %= 65521
      }
      return i | a << 16 | 0
  }
  t.exports = n
}
, function(t, e) {
  "use strict";
  function n() {
      for (var t, e = [], n = 0; n < 256; n++) {
          t = n;
          for (var r = 0; r < 8; r++)
              t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
          e[n] = t
      }
      return e
  }
  function r(t, e, n, r) {
      var a = i
        , o = r + n;
      t ^= -1;
      for (var s = r; s < o; s++)
          t = t >>> 8 ^ a[255 & (t ^ e[s])];
      return t ^ -1
  }
  var i = n();
  t.exports = r
}
, function(t, e) {
  "use strict";
  t.exports = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
  }
}
, function(t, e, n) {
  "use strict";
  function r(t, e) {
      if (e < 65537 && (t.subarray && o || !t.subarray && a))
          return String.fromCharCode.apply(null, i.shrinkBuf(t, e));
      for (var n = "", r = 0; r < e; r++)
          n += String.fromCharCode(t[r]);
      return n
  }
  var i = n(14)
    , a = !0
    , o = !0;
  try {
      String.fromCharCode.apply(null, [0])
  } catch (t) {
      a = !1
  }
  try {
      String.fromCharCode.apply(null, new Uint8Array(1))
  } catch (t) {
      o = !1
  }
  for (var s = new i.Buf8(256), l = 0; l < 256; l++)
      s[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
  s[254] = s[254] = 1,
  e.string2buf = function(t) {
      var e, n, r, a, o, s = t.length, l = 0;
      for (a = 0; a < s; a++)
          n = t.charCodeAt(a),
          55296 === (64512 & n) && a + 1 < s && (r = t.charCodeAt(a + 1),
          56320 === (64512 & r) && (n = 65536 + (n - 55296 << 10) + (r - 56320),
          a++)),
          l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
      for (e = new i.Buf8(l),
      o = 0,
      a = 0; o < l; a++)
          n = t.charCodeAt(a),
          55296 === (64512 & n) && a + 1 < s && (r = t.charCodeAt(a + 1),
          56320 === (64512 & r) && (n = 65536 + (n - 55296 << 10) + (r - 56320),
          a++)),
          n < 128 ? e[o++] = n : n < 2048 ? (e[o++] = 192 | n >>> 6,
          e[o++] = 128 | 63 & n) : n < 65536 ? (e[o++] = 224 | n >>> 12,
          e[o++] = 128 | n >>> 6 & 63,
          e[o++] = 128 | 63 & n) : (e[o++] = 240 | n >>> 18,
          e[o++] = 128 | n >>> 12 & 63,
          e[o++] = 128 | n >>> 6 & 63,
          e[o++] = 128 | 63 & n);
      return e
  }
  ,
  e.buf2binstring = function(t) {
      return r(t, t.length)
  }
  ,
  e.binstring2buf = function(t) {
      for (var e = new i.Buf8(t.length), n = 0, r = e.length; n < r; n++)
          e[n] = t.charCodeAt(n);
      return e
  }
  ,
  e.buf2string = function(t, e) {
      var n, i, a, o, l = e || t.length, u = new Array(2 * l);
      for (i = 0,
      n = 0; n < l; )
          if (a = t[n++],
          a < 128)
              u[i++] = a;
          else if (o = s[a],
          o > 4)
              u[i++] = 65533,
              n += o - 1;
          else {
              for (a &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < l; )
                  a = a << 6 | 63 & t[n++],
                  o--;
              o > 1 ? u[i++] = 65533 : a < 65536 ? u[i++] = a : (a -= 65536,
              u[i++] = 55296 | a >> 10 & 1023,
              u[i++] = 56320 | 1023 & a)
          }
      return r(u, i)
  }
  ,
  e.utf8border = function(t, e) {
      var n;
      for (e = e || t.length,
      e > t.length && (e = t.length),
      n = e - 1; n >= 0 && 128 === (192 & t[n]); )
          n--;
      return n < 0 ? e : 0 === n ? e : n + s[t[n]] > e ? n : e
  }
}
, function(t, e) {
  "use strict";
  function n() {
      this.input = null,
      this.next_in = 0,
      this.avail_in = 0,
      this.total_in = 0,
      this.output = null,
      this.next_out = 0,
      this.avail_out = 0,
      this.total_out = 0,
      this.msg = "",
      this.state = null,
      this.data_type = 2,
      this.adler = 0
  }
  t.exports = n
}
, function(t, e, n) {
  "use strict";
  function r(t) {
      if (!(this instanceof r))
          return new r(t);
      this.options = s.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ""
      }, t || {});
      var e = this.options;
      e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits,
      0 === e.windowBits && (e.windowBits = -15)),
      !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32),
      e.windowBits > 15 && e.windowBits < 48 && 0 === (15 & e.windowBits) && (e.windowBits |= 15),
      this.err = 0,
      this.msg = "",
      this.ended = !1,
      this.chunks = [],
      this.strm = new c,
      this.strm.avail_out = 0;
      var n = o.inflateInit2(this.strm, e.windowBits);
      if (n !== u.Z_OK)
          throw new Error(f[n]);
      this.header = new h,
      o.inflateGetHeader(this.strm, this.header)
  }
  function i(t, e) {
      var n = new r(e);
      if (n.push(t, !0),
      n.err)
          throw n.msg || f[n.err];
      return n.result
  }
  function a(t, e) {
      return e = e || {},
      e.raw = !0,
      i(t, e)
  }
  var o = n(24)
    , s = n(14)
    , l = n(21)
    , u = n(27)
    , f = n(20)
    , c = n(22)
    , h = n(28)
    , d = Object.prototype.toString;
  r.prototype.push = function(t, e) {
      var n, r, i, a, f, c, h = this.strm, p = this.options.chunkSize, g = this.options.dictionary, b = !1;
      if (this.ended)
          return !1;
      r = e === ~~e ? e : e === !0 ? u.Z_FINISH : u.Z_NO_FLUSH,
      "string" == typeof t ? h.input = l.binstring2buf(t) : "[object ArrayBuffer]" === d.call(t) ? h.input = new Uint8Array(t) : h.input = t,
      h.next_in = 0,
      h.avail_in = h.input.length;
      do {
          if (0 === h.avail_out && (h.output = new s.Buf8(p),
          h.next_out = 0,
          h.avail_out = p),
          n = o.inflate(h, u.Z_NO_FLUSH),
          n === u.Z_NEED_DICT && g && (c = "string" == typeof g ? l.string2buf(g) : "[object ArrayBuffer]" === d.call(g) ? new Uint8Array(g) : g,
          n = o.inflateSetDictionary(this.strm, c)),
          n === u.Z_BUF_ERROR && b === !0 && (n = u.Z_OK,
          b = !1),
          n !== u.Z_STREAM_END && n !== u.Z_OK)
              return this.onEnd(n),
              this.ended = !0,
              !1;
          h.next_out && (0 !== h.avail_out && n !== u.Z_STREAM_END && (0 !== h.avail_in || r !== u.Z_FINISH && r !== u.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = l.utf8border(h.output, h.next_out),
          a = h.next_out - i,
          f = l.buf2string(h.output, i),
          h.next_out = a,
          h.avail_out = p - a,
          a && s.arraySet(h.output, h.output, i, a, 0),
          this.onData(f)) : this.onData(s.shrinkBuf(h.output, h.next_out)))),
          0 === h.avail_in && 0 === h.avail_out && (b = !0)
      } while ((h.avail_in > 0 || 0 === h.avail_out) && n !== u.Z_STREAM_END);return n === u.Z_STREAM_END && (r = u.Z_FINISH),
      r === u.Z_FINISH ? (n = o.inflateEnd(this.strm),
      this.onEnd(n),
      this.ended = !0,
      n === u.Z_OK) : r !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK),
      h.avail_out = 0,
      !0)
  }
  ,
  r.prototype.onData = function(t) {
      this.chunks.push(t)
  }
  ,
  r.prototype.onEnd = function(t) {
      t === u.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)),
      this.chunks = [],
      this.err = t,
      this.msg = this.strm.msg
  }
  ,
  e.Inflate = r,
  e.inflate = i,
  e.inflateRaw = a,
  e.ungzip = i
}
, function(t, e, n) {
  "use strict";
  function r(t) {
      return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
  }
  function i() {
      this.mode = 0,
      this.last = !1,
      this.wrap = 0,
      this.havedict = !1,
      this.flags = 0,
      this.dmax = 0,
      this.check = 0,
      this.total = 0,
      this.head = null,
      this.wbits = 0,
      this.wsize = 0,
      this.whave = 0,
      this.wnext = 0,
      this.window = null,
      this.hold = 0,
      this.bits = 0,
      this.length = 0,
      this.offset = 0,
      this.extra = 0,
      this.lencode = null,
      this.distcode = null,
      this.lenbits = 0,
      this.distbits = 0,
      this.ncode = 0,
      this.nlen = 0,
      this.ndist = 0,
      this.have = 0,
      this.next = null,
      this.lens = new _.Buf16(320),
      this.work = new _.Buf16(288),
      this.lendyn = null,
      this.distdyn = null,
      this.sane = 0,
      this.back = 0,
      this.was = 0
  }
  function a(t) {
      var e;
      return t && t.state ? (e = t.state,
      t.total_in = t.total_out = e.total = 0,
      t.msg = "",
      e.wrap && (t.adler = 1 & e.wrap),
      e.mode = N,
      e.last = 0,
      e.havedict = 0,
      e.dmax = 32768,
      e.head = null,
      e.hold = 0,
      e.bits = 0,
      e.lencode = e.lendyn = new _.Buf32(gt),
      e.distcode = e.distdyn = new _.Buf32(bt),
      e.sane = 1,
      e.back = -1,
      A) : j
  }
  function o(t) {
      var e;
      return t && t.state ? (e = t.state,
      e.wsize = 0,
      e.whave = 0,
      e.wnext = 0,
      a(t)) : j
  }
  function s(t, e) {
      var n, r;
      return t && t.state ? (r = t.state,
      e < 0 ? (n = 0,
      e = -e) : (n = (e >> 4) + 1,
      e < 48 && (e &= 15)),
      e && (e < 8 || e > 15) ? j : (null !== r.window && r.wbits !== e && (r.window = null),
      r.wrap = n,
      r.wbits = e,
      o(t))) : j
  }
  function l(t, e) {
      var n, r;
      return t ? (r = new i,
      t.state = r,
      r.window = null,
      n = s(t, e),
      n !== A && (t.state = null),
      n) : j
  }
  function u(t) {
      return l(t, _t)
  }
  function f(t) {
      if (wt) {
          var e;
          for (b = new _.Buf32(512),
          y = new _.Buf32(32),
          e = 0; e < 144; )
              t.lens[e++] = 8;
          for (; e < 256; )
              t.lens[e++] = 9;
          for (; e < 280; )
              t.lens[e++] = 7;
          for (; e < 288; )
              t.lens[e++] = 8;
          for (T(E, t.lens, 0, 288, b, 0, t.work, {
              bits: 9
          }),
          e = 0; e < 32; )
              t.lens[e++] = 5;
          T(x, t.lens, 0, 32, y, 0, t.work, {
              bits: 5
          }),
          wt = !1
      }
      t.lencode = b,
      t.lenbits = 9,
      t.distcode = y,
      t.distbits = 5
  }
  function c(t, e, n, r) {
      var i, a = t.state;
      return null === a.window && (a.wsize = 1 << a.wbits,
      a.wnext = 0,
      a.whave = 0,
      a.window = new _.Buf8(a.wsize)),
      r >= a.wsize ? (_.arraySet(a.window, e, n - a.wsize, a.wsize, 0),
      a.wnext = 0,
      a.whave = a.wsize) : (i = a.wsize - a.wnext,
      i > r && (i = r),
      _.arraySet(a.window, e, n - r, i, a.wnext),
      r -= i,
      r ? (_.arraySet(a.window, e, n - r, r, 0),
      a.wnext = r,
      a.whave = a.wsize) : (a.wnext += i,
      a.wnext === a.wsize && (a.wnext = 0),
      a.whave < a.wsize && (a.whave += i))),
      0
  }
  function h(t, e) {
      var n, i, a, o, s, l, u, h, d, p, g, b, y, gt, bt, yt, _t, wt, vt, mt, Tt, kt, Et, xt, St = 0, Ot = new _.Buf8(4), Bt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in)
          return j;
      n = t.state,
      n.mode === W && (n.mode = J),
      s = t.next_out,
      a = t.output,
      u = t.avail_out,
      o = t.next_in,
      i = t.input,
      l = t.avail_in,
      h = n.hold,
      d = n.bits,
      p = l,
      g = u,
      kt = A;
      t: for (; ; )
          switch (n.mode) {
          case N:
              if (0 === n.wrap) {
                  n.mode = J;
                  break
              }
              for (; d < 16; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              if (2 & n.wrap && 35615 === h) {
                  n.check = 0,
                  Ot[0] = 255 & h,
                  Ot[1] = h >>> 8 & 255,
                  n.check = v(n.check, Ot, 2, 0),
                  h = 0,
                  d = 0,
                  n.mode = L;
                  break
              }
              if (n.flags = 0,
              n.head && (n.head.done = !1),
              !(1 & n.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                  t.msg = "incorrect header check",
                  n.mode = ht;
                  break
              }
              if ((15 & h) !== D) {
                  t.msg = "unknown compression method",
                  n.mode = ht;
                  break
              }
              if (h >>>= 4,
              d -= 4,
              Tt = (15 & h) + 8,
              0 === n.wbits)
                  n.wbits = Tt;
              else if (Tt > n.wbits) {
                  t.msg = "invalid window size",
                  n.mode = ht;
                  break
              }
              n.dmax = 1 << Tt,
              t.adler = n.check = 1,
              n.mode = 512 & h ? V : W,
              h = 0,
              d = 0;
              break;
          case L:
              for (; d < 16; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              if (n.flags = h,
              (255 & n.flags) !== D) {
                  t.msg = "unknown compression method",
                  n.mode = ht;
                  break
              }
              if (57344 & n.flags) {
                  t.msg = "unknown header flags set",
                  n.mode = ht;
                  break
              }
              n.head && (n.head.text = h >> 8 & 1),
              512 & n.flags && (Ot[0] = 255 & h,
              Ot[1] = h >>> 8 & 255,
              n.check = v(n.check, Ot, 2, 0)),
              h = 0,
              d = 0,
              n.mode = F;
          case F:
              for (; d < 32; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              n.head && (n.head.time = h),
              512 & n.flags && (Ot[0] = 255 & h,
              Ot[1] = h >>> 8 & 255,
              Ot[2] = h >>> 16 & 255,
              Ot[3] = h >>> 24 & 255,
              n.check = v(n.check, Ot, 4, 0)),
              h = 0,
              d = 0,
              n.mode = z;
          case z:
              for (; d < 16; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              n.head && (n.head.xflags = 255 & h,
              n.head.os = h >> 8),
              512 & n.flags && (Ot[0] = 255 & h,
              Ot[1] = h >>> 8 & 255,
              n.check = v(n.check, Ot, 2, 0)),
              h = 0,
              d = 0,
              n.mode = U;
          case U:
              if (1024 & n.flags) {
                  for (; d < 16; ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  n.length = h,
                  n.head && (n.head.extra_len = h),
                  512 & n.flags && (Ot[0] = 255 & h,
                  Ot[1] = h >>> 8 & 255,
                  n.check = v(n.check, Ot, 2, 0)),
                  h = 0,
                  d = 0
              } else
                  n.head && (n.head.extra = null);
              n.mode = H;
          case H:
              if (1024 & n.flags && (b = n.length,
              b > l && (b = l),
              b && (n.head && (Tt = n.head.extra_len - n.length,
              n.head.extra || (n.head.extra = new Array(n.head.extra_len)),
              _.arraySet(n.head.extra, i, o, b, Tt)),
              512 & n.flags && (n.check = v(n.check, i, b, o)),
              l -= b,
              o += b,
              n.length -= b),
              n.length))
                  break t;
              n.length = 0,
              n.mode = Z;
          case Z:
              if (2048 & n.flags) {
                  if (0 === l)
                      break t;
                  b = 0;
                  do
                      Tt = i[o + b++],
                      n.head && Tt && n.length < 65536 && (n.head.name += String.fromCharCode(Tt));
                  while (Tt && b < l);if (512 & n.flags && (n.check = v(n.check, i, b, o)),
                  l -= b,
                  o += b,
                  Tt)
                      break t
              } else
                  n.head && (n.head.name = null);
              n.length = 0,
              n.mode = G;
          case G:
              if (4096 & n.flags) {
                  if (0 === l)
                      break t;
                  b = 0;
                  do
                      Tt = i[o + b++],
                      n.head && Tt && n.length < 65536 && (n.head.comment += String.fromCharCode(Tt));
                  while (Tt && b < l);if (512 & n.flags && (n.check = v(n.check, i, b, o)),
                  l -= b,
                  o += b,
                  Tt)
                      break t
              } else
                  n.head && (n.head.comment = null);
              n.mode = Y;
          case Y:
              if (512 & n.flags) {
                  for (; d < 16; ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  if (h !== (65535 & n.check)) {
                      t.msg = "header crc mismatch",
                      n.mode = ht;
                      break
                  }
                  h = 0,
                  d = 0
              }
              n.head && (n.head.hcrc = n.flags >> 9 & 1,
              n.head.done = !0),
              t.adler = n.check = 0,
              n.mode = W;
              break;
          case V:
              for (; d < 32; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              t.adler = n.check = r(h),
              h = 0,
              d = 0,
              n.mode = X;
          case X:
              if (0 === n.havedict)
                  return t.next_out = s,
                  t.avail_out = u,
                  t.next_in = o,
                  t.avail_in = l,
                  n.hold = h,
                  n.bits = d,
                  C;
              t.adler = n.check = 1,
              n.mode = W;
          case W:
              if (e === O || e === B)
                  break t;
          case J:
              if (n.last) {
                  h >>>= 7 & d,
                  d -= 7 & d,
                  n.mode = ut;
                  break
              }
              for (; d < 3; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              switch (n.last = 1 & h,
              h >>>= 1,
              d -= 1,
              3 & h) {
              case 0:
                  n.mode = K;
                  break;
              case 1:
                  if (f(n),
                  n.mode = nt,
                  e === B) {
                      h >>>= 2,
                      d -= 2;
                      break t
                  }
                  break;
              case 2:
                  n.mode = Q;
                  break;
              case 3:
                  t.msg = "invalid block type",
                  n.mode = ht
              }
              h >>>= 2,
              d -= 2;
              break;
          case K:
              for (h >>>= 7 & d,
              d -= 7 & d; d < 32; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              if ((65535 & h) !== (h >>> 16 ^ 65535)) {
                  t.msg = "invalid stored block lengths",
                  n.mode = ht;
                  break
              }
              if (n.length = 65535 & h,
              h = 0,
              d = 0,
              n.mode = q,
              e === B)
                  break t;
          case q:
              n.mode = $;
          case $:
              if (b = n.length) {
                  if (b > l && (b = l),
                  b > u && (b = u),
                  0 === b)
                      break t;
                  _.arraySet(a, i, o, b, s),
                  l -= b,
                  o += b,
                  u -= b,
                  s += b,
                  n.length -= b;
                  break
              }
              n.mode = W;
              break;
          case Q:
              for (; d < 14; ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              if (n.nlen = (31 & h) + 257,
              h >>>= 5,
              d -= 5,
              n.ndist = (31 & h) + 1,
              h >>>= 5,
              d -= 5,
              n.ncode = (15 & h) + 4,
              h >>>= 4,
              d -= 4,
              n.nlen > 286 || n.ndist > 30) {
                  t.msg = "too many length or distance symbols",
                  n.mode = ht;
                  break
              }
              n.have = 0,
              n.mode = tt;
          case tt:
              for (; n.have < n.ncode; ) {
                  for (; d < 3; ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  n.lens[Bt[n.have++]] = 7 & h,
                  h >>>= 3,
                  d -= 3
              }
              for (; n.have < 19; )
                  n.lens[Bt[n.have++]] = 0;
              if (n.lencode = n.lendyn,
              n.lenbits = 7,
              Et = {
                  bits: n.lenbits
              },
              kt = T(k, n.lens, 0, 19, n.lencode, 0, n.work, Et),
              n.lenbits = Et.bits,
              kt) {
                  t.msg = "invalid code lengths set",
                  n.mode = ht;
                  break
              }
              n.have = 0,
              n.mode = et;
          case et:
              for (; n.have < n.nlen + n.ndist; ) {
                  for (; St = n.lencode[h & (1 << n.lenbits) - 1],
                  bt = St >>> 24,
                  yt = St >>> 16 & 255,
                  _t = 65535 & St,
                  !(bt <= d); ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  if (_t < 16)
                      h >>>= bt,
                      d -= bt,
                      n.lens[n.have++] = _t;
                  else {
                      if (16 === _t) {
                          for (xt = bt + 2; d < xt; ) {
                              if (0 === l)
                                  break t;
                              l--,
                              h += i[o++] << d,
                              d += 8
                          }
                          if (h >>>= bt,
                          d -= bt,
                          0 === n.have) {
                              t.msg = "invalid bit length repeat",
                              n.mode = ht;
                              break
                          }
                          Tt = n.lens[n.have - 1],
                          b = 3 + (3 & h),
                          h >>>= 2,
                          d -= 2
                      } else if (17 === _t) {
                          for (xt = bt + 3; d < xt; ) {
                              if (0 === l)
                                  break t;
                              l--,
                              h += i[o++] << d,
                              d += 8
                          }
                          h >>>= bt,
                          d -= bt,
                          Tt = 0,
                          b = 3 + (7 & h),
                          h >>>= 3,
                          d -= 3
                      } else {
                          for (xt = bt + 7; d < xt; ) {
                              if (0 === l)
                                  break t;
                              l--,
                              h += i[o++] << d,
                              d += 8
                          }
                          h >>>= bt,
                          d -= bt,
                          Tt = 0,
                          b = 11 + (127 & h),
                          h >>>= 7,
                          d -= 7
                      }
                      if (n.have + b > n.nlen + n.ndist) {
                          t.msg = "invalid bit length repeat",
                          n.mode = ht;
                          break
                      }
                      for (; b--; )
                          n.lens[n.have++] = Tt
                  }
              }
              if (n.mode === ht)
                  break;
              if (0 === n.lens[256]) {
                  t.msg = "invalid code -- missing end-of-block",
                  n.mode = ht;
                  break
              }
              if (n.lenbits = 9,
              Et = {
                  bits: n.lenbits
              },
              kt = T(E, n.lens, 0, n.nlen, n.lencode, 0, n.work, Et),
              n.lenbits = Et.bits,
              kt) {
                  t.msg = "invalid literal/lengths set",
                  n.mode = ht;
                  break
              }
              if (n.distbits = 6,
              n.distcode = n.distdyn,
              Et = {
                  bits: n.distbits
              },
              kt = T(x, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, Et),
              n.distbits = Et.bits,
              kt) {
                  t.msg = "invalid distances set",
                  n.mode = ht;
                  break
              }
              if (n.mode = nt,
              e === B)
                  break t;
          case nt:
              n.mode = rt;
          case rt:
              if (l >= 6 && u >= 258) {
                  t.next_out = s,
                  t.avail_out = u,
                  t.next_in = o,
                  t.avail_in = l,
                  n.hold = h,
                  n.bits = d,
                  m(t, g),
                  s = t.next_out,
                  a = t.output,
                  u = t.avail_out,
                  o = t.next_in,
                  i = t.input,
                  l = t.avail_in,
                  h = n.hold,
                  d = n.bits,
                  n.mode === W && (n.back = -1);
                  break
              }
              for (n.back = 0; St = n.lencode[h & (1 << n.lenbits) - 1],
              bt = St >>> 24,
              yt = St >>> 16 & 255,
              _t = 65535 & St,
              !(bt <= d); ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              if (yt && 0 === (240 & yt)) {
                  for (wt = bt,
                  vt = yt,
                  mt = _t; St = n.lencode[mt + ((h & (1 << wt + vt) - 1) >> wt)],
                  bt = St >>> 24,
                  yt = St >>> 16 & 255,
                  _t = 65535 & St,
                  !(wt + bt <= d); ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  h >>>= wt,
                  d -= wt,
                  n.back += wt
              }
              if (h >>>= bt,
              d -= bt,
              n.back += bt,
              n.length = _t,
              0 === yt) {
                  n.mode = lt;
                  break
              }
              if (32 & yt) {
                  n.back = -1,
                  n.mode = W;
                  break
              }
              if (64 & yt) {
                  t.msg = "invalid literal/length code",
                  n.mode = ht;
                  break
              }
              n.extra = 15 & yt,
              n.mode = it;
          case it:
              if (n.extra) {
                  for (xt = n.extra; d < xt; ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  n.length += h & (1 << n.extra) - 1,
                  h >>>= n.extra,
                  d -= n.extra,
                  n.back += n.extra
              }
              n.was = n.length,
              n.mode = at;
          case at:
              for (; St = n.distcode[h & (1 << n.distbits) - 1],
              bt = St >>> 24,
              yt = St >>> 16 & 255,
              _t = 65535 & St,
              !(bt <= d); ) {
                  if (0 === l)
                      break t;
                  l--,
                  h += i[o++] << d,
                  d += 8
              }
              if (0 === (240 & yt)) {
                  for (wt = bt,
                  vt = yt,
                  mt = _t; St = n.distcode[mt + ((h & (1 << wt + vt) - 1) >> wt)],
                  bt = St >>> 24,
                  yt = St >>> 16 & 255,
                  _t = 65535 & St,
                  !(wt + bt <= d); ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  h >>>= wt,
                  d -= wt,
                  n.back += wt
              }
              if (h >>>= bt,
              d -= bt,
              n.back += bt,
              64 & yt) {
                  t.msg = "invalid distance code",
                  n.mode = ht;
                  break
              }
              n.offset = _t,
              n.extra = 15 & yt,
              n.mode = ot;
          case ot:
              if (n.extra) {
                  for (xt = n.extra; d < xt; ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  n.offset += h & (1 << n.extra) - 1,
                  h >>>= n.extra,
                  d -= n.extra,
                  n.back += n.extra
              }
              if (n.offset > n.dmax) {
                  t.msg = "invalid distance too far back",
                  n.mode = ht;
                  break
              }
              n.mode = st;
          case st:
              if (0 === u)
                  break t;
              if (b = g - u,
              n.offset > b) {
                  if (b = n.offset - b,
                  b > n.whave && n.sane) {
                      t.msg = "invalid distance too far back",
                      n.mode = ht;
                      break
                  }
                  b > n.wnext ? (b -= n.wnext,
                  y = n.wsize - b) : y = n.wnext - b,
                  b > n.length && (b = n.length),
                  gt = n.window
              } else
                  gt = a,
                  y = s - n.offset,
                  b = n.length;
              b > u && (b = u),
              u -= b,
              n.length -= b;
              do
                  a[s++] = gt[y++];
              while (--b);0 === n.length && (n.mode = rt);
              break;
          case lt:
              if (0 === u)
                  break t;
              a[s++] = n.length,
              u--,
              n.mode = rt;
              break;
          case ut:
              if (n.wrap) {
                  for (; d < 32; ) {
                      if (0 === l)
                          break t;
                      l--,
                      h |= i[o++] << d,
                      d += 8
                  }
                  if (g -= u,
                  t.total_out += g,
                  n.total += g,
                  g && (t.adler = n.check = n.flags ? v(n.check, a, g, s - g) : w(n.check, a, g, s - g)),
                  g = u,
                  (n.flags ? h : r(h)) !== n.check) {
                      t.msg = "incorrect data check",
                      n.mode = ht;
                      break
                  }
                  h = 0,
                  d = 0
              }
              n.mode = ft;
          case ft:
              if (n.wrap && n.flags) {
                  for (; d < 32; ) {
                      if (0 === l)
                          break t;
                      l--,
                      h += i[o++] << d,
                      d += 8
                  }
                  if (h !== (4294967295 & n.total)) {
                      t.msg = "incorrect length check",
                      n.mode = ht;
                      break
                  }
                  h = 0,
                  d = 0
              }
              n.mode = ct;
          case ct:
              kt = M;
              break t;
          case ht:
              kt = P;
              break t;
          case dt:
              return R;
          case pt:
          default:
              return j
          }
      return t.next_out = s,
      t.avail_out = u,
      t.next_in = o,
      t.avail_in = l,
      n.hold = h,
      n.bits = d,
      (n.wsize || g !== t.avail_out && n.mode < ht && (n.mode < ut || e !== S)) && c(t, t.output, t.next_out, g - t.avail_out) ? (n.mode = dt,
      R) : (p -= t.avail_in,
      g -= t.avail_out,
      t.total_in += p,
      t.total_out += g,
      n.total += g,
      n.wrap && g && (t.adler = n.check = n.flags ? v(n.check, a, g, t.next_out - g) : w(n.check, a, g, t.next_out - g)),
      t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === W ? 128 : 0) + (n.mode === nt || n.mode === q ? 256 : 0),
      (0 === p && 0 === g || e === S) && kt === A && (kt = I),
      kt)
  }
  function d(t) {
      if (!t || !t.state)
          return j;
      var e = t.state;
      return e.window && (e.window = null),
      t.state = null,
      A
  }
  function p(t, e) {
      var n;
      return t && t.state ? (n = t.state,
      0 === (2 & n.wrap) ? j : (n.head = e,
      e.done = !1,
      A)) : j
  }
  function g(t, e) {
      var n, r, i, a = e.length;
      return t && t.state ? (n = t.state,
      0 !== n.wrap && n.mode !== X ? j : n.mode === X && (r = 1,
      r = w(r, e, a, 0),
      r !== n.check) ? P : (i = c(t, e, a, a)) ? (n.mode = dt,
      R) : (n.havedict = 1,
      A)) : j
  }
  var b, y, _ = n(14), w = n(18), v = n(19), m = n(25), T = n(26), k = 0, E = 1, x = 2, S = 4, O = 5, B = 6, A = 0, M = 1, C = 2, j = -2, P = -3, R = -4, I = -5, D = 8, N = 1, L = 2, F = 3, z = 4, U = 5, H = 6, Z = 7, G = 8, Y = 9, V = 10, X = 11, W = 12, J = 13, K = 14, q = 15, $ = 16, Q = 17, tt = 18, et = 19, nt = 20, rt = 21, it = 22, at = 23, ot = 24, st = 25, lt = 26, ut = 27, ft = 28, ct = 29, ht = 30, dt = 31, pt = 32, gt = 852, bt = 592, yt = 15, _t = yt, wt = !0;
  e.inflateReset = o,
  e.inflateReset2 = s,
  e.inflateResetKeep = a,
  e.inflateInit = u,
  e.inflateInit2 = l,
  e.inflate = h,
  e.inflateEnd = d,
  e.inflateGetHeader = p,
  e.inflateSetDictionary = g,
  e.inflateInfo = "pako inflate (from Nodeca project)"
}
, function(t, e) {
  "use strict";
  var n = 30
    , r = 12;
  t.exports = function(t, e) {
      var i, a, o, s, l, u, f, c, h, d, p, g, b, y, _, w, v, m, T, k, E, x, S, O, B;
      i = t.state,
      a = t.next_in,
      O = t.input,
      o = a + (t.avail_in - 5),
      s = t.next_out,
      B = t.output,
      l = s - (e - t.avail_out),
      u = s + (t.avail_out - 257),
      f = i.dmax,
      c = i.wsize,
      h = i.whave,
      d = i.wnext,
      p = i.window,
      g = i.hold,
      b = i.bits,
      y = i.lencode,
      _ = i.distcode,
      w = (1 << i.lenbits) - 1,
      v = (1 << i.distbits) - 1;
      t: do {
          b < 15 && (g += O[a++] << b,
          b += 8,
          g += O[a++] << b,
          b += 8),
          m = y[g & w];
          e: for (; ; ) {
              if (T = m >>> 24,
              g >>>= T,
              b -= T,
              T = m >>> 16 & 255,
              0 === T)
                  B[s++] = 65535 & m;
              else {
                  if (!(16 & T)) {
                      if (0 === (64 & T)) {
                          m = y[(65535 & m) + (g & (1 << T) - 1)];
                          continue e
                      }
                      if (32 & T) {
                          i.mode = r;
                          break t
                      }
                      t.msg = "invalid literal/length code",
                      i.mode = n;
                      break t
                  }
                  k = 65535 & m,
                  T &= 15,
                  T && (b < T && (g += O[a++] << b,
                  b += 8),
                  k += g & (1 << T) - 1,
                  g >>>= T,
                  b -= T),
                  b < 15 && (g += O[a++] << b,
                  b += 8,
                  g += O[a++] << b,
                  b += 8),
                  m = _[g & v];
                  n: for (; ; ) {
                      if (T = m >>> 24,
                      g >>>= T,
                      b -= T,
                      T = m >>> 16 & 255,
                      !(16 & T)) {
                          if (0 === (64 & T)) {
                              m = _[(65535 & m) + (g & (1 << T) - 1)];
                              continue n
                          }
                          t.msg = "invalid distance code",
                          i.mode = n;
                          break t
                      }
                      if (E = 65535 & m,
                      T &= 15,
                      b < T && (g += O[a++] << b,
                      b += 8,
                      b < T && (g += O[a++] << b,
                      b += 8)),
                      E += g & (1 << T) - 1,
                      E > f) {
                          t.msg = "invalid distance too far back",
                          i.mode = n;
                          break t
                      }
                      if (g >>>= T,
                      b -= T,
                      T = s - l,
                      E > T) {
                          if (T = E - T,
                          T > h && i.sane) {
                              t.msg = "invalid distance too far back",
                              i.mode = n;
                              break t
                          }
                          if (x = 0,
                          S = p,
                          0 === d) {
                              if (x += c - T,
                              T < k) {
                                  k -= T;
                                  do
                                      B[s++] = p[x++];
                                  while (--T);x = s - E,
                                  S = B
                              }
                          } else if (d < T) {
                              if (x += c + d - T,
                              T -= d,
                              T < k) {
                                  k -= T;
                                  do
                                      B[s++] = p[x++];
                                  while (--T);if (x = 0,
                                  d < k) {
                                      T = d,
                                      k -= T;
                                      do
                                          B[s++] = p[x++];
                                      while (--T);x = s - E,
                                      S = B
                                  }
                              }
                          } else if (x += d - T,
                          T < k) {
                              k -= T;
                              do
                                  B[s++] = p[x++];
                              while (--T);x = s - E,
                              S = B
                          }
                          for (; k > 2; )
                              B[s++] = S[x++],
                              B[s++] = S[x++],
                              B[s++] = S[x++],
                              k -= 3;
                          k && (B[s++] = S[x++],
                          k > 1 && (B[s++] = S[x++]))
                      } else {
                          x = s - E;
                          do
                              B[s++] = B[x++],
                              B[s++] = B[x++],
                              B[s++] = B[x++],
                              k -= 3;
                          while (k > 2);k && (B[s++] = B[x++],
                          k > 1 && (B[s++] = B[x++]))
                      }
                      break
                  }
              }
              break
          }
      } while (a < o && s < u);k = b >> 3,
      a -= k,
      b -= k << 3,
      g &= (1 << b) - 1,
      t.next_in = a,
      t.next_out = s,
      t.avail_in = a < o ? 5 + (o - a) : 5 - (a - o),
      t.avail_out = s < u ? 257 + (u - s) : 257 - (s - u),
      i.hold = g,
      i.bits = b
  }
}
, function(t, e, n) {
  "use strict";
  var r = n(14)
    , i = 15
    , a = 852
    , o = 592
    , s = 0
    , l = 1
    , u = 2
    , f = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
    , c = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
    , h = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
    , d = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
  t.exports = function(t, e, n, p, g, b, y, _) {
      var w, v, m, T, k, E, x, S, O, B = _.bits, A = 0, M = 0, C = 0, j = 0, P = 0, R = 0, I = 0, D = 0, N = 0, L = 0, F = null, z = 0, U = new r.Buf16(i + 1), H = new r.Buf16(i + 1), Z = null, G = 0;
      for (A = 0; A <= i; A++)
          U[A] = 0;
      for (M = 0; M < p; M++)
          U[e[n + M]]++;
      for (P = B,
      j = i; j >= 1 && 0 === U[j]; j--)
          ;
      if (P > j && (P = j),
      0 === j)
          return g[b++] = 20971520,
          g[b++] = 20971520,
          _.bits = 1,
          0;
      for (C = 1; C < j && 0 === U[C]; C++)
          ;
      for (P < C && (P = C),
      D = 1,
      A = 1; A <= i; A++)
          if (D <<= 1,
          D -= U[A],
          D < 0)
              return -1;
      if (D > 0 && (t === s || 1 !== j))
          return -1;
      for (H[1] = 0,
      A = 1; A < i; A++)
          H[A + 1] = H[A] + U[A];
      for (M = 0; M < p; M++)
          0 !== e[n + M] && (y[H[e[n + M]]++] = M);
      if (t === s ? (F = Z = y,
      E = 19) : t === l ? (F = f,
      z -= 257,
      Z = c,
      G -= 257,
      E = 256) : (F = h,
      Z = d,
      E = -1),
      L = 0,
      M = 0,
      A = C,
      k = b,
      R = P,
      I = 0,
      m = -1,
      N = 1 << P,
      T = N - 1,
      t === l && N > a || t === u && N > o)
          return 1;
      for (; ; ) {
          x = A - I,
          y[M] < E ? (S = 0,
          O = y[M]) : y[M] > E ? (S = Z[G + y[M]],
          O = F[z + y[M]]) : (S = 96,
          O = 0),
          w = 1 << A - I,
          v = 1 << R,
          C = v;
          do
              v -= w,
              g[k + (L >> I) + v] = x << 24 | S << 16 | O | 0;
          while (0 !== v);for (w = 1 << A - 1; L & w; )
              w >>= 1;
          if (0 !== w ? (L &= w - 1,
          L += w) : L = 0,
          M++,
          0 === --U[A]) {
              if (A === j)
                  break;
              A = e[n + y[M]]
          }
          if (A > P && (L & T) !== m) {
              for (0 === I && (I = P),
              k += C,
              R = A - I,
              D = 1 << R; R + I < j && (D -= U[R + I],
              !(D <= 0)); )
                  R++,
                  D <<= 1;
              if (N += 1 << R,
              t === l && N > a || t === u && N > o)
                  return 1;
              m = L & T,
              g[m] = P << 24 | R << 16 | k - b | 0
          }
      }
      return 0 !== L && (g[k + L] = A - I << 24 | 64 << 16 | 0),
      _.bits = P,
      0
  }
}
, function(t, e) {
  "use strict";
  t.exports = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
  }
}
, function(t, e) {
  "use strict";
  function n() {
      this.text = 0,
      this.time = 0,
      this.xflags = 0,
      this.os = 0,
      this.extra = null,
      this.extra_len = 0,
      this.name = "",
      this.comment = "",
      this.hcrc = 0,
      this.done = !1
  }
  t.exports = n
}
, function(t, e) {
  "use strict";
  function n(t, e) {
      return "hasAttribute"in t ? t.hasAttribute(e) : k.filter(t.attributes, function(t) {
          return t.nodeName === e
      }).length > 0
  }
  function r(t) {
      var e = "d2ViZHJpdmVyLF9fZHJpdmVyX2V2YWx1YXRlLF9fd2ViZHJpdmVyX2V2YWx1YXRlLF9fc2VsZW5pdW1fZXZhbHVhdGUsX19meGRyaXZlcl9ldmFsdWF0ZSxfX2RyaXZlcl91bndyYXBwZWQsX193ZWJkcml2ZXJfdW53cmFwcGVkLF9fc2VsZW5pdW1fdW53cmFwcGVkLF9fZnhkcml2ZXJfdW53cmFwcGVk"
        , n = k.parse(e);
      return k.filter(n, i(t)).length > 0
  }
  function i(t) {
      return function(e) {
          return e in t
      }
  }
  function a(t) {
      return atob("X193ZWJkcml2ZXJGdW5j")in t
  }
  function o(t) {
      var e = "d2ViZHJpdmVyLF9TZWxlbml1bV9JREVfUmVjb3JkZXIsX3NlbGVuaXVtLGNhbGxlZFNlbGVuaXVt"
        , n = k.parse(e);
      return k.filter(n, i(t)).length > 0
  }
  function s(t) {
      return atob("ZG9tQXV0b21hdGlvbg==")in t || atob("ZG9tQXV0b21hdGlvbkNvbnRyb2xsZXI=")in t
  }
  function l(t) {
      return t.documentElement && n(t.documentElement, atob("d2ViZHJpdmVy"))
  }
  function u(t) {
      return atob("X19sYXN0V2F0aXJBbGVydA==")in t || atob("X19sYXN0V2F0aXJDb25maXJt")in t || atob("X19sYXN0V2F0aXJQcm9tcHQ=")in t
  }
  function f(t) {
      return t[atob("d2ViZHJpdmVy")] || !1
  }
  function c(t) {
      return atob("d2ViZHJpdmVy")in t
  }
  function h(t) {
      return atob("X193ZWJkcml2ZXJfc2NyaXB0X2Zu")in t
  }
  function d(t) {
      var e = !1;
      try {
          e = t.cookie.indexOf(atob("Q2hyb21lRHJpdmVyd2plcnM5MDhmbGpzZGYzNzQ1OWZzZGZnZGZ3cnU9")) > -1
      } catch (t) {}
      return e
  }
  function p(t) {
      return atob("JGNkY19hc2RqZmxhc3V0b3BmaHZjWkxtY2ZsXw==")in t || atob("JGNocm9tZV9hc3luY1NjcmlwdEluZm8=")in t
  }
  function g(t) {
      return atob("X1dFQkRSSVZFUl9FTEVNX0NBQ0hF")in t
  }
  function b(t) {
      return atob("X18kd2ViZHJpdmVyQXN5bmNFeGVjdXRvcg==")in t
  }
  function y(t) {
      var e, n = [];
      for (e = 0; e < t.length; e++)
          n.push(t[e]);
      return n
  }
  function _(t) {
      return n(t, atob("Y2RfZnJhbWVfaWRf"))
  }
  function w(t) {
      var e = y(t.getElementsByTagName("iframe"))
        , n = y(t.getElementsByTagName("frame"))
        , r = e.concat(n)
        , i = k.filter(r, _);
      return i.length > 0
  }
  function v(t) {
      var e = "ZHJpdmVyLWV2YWx1YXRlLHdlYmRyaXZlci1ldmFsdWF0ZSxzZWxlbml1bS1ldmFsdWF0ZSx3ZWJkcml2ZXJDb21tYW5kLHdlYmRyaXZlci1ldmFsdWF0ZS1yZXNwb25zZQ=="
        , n = k.parse(e);
      document.addEventListener && k.forEach(n, function(e) {
          document.addEventListener(e, m(e, t), !1)
      })
  }
  function m(t, e) {
      return function n() {
          e("lwe"),
          document.removeEventListener(t, n)
      }
  }
  function T(t) {
      var e = 0
        , n = setInterval(function() {
          var r = {};
          r.f = h(window),
          r.v = d(document),
          r.p = p(document),
          r.h = g(window),
          r.l = b(document),
          r.S = w(document);
          for (var i = k.ownKeys(r), a = 0; a < i.length; a++)
              if (r[i[a]] === !0) {
                  clearInterval(n),
                  t("lwc" + i[a]);
                  break
              }
          ++e > 60 && clearInterval(n)
      }, 500)
  }
  var k = {
      filter: function(t, e) {
          var n, r = [];
          for (n = 0; n < t.length; n++)
              e(t[n], n, t) && r.push(t[n]);
          return r
      },
      forEach: function(t, e) {
          var n;
          for (n = 0; n < t.length; n++)
              e(t[n], n, t)
      },
      ownKeys: function(t) {
          var e, n = [];
          for (e in t)
              t.hasOwnProperty(e) && n.push(e);
          return n
      },
      parse: function(t) {
          return t ? atob(t).split(",") : ""
      }
  }
    , E = function() {
      return l(document) ? "dw" : r(document) ? "de" : o(document) ? "di" : a(window) ? "wf" : s(window) ? "" : u(window) ? "wwt" : c(window) ? "ww" : f(navigator) ? "gw" : ""
  }
    , x = function(t) {
      v(t),
      T(t)
  };
  t.exports = {
      getwd: E,
      listenwd: x
  }
}
, function(t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
      value: !0
  });
  var n = function() {
      var t = []
      //   , e = document.createElement("canvas");
      // e.width = 30,
      // e.height = 30,
      // e.style.display = "inline";
      // var n = e.getContext("2d");
      // return n.rect(0, 0, 10, 10),
      // n.rect(2, 2, 6, 6),
      // n.textBaseline = "EATBETTERLIVEBETTER",
      // n.fillStyle = "#f60",
      // n.fillRect(12, 1, 62, 20),
      // n.fillStyle = "#069",
      // n.font = "11pt no-real-font-123",
      // n.fillText("yoda", 2, 15),
      // n.fillStyle = "rgba(102, 204, 0, 0.2)",
      // n.font = "18pt Arial",
      // n.fillText("rohr", 4, 45),
      // n.globalCompositeOperation = "multiply",
      // n.fillStyle = "rgb(255,0,255)",
      // n.beginPath(),
      // n.arc(5, 15, 10, 0, 2 * Math.PI, !0),
      // n.closePath(),
      // n.fill(),
      // n.fillStyle = "rgb(0,255,255)",
      // n.beginPath(),
      // n.arc(15, 10, 20, 0, 2 * Math.PI, !0),
      // n.closePath(),
      // n.fill(),
      // n.fillStyle = "rgb(255,255,0)",
      // n.beginPath(),
      // n.arc(10, 10, 12, 0, 2 * Math.PI, !0),
      // n.closePath(),
      // n.fill(),
      // n.fillStyle = "rgb(255,0,255)",
      // n.arc(18, 5, 15, 0, 2 * Math.PI, !0),
      // n.fill("evenodd"),
      // e.toDataURL && t.push(e.toDataURL()),
      // t.join("~")
  }
    , r = function() {
      // if (window.navigator.userAgent.indexOf("TitansX") > 0)
      //     return "";
      // var t = document.createElement("canvas")
      //   , e = null;
      // try {
      //     e = t.getContext("webgl") || t.getContext("experimental-webgl")
      // } catch (t) {}
      // return e || (e = null),
      // e
  }
    , i = function() {
      var t = r();
      return t ? t.getParameter(t.VENDOR) : ""
  }
    , a = function() {
      var t = r();
      return t ? t.getParameter(t.RENDERER) : ""
  }
    , o = function(t) {
      // var e = ["monospace", "sans-serif", "serif"]
      //   , n = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"]
      //   , r = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
      // n = n.concat(r),
      // n = n.filter(function(t, e) {
      //     return n.indexOf(t) === e
      // });
      // var i = "Eat Better, Live Better"
      //   , a = "72px"
        // , o = document.getElementsByTagName("body")[0]
        // , s = document.createElement("div")
        // , l = document.createElement("div")
        // , u = {}
        // , f = {}
        // , c = function() {
          // var t = document.createElement("span");
          // return t.style.position = "absolute",
          // t.style.left = "-9999px",
          // t.style.fontSize = a,
          // t.style.fontStyle = "normal",
          // t.style.fontWeight = "normal",
          // t.style.letterSpacing = "normal",
          // t.style.lineBreak = "auto",
          // t.style.lineHeight = "normal",
          // t.style.textTransform = "none",
          // t.style.textAlign = "left",
          // t.style.textDecoration = "none",
          // t.style.textShadow = "none",
          // t.style.whiteSpace = "normal",
          // t.style.wordBreak = "normal",
          // t.style.wordSpacing = "normal",
          // t.textContent = i,
          // t
      // }
        // , h = function() {
          // for (var t = [], n = 0, r = e.length; n < r; n++) {
              // var i = c();
              // i.style.fontFamily = e[n],
              // s.appendChild(i),
              // t.push(i)
          // }
          // return t
      // }
        // , d = h();
      // o.appendChild(s);
      // for (var p = 0, g = e.length; p < g; p++)
      //     u[e[p]] = d[p].offsetWidth,
      //     f[e[p]] = d[p].offsetHeight;
      // var b = function(t, e) {
      //     var n = c();
      //     return n.style.fontFamily = "'" + t + "'," + e,
      //     n
      // }
      //   , y = function() {
      //     for (var t = {}, r = 0, i = n.length; r < i; r++) {
      //         for (var a = [], o = 0, s = e.length; o < s; o++) {
      //             var u = b(n[r], e[o]);
      //             l.appendChild(u),
      //             a.push(u)
      //         }
      //         t[n[r]] = a
      //     }
      //     return t
      // }
      //   , _ = function(t) {
      //     for (var n = !1, r = 0; r < e.length; r++)
      //         if (n = t[r].offsetWidth !== u[e[r]] || t[r].offsetHeight !== f[e[r]])
      //             return n;
      //     return n
      // }
      //   , w = y();
      // o.appendChild(l);
      // for (var v = [], m = 0, T = n.length; m < T; m++)
      //     _(w[n[m]]) && v.push(n[m]);
      // o.removeChild(l),
      // o.removeChild(s),
      // t.fL = v.join(",")
  }
    , s = {
      getCanvasFp: n,
      getWebglVendor: i,
      getWebglRenderer: a,
      getFonts: o
  };
  e.default = s
}
, function(t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
      value: !0
  });
  var n = {
      ts: (new Date).getTime(),
      mT: [],
      kT: [],
      aT: [],
      tT: [],
      dT: [],
      sT: [],
      inputs: [],
      buttons: []
  }
    , r = function(t) {
      t = t || window.event;
      var e = t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)
        , n = t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
      return {
          x: e,
          y: n
      }
  };
  n.event = function() {
      function t(t, e, n, r) {
          e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
      }
      var e = function(t) {
          if (t = t || window.event,
          null == t.pageX && null !== t.clientX) {
              var e = t.target && t.target.ownerDocument || document
                , n = e.documentElement
                , r = e.body;
              t.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0),
              t.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)
          }
          var i = Date.now() - this.ts;
          this.mT.unshift([t.pageX, t.pageY, i].join(",")),
          this.mT.length > 60 && (this.mT = this.mT.slice(0, 60))
      }
      .bind(this)
        , n = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement
            , n = "number" == typeof t.which ? t.which : t.keyCode;
          if (n) {
              var r = Date.now() - this.ts;
              this.kT.unshift([String.fromCharCode(n), e.nodeName, r].join(","))
          }
          this.kT.length > 30 && (this.kT = this.kT.slice(0, 30))
      }
      .bind(this)
        , i = function(t) {
          var e = 0
            , n = 0
            , r = t.touches[0];
          if (null !== r.clientX) {
              var i = t.target && t.target.ownerDocument || document
                , a = i.documentElement
                , o = i.body;
              e = r.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0),
              n = r.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)
          }
          var s = Date.now() - this.ts;
          this.tT.unshift([e, n, t.touches.length, s].join(",")),
          this.tT.length > 60 && (this.tT = this.tT.slice(0, 60))
      }
      .bind(this)
        , a = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement
            , n = Date.now() - this.ts;
          this.aT.unshift([t.clientX, t.clientY, e.nodeName, n].join(",")),
          this.aT.length > 30 && (this.aT = this.aT.slice(0, 30))
      }
      .bind(this)
        , o = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement;
          if (e.nodeName && "INPUT" === e.nodeName) {
              var n = e.name || e.id;
              n || (n = e.id = "rohr_" + parseInt(1e6 * Math.random()));
              for (var r = this.inputs.length, i = 0; i < r; i++)
                  n === this.inputs[0].inputName && (this.inputs.splice(0, 1),
                  i = 0,
                  r -= 1);
              this.inputs.unshift({
                  inputName: n,
                  editStartedTimeStamp: Date.now(),
                  keyboardEvent: "0-0-0-0"
              })
          }
      }
      .bind(this)
        , s = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement;
          if (e.nodeName && "INPUT" === e.nodeName) {
              var n = this.inputs[0];
              if (n) {
                  var r = n.keyboardEvent.split("-");
                  r[2] = 1,
                  n.keyboardEvent = r.join("-")
              }
          }
      }
      .bind(this)
        , l = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement;
          if (e.nodeName && "INPUT" === e.nodeName) {
              var n = this.inputs[0]
                , r = n.keyboardEvent.split("-")
                , i = "number" == typeof t.which ? t.which : t.keyCode;
              9 === i && (r[0] = parseInt(r[0]) + 1),
              r[1] = parseInt(r[1]) + 1;
              var a = Date.now();
              if (n.lastTime) {
                  var o = n.lastTime;
                  r[3] = r[3] + "|" + parseInt(a - o, 36)
              }
              this.inputs[0].lastTime = a,
              this.inputs[0].keyboardEvent = r.join("-")
          }
      }
      .bind(this)
        , u = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement;
          if (e.nodeName && "INPUT" === e.nodeName) {
              var n = this.inputs[0];
              if (!n)
                  return;
              n.editFinishedTimeStamp = Date.now();
              var r = n.keyboardEvent.split("-");
              0 != r[3] && (r[3] = r[3].substr(2)),
              delete n.lastTime,
              n.keyboardEvent = r.join("-")
          }
      }
      .bind(this)
        , f = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement;
          if (e.nodeName && "BUTTON" === e.nodeName) {
              var n = e.name || e.id;
              n || (n = e.id = "rohr_" + parseInt(1e6 * Math.random()));
              for (var i = this.buttons.length, a = 0; a < i; a++)
                  n === this.buttons[a].buttonName && (this.buttons.splice(a, 1),
                  a = 0,
                  i -= 1);
              var o = r(t)
                , s = e.clientWidth
                , l = e.clientHeight
                , u = t.offsetX / s * 1e3
                , f = (l - t.offsetY) / l * 1e3;
              this.buttons.unshift({
                  buttonName: n,
                  touchPoint: "{" + o.x + "," + o.y + "}",
                  touchPosition: "{" + Math.floor(u) / 10 + "," + Math.floor(f) / 10 + "}",
                  touchTimeStamp: Date.now()
              })
          }
      }
      .bind(this)
        , c = function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement
            , n = Date.now() - this.ts;
          this.dT.unshift([t.clientX, t.clientY, e.nodeName, n].join(",")),
          this.dT.length > 60 && (this.dT = this.dT.slice(0, 60))
      }
      .bind(this)
        , h = function(t) {
          var e = t.touches[0]
            , n = t.target || t.srcElement
            , r = Date.now() - this.ts;
          this.sT.unshift([e.pageX, e.pageY, n.nodeName, r].join(",")),
          this.sT.length > 60 && (this.sT = this.sT.slice(0, 60))
      }
      .bind(this);
      t("mousemove", document, e, !0),
      t("keydown", document, n, !0),
      t("click", document, a, !0),
      "ontouchmove"in document && t("touchmove", document, i, !0),
      t("focus", document, o, !0),
      t("mouseout", document, s, !0),
      t("keydown", document, l, !0),
      t("blur", document, u, !0),
      "ontouchstart"in document ? t("touchstart", document, f, !0) : t("click", document, f, !0),
      t("mousedown", document, c, !0),
      t("touchstart", document, h, !0)
  }
  ,
  n.data = function() {
      return n
  }
  ,
  e.default = n
}
, function(t, e) {
  "use strict";
  function n() {
      var t = new (window.AudioContext || window.webkitAudioContext)
        , e = t.createAnalyser();
      e.maxDecibels = 100,
      r(e);
      var n = t.createOscillator()
        , i = t.createGain();
      i.gain.value = .5,
      n.connect(i),
      i.connect(e),
      n.type = "square",
      n.frequency.value = 520,
      i.gain.setValueAtTime(0, t.currentTime),
      i.gain.linearRampToValueAtTime(1, t.currentTime + .01),
      n.start(),
      i.gain.exponentialRampToValueAtTime(.001, t.currentTime + 1),
      n.stop(t.currentTime + 1)
  }
  function r(t) {
      t.fftSize = 256;
      var e = new Float32Array(t.frequencyBinCount)
        , r = function r() {
          var a = requestAnimationFrame(r);
          t.getFloatFrequencyData(e);
          var o = e.join(",");
          o.indexOf("-Infinity") === -1 && (i.data = o,
          window.cancelAnimationFrame(a),
          document.removeEventListener("mousedown", n, !1),
          document.removeEventListener("touchstart", n, !1))
      };
      r()
  }
  Object.defineProperty(e, "__esModule", {
      value: !0
  });
  var i = {};
  i.start = function() {
      document.addEventListener("touchstart", n, !1),
      document.addEventListener("mousedown", n, !1)
  }
  ,
  i.audioData = function() {
      return i
  }
  ,
  e.default = i
}
, function(t, e, n) {
  "use strict";
  var r = n(34)
    , i = n(35)
    , a = {
      version: "0.2.2"
  }
    , o = function() {
      this.actionTypes = {},
      this.storeQueue = [],
      this.id = Date.now() + Math.round(1e3 * Math.random()),
      this.middlewareQueue = new r(function(t) {
          this.__invokeCallback__(t)
      }
      .bind(this),(!0))
  };
  o.prototype = {
      __invokeCallback__: function(t) {
          this.storeQueue.forEach(function(e) {
              var n, r = e.callbacks[t.type];
              "function" == typeof r && (n = r(e.store, t),
              void 0 !== n && e.store.event.publish(n))
          })
      },
      use: function(t) {
          "function" == typeof t && this.middlewareQueue.enter(t)
      },
      __dispatch__: function(t, e) {
          var n, r = e(), i = this.actionTypes, a = r.type;
          if (!a)
              throw new Error("action type does not exist in \n" + JSON.stringify(r, null, 2));
          if (n = i[a]) {
              if (n !== t)
                  throw new Error('action type "' + a + '" is duplicate')
          } else
              i[a] = t;
          this.middlewareQueue.execute(r)
      },
      createActions: function(t) {
          var e, n, r = (this.id++).toString(32), i = this, a = {};
          for (e in t)
              n = t[e],
              a[e] = function(t, e) {
                  return function() {
                      var n = arguments;
                      i.__dispatch__(e, function() {
                          return t.apply(null, Array.prototype.slice.call(n))
                      })
                  }
              }(n, r);
          return a
      },
      createMutableStore: function(t, e) {
          if (!e)
              throw new Error("schema must in createMutableStore arguments");
          var n = new i(t)
            , r = {
              mutable: {},
              event: {}
          };
          return r.mutable.get = n.mutable.get.bind(n.mutable),
          r.event.subscribe = n.event.subscribe.bind(n.event),
          r.event.unsubscribe = n.event.unsubscribe.bind(n.event),
          this.storeQueue.push({
              store: n,
              callbacks: e
          }),
          r
      }
  },
  a.Dispatcher = o,
  t.exports = a
}
, function(t, e) {
  "use strict";
  var n = function(t, e) {
      this.workflows = [],
      this.completeCallback = t,
      e && (this._workflows = [])
  };
  n.prototype = {
      enter: function(t) {
          this.workflows.push(t),
          this._workflows && this._workflows.push(t)
      },
      execute: function(t, e) {
          e = e || this.workflows.concat();
          var n;
          e.length ? (n = e.shift())(t, this.execute.bind(this, t, e)) : (this._workflows && (this.workflows = this._workflows.concat()),
          e = null,
          this.completeCallback(t))
      }
  },
  t.exports = n
}
, function(t, e, n) {
  "use strict";
  var r = n(36)
    , i = n(37)
    , a = {
      string: !0,
      number: !0,
      null: !0,
      undefind: !0,
      boolean: !0
  }
    , o = function(t) {
      this.store = {},
      Object.keys(t).forEach(function(e) {
          this.store[e] = t[e]
      }
      .bind(this))
  };
  o.prototype = {
      set: function(t, e) {
          if (t in this.store)
              return this.store[t] = e,
              t
      },
      get: function(t) {
          var e = this.store[t]
            , n = typeof e;
          return a[n] ? e : r(e)
      },
      delete: function(t) {
          return delete this.store[t],
          t
      }
  };
  var s = function(t) {
      this.mutable = new o(t),
      this.event = new i
  };
  t.exports = s
}
, function(t, e) {
  function n(t, e, r) {
      if (!(t instanceof Object))
          return t;
      var i, a = Object.prototype.toString.call(t).slice(8, -1);
      switch (a) {
      case "Array":
          i = [];
          break;
      case "Date":
          i = new Date(t.getTime());
          break;
      case "RegExp":
          i = new RegExp(t);
          break;
      case "Function":
          break;
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Uint16Array":
      case "Uint32Array":
      case "Int8Array":
      case "Int16Array":
      case "Int32Array":
      case "Float32Array":
      case "Float64Array":
          i = t.subarray();
          break;
      default:
          i = {}
      }
      if (e.push(t),
      r.push(i),
      t instanceof Array)
          for (var o = 0; o < t.length; o++)
              i[o] = n(t[o], e, r);
      for (var s = Object.keys(t).sort(), l = Object.keys(i).sort(), u = 0; u < s.length; u++) {
          var f = s[u];
          if (l.length > 0 && f === l[0])
              l.shift();
          else if (Object.prototype.hasOwnProperty.call(t, f)) {
              var c = t[f]
                , h = e.indexOf(c);
              i[f] = h !== -1 ? r[h] : n(t[f], e, r)
          }
      }
      return i
  }
  t.exports = function(t) {
      return n(t, [], [])
  }
}
, function(t, e) {
  "use strict";
  var n = function() {
      this.handlers = []
  };
  n.prototype = {
      publish: function(t) {
          this.handlers.forEach(function(e) {
              e.type ? e.type === t && e.handler(t) : e.handler(t)
          })
      },
      subscribe: function(t, e) {
          var n = {};
          "function" == typeof t ? n.handler = t : (n.handler = e,
          n.type = t);
          for (var r, i = 0; i < this.handlers.length; i++)
              r = this.handlers[i],
              r.type === t && this.handlers.splice(i, 1);
          this.handlers.push(n)
      },
      unsubscribe: function(t, e) {
          "function" == typeof t && (e = t,
          t = null);
          for (var n, r = 0, i = !1; r < this.handlers.length; r++)
              n = this.handlers[r],
              n.type ? t && e ? i = n.type === t && n.handler === e : t ? i = n.type === t : e && (i = n.handler === e) : i = n.handler === e,
              i && this.handlers.splice(r--, 1)
      }
  },
  t.exports = n
}
, function(t, e) {
  "use strict";
  function n() {
      window.yoda_doc.innerHTML = "",
      window.seed[window.yoda_callModule].initModule[window.yoda_callMethod]()
  }
  Object.defineProperty(e, "__esModule", {
      value: !0
  });
  var r = "<div style='position: fixed; background: rgba(0, 0, 0, 0.4); width: 100%; height: 100%; left: 0; right: 0; top: 0; bottom: 0; z-index: 997;'>\n        <div style='position: fixed; left: 3em; right: 3em; bottom: 50%; border-radius: 10px; background: #FCFCFC; z-index: 998; height:auto;' id='childRoot'></div>\n    </div>"
    , i = "<div style='position: fixed; background: rgba(0, 0, 0, 0.4); width: 100%; height: 100%; left: 0; right: 0; top: 0; bottom: 0; z-index: 997;'>\n        <div style='position: fixed; left: 3em; right: 3em; height: 100%; border-radius: 10px; background: rgba(0, 0, 0, 0); z-index: 998;' id='childRoot'></div>\n    </div>"
    , a = window.seed.env || "pro"
    , o = function(t) {
      var e = t.root;
      window.yoda_doc = e,
      e.innerHTML = r,
      t.root = "childRoot",
      window.yoda_callModule = t.succModule,
      window.yoda_callMethod = t.succCallbackFun,
      window.yoda_executeGlobalCallBack = n,
      t.succCallbackFun = "yoda_executeGlobalCallBack",
      window.YodaSeed(t, a)
  }
    , s = function(t) {
      var e = t.root;
      window.yoda_doc = e,
      e.innerHTML = i,
      t.root = "childRoot",
      window.yoda_callModule = t.succModule,
      window.yoda_callMethod = t.succCallbackFun,
      window.yoda_executeGlobalCallBack = n,
      t.succCallbackFun = "yoda_executeGlobalCallBack",
      window.YodaSeed(t, a)
  }
    , l = {
      iAdapter: o,
      pcAdapter: s
  };
  e.default = l
}
]);

exports.window = window;

// console.log(babelHelpers)
