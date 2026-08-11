
import React from "react";

function Counter() {
    var a = 12;

    const [counter, setCounter] = React.useState(0);
    const [msg, setMsg] = React.useState("");

    const incrementData = () => {
        if (counter >= 5) {
            setMsg("sorry > 5");
        } else {
            setCounter(counter + 1);
            setMsg("");
        }
    };

    const decrementData = () => {
        if (counter <= 0) {
            setMsg("sorry < 0");
        } else {
            setCounter(counter - 1);
            setMsg("");
        }
    };

    return (
        <>
            <p style={{ color: "red" }}>
                Counter: {counter}
            </p>

            <input
                type="button"
                onClick={incrementData}
                value="+"
            />

            <input
                type="button"
                onClick={decrementData}
                value="-"
            />

            <input
                type="button"
                onClick={() => setCounter(0)}
                value="x"
            />

            <p>{msg}</p>
        </>
    );
}

export default Counter;

