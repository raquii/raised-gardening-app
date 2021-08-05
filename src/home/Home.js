import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button/Button';
import GardenForm from '../gardens/GardenForm';
import './Home.css';

function Home() {
  const [showForm, setShowForm] = useState(false);
  const history = useHistory()

  function toggleShowForm() {
    setShowForm(!showForm)
  }

  function buttonDiv() {
    return (
      <div className="button-container">
        <Button text="Create a New Garden" clickHandler={toggleShowForm} />
        <Button text="Explore Existing Gardens" clickHandler={()=>history.push(`/existing-gardens`)} />
      </div>
    )
  }


  return (
    <div id="intro-div">
      <h1 id="intro-header">&#123; R A I S E D &#125;</h1>
      <p id="intro-content">a raised-bed garden planning app</p>

      {/* conditionally render new garden form */}
      { showForm ?
        <GardenForm goBack={toggleShowForm} />
        :
        buttonDiv()
      }
    </div>
  )
}

export default Home;