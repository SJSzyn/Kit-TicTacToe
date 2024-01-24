import java.util.Scanner;

// Define the TicTacToe class
public class TicTacToe {
    private int size; // The size of the board (number of cells in one row/column)
    private Cell[][] board; // 2D array representing the board, composed of Cell objects

    private Player player1; // Represents the first player
    private Player player2; // Represents the second player

    private Scanner scanner; // Scanner object for reading user input

    // Default size of the board is set to 3 (for a 3x3 TicTacToe game)
    private static final int DEFAULT_SIZE = 3;

    // Constructor of the TicTacToe class
    public TicTacToe() {
        this.size = DEFAULT_SIZE; // Set the size of the board
        this.board = new Cell[size][size]; // Initialize the board with the given size
        this.player1 = new Player("| X "); // Initialize player1 with a representation
        this.player2 = new Player("| O "); // Initialize player2 with a representation
        this.scanner = new Scanner(System.in); // Initialize the scanner for user input
        initializeBoard(); // Call the method to initialize the board with cells
    }

    // Method to initialize the board with empty Cell objects
    private void initializeBoard() {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                board[i][j] = new Cell(); // Initialize each cell in the board
            }
        }
    }

    // Method to display the board in the console
    public void display() {
        for (int i = 0; i < size; i++) {
            printRowDivider(); // Print the row divider (e.g., "-------")
            for (int j = 0; j < size; j++) {
                System.out.print(board[i][j].getRepresentation()); // Print the representation of each cell in the row
            }
            System.out.println("|"); // End the row with a pipe and a newline character
        }
        printRowDivider(); // Print the final row divider
    }

    // Method to print the row divider (e.g., "-------")
    private void printRowDivider() {
        for (int i = 0; i < size; i++) {
            System.out.print("----");
        }
        System.out.println("-");
    }

    // Method to get a move from the player (row and column)
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
                    validInput = validateMove(row, column); // Check if the move is valid
                } else {
                    scanner.nextLine(); // Consume the wrong input
                }
            } else {
                scanner.nextLine(); // Consume the wrong input
            }
            if (!validInput) {
                System.out.println("Invalid move. Try again."); // Prompt the user to try again if the move is invalid
            }
        }
        return new int[] {row, column}; // Return the valid move (row and column)
    }

    // Method to validate the move (check if the cell is within the board and not already occupied)
    private boolean validateMove(int row, int column) {
        if (row >= 0 && row < size && column >= 0 && column < size) {
            return board[row][column].getRepresentation().equals("|   "); // Check if the cell is empty (not occupied)
        }
        return false; // Return false if the cell is not within the board or already occupied
    }

    // Method to process a player's turn
    public void playerTurn(Player player) {
        System.out.println(player.getRepresentation().trim() + "'s turn.");
        int[] move = getMoveFromPlayer(); // Get the player's move
        setOwner(move[0], move[1], player); // Set the owner of the cell to the player
    }

    // Method to set the owner of a cell (mark the cell with the player's representation)
    public void setOwner(int row, int column, Player player) {
        if (row >= 0 && row < size && column >= 0 && column < size) {
            board[row][column].setRepresentation(player.getRepresentation()); // Set the cell's representation to the player's representation
        } else {
            System.out.println("Invalid cell coordinates."); // Display an error if the coordinates are invalid
        }
    }

    // Method to play the game (main game loop)
    public void play() {
        int movesCount = 0; // Counter for the number of moves made
        int totalMoves = size * size; // Total possible moves (size of the board)

        while (movesCount < totalMoves && !isOver()) {
            // Player 1's turn
            System.out.println("Player 1's turn (" + player1.getRepresentation().trim() + ")");
            playerTurn(player1);
            movesCount++;
            display();
            if (isOver()) {
                System.out.println("Player 1 (" + player1.getRepresentation().trim() + ") wins!");
                break;
            }
            if (movesCount >= totalMoves) break; // Check if the board is full

            // Player 2's turn
            System.out.println("Player 2's turn (" + player2.getRepresentation().trim() + ")");
            playerTurn(player2);
            movesCount++;
            display();
            if (isOver()) {
                System.out.println("Player 2 (" + player2.getRepresentation().trim() + ") wins!");
                break;
            }
        }

        // If the loop is over and no one has won, it's a draw
        if (!isOver()) {
            System.out.println("Game over. It's a draw!");
        }
    }

    // Method to check if the game is over (either a player wins or the board is full)
    public boolean isOver() {
        // Check for a winner
        if (checkForWinner(player1) || checkForWinner(player2)) {
            return true; // The game is over if a player has won
        }

        // Check if the board is filled
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (board[i][j].getRepresentation().equals("|   ")) {
                    return false; // The game is not over if there's an empty cell
                }
            }
        }

        return true; // The game is over if the board is filled (no empty cells)
    }

    // Method to check if a player has won (3 cells in a row, column, or diagonal are marked by the player)
    private boolean checkForWinner(Player player) {
        String playerRep = player.getRepresentation();

        // Check rows and columns for a win
        for (int i = 0; i < size; i++) {
            if ((board[i][0].getRepresentation().equals(playerRep) &&
                    board[i][1].getRepresentation().equals(playerRep) &&
                    board[i][2].getRepresentation().equals(playerRep)) ||
                    (board[0][i].getRepresentation().equals(playerRep) &&
                            board[1][i].getRepresentation().equals(playerRep) &&
                            board[2][i].getRepresentation().equals(playerRep))) {
                return true; // Return true if a player has won by completing a row or column
            }
        }

        // Check diagonals for a win
        if ((board[0][0].getRepresentation().equals(playerRep) &&
                board[1][1].getRepresentation().equals(playerRep) &&
                board[2][2].getRepresentation().equals(playerRep)) ||
                (board[0][2].getRepresentation().equals(playerRep) &&
                        board[1][1].getRepresentation().equals(playerRep) &&
                        board[2][0].getRepresentation().equals(playerRep))) {
            return true; // Return true if a player has won by completing a diagonal
        }

        return false; // Return false if the player has not won
    }
}