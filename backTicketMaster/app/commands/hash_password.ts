import { BaseCommand, args } from '@adonisjs/core/ace'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

export default class HashPassword extends BaseCommand {
  static commandName = 'hash:password'
  static description = "Hash le mot de passe d'un utilisateur"

  @args.string({ description: "Email de l'utilisateur" })
  declare email: string

  @args.string({ description: 'Nouveau mot de passe' })
  declare password: string

  async run() {
    try {
      const user = await User.findByOrFail('email', this.email)
      user.password = await hash.make(this.password)
      await user.save()
      this.logger.success('Mot de passe mis à jour avec succès')
    } catch (error) {
      this.logger.error('Erreur lors de la mise à jour du mot de passe')
      this.logger.error(error)
    }
  }
}
