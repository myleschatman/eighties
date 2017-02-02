import Boot from './states/boot';
import Preload from './states/preload';
import GameState from './states/gamestate';

class Game extends Phaser.Game {
  constructor() {
    super(1280, 720, Phaser.AUTO, null);
    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('GameState', GameState, false);
    this.state.start('Boot');
  }
}
new Game();
