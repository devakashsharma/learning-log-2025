public class tuf6 {

    // Function to reverse a part of the array
    static void reverse(int arr[], int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Right Rotate the Array by k positions
    static void rotateArr(int arr[], int k) {
        if (arr == null || arr.length == 0) return; // If the array is null or empty, do nothing
        if (arr.length == 0) return; // If the array is empty, do nothing
        k = k % arr.length; // Handle cases where d is greater than the array length
        int n = arr.length;
        
        // Reverse the entire array
        reverse(arr, 0, n - 1);
        // Reverse the first k elements
        reverse(arr, 0, k - 1);
        // Reverse the remaining n-k elements
        reverse(arr, k, n - 1);

    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        rotateArr(arr, 2);

        System.out.print("Array after right rotation: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
    
}
