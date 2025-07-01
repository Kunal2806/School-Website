import React from 'react';

function About() {
  return (
    <section className="bg-gradient-to-b from-[#eef2f7] to-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-20">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#1c2b4a] ">About Us</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Vivekanand Shikshan Sansthan is a non-profit dedicated to rural development and education, blending traditional values with modern knowledge to shape future-ready citizens.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded on <strong>14 January 1988</strong> by <u>Shree Mr. Chunni Lal Rawal</u> and <u>Vagendra Rawal</u>, the organization operates from <strong>Pindwara</strong>, nestled in the Aravali hills of Rajasthan. Registered under the Rajasthan Societies Registration Act (1958), it aims to empower communities through holistic education and social upliftment.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission focuses on nurturing intellectual, emotional, and social growth, ensuring every student evolves into a responsible, self-reliant, and compassionate leader.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-[#1c2b4a] mb-6 text-center">🎯 Our Focus Areas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              "Education",
              "Livelihood & Skills",
              "Environment",
              "Women Empowerment",
              "Tribal Development",
              "Rural Development",
              "Medical Services",
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition text-gray-700 text-sm font-medium">
                {area}
              </div>
            ))}
          </div>
        </div>

          <h3 className="text-3xl font-semibold text-[#1c2b4a] mb-6 text-center">🌟 Our Mission</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
            <h4 className="text-2xl font-bold text-[#1c2b4a] mb-2">🎓 Education & Student Growth</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
              <li>All-round development of students</li>
              <li>Modern education with moral values</li>
              <li>Leadership, scientific & social values</li>
              <li>Promote discipline & nationalism</li>
              <li>Support higher & technical education</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
            <h4 className="text-2xl font-bold text-[#1c2b4a] mb-2">🤝 Social Responsibility</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
              <li>Human rights & child labor awareness</li>
              <li>Literary and cultural promotion</li>
              <li>Vocational training for employment</li>
              <li>SC/ST community upliftment</li>
              <li>Women & child welfare programs</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
            <h4 className="text-2xl font-bold text-[#1c2b4a] mb-2">🌿 Environmental Initiatives</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
              <li>Environmental protection & forestry</li>
              <li>Wildlife & biodiversity conservation</li>
              <li>Preserving Aravali’s ecosystem</li>
              <li>Research on climate change</li>
              <li>Ayurvedic crop promotion</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
            <h4 className="text-2xl font-bold text-[#1c2b4a] mb-2">🏡 Rural & Youth Empowerment</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-base">
              <li>Computer literacy in villages</li>
              <li>Journalism for social change</li>
              <li>Food safety education</li>
              <li>Youth guidance via Vivekananda’s ideals</li>
              <li>Employment-focused rural programs</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
