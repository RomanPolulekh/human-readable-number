module.exports = function toReadable (number) {
let stringNum=String(number);
let resultStr='';
if(stringNum.length===1)
{
    if(stringNum==='0') return 'zero'; 
    if(stringNum==='1') return 'one'; 
    if(stringNum==='2') return 'two'; 
    if(stringNum==='3') return 'three'; 
    if(stringNum==='4') return 'four'; 
    if(stringNum==='5') return 'five'; 
    if(stringNum==='6') return 'six'; 
    if(stringNum==='7') return 'seven'; 
    if(stringNum==='8') return 'eight'; 
    if(stringNum==='9') return 'nine'; 
}
if(stringNum.length===2)
{
    if(stringNum[0]==='1')
    {
    if(stringNum[1]==='0') resultStr=resultStr+'ten'; 
    if(stringNum[1]==='1') resultStr=resultStr+'eleven'; 
    if(stringNum[1]==='2') resultStr=resultStr+'twelve'; 
    if(stringNum[1]==='3') resultStr=resultStr+'thirteen'; 
    if(stringNum[1]==='4') resultStr=resultStr+'fourteen'; 
    if(stringNum[1]==='5') resultStr=resultStr+'fifteen'; 
    if(stringNum[1]==='6') resultStr=resultStr+'sixteen'; 
    if(stringNum[1]==='7') resultStr=resultStr+'seventeen'; 
    if(stringNum[1]==='8') resultStr=resultStr+'eighteen'; 
    if(stringNum[1]==='9') resultStr=resultStr+'nineteen'; 
    }
    if(stringNum[1]==='0') { 
    if(stringNum[0]==='2') return 'twenty'; 
    if(stringNum[0]==='3') return 'thirty'; 
    if(stringNum[0]==='4') return 'forty'; 
    if(stringNum[0]==='5') return 'fifty'; 
    if(stringNum[0]==='6') return 'sixty'; 
    if(stringNum[0]==='7') return 'seventy'; 
    if(stringNum[0]==='8') return 'eighty'; 
    if(stringNum[0]==='9') return 'ninety'; 
    } 
    if(stringNum[0]==='2') resultStr=resultStr+'twenty'; 
    if(stringNum[0]==='3') resultStr=resultStr+'thirty'; 
    if(stringNum[0]==='4') resultStr=resultStr+'forty'; 
    if(stringNum[0]==='5') resultStr=resultStr+'fifty'; 
    if(stringNum[0]==='6') resultStr=resultStr+'sixty'; 
    if(stringNum[0]==='7') resultStr=resultStr+'seventy'; 
    if(stringNum[0]==='8') resultStr=resultStr+'eighty'; 
    if(stringNum[0]==='9') resultStr=resultStr+'ninety'; 
    if(stringNum[0]!=='1')
    {
    if(stringNum[1]==='1') resultStr=resultStr+' one'; 
    if(stringNum[1]==='2') resultStr=resultStr+' two'; 
    if(stringNum[1]==='3') resultStr=resultStr+' three'; 
    if(stringNum[1]==='4') resultStr=resultStr+' four'; 
    if(stringNum[1]==='5') resultStr=resultStr+' five'; 
    if(stringNum[1]==='6') resultStr=resultStr+' six'; 
    if(stringNum[1]==='7') resultStr=resultStr+' seven'; 
    if(stringNum[1]==='8') resultStr=resultStr+' eight'; 
    if(stringNum[1]==='9') resultStr=resultStr+' nine'; 
    }
}
if(stringNum.length===3)
{ 


    if(stringNum[0]==='1') resultStr=resultStr+'one hundred'; 
    if(stringNum[0]==='2') resultStr=resultStr+'two hundred'; 
    if(stringNum[0]==='3') resultStr=resultStr+'three hundred'; 
    if(stringNum[0]==='4') resultStr=resultStr+'four hundred'; 
    if(stringNum[0]==='5') resultStr=resultStr+'five hundred'; 
    if(stringNum[0]==='6') resultStr=resultStr+'six hundred'; 
    if(stringNum[0]==='7') resultStr=resultStr+'seven hundred'; 
    if(stringNum[0]==='8') resultStr=resultStr+'eight hundred'; 
    if(stringNum[0]==='9') resultStr=resultStr+'nine hundred';
    
    if(stringNum[1]==='1')
    {
    if(stringNum[2]==='0') resultStr=resultStr+' ten'; 
    if(stringNum[2]==='1') resultStr=resultStr+' eleven'; 
    if(stringNum[2]==='2') resultStr=resultStr+' twelve'; 
    if(stringNum[2]==='3') resultStr=resultStr+' thirteen'; 
    if(stringNum[2]==='4') resultStr=resultStr+' fourteen'; 
    if(stringNum[2]==='5') resultStr=resultStr+' fifteen'; 
    if(stringNum[2]==='6') resultStr=resultStr+' sixteen'; 
    if(stringNum[2]==='7') resultStr=resultStr+' seventeen'; 
    if(stringNum[2]==='8') resultStr=resultStr+' eighteen'; 
    if(stringNum[2]==='9') resultStr=resultStr+' nineteen'; 
    } 
    

    if(stringNum[1]==='2') resultStr=resultStr+' twenty'; 
    if(stringNum[1]==='3') resultStr=resultStr+' thirty'; 
    if(stringNum[1]==='4') resultStr=resultStr+' forty'; 
    if(stringNum[1]==='5') resultStr=resultStr+' fifty'; 
    if(stringNum[1]==='6') resultStr=resultStr+' sixty'; 
    if(stringNum[1]==='7') resultStr=resultStr+' seventy'; 
    if(stringNum[1]==='8') resultStr=resultStr+' eighty'; 
    if(stringNum[1]==='9') resultStr=resultStr+' ninety'; 

    if(stringNum[1]!=='1')
    {
    if(stringNum[2]==='1') resultStr=resultStr+' one'; 
    if(stringNum[2]==='2') resultStr=resultStr+' two'; 
    if(stringNum[2]==='3') resultStr=resultStr+' three'; 
    if(stringNum[2]==='4') resultStr=resultStr+' four'; 
    if(stringNum[2]==='5') resultStr=resultStr+' five'; 
    if(stringNum[2]==='6') resultStr=resultStr+' six'; 
    if(stringNum[2]==='7') resultStr=resultStr+' seven'; 
    if(stringNum[2]==='8') resultStr=resultStr+' eight'; 
    if(stringNum[2]==='9') resultStr=resultStr+' nine'; 
    }
    
}
return resultStr;
}
