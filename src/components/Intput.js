import styled from '@emotion/styled';
import { PALETTE } from '../styles/palette';
import React from 'react';

const Base = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: PALETTE.SLATE_700,
  margin: '0 0 20px',
});

const Input = styled('input')(({ hasError }) => ({
  appearance: 'none',
  background: 'inherit',
  border: `1px solid ${hasError ? PALETTE.TOMATO_500 : PALETTE.SLATE_500}`,
  borderRadius: 2,
  display: 'block',
  fontSize: 14,
  lineHeight: '24px',
  outline: 'none',
  padding: '3px 0 3px 24px',
  width: '400px',
  '&:focus, &:active': {
    border: `1px solid ${hasError ? PALETTE.TOMATO_500 : PALETTE.SKY_500}`,
    boxShadow: `0 0 1px 1px ${hasError ? PALETTE.TOMATO_500 : PALETTE.SKY_300}`,
  },
}));

const InputWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Label = styled('div')({
  alignSelf: 'start',
});

const TextInput = ({ renderIcon, renderError, label, ...otherProps }) => (
  <Base>
    <Label>{label}</Label>
    <InputWrapper>
      {renderIcon && renderIcon()}
      <Input {...otherProps} />
    </InputWrapper>
    {renderError && renderError()}
  </Base>
);

export default TextInput;
