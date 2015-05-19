require 'rails_helper'
require "cancan/matchers"

describe Ability, :type => :model do
  describe "abilities" do

    context "Admin user can manage all" do
      let(:user) { FactoryGirl.create(:admin) }
      subject(:ability) { Ability.new(user) }

      it { is_expected.to be_able_to(:manage, User) }
    end

    context "Normal user can read all" do
      let(:user) { FactoryGirl.create(:normal) }
      subject(:ability) { Ability.new(user) }

      it { is_expected.to be_able_to(:read, Menu) }
    end
  end
end
