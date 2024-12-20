import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown'

const PrintModeSelector = () => {
  const [selectedOption, setSelectedOption] = useState('Select');
  
  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);}
  return (
    <SelectorContainer>
     <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="custom-dropdown-btn" id="dropdown-basic">
          {selectedOption}
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item eventKey="Một mặt">Một mặt</Dropdown.Item>
          <Dropdown.Item eventKey="Hai mặt">Hai mặt</Dropdown.Item> 
          
        </Dropdown.Menu>
      </Dropdown>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #000;
`;

const PrintOption = styled.label`
  display: flex;
  align-items: center;
  gap: 23px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const Label = styled.span``;

export default PrintModeSelector;