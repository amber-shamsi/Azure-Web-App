import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter} from 'react-router-dom'
import App from './App'
import React from 'react';
// const url = 'http://localhost:5173/';
// let documentBody: RenderResult;

describe('Display home-page title', () => {

  test("Should be film", () => {
    render(<BrowserRouter > <App /> </BrowserRouter >);
    const titleElement = screen.getByText("Vite + React");
    expect(titleElement).toBeInTheDocument();
  }
  )

  test('Shows film card', () => {

    render(<BrowserRouter ><App /> </BrowserRouter >);
    const titleElement = screen.getByText("Click on the Vite and React logos to learn more");
    expect(titleElement).toBeInTheDocument();

  });
})