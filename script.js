let video_play_button = document.querySelectorAll(".video_play_button");
let youtube_shorts_play_button = document.querySelectorAll(
  ".youtube_shorts_play_button"
);
let iframe_div = document.querySelectorAll(".iframe_div");
let shorts_iframe_div = document.querySelectorAll(".shorts_iframe_div");

// Menu Button
let menu_button = document.getElementById("menu_button");
let aside = document.getElementById("aside");
let aside_nav = document.getElementById("aside_nav");
let main_section = document.getElementById("main_section");
let youtube_video_img_skeleton = document.getElementById(
  "youtube_video_img_skeleton"
);
let youtube_shorts_img_skeleton = document.getElementById(
  "youtube_shorts_img_skeleton"
);

// All youtube video here
const all_youtube_videos = [
  "https://www.youtube.com/embed/dEU2ibHQnjM?si=VoQQg-DFV4wFthmu",
  "https://www.youtube.com/embed/k09ovfPMLlc?si=D7FoVDV8Cf0EGmOZ",
  "https://www.youtube.com/embed/bT70Qqgn-qY?si=5gW5-isHAmUhwrkj",
  "https://www.youtube.com/embed/deztUdPApiM?si=RYsnKZZQQnyXKJBi",
  "https://www.youtube.com/embed/KRDwp6J_LTQ?si=u6Xmea4za4cjf8qN",
  "https://www.youtube.com/embed/9CgTyqctTz0?si=wM0VNaG0Sf9WPnSC",

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
]

// All youtube shorts here
const all_youtube_shorts = [
  "https://www.youtube.com/embed/dcqdFDD8nF0",
  "https://www.youtube.com/embed/5sa738YvYVE",
  "https://www.youtube.com/embed/Dqj7WjDMTfI",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/v5pUL2li_zQ",

  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
  "https://www.youtube.com/embed/HQidzZ81Xlg",
]

// handling youtube video thumbnail and youtube video iframe to play and pause
video_play_button.forEach((button, index) => {
  button.addEventListener("click", () => {
    iframe_div.forEach((iframe, i) => {
      if (index != i) {
        iframe.innerHTML = "";
      }
    });
    iframe_div[index].innerHTML = `<iframe
    id="iframe"
    class="hidden rounded-xl w-full video-placeholder"
    src="${all_youtube_videos[index]}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>`;
    let iframe = document.getElementById("iframe");
    button.classList.add("hidden");
    let videoURL = iframe.src;
    videoURL = videoURL + "&autoplay=1&mute=1";
    iframe.src = videoURL;
    iframe.classList.remove("hidden");
    // iframe.requestFullscreen();
    let h = youtube_video_img_skeleton.height;
    iframe.style.height = `${h}px`;
    video_play_button.forEach((button, i) => {
      if (index != i) {
        button.classList.remove("hidden");
      }
    });
    // stop playing shorts video
    shorts_iframe_div.forEach((iframe) => {
      iframe.innerHTML = "";
    });
    youtube_shorts_play_button.forEach((shorts_play_button) => {
      shorts_play_button.classList.remove("hidden");
    });
  });
});

// handling youtube shorts thumbnail and youtube shorts iframe to play and pause
youtube_shorts_play_button.forEach((button, index) => {
  button.addEventListener("click", () => {
    shorts_iframe_div.forEach((iframe, i) => {
      if (index != i) {
        iframe.innerHTML = "";
      }
    });
    shorts_iframe_div[index].innerHTML = `
      <iframe
      id="Shorts_iframe"
      class="hidden rounded-xl youtube_shorts_link w-full video-placeholder"
      src="${all_youtube_shorts[index]}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      ></iframe>
  `;
    let Shorts_iframe = document.getElementById("Shorts_iframe");
    button.classList.add("hidden");
    let videoURL = Shorts_iframe.src;
    videoURL = videoURL + "?autoplay=1&mute=1";
    Shorts_iframe.src = videoURL;
    Shorts_iframe.classList.remove("hidden");
    //   // iframe.requestFullscreen();
    let h = youtube_shorts_img_skeleton.height;
    Shorts_iframe.style.height = `${h}px`;
    video_play_button.forEach((button, i) => {
      if (index != i) {
        button.classList.remove("hidden");
      }
    });
    youtube_shorts_play_button.forEach((button, i) => {
      if (index != i) {
        button.classList.remove("hidden");
      }
    });
    // stop playing shorts video
    iframe_div.forEach((iframe) => {
      iframe.innerHTML = "";
    });
    video_play_button.forEach((play_button) => {
      play_button.classList.remove("hidden");
    });
  });
});

