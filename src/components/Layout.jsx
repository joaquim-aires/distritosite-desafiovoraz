const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white px-36">
        <h2 className="text-2xl">Meu Site</h2>
      </header>
      <main className="flex-grow px-36">{children}</main>
      <footer className="bg-black text-white px-36 ">
        <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
