<!-- markdownlint-disable MD033 MD036 MD041 -->

<div align="center">

> ⚠️ Sangat disarankan untuk mengisi kuesioner dengan jujur, wahai mahasiswa. ⚠️

# lazystudent

Isi [kuesioner kinerja dosen ITATS](https://sim.itats.ac.id/krs/mutu/kuesioner) secara acak dan otomatis ⚡️

![preview](./preview.gif)

</div>

## Penggunaan

### Via browser console

- Akses halaman <https://sim.itats.ac.id/krs/mutu/kuesioner>
- Buka dev tools browser
- Copy paste script dan jalankan di console dev tools

### Via bookmarklet (hanya browser desktop)

- Buat bookmark dengan [tautan pada bagian bookmarklet](#bookmarklet)
- Akses halaman <https://sim.itats.ac.id/krs/mutu/kuesioner>
- Klik bookmark tautan yang sebelumnya disimpan

## Bookmarklet

**Acak**

```text
javascript:(()%3D%3E%7Bdocument.querySelectorAll(%22div.radio%22).forEach(x%3D%3E%7Br%3DMath.random()%3Bc%3Dr%3C.3%3F%22Sangat%20Baik%22%3Ar%3C.6%3F%22Baik%22%3A%22Cukup%22%3Bx.querySelector(%60input%5Btype%3Dradio%5D%5Bvalue%3D'%24%7Bc%7D'%5D%60).click()%7D)%7D)()
```

**Semua baik**

```text
javascript:(()%3D%3E%7Bdocument.querySelectorAll(%22div.radio%22).forEach(x%3D%3Ex.querySelector(%22input%5Btype%3Dradio%5D%5Bvalue%3DBaik%5D%22).click())%7D)()
```

## Script

[**index.js**](./index.js)

```js
document.querySelectorAll("div.radio").forEach((step) => {
  var rand = Math.random();
  var choice = rand < 0.3 ? "Sangat Baik" : rand < 0.6 ? "Baik" : "Cukup";
  step.querySelector(`input[type=radio][value='${choice}']`).click();
});
```

[**index.min.js**](./index.min.js) (minified)

<!-- prettier-ignore-start -->
```js
document.querySelectorAll("div.radio").forEach(x=>{r=Math.random();c=r<.3?"Sangat Baik":r<.6?"Baik":"Cukup";x.querySelector(`input[type=radio][value='${c}']`).click()})
```
<!-- prettier-ignore-end -->

[**semua-baik.js**](./semua-baik.js)

```js
document.querySelectorAll("div.radio").forEach((step) => {
  step.querySelector("input[type=radio][value='Baik']").click();
});
```

[**semua-baik.min.js**](./semua-baik.min.js) (minified)

<!-- prettier-ignore-start -->
```js
document.querySelectorAll("div.radio").forEach(x=>x.querySelector("input[type=radio][value=Baik]").click())
```
<!-- prettier-ignore-end -->
