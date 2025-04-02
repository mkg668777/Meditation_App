window.addEventListener("load", () => {
  const preloadPage = document.querySelector(".preloadPage");
  preloadPage.classList.add("preload-finish");
});

//Name
const form = document.querySelector("form");
const formInput = form.querySelector("#name");

formInput.value = localStorage.getItem("Name") || "[Enter Name]";

formInput.addEventListener("input", () => {
  const enteredName = localStorage.setItem("Name", formInput.value);
});

//Day greeting function
function DisplayDay() {
  const dayWishes = document.querySelector("#time");

  setTimeout(() => {
    const currTime = new Date().getHours();
    console.log(currTime);
    if (currTime >= 0 && currTime <= 12) {
      dayWishes.innerText = "Morning";
    } else if (currTime >= 13 && currTime <= 18) {
      dayWishes.innerText = "afternoon";
    } else if (currTime >= 19 && currTime <= 24) {
      dayWishes.innerText = "evening";
    }
  });
}
DisplayDay(); //function call

//Sidebar
const sceneContainer = document.querySelector(".sceneContainer");
const sideBar = document.querySelectorAll(".sidebar button");

const sideBar1 = document.querySelector(".sidebar");
const sideBarBtn = document.querySelector(".sideBar-btn");
const sideBarBtnIcon = document.querySelector(".sideBar-btn i");
let isSideBarOpen = false;

sideBarBtn.addEventListener("click", () => {
  if (!isSideBarOpen) {
    sideBar1.style.display = "flex";
    sideBarBtnIcon.classList.remove("fa-bars");
    sideBarBtnIcon.classList.add("fa-times");
    isSideBarOpen = true;
  } else {
    sideBar1.style.display = "none";
    sideBarBtnIcon.classList.add("fa-bars");
    sideBarBtnIcon.classList.remove("fa-times");
    isSideBarOpen = false;
  }
});

sideBar.forEach((link, _, arr) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    arr.forEach((page) => {
      page.classList.remove("nav-iconBg");
    });

    link.classList.add("nav-iconBg");
  });
});
// default
document.querySelector(".main-container").style.display = "block";
document.querySelector(".musicContainer").style.display = "none";
document.querySelector(".sceneContainer").style.display = "none";
document.querySelector(".Relax-Container").style.display = "none";
document.querySelector(".HopeContainer").style.display = "none";

//  home
sideBar[0].addEventListener("click", () => {
  document.querySelector(".main-container").style.display = "block";
  document.querySelector(".musicContainer").style.display = "none";
  document.querySelector(".sceneContainer").style.display = "none";
  document.querySelector(".Relax-Container").style.display = "none";
  document.querySelector(".HopeContainer").style.display = "none";
});
//music
sideBar[1].addEventListener("click", () => {
  document.querySelector(".main-container").style.display = "none";
  document.querySelector(".musicContainer").style.display = "block";
  document.querySelector(".sceneContainer").style.display = "none";
  document.querySelector(".Relax-Container").style.display = "none";
  document.querySelector(".HopeContainer").style.display = "none";
});
//scene
sideBar[2].addEventListener("click", () => {
  document.querySelector(".main-container").style.display = "none";
  document.querySelector(".musicContainer").style.display = "none";
  document.querySelector(".sceneContainer").style.display = "block";
  document.querySelector(".Relax-Container").style.display = "none";
  document.querySelector(".HopeContainer").style.display = "none";
});

//Relax
sideBar[3].addEventListener("click", () => {
  document.querySelector(".main-container").style.display = "none";
  document.querySelector(".musicContainer").style.display = "none";
  document.querySelector(".sceneContainer").style.display = "none";
  document.querySelector(".Relax-Container").style.display = "block";
  document.querySelector(".HopeContainer").style.display = "none";
});

//talk
sideBar[4].addEventListener("click", () => {
  document.querySelector(".main-container").style.display = "none";
  document.querySelector(".musicContainer").style.display = "none";
  document.querySelector(".sceneContainer").style.display = "none";
  document.querySelector(".Relax-Container").style.display = "none";
  document.querySelector(".HopeContainer").style.display = "block";
});

//Greeting Text
const greetingText = document.querySelector(".greetings");

const greetings = [
  "You matter.",
  "You're awesome!",
  "You did great today!",
  "I believe in you!",
  "You are loved!",
  "You are worthy",
  "Keep going!",
  "I love you!",
  "Make it happen.",
  "Be a light.",
  "Know your worth.",
  "Things will get better",
  "Be good. Do good.",
  "Follow your heart.",
  "Stay hopeful!",
  "You are strong!",
  "Protect your peace.",
  "Be still.",
  "You are beautiful!",
  "Keep on fighting!",
];

