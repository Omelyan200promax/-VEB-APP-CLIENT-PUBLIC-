import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,Img, color, backgrond, Image , Card} from '@chakra-ui/react';
import skidka from '../img/ImgNewsPage/skidka.jpg'
import grafik from '../img/ImgNewsPage/grafik.jpg'
import dodo from '../img/ImgNewsPage/dodo.jpg'


const NewsPage =()=>{
    return(
        <Box  margin ='0' >
        <NavBarMin />
        <Flex justify ="center"   flexWrap={'wrap'}
             width={'100%'}
             gap={'80px'}
             mt={'260px'}  >

            <Card> <Flex width = '400px' height ='300px' boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} align={'center'}  >
                <div dispaly ='flex'  flex-direction = 'column ' justify-content ='center' align = 'center' width  = '90%' height = '90%' margin-top='20px' >
                    <Img src = {skidka} width = '250px' height = '140px' ></Img>
                    <Text fontSize ='21px' mt = {'10px'}>Cкидка 20% на все издания для школы до конца марта !</Text>
                </div>
                </Flex></Card>


                <Card> <Flex width = '400px' height ='300px' boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'}   justify ={'center'} >
               
                    <Img src = {grafik} width = '390px' height = '290px' mt={'5px'}></Img>
                    
                
                </Flex></Card>


                <Card> <Flex width = '400px' height ='300px' boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} align={'center'}  >
                <div dispaly ='flex'  flex-direction = 'column ' justify-content ='center' align = 'center' width  = '90%' height = '90%' margin-top='20px' >
                    <Img src = {dodo} width = '300px' height = '160px' ></Img>
                    <Text fontSize ={'18px'}>По 17 апреля при заказе пиццы в «Додо Пицца»  получайте купон на скидку 15% на разовую покупку в BookWorm</Text>
                </div>
                </Flex></Card>

            

            



        </Flex>
        
     </Box>
     


    )

}

    export default NewsPage;