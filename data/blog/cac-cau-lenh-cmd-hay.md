---
title: Các câu lệnh CMD hay dùng giúp bạn trông ngầu hơn!
date: '2022-4-3'
tags: ['window', 'tips']
draft: false
summary: 'Các câu lệnh thường dùng trên Command Prompt'
images: []
tableOfContents: [
'Các lệnh về file: di chuyển, tạo, xóa'
,'Các lệnh về kiểm tra, sửa mạng'
,'Các lệnh xem thông tin hệ điều hành, tắt máy, ra lệnh điều khiển'
,'Custom cmd'
]
---

> #### Mục lục
>
> - [Các lệnh về file: di chuyển, tạo, xóa](#1)<br/>
> - [Các lệnh về kiểm tra, sửa mạng](#2)<br/>
> - [Các lệnh xem thông tin hệ điều hành, tắt máy, ra lệnh điều khiển](#3)<br/>
> - [Custom cmd](#3)<br/>

Đầu tiên để dùng những câu lênh mình giới thiệu tiếp theo đây, bạn phải biết mở cmd lên đã:<br/>
**Cách 1**: ấn tổ hợp phím `Windows` + `R`, sau đó nhập `cmd` vào và ấn `enter`<br/>
**Cách 2**: Ấn vào ô tìm kiếm bên dưới thanh taskbar và tìm từ khóa `command prompt` hay `cmd` rồi chọn kết quả và ấn `enter`
![cmd](https://codelearn.io/Media/Default/Users/T_5FFlower/blog/cmd.png)

<br id='1'></br>

## Các lệnh về file: di chuyển, tạo, xóa

#### help

Lệnh này hiển thị cách dùng các câu lệnh:

Cú pháp chung : `help <tên câu lệnh>`

#### cd (change directory)

Lênh này giống hệt cd bên Ubuntu, di chuyển vị trí đang đứng. Bạn có thể di chuyển sang thư mục khác hay thậm chí là cả phân vùng ổ cứng khác

Cú pháp chung : `cd <tên đường dẫn>`

Ví dụ chuyển từ ổ C sang thư mục Windows trong C sau đó chuyển sang ổ D

```
C:\>cd Windows

C:\Windows>
C:\Windows>d:

D:\>
```

#### dir

Lệnh này liệt kê tất cả các file hay thư mục chứa bên trong thư mục đang đứng, hoặc của thư mục được chỉ định.

```
C:\>dir
 Volume in drive C has no label.
 Volume Serial Number is 0D4C-90C0

 Directory of C:\

12/13/2021  08:56 AM    <DIR>          ESD
10/19/2021  09:19 AM    <DIR>          Intel
03/03/2022  09:23 AM    <DIR>          MinGW
10/19/2021  09:48 AM    <DIR>          PerfLogs
02/28/2022  09:07 AM    <DIR>          Program Files
03/07/2022  08:58 PM    <DIR>          Program Files (x86)
01/18/2022  08:47 PM    <DIR>          Users
03/15/2022  01:50 PM    <DIR>          Windows
               0 File(s)              0 bytes
               8 Dir(s)  20,249,747,456 bytes free

C:\>
```

#### cls

Xóa màn hình đang hiển thị, lệnh này giống với clear trong Ubuntu

#### copy

Lệnh này cho phép copy một file hay thư mục sang một vị trí mới

Cú pháp chung : `copy <tên file nguồn> <tên file đích>`

Có thể sử dụng wildcard để copy nhiều file có định dạng cho trước.

Ví dụ: copy các file bắt đầu bằng chữ b vào thư mục folder1 thì câu lệnh sẽ là: `copy b* folder1`

#### move

Cho phép di chuyển một file hay một thư mục sang vị trí mới.

Cú pháp chung : `move <tên file nguồn> <tên thư mục đích>`

#### rd (remove directory)

Dùng để xóa một hay nhiều thư mục.

Cú pháp chung : `rd <tên thư mục 1> <tên thư mục 2> ... <tên thư mục n>`

#### md (make directory) và mkdir

Tạo mới một hay nhiều thư mục.

Cú pháp :

- `md <tên thư mục 1> <tên thư mục 2> ... <tên thư mục n>`
- `mkdir <tên thư mục>`

#### Tạo file mới

Trong Ubuntu thì có rất nhiều cách (dùng touch, vi, nano, gedit, ...), còn trên Windows, có 2 cách như sau:

- `type nul > <tên file>`
- `echo nul > <tên file>`
  Thực chất 2 câu lệnh trên là để thêm giá trị nul vào 2 file đó, nhưng file chưa tồn tại nên win sẽ tạo file đó và thêm vào giá trị null (rỗng).

#### del (delete)

Dùng để xóa một hoặc nhiều file.<br/>
Cú pháp chung : `del <tên file 1> <tên file 2> <tên file 3> ... <tên file n>`

<br id='2'></br>

## Các lệnh về kiểm tra, sửa mạng

#### ipconfig

Câu lệnh này giúp in ra các thông tin về mạng, bao gồm cả địa chỉ ip và các thiết bị mạng.

#### getmac

Lệnh `getmac` giúp lấy địa chỉ MAC của adapter mạng.

> Địa chỉ MAC là một dãy số 48-bit của phần cứng máy tính, được nhà sản xuất card mạng nhúng vào. Địa chỉ MAC được ví là địa chỉ vật lý của thiết bị mạng tương tự như việc muốn đi đến nhà nào cũng phải biết địa chỉ của nhà đó. [xem thêm](https://www.thegioididong.com/game-app/dia-chi-mac-la-gi-cach-kiem-tra-phan-loai-va-tinh-ung-dung-1365688)

#### hostname

Hiển thị tên máy - host name

#### ping

Lệnh `ping` dùng để kiểm tra kết nối mạng.

Cú pháp chung : `ping <địa chỉ host>`<br/>
Do lệnh ping khá là hữu ích nên mình giới thiệu một số ví dụ sau :

```
ping facebook.com              : ping liên tục đến khi buộc dừng
ping -t youtube.com            : ping cho đến khi mạng bị đứt kết nối thì mới dừng lại
ping 127.0.0.1                 : kiểm tra xem TCP/IP đã được cài đặt và configure chính xác hay chưa
ping <địa chỉ ip của máy tính> : kiểm tra xem máy tính đã kết nối vào mạng local hay chưa
```

#### Tracert

Trong quá trình một file được gửi đi giữa 2 máy, nó sẽ phải đi qua rất nhiều node trung gian, tracert giúp ta biết được gói tin đã đi qua những node mạng nào.

Cú pháp chung : `tracert <ip/host>`

#### `netsh winsock reset catalog`

Là lệnh reset winsock (Windows Socket API) - một công cụ mà hệ điều hành Windows dùng để xử lý các dịch vụ về hệ thống mạng.

#### `netsh int ip reset reset.log`

Là lệnh setup lại cấu hình TCP/IP giúp khắc phục nhanh các sự cố mạng do sai cấu hình TCP/IP

<br id='3'></br>

## Các lệnh xem thông tin hệ điều hành, tắt máy, ra lệnh điều khiển

#### netstat

Kiểm tra các kết nối vào ra trên thiết bị <br/>
Nhập `help netstat` để tìm hiểu thêm

#### shudown

Tắt hay khởi động lại máy:

- `shutdown -s -t [a]`: tắt máy.
- `shutdown -r -t [a]`: khởi động máy.
  Trong đó a là thời gian tính bằng giây.

#### tasklist

Hiển thị các tiến trình đang hoạt động, sau đó bạn có thể dùng lệnh taskkill để buộc dừng tiến trình đó

#### systeminfo

Hiển thị thông tin của hệ thống

#### chkdsk (check disk)

Kiểm tra ổ cứng, lệnh này cũng rất quan trọng

#### attrib

Thay đổi thuộc tính của file

#### reg add/delete

Thêm hay xóa trong registry <br id='4'></br>

## Custom cmd

#### color

Thay đổi màu nền cmd

#### title

Thay đổi tiêu đề của cửa sổ cmd

### Tạm Kết

Trên đây là một tổng hợp khá đầy đủ cho những lệnh cmd thông dụng nhất, mình hy vọng các bạn sẽ luyện tập thật nhiều để ghi nhớ và hiểu hơn các câu lệnh này nhé!
