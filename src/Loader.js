import { main } from "./index";

export default function Loader() {
    let loader = document.createElement("div");
    loader.classList.add("loader");
    document.getElementById("load-location").appendChild(loader);
    loader.innerText = `loading...`;
}