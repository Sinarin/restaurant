export default menu;
import aboutImage from './chinese_restuarant.webp'
function menu() {
    //delete current page
    const oldPage = document.getElementsByClassName('page');
    if (oldPage[0]){
        oldPage[0].remove();
       }

    const content = document.getElementById("content");
    const page = document.createElement('div');
    page.classList.add('page');
    const img = new Image();
    img.src = aboutImage;
    img.classList.add('about')
    page.appendChild(img)
    page.innerHTML+= "Beef $10\nPork $8\nChicken $9"
    content.appendChild(page);

}