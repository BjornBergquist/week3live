import { useState } from "react";

export const ErrorMessage = (props) => {
  const [isErrorFixed, setIsErrorFixed] = useState(false);

  let fixError = false;

  const displayMessage = () => {
    console.log(isErrorFixed);
    if (isErrorFixed) return "Error is fixed, hurrah!";
    return props.message;
  };

  return (
    <div>
      <h3>{displayMessage()}</h3>
      <button onClick={() => setIsErrorFixed(true)}>Fixed error</button>
      <button onClick={() => setIsErrorFixed(false)}>Error not fixed</button>
    </div>
  );
};
