const Home = () => {
  return (
    <div className={"relative h-screen w-screen bg-[url(/backgrounds/ada.png)] bg-no-repeat"}>
      <main className="text-black">
        <div className="absolute flex flex-col items-center justify-center h-16 top-1/4">
          <h1 className="text-4xl font-bold text-white">Welcome to Only Ada</h1>
          <p className="">A place to find stuff you like from people you like. Become productive without burning out</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
