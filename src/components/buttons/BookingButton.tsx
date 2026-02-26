/**
 * BookingButton
 *
 * Opinionated booking CTA built on top of {@link ActionButton}. It defaults to a
 * sensible booking URL and adds an accessible `aria-label` derived from the
 * service type and duration.
 *
 * @example
 * ```tsx
 * <BookingButton bookingUrl="/book" serviceType="consultation" duration="30 min" />
 * ```
 */

'use client';
import * as React from 'react';
import ActionButton from './ActionButton';
import type { ActionButtonProps } from './ActionButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

/** Props for {@link BookingButton}. */
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