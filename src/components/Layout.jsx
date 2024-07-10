const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="w-full items-end gap-12 text-black px-36 py-8 border-b border-zinc-300 flex flex-row">
        <h2 className="text-2xl font-bold">Exclusive</h2>
        <div className="w-full flex flex-row font-medium text-md justify-between">
          <h3 className="underline">Home</h3>
          <div className="flex flex-row gap-12">
            <h4>Entrar</h4>
            <h4>Criar conta</h4>
          </div>
        </div>
      </header>
      <main className="flex-grow px-36">{children}</main>
      <footer className="bg-black text-white w-full flex flex-col">
        <div className="border-b border-zinc-600 flex flex-row justify-between  px-36 py-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Exclusive</h2>
            <p className="font-normal text-xl">Inscreva-se</p>
            <p>Obtenha 10% na primeira compra</p>
            <input
              type="email"
              placeholder="Digite seu email"
              className="bg-transparent border-2 border-white rounded-md px-4 py-3"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Suporte</h2>
            <p>support@exclusive.com</p>
            <p>+55 99 99999-9999</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Conta</h2>
            <p>Minha conta</p>
            <p>Entrar / Criar conta</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Links rápidos</h2>
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
            <p>FAQ</p>
            <p>Contato</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-2xl">Baixar App</h2>

            <p className="text-xs font-medium text-white/70">
              Save $3 with App New User Only
            </p>
            <div>
              <img src="" alt="" />
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <div>linkedin etc</div>
          </div>
        </div>
        <div>
          <p className="text-center text-zinc-600 py-6">
            &copy; Copyright Exclusive 2024. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
