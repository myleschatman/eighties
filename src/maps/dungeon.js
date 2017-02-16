const ground = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
  [0, 4, 0, 1, 1, 1, 1, 0, 1, 4, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 5, 0],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 6, 0],
  [0, 0, 9, 1, 3, 1, 1, 0, 1, 1, 7, 0],
  [0, 0, 8, 2, 1, 1, 1, 11, 1, 1, 1, 0],
  [0, 0, 8, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 4, 1, 0, 0, 0, 10, 0, 0],
  [0, 1, 1, 1, 1, 1, 3, 1, 4, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const groundNames = [];
groundNames[0] = 'empty';
groundNames[1] = 'stone_E';
groundNames[2] = 'stoneTile_E';
groundNames[3] = 'stoneUneven_E';
groundNames[4] = 'stoneMissingTiles_E';
groundNames[5] = 'dirt_E';
groundNames[6] = 'dirtTiles_E';
groundNames[7] = 'stoneSideUneven_N';
groundNames[8] = 'planks_E';
groundNames[9] = 'planksBroken_E';
groundNames[10] = 'bridge_E';
groundNames[11] = 'bridgeBroken_N';

const wall = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 13, 3, 5, 2, 2, 2, 7, 2, 7, 2, 0],
  [0, 1, , , , , , , , , , 0],
  [0, 9, , 13, , 10, 14, , , , 0],
  [0, 1, , 1, , , , , 12, , , 0],
  [0, 1, , 11, , , , , 1, , , 0],
  [0, , , , , , , , 1, , 0],
  [0, , , , , , , , 6, 0],
  [0, , , 16, , ,17, , 15, 0],
  [, , , , , , , , , , , , ,],
  [0, 13, 2, 2, , , , , , , , 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const wallNames = [];
wallNames[0] = 'empty';
wallNames[1] = 'stoneWall_N';
wallNames[2] = 'stoneWall_W';
wallNames[3] = 'stoneWallColumnIn_W';
wallNames[4] = 'stoneWallWindow_W';
wallNames[5] = 'stoneWallWindowBars_W';
wallNames[6] = 'stoneWallGate_N';
wallNames[7] = 'stoneWallGateBars_W';
wallNames[8] = 'stoneWallArchway_W';
wallNames[9] = 'stoneWallHole_N';
wallNames[10] = 'stoneWallBroken_W';
wallNames[11] = 'stoneWallBrokenRight_N';
wallNames[12] = 'stoneWallAgedLeft_N';
wallNames[13] = 'stoneWallCorner_N';
wallNames[14] = 'stoneWallCorner_W';
wallNames[15] = 'stoneWallCorner_E';
wallNames[16] = 'stoneColumn_E';
wallNames[17] = 'stoneColumnWood_S';

export default { ground, groundNames, wall, wallNames };
