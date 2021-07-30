import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import { useState } from 'react';
import { FormFields } from './FormFields.js';
import { Redirect } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CreateNewMeme(props){

    const [img, setImg] = useState('');

    const [fieldsVisible, setFieldsVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [font, setFont] = useState('');
    const [color, setColor] = useState('');

    const [sentence1, setSentence1] = useState('');
    const [sentence2, setSentence2] = useState('');
    const [sentence3, setSentence3] = useState('');

    const handleClick = () => {
        setFieldsVisible(true);
    }

    const handleBack = () => {
        setSubmitted(true);
    }

    return (
        <>
            {submitted && <Redirect to={'/'}></Redirect>}
            <h1 id="titleMain"> Create a new Meme </h1>
            <Form>
            <Form.Group controlId="chooseAnImg">  
            <Button variant="secondary" id='buttonForm' onClick={ handleBack }>
                Back to Homepage
            </Button>
            <div id='carouselContainer'>
                <Row>
                    <Col lg={6} sm={6}>
                        <Carousel id='carousel' showThumbs={false}>
                            <div id='carouselDiv'>   
                                <div id='imgCont' className='d-flex justify-content'>                                
                                    <Image src="./asset/m1_1.jpeg" thumbnail /> 
                                    <div className={`memeImg1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                                </div>
                                <div className="legend">Select: <Form.Check type = 'radio' value = {img} onChange = {ev => setImg("../asset/m1_1.jpeg")} 
                                    onClick = { handleClick } name="group1" id={`img1`} label={`Image 1`} /></div>
                            </div>
                            <div id='carouselDiv' className='d-flex justify-content'>
                                <div id='imgCont' className='d-flex justify-content'>                                
                                    <Image src="./asset/m2_1.jpg" thumbnail /> 
                                    <div className={`memeImg2 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                                </div>
                                <div className="legend">Select: <Form.Check type = 'radio' value = {img} onChange = {ev => setImg("../asset/m2_1.jpg")} 
                                    onClick = { handleClick } name="group1" id={`img2`} label={`Image 2`} /></div>
                            </div>
                            <div id='carouselDiv'>
                                <div id='imgCont' className='d-flex justify-content'>                                
                                    <Image src="./asset/m3_2.jpg" thumbnail /> 
                                    <div className={`memeImg3Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                                    <div className={`memeImg3Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                                </div>
                                <div className="legend">Select: <Form.Check type = 'radio' value = {img} onChange={ev => setImg("../asset/m3_2.jpg")}
                                    onClick = { handleClick } name="group1" id={`img3`} label={`Image 3`} /></div>
                            </div>
                            <div id='carouselDiv'>
                                <div id='imgCont' className='d-flex justify-content'>                                
                                    <Image src="./asset/m4_2.jpg" thumbnail /> 
                                    <div className={`memeImg4Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                                    <div className={`memeImg4Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                                </div>
                                <div className="legend">Select: <Form.Check type = 'radio' value = {img} onChange={ev => setImg("../asset/m4_2.jpg")}
                                    onClick = { handleClick } name="group1" id={`img4`} label={`Image 4`} /></div>
                            </div>
                            <div id='carouselDiv'>
                                <div id='imgCont' className='d-flex justify-content'>                                
                                    <Image src="./asset/m5_3.jpg" thumbnail /> 
                                    <div className={`memeImg5Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                                    <div className={`memeImg5Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                                    <div className={`memeImg5Sent3 ${font} ${color}`}> {sentence3 ? sentence3: ''} </div>
                                </div>
                                <div className="legend">Select: <Form.Check type = 'radio' value = {img} onChange = {ev => setImg("../asset/m5_3.jpg")}
                                    onClick = { handleClick } name="group1" id={`img5`} label={`Image 5`} /></div>
                            </div>
                            <div id='carouselDiv'>
                                <div id='imgCont' className='d-flex justify-content'>                                
                                    <Image src="./asset/m6_3.jpg" thumbnail /> 
                                    <div className={`memeImg6Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                                    <div className={`memeImg6Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                                    <div className={`memeImg6Sent3 ${font} ${color}`}> {sentence3 ? sentence3: ''} </div>
                                </div>
                                <div className="legend">Select: <Form.Check type = 'radio' value = {img} onChange = {ev => setImg("../asset/m6_3.jpg")}
                                    onClick = { handleClick } name="group1" id={`img6`} label={`Image 6`} /></div>
                            </div>
                        </Carousel>  
                    </Col>
                    <Col lg={6} sm={6}>
                    {fieldsVisible ? <FormFields show = {props.modalShow} prevPath = {props.path} 
                    userId = {props.userId} img = {img} addMeme = {props.addMeme} sentence1 = {sentence1} 
                    sentence2 = {sentence2} sentence3 = {sentence3} font = {font} color = {color}
                    setSentence1 = {(value) => setSentence1(value)}
                    setSentence2 = {(value) => setSentence2(value)}
                    setSentence3 = {(value) => setSentence3(value)} 
                    setFont = {(value) => setFont(value)} setColor = {(value) => setColor(value)}
                    /> : null}
                    </Col>
                </Row>
            </div>
            </Form.Group>
            </Form>               
        </>
    );
}

export { CreateNewMeme };