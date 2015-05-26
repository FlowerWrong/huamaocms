puts '====' * 20
puts 'start seeds'
time_start = Time.now

# ------------------------------------------
root1 = Menu.create!(
  name: '菜单1',
  menu_url: '/posts/1',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
root2 = Menu.create!(
  name: '菜单2',
  menu_url: '/posts/2',
  menu_type: :main,
  beautify_url: 'about',
  view_template: :main,
  layout_template: :site
)
root3 = Menu.create!(
  name: '菜单3',
  menu_url: '/posts/3',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)

child1 = Menu.create!(
  name: '菜单1-1',
  menu_url: '/posts/1-1',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child1.move_to_child_of root1

child2 = Menu.create!(
  name: '菜单1-2',
  menu_url: '/posts/1-2',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child2.move_to_child_of root1

child3 = Menu.create!(
  name: '菜单1-3',
  menu_url: '/posts/1-3',
  menu_type: :main,
  view_template: :main,
  layout_template: :site
)
child3.move_to_child_of root1
# ------------------------------------------

# ------------------------------------------
admin_user = User.new(
  :email                 => 'admin@thecampus.cc',
  :password              => '12345678',
  :password_confirmation => '12345678'
)
admin_user.skip_confirmation!
admin_user.save!
admin_user.add_role :admin

normal_user = User.new(
  email: 'normal@thecampus.cc',
  password: '12345678',
  password_confirmation: '12345678'
)
normal_user.skip_confirmation!
normal_user.save!
normal_user.add_role :normal

# ------------------------------------------

# ------------------------------------------

cats = [
  {name: '学壹新闻', slug: '学壹新闻'},
  {name: '学壹职业', slug: '学壹职业'},
  {name: '学壹生活', slug: '学壹生活'},
  {name: '校友圈', slug: '校友圈'},
  {name: '工具', slug: '工具'}
]

children_of_1 = [
  {name: '逸仙人物', slug: '逸仙人物'},
  {name: '视野', slug: '视野'},
  {name: '图书馆', slug: '图书馆'},
  {name: '一周红棉路', slug: '一周红棉路'},
  {name: '校园新闻', slug: '校园新闻'},
  {name: '高校讲座', slug: '高校讲座'},
  {name: '赛事资讯', slug: '赛事资讯'}
]

children_of_2 = [
  {name: '名企宣讲会', slug: '名企宣讲会'},
  {name: '兼职', slug: '兼职'},
  {name: '实习', slug: '实习'},
  {name: '外语', slug: '外语'}
]

children_of_3 = [
  {name: '舌尖上的大学城', slug: '舌尖上的大学城'}
]

root_cat_1 = Category.new(cats[0])
root_cat_1.save!

root_cat_2 = Category.new(cats[1])
root_cat_2.save!

root_cat_3 = Category.new(cats[2])
root_cat_3.save!

root_cat_4 = Category.new(cats[3])
root_cat_4.save!

root_cat_5 = Category.new(cats[4])
root_cat_5.save!

children_of_1.each do |cat|
  child = Category.new(cat)
  child.save
  child.move_to_child_of root_cat_1
end

children_of_2.each do |cat|
  child = Category.new(cat)
  child.save
  child.move_to_child_of root_cat_2
end

children_of_3.each do |cat|
  child = Category.new(cat)
  child.save
  child.move_to_child_of root_cat_3
end
# ------------------------------------------

# ------------------------------------------

Setting.create!(
  slug: 'logo',
  config_key: 'logo',
  config_value: '/angle/app/img/logo.png',
  destroyable: false,
  editable: true
)
# ------------------------------------------


# ------------------------------------------

1.upto(50).each do |i|
  Post.create!(
    title: "title#{i}",
    summary: "summary#{i}",
    content: "content#{i}",
    user_id: 1,
    author: '杨浮生',
    publish_time: Time.now
  )
end

# ------------------------------------------

# ------------------------------------------

1.upto(5).each do |i|
  FriendLink.create!(
    name: "FriendLink#{i}",
    f_url: "/pages/#{i}",
    f_logo: "/pages/#{i}.png",
    f_group_id: 1
  )
end

# ------------------------------------------
time_end = Time.now
time = time_end - time_start
puts time.to_s
puts 'end seeds'
puts '====' * 20
