import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate()

  return (
    <Container>
      {pastasciutte.map((pasta) => {
        return (
          <Row className="justify-content-center my-2" key={pasta.id}>
            <Col xs={12} md={6}>
              <Card className="text-center">
                <Card.Img variant="top" src={pasta.image} />
                <Card.Body>
                  <Card.Title>{pasta.name}</Card.Title>
                  <Card.Text>{pasta.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/details/' + pasta.id)}
                    // /details/0
                    // /details/1
                    // /details/2
                    // etc.
                  >
                    Vai ai dettagli
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}

export default Menu
