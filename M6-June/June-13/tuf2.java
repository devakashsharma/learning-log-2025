import java.util.Set;

public class tuf2 {
    // find the union of two arrays
    static int[] union(int[] arr1, int[] arr2) {
        if (arr1 == null || arr2 == null) {
            return new int[0]; // Return an empty array if either input is null
        }

        Set<Integer> set = new java.util.HashSet<>();
        for (int num : arr1) {
            set.add(num); // Add elements from the first array to the set
        }

        for (int num : arr2) {
            set.add(num); // Add elements from the second array to the set
        }

        // Convert the set back to an array
        int[] result = new int[set.size()];
        int index = 0;
        for (int num : set) {
            result[index++] = num; // Fill the result array with unique elements
        }
        return result; // Return the union of the two arrays
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {4, 5, 6, 7, 8};
        int[] result = union(arr1, arr2);
        
        // Print the result
        for (int num : result) {
            System.out.print(num + " ");
        }
    }
}
