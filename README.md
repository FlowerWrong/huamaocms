## Readme

#### Start

```ruby
cp config/database.yml.example config/database.yml
cp config/secrets.yml.example config/secrets.yml

bundle install
npm install
```

#### Install bower

```ruby
npm install -g bower
```

#### Check code

```ruby
brakeman
bundle exec rails_best_practices .
rubocop -R
```

#### In Production: FIXME ActionController::RoutingError (No route matches [GET] "/assets/application-

```ruby
# production.rb
config.serve_static_files = true
```

#### Turbolinks work with jquery

```ruby
# 1. data-no-turbolink
# 2.
$(document).on "page:change", ->
  alert "page has loaded!"
```

#### Issue

```ruby
```

#### Rspec rails stack

1. [setup-rails-41-spring-rspec-and-guard](http://girders.org/blog/2014/02/06/setup-rails-41-spring-rspec-and-guard/)
2. [setting-up-bdd-stack-on-a-new-rails-4-application](https://semaphoreci.com/blog/2013/08/14/setting-up-bdd-stack-on-a-new-rails-4-application.html)
3. [how-we-test-rails-applications](https://robots.thoughtbot.com/how-we-test-rails-applications)
4. [starting-a-new-rails-4-2-project-with-postgresql-and-rspec](http://sudo-science.com/starting-a-new-rails-4-2-project-with-postgresql-and-rspec/)
5. [robust-integration-testing-in-rails-4-with-rspec-capybara-and-selenium](http://stefan.haflidason.com/robust-integration-testing-in-rails-4-with-rspec-capybara-and-selenium/)
6. [Automated Rails testing with Capybara and PhantomJS](http://mikec.me/posts/11)
7. [cucumber-capybara-poltergeist-rockstar-bdd-combo](http://shashikantjagtap.net/cucumber-capybara-poltergeist-rockstar-bdd-combo/)

#### backup

```ruby

```
