import AboutUs from "../src/components/AboutUs/AboutUs";
import "./App.css";
import Member from "../src/components/member/Member";
import Selector from "./components/Selector";

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
    <div className="appContainer">
      <h1 id="heading"> message Welcome to our React Applications New Batch</h1>
      <AboutUs />
      <div className="displayBlock">
        <div className="members_container">
          {people.map((value) => {
            return <Member name={value.name} city={value.city} />;
          })}
        </div>
        <div className="selector_container">
          <Selector />
        </div>
      </div>
    </div>
  );
}

export default App;
