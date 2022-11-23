import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import FormComponent from "./component/form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/admin/register"
          element={
            <FormComponent apiUrl="http://192.168.43.175/admin/register" />
          }
        />
        <Route
          path="/customer/register"
          element={
            <FormComponent apiUrl="http://192.168.43.175/user/register" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
