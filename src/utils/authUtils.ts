import bcrypt from 'bcryptjs'

const hashPassword = (password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) return reject(error)
            if(!salt) return new Error('Salt generation failed')

            bcrypt.hash(password, salt, (error, hash) => {
                if (error) return reject(error)
                if (!hash) return new Error('Hash generation failed')

                resolve(hash)
            })
        })
    })
}

export {
    hashPassword
}