module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/oauth2.0': {
                target: 'https://nid.naver.com'
            }
        }
    }

}
//proxy는 중개인, 브라우저가 있고 proxy라는 중계서버가 있는데 대신 요청해주고 결과를 리턴해준다.