require 'ffaker'

FactoryGirl.define do
  factory :friend_link do
    name FFaker::Name.name
    f_url FFaker::Internet.http_url
    f_logo FFaker::Name.name
    f_group_id 1
  end
end
