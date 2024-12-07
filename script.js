let ironCount = 0;

const button = document.getElementById("ironOre");
button.onclick = function () {
  ironCount++;
  document.getElementById("ironCount").innerHTML = ironCount;
};
