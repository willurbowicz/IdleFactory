let ironOreCount = 0;
let copperOreCount = 0;
let coalCount = 0;
let ironIngotCount = 0;
let copperIngotCount = 0;

let ironDrillCount = 0;
let copperDrillCount = 0;
let coalDrillCount = 0;
let ironSmelterCount = 0;
let copperSmelterCount = 0;

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
let ironSmeltingIntervalId = 4;
let copperSmeltingIntervalId = 5;

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

const ironSmelterButton = document.getElementById("ironSmelter");
ironSmelterButton.onclick = function () {
  ironSmelterCount++;
  document.getElementById("ironSmelterCount").innerHTML = ironSmelterCount;
  clearInterval(ironSmeltingIntervalId);
  recalculateIronSmeltingRate();
  document.getElementById("ironSmeltingRate").innerHTML =
    1000 / ironSmeltingRate + " per second";
  ironSmeltingIntervalId = setInterval(autoSmeltIron, ironSmeltingRate);
};

const copperSmelterButton = document.getElementById("copperSmelter");
copperSmelterButton.onclick = function () {
  copperSmelterCount++;
  document.getElementById("copperSmelterCount").innerHTML = copperSmelterCount;
  clearInterval(copperSmeltingIntervalId);
  recalculateCopperSmeltingRate();
  document.getElementById("copperSmeltingRate").innerHTML =
    1000 / copperSmeltingRate + " per second";
  copperSmeltingIntervalId = setInterval(autoSmeltCopper, copperSmeltingRate);
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

function autoSmeltIron() {
  if (ironOreCount > 5 && coalCount > 1) {
    ironOreCount -= 5;
    coalCount -= 1;
    ironIngotCount++;
    document.getElementById("ironIngotCount").innerHTML = ironIngotCount;
  } else {
    console.log("Not enough resources to smelt");
  }
}

function autoSmeltCopper() {
  if (copperOreCount > 5 && coalCount > 1) {
    copperOreCount -= 5;
    coalCount -= 1;
    copperIngotCount++;
    document.getElementById("copperIngotCount").innerHTML = copperIngotCount;
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

function recalculateIronSmeltingRate() {
  ironSmeltingRate = 3000 / ironSmelterCount;
}

function recalculateCopperSmeltingRate() {
  copperSmeltingRate = 2000 / copperSmelterCount;
}
