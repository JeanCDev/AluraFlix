/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  };
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
      &:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
      }
    `}
    }
`;

function FormField({
  label, type, value, name, onChange, sugestions,
}) {
  const field = `${name}`;
  const tag = type === 'textarea' ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSugestions = Boolean(sugestions.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={field}
      >
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          id={field}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSugestions ? "off" : 'on'}
          list={hasSugestions ? `sugestionFor_${field}` : undefined}
        />

        <Label.Text>
          { label }
          :
        </Label.Text>

        {
          hasSugestions && (
          <datalist id={`sugestionFor_${field}`}>
            {
                sugestions.map((sugestion) => (
                  <option value={sugestion} key={`sugestionFor_${field}_option_${sugestion}`}>
                    {sugestion}
                  </option>
                ))
              }
          </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  sugestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  sugestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
