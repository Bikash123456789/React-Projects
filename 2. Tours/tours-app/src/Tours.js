import React from 'react';
import styled from 'styled-components';
import Tour from './Tour';

const Tours = ({tours,deleteItem}) => {

console.log(tours)
  return (
    <Wrapper>
        {tours.map((tour)=>{
            
            return <Tour key={tour.id} tour={tour} deleteItem={deleteItem}></Tour>
        })}

    </Wrapper>
  )
}

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: start;
 min-width: 90%;
 padding: 2rem;
 gap:2rem;
 flex-wrap: wrap;
`

export default Tours
