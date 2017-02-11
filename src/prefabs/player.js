export default class Player extends Phaser.Sprite {
  constructor(game) {
    super(game);

    this.sprite = this.game.add.isoSprite(350, 280, 0, 'player', 0);
    this.sprite.scale.setTo(0.9);
    this.sprite.anchor.set(0.5, 1);
    this.sprite.animations.add('Walk_N', Phaser.Animation.generateFrameNames('frame_', 1, 19), 20, true);
    this.sprite.animations.add('Walk_NE', Phaser.Animation.generateFrameNames('frame_', 20, 39), 20, true);
    this.sprite.animations.add('Walk_E', Phaser.Animation.generateFrameNames('frame_', 40, 59), 20, true);
    this.sprite.animations.add('Walk_SE', Phaser.Animation.generateFrameNames('frame_', 60, 79), 20, true);
    this.sprite.animations.add('Walk_S', Phaser.Animation.generateFrameNames('frame_', 80, 99), 20, true);
    this.sprite.animations.add('Walk_SW', Phaser.Animation.generateFrameNames('frame_', 100, 119), 20, true);
    this.sprite.animations.add('Walk_W', Phaser.Animation.generateFrameNames('frame_', 120, 139), 20, true);
    this.sprite.animations.add('Walk_NW', Phaser.Animation.generateFrameNames('frame_', 140, 159), 20, true);

    this.speed = 2;
  }
  play(animation) {
    this.sprite.animations.play(animation);
  }
  stop() {
    this.sprite.animations.stop();
  }
  get x() {
    return this.sprite.isoX;
  }

  set x(isoX) {
    this.sprite.isoX = isoX;
  }

  get y() {
    return this.sprite.isoY;
  }

  set y(isoY) {
    this.sprite.isoY = isoY;
  }
}
