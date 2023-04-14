function oldLady(x, y) {
    let element = newImage('assets/oldLady-attaCK.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        
        if (direction === 'east') {
            x += 1
        }
 
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    // async function walkEast(time) {
    //     direction ='east'
    //     element.src = `./assets/oldLady-running.gif`
    //     await sleep(time);
    //     stop();
    // }

    // function stop() {
    //     direction = null
    //     element.src = `./assets/oldLady-running.gif`
    // }

    return {
        element: element,   
        walkEast: walkEast,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}