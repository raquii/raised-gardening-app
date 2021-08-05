import { useState } from "react";

function Plot({ plants, plant_id, garden_id }) {
    const [showPlotForm, setShowPlotForm] = useState(false);
    const [plant, setPlant] = useState({
        garden_id: parseInt(garden_id),
        plant_id: null
    });

    if (plant_id) {
        setPlant({ ...plant, plant_id: plants[plant_id] })
    }

    function handlePlotClick(e) {
        if (e.currentTarget === e.target) {
            setShowPlotForm(!showPlotForm)
        }
    }

    function handleFormChange(e) {
        setPlant(p => ({ ...plant, plant_id: parseInt(e.target.value)}))
        setShowPlotForm(!showPlotForm)
    }

    const plotForm = () => {
        return (
            <div className='plot-form'>
                <p className='plot-current'>Current: {plant.plant_id ? plants[plant.plant_id - 1]['name'] : 'none'}</p>
                <form>
                    <button className='plot-btn' onClick={() => setShowPlotForm(!showPlotForm)}>
                        <i className="fa fa-close" />
                    </button>
                    <select value={plant} onChange={handleFormChange}>
                        <option value='null'>Select</option>
                        {plants.map(plant => <option key={plant.name} value={plant.id}>{plant.name}</option>)}
                    </select>
                </form>
            </div>
        )
    }

    return (
        <div className='plot' onClick={handlePlotClick}>
            <img className='plot-image' src={plant.icon} alt={plant.name} />
            {/* <span style={{display: 'hidden'}}>{plant}</span> */}
            {showPlotForm && plotForm()}
        </div>
    )
}

export default Plot;