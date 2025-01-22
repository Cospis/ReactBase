import { CustomText } from "./components/CustomText";
import CustomButton from "./components/CustomButton";
import { useDispatch } from "react-redux";
import AllRoutes from "./routes/AllRoutes";
// import { setCredentials } from "./redux/authSlice";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { setCredentials } from "./redux/features/auth/authSlice";
import { useEffect } from "react";
import WebFont from "webfontloader";
function App() {
  let persistor = persistStore(store);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Poppins"],
      },
    });
  }, []);
  return (
    // <div className="App">

    // </div>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <AllRoutes />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
