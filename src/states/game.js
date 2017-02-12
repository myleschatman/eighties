import Player from '../prefabs/player';

class Game extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    this.input.onDown.add(this.endGame, this);
    this.cursors = this.game.input.keyboard.createCursorKeys();

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

    var zt = 0;

    for (var xt = 0; xt < ground.length; xt += 1) {
        for (var yt = 0; yt < ground[xt].length; yt += 1) {
          this.floorTile = this.game.add.isoSprite(xt * 145, yt * 145, zt, 'dungeon_tiles', names[ground[xt][yt]]);
          this.floorTile.anchor.set(0.5);
          zt -= 10;
        }
        zt += 90;
    }

    this.player = new Player(this.game);
    this.physics.isoArcade.enable(this.player);

    this.game.camera.follow(this.player.sprite);
  }

  walk() {
    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.player.y -= this.player.speed + 1;
      this.player.play('Walk_NE');
    }
    else if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.player.x -= this.player.speed + 1;
      this.player.play('Walk_NW');
    }
    else if (this.cursors.down.isDown && this.cursors.right.isDown) {
      this.player.x += this.player.speed + 1;
      this.player.play('Walk_SE');
    }
    else if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.player.y += this.player.speed + 1;
      this.player.play('Walk_SW');
    }
    else if (this.cursors.up.isDown) {
      this.player.x -= this.player.speed;
      this.player.y -= this.player.speed;
      this.player.play('Walk_N');
    }
    else if (this.cursors.down.isDown) {
      this.player.x += this.player.speed;
      this.player.y += this.player.speed;
      this.player.play('Walk_S');
    }
    else if (this.cursors.right.isDown) {
      this.player.x += this.player.speed;
      this.player.y -= this.player.speed;
      this.player.play('Walk_E');
    }
    else if (this.cursors.left.isDown) {
      this.player.x -= this.player.speed;
      this.player.y += this.player.speed;
      this.player.play('Walk_W');
    }
    else {
      this.player.stop();
    }
  }

  update() {
    this.walk();
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
