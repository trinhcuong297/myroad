---
title: Vòng lặp trong lập trình C
date: '2021-4-7'
tags: ['c', 'learnC']
draft: false
summary: 'Vòng lặp for, while, do...while trong C'
images: []
tableOfContents: [
'Vòng lặp là gì và dùng làm gì nhỉ?',
'Vòng lặp for',
'Vòng lặp while',
'Vòng lặp do...while',
'Vòng lặp lồng nhau',
]
---

> #### Mục lục
>
> - [Vòng lặp là gì và dùng làm gì nhỉ?](#1)<br/>
> - [Vòng lặp for](#2)<br/>
> - [Vòng lặp while](#3)<br/>
> - [Vòng lặp do...while](#4)<br/>
> - [Vòng lặp lồng nhau - nested route](#5)<br/>
> - [Câu lệnh điều khiển vòng lặp - break, continue](#6)<br/> <br id="1"></br>

## Vòng lặp là gì và dùng làm gì nhỉ?

Khi bạn viết chương trình, bạn có thể gặp vấn đề như: bạn muốn in ra các số từ 1 đến 1000 nhưng nếu bạn dùng lệnh `printf` 1000 lần thì ... chắc viết xong bỏ nghề. Đó là lý do vòng lặp ra đời.

Vòng lặp sẽ cho phép chúng ta lặp lại câu lệnh hay nhóm các câu lệnh nhiều lần, cụ thể trong trường hợp trên là lặp lại câu lệnh `printf`. Để hiểu rõ hơn thì chúng ta sẽ đến với vòng `for` dưới đây.

<br id="2"></br>

### Vòng lặp for

`for` là 1 trong những vòng lặp thông dụng nhất. `for` có cú pháp:

```c
for(init ; condition ; increment){
    //lệnh được lặp
}
```

Trong đó:

- `init` là khởi tạo biến điều khiển cho vòng lặp, biến này có thể khởi tạo từ trước khi lặp. biến này thường sẽ là điều kiện cho bước 2 `condition`
- `condition` là bước kiểm tra điều kiện. Nếu điều kiện đúng thì các lệnh được lặp sẽ chạy, điều kiện sai thì vòng lặp kết thúc.
- `increment` là lệnh sẽ được thực hiện sau khi lệnh lặp kết thúc. Thông thường ta sẽ dùng để thay đổi biến điều khiển vòng lặp.

```c
//Ví dụ in 10 lần chữ "HI":
for(int i=0;i<10;i++){
    printf("HI");
}
// int i=0 là biến điều khiển
// i<10 là điều kiện lặp, khi i<10 thì printf("HI") được thực hiện
// Sau khi thực hiện lệnh printf("HI") thì lệnh i++ được thực hiện
// Tiếp tục check điều kiện xem i<10 nữa không?
// Có thì printf("HI") được thực hiện
// Không thì kết thúc vòng lặp
```

Bạn cũng có thể tạo vòng lặp vô hạn bằng cách bỏ đi tất cả các điều kiện

```c
for(;;){
    printf("ìnf");
}

//in ra vô hạn chữ inf
```

<br id="3"></br>

### Vòng lặp while

Vòng lặp `while` cũng giống như `for` nhưng cú pháp đơn giản hơn 1 chút:

```c
while (condition){
    //Lệnh được lặp
}
```

Vòng lặp `while` chỉ gồm `condition` và lệnh được lặp. Trong đó:

- `condition` là điều kiện của vòng lặp.
- Khi vào vòng lặp, chương trình sẽ check điều kiện, thỏa mãn thì vòng `while` sẽ chạy các lệnh được lặp, sau đó lại kiểm tra điều kiện để thực hiện vòng lặp mới.
- Đến khi điều kiện không thỏa mãn thì vòng lặp sẽ dừng.

```c
//Ví dụ in 10 lần chữ "HI":

int i=0;
while (i<10){
    printf("HI");
    i++;
}

// ban đầu i=0, while thỏa mãn
// in ra "HI" và tăng i++
// vòng tiếp theo i=1, while thỏa mãn
// in ra "HI" và tăng i++
// tương tự vậy đến khi i=10
// thì while không thỏa mãn nữa và vòng lặp kết thúc
```

<br id="4"></br>

### Vòng lặp do...while

Vòng này giống hệt vòng `while` nhưng mà cú pháp và thời điểm xét điều kiện khác 1 chút nha:

```c
do(
    //các lệnh lặp
)while(condition)
```

- `do` là thực hiện.
- `condition` là điều kiện của vòng lặp.
- Khi vào vòng lặp, chương trình sẽ chạy các lệnh lặp 1 lần, sau đó check điều kiện, thỏa mãn thì vòng `while` sẽ chạy lại các lệnh được lặp (`do`) , sau đó lại kiểm tra điều kiện để thực hiện vòng lặp mới.
- Đến khi điều kiện không thỏa mãn thì vòng lặp sẽ dừng.
- Nói tóm lại là kiểu chạy trước kiểm tra điều kiện sau nha.

```c
//Ví dụ in 10 lần chữ "HI":

int i=0;
do{
    printf("HI");
    i++;
}while (i<10);
```

<br id="5"></br>

### Vòng lặp lồng nhau

Bạn cũng có thể đặt vòng lặp trong vòng lặp (nested loop), ví dụ với vòng `for`:

```c
for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        printf("bước số i:%d j:%d \n",i,j);
    }
}

/*ket qua:
step i:0 j:0
step i:0 j:1
step i:0 j:2
step i:1 j:0
step i:1 j:1
step i:1 j:2
step i:2 j:0
step i:2 j:1
step i:2 j:2
```

<br id="6"></br>

## Câu lệnh điều khiển vòng lặp - break, continue

Lệnh `break` giúp bạn thoát ra khỏi các lệnh lặp for, while, do...while, switch.

```c
//Ví dụ
for(int i=0;i<10;i++){
    printf("%d ",i);
    if(i==6){
        break;
    }
}

/*Kết quả là:
0 1 2 3 4 5 6

Bởi vì khi i==6, hàm if thỏa mãn và chạy lệnh break
Lệnh break sẽ đưa chương trình thoát ra khỏi vòng lặp (dừng vòng for)
```

Khi vòng lặp chạy gặp lệnh `continue` nó sẽ bỏ qua tất cả các lệnh đằng sau `continue` trong lần lặp đó và nhảy sang lượt lặp tiếp theo.

```c
//Ví dụ:
for(int i=0;i<4;i++){
    printf("Lan lap %d ",i);
    if(i==2){
        continue;
    }
    printf("OK\n");
}
/*Kết quả:
Lan lap 0 OK
Lan lap 1 OK
Lan lap 2
Vòng lặp in ra "lan lap i" mỗi lần lặp
Nhưng tại lần lặp thứ 2, hàm if thỏa mãn và lệnh continue được chạy
Chương trình bỏ qua lệnh đằng sau if (bỏ qua lệnh printf("OK\n"))
Và chạy luôn lượt tiếp theo là "Lan lap 3 OK"
```
