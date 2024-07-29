// * uzeyir-yariz {290720241958} * \\
// > {fetch}

fetch("json/user.json")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// * uzeyir-yariz {290720242045} * \\