//Function to display greeting
function displayGreeting(arr) {
  for (let text = 0; text < arr.length; text++) {
    setTimeout(() => {
      greetingText.innerText = arr[text];
    }, text * 2000);
  }
}
displayGreeting(greetings);

// accordian part
const accIcon = document.querySelectorAll(".accord i");

accIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    const para = icon.parentElement.nextElementSibling;

    if (para.classList.contains("hidden")) {
      para.classList.remove("hidden");
      icon.classList.remove("fa-sort-desc");
      icon.classList.add("fa-sort-asc");
    } else {
      para.classList.add("hidden");
      icon.classList.remove("fa-sort-asc");
      icon.classList.add("fa-sort-desc");
    }
  });
});

//accord see more page link
const seeMoreLink = document.querySelector(".accord-anchor");
const CrossIcon = document.querySelector(".crossIcon"); //see more cross icon

seeMoreLink.addEventListener("click", (e) => {
  e.preventDefault();
  // document.querySelector(".main-container").style.display = "none";
  document.querySelector(".seeMoreContainer").style.display = "flex";
});

CrossIcon.addEventListener("click", () => {
  document.querySelector(".seeMoreContainer").style.display = "none";
  document.querySelector(".main-container").style.display = "block";
  console.log(document.querySelector(".seeMoreContainer"));
});

// ************************   Music Part      *********************************
//Music images
const arrImages = [
  {
    img: "Images/1.jpeg",
    title: "Healing Water",
    author: "",
    music: { src: "MusicAudioy/music1.mp3", type: "Nature and Instrument" },
  },
  {
    img: "Images/2.jpeg",
    title: "Kiss the Sky",
    author: "Aakash Gandhi",
    music: { src: "MusicAudioy/music2.mp3", type: "Instrumental" },
  },
  {
    img: "Images/3.jpeg",
    title: "They Said I Can't",
    author: "David Fesliyan",
    music: { src: "MusicAudioy/music3.mp3", type: "Motivating" },
  },
  {
    img: "Images/4.jpeg",
    title: "A Melodious Voice",
    author: "",
    music: { src: "MusicAudioy/music4.mp3", type: "Nature and Instrument" },
  },
  {
    img: "Images/5.jpeg",
    title: "Rise Up",
    author: "Steve Oxen",
    music: { src: "MusicAudioy/music5.mp3", type: "Motivating" },
  },
  {
    img: "Images/6.jpeg",
    title: "Wistful Harp",
    author: "Andrew Huang",
    music: { src: "MusicAudioy/music6.mp3", type: "Instrumental" },
  },
  {
    img: "Images/7.jpeg",
    title: "Grief and Emptiness",
    author: "Steve Oxen",
    music: { src: "MusicAudioy/music7.mp3", type: "Instrumental" },
  },
  {
    img: "Images/8.jpeg",
    title: "Tears of Joy",
    author: "David Fesliyan",
    music: { src: "MusicAudioy/music8.mp3", type: "Motivating" },
  },
  {
    img: "Images/9.jpeg",
    title: "Falling Snow",
    author: "Aakash Gandhi",
    music: { src: "MusicAudioy/music9.mp3", type: "Instrumental" },
  },
  {
    img: "Images/10.jpeg",
    title: "Journey to the Promise",
    author: "David Fesliyan",
    music: { src: "MusicAudioy/music10.mp3", type: "Motivating" },
  },
  {
    img: "Images/11.jpeg",
    title: "Lifting Dreams",
    author: "Aakash Gandhi",
    music: { src: "MusicAudioy/music11.mp3", type: "Instrumental" },
  },
  {
    img: "Images/12.jpeg",
    title: "Forest Sounds",
    author: "",
    music: { src: "MusicAudioy/music12.mp3", type: "Nature Melodies" },
  },
  {
    img: "Images/13.jpeg",
    title: "Heavenly",
    author: "Aakash Gandhi",
    music: { src: "MusicAudioy/music13.mp3", type: "Instrumental" },
  },
  {
    img: "Images/14.jpeg",
    title: "Inspired Thinking",
    author: "Steve Oxen",
    music: { src: "MusicAudioy/music14.mp3", type: "Motivating" },
  },
  {
    img: "Images/15.jpeg",
    title: "Underneath the Tree",
    author: "",
    music: { src: "MusicAudioy/music15.mp3", type: "Nature Melodies" },
  },
  {
    img: "Images/16.jpeg",
    title: "Bioluminescent Waves",
    author: "",
    music: { src: "MusicAudioy/music16.mp3", type: "Nature Melodies" },
  },
  {
    img: "Images/17.jpeg",
    title: "Simple Sonata",
    author: "Sir Cubworth",
    music: { src: "MusicAudioy/music17.mp3", type: "Instrumental" },
  },
  {
    img: "Images/18.jpeg",
    title: "Nocturne Op.9 No.2",
    author: "Chopin",
    music: { src: "MusicAudioy/music18.mp3", type: "Classical Music" },
  },
  {
    img: "Images/19.jpeg",
    title: "Pachabelly",
    author: "Huma Huma",
    music: { src: "MusicAudioy/music19.mp3", type: "Classical Music" },
  },
  {
    img: "Images/20.jpeg",
    title: "All Shall End",
    author: "David Fesliyan",
    music: { src: "MusicAudioy/music20.mp3", type: "Ambient" },
  },
  {
    img: "Images/21.jpeg",
    title: "Serenity",
    author: "David Renda",
    music: { src: "MusicAudioy/music21.mp3", type: "Ambient" },
  },
  {
    img: "Images/22.jpeg",
    title: "Cathedral Ambience",
    author: "David Renda",
    music: { src: "MusicAudioy/music22.mp3", type: "Ambient" },
  },
  {
    img: "Images/23.jpeg",
    title: "Done With Work",
    author: "David Renda",
    music: { src: "MusicAudioy/music23.mp3", type: "Lofi" },
  },
  {
    img: "Images/24.jpeg",
    title: "Vibes",
    author: "David Renda",
    music: { src: "MusicAudioy/music24.mp3", type: "Lofi" },
  },
  {
    img: "Images/25.jpeg",
    title: "Looking Up",
    author: "David Renda",
    music: { src: "MusicAudioy/music25.mp3", type: "Lofi" },
  },
  {
    img: "Images/26.jpeg",
    title: "Mellow Thoughts",
    author: "David Renda",
    music: { src: "MusicAudioy/music26.mp3", type: "Lofi" },
  },
  {
    img: "Images/27.jpeg",
    title: "Piano in the Rain",
    author: "",
    music: { src: "MusicAudioy/music27.mp3", type: "Nature and Instrument" },
  },
  {
    img: "Images/28.jpeg",
    title: "Peace and Happy",
    author: "",
    music: { src: "MusicAudioy/music28.mp3", type: "Nature and Instrument" },
  },
  {
    img: "Images/29.jpeg",
    title: "Sad Winds",
    author: "",
    music: { src: "MusicAudioy/music29.mp3", type: "Nature and Instrument" },
  },
];

