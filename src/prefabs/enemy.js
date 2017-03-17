export default class Player extends Phaser.Sprite {
  constructor(game) {
    super(game);

    this.sprite = this.game.add.isoSprite(550, 580, 0, 'enemy', 0);
    this.sprite.anchor.set(0.5, 0.75);
    this.sprite.scale.setTo(0.8);

    this.sprite.animations.add('Walk_N', Phaser.Animation.generateFrameNames('frame_', 1, 14), 20, true);
    this.sprite.animations.add('Walk_NE', Phaser.Animation.generateFrameNames('frame_', 15, 28), 20, true);
    this.sprite.animations.add('Walk_E', Phaser.Animation.generateFrameNames('frame_', 29, 42), 20, true);
    this.sprite.animations.add('Walk_SE', Phaser.Animation.generateFrameNames('frame_', 43, 56), 20, true);
    this.sprite.animations.add('Walk_S', Phaser.Animation.generateFrameNames('frame_', 57, 70), 20, true);
    this.sprite.animations.add('Walk_SW', Phaser.Animation.generateFrameNames('frame_', 71, 84), 20, true);
    this.sprite.animations.add('Walk_W', Phaser.Animation.generateFrameNames('frame_', 85, 98), 20, true);
    this.sprite.animations.add('Walk_NW', Phaser.Animation.generateFrameNames('frame_', 99, 112), 20, true);

    this.idle = [112, 113, 114, 115, 116, 117, 118, 119];
    this.sprite.speed = 350;

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.physics.isoArcade.enable(this.sprite);
    this.game.camera.follow(this.sprite);

    console.log(this.sprite.body);
  }
  run() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.sprite.body.velocity.y = -this.sprite.speed -50;
      this.sprite.animations.play('Walk_NE');
      this.sprite.body.direction = 6;
    }
    else if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed -50;
      this.sprite.animations.play('Walk_NW');
      this.sprite.body.direction = 0;
    }
    else if (this.cursors.down.isDown && this.cursors.right.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed +50;
      this.sprite.animations.play('Walk_SE');
      this.sprite.body.direction = 4;
    }
    else if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.sprite.body.velocity.y = this.sprite.speed +50;
      this.sprite.animations.play('Walk_SW');
      this.sprite.body.direction = 2;
    }
    else if (this.cursors.up.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed;
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_N');
      this.sprite.body.direction = 7;
    }
    else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed;
      this.sprite.body.velocity.y = this.sprite.speed;
      this.sprite.animations.play('Walk_S');
      this.sprite.body.direction = 3;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed;
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_E');
      this.sprite.body.direction = 5;
    }
    else if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x -= this.sprite.speed;
      this.sprite.body.velocity.y += this.sprite.speed;
      this.sprite.animations.play('Walk_W');
      this.sprite.body.direction = 1;
    }
    else {
      this.sprite.animations.stop();
      this.sprite.frame = this.idle[this.sprite.body.direction];
    }
  }
  update() {
    this.run();
  }
}
