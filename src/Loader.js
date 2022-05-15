import { main } from "./index";

export default function Loader() {
    let loader = document.createElement("div");
    loader.classList.add("loader");
    main.append(loader);
    loader.innerText = `loading...`;
}