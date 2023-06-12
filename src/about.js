export default about;
import aboutImage from './chinese_restuarant.webp';

function about() {
    //delete current page
    const oldPage = document.getElementsByClassName('page');
    console.log(oldPage)
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
    page.innerHTML += "This is a small family restuarant started in 1900. We have passed our family recipes down through the year. We have made new ones and maintained the masterpieces. Please let us serve you!"
    content.appendChild(page);

}