import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    transaction: Model,
  }, 

  seeds(server){
    server.db.loadData({
      transactions:[
        {
        id:1,
        title:'Freelance website',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAt: new Date('2021-02-12 9:00:00')
      },
      {
        id:2,
        title:'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 1100,
        createdAt: new Date('2021-02-14 11:00:00')
      }
    ]
    })
  },

  routes() {
      this.namespace = 'api'

      this.get('/transactions',()=>{
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request)=>{
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction',data)
      })
  },
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

