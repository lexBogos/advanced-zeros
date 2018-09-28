module.exports = function getZerosCount(number, base) {
    let a = 0;
    let count = [];
    let b = 0;
    let f = base;
    let e = [];
//Ищем  простые числа из которого состоит данное
        for (let i = 2; i<=f; i++)
            {
            if (f%i == 0) 
                {
                e[e.length]=i
                f = f/i,  i=1                   
                if (f==1)
                    {break}
                }      
            }
//Из списка e получаем количество одинаковых простых чисел    
    let help_arr = []
    let z=1;
    
        for(let x = 0; x <= e.length; x++ ){
            if (e[x]==e[x+1])
                {
                z++
                } 
            else{
                help_arr[help_arr.length]=e[0]
                help_arr[help_arr.length]=z
                e=e.slice(z,)             
                x=-1    
                z=1
                }   
            }      
//Далее все как и в задаче zeros, необходимо лишь подставить из списка help_arr 
// в функцию  counter простые числа и разделить их на количество повторений этого числа в ряде e 
    for (i=0; i < help_arr.length; i=i+2){
        f=help_arr[i]
        while(number/Math.pow(f,b)>f) {b++}  
        a=Math.floor(number/f)
        function counter(a,b){
    	   if(b==0)
    		  {return 0}
    	   else
              {return a + counter(Math.floor(a/f), b-1)}
           }	
        count[count.length] = Math.floor(counter(a,b)/help_arr[i+1])
    }    
    count = count.sort(function(a, b) {
        return a - b;
        })
    return count[0]
    }

