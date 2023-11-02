import data from './data.js'
import styled from 'styled-components';
import { useState } from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

function App() {
  const [index, setIndex] = useState(0);
  const {id, name,job, image, text} = data[index];
  console.log(index)

  const check = (num)=>{
    if(num < 0){
      return data.length - 1
    }
    else if(num === data.length ){
      return 0
    }
    else return num
  }

  const prev = () =>{    
      setIndex((index)=>{
        return check(index-1)
      })
    
  }

  const next = () =>{    
   setIndex((index)=>{
    return check(index+1)
   })
    
  }

  const random = () =>{
    const randomNum = Math.floor(Math.random()*data.length);
    console.log(randomNum);
    if(index === randomNum){
      setIndex(check(index+1));
    }
    else setIndex(randomNum);
   
  }

  return (
    <Wrapper>

          
          <Image src={image} alt="" srcSet="" />
          <h3>{name}</h3>
          <h5>{job}</h5>
          <Text><p>{text}</p></Text>
          <Icons>
            <FaAngleLeft className='icon' onClick={prev}/>
            <FaAngleRight className='icon' onClick={next}/>
          </Icons>
          <button className="btn" onClick={random}>
            Random
          </button>
     
    </Wrapper>
  );
}

// const Circle = styled.div`
// top:10px;
//   width: 10rem;
//   position: absolute;
//   height: 10rem;
//   background-color: blue;
  
// `

const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:1rem;
`

const Text = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
 width:30rem;
`

const Image = styled.img`
 width: 10rem;
 height: 10rem;
 border-radius: 100%;
 object-fit: cover;
 object-position: center;
 border-right: 10px solid #3C3799 ;
 border-bottom: 7px solid #3C3799;
 box-sizing: content-box;
`

const Wrapper = styled.div`
position: relative;
display: flex;
background-color: #FFFFFF;
flex-direction: column;
gap:0.9rem;
padding: 2rem;
min-height: 60%;
min-width: 35%;
justify-content: center;
align-items:center;
box-shadow: 2px 2px 10px 2px #999;
border-radius: 10px;

`


export default App;
