// * uzeyir-yariz {290720242049} * \\
// > {async-await}

const get_todos = async () => {
  try {
    let response = await fetch("json/user.json");

    if (response.status !== 200) {
      throw new Error("doğru endpoint atama yapmadınız");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

get_todos()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

// * uzeyir-yariz {290720242117} * \\
