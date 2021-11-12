// Any code you will write for your website (in the future!) should go here

const headMenu = document.querySelector('#h_menu')
const foot_menu = document.querySelector('#f_menu')

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  console.log(scrollPos);
  if(scrollPos != 0 )
  {
    headMenu.style.visibility = 'hidden'
  }
  if(scrollPos == 0 )
  {
    headMenu.style.visibility = 'visible'
  }
  if(scrollPos > 3500)
  {
    foot_menu.style.visibility = 'visible'
  } else
  {
    foot_menu.style.visibility = 'hidden'
  }

}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});