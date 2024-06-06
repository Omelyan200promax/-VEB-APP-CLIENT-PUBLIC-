import '../App.css';
import NavBar from '../components/NavBar';
import {Flex,Heading,Button,Link, Image, Box, Text} from '@chakra-ui/react';
import {useRef,useEffect, useState} from 'react';
import Footer from  '../components/Footer';
import colors from '../utils/colors';
import ToTopButton from '../components/ToTopButton';
import osnova from '../img/ImgHomePage/osnova.jpg';
import books from '../img/ImgHomePage/books.jpg';
import books2 from '../img/ImgHomePage/books2.jpg'
import books3 from '../img/ImgHomePage/books3.jpg'
import Loader from '../components/Loader'
import {observer} from "mobx-react-lite"
import {Context} from '../index';
import {useContext} from 'react';



const HomePage =()=>{
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    useEffect (()=> {
        const checkAuth = async()=>{
            if(localStorage.getItem('token')){
                await store.checkAuth()
            }setIsLoading(false)
        }
        checkAuth();
    }, [])
    const {coffe,darkCoffe,brightBalck, mintWhite} = colors();
    return(
        <>
           {isLoading ? (
                <Loader />
            ) : (
        <Box >
            {/* height={'150vh' }  */}
            <>
                <NavBar />
                {/* СДЕЛАТЬ ПЕРЕМЕННЫЕ С КАРТИНКАМИ КАК В CARDINEM */}
                {/* <Image> src= {osnova}</Image>
                <Image> src= {books}</Image> */}
               
                <Flex mt = {'20vh'}  align = {'center'}><Image
                    
                   
                    src ={osnova}
                    width ={'60%'}
                    height={'55%'}
                ></Image>
                <Flex justify ={'center'} align = {'center'} width = {'18.5%'} height = {'240px'}  ml ={'10.75%'}   boxShadow={'0px 0px 15px 10px  rgb(225, 185, 133) '}><Text align ='center   'fontSize ='25px' as ='b' >Более 2000 книг на любой вкус и цвет 📚<br/> <br/>Выгодные акции еженедельно 💯 </Text></Flex>
                </Flex>
              
               

                <Flex mt = {'20vh'} justify ={'space-between'} align = {'center'} >
                    <Flex ml = {'5%'}  width = {'20%'} height = {'250px'} align = {'center'}   boxShadow={'0px 0px 15px 10px  rgb(225, 185, 133)'} justify = {'right'} ><Text  fontSize ='25px' as ='b' align ='center'>Книги любых жанров. Учебные пособия для всех возрастов. Редкие экземпляры. Найдите то, что нужно вам!  </Text></Flex>
                    
                    <Image
                     
                    src ={books}
                    width ={'70%'}
                    height={'55%'}
                ></Image>

                
                </Flex>

                





                 <Flex  mt = {'20vh'}  align = {'center'}  ><Image
                   
                  
                    src ={books2}
                    width ={'60%'}
                    height={'45%'}
                ></Image>
                <Flex justify = {'center'} width = {'21.3%'} height = {'120px'} align = {'center'}  ml = {'9.35%'}  boxShadow={'0px 0px 15px 10px  rgb(225, 185, 133)'}><Text align ='center'  fontSize ='25px' as ='b'>Наш адрес:<br/> ул. Советская 54, г. Брест </Text></Flex>
                </Flex>


                <Flex   mt = {'20vh'}  align = {'center'} justify ={'space-between'}> 
                    <Flex justify = {'right'} height = {'150px'} width = {'23.3%'} align = {'center'} ml = {'4.35%'}    boxShadow={'0px 0px 15px 10px  rgb(225, 185, 133)'}><Text align ='center' fontSize ='24px' as ='b' >Заглядывай в "Книжного Червя" почаще и проводи время с пользой ! 😉 </Text></Flex> 

                    <Image
                    
                        src ={books3}
                        width ={'68%'}
                        height={'55%'}
                    ></Image>
                                </Flex>
                
                {/* <Flex 
                bottom={0}
                >
                         < ToTopButton/> 
                    
                    <Footer />
                </Flex> */}
                <Footer/>
                <ToTopButton/>

            </>
   



        </Box>
        )}
    </>
        
         )
}
export default observer(HomePage);