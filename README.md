# 🚀 Mert Bayır - Portfolio Website

Modern ve şık bir kişisel portfolio websitesi. Dark theme, responsive tasarım ve interaktif animasyonlarla donatılmış profesyonel bir sunum.

## ✨ Özellikler

### 🎨 Tasarım
- **Modern Dark Theme** - Şık ve göz yormayan karanlık tema
- **Gradient Efektler** - Çarpıcı renk geçişleri ve görsel efektler
- **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- **Clean Layout** - Minimal ve düzenli tasarım anlayışı

### 🚀 Animasyonlar & Efektler
- **Typing Animasyonu** - Hero bölümünde dinamik rol yazma efekti
- **Smooth Scrolling** - Akıcı sayfa geçişleri
- **Parallax Effect** - Derinlik hissi veren paralaks efekt
- **Loading Screen** - Profesyonel yükleme animasyonu
- **Custom Cursor** - Özel fare imleci (masaüstü)
- **Hover Animations** - İnteraktif hover efektleri

### 📱 İnteraktif Özellikler
- **Mobile Navigation** - Responsive hamburger menü
- **Active Section Tracking** - Aktif bölüm vurgulama
- **Skill Bar Animations** - Yetenek barlarında animasyon
- **Form Validation** - Gelişmiş form doğrulama
- **Scroll to Top** - Sayfa başına dönüş butonu
- **Easter Eggs** - Gizli özellikler (Konami Code)

### 🛠️ Teknik Özellikler
- **Semantic HTML5** - SEO dostu yapı
- **CSS Grid & Flexbox** - Modern layout teknikleri
- **CSS Custom Properties** - Değişken kullanımı
- **Intersection Observer API** - Performanslı animasyonlar
- **Progressive Web App** - Offline çalışma desteği
- **Performance Monitoring** - Yükleme hızı takibi

## 📁 Dosya Yapısı

```
portfolio-site/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri
├── script.js           # JavaScript dosyası
└── README.md           # Proje dokümantasyonu
```

## 📂 Bölümler

### 🏠 Hero Section
- Dinamik typing animasyonu
- Sosyal medya linkleri
- CTA butonları
- Scroll indicator

### 👤 About Section
- Kişisel tanıtım
- İstatistikler
- Profil fotoğrafı alanı

### 💼 Skills Section
- Frontend, Backend ve Araçlar kategorileri
- Animasyonlu beceri barları
- İkon ve progres göstergeleri

### 🎯 Experience Section
- Timeline formatında deneyimler
- Eğitim bilgileri
- Teknoloji etiketleri

### 💻 Projects Section
- Proje kartları
- Teknoloji stack bilgileri
- Live demo ve Github linkleri

### 📬 Contact Section
- İletişim formu
- Form validasyonu
- İletişim bilgileri
- Sosyal medya linkleri

## 🚀 Kurulum

1. **Projeyi İndirin**
   ```bash
   git clone https://github.com/kullaniciadi/portfolio-site.git
   cd portfolio-site
   ```

2. **Tarayıcıda Açın**
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

3. **Local Server (Opsiyonel)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

## ⚙️ Özelleştirme

### 🎨 Renk Teması Değiştirme

`style.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #667eea;        /* Ana renk */
    --secondary-color: #764ba2;      /* İkincil renk */
    --accent-color: #f093fb;         /* Vurgu rengi */
    --bg-primary: #0a0e27;           /* Ana arka plan */
    --bg-secondary: #1a1e3a;         /* İkincil arka plan */
}
```

### 📝 İçerik Güncelleme

1. **Kişisel Bilgiler**: `index.html` dosyasındaki hero ve about bölümlerini düzenleyin
2. **Beceriler**: Skills bölümündeki teknolojileri ve yüzdeleri güncelleyin
3. **Deneyimler**: Experience bölümündeki timeline öğelerini değiştirin
4. **Projeler**: Projects bölümüne kendi projelerinizi ekleyin
5. **İletişim**: Contact bölümündeki bilgileri güncelleyin

### 🔧 Typing Animasyonu

`script.js` dosyasındaki `roles` dizisini düzenleyin:

```javascript
const roles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    // Kendi rollerinizi ekleyin
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 479px ve altı

## 🌟 Performans Optimizasyonları

- **Lazy Loading** - Görseller için geciktirilmiş yükleme
- **CSS Minification** - CSS dosya boyutu optimizasyonu
- **JavaScript Throttling** - Scroll event optimizasyonu
- **Font Loading** - Google Fonts optimizasyonu
- **Image Optimization** - Görsel formatları optimizasyonu

## 🔧 Geliştirme

### Önerilen Araçlar
- **VS Code** - Kod editörü
- **Live Server Extension** - Canlı önizleme
- **Prettier** - Kod formatlama
- **ESLint** - JavaScript hata kontrolü

### Test Checklist
- ✅ Mobile responsive test
- ✅ Cross-browser compatibility
- ✅ Form validation test
- ✅ Animation performance
- ✅ Loading speed test

## 🚀 Deployment

### GitHub Pages
1. Repository'yi GitHub'a push edin
2. Settings > Pages bölümüne gidin
3. Source olarak "Deploy from a branch" seçin
4. Main branch'i seçin ve Save edin

### Netlify
1. `netlify.com` sitesine gidin
2. "New site from Git" seçin
3. Repository'yi bağlayın
4. Otomatik deploy başlatın

### Vercel
1. `vercel.com` sitesine gidin
2. "Import Project" seçin
3. GitHub repository'sini bağlayın
4. Deploy edin

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📞 İletişim

- **Email**: mert.bayir@email.com
- **LinkedIn**: [linkedin.com/in/mertbayir](https://linkedin.com/in/mertbayir)
- **GitHub**: [github.com/mertbayir](https://github.com/mertbayir)
- **Website**: [mertbayir.dev](https://mertbayir.dev)

## 🙏 Teşekkürler

- **Font Awesome** - İkonlar için
- **Google Fonts** - Poppins font için
- **CSS Gradient** - Gradient ilhamı için

---

<div align="center">
    <p>⭐ Projeyi beğendiyseniz star vermeyi unutmayın!</p>
    <p>Made with ❤️ by Mert Bayır</p>
</div>