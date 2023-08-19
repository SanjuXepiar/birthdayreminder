import "./App.css";
import data from "./Data";
import React, { useState } from "react";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <div className="title">
        <h1>{people.length} Birthdays Today</h1>
      </div>
      <section className="section">
        {/* List */}
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div className="sectionCentre">
              <img className="img" key={id} src={image} alt={name} />
              <div className="footer">
                <h3> {name}</h3>
                <p> {age} years</p>
              </div>
            </div>
          );
        })}
      </section>
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
}
export default App;
