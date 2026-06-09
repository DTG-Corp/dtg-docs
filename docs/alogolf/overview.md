---
sidebar_position: 1
---

# 🏌️ ALOGOFL — Tổng quan

## Giới thiệu

**ALOGOFL** là nền tảng kết nối cộng đồng golf — đặt sân, theo dõi điểm, kết bạn, thi đấu.

## Tính năng chính

- ✅ Đặt sân golf trực tuyến
- ✅ Theo dõi điểm và handicap
- ✅ Kết nối bạn chơi golf
- ✅ Tổ chức giải đấu
- ✅ Thống kê thành tích

## Kiến trúc

```mermaid
graph TD
    A[Mobile App] --> B[API Gateway]
    B --> C[Auth Service]
    B --> D[Booking Service]
    B --> E[Score Service]
    B --> F[Social Service]
    C --> G[(User DB)]
    D --> H[(Booking DB)]
    E --> I[(Score DB)]
```

## Công nghệ

- **Frontend:** React Native / Flutter
- **Backend:** Go / Gin
- **Database:** PostgreSQL + Redis
- **Realtime:** WebSocket
