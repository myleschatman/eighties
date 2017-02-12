class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');

    // FPS rate, FPS min/max, suggestedFps and msMin/msMax are updated.
    this.game.time.advancedTiming = true;

    // Add and enable the plug-in.
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));

    this.game.world.setBounds(0, 0, 3072, 2048);

    // Start the IsoArcade physics system.
    this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

    // Set a game canvas-based offset for the 0, 0, 0 isometric coordinate
    this.game.iso.anchor.setTo(0.5, 0);
  }

  create() {
    this.game.input.maxPointers = 1;

    //setup device scaling
    if (this.game.device.desktop) {
      this.game.scale.pageAlignHorizontally = true;
    } else {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.minWidth =  480;
      this.game.scale.minHeight = 260;
      this.game.scale.maxWidth = 640;
      this.game.scale.maxHeight = 480;
      this.game.scale.forceOrientation(true);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.setScreenSize(true);
    }

    this.initGlobalVariables();

    this.game.state.start('preloader');
  }

  initGlobalVariables(){
    this.game.global = {

    };
  }

}

export default Boot;
