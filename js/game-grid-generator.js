const games = [
    {
        name: "Pixel Studio",
        info: "A simple pixel art editor.",
        img: "pixelstudio",
        url: "turboembed.html?url=" + encodeURIComponent("https://turbowarp.org/979801800/embed?autoplay&fullscreen-background=black")
    },
    {
        name: "Over Yonder",
        info: "Find your friends who got lost in the forest!",
        img: "overyonder",
        url: "itchembed.html?url=" + encodeURIComponent("https://itch.io/embed-upload/7207524?color=000000")
    },
    {
        name: "Chaos Airlines 2",
        info: "A mind-bending puzzler about managing overlapping flight paths!",
        img: "chaosairlines",
        url: "itchembed.html?url=" + encodeURIComponent("https://itch.io/embed-upload/7181508?color=000000")
    },
    {
        name: "Chaos Airlines",
        info: "Original Chaos Airlines, made for a 72-hour game jam.",
        img: "chaosairlinesold",
        url: "itchembed.html?url=" + encodeURIComponent("https://itch.io/embed-upload/5298948?color=000000")
    },
    {
        name: "Exploding Physics",
        info: "Spawn characters and watch them explode!",
        img: "explodingphysics",
        url: "turboembed.html?url=" + encodeURIComponent("https://turbowarp.org/484255329/embed?autoplay&fullscreen-background=black&fps=60&hqpen&clones=Infinity")
    },
    {
        name: "Kim Vs King",
        info: "Can one lone peasant destroy a corrupt king?",
        img: "kimvsking",
        url: "itchembed.html?url=" + encodeURIComponent("https://itch.io/embed-upload/8858301?color=000000")
    },
    {
        name: "Pong",
        info: "Literally just pong.",
        img: "pong",
        url: "itchembed.html?url=" + encodeURIComponent("https://itch.io/embed-upload/5158841?color=000000")
    },
    {
        name: "Spaceship",
        info: "Fly around in a spaceship and shoot incoming asteroids!",
        img: "spaceship",
        url: "turboembed.html?url=" + encodeURIComponent("https://turbowarp.org/494880134/embed?fullscreen-background=black&hqpen&clones=Infinity")
    },
    {
        name: "Sky High",
        info: "Flap through the city to collect coins!",
        img: "skyhigh",
        url: "turboembed.html?url=" + encodeURIComponent("https://turbowarp.org/450656664/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity")
    },
    {
        name: "SwipeCars",
        info: "Reckless driving. Collect coins while avoiding oncoming traffic!",
        img: "swipecars",
        url: "turboembed.html?url=" + encodeURIComponent("https://turbowarp.org/318216494/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity")
    },
    {
        name: "Darkness",
        info: "Survive waves of zombies with nothing but a flashlight!",
        img: "darkness",
        url: "turboembed.html?url=" + encodeURIComponent("https://turbowarp.org/406517701/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity")
    },
    {
        name: "Slam!",
        info: "Don't get slammed by the falling obstacles!",
        img: "slam",
        url: "turboembed.html?url=" + encodeURIComponent("https://turbowarp.org/364436674/embed?autoplay&fullscreen-background=black&hqpen&clones=Infinity")
    }
];

const grid = document.getElementById("game-container");

games.forEach(game => {
    const gridItem = document.createElement("a");
    gridItem.className = "grid-item";
    gridItem.href = "/game.html?name=" + game.name + "&backButtonMode=" + "arcade" + "&url=" + encodeURIComponent(game.url);

    const thumbnail = document.createElement("img");
    thumbnail.className = "thumbnail";
    thumbnail.src = "/assets/thumbnails/" + game.img + ".png";

    const name= document.createElement("p");
    const nameBold = document.createElement("b");
    name.className = "name";
    nameBold.textContent = game.name;
    name.appendChild(nameBold);

    const info = document.createElement("p");
    info.className = "info";
    info.textContent = game.info;

    gridItem.appendChild(thumbnail);
    gridItem.appendChild(name);
    gridItem.appendChild(info);

    grid.appendChild(gridItem);
});