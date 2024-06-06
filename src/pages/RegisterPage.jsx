import '../App.css';
import NavBarMin from '../components/NavBarMin';
import RegisterForm from '../components/RegisterForm';
import {Flex,Heading,Button,Link, Image, Box} from '@chakra-ui/react';

const RegisterPage =()=>{
    return(

        <Box height = {'100vh'}>
            <><NavBarMin /><RegisterForm /></>
        </Box>
    )
}
export default RegisterPage;