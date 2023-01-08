const getMaxPointInLine = (points: number[][]) => {
  const map = new Map();
  let res = [];
  while (points.length > 1) {
    const one: number[] = points.pop() || [];
    points.forEach((point: number[]) => {
      const slope = (point[0] - one[0]) / (point[1] - one[1]);

      console.log(`${slope}`);
      if (map.has(slope)) {
        // console.log(map.get(slope));
        map.set(slope, map.get(slope) + 1);
      } else {
        map.set(slope, 1);
      }
    });
    res.push(...map.values());
    map.clear();
  }
  return Math.max(...Object.values(res))+1;
};

const maxPoints = (points: number[][]) => {
  if (points.length < 2) return points.length;
  return getMaxPointInLine(points) ;
};