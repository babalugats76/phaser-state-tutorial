var playState = {

<<<<<<< HEAD
    create: function() {
       console.log("Adding the keyboard");
       this.keyboard = game.input.keyboard;

       console.log("Adding player to the game and enabling physics");
       this.player = game.add.sprite(16,16,'player');
       game.physics.enable(this.player, Phaser.Physics.ARCADE);

       console.log("Adding win sprite to the game and enabling physics");
       this.win = game.add.sprite(256,256,'win');
       game.physics.enable(this.win, Phaser.Physics.ARCADE);
    },

    update: function() {

       game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

       if(this.keyboard.isDown(Phaser.Keyboard.A)) {
         this.player.body.velocity.x = -175;
       } else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
         this.player.body.velocity.x = 175;
       } else {
         this.player.body.velocity.x = 0;
       }

       if(this.keyboard.isDown(Phaser.Keyboard.W)) {
         this.player.body.velocity.y = -175;
       } else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
         this.player.body.velocity.y = 175;
       } else {
         this.player.body.velocity.y = 0;
       }

    },

    Win: function() {
      console.log('Starting Win Game State');
      game.state.start('win');
    }

=======
>>>>>>> efb67515e92145b027687b4de984db8e2836637e
};
