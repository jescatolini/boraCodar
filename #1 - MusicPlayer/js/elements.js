const onVideo = document.querySelector('.video')
const noVideo = document.querySelector('.noVideo')
const video = document.querySelector('video')
const eye = document.querySelector('.eye')
const noEye = document.querySelector('.noEye')
const main = document.querySelector('main')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
let durationVideo = document.querySelector('#end');
let image = document.querySelector('img');
let nameTitle = document.querySelector('.info h2');
let nameAlbum = document.querySelector('.info p');

export {
  onVideo,
  noVideo,
  video,
  eye,
  noEye,
  main,
  play,
  pause,
  left,
  right,
  durationVideo,
  image,
  nameTitle,
  nameAlbum
}