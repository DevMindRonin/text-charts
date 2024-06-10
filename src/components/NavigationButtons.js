
import React from 'react';
import Button from 'react-bootstrap/Button';

const NavigationButtons = ({ setShowRaw }) => (
  <div className="d-flex flex-column align-items-center mb-3">
    <Button onClick={() => setShowRaw(false)} className="mb-2 w-100">
      Dashboard
    </Button>
    <Button onClick={() => setShowRaw(true)} className="w-100">
      Raw Data
    </Button>
  </div>
);

export default NavigationButtons;