const ImageDiv = document.querySelector(".imgDiv");
let currentAudio = null; //Track the current audio
let currentMusicPlayer = null; // Track the current music player

function displayImages(arr) {
  // Display Image Function
  const fragment = document.createDocumentFragment();

  arr.forEach((image) => {
    const Imgparent = document.createElement("div");
    Imgparent.classList.add("Img-parent");

    Imgparent.innerHTML = `<img src = ${image.img}>`;

    const description = document.createElement("div");
    description.classList.add("img-desc");

    description.innerHTML = `
        <p>${image.title} </p>
        <p>${image.author}</p>`;

    //music
    Imgparent.addEventListener("click", (e) => {
      e.preventDefault();
      displayMusicPlayer(image.music);
      playMusic(image.music);
    });

    Imgparent.append(description);
    fragment.append(Imgparent);
  });
  ImageDiv.append(fragment);
}

displayImages(arrImages); //Display all images initially

//Select part
const selectPart = document.querySelector(".selectPart");

selectPart.addEventListener("change", () => {
  const filterValue = selectPart.value;

  ImageDiv.innerHTML = "";
  if (filterValue === "") {
    displayImages(arrImages); //call function display images
  } else {
    const filterImage = arrImages.filter(
      (image) => image.music.type.toLowerCase() === filterValue.toLowerCase()
    );
    displayImages(filterImage);
  }
});

// play sound in Music

function playMusic(music) {
  //Function play Music
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  const audio = document.createElement("audio");
  currentAudio = audio;

  currentAudio.src = music.src;
  currentAudio.type = music.type;
  currentAudio.play();
}

