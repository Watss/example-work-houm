import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Page from '../components/Page';
import FilterPokeComponent from '../components/home/FilterPokeComponent';
import ListPokeComponent from '../components/home/ListPokeComponent';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(0)
    },
    containerRoot: {
        paddingTop: theme.spacing(4),
       
    }
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <Page className={classes.root} title="Lista de Pokemones">
            <FilterPokeComponent></FilterPokeComponent>
            <Container className={classes.containerRoot}>
                <Grid container spacing={3}>
                    <Grid item
                        lg={12}
                        sm={12}
                        xl={12}
                        xs={12}
                    > 
                        <ListPokeComponent></ListPokeComponent>
                    </Grid>
                </Grid>
            </Container>
        </Page>
        
    );
}

export default Home;