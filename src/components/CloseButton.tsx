import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import React from "react";

export function CloseButton() {
  return (
    <Popover.Button
      className="right-5 top-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <X className="w-4 h-4 " weight="bold" />
    </Popover.Button>
  );
}
