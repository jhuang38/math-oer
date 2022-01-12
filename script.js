/* add event listeners to make the dropdown menu work */
let accordiansList = document.querySelectorAll('.accordian');

for (let i = 0; i < accordiansList.length; ++i) {
    accordiansList[i].addEventListener('click', (e) => {
        currentButton = e.target;
        currentButton.classList.toggle("active");
        // open the next panel
        let currentPanel = currentButton.nextElementSibling;
        // if current panel maxheight is not 0, collapse
        // otherwise, style height to scrollheight (height of the content)
        if (currentPanel.style.maxHeight) {
            currentPanel.style.maxHeight = null;
        } else {
            currentPanel.style.maxHeight = `${currentPanel.scrollHeight}px`;
        }
    });
}