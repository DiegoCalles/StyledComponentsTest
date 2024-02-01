import React, { useState } from 'react';
  import styled, {css, keyframes, ThemeProvider } from 'styled-components';


export default function StyledComponents() {
    let $mainColor = "#db7093",
    $mainAlphaColor80 = "#db709380";
  const fadeIn = keyframes`
     0%{
      opacity:0;
    } 

    100%{
      opacity:1;
    }
     `;
    
    const setTransitionEffect = (time) => `all ${time} ease-in-out`;
    const MyH3 = styled.h3`
      padding: 2rem;
      text-align: center;
      background-color: ${$mainColor};
    //   color: ${(props) => props.color};
    
    //con destructuración de la var color
      color: ${({color}) => color||'#fff'};
      border-radius: 0.25rem;
      transition: ${setTransitionEffect("1s")};

    // pasando mi h3 a button en apariencia
      ${({isButton}) => isButton && css`
        margin:auto;
        max-width:50%;
        border-radius:0.25rem;
        cursor:pointer;

      `}
      animation:${fadeIn} 2s ease-out;

      &:hover {
        background-color: ${$mainAlphaColor80};
      }
    `;
  const light = {
    color: '#222',
    bgColor:'#DDD'
    
  }

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
      paddin:1rem;
      margin:1rem;
      color:${({ theme }) => theme.color};
      background-color:${({theme})=>theme.bgColor};


  `;
  const BoxRounded = styled(Box)`
      border-radius: 1rem;
  `;
    return (
      <>
        <h2>Componentes estilizados</h2>
        <MyH3>Hola, soy un h3 estilizado constyled-components</MyH3>
        <MyH3 color="#61dafb">
          Hola, soy otro h3 estilizado constyled-components
        </MyH3>
        <MyH3 isButton> Hola, soy un h3 estilizado como button</MyH3>
        <ThemeProvider theme={light}>
          <Box>soy una caja light</Box>
        </ThemeProvider>
        <ThemeProvider theme={light}>
          <BoxRounded>soy una caja redondeada light</BoxRounded>
        </ThemeProvider>

        <ThemeProvider theme={dark}>
          <Box>soy una caja dark</Box>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
          <BoxRounded>soy una caja redondeada dark</BoxRounded>
        </ThemeProvider>
      </>
    );
}


