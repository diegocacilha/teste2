async function getProdutos() {
  // Simulando uma chamada de API
  return [
    { id: 1, nome: 'Teclado Mecânico', preco: 'R$ 250' },
    { id: 2, nome: 'Mouse Gamer', preco: 'R$ 150' },
  ];
}

export default async function ProdutosPage() {
  const produtos = await getProdutos();

  return (
    <div>
      <h1>Nossos Produtos</h1>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} - <strong>{p.preco}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}