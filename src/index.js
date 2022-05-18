import Submit from "./Submit";
import CardMaker from "./CardMaker";
import EngineChooser from "./EngineChooser";
import Presets from "./Presets";
import Clear from "./Clear";

export const main = document.getElementById("main-container");

export const engineOptions = {
  curie: `text-curie-001`,
  davinci: `text-davinci-002`,
  babbage: `text-babbage-001`,
  ada: `text-ada-001`

};
// sets engineId globally to curie as default
export let engineId = engineOptions.curie;

function component() {
    Submit();
    CardMaker();
    EngineChooser();
    Presets();
    Clear();
  }

  component();

