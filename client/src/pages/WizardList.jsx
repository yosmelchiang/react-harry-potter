import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WizardList() {
  const [wizards, setWizards] = useState([]);

  useEffect(() => {
    async function loadWizards() {
      try {
        const res = await fetch("http://localhost:3000/api/v1/wizards");
        if (res.ok) {
          const data = await res.json();
          setWizards(data.data); // This updates the UI automatically!
        }
      } catch (err) {
        console.error("Error fetching wizards", err);
      }
    }

    loadWizards();
  }, []);

  return (
    <div>
      <h2>All Wizards</h2>
      {wizards.length === 0 ? (
        <p>Loading or no wizards found...</p>
      ) : (
        <ul>
          {wizards.map((wizard) => (
            <li key={wizard.id}>
              <Link to={`/wizards/${wizard.id}`}>{wizard.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WizardList;
