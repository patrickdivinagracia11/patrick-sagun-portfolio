
const videos = [
  { title: "Vertical Video", url: "https://youtube.com/shorts/WkGPhQRodEM" },
  { title: "International House Tour", url: "https://youtu.be/bf-ZnpQKgM0" },
  { title: "House Tour", url: "https://youtu.be/bWHJ5RVsqYI" },
  { title: "Event Edit", url: "https://youtu.be/d58laHwefdk" }
];

function extractYouTubeID(url) {
  const reg = /(?:v=|youtu\.be\/|shorts\/)([^&?/]+)/;
  const m = url.match(reg);
  return m ? m[1] : null;
}

const videoList = document.getElementById("video-list");

videos.forEach(v => {
  const id = extractYouTubeID(v.url);
  if(id){
    const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    const item = document.createElement("div");
    item.innerHTML = `<img src="${thumb}" style="width:200px;"><p>${v.title}</p>`;
    videoList.appendChild(item);
  }
});
