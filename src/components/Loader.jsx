import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,Img, color, backgrond, Image , Card} from '@chakra-ui/react';
import '../App.css';
const Loader = ()=>{
    return (
        <Flex  h = {'100vh'} w ={'100%' } justify = {'center'} align = {'center'} bg = {'rgb(225, 185, 133)'} opacity = {'0.75'} >
            
        
                <div class="spinner">
                    <div></div>   
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                </div>
        </Flex>
            
    )
}
export default Loader