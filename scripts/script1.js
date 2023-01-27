const botao = document.querySelector(".btn")
const video = document.getElementById("video")
let mod = document.querySelector(".modal")
const link = video.src

botao.addEventListener("click",()=>{
  mod.classList.add("aberto")
  video.setAttribute("src",link)
})

let close = document.querySelector(".fechar-modal")

close.addEventListener("click",()=>{
  mod.classList.remove("aberto")
  video.setAttribute("src","")
})



