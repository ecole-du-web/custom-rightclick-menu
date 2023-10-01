const customMenu = document.querySelector(".custom-menu")
const customMenuBtns = [...document.querySelectorAll(".custom-menu button")]
const bgColors = ["#d8760e","#65c45d","#5d88c4","#c45dc4"]

document.addEventListener("contextmenu", toggleCustomMenu)

function toggleCustomMenu(e){
  e.preventDefault()

  customMenu.style.display = "block"
  customMenu.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`
}

document.addEventListener("click", closeContextMenu) // seulement left click

function closeContextMenu(){
  customMenu.style.display = "none"
}

customMenuBtns.forEach(btn => btn.addEventListener("click", changeBgColor))

function changeBgColor(e){
  const btnIndex = customMenuBtns.indexOf(e.target)
  document.body.style.backgroundColor = bgColors[btnIndex]
}
