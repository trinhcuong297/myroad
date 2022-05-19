---
title: Các toán tử trong lập trình C
date: '2021-4-4'
tags: ['c', 'learnC']
draft: false
summary: 'Các toán tử có trong C và độ ưu tiên của từng toán tử'
images: []
---

> #### Mục lục
>
> - [Toán tử số học](#s1)<br/>
> - [Toán tử quan hệ](#s2)<br/>
> - [Toán tử logic](#s3)<br/>
> - [Toán tử bitwise](#s4)<br/>
> - [Toán tử gán](#s5)<br/>
> - [Toán tử khác](#s6)<br/>

<br id="s1"></br>

## Toán tử số học

| Toán tử | Ý nghĩa      | Kiểu dữ liệu                                     | Ví dụ                                                                                                                   |
| ------- | ------------ | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `-`     | Trừ; Đổi dấu | Kiểu số học <br/> (int, double, long, float,...) | 12 - 3 =9; -12.5; -(-a) =a                                                                                              |
| `+`     | Cộng         | Kiểu số học <br/> (int, double, long, float,...) | 1 + 2 =3; 2 + 3.5 =5.5; 12 + x                                                                                          |
| `*`     | Nhân         | Kiểu số học <br/> (int, double, long, float,...) | 2 _ 3 =6; 3 _ 4.5 =13.5                                                                                                 |
| `/`     | Chia         | Kiểu số học <br/> (int, double, long, float,...) | Nếu a,b cùng int thì kết quả ra int: 12 / 5 = 2<br/>Nếu có ít nhất 1 số float thì kết quả ra dạng float: 12 / 5.0 = 2.4 |
| `%`     | Chia lấy dư  | Số nguyên<br/>(int, short, long,..)              | 12 % 5 =2                                                                                                               |

<br id="s2"></br>

## Toán tử quan hệ

Các toán tử quan hệ `<`,`>`,`<=`,`>=`,`==`,`!=` dùng để so sánh giá trị 2 số, 2 biểu thức, đúng sẽ trả về `true hoặc giá trị bằng 1`, sai sẽ trả về `false hoặc giá trị bằng 0`:<br/>
|Toán tử|Ý nghĩa|Kiểu dữ liệu|Ví dụ<br/>int a = 3; float b = 6.5|
|-|-|-|-|
|`>`|So sánh lớn hơn|Số, biểu thức|`a > b` (trả về 0); `5 > 3` (trả về 1); `(12+3) > 15` (trả về 0)|
|`<` |So sánh nhỏ hơn|Số, biểu thức|`a < b` (trả về 1); `5 < 3` (trả về 0); `(12+3) < 15` (trả về 0)|
|`<=` |So sánh nhỏ hơn hoặc bằng|Số, biểu thức|`a <= b` (trả về 1); `5 <= 3` (trả về 0); `(12+3) <= 15` (trả về 1)|
|`>=` |So sánh lớn hơn hoặc bằng|Số, biểu thức|`a >= b` (trả về 0); `5 >= 3` (trả về 1); `(12+3) >= 15` (trả về 1)|
|`==` |So sánh bằng|Số, biểu thức|`a == b` (trả về 0); `3 == 3` (trả về 1); `(12+3) == 15` (trả về 1)|
|`!=` |So sánh khác<br/>(Nếu giá trị a khác b thì trả về 1, giống trả về 0)|Số, biểu thức|`a != b` (trả về 1); `3 != 3` (trả về 0); `(12+3) != 15` (trả về 0)|

<br id="s3"></br>

## Toán tử logic

| Toán tử | Ý nghĩa                                                                                                                | Kiểu dữ liệu | Ví dụ                                                                         |
| ------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------- |
| `&&`    | Logic Và<br/>Trả về `true hoặc 1` khi cả 2 biểu thức đều đúng<br/>Trả về `false hoặc 0` khi có ít nhất 1 biểu thức sai | Biểu thức    | `3<5 && 4<5` (trả về 1); `3>5 && 4<5` (trả về 0)                              |
| `!`     | Logic Phủ định<br/>Trả về `true hoặc 1` khi toán hạng sai<br/>Trả về `false hoặc 0` khi toán hạng đúng                 | Biểu thức    | `!false` (trả về 1); `!true` (trả về 0); `!3` (trả về 0); `!(2>3)` (trả về 1) |

`||` Logic Hoặc<br/>Trả về `true hoặc 1` khi có 1 biểu thức đúng<br/>Trả về `false hoặc 0` khi cả hai biểu thức sai<br/> Kiểu dữ liệu: Biểu thức<br/>Ví dụ: `3<5 || 4<5` (trả về 1); `3>5 || 4<5` (trả về 1); `3>5 || 4>5` (trả về 0)

<br id="s4"></br>

## Toán tử logic bit (bitwise)

<br id="s5"></br>

## Toán tử gán

Là toán tử sử dụng thường xuyên, gán giá trị của vế phải cho biến bên trái:

```c
int a = 5; //gán giá trị 5 cho a
int b = 10 / 5; //gán giá trị bằng 2 cho b
int c = a*b; //gán giá trị bằng a*b = 10 cho c
```

Biểu thức gán là biểu thức nên cũng có giá trị, giá trị của biểu thức gán bằng giá trị gán(giá trị vế phải)

```c
int a,b,c;
a = 10 / 5;
b = c = 20;   // có thể gán giá trị bằng 20 cho đồng thời cả b và c
a = (b = 10)*(c = 20);  //=200 (biểu thức gán cũng có giá trị, biểu thức gán 10 cho b có giá trị bằng 10, biểu thức gán 20 cho c có giá trị bằng 20)
```

| Toán tử | Ý nghĩa                                                                               | Kiểu dữ liệu  | Ví dụ<br/>int a = 3; float b = 7.5             |
| ------- | ------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------- |
| `=`     | Gán giá trị                                                                           | Số, biểu thức | `a = b` (gán giá trị bằng b cho a)             |
| `+=`    | Gán giá trị `a += b` ~ `a = a+b` <br/>(Nói cách khác, tăng giá trị của a thêm b)      | Số, biểu thức | `a+=3` (trả về a=6)                            |
| `-=`    | Gán giá trị `a -= b` ~ `a = a-b` <br/>(Nói cách khác, giảm giá trị của a đi b)        | Số, biểu thức | `a -= 1` (trả về a=2)                          |
| `*=`    | Gán giá trị `a *= b` ~ `a = a*b` <br/>(Nói cách khác,a bằng a nhân với b)             | Số, biểu thức | `a *= 3` (trả về a=9)                          |
| `/=`    | Gán giá trị `a /= b` ~ `a = a/b` <br/>(Nói cách khác,a bằng a chia với b)             | Số, biểu thức | `a /= 2` (trả về a=1); `b /= 3` (trả về b=2.5) |
| `%=`    | Gán giá trị `a %= b` ~ `a = a%b` <br/>(Nói cách khác,a bằng phần dư khi a chia cho b) | Số, biểu thức | `a %= 2` (trả về a=1); `b %= 3` (trả về b=1.5) |

<br id="s6"></br>

##
