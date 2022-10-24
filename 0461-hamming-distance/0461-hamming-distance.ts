function hammingDistance(x: number, y: number): number {
    return (x^y).toString(2).split('').reduce((pre, cur)=>pre+=parseInt(cur), 0)
};