class Preloader extends Phaser.State {

  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    //setup loading bar
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(this.asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  update() {
    if (this.ready) {
      // change back to menu
      this.game.state.start('game');
    }
  }

  loadResources() {
    // load your resources here
    this.game.load.atlas('dungeon_tiles',
      '../../assets/maps/dungeon_tiles.png',
      '../../assets/maps/dungeon_tiles.json'
    );
    this.game.load.atlas('player',
      '../../assets/feca_female/feca_female_walk/feca_female_walk.png',
      '../../assets/feca_female/feca_female_walk/feca_female_walk.json'
    );
  }

  onLoadComplete() {
    this.ready = true;
  }
}

export default Preloader;