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
};

async function count() {
  while (autoMineToggle) {
    ironCount++;
    console.log(`Iron count: ${ironCount}`);
    document.getElementById("ironCount").innerHTML = ironCount;
    sleep(10000);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
