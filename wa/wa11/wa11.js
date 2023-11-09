const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'closeup of human eye',
    'pic2.jpg' : 'rock that looks like wave',
    'pic3.jpg' : 'purple and white flowers',
    'pic4.jpg' : 'wall from egypt',
    'pic5.jpg' : 'moth on a leaf'
}

/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/{image}');
    newImage.setAttribute('alt',alts[image]);
    thumbBar.addEventListener('click', e=> {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',() =>{
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
    } else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
    }
});




