/**
 * @fileoverview WhatsAppButton - Direct WhatsApp messaging button
 * 
 * A specialized button component for WhatsApp direct messaging with pre-filled
 * messages and contact information. Optimized for customer support and business
 * communication with mobile-first design and international phone number support.
 * 
 * @author MCPAB Development Team
 * @since 1.0.0
 */

'use client';
import * as React from 'react';
import ActionButton from './ActionButton';
import type { ActionButtonProps } from './ActionButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export interface WhatsAppButtonProps extends Omit<ActionButtonProps, 'href'> {
  phone: string;
  message?: string;
  countryCode?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone,
  message = "Hi, I need help with...",
  countryCode,
  children = "Chat on WhatsApp",
  sx,
  ...rest
}) => {
  const formatPhoneNumber = (phone: string, countryCode?: string): string => {
    let formattedPhone = phone.replace(/\D/g, '');
    
    if (countryCode && !formattedPhone.startsWith(countryCode)) {
      formattedPhone = countryCode + formattedPhone;
    }
    
    return formattedPhone;
  };

  const whatsappUrl = React.useMemo(() => {
    const formattedPhone = formatPhoneNumber(phone, countryCode);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  }, [phone, message, countryCode]);

  return (
    <ActionButton
      href={whatsappUrl}
      icon={<WhatsAppIcon />}
      sx={{
        backgroundColor: '#25D366',
        color: 'white',
        '&:hover': {
          backgroundColor: '#1ebe57',
        },
        ...sx
      }}
      {...rest}
    >
      {children}
    </ActionButton>
  );
};

export default WhatsAppButton;