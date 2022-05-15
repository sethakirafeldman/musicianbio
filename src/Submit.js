import FetchAPI from "./FetchAPI";

export default function Submit() {
    const form = document.getElementById("musician-form");
    let submit = document.getElementById("submit-btn");
    let bandInput = document.getElementById("musician-input");

    // allows submit with enter key
    bandInput.addEventListener('keypress', (event)=> {
        if (event.keyCode == 13) {
            event.preventDefault();
            FetchAPI(bandInput.value);
            bandInput.value = ``;
        }      
    });

    submit.addEventListener('click', (event) => {
        //prevent form from reloading window
        event.preventDefault();
        FetchAPI(bandInput.value);
        bandInput.value = ``;
    });

}