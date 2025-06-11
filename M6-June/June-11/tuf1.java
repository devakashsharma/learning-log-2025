// Given an array, we have to find the largest element in the array.

public class tuf1 {
    static int largest(int arr[]) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }
    public static void main(String[] args) {
        int arr[] = {100, 2, 3, 4, 5, 6, 7, 8, 9};
        int max = largest(arr); 
        System.out.println("The largest element in the array is: " + max);
    }
}
