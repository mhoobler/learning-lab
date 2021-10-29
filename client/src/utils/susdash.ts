export const debounce = (func: (a: unknown) => unknown, time: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (args: unknown) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, time);
  };
};
