import React from 'react';
import { render, screen } from '@testing-library/react';
import RatePage from '../Pages/RatePage';
import userEvent from '@testing-library/user-event';

test('verify that users can toggle between seeing only rates for 2, 3 and 5 years term and seeing rates for all types of term nesto provide', async () => {
    render(<RatePage />);
    const showMoreBtnElement = screen.getByText("Show More");
    await userEvent.click(showMoreBtnElement);
    const extraRateTermElement = screen.getByText("1-YR");
    expect(extraRateTermElement).toBeInTheDocument();
})