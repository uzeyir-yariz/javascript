// * uzeyir-yariz {260720240959} * \\
// > {clock}

const clock = document.getElementById("clock");

const tick = () => {
  const now = new Date();

  const hour = now.getHours();
  const min = now.getMinutes();
  const seconds = now.getSeconds();

  //   console.log(`${hour}:${min}:${seconds}`);

  const html = `
        <span> ${hour} : </span>
        <span> ${min} : </span>
        <span> ${seconds} </span>
    `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);

// * uzeyir-yariz {260720241007} * \\
