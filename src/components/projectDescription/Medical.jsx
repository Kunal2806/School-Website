import React from 'react';

export default function HealthProgram() {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#1c2b4a] mb-3"> Health & Medical Interventions</h1>
          <p className="text-[#1c2b4a] text-lg max-w-2xl mx-auto">
            Promoting community-centered health solutions for the most vulnerable.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-[#1c2b4a] mb-2"> Overview</h2>
          <p className="text-[#1c2b4a] text-base">
            We aim to bridge healthcare gaps by addressing root causes, focusing on maternal and child health, and promoting preventive practices within underserved populations.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-[#1c2b4a] mb-2"> Our Mission</h2>
          <p className="text-[#1c2b4a] text-base">
            To ensure accessible, affordable, and quality healthcare for all—especially for marginalized groups—through systemic reform, awareness, and behavior change.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-[#1c2b4a] mb-4"> Key Focus Areas</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#1c2b4a] text-base">
            <li>Maternal and reproductive health services</li>
            <li>Child health & nutrition to support early development</li>
            <li>Prevention and treatment of diseases (TB, HIV, diarrhea, etc.)</li>
            <li>Health awareness via community engagement</li>
            <li>Tackling stigma and social barriers to care</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-[#1c2b4a] mb-2"> Community Participation</h2>
          <p className="text-[#1c2b4a] text-base">
            Through SHGs and grassroots networks, we encourage inclusive participation—empowering families, especially men and community leaders, to prioritize women’s health and preventive practices.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-[#1c2b4a] mb-2"> Partnerships & Strategy</h2>
          <p className="text-[#1c2b4a] text-base">
            We collaborate with public health systems, NGOs, and civil society to strengthen service delivery and build trust in healthcare access—combining infrastructure with education and behavioral transformation.
          </p>
        </div>

        
      </div>
    </section>
  );
}
