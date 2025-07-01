import React from "react";

const projects = [
  {
    title: "Education",
    description:
      "We improve literacy and provide access to quality education in rural and tribal areas. Activities include running primary schools, distributing learning materials, and offering scholarships. Over 500 students have benefited.",
  },
  {
    title: "Livelihood Program",
    description:
      "We promote economic independence through skill development workshops, self-employment training, and SHG support. More than 100 individuals now earn sustainable incomes.",
  },
  {
    title: "Environment",
    description:
      "We conduct tree plantation drives, cleanliness campaigns, and promote rainwater harvesting to encourage sustainable living. Over 10,000 trees planted so far.",
  },
  {
    title: "Women Empowerment",
    description:
      "We empower women via vocational training, legal literacy sessions, and SHG formation. 250+ women trained and 50+ SHGs created.",
  },
  {
    title: "Working in Tribal Region",
    description:
      "We serve tribal communities with mobile education vans, cultural preservation initiatives, and help access government welfare schemes. Impact spans across 30+ villages.",
  },
  {
    title: "Medical",
    description:
      "We organize free health camps, hygiene awareness programs, and promote nutritional education. 1,200+ villagers treated through our medical initiatives.",
  },
];

const ProjectDescriptionPage = () => {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
        Project Description
      </h1>
      {projects.map((project) => (
        <div
          key={project.title}
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
            {project.title}
          </h2>
          <p style={{ color: "#4b5563" }}>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectDescriptionPage;
