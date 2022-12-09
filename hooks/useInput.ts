import React, { useState } from "react";

const useInput = (initState: string) => {
  const [value, setValue] = useState(initState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

export default useInput;
