---
title: Cấu trúc một chương trình C
date: '2022-4-1'
tags: ['c', 'learn']
draft: false
summary: 'Một chương trình C thường được chia thành từng hàm, mỗi hàm đảm nhiệm một nhiệm vụ riêng...'
images: []
---

## Bộ từ vựng của C

Khi code C, chúng ta chỉ dùng những kí tự dưới đây để viết, không nhiều hơn:

| Các bộ kí tự         | Chi tiết                                     |
| -------------------- | -------------------------------------------- |
| 26 chữ cái Latinh    | A,B,C,..a,b,c,... _(C phân biệt hoa/thường)_ |
| Các chữ số           | 0,1,2,3,4,5,6,7,8,9                          |
| Các kí hiệu toán học | + - \* / = < > ( )                           |
| Các kí tự đặc biệt   | . , : ; [ ] % # $ ' " \_ và dấu cách(space)  |

## Quy tắc đặt tên

Trong toán học, chúng ta thường có khái niệm biến và tham số, thường thì người ta sẽ đặt tên cho biến là x và tham số là m.
Trong lập trình cũng như vậy, để giải quyết 1 bài toán trong lập trình, chúng ta cũng cần các biến để lưu trữ dữ liệu và chúng ta cần đặt tên cho biến để có thể gọi biến a hay biến b ra dùng.

**Tên/Định danh** (_Identifier_) là một dãy kí tự dùng để chỉ một hàm, một biến, một kiểu dữ liệu,... Tên không được trùng với **từ khóa** (_key word_) bên dưới.

Trong C có những **từ khóa** (_key word_) được dùng để gọi hàm hay để khai báo các toán tử, kiểu dữ liệu,.. Những ký tự này chúng ta không được phép dùng để đặt tên cho biến :
const, enum, signed, struct, typedef, unsigned,...

```C
//Một số ví dụ về đặt tên trong C:
int a; //a là tên biến có kiểu dữ liệu là int (số nguyên)
void sum(){}; //sum là tên của hàm sum có kiểu dữ liệu trả về là void
```

## Cấu trúc chính của 1 chương trình C

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
