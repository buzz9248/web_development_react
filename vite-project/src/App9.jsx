import useTitle from "./script/useTitle";
import './App.css'
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useTitle(`당신은 ${count}번 클릭했습니다!`);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((preCount) => preCount + 1)}>
        증가
      </button>
    </>
  );
}
export default Counter;