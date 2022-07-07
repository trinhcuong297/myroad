---
title: Kiểu struct (kiểu cấu trúc) trong lập trình C
date: '2021-4-8'
tags: ['c', 'learnC']
draft: false
summary: 'Khai báo và sử dụng kiểu struct trong C'
images: []
tableOfContents: [
'Struct là gì và dùng làm gì',
'Khai báo và sử dụng kiểu Struct',
]
---

> #### Mục lục
>
> - [Struct là gì và dùng làm gì](#1)<br/>
> - [Khai báo và sử dụng kiểu Struct](#2)<br/> > <br id="1"></br>

## Struct là gì và dùng làm gì

`struct` (còn được gọi là kiểu cấu trúc) là một cách để nhóm một số biến có liên quan vào một nơi. Mỗi biến trong cấu trúc được biết đến như một thành viên của cấu trúc.

Không giống như một mảng , một cấu trúc có thể chứa nhiều kiểu dữ liệu khác nhau (int, float, char, v.v.).

Ví dụ khi bạn tạo 1 ứng dụng quản lý sinh viên, mỗi sinh viên đều có tên, có tuổi, có điểm, có trạng thái học/bỏ học,... Bạn có thể nhóm tất cả các thông tin nỳ của 1 sinh viên lại với kiểu `struct`.

<br id="2"></br>

## Khai báo và sử dụng kiểu Struct

Kiểu `struct` là kiểu dữ liệu người dùng tự định nghĩa bởi vì trước khi bạn dùng kiểu `struct` bạn phải định nghĩa nó:

```c
#include <stdio.h>

struct Sinhvien {
    char name[30]; //tên - 1 chuỗi tối đa 30 kí tự
    int age;       //tuổi của sinh viên - kiểu int
    float gpa;     //gpa của sinh viên - kiểu float
}; //cần dáu ; nha

int main(){
    Sinhvien sinhvien1; //khởi tạo sinhvien1
    Sinhvien sv[10];    //khởi tạo mảng các sinh viên
    return 0;
}
```

Để truy cập và gán giá trị cho biến cấu trúc, ta cần sử dụng cú pháp `Tên_struct.Thành_viên`, ví dụ:

```c
#include <stdio.h>
#include <string.h>

struct Sinhvien
{
    char name[30]; // tên - 1 chuỗi tối đa 30 kí tự
    int age;       // tuổi của sinh viên - kiểu int
    float gpa;     // gpa của sinh viên - kiểu float
};                 // cần dáu ; nha

int main()
{
    Sinhvien sv1; // khởi tạo sv1

    // Gán giá trị cho các thành viên trong cấu trúc sv1
    strcpy(sv1.name, "Trinh Cao Cuong");
    sv1.age = 18;
    sv1.gpa = 4.0;

    // Sử dụng các giá trị đó
    printf("Ho va ten sinh vien: %s\n", sv1.name);
    printf("Tuoi: %d\n", sv1.age);
    printf("GPA: %f", sv1.gpa);
    return 0;
}

/*Ket qua:
Ho va ten sinh vien: Trinh Cao Cuong
Tuoi: 18
GPA: 4.000000
```
