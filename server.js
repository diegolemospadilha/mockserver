const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/v1/tokens/cards', (req, res) => {
  res.jsonp({ numberToken: '88f466c4-d17a-4430-952f-2a44bdb98525' })
})

server.post('/v1/payments', (req, res) => {
    res.jsonp({ 
        paymentAuthorization: {
            returnCode: '0',
            description: 'Sucesso',
            paymentId: '020080286103040952150000006201850000000000',
            authorizationCode: '043711',
            orderNumber: '0000000001',
            expireAt: '2019-09-24T13:20:52.8775511-03:00',
            amount: 1035,
            releaseAt: '2019-09-24T13:20:52.877545-03:00',
            nridElo: 'E13MAR253651340'
     }})
  })

server.use(router)
server.listen(3905, () => {
  console.log('JSON Server is running')
})