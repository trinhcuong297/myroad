---
title: Xuất dữ liệu trong lập trình C
date: '2022-4-5'
tags: ['c', 'learnC']
draft: false
summary: 'Các hàm xuất dữ liệu printf, fprintf, puts, putchar'
images: []
---

> #### Mục lục
>
> - [printf()](#s1)<br/>
> - [fprintf()](#s2)<br/>
> - [puts()](#s3)<br/>
> - [putchar()](#s4)<br/>
> - [sprintf()](#s5)<br/>

Trong C hay trong bất kì ngôn ngữ lập trình nào, chúng ta đều có 2 cách để nhập và xuất dữ liệu:

- Qua phương tiện nhập/xuất chuẩn (Input/Output)
- Qua các tệp tin
  Trong ngôn ngữ lập trình C, thư viện chuẩn cung cấp các hàm nhập và xuất và các hàm quản lý những dữ liệu này. Phương tiện nhập chuẩn thường là bàn phím và thư viện xuất chuẩn thường là màn hình (console). Nhập và xuất dữ liệu có thể hướng đến tập tin thay vì trên thiết bị nhập xuất chuẩn<span id="s1"></span>.

### printf()

Hàm `printf()` nằm trong thư viện `<stdio.h>` được sử dụng để xuất dữ liệu ra màn hình với cú pháp:

```c
printf ( *format, object1, object2, … );
```

- `object`: đối tượng (dữ liệu) cần xuất ra màn hình. Chúng ta có thể chỉ định một hoặc là nhiều đối tượng khác nhau và xuất chúng cùng lúc ra màn hình, và trong trường hợp có nhiều đối tượng thì cần phải đặt chúng cách nhau bởi dấu phẩy.
- `*format`: tập hợp chuỗi định dạng nhập xuất của các đối tượng cần xuất ra màn hình. Định dạng nhập xuất giúp chỉ định kiểu dữ liệu của đối tượng cần nhập vào, và dấu \* có ý nghĩa là số nhiều và có bao nhiêu đối tượng được chỉ định thì cũng sẽ có bấy nhiêu định dạng tương ứng được chỉ định.

_**Chuỗi định dạng format**_

```c
%[flags][width][.precision][length]specifier
```

Trong đó:

1. `flags` chứa các chỉ định có tác dụng căn chỉnh, thêm dấu , đệm số 0 v.v..

| flag  | Ý nghĩa                                 |
| ----- | --------------------------------------- |
| -     | Căn trái                                |
| +     | Thêm dấu cho số                         |
| 0     | Đệm số 0 cho đủ độ dài kết quả xuất     |
| space | Đệm dấu cách cho đủ độ dài kết quả xuất |
| #     | Chỉ định các xuất dữ liệu khác          |

2. `width`: độ dài tối thiểu của kết quả xuất
3. `.precision` : độ chính xác khi xuất số thực (số chữ số đằng sau dấu phẩy số thực sau khi làm tròn)
4. `specifier` là định dạng của chuỗi kết quả. [_xem thêm_](https://ccode.vercel.app/blog/nested-route-c/kieu-du-lieu)

```c
printf("abc");                 //abc
printf('abc');                 //Lỗi, cần phải đặt trong dấu " " như câu trên
printf("Hel\tlo\tWorld\n!");   //Hel     lo      World
                               //!

//Sử dụng specifier
printf("%d%s", 7, " chú lùn"); //7 chú lùn
printf("%f \t %e\n", 12.34, 56.7);               //12.340000         5.670000e+01
printf("float1=%f\tfloat2=%f", 12.34, 56.7);   //float1=12.340000    float2=56.700000

//Sử dụng %[flags][width][.precision]specifier
printf("[%10.3f]",12.6);  //[    12.600]     //không có flag, width = 10, .precision = .3 , specifier = f
printf("[%010.3f]",12.6); //[000012.600]     //flag = 0, width = 10, .precision = .3 , specifier = f
printf("[%-10.3f]",12.6); //[12.600    ]     //flag = -, width = 10, .precision = .3 , specifier = f
printf("[%+10.4f]",12.6); //[  +12.6000]     //flag = +, width = 10, .precision = .4 , specifier = f
```

Giá trị của hàm printf(): Khi thành công, hàm trả về số kí tự được in ra, thất bại trả về -1

```c
int c = printf("Gia tri ham printf")   //c=
```

<span id="s2"></span>

### fprintf()

Hàm `fprintf()` dùng để in dữ liệu ra máy in. Hàm này có cú pháp y như hàm `printf()`, chỉ khác là có thêm tham số `stdprn` để xác định thiết bị đưa ra là máy in:

```c
fprintf(stdprn, *format, object1, object2, … );
```

```c
#include <stdio.h>
int main()
{
    int c = printf("Gia tri ham printf: ");
    printf("%d",c);
    return 0;
}
/*Kết quả:
Gia tri ham printf: 20
```

<span id="s3"></span>

### puts()

`puts()` nằm trong thư viện `<stdio.h>`, có chức năng hiển thị (xuất) một chuỗi ký tự ra màn hình khi chạy chương trình C với cú pháp:

```c
puts(str);
// Với str là chuỗi ký tự (hoặc là biến chứa chuỗi ký tự) mà chúng ta cần xuất ra màn hình.
```

- Hàm `puts` không sử dụng chuỗi định dạng như hàm `printf()`
- Hàm `puts` tự động xuống dòng khi xuất xong kí tự

```c
#include <stdio.h>

int main()
{
  //Xuất trực tiếp chuỗi ký tự
  puts("Hello Vietnam");//Hello Vietnam

  //Gán chuỗi vào biến và xuất giá trị trong biến
  char str[20]="Hello world!!!!";

  puts(str);//Hello world!!!!

  //Sử dụng printf tương tự
  printf("%s", str);//Hello world!!!!
}
```

<span id="s4"></span>

### putchar()

Giống với `puts()` nhưng `puts()` được dùng để xuất chuỗi ký tự thì hàm `putchar()` trong C chỉ có thể dùng để xuất 1 ký tự ra màn hình khi chạy chương trình C mà thôi:

```c
putchar(/*char*/);
```

```c

#include <stdio.h>

int main()
{
  //Xuất trực tiếp chuỗi ký tự
  putchar('A');//A

  //Gán chuỗi vào biến và xuất giá trị trong biến
  char a = 'a';

  putchar(a);//a

  //Kết quả tượng tự khi dùng hàm printf
  printf("%c", a);//a
}
```

### sprintf()<h1 id="s5"></h1>

Hàm sprintf() trong C là một hàm có sẵn trong header file stdio.h, giúp chúng ta tạo tạo một chuỗi đầu ra từ các biến với kiểu và định dạng khác nhau với cú pháp:

```c
sprintf (str, *format, biến 1 , biến 2 , …);
```

- `str` là chuỗi ký tự được chuẩn bị để gán giá trị của các biến đã cho vào nó.
- `*format` và các đối số dùng như hàm `printf()`

Sau khi tạo chuỗi đầu ra từ hàm sprintf(), chúng ta có thể sử dụng hàm in printf() để xuất chuỗi này ra màn hình, với định dạng phù hợp.

Ví dụ, chúng ta sử dụng chuỗi str1, str2 và chr1 để tạo thành chuỗi str3, sau đó thì xuất chuỗi này ra màn hình như sau:

```c

#include <stdio.h>

int main(void) {
    char str1[] = "Hello";
    char str2[] = "World";
    char chr1 = '!';

    char str3[16];

    sprintf(str3, "%s %s%c\n", str1, str2, chr1);
    printf("%s", str3);

    return 0;
}
//Hello World!
```
