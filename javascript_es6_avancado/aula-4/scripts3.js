// EVENTEMITTER - Exclusivo do Node

    // Exemplo 1:
    const EventEmitter = require('events')

    class Users extends EventEmitter {
        usersLogged(data) {
            setTimeout(() => {
                this.emit('User logged', data)
            }, 2000)
            this.emit('User logged', data)
        }
    }

    const users = new Users()

    users.on('user logged', data => {
        console.log(data)
    })

    users.usersLogged({ user: 'Augusto Camargo'})

// emitter.emit('User logged', { user: 'Augusto Camargo'})