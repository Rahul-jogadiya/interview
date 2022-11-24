import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import FormComponent from "./component/form";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
