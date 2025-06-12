public class tuf2 {
    // Move all Zeros to the end of the array
    static void moveZeros(int[] arr) {
        if (arr == null || arr.length == 0) return; // If the array is null or empty, do nothing
        int n = arr.length;
        int count = 0; // Count of non-zero elements
        // Traverse the array and move non-zero elements to the front
        for (int i = 0; i < n; i++) {
            if (arr[i] != 0) {
                arr[count++] = arr[i]; // Move non-zero element to the front
            }
        }
        // Fill the remaining positions with zeros
        while (count < n) {
            arr[count++] = 0; // Fill with zeros
        }
    }

    public static void main(String[] args) {
        int arr[] = {0, 1, 0, 3, 12};
        moveZeros(arr);

        System.out.print("Array after moving zeros: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}
