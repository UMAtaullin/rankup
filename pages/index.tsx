import React, { useEffect, useState } from 'react';
import { Button, Htag, P, Tag} from '../components';
import { Rating } from '@mui/material';


export default function Home() {

  // Состояние для хранения рейтинга
  const [rating, setRating] = useState<number | null>(null);

  // Эффект для загрузки рейтинга из localStorage при первом рендере
  useEffect(() => {
    const savedRating = localStorage.getItem('userRating');
    if (savedRating) {
      setRating(Number(savedRating)); // Преобразуем строку в число
    }
  }, []);

  // Функция для обработки изменения рейтинга
  const handleRatingChange = (newValue: number | null) => {
    setRating(newValue); // Обновляем состояние рейтинга
    localStorage.setItem('userRating', String(newValue)); // Сохраняем новый рейтинг в localStorage
  };

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>

      <Button 
        appearance='primary' 
        arrow='right'
        >Кнопка</Button>
      <Button 
        appearance='ghost' 
        arrow='down'
        >Кнопка</Button>

      <P size='p18'>Большой</P>
      <P size='p16'>Средний</P>
      <P size='p14'>Маленький</P>

      <Tag size='big' color='red'>Тег красного</Tag>
      <Tag size='small' color='green'>Тег зеленого</Tag>
      <Tag size='small' color='grey'>Тег серого</Tag>

      <div>
        <h1>Оцените наш сервис</h1>
        <Rating
          name="half-rating"
          value={rating}
          precision={0.5}
          onChange={(event, newValue) => {
            handleRatingChange(newValue); // Обрабатываем изменение рейтинга
          }}
        />
      </div>
    </>
  );
}
