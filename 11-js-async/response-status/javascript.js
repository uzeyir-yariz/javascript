// * uzeyir-yariz {290720240941} * \\
// > {response-status}

const req = new XMLHttpRequest();

req.addEventListener("readystatechange", () => {
    if(req.readyState === 4 && req.status === 200){ 
        console.log(req.responseText)
    }
});

/* status/durum numaraları 
    * 404 : Not Found
        - Eğer linki değiştirirsem dosya bulunamaz ve 404 hatası verir.
    * 400 : Bad Request
        - Sunucu, istemcinin isteğini anlayamıyor veya işleyemiyor.
    * 200 : OK
        - İstek başarılı ve sunucu isteğe karşılık başarılı bir yanıt döndürüyor.
    * 500 : Internal Server Error
        - Sunucu, beklenmeyen bir durum nedeniyle isteği yerine getiremiyor.
    * 401 : Unauthorized
        - İstek yetkilendirme gerektiriyor ve istemci doğru kimlik bilgilerini sağlamamış.
    * 403 : Forbidden
        - İstemcinin isteği anlaşıldı ancak sunucu isteği gerçekleştirmeyi reddediyor.
    * 201 : Created
        - İstek başarılı oldu ve yeni bir kaynak oluşturuldu.
    * 204 : No Content
        - İstek başarılı oldu ancak döndürülecek içerik yok.
    * 301 : Moved Permanently
        - Kaynak kalıcı olarak yeni bir URL'ye taşındı.
    * 302 : Found
        - Kaynak geçici olarak farklı bir URL'de bulunabilir.*/

/* Server Errors (5xx)
    * 500 : Internal Server Error
        - Sunucu, beklenmeyen bir durum nedeniyle isteği yerine getiremiyor.
    * 501 : Not Implemented
        - Sunucu, istenen işlevi desteklemiyor veya uygulama yeteneğine sahip değil.
    * 502 : Bad Gateway
        - Sunucu, başka bir sunucudan geçerli bir yanıt alamadı.
    * 503 : Service Unavailable
        - Sunucu geçici olarak hizmet veremiyor; genellikle bakım veya yoğunluk nedeniyle.
    * 504 : Gateway Timeout
        - Sunucu, bir yanıt almak için başka bir sunucudan geç yanıt aldı.
    * 505 : HTTP Version Not Supported
        - Sunucu, istemcinin kullandığı HTTP protokolü sürümünü desteklemiyor.*/

req.open("GET", "https://jsonplaceholder.typicode.com/todos");
req.send();

// * uzeyir-yariz {date} * \\