function displayMusicPlayer(music) {
  // function display Music Player

  if (currentMusicPlayer) {
    currentMusicPlayer.remove();
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  }

  const musicPlayerDiv = document.createElement("div");
  musicPlayerDiv.classList.add("music-player");

  const stopIcon = document.createElement("span");
  stopIcon.classList.add("stopIcon-music");

  const volumeIcon = document.createElement("span");
  volumeIcon.classList.add("volumeIcon-music");

  const volumeValue = document.createElement("span");
  volumeValue.classList.add("volume-value");

  const soundRange = document.createElement("input");
  soundRange.classList.add("sound-range");

  const replayIcon = document.createElement("span");
  replayIcon.classList.add("replayIcon-music");
  replayIcon.innerHTML = `<i class ="fa-solid fa-rotate-right"></i>`;

  stopIcon.innerHTML = `<i class="fa-solid fa-stop"></i>`;
  volumeIcon.innerHTML = `<i class="fa fa-volume-up" aria-hidden="true"></i>`;

  soundRange.type = "range";
  soundRange.min = 0;
  soundRange.max = 1;
  soundRange.step = 0.1;
  soundRange.value = 0.5;

  volumeValue.innerText = soundRange.value * 100;

  //create a audio element
  const audio = new Audio(music);
  audio.volume = soundRange.value;
  audio.play();

  currentAudio = audio;
  currentMusicPlayer = musicPlayerDiv;

  // progress bar - volume
  soundRange.addEventListener("input", () => {
    console.log(soundRange.value);
    currentAudio.volume = soundRange.value;
    volumeValue.innerText = soundRange.value * 100;
  });

  //stop music
  stopIcon.addEventListener("click", () => {
    stopMusic();
    musicPlayerDiv.style.display = "none";
  });

  //replay
  replayIcon.addEventListener("click", () => {
    replayMusic();
  });

  musicPlayerDiv.append(
    stopIcon,
    volumeIcon,
    volumeValue,
    soundRange,
    replayIcon
  );

  document.querySelector(".musicContainer").append(musicPlayerDiv);
}

// function stop Music
function stopMusic() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

// Function replay Music
function replayMusic() {
  if (currentAudio) {
    currentAudio.currentTime = 0;
    currentAudio.play();
  }
}

// ********************* Scene Part *******************************
//scene part
const sceneImg = document.querySelectorAll(".sceneImg");

// arr of scene images
const SceneNameArr = [
  {
    name: "Lake Sunset",
    video: "Videoes_Scene/LakeSunset-1.mp4",
    audio: "sceneAudio/guitar-1.mp3",
  },
  {
    name: "River Forest",
    video: "Videoes_Scene/river-2.mp4",
    audio: "sceneAudio/river-forest-2.mp3",
  },
  {
    name: "Rain",
    video: "Videoes_Scene/rain-3.mp4",
    audio: "sceneAudio/rain-3.mp3",
  },
  {
    name: "The Waterfall",
    video: "Videoes_Scene/Waterfall-4.mp4",
    audio: "sceneAudio/waterfall-4.mp3",
  },
  {
    name: "Snow",
    video: "Videoes_Scene/Snow-5.mp4",
    audio: "sceneAudio/snow-5.mp3",
  },
  {
    name: "Mountain Lake",
    video: "Videoes_Scene/iceLake-6.mp4",
    audio: "sceneAudio/lake-6.mp3",
  },
];

// function display scene Data
function displayScene(arrScene) {
  sceneImg.forEach((Imgobj, index) => {
    const parentscene = document.createElement("div");
    parentscene.classList.add("parent-scene");

    const sceneName = document.createElement("span");
    const sceneIcon = document.createElement("i");

    sceneName.classList.add("scene-name");
    sceneIcon.classList.add("scene-icon");

    sceneName.innerText = arrScene[index].name;
    sceneIcon.innerHTML = `<i class ="fa fa-play-circle" aria-hidden = "true"></i>`;

    //when click on playbutton in scene
    sceneIcon.addEventListener("click", () => {
      sceneContainer.style.display = "none";
      displayMusicVideo(arrScene[index]);
    });

    parentscene.append(sceneName, sceneIcon);
    Imgobj.append(parentscene); //add
  });
}
displayScene(SceneNameArr);

//function display music video

