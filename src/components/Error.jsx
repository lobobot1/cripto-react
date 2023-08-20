import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: red;
    color: white;
    padding: 15px;
    text-align: center;
    margin-bottom: 2rem;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Noto Sans mono', monospace;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error


