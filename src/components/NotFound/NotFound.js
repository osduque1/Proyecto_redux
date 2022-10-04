import { Container, Row, Col } from "react-bootstrap";
import Error from "../../assets/images/error.svg";

const NotFound = () => {
  const handleFetch = () => {
    fetch('https://master.d33y9gqtkw8kl1.amplifyapp.com/api/items?q=:pokemon')
      .then((res) => console.log(res))
      .then((json) => console.log(json));
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <img style={{ width: "100%" }} src={Error} alt="error" />
          <h2>¿Te has perdido?</h2>
          <btn
            onClick={handleFetch}
            style={{
              color: "red",
              fontSize: "1.5rem",
              marginTop: "20px",
              marginLeft: "0",
              cursor: "pointer"
            }}
          >
            Vuelve al Inicio
          </btn>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
