import { Link } from 'react-router-dom'; 

function ElementFiltered(props){
    let name = [];
    name[0] = props.name[0].toUpperCase();
    for(let i=1; i<props.name.length; i++)
      name[i] = props.name[i];

    const handleClick = () => {
      props.setFlag(true);
      props.setName(props.name);    
    }

      if(props.selected === props.name)
        return(
          <Link id='linkStyle' to={{pathname: '/'+props.name}} onClick = { handleClick } >{name}</Link>
        ); 
         
      else{
        return(
          <Link id='linkStyle' to={{pathname: '/'+props.name}} onClick = { handleClick } >{name}</Link> 
          );
      }
}

export { ElementFiltered };