
function reverseWords(s: string): string {
    const strTrimmed:string = s.trim()
    if(strTrimmed.length <=0) return ''
    const strLastIndex:number = strTrimmed.lastIndexOf(' ');
    const getWord:string = strTrimmed.substring(strLastIndex)
    const remainSentence:string = strTrimmed.substring(0, strLastIndex)
    return (getWord+' ' + (remainSentence ? reverseWords(remainSentence) : '' )).trim()
 };