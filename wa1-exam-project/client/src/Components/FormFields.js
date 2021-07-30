import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function FormFields(props){

    const [submitted, setSubmitted] = useState(false);

    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [creator_id, setCreator_id] = useState(props.userId);
    const [visibility, setVisibility] = useState('');

    const [errorTitle, setErrorTitle] = useState('');
    const [errorSent1, setErrorSent1] = useState('');
    const [errorSent2, setErrorSent2] = useState('');
    const [errorSent3, setErrorSent3] = useState('');

    const handleSumbitOneSentence = (event) => {
        event.preventDefault();

        if(title === ''){
            setErrorSent1('');
            setErrorTitle('Please, insert a title');
        } else if(props.sentence1 === ''){
            setErrorTitle('');
            setErrorSent1('Please, insert at least one sentence');
        } else {
            setErrorTitle('');
            setErrorSent1('');

            const meme = {id: id, img: props.img, title: title, sentence1: props.sentence1, sentence2: props.sentence2, sentence3: props.sentence3, visibility: visibility, font: props.font, color: props.color, creator_id: creator_id};
            props.addMeme(meme);
            setSubmitted(true);
        }
    }

    const handleSumbitTwoSentences = (event) => {
        event.preventDefault();
        console.log("submitted");

        if(title === ''){
            setErrorSent1('');
            setErrorSent2('');
            setErrorTitle('Please, insert a title');
        } else if(props.sentence1 === ''){
            setErrorTitle('');
            setErrorSent1('Please, insert at least one sentence');
            setErrorSent2('');
        } else if(props.sentence2 === ''){
            setErrorTitle('');
            setErrorSent2('Please, insert the second sentence');
            setErrorSent1('');
        } else {
            setErrorTitle('');
            setErrorSent1('');
            setErrorSent2('');

            const meme = {id: id, img: props.img, title: title, sentence1: props.sentence1, sentence2: props.sentence2, sentence3: props.sentence3, visibility: visibility, font: props.font, color: props.color, creator_id: creator_id};
            props.addMeme(meme);
            setSubmitted(true);
        }
    }

    const handleSumbitThreeSentences = (event) => {
        event.preventDefault();
        console.log("submitted");

        if(title === ''){
            setErrorSent1('');
            setErrorSent2('');
            setErrorSent3('');
            setErrorTitle('Please, insert a title');
        } else if(props.sentence1 === ''){
            setErrorTitle('');
            setErrorSent1('Please, insert at least one sentence');
            setErrorSent2('');
            setErrorSent3('');
        } else if(props.sentence2 === ''){
            setErrorTitle('');
            setErrorSent2('Please, insert the second sentence');
            setErrorSent1('');
            setErrorSent3('');
        } else if(props.sentence3 === ''){
            setErrorTitle('');
            setErrorSent3('Please, insert the third sentence');
            setErrorSent2('');
            setErrorSent1('');
        } else {
            setErrorTitle('');
            setErrorSent1('');
            setErrorSent2('');
            setErrorSent3('');

            const meme = {id: id, img: props.img, title: title, sentence1: props.sentence1, sentence2: props.sentence2, sentence3: props.sentence3, visibility: visibility, font: props.font, color: props.color, creator_id: creator_id};
            props.addMeme(meme);
            setSubmitted(true);
        }
    }

    if(props.img === "../asset/m1_1.jpeg" || props.img === "../asset/m2_1.jpg"){
        return (
            <>
            {submitted && <Redirect to={'/'}></Redirect>}
                <Form.Group controlid='title'>
                    <Form.Label id='formFieldsLabels'>Title</Form.Label>
                    <Form.Control type='text' value={title} onChange={ev => setTitle(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorTitle}</span>
                </Form.Group>  
                    <Form.Group controlid='sentence1'>
                    <Form.Label id='formFieldsLabels'>First Sentence</Form.Label>
                    <Form.Control type='text' value={props.sentence1} onChange={ev => props.setSentence1(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorSent1}</span>
                </Form.Group> 
                <Form.Group controlid='visibility'>
                    <Form.Label id='formFieldsLabels'>Choose Visibility</Form.Label>
                    <Form.Control as="select"  value={visibility} onChange={ev => setVisibility(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="public">Public</option>
                        <option value="protected">Protected</option>
                    </Form.Control>
                </Form.Group> 
                <Form.Group controlid='fontSelection' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>Font Selection</Form.Label>
                    <Form.Control as="select"  value={props.font} onChange={ev => props.setFont(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="fontA">Times New Roman</option>
                        <option value="fontB">Verdana</option>
                        <option value="fontC">Lucida Sans</option>
                        <option value="fontD">Arial</option>
                    </Form.Control>
                </Form.Group> 
                <Form.Group controlid='colorSelection' id='formFieldStye'>
                <Form.Label id='formFieldsLabels'>Color Selection</Form.Label>
                    <Form.Control as="select" value={props.color} onChange={ev => props.setColor(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="colorA">Black</option>
                        <option value="colorB">White</option>
                        <option value="colorC">Beige</option>
                        <option value="colorD">Steelblue</option>
                        <option value="colorE">Green</option>
                        <option value="colorF">Red</option>
                    </Form.Control>
                </Form.Group>
            <Button variant="success" onClick={handleSumbitOneSentence} id='buttonForm'>
                Confirm
            </Button>
            </>
        );
    } else if(props.img === "../asset/m3_2.jpg" || props.img === "../asset/m4_2.jpg"){
        return (
            <>
            {submitted && <Redirect to={'/'}></Redirect>}
                <Form.Group controlid='title'>
                    <Form.Label id='formFieldsLabels'>Title</Form.Label>
                    <Form.Control type='text' value={title} onChange={ev => setTitle(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorTitle}</span>
                </Form.Group>  
                    <Form.Group controlid='sentence1'>
                    <Form.Label id='formFieldsLabels'>First Sentence</Form.Label>
                    <Form.Control type='text' value={props.sentence1} onChange={ev => props.setSentence1(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorSent1}</span>
                </Form.Group> 
                <Form.Group controlid='sentence2'>
                    <Form.Label id='formFieldsLabels'>Second Sentence</Form.Label>
                    <Form.Control type='text' value={props.sentence2} onChange={ev => props.setSentence2(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorSent2}</span>
                </Form.Group>
                <Form.Group controlid='visibility'>
                    <Form.Label id='formFieldsLabels'>Choose Visibility</Form.Label>
                    <Form.Control as="select"  value={visibility} onChange={ev => setVisibility(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="public">Public</option>
                        <option value="protected">Protected</option>
                    </Form.Control>
                </Form.Group> 
                <Form.Group controlid='fontSelection' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>Font Selection</Form.Label>
                    <Form.Control as="select"  value={props.font} onChange={ev => props.setFont(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="fontA">Times New Roman</option>
                        <option value="fontB">Verdana</option>
                        <option value="fontC">Lucida Sans</option>
                        <option value="fontD">Arial</option>
                    </Form.Control>
                </Form.Group> 
                <Form.Group controlid='colorSelection' id='formFieldStye'>
                <Form.Label id='formFieldsLabels'>Color Selection</Form.Label>
                    <Form.Control as="select" value={props.color} onChange={ev => props.setColor(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="colorA">Black</option>
                        <option value="colorB">White</option>
                        <option value="colorC">Beige</option>
                        <option value="colorD">Steelblue</option>
                        <option value="colorE">Green</option>
                        <option value="colorF">Red</option>
                    </Form.Control>
                </Form.Group>
            <Button variant="success" onClick={handleSumbitTwoSentences} id='buttonForm'>
                Confirm
            </Button>
            </>
        );
    
    } else if(props.img === "../asset/m5_3.jpg" || props.img === "../asset/m6_3.jpg"){
        return (
            <>
            {submitted && <Redirect to={'/'}></Redirect>}
                <Form.Group controlid='title' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>Title</Form.Label>
                    <Form.Control type='text' value={title} onChange={ev => setTitle(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorTitle}</span>
                </Form.Group>  
                    <Form.Group controlid='sentence1' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>First Sentence</Form.Label>
                    <Form.Control type='text' value={props.sentence1} onChange={ev => props.setSentence1(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorSent1}</span>
                </Form.Group> 
                <Form.Group controlid='sentence2' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>Second Sentence</Form.Label>
                    <Form.Control type='text' value={props.sentence2} onChange={ev => props.setSentence2(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorSent2}</span>
                </Form.Group>
                <Form.Group controlid='sentence3' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>Third Sentence</Form.Label>
                    <Form.Control type='text' value={props.sentence3} onChange={ev => props.setSentence3(ev.target.value)}/>
                    <span style={{ color: 'red' }}>{errorSent3}</span>
                </Form.Group>
                <Form.Group controlid='visibility' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>Visibility Status</Form.Label>
                    <Form.Control as="select"  value={visibility} onChange={ev => setVisibility(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="public">Public</option>
                        <option value="protected">Protected</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlid='fontSelection' id='formFieldStye'>
                    <Form.Label id='formFieldsLabels'>Font Selection</Form.Label>
                    <Form.Control as="select" value={props.font} onChange={ev => props.setFont(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="fontA">Times New Roman</option>
                        <option value="fontB">Verdana</option>
                        <option value="fontC">Lucida Sans</option>
                        <option value="fontD">Arial</option>
                    </Form.Control>
                </Form.Group> 
                <Form.Group controlid='colorSelection' id='formFieldStye'>
                <Form.Label id='formFieldsLabels'>Color Selection</Form.Label>
                    <Form.Control as="select"  value={props.color} onChange={ev => props.setColor(ev.target.value)} >
                        <option disabled hidden value=''>Choose an option</option>
                        <option value="colorA">Black</option>
                        <option value="colorB">White</option>
                        <option value="colorC">Beige</option>
                        <option value="colorD">Steelblue</option>
                        <option value="colorE">Green</option>
                        <option value="colorF">Red</option>
                    </Form.Control>
                </Form.Group>
            <Button variant="success" onClick={handleSumbitThreeSentences} id='buttonForm'>
                Confirm
            </Button>
            </>
        );
    }
}

export { FormFields };