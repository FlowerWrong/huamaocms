require 'ffaker'

FactoryGirl.define do
  factory :setting do
    slug FFaker::Name.name
    config_key FFaker::Name.name
    config_value FFaker::Name.name
    destroyable false
    editable false
  end

end
