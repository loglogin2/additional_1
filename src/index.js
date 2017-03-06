module.exports = function sum(...a)
{
    // your solution
    if( a.length == 0 ) {
        return 0;
    }
    var sum = 0 ;
    for( var i = 0 ; i < a.length ; i++ ){
        sum += a[i];
    }
    function summ(...b){
        for ( var i = 0 ; i < b.length ; i ++ ){
            sum += b[i];
        }
        return summ;
    }
    summ.toString = function(){
        return sum;
    }
    return summ;
}
