import "../App.css";
import {Flex,Heading,Button,Link, Image, Box} from '@chakra-ui/react';
import {Card,CardHeading,CardBody,CardFooter} from '@chakra-ui/react';
import RedNeck  from '../img/books/RedNeck.jpg'

const CardItem6 =() =>{
    return(
        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
            
            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}><Image
                src ={RedNeck}
                width ={'45%'}
                height={'88%'}
            ></Image></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}><b>Красношейка</b></p></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Ю Несбё  </p></Flex>

            <Flex width ={'100%'} justify={'space-around'} align={'center'}>
               
                <Flex width ={'50%'} >Цена: 23 руб.</Flex>
                <Button width ={'30%'} color={'black'} background='rgb(225, 185, 133)'  >Заказать</Button>
            </Flex>

        </Card>
    )
}
export default CardItem6; 