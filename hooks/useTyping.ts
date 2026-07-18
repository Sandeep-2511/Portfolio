/**
 * Custom hook for typing animation effect
 */

import { useState, useEffect } from "react";

interface UseTypingProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const useTyping = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: UseTypingProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 0);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return text;
};
