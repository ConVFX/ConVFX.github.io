

const PROJECTS = [
  {
    id: "len-popup",
    title: "Len Popup",
    category: "videography",
    year: 2026,
    thumb: "g-e1",
    videoUrl: "",
    description: "Shoot of Len's Golden Boy Popup."
  },
  {
    id: "mr-goodman-munni",
    title: "Mr Goodman Munni",
    category: "editing",
    year: 2026,
    thumb: "g-e2",
    videoUrl: "https://www.youtube.com/embed/v_PiOAmljSM?si=RQD8beNtYqlTDzfE",
    description: "Edit incorporating the use of blender 3d as well as 3d layers in After effects."
  },
  {
    id: "geo-visuals",
    title: "Visuals (for Geo)",
    category: "editing",
    year: 2026,
    thumb: "g-e3",
    videoUrl: "https://www.youtube.com/embed/gmExif1V8Uw?si=XTc-azeD8HcoT6--",
    description: "Visuals commission for rapper @geobskts."
  },
  {
    id: "imjussayin",
    title: "Im jus sayin",
    category: "editing",
    year: 2026,
    thumb: "g-e4",
    videoUrl: "https://www.youtube.com/embed/U54d_TRY9nI?si=0I0yMeGfJHYnaQZc",
    description: "Edit with 3d layers and mograph elements."
  },
];

/* ------------------------------------------------------------
dont edit
------------------------------------------------------------ */
function renderPlayerMarkup(project){
  const url = project.videoUrl && project.videoUrl.trim();
  if(!url){
    return `<div class="video-placeholder">
      <div class="play-icon">▶</div>
      <p>No video linked yet — add a "videoUrl" for "${project.title}" in projects.js</p>
    </div>`;
  }
  if(/\.(mp4|webm)(\?.*)?$/i.test(url)){
    return `<video controls src="${url}"></video>`;
  }
  return `<iframe src="${url}" title="${project.title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
}

function categoryLabel(category){
  return category === "editing" ? "Video Editing" : "Videography";
}
