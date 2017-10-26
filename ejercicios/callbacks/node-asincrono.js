var fs = require('fs');
var data = fs.readFile('/etc/passwd', function(err, data){
    if (err) {
      throw err;
    }else{
      console.log(data);
    }
});
console.log('fin de programa');
