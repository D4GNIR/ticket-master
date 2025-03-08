import { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const data = request.only(['email', 'password', 'name'])

    try {
      // Vérifier si l'email existe déjà
      const existingUser = await User.findBy('email', data.email)
      if (existingUser) {
        return response.status(400).json({
          error: 'Cet email est déjà utilisé',
        })
      }

      // Hasher le mot de passe avec Hash (corrigé)
      const hashedPassword = await hash.make(data.password)

      // Créer le nouvel utilisateur
      const user = await User.create({
        email: data.email,
        name: data.name,
        password: hashedPassword,
        role: 'user',
      })

      return response.status(201).json({
        message: 'Inscription réussie',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      })
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error)
      return response.status(500).json({
        error: "Une erreur est survenue lors de l'inscription",
        details: error.message,
      })
    }
  }

  async login({ response, auth }: HttpContext) {
    try {
      const user = await auth.use('web').authenticate()

      return response.json({
        message: 'Connexion réussie',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      })
    } catch (error) {
      console.error('Erreur de connexion:', error)
      return response.status(401).json({
        error: 'Email ou mot de passe incorrect',
      })
    }
  }
}
