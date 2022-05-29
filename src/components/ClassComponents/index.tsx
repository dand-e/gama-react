import React from 'react';

//Método em desuso
class ClassComponents extends React.Component{
  render(): React.ReactNode {
    const name = 'classe'

    return (
      <div>
        <h2>Este componente tem formato de {name}</h2>
        <p>Acabamos de criar nosso primeiro componente formato de {name}</p>
      </div>
    )
  }
}

export default ClassComponents;