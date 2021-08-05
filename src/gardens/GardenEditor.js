import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Plot from "./Plot";

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
    //if garden hasn't loaded, show loading screen
    if (!garden) return <h2>Sowing seeds...</h2>

    //destructure garden
    const { name, length, width, depth } = garden;

    const grid = () => {

        let plotsArr;
        //if the garden already has plots
        if (plots.length > 0) {
            //create the 2D array based on length and width of garden, and assign the object to the correct cords
            let sortedPlots = plots.sort((a, b) => a.position - b.position);
            plotsArr = Array.from(Array(width), () => new Array(length));

            let count = 0;
            for (let i = 0; i < width; i++) {
                for (let j = 0; j < length; j++) {
                    if (sortedPlots[count] !== undefined) {
                        plotsArr[i][j] = {
                            plant_id: sortedPlots[count]["plant_id"],
                            garden_id: parseInt(id),
                            position: sortedPlots[count]["position"],
                            plant_name: sortedPlots[count]["plant_name"]
                        }
                    } else {
                        plotsArr[i][j] = {
                            plant_id: null,
                            garden_id: parseInt(id),
                            position: count
                        }
                    }
                    count++
                }
            }
        } else {
            plotsArr = Array.from(Array(width), () => new Array(length).fill({ plant_id: null, garden_id: parseInt(id) }));

            let count = 1;
            for (let i = 0; i < width; i++) {
                for (let j = 0; j < length && count <= plotsArr.flat().length; j++) {
                    plotsArr[i][j] = { plant_id: null, garden_id: parseInt(id), position: count }
                    count++
                }
            }

        }

        return plotsArr.map((row, y) => (
            <div key={y} style={{ display: "flex" }}>
                {row.map((plot, x) => (
                    <Plot
                        plants={plants}
                        plant_id={plot.plant_id}
                        plant_name={plot.plant_name}
                        garden_id={plot.garden_id}
                        key={[x, y]}
                        position={plot.position}
                    />
                ))}
            </div>
        ))
    }

    return (
        <div id='garden-editor'>
            <h1>&#123; Garden Editor &#125;</h1>
            <h2>{name}</h2>
            <p>{length} x {width} x {depth}</p>
            <div id='garden-plot-container'>
                {grid()}
            </div>
        </div>
    )
}
export default GardenEditor;