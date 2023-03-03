import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyLearningTopic = (props) => {
    console.log(props);
    return (
        <Card sx={{ maxWidth: 345, margin: '2rem' }}>
            {
                props.postDetails.isVideo ? (
                    <CardMedia
                        sx={{ height: '200px', backgroundSize: 'contain' }}
                        component="iframe"
                        title="Your Title"
                        allowFullScreen="allowfullScreen"
                        src={props.postDetails.url}
                    />) :
                    (<CardMedia
                        sx={{ height: '200px', backgroundSize: 'contain' }}
                        image={require("../static/images/angular.png")}
                        title="green iguana"
                    />)
            }

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Angular
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MyLearningTopic;