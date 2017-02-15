import Player from '../prefabs/player';

class Game extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    this.easystar = new EasyStar.js();

    // this.game.stage.backgroundColor = "0xde6712";
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.groundGroup = this.game.add.group();
    this.collideGroup = this.game.add.group();

    const ground = [
      [1, 1, 1, 3, 1, 1, 1, 1, 1, 3],
      [1, 0, 0, 1, 0, 0, 0, 1, 1, 1],
      [4, 0, 1, 1, 1, 1, 0, 1, 4, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 5],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 6],
      [0, 9, 1, 3, 1, 1, 0, 1, 1, 7],
      [0, 8, 1, 1, 1, 1, 11, 1, 1, 1],
      [0, 8, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 4, 1, 0, 0, 0, 10, 0],
      [1, 1, 1, 1, 1, 3, 1, 4, 1, 1],
    ];

    var names = [];
    names[0] = 'empty';
    names[1] = 'stone_E';
    names[2] = 'stoneTile_E';
    names[3] = 'stoneUneven_E';
    names[4] = 'stoneMissingTiles_E';
    names[5] = 'dirt_E';
    names[6] = 'dirtTiles_E';
    names[7] = 'stoneSideUneven_N';
    names[8] = 'planks_E';
    names[9] = 'planksBroken_E';
    names[10] = 'bridge_E';
    names[11] = 'bridgeBroken_N';

    this.emptyGroup = this.game.add.group();
    this.groundGroup = this.game.add.group();

    for (var xt = 0; xt < ground.length; xt += 1) {
      for (var yt = 0; yt < ground[xt].length; yt += 1) {
        this.groundTile = this.game.add.isoSprite(xt * 145, yt * 145, 0, 'dungeon_tiles', names[ground[xt][yt]]);
        this.groundTile.anchor.set(0.5);
        this.game.physics.isoArcade.enableBody(this.groundTile);
        this.groundTile.body.immovable = true;
        if (names[ground[xt][yt]] === 'empty') {
          this.emptyGroup.add(this.groundTile);
        }
      }
    }
    this.player = new Player(this.game);
    this.add.existing(this.player);
    this.game.physics.isoArcade.enable(this.player);
  }

  update() {
    this.game.physics.isoArcade.collide(this.player.sprite, this.emptyGroup);
    this.game.iso.topologicalSort(this.emptyGroup);
  }
  render() {
    this.game.debug.spriteInfo(this.player, 32, 32);
    this.game.debug.inputInfo(32, 128);
  }
}

export default Game;
