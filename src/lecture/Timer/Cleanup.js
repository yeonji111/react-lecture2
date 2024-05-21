import { useState } from "react";
import CleanupTimer from "./CleanupTimer";

const Cleanup = () => {
  /* cleanup작업 : useEffect훅에서 발생함 
     컴포넌트의 생명주기와 관련된 작업을 수행할때 사용
     (ex. 이벤트해제, 처리 / 리소스해제 등)
    */

  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>타이머 보이기</button>
      <button onClick={() => setShow(false)}>타이머 숨기기</button>
      {show ? <CleanupTimer /> : null}
    </div>
  );
};
export default Cleanup;
