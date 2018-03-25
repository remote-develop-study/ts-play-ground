module.exports  = {
    entry : './count.ts',
    output:{
      path: __dirname + './',
      filename:'count.js'
    },
    devServer:{
      contentBase: __dirname + './'
    }
  };
  