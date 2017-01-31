export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }
  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  }
}
