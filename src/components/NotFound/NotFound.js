import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Error from '../../assets/images/error.svg';

const NotFound = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col md={{ span: 6, offset: 3}} className='text-center'>
                    <img style={{ width: '100%' }} src={Error} alt='error'/>
                    <h2>¿Te has perdido?</h2>
                    <a href='/' style={{ color: 'red', fontSize: '1.5rem', marginTop: '20px', marginLeft: '0px' }}>
                        Vuelve al Inicio
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;