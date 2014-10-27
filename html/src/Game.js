
BasicGame.Game = function (game) {

  // When a State is added to Phaser it automatically has the
  // following properties set on it, even if they already exist:

  this.game;       //  a reference to the currently running game
  this.add;        //  used to add sprites, text, groups, etc
  this.camera;     //  a reference to the game camera
  this.cache;      //  the game cache
  this.input;      //  the global input manager (you can access
                   //  this.input.keyboard, this.input.mouse, as well
                   //  from it)
  this.load;       //  for preloading assets
  this.math;       //  lots of useful common math operations
  this.sound;      //  the sound manager - add a sound, play one,
                   //  set-up markers, etc
  this.stage;      //  the game stage
  this.time;       //  the clock
  this.tweens;     //  the tween manager
  this.world;      //  the game world
  this.particles;  //  the particle manager
  this.physics;    //  the physics manager
  this.rnd;        //  the repeatable random number generator

 //  You can use any of these from any function within this State.
 //  But do consider them as being 'reserved words', i.e. don't create
 //  a property for your own game called "world" or you'll over-write
 //  the world reference.

};


BasicGame.Game.prototype = {

  create: function () {

    var spr = this.add.sprite(this.game.world.centerX, this.game.world.centerY,
                              'duke');
    spr.pivot.x = spr.width * .5;
    spr.pivot.y = spr.height * .5;
    spr.animations.add('wave', null, 8, true);
    spr.play('wave');

    var fullscreen =
      this.add.button(this.game.width-8, this.game.height-8,
                      'fullscreen',
                      BasicGame.toggleFullscreen,
                      this,
                      'over', 'up', 'down');
    fullscreen.pivot.x = fullscreen.width;
    fullscreen.pivot.y = fullscreen.height;

  },

  update: function () {

  },

  quitGame: function (pointer) {

    this.state.start('MainMenu');
  }

};