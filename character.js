

function character(x, y) {
    const element = newImage('assets/rhc-idle.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/rhc-idle.gif`
        }

        if (direction === 'north') {
            element.src = `assets/rhc-running.gif`
        }
    
        if (direction === 'east') {
            element.src = `assets/rhc-running.gif`
        }

        if (direction === 'west') {
            element.src = `assets/rhc-running.gif`
        }

        if (direction === 'south') {
            element.src = `assets/rhc-running.gif`
        }
      
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}