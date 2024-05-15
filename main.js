let wrapper = document.querySelector('.wrapper')

let p = document.createElement('p')

let namePrompt = prompt('Напишите своё имя')

p.innerText = namePrompt

wrapper.appendChild(p)

p.style.color = 'red'