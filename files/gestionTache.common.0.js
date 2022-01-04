((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[0],{

/***/ "0029":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b49");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0dee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "1232":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "25fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

 /*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */



Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("8bbf"));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var inBrowser = typeof window !== 'undefined';
function freeze(item) {
  if (Array.isArray(item) || _typeof(item) === 'object') {
    return Object.freeze(item);
  }

  return item;
}
function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return transports.reduce(function (passengers, transport) {
    var temp = transport.passengers[0];
    var newPassengers = typeof temp === 'function' ? temp(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}
function stableSort(array, compareFn) {
  return array.map(function (v, idx) {
    return [idx, v];
  }).sort(function (a, b) {
    return compareFn(a[1], b[1]) || a[0] - b[0];
  }).map(function (c) {
    return c[1];
  });
}
function pick(obj, keys) {
  return keys.reduce(function (acc, key) {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

var transports = {};
var targets = {};
var sources = {};
var Wormhole = Vue.extend({
  data: function data() {
    return {
      transports: transports,
      targets: targets,
      sources: sources,
      trackInstances: inBrowser
    };
  },
  methods: {
    open: function open(transport) {
      if (!inBrowser) return;
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers,
          _transport$order = transport.order,
          order = _transport$order === void 0 ? Infinity : _transport$order;
      if (!to || !from || !passengers) return;
      var newTransport = {
        to: to,
        from: from,
        passengers: freeze(passengers),
        order: order
      };
      var keys = Object.keys(this.transports);

      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.$_getTransportIndex(newTransport); // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

      var newTransports = this.transports[to].slice(0);

      if (currentIndex === -1) {
        newTransports.push(newTransport);
      } else {
        newTransports[currentIndex] = newTransport;
      }

      this.transports[to] = stableSort(newTransports, function (a, b) {
        return a.order - b.order;
      });
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;
      if (!to || !from && force === false) return;

      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.$_getTransportIndex(transport);

        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    registerTarget: function registerTarget(target, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.targets[target]) {
        console.warn("[portal-vue]: Target ".concat(target, " already exists"));
      }

      this.$set(this.targets, target, Object.freeze([vm]));
    },
    unregisterTarget: function unregisterTarget(target) {
      this.$delete(this.targets, target);
    },
    registerSource: function registerSource(source, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.sources[source]) {
        console.warn("[portal-vue]: source ".concat(source, " already exists"));
      }

      this.$set(this.sources, source, Object.freeze([vm]));
    },
    unregisterSource: function unregisterSource(source) {
      this.$delete(this.sources, source);
    },
    hasTarget: function hasTarget(to) {
      return !!(this.targets[to] && this.targets[to][0]);
    },
    hasSource: function hasSource(to) {
      return !!(this.sources[to] && this.sources[to][0]);
    },
    hasContentFor: function hasContentFor(to) {
      return !!this.transports[to] && !!this.transports[to].length;
    },
    // Internal
    $_getTransportIndex: function $_getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return +i;
        }
      }

      return -1;
    }
  }
});
var wormhole = new Wormhole(transports);

var _id = 1;
var Portal = Vue.extend({
  name: 'portal',
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default: function _default() {
        return String(_id++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerSource(_this.name, _this);
    });
  },
  mounted: function mounted() {
    if (!this.disabled) {
      this.sendUpdate();
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterSource(this.name);
    this.clear();
  },
  watch: {
    to: function to(newValue, oldValue) {
      oldValue && oldValue !== newValue && this.clear(oldValue);
      this.sendUpdate();
    }
  },
  methods: {
    clear: function clear(target) {
      var closer = {
        from: this.name,
        to: target || this.to
      };
      wormhole.close(closer);
    },
    normalizeSlots: function normalizeSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    normalizeOwnChildren: function normalizeOwnChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizeSlots();

      if (slotContent) {
        var transport = {
          from: this.name,
          to: this.to,
          passengers: _toConsumableArray(slotContent),
          order: this.order
        };
        wormhole.open(transport);
      } else {
        this.clear();
      }
    }
  },
  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;

    if (children && this.disabled) {
      return children.length <= 1 && this.slim ? this.normalizeOwnChildren(children)[0] : h(Tag, [this.normalizeOwnChildren(children)]);
    } else {
      return this.slim ? h() : h(Tag, {
        class: {
          'v-portal': true
        },
        style: {
          display: 'none'
        },
        key: 'v-portal-placeholder'
      });
    }
  }
});

var PortalTarget = Vue.extend({
  name: 'portalTarget',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    slim: {
      type: Boolean,
      default: false
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerTarget(_this.name, _this);
    });
  },
  watch: {
    ownTransports: function ownTransports() {
      this.$emit('change', this.children().length > 0);
    },
    name: function name(newVal, oldVal) {
      /**
       * TODO
       * This should warn as well ...
       */
      wormhole.unregisterTarget(oldVal);
      wormhole.registerTarget(newVal, this);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.transition) {
      this.$nextTick(function () {
        // only when we have a transition, because it causes a re-render
        _this2.firstRender = false;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterTarget(this.name);
  },
  computed: {
    ownTransports: function ownTransports() {
      var transports = this.transports[this.name] || [];

      if (this.multiple) {
        return transports;
      }

      return transports.length === 0 ? [] : [transports[transports.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    }
  },
  methods: {
    // can't be a computed prop because it has to "react" to $slot changes.
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
    },
    // can't be a computed prop because it has to "react" to this.children().
    noWrapper: function noWrapper() {
      var noWrapper = this.slim && !this.transition;

      if (noWrapper && this.children().length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }

      return noWrapper;
    }
  },
  render: function render(h) {
    var noWrapper = this.noWrapper();
    var children = this.children();
    var Tag = this.transition || this.tag;
    return noWrapper ? children[0] : this.slim && !Tag ? h() : h(Tag, {
      props: {
        // if we have a transition component, pass the tag if it exists
        tag: this.transition && this.tag ? this.tag : undefined
      },
      class: {
        'vue-portal-target': true
      }
    }, children);
  }
});

var _id$1 = 0;
var portalProps = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'];
var targetProps = ['multiple', 'transition'];
var MountingPortal = Vue.extend({
  name: 'MountingPortal',
  inheritAttrs: false,
  props: {
    append: {
      type: [Boolean, String]
    },
    bail: {
      type: Boolean
    },
    mountTo: {
      type: String,
      required: true
    },
    // Portal
    disabled: {
      type: Boolean
    },
    // name for the portal
    name: {
      type: String,
      default: function _default() {
        return 'mounted_' + String(_id$1++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    // name for the target
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    },
    // Target
    multiple: {
      type: Boolean,
      default: false
    },
    targetSlim: {
      type: Boolean
    },
    targetSlotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    targetTag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  created: function created() {
    if (typeof document === 'undefined') return;
    var el = document.querySelector(this.mountTo);

    if (!el) {
      console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
      return;
    }

    var props = this.$props; // Target already exists

    if (wormhole.targets[props.name]) {
      if (props.bail) {
        console.warn("[portal-vue]: Target ".concat(props.name, " is already mounted.\n        Aborting because 'bail: true' is set"));
      } else {
        this.portalTarget = wormhole.targets[props.name];
      }

      return;
    }

    var append = props.append;

    if (append) {
      var type = typeof append === 'string' ? append : 'DIV';
      var mountEl = document.createElement(type);
      el.appendChild(mountEl);
      el = mountEl;
    } // get props for target from $props
    // we have to rename a few of them


    var _props = pick(this.$props, targetProps);

    _props.slim = this.targetSlim;
    _props.tag = this.targetTag;
    _props.slotProps = this.targetSlotProps;
    _props.name = this.to;
    this.portalTarget = new PortalTarget({
      el: el,
      parent: this.$parent || this,
      propsData: _props
    });
  },
  beforeDestroy: function beforeDestroy() {
    var target = this.portalTarget;

    if (this.append) {
      var el = target.$el;
      el.parentNode.removeChild(el);
    }

    target.$destroy();
  },
  render: function render(h) {
    if (!this.portalTarget) {
      console.warn("[portal-vue] Target wasn't mounted");
      return h();
    } // if there's no "manual" scoped slot, so we create a <Portal> ourselves


    if (!this.$scopedSlots.manual) {
      var props = pick(this.$props, portalProps);
      return h(Portal, {
        props: props,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    } // else, we render the scoped slot


    var content = this.$scopedSlots.manual({
      to: this.to
    }); // if user used <template> for the scoped slot
    // content will be an array

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (!content) return h();
    return content;
  }
});

function install(Vue$$1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue$$1.component(options.portalName || 'Portal', Portal);
  Vue$$1.component(options.portalTargetName || 'PortalTarget', PortalTarget);
  Vue$$1.component(options.MountingPortalName || 'MountingPortal', MountingPortal);
}

var index = {
  install: install
};

exports.default = index;
exports.Portal = Portal;
exports.PortalTarget = PortalTarget;
exports.MountingPortal = MountingPortal;
exports.Wormhole = wormhole;
//# sourceMappingURL=portal-vue.common.js.map


/***/ }),

/***/ "2a16":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1232");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "3800":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("e3b0");
var combineURLs = __webpack_require__("f159");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "40bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "4fdf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "5f02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "617d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "67bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "797d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");
var buildURL = __webpack_require__("b75a");
var InterceptorManager = __webpack_require__("4fdf");
var dispatchRequest = __webpack_require__("c251");
var mergeConfig = __webpack_require__("40bd");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "8129":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("a90f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "870f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8ae4");

/***/ }),

/***/ "8977":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "8ae4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");
var bind = __webpack_require__("1232");
var Axios = __webpack_require__("797d");
var mergeConfig = __webpack_require__("40bd");
var defaults = __webpack_require__("a8d8");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("617d");
axios.CancelToken = __webpack_require__("9d26");
axios.isCancel = __webpack_require__("0029");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("9769");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("e259");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "8df4b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "91a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("8129");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "9769":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "9d26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("617d");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "9e51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");
var settle = __webpack_require__("91a5");
var cookies = __webpack_require__("fcf4");
var buildURL = __webpack_require__("b75a");
var buildFullPath = __webpack_require__("3800");
var parseHeaders = __webpack_require__("dfba");
var isURLSameOrigin = __webpack_require__("0dee");
var createError = __webpack_require__("8129");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "a8d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("2a16");
var normalizeHeaderName = __webpack_require__("67bd");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("9e51");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("9e51");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "a90f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var cookies = __webpack_require__("7aac");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b75a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "b9b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export getEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNoWarn; });
/**
 * Utilities to get information about the current environment
 */
var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? Object({"NODE_ENV":"production","BASE_URL":"/"}) || false : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};
var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN') || getEnv('NODE_ENV') === 'production';
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "bfb1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ basic; });

// UNUSED EXPORTS: ButtonSave, ButtonDelete, AjaxToastBootStrap

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=660da5d0&scoped=true&lang=html&
var ButtonSavevue_type_template_id_660da5d0_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"outline-success","size":"sm"},on:{"click":_vm.onSubmit}},[_c('span',[_vm._v(_vm._s(_vm.texte))]),(_vm.running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","animation":"spin-pulse"}}):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=660da5d0&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var ButtonSavevue_type_script_lang_js_ = ({
  name: "ButtonSave",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      default: "Enregistrer"
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit("ev-click");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
 /* harmony default export */ var Buttons_ButtonSavevue_type_script_lang_js_ = (ButtonSavevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Buttons/ButtonSave.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Buttons_ButtonSavevue_type_script_lang_js_,
  ButtonSavevue_type_template_id_660da5d0_scoped_true_lang_html_render,
  staticRenderFns,
  false,
  null,
  "660da5d0",
  null
  
)

/* harmony default export */ var ButtonSave = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=c9b62bfe&scoped=true&lang=html&
var ButtonDeletevue_type_template_id_c9b62bfe_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"outline-danger","size":"sm"},on:{"click":_vm.DeleteFile}},[_c('span',[_vm._v(" "+_vm._s(_vm.texte)+" ")]),(_vm.running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","animation":"spin-pulse"}}):_vm._e()],1)],1)}
var ButtonDeletevue_type_template_id_c9b62bfe_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=c9b62bfe&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var ButtonDeletevue_type_script_lang_js_ = ({
  name: "ButtonDelete",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      default: "Supprimer"
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
    DeleteFile: function DeleteFile() {
      this.$emit("ev-click");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
 /* harmony default export */ var Buttons_ButtonDeletevue_type_script_lang_js_ = (ButtonDeletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Buttons/ButtonDelete.vue





/* normalize component */

var ButtonDelete_component = Object(componentNormalizer["a" /* default */])(
  Buttons_ButtonDeletevue_type_script_lang_js_,
  ButtonDeletevue_type_template_id_c9b62bfe_scoped_true_lang_html_render,
  ButtonDeletevue_type_template_id_c9b62bfe_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "c9b62bfe",
  null
  
)

/* harmony default export */ var ButtonDelete = (ButtonDelete_component.exports);
// EXTERNAL MODULE: ./node_modules/wbuutilities/node_modules/axios/index.js
var axios = __webpack_require__("870f");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Ajax/basic.js
/**
 * Permet d'effectuer les requetes
 * pour modifier ou definir les paramettres par defaut de l'instance, {AjaxBasic}.axiosInstance.defaults.timeout = 30000;
 */

const InstAxios = axios_default.a.create({
  timeout: 300000,
});

const basicRequest = {
  axiosInstance: InstAxios,
  /**
   * Domaine permettant d'effectuer les tests en local.
   */
  TestDomain: null,
  /**
   * Permet de determiner, si nous sommes en local ou pas.
   */
  isLocalDev:
    window.location.host.includes("localhost") ||
    window.location.host.includes(".kksa")
      ? true
      : false,
  BaseUrl() {
    return this.isLocalDev && this.TestDomain
      ? this.TestDomain.trim("/")
      : window.location.protocol + "//" + window.location.host;
  },
  post: function(url, datas, configs) {
    return new Promise((resolv, reject) => {
      const urlFinal = url.includes("://") ? url : this.BaseUrl() + url;
      InstAxios.post(urlFinal, datas, configs)
        .then((reponse) => {
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch((error) => {
          reject({
            status: false,
            error: error.response,
            code: error.code,
            stack: error.stack,
          });
        });
    });
  },
  get: function(url, configs) {
    return new Promise((resolv, reject) => {
      const urlFinal = url.includes("://") ? url : this.BaseUrl() + url;
      InstAxios.get(urlFinal, configs)
        .then((reponse) => {
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch((error) => {
          reject({
            status: false,
            error: error.response,
            code: error.code,
            stack: error.stack,
          });
        });
    });
  },
  /**
   * @param file " fichier à uploaded"
   */
  postFile(url, file, id = null) {
    return new Promise((resolv, reject) => {
      this.getBase64(file).then((fileEncode) => {
        var headers = new Headers();
        console.log("headers : ", headers);
        var fileCompose = file.name.split(".");
        var myInit = {
          method: "POST",
          headers: headers,
          //mode: "cors",
          body: JSON.stringify({
            upload: fileEncode.base64,
            filename: fileCompose[0],
            ext: fileCompose[1],
            id: id,
          }),
          cache: "default",
        };
        const urlFinal = url.includes("://") ? url : this.BaseUrl() + url;
        fetch(urlFinal, myInit).then(function(response) {
          response
            .json()
            .then(function(json) {
              resolv(json);
            })
            .catch((error) => {
              reject(error);
            });
        });
      });
    });
  },
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      //reader.onload = () => resolve(reader.result);
      reader.onloadend = () => {
        var fileArray = reader.result.split(",");
        resolve({ src: reader.result, base64: fileArray[1] });
      };
      reader.onerror = (error) => reject(error);
    });
  },
};

/* harmony default export */ var basic = (basicRequest);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/components.js
// Component names
var NAME_ALERT = 'BAlert';
var NAME_ASPECT = 'BAspect';
var NAME_AVATAR = 'BAvatar';
var NAME_AVATAR_GROUP = 'BAvatarGroup';
var NAME_BADGE = 'BBadge';
var NAME_BREADCRUMB = 'BBreadcrumb';
var NAME_BREADCRUMB_ITEM = 'BBreadcrumbItem';
var NAME_BREADCRUMB_LINK = 'BBreadcrumbLink';
var NAME_BUTTON = 'BButton';
var NAME_BUTTON_CLOSE = 'BButtonClose';
var NAME_BUTTON_GROUP = 'BButtonGroup';
var NAME_BUTTON_TOOLBAR = 'BButtonToolbar';
var NAME_CALENDAR = 'BCalendar';
var NAME_CARD = 'BCard';
var NAME_CARD_BODY = 'BCardBody';
var NAME_CARD_FOOTER = 'BCardFooter';
var NAME_CARD_GROUP = 'BCardGroup';
var NAME_CARD_HEADER = 'BCardHeader';
var NAME_CARD_IMG = 'BCardImg';
var NAME_CARD_IMG_LAZY = 'BCardImgLazy';
var NAME_CARD_SUB_TITLE = 'BCardSubTitle';
var NAME_CARD_TEXT = 'BCardText';
var NAME_CARD_TITLE = 'BCardTitle';
var NAME_CAROUSEL = 'BCarousel';
var NAME_CAROUSEL_SLIDE = 'BCarouselSlide';
var NAME_COL = 'BCol';
var NAME_COLLAPSE = 'BCollapse';
var NAME_CONTAINER = 'BContainer';
var NAME_DROPDOWN = 'BDropdown';
var NAME_DROPDOWN_DIVIDER = 'BDropdownDivider';
var NAME_DROPDOWN_FORM = 'BDropdownForm';
var NAME_DROPDOWN_GROUP = 'BDropdownGroup';
var NAME_DROPDOWN_HEADER = 'BDropdownHeader';
var NAME_DROPDOWN_ITEM = 'BDropdownItem';
var NAME_DROPDOWN_ITEM_BUTTON = 'BDropdownItemButton';
var NAME_DROPDOWN_TEXT = 'BDropdownText';
var NAME_EMBED = 'BEmbed';
var NAME_FORM = 'BForm';
var NAME_FORM_CHECKBOX = 'BFormCheckbox';
var NAME_FORM_CHECKBOX_GROUP = 'BFormCheckboxGroup';
var NAME_FORM_DATALIST = 'BFormDatalist';
var NAME_FORM_DATEPICKER = 'BFormDatepicker';
var NAME_FORM_FILE = 'BFormFile';
var NAME_FORM_GROUP = 'BFormGroup';
var NAME_FORM_INPUT = 'BFormInput';
var NAME_FORM_INVALID_FEEDBACK = 'BFormInvalidFeedback';
var NAME_FORM_RADIO = 'BFormRadio';
var NAME_FORM_RADIO_GROUP = 'BFormRadioGroup';
var NAME_FORM_RATING = 'BFormRating';
var NAME_FORM_ROW = 'BFormRow';
var NAME_FORM_SELECT = 'BFormSelect';
var NAME_FORM_SELECT_OPTION = 'BFormSelectOption';
var NAME_FORM_SELECT_OPTION_GROUP = 'BFormSelectOptionGroup';
var NAME_FORM_SPINBUTTON = 'BFormSpinbutton';
var NAME_FORM_TAG = 'BFormTag';
var NAME_FORM_TAGS = 'BFormTags';
var NAME_FORM_TEXT = 'BFormText';
var NAME_FORM_TEXTAREA = 'BFormTextarea';
var NAME_FORM_TIMEPICKER = 'BFormTimepicker';
var NAME_FORM_VALID_FEEDBACK = 'BFormValidFeedback';
var NAME_ICON = 'BIcon';
var NAME_ICONSTACK = 'BIconstack';
var NAME_ICON_BASE = 'BIconBase';
var NAME_IMG = 'BImg';
var NAME_IMG_LAZY = 'BImgLazy';
var NAME_INPUT_GROUP = 'BInputGroup';
var NAME_INPUT_GROUP_ADDON = 'BInputGroupAddon';
var NAME_INPUT_GROUP_APPEND = 'BInputGroupAppend';
var NAME_INPUT_GROUP_PREPEND = 'BInputGroupPrepend';
var NAME_INPUT_GROUP_TEXT = 'BInputGroupText';
var NAME_JUMBOTRON = 'BJumbotron';
var NAME_LINK = 'BLink';
var NAME_LIST_GROUP = 'BListGroup';
var NAME_LIST_GROUP_ITEM = 'BListGroupItem';
var NAME_MEDIA = 'BMedia';
var NAME_MEDIA_ASIDE = 'BMediaAside';
var NAME_MEDIA_BODY = 'BMediaBody';
var NAME_MODAL = 'BModal';
var NAME_MSG_BOX = 'BMsgBox';
var NAME_NAV = 'BNav';
var NAME_NAVBAR = 'BNavbar';
var NAME_NAVBAR_BRAND = 'BNavbarBrand';
var NAME_NAVBAR_NAV = 'BNavbarNav';
var NAME_NAVBAR_TOGGLE = 'BNavbarToggle';
var NAME_NAV_FORM = 'BNavForm';
var NAME_NAV_ITEM = 'BNavItem';
var NAME_NAV_ITEM_DROPDOWN = 'BNavItemDropdown';
var NAME_NAV_TEXT = 'BNavText';
var NAME_OVERLAY = 'BOverlay';
var NAME_PAGINATION = 'BPagination';
var NAME_PAGINATION_NAV = 'BPaginationNav';
var NAME_POPOVER = 'BPopover';
var NAME_PROGRESS = 'BProgress';
var NAME_PROGRESS_BAR = 'BProgressBar';
var NAME_ROW = 'BRow';
var NAME_SIDEBAR = 'BSidebar';
var NAME_SKELETON = 'BSkeleton';
var NAME_SKELETON_ICON = 'BSkeletonIcon';
var NAME_SKELETON_IMG = 'BSkeletonImg';
var NAME_SKELETON_TABLE = 'BSkeletonTable';
var NAME_SKELETON_WRAPPER = 'BSkeletonWrapper';
var NAME_SPINNER = 'BSpinner';
var NAME_TAB = 'BTab';
var NAME_TABLE = 'BTable';
var NAME_TABLE_CELL = 'BTableCell';
var NAME_TABLE_LITE = 'BTableLite';
var NAME_TABLE_SIMPLE = 'BTableSimple';
var NAME_TABS = 'BTabs';
var NAME_TBODY = 'BTbody';
var NAME_TFOOT = 'BTfoot';
var NAME_TH = 'BTh';
var NAME_THEAD = 'BThead';
var NAME_TIME = 'BTime';
var NAME_TOAST = 'BToast';
var NAME_TOASTER = 'BToaster';
var NAME_TOOLTIP = 'BTooltip';
var NAME_TR = 'BTr'; // Helper component names

var NAME_COLLAPSE_HELPER = 'BVCollapse';
var NAME_FORM_BUTTON_LABEL_CONTROL = 'BVFormBtnLabelControl';
var NAME_FORM_RATING_STAR = 'BVFormRatingStar';
var NAME_POPOVER_HELPER = 'BVPopover';
var NAME_POPOVER_TEMPLATE = 'BVPopoverTemplate';
var NAME_POPPER = 'BVPopper';
var NAME_TAB_BUTTON_HELPER = 'BVTabButton';
var NAME_TOAST_POP = 'BVToastPop';
var NAME_TOOLTIP_HELPER = 'BVTooltip';
var NAME_TOOLTIP_TEMPLATE = 'BVTooltipTemplate';
var NAME_TRANSITION = 'BVTransition';
var NAME_TRANSPORTER = 'BVTransporter';
var NAME_TRANSPORTER_TARGET = 'BVTransporterTarget';
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/events.js
var EVENT_NAME_ACTIVATE_TAB = 'activate-tab';
var EVENT_NAME_BLUR = 'blur';
var EVENT_NAME_CANCEL = 'cancel';
var EVENT_NAME_CHANGE = 'change';
var EVENT_NAME_CHANGED = 'changed';
var EVENT_NAME_CLICK = 'click';
var EVENT_NAME_CLOSE = 'close';
var EVENT_NAME_CONTEXT = 'context';
var EVENT_NAME_CONTEXT_CHANGED = 'context-changed';
var EVENT_NAME_DESTROYED = 'destroyed';
var EVENT_NAME_DISABLE = 'disable';
var EVENT_NAME_DISABLED = 'disabled';
var EVENT_NAME_DISMISSED = 'dismissed';
var EVENT_NAME_DISMISS_COUNT_DOWN = 'dismiss-count-down';
var EVENT_NAME_ENABLE = 'enable';
var EVENT_NAME_ENABLED = 'enabled';
var EVENT_NAME_FILTERED = 'filtered';
var EVENT_NAME_FIRST = 'first';
var EVENT_NAME_FOCUSIN = 'focusin';
var EVENT_NAME_FOCUSOUT = 'focusout';
var EVENT_NAME_HEAD_CLICKED = 'head-clicked';
var EVENT_NAME_HIDDEN = 'hidden';
var EVENT_NAME_HIDE = 'hide';
var EVENT_NAME_IMG_ERROR = 'img-error';
var EVENT_NAME_INPUT = 'input';
var EVENT_NAME_LAST = 'last';
var EVENT_NAME_MOUSEENTER = 'mouseenter';
var EVENT_NAME_MOUSELEAVE = 'mouseleave';
var EVENT_NAME_NEXT = 'next';
var EVENT_NAME_OK = 'ok';
var EVENT_NAME_OPEN = 'open';
var EVENT_NAME_PAGE_CLICK = 'page-click';
var EVENT_NAME_PAUSED = 'paused';
var EVENT_NAME_PREV = 'prev';
var EVENT_NAME_REFRESH = 'refresh';
var EVENT_NAME_REFRESHED = 'refreshed';
var EVENT_NAME_REMOVE = 'remove';
var EVENT_NAME_ROW_CLICKED = 'row-clicked';
var EVENT_NAME_ROW_CONTEXTMENU = 'row-contextmenu';
var EVENT_NAME_ROW_DBLCLICKED = 'row-dblclicked';
var EVENT_NAME_ROW_HOVERED = 'row-hovered';
var EVENT_NAME_ROW_MIDDLE_CLICKED = 'row-middle-clicked';
var EVENT_NAME_ROW_SELECTED = 'row-selected';
var EVENT_NAME_ROW_UNHOVERED = 'row-unhovered';
var EVENT_NAME_SELECTED = 'selected';
var EVENT_NAME_SHOW = 'show';
var EVENT_NAME_SHOWN = 'shown';
var EVENT_NAME_SLIDING_END = 'sliding-end';
var EVENT_NAME_SLIDING_START = 'sliding-start';
var EVENT_NAME_SORT_CHANGED = 'sort-changed';
var EVENT_NAME_TAG_STATE = 'tag-state';
var EVENT_NAME_TOGGLE = 'toggle';
var EVENT_NAME_UNPAUSED = 'unpaused';
var EVENT_NAME_UPDATE = 'update';
var HOOK_EVENT_NAME_BEFORE_DESTROY = 'hook:beforeDestroy';
var HOOK_EVENT_NAME_DESTROYED = 'hook:destroyed';
var MODEL_EVENT_NAME_PREFIX = 'update:';
var ROOT_EVENT_NAME_PREFIX = 'bv';
var ROOT_EVENT_NAME_SEPARATOR = '::';
var EVENT_OPTIONS_PASSIVE = {
  passive: true
};
var EVENT_OPTIONS_NO_CAPTURE = {
  passive: true,
  capture: false
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/regex.js
// --- General ---
var RX_ARRAY_NOTATION = /\[(\d+)]/g;
var RX_BV_PREFIX = /^(BV?)/;
var RX_DIGITS = /^\d+$/;
var RX_EXTENSION = /^\..+/;
var RX_HASH = /^#/;
var RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
var RX_HTML_TAGS = /(<([^>]+)>)/gi;
var RX_HYPHENATE = /\B([A-Z])/g;
var RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
var RX_PLUS = /\+/g;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_SPACES = /[\s\uFEFF\xA0]+/g;
var RX_SPACE_SPLIT = /\s+/;
var RX_STAR = /\/\*$/;
var RX_START_SPACE_WORD = /(\s|^)(\w)/g;
var RX_TRIM_LEFT = /^\s+/;
var RX_TRIM_RIGHT = /\s+$/;
var RX_UNDERSCORE = /_/g;
var RX_UN_KEBAB = /-(\w)/g; // --- Date ---
// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'

var RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; // Used to split off the date parts of the YYYY-MM-DD string

var RX_DATE_SPLIT = /-|\s|T/; // Time string RegEx (optional seconds)

var RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; // --- URL ---
// HREFs must end with a hash followed by at least one non-hash character

var RX_HREF = /^.*(#[^#]+)$/;
var RX_ENCODED_COMMA = /%2C/g;
var RX_ENCODE_REVERSE = /[!'()*]/g;
var RX_QUERY_START = /^(\?|#|&)/; // --- Aspect ---

var RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
var RX_ASPECT_SEPARATOR = /[/:]/; // --- Grid ---

var RX_COL_CLASS = /^col-/; // --- Icon ---

var RX_ICON_PREFIX = /^BIcon/; // --- Locale ---

var RX_STRIP_LOCALE_MODS = /-u-.+/;
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/env.js
var HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
var HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';
var HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined';
var HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined';
/* istanbul ignore next: JSDOM always returns false */

var HAS_MUTATION_OBSERVER_SUPPORT = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
var IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;
var WINDOW = HAS_WINDOW_SUPPORT ? window : {};
var DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
var NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {};
var USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase();
var IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0;
var IS_IE = /msie|trident/.test(USER_AGENT); // Determine if the browser supports the option passive for events

var HAS_PASSIVE_EVENT_SUPPORT = function () {
  var passiveEventSupported = false;

  if (IS_BROWSER) {
    try {
      var options = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      WINDOW.addEventListener('test', options, options);
      WINDOW.removeEventListener('test', options, options);
    } catch (_unused) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
var HAS_TOUCH_SUPPORT = IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0);
var HAS_POINTER_EVENT_SUPPORT = IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent);
/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */

var HAS_INTERACTION_OBSERVER_SUPPORT = IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype;
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/safe-types.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/* istanbul ignore next */

var Element = HAS_WINDOW_SUPPORT ? WINDOW.Element : /*#__PURE__*/function (_Object) {
  _inherits(Element, _Object);

  var _super = _createSuper(Element);

  function Element() {
    _classCallCheck(this, Element);

    return _super.apply(this, arguments);
  }

  return Element;
}( /*#__PURE__*/_wrapNativeSuper(Object));
/* istanbul ignore next */

var HTMLElement = HAS_WINDOW_SUPPORT ? WINDOW.HTMLElement : /*#__PURE__*/function (_Element) {
  _inherits(HTMLElement, _Element);

  var _super2 = _createSuper(HTMLElement);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _super2.apply(this, arguments);
  }

  return HTMLElement;
}(Element);
/* istanbul ignore next */

var SVGElement = HAS_WINDOW_SUPPORT ? WINDOW.SVGElement : /*#__PURE__*/function (_Element2) {
  _inherits(SVGElement, _Element2);

  var _super3 = _createSuper(SVGElement);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _super3.apply(this, arguments);
  }

  return SVGElement;
}(Element);
/* istanbul ignore next */

var File = HAS_WINDOW_SUPPORT ? WINDOW.File : /*#__PURE__*/function (_Object2) {
  _inherits(File, _Object2);

  var _super4 = _createSuper(File);

  function File() {
    _classCallCheck(this, File);

    return _super4.apply(this, arguments);
  }

  return File;
}( /*#__PURE__*/_wrapNativeSuper(Object));
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/inspect.js
function inspect_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { inspect_typeof = function _typeof(obj) { return typeof obj; }; } else { inspect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return inspect_typeof(obj); }


 // --- Convenience inspection utilities ---

var toType = function toType(value) {
  return inspect_typeof(value);
};
var toRawType = function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};
var toRawTypeLC = function toRawTypeLC(value) {
  return toRawType(value).toLowerCase();
};
var isUndefined = function isUndefined(value) {
  return value === undefined;
};
var isNull = function isNull(value) {
  return value === null;
};
var isEmptyString = function isEmptyString(value) {
  return value === '';
};
var isUndefinedOrNull = function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
};
var isUndefinedOrNullOrEmpty = function isUndefinedOrNullOrEmpty(value) {
  return isUndefinedOrNull(value) || isEmptyString(value);
};
var isFunction = function isFunction(value) {
  return toType(value) === 'function';
};
var isBoolean = function isBoolean(value) {
  return toType(value) === 'boolean';
};
var isString = function isString(value) {
  return toType(value) === 'string';
};
var isNumber = function isNumber(value) {
  return toType(value) === 'number';
};
var inspect_isNumeric = function isNumeric(value) {
  return RX_NUMBER.test(String(value));
};
var isPrimitive = function isPrimitive(value) {
  return isBoolean(value) || isString(value) || isNumber(value);
};
var isArray = function isArray(value) {
  return Array.isArray(value);
}; // Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.

var isObject = function isObject(obj) {
  return obj !== null && inspect_typeof(obj) === 'object';
}; // Strict object type check
// Only returns true for plain JavaScript objects

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var isDate = function isDate(value) {
  return value instanceof Date;
};
var isEvent = function isEvent(value) {
  return value instanceof Event;
};
var inspect_isFile = function isFile(value) {
  return value instanceof File;
};
var isRegExp = function isRegExp(value) {
  return toRawType(value) === 'RegExp';
};
var isPromise = function isPromise(value) {
  return !isUndefinedOrNull(value) && isFunction(value.then) && isFunction(value.catch);
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/array.js
 // --- Static ---

var from = function from() {
  return Array.from.apply(Array, arguments);
}; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
}; // --- Utilities ---

var array_createArray = function createArray(length, fillFn) {
  var mapFn = isFunction(fillFn) ? fillFn : function () {
    return fillFn;
  };
  return Array.apply(null, {
    length: length
  }).map(mapFn);
};
var flatten = function flatten(array) {
  return array.reduce(function (result, item) {
    return concat(result, item);
  }, []);
};
var flattenDeep = function flattenDeep(array) {
  return array.reduce(function (result, item) {
    return concat(result, Array.isArray(item) ? flattenDeep(item) : item);
  }, []);
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/config.js
var NAME = 'BvConfig';
var PROP_NAME = '$bvConfig';
var DEFAULT_BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl'];
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/object.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // --- Static ---

var object_assign = function assign() {
  return Object.assign.apply(Object, arguments);
};
var create = function create(proto, optionalProps) {
  return Object.create(proto, optionalProps);
};
var defineProperties = function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
};
var defineProperty = function defineProperty(obj, prop, descriptor) {
  return Object.defineProperty(obj, prop, descriptor);
};
var freeze = function freeze(obj) {
  return Object.freeze(obj);
};
var getOwnPropertyNames = function getOwnPropertyNames(obj) {
  return Object.getOwnPropertyNames(obj);
};
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(obj, prop) {
  return Object.getOwnPropertyDescriptor(obj, prop);
};
var getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  return Object.getOwnPropertySymbols(obj);
};
var getPrototypeOf = function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
};
var is = function is(value1, value2) {
  return Object.is(value1, value2);
};
var isFrozen = function isFrozen(obj) {
  return Object.isFrozen(obj);
};
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

var object_hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
var object_toString = function toString(obj) {
  return Object.prototype.toString.call(obj);
}; // --- Utilities ---
// Shallow copy an object

var clone = function clone(obj) {
  return _objectSpread({}, obj);
}; // Return a shallow copy of object with the specified properties only
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var pick = function pick(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) !== -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Return a shallow copy of object with the specified properties omitted
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Merges two object deeply together
// See: https://gist.github.com/Salakar/1d7137de9cb8b704e48a

var object_mergeDeep = function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key];
        }

        mergeDeep(target[key], source[key]);
      } else {
        object_assign(target, _defineProperty({}, key, source[key]));
      }
    });
  }

  return target;
}; // Returns a shallow copy of the object with keys in sorted order

