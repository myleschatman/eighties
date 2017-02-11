import Player from '../prefabs/player';

class Game extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    this.input.onDown.add(this.endGame, this);
    this.cursors = this.game.input.keyboard.createCursorKeys();

    const ground = [
      [0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    var names = [];
    names[0] = 'stone_E';
    names[1]
    this.floorTile;
    var zt = 0;
    // for (var xt = 0; xt < 290; xt += 145) {
    //     for (var yt = 0; yt < 290; yt += 145) {
    //       floorTile = this.game.add.isoSprite(xt, yt, zt, 'stone_N', 0);
    //       floorTile.anchor.set(0.5);
    //       zt -= 10;
    //     }
    //     zt += 10;
    // }

    for (var xt = 0; xt < ground.length; xt += 1) {
        for (var yt = 0; yt < ground[xt].length; yt += 1) {
          this.floorTile = this.game.add.isoSprite(xt * 145, yt * 145, zt, 'stone_E', 0);
          this.floorTile.anchor.set(0.5);
          zt -= 10;
        }
        zt += 80;
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
