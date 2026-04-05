import React from "react";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import FormAction from "./components/FormAction/FormAction";
import ControlledField from "./components/ControlledField/ControlledField";
import UnControlledField from "./components/UnControlledField/UnControlledField";

const App = () => {
  return (
    <div>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      <UnControlledField></UnControlledField>
    </div>
  );
};

export default App;
