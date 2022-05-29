import React from 'react';

import FunctionalComponent from '../../components/FunctionComponents';
import ClassComponents from '../../components/ClassComponents';
import PartOne from '../../Hooks';
import ButtonProps from '../../components/Props/Component';

const Home: React.FC = () => {
  return(
    <div>
      <h1>Listando os nossos componentes</h1>
      <FunctionalComponent/>
      <ClassComponents/>
      <PartOne />
      <ButtonProps name="Botão 1" />
      <ButtonProps name="Botão 2" />
    </div>
  );
}
export default Home;