---
title: Biến và hằng trong lập trình C
date: '2022-4-3'
tags: ['c', 'learnC']
draft: false
summary: 'Định nghĩa và cách sử dụng biến và hằng trong lập trình C'
images: []
---

### Biến và hằng là gì?

Trong lập trình, khi muốn lưu một giá trị dữ liệu nào đó, ta cần sử dụng biến hoặc hằng.<br/>
**Biến (variable)** thực chất là tên của 1 vùng trên bộ nhớ RAM, sử dụng khi ta cần lưu trữ 1 giá trị dữ liệu có thể thay đổi khi chương trình được thực thi.
<br/>Khai báo biến nghĩa là thông báo với trình biên dịch nơi và cách tạo lưu trữ cho biến đó. Khai báo biến xác định một kiểu dữ liệu và chứa danh sách của một hay nhiều biến của kiểu đó như sau:
<br/>`<kiểu dữ liệu> <tên>, <tên>, <tên>;`
<br/>Ta cũng có thể viết giá trị khởi tạo cho biến:
<br/>`<kiểu dữ liệu> <tên> = <giá trị khởi tạo>, <tên> = <giá trị khởi tạo>, <tên> = <giá trị khởi tạo>;`

```c
//Khởi tạo 3 biến số nguyên a,b,c và đặt giá trị khởi tạo cho biến a = 3
int a = 3 , b, c;    //Khai báo biến kiểu số nguyên a và khởi tạo giá trị cho a bằng 3
```

**Hằng (constant)** sử dụng khi ta cần lưu trữ 1 giá trị không thay đổi theo thời gian, ta sẽ không thể đặt lại giá trị của hằng theo bất cứ cách nào.<br/>
Để khai báo 1 hằng ta có thể dùng 2 cách:<br/>

- Sử dụng bộ tiền xử lý `#define` : `#define <tên hằng> <giá trị>`

```c
#include <stdio.h>

#define CHIEUDAI 15
#define CHIEURONG  12
#define NEWLINE '\n'

int main()
{
   int dientich;
   dientich = CHIEUDAI * CHIEURONG;

   printf("Dien tich hinh chu nhat la: %d", dientich);
   printf("%c", NEWLINE);
   printf("===========================\n");
   printf("Hoclaptrinh chuc cac ban hoc tot! \n");
   return 0;
}
/*Kết quả:
Dien tich hinh chu nhat la: 180
===========================
Hoclaptrinh chuc cac ban học tot!
```

- Sử dụng từ khóa `const` trong C: `const <kiểu dữ liệu> <tên> = <giá trị>`

```c
#include <stdio.h>

int main() {
    const float PI = 3.14;
    printf("Gia tri PI = %f", PI);
    return 0;
}
/*Kết quả:
Gia tri PI = 3.14
```

Nếu bạn cố gắng thay đổi giá trị của hằng số, compiler sẽ báo lỗi:

```c
#include <stdio.h>

int main()
{
    const a = 4;
    a=3;
    printf("%d",a);
    return 0;
}
/*Kết quả:
main.c:13:11: warning: type defaults to ‘int’ in declaration of ‘a’ [-Wimplicit-int]
   13 |     const a = 4;
      |           ^
main.c:14:6: error: assignment of read-only variable ‘a’
   14 |     a=3;
      |      ^
```

### Danh sách các hằng số trong C:

Bạn sẽ sử dụng những hằng số này khi khởi tạo giá trị cho hằng số.

#### Hằng số nguyên trong C

Giá trị hằng số nguyên có thể là hệ thập phân (decimal), hệ bát phân (octal) hoặc hệ thập lục phân (hexadecimal). Tiền tố (prefix) xác định cơ bản hay cơ số: 0x hay 0X cho kiểu hexadecimal (hệ 16), 0 cho octal (hệ 8), và không có gì là hệ thập phân.

