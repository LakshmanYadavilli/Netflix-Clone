import Body from "./Components/Body";
import { Provider } from "react-redux";
import userStore from "./utils/store";
function App() {
  return (
    <>
      <Provider store={userStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
