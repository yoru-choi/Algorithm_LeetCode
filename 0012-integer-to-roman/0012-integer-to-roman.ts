type RomanGuideType ={
    rom:string;
    val:number;
}
function intToRoman(num: number): string {
    const guide:RomanGuideType[] =[
        {rom:'M', val:1000},
        {rom:'CM', val:900},
        {rom:'D', val:500},
        {rom:'CD', val:400},
        {rom:'C', val:100},
        {rom:'XC', val:90},
        {rom:'L', val:50},
        {rom:'XL', val:40},
        {rom:'X', val:10},
        {rom:'IX', val:9},
        {rom:'V', val:5},
        {rom:'IV', val:4},
        {rom:'I', val:1},
    ]
    return guide.reduce((pre, cur)=>{
        const floorNum:number = Math.floor(num/cur.val)
        if(floorNum>= 1){ // number is an integer @case1
            num = num- floorNum*cur.val
            return pre + cur.rom.repeat(floorNum)
        }
        return pre //number is not an integer @case2
    }, "")
};