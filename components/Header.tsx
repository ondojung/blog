"use client"
import MenuIcon from '../public/img/menu.svg'
import {useState,useEffect} from 'react'
import SideBlock from './SideBlock'

export default function Header() {
    const [menuOpen,setMenuOpen] = useState(false)
    
    return (
    <div>
        <MenuIcon width={50} height={50} style={{padding:'0.5rem'}} onClick={()=>setMenuOpen(prev=>!prev)}/>
        
        <SideBlock setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
    </div>
    );
}
