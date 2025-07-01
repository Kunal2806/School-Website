
const events = [
  {
    title: "Annual Women’s Day Health Camp",
    date: "March 8, 2025",
    description: "A health awareness and medical check-up camp held for rural women, providing free consultations and health kits.",
  },
  {
    title: "Back-to-School Campaign",
    date: "June 15, 2025",
    description: "Re-enrollment drive for drop-out students in tribal regions. 50+ students brought back into the education system.",
  },
];

const gallery = [
  {
    src: "https://www.chrysaliskids.com/blog/wp-content/uploads/2024/04/Fun-and-Educational-Activities-to-Keep-Your-School-Going-Kids-Engaged.png",
    alt: "Education Activity",
    caption: "Children receiving school kits in a village."
  },
  {
    src: "https://ifmsa.org/wp-content/uploads/2024/03/DSC3292-PCD-CIMSA-USK-1024x681.jpeg",
    alt: "Medical Camp",
    caption: "Free health check-up in tribal area."
  },
  {
    src: "https://www.plt.org/wp-content/uploads/2018/04/shutterstock_683779825-500x333.jpg",
    alt: "Tree Plantation",
    caption: "Volunteers planting saplings near the school."
  },

];

const MediaCenterPage = () => {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
        Media Center
      </h1>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Events & News</h2>
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{event.title}</h3>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{event.date}</p>
            <p style={{ marginTop: "0.5rem", color: "#374151" }}>{event.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {gallery.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "0.75rem",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img src={item.src} alt={item.alt} style={{ width: "100%", height: "auto" }} />
              <p style={{ padding: "0.75rem", color: "#374151" }}>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MediaCenterPage;