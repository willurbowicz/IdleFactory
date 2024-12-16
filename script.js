let ironOreCount = 0;
let copperOreCount = 0;
let ironDrillCount = 0;
let copperDrillCount = 0;

// Ore mining rates in milliseconds. Default 1 per second.
let ironOreMiningRate = 1000;
let copperOreMiningRate = 1000;

// Starting every counter on a different ID to prevent conflicts
let ironIntervalId = 1;
let copperIntervalId = 2;

const ironButton = document.getElementById("ironOre");
ironButton.onclick = function () {
  ironOreCount++;
  document.getElementById("ironOreCount").innerHTML = ironOreCount;
};

const copperButton = document.getElementById("copperOre");
copperButton.onclick = function () {
  copperOreCount++;
  document.getElementById("copperOreCount").innerHTML = copperOreCount;
};

const ironDrillButton = document.getElementById("ironDrill");
ironDrillButton.onclick = function () {
  ironDrillCount++;
  document.getElementById("ironDrillCount").innerHTML = ironDrillCount;
  clearInterval(ironIntervalId);
  recalculateIronOreMiningRate();
  document.getElementById("ironOreMiningRate").innerHTML =
    1000 / ironOreMiningRate + " per second";
  ironIntervalId = setInterval(autoMineIron, ironOreMiningRate);
};

const copperDrillButton = document.getElementById("copperDrill");
copperDrillButton.onclick = function () {
  copperDrillCount++;
  document.getElementById("copperDrillCount").innerHTML = copperDrillCount;
  clearInterval(copperIntervalId);
  recalculateCopperOreMiningRate();
  document.getElementById("copperOreMiningRate").innerHTML =
    1000 / copperOreMiningRate + " per second";
  copperIntervalId = setInterval(autoMineCopper, copperOreMiningRate);
};

function autoMineIron() {
  ironOreCount++;
  document.getElementById("ironOreCount").innerHTML = ironOreCount;
}

function autoMineCopper() {
  copperOreCount++;
  document.getElementById("copperOreCount").innerHTML = copperOreCount;
}

function recalculateIronOreMiningRate() {
  ironOreMiningRate = 1000 / ironDrillCount;
}

function recalculateCopperOreMiningRate() {
  copperOreMiningRate = 1000 / copperDrillCount;
}
