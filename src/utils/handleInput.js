const handleInput = (e, input, setInput) => {
  setInput({
    ...input,
    [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
  });
};

export default handleInput;
