
// components/PolygonBanner.js
import Buttonn from "./Buttonn";

function Polygon() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4 ">
      <div className="relative w-full max-w-6xl h-[300px] text-white overflow-hidden rounded-2xl">
        {/* Left polygon side */}
        <div
          className="absolute top-0 left-0 h-full z-10"
          style={{
            width: "70%",
            backgroundColor: "#084622",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          }}
        ></div>

        {/* Right side solid light green */}
        <div
          className="absolute top-0 right-0 h-full w-full z-0"
          style={{
            backgroundColor: "#00A343",
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        ></div>

        {/* Content over both backgrounds */}
        <div className="relative z-20 px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          <div className="max-w-md">
            <p className="text-4xl font-[700] mb-2">
              Join our community of savers today.
            </p>
            <p className="text-2xl">
              Take a big leap towards more <br />
              financial freedom.
            </p>
          </div>

          <Buttonn
            href="/plan"
            className="bg-white text-[#141C24] border-0 mx-20 font-medium"
          >
            Start Saving Now
          </Buttonn>
        </div>
      </div>
    </div>
  );
}

export default Polygon;
