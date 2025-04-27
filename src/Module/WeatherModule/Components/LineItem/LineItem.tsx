import React from 'react';
import Stack from '../../../../Components/Stack';
import Typography from '../../../../Components/Typography';

export interface LineItemProps {
  title: string;
  value: string;
}

function LineItem({title, value}: LineItemProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row">
      <Typography fontSize={16} fontWeight={'500'}>
        {title}
      </Typography>
      <Typography fontSize={13} fontWeight={'400'}>
        {value}
      </Typography>
    </Stack>
  );
}

export default React.memo(LineItem);
