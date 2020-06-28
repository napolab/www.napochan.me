module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/common/components/Card.tsx
var __jsx = external_react_default.a.createElement;



const Card = ({
  title,
  children,
  className
}) => {
  return __jsx(Container, {
    className: className
  }, __jsx(Header, null, title), __jsx(Body, null, children));
};

/* harmony default export */ var components_Card = (Card);
const Container = external_styled_components_default.a.div.withConfig({
  componentId: "ekrk3k-0"
})(["width:100%;height:100%;box-sizing:border-box;border-radius:16px;border:solid 5px ", ";background:", ";padding:16px;box-shadow:0 6px 6px rgba(0,0,0,0.16);"], props => props.theme.secondary, props => props.theme.base);
const Header = external_styled_components_default.a.h3.withConfig({
  componentId: "ekrk3k-1"
})(["margin:0;padding:0;font-weight:600;font-size:24px;color:", ";"], props => props.theme.secondary);
const Body = external_styled_components_default.a.div.withConfig({
  componentId: "ekrk3k-2"
})(["margin-top:16px;font-size:16px;color:", ";"], props => props.theme.secondary);
// EXTERNAL MODULE: ./src/common/utils/constants.ts
var constants = __webpack_require__("mbU9");

// EXTERNAL MODULE: external "animejs"
var external_animejs_ = __webpack_require__("zblk");
var external_animejs_default = /*#__PURE__*/__webpack_require__.n(external_animejs_);

// CONCATENATED MODULE: ./src/common/components/Slick.tsx
var Slick_jsx = external_react_default.a.createElement;




const Slick = ({
  images,
  duration,
  delay,
  onChange
}) => {
  const ref = Object(external_react_["useRef"])(null);
  const isInitialRenderedRef = Object(external_react_["useRef"])(false);
  Object(external_react_["useEffect"])(() => {
    const targets = ref.current;
    if (!targets) return;

    function runSlideShow(page = 0) {
      external_animejs_default()({
        targets,
        translateX: `-${page * 100}%`,
        duration: duration || 1000,
        delay: delay || 5000,
        easing: "easeInOutQuart",
        complete: () => {
          onChange && onChange(images[page]);
          runSlideShow((page + 1) % images.length);
        }
      });
    }

    if (!isInitialRenderedRef.current) runSlideShow();
    isInitialRenderedRef.current = true;
  }, [delay, duration, images, onChange]);
  return Slick_jsx(Slick_Container, null, Slick_jsx("div", {
    ref: ref
  }, images.map(image => Slick_jsx("img", {
    src: image,
    key: image
  }))));
};

const Slick_Container = external_styled_components_default.a.div.withConfig({
  componentId: "sc-1i1bavs-0"
})(["width:100%;height:100%;overflow:hidden;& > div{display:flex;img{object-position:left top;object-fit:cover;}}"]);
/* harmony default export */ var components_Slick = (Object(external_react_["memo"])(Slick));
// CONCATENATED MODULE: ./src/pages/index.tsx
var pages_jsx = external_react_default.a.createElement;






const Home = ({
  accounts
}) => {
  var _accounts$;

  const {
    0: nowImage,
    1: setNowImage
  } = Object(external_react_["useState"])((_accounts$ = accounts[0]) === null || _accounts$ === void 0 ? void 0 : _accounts$.image);
  return pages_jsx(pages_Container, null, pages_jsx(FirstView, null, pages_jsx("div", null, pages_jsx(MainVisualContainer, null, pages_jsx("img", {
    src: "/static/main.png"
  })), pages_jsx(CardContainer, null, pages_jsx(ContentCard, {
    title: "Introduction",
    delay: 0.5
  }, pages_jsx("p", null, pages_jsx(Bold, null, "\u300C\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u3067\u751F\u304D\u3066\u3044\u304D\u305F\u3044\u300D"), "\u305F\u3060\u305D\u308C\u3060\u3051\u304C\u50D5\u306E\u6301\u3064\u601D\u3044"), pages_jsx("p", null, "\u8DA3\u5473\u306F", pages_jsx(Bold, null, "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"), "\u3068", pages_jsx(Bold, null, "Vtuber"), "\u3068", pages_jsx(Bold, null, "\u767E\u5408\u6F2B\u753B"), "\u3092\u8AAD\u3080\u3053\u3068"), pages_jsx("p", null, "\u304B\u308F\u3044\u3044\u3082\u306E\u3068\u97F3\u697D\u304C\u597D\u304D\uFF01\u307F\u3093\u306A\u4EF2\u826F\u304F\u3057\u3066\u306D")), pages_jsx(ContentCard, {
    title: "SNSAccounts",
    delay: 1
  }, pages_jsx(AccountContainer, null, pages_jsx("div", null, accounts.map(({
    type,
    url,
    image
  }) => pages_jsx("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer",
    key: `${type}-${url}`,
    className: nowImage === image ? "active" : ""
  }, type))), pages_jsx("div", null, pages_jsx(components_Slick, {
    images: accounts.map(({
      image
    }) => image),
    onChange: setNowImage
  })))), pages_jsx(ContentCard, {
    title: "Like",
    delay: 1.5
  }, pages_jsx("p", null, "\u597D\u304D\u306A", pages_jsx(Bold, null, "\u6F2B\u753B"), "\u30FB", pages_jsx(Bold, null, "Vtuber"), "\u30FB", pages_jsx(Bold, null, "\u97F3\u697D"), "\u306B\u3064\u3044\u3066\u66F8\u304D\u307E\u3059")), pages_jsx(ContentCard, {
    title: "Programing",
    delay: 2
  }, pages_jsx("p", null, "Typescript\u304C\u597D\u304D\u3067\u3059\u3002Python\u30FBRuby on Rails\u306F\u307B\u3093\u3068\u306B\u5C11\u3057\u3060\u3051\u304B\u3051\u307E\u3059\u304C\u3001\u5F97\u610F\u3058\u3083\u306A\u3044\u3088\uFF01"), pages_jsx("p", null, "\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u306FReact/Next.js\u3092\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u306FNestJS\u3092\u597D\u3093\u3067\u4F7F\u3046\u3088\uFF01"), pages_jsx("p", null, "Redux\u306Fnormalizr\u3092\u4F7F\u3046\u3084\u308A\u65B9\u304C\u597D\u304D\uFF01"), pages_jsx("p", null, "\u30A4\u30F3\u30D5\u30E9\u307E\u308F\u308A\u306Ffirebase\u30FBvercel\u30FBheroku\u304C\u8ABF\u3079\u3064\u3064\u3084\u308A\u305F\u3044\u3053\u3068\u304C\u3067\u304D\u308B\u7A0B\u5EA6\u3002 \u30B3\u30F3\u30C6\u30CA\u6280\u8853\u30FBGCP\u30FBAWS\u306F\u307B\u3068\u3093\u3069\u308F\u304B\u3089\u306A\u3044\u306E\u3067\u52C9\u5F37\u4E2D\u30FB\u30FB\u30FB\u3002"), pages_jsx("p", null, "CI/CD\u307E\u308F\u308A\u306FGithubActions\u306F\u3067\u306F\u3058\u3081\u306B\u5C11\u3057\u4F7F\u3063\u3066\u3044\u305F\u7A0B\u5EA6\u3001CircleCI\u3082\u3059\u3067\u306B\u52D5\u3044\u3066\u3044\u308Byml\u306B\u4ED8\u3051\u8DB3\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002"))))));
};

