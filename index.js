const pc = character(160, 110)

const npc = oldLady(-150, 110)

const obstacle = crate (100, 110)

// have the NPC start walking east immediately
async function moveObstacle(){
   
    await obstacle.walkWest(10000)
    
}
moveObstacle()


