import Button from "@components/ui/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={"relative h-screen w-screen bg-[url(/backgrounds/ada.png)] bg-cover"}>
      <main className="text-black">
        <div className="absolute flex flex-col items-center justify-center md:top-[40%] md:right-[15%] md:translate-x-0 top-6 left-1/2 -translate-x-1/2">
          <h1 className="text-4xl font-black">Welcome to Only Ada</h1>
          <p className="max-w-xs">
            A place to find stuff you like from people you like. Become productive without burning out.
          </p>
          <div>
            <Link to="/courses">
              <Button variant="outline" color="black">
                Courses
              </Button>
            </Link>
            <Link to="/login">
              <Button color="black" variant="outline">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
