//import { signIn } from 'next-auth/client';
//import { signIn } from 'next-auth/react';
import React from 'react';
//import {generateRandomString} from '../utils/class-code-generator';



export default function Profile2()
{
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    margin: '0'
  };
  return (
    <main style={mainStyle} >
        <div>This is a protected page and should only be access while logged in.</div>
    </main>     
  )
}