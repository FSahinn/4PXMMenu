#4Piksel Mobil Menü (4PXMMenu)

4PXMMenu ile mobil sitelerinize daha iyi bir menü ekleyebilirsiniz. Şu anda beta aşamasındadır, geliştirildikçe burayı güncellemeye çalışacağım.

###Kurulum:

```
dpxmmenu.css dosyasını CSS klasörünüzün içine dpxmmenu.js dosyasını ise JS klasörünüzün içine atın.
```

Header'a eklemeniz gereken kod:

```
<link rel="stylesheet" href="css/dpxmmenu.css">
```

Footer'a eklemeniz gereken kod:

```
<script src="js/dpxmmenu.js"></script>
```

Bunları yaptıktan sonra Header'da `body` tagının hemen altına aşağıdaki kodları ekleyin.

```
    <div class="mobmenu">
        <ul class="menu">
            <li><a href="#">Menü</a></li>
            <li><a href="#">Menü 2</a></li>
            <li><a href="#">Menü 3</a></li>
            <li><a href="#">Menü 4</a></li>
            <li><a href="#">Menü 5</a></li>
        </ul>
    </div>
    
    <header id="ust">
        <div id="menuac">
            <span></span>
        </div>
    </header>    
```

Ve işlem tamamdır. Mobil menünüzü kullanabilirsiniz.
