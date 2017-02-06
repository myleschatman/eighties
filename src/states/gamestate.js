import Player from '../prefabs/player';

export default class GameState extends Phaser.State {
  preload() {

  }
  create() {
    this.player = new Player(this.game);
    this.player.scale.setTo(0.6, 0.6);
    this.add.existing(this.player);
  }

  update() {
    
  }
}
