import React from 'react';
import './Main.scss';
import Rating from '../../assets/images/rating.png'
import Stepper from '../../assets/images/stepper.png'
import {
    Button
} from 'react-bootstrap';
import {
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

const Main = () => {
  return (
    <div className='Main-container'>
        <div className='Main-photo'>
            <p className='Main-p'>Photo</p>
        </div>
        <section className='Main-container-info'>
            <p>
                Pantalones para Dama
            </p>
            <p>
                “The Sideswept Dhoti”
            </p>
            <img 
                src={Rating} 
                alt='rating'
                height='20'
                width='150'
            />
            <p className='Main-container-text'>
                $139.99
            </p>
        </section>
        <section className='Main-container-buttons'>
            <div>
                <div>
                    <span>TAMAÑO</span>{' '}
                    <Button variant='light' size='lg' disabled>
                        S
                    </Button>{' '}
                    <Button variant='light' size='lg' active>
                        M
                    </Button>{' '}
                    <Button variant='dark' size='lg' active>
                        L
                    </Button>{' '}
                    <Button variant='light' size='lg' disabled>
                        XL
                    </Button>{' '}
                    <Button variant='light' size='lg' disabled>
                        XXL
                    </Button>{' '}
                </div>
                <div>
                    <span>KIT</span>{' '}
                    <Button variant='dark' size='lg' active>
                        HOME
                    </Button>{' '}
                    <Button variant='light' size='lg' active>
                        AWAY
                    </Button>{' '}
                    <Button variant='light' size='lg' active>
                        THIRD
                    </Button>{' '}
                </div>
                <div>
                    <span>CANTIDAD</span>{' '}
                    <img src={Stepper} alt='Cantidad' />
                </div>
                <div>
                    <Button variant='dark' size='lg' className='Main-container-carShop'>
                        AÑADIR AL CARRITO
                    </Button>
                </div>
            </div>
        </section>
        <section className='Main-container-txts'>
            <p className='Main-container-title'>Descripción</p>
            <p className='Main-container-description'>In eu blandit metus. Phasellus vitae consequat augue. Cras auctor lacus a purus convallis...</p>
            <p className='Main-container-read'>LEER MÁS</p>
        </section>
        <section className='Main-container-images'>
            <p className='Main-container-like'>También te podría gustar</p>
            <CardGroup>
                <Card>
                    <CardImg
                        alt='Card image cap'
                        src='https://picsum.photos/318/180'
                        top
                        width='100%'
                    />
                    <CardBody>
                        <CardTitle tag='h5'>
                            Producto 1
                        </CardTitle>
                        <CardText>
                            $130
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt='Card image cap'
                        src='https://picsum.photos/318/180'
                        top
                        width='100%'
                    />
                    <CardBody>
                        <CardTitle tag='h5'>
                            Producto 2
                        </CardTitle>
                        <CardText>
                            $130
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt='Card image cap'
                        src='https://picsum.photos/318/180'
                        top
                        width='100%'
                    />
                    <CardBody>
                        <CardTitle tag='h5'>
                            Producto 3
                        </CardTitle>
                        <CardText>
                            $130
                        </CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </section>
    </div>
  );
};

export default Main;