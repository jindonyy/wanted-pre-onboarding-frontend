import { useState } from 'react';

const useInputValue = () => {
  const [inputValue, setInputValue] = useState<{ [key in string]: string }>({});

  const isRightSize = (name: string, min: number, max = Infinity) =>
    min <= inputValue[name].length && max >= inputValue[name].length;

  const hasRequiredCharacters = (name: string, regExp: RegExp) => inputValue[name].match(regExp);

  return { inputValue, setInputValue, isRightSize, hasRequiredCharacters };
};

export default useInputValue;
