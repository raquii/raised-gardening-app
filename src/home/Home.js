import Button from '../button/Button';

function Home() {
    function newGardenClick(){
        console.log('create a new garden')
      }
    
      function existingGardenClick(){
        console.log('existing gardens here')
      }
    
    return (
        <div id="intro-div">
            <h1 id="intro-header">&#123; R A I S E D &#125;</h1>
            <p id="intro-content">a raised-bed garden planning app</p>
            <Button text="Create A New Garden" clickHandler={newGardenClick} />
            <Button text="Explore Existing Gardens" clickHandler={existingGardenClick} />
        </div>
    )
}

export default Home;