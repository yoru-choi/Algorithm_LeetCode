function minCost(colors: string, neededTime: number[]): number {
  const colorsArr: string[] = colors.split(""); // text to arr
  const map = new Map(); 
  let dupNum = 1;  //duplication number

  const resTimeArr: number[] = colorsArr.map((v, i) => {
    const befColor = map.get(i - 1);
    const nextColor = colors[i + 1];
    if (befColor === v) {
      dupNum += 1;
      if (nextColor !== v) {
        map.set(i, v);
        const res: number[] = new Array(dupNum)
          .fill(0)
          .map((dupV, dupI) => {
            return neededTime[i - dupI];
          })
          .sort((a, b) => a - b);
        res.pop(); // biggest number pop
        dupNum = 1;
        return res.reduce((a, b) => a + b, 0);
      }
    }
    map.set(i, v);
    return 0;
  });
  return resTimeArr.reduce((a, b) => a + b, 0);
}