export default {

    setMethods (Notificacion, User) {

        Notificacion.findAllBySender = function (id) {
            return Notificacion.findAll({
                where:  { id_user_receptor: id },
                include: [
                    {
                        model: User,
                        as: 'userEmisor',
                        attributes: ['username', 'email']
                    },
                    {
                        model: User,
                        as: 'userReceptor',
                        attributes: ['username', 'email']
                    }
                ]
            })
        }
        
        Notificacion.findAllByReceiver = function (id) {
            return Notificacion.findAll({
                where:  { id_user_emisor: id },
                include: [
                    {
                        model: User,
                        as: 'userEmisor',
                        attributes: ['username', 'email']
                    },
                    {
                        model: User,
                        as: 'userReceptor',
                        attributes: ['username', 'email']
                    }
                ]
            })
        }
        
        Notificacion.find = function (filters) {
            return Notificacion.findAll({
                where:  filters,
                include: [
                    {
                        model: User,
                        as: 'userEmisor'
                    },
                    {
                        model: User,
                        as: 'userReceptor'
                    }
                ]
            })
        }
    }
}