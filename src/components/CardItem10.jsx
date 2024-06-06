import "../App.css";
import {Flex,Heading,Button,Link, Image, Box} from '@chakra-ui/react';
import {Card,CardHeading,CardBody,CardFooter} from '@chakra-ui/react';
import musicFill from '../img/books/musicFill.jpg'

const CardItem10 =() =>{
    return(
        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
            
            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}><Image
                src ={musicFill}
                width ={'47%'}
                height={'90%'}
            ></Image></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}><b>Музыкофилия</b></p></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Оливер Сакс</p></Flex>

            <Flex width ={'100%'} justify={'space-around'} align={'center'}>
               
                <Flex width ={'50%'} >Цена: 21 руб.</Flex>
                <Button width ={'30%'} color={'black'} background='rgb(225, 185, 133)'  >Заказать</Button>
            </Flex>

        </Card>
    )
}







export default CardItem10; 