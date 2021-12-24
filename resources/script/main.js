let liChange = document.getElementById("about-me-text");

function changeOnOver (){
liChange.style.backgroundColor= '#40554b';
liChange.style.color = 'yellow';
}
liChange.onmouseover = changeOnOver;

function changeOutOver (){
    liChange.style.backgroundColor= 'rgba(13, 39, 95, 0.788)';
    liChange.style.color = 'white';
    }

liChange.onmouseout = changeOutOver;