# Main

In this Main class:

- The main method is the entry point of your Java application. When you run your Java program, this is the first method that gets called.
- Inside the main method, you are creating a new instance of the TicTacToe class. This object (ticTacToe) represents your game.
- You then call the play method on the ticTacToe object. This method is responsible for starting the game and contains the game loop, handling the alternating turns of the players, checking for the win/draw conditions, and ultimately, concluding the game.

This structure is typical in Java programs, where the Main class and main method serve as the starting point of the application. The real game logic and interactions are handled in other classes (like TicTacToe in your case). Feel free to share more code if you want explanations for other parts of your program!

```Java
// Define the Main class
public class Main {
    // Define the main method which is the entry point of a Java application
    public static void main(String[] args) {
        // Create a new instance of the TicTacToe class
        TicTacToe ticTacToe = new TicTacToe();
        
        // Call the play method on the TicTacToe instance to start the game
        ticTacToe.play();
    }
}
```

# Player

In this Player class:

- The representation attribute holds the symbol that represents the player in the game. This could be, for example, "| X " or "| O ", indicating player one or player two.
- The constructor Player(String representation) is called when you create a new instance of the Player class. It initializes the representation attribute with the provided string value.
- The getRepresentation method is a public method that allows other parts of the program to access the representation attribute. It's essential because the attribute itself is private, adhering to the principle of encapsulation, which is a fundamental aspect of object-oriented programming.

This class serves as a blueprint for player objects in the game, encapsulating the player's symbol and providing a method to retrieve it. Feel free to ask if you need explanations for other parts of your code or have any questions!

```Java
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
```

# Cell

In this Cell class:

- The representation attribute holds the symbol or text that represents the cell's state on the game board. For example, it might be empty ("| "), or it might hold a player's symbol (like "| X " or "| O ").
- The constructor Cell() is where you would put any initialization code for the Cell object. In your case, there's no specific initialization, but you might want to add some in the future.
- The getRepresentation method returns the cell's current representation. If the representation is null (i.e., it hasn't been set yet), the method returns "| ", indicating the cell is empty. If the representation has been set, it returns the current value.
- The setRepresentation method allows other parts of your program to change the cell's representation. This is useful when a player makes a move, and you want to mark the cell with the player's symbol.

This class encapsulates the behavior and data related to a single cell on the game board, allowing the cell's representation to be queried and modified as needed during the game. If you have any questions or need further clarification, feel free to ask!

# Part 2

To introduce an artificial player that makes random moves, you can create a new class ArtificialPlayer. This class will extend the Player class or implement a common interface if you decide to use one. This way, you can treat both human and artificial players polymorphically.

Here's how you can structure your code and fulfill the requirements:

## Step 1: Define a Common Interface or Base Class

If you want to treat all players (human and artificial) uniformly, it's a good practice to define a common interface or a base class. For simplicity, let's assume Player is your base class, and ArtificialPlayer extends it.

## Step 2: Create the ArtificialPlayer Class

Create a new class ArtificialPlayer that extends the Player class. This class will override the getMove method to provide a random move.

```java
Copy code
import java.util.Random;

public class ArtificialPlayer extends Player {
    private Random random;

    // Constructor
    public ArtificialPlayer(String representation) {
        super(representation); // Call the constructor of the base class (Player)
        this.random = new Random();
    }

    // Method to get a random move
    // This method is specific to ArtificialPlayer and generates a random row and column
    public int[] getMove(Cell[][] board) {
        int size = board.length;
        int row, column;
        do {
            row = random.nextInt(size);
            column = random.nextInt(size);
        } while (!board[row][column].getRepresentation().equals("|   ")); // Ensure the cell is empty

        return new int[] {row, column};
    }
}
```

## Step 3: Update the TicTacToe Class to Support Different Types of Players
Modify the TicTacToe class to accept different types of players (human or artificial). You can introduce different constructors or a setup method to instantiate the game with different player configurations.

