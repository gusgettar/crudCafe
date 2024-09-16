import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../../../helpers/queries";
const ItemProducto = ({producto, fila, setListaProductos}) => {

  const borrarProducto = ()=>{
    Swal.fire({
      title: "¿Esta seguro de borrar el producto?",
      text: "No puedes revertir esta operacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        //pedir a la api borrar el producto
        const respuesta = await borrarProductoAPI(producto.id)
        if(respuesta.status === 200){
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto ${producto.nombreProducto} fue eliminado correctamente.`,
            icon: "success"
          });
          //actualizar el state del administrador
          const productoAPI =  await leerProductosAPI()
          if(productoAPI.status === 200){
            const productosActualizados =  await productoAPI.json()
            setListaProductos(productosActualizados)
          }
          // setListaProductos
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto ${producto.nombreProducto} no pudo ser eliminado. Intenta esta operación en unos minutos.`,
            icon: "Error"
          });
        }
      }
    });
  }

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