function displayMusicVideo(arrScene) {
  // create fullimage container
  const FullImage = document.createElement("div");
  FullImage.classList.add("Full-image");

  //full image
  FullImage.innerHTML = `<video id="videoElement" class="videoTheme" src ="${arrScene.video}" controls autoplay></video>
                    <audio id="audioElement" src="${arrScene.audio}"></audio>`;

  document.body.append(FullImage); //add in body

  // select all audio elements
  const allAudio = document.querySelectorAll("#audioElement");

  // play sceneAudio with video

  const videoEle = document.getElementById("videoElement");
  const audioEle = document.getElementById("audioElement");

  if (videoEle && audioEle) {
    audioEle.volume = 1.0; //max volume
    videoEle.volume = 1.0; //set video volume

    // play Video and audio
    videoEle.addEventListener("play", () => {
      allAudio.forEach((Audio) => {
        if (Audio !== audioEle) {
          Audio.pause();
        }
      });
      audioEle.play();
    });
    // pause video and audio
    videoEle.addEventListener("pause", () => {
      audioEle.pause();
    });
  }
  //cross icon
  const crossIcon = document.createElement("span");
  crossIcon.classList.add("cross-Icon");
  crossIcon.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;

  const leftArrow = document.createElement("span");
  leftArrow.classList.add("left-Arrow");
  leftArrow.innerHTML = `<i class="fa fa-angle-left" aria-hidden="true"></i>`;

  const rightArrow = document.createElement("span");
  rightArrow.classList.add("right-Arrow");
  rightArrow.innerHTML = `<i class="fa fa-angle-right" aria-hidden="true"></i>`;
  rightArrow.style.display = "none";

  //parent div of all icons
  const videoPlayerDiv = document.createElement("div");
  videoPlayerDiv.classList.add("video-playerDiv");

  const sceneReplayIcon = document.createElement("span");
  sceneReplayIcon.classList.add("scene-replayIcon-music");
  sceneReplayIcon.innerHTML = `<i class ="fa-solid fa-rotate-right"></i>`;

  sceneReplayIcon.addEventListener("click", () => {
    if (videoEle && audioEle) {
      videoEle.currentTime = 0;
      audioEle.currentTime = 0;
      audioEle.play();
      videoEle.play();
    }
  });

  //   leftArrow show videoPlayerDiv
  leftArrow.addEventListener("click", () => {
    videoPlayerDiv.style.display = "none";
    leftArrow.style.display = "none";
    rightArrow.style.display = "block";
  });

  //   rightArrow hide videoPlayerDiv
  rightArrow.addEventListener("click", () => {
    videoPlayerDiv.style.display = "block";
    rightArrow.style.display = "none";
    leftArrow.style.display = "block";
  });

  // cross btn remove fullpage
  crossIcon.addEventListener("click", () => {
    FullImage.style.display = "none";
    sceneContainer.style.display = "block";
    audioEle.pause();
    videoEle.pause();
  });

  videoPlayerDiv.append(sceneReplayIcon); //add

  leftArrow.append(videoPlayerDiv); //add

  FullImage.append(crossIcon, leftArrow, rightArrow); //add

  document.body.append(FullImage); //add
}

// ************************ Relax and Breathe Part *************************

//Relax Div
const RelaxContainer = document.querySelector(".Relax-Container");
const RelaxDiv = document.querySelector(".RelaxDiv");

// arr of Relax Images
const RelaxArr = [
  {
    relaxBreathesrc: "RelaxImage/deep-breathing.jpg",
    headingRB: " Deep Breathing",
    paragraph:
      "Deep breathing is one of the best way to relax and let your worries go.",
    anchorLink: "https://www.healthline.com/health/diaphragmatic-breathing",
    BgImagsrc: "RelaxBgImg/deepBreathing-bg.jpg",
  },
  {
    relaxBreathesrc: "RelaxImage/four-seven-eight.jpg",
    headingRB: "4-7-8 Technique",
    paragraph:
      "The 4-7-8 technique forces the mind and body to focus on regulating the breath.",
    anchorLink: "https://www.healthline.com/health/4-7-8-breathing",
    BgImagsrc: "RelaxBgImg/four-seven-eight-bg.jpg",
  },
];

