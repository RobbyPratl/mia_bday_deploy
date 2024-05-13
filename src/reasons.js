import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const reasons = [
  "You always listen to what I'm saying, even before we were dating",
  "Even in my most retarded moments (K), you still accepted me",
  "You are absolutely hilarious",
  "You listen to my autistic yapping",
  "You are a literal ray of sunshine wherever you go",
  "I've had to look deep into people to convince myself that they are kind and compassionate, but I do not have to look at all to find that with you",
  "You encourage me to work my hardest",
  "You made me feel like I could be myself within days of knowing you",
  "You live in the moment",
  "You treat everyone with kindness",
  "You're literally my other half",
  "Your energy is nurturing",
  "The way you hug and embrace",
  "You keep it real when it needs to be real, but never dismissive",
  "You always can make humor of a not so funny situation",
  "You give me purpose",
  "I think we are very very compatible",
  "When I'm with you, it seems like my problems dissapear",
  "You are absolutely gorgeous (even when you don't think so)",
  "You definitely have the best smile out of anybody in the world",
  "Your prescence is comforting",
  "You keep me sane",
  "My rave bae",
  "You can outdrink me",
  "Your ability to make light of any situation",
  "The reels you send me at past midnight",
  "You make me feel wanted",
  "Your independence",
  "Your resiliance (and stubbornness lol)",
  "I wanna scoop your eyeballs out they're so pretty (I am kinda tipsy writing these ngl)",
  "Your strong work ethic",
  "Ready to smack a bitch",
  "You never judge me",
  "Your amazing sense of humor",
  "You got a lot of jokes",
  "You speak your mind",
  "You give the best hugs",
  "You are my bestfriend",
  "You like to try new things",
  "You know how to have a good time",
  "Your love for animals",
  "I love your smell",
  "You make the best pasta",
  "",
];

const Reasons = () => {
  const dex = Math.floor(Math.random() * reasons.length);

  const [currentReason, setCurrentReason] = useState(reasons[dex]);
  const navigate = useNavigate();

  const getRandomReason = () => {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    setCurrentReason(reasons[randomIndex]);
  };

  function ListToCsvExporter({ data, filename }) {
    const convertToCsv = (data) => {
      let csv = "Reasons\n";

      data.forEach((reason) => {
        csv += `"${reason}"\n`; // Surround each reason with double quotes
      });

      return csv;
    };

    const downloadCsv = () => {
      const csvContent = convertToCsv(data);
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${filename}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <button
        style={{ ...buttonStyle, ...(handleGoBackHome ? hoverStyle : null) }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverStyle.backgroundColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
        }}
        onClick={downloadCsv}
      >
        Export to CSV
      </button>
    );
  }

  const reasonsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const headerStyle = {
    fontSize: "2rem",
    marginBottom: "2rem",
  };

  const reasonStyle = {
    fontSize: "1.5rem",
    fontFamily: "sans-serif",
    marginBottom: "2rem",
  };

  const buttonStyle = {
    backgroundColor: "#3f51b5",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
    margin: "8px",
  };

  const hoverStyle = {
    backgroundColor: "#283593",
  };

  const handleGoBackHome = () => {
    navigate("/");
  };

  return (
    <div style={reasonsContainerStyle}>
      <h2 style={headerStyle}>Reasons I Love You</h2>
      <p style={reasonStyle}>{currentReason}</p>
      <div>
        <button
          style={{ ...buttonStyle, ...(getRandomReason ? hoverStyle : null) }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = hoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
          }}
          onClick={getRandomReason}
        >
          Random Reason
        </button>
        <button
          style={{ ...buttonStyle, ...(handleGoBackHome ? hoverStyle : null) }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = hoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
          }}
          onClick={handleGoBackHome}
        >
          Back Home
        </button>
        <ListToCsvExporter data={reasons} filename="exported_data" />
      </div>
    </div>
  );
};

export default Reasons;
