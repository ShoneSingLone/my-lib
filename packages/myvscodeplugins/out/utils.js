"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
function debounce(fn, timeout, ctx) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(ctx, ...args);
        }, timeout);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=utils.js.map