import { useState } from "react";
import Button from "../button/Button";
import './GardenForm.css'
// https://planthardiness.ars.usda.gov/

function GardenForm({ goBack }) {
    const [formData, setFormData] = useState({
        name: "",
        length: 0,
        width: 0,
        depth: 0,
        zone: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        const newGarden = {
            name: formData.name,
            length: formData.length,
            width: formData.width,
            depth: formData.depth,
            zone: formData.zone
        }
        console.log(newGarden)
    }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setFormData({ ...formData, [key]: value })
    }

    return (
        <form id="new-garden-form" onSubmit={handleSubmit}>
            <h2 id="garden-form-header">Create a New Garden</h2>
            <div id="input-container">
                <label for="name">
                    Name:
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label for="length">
                    Length (ft):
                </label>
                <input
                    id="length"
                    name="length"
                    type="number"
                    value={formData.length}
                    onChange={handleChange}
                />
                <label for="width">
                    Width (ft):
                </label>
                <input
                    id="width"
                    name="width"
                    type="number"
                    value={formData.width}
                    onChange={handleChange}
                />

                <label for="depth">
                    Depth (in):
                </label>
                <input
                    id="depth"
                    name="depth"
                    type="number"
                    value={formData.depth}
                    onChange={handleChange}
                />
            </div>
            <div className="button-container">
                <Button text="Back" clickHandler={goBack} />
                <Button text="Save Garden" clickHandler={handleSubmit} type="submit" />
            </div>
        </form>
    )
}

export default GardenForm;