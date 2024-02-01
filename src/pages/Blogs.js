import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import batman from './batman.webp'; 
import plane from './plane.jpg';
import shoe from './shoees.jpg'
function Blogs() {
    return (
<>
     <Card style={{ width: '18rem' }}>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>The Batman Quiz</ListGroup.Item>
        <ListGroup.Item>Flight Management System</ListGroup.Item>
        <ListGroup.Item>Shoe Hub</ListGroup.Item>
      </ListGroup>
    </Card>

    <CardGroup>
      <Card>
        <Card.Img variant="top" className="batman-logo" src= {batman} />
        <Card.Body>
          <Card.Title>The Batman Quiz</Card.Title>
          <Card.Text>
            This is a Quiz app inspired by the movie The Batman released in 2022
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>


      <Card>
        <Card.Img variant="top" className="plane-logo" src= {plane} />
        <Card.Body>
          <Card.Title>Flight Management System</Card.Title>
          <Card.Text>
            In this application we manage a Flight Management system where clients can book , cancel or schedule flights.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>


      <Card>
        <Card.Img variant="top" className="shoe-logo" src= {shoe} />
        <Card.Body>
          <Card.Title>Shoe Hub</Card.Title>
          <Card.Text>
            In this application customer can buy sneakers and admin can add new stocks in. We have carts where customer can add there products
            and order them all together.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
    
    </CardGroup>
    </>
    )
    
  };
  
  export default Blogs;