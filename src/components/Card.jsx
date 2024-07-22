import React,{useState} from 'react';
import './styles.css';

export default function Card(props) {
  const [active, setActive] = useState(false);

  return (<button className= {`card ${active ? 'active': 'mini'}`} onClick={ () => {setActive(!active) 
  document.querySelectorAll(".card").forEach(i => i.classList[active === false? i.classList.add('blank'): setTimeout(i.classList.remove('blank'), 2000)]) }}>
    {props.name}
  </button>
  )}