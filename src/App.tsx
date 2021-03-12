import React /*useCallback*/ from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import TextEditor from "./components/TextEditor";
import "./App.scss";

const App = () => {
  const text = [
    {
      type: "paragraph",
      children: [
        { text: "An opening paragraph with a " },
        {
          type: "link",
          url: "https://example.com",
          children: [{ text: "link" }],
        },
        { text: " in it." },
      ],
    },
    {
      type: "quote",
      children: [{ text: "A wise quote." }],
    },
    {
      type: "paragraph",
      children: [{ text: "A closing paragraph!" }],
    },
  ];

  const toolbar = ["basics", "lists", "links"];

  /*useEffect(() => {

  })*/

  const myCallback = (dataFromChild: any) => {
    console.log(dataFromChild);
  };

  /*<nav>
    <ul>
      <li>
        <Link to="/portfolio/editor">Editortest</Link>
      </li>
    </ul>
  </nav>*/

  return (
    <Router>
      <Switch>
        <Route path="/">
          <>
            <Header />
          </>
        </Route>
      </Switch>
      <Switch>
        <Route path="/portfolio/editor">
          <>
            <TextEditor
              editorText={text}
              toolbar={toolbar}
              newText={myCallback}
            />
          </>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
