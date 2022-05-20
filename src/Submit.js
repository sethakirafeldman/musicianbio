import FetchAPI from "./FetchAPI";

export default function Submit() {
    const form = document.getElementById("musician-form");
    let submit = document.getElementById("submit-btn");
    let bandInput = document.getElementById("musician-input");
    
    const sendInput = () => {
        event.preventDefault();
        FetchAPI(bandInput.value);
        bandInput.value = ``;
    }    

    // allows submit with enter key
    bandInput.addEventListener('keypress', (event)=> {
        if (event.keyCode == 13) {
            if (bandInput.value) {
                sendInput();
            }
            else {
                event.preventDefault();
            }
        }      

    });

    submit.addEventListener('click', (event) => {
        if (bandInput.value) {
            sendInput();  
        }
    });
}