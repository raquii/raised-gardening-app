import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Plot from "./Plot";
import Button from "../button/Button";

function GardenEditor({ plants }) {
    const [garden, setGarden] = useState(null);
    const [plots, setPlots] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9393/gardens/${id}`)
            .then(r => r.json())
            .then(data => {
                setGarden(data.gardens[0])
                setPlots(data.gardens[0].plots)
            })
    }, [id])

    if (!garden) return <h2>Sowing seeds...</h2>

    const { name, length, width, depth } = garden;

    let plotsArr;

    if (plots.length > 0) {
        plotsArr = Array.from(Array(width), () => new Array(length));
        let id = 0;
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < length; j++) {
                plotsArr[i][j] = plots[id]
                id++
            }
        }
    } else {
        plotsArr = Array.from(Array(width), () => new Array(length).fill({ plant_id: null, garden_id: parseInt(id) }));
    }

    const grid = plotsArr.map((row, y) => (
        <div key={y} style={{ display: "flex" }}>
            {row.map((plot, x) => (
                <Plot plants={plants} plant_id={plot.plant_id} garden_id={parseInt(id)} key={[x, y]} />
            ))}
        </div>
    ));

    function saveHandler(){
        const updatedGarden = {

        }
        fetch(`http://localhost:9393/gardens/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedGarden)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div id='garden-editor'>
            <h2>Garden Editor</h2>
            <h4>{name}</h4>
            <p>{length} x {width} x {depth}</p>
            <Button text={'Save Changes'} clickHandler={saveHandler} />
            {grid}
        </div>
    )
}
export default GardenEditor;