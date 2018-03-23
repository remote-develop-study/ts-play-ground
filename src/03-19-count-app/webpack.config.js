// 모듈 정의하고 외부에 배포할 모듈을 전달해 모듈 정의?
module.exports  = {
  // messeage : 'webpack'
  entry : './count.ts',
  output:{
    path: __dirname + '/public',
    filename:'bundle.js'
  },
  devServer:{
    contentBase: __dirname + '/public'
  }
};




