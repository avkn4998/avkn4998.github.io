const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpeg','pic2.jpeg','pic3.jpeg','pic4.jpeg','pic5.jpeg'];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpeg' : 'sunset of roof',
    'pic2.jpeg' : 'mountain sunset',
    'pic3.jpeg' : 'house sunset',
    'pic4.jpeg' : 'street sunset',
    'pic5.jpeg' : 'backyard sunset'
}

/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt',alts[image]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',() => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Light';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Dark';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});




