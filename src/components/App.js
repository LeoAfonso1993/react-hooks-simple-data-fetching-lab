import react from "react";
import { useEffect, useState } from "react";

function App(){

const[dogs, setDogs] = useState("")
const[isLoading, setIsLoading] = useState(true)
const[isDisplaying, setIsDisplaying] = useState(false)


useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then ((object) => {
        setIsLoading(false)
        setDogs(object.message)
        setIsDisplaying(true)
        })

}, [])

function DisplayDog(){
    if(isDisplaying === true) {
        return <img src={dogs} alt="A Random Dog"></img>
    } else {
        return null;
    }

}

return (
    <div>
        <p>{isLoading ? "Loading..." : null}</p>
        <DisplayDog />
        
    </div>
)

}


export default App;