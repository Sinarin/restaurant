export default contact;
import contactImage from './chinese_logo.jpg'
function contact() {
    //delete current page
    const oldPage = document.getElementsByClassName('page');
    if (oldPage[0]){
        oldPage[0].remove();
       }

    const content = document.getElementById("content");
    const page = document.createElement('div');
    page.classList.add('page');
    const img = new Image();
    img.src = contactImage;
    img.classList.add('about')
    page.appendChild(img)
    page.innerHTML+= "Name: China Guy \nEmail: chinaguy@china.com\nPhone: 123-123-1234";
    content.appendChild(page);

}