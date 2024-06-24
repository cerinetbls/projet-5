import React from 'react';
import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  return <div>Logement Page - ID: {id}</div>;
}

export default Logement;