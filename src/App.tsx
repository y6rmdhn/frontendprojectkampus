import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/test")
            .then(res => setMessage(res.data.message))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">Test API</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
