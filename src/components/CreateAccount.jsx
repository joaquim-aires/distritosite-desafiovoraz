import React, { useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Lock, User, X, Edit3 } from "lucide-react";

const CreateAccount = ({ setUser }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const userData = { fullName, email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="text-black">Criar Conta</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow" />
        <AlertDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[360px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-7 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow">
          <div className="mb-4 flex items-center justify-between">
            <AlertDialog.Title className="text-lg font-medium">
              Criar Conta
            </AlertDialog.Title>
            <AlertDialog.Cancel asChild>
              <button className="text-[20px] leading-none text-black">
                <X />
              </button>
            </AlertDialog.Cancel>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleCreateAccount}>
            <div className="flex w-full items-center border-b-2 border-zinc-300">
              <Edit3 className="text-zinc-700" />
              <input
                type="text"
                placeholder="Nome Completo"
                className="w-full p-2 outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex w-full items-center border-b-2 border-zinc-300">
              <User className="text-zinc-700" />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-2 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex w-full items-center border-b-2 border-zinc-300">
              <Lock className="text-zinc-700" />
              <input
                type="password"
                placeholder="Senha"
                className="w-full p-2 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="mt-3 rounded bg-black px-3 py-2 text-white">
              Criar Conta
            </button>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default CreateAccount;
