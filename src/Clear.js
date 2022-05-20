export default function Clear() {
    const clearBtn = document.getElementById("clear-items");
    clearBtn.addEventListener(`click`, ()=> {
        document.querySelectorAll(".bio-card").forEach((card)=>{
            card.remove();
        })
    })
}