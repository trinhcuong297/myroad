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
]

export default cdata
