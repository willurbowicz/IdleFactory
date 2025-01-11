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
  document.getElementById("ironDrill").innerHTML =
    "Iron Drill: " + ironDrillCount;
  clearInterval(ironIntervalId);
  recalculateIronOreMiningRate();
  document.getElementById("ironOreMiningRate").innerHTML =
    Number((1000 / ironOreMiningRate).toFixed(2)) + " per second";
  ironIntervalId = setInterval(autoMineIron, ironOreMiningRate);
};

const copperDrillButton = document.getElementById("copperDrill");
copperDrillButton.onclick = function () {
  copperDrillCount++;
  document.getElementById("copperDrill").innerHTML =
    "Copper Drill: " + copperDrillCount;
  clearInterval(copperIntervalId);
  recalculateCopperOreMiningRate();
  document.getElementById("copperOreMiningRate").innerHTML =
    Number((1000 / copperOreMiningRate).toFixed(2)) + " per second";
  copperIntervalId = setInterval(autoMineCopper, copperOreMiningRate);
};

const coalDrillButton = document.getElementById("coalDrill");
coalDrillButton.onclick = function () {
  coalDrillCount++;
  document.getElementById("coalDrill").innerHTML =
    "Coal Drill: " + coalDrillCount;
  clearInterval(coalIntervalId);
  recalculateCoalMiningRate();
  document.getElementById("coalMiningRate").innerHTML =
    Number((1000 / coalMiningRate).toFixed(2)) + " per second";
  coalIntervalId = setInterval(autoMineCoal, coalMiningRate);
};

const ironSmelterButton = document.getElementById("ironSmelter");
ironSmelterButton.onclick = function () {
  ironSmelterCount++;
  document.getElementById("ironSmelter").innerHTML =
    "Iron Smelter: " + ironSmelterCount;
  clearInterval(ironSmeltingIntervalId);
  recalculateIronSmeltingRate();
  document.getElementById("ironSmeltingRate").innerHTML =
    Number((1000 / ironSmeltingRate).toFixed(2)) + " per second";
  ironSmeltingIntervalId = setInterval(autoSmeltIron, ironSmeltingRate);
};

const copperSmelterButton = document.getElementById("copperSmelter");
copperSmelterButton.onclick = function () {
  copperSmelterCount++;
  document.getElementById("copperSmelter").innerHTML =
    "Copper Smelter: " + copperSmelterCount;
  clearInterval(copperSmeltingIntervalId);
  recalculateCopperSmeltingRate();
  document.getElementById("copperSmeltingRate").innerHTML =
    Number((1000 / copperSmeltingRate).toFixed(2)) + " per second";
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
    document.getElementById("ironIngotCount").innerHTML = ironIngotCount;
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
    document.getElementById("copperIngotCount").innerHTML = copperIngotCount;
  }
}

function recalculateIronOreMiningRate() {
  ironOreMiningRate = Number((1000 / ironDrillCount).toFixed(2));
}

function recalculateCopperOreMiningRate() {
  copperOreMiningRate = Number((1000 / copperDrillCount).toFixed(2));
}

function recalculateCoalMiningRate() {
  coalMiningRate = Number((1000 / coalDrillCount).toFixed(2));
}

function recalculateIronSmeltingRate() {
  ironSmeltingRate = Number((3000 / ironSmelterCount).toFixed(2));
}

function recalculateCopperSmeltingRate() {
  copperSmeltingRate = Number((2000 / copperSmelterCount).toFixed(2));
}
