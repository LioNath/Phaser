import Phaser from "phaser";
export default class CoronaBusterScene extends Phaser.Scene {
  constructor() {
    super("corona-buster-scene");
  }
  init() {
    this.clouds = undefined;
    this.nav_left = false;
this.nav_right = false;
this.shoot = false;
  }

  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("cloud", "images/cloud.png")
    this.load.image("shoot", "images/shoot-btn.png")
    this.load.image("right-btn", "images/right-btn.png")
    this.load.image("left-btn", "images/left-btn.png")
    
  }
  create() {
    const gameWidht = this.scale.width * 0.5;
    const gameHeight = this.scale.height * 0.5;
    this.add.image(gameWidht, gameHeight, "background");

    this.clouds = this.physics.add.group({
        key: "cloud",
        repeat: 10,  //----------------------> Try to change the number to be greater or smaller
      });
      
      Phaser.Actions.RandomRectangle(this.clouds.getChildren(), this.physics.world.bounds);

      this.createButton()
    
  }
  update(time) {
    this.clouds.children.iterate((child) => {
        child.setVelocityY(20);
      });   

      this.clouds.children.iterate((child) => { //-----------> for each cloud in the cloud set
        child.setVelocityY(20); //----------> move down
        if (child.y > this.scale.height) { //---------->  if it crosses the lower bound
          child.x = Phaser.Math.Between(10, 400); //----------> the cloud position is moved to the top of the layout
          child.y = 0;
        }
      });
      
    
  }



createButton(){
    this.input.addPointer(3)
    
    let shoot = this.add.image(320,550, 'shoot').setInteractive().setDepth(0.5).setAlpha(0.8)
    
    let nav_left = this.add.image(50,550, 'left-btn').setInteractive().setDepth(0.5).setAlpha(0.8)
    
    let nav_right = this.add.image(nav_left.x + nav_left.displayWidth+20, 550,'right-btn').setInteractive().setDepth(0.5).setAlpha(0.8)



    nav_left.on(
        "pointerdown",
        () => {       //---------> When the pointer is up (clicked) then the nav left property will be true
          this.nav_left = true;
        },
        this
      );
      nav_left.on(
        "pointerout",
        () => {      //----------> When the pointer is out (not clicked) then the nav left property will be false
          this.nav_left = false;
        },
        this
      );
      nav_right.on(
        "pointerdown",
        () => {
          this.nav_right = true;
        },
        this
      );
      nav_right.on(
        "pointerout",
        () => {
          this.nav_right = false;
        },
        this
      );
      shoot.on(
        "pointerdown",
        () => {
          this.shoot = true;
        },
        this
      );
      shoot.on(
        "pointerout",
        () => {
          this.shoot = false;
        },
        this
      );
}
}