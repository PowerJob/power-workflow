export  class FlowUtil {
  debounce = (func, timer) => {
    let timeout = null;
    return () => {
      if (!timeout) {
        timeout = setTimeout(func, timer);
        return;
      };
      clearTimeout(timeout);
      timeout = setTimeout(func, timer);
    }
  }

  throttle = () => { }
}