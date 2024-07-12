import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

const Model = () => {
//     disableBackdropClick
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false); 

const handleModelOk = () =>{
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    handleClose()
  
  }
  const handleModelcancel =()=>{
  console.log("cancel");
  handleClose()
  }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
}
  return (
    <div>

       <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button onClick={handleModelOk}>Ok</button>
            <button onClick={handleModelcancel}>Cancel</button>
          </Typography>
        </Box>
    </div>
  )
}

export default Model
