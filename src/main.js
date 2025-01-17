import { drawVideo, getVideo } from "./camera";
import "./style.css";

(async function run() {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const button = document.getElementById("camera");

  button.addEventListener("click", () => {
    drawVideo(video, canvas);
  });
})();
