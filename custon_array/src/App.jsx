
import './App.css'
import NotificationMessage from './components/NotificationMessage';
import About from './pages/About';
import Start from "./pages/Start";
import CategoryProducts from './pages/CategoryProducts';
import Categories from "./pages/Categories";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/start" element={<Start/>} > </Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/categoryProducts" element={<CategoryProducts/>} ></Route>
          <Route path="/Categories" element={<Categories />} ></Route>
        </Routes>
      </BrowserRouter>
      <h1 className="text-3xl font-bold underline">Yineth Karina Rivera Guerrero</h1>
      <NotificationMessage />
      <p>Aquí se puede poner más contenido. c:</p>
    </>
  );
}
export default App
