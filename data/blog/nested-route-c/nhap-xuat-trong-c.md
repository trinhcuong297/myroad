---
title: Nhập xuất dữ liệu trong lập trình C
date: '2022-4-4'
tags: ['c', 'learnC']
draft: false
summary: 'Cách nhập xuất dữ liệu trong lập trình C'
images: []
---

Trong lập trình C, để xuất dữ liệu ra màn hình hay nhập dữ liệu vào chương trình, ta cần sử dụng các hàm nhập và xuất trong C.

#### Để tạo lệnh input/output, chúng ta dùng các hàm printf(), scanf(), gets(), puts() , fprintf() , sprintf() , fscanf() và sscanf().

Lệnh scanf() lấy dữ liệu được nhập từ bàn phím, từ bắt đầu đến khi chạm đến khoảng trắng đầu tiên, kết thúc khi gặp kí tự xuống dòng(enter)
Lệnh printf() in ra dữ liệu.  
VD sử dụng scanf() và printf():

```c
#include <stdio.h>
int main()
{
    int testInt;
    printf("Enter an integer: ");
    scanf("%d", &testInt);
    printf("Number = %d", testInt);
    printf("Square of %d = %d", testInt, testInt*testInt)
    return 0;
}

// Kết quả:
// Enter an interger: 9
// Number = 9
// Square of 9 = 81
```

`gets()` lấy dữ liệu nhập vào kể cả khoảng trắng, nó dừng lại khi gặp kí tự xuống dòng(enter) <br/>
`puts()` được sử dụng để in chuỗi ra màn hình.

VD sử dụng gets() và puts()

```c
#include<stdio.h>

int main() {
    char name[50];
    printf("Enter your name: ");
    gets(name);
    printf("Your name is: ");
    puts(name);
    return 0;
}

/* Kết quả:
Enter your name: Trinh Cao Cuong
Your name is: Trinh Cao Cuong
```
