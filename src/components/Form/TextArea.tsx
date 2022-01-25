import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';
import { Textarea as ChakraTextarea, FormControl, FormLabel, TextareaProps as ChakraTextareaProps, FormErrorMessage } from "@chakra-ui/react";

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
  h: string;
  placeholder?: string
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps>
  = ({ name, label, error = null, h, placeholder, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error} h={h}>
        {!!label && 
          <FormLabel
            htmlFor={name}
            visibility="hidden"
            h="0"
          >
            {label}
          </FormLabel>
        }
        <ChakraTextarea
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
          resize="none"
          h="calc(100% - 32px)"
          _hover={{
            bg: "gray.900"
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

export const TextArea = forwardRef(TextAreaBase);