function generateParenthesis(n: number): string[] {

    const combinations: string[] = []
    const recursion =(l:number, r:number, s:string)=>{
        if(s.length == n*2){
            combinations.push(s)
            return;
        }
        if(l<n)recursion(l+1, r, s+'(')    
        if(r<l)recursion(l, r+1, s+')')
    }
    recursion(0, 0, '')
    return combinations;
}
