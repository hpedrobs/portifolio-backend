// external
import { config } from 'dotenv'

// core
import { join } from 'path'

config({
    path: join(__dirname, '../..', '.env')
})
