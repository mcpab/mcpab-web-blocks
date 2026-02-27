'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

/**
 * Props for {@link DebouncedTextField}.
 *
 * Extends MUI `TextFieldProps` and adds delayed value notifications.
 */
export type DebouncedTextFieldProps = Omit<TextFieldProps, 'onChange' | 'value'> & {
  /**
   * Controlled input value.
   *
   * When provided, the component behaves as a controlled input.
   */
  value?: string;
  /**
   * Initial input value for uncontrolled mode.
   */
  defaultValue?: string;
  /**
   * Delay in milliseconds before invoking {@link DebouncedTextFieldProps.onDebouncedChange}.
   *
   * @defaultValue 500
   */
  debounceMs?: number;
  /**
   * Immediate change handler forwarded from the native input event.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * Called after the user stops typing for {@link DebouncedTextFieldProps.debounceMs}.
   */
  onDebouncedChange?: (value: string) => void;
  /**
   * Emits latest value on blur when it differs from the last debounced emission.
   *
   * @defaultValue true
   */
  flushOnBlur?: boolean;
};

/**
 * MUI `TextField` wrapper that supports debounced value callbacks.
 *
 * @remarks
 * - Supports controlled (`value`) and uncontrolled (`defaultValue`) modes.
 * - Respects IME composition and defers debounced emits until composition ends.
 * - Optionally flushes pending value on blur.
 */
const DebouncedTextField: React.FC<DebouncedTextFieldProps> = ({
  value: controlledValue,
  defaultValue = '',
  debounceMs = 500,
  onChange,
  onDebouncedChange,
  flushOnBlur = true,
  ...props
}) => {
  const isControlled = controlledValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string>(String(defaultValue ?? ''));
  const inputValue = isControlled ? String(controlledValue ?? '') : uncontrolledValue;

  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const composingRef = React.useRef(false);
  const lastEmittedRef = React.useRef<string>(inputValue);

  const clearTimer = React.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Schedules a value emission after the configured debounce window.
  const schedule = React.useCallback(
    (next: string) => {
      if (!onDebouncedChange) return;
      clearTimer();

      // `0` still runs asynchronously on the next tick and keeps composition guards.
      const delay = Math.max(0, debounceMs);
      timerRef.current = setTimeout(() => {
        if (composingRef.current) return;
        if (next !== lastEmittedRef.current) {
          onDebouncedChange(next);
          lastEmittedRef.current = next;
        }
      }, delay);
    },
    [debounceMs, onDebouncedChange, clearTimer]
  );

  // Re-schedule with the latest delay when debounceMs changes.
  React.useEffect(() => {
    schedule(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceMs]);

  // Re-schedule when parent updates controlled value.
  React.useEffect(() => {
    if (isControlled) schedule(String(controlledValue ?? ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isControlled, controlledValue]);

  // Prevent orphaned timers.
  React.useEffect(() => clearTimer, [clearTimer]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value ?? '';
      if (!isControlled) setUncontrolledValue(next);
      onChange?.(e);
      if (!composingRef.current) schedule(next);
    },
    [isControlled, onChange, schedule]
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (flushOnBlur && onDebouncedChange) {
        const next = e.target.value ?? '';
        clearTimer();
        if (next !== lastEmittedRef.current) {
          onDebouncedChange(next);
          lastEmittedRef.current = next;
        }
      }
      props.onBlur?.(e);
    },
    [flushOnBlur, onDebouncedChange, clearTimer, props]
  );

  // IME guard: avoid mid-composition emissions.
  const handleCompositionStart = () => {
    composingRef.current = true;
    clearTimer();
  };
  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    composingRef.current = false;
    const next = (e.target as HTMLInputElement).value ?? '';
    schedule(next);
  };

  return (
    <TextField
      {...props}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
    />
  );
};

export default DebouncedTextField;
