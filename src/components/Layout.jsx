import { Link, Outlet } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      localStorage.getItem("recentProducts", JSON.stringify([]));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex w-full flex-row items-center gap-12 border-b border-zinc-300 px-36 py-8 text-black">
        <Link to="/" className="text-2xl font-bold">
          Exclusive
        </Link>
        <div className="text-md flex w-full flex-row items-center justify-between font-medium">
          <Link to="/" className="underline">
            Home
          </Link>
          <div className="flex flex-row items-center gap-12">
            {user ? (
              <>
                <span>{user.fullName}</span>
                <button
                  onClick={handleLogout}
                  className="rounded-md border border-black px-2 py-1 text-black hover:shadow-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Login setUser={setUser} />
                <CreateAccount setUser={setUser} />
              </>
            )}
          </div>
        </div>
      </header>
      <main className="flex-grow px-36">
        <Outlet />
      </main>
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
