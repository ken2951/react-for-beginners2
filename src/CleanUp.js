import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :("); //cleanup function
  });
  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default CleanUp;
