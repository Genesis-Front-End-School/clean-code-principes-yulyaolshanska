#### https://github.com/MemeBattle/monorepo

1.  Single Responsibility Principle (SRP) in the Card class from the Ligretto repository:
    `
    public class Card {
    private Suit suit;
    private Rank rank;

            public Card(Suit suit, Rank rank) {
                this.suit = suit;
                this.rank = rank;
            }

            public Suit getSuit() {
                return suit;
            }

            public Rank getRank() {
                return rank;
            }

            public String toString() {
                return rank + " of " + suit;
            }

        }
        `

    In this implementation, the Card class has only one responsibility, which is to represent a single card. The class has getters for the card's suit and rank, as well as a toString() method for displaying the card's rank and suit as a string.

2.  Single Responsibility Principle. The Deck class is responsible for creating and managing a deck of cards:

    `public class Deck {
    private List<Card> cards;

        public Deck() {
            this.cards = new ArrayList<>();
            for (Suit suit : Suit.values()) {
                for (Rank rank : Rank.values()) {
                    cards.add(new Card(suit, rank));
                }
            }
        }

        public void shuffle() {
            Collections.shuffle(cards);
        }

        public Card deal() {
            if (cards.isEmpty()) {
                throw new IllegalStateException("The deck is empty!");
            }
            return cards.remove(0);
        }

        public int size() {
            return cards.size();
        }

    }
    `
    In this implementation, the Deck class has a single responsibility of creating and managing a deck of cards. It has methods for shuffling the deck, dealing a card, and getting the number of cards left in the deck.

3.  Creator pattern in the Game class:
    `
    public abstract class Game {
    // ...

            protected void createPlayers(int numPlayers) {
                for (int i = 0; i < numPlayers; i++) {
                    Player player = createPlayer(i);
                    players.add(player);
                }
            }

            protected abstract Player createPlayer(int index);

        }
        `

    In this implementation, the Game class is responsible for creating instances of the Player class. The createPlayers() method takes the number of players as a parameter and creates a new Player object for each player, using the createPlayer() method, which is implemented by the subclass.

4.  Interface Segregation Principle (ISP):

                `public interface UserInterface {
                void showWelcomeMessage();

                    void showEndOfGameMessage();

                    void showPlayerHand(Player player);

                    void showInvalidMoveMessage();

                    void showPlayerTurn(Player player);

                    int getMove(Player player);

                }
                `

    In this interface, each method represents a single responsibility related to user interface operations in the game. By segregating these responsibilities into separate methods, the UserInterface interface is easier to implement by clients, and clients are not forced to implement methods they do not need.

5.  Dependency Inversion Principle (DIP):

    `public class GameController {
    private Game game;
    private UserInterface ui;

               public GameController(Game game, UserInterface ui) {
                   this.game = game;
                   this.ui = ui;
               }

               public void play() {
                   ui.showWelcomeMessage();
                   game.play();
                   ui.showEndOfGameMessage();
               }

           }
           `

    In this implementation, the GameController class depends on abstractions (i.e., Game and UserInterface interfaces) rather than concrete implementations. This allows for easier maintenance of the codebase, as the GameController class does not need to be modified if the concrete implementations of Game and UserInterface change.

6.  Factory Method pattern:

        `public class Ligretto extends Game {
        // ...

            @Override
            protected Player createPlayer(int index) {
                return new LigrettoPlayer(index);
            }

            // ...

        }
        `

    In this implementation, the Ligretto class is a concrete subclass of Game that overrides the createPlayer() method to create instances of LigrettoPlayer. This method acts as a factory method for creating LigrettoPlayer objects, allowing the Ligretto class to control the creation of Player objects.

7.  Template Method pattern:

    `public abstract class Game {
    // ...

        public final void play() {
            setup();
            while (!isGameOver()) {
                Player player = getCurrentPlayer();
                int move = player.getMove();
                if (isValidMove(player, move)) {
                    makeMove(player, move);
                    updateGameState();
                } else {
                    ui.showInvalidMoveMessage();
                }
                nextPlayer();
            }
        }

        protected abstract void setup();

        protected abstract boolean isGameOver();

        protected abstract Player getCurrentPlayer();

        protected abstract boolean isValidMove(Player player, int move);

        protected abstract void makeMove(Player player, int move);

        protected abstract void updateGameState();

    }
    `
    In this implementation, the Game class provides a template method (play()) that defines the basic steps of a game. The abstract methods (setup(), isGameOver(), getCurrentPlayer(), etc.) are hooks that subclasses (e.g., Ligretto, Uno, etc.) can override to customize the behavior of the game. By using the Template Method pattern, the basic structure of the game is fixed, but the details of how the game is played can be customized by subclasses.

8.  Low Coupling pattern in the GameController class:

`public class GameController {
private Game game;
private UserInterface ui;

    public GameController(Game game, UserInterface ui) {
        this.game = game;
        this.ui = ui;
    }

    public void play() {
        ui.showWelcomeMessage();
        game.play();
        ui.showEndOfGameMessage();
    }

}
`

In this implementation, the GameController class has minimal dependencies on other classes. It depends only on the Game class and the UserInterface interface
