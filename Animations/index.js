//document.getElementById('btn2').onclick = function anything(){
//    document.getElementById('btn1').style.fontSize = '50px'
//   document.getElementById('btn1').textContent = 'Hmm?'
//}

const button = document.getElementById('btn1')
let size = 40
button.addEventListener('click', function() {
    size += 20;
  button.style.fontSize = size + 'px'
  button.textContent = "Really?"
})
