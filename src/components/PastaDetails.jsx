import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap'
// ora questa pagina dettaglio funzionerà per qualsiasi pastasciutta
// il componente PastaDetails viene montato in App.js su una rotta "parametrica",
// ovvero sa che qualunque sarà il suo percorso al suo interno troverà un parametro
// che in App.js abbiamo definito "pastaId"
// "pastaId" è l'id della pasta di cui mostrare i dettagli
// dobbiamo RECUPERARLO dalla barra degli indirizzi, cercare nel JSON la pasta
// giusta e mostrarne i dettagli

// 1) recuperiamo dalla barra degli indirizzi il valore corrente del parametro "pastaId"
import { useParams, useNavigate } from 'react-router-dom'
import pastasciutte from '../data/menu.json'
import { useEffect, useState } from 'react'
import PastaReviews from './PastaReviews'

const PastaDetails = () => {
  const params = useParams() // params.pastaId è il valore dell'id della pasta
  const navigate = useNavigate()
  console.log('OGGETTO PARAMS', params)
  // c'è una correlazione diretta tra i nomi delle proprietà dell'oggetto "params"
  // e i nomi dei parametri inseriti nella rotta dinamica (dopo i :)

  // predispongo lo stato per salvare la pasta che eventualmente troverò
  const [pasta, setPasta] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // ora dobbiamo recuperare la pasta corretta dal JSON grazie all'id
  useEffect(() => {
    // all'avvio del componente... cerchiamo la pasta giusta
    // params.pastaId

    const pastaObject = pastasciutte.find(
      (pasta) => pasta.id.toString() === params.pastaId
    )
    // il .toString() serve a trasformare (momentaneamente) l'id di ogni pasta
    // in una stringa in modo da compararlo alla stringa del parametro da URL

    console.log('PASTA TROVATA', pastaObject)
    if (!pastaObject) {
      navigate('/not-found')
      // gestiamo i casi limite
    } else {
      setPasta(pastaObject) // salviamo la pasta trovata nello state

      setTimeout(() => {
        setIsLoading(false)
        // :)
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8}>
          {isLoading ? (
            <div className="text-center">
              <Spinner animation="border" variant="warning" />
            </div>
          ) : (
            <Card>
              <Card.Img variant="top" src={pasta.image} />
              <Card.Body>
                <Card.Title>{pasta.name}</Card.Title>
                <Card.Text>
                  {pasta.description}
                  <div className="text-center my-2 p-3 fs-3">
                    <Badge bg="success">{pasta.price}€</Badge>
                  </div>
                </Card.Text>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate('/')
                    }}
                  >
                    Torna in Homepage
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      {!isLoading && (
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={8}>
            <PastaReviews activePasta={pasta} />
          </Col>
        </Row>
      )}
      {/* todo: inserire anche i commenti della pasta */}
    </Container>
  )
}

export default PastaDetails
