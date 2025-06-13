public class tuf1 {
    
    // linearSearch method to find the k-th element in an array
    static int linearSearch(int[] arr, int k) {
        if (arr == null || arr.length == 0) {
            return -1; // Return -1 if the array is empty or null
        }

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == k) {
                return i; // Return the index if the element is found
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int k = 3;
        System.out.println(linearSearch(arr, k));
    }
}