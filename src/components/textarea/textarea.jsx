import * as React from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Typography, Box } from "@mui/material";

export default function MaxHeightTextarea() {
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const [text, setText] = React.useState('');

  return (
    <Box mt='10px' ml='10px' mr='10px'>
      <Box display='flex' justifyContent='center' alignItems='center' mt='10px' width={'100%'}>
        <Textarea
          name='observation'
          minRows={10}
          maxRows={20}
          minLength={1}
          maxLength={1500}
          sx={{width: '100%'}}
          placeholder="Ingresa aquí tus observaciones"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </Box >
      <Box display='flex' justifyContent='end' alignItems='center' mt='10px' width={'100%'}>
        <Typography>
          {text.length} / 1,500 caracteres
        </Typography>
      </Box >
    </Box>
  );
}