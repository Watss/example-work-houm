import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import { Grid } from '@material-ui/core';

const FilterPokeComponent = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3} direction="row"
  justify="center"
  alignItems="center">
                    <Grid item
                        lg={3}
                        sm={3}
                        xl={3}
                        xs={3}
                    > 
                        asdasd
                    </Grid>
                    <Grid item
                        lg={3}
                        sm={3}
                        xl={3}
                        xs={3}
                    > 
                        asdasd
                    </Grid>
                    <Grid item
                        lg={3}
                        sm={3}
                        xl={3}
                        xs={3}
                    > 
                        asdasd
                    </Grid>
                    <Grid item
                        lg={3}
                        sm={3}
                        xl={3}
                        xs={3}
                    > 
                        asdasd
                    </Grid>
                    
                </Grid>
            </CardContent>
        </Card>
    );
}

export default FilterPokeComponent;
