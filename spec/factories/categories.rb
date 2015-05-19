require 'ffaker'

FactoryGirl.define do
  factory :category do
    name FFaker::Name.name
    slug FFaker::Name.name

    factory :category2 do
      name FFaker::Name.name
      slug FFaker::Name.name
    end
  end
end
