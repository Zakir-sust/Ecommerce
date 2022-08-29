import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { useNavigate } from 'react-router-dom';
export default function ActionAreaCard(props) {
  // console.log('props',props.obj.src)
  // const img = 'mobile.jpg'
    const navigate = useNavigate()
    const handleClick = (b,e)=>{
        e.preventDefault()
        console.log('state',b)
        navigate('/product',{state:b});
      }
  return (
    <Card sx={{ maxWidth: 330,height:620,padding:2 ,marginBottom:5,marginRight:3}}>
      <CardActionArea onClick = {(e)=>handleClick(props.obj,e)}>
        <CardMedia
          component="img"
          image={require(`../images/${props.obj.src}`)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.obj.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.obj.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent style={{alignItems:'bottom'}}>
        <Typography>
            <AttachMoneyIcon color='primary'/> <strong>Price:</strong> {props.obj.price} TK   
        </Typography>
      </CardContent>
    </Card>
  );
}
