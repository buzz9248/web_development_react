// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";

// function App() {

//   return (
//     <Router>
//       <Switch>
//         <Route path="/movie/:id">
//           <Detail />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
