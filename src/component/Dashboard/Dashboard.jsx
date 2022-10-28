import React from 'react';
import Nav from './Nav';
import useStyles from './styles';
import {Link} from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';

const Dashboard = () => {
    const classes = useStyles();
    const img1 = "https://static-01.daraz.lk/p/4c70bf1925d916818717dc73ac13f317.jpg";
    const img2 = "https://static-01.daraz.lk/p/709e2a9956862620a840ad7f295a3973.jpg";
    const title1 = "MEN";
    const title2 = "WOMEN";
    return (
        
        <div>
            <Nav />
            <div >
                <div style={{'margin': "5%", 'display': "flex", 'flexDirection': "row", 'justifyContent': "space-between"}}>
                    <Card className = {classes.root}>
                        <CardMedia className= {classes.media} image = {img1} title = {title1} />

                        <CardContent>
                            <div className = {classes.cardContent}>
                                <Typography variant='h5' gutterBottom>
                                    MEN
                                </Typography>
                                <Typography variant='h5'>
                                        <Link to="/men" style={{'color':"black"}}>
                                        Shop Here
                                        </Link>
                                    
                                </Typography>
                            </div>
                            <Typography variant='body2' color="textSecondary"> </Typography>
                            
                        </CardContent>
                        
                    </Card> <br /><br />
                    <Card className = {classes.root}>
                        <CardMedia className= {classes.media} image = {img2} title = {title2} />

                        <CardContent>
                            <div className = {classes.cardContent}>
                                <Typography variant='h5' gutterBottom>
                                    WOMEN
                                </Typography>
                                <Typography variant='h5'>
                                    <Link to="/women" style={{'color':"black"}}>
                                        Shop Here
                                        </Link>
                                </Typography>
                            </div>
                            <Typography variant='body2' color="textSecondary"> </Typography>
                            
                        </CardContent>
                        
                    </Card>
                
                </div><br /><br />
                {/* <div style={{'margin': "5%",}}>
                    
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard