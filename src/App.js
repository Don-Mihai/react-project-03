import React from "react";
import Button from "./components/Button";

function App() {


  return (
    <div className="text">
      <Button text={'Кликни меня!'} fullWidth={true}/>
      <Button text={'Тыкни меня!'}/>
      <Button />
    </div>
  );
}

export default App;
