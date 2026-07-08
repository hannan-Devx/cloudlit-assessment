'use client';

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#0f0f1e",
        margin: 0,
        padding: 0,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#1a1a2e",
          borderRadius: "20px",
          padding: "60px 80px",
          textAlign: "center",
          maxWidth: "600px",
          border: "1px solid #333",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Next.js Logo */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "40px",
            letterSpacing: "2px",
          }}
        >
          NEXT<span style={{ color: "#0070f3" }}>.</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            margin: "0 0 10px 0",
            lineHeight: "1.4",
            
          }}
        >
          Cloud Engineer
          <br />
          Intern Assessment
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#999",
            fontSize: "14px",
            margin: "20px 0 40px 0",
            letterSpacing: "0.5px",
          }}
        >
          Deployed by: Abdul Hannan
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => alert("Deploy functionality coming soon!")}
            style={{
              backgroundColor: "white",
              color: "#000",
              border: "none",
              padding: "10px 30px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 5px 20px rgba(255, 255, 255, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "12px" }}>▲</span> Deploy Now
          </button>

          <button
            onClick={() => alert("Documentation coming soon!")}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid #555",
              padding: "10px 30px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#fff";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#555";
            }}
          >
            Documentation
          </button>
        </div>

        {/* Your Name */}
        <div
          style={{
            marginTop: "50px",
            paddingTop: "30px",
            borderTop: "1px solid #333",
            color: "#666",
            fontSize: "12px",
          }}
        >
          Built by: <span style={{ color: "#0070f3", fontWeight: "bold" }}>Abdul Hannan</span>
        </div>
      </div>
    </main>
  );
}