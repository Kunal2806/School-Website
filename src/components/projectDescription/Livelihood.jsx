
export default function LivelihoodProgramme() {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1c2b4a] mb-3"> Livelihood Programme</h1>
          <p className="text-gray-600 text-lg">
            Enabling sustainable income for marginalized communities through skills, support, and opportunity.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
          <h2 className="text-2xl font-semibold text-[#1c2b4a]"> Overview</h2>
          <p className="text-[#1c2b4a] leading-relaxed">
            The Livelihood Programme focuses on enabling sustainable income generation for the poor
            and marginalized through skill development, self-help groups, and access to market and finance.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1c2b4a]"> Skill Development Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#1c2b4a] mb-2">NSDC</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The National Skill Development Corporation promotes vocational training through public-private partnerships,
                enabling skilled employment across India.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#1c2b4a] mb-2">RSLDC</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rajasthan’s State Livelihood Mission empowers youth through training and entrepreneurship under
                the Rajasthan Mission on Skill and Livelihoods.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#1c2b4a] mb-2">DDU-GKY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deen Dayal Upadhyaya Grameen Kaushalya Yojana trains rural youth (15–35) in marketable skills
                to foster self-reliance and family support.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
          <h2 className="text-2xl font-semibold text-[#1c2b4a]"> SHG Formation & Sustainable Livelihoods</h2>
          <ul className="list-disc pl-6 text-[#1c2b4a] space-y-2 text-base">
            <li>Forming and supporting Self-Help Groups (SHGs) for financial inclusion</li>
            <li>Linking SHGs with microfinance institutions and banks</li>
            <li>Helping local communities access markets and improve income sources</li>
            <li>Encouraging entrepreneurship through training and micro-grants</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-lg transition space-y-4">
          <h2 className="text-2xl font-semibold text-[#1c2b4a]"> Youth Empowerment</h2>
          <p className="text-[#1c2b4a] text-base leading-relaxed">
            We empower tribal and rural youth by providing vocational and technical education, leadership development,
            and assistance with job placement or launching small enterprises.
          </p>
        </div>
        
      </div>
    </section>
  );
}
