// Define the Cell class
public class Cell {
    // Declare a private string variable 'representation'
    // This holds the symbol or text representing the cell's state (e.g., empty, "X", or "O")
    private String representation;

    // Constructor for the Cell class
    // It's used to initialize the Cell object when it's created
    // Currently, it doesn't do any specific initialization
    public Cell() {
        // Any initialization code would go here
    }

    // Method to return the string representation of the cell
    // If the 'representation' is not set (null), it returns "|   " indicating an empty cell
    // If 'representation' is set, it returns the current representation
    public String getRepresentation() {
        return representation == null ? "|   " : representation;
    }

    // Method to set the representation of the cell
    // It allows other parts of the program to change the cell's representation
    public void setRepresentation(String representation) {
        this.representation = representation;
    }
}