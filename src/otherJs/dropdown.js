import dropdownIcon from '../assets/dropdown_menu/dropdown_button.svg';

function addImageToDropdowns () {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    dropdownButtons.forEach(button => {
        button.style.backgroundImage = `url(${dropdownIcon})`;
        button.style.backgroundSize = '15%';
        button.style.backgroundRepeat = 'no-repeat';
        button.style.backgroundPosition = 'center center';
    });
}

function toggleDropdown (button) {
    const dropdown = button.parentElement;
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

function addClickEventToDropdownButtons () {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const dropdown = button.parentElement;
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            closeAllDropdowns(dropdownContent);
            toggleDropdown(button);
        });
    });
}

function closeAllDropdowns (except='none') {
    const allDropdownContent = document.querySelectorAll('.dropdown-content');
    allDropdownContent.forEach(dropdown => {
        if (except !== dropdown) {
            dropdown.classList.remove('show');
        }
    });
}

//close all dropdowns when not clicking a dropdownButton
function addCloseInactiveDropdowns () {
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdown-button')) {
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