import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../style/project-page.css';
import {useNavigate} from 'react-router-dom';

interface ProjectProps {
    title: string;
    imgUrl: string;
    description: string;
    jumpUrl: string;
}

export default function OneProject(props: ProjectProps) {
    const navigate = useNavigate();
    return (
        <div className='one-project-container'>
            <Card className='one-project'>
                <CardMedia
                    component="img"
                    height="340"
                    image={props.imgUrl}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                    size="small"
                    onClick={() => {
                        window.location.href = props.jumpUrl;
                    }}
                    >
                        Have a look
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}