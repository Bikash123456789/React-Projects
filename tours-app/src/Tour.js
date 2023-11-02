import React, { useState } from 'react'
import styled from 'styled-components'

const Tour = ({tour,deleteItem}) => {

    const {id,name,info,image,price} = tour;
    const [readMore, setReadMore] = useState(true);
    
  return (
    <Wrapper>
      <img src={image} alt="" srcSet="" />
      <Info>
        <h3>{name}</h3>
        <p>{readMore?info.substring(200)+"...":info}
        <ReadButton onClick={()=>{
            setReadMore(!readMore)
        }}>
        {readMore?<span>Read More</span>:<span>Read Less</span>}
      </ReadButton></p>
        <Price>
            <h3>${price}</h3>
        </Price>
        <NotInterested className='btn' onClick={()=>{
           deleteItem(id)
        }}>
            <span>Not Interested</span>
        </NotInterested>
      </Info>
      
    </Wrapper>
  )
}

const NotInterested = styled.button`
 padding: 4px;
 width:70%;
 background-color: transparent;
 border : 1px solid #10B981;
 border-radius: 4px;
 cursor: pointer;
 font-size: 1rem;
`


const ReadButton = styled.button`
 border: none;
 background: transparent;
 color: #10B981;
 cursor: pointer;
 font-size: 1rem;
 margin-left: 5px;
`

const Price = styled.div`
 background-color:#10B981;
 color: white;
 padding: 10px 20px;
 position: absolute;
 top: 0;
 right: 0;
`

const Info = styled.div`
    width:30rem;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    flex-direction: column;
    gap: 1rem;

`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
box-shadow: 1px 1px 10px 1px #999;
`

export default Tour
