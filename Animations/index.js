const no = document.getElementById('btn2')
const yes = document.getElementById('btn1')
const caption = document.getElementById('caption')
const button = document.getElementById('btn2')

let clickCount = 0
button.addEventListener('click', function(){
  clickCount++
  if(clickCount === 1){
      yes.style.fontSize = '50px'
      caption.textContent = 'hmm?'
    }
  else if(clickCount === 2){
      yes.style.fontSize = '30px'
      caption.textContent = 'Did u miss click?'
      no.style.fontSize = '50px'
  }
  else if(clickCount === 3){
      yes.style.fontSize = '50px'
      yes.style.display = 'none'
      caption.textContent = 'Whaaaaa?'
      no.textContent = 'lmao'
  }
  else if(clickCount === 4){
      yes.style.fontSize = '50px'
      yes.style.display = 'block'
      caption.textContent = 'Can u be my Valentine? Plz'
      no.textContent = 'No!'
  }
  else if(clickCount === 5){
      yes.style.fontSize = '62px'
      caption.textContent = 'Please?🥺'
      yes.style.borderRadius = '9px'
  }
  else if(clickCount === 6){
      yes.style.fontSize = '74px'
      caption.textContent = 'Please?🥺👉👈'
      no.style.fontSize = '40px'
      yes.style.borderRadius = '11px'
  }
  else if(clickCount === 7){
      yes.style.fontSize = '86px'
      caption.textContent = 'Pleaseeeeee?'
      no.style.fontSize = '30px'
      yes.style.borderRadius = '13px'
  }
  else if(clickCount === 8){
      yes.style.fontSize = '98px'
      caption.textContent = 'Pretty Pwease?'
      no.style.fontSize = '20px'
      yes.style.borderRadius = '15px'
  }
  else if(clickCount === 9){
      yes.style.fontSize = '120px'
      caption.textContent = 'Plz plz plz plz plz plz plz?'
      no.style.fontSize = '10px'
      yes.style.borderRadius = '18px'
  }
  else if(clickCount === 10){
      yes.style.fontSize = '130px'
      caption.textContent = 'Por favor~?'
      no.style.fontSize = '1px'
      yes.style.borderRadius = '22px'
  }
  else if(clickCount === 11){
      yes.style.fontSize = '140px'
      caption.textContent = 'Por favor~?🥺👉👈'
      no.style.display = 'none'
      yes.style.borderRadius = '24px'
  }
})

document.getElementById('btn1').addEventListener('click', function maybe() {
  var gifs = document.getElementsByClassName('gif')
  for (var i = 0; i < gifs.length; i++) {
    gifs[i].style.display = 'block'
  }
})

document.getElementById('btn1').addEventListener('click', function maybe() {
  var gifs = document.getElementsByClassName('container')
  for (var i = 0; i < gifs.length; i++) {
    gifs[i].style.display = 'none'
  }
})