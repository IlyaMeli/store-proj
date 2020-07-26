import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ChatWindow = () => {
  const [primus, setPrimus] = useState(null);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  // Tell primus to create a new connect to the current domain/port/protocol
  // const primus;
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
    event.preventDefault();

    primus.write(`${new Date().toLocaleTimeString()}- Customer: ${input}`);
    setInput("");
  };

  const openWindow = () => {
    setOpen(!open);
  };

  if (open === true) {
    return (
      <ChatWrapper>
        <SMain>
          <STitle onClick={openWindow}>HR Chat</STitle>
          <SSubTitleWrapper>
            <SSubTitle>
              Hi!!
              <br />
              To set an interview with me;
              <br />
              open the HR Representative chat interface
              <br />
              <br />
              <br />
              <SChatLink
                href="http://localhost:3000/public-chat-client.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://localhost:3000/public-chat-client.html
              </SChatLink>
            </SSubTitle>
          </SSubTitleWrapper>
          <SForm onSubmit={formSubmit}>
            <SOutout
              value={output}
              readonly
              onChange={(e) => null}
              placeholder="set an interview with us"
            ></SOutout>
            <SBottomBox>
              <SInput
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="write a message..."
              />
              <SFormBTN type="submit">Send</SFormBTN>
            </SBottomBox>
          </SForm>
          <SClose onClick={openWindow}> Close Chat </SClose>
        </SMain>
      </ChatWrapper>
    );
  } else {
    return (
      <ChatWrapper>
        <SOpenChat>
          <ClosedChat onClick={openWindow}>
            <SChatIcon
              src={"./images/chat_icon.jpg"}
              alt="caht icon"
            ></SChatIcon>
            <STitleBTN>
              open chat with HR <br />
              to set an interview
            </STitleBTN>
          </ClosedChat>
        </SOpenChat>
      </ChatWrapper>
    );
  }
};

export default ChatWindow;

const ChatWrapper = styled.div`
  display: flex;
`;

const SMain = styled.div`
  border: 2px solid white;
  outline: 2px dashed rgb(99, 204, 206, 0.5);
  outline-offset: -10px;
  /* border-inline: solid 15px rgb(239, 40, 83, 0.04); */
  position: fixed;
  bottom: 0px;
  top: 20;
  background-color: white;
  box-shadow: -5px 0px 15px -4px rgba(0, 0, 0, 0.1);
  right: 0;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  padding: 5px;
  /* justify-content: center; */
  /* align-items: center; */
`;

const ClosedChat = styled.div`
  display: flex;
  border: #ef2853 solid 3px;
  /* border-radius: 5px; */
  background-color: white;
  border-radius: 6px;

  position: fixed;
  right: 0;
  top: 80vh;
  &:hover {
    border: #ff6684 solid 3px;
  }
`;
const SForm = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 500;
  padding: 15px;
  justify-content: center;
  border-radius: 6px;
  flex: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans - serif;
`;

const SBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SOutout = styled.textarea`
  border: solid 1px rgb(239, 40, 83, 0.3);
  flex-basis: 200px;
  padding: 5px;
  margin: 0 0 8px;
`;

const SInput = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  flex: 1 1;
  height: 28px;
  font-size: 16px;
  border: solid 1px rgb(239, 40, 83, 0.3);
  padding-left: 10px;
  margin-right: 10px;
`;

const SFormBTN = styled.button`
  border: 0;
  background: #ef2853;
  color: white;
  padding: 6px;

  &:hover {
    cursor: pointer;
    background: #ff6684;
    /* border: solid 2px white;
    color: black;
    border: solid black 1px; */
  }
`;

const SClose = styled.button`
  align-self: center;
  margin-bottom: 5px;
  width: 4rem;
  background: #ef2853;
  border: none;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    background: #ff6684;
    /* border: solid 2px white; */
    /* color: black; */
    /* border: solid black 1px; */
  }
`;

const SOpenChat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const SChatIcon = styled.img`
  width: 3vw;
  height: auto;
  border-radius: 6px;

  /* border: solid red 2px; */
`;

const STitleBTN = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans - serif;
  border: none;
  color: white;
  background-color: #ef2853;
  font-weight: 300;
  font-size: 1vw;
  &:hover {
    cursor: pointer;
    background: #ff6684;
  }
  /* border: solid blue 2px; */
`;

const STitle = styled.h3`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 45px;
  font-weight: 300;
  color: #ef2853;
  &:hover {
    cursor: pointer;
  }

  /* border: solid green 2px; */
`;
const SSubTitleWrapper = styled.div`
  /* border: solid blue 2px; */
`;

const SChatLink = styled.a`
  color: #63ccce;
  font-weight: 300;
  /* border: solid blue 2px; */
`;

const SSubTitle = styled.h1`
  color: #ef2853;
  font-weight: 400;
  font-size: 0.8vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 10px;
`;
