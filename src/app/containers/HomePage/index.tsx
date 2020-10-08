import React from 'react';
import { Helmet } from 'react-helmet-async';
import TodoPage from '../../features/todo/containers/TodoPage/TodoPage';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Todo" />
      </Helmet>
      <TodoPage />
    </>
  );
}
