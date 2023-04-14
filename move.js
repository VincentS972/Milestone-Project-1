function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
    
            if(direction === 'east'){
                x+=1
            }
           
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
           
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

// document.addEventListener('keypress',handlejump ) 

// function jump() {
//     pc.classList.add('rhc-jumping.gif');
   
//     setTimeout(() => {
//     pc.classList.remove('rhc-jumping.gif');
//     }, 1500);
//   }
//   function handlejump(){
//     if (!pc.classList.contains('rhc-jumping.gif')) {
//           jump();
  
//         }
//   } 