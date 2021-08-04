import { useState } from "react";
import Button from "../button/Button";
import './GardenForm.css'
// https://planthardiness.ars.usda.gov/

function GardenForm({ goBack }) {
    const [formData, setFormData] = useState({
        name: "",
        length: 0,
        width: 0,
        depth: 0
    })

    function handleSubmit(e) {
        e.preventDefault()
        const newGarden = {
            name: formData.name,
            length: parseInt(formData.length),
            width: parseInt(formData.width),
            depth: parseInt(formData.depth)
        }
        
        if(validateForm()){
            console.log(newGarden)
        }
    }

    function validateForm(){
        if (formData.name.trim() === ''){
            console.log('you need to enter a name')
            return false
        }else if(formData.length === 0 ||formData.length>15){
            console.log('please enter a valid length')
            return false
        }else if(formData.width === 0 ||formData.width>15){
            console.log('please enter a valid width')
            return false
        }else if(formData.depth === 0 ||formData.depth>20){
            console.log('please enter a valid depth')
            return false
        }else{
            return true
        }
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