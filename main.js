window.onload = (event) => {

const frame = document.getElementById('pdf-js-viewer');
const btn_load = document.getElementById('btn_load');
const btn_use_this = document.getElementById('btn_use_this');

// ----------------------------------------------------
let width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
let height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
// ----------------------------------------------------

// load pdf
btn_load.addEventListener('click', () => {
    document.getElementById('frame_container').style.display = 'block'
    frame.height = height || 500;
    
    const proxy = document.getElementById('proxy').value;
    const url = document.getElementById('url').value;

    frame.src = '/web/viewer.html?file=' + proxy + url;

    document.getElementById("container").style.display = 'none';
});

// on window resize
window.addEventListener('resize', function(event){
    width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
    
    frame.height = height || 500;
});

// use it btn
btn_use_this.addEventListener('click', () => {
    document.getElementById('proxy').value = 'https://corsproxy.io/?'
});

}