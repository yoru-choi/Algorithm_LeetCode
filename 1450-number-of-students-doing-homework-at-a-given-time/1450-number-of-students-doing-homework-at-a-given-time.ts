function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    return startTime.filter((v, i)=> v<= queryTime && queryTime <= endTime[i]).length
 };