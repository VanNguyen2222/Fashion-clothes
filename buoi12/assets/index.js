new WOW().init();
// load trang
function loader(){
    document.querySelector('.container-loader').classList.add('fade-out');
    document.querySelector('.loader__up').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload = fadeOut();