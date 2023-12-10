// Site referência:
// https://www.lamborghini.com/en-en
// https://www.auto-doc.pt/pecas-automoveis/lamborghini/gallardo
// https://www.jocar.com.br/lamborghini/
// https://www.autopecasonline24.pt/lamborghini
// https://assetstore.unity.com/ -> Ver o produto

import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Content } from './Components/Content/Content';
import { Footer } from './Components/Footer/Footer';

// Header
// const logo = 'https://pngimg.com/uploads/lotus/lotus_PNG57.png';
const logo = 'https://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png';

function App() {
  return (
    <div id="mainContent">
      <Header title="Lamborghini Factory" logoURL={logo} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

// FAZENDO MENU EXPANDI PARA O LADO, AO CLICA NO PRODUTO
// MOSTRA INFORMAÇÕES DO VENDO E COMENTÁRIOS SOBRE O PRODUTO.
