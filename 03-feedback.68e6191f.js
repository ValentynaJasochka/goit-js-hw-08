function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form");let i=JSON.parse(localStorage.getItem("feedback-form-state"))||{};console.log(i),l.addEventListener("input",e(a).throttle((function(e){i[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500)),function(){if(i){const{email:e,message:t}=l.elements;e.value=i.email||"",t.value=i.message||""}}(),l.addEventListener("submit",(function(e){e.preventDefault(),console.log(i),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),i={}}));
//# sourceMappingURL=03-feedback.68e6191f.js.map
