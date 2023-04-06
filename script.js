let calculate=document.querySelector('.calculate')
calculate.addEventListener('click',(e)=>{
    let enteredDate=new Date(document.querySelector('.date').value)

    let inputeDate={
        year:enteredDate.getFullYear(),
        month:enteredDate.getMonth(),
        day:enteredDate.getDay()
    }
    let date=new Date()
    let d2=date.getDay()
    let m2=1+date.getMonth()
    let y2=date.getFullYear()
    let month=[31,28,31,30,31,30,31,31,30.31,30,31]

    if(inputeDate.day>d2){
        d2=d2+month[m2-1];
        m2=m2-1
    }
    if(inputeDate.month>m2){
        m2=m2+12;
        y2=y2-1
    }
    let d=d2-inputeDate.day;
    let m=m2-inputeDate.month;
    let y=y2-inputeDate.year;
    document.querySelector('.year').innerHTML=y;
    document.querySelector('.month').innerHTML=m;
    document.querySelector('.day').innerHTML=d;
}
)