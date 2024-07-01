import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))
const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>DEV</Typography>
            <Pets sx={{display: {xs: "block", sm: "none"}}}/>
            <Search><InputBase inputProps={{sx:{color:"black"}}} placeholder='Поиск'/></Search>
            <Icons>
                <Badge badgeContent={4} color='error'>
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color='error'>
                    <Notifications />
                </Badge>
                <Avatar sx ={{width: 30, height: 30}} src='https://cdn.lifehacker.ru/wp-content/uploads/2013/11/shutterstock_84541852.jpg' onClick={(e)=>setOpen(true)}/>
            </Icons>
            <UserBox onClick={(e)=>setOpen(true)}>
            <Avatar sx ={{width: 30, height: 30}} src='https://cdn.lifehacker.ru/wp-content/uploads/2013/11/shutterstock_84541852.jpg' />
            <Typography variant = "span">Анфиса</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id=""
        aria-labelledby=''
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
        }}>
            <MenuItem>Профиль</MenuItem>
            <MenuItem>Выйти</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar
