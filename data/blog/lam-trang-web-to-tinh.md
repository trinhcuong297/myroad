---
title: Làm 1 trang web tỏ tình 100% thành công
date: '2022-6-29'
tags: ['LoveWeb', 'tips']
draft: false
summary: '1 trang web tỏ tình để gửi cho bạn gái hay người yêu'
images: []
tableOfContents: [
'Các lệnh về file: di chuyển, tạo, xóa'
,'Các lệnh về kiểm tra, sửa mạng'
,'Các lệnh xem thông tin hệ điều hành, tắt máy, ra lệnh điều khiển'
,'Custom cmd'
]
---

## Trang web sẽ trông như nào?

Đầu tiên thì chúng ta cũng phải biết sản phẩm mình làm sẽ trông như nào chứ nhỉ?<br/>
Và nó đây: [web demo](https://justloveu.vercel.app/indexSample.html)

## Share code để anh em tự custom đây

[Code trên github](https://github.com/trinhcuong297/totinh/blob/master/indexSample.html)
[File HTML cho ae không dùng git](https://drive.google.com/file/d/1VKfiwnaeF5OpdkdLke6AZk_K737Q8ggs/view?usp=sharing)
Sau khi bạn xem web thì bạn cũng thấy được web này 100% thành công rồi. Và để các bạn tạo ra 1 web như vậy thì tự code sẽ khá mất thời gian. Bởi vậy mình code logic hộ các bạn luôn, các bạn lấy code [tại đây](https://github.com/trinhcuong297/totinh/blob/master/indexSample.html) và chỉnh những gì các bạn thích là được.

Hoặc là các bạn có thể tải file HTML về, `open with` với 1 trình soạn thảo code nào đấy, chỉnh sửa như hướng dẫn bên dưới này, xong rồi lưu lại và gửi cho "bạn" là được.

## Hướng dẫn chỉnh kịch bản và chèn ảnh vào web

Bạn sẽ tìm thấy phần chỉnh sửa dưới đây mình đặt ngay đầu code.

- Đổi kịch bản thành kịch bản của bạn tại biến `var kichban`
- Thay bằng lời tỏ tình của bạn tại biến `var loiToTinh = 'cái mà bạn muốn'`
- Thay lời xác nhận bằng lời xác nhận của bạn tại `var xacnhan = 'cái mà bạn muốn'`
- Thay tốc độ in chữ ra tại `var tocDo = tốc độ chữ in ra`
- Thay lời thông báo khi bạn ấy cố chấp chọn Không tại `var khiChonKhong = 'cái sẽ thông báo ra'`
- Đổi ảnh hiển thị sau khi cô ấy chọn có bằng cách đổi link ảnh tại `var linkImg = 'chèn link của bạn vào đây'`
- Bước cuối rồi :> đổi link vào mess để cô ấy nhắn với bạn tại: `var linkToMess = 'chèn link mess bạn vào'`

```js
<!-- Tên trang web -->
<title>Yêu Bảo bối</title>
<script>
    //Thay phần kịch bản bằng kịch bản của bạn
    var kichban = [
        ['Em à, anh có điều muốn nói','Anh nói đi'],
        ['Anh muốn hỏi em là:..','Đừng ngại, anh cứ nói đi :>']
    ]
    //Thay loiToTinh bằng lời tỏ tình của bạn
    var loiToTinh = 'Em có yêu anh không?'
    //Thay lời xác nhận bằng lời xác nhận của bạn
    var xacnhan = 'Anh cũng yêu em :>';
    //Tốc độ in chữ ra
    var tocDo = 50;
    //Khi chọn Không thì sẽ thông báo ra:
    var khiChonKhong = 'Đừng ngoan cố thế chọn nút kia đi!'
    //Link ảnh chèn vào web
    var linkImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVK-S8xykHgyr19sKMMCFOM3HBugLh1LaZA&usqp=CAU'
    //Link đến mess hay fb của bạn
    var linkToMess = 'https://www.facebook.com/profile.php?id=100031175888976'
</script>
```

## Dễ thế thôi, sau khi bạn làm xong thì gửi file html cho cô ấy hay deploy lên web để cô ấy dễ xem hơn đều được nha. Còn nếu chưa biết deploy lên kiểu gì thì dùng tạm cái web này nha [web demo](https://justloveu.vercel.app/indexSample.html)
