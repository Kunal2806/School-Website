import React from 'react';

export default function Environment() {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1c2b4a] mb-3"> Environment</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driving sustainable change through education, community involvement, and innovative environmental solutions.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
          <h2 className="text-2xl font-semibold text-[#1c2b4a]"> Our Mission</h2>
          <ul className="list-disc pl-6 text-[#1c2b4a] space-y-2 text-base">
            <li>Promote understanding and appreciation of nature</li>
            <li>Inculcate eco-technological practices</li>
            <li>Initiate pilot projects for sustainable solutions</li>
            <li>Provide training, R&D, and knowledge sharing</li>
            <li>Drive community action for socio-economic development</li>
            <li>Use media and outreach to raise environmental awareness</li>
            <li>Eradicate disparities and promote social harmony</li>
            <li>Collaborate with like-minded environmental institutions</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1c2b4a]"> Core Programs & Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Community-Based Solid Waste Management',
                desc: 'Engaging communities to manage waste responsibly, reduce pollution, and improve sanitation through participatory approaches.',
              },
              {
                title: 'Heritage Conservation',
                desc: 'Preserving natural and cultural heritage through awareness and eco-friendly tourism involving local communities.',
              },
              {
                title: 'Recycling Marble Slurry Waste',
                desc: 'Transforming industrial marble waste in Udaipur into eco-bricks and sustainable materials.',
              },
              {
                title: 'Training & Community Participation',
                desc: 'Educating and empowering locals in environmental practices and sustainable resource use.',
              },
            ].map(({ title, desc }, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1c2b4a] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-[#1c2b4a] mb-3"> Our Vision for the Future</h2>
          <p className="text-[#1c2b4a] text-base leading-relaxed">
            We envision a just, equitable, and sustainable society. Through collaboration, grassroots action, and long-term commitment, we strive
            to build environmental consciousness that improves lives and secures the planet for future generations.
          </p>
        </div>

      </div>
    </section>
  );
}
