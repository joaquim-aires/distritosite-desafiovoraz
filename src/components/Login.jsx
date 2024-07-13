import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Lock, User, X } from "lucide-react";

const Login = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="text-black">Entrar</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 bg-black/20 backdrop-blur-sm" />
      <AlertDialog.Content className="data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[360px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-7 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <div className="mb-4 flex items-center justify-between">
          <AlertDialog.Title className="text-lg font-medium">
            Entrar
          </AlertDialog.Title>
          <AlertDialog.Cancel asChild>
            <button className="text-[20px] leading-none text-black">
              <X />
            </button>
          </AlertDialog.Cancel>
        </div>

        <form className="flex flex-col gap-3">
          <div className="flex w-full items-center border-b-2 border-zinc-300">
            <User className="text-zinc-700" />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-2 outline-none"
            />
          </div>

          <div className="flex w-full items-center border-b-2 border-zinc-300">
            <Lock className="text-zinc-700" />
            <input
              type="password"
              placeholder="Senha"
              className="w-full p-2 outline-none"
            />
          </div>
          <button className="mt-3 rounded bg-black px-3 py-2 text-white">
            Entrar
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-zinc-500 underline">
            Esqueceu a senha?
          </a>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Login;
