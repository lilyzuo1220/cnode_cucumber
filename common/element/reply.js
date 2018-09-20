module.exports = {
    link:{
        css:'#topic_list > div:nth-child(1) > div > a'
    },
    hyperlink:{
        css:'#reply_form  a.eicon-link'
    },
    hyperlink_title:{
        xpath:'/html/body/div[4]/div[2]/form/div[1]/div/input'
    },
    hyperlink_address:{
        xpath:'/html/body/div[4]/div[2]/form/div[2]/div/input'
    },
    hyperlink_submit:{
        css:'button.btn.btn-primary'
    },
    image:{
        xpath:'//*[@id="reply_form"]/div/div/div[1]/a[7]'
    },
    upload_image:{
        name:'file'
    },
    content:{
        css:'#reply_form .CodeMirror-scroll'
    },
    contentEditor:{
        css: 'div.CodeMirror-scroll > div:nth-child(2)'
    },
    replyBtn:{
        css: '#reply_form .submit_btn'
    },
    successMsg:{
        css: '.cell.reply_area.reply_item:last-child .markdown-text>p'
    },
    errorMsg:{
        css: 'strong'
    }
}