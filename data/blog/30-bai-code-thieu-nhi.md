---
title: 'Code thiếu nhi - tin học đại cương - HUST'
date: '2022-5-10'
tags: ['c', 'tips']
draft: false
summary: 'Đáp án thực hành tin đại cương trên lab.soict.hust.edu.vn 20212'
images: []
---

Bài tập thực hành tin đại cương từ buổi 2 đến buổi 6 của mình =)

[Đề bài từ 2.1 đến 6.4](https://www.dropbox.com/s/t7yq7ypx6ucp3ia/T%C3%A0i%20li%E1%BB%87u%20th%E1%BB%B1c%20h%C3%A0nh%20T%C4%90C2022-IT1110-v2-26-42.pdf?dl=0)

Với các bài tập này, chúng ta cần các kiến thức lập trình C cơ bản như [biến và hằng](https://ccode.vercel.app/blog/learn-c/bien-va-hang), [nhập trong C](https://ccode.vercel.app/blog/learn-c/ham-nhap-trong-c), [xuất trong C](https://ccode.vercel.app/blog/learn-c/ham-xuat-trong-c), [câu lệnh rẽ nhánh](https://ccode.vercel.app/blog/learn-c/cau-lenh-dieu-kien-va-re-nhanh), [vòng lặp](), [mảng]() và [chuỗi]() cùng việc sử dụng các thuật toán như so sánh, sắp xếp, tìm kiếm.

```c
//2.1
#include <stdio.h>
int main(){
    float a,b,tong;
    scanf("%f",&a);
    scanf("%f",&b);
    tong = a + b;
    printf("%f",tong);
    return 0;
}
```

```c
//2.2
#include <stdio.h>
int main(){
    float a,b,max;
    scanf("%f",&a);
    scanf("%f",&b);
    max = a;
    if(max < b){
        max = b;
    }
    printf("%6.2f",max);
    return 0;
}
```

```c
//2.3
#include <stdio.h>
int main(){
    float a,b,min;
    scanf("%f",&a);
    scanf("%f",&b);
    min = a;
    if(min > b){
        min = b;
    }
    printf("%.2f",min);
    return 0;
}
```

```c
//2.4
#include <stdio.h>
int main(){
    float a,b,max;
    scanf("%f",&a);
    scanf("%f",&b);
    max = a;
    if(max < b){
        max = b;
    }
    printf("%6.2f",max);
    return 0;
}
```

```c
//2.5
#include <stdio.h>
int main(){
    int a,b,c;
    scanf("%d %d %d",&a,&b,&c);
    printf("%d",a+b+c);
    printf("\n%f",(a+b+c)/3.0);
    return 0;
}
```

```c
//3.1
#include <stdio.h>
int main(){
    double a,b,c;
    scanf("%lf %lf %lf",&a,&b,&c);
    printf("%.6lf",a+b+c);
    printf("\n%.6lf",(a+b+c)/3);
    return 0;
}
```

```c
//3.2
#include <stdio.h>
int main(){
    double r,pi=3.14159;
    scanf("%lf",&r);
    if(r<=0){
        printf("ERROR");
        return 0;
    }
    printf("%.6lf",2*pi*r);
    printf("\n%.6lf",pi*r*r);
    return 0;
}

```

```c
//3.3
#include <stdio.h>
int main(){
    double x,y;
    scanf("%lf %lf",&x,&y);
    printf("%.6lf",x*x+y*y);
    printf("\n%.6lf",(x+y)*(x+y));
    printf("\n%.6lf",(x-y)*(x-y));
    return 0;
}
```

```c
//3.4
#include <stdio.h>
int main(){
    double x,y,z;
    scanf("%lf %lf %lf",&x,&y,&z);
    printf("%.6lf",x*y*(1+0.01*z));
    return 0;
}
```

```c
//3.5
#include <stdio.h>
#include <math.h>
int main(){
    double a,b,c,f;
    scanf("%lf %lf %lf",&a,&b,&c);
    f = (a+b+c)/(a*a+b*b+1) - fabs(a-(c*cos(b)));
    printf("%.6lf",f);
    return 0;
}
```

```c
//3.6
#include <stdio.h>

double ex(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a;
    }
    return res;
}

int main(){
    double a,b,c;
    scanf("%lf %lf",&a,&b);
    c = ex(b,6)+a*ex(b,5)+ex(a,2)*ex(b,4)+ex(a,3)*ex(b,3)+ex(a,4)*ex(b,2)+ex(a,5)*ex(b,1)+ex(a,6);
    printf("%.4lf",c);
    return 0;
}

```

```c
//4.1
#include <stdio.h>

double ex(int a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a--;
    }
    return res;
}

int main(){
    int a,c;
    scanf("%d",&a);
    if(a<0||a>=8){
        printf("ERROR");
        return 0;
    }
    c = ex(a,a);
    printf("%d",c);
    return 0;
}
```

```c
//4.2
#include <stdio.h>

int main(){
    int a,check = 0;
    scanf("%d",&a);
    for(int i=2;i<(a/2 + 1);i++){
        if(a%i==0){
            check+=1;
        }
    }
    if(a==1||(a!=2 && check!= 0)||a<=0){
        printf("Khong phai so nguyen to");
    }else {
        printf("La so nguyen to");
    }
    return 0;
}
```

```c
//4.3
#include <stdio.h>

int main(){
    int a,sum = 0;
    scanf("%d",&a);
    if ( a >= 1000 ){
        printf("ERROR");
        return 0;
    }
    while (a>0) {
        sum+=a%10;
        a/=10;
    }
    printf("%d",sum);
    return 0;
}
```

```c
//4.4
#include <stdio.h>

int main(){
    int a,b,UCLN,BCNN=0;
    scanf("%d %d",&a,&b);
    if(a<=0||b<=0){
        printf("ERROR");
        return 0;
    }
    for(int i=1;i<( ((a<b)?a:b) + 1);i++){
        if(a%i==0 && b%i==0){
            UCLN=i;
        }
    }

    int j= (a>b)?a:b;
    while(BCNN == 0){
        if(j%a==0 && j%b == 0){
            BCNN = j;
        }
        j++;
    }
    printf("%d\n",UCLN);
    printf("%d",BCNN);
    return 0;
}
```

```c
//4.5
#include <stdio.h>
#include <math.h>


int main(){
    double a,b,c,delta;
    scanf("%lf %lf %lf",&a,&b,&c);

    delta = b*b - 4*a*c;

    if (a == 0 && b != 0){
        printf("%lf", -c/b);
        return 0;
    }else if(a == 0 && b == 0 && c == 0){
        printf("Phuong trinh vo so nghiem");
        return 0;
    }else if(a == 0 && b == 0 && c != 0){
        printf("Phuong trinh vo nghiem");
        return 0;
    }

    if(delta<0){
        printf("%lf+%lfi",-b/(2*a),sqrt(fabs(delta))/(2*a));
        printf("\n%lf-%lfi",-b/(2*a),sqrt(fabs(delta))/(2*a));
    }
    if(delta>0){
        printf("%lf",-b/(2*a)+sqrt(fabs(delta))/(2*a));
        printf("\n%lf",-b/(2*a)-sqrt(fabs(delta))/(2*a));
    }
    if(delta==0){
        printf("%lf",-b/(2*a)+sqrt(fabs(delta))/(2*a));
    }


    return 0;
}
```

```c
//4.6
#include <stdio.h>

double ex(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a;
    }
    return res;
}

int isInt(double a){
	int res = 0;
	for(int i=0;i<a+1;i++){
		if(i+1==a){
			res  += 1;
		}
	}
	return res;
}

int main(){
    double n,x,sum = 1;
    scanf("%lf %lf",&n,&x);

    if(n<=0||isInt(n)==0){
        printf("Error");
        return 0;
    }

    for (int i=1;i<n+1;i++){
        sum += ex(x,i);
    }
    printf("%lf",sum);
    return 0;
}
```

```c
//4.7
#include <stdio.h>

double ex(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a;
    }
    return res;
}

int isInt(double a){
	int res = 0;
	for(int i=0;i<a+1;i++){
		if(i+1==a){
			res  += 1;
		}
	}
	return res;
}

int main(){
    double n,x,sum = 1;
    scanf("%lf %lf",&n,&x);

    if(n<=0||isInt(n)==0){
        printf("Error");
        return 0;
    }

    for (int i=1;i<n+1;i++){
        sum += ex(x,i)*(i%2==1?-1:1);
    }
    printf("%lf",sum);
    return 0;
}

```

```c
//4.8
#include <stdio.h>

double ex(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a;
    }
    return res;
}
double ex2(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a--;
    }
    return res;
}

int isInt(double a){
	int res = 0;
	for(int i=0;i<a+1;i++){
		if(i+1==a){
			res  += 1;
		}
	}
	return res;
}

int main(){
    long double n,x,sum = 1;
    int a = scanf("%Lf",&n);
    int b = scanf("%Lf",&x);

    if(n<=0||isInt(n)==0||a<=0||b<=0){
        printf("Error");
        return 0;
    }

    for (int i=1;i<n+1;i++){
        sum += ex(x,i)/ex2(i,i);
    }
    printf("%Lf",sum);
    return 0;
}
```

```c
//4.9
#include <stdio.h>
#include <math.h>

int main(){
    double x;
    int n;
    scanf("%lf %d",&x,&n);
    if(n<1||x<0){
        printf("Error");
        return 0;
    }

    double re = sqrt(x);
    while(n>1){
        re = sqrt(x + re);
        n--;
    }

    printf("%.4lf",re);
    return 0;
}
```

```c
//4.10
#include <stdio.h>
#include <math.h>

double ex(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a;
    }
    return res;
}

int main(){
    double x,sum=1;
    int n;
    scanf("%lf %d",&x,&n);
    if(n<1||x<0){
        printf("Error");
        return 0;
    }

    for(int i=1;i<n+1;i++){
        sum+=ex(x,i)/i;
    }
    printf("%.4lf",sum);
    return 0;
}
```

```c
//4.11
#include <stdio.h>
#include <math.h>

double ex(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a;
    }
    return res;
}
double ex2(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a--;
    }
    return res;
}

int main(){
    double x,sum=1;
    int n;
    scanf("%lf %d",&x,&n);
    if(n<1||x<0){
        printf("Error");
        return 0;
    }

    for(int i=1;i<n+1;i++){
        sum+=ex(x,i)/ex2(i,i);
    }
    printf("%.4lf",sum);
    return 0;
}
```

```c
//4.12
#include <stdio.h>
#include <math.h>

double ex(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a;
    }
    return res;
}
double ex2(double a, int b){
    double res =1;
    for(int i=0;i<b;i++ ){
        res *= a--;
    }
    return res;
}

int main(){
    double x,sum=1;
    int n;
    scanf("%lf %d",&x,&n);
    if(n<1||x<0){
        printf("Error");
        return 0;
    }

    for(int i=1;i<n+1;i++){
        sum+=ex(x,i)/ex2(i,i)*(i%2==1?-1:1);
    }
    printf("%.4lf",sum);
    return 0;
}
```

```c
//5.1
#include<stdio.h>

int main(){
    int n,sum;
    scanf("%d",&n);
    if(n <= 0){
        printf("Error");
        return 0;
    }
    int arr[n];

    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }

    for (int i=0;i<n;i++){
        printf("%d ",arr[n-i-1]);
        sum+=arr[i];
    }

    printf("\n%d",sum);
    return 0;
}
```

```c
//5.2
#include<stdio.h>

int main(){
    int n,pos=0,neg=0,coutneg=0;
    scanf("%d",&n);
    if(n <= 0){
        printf("Error");
        return 0;
    }
    int arr[n];

    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }

    for (int i=0;i<n;i++){
        if(arr[i]<0){
            neg+=arr[i];
            coutneg+=1;
        }else{
            pos+=arr[i];
        }
    }
    if(neg==0){
        printf("Mang khong co so am");
    }else{
        printf("%f",neg*1.0/coutneg);
    }
    if(pos==0){
        printf(" Mang khong co so duong");
    }else{
        printf(" %f",pos*1.0);
    }
    return 0;
}
```

```c
//5.3
#include<stdio.h>

int main(){
    int n;
    scanf("%d",&n);
    int arr[n];

    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }

    for (int i=0;i<n;i++){
        for (int j=i;j<n;j++){
            if(arr[i]>arr[j]){
                int sw = arr[i];
                arr[i] = arr[j];
                arr[j] = sw;
            }
        }
        printf("%d ",arr[i]);
    }
    return 0;
}
```

```c
//5.4
#include<stdio.h>

int main(){
    int n,max=0;
    scanf("%d",&n);
    int arr[n];
    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }

    for (int i=0;i<n-1;i++){
        if(max < arr[i]*arr[i+1]){
            max = arr[i]*arr[i+1];
        }
    }
    printf("%d",max);
    return 0;
}
```

```c
//5.5
#include<stdio.h>

int main(){
    int n,max=0;
    scanf("%d",&n);
    int arr[n];
    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }

    for (int i=0;i<n-1;i++){
        if(max < arr[i]+arr[i+1]){
            max = arr[i]+arr[i+1];
        }
    }
    printf("%d",max);
    return 0;
}
```

```c
//6.1
#include<stdio.h>
#include<string.h>
int main(){
    char s[99],t[99],resstr[30];
	int restime[30];
    scanf("%s%s",s,t);
    int reslen = 0;
    for(char i = 'a';i<'z'+1;i++){
    	int hook=0;
		for(int j=0;j<strlen(s);j++){
			if(i==s[j]){
				hook+=1;
			}
		}
		for(int k=0;k<strlen(t);k++){
			if(i==t[k]){
				hook+=1;
			}
		}
		if(hook>0){
			resstr[reslen]=i;
			restime[reslen]=hook;
			reslen++;
		}
	}
	printf("%s",resstr);
	for(int i=0;i<reslen;i++){
		printf("\n%d",restime[i]);
	}
    return 0;
}
```

```c
//6.2 - thuc ra la 6.1 tai vi he thong sai test case
#include<stdio.h>
#include<string.h>
#define MAXLEN 100000
int main(){
    char strS[MAXLEN];
    char strT[MAXLEN];
    int appear[255];
    scanf("%s",strS);
    for(int i=0;i< strlen(strS);i++) appear[(int)strS[i]]++;
     scanf("%s",strT);
    for(int i=0;i< strlen(strT);i++) appear[(int)strT[i]]++;
    for(int i=0;i<255;i++){
        if(appear[i]>0) printf("%c", (char)i);
    }
    printf("\n");
    for(int i = 0;i<255;i++){
        if(appear[i]>0) printf("%d \n",appear[i]);
    }
    return 0;
}
```

```c
//6.3
#include <stdio.h>
#include <ctype.h>
#include <string.h>
int main()
{
	char str[100];
	int i, alphabets = 0, digits = 0;
	fgets(str, 100, stdin);
	for(i=0; i<strlen(str);i++)
	{
		if(isalpha(str[i]))
			alphabets ++;
		if(isdigit(str[i]))
			digits ++;
	}
	if(alphabets == digits)
		printf("%d",0);
	else if (alphabets > digits)
		printf("%d",1);
	else printf("%d",2);
	return 0;
}
```

```c
//6.4
#include <stdio.h>
#include <string.h>
int ex(int a){
	int res=1;
	for(int i=0;i<a;i++){
		res*=2;
	}
	return res;
}
int main()
{
	char str[100];
	int num = 0;
	fgets(str, 100, stdin);
	for(int i=1; i<strlen(str)-1;i++)
	{
		if(str[i]!='0'){
        	num += ex(strlen(str)-i-2);
		}
	}
	if(str[0]!='0')
	num -= ex(strlen(str)-0-2);
	printf("%d",num);
	return 0;
}
```
