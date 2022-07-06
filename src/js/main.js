import '../sass/style.sass';
import example from '../assets/images/foto.png'
import json from '../assets/Json/json'

console.log(json.title)

setTimeout(() => {
    let elem = document.createElement('button');
    elem.innerHTML = 'btn';
    elem.className = 'button'
    document.body.append(elem);
    let i = 0;
    document.querySelector('.button').addEventListener('click', () => {
        i++;
        console.log(i);
        console.log('click')
    })
}, 5000)