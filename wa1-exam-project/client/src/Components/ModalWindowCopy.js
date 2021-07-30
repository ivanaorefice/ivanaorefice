import { Button, Form, Modal, Image } from 'react-bootstrap';
import { useLocation, Redirect } from 'react-router-dom';
import { useState } from 'react';

function ModalWindowCopy(props){
    const location = useLocation();
    const [submitted, setSubmitted] = useState(false);

    const [id, setId] = useState();
    const [img, setImg] = useState(location.state.meme.img);
    const [title, setTitle] = useState(location.state.meme.title);
    const [sentence1, setSentence1] = useState(location.state.meme.sentence1);
    const [sentence2, setSentence2] = useState(location.state.meme.sentence2);
    const [sentence3, setSentence3] = useState(location.state.meme.sentence3);
    const [font, setFont] = useState(location.state.meme.font);
    const [color, setColor] = useState(location.state.meme.color);
    const [visibility, setVisibility] = useState(location.state.meme.visibility);

    const [errorTitle, setErrorTitle] = useState('');
    const [errorSent1, setErrorSent1] = useState('');

    const handleClose = () => {
        setSubmitted(true);
        props.onHide();
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(title === ''){
            setErrorSent1('');
            setErrorTitle('Please, insert a title');
        } else if(sentence1 === ''){
            setErrorTitle('');
            setErrorSent1('Please, insert at least one sentence');
        } else {
            setErrorTitle('');
            setErrorSent1('');

            const newMeme = {id: id, img: img, title: title, sentence1: sentence1, sentence2: sentence2, sentence3: sentence3, visibility: visibility, font: font, color: color, creator_id: props.userId};
            props.copyMeme(newMeme);
            setSubmitted(true);
            props.onHide();
        }
    };

  if(img === "../asset/m1_1.jpeg" || img === "../asset/m2_1.jpg"){
    return (
      <>
        {submitted && <Redirect to={'/'}></Redirect>}
      <Modal show={props.show} onHide={handleClose} id='modal'>
        <Modal.Header closeButton><b>Copy Meme</b></Modal.Header>
        <Modal.Body>
        <Form >
            <Form.Group controlid='MemeImg'>
              <div id='imgCont' className='d-flex justify-content'>                                
                <Image src={location.state.meme.img} thumbnail />
                {img === "../asset/m1_1.jpeg" ? <div className={`memeImg1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div> : null}
                {img === "../asset/m2_1.jpg" ? <div className={`memeImg2 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div> : null}                
              </div>
            </Form.Group>
            <Form.Group controlid='MemeTitle'>
                <Form.Label>Title of the Meme</Form.Label>
                <Form.Control type='text' value={title} onChange={ev => setTitle(ev.target.value)}/>
                <span style={{ color: 'red' }}>{errorTitle}</span>
            </Form.Group>
            <Form.Group controlid='MemeSent1'>
                <Form.Label>First Sentence</Form.Label>
                <Form.Control type='text' value={sentence1} onChange={ev => setSentence1(ev.target.value)} />
                <span style={{ color: 'red' }}>{errorSent1}</span>
            </Form.Group>
            <Form.Group controlid='fontSelection' id='formFieldStye'>
                  <Form.Label id='formFieldsLabels'>Font Selection</Form.Label>
                  <Form.Control as="select" value={font} onChange={ev => setFont(ev.target.value)} >
                      <option disabled hidden value=''>Choose an option</option>
                      <option value="fontA">Times New Roman</option>
                      <option value="fontB">Verdana</option>
                      <option value="fontC">Lucida Sans</option>
                      <option value="fontD">Arial</option>
                  </Form.Control>
              </Form.Group> 
              <Form.Group controlid='colorSelection' id='formFieldStye'>
              <Form.Label id='formFieldsLabels'>Color Selection</Form.Label>
                  <Form.Control as="select"  value={color} onChange={ev => setColor(ev.target.value)} >
                      <option disabled hidden value=''>Choose an option</option>
                      <option value="colorA">Black</option>
                      <option value="colorB">White</option>
                      <option value="colorC">Beige</option>
                      <option value="colorD">Steelblue</option>
                      <option value="colorE">Green</option>
                      <option value="colorF">Red</option>
                  </Form.Control>
              </Form.Group>
            { ((parseInt(props.userId) === location.state.meme.creator_id) || (visibility === 'public')) ? 
            <Form.Group controlid='Visibility'>
                <Form.Label>Visibility</Form.Label>
                <Form.Control as="select"  value={visibility} onChange={ev => setVisibility(ev.target.value)} >
                    <option value="public">Public</option>
                    <option value="protected">Protected</option>
                </Form.Control>
            </Form.Group> : null }              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  } else if(img === "../asset/m3_2.jpg" || img === "../asset/m4_2.jpg"){
    return (
      <>
      {submitted && <Redirect to={'/'}></Redirect>}
      <Modal show={props.show} onHide={handleClose} id='modal'>
        <Modal.Header closeButton><b>Copy Meme</b></Modal.Header>
        <Modal.Body>
        <Form >
            <Form.Group controlid='MemeImg'>
              <div id='imgCont' className='d-flex justify-content'>                                
                <Image src={location.state.meme.img} thumbnail /> 
                {img === "../asset/m3_2.jpg" ? <>
                <div className={`memeImg3Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                <div className={`memeImg3Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                </> : null}
                {img === "../asset/m4_2.jpg" ? <>
                <div className={`memeImg4Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                <div className={`memeImg4Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                </> : null}
              </div>
            </Form.Group>
            <Form.Group controlid='MemeTitle'>
                <Form.Label>Title of the Meme</Form.Label>
                <Form.Control type='text' value={title} onChange={ev => setTitle(ev.target.value)}/>
                <span style={{ color: 'red' }}>{errorTitle}</span>
            </Form.Group>
            <Form.Group controlid='MemeSent1'>
                <Form.Label>First Sentence</Form.Label>
                <Form.Control type='text' value={sentence1} onChange={ev => setSentence1(ev.target.value)} />
                <span style={{ color: 'red' }}>{errorSent1}</span>
            </Form.Group>
            <Form.Group controlid='MemeSent2'>
                <Form.Label>Second Sentence</Form.Label>
                <Form.Control type='text' value={sentence2} onChange={ev => setSentence2(ev.target.value)} />
            </Form.Group>
            <Form.Group controlid='fontSelection' id='formFieldStye'>
                  <Form.Label id='formFieldsLabels'>Font Selection</Form.Label>
                  <Form.Control as="select" value={font} onChange={ev => setFont(ev.target.value)} >
                      <option disabled hidden value=''>Choose an option</option>
                      <option value="fontA">Times New Roman</option>
                      <option value="fontB">Verdana</option>
                      <option value="fontC">Lucida Sans</option>
                      <option value="fontD">Arial</option>
                  </Form.Control>
              </Form.Group> 
              <Form.Group controlid='colorSelection' id='formFieldStye'>
              <Form.Label id='formFieldsLabels'>Color Selection</Form.Label>
                  <Form.Control as="select"  value={color} onChange={ev => setColor(ev.target.value)} >
                      <option disabled hidden value=''>Choose an option</option>
                      <option value="colorA">Black</option>
                      <option value="colorB">White</option>
                      <option value="colorC">Beige</option>
                      <option value="colorD">Steelblue</option>
                      <option value="colorE">Green</option>
                      <option value="colorF">Red</option>
                  </Form.Control>
              </Form.Group> 
              { ((parseInt(props.userId) === location.state.meme.creator_id) || (location.state.meme.visibility === 'public')) ? <Form.Group controlid='Visibility'>
                <Form.Label>Visibility</Form.Label>
                <Form.Control as="select"  value={visibility} onChange={ev => setVisibility(ev.target.value)} >
                    <option value="public">Public</option>
                    <option value="protected">Protected</option>
                </Form.Control>
            </Form.Group> : null }   
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  } else if(img === "../asset/m5_3.jpg" || img === "../asset/m6_3.jpg"){
    return (
      <>
        {submitted && <Redirect to={'/'}></Redirect>}
        <Modal show={props.show} onHide={handleClose} id='modal'>
          <Modal.Header closeButton><b>Copy Meme</b></Modal.Header>
          <Modal.Body>
          <Form >
              <Form.Group controlid='MemeImg'>
              <div id='imgCont' className='d-flex justify-content'>                                
                <Image src={location.state.meme.img} thumbnail /> 
                {img === "../asset/m5_3.jpg" ? <>
                <div className={`memeImg5Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                <div className={`memeImg5Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                <div className={`memeImg5Sent3 ${font} ${color}`}> {sentence3 ? sentence3: ''} </div>
                </> : null}
                {img === "../asset/m6_3.jpg" ? <>
                <div className={`memeImg6Sent1 ${font} ${color}`}> {sentence1 ? sentence1: ''} </div>
                <div className={`memeImg6Sent2 ${font} ${color}`}> {sentence2 ? sentence2: ''} </div>
                <div className={`memeImg6Sent3 ${font} ${color}`}> {sentence3 ? sentence3: ''} </div>
                </> : null}
              </div>
              </Form.Group>
              <Form.Group controlid='MemeTitle'>
                  <Form.Label>Title of the Meme</Form.Label>
                  <Form.Control type='text' value={title} onChange={ev => setTitle(ev.target.value)}/>
                  <span style={{ color: 'red' }}>{errorTitle}</span>
              </Form.Group>
              <Form.Group controlid='MemeSent1'>
                  <Form.Label>First Sentence</Form.Label>
                  <Form.Control type='text' value={sentence1} onChange={ev => setSentence1(ev.target.value)} />
                  <span style={{ color: 'red' }}>{errorSent1}</span>
              </Form.Group>
              <Form.Group controlid='MemeSent2'>
                  <Form.Label>Second Sentence</Form.Label>
                  <Form.Control type='text' value={sentence2} onChange={ev => setSentence2(ev.target.value)} />
              </Form.Group>
              <Form.Group controlid='MemeSent3'>
                  <Form.Label>Third Sentence</Form.Label>
                  <Form.Control type='text' value={sentence3} onChange={ev => setSentence3(ev.target.value)} />
              </Form.Group>
              <Form.Group controlid='fontSelection' id='formFieldStye'>
                  <Form.Label id='formFieldsLabels'>Font Selection</Form.Label>
                  <Form.Control as="select" value={font} onChange={ev => setFont(ev.target.value)} >
                      <option disabled hidden value=''>Choose an option</option>
                      <option value="fontA">Times New Roman</option>
                      <option value="fontB">Verdana</option>
                      <option value="fontC">Lucida Sans</option>
                      <option value="fontD">Arial</option>
                  </Form.Control>
              </Form.Group> 
              <Form.Group controlid='colorSelection' id='formFieldStye'>
              <Form.Label id='formFieldsLabels'>Color Selection</Form.Label>
                  <Form.Control as="select"  value={color} onChange={ev => setColor(ev.target.value)} >
                      <option disabled hidden value=''>Choose an option</option>
                      <option value="colorA">Black</option>
                      <option value="colorB">White</option>
                      <option value="colorC">Beige</option>
                      <option value="colorD">Steelblue</option>
                      <option value="colorE">Green</option>
                      <option value="colorF">Red</option>
                  </Form.Control>
              </Form.Group>
              { ((parseInt(props.userId) === location.state.meme.creator_id) || (location.state.meme.visibility === 'public')) ? <Form.Group controlid='Visibility'>
                <Form.Label>Visibility</Form.Label>
                <Form.Control as="select"  value={visibility} onChange={ev => setVisibility(ev.target.value)} >
                    <option value="public">Public</option>
                    <option value="protected">Protected</option>
                </Form.Control>
            </Form.Group> : null }   
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export { ModalWindowCopy }