#include <iostream>

int main() {
    int maxSize;
    std::cout << "Enter the maximum size of the array: ";
    std::cin >> maxSize;

    int myArray[maxSize];
    int size = 0; // Current size of the array

    int choice;
    do {
        std::cout << "\nMenu:\n";
        std::cout << "1. Add an element\n";
        std::cout << "2. Update an element\n";
        std::cout << "3. Delete an element\n";
        std::cout << "4. Read the array\n";
        std::cout << "5. Exit\n";
        std::cout << "Enter your choice: ";
        std::cin >> choice;

        switch (choice) {
            case 1: // Add an element
                if (size < maxSize) {
                    std::cout << "Enter the element to add: ";
                    std::cin >> myArray[size];
                    size++;
                } else {
                    std::cout << "Array is full. Cannot add more elements." << std::endl;
                }
                break;
            case 2: // Update an element
                int updateIndex, newValue;
                std::cout << "Enter the index to update: ";
                std::cin >> updateIndex;
                if (updateIndex >= 0 && updateIndex < size) {
                    std::cout << "Enter the new value: ";
                    std::cin >> newValue;
                    myArray[updateIndex] = newValue;
                    std::cout << "Element updated successfully." << std::endl;
                } else {
                    std::cout << "Invalid index. Element update failed." << std::endl;
                }
                break;
            case 3: // Delete an element
                int deleteIndex;
                std::cout << "Enter the index to delete: ";
                std::cin >> deleteIndex;
                if (deleteIndex >= 0 && deleteIndex < size) {
                    for (int i = deleteIndex; i < size - 1; i++) {
                        myArray[i] = myArray[i + 1];
                    }
                    size--;
                    std::cout << "Element deleted successfully." << std::endl;
                } else {
                    std::cout << "Invalid index. Element deletion failed." << std::endl;
                }
                break;
            case 4: // Read the array
                std::cout << "Array elements: ";
                for (int i = 0; i < size; i++) {
                    std::cout << myArray[i] << " ";
                }
                std::cout << std::endl;
                break;
            case 5: // Exit
                std::cout << "Exiting the program." << std::endl;
                break;
            default:
                std::cout << "Invalid choice. Please enter a valid option." << std::endl;
        }
    } while (choice != 5);

    return 0;
}
