import React, { useEffect, useState } from 'react';
import { Button, Htag, P, Tag } from '../components';

export default function Home() {
  let [count, setCount] = useState<number>(0)
  useEffect(() => {
    console.log('Counter' + count)
    return () => console.log('Counter unmounted')
  }, [])
  return (
    <>
      <Htag tag='h1'>{count}</Htag>

      <Button 
        onClick={() => setCount(count = count + 1)}
        appearance='primary' 
        arrow='right'
        >Кнопка</Button>
      <Button 
        onClick={() => setCount(count = count - 1)}
        appearance='ghost' 
        arrow='down'
        >Кнопка</Button>

      <P size='p18'>Большой</P>
      <P size='p16'>Средний</P>
      <P size='p14'>Маленький</P>

      <Tag size='big' color='red'>Тег красного</Tag>
      <Tag size='small' color='green'>Тег зеленого</Tag>
      <Tag size='small' color='grey'>Тег серого</Tag>
    </>
  );
}
