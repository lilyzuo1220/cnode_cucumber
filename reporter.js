const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './reporter', //report.json所在的目录
	reportPath: './reporter/',//你想把报告生成在哪个目录
	metadata:{
        browser: {
            name: 'chrome',
            version: '62'
        },
        device: 'Local test machine',
        platform: {
            name: 'Mac',
            version: '10.12.9'
        }
    }
});