import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect,useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";


const Inicio = () => {

  const [listaProductos, setListaProductos] = useState([])

useEffect(()=>{
  obtenerProductos()
},[])

const obtenerProductos = async()=>{
  const respuesta = await leerProductosAPI()
  console.log(respuesta)
  if(respuesta.status === 200){
    const datos = await respuesta.json();
    setListaProductos(datos);
  }else{
    Swal.fire({
      title: "Ocurrio un error",
      text: `En estos momentos no podemos mostrar los productos, intenta en breve.`,
      icon: "error"
    });
  }
}
  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />

        <Row>
          {
            listaProductos.map((producto,posicion)=> <CardProducto key={posicion} producto = {producto}></CardProducto> )
          }
           
          
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
