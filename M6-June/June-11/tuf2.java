// Find Second Smallest and Second Largest Element in an array

public class tuf2 {
    
    static int secondLargest(int arr[]) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > first) {
                second = first;
                first = arr[i];
            } else if (arr[i] > second && arr[i] != first) {
                second = arr[i];
            }
        }

        return second;
    }

    static int secondSmallest(int arr[]) {
        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < first) {
                second = first;
                first = arr[i];
            } else if (arr[i] < second && arr[i] != first) {
                second = arr[i];
            }
        }
        return second;
    }

    public static void main(String[] args) {
        int arr[] = {100, 2, 3, 4, 5, 6, 7, 8, 9};
        int secondLargestElement = secondLargest(arr);
        int secondSmallestElement = secondSmallest(arr);
        
        System.out.println("The second largest element in the array is: " + secondLargestElement);
        System.out.println("The second smallest element in the array is: " + secondSmallestElement);
    }
}
