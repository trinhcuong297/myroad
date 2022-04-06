---
title: Câu lệnh điều kiện và rẽ nhánh trong lập trình C
date: '2022-4-6'
tags: ['c', 'learnC']
draft: false
summary: 'if...else và switch...case trong C'
images: []
---

> #### Mục lục
>
> - [If else](#s1)<br/>
>   -- [Câu lệnh if](#s2)<br/>
>   -- [Câu lệnh if ... else](#s3)<br/>
>   -- [Câu lệnh if ... else lồng nhau](#s4)<br/>
> - [Switch case](#s5)<br/>

## If else<h1 id="s1"></h1>

Giả sử bạn đang cần làm 1 chương trình: Nếu a=1 thì in ra a, nếu a!=1 thì không. Trong trường hợp này, bạn sẽ cần dùng đến câu lệnh điều kiện `if...else` trong C.

Nguyên tắc của câu lệnh `if...else` là nếu điều kiện đầu vào đúng thì khối lệnh trong `if` sẽ chạy còn nếu điều kiện sai thì khối lệnh trong `else` sẽ chạy.

### Câu lệnh `if`<h1 id="s2"></h1>

Cho phép chương trình ra quyết định có chạy khối lệnh trong `if` hay không dựa vào việc kiểm tra một điều kiện đầu vào.
Cách viết:

```c
if (/*điều kiện cần kiểm tra/*)
{
    //Nếu điều kiện đúng thì khối lệnh này sẽ chạy
}
```

Ví dụ:

```c
#include <stdio.h>
void main(){
    int a = 1;
    if (a == 1)
    {
        printf("a = %d\n",a);
    }
    //Ta cũng có thể viết câu lệnh if như sau:
    if (a == 1)
        printf("a = %d\n",a);

    /*Chú ý, với cách viết số 2, lệnh if chỉ thực thi câu lệnh đầu tiên sau if
    các câu lệnh tiếp theo sẽ không nằm trong lệnh if */

    //VD, điều kiện if sai, không in ra câu lệnh trong if:
    if (a == 0)
        printf("Câu lệnh này nằm trong if\n");
        printf("Câu này thì khum\n");
}
/*Kết quả:
a = 1
a = 1
Câu này thì khum
```

### Câu lệnh `if ... else`<h1 id="s3"></h1>

Câu lệnh `if` trên sẽ thực thi khối lệnh khi trường hợp đúng, vậy còn sai thì sao?<br/>
Để chương trình thực thi một khối lệnh khi điều kiện `if` đúng và một khối lệnh khác khi `if` sai, chúng ta dùng câu lệnh điều kiện `if ... else`

```c
if(/*điều kiện kiểm tra*/)
{
    //Nếu đúng thì khối lệnh này được thực hiện
}
else {
    //Nếu sai thì khối lệnh này được thực hiện
}

// Nếu chỉ có 1 lệnh cần thực hiện sau khi kiểm tra, chúng ta có thể viết gọn, ví dụ:
if (a > 0)
    printf("Điều kiện đúng");
else
    printf("Sai òi");
```

### Câu lệnh `if ... else` lồng nhau<h1 id="s4"></h1>

Được gọi là `if-else-if ladder` hay `if-else-if staircase`, cấu trúc `if else` mở rộng mà `else` sẽ chứa `if else` khác. Các điều kiện sẽ được kiểm tra từ trên xuống dưới, khi thỏa mãn điều kiện `if` nào đó, khối lệnh gắn với nó sẽ được thực thi và các lệnh if else còn lại sẽ được bỏ qua.<br/>
Nếu không có điều kiện nào `true` thì khối lệnh `else` cuối cùng sẽ được thực hiện, nếu `else` cuối không tồn tại, sẽ không có lệnh nào được thực hiện.

```c
#include <stdio.h>
void main(){
    int a = 5;
    if (a == 0)
        printf("if 1 được thực thi");
    else if (a < 2)
        printf("if 1 được thực thi");
    else if (a < 4)
        printf("if 2 được thực thi");
    else if (a == 5)
        printf("if 3 được thực thi");
    else
        printf("Không có điều kiện nào đúng");
}
/*Kết quả:
if 3 được thực thi
```

## Switch case<h1 id="s5"></h1>

Câu lệnh `switch case` sẽ so sánh giá trị `switch` đầu vào với các giá trị `case` cho đến khi tìm được một giá trị `case` trùng với giá trị `switch` đầu vào, khi đó các câu lệnh gắn với nó sẽ được thực hiện.

```c
#include <stdio.h>
void main(){
    switch ('a')
    {
        case 'a' :
            printf("run case 1");
            break;
        case 'b' :
            printf("run case 2");
            break;
        case 'c' :
            printf("run case 3");
            break;
    }
}
/*Kết quả:
run case 1
```

`break` dùng để thoát ra khỏi khối lệnh switch case. Nếu không có `break` thì sau khi tìm thấy case thỏa mãn, chương trình sẽ chạy tiếp lệnh trong các case sau mà không cần kiểm tra.

```c
#include <stdio.h>
void main(){
    switch ('a')
    {
        case 'b' :
            printf("run case 1\n");
        case 'a' :   /*Không có break nên thỏa mãn ở đây thì chạy tiếp các lệnh sau luôn*/
            printf("run case 2\n");
        case 'c' :
            printf("run case 3\n");
    }
}
/*Kết quả:
run case 2
run case 3
```

#### Kinh nghiệm:

`switch case` rất tiện để kiểm tra theo cách so sánh giá trí điều kiện với giá trị case nhưng lại không thể kiểm tra xem giá trị điều kiện có thuộc miền nào đó hay không nên trong phần lớn các trường hợp, ta vẫn thường sử dụng `if else`
