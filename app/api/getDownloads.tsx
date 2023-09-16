import {JSDOM} from 'jsdom'
import { NextApiRequest, NextApiResponse } from 'next'

const getDownloads = async (req: NextApiRequest,res: NextApiResponse) => {

// REcieve the input from the req body, parse from json
const body = JSON.parse(req.body)
const {input} = body

console.log('input', input)

const response = await fetch(`https://www.marketwatch.com/investing/index/${input.toLowerCase()}`)
const html = await response.text()

const dom = new JSDOM(html)
const document = dom.window.document

const downloads = document.querySelector('.value')?.textContent


// Send downloads back to client
res.status(200).json({downloads})
}

export default getDownloads