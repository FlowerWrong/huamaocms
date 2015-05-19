require 'ffaker'

FactoryGirl.define do
  factory :user do
    email { FFaker::Internet.email }
    password '12345678'
    password_confirmation '12345678'
    confirmed_at Date.today

    factory :admin do
      after(:create) {|user| user.add_role(:admin)}
    end

    factory :normal do
      after(:create) {|user| user.add_role(:normal)}
    end
  end
end
