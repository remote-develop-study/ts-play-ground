// 모듈 정의하고 외부에 배포할 모듈을 전달해 모듈 정의?
module.exports  = {
  // messeage : 'webpack'
  
  entry : './count.ts',
  output:{
    path: __dirname + '/public',
    filename:'bundle.js'
  },
  devServer:{
    hot:true,
    contentBase: __dirname + '/public'
  },
  module:{
    loaders:[
      {
        test:/\.ts$/,
        loader:'babel-loader',
        exclude:/node_modules/,
        query:{
          cacheDirectory: true,
          presets: ['es2015', 'ts']
        }
      }
    ]
  }
};




a