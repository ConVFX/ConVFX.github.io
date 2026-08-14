/* ============================================================
   PROJECTS DATA
   ------------------------------------------------------------
   This is the only file you need to touch to add, remove, or
   edit videos on the site. Both index.html (the grid) and
   project.html (the video detail page) read from this list.

   HOW TO ADD A VIDEO
   -------------------
   Copy one of the objects below, paste it into the array, and
   change the values. Every field is explained inline.

   HOW TO REMOVE A VIDEO
   ----------------------
   Delete its whole { ... } block from the array (including the
   comma after it).

   HOW TO ASSIGN A VIDEO TO A SECTION
   ------------------------------------
   Set "category" to exactly "editing" (for the Video Editing
   section) or "videography" (for the Videography section).
   That's the ONLY thing that controls which filter tab / section
   a video shows up under.

   ADDING YOUR OWN THUMBNAIL COLOR
   ---------------------------------
   "thumb" refers to a CSS class in style.css. There are 5 warm
   ones for editing (g-e1 – g-e5) and 5 cool ones for videography
   (g-v1 – g-v5) already defined. You can reuse them across
   multiple projects, or add new ones in style.css and reference
   them here. Later, swap these for real thumbnails by editing
   the .still classes in style.css to use background-image
   instead of a gradient.

   ADDING YOUR ACTUAL VIDEO
   ---------------------------
   Paste a link into "videoUrl":
     - YouTube: use the EMBED link, e.g.
       "https://www.youtube.com/embed/VIDEO_ID"
       (from the Share > Embed button on YouTube, just take the
       src="..." URL out of the embed code)
     - Vimeo: use the player embed link, e.g.
       "https://player.vimeo.com/video/VIDEO_ID"
     - A direct video file: any URL ending in .mp4 or .webm
   Leave "videoUrl": "" (empty) and the detail page will show a
   placeholder reminding you to add it later.
   ============================================================ */

const PROJECTS = [
  {
    id: "len-popup",            // unique, used in the URL — no spaces
    title: "Len Popup",
    category: "videography",               // "editing" or "videography"
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
    videoUrl: "",
    description: "Edit incorporating the use of blender 3d as well as 3d layers in After effects."
  },
  {
    id: "geo-visuals",
    title: "Visuals (for Geo)",
    category: "editing",
    year: 2026,
    thumb: "g-e3",
    videoUrl: "",
    description: "Visuals commission for rapper @geobskts."
  },
  {
    id: "imjussayin",
    title: "Im jus sayin",
    category: "editing",
    year: 2026,
    thumb: "g-e4",
    videoUrl: "",
    description: "Edit with 3d layers and mograph elements."
  },
];

/* ------------------------------------------------------------
   Helper: turns a videoUrl into the right player markup.
   You shouldn't need to edit this.
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
