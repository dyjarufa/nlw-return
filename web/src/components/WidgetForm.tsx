import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/Bug.svg";
import IdeaImageUrl from "../assets/Idea.svg";
import ThoughtImageUrl from "../assets/Thought.svg";
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      source: bugImageUrl,
      alt: "A Bug image",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: IdeaImageUrl,
      alt: "A Lamp image",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: ThoughtImageUrl,
      alt: "A thought balloon image",
    },
  },
};

type FeedbackType =  keyof typeof feedbackTypes; // hack para tipar um type conforme as keys de um objeto.

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Leave your feedback</span>
      </header>

      <CloseButton />

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img
                alt={value.image.alt}
                src={value.image.source}
                onClick={() => setFeedbackType(key as FeedbackType)}
              />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
      ) : (
        <p>Hello Jady!</p>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/dyjarufa"
        >
          Jady Rufino
        </a>
      </footer>
    </div>
  );
}
