require 'rails_helper'

RSpec.describe FriendLink, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }

  it { should validate_presence_of(:f_url) }
  it { should validate_uniqueness_of(:f_url) }
end
