public class tuf1 {
    static int consecutive(int arr[]) {
        if (arr == null || arr.length == 0) {
            return 0; // Handle empty or null array
        }
        int count = 0, max = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 1) {
                count++;
            } else {
                count = 0;
            }
            max = Math.max(max, count);
        }
        
        return max;
    }
    public static void main(String[] args) {
        int arr[] = {1, 1, 0, 1, 1, 1, 0, 1};
        System.out.println("Maximum consecutive ones: " + consecutive(arr));
    }
}