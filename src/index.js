import dropdownIcon from './images/dropdownButton.svg';
import './style.css';

const dropdownImage = document.querySelector('.dropdownImage')
dropdownImage.src = dropdownIcon;

function showDropdown () {
    const dropdownContent = document.querySelector('.dropdownContent');
    dropdownContent.classList.toggle('show');
}

const dropdownButton = document.querySelector('.dropdownButton');
dropdownButton.addEventListener('click', (e) => {
    showDropdown();
});
