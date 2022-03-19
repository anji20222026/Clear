const logger = require('./logger').Logger
const fastify = require('fastify')({ logger: true })
const fs = require('fs')

class RaceApp {
	public config
	constructor() {}
	//初始化
	init() {}
	//启动
	start() {
		console.log('start')
	}
	//加载配置
	loadconfig() {
		try {
			let rawdata = fs.readFileSync('config.json')
			config = JSON.parse(rawdata)
			console.log(config)
		} catch (error) {
			console.log(error)
		}
	}
}
exports.RaceApp = RaceApp
