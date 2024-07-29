// * uzeyir-yariz {290720240932} * \\
// > {HTTP-request}

const req = new XMLHttpRequest();


/*
Value	State	Description

0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
*/

req.addEventListener("readystatechange", () => {
    // console.log(req, req.readyState)
    if(req.readyState === 4){ // 4 tüm işlemler bittiğinde 
        console.log(req.responseText)
    }
}); 

req.open("GET", "https://jsonplaceholder.typicode.com/todos");
req.send();

// * uzeyir-yariz {290720240940} * \\