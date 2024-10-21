import logo from "./logo.svg";
import { Button } from "react-bootstrap";
import "./App.css";
import { CustomText } from "./components/CustomText";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="App">
      <CustomText
        fontFamily={"Poppins"}
        fontSize={40}
        fontWeight={700}
        textClassName="text-black"
        text={"Queue Updates"}
        cNColor="primary"
      />
      <CustomButton
        variant="danger"
        type="submit"
        // onClick={markAsClosed}
        text="Mark as Closed"
        disabled={true}
        // loading={}
      />
    </div>
  );
}

export default App;
