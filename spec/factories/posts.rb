FactoryGirl.define do
  factory :post do
    title FFaker::Name.name
    summary FFaker::Name.name
    content FFaker::Name.name
    user_id 1
    author FFaker::Name.name
    img FFaker::Name.name
    publish_time "2015-05-09 17:33:09"
    stick false
    can_comment true
    is_recommend false
    is_published true
  end

end
