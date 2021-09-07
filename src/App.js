
import './App.css';
import { FullName } from './components/profil/FullName';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Photos } from './components/profil/Photos';
import { Adress } from './components/profil/Adress';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
 <Container fluid>
  <Row  style={{
        backgroundColor: '#ccccff',
      }}
  >
    <Col><FullName/></Col>
    </Row>
    <Row style={{
        backgroundColor: '#D0D0D0',
      }}>
    <Col><Adress/></Col>
    </Row>
    <Row style={{
        backgroundColor: '#FFB6C1',
      }}>
    <Col><Photos/></Col>
    </Row>
  
</Container>
      
    </div>
  );
}

export default App;
