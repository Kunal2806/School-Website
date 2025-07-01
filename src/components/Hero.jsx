import Slider from "./Slider";
import Cards from "./Cards";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Slider />

      <div className="flex flex-col lg:flex-row justify-between items-center mt-16 w-[90%] lg:w-[80%] m-auto bg-[#dcf7fe] rounded-2xl p-5 gap-8">
        <div className="w-full lg:w-[400px] rounded-xl">
          <img
            className="w-full rounded-xl object-contain"
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
           <span className="font-semibold">Vivekanand Shikshan Sanstha</span> was established on <span className="font-semibold">14 January 1988</span> It has been established by Late <u>shree Mr. Chunni Lal Rawal & His Son Vagendra Rawal</u> who is been a Social Worker for a very long time.  Its main motto is to work towards social welfare, Tribal Area poor people, education, women welfare, protection of nature and wildlife.
            This organization tries to provide various avenues which would nurture the talents of its students. It gives opportunities for an all-round development of their personality which would eventually bring forth intellectually well developed, emotionally matured and socially committed citizens for India.
          </h4>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default Hero;
