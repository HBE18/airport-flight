Hasan Bey merhaba,

Back-End development özelinde hazırlanan görevi ve detaylarını aşağıda bulabilirsiniz. Schiphol havalimanını baz alarak uçuş rezervasyonu yapabilmemizi sağlayacak bir uygulama bekliyoruz. Bunun için gerekli API kullanımı ile ilgili açıklamaları da eposta içeriğinde bulabilirsiniz.

Belirlenen süre içerisinde bu görevin tamamlanmasını ve sonunda Github üzerinden bizimle paylaşılmasını bekliyoruz. Repository’nin public olması durumunda, içerisinde ‘Armon’ ve ilişkili isimlerin geçmemesi iyi olacaktır. Projenin 15 Mayıs 2022 saat 23:00’a kadar teslimini bekliyoruz.

Görevle ve detayları ile ilgili herhangi bir noktada sorun olması durumunda veya mevcut çalışma durumunuza uyumu açısından süre ile ilgili bir uzatma talebinde Ender Bey’le iletişime geçebilirsiniz.

Uygulama özellikleri (beklenen endpointler):
- Schiphol Havalimanına ait API kullanılarak bu havalimanı için uçuşlar listelenebilmelidir.  // flight endpointine istek atmak
- Tarih ve hareket yönüne göre uçuşlar filtrelenebilmelidir.     // isteği spesifik parametreler ile atmak
- Gelecek tarihli giden (Departure) uçuşlar için kullanıcı rezervasyon yapabilmelidir. // Rezervasyon?? nasıl
- Rezervasyon sırasında kullanıcı basit bir şekilde koltuk seçimi yapabilmelidir. // Rezervasyon içinde koltuk seçenekleri verilip 
- Koltuk seçiminde uçak kapasitesi gözardı edilebilir.
- Kullanıcı geçmiş ve gelecek uçuşlarını listeleyebilmeli ve uçuş detaylarını sorgulayabilmelidir.
- (opsiyonel) Verilerin listelenmesi için optimizasyon seçenekleri göz önünde bulundurulabilir. (cache/db)

Arayüz özellikleri
- Tercihe göre sunucu uygulaması ile etkileşim için komut satırı arayüzü ya da postman koleksiyonu sağlanabilir.
Kodlama beklentileri
- Geliştirme dili olarak Typescript tercih edilmekle birlikte, Javascript kullanılabilir. 
- Typescript standartları ile uyumlu, açık ve anlaşılır bir mimari beklenmektedir.
- Veritabanı olarak postgresql kullanılması önerilmektedir. Başka bir veritabanı sistemi kullanılması halinde gerekli kurulum adımlarının da paylaşılması beklenmektedir.
- Kodun derlenebilir olması gerekmektedir.
- Kod saklama ve paylaşamı için Github üzerinden açılacak bir repository kullanılabilir.
- Uygulama ile ilgili açıklamalar için dokümanın [README.md] projede sağlanması gerekmektedir. Varsa minimum gereksinimler, derleme öncesi sağlanması gereken ön koşullar ile geliştirme ve uygulama kullanım detaylarının bu dokümanda yeterli düzeyde sağlanmasını bekliyoruz.
API kullanımı
Schiphol havalimanına ait API kullanılarak talep edilen fonsiyonların uygulamaya entegre edilmesi gerekmektedir. Bunun için öncelikle "https://developer.schiphol.nl" adresinden ücretsiz bir hesap oluşturulmalıdır. Ardından Flight V4 API için elde edilen Application Id ve Application Key istekler için kullanılabilir. 
 
Flight API kullanımına dair dokümana aşağıdaki linkten ulaşılabilir;
https://developer.schiphol.nl/apis/flight-api/overview?version=latest
Bunların dışında yapılacak uçuş listesinde ek filtreleme seçenekleri, API tarafından sağlanan bilgiler kapsamında sunulacak ek bilgiler, listeleme uçları için optimizasyon seçenekleri (cache/db) bonus olarak değerlendirilecektir.
