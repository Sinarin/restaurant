export default navBar;
import loadAbout from './about';
import loadContact from './contact';
import loadMenu from './menu';

function navBar() {
    //get document append point
    const content = document.getElementById('content');
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    const aboutBtn = document.createElement('button');
    aboutBtn.addEventListener('click', loadAbout);
    aboutBtn.classList.add('navb', 'about');
    aboutBtn.textContent = 'About';
    nav.appendChild(aboutBtn);

    const contactBtn = document.createElement('button');
    contactBtn.addEventListener('click', loadContact);
    contactBtn.classList.add('navb', 'contact');
    contactBtn.textContent = 'Contact';
    nav.appendChild(contactBtn);
    
    const menuBtn = document.createElement('button');
    menuBtn.addEventListener('click', loadMenu);
    menuBtn.classList.add('navb', 'menu');
    menuBtn.textContent = 'Menu';
    nav.appendChild(menuBtn);
    content.appendChild(nav);
}