Một giá trị hằng số có thể có phần hậu tố (suffix) là sự kết hợp của U và L, cho kiểu Unsigned và kiểu Long. Phần kết thúc có thể là chữ hoa hoặc chữ thường theo bất cứ thứ tự nào.

Ví dụ cho kiểu hằng số nguyên:

```c
212         /* la hop le */
215u        /* la hop le */
0xFeeL      /* la hop le */
078         /* Khong hop le: 8 khong la ky so trong he bat phan (octal) */
032UU       /* Khong hop le: ban khong the lap lai hau to (suffix) */
```

Các ví dụ khác với một vài cách khai báo với kiểu số nguyên:

```c
85         /* he thap phan */
0213       /* he bat phan (octal) */
0x4b       /* he thap luc phan (hexadecimal) */
30         /* int */
30u        /* unsigned int */
30l        /* long */
30ul       /* unsigned long */
```

#### Hằng số thực trong C

Một hằng số thực dấu chấm động có một phần nguyên, một giá trị decimal, phần phân số và phần mũ. Bạn có thể biểu diễn giá trị dấu chấm động trong kiểu thập phân và kiểu phân số.

Khi biểu diễn giá trị với định dạng thập phân, bạn phải thêm phần integer, phần mũ hoặc cả hai. Phần mũ được viết bởi e hoặc E.

Ví dụ cho phần dấu chấm động:

```c
3.14159       /* Hop le */
314159E-5L    /* Hop le */
510E          /* Khong hop le: phan mu chua hoan thien */
210f          /* Khong hop le: khong co phan decimal va phan mu */
.e55          /* Khong hop le: thieu phan phan so va phan nguyen */
```

#### Hằng ký tự trong C

Phần ký tự được đóng mở trong dấu nháy đơn `'`, ví dụ `x` và có thể được lưu trữ trong một biến đơn giản kiểu char.

Một ký tự có thể là một ký tự thường (ví dụ `x`) hoặc chuỗi thoát (vd: `\t`), hoặc một ký tự phổ thông (vd: `\u02C0`).

Có những ký tự cụ thể trong C khi bắt đầu bằng dấu `\` sẽ có ý nghĩa đặc biệt và được dùng để biểu diễn dòng mới `\n`, tab mới `\t`. Dưới đây là danh sách các ký tự đặc biệt:

| Dãy thoát | Ý nghĩa                                    |
| --------- | ------------------------------------------ |
| \\        | Ký tự \                                    |
| \'        | Ký tự '                                    |
| \"        | Ký tự "                                    |
| \?        | Ký tự ?                                    |
| \a        | Tiếng chuông                               |
| \b        | Backspace                                  |
| \f        | Form feed                                  |
| \n        | Dòng mới                                   |
| \r        | Carriage return                            |
| \t        | tab ngang                                  |
| \v        | tab dọc                                    |
| \ooo      | Số trong cơ số 8 của 1 đến 3 chữ số        |
| \xhh      | Số thập lục phân của một hoặc nhiều chữ số |

Sau đây là ví dụ để chỉ một số ký tự dãy thoát:

```c
#include <stdio.h>

int main()
{
   printf("Hoc\tLap\tTrinh\tC\tTai\tHoclaptrinh\n\n");
   printf("===========================\n");
   printf("Hoclaptrinh chuc cac ban hoc tot! \n");
   return 0;
}
```

#### Hằng chuỗi trong C

Hằng chuỗi được bao với dấu ngoặc kép "". Một chuỗi bao gồm các ký tự tương tự với hằng ký tự: ký tự thuần, chuỗi thoát và ký tự phổ thông.

Bạn có thể chia các dòng dài thành nhiều dòng sử dụng các giá trị chuỗi và ngăn cách chúng bởi các khoảng trắng.

Dưới đây là một vài ví dụ với hằng số chuỗi. Ba chuỗi dưới đây có giá trị giống nhau:

```c
"hello, vietnam"

"hello, \

vietnam"

"hello, " "v" "ietnam"
```
