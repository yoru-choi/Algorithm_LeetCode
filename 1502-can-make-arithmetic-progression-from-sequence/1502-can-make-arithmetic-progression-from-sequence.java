class Solution {
    public boolean canMakeArithmeticProgression(int[] arr) {
        Arrays.sort(arr); //do sort 
        int diff = arr[1]-arr[0]; //find diff
        for(int i = 1; i<arr.length; i++){
            if((arr[i]-arr[i-1])!= diff) //find false
                return false;
        }
        return true; // return
    }
}