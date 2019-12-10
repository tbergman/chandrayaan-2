import TWEEN from '@tweenjs/tween.js';

class EarthSceneController {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }

  animateCameraPosition1(object) {
    return new TWEEN.Tween(this.camera.position)
      .to({ x: -300, y: 120, z: 300 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition2(object) {
    this.camera.position.set(0, 40, 50);
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 0, y: 100, z: 100 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition3(object) {
    this.camera.position.set(100, 20, 350);
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 70, y: 100, z: 100 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition4(object) {
    new TWEEN.Tween(this.camera.position)
      .to({ x: 0, y: 250, z: 70 }, 5000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      })
      .start();
  }

  animate(object) {
    this.animateCameraPosition1(object)
      .start()
      .onComplete(() => {
        this.animateCameraPosition2(object)
          .start()
          .onComplete(() => {
            this.animateCameraPosition3(object)
              .start()
              .onComplete(() => this.animateCameraPosition4(object));
          });
      });
  }

  update(delta) {
    requestAnimationFrame(() => this.update());
    TWEEN.update(delta);
  }

  // cancelUpdate() {}
  // window.cancelAnimationFrame(this.update);
  // }
}

export default EarthSceneController;