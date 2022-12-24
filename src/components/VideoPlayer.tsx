const VideoPlayer = () => {
  return (
    <div className="relative w-full h-64 aspect-ratio-16/9 mx-auto max-w-lg shadow-2xl">
      <video
        className="absolute w-full h-full object-cover"
        src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        title="Sample video"
        autoPlay
        controls
        loop
      />
    </div>
  );
};

export default VideoPlayer;
