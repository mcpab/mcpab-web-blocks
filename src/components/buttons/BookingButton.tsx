/**
 * @fileoverview BookingButton - Appointment and consultation booking button
 * 
 * A specialized button component designed for appointment scheduling and consultation
 * booking flows. Integrates with calendar systems and booking platforms while providing
 * optimal user experience for service-based businesses and professional consultations.
 * 
 * @author MCPAB Development Team
 * @since 1.0.0
 */

'use client';
import * as React from 'react';
import ActionButton from './ActionButton';
import type { ActionButtonProps } from './ActionButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export interface BookingButtonProps extends ActionButtonProps {
  bookingUrl?: string;
  serviceType?: string;
  duration?: string;
}

const BookingButton: React.FC<BookingButtonProps> = ({
  bookingUrl = "/book-consultation",
  serviceType,
  duration,
  children = "Book Consultation",
  ...rest
}) => {
  const ariaLabel = `Book ${serviceType || 'consultation'}${duration ? ` (${duration})` : ''}`;

  return (
    <ActionButton
      href={bookingUrl}
      icon={<CalendarTodayIcon />}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </ActionButton>
  );
};

export default BookingButton;