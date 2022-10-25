let alert = document.getElementById("registered");
document.getElementById("register").onclick = function() {
    alert.style.visibility = "visible";
}
document.getElementById('close').onclick = function() {
    alert.style.visibility = "hidden";
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const containers = document.getElementById('containers');
const form = document.getElementById('form');
const container_text = document.getElementsByClassName('container-text');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        containers.style.background = 'white';
        containers.style.transition = "1s";
        document.getElementById('text1').style.color = '#000842';
        document.getElementById('text2').style.color = '#000842';
        document.getElementById('text3').style.color = '#000842';
        document.getElementById('text4').style.color = '#000842';
        document.getElementById('text5').style.color = '#000842';
        document.getElementById('text6').style.color = '#000842';
        document.getElementById('text7').style.color = '#000842';
        document.getElementById('text8').style.color = 'white';
        document.getElementById('text9').style.color = 'white';
        document.getElementById('picture').style.background = '#000842';
    }
    else{
        body.style.background = '#000842';
        body.style.transition = '1s';
        containers.style.background = '#000842';
        containers.style.transition = "1s";
        form.style.color = 'white';
        document.getElementById('text1').style.color = 'white';
        document.getElementById('text2').style.color = 'white';
        document.getElementById('text3').style.color = 'white';
        document.getElementById('text4').style.color = 'white';
        document.getElementById('text5').style.color = 'white';
        document.getElementById('text6').style.color = 'white';
        document.getElementById('text7').style.color = 'white';
        document.getElementById('text8').style.color = '#000842';
        document.getElementById('text9').style.color = '#000842';
        document.getElementById('picture').style.background = 'white';
    }
});