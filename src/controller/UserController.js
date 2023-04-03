import {Prismaclient} from "@prisma/client"

const prisma = new Prismaclient()

export default{
    async createUser(req, res) (
        try {
            const {name, email} = req.body;
            let user = await prisma.user.findUnique({where: {email}})

            if (user) {
                return res.json({error: "Já existe esse email"})
            }
            user = await prisma.user.create()
            data: {
                name,
                email,
            }
        } 
    )
}