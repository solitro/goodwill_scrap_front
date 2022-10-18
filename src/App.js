import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";

function App() {
  const [item, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000").then((res) => {
      setItems(res.data);
    });
  }, []);
  return <ItemList item={item} />;
}

export default App;
