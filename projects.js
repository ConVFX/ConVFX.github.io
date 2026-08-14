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
    id: "midnight-runners",            // unique, used in the URL — no spaces
    title: "Midnight Runners",
    category: "editing",               // "editing" or "videography"
    year: 2026,
    thumb: "g-e1",
    videoUrl: "",
    description: "A short-film edit built around pacing, sound design, and a warm film-grade look."
  },
  {
    id: "solstice-campaign",
    title: "Solstice — Brand Campaign",
    category: "editing",
    year: 2025,
    thumb: "g-e2",
    videoUrl: "",
    description: "A 60-second brand campaign cut, edited for a fast social-first pace."
  },
  {
    id: "afterglow-edit",
    title: "Afterglow — Music Video Edit",
    category: "editing",
    year: 2025,
    thumb: "g-e3",
    videoUrl: "",
    description: "Performance and narrative footage cut together for an independent artist's single."
  },
  {
    id: "skyline-reel",
    title: "Skyline — Corporate Reel",
    category: "editing",
    year: 2024,
    thumb: "g-e4",
    videoUrl: "",
    description: "A company highlight reel edited from a year of internal event footage."
  },
  {
    id: "echo-short",
    title: "Echo — Narrative Short",
    category: "editing",
    year: 2023,
    thumb: "g-e5",
    videoUrl: "",
    description: "An 11-minute narrative short, edited for a festival submission cut."
  },
  {
    id: "highland-wedding",
    title: "Highland Wedding — Full Coverage",
    category: "videography",
    year: 2026,
    thumb: "g-v1",
    videoUrl: "",
    description: "Full-day wedding coverage shot on location, from ceremony through reception."
  },
  {
    id: "vantage-coffee",
    title: "Vantage Coffee — On Location",
    category: "videography",
    year: 2025,
    thumb: "g-v2",
    videoUrl: "",
    description: "On-location product and lifestyle footage shot for a coffee brand's spring launch."
  },
  {
    id: "coastal-run",
    title: "Coastal Run — Sports Doc",
    category: "videography",
    year: 2024,
    thumb: "g-v3",
    videoUrl: "",
    description: "Documentary-style coverage of a coastal endurance race, shot across two days."
  },
  {
    id: "foundry-brand-film",
    title: "Foundry Co. — Brand Film",
    category: "videography",
    year: 2025,
    thumb: "g-v4",
    videoUrl: "",
    description: "A short brand film shot on location at a working foundry."
  },
  {
    id: "aperture-talks",
    title: "Aperture Talks — Interview Series",
    category: "videography",
    year: 2023,
    thumb: "g-v5",
    videoUrl: "",
    description: "Multi-camera interview coverage for an ongoing creative-industry talk series."
  }
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
