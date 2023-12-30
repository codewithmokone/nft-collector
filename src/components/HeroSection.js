import React from 'react';
import './HeroSection.css';
import img1 from '../images/hero-section.png';
import { Box, Typography } from '@mui/material';
// import Image from './Image';

function HeroSection() {
    return (
        <Box
            sx={{
                width: { xs: 400, sm: 786, md: 1024, lg: 1024 },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                // alignItems: 'center',
                margin: 'auto',
                marginBottom:2,
                marginTop:2
            }}
        >
            <Box
                sx={{
                    width: { xs: 400, sm: 786, md: 520 },
                    // marginTop:{md:3},
                }}
            >
                <Box>
                    <Typography variant='h1' sx={{ fontSize: 25 }}>DISCOVER AN AMAZING NFT COLLECTION</Typography>
                    <Typography sx={{ width: { md: 500 }, fontSize:{md:14}, marginTop:1 }}>
                        A Good NFT Project Will Have A Healthy Community Following Them.
                        The Ones With The Most Engagement Are Ussualy The Proects Which
                        Will Be The Most Successful. NFTs Are More Than Just Owning a Piece Of Art.
                        They Are Being Part Of A Community. Where A Culture Has Been Created,
                        And Culture Creates A Following
                    </Typography>
                </Box>
                <Box sx={{width:{md:350}, marginTop:2}}>
                    <form className="example" action="action_page.php">
                        <input type="text" className='search-input' placeholder="  Search.." name="search" />
                        <button type="submit" className='search-button'>SEARCH</button>
                    </form>
                </Box>
                <Box>
                    <table className='stats'>
                        <tr>
                            <td className='rate'>320+</td>
                            <td className='stats-info'>Project Done</td>
                            <td className='rate'>60+</td>
                            <td className='stats-info'>Creative People</td>
                            <td className='rate'>200+</td>
                            <td className='stats-info'>Happy Client</td>
                        </tr>
                    </table>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Box>
                        <Typography sx={{fontSize:16}} variant='h6'>CREATED BY |</Typography>
                    </Box>
                    <Box>
                        <Typography>Simon</Typography>
                    </Box>
                </Box>
            </Box>
            {/* Image Section */}
            <Box sx={{ 
                width: { md: 390 }, 
                height:{md:300},
                display:'flex', 
                justifyContent:'center' ,
                }}
            >
                <img src={img1} className='img-banner' alt='' />
                {/* <Image sx={{width:500}} src={img1} alt='' /> */}
            </Box>
        </Box>
    )
}

export default HeroSection;
