import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])


    return (
        <div className="p-4">
            <h2 className="text-xl">Counter: {count}</h2>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-2"
                onClick={() => setCount(count + 1)}
            >
            Increase
            </button>
        </div>

    )
}

export default Counter;