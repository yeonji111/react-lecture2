import "./App.css";
import HookUseState from "./lecture/HookUseState";
import JsxRolues from "./lecture/jsxRolues";
import JsxRolues_m from "./mission/jsxRolues";
import HookUseState_m from "./mission/HookUseState";
import HookUseEffect from "./lecture/HookUseEffect";
import HookUseEffect_m from "./mission/HookUseEffect";
import HookUseRef from "./lecture/HookUseRef";
import HookUseRef_m from "./mission/HookUseRef";
// import HookUseCallback from "./lecture/HookUseCallback";
// import HookUseCallback_m from "./mission/HookUseCallback";
import PropsSend from "./lecture/PropsSend";
import PropsSend_m from "./mission/PropsSend";
import Cleanup from "./lecture/Timer/Cleanup";
import Signup from "./mission/Timer/Signup";
import Schedule from "./lecture/Schedule/Schedule";
import Schedule_m from "./mission/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      {/* 설명컴포넌트 */}
      {/* <JsxRolues /> */}
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseRef /> */}
      {/* <HookUseCallback /> */}
      {/* <PropsSend /> */}
      {/* <Cleanup /> */}
      {/* <Schedule /> */}

      {/* 미션컴포넌트 */}
      {/* <JsxRolues_m /> */}
      {/* <HookUseState_m /> */}
      {/* <HookUseEffect_m /> */}
      {/* <HookUseRef_m /> */}
      {/* <HookUseCallback_m /> */}
      {/* <PropsSend_m /> */}
      {/* <Signup /> */}
      <Schedule_m />
    </div>
  );
}

export default App;
