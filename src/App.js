import React from "react";
import Home from "./pages/home/home";
import "./App.css";
import { auth } from "./firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Movie from "./pages/Movie/Movie";
import Login from "./pages/Login/Login";
import Explore from "./pages/Explore/Explore";
import Chat from "./pages/Chat/Chat";

function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/explore" component={() => <Explore user={user} />} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/about" component={() => <About user={user} />} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={() => <Chat user={user} />} />
          <Route path="/" component={() => <Home user={user} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
