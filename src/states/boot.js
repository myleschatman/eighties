export default class Boot extends Phaser.State {
  preload() {

  }
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.state.start('Preload');
  }
}
