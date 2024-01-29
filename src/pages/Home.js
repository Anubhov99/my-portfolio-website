import Card from 'react-bootstrap/Card';

function Home(){
    return (
        <>
         <h1>Home</h1>


         <Card>
      <Card.Header>This is Anubhov Menon</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            I am a Fullstack developer. I have experience in Java , SpringBoot , ReactJs , etc{' '}
          </p>
          <footer className="blockquote-footer">
            Senior Software Engineer at <cite title="Source Title">Capgemini India</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </>
   
    )
  };
  
  export default Home;