import { useState } from "react";

function Plot({ plants, garden_id, position, plant_name }) {
    const [showPlotForm, setShowPlotForm] = useState(false);
    const [select, setSelect] = useState();
    const [name, setName] = useState('');

    function handlePlotClick(e) {
        setShowPlotForm(!showPlotForm)
    }

    function handleFormChange(e) {
        setSelect(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setShowPlotForm(!showPlotForm)
        savePlant(parseInt(select))
    }

    function savePlant(plantId) {
        const updatedPlot = {
            garden_id: garden_id,
            plant_id: plantId,
            position: position
        }

        fetch(`http://localhost:9393/gardens/${garden_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPlot)
        })
            .then(res => res.json())
            .then(data => setName(data['plot']['plant_name']))
    }

    const plotForm = () => {
        return (
            <div className='plot-form'>
                <p className='plot-current'>Current: {plant_name ? plant_name : 'none'}</p>
                <form onSubmit={handleSubmit}>
                    <button className='plot-btn' onClick={() => setShowPlotForm(!showPlotForm)}>
                        <i className="fa fa-close" />
                    </button>
                    <button className='plot-btn' type={'submit'}>
                        <i className="fa fa-check" />
                    </button>
                    <select value={select} onChange={handleFormChange}>
                        <option value='null'>Select</option>
                        {plants.map(plant => <option key={plant.name} value={plant.id}>{plant.name}</option>)}
                    </select>
                </form>
            </div>
        )
    }


    return (
        <>
            <div className='plot' onClick={handlePlotClick}>
                {/* <img className='plot-image' src={plant.icon} alt={plant.name} /> */}
                <p className='plot-label'>{name.length > 0 ? name : plant_name ? plant_name : 'none'}</p>
            </div>
            {showPlotForm && plotForm()}
        </>
    )
}

export default Plot;