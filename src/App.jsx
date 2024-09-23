import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Error404 from "./components/pages/Erro404";
import DetalleProducto from "./components/pages/DetalleProducto";
import Login from "./components/pages/Login";
import { useState } from "react";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('userKey')) || ''
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)
  return (
    <>
 
      {/* <Inicio></Inicio> */}
      {/* <Administrador></Administrador> */}
      <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado}></Menu>
        <Routes> 
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/detalleproducto" element={<DetalleProducto></DetalleProducto>}></Route>
          <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
          <Route exact path="/administrador/crear" element={<FormularioProducto titulo='Nuevo producto' creandoProducto={true}></FormularioProducto>}></Route>
          <Route exact path="/administrador/editar/:id" element={<FormularioProducto titulo='Editar producto' creandoProducto={false}></FormularioProducto>}></Route>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes> 
      
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
