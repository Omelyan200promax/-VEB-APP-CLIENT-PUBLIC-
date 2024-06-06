import "../App.css";
import {Flex,Heading,Button,Link, Image, Box} from '@chakra-ui/react';
import {Card,CardHeading,CardBody,CardFooter} from '@chakra-ui/react';
import AgataK  from '../img/books/agataK.jpg'

const CardItem5 =() =>{
    return(
        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
            
            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}><Image
                src ={AgataK}
                width ={'70%'}
                height={'88%'}
            ></Image></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}><b>Убийство в «Восточном экспрессе»</b></p></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Агата Кристи </p></Flex>

            <Flex width ={'100%'} justify={'space-around'} align={'center'}>
               
                <Flex width ={'50%'} >Цена: 22 руб.</Flex>
                <Button width ={'30%'} color={'black'} background='rgb(225, 185, 133)'  >Заказать</Button>
            </Flex>

        </Card>
    )
}
export default CardItem5; 