// Function Display Relax And Breathe
function DisplayRelaxBreathe(RelaxArr) {
  RelaxArr.forEach((arrImg) => {
    const DeepBreath = document.createElement("div");
    DeepBreath.classList.add("DeepBreath");
    DeepBreath.innerHTML = `<img src= ${arrImg.relaxBreathesrc} />`;

    const breatheDetailDiv = document.createElement("div");
    breatheDetailDiv.classList.add("breatheDetailDiv");

    const deepHead = document.createElement("h2");
    deepHead.classList.add("deep-head");
    deepHead.innerHTML = `${arrImg.headingRB}`;

    const deepPara = document.createElement("p");
    deepPara.classList.add("deep-para");
    deepPara.innerHTML = `${arrImg.paragraph} `;

    const RelaxAnchor = document.createElement("p");
    RelaxAnchor.classList.add("relax-anchor");
    RelaxAnchor.innerHTML = `<a href ="${arrImg.anchorLink}">Read More</a>`;

    const deepBtn = document.createElement("div");
    deepBtn.classList.add("deep-Btn");
    deepBtn.innerHTML = "<span>Begin</span>";

    deepBtn.addEventListener("click", () => {
      // RelaxContainer.style.display = "none";
      DisplayRelaxBgImg(arrImg); //issue
    });

    breatheDetailDiv.append(deepHead, deepPara, RelaxAnchor);
    DeepBreath.append(breatheDetailDiv, deepBtn);
    RelaxDiv.append(DeepBreath);
  });
}
DisplayRelaxBreathe(RelaxArr);

//  function display relax images
function DisplayRelaxBgImg(RelaxArr) {
  const relaxBgImgDiv = document.createElement("div");
  relaxBgImgDiv.classList.add("relaxBgImg-Div");

  relaxBgImgDiv.innerHTML = `<img class="bgImageRB" src = "${RelaxArr.BgImagsrc}">`;

  //heading

  const RBheading = document.createElement("div");

  RBheading.classList.add("RBheading");
  RBheading.innerHTML = `<h1 id="RB-heading">${RelaxArr.headingRB}</h1>`;

  //close the image using close btn
  const RelaxcrossIcon = document.createElement("span");
  RelaxcrossIcon.classList.add("Relaxcross-Icon");
  RelaxcrossIcon.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;

  // relax cross icon
  RelaxcrossIcon.addEventListener("click", () => {
    relaxBgImgDiv.style.display = "none";
    RelaxContainer.style.display = "block";
  });

  //revolve relax and breathe
  const circleRotateDiv = document.createElement("div");
  circleRotateDiv.classList.add("circle-RotateDiv");

  const roundIconDiv = document.createElement("div");
  roundIconDiv.classList.add("round-iconDiv");

  const roundIcon = document.createElement("span");
  roundIcon.classList.add("round-icon");
  roundIcon.innerHTML = `<i class="fa-solid fa-circle" aria-hidden="true"></i>`;

  // Hold Breathe
  const parentHoldCircle = document.createElement("div");
  parentHoldCircle.classList.add("parenthold-circle");

  const childHoldCircle = document.createElement("div");
  childHoldCircle.classList.add("childHoldCircle");

  const relaxPlayIcon = document.createElement("span");
  relaxPlayIcon.classList.add("relaxPlayIcon");
  relaxPlayIcon.innerHTML = `<i class="fa-solid fa-play" aria-hidden="true"></i>`;

  //Animation for  medtation
  const totalTime = 10000;
  const breatheTime = 4000;
  const holdTime = 2000;

  //Breathe Animation
  function BreatheAnimation() {
    childHoldCircle.innerText = "Breathe In!";
    childHoldCircle.style.fontSize = "1.5rem";

    setTimeout(() => {
      childHoldCircle.innerText = "Hold";
      childHoldCircle.style.fontSize = "2rem";

      parentHoldCircle.style.animationPlayState = "paused";

      setTimeout(() => {
        parentHoldCircle.style.animationPlayState = "running";
        childHoldCircle.style.fontSize = "1.5rem";

        childHoldCircle.innerText = "Breathe out!";
      }, holdTime);
    }, breatheTime);
    setInterval(BreatheAnimation, totalTime);
  }

  // relaxPay functioning
  relaxPlayIcon.addEventListener("click", () => {
    relaxPlayIcon.style.display = "none";
    BreatheAnimation(); //Start animation

    parentHoldCircle.style.animation =
      "relaxScale 7.5s linear forwards infinite";
    roundIconDiv.style.animationPlayState = "running";
    roundIcon.style.animationPlayState = "running";
  });

  childHoldCircle.append(relaxPlayIcon); //add
  parentHoldCircle.append(childHoldCircle); //add
  roundIconDiv.append(roundIcon); //add
  circleRotateDiv.append(parentHoldCircle, roundIconDiv); //add

  relaxBgImgDiv.append(RBheading, circleRotateDiv, RelaxcrossIcon); //add

  RelaxDiv.append(relaxBgImgDiv); //add
}
