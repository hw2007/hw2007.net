const games = [
    {
        name: "Over Yonder",
        info: "Find your friends who got lost in the forest!",
        img: "overyonder",
        url: "https://itch.io/embed-upload/7207524?color=000000"
    },
    {
        name: "Chaos Airlines 2",
        info: "A mind-bending puzzler about managing overlapping flight paths!",
        img: "chaosairlines",
        url: "https://itch.io/embed-upload/7181508?color=000000"
    },
    {
        name: "Chaos Airlines",
        info: "Original Chaos Airlines, made for a 72-hour game jam.",
        img: "chaosairlinesold",
        url: "https://itch.io/embed-upload/5298948?color=000000"
    },
    {
        name: "Kim Vs King",
        info: "Can one lone peasant destroy a corrupt king?",
        img: "kimvsking",
        url: "https://itch.io/embed-upload/8858301?color=000000"
    },
    {
        name: "Pong",
        info: "Literally just pong.",
        img: "pong",
        url: "https://itch.io/embed-upload/5158841?color=000000"
    }
];

const grid = document.getElementById("game-container");

games.forEach(game => {
    const gridItem = document.createElement("a");
    gridItem.className = "grid-item";
    gridItem.href = "/game.html?name=" + game.name + "&url=" + game.url

    const thumbnail = document.createElement("img");
    thumbnail.className = "thumbnail";
    thumbnail.src = "/assets/thumbnails/" + game.img + ".png";

    const name = document.createElement("p");
    name.className = "name";
    name.textContent = game.name;

    const info = document.createElement("p");
    info.className = "info";
    info.textContent = game.info;

    gridItem.appendChild(thumbnail);
    gridItem.appendChild(name);
    gridItem.appendChild(info);

    grid.appendChild(gridItem);
});