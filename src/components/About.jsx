function About() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
       
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1c2b4a] mb-6">About Us</h2>
        
        <p className="text-lg text-gray-700 mb-4">
          <strong>Vivekanand Shikshan Sansthan</strong> is a nonprofit organization located in Pindwara, Sirohi district of Rajasthan. Our primary mission is to serve the underprivileged and tribal communities through education, empowerment, health, and social welfare programs.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Inspired by the teachings of <strong>Swami Vivekananda</strong>, we believe in holistic education and moral upliftment. We run various projects aimed at improving the lives of rural and tribal populations in the region.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Our school is affiliated with the Central Board of Secondary Education (CBSE) and follows a modern, student-centered approach to teaching. Beyond academics, we work on social initiatives like women empowerment, environmental awareness, medical aid, and livelihood training.
        </p>

        <p className="text-lg text-gray-700">
          With your support, <strong>“We Help You Help Others”</strong>. Join us in building a stronger, educated, and self-reliant community.
        </p>
      </div>
      <div>
        <div className=" py-10 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1c2b4a] mb-4 flex items-center gap-1">
                <img className="h-[30px]" src="./images/location.svg" alt="" />
               Address </h2>
            <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Vivekanand Sr Sec School Pindwara</span> 
                 , <br/>Near Power House, Rj Sh 62, Swami Vivekanand Colony, Forest Colony, Pindwara-307022
            </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-[#1c2b4a] mb-4 flex items-center gap-1"> 
              <img className="h-[24px]" src="./images/contact.svg" alt="" />
            Contact</h2>
            <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Mobile</span>:- 9982109201,9414448254 <br/>
                <span className="font-semibold">Email</span>:- vsspindwara@gmail.com
            </p>
            </div>  
        </div>
        </div> 
        </div>
    </section>
  );
}

export default About;
