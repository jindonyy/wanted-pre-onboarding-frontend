import { ChangeEvent, useState } from 'react';

const useInputValue = (initialValue: { [key in string]: string }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    });
  };

  const isRightSize = (name: string, min: number, max = Infinity) =>
    min <= inputValue[name].length && max >= inputValue[name].length;

  const hasRequiredCharacters = (name: string, regExp: RegExp) => inputValue[name].match(regExp);

  return { inputValue, setInputValue, updateInputValue, isRightSize, hasRequiredCharacters };
};

export default useInputValue;
