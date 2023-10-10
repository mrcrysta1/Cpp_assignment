#include <iostream>

int main() {
    int myArray[5] = {1, 2, 3, 4, 5};
    int indexToDelete = 2; // Index of the element you want to delete

    if (indexToDelete >= 0 && indexToDelete < 5) {
        // Check if the index is valid
        for (int i = indexToDelete; i < 4; i++) {
            // Shift elements to the left starting from the index to delete
            myArray[i] = myArray[i + 1];
        }
        
        // Decrease the size of the array (optional)
        // This can be done by declaring a new array with one less element
        // or simply not considering the last element when accessing the array.
        
        // Output the updated array
        for (int i = 0; i < 4; i++) {
            std::cout << myArray[i] << " ";
        }
        std::cout << std::endl;
    } else {
        std::cout << "Invalid index to delete." << std::endl;
    }

    return 0;
}
