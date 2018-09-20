
let { defineSupportCode } = require('cucumber')
var fs = require('fs');
var path = require('path');
//截图时创建文件夹所需安装的包路径  https://www.npmjs.com/package/mkdirp
let mkdirp = require('mkdirp');

defineSupportCode(function ({ Before, After }) {
    Before(function () {
        this.driver.manage().window().maximize();
    })

    After(async function () {
        await this.driver.quit();
    })
    // After(async function (testcase) {
    //     console.log(testcase, testcase.result.status)
    //     //拿到当前日期并转化成数组 [ '2017-11-18', '21-56-00' ]
    //     let date = new Date().toLocaleString().replace(/:/g, '-').split(" ")
    //     let imagpath = path.join(__dirname, '../../screenshots/' + date[0]);
    //     //当文件夹不存在时创建一个以当前日期为名的文件夹
    //     if (!fs.existsSync(imagpath)) {
    //         mkdirp(imagpath)
    //     }
    //     //case failed的时候 截图，图片以当前时间+测试标题为名保存
    //     if (testcase.result.status !== "passed") {
    //         await this.driver.takeScreenshot().then(function (imagedata) {
    //             fs.writeFileSync(imagpath + '/' + date[1] + testcase.pickle.name + '.png', imagedata, 'base64');
    //         })
    //     }
    // })
})