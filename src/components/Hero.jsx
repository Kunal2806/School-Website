import Slider from "./Slider";
import Cards from "./Cards";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Slider />

      <div className="flex flex-col lg:flex-row justify-between items-center mt-16 w-[90%] lg:w-[80%] m-auto bg-[#dcf7fe] rounded-2xl p-5 gap-8">
        <div className="w-full lg:w-[400px] rounded-xl">
          <img
            className="w-full h-auto rounded-xl object-contain"
            src="./images/heroImg.avif"
            alt="Hero"
          />
        </div>

        <div className="text-[#1c2b4a] w-full">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">We Help You Help Others</h1>
          <h4 className="text-base sm:text-lg lg:text-xl py-4 leading-relaxed">
            Welcome to <span className="font-semibold">Vivekanand Shikshan Sansthan - </span><br />
            A beacon of hope and learning in the tribal region of Rajasthan. Our mission is to
            educate, empower, and uplift communities through dedicated social service and quality education.
            <br /><br />
            The school is affiliated to the CBSE and follows a modern, student-centered
            approach to education.
            <br /><br />
            Named after the great philosopher and youth icon <span className="font-semibold">Swami Vivekananda</span>, the
            institution strives to instill moral integrity, academic excellence, and social
            responsibility in every student.
          </h4>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default Hero;
