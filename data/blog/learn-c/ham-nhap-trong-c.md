---
title: Nhập dữ liệu trong lập trình C
date: '2021-4-5'
tags: ['c', 'learnC']
draft: false
summary: 'Các hàm nhập dữ liệu scanf, fprintf, gets, fgets, getchar, getch, getche, kbhit, fflush'
images: []
---

> #### Mục lục
>
> - [scanf()](#s1)<br/>
> - [fscanf()](#s2)<br/>
> - [gets()](#s3)<br/>
> - [fgets()](#s4)<br/>
> - [getchar(), getch() và getche()](#s5)<br/>
> - [kbhit()](#s6)<br/>
> - [fflush()](#s7)<br/>
>   Trong C hay trong bất kì ngôn ngữ lập trình nào, chúng ta đều có 2 cách để nhập và xuất dữ liệu:

- Qua phương tiện nhập/xuất chuẩn (Input/Output)
- Qua các tệp tin
  Trong ngôn ngữ lập trình C, thư viện chuẩn cung cấp các hàm nhập và xuất và các hàm quản lý những dữ liệu này. Phương tiện nhập chuẩn thường là bàn phím và thư viện xuất chuẩn thường là màn hình (console). Nhập và xuất dữ liệu có thể hướng đến tập tin thay vì trên thiết bị nhập xuất chuẩn<span id="s1"></span>.

### scanf()

Hàm `scanf()` nằm trong thư viện `<stdio.h>` được sử dụng để nhận dữ liệu từ stdin, dừng lại khi gặp các kí tự `space` hoặc `enter` hoặc lấy đủ dữ liệu với cú pháp:

```c
scanf ( *format, &object1, &object2, … );
```

- `&object`: đối số nhận giá trị truyền vào. Chúng ta có thể chỉ định một hoặc là nhiều đối tượng khác nhau, trong trường hợp có nhiều đối tượng thì cần phải đặt chúng cách nhau bởi dấu phẩy.
- `*format`: tập hợp chuỗi định dạng của dữ liệu nhận vào. Định dạng giúp chỉ định kiểu dữ liệu của đối tượng cần nhập vào, và dấu `*` có ý nghĩa là số nhiều và có bao nhiêu đối tượng được chỉ định thì cũng sẽ có bấy nhiêu định dạng tương ứng được chỉ định. [xem thêm về c]

Hàm `scanf` thành công trả về 1, thất bại trả về 0.

<span id="s2"></span>

### fscanf()

Hàm `fscanf()` tương tự như `scanf` nhưng dùng để nhận dữ liệu từ đầu vào được chỉ định:

```c
fscanf(FILE *stream, *format, object1, object2, … );
```

```c
#include <stdio.h>
#include <stdlib.h>


int main()
{
   char str1[10], str2[10], str3[10];
   int year;
   FILE * fp;

   fp = fopen ("btc.txt", "w+");
   fputs("so nguyen to 3", fp);

   rewind(fp);
   fscanf(fp, "%s %s %s %d", str1, str2, str3, &year);

   printf("Doc chuoi 1: |%s|\n", str1 );
   printf("Doc chuoi 2: |%s|\n", str2 );
   printf("Doc chuoi 3: |%s|\n", str3 );
   printf("Doc so nguyen: |%d|\n", year );

   fclose(fp);

   return(0);
}
/*Kết quả: chương trình tạo ra file b.txt và trả về
Doc chuoi 1: |so|
Doc chuoi 1: |nguyen|
Doc chuoi 1: |to|
Doc so nguyen: |3|
```

<span id="s3"></span>

### gets()

`gets()` có chức năng nhận một chuỗi ký từ stdin, kết thúc khi lấy đủ dữ liệu hoặc gặp dấu `enter`, `gets` vẫn chạy kể cả khi có gặp dấu `space`:

```c
gets(str);
// Với str là biến dạng chuỗi ký tự dùng để lưu trữ dữ liệu.
```

Ví dụ:

```c
#include <stdio.h>

int main()
{
   char str[50];

   printf("Nhap mot chuoi: ");
   gets(str);

   printf("Ban vua nhap chuoi: %s", str);

   return(0);
}
/*Kết quả:
Thử đi rồi biết :>
```

<span id="s4"></span>

### fgets()

Giống với `gets()` nhưng dùng để nhận dữ liệu từ đầu vào được chỉ định:

```c
fgets(char *str, int n, FILE *stream)
```

```c
#include <stdio.h>

int main()
{
   FILE *fp;
   char str[60];

   /* mo file de doc */
   fp = fopen("baitapc.txt" , "r");
   if(fp == NULL)
   {
      perror("Xay ra loi trong khi doc file");
      return(-1);
   }
   if( fgets (str, 60, fp)!=NULL )
   {
      /* Ghi noi dung len stdout */
      puts(str);
   }
   fclose(fp);

   return(0);
}
```

### getchar(), getch() và getche()<br id="s5"></br>

`getchar()` cho phép nhận 1 kí tự từ stdin **và trả về kí tự đó**.<br/>
`getch()` và `getche()` cho phép nhận 1 kí tự trực tiếp từ bộ đệm bàn phím **và trả về kí tự đó**, nếu bộ đệm còn kí tự thì hàm sẽ chạy tiếp còn không thì sẽ tạm dừng chờ khi có kí tự xuất hiện thì hàm nhận ngay kí tự đó. Khác biệt duy nhất của 2 hàm là `getch()` thì không cho hiện kí tự đó còn `getche()` thì hiện nó lên màn hình.

```c
getchar();
getch();
getche();
```

```c
#include <stdio.h>

int main(void) {
    char ch = getchar();
    printf("Kí tự mới nhập 1 là %c\n", ch);
    char a = getch();
    printf("Kí tự mới nhập 2 là %c\n", a);
    char b = getche();
    printf("Kí tự mới nhập 3 là %c\n", b);
    return 0;
}
```

### kbhit()<br id="s6"></br>

`kbhit()` dùng để kiểm tra xem trong bộ đệm bàn phím còn kí tự nào không, nếu rỗng trả về 0, khác rỗng trả về giá trị khác 0.

```c
kbhit();
```

### fflush()<br id="s7"></br>

Đôi khi các kí tự còn lại trong bộ đệm bàn phím sẽ làm trôi mất các hàm như gets(), getch(), .. nên để làm sạch bộ đệm bàn phím ta sử dụng `fflush`.

```c
fflush(stdin); //làm sạch stdin
```
