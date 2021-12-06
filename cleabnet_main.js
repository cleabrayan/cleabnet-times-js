'use strict'
const select=(slct)=>{
    return document.querySelector(slct)
}
const c_dy=select('.c_dy');
const c_dh=select('.c_dh');
const c_dm=select('.c_dm');
const c_ds=select('.c_ds')


const c_pb_yr=select('.c_pb_yr');
const c_pb_hr=select('.c_pb_hr');
const c_pb_mn=select('.c_pb_mn');
const c_pb_sc=select('.c_pb_sc');


const dest = new Date("jan 1, 2042 12:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = dest - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secounds = Math.floor((diff % (1000 * 60)) / 1000);
    if (hours == 0) {
      hours = '00';
    }
    if (minutes == 0) {
      minutes ='00';
    }
    if (days == 0) {
      days = "";
    } else if (days > 365) {
      days = Math.floor(days / 365) + " <span>years<span> ";
    } else {
      days = days + " <span>days</span> ";
    }

    c_dy.innerHTML=days;
    c_dh.innerHTML=hours+"<span>HOURS</span>";
    c_dm.innerHTML=minutes+"<span>MINUTES</span>";
    c_ds.innerHTML=secounds+"<span>SECONDS</span>";

    c_pb_hr.style.width=hours * 12.5 +"px";
    c_pb_mn.style.width=minutes * 5 +"px";
    c_pb_sc.style.width=secounds * 5 +"px";
}, 1000);