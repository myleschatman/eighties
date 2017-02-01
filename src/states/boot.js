import Player from '../prefabs/player';

export default class Boot extends Phaser.State {
  preload() {
    this.load.spritesheet('player', '../build/assets/img/chars/feca_female_spritesheet.png', 260, 260, 95);
  }
  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // this.player = new Player(this.game);
    // this.player.scale.setTo(0.6, 0.6);
    // this.add.existing(this.player);
  }
}
