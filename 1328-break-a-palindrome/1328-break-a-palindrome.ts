function breakPalindrome(palindrome: string): string {
    const palinSplit :string[] = palindrome.split('')
    const palinSplitLen :number = palinSplit.length
    
    if(palinSplitLen == 1) return '' //case1

    for(let i=0; i< Math.floor(palinSplitLen/2); i++){
        if(palinSplit[i] =='a'){
            continue
        }
        palinSplit.splice(i, 1, 'a')
        return palinSplit.join('') //case2
    }

    palinSplit.splice(palinSplitLen-1, 1, 'b')
    return palinSplit.join('') //case3
};