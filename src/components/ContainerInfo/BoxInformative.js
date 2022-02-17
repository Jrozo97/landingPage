import React from 'react'
import {
    Box,
    Button,
    Typography
} from '@mui/material';
import useStyles from './style';

export default function BoxInformative() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.boxContainer}>
                <div className={classes.boxContainerInfo}>
                    <div>
                        <Typography className={classes.textTitleBox}>
                            Lorem ipsum dolor sit amet,
                            <br />
                            consectetur adipiscing elit.
                        </Typography>
                        <Typography className={classes.textSubTitleBox}>
                            Praesent euismod bibendum tellus.
                        </Typography>
                        <Button className={classes.buttonBox}>
                            Join Now
                        </Button>
                    </div>
                    <img src='drawFrontPage.svg' />
                </div>
            </Box>
        </>
    )
}
