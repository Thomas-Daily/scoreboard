//DATA
let currentHomePoints = 0
let currentAwayPoints = 0

//FUNCTION
function home1() {
  currentHomePoints++
  console.log(currentHomePoints)
  homePoints()
}

function home3() {
  currentHomePoints += 3
  console.log(currentHomePoints)
  homePoints()
}

function away1() {
  currentAwayPoints++
  console.log(currentAwayPoints)
  awayPoints()
}

function away3() {
  currentAwayPoints += 3
  console.log(currentAwayPoints)
  awayPoints()
}

function homePoints() {
  document.getElementById('homePoints').innerHTML = `
    <div>
     ${currentHomePoints}
    </div>`
}

function awayPoints() {
  document.getElementById('awayPoints').innerHTML = `
    <div>
     ${currentAwayPoints}
    </div>`
}

function reset() {
  currentAwayPoints = 0
  currentHomePoints = 0
  homePoints()
  awayPoints()
}

homePoints()
awayPoints()