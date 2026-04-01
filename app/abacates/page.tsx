async function getAbacates() {
  // Simulando uma chamada de API
  return [
    { id: 1, nome: 'Abacate do Nordeste', preco: 'R$ 4,50' },
    { id: 2, nome: 'Abacate Asiático', preco: 'R$ 17,22' },
  ];
}

export default async function AbacatesPage() {
  const abacates = await getAbacates();

  return (
    <div>
      <h1>Nossos Produtos</h1>
      <ul>
        {abacates.map((p) => (
          <li key={p.id}>
            {p.nome} - <strong>{p.preco}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}