import React from 'react';
import {Grid, Pagination, Stack, Typography} from '@mui/material';
import { useNoticias } from '../hooks/useNoticias';
import { Noticia } from './Noticia';

export const ListadoNoticias = () => {
  const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias();
  console.log(noticias);
  const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
      <Typography textAlign={'center'} marginY={5} variant="h3" component={'h2'}>
        Ultimas noticias
      </Typography>
      <Grid container spacing={2} >

        { noticias.map( noticia => <Noticia key={noticia.url} noticia={noticia} />)}
      </Grid>
      <Stack spacing={2}  direction={'row'} justifyContent='center' alignItems={'center'} sx={{ marginY:5}}  >
        <Pagination count={totalPaginas} color='primary' onChange={handleChangePagina} page={pagina} ></Pagination>
      </Stack>

    </>
  );
};
