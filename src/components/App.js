// create your App component here
import React, { useEffect, useState } from "react";

function App(){
    const [dogURL, setDogURL] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setDogURL(data.message)
            setLoaded(true)
          });
      }, []);

    if(loaded === false) {
        return(<p>Loading...</p>)
    }
    else{
        return(<img src = {dogURL} alt = "A Random Dog" />)
    }
}

export default App;