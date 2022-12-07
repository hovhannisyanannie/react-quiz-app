import { useRef } from "react";


const Start = ({ setUsername }) => {
  const inputRef = useRef();

  const handleNameClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        type="text"
        placeholder="Enter Your Name"
        ref={inputRef}
      />
      <button onClick={handleNameClick}>
        Start Quiz
      </button>
    </div>
  );
}


export default Start