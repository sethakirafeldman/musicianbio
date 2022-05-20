import FetchAPI from "./FetchAPI";

export default function Presets() {

    const bandData = {
        Beatles: [`John Lennon`, `Paul McCartney`, `George Harrison`, `Ringo Starr`],
        Stones: [`Mick Jagger`, `Keith Richards`, `Ronnie Wood`, `Charlie Watts`],
        Zeppelin: [`Robert Plant`, `Jimmy Page`, `John Paul Jones`, `John Bonham`],
        Queen: [`Freddie Mercury`, `Brian May`, `Roger Taylor`, `John Deacon`],
        Hendrix: [`Jimi Hendrix`, `Noel Redding`, `Mitch Mitchell`] 
    };

    const bandSelector = document.getElementById("preset-bands");

    bandSelector.addEventListener('change', (event) => {
        // clears previous data
        document.getElementById("clear-items").click(); 
        let band = event.target.value;
        bandData[band].forEach(item => {
            FetchAPI(item);
        }); 
    });   
};

