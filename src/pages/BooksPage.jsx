import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond, Image, Card } from '@chakra-ui/react';
import AgataK  from '../img/books/agataK.jpg'
import Morg  from '../img/books/Morg.webp'
import RedNeck  from '../img/books/RedNeck.jpg'
import artLove from '../img/books/artLove.jpg'
import blackWhite from '../img/books/blackWhite.jpg'
import musicFill from '../img/books/musicFill.jpg'
import magicion from '../img/books/magicion.jpg'
import littlePrince from '../img/books/littlePrince.jpg'
import brotherRing from '../img/books/brotherRing.jpg'

// import
// import
// import





const BooksPage = () =>{
    return (
        
        <Box  margin ='0'>
           <NavBarMin />
           <Flex justify ="center"   flexWrap={'wrap'}  align = 'center'
                width={'100%'}
                gap={'100px'}
                mt={'80px'} 
                mb ={'30px'} >
                  
                    
                <Flex justify ="center" align = 'center' width ='650px' height ='50px' boxShadow={'0px 0px 15px 10px  rgb(225, 185, 133) '}><Text fontSize='25px'  >Самые популярные книги разных жанров у нас</Text></Flex>



                <Flex justify ="center" align = 'center'  flexWrap={'wrap'} gap = {'100px'} width = {'100%'}>
                    <Flex justify ="center" align = 'center' width ='350px' height ='40px' boxShadow={'0px 0px 15px 5px  rgb(225, 185, 133)'} ><Text fontSize='23px'>Детектив</Text></Flex>
                    <Flex justify ="center" align = 'center'  flexWrap={'wrap'} gap = {'100px'} width = {'100%'} >
                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'} mt='25px'><Image
                               src ={AgataK}
                                width ={'75%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} mt='10px'><p text-align={'center'} ><b>Убийство в «Восточном экспрессе»</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Агата Кристи </p></Flex>

                           

                        </Card>

                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}  mt='30px'><Image
                                 src ={Morg}
                                width ={'50%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'}  mt='10px'><p text-align={'center'} ><b>Убийство на улице Морг</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Эдгар Аллан По </p></Flex>

                           

                        </Card>

                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'} mt='31px'><Image
                                src ={RedNeck}
                                width ={'50%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} mt='10px' ><p text-align={'center'}><b>Красношейка</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Ю Несбё </p></Flex>

                          
                        </Card>



                    </Flex>
                </Flex>







                <Flex justify ="center" align = 'center'  flexWrap={'wrap'} gap = {'100px'} width = {'100%'}>
                    <Flex justify ="center" align = 'center' width ='350px' height ='40px' boxShadow={'0px 0px 15px 5px  rgb(225, 185, 133) '} ><Text fontSize='23px'> Психология</Text></Flex>
                    <Flex justify ="center" align = 'center'  flexWrap={'wrap'} gap = {'100px'} width = {'100%'} >
                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'} mt='25px'><Image
                               src ={artLove}
                                width ={'50%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} mt='10px'><p text-align={'center'} ><b>Искусство любить</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Эрих Фромм </p></Flex>

                           

                        </Card>

                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}  mt='30px'><Image
                                 src ={blackWhite}
                                width ={'50%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'}  mt='10px'><p text-align={'center'} ><b>Психология влияния</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Роберт Чалдини    </p></Flex>

                           

                        </Card>

                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'} mt='31px'><Image
                                src ={musicFill}
                                width ={'50%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} mt='10px' ><p text-align={'center'}><b>Музыкофилия</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Оливер Сакс</p></Flex>

                          
                        </Card>



                    </Flex>
                </Flex>







                <Flex justify ="center" align = 'center'  flexWrap={'wrap'} gap = {'100px'} width = {'100%'}>
                    <Flex justify ="center" align = 'center' width ='350px' height ='40px' boxShadow={'0px 0px 15px 5px  rgb(225, 185, 133) '} ><Text fontSize='23px'>Фэнтези</Text></Flex>
                    <Flex justify ="center" align = 'center'  flexWrap={'wrap'} gap = {'100px'} width = {'100%'} >
                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} border  Radius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'} mt='25px'><Image
                               src ={magicion}
                                width ={'75%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} mt='10px'><p text-align={'center'} ><b>Волшебник Земноморья</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Урсула Легуин  </p></Flex>

                           

                        </Card>

                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}  mt='30px'><Image
                                 src ={littlePrince}
                                width ={'50%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'}  mt='10px'><p text-align={'center'} ><b>Маленький принц</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Антуан де Сент-Экзюпери </p></Flex>

                           

                        </Card>

                        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
                
                            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'} mt='31px'><Image
                                src ={brotherRing}
                                width ={'50%'}
                                height={'100%'}
                            ></Image></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} mt='10px' ><p text-align={'center'}><b>Братство Кольца</b></p></Flex>
                            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>Джон Рональд Руэл Толкин </p></Flex>

                          
                        </Card>



                    </Flex>
                </Flex>







           </Flex>
           
        </Box>
        

    )
}
export default BooksPage;