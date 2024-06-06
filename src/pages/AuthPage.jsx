import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond } from '@chakra-ui/react';
import AuthForm from '../components/AuthForm';
import {Context} from '../index';
import {useContext, useState} from 'react';
// import {HomeRoute} from '../utils/consts';
// import {useNavigate} from 'react-router-dom';


const AuthPage =()=>{
    // const navigate = useNavigate();
    return(
        <Box height = {'100vh'}>
            <><NavBarMin /><AuthForm /></>
        </Box>
    )
}
export default AuthPage;