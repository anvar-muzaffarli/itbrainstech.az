import React, { useState } from 'react';
import corporativedata from './corporative.json';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaNetworkWired } from 'react-icons/fa';
import './AccordionCorporative.css'
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
  width:100%;
  transition:.7s ease;
  margin-top:100px;
`;

const Container = styled.div`
  width:100%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background:linear-gradient(124deg, rgba(0,159,253,1) 0%, rgba(42,42,114,1) 70%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  transition:.7s ease;

  p {
    font-size: 1rem;
    margin-right: 1.5rem;
  }

`;

const AccordionCorporative = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
   
    <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
      <AccordionSection>
        <Container>
        <h1 className='text-center p-5'>Korporativ xidmətlər</h1>
          {corporativedata.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.service_name}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.description}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
    </>
  );
  
};

export default AccordionCorporative;