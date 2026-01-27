//  Aqui criamos uma lista de forma dinâmica que é um array para deixar mais fácil ao invés de criar 8 objetos manualmente 

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
  price: 299,
  image: `/produtos/produto-0${i + 1}.jpeg`
}));

export default products;