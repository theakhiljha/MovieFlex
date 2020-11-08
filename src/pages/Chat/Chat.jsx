import React, { useEffect, useState } from "react";
import styles from "./Chat.module.css";
import { db } from "../../firebase";
import firebase from "firebase";
import Message from "../../components/Message/Message";
import { useHistory } from "react-router-dom";
import FlipMove from "react-flip-move";
import { FormControl, Input, IconButton, TextField } from "@material-ui/core";

const Chat = (props) => {
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const history = useHistory();

  useEffect(() => {
    setUsername(props.user?.email);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.cross}>
        <span onClick={() => history.push("/")} className="material-icons">
          close
        </span>
      </div>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={sendMessage}>
          <FormControl className={styles.askform}>
            <TextField
              fullWidth
              placeholder="Ask For Suggestion"
              variant="outlined"
              value={input}
              className="app__input"
              onChange={(e) => setInput(e.target.value)}
            />
          </FormControl>
        </form>
        <FlipMove className="app__cardConatiner">
          {message.map(({ id, data }) => (
            <Message key={id} username={username} text={data} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Chat;
