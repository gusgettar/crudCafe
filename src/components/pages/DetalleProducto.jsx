import { Container, Card, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const DetalleProducto = () => {
  const location = useLocation()
  const {producto} = location.state
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{producto.nombreProducto.toUpperCase()}</Card.Title>
              <hr />
              <Card.Text>
              descripcion: {producto.descripcion_breve}              <br/>
              <br/>
              <span className="primary-font fw-semibold ">categoria: {producto.categoria}</span>
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">precio: ${producto.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
