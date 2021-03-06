import importExpress from 'express'
import Functions from '../../functions'

export default
class RouterIphone {
    express: importExpress.Application
    func : Functions
    url = 'product/smartphone/iphone/'

    public constructor (express, func) {
      this.express = express
      this.func = func
      this.iphone()
      this.iphone7series()
      this.iphone8series()
      this.iphone11series()
      this.iphonexseries()
    }

    private iphone () {
      this.express.get('/iphone', (req, res) => {
        this.func.globalRender(req, res, this.url + 'iphone')
      })
    }

    private iphone7series () {
      this.express.get('/iphone7series', (req, res) => {
        this.func.globalRender(req, res, this.url + 'iphone7series')
      })
    }

    private iphone8series () {
      this.express.get('/iphone8series', (req, res) => {
        this.func.globalRender(req, res, this.url + 'iphone8series')
      })
    }

    private iphone11series () {
      this.express.get('/iphone11series', (req, res) => {
        this.func.globalRender(req, res, this.url + 'iphone11series')
      })
    }

    private iphonexseries () {
      this.express.get('/iphonexseries', (req, res) => {
        this.func.globalRender(req, res, this.url + 'iphonexseries')
      })
    }
}
