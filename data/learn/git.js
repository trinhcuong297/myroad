const cdata = [
    {
      title: `Về Git`,
      data: [
  `
  Git là hệ thống kiểm soát phiên bản phân tán mà nguồn mở ( Open Source Distributed Version Control System). 
  Các dự án thực tế thường có nhiều developer làm việc song song. 
  Vì vậy, một hệ thống kiểm soát phiên bản như Git là cần thiết để đảm bảo không có xung đột mã giữa các developer. 
  Ngoài ra, các yêu cầu trong dự án thay đổi thường xuyên. Vì vậy, cần một hệ thống cho phép developer quay lại phiên bản cũ hơn của mã.
  `
  ],
      href: '',
    },
    {
      title: `Quy trình`,
      data: [
  `
  Trong dự án thực tế, chúng ta sẽ thường làm việc với quy trình chính như sau:
  
  git branch: xem nhánh hiện tại
  git checkout -b tenNhanh
  b1: git pull origin master: cập nhật code mới nhất từ nhánh master
  b2: code ....
  b3: git add * : add tất cả các file thay đổi
  b4: git commit -m "message cho commit này"
  b5: git pull origin master: cập nhật code mới nhất, fix conflic nếu có
  b6: nếu cửa sổ hiện thông báo adready up to date.. thì git push origin tenNhanh
  b7: tiến hành tạo merge request trên gitlab

  Sang tính năng mới thì lại checkout -b nhánh mới lại code...
  Note: code 1 tính năng nhỏ chỉ mất tầm 12,15 file thay đổi, 400,500 dòng
  thay đổi thì phải tạo merge request

  `
  ],
      href: '',
    },
    {
        title: `git config`,
        data: [
`
git config là câu lệnh mà chúng ta phải thực thi đầu tiên cài đặt git lên máy.
Câu lệnh này sẽ giúp các bạn thiết lập tên và email cá nhân của bạn.
Những thông tin này sẽ đính kèm trong mọi commit của bạn.
Điều này sẽ rất hữu ích khi chúng ta muốn biết đoạn code nào đó đã được ai triển khai để có thể thảo luận trong trường hợp chúng ta không hiểu rõ đoạn code đấy sử dụng cho mục đích gì.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git config --global user.name "Your name"  

$ git config --global user.email "Your email
---------------
`
        ],
        href: '',
    },
    {
        title: `git version`,
        data: [
`
git version dùng để kiểm tra phiên bản git đang sử dụng trên máy.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git version
---------------
`
        ],
        href: '',
    },
    {
        title: `git init`,
        data: [
`
git init: Đây là câu lệnh đầu tiên khi chúng ta bắt đầu một dự án mới.
Câu lệnh này sẽ giúp chúng ta tạo một repository mới.
Chúng ta sẽ lưu trữ và quản lý mã nguồn trong repository này.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git init 

// Hoặc bạn có thể đặt tên cho repo với lệnh
$ git init <your repository name>
---------------
`
        ],
        href: '',
    },
    {
        title: `git clone`,
        data: [
`
git clone: Câu lệnh này sẽ giúp chúng ta download một repository đã tồn tại sẵn trên kho lưu trữu (github, gitlab v.v) về máy.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
git clone <your project URL>

//vd: git clone https://github.com/trinhcuong297/AI-Expert-Roadmap.git
---------------
`
        ],
        href: '',
    },
    {
        title: `git add`,
        data: [
`
git add là câu lệnh giúp chúng ta thêm tất cả các file code mới mới hoặc các file code được chỉnh sửa vào repository.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git add your_file_name - Thêm một file( thêm mới hoặc chỉnh sửa) vào staging area
$ git add * - Thêm tất cả các file (thêm mới hoặc chỉnh sửa) vào staging area
$ git add . - Thêm tất cả các file (thêm mới hoặc chỉnh sửa) vào staging area
---------------
`
        ],
        href: '',
    },
    {
        title: `git commit`,
        data: [
`
git commit: giúp chúng ta lưu các thay đổi ở các file trong vùng staging area xuống repository.

Có thể hiểu git add dùng để thêm thêm các file được thay đổi hoặc thêm mới vào vùng staging area, 
và chúng sẽ sẵn sàng để commit và sau đó những thay đổi này sẽ được lưu xuống repository.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git commit -m “your useful commit message”
---------------

Trong trường hợp chúng ta đã commit nhưng lại muốn sửa hay thêm gì đó rồi lại commit lại:
VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git commit --amend -m "New commit message."

//lệnh này sẽ ghi đè lên commit gần nhất
---------------
`
        ],
        href: '',
    },
    {
        title: `git reset`,
        data: [
`
git commit: Khi đã thực hiện commit, commit đó chưa public (chưa đẩy lên Remote Repo bằng lệnh git push)
thì bạn có thể hủy (undo) commit đó với hai trường hợp bằng lệnh git reset như sau:

git reset với tham số --soft: 
Trường hợp này sẽ hủy commit cuối, con trỏ HEAD sẽ chuyển về commit cha.
Đồng thời những thay đổi của commit cuối được chuyển vào vùng staging nhằm để có cơ hội commit lại hoặc sửa đổi
VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git reset --soft HEAD~1
---------------

git reset với tham số --hard:
Khi dùng tham số --hard thì kết quả giống với dùng tham số --soft, 
chỉ có một khác biết là nội dung thay đổi của commit cuối không đưa đưa vào staging mà bị hủy luôn. 
Trường hợp này dùng khi bạn quyết định hủy hoàn toàn commit cuối
VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git reset --hard HEAD~1
---------------

git reset: hủy git add: Nếu bạn đã dùng lệnh git add để cập nhật thay đổi vào vùng staging,
bạn có thể hủy thao tác này bằng cách thực hiện lệnh:

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git reset

//Nếu chỉ muốn hủy một file nào đó trong vùng staging chứ không phải toàn bộ thì dùng lệnh
$ git reset -- filename
---------------
`
        ],
        href: '',
    },
    {
        title: `git status`,
        data: [
`
git status: cho phép bạn xem tình trạng hiện tại của mã nguồn như có bao nhiêu file được thêm mới hoặc chỉnh sửa,  
xem những file nào đang nằm trong vùng staging area hoặc đang nằm ngoài staging area.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git status
---------------
`
        ],
        href: '',
    },
    {
        title: `git branch`,
        data: [
`
Trong một Git repository luôn luôn tồn tại nhiều nhánh riêng biệt dùng để triển khai một tính năng nào đó độc lập với các nhánh khác.
git branch: cho phép chúng ta xem, tạo mới và xóa các nhánh(branch)

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
//để xem các nhánh hiện có:
$ git branch

//để tạo 1 nhánh mới:
$ git branch <branch_name>

//để xóa 1 nhánh:
git branch -d <branch_name>
---------------
`
        ],
        href: '',
    },
    {
        title: `git checkout`,
        data: [
`
git checkout: dùng để di chuyển qua lại giữa các branch.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git checkout <branch_name>

//Hoặc vừa chuyển qua một branch mới và tiện thể khởi tạo nếu branch chưa tồn tại với câu lệnh:
$ git checkout -b <your_new_branch_name>
---------------
`
        ],
        href: '',
    },
    {
        title: `git remote`,
        data: [
`
Repository được các bạn khởi tạo với câu lệnh git init chỉ đang tồn tại trên máy local của các bạn. 
git remote: kết nối lên 1 dịch vụ lưu trữ từ xa như gitlap, github,.. Cho phép bạn có thể lưu trữ repository này lên đó.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git remote add <shortname> <url>

//vd:$ git remote add origin https://github.com/trinhcuong297/AI-Expert-Roadmap.git
---------------
`
        ],
        href: '',
    },
    {
        title: `git push`,
        data: [
`
git push: Khi đã kết nối giữa local và dịch vụ lưu trữ git,
chúng ta sử dụng lệnh git push để đồng bộ những thay đổi được commit trên local lên dịch vụ lưu trữ.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git push -u <short_name> <your_branch_name>
Ví dụ
$ git push -u origin feature_branch
---------------

Ngoài ra trước khi sử dụng git push các bạn nên cấu hình origin và upstream.
VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git push --set-upstream <short_name> <branch_name>

Ví dụ
$ git push --set-upstream origin feature_branch
---------------
`
        ],
        href: '',
    },
    {
        title: `git fetch `,
        data: [
`
git fetch: Git được sử dụng để làm việc nhóm, quản lý mã nguồn. Ngoài những commit của bạn thì còn vô số commit khác của các thành viên khác trong team. 
Sử dụng git fetch sẽ giúp chúng ta cập nhật tất cả những thông tin mới như commit, branch, v.v.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git fetch 
---------------
`
        ],
        href: '',
    },
    {
        title: `git pull`,
        data: [
`
git pull: download tất cả những nội dung (không chỉ là metadata như git fetch) từ dịch vụ lưu trữ xuống local repository.
Là 1 cách để đồng bộ local repo trên máy tính với repo trên dịch vụ lưu trữ.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git pull <remote_url>

//vd: git pull https://github.com/trinhcuong297/AI-Expert-Roadmap.git
---------------
`
        ],
        href: '',
    },
    {
        title: `git stash`,
        data: [
`
git stash: cho phép chúng ta lưu trữ các file được chỉnh sửa trong vùng nhớ tạm.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git stash 
---------------

Nếu muốn xem tất cả các stash các bạn có thể sử dụng lệnh: git stash list 
VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git stash list 
---------------

Nếu bạn muốn áp dụng các chỉnh sửa trong một stash nào đó lên branch hiện tại đang sử dụng:
---------------
$ git stash apply 
//hoặc
$ git stash pop
---------------
`
        ],
        href: '',
    },
    {
        title: `git log`,
        data: [
`
git log: xem tất cả những commit trước đó được sắp xếp theo thứ tự commit mới nhất đến cũ nhất.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git log
---------------
`
        ],
        href: '',
    },
    {
        title: `git shortlog`,
        data: [
`
git shortlog: xem git log dài quá thì xem git shortlog cho gọn

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git shortlog
---------------
`
        ],
        href: '',
    },
    {
        title: `git show`,
        data: [
`
git show: dùng để xem thông tin chi tiết của một commit bất kỳ.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git show <commit_hash>

//commit_hash là phần hash trong dòng "commit <hash>"
// vd: 
// commit 4421ef26c6fba0c2796fe01dae038bbc77e57fad    => 4421ef26c6fba0c2796fe01dae038bbc77e57fad là commit_hash
// Author: trinhcuong297 <trinhcuong297@gmail.com>
// Date:   Tue Mar 22 18:34:54 2022 +0700
//     learnPost2
---------------
`
        ],
        href: '',
    },
    {
        title: `git rm`,
        data: [
`
git rm: xoá một file từ code base.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git rm <your_file_name>
---------------
`
        ],
        href: '',
    },
    {
        title: `git merge`,
        data: [
`
git merge:(hợp nhánh) cho phép các bạn đưa mã nguồn và những thay đổi trên một branch khác vào branch hiện tại.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git merge <branch_name>

//Câu lệnh này sẽ kết hợp những thay đổi trên branch có tên là <branch_name> vào branch hiện tại.
//vd bạn đứng ở branch master và chạy "git merge a" thì git sẽ kết hợp những thay đổi ở nhánh a vào nhánh master
---------------
`
        ],
        href: '',
    },
    {
        title: `git rebase`,
        data: [
`
git rebase: tương tự như git merge, nó sẽ kết hợp 1 branch vào branch hiện tại nhưng git rebase sẽ ghi lại tất cả các lịch sử commit.

Bạn nên sử dụng lệnh Git rebase khi bạn có nhiều branch riêng dùng để hợp nhất thành một branch duy nhất. 
Và nó sẽ làm cho lịch sử commit trở nên tuyến tính và dễ truy vết hơn.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git rebase <base>
---------------
`
        ],
        href: '',
    },
    {
        title: `git diff`,
        data: [
`
git diff: so sánh một file code nào thay đổi những gì trước khi commit

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
//Để kiểm tra sự khác nhau giữa mã nguồn hiện tại đã được thay đổi so với local repo:
$ git diff HEAD <filename>

//So sánh 2 branch
$ git diff HEAD <filename>
---------------
`
        ],
        href: '',
    },
    {
        title: `git clean`,
        data: [
`
git clean: xoá sạch các nội dung được thay đổi với các untracked files (chưa được theo dõi) với lệnh git clean.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git clean
---------------
`
        ],
        href: '',
    },
    {
        title: `git help`,
        data: [
`
git help: Giúp bạn xem tất cả các thông tin cần thiết để sử dụng git.

VD-------------         (Lưu ý, macOS mới có $, window thì bỏ qua $)
$ git help
---------------
`
        ],
        href: '',
    },
  ]
  
  export default cdata
  