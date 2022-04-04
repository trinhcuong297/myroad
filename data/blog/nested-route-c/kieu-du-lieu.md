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

### Kiểu dữ liệu logic

C cũng ngầm định một cách không tường minh **kiểu logic**:

- Sai (`false`): giá trị 0
- Đúng (`true`) : giá trị khác 0, thường là 1

### enum

`enum` là kiểu dữ liệu do người dùng định nghĩa, được sử dụng chủ yếu **để gán các tên** cho các hằng số, các tên giúp một chương trình dễ đọc và bảo trì.

Từ khóa `enum` được sử dụng để khai báo các kiểu liệt kê mới trong C:<br/>
`enum <tên enum> {<biến 1> = <giá trị 1> , <biến 2> = <giá trị 2>, <biến 3> = <giá trị 3> , ...}`

```c
#include<stdio.h>

enum week{Mon = 4, Tue = 3, Wed = 6, Thur = 7, Fri = 2, Sat = 1, Sun = 0};

int main() {
    printf("Chi so cua Thur la %d", Thur);
}
/*Kết quả:
Chi so cua Thur la 7
```

Các đặc điểm thú vị cần lưu ý về khởi tạo enum:

1. Hai biến enum có thể có cùng giá trị.

```c
enum ride { go = 1, stop = 1, left = 0, right = 0};
```

2. Nếu chúng ta không gán giá trị cho tên enum một cách rõ ràng, trình biên dịch theo mặc định gán giá trị bắt đầu từ 0. Ví dụ, trong chương trình C sau, sunday sẽ nhận giá trị 0, sunday được 1, v.v.

```c
#include <stdio.h>

enum day {sunday, monday, tuesday, wednesday, thursday, friday, saturday};

int main() {
    printf("Chi so cua sunday la %d\n",sunday);
    printf("Chi so cua friday la %d\n", friday);
    return 0;
}
/*Kết quả:
Chi so cua sunday la 0
Chi so cua friday la 5
```

3. Bạn có thể gán giá trị cho một số tên theo bất kỳ thứ tự nào. Tất cả các tên chưa được chỉ định sẽ nhận giá trị là giá trị của tên trước đó cộng với một.

```c
#include <stdio.h>

enum day {sunday = 1, monday, tuesday = 5, wednesday, thursday = 10, friday, saturday};

int main() {
    printf("%d %d %d %d %d %d %d", sunday, monday, tuesday, wednesday, thursday, friday, saturday);
    return 0;
}
/*Kết quả:
1 2 5 6 10 11 12
```

4. Giá trị được gán cho tên enum phải là một số hằng số nguyên.
5. Tất cả các hằng số enum phải là duy nhất trong phạm vi của chúng. Ví dụ, chương trình sau bị lỗi trong quá trình biên dịch:

```c
#include <stdio.h>

//Khai báo trùng 1 hằng số failed:
enum state  {working, failed};
enum result {failed, passed};

int main()  {
    return 0;
}
/*Kết quả:
[Error] redeclaration of enumerator 'failed'
[Note] previous definition of 'failed' was here
```

### typedef

Ngoài ra, bạn có thể tự định nghĩa kiểu dữ liệu bằng `typedef`:<br/>
`typedef <kiểu dữ liệu> <tên biến>`

```c
//ví dụ:
#include <stdio.h>
int main(){
    typedef int songuyen;    //Định nghĩa songuyen là kiểu dữ liệu int
    typedef int matran[5][4];    //Định nghĩa matran là kiểu dữ liệu mảng số nguyên 2 chiều 5 x 4

    //sau đó, ta có thể khai báo biến như sau:
    songuyen a;  //a sẽ có kiểu dữ liệu int
    matran x;  //x sẽ có kiểu dữ liệu mảng số nguyên 2 chiều 5 x 4, tương tự như khai báo int x[5][4]
}
```

### void

Kỹ hơn về `void` : Hàm trả về không có giá trị, Hàm không có tham số truyền vào, hoặc cả 2, hoặc là con trỏ kiểu void.

Tùy theo kích cỡ của số mà chúng ta sẽ quyết định kiểu dữ liệu gì sẽ được sử dụng!<br/>
Thường sử dụng nhất là kiểu số nguyên `int`, kiểu số thực `double` và kiểu kí tự `char`
