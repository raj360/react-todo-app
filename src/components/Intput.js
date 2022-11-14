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

const Input = styled('input')({
  appearance: 'none',
  background: 'inherit',
  border: `1px solid ${PALETTE.SLATE_400}`,
  borderRadius: 2,
  display: 'block',
  fontSize: 14,
  lineHeight: '24px',
  outline: 'none',
  padding: '3px 0 3px 24px',
  width: '400px',
  '&:focus, &:active': {
    border: `1px solid ${PALETTE.SKY_500}`,
    boxShadow: `0 0 1px 1px ${PALETTE.SKY_300}`,
  },
});

const InputWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Label = styled('div')({
  alignSelf: 'start',
});

function TextInput({ value, type, name, onChange, onFocus, emailValidation, renderIcon, renderError, label }) {
  return (
    <Base>
      <Label>{label}</Label>
      <InputWrapper>
        {renderIcon && renderIcon()}
        <Input type={type} name={name} value={value} onChange={onChange} onFocus={onFocus} />
      </InputWrapper>
      {renderError && renderError()}
    </Base>
  );
}

export default TextInput;
