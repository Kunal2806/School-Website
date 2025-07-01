import React from 'react';

const Education = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1c2b4a]"><span className='flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1C2C46"><path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/></svg>            Education</span> </h1>
          <p className="text-lg text-[#1c2b4a]">
            Empowering young minds through values, learning, and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
            <h2 className="text-xl font-semibold text-[#1c2b4a]"> What We Give</h2>
            <ul className="list-disc pl-5 text-[#1c2b4a] space-y-1 text-base">
              <li>Improves children’s academic achievement</li>
              <li>Strengthens parent-child relationships</li>
              <li>Promotes positive school attitudes</li>
              <li>Increases understanding of education system</li>
              <li>Boosts grades, motivation, and self-esteem</li>
              <li>Reduces violent behavior</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
            <h2 className="text-xl font-semibold text-[#1c2b4a]"> What We Do</h2>
            <ol className="list-decimal pl-5 text-[#1c2b4a] space-y-1 text-base">
              <li>Show respect to teachers and guests</li>
              <li>Promote student liberty and rights</li>
              <li>Support all visitors on school premises</li>
              <li>Encourage manners and respect for staff</li>
            </ol>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
            <h2 className="text-xl font-semibold text-[#1c2b4a]"> Beyond the Classroom</h2>
            <p className="text-[#1c2b4a] text-base leading-relaxed">
              We focus on holistic development through co-curricular activities,
              creative learning methods, and essential life skills to shape well-rounded individuals.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
            <h2 className="text-xl font-semibold text-[#1c2b4a]"> Learning Infrastructure</h2>
            <p className="text-[#1c2b4a] text-base leading-relaxed">
              Spacious classrooms, open playgrounds, digital tools, and collaborative learning spaces
              create an engaging environment for every learner.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
