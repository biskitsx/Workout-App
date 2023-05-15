import jwt from 'jsonwebtoken'
import config from 'config'

class tokenManager {
    static async createToken(id: string): Promise<string> {
        const SECRET_TOKEN = config.get<string>("SECRET_TOKEN")
        const token = await jwt.sign({ id }, SECRET_TOKEN)
        return token
    }
}

export default tokenManager