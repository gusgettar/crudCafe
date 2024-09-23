import { useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const CardProducto = ({ producto }) => {
  const navegacion = useNavigate()
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cafe"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">
            {producto.nombreProducto}
          </Card.Title>
          <Card.Text>
            {producto.descripcion_breve} <br className="mb-2" />
            <span className="fw-bold">{producto.precio}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Link>Ver Mas </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
