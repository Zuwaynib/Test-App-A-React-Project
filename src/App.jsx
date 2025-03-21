import "./App.css";

const Card = ({ title, subtitle }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Card
        title="Experience the vibrant nightlife."
        subtitle="Lagos's nightlife is an energetic blend of music and clubs, creating a vibrant after-dark scene."
      />
      <Card
        title="Explore Lekki Conservation Centre"
        subtitle="The Lekki Conservation Centre offers a tranquil nature escape with canopy walks and wildlife in busy Lagos."
      />
      <Card
        title="Visit the National Museum Lagos"
        subtitle="The National Museum offers a Discovery of Nigeria's heritage through diverse artifacts and cultural history."
      />
    </div>
  );
}

export default App;
