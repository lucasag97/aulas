import crypto from 'crypto'

const ENC_KEY = 'bf3c199c2470cb477d907b1e0917c17b'
const IV = 'qp8ybcpablf2e6rk'

export const encrypt = (string) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
    let encrypted = cipher.update(string, 'utf8', 'base64')
    encrypted += cipher.final('base64')
    return encrypted
}

export const decrypt = (encrypted) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV)
    let decrypted = decipher.update(encrypted, 'base64', 'utf8')
    return (decrypted + decipher.final('utf8'))
}