import './About.css'

function About() {
    return (
        <div id='about-div'>
            <h1 id='about-header'>
                &#123; About Raised &#125;
            </h1>
            <div id='about-content'>
            <p className='about-p'>
            &#123; RAISED &#125; is a raise-bed, square-foot garden planning application. Users can create new gardens or edit existing ones, as well as look up a variety of plants that thrive in such environments.
            </p>
            <p className='about-p'>
                Using &#123; RAISED &#125; is easy: select 'Create a New Garden' on the homepage, input a name and dimentions for your garden, and get planting. If you need to look up information about a certain plant, check out the 'Plant-pedia' to learn everything from spacing to how to harvest your produce.
            </p>
            <p className='about-p'>
            &#123; RAISED &#125; was created using React, Ruby with ActiveRecord and Rack. It was designed by me, Raquel Román-Rodriguez, as a project for FlatIron School of Software Engineering's program. You can view the source code for the project here:
            </p>
            <a className='about-link' href='https://github.com/raquii/raised-gardening-app'>Front-End</a>
            <a className='about-link' href='https://github.com/raquii/raised-db'>Back-End</a>
            </div>
        </div>
    )
}

export default About;