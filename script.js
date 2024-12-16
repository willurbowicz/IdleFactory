let ironCount = 0;
let copperCount = 0;
let ironDrillCount = 0;
let autoMineToggle = false;

const ironButton = document.getElementById("ironOre");
ironButton.onclick = function () {
  ironCount++;
  document.getElementById("ironCount").innerHTML = ironCount;
};

const copperButton = document.getElementById("copperOre");
copperButton.onclick = function () {
  copperCount++;
  document.getElementById("copperCount").innerHTML = copperCount;
};

const ironDrillButton = document.getElementById("ironDrill");
ironDrillButton.onclick = function () {
  ironDrillCount++;
  document.getElementById("ironDrillCount").innerHTML = ironDrillCount;
  clearInterval();
  setInterval(autoMineIron, ironDrillCount * 1000);
};

function autoMineIron() {
  ironCount++;
  document.getElementById("ironCount").innerHTML = ironCount;
  console.log("Iron updated");
}
