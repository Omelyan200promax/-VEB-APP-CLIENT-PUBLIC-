import '../App.css';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond } from '@chakra-ui/react';
import {ShopRoute, HomeRoute,RegisterRoute,AuthRoute} from '../utils/consts';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';



const ToTopButton =()=> {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(()=> {
        const handleScroll =()=>{
            setIsScrolled(window.scrollY>0);

        }
        window.addEventListener ("scroll",handleScroll);
        return()=>{
            window.removeEventListener ('scroll', handleScroll);
    }

    },[])



   
     return(
      <>
        {isScrolled &&(
        <>
            <Box
                mt={'90vh'}
                className='toTop-btn' 
                onClick={()=>{
                    window.scrollTo({
                        top:0,behavior:"smooth"
                        });
                    }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12 4l-.707-.707l.707-.707l.707.707zm1 15a1 1 0 1 1-2 0zM5.293 9.293l6-6l1.414 1.414l-6 6zm7.414-6l6 6l-1.414 1.414l-6-6zM13 4v15h-2V4z"/>
                </svg>
            </Box></>
    
            )}
      </>
    )
}
export default ToTopButton;