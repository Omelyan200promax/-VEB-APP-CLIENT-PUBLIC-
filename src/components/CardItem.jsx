import "../App.css";
import {Flex,Heading,Button,Link, Image, Box} from '@chakra-ui/react';
import {Card,CardHeading,CardBody,CardFooter} from '@chakra-ui/react';
import DostoevskiBook from '../img/books/3540.jpg'
const CardItem =() =>{
    return(
        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
            
            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}><Image
                src ={DostoevskiBook}
                width ={'60%'}
                height={'100%'}
            ></Image></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}><b>Преступление и наказание,Идиот</b></p></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Ф. М. Достоевский </p></Flex>

            <Flex width ={'100%'} justify={'space-around'} align={'center'}>
               
                <Flex width ={'50%'} >Цена: 20 руб.</Flex>
                <Button width ={'30%'}  color={'black'} background='rgb(225, 185, 133)'   >Заказать</Button>
            </Flex>

        </Card>
    )
}







export default CardItem; 