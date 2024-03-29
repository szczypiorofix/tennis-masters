import React from 'react';
import { Link } from 'react-router-dom';

import { Container, UnorderedList } from '../../shared/components';
import { Header } from '../../main-parts/header-component/Header';
import Navbar from '../../shared/components/navbar/Navbar';
import { AppContextType, viewNameResolve } from '../../types';
import AppContext from '../../context/AppContext';
import { Footer } from '../../main-parts/footer-component/Footer';
import { Main } from '../../main-parts/main-component/Main';

const Home: React.FC = () => {
    const { app, setView } = React.useContext(AppContext) as AppContextType;
    const renderList = (item: string, index: number): React.ReactElement => {
        return <li key={index}>{item}</li>;
    };
    const items: string[] = ['jeden', 'dwa'];
    return (
        <>
            <Header>
                <Navbar title={viewNameResolve(app.view)}></Navbar>
            </Header>
            <Main>
                <Container flex={true} flexDirection={'column'}>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Logowanie</Link>
                    <Link to="/register">Rejestracja</Link>
                </Container>
            </Main>
            <Footer>
                <UnorderedList items={items} renderItem={renderList} />
            </Footer>
        </>
    );
};

export default Home;
