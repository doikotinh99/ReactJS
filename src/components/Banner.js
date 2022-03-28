import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
function Banner({title, disc, color, path}){


    return (
        <Box className="Banner">
            <img style={{width: '100%'}} src={path} />
            <div>
                <h5>{title}</h5>
                <h3>{disc}</h3>
                <Button>SHOW NOW</Button>
            </div>
            <Stack direction="row" spacing={1}>
                <Chip label="primary" color={color} />
            </Stack>
        </Box>
    )
}

export default Banner