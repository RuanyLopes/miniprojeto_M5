
export default function DoacoesSection({ doacoes }) {
  return (
    <section style={{ padding: '2rem', fontFamily: "'Roboto', sans-serif", backgroundColor: '#fff8dc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Locais de Doação</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {doacoes.map((local) => (
          <div key={local.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', width: '250px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>🏠</div>
            <h3 style={{ margin: '0.5rem 0' }}>{local.nome}</h3>
            <p>{local.endereco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