```java
Copy code
public class TicTacToe {
    // ... existing attributes ...

    // Constructor for human vs. human
    public TicTacToe() {
        this(new Player("| X "), new Player("| O "));
    }

    // Constructor for human vs. artificial or artificial vs. artificial
    public TicTacToe(Player player1, Player player2) {
        this.size = DEFAULT_SIZE;
        this.board = new Cell[size][size];
        this.player1 = player1;
        this.player2 = player2;
        this.scanner = new Scanner(System.in);
        initializeBoard();
    }

    // ... existing methods ...

    // Update the playerTurn method to support ArtificialPlayer
    public void playerTurn(Player player) {
        System.out.println(player.getRepresentation().trim() + "'s turn.");
        int[] move;
        if (player instanceof ArtificialPlayer) {
            move = ((ArtificialPlayer) player).getMove(board); // Get a random move for an artificial player
        } else {
            move = getMoveFromPlayer(); // Get a move from a human player
        }
        setOwner(move[0], move[1], player);
    }

    // ... rest of the TicTacToe class ...
}
```
## Step 4: Update the Main Class
Finally, update your Main class to instantiate the TicTacToe game with different player configurations based on your needs.

```java
Copy code
public class Main {
    public static void main(String[] args) {
        // Human vs. Human
        TicTacToe game1 = new TicTacToe();

        // Human vs. Artificial
        TicTacToe game2 = new TicTacToe(new Player("| X "), new ArtificialPlayer("| O "));

        // Artificial vs. Artificial
        TicTacToe game3 = new TicTacToe(new ArtificialPlayer("| X "), new ArtificialPlayer("| O "));

        // Start one of the games
        game1.play();
    }
}
```

With these changes, your TicTacToe game will now support games between human players, artificial players, or a mix of both. The ArtificialPlayer class introduces the capability for making random moves, and the TicTacToe class is flexible enough to handle different types of players. Feel free to adjust the implementation details based on your specific needs or game rules.


### Part 2

To fulfill these requirements, you'll create two new classes: InteractionUtilisateur (User Interaction) for handling user input and View for managing console output. You'll also refactor the existing TicTacToe class to use these new classes.

## Step 1: Create the InteractionUtilisateur Class
This class will handle user interactions, such as getting the move from a player or quitting the game.

```java
Copy code
import java.util.Scanner;

public class InteractionUtilisateur {
    private Scanner scanner;

    public InteractionUtilisateur() {
        this.scanner = new Scanner(System.in);
    }

    public int[] getMoveFromPlayer() {
        int row = 0;
        int column = 0;
        boolean validInput = false;

        while (!validInput) {
            System.out.print("Enter your move (row and column): ");
            if (scanner.hasNextInt()) {
                row = scanner.nextInt(); // Get row number from user input
                if (scanner.hasNextInt()) {
                    column = scanner.nextInt(); // Get column number from user input
                    validInput = true; // Assume the move is valid (validation will be done in TicTacToe class)
                } else {
                    System.out.println("Invalid input. Please enter two numbers.");
                    scanner.nextLine(); // Consume the wrong input
                }
            } else {
                System.out.println("Invalid input. Please enter two numbers.");
                scanner.nextLine(); // Consume the wrong input
            }
        }
        return new int[] {row, column}; // Return the move (row and column)
    }

    public void close() {
        scanner.close(); // Close the scanner when it's no longer needed
    }

    // Add other interaction methods as needed
}
```
## Step 2: Create the View Class
This class will be responsible for all console output.

```java
Copy code
public class View {
    public void print(String message) {
        System.out.println(message);
    }

    public void printBoard(Cell[][] board) {
        for (int i = 0; i < board.length; i++) {
            printRowDivider(board.length);
            for (int j = 0; j < board[i].length; j++) {
                print(board[i][j].getRepresentation());
            }
            print("|"); // End the row with a pipe
        }
        printRowDivider(board.length);
    }

    private void printRowDivider(int size) {
        StringBuilder divider = new StringBuilder();
        for (int i = 0; i < size; i++) {
            divider.append("----");
        }
        divider.append("-");
        print(divider.toString());
    }

    // Add other display methods as needed
}
```
## Step 3: Refactor TicTacToe Class
Refactor TicTacToe to use InteractionUtilisateur for user input and View for output.

