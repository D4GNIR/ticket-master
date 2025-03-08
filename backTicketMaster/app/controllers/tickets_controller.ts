import { HttpContext } from '@adonisjs/core/http'
import Ticket from '#models/ticket'
import db from '@adonisjs/lucid/services/db'

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
      const data = request.only(['title', 'description', 'status_id', 'assigned_to'])

      // Vérification que status_id existe
      const statusExists = await db.from('ticket_statuses').where('id', data.status_id).first()

      if (!statusExists) {
        return response.status(400).json({
          error: "Le statut spécifié n'existe pas",
        })
      }

      const ticket = await Ticket.create({
        ...data,
        createdBy: 1, // Idéalement, ceci devrait venir de l'utilisateur authentifié
      })

      await ticket.refresh()
      return response.status(201).json(ticket)
    } catch (error) {
      console.error('Erreur lors de la création du ticket:', error)

      // Gestion plus détaillée des erreurs
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        return response.status(400).json({
          error: "Erreur de référence: Vérifiez que le statut et l'assigné existent",
        })
      }

      return response.status(500).json({
        error: 'Une erreur est survenue lors de la création du ticket',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      })
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
