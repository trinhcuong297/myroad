---
title: Hàm trong lập trình C
date: '2021-4-7'
tags: ['c', 'learnC']
draft: false
summary: 'Khai báo và sử dụng 1 hàm (function) trong C'
images: []
tableOfContents: [
'Hàm là gì và dùng làm gì',
'Cấu trúc hàm (function)',
]
---

> #### Mục lục
>
> - [Hàm là gì và dùng làm gì](#1)<br/>
> - [Cấu trúc hàm - function](#2)<br/>

## Hàm là gì và dùng làm gì?

Trong khi viết chương trình, chúng ta sẽ gặp phải tình trạng : muốn tính giai thừa của `4!`, rồi `5!`,... thì chúng ta phải code lại nhiều lần đoạn code tính giai thừa như dưới đây:

```c
int giaithua = 1;
//tính 4!
for(int i=1; i<=4; i++){
    giaithua *= i;
}
```

Việc này rất mất thời gian và làm đoạn code của chúng ta trở nên quá dài và khó debug hay fixbug.<br/>
Hay trong 1 trường hợp khác, chúng ta viết các tính năng cho chương trình như tính tổng các số rồi sắp xếp kí tự ,... nhưng lại để hết ở 1 hàm main thì nó cũng làm cho code dài dòng khó debug. Bởi vậy, chúng ta cần dùng đến hàm (function).

1 hàm là 1 khối lệnh thực hiện 1 nhiệm vụ hoàn chỉnh, ví dụ như hàm tính tổng a+b, hàm tính giai thừa của a!,...

<br id="2"></br>

## Cấu trúc hàm (function)

Khi 1 chương trình C chạy, nó sẽ chạy vào hàm `main` đầu tiên, thực hiện các lệnh trong hàm `main` theo thứ tự từ trên xuống dưới. Bạn có thể tưởng tượng rằng hàm `main` giống như 1 nhà máy sản xuất, khi đó các `function` sẽ là những cỗ máy trong nhà máy đó, mỗi cỗ máy `function` sẽ có 1 chức năng và có cấu tạo như dưới đây:

```c
Kiểu_dữ_liệu Tên_hàm(Khai_báo Các_đối_số) {
  Khai_báo_các_biến_của_hàm;  //Nếu cần
  Khối_lệnh;
  return Giá_trị; //Nếu Kiểu_dữ_liệu là void thì không cần câu lệnh này
}

/*VD:
int example (char a, int b){
    printf("gia tri tham so %c va %d",a,b);
    return 1;
}
```

Trong cấu trúc trên:

- `Kiểu_dữ_liệu` là kiểu dữ liệu trả về của hàm, giống như thông báo cho chương trình biết cái máy `function` này cho ra sản phẩm là cái gì.
- `Tên_hàm` là tên để chúng ta có thể gọi hàm (gọi hàm làm việc), giống như việc chúng ta cần phải biết bật máy 1 hay máy 2 chứ không thể nói chung là bật máy lên được.
- `Khai_báo Các_đối_số` là thành phần không bắt buộc, các đối số được khai báo sẽ phải khai báo theo dạng: `Kiểu_dữ_liệu_của_đối_số Tên_đối_số`, các đối số phải cách nhau bởi dấu `,`. Đối số cũng giống như nguyên liệu bỏ vào máy (`function`).
- Các lệnh bên trong dấu `{}` là các bước làm việc của hàm.
- `return` giá trị trả về của hàm, giống như máy trả về sản phẩm sau khi làm xong vậy.

Chúng ta sẽ cùng lấy 1 ví dụ chi tiết để thấy rõ hơn cách hoạt động của hàm nhé:

```c
#include <stdio.h>

//Khai báo hàm tính lũy thừa ex
double ex(double a, int n){
    //khai báo biến trong hàm, chỉ có giá trị trong hàm đó.
    double res =1;
    //Vòng lặp nhân res với a n lần, tương đương a^n
    for(int i=0;i<n;i++ ){
        res *= a;
    }
    return res; //trả về giá trị là res
}

int main(){
    //Khai báo biến x và n
    double x;
    int n;
    //lấy giá trị x và n nhập vào
    scanf("%lf %d",&x,&n);
    //in ra giá trị x^n
    //gọi hàm ex(x,n)
    //hàm sẽ trả về giá trị x^n có type là double
    //In nó ra thôi :>
    printf("%.4lf",ex(x,n));
    return 0;
}
```
