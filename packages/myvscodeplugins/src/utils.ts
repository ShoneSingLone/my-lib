export function debounce(fn: Function, timeout: number, ctx?: any) {
  let timer: any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(ctx, ...args);
    }, timeout);
  };
}
