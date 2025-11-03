'use client';
/**
 * @packageDocumentation
 *
 * # DebouncedTextField
 *
 * Material UI `<TextField />` that debounces change notifications.
 *
 * - Works **controlled** (`value`) or **uncontrolled** (`defaultValue`).
 * - Calls `onChange` immediately (like a normal TextField).
 * - Calls `onDebouncedChange(value)` **after a quiet period** of `debounceMs`.
 * - Honors IME composition (won’t emit mid-composition).
 * - When `flushOnBlur` is true (default), it **emits immediately on blur**
 *   if the value changed since the last debounced emit.
 *
 * ## Examples
 * ```tsx
 * // Uncontrolled with debounced search:
 * <DebouncedTextField
 *   label="Search"
 *   placeholder="Type to search…"
 *   debounceMs={400}
 *   onDebouncedChange={(v) => runSearch(v)}
 * />
 *
 * // Controlled with live + debounced handlers:
 * const [q, setQ] = useState('');
 * <DebouncedTextField
 *   label="Query"
 *   value={q}
 *   onChange={(e) => setQ(e.target.value)}
 *   onDebouncedChange={(v) => saveDraft(v)}
 * />
 * ```
 */

import * as React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

export type DebouncedTextFieldProps = Omit<TextFieldProps, 'onChange' | 'value'> & {
  /** Controlled value (if provided). */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** Milliseconds to wait after the last keystroke before emitting. @defaultValue 500 */
  debounceMs?: number;
  /** Normal immediate change callback (same signature as MUI). */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Debounced value callback. */
  onDebouncedChange?: (value: string) => void;
  /** Emit immediately on blur if changed since last emit. @defaultValue true */
  flushOnBlur?: boolean;
};

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

  // Schedule a debounced emit
  const schedule = React.useCallback(
    (next: string) => {
      if (!onDebouncedChange) return;
      clearTimer();

      // Handle 0ms as "emit on next tick" but still respecting composition
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

  // If debounceMs changes, re-schedule for the current value
  React.useEffect(() => {
    schedule(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceMs]);

  // If controlled value changes from parent, re-schedule
  React.useEffect(() => {
    if (isControlled) schedule(String(controlledValue ?? ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isControlled, controlledValue]);

  // Cleanup timer on unmount
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

  // Composition (IME) guards
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
