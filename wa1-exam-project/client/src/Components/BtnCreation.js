import { Button } from 'react-bootstrap';

function BtnCreation(props){
    if(props.all){
        return (
            <Button id='noStyleBtn' onClick={() => props.handleShow(true)}>Create</Button>
        );
    } else {
        return(<></>);
    }
}

export { BtnCreation };