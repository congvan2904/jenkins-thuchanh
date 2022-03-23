const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(cors())
app.get('/', (req, res) => {
    res.send({
        message: 'thanh cong', status: 200, data:
            ['Reactnative',
                'ReactJs',
                'HTML',
                'Css',
                'Sass']

    })
})


app.listen(PORT, () => console.log(`Dang run ${PORT}`))
