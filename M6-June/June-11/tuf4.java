public class tuf4 {
    static int removeDuplicates(int arr[]) {
        if (arr.length == 0) return 0; // If the array is empty, return 0

        int n = arr.length;
        int j = 0; // Index of the next unique element

        for (int i = 1; i < n; i++) {
            if (arr[i] != arr[j]) { // If current element is different from last unique element
                j++;
                arr[j] = arr[i]; // Update the next unique position
            }
        }

        return j + 1; // Return the count of unique elements
    }
    public static void main(String[] args) {
        int arr[] = {1, 1, 2, 2, 3, 4, 4, 5, 5};
        int uniqueCount = removeDuplicates(arr);
        
        System.out.println("The number of unique elements in the array is: " + uniqueCount);
        System.out.print("The unique elements are: ");
        for (int i = 0; i < uniqueCount; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
