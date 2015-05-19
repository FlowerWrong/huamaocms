class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :index, :show, to: :read
    alias_action :create, :read, :update, :destroy, to: :crud

    if user.has_role? :admin
      can :manage, :all
    elsif user.has_role? :normal
      can :read, :all
    else
      can :read, Home
    end
  end
end
