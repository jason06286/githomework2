console.log('功能二')
function  bmiCaculate(height,weight){
    let bmi=Math.floor(weight/Math.pow((height/100),2)*100)/100 
    console.log(bmi)
}
bmiCaculate(178,80)