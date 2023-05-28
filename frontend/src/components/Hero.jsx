import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>
            This is a biolerplate for MERN authentication that sotres a JWT in
            an HTTP-Only cookie. it also uses Redux Toolkit and the react
            Bootstrap library
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Sign In
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
