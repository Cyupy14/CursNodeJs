exports.validPassword = module.exports.validPassword = function(password){
   if(password.length < 8){
       return false;
   }
   
   
    return true;
};