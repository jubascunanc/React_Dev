import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Curso Programación Full Stack</Card.Title>
        <Card.Text>
          Curso completo introductorio para desarrollo web Front End 
          y Back End profesional, aprende de profesores capacitados en 
          las tecnologias de html, css, javascript y node js y sql.
        </Card.Text>
        <Button variant="primary">Comprar aquí</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
