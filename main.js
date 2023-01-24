let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountain=document.getElementById('mountain');
let mountain2=document.getElementById('mountain2');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let abukatab =document.querySelector('abukatab')


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value*3 + 'px'
    mountain.style.top = value*2 + 'px'
    mountain2.style.top = value*1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left = value * 3+ 'px'

}

