import Slider from "./Slider"
import Cards from "./Cards"

const Hero = () => {
  return (
    <div className="flex flex-col">
        <Slider/>
        <div className="flex justify-between mt-[80px] w-[80%] m-auto bg-[#dcf7fe] rounded-2xl p-5 gap-10">
            <div className="w-[400px] rounded-xl ">
                <img className=" w-full rounded-xl object-contain" src="./images/heroImg.avif" />
            </div>
            <p className="text-[#1c2b4a]">
                <h1 className="font-semibold text-4xl">We Help You Help Others</h1>
                <h4 className="text-xl py-5">Welcome to <span className="font-semibold">Vivekanand Shikshan Sansthan - </span> <br/>
                    <div>
                        
                    </div>
                    A beacon of hope and learning in the tribal region of Rajasthan. Our mission is to <br/>educate, empower, and uplift communities through dedicated social service and<br/> quality education.
                    <br/>
                    <br/>
                    The school is affiliated to the CBSE and follows a modern, student-centered <br/>approach to education.
                    <br/>
                    <br/>
                    Named after the great philosopher and youth icon <span className="font-semibold">Swami Vivekananda</span>, the <br/>institution strives to instill moral integrity, academic excellence, and social <br/>responsibility in every student.
                </h4>
                
            </p>
        </div>
        <Cards/>
    </div>
  )
}

export default Hero