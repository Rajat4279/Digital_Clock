const date = () => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let meridiem = document.getElementById("meridiem");

  let mn = () => {
    if (h < 12) return "AM";
    else return "PM";
  };

  let check_hr = () => {
    if (h > 12) return h - 12;
    else return h;
  };

  if (check_hr() < 10) hours.innerHTML = `0${check_hr()}`;
  else hours.innerHTML = `${check_hr()}`;
  if (m < 10) minutes.innerHTML = `0${m}`;
  else minutes.innerHTML = `${m}`;
  if (s < 10) seconds.innerHTML = `0${s}`;
  else seconds.innerHTML = `${s}`;
  meridiem.innerHTML = `${mn()}`;
};

let t_id = setInterval(date, 1000);
