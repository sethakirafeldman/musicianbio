import { main } from "./index";

let counter = 0;

export default function CardMaker(name, bio) {
    // counter to keep track of id
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    let loader = document.getElementsByClassName("loader")[0];
    // removes loader and adds card
    if (loader) {
        loader.remove();
        // create bio card
        div.classList.add("bio-card");
        // main.append(div);
        document.getElementById("load-location").after(div);
        div.append(h4);
        div.id = `card-${counter}`;
        div.append(p);
        h4.innerText = name;
        p.innerText = bio;
        p.removeChild(p.firstElementChild);
        counter++;
    }
};