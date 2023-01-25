import {onVideo,
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
  nameAlbum} from "./elements.js";
  
  const videos = [
    {id: 1, title:'Plush', album:'Stone Temple Pilots', src:'./videos/Stone Temple Pilots - Plush.mp4', img:'images/stone.jpeg'},
    {id: 2, title:'I Miss You', album:'Blink-182', src:'./videos/blink-182 - I Miss You.mp4', img:'images/Blink-182.jpg'},
    {id: 3, title:'What A Fool Believes', album:'The Doobie Brothers', src:'videos/The Doobie Brothers - What A Fool Believes.mp4', img:'images/The_Doobie_Brothers.jpg'}
  ];
  
  let indexVideo = 0;
  
  videoRender(indexVideo);
  
  // Events
  play.addEventListener('click', playVideo);
  
  pause.addEventListener('click', pauseVideo);

  onVideo.addEventListener('click', startVideo);

  noVideo.addEventListener('click', offVideo);

  eye.addEventListener('click', startEye);

  noEye.addEventListener('click', offEye);

  
  video.addEventListener('timeupdate', updateBar);
  
  left.addEventListener('click', () => {
    indexVideo--;
    if (indexVideo < 0) {
        indexVideo = 2;
    }
    videoRender(indexVideo);
    pauseVideo()
  });
  
  right.addEventListener('click', () => {
    indexVideo++;
    if (indexVideo > 2){
        indexVideo = 0;
    }
    videoRender(indexVideo);
    pauseVideo()
  });
  
  // Functions
  function videoRender(index){
    video.setAttribute('src', videos[index].src);
    updateTitle(videos[index].title);
    updateAlbum(videos[index].album);
    updateImage(videos[index].img);
    video.addEventListener('loadeddata', () => {
      durationVideo.textContent = String(secondsToMinutes(Math.floor(video.duration))).padStart(2,"0");
    });
  }
  
  function updateTitle(title) {
    nameTitle.textContent = title;
  }
  
  function updateAlbum(album) {
    nameAlbum.textContent = album;
  }
  
  function updateImage(imageSrc) {
    image.src = imageSrc;
  }
  
  function playVideo(){
    video.play();
    pause.classList.remove('hide');
    play.classList.add('hide');
  }
  
  function pauseVideo(){
    video.pause();
    play.classList.remove('hide');
    pause.classList.add('hide');
  }
  
  function startVideo(){
    video.classList.remove('opacity');
    noVideo.classList.remove('hide');
    onVideo.classList.add('hide');
  }
  
  function offVideo(){
    video.classList.add('opacity');
    onVideo.classList.remove('hide');
    noVideo.classList.add('hide');
  }
  
  function startEye(){
    main.classList.add('hide');
    noEye.classList.remove('hide');
    eye.classList.add('hide');
  }
  
  function offEye(){
    main.classList.remove('hide');
    eye.classList.remove('hide');
    noEye.classList.add('hide');
  }
  
  function secondsToMinutes(seconds){
    let campMinutes = Math.floor(seconds / 60);
    let campSeconds = seconds % 60;
    if (campSeconds < 10){
        campSeconds = '0' + campSeconds;
    }
  
    return campMinutes+':'+campSeconds;
  }
  function updateBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
    let elapsedTime = document.querySelector('#start');
    elapsedTime.textContent = String(secondsToMinutes(Math.floor(video.currentTime))).padStart(2,"0");
  }
