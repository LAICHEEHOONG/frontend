import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

export default function ArrowTooltips({tag, str}) {
    return (
      <Tooltip title={str} placement="top">
        {tag}
      </Tooltip>
    );
  }
