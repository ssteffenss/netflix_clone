import React from "react"

interface VideoFrameInterface {
  videoKey: string
  width?: string
  height?: string
}

function VideoFrame({ videoKey, width, height }: VideoFrameInterface) {
  return <iframe
    width={width}
    height={height}
    src={"https://www.youtube.com/embed/" + videoKey}
    title="YouTube video player"
    frameBorder={0}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
}

export default VideoFrame
