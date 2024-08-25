const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-lg w-screen aspect-video bg-gradient-to-r from-black py-[20%] px-24">
      <h1 className="text-white text-4xl my-4">{title}</h1>
      <p className="text-white w-1/4">{overview}</p>
      <button className="font-semibold bg-white rounded-lg bg-opacity-80 hover:bg-opacity-60 px-8 p-2">
        » Play
      </button>
      <button className="font-semibold bg-gray-500 rounded-lg bg-opacity-80 hover:bg-opacity-50 px-8 p-2 m-2">
        ⓘ More info
      </button>
    </div>
  );
};

export default VideoTitle;
