export const metadata = {
  title: 'Meu Pequeno E-commerce',
  description: 'Criado com Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <a href="/">Home</a> | <a href="/produtos">Produtos</a> | <a href="/abacates">Abacate</a>
        </nav>
        <main style={{ padding: '20px' }}>{children}</main>
        <footer> Meu Footer</footer>
      </body>
    </html>
  )
}