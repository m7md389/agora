import { observer } from "mobx-react";
import Market from "./components/Market";
import "./App.css";

const App = observer((props) => {
  return <Market />;
});

export default App;