```java
Copy code
public class TicTacToe {
    // ... existing attributes ...

    private InteractionUtilisateur interactionUtilisateur;
    private View view;

    // Constructor and other methods ...

    public TicTacToe() {
        // ... initialization ...
        this.interactionUtilisateur = new InteractionUtilisateur();
        this.view = new View();
        // ... other initialization ...
    }

    // Modify methods to use InteractionUtilisateur and View
    // For example, update the playerTurn method:
    public void playerTurn(Player player) {
        view.print(player.getRepresentation().trim() + "'s turn.");
        int[] move;
        if (player instanceof ArtificialPlayer) {
            move = ((ArtificialPlayer) player).getMove(board);
        } else {
            move = interactionUtilisateur.getMoveFromPlayer(); // Get a move from a human player using InteractionUtilisateur
        }
        setOwner(move[0], move[1], player);
    }

    // Update the display method to use View
    public void display() {
        view.printBoard(board);
    }

    // ... rest of the TicTacToe class ...
}
```
In the TicTacToe class:

- Replace direct uses of Scanner and System.out.println with calls to methods in InteractionUtilisateur and View, respectively.
- Ensure that TicTacToe handles the logic, InteractionUtilisateur manages user input, and View handles all output.

By following these steps, you'll adhere to the constraints mentioned in the cahier des charges, ensuring that Scanner is only used in InteractionUtilisateur and System.out.println is only called in View. This will make your code more modular, easier to maintain, and more aligned with the Single Responsibility Principle.

# Kit 3

From the provided document, we are tasked with the development of a Java library for board games, specifically Gomoku and Connect Four (Puissance 4). Here's how you might structure the code, taking into consideration that the board for each game will be a 2D array to represent the game state:

1. Create an Abstract Class BoardGame
This class will serve as a base for specific board games. It should define the common structure and behaviors that all board games share.

java
Copy code
public abstract class BoardGame {
    protected String[][] board;
    protected Player[] players;
    
    public BoardGame(int rows, int columns, int numberOfPlayers) {
        this.board = new String[rows][columns];
        this.players = new Player[numberOfPlayers];
    }
    
    protected abstract void initializeGame();
    protected abstract boolean isMoveValid(int row, int col, Player player);
    protected abstract boolean isGameFinished();
    protected abstract Player getWinner();
    protected abstract void makeMove(int row, int col, Player player);
    protected abstract void printBoard();
}
2. Define the Player Class
This class will represent a player in the game.

java
Copy code
public class Player {
    private String name;
    private String symbol; // X or O, or colored disk for Connect Four
    
    public Player(String name, String symbol) {
        this.name = name;
        this.symbol = symbol;
    }

    // Getters and setters for name and symbol
    // ...
}
3. Implement the Gomoku and ConnectFour Classes
These classes will extend BoardGame and implement the specific rules and behaviors for Gomoku and Connect Four.

Gomoku:
java
Copy code
public class Gomoku extends BoardGame {
    
    public Gomoku() {
        super(15, 15, 2); // Gomoku board is 15x15 and has 2 players
    }
    
    // Implement all abstract methods from BoardGame
    // ...
}
Connect Four (Puissance 4):
java
Copy code
public class ConnectFour extends BoardGame {
    
    public ConnectFour() {
        super(6, 7, 2); // Connect Four board is 6 rows by 7 columns and has 2 players
    }
    
    // Implement all abstract methods from BoardGame
    // ...
}
4. Structure Your Code in Packages
You should structure your code into packages for better organization. For example:

com.yourcompany.boardgames: The root package of your project.
com.yourcompany.boardgames.common: Contains BoardGame, Player, and other common classes.
com.yourcompany.boardgames.gomoku: Contains the Gomoku class and related classes.
com.yourcompany.boardgames.connectfour: Contains the ConnectFour class and related classes.
5. Set Up a GitHub Repository
Create a repository on GitHub for your team to collaborate on the project. Make sure to use a .gitignore file to exclude unnecessary files (like IDE configurations).

6. Considerations for Multiplayer and Game Logic
For multiplayer functionality, consider how you will manage player turns.
Implement game-specific logic in the respective classes. For Gomoku, this includes checking for 5 stones in a row. For Connect Four, check for 4 discs in a row and the gravity effect where pieces stack on top of each other.
7. Test Your Code
Create a main class to run and test your games, ensuring that all rules are correctly implemented and that the games are playable.

By following these steps, you should be able to create a robust and expandable board game library.

