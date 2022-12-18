function dailyTemperatures(temperatures: number[]): number[] {

    const temLen:number =temperatures.length
    return temperatures.map((v, i)=>{
        let num:number = 0;
        for(let j=i+1; j<temLen; j++ ){
            if(v < temperatures[j]){
                num = j - i
                break;
            }
        }
        return num;
    })
};