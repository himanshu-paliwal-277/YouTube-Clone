let video_play_button = document.querySelectorAll(".video_play_button");
let youtube_video_link = document.querySelectorAll(".youtube_video_link");
let youtube_shorts_play_button = document.querySelectorAll(
  ".youtube_shorts_play_button"
);
let youtube_shorts_link = document.querySelectorAll(".youtube_shorts_link");
let youtube_video_originalURL = [
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
    "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
];
let youtube_shorts_originalURL = [
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
];

// handling youtube video play / pause
video_play_button.forEach((play_button, index) => {
  play_button.addEventListener("click", () => {
    play_button.classList.add("hidden");
    youtube_video_link[index].classList.remove("hidden");
    let videoURL = youtube_video_link[index].src;
    youtube_video_originalURL[index] = videoURL;
    videoURL = videoURL + "&autoplay=1&mute=1";
    youtube_video_link[index].src = videoURL;
    video_play_button.forEach((element, i) => {
      if (index !== i) {
        element.classList.remove("hidden");
      }
    });
    youtube_video_link.forEach((element, i) => {
      if (index !== i) {
        element.classList.add("hidden");
        videoURL = youtube_video_originalURL[i];
        youtube_video_link[i].src = videoURL;
      }
    });
    // stop playing shorts when click to any video
    youtube_shorts_play_button.forEach((element, i) => {
      element.classList.remove("hidden");
    });
    youtube_shorts_link.forEach((element, i) => {
      element.classList.add("hidden");
      youtube_shorts_link[i].src = youtube_shorts_originalURL[i];
    });
  });
});

// handling youtube shorts play / pause
youtube_shorts_play_button.forEach((play_button, index) => {
  play_button.addEventListener("click", () => {
    play_button.classList.add("hidden");
    youtube_shorts_link[index].classList.remove("hidden");
    let videoURL = youtube_shorts_link[index].src;
    youtube_shorts_originalURL[index] = videoURL;
    videoURL = videoURL + "?autoplay=1&mute=1";
    youtube_shorts_link[index].src = videoURL;
    youtube_shorts_play_button.forEach((element, i) => {
      if (index !== i) {
        element.classList.remove("hidden");
      }
    });
    youtube_shorts_link.forEach((element, i) => {
      if (index !== i) {
        element.classList.add("hidden");
        videoURL = youtube_shorts_originalURL[index];
        youtube_shorts_link[i].src = videoURL;
      }
    });
    // stop playing youtube video when click to any shorts
    video_play_button.forEach((element, i) => {
        element.classList.remove("hidden");
      });
      youtube_video_link.forEach((element, i) => {
        element.classList.add("hidden");
        youtube_video_link[i].src = youtube_video_originalURL[i];
      });
  });
});