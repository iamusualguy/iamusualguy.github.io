let materialFirstCylinder, materialSecondCylinder;
let face;
let composer;

let faceInScale = 0;

let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let particleLight;
const size = 500;

const container = document.getElementById("container");
const workFollower = document.getElementById('workFollower');
const follower = document.getElementById('cursor');
let stopFollowing = false;

var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
  document.getElementById('cursor').remove();
  document.getElementById('workFollower').remove();

} else {
  var allImgs = document.getElementsByClassName("img");
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].style.display = "none";
  }
}

// cursor handler
if (!isMobile) {
  { //
    var allLinks = document.getElementsByClassName("link");

    for (let i = 0; i < allLinks.length; i++) {
      allLinks[i].addEventListener("mouseover", function (e) {
        // highlight the mouseenter target
        // event.target.style.color = "purple";
        stopFollowing = true;

        var rect = e.target.getBoundingClientRect();


        follower.style = '';
        follower.style.width = `${rect.width}px`
        follower.style.height = `${rect.height}px`
        follower.style.left = `${rect.x}px`;
        follower.style.top = `${rect.y}px`;
        follower.style.marginTop = `-3px`;
        follower.style.marginLeft = `-3px`;
        follower.style.transition = "width 0.3s, height 0.3s, top 0.3s, left 0.3s, border-radius 0.3s";
        follower.style.borderRadius = `5px`;
      });

      allLinks[i].addEventListener("mouseleave", function (e) {
        stopFollowing = false;
        follower.style = ``;
        follower.style.transition = "top: 0s, left 0s, width 0s, height 0s, border-radius 0.5s";
      });
    }
  }

  { // work follower
    var allWorks = document.getElementsByClassName("work");

    for (let i = 0; i < allWorks.length; i++) {
      allWorks[i].addEventListener("mouseover", function (e) {
        var rect = e.target.getBoundingClientRect();

        workFollower.style = '';
        workFollower.style.height = `50vh`;
        workFollower.style.backgroundImage = `url("${allWorks[i].getAttribute("data-url")}")`;
      });

      allWorks[i].addEventListener("mouseleave", function (e) {
        stopFollowing = false;
        workFollower.style = ``;
      });
    }
  }


  window.addEventListener("mousedown", function (event) {
    follower.className = "click";
    setTimeout(() => {
      follower.className = "0";
    }, 500);
  });
}



// cursor end


var texture = new THREE.Texture();

{
  const loader = new THREE.ObjectLoader();

  loader.load(
    "8.json",
    // onLoad callback
    function (obj) {
      face = obj;
      obj.position.y -= 250;
      obj.position.z -= 70;
      obj.scale.set(0, 0, 0);
      scene.add(obj);
      document.getElementById("loader").remove();
    },

    // onProgress callback
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },

    // onError callback
    function (err) {
      console.error('An error happened');
    }
  );
}

// camera setup
const camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
camera.position.z = 350;
camera.position.y = 0;

// scene setup
const scene = new THREE.Scene();
scene.add(new THREE.AmbientLight(0xffffff));

// 3D models wrapper container
let cylinderContainer = new THREE.Object3D();

// 3D model geometry
const geometry = new THREE.CylinderBufferGeometry(200, 200, 70, 32, 1, true);

// object materials
materialFirstCylinder = new THREE.MeshStandardMaterial({
  color: "#000",
  roughness: 1,
  transparent: false,
  side: THREE.BackSide,
  alphaTest: 0.5,
});

materialSecondCylinder = new THREE.MeshStandardMaterial({
  color: "#000",
  transparent: false,
  side: THREE.FrontSide,
  alphaTest: 0.5
});

// text textures
let firstTex = document.createElement("canvas");
let firstContext = firstTex.getContext("2d");
let secondTex = document.createElement("canvas");
let secondContext = secondTex.getContext("2d");

firstTex.width = secondTex.width = 4096;

firstTex.height = secondTex.height = 276;

firstContext.font = secondContext.font = "Bold 200px Arial";

firstContext.fillStyle = secondContext.fillStyle = "white";
firstContext.translate(4096, 0);
firstContext.scale(-1, 1);

firstContext.fillText("степанов антон степанов антон степанов антон ", 0, 240, 4096);
secondContext.fillText("anton stepanov anton stepanov anton stepanov ", 0, 240, 4096);

var firstTexture = new THREE.Texture(firstTex);
var secondTexture = new THREE.Texture(secondTex);

