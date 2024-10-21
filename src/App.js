import { CustomText } from "./components/CustomText";
import CustomButton from "./components/CustomButton";
import { useDispatch } from "react-redux";
// import { setCredentials } from "./redux/authSlice";
import { setCredentials } from "./redux/features/auth/authSlice";
function App() {
  const dispatch = useDispatch();
  const testRedux = () => {
    dispatch(
      setCredentials({
        user: {
          firstName: "res?.data?.data",
          lastName: "res?.data?.data",
          email: "authValues?.email",
          password: "authValues?.password",
        },
        token: "res?.data?.data?.token",
        // adminStatus: response.data.data.adminStatus,
      })
    );
  };
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
        onClick={testRedux}
        text="Mark as Closed"
        disabled={false}
        // loading={}
      />
    </div>
  );
}

export default App;
