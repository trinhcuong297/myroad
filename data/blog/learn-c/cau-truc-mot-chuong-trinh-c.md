---
title: Cấu trúc một chương trình C
date: '2022-4-1'
tags: ['c', 'learnC']
draft: false
summary: 'Một chương trình C thường được chia thành từng hàm, mỗi hàm đảm nhiệm một nhiệm vụ riêng...'
images: []
---

> #### Mục lục
>
> - [Bộ kí tự của C](#s1)<br/>
> - [Cấu trúc chính của 1 chương trình C](#s2)<br/>

## Bộ kí tự của C<h1 id="s1"></h1>

Khi code C, chúng ta chỉ dùng những kí tự dưới đây để viết, không nhiều hơn:

| Các bộ kí tự         | Chi tiết                                     |
| -------------------- | -------------------------------------------- |
| 26 chữ cái Latinh    | A,B,C,..a,b,c,... _(C phân biệt hoa/thường)_ |
| Các chữ số           | 0,1,2,3,4,5,6,7,8,9                          |
| Các kí hiệu toán học | + - \* / = < > ( )                           |
| Các kí tự đặc biệt   | . , : ; [ ] % # $ ' " \_ { } space ,...      |

## Cấu trúc chính của 1 chương trình C<h1 id="s2"></h1>

```C
#include <stdio.h> //Khai báo thư viện sử dụng

int main(){
    int var = 19;     //khai báo biến var có kiểu dữ liệu là int và giá trị là 19
    printf("%d",var)  //câu lệnh in ra giá trị biến var
    return 0;         //câu lệnh trả về giá trị cho hàm main
} //Khai báo hàm main
```

Trên đây là cấu trúc chung của 1 chương trình C.
Một chương trình C thường được chia thành từng hàm (_Function_), mỗi hàm đảm nhiệm một nhiệm vụ riêng.
Khi hệ thống thực thi một chương trình C nhất định, hàm main sẽ là hàm đầu tiên được gọi và hệ thống chạy lần lượt từ đầu đến cuối hàm main, các hàm khác nếu được gọi trong hàm main thì sẽ được thực thi không thì sẽ không được thực thi.

```c
//VD về hàm:
void func(){
    //trong này là các câu lệnh
}
```
