## [Rails deploy tips](https://medium.com/@rdsubhas/ruby-in-production-lessons-learned-36d7ab726d99)

* Use nodejs+execjs for asset compilation, instead of therubyracer+libv8.
* Make sure /etc/gemrc contains `gem: --no-ri --no-rdoc`
