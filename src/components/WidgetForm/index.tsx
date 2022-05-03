import React, { useState } from "react";
import { CloseButton } from "../CloseButton";

//colocar redes sociais no footer

import bugImgUrl from "../../assets/Bug.svg";
import ideiaImgUrl from "../../assets/Idea.svg";
import otherImgUrl from "../../assets/Thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: "",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideiaImgUrl,
      alt: "",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImgUrl,
      alt: "",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto transition duration-1000 ease-in-out">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <div>hello </div>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com carinho por{" "}
        <a href="/" className="underline underline-offset-2">
          Matheus Oliveira
        </a>
      </footer>
    </div>
  );
}
