/* add event listeners to make the dropdown menu work */
let accordiansList = document.querySelectorAll('.accordian');

for (let i = 0; i < accordiansList.length; ++i) {
    accordiansList[i].addEventListener('click', (e) => {
        let currentButton = e.target;
        currentButton.classList.toggle("active");
    });
}