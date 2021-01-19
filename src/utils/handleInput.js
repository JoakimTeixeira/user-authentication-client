const handleInput = (e, input, setInput) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
};

export default handleInput;
