// Define the Player class
public class Player {
    // Declare a private string variable 'representation'
    // This holds the symbol representing the player (e.g., "X" or "O")
    private String representation;

    // Constructor for the Player class
    // It initializes the player's representation when a new Player object is created
    public Player(String representation) {
        // Assign the input representation to the 'representation' attribute of the class
        this.representation = representation;
    }

    // Method to return the representation of the player
    // This allows other parts of the program to access the player's representation
    public String getRepresentation() {
        return representation;
    }
}