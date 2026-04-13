import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #8e0e00; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #1f1c18,
    #8e0e00
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #1f1c18,
    #8e0e00
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  min-height: 60vh;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0px 0px 1px 1px #ffffff;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  @media screen and (max-width: 575px) {
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin-bottom: 50px;
`
export const Logo = styled.img`
  width: 25%;
`
export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 10px;
`

export const Label = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#0f0f0f')};
`
export const CheckBoxLabelContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`

export const InputBox = styled.input`
  border-radius: 5px;
  height: 45px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #94a3b8;
`
export const CheckBox = styled.input`
  margin-top: 5px;
`
export const LoginButton = styled.button`
  margin-top: 50px;
  border: 0px;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 10px;
  color: #ffffff;
  height: 40px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: red;
`
