let numba=0

document.getElementById("dec").onclick = function(){
    numba=numba-1
    document.getElementById("numba").innerHTML = numba
}
document.getElementById("res").onclick = function(){
    numba=0
    document.getElementById("numba").innerHTML = numba
}
document.getElementById("inc").onclick = function(){
    numba=numba+1
    document.getElementById("numba").innerHTML = numba
}