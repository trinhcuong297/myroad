const cdata = [
  {
    title: `Kiểu dữ liệu`,
    data: [
`Trong C có các kiểu dữ liệu sau đây:
Type                   Size(bytes)        Format Specifier   Chú thích

int                    >=2                %d, %i             Số nguyên                                                                  
long int               >=4                %ld, %li           Số nguyên                         
long long int          >=8                %lld, %lli         Số nguyên                           
unsigned int           >=2                %u                 Số nguyên >=0                   
unsigned long int      >=4                %lu                Số nguyên >=0                     
unsigned long long int >=8                %llu               Số nguyên >=0  
float                  4                  %f                 Số thực              
double                 8                  %lf                Số thực                    
long double            >=10               %Lf                Số thực                 
char                   1                  %c                 Kí tự(theo bảng ASCII)  (-128 đến 127 hoặc 0 đến 255)         
signed char            1                  %c                 Kí tự(theo bảng ASCII)  (0 đến 255)            
unsigned char          1                  %c                 Kí tự(theo bảng ASCII)  (-128 tới 127)      
                                                                            
enum                   là kiểu dữ liệu người dùng tự định nghĩa   
typedef                là kiểu dữ liệu người dùng tự định nghĩa   
                                                                                
void                   là kiểu dữ liệu xác định không có giá trị nào 
(Hàm trả về không có giá trị, Hàm không có tham số truyền vào, hoặc cả 2, hoặc là con trỏ kiểu void)
`
    ],
    href: '/learn/c',
  },
  {
    title: `Nhập/Xuất`,
    data: [
`
Để tạo lệnh input/output, chúng ta dùng các hàm printf(), scanf(), gets(), puts() , fprintf() , sprintf() , fscanf() và sscanf().

Lệnh scanf() lấy dữ liệu được nhập từ bàn phím, từ bắt đầu đến khi chạm đến khoảng trắng đầu tiên, kết thúc khi gặp kí tự xuống dòng(enter)
Lệnh printf() in ra dữ liệu.                                  
VD sử dụng scanf() và printf():
----------
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
____________________________________________

gets() lấy dữ liệu nhập vào kể cả khoảng trắng, nó dừng lại khi gặp kí tự xuống dòng(enter)   
puts() được sử dụng để in chuỗi ra màn hình.  
                      
VD sử dụng gets() và puts()                                                               
---------
#include<stdio.h>

int main() {
    char name[50];
    printf("Enter your name: ");
    gets(name);
    printf("Your name is: ");
    puts(name);
    return 0;

// Kết quả:
// Enter your name: Trinh Cao Cuong
// Your name is: Trinh Cao Cuong
____________________________________________
`
],
    href: '/learn/c',
  },
  {
    title: `Các thư viện trong C`,
    data: [
`
assert.h       ctype.h       errno.h       float.h       limits.h       locale.h       math.h       time.h
setjmp.h       signal.h      stdarg.h      stddef.h      stdio.h        stdlib.h       string.h              

assert.h trong C: là thư viện cung cấp một macro gọi là assert có thể được sử dụng để kiểm tra một giả định
                  được tạo bởi chương trình và in một thông báo chẩn đoán tìm lỗi nếu giả định này là false. 

ctype.h trong C: khai báo một số hàm khá hữu ích cho việc kiểm tra và ánh xạ các ký tự.

errno.h trong C: định nghĩa biến nguyên errno, được thiết lập bởi system call (lời gọi hệ thống) và một số
                 hàm thư viện về lỗi để chỉ rằng có lỗi đang xảy ra.

float.h trong C: chứa một tập hợp các hằng số đa dạng (phụ thuộc vào nền tảng) liên quan tới các giá trị số thực dấu chấm động.

limits.h trong C: xác định các thuộc tính đa dạng của các kiểu biến khác nhau.
                  Các macro, được định nghĩa trong header này, giới hạn giá trị của các kiểu biến đa dạng như char, int, và long.

locale.h trong C: định nghĩa các thiết lập riêng về vị trí, chẳng hạn như định dạng date và các biểu tượng về currency.

math.h trong C: định nghĩa các hàm toán học đa dạng và một macro. Tất cả các hàm có sẵn trong thư viện này nhận double như là một tham số và trả về kết quả ở kiểu double.
                Bao gồm các phép toán sin, cos, tan, arcsin, arccos, arctan, hàm số mũ, căn bậc 2, trị tuyệt đối, phần dư,..)

setjmp.h trong C: định nghĩa macro setjmp(), một hàm longjmp(), và một kiểu biến jmp_buf,
                  để bỏ qua lời gọi hàm thông thường và trả về qui tắc, bằng cách cung cấp các phương thức để thực hiện các cú nhảy mà vẫn duy trì môi trường gọi hàm.

signal.h trong C:định nghĩa một kiểu biến sig_atomic_t, hai lời gọi hàm, và một số macro để xử lý các tín hiệu khác nhau được báo cáo trong khi thực thi một chương trình.

stdarg.h trong C: định nghĩa một kiểu biến va_list và 3 macro mà có thể được sử dụng để lấy các tham số trong một hàm khi số tham số là chưa được biết 
                  (ví dụ như số tham số là có thể biến đổi).

stddef.h trong C: định nghĩa các kiểu biến và macro đa dạng. Nhiều định nghĩa này cũng có mặt trong các header khác.

stdio.h trong C: định nghĩa 3 kiểu biến, một số macro và các hàm đa dạng để thực hiện input và output.

stdlib.h trong C: định nghĩa 4 kiểu biến, một số macro và các hàm đa dạng để thực hiện các tính năng chung.

string.h trong C: định nghĩa một kiểu biến, một macro và các hàm đa dạng để thao tác các mảng ký tự.

time.h trong C: định nghĩa 4 kiểu biến, hai macro và các hàm đa dạng để thao tác với date và time.
`
],
    href: '/learn/c',
  },
  {
    title: `Comment`,
    data: [
`
   Những phần code bị comment sẽ ko chạy.
   2 loại comment:
   //       : comment 1 dòng
   /*...*/  : comment nhiều dòng
`
],
    href: '/learn/c',
  },
  {
    title: `Toán tử`,
    data: [
`
Có 5 loại toán tử cơ bản trong C là
1- toán tử số học    (cộng trừ nhân chia)
2- toán tử tăng giảm (-- và ++)
3- toán tử gán       (gán giá trị cho 1 biến)
4- toán tử quan hệ 
5- toán tử logic
___________________________________________

1) Toán tử số học:
      Định nghĩa                     VD
  + : Cộng số học                  4 + 6 = 10
  - : Trừ số học                   4 - 6 = -2
  * : Nhân số học                  4 * 6 = 24
  / : Chia số học                  6 / 4 = 1   (6.0 / 4.0 = 1.5)
  % : Chia lấy dư                  6 % 4 = 2

2) Toán tử tăng giảm
  ++ : cộng 1 vào toán hạng         ++a: cộng 1 vào a trước rồi lấy giá trị
                                    a++: lấy giá trị a trước rồi cộng 1 vào a

  -- : trừ 1 từ toán hạng           --a: trừ 1 từ a trước rồi lấy giá trị
                                    a--: lấy giá trị a trước rồi trừ a đi 1

3) Toán tử gán:
              Cách viết              Giá trị thể hiện                                 
  =             a = b                  a = b                  
  +=            a += b                 a = a+b                    
  -=            a -= b                 a = a-b                    
  *=            a *= b                 a = a*b                    
  /=            a /= b                 a = a/b                    
  %=            a %= b                 a = a%b                    
                                                   
4) Toán tử quan hệ:  Là toán tử so sánh giá trị của 2 toán hạng, đúng trả về 1, sai trả về 0

              Ý nghĩa                     VD                              
  ==          bằng với                    4==5  (trả về 0)                                
  !=          không bằng với              4!=5  (trả về 1)                                   
  >           lớn hơn                     4>5   (trả về 0)                            
  <           nhỏ hơn                     4<5   (trả về 1)                            
  >=          lớn hơn hoặc bằng           4>=5  (trả về 0)                          
  <=          nhỏ hơn hoặc bằng           5<=5  (trả về 1)           
  
5) Toán tử logic: Là toán tử trả về kết quả 0 hay 1 phụ thuộc vao mệnh đề đúng hay sai

         Ý nghĩa                                 VD                              
  &&     và (đúng khi cả 2 mệnh đề cùng đúng)    (4==4)&&(4==5)  (trả về 0)                                
  ||     hoặc (đúng khi 1 trong 2 mệnh đề đúng)  (4==4)&&(4==5)  (trả về 0)                                 
  !      logic không (trả về phủ định)           !(1==2)         (trả về 1)      

`
],
    href: '/learn/c',
  },
  
]

export default cdata
