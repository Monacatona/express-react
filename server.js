


const express  = require('express');



const app = express();



app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'jhon', lastName:'Crinch'},
        {id: 2, firstName: 'Charles', lastName:'Tostie'},
        {id: 3, firstName: 'Mike', lastName:'Moe'}

        
    ];
    res.json(customers);
});

const port = 5000;

app.listen( port, () => console.log(`Server starter on ${port}`));
