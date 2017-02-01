export default class Player extends Phaser.Sprite {
  constructor(game) {
    super(game, 0, 0, 'player');

    this.game.physics.arcade.enableBody(this);
    this.game.physics.arcade.enable(this);

    this.game.camera.follow(this);

    this.animations.add('walk-east',[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 20, true);
    this.animations.add('walk-west', [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], 20, true);
    this.animations.add('walk-southwest', [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56], 20, true);
    this.animations.add('walk-north', [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75], 20, true);
    this.animations.add('walk-northeast', [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94], 20, true);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.animations.play('walk-northeast');
      this.body.velocity.x += 120;
      this.body.velocity.y -= 120;
    }
    else if (this.cursors.up.isDown) {
      this.animations.play('walk-north');
      this.body.velocity.y -= 180;
    }

    else if (this.cursors.right.isDown) {
      this.animations.play('walk-east');
      this.body.velocity.x +=180;
    }
    else if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.animations.play('walk-southwest');
      this.body.velocity.x -= 120;
      this.body.velocity.y += 120;
    }
    else if (this.cursors.left.isDown) {
      this.animations.play('walk-west');
      this.body.velocity.x -= 180;
    }
    else {
      this.body.velocity.x = 0;
    }

    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      this.animations.stop();
    }
  }
}
