var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([15],{

/***/ "./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/radio/radio.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "E:/workspaces/chameleon/cml_demo/node_modules/chameleon-ui-builtin/components/radio/radio.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "EventDetail": {
      "value": "Boolean",
      "index": "Number"
    }
  },
  "interfaces": {
    "RadioInterface": {
      "cstyle": "String",
      "checked": "Boolean",
      "label": "String",
      "disabled": "Boolean",
      "position": "String",
      "groupIndex": "Number",
      "color": "String",
      "change": {
        "input": ["EventDetail"],
        "output": "Undefined"
      },
      "changeevent": {
        "input": ["EventDetail"],
        "output": "Undefined"
      }
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "Radio": ["RadioInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");

var Radio = function () {
  function Radio() {
    _classCallCheck(this, Radio);

    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      },
      color: {
        type: String,
        default: '#fc9153'
      },
      cstyle: {
        type: String,
        default: ''
      }
    };
    this.data = {
      innerChecked: false
    };
    this.computed = {
      radioStyle: function radioStyle() {
        var style = '';

        if (this.disabled) {
          style += 'opacity:0.5;';
        }

        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }

        return style;
      },
      radioInnerStyle: function radioInnerStyle() {
        var style = '';

        if (this.innerChecked) {
          style += "border:10cpx solid " + this.color + ";";
        } else {
          style += "border:1px solid #ccc;";
        }

        return style;
      },
      radioClass: function radioClass() {
        if (this.disabled) {
          return this.innerChecked ? 'cml-radio-selected-disabled' : 'cml-radio-unselect-disabled';
        }

        return this.innerChecked ? 'cml-radio-selected' : 'cml-radio-unselect';
      },
      computedCstyle: function computedCstyle() {
        //小程序端转cpx
        return this.cstyle;
      }
    };
    this.watch = {
      checked: function checked(val) {
        this.innerChecked = val;
      }
    };
    this.methods = {
      changeSelect: function changeSelect() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked,
          index: this.groupIndex
        };
        this.$cmlEmit('change', value);
        this.$cmlEmit('changeevent', value);
      }
    };
  }

  _createClass(Radio, [{
    key: "mounted",
    value: function mounted() {
      this.innerChecked = this.checked;
    }
  }]);

  return Radio;
}();

exports.default = __CML__WRAPPER__(new Radio(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/radio/radio.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/radio/radio.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/radio/radio.cml");
var __cml__script = __webpack_require__("./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\sy\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/sy/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/radio/radio.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/radio/radio.cml"]);