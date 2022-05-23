---
title: Các thuật toán sắp xếp phổ biến với C/C++
date: '2022-5-19'
tags: ['Thuật toán']
draft: false
summary: 'Các thuật toán ví dụ với việc sắp xếp mảng tăng dần như: Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, Heap Sort, QuickSort, Radix Sort, Counting Sort, Bucket Sort, ShellSort, Comb Sort, Pigeonhole Sort, Cycle Sort'
images: []
tableOfContents:
  [
    'Selection Sort',
    'Bubble Sort',
    'Insert Sort',
    'Merge Sort',
    'Quick Sort',
    'Radix Sort, Counting Sort, Bucket Sort, ShellSort, Comb Sort, Pigeonhole Sort, Cycle Sort',
  ]
---

> #### Mục lục
>
> - [Selection Sort](#1)
> - [Bubble Sort](#2)
> - [Insert Sort](#3)
> - [Merge Sort](#4)
> - [Quick Sort](#5)
> - [Radix Sort, Counting Sort, Bucket Sort, ShellSort, Comb Sort, Pigeonhole Sort, Cycle Sort](#6)

**Lưu ý, các thuật toán ví dụ với việc sắp xếp mảng tăng dần**
<br id="1"></br>

## Selection Sort (Sắp xếp chọn)

Thuật toán **Selection Sort** sắp xếp một mảng n phần tử (phần tử thứ 0 đến thứ n-1) bằng cách:

1. Xét phần tử `i` (bắt đầu i = 0)
2. Tìm kiếm phần tử nhỏ nhất trong mảng từ `i` đến `n-1`
3. Đổi chỗ phần tử nhỏ nhất với phần tử `i`
4. Tăng `i++`
5. Bắt đầu lại bước 2 với phần tử `i+1` và mảng từ `i+1` đến `n-1`
6. Dừng lại khi `i==n-1`.

**Ví dụ** Sắp xếp mảng `arr[] = {4, 1, 2, 3, 5}`

1. Lần 1 để xét từ vị trí `arr[0]` đến `arr[4]` thấy `1` là bé nhất => đổi chỗ `arr[0]=4` với `arr[1]=1`<br/>
   Ta được `arr[] = {1, 4, 2, 3, 5}`
2. Lần 2 để xét từ vị trí `arr[1]` đến `arr[4]` thấy `2` là bé nhất => đổi chỗ `arr[1]=4` với `arr[2]=2`<br/>
   Ta được `arr[] = {1, 2, 4, 3, 5}`
3. Lần 3 để xét từ vị trí `arr[2]` đến `arr[4]` thấy `3` là bé nhất => đổi chỗ `arr[2]=4` với `arr[3]=3`<br/>
   Ta được `arr[] = {1, 2, 3, 4, 5}`
4. Lần 4 để xét từ vị trí `arr[3]` đến `arr[4]` thấy `4` là bé nhất => không cần đổi chỗ<br/>
   Ta được `arr[] = {1, 2, 3, 4, 5}`
5. Đến đây chỉ còn mỗi 1 phần tử cuối cùng là `arr[4]` chắc chắn là lớn nhất => không cần xét nữa<br/>
   Ta được mảng đã sắp xếp là `arr[] = {1, 2, 3, 4, 5}`
   ![Selected Sort](https://persmin.org/wp-content/uploads/2022/02/0_c6jNITnQ_jIvCk-3.png)

```c
// C program for implementation of selection sort
#include <stdio.h>

//Hàm đổi chỗ 2 biến xp, yp cho nhau
void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	// Xét các phần tử i từ 0 đến n-1
	for (i = 0; i < n-1; i++)
	{
		// Tìm kiếm phần tử nhỏ nhất trong mảng từ i đến n
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Đổi chỗ phần tử nhỏ nhất với phần tử i
		swap(&arr[min_idx], &arr[i]);
	}
}

int main()
{
	int n;
	printf("Array length = ")
	scanf("%d",&n);
	int arr[n];
	printf("Array input:\n")
	for(int i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	selectionSort(arr, n);
	printf("Sorted array: \n");
	for (i = 0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
	return 0;
}
```

<br id="2"></br>

## Bubble Sort (Sắp xếp nổi bọt)

Thuật toán **Selection Sort** sắp xếp một mảng n phần tử (từ phần tử thứ 0 đến thứ n-1) bằng cách lặp n lần, trong lần lặp thứ `i`:

1. Kiểm tra các phần tử từ `0` đến `n-i` (ví dụ lần 1 là từ `0` đến `n-1`)
2. So sánh 2 phần tử liền kể `j` và `j+1`
3. Đổi chỗ nếu `j` > `j+1`

Suy ra:

- Với lần lặp đầu tiên ta sẽ thu được phần tử lớn nhất ở cuối dãy (vị trí `n-1`)
- Với lần lặp thứ 2 ta sẽ thu được phần tử lớn nhất còn lại ở vị trí `n-2`
- Tiếp tục như vậy ta sẽ thu được dãy sắp xếp
  ![BubbleSort](https://www.w3resource.com/w3r_images/bubble-short.png)

=> Số lớn nhất sẽ nổi lên đầu tiên, lớn thứ 2 nổi lên tiếp theo và cứ như vậy đến cuối như bong bóng nổi lên mặt nước nên người ta gọi cách sắp xếp này là **sắp xếp nổi bọt (Bubble Sort)**

```c
// C program for implementation of Bubble sort
#include <stdio.h>

//Hàm đổi chỗ 2 biến xp, yp cho nhau
void swap(int* xp, int* yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

// Bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// n - i - 1 nơi số lớn nhất trong đoạn [0, n-i-1] nổi lên
		for (j = 0; j < n - i - 1; j++)
			//Đổi chỗ nếu arr[j] > arr[j+1]
			if (arr[j] > arr[j + 1])
				swap(&arr[j], &arr[j + 1]);
}

// Driver program to test above functions
int main()
{
	int n;
	printf("Array length = ")
	scanf("%d",&n);
	int arr[n];
	printf("Array input:\n")
	for(int i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	bubbleSort(arr, n);
	printf("Sorted array: \n");
	for (i = 0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
	return 0;
}

```

<br id="3"></br>

## Insert Sort (Sắp xếp chèn)

Thuật toán **Selection Sort** giống như việc chúng ta xếp bài trong khi chơi bài vậy, chúng ta sẽ rút lần lượt từng lá để xếp vào vị trí phù hợp:

1. Đầu tiên là chúng ta sẽ duyệt qua từng phần tử
2. Đặt `key` là giá trị của phần tử đang xét (giả sử phần tử `j`)
3. Lần lượt so sánh giá trị của `key` với các phần tử đứng trước `j`
4. Nếu `key` nhỏ hơn phần tử `arr[i]` thì nhích phần tử so sánh lên 1 ô (nhích `arr[i]` lên thành `arr[i+1]`) để lấy chỗ tí nữa đặt `key` vào.
5. Nếu `key` lớn hơn phần tử `arr[i]` thì đặt `key` vào `arr[i+1]`
6. Duyệt hết `n` phần tử của mảng là xong.

![Insert Sort](https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png)

```c
// C program for insertion sort
#include <math.h>
#include <stdio.h>

/* Insert sort*/
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++) {
		key = arr[i];
		j = i - 1;

		/* Nhích những phần tử arr[0..i-1] lớn hơn key lên 1 vị trí */
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

/* Driver program to test insertion sort */
int main()
{
	int n;
	printf("Array length = ")
	scanf("%d",&n);
	int arr[n];
	printf("Array input:\n")
	for(int i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	insertionSort(arr, n);
	printf("Sorted array: \n");
	for (i = 0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
	return 0;
}
```

<br id="4"></br>

## Merge Sort

Uploading...

<br id="5"></br>

## Quick Sort

Uploading...
<br id="6"></br>

## Các thuật toán khác

[Heap Sort](https://www.geeksforgeeks.org/heap-sort/)<br/>
[Radix Sort](https://www.geeksforgeeks.org/radix-sort/)<br/>
[Counting Sort](https://www.geeksforgeeks.org/counting-sort/)<br/>
[Bucket Sort](https://www.geeksforgeeks.org/bucket-sort/)<br/>
[Shell Sort](https://www.geeksforgeeks.org/shell-sort/)<br/>
[Comb Sort](https://www.geeksforgeeks.org/comb-sort/)<br/>
[Pigeonhole Sort](https://www.geeksforgeeks.org/pigeonhole-sort/)<br/>
[Cycle Sort](https://www.geeksforgeeks.org/cycle-sort/)

Tham khảo tại greeksforgreeks.org
