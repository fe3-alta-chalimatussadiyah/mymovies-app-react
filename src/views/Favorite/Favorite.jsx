import React, { useEffect } from 'react';
import CardFavorite from '../../components/CardFavorite';
import {useSelector} from 'react-redux';

export default function Favorite() {

  const favorites = useSelector(({listFavorite}) => listFavorite);

  useEffect(() => {}, [favorites])

  return (
    <div className="d-flex justify-content-between flex-wrap" style={{marginTop: "100px"}}>
      {favorites.map((el, i) => (
        <CardFavorite poster={el.poster} title={el.title} id={el.id} />
      ))}
    </div>
  )
}