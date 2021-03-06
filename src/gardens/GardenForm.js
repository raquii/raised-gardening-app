import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from "../button/Button";
import './GardenForm.css'
// https://planthardiness.ars.usda.gov/

function GardenForm({ goBack }) {
    const [formData, setFormData] = useState({
        name: "",
        length: 0,
        width: 0,
        depth: 0
    });

    const history = useHistory();

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setFormData({ ...formData, [key]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newGarden = {
            name: formData.name,
            length: parseInt(formData.length),
            width: parseInt(formData.width),
            depth: parseInt(formData.depth)
        }

        if (validateForm()) {
            saveGarden(newGarden);
        }
    }

    function validateForm() {
        if (formData.name.trim() === '') {
            alert(`Give your garden a name!`)
            return false
        } else if (formData.length === 0 || formData.length > 15) {
            alert(`please enter a valid LENGTH (between 1-15 ft)`)
            return false
        } else if (formData.width === 0 || formData.width > 15) {
            alert('please enter a valid WIDTH (between 1-15 ft)')
            return false
        } else if (formData.depth < 5 || formData.depth > 30) {
            console.log('please enter a valid DEPTH (between 5-30 in)')
            return false
        } else {
            return true
        }
    }

    function saveGarden(newGarden) {
        fetch("https://frozen-sea-47540.herokuapp.com/gardens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGarden)
        })
            .then(res => res.json())
            .then(data => history.push(`/garden-editor/${data.garden.id}`))
    }

    return (
        <form id="new-garden-form" onSubmit={handleSubmit}>
            <h2 id="garden-form-header">Create a New Garden</h2>
            <div id="input-container">
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="length">
                    Length (ft):
                </label>
                <input
                    id="length"
                    name="length"
                    type="number"
                    value={formData.length}
                    onChange={handleChange}
                />
                <label htmlFor="width">
                    Width (ft):
                </label>
                <input
                    id="width"
                    name="width"
                    type="number"
                    value={formData.width}
                    onChange={handleChange}
                />

                <label htmlFor="depth">
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
                <Button
                    text="Back"
                    clickHandler={goBack}
                />
                <Button
                    text="Save Garden"
                    clickHandler={handleSubmit}
                    type="submit"
                />
            </div>
        </form>
    )
}

export default GardenForm;