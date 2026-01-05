import { useState } from "react";

function App() {
  const [count] = useState(0);

  return <>Hello World ${count}</>;
}

export default App;
