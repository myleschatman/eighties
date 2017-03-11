import Player from '../prefabs/player';
import Dungeon from '../maps/dungeon';

class Game extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.obstacleGroup = this.game.add.group();
    this.groundGroup = this.game.add.group();
    this.wallGroup = this.game.add.group();

    for (let xt = 0; xt < Dungeon.ground.length; xt += 1) {
      for (let yt = 0; yt < Dungeon.ground[xt].length; yt += 1) {
        this.groundTile = this.game.add.isoSprite(xt * 145, yt * 145, 0, 'dungeon_tiles', Dungeon.groundNames[Dungeon.ground[xt][yt]], this.groundGroup);
        this.groundTile.anchor.set(0.5, 0.75);
        this.game.physics.isoArcade.enableBody(this.groundTile);
        this.groundTile.body.immovable = true;
        if (Dungeon.groundNames[Dungeon.ground[xt][yt]] === 'empty') {
          this.obstacleGroup.add(this.groundTile);
        }
      }
    }
    for (let xt = 0; xt < Dungeon.wall.length; xt += 1) {
      for (let yt = 0; yt < Dungeon.wall[xt].length; yt += 1) {
        this.wallTile = this.game.add.isoSprite(xt * 145, yt * 145, 0, 'dungeon_tiles', Dungeon.wallNames[Dungeon.wall[xt][yt]], this.wallGroup);
        this.wallTile.anchor.set(0.5, 0.75);
        this.game.physics.isoArcade.enableBody(this.wallTile);
        this.wallTile.body.immovable = true;
      }
    }
    this.player = new Player(this.game);
    this.game.add.existing(this.player);
    this.obstacleGroup.add(this.player.sprite);
    this.wallGroup.add(this.player.sprite);
  }
  update() {
    this.game.physics.isoArcade.collide(this.player.sprite, this.obstacleGroup);
    this.game.iso.simpleSort(this.wallGroup);
  }
  render() {
    this.game.debug.spriteInfo(this.player, 32, 32);
    this.game.debug.inputInfo(32, 128);
  }
}

export default Game;
