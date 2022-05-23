---
title: Các thuật toán tìm kiếm phổ biến với C/C++
date: '2022-5-19'
tags: ['Thuật toán']
draft: false
summary: 'Các thuật toán ví dụ với việc tìm kiếm trong mảng tăng dần như: Linear Search, Binary Search, Jump Search, Interpolation Search, Exponential Search, Ternary Search'
images: []
tableOfContents: ['Linear Search (tìm kiếm tuyến tính)']
---

> #### Mục lục
>
> - [Linear Search (tìm kiếm tuyến tính)](#1)

**Lưu ý, các thuật toán ví dụ với mảng tăng dần**
<br id="1"></br>

## Linear Search (tìm kiếm tuyến tính)

Linear Search chỉ đơn giản là dùng vòng lặp để duyệt lần lượt các phần tử trong mảng đã cho từ đầu đến cuối, khi nào tìm được phần tử có giá trị trùng với giá trị tìm kiếm thì trả về phần tử đó.
![LinearSearch](https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png)

```c
#include <stdio.h>

int LinearSearch(int arr[], int n, int x)
{   //Duyệt qua từng phần tử, nếu có phần tử thỏa mãn thì trả về index của phần tử đó
    //Nếu không có phần tử thỏa mãn thì trả về -1
    int i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}

int main()
{
    int arr[] = { 2, 3, 4, 10, 40 };     //mảng cần tìm kiếm
    int x = 10;                          //giá trị cần tìm
    int n = sizeof(arr) / sizeof(arr[0]);

    int result = LinearSearch(arr, n, x);
    (result == -1)
        ? printf("Element is not present in array")
        : printf("Element is present at index %d", result);
    return 0;
}
```

Tham khảo tại greeksforgreeks.org
