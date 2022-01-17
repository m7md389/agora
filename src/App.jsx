import { Fragment } from "react";
import { observer } from "mobx-react";
import Market from "./components/Market";
import "./App.css";

const App = observer((props) => {
  return (
    <Fragment>
      <Market />
    </Fragment>
  );
});

export default App;
