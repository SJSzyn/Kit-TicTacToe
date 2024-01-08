// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

// Accessing the length of the 'cars' array in joeInfo
console.log("Number of Joe's cars:", joeInfo.cars.length);

// Updating the number of bathrooms to 1
joeInfo.bathrooms = 1;
console.log("Number of bathrooms in Joe's house:", joeInfo.bathrooms);

// Updating the garage property to true
joeInfo.garage = true;
console.log("Does Joe have a garage?", joeInfo.garage ? "Yes" : "No");

// 2 Initialize an empty object for the team
// var team = {};

// 3 Adding 'players' and 'games' properties as empty arrays to the team object
// team.players = [];
// team.games = [];

// Alternatively, you could initialize the team object with these properties directly:
 var team = {
     players: [],
     games: [],

         // 6 Adding the addPlayer method
        addPlayer: function(firstName, lastName, age) {
        var player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

        // 8 Ajout de la méthode addGame
        addGame: function(opponent, teamPoints, opponentPoints) {
            var game = {
                opponent: opponent,
                teamPoints: teamPoints,
                opponentPoints: opponentPoints
            };
            this.games.push(game);
        }
 };

// 4 Adding players to the 'players' array
team.players.push({ firstName: "Pablo", lastName: "Sanchez", age: 11 });
team.players.push({ firstName: "Serge Junior", lastName: "Szynkarski", age: 31 });  // Exemple d'un autre joueur

// Vous pouvez afficher la liste des joueurs pour vérifier
console.log(team.players);

// Adding games to the 'games' array
team.games.push({ opponent: "Broncos", teamPoints: 42, opponentPoints: 27 });
team.games.push({ opponent: "Tigers", teamPoints: 30, opponentPoints: 33 }); // Exemple d'un autre match

console.log(team.games);

// Example usage of the addPlayer method
team.addPlayer("John", "Doe", 25);
team.addPlayer("Jane", "Smith", 22);

// 7 Vérifier si le joueur a été ajouté en affichant la liste des joueurs
console.log("Liste des joueurs après ajout :", team.players);

// 9 Exemple d'utilisation de la méthode addGame
team.addGame("Broncos", 42, 27);
team.addGame("Tigers", 30, 33);

// Vérifier si les matchs ont été ajoutés en affichant la liste des matchs
console.log("Liste des matchs après ajout :", team.games);

// Fonction pour calculer la somme totale des points de l'équipe
function calculateTotalPoints(team) {
    var totalPoints = 0;
    for(var i = 0; i < team.games.length; i++) {
        totalPoints += team.games[i].teamPoints;
    }
    return totalPoints;
}

// 10 Appeler la fonction et afficher la somme des points
var totalPoints = calculateTotalPoints(team);
console.log("La somme totale des points de l'équipe :", totalPoints);

// 11 Fonction pour calculer la moyenne des points de l'équipe adverse
function calculateAverageOpponentPoints(team) {
    var totalOpponentPoints = 0;
    var gamesPlayed = team.games.length;

    for(var i = 0; i < gamesPlayed; i++) {
        totalOpponentPoints += team.games[i].opponentPoints;
    }

    return gamesPlayed > 0 ? totalOpponentPoints / gamesPlayed : 0;
}

// 11 Appeler la fonction et afficher la moyenne des points de l'équipe adverse
var averageOpponentPoints = calculateAverageOpponentPoints(team);
console.log("La moyenne des points de l'équipe adverse :", averageOpponentPoints);

// 12 Fonction pour trouver le joueur le plus âgé
function findOldestPlayer(team) {
    if (team.players.length === 0) {
        return null; // Retourner null si l'équipe n'a pas de joueurs
    }

    var oldestPlayer = team.players[0];

    for (var i = 1; i < team.players.length; i++) {
        if (team.players[i].age > oldestPlayer.age) {
            oldestPlayer = team.players[i];
        }
    }

    return oldestPlayer;
}

// Appeler la fonction et afficher le joueur le plus âgé
var oldestPlayer = findOldestPlayer(team);
if (oldestPlayer) {
    console.log("Le joueur le plus âgé est:", oldestPlayer.firstName, oldestPlayer.lastName, "avec", oldestPlayer.age, "ans");
} else {
    console.log("Aucun joueur dans l'équipe.");
}

// 13 Fonction pour trier les joueurs par ordre alphabétique de leur nom de famille
function sortPlayersAlphabetically(team) {
    team.players.sort(function(playerA, playerB) {
        var lastNameA = playerA.lastName.toLowerCase();
        var lastNameB = playerB.lastName.toLowerCase();

        if (lastNameA < lastNameB) {
            return -1;
        }
        if (lastNameA > lastNameB) {
            return 1;
        }
        return 0;
    });
}

// Appeler la fonction pour trier les joueurs
sortPlayersAlphabetically(team);

// Afficher les joueurs triés
console.log("Joueurs triés par ordre alphabétique :", team.players);