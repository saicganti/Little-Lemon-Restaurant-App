import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import updateTimes from './components/Main';
import initializeTimes from './components/Main';
import {fetchAPI} from "./components/api";

jest.mock('./components/api');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const mockSubmitForm = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={mockSubmitForm} />);
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});


test('initializeTimes returns the correct initial times', () => {
  const mockTimes = ['17:00','17:30', '18:30', '20:00','20:30','21:00','22:00','23:30'];
  // @ts-ignore
  fetchAPI.mockReturnValue(mockTimes);

  // @ts-ignore
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(mockTimes);
});

test('updateTimes returns the same value provided in the state', () => {
  const initialState: any[] = [];
  const mockTimes = ['17:00','17:30', '18:30', '20:00','20:30','21:00','22:00','23:30'];
  // @ts-ignore
  fetchAPI.mockReturnValue(mockTimes);

  const action = {type: 'UPDATE_TIMES', payload: '2025-03-01'};
  const updatedState = updateTimes(initialState);
  expect(updatedState).toEqual(mockTimes);
})

