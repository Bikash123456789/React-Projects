import styled from "styled-components"

const Loading = () =>{
    return <Wrapper>
        <h2>Loading...</h2>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Loading;

