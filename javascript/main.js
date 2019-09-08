
const tabs =( pages, color, tab )=> {
    let interface = document.querySelectorAll('.content-page');
    let list = document.querySelectorAll('.list-item');
    for( let i = 0; i < interface.length; i++ ) {
        interface[i].style.display ='none';
    } for( let i = 0; i < list.length; i++ ) {
        list[i].style.background= '';
    }
    document.getElementById(pages).style.display="block";
    tab.style.background = color;
}
document.querySelector('.list-item').style.background ='white';

