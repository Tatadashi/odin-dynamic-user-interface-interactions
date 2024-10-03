import dropdownIcon from '../images/dropdownButton.svg';

function addImageToDropdowns () {
    const dropdownButtons = document.querySelectorAll('.dropdownButton');
    dropdownButtons.forEach(button => {
        button.style.backgroundImage = `url(${dropdownIcon})`;
        button.style.backgroundSize = '15%';
        button.style.backgroundRepeat = 'no-repeat';
        button.style.backgroundPosition = 'center center';
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
            const dropdown = button.parentElement;
            const dropdownContent = dropdown.querySelector('.dropdownContent');
            closeAllDropdowns(dropdownContent);
            toggleDropdown(button);
        });
    });
}

function closeAllDropdowns (except='none') {
    const allDropdownContent = document.querySelectorAll('.dropdownContent');
    allDropdownContent.forEach(dropdown => {
        if (except !== dropdown) {
            dropdown.classList.remove('show');
        }
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