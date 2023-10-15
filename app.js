const head = React.createElement(
  "div",
  {
    id: "heading",
  },
  [
    React.createElement("div", { id: "Parent 1" }, [
      React.createElement(
        "h1",
        { id: "child 1" },
        "Hello World inside the Div in React 1"
      ),
      React.createElement(
        "h1",
        { id: "child 2" },
        "Hello World inside the Div in React 2"
      ),
    ]),
    React.createElement("div", { id: "Parent 2" }, [
      React.createElement(
        "h1",
        { id: "child 3" },
        "Hello World inside the Div in React 1"
      ),
      React.createElement(
        "h1",
        { id: "child 4" },
        "Hello World inside the Div in React 2"
      ),
    ]),
  ]
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
