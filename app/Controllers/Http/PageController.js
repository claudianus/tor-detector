'use strict'

const detectTor = require('detect-tor')

class PageController {
  async index({view, request}) {
    return view.render('main', {
      result: {
        query: request.ip(),
        tor: detectTor.isTor(request.ip())
      }
    })
  }
}

module.exports = PageController