const getServerSideProps = async () => {
  const accounts = constants["a" /* snsAccounts */].map(({
    url,
    type,
    image
  }) => ({
    url,
    type,
    image
  }));
  return {
    props: {
      accounts
    }
  };
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_["memo"])(Home));
const pages_Container = external_styled_components_default.a.div.withConfig({
  componentId: "j6l5u8-0"
})(["width:100%;height:100%;background:", ";"], props => props.theme.primary);
const FirstView = external_styled_components_default.a.section.withConfig({
  componentId: "j6l5u8-1"
})(["width:100vw;min-height:100vh;padding:32px;box-sizing:border-box;& > div{width:100%;border-radius:16px;border:solid 5px ", ";box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;}@media screen and (max-width:480px){padding:16px;& > div{border:none;}}"], props => props.theme.secondary);
const MainVisualAnimation = Object(external_styled_components_["keyframes"])(["0%{opacity:0;transform:translateY(8px);}100%{opacity:1;transform:translateY(0);}"]);
const MainVisualContainer = external_styled_components_default.a.div.withConfig({
  componentId: "j6l5u8-2"
})(["height:100%;width:100%;max-width:800px;img{height:100%;width:100%;object-fit:contain;animation:", " 1s ease-in-out;}"], MainVisualAnimation);
const ContentCard = external_styled_components_default()(components_Card).withConfig({
  componentId: "j6l5u8-3"
})(["opacity:0;animation:", " 1s ease-in-out ", "s;animation-fill-mode:forwards;"], MainVisualAnimation, props => props.delay || 0);
const CardContainer = external_styled_components_default.a.div.withConfig({
  componentId: "j6l5u8-4"
})(["margin:32px;display:flex;flex:1;flex-direction:column;justify-content:space-between;& > div{margin-bottom:16px;&:last-child{margin-bottom:0;}}@media screen and (max-width:480px){margin:16px 0 0 0;}"]);
const Bold = external_styled_components_default.a.span.withConfig({
  componentId: "j6l5u8-5"
})(["font-weight:600;"]);
const AccountContainer = external_styled_components_default.a.div.withConfig({
  componentId: "j6l5u8-6"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;a{display:block;color:", ";&.active{font-weight:600;color:", ";}}& > div{max-width:500px;img{width:100%;}}"], props => props.theme.secondary, props => props.theme.primary);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mbU9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return snsAccounts; });
const theme = {
  primary: "#FCD799",
  secondary: "#787878",
  base: "white",
  accent: "#FF4389"
};
const snsAccounts = [{
  type: "twitter",
  url: "https://twitter.com/naporin24690",
  image: "/static/twitter-header.png"
}, {
  type: "github",
  url: "https://github.com/naporin0624",
  image: "/static/github-header.png"
}, {
  type: "codesandbox",
  url: "https://codesandbox.io/u/naporin0624",
  image: "/static/codesandbox-header.png"
}, {
  type: "hatenablog",
  url: "https://naporitan.hatenablog.com/",
  image: "/static/hatenablog-header.png"
}];

/***/ }),

/***/ "zblk":
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ })

/******/ });