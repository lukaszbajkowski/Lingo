import React from 'react';
import Button from '@mui/material/Button';

const CancelButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={onClick}
      fullWidth
      className={`CancelAddPostButton`}
      style={{ margin: 0, flex: 1, marginRight: '8px'}}
    >
      Anuluj post
    </Button>
  );
};

export default CancelButton;
