!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("1WSnx");form=document.querySelector(".feedback-form");var l="feedback-form-state",i=JSON.parse(localStorage.getItem(l))||{};console.log(i),form.addEventListener("input",e(a).throttle((function(e){i[e.target.name]=e.target.value.trim(),localStorage.setItem(l,JSON.stringify(i))}),500)),function(){if(i){var e=form.elements,t=e.email,r=e.message;t.value=i.email||"",r.value=i.message||""}}(),form.addEventListener("submit",(function(e){e.preventDefault(),console.log(i),e.currentTarget.reset(),localStorage.removeItem(l),i={}}))}();
//# sourceMappingURL=03-feedback.c1018388.js.map