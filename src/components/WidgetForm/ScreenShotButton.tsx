import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import React, { useState } from "react";
import Loading from "../Loading";

export default function ScreenShotButton() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    console.log(base64image);

    setIsTakingScreenshot(false);
  }
  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="bg-zinc-800 p-2 rouded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
