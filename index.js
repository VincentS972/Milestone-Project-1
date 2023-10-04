document.addEventListener('DOMContentLoaded', () => {
  const kid = document.querySelector('#character')
  let bottom = 0
  let gravity = 0.9
  let isJumping = false
  const jumpid = document.getElementById('jumping');
  jumpid.style.display = 'block';

  function characterjump(){
  if (isJumping) return
  let timerUpId = setInterval(function() {
    if (bottom > 250){
      clearInterval(timerUpId)
        let timerDownId = setInterval (function(){
          if (bottom < 0){
            clearInterval(timerDownId)
            isJumping = false
          }
          bottom -=5
          kid.style.bottom = bottom +'px'
        },20)
  }
  isJumping = true    
  bottom += 30
  bottom = bottom * gravity
  kid.style.bottom = bottom +'px'
  }, 20)}

  function control(e) {
      if (e.keyCode === 38){
      characterjump()
  }
}

document.addEventListener('keydown', control)})

function crate(x, y) {
  let element = newImage('assets/crate.png')
  element.style.zIndex = 1;
  element.style.height

  let direction = null;

  function moveCharacter() {
      
      if (direction === 'west') {
        x += 1
      }

    element.style.right = x + 'px'
    element.style.bottom = y + 'px'
  }

  setInterval(moveCharacter, 1)

  async function walkWest(time) {
    direction ='west'
    element.src = `./assets/crate.png`
    await sleep(time);
    stop();
  }

  function stop() {
    direction = null
    element.src = `./assets/crate.png`
  }

  return {
    element: element,   
    walkWest: walkWest,
    stop: stop
  }
}

function newImage(url){
  let image = document.createElement('img')
  image.src = url
  image.style.position = 'absolute'
  document.body.append(image)
  return image
}



