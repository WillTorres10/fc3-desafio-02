import {useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/routes").then(response => {
      setRoutes(response.data);
    });
  }, []);
  return (
    <div>
      <ul>
        <>
      {routes?.map(item => {
        return (
          <li key={item.title}>
            <ul>
              <li><strong>Title</strong>: {item.title}</li>
              <li><strong>StartPosition</strong>: <i>LAT:</i> {item.startPosition.latitude} | <i>LON:</i> {item.startPosition.longitude}</li>
              <li><strong>EndPosition</strong>: <i>LAT:</i> {item.endPosition.latitude} | <i>LON:</i> {item.endPosition.longitude}</li>
            </ul>
            <br />
          </li>
        )
      })}
        </>
      </ul>
    </div>
  );
}

export default App;
