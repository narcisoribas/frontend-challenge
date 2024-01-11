"use client"

import styled from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'


const sairaStencil = Saira_Stencil_One({ 
 weight:['400'],
  subsets: ['latin'],


 })


interface headerProps{

}

const TagHeader = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px 160px;
`

const Logo = styled.a`
    color: var(--logo-color);

`

export function Header(props:headerProps){
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>Cappucino</Logo>
            <div></div>
        </TagHeader>
    )
}