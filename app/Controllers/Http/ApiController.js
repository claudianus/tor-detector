'use strict'

const detectTor = require('detect-tor')

class ApiController {
  async json({request}) {
    return {
      query: request.ip(),
      tor: detectTor.isTor(request.ip())
    }
  }

  async jsonParam({params}) {
    return {
      query: params.ip,
      tor: detectTor.isTor(params.ip)
    }
  }
}

module.exports = ApiController
