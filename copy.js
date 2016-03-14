var fs = require('fs')
var fse = require('node-fs-extra')

// Get package metadata
var json = JSON.parse(fs.readFileSync('../datamaps/package.json', 'utf8'))

var directory = './scripts/' + json.version

// Remove directory with current files, if any
try {

	var stats = fs.statSync(directory)

	if ( stats.isDirectory() ) {
		fs.rmdirSync(directory)
	}
} catch(e) { console.log('No directory exists, not deleting') }

// Recreate it if necessary
fs.mkdirSync(directory)

fse.copySync('../datamaps/dist', directory)

console.log('Done')





