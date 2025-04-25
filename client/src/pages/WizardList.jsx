import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './WizardList.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// We need to tell vite to treat these files as static assets in vite.config.js by adding: assetsInclude: ['**/*.lottie]
// If we instead place them in public, theyll be treated as static assets by vite automatically
import magician from '../assets/magician.lottie'
import walkingCoffee from '../assets/walkingCoffee.lottie'

function WizardList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [wizards, setWizards] = useState([]);

  useEffect(() => {
      
      fetch(`${API_URL}/api/v1/wizards`)
      .then(response => {
        if(!response.ok) throw new Error('Failed to fetch wizards')
          return response.json();
      })
      .then(data => setWizards(data.data))
      .catch(err => console.error(err))
    
      // async function getWizards() {
      //   try {
      //     const res = await fetch(`${API_URL}/api/v1/wizards`);
      //     if (res.ok) {
      //       const data = await res.json();
      //       setWizards(data.data);
      //     }
      //   } catch (err) {
      //     console.error("Error fetching wizards", err);
      //   }
      // }

      // getWizards();
  }, []);

  function DisplayWizards() {
    if(wizards.length === 0) {
      return (
      <div>
        <div style={{display: "flex"}}>

        <DotLottieReact src={walkingCoffee} loop autoplay style={{width: '200px', height: '200px'}}/>
        <DotLottieReact src={magician} loop autoplay style={{width: '200px', height: '200px'}}/>
        </div>
      <h1>Loading...</h1>
      <p>If this is taking too long that means the API service is either down, not waking up or there are no wizards in the database...</p>
      <a href={API_URL} target="_blank">Click here to wake up the API service then come back here and try again</a>
      </div>
      )
    } else {
      return (
        <div>
          <ul className="wizard-grid">
            {wizards.map((wizard) => (
              <div className="wizard-card">
              <li key={wizard.id}>
                <Link to={`/wizards/${wizard.id}`}>
                <img src={wizard.image} alt={wizard.name}></img>
                <h3>{wizard.name}</h3>
                </Link>
              </li>
              </div>
            ))}
          </ul>
        </div>
      )
    }
  }

  return (
    <div>
      <h2>All Wizards</h2>
      <DisplayWizards />
    </div>
  );
}

export default WizardList;
