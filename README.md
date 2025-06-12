# 💎 Hexa Vision

Hexa Vision is a luxury jewelry showcase website built using React and Next.js. It reflects elegance, structured design, and dynamic content. Each page highlights a specific product category or brand feature, providing a smooth and responsive user experience. 
## 👨‍👩‍👦 Team Members

- Nirvair Singh Sahi  
- Mete Unal  
- Amir Alipour  
- Khant Ti KYi  
- Tien Trung Ngo

---

## 📁 Project Structure

```
hexavision-master/
│
├── components/           # Reusable UI components like cards, headers, etc.
├── pages/                # Each route/page for the app (Home, Watches, etc.)
├── public/               # Static assets (images, logos)
│   └── Nirvair_Singh_Sahi_Images/
├── styles/               # CSS files and modules
├── README.md             # This file
├── package.json          # Dependency management
└── next.config.js        # Next.js config
```

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (v16 or higher)
- npm

### 🛠️ Installation Steps
```bash
git clone https://github.com/your-username/hexavision.git
cd hexavision
npm install
```

### ▶️ Running the App
```bash
npm run dev
```

Then visit `http://localhost:3000` in your browser.

---

## 🌐 Deployed Site

https://hexavision.vercel.app/

---

## 🧰 Tech Stack

- **Framework:** Next.js (React)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS Modules & Global CSS
- **API Integration:** useEffect & useState Hooks
- **Design:** Responsive layout with modern visuals

---

## 📄 Pages Overview

| Page              | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Home**          | Main landing page with navbar and preview of all categories                |
| **The House**     | Brand's history and mission, styled with text and image layout             |
| **High Jewelry**  | Jewelry items mapped dynamically using `useState`                          |
| **Engagement**    | Engagement and bridal collection display                                   |
| **Watches**       | Showcase of luxury watches using card layout                               |
| **Services**      | Brand services and post-purchase support                                   |

---

## 📬 EmailJS Integration

We integrated **EmailJS** in the Services page to allow users to send emails directly from the frontend. A form is displayed where users can submit their name, email, and message. When the form is submitted, `emailjs.sendForm()` is triggered with our service ID, template ID, and public key.

**Steps Used:**
1. Installed EmailJS with `npm install @emailjs/browser`
2. Imported EmailJS and used a `ref` for the form
3. Configured `emailjs.sendForm()` in the `onSubmit` handler
4. Success and error messages are logged in the console

**Code Example:**
```js
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_id', 'template_id', formRef.current, 'public_key')
    .then((result) => {
        console.log('Email sent:', result.text);
    }, (error) => {
        console.error('Failed to send email:', error.text);
    });
};
```

---

## 🌐 APIs Used

| API Name                         | Endpoint Example                                                    | Purpose                                           |
|----------------------------------|----------------------------------------------------------------------|---------------------------------------------------|
| Fake Store API                   | https://fakestoreapi.com/products/category/jewelery                 | Fetch sample jewelry data                        |
| JSONPlaceholder                  | https://jsonplaceholder.typicode.com/posts                          | Dummy blog/review content                        |
| Unsplash API                     | https://api.unsplash.com/search/photos?query=watches                | Fetch royalty-free watch images                 |
| Lorem Picsum                     | https://picsum.photos/200/300                                       | Placeholder/filler images for layout             |
| CoinGecko API                    | https://api.coingecko.com/api/v3/simple/price?ids=gold&vs_currencies=usd | Simulate dynamic gold price display             |
| WeatherAPI (for Services ideas) | https://api.weatherapi.com/v1/current.json?q=Toronto&key=API_KEY    | Hypothetical use: Display weather-dependent services |
| Genderize API                    | https://api.genderize.io/?name=taylor                               | Hypothetical use in personalization              |
| EmailJS API                      | https://www.emailjs.com/                                            | Send emails directly from frontend contact forms |

---

## 🔄 Sample API Fetch (React `useEffect` Example)

```js
useEffect(() => {
  fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('API Error:', err));
}, []);
```

---


## 📌 Key Features

- Responsive layout using Flexbox and CSS Modules
- Dynamic card rendering with `useState`
- Modular components for maintainability
- Mobile-friendly header/menu with SVG icons
- Multiple public APIs used for testing and enhancement

---

## 🔐 License

This project was developed as part of the **CPAN-144 Final Project Assignment** at Humber College. It demonstrates advanced front-end development concepts using React and Next.js.

---



