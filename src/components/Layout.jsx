import CreateAccount from "./CreateAccount";
import Login from "./Login";
import AlertDialogDemo from "./Login";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex w-full flex-row items-end gap-12 border-b border-zinc-300 px-36 py-8 text-black">
        <h2 className="text-2xl font-bold">Exclusive</h2>
        <div className="text-md flex w-full flex-row justify-between font-medium">
          <h3 className="underline">Home</h3>
          <div className="flex flex-row gap-12">
            <Login />
            <CreateAccount />
          </div>
        </div>
      </header>
      <main className="flex-grow px-36">{children}</main>
      <footer className="flex w-full flex-col bg-black text-white">
        <div className="flex flex-row justify-between border-b border-zinc-600 px-36 py-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Exclusive</h2>
            <p className="text-xl font-normal">Inscreva-se</p>
            <p>Obtenha 10% na primeira compra</p>
            <input
              type="email"
              placeholder="Digite seu email"
              className="rounded-md border-2 border-white bg-transparent px-4 py-3"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Suporte</h2>
            <p>support@exclusive.com</p>
            <p>+55 99 99999-9999</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Conta</h2>
            <p>Minha conta</p>
            <p>Entrar / Criar conta</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Links rápidos</h2>
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
            <p>FAQ</p>
            <p>Contato</p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Baixar App</h2>

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
          <p className="py-6 text-center text-zinc-600">
            &copy; Copyright Exclusive 2024. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
