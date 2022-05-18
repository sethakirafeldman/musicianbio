import { main } from "./index";
import { engineId } from "./index";
import { engineOptions } from "./index";

export default function EngineChooser() {
    const sel = document.getElementById("choose-engine");
    sel.addEventListener('change', (event) => {
        // changes engine to selected val
        engineId = engineOptions[event.target.value];
        console.log(`engine changed to ${event.target.value}`);
    })


};