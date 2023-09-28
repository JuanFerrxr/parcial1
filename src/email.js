import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Password from './password';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
from 'mdb-react-ui-kit';
  
  function Email() {
    const navigate = useNavigate();
    const navigateToPassword = () => {
      // 👇️ navigate to /contacts
      navigate('/password.js');
    };

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        favClass: "1"
      });
    
      const [validationStates, setValidationStates] = useState({
        emailState: true,
        passwordState: true,
      });
    
      const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      };
    
      const validatePassword = (password) => {
        return password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password);
      };
    
      const handleEmailChange = (e) => {
        const email = e.target.value;
        setFormValues({ ...formValues, email });
        setValidationStates({ ...validationStates, emailState: true });
      };
    
      const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormValues({ ...formValues, password });
        setValidationStates({ ...validationStates, passwordState: validatePassword(password) });
      };
    
      const handleSelectChange = (e) => {
        setFormValues({ ...formValues, favClass: e.target.value });
      };
    
      const clickSubmit = () => {
        const isValidEmail = validateEmail(formValues.email);
    
        if (!isValidEmail) {
            setValidationStates({ ...validationStates, emailState: false });
            return;
        }
        navigateToPassword();

      };
    return (
      <MDBContainer fluid>
        <Form.Group className="mb-6" controlId="formBasicEmail">
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
  
                <h2 className="fw-bold mb-2 text-center">Acceder</h2>
                <p className="text-black-50 text-center mb-3">Usa tu cuenta uniandes</p>
  
                <Form.Control 
                    wrapperClass='mb-4 w-100' 
                    placeholder='Correo Uniandes' 
                    id='formControlLg'  
                    size="lg"
                    type="email"
                    onChange={handleEmailChange}
                    value={formValues.email}
                    />    
                <Button className="mt-3" size='lg' variant="primary" onClick={clickSubmit}>
                  Siguiente
                </Button>
                {!validationStates.emailState && (
                    <Form.Text className="text-danger">
                        Revise el formato de su correo.
                    </Form.Text>
                )}

                
    
              </MDBCardBody>
            </MDBCard>

          <Routes>
            <Route path="/password.js" element={<Password />} />
          </Routes>
  
          </MDBCol>
        </MDBRow>
        </Form.Group>
  
      </MDBContainer>
    );
  }
  
  export default Email;