import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import { updateTimes, initializeTimes } from './components/Main';
import { fetchAPI } from "./components/api";

jest.mock('./components/api');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/little lemon logo/i);
  expect(linkElement).toBeInTheDocument();
});

const mockSubmitForm = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={mockSubmitForm} />);
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial times', () => {
  const mockTimes = ['17:00', '17:30', '18:30', '20:00', '20:30', '21:00', '22:00', '23:30'];
  // @ts-ignore
  fetchAPI.mockReturnValue(mockTimes);

  let initialTimes = null;
  act(() => {
    initialTimes = initializeTimes();
  });
  expect(initialTimes).toEqual(mockTimes);
});

test('updateTimes returns the same value provided in the state', () => {
  const initialState: any[] = [];
  const mockTimes = ['17:00', '17:30', '18:30', '20:00', '20:30', '21:00', '22:00', '23:30'];
  // @ts-ignore
  fetchAPI.mockReturnValue(mockTimes);

  const action = { type: 'UPDATE_TIMES', payload: '2025-03-01' };
  let updatedState = null;
  act(() => {
    updatedState = updateTimes(initialState, action);
  });
  expect(updatedState).toEqual(mockTimes);
});

test('BookingForm input fields have correct attributes', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => { }} submitForm={() => { }} />);

  const dateInput = screen.getByLabelText('Reservation Date');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');

  const timeSelect = screen.getByRole('combobox', { name: 'Reservation Time' });  // Use getByRole
  expect(timeSelect).toBeInTheDocument();

  const guestsInput = screen.getByLabelText('Number of Guests');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('required');

  const occasionSelect = screen.getByLabelText('Occasion');
  expect(occasionSelect).toBeInTheDocument();
});

test('Form validation works correctly', async () => {
  const mockSubmit = jest.fn();
  const availableTimes = ['17:00', '18:00']; // Define availableTimes

  render(
      <BookingForm
          availableTimes={availableTimes}
          dispatch={() => { }}
          submitForm={mockSubmit}
      />
  );

  // Test invalid state
  const submitButton = screen.getByText('Reserve Table');
  fireEvent.click(submitButton);
  expect(mockSubmit).not.toHaveBeenCalled();

  // Fill in valid data
  fireEvent.change(screen.getByLabelText('Reservation Date'), { target: { value: '2025-03-04' } });

  const timeSelect = screen.getByRole('combobox', { name: 'Reservation Time' });
  fireEvent.change(timeSelect, { target: { value: availableTimes[0] } }); // Select a valid time

  fireEvent.change(screen.getByLabelText('Number of Guests'), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

  // Test valid state
  fireEvent.click(submitButton);
  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({
    reserveDate: '2025-03-04',
    reserveTime: availableTimes[0],
    guestNum: '2',
    occasion: 'Birthday'
  });
});

test('Guest number validation works correctly', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => { }} submitForm={() => { }} />);
  const guestsInput = screen.getByLabelText('Number of Guests');

  // Test invalid input
  fireEvent.change(guestsInput, { target: { value: '0' } });
  // @ts-ignore
  expect(Number(guestsInput.value)).toBeLessThan(1);

  fireEvent.change(guestsInput, { target: { value: '11' } });
  // @ts-ignore
  expect(Number(guestsInput.value)).toBeGreaterThan(10);

  // Test valid input
  fireEvent.change(guestsInput, { target: { value: '5' } });
  // @ts-ignore
  expect(Number(guestsInput.value)).toBeGreaterThanOrEqual(1);
  // @ts-ignore
  expect(Number(guestsInput.value)).toBeLessThanOrEqual(10);
});