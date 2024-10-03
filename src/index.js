import dropdownIcon from './images/dropdownButton.svg';
import './style.css';

const dropdownImage = document.querySelector('.dropdownImage')
dropdownImage.src = dropdownIcon;

function toggleDropdown () {
    const dropdownContent = document.querySelector('.dropdownContent');
    dropdownContent.classList.toggle('show');
}

const dropdownButton = document.querySelector('.dropdownButton');
dropdownButton.addEventListener('click', (e) => {
    toggleDropdown();
});

window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdownButton')) {
        const dropdownContent = document.querySelector('.dropdownContent');
        if (dropdownContent.classList.contains('show')) {
            toggleDropdown();
        }
    }
});
