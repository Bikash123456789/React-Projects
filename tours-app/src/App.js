import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Loading from './Loading';
import Tours from './Tours';

function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [isLoading, setisLoading] = useState(true);
  const [tours, setTours] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
      setisLoading(true);
      const data = await fetch(url);
      const jsondata = await data.json();
      setTours(jsondata);
      setisLoading(false);
  }

  function deleteItem(id){
    let finalTours = tours.filter((tour)=>{
      return tour.id !== id
    })
    setTours(finalTours)
  }
  
  if(tours.length===0 & isLoading===false){
    return (
      <Wrapper className="App">
      <h1>Our Tours</h1>
      <Underline></Underline>
      <h2>No Tours Left</h2>
    </Wrapper>
    )
  }
  return (
    <Wrapper className="App">
      <h1>Our Tours</h1>
      <Underline></Underline>
      {isLoading && <Loading/>}
      <Tours tours={tours} deleteItem={deleteItem}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 display: flex;
 justify-content: start;
 align-items: center;
 flex-direction: column;
 width: 100%;
 height: 100%;
 padding: 3rem;
 gap:1rem;
`
const Underline = styled.div`
 width:8rem;
 height: 0.3rem;
 background-color:#10B981;
`


export default App;
