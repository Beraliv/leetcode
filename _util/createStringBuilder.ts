const createStringBuilder = () => {
  let arr: string[] = [];

  return {
    toString() {
      return arr.join("");
    },
    append(str: string) {
      arr.push(str);
    },
  };
};

export { createStringBuilder };
