import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
    </>
    )
    
  };
  
  export default Blogs;