import { useState } from 'react';
import Button from '../button/Button';
import GardenForm from '../garden-creator/GardenForm';
import './Home.css';

function Home() {
  const [showForm, setShowForm] = useState(false);

  function newGardenClick() {
    setShowForm(!showForm)
  }

  function existingGardenClick() {
    console.log('existing gardens here')
  }

  function buttonDiv() {
    return (
      <div className="button-container">
        <Button text="Create a New Garden" clickHandler={newGardenClick} />
        <Button text="Explore Existing Gardens" clickHandler={existingGardenClick} />
      </div>
    )
  }


  return (
    <div id="intro-div">
      <h1 id="intro-header">&#123; R A I S E D &#125;</h1>
      <p id="intro-content">a raised-bed garden planning app</p>
      {showForm ? <GardenForm goBack={ newGardenClick }/> : buttonDiv()}
    </div>
  )
}

export default Home;