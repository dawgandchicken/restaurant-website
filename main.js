const reserveBtn = document.getElementById("reserveBtn");
const myInput = document.getElementById("myInput");

reserveBtn.addEventListener("click", () => {
    if(myInput.value !== "") {
        alert("Your reservation has been made.")
    }
});