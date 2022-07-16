import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import RatePage from './Pages/RatePage';

test("verify it renders rate page", () => {
    render(<RatePage />);
})
