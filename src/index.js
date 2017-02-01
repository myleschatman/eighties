import Boot from './states/boot';

class Game extends Phaser.Game {
  constructor() {
    super(1280, 720, Phaser.AUTO, null);
    this.state.add('Boot', Boot, false);
    this.state.start('Boot');
  }
}
new Game();
