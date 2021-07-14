'use strict'
let current = 2
const posts = [{
  user: "John Doe",
  title: "introduction to nothing",

}]
const postOptions ={
  schema:{
    body:{
      type: 'object',
      required:['user','title'],
      properties:{
        title:{type: 'string'},
        user:{type: 'string'},
      },
    },
    response:{
      201:{
      type:'object', 
       properties:{
        title:{type: 'string'},
        user:{type: 'string'},
       },
      },
    },
  },
}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.status(200).send(posts)
  })
  fastify.post('/',postOptions, async function (request, reply) {
    const {user,title } = request.body
    const newpost = {id: current,user, title}
    posts.push(newpost)
    current+=1
    reply.status(201)
    return newpost
  })
  fastify.get('/:id', async function(request,reply){
    try{
      const post = 
    }catch(err){

    }
  })
}
