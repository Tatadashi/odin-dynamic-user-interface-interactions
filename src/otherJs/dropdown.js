import dropdownIcon from '../images/dropdownButton.svg';

function addImageToDropdowns () {
    const dropdownImages = document.querySelectorAll('.dropdownImage');
    dropdownImages.forEach(image => {
        image.src = dropdownIcon;
    });
}

function toggleDropdown (button) {
    const dropdown = button.parentElement;
    const dropdownContent = dropdown.querySelector('.dropdownContent');
    dropdownContent.classList.toggle('show');
}

function addClickEventToDropdownButtons () {
    const dropdownButtons = document.querySelectorAll('.dropdownButton');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            closeAllDropdowns();
            toggleDropdown(button);
        });
    });
}

function closeAllDropdowns () {
    const allDropdownContent = document.querySelectorAll('.dropdownContent');
    allDropdownContent.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
}

//close all dropdowns when not clicking a dropdownButton
function addCloseInactiveDropdowns () {
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdownButton')) {
            closeAllDropdowns();
        }
    });
}

function addDropdownFunctionalities() {
    addClickEventToDropdownButtons();
    addCloseInactiveDropdowns();
    addImageToDropdowns();
}

export { addDropdownFunctionalities };