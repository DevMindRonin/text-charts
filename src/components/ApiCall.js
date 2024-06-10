import { useEffect } from "react"

const ApiCall = ({ text, setApiData }) => {
  useEffect(() => {
    const sendRequest = async () => {
        const response = await fetch("http://localhost:3001/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        })
        const data = await response.json()
        setApiData(data)    
    }
    sendRequest()
  }, [text, setApiData])

}

export default ApiCall
