# b15k3
Jawaban Soal Arkademy  Batch 15 Kloter 3

#### Oleh: Rayhan Emillul Fata

##### 1 - 5 menggunakan Javascript dapat deksekusi di https://es6console.com/ atau terminal menggunakan node (nama file).js

#### Kegunaan JSON pada REST API:
#####Sebagai format untuk mengirim dan meminta data pada REST API. Selain JSON format data transfer bisa berupa XML (eXtensible Markup Language) dan plain text, tetapi format data JSON lebih populer karena berukuran ringan dan formatnya lebih mudah untuk dibaca dan dimengerti.

#### Jawaban nomor 6-a:
##### Berupa query sql, arkademy.sql adalah query hasil dump utama, sedangkan 6a.sql query untuk inner join table

#### Jawaban nomor 6-b:
##### Bisa langsung di buka index.html menggunakan brwoser untuk melihat mockup

#### Jawaban nomor 6-c:
##### Membuat aplikasi POS sederhana, pertama perlu import query ke localhost query db ada di folder /6a/arkademy.sql setelah di import rubah lib/conn.js jika diperlukan

## Project setup
```
1. npm install --save
```
## run Node.js server
```
2. npm run start atau nodemon atau node app.js
```
```
3. Lalu bukalah browser anda dan ketikkan url; localhost:3600

### Menggunakan package EJS, nodemon, express, mysql



##### Struktur tabel db arkademy :
##### A. tabel "product":
Column | Type | Size
------------ | -------------| -------------
id | int | 128
name | Varchar | 128
price | int | 128
id_category | int | 128
id_cashier | int | 128

##### B. tabel "cashier":
Column | Type | Size
------------ | -------------| -------------
id | int | 128
name | Varchar | 128

##### C. tabel "category":
Column | Type | Size
------------ | -------------| -------------
id | int | 128
name | Varchar | 128