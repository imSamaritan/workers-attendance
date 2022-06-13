import './style.scss'
import imsamaritan from './assets/imsamaritan.png'

const heading = document.getElementsByClassName('heading')[0]
heading.innerHTML = 'Webpack'

const img = document.createElement('img')
img.src = imsamaritan

document.body.insertBefore(img, heading)