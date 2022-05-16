import Submit from "./Submit";
import CardMaker from "./CardMaker";
require('dotenv').config();


export const main = document.getElementById("main-container");

function component() {
    Submit();
    CardMaker();
  }

  component();

