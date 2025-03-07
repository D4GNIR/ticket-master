import { HttpContext } from '@adonisjs/core/http'
import Ticket from '#models/ticket'

export default class TicketsController {
  // Liste tous les tickets
  async index({ response }: HttpContext) {
    const tickets = await Ticket.query().preload('status').preload('creator').preload('assignee')
    return response.json(tickets)
  }

  // Récupère un ticket spécifique
  async show({ params, response }: HttpContext) {
    const ticket = await Ticket.query()
      .where('id', params.id)
      .preload('status')
      .preload('creator')
      .preload('assignee')
      .firstOrFail()
    return response.json(ticket)
  }

  // Crée un nouveau ticket
  async store({ request, response }: HttpContext) {
    try {
      console.log('Received request:', request.body()) // Log de la requête reçue

      const data = request.only(['title', 'description', 'status_id', 'assigned_to'])
      console.log('Filtered data:', data) // Log des données filtrées

      const ticket = await Ticket.create({
        ...data,
        createdBy: 1,
      })

      console.log('Created ticket:', ticket) // Log du ticket créé

      await ticket.refresh()
      return response.status(201).json(ticket)
    } catch (error) {
      console.error('Error creating ticket:', error)
      return response.status(500).json({ error: error.message })
    }
  }

  // Met à jour un ticket
  async update({ params, request, response }: HttpContext) {
    const ticket = await Ticket.findOrFail(params.id)
    const data = request.only(['title', 'description', 'status_id', 'assigned_to'])
    await ticket.merge(data).save()
    await ticket.refresh()
    return response.json(ticket)
  }

  // Supprime un ticket
  async destroy({ params, response }: HttpContext) {
    const ticket = await Ticket.findOrFail(params.id)
    await ticket.delete()
    return response.status(204)
  }
}
