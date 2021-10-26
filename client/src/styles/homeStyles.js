import styled, { keyframes } from 'styled-components';


const spinny = keyframes`
  from {
    transform: rotate(0deg)
    width: 100px
    border: 1px green solid;
  }

  to {
    transform: rotate(360deg)
    width: 
  }
`

export const HomeImg = styled.img`
  width: 200px;
  animation: ${spinny} 4s linear infinte
`


 