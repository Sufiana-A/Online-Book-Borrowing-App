# 📚 Online Book Borrowing App


[![Python](https://img.shields.io/badge/language-Python-blue.svg?logo=python\&logoColor=white)]()
[![Flask](https://img.shields.io/badge/framework-Flask-black.svg?logo=flask\&logoColor=white)]()
[![Express](https://img.shields.io/badge/framework-Express.js-000000.svg?logo=express\&logoColor=white)]()
[![PHP](https://img.shields.io/badge/language-PHP-777BB4.svg?logo=php\&logoColor=white)]()
[![Lumen](https://img.shields.io/badge/framework-Lumen-E74430.svg?logo=laravel\&logoColor=white)]()
[![MongoDB](https://img.shields.io/badge/database-MongoDB_Cloud-47A248.svg?logo=mongodb\&logoColor=white)]()
[![MySQL](https://img.shields.io/badge/database-MySQL-4479A1.svg?logo=mysql\&logoColor=white)]()
[![SQLite](https://img.shields.io/badge/database-SQLite-003B57.svg?logo=sqlite\&logoColor=white)]()

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

---

## Overview

**Online Book Borrowing App** adalah proyek belajar dengan arsitektur **microservices**.
Aplikasi ini menyediakan layanan katalog buku, peminjaman, ulasan, dan notifikasi.
Masing-masing service menggunakan stack & database berbeda, lalu diintegrasikan via **API Gateway (MainApp)** berbasis Flask.

### Features

- **📚 Book Catalogue** – lihat detail buku (judul, penulis, genre, stok, tahun).
- **📖 Borrow Service** – pinjam buku & cek jumlah peminjaman.
- **⭐ Review Service** – tampilkan ulasan pengguna.
- **🔔 Notification Service** – pengingat pengembalian untuk user.

---

## Architecture

```
 ┌───────────────────────┐       ┌────────────────────────────┐
 │   Book Catalogue      │──────▶│                            │
 │ (Express + MongoDB)   │       │                            │
 └───────────────────────┘       │                            │
                                 │                            │
 ┌───────────────────────┐       │        API Gateway         │────▶ Client
 │        Borrow         │──────▶│    (Flask MainApp 5006)    │
 │    (Lumen + MySQL)    │       │                            │
 └───────────────────────┘       │                            │
                                 │                            │
 ┌───────────────────────┐       │                            │
 │        Review         │──────▶│                            │
 │   (Flask + SQLite)    │       └────────────────────────────┘
 └───────────────────────┘

 ┌───────────────────────┐
 │     Notification      │
 │ (Express + MongoDB)   │
 └───────────────────────┘
```

> **Port mapping sesuai `MainApp/app.py`:**
> Catalogue `5001`, Borrow `5002`, Review `5003`, Notification `5004`, Gateway `5006`.

---

## Getting Started

### Prerequisites

* **Languages & Frameworks**

  * Python 3.8+ + Flask
  * Node.js + Express.js
  * PHP + Lumen

* **Databases**

  * MongoDB Cloud (Catalogue, Notification)
  * MySQL (Borrow)
  * SQLite (Review)

* **Tools**

  * pip / virtualenv
  * npm
  * Composer

### Installation

* Clone repo:

  ```bash
  git clone https://github.com/Sufiana-A/online-book-borrowing-app.git
  cd online-book-borrowing-app
  ```

* Flask service (Review, MainApp):

  ```bash
  pip install flask requests sqlite3
  ```

* Express.js services (KatalogBuku, NotificationApp):

  ```bash
  npm install express mongoose
  ```

* Lumen service (BorrowApp):

  ```bash
  composer install
  ```

---

## Usage

Jalankan tiap service sesuai folder & port:

```bash
# Book Catalogue Service (Express.js + MongoDB, port 5001)
cd KatalogBuku
node app.js

# Borrow Service (Lumen + MySQL, port 5002)
cd BorrowApp
php -S localhost:5002 -t public

# Review Service (Flask + SQLite, port 5003)
cd ReviewApp
python reviews.py

# Notification Service (Express.js + MongoDB, port 5004)
cd NotificationApp
node app.js

# API Gateway / MainApp (Flask, port 5006)
cd MainApp
python app.py
```

Akses integrasi via browser:
`http://127.0.0.1:5006/`

---

## API Endpoints

* **Book Catalogue (5001)**

  * `GET /catalogues/{bookId}` – detail buku

* **Borrow (5002)**

  * `POST /borrow-book/{userId}/{bookId}` – pinjam buku
  * `GET /borrow/quantity/{bookId}` – total qty dipinjam
  * `GET /borrow/quantity/user/{userId}` – pinjaman user

* **Review (5003)**

  * `GET /reviews/{bookId}` – ulasan buku

* **Notification (5004)**

  * `GET /notifications/{userId}` – notifikasi user

* **MainApp Gateway (5006)**

  * `GET /bookInformation/{bookId}` – gabungkan katalog, qty, review
  * `GET /userInformation/{userId}` – gabungkan pinjaman & notifikasi

---
