import SearchBar from "./Header";
import SummaryStatistics from "./grid";
import Sidebar from "./Sidebar";
import './App.css';
import ChartWidget from "./ChartWIdget";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";



function App()
{
  return(

  <>
    <SearchBar/>
    <Sidebar/>  
    <ChartWidget/>

    
  </>
  );
}

const layoutStyle = {
  display: "flex",
  height: "100vh", // Full screen height
  alignItems: "flex-start", // Align items at the top
};

export default App;