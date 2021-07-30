import { Card } from 'react-bootstrap';
import { Link }  from 'react-router-dom';
import { iconTrash, iconVisualize, iconCopy } from './icons.js';

function MemeCard(props){
    return (
        <Card id="cardContainer" >
            <Card.Body id='cardBody'>
            <Card.Img variant="top" src={props.memeImg} />
                <Card.Title id='cardTitle'>{props.memeTitle}</Card.Title>
                <Card.Text id='cardTitle' className="text-muted">Created by {props.memeCreator}</Card.Text><br /><br /><br />
                <Link to={{pathname:'/view' , state: {meme: props.meme} }}>
                    <span onClick={() => props.handleShow(true)}>{iconVisualize}</span>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.loggedIn ? <>
                    <Link to={{pathname:'/copy' , state: {meme: props.meme} }}>
                    <span onClick={() => props.setModalShow(true)}>{iconCopy}</span></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
                    <span onClick={() => props.deleteMeme(props.memeId)}>{iconTrash}</span>
                </> : ''}                
            </Card.Body>
        </Card>
    );
}

export { MemeCard };