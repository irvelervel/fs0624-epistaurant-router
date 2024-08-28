import { Button, Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col xs={12} md={6}>
          <h2>404 - Not found</h2>
          <p>
            Ci dispiace, ma la pagina che stavi cercando non può essere trovata.
          </p>
          <Button variant="success">TORNA IN HOMEPAGE</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
