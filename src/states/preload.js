export default class Preload extends Phaser.State {
  preload() {
    this.load.spritesheet('player', '../build/assets/img/chars/feca_female_spritesheet.png', 260, 260, 152);
  }
  create() {
    this.state.start('GameState');
  }
}
