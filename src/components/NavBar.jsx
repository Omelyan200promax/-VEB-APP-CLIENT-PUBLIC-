import '../App.css';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond } from '@chakra-ui/react';
import {ShopRoute, HomeRoute,RegisterRoute,AuthRoute,AboutRoute, BooksRoute} from '../utils/consts';
import {Link} from 'react-router-dom';
import {useRef,useEffect, useState} from 'react';
import colors from '../utils/colors';
import {useLocation} from 'react-router-dom'
import {observer} from "mobx-react-lite"
import {Context} from '../index'
import { useContext } from 'react';


const NavBar= ()  =>{
    const [email,setEmail]  = useState();
    const {coffe,darkCoffe,brightBalck, mintWhite} = colors();
    const prevScrollY = useRef(0);
    const [isNavBarVisisble,setIsNavBarVisible] = useState (true);
    const location = useLocation();
    const {store} = useContext(Context)

    // useEffect(()=>{
    //     const scrollToSection = window.location.hash.substring(1);
    //     if (scrollToSection){
    //         const section = document.getElementByID(scrollToSection)
    //         if (section){
    //             section.scrollIntoView({
    //                 behavior: "smooth"   
    //             })
    //         }
    //     }
    // }, [window.location.hash])
    useEffect(() => { 
        const scroll = () =>{ 
            const currentScrollY = window.scrollY; 
            const scrollDirection = currentScrollY > prevScrollY.current ? "down" : "up"; 
            if(scrollDirection === "down" && currentScrollY > 50){ 
                setIsNavBarVisible(false) 
            }else if(scrollDirection === "up" || currentScrollY <=50){ 
                setIsNavBarVisible(true) 
            } 
            prevScrollY.current = currentScrollY; 
        } 
        window.addEventListener("scroll", scroll); 
 
        return() => window.removeEventListener("scroll", scroll); 
    }, []);

    useEffect(()=>{
        setEmail(store.user.email)
    },[store])
    
    return (
        <Flex 
        top={'0px'}
        mt ={'20px'}
        align={'center'}
        width ={'100%'}
        justify ={'space-around'}
        position = 'fixed'
        style ={
            {opacity: isNavBarVisisble ? 1: 0,
             transition: "opacity .3s ease-in-out"
            }
        }
        >
          <Link to = {HomeRoute} >  <Heading className = 'heading' ml={'5px'}>Bookworm</Heading></Link>
            <Flex width ={'30%'}
            justify={'space-between'}
            >
               <Link to ={ShopRoute}><Button color={'black'} background='rgb(225, 185, 133)' width = {'110px'} height = {'50px'} fontSize= {'19px'}>Магазин</Button></Link>
                <Link to ={AboutRoute}><Button color={'black'} background='rgb(225, 185, 133)' width = {'110px'} height = {'50px'} fontSize= {'19px'}>О нас</Button></Link>
                <Link to ={BooksRoute}><Button color={'black'} background='rgb(225, 185, 133)' width = {'110px'} height = {'50px'} fontSize= {'19px'} >Книги</Button></Link>
            </Flex>

            <Flex width ={'12%'}   justify={'space-around'}>
               {store.isAuth ? (
               <Flex gap = {3}><p color={'black'}  fontSize= {'19px'}>Здравствуй, {email}!</p>

               <button color={'black'}  fontSize= {'19px'}  onClick = {()=> store.logout}>Выйти</button></Flex>
            
            ):(<Link to= {AuthRoute}><svg width="51" height="51" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/>
                </svg></Link>)}
                {/* <Link><svg width="51" height="51" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M424.11 192H360L268.8 70.4a16 16 0 0 0-25.6 0L152 192H87.89a32.57 32.57 0 0 0-32.62 32.44a30.3 30.3 0 0 0 1.31 9l46.27 163.14a50.72 50.72 0 0 0 48.84 36.91h208.62a51.21 51.21 0 0 0 49-36.86l46.33-163.36a15.62 15.62 0 0 0 .46-2.36l.53-4.93a13.3 13.3 0 0 0 .09-1.55A32.57 32.57 0 0 0 424.11 192M256 106.67L320 192H192Zm0 245a37.7 37.7 0 1 1 37.88-37.7A37.87 37.87 0 0 1 256 351.63Z"/>
                </svg></Link> */}
            </Flex>
           

        </Flex>
        
    );
} ;
export default observer (NavBar); 

