import '../App.css';
import {Text, Box, Flex,Grid,Heading,Button,ButtonGroup,img, color, background} from '@chakra-ui/react';
import { Input,InputGroup,InputLeftElement,InputRightElement,Stack } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {Context} from '../index'
import {useContext, useState} from 'react'


const RegisterForm = () =>{ 


    const {store} = useContext(Context);
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const handleRegister = async (email,password)=>{
        try{
            await store.registration(email, password);
            if(store.isAuth){
                alert('Вы зарегистрированы')
            }else{
                store.setError ('Incorrect login or password. Try again!')
                alert ('Ошибка')
            }
        }
        catch(e){
            console.log('An error occured during  registratuon.')
        }
    }





    return (
        <Flex mt={'20vh'} ml={'40%'} width = {'20%'} height={'350px'}  boxShadow={'-1px 2px 14px -3px  black'} border-radius = {'10px'} borderRadius ={'8px'} justify ={'center'} align={'center'} >
           
            <Flex width={'70%'} height ={'80%'} justify ={'center'} flexWrap={'wrap'}   >

                
                 <Text fontSize ='23px' as ='b'>Регистрация</Text>
                 <Stack spacing={5}> 
                   
                    <InputGroup border={'5px black'}>
                        <InputLeftElement pointerEvents='none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"/>
                            </svg>
                        </InputLeftElement>

                        <Input type='email' placeholder='E-mail'  onChange = {e => setEmail(e.target.value)} value = {email} />
                    </InputGroup>

                    <InputGroup  border={'5px black'}>
                        <InputLeftElement>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <g fill="none">
                                <path stroke="currentColor" stroke-width="2" d="M4 13c0-1.886 0-2.828.586-3.414C5.172 9 6.114 9 8 9h8c1.886 0 2.828 0 3.414.586C20 10.172 20 11.114 20 13v2c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879C4 19.243 4 17.828 4 15z"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 8V7a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v1"/>
                                <circle cx="12" cy="15" r="2" fill="currentColor"/>
                            </g>
                        </svg>
                        </InputLeftElement>
                        <Input type = 'password' placeholder='Пароль' color ={'rgb(225, 185, 133)'}  onChange = {e => setPassword(e.target.value)} value = {password}  />
                        
                    </InputGroup>
                   
                 </Stack>
                 <Button width ={'66%'}  color={'black'} background='rgb(225, 185, 133)' onClick={()=>handleRegister(email,password)}  >Зарегистрироваться</Button>
                 
              

            </Flex>
        </Flex>
    )
}

export default RegisterForm
