import {AppBar} from 'components/AppBar/AppBar'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledContainer } from './Layout.styled';


export const Layout = () => {
    return (
        <StyledContainer>
            <AppBar/>
            <main>
                <div>
                    <Suspense fallback = {<div>Loading</div>}>
                        <Outlet/>
                    </Suspense>
                </div>
            </main>
            <footer></footer>
        </StyledContainer>
    )
}

