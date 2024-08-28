import { Button, Card, Col, Container, Row } from 'react-bootstrap'
// ora questa pagina dettaglio funzionerà per qualsiasi pastasciutta
// il componente PastaDetails viene montato in App.js su una rotta "parametrica",
// ovvero sa che qualunque sarà il suo percorso al suo interno troverà un parametro
// che in App.js abbiamo definito "pastaId"
// "pastaId" è l'id della pasta di cui mostrare i dettagli
// dobbiamo RECUPERARLO dalla barra degli indirizzi, cercare nel JSON la pasta
// giusta e mostrarne i dettagli

// 1) recuperiamo dalla barra degli indirizzi il valore corrente del parametro "pastaId"
import { useParams } from 'react-router-dom'

const PastaDetails = () => {
  const params = useParams() // params.pastaId è il valore dell'id della pasta
  console.log('OGGETTO PARAMS', params)

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8}>
          <Card>
            <Card.Img variant="top" src="https://placedog.net/500" />
            <Card.Body>
              <Card.Title>Nome pasta</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                iste ab est excepturi corrupti delectus soluta, facilis ut nihil
                magni? Quas, nesciunt? Possimus explicabo ducimus modi iure vero
                repellendus asperiores.
                {/* anche il prezzo */}
              </Card.Text>
              <Button variant="primary">Torna in Homepage</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* todo: inserire anche i commenti della pasta */}
    </Container>
  )
}

export default PastaDetails
