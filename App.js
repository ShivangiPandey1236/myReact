//  for creating nested tags
const parent =React.createElement("div",{id:"parent"},[
  React.createElement("div" ,{id:"child"},
  [React.createElement("h1",{},"I am h1"),React.createElement("h2",{},"I am h2")]),
  React.createElement("div" ,{id:"child2"},
    [React.createElement("h1",{},"I am h1"),React.createElement("h2",{},"I am h2")]),

]);


     // creating element in react//
// const heading =React.createElement("h1", 
//   { id:"heading"},
//    "hello world from react !");

    const root = ReactDOM.createRoot(document.getElementById("root"));
console.log (parent);
root.render(parent);