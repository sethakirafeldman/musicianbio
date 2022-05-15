import FetchAPI from "./FetchAPI";
import Submit from "./Submit";
import CardMaker from "./CardMaker";

export const main = document.getElementById("main-container");

function component() {

    // return document.createElement("main");
    Submit();
    CardMaker();
  }

  component();

  // document.body.appendChild(component());