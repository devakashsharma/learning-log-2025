// Left Rotate the Array by One

public class tuf5 {
    static void leftRotate(int arr[]) {
        if (arr.length == 0) return; // If the array is empty, do nothing

        int firstElement = arr[0]; // Store the first element
        for (int i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]; // Shift elements to the left
        }
        arr[arr.length - 1] = firstElement; // Place the first element at the end
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        leftRotate(arr);

        System.out.print("Array after left rotation: ");
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
    
}
