import React, { useState } from "react";

const updatefunction = (OldComponent) => {
  return function NewComponent(props) {
    const [count, setCount] = useState(0);

    const addcount = () => {
      setCount((c) => c + 1);
    };

    return <OldComponent count={count} addcount={addcount} />;
  };
};

export default updatefunction;
