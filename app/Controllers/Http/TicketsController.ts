 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import Ticket from 'App/Models/Ticket';

export default class TicketsController {

  public async index ({ view }: HttpContextContract) {
    const tickets = await Ticket.all();
    return view.render('tickets/index', { tickets: tickets });
  }

  public async show({ view, params }: HttpContextContract) {
    const ticket = await Ticket.find(params.id);
    return view.render('tickets/show', { ticket: ticket });
  }

}
