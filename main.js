let body = document.querySelector('body')

// starts const
let attackAmount = Math.floor(Math.random() * 20 + 1);
let magicAmount = Math.floor(Math.random() * 20 +1);
let recovery= Math.floor(Math.random() * 10 +1);
let addMagic= Math.floor(Math.random() * 7 + 1)

// my buttons
let attackPlayer1 = document.getElementById('attack1')
let attackPlayer2 = document.getElementById('attack2')
let player1HealthRecovery = document.getElementById('health1');
let player2HealthRecovery = document.getElementById('health2');
let player1MagicAdd =  document.getElementById('magic1');
let player2MagicAdd = document.getElementById('magic2');

alert('Welcome to the Pokemon lite game')

attackPlayer1.addEventListener('click', () => {
  if (document.getElementById('player2-magic').value < magicAmount) {
    alert('You are out of the magic, please refill')
  }
  if (document.getElementById("player2-health").value < attackAmount) {
    alert('Player 2 is dead')
  }
  document.getElementById("player2-health").value -= attackAmount
  document.getElementById('player1-magic').value -= magicAmount
  body.classList.add('attack')
  let light = document.getElementById('light1')
  let star = document.getElementById('star1')
  star.classList.add('active')
  light.classList.add('active')
  setTimeout(()=> {
    light.classList.remove('active')
    star.classList.remove('active')
   body.classList.remove('attack')
  },1000)

})
attackPlayer2.addEventListener('click', () => {
  if (document.getElementById("player1-health").value < attackAmount) {
    alert('Player 1 is dead')
  }
  if (document.getElementById('player2-magic').value < magicAmount) {
    alert('You are out of the magic, please refill')
  }
  document.getElementById("player1-health").value -= attackAmount
  document.getElementById('player2-magic').value -= magicAmount
  let light = document.getElementById('light2')
  let star = document.getElementById('star2')
  body.classList.add('attack')
  star.classList.add('active')
  light.classList.add('active')
  setTimeout(()=> {
    light.classList.remove('active')
    star.classList.remove('active')
    body.classList.remove('attack')
  },1000)
})

player1HealthRecovery.addEventListener('click', () => {
  if(document.getElementById("player2-health").value === 100) {
    alert('Your Health is full, you are ready to fight')
  }
  document.getElementById("player1-health").value +=recovery 
})
player2HealthRecovery.addEventListener('click', () => {
  if(document.getElementById("player2-health").value === 100) {
    alert('Your Health is full, you are ready to fight')
  }
  document.getElementById("player2-health").value +=recovery 
})

player1MagicAdd.addEventListener('click', () => {
  if (document.getElementById('player1-magic').value === 100) {
    alert('Your Magic is full,you are ready to fight ')
  }
  document.getElementById('player1-magic').value += addMagic
})
player2MagicAdd.addEventListener('click', () => {
  if (document.getElementById('player2-magic').value === 100) {
    alert('Your Magic is full, you are ready to fight')
  }
  document.getElementById('player2-magic').value += addMagic
})