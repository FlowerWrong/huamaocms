require 'ffaker'

# FactoryGirl 嵌套
# 回调函数 before after
# association

# mock and stub

FactoryGirl.define do
  factory :menu do
    name FFaker::Name.name
    enname FFaker::Name.name
    menu_type FFaker::Name.name
    menu_url FFaker::Internet.http_url
    menu_order 1
    view_template :main
    layout_template :site

    factory :invalid_name_menu do
      name nil
    end

    factory :invalid_url_menu do
      menu_url nil
    end

    factory :invalid_type_menu do
      menu_type nil
    end

    factory :new_menu do
      name 'menu to test eq'
    end
  end
end
