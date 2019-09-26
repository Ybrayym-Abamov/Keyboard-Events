let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(e.code);
  if (e.code === "ArrowDown") {
      boxTop += 10;
  } else if (e.code === "ArrowUp") {
      boxTop -= 10;
  } else if (e.code === "ArrowLeft") {
      boxLeft -= 10;
  } else if (e.code === "ArrowRight") {
      boxLeft += 10;
  }
  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
}