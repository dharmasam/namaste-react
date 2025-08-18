import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1>Namaste React</h1>;
const HeadingComponent = () => {
    return (
    <div className="heading">
        {100 + 100}
        <Title />
      This is a Heading Heading Component by Sumit
      <span className="emoji">🥳</span>
      <span className="emoji">🎉</span>
    </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

//Git push check
