import React from 'react';
import { Button, Htag, P } from '../components';

export default function Home() {
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost'arrow='down'>Кнопка</Button>
      <P size='p18'>Большой</P>
      <P size='p16'>Средний</P>
      <P size='p14'>Маленький</P>
    </>
  );
}
