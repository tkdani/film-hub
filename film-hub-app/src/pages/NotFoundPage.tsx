import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-6xl font-bold">404 PAGE NOT FOUND</span>
        <span className="italic">Sorry, you're looking for the wrong page</span>
      </div>
      <Link
        to={"/"}
        className="bg-white/30 p-2 rounded hover:bg-white/50 hover:scale-110 duration-75"
      >
        Back to home
      </Link>
    </div>
  );
};
export default NotFoundPage;
