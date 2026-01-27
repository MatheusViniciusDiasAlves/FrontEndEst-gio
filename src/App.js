// Aqui podemos utilizar como um mapa da loja definindo quais páginas devem aparecer dependendo do endereço que eu digitar 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produto from "./paginas/Produto";
import FinalizacaoCompra from "./paginas/FinalizacaoCompra";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produto />} />
        <Route path="/finalizacao" element={<FinalizacaoCompra />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;