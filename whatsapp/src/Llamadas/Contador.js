import { useState } from 'react';

function Contador() {
  const [n, setN] = useState(0)

  return (
    <div className="contador">
      Contador: {n}
      <button onClick={() => setN(n + 1)}>+1</button>
      <button onClick={() => setN(n - 1)}>-1</button>
    </div>
  );
}

export default Contador;
