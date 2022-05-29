import React, {useState, useEffect} from 'react';

const PartOne: React.FC = ():any => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    setName('Novate')
  }, [])

  return(
    <div>
      <h3>Olá, {name}</h3>
      <input type="text" placeholder='Informe seu nome' value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default PartOne;