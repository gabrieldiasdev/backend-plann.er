import fastify from 'fastify'
import cors from '@fastify/cors'
import { createTrip } from './routes/create-trip'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { confirmTrip } from './routes/confirm-trip'
import { confirmParticipants } from './routes/confirm-participant'
import { createActivity } from './routes/create-activity'
import { createLink } from './routes/create-link'
import { getActivities } from './routes/get-activities'
import { getLinks } from './routes/get-links'
import { getParticipants } from './routes/get-participants'
import { updateTrip } from './routes/update-trip'
import { getTripDetails } from './routes/get-trip-details'
import { getParticipant } from './routes/get-participant'
import { errorHandler } from './error-handler'
import { env } from './env'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(confirmParticipants)
app.register(confirmTrip)
app.register(createActivity)
app.register(createLink)
app.register(createTrip)
app.register(getActivities)
app.register(getLinks)
app.register(getParticipant)
app.register(getParticipants)
app.register(getTripDetails)
app.register(updateTrip)

app.listen({ port: env.PORT }).then(() => {
  console.log('Server running!')
})
