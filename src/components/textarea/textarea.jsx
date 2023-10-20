import * as React from 'react';
import { Typography, Box } from "@mui/material";
import { CustomTextArea } from './CustomTextArea';


export default function textarea() {

  const [text, setText] = React.useState('');

  return (
    <Box mt='10px' ml='10px' mr='10px'>
      <Box display='flex' justifyContent='center' alignItems='center' mt='10px' width={'100%'}>
        <CustomTextArea
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