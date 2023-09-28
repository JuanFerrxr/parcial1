import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Routes, Route, useNavigate} from 'react-router-dom';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
}
from 'mdb-react-ui-kit';
  
  function Password() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        favClass: "1"
      });
    
      const [validationStates, setValidationStates] = useState({
        emailState: true,
        passwordState: true,
      });
    
    const navigateToPost = () => {
      // 👇️ navigate to /contacts
      navigate('/post.js');
    };

    const validatePassword = (password) => {
        return password.length >= 9 && /[a-zA-Z]/.test(password) && /\d/.test(password);
      };

    
    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormValues({ ...formValues, password });
        setValidationStates({ ...validationStates, passwordState: validatePassword(password) });
    };

    const clickSubmit = () => {
        const isValidPassword = validatePassword(formValues.password);
    
        if (!isValidPassword) {
          setValidationStates({ ...validationStates, passwordState: false });
          return;
        }
        navigateToPost();
      };

    return (
      <MDBContainer fluid>
        <Form.Group className="mb-6" controlId="formBasicEmail">
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
  
                <h2 className="fw-bold mb-2 text-center">Ingrese su contraseña</h2>  
                <Form.Control 
                    wrapperClass='mb-4 w-100' 
                    placeholder='Ingresa tu contraseña' 
                    size="lg"
                    type="password"
                    onChange={handlePasswordChange}
                    value={formValues.password}
                    />    
                <Button className="mt-3" size='lg' variant="primary" onClick={clickSubmit}>
                  Siguiente
                </Button>
                {!validationStates.passwordState && (
                    <Form.Text className="text-danger">
                        Su contraseña debe tener al menos 6 caracteres.
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
  
  export default Password;