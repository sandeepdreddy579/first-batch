import AboutUs from "../src/components/AboutUs/AboutUs";
import "./App.css";
import Member from "../src/components/member/Member";

const people = [
  { name: "Alex R.", city: "New York" },
  { name: "Jamie T.", city: "London" },
  { name: "Sam K.", city: "Tokyo" },
  { name: "Taylor M.", city: "Paris" },
  { name: "Jordan P.", city: "Sydney" },
  { name: "Casey L.", city: "Toronto" },
  { name: "Riley N.", city: "Berlin" },
  { name: "Morgan C.", city: "Dubai" },
  { name: "Avery D.", city: "San Francisco" },
  { name: "Quinn H.", city: "Singapore" },
  { name: "Charlie B.", city: "Amsterdam" },
  { name: "Dakota S.", city: "Los Angeles" },
  { name: "Skyler F.", city: "Rome" },
  { name: "Peyton J.", city: "Madrid" },
  { name: "Drew A.", city: "Seoul" },
  { name: "Harper W.", city: "Chicago" },
  { name: "Reese G.", city: "Bangkok" },
  { name: "Cameron E.", city: "Vancouver" },
  { name: "Finley Q.", city: "Oslo" },
  { name: "Rowan Z.", city: "Cape Town" },
];

function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: "lightblue",
          textAlign: "center",
          padding: "20px",
          margin: "15px",
          borderRadius: "10px",
          fontFamily: "Arial, sans-serif",
          color: "darkblue",
          boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.9)",
          cursor: "pointer",
        }}
      >
        Welcome to our React Applications
      </h1>
      <AboutUs />
      <div className="members_container">
        {people.map((value) => {
          return <Member name={value.name} city={value.city} />;
        })}
      </div>
    </>
  );
}

export default App;
