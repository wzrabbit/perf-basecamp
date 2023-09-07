(self["webpackChunkfrontend_performance_basecamp"] = self["webpackChunkfrontend_performance_basecamp"] || []).push([[526],{

/***/ 7166:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(this && this[key] || key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 3760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".V7ZLAHZUUJFyxa0EsiNQ {\n  position: relative;\n  color: var(--white);\n  width: 100%;\n  height: 46.5rem;\n  padding-top: 3.5rem;\n}\n\n.NuF0Ip0Glxo7CdLTApb7 {\n  width: 100%;\n  height: 100%;\n}\n\n.iPl0xvdMIi87JktxgLQg {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 8.5rem;\n}\n\n.ZPMqi0uxI0Sxj34ZckWZ {\n  font-style: italic;\n  font-weight: 700;\n  font-size: 4.5rem;\n  line-height: 4.5rem;\n  text-align: center;\n}\n\n.FMzHGtYUXIBQrRcof3DX {\n  font-style: italic;\n  font-weight: 400;\n  font-size: 3rem;\n  line-height: 3rem;\n  text-align: center;\n  padding-top: 1.25rem;\n}\n\n.n0jmvMqZoQB_x3tlKAoU {\n  position: absolute;\n  bottom: 5.5rem;\n}\n\n.rPx5VpX5G_Cq2QF_y9oi {\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  width: 23.5rem;\n  height: 3.5rem;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  border: none;\n  background: var(--radial-gradient);\n  color: var(--white);\n  cursor: pointer;\n  transition: all 0.5s ease-in-out 0s;\n}\n\n.rPx5VpX5G_Cq2QF_y9oi:hover {\n  background: var(--radial-gradient);\n}\n\n.ioeQy4JmiSptpX9wQ5hz {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 3.75rem 0;\n  text-align: center;\n  background: linear-gradient(\n    180deg,\n    rgba(232, 109, 198, 0.1) 0%,\n    rgba(232, 109, 198, 0.64248) 0.01%,\n    #bd00ff 77.6%\n  );\n}\n\n.vT74MgPXVo3yVnRydeQf {\n  width: 65rem;\n  border-top: 2px solid rgba(255, 255, 255, 0.75);\n  padding: 3.75rem 0;\n}\n\n.Ko_sO72rmgBiSTBza_Cp {\n  font-style: italic;\n  font-weight: 700;\n  font-size: 3.75rem;\n  line-height: 3.75rem;\n  text-align: center;\n  color: var(--white);\n}\n\n._IGtPzs7LvTZOW2FuOh1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 3.75rem;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Home/Home.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,OAAO;EACP,QAAQ;EACR,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,kCAAkC;EAClC,mBAAmB;EACnB,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB;;;;;GAKC;AACH;;AAEA;EACE,YAAY;EACZ,+CAA+C;EAC/C,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;AACtB","sourcesContent":[".heroSection {\n  position: relative;\n  color: var(--white);\n  width: 100%;\n  height: 46.5rem;\n  padding-top: 3.5rem;\n}\n\n.heroImage {\n  width: 100%;\n  height: 100%;\n}\n\n.projectTitle {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 8.5rem;\n}\n\n.title {\n  font-style: italic;\n  font-weight: 700;\n  font-size: 4.5rem;\n  line-height: 4.5rem;\n  text-align: center;\n}\n\n.subtitle {\n  font-style: italic;\n  font-weight: 400;\n  font-size: 3rem;\n  line-height: 3rem;\n  text-align: center;\n  padding-top: 1.25rem;\n}\n\n.cta {\n  position: absolute;\n  bottom: 5.5rem;\n}\n\n.linkButton {\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  width: 23.5rem;\n  height: 3.5rem;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  border: none;\n  background: var(--radial-gradient);\n  color: var(--white);\n  cursor: pointer;\n  transition: all 0.5s ease-in-out 0s;\n}\n\n.linkButton:hover {\n  background: var(--radial-gradient);\n}\n\n.featureSection {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 3.75rem 0;\n  text-align: center;\n  background: linear-gradient(\n    180deg,\n    rgba(232, 109, 198, 0.1) 0%,\n    rgba(232, 109, 198, 0.64248) 0.01%,\n    #bd00ff 77.6%\n  );\n}\n\n.featureSectionWrapper {\n  width: 65rem;\n  border-top: 2px solid rgba(255, 255, 255, 0.75);\n  padding: 3.75rem 0;\n}\n\n.featureTitle {\n  font-style: italic;\n  font-weight: 700;\n  font-size: 3.75rem;\n  line-height: 3.75rem;\n  text-align: center;\n  color: var(--white);\n}\n\n.featureItemContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 3.75rem;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"heroSection": "V7ZLAHZUUJFyxa0EsiNQ",
	"heroImage": "NuF0Ip0Glxo7CdLTApb7",
	"projectTitle": "iPl0xvdMIi87JktxgLQg",
	"title": "ZPMqi0uxI0Sxj34ZckWZ",
	"subtitle": "FMzHGtYUXIBQrRcof3DX",
	"cta": "n0jmvMqZoQB_x3tlKAoU",
	"linkButton": "rPx5VpX5G_Cq2QF_y9oi",
	"featureSection": "ioeQy4JmiSptpX9wQ5hz",
	"featureSectionWrapper": "vT74MgPXVo3yVnRydeQf",
	"featureTitle": "Ko_sO72rmgBiSTBza_Cp",
	"featureItemContainer": "_IGtPzs7LvTZOW2FuOh1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".n_PIzT_Vj3XW_yuI7gmD {\n  position: absolute;\n  stroke-width: 2px;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Home/components/AnimatedPath/AnimatedPath.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":[".animatedPath {\n  position: absolute;\n  stroke-width: 2px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"animatedPath": "n_PIzT_Vj3XW_yuI7gmD"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".WUhJpsfkDWyKYP4t_PkZ {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  padding: 0 16px;\n  color: var(--white);\n}\n\n.WUhJpsfkDWyKYP4t_PkZ::before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -12px;\n  left: -12px;\n  width: 24px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n}\n\n.WUhJpsfkDWyKYP4t_PkZ span {\n  display: inline-block;\n  animation: IBeeqQKHKuvNt6JDVu2Q 1s ease-in-out infinite;\n}\n\n.WUhJpsfkDWyKYP4t_PkZ span:nth-of-type(1) {\n  animation-delay: 0s;\n}\n.WUhJpsfkDWyKYP4t_PkZ span:nth-of-type(2) {\n  animation-delay: 0.1s;\n}\n.WUhJpsfkDWyKYP4t_PkZ span:nth-of-type(3) {\n  animation-delay: 0.2s;\n}\n.WUhJpsfkDWyKYP4t_PkZ span:nth-of-type(4) {\n  animation-delay: 0.3s;\n}\n.WUhJpsfkDWyKYP4t_PkZ span:nth-of-type(5) {\n  animation-delay: 0.4s;\n}\n.WUhJpsfkDWyKYP4t_PkZ span:nth-of-type(6) {\n  animation-delay: 0.5s;\n}\n.WUhJpsfkDWyKYP4t_PkZ span:nth-of-type(7) {\n  animation-delay: 0.6s;\n}\n\n@keyframes IBeeqQKHKuvNt6JDVu2Q {\n  00% {\n    transform: translateY(0em);\n  }\n  60% {\n    transform: translateY(-0.6em);\n  }\n  100% {\n    transform: translateY(0em);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Home/components/CustomCursor/CustomCursor.module.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,uDAA4C;AAC9C;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,0BAA0B;EAC5B;AACF","sourcesContent":[".cursor {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  padding: 0 16px;\n  color: var(--white);\n}\n\n.cursor::before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -12px;\n  left: -12px;\n  width: 24px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n}\n\n.cursor span {\n  display: inline-block;\n  animation: wave-text 1s ease-in-out infinite;\n}\n\n.cursor span:nth-of-type(1) {\n  animation-delay: 0s;\n}\n.cursor span:nth-of-type(2) {\n  animation-delay: 0.1s;\n}\n.cursor span:nth-of-type(3) {\n  animation-delay: 0.2s;\n}\n.cursor span:nth-of-type(4) {\n  animation-delay: 0.3s;\n}\n.cursor span:nth-of-type(5) {\n  animation-delay: 0.4s;\n}\n.cursor span:nth-of-type(6) {\n  animation-delay: 0.5s;\n}\n.cursor span:nth-of-type(7) {\n  animation-delay: 0.6s;\n}\n\n@keyframes wave-text {\n  00% {\n    transform: translateY(0em);\n  }\n  60% {\n    transform: translateY(-0.6em);\n  }\n  100% {\n    transform: translateY(0em);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cursor": "WUhJpsfkDWyKYP4t_PkZ",
	"wave-text": "IBeeqQKHKuvNt6JDVu2Q"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".zdg2m72yokju8JiiscTn {\n  position: relative;\n  width: 30rem;\n  height: 26rem;\n  overflow: hidden;\n  margin-bottom: 5.5rem;\n  text-align: center;\n  transition: 0.8s all ease-in-out;\n  border-radius: 4%;\n}\n\n.lOXz8Y_68qXjaZ2q3ygh {\n  padding-top: 24px;\n  position: relative;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 2rem;\n  line-height: 2rem;\n  color: var(--white);\n}\n\n._AyjtSIfNN_RTsde7ru2 {\n  position: absolute;\n  top: 0;\n  width: 30rem;\n  height: 10.25rem;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #0d0310 71.35%);\n  transform: rotate(-180deg);\n}\n\n.MVADUkSxdsx9ydTG1Vi8 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  transform: translateX(-10%);\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Home/components/FeatureItem/FeatureItem.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,gBAAgB;EAChB,8EAA8E;EAC9E,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,2BAA2B;AAC7B","sourcesContent":[".featureItem {\n  position: relative;\n  width: 30rem;\n  height: 26rem;\n  overflow: hidden;\n  margin-bottom: 5.5rem;\n  text-align: center;\n  transition: 0.8s all ease-in-out;\n  border-radius: 4%;\n}\n\n.featureTitle {\n  padding-top: 24px;\n  position: relative;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 2rem;\n  line-height: 2rem;\n  color: var(--white);\n}\n\n.featureTitleBg {\n  position: absolute;\n  top: 0;\n  width: 30rem;\n  height: 10.25rem;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #0d0310 71.35%);\n  transform: rotate(-180deg);\n}\n\n.featureImage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  transform: translateX(-10%);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"featureItem": "zdg2m72yokju8JiiscTn",
	"featureTitle": "lOXz8Y_68qXjaZ2q3ygh",
	"featureTitleBg": "_AyjtSIfNN_RTsde7ru2",
	"featureImage": "MVADUkSxdsx9ydTG1Vi8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home_Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/classnames/bind.js
var bind = __webpack_require__(7166);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);
;// CONCATENATED MODULE: ./src/assets/images/hero.jpg
const hero_namespaceObject = __webpack_require__.p + "51c4d1909bc9708437f3.jpg";
;// CONCATENATED MODULE: ./src/assets/images/hero_small.webp
const hero_small_namespaceObject = __webpack_require__.p + "27b093e39b713eb40f0e.webp";
;// CONCATENATED MODULE: ./src/assets/images/hero_medium.webp
const hero_medium_namespaceObject = __webpack_require__.p + "266e80c75197ef44caa6.webp";
;// CONCATENATED MODULE: ./src/assets/images/hero_large.webp
const hero_large_namespaceObject = __webpack_require__.p + "2d288f5cfa338bab8923.webp";
;// CONCATENATED MODULE: ./src/assets/images/trending.webm
const trending_namespaceObject = __webpack_require__.p + "c0fdcdccb18eec4cf12d.webm";
;// CONCATENATED MODULE: ./src/assets/images/find.webm
const find_namespaceObject = __webpack_require__.p + "5918b14da8789ff2c0e1.webm";
;// CONCATENATED MODULE: ./src/assets/images/free.webm
const free_namespaceObject = __webpack_require__.p + "f6e124e0dc8ab6d105fe.webm";
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/components/FeatureItem/FeatureItem.module.css
var FeatureItem_module = __webpack_require__(4651);
;// CONCATENATED MODULE: ./src/pages/Home/components/FeatureItem/FeatureItem.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(FeatureItem_module/* default */.Z, options);




       /* harmony default export */ const FeatureItem_FeatureItem_module = (FeatureItem_module/* default */.Z && FeatureItem_module/* default */.Z.locals ? FeatureItem_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/Home/components/FeatureItem/FeatureItem.tsx


const FeatureItem = ({ title, imageSrc }) => {
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ className: FeatureItem_FeatureItem_module.featureItem }, { children: [(0,jsx_runtime.jsx)("video", { autoPlay: true, loop: true, muted: true, className: FeatureItem_FeatureItem_module.featureImage, src: imageSrc }), (0,jsx_runtime.jsx)("div", { className: FeatureItem_FeatureItem_module.featureTitleBg }), (0,jsx_runtime.jsx)("h4", Object.assign({ className: FeatureItem_FeatureItem_module.featureTitle }, { children: title }))] })));
};
/* harmony default export */ const FeatureItem_FeatureItem = (FeatureItem);

;// CONCATENATED MODULE: ./src/pages/Home/hooks/useMousePosition.tsx

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = (0,react.useState)({
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        offsetX: 0,
        offsetY: 0
    });
    const updateMousePosition = (e) => {
        const { clientX, clientY, pageX, pageY, offsetX, offsetY } = e;
        setMousePosition({
            clientX,
            clientY,
            pageX,
            pageY,
            offsetX,
            offsetY
        });
    };
    (0,react.useEffect)(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};
/* harmony default export */ const hooks_useMousePosition = (useMousePosition);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/components/CustomCursor/CustomCursor.module.css
var CustomCursor_module = __webpack_require__(1663);
;// CONCATENATED MODULE: ./src/pages/Home/components/CustomCursor/CustomCursor.module.css

      
      
      
      
      
      
      
      
      

var CustomCursor_module_options = {};

CustomCursor_module_options.styleTagTransform = (styleTagTransform_default());
CustomCursor_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      CustomCursor_module_options.insert = insertBySelector_default().bind(null, "head");
    
CustomCursor_module_options.domAPI = (styleDomAPI_default());
CustomCursor_module_options.insertStyleElement = (insertStyleElement_default());

var CustomCursor_module_update = injectStylesIntoStyleTag_default()(CustomCursor_module/* default */.Z, CustomCursor_module_options);




       /* harmony default export */ const CustomCursor_CustomCursor_module = (CustomCursor_module/* default */.Z && CustomCursor_module/* default */.Z.locals ? CustomCursor_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/Home/components/CustomCursor/CustomCursor.tsx




const CustomCursor = ({ text = '' }) => {
    const [...cursorTextChars] = text;
    const mousePosition = hooks_useMousePosition();
    const cursorRef = (0,react.useRef)(null);
    (0,react.useEffect)(() => {
        if (cursorRef.current) {
            const { pageX, pageY } = mousePosition;
            cursorRef.current.style.transform = `translate(${pageX}px, ${pageY}px)`;
        }
    }, [mousePosition]);
    return ((0,jsx_runtime.jsx)("div", Object.assign({ ref: cursorRef, className: CustomCursor_CustomCursor_module.cursor }, { children: cursorTextChars.map((char, index) => ((0,jsx_runtime.jsx)("span", Object.assign({ className: CustomCursor_CustomCursor_module.character }, { children: char }), index))) })));
};
/* harmony default export */ const CustomCursor_CustomCursor = (CustomCursor);

;// CONCATENATED MODULE: ./src/utils/number.ts
const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

;// CONCATENATED MODULE: ./src/pages/Home/hooks/useScrollEvent.tsx

const useScrollEvent = (onScroll) => {
    (0,react.useEffect)(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
};
/* harmony default export */ const hooks_useScrollEvent = (useScrollEvent);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/components/AnimatedPath/AnimatedPath.module.css
var AnimatedPath_module = __webpack_require__(4868);
;// CONCATENATED MODULE: ./src/pages/Home/components/AnimatedPath/AnimatedPath.module.css

      
      
      
      
      
      
      
      
      

var AnimatedPath_module_options = {};

AnimatedPath_module_options.styleTagTransform = (styleTagTransform_default());
AnimatedPath_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      AnimatedPath_module_options.insert = insertBySelector_default().bind(null, "head");
    
AnimatedPath_module_options.domAPI = (styleDomAPI_default());
AnimatedPath_module_options.insertStyleElement = (insertStyleElement_default());

var AnimatedPath_module_update = injectStylesIntoStyleTag_default()(AnimatedPath_module/* default */.Z, AnimatedPath_module_options);




       /* harmony default export */ const AnimatedPath_AnimatedPath_module = (AnimatedPath_module/* default */.Z && AnimatedPath_module/* default */.Z.locals ? AnimatedPath_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/Home/components/AnimatedPath/AnimatedPath.tsx





const TOP_PERCENTAGE_OF_DRAW_POINT = 0.8;
const AnimatedPath = ({ wrapperRef }) => {
    const pathRef = (0,react.useRef)(null);
    const [strokeOffset, setStrokeOffset] = (0,react.useState)(0);
    const drawPath = () => {
        const wrapper = wrapperRef.current;
        const path = pathRef.current;
        if (!wrapper || !path) {
            return;
        }
        const drawPointY = window.scrollY + window.innerHeight * TOP_PERCENTAGE_OF_DRAW_POINT;
        const scrollRatio = (drawPointY - wrapper.offsetTop) / wrapper.offsetHeight;
        const pathLength = pathRef.current.getTotalLength();
        const currentScrollOffset = pathLength - pathLength * scrollRatio;
        setStrokeOffset(clamp(currentScrollOffset, 0, pathLength));
    };
    hooks_useScrollEvent(drawPath);
    return ((0,jsx_runtime.jsx)("svg", Object.assign({ className: AnimatedPath_AnimatedPath_module.animatedPath, width: "924", height: "1691", viewBox: "0 0 924 1691", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0,jsx_runtime.jsx)("path", { ref: pathRef, strokeDasharray: pathRef.current ? pathRef.current.getTotalLength() : 0, strokeDashoffset: strokeOffset, d: "M694.643 0C694.643 89.6504 694.643 274.548 694.643 296.935C694.643 324.918 720.609 351.347 767.133 331.655C813.656 311.963 823.393 306.781 827.721 291.234C832.049 275.688 830.967 268.433 829.344 263.251C827.721 258.069 825.016 254.441 816.361 256.514C807.705 258.587 802.836 259.105 801.214 263.251C799.591 267.397 801.214 271.024 803.918 273.097C805.181 274.306 809.004 275.999 814.197 273.097C820.688 269.47 821.229 268.433 823.934 264.806C826.639 261.178 827.721 239.932 827.721 227.494C827.721 215.057 826.098 202.102 825.016 197.438C823.934 192.774 822.311 189.665 825.016 188.629C827.721 187.592 831.508 188.11 837.999 192.256C844.491 196.402 862.343 205.73 867.212 210.394C872.08 215.057 874.785 217.648 872.08 218.685C869.376 219.721 845.573 205.211 841.786 202.62C837.999 200.029 833.131 197.438 832.049 197.438C830.967 197.438 833.672 202.102 839.622 206.248C845.573 210.394 869.917 225.94 872.08 227.494C874.244 229.049 874.785 254.441 872.08 266.36C869.376 278.279 865.048 286.57 859.638 290.198C854.228 293.825 847.196 294.344 845.573 291.234C843.95 288.125 843.95 288.125 842.868 283.979C841.786 279.834 845.032 277.243 849.36 277.243C853.688 277.243 861.802 275.17 876.408 283.979C891.014 292.789 901.834 303.671 905.621 315.072C909.407 326.473 912.653 372.075 889.932 396.949C867.212 421.823 782.28 472.608 657.316 461.207C532.352 449.807 499.353 502.146 458.24 521.32C417.126 540.494 385.209 574.177 332.194 576.25C279.179 578.323 230.492 567.959 213.181 563.295C195.87 558.631 189.378 560.704 186.673 560.704C183.968 560.704 175.854 564.331 173.69 568.477C171.526 572.623 170.444 580.914 173.149 581.951C175.854 582.987 176.936 584.023 181.264 582.987C185.591 581.951 190.46 575.732 191.542 569.514C192.624 563.295 193.165 555.522 192.083 548.267C191.001 541.012 187.755 523.911 186.132 516.138C184.509 508.365 181.805 496.446 180.182 495.409C178.559 494.373 171.526 502.146 159.625 502.664C147.724 503.183 129.872 501.628 133.117 499.555C136.363 497.482 152.592 499.555 160.707 498.519C168.821 497.482 178.559 493.337 178.018 491.782C177.477 490.227 167.199 495.409 156.92 495.928C146.642 496.446 132.036 493.855 129.331 495.928C126.626 498 133.658 508.365 135.281 515.62C136.904 522.875 147.724 557.595 147.724 565.886C147.724 574.177 139.068 568.995 130.954 575.732C122.839 582.469 120.134 590.76 124.462 592.833C128.79 594.906 142.855 590.242 146.101 584.023C149.346 577.805 148.806 576.768 148.806 573.141C148.806 569.514 141.773 567.441 132.036 570.032C122.298 572.623 100.118 580.396 92.0038 586.096C83.8893 591.797 77.9387 596.979 77.3977 602.161C76.8567 607.343 79.0206 613.043 80.6435 614.08C82.2664 615.116 88.758 612.525 89.8399 610.452C90.9218 608.379 95.7905 604.234 95.2496 596.979C94.7086 589.724 94.1678 584.542 92.0038 577.287C89.8399 570.032 61.1686 529.611 57.9228 527.538C54.6769 525.466 55.7589 532.721 52.5131 534.793C49.2673 536.866 48.1853 539.975 36.284 544.121C24.3827 548.267 16.2682 546.194 13.5633 548.267C10.8585 550.34 16.8091 558.113 20.5959 563.295C24.3827 568.477 58.4637 613.561 59.0047 616.671C59.5457 619.78 53.054 613.043 41.1527 616.671C29.2514 620.298 29.2514 623.407 28.7105 628.59C28.1695 633.772 37.9069 635.326 41.1527 635.326C44.3985 635.326 54.677 631.181 56.2999 628.59C57.9228 625.998 55.2179 621.335 48.1853 620.816C41.1527 620.298 25.4646 624.962 18.4321 631.699C11.3995 638.436 -14.0261 676.783 13.5633 708.912C41.1527 741.041 123.38 797.526 317.588 795.453C511.795 793.381 602.678 830.692 648.66 848.311C694.643 865.93 713.577 857.12 726.019 863.857C738.461 870.594 746.576 877.849 743.33 883.549C740.084 889.249 728.183 883.549 723.314 878.367C718.445 873.185 721.15 868.521 721.15 866.966C721.15 865.412 727.642 859.711 733.593 861.784C739.543 863.857 746.035 869.557 747.658 875.776C749.281 881.995 747.658 886.658 749.822 885.104C751.985 883.549 781.198 814.109 783.362 812.036C785.525 809.963 786.607 807.89 787.689 809.445C788.771 811 799.591 824.991 808.787 829.655C817.984 834.319 827.721 831.728 829.344 833.283C830.967 834.837 807.164 886.658 799.05 894.432C790.935 902.205 782.821 907.905 774.165 904.796C765.51 901.687 766.592 901.168 765.51 897.023C764.428 892.877 773.624 888.213 780.657 889.249C787.689 890.286 790.394 889.249 804.459 897.023C818.525 904.796 833.131 917.233 835.295 921.379C837.458 925.524 838.54 929.152 838.54 931.743C838.54 934.334 827.721 936.925 820.147 934.334C812.574 931.743 807.164 926.561 808.246 923.97C809.328 921.379 812.574 917.751 817.984 918.787C823.393 919.824 825.962 919.306 832.049 923.97C838.136 928.633 840.163 933.297 842.327 931.743C844.491 930.188 887.769 880.44 891.014 879.922C894.26 879.403 894.801 890.286 899.129 894.432C903.457 898.577 907.784 906.35 920.768 912.051C933.751 917.751 886.146 950.917 879.654 955.58C873.162 960.244 864.507 967.499 856.933 965.945C849.36 964.39 840.163 961.799 842.327 957.653C844.491 953.508 850.983 945.216 860.72 950.398C870.458 955.58 876.949 965.945 882.9 976.827C888.85 987.709 898.047 1023.98 866.671 1059.22C835.295 1094.46 607.006 1067 481.501 1132.29C355.996 1197.58 351.128 1225.05 335.981 1247.33C320.834 1269.62 320.293 1284.64 286.752 1293.97C253.212 1303.3 231.574 1286.72 208.853 1247.33C186.132 1207.95 175.854 1203.8 154.215 1204.32C132.576 1204.84 133.658 1206.39 128.79 1211.06C123.921 1215.72 129.872 1223.5 138.527 1221.94C147.183 1220.39 150.428 1215.72 150.969 1208.47C151.51 1201.21 152.592 1188.78 147.724 1171.67C142.855 1154.57 143.937 1153.02 141.232 1151.46C138.527 1149.91 93.6267 1141.62 94.1677 1136.95C94.7087 1132.29 132.576 1146.28 136.904 1144.73C141.232 1143.17 140.691 1141.1 128.79 1136.95C116.888 1132.81 86.5941 1120.89 84.9712 1127.11C83.3483 1133.33 102.823 1170.12 103.364 1183.59C103.905 1197.07 110.938 1204.32 94.1677 1214.69C77.3977 1225.05 78.4796 1202.25 84.9712 1200.18C91.4629 1198.1 99.5774 1192.4 110.397 1197.58C121.216 1202.77 116.347 1228.16 103.364 1247.33C90.3809 1266.51 78.4796 1263.92 69.8241 1282.05C60.2819 1302.05 82.8074 1300.19 76.3157 1316.77C74.5717 1323.51 42.0183 1350.77 49.8083 1372.74C59.5457 1400.21 76.8567 1528.72 302.441 1544.27C528.024 1559.81 648.119 1589.87 669.217 1618.89C690.315 1647.91 685.987 1642.73 684.905 1652.57C683.823 1662.42 680.578 1663.97 682.741 1668.64C684.905 1673.3 691.397 1684.7 704.38 1686.78C717.363 1688.85 719.527 1691.96 722.773 1688.33C726.019 1684.7 720.609 1680.04 727.101 1675.38C733.593 1670.71 746.576 1661.9 754.149 1657.24C761.723 1652.57 766.592 1648.43 766.051 1642.73C765.51 1637.03 760.1 1631.85 761.723 1630.81C763.346 1629.77 770.378 1633.92 773.083 1630.81C775.788 1627.7 773.083 1615.26 775.788 1612.15C778.493 1609.04 784.444 1604.38 783.362 1600.75C782.28 1597.13 778.493 1592.98 775.788 1587.8C773.083 1582.62 770.378 1567.07 773.083 1561.37C775.788 1555.67 767.133 1546.34 756.854 1547.9C746.576 1549.45 727.642 1552.04 722.773 1559.3C717.904 1566.55 717.363 1568.62 720.068 1571.73C722.773 1574.84 748.74 1568.62 755.231 1570.18C761.723 1571.73 765.51 1575.36 761.723 1576.4C757.936 1577.43 740.084 1576.4 730.347 1576.4C720.609 1576.4 711.954 1578.99 710.872 1581.58C709.79 1584.17 702.757 1589.35 704.921 1592.98C707.085 1596.61 716.822 1590.91 723.855 1591.94C730.888 1592.98 749.281 1601.79 747.117 1605.42C744.953 1609.04 732.511 1595.05 724.937 1595.05C717.363 1595.05 709.249 1594.02 704.921 1599.72C700.593 1605.42 696.807 1610.6 703.298 1612.15C709.79 1613.71 729.265 1620.44 732.511 1625.11C735.756 1629.77 740.084 1627.18 739.543 1625.63C739.002 1624.07 728.724 1616.3 720.609 1614.74C712.495 1613.19 702.757 1612.67 700.052 1616.82C697.348 1620.96 694.643 1627.7 698.971 1628.74C703.298 1629.77 722.773 1628.74 723.855 1634.44C724.937 1640.14 692.479 1638.58 688.692 1629.77C684.905 1620.96 687.61 1600.75 692.479 1590.91C697.348 1581.06 719.527 1552.04 728.724 1544.27C737.92 1536.49 739.543 1547.38 742.789 1544.27C746.035 1541.16 748.74 1525.09 746.576 1522.5C744.412 1519.91 742.789 1520.95 728.724 1511.1C714.659 1501.26 707.626 1490.37 704.921 1476.38C702.216 1462.39 701.675 1454.1 706.544 1439.59C711.413 1425.08 723.314 1411.61 731.97 1405.91C740.625 1400.21 753.067 1393.99 765.51 1394.5C777.952 1395.02 789.312 1394.5 809.869 1405.91C830.426 1417.31 837.999 1435.96 840.163 1446.84C842.327 1457.73 842.327 1466.54 838.54 1476.38C834.754 1486.23 830.426 1498.15 821.229 1506.96C812.033 1515.77 801.214 1521.98 788.771 1524.06C776.329 1526.13 766.051 1524.06 763.346 1525.09C760.641 1526.13 761.182 1533.39 760.641 1535.98C760.1 1538.57 762.264 1540.64 762.805 1540.12C763.346 1539.6 764.969 1540.64 764.969 1530.79C764.969 1520.95 764.428 1517.84 766.051 1517.84C767.674 1517.84 783.362 1516.28 790.394 1513.69C797.427 1511.1 808.246 1506.44 812.574 1501.77C816.902 1497.11 823.934 1488.82 826.639 1480.53C829.344 1472.24 831.508 1462.91 830.426 1455.65C829.344 1448.4 825.557 1437.52 818.525 1427.67C811.492 1417.82 797.427 1409.53 784.444 1405.91C771.46 1402.28 762.264 1402.8 750.904 1407.98C739.543 1413.16 735.756 1414.72 726.56 1425.08C717.363 1435.44 713.577 1449.44 713.036 1457.21C712.495 1464.98 715.741 1478.97 717.904 1483.12C720.068 1487.26 725.478 1494.52 733.593 1500.74C740.084 1505.71 746.756 1509.72 749.281 1511.1", stroke: "white" }) })));
};
/* harmony default export */ const AnimatedPath_AnimatedPath = (AnimatedPath);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/Home.module.css
var Home_module = __webpack_require__(3760);
;// CONCATENATED MODULE: ./src/pages/Home/Home.module.css

      
      
      
      
      
      
      
      
      

var Home_module_options = {};

Home_module_options.styleTagTransform = (styleTagTransform_default());
Home_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Home_module_options.insert = insertBySelector_default().bind(null, "head");
    
Home_module_options.domAPI = (styleDomAPI_default());
Home_module_options.insertStyleElement = (insertStyleElement_default());

var Home_module_update = injectStylesIntoStyleTag_default()(Home_module/* default */.Z, Home_module_options);




       /* harmony default export */ const Home_Home_module = (Home_module/* default */.Z && Home_module/* default */.Z.locals ? Home_module/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/Home/Home.tsx















const heroImageSrcSet = `${hero_small_namespaceObject} 500w, ${hero_medium_namespaceObject} 1000w, ${hero_large_namespaceObject} 1500w`;
const Home = () => {
    const wrapperRef = (0,react.useRef)(null);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)("section", Object.assign({ className: Home_Home_module.heroSection }, { children: [(0,jsx_runtime.jsxs)("picture", { children: [(0,jsx_runtime.jsx)("source", { type: "image/webp", srcSet: heroImageSrcSet }), (0,jsx_runtime.jsx)("img", { className: Home_Home_module.heroImage, src: hero_namespaceObject, fetchPriority: "high", alt: "hero image" })] }), (0,jsx_runtime.jsxs)("div", Object.assign({ className: Home_Home_module.projectTitle }, { children: [(0,jsx_runtime.jsx)("h1", Object.assign({ className: Home_Home_module.title }, { children: "Memegle" })), (0,jsx_runtime.jsx)("h3", Object.assign({ className: Home_Home_module.subtitle }, { children: "gif search engine for you" }))] })), (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, Object.assign({ to: "/search" }, { children: (0,jsx_runtime.jsx)("button", Object.assign({ className: bind_default()(Home_Home_module.cta, Home_Home_module.linkButton) }, { children: "start search" })) }))] })), (0,jsx_runtime.jsxs)("section", Object.assign({ ref: wrapperRef, className: Home_Home_module.featureSection }, { children: [(0,jsx_runtime.jsx)(AnimatedPath_AnimatedPath, { wrapperRef: wrapperRef }), (0,jsx_runtime.jsxs)("div", Object.assign({ className: Home_Home_module.featureSectionWrapper }, { children: [(0,jsx_runtime.jsx)("h2", Object.assign({ className: Home_Home_module.featureTitle }, { children: "Features" })), (0,jsx_runtime.jsxs)("div", Object.assign({ className: Home_Home_module.featureItemContainer }, { children: [(0,jsx_runtime.jsx)(FeatureItem_FeatureItem, { title: "See trending gif", imageSrc: trending_namespaceObject }), (0,jsx_runtime.jsx)(FeatureItem_FeatureItem, { title: "Find gif for free", imageSrc: find_namespaceObject }), (0,jsx_runtime.jsx)(FeatureItem_FeatureItem, { title: "Free for everyone", imageSrc: free_namespaceObject })] })), (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, Object.assign({ to: "/search" }, { children: (0,jsx_runtime.jsx)("button", Object.assign({ className: Home_Home_module.linkButton }, { children: "start search" })) }))] }))] })), (0,jsx_runtime.jsx)(CustomCursor_CustomCursor, { text: "memegle" })] }));
};
/* harmony default export */ const Home_Home = (Home);


/***/ })

}]);
//# sourceMappingURL=526.bundle.js.map