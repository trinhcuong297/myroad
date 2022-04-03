---
title: Kiểu dữ liệu trong lập trình C
date: '2022-4-2'
tags: ['c', 'learnC']
draft: false
summary: 'Các kiểu dữ liệu trong lập trình C'
images: []
---

### Trong C có các kiểu dữ liệu sau đây:

| Type            | Size(bytes) | Format Specifier | Phạm vi                                                                  |
| --------------- | ----------- | ---------------- | ------------------------------------------------------------------------ |
| `int`           | 2 hoặc 4    | %d, %i           | Số nguyên **-32,768 -> 32,767** hoặc **-2,147,483,648 -> 2,147,483,647** |
| `unsigned int`  | 2 hoặc 4    | %u               | Số nguyên **0 -> 65,535** hoặc **0 -> 4,294,967,295**                    |
| `short`         | 2           | %d               | Số nguyên **-32,768 -> 32,767**                                          |
| `long`          | 8           | %ld, %li         | Số nguyên từ **-9223372036854775808 -> 9223372036854775807**             |
| `unsigned long` | 8           | %lu              | Số nguyên từ **0 -> 18446744073709551615**                               |
| `float`         | 4           | %f               | Số thực **1.2E-38 -> 3.4E+38**<br/>Chính xác đến 6 chữ số thập phân      |
| `double`        | 8           | %lf              | Số thực **2.3E-308 -> 1.7E+308**<br/>Chính xác đến 15 chữ số thập phân   |
| `long double`   | 10          | %Lf              | Số thực **3.4E-4932 to 1.1E+4932**<br/>Chính xác đến 19 chữ số thập phân |
| `char`          | 1           | %c hoặc %d       | Kí tự(theo bảng ASCII) hoặc (-128 đến 127 hoặc 0 đến 255)                |
| `signed char`   | 1           | %c hoặc %d       | Kí tự(theo bảng ASCII) hoặc (0 đến 255)                                  |
| `unsigned char` | 1           | %c hoặc %d       | Kí tự(theo bảng ASCII) hoặc (-128 tới 127)                               |
| `enum`          |             |                  | là kiểu dữ liệu người dùng tự định nghĩa                                 |
| `typedef`       |             |                  | là kiểu dữ liệu người dùng tự định nghĩa                                 |
| `void`          |             |                  | là kiểu dữ liệu xác định không có giá trị nào                            |

_Kỹ hơn về `void` : Hàm trả về không có giá trị, Hàm không có tham số truyền vào, hoặc cả 2, hoặc là con trỏ kiểu void._

Tùy theo kích cỡ của số mà chúng ta sẽ quyết định kiểu dữ liệu gì sẽ được sử dụng!<br/>
Thường sử dụng nhất là kiểu số nguyên `int`, kiểu số thực `double` và kiểu kí tự `char`
