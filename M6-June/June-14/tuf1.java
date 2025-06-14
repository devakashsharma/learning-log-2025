public class tuf1 {
    static int findMissing(int[] arr) {
        int n = arr.length;
        int total = (n + 1) * (n + 2) / 2; // Sum of first n natural numbers
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return total - sum; // The missing number is the difference
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5}; // Example array with a missing number
        System.out.println("The missing number is: " + findMissing(arr));
    }
}