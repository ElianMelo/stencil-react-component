import React from 'react';
import { render, screen } from '@testing-library/react';
import puppeteer from 'puppeteer';
import Store from './Store';

test('renders store title', () => {
  render(<Store />);
  const linkElement = screen.getByText(/store/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders wallet initial value', () => {
  render(<Store />);
  const linkElement = screen.getByText(/10000/i);
  expect(linkElement).toBeInTheDocument();
});

test('verify first product in page', () => {
  render(<Store />);
  const linkElement = screen.getByTestId(0);
  expect(linkElement).toBeInTheDocument();
});

test('verify last product in page', () => {
  render(<Store />);
  const linkElement = screen.getByTestId(9);
  expect(linkElement).toBeInTheDocument();
});

test('verify first product price', () => {
  render(<Store />);
  const linkElement = screen.getByTestId(0);
  const price = linkElement.getAttribute("price");
  expect(Number(price)).toBe(3397.70);
});

test('verify last product price', () => {
  render(<Store />);
  const linkElement = screen.getByTestId(9);
  const price = linkElement.getAttribute("price");
  expect(Number(price)).toBe(2499.00);
});

test('verify products have image', () => {
  render(<Store />);

  for(let i = 0; i < 10; i++) {
    const linkElement = screen.getByTestId(9);
    const changeFunction = linkElement.getAttribute("image");
    expect(changeFunction).not.toBe(null);
  }
});

// Puppeteer not working
// test('Click in price button', async() => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000');
//   await page.waitForSelector('.Product__Price__button');
//   await page.click('.Product__Price__button');
//   await browser.close();
// });
