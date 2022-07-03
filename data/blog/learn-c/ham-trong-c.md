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

<!-- > - [Vòng lặp while](#3)<br/>
> - [Vòng lặp do...while](#4)<br/>
> - [Vòng lặp lồng nhau - nested route](#5)<br/> > <br id="1"></br> -->

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
