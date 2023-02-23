import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const PrestacaoContas = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
      <div className='row'>
        <div className='section-title'>
          <h2>Prestação de contas</h2>
          <Card sx={{ minWidth: 50 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Conta Paga
              </Typography>
              <Typography variant="body2">
                <p>Veterinário: R$500,00</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='row'>
        </div>
        </div>
      </div>
    </div>
  )
}
