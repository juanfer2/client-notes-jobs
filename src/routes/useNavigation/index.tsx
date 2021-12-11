import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export const useNavigation = () => {
  let navigate = useNavigate();

  const goCreateQuery = () =>{
    navigate(`queries/create`);
  }

  return { goCreateQuery }
}
