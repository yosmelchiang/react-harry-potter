import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function WizardDetail() {
  const API_URL = "https://react-harry-potter.onrender.com";
  const { id } = useParams();
  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    async function loadWizard() {
      try {
        const res = await fetch(`${API_URL}/api/v1/wizards`);
        const allWizards = await res.json();
        const found = allWizards.data.find((w) => w.id === parseInt(id));
        setWizard(found);
      } catch (err) {
        console.error("Error fetching wizard", err);
      }
    }

    loadWizard();
  }, [id]);

  if (!wizard) return <p>Wizard not found...</p>;

  return (
    <div>
      <h2>{wizard.name}</h2>
      <p>Gender: {wizard.gender}</p>
      <p>Ancestry: {wizard.ancestry}</p>
      <p>Patronus: {wizard.patronus}</p>
      <p>Dark Wizard: {wizard.isDarkWizard ? "Yes" : "No"}</p>
      <p>House ID: {wizard.HouseId}</p>
    </div>
  );
}

export default WizardDetail;
