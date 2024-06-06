import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,Img, color, backgrond, Image , Card} from '@chakra-ui/react';



const ContactsPage = () => {
    return(
        <Box margin ='0'  >
            <NavBarMin />

            <Flex justify  ={'center'} mt = '25vh'><Flex width = '290px' height = '200px' dispaly ='flex' flexWrap={'wrap'} gap = {'20px'} flex-direction ='column'  margin-top ='100px'   >
                <Text fontSize = {'20px'} as = 'b'>Телефоны:</Text>
                <Text fontSize = {'18px'}>+375 29 333 33 33 A1</Text>
                <Text fontSize = {'18px'}>+375 29 999 99 99 MTC</Text>
                <Text fontSize = {'18px'}>+375 555 55 55 Life</Text>
                <Text fontSize = {'18px'}><b>E-mail :</b> bookworm@bookworm.by</Text>
                <Text fontSize = {'18px'}><b>Skype:</b> BookWorm.by</Text>
                <Text fontSize = {'18px'}><b>Адрес:</b>  ул. Советская 54, г. Брест</Text>
                

                
            </Flex></Flex>


            </Box>
     


    )

}

export default ContactsPage;