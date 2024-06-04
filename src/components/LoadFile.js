import React, { useEffect } from "react"

const LoadFile = ({ loadFile }) => {
    
    const readFile = (e) => {
        const file = e.target.files[0]
        const readIt = new FileReader()
        readIt.onload = (event) => {
            const fileContent = event.target.result;
            loadFile(fileContent)
        };
        readIt.readAsText(file)
       
    }
    return (
        <div>
            <form>
                <input type="file" onChange={readFile} />
            </form>
        </div>
    )
}

export default LoadFile