var sortKeys = function sortKeys(obj) {
  return keys(obj).sort().reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Convenience method to create a read-only descriptor

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/clone-deep.js
function clone_deep_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function clone_deep_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { clone_deep_ownKeys(Object(source), true).forEach(function (key) { clone_deep_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { clone_deep_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function clone_deep_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var clone_deep_cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if (isArray(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if (isPlainObject(obj)) {
    return keys(obj).reduce(function (result, key) {
      return clone_deep_objectSpread(clone_deep_objectSpread({}, result), {}, clone_deep_defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/memoize.js

var memoize_memoize = function memoize(fn) {
  var cache = create(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/config.js



 // --- Constants ---

var VueProto = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype; // --- Getter methods ---
// All methods return a deep clone (immutable) copy of the config value,
// to prevent mutation of the user config object
// Get the current config

var config_getConfig = function getConfig() {
  var bvConfig = VueProto[PROP_NAME];
  return bvConfig ? bvConfig.getConfig() : {};
}; // Method to grab a config value based on a dotted/array notation key

var config_getConfigValue = function getConfigValue(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var bvConfig = VueProto[PROP_NAME];
  return bvConfig ? bvConfig.getConfigValue(key, defaultValue) : clone_deep_cloneDeep(defaultValue);
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(key) {
  var propKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Return the particular config value for key if specified,
  // otherwise we return the full config (or an empty object if not found)
  return propKey ? config_getConfigValue("".concat(key, ".").concat(propKey), defaultValue) : config_getConfigValue(key, {});
}; // Get all breakpoint names

var config_getBreakpoints = function getBreakpoints() {
  return config_getConfigValue('breakpoints', DEFAULT_BREAKPOINT);
}; // Private method for caching breakpoint names

var _getBreakpointsCached = memoize_memoize(function () {
  return config_getBreakpoints();
}); // Get all breakpoint names (cached)


var config_getBreakpointsCached = function getBreakpointsCached() {
  return clone_deep_cloneDeep(_getBreakpointsCached());
}; // Get breakpoints with the smallest breakpoint set as ''
// Useful for components that create breakpoint specific props

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = config_getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Get breakpoints with the smallest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

var getBreakpointsUpCached = memoize_memoize(function () {
  var breakpoints = config_getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Get breakpoints with the largest breakpoint set as ''

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = config_getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Get breakpoints with the largest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

/* istanbul ignore next: we don't use this method anywhere, yet */

var getBreakpointsDownCached = function getBreakpointsDownCached() {
  var breakpoints = config_getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/number.js
// Number utilities
// Converts a value (string, number, etc.) to an integer number
// Assumes radix base 10
var toInteger = function toInteger(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}; // Converts a value (string, number, etc.) to a number

var toFloat = function toFloat(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var float = parseFloat(value);
  return isNaN(float) ? defaultValue : float;
}; // Converts a value (string, number, etc.) to a string
// representation with `precision` digits after the decimal
// Returns the string 'NaN' if the value cannot be converted

var toFixed = function toFixed(val, precision) {
  return toFloat(val).toFixed(toInteger(precision, 0));
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/string.js
// String utilities

 // --- Utilities ---
// Converts PascalCase or camelCase to kebab-case

var string_kebabCase = function kebabCase(str) {
  return str.replace(RX_HYPHENATE, '-$1').toLowerCase();
}; // Converts a kebab-case or camelCase string to PascalCase

var string_pascalCase = function pascalCase(str) {
  str = string_kebabCase(str).replace(RX_UN_KEBAB, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Converts a string, including strings in camelCase or snake_case, into Start Case
// It keeps original single quote and hyphen in the word
// https://github.com/UrbanCompass/to-start-case

var string_startCase = function startCase(str) {
  return str.replace(RX_UNDERSCORE, ' ').replace(RX_LOWER_UPPER, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(RX_START_SPACE_WORD, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}; // Lowercases the first letter of a string and returns a new string

var string_lowerFirst = function lowerFirst(str) {
  str = isString(str) ? str.trim() : String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
}; // Uppercases the first letter of a string and returns a new string

var string_upperFirst = function upperFirst(str) {
  str = isString(str) ? str.trim() : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Escape characters to be used in building a regular expression

var string_escapeRegExp = function escapeRegExp(str) {
  return str.replace(RX_REGEXP_REPLACE, '\\$&');
}; // Convert a value to a string that can be rendered
// `undefined`/`null` will be converted to `''`
// Plain objects and arrays will be JSON stringified

var string_toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return isUndefinedOrNull(val) ? '' : isArray(val) || isPlainObject(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
}; // Remove leading white space from a string

var string_trimLeft = function trimLeft(str) {
  return string_toString(str).replace(RX_TRIM_LEFT, '');
}; // Remove Trailing white space from a string

var string_trimRight = function trimRight(str) {
  return string_toString(str).replace(RX_TRIM_RIGHT, '');
}; // Remove leading and trailing white space from a string

var trim = function trim(str) {
  return string_toString(str).trim();
}; // Lower case a string

var lowerCase = function lowerCase(str) {
  return string_toString(str).toLowerCase();
}; // Upper case a string

var upperCase = function upperCase(str) {
  return string_toString(str).toUpperCase();
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/dom.js





 // --- Constants ---

var ELEMENT_PROTO = Element.prototype;
var TABABLE_SELECTOR = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(function (s) {
  return "".concat(s, ":not(:disabled):not([disabled])");
}).join(', '); // --- Normalization utils ---
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = ELEMENT_PROTO.matches || ELEMENT_PROTO.msMatchesSelector || ELEMENT_PROTO.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = ELEMENT_PROTO.closest || function (sel) {
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!isNull(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

/* istanbul ignore next: JSDOM always returns the first option */

var requestAF = WINDOW.requestAnimationFrame || WINDOW.webkitRequestAnimationFrame || WINDOW.mozRequestAnimationFrame || WINDOW.msRequestAnimationFrame || WINDOW.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
};
var MutationObs = WINDOW.MutationObserver || WINDOW.WebKitMutationObserver || WINDOW.MozMutationObserver || null; // --- Utils ---
// Remove a node from DOM

var removeNode = function removeNode(el) {
  return el && el.parentNode && el.parentNode.removeChild(el);
}; // Determine if an element is an HTML element

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Get the currently active HTML element

var dom_getActiveElement = function getActiveElement() {
  var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var activeElement = DOCUMENT.activeElement;
  return activeElement && !excludes.some(function (el) {
    return el === activeElement;
  }) ? activeElement : null;
}; // Returns `true` if a tag's name equals `name`

var dom_isTag = function isTag(tag, name) {
  return string_toString(tag).toLowerCase() === string_toString(name).toLowerCase();
}; // Determine if an HTML element is the currently active element

var isActiveElement = function isActiveElement(el) {
  return isElement(el) && el === dom_getActiveElement();
}; // Determine if an HTML element is visible - Faster than CSS check

var dom_isVisible = function isVisible(el) {
  if (!isElement(el) || !el.parentNode || !dom_contains(DOCUMENT.body, el)) {
    // Note this can fail for shadow dom elements since they
    // are not a direct descendant of document.body
    return false;
  }

  if (getStyle(el, 'display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasAttr(el, 'disabled') || hasClass(el, 'disabled');
}; // Cause/wait-for an element to reflow its content (adjusting its height/width)

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found

var dom_selectAll = function selectAll(selector, root) {
  return from((isElement(root) ? root : DOCUMENT).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var dom_select = function select(selector, root) {
  return (isElement(root) ? root : DOCUMENT).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  return isElement(el) ? matchesEl.call(el, selector) : false;
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var dom_contains = function contains(parent, child) {
  return parent && isFunction(parent.contains) ? parent.contains(child) : false;
}; // Get an element given an ID

var dom_getById = function getById(id) {
  return DOCUMENT.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element

var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
}; // Remove an attribute from an element

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found

var hasAttr = function hasAttr(el, attr) {
  return attr && isElement(el) ? el.hasAttribute(attr) : null;
}; // Set an style property on an element

var setStyle = function setStyle(el, prop, value) {
  if (prop && isElement(el)) {
    el.style[prop] = value;
  }
}; // Remove an style property from an element

var removeStyle = function removeStyle(el, prop) {
  if (prop && isElement(el)) {
    el.style[prop] = '';
  }
}; // Get an style property value from an element
// Returns `null` if not found

var getStyle = function getStyle(el, prop) {
  return prop && isElement(el) ? el.style[prop] || null : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element

/* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */

var dom_getCS = function getCS(el) {
  var getComputedStyle = WINDOW.getComputedStyle;
  return getComputedStyle && isElement(el) ? getComputedStyle(el) : {};
}; // Returns a `Selection` object representing the range of text selected
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var dom_getSel = function getSel() {
  var getSelection = WINDOW.getSelection;
  return getSelection ? WINDOW.getSelection() : null;
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to its offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position

var dom_position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = dom_getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && dom_getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = dom_getCS(offsetParent);
      parentOffset.top += toFloat(offsetParentStyles.borderTopWidth, 0);
      parentOffset.left += toFloat(offsetParentStyles.borderLeftWidth, 0);
    }
  }

  return {
    top: _offset.top - parentOffset.top - toFloat(elStyles.marginTop, 0),
    left: _offset.left - parentOffset.left - toFloat(elStyles.marginLeft, 0)
  };
}; // Find all tabable elements in the given element
// Assumes users have not used `tabindex` > `0` on elements

var getTabables = function getTabables() {
  var rootEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return dom_selectAll(TABABLE_SELECTOR, rootEl).filter(dom_isVisible).filter(function (el) {
    return el.tabIndex > -1 && !el.disabled;
  });
}; // Attempt to focus an element, and return `true` if successful

var attemptFocus = function attemptFocus(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    el.focus(options);
  } catch (_unused) {}

  return isActiveElement(el);
}; // Attempt to blur an element, and return `true` if successful

var attemptBlur = function attemptBlur(el) {
  try {
    el.blur();
  } catch (_unused2) {}

  return !isActiveElement(el);
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/events.js




 // --- Utils ---
// Normalize event options based on support of passive option
// Exported only for testing purposes

var events_parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (HAS_PASSIVE_EVENT_SUPPORT) {
    return isObject(options) ? options : {
      capture: !!options || false
    };
  } else {
    // Need to translate to actual Boolean value
    return !!(isObject(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, eventName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler, events_parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, eventName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler, events_parseEventOptions(options));
  }
}; // Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method

var eventOnOff = function eventOnOff(on) {
  var method = on ? eventOn : eventOff;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  method.apply(void 0, args);
}; // Utility method to prevent the default event handling and propagation

var stopEvent = function stopEvent(event) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
      _ref$propagation = _ref.propagation,
      propagation = _ref$propagation === void 0 ? true : _ref$propagation,
      _ref$immediatePropaga = _ref.immediatePropagation,
      immediatePropagation = _ref$immediatePropaga === void 0 ? false : _ref$immediatePropaga;

  if (preventDefault) {
    event.preventDefault();
  }

  if (propagation) {
    event.stopPropagation();
  }

  if (immediatePropagation) {
    event.stopImmediatePropagation();
  }
}; // Helper method to convert a component/directive name to a base event name
// `getBaseEventName('BNavigationItem')` => 'navigation-item'
// `getBaseEventName('BVToggle')` => 'toggle'

var events_getBaseEventName = function getBaseEventName(value) {
  return string_kebabCase(value.replace(RX_BV_PREFIX, ''));
}; // Get a root event name by component/directive and event name
// `getBaseEventName('BModal', 'show')` => 'bv::modal::show'


var events_getRootEventName = function getRootEventName(name, eventName) {
  return [ROOT_EVENT_NAME_PREFIX, events_getBaseEventName(name), eventName].join(ROOT_EVENT_NAME_SEPARATOR);
}; // Get a root action event name by component/directive and action name
// `getRootActionEventName('BModal', 'show')` => 'bv::show::modal'

var events_getRootActionEventName = function getRootActionEventName(name, actionName) {
  return [ROOT_EVENT_NAME_PREFIX, actionName, events_getBaseEventName(name)].join(ROOT_EVENT_NAME_SEPARATOR);
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/identity.js
var identity = function identity(x) {
  return x;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/get.js



/**
 * Get property defined by dot/array notation in string, returns undefined if not found
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @return {*}
 */

var get_getRaw = function getRaw(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Handle array of path values
  path = isArray(path) ? path.join('.') : path; // If no path or no object passed

  if (!path || !isObject(obj)) {
    return defaultValue;
  } // Handle edge case where user has dot(s) in top-level item field key
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  if (path in obj) {
    return obj[path];
  } // Handle string array notation (numeric indices only)


  path = String(path).replace(RX_ARRAY_NOTATION, '.$1');
  var steps = path.split('.').filter(identity); // Handle case where someone passes a string of only dots

  if (steps.length === 0) {
    return defaultValue;
  } // Traverse path in object to find result
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  return steps.every(function (step) {
    return isObject(obj) && step in obj && !isUndefinedOrNull(obj = obj[step]);
  }) ? obj : isNull(obj) ? null : defaultValue;
};
/**
 * Get property defined by dot/array notation in string.
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @param {*} defaultValue (optional)
 * @return {*}
 */

var get_get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var value = get_getRaw(obj, path);
  return isUndefinedOrNull(value) ? defaultValue : value;
};
// EXTERNAL MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/env.js
var env = __webpack_require__("b9b4");

// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/warn.js


/**
 * Log a warning message to the console with BootstrapVue formatting
 * @param {string} message
 */

var warn_warn = function warn(message)
/* istanbul ignore next */
{
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!Object(env["a" /* getNoWarn */])()) {
    console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warn_warnNotClient = function warnNotClient(source) {
  /* istanbul ignore else */
  if (IS_BROWSER) {
    return false;
  } else {
    warn_warn("".concat(source, ": Can not be called during SSR."));
    return true;
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warn_warnNoPromiseSupport = function warnNoPromiseSupport(source) {
  /* istanbul ignore else */
  if (HAS_PROMISE_SUPPORT) {
    return false;
  } else {
    warn_warn("".concat(source, ": Requires Promise support."));
    return true;
  }
};
/**
 * Warn when no MutationObserver support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warn_warnNoMutationObserverSupport = function warnNoMutationObserverSupport(source) {
  /* istanbul ignore else */
  if (HAS_MUTATION_OBSERVER_SUPPORT) {
    return false;
  } else {
    warn_warn("".concat(source, ": Requires MutationObserver support."));
    return true;
  }
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/config-set.js
function config_set_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







 // Config manager class

var config_set_BvConfig = /*#__PURE__*/function () {
  function BvConfig() {
    config_set_classCallCheck(this, BvConfig);

    this.$_config = {};
  } // Method to merge in user config parameters


  _createClass(BvConfig, [{
    key: "setConfig",
    value: function setConfig() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /* istanbul ignore next */
      if (!isPlainObject(config)) {
        return;
      }

      var configKeys = getOwnPropertyNames(config);
      configKeys.forEach(function (key) {
        /* istanbul ignore next */
        var subConfig = config[key];

        if (key === 'breakpoints') {
          /* istanbul ignore if */
          if (!isArray(subConfig) || subConfig.length < 2 || subConfig.some(function (b) {
            return !isString(b) || b.length === 0;
          })) {
            warn_warn('"breakpoints" must be an array of at least 2 breakpoint names', NAME);
          } else {
            _this.$_config[key] = clone_deep_cloneDeep(subConfig);
          }
        } else if (isPlainObject(subConfig)) {
          // Component prop defaults
          _this.$_config[key] = getOwnPropertyNames(subConfig).reduce(function (config, prop) {
            if (!isUndefined(subConfig[prop])) {
              config[prop] = clone_deep_cloneDeep(subConfig[prop]);
            }

            return config;
          }, _this.$_config[key] || {});
        }
      });
    } // Clear the config

  }, {
    key: "resetConfig",
    value: function resetConfig() {
      this.$_config = {};
    } // Returns a deep copy of the user config

  }, {
    key: "getConfig",
    value: function getConfig() {
      return clone_deep_cloneDeep(this.$_config);
    } // Returns a deep copy of the config value

  }, {
    key: "getConfigValue",
    value: function getConfigValue(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return clone_deep_cloneDeep(get_getRaw(this.$_config, key, defaultValue));
    }
  }]);

  return BvConfig;
}(); // Method for applying a global config


var config_set_setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Vue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : external_commonjs_vue_commonjs2_vue_root_Vue_default.a;
  // Ensure we have a `$bvConfig` Object on the Vue prototype
  // We set on Vue and OurVue just in case consumer has not set an alias of `vue`
  Vue.prototype[PROP_NAME] = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype[PROP_NAME] = Vue.prototype[PROP_NAME] || external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype[PROP_NAME] || new config_set_BvConfig(); // Apply the config values

  Vue.prototype[PROP_NAME].setConfig(config);
}; // Method for resetting the user config
// Exported for testing purposes only

var config_set_resetConfig = function resetConfig() {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype[PROP_NAME] && external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype[PROP_NAME].resetConfig) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype[PROP_NAME].resetConfig();
  }
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/plugins.js
function plugins_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function plugins_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { plugins_ownKeys(Object(source), true).forEach(function (key) { plugins_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { plugins_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function plugins_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Checks if there are multiple instances of Vue, and warns (once) about possible issues.
 * @param {object} Vue
 */

var checkMultipleVue = function () {
  var checkMultipleVueWarned = false;
  var MULTIPLE_VUE_WARNING = ['Multiple instances of Vue detected!', 'You may need to set up an alias for Vue in your bundler config.', 'See: https://bootstrap-vue.org/docs#using-module-bundlers'].join('\n');
  return function (Vue) {
    /* istanbul ignore next */
    if (!checkMultipleVueWarned && external_commonjs_vue_commonjs2_vue_root_Vue_default.a !== Vue && !IS_JSDOM) {
      warn_warn(MULTIPLE_VUE_WARNING);
    }

    checkMultipleVueWarned = true;
  };
}();
/**
 * Plugin install factory function.
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */

var plugins_installFactory = function installFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      components = _ref.components,
      directives = _ref.directives,
      plugins = _ref.plugins;

  var install = function install(Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (install.installed) {
      /* istanbul ignore next */
      return;
    }

    install.installed = true;
    checkMultipleVue(Vue);
    config_set_setConfig(config, Vue);
    registerComponents(Vue, components);
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };

  install.installed = false;
  return install;
};
/**
 * Plugin install factory function (no plugin config option).
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */

var installFactoryNoConfig = function installFactoryNoConfig() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      components = _ref2.components,
      directives = _ref2.directives,
      plugins = _ref2.plugins;

  var install = function install(Vue) {
    if (install.installed) {
      /* istanbul ignore next */
      return;
    }

    install.installed = true;
    checkMultipleVue(Vue);
    registerComponents(Vue, components);
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };

  install.installed = false;
  return install;
};
/**
 * Plugin object factory function.
 * @param {object} { components, directives, plugins }
 * @returns {object} plugin install object
 */

var pluginFactory = function pluginFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return plugins_objectSpread(plugins_objectSpread({}, extend), {}, {
    install: plugins_installFactory(options)
  });
};
/**
 * Plugin object factory function (no config option).
 * @param {object} { components, directives, plugins }
 * @returns {object} plugin install object
 */

var pluginFactoryNoConfig = function pluginFactoryNoConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return plugins_objectSpread(plugins_objectSpread({}, extend), {}, {
    install: installFactoryNoConfig(options)
  });
};
/**
 * Load a group of plugins.
 * @param {object} Vue
 * @param {object} Plugin definitions
 */

var registerPlugins = function registerPlugins(Vue) {
  var plugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var plugin in plugins) {
    if (plugin && plugins[plugin]) {
      Vue.use(plugins[plugin]);
    }
  }
};
/**
 * Load a component.
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */

var registerComponent = function registerComponent(Vue, name, def) {
  if (Vue && name && def) {
    Vue.component(name, def);
  }
};
/**
 * Load a group of components.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */

var registerComponents = function registerComponents(Vue) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var component in components) {
    registerComponent(Vue, component, components[component]);
  }
};
/**
 * Load a directive.
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */

var registerDirective = function registerDirective(Vue, name, def) {
  if (Vue && name && def) {
    // Ensure that any leading V is removed from the
    // name, as Vue adds it automatically
    Vue.directive(name.replace(/^VB/, 'B'), def);
  }
};
/**
 * Load a group of directives.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */

var registerDirectives = function registerDirectives(Vue) {
  var directives = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var directive in directives) {
    registerDirective(Vue, directive, directives[directive]);
  }
};
/**
 * Install plugin if window.Vue available
 * @param {object} Plugin definition
 */

var plugins_vueUse = function vueUse(VuePlugin) {
  /* istanbul ignore next */
  if (HAS_WINDOW_SUPPORT && window.Vue) {
    window.Vue.use(VuePlugin);
  }
  /* istanbul ignore next */


  if (HAS_WINDOW_SUPPORT && VuePlugin.NAME) {
    window[VuePlugin.NAME] = VuePlugin;
  }
};
// EXTERNAL MODULE: ./node_modules/wbuutilities/node_modules/portal-vue/dist/portal-vue.common.js
var portal_vue_common = __webpack_require__("25fe");

// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/vue-functional-data-merge/dist/lib.esm.js
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function lib_esm_a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map

// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/vue.js

 // --- Constants ---

var COMPONENT_UID_KEY = '_uid';

// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/props.js
// General types
var PROP_TYPE_ANY = undefined;
var PROP_TYPE_ARRAY = Array;
var PROP_TYPE_BOOLEAN = Boolean;
var PROP_TYPE_DATE = Date;
var PROP_TYPE_FUNCTION = Function;
var PROP_TYPE_NUMBER = Number;
var PROP_TYPE_OBJECT = Object;
var PROP_TYPE_REG_EXP = RegExp;
var PROP_TYPE_STRING = String; // Multiple types

var PROP_TYPE_ARRAY_FUNCTION = [PROP_TYPE_ARRAY, PROP_TYPE_FUNCTION];
var PROP_TYPE_ARRAY_OBJECT = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT];
var PROP_TYPE_ARRAY_OBJECT_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_ARRAY_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_NUMBER = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER];
var PROP_TYPE_BOOLEAN_NUMBER_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_STRING];
var PROP_TYPE_DATE_STRING = [PROP_TYPE_DATE, PROP_TYPE_STRING];
var PROP_TYPE_FUNCTION_STRING = [PROP_TYPE_FUNCTION, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_OBJECT_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_OBJECT_FUNCTION = [PROP_TYPE_OBJECT, PROP_TYPE_FUNCTION];
var PROP_TYPE_OBJECT_STRING = [PROP_TYPE_OBJECT, PROP_TYPE_STRING];
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/slots.js
var SLOT_NAME_ADD_BUTTON_TEXT = 'add-button-text';
var SLOT_NAME_APPEND = 'append';
var SLOT_NAME_ASIDE = 'aside';
var SLOT_NAME_BADGE = 'badge';
var SLOT_NAME_BOTTOM_ROW = 'bottom-row';
var SLOT_NAME_BUTTON_CONTENT = 'button-content';
var SLOT_NAME_CUSTOM_FOOT = 'custom-foot';
var SLOT_NAME_DECREMENT = 'decrement';
var SLOT_NAME_DEFAULT = 'default';
var SLOT_NAME_DESCRIPTION = 'description';
var SLOT_NAME_DISMISS = 'dismiss';
var SLOT_NAME_DROP_PLACEHOLDER = 'drop-placeholder';
var SLOT_NAME_ELLIPSIS_TEXT = 'ellipsis-text';
var SLOT_NAME_EMPTY = 'empty';
var SLOT_NAME_EMPTYFILTERED = 'emptyfiltered';
var SLOT_NAME_FILE_NAME = 'file-name';
var SLOT_NAME_FIRST = 'first';
var SLOT_NAME_FIRST_TEXT = 'first-text';
var SLOT_NAME_FOOTER = 'footer';
var SLOT_NAME_HEADER = 'header';
var SLOT_NAME_HEADER_CLOSE = 'header-close';
var SLOT_NAME_ICON_CLEAR = 'icon-clear';
var SLOT_NAME_ICON_EMPTY = 'icon-empty';
var SLOT_NAME_ICON_FULL = 'icon-full';
var SLOT_NAME_ICON_HALF = 'icon-half';
var SLOT_NAME_IMG = 'img';
var SLOT_NAME_INCREMENT = 'increment';
var SLOT_NAME_INVALID_FEEDBACK = 'invalid-feedback';
var SLOT_NAME_LABEL = 'label';
var SLOT_NAME_LAST_TEXT = 'last-text';
var SLOT_NAME_LEAD = 'lead';
var SLOT_NAME_LOADING = 'loading';
var SLOT_NAME_MODAL_BACKDROP = 'modal-backdrop';
var SLOT_NAME_MODAL_CANCEL = 'modal-cancel';
var SLOT_NAME_MODAL_FOOTER = 'modal-footer';
var SLOT_NAME_MODAL_HEADER = 'modal-header';
var SLOT_NAME_MODAL_HEADER_CLOSE = 'modal-header-close';
var SLOT_NAME_MODAL_OK = 'modal-ok';
var SLOT_NAME_MODAL_TITLE = 'modal-title';
var SLOT_NAME_NAV_NEXT_DECADE = 'nav-next-decade';
var SLOT_NAME_NAV_NEXT_MONTH = 'nav-next-month';
var SLOT_NAME_NAV_NEXT_YEAR = 'nav-next-year';
var SLOT_NAME_NAV_PEV_DECADE = 'nav-prev-decade';
var SLOT_NAME_NAV_PEV_MONTH = 'nav-prev-month';
var SLOT_NAME_NAV_PEV_YEAR = 'nav-prev-year';
var SLOT_NAME_NAV_THIS_MONTH = 'nav-this-month';
var SLOT_NAME_NEXT_TEXT = 'next-text';
var SLOT_NAME_OVERLAY = 'overlay';
var SLOT_NAME_PAGE = 'page';
var SLOT_NAME_PLACEHOLDER = 'placeholder';
var SLOT_NAME_PREPEND = 'prepend';
var SLOT_NAME_PREV_TEXT = 'prev-text';
var SLOT_NAME_ROW_DETAILS = 'row-details';
var SLOT_NAME_TABLE_BUSY = 'table-busy';
var SLOT_NAME_TABLE_CAPTION = 'table-caption';
var SLOT_NAME_TABLE_COLGROUP = 'table-colgroup';
var SLOT_NAME_TABS_END = 'tabs-end';
var SLOT_NAME_TABS_START = 'tabs-start';
var SLOT_NAME_TEXT = 'text';
var SLOT_NAME_THEAD_TOP = 'thead-top';
var SLOT_NAME_TITLE = 'title';
var SLOT_NAME_TOAST_TITLE = 'toast-title';
var SLOT_NAME_TOP_ROW = 'top-row';
var SLOT_NAME_VALID_FEEDBACK = 'valid-feedback';
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/bv-event.class.js
function bv_event_class_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bv_event_class_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bv_event_class_createClass(Constructor, protoProps, staticProps) { if (protoProps) bv_event_class_defineProperties(Constructor.prototype, protoProps); if (staticProps) bv_event_class_defineProperties(Constructor, staticProps); return Constructor; }


var bv_event_class_BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    bv_event_class_classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    object_assign(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    defineProperties(this, {
      type: readonlyDescriptor(),
      cancelable: readonlyDescriptor(),
      nativeEvent: readonlyDescriptor(),
      target: readonlyDescriptor(),
      relatedTarget: readonlyDescriptor(),
      vueTarget: readonlyDescriptor(),
      componentId: readonlyDescriptor()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    defineProperty(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  bv_event_class_createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}();
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/math.js
// Math utilty functions
var mathMin = Math.min;
var mathMax = Math.max;
var mathAbs = Math.abs;
var mathCeil = Math.ceil;
var mathFloor = Math.floor;
var mathPow = Math.pow;
var mathRound = Math.round;
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/props.js
function props_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function props_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { props_ownKeys(Object(source), true).forEach(function (key) { props_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { props_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function props_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Prefix a property

var props_prefixPropName = function prefixPropName(prefix, value) {
  return prefix + string_upperFirst(value);
}; // Remove a prefix from a property

var props_unprefixPropName = function unprefixPropName(prefix, value) {
  return string_lowerFirst(value.replace(prefix, ''));
}; // Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)
// Use data last parameters to allow for currying

var props_suffixPropName = function suffixPropName(suffix, value) {
  return value + (suffix ? string_upperFirst(suffix) : '');
}; // Generates a prop object

var props_makeProp = function makeProp() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PROP_TYPE_ANY;
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var requiredOrValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var validator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var required = requiredOrValidator === true;
  validator = required ? validator : requiredOrValidator;
  return props_objectSpread(props_objectSpread(props_objectSpread({}, type ? {
    type: type
  } : {}), required ? {
    required: required
  } : isUndefined(value) ? {} : {
    default: isObject(value) ? function () {
      return value;
    } : value
  }), isUndefined(validator) ? {} : {
    validator: validator
  });
}; // Copies props from one array/object to a new array/object
// Prop values are also cloned as new references to prevent possible
// mutation of original prop object values
// Optionally accepts a function to transform the prop name

var props_copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

  if (isArray(props)) {
    return props.map(transformFn);
  }

  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    if (object_hasOwnProperty(props, prop)) {
      // If the prop value is an object, do a shallow clone
      // to prevent potential mutations to the original object
      copied[transformFn(prop)] = isObject(props[prop]) ? clone(props[prop]) : props[prop];
    }
  }

  return copied;
}; // Given an array of properties or an object of property keys,
// plucks all the values off the target object, returning a new object
// that has props that reference the original prop values

var props_pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return (isArray(keysToPluck) ? keysToPluck.slice() : keys(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
}; // Make a prop object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var props_makePropConfigurable = function makePropConfigurable(prop, key, componentKey) {
  return props_objectSpread(props_objectSpread({}, clone_deep_cloneDeep(prop)), {}, {
    default: function bvConfigurablePropDefault() {
      var value = getComponentConfig(componentKey, key, prop.default);
      return isFunction(value) ? value() : value;
    }
  });
}; // Make a props object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var props_makePropsConfigurable = function makePropsConfigurable(props, componentKey) {
  return keys(props).reduce(function (result, key) {
    return props_objectSpread(props_objectSpread({}, result), {}, props_defineProperty({}, key, props_makePropConfigurable(props[key], key, componentKey)));
  }, {});
}; // Get function name we use in `makePropConfigurable()`
// for the prop default value override to compare
// against in `hasPropFunction()`

var configurablePropDefaultFnName = props_makePropConfigurable({}, '', '').default.name; // Detect wether the given value is currently a function
// and isn't the props default function

var props_hasPropFunction = function hasPropFunction(fn) {
  return isFunction(fn) && fn.name !== configurablePropDefaultFnName;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/model.js
function model_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var model_makeModelMixin = function makeModelMixin(prop) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? PROP_TYPE_ANY : _ref$type,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? undefined : _ref$defaultValue,
      _ref$validator = _ref.validator,
      validator = _ref$validator === void 0 ? undefined : _ref$validator,
      _ref$event = _ref.event,
      event = _ref$event === void 0 ? EVENT_NAME_INPUT : _ref$event;

  var props = model_defineProperty({}, prop, props_makeProp(type, defaultValue, validator)); // @vue/component


  var mixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    model: {
      prop: prop,
      event: event
    },
    props: props
  });
  return {
    mixin: mixin,
    props: props,
    prop: prop,
    event: event
  };
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/router.js





var ANCHOR_TAG = 'a'; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var router_encode = function encode(str) {
  return encodeURIComponent(string_toString(str)).replace(RX_ENCODE_REVERSE, encodeReserveReplacer).replace(RX_ENCODED_COMMA, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var router_stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!isPlainObject(obj)) {
    return '';
  }

  var query = keys(obj).map(function (key) {
    var value = obj[key];

    if (isUndefined(value)) {
      return '';
    } else if (isNull(value)) {
      return router_encode(key);
    } else if (isArray(value)) {
      return value.reduce(function (results, value2) {
        if (isNull(value2)) {
          results.push(router_encode(key));
        } else if (!isUndefined(value2)) {
          // Faster than string interpolation
          results.push(router_encode(key) + '=' + router_encode(value2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return router_encode(key) + '=' + router_encode(value);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var router_parseQuery = function parseQuery(query) {
  var parsed = {};
  query = string_toString(query).trim().replace(RX_QUERY_START, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(RX_PLUS, ' ').split('=');
    var key = decode(parts.shift());
    var value = parts.length > 0 ? decode(parts.join('=')) : null;

    if (isUndefined(parsed[key])) {
      parsed[key] = value;
    } else if (isArray(parsed[key])) {
      parsed[key].push(value);
    } else {
      parsed[key] = [parsed[key], value];
    }
  });
  return parsed;
};
var router_isLink = function isLink(props) {
  return !!(props.href || props.to);
};
var router_isRouterLink = function isRouterLink(tag) {
  return !!(tag && !dom_isTag(tag, 'a'));
};
var computeTag = function computeTag(_ref, thisOrParent) {
  var to = _ref.to,
      disabled = _ref.disabled,
      routerComponentName = _ref.routerComponentName;
  var hasRouter = !!thisOrParent.$router;

  if (!hasRouter || hasRouter && (disabled || !to)) {
    return ANCHOR_TAG;
  } // TODO:
  //   Check registered components for existence of user supplied router link component name
  //   We would need to check PascalCase, kebab-case, and camelCase versions of name:
  //   const name = routerComponentName
  //   const names = [name, PascalCase(name), KebabCase(name), CamelCase(name)]
  //   exists = names.some(name => !!thisOrParent.$options.components[name])
  //   And may want to cache the result for performance or we just let the render fail
  //   if the component is not registered


  return routerComponentName || (thisOrParent.$nuxt ? 'nuxt-link' : 'router-link');
};
var router_computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  return target === '_blank' && isNull(rel) ? 'noopener' : rel || null;
};
var router_computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // Return `href` when explicitly provided
  if (href) {
    return href;
  } // We've checked for `$router` in `computeTag()`, so `isRouterLink()` indicates a live router
  // When deferring to Vue Router's `<router-link>`, don't use the `href` attribute at all
  // We return `null`, and then remove `href` from the attributes passed to `<router-link>`


  if (router_isRouterLink(tag)) {
    return null;
  } // Fallback to `to` prop (if `to` is a string)


  if (isString(to)) {
    return to || toFallback;
  } // Fallback to `to.path' + `to.query` + `to.hash` prop (if `to` is an object)


  if (isPlainObject(to) && (to.path || to.query || to.hash)) {
    var path = string_toString(to.path);
    var query = router_stringifyQueryObj(to.query);
    var hash = string_toString(to.hash);
    hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
    return "".concat(path).concat(query).concat(hash) || toFallback;
  } // If nothing is provided return the fallback


  return fallback;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/loose-equal.js

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = loose_equal_looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var loose_equal_looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = keys(a).length;
    var bKeysCount = keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = object_hasOwnProperty(a, key);
      var bHasKey = object_hasOwnProperty(b, key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/cache.js
function cache_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var cache_isEmpty = function isEmpty(value) {
  return !value || keys(value).length === 0;
};

var cache_makePropWatcher = function makePropWatcher(propName) {
  return {
    handler: function handler(newValue, oldValue) {
      if (loose_equal_looseEqual(newValue, oldValue)) {
        return;
      }

      if (cache_isEmpty(newValue) || cache_isEmpty(oldValue)) {
        this[propName] = clone_deep_cloneDeep(newValue);
        return;
      }

      for (var key in oldValue) {
        if (!object_hasOwnProperty(newValue, key)) {
          this.$delete(this.$data[propName], key);
        }
      }

      for (var _key in newValue) {
        this.$set(this.$data[propName], _key, newValue[_key]);
      }
    }
  };
};
var cache_makePropCacheMixin = function makePropCacheMixin(propName, proxyPropName) {
  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    data: function data() {
      return cache_defineProperty({}, proxyPropName, clone_deep_cloneDeep(this[propName]));
    },
    watch: cache_defineProperty({}, propName, cache_makePropWatcher(proxyPropName))
  });
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/attrs.js

var attrsMixin = cache_makePropCacheMixin('$attrs', 'bvAttrs');
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/id.js
// SSR safe client-side ID attribute generation
// ID's can only be generated client-side, after mount
// `this._uid` is not synched between server and client


 // --- Props ---

var id_props = {
  id: props_makeProp(PROP_TYPE_STRING)
}; // --- Mixin ---
// @vue/component

var idMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  props: id_props,
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID
      // Reacts to changes in both `.id` and `.localId_` and regenerates a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method
      // but benefits from Vue's computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // `mounted()` only occurs client-side
    this.$nextTick(function () {
      // Update DOM with auto-generated ID after mount
      // to prevent SSR hydration errors
      _this.localId_ = "__BVID__".concat(_this[COMPONENT_UID_KEY]);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/listen-on-root.js

 // @vue/component

var listenOnRootMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  methods: {
    /**
     * Safely register event listeners on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback
     *
     * When registering a `$root` listener, it also registers a listener on
     * the component's `beforeDestroy()` hook to automatically remove the
     * event listener from the `$root` instance
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      var _this = this;

      this.$root.$on(event, callback);
      this.$on(HOOK_EVENT_NAME_BEFORE_DESTROY, function () {
        _this.$root.$off(event, callback);
      });
    },

    /**
     * Safely register a `$once()` event listener on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRootOnce: function listenOnRootOnce(event, callback) {
      var _this2 = this;

      this.$root.$once(event, callback);
      this.$on(HOOK_EVENT_NAME_BEFORE_DESTROY, function () {
        _this2.$root.$off(event, callback);
      });
    },

    /**
     * Convenience method for calling `vm.$emit()` on `vm.$root`
     *
     * @param {string} event
     * @param {*} args
     */
    emitOnRoot: function emitOnRoot(event) {
      var _this$$root;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args));
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/normalize-slot.js


 // Note for functional components:
// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var normalize_slot_hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = concat(names).filter(identity); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var normalize_slot_normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = concat(names).filter(identity);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return isFunction(slot) ? slot(scope) : slot;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/normalize-slot.js



 // @vue/component

var normalizeSlotMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  methods: {
    // Returns `true` if the either a `$scopedSlot` or `$slot` exists with the specified name
    // `name` can be a string name or an array of names
    hasNormalizedSlot: function hasNormalizedSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SLOT_NAME_DEFAULT;
      var scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$scopedSlots;
      var slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$slots;
      return normalize_slot_hasNormalizedSlot(name, scopedSlots, slots);
    },
    // Returns an array of rendered VNodes if slot found, otherwise `undefined`
    // `name` can be a string name or an array of names
    normalizeSlot: function normalizeSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SLOT_NAME_DEFAULT;
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$scopedSlots;
      var slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.$slots;

      var vNodes = normalize_slot_normalizeSlot(name, scope, scopedSlots, slots);

      return vNodes ? concat(vNodes) : vNodes;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/get-scope-id.js
// This method returns a component's scoped style attribute name: `data-v-xxxxxxx`
// The `_scopeId` options property is added by vue-loader when using scoped styles
// and will be `undefined` if no scoped styles are in use
var getScopeId = function getScopeId(vm) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return vm ? vm.$options._scopeId || defaultValue : defaultValue;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/scoped-style.js
function scoped_style_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @vue/component

var scopedStyleMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  computed: {
    scopedStyleAttrs: function scopedStyleAttrs() {
      var scopeId = getScopeId(this.$parent);
      return scopeId ? scoped_style_defineProperty({}, scopeId, '') : {};
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/button/button-close.js
function button_close_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // --- Props ---

var button_close_props = props_makePropsConfigurable({
  ariaLabel: props_makeProp(PROP_TYPE_STRING, 'Close'),
  content: props_makeProp(PROP_TYPE_STRING, '&times;'),
  disabled: props_makeProp(PROP_TYPE_BOOLEAN, false),
  textVariant: props_makeProp(PROP_TYPE_STRING)
}, NAME_BUTTON_CLOSE); // --- Main component ---
// @vue/component

var BButtonClose = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_BUTTON_CLOSE,
  functional: true,
  props: button_close_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var componentData = {
      staticClass: 'close',
      class: button_close_defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(event) {
          // Ensure click on button HTML content is also disabled

          /* istanbul ignore if: bug in JSDOM still emits click on inner element */
          if (props.disabled && isEvent(event)) {
            stopEvent(event);
          }
        }
      }
    }; // Careful not to override the default slot with innerHTML

    if (!normalize_slot_hasNormalizedSlot(SLOT_NAME_DEFAULT, $scopedSlots, $slots)) {
      componentData.domProps = {
        innerHTML: props.content
      };
    }

    return h('button', lib_esm_a(data, componentData), normalize_slot_normalizeSlot(SLOT_NAME_DEFAULT, {}, $scopedSlots, $slots));
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/listeners.js

var listenersMixin = cache_makePropCacheMixin('$listeners', 'bvListeners');
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/link/link.js
function link_toConsumableArray(arr) { return link_arrayWithoutHoles(arr) || link_iterableToArray(arr) || link_unsupportedIterableToArray(arr) || link_nonIterableSpread(); }

function link_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function link_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return link_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return link_arrayLikeToArray(o, minLen); }

function link_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function link_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return link_arrayLikeToArray(arr); }

function link_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { link_ownKeys(Object(source), true).forEach(function (key) { link_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // --- Constants ---

var ROOT_EVENT_NAME_CLICKED = events_getRootEventName(NAME_LINK, 'clicked'); // --- Props ---
// `<router-link>` specific props

var routerLinkProps = {
  activeClass: props_makeProp(PROP_TYPE_STRING),
  append: props_makeProp(PROP_TYPE_BOOLEAN, false),
  event: props_makeProp(PROP_TYPE_ARRAY_STRING, EVENT_NAME_CLICK),
  exact: props_makeProp(PROP_TYPE_BOOLEAN, false),
  exactActiveClass: props_makeProp(PROP_TYPE_STRING),
  replace: props_makeProp(PROP_TYPE_BOOLEAN, false),
  routerTag: props_makeProp(PROP_TYPE_STRING, 'a'),
  to: props_makeProp(PROP_TYPE_OBJECT_STRING)
}; // `<nuxt-link>` specific props

var nuxtLinkProps = {
  noPrefetch: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // Must be `null` to fall back to the value defined in the
  // `nuxt.config.js` configuration file for `router.prefetchLinks`
  // We convert `null` to `undefined`, so that Nuxt.js will use the
  // compiled default
  // Vue treats `undefined` as default of `false` for Boolean props,
  // so we must set it as `null` here to be a true tri-state prop
  prefetch: props_makeProp(PROP_TYPE_BOOLEAN, null)
}; // All `<b-link>` props

var link_props = props_makePropsConfigurable(sortKeys(link_objectSpread(link_objectSpread(link_objectSpread({}, nuxtLinkProps), routerLinkProps), {}, {
  active: props_makeProp(PROP_TYPE_BOOLEAN, false),
  disabled: props_makeProp(PROP_TYPE_BOOLEAN, false),
  href: props_makeProp(PROP_TYPE_STRING),
  // Must be `null` if no value provided
  rel: props_makeProp(PROP_TYPE_STRING, null),
  // To support 3rd party router links based on `<router-link>` (i.e. `g-link` for Gridsome)
  // Default is to auto choose between `<router-link>` and `<nuxt-link>`
  // Gridsome doesn't provide a mechanism to auto detect and has caveats
  // such as not supporting FQDN URLs or hash only URLs
  routerComponentName: props_makeProp(PROP_TYPE_STRING),
  target: props_makeProp(PROP_TYPE_STRING, '_self')
})), NAME_LINK); // --- Main component ---
// @vue/component

var BLink = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_LINK,
  // Mixin order is important!
  mixins: [attrsMixin, listenersMixin, listenOnRootMixin, normalizeSlotMixin],
  inheritAttrs: false,
  props: link_props,
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          disabled = this.disabled,
          routerComponentName = this.routerComponentName;
      return computeTag({
        to: to,
        disabled: disabled,
        routerComponentName: routerComponentName
      }, this);
    },
    isRouterLink: function isRouterLink() {
      return router_isRouterLink(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var target = this.target,
          rel = this.rel;
      return router_computeRel({
        target: target,
        rel: rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          href = this.href;
      return router_computeHref({
        to: to,
        href: href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      var prefetch = this.prefetch;
      return this.isRouterLink ? link_objectSpread(link_objectSpread({}, props_pluckProps(link_objectSpread(link_objectSpread({}, routerLinkProps), nuxtLinkProps), this)), {}, {
        // Coerce `prefetch` value `null` to be `undefined`
        prefetch: isBoolean(prefetch) ? prefetch : undefined,
        // Pass `router-tag` as `tag` prop
        tag: this.routerTag
      }) : {};
    },
    computedAttrs: function computedAttrs() {
      var bvAttrs = this.bvAttrs,
          href = this.computedHref,
          rel = this.computedRel,
          disabled = this.disabled,
          target = this.target,
          routerTag = this.routerTag,
          isRouterLink = this.isRouterLink;
      return link_objectSpread(link_objectSpread(link_objectSpread(link_objectSpread({}, bvAttrs), href ? {
        href: href
      } : {}), isRouterLink && !dom_isTag(routerTag, 'a') ? {} : {
        rel: rel,
        target: target
      }), {}, {
        tabindex: disabled ? '-1' : isUndefined(bvAttrs.tabindex) ? null : bvAttrs.tabindex,
        'aria-disabled': disabled ? 'true' : null
      });
    },
    computedListeners: function computedListeners() {
      return link_objectSpread(link_objectSpread({}, this.bvListeners), {}, {
        // We want to overwrite any click handler since our callback
        // will invoke the user supplied handler(s) if `!this.disabled`
        click: this.onClick
      });
    }
  },
  methods: {
    onClick: function onClick(event) {
      var _arguments = arguments;
      var eventIsEvent = isEvent(event);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.bvListeners.click;

      if (eventIsEvent && this.disabled) {
        // Stop event from bubbling up
        // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing its thing
        stopEvent(event, {
          immediatePropagation: true
        });
      } else {
        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink && event.currentTarget.__vue__) {
          // Router links do not emit instance `click` events, so we
          // add in an `$emit('click', event)` on its Vue instance
          event.currentTarget.__vue__.$emit(EVENT_NAME_CLICK, event);
        } // Call the suppliedHandler(s), if any provided


        concat(suppliedHandler).filter(function (h) {
          return isFunction(h);
        }).forEach(function (handler) {
          handler.apply(void 0, link_toConsumableArray(_arguments));
        }); // Emit the global `$root` click event

        this.emitOnRoot(ROOT_EVENT_NAME_CLICKED, event); // TODO: Remove deprecated 'clicked::link' event with next major release

        this.emitOnRoot('clicked::link', event);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (eventIsEvent && !isRouterLink && this.computedHref === '#') {
        stopEvent(event, {
          propagation: false
        });
      }
    },
    focus: function focus() {
      attemptFocus(this.$el);
    },
    blur: function blur() {
      attemptBlur(this.$el);
    }
  },
  render: function render(h) {
    var active = this.active,
        disabled = this.disabled;
    return h(this.computedTag, link_defineProperty({
      class: {
        active: active,
        disabled: disabled
      },
      attrs: this.computedAttrs,
      props: this.computedProps
    }, this.isRouterLink ? 'nativeOn' : 'on', this.computedListeners), this.normalizeSlot());
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/transition/bv-transition.js
function bv_transition_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function bv_transition_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bv_transition_ownKeys(Object(source), true).forEach(function (key) { bv_transition_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bv_transition_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bv_transition_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generic Bootstrap v4 fade (no-fade) transition component
//
// Assumes that `show` class is not required when
// the transition has finished the enter transition
// (show and fade classes are only applied during transition)




 // --- Constants ---

var NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: ''
};

var FADE_PROPS = bv_transition_objectSpread(bv_transition_objectSpread({}, NO_FADE_PROPS), {}, {
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade'
}); // --- Props ---


var bv_transition_props = {
  // Has no effect if `trans-props` provided
  appear: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // Can be overridden by user supplied `trans-props`
  mode: props_makeProp(PROP_TYPE_STRING),
  // Only applicable to the built in transition
  // Has no effect if `trans-props` provided
  noFade: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // For user supplied transitions (if needed)
  transProps: props_makeProp(PROP_TYPE_OBJECT)
}; // --- Main component ---
// @vue/component

var BVTransition = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_TRANSITION,
  functional: true,
  props: bv_transition_props,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;
    var transProps = props.transProps;

    if (!isPlainObject(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;

      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = bv_transition_objectSpread(bv_transition_objectSpread({}, transProps), {}, {
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        });
      }
    }

    transProps = bv_transition_objectSpread(bv_transition_objectSpread({
      mode: props.mode
    }, transProps), {}, {
      // We always need `css` true
      css: true
    });
    return h('transition', // Any transition event listeners will get merged here
    lib_esm_a(data, {
      props: transProps
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/toast/toaster.js










 // --- Helper components ---
// @vue/component

var DefaultTransition = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  mixins: [normalizeSlotMixin],
  data: function data() {
    return {
      // Transition classes base name
      name: 'b-toaster'
    };
  },
  methods: {
    onAfterEnter: function onAfterEnter(el) {
      var _this = this;

      // Work around a Vue.js bug where `*-enter-to` class is not removed
      // See: https://github.com/vuejs/vue/pull/7901
      // The `*-move` class is also stuck on elements that moved,
      // but there are no JavaScript hooks to handle after move
      // See: https://github.com/vuejs/vue/pull/7906
      requestAF(function () {
        removeClass(el, "".concat(_this.name, "-enter-to"));
      });
    }
  },
  render: function render(h) {
    return h('transition-group', {
      props: {
        tag: 'div',
        name: this.name
      },
      on: {
        afterEnter: this.onAfterEnter
      }
    }, this.normalizeSlot());
  }
}); // --- Props ---

var toaster_props = props_makePropsConfigurable({
  // Allowed: 'true' or 'false' or `null`
  ariaAtomic: props_makeProp(PROP_TYPE_STRING),
  ariaLive: props_makeProp(PROP_TYPE_STRING),
  name: props_makeProp(PROP_TYPE_STRING, undefined, true),
  // Required
  // Aria role
  role: props_makeProp(PROP_TYPE_STRING)
}, NAME_TOASTER); // --- Main component ---
// @vue/component

var BToaster = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_TOASTER,
  mixins: [listenOnRootMixin],
  props: toaster_props,
  data: function data() {
    return {
      // We don't render on SSR or if a an existing target found
      doRender: false,
      dead: false,
      // Toaster names cannot change once created
      staticName: this.name
    };
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    var name = this.name;
    this.staticName = name;
    /* istanbul ignore if */

    if (portal_vue_common["Wormhole"].hasTarget(name)) {
      warn_warn("A \"<portal-target>\" with name \"".concat(name, "\" already exists in the document."), NAME_TOASTER);
      this.dead = true;
    } else {
      this.doRender = true;
      this.$once(HOOK_EVENT_NAME_BEFORE_DESTROY, function () {
        // Let toasts made with `this.$bvToast.toast()` know that this toaster
        // is being destroyed and should should also destroy/hide themselves
        _this2.emitOnRoot(events_getRootEventName(NAME_TOASTER, EVENT_NAME_DESTROYED), name);
      });
    }
  },
  destroyed: function destroyed() {
    // Remove from DOM if needed
    var $el = this.$el;
    /* istanbul ignore next: difficult to test */

    if ($el && $el.parentNode) {
      $el.parentNode.removeChild($el);
    }
  },
  render: function render(h) {
    var $toaster = h('div', {
      class: ['d-none', {
        'b-dead-toaster': this.dead
      }]
    });

    if (this.doRender) {
      var $target = h(portal_vue_common["PortalTarget"], {
        staticClass: 'b-toaster-slot',
        props: {
          name: this.staticName,
          multiple: true,
          tag: 'div',
          slim: false,
          // transition: this.transition || DefaultTransition
          transition: DefaultTransition
        }
      });
      $toaster = h('div', {
        staticClass: 'b-toaster',
        class: [this.staticName],
        attrs: {
          id: this.staticName,
          // Fallback to null to make sure attribute doesn't exist
          role: this.role || null,
          'aria-live': this.ariaLive,
          'aria-atomic': this.ariaAtomic
        }
      }, [$target]);
    }

    return $toaster;
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/toast/toast.js
var _watch;

function toast_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function toast_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { toast_ownKeys(Object(source), true).forEach(function (key) { toast_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { toast_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function toast_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























 // --- Constants ---

var _makeModelMixin = model_makeModelMixin('visible', {
  type: PROP_TYPE_BOOLEAN,
  defaultValue: false,
  event: EVENT_NAME_CHANGE
}),
    modelMixin = _makeModelMixin.mixin,
    modelProps = _makeModelMixin.props,
    MODEL_PROP_NAME = _makeModelMixin.prop,
    MODEL_EVENT_NAME = _makeModelMixin.event;

var MIN_DURATION = 1000; // --- Props ---

var linkProps = pick(link_props, ['href', 'to']);
var toast_props = props_makePropsConfigurable(sortKeys(toast_objectSpread(toast_objectSpread(toast_objectSpread(toast_objectSpread({}, id_props), modelProps), linkProps), {}, {
  appendToast: props_makeProp(PROP_TYPE_BOOLEAN, false),
  autoHideDelay: props_makeProp(PROP_TYPE_NUMBER_STRING, 5000),
  bodyClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  headerClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  // Switches role to 'status' and aria-live to 'polite'
  isStatus: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noAutoHide: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noCloseButton: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noFade: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noHoverPause: props_makeProp(PROP_TYPE_BOOLEAN, false),
  solid: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // Render the toast in place, rather than in a portal-target
  static: props_makeProp(PROP_TYPE_BOOLEAN, false),
  title: props_makeProp(PROP_TYPE_STRING),
  toastClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  toaster: props_makeProp(PROP_TYPE_STRING, 'b-toaster-top-right'),
  variant: props_makeProp(PROP_TYPE_STRING)
})), NAME_TOAST); // --- Main component ---
// @vue/component

var BToast = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_TOAST,
  mixins: [attrsMixin, idMixin, modelMixin, listenOnRootMixin, normalizeSlotMixin, scopedStyleMixin],
  inheritAttrs: false,
  props: toast_props,
  data: function data() {
    return {
      isMounted: false,
      doRender: false,
      localShow: false,
      isTransitioning: false,
      isHiding: false,
      order: 0,
      dismissStarted: 0,
      resumeDismiss: 0
    };
  },
  computed: {
    toastClasses: function toastClasses() {
      var appendToast = this.appendToast,
          variant = this.variant;
      return toast_defineProperty({
        'b-toast-solid': this.solid,
        'b-toast-append': appendToast,
        'b-toast-prepend': !appendToast
      }, "b-toast-".concat(variant), variant);
    },
    slotScope: function slotScope() {
      var hide = this.hide;
      return {
        hide: hide
      };
    },
    computedDuration: function computedDuration() {
      // Minimum supported duration is 1 second
      return mathMax(toInteger(this.autoHideDelay, 0), MIN_DURATION);
    },
    computedToaster: function computedToaster() {
      return String(this.toaster);
    },
    transitionHandlers: function transitionHandlers() {
      return {
        beforeEnter: this.onBeforeEnter,
        afterEnter: this.onAfterEnter,
        beforeLeave: this.onBeforeLeave,
        afterLeave: this.onAfterLeave
      };
    },
    computedAttrs: function computedAttrs() {
      return toast_objectSpread(toast_objectSpread({}, this.bvAttrs), {}, {
        id: this.safeId(),
        tabindex: '0'
      });
    }
  },
  watch: (_watch = {}, toast_defineProperty(_watch, MODEL_PROP_NAME, function (newValue) {
    this[newValue ? 'show' : 'hide']();
  }), toast_defineProperty(_watch, "localShow", function localShow(newValue) {
    if (newValue !== this[MODEL_PROP_NAME]) {
      this.$emit(MODEL_EVENT_NAME, newValue);
    }
  }), toast_defineProperty(_watch, "toaster", function toaster() {
    // If toaster target changed, make sure toaster exists
    this.$nextTick(this.ensureToaster);
  }), toast_defineProperty(_watch, "static", function _static(newValue) {
    // If static changes to true, and the toast is showing,
    // ensure the toaster target exists
    if (newValue && this.localShow) {
      this.ensureToaster();
    }
  }), _watch),
  created: function created() {
    // Create private non-reactive props
    this.$_dismissTimer = null;
  },
  mounted: function mounted() {
    var _this = this;

    this.isMounted = true;
    this.$nextTick(function () {
      if (_this[MODEL_PROP_NAME]) {
        requestAF(function () {
          _this.show();
        });
      }
    }); // Listen for global $root show events

    this.listenOnRoot(events_getRootActionEventName(NAME_TOAST, EVENT_NAME_SHOW), function (id) {
      if (id === _this.safeId()) {
        _this.show();
      }
    }); // Listen for global $root hide events

    this.listenOnRoot(events_getRootActionEventName(NAME_TOAST, EVENT_NAME_HIDE), function (id) {
      if (!id || id === _this.safeId()) {
        _this.hide();
      }
    }); // Make sure we hide when toaster is destroyed

    /* istanbul ignore next: difficult to test */

    this.listenOnRoot(events_getRootEventName(NAME_TOASTER, EVENT_NAME_DESTROYED), function (toaster) {
      /* istanbul ignore next */
      if (toaster === _this.computedToaster) {
        _this.hide();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearDismissTimer();
  },
  methods: {
    show: function show() {
      var _this2 = this;

      if (!this.localShow) {
        this.ensureToaster();
        var showEvt = this.buildEvent(EVENT_NAME_SHOW);
        this.emitEvent(showEvt);
        this.dismissStarted = this.resumeDismiss = 0;
        this.order = Date.now() * (this.appendToast ? 1 : -1);
        this.isHiding = false;
        this.doRender = true;
        this.$nextTick(function () {
          // We show the toast after we have rendered the portal and b-toast wrapper
          // so that screen readers will properly announce the toast
          requestAF(function () {
            _this2.localShow = true;
          });
        });
      }
    },
    hide: function hide() {
      var _this3 = this;

      if (this.localShow) {
        var hideEvt = this.buildEvent(EVENT_NAME_HIDE);
        this.emitEvent(hideEvt);
        this.setHoverHandler(false);
        this.dismissStarted = this.resumeDismiss = 0;
        this.clearDismissTimer();
        this.isHiding = true;
        requestAF(function () {
          _this3.localShow = false;
        });
      }
    },
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new bv_event_class_BvEvent(type, toast_objectSpread(toast_objectSpread({
        cancelable: false,
        target: this.$el || null,
        relatedTarget: null
      }, options), {}, {
        vueTarget: this,
        componentId: this.safeId()
      }));
    },
    emitEvent: function emitEvent(bvEvent) {
      var type = bvEvent.type;
      this.emitOnRoot(events_getRootEventName(NAME_TOAST, type), bvEvent);
      this.$emit(type, bvEvent);
    },
    ensureToaster: function ensureToaster() {
      if (this.static) {
        return;
      }

      var computedToaster = this.computedToaster;

      if (!portal_vue_common["Wormhole"].hasTarget(computedToaster)) {
        var div = document.createElement('div');
        document.body.appendChild(div);
        var toaster = new BToaster({
          parent: this.$root,
          propsData: {
            name: computedToaster
          }
        });
        toaster.$mount(div);
      }
    },
    startDismissTimer: function startDismissTimer() {
      this.clearDismissTimer();

      if (!this.noAutoHide) {
        this.$_dismissTimer = setTimeout(this.hide, this.resumeDismiss || this.computedDuration);
        this.dismissStarted = Date.now();
        this.resumeDismiss = 0;
      }
    },
    clearDismissTimer: function clearDismissTimer() {
      clearTimeout(this.$_dismissTimer);
      this.$_dismissTimer = null;
    },
    setHoverHandler: function setHoverHandler(on) {
      var el = this.$refs['b-toast'];
      eventOnOff(on, el, 'mouseenter', this.onPause, EVENT_OPTIONS_NO_CAPTURE);
      eventOnOff(on, el, 'mouseleave', this.onUnPause, EVENT_OPTIONS_NO_CAPTURE);
    },
    onPause: function onPause() {
      // Determine time remaining, and then pause timer
      if (this.noAutoHide || this.noHoverPause || !this.$_dismissTimer || this.resumeDismiss) {
        return;
      }

      var passed = Date.now() - this.dismissStarted;

      if (passed > 0) {
        this.clearDismissTimer();
        this.resumeDismiss = mathMax(this.computedDuration - passed, MIN_DURATION);
      }
    },
    onUnPause: function onUnPause() {
      // Restart timer with max of time remaining or 1 second
      if (this.noAutoHide || this.noHoverPause || !this.resumeDismiss) {
        this.resumeDismiss = this.dismissStarted = 0;
        return;
      }

      this.startDismissTimer();
    },
    onLinkClick: function onLinkClick() {
      var _this4 = this;

      // We delay the close to allow time for the
      // browser to process the link click
      this.$nextTick(function () {
        requestAF(function () {
          _this4.hide();
        });
      });
    },
    onBeforeEnter: function onBeforeEnter() {
      this.isTransitioning = true;
    },
    onAfterEnter: function onAfterEnter() {
      this.isTransitioning = false;
      var hiddenEvt = this.buildEvent(EVENT_NAME_SHOWN);
      this.emitEvent(hiddenEvt);
      this.startDismissTimer();
      this.setHoverHandler(true);
    },
    onBeforeLeave: function onBeforeLeave() {
      this.isTransitioning = true;
    },
    onAfterLeave: function onAfterLeave() {
      this.isTransitioning = false;
      this.order = 0;
      this.resumeDismiss = this.dismissStarted = 0;
      var hiddenEvt = this.buildEvent(EVENT_NAME_HIDDEN);
      this.emitEvent(hiddenEvt);
      this.doRender = false;
    },
    // Render helper for generating the toast
    makeToast: function makeToast(h) {
      var _this5 = this;

      var title = this.title,
          slotScope = this.slotScope;
      var link = router_isLink(this);
      var $headerContent = [];
      var $title = this.normalizeSlot(SLOT_NAME_TOAST_TITLE, slotScope);

      if ($title) {
        $headerContent.push($title);
      } else if (title) {
        $headerContent.push(h('strong', {
          staticClass: 'mr-2'
        }, title));
      }

      if (!this.noCloseButton) {
        $headerContent.push(h(BButtonClose, {
          staticClass: 'ml-auto mb-1',
          on: {
            click: function click() {
              _this5.hide();
            }
          }
        }));
      }

      var $header = h();

      if ($headerContent.length > 0) {
        $header = h('header', {
          staticClass: 'toast-header',
          class: this.headerClass
        }, $headerContent);
      }

      var $body = h(link ? BLink : 'div', {
        staticClass: 'toast-body',
        class: this.bodyClass,
        props: link ? props_pluckProps(linkProps, this) : {},
        on: link ? {
          click: this.onLinkClick
        } : {}
      }, this.normalizeSlot(SLOT_NAME_DEFAULT, slotScope));
      return h('div', {
        staticClass: 'toast',
        class: this.toastClass,
        attrs: this.computedAttrs,
        key: "toast-".concat(this[COMPONENT_UID_KEY]),
        ref: 'toast'
      }, [$header, $body]);
    }
  },
  render: function render(h) {
    if (!this.doRender || !this.isMounted) {
      return h();
    }

    var order = this.order,
        isStatic = this.static,
        isHiding = this.isHiding,
        isStatus = this.isStatus;
    var name = "b-toast-".concat(this[COMPONENT_UID_KEY]);
    var $toast = h('div', {
      staticClass: 'b-toast',
      class: this.toastClasses,
      attrs: toast_objectSpread(toast_objectSpread({}, isStatic ? {} : this.scopedStyleAttrs), {}, {
        id: this.safeId('_toast_outer'),
        role: isHiding ? null : isStatus ? 'status' : 'alert',
        'aria-live': isHiding ? null : isStatus ? 'polite' : 'assertive',
        'aria-atomic': isHiding ? null : 'true'
      }),
      key: name,
      ref: 'b-toast'
    }, [h(BVTransition, {
      props: {
        noFade: this.noFade
      },
      on: this.transitionHandlers
    }, [this.localShow ? this.makeToast(h) : h()])]);
    return h(portal_vue_common["Portal"], {
      props: {
        name: name,
        to: this.computedToaster,
        order: order,
        slim: true,
        disabled: isStatic
      }
    }, [$toast]);
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/toast/helpers/bv-toast.js
function bv_toast_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bv_toast_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bv_toast_createClass(Constructor, protoProps, staticProps) { if (protoProps) bv_toast_defineProperties(Constructor.prototype, protoProps); if (staticProps) bv_toast_defineProperties(Constructor, staticProps); return Constructor; }

function bv_toast_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function bv_toast_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bv_toast_ownKeys(Object(source), true).forEach(function (key) { bv_toast_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bv_toast_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bv_toast_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function bv_toast_toConsumableArray(arr) { return bv_toast_arrayWithoutHoles(arr) || bv_toast_iterableToArray(arr) || bv_toast_unsupportedIterableToArray(arr) || bv_toast_nonIterableSpread(); }

function bv_toast_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function bv_toast_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return bv_toast_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bv_toast_arrayLikeToArray(o, minLen); }

function bv_toast_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function bv_toast_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return bv_toast_arrayLikeToArray(arr); }

function bv_toast_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Plugin for adding `$bvToast` property to all Vue instances
 */










 // --- Constants ---

var bv_toast_PROP_NAME = '$bvToast';
var PROP_NAME_PRIV = '_bv__toast'; // Base toast props that are allowed
// Some may be ignored or overridden on some message boxes
// Prop ID is allowed, but really only should be used for testing
// We need to add it in explicitly as it comes from the `idMixin`

var BASE_PROPS = ['id'].concat(bv_toast_toConsumableArray(keys(omit(toast_props, ['static', 'visible'])))); // Map prop names to toast slot names

var propsToSlots = {
  toastContent: 'default',
  title: 'toast-title'
}; // --- Helper methods ---
// Method to filter only recognized props that are not undefined

var bv_toast_filterOptions = function filterOptions(options) {
  return BASE_PROPS.reduce(function (memo, key) {
    if (!isUndefined(options[key])) {
      memo[key] = options[key];
    }

    return memo;
  }, {});
}; // Method to install `$bvToast` VM injection


var bv_toast_plugin = function plugin(Vue) {
  // Create a private sub-component constructor that
  // extends BToast and self-destructs after hidden
  // @vue/component
  var BVToastPop = Vue.extend({
    name: NAME_TOAST_POP,
    extends: BToast,
    destroyed: function destroyed() {
      // Make sure we not in document any more
      var $el = this.$el;

      if ($el && $el.parentNode) {
        $el.parentNode.removeChild($el);
      }
    },
    mounted: function mounted() {
      var _this = this;

      // Self destruct handler
      var handleDestroy = function handleDestroy() {
        // Ensure the toast has been force hidden
        _this.localShow = false;
        _this.doRender = false;

        _this.$nextTick(function () {
          _this.$nextTick(function () {
            // In a `requestAF()` to release control back to application
            // and to allow the portal-target time to remove the content
            requestAF(function () {
              _this.$destroy();
            });
          });
        });
      }; // Self destruct if parent destroyed


      this.$parent.$once(HOOK_EVENT_NAME_DESTROYED, handleDestroy); // Self destruct after hidden

      this.$once(EVENT_NAME_HIDDEN, handleDestroy); // Self destruct when toaster is destroyed

      this.listenOnRoot(events_getRootEventName(NAME_TOASTER, EVENT_NAME_DESTROYED), function (toaster) {
        /* istanbul ignore next: hard to test */
        if (toaster === _this.toaster) {
          handleDestroy();
        }
      });
    }
  }); // Private method to generate the on-demand toast

  var makeToast = function makeToast(props, $parent) {
    if (warn_warnNotClient(bv_toast_PROP_NAME)) {
      /* istanbul ignore next */
      return;
    } // Create an instance of `BVToastPop` component


    var toast = new BVToastPop({
      // We set parent as the local VM so these toasts can emit events on the
      // app `$root`, and it ensures `BToast` is destroyed when parent is destroyed
      parent: $parent,
      propsData: bv_toast_objectSpread(bv_toast_objectSpread(bv_toast_objectSpread({}, bv_toast_filterOptions(getComponentConfig(NAME_TOAST))), omit(props, keys(propsToSlots))), {}, {
        // Props that can't be overridden
        static: false,
        visible: true
      })
    }); // Convert certain props to slots

    keys(propsToSlots).forEach(function (prop) {
      var value = props[prop];

      if (!isUndefined(value)) {
        // Can be a string, or array of VNodes
        if (prop === 'title' && isString(value)) {
          // Special case for title if it is a string, we wrap in a <strong>
          value = [$parent.$createElement('strong', {
            class: 'mr-2'
          }, value)];
        }

        toast.$slots[propsToSlots[prop]] = concat(value);
      }
    }); // Create a mount point (a DIV) and mount it (which triggers the show)

    var div = document.createElement('div');
    document.body.appendChild(div);
    toast.$mount(div);
  }; // Declare BvToast instance property class


  var BvToast = /*#__PURE__*/function () {
    function BvToast(vm) {
      bv_toast_classCallCheck(this, BvToast);

      // Assign the new properties to this instance
      object_assign(this, {
        _vm: vm,
        _root: vm.$root
      }); // Set these properties as read-only and non-enumerable

      defineProperties(this, {
        _vm: readonlyDescriptor(),
        _root: readonlyDescriptor()
      });
    } // --- Public Instance methods ---
    // Opens a user defined toast and returns immediately


    bv_toast_createClass(BvToast, [{
      key: "toast",
      value: function toast(content) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!content || warn_warnNotClient(bv_toast_PROP_NAME)) {
          /* istanbul ignore next */
          return;
        }

        makeToast(bv_toast_objectSpread(bv_toast_objectSpread({}, bv_toast_filterOptions(options)), {}, {
          toastContent: content
        }), this._vm);
      } // shows a `<b-toast>` component with the specified ID

    }, {
      key: "show",
      value: function show(id) {
        if (id) {
          this._root.$emit(events_getRootActionEventName(NAME_TOAST, EVENT_NAME_SHOW), id);
        }
      } // Hide a toast with specified ID, or if not ID all toasts

    }, {
      key: "hide",
      value: function hide() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        this._root.$emit(events_getRootActionEventName(NAME_TOAST, EVENT_NAME_HIDE), id);
      }
    }]);

    return BvToast;
  }(); // Add our instance mixin


  Vue.mixin({
    beforeCreate: function beforeCreate() {
      // Because we need access to `$root` for `$emits`, and VM for parenting,
      // we have to create a fresh instance of `BvToast` for each VM
      this[PROP_NAME_PRIV] = new BvToast(this);
    }
  }); // Define our read-only `$bvToast` instance property
  // Placed in an if just in case in HMR mode

  if (!object_hasOwnProperty(Vue.prototype, bv_toast_PROP_NAME)) {
    defineProperty(Vue.prototype, bv_toast_PROP_NAME, {
      get: function get() {
        /* istanbul ignore next */
        if (!this || !this[PROP_NAME_PRIV]) {
          warn_warn("\"".concat(bv_toast_PROP_NAME, "\" must be accessed from a Vue instance \"this\" context."), NAME_TOAST);
        }

        return this[PROP_NAME_PRIV];
      }
    });
  }
};

var BVToastPlugin = /*#__PURE__*/pluginFactory({
  plugins: {
    plugin: bv_toast_plugin
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/constants/key-codes.js
var CODE_BACKSPACE = 8;
var CODE_BREAK = 19;
var CODE_DELETE = 46;
var CODE_DOWN = 40;
var CODE_END = 35;
var CODE_ENTER = 13;
var CODE_ESC = 27;
var CODE_HOME = 36;
var CODE_LEFT = 37;
var CODE_PAGEDOWN = 34;
var CODE_PAGEUP = 33;
var CODE_RIGHT = 39;
var CODE_SPACE = 32;
var CODE_UP = 38;
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/html.js
 // Removes anything that looks like an HTML tag from the supplied string

var html_stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(RX_HTML_TAGS, '');
}; // Generate a `domProps` object for either `innerHTML`, `textContent` or an empty object

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/utils/observe-dom.js
function observe_dom_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function observe_dom_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { observe_dom_ownKeys(Object(source), true).forEach(function (key) { observe_dom_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { observe_dom_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function observe_dom_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [options={childList: true, subtree: true}] observe options
 * @see https://stackoverflow.com/questions/3219758
 */

var observe_dom_observeDom = function observeDom(el, callback, options)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle cases where we might be passed a Vue instance
  el = el ? el.$el || el : null; // Early exit when we have no element

  /* istanbul ignore next: difficult to test in JSDOM */

  if (!isElement(el)) {
    return null;
  } // Exit and throw a warning when `MutationObserver` isn't available


  if (warn_warnNoMutationObserverSupport('observeDom')) {
    return null;
  } // Define a new observer


  var obs = new MutationObs(function (mutations) {
    var changed = false; // A mutation can contain several change records, so we loop
    // through them to see what has changed
    // We break out of the loop early if any "significant" change
    // has been detected

    for (var i = 0; i < mutations.length && !changed; i++) {
      // The mutation record
      var mutation = mutations[i]; // Mutation type

      var type = mutation.type; // DOM node (could be any DOM node type - HTMLElement, Text, comment, etc.)

      var target = mutation.target; // Detect whether a change happened based on type and target

      if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
        // We ignore nodes that are not TEXT (i.e. comments, etc.)
        // as they don't change layout
        changed = true;
      } else if (type === 'attributes') {
        changed = true;
      } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
        // This includes HTMLElement and text nodes being
        // added/removed/re-arranged
        changed = true;
      }
    } // We only call the callback if a change that could affect
    // layout/size truly happened


    if (changed) {
      callback();
    }
  }); // Have the observer observe foo for changes in children, etc

  obs.observe(el, observe_dom_objectSpread({
    childList: true,
    subtree: true
  }, options)); // We return a reference to the observer so that `obs.disconnect()`
  // can be called if necessary
  // To reduce overhead when the root element is hidden

  return obs;
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/listen-on-document.js






 // --- Constants ---

var PROP = '$_bv_documentHandlers_'; // --- Mixin ---
// @vue/component

var listenOnDocumentMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  created: function created() {
    var _this = this;

    /* istanbul ignore next */
    if (!IS_BROWSER) {
      return;
    } // Declare non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of handlers
    // Prop will be defined on client only


    this[PROP] = {}; // Set up our beforeDestroy handler (client only)

    this.$once(HOOK_EVENT_NAME_BEFORE_DESTROY, function () {
      var items = _this[PROP] || {}; // Immediately delete this[PROP] to prevent the
      // listenOn/Off methods from running (which may occur
      // due to requestAnimationFrame/transition delays)

      delete _this[PROP]; // Remove all registered event handlers

      keys(items).forEach(function (eventName) {
        var handlers = items[eventName] || [];
        handlers.forEach(function (handler) {
          return eventOff(document, eventName, handler, EVENT_OPTIONS_NO_CAPTURE);
        });
      });
    });
  },
  methods: {
    listenDocument: function listenDocument(on, eventName, handler) {
      on ? this.listenOnDocument(eventName, handler) : this.listenOffDocument(eventName, handler);
    },
    listenOnDocument: function listenOnDocument(eventName, handler) {
      if (this[PROP] && isString(eventName) && isFunction(handler)) {
        this[PROP][eventName] = this[PROP][eventName] || [];

        if (!arrayIncludes(this[PROP][eventName], handler)) {
          this[PROP][eventName].push(handler);
          eventOn(document, eventName, handler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    },
    listenOffDocument: function listenOffDocument(eventName, handler) {
      if (this[PROP] && isString(eventName) && isFunction(handler)) {
        eventOff(document, eventName, handler, EVENT_OPTIONS_NO_CAPTURE);
        this[PROP][eventName] = (this[PROP][eventName] || []).filter(function (h) {
          return h !== handler;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/mixins/listen-on-window.js






 // --- Constants ---

var listen_on_window_PROP = '$_bv_windowHandlers_'; // --- Mixin ---
// @vue/component

var listenOnWindowMixin = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  beforeCreate: function beforeCreate() {
    // Declare non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of handlers
    this[listen_on_window_PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    if (IS_BROWSER) {
      var items = this[listen_on_window_PROP]; // Immediately delete this[PROP] to prevent the
      // listenOn/Off methods from running (which may occur
      // due to requestAnimationFrame delays)

      delete this[listen_on_window_PROP]; // Remove all registered event handlers

      keys(items).forEach(function (eventName) {
        var handlers = items[eventName] || [];
        handlers.forEach(function (handler) {
          return eventOff(window, eventName, handler, EVENT_OPTIONS_NO_CAPTURE);
        });
      });
    }
  },
  methods: {
    listenWindow: function listenWindow(on, eventName, handler) {
      on ? this.listenOnWindow(eventName, handler) : this.listenOffWindow(eventName, handler);
    },
    listenOnWindow: function listenOnWindow(eventName, handler) {
      if (IS_BROWSER && this[listen_on_window_PROP] && isString(eventName) && isFunction(handler)) {
        this[listen_on_window_PROP][eventName] = this[listen_on_window_PROP][eventName] || [];

        if (!arrayIncludes(this[listen_on_window_PROP][eventName], handler)) {
          this[listen_on_window_PROP][eventName].push(handler);
          eventOn(window, eventName, handler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    },
    listenOffWindow: function listenOffWindow(eventName, handler) {
      if (IS_BROWSER && this[listen_on_window_PROP] && isString(eventName) && isFunction(handler)) {
        eventOff(window, eventName, handler, EVENT_OPTIONS_NO_CAPTURE);
        this[listen_on_window_PROP][eventName] = (this[listen_on_window_PROP][eventName] || []).filter(function (h) {
          return h !== handler;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/button/button.js
function button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_ownKeys(Object(source), true).forEach(function (key) { button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // --- Props ---

var button_linkProps = omit(link_props, ['event', 'routerTag']);
delete button_linkProps.href.default;
delete button_linkProps.to.default;
var button_props = props_makePropsConfigurable(sortKeys(button_objectSpread(button_objectSpread({}, button_linkProps), {}, {
  block: props_makeProp(PROP_TYPE_BOOLEAN, false),
  disabled: props_makeProp(PROP_TYPE_BOOLEAN, false),
  pill: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // Tri-state: `true`, `false` or `null`
  // => On, off, not a toggle
  pressed: props_makeProp(PROP_TYPE_BOOLEAN, null),
  size: props_makeProp(PROP_TYPE_STRING),
  squared: props_makeProp(PROP_TYPE_BOOLEAN, false),
  tag: props_makeProp(PROP_TYPE_STRING, 'button'),
  type: props_makeProp(PROP_TYPE_STRING, 'button'),
  variant: props_makeProp(PROP_TYPE_STRING, 'secondary')
})), NAME_BUTTON); // --- Helper methods ---
// Focus handler for toggle buttons
// Needs class of 'focus' when focused

var button_handleFocus = function handleFocus(event) {
  if (event.type === 'focusin') {
    addClass(event.target, 'focus');
  } else if (event.type === 'focusout') {
    removeClass(event.target, 'focus');
  }
}; // Is the requested button a link?
// If tag prop is set to `a`, we use a <b-link> to get proper disabled handling


var button_isLink = function isLink(props) {
  return router_isLink(props) || dom_isTag(props.tag, 'a');
}; // Is the button to be a toggle button?


var button_isToggle = function isToggle(props) {
  return isBoolean(props.pressed);
}; // Is the button "really" a button?


var button_isButton = function isButton(props) {
  return !(button_isLink(props) || props.tag && !dom_isTag(props.tag, 'button'));
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !button_isLink(props) && !button_isButton(props);
}; // Compute required classes (non static classes)


var computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || 'secondary'), (_ref = {}, button_defineProperty(_ref, "btn-".concat(props.size), props.size), button_defineProperty(_ref, 'btn-block', props.block), button_defineProperty(_ref, 'rounded-pill', props.pill), button_defineProperty(_ref, 'rounded-0', props.squared && !props.pill), button_defineProperty(_ref, "disabled", props.disabled), button_defineProperty(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var button_computeLinkProps = function computeLinkProps(props) {
  return button_isLink(props) ? props_pluckProps(button_linkProps, props) : {};
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = button_isButton(props);
  var link = button_isLink(props);
  var toggle = button_isToggle(props);
  var nonStandardTag = isNonStandardTag(props);
  var hashLink = link && props.href === '#';
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStandardTag || hashLink) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA
    // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
    // Except when link has `href` of `#`
    role: nonStandardTag || hashLink ? 'button' : role,
    // We set the `aria-disabled` state for non-standard tags
    'aria-disabled': nonStandardTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // `autocomplete="off"` is needed in toggle mode to prevent some browsers
    // from remembering the previous setting when using the back button
    autocomplete: toggle ? 'off' : null,
    // `tabindex` is used when the component is not a button
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a `tabindex="0"` to non buttons or non links
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // --- Main component ---
// @vue/component


var BButton = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_BUTTON,
  functional: true,
  props: button_props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = button_isToggle(props);
    var link = button_isLink(props);
    var nonStandardTag = isNonStandardTag(props);
    var hashLink = link && props.href === '#';
    var on = {
      keydown: function keydown(event) {
        // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
        // we add a keydown handlers for CODE_SPACE/CODE_ENTER

        /* istanbul ignore next */
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }

        var keyCode = event.keyCode; // Add CODE_SPACE handler for `href="#"` and CODE_ENTER handler for non-standard tags

        if (keyCode === CODE_SPACE || keyCode === CODE_ENTER && nonStandardTag) {
          var target = event.currentTarget || event.target;
          stopEvent(event, {
            propagation: false
          });
          target.click();
        }
      },
      click: function click(event) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && isEvent(event)) {
          stopEvent(event);
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
          // `concat()` will normalize the value to an array without
          // double wrapping an array value in an array
          concat(listeners['update:pressed']).forEach(function (fn) {
            if (isFunction(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = button_handleFocus;
      on.focusout = button_handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: button_computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? BLink : props.tag, lib_esm_a(data, componentData), children);
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/transporter/transporter.js










 // --- Helper components ---
// BVTransporter/BVTransporterTarget:
//
// Single root node portaling of content, which retains parent/child hierarchy
// Unlike Portal-Vue where portaled content is no longer a descendent of its
// intended parent components
//
// Private components for use by Tooltips, Popovers and Modals
//
// Based on vue-simple-portal
// https://github.com/LinusBorg/vue-simple-portal
// Transporter target used by BVTransporter
// Supports only a single root element
// @vue/component

var BVTransporterTarget = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  // As an abstract component, it doesn't appear in the $parent chain of
  // components, which means the next parent of any component rendered inside
  // of this one will be the parent from which is was portal'd
  abstract: true,
  name: NAME_TRANSPORTER_TARGET,
  props: {
    // Even though we only support a single root element,
    // VNodes are always passed as an array
    nodes: props_makeProp(PROP_TYPE_ARRAY_FUNCTION)
  },
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  destroyed: function destroyed() {
    removeNode(this.$el);
  },
  render: function render(h) {
    var updatedNodes = this.updatedNodes;
    var $nodes = isFunction(updatedNodes) ? updatedNodes({}) : updatedNodes;
    $nodes = concat($nodes).filter(identity);

    if ($nodes && $nodes.length > 0 && !$nodes[0].text) {
      return $nodes[0];
    }
    /* istanbul ignore next */


    return h();
  }
}); // --- Props ---

var transporter_props = {
  // String: CSS selector,
  // HTMLElement: Element reference
  // Mainly needed for tooltips/popovers inside modals
  container: props_makeProp([HTMLElement, PROP_TYPE_STRING], 'body'),
  disabled: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // This should be set to match the root element type
  tag: props_makeProp(PROP_TYPE_STRING, 'div')
}; // --- Main component ---
// @vue/component

var BVTransporter = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_TRANSPORTER,
  mixins: [normalizeSlotMixin],
  props: transporter_props,
  watch: {
    disabled: {
      immediate: true,
      handler: function handler(disabled) {
        disabled ? this.unmountTarget() : this.$nextTick(this.mountTarget);
      }
    }
  },
  created: function created() {
    // Create private non-reactive props
    this.$_defaultFn = null;
    this.$_target = null;
  },
  beforeMount: function beforeMount() {
    this.mountTarget();
  },
  updated: function updated() {
    // We need to make sure that all children have completed updating
    // before rendering in the target
    // `vue-simple-portal` has the this in a `$nextTick()`,
    // while `portal-vue` doesn't
    // Just trying to see if the `$nextTick()` delay is required or not
    // Since all slots in Vue 2.6.x are always functions
    this.updateTarget();
  },
  beforeDestroy: function beforeDestroy() {
    this.unmountTarget();
    this.$_defaultFn = null;
  },
  methods: {
    // Get the element which the target should be appended to
    getContainer: function getContainer() {
      /* istanbul ignore else */
      if (IS_BROWSER) {
        var container = this.container;
        return isString(container) ? dom_select(container) : container;
      } else {
        return null;
      }
    },
    // Mount the target
    mountTarget: function mountTarget() {
      if (!this.$_target) {
        var $container = this.getContainer();

        if ($container) {
          var $el = document.createElement('div');
          $container.appendChild($el);
          this.$_target = new BVTransporterTarget({
            el: $el,
            parent: this,
            propsData: {
              // Initial nodes to be rendered
              nodes: concat(this.normalizeSlot())
            }
          });
        }
      }
    },
    // Update the content of the target
    updateTarget: function updateTarget() {
      if (IS_BROWSER && this.$_target) {
        var defaultFn = this.$scopedSlots.default;

        if (!this.disabled) {
          /* istanbul ignore else: only applicable in Vue 2.5.x */
          if (defaultFn && this.$_defaultFn !== defaultFn) {
            // We only update the target component if the scoped slot
            // function is a fresh one. The new slot syntax (since Vue 2.6)
            // can cache unchanged slot functions and we want to respect that here
            this.$_target.updatedNodes = defaultFn;
          } else if (!defaultFn) {
            // We also need to be back compatible with non-scoped default slot (i.e. 2.5.x)
            this.$_target.updatedNodes = this.$slots.default;
          }
        } // Update the scoped slot function cache


        this.$_defaultFn = defaultFn;
      }
    },
    // Unmount the target
    unmountTarget: function unmountTarget() {
      this.$_target && this.$_target.$destroy();
      this.$_target = null;
    }
  },
  render: function render(h) {
    // This component has no root element, so only a single VNode is allowed
    if (this.disabled) {
      var $nodes = concat(this.normalizeSlot()).filter(identity);

      if ($nodes.length > 0 && !$nodes[0].text) {
        return $nodes[0];
      }
    }

    return h();
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal-event.class.js
function bv_modal_event_class_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bv_modal_event_class_typeof = function _typeof(obj) { return typeof obj; }; } else { bv_modal_event_class_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bv_modal_event_class_typeof(obj); }

function bv_modal_event_class_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function bv_modal_event_class_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bv_modal_event_class_ownKeys(Object(source), true).forEach(function (key) { bv_modal_event_class_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bv_modal_event_class_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bv_modal_event_class_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function bv_modal_event_class_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bv_modal_event_class_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bv_modal_event_class_createClass(Constructor, protoProps, staticProps) { if (protoProps) bv_modal_event_class_defineProperties(Constructor.prototype, protoProps); if (staticProps) bv_modal_event_class_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = bv_modal_event_class_getPrototypeOf(object); if (object === null) break; } return object; }

function bv_modal_event_class_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) bv_modal_event_class_setPrototypeOf(subClass, superClass); }

function bv_modal_event_class_setPrototypeOf(o, p) { bv_modal_event_class_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bv_modal_event_class_setPrototypeOf(o, p); }

function bv_modal_event_class_createSuper(Derived) { var hasNativeReflectConstruct = bv_modal_event_class_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = bv_modal_event_class_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = bv_modal_event_class_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return bv_modal_event_class_possibleConstructorReturn(this, result); }; }

function bv_modal_event_class_possibleConstructorReturn(self, call) { if (call && (bv_modal_event_class_typeof(call) === "object" || typeof call === "function")) { return call; } return bv_modal_event_class_assertThisInitialized(self); }

function bv_modal_event_class_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bv_modal_event_class_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function bv_modal_event_class_getPrototypeOf(o) { bv_modal_event_class_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bv_modal_event_class_getPrototypeOf(o); }




var bv_modal_event_class_BvModalEvent = /*#__PURE__*/function (_BvEvent) {
  bv_modal_event_class_inherits(BvModalEvent, _BvEvent);

  var _super = bv_modal_event_class_createSuper(BvModalEvent);

  function BvModalEvent(type) {
    var _this;

    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    bv_modal_event_class_classCallCheck(this, BvModalEvent);

    _this = _super.call(this, type, eventInit); // Freeze our new props as readonly, but leave them enumerable

    defineProperties(bv_modal_event_class_assertThisInitialized(_this), {
      trigger: readonlyDescriptor()
    });
    return _this;
  }

  bv_modal_event_class_createClass(BvModalEvent, null, [{
    key: "Defaults",
    get: function get() {
      return bv_modal_event_class_objectSpread(bv_modal_event_class_objectSpread({}, _get(bv_modal_event_class_getPrototypeOf(BvModalEvent), "Defaults", this)), {}, {
        trigger: null
      });
    }
  }]);

  return BvModalEvent;
}(bv_event_class_BvEvent); // Named exports



// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/modal/helpers/modal-manager.js
/**
 * Private ModalManager helper
 * Handles controlling modal stacking zIndexes and body adjustments/classes
 */





 // --- Constants ---
// Default modal backdrop z-index

var DEFAULT_ZINDEX = 1040; // Selectors for padding/margin adjustments

var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
var SELECTOR_NAVBAR_TOGGLER = '.navbar-toggler'; // --- Main component ---
// @vue/component

var ModalManager = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  data: function data() {
    return {
      modals: [],
      baseZIndex: null,
      scrollbarWidth: null,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalCount: function modalCount() {
      return this.modals.length;
    },
    modalsAreOpen: function modalsAreOpen() {
      return this.modalCount > 0;
    }
  },
  watch: {
    modalCount: function modalCount(newCount, oldCount) {
      if (IS_BROWSER) {
        this.getScrollbarWidth();

        if (newCount > 0 && oldCount === 0) {
          // Transitioning to modal(s) open
          this.checkScrollbar();
          this.setScrollbar();
          addClass(document.body, 'modal-open');
        } else if (newCount === 0 && oldCount > 0) {
          // Transitioning to modal(s) closed
          this.resetScrollbar();
          removeClass(document.body, 'modal-open');
        }

        setAttr(document.body, 'data-modal-open-count', String(newCount));
      }
    },
    modals: function modals(newValue) {
      var _this = this;

      this.checkScrollbar();
      requestAF(function () {
        _this.updateModals(newValue || []);
      });
    }
  },
  methods: {
    // Public methods
    registerModal: function registerModal(modal) {
      var _this2 = this;

      // Register the modal if not already registered
      if (modal && this.modals.indexOf(modal) === -1) {
        // Add modal to modals array
        this.modals.push(modal);
        modal.$once(HOOK_EVENT_NAME_BEFORE_DESTROY, function () {
          _this2.unregisterModal(modal);
        });
      }
    },
    unregisterModal: function unregisterModal(modal) {
      var index = this.modals.indexOf(modal);

      if (index > -1) {
        // Remove modal from modals array
        this.modals.splice(index, 1); // Reset the modal's data

        if (!(modal._isBeingDestroyed || modal._isDestroyed)) {
          this.resetModal(modal);
        }
      }
    },
    getBaseZIndex: function getBaseZIndex() {
      if (isNull(this.baseZIndex) && IS_BROWSER) {
        // Create a temporary `div.modal-backdrop` to get computed z-index
        var div = document.createElement('div');
        addClass(div, 'modal-backdrop');
        addClass(div, 'd-none');
        setStyle(div, 'display', 'none');
        document.body.appendChild(div);
        this.baseZIndex = toInteger(dom_getCS(div).zIndex, DEFAULT_ZINDEX);
        document.body.removeChild(div);
      }

      return this.baseZIndex || DEFAULT_ZINDEX;
    },
    getScrollbarWidth: function getScrollbarWidth() {
      if (isNull(this.scrollbarWidth) && IS_BROWSER) {
        // Create a temporary `div.measure-scrollbar` to get computed z-index
        var div = document.createElement('div');
        addClass(div, 'modal-scrollbar-measure');
        document.body.appendChild(div);
        this.scrollbarWidth = getBCR(div).width - div.clientWidth;
        document.body.removeChild(div);
      }

      return this.scrollbarWidth || 0;
    },
    // Private methods
    updateModals: function updateModals(modals) {
      var _this3 = this;

      var baseZIndex = this.getBaseZIndex();
      var scrollbarWidth = this.getScrollbarWidth();
      modals.forEach(function (modal, index) {
        // We update data values on each modal
        modal.zIndex = baseZIndex + index;
        modal.scrollbarWidth = scrollbarWidth;
        modal.isTop = index === _this3.modals.length - 1;
        modal.isBodyOverflowing = _this3.isBodyOverflowing;
      });
    },
    resetModal: function resetModal(modal) {
      if (modal) {
        modal.zIndex = this.getBaseZIndex();
        modal.isTop = true;
        modal.isBodyOverflowing = false;
      }
    },
    checkScrollbar: function checkScrollbar() {
      // Determine if the body element is overflowing
      var _getBCR = getBCR(document.body),
          left = _getBCR.left,
          right = _getBCR.right;

      this.isBodyOverflowing = left + right < window.innerWidth;
    },
    setScrollbar: function setScrollbar() {
      var body = document.body; // Storage place to cache changes to margins and padding
      // Note: This assumes the following element types are not added to the
      // document after the modal has opened.

      body._paddingChangedForModal = body._paddingChangedForModal || [];
      body._marginChangedForModal = body._marginChangedForModal || [];

      if (this.isBodyOverflowing) {
        var scrollbarWidth = this.scrollbarWidth; // Adjust fixed content padding

        /* istanbul ignore next: difficult to test in JSDOM */

        dom_selectAll(SELECTOR_FIXED_CONTENT).forEach(function (el) {
          var actualPadding = getStyle(el, 'paddingRight') || '';
          setAttr(el, 'data-padding-right', actualPadding);
          setStyle(el, 'paddingRight', "".concat(toFloat(dom_getCS(el).paddingRight, 0) + scrollbarWidth, "px"));

          body._paddingChangedForModal.push(el);
        }); // Adjust sticky content margin

        /* istanbul ignore next: difficult to test in JSDOM */

        dom_selectAll(SELECTOR_STICKY_CONTENT).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = getStyle(el, 'marginRight') || '';
          setAttr(el, 'data-margin-right', actualMargin);
          setStyle(el, 'marginRight', "".concat(toFloat(dom_getCS(el).marginRight, 0) - scrollbarWidth, "px"));

          body._marginChangedForModal.push(el);
        }); // Adjust <b-navbar-toggler> margin

        /* istanbul ignore next: difficult to test in JSDOM */

        dom_selectAll(SELECTOR_NAVBAR_TOGGLER).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = getStyle(el, 'marginRight') || '';
          setAttr(el, 'data-margin-right', actualMargin);
          setStyle(el, 'marginRight', "".concat(toFloat(dom_getCS(el).marginRight, 0) + scrollbarWidth, "px"));

          body._marginChangedForModal.push(el);
        }); // Adjust body padding

        var actualPadding = getStyle(body, 'paddingRight') || '';
        setAttr(body, 'data-padding-right', actualPadding);
        setStyle(body, 'paddingRight', "".concat(toFloat(dom_getCS(body).paddingRight, 0) + scrollbarWidth, "px"));
      }
    },
    resetScrollbar: function resetScrollbar() {
      var body = document.body;

      if (body._paddingChangedForModal) {
        // Restore fixed content padding
        body._paddingChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if (hasAttr(el, 'data-padding-right')) {
            setStyle(el, 'paddingRight', getAttr(el, 'data-padding-right') || '');
            removeAttr(el, 'data-padding-right');
          }
        });
      }

      if (body._marginChangedForModal) {
        // Restore sticky content and navbar-toggler margin
        body._marginChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if (hasAttr(el, 'data-margin-right')) {
            setStyle(el, 'marginRight', getAttr(el, 'data-margin-right') || '');
            removeAttr(el, 'data-margin-right');
          }
        });
      }

      body._paddingChangedForModal = null;
      body._marginChangedForModal = null; // Restore body padding

      if (hasAttr(body, 'data-padding-right')) {
        setStyle(body, 'paddingRight', getAttr(body, 'data-padding-right') || '');
        removeAttr(body, 'data-padding-right');
      }
    }
  }
}); // Create and export our modal manager instance

var modalManager = new ModalManager();
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/modal/modal.js
function modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_ownKeys(Object(source), true).forEach(function (key) { modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































 // --- Constants ---

var modal_makeModelMixin = model_makeModelMixin('visible', {
  type: PROP_TYPE_BOOLEAN,
  defaultValue: false,
  event: EVENT_NAME_CHANGE
}),
    modal_modelMixin = modal_makeModelMixin.mixin,
    modal_modelProps = modal_makeModelMixin.props,
    modal_MODEL_PROP_NAME = modal_makeModelMixin.prop,
    modal_MODEL_EVENT_NAME = modal_makeModelMixin.event;

var TRIGGER_BACKDROP = 'backdrop';
var TRIGGER_ESC = 'esc';
var TRIGGER_FORCE = 'FORCE';
var TRIGGER_TOGGLE = 'toggle';
var BUTTON_CANCEL = 'cancel'; // TODO: This should be renamed to 'close'

var BUTTON_CLOSE = 'headerclose';
var BUTTON_OK = 'ok';
var BUTTONS = [BUTTON_CANCEL, BUTTON_CLOSE, BUTTON_OK]; // `ObserveDom` config to detect changes in modal content
// so that we can adjust the modal padding if needed

var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class']
}; // --- Props ---

var modal_props = props_makePropsConfigurable(sortKeys(modal_objectSpread(modal_objectSpread(modal_objectSpread({}, id_props), modal_modelProps), {}, {
  ariaLabel: props_makeProp(PROP_TYPE_STRING),
  autoFocusButton: props_makeProp(PROP_TYPE_STRING, null,
  /* istanbul ignore next */
  function (value) {
    return isUndefinedOrNull(value) || arrayIncludes(BUTTONS, value);
  }),
  bodyBgVariant: props_makeProp(PROP_TYPE_STRING),
  bodyClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  bodyTextVariant: props_makeProp(PROP_TYPE_STRING),
  busy: props_makeProp(PROP_TYPE_BOOLEAN, false),
  buttonSize: props_makeProp(PROP_TYPE_STRING),
  cancelDisabled: props_makeProp(PROP_TYPE_BOOLEAN, false),
  cancelTitle: props_makeProp(PROP_TYPE_STRING, 'Cancel'),
  cancelTitleHtml: props_makeProp(PROP_TYPE_STRING),
  cancelVariant: props_makeProp(PROP_TYPE_STRING, 'secondary'),
  centered: props_makeProp(PROP_TYPE_BOOLEAN, false),
  contentClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  dialogClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  footerBgVariant: props_makeProp(PROP_TYPE_STRING),
  footerBorderVariant: props_makeProp(PROP_TYPE_STRING),
  footerClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  footerTextVariant: props_makeProp(PROP_TYPE_STRING),
  headerBgVariant: props_makeProp(PROP_TYPE_STRING),
  headerBorderVariant: props_makeProp(PROP_TYPE_STRING),
  headerClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  headerCloseContent: props_makeProp(PROP_TYPE_STRING, '&times;'),
  headerCloseLabel: props_makeProp(PROP_TYPE_STRING, 'Close'),
  headerCloseVariant: props_makeProp(PROP_TYPE_STRING),
  headerTextVariant: props_makeProp(PROP_TYPE_STRING),
  // TODO: Rename to `noBackdrop` and deprecate `hideBackdrop`
  hideBackdrop: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noFooter` and deprecate `hideFooter`
  hideFooter: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noHeader` and deprecate `hideHeader`
  hideHeader: props_makeProp(PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noHeaderClose` and deprecate `hideHeaderClose`
  hideHeaderClose: props_makeProp(PROP_TYPE_BOOLEAN, false),
  ignoreEnforceFocusSelector: props_makeProp(PROP_TYPE_ARRAY_STRING),
  lazy: props_makeProp(PROP_TYPE_BOOLEAN, false),
  modalClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  noCloseOnBackdrop: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noCloseOnEsc: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noEnforceFocus: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noFade: props_makeProp(PROP_TYPE_BOOLEAN, false),
  noStacking: props_makeProp(PROP_TYPE_BOOLEAN, false),
  okDisabled: props_makeProp(PROP_TYPE_BOOLEAN, false),
  okOnly: props_makeProp(PROP_TYPE_BOOLEAN, false),
  okTitle: props_makeProp(PROP_TYPE_STRING, 'OK'),
  okTitleHtml: props_makeProp(PROP_TYPE_STRING),
  okVariant: props_makeProp(PROP_TYPE_STRING, 'primary'),
  // HTML Element, CSS selector string or Vue component instance
  returnFocus: props_makeProp([HTMLElement, PROP_TYPE_OBJECT, PROP_TYPE_STRING]),
  scrollable: props_makeProp(PROP_TYPE_BOOLEAN, false),
  size: props_makeProp(PROP_TYPE_STRING, 'md'),
  static: props_makeProp(PROP_TYPE_BOOLEAN, false),
  title: props_makeProp(PROP_TYPE_STRING),
  titleClass: props_makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  titleHtml: props_makeProp(PROP_TYPE_STRING),
  titleSrOnly: props_makeProp(PROP_TYPE_BOOLEAN, false),
  titleTag: props_makeProp(PROP_TYPE_STRING, 'h5')
})), NAME_MODAL); // --- Main component ---
// @vue/component

var BModal = /*#__PURE__*/external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: NAME_MODAL,
  mixins: [attrsMixin, idMixin, modal_modelMixin, listenOnDocumentMixin, listenOnRootMixin, listenOnWindowMixin, normalizeSlotMixin, scopedStyleMixin],
  inheritAttrs: false,
  props: modal_props,
  data: function data() {
    return {
      isHidden: true,
      // If modal should not be in document
      isVisible: false,
      // Controls modal visible state
      isTransitioning: false,
      // Used for style control
      isShow: false,
      // Used for style control
      isBlock: false,
      // Used for style control
      isOpening: false,
      // To signal that the modal is in the process of opening
      isClosing: false,
      // To signal that the modal is in the process of closing
      ignoreBackdropClick: false,
      // Used to signify if click out listener should ignore the click
      isModalOverflowing: false,
      // The following items are controlled by the modalManager instance
      scrollbarWidth: 0,
      zIndex: modalManager.getBaseZIndex(),
      isTop: true,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalId: function modalId() {
      return this.safeId();
    },
    modalOuterId: function modalOuterId() {
      return this.safeId('__BV_modal_outer_');
    },
    modalHeaderId: function modalHeaderId() {
      return this.safeId('__BV_modal_header_');
    },
    modalBodyId: function modalBodyId() {
      return this.safeId('__BV_modal_body_');
    },
    modalTitleId: function modalTitleId() {
      return this.safeId('__BV_modal_title_');
    },
    modalContentId: function modalContentId() {
      return this.safeId('__BV_modal_content_');
    },
    modalFooterId: function modalFooterId() {
      return this.safeId('__BV_modal_footer_');
    },
    modalBackdropId: function modalBackdropId() {
      return this.safeId('__BV_modal_backdrop_');
    },
    modalClasses: function modalClasses() {
      return [{
        fade: !this.noFade,
        show: this.isShow
      }, this.modalClass];
    },
    modalStyles: function modalStyles() {
      var sbWidth = "".concat(this.scrollbarWidth, "px");
      return {
        paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? sbWidth : '',
        paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? sbWidth : '',
        // Needed to fix issue https://github.com/bootstrap-vue/bootstrap-vue/issues/3457
        // Even though we are using v-show, we must ensure 'none' is restored in the styles
        display: this.isBlock ? 'block' : 'none'
      };
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return [(_ref = {}, modal_defineProperty(_ref, "modal-".concat(this.size), this.size), modal_defineProperty(_ref, 'modal-dialog-centered', this.centered), modal_defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return [(_ref2 = {}, modal_defineProperty(_ref2, "bg-".concat(this.headerBgVariant), this.headerBgVariant), modal_defineProperty(_ref2, "text-".concat(this.headerTextVariant), this.headerTextVariant), modal_defineProperty(_ref2, "border-".concat(this.headerBorderVariant), this.headerBorderVariant), _ref2), this.headerClass];
    },
    titleClasses: function titleClasses() {
      return [{
        'sr-only': this.titleSrOnly
      }, this.titleClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return [(_ref3 = {}, modal_defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant), modal_defineProperty(_ref3, "text-".concat(this.bodyTextVariant), this.bodyTextVariant), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return [(_ref4 = {}, modal_defineProperty(_ref4, "bg-".concat(this.footerBgVariant), this.footerBgVariant), modal_defineProperty(_ref4, "text-".concat(this.footerTextVariant), this.footerTextVariant), modal_defineProperty(_ref4, "border-".concat(this.footerBorderVariant), this.footerBorderVariant), _ref4), this.footerClass];
    },
    modalOuterStyle: function modalOuterStyle() {
      // Styles needed for proper stacking of modals
      return {
        position: 'absolute',
        zIndex: this.zIndex
      };
    },
    slotScope: function slotScope() {
      return {
        cancel: this.onCancel,
        close: this.onClose,
        hide: this.hide,
        ok: this.onOk,
        visible: this.isVisible
      };
    },
    computeIgnoreEnforceFocusSelector: function computeIgnoreEnforceFocusSelector() {
      // Normalize to an single selector with selectors separated by `,`
      return concat(this.ignoreEnforceFocusSelector).filter(identity).join(',').trim();
    },
    computedAttrs: function computedAttrs() {
      // If the parent has a scoped style attribute, and the modal
      // is portalled, add the scoped attribute to the modal wrapper
      var scopedStyleAttrs = !this.static ? this.scopedStyleAttrs : {};
      return modal_objectSpread(modal_objectSpread(modal_objectSpread({}, scopedStyleAttrs), this.bvAttrs), {}, {
        id: this.modalOuterId
      });
    },
    computedModalAttrs: function computedModalAttrs() {
      var isVisible = this.isVisible,
          ariaLabel = this.ariaLabel;
      return {
        id: this.modalId,
        role: 'dialog',
        'aria-hidden': isVisible ? null : 'true',
        'aria-modal': isVisible ? 'true' : null,
        'aria-label': ariaLabel,
        'aria-labelledby': this.hideHeader || ariaLabel || // TODO: Rename slot to `title` and deprecate `modal-title`
        !(this.hasNormalizedSlot(SLOT_NAME_MODAL_TITLE) || this.titleHtml || this.title) ? null : this.modalTitleId,
        'aria-describedby': this.modalBodyId
      };
    }
  },
  watch: modal_defineProperty({}, modal_MODEL_PROP_NAME, function (newValue, oldValue) {
    if (newValue !== oldValue) {
      this[newValue ? 'show' : 'hide']();
    }
  }),
  created: function created() {
    // Define non-reactive properties
    this.$_observer = null;
    this.$_returnFocus = this.returnFocus || null;
  },
  mounted: function mounted() {
    // Set initial z-index as queried from the DOM
    this.zIndex = modalManager.getBaseZIndex(); // Listen for events from others to either open or close ourselves
    // and listen to all modals to enable/disable enforce focus

    this.listenOnRoot(events_getRootActionEventName(NAME_MODAL, EVENT_NAME_SHOW), this.showHandler);
    this.listenOnRoot(events_getRootActionEventName(NAME_MODAL, EVENT_NAME_HIDE), this.hideHandler);
    this.listenOnRoot(events_getRootActionEventName(NAME_MODAL, EVENT_NAME_TOGGLE), this.toggleHandler); // Listen for `bv:modal::show events`, and close ourselves if the
    // opening modal not us

    this.listenOnRoot(events_getRootEventName(NAME_MODAL, EVENT_NAME_SHOW), this.modalListener); // Initially show modal?

    if (this[modal_MODEL_PROP_NAME] === true) {
      this.$nextTick(this.show);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Ensure everything is back to normal
    this.setObserver(false);

    if (this.isVisible) {
      this.isVisible = false;
      this.isShow = false;
      this.isTransitioning = false;
    }
  },
  methods: {
    setObserver: function setObserver() {
      var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$_observer && this.$_observer.disconnect();
      this.$_observer = null;

      if (on) {
        this.$_observer = observe_dom_observeDom(this.$refs.content, this.checkModalOverflow.bind(this), OBSERVER_CONFIG);
      }
    },
    // Private method to update the v-model
    updateModel: function updateModel(value) {
      if (value !== this[modal_MODEL_PROP_NAME]) {
        this.$emit(modal_MODEL_EVENT_NAME, value);
      }
    },
    // Private method to create a BvModalEvent object
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new bv_modal_event_class_BvModalEvent(type, modal_objectSpread(modal_objectSpread({
        // Default options
        cancelable: false,
        target: this.$refs.modal || this.$el || null,
        relatedTarget: null,
        trigger: null
      }, options), {}, {
        // Options that can't be overridden
        vueTarget: this,
        componentId: this.modalId
      }));
    },
    // Public method to show modal
    show: function show() {
      if (this.isVisible || this.isOpening) {
        // If already open, or in the process of opening, do nothing

        /* istanbul ignore next */
        return;
      }
      /* istanbul ignore next */


      if (this.isClosing) {
        // If we are in the process of closing, wait until hidden before re-opening

        /* istanbul ignore next */
        this.$once(EVENT_NAME_HIDDEN, this.show);
        /* istanbul ignore next */

        return;
      }

      this.isOpening = true; // Set the element to return focus to when closed

      this.$_returnFocus = this.$_returnFocus || this.getActiveElement();
      var showEvt = this.buildEvent(EVENT_NAME_SHOW, {
        cancelable: true
      });
      this.emitEvent(showEvt); // Don't show if canceled

      if (showEvt.defaultPrevented || this.isVisible) {
        this.isOpening = false; // Ensure the v-model reflects the current state

        this.updateModel(false);
        return;
      } // Show the modal


      this.doShow();
    },
    // Public method to hide modal
    hide: function hide() {
      var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!this.isVisible || this.isClosing) {
        /* istanbul ignore next */
        return;
      }

      this.isClosing = true;
      var hideEvt = this.buildEvent(EVENT_NAME_HIDE, {
        cancelable: trigger !== TRIGGER_FORCE,
        trigger: trigger || null
      }); // We emit specific event for one of the three built-in buttons

      if (trigger === BUTTON_OK) {
        this.$emit(EVENT_NAME_OK, hideEvt);
      } else if (trigger === BUTTON_CANCEL) {
        this.$emit(EVENT_NAME_CANCEL, hideEvt);
      } else if (trigger === BUTTON_CLOSE) {
        this.$emit(EVENT_NAME_CLOSE, hideEvt);
      }

      this.emitEvent(hideEvt); // Hide if not canceled

      if (hideEvt.defaultPrevented || !this.isVisible) {
        this.isClosing = false; // Ensure v-model reflects current state

        this.updateModel(true);
        return;
      } // Stop observing for content changes


      this.setObserver(false); // Trigger the hide transition

      this.isVisible = false; // Update the v-model

      this.updateModel(false);
    },
    // Public method to toggle modal visibility
    toggle: function toggle(triggerEl) {
      if (triggerEl) {
        this.$_returnFocus = triggerEl;
      }

      if (this.isVisible) {
        this.hide(TRIGGER_TOGGLE);
      } else {
        this.show();
      }
    },
    // Private method to get the current document active element
    getActiveElement: function getActiveElement() {
      // Returning focus to `document.body` may cause unwanted scrolls,
      // so we exclude setting focus on body
      var activeElement = dom_getActiveElement(IS_BROWSER ? [document.body] : []); // Preset the fallback return focus value if it is not set
      // `document.activeElement` should be the trigger element that was clicked or
      // in the case of using the v-model, which ever element has current focus
      // Will be overridden by some commands such as toggle, etc.
      // Note: On IE 11, `document.activeElement` may be `null`
      // So we test it for truthiness first
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/3206


      return activeElement && activeElement.focus ? activeElement : null;
    },
    // Private method to finish showing modal
    doShow: function doShow() {
      var _this = this;

      /* istanbul ignore next: commenting out for now until we can test stacking */
      if (modalManager.modalsAreOpen && this.noStacking) {
        // If another modal(s) is already open, wait for it(them) to close
        this.listenOnRootOnce(events_getRootEventName(NAME_MODAL, EVENT_NAME_HIDDEN), this.doShow);
        return;
      }

      modalManager.registerModal(this); // Place modal in DOM

      this.isHidden = false;
      this.$nextTick(function () {
        // We do this in `$nextTick()` to ensure the modal is in DOM first
        // before we show it
        _this.isVisible = true;
        _this.isOpening = false; // Update the v-model

        _this.updateModel(true);

        _this.$nextTick(function () {
          // Observe changes in modal content and adjust if necessary
          // In a `$nextTick()` in case modal content is lazy
          _this.setObserver(true);
        });
      });
    },
    // Transition handlers
    onBeforeEnter: function onBeforeEnter() {
      this.isTransitioning = true;
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      var _this2 = this;

      this.isBlock = true; // We add the `show` class 1 frame later
      // `requestAF()` runs the callback before the next repaint, so we need
      // two calls to guarantee the next frame has been rendered

      requestAF(function () {
        requestAF(function () {
          _this2.isShow = true;
        });
      });
    },
    onAfterEnter: function onAfterEnter() {
      var _this3 = this;

      this.checkModalOverflow();
      this.isTransitioning = false; // We use `requestAF()` to allow transition hooks to complete
      // before passing control over to the other handlers
      // This will allow users to not have to use `$nextTick()` or `requestAF()`
      // when trying to pre-focus an element

      requestAF(function () {
        _this3.emitEvent(_this3.buildEvent(EVENT_NAME_SHOWN));

        _this3.setEnforceFocus(true);

        _this3.$nextTick(function () {
          // Delayed in a `$nextTick()` to allow users time to pre-focus
          // an element if the wish
          _this3.focusFirst();
        });
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.isTransitioning = true;
      this.setResizeEvent(false);
      this.setEnforceFocus(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.isShow = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this4 = this;

      this.isBlock = false;
      this.isTransitioning = false;
      this.isModalOverflowing = false;
      this.isHidden = true;
      this.$nextTick(function () {
        _this4.isClosing = false;
        modalManager.unregisterModal(_this4);

        _this4.returnFocusTo(); // TODO: Need to find a way to pass the `trigger` property
        //       to the `hidden` event, not just only the `hide` event


        _this4.emitEvent(_this4.buildEvent(EVENT_NAME_HIDDEN));
      });
    },
    emitEvent: function emitEvent(bvEvent) {
      var type = bvEvent.type; // We emit on `$root` first in case a global listener wants to cancel
      // the event first before the instance emits its event

      this.emitOnRoot(events_getRootEventName(NAME_MODAL, type), bvEvent, bvEvent.componentId);
      this.$emit(type, bvEvent);
    },
    // UI event handlers
    onDialogMousedown: function onDialogMousedown() {
      var _this5 = this;

      // Watch to see if the matching mouseup event occurs outside the dialog
      // And if it does, cancel the clickOut handler
      var modal = this.$refs.modal;

      var onceModalMouseup = function onceModalMouseup(event) {
        eventOff(modal, 'mouseup', onceModalMouseup, EVENT_OPTIONS_NO_CAPTURE);

        if (event.target === modal) {
          _this5.ignoreBackdropClick = true;
        }
      };

      eventOn(modal, 'mouseup', onceModalMouseup, EVENT_OPTIONS_NO_CAPTURE);
    },
    onClickOut: function onClickOut(event) {
      if (this.ignoreBackdropClick) {
        // Click was initiated inside the modal content, but finished outside.
        // Set by the above onDialogMousedown handler
        this.ignoreBackdropClick = false;
        return;
      } // Do nothing if not visible, backdrop click disabled, or element
      // that generated click event is no longer in document body


      if (!this.isVisible || this.noCloseOnBackdrop || !dom_contains(document.body, event.target)) {
        return;
      } // If backdrop clicked, hide modal


      if (!dom_contains(this.$refs.content, event.target)) {
        this.hide(TRIGGER_BACKDROP);
      }
    },
    onOk: function onOk() {
      this.hide(BUTTON_OK);
    },
    onCancel: function onCancel() {
      this.hide(BUTTON_CANCEL);
    },
    onClose: function onClose() {
      this.hide(BUTTON_CLOSE);
    },
    onEsc: function onEsc(event) {
      // If ESC pressed, hide modal
      if (event.keyCode === CODE_ESC && this.isVisible && !this.noCloseOnEsc) {
        this.hide(TRIGGER_ESC);
      }
    },
    // Document focusin listener
    focusHandler: function focusHandler(event) {
      // If focus leaves modal content, bring it back
      var content = this.$refs.content;
      var target = event.target;

      if (this.noEnforceFocus || !this.isTop || !this.isVisible || !content || document === target || dom_contains(content, target) || this.computeIgnoreEnforceFocusSelector && closest(this.computeIgnoreEnforceFocusSelector, target, true)) {
        return;
      }

      var tabables = getTabables(this.$refs.content);
      var bottomTrap = this.$refs['bottom-trap'];
      var topTrap = this.$refs['top-trap'];

      if (bottomTrap && target === bottomTrap) {
        // If user pressed TAB out of modal into our bottom trab trap element
        // Find the first tabable element in the modal content and focus it
        if (attemptFocus(tabables[0])) {
          // Focus was successful
          return;
        }
      } else if (topTrap && target === topTrap) {
        // If user pressed CTRL-TAB out of modal and into our top tab trap element
        // Find the last tabable element in the modal content and focus it
        if (attemptFocus(tabables[tabables.length - 1])) {
          // Focus was successful
          return;
        }
      } // Otherwise focus the modal content container


      attemptFocus(content, {
        preventScroll: true
      });
    },
    // Turn on/off focusin listener
    setEnforceFocus: function setEnforceFocus(on) {
      this.listenDocument(on, 'focusin', this.focusHandler);
    },
    // Resize listener
    setResizeEvent: function setResizeEvent(on) {
      this.listenWindow(on, 'resize', this.checkModalOverflow);
      this.listenWindow(on, 'orientationchange', this.checkModalOverflow);
    },
    // Root listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.modalId) {
        this.$_returnFocus = triggerEl || this.getActiveElement();
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.modalId) {
        this.hide('event');
      }
    },
    toggleHandler: function toggleHandler(id, triggerEl) {
      if (id === this.modalId) {
        this.toggle(triggerEl);
      }
    },
    modalListener: function modalListener(bvEvent) {
      // If another modal opens, close this one if stacking not permitted
      if (this.noStacking && bvEvent.vueTarget !== this) {
        this.hide();
      }
    },
    // Focus control handlers
    focusFirst: function focusFirst() {
      var _this6 = this;

      // Don't try and focus if we are SSR
      if (IS_BROWSER) {
        requestAF(function () {
          var modal = _this6.$refs.modal;
          var content = _this6.$refs.content;

          var activeElement = _this6.getActiveElement(); // If the modal contains the activeElement, we don't do anything


          if (modal && content && !(activeElement && dom_contains(content, activeElement))) {
            var ok = _this6.$refs['ok-button'];
            var cancel = _this6.$refs['cancel-button'];
            var close = _this6.$refs['close-button']; // Focus the appropriate button or modal content wrapper

            var autoFocus = _this6.autoFocusButton;
            /* istanbul ignore next */

            var el = autoFocus === BUTTON_OK && ok ? ok.$el || ok : autoFocus === BUTTON_CANCEL && cancel ? cancel.$el || cancel : autoFocus === BUTTON_CLOSE && close ? close.$el || close : content; // Focus the element

            attemptFocus(el);

            if (el === content) {
              // Make sure top of modal is showing (if longer than the viewport)
              _this6.$nextTick(function () {
                modal.scrollTop = 0;
              });
            }
          }
        });
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer `returnFocus` prop over event specified
      // `return_focus` value
      var el = this.returnFocus || this.$_returnFocus || null;
      this.$_returnFocus = null;
      this.$nextTick(function () {
        // Is el a string CSS selector?
        el = isString(el) ? dom_select(el) : el;

        if (el) {
          // Possibly could be a component reference
          el = el.$el || el;
          attemptFocus(el);
        }
      });
    },
    checkModalOverflow: function checkModalOverflow() {
      if (this.isVisible) {
        var modal = this.$refs.modal;
        this.isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;
      }
    },
    makeModal: function makeModal(h) {
      // Modal header
      var $header = h();

      if (!this.hideHeader) {
        // TODO: Rename slot to `header` and deprecate `modal-header`
        var $modalHeader = this.normalizeSlot(SLOT_NAME_MODAL_HEADER, this.slotScope);

        if (!$modalHeader) {
          var $closeButton = h();

          if (!this.hideHeaderClose) {
            $closeButton = h(BButtonClose, {
              props: {
                content: this.headerCloseContent,
                disabled: this.isTransitioning,
                ariaLabel: this.headerCloseLabel,
                textVariant: this.headerCloseVariant || this.headerTextVariant
              },
              on: {
                click: this.onClose
              },
              ref: 'close-button'
            }, // TODO: Rename slot to `header-close` and deprecate `modal-header-close`
            [this.normalizeSlot(SLOT_NAME_MODAL_HEADER_CLOSE)]);
          }

          $modalHeader = [h(this.titleTag, {
            staticClass: 'modal-title',
            class: this.titleClasses,
            attrs: {
              id: this.modalTitleId
            },
            // TODO: Rename slot to `title` and deprecate `modal-title`
            domProps: this.hasNormalizedSlot(SLOT_NAME_MODAL_TITLE) ? {} : htmlOrText(this.titleHtml, this.title)
          }, // TODO: Rename slot to `title` and deprecate `modal-title`
          this.normalizeSlot(SLOT_NAME_MODAL_TITLE, this.slotScope)), $closeButton];
        }

        $header = h('header', {
          staticClass: 'modal-header',
          class: this.headerClasses,
          attrs: {
            id: this.modalHeaderId
          },
          ref: 'header'
        }, [$modalHeader]);
      } // Modal body


      var $body = h('div', {
        staticClass: 'modal-body',
        class: this.bodyClasses,
        attrs: {
          id: this.modalBodyId
        },
        ref: 'body'
      }, this.normalizeSlot(SLOT_NAME_DEFAULT, this.slotScope)); // Modal footer

      var $footer = h();

      if (!this.hideFooter) {
        // TODO: Rename slot to `footer` and deprecate `modal-footer`
        var $modalFooter = this.normalizeSlot(SLOT_NAME_MODAL_FOOTER, this.slotScope);

        if (!$modalFooter) {
          var $cancelButton = h();

          if (!this.okOnly) {
            $cancelButton = h(BButton, {
              props: {
                variant: this.cancelVariant,
                size: this.buttonSize,
                disabled: this.cancelDisabled || this.busy || this.isTransitioning
              },
              // TODO: Rename slot to `cancel-button` and deprecate `modal-cancel`
              domProps: this.hasNormalizedSlot(SLOT_NAME_MODAL_CANCEL) ? {} : htmlOrText(this.cancelTitleHtml, this.cancelTitle),
              on: {
                click: this.onCancel
              },
              ref: 'cancel-button'
            }, // TODO: Rename slot to `cancel-button` and deprecate `modal-cancel`
            this.normalizeSlot(SLOT_NAME_MODAL_CANCEL));
          }

          var $okButton = h(BButton, {
            props: {
              variant: this.okVariant,
              size: this.buttonSize,
              disabled: this.okDisabled || this.busy || this.isTransitioning
            },
            // TODO: Rename slot to `ok-button` and deprecate `modal-ok`
            domProps: this.hasNormalizedSlot(SLOT_NAME_MODAL_OK) ? {} : htmlOrText(this.okTitleHtml, this.okTitle),
            on: {
              click: this.onOk
            },
            ref: 'ok-button'
          }, // TODO: Rename slot to `ok-button` and deprecate `modal-ok`
          this.normalizeSlot(SLOT_NAME_MODAL_OK));
          $modalFooter = [$cancelButton, $okButton];
        }

        $footer = h('footer', {
          staticClass: 'modal-footer',
          class: this.footerClasses,
          attrs: {
            id: this.modalFooterId
          },
          ref: 'footer'
        }, [$modalFooter]);
      } // Assemble modal content


      var $modalContent = h('div', {
        staticClass: 'modal-content',
        class: this.contentClass,
        attrs: {
          id: this.modalContentId,
          tabindex: '-1'
        },
        ref: 'content'
      }, [$header, $body, $footer]); // Tab traps to prevent page from scrolling to next element in
      // tab index during enforce-focus tab cycle

      var $tabTrapTop = h();
      var $tabTrapBottom = h();

      if (this.isVisible && !this.noEnforceFocus) {
        $tabTrapTop = h('span', {
          attrs: {
            tabindex: '0'
          },
          ref: 'top-trap'
        });
        $tabTrapBottom = h('span', {
          attrs: {
            tabindex: '0'
          },
          ref: 'bottom-trap'
        });
      } // Modal dialog wrapper


      var $modalDialog = h('div', {
        staticClass: 'modal-dialog',
        class: this.dialogClasses,
        on: {
          mousedown: this.onDialogMousedown
        },
        ref: 'dialog'
      }, [$tabTrapTop, $modalContent, $tabTrapBottom]); // Modal

      var $modal = h('div', {
        staticClass: 'modal',
        class: this.modalClasses,
        style: this.modalStyles,
        attrs: this.computedModalAttrs,
        on: {
          keydown: this.onEsc,
          click: this.onClickOut
        },
        directives: [{
          name: 'show',
          value: this.isVisible
        }],
        ref: 'modal'
      }, [$modalDialog]); // Wrap modal in transition
      // Sadly, we can't use `BVTransition` here due to the differences in
      // transition durations for `.modal` and `.modal-dialog`
      // At least until https://github.com/vuejs/vue/issues/9986 is resolved

      $modal = h('transition', {
        props: {
          enterClass: '',
          enterToClass: '',
          enterActiveClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: ''
        },
        on: {
          beforeEnter: this.onBeforeEnter,
          enter: this.onEnter,
          afterEnter: this.onAfterEnter,
          beforeLeave: this.onBeforeLeave,
          leave: this.onLeave,
          afterLeave: this.onAfterLeave
        }
      }, [$modal]); // Modal backdrop

      var $backdrop = h();

      if (!this.hideBackdrop && this.isVisible) {
        $backdrop = h('div', {
          staticClass: 'modal-backdrop',
          attrs: {
            id: this.modalBackdropId
          }
        }, // TODO: Rename slot to `backdrop` and deprecate `modal-backdrop`
        this.normalizeSlot(SLOT_NAME_MODAL_BACKDROP));
      }

      $backdrop = h(BVTransition, {
        props: {
          noFade: this.noFade
        }
      }, [$backdrop]); // Assemble modal and backdrop in an outer <div>

      return h('div', {
        style: this.modalOuterStyle,
        attrs: this.computedAttrs,
        key: "modal-outer-".concat(this[COMPONENT_UID_KEY])
      }, [$modal, $backdrop]);
    }
  },
  render: function render(h) {
    if (this.static) {
      return this.lazy && this.isHidden ? h() : this.makeModal(h);
    } else {
      return this.isHidden ? h() : h(BVTransporter, [this.makeModal(h)]);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/directives/modal/modal.js






 // Emitted show event for modal

var ROOT_ACTION_EVENT_NAME_SHOW = events_getRootActionEventName(NAME_MODAL, EVENT_NAME_SHOW); // Prop name we use to store info on root element

var PROPERTY = '__bv_modal_directive__';

var modal_getTarget = function getTarget(_ref) {
  var _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? {} : _ref$modifiers,
      arg = _ref.arg,
      value = _ref.value;
  // Try value, then arg, otherwise pick last modifier
  return isString(value) ? value : isString(arg) ? arg : keys(modifiers).reverse()[0];
};

var modal_getTriggerElement = function getTriggerElement(el) {
  // If root element is a dropdown-item or nav-item, we
  // need to target the inner link or button instead
  return el && matches(el, '.dropdown-menu > li, li.nav-item') ? dom_select('a, button', el) || el : el;
};

var modal_setRole = function setRole(trigger) {
  // Ensure accessibility on non button elements
  if (trigger && trigger.tagName !== 'BUTTON') {
    // Only set a role if the trigger element doesn't have one
    if (!hasAttr(trigger, 'role')) {
      setAttr(trigger, 'role', 'button');
    } // Add a tabindex is not a button or link, and tabindex is not provided


    if (trigger.tagName !== 'A' && !hasAttr(trigger, 'tabindex')) {
      setAttr(trigger, 'tabindex', '0');
    }
  }
};

var modal_bind = function bind(el, binding, vnode) {
  var target = modal_getTarget(binding);
  var trigger = modal_getTriggerElement(el);

  if (target && trigger) {
    var handler = function handler(event) {
      // `currentTarget` is the element with the listener on it
      var currentTarget = event.currentTarget;

      if (!isDisabled(currentTarget)) {
        var type = event.type;
        var key = event.keyCode; // Open modal only if trigger is not disabled

        if (type === 'click' || type === 'keydown' && (key === CODE_ENTER || key === CODE_SPACE)) {
          vnode.context.$root.$emit(ROOT_ACTION_EVENT_NAME_SHOW, target, currentTarget);
        }
      }
    };

    el[PROPERTY] = {
      handler: handler,
      target: target,
      trigger: trigger
    }; // If element is not a button, we add `role="button"` for accessibility

    modal_setRole(trigger); // Listen for click events

    eventOn(trigger, 'click', handler, EVENT_OPTIONS_PASSIVE);

    if (trigger.tagName !== 'BUTTON' && getAttr(trigger, 'role') === 'button') {
      // If trigger isn't a button but has role button,
      // we also listen for `keydown.space` && `keydown.enter`
      eventOn(trigger, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
    }
  }
};

var modal_unbind = function unbind(el) {
  var oldProp = el[PROPERTY] || {};
  var trigger = oldProp.trigger;
  var handler = oldProp.handler;

  if (trigger && handler) {
    eventOff(trigger, 'click', handler, EVENT_OPTIONS_PASSIVE);
    eventOff(trigger, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
    eventOff(el, 'click', handler, EVENT_OPTIONS_PASSIVE);
    eventOff(el, 'keydown', handler, EVENT_OPTIONS_PASSIVE);
  }

  delete el[PROPERTY];
};

var componentUpdated = function componentUpdated(el, binding, vnode) {
  var oldProp = el[PROPERTY] || {};
  var target = modal_getTarget(binding);
  var trigger = modal_getTriggerElement(el);

  if (target !== oldProp.target || trigger !== oldProp.trigger) {
    // We bind and rebind if the target or trigger changes
    modal_unbind(el, binding, vnode);
    modal_bind(el, binding, vnode);
  } // If trigger element is not a button, ensure `role="button"`
  // is still set for accessibility


  modal_setRole(trigger);
};

var updated = function updated() {};
/*
 * Export our directive
 */


var VBModal = {
  inserted: componentUpdated,
  updated: updated,
  componentUpdated: componentUpdated,
  unbind: modal_unbind
};
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal.js
function bv_modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bv_modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bv_modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) bv_modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) bv_modal_defineProperties(Constructor, staticProps); return Constructor; }

function bv_modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function bv_modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bv_modal_ownKeys(Object(source), true).forEach(function (key) { bv_modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bv_modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bv_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function bv_modal_toConsumableArray(arr) { return bv_modal_arrayWithoutHoles(arr) || bv_modal_iterableToArray(arr) || bv_modal_unsupportedIterableToArray(arr) || bv_modal_nonIterableSpread(); }

function bv_modal_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function bv_modal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return bv_modal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bv_modal_arrayLikeToArray(o, minLen); }

function bv_modal_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function bv_modal_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return bv_modal_arrayLikeToArray(arr); }

function bv_modal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Plugin for adding `$bvModal` property to all Vue instances










 // --- Constants ---

var bv_modal_PROP_NAME = '$bvModal';
var bv_modal_PROP_NAME_PRIV = '_bv__modal'; // Base modal props that are allowed
// Some may be ignored or overridden on some message boxes
// Prop ID is allowed, but really only should be used for testing
// We need to add it in explicitly as it comes from the `idMixin`

var bv_modal_BASE_PROPS = ['id'].concat(bv_modal_toConsumableArray(keys(omit(modal_props, ['busy', 'lazy', 'noStacking', 'static', 'visible'])))); // Fallback event resolver (returns undefined)

var defaultResolver = function defaultResolver() {}; // Map prop names to modal slot names


var bv_modal_propsToSlots = {
  msgBoxContent: 'default',
  title: 'modal-title',
  okTitle: 'modal-ok',
  cancelTitle: 'modal-cancel'
}; // --- Helper methods ---
// Method to filter only recognized props that are not undefined

var bv_modal_filterOptions = function filterOptions(options) {
  return bv_modal_BASE_PROPS.reduce(function (memo, key) {
    if (!isUndefined(options[key])) {
      memo[key] = options[key];
    }

    return memo;
  }, {});
}; // Method to install `$bvModal` VM injection


var bv_modal_plugin = function plugin(Vue) {
  // Create a private sub-component that extends BModal
  // which self-destructs after hidden
  // @vue/component
  var BMsgBox = Vue.extend({
    name: NAME_MSG_BOX,
    extends: BModal,
    destroyed: function destroyed() {
      // Make sure we not in document any more
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    mounted: function mounted() {
      var _this = this;

      // Self destruct handler
      var handleDestroy = function handleDestroy() {
        _this.$nextTick(function () {
          // In a `requestAF()` to release control back to application
          requestAF(function () {
            _this.$destroy();
          });
        });
      }; // Self destruct if parent destroyed


      this.$parent.$once(HOOK_EVENT_NAME_DESTROYED, handleDestroy); // Self destruct after hidden

      this.$once(EVENT_NAME_HIDDEN, handleDestroy); // Self destruct on route change

      /* istanbul ignore if */

      if (this.$router && this.$route) {
        // Destroy ourselves if route changes

        /* istanbul ignore next */
        this.$once(HOOK_EVENT_NAME_BEFORE_DESTROY, this.$watch('$router', handleDestroy));
      } // Show the `BMsgBox`


      this.show();
    }
  }); // Method to generate the on-demand modal message box
  // Returns a promise that resolves to a value returned by the resolve

  var asyncMsgBox = function asyncMsgBox($parent, props) {
    var resolver = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResolver;

    if (warn_warnNotClient(bv_modal_PROP_NAME) || warn_warnNoPromiseSupport(bv_modal_PROP_NAME)) {
      /* istanbul ignore next */
      return;
    } // Create an instance of `BMsgBox` component


    var msgBox = new BMsgBox({
      // We set parent as the local VM so these modals can emit events on
      // the app `$root`, as needed by things like tooltips and popovers
      // And it helps to ensure `BMsgBox` is destroyed when parent is destroyed
      parent: $parent,
      // Preset the prop values
      propsData: bv_modal_objectSpread(bv_modal_objectSpread(bv_modal_objectSpread({}, bv_modal_filterOptions(getComponentConfig(NAME_MODAL))), {}, {
        // Defaults that user can override
        hideHeaderClose: true,
        hideHeader: !(props.title || props.titleHtml)
      }, omit(props, keys(bv_modal_propsToSlots))), {}, {
        // Props that can't be overridden
        lazy: false,
        busy: false,
        visible: false,
        noStacking: false,
        noEnforceFocus: false
      })
    }); // Convert certain props to scoped slots

    keys(bv_modal_propsToSlots).forEach(function (prop) {
      if (!isUndefined(props[prop])) {
        // Can be a string, or array of VNodes.
        // Alternatively, user can use HTML version of prop to pass an HTML string.
        msgBox.$slots[bv_modal_propsToSlots[prop]] = concat(props[prop]);
      }
    }); // Return a promise that resolves when hidden, or rejects on destroyed

    return new Promise(function (resolve, reject) {
      var resolved = false;
      msgBox.$once(HOOK_EVENT_NAME_DESTROYED, function () {
        if (!resolved) {
          /* istanbul ignore next */
          reject(new Error('BootstrapVue MsgBox destroyed before resolve'));
        }
      });
      msgBox.$on(EVENT_NAME_HIDE, function (bvModalEvt) {
        if (!bvModalEvt.defaultPrevented) {
          var result = resolver(bvModalEvt); // If resolver didn't cancel hide, we resolve

          if (!bvModalEvt.defaultPrevented) {
            resolved = true;
            resolve(result);
          }
        }
      }); // Create a mount point (a DIV) and mount the msgBo which will trigger it to show

      var div = document.createElement('div');
      document.body.appendChild(div);
      msgBox.$mount(div);
    });
  }; // Private utility method to open a user defined message box and returns a promise.
  // Not to be used directly by consumers, as this method may change calling syntax


  var makeMsgBox = function makeMsgBox($parent, content) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var resolver = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (!content || warn_warnNoPromiseSupport(bv_modal_PROP_NAME) || warn_warnNotClient(bv_modal_PROP_NAME) || !isFunction(resolver)) {
      /* istanbul ignore next */
      return;
    }

    return asyncMsgBox($parent, bv_modal_objectSpread(bv_modal_objectSpread({}, bv_modal_filterOptions(options)), {}, {
      msgBoxContent: content
    }), resolver);
  }; // BvModal instance class


  var BvModal = /*#__PURE__*/function () {
    function BvModal(vm) {
      bv_modal_classCallCheck(this, BvModal);

      // Assign the new properties to this instance
      object_assign(this, {
        _vm: vm,
        _root: vm.$root
      }); // Set these properties as read-only and non-enumerable

      defineProperties(this, {
        _vm: readonlyDescriptor(),
        _root: readonlyDescriptor()
      });
    } // --- Instance methods ---
    // Show modal with the specified ID args are for future use


    bv_modal_createClass(BvModal, [{
      key: "show",
      value: function show(id) {
        if (id && this._root) {
          var _this$_root;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          (_this$_root = this._root).$emit.apply(_this$_root, [events_getRootActionEventName(NAME_MODAL, 'show'), id].concat(args));
        }
      } // Hide modal with the specified ID args are for future use

    }, {
      key: "hide",
      value: function hide(id) {
        if (id && this._root) {
          var _this$_root2;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          (_this$_root2 = this._root).$emit.apply(_this$_root2, [events_getRootActionEventName(NAME_MODAL, 'hide'), id].concat(args));
        }
      } // The following methods require Promise support!
      // IE 11 and others do not support Promise natively, so users
      // should have a Polyfill loaded (which they need anyways for IE 11 support)
      // Open a message box with OK button only and returns a promise

    }, {
      key: "msgBoxOk",
      value: function msgBoxOk(message) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Pick the modal props we support from options
        var props = bv_modal_objectSpread(bv_modal_objectSpread({}, options), {}, {
          // Add in overrides and our content prop
          okOnly: true,
          okDisabled: false,
          hideFooter: false,
          msgBoxContent: message
        });

        return makeMsgBox(this._vm, message, props, function () {
          // Always resolve to true for OK
          return true;
        });
      } // Open a message box modal with OK and CANCEL buttons
      // and returns a promise

    }, {
      key: "msgBoxConfirm",
      value: function msgBoxConfirm(message) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // Set the modal props we support from options
        var props = bv_modal_objectSpread(bv_modal_objectSpread({}, options), {}, {
          // Add in overrides and our content prop
          okOnly: false,
          okDisabled: false,
          cancelDisabled: false,
          hideFooter: false
        });

        return makeMsgBox(this._vm, message, props, function (bvModalEvt) {
          var trigger = bvModalEvt.trigger;
          return trigger === 'ok' ? true : trigger === 'cancel' ? false : null;
        });
      }
    }]);

    return BvModal;
  }(); // Add our instance mixin


  Vue.mixin({
    beforeCreate: function beforeCreate() {
      // Because we need access to `$root` for `$emits`, and VM for parenting,
      // we have to create a fresh instance of `BvModal` for each VM
      this[bv_modal_PROP_NAME_PRIV] = new BvModal(this);
    }
  }); // Define our read-only `$bvModal` instance property
  // Placed in an if just in case in HMR mode

  if (!object_hasOwnProperty(Vue.prototype, bv_modal_PROP_NAME)) {
    defineProperty(Vue.prototype, bv_modal_PROP_NAME, {
      get: function get() {
        /* istanbul ignore next */
        if (!this || !this[bv_modal_PROP_NAME_PRIV]) {
          warn_warn("\"".concat(bv_modal_PROP_NAME, "\" must be accessed from a Vue instance \"this\" context."), NAME_MODAL);
        }

        return this[bv_modal_PROP_NAME_PRIV];
      }
    });
  }
};

var BVModalPlugin = /*#__PURE__*/pluginFactory({
  plugins: {
    plugin: bv_modal_plugin
  }
});
// CONCATENATED MODULE: ./node_modules/wbuutilities/node_modules/bootstrap-vue/esm/components/modal/index.js




var ModalPlugin = /*#__PURE__*/pluginFactory({
  components: {
    BModal: BModal
  },
  directives: {
    VBModal: VBModal
  },
  // $bvModal injection
  plugins: {
    BVModalPlugin: BVModalPlugin
  }
});

// CONCATENATED MODULE: ./node_modules/wbuutilities/src/Toasts/BootStrap.js



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(BVToastPlugin);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(ModalPlugin);
const BootStrap_vm = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
const AjaxToastBootStrap = {
  ...basic,
  $bvToast: BootStrap_vm.$bvToast,
  $bvModal: BootStrap_vm.$bvModal,
  modalMessage(body, conf) {
    const confDefault = {
      size: "md",
      buttonSize: "sm",
      hideFooter: true,
      centered: true,
    };
    for (const i in conf) {
      confDefault[i] = conf[i];
    }
    return new Promise((resolv, reject) => {
      this.$bvModal
        .msgBoxConfirm(body, confDefault)
        .then((value) => {
          if(value)
            resolv(value);
          else
            reject(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  modalConfirmDelete(
    body = "Confirmer la suppression, NB : cette action est irreverssible.",
    conf = {
      title: "Attention",
      okVariant: "danger",
      okTitle: "Supprimer",
      cancelTitle: "Annuler",
      footerClass: "p-2",
    }
  ) {
    return this.modalMessage(body, conf);
  },
  modalSuccess(body = "", conf = {}) {
    const confDefault = {
      title: "Succes",
      headerBgVariant: "success",
      bodyClass: ["p-3"],
      hideFooter: true,
      headerTextVariant: "light",
    };
    for (const i in conf) {
      confDefault[i] = conf[i];
    }
    return this.modalMessage(body, confDefault);
  },
  notification: function(ajaxTitle, variant = "success") {
    this.$bvToast.toast(" ", {
      title: ajaxTitle,
      variant: variant,
      solid: true,
      toaster: "b-toaster-top-right",
    });
  },
  bPost: function(url, datas, configs, showNotification = true) {
    return new Promise((resolv, reject) => {
      this.post(url, datas, configs)
        .then((reponse) => {
          if (showNotification) {
            this.notification("success");
          }
          resolv(reponse);
        })
        .catch((error) => {
          //console.log("error : ", error);
          this.notification(this.GetErrorTitle(error), "warning");
          reject(error);
        });
    });
  },
  bGet(url, configs, showNotification = false) {
    return new Promise((resolv, reject) => {
      this.get(url, configs)
        .then((reponse) => {
          if (showNotification) {
            this.notification("success");
          }
          resolv(reponse);
        })
        .catch((error) => {
          //console.log("error : ", error);
          this.notification(this.GetErrorTitle(error), "warning");
          reject(error);
        });
    });
  },
  GetErrorTitle: function(error) {
    var title;
    //
    if (error.code) {
      switch (error.code) {
        case "ECONNABORTED":
          var temps = this.axiosInstance.defaults.timeout / 1000 + "s";
          title =
            "Impossible de joindre l'hote distant, temps impartie epuisé. (" +
            temps +
            ")";
          break;
        default:
          title = "Une erreur s'est produite";
      }
    } //
    else if (error.error && error.error.statusText) {
      title = decodeURI(error.error.statusText);
    }
    return title;
  },
};
/**
 * Intercept la reponse ajax pour declenche le toast adapter.
 */
/*
 pas adapter pour gerer les messages d'erreurs.
(function() {
  AjaxToastBootStrap.axiosInstance.interceptors.response.use(
    function(response) {
      console.log("interceptor success");
      AjaxToastBootStrap.notification("success");
      return response;
    },
    function(error) {
      console.log("interceptor error");
      AjaxToastBootStrap.notification("Error", "warning");
      return error;
    }
  );
})();
/**/
/* harmony default export */ var BootStrap = (AjaxToastBootStrap);

// CONCATENATED MODULE: ./node_modules/wbuutilities/index.js
//import Vue from "vue";



/*
const HelloWorldSimple = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("button-save", ButtonSave);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HelloWorldSimple);
}
/**/






/***/ }),

/***/ "c251":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");
var transformData = __webpack_require__("8977");
var isCancel = __webpack_require__("0029");
var defaults = __webpack_require__("a8d8");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4b");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("5f02");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "dfba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "e259":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "e3b0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "f159":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "f6b49":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "fcf4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("2a16");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ })

}]);
//# sourceMappingURL=gestionTache.common.0.js.map