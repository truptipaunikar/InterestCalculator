function calculate(){
 let principleamt = document.getElementById('principle-amt').value 
 let rateofint = document.getElementById('rate-of-int').value
 let timespan = document.getElementById('time-span').value
 document.getElementById('your-amt').innerHTML=(principleamt*rateofint+timespan)/100
 document.getElementById('your-rate').innerHTML=(principleamt*rateofint*timespan)/100
 document.getElementById('your-timespan').innerHTML=(billamt*rate*timespan)/100+ parseInt(billamt)
}
function refresh(){
    window.location.reload('refresh')
}