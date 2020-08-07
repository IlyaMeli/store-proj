import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RepChatWindow = () => {
  const [primus, setPrimus] = useState(null);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    // console.log({ Primus: window.Primus });
    setPrimus(new window.Primus());
  }, []);

  useEffect(() => {
    // console.log("useEffect");
    if (primus)
      primus.on("data", (data) => setOutput(`${output} ${input} ${data} \n`));
    // 00.log(output);
  }, [primus, input, output]);

  // Listen for submits of the form so we can send the message to the server.
  const formSubmit = (event) => {
    // Write the typed message.
    event.preventDefault();

    primus.write(`${new Date().toLocaleTimeString()}- Rep: ${input}`);
    setInput("");
    event.preventDefault();
  };

  return (
    <Swrapper>
      <SWriteForm onSubmit={formSubmit}>
        <Sh1>Human Resources Representative Interface</Sh1>
        <Sh3>Start Chatting with the candidate on the other tab...</Sh3>
        <Soutput
          value={output}
          readonly
          onChange={(e) => null}
          placeholder="set an interview with us"
        ></Soutput>
        <SBottomBox class="bottom-box">
          <Sinput
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="write a message..."
          />
          <SButton type="submit">Send</SButton>
        </SBottomBox>
      </SWriteForm>
    </Swrapper>
  );
};
export default RepChatWindow;

const Swrapper = styled.div`
  padding: 50px;
  font-weight: 400;
`;
const SWriteForm = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 15px;
  width: 50vw;
  justify-content: center;
  border: 2px solid white;
  outline: 2px dashed rgb(99, 204, 206, 0.5);
  box-shadow: 0px 0px 23px -5px rgba(0, 0, 0, 0.25);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Soutput = styled.textarea`
  border: solid 1px rgb(239, 40, 83, 0.3);
  border-radius: 5px;

  flex-basis: 200px;
  padding: 10px;
  margin: 0 0 8px;
`;

const Sinput = styled.input`
  flex: 1 1;
  height: 28px;
  font-size: 16px;
  border-radius: 5px;
  border: solid 1px rgb(239, 40, 83, 0.3);

  padding-left: 10px;
`;

const SBottomBox = styled.div`
  display: flex;
`;

const SButton = styled.button`
  border: 0;
  background: #ef2853;
  color: white;
  padding: 6px;
  margin-left: 5px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: #ff6684;
    border: solid 2px white;
    color: black;
    border: solid black 1px;
  }
`;

const Sh1 = styled.h1`
  color: #ef2853;
`;
const Sh3 = styled.h1`
  color: #37a1a3;
  font-weight: 300;
`;
