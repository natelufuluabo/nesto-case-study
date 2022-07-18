import React from 'react';
import { render, screen } from '@testing-library/react';
import RatePage from './RatePage';
import GetAQuotePage from '../Get A Quote Page/GetAQuotePage';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom'

test('verify that users can toggle between seeing only rates for 2, 3 and 5 years term and seeing rates for all types of term nesto provide', async () => {
    render(<RatePage />);
    const showMoreBtnElement = screen.getByText("Show More");
    await userEvent.click(showMoreBtnElement);
    const extraRateTermElement = screen.getByText("1-YR");
    expect(extraRateTermElement).toBeInTheDocument();
})

test('verify that users get redirected to the getaquote page after clicking the get this rate button on the rate page', async () => {
    render(<RatePage/>, {wrapper: Router});
    const getRateBtnElement = screen.getAllByText('Get this rate');
    await userEvent.click(getRateBtnElement[0]);
    render(<GetAQuotePage/>, {wrapper: Router});
    const questionElement = screen.getAllByText(/New Mortgage/i)
    expect(questionElement[0]).toBeInTheDocument();
})