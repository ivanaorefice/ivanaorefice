import { Button, Form, Modal, Image } from 'react-bootstrap';
import { useLocation, Redirect } from 'react-router-dom';
import { useState } from 'react';

function ModalWindowView(props){
    const location = useLocation();

    const [submitted, setSubmitted] = useState(false);
    const font = (location.state ? location.state.meme.font : 'fontA');
    const color =  (location.state ? location.state.meme.color : 'colorA');
    
    const imgBig = location.state.meme.img;
    const img = imgBig.substring(1);

    const handleClose = () => {
        setSubmitted(true);
        props.onHide();
    }

    if(img === "./asset/m1_1.jpeg"){
        return (
            <>
                {submitted && <Redirect to={'/'}></Redirect>}
                <Modal show={props.show} onHide={handleClose} id='modal'>
                    <Modal.Header closeButton><b>View Meme</b></Modal.Header>
                    <Modal.Body>
                    <Form>                        
                        <Form.Group controlid='MemeImg'>
                            <div id='imgCont' className='d-flex justify-content'>                                
                                <Image src={img} thumbnail /> 
                                <div className={`memeImg1 ${font} ${color}`}>{location.state.meme.sentence1}</div>
                            </div>                            
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Created by: </Form.Text>
                            <Form.Label>{location.state.meme.name}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Title:</Form.Text>
                            <Form.Label><b>{location.state.meme.title}</b></Form.Label>
                        </Form.Group>
                        {props.all ? <>                            
                        <Form.Group>
                            <Form.Text className="text-muted">First Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence1}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Visibility: </Form.Text>
                            <Form.Label>{location.state.meme.visibility}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Used Font: </Form.Text>
                            <Form.Label>{location.state.meme.font === 'fontA' ? <p>Times New Roman</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontB' ? <p>Verdana</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontC' ? <p>Lucida Sans</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontD' ? <p>Arial</p> : ''}</Form.Label>
                        </Form.Group>
                        </> : ''}                    
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    } else if(img === "./asset/m2_1.jpg"){
        return (
            <>
                {submitted && <Redirect to={'/'}></Redirect>}
                <Modal show={props.show} onHide={handleClose} id='modal'>
                    <Modal.Header closeButton><b>View Meme</b></Modal.Header>
                    <Modal.Body>
                    <Form>                        
                        <Form.Group controlid='MemeImg'>
                            <div id='imgCont' className='d-flex justify-content'>
                                <div className={`memeImg2 ${font} ${color}`}>{location.state.meme.sentence1}</div>
                                <Image src={img} thumbnail /> 
                            </div>                            
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Created by: </Form.Text>
                            <Form.Label>{location.state.meme.name}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Title:</Form.Text>
                            <Form.Label><b>{location.state.meme.title}</b></Form.Label>
                        </Form.Group>
                        {props.all ? <>   
                        <Form.Group>
                            <Form.Text className="text-muted">First Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence1}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Visibility: </Form.Text>
                            <Form.Label>{location.state.meme.visibility}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Used Font: </Form.Text>
                            <Form.Label>{location.state.meme.font === 'fontA' ? <p>Times New Roman</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontB' ? <p>Verdana</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontC' ? <p>Lucida Sans</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontD' ? <p>Arial</p> : ''}</Form.Label>
                        </Form.Group>
                        </> : ''}        
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    } else if(img === "./asset/m3_2.jpg"){ 
        return (
            <>
                {submitted && <Redirect to={'/'}></Redirect>}
                <Modal show={props.show} onHide={handleClose} id='modal'>
                    <Modal.Header closeButton><b>View Meme</b></Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlid='MemeImg'>
                        <div id='imgCont' className='d-flex justify-content'>
                            <div className={`memeImg3Sent1 ${font} ${color}`}>{location.state.meme.sentence1}</div>
                            <div className={`memeImg3Sent2 ${font} ${color}`}>{location.state.meme.sentence2}</div>
                            <Image src={img} thumbnail /> 
                        </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Created by: </Form.Text>
                            <Form.Label>{location.state.meme.name}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Title:</Form.Text>
                            <Form.Label><b>{location.state.meme.title}</b></Form.Label>
                        </Form.Group>
                        {props.all ? <> 
                        <Form.Group>
                            <Form.Text className="text-muted">First Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence1}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Second Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence2}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Visibility: </Form.Text>
                            <Form.Label>{location.state.meme.visibility}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Used Font: </Form.Text>
                            <Form.Label>{location.state.meme.font === 'fontA' ? <p>Times New Roman</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontB' ? <p>Verdana</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontC' ? <p>Lucida Sans</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontD' ? <p>Arial</p> : ''}</Form.Label>
                        </Form.Group>
                        </> : ''}
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    } else if(img === "./asset/m4_2.jpg"){ 
        return (
            <>
                {submitted && <Redirect to={'/'}></Redirect>}
                <Modal show={props.show} onHide={handleClose} id='modal'>
                    <Modal.Header closeButton><b>View Meme</b></Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlid='MemeImg'>
                        <div id='imgCont' className='d-flex justify-content-between'>
                            <div className={`memeImg4Sent1 ${font} ${color}`}>{location.state.meme.sentence1}</div>
                            <div className={`memeImg4Sent2 ${font} ${color}`}>{location.state.meme.sentence2}</div>
                            <Image src={img} thumbnail /> 
                        </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Created by: </Form.Text>
                            <Form.Label>{location.state.meme.name}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Title:</Form.Text>
                            <Form.Label><b>{location.state.meme.title}</b></Form.Label>
                        </Form.Group>
                        {props.all ? <> 
                        <Form.Group>
                            <Form.Text className="text-muted">First Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence1}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Second Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence2}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Visibility: </Form.Text>
                            <Form.Label>{location.state.meme.visibility}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Used Font: </Form.Text>
                            <Form.Label>{location.state.meme.font === 'fontA' ? <p>Times New Roman</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontB' ? <p>Verdana</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontC' ? <p>Lucida Sans</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontD' ? <p>Arial</p> : ''}</Form.Label>
                        </Form.Group>
                        </> : '' }
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    } else if(img === "./asset/m5_3.jpg"){ 
        return (
            <>
                {submitted && <Redirect to={'/'}></Redirect>}
                <Modal show={props.show} onHide={handleClose} id='modal'>
                    <Modal.Header closeButton><b>View Meme</b></Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlid='MemeImg'>
                        <div id='imgCont' className='d-flex justify-content-between'>
                            <div className={`memeImg5Sent1 ${font} ${color}`}>{location.state.meme.sentence1}</div>
                            <div className={`memeImg5Sent2 ${font} ${color}`}>{location.state.meme.sentence2}</div>
                            <div className={`memeImg5Sent3 ${font} ${color}`}>{location.state.meme.sentence3}</div>
                            <Image src={img} thumbnail /> 
                        </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Created by: </Form.Text>
                            <Form.Label>{location.state.meme.name}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Title:</Form.Text>
                            <Form.Label><b>{location.state.meme.title}</b></Form.Label>
                        </Form.Group>
                        {props.all ? <> 
                        <Form.Group>
                            <Form.Text className="text-muted">First Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence1}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Second Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence2}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Third Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence3}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Visibility: </Form.Text>
                            <Form.Label>{location.state.meme.visibility}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Used Font: </Form.Text>
                            <Form.Label>{location.state.meme.font === 'fontA' ? <p>Times New Roman</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontB' ? <p>Verdana</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontC' ? <p>Lucida Sans</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontD' ? <p>Arial</p> : ''}</Form.Label>
                        </Form.Group>
                        </> : ''}
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    } else if(img === "./asset/m6_3.jpg"){ 
        return (
            <>
                {submitted && <Redirect to={'/'}></Redirect>}
                <Modal show={props.show} onHide={handleClose} id='modal'>
                    <Modal.Header closeButton><b>View Meme</b></Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlid='MemeImg'>
                        <div id='imgCont' className='d-flex justify-content-between'>
                            <div className={`memeImg6Sent1 ${font} ${color}`}>{location.state.meme.sentence1}</div>
                            <div className={`memeImg6Sent2 ${font} ${color}`}>{location.state.meme.sentence2}</div>
                            <div className={`memeImg6Sent3 ${font} ${color}`}>{location.state.meme.sentence3}</div>
                            <Image src={img} thumbnail /> 
                        </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Created by: </Form.Text>
                            <Form.Label>{location.state.meme.name}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Title:</Form.Text>
                            <Form.Label><b>{location.state.meme.title}</b></Form.Label>
                        </Form.Group>
                        {props.all ? <> 
                        <Form.Group>
                            <Form.Text className="text-muted">First Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence1}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Second Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence2}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Third Sentence: </Form.Text>
                            <Form.Label>{location.state.meme.sentence3}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Visibility: </Form.Text>
                            <Form.Label>{location.state.meme.visibility}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="text-muted">Used Font: </Form.Text>
                            <Form.Label>{location.state.meme.font === 'fontA' ? <p>Times New Roman</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontB' ? <p>Verdana</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontC' ? <p>Lucida Sans</p> : ''}</Form.Label>
                            <Form.Label>{location.state.meme.font === 'fontD' ? <p>Arial</p> : ''}</Form.Label>
                        </Form.Group>
                        </> : ''}
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }   
}

export { ModalWindowView };