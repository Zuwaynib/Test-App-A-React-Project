import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <h1>Top 3 activities to do in Lagos</h1>
      <div className="card-div">
        <Card
          altClass="first-card"
          title="Experience the vibrant nightlife."
          subtitle="Lagos's nightlife is an energetic blend of music and clubs, creating a vibrant after-dark scene."
        />
        <Card
          altClass="second-card"
          title="Explore Lekki Conservation Centre"
          subtitle="The Lekki Conservation Centre offers a tranquil nature escape with canopy walks and wildlife in busy Lagos."
        />
        <Card
          altClass="third-card"
          title="Visit the National Museum Lagos"
          subtitle="The National Museum offers a Discovery of Nigeria's heritage through diverse artifacts and cultural history."
        />
      </div>
    </div>
  );
}

export default App;
