import { ElementFiltered } from './ElementFiltered.js'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

function NavListElements(props){

    const p = useLocation().pathname;
    const activePath = p.slice(1,p.length);
    const [selected, setSelected] = useState((activePath === '' || activePath === 'create' || activePath === 'view') ? 'all' : activePath)
    const [flag, setFlag] = useState(false);
    const [name, setName] = useState('');

    useEffect( () =>{  
      if(flag === true){
        setSelected(name);
        setFlag(false);
      }
    },[flag, name]); 
      
    setTimeout(() => props.updateFilter(selected), 200);

    if(props.all){
      return (
        <div id="navElements" role="tablist" aria-orientation="vertical">        
          {props.names.map(n => 
              <ElementFiltered id='elementListStyle' key={n} name={n} 
              setName={(name) => setName(name)} selected={selected} setFlag={(flag) => setFlag(flag)}/>)
            }
          </div>
      );
    }
    else {
      return(<></>)
    }
    
}

export { NavListElements };