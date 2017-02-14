export default class Player extends Phaser.Sprite {
  constructor(game) {
    super(game);

    this.sprite = this.game.add.isoSprite(350, 280, 0, 'player', 0);
    this.scale.setTo(0.9);
    this.anchor.set(0.5, 1);

    this.sprite.animations.add('Walk_N', Phaser.Animation.generateFrameNames('frame_', 1, 19), 20, true);
    this.sprite.animations.add('Walk_NE', Phaser.Animation.generateFrameNames('frame_', 20, 39), 20, true);
    this.sprite.animations.add('Walk_E', Phaser.Animation.generateFrameNames('frame_', 40, 59), 20, true);
    this.sprite.animations.add('Walk_SE', Phaser.Animation.generateFrameNames('frame_', 60, 79), 20, true);
    this.sprite.animations.add('Walk_S', Phaser.Animation.generateFrameNames('frame_', 80, 99), 20, true);
    this.sprite.animations.add('Walk_SW', Phaser.Animation.generateFrameNames('frame_', 100, 119), 20, true);
    this.sprite.animations.add('Walk_W', Phaser.Animation.generateFrameNames('frame_', 120, 139), 20, true);
    this.sprite.animations.add('Walk_NW', Phaser.Animation.generateFrameNames('frame_', 140, 159), 20, true);

    this.sprite.speed = 100;

    this.game.physics.isoArcade.enable(this.sprite);
    this.game.camera.follow(this.sprite);
    this.cursors = this.game.input.keyboard.createCursorKeys();

  }
  update() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_NE');
    }
    else if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed;
      this.sprite.animations.play('Walk_NW');
    }
    else if (this.cursors.down.isDown && this.cursors.right.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed;
      this.sprite.animations.play('Walk_SE');
    }
    else if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.sprite.body.velocity.y = this.sprite.speed;
      this.sprite.animations.play('Walk_SW');
    }
    else if (this.cursors.up.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed;
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_N');
    }
    else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed;
      this.sprite.body.velocity.y = this.sprite.speed;
      this.sprite.animations.play('Walk_S');
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed;
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_E');
    }
    else if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x -= this.sprite.speed;
      this.sprite.body.velocity.y += this.sprite.speed;
      this.sprite.animations.play('Walk_W');
    }
    else {
      this.sprite.animations.stop();
    }
  }
}
