import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col xs={12} md={6}>
          <h2>404 - Not found</h2>
          <p>
            Ci dispiace, ma la pagina che stavi cercando non può essere trovata.
          </p>
          <Button
            variant="success"
            onClick={() => {
              navigate('/') // riporta in homepage da JS
            }}
          >
            TORNA IN HOMEPAGE
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
