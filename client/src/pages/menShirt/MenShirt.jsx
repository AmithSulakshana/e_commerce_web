import React from 'react';
import { useParams } from 'react-router';
import PathNarrow from '../../components/pathNarraror/PathNarrow';

const MenShirt = () => {
    const{id} = useParams();
  return (
    <div>
        <PathNarrow padinLeft="10px"/>
      <h1>{id}</h1>
    </div>
  )
}

export default MenShirt;
