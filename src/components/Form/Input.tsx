import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';
import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  placeholder?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, placeholder, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && 
          <FormLabel
            htmlFor={name}
            visibility="hidden"
            h="0"
          >
            {label}
          </FormLabel>
        }
        <ChakraInput
          _autofill={{
            WebkitBoxShadow: '0 0 0 1000px #101010 inset',
            WebkitTextFillColor: '#D1D2DC',
            caretColor: '#D1D2DC',
            transition: 'background-color 5000s ease-in-out 0s',
            _active: {
              borderColor: 'yellow.500'
            }

          }}
          name={name}
          id={name}
          placeholder={placeholder}
          bg="gray.900"
          color="gray.100"
          fontSize="14"
          borderRadius="0"
          border="none"
          borderLeftStyle="solid"
          borderLeftWidth="1px"
          borderBottomStyle="solid"
          borderBottomWidth="1px"
          borderColor="gray.200"
          variant="filled"
          _hover={{
            bg: 'gray.900'
          }}
          _focus={{
            borderWidth: '2px',
            borderColor: 'yellow.500'
          }}
          ref={ref}
          {...rest}
        />
        {!!error && 
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        }
      </FormControl>
    );
}

export const Input = forwardRef(InputBase);