let ironOreCount = 0;
let copperOreCount = 0;
let coalCount = 0;
let ironIngotCount = 0;
let copperIngotCount = 0;

let ironDrillCount = 0;
let copperDrillCount = 0;
let coalDrillCount = 0;
let smelterCount = 0;

// Ore mining rates in milliseconds. Default 1 per second.
let ironOreMiningRate = 1000;
let copperOreMiningRate = 1000;
let coalMiningRate = 1000;
let ironSmeltingRate = 3000;
let copperSmeltingRate = 2000;

// Starting every counter on a different ID to prevent conflicts
let ironIntervalId = 1;
let copperIntervalId = 2;
let coalIntervalId = 3;
let smeltingIntervalId = 4;

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

const coalButton = document.getElementById("coal");
coalButton.onclick = function () {
  coalCount++;
  document.getElementById("coalCount").innerHTML = coalCount;
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

const coalDrillButton = document.getElementById("coalDrill");
coalDrillButton.onclick = function () {
  coalDrillCount++;
  document.getElementById("coalDrillCount").innerHTML = coalDrillCount;
  clearInterval(coalIntervalId);
  recalculateCoalMiningRate();
  document.getElementById("coalMiningRate").innerHTML =
    1000 / coalMiningRate + " per second";
  coalIntervalId = setInterval(autoMineCoal, coalMiningRate);
};

const smelterButton = document.getElementById("smelter");
smelterButton.onclick = function () {
  smelterCount++;
  document.getElementById("smelterCount").innerHTML = smelterCount;
  clearInterval(smeltingIntervalId);
  recalculateSmeltingRate();
  document.getElementById("ironSmeltingRate").innerHTML =
    1000 / ironSmeltingRate + " per second";
  document.getElementById("copperSmeltingRate").innerHTML =
    1000 / copperSmeltingRate + " per second";
  smeltingIntervalId = setInterval(autoSmelt, ironSmeltingRate);
};

function autoMineIron() {
  ironOreCount++;
  document.getElementById("ironOreCount").innerHTML = ironOreCount;
}

function autoMineCopper() {
  copperOreCount++;
  document.getElementById("copperOreCount").innerHTML = copperOreCount;
}

function autoMineCoal() {
  coalCount++;
  document.getElementById("coalCount").innerHTML = coalCount;
}

function autoSmelt() {
  if (ironOreCount > 5 && coalCount > 1) {
    ironOreCount -= 5;
    coalCount--;
    ironIngotCount++;
    document.getElementById("ironIngotCount").innerHTML = ironIngotCount;
  } else {
    console.log("Not enough resources to smelt");
  }
}

function recalculateIronOreMiningRate() {
  ironOreMiningRate = 1000 / ironDrillCount;
}

function recalculateCopperOreMiningRate() {
  copperOreMiningRate = 1000 / copperDrillCount;
}

function recalculateCoalMiningRate() {
  coalMiningRate = 1000 / coalDrillCount;
}

function recalculateSmeltingRate() {
  ironSmeltingRate = 3000 / smelterCount;
  copperSmeltingRate = 2000 / smelterCount;
}
