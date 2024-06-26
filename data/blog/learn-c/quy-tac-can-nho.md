---
title: Một vài quy tắc cần nhớ khi lập trình C
date: '2021-4-2'
tags: ['c', 'learnC']
draft: false
summary: 'Các quy tắc về viết câu lệnh trên 1 hay nhiều dòng, comment, thư viện, hàm'
images: []
tableOfContents: []
---

### Quy tắc 1: Các câu lệnh có thể viết trên nhiều dòng hoặc viết liền 1 dòng nhưng luôn phải được kết thúc bằng dấu `;`

Các câu lệnh có thể viết trên nhiều dòng với dấu `\` ở cuối mỗi dòng để báo hiệu 1 chuỗi kí tự vẫn còn tiếp tục ở dòng dưới.

```c
#include <stdio.h>

int main() {
    int a=3,b=4;
    printf("Hello %d\
    World!%d\n",a,b);
    printf("Hello %d\
World!%d",a,b);
    return 0;
}
//Kết quả thu được:
//Hello 3    World!4
//Hello 3World!4
```

Bạn cũng có thể viết nhiều câu lệnh liền 1 dòng miễn là cuối mỗi câu lệnh có dấu `;`

```c
#include <stdio.h>

int main() {
    int a=3,b=4;printf("Hello %dWorld!%d\n",a,b);return 0;
}
//Kết quả thu được:
//Hello 3World!4
```

### Quy tắc 2: Viết comment

Comment là những lời chú thích trong code để code của bạn rõ ràng và dễ hiểu hơn, khi chạy chương trình, những gì có trong comment sẽ bị bỏ qua.

```c
//Đây là comment 1 dòng code

/*Đây là
comment

nhiều dòng code*/

printf("Hello"); //Comment phần còn lại của dòng code này
```

Việc comment là rất quan trọng, đặc biệt khi làm việc với dự án có đến hàng chục ngàn dòng code thì comment sẽ giúp bạn và người khác khi đọc hiểu được tác dụng của dòng code được comment là để làm gì. Ví dụ:

```c
//Đoạn code bên dưới giúp in ra giá trị của a
int a=5;
printf("%d",a);
```

Đôi khi bạn cũng có thể comment lại những đoạn code đang không muốn nó chạy nhưng lại chưa muốn xóa.Ví dụ:

```c
int a=5;
// a=6
printf("%d",a);

//Kết quả in ra:5
```

### Quy tắc 3: Sử dụng thư viện

Với mỗi một câu lệnh, chúng sẽ được chứa trong 1 thư viện, ví dụ hàm `printf()` được chứa trong thư viện `stdio.h`. Muốn dùng hàm `printf()`, chúng ta phải gọi thư viện `stdio.h` ở đầu chương trình: `#include <stdio.h>`.

### Quy tắc 4: Chỉ có 1 hàm main trong chương trình

Trong 1 chương trình chỉ được phép có 1 hàm chính là hàm `main`.

## Quy tắc đặt tên

Trong toán học, chúng ta thường có khái niệm biến và tham số, thường thì người ta sẽ đặt tên cho biến là x và tham số là m.
Trong lập trình cũng như vậy, để giải quyết 1 bài toán trong lập trình, chúng ta cũng cần các biến để lưu trữ dữ liệu và chúng ta cần đặt tên cho biến để có thể gọi biến a hay biến b ra dùng.

**Tên/Định danh** (_Identifier_) là một dãy kí tự dùng để chỉ một hàm, một biến, một kiểu dữ liệu,... Tên không được trùng với **từ khóa** (_key word_) bên dưới.

Trong C có những **từ khóa** (_key word_) được dùng để gọi hàm hay để khai báo các toán tử, kiểu dữ liệu,.. Những ký tự này chúng ta không được phép dùng để đặt tên cho biến :
(**thường thì những từ khóa này bạn không cần nhớ, nhớ dòng bên trên là được**)

```c
auto       break      case         char
const      continue   default      do
int        long       register     return
short      signed     sizeof       static
struct     switch     typeof       union
unsigned   void       volatile     while
double     else       enum         extern
float      for        goto         if
```

```C
//Một số ví dụ về đặt tên trong C:
int a; //a là tên biến có kiểu dữ liệu là int (số nguyên)
void sum(){}; //sum là tên của hàm sum có kiểu dữ liệu trả về là void
```
