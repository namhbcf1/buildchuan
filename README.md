# BUILD PC TRUONG PHAT COMPUTER

Trang web xây dựng cấu hình máy tính theo nhu cầu và ngân sách.

## Jekyll Theme for GitHub Pages

This project now uses Jekyll with the Minima theme for GitHub Pages. The theme provides a clean, responsive design that works well on all devices including iOS.

### Features

- Dark mode support
- Responsive design for all devices
- Custom color scheme with primary (blue) and secondary (orange) colors
- SEO optimized
- Fast loading

## Development Setup

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Installation

1. Install Jekyll and Bundler:

```
gem install jekyll bundler
```

2. Clone the repository:

```
git clone https://github.com/yourusername/webbuild.git
cd webbuild
```

3. Install dependencies:

```
bundle install
```

4. Run the development server:

```
bundle exec jekyll serve
```

5. Open your browser and go to `http://localhost:4000`

## Deploying to GitHub Pages

1. Push your changes to the `main` branch:

```
git add .
git commit -m "Update website"
git push origin main
```

2. GitHub Pages will automatically build and deploy your site.

## Cấu trúc dự án

```
webbuild/
├── _config.yml          # Jekyll configuration
├── _includes/           # Reusable components
│   ├── header.html      # Site header
│   ├── footer.html      # Site footer
│   └── compatibility-fixes.html # JavaScript compatibility fixes
├── _layouts/            # Page layouts
│   └── default.html     # Default layout
├── _sass/               # SCSS files
├── assets/              # Static assets
│   └── css/
│       └── main.scss    # Main stylesheet
├── buildsan.js          # File JavaScript chính, xử lý logic ứng dụng
├── buildsan.css         # CSS cho trang xây dựng cấu hình
├── components-data.js   # Dữ liệu linh kiện
├── enums.js             # Enumerations
├── index.html           # Trang chính để xây dựng cấu hình PC
├── images/              # Thư mục chứa ảnh
└── Gemfile              # Ruby dependencies
```

## Cách hoạt động

1. Khi truy cập trang web, người dùng sẽ thấy giao diện xây dựng cấu hình
2. Dữ liệu linh kiện (CPU, Mainboard, VGA...) được tách thành các file riêng biệt
3. File `buildsan.js` import dữ liệu và xử lý logic chính của ứng dụng
4. Người dùng chọn loại CPU, game, và ngân sách (kéo thanh trượt)
5. Hệ thống sẽ tự động chọn cấu hình phù hợp dựa trên các thông số đã chọn

## Customizing the Theme

You can customize the Jekyll theme by:

1. Editing `_config.yml` to change site-wide settings
2. Modifying files in `_includes` to change header, footer, etc.
3. Editing `assets/css/main.scss` to customize styles
4. Creating new layouts in `_layouts` directory

## Lưu ý

- Các file dữ liệu và cấu hình được tổ chức theo module ES6
- Trang web sử dụng JavaScript hiện đại với các tính năng import/export
- Jekyll được cấu hình để hoạt động với GitHub Pages

## Cách thêm cấu hình mới

### Thêm cấu hình cho game mới

1. Tạo file `js/configs/intel/[tên_game].js` và `js/configs/amd/[tên_game].js`
2. Định nghĩa các cấu hình theo ngân sách (3M, 4M, 5M...)
3. Cập nhật `js/configs/index.js` để import cấu hình mới

### Thêm linh kiện mới

1. Cập nhật file tương ứng trong thư mục `js/data/`
2. Không cần thay đổi code logic, các linh kiện mới sẽ tự động được hiển thị trong dropdown
