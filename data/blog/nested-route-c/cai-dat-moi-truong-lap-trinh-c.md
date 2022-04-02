---
title: Cài đặt môi trường lập trình C
date: '2022-4-1'
tags: ['c', 'learnC']
draft: false
summary: 'Cài đặt IDE để viết code hoặc dùng IDE online để code'
images: []
---

## Môi trường lập trình C

Môi trường lập trình C đơn giản là nơi bạn viết mã nguồn (source code), sau đó compiler sẽ biên dịch và chạy chương trình của bạn.

Trong đây, mình sẽ giới thiệu đến các bạn 2 cách: cài đặt hoặc dùng online IDE.

## Cài đặt IDE

#### 1. IDE Dev-C++ lập trình C/C++

![Dev-C++](https://a.fsdn.com/con/app/proj/orwelldevcpp/screenshots/devcpp5200.png/max/max/1)

Dev-C++ là một IDE khá thông dụng khi lập trình C/C++. Với Dev-C++, bạn chỉ cần tải về, ấn cài đặt và next liên tục cho đến khi cài xong.

[Link tải Dev-C++](https://sourceforge.net/projects/orwelldevcpp/)

[Link hướng dẫn chi tiết hơn](https://www.thegioididong.com/game-app/cach-tai-va-cai-dat-ide-dev-c-moi-nhat-compiler-c-1318620)

#### 2. IDE Visual Studio Code và MinGW lập trình C/C++

**_Bước 1: Cài đặt IDE_**

Bạn hãy chọn phiên bản VSCode phù hợp và tải về tại **[Visual Studio Code](https://code.visualstudio.com/)**

![VScode1](https://codelearn.io/Media/Default/Users/CWJ_5Fdelta33582/MyPic/01.png)

Sau khi tải về, bạn hãy chạy file cài đặt và next liên tục cho đến khi cài xong.

**_Bước 2: Cài đặt compiler và đặt biến môi trường_**

Bạn hãy tải MinGW về [tại đây](https://sourceforge.net/projects/mingw/)

Sau khi tải về các bạn sẽ click theo hướng dẫn:

![MGW1](https://codelearn.io/Media/Default/Users/J_2EDelta/MyPic/mingw.png)
![MGW2](https://codelearn.io/Media/Default/Users/J_2EDelta/MyPic/mingw2.png)
Bạn có thể thay đổi vị trí `Installation Directory` nhưng hãy nhớ vị trí `Installation Directory` nha, tí sẽ dùng đến nó đấy.
![MGW3](https://codelearn.io/Media/Default/Users/J_2EDelta/MyPic/mingw3.png)
![MGW4](https://codelearn.io/Media/Default/Users/J_2EDelta/MyPic/mingw4.png)
Ở đây bạn chọn `mingw32-base` và `mingw32-gcc-g++`.
![MGW5](https://codelearn.io/Media/Default/Users/J_2EDelta/MyPic/mingw5.png)
Đợi khi xong r thì `Close` và thoát ra.

Cuối cùng là đi đặt biến môi trường:
**Mở của số System**: Chuột phải vào biểu tượng `This PC` -> `Properties`, `Windows Settings` hiện ra, lướt xuống phần `related settings`, chọn `Advanced system settings`. Hoặc vào `Windows Search` gõ `Advanced system settings` -> `Environment Variables`.

Trong mục System variables, chọn `Path` -> `Edit`.

Chọn `New`. Tìm đường dẫn chứa thư mục `bin` của compile (thường đường dẫn mặc định là `C:\MinGW\bin`), copy, paste vào rồi nhấn OK.
![MINGWBIN](https://codelearn.io/Media/Default/Users/J_2EDelta/MyPic/varenron.png)

Để kiểm tra đã cài thành công hay chưa bạn mở Command Prompt và gõ:

```cmd
g++ --version
```

Nếu ra như dưới đây là ok:

```cmd
C:\Users\trinh>g++ --version
g++ (MinGW.org GCC-6.3.0-1) 6.3.0
Copyright (C) 2016 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

**_Bước 1: Cài đặt một vài extension hữu ích_**
Bạn tải extension **C/C++** của Microsoft về:

![c/c++](https://codelearn.io/Media/Default/Users/J_2EDelta/MyPic/ext.png)

Xong rồi tắt VSCode đi, nhớ là **tắt đi** để VSCode reset lại nhé.

Bạn cũng có thể cài thêm các extension auto compile (VD: C/C++ Compile Run - cho phép bạn ấn f6 là chương trình tự complie luôn)

## Dùng IDE online

Hiện nay có khá nhiều IDE online chạy C/C++ nhưng mình thấy những IDE online nhanh và tiện nhất là:

[Programiz – C Online editor and compiler](https://www.programiz.com/c-programming/online-compiler/)
Tốc độ phản hồi nhanh, không chỉ hỗ trợ C mà cũng hỗ trợ khá nhiều ngôn ngữ khác.
![PGMOE](https://www.troubleshootyourself.com/wp-content/uploads/2020/11/programiz-c.png)

[Online GB](https://www.onlinegdb.com/)
Tốc độ phản hồi tương đối tốt, tính năng debug tốt.
![Online GB](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/09/OnlineGDB.jpg)
