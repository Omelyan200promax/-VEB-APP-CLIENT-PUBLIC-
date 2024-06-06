import '../App.css';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond } from '@chakra-ui/react';
import {ShopRoute, HomeRoute,RegisterRoute,AuthRoute, NewsRoute, ContactsRoute} from '../utils/consts';
import {Link} from 'react-router-dom';

const Footer = ()=> {
    return (
        <Flex 
            mt={'20vh'}
            ml={'33.3%'}
            width = {'30%'}
            height = {'70px'}
            justify ={'space-around'}
            align ={'center'}
        >
          
         
          <Link to ={NewsRoute}><Text fontSize = {'20px'}><b>Новости</b></Text></Link>
          <Text fontSize = {'20px'}  _hover={{ color: "rgb(225, 185, 133)" }} ><b>BookWorm 2024</b></Text>
          <Link to ={ContactsRoute}><Text fontSize = {'20px'}><b>Контакты</b></Text></Link>
        </Flex>





    )
}
















export default Footer;