firstTexture.needsUpdate = secondTexture.needsUpdate = true;

materialFirstCylinder.alphaMap = firstTexture;
materialSecondCylinder.alphaMap = secondTexture;
materialSecondCylinder

materialFirstCylinder.alphaMap.magFilter = materialSecondCylinder.alphaMap.magFilter =
  THREE.NearestFilter;

materialFirstCylinder.alphaMap.wrapT = materialSecondCylinder.alphaMap.wrapT =
  THREE.RepeatWrapping;

materialFirstCylinder.alphaMap.repeat.y = materialSecondCylinder.alphaMap.repeat.y = 1;

// init objects
cylinder1 = new THREE.Mesh(geometry, materialFirstCylinder);
cylinder2 = new THREE.Mesh(geometry, materialSecondCylinder);

// add objects to main object wrapper
cylinderContainer.add(cylinder1);
cylinderContainer.add(cylinder2);

// positioning objects
cylinder1.position.y = 0;
cylinder2.position.y = 0;
cylinder2.rotation.y = Math.PI / 2;

// positioning main object wrapper
cylinderContainer.position.z = -100;
cylinderContainer.position.x = 0;
cylinderContainer.rotation.x = -Math.PI / 10;
cylinderContainer.rotation.y = Math.PI / 10;

// adding main object wrapper to scene
scene.add(cylinderContainer);

// WebGL renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(size, size);

// add canvas to dom
container.appendChild(renderer.domElement);

composer = new THREE.EffectComposer(renderer);
composer.addPass(new THREE.RenderPass(scene, camera));

pixelPass = new THREE.ShaderPass(THREE.PixelShader);
pixelPass.uniforms["pixelSize"].value = isMobile ? 7 : 10;
pixelPass.uniforms["resolution"].value = new THREE.Vector2(window.innerWidth, window.innerHeight);
pixelPass.uniforms["resolution"].value.multiplyScalar(window.devicePixelRatio);
composer.addPass(pixelPass);

let rotateShift = 0;

function render() {
  const timer = Date.now() * 0.0005;
  requestAnimationFrame(render);
  rotateShift += 0.01;
  cylinder2.rotation.y = Math.PI / 2 - timer;
  cylinder1.rotation.y = Math.PI / 2 - timer;


  if (face) {
    if (faceInScale < 10) {
      faceInScale += 1;
      face.position.y += 20;
    };
    face.scale.set(faceInScale, faceInScale, faceInScale);
    face.rotation.x = (mouseY) * .001;
    face.rotation.y = (mouseX) * .001;
  }
  // renderer.render(scene, camera);
  composer.render();
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;

  if (!isMobile) {
    workFollower.style.top = event.clientY + 'px';
    workFollower.style.left = event.clientX + 'px';
    if (!stopFollowing) {
      follower.style.top = event.clientY + 'px';
      return follower.style.left = event.clientX + 'px';
    }
  }
}
function getAccel() {
  // if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
  DeviceMotionEvent.requestPermission().then(response => {
    if (response == 'granted') {

      window.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      // Add a listener to get smartphone orientation 
      window.addEventListener('deviceorientation', (event) => {
        mouseX = event.gamma * 10;
        mouseY = event.beta * 2 - 1;
      });
    }
  });
  // }
}
window.addEventListener('resize', onWindowResize);
document.addEventListener('mousemove', onDocumentMouseMove);

render();

//hide scroll
document.getElementById('parralax').addEventListener('scroll', function (e) {
  const scroll = document.getElementById('scroll');
  if (scroll) {
    if (this.scrollTop === 0) {
      scroll.className = `scroll`;
    } else {
      scroll.className = `scroll hide`;
    }
  }

  const roundyabout = document.getElementById("roundyabout");
  roundyabout.style.transform = `rotate(${this.scrollTop * 0.07}deg)`;

  // const roundyworks = document.getElementById("roundyworks");
  // roundyworks.style.transform = `rotate(${this.scrollTop * 0.07}deg)`;

  const roundycontact = document.getElementById("roundycontact");
  roundycontact.style.transform = `rotate(${this.scrollTop * 0.07}deg)`;

  if (follower) {
    follower.style.width = `1.5em`;
    follower.style.height = `1.5em`;
    follower.style.transition = "width 0s, height 0s, border-radius 0.5s";
    follower.style.borderRadius = "50%";
  }
});

