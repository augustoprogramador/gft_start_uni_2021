// TRATAMENTO E EXCEÇÕES

    // TRADICIONAL

        class CustomError extends Error {
            constructor({message, data}) {
                super(message)
                this.data = data
            }
        }

        try {
            // console.log(name)
            const name = 'Augusto Camargo'

            // console.log('Keep going...')
            // const myError = new Error('Custom message')
            const myError = new CustomError({ 
                message: 'Custom message on custom error',
                data: {
                    type: 'Server error'
                }
            })
            throw myError
        } catch(err) {
            console.log('Error: ', err)
            console.log('Error: ', err.data)
            if (err.data.type === 'Server error') {

            } else {}
        } finally {
            console.log('Keep going...')
        }