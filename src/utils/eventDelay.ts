const debounce = (callback: (args: any) => any, delay = 0) => {
  let timerID: ReturnType<typeof setTimeout>;

  return (args: any) => {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => callback(args), delay);
  };
};

export { debounce };
