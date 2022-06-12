import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../style/project-page.css';

interface ProjectProps {
    title: string;
    imgUrl: string;
    description: string;
}

export default function OneProject() {

    return (
        <div className='one-project-container'>
            <Card className='one-project'>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/97608845_p0.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}