var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([13],{

/***/ "./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.wx.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RefreshView = function () {
  function RefreshView() {
    _classCallCheck(this, RefreshView);

    this.props = {
      enablePullUpLoad: {
        type: Boolean,
        default: false
      },
      pullUpLoadComplete: {
        type: Boolean,
        default: false
      },
      pullingUp: {
        type: Boolean,
        default: false
      },
      pullUpStop: {
        type: Number,
        default: 80
      },
      pullUpStart: {
        type: Number,
        default: 50
      },
      pullDownStart: {
        type: Number,
        default: 50
      },
      pullDownStop: {
        type: Number,
        default: 80
      },
      pullingDown: {
        type: Boolean,
        default: false
      }
    };
    this.methods = {
      onPullDownRefresh: function onPullDownRefresh() {
        this.$cmlEmit('onPullDownRefresh');
      },
      onPullUpLoad: function onPullUpLoad() {
        this.$cmlEmit('onPullUpLoad');
      }
    };
    this.watch = {
      pullingDown: function pullingDown(v) {
        if (!v) {
          wx.stopPullDownRefresh();
        }
      }
    };
  }

  _createClass(RefreshView, [{
    key: 'created',
    value: function created() {
      var _this = this;

      var currentPages = getCurrentPages();
      var currentPath = currentPages.pop().route;

      this.$cmlEventBus.on(currentPath + '_onPullDownRefresh', function () {
        if (_this.pullingDown) return;
        _this.onPullDownRefresh();
      });

      if (this.enablePullUpLoad) {
        this.$cmlEventBus.on(currentPath + '_onReachBottom', function () {
          if (_this.pullUpLoadComplete || _this.pullingUp) return;
          _this.onPullUpLoad();
        });
      }
    }
  }]);

  return RefreshView;
}();

exports.default = new RefreshView();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.wx.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.wx.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.wx.cml");
var __cml__script = __webpack_require__("./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.wx.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.wx.cml"]);