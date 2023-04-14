function character(x, y) {
    const element = newImage('assets/rhc-running.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/rhc-running.gif`
        }

        if (direction === 'east') {
            element.src = `assets/rhc-running.gif`
        }

        if (direction === 'west') {
            element.src = `assets/rhc-running.gif`
        }

      
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}
