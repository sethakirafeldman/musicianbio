import { main } from "./index";

export default function CardMaker(name, bio) {
    // counter to keep track of id
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    let loader = document.getElementsByClassName("loader")[0];
    // remove loader
    if( loader) {
        loader.remove();
            // create bio card
    div.classList.add("bio-card");
    main.append(div);
    div.append(h4);
    div.append(p);
    h4.innerText = name;
    p.innerText = bio;

    }
 

};