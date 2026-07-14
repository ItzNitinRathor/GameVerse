console.log("GameVerse javaScript connected successfully!");
console.log("🎮 Welcome to GameVerse");
console.log("Learning javaScript...");
console.log("Version 1.0");

const playerName = "Shadow Hunter";
console.log(playerName.length); //length of the string
console.log(playerName[playerName.length - 2]); //second last character of the string
console.log(playerName.charAt(5)); //character at index 5

const player = "ShAdOwHuNtEr";
console.log(player);
console.log(player.toUpperCase());
console.log(player.toLowerCase());

const game = "       GameVerse ";
console.log(game);
console.log(game.trim());


console.log(Math.round(4.7));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));


console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);


const games = ["GTA 5", "Fifa", "Call of Duty", "Fortnite", "Minecraft"];
console.log(games);
const randomIndex = Math.floor(Math.random() * games.length);
console.log(games[randomIndex]);


const playerDetails = {
    name: "Nitin",
    age: 19,

    address: {
        village: "Hathira",
        city: "Kuruksjetra",
        state: "Haryana"
    },

    games: ["GTA 5", "MineCraft", "BGMI", "Valorant"]


};

console.log(playerDetails);

playerDetails.age = 20;
playerDetails.level = 25;
delete playerDetails.age;
console.log(playerDetails);
console.log(playerDetails["level"]);

console.log(playerDetails.games[3]);


const game3 = {
    title: "Valorant",
    modes: [
        "competitve",
        "Unrated",
        "Deathmatch"
    ]
}

console.log(game3.modes[2]);

const game5 = {
    title1: "CyberPhunk 2077",
    price: 1999,
    developer: {
        name: "CD Project",
        country: "Poland"
    },

    genres: [
        "RPG",
        "Open World",
        "Action"
    ]

};

console.log(`Game: ${game5.title}`);
console.log(`Developer: ${game5.developer.name}`);
console.log(`Country: ${game5.country}`);
console.log(`Genre: ${game5.genres[0]}`);
console.log(`Price: ₹${game5.price}`);



const topThreeGames = [{
    title: "MineCraft",
    price: 1999,
    rating: 4.8
},

{
    title: "Valorant",
    price: 799,
    rating: 4.5
},

{
    title: "GTA 6",
    price: 4999,
    rating: 4.9
}

];

topThreeGames.forEach(function (game) {
    console.log(`${game.title} - ${game.price}`);
});

topThreeGames[1].price = 999;
topThreeGames[0].developer = "Mojang";

console.log(topThreeGames)
console.log(topThreeGames[1].title);
console.log(topThreeGames[1].price);
console.log(topThreeGames[0]);
console.log(topThreeGames.length);


const rG = [
    "MineCraft",
    "BGMI",
    "COD"
]

rG.push("Valorant");
const rI = rG.pop();
rG.unshift("GTA 5");
const rI2 = rG.shift();
rG.splice(1, 0, "FPS Action");
rG.splice(2, 1, "Call Of Duty");


console.log(rI);
console.log(rG);
console.log(rI2);

rG.splice(2, 1);
console.log(rG);

// toprG = rG.slice(0,2);
// console.log(toprG);
console.log(rG.slice(0, 2));

const rWG = [
    "MineCraft",
    "BGMI",
    "COD"
]

//forEach Array
rWG.forEach(function (game, index) {
    console.log(index, game);
});

rWG.forEach((game) => console.log(game));

// map Array
const prices = [100, 200, 300];
const discount = prices.map(function (price) {
    return price * 0.9;
});
console.log(discount);

//filters Array
const prices1 = [500, 1000, 1500, 2000, 2500];
const expensive = prices1.filter(function (price) {
    return price > 1000;
});

console.log(expensive);


//find Array (return first value that matches condition)
const numbers = [5, 10, 15, 20, 25];
const result = numbers.find(function (num) {
    return num > 10;
});

console.log(result);



//Functions
const gameCard = (
    title,
    price = 0,
    rating = 5
) => {
    return `
${title}
₹${price}
⭐${rating}
`;
};

console.log(gameCard("Valorant"));
console.log(gameCard("Minecraft", 1999, 4.8));




const games22 = new Set([
    "GTA 5",
    "Minecraft",
    "Valorant",
    "GTA 5"
]);

console.log(games22);

const player22 = new Map();
player22.set("name", "Nitin");
player22.set("level", 25);


console.log(player22.get("name") );

// console.log(document);

const heading =
document.getElementById("title");

console.log(heading);


// const card =
// document.querySelector(".game-card");

// card.innerHTML = `
// <h2>Minecraft</h2>

// <p>₹999</p>

// <button>Buy Now</button>
// `;