// Resize iframe when screen size changes
window.addEventListener("resize", function () {
  // maintaining the height and width of iframe when screen resize
  let iframe = document.getElementById("iframe");
  if (iframe) {
    let h = youtube_video_img_skeleton.height;
    iframe.style.height = `${h}px`;
  }
  // for youtube shorts
  let Shorts_iframe = document.getElementById("Shorts_iframe");
  if (Shorts_iframe) {
    let shorts_h = youtube_shorts_img_skeleton.height;
    Shorts_iframe.style.height = `${shorts_h}px`;
  }
});
// ------------------------------------------------

// Menu button click funtion

menu_button.addEventListener("click", () => {
  if (aside.style.display == "none") {
    aside.style.display = "block";
    main_section.classList.add("pl-[240px]");
    main_section.classList.remove("pl-[72px]");
  } else {
    aside.style.display = "none";
    main_section.classList.remove("pl-[240px]");
    main_section.classList.add("pl-[72px]");
  }
  // maintaining the height and width of iframe when button clicked
  let iframe = document.getElementById("iframe");
  if (iframe) {
    let h = youtube_video_img_skeleton.height;
    iframe.style.height = `${h}px`;
  }
  // for youtube shorts
  let Shorts_iframe = document.getElementById("Shorts_iframe");
  if (Shorts_iframe) {
    let shorts_h = youtube_shorts_img_skeleton.height;
    Shorts_iframe.style.height = `${shorts_h}px`;
  }
});

// search bar on focus
let search_bar_div = document.getElementById("search_bar_div");
let search_bar_input = document.getElementById("search_bar_input");

search_bar_input.addEventListener("focus", () => {
  search_bar_div.style.borderColor = "#1662ff";
})

search_bar_input.addEventListener("blur", () => {
  search_bar_div.style.borderColor = "var(--border-color)";
})

// Light mode and Dark mode feature
let dark_mode_light_mode_button = document.getElementById("dark_mode_light_mode_button");
let dark_mode_svg = document.querySelector("#dark_mode_light_mode_button > div:nth-child(1)");
let light_mode_svg = document.querySelector("#dark_mode_light_mode_button > div:nth-child(2)");
const root = document.documentElement;

dark_mode_light_mode_button.addEventListener("click", () => {
  let all_svg = document.querySelectorAll("svg");
  let youtube_logo_for_dark_theme = document.getElementById("youtube_logo_for_dark_theme");
  let youtube_logo_for_light_theme = document.getElementById("youtube_logo_for_light_theme");
  if(dark_mode_svg.classList.contains("hidden")){
    dark_mode_svg.classList.remove("hidden")
    light_mode_svg.classList.add("hidden")
    root.style.setProperty('--background-color', 'white');
    root.style.setProperty('--primary-color', 'black');
    root.style.setProperty('--skeleton-bg-color', '#e6e6e6');
    root.style.setProperty('--skeleton-changed-bg-color', '#d6d6d6');
    root.style.setProperty('--secondary-bg-color', '#e5e7eb7e');
    root.style.setProperty('--border-color', '#cfcfcf');
    root.style.setProperty('--button-hover-bg-color', '#e5e7ebc2');
    // changing all svg to black 
    all_svg.forEach((svg) => {
        svg.style.filter = `invert(0)`;
    })
     // changing the logo of website
     youtube_logo_for_light_theme.classList.remove("hidden");
     youtube_logo_for_dark_theme.classList.add("hidden");
  }
  else{
    dark_mode_svg.classList.add("hidden")
    light_mode_svg.classList.remove("hidden")
    root.style.setProperty('--background-color', 'black');
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--skeleton-bg-color', '#3d3d3d');
    root.style.setProperty('--skeleton-changed-bg-color', '#494949');
    root.style.setProperty('--secondary-bg-color', '#494949c7');
    root.style.setProperty('--border-color', 'gray');
    root.style.setProperty('--button-hover-bg-color', '#494949');
    // changing all svg to white 
    all_svg.forEach((svg, i) => {
      if(i != 30 && i != 31 && i != 32 && i != 33 && i != 1 && i != 2){
        svg.style.filter = `invert(1)`;
      }
    })
    // changing the logo of website
    youtube_logo_for_light_theme.classList.add("hidden");
    youtube_logo_for_dark_theme.classList.remove("hidden");
  }
})

// hover function - This function changes the bg of element when mouse enter
function mouseEnter_in_element(element){
  element.style.backgroundColor = `var(--secondary-bg-color)`;
}

function mouseLeave_element(element){
  element.style.backgroundColor = `var(--background-color)`;
}

// hover function - This function changes the bg of button when mouse enter
function mouseEnter_in_button(element){
  element.style.backgroundColor = `var(--button-hover-bg-color)`;
}

function mouseLeave_button(element){
  element.style.backgroundColor = `var(--secondary-bg-color)`;
}

dark_mode_light_mode_button.click()