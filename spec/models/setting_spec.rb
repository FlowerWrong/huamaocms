require 'rails_helper'

RSpec.describe Setting, type: :model do

  it { should validate_presence_of(:slug) }
  it { should validate_uniqueness_of(:slug) }

  it { should validate_presence_of(:config_key) }
  it { should validate_uniqueness_of(:config_key) }

  it { should validate_presence_of(:config_value) }
  it { should validate_uniqueness_of(:config_value) }
end
