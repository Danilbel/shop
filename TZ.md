# Сутності

### Користувач (User)
- `id (Long)` - ідентифікатор користувача
- `name (String)` - ім'я користувача
- `surname (String)` - прізвище користувача
- `email (String)` - пошта користувача
- `phone (String)` - телефон
- `password (String)` - пароль користувача
- `address (Address)` - адреса користувача

### Адреса (Address)
- `id (Long)` - ідентифікатор адреси
- `country (String)` - країна
- `city (String)` - місто
- `street (String)` - вулиця
- `index (String)` - пошт. індекс

### Товар (Product)
- `id (Long)` - ідентифікатор товару
- `name (String)` - назва товару
- `price (BigDecimal)` - ціна товару
- `photo (List)` - фото товару
- `discount (Double)` - знижка на товар
- `quantity (Long)` - кількість товару
- `productDescription (ProductDescription)` - опис товару

### Опис товару (ProductDescription)
- `id (Long)` - ідентифікатор опису товару
- `rating (Rating)` - рейтинг товару
- `description (String)` - опис товару
- `additionalDescription (AdditionalProductDescription)` - додатковий опис товару

### Рейтинг (Rating)
- `id (Long)` - ідентифікатор рейтингу
- `reviews (List<Rewiew>)` - список відгуків
- `average (???)` - середній рейтинг

### Відгук (Review)
- `id (Long)` - ідентифікатор відгуку
- `user (User)` - користувач, який залишив відгук
- `date (Date)` - дата відгуку
- `grade (???)` - оцінка відгуку (зірочки)
- `description (String)` - опис відгуку

### Додаткова інформація опису товару (AdditionalProductDescription)
- `id (Long)` - ідентифікатор додаткового опису товару
- `weight (Double)` - вага товару
- `size (Integer)` - розмір товару
- `color (???)` - колір товару
- `material (???)` - матеріал товару

### Замовлення (Order)
- `id (Long)` - ідентифікатор замовлення
- `date (Date)` - дата замовлення
- `payment (???)` - спосіб оплати
- `orderProducts (List<OrderProduct>)` - список продуктів замовлення

### Продукт замовлення (OrderProduct)
- `id (Long)` - ідентифікатор продукту замовлення
- `product (Product)` - товар
- `quantity (Long)` - кількість товару
- `price (BigDecimal)` - ціна товару
- `discount (Double)` - знижка на товар

# Планування

### 1. Авторизація
- User
- Отримання токену
- Сторінка входу

### 2. Реєстрація
- User: email, password, confirmPassword
- Сторінка реєстрації

### 3. Admin. Перегляд користувачів
- User
- Додати СуперАдміна (може редагувати інших адмінів)
- Сторінка з користувачами
- Надання прав адміністратора

